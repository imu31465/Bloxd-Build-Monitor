export const id = 71;
export const ids = [71];
export const modules = {
  40108: (HH, BH, LH) => {
    function AH(HH) {
      return void 0 === HH ? void 0 : [HH[0], HH[1], HH[2]]
    }

    function rH(HH) {
      const BH = HH.particles;
      return {
        opts: {
          texture: BH.texture,
          aX: BH.aX,
          minLifeTime: BH.minLifeTime,
          maxLifeTime: BH.maxLifeTime,
          minSize: BH.minSize,
          maxSize: BH.maxSize,
          minEmitPower: BH.minEmitPower,
          maxEmitPower: BH.maxEmitPower,
          emitRate: BH.emitRate,
          gravity: AH(BH.gravity),
          dir1: AH(BH.dir1),
          dir2: AH(BH.dir2),
          colorGradients: BH.colorGradients,
          blendMode: BH.blendMode
        },
        half: [BH.width / 2, BH.height / 2, BH.depth / 2]
      }
    }
    LH.d(BH, {
      b: () => rH
    })
  },
  40066: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => SH,
      d: () => CH,
      h: () => zH,
      i: () => hH
    });
    var AH = LH(186);
    const rH = JSON.parse('{"aura_snowfall":{"offset":[0,2.6,0],"ownInFirstPerson":true,"particles":{"blendMode":1,"capacity":64,"colorGradients":[{"minColor":[255,255,255,0.9],"timeFraction":0},{"minColor":[255,255,255,0],"timeFraction":1}],"depth":3,"dir1":[-0.2,-1,-0.2],"dir2":[0.2,-1,0.2],"emitRate":12,"gravity":[0,-1.5,0],"height":0.2,"maxEmitPower":0.6,"maxLifeTime":2.5,"maxSize":0.15,"minEmitPower":0.3,"minLifeTime":1.5,"minSize":0.08,"texture":"snowflake","width":3}}}'),
      SH = "PetRoot";
    let hH = JSON.parse('{"pet_reindeer":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0},"pet_reindeer2":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0}}'),
      tH = rH;
    new Map, new Map;

    function zH(HH) {
      var BH;
      return null !== (BH = (0, AH.d)(hH, HH)) && void 0 !== BH ? BH : null
    }

    function CH(HH) {
      var BH;
      return null !== (BH = (0, AH.d)(tH, HH)) && void 0 !== BH ? BH : null
    }
  },
  39550: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => rH,
      e: () => SH
    });
    const AH = new WeakMap;

    function rH(HH, BH) {
      return AH.set(HH, BH), HH
    }

    function SH(HH) {
      var BH;
      return null !== (BH = AH.get(HH)) && void 0 !== BH ? BH : null
    }
  },
  37105: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => SH
    });
    const AH = 4e5,
      rH = 2;

    function SH(HH, BH, LH) {
      let [SH, hH] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [HH, BH], tH = Math.min(Number.isFinite(LH) && LH > 0 ? LH : 1, rH);
      const zH = Math.max(0, SH, HH) * Math.max(0, hH, BH) * tH * tH;
      return zH > AH && (tH *= Math.sqrt(AH / zH)), [Math.max(1, Math.floor(Math.max(0, HH) * tH)), Math.max(1, Math.floor(Math.max(0, BH) * tH))]
    }
  },
  54528: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      WasmPreviewHost: () => cB,
      pageBuiltInAnimationPack: () => GH,
      pagePreviews: () => hB,
      previewModule: () => pH
    });
    var AH = LH(3171),
      rH = LH(625);
    const SH = "[bloxd-wasm-client]";

    function hH(HH) {
      const BH = {
        wasm: "unknown",
        client: String(rH.d)
      };
      try {
        var LH;
        BH.wasm = null !== (LH = null === HH || void 0 === HH ? void 0 : HH.wX()) && void 0 !== LH ? LH : BH.wasm
      } catch {}
      return BH
    }
    async function tH(HH) {
      if (HH.length < 2 || 31 !== HH[0] || 139 !== HH[1]) return HH;
      if ("undefined" === typeof DecompressionStream) {
        const {
          ungzip: BH
        } = await Promise.resolve().then((() => LH(3112)));
        return BH(HH)
      }
      const BH = new Blob([HH]).stream().pipeThrough(new DecompressionStream("gzip"));
      return new Uint8Array(await new Response(BH).arrayBuffer())
    }

    function zH(HH, BH, AH, rH) {
      Promise.resolve().then((() => LH(42075))).then((LH => {
        let {
          reportDataLoadFailure: SH
        } = LH;
        SH(HH, BH, AH, rH)
      }), (BH => {
        console.warn(`${SH} ${HH} didn't load, and the report couldn't be sent`, AH.error, BH)
      }))
    }
    const CH = [3e4, 12e4, 3e5];
    class EH {
      constructor(HH) {
        this.deps = HH, this.loading = null, this.reported = !1, this.retries = 0, this.resolveSet = () => {}, this.set = new Promise((HH => {
          this.resolveSet = HH
        }))
      }
      provide(HH) {
        return this.loading ??= this.load(HH), this.loading
      }
      whenSet() {
        return this.set
      }
      async load(HH) {
        const BH = hH(HH),
          LH = await async function(HH, BH) {
            let LH;
            try {
              LH = await HH()
            } catch (AH) {
              return {
                stage: "fetch",
                error: AH
              }
            }
            try {
              return BH(LH) ? null : {
                stage: "decode",
                error: null
              }
            } catch (AH) {
              return {
                stage: "decode",
                error: AH
              }
            }
          }((() => this.deps.fetch()), (BH => {
            const LH = HH.VhH(BH);
            return LH && this.resolveSet(BH), LH
          }));
        if (null !== LH) {
          if ("fetch" === LH.stage) {
            this.loading = null;
            const BH = CH[this.retries++];
            void 0 !== BH && this.deps.later((() => {
              this.provide(HH)
            }), BH)
          }
          this.reported || (this.reported = !0, this.deps.onFailed(LH, BH))
        }
      }
    }
    let XH = null;

    function GH() {
      return XH ??= new EH({
        fetch: async () => tH(await (0, AH.M)(YH(), {
          priority: "low"
        })),
        onFailed: (HH, BH) => {
          zH("builtInAnimations", YH(), HH, BH)
        },
        later: (HH, BH) => {
          setTimeout(HH, BH)
        }
      }), XH
    }

    function YH() {
      return LH(54537)
    }
    var uH = LH(3168),
      QH = LH(1131),
      WH = LH(297),
      MH = LH(293),
      xH = LH(642),
      vH = LH(5265),
      PH = LH(42034),
      TH = LH(42060),
      UH = LH(42259),
      VH = (LH(42101), LH(37100)),
      OH = LH(42117),
      bH = LH(42125),
      kH = LH(42129),
      mH = LH(42049),
      oH = LH(42275),
      IH = LH(42281),
      fH = LH(42032),
      lH = LH(42295),
      KH = LH(42163),
      cH = LH(42150),
      eH = LH(42200),
      qH = LH(42271),
      gH = LH(37110),
      NH = LH(37037),
      RH = LH(4074),
      jH = LH(37105);
    const nH = "[bloxd-previews]",
      FH = 0,
      DH = 1,
      wH = 2,
      ZH = 1,
      dH = 2,
      aH = 3,
      sH = 0,
      JH = 1,
      iH = 2;

    function pH(HH) {
      const BH = HH,
        LH = (0, PH.M)(HH),
        AH = (0, PH.j)(HH);
      return null !== LH && null !== AH && "function" === typeof BH.PhH && "function" === typeof BH.ThH && "function" === typeof BH.UhH ? BH : null
    }

    function yH() {
      return LH(54541)
    }
    async function HB(HH, BH, AH) {
      var rH;
      let SH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      "lost" === HH && (0, fH.w)();
      const tH = await (0, fH.R)();
      if (null === tH || (0, PH.k)(tH) || (0, fH.e)()) return;
      const zH = "webgpu" === tH.backend;
      if (!zH && "lost" !== HH) return;
      const CH = zH && (0, MH.q)(tH.adapter, null !== AH && void 0 !== AH ? AH : null, "lost" === HH, SH),
        EH = null !== (rH = "lost" === HH ? (0, TH.i)((0, uH.U)() ? (0, PH.M)((0, uH.D)()) : null) : void 0) && void 0 !== rH ? rH : BH,
        XH = zH ? (0, PH.X)(HH, void 0, (0, TH.c)(EH)) : (0, xH.v)() ? null : xH.f;
      if (null === XH) {
        (0, fH.q)();
        try {
          await async function(HH, BH, AH, rH, SH) {
            let {
              restoreLost: tH,
              adapterRemembered: zH
            } = SH;
            const CH = (0, uH.U)(),
              {
                flushCrashReports: EH,
                reportRenderReload: XH
              } = await Promise.resolve().then((() => LH(42075)));
            XH(HH.backend, rH, hH(CH ? (0, uH.D)() : null), {
              from: "home",
              cause: BH,
              restoreLost: tH,
              adapterRemembered: zH,
              ...BB(HH, BH, AH)
            }), await EH(KH.b)
          }(tH, HH, EH, null !== AH && void 0 !== AH ? AH : "start_failed" === HH ? 0 : 1, {
            restoreLost: SH,
            adapterRemembered: CH
          })
        } catch (YH) {
          console.warn(`${nH} ${tH.backend} failed at home (${HH}), and its report couldn't be sent`, YH)
        }(0, KH.f)()
      } else {
        var GH;
        const BH = BB(tH, HH, EH),
          AH = `${zH?"WebGPU":"WebGL"} failed at home (${HH}${void 0===BH.error?"":`: ${BH.error instanceof Error?BH.error.message:(0,NH.k)(BH.error)}`}) and ${XH}`;
        console.warn(`${nH} ${AH}: the previews stop`, null !== (GH = BH.error) && void 0 !== GH ? GH : ""), (0, fH.u)({
          why: AH,
          webgpu: zH
        });
        try {
          const {
            countRenderLost: AH
          } = await Promise.resolve().then((() => LH(42075)));
          AH(HH, BH.error, BH.context)
        } catch (QH) {
          console.warn(`${nH} ${tH.backend} failed at home (${HH}), and its count couldn't be sent`, QH)
        }
      }
    }

    function BB(HH, BH, LH) {
      let {
        adapter: AH
      } = HH;
      return {
        error: LH,
        context: {
          adapter: AH,
          boundAtMs: "start_failed" === BH ? null : (0, fH.N)(),
          indirectHangs: (0, fH.z)(),
          restoresSkipped: (0, fH.Q)()
        }
      }
    }
    async function LB() {
      if (!(0, uH.U)()) {
        const HH = await (0, fH.R)();
        if (null === HH || (0, PH.k)(HH)) return null;
        if (await (0, lH.d)(await HH.load()), !(0, uH.U)()) return null
      }
      return pH((0, uH.D)())
    }
    class AB {
      constructor(HH, BH, LH, AH, rH, SH) {
        this.page = HH, this.host = BH, this.id = LH, this.canvas = AH, this.size = rH, this.models = void 0, this.images = void 0, this.write = void 0, this.outcomes = [], this.closed = !1, this.quiet = 0, this.settled = [];
        const hH = {
            ...SH.images,
            glbUrl: HH => {
              var BH;
              return null !== (BH = this.models.drawnUrl(HH)) && void 0 !== BH ? BH : SH.images.glbUrl(HH)
            }
          },
          tH = BH => HH.modelFile(BH);
        this.images = new UH.f(hH, (HH => {
          console.warn(`${nH} image ${HH.key.kind}:${HH.key.index}:${HH.key.word} failed`, HH.error)
        }), {
          fetchFile: tH,
          fetchImage: BH => HH.imageFile(BH)
        }), HH.startModels(), this.models = new OH.k(SH.files, ((BH, LH) => HH.buildModel(BH, LH)), (HH => {
          console.warn(`${nH} model file ${HH.file} (${HH.url}) failed`, HH.error)
        }), {
          fetchFile: tH,
          onWritten: (HH, BH) => {
            this.images.glbWritten(HH, BH)
          },
          onTaken: (HH, BH) => {
            this.images.glbTaken(HH, BH)
          }
        }), this.write = (HH, BH, LH) => {
          if (this.closed) return !0;
          if (HH === OH.d) {
            const HH = new DataView(LH.buffer, LH.byteOffset, kH.b),
              AH = HH.getUint32(0, !0),
              rH = HH.getUint32(kH.f, !0),
              SH = this.page.hostCall(iH, (() => this.host.otH(this.id, AH, BH, LH.subarray(kH.b))));
            return this.outcomes.push([rH, SH]), !0
          }
          return HH === UH.d && (this.page.hostCall(void 0, (() => {
            this.host.ftH(this.id, LH)
          })), !0)
        }
      }
      get isClosed() {
        return this.closed
      }
      get isStopped() {
        return this.page.isStopped
      }
      resize(HH, BH, LH) {
        if (this.closed) return;
        const [AH, rH] = (0, jH.e)(HH, BH, this.page.dpr(), LH);
        AH === this.size[0] && rH === this.size[1] || (this.size = [AH, rH], this.page.hostCall(void 0, (() => {
          this.host.resize(this.id, AH, rH)
        })))
      }
      setMob(HH, BH, LH, AH) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.gtH(this.id, HH, BH, LH, AH))))
      }
      setPet(HH, BH, LH, AH) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.RtH(this.id, HH, BH, LH, AH))))
      }
      setPlayer(HH, BH, LH) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.ctH(this.id, HH, BH, LH))))
      }
      setCompanions(HH) {
        var BH;
        let {
          pet: LH,
          aura: AH
        } = HH;
        if (this.closed) return;
        const rH = null !== (BH = null === LH || void 0 === LH ? void 0 : LH.model) && void 0 !== BH ? BH : -1,
          SH = new Float64Array(LH ? [LH.scale, ...LH.offset, LH.yawOffset, LH.bobAmplitude, LH.bobHz] : []),
          hH = new Float64Array(AH ? [...AH.offset, ...AH.half] : []);
        this.page.hostCall(void 0, (() => {
          var HH, BH;
          this.host.KtH(this.id, rH, SH, null !== (HH = null === LH || void 0 === LH ? void 0 : LH.flyClip) && void 0 !== HH ? HH : "", null !== (BH = null === AH || void 0 === AH ? void 0 : AH.opts) && void 0 !== BH ? BH : "", hH)
        }))
      }
      setFigure(HH, BH, LH, AH) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.etH(this.id, HH, BH, LH, AH))))
      }
      replay() {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.replay(this.id))))
      }
      get orbit() {
        if (this.closed) return null;
        const HH = this.page.hostCall(null, (() => this.host.orbit(this.id)));
        return null === HH || HH.length < 3 ? null : {
          alpha: HH[0],
          beta: HH[1],
          radius: HH[2]
        }
      }
      setOrbit(HH) {
        let {
          alpha: BH,
          beta: LH,
          radius: AH
        } = HH;
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.NtH(this.id, BH, LH, AH)
        }))
      }
      untilSettled() {
        return this.closed || this.page.isStopped ? Promise.resolve() : (this.quiet = 0, new Promise((HH => {
          this.settled.push(HH)
        })))
      }
      packChanged() {
        this.quiet = 0, this.models.refresh(), (0, oH.j)(this.images)
      }
      feed() {
        this.models.drain(this.write);
        for (const [HH, BH] of this.outcomes) {
          const LH = BH === sH ? [] : [BH === JH ? HH : (HH | OH.g) >>> 0];
          this.models.taken(HH, LH)
        }
        this.outcomes.length = 0, this.images.drain(this.write)
      }
      collect(HH) {
        let BH = !1;
        if (HH) {
          const HH = this.host.FtH(this.id);
          for (const BH of HH) this.models.request(BH);
          const LH = this.host.ntH(this.id);
          LH.length > 0 && this.images.onEvent(LH), BH = HH.length > 0 || LH.length > 0
        }
        const LH = this.page.modelsUnavailable ? 0 : this.models.asking + this.models.unanswered,
          AH = BH || LH > 0 || this.images.waiting > 0 || this.images.inFlight > 0;
        this.quiet = AH ? 0 : this.quiet + 1, this.quiet >= 3 && this.resolveSettled()
      }
      close() {
        this.closed || (this.closed = !0, this.page.closePreview(this), this.resolveSettled())
      }
      abandon() {
        this.resolveSettled()
      }
      dispose(HH) {
        this.page.hostCall(void 0, (() => {
          const BH = this.host.close(this.id);
          BH.length > 0 && this.images.onEvent(BH), this.page.isTrapped || HH.UhH(this.id)
        })), this.images.dispose(), this.canvas.remove()
      }
      resolveSettled() {
        const HH = this.settled;
        this.settled = [];
        for (const BH of HH) BH()
      }
    }
    class rB {
      constructor(HH) {
        this.deps = HH, this.module = null, this.host = null, this.opening = null, this.pageCanvas = null, this.samples = 1, this.binding = null, this.sessionEnds = 0, this.lastEndReturned = !0, this.previews = new Map, this.nextId = 1, this.frameId = null, this.stopped = !1, this.loggedErrors = new Set, this.modelsListener = {
          onUnavailable: HH => {
            this.modelsFailed(HH)
          },
          onWorkerLost: HH => {
            this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${nH} a model worker was lost: ${HH}`))
          },
          onModuleRetry: () => {}
        }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.Cu = {
          setShaderPack: (HH, BH, LH, AH, rH) => (this.shaderPackArgs = [HH, BH, LH, AH, rH], this.handOverShaderPack(), !0)
        }, this.frame = HH => {
          this.frameId = null;
          const BH = this.host;
          if (null !== BH && 0 !== this.previews.size && !this.settleIfTrapped() && !this.stopped)
            if (this.deps.frameDue(HH)) try {
              this.drawFrame(BH, HH)
            } catch (LH) {
              if (!this.stopIfTrapped(LH) && (this.stop(), (0, PH.n)(LH))) return void this.deps.onRenderFailed("frames_refused", LH);
              console.warn(`${nH} the previews stopped: their frame threw`, LH)
            } else this.startFrames()
        }, HH.pack.onChange((() => {
          this.packChanged()
        })), HH.game.onGameChange((() => {
          this.tellInGame()
        }))
      }
      packChanged() {
        if (!this.stopped)
          for (const HH of this.previews.values()) HH.packChanged()
      }
      dpr() {
        return this.deps.dpr()
      }
      get sessionBound() {
        var HH, BH;
        return null !== (HH = null === (BH = this.host) || void 0 === BH ? void 0 : BH.attached()) && void 0 !== HH && HH
      }
      get open() {
        return this.previews.size
      }
      get frameCostMs() {
        return 0 === this.costs.length ? 0 : this.costs.reduce(((HH, BH) => HH + BH), 0) / this.costs.length
      }
      async bindSession(HH, BH, LH) {
        const AH = this.binding,
          rH = this.sessionEnds;
        try {
          const SH = this.hostOf(HH);
          if (!SH.ItH()) {
            const BH = (0, eH.d)().sampleCount,
              hH = await LH(BH);
            if (this.sessionEnds !== rH) return this.keepRendererOfEndedSession(HH, SH, hH, BH, AH), BH;
            if (!SH.GtH(hH)) throw new Error("the page has a renderer already");
            (0, fH.v)(performance.now()), this.samples = BH, (0, qH.d)((0, PH.j)(HH))
          }
          if (!SH.attach(BH)) throw new Error("the page's renderer is lent to another session");
          return this.samples
        } finally {
          this.binding === AH && this.endBinding()
        }
      }
      keepRendererOfEndedSession(HH, BH, LH, AH, rH) {
        if (!this.lastEndReturned || null !== this.binding && this.binding !== rH) try {
          LH.free()
        } catch (SH) {
          console.warn(`${nH} an ended session's renderer didn't free`, SH)
        } else BH.GtH(LH) && ((0, fH.v)(performance.now()), this.samples = AH, (0, qH.d)(this.registryOf(HH)))
      }
      async beginSession() {
        var HH;
        let BH = () => {};
        const LH = new Promise((HH => {
          BH = HH
        }));
        this.binding = {
          done: LH,
          release: BH
        }, await (null === (HH = this.opening) || void 0 === HH ? void 0 : HH.catch((() => null)));
        const AH = this.pageCanvas;
        return this.pageCanvas = null, AH
      }
      endSession(HH) {
        var BH, LH;
        if (this.sessionEnds++, this.lastEndReturned = HH, this.endBinding(), HH) {
          try {
            var AH;
            null === (AH = this.host) || void 0 === AH || AH.detach()
          } catch (rH) {
            return void console.warn(`${nH} the session's core kept the page's renderer`, rH)
          }!0 === (null === (BH = this.host) || void 0 === BH ? void 0 : BH.attached()) && console.warn(`${nH} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (LH = this.host) || void 0 === LH ? void 0 : LH.ItH()) && (0, qH.d)(this.registryOf(this.module))
        }
      }
      endBinding() {
        var HH;
        null === (HH = this.binding) || void 0 === HH || HH.release(), this.binding = null
      }
      async openPreview(HH, BH, LH, AH) {
        const rH = await this.renderingHost(),
          SH = this.module;
        if (null === rH || null === SH) throw new Error("this page can't draw previews: it has no renderer build");
        if (this.animations ??= this.loadAnimations(rH), this.deps.pack.wanted(), this.isStopped) throw new Error("the previews stopped");
        this.guarded((() => {
          this.deps.provideBuiltInAnimationPack(SH)
        }));
        const hH = this.nextId++,
          tH = this.deps.createCanvas(),
          [zH, CH] = (0, jH.e)(BH, LH, this.deps.dpr(), AH);
        tH.width = zH, tH.height = CH;
        if (!this.guarded((() => (SH.ThH(hH, tH), rH.open(hH, zH, CH, HH))))) throw this.hostCall(void 0, (() => {
          SH.UhH(hH)
        })), new Error("the page's renderer is lent to a session that is running");
        this.restartModelsIfFailed();
        const EH = new AB(this, rH, hH, tH, [zH, CH], this.deps);
        return this.previews.set(hH, EH), this.startFrames(), EH
      }
      prefetch() {
        if (this.prefetched || this.isStopped || (0, fH.e)() || null !== (0, fH.K)()) return;
        this.prefetched = !0;
        (null === this.module ? this.loadModule() : Promise.resolve(this.module)).then((HH => {
          null === HH || this.isStopped || (this.startModels(), this.fetchAnimationTable().catch((() => {})), this.prefetchPlayerFiles())
        }), (() => {}))
      }
      modelFile(HH) {
        return this.prefetchedOr(HH, this.deps.fetchModel)
      }
      imageFile(HH) {
        return this.prefetchedOr(HH, AH.M)
      }
      prefetchedOr(HH, BH) {
        const LH = this.prefetchedFiles.get(HH);
        return void 0 === LH ? BH(HH) : LH.catch((() => BH(HH)))
      }
      async prefetchPlayerFiles() {
        const HH = this.deps.playerFile().then((HH => this.deps.files.url(HH))),
          BH = await Promise.all([HH, this.deps.images.lifeformAtlasUrl(oH.e)]).catch((() => null));
        if (null === BH) return;
        const [LH, AH] = BH, rH = (HH, BH) => {
          if (null === HH) return;
          const LH = BH(HH);
          this.prefetchedFiles.set(HH, LH), LH.catch((() => {
            this.prefetchedFiles.delete(HH)
          }))
        };
        rH(LH, (HH => this.modelFile(HH))), rH(AH, (HH => this.imageFile(HH)))
      }
      loadModule() {
        return this.moduleLoad ??= this.deps.loadModule().then((HH => (null === HH && (this.moduleLoad = null), HH)), (HH => {
          throw this.moduleLoad = null, HH
        })), this.moduleLoad
      }
      fetchAnimationTable() {
        return this.animationTable ??= this.deps.fetchAnimations().catch((HH => {
          throw this.animationTable = null, HH
        })), this.animationTable
      }
      get modelsUnavailable() {
        return this.unavailable
      }
      startModels() {
        this.models ??= this.deps.startModels(this.modelsListener).catch((HH => (this.modelsFailed(HH), () => new Promise((() => {})))))
      }
      buildModel(HH, BH) {
        return this.startModels(), this.models.then((LH => LH(HH, BH))).then((HH => this.unavailable ? new Promise((() => {})) : HH))
      }
      restartModelsIfFailed() {
        this.unavailable && !this.modelsRestarted && 0 === this.previews.size && (this.modelsRestarted = !0, this.models = null, this.unavailable = !1, this.startModels())
      }
      modelsFailed(HH) {
        this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${nH} the model workers didn't start: models won't draw in the previews`, HH))
      }
      called(HH) {
        return 0 !== HH && this.logError(HH, 0), HH
      }
      closePreview(HH) {
        this.previews.delete(HH.id), null !== this.module && HH.dispose(this.module), 0 === this.previews.size && null !== this.frameId && (this.deps.cancelFrame(this.frameId), this.frameId = null)
      }
      hostOf(HH) {
        if (null !== this.module && this.module !== HH) throw new Error("a second renderer module on one page");
        return this.module = HH, null === this.host && (this.host = this.guarded((() => new HH.PhH)), this.tellInGame(), this.handOverShaderPack()), this.host
      }
      tellInGame() {
        const {
          host: HH
        } = this;
        null !== HH && this.outsideCall("the game's start or end", (() => {
          HH.qtH(this.deps.game.inGame())
        }))
      }
      handOverShaderPack() {
        const {
          host: HH,
          shaderPackArgs: BH
        } = this;
        null !== HH && null !== BH && this.outsideCall("the shader pack's hand-over", (() => {
          HH.PrH(...BH) || console.warn(`${nH} the host refused the shader pack: previews draw without it at home`)
        }))
      }
      outsideCall(HH, BH) {
        try {
          this.hostCall(void 0, BH)
        } catch (LH) {
          this.stop(), console.warn(`${nH} the previews stopped: ${HH} threw`, LH)
        }
      }
      async loadAnimations(HH) {
        const BH = hH(null),
          LH = this.module;
        try {
          BH.wasm = null === LH ? BH.wasm : this.hostCall(BH.wasm, (() => LH.wX()))
        } catch {}
        let AH, rH;
        try {
          AH = await this.fetchAnimationTable()
        } catch (SH) {
          return void this.deps.onAnimationsFailed({
            stage: "fetch",
            error: SH
          }, BH)
        }
        if (!this.settleIfTrapped()) {
          try {
            rH = HH.ltH(AH)
          } catch (SH) {
            if (this.stopIfTrapped(SH)) return;
            return void this.deps.onAnimationsFailed({
              stage: "decode",
              error: SH
            }, BH)
          }
          rH || this.deps.onAnimationsFailed({
            stage: "decode",
            error: null
          }, BH)
        }
      }
      async renderingHost() {
        if (null !== this.binding && await this.binding.done, this.settleIfTrapped()) return null;
        const HH = this.host;
        return null !== HH && this.guarded((() => HH.ItH())) ? HH : (this.opening ??= this.openAtHome().finally((() => {
          this.opening = null
        })), this.opening)
      }
      async openAtHome() {
        var HH;
        const BH = null !== (HH = this.module) && void 0 !== HH ? HH : await this.loadModule();
        if (null === BH) return null;
        const LH = this.hostOf(BH),
          AH = () => this.guarded((() => LH.ItH()));
        if (AH()) return LH;
        if (null !== (0, fH.K)() || (0, fH.e)()) return null;
        const rH = this.deps.createCanvas();
        rH.width = 1, rH.height = 1;
        const SH = await this.deps.openExtras();
        if (this.settleIfTrapped()) return null;
        const hH = (0, eH.d)().sampleCount;
        let tH;
        try {
          tH = await (0, PH.q)(BH, "previewRenderer", rH, hH, gH.i, SH)
        } catch (zH) {
          throw zH instanceof mH.e ? this.stopForTrap(zH) : (0, PH.p)(zH) && await this.deps.onRenderFailed("start_failed", zH), zH
        }
        return this.guarded((() => LH.GtH(tH))) ? ((0, fH.v)(performance.now()), this.samples = hH, this.pageCanvas = rH, (0, qH.d)(this.registryOf(BH)), LH) : AH() ? LH : null
      }
      startFrames() {
        null !== this.frameId || this.isStopped || (this.frameId = this.deps.requestFrame(this.frame))
      }
      drawFrame(HH, BH) {
        for (const hH of this.previews.values()) hH.feed();
        if (this.stopped) return;
        const LH = this.deps.now(),
          AH = HH.frame(BH);
        this.costs.push(this.deps.now() - LH), this.costs.length > 120 && this.costs.shift();
        const rH = 0 !== (256 & AH),
          SH = 255 & AH;
        for (const hH of this.previews.values()) {
          if (this.stopped) return;
          hH.collect(rH)
        }
        if (!this.stopped) {
          if (0 !== (512 & AH) && this.deps.onDrew(), rH) {
            const BH = HH.jtH();
            for (let HH = 0; HH + 1 < BH.length; HH += 2) BH[HH] === vH.F.RenderDeviceLost && this.deps.onDeviceLost(), this.logError(BH[HH], BH[HH + 1])
          }
          if (SH !== ZH) {
            if (SH === dH) return this.stop(), void this.deps.onFatal(HH.btH(), HH.ktH());
            if (SH === aH) return this.stop(), void console.warn(`${nH} the previews stopped: the page's renderer went with its session`);
            (0, WH.e)(BH), this.startFrames()
          } else {
            const BH = HH.mtH();
            this.stop();
            const LH = BH[2] === vH.Vc.PIPELINE_FAILED ? "pipeline_failed" : "lost";
            this.deps.onRenderFailed(LH, void 0, BH[1], BH[2] === vH.Vc.RESTORE_LOST)
          }
        }
      }
      get isStopped() {
        return this.stopped || this.isTrapped
      }
      get isTrapped() {
        return null !== this.module && ((0, mH.k)(this.module) || "failed" === (0, uH.B)())
      }
      hostCall(HH, BH) {
        if (this.settleIfTrapped()) return HH;
        try {
          return BH()
        } catch (LH) {
          if (this.stopIfTrapped(LH)) return HH;
          throw LH
        }
      }
      guarded(HH) {
        if (this.settleIfTrapped()) throw new Error("the previews stopped: their module trapped");
        try {
          return HH()
        } catch (BH) {
          throw this.stopIfTrapped(BH), BH
        }
      }
      registryOf(HH) {
        return {
          trH: (BH, LH) => {
            this.hostCall(void 0, (() => {
              HH.trH(BH, LH)
            }))
          },
          zrH: BH => {
            this.hostCall(void 0, (() => {
              HH.zrH(BH)
            }))
          }
        }
      }
      settleIfTrapped() {
        return !!this.isTrapped && (this.stopped || (this.stop(), (0, qH.d)(null)), !0)
      }
      stopIfTrapped(HH) {
        return !(null === this.module || !(0, mH.o)(this.module, HH)) && (this.stopForTrap(HH), !0)
      }
      stopForTrap(HH) {
        this.stop(), (0, qH.d)(null), (0, RH.h)("previews", HH)
      }
      stop() {
        this.stopped = !0;
        for (const HH of this.previews.values()) HH.abandon()
      }
      logError(HH, BH) {
        const LH = `${HH}:${BH}`;
        this.loggedErrors.has(LH) || (this.loggedErrors.add(LH), console.warn(`${nH} error ${HH} (detail ${BH})`))
      }
    }
    let SB = null;

    function hB() {
      return SB ??= new rB(function() {
        const HH = (0, bH.j)(QH.clientSideServerUrls.staticUrl, {
          packUrl: HH => {
            var BH, LH;
            return null !== (BH = null === (LH = oH.i.current) || void 0 === LH ? void 0 : LH.modelUrl(HH)) && void 0 !== BH ? BH : null
          }
        });
        return {
          loadModule: LB,
          startModels: async HH => {
            const {
              pageModelPool: BH
            } = await LH.e(50).then((() => LH(54607))), {
              pool: AH
            } = BH(HH);
            return (HH, BH) => AH.build(HH, BH)
          },
          fetchAnimations: async () => tH(await (0, AH.M)(yH())),
          playerFile: async () => (await (0, bH.i)()).PLAYER_FILE,
          onAnimationsFailed: (HH, BH) => {
            zH("previewAnimations", yH(), HH, BH)
          },
          provideBuiltInAnimationPack: HH => {
            GH().provide(HH)
          },
          openExtras: fH.D,
          files: HH,
          images: (0, oH.l)((0, UH.m)(HH.url), (() => oH.i.current)),
          pack: oH.i,
          game: IH.d,
          fetchModel: HH => (0, bH.g)(HH),
          createCanvas: () => document.createElement("canvas"),
          dpr: () => window.devicePixelRatio,
          now: () => performance.now(),
          requestFrame: HH => requestAnimationFrame(HH),
          cancelFrame: HH => {
            cancelAnimationFrame(HH)
          },
          onRenderFailed: HB,
          onFatal: (HH, BH) => {
            console.error(`${nH} the previews stopped: renderer error ${HH} (detail ${BH})`)
          },
          onDeviceLost: () => {
            (0, fH.H)() === cH.b.webgpu && ((0, TH.d)((0, uH.U)() ? (0, PH.M)((0, uH.D)()) : null), MH.D.lost())
          },
          onDrew: () => {
            MH.D.drew(), (0, VH.k)()
          },
          frameDue: VH.l
        }
      }()), SB
    }
    var tB = LH(609),
      zB = LH(39550),
      CB = LH(3639);
    const EB = {
      wave: 0,
      clap: 1,
      point: 2,
      shrug: 3,
      cheer: 4,
      sit: 5,
      beeFly: 6,
      bow: 7,
      jesterDance: 8,
      shiver: 9,
      snowAngel: 10,
      mobIdle: 11,
      caveGolem: 12,
      magmaGolem: 13,
      frostWraith: 14,
      tikiTerror: 15,
      gunReady: 16,
      gunAimed: 17
    };
    var XB = LH(40108),
      GB = LH(40066),
      YB = LH(46020);
    class uB {
      constructor() {
        this.pet = null, this.aura = null, this.companions = {
          pet: null,
          aura: null
        }
      }
      of(HH, BH) {
        const LH = void 0 === HH ? null : (0, GB.h)(HH),
          AH = void 0 === BH ? null : (0, GB.d)(BH);
        return LH === this.pet && AH === this.aura || (this.pet = LH, this.aura = AH, this.companions = {
          pet: LH && QB(LH),
          aura: AH && WB(AH)
        }), this.companions
      }
    }

    function QB(HH) {
      var BH;
      const LH = YB.COSMETIC_MODEL_KEYS.get(HH.model);
      if (void 0 === LH) return console.warn(`[bloxd-previews] pet model ${HH.model} isn't a Player attachment model`), null;
      const {
        scale: AH,
        followOffset: rH,
        yawOffset: SH,
        bobAmplitude: hH,
        bobHz: tH,
        clips: zH
      } = HH;
      return {
        model: LH,
        scale: AH,
        offset: rH,
        yawOffset: SH,
        bobAmplitude: hH,
        bobHz: tH,
        flyClip: null !== (BH = null === zH || void 0 === zH ? void 0 : zH.fly) && void 0 !== BH ? BH : null
      }
    }

    function WB(HH) {
      const {
        opts: BH,
        half: LH
      } = (0, XB.b)(HH);
      return {
        opts: JSON.stringify(BH),
        offset: HH.offset,
        half: LH
      }
    }
    const MB = "[bloxd-previews]",
      xB = new Uint32Array(5);

    function vB(HH) {
      return tB.j.indexOf(HH)
    }
    const PB = new WeakSet;

    function TB(HH) {
      const BH = (0, zB.e)(HH),
        LH = null === BH ? -1 : UB(BH);
      return -1 !== LH ? LH : (PB.has(HH) || (PB.add(HH), console.warn(`${MB} an animation the previews' table lacks: the mob idles instead`)), -1)
    }

    function UB(HH) {
      var BH;
      return null !== (BH = EB[HH]) && void 0 !== BH ? BH : -1
    }

    function VB(HH, BH) {
      const {
        canvas: LH
      } = BH;
      LH.style.width = "100%", LH.style.height = "100%", LH.style.display = "block", HH.appendChild(LH)
    }

    function OB(HH) {
      const BH = HH.getBoundingClientRect();
      return [BH.width, BH.height]
    }
    class bB {
      constructor(HH, BH) {
        this.preview = HH, this.showView = BH
      }
      show(HH) {
        this.showView(this.preview, HH)
      }
      resize(HH, BH) {
        this.preview.resize(HH, BH)
      }
      close() {
        this.preview.close()
      }
    }
    class kB {
      constructor(HH) {
        this.preview = HH, this.ready = void 0, this.dev = void 0, this.built = !1, this.cosmetics = {}, this.emote = null, this.tunings = new uB, this.companions = null, this.detachControls = void 0, this.detachControls = function(HH) {
          const {
            canvas: BH
          } = HH;
          let LH = null;
          const AH = HH => {
              var AH;
              LH = {
                pointer: HH.pointerId,
                x: HH.clientX,
                y: HH.clientY
              }, null === (AH = BH.setPointerCapture) || void 0 === AH || AH.call(BH, HH.pointerId)
            },
            rH = BH => {
              var AH;
              const rH = HH.orbit;
              if ((null === (AH = LH) || void 0 === AH ? void 0 : AH.pointer) !== BH.pointerId || null === rH) return;
              const SH = BH.clientX - LH.x,
                hH = BH.clientY - LH.y;
              LH = {
                ...LH,
                x: BH.clientX,
                y: BH.clientY
              }, HH.setOrbit({
                alpha: rH.alpha - .01 * SH,
                beta: Math.min(Math.PI - .01, Math.max(.01, rH.beta - .01 * hH)),
                radius: rH.radius
              })
            },
            SH = HH => {
              var BH;
              (null === (BH = LH) || void 0 === BH ? void 0 : BH.pointer) === HH.pointerId && (LH = null)
            },
            hH = BH => {
              const LH = HH.orbit;
              if (null === LH) return;
              BH.preventDefault();
              const AH = BH.deltaY * (BH.deltaMode === WheelEvent.DOM_DELTA_LINE ? 40 : BH.deltaMode === WheelEvent.DOM_DELTA_PAGE ? 800 : 1),
                rH = Math.min(100, Math.max(5, LH.radius + .08 * AH));
              HH.setOrbit({
                ...LH,
                radius: rH
              })
            };
          return BH.style.touchAction = "none", BH.addEventListener("pointerdown", AH), BH.addEventListener("pointermove", rH), BH.addEventListener("pointerup", SH), BH.addEventListener("pointercancel", SH), BH.addEventListener("wheel", hH, {
            passive: !1
          }), () => {
            BH.removeEventListener("pointerdown", AH), BH.removeEventListener("pointermove", rH), BH.removeEventListener("pointerup", SH), BH.removeEventListener("pointercancel", SH), BH.removeEventListener("wheel", hH)
          }
        }(HH), this.dev = {
          canvas: () => HH.canvas,
          isolateHead: () => {
            console.warn(`${MB} isolateHead: noa's character preview only`)
          },
          isolatePet: () => {
            console.warn(`${MB} isolatePet: noa's character preview only`)
          }
        }, this.apply(), this.ready = HH.untilSettled().then((() => {
          if (HH.isStopped) throw new Error(`${MB} the previews stopped before the character drew`);
          this.built = !0
        }))
      }
      isReady() {
        return this.built && !this.preview.isClosed
      }
      setCosmetic(HH, BH) {
        this.cosmetics[HH] = BH, this.apply()
      }
      playEmote(HH) {
        null === HH || HH !== this.emote ? (this.emote = HH, this.apply()) : this.preview.replay()
      }
      untilDrawn(HH) {
        return this.preview.untilSettled()
      }
      setOrbit(HH) {
        let {
          yaw: BH,
          pitch: LH,
          radius: AH
        } = HH;
        const rH = this.preview.orbit;
        null !== rH && this.preview.setOrbit({
          alpha: BH,
          beta: LH,
          radius: null !== AH && void 0 !== AH ? AH : rH.radius
        })
      }
      resetCamera() {}
      resize(HH, BH) {
        this.preview.resize(HH, BH)
      }
      close() {
        this.detachControls(), this.preview.close()
      }
      apply() {
        var HH;
        this.preview.setPlayer(JSON.stringify(this.cosmetics), xB, null === (HH = this.emote) ? -1 : UB(HH));
        const BH = this.tunings.of(this.cosmetics.pet, this.cosmetics.aura);
        BH !== this.companions && (this.companions = BH, this.preview.setCompanions(BH))
      }
    }

    function mB(HH, BH) {
      let {
        mobType: LH,
        variation: AH,
        animation: rH
      } = BH;
      HH.setMob(vB(LH), null !== AH && void 0 !== AH ? AH : "", 1, TB(rH))
    }

    function oB(HH, BH) {
      let {
        mobType: LH,
        variation: AH,
        metaInfo: rH,
        tamed: SH
      } = BH;
      HH.setPet(vB(LH), AH, rH, SH)
    }
    const IB = {
      aimed: .533 / 1.15 * 1.1,
      ready: .16 / .85 * 1.1
    };
    class fB {
      constructor(HH, BH, LH, AH) {
        this.preview = null, this.closed = !1, this.figure = null, this.shown = !1, this.order = "", this.span = {
          left: 0,
          width: 0
        }, this.lineup = [0, 0], this.given = null, this.loaded = !1, HH(LH.width, AH[1], AH).then((HH => {
          if (this.closed) return void HH.close();
          const {
            style: LH
          } = HH.canvas;
          LH.position = "absolute", LH.top = "0", LH.visibility = "hidden", VB(BH, HH), this.preview = HH, this.apply()
        })).catch((HH => {
          console.error(`${MB} couldn't open a lineup figure`, HH)
        }))
      }
      update(HH, BH, LH, AH, rH) {
        this.figure = HH, this.shown = BH, this.order = LH, this.span = AH, this.lineup = rH, this.apply()
      }
      close() {
        var HH;
        this.closed = !0, null === (HH = this.preview) || void 0 === HH || HH.close(), this.preview = null
      }
      apply() {
        const {
          preview: HH,
          figure: BH,
          lineup: LH
        } = this;
        if (null === HH || null === BH) return;
        if (this.given !== BH) {
          var AH;
          this.given = BH, this.loaded = !1;
          const LH = null === BH.pU ? 0 : null !== (AH = (0, CB.e)(BH.pU)) && void 0 !== AH ? AH : 0;
          HH.setFigure(function(HH) {
            return JSON.stringify(Object.fromEntries(HH.cosmetics))
          }(BH), LH, TB(BH.animation), BH.size), HH.untilSettled().then((() => {
            this.given === BH && (this.loaded = !0, this.apply())
          }))
        }
        const {
          left: rH,
          width: SH
        } = this.span;
        HH.resize(SH, LH[1], LH);
        const {
          style: hH
        } = HH.canvas;
        hH.left = `${rH}px`, hH.width = `${SH}px`, hH.zIndex = this.order, hH.visibility = this.shown && this.loaded ? "visible" : "hidden"
      }
    }
    class lB {
      constructor(HH, BH) {
        this.open = BH, this.layer = void 0, this.figures = [], this.view = {
          figures: [],
          shown: []
        }, this.size = void 0, this.size = OB(HH), this.layer = document.createElement("div");
        const {
          style: LH
        } = this.layer;
        LH.position = "relative", LH.isolation = "isolate", LH.overflow = "hidden", LH.width = "100%", LH.height = "100%", LH.pointerEvents = "none", HH.appendChild(this.layer)
      }
      show(HH) {
        this.view = HH, this.place()
      }
      resize(HH, BH) {
        this.size = [HH, BH], this.place()
      }
      close() {
        for (const HH of this.figures) HH.close();
        this.figures = [], this.layer.remove()
      }
      place() {
        const {
          figures: HH,
          shown: BH
        } = this.view;
        for (const AH of this.figures.splice(HH.length)) AH.close();
        const {
          size: LH
        } = this;
        HH.forEach(((AH, rH) => {
          var SH;
          const hH = function(HH, BH, LH, AH) {
            let [rH, SH] = AH;
            const hH = (HH + .5) * rH / BH,
              tH = Math.min(Math.max(rH / BH, 2 * LH * SH), 2 * Math.max(hH, rH - hH));
            return {
              left: hH - tH / 2,
              width: tH
            }
          }(rH, HH.length, function(HH) {
            let {
              animation: BH,
              size: LH
            } = HH;
            const {
              aimed: AH,
              ready: rH
            } = IB;
            return (TB(BH) === EB.gunAimed ? AH : rH) * LH
          }(AH), LH);
          this.figures[rH] ??= new fB(this.open, this.layer, hH, LH), this.figures[rH].update(AH, null !== (SH = BH[rH]) && void 0 !== SH && SH, function(HH, BH) {
            return String(Math.round(1e3 * HH) + BH)
          }(AH.size, rH), hH, LH)
        }))
      }
    }
    const KB = {
      player: DH,
      store: wH
    };
    class cB {
      constructor(HH) {
        this.page = HH
      }
      async openMob(HH) {
        return new bB(await this.open(HH, FH), mB)
      }
      async openPet(HH) {
        return new bB(await this.open(HH, FH), oB)
      }
      openMobLineup(HH) {
        return new lB(HH, ((HH, BH, LH) => this.page.openPreview(FH, HH, BH, LH)))
      }
      async openCharacter(HH, BH) {
        return new kB(await this.open(HH, KB[BH]))
      }
      async open(HH, BH) {
        const [LH, AH] = OB(HH), rH = await this.page.openPreview(BH, LH, AH);
        return VB(HH, rH), rH
      }
    }
  },
  37110: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => WH,
      i: () => jH,
      k: () => IH,
      o: () => KH
    });
    var AH = LH(37146),
      rH = LH(37112),
      SH = LH(37120),
      hH = LH(37127);

    function tH(HH, BH, LH) {
      const AH = "object" === typeof HH && null !== HH ? HH : {},
        rH = function(HH, BH, LH) {
          if (!Array.isArray(HH) || 0 === HH.length) return [];
          const AH = [{
            width: 0,
            height: 0,
            y: 0,
            items: []
          }];
          for (const tH of (0, hH.i)(HH, hH.e.DEFAULT_FONT_SIZE, LH)) {
            if ("text" !== tH.kind) {
              AH[AH.length - 1].items.push({
                content: tH,
                chars: 1,
                size: {
                  x: 0,
                  width: 0
                }
              });
              continue
            }
            if (0 === tH.text.length) continue;
            const HH = AH[AH.length - 1].items.reduce(((HH, BH) => HH + ("text" === BH.content.kind ? (0, SH.b)(BH.content.text) : BH.chars)), 0);
            (0, SH.e)(tH.text, HH).forEach(((HH, BH) => {
              BH > 0 && AH.push({
                width: 0,
                height: 0,
                y: 0,
                items: []
              }), HH.length > 0 && AH[AH.length - 1].items.push({
                content: {
                  ...tH,
                  text: HH
                },
                chars: HH.length,
                size: {
                  x: 0,
                  width: 0
                }
              })
            }))
          }
          let rH = hH.e.VERTICAL_PADDING / 2;
          for (const SH of AH) {
            if (0 === SH.items.length) continue;
            const {
              width: HH,
              height: AH,
              sizes: tH
            } = (0, hH.h)(SH.items.map((HH => HH.content)), BH, LH);
            SH.items.forEach(((HH, BH) => {
              HH.size = tH[BH]
            })), SH.width = HH, SH.height = AH, SH.y = rH, rH += AH + hH.e.LINE_SPACING
          }
          return AH
        }(AH.content, BH, LH);
      let tH = 0,
        zH = hH.e.VERTICAL_PADDING,
        CH = 0;
      for (const SH of rH) {
        tH = Math.max(tH, SH.width + 2 * hH.e.HORIZONTAL_PADDING), zH += SH.height + hH.e.LINE_SPACING;
        for (const HH of SH.items) CH += HH.chars
      }
      const EH = "string" === typeof AH.backgroundColor ? AH.backgroundColor : "#22283b";
      return {
        width: tH,
        height: zH,
        chars: CH,
        draw: (HH, BH) => {
          const AH = [];
          if (HH.fillStyle = EH, HH.fillRect(0, 0, tH, zH), null === BH)
            for (const SH of rH) SH.items.length > 0 && (0, hH.t)(SH.items.map((HH => HH.content)), 0, SH.y, SH.height, HH, LH, AH);
          else {
            let SH = 0;
            for (const tH of rH)
              for (const rH of tH.items) {
                if (SH >= BH) break;
                const zH = "text" === rH.content.kind ? {
                  ...rH.content,
                  text: rH.content.text.substring(0, BH - SH)
                } : rH.content;
                (0, hH.p)(zH, rH.size.x, tH.y, tH.height, HH, LH, AH, rH.size.width), SH += rH.chars
              }
          }(0, hH.m)(AH, HH)
        }
      }
    }
    var zH = LH(37135),
      CH = LH(37139);
    const EH = 256,
      XH = 1024,
      GH = {
        width: 1,
        height: 7 / 8
      };
    var YH = LH(37149);
    const uH = {
      leaderboard: ""
    };
    var QH = LH(37157);
    const WH = {
        Nametag: 1,
        MultilineText: 2,
        Board: 3,
        Leaderboard: 4
      },
      MH = 2048,
      xH = 256,
      vH = 10,
      PH = 4,
      TH = 65536,
      UH = new TextDecoder;
    let VH = QH.o,
      OH = -1;
    const bH = new Map,
      kH = new Map;
    let mH = 0;
    const oH = new TextEncoder;

    function IH(HH, BH) {
      const LH = oH.encode(JSON.stringify(BH)),
        AH = new Uint8Array(LH.length + 1);
      return AH[0] = HH, AH.set(LH, 1), AH
    }
    const fH = {
        name: "Ag",
        info: null,
        colour: "default",
        ranks: [],
        effects: [],
        health: .5,
        Ot: null,
        hideNameSeed: null
      },
      lH = [IH(WH.Nametag, fH), IH(WH.Nametag, {
        ...fH,
        info: {
          content: [{
            str: "Ag"
          }],
          subtitle: ["Ag"]
        }
      }), IH(WH.MultilineText, {
        box: {
          content: ["Ag"]
        },
        shown: null
      }), ...AH.c.map(((HH, BH) => IH(WH.Board, {
        shared: {
          text: "Ag",
          textSize: BH
        },
        w: 0,
        h: 0
      })))];

    function KH(HH) {
      QH.h.load().then((() => {
        if (HH()) return;
        const BH = (0, rH.h)(1, 1, {
          willReadFrequently: !0
        });
        var LH;
        BH && (LH = BH.canvas, lH.map((HH => jH(HH, LH))))
      }))
    }
    let cH = QH.q;

    function eH() {
      bH.clear(), kH.clear()
    }

    function qH(HH, BH) {
      const LH = HH.get(BH);
      return void 0 !== LH && (HH.delete(BH), HH.set(BH, LH)), LH
    }

    function gH(HH, BH, LH) {
      HH.set(BH, LH), HH.size > xH && HH.delete(HH.keys().next().value)
    }

    function NH(HH, BH, LH) {
      if (HH === WH.Nametag) {
        let HH = qH(bH, BH);
        return void 0 === HH && (HH = (0, zH.e)(JSON.parse(BH), LH, VH), gH(bH, BH, HH)), HH
      }
      if (HH === WH.MultilineText) {
        var rH;
        const HH = JSON.parse(BH),
          AH = JSON.stringify(null !== (rH = HH.box) && void 0 !== rH ? rH : null),
          SH = "number" === typeof HH.shown ? HH.shown : null;
        let hH = qH(kH, AH);
        void 0 === hH && (hH = tH(HH.box, LH, VH), gH(kH, AH, hH));
        const zH = null === SH ? null : Math.min(Math.max(0, Math.floor(SH)), hH.chars),
          CH = hH;
        return {
          width: CH.width,
          height: CH.height,
          draw: HH => {
            CH.draw(HH, zH)
          }
        }
      }
      if (HH === WH.Board) return function(HH, BH) {
        var LH;
        if (!BH.canSeePlayerWrittenText) return null;
        const {
          shared: rH,
          w: SH = 0,
          h: hH = 0
        } = HH, tH = !SH;
        let zH;
        if (tH) {
          var YH, uH;
          zH = null !== (YH = null === rH || void 0 === rH || null === (uH = rH.text) || void 0 === uH ? void 0 : uH.toString()) && void 0 !== YH ? YH : ""
        } else {
          if ("string" !== typeof(null === rH || void 0 === rH ? void 0 : rH.text)) return null;
          zH = rH.text
        }
        if ("" === zH.trim()) return null;
        const QH = null !== (LH = null === rH || void 0 === rH ? void 0 : rH.textSize) && void 0 !== LH ? LH : 0,
          WH = AH.c[QH].ingameFontSize;
        let MH = GH,
          xH = EH;
        tH || (zH = (0, AH.n)(zH, QH, SH, hH), MH = (0, AH.u)(SH, hH), xH = Math.min(EH, XH / Math.max(MH.width, MH.height)));
        const vH = Math.round(xH * MH.width),
          PH = Math.round(xH * MH.height),
          TH = xH / EH;
        return {
          width: vH,
          height: PH,
          draw: HH => {
            CH.d.fontSize = WH * TH, CH.d.fontWeight = "bold", CH.d.font = "'Jetbrains Mono', monospace", CH.d.drawText(HH, zH, 0, (-10 - 7 * QH) * TH, vH, PH)
          }
        }
      }(JSON.parse(BH), VH);
      if (HH === WH.Leaderboard) return function(HH, BH, LH) {
        var AH;
        const rH = (0, YH.f)(HH.opts, uH),
          SH = (0, YH.d)(rH, LH),
          hH = {
            top: (0, YH.e)(rH, (0, YH.g)(HH.top)),
            around: null !== (AH = HH.around) && void 0 !== AH ? AH : null,
            showPlayerText: BH.canSeePlayerWrittenText,
            localPlayerDbId: BH.localPlayerDbId
          };
        return {
          width: SH.pixelWidth,
          height: SH.pixelHeight,
          draw: HH => {
            const {
              a: BH,
              d: LH
            } = HH.getTransform();
            (0, YH.b)(HH, Math.round(SH.pixelWidth * BH), Math.round(SH.pixelHeight * LH), SH, rH, hH)
          }
        }
      }(JSON.parse(BH), VH, MH);
      throw new Error(`unknown text plane kind ${HH}`)
    }
    const RH = 2 ** Math.floor(Math.log2(MH));

    function jH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      try {
        if (HH.length < 2) return [0, 0];
        const SH = (0, rH.d)(BH);
        if (!SH) return [0, 0];
        const hH = cH();
        hH !== OH && (OH = hH, eH());
        const [tH] = HH, zH = UH.decode(HH.subarray(1));
        let CH;
        tH !== WH.Board && tH !== WH.Leaderboard || !VH.canSeePlayerWrittenText || VH.glyphsShown(zH), SH.save();
        try {
          CH = NH(tH, zH, SH)
        } finally {
          SH.restore()
        }
        if (null === CH || !(CH.width > 0 && CH.height > 0)) return [0, 0];
        const EH = Math.min(1, MH / CH.width, MH / CH.height),
          XH = HH => AH ? function(HH) {
            const BH = 2 ** Math.ceil(Math.log2(HH));
            return Math.min(RH, BH - HH > HH - BH / 2 ? BH / 2 : BH)
          }(HH) : Math.min(MH, Math.ceil(HH * EH)),
          [GH, YH] = [XH(CH.width), XH(CH.height)];
        ! function(HH, BH, LH, AH, rH) {
          const SH = Math.max(HH.width, LH),
            hH = Math.max(HH.height, AH),
            tH = rH || SH * hH > Math.max(PH * LH * AH, TH),
            [zH, CH] = tH ? [LH, AH] : [SH, hH];
          zH === HH.width && CH === HH.height ? BH.clearRect(0, 0, zH, CH) : (HH.width = zH, HH.height = CH)
        }(BH, SH, GH, YH, LH), SH.save();
        try {
          const [HH, BH] = AH ? [GH / CH.width, YH / CH.height] : [EH, EH];
          1 === HH && 1 === BH || SH.scale(HH, BH), CH.draw(SH)
        } finally {
          SH.restore()
        }
        return [GH, YH]
      } catch (SH) {
        ! function(HH, BH) {
          mH < vH && (mH++, console.warn(`[bloxd-wasm-client] ${HH}`, BH))
        }("could not raster a text plane", SH);
        try {
          BH.width = 1
        } catch {}
        return [0, 0]
      }
    }
  },
  54537: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/builtInAnimations.anim.1876a593a8239b631bf1.gz"
  },
  54541: (HH, BH, LH) => {
    HH.exports = LH.p + "static/media/previewAnimations.dat.a9c06de838594e8096c6.gz"
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);