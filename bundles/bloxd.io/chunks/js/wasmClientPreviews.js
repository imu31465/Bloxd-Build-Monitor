export const id = 72;
export const ids = [72];
export const modules = {
  40429: (RR, JR, GR) => {
    function yR(RR) {
      return void 0 === RR ? void 0 : [RR[0], RR[1], RR[2]]
    }

    function tR(RR) {
      const JR = RR.particles;
      return {
        opts: {
          texture: JR.texture,
          hK: JR.hK,
          minLifeTime: JR.minLifeTime,
          maxLifeTime: JR.maxLifeTime,
          minSize: JR.minSize,
          maxSize: JR.maxSize,
          minEmitPower: JR.minEmitPower,
          maxEmitPower: JR.maxEmitPower,
          emitRate: JR.emitRate,
          gravity: yR(JR.gravity),
          dir1: yR(JR.dir1),
          dir2: yR(JR.dir2),
          colorGradients: JR.colorGradients,
          blendMode: JR.blendMode
        },
        half: [JR.width / 2, JR.height / 2, JR.depth / 2]
      }
    }
    GR.d(JR, {
      c: () => tR
    })
  },
  40393: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => uR,
      d: () => fR,
      e: () => iR,
      i: () => ZR
    });
    var yR = GR(216);
    const tR = JSON.parse('{"aura_snowfall":{"offset":[0,2.6,0],"ownInFirstPerson":true,"particles":{"blendMode":1,"capacity":64,"colorGradients":[{"minColor":[255,255,255,0.9],"timeFraction":0},{"minColor":[255,255,255,0],"timeFraction":1}],"depth":3,"dir1":[-0.2,-1,-0.2],"dir2":[0.2,-1,0.2],"emitRate":12,"gravity":[0,-1.5,0],"height":0.2,"maxEmitPower":0.6,"maxLifeTime":2.5,"maxSize":0.15,"minEmitPower":0.3,"minLifeTime":1.5,"minSize":0.08,"texture":"snowflake","width":3}}}'),
      uR = "PetRoot";
    let ZR = JSON.parse('{"pet_reindeer":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0},"pet_reindeer2":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0}}'),
      qR = tR;
    new Map, new Map;

    function iR(RR) {
      var JR;
      return null !== (JR = (0, yR.b)(ZR, RR)) && void 0 !== JR ? JR : null
    }

    function fR(RR) {
      var JR;
      return null !== (JR = (0, yR.b)(qR, RR)) && void 0 !== JR ? JR : null
    }
  },
  39862: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => tR,
      f: () => uR
    });
    const yR = new WeakMap;

    function tR(RR, JR) {
      return yR.set(RR, JR), RR
    }

    function uR(RR) {
      var JR;
      return null !== (JR = yR.get(RR)) && void 0 !== JR ? JR : null
    }
  },
  42736: (RR, JR, GR) => {
    function yR(RR, JR, GR) {
      return new Promise((yR => {
        const tR = setTimeout((() => {
            uR(), yR(null)
          }), GR),
          uR = JR((() => {
            clearTimeout(tR);
            const JR = RR();
            yR(null === JR ? null : function(RR) {
              if (0 === RR.width || 0 === RR.height) return null;
              const JR = document.createElement("canvas");
              JR.width = RR.width, JR.height = RR.height;
              const GR = JR.getContext("2d");
              return GR ? (GR.drawImage(RR, 0, 0), JR) : null
            }(JR))
          }))
      }))
    }
    GR.d(JR, {
      e: () => yR
    })
  },
  37238: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => uR
    });
    const yR = 4e5,
      tR = 2;

    function uR(RR, JR, GR) {
      let [uR, ZR] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [RR, JR], qR = Math.min(Number.isFinite(GR) && GR > 0 ? GR : 1, tR);
      const iR = Math.max(0, uR, RR) * Math.max(0, ZR, JR) * qR * qR;
      return iR > yR && (qR *= Math.sqrt(yR / iR)), [Math.max(1, Math.floor(Math.max(0, RR) * qR)), Math.max(1, Math.floor(Math.max(0, JR) * qR))]
    }
  },
  35176: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => yR,
      i: () => VR
    });
    const yR = .01,
      tR = .08,
      uR = .01,
      ZR = 5,
      qR = 100,
      iR = 40,
      fR = 800;

    function VR(RR) {
      const {
        canvas: JR
      } = RR;
      let GR = null;
      const VR = RR => {
          var yR;
          GR = {
            pointer: RR.pointerId,
            x: RR.clientX,
            y: RR.clientY
          }, null === (yR = JR.setPointerCapture) || void 0 === yR || yR.call(JR, RR.pointerId)
        },
        KR = JR => {
          var tR;
          const ZR = RR.orbit;
          if ((null === (tR = GR) || void 0 === tR ? void 0 : tR.pointer) !== JR.pointerId || null === ZR) return;
          const qR = JR.clientX - GR.x,
            iR = JR.clientY - GR.y;
          GR = {
            ...GR,
            x: JR.clientX,
            y: JR.clientY
          }, RR.setOrbit({
            alpha: ZR.alpha - qR * yR,
            beta: Math.min(Math.PI - uR, Math.max(uR, ZR.beta - iR * yR)),
            radius: ZR.radius
          })
        },
        wR = RR => {
          var JR;
          (null === (JR = GR) || void 0 === JR ? void 0 : JR.pointer) === RR.pointerId && (GR = null)
        },
        rR = JR => {
          const GR = RR.orbit;
          if (null === GR) return;
          JR.preventDefault();
          const yR = JR.deltaY * (JR.deltaMode === WheelEvent.DOM_DELTA_LINE ? iR : JR.deltaMode === WheelEvent.DOM_DELTA_PAGE ? fR : 1),
            uR = Math.min(qR, Math.max(ZR, GR.radius + yR * tR));
          RR.setOrbit({
            ...GR,
            radius: uR
          })
        };
      return JR.style.touchAction = "none", JR.addEventListener("pointerdown", VR), JR.addEventListener("pointermove", KR), JR.addEventListener("pointerup", wR), JR.addEventListener("pointercancel", wR), JR.addEventListener("wheel", rR, {
        passive: !1
      }), () => {
        JR.removeEventListener("pointerdown", VR), JR.removeEventListener("pointermove", KR), JR.removeEventListener("pointerup", wR), JR.removeEventListener("pointercancel", wR), JR.removeEventListener("wheel", rR)
      }
    }
  },
  45007: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      WasmPreviewHost: () => PJ,
      pageBuiltInAnimationPack: () => wR,
      pagePreviews: () => qJ,
      previewModule: () => hR
    });
    var yR = GR(2457),
      tR = GR(688);
    const uR = "[bloxd-wasm-client]";

    function ZR(RR) {
      const JR = {
        wasm: "unknown",
        client: String(tR.d)
      };
      try {
        var GR;
        JR.wasm = null !== (GR = null === RR || void 0 === RR ? void 0 : RR.FK()) && void 0 !== GR ? GR : JR.wasm
      } catch {}
      return JR
    }
    async function qR(RR) {
      if (RR.length < 2 || 31 !== RR[0] || 139 !== RR[1]) return RR;
      if ("undefined" === typeof DecompressionStream) {
        const {
          ungzip: JR
        } = await Promise.resolve().then((() => GR(3968)));
        return JR(RR)
      }
      const JR = new Blob([RR]).stream().pipeThrough(new DecompressionStream("gzip"));
      return new Uint8Array(await new Response(JR).arrayBuffer())
    }

    function iR(RR, JR, yR, tR) {
      Promise.resolve().then((() => GR(42288))).then((GR => {
        let {
          reportDataLoadFailure: uR
        } = GR;
        uR(RR, JR, yR, tR)
      }), (JR => {
        console.warn(`${uR} ${RR} didn't load, and the report couldn't be sent`, yR.error, JR)
      }))
    }
    const fR = [3e4, 12e4, 3e5];
    class VR {
      constructor(RR) {
        this.deps = RR, this.loading = null, this.reported = !1, this.retries = 0, this.resolveSet = () => {}, this.set = new Promise((RR => {
          this.resolveSet = RR
        }))
      }
      provide(RR) {
        return this.loading ??= this.load(RR), this.loading
      }
      whenSet() {
        return this.set
      }
      async load(RR) {
        const JR = ZR(RR),
          GR = await async function(RR, JR) {
            let GR;
            try {
              GR = await RR()
            } catch (yR) {
              return {
                stage: "fetch",
                error: yR
              }
            }
            try {
              return JR(GR) ? null : {
                stage: "decode",
                error: null
              }
            } catch (yR) {
              return {
                stage: "decode",
                error: yR
              }
            }
          }((() => this.deps.fetch()), (JR => {
            const GR = RR.UtR(JR);
            return GR && this.resolveSet(JR), GR
          }));
        if (null !== GR) {
          if ("fetch" === GR.stage) {
            this.loading = null;
            const JR = fR[this.retries++];
            void 0 !== JR && this.deps.later((() => {
              this.provide(RR)
            }), JR)
          }
          this.reported || (this.reported = !0, this.deps.onFailed(GR, JR))
        }
      }
    }
    let KR = null;

    function wR() {
      return KR ??= new VR({
        fetch: async () => qR(await (0, yR.B)(rR(), {
          priority: "low"
        })),
        onFailed: (RR, JR) => {
          iR("builtInAnimations", rR(), RR, JR)
        },
        later: (RR, JR) => {
          setTimeout(RR, JR)
        }
      }), KR
    }

    function rR() {
      return GR(45013)
    }
    var eR = GR(2448),
      aR = GR(1282),
      LR = GR(350),
      nR = GR(342),
      UR = GR(709),
      WR = GR(5676),
      AR = GR(42230),
      CR = GR(42259),
      XR = GR(42475),
      MR = (GR(42265), GR(37232)),
      BR = GR(42344),
      lR = GR(42352),
      pR = GR(42357),
      gR = GR(42239),
      bR = GR(42494),
      vR = GR(42503),
      OR = GR(42281),
      xR = GR(42379),
      NR = GR(42420),
      DR = GR(42374),
      HR = GR(42430),
      oR = GR(42488),
      cR = GR(37247),
      PR = GR(37183),
      IR = GR(2445),
      mR = GR(37238);
    const zR = "[bloxd-previews]",
      SR = 0,
      jR = 1,
      dR = 2,
      ER = 3,
      YR = 1,
      kR = 2,
      QR = 3,
      FR = 0,
      TR = 1,
      sR = 2;

    function hR(RR) {
      const JR = RR,
        GR = (0, AR.M)(RR),
        yR = (0, AR.n)(RR);
      return null !== GR && null !== yR && "function" === typeof JR.WtR && "function" === typeof JR.AtR && "function" === typeof JR.CtR && "function" === typeof JR.ZH ? JR : null
    }

    function RJ() {
      return GR(45017)
    }
    async function JJ(RR, JR, yR) {
      var tR;
      let uR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      "lost" === RR && (0, OR.D)();
      const qR = await (0, OR.W)();
      if (null === qR || (0, AR.o)(qR) || (0, OR.c)()) return;
      const iR = "webgpu" === qR.backend;
      if (!iR && "lost" !== RR) return;
      const fR = iR && (0, nR.m)(qR.adapter, null !== yR && void 0 !== yR ? yR : null, "lost" === RR, uR),
        VR = null !== (tR = "lost" === RR ? (0, CR.l)((0, eR.F)() ? (0, AR.M)((0, eR.w)()) : null) : void 0) && void 0 !== tR ? tR : JR,
        KR = iR ? (0, AR.W)(RR, void 0, (0, CR.d)(VR)) : (0, UR.u)() ? null : UR.e;
      if (null === KR) {
        (0, OR.t)();
        try {
          await async function(RR, JR, yR, tR, uR) {
            let {
              restoreLost: qR,
              adapterRemembered: iR
            } = uR;
            const fR = (0, eR.F)(),
              {
                flushCrashReports: VR,
                reportRenderReload: KR
              } = await Promise.resolve().then((() => GR(42288)));
            KR(RR.backend, tR, ZR(fR ? (0, eR.w)() : null), {
              from: "home",
              cause: JR,
              restoreLost: qR,
              adapterRemembered: iR,
              ...GJ(RR, JR, yR)
            }), await VR(NR.d)
          }(qR, RR, VR, null !== yR && void 0 !== yR ? yR : "start_failed" === RR ? 0 : 1, {
            restoreLost: uR,
            adapterRemembered: fR
          })
        } catch (rR) {
          console.warn(`${zR} ${qR.backend} failed at home (${RR}), and its report couldn't be sent`, rR)
        }(0, NR.j)()
      } else {
        var wR;
        const JR = GJ(qR, RR, VR),
          yR = `${iR?"WebGPU":"WebGL"} failed at home (${RR}${void 0===JR.error?"":`: ${JR.error instanceof Error?JR.error.message:(0,PR.k)(JR.error)}`}) and ${KR}`;
        console.warn(`${zR} ${yR}: the previews stop`, null !== (wR = JR.error) && void 0 !== wR ? wR : ""), (0, OR.x)({
          why: yR,
          webgpu: iR
        });
        try {
          const {
            countRenderLost: yR
          } = await Promise.resolve().then((() => GR(42288)));
          yR(RR, JR.error, JR.context)
        } catch (aR) {
          console.warn(`${zR} ${qR.backend} failed at home (${RR}), and its count couldn't be sent`, aR)
        }
      }
    }

    function GJ(RR, JR, GR) {
      let {
        adapter: yR
      } = RR;
      return {
        error: GR,
        context: {
          adapter: yR,
          boundAtMs: "start_failed" === JR ? null : (0, OR.Q)(),
          indirectHangs: (0, OR.H)(),
          restoresSkipped: (0, OR.S)()
        }
      }
    }
    async function yJ(RR) {
      if (!(0, eR.F)()) {
        await (null === RR || void 0 === RR ? void 0 : RR("renderer pick", {
          longStep: !0
        }));
        const JR = await (0, OR.W)();
        if (null === JR || (0, AR.o)(JR)) return null;
        const GR = await JR.load();
        if (await (null === RR || void 0 === RR ? void 0 : RR("renderer instantiation", {
            longStep: !0
          })), await (0, xR.e)(GR), !(0, eR.F)()) return null
      }
      return hR((0, eR.w)())
    }
    class tJ {
      constructor(RR, JR, GR, yR, tR, uR) {
        this.page = RR, this.host = JR, this.id = GR, this.canvas = yR, this.size = tR, this.models = void 0, this.images = void 0, this.write = void 0, this.outcomes = [], this.closed = !1, this.quiet = 0, this.settled = [];
        const ZR = {
            ...uR.images,
            glbUrl: RR => {
              var JR;
              return null !== (JR = this.models.drawnUrl(RR)) && void 0 !== JR ? JR : uR.images.glbUrl(RR)
            }
          },
          qR = JR => RR.modelFile(JR);
        this.images = new XR.f(ZR, (RR => {
          console.warn(`${zR} image ${RR.key.kind}:${RR.key.index}:${RR.key.word} failed`, RR.error)
        }), {
          fetchFile: qR,
          fetchImage: JR => RR.imageFile(JR)
        }), RR.startModels(), this.models = new BR.e(uR.files, ((JR, GR) => RR.buildModel(JR, GR)), (RR => {
          console.warn(`${zR} model file ${RR.file} (${RR.url}) failed`, RR.error)
        }), {
          fetchFile: qR,
          onWritten: (RR, JR) => {
            this.images.glbWritten(RR, JR)
          },
          onTaken: (RR, JR) => {
            this.images.glbTaken(RR, JR)
          }
        }), this.write = (RR, JR, GR) => {
          if (this.closed) return !0;
          if (RR === BR.c) {
            const RR = new DataView(GR.buffer, GR.byteOffset, pR.e),
              yR = RR.getUint32(0, !0),
              tR = RR.getUint32(pR.h, !0),
              uR = this.page.hostCall(sR, (() => this.host.XtR(this.id, yR, JR, GR.subarray(pR.e))));
            return this.outcomes.push([tR, uR]), !0
          }
          return RR === XR.b && (this.page.hostCall(void 0, (() => {
            this.host.MtR(this.id, GR)
          })), !0)
        }
      }
      get isClosed() {
        return this.closed
      }
      get isStopped() {
        return this.page.isStopped
      }
      resize(RR, JR, GR) {
        if (this.closed) return;
        const [yR, tR] = (0, mR.e)(RR, JR, this.page.dpr(), GR);
        yR === this.size[0] && tR === this.size[1] || (this.size = [yR, tR], this.page.hostCall(void 0, (() => {
          this.host.resize(this.id, yR, tR)
        })))
      }
      setMob(RR, JR, GR, yR) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.BtR(this.id, RR, JR, GR, yR))))
      }
      setPet(RR, JR, GR, yR) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.ltR(this.id, RR, JR, GR, yR))))
      }
      setPlayer(RR, JR, GR) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.ptR(this.id, RR, JR, GR))))
      }
      setCompanions(RR) {
        var JR;
        let {
          pet: GR,
          aura: yR
        } = RR;
        if (this.closed) return;
        const tR = null !== (JR = null === GR || void 0 === GR ? void 0 : GR.model) && void 0 !== JR ? JR : -1,
          uR = new Float64Array(GR ? [GR.scale, ...GR.offset, GR.yawOffset, GR.bobAmplitude, GR.bobHz] : []),
          ZR = new Float64Array(yR ? [...yR.offset, ...yR.half] : []);
        this.page.hostCall(void 0, (() => {
          var RR, JR;
          this.host.gtR(this.id, tR, uR, null !== (RR = null === GR || void 0 === GR ? void 0 : GR.flyClip) && void 0 !== RR ? RR : "", null !== (JR = null === yR || void 0 === yR ? void 0 : yR.opts) && void 0 !== JR ? JR : "", ZR)
        }))
      }
      setNametag(RR, JR, GR) {
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.btR(this.id, RR, JR, GR)
        }))
      }
      setFigure(RR, JR, GR, yR) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.vtR(this.id, RR, JR, GR, yR))))
      }
      replay() {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.replay(this.id))))
      }
      get orbit() {
        if (this.closed) return null;
        const RR = this.page.hostCall(null, (() => this.host.orbit(this.id)));
        return null === RR || RR.length < 3 ? null : {
          alpha: RR[0],
          beta: RR[1],
          radius: RR[2]
        }
      }
      setOrbit(RR) {
        let {
          alpha: JR,
          beta: GR,
          radius: yR
        } = RR;
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.OtR(this.id, JR, GR, yR)
        }))
      }
      untilSettled() {
        return this.closed || this.page.isStopped ? Promise.resolve() : (this.quiet = 0, new Promise((RR => {
          this.settled.push(RR)
        })))
      }
      packChanged() {
        this.quiet = 0, this.models.refresh(), (0, bR.f)(this.images)
      }
      feed() {
        this.models.drain(this.write);
        for (const [RR, JR] of this.outcomes) {
          const GR = JR === FR ? [] : [JR === TR ? RR : (RR | BR.d) >>> 0];
          this.models.taken(RR, GR)
        }
        this.outcomes.length = 0, this.images.drain(this.write)
      }
      collect(RR) {
        let JR = !1;
        if (RR) {
          const RR = this.host.xtR(this.id);
          for (const JR of RR) this.models.request(JR);
          const GR = this.host.NtR(this.id);
          GR.length > 0 && this.images.onEvent(GR), JR = RR.length > 0 || GR.length > 0
        }
        const GR = this.page.modelsUnavailable ? 0 : this.models.asking + this.models.unanswered,
          yR = JR || GR > 0 || this.images.waiting > 0 || this.images.inFlight > 0;
        this.quiet = yR ? 0 : this.quiet + 1, this.quiet >= 3 && this.resolveSettled()
      }
      close() {
        this.closed || (this.closed = !0, this.page.closePreview(this), this.resolveSettled())
      }
      abandon() {
        this.resolveSettled()
      }
      dispose(RR) {
        this.page.hostCall(void 0, (() => {
          const JR = this.host.close(this.id);
          JR.length > 0 && this.images.onEvent(JR), this.page.isTrapped || RR.CtR(this.id)
        })), this.images.dispose(), this.canvas.remove()
      }
      resolveSettled() {
        const RR = this.settled;
        this.settled = [];
        for (const JR of RR) JR()
      }
    }
    class uJ {
      constructor(RR) {
        this.deps = RR, this.module = null, this.host = null, this.opening = null, this.pageCanvas = null, this.samples = 1, this.binding = null, this.sessionEnds = 0, this.lastEndReturned = !0, this.previews = new Map, this.nextId = 1, this.frameId = null, this.stopped = !1, this.loggedErrors = new Set, this.modelsListener = {
          onUnavailable: RR => {
            this.modelsFailed(RR)
          },
          onWorkerLost: RR => {
            this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${zR} a model worker was lost: ${RR}`))
          },
          onModuleRetry: () => {}
        }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.Be = {
          setShaderPack: (RR, JR, GR, yR, tR) => (this.shaderPackArgs = [RR, JR, GR, yR, tR], this.handOverShaderPack(), !0)
        }, this.frame = RR => {
          this.frameId = null;
          const JR = this.host;
          if (null !== JR && 0 !== this.previews.size && !this.settleIfTrapped() && !this.stopped)
            if (this.deps.frameDue(RR)) try {
              this.drawFrame(JR, RR)
            } catch (GR) {
              if (!this.stopIfTrapped(GR) && (this.stop(), (0, AR.s)(GR))) return void this.deps.onRenderFailed("frames_refused", GR);
              console.warn(`${zR} the previews stopped: their frame threw`, GR)
            } else this.startFrames()
        }, RR.pack.onChange((() => {
          this.packChanged()
        })), RR.game.onGameChange((() => {
          this.tellInGame()
        }))
      }
      packChanged() {
        if (!this.stopped)
          for (const RR of this.previews.values()) RR.packChanged()
      }
      dpr() {
        return this.deps.dpr()
      }
      get sessionBound() {
        var RR, JR;
        return null !== (RR = null === (JR = this.host) || void 0 === JR ? void 0 : JR.attached()) && void 0 !== RR && RR
      }
      get open() {
        return this.previews.size
      }
      get frameCostMs() {
        return 0 === this.costs.length ? 0 : this.costs.reduce(((RR, JR) => RR + JR), 0) / this.costs.length
      }
      async bindSession(RR, JR, GR) {
        const yR = this.binding,
          tR = this.sessionEnds;
        try {
          const uR = this.hostOf(RR);
          if (!uR.DtR()) {
            const JR = (0, HR.g)().sampleCount,
              ZR = await GR(JR);
            if (this.sessionEnds !== tR) return this.keepRendererOfEndedSession(RR, uR, ZR, JR, yR), JR;
            if (!uR.HtR(ZR)) throw new Error("the page has a renderer already");
            (0, OR.A)(performance.now()), this.samples = JR, (0, oR.f)((0, AR.n)(RR))
          }
          if (!uR.attach(JR)) throw new Error("the page's renderer is lent to another session");
          return this.samples
        } finally {
          this.binding === yR && this.endBinding()
        }
      }
      keepRendererOfEndedSession(RR, JR, GR, yR, tR) {
        if (!this.lastEndReturned || null !== this.binding && this.binding !== tR) try {
          GR.free()
        } catch (uR) {
          console.warn(`${zR} an ended session's renderer didn't free`, uR)
        } else JR.HtR(GR) && ((0, OR.A)(performance.now()), this.samples = yR, (0, oR.f)(this.registryOf(RR)))
      }
      async beginSession() {
        var RR;
        let JR = () => {};
        const GR = new Promise((RR => {
          JR = RR
        }));
        this.binding = {
          done: GR,
          release: JR
        }, await (null === (RR = this.opening) || void 0 === RR ? void 0 : RR.catch((() => null)));
        const yR = this.pageCanvas;
        return this.pageCanvas = null, yR
      }
      endSession(RR) {
        var JR, GR;
        if (this.sessionEnds++, this.lastEndReturned = RR, this.endBinding(), RR) {
          try {
            var yR;
            null === (yR = this.host) || void 0 === yR || yR.detach()
          } catch (tR) {
            return void console.warn(`${zR} the session's core kept the page's renderer`, tR)
          }!0 === (null === (JR = this.host) || void 0 === JR ? void 0 : JR.attached()) && console.warn(`${zR} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (GR = this.host) || void 0 === GR ? void 0 : GR.DtR()) && (0, oR.f)(this.registryOf(this.module))
        }
      }
      endBinding() {
        var RR;
        null === (RR = this.binding) || void 0 === RR || RR.release(), this.binding = null
      }
      async openPreview(RR, JR, GR, yR) {
        const tR = await this.renderingHost(),
          uR = this.module;
        if (null === tR || null === uR) throw new Error("this page can't draw previews: it has no renderer build");
        if (this.animations ??= this.loadAnimations(tR), this.deps.pack.wanted(), this.isStopped) throw new Error("the previews stopped");
        this.guarded((() => {
          this.deps.provideBuiltInAnimationPack(uR)
        }));
        const ZR = this.nextId++,
          qR = this.deps.createCanvas(),
          [iR, fR] = (0, mR.e)(JR, GR, this.deps.dpr(), yR);
        qR.width = iR, qR.height = fR;
        if (!this.guarded((() => (uR.AtR(ZR, qR), tR.open(ZR, iR, fR, RR))))) throw this.hostCall(void 0, (() => {
          uR.CtR(ZR)
        })), new Error("the page's renderer is lent to a session that is running");
        this.restartModelsIfFailed();
        const VR = new tJ(this, tR, ZR, qR, [iR, fR], this.deps);
        return this.previews.set(ZR, VR), this.startFrames(), VR
      }
      prefetch(RR) {
        if (this.prefetched || !this.mayPrefetch) return;
        this.prefetched = !0;
        (null === this.module ? this.loadModule(RR) : Promise.resolve(this.module)).then((async JR => {
          null !== JR && (await (null === RR || void 0 === RR ? void 0 : RR("preview workers and files")), this.mayPrefetch && (this.startModels(), this.fetchAnimationTable().catch((() => {})), this.prefetchPlayerFiles()))
        }), (() => {}))
      }
      modelFile(RR) {
        return this.prefetchedOr(RR, this.deps.fetchModel)
      }
      imageFile(RR) {
        return this.prefetchedOr(RR, yR.B)
      }
      prefetchedOr(RR, JR) {
        const GR = this.prefetchedFiles.get(RR);
        return void 0 === GR ? JR(RR) : GR.catch((() => JR(RR)))
      }
      async prefetchPlayerFiles() {
        const RR = this.deps.playerFile().then((RR => this.deps.files.url(RR))),
          JR = await Promise.all([RR, this.deps.images.lifeformAtlasUrl(bR.b)]).catch((() => null));
        if (null === JR) return;
        const [GR, yR] = JR, tR = (RR, JR) => {
          if (null === RR) return;
          const GR = JR(RR);
          this.prefetchedFiles.set(RR, GR), GR.catch((() => {
            this.prefetchedFiles.delete(RR)
          }))
        };
        tR(GR, (RR => this.modelFile(RR))), tR(yR, (RR => this.imageFile(RR)))
      }
      loadModule(RR) {
        return this.moduleLoad ??= this.deps.loadModule(RR).then((RR => (null === RR && (this.moduleLoad = null), RR)), (RR => {
          throw this.moduleLoad = null, RR
        })), this.moduleLoad
      }
      fetchAnimationTable() {
        return this.animationTable ??= this.deps.fetchAnimations().catch((RR => {
          throw this.animationTable = null, RR
        })), this.animationTable
      }
      get modelsUnavailable() {
        return this.unavailable
      }
      startModels() {
        this.models ??= this.deps.startModels(this.modelsListener).catch((RR => (this.modelsFailed(RR), () => new Promise((() => {})))))
      }
      buildModel(RR, JR) {
        return this.startModels(), this.models.then((GR => GR(RR, JR))).then((RR => this.unavailable ? new Promise((() => {})) : RR))
      }
      restartModelsIfFailed() {
        this.unavailable && !this.modelsRestarted && 0 === this.previews.size && (this.modelsRestarted = !0, this.models = null, this.unavailable = !1, this.startModels())
      }
      modelsFailed(RR) {
        this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${zR} the model workers didn't start: models won't draw in the previews`, RR))
      }
      called(RR) {
        return 0 !== RR && this.logError(RR, 0), RR
      }
      closePreview(RR) {
        this.previews.delete(RR.id), null !== this.module && RR.dispose(this.module), 0 === this.previews.size && null !== this.frameId && (this.deps.cancelFrame(this.frameId), this.frameId = null)
      }
      hostOf(RR) {
        if (null !== this.module && this.module !== RR) throw new Error("a second renderer module on one page");
        return this.module = RR, null === this.host && (this.host = this.guarded((() => new RR.WtR)), this.tellInGame(), this.handOverShaderPack()), this.host
      }
      tellInGame() {
        const {
          host: RR
        } = this;
        null !== RR && this.outsideCall("the game's start or end", (() => {
          RR.otR(this.deps.game.inGame())
        }))
      }
      handOverShaderPack() {
        const {
          host: RR,
          shaderPackArgs: JR
        } = this;
        null !== RR && null !== JR && this.outsideCall("the shader pack's hand-over", (() => {
          RR.ntR(...JR) || console.warn(`${zR} the host refused the shader pack: previews draw without it at home`)
        }))
      }
      outsideCall(RR, JR) {
        try {
          this.hostCall(void 0, JR)
        } catch (GR) {
          this.stop(), console.warn(`${zR} the previews stopped: ${RR} threw`, GR)
        }
      }
      async loadAnimations(RR) {
        const JR = ZR(null),
          GR = this.module;
        try {
          JR.wasm = null === GR ? JR.wasm : this.hostCall(JR.wasm, (() => GR.FK()))
        } catch {}
        let yR, tR;
        try {
          yR = await this.fetchAnimationTable()
        } catch (uR) {
          return void this.deps.onAnimationsFailed({
            stage: "fetch",
            error: uR
          }, JR)
        }
        if (!this.settleIfTrapped()) {
          try {
            tR = RR.ctR(yR)
          } catch (uR) {
            if (this.stopIfTrapped(uR)) return;
            return void this.deps.onAnimationsFailed({
              stage: "decode",
              error: uR
            }, JR)
          }
          tR || this.deps.onAnimationsFailed({
            stage: "decode",
            error: null
          }, JR)
        }
      }
      async renderingHost() {
        if (null !== this.binding && await this.binding.done, this.settleIfTrapped()) return null;
        const RR = this.host;
        return null !== RR && this.guarded((() => RR.DtR())) ? RR : (this.opening ??= this.openAtHome().finally((() => {
          this.opening = null
        })), this.opening)
      }
      async openAtHome() {
        var RR;
        const JR = null !== (RR = this.module) && void 0 !== RR ? RR : await this.loadModule();
        if (null === JR) return null;
        const GR = this.hostOf(JR),
          yR = () => this.guarded((() => GR.DtR()));
        if (yR()) return GR;
        if (null !== (0, OR.O)() || (0, OR.c)()) return null;
        const tR = this.deps.createCanvas();
        tR.width = 1, tR.height = 1;
        const uR = await this.deps.openExtras();
        if (this.settleIfTrapped()) return null;
        const ZR = (0, HR.g)().sampleCount;
        let qR;
        try {
          qR = await (0, AR.v)(JR, "previewRenderer", tR, ZR, cR.f, uR)
        } catch (iR) {
          throw iR instanceof gR.e ? this.stopForTrap(iR) : (0, AR.t)(iR) && await this.deps.onRenderFailed("start_failed", iR), iR
        }
        return this.guarded((() => GR.HtR(qR))) ? ((0, OR.A)(performance.now()), this.samples = ZR, this.pageCanvas = tR, (0, oR.f)(this.registryOf(JR)), GR) : yR() ? GR : null
      }
      startFrames() {
        null !== this.frameId || this.isStopped || (this.frameId = this.deps.requestFrame(this.frame))
      }
      drawFrame(RR, JR) {
        for (const ZR of this.previews.values()) ZR.feed();
        if (this.stopped) return;
        this.module.ZH(this.deps.heldLow());
        const GR = this.deps.now(),
          yR = RR.frame(JR);
        this.costs.push(this.deps.now() - GR), this.costs.length > 120 && this.costs.shift();
        const tR = 0 !== (256 & yR),
          uR = 255 & yR;
        for (const ZR of this.previews.values()) {
          if (this.stopped) return;
          ZR.collect(tR)
        }
        if (!this.stopped) {
          if (0 !== (512 & yR) && this.deps.onDrew(), tR) {
            const JR = RR.PtR();
            for (let RR = 0; RR + 1 < JR.length; RR += 2) JR[RR] === WR.K.RenderDeviceLost && this.deps.onDeviceLost(), this.logError(JR[RR], JR[RR + 1])
          }
          if (uR !== YR) {
            if (uR === kR) return this.stop(), void this.deps.onFatal(RR.mtR(), RR.ztR());
            if (uR === QR) return this.stop(), void console.warn(`${zR} the previews stopped: the page's renderer went with its session`);
            (0, LR.b)(JR), this.startFrames()
          } else {
            const JR = RR.ItR();
            this.stop();
            const GR = JR[2] === WR.Yc.PIPELINE_FAILED ? "pipeline_failed" : "lost";
            this.deps.onRenderFailed(GR, void 0, JR[1], JR[2] === WR.Yc.RESTORE_LOST)
          }
        }
      }
      get isStopped() {
        return this.stopped || this.isTrapped
      }
      get mayPrefetch() {
        return !this.isStopped && !(0, OR.c)() && null === (0, OR.O)()
      }
      get isTrapped() {
        return null !== this.module && ((0, gR.j)(this.module) || "failed" === (0, eR.s)())
      }
      hostCall(RR, JR) {
        if (this.settleIfTrapped()) return RR;
        try {
          return JR()
        } catch (GR) {
          if (this.stopIfTrapped(GR)) return RR;
          throw GR
        }
      }
      guarded(RR) {
        if (this.settleIfTrapped()) throw new Error("the previews stopped: their module trapped");
        try {
          return RR()
        } catch (JR) {
          throw this.stopIfTrapped(JR), JR
        }
      }
      registryOf(RR) {
        return {
          StR: (JR, GR) => {
            this.hostCall(void 0, (() => {
              RR.StR(JR, GR)
            }))
          },
          jtR: JR => {
            this.hostCall(void 0, (() => {
              RR.jtR(JR)
            }))
          },
          ...void 0 === RR.dtR ? {} : {
            dtR: (JR, GR) => {
              this.hostCall(void 0, (() => {
                var yR;
                null === (yR = RR.dtR) || void 0 === yR || yR.call(RR, JR, GR)
              }))
            }
          },
          ...void 0 === RR.EtR ? {} : {
            EtR: JR => {
              this.hostCall(void 0, (() => {
                var GR;
                null === (GR = RR.EtR) || void 0 === GR || GR.call(RR, JR)
              }))
            }
          }
        }
      }
      settleIfTrapped() {
        return !!this.isTrapped && (this.stopped || (this.stop(), (0, oR.f)(null)), !0)
      }
      stopIfTrapped(RR) {
        return !(null === this.module || !(0, gR.n)(this.module, RR)) && (this.stopForTrap(RR), !0)
      }
      stopForTrap(RR) {
        this.stop(), (0, oR.f)(null), (0, IR.g)("previews", RR)
      }
      stop() {
        this.stopped = !0;
        for (const RR of this.previews.values()) RR.abandon()
      }
      logError(RR, JR) {
        const GR = `${RR}:${JR}`;
        this.loggedErrors.has(GR) || (this.loggedErrors.add(GR), console.warn(`${zR} error ${RR} (detail ${JR})`))
      }
    }
    let ZJ = null;

    function qJ() {
      return ZJ ??= new uJ(function() {
        const RR = (0, lR.m)(aR.clientSideServerUrls.staticUrl, {
          packUrl: RR => {
            var JR, GR;
            return null !== (JR = null === (GR = bR.e.current) || void 0 === GR ? void 0 : GR.modelUrl(RR)) && void 0 !== JR ? JR : null
          }
        });
        return {
          loadModule: yJ,
          startModels: async RR => {
            const {
              pageModelPool: JR
            } = await GR.e(51).then((() => GR(54712))), {
              pool: yR
            } = JR(RR);
            return (RR, JR) => yR.build(RR, JR)
          },
          fetchAnimations: async () => qR(await (0, yR.B)(RJ())),
          playerFile: async () => (await (0, lR.j)()).PLAYER_FILE,
          onAnimationsFailed: (RR, JR) => {
            iR("previewAnimations", RJ(), RR, JR)
          },
          provideBuiltInAnimationPack: RR => {
            wR().provide(RR)
          },
          openExtras: OR.J,
          files: RR,
          images: (0, bR.j)((0, XR.l)(RR.url), (() => bR.e.current)),
          pack: bR.e,
          game: vR.d,
          fetchModel: RR => (0, lR.f)(RR),
          createCanvas: () => document.createElement("canvas"),
          dpr: () => window.devicePixelRatio,
          now: () => performance.now(),
          requestFrame: RR => requestAnimationFrame(RR),
          cancelFrame: RR => {
            cancelAnimationFrame(RR)
          },
          onRenderFailed: JJ,
          onFatal: (RR, JR) => {
            console.error(`${zR} the previews stopped: renderer error ${RR} (detail ${JR})`)
          },
          onDeviceLost: () => {
            (0, OR.M)() === DR.d.webgpu && ((0, CR.e)((0, eR.F)() ? (0, AR.M)((0, eR.w)()) : null), nR.C.lost())
          },
          onDrew: () => {
            nR.C.drew(), (0, MR.q)()
          },
          frameDue: MR.s,
          heldLow: MR.r
        }
      }()), ZJ
    }
    var iJ = GR(664),
      fJ = GR(39862),
      VJ = GR(4555);
    const KJ = {
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
    var wJ = GR(40429),
      rJ = GR(40393),
      eJ = GR(45021);
    class aJ {
      constructor() {
        this.pet = null, this.aura = null, this.companions = {
          pet: null,
          aura: null
        }
      }
      of(RR, JR) {
        const GR = void 0 === RR ? null : (0, rJ.e)(RR),
          yR = void 0 === JR ? null : (0, rJ.d)(JR);
        return GR === this.pet && yR === this.aura || (this.pet = GR, this.aura = yR, this.companions = {
          pet: GR && LJ(GR),
          aura: yR && nJ(yR)
        }), this.companions
      }
    }

    function LJ(RR) {
      var JR;
      const GR = eJ.COSMETIC_MODEL_KEYS.get(RR.model);
      if (void 0 === GR) return console.warn(`[bloxd-previews] pet model ${RR.model} isn't a Player attachment model`), null;
      const {
        scale: yR,
        followOffset: tR,
        yawOffset: uR,
        bobAmplitude: ZR,
        bobHz: qR,
        clips: iR
      } = RR;
      return {
        model: GR,
        scale: yR,
        offset: tR,
        yawOffset: uR,
        bobAmplitude: ZR,
        bobHz: qR,
        flyClip: null !== (JR = null === iR || void 0 === iR ? void 0 : iR.fly) && void 0 !== JR ? JR : null
      }
    }

    function nJ(RR) {
      const {
        opts: JR,
        half: GR
      } = (0, wJ.c)(RR);
      return {
        opts: JSON.stringify(JR),
        offset: RR.offset,
        half: GR
      }
    }
    var UJ = GR(35176),
      WJ = GR(37341),
      AJ = GR(42736);
    const CJ = "[bloxd-previews]",
      XJ = new Uint32Array(5);

    function MJ(RR) {
      return iJ.k.indexOf(RR)
    }
    const BJ = new WeakSet;

    function lJ(RR) {
      const JR = (0, fJ.f)(RR),
        GR = null === JR ? -1 : pJ(JR);
      return -1 !== GR ? GR : (BJ.has(RR) || (BJ.add(RR), console.warn(`${CJ} an animation the previews' table lacks: the mob idles instead`)), -1)
    }

    function pJ(RR) {
      var JR;
      return null !== (JR = KJ[RR]) && void 0 !== JR ? JR : -1
    }

    function gJ(RR, JR) {
      const {
        canvas: GR
      } = JR;
      GR.style.width = "100%", GR.style.height = "100%", GR.style.display = "block", RR.appendChild(GR)
    }

    function bJ(RR) {
      const JR = RR.getBoundingClientRect();
      return [JR.width, JR.height]
    }
    class vJ {
      constructor(RR, JR) {
        this.preview = RR, this.showView = JR
      }
      show(RR) {
        this.showView(this.preview, RR)
      }
      resize(RR, JR) {
        this.preview.resize(RR, JR)
      }
      close() {
        this.preview.close()
      }
    }
    class OJ {
      constructor(RR) {
        this.preview = RR, this.ready = void 0, this.dev = void 0, this.built = !1, this.cosmetics = {}, this.emote = null, this.tunings = new aJ, this.companions = null, this.nametag = null, this.stopRasteringNametag = null, this.detachControls = void 0, this.detachControls = (0, UJ.i)(RR), this.dev = {
          canvas: () => RR.canvas,
          captureFrame: JR => (0, AJ.e)((() => RR.isClosed ? null : RR.canvas), MR.e, JR),
          isolateHead: () => {
            console.warn(`${CJ} isolateHead: noa's character preview only`)
          },
          isolatePet: () => {
            console.warn(`${CJ} isolatePet: noa's character preview only`)
          }
        }, this.apply(), this.ready = RR.untilSettled().then((() => {
          if (RR.isStopped) throw new Error(`${CJ} the previews stopped before the character drew`);
          this.built = !0
        }))
      }
      isReady() {
        return this.built && !this.preview.isClosed
      }
      setCosmetic(RR, JR) {
        this.cosmetics[RR] = JR, this.apply()
      }
      setNametag(RR) {
        var JR;
        if (this.nametag = RR, null === (JR = this.stopRasteringNametag) || void 0 === JR || JR.call(this), this.stopRasteringNametag = null, null === RR || void 0 === RR || !RR.name) return void this.preview.setNametag("", "null", "null");
        const GR = () => {
          this.preview.setNametag(RR.name, JSON.stringify(RR.nameColour), JSON.stringify(RR.ranks))
        };
        WJ.i.untilLoadedFor(RR.name).then((() => {
          this.nametag !== RR || this.preview.isClosed || (GR(), this.stopRasteringNametag = (0, WJ.h)(GR))
        }))
      }
      playEmote(RR) {
        null === RR || RR !== this.emote ? (this.emote = RR, this.apply()) : this.preview.replay()
      }
      untilDrawn(RR) {
        return this.preview.untilSettled()
      }
      setOrbit(RR) {
        let {
          yaw: JR,
          pitch: GR,
          radius: yR
        } = RR;
        const tR = this.preview.orbit;
        null !== tR && this.preview.setOrbit({
          alpha: JR,
          beta: GR,
          radius: null !== yR && void 0 !== yR ? yR : tR.radius
        })
      }
      resetCamera() {}
      resize(RR, JR) {
        this.preview.resize(RR, JR)
      }
      close() {
        var RR;
        null === (RR = this.stopRasteringNametag) || void 0 === RR || RR.call(this), this.detachControls(), this.preview.close()
      }
      apply() {
        var RR;
        this.preview.setPlayer(JSON.stringify(this.cosmetics), XJ, null === (RR = this.emote) ? -1 : pJ(RR));
        const JR = this.tunings.of(this.cosmetics.pet, this.cosmetics.aura);
        JR !== this.companions && (this.companions = JR, this.preview.setCompanions(JR))
      }
    }

    function xJ(RR, JR) {
      let {
        mobType: GR,
        variation: yR,
        animation: tR
      } = JR;
      RR.setMob(MJ(GR), null !== yR && void 0 !== yR ? yR : "", 1, lJ(tR))
    }

    function NJ(RR, JR) {
      let {
        mobType: GR,
        variation: yR,
        metaInfo: tR,
        tamed: uR
      } = JR;
      RR.setPet(MJ(GR), yR, tR, uR)
    }
    const DJ = {
      aimed: .533 / 1.15 * 1.1,
      ready: .16 / .85 * 1.1
    };
    class HJ {
      constructor(RR, JR, GR, yR) {
        this.preview = null, this.closed = !1, this.figure = null, this.shown = !1, this.order = "", this.span = {
          left: 0,
          width: 0
        }, this.lineup = [0, 0], this.given = null, this.loaded = !1, RR(GR.width, yR[1], yR).then((RR => {
          if (this.closed) return void RR.close();
          const {
            style: GR
          } = RR.canvas;
          GR.position = "absolute", GR.top = "0", GR.visibility = "hidden", gJ(JR, RR), this.preview = RR, this.apply()
        })).catch((RR => {
          console.error(`${CJ} couldn't open a lineup figure`, RR)
        }))
      }
      update(RR, JR, GR, yR, tR) {
        this.figure = RR, this.shown = JR, this.order = GR, this.span = yR, this.lineup = tR, this.apply()
      }
      close() {
        var RR;
        this.closed = !0, null === (RR = this.preview) || void 0 === RR || RR.close(), this.preview = null
      }
      apply() {
        var RR;
        const {
          preview: JR,
          figure: GR,
          lineup: yR
        } = this;
        if (null === JR || null === GR) return;
        if (this.given !== GR) {
          var tR;
          this.given = GR, this.loaded = !1;
          const RR = null === GR.gC ? 0 : null !== (tR = (0, VJ.b)(GR.gC)) && void 0 !== tR ? tR : 0;
          JR.setFigure(function(RR) {
            return JSON.stringify(Object.fromEntries(RR.cosmetics))
          }(GR), RR, lJ(GR.animation), GR.size), JR.untilSettled().then((() => {
            this.given === GR && (this.loaded = !0, this.apply())
          }))
        }
        const {
          left: uR,
          width: ZR
        } = this.span;
        JR.resize(ZR, yR[1], yR);
        const {
          style: qR
        } = JR.canvas;
        qR.top = -(null !== (RR = GR.lift) && void 0 !== RR ? RR : 0) * yR[1] + "px", qR.left = `${uR}px`, qR.width = `${ZR}px`, qR.zIndex = this.order, qR.visibility = this.shown && this.loaded ? "visible" : "hidden"
      }
    }
    class oJ {
      constructor(RR, JR) {
        this.open = JR, this.layer = void 0, this.figures = [], this.view = {
          figures: [],
          shown: []
        }, this.size = void 0, this.size = bJ(RR), this.layer = document.createElement("div");
        const {
          style: GR
        } = this.layer;
        GR.position = "relative", GR.isolation = "isolate", GR.overflow = "hidden", GR.width = "100%", GR.height = "100%", GR.pointerEvents = "none", RR.appendChild(this.layer)
      }
      show(RR) {
        this.view = RR, this.place()
      }
      resize(RR, JR) {
        this.size = [RR, JR], this.place()
      }
      close() {
        for (const RR of this.figures) RR.close();
        this.figures = [], this.layer.remove()
      }
      place() {
        const {
          figures: RR,
          shown: JR
        } = this.view;
        for (const yR of this.figures.splice(RR.length)) yR.close();
        const {
          size: GR
        } = this;
        RR.forEach(((yR, tR) => {
          var uR;
          const ZR = function(RR, JR, GR, yR) {
            let [tR, uR] = yR;
            const ZR = (RR + .5) * tR / JR,
              qR = Math.min(Math.max(tR / JR, 2 * GR * uR), 2 * Math.max(ZR, tR - ZR));
            return {
              left: ZR - qR / 2,
              width: qR
            }
          }(tR, RR.length, function(RR) {
            let {
              animation: JR,
              size: GR
            } = RR;
            const {
              aimed: yR,
              ready: tR
            } = DJ;
            return (lJ(JR) === KJ.gunAimed ? yR : tR) * GR
          }(yR), GR);
          this.figures[tR] ??= new HJ(this.open, this.layer, ZR, GR), this.figures[tR].update(yR, null !== (uR = JR[tR]) && void 0 !== uR && uR, function(RR, JR) {
            return String(Math.round(1e3 * RR) + JR)
          }(yR.size, tR), ZR, GR)
        }))
      }
    }
    const cJ = {
      player: jR,
      store: dR,
      showcase: ER
    };
    class PJ {
      constructor(RR) {
        this.page = RR
      }
      async openMob(RR) {
        return new vJ(await this.open(RR, SR), xJ)
      }
      async openPet(RR) {
        return new vJ(await this.open(RR, SR), NJ)
      }
      openMobLineup(RR) {
        return new oJ(RR, ((RR, JR, GR) => this.page.openPreview(SR, RR, JR, GR)))
      }
      async openCharacter(RR, JR) {
        return new OJ(await this.open(RR, cJ[JR]))
      }
      async open(RR, JR) {
        const [GR, yR] = bJ(RR), tR = await this.page.openPreview(JR, GR, yR);
        return gJ(RR, tR), tR
      }
    }
  },
  45013: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/builtInAnimations.anim.1876a593a8239b631bf1.gz"
  },
  45017: (RR, JR, GR) => {
    RR.exports = GR.p + "static/media/previewAnimations.dat.a9c06de838594e8096c6.gz"
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);