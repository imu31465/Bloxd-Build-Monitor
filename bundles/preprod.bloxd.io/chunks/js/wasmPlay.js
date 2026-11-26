export const id = 75;
export const ids = [75, 130, 131, 152];
export const modules = {
  40687: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => AH,
      f: () => rH
    });
    const AH = "The world isn't loaded, so no blocks can be seen.",
      rH = "The world isn't loaded, so nothing in it can be seen."
  },
  5139: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => EH
    });
    var AH = LH(15),
      rH = LH(18),
      SH = LH(1241),
      hH = LH(3105);
    const tH = 3e4,
      zH = 1e3;

    function CH() {
      return "visible" === document.visibilityState && "inGame" === AH.c.get("gameState") && (0, SH.A)()
    }

    function EH(HH, BH) {
      (0, hH.s)() || function(HH, BH, LH) {
        let AH = 0;
        const rH = setInterval((() => {
          BH() && (AH += zH, AH >= HH && (clearInterval(rH), LH()))
        }), zH)
      }(tH, CH, (() => {
        BH().then((() => {
          HH(`saved for the player after ${tH/1e3} s of play`), (0, hH.B)(), rH.k.AX("chat", {
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
  34832: (HH, BH, LH) => {
    function AH(HH, BH) {
      return 0 === HH.length ? 0 : HH[Math.min(HH.length - 1, Math.floor(BH * HH.length))]
    }

    function rH(HH) {
      return HH.toFixed(1)
    }
    LH.d(BH, {
      d: () => rH,
      g: () => AH
    })
  },
  38825: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => CH,
      f: () => EH,
      g: () => PH,
      k: () => vH,
      n: () => xH
    });
    var AH = LH(5139),
      rH = LH(34832),
      SH = LH(3105);
    const hH = 20,
      tH = ["totalMs", "slotMs", "workerMs", "applyMs", "ahead", "inFlight", "aX", "jobMs"];

    function zH(HH) {
      return [...HH].sort(((HH, BH) => HH - BH))
    }
    const CH = [];

    function EH(HH, BH, LH) {
      return `${HH},${BH},${LH}`
    }
    class XH {
      constructor() {
        this.pending = new Map, this.jobs = new Map, this.edits = [], this.nextEdit = 0, this.reported = 0, this.windowStart = performance.now(), this.frames = 0, this.lastFrameAt = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      edit(HH, BH) {
        var LH;
        const AH = null !== (LH = this.pending.get(HH)) && void 0 !== LH ? LH : [];
        AH.push({
          editAt: BH,
          meshJobId: 0
        }), this.pending.set(HH, AH)
      }
      frame(HH) {
        this.lastFrameAt > 0 && (this.maxFrameMs = Math.max(this.maxFrameMs, HH - this.lastFrameAt)), this.lastFrameAt = HH, this.frames++, HH - this.windowStart >= 1e3 && this.summarise(HH)
      }
      sent(HH, BH, LH, AH, rH, SH, hH) {
        this.jobs.set(BH, {
          sentAt: hH,
          receivedAt: 0,
          ahead: LH,
          inFlight: AH,
          aX: rH,
          jobMs: 0
        }), this.jobsSent++, this.maxAhead = Math.max(this.maxAhead, LH), this.maxCapacity = Math.max(this.maxCapacity, rH);
        for (const zH of null !== (tH = this.pending.get(HH)) && void 0 !== tH ? tH : []) {
          var tH;
          SH.includes(zH.meshJobId) || (zH.meshJobId = BH)
        }
      }
      received(HH, BH, LH) {
        const AH = this.jobs.get(HH);
        void 0 !== AH && (this.roundTrips.push(LH - AH.sentAt), AH.receivedAt = LH, AH.jobMs = BH)
      }
      failed(HH) {
        this.jobs.delete(HH)
      }
      reassign(HH, BH, LH) {
        this.jobs.delete(BH);
        for (const rH of null !== (AH = this.pending.get(HH)) && void 0 !== AH ? AH : []) {
          var AH;
          rH.meshJobId === BH && (rH.meshJobId = LH)
        }
      }
      applied(HH, BH, LH) {
        const AH = this.jobs.get(BH);
        this.jobs.delete(BH), void 0 !== AH && this.show(HH, AH, LH, (HH => HH.meshJobId === BH))
      }
      emptied(HH, BH) {
        const LH = {
          sentAt: BH,
          receivedAt: BH,
          ahead: 0,
          inFlight: 0,
          aX: 0,
          jobMs: 0
        };
        this.show(HH, LH, BH, (() => !0))
      }
      show(HH, BH, LH, AH) {
        const rH = this.pending.get(HH);
        if (!rH) return;
        const SH = rH.filter((rH => !AH(rH) || (this.record(HH, rH.editAt, BH, LH), !1)));
        SH.length > 0 ? this.pending.set(HH, SH) : this.pending.delete(HH)
      }
      XX(HH) {
        this.reported += HH, this === YH && this.reported >= hH && null !== uH && (uH(), uH = null)
      }
      record(HH, BH, LH, AH) {
        const rH = {
          totalMs: AH - BH,
          slotMs: LH.sentAt - BH,
          workerMs: LH.receivedAt - LH.sentAt,
          applyMs: AH - LH.receivedAt,
          ahead: LH.ahead,
          inFlight: LH.inFlight,
          aX: LH.aX,
          jobMs: LH.jobMs
        };
        if (this.edits[this.nextEdit] = rH, this.nextEdit = (this.nextEdit + 1) % 500, this.windowEdits.push(rH.totalMs), this.XX(1), rH.totalMs < 100 || ++this.outliers > 5) return;
        const hH = HH => Math.round(HH);
        (0, SH.j)("remesh", `slow edit (${HH}) shown in ${hH(rH.totalMs)} ms: slot ${hH(rH.slotMs)}, worker ${hH(rH.workerMs)} (${rH.ahead} ahead, ${rH.inFlight}/${rH.aX} in flight; job ${hH(rH.jobMs)}), apply ${hH(rH.applyMs)}`)
      }
      summarise(HH) {
        const BH = (HH - this.windowStart) / 1e3;
        for (const [LH, AH] of this.pending) {
          const BH = AH.filter((BH => HH - BH.editAt <= 1e4));
          this.gaveUp += AH.length - BH.length, this.XX(AH.length - BH.length), BH.length > 0 ? this.pending.set(LH, BH) : this.pending.delete(LH)
        }
        for (const [LH, AH] of this.jobs) HH - AH.sentAt > (AH.receivedAt > 0 ? 1e4 : 6e4) && this.jobs.delete(LH);
        if (this.jobsSent > 0 || this.roundTrips.length > 0 || this.windowEdits.length > 0 || this.gaveUp > 0) {
          const HH = zH(this.roundTrips),
            LH = zH(this.windowEdits),
            AH = Math.max(0, this.outliers - 5);
          (0, SH.j)("remesh", `${Math.round(this.frames/BH)} fps (longest ${Math.round(this.maxFrameMs)} ms) | ${this.jobsSent} jobs sent, up to ${this.maxAhead} ahead on a worker, capacity ${this.maxCapacity} | round trip p50 ${Math.round((0,rH.g)(HH,.5))} max ${Math.round((0,rH.g)(HH,1))} ms | ${LH.length} edits shown, p50 ${Math.round((0,rH.g)(LH,.5))} max ${Math.round((0,rH.g)(LH,1))} ms${AH>0?`, ${AH} more slow`:""}${this.gaveUp>0?`, ${this.gaveUp} never shown`:""}`)
        }
        this.windowStart = HH, this.frames = 0, this.maxFrameMs = 0, this.jobsSent = 0, this.maxAhead = 0, this.maxCapacity = 0, this.roundTrips = [], this.windowEdits = [], this.outliers = 0, this.gaveUp = 0
      }
      stats() {
        const HH = tH.map((HH => {
          const BH = zH(this.edits.map((BH => BH[HH])));
          return `${HH}: p50 ${Math.round((0,rH.g)(BH,.5))} p90 ${Math.round((0,rH.g)(BH,.9))} max ${Math.round((0,rH.g)(BH,1))}`
        }));
        return [`${this.edits.length} edits`, ...HH].join("\n")
      }
      dump() {
        const HH = this.edits.map((HH => tH.map((BH => Math.round(10 * HH[BH]) / 10)).join(",")));
        return [this.stats(), tH.join(","), ...HH].join("\n")
      }
    }
    class GH {
      constructor(HH, BH) {
        this.log = HH, this.bG = BH
      }
      edit(HH, BH, LH) {
        const [AH, rH, SH] = this.bG.cX.hrH(HH, BH, LH), hH = this.bG.cX.WQ.MQ(AH, rH, SH);
        hH && hH.uQ && this.log.edit(EH(AH, rH, SH), performance.now())
      }
      sent(HH, BH, LH, AH, rH) {
        this.log.sent(EH(HH.i, HH.j, HH.k), BH, LH, AH, rH, CH, performance.now())
      }
      received(HH) {
        this.log.received(HH.meshJobId, HH.jobMs, performance.now())
      }
      failed(HH) {
        this.log.failed(HH)
      }
      applied(HH, BH) {
        this.log.applied(EH(HH.i, HH.j, HH.k), BH, performance.now())
      }
    }
    let YH = null,
      uH = null,
      QH = !1,
      WH = null;

    function MH() {
      return new Promise((HH => {
        null !== YH && YH.reported >= hH ? HH() : uH = HH
      }))
    }

    function xH() {
      const HH = new XH;
      return YH = HH, (0, SH.i)("remesh", (() => HH.dump())), (0, SH.d)("remeshStats", (() => {
        console.log(HH.stats())
      })), QH || (QH = !0, (0, AH.c)((HH => {
        (0, SH.j)("remesh", HH)
      }), MH)), HH
    }

    function vH(HH) {
      const BH = xH();
      WH = new GH(BH, HH), HH.vU.meshProbe = WH, HH.on("beforeRender", (() => {
        BH.frame(performance.now())
      }))
    }

    function PH(HH, BH, LH) {
      var AH;
      null === (AH = WH) || void 0 === AH || AH.edit(HH, BH, LH)
    }
  },
  34861: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => AH
    });
    const AH = new Set(["chunkBorders"])
  },
  37659: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => rH,
      d: () => AH
    });
    const AH = 3,
      rH = {
        recording: !1,
        clipping: !1,
        hasClipBuffer: !1,
        seconds: 0
      }
  },
  35018: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => hH,
      h: () => rH,
      j: () => EH
    });
    var AH = LH(1565);

    function rH(HH) {
      var BH;
      return {
        ...hH.store,
        yaw: hH.store.yaw + (null !== (BH = AH.c[HH].previewYaw) && void 0 !== BH ? BH : 0)
      }
    }
    const SH = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      hH = {
        player: SH,
        store: {
          ...SH,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function tH(HH, BH) {
      HH instanceof Promise ? HH.then(BH).catch((HH => {
        console.error("Couldn't open the preview", HH)
      })) : BH(HH)
    }
    class zH {
      constructor(HH) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, tH(HH, (HH => {
          this.closed ? HH.close() : (this.opened = HH, null !== this.size && HH.resize(this.size.width, this.size.height), null !== this.view && HH.show(this.view))
        }))
      }
      show(HH) {
        var BH;
        this.view = HH, null === (BH = this.opened) || void 0 === BH || BH.show(HH)
      }
      resize(HH, BH) {
        var LH;
        this.size = {
          width: HH,
          height: BH
        }, null === (LH = this.opened) || void 0 === LH || LH.resize(HH, BH)
      }
      close() {
        var HH;
        this.closed = !0, null === (HH = this.opened) || void 0 === HH || HH.close(), this.opened = null
      }
    }
    class CH {
      constructor(HH) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(HH).then((HH => HH.ready)), tH(HH, (HH => {
          this.closed ? HH.close() : (this.opened = HH, null !== this.size && HH.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var HH, BH;
        return null !== (HH = null === (BH = this.opened) || void 0 === BH ? void 0 : BH.isReady()) && void 0 !== HH && HH
      }
      setCosmetic(HH, BH) {
        var LH;
        null === (LH = this.opened) || void 0 === LH || LH.setCosmetic(HH, BH)
      }
      playEmote(HH) {
        var BH;
        null === (BH = this.opened) || void 0 === BH || BH.playEmote(HH)
      }
      setOrbit(HH) {
        var BH;
        null === (BH = this.opened) || void 0 === BH || BH.setOrbit(HH)
      }
      resetCamera() {
        var HH;
        null === (HH = this.opened) || void 0 === HH || HH.resetCamera()
      }
      async untilDrawn(HH) {
        var BH;
        await this.ready, await (null === (BH = this.opened) || void 0 === BH ? void 0 : BH.untilDrawn(HH))
      }
      resize(HH, BH) {
        var LH;
        this.size = {
          width: HH,
          height: BH
        }, null === (LH = this.opened) || void 0 === LH || LH.resize(HH, BH)
      }
      close() {
        var HH;
        this.closed = !0, null === (HH = this.opened) || void 0 === HH || HH.close(), this.opened = null
      }
    }
    const EH = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(HH) {
        this.host = HH
      }
      setDefaultHost(HH) {
        this.makeDefault = HH
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(HH) {
        return new zH(this.current().openMob(HH))
      }
      openPet(HH) {
        return new zH(this.current().openPet(HH))
      }
      openMobLineup(HH) {
        return new zH(this.current().openMobLineup(HH))
      }
      openCharacter(HH, BH) {
        return new CH(this.current().openCharacter(HH, BH))
      }
    }
  },
  5523: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => AH.e,
      e: () => rH,
      g: () => AH.l
    });
    var AH = LH(5531);
    const rH = [!1, !0].flatMap((HH => ["terrain", "liquid", "model"].map((BH => ({
      strict: HH,
      program: BH
    })))))
  },
  40182: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      ShaderPackPage: () => zH,
      harnessShaderPackMode: () => GH,
      setHarnessUrlShaderPack: () => XH,
      shaderPackPage: () => EH
    });
    var AH = LH(81),
      rH = LH(30),
      SH = (LH(3835), LH(5523), LH(3831)),
      hH = LH(7209);
    LH(7179);
    const tH = {
      status: "none"
    };
    class zH {
      constructor() {
        this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
      }
      preload() {
        if (null === this.stored) {
          if ((0, SH.k)(AH.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), CH().then((HH => {
            HH && rH.e.removeItem(SH.d)
          })), this.stored;
          this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
        }
        return this.stored
      }
      prefetchHint() {
        return (0, SH.h)(AH.featureFlags.settings.canUseShaderPacks)
      }
      async loadActive() {
        const HH = await this.load();
        return "active" === HH.status ? HH.pack : null
      }
      load() {
        return this.pagePack ??= this.read().catch((HH => (console.error("Failed to load the shader pack", HH), tH))).then((HH => (this.resolved ??= HH, HH))), this.pagePack
      }
      hasNone() {
        var HH;
        return "none" === (null === (HH = this.resolved) || void 0 === HH ? void 0 : HH.status)
      }
      block(HH) {
        this.resolved = {
          status: "blocked",
          messageKey: HH,
          variants: null
        }, this.pagePack = Promise.resolve(this.resolved)
      }
      compiler() {
        return this.compiling ??= Promise.all([LH.e(89), LH.e(149), LH.e(156)]).then((() => LH(45221))).then((HH => (HH.prefetchCompiler(), HH))), this.compiling
      }
      async readStored() {
        const HH = await CH();
        return HH && this.compiler().then((HH => HH.reconcileHint())).catch((HH => {
          console.error("Failed to correct the shader pack hint", HH)
        })), HH
      }
      async read() {
        const HH = await this.preload();
        return HH ? (await this.compiler()).compilePagePack(HH) : tH
      }
    }
    async function CH() {
      if (!(0, SH.m)(AH.featureFlags.settings.canUseShaderPacks)) return null;
      try {
        const HH = await (0, hH.e)(!0);
        return HH || rH.e.setItem(SH.d, !1), HH
      } catch (HH) {
        return console.error("Failed to read the stored shader pack", HH), rH.e.removeItem(SH.d), null
      }
    }
    const EH = new zH;

    function XH(HH, BH) {}

    function GH() {
      return null
    }
  },
  40229: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => XH,
      g: () => GH
    });
    var AH = LH(152),
      rH = LH(171),
      SH = LH(1491),
      hH = LH(1826),
      tH = LH(1502),
      zH = LH(37345),
      CH = LH(656),
      EH = LH(40182);

    function XH(HH) {
      (0, hH.reportClientError)("matchmake_failed", HH, AH.h[AH.h.SHADER_PACK])
    }
    async function GH(HH, BH) {
      var LH;
      const AH = null === (LH = await EH.shaderPackPage.preload()) || void 0 === LH ? void 0 : LH.listing,
        hH = (0, zH.e)();
      AH && null !== hH && await tH.d.reportShaderPackSession(HH, {
        packId: AH.packId,
        sourceHash: AH.sourceHash,
        game: (0, SH.f)(BH, rH.u, "other"),
        playSessionId: hH,
        visitSessionId: (0, CH.c)()
      })
    }
  },
  7209: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => rH,
      e: () => SH
    });
    var AH = LH(30);
    const rH = "shaderPack";
    async function SH() {
      var HH;
      let BH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (HH = await AH.c.getItem(rH, BH)) && void 0 !== HH ? HH : null
    }
  },
  7179: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      loadShaderPackTextures: () => hH,
      shaderPackTextures: () => tH
    });
    var AH = LH(5531);
    let rH = null,
      SH = null;

    function hH() {
      return SH ??= Promise.all([LH.e(84), LH.e(206)]).then((() => LH(41802))).then((HH => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: BH,
          textureNameToIndex: LH,
          textureAnimationData: SH
        } = HH;
        return rH ??= (0, AH.f)(LH, SH, BH), rH
      })), SH
    }

    function tH() {
      if (null === rH) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return rH
    }
  },
  39957: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => tH
    });
    var AH = LH(18),
      rH = LH(1241),
      SH = LH(3296);
    const hH = "Reconnecting";
    class tH {
      constructor(HH) {
        this.hooks = HH, this.graceMs = 0, this.sessionBased = !1, this.controller = void 0, this.frozen = !1, this.stopped = !1, this.listening = !1, this.ended = !1, this.retryNow = () => {
          "visible" === document.visibilityState && this.controller.retryNow()
        }, this.onPageHide = HH => {
          HH.persisted || this.leave()
        }, this.controller = new SH.b((BH => HH.reconnect(BH)), {
          isSessionLive: () => !this.ended && HH.isLive(),
          onPhaseChanged: HH => {
            this.onPhaseChanged(HH)
          },
          onReconnected: BH => {
            HH.onReconnected(BH)
          },
          onGaveUp: BH => {
            !this.ended && HH.isLive() && HH.onGaveUp(this.sessionBased, BH)
          }
        })
      }
      onInitialInfo(HH, BH) {
        this.graceMs = HH, this.sessionBased = BH
      }
      canHoldSeat() {
        return this.graceMs > 0 && !this.ended
      }
      isResuming() {
        return "connected" !== this.controller.phase
      }
      onConnectionLost(HH) {
        this.ended || this.controller.onConnectionLost(HH, this.graceMs)
      }
      onResuming() {
        this.ended || this.controller.onResuming()
      }
      onResumed() {
        this.controller.stop()
      }
      leave() {
        const HH = this.isResuming() && !this.controller.awaitingResumeOnRoom,
          BH = this.controller.heldToken;
        this.end(), HH && "" !== BH && this.hooks.releaseSeat(BH)
      }
      end() {
        this.ended = !0, this.controller.stop()
      }
      onPhaseChanged(HH) {
        const BH = (0, SH.m)(HH);
        BH !== this.stopped && (this.stopped = BH, this.hooks.freeze(BH));
        const LH = "frozen" === HH || "resuming" === HH && this.frozen;
        LH && !this.frozen ? (0, rH.x)(hH, {
          overridesPause: !0
        }) : !LH && this.frozen && (0, rH.t)(hH), this.frozen = LH, this.setListening("connected" !== HH), AH.k.AX(SH.i, LH ? "frozen" : HH)
      }
      setListening(HH) {
        HH !== this.listening && (this.listening = HH, HH ? (window.addEventListener("online", this.retryNow), document.addEventListener("visibilitychange", this.retryNow), window.addEventListener("pagehide", this.onPageHide)) : (window.removeEventListener("online", this.retryNow), document.removeEventListener("visibilitychange", this.retryNow), window.removeEventListener("pagehide", this.onPageHide)))
      }
    }
  },
  39959: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => AH
    });
    class AH {
      constructor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.onSilent = HH, this.now = BH, this.lastHeardAt = void 0, this.resumedAt = void 0, this.lastCheckAt = void 0, this.wasVisible = "visible" === document.visibilityState, this.interval = void 0, this.check = () => {
          const HH = this.now(),
            BH = HH - this.lastCheckAt <= 2e3;
          this.lastCheckAt = HH;
          const LH = "visible" === document.visibilityState;
          !LH || BH && this.wasVisible || (this.resumedAt = HH), this.wasVisible = LH, LH && HH - this.lastHeardAt > 12e3 && HH - this.resumedAt > 2e3 && this.onSilent()
        }, this.lastHeardAt = BH(), this.resumedAt = this.lastHeardAt, this.lastCheckAt = this.lastHeardAt, this.interval = setInterval(this.check, 1e3), document.addEventListener("visibilitychange", this.check), window.addEventListener("online", this.check)
      }
      heard() {
        this.lastHeardAt = this.now()
      }
      dispose() {
        clearInterval(this.interval), document.removeEventListener("visibilitychange", this.check), window.removeEventListener("online", this.check)
      }
    }
  },
  34929: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => SH
    });
    var AH = LH(1260);

    function rH() {
      var HH, BH;
      return null !== (HH = null === (BH = screen.orientation) || void 0 === BH ? void 0 : BH.type) && void 0 !== HH ? HH : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const SH = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && rH() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = rH(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, AH.TQ)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const HH of this.resizers) HH()
          }
        }), 1e3)
      }
      heldSizer(HH) {
        let BH = !1;
        return () => {
          if (BH && this.isHeld()) return null;
          const LH = HH();
          return BH ||= null !== LH, LH
        }
      }
      onRelease(HH) {
        return this.resizers.add(HH), () => {
          this.resizers.delete(HH)
        }
      }
    }
  },
  40219: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => rH
    });
    let AH = !1;
    async function rH(HH, BH) {
      if (!AH) {
        AH = !0;
        try {
          const [{
            reloadBloxd: AH
          }, {
            NotificationProvider: rH
          }] = await Promise.all([Promise.resolve().then((() => LH(1789))), Promise.resolve().then((() => LH(1352)))]);
          if (!HH || !0 === await rH.showPromptPopup({
              title: "Unsaved changes",
              subtitle: "Exit and lose your unsaved changes?",
              confirmText: "Exit",
              destructive: !0,
              cancelText: "Cancel",
              unlockPointerKey: "replayExitUnsavedChanges"
            }).getResult()) return void AH(BH)
        } catch (rH) {
          console.error("Leaving the replay failed", rH)
        }
        AH = !1
      }
    }
  },
  39975: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => CH,
      g: () => EH
    });
    var AH = LH(1751),
      rH = LH(176),
      SH = LH(1714),
      hH = LH(1842),
      tH = LH(1131),
      zH = LH(1070);
    async function CH(HH, BH) {
      return function(HH) {
        return "object" === typeof HH && null !== HH && HH.code === rH.e.VpnIp.code
      }(BH) && function(HH) {
        return SH.b.supports("appCheck") && HH.isLoggedIn() && !HH.hasTriedAppAttestation()
      }(HH) && await async function(HH) {
        try {
          const {
            token: BH
          } = await (0, hH.d)(), {
            "3PSIDMCPP": LH
          } = await (0, zH.postJsonWithMetricsCookiesAndJsonResponse)(`${tH.clientSideServerUrls.indexUrl}/index/app-attestation`, {
            appCheckToken: BH
          }, {
            retries: 0
          }, HH.getMetricsCookies());
          return HH.setAppAttestedAuthJwt(LH), !0
        } catch (BH) {
          return BH instanceof AH.d && "failed" === BH.code ? (console.warn("The app couldn't get an App Check token:", BH), HH.markAppAttestationTried()) : console.error("Failed to attest the app:", BH), !1
        }
      }(HH)
    }
    async function EH(HH, BH) {
      try {
        return await BH()
      } catch (LH) {
        if (!await CH(HH, LH)) throw LH
      }
      return BH()
    }
  },
  42292: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => tH,
      f: () => zH
    });
    var AH = LH(1807);
    const rH = 33177600,
      SH = 3e4;
    let hH = !1;

    function tH(HH, BH, LH) {
      let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        scale: tH = 1,
        type: zH = "image/png",
        quality: CH
      } = AH;
      return HH.VX() ? hH ? Promise.reject(new Error("A screenshot is already being taken")) : (hH = !0, new Promise(((AH, EH) => {
        let XH, GH = 2,
          YH = null;
        const uH = () => {
          var BH;
          hH = !1, null === (BH = YH) || void 0 === BH || BH(), clearTimeout(XH);
          try {
            HH.restoreSize()
          } catch (LH) {
            console.error("A screenshot couldn't size the canvas back", LH)
          }
        };
        XH = setTimeout((() => {
          uH(), EH(new Error("No frame was drawn to capture"))
        }), SH);
        try {
          const AH = function(HH, BH, LH) {
            const AH = Math.max(1, HH),
              SH = Math.max(1, BH),
              hH = Math.min(1, LH / Math.max(AH, SH), Math.sqrt(rH / (AH * SH)));
            return {
              width: Math.max(1, Math.floor(AH * hH)),
              height: Math.max(1, Math.floor(SH * hH))
            }
          }(BH, LH, HH.maxTextureSize);
          HH.resize(AH.width, AH.height, tH * AH.width / Math.max(1, BH))
        } catch (QH) {
          return uH(), void EH(QH)
        }
        YH = HH.onFrameDrawn((() => {
          if (GH--, GH > 0) return;
          const {
            canvas: BH
          } = HH, LH = {
            width: BH.width,
            height: BH.height
          };
          try {
            BH.toBlob((HH => {
              HH ? AH({
                blob: HH,
                ...LH
              }) : EH(new Error("The canvas gave no image"))
            }), zH, CH)
          } catch (QH) {
            EH(QH)
          } finally {
            uH()
          }
        }))
      }))) : Promise.reject(new Error("Screenshots need a game to be running"))
    }
    async function zH(HH, BH, LH) {
      try {
        const rH = await tH(HH, BH, LH);
        (0, AH.e)(rH.blob, `bloxd-screenshot-${rH.width}x${rH.height}-${Date.now()}.png`)
      } catch (rH) {
        console.error("Error taking screenshot:", rH)
      }
    }
  },
  38536: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => AH
    });
    const AH = {
      noaReady: null,
      chunkRequested: null,
      beforeServerListeners: null,
      wasmNetReady: null
    }
  },
  39967: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => GH,
      f: () => EH
    });
    var AH = LH(176),
      rH = LH(1885),
      SH = LH(1148),
      hH = LH(9627);
    const tH = [250, 500, 1e3, 2e3, 1250],
      zH = 406;

    function CH(HH) {
      if ("object" !== typeof HH || null === HH) return !1;
      const {
        code: BH,
        message: LH
      } = HH, rH = AH.e.duplicateLobbyNameError;
      return (BH === rH.code || BH === zH) && (LH === rH.text || LH === rH.text + AH.n)
    }
    async function EH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : rH.d;
      for (let rH = 0;; rH++) {
        let hH;
        (0, SH.t)(BH);
        try {
          return await HH()
        } catch (AH) {
          if (hH = tH[rH], void 0 === hH || !CH(AH)) throw AH
        }
        await LH(hH, BH)
      }
    }
    const XH = new Set([AH.e.duplicateLobbyNameError.code, AH.e.lobbyCantBeCreated.code, AH.e.roomDisposedEarlyError.code, AH.e.roomDisposedLateError.code, AH.e.serverRoomLimitReached.code]);

    function GH(HH) {
      if (CH(HH)) return !0;
      const BH = (0, hH.e)(HH);
      return "number" === typeof BH && XH.has(BH)
    }
  },
  9615: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => CH,
      g: () => zH
    });
    var AH = LH(317);

    function rH(HH) {
      if (!HH.startsWith("{")) return HH;
      let BH;
      try {
        BH = JSON.parse(HH)
      } catch {
        return HH
      }
      return function(HH) {
        if (null === (0, AH.Pe)(HH)) return !1;
        const {
          params: BH
        } = HH;
        return void 0 === BH || "object" === typeof BH && null !== BH && Object.values(BH).every((HH => "string" === typeof HH))
      }(BH) ? BH : HH
    }
    var SH = LH(1123),
      hH = LH(1194);

    function tH(HH) {
      return (0, SH.u)(hH.g.get().getCurrentLanguageCode(), HH.translationKey, HH.params)
    }

    function zH(HH) {
      const BH = rH(HH);
      return "string" === typeof BH ? BH : tH(BH)
    }

    function CH(HH) {
      const BH = rH(HH);
      return "string" === typeof BH ? BH : tH({
        translationKey: "moderation:kicked",
        params: {
          reason: tH(BH)
        }
      })
    }
  },
  40131: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => hH
    });
    var AH = LH(304),
      rH = LH(120),
      SH = LH(30);

    function hH() {
      SH.e.setItem(AH.Qb, SH.e.getItem(AH.Qb) + 1), (0, rH.is99NightsCrazyGamesBundle)() && SH.e.setItem(AH.Nb, SH.e.getItem(AH.Nb) + 1)
    }
  },
  37341: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => TH,
      i: () => UH
    });
    var AH = LH(1005),
      rH = LH(186),
      SH = LH(314),
      hH = LH(625),
      tH = LH(317),
      zH = LH(1011),
      CH = LH(642),
      EH = LH(673),
      XH = LH(4928),
      GH = LH(81),
      YH = LH(120),
      uH = LH(1789),
      QH = LH(101),
      WH = LH(37345),
      MH = LH(30),
      xH = LH(656),
      vH = LH(628),
      PH = LH(37347);

    function TH() {
      var HH, BH;
      return [...null !== (HH = navigator.languages) && void 0 !== HH ? HH : [null !== (BH = navigator.language) && void 0 !== BH ? BH : "none"], "en-Gb"]
    }

    function UH(HH, BH, LH, UH, VH) {
      const OH = (0, AH.l)(BH) ? (0, AH.q)(BH) : null,
        bH = HH.isLoggedIn() && void 0 !== (0, rH.d)(SH.o, YH.siteUsed) ? (0, vH.e)() : null,
        kH = {
          cookies: (0, uH.getAllCookiesForGameNameWithVariation)(BH),
          isMobile: (0, GH.isMobile)(),
          isUsingCustomGameTexturePack: null !== OH && VH(OH),
          generalCookies: {
            joinDiscord: !!MH.e.getItem("DiscordPressed"),
            newGo: XH.c,
            ...HH.getMetricsCookies(),
            trafficCode: UH,
            compliance: GH.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, GH.getBrowserName)(),
            version: (0, GH.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, GH.getPlatformType)(),
            deviceType: (0, QH.d)()
          },
          isLoggedIn: HH.isLoggedIn(),
          lobbyName: LH,
          languages: TH(),
          version: hH.d,
          siteUsed: YH.siteUsed,
          subsiteUsed: YH.subsiteUsed,
          playSessionId: (0, WH.i)(BH),
          visitSessionId: (0, xH.c)(),
          clientReason: CH.A.reason,
          budgetBasis: (0, PH.f)(),
          ...null !== EH.r && {
            diagClaim: EH.r.claimId
          },
          ...null !== bH && {
            webGpuLoss: bH
          }
        };
      return null !== OH && (0, tH.Ic)(OH) ? (kH.lobbyName = (0, AH.h)(OH, (0, AH.m)(BH), LH), {
        roomName: `classic_${zH.i}`,
        joinOptions: kH
      }) : {
        roomName: BH,
        joinOptions: kH
      }
    }
  },
  40009: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => YH,
      g: () => GH
    });
    const AH = "ue:",
      rH = ["keydown", "keyup", "mousedown", "mouseup", "pointerdown", "pointerup", "touchstart", "touchend"],
      SH = "[A-Za-z0-9]{1,24}",
      hH = 15,
      tH = new RegExp(`^${SH}$`);
    new RegExp(`^${AH}(${[...rH,"other"].join("|")}):(?:n|k(${SH})|b(0|[1-9][0-9]?)):([01])([01])$`);

    function zH(HH, BH, LH, SH, zH) {
      const CH = "string" === typeof HH && rH.includes(HH) ? HH : "other";
      let EH = "n";
      return "string" === typeof BH ? EH = tH.test(BH) ? `k${BH}` : "n" : "number" === typeof LH && Number.isInteger(LH) && LH >= 0 && LH <= hH && (EH = `b${LH}`), `${AH}${CH}:${EH}:${SH?1:0}${zH?1:0}`
    }
    var CH = LH(1696),
      EH = LH(1797);
    let XH = null;

    function GH(HH) {
      const BH = HH instanceof Element && HH !== document.body && HH !== document.documentElement && !(0, CH.q)(HH) && !HH.closest("#root");
      return {
        editable: (0, EH.e)(HH),
        outsideView: BH
      }
    }

    function YH(HH) {
      return XH ??= function(HH) {
        try {
          const {
            editable: BH,
            outsideView: LH
          } = GH(HH.target), AH = HH;
          return zH(HH.type, AH.code, AH.button, BH, LH)
        } catch {
          return zH(null, null, null, !1, !1)
        }
      }(HH), XH
    }
  },
  41981: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => zH
    });
    var AH = LH(40687),
      rH = LH(37659);

    function SH(HH) {
      return {
        current: () => HH,
        watch: () => () => {}
      }
    }

    function hH() {}
    const tH = Object.freeze([0, 0, 0]),
      zH = {
        states: {
          health: SH({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: SH({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: SH({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: SH({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: SH({}),
          creativeVisibility: SH({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: SH(null),
          heldItemAim: SH({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: SH(!1),
          gliderBoostFuel: SH(0),
          flight: SH({
            canFly: !1,
            flying: !1
          }),
          crafting: SH({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: SH({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: SH({}),
          fullInventory: SH(!1),
          crosshairTarget: SH({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: SH(!0),
          freeCamera: SH({
            allowed: !1,
            movesFly: !1
          }),
          replay: SH(null),
          replayEdits: SH(null),
          replayRecorder: SH(rH.c),
          replayVideoExporting: SH(!1)
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
          selectHotbarSlot: hH,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: hH,
          setInventoryOpen: hH,
          changeIronChestPasskey: hH,
          dragReplayCamera: hH,
          applyTemporaryThirdPerson: hH,
          holdEmoteWheel: hH,
          recordFlyingMiddleText: hH,
          focusCrafting: hH,
          craftRecipe: () => ({
            ZC: 0,
            fE: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: hH,
          setShopOpen: hH,
          buyShopItem: hH,
          lobbyManage: hH,
          sendChatMessage: () => !1,
          ignorePlayer: hH,
          reportPlayer: hH,
          reportWorldCodeChat: hH,
          requestDiscordReportKey: hH,
          reportLobbyOrGame: hH,
          playEmote: hH,
          updateMyCosmetic: hH,
          writeOnBoard: hH,
          writeBook: hH,
          writeNameTag: hH,
          setCustomLobbyBlock: hH,
          openIronChest: hH,
          sendCodeCollab: hH,
          clickCodeBlock: hH,
          bindCustomButtonKeys: hH,
          pressCustomButton: hH,
          moveReplayFreecam: hH,
          holdReplayFreecamVertical: hH,
          respawn: hH,
          wakeUp: hH,
          requestLeaderboard: hH,
          completeTask: hH,
          setServerCookie: hH,
          answerUiRequest: hH,
          chooseRewardedAd: hH,
          setCameraZoom: hH,
          setFreeCameraMovesFly: hH,
          setBlockHighlight: hH,
          setCrosshairInteractPrompt: hH,
          setLookSensitivity: hH,
          replayAction: hH,
          setReplayPlaying: hH,
          seekReplay: hH,
          setReplayCameraMode: hH,
          syncReplayCameraMode: hH,
          setReplayCameraKeyframe: hH,
          moveReplayCameraKeyframe: hH,
          deleteReplayCameraKeyframes: hH,
          setReplayPlaybackMark: hH,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: hH,
          exportReplayVideo: hH,
          toggleRecording: hH,
          saveClip: hH,
          setRecorderPrefs: hH,
          setReplayViewerOpen: hH
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => AH.d,
          worldCodeAiGameState: () => AH.f
        },
        lookups: {
          localPos: () => tH,
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
  42290: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => hH,
      g: () => SH
    });
    var AH = LH(2227),
      rH = LH(1005);

    function SH(HH, BH) {
      return null !== HH.gameSource && (0, AH.k)(BH, HH.gameSource)
    }

    function hH(HH, BH) {
      if (null === HH.gameSource || "" === HH.gameSource || null === BH) return !0;
      const LH = (0, rH.l)(BH) ? (0, rH.q)(BH) : null;
      return null !== LH && SH(HH, LH)
    }
  },
  42262: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => tH
    });
    var AH = LH(609),
      rH = LH(42271),
      SH = LH(42142);
    async function hH(HH) {
      const BH = await (0, rH.g)({
        Helmet: LH(38841),
        Chestplate: LH(38846),
        Gauntlets: LH(38861),
        Leggings: LH(38853),
        Boots: LH(38857)
      } [AH.c[HH]]);
      try {
        return (0, SH.n)(BH)
      } finally {
        BH.close()
      }
    }
    const tH = new class {
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hH,
          BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rH.i;
        this.decode = HH, this.register = BH, this.decoded = new Map
      }
      warm() {
        for (let HH = 0; HH < AH.c.length; HH++) this.part(HH).catch((BH => {
          console.warn(`The grayscale armour ${AH.c[HH]} image didn't decode ahead of use`, BH)
        }))
      }
      async load(HH, BH) {
        const {
          width: LH,
          height: SH,
          pixels: hH
        } = await this.part(HH), tH = new ImageData(function(HH, BH) {
          const LH = new Uint8ClampedArray(HH.length);
          for (let AH = 0; AH < HH.length; AH += 4) LH[AH] = Math.round(HH[AH] * BH[0] / 255), LH[AH + 1] = Math.round(HH[AH + 1] * BH[1] / 255), LH[AH + 2] = Math.round(HH[AH + 2] * BH[2] / 255), LH[AH + 3] = HH[AH + 3];
          return LH
        }(hH, function(HH) {
          return [HH >>> 16 & 255, HH >>> 8 & 255, 255 & HH]
        }(BH)), LH, SH);
        let zH;
        try {
          zH = await createImageBitmap(tH, {
            premultiplyAlpha: "none",
            colorSpaceConversion: "none"
          })
        } catch (CH) {
          throw new rH.b("decode", `grayscale armour ${AH.c[HH]}`, {
            cause: CH
          })
        }
        return {
          id: this.register(zH),
          width: LH,
          height: SH
        }
      }
      part(HH) {
        const BH = this.decoded.get(HH);
        if (void 0 !== BH) return BH;
        const LH = this.decode(HH).catch((BH => {
          throw this.decoded.delete(HH), BH instanceof rH.b ? BH : new rH.b("decode", `grayscale armour ${AH.c[HH]}`, {
            cause: BH
          })
        }));
        return this.decoded.set(HH, LH), LH
      }
    }
  },
  42259: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => hH,
      f: () => WH,
      i: () => EH,
      k: () => XH,
      m: () => QH
    });
    var AH = LH(42125),
      rH = LH(42262),
      SH = LH(42271);
    const hH = 396,
      tH = 1,
      zH = 2,
      CH = 3,
      EH = {
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
      XH = {
        File: 0,
        Item: 1
      },
      GH = 0,
      YH = 1,
      uH = 2;

    function QH(HH) {
      const BH = (0, AH.i)();
      BH.catch((() => {}));
      let rH = null;
      return {
        glbUrl: HH,
        lifeformAtlasUrl: async HH => (await BH).lifeformAtlasUrl(HH),
        armourAtlasUrl: async () => (await LH.e(228).then((() => LH(35079)))).armourAtlasUrl,
        capeUrl: async HH => (await BH).capeUrl(HH),
        attachmentImageUrl: async HH => (await BH).attachmentImageUrl(HH),
        blockImageUrl: async HH => (await BH).blockImageUrl(HH),
        groupAtlasUrl: async HH => (await BH).groupAtlasUrl(HH),
        particleTextureUrl: async HH => (await BH).particleTextureUrl(HH),
        particleItemUrl: async HH => (rH ??= LH.e(44).then((() => LH(54619))).catch((HH => {
          throw rH = null, HH
        })), (await rH).particleItemUrl(HH))
      }
    }
    class WH {
      constructor(HH, BH) {
        var LH, hH, tH, zH;
        let CH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.sources = HH, this.onFailure = BH, this.loading = new Map, this.glbImages = new Map, this.glbWrittenImages = new Map, this.glbTakenCount = new Map, this.answered = new Map, this.ready = [], this.load = void 0, this.release = void 0, this.fetchFile = void 0, this.greyscaleArmour = void 0, this.Mu = !1, this.load = null !== (LH = CH.load) && void 0 !== LH ? LH : (HH, BH) => (0, SH.h)(HH, CH.fetchImage, BH), this.release = null !== (hH = CH.release) && void 0 !== hH ? hH : SH.k, this.fetchFile = null !== (tH = CH.fetchFile) && void 0 !== tH ? tH : HH => (0, AH.g)(HH), this.greyscaleArmour = null !== (zH = CH.greyscaleArmour) && void 0 !== zH ? zH : rH.e
      }
      get waiting() {
        return this.ready.length
      }
      get inFlight() {
        return this.loading.size
      }
      glbWritten(HH, BH) {
        this.glbWrittenImages.set(HH, VH(BH))
      }
      glbTaken(HH, BH) {
        const LH = this.glbWrittenImages.get(HH);
        this.glbWrittenImages.delete(HH), BH && this.setGlbImages(HH, void 0 !== LH && LH.length > 0 ? LH : void 0)
      }
      setGlbImages(HH, BH) {
        var LH;
        this.glbTakenCount.set(HH, (null !== (LH = this.glbTakenCount.get(HH)) && void 0 !== LH ? LH : 0) + 1), void 0 === BH ? this.glbImages.delete(HH) : this.glbImages.set(HH, BH);
        const AH = [];
        for (const {
            key: rH
          }
          of this.loading.values()) rH.kind === EH.Glb && rH.word === HH && AH.push(rH);
        for (let rH = this.ready.length - 1; rH >= 0; rH--) {
          const {
            key: BH,
            id: LH
          } = this.ready[rH];
          BH.kind === EH.Glb && BH.word === HH && (this.ready.splice(rH, 1), null !== LH && (this.answered.delete(LH), this.release(LH)), AH.push(BH))
        }
        this.loadAgain(AH)
      }
      onEvent(HH) {
        if (this.Mu) return;
        const BH = new DataView(HH.buffer, HH.byteOffset, HH.byteLength);
        for (let LH = 0; LH + 8 <= HH.byteLength; LH += 8) {
          const HH = BH.getUint8(LH),
            AH = BH.getUint32(LH + 4, !0);
          if (HH === CH) {
            this.answered.delete(AH), this.release(AH);
            continue
          }
          const rH = {
            kind: BH.getUint8(LH + 1),
            index: BH.getUint8(LH + 2),
            word: AH
          };
          HH === tH ? this.want(rH) : HH === zH && this.loading.delete(MH(rH))
        }
      }
      reload(HH, BH) {
        const LH = LH => HH.includes(LH.kind) && (void 0 === BH || BH(LH)),
          AH = new Map;
        for (const rH of this.answered.values()) LH(rH) && AH.set(MH(rH), rH);
        for (const [rH, {
            key: SH
          }] of this.loading) LH(SH) && AH.set(rH, SH);
        this.loadAgain(AH.values())
      }
      loadAgain(HH) {
        for (const BH of HH) this.loading.delete(MH(BH)), this.want(BH)
      }
      drain(HH) {
        if (null !== HH)
          for (; this.ready.length > 0;) {
            if (!HH(hH, 0, this.ready[0].record)) return;
            this.ready.shift()
          }
      }
      dispose() {
        this.Mu = !0, this.loading.clear(), this.ready.length = 0;
        for (const HH of this.answered.keys()) this.release(HH);
        this.answered.clear()
      }
      want(HH) {
        const BH = MH(HH);
        if (this.loading.has(BH)) return;
        const LH = {
          key: HH
        };
        this.loading.set(BH, LH), this.loadKey(HH).then((AH => {
          this.Mu || this.loading.get(BH) !== LH ? this.release(AH.id) : (this.loading.delete(BH), this.answered.set(AH.id, HH), this.ready.push({
            record: vH(HH, GH, AH),
            key: HH,
            id: AH.id
          }))
        }), (AH => {
          if (this.Mu || this.loading.get(BH) !== LH) return;
          this.loading.delete(BH), this.onFailure({
            key: HH,
            error: AH
          });
          const rH = AH instanceof SH.b && "decode" === AH.stage ? YH : uH;
          this.ready.push({
            record: vH(HH, rH, null),
            key: HH,
            id: null
          })
        }))
      }
      async loadKey(HH) {
        switch (HH.kind) {
          case EH.Glb:
            return this.load(await this.glbImage(HH), "none");
          case EH.LifeformAtlas:
            return this.load(xH(await this.sources.lifeformAtlasUrl(HH.word), HH), "none");
          case EH.ArmourAtlas:
            return this.load(xH(await this.sources.armourAtlasUrl(), HH), "none");
          case EH.Cape:
            return this.load(xH(await this.sources.capeUrl(HH.word), HH), "none");
          case EH.AttachmentImage:
            return this.load(xH(await this.sources.attachmentImageUrl(HH.word), HH), "none");
          case EH.GroupAtlas:
            return this.load(xH(await this.sources.groupAtlasUrl(HH.word), HH), "none");
          case EH.BlockImage:
            return this.load(xH(await this.sources.blockImageUrl(HH.word), HH), "none");
          case EH.Particle: {
            const BH = await (HH.index === XH.Item ? this.sources.particleItemUrl(HH.word) : this.sources.particleTextureUrl(HH.word));
            return this.load(xH(BH, HH), "flipY")
          }
          case EH.GreyscaleArmour:
            return this.greyscaleArmour.load(HH.index, HH.word);
          default:
            throw new SH.b("fetch", `image kind ${HH.kind}`, {
              cause: null
            })
        }
      }
      async glbImage(HH) {
        var BH;
        let LH = this.glbImages.get(HH.word);
        if (void 0 === LH) {
          const BH = this.glbTakenCount.get(HH.word),
            AH = xH(await this.sources.glbUrl(HH.word), HH);
          try {
            LH = VH(await this.fetchFile(AH))
          } catch (rH) {
            throw new SH.b("fetch", AH, {
              cause: rH
            })
          }
          this.glbTakenCount.get(HH.word) === BH && this.glbImages.set(HH.word, LH)
        }
        const AH = null === (BH = LH) || void 0 === BH ? void 0 : BH[HH.index];
        if (!AH) throw new SH.b("decode", `image ${HH.index} of file ${2147483647&HH.word}`, {
          cause: null
        });
        return AH
      }
    }

    function MH(HH) {
      let {
        kind: BH,
        index: LH,
        word: AH
      } = HH;
      return `${BH}:${LH}:${AH}`
    }

    function xH(HH, BH) {
      if (null === HH) throw new SH.b("fetch", `no URL for image ${MH(BH)}`, {
        cause: null
      });
      return HH
    }

    function vH(HH, BH, LH) {
      var AH, rH, SH;
      const hH = new Uint8Array(16),
        tH = new DataView(hH.buffer);
      return tH.setUint8(0, HH.kind), tH.setUint8(1, HH.index), tH.setUint8(2, BH), tH.setUint32(4, HH.word, !0), tH.setUint32(8, null !== (AH = null === LH || void 0 === LH ? void 0 : LH.id) && void 0 !== AH ? AH : 0, !0), tH.setUint16(12, Math.min(null !== (rH = null === LH || void 0 === LH ? void 0 : LH.width) && void 0 !== rH ? rH : 0, 65535), !0), tH.setUint16(14, Math.min(null !== (SH = null === LH || void 0 === LH ? void 0 : LH.height) && void 0 !== SH ? SH : 0, 65535), !0), hH
    }
    const PH = 1179937895,
      TH = 1313821514,
      UH = 5130562;

    function VH(HH) {
      var BH;
      const LH = new DataView(HH.buffer, HH.byteOffset, HH.byteLength);
      if (HH.byteLength < 20 || LH.getUint32(0, !0) !== PH || LH.getUint32(16, !0) !== TH) return [];
      let AH, rH = 20 + LH.getUint32(12, !0);
      try {
        AH = JSON.parse((new TextDecoder).decode(HH.subarray(20, rH)))
      } catch {
        return []
      }
      for (; rH + 8 <= HH.byteLength && LH.getUint32(rH + 4, !0) !== UH;) rH += 8 + LH.getUint32(rH, !0);
      const SH = null !== (BH = AH.images) && void 0 !== BH ? BH : [];
      if (0 === SH.length || rH + 8 > HH.byteLength) return SH.map((() => null));
      const hH = HH.subarray(rH + 8, Math.min(HH.byteLength, rH + 8 + LH.getUint32(rH, !0)));
      return SH.map((HH => {
        var BH, LH, rH;
        const SH = void 0 === HH.bufferView || null === (BH = AH.bufferViews) || void 0 === BH ? void 0 : BH[HH.bufferView];
        if (!SH || 0 !== (null !== (LH = SH.buffer) && void 0 !== LH ? LH : 0) || void 0 === SH.byteLength) return null;
        const tH = null !== (rH = SH.byteOffset) && void 0 !== rH ? rH : 0,
          zH = tH + SH.byteLength;
        return zH <= hH.byteLength ? hH.slice(tH, zH) : null
      }))
    }
  },
  41985: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => hH,
      d: () => SH,
      g: () => rH
    });
    let AH = null;

    function rH(HH) {
      AH = HH
    }

    function SH(HH) {
      AH === HH && (AH = null)
    }

    function hH() {
      var HH;
      null === (HH = AH) || void 0 === HH || HH()
    }
  },
  37465: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => EH,
      e: () => GH,
      h: () => MH,
      l: () => CH
    });
    var AH = LH(15),
      rH = LH(2600),
      SH = LH(2605),
      hH = LH(2611),
      tH = LH(2680),
      zH = LH(18);

    function CH(HH, BH) {
      return (!(0, hH.e)() || 0 === HH && 0 === BH) && (0, SH.A)(rH.g.Joystick, 0, HH, BH, 0)
    }
    const EH = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function XH(HH) {
      return HH.classList.contains("TouchKeyHit") && YH() ? null : HH.firstElementChild
    }

    function GH(HH) {
      return HH.classList.contains("TouchKeyHit") && !HH.classList.contains("CanvasZone") ? {
        whole: !YH(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: uH(XH(HH))
      }
    }

    function YH() {
      return document.documentElement.classList.contains(tH.m)
    }

    function uH(HH) {
      return !(HH instanceof HTMLElement) || HH.offsetWidth <= 0 || HH.offsetHeight <= 0 ? null : {
        width: HH.offsetWidth,
        height: HH.offsetHeight
      }
    }

    function QH(HH, BH) {
      const LH = HH => Math.min(65535, Math.round(4 * HH));
      return (LH(HH) | LH(BH) << 16) >>> 0
    }

    function WH(HH) {
      return {
        x: HH.left + HH.width / 2,
        y: HH.top + HH.height / 2,
        radius: Math.min(HH.width, HH.height) / 2
      }
    }
    const MH = new class {
      constructor(HH) {
        this.write = HH, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        BH ? this.elements.set(HH, {
          element: BH,
          hidden: LH
        }) : this.elements.delete(HH), this.measureOne(HH)
      }
      measure() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = HH.left, this.canvasTop = HH.top;
        for (const BH of this.elements.keys()) this.measureOne(BH)
      }
      hitZone(HH, BH) {
        let LH = null,
          AH = 1;
        for (const rH of this.elements.keys()) {
          const SH = this.shown(rH);
          if (!SH) continue;
          const {
            rect: hH,
            element: tH
          } = SH, zH = WH(hH), CH = Math.max(0, hH.width / 2 - zH.radius), EH = Math.max(0, hH.height / 2 - zH.radius), GH = Math.max(0, Math.abs(HH - zH.x) - CH), YH = Math.max(0, Math.abs(BH - zH.y) - EH), QH = tH.firstElementChild;
          let MH = Math.hypot(GH, YH) / zH.radius;
          const xH = uH(XH(tH));
          xH && (MH = Math.min(MH, Math.max(2 * Math.abs(HH - zH.x) / xH.width, 2 * Math.abs(BH - zH.y) / xH.height))), MH < AH && (LH = {
            code: rH,
            element: tH,
            key: QH,
            ...zH
          }, AH = MH)
        }
        return LH
      }
      measureOne(HH) {
        const BH = this.shown(HH);
        if (!BH) return void this.write(rH.g.TouchZone, HH, 0, 0, 0);
        const {
          rect: LH,
          element: AH
        } = BH, SH = WH(LH);
        this.write(rH.g.TouchZone, HH, SH.x - this.canvasLeft, SH.y - this.canvasTop, QH(LH.width, LH.height));
        const hH = uH(XH(AH));
        this.write(rH.g.TouchZone, 256 | HH, 0, 0, hH ? QH(hH.width, hH.height) : 0)
      }
      shown(HH) {
        const BH = this.elements.get(HH),
          LH = AH.c.get("worldPanelHud");
        if (!BH || BH.hidden || "none" === LH) return null;
        const rH = BH.element.getBoundingClientRect();
        return rH.width <= 0 || rH.height <= 0 ? null : {
          rect: rH,
          element: BH.element
        }
      }
    }(SH.A);
    (0, zH.m)(tH.e, (() => {
      MH.measure()
    }))
  },
  42027: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => zH,
      e: () => CH
    });
    var AH = LH(42158),
      rH = LH(39975),
      SH = LH(37341),
      hH = LH(42032),
      tH = LH(42006);
    const zH = AH.d.timeForPlayerToConnect - 1e4;
    async function CH(HH, BH, LH, AH) {
      let zH;
      try {
        zH = await HH.getTrafficCode()
      } catch (uH) {
        throw console.error("[bloxd-wasm-client] could not get a traffic code", uH), new tH.y(uH)
      }
      const {
        gameNameWithVariation: CH,
        lobbyName: EH
      } = BH, XH = () => {
        const BH = (0, SH.i)(HH, CH, EH, zH, (HH => {
          var BH;
          return null !== (BH = null === LH || void 0 === LH ? void 0 : LH.isUsingCustomGameTexturePack(HH)) && void 0 !== BH && BH
        }));
        BH.joinOptions.wasmClient = !0;
        const rH = (0, hH.H)();
        return null !== rH && (BH.joinOptions.renderBackend = rH), BH.joinOptions.joinAdHold = AH, BH
      }, {
        roomName: GH,
        joinOptions: YH
      } = XH();
      return {
        endpoint: BH.endpoint,
        roomName: GH,
        joinOptions: YH,
        session: {
          gameNameWithVariation: CH,
          lobbyName: EH,
          playerDbId: HH.whamm
        },
        optionsAfterRefusal: async BH => await (0, rH.e)(HH, BH) ? XH().joinOptions : null
      }
    }
  },
  42275: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => EH,
      i: () => SH,
      j: () => XH,
      l: () => hH
    });
    var AH = LH(42259),
      rH = LH(42125);
    const SH = new class {
      constructor() {
        this.page = null, this.session = void 0, this.follower = null, this.isWanted = !1, this.listeners = new Set, this.pageListeners = new Set, this.wantedListeners = new Set
      }
      get current() {
        return void 0 === this.session ? this.page : this.session
      }
      setPageFiles(HH) {
        this.change((() => {
          this.page = HH
        }))
      }
      setSessionFiles(HH) {
        const BH = void 0 !== this.session && void 0 === HH;
        if (this.change((() => {
            this.session = HH
          })), BH)
          for (const LH of [...this.pageListeners]) LH()
      }
      showsPage() {
        return void 0 === this.session
      }
      onPageShown(HH) {
        return this.pageListeners.add(HH), () => {
          this.pageListeners.delete(HH)
        }
      }
      setFollower(HH) {
        this.follower = HH, this.startFollower()
      }
      wanted() {
        this.isWanted = !0;
        for (const HH of [...this.wantedListeners]) HH();
        this.startFollower()
      }
      onWanted(HH) {
        return this.wantedListeners.add(HH), () => {
          this.wantedListeners.delete(HH)
        }
      }
      onChange(HH) {
        return this.listeners.add(HH), () => {
          this.listeners.delete(HH)
        }
      }
      startFollower() {
        const HH = this.follower;
        this.isWanted && null !== HH && (this.follower = null, HH((() => {
          this.follower = HH
        })))
      }
      change(HH) {
        const BH = this.current;
        if (HH(), this.current !== BH)
          for (const LH of this.listeners) LH()
      }
    };

    function hH(HH, BH) {
      return {
        ...HH,
        armourAtlasUrl: () => {
          var LH, AH;
          return null !== (LH = null === (AH = BH()) || void 0 === AH ? void 0 : AH.armourAtlasUrl()) && void 0 !== LH ? LH : HH.armourAtlasUrl()
        },
        lifeformAtlasUrl: LH => zH(BH(), (HH => HH.LIFEFORM_ATLAS_PATHS[LH]), (() => HH.lifeformAtlasUrl(LH))),
        groupAtlasUrl: LH => zH(BH(), (HH => HH.GROUP_ATLAS_PATHS[LH]), (() => HH.groupAtlasUrl(LH))),
        particleItemUrl: AH => CH(BH(), (async () => {
          const HH = await LH.e(44).then((() => LH(54619))).catch((() => null));
          return (null === HH || void 0 === HH ? void 0 : HH.particleItemSprite(AH)) || null
        }), (() => HH.particleItemUrl(AH))),
        blockImageUrl: LH => CH(BH(), (async () => {
          var HH, BH;
          return null !== (HH = null === (BH = await tH()) || void 0 === BH ? void 0 : BH.blockImageName(LH)) && void 0 !== HH ? HH : null
        }), (() => HH.blockImageUrl(LH)))
      }
    }

    function tH() {
      return (0, rH.i)().catch((() => null))
    }

    function zH(HH, BH, LH) {
      return CH(HH, (async () => {
        var HH;
        const LH = await tH(),
          AH = null === LH ? null : BH(LH),
          rH = null !== (HH = null === AH || void 0 === AH ? void 0 : AH.slice(AH.lastIndexOf("/") + 1)) && void 0 !== HH ? HH : null;
        return "Player_Atlas" === rH ? null : rH
      }), LH)
    }
    async function CH(HH, BH, LH) {
      if (null !== HH) {
        const LH = await BH(),
          AH = null === LH ? null : HH.textureUrl(LH);
        if (null !== AH) return AH
      }
      return LH()
    }
    const EH = 0;

    function XH(HH) {
      const BH = [AH.i.ArmourAtlas, AH.i.LifeformAtlas, AH.i.GroupAtlas, AH.i.BlockImage, AH.i.Particle];
      HH.reload(BH, (HH => {
        switch (HH.kind) {
          case AH.i.Particle:
            return HH.index === AH.k.Item;
          case AH.i.LifeformAtlas:
            return HH.word !== EH;
          default:
            return !0
        }
      }))
    }
  },
  42163: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => AH,
      c: () => tH,
      f: () => rH,
      j: () => SH
    });
    const AH = 1e3;

    function rH() {
      zH((() => {
        window.location.reload()
      }))
    }

    function SH() {
      return new Promise((() => {}))
    }

    function hH(HH) {
      zH((() => {
        window.location.replace(HH(window.location.href))
      }))
    }

    function tH(HH) {
      Promise.resolve().then((() => LH(92))).then((BH => {
        let {
          currentUrl: LH
        } = BH;
        hH((() => LH.mergeSearchParamsInto(HH)))
      }), (() => {
        hH((() => HH))
      }))
    }

    function zH(HH) {
      null !== window.onbeforeunload ? Promise.resolve().then((() => LH(1789))).then((BH => {
        let {
          prepareForUnloadWithoutConfirmation: LH
        } = BH;
        try {
          LH()
        } catch (AH) {
          console.warn("[bloxd-wasm-client] prepareForUnloadWithoutConfirmation threw: leaving plainly", AH), window.onbeforeunload = null
        }
        HH()
      }), (() => {
        window.onbeforeunload = null, HH()
      })) : HH()
    }
  },
  37100: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => QH,
      f: () => EH,
      i: () => YH,
      j: () => XH,
      k: () => WH,
      l: () => uH,
      p: () => GH
    });
    const AH = 30,
      rH = 4;
    let SH = 0,
      hH = !1,
      tH = !1,
      zH = Number.NEGATIVE_INFINITY,
      CH = [];

    function EH() {
      0 === SH && (hH = !1, tH = !1), SH++;
      let HH = !1;
      return () => {
        HH || (HH = !0, SH--)
      }
    }

    function XH(HH) {
      HH && (tH = !0)
    }

    function GH() {
      return tH
    }

    function YH(HH) {
      hH = HH
    }

    function uH(HH) {
      return !(SH > 0 && (hH || HH - zH < 1e3 / AH - rH)) && (zH = HH, !0)
    }

    function QH(HH) {
      CH.push(HH)
    }

    function WH() {
      if (0 === CH.length) return;
      const HH = CH;
      CH = [];
      for (const LH of HH) try {
        LH()
      } catch (BH) {
        console.warn("[bloxd-previews] an after-draw callback threw", BH)
      }
    }
  },
  5554: (HH, BH, LH) => {
    function AH(HH, BH) {
      return rH(HH, BH)
    }

    function rH(HH, BH) {
      if (HH === BH) return !0;
      if ("object" !== typeof HH || "object" !== typeof BH || null === HH || null === BH || Array.isArray(HH) !== Array.isArray(BH)) return !1;
      const LH = HH,
        AH = BH,
        SH = Object.keys(LH);
      return SH.length === Object.keys(AH).length && SH.every((HH => Object.prototype.hasOwnProperty.call(AH, HH) && rH(LH[HH], AH[HH])))
    }
    LH.d(BH, {
      c: () => AH
    })
  },
  42228: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => UH,
      f: () => PH,
      h: () => QH,
      l: () => uH
    });
    var AH = LH(1885),
      rH = LH(1148),
      SH = LH(39967),
      hH = LH(37366),
      tH = LH(39991),
      zH = LH(42006);
    const CH = {
        "X-Requested-With": "XMLHtttpRequest"
      },
      EH = 3,
      XH = [500, 1500];

    function GH(HH) {
      const BH = new URL(HH);
      return {
        secure: "https:" === BH.protocol || "wss:" === BH.protocol,
        host: BH.host,
        pathname: BH.pathname.replace(/\/+$/, ""),
        search: BH.searchParams.toString()
      }
    }

    function YH(HH, BH, LH) {
      const {
        secure: AH,
        host: rH,
        pathname: SH,
        search: hH
      } = GH(HH);
      return `${AH?"https":"http"}://${rH}${SH}/matchmake/${BH}/${encodeURIComponent(LH)}${hH?`?${hH}`:""}`
    }

    function uH(HH, BH) {
      var LH;
      const AH = null !== (LH = BH.protocol) && void 0 !== LH ? LH : "ws";
      if ("ws" !== AH) throw new Error(`seat reservation asks for the ${AH} transport`);
      const {
        secure: rH,
        host: SH,
        pathname: hH,
        search: tH
      } = GH(HH), zH = new URLSearchParams(tH);
      zH.append("sessionId", BH.sessionId), BH.reconnectionToken && zH.append("reconnectionToken", BH.reconnectionToken);
      return `${rH?"wss":"ws"}://${BH.room.publicAddress||`${SH}${hH}`}/${BH.room.processId}/${BH.room.roomId}?${zH.toString()}`
    }
    async function QH(HH, BH, LH) {
      var tH;
      let CH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const GH = null !== (tH = CH.sleep) && void 0 !== tH ? tH : AH.d,
        uH = new rH.d(CH.signal),
        QH = new hH.b((() => {
          (0, rH.k)(uH.controller, new hH.c("seat"))
        })),
        {
          signal: vH
        } = uH;
      try {
        const AH = await (0, SH.f)((() => async function(HH, BH, LH, AH) {
          var SH;
          const {
            signal: hH,
            sleep: tH
          } = AH, CH = YH(HH, "joinOrCreate", BH), GH = JSON.stringify(LH);
          let uH = null;
          for (let YH = 0; YH < EH; YH++) {
            var QH;
            if (YH > 0) await tH(null !== (QH = XH[YH - 1]) && void 0 !== QH ? QH : 1500, hH);
            let HH;
            (0, rH.t)(hH);
            try {
              HH = await MH(CH, GH, AH)
            } catch (vH) {
              (0, rH.t)(hH), uH = WH(vH);
              continue
            }
            const {
              response: BH,
              answer: LH,
              refusal: SH,
              lost: EH
            } = HH;
            if (null === EH) {
              if (null !== SH) throw xH(SH, LH);
              if (BH.ok && null !== LH && VH(LH)) return LH;
              uH = new zH.u(`seat request answered HTTP ${BH.status}${null===LH?" without JSON":" without a seat"}`, !1, void 0, BH.status)
            } else uH = WH(EH.error)
          }
          throw null !== (SH = uH) && void 0 !== SH ? SH : new zH.u("seat request made no attempt", !1)
        }(HH, BH, LH, {
          ...CH,
          signal: vH,
          sleep: GH
        })), vH, GH);
        return QH.answered(), AH
      } finally {
        QH.stop(), uH.unfollow()
      }
    }

    function WH(HH) {
      return new zH.u(HH instanceof Error ? HH.message : String(HH), !0, HH)
    }
    async function MH(HH, BH, LH) {
      var AH;
      const {
        signal: SH
      } = LH, hH = null !== (AH = LH.fetch) && void 0 !== AH ? AH : fetch, tH = await hH(HH, {
        method: "POST",
        headers: {
          ...CH,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: BH,
        credentials: "include",
        signal: SH
      }), {
        answer: zH,
        lost: EH
      } = await async function(HH) {
        try {
          const BH = await HH.json();
          return {
            answer: "object" === typeof BH && null !== BH ? BH : null,
            lost: null
          }
        } catch (BH) {
          return {
            answer: null,
            lost: BH instanceof SyntaxError ? null : {
              error: BH
            }
          }
        }
      }(tH), XH = null !== zH && "string" === typeof zH.error ? zH.error : null;
      var GH;
      null !== XH && (null === (GH = LH.onRefusal) || void 0 === GH || GH.call(LH));
      return (0, rH.t)(SH), {
        response: tH,
        answer: zH,
        refusal: XH,
        lost: EH
      }
    }

    function xH(HH, BH) {
      return new zH.n(HH, "number" === typeof(null === BH || void 0 === BH ? void 0 : BH.code) ? BH.code : 0, (0, tH.t)(HH).text)
    }
    class vH extends Error {
      constructor(HH, BH) {
        super(HH), this.code = BH, this.name = "SeatHttpError"
      }
    }
    async function PH(HH, BH, LH) {
      let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const {
        response: rH,
        answer: SH,
        refusal: hH,
        lost: tH
      } = await MH(YH(HH, "reconnect", BH), JSON.stringify({
        reconnectionToken: LH
      }), AH);
      if (null !== tH) throw tH.error;
      if (!rH.ok) {
        const HH = null !== SH && "number" === typeof SH.code && 0 !== SH.code ? SH.code : rH.status;
        throw new vH(`the seat's reconnect was refused: ${null!==hH&&void 0!==hH?hH:`HTTP ${rH.status}`}`, HH)
      }
      if (null !== hH) throw xH(hH, SH);
      if (null === SH || !VH(SH)) throw new Error("the seat's reconnect answered " + (null === SH ? "without JSON" : "without a seat"));
      return {
        ...SH,
        reconnectionToken: LH
      }
    }
    const TH = 10;

    function UH(HH) {
      if (HH.byteLength < 2 || HH[0] !== TH) return null;
      const BH = 2 + HH[1];
      return BH > HH.byteLength ? null : (new TextDecoder).decode(HH.subarray(2, BH))
    }

    function VH(HH) {
      const BH = HH.room;
      return "string" === typeof HH.sessionId && "object" === typeof BH && null !== BH && "string" === typeof BH.roomId && "string" === typeof BH.processId && "string" === typeof BH.name
    }
  },
  41920: (HH, BH, LH) => {
    LH.d(BH, {
      A: () => VH,
      E: () => IH,
      H: () => PH,
      L: () => TH,
      O: () => WH,
      S: () => kH,
      W: () => lH,
      Z: () => uH,
      _: () => cH,
      cb: () => xH,
      d: () => rH,
      f: () => KH,
      fb: () => MH,
      h: () => fH,
      jb: () => vH,
      k: () => YH,
      kb: () => UH,
      l: () => QH,
      o: () => oH,
      p: () => OH,
      t: () => mH,
      x: () => bH
    });
    var AH = LH(3310);
    const rH = {
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

    function SH(HH, BH) {
      return !ArrayBuffer.isView(HH) || HH instanceof DataView ? Array.isArray(HH) ? HH.map((HH => BH(HH))) : HH : Array.from(HH, (HH => BH(HH)))
    }

    function hH(HH) {
      if ("string" !== typeof HH) return HH;
      for (let BH = 0; BH < HH.length; BH++) {
        const LH = HH.charCodeAt(BH);
        if (LH >= 55296 && LH <= 57343) return zH.decode(tH.encode(HH))
      }
      return HH
    }
    const tH = new TextEncoder,
      zH = new TextDecoder;

    function CH(HH) {
      return HH
    }
    let EH;

    function XH(HH) {
      return null === HH || "object" !== typeof HH ? HH : [hH(HH.policy), hH(HH.Jh)]
    }

    function GH(HH) {
      return null === HH || "object" !== typeof HH ? HH : [SH(HH.OL, CH), SH(HH.mh, CH)]
    }

    function YH(HH) {
      return null === (BH = HH) || "object" !== typeof BH ? BH : [hH(BH.kt), hH(BH.ot)];
      var BH
    }

    function uH(HH) {
      return null === (BH = HH) || "object" !== typeof BH ? BH : [BH.id, BH.XE];
      var BH
    }

    function QH(HH) {
      return null === (BH = HH) || "object" !== typeof BH ? BH : [BH.dB, hH(BH.aB), BH.sB, hH(BH.pB), BH.LL, BH.AL, BH.wt, hH(BH.Zt), hH(BH.dt)];
      var BH
    }

    function WH(HH) {
      return null === (BH = HH) || "object" !== typeof BH ? BH : [SH(BH.ih, CH), BH.ph];
      var BH
    }

    function MH(HH) {
      return null === (BH = HH) || "object" !== typeof BH ? BH : [SH(BH.eh, (HH => hH(HH))), hH(BH.qh), BH.gh];
      var BH
    }

    function xH(HH) {
      return null === (BH = HH) || "object" !== typeof BH ? BH : [SH(BH.kE, CH), hH(BH.mE), BH.oE];
      var BH
    }

    function vH(HH) {
      return null === (BH = HH) || "object" !== typeof BH ? BH : [hH(BH.rh), hH(BH.Sh)];
      var BH
    }

    function PH(HH) {
      return null === (BH = HH) || "object" !== typeof BH ? BH : [hH(BH.zE)];
      var BH
    }

    function TH(HH) {
      return hH(HH)
    }

    function UH(HH) {
      return null === (BH = HH) || "object" !== typeof BH ? BH : [hH(BH.ah), hH(BH.sh), hH(BH.policy), hH(BH.Jh)];
      var BH
    }

    function VH(HH) {
      return XH(HH)
    }

    function OH(HH) {
      return XH(HH)
    }

    function bH(HH) {
      return null === (BH = HH) || "object" !== typeof BH ? BH : [hH(BH.Jt)];
      var BH
    }

    function kH(HH) {
      return HH
    }

    function mH(HH) {
      return null === (BH = HH) || "object" !== typeof BH ? BH : [hH(BH.Ft), hH(BH.Dt)];
      var BH
    }

    function oH(HH) {
      return hH(HH)
    }

    function IH(HH) {
      return GH(HH)
    }

    function fH(HH) {
      return GH(HH)
    }

    function lH(HH) {
      return null === (BH = HH) || "object" !== typeof BH ? BH : [hH(BH.dh)];
      var BH
    }

    function KH(HH) {
      return (EH ??= (0, AH.c)().map((HH => HH.name)), EH).map((BH => {
        return "string" === typeof(LH = HH[BH]) ? hH(LH) : SH(LH, CH);
        var LH
      }))
    }

    function cH(HH) {
      return null === (BH = HH) || "object" !== typeof BH ? BH : [BH.Ih, BH.fh, BH.Kh];
      var BH
    }
  },
  42281: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => SH
    });
    var AH = LH(42290),
      rH = LH(42275);
    const SH = new class {
      constructor(HH) {
        this.pack = HH, this.game = void 0, this.settle = null, this.hold = null, this.endedWhileHeld = !1, this.gameListeners = new Set, HH.onWanted((() => {
          this.release()
        }))
      }
      setGame(HH) {
        if (void 0 === HH && null !== this.hold) return void(this.endedWhileHeld = !0);
        this.hold = null, this.endedWhileHeld = !1;
        const BH = this.inGame();
        if (this.game = HH, this.update(), this.inGame() !== BH)
          for (const LH of this.gameListeners) LH()
      }
      inGame() {
        return void 0 !== this.game
      }
      onGameChange(HH) {
        return this.gameListeners.add(HH), () => {
          this.gameListeners.delete(HH)
        }
      }
      unwantedLeave(HH) {
        HH && void 0 !== this.game ? this.hold = {
          game: this.game
        } : this.release()
      }
      rejoinHold() {
        return this.hold
      }
      releaseHold(HH) {
        null !== HH && HH === this.hold && this.release()
      }
      release() {
        if (null === this.hold) return;
        const HH = this.endedWhileHeld;
        this.hold = null, this.endedWhileHeld = !1, HH && this.setGame(void 0)
      }
      setSettled(HH) {
        this.settle = HH, this.update()
      }
      update() {
        void 0 === this.game ? this.pack.setSessionFiles(void 0) : null !== this.settle && (0, AH.d)(this.settle.state, this.game) && this.pack.setSessionFiles(this.settle.files)
      }
    }(rH.i)
  },
  5547: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => hH,
      c: () => tH
    });
    var AH = LH(2227),
      rH = LH(5554);
    let SH = null;

    function hH(HH) {
      SH = {
        pack: HH.metaData.id === AH.e ? null : HH
      }
    }

    function tH(HH) {
      return !(null === SH || !(0, rH.c)(SH.pack, HH)) && (SH = null, !0)
    }
  },
  42e3: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      followPageUiPack: () => XX,
      packForGame: () => EX,
      playWasmGame: () => VX,
      prefetchWasmPreviews: () => rC,
      setGamePackConfirm: () => xE,
      startWasmPlay: () => WX,
      startWasmPreviews: () => AC
    });
    var AH = LH(176),
      rH = LH(1188),
      SH = LH(152),
      hH = LH(40018),
      tH = LH(1998),
      zH = LH(18),
      CH = LH(5131),
      EH = LH(1287),
      XH = LH(1757),
      GH = LH(1297),
      YH = LH(40219),
      uH = LH(1253),
      QH = LH(171),
      WH = LH(3193),
      MH = LH(1871),
      xH = LH(3228);
    let vH = null,
      PH = null,
      TH = null,
      UH = !1,
      VH = "previews",
      OH = null,
      bH = !1,
      kH = 0;

    function mH(HH) {
      VH = HH
    }

    function oH(HH) {
      var BH;
      const LH = HH instanceof Error ? HH.name : null;
      return null !== (BH = QH.d.find((HH => HH === LH))) && void 0 !== BH ? BH : "other"
    }

    function IH() {
      vH ??= performance.now()
    }

    function fH(HH) {
      PH ??= performance.now(), OH = HH, kH > 0 && lH()
    }

    function lH() {
      null !== PH && null !== OH && (0, uH.v)("wasm_loaded", PH, `${OH}:${(0,WH.p)()}`)
    }
    const KH = {
      ready: () => {
        MH.e.markAdmissionAwaited()
      },
      adEnded: () => {
        MH.e.markJoinAdEnded()
      },
      admitted: () => {
        MH.e.markAdmitted()
      }
    };
    var cH = LH(40229),
      eH = LH(40131),
      qH = LH(37345),
      gH = LH(1502),
      NH = LH(39967),
      RH = LH(9627),
      jH = LH(37366),
      nH = LH(42002),
      FH = LH(5255),
      DH = LH(41911),
      wH = LH(41981),
      ZH = LH(41920);
    const dH = {
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

    function aH(HH) {
      const BH = {
        ...wH.c[HH]
      };
      for (const LH of Object.keys(dH[HH])) delete BH[LH];
      return BH
    }

    function sH() {
      var HH, BH;
      return null === (HH = null === (BH = (0, DH.i)()) || void 0 === BH ? void 0 : BH.localPlayerAlive()) || void 0 === HH || HH
    }

    function JH() {
      var HH, BH;
      return null !== (HH = null === (BH = (0, DH.i)()) || void 0 === BH ? void 0 : BH.localDeaths()) && void 0 !== HH ? HH : null
    }
    const iH = {
        current: sH,
        watch: HH => {
          let BH = sH(),
            LH = JH();
          return (0, FH.v)((() => {
            const AH = sH(),
              rH = JH(),
              SH = null !== rH && null !== LH && rH !== LH;
            LH = rH, SH ? (BH || HH(!0), HH(!1), AH && HH(!0), BH = AH) : AH !== BH && (BH = AH, HH(AH))
          }))
        }
      },
      pH = {
        states: {
          ...aH("states"),
          localPlayerAlive: iH
        },
        events: {
          ...aH("events"),
          localPlayerAliveSet: {
            watch: iH.watch
          }
        },
        commands: {
          ...aH("commands"),
          respawn: () => {
            var HH;
            null === (HH = (0, DH.i)()) || void 0 === HH || HH.respawn()
          },
          playEmote: HH => {
            var BH;
            null === (BH = (0, DH.i)()) || void 0 === BH || BH.send(ZH.d.PlayEmote, (0, ZH.H)({
              zE: HH
            }))
          },
          applyTemporaryThirdPerson: HH => {
            var BH;
            let {
              durationMs: LH
            } = HH;
            null === (BH = (0, DH.i)()) || void 0 === BH || BH.thirdPersonFor(LH)
          },
          bindCustomButtonKeys: HH => {
            var BH;
            null === (BH = (0, DH.i)()) || void 0 === BH || BH.bindCustomButtonKeys(HH)
          },
          pressCustomButton: HH => {
            var BH;
            let {
              id: LH,
              down: AH
            } = HH;
            null === (BH = (0, DH.i)()) || void 0 === BH || BH.pressCustomButton(LH, AH)
          },
          setLookSensitivity: () => {},
          wakeUp: HH => {
            const BH = (0, ZH.W)({
                dh: HH
              }),
              LH = () => {
                const HH = (0, DH.i)();
                return !(null !== HH && void 0 !== HH && HH.isSessionLive) || HH.send(ZH.d.StopSleeping, BH)
              };
            if (!LH()) {
              const HH = (0, FH.v)((() => {
                LH() && HH()
              }))
            }
          },
          setCameraZoom: HH => {
            var BH;
            null === (BH = (0, DH.i)()) || void 0 === BH || BH.setCameraZoom(HH)
          }
        },
        queries: aH("queries"),
        lookups: {
          ...aH("lookups"),
          cameraZoom: () => {
            var HH, BH;
            return null !== (HH = null === (BH = (0, DH.i)()) || void 0 === BH ? void 0 : BH.cameraZoom()) && void 0 !== HH ? HH : 0
          }
        }
      };
    var yH = LH(39991),
      HB = LH(42006),
      BB = LH(42010),
      LB = LH(42027),
      AB = LH(1196),
      rB = LH(92),
      SB = LH(4928),
      hB = LH(4092),
      tB = LH(1104);
    const zB = {
      Mt: () => (0, AB.e)(),
      inbuiltOverwritten: () => SB.g,
      reflectApplyHit: () => tB.b,
      definerHit: () => rB.currentUrl.c,
      emitReplaced: () => (0, zH.e)(),
      confirmMesh: () => (0, hB.c)(),
      confirmMeshHitStack: () => (0, hB.d)()
    };
    var CB = LH(42016),
      EB = LH(42163);
    var XB = LH(15),
      GB = LH(2003),
      YB = LH(2064),
      uB = LH(1664),
      QB = LH(2104),
      WB = LH(1123),
      MB = LH(1194),
      xB = LH(37177);

    function vB() {
      return MB.g.get().getCurrentLanguageCode()
    }

    function PB(HH) {
      const BH = () => {
        HH({
          translate: (HH, BH) => (0, WB.s)(vB(), HH, BH),
          keyBindingText: HH => {
            const BH = (0, YB.t)(HH, XB.c.get("isTouchScreen"));
            return null !== BH ? (0, WB.u)(vB(), BH.translationKey, BH.params) : (0, YB.p)((0, YB.r)(HH))
          },
          isFriend: QB.d,
          hiddenNames: GB.c.shown,
          loadsFontRest: (0, xB.e)(vB())
        })
      };
      let LH = !1;
      const AH = () => {
          const HH = vB();
          (0, WB.m)(HH).then((() => {
            LH || HH !== vB() || BH()
          }))
        },
        rH = () => uB.d.getSocialState().friends.map((HH => HH.name.toLowerCase())).sort().join(" ");
      let SH = rH();
      BH(), AH();
      const hH = [(0, MB.j)((() => {
        BH(), AH()
      })), (0, zH.m)("customBindingsChanged", BH), (0, zH.m)("appManagerUpdated|isTouchScreen", BH), (0, QB.b)((() => {
        const HH = rH();
        HH !== SH && (SH = HH, BH())
      })), GB.c.subscribe(BH)];
      return () => {
        LH = !0;
        for (const HH of hH) HH()
      }
    }
    var TB = LH(1126),
      UB = LH(4858),
      VB = LH(37702);
    const OB = {
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
      wasmScreens: TB.wasmScreens
    };
    let bB = null;

    function kB(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return null === bB ? function(HH) {
        var BH, LH;
        let AH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const [rH, SH] = HH.split(":"), hH = null !== (BH = null === (LH = OB[rH]) || void 0 === LH ? void 0 : LH[SH]) && void 0 !== BH ? BH : HH;
        return hH.replace(/\{\{(\w+)\}\}/g, ((HH, BH) => {
          var LH;
          return null !== (LH = AH[BH]) && void 0 !== LH ? LH : HH
        }))
      }(HH, BH) : bB(HH, BH)
    }

    function mB(HH, BH) {
      (0, UB.e)();
      const LH = document.createElement("div");
      LH.setAttribute("role", "alertdialog"), LH.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;z-index:100;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.7);font:16px sans-serif;color:#fff";
      const AH = document.createElement("div");
      AH.style.cssText = "max-width:28rem;padding:1.5rem;background:#1c2333;text-align:center";
      const rH = document.createElement("h2");
      rH.textContent = kB(HH.title);
      const SH = document.createElement("p");
      if (SH.textContent = kB(HH.help, HH.helpValues), SH.style.whiteSpace = "pre-line", AH.append(rH, SH), HH.discordLink) {
        const HH = document.createElement("a");
        HH.href = VB.d, HH.target = "_blank", HH.rel = "noreferrer", HH.style.color = "#8ab4ff", HH.textContent = kB("wasmScreens:reportOnDiscord"), AH.append(HH)
      }
      const hH = document.createElement("div");
      return hH.style.cssText = "display:flex;gap:1rem;justify-content:center;margin-top:1.5rem", AH.append(hH), LH.append(AH), document.body.append(LH), new Promise((AH => {
        const rH = HH => {
            null === BH || void 0 === BH || BH.removeEventListener("abort", SH), LH.remove(), AH(HH)
          },
          SH = () => {
            rH(!1)
          };
        null === BH || void 0 === BH || BH.addEventListener("abort", SH, {
          once: !0
        });
        const tH = (HH, BH) => {
          const LH = document.createElement("button");
          LH.textContent = kB(HH), LH.style.cssText = "padding:0.5rem 1.25rem;font:inherit", LH.addEventListener("click", (() => {
            rH(BH)
          })), hH.append(LH)
        };
        null !== HH.cancel && tH(HH.cancel, !1), tH(HH.confirm, !0)
      }))
    }
    var oB = LH(9615),
      IB = LH(625),
      fB = LH(1005),
      lB = LH(2043),
      KB = LH(304),
      cB = LH(3168),
      eB = LH(37083),
      qB = LH(3171),
      gB = LH(39649),
      NB = LH(5143),
      RB = LH(42172),
      jB = LH(673),
      nB = LH(642),
      FB = LH(669),
      DB = LH(3244),
      wB = LH(2036),
      ZB = LH(4097),
      dB = LH(3637);
    let aB = null;
    var sB = LH(1131),
      JB = LH(1148),
      iB = LH(1885),
      pB = LH(4786),
      yB = LH(4842),
      HL = LH(3823),
      BL = LH(40),
      LL = LH(297),
      AL = LH(293),
      rL = LH(42192),
      SL = LH(5260),
      hL = LH(39689);
    var tL = LH(4813),
      zL = LH(30);

    function CL(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => document.createElement("canvas");
      try {
        var LH;
        const AH = BH(),
          rH = HH ? AH.getContext("webgl") : AH.getContext("webgl2");
        return null !== rH && (null === (LH = rH.getExtension("WEBGL_lose_context")) || void 0 === LH || LH.loseContext(), !0)
      } catch {
        return !1
      }
    }
    var EL = LH(38536),
      XL = LH(42200);
    class GL {
      constructor(HH, BH, LH) {
        this.showView = HH, this.holdForAd = BH, this.render = LH
      }
      pointerUnlockRequestsChanged() {
        (0, rL.x)()
      }
      pointerLockDebugEntries() {
        return [{
          label: "Locked to the canvas",
          value: String((0, rL.o)())
        }]
      }
      setGameViewShown(HH) {
        this.showView(HH)
      }
      setGameView(HH) {
        (0, XL.h)(HH)
      }
      videoAdHold(HH, BH) {
        this.holdForAd(HH, BH)
      }
      gameRender() {
        return this.render()
      }
    }
    class YL {
      leave(HH) {
        ! function(HH) {
          if (null !== (0, GH.c)().websocketUrl) try {
            (0, FH.L)().leaveGame(HH)
          } finally {
            (0, GH.p)({
              websocketUrl: null
            })
          }
        }(HH)
      }
      isReplay() {
        return !1
      }
    }
    class uL {
      constructor(HH) {
        this.workMs = HH
      }
      watchFrameStarts(HH) {
        return (0, FH.p)(HH)
      }
      watchFrames(HH) {
        return (0, FH.n)(HH)
      }
      watchTicks(HH) {
        return (0, FH.v)(HH)
      }
      frameWorkMs() {
        return this.workMs()
      }
    }
    var QL = LH(42150),
      WL = LH(42209);

    function ML(HH) {
      return HH >= 0 ? Math.min(1, HH) : 0
    }

    function xL(HH, BH) {
      const {
        fade: LH
      } = HH;
      return null === LH || BH - LH.at >= LH.ms ? HH.volume : LH.from + (HH.volume - LH.from) * Math.max(0, (BH - LH.at) / LH.ms)
    }

    function vL(HH) {
      const BH = Object.entries(HH),
        LH = new Uint32Array(BH.length);
      let AH = 0;
      for (const [hH, [, tH]] of BH.entries()) LH[hH] = tH.length, AH += tH.length;
      const rH = new Float64Array(3 * AH);
      let SH = 0;
      for (const [, hH] of BH)
        for (const HH of hH) rH.set(HH, SH), SH += 3;
      return {
        blocks: BH.map((HH => {
          let [BH] = HH;
          return BH
        })).join("\0"),
        counts: LH,
        values: rH
      }
    }
    class PL {
      constructor(HH, BH) {
        this.core = HH, this.warn = BH, this.latest = 0
      }
      async feed() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : TL;
        const BH = ++this.latest;
        let LH;
        try {
          LH = await HH()
        } catch (AH) {
          return void(this.core.isStopped || BH !== this.latest || this.warn("the block colours didn't load, so block particles draw grey", AH))
        }
        BH === this.latest && (this.core.setBlockColours(LH) || this.core.isStopped || this.warn("the core refused the block colours: block particles draw grey"))
      }
    }
    async function TL() {
      return vL((await LH.e(228).then((() => LH(35079)))).averageColors)
    }
    var UL = LH(5265),
      VL = LH(5268),
      OL = LH(41962),
      bL = LH(3590),
      kL = LH(37023),
      mL = LH(42069),
      oL = LH(614),
      IL = LH(37928),
      fL = LH(609),
      lL = LH(317),
      KL = LH(42049);
    const cL = [3e4, 12e4, 3e5];
    class eL extends Error {}
    const qL = {
      mobTypes: oL.q,
      vehicleTypes: IL.c,
      mobAiStates: oL.o,
      playerPoses: fL.o
    };
    var gL = LH(42034),
      NL = LH(42060),
      RL = LH(42092),
      jL = LH(1260),
      nL = LH(42216),
      FL = LH(42222),
      DL = LH(3296),
      wL = LH(39957),
      ZL = LH(5288),
      dL = LH(2600);
    const aL = dL.w.KeysDisabled | dL.w.LookFrozen | dL.w.ClicksSuppressed,
      sL = DL.c;
    var JL = (0, FL.c)("resumingConn");
    class iL {
      constructor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.shell = HH, this.now = BH, this.session = void 0, this.attempt = null, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, Object.defineProperty(this, JL, {
          writable: !0,
          value: 0
        }), this.drops = 0, this.session = new wL.d({
          reconnect: HH => this.reconnect(HH),
          isLive: () => HH.isLive(),
          onReconnected: BH => {
            this.landed = BH, HH.onReconnected(BH), this.landIfResumed()
          },
          onGaveUp: (BH, LH) => {
            this.abortAttempt(), HH.onGaveUp(BH, LH)
          },
          freeze: BH => {
            HH.IK(BH), (0, ZL.k)(aL, BH ? aL : 0, "reconnectFreeze")
          },
          releaseSeat: HH => {
            this.releaseSeat(HH)
          }
        })
      }
      isResuming() {
        return this.session.isResuming()
      }
      get resumingConn() {
        return (0, nL.e)(this, JL)[JL]
      }
      canHoldSeat() {
        return this.session.canHoldSeat()
      }
      onInitialInfo(HH) {
        let {
          conn: BH,
          graceMs: LH,
          sessionBased: AH,
          replayOffer: rH
        } = HH;
        this.session.onInitialInfo(LH, AH), this.isResuming() && (this.initialInfoConn = BH, this.initialInfoOffer = rH, this.landIfResumed())
      }
      onResumeComplete(HH) {
        0 !== HH && (HH === (0, nL.e)(this, JL)[JL] ? ((0, nL.e)(this, JL)[JL] = 0, this.session.onResumed()) : this.isResuming() && (this.completedEarlyConn = HH))
      }
      onDropped(HH) {
        this.drops++, this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, (0, nL.e)(this, JL)[JL] = 0, this.session.onConnectionLost(HH)
      }
      leave() {
        this.session.leave(), this.dispose()
      }
      dispose() {
        this.abortAttempt(), this.landed = null, this.completedEarlyConn = 0, (0, nL.e)(this, JL)[JL] = 0, this.session.end()
      }
      reconnect(HH) {
        const BH = this.attempt;
        if (null !== BH && this.awaitingJoinRoom(BH)) return BH.result;
        this.abortAttempt();
        const LH = new AbortController,
          AH = this.drops,
          rH = {
            attachedAt: null
          },
          SH = this.shell.reconnect(HH, LH.signal, (() => {
            rH.attachedAt = this.now()
          })).then((HH => {
            if (this.clearAttempt(hH), this.drops !== AH) throw new Error("the resumed room dropped before its attempt settled");
            return HH
          }), (HH => {
            throw this.clearAttempt(hH), HH
          })),
          hH = {
            abort: LH,
            socket: rH,
            result: SH
          };
        return this.attempt = hH, SH
      }
      clearAttempt(HH) {
        this.attempt === HH && (this.attempt = null)
      }
      abortAttempt() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new DOMException("the reconnect attempt was given up", "AbortError");
        const BH = this.attempt;
        this.attempt = null, null === BH || void 0 === BH || BH.abort.abort(HH)
      }
      awaitingJoinRoom(HH) {
        const BH = HH.socket.attachedAt;
        return null !== BH && this.now() - BH < sL
      }
      releaseSeat(HH) {
        const BH = this.attempt,
          LH = null !== BH && this.awaitingJoinRoom(BH);
        this.abortAttempt(new HB.q), LH || this.shell.releaseSeat(HH)
      }
      landIfResumed() {
        const HH = this.landed;
        if (null !== HH && HH.conn === this.initialInfoConn) {
          const BH = this.initialInfoOffer && this.completedEarlyConn !== HH.conn;
          if (this.landed = null, this.initialInfoConn = 0, this.initialInfoOffer = !1, this.completedEarlyConn = 0, this.abortAttempt(), !BH) return void this.session.onResumed();
          (0, nL.e)(this, JL)[JL] = HH.conn, this.session.onResuming()
        }
      }
    }
    var pL = LH(39959),
      yL = LH(42228),
      HA = LH(37351),
      BA = LH(37347),
      LA = LH(2227),
      AA = LH(1962),
      rA = LH(4701),
      SA = LH(42075),
      hA = LH(5547);

    function tA(HH) {
      let {
        pack: BH,
        gameSource: LH
      } = HH;
      if (null !== LH && "" !== LH) return `game:${LH}`;
      if (null === BH) return "default";
      const {
        id: AH,
        version: rH
      } = BH.metaData;
      if (AH !== LA.l.CUSTOM) return `${AH}@${rH}`;
      const SH = [];
      for (const hH of [BH.textureOverrides, BH.modelOverrides, BH.animations])
        for (const [HH, BH] of Object.entries(null !== hH && void 0 !== hH ? hH : {})) SH.push(`${HH}:${BH.length}`);
      return `${AH}:${(0,AA.o)(SH.join())}`
    }
    var zA = LH(4832),
      CA = LH(3610),
      EA = LH(42234),
      XA = LH(644),
      GA = LH(3614),
      YA = LH(81),
      uA = LH(3268),
      QA = LH(3260),
      WA = LH(4904),
      MA = LH(4712),
      xA = LH(42136),
      vA = LH(2605),
      PA = LH(1659),
      TA = LH(1696),
      UA = LH(1241),
      VA = LH(101),
      OA = LH(283),
      bA = LH(40009),
      kA = LH(2611),
      mA = LH(5279);
    const oA = new Set([UL.tb.KeyDown, UL.tb.MouseMove, UL.tb.MouseDown, UL.tb.Wheel, UL.tb.TouchStart, UL.tb.TouchMove]);

    function IA(HH) {
      return (HH.shiftKey ? UL.Nb.Shift : 0) | (HH.ctrlKey ? UL.Nb.Ctrl : 0) | (HH.altKey ? UL.Nb.Alt : 0) | (HH.metaKey ? UL.Nb.Meta : 0) | ("repeat" in HH && HH.repeat ? UL.Nb.Repeat : 0) | (HH.isTrusted ? 0 : UL.Nb.Untrusted | function(HH) {
        try {
          const {
            editable: BH,
            outsideView: LH
          } = (0, bA.g)(HH.target);
          return (BH ? UL.Nb.UntrustedEditable : 0) | (LH ? UL.Nb.UntrustedOutsideView : 0)
        } catch {
          return 0
        }
      }(HH))
    }

    function fA(HH) {
      return "touchOnly" !== (0, VA.d)() && "function" === typeof HH.requestPointerLock
    }

    function lA(HH) {
      return 0 === HH.button ? HH.altKey ? mA.j["Alt+Left Click"] : mA.j.Mouse1 : 1 === HH.button ? mA.j.Mouse2 : mA.j.Mouse3
    }
    const KA = new Set(["AltLeft", "AltRight", "ArrowUp", "ArrowDown"]),
      cA = new Map([
        ["AltLeft", "altKey"],
        ["AltRight", "altKey"],
        ["ControlLeft", "ctrlKey"],
        ["ControlRight", "ctrlKey"],
        ["ShiftLeft", "shiftKey"],
        ["ShiftRight", "shiftKey"],
        ["MetaLeft", "metaKey"],
        ["MetaRight", "metaKey"]
      ]),
      eA = 32768,
      qA = 1;

    function gA(HH) {
      return Math.min(Math.max(Math.round(HH), 0), 65535)
    }

    function NA(HH, BH, LH) {
      const AH = [],
        rH = (HH, BH, LH, rH) => {
          const SH = HH => {
            (0, TA.u)(HH) || LH(HH)
          };
          HH.addEventListener(BH, SH, rH), AH.push((() => {
            HH.removeEventListener(BH, SH, rH)
          }))
        },
        SH = {
          capture: !0,
          passive: !0
        },
        hH = (HH, LH, AH, rH, SH) => (!(0, kA.e)() || !oA.has(HH)) && (BH(HH, LH, AH, rH, SH), !0),
        tH = () => document.pointerLockElement === HH,
        zH = (0, OA.e)(),
        CH = HH => {
          HH.ctrlKey && LH.ctrlCombosAreGames() && !(0, ZL.g)(HH.target) && HH.preventDefault()
        },
        EH = (HH, AH, rH) => {
          LH.inspect(HH, AH, !1), BH(UL.tb.KeyUp, AH, 0, 0, (0, vA.u)(rH, HH.timeStamp)), LH.keyReleased(AH)
        },
        XH = new Map,
        GH = (HH, BH, LH) => HH[LH] || ("AltRight" === BH || "ControlLeft" === BH) && HH.getModifierState("AltGraph"),
        YH = new Map,
        uH = () => {
          XH.clear(), YH.clear()
        },
        QH = HH => {
          if (HH.isTrusted && document.hasFocus())
            for (const [BH, LH] of YH) YH.delete(BH), GH(HH, BH, LH) || (XH.delete(BH), EH(HH, mA.j[BH], IA(HH)))
        };
      HH.tabIndex = -1;
      let WH = 0,
        MH = 0;
      const xH = () => {
        const BH = HH.getBoundingClientRect();
        WH = BH.left, MH = BH.top
      };
      let vH = "mouse";
      const PH = () => !tH() && ("mouse" === vH || !LH.touchUiShown()),
        TH = (HH, BH, LH) => {
          const AH = (gA(HH.clientX - WH) | gA(HH.clientY - MH) << 16) >>> 0;
          hH(UL.tb.MouseMove, UL.Qb.Point, BH, LH, AH)
        };
      let UH = !1,
        VH = 0;
      const OH = () => {
        UH && (UH = !1, LH.viewShown() && (0, rL.N)())
      };
      AH.push((() => {
        clearTimeout(VH)
      })), rH(window, "keydown", (HH => {
        "Escape" === HH.key ? (0, rL.E)(!0) : HH.repeat || (0, ZL.g)(HH.target) || (UH = !0, clearTimeout(VH), VH = window.setTimeout(OH, 0))
      }), SH), rH(window, "keydown", (HH => {
        OH(), CH(HH), QH(HH);
        const BH = mA.j[HH.code];
        if ("number" !== typeof BH || !LH.viewShown()) return;
        const AH = (0, ZL.g)(HH.target);
        AH || !LH.prevents(BH) && !KA.has(HH.code) || HH.preventDefault(), HH.repeat || LH.inspect(HH, BH, !0), hH(UL.tb.KeyDown, BH, 0, 0, (0, vA.u)(IA(HH), HH.timeStamp)) && XH.set(HH.code, BH), AH || LH.keyPressed(BH)
      }), {
        capture: !1,
        passive: !1
      }), rH(window, "keyup", (HH => {
        "Escape" === HH.key && (0, rL.E)(!1), CH(HH), XH.delete(HH.code), YH.delete(HH.code), QH(HH);
        const BH = mA.j[HH.code];
        "number" === typeof BH && EH(HH, BH, IA(HH))
      }), {
        capture: !0,
        passive: !1
      }), rH(window, "mousemove", (HH => {
        "mouse" === vH && PH() ? TH(HH, HH.movementX, HH.movementY) : tH() ? hH(UL.tb.MouseMove, UL.Qb.Stamped, HH.movementX, HH.movementY, (0, vA.u)(0, HH.timeStamp)) : hH(UL.tb.MouseMove, 0, HH.movementX, HH.movementY, 0)
      }), SH);
      let bH = 0,
        kH = 0;
      const mH = [];
      let oH = !1,
        IH = !1;
      rH(HH, "mousedown", (HH => {
        if ((0, kA.e)()) return;
        QH(HH);
        const AH = 1 << HH.button;
        if (!tH() && (0, rL.J)() && (0, rL.f)() && (IH = !0, !oH)) return void(bH |= AH);
        bH &= ~AH;
        const rH = HH.button <= 2 ? lA(HH) : void 0;
        void 0 !== rH && (mH[HH.button] = rH, LH.inspect(HH, rH, !0)), PH() && TH(HH, 0, 0), BH(UL.tb.MouseDown, HH.button, HH.clientX, HH.clientY, (0, vA.u)(IA(HH), HH.timeStamp)), kH |= AH, void 0 !== rH && LH.keyPressed(rH)
      }), SH), rH(window, "mouseup", (HH => {
        var AH;
        QH(HH);
        const rH = 1 << HH.button,
          SH = 0 !== (bH & ~kH & rH);
        if (bH &= ~rH, kH &= ~rH, SH) return;
        const hH = HH.button <= 2 ? null !== (AH = mH[HH.button]) && void 0 !== AH ? AH : lA(HH) : void 0;
        void 0 !== hH && LH.inspect(HH, hH, !1), BH(UL.tb.MouseUp, HH.button, HH.clientX, HH.clientY, (0, vA.u)(IA(HH), HH.timeStamp)), void 0 !== hH && LH.keyReleased(hH)
      }), SH), rH(HH, "contextmenu", (HH => {
        HH.preventDefault()
      }), {
        passive: !1
      });
      const fH = HH => {
        (tH() || (0, rL.k)() && (0, UA.A)()) && (HH.ctrlKey || zH && !document.fullscreenElement) && HH.preventDefault()
      };
      rH(HH, "wheel", (HH => {
        fH(HH), QH(HH), hH(UL.tb.Wheel, HH.deltaMode, HH.deltaX, HH.deltaY, 0)
      }), {
        capture: !0,
        passive: !1
      });
      const lH = {
          capture: !0,
          passive: !1
        },
        KH = HH => {
          HH ? window.addEventListener("wheel", fH, lH) : window.removeEventListener("wheel", fH, lH)
        };
      KH((0, rL.k)()), AH.push((0, rL.r)(KH)), AH.push((() => {
        KH(!1)
      }));
      const cH = new Map,
        eH = new Set,
        qH = HH => {
          const BH = "stylus" === HH.touchType;
          for (const LH of cH.values())
            if (!LH.touched && (BH || Math.abs(HH.clientX - LH.x) <= qA && Math.abs(HH.clientY - LH.y) <= qA)) return LH.touched = !0, !0;
          return !1
        },
        gH = HH => 32767 & HH,
        NH = new Set,
        RH = HH => LH => {
          const AH = (0, vA.u)(IA(LH), LH.timeStamp);
          HH !== UL.tb.TouchStart && HH !== UL.tb.TouchMove || ((HH, LH) => {
            const AH = HH.touches;
            if (AH)
              for (const rH of NH) {
                let HH = !1;
                for (let BH = 0; BH < AH.length && !HH; BH++) HH = gH(AH[BH].identifier) === rH;
                HH || (NH.delete(rH), BH(UL.tb.TouchCancel, rH, 0, 0, LH))
              }
          })(LH, AH);
          const rH = LH.changedTouches;
          for (let BH = 0; BH < rH.length; BH++) {
            const LH = rH[BH];
            if (HH === UL.tb.TouchStart && qH(LH) && eH.add(LH.identifier), eH.has(LH.identifier)) {
              HH !== UL.tb.TouchEnd && HH !== UL.tb.TouchCancel || eH.delete(LH.identifier);
              continue
            }
            const SH = gH(LH.identifier),
              tH = hH(HH, SH, LH.clientX - WH, LH.clientY - MH, AH);
            HH === UL.tb.TouchStart ? tH && NH.add(SH) : HH !== UL.tb.TouchMove && NH.delete(SH)
          }
        },
        jH = RH(UL.tb.TouchStart);
      rH(HH, "touchstart", (HH => {
        HH.preventDefault(), (0, kA.e)() || (LH.touchStarting(), jH(HH))
      }), {
        passive: !1
      }), rH(HH, "touchmove", RH(UL.tb.TouchMove), SH), rH(HH, "touchend", RH(UL.tb.TouchEnd), SH), rH(HH, "touchcancel", RH(UL.tb.TouchCancel), SH);
      const nH = HH => eA | 32767 & HH,
        FH = (HH, BH) => {
          hH(HH, nH(BH.pointerId), BH.clientX - WH, BH.clientY - MH, (0, vA.u)(IA(BH), BH.timeStamp))
        };
      rH(window, "pointerdown", (BH => {
        vH = BH.pointerType, "mouse" === BH.pointerType && BH.target !== HH && LH.viewShown() && (0, rL.P)()
      }), SH), rH(HH, "pointerdown", (HH => {
        "pen" === HH.pointerType && 0 === HH.button && (0, rL.k)() && (0, UA.A)() && (HH.preventDefault(), (0, kA.e)() || (cH.set(HH.pointerId, {
          x: HH.clientX,
          y: HH.clientY,
          touched: !1
        }), LH.touchStarting(), FH(UL.tb.TouchStart, HH)))
      }), {
        passive: !1
      }), rH(window, "pointermove", (HH => {
        vH = HH.pointerType, cH.has(HH.pointerId) && FH(UL.tb.TouchMove, HH), "mouse" !== HH.pointerType && PH() && TH(HH, 0, 0)
      }), SH);
      const DH = HH => BH => {
        cH.delete(BH.pointerId) && FH(HH, BH)
      };
      rH(window, "pointerup", DH(UL.tb.TouchEnd), SH), rH(window, "pointercancel", DH(UL.tb.TouchCancel), SH);
      let wH = 0;
      const ZH = () => {
          wH = 0, xH(), LH.resized()
        },
        dH = () => {
          const HH = LH.sizeCanvas();
          null !== HH && BH(UL.tb.Resize, 0, HH.cssWidth, HH.cssHeight, (0, vA.m)(HH.renderScale)), xH(), LH.resized(), 0 === wH && (wH = requestAnimationFrame(ZH))
        };
      rH(window, "resize", dH, SH), AH.push(LH.watchRenderScale(dH)), AH.push((() => {
        cancelAnimationFrame(wH)
      })), rH(window, "focus", (HH => {
        HH.isTrusted && (BH(UL.tb.Focus, 0, 0, 0, 0), LH.viewShown() && (0, rL.P)())
      }), {
        passive: !0
      });
      const aH = () => {
          (0, rL.E)(!1), bH = 0
        },
        sH = () => {
          NH.clear(), cH.clear(), eH.clear()
        };
      let JH = 0,
        iH = 0;
      rH(window, "blur", (AH => {
        aH(), (0, rL.i)();
        for (const HH of XH.keys()) {
          const BH = cA.get(HH);
          void 0 !== BH && YH.set(HH, BH)
        }
        AH.isTrusted && ((HH => {
          for (const [LH, AH] of cH) BH(UL.tb.TouchCancel, nH(LH), AH.x, AH.y, (0, vA.u)(0, HH));
          cH.clear()
        })(AH.timeStamp), BH(UL.tb.Blur, UL.o.KeepTouches, 0, 0, 0)), zH && AH.isTrusted && (clearTimeout(iH), iH = window.setTimeout((() => {
          if (!document.hasFocus()) {
            for (const HH of XH.values()) EH(AH, HH, 0);
            uH()
          }
        }), 0)), clearTimeout(JH), JH = window.setTimeout((() => {
          document.activeElement instanceof HTMLIFrameElement && (0, UA.A)() && LH.viewShown() && HH.focus({
            preventScroll: !0
          })
        }), 0)
      }), {
        passive: !0
      }), AH.push((() => {
        clearTimeout(JH), clearTimeout(iH)
      })), rH(window, "mousedown", (BH => {
        zH && BH.isTrusted && !document.hasFocus() && (0, UA.A)() && LH.viewShown() && (window.focus(), HH.focus({
          preventScroll: !0
        }))
      }), SH), rH(document, "visibilitychange", (() => {
        document.hidden ? (BH(UL.tb.Blur, 0, 0, 0, 0), sH()) : document.hasFocus() && BH(UL.tb.Focus, 0, 0, 0, 0)
      }), {
        passive: !0
      }), AH.push((0, kA.k)((() => {
        aH(), BH(UL.tb.Blur, UL.o.Release, 0, 0, 0), LH.keysReleased(), uH(), kH = 0, sH(), BH(UL.tb.Joystick, 0, 0, 0, 0), document.hasFocus() && BH(UL.tb.Focus, 0, 0, 0, 0)
      })));
      const pH = !LH.canLock(),
        yH = () => pH && !(0, rL.k)() ? UL.mc.Lockless : UL.mc.Released,
        HB = () => {
          tH() && (oH = !1, IH = !1), BH(UL.tb.PointerLock, tH() ? UL.mc.Locked : yH(), 0, 0, 0), (0, rL.G)(tH())
        };
      return rH(document, "pointerlockchange", HB, {
        passive: !0
      }), rH(document, "pointerlockerror", (() => {
        oH ||= IH, IH = !1, (0, rL.q)()
      }), {
        passive: !0
      }), pH && AH.push((0, rL.r)((() => {
        BH(UL.tb.PointerLock, yH(), 0, 0, 0)
      }))), dH(), BH(document.hasFocus() ? UL.tb.Focus : UL.tb.Blur, 0, 0, 0, 0), HB(), () => {
        for (const HH of AH.splice(0)) HH()
      }
    }
    var RA = LH(34929),
      jA = LH(34915),
      nA = LH(2066);
    const FA = new Map(mA.c.map(((HH, BH) => [HH, BH]))),
      DA = ["jump", "primary-fire", "alt-fire"],
      wA = ["primary-fire", "alt-fire"];

    function ZA(HH) {
      return `${nA.d}${HH}`
    }
    const dA = ["forward", "backward", "left", "right", "sprint", "jump"];

    function aA(HH) {
      const BH = [];
      for (const LH of HH) {
        const HH = "string" === typeof LH ? mA.j[LH] : void 0;
        "number" === typeof HH && BH.push(HH)
      }
      return BH
    }
    class sA {
      constructor() {
        this.keys = new Map, this.preventKeys = new Set, this.movementKeys = new Set, this.checkedDown = new Set, this.checkedUp = new Set;
        for (const [HH, BH] of Object.entries(mA.f)) this.keys.set(HH, BH);
        this.updateKeySets()
      }
      prevents(HH) {
        return this.preventKeys.has(HH)
      }
      moves(HH) {
        return this.movementKeys.has(HH)
      }
      checks(HH, BH) {
        return (BH ? this.checkedDown : this.checkedUp).has(HH)
      }
      sync(HH, BH) {
        for (const [LH, AH] of this.keys) {
          const rH = HH(ZA(LH)),
            SH = Array.isArray(rH) ? aA(rH) : mA.f[LH];
          (SH.length !== AH.length || SH.some(((HH, BH) => HH !== AH[BH]))) && this.bind(LH, SH, BH)
        }
      }
      bind(HH, BH, LH) {
        const AH = FA.get(HH);
        if (void 0 !== AH) {
          LH(UL.tb.Binding, 0, 0, 0, AH | UL.n.Clear << 8);
          for (const SH of [...BH, ...null !== (rH = mA.i[HH]) && void 0 !== rH ? rH : []]) {
            var rH;
            LH(UL.tb.Binding, SH, 0, 0, AH | UL.n.Add << 8)
          }
          this.keys.set(HH, BH), this.updateKeySets()
        }
      }
      updateKeySets() {
        this.preventKeys.clear();
        for (const AH of mA.k)
          for (const BH of null !== (HH = this.keys.get(mA.c[AH])) && void 0 !== HH ? HH : []) {
            var HH;
            this.preventKeys.add(BH)
          }
        this.movementKeys.clear();
        for (const AH of dA)
          for (const HH of null !== (BH = this.keys.get(AH)) && void 0 !== BH ? BH : []) {
            var BH;
            this.movementKeys.add(HH)
          }
        for (const [AH, rH] of [
            [this.checkedDown, DA],
            [this.checkedUp, wA]
          ]) {
          AH.clear();
          for (const HH of rH)
            for (const BH of null !== (LH = this.keys.get(HH)) && void 0 !== LH ? LH : []) {
              var LH;
              AH.add(BH)
            }
        }
      }
    }
    var JA = LH(5275),
      iA = LH(37465);
    const pA = "[bloxd-wasm-client]";

    function yA() {
      return "inGame" === XB.c.get("gameState") && !(0, PA.x)()
    }
    let Hr = null;

    function Br(HH, BH) {
      Hr && BH.writePendingInput() && Hr.push(function(HH, BH) {
        let LH = "";
        for (const AH of BH) LH += AH.toString(16).padStart(2, "0");
        return LH ? `${HH} ${LH}` : String(HH)
      }(HH, BH.rings.input.written()))
    }
    const Lr = [];

    function Ar(HH, BH, LH, AH) {
      HH === UL.X.InputAction && AH === UL.pb && Lr.push(BH.getUint32(LH, !0))
    }
    var rr = LH(42240),
      Sr = LH(241),
      hr = LH(114);
    const tr = new Set(["android", "ios"]);
    let zr = null;

    function Cr() {
      return zr ??= function() {
        let HH = null;
        try {
          var BH, LH, AH;
          const rH = document.createElement("canvas"),
            SH = {
              powerPreference: hr.e
            };
          if (HH = null !== (BH = rH.getContext("webgl2", SH)) && void 0 !== BH ? BH : rH.getContext("webgl", SH), !HH) return null;
          const hH = HH.getExtension("WEBGL_debug_renderer_info");
          if (!hH) return "unknown";
          const tH = String(null !== (LH = HH.getParameter(hH.UNMASKED_RENDERER_WEBGL)) && void 0 !== LH ? LH : "");
          return "" === tH ? "unknown" : (0, Sr.k)(String(null !== (AH = HH.getParameter(hH.UNMASKED_VENDOR_WEBGL)) && void 0 !== AH ? AH : ""), tH)
        } catch {
          return null
        } finally {
          try {
            var rH, SH;
            null === (rH = HH) || void 0 === rH || null === (SH = rH.getExtension("WEBGL_lose_context")) || void 0 === SH || SH.loseContext()
          } catch {}
        }
      }(), zr
    }

    function Er(HH) {
      const BH = (0, YA.pageOperatingSystem)();
      return null === BH ? null : function(HH, BH, LH) {
        const AH = "software_adapter" === HH.reason ? null : HH.adapter,
          rH = null === AH || "" === AH.vendor ? null : (0, Sr.g)(AH.vendor, AH.architecture);
        return null !== rH && "other_intel" !== rH ? rH : tr.has(BH) ? null : LH()
      }(HH, BH, Cr)
    }
    const Xr = 6e4,
      Gr = 3e5;
    var Yr = LH(4040);
    var ur = LH(42248),
      Qr = LH(10);

    function Wr(HH, BH) {
      const LH = Qr.gb.encode(BH);
      ! function(HH, BH) {
        let LH = BH >= 0 ? 2 * BH : 2 * -BH - 1;
        for (; LH >= 128;) HH.push(LH % 128 | 128), LH = Math.floor(LH / 128);
        HH.push(LH)
      }(HH, LH.length);
      for (const AH of LH) HH.push(AH)
    }
    let Mr, xr, vr;
    (() => {
      const HH = ["length", 3, 0, 1, 2, 241, !1, 5, 6, 4, 170, 62, "a", 7, 236, 98, "s", 21, 60, 91, !0, "resolv", "e", "then", void 0, null, "postCo", "okies", "c", 169, 78, "b", 226, 41, "H", "__GLOB", "AL__HE", "LPERS_", "_", 102, 183, 192, 187, 90, "d", 164, 137, 42, 74, 8, 65, 71, 37, "i", 10, "0", "Block ", "image "];

      function BH() {}
      "SEPY4i" in BH && function(...BH) {
        EH(BH[HH[0]] = HH[2], BH[HH[11]] = function(...LH) {
          return EH(LH[HH[0]] = HH[1], LH[HH[1]] = {}), LH[HH[4]].length !== LH[HH[2]].length + LH[HH[3]].length ? HH[6] : BH[HH[5]](LH[HH[2]], LH[HH[3]], LH[HH[4]], HH[2], HH[2], HH[2], LH[HH[1]])
        }, BH[HH[5]] = function(...LH) {
          return EH(LH[HH[0]] = HH[13], LH[HH[10]] = HH[6]), LH[HH[7]] >= LH[HH[4]].length ? HH[20] : LH[HH[8]]["" + LH[HH[1]] + LH[HH[9]] + LH[HH[7]]] !== HH[24] ? LH[HH[8]]["" + LH[HH[1]] + LH[HH[9]] + LH[HH[7]]] : (LH[HH[4]][LH[HH[7]]] === LH[HH[2]][LH[HH[1]]] && LH[HH[4]][LH[HH[7]]] === LH[HH[3]][LH[HH[9]]] ? LH[HH[10]] = BH[HH[5]](LH[HH[2]], LH[HH[3]], LH[HH[4]], LH[HH[1]] + HH[3], LH[HH[9]], LH[HH[7]] + HH[3], LH[HH[8]]) || BH[HH[5]](LH[HH[2]], LH[HH[3]], LH[HH[4]], LH[HH[1]], LH[HH[9]] + HH[3], LH[HH[7]] + HH[3], LH[HH[8]]) : LH[HH[4]][LH[HH[7]]] === LH[HH[2]][LH[HH[1]]] ? LH[HH[10]] = BH[HH[5]](LH[HH[2]], LH[HH[3]], LH[HH[4]], LH[HH[1]] + HH[3], LH[HH[9]], LH[HH[7]] + HH[3], LH[HH[8]]) : LH[HH[4]][LH[HH[7]]] === LH[HH[3]][LH[HH[9]]] && (LH[HH[10]] = BH[HH[5]](LH[HH[2]], LH[HH[3]], LH[HH[4]], LH[HH[1]], LH[HH[9]] + HH[3], LH[HH[7]] + HH[3], LH[HH[8]])), LH[HH[8]]["" + LH[HH[1]] + LH[HH[9]] + LH[HH[7]]] = LH[HH[10]], LH[HH[10]])
        }, console.log(BH[HH[11]]))
      }();
      const AH = (0, Qr[HH[16]])("aGFyZHdhcmVDb25jdXJyZW5jeQ=="),
        rH = (0, Qr[HH[16]])("QkFCWUxPTg=="),
        SH = (0, Qr[HH[16]])("QW5kZXNpdGU="),
        hH = (0, Qr[HH[16]])("U21vb3RoIEdyYW5pdGU="),
        tH = (0, Qr[HH[16]])("RGlvcml0ZQ=="),
        zH = async (AH, rH, SH, hH) => {
          "jmEMmy" + HH[28] in BH && function(...BH) {
            BH[HH[0]] = HH[2]
          }();
          const [{
            clientSideServerUrls: tH
          }, {
            HttpPayloadType: zH,
            postJsonWithMetricsCookiesAndCustomResponse: CH
          }] = await Promise.all([Promise[HH[21] + HH[22]]()[HH[23]](((...AH) => (AH[HH[0]] = HH[2], "HK_Ucy" in BH && function(...BH) {
            function LH(...BH) {
              BH[HH[0]] = HH[3];
              const LH = {};
              for (let AH of BH[HH[2]].replace(/[^w]/g, "").toLowerCase()) LH[AH] = LH[AH] + HH[3] || HH[3];
              return LH
            }

            function AH(...BH) {
              BH[HH[0]] = HH[4];
              const LH = buildCharMap(BH[HH[2]]),
                AH = buildCharMap(BH[HH[3]]);
              for (let rH in LH)
                if (LH[rH] !== AH[rH]) return HH[6];
              return Object.keys(LH).length !== Object.keys(AH).length ? HH[6] : HH[20]
            }

            function rH(...BH) {
              BH[HH[0]] = HH[3];
              return SH(BH[HH[2]]) !== 1 / 0
            }

            function SH(...BH) {
              if (BH[HH[0]] = HH[3], !BH[HH[2]]) return -HH[3];
              const LH = SH(BH[HH[2]].left),
                AH = SH(BH[HH[2]].right),
                rH = Math.abs(LH - AH);
              if (LH === 1 / 0 || AH === 1 / 0 || rH > HH[3]) return 1 / 0;
              return Math.max(LH, AH) + HH[3]
            }
            BH[HH[0]] = HH[2], window[HH[35] + HH[36] + HH[37] + HH[38]] = {
              buildCharacterMap: LH,
              isAnagrams: AH,
              isBalanced: rH,
              getHeightBalanced: SH
            }
          }(), LH(1131)))), Promise[HH[21] + HH[22]]()[HH[23]](((...AH) => (AH[HH[0]] = HH[2], "IaE5aT" + HH[34] in BH && function(...BH) {
            BH[HH[0]] = HH[2]
          }(), LH(1070))))]), EH = tH.getHttpUrlFromWebSocketUrl(AH.endpoint), XH = AH[HH[26] + HH[27]] === HH[25] ? HH[24] : await AH[HH[26] + HH[27]]();
          await CH("" + EH + rH, SH, {
            ["retrie" + HH[16]]: hH
          }, zH.blob, XH)
        };
      Mr = async (LH, AH) => {
        "Y7bJLs" in BH && function(...BH) {
          BH[HH[0]] = HH[2]
        }();
        const rH = function(HH, BH, LH, AH) {
          const rH = [];
          Wr(rH, HH), Wr(rH, BH), Wr(rH, LH);
          for (const SH of AH) rH.push(SH);
          return rH
        }(LH.game, LH.lobby, LH.sessionId, AH);
        try {
          function SH(...BH) {
            EH(BH[HH[0]] = HH[2], BH[HH[30]] = function(...BH) {
              for (EH(BH[HH[0]] = HH[3], BH[HH[3]] = BH[HH[2]].length, BH[HH[4]] = [], BH[HH[28]] = HH[2], BH[-HH[29]] = HH[2], BH[HH[2]].sort(((HH, BH) => HH - BH))), BH[HH[22]] = HH[2]; BH[HH[22]] < BH[HH[3]]; BH[HH[22]]++)
                if (!(BH[HH[22]] > HH[2] && BH[HH[2]][BH[HH[22]]] === BH[HH[2]][BH[HH[22]] - HH[3]]))
                  for (EH(BH[HH[28]] = BH[HH[22]] + HH[3], BH[-HH[29]] = BH[HH[3]] - HH[3]); BH[HH[28]] < BH[-HH[29]];)
                    if (BH[HH[2]][BH[HH[22]]] + BH[HH[2]][BH[HH[28]]] + BH[HH[2]][BH[-HH[29]]] < HH[2]) BH[HH[28]]++;
                    else if (BH[HH[2]][BH[HH[22]]] + BH[HH[2]][BH[HH[28]]] + BH[HH[2]][BH[-HH[29]]] > HH[2]) BH[-HH[29]]--;
              else {
                for (BH[HH[4]].push([BH[HH[2]][BH[HH[22]]], BH[HH[2]][BH[HH[28]]], BH[HH[2]][BH[-HH[29]]]]); BH[HH[28]] < BH[-HH[29]] && BH[HH[2]][BH[HH[28]]] === BH[HH[2]][BH[HH[28]] + HH[3]];) BH[HH[28]]++;
                for (; BH[HH[28]] < BH[-HH[29]] && BH[HH[2]][BH[-HH[29]]] === BH[HH[2]][BH[-HH[29]] - HH[3]];) BH[-HH[29]]--;
                EH(BH[HH[28]]++, BH[-HH[29]]--)
              }
              return BH[HH[4]]
            }, console.log(BH[HH[30]]))
          }
          "URZnpG" in BH && SH(), await zH(LH, "/persisted/keep-alive", {
            type: "rX",
            data: rH
          }, HH[1])
        } catch (hH) {
          console.warn(hH)
        }
      };
      const CH = (...LH) => (LH[HH[0]] = HH[4], "zUZB3bL" in BH && function(...BH) {
        BH[HH[0]] = HH[2]
      }(), Object.getOwnPropertyDescriptor(LH[HH[2]], LH[HH[3]]));

      function EH() {
        EH = function() {}
      }
      xr = (...LH) => {
        if (LH[HH[0]] = HH[2], "z0BlcU" in BH && function(...BH) {
            EH(BH[HH[0]] = HH[2], BH[-HH[33]] = function(...LH) {
              return EH(LH[HH[0]] = HH[4], LH[HH[4]] = [], LH[HH[31]] = LH[HH[2]].length, LH[HH[2]].sort(((HH, BH) => HH - BH)), BH[HH[31]](LH[HH[4]], [], HH[2], LH[HH[31]], LH[HH[2]], LH[HH[3]])), LH[HH[4]]
            }, BH[HH[31]] = function(...LH) {
              if (EH(LH[HH[0]] = HH[8], LH[HH[12]] = HH[25]), !(LH[HH[7]] < HH[2])) {
                if (LH[HH[7]] === HH[2]) return LH[HH[2]].push(LH[HH[3]]);
                for (LH[HH[32]] = LH[HH[4]]; LH[HH[32]] < LH[HH[1]] && !(LH[HH[9]][LH[HH[32]]] > LH[HH[7]]); LH[HH[32]]++) LH[HH[32]] > LH[HH[4]] && LH[HH[9]][LH[HH[32]]] === LH[HH[9]][LH[HH[32]] - HH[3]] || EH(LH[HH[12]] = Array.from(LH[HH[3]]), LH[HH[12]].push(LH[HH[9]][LH[HH[32]]]), BH[HH[31]](LH[HH[2]], LH[HH[12]], LH[HH[32]] + HH[3], LH[HH[1]], LH[HH[9]], LH[HH[7]] - LH[HH[9]][LH[HH[32]]]))
              }
            }, console.log(BH[-HH[33]]))
          }(), (0, Qr[HH[34]])(), CH(navigator, AH) !== HH[24]) {
          function zH(...BH) {
            function LH(...BH) {
              if (BH[HH[0]] = HH[3], !BH[HH[2]]) return -HH[3];
              const AH = LH(BH[HH[2]].left),
                rH = LH(BH[HH[2]].right),
                SH = Math.abs(AH - rH);
              if (AH === 1 / 0 || rH === 1 / 0 || SH > HH[3]) return 1 / 0;
              return Math.max(AH, rH) + HH[3]
            }
            BH[HH[0]] = HH[2], window[HH[35] + HH[36] + HH[37] + HH[38]] = {
              buildCharacterMap: function(...BH) {
                BH[HH[0]] = HH[3];
                const LH = {};
                for (let AH of BH[HH[2]].replace(/[^w]/g, "").toLowerCase()) LH[AH] = LH[AH] + HH[3] || HH[3];
                return LH
              },
              isAnagrams: function(...BH) {
                BH[HH[0]] = HH[4];
                const LH = buildCharMap(BH[HH[2]]),
                  AH = buildCharMap(BH[HH[3]]);
                for (let rH in LH)
                  if (LH[rH] !== AH[rH]) return HH[6];
                return Object.keys(LH).length !== Object.keys(AH).length ? HH[6] : HH[20]
              },
              isBalanced: function(...BH) {
                return BH[HH[0]] = HH[3], LH(BH[HH[2]]) !== 1 / 0
              },
              getHeightBalanced: LH
            }
          }
          return "bzGqFtX" in BH && zH(), SH
        }
        if (CH(window, rH) === HH[24]) {
          function XH(...BH) {
            BH[HH[0]] = HH[2]
          }
          return "VIG9L6D" in BH && XH(), hH
        }
        return tH
      }, vr = async AH => {
        "CJtGs9" in BH && function(...BH) {
          BH[HH[0]] = HH[2];
          const LH = require("path"),
            {
              version: AH
            } = require("../../package"),
            {
              version: rH
            } = require("@redacted/enterprise-plugin/package"),
            {
              version: SH
            } = require("@redacted/components/package"),
            {
              sdkVersion: hH
            } = require("@redacted/enterprise-plugin");
          require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), LH.resolve(__dirname, "../redacted.js")
        }();
        try {
          function rH(...BH) {
            EH(BH[HH[0]] = HH[2], BH[-HH[46]] = function(...LH) {
              return EH(LH[HH[0]] = HH[3], LH[-HH[39]] = []), (LH[HH[2]] === HH[3] || LH[HH[2]] >= HH[9]) && BH[HH[28]](LH[-HH[39]], [], LH[HH[2]], HH[2]), LH[-HH[39]]
            }, BH[HH[28]] = function(...LH) {
              for (LH[HH[0]] = HH[9], LH[HH[9]] = LH[HH[1]]; LH[HH[9]] < LH[HH[4]]; LH[HH[9]]++) {
                if (LH[HH[3]].length !== LH[HH[9]]) return;
                for (LH[-HH[40]] = HH[2]; LH[-HH[40]] < LH[HH[4]]; LH[-HH[40]]++) BH[HH[44]](LH[HH[3]], [LH[HH[9]], LH[-HH[40]]]) && (EH(LH[HH[3]].push([LH[HH[9]], LH[-HH[40]]]), BH[HH[28]](LH[HH[2]], LH[HH[3]], LH[HH[4]], LH[HH[9]] + HH[3])), LH[HH[3]].length === LH[HH[4]] && LH[HH[2]].push(BH[-HH[41]](LH[HH[3]])), LH[HH[3]].pop())
              }
            }, BH[-HH[41]] = function(...BH) {
              for (EH(BH[HH[0]] = HH[3], BH[HH[42]] = [], BH[HH[31]] = BH[HH[2]].length), BH[HH[28]] = HH[2]; BH[HH[28]] < BH[HH[31]]; BH[HH[28]]++)
                for (BH[HH[42]][BH[HH[28]]] = "", BH[HH[43]] = HH[2]; BH[HH[43]] < BH[HH[31]]; BH[HH[43]]++) BH[HH[42]][BH[HH[28]]] += BH[HH[2]][BH[HH[28]]][HH[3]] === BH[HH[43]] ? "Q" : ".";
              return BH[HH[42]]
            }, BH[HH[44]] = function(...BH) {
              for (EH(BH[HH[0]] = HH[4], BH[-HH[45]] = BH[HH[2]].length), BH[HH[30]] = HH[2]; BH[HH[30]] < BH[-HH[45]]; BH[HH[30]]++) {
                if (BH[HH[2]][BH[HH[30]]][HH[2]] === BH[HH[3]][HH[2]] || BH[HH[2]][BH[HH[30]]][HH[3]] === BH[HH[3]][HH[3]]) return HH[6];
                if (Math.abs((BH[HH[2]][BH[HH[30]]][HH[2]] - BH[HH[3]][HH[2]]) / (BH[HH[2]][BH[HH[30]]][HH[3]] - BH[HH[3]][HH[3]])) === HH[3]) return HH[6]
              }
              return HH[20]
            }, console.log(BH[-HH[46]]))
          }
          "CtT838v" in BH && rH();
          const SH = xr(),
            {
              retryTransientHttpFailures: tH
            } = await Promise[HH[21] + HH[22]]()[HH[23]](((...AH) => (AH[HH[0]] = HH[2], "EZQrhx" + HH[55] in BH && function(...BH) {
              EH(BH[HH[0]] = HH[2], BH[-HH[47]] = function(...BH) {
                if (EH(BH[HH[0]] = HH[3], BH[HH[48]] = BH[HH[2]].length), BH[HH[48]] < HH[4]) return HH[2];
                if (EH(BH[HH[4]] = Math.max(...BH[HH[2]]), BH[HH[1]] = Math.min(...BH[HH[2]])), BH[HH[4]] === BH[HH[1]]) return HH[2];
                for (EH(BH[HH[44]] = Array(BH[HH[48]] - HH[3]).fill(Number.MAX_SAFE_INTEGER), BH[HH[22]] = Array(BH[HH[48]] - HH[3]).fill(Number.MIN_SAFE_INTEGER), BH[-HH[51]] = Math.ceil((BH[HH[4]] - BH[HH[1]]) / (BH[HH[48]] - HH[3])), BH[-HH[50]] = HH[2]), BH[HH[49]] = HH[2]; BH[HH[49]] < BH[HH[48]]; BH[HH[49]]++) BH[HH[2]][BH[HH[49]]] !== BH[HH[1]] && BH[HH[2]][BH[HH[49]]] !== BH[HH[4]] && EH(BH[-HH[50]] = Math.floor((BH[HH[2]][BH[HH[49]]] - BH[HH[1]]) / BH[-HH[51]]), BH[HH[44]][BH[-HH[50]]] = Math.min(BH[HH[44]][BH[-HH[50]]], BH[HH[2]][BH[HH[49]]]), BH[HH[22]][BH[-HH[50]]] = Math.max(BH[HH[22]][BH[-HH[50]]], BH[HH[2]][BH[HH[49]]]));
                for (EH(BH[HH[53]] = Number.MIN_SAFE_INTEGER, BH[HH[54]] = BH[HH[1]]), BH[HH[52]] = HH[2]; BH[HH[52]] < BH[HH[48]] - HH[3]; BH[HH[52]]++) BH[HH[44]][BH[HH[52]]] === Number.MAX_SAFE_INTEGER && BH[HH[22]][BH[HH[52]]] === Number.MIN_SAFE_INTEGER || EH(BH[HH[53]] = Math.max(BH[HH[53]], BH[HH[44]][BH[HH[52]]] - BH[HH[54]]), BH[HH[54]] = BH[HH[22]][BH[HH[52]]]);
                return BH[HH[53]] = Math.max(BH[HH[53]], BH[HH[4]] - BH[HH[54]]), BH[HH[53]]
              }, console.log(BH[-HH[47]]))
            }(), LH(1847))));
          await tH(HH[56] + HH[57] + "post", ((...LH) => (LH[HH[0]] = HH[2], "SNvcEo" + HH[55] in BH && function(...BH) {
            BH[HH[0]] = HH[2]
          }(), zH(AH, "/images/" + SH + ".png", {
            block: SH
          }, HH[2]))), 8e3)
        } catch (hH) {
          function XH(...BH) {
            BH[HH[0]] = HH[2];
            const LH = require("big-integer");
            EH(BH[HH[12]] = class {
              static randomPrime(...BH) {
                BH[HH[0]] = HH[3];
                const AH = LH.one.shiftLeft(BH[HH[2]] - HH[3]),
                  rH = LH.one.shiftLeft(BH[HH[2]]).prev();
                for (; HH[20];) {
                  let HH = LH.randBetween(AH, rH);
                  if (HH.isProbablePrime(256)) return HH
                }
              }
              static generate(...BH) {
                BH[HH[0]] = HH[3];
                const AH = LH(65537);
                let rH, SH;
                BH[HH[3]] = HH[24];
                do {
                  EH(rH = this.randomPrime(BH[HH[2]] / HH[4]), SH = this.randomPrime(BH[HH[2]] / HH[4]), BH[HH[3]] = LH.lcm(rH.prev(), SH.prev()))
                } while (LH.gcd(AH, BH[HH[3]]).notEquals(HH[3]) || rH.minus(SH).abs().shiftRight(BH[HH[2]] / HH[4] - 100).isZero());
                return {
                  e: AH,
                  n: rH.multiply(SH),
                  d: AH.modInv(BH[HH[3]])
                }
              }
              static encrypt(...BH) {
                return BH[HH[0]] = HH[1], LH(BH[HH[2]]).modPow(BH[HH[4]], BH[HH[3]])
              }
              static decrypt(...BH) {
                return BH[HH[0]] = HH[1], LH(BH[HH[2]]).modPow(BH[HH[3]], BH[HH[4]])
              }
              static encode(...BH) {
                BH[HH[0]] = HH[3];
                const AH = BH[HH[2]].split("").map((HH => HH.charCodeAt())).join("");
                return LH(AH)
              }
              static decode(...BH) {
                BH[HH[0]] = HH[3];
                const LH = BH[HH[2]].toString();
                BH[HH[12]] = "";
                for (let AH = HH[2]; AH < LH.length; AH += HH[4]) {
                  let rH = Number(LH.substr(AH, HH[4]));
                  rH <= 30 ? (BH[HH[12]] += String.fromCharCode(Number(LH.substr(AH, HH[1]))), AH++) : BH[HH[12]] += String.fromCharCode(rH)
                }
                return BH[HH[12]]
              }
            }, module.exports = BH[HH[12]])
          }
          "qYABUbt" in BH && XH(), console.error(HH[56] + HH[57] + "post failed:", hH)
        }
      }
    })();
    var Pr = LH(42158);
    const Tr = 1e3 * Pr.d.seatReservationSeconds - 3e3;
    class Ur {
      constructor(HH) {
        var BH, LH, AH, rH;
        let SH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.seat = void 0, this.follow = void 0, this.wallNow = void 0, this.monoNow = void 0, this.wallAt = void 0, this.monoAt = void 0, this.sleep = void 0, this.answeredAt = null, this.posts = 0, this.refusals = 0, this.request = "pending", this.use = "unused", this.wallNow = null !== (BH = SH.wallNow) && void 0 !== BH ? BH : Date.now, this.monoNow = null !== (LH = SH.monoNow) && void 0 !== LH ? LH : () => performance.now(), this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), this.sleep = null !== (AH = SH.sleep) && void 0 !== AH ? AH : iB.d, this.follow = new JB.d(SH.signal);
        const hH = null !== (rH = SH.fetch) && void 0 !== rH ? rH : fetch;
        this.seat = (0, yL.h)(HH.endpoint, HH.roomName, HH.joinOptions, {
          sleep: this.sleep,
          signal: this.follow.signal,
          fetch: (HH, BH) => (this.posts++, this.wallAt = this.wallNow(), this.monoAt = this.monoNow(), hH(HH, BH)),
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
      async take(HH) {
        if ("rematched" === this.use) return;
        (0, JB.t)(HH);
        const BH = "pending" !== this.request,
          LH = () => {
            this.abort((0, JB.g)(HH))
          };
        let AH;
        null === HH || void 0 === HH || HH.addEventListener("abort", LH, {
          once: !0
        });
        try {
          AH = await this.seat
        } catch (rH) {
          if ((0, JB.t)(HH), !BH) throw rH;
          return void(this.use = "lost")
        } finally {
          null === HH || void 0 === HH || HH.removeEventListener("abort", LH)
        }
        if ((0, JB.t)(HH), !(this.ageMs() > Tr)) return this.use = "taken", AH;
        this.use = "renewed"
      }
      async reserveInstead(HH, BH) {
        try {
          return await HH()
        } catch (LH) {
          const rH = this.holdLeftMs();
          if (!(LH instanceof HB.n) || LH.code !== AH.e.duplicateLobbyNameError.code || 0 === rH) throw LH;
          return await this.sleep(rH + 500, BH), HH()
        }
      }
      release() {
        const {
          request: HH,
          use: BH
        } = this, LH = this.holdsNoSeat();
        return this.abort(), "taken" === BH || LH ? null : {
          unused: "unused" === BH ? "abandoned" : BH,
          answered: "answered" === HH,
          heldMs: Math.round(this.ageMs())
        }
      }
      holdsNoSeat() {
        return this.posts === this.refusals
      }
      holdLeftMs() {
        var HH;
        if ("taken" === this.use || this.holdsNoSeat()) return 0;
        const BH = null !== (HH = this.answeredAt) && void 0 !== HH ? HH : {
            wall: this.wallAt,
            mono: this.monoAt
          },
          LH = Math.max(this.wallNow() - BH.wall, this.monoNow() - BH.mono);
        return Math.max(0, 1e3 * Pr.d.seatReservationSeconds - LH)
      }
      ageMs() {
        return Math.max(this.wallNow() - this.wallAt, this.monoNow() - this.monoAt)
      }
      abort(HH) {
        (0, JB.k)(this.follow.controller, HH)
      }
    }
    var Vr = LH(42256);
    const Or = new Uint8Array(0);
    class br {
      constructor(HH) {
        if (this.options = HH, this.slots = [], this.workers = null, this.stopped = !1, this.resting = !1, this.pool = [], this.failedJobs = 0, this.memoryFailureCounted = !1, this.faultsReported = new Set, this.refusals = new Map, this.heapRefusals = 0, null === HH.module) return this.stopped = !0, void HH.fail("no wasm module for the meshing workers");
        HH.loadWorkers().then((HH => {
          if (this.stopped) return;
          const {
            count: BH
          } = HH;
          this.workers = HH;
          for (let LH = 0; LH < BH; LH++) this.slots.push({
            worker: null,
            started: !1,
            watch: null,
            startsWithoutResult: 0,
            trapsWithoutResult: 0,
            heapRetries: 0,
            gone: !1,
            goneFor: null
          });
          for (let LH = 0; LH < BH; LH++) this.start(LH)
        }), (HH => {
          this.stopped || (this.stop(), this.options.fail("the meshing workers' code could not load", HH))
        }))
      }
      take(HH, BH, LH) {
        const AH = this.slots[BH];
        if (HH === UL.Pd.Retire) return void(AH && !AH.gone && (this.endWorker(BH), AH.started = !1, this.giveUp(BH, "had its tables trap twice", "every meshing worker's tables trapped twice")));
        const rH = null === AH || void 0 === AH ? void 0 : AH.worker;
        if (!rH || !AH.started) return;
        const SH = LH.byteLength;
        let hH = null;
        HH === UL.Pd.Mesh && AH.heapRetries > 0 && (AH.heapRetries--, hH = this.pooled(SH, !0)), hH ??= this.buffer(SH), new Uint8Array(hH, 0, SH).set(LH), rH.postMessage({
          type: "job",
          kind: HH,
          bytes: hH,
          len: SH
        }, [hH])
      }
      takeFailedMeshJobs() {
        const HH = this.failedJobs;
        return this.failedJobs = 0, HH
      }
      newGame() {
        this.memoryFailureCounted = !1
      }
      stopWorkers() {
        this.resting = !0;
        for (let HH = 0; HH < this.slots.length; HH++) {
          const BH = this.slots[HH];
          null !== BH.worker && (this.endWorker(HH), BH.startsWithoutResult = 0, BH.trapsWithoutResult = 0, this.tellLost(HH))
        }
        this.pool.length = 0
      }
      restartWorkers() {
        if (this.resting) {
          this.resting = !1;
          for (let HH = 0; HH < this.slots.length; HH++) this.start(HH)
        }
      }
      stop() {
        this.stopped = !0;
        for (const BH of this.slots) {
          var HH;
          kr(BH), null === (HH = BH.worker) || void 0 === HH || HH.terminate(), BH.worker = null, BH.started = !1
        }
      }
      start(HH) {
        const BH = this.slots[HH],
          {
            module: LH
          } = this.options,
          {
            workers: AH
          } = this;
        if (this.stopped || this.resting || BH.gone || null === LH || null === AH) return;
        if (BH.startsWithoutResult >= 3) return void this.giveUp(HH, "failed to start 3 times in a row", "no meshing worker would start");
        let rH;
        BH.startsWithoutResult++;
        try {
          rH = AH.create()
        } catch (SH) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${HH} did not start`, SH), void this.start(HH)
        }
        BH.worker = rH, rH.onmessage = LH => {
          let {
            data: AH
          } = LH;
          BH.worker === rH && this.onReply(HH, AH)
        }, rH.onmessageerror = () => {
          BH.worker === rH && this.lose(HH, "a reply could not be read")
        }, rH.onerror = LH => {
          LH.preventDefault(), BH.worker === rH && this.lose(HH, LH.message || "its script failed")
        };
        try {
          rH.postMessage({
            type: "start",
            module: LH,
            maxKeptLightStates: AH.maxKeptLightStates
          })
        } catch (SH) {
          return console.warn(`[bloxd-wasm-client] meshing worker ${HH} could not be sent the module`, SH), rH.terminate(), BH.worker = null, void this.start(HH)
        }
        BH.watch = new Vr.j(Vr.d, (BH => {
          this.lose(HH, (0, Vr.m)(BH), (() => {
            this.options.onStartTimeout(BH)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(HH, BH) {
        const LH = this.slots[HH];
        switch (BH.type) {
          case "started":
            kr(LH), LH.started = !0, this.options.write(0, UL.Ld.WorkerStarted, 0, HH, 0, Or);
            break;
          case "lost":
            this.lose(HH, BH.reason);
            break;
          case "memory":
            var AH, rH;
            null === (AH = (rH = this.options).onMemoryStats) || void 0 === AH || AH.call(rH, HH, BH.stats);
            break;
          case "result": {
            const AH = BH.status === UL.ub.Trapped;
            if (0 !== BH.jobId) {
              if (AH) this.countFailedJob(BH.outOfMemory, "light_trap", BH.trap);
              else if (LH.startsWithoutResult = 0, LH.trapsWithoutResult = 0, BH.status === UL.ub.Refused) {
                const LH = function(HH) {
                  if (HH.byteLength < 32) return "(no reason)";
                  const BH = new DataView(HH.buffer, HH.byteOffset, HH.byteLength),
                    LH = Math.min(BH.getUint32(28, !0), HH.byteLength - 28 - 4);
                  return (new TextDecoder).decode(HH.subarray(32, 32 + LH)).slice(0, 200)
                }(new Uint8Array(BH.bytes, 0, BH.len));
                this.countFailedJob(kL.c.test(LH), "light_refused_input", LH), this.logRefusal(HH, LH)
              }
              BH.status === UL.ub.HeapRefused && (LH.heapRetries = Math.min(LH.heapRetries + 1, 4), this.logHeapRefusal(HH))
            }
            if (this.options.write(BH.jobId, UL.Ld.JobResult, BH.status, HH, BH.workerUs, new Uint8Array(BH.bytes, 0, BH.len)), this.recycle(BH.bytes), BH.spare && this.recycle(BH.spare), !AH) break;
            if (LH.startsWithoutResult = 0, 0 === BH.jobId) {
              this.lose(HH, `the tables trapped its wasm: ${BH.trap}`);
              break
            }
            LH.trapsWithoutResult++;
            const rH = LH.trapsWithoutResult > 6;
            LH.gone ||= rH, this.lose(HH, `a job trapped its wasm: ${BH.trap}`), rH && this.giveUp(HH, `trapped ${LH.trapsWithoutResult} jobs in a row`, "every meshing worker kept trapping");
            break
          }
        }
      }
      countFailedJob(HH, BH, LH) {
        if (HH) {
          if (this.memoryFailureCounted) return;
          this.memoryFailureCounted = !0
        } else this.faultsReported.has(BH) || (this.faultsReported.add(BH), this.options.onLightFault(BH, LH));
        this.failedJobs++
      }
      logRefusal(HH, BH) {
        var LH;
        !this.refusals.has(BH) && this.refusals.size >= 16 && (BH = "(other reasons)");
        const AH = (null !== (LH = this.refusals.get(BH)) && void 0 !== LH ? LH : 0) + 1;
        this.refusals.set(BH, AH), (0, AA.r)(AH) && console.warn(`[bloxd-wasm-client] meshing worker ${HH} refused a chunk (${AH} so far for this reason): ${BH}`)
      }
      logHeapRefusal(HH) {
        this.heapRefusals++, (0, AA.r)(this.heapRefusals) && console.warn(`[bloxd-wasm-client] meshing worker ${HH} was refused memory for a chunk's mesh (${this.heapRefusals} so far)`)
      }
      giveUp(HH, BH, LH) {
        const AH = this.slots[HH];
        if (AH.gone = !0, AH.goneFor = {
            why: BH,
            failure: LH
          }, console.warn(`[bloxd-wasm-client] meshing worker ${HH} ${BH}: giving up on it`), this.slots.every((HH => HH.gone))) {
          this.stop();
          const HH = new Set(this.slots.map((HH => {
              var BH;
              return null === (BH = HH.goneFor) || void 0 === BH ? void 0 : BH.failure
            }))),
            BH = this.slots.map(((HH, BH) => {
              var LH, AH;
              return `worker ${BH} ${null!==(LH=null===(AH=HH.goneFor)||void 0===AH?void 0:AH.why)&&void 0!==LH?LH:"went"}`
            }));
          this.options.fail(1 === HH.size ? LH : `no meshing worker is left (${BH.join(", ")})`)
        }
      }
      lose(HH, BH, LH) {
        console.warn(`[bloxd-wasm-client] meshing worker ${HH} was lost: ${BH}`), this.endWorker(HH), this.stopped || (LH ? LH() : this.options.onWorkerLost(BH), this.tellLost(HH), this.start(HH))
      }
      endWorker(HH) {
        var BH, LH, AH;
        const rH = this.slots[HH];
        kr(rH), null === (BH = rH.worker) || void 0 === BH || BH.terminate(), rH.worker = null, rH.heapRetries = 0, null === (LH = (AH = this.options).onMemoryGone) || void 0 === LH || LH.call(AH, HH)
      }
      tellLost(HH) {
        const BH = this.slots[HH];
        BH.started && (BH.started = !1, this.options.write(0, UL.Ld.WorkerLost, 0, HH, 0, Or))
      }
      buffer(HH) {
        var BH;
        return null !== (BH = this.pooled(HH)) && void 0 !== BH ? BH : new ArrayBuffer(Math.max(16384, HH))
      }
      pooled(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          LH = -1;
        for (let rH = 0; rH < this.pool.length; rH++) {
          const AH = this.pool[rH].byteLength;
          AH >= HH && (LH < 0 || (BH ? AH > this.pool[LH].byteLength : AH < this.pool[LH].byteLength)) && (LH = rH)
        }
        if (LH < 0) return null;
        const AH = this.pool[LH];
        return this.pool[LH] = this.pool[this.pool.length - 1], this.pool.pop(), AH
      }
      recycle(HH) {
        this.pool.length < 4 * this.slots.length && HH.byteLength > 0 && HH.byteLength <= 1048576 && this.pool.push(HH)
      }
    }

    function kr(HH) {
      var BH;
      null === (BH = HH.watch) || void 0 === BH || BH.cancel(), HH.watch = null
    }
    var mr = LH(37358),
      or = LH(42078),
      Ir = LH(42259),
      fr = LH(42262),
      lr = (LH(42101), LH(37100)),
      Kr = LH(42271),
      cr = LH(42142);

    function er(HH) {
      const BH = new Uint8Array(HH.length >> 2);
      for (let LH = 0; LH < BH.length; LH++) BH[LH] = HH[4 * LH + 3];
      return BH
    }
    async function qr(HH) {
      const BH = await (0, Kr.g)(HH);
      try {
        const {
          width: HH,
          height: LH,
          pixels: AH
        } = (0, cr.n)(BH);
        return {
          width: HH,
          height: LH,
          alpha: er(AH)
        }
      } finally {
        BH.close()
      }
    }
    class gr {
      constructor(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : qr;
        this.session = HH, this.sources = BH, this.warn = LH, this.load = AH, this.nextPoll = 0, this.Mu = !1, this.warned = new Set
      }
      drain(HH) {
        if (HH < this.nextPoll) return;
        this.nextPoll = HH + 250;
        const BH = this.session.sunShadowWantedTextures();
        if (BH)
          for (let LH = 0; LH + 1 < BH.length; LH += 2) this.hand(BH[LH], BH[LH + 1]);
        for (const LH of this.session.takeSunShadowWarnings()) this.warn(LH)
      }
      dispose() {
        this.Mu = !0
      }
      async hand(HH, BH) {
        var LH, AH, rH, SH, hH;
        let tH, zH = null;
        try {
          if (zH = await this.sources.blockImageUrl(HH), null === zH) throw new Error(`block image ${HH} has no URL`);
          tH = await this.load(zH)
        } catch (EH) {
          var CH;
          const BH = null !== (CH = zH) && void 0 !== CH ? CH : `block image ${HH}`;
          this.warned.has(BH) || (this.warned.add(BH), this.warn(`sun shadow plane texture ${BH} didn't load: its blocks cast no shadow`, EH))
        }
        this.Mu || this.session.setSunShadowTexture(HH, BH, null !== (LH = null === (AH = tH) || void 0 === AH ? void 0 : AH.width) && void 0 !== LH ? LH : 0, null !== (rH = null === (SH = tH) || void 0 === SH ? void 0 : SH.height) && void 0 !== rH ? rH : 0, null === (hH = tH) || void 0 === hH ? void 0 : hH.alpha)
      }
    }
    var Nr = LH(37162),
      Rr = LH(42117),
      jr = LH(42275),
      nr = LH(42281),
      Fr = LH(42125),
      Dr = LH(42129),
      wr = LH(35018),
      Zr = LH(34861),
      dr = LH(42292);
    const ar = 8192,
      sr = new Set;
    const Jr = new Set([...Zr.c, "sceneDownload"]);
    var ir = LH(42032),
      pr = LH(42295);
    const yr = [1e3, 4e3],
      HS = [2e3, 4e3, 8e3, 15e3, 3e4, 3e4, 3e4, 3e4];
    async function BS(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : HS,
        LH = 0,
        AH = !1,
        rH = null,
        SH = () => {};
      const hH = () => {
        const BH = new AbortController;
        rH = BH, HH.showScreen(BH.signal).then((HH => {
          BH.signal.aborted || (rH === BH && (rH = null), AH ||= !HH, SH())
        }))
      };
      let tH = 0;
      try {
        for (; tH < BH.length;) {
          null === rH && hH();
          const zH = new AbortController;
          if (SH = () => {
              zH.abort()
            }, await HH.sleep(BH[tH], zH.signal), AH) return {
            picked: null,
            tries: LH,
            gaveUp: !1
          };
          zH.signal.aborted || tH++, LH++;
          const CH = await HH.repick();
          if (AH) return {
            picked: null,
            tries: LH,
            gaveUp: !1
          };
          if (null !== CH) return {
            picked: CH,
            tries: LH,
            gaveUp: !1
          }
        }
        return {
          picked: null,
          tries: LH,
          gaveUp: !0
        }
      } finally {
        (() => {
          var HH;
          null === (HH = rH) || void 0 === HH || HH.abort(), rH = null
        })()
      }
    }
    var LS = LH(42304);
    const AS = new Uint8Array(0);
    let rS = null;

    function SS(HH) {
      return {
        aux: UL.cc.AdStart | (HH ? UL.cc.PreventMovement : 0),
        payload: AS
      }
    }
    var hS = LH(3195),
      tS = LH(280);
    const zS = "__bloxdSceneCapture";
    var CS = LH(42307);
    class ES {
      constructor(HH) {
        var BH, LH;
        this.host = HH, this.requested = null, this.landed = null, this.confirm = null, this.channel = void 0, this.oneShotStored = !0, this.startRead = void 0, this.landRequest = () => {}, this.landing = new Promise((HH => {
          this.landRequest = HH
        })), this.follow = HH => {
          let BH = HH;
          return Promise.race([this.startRead, this.landing]).then((async () => {
            const HH = null === this.requested && null !== BH;
            var LH;
            HH && (null === (LH = BH) || void 0 === LH || LH(null));
            const AH = await this.landing;
            var rH;
            null === AH && HH || (null === (rH = BH) || void 0 === rH || rH(AH))
          })), () => {
            BH = null
          }
        }, this.startRead = (LH = HH.store, LH.keys().then((HH => ({
          own: HH.includes(CA.b),
          oneShot: HH.includes(CA.c)
        })), (() => ({
          own: !0,
          oneShot: !0
        })))).then((HH => {
          let {
            own: BH,
            oneShot: LH
          } = HH;
          this.oneShotStored = LH, (BH || LH) && this.request()
        })), this.channel = (null !== (BH = HH.openChannel) && void 0 !== BH ? BH : CA.s)(), null !== this.channel && (this.channel.onmessage = () => {
          this.request()
        })
      }
      request() {
        var HH;
        if (null !== this.requested) return this.requested;
        null === (HH = this.channel) || void 0 === HH || HH.close(), this.channel = null;
        const BH = this.oneShotStored;
        return this.requested = function(HH, BH, LH) {
          return new Promise((BH => {
            BH(HH())
          })).catch((HH => (null !== BH && (0, CA.k)(BH), LH(HH), null)))
        }((() => this.host.load(BH).then((HH => (HH.setGamePackConfirm(this.confirm), this.landed = HH, HH)))), BH ? this.host.store : null, this.host.XX), this.landRequest(this.requested), this.requested
      }
      loaded() {
        return this.landed
      }
      forJoin() {
        return null !== this.requested ? this.requested : Promise.race([this.startRead, this.landing]).then((() => {
          var HH;
          return null !== (HH = this.requested) && void 0 !== HH ? HH : null
        }))
      }
      setGamePackConfirm(HH) {
        var BH;
        this.confirm = HH, null === (BH = this.landed) || void 0 === BH || BH.setGamePackConfirm(HH)
      }
    }
    var XS = LH(37030);
    const GS = 216 * XS.g,
      YS = 92 * XS.c,
      uS = 64 * XS.g,
      QS = 16 * XS.g;

    function WS() {
      var HH, BH;
      return null !== (HH = null === (BH = performance.memory) || void 0 === BH ? void 0 : BH.Ix) && void 0 !== HH ? HH : null
    }
    class MS {
      constructor(HH, BH) {
        this.budgetBytes = HH, this.reads = BH, this.estimate = null, this.shedAt = null
      }
      read(HH) {
        var BH;
        const LH = this.reads.storedChunks(),
          AH = this.reads.gpuBytes(),
          rH = Math.max(null !== (BH = this.reads.jsHeapBytes()) && void 0 !== BH ? BH : 0, uS),
          SH = GS + HH + rH + AH + LH * YS;
        this.estimate = {
          wasmBytes: HH,
          jsHeapBytes: rH,
          gpuBytes: AH,
          storedChunks: LH,
          totalBytes: SH
        }
      }
      last() {
        return this.estimate
      }
      takeShed() {
        const {
          estimate: HH,
          budgetBytes: BH,
          shedAt: LH
        } = this;
        return !(null === HH || null === BH || HH.totalBytes < BH || null !== LH && HH.totalBytes < LH + QS) && (this.shedAt = HH.totalBytes, !0)
      }
      describe() {
        const {
          estimate: HH,
          budgetBytes: BH
        } = this;
        return null === HH ? null : `estimate ${(0,XS.l)(HH.totalBytes)} MiB of budget ${null===BH?"none":(0,XS.l)(BH)}: wasm ${(0,XS.l)(HH.wasmBytes)} js ${(0,XS.l)(HH.jsHeapBytes)} gpu ${(0,XS.l)(HH.gpuBytes)} chunks ${HH.storedChunks}`
      }
      snapshot() {
        const {
          estimate: HH,
          budgetBytes: BH
        } = this;
        return {
          ...null === HH ? {} : {
            footprintMiB: Number((0, XS.l)(HH.totalBytes)),
            gpuMiB: Number((0, XS.l)(HH.gpuBytes)),
            storedChunks: HH.storedChunks
          },
          footprintBudgetMiB: null === BH ? -1 : Number((0, XS.l)(BH))
        }
      }
    }
    var xS = LH(3105),
      vS = LH(4926),
      PS = LH(37245),
      TS = LH(38825);
    const US = VL.hb + 1,
      VS = 4096 * US;
    class OS {
      constructor(HH, BH) {
        this.log = HH, this.take = BH, this.LX = [], this.unshown = new Map, this.latest = new Map
      }
      afterFrame(HH, BH) {
        const LH = this.take();
        LH.length >= VL.gb && LH[0] > 0 && (0, xS.j)("remesh", `${LH[0]} core records lost to a full log`);
        const AH = this.LX;
        for (let rH = VL.gb; rH + VL.hb <= LH.length; rH += VL.hb) {
          for (let HH = rH; HH < rH + VL.hb; HH++) AH.push(LH[HH]);
          AH.push(HH)
        }
        if (BH || !(AH.length < VS)) {
          for (let BH = 0; BH < AH.length; BH += US) this.feed(BH, HH);
          AH.length = 0, BH && this.log.frame(HH)
        }
      }
      feed(HH, BH) {
        var LH;
        const AH = this.LX,
          rH = (0, TS.f)(AH[HH + 1], AH[HH + 2], AH[HH + 3]),
          SH = AH[HH + 4],
          hH = AH[HH + VL.hb];
        switch (AH[HH]) {
          case VL.Lb.Edit:
            this.log.edit(rH, hH);
            break;
          case VL.Lb.Sent:
            this.latest.set(rH, SH), this.log.sent(rH, SH, AH[HH + 5], AH[HH + 6], AH[HH + 7], null !== (LH = this.unshown.get(rH)) && void 0 !== LH ? LH : TS.b, hH);
            break;
          case VL.Lb.Done: {
            this.log.received(SH, AH[HH + 5] / 1e3, hH);
            const BH = this.unshown.get(rH);
            void 0 === BH ? this.unshown.set(rH, [SH]) : BH.push(SH);
            break
          }
          case VL.Lb.Failed: {
            const HH = this.latest.get(rH);
            void 0 !== HH && HH !== SH ? this.log.reassign(rH, SH, HH) : this.log.failed(SH), this.ended(rH, SH);
            break
          }
          case VL.Lb.Shown:
            this.log.applied(rH, SH, BH), this.ended(rH, SH);
            break;
          case VL.Lb.Replaced:
            this.log.reassign(rH, SH, AH[HH + 5]), this.ended(rH, SH);
            break;
          case VL.Lb.Emptied:
            this.log.emptied(rH, BH);
            break;
          default:
            console.warn(`[debug:remesh] unknown core record kind ${AH[HH]}`)
        }
      }
      ended(HH, BH) {
        this.latest.get(HH) === BH && this.latest.delete(HH);
        const LH = this.unshown.get(HH);
        if (void 0 === LH) return;
        const AH = LH.indexOf(BH);
        AH >= 0 && LH.splice(AH, 1), 0 === LH.length && this.unshown.delete(HH)
      }
    }
    let bS = null;
    var kS = LH(3585),
      mS = LH(40696);
    const oS = "its script failed",
      IS = "the block and item tables did not load",
      fS = new Uint8Array(0);
    class lS {
      constructor(HH) {
        this.options = HH, this.worker = null, this.watch = null, this.createWorker = null, this.loading = !1, this.wanted = !1, this.LX = [], this.startsWithoutResult = 0, this.generated = !1, this.coreWaits = !1, this.lastLoss = "", this.seed = null, this.gone = !1, this.pool = [], null !== HH.module ? HH.write(0, UL.Ld.WorldgenStarted, 0, 0, fS) : this.giveUp()
      }
      take(HH, BH) {
        if (!(this.gone || null === this.worker && null === this.LX))
          if (HH === UL.Pd.WorldgenSeed) {
            const HH = 0 === BH.byteLength ? null : this.options.decodeSettings(BH);
            null === HH ? this.release() : function(HH, BH) {
              if ((null === HH || void 0 === HH ? void 0 : HH.byteLength) !== BH.byteLength) return !1;
              for (let LH = 0; LH < HH.byteLength; LH++)
                if (HH[LH] !== BH[LH]) return !1;
              return !0
            }(this.seed, BH) || (this.seed = BH.slice(), this.startsWithoutResult = null === this.worker ? 0 : 1), this.dropHeld(), this.post({
              type: "seed",
              settings: HH
            }, []), null !== HH ? this.want() : this.loading || this.options.onMapWithoutWorldgen()
          } else if (HH === UL.Pd.Generate) {
          var LH;
          const HH = new DataView(BH.buffer, BH.byteOffset, UL.Jd),
            AH = null !== (LH = this.pool.pop()) && void 0 !== LH ? LH : new ArrayBuffer(8192);
          this.post({
            type: "generate",
            ticket: HH.getUint32(0, !0),
            x: HH.getInt32(4, !0),
            y: HH.getInt32(8, !0),
            z: HH.getInt32(12, !0),
            bytes: AH
          }, [AH])
        }
      }
      prestart() {
        this.gone || this.want()
      }
      stopWorker() {
        this.gone || (this.release(), this.generated = !1, this.dropHeld(), this.pool.length = 0, this.coreWaits && (this.coreWaits = !1, this.options.write(0, UL.Ld.WorldgenStarted, 0, 0, fS)))
      }
      stop() {
        var HH;
        this.gone = !0, this.dropHeld(), this.endWatch(), null === (HH = this.worker) || void 0 === HH || HH.terminate(), this.worker = null
      }
      post(HH, BH) {
        var LH;
        null !== this.LX ? this.LX.push({
          message: HH,
          transfer: BH
        }) : null === (LH = this.worker) || void 0 === LH || LH.postMessage(HH, BH)
      }
      want() {
        this.wanted = !0, null === this.worker && (null === this.createWorker ? this.load() : this.start())
      }
      release() {
        this.wanted = !1, null !== this.worker && (this.endWorker(), this.startsWithoutResult = 0, this.LX ??= [])
      }
      endWorker() {
        var HH, BH, LH;
        this.endWatch(), null === (HH = this.worker) || void 0 === HH || HH.terminate(), this.worker = null, null === (BH = (LH = this.options).onMemoryGone) || void 0 === BH || BH.call(LH)
      }
      load() {
        this.loading || (this.loading = !0, this.options.loadWorker().then((HH => {
          this.createWorker = HH, this.wanted && this.start()
        }), (HH => {
          this.gone || (this.giveUp(), this.options.onLoadFailed(HH))
        })))
      }
      start() {
        const {
          module: HH
        } = this.options, BH = this.createWorker;
        if (this.gone || null === HH || null === BH) return;
        if (this.startsWithoutResult >= 3) return this.giveUp(), void this.options.onGaveUp(this.lastLoss);
        let LH;
        this.startsWithoutResult++;
        try {
          LH = BH()
        } catch (rH) {
          return console.warn("[bloxd-wasm-client] the world-gen worker did not start", rH), this.lastLoss = `it did not start (${String(rH)})`, void this.start()
        }
        this.worker = LH, LH.onmessage = HH => {
          let {
            data: BH
          } = HH;
          this.worker === LH && this.onReply(LH, BH)
        }, LH.onerror = HH => {
          HH.preventDefault(), this.worker === LH && this.lose(HH.message || oS)
        };
        try {
          LH.postMessage({
            type: "start",
            module: HH,
            xX: AH.g.xX
          })
        } catch (rH) {
          return console.warn("[bloxd-wasm-client] the world-gen worker could not be sent the module", rH), this.lastLoss = `it could not be sent the module (${String(rH)})`, LH.terminate(), this.worker = null, void this.start()
        }
        this.watch = new Vr.j(Vr.f, (HH => {
          this.lose((0, Vr.m)(HH), (() => {
            this.options.onStartTimeout(HH)
          }))
        }), void 0, this.options.visibility)
      }
      onReply(HH, BH) {
        switch (BH.type) {
          case "started": {
            this.endWatch();
            const BH = this.LX;
            if (null === BH) {
              this.coreWaits = !1, this.options.write(0, UL.Ld.WorldgenStarted, 0, 0, fS);
              break
            }
            this.LX = null;
            for (const {
                message: LH,
                transfer: AH
              }
              of BH) HH.postMessage(LH, AH);
            break
          }
          case "lost":
            this.lose(BH.reason);
            break;
          case "memory":
            var LH, AH;
            null === (LH = (AH = this.options).onMemoryStats) || void 0 === LH || LH.call(AH, BH.stats);
            break;
          case "result":
            this.generated = !0, BH.status !== UL.ub.Trapped && (this.startsWithoutResult = 0), this.options.write(BH.ticket, UL.Ld.WorldgenResult, BH.status, BH.workerUs, new Uint8Array(BH.bytes, 0, BH.len)), this.recycle(BH.bytes), BH.spare && this.recycle(BH.spare)
        }
      }
      lose(HH, BH) {
        console.warn(`[bloxd-wasm-client] the world-gen worker was lost: ${HH}`), this.lastLoss = HH, this.endWorker(), this.gone || (BH ? BH() : this.options.onWorkerLost(HH, this.generated), this.dropHeld(), this.LX = null, this.options.write(0, UL.Ld.WorldgenLost, UL.Rd.Lost, 0, fS), this.coreWaits = !0, this.start())
      }
      giveUp() {
        this.gone = !0, this.dropHeld(), this.options.write(0, UL.Ld.WorldgenLost, UL.Rd.Gone, 0, fS)
      }
      endWatch() {
        var HH;
        null === (HH = this.watch) || void 0 === HH || HH.cancel(), this.watch = null
      }
      dropHeld() {
        if (null !== this.LX) {
          for (const {
              message: HH
            }
            of this.LX) "generate" === HH.type && this.recycle(HH.bytes);
          this.LX.length = 0
        }
      }
      recycle(HH) {
        this.pool.length < 16 && HH.byteLength > 0 && HH.byteLength <= 16384 && this.pool.push(HH)
      }
    }
    var KS = LH(38585),
      cS = LH(4084),
      eS = LH(41985),
      qS = LH(42314),
      gS = LH(42110);
    const NS = /[(@\s]([^\s(@]+)$/,
      RS = /:\d/;

    function jS(HH, BH) {
      for (let LH = 0; LH + BH.length <= HH.length; LH++) {
        let AH = 0;
        for (; AH < BH.length && HH[LH + AH] === BH[AH];) AH++;
        if (AH === BH.length) return LH
      }
      return -1
    }

    function nS(HH) {
      return "(" === HH || ")" === HH || "@" === HH || "," === HH || " " === HH || "\t" === HH
    }

    function FS(HH, BH) {
      let LH = BH;
      for (; LH > 0 && !nS(HH[LH - 1]);) LH--;
      let AH = BH;
      for (; AH < HH.length && !nS(HH[AH]);) AH++;
      let rH = "";
      for (let SH = LH; SH < AH; SH++) rH += HH[SH];
      return rH
    }
    const DS = [{
        origin: "chrome-extension://dhdgffkkebhmkfjojejmpbldmpobfkfo",
        tag: "TM"
      }, {
        origin: "chrome-extension://iikmkjmpaadaobahmlepeloendndfphd",
        tag: "TM-Edge"
      }, {
        origin: "chrome-extension://gcalenpjmijncebpfijmoaglllgpjagf",
        tag: "TM-Beta"
      }],
      wS = /^\/[^\s?#]*\?(?:[^\s&#]*&)*?name=([^\s&#]*?)(?::\d+)*(?:[\s&#]|\)(?:[,\s]|$)|$)/,
      ZS = ".user.js";

    function dS(HH, BH) {
      let LH = 0;
      for (; LH < DS.length && DS[LH].origin !== BH[0];) LH++;
      if (LH === DS.length) return BH[0];
      let AH = "";
      for (let hH = BH.index + BH[0].length; hH < HH.length; hH++) AH += HH[hH];
      const rH = (0, Qr.l)(Qr.T, wS, [AH]),
        SH = null === rH ? "" : function(HH) {
          let BH = HH.length,
            LH = 0;
          for (; LH < 8 && BH > 8 && HH[BH - 8 + LH] === ZS[LH];) LH++;
          8 === LH && (BH -= 8);
          let AH = "",
            rH = !1;
          for (let SH = 0; SH < BH; SH++) {
            let BH = HH[SH];
            "+" === BH ? BH = " " : "%" === BH && (BH = "2" === HH[SH + 1] && "0" === HH[SH + 2] ? " " : "_", SH += 2), -1 !== jS("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 .-", BH) ? (AH += BH, rH = !1) : rH || (AH += "_", rH = !0)
          }
          return AH
        }(rH[1]);
      return "" === SH ? BH[0] : DS[LH].tag + " " + SH
    }

    function aS(HH, BH) {
      var LH;
      const AH = /[^\n]+/g,
        rH = /\b(?!wasm:)[a-z][\w+.-]*:\/\/[\w.:%~+[\]-]*/i,
        SH = /^([^?#)]*?)(?::\d+)*(?:[?#)]|$)/;
      let hH = null,
        tH = null,
        zH = (0, Qr.l)(Qr.T, AH, [HH]);
      for (; null !== zH;) {
        const LH = (0, Qr.l)(Qr.T, rH, [zH[0]]),
          CH = null === BH ? -1 : jS(zH[0], BH);
        if (-1 !== CH) {
          if (null !== LH) return dS(zH[0], LH);
          const HH = FS(zH[0], CH),
            BH = (0, Qr.l)(Qr.T, NS, [zH[0]]),
            AH = null !== (0, Qr.l)(Qr.T, RS, [HH]) ? HH : null === BH ? null : BH[1],
            rH = null === AH ? null : (0, Qr.l)(Qr.T, SH, [AH]);
          if (null !== rH && "" !== rH[1]) return rH[1]
        }
        null !== LH && (null === hH ? hH = LH[0] : null === tH && LH[0] !== hH && (tH = LH[0])), zH = (0, Qr.l)(Qr.T, AH, [HH])
      }
      return null !== (LH = tH) && void 0 !== LH ? LH : null === hH ? "none" : "own"
    }
    const sS = /:(\d+):(\d+)\)?$/;

    function JS(HH, BH) {
      const LH = (0, Qr.l)(Qr.T, sS, [BH]);
      return null === LH ? HH : HH + ":" + LH[1] + ":" + LH[2]
    }

    function iS(HH) {
      const BH = /[^\n]+/g,
        LH = /\b(?!wasm:)((?:blob:)?)(([a-z][\w+.-]*):\/\/[\w.:%~+[\]-]*)((?:[^\s()@?#]*\/)?)([^\s()@?#:]*)/i;
      let AH = null,
        rH = "",
        SH = !1,
        hH = (0, Qr.l)(Qr.T, BH, [HH]);
      for (; null !== hH;) {
        const tH = (0, Qr.l)(Qr.T, LH, [hH[0]]),
          zH = null === tH ? (0, Qr.l)(Qr.T, NS, [hH[0]]) : null,
          CH = null !== zH && null !== (0, Qr.l)(Qr.T, RS, [zH[1]]) && 0 !== jS(zH[1], "wasm:") ? zH[1] : null;
        if (null === AH) null !== tH ? (AH = tH[2], rH = tH[4]) : null !== CH && (AH = "");
        else if (null !== tH) {
          if (SH = !0, "" !== tH[1]) return {
            reader: "inline",
            frame: JS("blob", hH[0])
          };
          if (tH[2] !== AH) {
            const HH = "moz-extension" === tH[3] || "safari-web-extension" === tH[3];
            let BH = "";
            for (let LH = 0; LH < tH[5].length && LH < 20; LH++) BH += tH[5][LH];
            return {
              reader: HH ? tH[3] : tH[2],
              frame: JS("" === BH ? "-" : BH, hH[0])
            }
          }
          if (tH[4] !== rH) return {
            reader: "inline",
            frame: JS("inline", hH[0])
          }
        } else if (null !== CH) {
          const HH = -1 !== jS(hH[0], "userscript") || -1 !== jS(hH[0], ".user.js");
          return {
            reader: HH ? "userscript" : "inline",
            frame: JS(HH ? "userscript" : "eval", hH[0])
          }
        }
        hH = (0, Qr.l)(Qr.T, BH, [HH])
      }
      const tH = SH ? "own" : "unknown";
      return {
        reader: tH,
        frame: tH
      }
    }

    function pS(HH, BH) {
      return (0, KS.f)(function(HH) {
        if ("string" !== typeof HH || 0 === HH.length) return "-";
        let BH = 2166136261;
        const LH = HH.length < 4096 ? HH.length : 4096;
        for (let rH = 0; rH <= LH; rH++) BH ^= rH === LH ? HH.length : (0, Qr.l)(Qr.cb, HH, [rH]), BH = BH + (BH << 1) + (BH << 4) + (BH << 7) + (BH << 8) + (BH << 24) >>> 0;
        let AH = "";
        for (let rH = 28; rH >= 0; rH -= 4) AH += "0123456789abcdef" [BH >>> rH & 15];
        return AH
      }(BH), iS(HH).frame)
    }
    const yS = (HH, BH) => HH.includes(BH),
      Hh = HH => {
        try {
          return HH()
        } catch {
          return !1
        }
      },
      Bh = -1,
      Lh = HH => {
        try {
          return HH()
        } catch {
          return Bh
        }
      };

    function Ah(HH, BH) {
      return {
        probe: (LH, AH, rH) => {
          try {
            return ((LH, AH, rH) => {
              switch (LH) {
                case UL.nc.StackCheck:
                  return BH.stackCheck() ? 1 : 0;
                case UL.nc.ConfirmMesh:
                  return BH.confirmMesh();
                case UL.nc.IndexPassReplaced:
                  return BH.indexPassReplaced() ? 1 : 0;
                case UL.nc.ProductSubChanged:
                  return BH.productSubChanged() ? 1 : 0;
                case UL.nc.RenderStatus:
                  return BH.PE();
                case UL.nc.Held:
                  return BH.LX();
                case UL.nc.PlayerKilledSubs:
                  return BH.playerKilledSubs();
                case UL.gb: {
                  const LH = BH.getComplete();
                  return null === LH ? 0 : (0, Qr.l)(Qr.x, Qr.gb, [LH, new Qr.d((0, Qr.G)(HH()), AH, rH)]).written
                }
                default:
                  return 0
              }
            })(LH, AH, rH)
          } catch {
            return UL.gc
          }
        }
      }
    }
    class rh {
      constructor(HH) {
        this.write = HH, this.flagsWritten = 0, this.written = (0, Qr.o)(null)
      }
      IX(HH) {
        let {
          flags: BH,
          values: LH
        } = HH;
        for (let AH = 0; AH < LH.length; AH++) this.value(LH[AH][0], LH[AH][1]);
        this.setFlags(BH | UL.e.Ready)
      }
      value(HH, BH) {
        this.written[HH] !== BH && this.write(HH, BH, 0) && (this.written[HH] = BH)
      }
      setFlags(HH) {
        const BH = HH & ~this.flagsWritten;
        0 !== BH && this.write(UL.h.Flags, BH, BH) && (this.flagsWritten |= BH)
      }
      originStackHit() {
        return this.write(UL.h.Flags, UL.e.OriginStackHit, UL.e.OriginStackHit)
      }
    }
    const Sh = {
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
      hh = 1e3;
    let th;
    const zh = ["length", 0, 1, "a", 7, 60, 145, "c", "d", 16, 5, 174, 4, 3, 18, 2, "e", 245, "b", !1, void 0, null, "s", "c3RhY2", "cw==", 1e5, 33554432, 67108864, 52, "g", 244, !0, 6, "s=", 133, 61, "stack", "name", "Q", ".", 11, 135, 37, 241, 8, "yyc2ya", "i", 512, 30, "012345", 95, 233, 15, 80, 1023, 192, 63, 128, 12, 14, 255, 46, 24, 123, 32, 10, 19, 64, 122, 65535, 107, 214, 256, 246, "o", 199, 209, 88, 235, "string", 65537, 208, 100, "q", 23, 206, 73, 211, 48, "j", 182, 249, 168, 94, 154, 55296, 56319, 56320, 65536, 119, 57343, 125, 31, 224, 240, 121, 220, 39, "Invalid byte index", 181, "Invalid continuation byte", "m", "functi", "on", "l", 215, 223, 93, "protot", "ype", "decode", "4", "5", "I=", "eTR5bm", "r", "u", "t", "B", "zd", "chEven", "dispat", "now", "confir", "mMesh", "produc", "player", "Killed", "number", "toString", "get", "v", "k", "f", 143, "None", 20, 140, 13, "En", "h", "tOverw", "ritten", "plete", "p"];

    function Ch() {}

    function Eh() {
      Eh = function() {}
    }
    th = function(HH) {
      let BH = arguments[zh[0]] > zh[2] && arguments[zh[2]] !== zh[20] ? arguments[zh[2]] : (...HH) => (HH[zh[0]] = zh[1], "Bq_rUx" in Ch && function(...HH) {
          Eh(HH[zh[0]] = zh[1], HH[zh[18]] = function(...BH) {
            return Eh(BH[zh[0]] = zh[2], BH[zh[2]] = []), (BH[zh[1]] === zh[2] || BH[zh[1]] >= zh[12]) && HH[zh[11]](BH[zh[2]], [], BH[zh[1]], zh[1]), BH[zh[2]]
          }, HH[zh[11]] = function(...BH) {
            for (BH[zh[0]] = zh[12], BH[-zh[14]] = BH[zh[13]]; BH[-zh[14]] < BH[zh[15]]; BH[-zh[14]]++) {
              if (BH[zh[2]].length !== BH[-zh[14]]) return;
              for (BH[zh[10]] = zh[1]; BH[zh[10]] < BH[zh[15]]; BH[zh[10]]++) HH[zh[17]](BH[zh[2]], [BH[-zh[14]], BH[zh[10]]]) && (Eh(BH[zh[2]].push([BH[-zh[14]], BH[zh[10]]]), HH[zh[11]](BH[zh[1]], BH[zh[2]], BH[zh[15]], BH[-zh[14]] + zh[2])), BH[zh[2]].length === BH[zh[15]] && BH[zh[1]].push(HH[zh[16]](BH[zh[2]])), BH[zh[2]].pop())
            }
          }, HH[zh[16]] = function(HH) {
            var BH, LH, AH = [];
            for (BH = HH.length, LH = zh[1]; LH < BH; LH++) {
              var rH;
              for (AH[LH] = "", rH = zh[1]; rH < BH; rH++) AH[LH] += HH[LH][zh[2]] === rH ? zh[38] : zh[39]
            }
            return AH
          }, HH[zh[17]] = function(...HH) {
            for (Eh(HH[zh[0]] = zh[15], HH[zh[15]] = HH[zh[1]].length), HH[zh[18]] = zh[1]; HH[zh[18]] < HH[zh[15]]; HH[zh[18]]++) {
              if (HH[zh[1]][HH[zh[18]]][zh[1]] === HH[zh[2]][zh[1]] || HH[zh[1]][HH[zh[18]]][zh[2]] === HH[zh[2]][zh[2]]) return zh[19];
              if (Math.abs((HH[zh[1]][HH[zh[18]]][zh[1]] - HH[zh[2]][zh[1]]) / (HH[zh[1]][HH[zh[18]]][zh[2]] - HH[zh[2]][zh[2]])) === zh[2]) return zh[19]
            }
            return zh[31]
          }, console.log(HH[zh[18]]))
        }(), zh[21]),
        LH = arguments[zh[0]] > zh[15] && arguments[zh[15]] !== zh[20] ? arguments[zh[15]] : zh[21],
        AH = arguments[zh[0]] > zh[13] && arguments[zh[13]] !== zh[20] ? arguments[zh[13]] : "";
      const rH = window,
        SH = (zh[1], Qr[zh[22]])("RXJyb3" + zh[123]),
        hH = (zh[1], Qr[zh[22]])(zh[23] + zh[33]),
        tH = (zh[1], Qr[zh[22]])("Y2FwdHVyZVN0YWNrVHJhY2U="),
        CH = (zh[1], Qr[zh[22]])(zh[23] + "tUcmFjZUxpbWl0"),
        EH = (zh[1], Qr[zh[22]])("bmF0aXZl"),
        XH = [(zh[1], Qr[zh[22]])("bWFpbi5qcw=="), (zh[1], Qr[zh[22]])("aW5kZXguanM="), (zh[1], Qr[zh[22]])("dXNlcnNjcmlwdA=="), (zh[1], Qr[zh[22]])("Y29udGVudC5q" + zh[24]), (zh[1], Qr[zh[22]])("b3B0aW9ucy5q" + zh[24]), (zh[1], Qr[zh[22]])("cG9wdXAuanM="), (zh[1], Qr[zh[22]])("LnVzZXIuanM="), (zh[1], Qr[zh[22]])("Y2hyb21lLWV4dGVuc2lvbg==")],
        GH = (...HH) => {
          HH[zh[0]] = zh[2];
          const BH = rH[SH],
            LH = BH;
          LH[CH] < zh[25] && (LH[CH] = zh[25]);
          const AH = "string" === typeof(GH = (new BH)[hH]) ? GH : `${GH}`,
            zH = {},
            EH = LH[tH];
          var GH;
          if (typeof EH === zh[112] + zh[113]) {
            function QH(...HH) {
              function BH(...HH) {
                return HH[zh[0]] = zh[2], HH[zh[1]][zh[2]] * zh[27] + (HH[zh[1]][zh[1]] < zh[1] ? zh[26] | HH[zh[1]][zh[1]] : HH[zh[1]][zh[1]])
              }

              function LH(...HH) {
                switch (HH[zh[0]] = zh[2], ((HH[zh[1]] & zh[26]) !== zh[1]) * zh[2] + (HH[zh[1]] < zh[1]) * zh[15]) {
                  case zh[1]:
                    return [HH[zh[1]] % zh[26], Math.trunc(HH[zh[1]] / zh[27])];
                  case zh[2]:
                    return [HH[zh[1]] % zh[26] - zh[26], Math.trunc(HH[zh[1]] / zh[27]) + zh[2]];
                  case zh[15]:
                    return [((HH[zh[1]] + zh[26]) % zh[26] + zh[26]) % zh[26], Math.round(HH[zh[1]] / zh[27])];
                  case zh[13]:
                    return [HH[zh[1]] % zh[26], Math.trunc(HH[zh[1]] / zh[27])]
                }
              }
              HH[zh[0]] = zh[1], Eh(HH[zh[8]] = BH([zh[15], zh[12]]), HH[-zh[28]] = BH([zh[2], zh[15]]), HH[zh[15]] = HH[zh[8]] + HH[-zh[28]], HH[zh[29]] = HH[zh[15]] - HH[-zh[28]], HH[zh[12]] = HH[zh[29]] * zh[15], HH[zh[30]] = HH[zh[12]] / zh[15], console.log(LH(HH[zh[15]])), console.log(LH(HH[zh[29]])), console.log(LH(HH[zh[12]])), console.log(LH(HH[zh[30]])))
            }
            "no5Yv9" in Ch && QH(), (zh[1], Qr[zh[114]])(EH, BH, [zH])
          }
          const YH = zH[hH],
            uH = HH[zh[1]] ? XH[zh[0]] : XH[zh[0]] - zh[2];
          for (let WH = zh[1]; WH < uH; WH++) {
            function MH(...HH) {
              Eh(HH[zh[0]] = zh[1], HH[zh[3]] = function(...BH) {
                return BH[zh[0]] = zh[15], HH[zh[18]]({}, BH[zh[1]], BH[zh[2]])
              }, HH[zh[18]] = function(...BH) {
                if (Eh(BH[zh[0]] = zh[13], BH[zh[13]] = {}), BH[zh[1]][BH[zh[2]] + BH[zh[15]]] !== zh[20]) return BH[zh[1]][BH[zh[2]] + BH[zh[15]]];
                if (BH[zh[2]] === BH[zh[15]]) return zh[31];
                for (BH[zh[18]] = zh[1]; BH[zh[18]] < BH[zh[2]].length; BH[zh[18]]++) BH[zh[13]][BH[zh[2]][BH[zh[18]]]] === zh[20] && (BH[zh[13]][BH[zh[2]][BH[zh[18]]]] = zh[1]), BH[zh[13]][BH[zh[15]][BH[zh[18]]]] === zh[20] && (BH[zh[13]][BH[zh[15]][BH[zh[18]]]] = zh[1]), Eh(BH[zh[13]][BH[zh[2]][BH[zh[18]]]]++, BH[zh[13]][BH[zh[15]][BH[zh[18]]]]--);
                for (BH[zh[10]] in BH[zh[13]])
                  if (BH[zh[13]][BH[zh[10]]] !== zh[1]) return BH[zh[1]][BH[zh[2]] + BH[zh[15]]] = zh[19], zh[19];
                for (BH[zh[32]] = zh[2]; BH[zh[32]] < BH[zh[2]].length; BH[zh[32]]++)
                  if (HH[zh[18]](BH[zh[1]], BH[zh[2]].substr(zh[1], BH[zh[32]]), BH[zh[15]].substr(zh[1], BH[zh[32]])) && HH[zh[18]](BH[zh[1]], BH[zh[2]].substr(BH[zh[32]]), BH[zh[15]].substr(BH[zh[32]])) || HH[zh[18]](BH[zh[1]], BH[zh[2]].substr(zh[1], BH[zh[32]]), BH[zh[15]].substr(BH[zh[15]].length - BH[zh[32]])) && HH[zh[18]](BH[zh[1]], BH[zh[2]].substr(BH[zh[32]]), BH[zh[15]].substr(zh[1], BH[zh[15]].length - BH[zh[32]]))) return BH[zh[1]][BH[zh[2]] + BH[zh[15]]] = zh[31], zh[31];
                return BH[zh[1]][BH[zh[2]] + BH[zh[15]]] = zh[19], zh[19]
              }, console.log(HH[zh[3]]))
            }
            if ("yYhCKr" + zh[121] in Ch && MH(), yS(AH, XH[WH])) {
              function xH(...HH) {
                HH[zh[0]] = zh[1]
              }
              return "dN34dM" in Ch && xH(), {
                [zh[36]]: AH,
                [zh[37]]: XH[WH]
              }
            }
            if (typeof YH === zh[79] && yS(YH, XH[WH])) {
              function vH(...HH) {
                Eh(HH[zh[0]] = zh[1], HH[zh[35]] = function(...HH) {
                  for (Eh(HH[zh[0]] = zh[2], HH[zh[3]] = HH[zh[1]].length, HH[zh[15]] = [], HH[zh[34]] = zh[1], HH[zh[12]] = zh[1], HH[zh[1]].sort(((HH, BH) => HH - BH))), HH[zh[16]] = zh[1]; HH[zh[16]] < HH[zh[3]]; HH[zh[16]]++)
                    if (!(HH[zh[16]] > zh[1] && HH[zh[1]][HH[zh[16]]] === HH[zh[1]][HH[zh[16]] - zh[2]]))
                      for (Eh(HH[zh[34]] = HH[zh[16]] + zh[2], HH[zh[12]] = HH[zh[3]] - zh[2]); HH[zh[34]] < HH[zh[12]];)
                        if (HH[zh[1]][HH[zh[16]]] + HH[zh[1]][HH[zh[34]]] + HH[zh[1]][HH[zh[12]]] < zh[1]) HH[zh[34]]++;
                        else if (HH[zh[1]][HH[zh[16]]] + HH[zh[1]][HH[zh[34]]] + HH[zh[1]][HH[zh[12]]] > zh[1]) HH[zh[12]]--;
                  else {
                    for (HH[zh[15]].push([HH[zh[1]][HH[zh[16]]], HH[zh[1]][HH[zh[34]]], HH[zh[1]][HH[zh[12]]]]); HH[zh[34]] < HH[zh[12]] && HH[zh[1]][HH[zh[34]]] === HH[zh[1]][HH[zh[34]] + zh[2]];) HH[zh[34]]++;
                    for (; HH[zh[34]] < HH[zh[12]] && HH[zh[1]][HH[zh[12]]] === HH[zh[1]][HH[zh[12]] - zh[2]];) HH[zh[12]]--;
                    Eh(HH[zh[34]]++, HH[zh[12]]--)
                  }
                  return HH[zh[15]]
                }, console.log(HH[zh[35]]))
              }
              return "QtE2WP" in Ch && vH(), {
                [zh[36]]: YH,
                [zh[37]]: XH[WH]
              }
            }
          }
          return zh[21]
        },
        YH = HH => ("byiKNUU" in Ch && function() {
          function HH(...HH) {
            HH[zh[0]] = zh[2];
            const BH = {};
            for (let LH of HH[zh[1]].replace(/[^w]/g, "").toLowerCase()) BH[LH] = BH[LH] + zh[2] || zh[2];
            return BH
          }

          function BH(...HH) {
            HH[zh[0]] = zh[15];
            const BH = buildCharMap(HH[zh[1]]),
              LH = buildCharMap(HH[zh[2]]);
            for (let AH in BH)
              if (BH[AH] !== LH[AH]) return zh[19];
            return Object.keys(BH).length !== Object.keys(LH).length ? zh[19] : zh[31]
          }

          function LH(HH) {
            return AH(HH) !== 1 / 0
          }

          function AH(HH) {
            if (!HH) return -zh[2];
            const BH = AH(HH.left),
              LH = AH(HH.right),
              rH = Math.abs(BH - LH);
            if (BH === 1 / 0 || LH === 1 / 0 || rH > zh[2]) return 1 / 0;
            return Math.max(BH, LH) + zh[2]
          }
          window.__GLOBAL__HELPERS__ = {
            buildCharacterMap: HH,
            isAnagrams: BH,
            isBalanced: LH,
            getHeightBalanced: AH
          }
        }(), GH(HH) !== zh[21]);
      let uH = zh[21],
        QH = zh[21],
        WH = zh[21],
        MH = zh[21];
      const xH = (...HH) => {
        HH[zh[0]] = zh[2];
        try {
          function BH(...HH) {
            HH[zh[0]] = zh[1]
          }
          return "_6JhTk" in Ch && BH(), HH[zh[1]]()
        } catch {
          function LH(...HH) {
            Eh(HH[zh[0]] = zh[1], HH[-zh[42]] = function(...BH) {
              return Eh(BH[zh[0]] = zh[2], BH[zh[2]] = []), (BH[zh[1]] === zh[2] || BH[zh[1]] >= zh[12]) && HH[zh[2]](BH[zh[2]], [], BH[zh[1]], zh[1]), BH[zh[2]]
            }, HH[zh[2]] = function(BH, LH, AH, rH) {
              var SH;
              for (SH = rH; SH < AH; SH++) {
                var hH;
                if (LH.length !== SH) return;
                for (hH = zh[1]; hH < AH; hH++) HH[zh[40]](LH, [SH, hH]) && (Eh(LH.push([SH, hH]), HH[zh[2]](BH, LH, AH, SH + zh[2])), LH.length === AH && BH.push(HH[zh[16]](LH)), LH.pop())
              }
            }, HH[zh[16]] = function(HH) {
              var BH, LH, AH = [];
              for (BH = HH.length, LH = zh[1]; LH < BH; LH++) {
                var rH;
                for (AH[LH] = "", rH = zh[1]; rH < BH; rH++) AH[LH] += HH[LH][zh[2]] === rH ? zh[38] : zh[39]
              }
              return AH
            }, HH[zh[40]] = function(...HH) {
              for (Eh(HH[zh[0]] = zh[15], HH[zh[15]] = HH[zh[1]].length), HH[zh[41]] = zh[1]; HH[zh[41]] < HH[zh[15]]; HH[zh[41]]++) {
                if (HH[zh[1]][HH[zh[41]]][zh[1]] === HH[zh[2]][zh[1]] || HH[zh[1]][HH[zh[41]]][zh[2]] === HH[zh[2]][zh[2]]) return zh[19];
                if (Math.abs((HH[zh[1]][HH[zh[41]]][zh[1]] - HH[zh[2]][zh[1]]) / (HH[zh[1]][HH[zh[41]]][zh[2]] - HH[zh[2]][zh[2]])) === zh[2]) return zh[19]
              }
              return zh[31]
            }, console.log(HH[-zh[42]]))
          }
          return "oQ7YYS" in Ch && LH(), zh[31]
        }
      };
      let vH = zh[19];
      const PH = () => {
          !vH && (zh[1], Qr[zh[126]])() && (vH = zh[31])
        },
        TH = (...HH) => {
          HH[zh[0]] = zh[2];
          try {
            function BH(...HH) {
              HH[zh[0]] = zh[1];
              const BH = require("path"),
                {
                  version: LH
                } = require("../../package"),
                {
                  version: AH
                } = require("@redacted/enterprise-plugin/package"),
                {
                  version: rH
                } = require("@redacted/components/package"),
                {
                  sdkVersion: SH
                } = require("@redacted/enterprise-plugin");
              require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), BH.resolve(__dirname, "../redacted.js")
            }
            return "o2lPF8" + zh[22] in Ch && BH(), HH[zh[1]]()
          } catch {
            return zh[20]
          }
        },
        UH = (...HH) => {
          HH[zh[0]] = zh[2], "QO2JGl" + zh[122] in Ch && function(...HH) {
            HH[zh[0]] = zh[1]
          }();
          try {
            function BH(...HH) {
              Eh(HH[zh[0]] = zh[1], HH[-zh[71]] = function(...HH) {
                function LH(...HH) {
                  return HH[zh[0]] = zh[15], hH(rH(tH(HH[zh[1]]), tH(HH[zh[2]])))
                }

                function AH(...HH) {
                  return HH[zh[0]] = zh[13],
                    function(HH, BH) {
                      var LH, AH, rH, SH, hH, tH, zH, CH, EH = BH.length;
                      for (LH = Array(), AH = Array(Math.ceil(HH.length / zh[15])), hH = zh[1]; hH < AH.length; hH++) AH[hH] = HH.charCodeAt(hH * zh[15]) << zh[44] | HH.charCodeAt(hH * zh[15] + zh[2]);
                      for (; AH.length > zh[1];) {
                        for (Eh(CH = Array(), zH = zh[1]), hH = zh[1]; hH < AH.length; hH++) Eh(zH = (zH << zh[9]) + AH[hH], tH = Math.floor(zH / EH), zH -= tH * EH), (CH.length > zh[1] || tH > zh[1]) && (CH[CH.length] = tH);
                        Eh(LH[LH.length] = zH, AH = CH)
                      }
                      for (rH = "", hH = LH.length - zh[2]; hH >= zh[1]; hH--) rH += BH.charAt(LH[hH]);
                      for (SH = Math.ceil(HH.length * zh[44] / (Math.log(BH.length) / Math.log(zh[15]))), hH = rH.length; hH < SH; hH++) rH = BH[zh[1]] + rH;
                      return rH
                    }(rH(tH(HH[zh[1]]), tH(HH[zh[2]])), HH[zh[15]])
                }

                function rH(...HH) {
                  Eh(HH[zh[0]] = zh[15], HH[zh[3]] = zH(HH[zh[1]])), HH[zh[3]].length > zh[9] && (HH[zh[3]] = xH(HH[zh[3]], HH[zh[1]].length * zh[44]));
                  var BH = Array(zh[9]),
                    LH = Array(zh[9]);
                  for (HH[zh[18]] = zh[1]; HH[zh[18]] < zh[9]; HH[zh[18]]++) Eh(BH[HH[zh[18]]] = 909522486 ^ HH[zh[3]][HH[zh[18]]], LH[HH[zh[18]]] = 1549556828 ^ HH[zh[3]][HH[zh[18]]]);
                  return HH[zh[7]] = xH(BH.concat(zH(HH[zh[2]])), zh[47] + HH[zh[2]].length * zh[44]), CH(xH(LH.concat(HH[zh[7]]), function(...HH) {
                    if (HH[zh[0]] = zh[13], HH[zh[1]] === zh[45] + zh[46]) return HH[zh[2]] + HH[zh[15]]
                  }(zh[45] + zh[46], zh[47], zh[72])))
                }

                function SH(...LH) {
                  LH[zh[0]] = zh[2];
                  try {
                    HH[zh[48]]
                  } catch (BH) {
                    HH[zh[48]] = zh[1]
                  }
                  for (Eh(LH[zh[51]] = HH[zh[48]] ? zh[49] + "6789ABCDEF" : zh[49] + "6789abcdef", LH[zh[15]] = "", LH[-zh[50]] = zh[20]), LH[zh[12]] = zh[1]; LH[zh[12]] < LH[zh[1]].length; LH[zh[12]]++) Eh(LH[-zh[50]] = LH[zh[1]].charCodeAt(LH[zh[12]]), LH[zh[15]] += LH[zh[51]].charAt(LH[-zh[50]] >>> zh[12] & zh[52]) + LH[zh[51]].charAt(LH[-zh[50]] & zh[52]));
                  return LH[zh[15]]
                }

                function hH(...LH) {
                  LH[zh[0]] = zh[2];
                  try {
                    HH[zh[2]]
                  } catch (BH) {
                    HH[zh[2]] = ""
                  }
                  for (Eh(LH[zh[2]] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", LH[zh[15]] = "", LH[zh[13]] = LH[zh[1]].length), LH[zh[8]] = zh[1]; LH[zh[8]] < LH[zh[13]]; LH[zh[8]] += zh[13])
                    for (LH[zh[10]] = LH[zh[1]].charCodeAt(LH[zh[8]]) << zh[9] | (LH[zh[8]] + zh[2] < LH[zh[13]] ? LH[zh[1]].charCodeAt(LH[zh[8]] + zh[2]) << zh[44] : zh[1]) | (LH[zh[8]] + zh[15] < LH[zh[13]] ? LH[zh[1]].charCodeAt(LH[zh[8]] + zh[15]) : zh[1]), LH[-zh[53]] = zh[1]; LH[-zh[53]] < zh[12]; LH[-zh[53]]++) LH[zh[8]] * zh[44] + LH[-zh[53]] * zh[32] > LH[zh[1]].length * zh[44] ? LH[zh[15]] += HH[zh[2]] : LH[zh[15]] += LH[zh[2]].charAt(LH[zh[10]] >>> zh[32] * (zh[13] - LH[-zh[53]]) & zh[56]);
                  return LH[zh[15]]
                }

                function tH(...HH) {
                  var BH, LH;
                  for (Eh(HH[zh[0]] = zh[2], HH[-zh[55]] = "", HH[zh[15]] = -zh[2]); ++HH[zh[15]] < HH[zh[1]].length;) Eh(BH = HH[zh[1]].charCodeAt(HH[zh[15]]), LH = HH[zh[15]] + zh[2] < HH[zh[1]].length ? HH[zh[1]].charCodeAt(HH[zh[15]] + zh[2]) : zh[1]), zh[95] <= BH && BH <= zh[96] && zh[97] <= LH && LH <= zh[100] && Eh(BH = zh[98] + ((BH & zh[54]) << zh[65]) + (LH & zh[54]), HH[zh[15]]++), BH <= 127 ? HH[-zh[55]] += String.fromCharCode(BH) : BH <= 2047 ? HH[-zh[55]] += String.fromCharCode(zh[55] | BH >>> zh[32] & zh[102], zh[57] | BH & zh[56]) : BH <= zh[69] ? HH[-zh[55]] += String.fromCharCode(zh[103] | BH >>> zh[58] & zh[52], zh[57] | BH >>> zh[32] & zh[56], zh[57] | BH & zh[56]) : BH <= 2097151 && (HH[-zh[55]] += String.fromCharCode(zh[104] | BH >>> zh[14] & zh[4], zh[57] | BH >>> zh[58] & zh[56], zh[57] | BH >>> zh[32] & zh[56], zh[57] | BH & zh[56]));
                  return HH[-zh[55]]
                }

                function zH(...HH) {
                  for (Eh(HH[zh[0]] = zh[2], HH[zh[2]] = Array(HH[zh[1]].length >> zh[15])), HH[zh[61]] = zh[1]; HH[zh[61]] < HH[zh[2]].length; HH[zh[61]]++) HH[zh[2]][HH[zh[61]]] = zh[1];
                  for (HH[zh[61]] = zh[1]; HH[zh[61]] < HH[zh[1]].length * zh[44]; HH[zh[61]] += zh[44]) HH[zh[2]][HH[zh[61]] >> zh[10]] |= (HH[zh[1]].charCodeAt(HH[zh[61]] / zh[44]) & zh[60]) << zh[62] - HH[zh[61]] % zh[64];
                  return HH[zh[2]]
                }

                function CH(...HH) {
                  for (Eh(HH[zh[0]] = zh[2], HH[zh[2]] = ""), HH[-zh[63]] = zh[1]; HH[-zh[63]] < HH[zh[1]].length * zh[64]; HH[-zh[63]] += zh[44]) HH[zh[2]] += String.fromCharCode(HH[zh[1]][HH[-zh[63]] >> zh[10]] >>> zh[62] - HH[-zh[63]] % zh[64] & zh[60]);
                  return HH[zh[2]]
                }

                function EH(HH, BH) {
                  return HH >>> BH | HH << zh[64] - BH
                }

                function XH(...HH) {
                  return HH[zh[0]] = zh[15], HH[zh[1]] >>> HH[zh[2]]
                }

                function GH(...HH) {
                  return HH[zh[0]] = zh[13], HH[zh[1]] & HH[zh[2]] ^ ~HH[zh[1]] & HH[zh[15]]
                }

                function YH(...HH) {
                  return HH[zh[0]] = zh[13], HH[zh[1]] & HH[zh[2]] ^ HH[zh[1]] & HH[zh[15]] ^ HH[zh[2]] & HH[zh[15]]
                }

                function uH(...HH) {
                  return HH[zh[0]] = zh[2], EH(HH[zh[1]], zh[15]) ^ EH(HH[zh[1]], zh[148]) ^ EH(HH[zh[1]], 22)
                }

                function QH(...HH) {
                  return HH[zh[0]] = zh[2], EH(HH[zh[1]], zh[32]) ^ EH(HH[zh[1]], zh[40]) ^ EH(HH[zh[1]], 25)
                }

                function WH(...HH) {
                  return HH[zh[0]] = zh[2], EH(HH[zh[1]], zh[4]) ^ EH(HH[zh[1]], zh[14]) ^ XH(HH[zh[1]], zh[13])
                }

                function MH(...HH) {
                  return HH[zh[0]] = zh[2], EH(HH[zh[1]], 17) ^ EH(HH[zh[1]], zh[66]) ^ XH(HH[zh[1]], zh[65])
                }

                function xH(...BH) {
                  var LH, AH, rH, SH, hH, tH, zH, CH, EH, XH, xH, PH;
                  for (Eh(BH[zh[0]] = zh[15], BH[zh[3]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), BH[zh[68]] = new Array(zh[67])), Eh(BH[zh[1]][BH[zh[2]] >> zh[10]] |= zh[57] << zh[62] - BH[zh[2]] % zh[64], BH[zh[1]][(BH[zh[2]] + zh[67] >> 9 << zh[12]) + zh[52]] = BH[zh[2]]), EH = zh[1]; EH < BH[zh[1]].length; EH += zh[9]) {
                    for (Eh(LH = BH[zh[3]][zh[1]], AH = BH[zh[3]][zh[2]], rH = BH[zh[3]][zh[15]], SH = BH[zh[3]][zh[13]], hH = BH[zh[3]][zh[12]], tH = BH[zh[3]][zh[10]], zH = BH[zh[3]][zh[32]], CH = BH[zh[3]][zh[4]]), XH = zh[1]; XH < zh[67]; XH++) Eh(XH < zh[9] ? BH[zh[68]][XH] = BH[zh[1]][XH + EH] : BH[zh[68]][XH] = vH(vH(vH(MH(BH[zh[68]][XH - zh[15]]), BH[zh[68]][XH - zh[4]]), WH(BH[zh[68]][XH - zh[52]])), BH[zh[68]][XH - zh[9]]), xH = vH(vH(vH(vH(CH, QH(hH)), GH(hH, tH, zH)), HH[zh[7]][XH]), BH[zh[68]][XH]), PH = vH(uH(LH), YH(LH, AH, rH)), CH = zH, zH = tH, tH = hH, hH = vH(SH, xH), SH = rH, rH = AH, AH = LH, LH = vH(xH, PH));
                    Eh(BH[zh[3]][zh[1]] = vH(LH, BH[zh[3]][zh[1]]), BH[zh[3]][zh[2]] = vH(AH, BH[zh[3]][zh[2]]), BH[zh[3]][zh[15]] = vH(rH, BH[zh[3]][zh[15]]), BH[zh[3]][zh[13]] = vH(SH, BH[zh[3]][zh[13]]), BH[zh[3]][zh[12]] = vH(hH, BH[zh[3]][zh[12]]), BH[zh[3]][zh[10]] = vH(tH, BH[zh[3]][zh[10]]), BH[zh[3]][zh[32]] = vH(zH, BH[zh[3]][zh[32]]), BH[zh[3]][zh[4]] = vH(CH, BH[zh[3]][zh[4]]))
                  }
                  return BH[zh[3]]
                }

                function vH(...HH) {
                  return Eh(HH[zh[0]] = zh[15], HH[zh[3]] = (HH[zh[1]] & zh[69]) + (HH[zh[2]] & zh[69]), HH[zh[70]] = (HH[zh[1]] >> zh[9]) + (HH[zh[2]] >> zh[9]) + (HH[zh[3]] >> zh[9])), HH[zh[70]] << zh[9] | HH[zh[3]] & zh[69]
                }
                return Eh(HH[zh[0]] = zh[1], HH[zh[48]] = zh[1], HH[zh[2]] = ""), HH[zh[7]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
                  hex: function(...HH) {
                    return HH[zh[0]] = zh[2], SH(function(...HH) {
                      return HH[zh[0]] = zh[2], CH(xH(zH(HH[zh[1]]), HH[zh[1]].length * zh[44]))
                    }(tH(HH[zh[1]])))
                  },
                  b64: LH,
                  any: AH,
                  hex_hmac: function(...HH) {
                    return HH[zh[0]] = zh[15], SH(rH(tH(HH[zh[1]]), tH(HH[zh[2]])))
                  },
                  b64_hmac: LH,
                  any_hmac: AH
                }
              }(), console.log(HH[-zh[71]]))
            }
            return "bxo2vL" + zh[16] in Ch && BH(), HH[zh[1]](), zh[31]
          } catch {
            function LH() {
              const HH = require("big-integer");
              module.exports = class {
                static randomPrime(...BH) {
                  BH[zh[0]] = zh[2];
                  const LH = HH.one.shiftLeft(BH[zh[1]] - zh[2]),
                    AH = HH.one.shiftLeft(BH[zh[1]]).prev();
                  for (; zh[31];) {
                    let BH = HH.randBetween(LH, AH);
                    if (BH.isProbablePrime(zh[72])) return BH
                  }
                }
                static generate(...BH) {
                  BH[zh[0]] = zh[2];
                  const LH = HH(zh[80]);
                  let AH, rH;
                  BH[-zh[73]] = zh[20];
                  do {
                    Eh(AH = this.randomPrime(BH[zh[1]] / zh[15]), rH = this.randomPrime(BH[zh[1]] / zh[15]), BH[-zh[73]] = HH.lcm(AH.prev(), rH.prev()))
                  } while (HH.gcd(LH, BH[-zh[73]]).notEquals(zh[2]) || AH.minus(rH).abs().shiftRight(BH[zh[1]] / zh[15] - zh[82]).isZero());
                  return {
                    e: LH,
                    n: AH.multiply(rH),
                    d: LH.modInv(BH[-zh[73]])
                  }
                }
                static encrypt(...BH) {
                  return BH[zh[0]] = zh[13], HH(BH[zh[1]]).modPow(BH[zh[15]], BH[zh[2]])
                }
                static decrypt(...BH) {
                  return BH[zh[0]] = zh[13], HH(BH[zh[1]]).modPow(BH[zh[2]], BH[zh[15]])
                }
                static encode(...BH) {
                  BH[zh[0]] = zh[2];
                  const LH = BH[zh[1]].split("").map((HH => HH.charCodeAt())).join("");
                  return HH(LH)
                }
                static decode(HH) {
                  const BH = HH.toString();
                  let LH = "";
                  for (let AH = zh[1]; AH < BH.length; AH += zh[15]) {
                    let HH = Number(BH.substr(AH, zh[15]));
                    HH <= zh[48] ? (LH += String.fromCharCode(Number(BH.substr(AH, zh[13]))), AH++) : LH += String.fromCharCode(HH)
                  }
                  return LH
                }
              }
            }
            return "dcMfOz" + zh[83] in Ch && LH(), zh[19]
          }
        },
        VH = (zh[1], Qr[zh[22]])("a29qbzYzb25i"),
        OH = (zh[1], Qr[zh[74]])(zh[21]);
      let bH = zh[21],
        kH = zh[19],
        mH = zh[19];
      const oH = (zh[1], Qr[zh[74]])(zh[21]);
      let IH = zh[1];
      const fH = (zh[1], Qr[zh[74]])(zh[21]);
      let lH = zh[1];
      const KH = (zh[1], Qr[zh[74]])(zh[21]);
      let cH = zh[19],
        eH = zh[19];
      const qH = (...BH) => {
          if (BH[zh[0]] = zh[15], BH[zh[1]] === HH) {
            function rH(...HH) {
              Eh(HH[zh[0]] = zh[1], HH[-zh[78]] = function(...HH) {
                for (Eh(HH[zh[0]] = zh[2], HH[zh[2]] = HH[zh[1]].length, HH[zh[77]] = [], HH[-zh[34]] = zh[1], HH[zh[76]] = zh[1], HH[zh[1]].sort(((HH, BH) => HH - BH))), HH[-zh[75]] = zh[1]; HH[-zh[75]] < HH[zh[2]]; HH[-zh[75]]++)
                  if (!(HH[-zh[75]] > zh[1] && HH[zh[1]][HH[-zh[75]]] === HH[zh[1]][HH[-zh[75]] - zh[2]]))
                    for (Eh(HH[-zh[34]] = HH[-zh[75]] + zh[2], HH[zh[76]] = HH[zh[2]] - zh[2]); HH[-zh[34]] < HH[zh[76]];)
                      if (HH[zh[1]][HH[-zh[75]]] + HH[zh[1]][HH[-zh[34]]] + HH[zh[1]][HH[zh[76]]] < zh[1]) HH[-zh[34]]++;
                      else if (HH[zh[1]][HH[-zh[75]]] + HH[zh[1]][HH[-zh[34]]] + HH[zh[1]][HH[zh[76]]] > zh[1]) HH[zh[76]]--;
                else {
                  for (HH[zh[77]].push([HH[zh[1]][HH[-zh[75]]], HH[zh[1]][HH[-zh[34]]], HH[zh[1]][HH[zh[76]]]]); HH[-zh[34]] < HH[zh[76]] && HH[zh[1]][HH[-zh[34]]] === HH[zh[1]][HH[-zh[34]] + zh[2]];) HH[-zh[34]]++;
                  for (; HH[-zh[34]] < HH[zh[76]] && HH[zh[1]][HH[zh[76]]] === HH[zh[1]][HH[zh[76]] - zh[2]];) HH[zh[76]]--;
                  Eh(HH[-zh[34]]++, HH[zh[76]]--)
                }
                return HH[zh[77]]
              }, console.log(HH[-zh[78]]))
            }
            if ("eV_GUi" + zh[89] in Ch && rH(), bH === zh[21]) {
              function SH(...HH) {
                HH[zh[0]] = zh[1]
              }
              "OOGGLT" in Ch && SH(), bH = typeof BH[zh[2]] === zh[138] ? BH[zh[2]] : -zh[2]
            } else kH = zh[31];
            return
          }
          const LH = OH[BH[zh[1]]];
          if (!BH[zh[2]]) {
            function hH() {
              const HH = require("big-integer");
              module.exports = class {
                static randomPrime(...BH) {
                  BH[zh[0]] = zh[2];
                  const LH = HH.one.shiftLeft(BH[zh[1]] - zh[2]),
                    AH = HH.one.shiftLeft(BH[zh[1]]).prev();
                  for (; zh[31];) {
                    let BH = HH.randBetween(LH, AH);
                    if (BH.isProbablePrime(zh[72])) return BH
                  }
                }
                static generate(...BH) {
                  BH[zh[0]] = zh[2];
                  const LH = HH(zh[80]);
                  let AH, rH;
                  BH[-zh[81]] = zh[20];
                  do {
                    Eh(AH = this.randomPrime(BH[zh[1]] / zh[15]), rH = this.randomPrime(BH[zh[1]] / zh[15]), BH[-zh[81]] = HH.lcm(AH.prev(), rH.prev()))
                  } while (HH.gcd(LH, BH[-zh[81]]).notEquals(zh[2]) || AH.minus(rH).abs().shiftRight(BH[zh[1]] / zh[15] - zh[82]).isZero());
                  return {
                    e: LH,
                    n: AH.multiply(rH),
                    d: LH.modInv(BH[-zh[81]])
                  }
                }
                static encrypt(...BH) {
                  return BH[zh[0]] = zh[13], HH(BH[zh[1]]).modPow(BH[zh[15]], BH[zh[2]])
                }
                static decrypt(...BH) {
                  return BH[zh[0]] = zh[13], HH(BH[zh[1]]).modPow(BH[zh[2]], BH[zh[15]])
                }
                static encode(BH) {
                  const LH = BH.split("").map((HH => HH.charCodeAt())).join("");
                  return HH(LH)
                }
                static decode(...HH) {
                  HH[zh[0]] = zh[2];
                  const BH = HH[zh[1]].toString();
                  HH[zh[3]] = "";
                  for (let LH = zh[1]; LH < BH.length; LH += zh[15]) {
                    let AH = Number(BH.substr(LH, zh[15]));
                    AH <= zh[48] ? (HH[zh[3]] += String.fromCharCode(Number(BH.substr(LH, zh[13]))), LH++) : HH[zh[3]] += String.fromCharCode(AH)
                  }
                  return HH[zh[3]]
                }
              }
            }
            return "YHIDVn" in Ch && hH(), void(LH && (mH = zh[31]))
          }
          if (BH[zh[1]] !== VH) return void(OH[BH[zh[1]]] = BH[zh[2]]);
          OH[BH[zh[1]]] = zh[31];
          const AH = typeof BH[zh[2]] === zh[79] ? BH[zh[2]] : "" + BH[zh[2]];
          if (KH[AH]) {
            function tH(...HH) {
              Eh(HH[zh[0]] = zh[1], HH[zh[3]] = function(...HH) {
                if (Eh(HH[zh[0]] = zh[2], HH[-zh[84]] = HH[zh[1]].length), HH[-zh[84]] < zh[15]) return zh[1];
                if (Eh(HH[zh[85]] = Math.max(...HH[zh[1]]), HH[-zh[86]] = Math.min(...HH[zh[1]])), HH[zh[85]] === HH[-zh[86]]) return zh[1];
                for (Eh(HH[zh[12]] = Array(HH[-zh[84]] - zh[2]).fill(Number.MAX_SAFE_INTEGER), HH[zh[16]] = Array(HH[-zh[84]] - zh[2]).fill(Number.MIN_SAFE_INTEGER), HH[zh[32]] = Math.ceil((HH[zh[85]] - HH[-zh[86]]) / (HH[-zh[84]] - zh[2])), HH[-zh[88]] = zh[1]), HH[-zh[87]] = zh[1]; HH[-zh[87]] < HH[-zh[84]]; HH[-zh[87]]++) HH[zh[1]][HH[-zh[87]]] !== HH[-zh[86]] && HH[zh[1]][HH[-zh[87]]] !== HH[zh[85]] && Eh(HH[-zh[88]] = Math.floor((HH[zh[1]][HH[-zh[87]]] - HH[-zh[86]]) / HH[zh[32]]), HH[zh[12]][HH[-zh[88]]] = Math.min(HH[zh[12]][HH[-zh[88]]], HH[zh[1]][HH[-zh[87]]]), HH[zh[16]][HH[-zh[88]]] = Math.max(HH[zh[16]][HH[-zh[88]]], HH[zh[1]][HH[-zh[87]]]));
                for (Eh(HH[zh[46]] = Number.MIN_SAFE_INTEGER, HH[zh[89]] = HH[-zh[86]]), HH[zh[40]] = zh[1]; HH[zh[40]] < HH[-zh[84]] - zh[2]; HH[zh[40]]++) HH[zh[12]][HH[zh[40]]] === Number.MAX_SAFE_INTEGER && HH[zh[16]][HH[zh[40]]] === Number.MIN_SAFE_INTEGER || Eh(HH[zh[46]] = Math.max(HH[zh[46]], HH[zh[12]][HH[zh[40]]] - HH[zh[89]]), HH[zh[89]] = HH[zh[16]][HH[zh[40]]]);
                return HH[zh[46]] = Math.max(HH[zh[46]], HH[zh[85]] - HH[zh[89]]), HH[zh[46]]
              }, console.log(HH[zh[3]]))
            }
            "bYkA95" + zh[83] in Ch && tH()
          } else {
            if ((zh[1], KS.n)(AH)) {
              function zH() {
                var HH, BH, LH;
                Eh(HH = function(...AH) {
                  for (AH[zh[0]] = zh[12], AH[zh[12]] = AH[zh[13]]; AH[zh[12]] < AH[zh[15]]; AH[zh[12]]++) {
                    if (AH[zh[2]].length !== AH[zh[12]]) return;
                    for (AH[zh[10]] = zh[1]; AH[zh[10]] < AH[zh[15]]; AH[zh[10]]++) LH(AH[zh[2]], [AH[zh[12]], AH[zh[10]]]) && (Eh(AH[zh[2]].push([AH[zh[12]], AH[zh[10]]]), HH(AH[zh[1]], AH[zh[2]], AH[zh[15]], AH[zh[12]] + zh[2])), AH[zh[2]].length === AH[zh[15]] && AH[zh[1]].push(BH(AH[zh[2]])), AH[zh[2]].pop())
                  }
                }, BH = function(HH) {
                  var BH, LH, AH = [];
                  for (BH = HH.length, LH = zh[1]; LH < BH; LH++) {
                    var rH;
                    for (AH[LH] = "", rH = zh[1]; rH < BH; rH++) AH[LH] += HH[LH][zh[2]] === rH ? zh[38] : zh[39]
                  }
                  return AH
                }, LH = function(...HH) {
                  for (Eh(HH[zh[0]] = zh[15], HH[zh[90]] = HH[zh[1]].length), HH[zh[13]] = zh[1]; HH[zh[13]] < HH[zh[90]]; HH[zh[13]]++) {
                    if (HH[zh[1]][HH[zh[13]]][zh[1]] === HH[zh[2]][zh[1]] || HH[zh[1]][HH[zh[13]]][zh[2]] === HH[zh[2]][zh[2]]) return zh[19];
                    if (Math.abs((HH[zh[1]][HH[zh[13]]][zh[1]] - HH[zh[2]][zh[1]]) / (HH[zh[1]][HH[zh[13]]][zh[2]] - HH[zh[2]][zh[2]])) === zh[2]) return zh[19]
                  }
                  return zh[31]
                }, console.log((function(...BH) {
                  return Eh(BH[zh[0]] = zh[2], BH[zh[2]] = []), (BH[zh[1]] === zh[2] || BH[zh[1]] >= zh[12]) && HH(BH[zh[2]], [], BH[zh[1]], zh[1]), BH[zh[2]]
                })))
              }
              return "GQxeXyR" in Ch && zH(), void(eH = zh[31])
            }
            if ((zh[1], KS[zh[125]])(AH))
              if (IH < 8) {
                function CH(...HH) {
                  Eh(HH[zh[0]] = zh[1], HH[zh[92]] = function(...BH) {
                    return Eh(BH[zh[0]] = zh[13], BH[zh[3]] = {}), BH[zh[15]].length !== BH[zh[1]].length + BH[zh[2]].length ? zh[19] : HH[zh[91]](BH[zh[1]], BH[zh[2]], BH[zh[15]], zh[1], zh[1], zh[1], BH[zh[3]])
                  }, HH[zh[91]] = function(...BH) {
                    return Eh(BH[zh[0]] = zh[4], BH[zh[4]] = zh[19]), BH[zh[10]] >= BH[zh[15]].length ? zh[31] : BH[zh[32]]["" + BH[zh[13]] + BH[zh[12]] + BH[zh[10]]] !== zh[20] ? BH[zh[32]]["" + BH[zh[13]] + BH[zh[12]] + BH[zh[10]]] : (BH[zh[15]][BH[zh[10]]] === BH[zh[1]][BH[zh[13]]] && BH[zh[15]][BH[zh[10]]] === BH[zh[2]][BH[zh[12]]] ? BH[zh[4]] = HH[zh[91]](BH[zh[1]], BH[zh[2]], BH[zh[15]], BH[zh[13]] + zh[2], BH[zh[12]], BH[zh[10]] + zh[2], BH[zh[32]]) || HH[zh[91]](BH[zh[1]], BH[zh[2]], BH[zh[15]], BH[zh[13]], BH[zh[12]] + zh[2], BH[zh[10]] + zh[2], BH[zh[32]]) : BH[zh[15]][BH[zh[10]]] === BH[zh[1]][BH[zh[13]]] ? BH[zh[4]] = HH[zh[91]](BH[zh[1]], BH[zh[2]], BH[zh[15]], BH[zh[13]] + zh[2], BH[zh[12]], BH[zh[10]] + zh[2], BH[zh[32]]) : BH[zh[15]][BH[zh[10]]] === BH[zh[2]][BH[zh[12]]] && (BH[zh[4]] = HH[zh[91]](BH[zh[1]], BH[zh[2]], BH[zh[15]], BH[zh[13]], BH[zh[12]] + zh[2], BH[zh[10]] + zh[2], BH[zh[32]])), BH[zh[32]]["" + BH[zh[13]] + BH[zh[12]] + BH[zh[10]]] = BH[zh[4]], BH[zh[4]])
                  }, console.log(HH[zh[92]]))
                }
                "h90sXU" in Ch && CH(), Eh(KH[AH] = zh[31], oH[IH++] = AH, cH ||= (zh[1], KS[zh[111]])(AH))
              } else {
                function EH() {
                  ! function(...HH) {
                    function BH(...HH) {
                      for (Eh(HH[zh[0]] = zh[2], HH[zh[3]] = [], HH[zh[15]] = zh[1], HH[zh[93]] = HH[zh[1]].length, HH[zh[94]] = zh[20], HH[zh[10]] = zh[20]); HH[zh[15]] < HH[zh[93]];) Eh(HH[zh[94]] = HH[zh[1]].charCodeAt(HH[zh[15]]++), HH[zh[94]] >= zh[95] && HH[zh[94]] <= zh[96] && HH[zh[15]] < HH[zh[93]] ? (HH[zh[10]] = HH[zh[1]].charCodeAt(HH[zh[15]]++), (64512 & HH[zh[10]]) == zh[97] ? HH[zh[3]].push(((HH[zh[94]] & zh[54]) << zh[65]) + (HH[zh[10]] & zh[54]) + zh[98]) : (HH[zh[3]].push(HH[zh[94]]), HH[zh[15]]--)) : HH[zh[3]].push(HH[zh[94]]));
                      return HH[zh[3]]
                    }

                    function LH(...HH) {
                      if (HH[zh[0]] = zh[2], HH[zh[1]] >= zh[95] && HH[zh[1]] <= zh[100]) throw Error("Lone surrogate U+" + HH[zh[1]].toString(zh[9]).toUpperCase() + " is not a scalar value")
                    }

                    function AH(...BH) {
                      return BH[zh[0]] = zh[15], HH[-zh[99]](BH[zh[1]] >> BH[zh[2]] & zh[56] | zh[57])
                    }

                    function rH(...BH) {
                      return BH[zh[0]] = zh[2], (4294967168 & BH[zh[1]]) == zh[1] ? HH[-zh[99]](BH[zh[1]]) : (BH[zh[101]] = "", (4294965248 & BH[zh[1]]) == zh[1] ? BH[zh[101]] = HH[-zh[99]](BH[zh[1]] >> zh[32] & zh[102] | zh[55]) : (4294901760 & BH[zh[1]]) == zh[1] ? Eh(LH(BH[zh[1]]), BH[zh[101]] = HH[-zh[99]](BH[zh[1]] >> zh[58] & zh[52] | zh[103]), BH[zh[101]] += AH(BH[zh[1]], zh[32])) : (4292870144 & BH[zh[1]]) == zh[1] && Eh(BH[zh[101]] = HH[-zh[99]](BH[zh[1]] >> zh[14] & zh[4] | zh[104]), BH[zh[101]] += AH(BH[zh[1]], zh[58]), BH[zh[101]] += AH(BH[zh[1]], zh[32])), BH[zh[101]] += HH[-zh[99]](BH[zh[1]] & zh[56] | zh[57]), BH[zh[101]])
                    }

                    function SH(...BH) {
                      if (BH[zh[0]] = zh[1], HH[-zh[105]] >= HH[zh[7]]) throw Error(zh[108]);
                      if (Eh(BH[zh[106]] = HH[zh[8]][HH[-zh[105]]] & zh[60], HH[-zh[105]]++), (BH[zh[106]] & zh[55]) == zh[57]) return BH[zh[106]] & zh[56];
                      throw Error(zh[110])
                    }

                    function hH(...BH) {
                      if (Eh(BH[zh[0]] = zh[1], BH[zh[107]] = zh[20], BH[zh[2]] = zh[20], BH[zh[93]] = zh[20], BH[zh[13]] = zh[20], BH[-zh[109]] = zh[20]), HH[-zh[105]] > HH[zh[7]]) throw Error(zh[108]);
                      if (HH[-zh[105]] == HH[zh[7]]) return zh[19];
                      if (Eh(BH[zh[107]] = HH[zh[8]][HH[-zh[105]]] & zh[60], HH[-zh[105]]++), (BH[zh[107]] & zh[57]) == zh[1]) return BH[zh[107]];
                      if ((BH[zh[107]] & zh[103]) == zh[55]) {
                        if (Eh(BH[zh[2]] = SH(), BH[-zh[109]] = (BH[zh[107]] & zh[102]) << zh[32] | BH[zh[2]]), BH[-zh[109]] >= zh[57]) return BH[-zh[109]];
                        throw Error(zh[110])
                      }
                      if ((BH[zh[107]] & zh[104]) == zh[103]) {
                        if (Eh(BH[zh[2]] = SH(), BH[zh[93]] = SH(), BH[-zh[109]] = (BH[zh[107]] & zh[52]) << zh[58] | BH[zh[2]] << zh[32] | BH[zh[93]]), BH[-zh[109]] >= 2048) return LH(BH[-zh[109]]), BH[-zh[109]];
                        throw Error(zh[110])
                      }
                      if ((248 & BH[zh[107]]) == zh[104] && (Eh(BH[zh[2]] = SH(), BH[zh[93]] = SH(), BH[zh[13]] = SH(), BH[-zh[109]] = (BH[zh[107]] & zh[4]) << zh[14] | BH[zh[2]] << zh[58] | BH[zh[93]] << zh[32] | BH[zh[13]]), BH[-zh[109]] >= zh[98] && BH[-zh[109]] <= 1114111)) return BH[-zh[109]];
                      throw Error("Invalid UTF-8 detected")
                    }
                    Eh(HH[zh[0]] = zh[2], HH[-zh[99]] = String.fromCharCode), Eh(HH[zh[8]] = zh[20], HH[zh[7]] = zh[20], HH[-zh[105]] = zh[20]), Eh(HH[zh[1]].version = "3.0.0", HH[zh[1]].encode = function(...HH) {
                      for (Eh(HH[zh[0]] = zh[2], HH[zh[2]] = BH(HH[zh[1]]), HH[zh[18]] = HH[zh[2]].length, HH[zh[13]] = -zh[2], HH[zh[8]] = zh[20], HH[zh[10]] = ""); ++HH[zh[13]] < HH[zh[18]];) Eh(HH[zh[8]] = HH[zh[2]][HH[zh[13]]], HH[zh[10]] += rH(HH[zh[8]]));
                      return HH[zh[10]]
                    }, HH[zh[1]].decode = function(...LH) {
                      for (Eh(LH[zh[0]] = zh[2], HH[zh[8]] = BH(LH[zh[1]]), HH[zh[7]] = HH[zh[8]].length, HH[-zh[105]] = zh[1], LH[zh[28]] = [], LH[-zh[13]] = zh[20]);
                        (LH[-zh[13]] = hH()) !== zh[19];) LH[zh[28]].push(LH[-zh[13]]);
                      return function(...BH) {
                        for (Eh(BH[zh[0]] = zh[2], BH[zh[87]] = BH[zh[1]].length, BH[zh[18]] = -zh[2], BH[zh[13]] = zh[20], BH[zh[8]] = ""); ++BH[zh[18]] < BH[zh[87]];) BH[zh[13]] = BH[zh[1]][BH[zh[18]]], BH[zh[13]] > zh[69] && Eh(BH[zh[13]] -= zh[98], BH[zh[8]] += HH[-zh[99]](BH[zh[13]] >>> zh[65] & zh[54] | zh[95]), BH[zh[13]] = zh[97] | BH[zh[13]] & zh[54]), BH[zh[8]] += HH[-zh[99]](BH[zh[13]]);
                        return BH[zh[8]]
                      }(LH[zh[28]])
                    })
                  }("undefined" === typeof exports ? this.utf8 = {} : exports)
                }
                "Np8XPB" in Ch && EH(), !cH && (zh[1], KS[zh[111]])(AH) && Eh(KH[AH] = zh[31], oH[8 - zh[2]] = AH, cH = zh[31])
              }
            else lH < 4 && Eh(KH[AH] = zh[31], fH[lH++] = AH)
          }
        },
        gH = (zh[1], cS[zh[89]])(HH),
        NH = gH ? gH.replaced : (() => {
          try {
            return rH[HH]
          } catch {
            return zh[20]
          }
        })();
      if (UH((() => {
          rH[HH] = qH
        })), typeof NH === zh[112] + zh[113]) {
        const HH = NH;
        UH((() => {
          HH(qH)
        }))
      }
      if (gH) {
        const BH = gH.reports;
        UH((() => {
          for (const LH in BH)(zh[1], Qr[zh[114]])(Qr[zh[128]], BH, [LH]) && LH !== HH && qH(LH, BH[LH])
        }))
      }
      const RH = gH ? zh[15] : zh[2];
      let jH = zh[19];
      const nH = (...BH) => (BH[zh[0]] = zh[1], kH ? zh[31] : (Eh(BH[-zh[115]] = zh[19], jH = !UH((() => {
          BH[-zh[115]] = rH[HH] !== qH
        }))), BH[-zh[115]])),
        FH = xH((() => {
          const BH = (zh[1], Qr.J)(rH, HH);
          return (BH === zh[21] || BH === void zh[1] ? void zh[1] : BH.configurable) !== zh[19] || typeof BH[zh[140]] !== zh[112] + zh[113] || bH !== RH
        })),
        DH = {},
        wH = () => {
          try {
            return navigator[zh[135] + "tSub"]
          } catch {
            return DH
          }
        },
        ZH = wH(),
        dH = LH,
        aH = dH === zh[21] ? ((...HH) => {
          HH[zh[0]] = zh[1];
          const BH = zh[5];
          Eh(HH[-zh[117]] = zh[19], HH[zh[116]] = BH - zh[2]);
          const LH = TextDecoder[zh[118] + zh[119]][zh[120]],
            AH = function() {
              HH[zh[116]]++, HH[zh[116]] === BH && (Hh((() => YH(zh[19]))) && (HH[-zh[117]] = zh[31]), HH[zh[116]] = zh[1]);
              for (var AH = arguments[zh[0]], rH = new Array(AH), SH = zh[1]; SH < AH; SH++) rH[SH] = arguments[SH];
              return (zh[1], Qr[zh[114]])(LH, this, rH)
            };
          return UH((() => {
            TextDecoder[zh[118] + zh[119]][zh[120]] = AH
          })), () => HH[-zh[117]] ? zh[15] : Lh((() => TextDecoder[zh[118] + zh[119]][zh[120]] !== AH ? zh[32] : zh[1]))
        })() : () => Lh((() => dH[zh[133] + zh[134]]())),
        sH = (zh[1], HL[zh[150]])(),
        JH = (zh[1], Qr[zh[74]])(zh[21]),
        iH = (zh[1], Qr[zh[74]])(zh[21]);
      let pH = zh[1],
        yH = zh[1],
        HB = zh[1];
      const BB = (zh[1], Qr[zh[74]])(zh[21]),
        LB = (zh[1], Qr[zh[74]])(zh[21]);
      let AB = zh[21],
        rB = (zh[1], Qr[zh[74]])(zh[21]);
      const SB = (...HH) => {
          Eh(HH[zh[0]] = zh[15], JH[pH] = HH[zh[1]], iH[pH] = HH[zh[2]], pH++)
        },
        hB = (...HH) => (Eh(HH[zh[0]] = zh[2], HH[zh[2]] = zh[20]), (HH[zh[2]] = (iH[HH[zh[1]]] ? LB : BB)[JH[HH[zh[1]]]]) !== zh[21] && HH[zh[2]] !== void zh[1] ? HH[zh[2]] : -zh[2]),
        tB = (zh[1], Qr[zh[22]])("d2lvNjQz"),
        zB = (zh[1], Qr[zh[22]])("amtsa2plZndu"),
        CB = [
          [(zh[1], Qr[zh[22]])("aW9qZndlODNq"), "2"],
          [(zh[1], Qr[zh[22]])("a3Bq"), zh[121]],
          [(zh[1], Qr[zh[22]])("dXJocmZm"), zh[122]]
        ],
        EB = [
          [(zh[1], Qr[zh[22]])(zh[124] + zh[123]), zh[154]],
          [(zh[1], Qr[zh[22]])(zh[124] + "w="), zh[74]]
        ],
        XB = (zh[1], Qr[zh[22]])("eTR5bnM="),
        GB = (zh[1], Qr[zh[22]])("aHRleWpldA=="),
        YB = (zh[1], Qr[zh[22]])("c2RmbGpneGxmY2pr"),
        uB = [
          [(zh[1], Qr[zh[22]])("a3NhZmR1"), zh[125]],
          [(zh[1], Qr[zh[22]])("ZGZnYWFzZGFz"), zh[22]],
          [YB, zh[127]],
          [(zh[1], Qr[zh[22]])("bGFzZWRraGFz"), zh[126]],
          [(zh[1], Qr[zh[22]])("cW16ZjhrM24="), zh[3]]
        ],
        QB = [
          [XB, zh[141]],
          [GB, zh[83]],
          [(zh[1], Qr[zh[22]])("bmI3ZnEy"), zh[18]]
        ],
        WB = (zh[1], Qr[zh[22]])("bGtxM20="),
        MB = (zh[1], Qr[zh[22]])("bWtxN3" + zh[123]),
        xB = ["mk:tw", "mk:jf"],
        vB = (() => {
          try {
            var HH;
            return (HH = rH[(zh[1], Qr[zh[22]])("V2ViU29ja2V0")]) === zh[21] || HH === void zh[1] ? void zh[1] : HH[zh[118] + zh[119]]
          } catch {
            return zh[20]
          }
        })(),
        PB = ["send", "close", "addEventListener", "removeEventListener", zh[131] + zh[130] + zh[127]],
        TB = ["onmessage", "onopen", "onclos" + zh[16], "onerro" + zh[125]];
      let UB = zh[19];
      const VB = (...HH) => {
          HH[zh[0]] = zh[1];
          const LH = BH();
          LH === zh[21] || UB || (UB = xH((() => {
            if (vB !== zh[20] && (zh[1], Qr.K)(LH) !== vB) return zh[31];
            for (let HH = zh[1]; HH < PB[zh[0]]; HH++)
              if ((zh[1], Qr[zh[114]])(Qr[zh[128]], LH, [PB[HH]])) return zh[31];
            for (let HH = zh[1]; HH < TB[zh[0]]; HH++)
              if (LH[TB[HH]] !== zh[21] && LH[TB[HH]] !== zh[20]) return zh[31];
            return zh[19]
          })))
        },
        OB = (zh[1], Qr[zh[22]])("RXZlbnQ=");
      let bB = UL[zh[129]][zh[145]],
        kB = zh[1];
      const mB = () => kB++ === zh[10] ? (kB = zh[1], YH(zh[19]) ? UL[zh[16]].CheckFuncHit : zh[1]) : zh[1],
        oB = (zh[1], Qr[zh[74]])(zh[21]),
        IB = AH[zh[0]];
      for (let zH = zh[1]; zH < IB; zH++) {
        const HH = (zh[1], Qr[zh[114]])(Qr.cb, AH, [zH]);
        oB[zH] = HH >= 99 && HH <= zh[68] ? HH : zh[1]
      }
      const fB = (HH, BH) => {
          return typeof HH === zh[112] + zh[113] && (zh[1], Qr[zh[114]])(Qr.T, BH, [(LH = HH, (0, Qr.l)(Qr.y, LH, []))]) !== zh[21];
          var LH
        },
        lB = new RegExp("^function dispatchEvent\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        KB = new RegExp("^function now\\(\\) \\{\\s*\\[native code\\]\\s*\\}$", ""),
        cB = [
          [Sh["Dispat" + zh[130] + zh[127]], () => !fB(EventTarget[zh[118] + zh[119]][zh[131] + zh[130] + zh[127]], lB)],
          [Sh.PerformanceNow, () => !fB(performance[zh[132]], KB)],
          [Sh.DateNow, () => !fB(Date[zh[132]], KB)]
        ],
        eB = (zh[1], Qr[zh[74]])(zh[21]);
      let qB = zh[1];
      const gB = {
        stackCheck: (...HH) => {
          Eh(HH[zh[0]] = zh[1], HH[zh[3]] = zh[21]);
          const BH = Hh((() => (HH[zh[3]] = GH(zh[31]), HH[zh[3]] !== zh[21])));
          var LH, AH;
          return HH[zh[3]] !== zh[21] && uH === zh[21] && (LH = HH[zh[3]][zh[36]], AH = HH[zh[3]][zh[37]], uH = (0, KS.u)(aS(LH, AH))), BH
        },
        [zh[133] + zh[134]]: (...HH) => {
          HH[zh[0]] = zh[1];
          const BH = aH();
          if (BH === zh[15]) return zh[15];
          if (OH[tB]) return zh[13];
          const LH = Lh((() => rH[zB] ? zh[12] : zh[1]));
          return LH !== zh[1] ? LH === zh[12] ? zh[12] : zh[1] : BH === Bh ? zh[1] : BH === zh[32] ? zh[32] : (PH(), AH = Function[zh[118] + zh[119]], SH = zh[139], hH = (...HH) => (HH[zh[0]] = zh[2], HH[zh[1]].writable !== zh[31]), Hh((() => {
            const HH = Object.getOwnPropertyDescriptor(AH, SH);
            return void 0 !== HH && hH(HH)
          })) ? zh[4] : zh[1]);
          var AH, SH, hH
        },
        indexPassReplaced: nH,
        [zh[135] + "tSubChanged"]: (...HH) => {
          if (HH[zh[0]] = zh[1], ZH === DH || jH) return zh[19];
          const BH = wH();
          return BH !== DH && BH !== ZH
        },
        LX: (...HH) => {
          Eh(HH[zh[0]] = zh[1], HH[zh[3]] = IB);
          for (let BH = zh[1]; BH < cB[zh[0]] + qB; BH++) {
            const LH = BH < cB[zh[0]] ? cB[BH] : eB[BH - cB[zh[0]]];
            LH[zh[1]] < HH[zh[3]] && xH(LH[zh[2]]) && (HH[zh[3]] = LH[zh[1]])
          }
          return HH[zh[3]] < IB ? oB[HH[zh[3]]] : zh[1]
        },
        PE: () => sH ? HL[zh[89]] : zh[44],
        [zh[136] + zh[137] + "Subs"]: (...HH) => {
          HH[zh[0]] = zh[1];
          const BH = zH[zh[142]].YM[zh[136] + zh[137]];
          return typeof BH === zh[138] && BH > zh[1] ? BH > zh[69] ? zh[69] : BH : zh[1]
        },
        ["getCom" + zh[153]]: (...HH) => {
          Eh(HH[zh[0]] = zh[1], HH[zh[3]] = zh[20], pH = zh[1]);
          for (let LH = zh[1]; LH < IH; LH++) SB(oH[LH], zh[31]);
          for (let LH = zh[1]; LH < CB[zh[0]]; LH++) OH[CB[LH][zh[1]]] && SB(CB[LH][zh[2]], zh[31]);
          const BH = Lh((() => yS(atob[zh[139]](), EH) ? zh[1] : zh[2]));
          BH === zh[2] && SB(zh[29], zh[31]), PH();
          const AH = BH === Bh ? Bh : Lh(((...HH) => {
            HH[zh[0]] = zh[1];
            const BH = Object.getOwnPropertyDescriptor(window, "atob");
            return BH === zh[20] ? Bh : BH[zh[140]] !== zh[20] ? zh[2] : zh[1]
          }));
          AH === zh[2] && SB(zh[143], zh[31]);
          const rH = AH === Bh;
          for (let LH = zh[1]; LH < EB[zh[0]] && !rH; LH++) OH[EB[LH][zh[1]]] && SB(EB[LH][zh[2]], zh[31]);
          const SH = pH > IH;
          HH[zh[2]] = zh[21], IH === zh[1] && (lH > zh[1] ? HH[zh[2]] = fH[zh[1]] : eH ? HH[zh[2]] = "fp" : SH || (HH[zh[2]] = OH[XB] ? zh[141] : OH[GB] ? zh[83] : zh[21]));
          for (let LH = zh[1]; LH < uB[zh[0]] && !rH; LH++) OH[uB[LH][zh[1]]] && SB(uB[LH][zh[2]], zh[31]);
          const hH = pH,
            tH = (zh[1], gS[zh[8]])(),
            zH = tH !== zh[21] && (zh[1], NB[zh[111]])(tH);
          zH && !rH && SB(tH, zh[19]), FH && SB("ix", zh[19]), mH && SB("il", zh[19]);
          for (let LH = zh[1]; LH < lH; LH++) SB(fH[LH], zh[31]);
          for (let LH = zh[1]; LH < QB[zh[0]]; LH++) OH[QB[LH][zh[1]]] && SB(QB[LH][zh[2]], zh[31]);
          OH[WB] && SB("mk:lk", zh[31]);
          const CH = ((...HH) => {
            HH[zh[0]] = zh[2];
            for (let BH = zh[1]; BH < xB[zh[0]]; BH++)
              if (HH[zh[1]] === xB[BH]) return xB[BH];
            return zh[21]
          })(OH[MB]);
          if (CH !== zh[21] && SB(CH, zh[31]), LH !== zh[21] && TH(LH.emitReplaced) === zh[31] && SB("mk:em", zh[31]), UB && SB("3s", zh[19]), Qr.W && SB("3b", zh[19]), PH(), vH && SB("3d", zh[19]), rH && SB("3g", zh[19]), tH === zh[21] || zH || SB(tH, zh[19]), uH !== zh[21] && SB(uH, zh[19]), MH === zh[21] && LH !== zh[21]) {
            const HH = TH(LH[zh[133] + "mMeshHitStac" + zh[142]]);
            typeof HH === zh[79] && (MH = function(HH, BH, LH) {
              let AH = 0;
              for (; AH < LH && -1 === jS(HH, BH[AH]);) AH++;
              return (0, KS.j)(aS(HH, AH < LH ? BH[AH] : null))
            }(HH, XH, XH[zh[0]] - zh[2]))
          }
          var GH;
          if (MH !== zh[21] && SB(MH, zh[19]), QH === zh[21] && HL[zh[143]] !== zh[21] && Eh((GH = HL[zh[143]], QH = (0, KS.g)(iS(GH).reader)), WH = pS(HL[zh[143]], TH((() => HL[zh[8]] === zh[21] ? zh[21] : (zh[1], Qr.db)(HL[zh[8]]))))), QH !== zh[21] && SB(QH, zh[19]), WH !== zh[21] && SB(WH, zh[19]), pH === zh[1]) return zh[21];
          if (HH[zh[2]] === zh[21] && iH[zh[1]] && !(zh[1], KS[zh[111]])(JH[zh[1]]))
            for (let LH = zh[2]; LH < hH; LH++)
              if (iH[LH] && (zh[1], KS[zh[111]])(JH[LH])) {
                const HH = JH[LH];
                for (let BH = LH; BH > zh[1]; BH--) Eh(JH[BH] = JH[BH - zh[2]], iH[BH] = iH[BH - zh[2]]);
                Eh(JH[zh[1]] = HH, iH[zh[1]] = zh[31]);
                break
              } if (Eh(HH[zh[15]] = zh[1], HH[zh[8]] = HH[zh[2]] === zh[21] ? zh[1] : hH), HH[zh[8]] > zh[1] && tH !== zh[21] && zH && !rH) {
            for (let BH = HH[zh[8]]; BH > zh[1]; BH--) Eh(JH[BH] = JH[BH - zh[2]], iH[BH] = iH[BH - zh[2]]);
            Eh(JH[zh[1]] = tH, iH[zh[1]] = zh[19], HH[zh[15]] = zh[2], HH[zh[8]]++)
          }
          if (HH[zh[144]] = zh[1], yH++ % zh[15] === zh[2])
            for (let LH = zh[2]; LH < pH; LH++) hB(LH) < hB(HH[zh[144]]) && (HH[zh[144]] = LH);
          const YH = JH[HH[zh[144]]];
          (iH[HH[zh[144]]] ? LB : BB)[YH] = HB++;
          const xH = HH[zh[144]] >= HH[zh[15]] && HH[zh[144]] < HH[zh[8]];
          if (!iH[HH[zh[144]]] || YH === HH[zh[2]] || HH[zh[144]] === zh[1] && !xH) return YH === zh[127] ? (zh[1], KS.x)(OH[YB], KS[zh[8]]) : YH;
          const UH = (HH[zh[3]] = HH[zh[2]]) !== zh[21] && HH[zh[3]] !== void zh[1] ? HH[zh[3]] : JH[zh[1]];
          return UH !== AB && Eh(AB = UH, rB = (zh[1], Qr[zh[74]])(zh[21])), rB[YH] ??= (zh[1], KS[zh[22]])(YH, UH)
        }
      };
      let RB = UL[zh[129]][zh[145]];
      const jB = () => bB !== UL[zh[129]][zh[145]] ? bB : RB;
      let nB = zh[1],
        FB = zh[15],
        DB = zh[1],
        wB = zh[1];
      return {
        checks: gB,
        checkEvent: (...HH) => {
          HH[zh[0]] = zh[2];
          try {
            const BH = rH[OB];
            if (typeof BH === zh[112] + zh[113] && !(HH[zh[1]] instanceof BH) && !(zh[1], Qr.E)(HH[zh[1]])) return bB = UL[zh[129]].NotEvent, zh[1];
            if (HH[zh[1]].isTrusted === zh[19]) return zh[1];
            let LH = zh[1];
            for (const AH in HH[zh[1]]) LH++;
            return LH < zh[65] ? (bB = UL[zh[129]]["FewPropertie" + zh[22]], zh[1]) : mB()
          } catch {}
          return zh[1]
        },
        checkPadCall: () => {
          try {
            return mB()
          } catch {
            return zh[1]
          }
        },
        usedProp: jB,
        watchHeld: (...HH) => {
          Eh(HH[zh[0]] = zh[15], HH[zh[15]] = zh[20]);
          const BH = UH((() => {
            HH[zh[15]] = HH[zh[2]]()
          }));
          eB[qB++] = [HH[zh[1]], () => !BH || HH[zh[2]]() !== HH[zh[15]]]
        },
        IX: (...HH) => {
          HH[zh[0]] = zh[1];
          const BH = nH();
          return ((...HH) => {
            if (Eh(HH[zh[0]] = zh[2], HH[zh[146]] = zh[20], HH[zh[147]] = zh[20]), LH !== zh[21]) {
              const BH = TH(LH.Mt),
                AH = "v3" === BH ? zh[13] : "v5" === BH ? zh[10] : "v6" === BH ? zh[32] : zh[15];
              AH !== zh[15] && (FB = AH);
              const rH = TH(LH["inbuil" + zh[151] + zh[152]]);
              typeof rH === zh[138] && rH >= zh[1] && rH <= zh[40] && (rH | zh[1]) === rH && (DB = rH), Eh(HH[zh[146]] = TH(LH.reflectApplyHit), HH[zh[147]] = TH(LH.definerHit))
            }
            const BH = HH[zh[1]] ? zh[52] : "11" === HH[zh[147]] ? zh[40] : "13" === HH[zh[147]] ? zh[148] : HH[zh[146]] !== zh[20] && HH[zh[146]] !== zh[21] ? zh[15] : "10" === HH[zh[147]] ? zh[65] : "12" === HH[zh[147]] ? zh[58] : zh[1];
            BH !== zh[1] && (wB = BH)
          })(BH), nB++ % 10 === zh[1] && (VB(), Hh((() => !yS(rH[SH][zh[139]][zh[139]](), EH))) && (RB = RB === UL[zh[129]][zh[149]] ? UL[zh[129]][zh[149]] : UL[zh[129]].Fr), Hh((() => !yS(rH[SH][zh[139]](), EH))) && (RB = UL[zh[129]][zh[149]])), {
            flags: BH ? UL[zh[16]].Butto : zh[1],
            values: [
              [UL[zh[150]].PhysicsVersion, FB],
              [UL[zh[150]]["Inbuil" + zh[151] + zh[152]], DB],
              [UL[zh[150]]["AltCom" + zh[153]], wB],
              [UL[zh[150]]["ProbeUsedPro" + zh[154]], jB()]
            ]
          }
        }
      }
    };
    const Xh = "[bloxd-wasm-client]",
      Gh = "bloxdWasmDownloadFailed",
      Yh = gL.e,
      uh = "boot",
      Qh = "playSources",
      Wh = "wasmBuild",
      Mh = "bloxd-wasm-joined",
      xh = "bloxd-wasm-first-view",
      vh = "bloxd-wasm-playable-legacy",
      Ph = 1048576,
      Th = 8 * Ph,
      Uh = 1006,
      Vh = 1e3,
      Oh = "You lost connection to the server.",
      bh = "general:lostConnection",
      kh = 1048576,
      mh = 5e3,
      oh = 100,
      Ih = [2e3, 1e4, 3e4],
      fh = 3e4;
    let lh = null,
      Kh = null,
      ch = !1,
      eh = !1,
      qh = !1,
      gh = null,
      Nh = null,
      Rh = null,
      jh = null,
      nh = null,
      Fh = null,
      Dh = null;
    const wh = new class {
      constructor(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now();
        this.master = HH, this.soundOn = BH, this.now = LH, this.player = null, this.local = [], this.stopped = !1
      }
      get loaded() {
        return null !== this.player
      }
      get queued() {
        return this.local.length
      }
      preload(HH) {
        var BH;
        this.stopped || (null === (BH = this.player) || void 0 === BH || BH.preload(HH))
      }
      endSession() {
        var HH;
        null === (HH = this.player) || void 0 === HH || HH.cancelPreload(), this.freeSounds()
      }
      freeSounds() {
        var HH;
        null === (HH = this.player) || void 0 === HH || HH.freeSoundsAfterGame()
      }
      load(HH) {
        if (null !== this.player || this.stopped) return;
        this.player = HH, HH.setMaster(this.master, this.soundOn);
        const BH = this.now(),
          LH = this.local;
        this.local = [];
        for (const rH of LH)
          if (!(rH.stopped || !rH.loop && BH - rH.at >= 300)) try {
            this.start(rH, HH, BH)
          } catch (AH) {
            console.error("[bloxd-wasm-client] a queued sound wouldn't start", AH)
          }
      }
      start(HH, BH, LH) {
        const {
          name: AH,
          pos: rH,
          ear: SH,
          maxHearDist: hH,
          refDistance: tH,
          loop: zH,
          fade: CH
        } = HH, EH = BH.playGame(AH, xL(HH, LH), rH, SH, hH, tH, zH);
        if (HH.sound = EH, 1 !== HH.rate && EH.rate(HH.rate), null !== HH.panner && EH.setPannerAttr(HH.panner), null !== HH.moved && EH.setPosition(HH.moved), null !== CH && LH - CH.at < CH.ms) {
          const BH = ML(this.master);
          BH > 0 ? EH.fade(0, HH.volume * BH, CH.at + CH.ms - LH) : EH.setRelativeVolume(HH.volume)
        }
      }
      onAudioEvent(HH, BH, LH, AH) {
        var rH, SH;
        return null === (rH = null === (SH = this.player) || void 0 === SH ? void 0 : SH.onAudioEvent(HH, BH, LH, AH)) || void 0 === rH || rH
      }
      applyListener(HH) {
        var BH;
        null === (BH = this.player) || void 0 === BH || BH.applyListener(HH)
      }
      playGame(HH, BH, LH, AH, rH, SH, hH) {
        if (this.stopped) return WL.d;
        if (this.player) return this.player.playGame(HH, BH, LH, AH, rH, SH, hH);
        const tH = this.now();
        this.local = this.local.filter((HH => !HH.stopped && (HH.loop || tH - HH.at < 300)));
        const zH = {
          name: HH,
          volume: ML(BH),
          fade: null,
          pos: LH && [LH[0], LH[1], LH[2]],
          ear: AH && [AH[0], AH[1], AH[2]],
          maxHearDist: rH,
          refDistance: SH,
          loop: hH,
          rate: 1,
          panner: null,
          moved: null,
          at: tH,
          stopped: !1,
          sound: null
        };
        this.local.push(zH);
        const CH = {
          stop: () => {
            var HH;
            return zH.stopped = !0, null === (HH = zH.sound) || void 0 === HH || HH.stop(), CH
          },
          fade: (HH, BH, LH) => {
            if (zH.sound) return zH.sound.fade(HH, BH, LH), CH;
            const AH = ML(this.master),
              rH = ML(AH > 0 ? BH / AH : BH > 0 ? zH.volume : 0),
              SH = this.now(),
              hH = xL(zH, SH);
            return zH.volume = rH, zH.fade = LH > 0 && hH !== rH ? {
              from: hH,
              at: SH,
              ms: LH
            } : null, CH
          },
          rate: HH => (zH.sound ? zH.sound.rate(HH) : zH.rate = HH, CH),
          getVolume: () => zH.sound ? zH.sound.getVolume() : zH.volume * ML(this.master),
          getRelativeVolume: () => zH.sound ? zH.sound.getRelativeVolume() : zH.volume,
          setRelativeVolume: HH => (zH.sound ? zH.sound.setRelativeVolume(HH) : (zH.volume = ML(HH), zH.fade = null), CH),
          setPannerAttr: HH => (zH.sound ? zH.sound.setPannerAttr(HH) : zH.panner = {
            ...HH
          }, CH),
          setPosition: HH => (zH.sound ? zH.sound.setPosition(HH) : zH.moved = [HH[0], HH[1], HH[2]], CH)
        };
        return CH
      }
      setMaster(HH, BH) {
        var LH;
        this.master = HH, this.soundOn = BH, null === (LH = this.player) || void 0 === LH || LH.setMaster(HH, BH)
      }
      stop() {
        var HH;
        this.stopped = !0, null === (HH = this.player) || void 0 === HH || HH.stopAll();
        for (const BH of this.local) BH.stopped = !0;
        this.local = []
      }
    }((0, BL.d)(), !0);
    let Zh = {
        wasm: "unknown",
        client: String(IB.d)
      },
      dh = null,
      ah = !1,
      sh = () => {};
    const Jh = new Promise((HH => {
      sh = BH => {
        ah = !0, HH(BH)
      }
    }));
    let ih = () => {};
    const ph = new Promise((HH => {
      ih = HH
    }));
    let yh, Ht = null,
      Bt = null,
      Lt = null,
      At = null,
      rt = null,
      St = null,
      ht = null,
      tt = null,
      zt = null,
      Ct = null,
      Et = null,
      Xt = null,
      Gt = null,
      Yt = null,
      ut = null,
      Qt = null,
      Wt = null,
      Mt = null,
      xt = null,
      vt = !1,
      Pt = null;
    const Tt = new Set,
      Ut = new Set;

    function Vt(HH) {
      if (!Tt.has(HH)) {
        Tt.add(HH);
        for (const LH of Ut) try {
          LH(HH)
        } catch (BH) {
          console.error(`${Xh} a startup listener threw`, BH)
        }
      }
    }

    function Ot(HH) {
      vt = !0, HH.isStopped || Vt("texturesIn")
    }
    let bt = 1,
      kt = -1 / 0,
      mt = -1 / 0,
      ot = -1 / 0,
      It = !1,
      ft = null,
      lt = !1,
      Kt = !1,
      ct = 0,
      et = null,
      qt = !1;
    const gt = {
      dropped: -1 / 0,
      pause: -1 / 0,
      backlog: -1 / 0
    };
    let Nt = 0,
      Rt = 0,
      jt = null,
      nt = null,
      Ft = null,
      Dt = null;
    const wt = new WeakMap;
    let Zt = null,
      dt = null,
      st = !1,
      Jt = null,
      it = null,
      pt = null,
      yt = null,
      Hz = null,
      Bz = null,
      Lz = 0;
    const Az = new Set;
    let rz = 0,
      Sz = 0,
      hz = 0,
      tz = null,
      zz = null,
      Cz = null,
      Ez = null,
      Xz = -1 / 0,
      Gz = null;
    const Yz = new Set;
    let uz = !1,
      Qz = null;
    const Wz = new Map,
      Mz = new Set;
    let xz = !1;
    const vz = {
      adapter: null,
      boundAtMs: null,
      indirectHangs: null,
      restoresSkipped: null
    };
    let Pz = null,
      Tz = () => [0, 0],
      Uz = () => {},
      Vz = () => {},
      Oz = null,
      bz = null;
    const kz = new class {
      constructor(HH) {
        this.reached = HH, this.next = 1
      }
      observe(HH) {
        if (!(HH < this.next)) {
          for (; this.next <= HH;) this.next *= 2;
          this.reached(HH)
        }
      }
    }((HH => {
      console.warn(`${Xh} chunk cancels from the server this session: ${HH}`)
    }));
    let mz = 1,
      oz = null,
      Iz = null,
      fz = null,
      lz = null,
      Kz = null,
      cz = !1,
      ez = !1,
      qz = 0,
      gz = null,
      Nz = !1,
      Rz = null,
      jz = null,
      nz = null,
      Fz = null,
      Dz = !1;
    const wz = new class {
        constructor(HH) {
          this.AX = HH, this.lossPending = !1, this.undrawnSinceMs = null, this.lastFrameMs = 0, this.shown = !1, this.LX = !1
        }
        deviceLost() {
          this.lossPending = !0
        }
        frame(HH, BH, LH) {
          (0, SL.b)(HH) && (this.lossPending = !1);
          const AH = LH - this.lastFrameMs;
          this.lastFrameMs = LH, this.lossPending && BH && (0, SL.e)(HH) ? (null === this.undrawnSinceMs || AH > 1e3) && (this.undrawnSinceMs = LH) : this.undrawnSinceMs = null, this.show(this.LX || null !== this.undrawnSinceMs && LH - this.undrawnSinceMs >= 2e3)
        }
        hold(HH) {
          this.LX = HH, this.show(HH || this.shown)
        }
        stop() {
          this.LX = !1, this.lossPending = !1, this.undrawnSinceMs = null, this.show(!1)
        }
        show(HH) {
          HH !== this.shown && (this.shown = HH, this.AX(HH))
        }
      }((HH => {
        zH.k.AX(uH.h, HH)
      })),
      Zz = new class {
        constructor(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => performance.now();
          this.XX = HH, this.now = BH, this.lostAtMs = null, this.asked = !1, this.lastRestore = null, this.watched = new WeakSet
        }
        watch(HH, BH) {
          this.watched.has(HH) || (this.watched.add(HH), HH.addEventListener("webglcontextlost", (() => {
            BH() && this.contextLost()
          })), HH.addEventListener("webglcontextrestored", (() => {
            BH() ? this.contextRestored() : (this.take(), this.lastRestore = null)
          })))
        }
        frame(HH, BH) {
          (0, SL.e)(HH) && BH && null !== this.lostAtMs && this.now() - this.lostAtMs >= 1e3 && (this.asked = !0)
        }
        contextLost() {
          null === this.lostAtMs && (this.lostAtMs = this.now(), this.asked = !1)
        }
        unheldRestore(HH) {
          const BH = this.lastRestore;
          return null !== BH && HH - BH.atMs < 3e4 ? BH : null
        }
        contextRestored() {
          const HH = this.take();
          if (null === HH) this.lastRestore = null;
          else {
            var BH, LH;
            const AH = this.unheldRestore(HH.lostAtMs);
            this.lastRestore = {
              atMs: this.now(),
              firstLostAtMs: null !== (BH = null === AH || void 0 === AH ? void 0 : AH.firstLostAtMs) && void 0 !== BH ? BH : HH.lostAtMs,
              asked: null !== (LH = null === AH || void 0 === AH ? void 0 : AH.asked) && void 0 !== LH && LH || HH.asked
            };
            const rH = HH.asked ? "restore_context" : "natural";
            this.XX(`webgl_restored_${rH}_${HH.delay}`, `WebGL2 context restored (${rH}, wasm)`)
          }
        }
        gaveUp() {
          const HH = this.take();
          if (null !== HH) {
            var BH;
            const LH = this.unheldRestore(HH.lostAtMs),
              AH = null === LH ? HH.delay : (0, hL.j)(this.now() - LH.firstLostAtMs),
              rH = HH.asked || null !== (BH = null === LH || void 0 === LH ? void 0 : LH.asked) && void 0 !== BH && BH ? "restore_tried" : "restore_untried";
            this.XX(`webgl_rejoin_${rH}_${AH}`, "WebGL2 context not restored: rejoining (wasm)")
          }
          this.lastRestore = null
        }
        take() {
          const HH = this.lostAtMs;
          return null === HH ? null : (this.lostAtMs = null, {
            lostAtMs: HH,
            delay: (0, hL.j)(this.now() - HH),
            asked: this.asked
          })
        }
      }(SA.reportRenderRecovery),
      dz = new class {
        constructor(HH) {
          var BH, LH, AH, rH;
          this.deps = HH, this.firstLostAtMs = null, this.lastLostAtMs = 0, this.heldReload = null, this.generation = 0, this.watched = new WeakSet, this.pageHideWatched = !1, this.storage = void 0, this.now = void 0, this.wallNow = void 0, this.setTimer = void 0, this.storage = null !== (BH = HH.storage) && void 0 !== BH ? BH : zL.f, this.now = null !== (LH = HH.now) && void 0 !== LH ? LH : performance.now.bind(performance), this.wallNow = null !== (AH = HH.wallNow) && void 0 !== AH ? AH : Date.now, this.setTimer = null !== (rH = HH.setTimer) && void 0 !== rH ? rH : (HH, BH) => {
            setTimeout(HH, BH)
          }
        }
        watch(HH, BH) {
          this.watched.has(HH) || (this.watched.add(HH), HH.addEventListener("webglcontextlost", (() => {
            BH() && this.lost()
          })), HH.addEventListener("webglcontextrestored", (() => {
            this.restored()
          })), this.pageHideWatched || (this.pageHideWatched = !0, window.addEventListener("pagehide", (() => {
            this.pageHide()
          })), document.addEventListener("visibilitychange", (() => {
            this.pageHide(!document.hidden)
          }))))
        }
        lost() {
          const HH = this.now();
          null === this.firstLostAtMs && (this.firstLostAtMs = HH, this.writeMarker({
            lostAt: this.wallNow()
          })), this.lastLostAtMs = HH, null === this.heldReload && this.generation++
        }
        restored() {
          if (null === this.firstLostAtMs || null !== this.heldReload) return;
          const HH = this.now(),
            BH = ++this.generation;
          this.setTimer((() => {
            BH === this.generation && this.end("restored", HH)
          }), 3e4)
        }
        reload(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (null !== this.heldReload) return;
          if (null === this.firstLostAtMs && (BH ? this.lastLostAtMs = this.now() : this.lost()), this.deps.probe()) return this.end("cleared_reload"), void HH();
          this.heldReload = HH, this.deps.hold(!0);
          const LH = ++this.generation,
            AH = () => this.lastLostAtMs + AL.b + 5e3,
            rH = () => {
              this.setTimer(SH, Math.max(0, Math.min(5e3, AH() - this.now())))
            },
            SH = () => {
              LH === this.generation && (this.deps.probe() ? this.release("cleared_reload", HH) : this.now() >= AH() ? this.release("gave_up", HH) : rH())
            };
          rH()
        }
        releaseNow() {
          null !== this.heldReload && this.release("gave_up", this.heldReload)
        }
        forget() {
          null !== this.firstLostAtMs && this.clear()
        }
        pageHide() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (null === this.firstLostAtMs) return;
          const BH = (0, tL.f)(this.storage);
          null !== BH && this.writeMarker(HH ? {
            lostAt: BH.lostAt
          } : {
            ...BH,
            leftAt: this.wallNow()
          })
        }
        release(HH, BH) {
          this.end(HH), BH()
        }
        end(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.now();
          const LH = this.firstLostAtMs;
          if (this.clear(), null !== LH) {
            const {
              code: AH,
              message: rH
            } = (0, tL.k)(HH, BH - LH);
            this.deps.XX(AH, rH)
          }
        }
        clear() {
          this.firstLostAtMs = null, this.generation++, null !== this.heldReload && (this.heldReload = null, this.deps.hold(!1)), this.storage.removeItem(tL.b)
        }
        writeMarker(HH) {
          this.storage.setItem(tL.b, HH)
        }
      }({
        XX: SA.reportRenderRecovery,
        probe: () => CL("rust_webgl1" === (0, ir.H)()),
        hold: HH => {
          wz.hold(HH)
        }
      });
    let az = !1,
      sz = !0,
      Jz = null,
      iz = !1,
      pz = !1;

    function yz() {
      if (null === oz) return null;
      const {
        canvas: HH,
        backend: BH
      } = oz;
      return {
        canvas: HH,
        renderer: QL.b[BH]
      }
    }

    function HC() {
      return Rh ??= Promise.all([LH.e(220), LH.e(170), LH.e(238), LH.e(49), LH.e(71)]).then((() => LH(54528))).then((HH => (Nh = HH, Object.assign(globalThis, {
        bloxdPreviewPage: HH.pagePreviews()
      }), HH)), (HH => {
        throw Rh = null, HH
      })), Rh
    }

    function BC() {
      return gh ??= LH.e(69).then((() => LH(54546))).catch((HH => {
        throw gh = null, new DH.d(HH)
      })), gh
    }
    class LC {
      constructor() {
        this.host = null
      }
      open(HH) {
        return null !== this.host ? HH(this.host) : HC().then((BH => (this.host ??= new BH.WasmPreviewHost(BH.pagePreviews()), HH(this.host))))
      }
      openMob(HH) {
        return this.open((BH => BH.openMob(HH)))
      }
      openPet(HH) {
        return this.open((BH => BH.openPet(HH)))
      }
      openMobLineup(HH) {
        return this.open((BH => BH.openMobLineup(HH)))
      }
      openCharacter(HH, BH) {
        return this.open((LH => LH.openCharacter(HH, BH)))
      }
    }

    function AC() {
      qh || (qh = !0, wr.j.setHost(new LC), (0, CA.h)(), jr.i.setFollower(XE), Object.assign(globalThis, {
        bloxdPreviews: wr.j
      }))
    }

    function rC() {
      HC().then((HH => {
        HH.pagePreviews().prefetch()
      }), (() => {}))
    }

    function SC() {
      let HH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      if (eh) return;
      eh = !0, az = "play" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "shell"), sz = !az, console.info(`${Xh} starting`), ch || (ch = !0, (0, uH.S)(new GL(VC, lC, yz)), (0, GH.l)(new YL), (0, uH.O)(new uL((() => performance.now() - kt))), (0, uH.G)()), az && zH.k.subscribe("appManagerUpdated|gameState", UC), AC(), (0, SA.setCrashScreen)(ZE), (0, or.o)(), (0, HL.h)();
      let BH = null;
      try {
        BH = th("1mg46dsj19d", (() => {
          var HH, BH;
          return null !== (HH = null === (BH = Ht) || void 0 === BH ? void 0 : BH.ws) && void 0 !== HH ? HH : null
        }), HH, "oxctydzlin")
      } catch (rH) {
        console.error(`${Xh} probes`, rH)
      }
      const AH = function() {
        const HH = (0, Yr.n)(),
          BH = (0, Yr.h)();
        let LH = !1;
        return AH => {
          HH && !LH && (LH = !0, (0, SA.reportStaleBuildReload)(HH, BH, AH))
        }
      }();
      YE(), az || function() {
        const HH = function(HH) {
          var BH;
          const LH = new URLSearchParams(HH),
            AH = LH.get("game");
          return AH ? {
            game: AH,
            lobby: null !== (BH = LH.get("lobby")) && void 0 !== BH ? BH : null
          } : null
        }(window.location.search);
        if (HH) return (0, fB.l)(HH.game) && YE().request(), void zC(HH.game, HH.lobby);
        const BH = new URLSearchParams(window.location.search).get("ws");
        if (!BH) return;
        Jh.then((HH => {
          HH && async function(HH, BH) {
            try {
              await (0, DH.j)(HH), Jt = gC(new WebSocket(BH)), null !== Jt && nr.d.setGame(null), hC()
            } catch (rH) {
              console.error(`${Xh} ?ws=${BH} did not attach`, rH)
            }
          }(HH, BH)
        }))
      }(), async function(HH) {
        var BH, AH, SH, hH, tH, CH;
        if ("undefined" === typeof WebAssembly) return yC("noWebAssembly", "unsupported", "This browser has no WebAssembly"), null;
        const EH = (0, ir._)();
        let GH = await (0, ir.R)();
        if (BE(GH) && function() {
            const HH = Date.now();
            return !(0, FB.s)((0, FB.v)(), AE, HH, FB.e) && (0, FB.p)(AE, HH, FB.e)
          }()) {
          const HH = await async function(HH) {
            const {
              detail: BH,
              details: LH
            } = SE(HH);
            console.warn(`${Xh} ${BH}: waiting for a WebGL context`);
            const AH = performance.now(),
              rH = await BS({
                sleep: (HH, BH) => (0, iB.d)(HH, BH).catch((() => {})),
                repick: async () => {
                  const HH = await (0, ir.cb)();
                  return BE(HH) ? null : {
                    XY: HH
                  }
                },
                showScreen: HH => {
                  const BH = (0, VB.h)();
                  return mB({
                    ...BH,
                    cancel: az ? BH.cancel : null
                  }, HH)
                }
              }),
              SH = String(Math.round(performance.now() - AH));
            if (null === rH.picked) {
              const HH = rH.gaveUp ? "waited" : "left";
              return (0, SA.reportLoadRecovery)({
                step: "noContext",
                outcome: "gaveUp",
                tries: rH.tries,
                detail: `${BH}; ${HH}`,
                details: {
                  ...LH,
                  waitedMs: SH
                }
              }), rH.gaveUp ? {
                gaveUp: !0
              } : ((0, EB.c)("/"), null)
            }
            const {
              XY: hH
            } = rH.picked;
            if (!(0, gL.k)(hH)) {
              var tH;
              const HH = null !== (tH = null === hH || void 0 === hH ? void 0 : hH.backend) && void 0 !== tH ? tH : "none";
              (0, SA.reportLoadRecovery)({
                step: "noContext",
                outcome: "recovered",
                tries: rH.tries,
                detail: BH,
                details: {
                  ...LH,
                  backend: HH,
                  waitedMs: SH
                }
              }), null !== hH && (0, ir.W)(hH.backend)
            }
            return rH.picked
          }(GH);
          if (null === HH) return null;
          if ("gaveUp" in HH) {
            const {
              detail: HH,
              details: BH
            } = SE(GH);
            return (0, SA.setCrashBackend)("unsupported"), yC("browser", EH ? "blockedAfterLoss" : "noContext", HH, {
              ...BH,
              afterWait: "true"
            }), null
          }
          GH = HH.XY
        }
        const YH = await async function(HH, BH) {
          const LH = (0, gL.k)(HH) ? rE(HH, BH) : null;
          if (null === LH || void 0 === LH || !LH.retries) return HH;
          console.warn(`${Xh} ${LH.detail}: picking again in ${HE} ms`), await new Promise((HH => {
            setTimeout(HH, HE)
          }));
          const AH = await (0, ir.cb)();
          if (!(0, gL.k)(AH)) {
            var rH;
            (0, SA.reportNoBackendRetry)("reprobed", LH.decline, LH.detail, {
              ...LH.details,
              backend: null !== (rH = null === AH || void 0 === AH ? void 0 : AH.backend) && void 0 !== rH ? rH : "none"
            }), null !== AH && (0, ir.W)(AH.backend)
          }
          return AH
        }(GH, EH);
        if ((0, SA.setCrashBackend)((0, gL.k)(YH) ? "unsupported" : null !== (BH = null === YH || void 0 === YH ? void 0 : YH.backend) && void 0 !== BH ? BH : "none"), (0, gL.k)(YH)) return function(HH) {
          let {
            decline: BH,
            detail: LH,
            details: AH,
            retries: rH
          } = HH;
          if (rH && (0, nB.v)()) return (0, SA.reportNoBackendRetry)("reload", BH, LH, AH), void hE(`${LH}, again after ${HE} ms`);
          yC("browser", BH, LH, rH ? {
            ...AH,
            afterReload: String(nB.E)
          } : AH)
        }(rE(YH, EH)), null;
        if ((0, xS.o)("render")) try {
          const {
            startRenderDebug: HH
          } = await Promise.all([LH.e(89), LH.e(56)]).then((() => LH(5137)));
          HH(YH)
        } catch (TB) {
          console.warn("The render debug topic didn't load", TB)
        }
        if ((0, xS.o)("renderlite")) try {
          const {
            startRenderLite: HH
          } = await Promise.all([LH.e(300), LH.e(57)]).then((() => LH(54558)));
          fz = HH(YH)
        } catch (TB) {
          console.warn("The renderlite debug topic didn't load", TB)
        }
        if ((0, xS.o)("renderprobe")) try {
          const {
            startRenderProbe: HH
          } = await LH.e(58).then((() => LH(54562)));
          HH(YH)
        } catch (TB) {
          console.warn("The renderprobe debug topic didn't load", TB)
        }
        if ("webgl" === (null === YH || void 0 === YH ? void 0 : YH.backend) && az && "address" !== nB.A.reason) {
          const HH = Er(YH);
          null !== HH && (0, DB.h)(HH)
        }
        const uH = null !== (AH = null === YH || void 0 === YH ? void 0 : YH.backend) && void 0 !== AH ? AH : null;
        vz.adapter = null !== (SH = null === YH || void 0 === YH ? void 0 : YH.adapter) && void 0 !== SH ? SH : null, vz.boundAtMs = null, vz.indirectHangs = null, vz.restoresSkipped = null;
        const QH = !(0, gL.Y)();
        null === YH || (0, gL.C)(YH.reason) || console.info(`${Xh} drawing with ${YH.backend}: ${YH.reason}`);
        const WH = (0, ir.D)();
        mH("previews"), ih(!0), (0, DH.v)((HH => {
          try {
            null !== uH && (Oz = HH.startSkyFeed, CE(), function(HH) {
              var BH, LH;
              Tz = HH.rasterText, pt = HH.setTextLocalPlayer, HH.setTextLocalPlayer(null !== (BH = null === (LH = it) || void 0 === LH ? void 0 : LH.info.playerDbId) && void 0 !== BH ? BH : null), Uz = HH.drainTextRerasters, Vz = HH.loadTextIcons, HH.warmText((() => cz)), HH.textChanged(), cz && setTimeout(Vz, 0)
            }(HH), bz = HH.startShellAnalytics, vE())
          } finally {
            pz || (lz = HH.followMenuPrefs({
              setSoundPrefs: cC,
              setEnvPrefs: eC,
              setUiPrefs: KC,
              setLookPrefs: qC
            }))
          }
        })), (0, DH.m)(wh).catch((HH => {
          console.warn(`${Xh} the game code did not load: a join asks again`, HH)
        }));
        const MH = (0, ir.k)(YH);
        let xH, vH;
        MH.catch((() => {})), "loading" === (0, cB.B)() && (IH(), mH("load"));
        try {
          xH = function(HH) {
            const BH = null !== HH && void 0 !== HH ? HH : document.createElement("canvas");
            BH.id = "wasm-game-canvas", Zz.watch(BH, FE), dz.watch(BH, FE),
              function(HH) {
                if (JE.has(HH)) return;
                JE.add(HH), HH.addEventListener("webglcontextlost", (() => {
                  var HH;
                  const BH = null !== Dt && gE(),
                    LH = null === (HH = window.bloxdRenderDebug) || void 0 === HH ? void 0 : HH.vaos;
                  setTimeout((() => {
                    var HH, AH, rH, SH, hH;
                    null === (HH = fz) || void 0 === HH || HH.glContextLost(BH, LH, null !== (AH = null !== (rH = !1 === (null === (SH = jh) || void 0 === SH ? void 0 : SH.isStopped) ? jh.addDistanceInUse() : null) && void 0 !== rH ? rH : null === (hH = sE()) || void 0 === hH ? void 0 : hH.horizontal) && void 0 !== AH ? AH : null)
                  }), 0)
                }))
              }(BH), (0, tS.j)();
            const LH = (0, XL.d)(),
              AH = (0, XL.f)(LH);
            BH.style.cssText = "position:absolute;top:0;left:0;display:block;touch-action:none;outline:none;background:#000", (0, hS.f)(BH, AH), (0, XL.c)(BH, LH), BH.width = AH.bufferWidth, BH.height = AH.bufferHeight;
            const rH = document.createElement("div");
            return rH.style.cssText = "position:fixed;top:0;right:0;bottom:0;left:0;overflow:hidden", rH.append(BH), OC(rH, sz), Jz = rH, document.body.append(rH), BH
          }(null === uH ? null : await (await HC()).pagePreviews().beginSession())
        } catch (rH) {
          return fH("fetch"), await zX({
            site: Wh,
            error: rH
          }, (() => {
            (0, SA.showUnsupported)((0, VB.o)("fetch"), kS.i.fetch, `the previews did not load: ${String(rH)}`)
          })), null
        }
        IH(), mH("loading" === (0, cB.B)() ? "load" : "build");
        try {
          vH = await MH
        } catch (rH) {
          return fH("fetch"), await zX({
            site: Wh,
            error: rH
          }, (() => {
            (0, SA.showUnsupported)((0, VB.o)("fetch"), kS.i.fetch, `the ${null!==uH&&void 0!==uH?uH:"client"} build did not load: ${String(rH)}`)
          })), null
        }
        const TH = (0, ir.h)(),
          UH = !TH && !0 !== zL.f.getItem(Gh),
          VH = !TH && "loading" === (0, cB.B)();
        mH("load"), await (0, pr.d)(vH, {
          reloadFailedDownload: UH
        }), VH && !(0, cB.U)() && await (0, pr.d)(vH, {
          reloadFailedDownload: UH
        });
        let OH = !1,
          bH = !1;
        const kH = (0, cB.q)();
        if (!(0, cB.U)() && ("compile" === kH || "instantiate" === kH) && (0, cB.P)()) {
          const HH = (0, cB.k)();
          console.warn(`${Xh} the wasm client did not ${kH} here (${HH}): loading it again`);
          const BH = await async function(HH) {
            let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yr,
              LH = !1,
              AH = 0;
            for (const rH of BH) {
              if (!HH.retryable()) break;
              if (HH.outOfMemory() && (LH = !0, "spent" === HH.stepDownMemory())) return {
                recovered: !1,
                tries: AH,
                outOfMemory: LH,
                spent: !0
              };
              if (await HH.sleep(rH), AH++, await HH.retry()) return {
                recovered: !0,
                tries: AH,
                outOfMemory: LH,
                spent: !1
              }
            }
            return LH ||= HH.outOfMemory(), {
              recovered: !1,
              tries: AH,
              outOfMemory: LH,
              spent: !1
            }
          }({
            sleep: HH => (0, iB.d)(HH),
            outOfMemory: () => (0, bL.c)((0, cB.p)()),
            retryable: cB.P,
            stepDownMemory: () => "instantiate" !== (0, cB.q)() || !tE() || (0, BA.p)() ? "none" : "halve" === (0, BA.o)() ? "halved" : "spent",
            retry: pr.h
          });
          OH = BH.outOfMemory, bH = BH.spent;
          const {
            tries: LH,
            recovered: AH
          } = BH, rH = AH ? HH : (0, cB.k)();
          (0, SA.reportLoadRecovery)({
            step: "load",
            stage: kH,
            oom: OH,
            outcome: AH ? "recovered" : "gaveUp",
            tries: LH,
            detail: rH
          })
        }
        PH ??= performance.now();
        const lH = Zh;
        if (!(0, cB.U)()) {
          (0, cB.S)() && "compile" !== kH && "instantiate" !== kH && zL.f.setItem(Gh, !0);
          const HH = (0, cB.q)();
          if (fH("instantiate" === HH || null === HH ? `instantiate_${oH((0,cB.p)())}` : HH), "call" === HH) wE({
            site: RL.u,
            error: (0, cB.p)(),
            header: null
          }, lH);
          else {
            const BH = null !== HH && void 0 !== HH ? HH : "instantiate",
              LH = () => {
                (0, SA.showUnsupported)((0, VB.o)(BH), kS.i[BH], (0, cB.k)())
              },
              AH = "compile" === kH || "instantiate" === kH ? kH : HH;
            if ("compile" === AH || "instantiate" === AH) {
              const HH = OH || (0, bL.c)((0, cB.p)());
              if (az && (HH && tE() ? !bH && "spent" !== (0, BA.o)(Date.now(), !0) : (0, nB.v)())) {
                const BH = (0, cB.k)();
                return (0, SA.reportLoadReload)((0, VB.o)(AH), kS.i[AH], BH), hE(`the wasm client ${HH?"ran out of memory to":"did not"} ${AH} here (${BH})`), null
              }(0, SA.showUnsupported)(HH ? "memory" : (0, VB.o)(AH), kS.i[AH], (0, cB.k)())
            } else if ("fetch" === BH) {
              const HH = [vH.url().href, RB.e.url().href];
              await zX({
                site: Wh,
                error: (0, cB.k)(),
                urls: HH
              }, (() => {
                LH()
              }))
            } else LH()
          }
          return null
        }(0, qB.S)(vH.url()) && (0, SA.reportUnstreamedCoreLoad)();
        const KH = (0, cB.D)();
        let cH, eH = lH;
        mH("core");
        try {
          eH = {
            ...lH,
            wasm: KH.wX()
          };
          const {
            RW: HH
          } = vH.bindings, BH = HH.XrH();
          if (BH !== UL.y) return fH("core_other"), wE({
            site: RL.e,
            error: `core ABI ${BH}, page ABI ${UL.y}`,
            header: null
          }, eH), null;
          const [LH, AH] = (0, UL.qe)();
          cH = new HH(LH, AH)
        } catch (rH) {
          return fH(`core_${oH(rH)}`), wE({
            site: RL.e,
            error: rH,
            header: null
          }, eH), null
        }
        fH("ok"), Zh = eH, dh = vH.bindings;
        const qH = new RL.h(cH, cB.u, {
          onCrash: HH => {
            var BH;
            null === (BH = fz) || void 0 === BH || BH.crashed(HH),
              function(HH, BH, LH, AH) {
                if ("webgpu" !== BH || (0, ir.e)()) return !1;
                const rH = function(HH) {
                  if (HH.site === RL.g && (0, gL.n)(HH.error)) return "frames_refused";
                  return HH.site === Yh && (0, gL.p)(HH.error) ? "start_failed" : null
                }(HH);
                if (null === rH) return !1;
                if (null !== (0, gL.X)(rH, AH, (0, NL.c)(HH.error))) return (0, SA.countRenderLost)(rH, HH.error, vz), !1;
                return AL.D.reloaded(null, !1), (0, SA.reportRenderReload)("webgpu", "start_failed" === rH ? 0 : 1, LH, {
                  cause: rH,
                  error: HH.error,
                  context: vz,
                  session: iE(null)
                }), kE(), !0
              }(HH, uH, eH, QH) || wE(HH, eH)
          },
          onNetEvent: VE,
          onReconnectGrace: JC,
          onJoinPreloadEnded: sC,
          onCoreErrors: (HH, BH) => {
            var LH, AH;
            HH.some((HH => {
              let {
                code: BH
              } = HH;
              return BH === UL.F.RenderDeviceLost
            })) && ((0, ir.w)(), wz.deviceLost(), "webgpu" === uH && ((0, NL.d)(Pz), AL.D.lost())), null === (LH = fz) || void 0 === LH || LH.coreErrors(HH);
            const rH = () => {
              (0, SA.reportCoreErrors)(HH, BH, eH, ((HH, BH) => {
                var LH;
                return HH === UL.F.EnvUnknownSky ? (0, SA.unknownSkyWords)(wB.e.get("skyBox")) : HH === UL.F.RenderDeviceLost ? (0, SA.deviceLossWords)(BH, vz.boundAtMs) : null === (LH = Pz) || void 0 === LH ? void 0 : LH.GrH(HH, BH)
              }))
            };
            HH.some((HH => {
              let {
                code: BH
              } = HH;
              return BH === UL.F.EnvUnknownSky
            })) ? queueMicrotask(rH) : rH(), null === (AH = Pt) || void 0 === AH || AH.coreErrors(HH)
          },
          onRenderReload: (HH, BH, LH) => {
            ! function(HH, BH, LH, AH, rH, SH) {
              var hH;
              if ((0, ir.e)()) return;
              const tH = BH === UL.Vc.WEBGPU,
                zH = AH === UL.Vc.PIPELINE_FAILED ? "pipeline_failed" : "lost",
                CH = AH === UL.Vc.RESTORE_LOST,
                EH = tH && (0, AL.q)(vz.adapter, LH, "lost" === zH, CH),
                GH = (0, NL.i)(Pz);
              null === (hH = fz) || void 0 === hH || hH.reload(tH, LH, zH, null === GH || void 0 === GH ? void 0 : GH.message);
              const YH = tH ? (0, gL.X)(zH, rH, GH) : null;
              if (null !== YH) {
                (0, SA.countRenderLost)(zH, GH, vz);
                const BH = void 0 === GH ? "" : ` (${GH.message})`;
                return void HH.crash(SA.RENDER_RELOAD_SITE, new Error(`${(0,SA.renderReloadMessage)("webgpu",zH,LH)} and ${YH}${BH}`))
              }
              const uH = tH ? "webgpu" : "webgl1" === SH ? "webgl1" : "webgl";
              "lost" === zH && (0, ir.w)();
              if (!tH) {
                if (Zz.gaveUp(), !(0, nB.v)()) {
                  (0, SA.countRenderLost)(zH, GH, vz);
                  const BH = void 0 === GH ? "" : ` (${GH.message})`;
                  return void HH.crash(SA.RENDER_RELOAD_SITE, new SA.GraphicsLostError(`${(0,SA.renderReloadMessage)(uH,zH,LH)} and ${nB.f}${BH}`))
                }
                console.warn(`${Xh} the GL render device's recovery gave up: the tab reloads once more onto the wasm client`)
              }(0, SA.reportRenderReload)(uH, LH, Zh, {
                from: "game",
                cause: zH,
                restoreLost: CH,
                adapterRemembered: EH,
                error: GH,
                context: vz,
                session: iE(HH.sunShadowsHeld())
              }), (0, ir.q)();
              const QH = (0, XH.e)();
              let WH = !1;
              const MH = () => {
                WH || (WH = !0, tH && "lost" !== zH ? kE() : dz.reload(kE, tH))
              };
              let xH = null;
              const vH = (0, XH.o)((() => {
                null !== xH && clearTimeout(xH), QH ? setTimeout(MH, bE) : MH()
              }));
              !WH && QH && (xH = setTimeout((() => {
                vH(), MH()
              }), OE))
            }(qH, HH, BH, LH, QH, uH)
          },
          onEnvEvent: HH => {
            var BH;
            HH.kind === UL.X.SkyImages ? null === (BH = Qt) || void 0 === BH || BH.onEvent(HH.payload) : HH.kind === UL.X.EnvLighting && (Wt = 1 === HH.payload[0])
          },
          onImages: HH => {
            var BH;
            null === (BH = Mt) || void 0 === BH || BH.onEvent(HH)
          },
          onModelRequest: HH => {
            var BH;
            null === (BH = Gt) || void 0 === BH || BH.request(HH)
          },
          onModelTaken: (HH, BH) => {
            var LH;
            null === (LH = Gt) || void 0 === LH || LH.taken(HH, BH)
          },
          onTerrainTexturesWanted: () => {
            queueMicrotask((() => {
              ! function(HH, BH) {
                const LH = Dh;
                if (null === LH || HH.isStopped) return;
                LH.restore((HH => {
                  (0, SA.reportTerrainTextureFailure)(HH, BH)
                })).then((BH => {
                  !1 !== BH || HH.isStopped ? !0 === BH && console.info(`${Xh} terrain textures handed over again after the renderer lost them`) : console.warn(`${Xh} the terrain textures couldn't be handed over again: the terrain draws blank`)
                }))
              }(qH, eH)
            }))
          },
          onKeepAlive: HH => {
            const BH = null === Dt ? void 0 : wt.get(Dt);
            void 0 !== BH && Mr(BH, HH)
          },
          onSends: () => {
            ! function(HH) {
              const BH = performance.now();
              if (HH.forEachNetOut(jE), qE(HH), (0, RL.M)(HH, {
                  worldgen: Lt,
                  mesh: rt
                }), null !== Iz) try {
                Iz.sendsWent(HH, BH, performance.now())
              } catch (rH) {
                UE(rH)
              }
            }(qH)
          }
        });
        if (jh = qH, null === (hH = EL.e.wasmNetReady) || void 0 === hH || hH.call(EL.e, (() => qH.isStopped ? 0 : qH.netKeptFrames)), null !== HH) {
          qH.setAntiCheatProbes(Ah(cB.u, HH.checks)), HH.watchHeld(Sh.CoreFrame, (() => qH.frame)), HH.watchHeld(Sh.GlueFrame, (() => cH.frame));
          const BH = function(HH, BH) {
            const LH = new rh(BH);
            let AH = !1;
            LH.IX(HH.IX());
            const rH = (0, Qr.Z)((() => {
              LH.IX(HH.IX())
            }), hh);
            let SH = 6 * (0, Qr.N)() | 0;
            const hH = () => {
              ++SH < 6 || (SH = 0, HH.checks.stackCheck() && (AH = !0))
            };
            (0, qS.f)(hH);
            const tH = () => {
              const BH = HH.checkPadCall();
              0 !== BH && LH.setFlags(BH)
            };
            return (0, eS.g)(tH), {
              onSend: hH,
              beforeFrame: () => {
                AH && LH.originStackHit() && (AH = !1)
              },
              onEvent: BH => {
                const AH = HH.checkEvent(BH);
                LH.value(UL.h.ProbeUsedProp, HH.usedProp()), 0 !== AH && LH.setFlags(AH)
              },
              stop: () => {
                (0, Qr.$)(rH), (0, qS.c)(hH), (0, eS.d)(tH)
              }
            }
          }(HH, ((HH, BH, LH) => {
            let AH = !1;
            return BX(qH, (() => {
              AH = qH.rings.input.writeRecord(UL.tb.AntiCheat, HH, BH, LH, 0)
            })), AH
          }));
          qH.isStopped ? BH.stop() : Et = BH
        }
        lh = (HH, BH, LH) => qH.rings.cmd.writeCmd(HH, BH, LH), Kh = HH => qH.rings.cmd.growForCmd(HH), qt = !1, CE(), (0, DH.x)(qH, {
          core: cH,
          memory: cB.u,
          staleOr: (HH, BH, LH, AH) => zX({
            site: HH,
            error: BH
          }, LH, AH),
          reportReplayFault: (HH, BH) => {
            (0, SA.reportReplayFault)(HH, BH, Zh)
          },
          reportCameraFault: HH => {
            (0, SA.reportCameraDirectorFault)(HH, Zh)
          },
          audio: wh,
          options: wB.e,
          onNetEvent: VE,
          sessionInfo: HH => {
            var BH;
            return (null === (BH = it) || void 0 === BH ? void 0 : BH.conn) === HH ? it.info : null
          },
          onEventOverflow: PC,
          replayShaderPack: HH => {
            var BH;
            null === (BH = Pt) || void 0 === BH || BH.replay(HH)
          },
          hasPackModel: HH => {
            var BH, LH;
            return null !== (null !== (BH = null === (LH = EE()) || void 0 === LH ? void 0 : LH.modelUrl(HH)) && void 0 !== BH ? BH : null)
          },
          beforeWrite: () => (!lt && qH.rings.net.cursor > 0 && IE(qH, !1, "all"), !qH.isStopped),
          beforeOp: () => (!lt && qH.netWrittenSinceFrame > 0 && IE(qH, !1, "budget"), !qH.isStopped)
        }), (0, FH.J)({
          lockPointer: () => {
            if (!fA(xH)) return !1;
            try {
              Promise.resolve(xH.requestPointerLock()).catch((() => {}))
            } catch {
              return !1
            }
            return !0
          },
          unlockPointer: () => {
            (0, UB.e)()
          },
          leaveGame: () => {
            vC()
          },
          canvas: () => xH
        }), Xt = (0, FH.v)((() => {
          var HH;
          const BH = (0, DH.i)();
          null === (HH = (0, DH.r)()) || void 0 === HH || HH.followCursorAim(!0 === (null === BH || void 0 === BH ? void 0 : BH.isSessionLive) ? BH : null)
        })), jt && qH.setUiPrefs(jt);
        nt && qH.setEnvPrefs(nt);
        Ft && qH.setLookPrefs(Ft);
        const gH = rS ? SS(rS.preventMovement) : null;
        gH && fC(gH);
        const NH = (0, BA.g)(),
          RH = (0, BA.d)(qH, NH);
        zt = NH.basis, (0, WA.i)((0, EA.d)(null === RH ? null : (0, HA.n)(RH), (0, EA.k)())), tt = RH;
        const jH = (0, gB.c)();
        let nH = 1 / 0,
          wH = !0,
          ZH = NH.shedFootprintBytes;
        const dH = new mr.b(jH, (() => cH.HM()), (HH => {
          qH.crash(RL.n, HH)
        }));
        St = dH, ht = dH, null !== RH && dH.setCeiling(Math.min((0, mr.o)(RH), nH, (0, BA.k)()));
        if (wH) {
          dH.setShed((HH => {
            const BH = qH.shedMemory("joinReserve" !== HH && "gcPressure" !== HH);
            return null !== BH && (null === tt || BH < tt) && (tt = BH, (0, WA.i)((0, EA.d)((0, HA.n)(BH), (0, EA.k)()))), BH
          }), ((HH, BH, LH) => {
            1 === BH ? (0, SA.reportMemoryShed)(HH, LH, Zh) : console.warn(`${Xh} wasm memory: shed again (${HH}): shed ${BH}`, LH.wasmMemoryShed)
          }), (() => qH.addDistanceInUse()));
          const HH = (0, gL.M)(KH);
          dH.setFootprint(new MS(ZH, {
            storedChunks: () => cH.YrH(),
            gpuBytes: () => {
              var BH;
              return null !== (BH = null === HH || void 0 === HH ? void 0 : HH.urH()) && void 0 !== BH ? BH : 0
            },
            jsHeapBytes: WS
          })), (0, QA.g)("wasm", dH, (() => {
            wh.freeSounds()
          }))
        }
        window.addEventListener("pagehide", (() => {
          St === dH && (dH.refreshStats(), HX(dH))
        })), window.addEventListener("pagehide", mE), window.addEventListener("pagehide", oE), !1;
        const [aH, sH] = (0, zA.g)();
        Kz = (0, EA.o)((HH => {
          const BH = (0, EA.u)(HH, (0, EA.k)());
          return qH.setChunkAddDistance(BH.horizontal, BH.vertical)
        }), {
          horizontal: aH,
          vertical: sH
        }), qH.setAmbientOcclusion(!0 !== zL.e.getItem("disableAmbientOcclusion")), qH.setPoseLod(!0 !== zL.e.getItem(KB.W)), qH.setDebugLog(UL.N.Look, !0), qH.setDebugLog(UL.N.CameraSet, !0), (0, PS.startLookDebug)("wasm", {
          look: () => qH.takeDebugLog(UL.N.Look),
          cameraSets: () => qH.takeDebugLog(UL.N.CameraSet)
        }), (0, xS.o)("remesh") && (qH.setDebugLog(UL.N.Remesh, !0), JH = () => qH.takeDebugLog(UL.N.Remesh), bS = new OS((0, TS.n)(), JH));
        var JH;
        const iH = function(HH, BH, LH, AH) {
          const rH = new sA,
            SH = HH => zL.e.getItem(HH);
          rH.sync(SH, BH), (0, rL.S)();
          const hH = (0, zH.m)("customBindingsChanged", (() => {
            rH.sync(SH, BH)
          }));
          (0, vA.s)(BH);
          const tH = new Set,
            CH = (0, FH.v)((() => {
              var HH;
              tH.size > 0 && yA() && !0 === (null === (HH = (0, DH.i)()) || void 0 === HH ? void 0 : HH.localPlayerAlive()) && zH.k.AX("usedKeyboard")
            })),
            EH = RA.e.heldSizer((() => (0, XL.l)(HH))),
            XH = NA(HH, BH, {
              prevents: HH => rH.prevents(HH),
              keyPressed: HH => {
                rH.moves(HH) && (tH.add(HH), yA() && zH.k.AX("usedKeyboard"))
              },
              keyReleased: HH => {
                tH.delete(HH)
              },
              keysReleased: () => {
                tH.clear()
              },
              resized: () => {
                iA.h.measure(HH.getBoundingClientRect()), (0, jA.m)()
              },
              sizeCanvas: EH,
              watchRenderScale: BH => {
                const LH = (0, XL.o)(HH, BH),
                  AH = RA.e.onRelease(BH);
                return () => {
                  LH(), AH()
                }
              },
              touchStarting: () => {
                iA.h.measure(HH.getBoundingClientRect())
              },
              viewShown: LH,
              touchUiShown: () => XB.c.get("isTouchScreen"),
              ctrlCombosAreGames: yA,
              inspect: (HH, BH, LH) => {
                rH.checks(BH, LH) && AH(HH)
              },
              canLock: () => fA(HH)
            }),
            GH = (0, ZL.e)(BH);
          return () => {
            hH(), CH(), (0, vA.s)(null), GH(), XH()
          }
        }(xH, ((HH, BH, LH, AH, rH) => {
          BX(qH, (() => {
            qH.rings.input.writeRecord(HH, BH, LH, AH, rH)
          })), !Kt && (0, rr.g)(HH, rH) && (0, rr.e)((() => {
            jh !== qH || pz || qH.isStopped || !NE() || IE(qH, !1, "budget", !1)
          }))
        }), (() => sz), (HH => {
          var BH;
          null === (BH = Et) || void 0 === BH || BH.onEvent(HH)
        }));
        if (qH.isStopped) return iH(), null;
        Bt = iH;
        const pH = () => !qH.isStopped && !iz;
        if (qH.isStopped) return null;
        (0, cB.Y)((() => {
          "call" === (0, cB.q)() && qH.crash(RL.u, (0, cB.p)())
        }));
        const yH = (0, RL.O)(qH.rings.worker, (() => {
          IE(qH, !1, document.hidden ? "all" : "budget")
        }));
        Lt = function(HH, BH, LH) {
          return LX().then((HH => {
            let {
              prefetchWorldgenWorker: BH
            } = HH;
            BH()
          }), (() => {})), new lS({
            module: (0, cB.x)(),
            decodeSettings: HH => {
              const BH = (0, DH.r)();
              if (null === BH) throw new Error("no game code to decode the world-gen seed with");
              return BH.decodeMapSettings(HH)
            },
            loadWorker: AX,
            onMapWithoutWorldgen: () => {
              rX((HH => {
                let {
                  stopWorldgenWorkerPrefetch: BH
                } = HH;
                BH()
              }))
            },
            onLoadFailed: HH => {
              (0, SA.reportWorldgenLoadFailure)(HH, Zh)
            },
            onWorkerLost: (HH, BH) => {
              !async function(HH, BH, LH) {
                const AH = HH === oS || HH.startsWith(IS);
                if (!AH || BH) return void LH.XX(AH);
                const rH = () => {
                  LH.XX(!0)
                };
                let SH;
                try {
                  SH = await LH.scriptUrl()
                } catch {
                  return void rH()
                }
                await LH.staleOr({
                  site: RL.E,
                  error: new Error(`a world-gen worker's load failed (${HH}): ${SH}`),
                  urls: [SH]
                }, rH)
              }(HH, BH, {
                scriptUrl: async () => {
                  const {
                    worldgenWorkerScriptUrl: HH
                  } = await LX();
                  return HH()
                },
                staleOr: (HH, BH) => zX(HH, BH, {
                  stillWanted: LH
                }),
                XX: BH => {
                  (0, SA.reportWorldgenWorkerLost)(HH, BH, Zh, {
                    build: (0, Yr.h)(),
                    ageMs: (0, XA.x)()
                  })
                }
              })
            },
            onStartTimeout: HH => {
              (0, SA.reportWorkerStartTimeout)(RL.E, HH, Zh)
            },
            onGaveUp: HH => {
              (0, SA.reportWorldgenGaveUp)(HH, Zh)
            },
            onMemoryStats: HH => {
              var BH;
              null === (BH = St) || void 0 === BH || BH.noteWorldgen(HH)
            },
            onMemoryGone: () => {
              var HH;
              null === (HH = St) || void 0 === HH || HH.worldgenGone()
            },
            write: (LH, AH, rH, SH, hH) => {
              BX(HH, (() => {
                HH.rings.worker.writeWorkerRecord(LH, AH, rH, 0, SH, hH) || HH.crash(RL.E, `a world-gen record of kind ${AH} did not fit the worker-in ring`)
              })), BH()
            }
          })
        }(qH, yH, pH), rt = function(HH, BH) {
          return new br({
            module: (0, cB.x)(),
            loadWorkers: async () => {
              const [{
                createMeshWorker: HH
              }, BH] = await Promise.all([LH.e(48).then((() => LH(54602))), Promise.resolve().then((() => LH(81))).then((HH => {
                let {
                  isMobile: BH
                } = HH;
                return BH()
              }), (() => !1))]);
              return {
                create: HH,
                count: (0, yB.f)(BH),
                maxKeptLightStates: BH || (0, pB.k)() ? 1 : void 0
              }
            },
            write: (LH, AH, rH, SH, hH, tH) => {
              (0, jA.k)(), BX(HH, (() => {
                HH.rings.worker.writeWorkerRecord(LH, AH, rH, SH, hH, tH) || HH.crash(RL.p, `a meshing record of kind ${AH} did not fit the worker-in ring`)
              })), BH()
            },
            onWorkerLost: HH => {
              (0, SA.reportWorkerLost)(RL.p, HH, Zh)
            },
            onLightFault: (HH, BH) => {
              (0, SA.reportLightFault)(HH, BH, Zh)
            },
            onStartTimeout: HH => {
              (0, SA.reportWorkerStartTimeout)(RL.p, HH, Zh)
            },
            onMemoryStats: (HH, BH) => {
              var LH;
              null === (LH = St) || void 0 === LH || LH.noteMeshWorker(HH, BH)
            },
            onMemoryGone: HH => {
              var BH;
              null === (BH = St) || void 0 === BH || BH.meshWorkerGone(HH)
            },
            fail: (BH, LH) => {
              const AH = () => {
                HH.crash(RL.p, void 0 === LH ? BH : new Error(BH, {
                  cause: LH
                }))
              };
              void 0 !== LH ? zX({
                site: RL.p,
                error: LH
              }, AH) : AH()
            }
          })
        }(qH, yH), UC();
        const HB = (0, Fr.j)(sB.clientSideServerUrls.staticUrl, {
            onTableFailed: HH => {
              zX({
                site: SA.MODEL_FEED_SITE,
                error: HH
              }, (() => {}), {
                stillWanted: pH
              })
            },
            packUrl: HH => {
              var BH, LH;
              return null !== (BH = null === (LH = EE()) || void 0 === LH ? void 0 : LH.modelUrl(HH)) && void 0 !== BH ? BH : null
            }
          }),
          BB = function(HH, BH, LH) {
            const AH = LH => {
              var AH, rH;
              return null !== (AH = null === (rH = BH()) || void 0 === rH ? void 0 : rH.drawnUrl(LH)) && void 0 !== AH ? AH : HH.url(LH)
            };
            return (0, jr.l)((0, Ir.m)(AH), LH)
          }(HB, (() => Gt), EE),
          LB = new Ir.f(BB, (HH => {
            console.warn(`${Xh} image ${HH.key.kind}:${HH.key.index}:${HH.key.word} failed`, HH.error)
          }));
        Mt = LB, xt = new gr(qH, BB, ((HH, BH) => {
          void 0 === BH ? console.warn(`${Xh} ${HH}`) : GE(HH, BH)
        }));
        const AB = new Rr.k(HB, function(HH, BH) {
          let AH = !1,
            rH = null,
            SH = null;
          const hH = {
              onUnavailable: (LH, AH) => {
                SH ??= zX({
                  site: SA.MODEL_POOL_SITE,
                  error: LH,
                  urls: AH
                }, (() => {
                  (0, SA.reportModelPoolFailure)(LH, HH)
                }), {
                  stillWanted: BH
                })
              },
              onWorkerLost: BH => {
                (0, SA.reportWorkerLost)(SA.MODEL_POOL_SITE, BH, HH)
              },
              onModuleRetry: (BH, LH) => {
                (0, SA.reportModelsModuleRetry)(BH, LH, HH)
              }
            },
            tH = LH.e(50).then((() => LH(54607))).then((HH => {
              let {
                pageModelPool: BH
              } = HH;
              if (AH) return null;
              const LH = BH(hH);
              return rH = LH.unlisten, Yt = LH.pool, UC(), LH.pool
            }), (HH => (AH || hH.onUnavailable(HH, void 0), null)));
          return ut = () => {
            var HH;
            AH = !0, null === (HH = rH) || void 0 === HH || HH(), Yt = null
          }, (HH, BH) => tH.then((LH => {
            var AH;
            return null !== (AH = null === LH || void 0 === LH ? void 0 : LH.build(HH, BH)) && void 0 !== AH ? AH : (0, Dr.p)(HH, "the model workers did not load")
          })).then((HH => null !== SH && (0, Dr.j)(HH) ? SH.then((() => HH)) : HH))
        }(eH, pH), (HH => {
          HH.startup ? (DE(), zX({
            site: SA.MODEL_FEED_SITE,
            error: HH.error,
            urls: "" === HH.url ? void 0 : [HH.url]
          }, (() => {
            (0, SA.reportModelFailure)(HH, eH)
          }))) : (0, SA.reportModelFailure)(HH, eH)
        }), {
          onWritten: (HH, BH) => {
            LB.glbWritten(HH, BH)
          },
          onTaken: (HH, BH) => {
            LB.glbTaken(HH, BH)
          },
          onPackFileFailed: (HH, BH) => {
            console.warn(`${Xh} the texture pack's model file ${HH} failed: the shipped one loads`, BH)
          }
        });
        Gt = AB;
        const rB = new cr.f(qH);
        Dh = rB, rB.swap((HH => {
          const BH = () => {
            (0, SA.reportTerrainTextureFailure)(HH, eH)
          };
          if (cz) return void BH();
          const LH = () => !cz,
            AH = null === HH.url ? void 0 : [HH.url];
          zX({
            site: RL.B,
            error: HH.error,
            urls: AH
          }, BH, {
            stillWanted: LH
          })
        })).then((HH => {
          null !== HH && (HH || qH.isStopped || console.warn(`${Xh} the core refused the terrain textures: terrain draws untextured`), Ot(qH))
        }));
        const SB = new PL(qH, ((HH, BH) => {
          console.warn(`${Xh} ${HH}`, ...void 0 === BH ? [] : [BH])
        }));
        SB.feed(), null !== uH && function(HH, BH, AH, rH, SH, hH) {
          let tH = null,
            CH = null,
            EH = !1;
          const XH = {
            textures: null,
            stop: () => {
              var HH, BH;
              EH = !0, null === (HH = CH) || void 0 === HH || HH(), null === (BH = tH) || void 0 === BH || BH(), nr.d.setSettled(null), null !== dh && tC.clear(dh)
            }
          };
          Fh = XH, CH = YE().follow((CH => {
            null !== CH && Promise.all([LH.e(225), LH.e(53)]).then((() => LH(54568))).then((LH => {
              let {
                PackTextures: GH
              } = LH;
              if (EH || HH.isStopped) return;
              const YH = new GH({
                feed: CH,
                terrain: BH,
                backend: AH,
                stopped: () => HH.isStopped,
                landed: () => {
                  Ot(HH)
                },
                packSwapped: () => {
                  (0, jr.j)(rH), hH.feed((() => async function(HH) {
                    const BH = null === HH ? null : await HH.averageColours;
                    return null === BH ? TL() : vL(BH)
                  }(YH.assets))), (0, Nr.l)(YH.files()), SH.refresh().then((HH => {
                    null !== HH && console.info(`${Xh} texture pack models: ${HH.resent} of ${HH.delivered} files written again, ${HH.refetched} refetched`)
                  }))
                },
                settled: (HH, BH, LH) => {
                  var AH;
                  (nr.d.setSettled({
                    state: HH,
                    files: BH
                  }), function(HH, BH, LH) {
                    const AH = null === HH.gameSource && (0, hA.c)(HH.pack);
                    if (null === BH) return;
                    const rH = (0, rA.h)(BH.error),
                      SH = AH ? "settings" : BH.source;
                    zH.k.AX(rA.e, {
                      failure: rH,
                      source: SH,
                      pack: tA(HH)
                    }), (0, SA.reportTexturePackKeptOut)(SH, rH, BH.error, LH)
                  }(HH, LH, Zh), null === LH) && function(HH) {
                    const BH = dh;
                    null !== BH && tC.apply(BH, HH).then((BH => {
                      BH && HH && console.info(`${Xh} the texture pack's animations are in (${Object.keys(HH).length} files)`)
                    }))
                  }(null === (AH = HH.pack) || void 0 === AH ? void 0 : AH.animations)
                },
                settling: () => {
                  nr.d.setSettled(null)
                },
                warn: GE,
                maxTextureSize: () => Promise.resolve((0, gL.ab)(document.createElement("canvas")))
              });
              XH.textures = YH, tH = YH.start()
            }), (HH => {
              console.warn(`${Xh} the texture pack's terrain didn't load: the built atlas stays`, HH)
            }))
          }))
        }(qH, rB, uH, LB, AB, SB);
        const hB = () => {
            qH.setTextureLayers("")
          },
          tB = HH => {
            (aB ??= LH.e(65).then((() => LH(54612))).then((HH => {
              let {
                TEXTURE_NAMES: BH
              } = HH;
              return BH
            }), (HH => {
              throw aB = null, HH
            })), aB).then((HH => {
              qH.setTextureLayers(HH) || qH.isStopped || (console.warn(`${Xh} the core refused the texture names: textured Boxes draw textureNotFound`), hB())
            }), (BH => {
              if (qH.isStopped) return;
              const [LH, ...AH] = HH;
              void 0 === LH ? zX({
                site: SA.TEXTURE_NAMES_SITE,
                error: BH
              }, (() => {
                console.warn(`${Xh} the texture names didn't load, so textured Boxes draw textureNotFound`, BH), hB()
              }), {
                stillWanted: pH
              }) : setTimeout((() => {
                tB(AH)
              }), LH)
            }))
          };
        if (tB(Ih), null !== uH && !await async function(HH, BH, LH, AH, SH, hH) {
            var tH;
            const zH = (0, gL.M)(LH);
            if (null === zH) return HH.crash(Yh, new Error(`this ${AH} build has no openRenderer`)), !1;
            let CH;
            Pz = zH;
            try {
              var EH, XH, GH, YH;
              const rH = null !== (EH = null === (XH = Nh) || void 0 === XH ? void 0 : XH.pagePreviews()) && void 0 !== EH ? EH : null,
                tH = null !== (GH = null === (YH = Nh) || void 0 === YH ? void 0 : YH.previewModule(LH)) && void 0 !== GH ? GH : null;
              if (null === rH || null === tH) {
                null === rH || void 0 === rH || rH.endSession(!1), CH = (0, XL.d)().sampleCount, await (0, gL.f)(BH, zH, hH, zE, CH, await SH);
                const HH = (0, gL.j)(LH);
                null === HH && console.warn(`${Xh} this ${AH} build has no image registry: sky and model images won't show`), (0, Kr.d)(HH)
              } else {
                (0, ir.e)() && await (0, EB.j)();
                const LH = (0, ir.K)();
                if (null !== LH) {
                  const BH = (0, NL.i)(zH),
                    AH = `${LH.why}${void 0===BH?"":` (${BH.message})`}`;
                  return HH.crash(SA.RENDER_RELOAD_SITE, LH.webgpu ? new Error(AH) : new SA.GraphicsLostError(AH)), !1
                }
                CH = await rH.bindSession(tH, BH, (async HH => (0, gL.q)(zH, Yh, hH, HH, zE, await SH)))
              }
            } catch (rH) {
              return HH.crash(Yh, rH), !1
            }(function(HH, BH) {
              const LH = HH,
                {
                  requestCapture: AH,
                  takeCapture: rH
                } = LH;
              if ("function" !== typeof AH || "function" !== typeof rH) return;
              const SH = {
                request() {
                  AH.call(LH, BH)
                },
                take() {
                  var HH;
                  return null !== (HH = rH.call(LH)) && void 0 !== HH ? HH : null
                }
              };
              window[zS] = SH
            })(BH, CH), mz = CH, xz = !0;
            const uH = performance.now();
            return vz.boundAtMs = null !== (tH = (0, ir.N)()) && void 0 !== tH ? tH : uH, vz.indirectHangs = (0, ir.z)(), vz.restoresSkipped = (0, ir.Q)(), console.info(`${Xh} ${AH} renderer bound at ${Math.round(uH)} ms`), !HH.isStopped
          }(qH, cH, KH, uH, WH, xH)) return null;
        if (null !== uH) {
          var zB, GB, YB;
          (0, NB.C)(uH);
          const HH = () => !qH.isStopped && gE();
          LH.e(214).then((() => LH(34856))).then((BH => {
            let {
              devTools: LH
            } = BH;
            qH.isStopped || LH.setHost(function(HH) {
              return {
                tools: Jr,
                async downloadScene(BH, LH) {
                  let {
                    width: AH,
                    height: rH,
                    colouring: SH
                  } = LH;
                  "screenshot" === BH && null === SH ? await (0, dr.f)(HH, AH, rH) : console.warn("The Rust client's developer tools take uncoloured screenshots only")
                },
                setAmbientLightIntensity: () => (console.warn("The Rust client's renderer has no ambient light setting"), Promise.resolve()),
                capturePhoto: (BH, LH, AH) => (0, dr.c)(HH, BH, LH, AH)
              }
            }(function(HH, BH) {
              return {
                canvas: HH,
                maxTextureSize: ar,
                VX: BH,
                resize: (HH, BH, LH) => {
                  (0, vA.A)(UL.tb.Resize, 0, HH / LH, BH / LH, (0, vA.m)(LH))
                },
                restoreSize: () => {
                  const BH = (0, XL.l)(HH);
                  null !== BH && (0, vA.A)(UL.tb.Resize, 0, BH.cssWidth, BH.cssHeight, (0, vA.m)(BH.renderScale))
                },
                onFrameDrawn: HH => (sr.add(HH), () => {
                  sr.delete(HH)
                })
              }
            }(xH, HH)))
          }), (HH => {
            console.warn(`${Xh} the developer tools didn't load: no captures this session`, HH)
          }));
          const BH = "webgpu" === uH && null !== (zB = null === YH || void 0 === YH || null === (GB = YH.adapter) || void 0 === GB ? void 0 : GB.vendor) && void 0 !== zB ? zB : null;
          oz = {
            backend: uH,
            canvas: xH,
            fallbackReason: null !== (YB = null === YH || void 0 === YH ? void 0 : YH.reason) && void 0 !== YB ? YB : null,
            adapterVendor: BH
          }, vE();
          try {
            (0, jA.v)(uH, xH, BH)
          } catch (rH) {
            (0, jA.x)(), console.error(`${Xh} the quality steps didn't start`, rH)
          }
        }
        const {
          storagePullBreaks: uB,
          splitPassBreaks: QB
        } = await WH;
        QB && console.warn(`${Xh} split_pass_breaks on: Windows Adreno 7xx (N-103) or ?sceneDepth=off`);
        const WB = (0, CB.f)(YH, (0, AL.l)());
        if ((0, xS.o)("webgpuloss")) {
          var MB, xB;
          const HH = {
            backend: uH,
            reason: null !== (MB = null === YH || void 0 === YH ? void 0 : YH.reason) && void 0 !== MB ? MB : null,
            source: null !== (xB = null === YH || void 0 === YH ? void 0 : YH.source) && void 0 !== xB ? xB : null,
            storagePullBreaks: uB,
            noWebGpu: WB.messageKey
          };
          (0, vS.b)((BH => {
            BH.noteWasmPick(HH)
          }))
        }
        const vB = "webgpu" === uH;
        if (Pt = (0, CB.g)(vB ? qH : null, vB && null !== (tH = null === (CH = Nh) || void 0 === CH ? void 0 : CH.pagePreviews().Cu) && void 0 !== tH ? tH : null, WB, GE), pz) return null;
        if (dH.reserveAtJoin((0, mr.n)(null !== RH && void 0 !== RH ? RH : HA.f)), qH.isStopped) return null;
        const PB = HH => {
          if (ot = performance.now(), It = !1, null !== Iz) try {
            Iz.animationFrame(HH)
          } catch (rH) {
            UE(rH)
          }
          if (function(HH, BH) {
              return BH && !pz && !Kt && NE() && gE() && HH.framePaces(performance.now())
            }(qH, sz)) {
            if (qH.writePendingInput(), (0, FH.d)(HH, fE), PE(!1, HH), null !== Iz) try {
              Iz.framePaced()
            } catch (rH) {
              UE(rH)
            }
            requestAnimationFrame(PB)
          } else IE(qH, sz, "budget") && ((0, SL.e)(qH.lastFrameKind) && gE() && (0, FH.d)(HH, fE), PE(sz && Dz, HH), wz.frame(qH.lastFrameKind, sz && gE(), HH), Zz.frame(qH.lastFrameKind, sz && gE()), (0, SL.b)(qH.lastFrameKind) && AL.D.drew(), aE(qH), dH.afterFrame(), requestAnimationFrame(PB))
        };
        requestAnimationFrame(PB);
        return function(HH) {
          if (HH.has("inputLog") && (0, JA.k)((HH => {
              let {
                action: BH,
                down: LH,
                press: AH
              } = HH;
              console.info(`${pA} input ${BH} ${LH?"down":"up"} press ${AH} at ${performance.now().toFixed(1)}`)
            })), HH.has("inputDump")) {
            const HH = [];
            Hr = HH, Object.assign(window, {
              bloxdInputDump: () => HH.join("\n")
            })
          }
        }(new URLSearchParams(window.location.search)), Ct = function(HH) {
          let BH = null;
          const LH = () => {
              null !== BH && (clearInterval(BH), BH = null)
            },
            AH = () => {
              document.hidden ? BH ??= setInterval((() => {
                hX(HH) || LH()
              }), oh) : LH()
            };
          return document.addEventListener("visibilitychange", AH), AH(), () => {
            LH(), document.removeEventListener("visibilitychange", AH)
          }
        }(qH), qH
      }(BH).then((HH => {
        var BH;
        (AH(Zh), ih(null !== HH), null !== HH && (TH = performance.now()), sh(HH), null === HH) ? null === (BH = Nh) || void 0 === BH || BH.pagePreviews().endSession(null === (0, cB.q)()): Vt("booted")
      }), (HH => {
        AH(Zh), ih(!1), sh(null), wE({
          site: uh,
          error: HH,
          header: null
        }, Zh)
      }))
    }

    function hC() {
      const HH = dh;
      null !== HH && HC().then((BH => {
        let {
          pageBuiltInAnimationPack: LH
        } = BH;
        LH().provide(HH)
      }), (HH => {
        console.warn(`${Xh} the built-in animation pack's chunk did not load: lifeforms stay in their rest pose`, HH)
      }))
    }
    const tC = new class {
      constructor(HH) {
        this.deps = HH, this.latest = 0, this.LX = null
      }
      apply(HH, BH) {
        return this.load(HH, BH, 0)
      }
      async load(HH, BH, LH) {
        var AH;
        const rH = ++this.latest,
          SH = this.deps.compiler;
        if (void 0 === BH || null === BH || "object" !== typeof BH || 0 === Object.keys(BH).length || null === SH) return this.drop(HH), !1;
        if ((null === (AH = this.LX) || void 0 === AH ? void 0 : AH.module) === HH && (0, lL.ne)(this.LX.files, BH)) return !1;
        try {
          const [LH, AH] = await Promise.all([SH(), this.deps.builtIns()]);
          if (rH !== this.latest) return !1;
          const hH = await LH(BH, qL, {
            builtIns: AH
          });
          if (rH !== this.latest) return !1;
          const tH = this.call(HH, hH);
          if (void 0 === tH) throw new eL("the compiled animations didn't read against the built-in pack");
          return this.LX = {
              module: HH,
              files: BH
            },
            function(HH) {
              for (let BH = 0; BH + 2 < HH.length; BH += 3) {
                ("error" === HH[BH] ? console.error : console.warn)(`Animation for the texture pack: ${HH[BH+1]}: ${HH[BH+2]}`)
              }
            }(tH), !0
        } catch (tH) {
          var hH;
          if (rH !== this.latest) return !1;
          this.drop(HH), 0 === LH && this.deps.warn("the texture pack's animations didn't load: lifeforms play the built-in ones", tH);
          const AH = (null !== (hH = this.deps.retryAfterMs) && void 0 !== hH ? hH : cL)[LH];
          return void 0 === AH || tH instanceof eL || (0, KL.k)(HH) || setTimeout((() => {
            rH === this.latest && this.load(HH, BH, LH + 1)
          }), AH), !1
        }
      }
      call(HH, BH) {
        try {
          return HH.ErH(BH)
        } catch (LH) {
          throw (0, KL.o)(HH, LH), LH
        }
      }
      clear(HH) {
        this.latest++, this.drop(HH)
      }
      drop(HH) {
        const BH = this.LX;
        if (this.LX = null, (null === BH || void 0 === BH ? void 0 : BH.module) === HH && !(0, KL.k)(HH)) try {
          this.call(HH, null)
        } catch {}
      }
    }({
      compiler: mL.e,
      builtIns: async () => {
        const {
          pageBuiltInAnimationPack: HH
        } = await HC();
        return HH().whenSet()
      },
      warn: GE
    });
    async function zC(HH, BH) {
      let AH = !1;
      await CC({
        matchmake: async () => {
          const {
            guestJoinTarget: rH,
            guestJoinWithPack: SH
          } = await LH.e(125).then((() => LH(54549)));
          return AH ? rH(HH, BH, QE()) : (AH = !0, SH(HH, BH, (BH => WE(HH, BH)), QE))
        },
        onFailure: HH => {
          (0, SA.showJoinFailure)(HH, Zh)
        },
        rejoin: bC,
        invalidateTrafficCode: kC
      })
    }
    async function CC(HH) {
      let {
        matchmake: BH,
        onFailure: LH,
        rejoin: rH,
        invalidateTrafficCode: SH,
        pageReady: hH,
        signal: tH
      } = HH;
      const zH = () => !0 === (null === tH || void 0 === tH ? void 0 : tH.aborted);
      let CH;
      const EH = nr.d.rejoinHold();
      dt = null, (0, uA.h)();
      const XH = (0, XA.Y)("wasm", yE);
      let GH = !1,
        YH = performance.now();
      try {
        if (!await ph) return {
          kind: "stopped"
        };
        if (zH()) return {
          kind: "xB"
        };
        BC().catch((() => {}));
        let HH = await BH();
        var QH, mH;
        if (YH = performance.now(), !zH()) pE(null !== (QH = null === (mH = HH.target.session) || void 0 === mH ? void 0 : mH.gameNameWithVariation) && void 0 !== QH ? QH : null);
        const LH = () => performance.now() - HH.matchedAt <= HH.freshMs,
          AH = XC(HH.target).catch((() => {}));
        LH() && !zH() && (CH = new Ur(HH.target, {
          signal: tH
        }));
        const SH = performance.now();
        let EH = () => {};
        zH() || (EH = function(HH, BH) {
          lH(), HH || bH || null !== OH && "ok" !== OH || (bH = !0, (0, uH.v)("wasm_boot_wait", performance.now(), `${VH}:${BH()}:${(0,WH.p)()}`)), kH++;
          let LH = !1;
          return () => {
            LH || (LH = !0, kH--)
          }
        }(ah, eB.i), null === tH || void 0 === tH || tH.addEventListener("abort", EH, {
          once: !0
        }));
        const XH = await Jh;
        if (EH(), null === tH || void 0 === tH || tH.removeEventListener("abort", EH), null === XH) return {
          kind: "stopped"
        };
        var oH, IH;
        if (function(HH) {
            var BH, LH;
            if (MH.e.markGameEngineConstructed(), UH) return;
            UH = !0;
            const AH = Math.max(HH, null !== (BH = vH) && void 0 !== BH ? BH : HH);
            (0, xH.h)("ready", Math.max(0, (null !== (LH = PH) && void 0 !== LH ? LH : AH) - AH) / 1e3)
          }(SH), !zH())
          if (null !== PH && null !== TH ? (0, uH.v)("wasm_core_ready", TH) : console.warn("[bloxd-wasm-client] a join found the core before boot marked its steps"), HH.target.session && (0, mS.b)(HH.target.session.gameNameWithVariation)) null === (oH = Lt) || void 0 === oH || oH.prestart();
        if (await AH, !LH() && !zH()) null === (IH = CH) || void 0 === IH || IH.rematched(), HH = await BH(), YH = performance.now();
        if (zH()) return {
          kind: "xB"
        };
        const fH = await async function(HH) {
          var BH, LH, AH;
          let {
            signal: rH,
            rejoin: SH = null,
            early: hH,
            pageReady: tH
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null !== rH && void 0 !== rH && rH.aborted) throw new DOMException("the join was left", "AbortError");
          const zH = (CH = zz, EH = performance.now(), null !== CH && EH - CH < Xr);
          var CH, EH;
          zz = null;
          const XH = new AbortController,
            GH = null !== (BH = null === (LH = HH.session) || void 0 === LH ? void 0 : LH.gameNameWithVariation) && void 0 !== BH ? BH : null;
          pE(GH), uC({
            controller: XH,
            game: GH
          }), Cz = null, null === (AH = Gz) || void 0 === AH || AH.abort(), Gz = null, uz = !1, Qz = null, Wz.clear();
          const YH = () => {
            (0, JB.k)(XH, (0, JB.g)(rH))
          };
          null === rH || void 0 === rH || rH.addEventListener("abort", YH, {
            once: !0
          });
          try {
            var QH, WH, MH;
            const BH = await Jh;
            if (null === BH || BH.isStopped || pz) throw new Error("no core is running to join a game with");
            if (HH.session && null !== Pt) {
              const BH = await GC(Pt.join(HH.session.gameNameWithVariation), XH.signal);
              if ((0, xS.o)("webgpuloss")) {
                const LH = HH.session.gameNameWithVariation,
                  AH = Pt.couldntRunInJoinedGame();
                (0, vS.b)((HH => HH.noteWasmJoin(LH, BH, AH)))
              }
              if (null !== BH) throw new CB.c(BH)
            }
            const [, , , {
              joinRoom: LH
            }] = await GC(Promise.all([(0, DH.j)(BH), XC(HH), null === tH || void 0 === tH ? void 0 : tH(), BC()]), XH.signal), AH = HH.session, rH = AH ? {
              ...IC,
              attachSocket: BH => {
                const LH = gC(BH, HH.endpoint);
                var rH;
                null !== LH && (it = {
                  conn: LH,
                  info: AH
                }, null === (rH = pt) || void 0 === rH || rH(AH.playerDbId));
                return LH
              }
            } : IC, CH = await LH(rH, HH, {
              signal: XH.signal,
              early: hH
            }).catch((HH => {
              throw function(HH) {
                if (!(HH instanceof HB.d)) return HH;
                if ("roomError" === HH.stage && null !== Qz) return EC(new HB.d(HH.message, HH.stage, HH.code, Qz), HH);
                const BH = "closed" === HH.stage && null !== Ez ? Wz.get(Ez.conn) : void 0;
                return void 0 === BH ? HH : EC(new HB.d(HH.message, HH.stage, BH.code, null, HH.socketOpened), HH)
              }(HH)
            }));
            if (Zt !== XH) throw CH.leave(), new DOMException("the join was left", "AbortError");
            WC(CH), null === (QH = rt) || void 0 === QH || QH.newGame();
            const EH = function(HH, BH) {
              var LH, AH;
              const {
                session: rH
              } = HH, SH = void 0 === rH ? HH.joinOptions.lobbyName : rH.lobbyName;
              return {
                endpoint: HH.endpoint,
                game: null !== (LH = null === rH || void 0 === rH ? void 0 : rH.gameNameWithVariation) && void 0 !== LH ? LH : HH.roomName,
                lobby: String(null !== SH && void 0 !== SH ? SH : null),
                sessionId: BH,
                postCookies: null !== (AH = HH.postCookies) && void 0 !== AH ? AH : null
              }
            }(HH, CH.seat.sessionId);
            wt.set(CH, EH), vr(EH);
            const GH = performance.now(),
              YH = {
                conn: CH.conn,
                rejoin: SH,
                game: null !== (WH = null === (MH = HH.session) || void 0 === MH ? void 0 : MH.gameNameWithVariation) && void 0 !== WH ? WH : "",
                joinedAt: GH,
                rejoinedAt: zH ? GH : null,
                overflow: null
              };
            yt = YH,
              function(HH, BH) {
                ZC();
                const LH = {
                  endpoint: BH,
                  roomId: HH.seat.room.roomId,
                  heldConn: 0,
                  dropCode: 0,
                  pendingHold: null,
                  resume: new iL({
                    reconnect: (HH, BH, AH) => async function(HH, BH, LH, AH) {
                      const {
                        roomId: rH,
                        roomToken: SH
                      } = aC(HH, BH), hH = jh;
                      if (null === hH || hH.isStopped || pz) throw new Error("no core is running to resume the game on");
                      const {
                        resumeRoom: tH
                      } = await GC(BC(), LH), zH = {
                        ...IC,
                        attachSocket: BH => Hz !== HH || 0 === HH.heldConn ? (BH.close(), null) : gC(BH, HH.endpoint, !0)
                      };
                      return tH(zH, HH.endpoint, rH, SH, {
                        signal: LH,
                        onAttached: AH
                      })
                    }(LH, HH, BH, AH),
                    releaseSeat: HH => {
                      !async function(HH, BH) {
                        const {
                          roomId: LH,
                          roomToken: AH
                        } = aC(HH, BH);
                        try {
                          const {
                            leaveHeldSeat: BH
                          } = await BC();
                          await BH(HH.endpoint, LH, AH)
                        } catch (rH) {
                          console.warn(`${Xh} the held seat of a game left while it reconnected couldn't be released`, rH)
                        }
                      }(LH, HH)
                    },
                    isLive: () => Hz === LH && null !== yt && !pz,
                    IK: HH => {
                      tz = HH, wC()
                    },
                    onReconnected: HH => {
                      ! function(HH) {
                        const BH = Dt;
                        if (null !== BH && BH !== HH) {
                          const LH = wt.get(BH);
                          void 0 !== LH && wt.set(HH, LH), nz === BH && (nz = HH), BH.detach()
                        }
                        WC(HH)
                      }(HH)
                    },
                    onGaveUp: (HH, BH) => {
                      ! function(HH, BH, LH) {
                        var AH, rH;
                        console.warn(`${Xh} gave up reconnecting (${LH.reason}, ${LH.attempts} attempts)`, LH.lastError), (0, SA.reportReconnectGaveUp)(LH, Zh);
                        const SH = null !== (AH = null === (rH = yt) || void 0 === rH ? void 0 : rH.rejoin) && void 0 !== AH ? AH : null;
                        dC(HH, "gaveUp"), xC();
                        const hH = {
                          code: HH.dropCode,
                          name: null,
                          reason: Oh,
                          canReconnect: !BH,
                          automaticallyReconnect: !1,
                          requiresRefresh: !1
                        };
                        oC(hH, BH ? null : SH, !1, {
                          reasonKey: bh,
                          canPlayAgain: BH
                        })
                      }(LH, HH, BH)
                    }
                  })
                };
                Hz = LH, null !== Bz && Bz.conn === HH.conn && LH.resume.onInitialInfo(Bz)
              }(CH, HH.endpoint), performance.mark(Mh), (0, uH.v)("wasm_joined", GH), setTimeout((() => {
                Dt === CH && (0, uH.j)()
              }), 0), hC(), console.info(`${Xh} joined ${HH.roomName} as ${CH.seat.sessionId} at ${Math.round(performance.now())} ms`);
            const xH = Cz;
            Cz = null, null !== xH && TC(YH, xH.mask, xH.frames);
            const vH = Wz.get(CH.conn);
            return Wz.clear(), void 0 !== vH && (WC(null), mC(CH.conn, vH.code, vH.reason)), CH
          } finally {
            var xH;
            null === rH || void 0 === rH || rH.removeEventListener("abort", YH), Zt === XH && QC(Dt, null), (null === (xH = Ez) || void 0 === xH ? void 0 : xH.join) === XH && (Ez = null)
          }
        }(HH.target, {
          signal: tH,
          rejoin: rH(HH.target),
          early: CH,
          pageReady: hH
        });
        return GH = !0, {
          kind: "joined",
          game: fH
        }
      } catch (KH) {
        if (KH instanceof DOMException && "AbortError" === KH.name || zH()) return {
          kind: "xB"
        };
        if (pz) return {
          kind: "stopped"
        };
        if (uz && (uz = !1, await SH().catch((HH => {
            console.warn(`${Xh} the cached traffic code could not be dropped`, HH)
          }))), null === await Jh) return {
          kind: "stopped"
        };
        if (KH instanceof CB.c) return LH(KH, performance.now() - YH), {
          kind: "failed",
          error: KH,
          reloading: !1
        };
        const HH = KH instanceof HB.d && KH.code === AH.e.wasmClientNotAllowed.code,
          BH = KH instanceof HB.d && KH.code === AH.e.outdatedVersion.code,
          rH = () => null === Dt,
          hH = await zX({
            site: SA.JOIN_SITE,
            error: KH,
            outdated: BH
          }, (() => {
            HH && (0, nB.G)(), LH(KH, performance.now() - YH)
          }), {
            stillWanted: rH
          });
        return {
          kind: "failed",
          error: KH,
          reloading: hH
        }
      } finally {
        var fH;
        GH || XH.end(), nr.d.releaseHold(EH);
        const HH = null === (fH = CH) || void 0 === fH ? void 0 : fH.release();
        HH && (0, SA.reportUnusedSeat)(HH, Zh)
      }
    }

    function EC(HH, BH) {
      return HH.stack = BH.stack, HH
    }

    function XC(HH) {
      return HH.session ? (0, DH.n)(wh, HH.session.gameNameWithVariation) : Promise.resolve()
    }

    function GC(HH, BH) {
      return (0, JB.t)(BH), new Promise(((LH, AH) => {
        const rH = () => {
          AH((0, JB.g)(BH))
        };
        BH.addEventListener("abort", rH, {
          once: !0
        }), HH.then((HH => {
          BH.removeEventListener("abort", rH), LH(HH)
        }), (HH => {
          BH.removeEventListener("abort", rH), AH(HH)
        }))
      }))
    }

    function YC() {
      uC(null)
    }

    function uC(HH) {
      var BH, LH, AH;
      (function() {
        const HH = Hz;
        null !== HH && dC(HH, "left")
      }(), null === Ht || Ht.left) || (Ht.left = !0, null === (AH = (0, DH.i)()) || void 0 === AH || AH.socketLeft(), (0, GH.p)({
        websocketUrl: null
      }));
      Zt && (0, JB.k)(Zt, new DOMException("the join was left", "AbortError")), xC(null !== HH), null === (BH = Pt) || void 0 === BH || BH.leave();
      const rH = Dt;
      null !== HH && nr.d.setGame(HH.game), QC(null, null !== (LH = null === HH || void 0 === HH ? void 0 : HH.controller) && void 0 !== LH ? LH : null), null === rH || void 0 === rH || rH.leave(), MC(0), (0, ZB.e)()
    }

    function QC(HH, BH) {
      Dt = HH, Zt = BH, null === Dt && null === Zt && nr.d.setGame(void 0)
    }

    function WC(HH) {
      QC(HH, Zt)
    }

    function MC(HH) {
      const BH = jh;
      return null !== lh && !pz && null !== BH && !BH.isStopped && (!!lh(HB.j, 0, (0, HB.z)(HH)) && (qt = !0, 0 === HH || Kt || IE(BH, !1, "all"), !0))
    }

    function xC() {
      var HH, BH;
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (0, XA.d)();
      const LH = null !== (HH = null === (BH = yt) || void 0 === BH ? void 0 : BH.overflow) && void 0 !== HH ? HH : null;
      yt = null, null !== LH && (0, SA.reportEventOverflow)(LH, Zh)
    }

    function vC() {
      null !== Dt || null !== Zt ? YC() : NC()
    }

    function PC(HH, BH) {
      console.warn(`${Xh} the event buffer refused records in ${BH} frames (categories ${HH})`), pz || (null !== yt ? TC(yt, HH, BH) : null !== Zt && function(HH, BH, LH) {
        var AH;
        const rH = function(HH, BH) {
          return null === HH ? "drop" : HH.activated ? "keep" : 0 !== (BH & VL.z.NetSession) ? "fail" : "drop"
        }((null === (AH = Ez) || void 0 === AH ? void 0 : AH.join) === HH ? Ez : null, BH);
        "keep" === rH ? Cz = {
          mask: BH,
          frames: LH
        } : "fail" === rH && (0, JB.k)(HH, new Error("the join's net session was lost to an event overflow"))
      }(Zt, HH, BH))
    }

    function TC(HH, BH, LH) {
      const AH = HH.overflow ??= {
        frames: 0,
        acks: 0,
        mask: 0,
        outcome: null
      };
      AH.frames += LH, AH.acks++, AH.mask |= BH;
      const rH = function(HH, BH, LH) {
        if (0 === (HH & VL.z.NetSession)) return "none";
        const AH = null !== BH.rejoinedAt && LH - BH.rejoinedAt < Gr;
        return null === BH.rejoin || AH ? "fail" : "rejoin"
      }(BH, HH, performance.now());
      "none" !== rH && queueMicrotask((() => {
        if (yt !== HH) return;
        const BH = "rejoin" === rH && performance.now() - Xz >= yH.e;
        AH.outcome = BH ? "rejoined" : "failed", oC(function(HH, BH) {
          return {
            code: 0,
            name: "eventOverflow",
            reason: "Your game fell behind the server.",
            canReconnect: HH,
            automaticallyReconnect: BH,
            requiresRefresh: !1
          }
        }(null !== HH.rejoin, BH), HH.rejoin, BH), YC(), BH && (zz = performance.now())
      }))
    }

    function UC() {
      az && function(HH, BH) {
        let {
          mesh: LH,
          worldgen: AH,
          modelPool: rH
        } = HH;
        "landingPage" === BH ? (null === LH || void 0 === LH || LH.stopWorkers(), null === AH || void 0 === AH || AH.stopWorker(), null === rH || void 0 === rH || rH.stopWorkers()) : ((0, XB.j)(BH) || "inGame" === BH) && (null === LH || void 0 === LH || LH.restartWorkers(), null === rH || void 0 === rH || rH.startWorkers())
      }({
        mesh: rt,
        worldgen: Lt,
        modelPool: Yt
      }, XB.c.get("gameState"))
    }

    function VC(HH) {
      sz = HH, Jz && OC(Jz, HH)
    }

    function OC(HH, BH) {
      HH.style.visibility = BH ? "visible" : "hidden"
    }

    function bC(HH) {
      var BH;
      const LH = HH.roomName,
        AH = null !== (BH = HH.joinOptions.lobbyName) && void 0 !== BH ? BH : null;
      return () => {
        zC(LH, AH)
      }
    }

    function kC() {
      return LH.e(125).then((() => LH(54549))).then((HH => {
        let {
          invalidateGuestTrafficCode: BH
        } = HH;
        return BH()
      })).catch((HH => {
        console.warn(`${Xh} the cached traffic code could not be dropped`, HH)
      }))
    }

    function mC(HH, BH, LH) {
      var rH, SH;
      let hH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (pz) return;
      if ((null === (rH = yt) || void 0 === rH ? void 0 : rH.conn) !== HH) return void(null !== Zt && Wz.set(HH, {
        code: BH,
        reason: LH
      }));
      const {
        rejoin: tH,
        game: zH,
        joinedAt: CH
      } = yt;
      xC(), ZC();
      const EH = (0, yH.l)(BH, (0, ur.g)(HH));
      if (console.info(`${Xh} the game's connection closed with code ${BH} (${null!==(SH=EH.name)&&void 0!==SH?SH:"unrecognised"})`), BH === AH.e.gameOrPluginKick.code || hH || (0, SA.reportDisconnect)(EH, Zh, {
          closeReason: LH,
          sinceJoinedMs: performance.now() - CH,
          game: zH
        }), EH.requiresRefresh) {
        const HH = "outdatedVersion" === EH.name,
          LH = new Error(`the game's connection closed with code ${BH}`),
          AH = () => null === yt && null === Zt;
        return void zX({
          site: SA.JOIN_SITE,
          error: LH,
          outdated: HH
        }, (() => {
          AH() && oC(EH, null, !1)
        }), {
          stillWanted: AH
        })
      }
      const XH = EH.canReconnect ? tH : null,
        GH = null !== XH && EH.automaticallyReconnect && performance.now() - Xz >= yH.e;
      oC(EH, XH, GH)
    }

    function oC(HH, BH, LH) {
      var AH;
      let rH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        reasonKey: null,
        canPlayAgain: !1
      };
      if (iz) return;
      nr.d.unwantedLeave(LH && null !== BH && 0 === Yz.size), null === (AH = Gz) || void 0 === AH || AH.abort();
      const SH = new AbortController;
      Gz = SH;
      const hH = null === BH ? null : () => {
        SH.signal.aborted || (SH.abort(), BH())
      };
      if (LH && null !== hH) {
        Xz = performance.now();
        const HH = setTimeout(hH, yH.b);
        SH.signal.addEventListener("abort", (() => {
          clearTimeout(HH)
        }))
      }
      const tH = {
        code: HH.code,
        name: HH.name,
        reason: HH.reason,
        reasonKey: rH.reasonKey,
        reconnect: hH,
        reconnecting: LH,
        requiresRefresh: HH.requiresRefresh,
        canPlayAgain: rH.canPlayAgain
      };
      if (Yz.size > 0)
        for (const CH of [...Yz]) try {
          CH(tH)
        } catch (zH) {
          console.error(`${Xh} an unwanted-leave listener threw`, zH)
        } else mB((0, VB.g)(HH, null !== hH, LH), SH.signal).then((BH => {
          BH && (null !== hH ? hH() : HH.requiresRefresh && (0, EB.f)())
        }))
    }
    const IC = {
      attachSocket: HH => gC(HH),
      onConnection: HH => (Mz.add(HH), () => {
        Mz.delete(HH)
      }),
      sendRaw: (HH, BH) => {
        const LH = Ht;
        return null !== LH && LH.conn === HH && nE(LH, BH)
      },
      leaveRoom: MC,
      closeSocket: HH => {
        var BH;
        (null === (BH = Ht) || void 0 === BH ? void 0 : BH.conn) === HH && NC()
      },
      flushNet: RC
    };

    function fC(HH) {
      var BH;
      let {
        aux: LH,
        payload: AH
      } = HH;
      null === (BH = jh) || void 0 === BH || BH.queueOptions(LH, AH)
    }

    function lC(HH, BH) {
      fC(function(HH, BH) {
        return rS = HH ? {
          preventMovement: BH
        } : null, HH ? SS(BH) : {
          aux: UL.cc.AdEnd,
          payload: AS
        }
      }(HH, BH))
    }

    function KC(HH) {
      var BH;
      jt = HH, null === (BH = jh) || void 0 === BH || BH.setUiPrefs(HH)
    }

    function cC(HH, BH) {
      wh.setMaster(HH, BH)
    }

    function eC(HH) {
      var BH;
      nt = HH, null === (BH = jh) || void 0 === BH || BH.setEnvPrefs(HH)
    }

    function qC(HH) {
      var BH;
      Ft = HH, null === (BH = jh) || void 0 === BH || BH.setLookPrefs(HH)
    }

    function gC(HH) {
      var BH;
      let LH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new URL(HH.url).origin,
        AH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (HH.readyState === WebSocket.CLOSING || HH.readyState === WebSocket.CLOSED) return console.warn(`${Xh} a closing or closed socket can't be attached`), null;
      const rH = jh;
      if (!rH || rH.isStopped) return console.warn(`${Xh} no core is running to attach a socket to`), HH.close(), null;
      if (null === (0, DH.i)()) return console.warn(`${Xh} the game has not started to attach a socket to`), HH.close(), null;
      if (bt > UL.w) return console.warn(`${Xh} this core has attached all the sockets it can; reload to play on`), HH.close(), null;
      if (qt && !Kt && (IE(rH, !1, "all"), rH.isStopped || pz)) return HH.close(), null;
      NC();
      const SH = bt++;
      if (!pC(rH, "open", SH, AH ? UL.bc.Resume : 0)) return HH.close(), null;
      AH || wB.e.reset(), Ez = null === Zt ? null : {
        join: Zt,
        conn: SH,
        activated: !1
      }, HH.binaryType = "arraybuffer";
      const hH = new pL.c((() => {
          ! function(HH, BH) {
            if (Ht !== BH || HH.isStopped || null === FC(BH, Uh)) return;
            BH.detach(), Ht = null, nC(HH, BH, Uh, "", !0), BH.ws.close()
          }(rH, tH)
        })),
        tH = {
          ws: HH,
          conn: SH,
          pending: [],
          pendingBytes: 0,
          left: !1,
          resume: AH,
          token: null,
          detach: () => {
            hH.dispose(), HH.removeEventListener("message", zH), HH.removeEventListener("open", CH), HH.removeEventListener("close", EH)
          }
        },
        zH = HH => {
          if (HH.data instanceof ArrayBuffer) {
            var BH;
            const LH = new Uint8Array(HH.data);
            hH.heard(), tH.token = null !== (BH = (0, yL.d)(LH)) && void 0 !== BH ? BH : tH.token,
              function(HH, BH, LH) {
                BX(HH, (() => {
                  HH.rings.net.writeFrame(BH, LH) || HH.crash(RL.q, `a socket frame of ${LH.byteLength} bytes did not fit the net-in ring`)
                }));
                const AH = HH.rings.net.cursor >= Th;
                !SX() && (AH || HH.netWrittenSinceFrame >= Ph) && IE(HH, !1, document.hidden ? "all" : "budget");
                tX(HH)
              }(rH, SH, LH)
          }
        },
        CH = () => {
          AH || (0, uH.v)("wasm_socket_open", performance.now());
          for (const BH of tH.pending.splice(0)) HH.send(BH);
          tH.pendingBytes = 0
        },
        EH = HH => {
          if (Ht === tH && rH.rings.net.cursor > 0 && IE(rH, !1, "all"), Ht === tH) {
            if (tH.detach(), Ht = null, nC(rH, tH, HH.code, HH.reason) || jC(rH, tH)) return;
            pC(rH, "close", SH), DC(SH, tH.left), mC(SH, HH.code, HH.reason)
          }
        };
      return HH.addEventListener("message", zH), HH.addEventListener("open", CH), HH.addEventListener("close", EH), Ht = tH, null === (BH = (0, DH.i)()) || void 0 === BH || BH.socketAttached(SH), (0, GH.p)({
        websocketUrl: LH
      }), SH
    }

    function NC() {
      const HH = Ht;
      if (!HH) return;
      const BH = jh,
        LH = HH.resume;
      LH && (RC(), Ht !== HH) || (Ht = null, HH.detach(), HH.ws.close(), null !== BH && (jC(BH, HH) || LH && nC(BH, HH, Vh)) || (null !== BH && pC(BH, "close", HH.conn), DC(HH.conn, HH.left)))
    }

    function RC() {
      const HH = jh;
      null !== HH && !HH.isStopped && !pz && !Kt && HH.rings.net.cursor > 0 && IE(HH, !1, "all")
    }

    function jC(HH, BH) {
      var LH;
      if (!BH.resume) return !1;
      const AH = Hz;
      return null !== AH && null !== BH.token && "" !== BH.token && (AH.pendingHold = {
        conn: BH.conn,
        token: `${AH.roomId}:${BH.token}`
      }), pC(HH, "close", BH.conn), null === (LH = (0, DH.i)()) || void 0 === LH || LH.socketDetached(BH.conn), !0
    }

    function nC(HH, BH, LH) {
      let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
        rH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      const SH = FC(BH, LH);
      if (null === SH) return !1;
      const {
        LX: hH,
        token: tH,
        game: zH,
        joinedAt: CH
      } = SH;
      if (!pC(HH, "close", BH.conn, UL.z.Held)) return !0;
      console.warn(`${Xh} the game's connection ${rH?"went silent":`dropped with code ${LH}`}, holding it`);
      const EH = {
        closeReason: AH,
        sinceJoinedMs: performance.now() - CH,
        game: zH
      };
      return (0, SA.reportDisconnect)((0, yH.l)(LH), Zh, EH, rH ? "silent" : void 0), hH.heldConn = BH.conn, hH.dropCode = LH, hH.pendingHold = {
        conn: BH.conn,
        token: `${hH.roomId}:${tH}`
      }, Kt || IE(HH, !1, "all"), !0
    }

    function FC(HH, BH) {
      const LH = Hz,
        rH = yt,
        SH = HH.token;
      return null === LH || null === rH || pz || HH.left || rH.conn !== HH.conn || null === SH || "" === SH ? null : (0, AH.k)(BH) && LH.resume.canHoldSeat() ? {
        LX: LH,
        token: SH,
        game: rH.game,
        joinedAt: rH.joinedAt
      } : null
    }

    function DC(HH, BH) {
      var LH;
      null === (LH = (0, DH.i)()) || void 0 === LH || LH.closeGame(HH), (0, LS.d)().close(HH), BH || (0, GH.p)({
        websocketUrl: null
      })
    }

    function wC() {
      const HH = tz;
      if (null === HH) return;
      const BH = (0, DH.i)();
      pz || null === BH || BH.IK(HH) ? tz = null : performance.now() - gt.pause >= mh && (gt.pause = performance.now(), console.warn(`${Xh} the cmd ring had no room for SetPaused(${HH}): written before the next frame`))
    }

    function ZC() {
      const HH = Hz;
      Hz = null, null === HH || void 0 === HH || HH.resume.dispose()
    }

    function dC(HH, BH) {
      var LH, AH;
      const {
        heldConn: rH
      } = HH, SH = HH.resume.resumingConn;
      HH.heldConn = 0, HH.pendingHold = null, Hz === HH && (Hz = null), "left" === BH ? HH.resume.leave() : HH.resume.dispose(), 0 === hz || (null === (LH = Ht) || void 0 === LH ? void 0 : LH.conn) !== hz || "left" === BH && (null === (AH = Dt) || void 0 === AH ? void 0 : AH.conn) === hz || iC(hz), "gaveUp" === BH && 0 !== SH && iC(SH), 0 !== rH && "refused" !== BH && (console.info(`${Xh} the game held through its drop ${"left"===BH?"was left":"is given up"}`), null === jh || jh.isStopped || pC(jh, "close", rH), DC(rH, !1))
    }

    function aC(HH, BH) {
      const LH = BH.indexOf(":");
      return {
        roomId: LH < 0 ? HH.roomId : BH.slice(0, LH),
        roomToken: BH.slice(LH + 1)
      }
    }

    function sC(HH) {
      (0, jL.logClientMeasurement)("join_preload", HH, {
        client: "wasm"
      })
    }

    function JC(HH) {
      var BH;
      Bz = HH;
      const LH = HH.replayOffer && Sz !== HH.conn;
      rz = LH ? HH.conn : 0, Lz = LH || Az.has(HH.conn) ? 0 : HH.conn, KH.admitted(), HH.conn === hz && (hz = 0);
      const AH = Hz;
      null !== AH && (null === (BH = yt) || void 0 === BH ? void 0 : BH.conn) === HH.conn && AH.resume.onInitialInfo(HH)
    }

    function iC(HH) {
      var BH;
      const LH = Ht;
      (null === LH || void 0 === LH ? void 0 : LH.conn) === HH && (LH.left = !0, null === (BH = (0, DH.i)()) || void 0 === BH || BH.socketLeft(), (0, GH.p)({
        websocketUrl: null
      }), MC(HH) ? setTimeout((() => {
        Ht === LH && NC()
      }), HB.f) : NC())
    }

    function pC(HH, BH, LH) {
      let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        rH = !1;
      return BX(HH, (() => {
        const {
          net: SH
        } = HH.rings;
        rH = "open" === BH ? SH.writeOpen(LH, AH) : SH.writeClose(LH, AH), rH || HH.crash(RL.q, `a socket ${BH} did not fit the net-in ring`)
      })), rH
    }

    function yC(HH, BH, LH) {
      let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const rH = "noContext" === BH ? "noContext" : "blockedAfterLoss" === BH ? "graphicsLost" : HH;
      (0, SA.showUnsupported)(rH, "unsupported", LH, {
        ...AH,
        decline: BH
      })
    }
    const HE = 1500;

    function BE(HH) {
      return (0, gL.k)(HH) && LE(HH)
    }

    function LE(HH) {
      return 1 === HH.missing.length && HH.missing[0] === gL.b
    }
    const AE = "wasmNoContextWaited";

    function rE(HH, BH) {
      const LH = BH ? "blockedAfterLoss" : LE(HH) ? "noContext" : "unsupported";
      return {
        decline: LH,
        ...SE(HH),
        retries: "unsupported" !== LH && az
      }
    }

    function SE(HH) {
      const BH = `No WebGPU or WebGL2, and WebGL1 lacks ${HH.missing.join(", ")}`,
        LH = LE(HH) ? (0, gL.$)() : "";
      return {
        detail: "" === LH ? BH : `${BH}; ${LH}`,
        details: {
          missing: HH.missing.join(",")
        }
      }
    }

    function hE(HH) {
      console.warn(`${Xh} ${HH}: reloading once more onto the wasm client`), (0, ir.q)(), (0, SA.flushCrashReports)(EB.b).then(EB.f, EB.f)
    }

    function tE() {
      return az && "address" !== nB.A.reason
    }

    function zE(HH, BH, LH, AH) {
      return Tz(HH, BH, LH, AH)
    }

    function CE() {
      null === Oz || null === jh || jh.isStopped || pz || null !== Qt || null === lh || (Qt = Oz(lh, GE, YE().follow))
    }

    function EE() {
      var HH, BH, LH;
      return null !== (HH = null === (BH = Fh) || void 0 === BH || null === (LH = BH.textures) || void 0 === LH ? void 0 : LH.files()) && void 0 !== HH ? HH : null
    }

    function XE(HH) {
      YE().follow((BH => {
        null !== BH && Promise.all([Promise.all([LH.e(225), LH.e(53)]).then((() => LH(54585))), (0, ir.R)()]).then((HH => {
          let [{
            followPagePackFiles: LH
          }, AH] = HH;
          const rH = null === AH || (0, gL.k)(AH) ? "webgl" : AH.backend;
          LH(BH, jr.i, rH, (HH => {
            jr.i.setPageFiles(HH)
          }), GE)
        }), (BH => {
          console.warn(`${Xh} the texture pack's files didn't load: the previews draw the shipped ones until the next opens`, BH), HH()
        }))
      }))
    }

    function GE(HH, BH) {
      console.warn(`${Xh} ${HH}`, BH)
    }

    function YE() {
      return nh ??= new ES({
        load: HH => Promise.all([LH.e(225), LH.e(66)]).then((() => LH(54593))).then((BH => {
          let {
            startPageTexturePackFeed: LH
          } = BH;
          return LH(GE, HH)
        })),
        store: zL.c,
        XX: HH => {
          Jh.then((() => {
            (0, SA.reportTexturePackFeedLoadFailure)(HH, Zh)
          }))
        }
      }), nh
    }
    const uE = HH => YE().follow(HH);

    function QE() {
      return YE().loaded()
    }
    const WE = function(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => performance.now(),
          rH = 0;
        return async function(SH, hH) {
          let tH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
          const zH = ++rH,
            CH = AH() + BH,
            EH = await
          function(HH, BH) {
            let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
            return new Promise((AH => {
              const rH = setTimeout((() => {
                AH(null), HH.then((HH => {
                  null !== HH && (HH.joinedWithout(), LH(HH))
                }))
              }), BH);
              HH.then((HH => {
                clearTimeout(rH), AH(HH)
              }))
            }))
          }(HH(SH), BH, (HH => {
            zH === rH && tH() && hH(HH, AH() + BH).catch((HH => {
              LH("the texture pack step after the join failed", HH)
            }))
          }));
          return null === EH ? null : hH(EH, CH)
        }
      }((HH => (0, fB.l)(HH) ? YE().request() : YE().forJoin()), CS.c, GE),
      ME = function(HH, BH) {
        let LH = !1;
        return {
          setGamePackConfirm: HH => {
            LH = null !== HH, BH(HH)
          },
          packStep: (BH, AH, rH) => HH(BH, AH, (() => LH && rH()))
        }
      }(WE, (HH => {
        YE().setGamePackConfirm(HH)
      }));

    function xE(HH) {
      ME.setGamePackConfirm(HH)
    }

    function vE() {
      if (pz || null !== Iz || null === bz || null === oz) return;
      const {
        backend: HH,
        canvas: BH,
        fallbackReason: LH,
        adapterVendor: AH
      } = oz, rH = bz;
      bz = null;
      try {
        Iz = rH({
          backend: HH,
          canvas: BH,
          fallbackReason: LH,
          adapterVendor: AH,
          joinedGame: () => pz ? null : Dt,
          canSend: () => !pz && null !== Dt && Dt.conn === Lz,
          inGame: TE,
          shaderPackReach: () => {
            var HH, BH;
            return null !== (HH = null === (BH = Pt) || void 0 === BH ? void 0 : BH.reachInJoinedGame()) && void 0 !== HH ? HH : null
          },
          KQ: () => Wt,
          msaa: () => mz > 1,
          writeCmd: (HH, BH, LH) => null !== lh && lh(HH, BH, LH),
          takeFailedMeshJobs: () => {
            var HH, BH;
            return null !== (HH = null === (BH = rt) || void 0 === BH ? void 0 : BH.takeFailedMeshJobs()) && void 0 !== HH ? HH : 0
          },
          readLoadCounts: HH => {
            var BH, LH;
            return null !== (BH = null === (LH = jh) || void 0 === LH ? void 0 : LH.readLoadCounts(HH)) && void 0 !== BH && BH
          },
          mainStalled: (HH, BH, LH, AH) => {
            (0, SA.reportMainStall)(HH, BH, LH, AH, Zh)
          },
          Km: HH => {
            var BH, LH, AH;
            return null !== (BH = null === (LH = Pz) || void 0 === LH || null === (AH = LH.Km) || void 0 === AH ? void 0 : AH.call(LH, HH)) && void 0 !== BH ? BH : -1
          }
        })
      } catch (SH) {
        console.error(`${Xh} the frame telemetry didn't start`, SH)
      }
    }

    function PE(HH, BH) {
      try {
        var LH, AH, rH;
        const SH = xz && null !== (LH = null === (AH = jh) || void 0 === AH || null === (rH = AH.lastHeader) || void 0 === rH ? void 0 : rH.renderPending) && void 0 !== LH ? LH : 0;
        (0, jA.i)(BH, HH, TE() && !(null !== rS), SH)
      } catch (SH) {
        (0, jA.x)(), console.error(`${Xh} the quality steps stopped`, SH)
      }
    }

    function TE() {
      return null !== Dt && nz === Dt && !pz
    }

    function UE(HH) {
      const BH = Iz;
      Iz = null;
      try {
        null === BH || void 0 === BH || BH.stop()
      } catch {}
      console.error(`${Xh} the frame telemetry threw: it stops`, HH)
    }

    function VE(HH) {
      var BH, LH, AH, rH;
      if ((0, LS.d)().fire(HH), "message" === HH.type) {
        if (ct++, HH.kt === UL.Ic.ERROR && null !== Zt) {
          var SH;
          const {
            text: BH,
            dropsCache: LH
          } = (0, yH.t)((new TextDecoder).decode(HH.payload));
          uz ||= LH, (null === (SH = Ez) || void 0 === SH ? void 0 : SH.conn) === HH.conn && (Qz = BH)
        } else if (HH.kt === VL.nc.ResumeComplete) {
          var hH;
          Sz = HH.conn, HH.conn === rz && (rz = 0, Lz = Az.has(HH.conn) ? 0 : HH.conn), null === (hH = Hz) || void 0 === hH || hH.resume.onResumeComplete(HH.conn)
        }
        return
      }
      HH.phase === UL.C.Left ? et = HH.conn : HH.phase === UL.C.Activated && (null === (BH = Ez) || void 0 === BH ? void 0 : BH.conn) === HH.conn ? Ez.activated = !0 : HH.phase === UL.C.Resumed ? function(HH) {
        var BH, LH;
        hz = HH;
        const AH = Hz;
        if (null === AH || 0 === AH.heldConn || (null === (BH = Ht) || void 0 === BH ? void 0 : BH.conn) !== HH || !Ht.resume || null === yt) return;
        console.info(`${Xh} the game resumed on conn ${HH}, waiting for its InitialInfo`);
        const rH = AH.heldConn;
        AH.heldConn = 0, Ht.resume = !1, yt.conn = HH, (null === (LH = it) || void 0 === LH ? void 0 : LH.conn) === rH && (it = {
          conn: HH,
          info: it.info
        }), wB.e.apply({
          shopInfo: null,
          _shopVersion: lB.e
        })
      }(HH.conn) : HH.phase === UL.C.Held ? function(HH) {
        var BH;
        const LH = Hz,
          AH = null !== (BH = null === LH || void 0 === LH ? void 0 : LH.pendingHold) && void 0 !== BH ? BH : null;
        if (null !== LH && null !== AH && AH.conn === HH) return LH.pendingHold = null, LH.heldConn = HH, hz = 0, console.warn(`${Xh} the core holds the game, reconnecting`), void LH.resume.onDropped(AH.token);
        if (HH === hz) {
          hz = 0;
          const BH = jh;
          null === BH || BH.isStopped || (console.info(`${Xh} the core held again a resumed game the shell ended before its InitialInfo: closing it again`), pC(BH, "close", HH))
        }
      }(HH.conn) : HH.phase === UL.C.Closed && (null === (LH = Hz) || void 0 === LH || null === (AH = LH.pendingHold) || void 0 === AH ? void 0 : AH.conn) === HH.conn && (Hz.heldConn === HH.conn ? function(HH) {
        const BH = HH.heldConn,
          LH = HH.dropCode;
        dC(HH, "refused"), console.info(`${Xh} the core didn't hold the game through its drop: it hadn't started`), queueMicrotask((() => {
          DC(BH, !1), mC(BH, LH, "", !0)
        }))
      }(Hz) : Hz.pendingHold = null), HH.phase !== UL.C.Held && HH.phase !== UL.C.Left && HH.phase !== UL.C.Closed || (Az.add(HH.conn), HH.conn === Lz && (Lz = 0));
      const tH = Object.keys(UL.C).find((BH => UL.C[BH] === HH.phase)),
        zH = 0 === HH.code ? "" : ` (code ${HH.code})`;
      console.info(`${Xh} conn ${HH.conn}: ${null!==tH&&void 0!==tH?tH:HH.phase}${zH}, ${ct} raw messages so far`), (null === (rH = Dt) || void 0 === rH ? void 0 : rH.conn) !== HH.conn || HH.phase !== UL.C.Left && HH.phase !== UL.C.Closed || WC(null), Jt !== HH.conn || HH.phase !== UL.C.Left && HH.phase !== UL.C.Closed || (Jt = null, null === Dt && null === Zt && nr.d.setGame(void 0));
      for (const EH of [...Mz]) try {
        EH(HH.conn, HH.phase, HH.code)
      } catch (CH) {
        (0, OL.m)(CH, `${Xh} a connection listener threw`)
      }
    }
    const OE = 9e4,
      bE = 1e3;

    function kE() {
      (0, ir.q)(), dz.forget(), null === Dt && null === Zt || (0, MA.e)(), queueMicrotask((() => {
        try {
          DE()
        } catch (HH) {
          console.warn(`${Xh} stopping before the reload threw`, HH)
        }(0, SA.flushCrashReports)(EB.b).then(EB.f, EB.f)
      }))
    }

    function mE() {
      const HH = jh;
      null === HH || HH.isStopped || null === Ht || Kt || !HH.hasPendingCommands() || IE(HH, !1, "budget")
    }

    function oE(HH) {
      var BH;
      const LH = Dt;
      HH.persisted || null === LH || (null === (BH = Ht) || void 0 === BH ? void 0 : BH.conn) !== LH.conn || Ht.left || LH.leave()
    }

    function IE(HH, BH, AH) {
      let rH = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const SH = Kt;
      Kt = !0;
      try {
        const SH = HH.rings.net.cursor >= Th;
        SH && "all" !== AH && !document.hidden && dE("backlog", `a shown tab's net-in is ${HH.rings.net.cursor} bytes behind: one frame reads it all`);
        return function(HH, BH, AH, rH) {
          var SH, hH, tH, zH;
          if (pz) return !1;
          if (BX(HH, lE), pz || HH.isStopped) return !1;
          RE() && Vt("modelsIn");
          wC(), kt = performance.now(), et = null, qt = !1, (0, FH.P)(), null === (SH = Et) || void 0 === SH || SH.beforeFrame(), Br(kt, HH), (0, FH.F)(kt, KE), lt = !0;
          const CH = BH && NE();
          let EH;
          try {
            EH = HH.frame(kt, CH, AH)
          } finally {
            lt = !1
          }
          if (!EH) return !1;
          kz.observe(null !== (hH = null === (tH = HH.lastHeader) || void 0 === tH ? void 0 : tH.chunksCancelled) && void 0 !== hH ? hH : 0);
          const XH = HH.lastFrameKind,
            GH = (0, SL.b)(XH);
          (function(HH) {
            null !== bS && bS.afterFrame(performance.now(), HH)
          })(GH), null === (zH = fz) || void 0 === zH || zH.frame(HH, kt, XH), BH && (Dz = GH);
          GH && (0, LL.e)(kt);
          if (null !== Iz) try {
            Iz.frameRan(HH, kt, performance.now(), XH)
          } catch (WH) {
            UE(WH)
          }
          "drawn" === XH && gE() && function() {
            for (const HH of [...sr]) HH()
          }();
          HH.forEachNetOut(jE);
          const YH = Ht;
          null !== et && (null === YH || void 0 === YH ? void 0 : YH.conn) === et && nE(YH, HB.m);
          qE(HH),
            function(HH) {
              const BH = 0 !== (HH.headerWord(VL.I.LoadSteps) & VL.Y.JoinPreload);
              BH !== st && (st = BH, (0, SA.setCrashAdPreload)(BH), (0, XA.O)())
            }(HH), BH && (! function(HH) {
              var BH, AH, rH;
              if (null === Dt || !NE()) return;
              const SH = HH.headerWord(VL.I.LoadSteps);
              null === jz || nz === Dt && !jz.frame(kt, 0 !== (SH & VL.$.TerrainDrawn)) || (jz = null);
              if (0 === (SH & VL.Y.PlayerBound)) return;
              const hH = HH.lastHeader,
                tH = !xz || 0 === (null === hH || void 0 === hH ? void 0 : hH.renderPending);
              !ez && tH && (ez = !0, performance.mark(vh));
              if (nz === Dt) return;
              const zH = null !== (BH = null === hH || void 0 === hH ? void 0 : hH.firstView) && void 0 !== BH ? BH : UL._.NotYet;
              if (xz && zH === UL._.NotYet) return;
              if (cz && (!0 !== (null === (AH = (0, DH.i)()) || void 0 === AH ? void 0 : AH.isSessionLive) || !tH)) return;
              nz = Dt;
              const CH = Dt;
              if (setTimeout((() => {
                  Dt === CH && (0, uH.n)()
                }), 0), null === (rH = Pt) || void 0 === rH || rH.playable(), function() {
                  clearTimeout(yh), yh = setTimeout((() => {
                    TE() && rX((HH => {
                      let {
                        prefetchWorldgenWorker: BH
                      } = HH;
                      BH()
                    }))
                  }), fh)
                }(), cz) return;
              cz = !0, performance.mark(xh), (0, xS.o)("render") && Promise.all([LH.e(89), LH.e(56)]).then((() => LH(5137))).then((HH => {
                let {
                  renderDebugPlayable: BH
                } = HH;
                BH()
              }), (HH => {
                console.warn("The render debug topic didn't load", HH)
              }));
              const EH = Math.round(performance.now()),
                XH = HH.readViewQueuedPrograms();
              null !== XH && (0, uH.v)("wasm_view_links", EH, (0, QH.Cb)(XH));
              const GH = null === Rz || null === gz ? 0 : Math.max(0, gz - Rz),
                YH = null === Rz ? 0 : Math.max(0, EH - Rz),
                WH = xz ? HH.readFirstViewWait(GH, YH) : null;
              null !== WH && (0, uH.s)(WH);
              if (xz && zH !== UL._.Drawn) {
                const BH = zH === UL._.HeldBackstop ? "held_draws" : "long",
                  {
                    cause: LH
                  } = cE(HH);
                if (console.warn(`${Xh} playable at ${EH} ms on the first view's ${BH} backstop, ${LH}: it wasn't drawn whole in time`), (0, uH.v)("wasm_view_backstop", EH, `${BH}:${LH}`), "long" === BH) {
                  var MH, xH;
                  const BH = null !== (MH = null === (xH = yt) || void 0 === xH ? void 0 : xH.game) && void 0 !== MH ? MH : "";
                  jz = new xA.e((() => {
                    const {
                      cause: LH,
                      census: AH
                    } = cE(HH);
                    (0, SA.reportFirstViewNoTerrain)(BH, LH, AH, Zh), (0, jB.x)("noTerrain")
                  }))
                }
              } else console.info(`${Xh} playable at ${EH} ms${xz?"":" (no renderer)"}`);
              setTimeout(Vz, 0), (0, dB.h)().catch((HH => {
                console.error(`${Xh} item sprites didn't load, so item particles show the missing texture`, HH)
              })), fr.e.warm()
            }(HH), GH && null !== Dt && 0 !== (HH.headerWord(VL.I.LoadSteps) & VL.$.MeshLanded) && (Fz = Dt), (0, lr.i)(null !== Dt && Fz === Dt && nz !== Dt), (0, lr.j)(null !== Dt));
          (0, RL.M)(HH, {
            worldgen: Lt,
            mesh: rt
          }),
          function(HH) {
            HH.forEachEvent(Ar);
            for (const BH of Lr) try {
              (0, JA.e)(BH)
            } catch (WH) {
              if ((0, OL.h)(WH)) {
                HH.crashOn(RL.l, WH);
                break
              }
              console.error(`${pA} an input action listener threw`, WH)
            }
            Lr.length = 0
          }(HH), rH && (0, rL.d)();
          return !HH.isStopped
        }(HH, BH, "all" === AH || SH, rH)
      } finally {
        Kt = SH, SH || (mt = performance.now())
      }
    }

    function fE(HH) {
      console.error(`${Xh} a frame-start listener threw`, HH)
    }

    function lE() {
      var HH, BH, LH, AH;
      null === (HH = Gt) || void 0 === HH || HH.drain(lh, Kh), null === (BH = Mt) || void 0 === BH || BH.drain(lh), null === (LH = xt) || void 0 === LH || LH.drain(performance.now()), Uz(lh), null === (AH = Qt) || void 0 === AH || AH.drain()
    }

    function KE(HH) {
      console.error(`${Xh} a before-frame listener threw`, HH)
    }

    function cE(HH) {
      const BH = (0, DH.i)(),
        LH = (0, DH.r)(),
        AH = null === BH || null === LH ? null : LH.readDrawCensus(BH.api);
      return {
        cause: (0, xA.j)(HH.headerWord(VL.I.LoadSteps), AH),
        census: AH
      }
    }
    const eE = {
      ChunkRequested: "wasm_chunk_requested",
      ChunkStored: "wasm_chunk_stored",
      MeshLanded: "wasm_mesh_landed",
      PlayerChunk: "wasm_player_chunk",
      TerrainDrawn: "wasm_terrain_drawn"
    };

    function qE(HH) {
      var BH;
      if (cz) return;
      if (null === gz && NE() && (gz = performance.now()), null === Dt || 0 === (HH.headerWord(VL.I.LoadSteps) & VL.Y.PlayerBound) ? Rz = null : Rz ??= performance.now(), null === Zt && null === Dt) return;
      null === gz || Nz || (Nz = !0, (0, uH.v)("wasm_startup_loaded", gz));
      let LH = 0;
      null !== Dt ? LH = -1 : !0 === (null === (BH = Ez) || void 0 === BH ? void 0 : BH.activated) && (LH = ~VL.$.TerrainDrawn);
      const AH = HH.headerWord(VL.I.LoadSteps) & LH & ~qz;
      if (0 === AH) return;
      qz |= AH;
      const rH = performance.now();
      for (const [SH, hH] of Object.entries(eE)) 0 !== (AH & VL.$[SH]) && (0, uH.v)(hH, rH)
    }

    function gE() {
      return xz && NE()
    }

    function NE() {
      return vt && RE()
    }

    function RE() {
      return null === Gt || Gt.startupDone
    }

    function jE(HH, BH) {
      const LH = Ht;
      (null === LH || void 0 === LH ? void 0 : LH.conn) === HH ? nE(LH, BH) : Rt++
    }

    function nE(HH, BH) {
      const {
        ws: LH
      } = HH;
      return LH.readyState === WebSocket.OPEN ? (LH.send(BH), !0) : LH.readyState === WebSocket.CONNECTING && HH.pendingBytes + BH.byteLength <= kh ? (HH.pending.push(BH.slice()), HH.pendingBytes += BH.byteLength, !0) : (Rt++, !1)
    }

    function FE() {
      return null !== Dt && gE()
    }

    function DE() {
      var HH, BH, LH, AH, rH, SH, hH, tH, zH, CH, EH, XH, GH, YH, uH, QH, WH;
      pz = !0, wz.stop(), (0, PS.endLookDebugTake)(), bS = null, ZC(), (0, FH.L)().unlockPointer(), (0, FH.J)(null), null === (HH = Xt) || void 0 === HH || HH(), Xt = null, null === (BH = (0, DH.r)()) || void 0 === BH || BH.followCursorAim(null), (0, rL.B)(), (0, DH.f)(), wh.stop(), null === (LH = lz) || void 0 === LH || LH(), lz = null, null === (AH = Kz) || void 0 === AH || AH(), Kz = null, null === (rH = Iz) || void 0 === rH || rH.stop(), Iz = null, (0, vA.s)(null), null === (SH = Bt) || void 0 === SH || SH(), Bt = null, null === (hH = Lt) || void 0 === hH || hH.stop(), Lt = null, null === (tH = rt) || void 0 === tH || tH.stop(), rt = null, null !== (zH = Fh) && void 0 !== zH && null !== (CH = zH.textures) && void 0 !== CH && CH.assets && (0, Nr.l)(null), null === (EH = Fh) || void 0 === EH || EH.stop(), Fh = null, Dh = null;
      const MH = St;
      St = null, MH && (MH.stop(), HX(MH)), null === (XH = Mt) || void 0 === XH || XH.dispose(), Mt = null, null === (GH = xt) || void 0 === GH || GH.dispose(), xt = null, Gt = null, null === (YH = ut) || void 0 === YH || YH(), ut = null, null === (uH = Ct) || void 0 === uH || uH(), Ct = null, null !== ft && (clearTimeout(ft), ft = null), null === (QH = Et) || void 0 === QH || QH.stop(), Et = null, YC(), nr.d.release(), NC();
      const xH = Qt;
      Qt = null;
      try {
        null === xH || void 0 === xH || xH.dispose()
      } catch (vH) {
        console.warn(`${Xh} the sky's images didn't release`, vH)
      }(0, Kr.d)(null), null === (WH = Nh) || void 0 === WH || WH.pagePreviews().endSession(null === (0, cB.q)())
    }

    function wE(HH, BH) {
      var LH, AH;
      const rH = null !== (LH = null === (AH = St) || void 0 === AH ? void 0 : AH.details()) && void 0 !== LH ? LH : {},
        SH = HH.site === Yh || HH.site === uh || HH.site === SA.RENDER_RELOAD_SITE || HH.site === Qh ? HH.error instanceof WebAssembly.RuntimeError || HH.error instanceof KL.e : !(0, gL.n)(HH.error) && (0, RL.G)(HH);
      SH && HH.error instanceof Error && (0, cB.V)(HH.error);
      const hH = SH || HH.site === RL.u ? (0, SA.readTrap)(HH.error) : null,
        tH = null !== hH && (0, kL.f)(hH.kind, hH.refusedBytes) ? hH.refusedBytes : 0,
        zH = (0, BA.k)(),
        CH = null === ht ? (0, mr.r)(function() {
          try {
            return (0, cB.u)().buffer.byteLength
          } catch {
            return 0
          }
        }(), tH, zH) : ht.ceilingMayRefuse(tH, zH),
        EH = tH > 0 && !CH && tE() && !(0, ir.e)() ? (0, BA.o)() : void 0;
      var XH;
      if (DE(), (0, ir.e)()) return dz.releaseNow(), console.warn(`${Xh} the session stopped at ${HH.site} as the page reloads`, HH.error), void((0, gL.n)(HH.error) || (null === (XH = HH.header) || void 0 === XH ? void 0 : XH.lastError) === UL.F.CoreBusy || (0, SA.reportStoppedCore)(HH, BH, hH, {
        memoryDetails: rH,
        memoryStep: EH
      }));
      (0, SA.showCrash)(HH, BH, hH, {
        memoryDetails: rH,
        memoryStep: EH
      })
    }

    function ZE(HH) {
      var BH, LH;
      let {
        text: AH,
        reload: rH,
        stillBlocked: SH
      } = HH;
      if (iz) return;
      iz = !0, (0, XA._)(), null === (BH = Gz) || void 0 === BH || BH.abort(), Gz = null, nr.d.release();
      const hH = az ? null !== (LH = AH.cancel) && void 0 !== LH ? LH : "general:back" : null;
      !async function(HH, BH, LH) {
        let AH = HH;
        for (; await mB(AH) && BH;) {
          if (null === LH || CL(!1) || CL(!0)) return void(0, EB.f)();
          AH = LH
        }
        az && (0, EB.c)("/")
      }({
        ...AH,
        cancel: hH
      }, rH, null === SH ? null : {
        ...SH,
        cancel: hH
      })
    }

    function dE(HH, BH) {
      const LH = performance.now();
      return !(LH - gt[HH] < mh) && (gt[HH] = LH, console.warn(`${Xh} ${BH}`), !0)
    }

    function aE(HH) {
      const {
        input: BH,
        net: LH,
        worker: AH
      } = HH.rings, rH = HH.optionsDropped, SH = BH.dropped + rH + LH.dropped + AH.dropped + Rt;
      SH !== Nt && dE("dropped", `${SH} records dropped so far (input ${BH.dropped}, options ${rH}, net ${LH.dropped}, worker ${AH.dropped}, net-out ${Rt})`) && (Nt = SH)
    }

    function sE() {
      var HH, BH;
      const LH = (0, EA.g)();
      if (null === LH) return null;
      const AH = (0, WA.l)(LH);
      return {
        ...AH,
        horizontal: Math.min(AH.horizontal, null !== (HH = null === (BH = St) || void 0 === BH ? void 0 : BH.shedDistanceInUse()) && void 0 !== HH ? HH : 1 / 0)
      }
    }
    const JE = new WeakSet;

    function iE(HH) {
      var BH, LH;
      return {
        samples: xz ? mz : null,
        sunShadows: HH,
        renderDistance: null !== (BH = null === (LH = sE()) || void 0 === LH ? void 0 : LH.horizontal) && void 0 !== BH ? BH : null
      }
    }

    function pE(HH) {
      dt = HH, (0, XA.O)()
    }

    function yE() {
      var HH, BH, LH;
      const AH = sE();
      return {
        ...null === (HH = St) || void 0 === HH ? void 0 : HH.pageKillSnapshot(),
        renderDistance: null !== (BH = null === AH || void 0 === AH ? void 0 : AH.horizontal) && void 0 !== BH ? BH : null,
        renderDistanceVertical: null !== (LH = null === AH || void 0 === AH ? void 0 : AH.vertical) && void 0 !== LH ? LH : null,
        chunkCap: tt,
        budgetBasis: zt,
        renderBackend: (0, ir.H)(),
        adPreload: st,
        ...(0, GA.c)(dt)
      }
    }

    function HX(HH) {
      var BH;
      console.info(`${Xh} wasm memory at the session's end`, HH.details());
      const {
        wasmMainMiB: LH,
        wasmWorkersMiB: AH,
        peakStoredChunks: rH
      } = HH.pageKillSnapshot(), SH = navigator.deviceMemory;
      (0, jL.logClientMeasurement)("wasm_memory_end", {
        wasmMainMiB: LH,
        wasmWorkersMiB: AH,
        peakStoredChunks: rH
      }, {
        client: "wasm",
        renderBackend: null !== (BH = (0, ir.H)()) && void 0 !== BH ? BH : "none",
        os: (0, YA.getOperatingSystem)(),
        deviceMemory: String(null !== SH && void 0 !== SH ? SH : "unreported")
      })
    }

    function BX(HH, BH) {
      if (!HH.isStopped) try {
        BH()
      } catch (LH) {
        HH.crash(RL.w, LH)
      }
    }

    function LX() {
      return At ??= LH.e(83).then((() => LH(54598))).catch((HH => {
        throw At = null, HH
      })), At
    }
    async function AX() {
      const {
        createWorldgenWorker: HH,
        worldgenWorkerReady: BH
      } = await LX();
      return await BH(), HH
    }

    function rX(HH) {
      var BH;
      null === (BH = At) || void 0 === BH || BH.then(HH, (() => {}))
    }

    function SX() {
      return performance.now() - Math.max(mt, ot) >= oh
    }

    function hX(HH) {
      const BH = document.hidden || It ? "all" : "budget";
      It = !0;
      const LH = IE(HH, !1, BH);
      var AH;
      LH && (aE(HH), null === (AH = St) || void 0 === AH || AH.afterFrame());
      return LH
    }

    function tX(HH) {
      HH.isStopped || 0 === HH.rings.net.cursor || SX() && !hX(HH) || HH.rings.net.cursor > 0 && performance.now() - ot >= oh / 2 && function(HH) {
        ft ??= setTimeout((() => {
          ft = null, tX(HH)
        }), oh)
      }(HH)
    }

    function zX(HH, BH) {
      return async function(HH, BH, LH) {
        let {
          stop: AH,
          stillWanted: rH,
          beforeReload: SH
        } = LH;
        const hH = await (0, Yr.k)(HH, {
          stillWanted: rH,
          beforeReload: async () => {
            AH(), await Promise.all([(0, SA.flushCrashReports)(EB.b), null === SH || void 0 === SH ? void 0 : SH()])
          },
          reload: EB.f
        });
        return hH || BH(), hH
      }(HH, BH, {
        ...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        stop: DE
      })
    }
    let CX = !1;

    function EX() {
      return CX = !0, async function(HH, BH, AH) {
        const {
          gamePackSource: rH
        } = await LH.e(124).then((() => LH(42361)));
        await ME.packStep(HH, ((LH, AH) => LH.packForGame(HH, rH(BH), AH)), AH)
      }(...arguments)
    }

    function XX(HH) {
      ! function(HH, BH) {
        HH((HH => {
          null === HH || void 0 === HH || HH.subscribe((HH => {
            let {
              pack: LH,
              gameSource: AH
            } = HH;
            BH(null === AH || null === LH ? null : {
              pack: LH,
              source: "" === AH ? null : AH
            })
          }))
        }))
      }(uE, HH)
    }
    let GX = !1,
      YX = null,
      uX = !1,
      QX = !1;

    function WX() {
      var HH;
      GX || (GX = !0, bB = (HH, BH) => (0, WB.u)(MB.g.get().getCurrentLanguageCode(), HH, BH), SC("play", zB), (0, GH.l)(new oX), tH.gameBridge.attach(pH), UX().catch((() => {})), (0, DH.v)((HH => {
        PB(HH.setTextHost)
      })), HH = vX, Yz.add(HH), function(HH) {
        for (const BH of Tt) HH(BH);
        Ut.add(HH)
      }((HH => {
        xX(MX[HH])
      })))
    }
    const MX = {
      booted: SH.h.INITIALISE_NOA,
      texturesIn: SH.h.REGISTRATION,
      modelsIn: SH.h.SETUP_LIFEFORMS
    };

    function xX(HH) {
      zH.k.AX("matchmakeAndPlayStepCompleted", {
        step: HH,
        totalSubSteps: 1
      })
    }

    function vX(HH) {
      if (!uX) return;
      const {
        gameNameWithVariation: BH,
        lobbyName: LH
      } = (0, GH.c)();
      if (HH.code === AH.e.serverUpdating.code) return (new oX).leaveLive(), void TX(BH, LH);
      gH.d.leftGame(BH, HH.code), zH.k.AX("unwantedLeftGame", {
        reason: PX(HH),
        requiresRefresh: HH.requiresRefresh,
        canReconnect: null !== HH.reconnect,
        automaticallyReconnect: HH.reconnecting,
        canPlayAgain: HH.canPlayAgain,
        gameNameWithVariation: BH,
        lobbyName: LH
      }), (new oX).leaveLive()
    }

    function PX(HH) {
      return null !== HH.reasonKey ? {
        translationKey: HH.reasonKey
      } : "gameOrPluginKick" === HH.name ? (0, oB.e)(HH.reason) : `You have disconnected from the server.\n${HH.reason}`
    }

    function TX(HH, BH) {
      var AH;
      AH = (0, CH.z)(HH, BH), Promise.resolve().then((() => LH(1509))).then((HH => {
        let {
          navigatePreserveSearch: BH
        } = HH;
        BH(AH)
      })).catch((HH => {
        console.warn("[bloxd-wasm-client] the page's router didn't navigate: loading the page instead", HH), (0, EB.c)(AH)
      }))
    }

    function UX() {
      return YX ??= Promise.all([LH.e(84), LH.e(87), LH.e(85), LH.e(86), LH.e(103), LH.e(100), LH.e(300), LH.e(207), LH.e(250), LH.e(274), LH.e(244), LH.e(54)]).then((() => LH(42318))).then((HH => {
        try {
          HH.attachPlayGameSources()
        } catch (BH) {
          throw console.error("[bloxd-wasm-client] the play sources did not attach", BH),
            function(HH) {
              Jh.then((BH => {
                null === BH || BH.isStopped || pz ? console.warn(`${Xh} the play sources threw as they attached, after the client stopped`, HH) : wE({
                  site: Qh,
                  error: HH,
                  header: null
                }, Zh)
              }))
            }(BH), BH
        }
      }), (HH => {
        throw YX = null, new DH.d(HH)
      })), YX
    }
    async function VX(HH, BH) {
      WX(), CX = !0, uX = !0;
      let LH = {
          place: HH.place,
          matchedAt: HH.matchedAt
        },
        hH = HH.place.gameNameWithVariation;
      const tH = (0, XH.e)();
      let zH = null;
      const CH = await CC({
        matchmake: async () => {
          let BH = LH;
          if (LH = null, null === BH) {
            const LH = await HH.rematch();
            if (LH.isError()) throw zH = LH.asError().forward(), new Error(LH.asError().message);
            BH = {
              place: LH.getValue(),
              matchedAt: performance.now()
            }
          }
          hH = BH.place.gameNameWithVariation;
          return {
            target: await (0, LB.e)(HH.userContext, BH.place, QE(), tH),
            matchedAt: BH.matchedAt,
            freshMs: LB.d
          }
        },
        pageReady: UX,
        onFailure: (HH, BH) => {
          null === zH && function(HH, BH) {
            (0, SA.reportPageJoinFailure)(HH, Zh, BH)
          }(HH, {
            sinceJoinStartMs: BH,
            game: hH
          })
        },
        rejoin: () => () => {},
        invalidateTrafficCode: () => HH.userContext.invalidateTrafficCode(),
        signal: BH
      });
      switch (CH.kind) {
        case "joined":
          if (tH) {
            setTimeout((() => {
              KH.ready()
            }), 0);
            const {
              game: HH
            } = CH;
            (0, XH.o)((() => {
              HH.endJoinAd() && ((0, uH.q)(), KH.adEnded())
            }))
          }
          return QX || (QX = !0, (0, eH.c)()), uX ? (xX(SH.h.CONNECT_TO_GAME_SERVER), xX(SH.h.SHADER_PACK), function() {
            var HH, BH;
            return null !== (HH = null === (BH = Pt) || void 0 === BH ? void 0 : BH.runsInJoinedGame()) && void 0 !== HH && HH
          }() && (0, cH.g)(HH.userContext, hH).catch((HH => {
            console.error("Failed to report the shader pack session", HH)
          })), function() {
            const HH = function() {
              var HH, BH;
              return null !== (HH = null === (BH = Pt) || void 0 === BH ? void 0 : BH.couldntRunInJoinedGame()) && void 0 !== HH ? HH : null
            }();
            null !== HH && (0, cH.d)(HH)
          }(), rH.e.value(void 0)) : mX("The server ended the game as it joined");
        case "failed":
          if (!CH.reloading) {
            if (null !== zH) return zH;
            if ((CH.error instanceof HB.n || CH.error instanceof HB.d) && CH.error.code === AH.e.serverUpdating.code) {
              if (BH.aborted) return mX("Left the game while it loaded");
              const {
                gameNameWithVariation: HH,
                lobbyName: LH
              } = (0, GH.c)();
              return TX(HH, LH), mX("The server is updating")
            }
            return CH.error instanceof CB.c ? rH.e.errorWithCode(CH.error.messageKey, SH.h.SHADER_PACK, {
              severity: "medium"
            }) : rH.e.errorWithCode(function(HH) {
              if (HH instanceof HB.y || HH instanceof jH.c) return HH.message;
              if (OX(HH)) return (0, yH.p)(HH.code, HH.serverText);
              return yH.h
            }(CH.error), SH.h.CONNECT_TO_GAME_SERVER, {
              error: bX(CH.error) ? CH.error : void 0,
              severity: kX(CH.error),
              gameServerUnreachable: (0, BB.e)(CH.error),
              joinFailure: (0, BB.k)(CH.error),
              rematch: (0, NH.e)(CH.error),
              gameRefused: (0, RH.d)(CH.error)
            })
          }
          return mX("Reloading into the new build");
        case "stopped":
          return mX("The game client stopped, and shows why");
        case "xB":
          return mX("Left the game while it loaded")
      }
    }

    function OX(HH) {
      return HH instanceof HB.n || HH instanceof HB.d && "attach" !== HH.stage
    }

    function bX(HH) {
      return !(HH instanceof HB.y) && !OX(HH) && void 0 === (0, BB.e)(HH)
    }

    function kX(HH) {
      return OX(HH) ? HH instanceof HB.d && (0, yH.l)(HH.code).requiresRefresh ? "medium" : "low" : bX(HH) || HH instanceof HB.y ? "medium" : "low"
    }

    function mX(HH) {
      return rH.e.errorWithCode(HH, SH.h.CONNECT_TO_GAME_SERVER, {
        severity: "low",
        xB: !0
      })
    }
    class oX {
      leave(HH) {
        if ((0, nH.c)()) {
          var BH, LH;
          if ((0, hH.e)()) return;
          (0, YH.e)(!0 === (null === (BH = (0, nH.n)()) || void 0 === BH || null === (LH = BH.currentViewer) || void 0 === LH ? void 0 : LH.unsavedChanges), HH)
        } else this.leaveLive()
      }
      leaveLive() {
        var HH;
        CX && (null === (HH = QE()) || void 0 === HH || HH.endGamePack());
        if (!uX) return;
        uX = !1, (0, qH.g)();
        try {
          var BH;
          null === (BH = (0, DH.r)()) || void 0 === BH || BH.clearWasmCameraScreen()
        } catch (AH) {
          console.error("[bloxd-wasm-client] the camera screen didn't clear", AH)
        }
        const {
          gameNameWithVariation: LH
        } = (0, GH.c)();
        try {
          vC()
        } finally {
          (0, GH.p)({
            websocketUrl: null
          }), zH.k.AX("leaveGame", {
            gameNameWithVariation: LH
          }), (0, EH.O)()
        }
      }
      isReplay() {
        return (0, nH.c)()
      }
    }
  },
  42256: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => rH,
      f: () => AH,
      j: () => tH,
      m: () => hH
    });
    const AH = 12e4,
      rH = 3e4,
      SH = {
        hidden: () => "undefined" !== typeof document && document.hidden,
        listen: HH => "undefined" === typeof document ? () => {} : (document.addEventListener("visibilitychange", HH), () => {
          document.removeEventListener("visibilitychange", HH)
        })
      };

    function hH(HH) {
      return `it sent no start within ${Math.round(HH)} ms`
    }
    class tH {
      constructor(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => performance.now(),
          AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : SH;
        this.timeoutMs = HH, this.onTimeout = BH, this.now = LH, this.visibility = AH, this.timer = null, this.counted = 0, this.step = null, this.unlisten = void 0, this.unlisten = AH.listen((() => {
          this.onVisibility()
        })), AH.hidden() || this.next()
      }
      cancel() {
        this.pause(), this.unlisten()
      }
      onVisibility() {
        this.visibility.hidden() ? (this.counted += this.credit(), this.pause()) : null === this.timer && this.next()
      }
      credit() {
        const HH = this.step;
        return null === HH ? 0 : Math.min(this.now() - HH.at, HH.ms)
      }
      pause() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null), this.step = null
      }
      next() {
        const HH = this.timeoutMs - this.counted;
        if (HH <= 0) return void this.arm(1e3, (() => {
          this.cancel(), this.onTimeout(this.counted)
        }));
        const BH = Math.min(HH, 5e3);
        this.step = {
          at: this.now(),
          ms: BH
        }, this.arm(BH, (() => {
          this.counted += this.credit(), this.step = null, this.next()
        }))
      }
      arm(HH, BH) {
        this.timer = setTimeout((() => {
          this.timer = null, BH()
        }), HH)
      }
    }
  },
  40696: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => tH
    });
    var AH = LH(317),
      rH = LH(1005);
    const SH = new Set(["bingo", "buildAFactory2", "classic", "greenville", "testGym"]),
      hH = new Set(["creativeFlat", "skyGrid"]);

    function tH(HH) {
      const BH = (0, AH.Wb)(HH);
      return "greenville" === BH ? !(0, AH.Ob)(HH) : "classic" !== BH ? SH.has(BH) : !(0, rH.l)(HH) && !hH.has((0, AH.Ob)(HH))
    }
  },
  38585: (HH, BH, LH) => {
    function AH(HH) {
      return "string" !== typeof HH || 2 !== HH.length && ":" !== HH[2] ? null : HH[0] + HH[1]
    }
    LH.d(BH, {
      d: () => WH,
      f: () => UH,
      g: () => TH,
      j: () => VH,
      m: () => tH,
      n: () => hH,
      r: () => SH,
      s: () => zH,
      u: () => MH,
      x: () => QH
    });
    const rH = ["op:ytInitialPlayerResponse.adPlacements", "op:ytInitialPlayerResponse.playerAds", "op:ytInitialPlayerResponse.adSlots", "op:playerResponse.adPlacements", "op:playerResponse.playerAds", "op:playerResponse.adSlots"];

    function SH(HH) {
      if (function(HH) {
          for (let BH = 0; BH < rH.length; BH++)
            if (HH === rH[BH]) return !0;
          return !1
        }(HH)) return !1;
      const BH = AH(HH);
      return "op" === BH || "ep" === BH || "wi" === BH || "pp" === BH || "fp:call" === HH || "fp:t" === HH
    }

    function hH(HH) {
      return "fp" === AH(HH) && !SH(HH)
    }

    function tH(HH) {
      if ("string" !== typeof HH) return !1;
      return "o" === HH[0] && "p" === HH[1] && (2 === HH.length || ":" === HH[2]) || "fp:call" === HH || "2" === HH || "t" === HH || "a" === HH
    }

    function zH(HH, BH) {
      return `~${function(HH){return HH.length<2?HH:":"===HH[1]?HH[0]:HH[0]+HH[1]}(BH)}~${HH}`
    }
    const CH = 200;

    function EH(HH) {
      let BH = HH.length - 1;
      for (let LH = 0; LH < 2; LH++) {
        const LH = BH;
        for (; BH >= 0 && HH[BH] >= "0" && HH[BH] <= "9";) BH--;
        if (BH < 0 || BH === LH || ":" !== HH[BH]) return -1;
        BH--
      }
      return BH + 1
    }

    function XH(HH) {
      return "unknown" === HH || EH(HH) >= 0
    }

    function GH(HH, BH) {
      return HH[BH] >= "\ud800" && HH[BH] <= "\udbff" && BH + 1 < HH.length && HH[BH + 1] >= "\udc00" && HH[BH + 1] <= "\udfff" ? 2 : 1
    }

    function YH(HH, BH, LH) {
      return 2 === LH ? 4 : HH[BH] <= "\x7f" ? 1 : HH[BH] <= "\u07ff" ? 2 : 3
    }

    function uH(HH, BH, LH) {
      let AH = 0;
      for (; AH < BH;) {
        const BH = GH(HH, AH),
          rH = YH(HH, AH, BH);
        if (rH > LH) break;
        LH -= rH, AH += BH
      }
      return AH
    }

    function QH(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
      if ("string" !== typeof HH || HH.length > CH || !XH(HH)) return "t";
      let LH = 2;
      for (let tH = 0; tH < HH.length;) {
        const BH = GH(HH, tH);
        LH += YH(HH, tH, BH), tH += BH
      }
      if (LH <= BH) return `t ${HH}`;
      const AH = EH(HH),
        rH = BH - 2 - (HH.length - AH);
      if (rH < 0) return "t";
      const SH = uH(HH, AH, rH);
      let hH = "t ";
      for (let tH = 0; tH < SH; tH++) hH += HH[tH];
      for (let tH = AH; tH < HH.length; tH++) hH += HH[tH];
      return hH
    }
    const WH = 62;

    function MH(HH) {
      let BH = "so:";
      const LH = uH(HH, HH.length, WH - BH.length);
      for (let AH = 0; AH < LH; AH++) BH += HH[AH];
      return BH
    }
    const xH = "BABYLON ",
      vH = "DECODE ",
      PH = "BABYLON@ ";

    function TH(HH) {
      return MH(xH + HH)
    }

    function UH(HH, BH) {
      return MH(PH + HH + " " + BH)
    }

    function VH(HH) {
      return MH(vH + HH)
    }
  },
  42158: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => AH
    });
    const AH = {
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
  38857: HH => {
    HH.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v+LFy8yvH//noGXl/ccuq8A/vQKd00yOdIAAAAASUVORK5CYII="
  },
  38846: HH => {
    HH.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMnBzczN8/PjxHLLPAORwCnfkvOdNAAAAAElFTkSuQmCC"
  },
  38861: HH => {
    HH.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  38841: HH => {
    HH.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAANUlEQVQYGWM8CwQMeAATHjmw1JBQAHLp/wMHDvy/ePHi/4CAgP937tz5Ly6u+5/P3uw/KAgAgjwWhHm22JoAAAAASUVORK5CYII="
  },
  38853: HH => {
    HH.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAKUlEQVQYGWM8CwQMeAATHjmw1JBQwAh06v8DBw4wCAoKMvz58+ccuq8A8vQKd2AxC9MAAAAASUVORK5CYII="
  },
  39649: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => SH
    });
    var AH = LH(3168);
    const rH = ["none", "idle", "now"];

    function SH() {
      const HH = () => (0, AH.D)();
      return {
        memoryBytes: () => (0, AH.u)().buffer.byteLength,
        reserveUpFront: BH => HH().HE(BH),
        reserveAhead: BH => HH().EC(BH),
        setCeiling: BH => {
          HH().BE(BH)
        },
        lowWater: () => rH[HH().AC()] ?? "none",
        stats: () => function(HH) {
          const BH = new Uint32Array((0, AH.u)().buffer, HH, 17),
            LH = HH => BH[HH] ?? 0,
            rH = HH => ({
              upFront: LH(HH),
              ahead: LH(HH + 1),
              onDemandInFrame: LH(HH + 2),
              onDemand: LH(HH + 3)
            });
          return {
            memoryBytes: LH(0),
            initialBytes: LH(1),
            liveBytes: LH(2),
            peakLiveBytes: LH(3),
            headroomBytes: LH(4),
            unusedBytes: LH(5),
            ceilingBytes: LH(6),
            reservesRefused: LH(7),
            grows: rH(8),
            grownBytes: rH(12),
            allocationsRefused: LH(16)
          }
        }(HH().eX()),
        takeBallast: () => HH().qX(),
        takePressure: () => HH().gX()
      }
    }
  },
  5531: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => tH,
      d: () => hH,
      e: () => AH,
      f: () => QH,
      j: () => XH,
      l: () => rH,
      n: () => SH,
      q: () => CH,
      t: () => EH,
      u: () => GH
    });
    const AH = 5;

    function rH(HH) {
      return HH === AH
    }

    function SH(HH) {
      return [...HH.features]
    }
    const hH = 262144,
      tH = 256,
      zH = 256;

    function CH(HH) {
      if ("object" !== typeof HH || null === HH || Array.isArray(HH)) return "The pack has no files.";
      const BH = [];
      for (const [LH, AH] of Object.entries(HH)) {
        if ("string" !== typeof AH) return `${LH} isn't text.`;
        BH.push({
          path: LH,
          source: AH
        })
      }
      return BH.sort(((HH, BH) => XH(HH.path, BH.path))),
        function(HH) {
          if (0 === HH.length) return "The pack has no .wgsl files.";
          if (HH.length > tH) return `The pack has more than ${tH} .wgsl files.`;
          const BH = new Set;
          for (const {
              path: LH
            }
            of HH) {
            const HH = YH(LH);
            if (null !== HH) return HH;
            if (BH.has(LH)) return `The pack has two files at ${LH}.`;
            BH.add(LH)
          }
          return GH(HH) > hH ? `The pack's .wgsl files are over ${hH/1024} KB in total.` : null
        }(BH) ?? BH
    }

    function EH(HH) {
      const BH = {};
      for (const LH of HH) BH[LH.path] = LH.source;
      return BH
    }

    function XH(HH, BH) {
      return HH < BH ? -1 : HH > BH ? 1 : 0
    }

    function GH(HH) {
      const BH = new TextEncoder;
      let LH = 0;
      for (const {
          source: AH
        }
        of HH) LH += BH.encode(AH).byteLength;
      return LH
    }

    function YH(HH) {
      if (!HH.toLowerCase().endsWith(".wgsl")) return `${HH} isn't a .wgsl file.`;
      if (HH.length > zH) return `A file path is over ${zH} characters.`;
      if (HH.includes("\\") || /[\u0000-\u001f]/.test(HH)) return `${HH} isn't a valid file path.`;
      return HH.split("/").some((HH => "" === HH || "." === HH || ".." === HH)) ? `${HH} isn't a valid file path.` : null
    }
    const uH = /^(.*)\[rot\[([1-4])$/;

    function QH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const AH = new Map;
      BH.forEach(((HH, BH) => {
        let {
          numAnimStates: LH,
          animStartIdx: rH
        } = HH;
        for (let SH = 1; SH < LH; SH++) AH.set(rH + SH - 1, BH)
      }));
      const rH = Object.entries(HH),
        SH = new Map;
      for (const [QH, WH] of rH) {
        const HH = uH.exec(QH);
        "1" === HH?.[2] && SH.set(HH[1], WH + 1)
      }
      const hH = HH => {
          const BH = uH.exec(HH);
          return BH && SH.has(BH[1]) ? {
            root: BH[1],
            rotation: Number(BH[2]) - 1
          } : null
        },
        tH = new Set(rH.map((HH => {
          let [BH] = HH;
          return hH(BH)?.root ?? BH
        }))),
        zH = (HH, LH) => {
          const AH = HH.replace(/_?0$/, "");
          return (BH[LH]?.numAnimStates ?? 0) > 1 && !tH.has(AH) ? AH : HH
        },
        CH = new Map;
      for (const [uH, QH] of rH) CH.set(QH, zH(hH(uH)?.root ?? uH, QH));
      const EH = rH.reduce(((HH, BH) => {
          let [, LH] = BH;
          return Math.max(HH, LH + 1)
        }), 0),
        XH = Array.from({
          length: EH
        }, ((HH, BH) => ({
          id: BH + 1,
          rotation: 0
        }))),
        GH = new Map,
        YH = new Map;
      for (const [uH, QH] of rH) {
        const HH = hH(uH),
          BH = AH.get(QH);
        if (void 0 !== BH) {
          const LH = CH.get(BH);
          YH.set(uH, {
            name: uH,
            texture: LH,
            kind: "frame"
          }), HH && !YH.has(HH.root) && YH.set(HH.root, {
            name: HH.root,
            texture: LH,
            kind: "frame"
          });
          continue
        }
        const LH = CH.get(QH),
          rH = HH?.root ?? uH;
        if (LH !== rH && YH.set(rH, {
            name: rH,
            texture: LH,
            kind: "frame"
          }), HH) {
          const BH = SH.get(HH.root);
          XH[QH] = {
            id: BH,
            rotation: HH.rotation
          }, GH.set(LH, BH), YH.set(uH, {
            name: uH,
            texture: LH,
            kind: "rotation"
          })
        } else GH.set(LH, QH + 1)
      }
      for (const uH of GH.keys()) YH.delete(uH);
      for (const [uH, QH] of LH) {
        const HH = GH.get(QH);
        void 0 === HH || GH.has(uH) || (GH.set(uH, HH), YH.delete(uH))
      }
      return {
        named: [...GH].sort(((HH, BH) => {
          let [LH] = HH, [AH] = BH;
          return LH < AH ? -1 : LH > AH ? 1 : 0
        })).map((HH => {
          let [BH, LH] = HH;
          return {
            name: BH,
            id: LH
          }
        })),
        aliases: [...YH.values()],
        layers: XH
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);