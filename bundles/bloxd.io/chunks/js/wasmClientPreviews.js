export const id = 72;
export const ids = [72];
export const modules = {
  40380: (WW, iW, OW) => {
    function mW(WW) {
      return void 0 === WW ? void 0 : [WW[0], WW[1], WW[2]]
    }

    function EW(WW) {
      const iW = WW.particles;
      return {
        opts: {
          texture: iW.texture,
          aZ: iW.aZ,
          minLifeTime: iW.minLifeTime,
          maxLifeTime: iW.maxLifeTime,
          minSize: iW.minSize,
          maxSize: iW.maxSize,
          minEmitPower: iW.minEmitPower,
          maxEmitPower: iW.maxEmitPower,
          emitRate: iW.emitRate,
          gravity: mW(iW.gravity),
          dir1: mW(iW.dir1),
          dir2: mW(iW.dir2),
          colorGradients: iW.colorGradients,
          blendMode: iW.blendMode
        },
        half: [iW.width / 2, iW.height / 2, iW.depth / 2]
      }
    }
    OW.d(iW, {
      d: () => EW
    })
  },
  40337: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => NW,
      g: () => wW,
      h: () => cW,
      i: () => PW
    });
    var mW = OW(192);
    const EW = JSON.parse('{"aura_snowfall":{"offset":[0,2.6,0],"ownInFirstPerson":true,"particles":{"blendMode":1,"capacity":64,"colorGradients":[{"minColor":[255,255,255,0.9],"timeFraction":0},{"minColor":[255,255,255,0],"timeFraction":1}],"depth":3,"dir1":[-0.2,-1,-0.2],"dir2":[0.2,-1,0.2],"emitRate":12,"gravity":[0,-1.5,0],"height":0.2,"maxEmitPower":0.6,"maxLifeTime":2.5,"maxSize":0.15,"minEmitPower":0.3,"minLifeTime":1.5,"minSize":0.08,"texture":"snowflake","width":3}}}'),
      NW = "PetRoot";
    let PW = JSON.parse('{"pet_reindeer":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0},"pet_reindeer2":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0}}'),
      LW = EW;
    new Map, new Map;

    function cW(WW) {
      var iW;
      return null !== (iW = (0, mW.c)(PW, WW)) && void 0 !== iW ? iW : null
    }

    function wW(WW) {
      var iW;
      return null !== (iW = (0, mW.c)(LW, WW)) && void 0 !== iW ? iW : null
    }
  },
  39881: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => EW,
      h: () => NW
    });
    const mW = new WeakMap;

    function EW(WW, iW) {
      return mW.set(WW, iW), WW
    }

    function NW(WW) {
      var iW;
      return null !== (iW = mW.get(WW)) && void 0 !== iW ? iW : null
    }
  },
  42659: (WW, iW, OW) => {
    function mW(WW, iW, OW) {
      return new Promise((mW => {
        const EW = setTimeout((() => {
            NW(), mW(null)
          }), OW),
          NW = iW((() => {
            clearTimeout(EW);
            const iW = WW();
            mW(null === iW ? null : function(WW) {
              if (0 === WW.width || 0 === WW.height) return null;
              const iW = document.createElement("canvas");
              iW.width = WW.width, iW.height = WW.height;
              const OW = iW.getContext("2d");
              return OW ? (OW.drawImage(WW, 0, 0), iW) : null
            }(iW))
          }))
      }))
    }
    OW.d(iW, {
      c: () => mW
    })
  },
  37327: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => NW
    });
    const mW = 4e5,
      EW = 2;

    function NW(WW, iW, OW) {
      let [NW, PW] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [WW, iW], LW = Math.min(Number.isFinite(OW) && OW > 0 ? OW : 1, EW);
      const cW = Math.max(0, NW, WW) * Math.max(0, PW, iW) * LW * LW;
      return cW > mW && (LW *= Math.sqrt(mW / cW)), [Math.max(1, Math.floor(Math.max(0, WW) * LW)), Math.max(1, Math.floor(Math.max(0, iW) * LW))]
    }
  },
  35247: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => mW,
      f: () => tW
    });
    const mW = .01,
      EW = .08,
      NW = .01,
      PW = 5,
      LW = 100,
      cW = 40,
      wW = 800;

    function tW(WW) {
      const {
        canvas: iW
      } = WW;
      let OW = null;
      const tW = WW => {
          var mW;
          OW = {
            pointer: WW.pointerId,
            x: WW.clientX,
            y: WW.clientY
          }, null === (mW = iW.setPointerCapture) || void 0 === mW || mW.call(iW, WW.pointerId)
        },
        ZW = iW => {
          var EW;
          const PW = WW.orbit;
          if ((null === (EW = OW) || void 0 === EW ? void 0 : EW.pointer) !== iW.pointerId || null === PW) return;
          const LW = iW.clientX - OW.x,
            cW = iW.clientY - OW.y;
          OW = {
            ...OW,
            x: iW.clientX,
            y: iW.clientY
          }, WW.setOrbit({
            alpha: PW.alpha - LW * mW,
            beta: Math.min(Math.PI - NW, Math.max(NW, PW.beta - cW * mW)),
            radius: PW.radius
          })
        },
        xW = WW => {
          var iW;
          (null === (iW = OW) || void 0 === iW ? void 0 : iW.pointer) === WW.pointerId && (OW = null)
        },
        lW = iW => {
          const OW = WW.orbit;
          if (null === OW) return;
          iW.preventDefault();
          const mW = iW.deltaY * (iW.deltaMode === WheelEvent.DOM_DELTA_LINE ? cW : iW.deltaMode === WheelEvent.DOM_DELTA_PAGE ? wW : 1),
            NW = Math.min(LW, Math.max(PW, OW.radius + mW * EW));
          WW.setOrbit({
            ...OW,
            radius: NW
          })
        };
      return iW.style.touchAction = "none", iW.addEventListener("pointerdown", tW), iW.addEventListener("pointermove", ZW), iW.addEventListener("pointerup", xW), iW.addEventListener("pointercancel", xW), iW.addEventListener("wheel", lW, {
        passive: !1
      }), () => {
        iW.removeEventListener("pointerdown", tW), iW.removeEventListener("pointermove", ZW), iW.removeEventListener("pointerup", xW), iW.removeEventListener("pointercancel", xW), iW.removeEventListener("wheel", lW)
      }
    }
  },
  44911: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      WasmPreviewHost: () => fi,
      pageBuiltInAnimationPack: () => xW,
      pagePreviews: () => Li,
      previewModule: () => QW
    });
    var mW = OW(2388),
      EW = OW(649);
    const NW = "[bloxd-wasm-client]";

    function PW(WW) {
      const iW = {
        wasm: "unknown",
        client: String(EW.d)
      };
      try {
        var OW;
        iW.wasm = null !== (OW = null === WW || void 0 === WW ? void 0 : WW.RZ()) && void 0 !== OW ? OW : iW.wasm
      } catch {}
      return iW
    }
    async function LW(WW) {
      if (WW.length < 2 || 31 !== WW[0] || 139 !== WW[1]) return WW;
      if ("undefined" === typeof DecompressionStream) {
        const {
          ungzip: iW
        } = await Promise.resolve().then((() => OW(3876)));
        return iW(WW)
      }
      const iW = new Blob([WW]).stream().pipeThrough(new DecompressionStream("gzip"));
      return new Uint8Array(await new Response(iW).arrayBuffer())
    }

    function cW(WW, iW, mW, EW) {
      Promise.resolve().then((() => OW(42266))).then((OW => {
        let {
          reportDataLoadFailure: NW
        } = OW;
        NW(WW, iW, mW, EW)
      }), (iW => {
        console.warn(`${NW} ${WW} didn't load, and the report couldn't be sent`, mW.error, iW)
      }))
    }
    const wW = [3e4, 12e4, 3e5];
    class tW {
      constructor(WW) {
        this.deps = WW, this.loading = null, this.reported = !1, this.retries = 0, this.resolveSet = () => {}, this.set = new Promise((WW => {
          this.resolveSet = WW
        }))
      }
      provide(WW) {
        return this.loading ??= this.load(WW), this.loading
      }
      whenSet() {
        return this.set
      }
      async load(WW) {
        const iW = PW(WW),
          OW = await async function(WW, iW) {
            let OW;
            try {
              OW = await WW()
            } catch (mW) {
              return {
                stage: "fetch",
                error: mW
              }
            }
            try {
              return iW(OW) ? null : {
                stage: "decode",
                error: null
              }
            } catch (mW) {
              return {
                stage: "decode",
                error: mW
              }
            }
          }((() => this.deps.fetch()), (iW => {
            const OW = WW.omW(iW);
            return OW && this.resolveSet(iW), OW
          }));
        if (null !== OW) {
          if ("fetch" === OW.stage) {
            this.loading = null;
            const iW = wW[this.retries++];
            void 0 !== iW && this.deps.later((() => {
              this.provide(WW)
            }), iW)
          }
          this.reported || (this.reported = !0, this.deps.onFailed(OW, iW))
        }
      }
    }
    let ZW = null;

    function xW() {
      return ZW ??= new tW({
        fetch: async () => LW(await (0, mW.C)(lW(), {
          priority: "low"
        })),
        onFailed: (WW, iW) => {
          cW("builtInAnimations", lW(), WW, iW)
        },
        later: (WW, iW) => {
          setTimeout(WW, iW)
        }
      }), ZW
    }

    function lW() {
      return OW(44913)
    }
    var AW = OW(2381),
      bW = OW(1185),
      jW = OW(324),
      UW = OW(315),
      kW = OW(671),
      sW = OW(5546),
      MW = OW(42216),
      KW = OW(42240),
      SW = OW(42448),
      YW = (OW(42244), OW(37325)),
      yW = OW(42330),
      TW = OW(42339),
      JW = OW(42344),
      hW = OW(42225),
      HW = OW(42461),
      nW = OW(42463),
      uW = OW(42255),
      oW = OW(42362),
      dW = OW(42388),
      eW = OW(42358),
      vW = OW(42402),
      gW = OW(42455),
      DW = OW(37336),
      VW = OW(37265),
      pW = OW(2372),
      fW = OW(37327);
    const CW = "[bloxd-previews]",
      XW = 0,
      BW = 1,
      qW = 2,
      RW = 3,
      GW = 1,
      IW = 2,
      aW = 3,
      rW = 0,
      zW = 1,
      FW = 2;

    function QW(WW) {
      const iW = WW,
        OW = (0, MW.M)(WW),
        mW = (0, MW.n)(WW);
      return null !== OW && null !== mW && "function" === typeof iW.dmW && "function" === typeof iW.emW && "function" === typeof iW.vmW && "function" === typeof iW.DH ? iW : null
    }

    function Wi() {
      return OW(44918)
    }
    async function ii(WW, iW, mW) {
      var EW;
      let NW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      "lost" === WW && (0, uW.x)();
      const LW = await (0, uW.J)();
      if (null === LW || (0, MW.r)(LW) || (0, uW.c)()) return;
      const cW = "webgpu" === LW.backend;
      if (!cW && "lost" !== WW) return;
      const wW = cW && (0, UW.p)(LW.adapter, null !== mW && void 0 !== mW ? mW : null, "lost" === WW, NW),
        tW = null !== (EW = "lost" === WW ? (0, KW.n)((0, AW.R)() ? (0, MW.M)((0, AW.G)()) : null) : void 0) && void 0 !== EW ? EW : iW,
        ZW = cW ? (0, MW.Z)(WW, void 0, (0, KW.e)(tW)) : (0, kW.u)() ? null : kW.i;
      if (null === ZW) {
        (0, uW.o)();
        try {
          await async function(WW, iW, mW, EW, NW) {
            let {
              restoreLost: LW,
              adapterRemembered: cW
            } = NW;
            const wW = (0, AW.R)(),
              {
                flushCrashReports: tW,
                reportRenderReload: ZW
              } = await Promise.resolve().then((() => OW(42266)));
            ZW(WW.backend, EW, PW(wW ? (0, AW.G)() : null), {
              from: "home",
              cause: iW,
              restoreLost: LW,
              adapterRemembered: cW,
              ...Oi(WW, iW, mW)
            }), await tW(dW.d)
          }(LW, WW, tW, null !== mW && void 0 !== mW ? mW : "start_failed" === WW ? 0 : 1, {
            restoreLost: NW,
            adapterRemembered: wW
          })
        } catch (lW) {
          console.warn(`${CW} ${LW.backend} failed at home (${WW}), and its report couldn't be sent`, lW)
        }(0, dW.j)()
      } else {
        var xW;
        const iW = Oi(LW, WW, tW),
          mW = `${cW?"WebGPU":"WebGL"} failed at home (${WW}${void 0===iW.error?"":`: ${iW.error instanceof Error?iW.error.message:(0,VW.m)(iW.error)}`}) and ${ZW}`;
        console.warn(`${CW} ${mW}: the previews stop`, null !== (xW = iW.error) && void 0 !== xW ? xW : ""), (0, uW.r)({
          why: mW,
          webgpu: cW
        });
        try {
          const {
            countRenderLost: mW
          } = await Promise.resolve().then((() => OW(42266)));
          mW(WW, iW.error, iW.context)
        } catch (bW) {
          console.warn(`${CW} ${LW.backend} failed at home (${WW}), and its count couldn't be sent`, bW)
        }
      }
    }

    function Oi(WW, iW, OW) {
      let {
        adapter: mW
      } = WW;
      return {
        error: OW,
        context: {
          adapter: mW,
          boundAtMs: "start_failed" === iW ? null : (0, uW.G)(),
          indirectHangs: (0, uW.y)(),
          restoresSkipped: (0, uW.H)()
        }
      }
    }
    async function mi(WW) {
      if (!(0, AW.R)()) {
        await (null === WW || void 0 === WW ? void 0 : WW("renderer pick", {
          longStep: !0
        }));
        const iW = await (0, uW.J)();
        if (null === iW || (0, MW.r)(iW)) return null;
        const OW = await iW.load();
        if (await (null === WW || void 0 === WW ? void 0 : WW("renderer instantiation", {
            longStep: !0
          })), await (0, oW.c)(OW), !(0, AW.R)()) return null
      }
      return QW((0, AW.G)())
    }
    class Ei {
      constructor(WW, iW, OW, mW, EW, NW) {
        this.page = WW, this.host = iW, this.id = OW, this.canvas = mW, this.size = EW, this.models = void 0, this.images = void 0, this.write = void 0, this.outcomes = [], this.closed = !1, this.quiet = 0, this.settled = [];
        const PW = {
            ...NW.images,
            glbUrl: WW => {
              var iW;
              return null !== (iW = this.models.drawnUrl(WW)) && void 0 !== iW ? iW : NW.images.glbUrl(WW)
            }
          },
          LW = iW => WW.modelFile(iW);
        this.images = new SW.g(PW, (WW => {
          console.warn(`${CW} image ${WW.key.kind}:${WW.key.index}:${WW.key.word} failed`, WW.error)
        }), {
          fetchFile: LW,
          fetchImage: iW => WW.imageFile(iW)
        }), WW.startModels(), this.models = new yW.f(NW.files, ((iW, OW) => WW.buildModel(iW, OW)), (WW => {
          console.warn(`${CW} model file ${WW.file} (${WW.url}) failed`, WW.error)
        }), {
          fetchFile: LW,
          onWritten: (WW, iW) => {
            this.images.glbWritten(WW, iW)
          },
          onTaken: (WW, iW) => {
            this.images.glbTaken(WW, iW)
          }
        }), this.write = (WW, iW, OW) => {
          if (this.closed) return !0;
          if (WW === yW.b) {
            const WW = new DataView(OW.buffer, OW.byteOffset, JW.b),
              mW = WW.getUint32(0, !0),
              EW = WW.getUint32(JW.d, !0),
              NW = this.page.hostCall(FW, (() => this.host.gmW(this.id, mW, iW, OW.subarray(JW.b))));
            return this.outcomes.push([EW, NW]), !0
          }
          return WW === SW.d && (this.page.hostCall(void 0, (() => {
            this.host.DmW(this.id, OW)
          })), !0)
        }
      }
      get isClosed() {
        return this.closed
      }
      get isStopped() {
        return this.page.isStopped
      }
      resize(WW, iW, OW) {
        if (this.closed) return;
        const [mW, EW] = (0, fW.b)(WW, iW, this.page.dpr(), OW);
        mW === this.size[0] && EW === this.size[1] || (this.size = [mW, EW], this.page.hostCall(void 0, (() => {
          this.host.resize(this.id, mW, EW)
        })))
      }
      setMob(WW, iW, OW, mW) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.VmW(this.id, WW, iW, OW, mW))))
      }
      setPet(WW, iW, OW, mW) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.pmW(this.id, WW, iW, OW, mW))))
      }
      setPlayer(WW, iW, OW) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.fmW(this.id, WW, iW, OW))))
      }
      setCompanions(WW) {
        var iW;
        let {
          pet: OW,
          aura: mW
        } = WW;
        if (this.closed) return;
        const EW = null !== (iW = null === OW || void 0 === OW ? void 0 : OW.model) && void 0 !== iW ? iW : -1,
          NW = new Float64Array(OW ? [OW.scale, ...OW.offset, OW.yawOffset, OW.bobAmplitude, OW.bobHz] : []),
          PW = new Float64Array(mW ? [...mW.offset, ...mW.half] : []);
        this.page.hostCall(void 0, (() => {
          var WW, iW;
          this.host.CmW(this.id, EW, NW, null !== (WW = null === OW || void 0 === OW ? void 0 : OW.flyClip) && void 0 !== WW ? WW : "", null !== (iW = null === mW || void 0 === mW ? void 0 : mW.opts) && void 0 !== iW ? iW : "", PW)
        }))
      }
      setNametag(WW, iW, OW) {
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.XmW(this.id, WW, iW, OW)
        }))
      }
      setFigure(WW, iW, OW, mW) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.BmW(this.id, WW, iW, OW, mW))))
      }
      replay() {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.replay(this.id))))
      }
      get orbit() {
        if (this.closed) return null;
        const WW = this.page.hostCall(null, (() => this.host.orbit(this.id)));
        return null === WW || WW.length < 3 ? null : {
          alpha: WW[0],
          beta: WW[1],
          radius: WW[2]
        }
      }
      setOrbit(WW) {
        let {
          alpha: iW,
          beta: OW,
          radius: mW
        } = WW;
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.qmW(this.id, iW, OW, mW)
        }))
      }
      untilSettled() {
        return this.closed || this.page.isStopped ? Promise.resolve() : (this.quiet = 0, new Promise((WW => {
          this.settled.push(WW)
        })))
      }
      packChanged() {
        this.quiet = 0, this.models.refresh(), (0, HW.i)(this.images)
      }
      feed() {
        this.models.drain(this.write);
        for (const [WW, iW] of this.outcomes) {
          const OW = iW === rW ? [] : [iW === zW ? WW : (WW | yW.c) >>> 0];
          this.models.taken(WW, OW)
        }
        this.outcomes.length = 0, this.images.drain(this.write)
      }
      collect(WW) {
        let iW = !1;
        if (WW) {
          const WW = this.host.RmW(this.id);
          for (const iW of WW) this.models.request(iW);
          const OW = this.host.GmW(this.id);
          OW.length > 0 && this.images.onEvent(OW), iW = WW.length > 0 || OW.length > 0
        }
        const OW = this.page.modelsUnavailable ? 0 : this.models.asking + this.models.unanswered,
          mW = iW || OW > 0 || this.images.waiting > 0 || this.images.inFlight > 0;
        this.quiet = mW ? 0 : this.quiet + 1, this.quiet >= 3 && this.resolveSettled()
      }
      close() {
        this.closed || (this.closed = !0, this.page.closePreview(this), this.resolveSettled())
      }
      abandon() {
        this.resolveSettled()
      }
      dispose(WW) {
        this.page.hostCall(void 0, (() => {
          const iW = this.host.close(this.id);
          iW.length > 0 && this.images.onEvent(iW), this.page.isTrapped || WW.vmW(this.id)
        })), this.images.dispose(), this.canvas.remove()
      }
      resolveSettled() {
        const WW = this.settled;
        this.settled = [];
        for (const iW of WW) iW()
      }
    }
    class Ni {
      constructor(WW) {
        this.deps = WW, this.module = null, this.host = null, this.opening = null, this.pageCanvas = null, this.samples = 1, this.binding = null, this.sessionEnds = 0, this.lastEndReturned = !0, this.previews = new Map, this.nextId = 1, this.frameId = null, this.stopped = !1, this.loggedErrors = new Set, this.modelsListener = {
          onUnavailable: WW => {
            this.modelsFailed(WW)
          },
          onWorkerLost: WW => {
            this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${CW} a model worker was lost: ${WW}`))
          },
          onModuleRetry: () => {}
        }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.kA = {
          setShaderPack: (WW, iW, OW, mW, EW) => (this.shaderPackArgs = [WW, iW, OW, mW, EW], this.handOverShaderPack(), !0)
        }, this.frame = WW => {
          this.frameId = null;
          const iW = this.host;
          if (null !== iW && 0 !== this.previews.size && !this.settleIfTrapped() && !this.stopped)
            if (this.deps.frameDue(WW)) try {
              this.drawFrame(iW, WW)
            } catch (OW) {
              if (!this.stopIfTrapped(OW) && (this.stop(), (0, MW.s)(OW))) return void this.deps.onRenderFailed("frames_refused", OW);
              console.warn(`${CW} the previews stopped: their frame threw`, OW)
            } else this.startFrames()
        }, WW.pack.onChange((() => {
          this.packChanged()
        })), WW.game.onGameChange((() => {
          this.tellInGame()
        }))
      }
      packChanged() {
        if (!this.stopped)
          for (const WW of this.previews.values()) WW.packChanged()
      }
      dpr() {
        return this.deps.dpr()
      }
      get sessionBound() {
        var WW, iW;
        return null !== (WW = null === (iW = this.host) || void 0 === iW ? void 0 : iW.attached()) && void 0 !== WW && WW
      }
      get open() {
        return this.previews.size
      }
      get frameCostMs() {
        return 0 === this.costs.length ? 0 : this.costs.reduce(((WW, iW) => WW + iW), 0) / this.costs.length
      }
      async bindSession(WW, iW, OW) {
        const mW = this.binding,
          EW = this.sessionEnds;
        try {
          const NW = this.hostOf(WW);
          if (!NW.ImW()) {
            const iW = (0, vW.e)().sampleCount,
              PW = await OW(iW);
            if (this.sessionEnds !== EW) return this.keepRendererOfEndedSession(WW, NW, PW, iW, mW), iW;
            if (!NW.amW(PW)) throw new Error("the page has a renderer already");
            (0, uW.u)(performance.now()), this.samples = iW, (0, gW.d)((0, MW.n)(WW))
          }
          if (!NW.attach(iW)) throw new Error("the page's renderer is lent to another session");
          return this.samples
        } finally {
          this.binding === mW && this.endBinding()
        }
      }
      keepRendererOfEndedSession(WW, iW, OW, mW, EW) {
        if (!this.lastEndReturned || null !== this.binding && this.binding !== EW) try {
          OW.free()
        } catch (NW) {
          console.warn(`${CW} an ended session's renderer didn't free`, NW)
        } else iW.amW(OW) && ((0, uW.u)(performance.now()), this.samples = mW, (0, gW.d)(this.registryOf(WW)))
      }
      async beginSession() {
        var WW;
        let iW = () => {};
        const OW = new Promise((WW => {
          iW = WW
        }));
        this.binding = {
          done: OW,
          release: iW
        }, await (null === (WW = this.opening) || void 0 === WW ? void 0 : WW.catch((() => null)));
        const mW = this.pageCanvas;
        return this.pageCanvas = null, mW
      }
      endSession(WW) {
        var iW, OW;
        if (this.sessionEnds++, this.lastEndReturned = WW, this.endBinding(), WW) {
          try {
            var mW;
            null === (mW = this.host) || void 0 === mW || mW.detach()
          } catch (EW) {
            return void console.warn(`${CW} the session's core kept the page's renderer`, EW)
          }!0 === (null === (iW = this.host) || void 0 === iW ? void 0 : iW.attached()) && console.warn(`${CW} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (OW = this.host) || void 0 === OW ? void 0 : OW.ImW()) && (0, gW.d)(this.registryOf(this.module))
        }
      }
      endBinding() {
        var WW;
        null === (WW = this.binding) || void 0 === WW || WW.release(), this.binding = null
      }
      async openPreview(WW, iW, OW, mW) {
        const EW = await this.renderingHost(),
          NW = this.module;
        if (null === EW || null === NW) throw new Error("this page can't draw previews: it has no renderer build");
        if (this.animations ??= this.loadAnimations(EW), this.deps.pack.wanted(), this.isStopped) throw new Error("the previews stopped");
        this.guarded((() => {
          this.deps.provideBuiltInAnimationPack(NW)
        }));
        const PW = this.nextId++,
          LW = this.deps.createCanvas(),
          [cW, wW] = (0, fW.b)(iW, OW, this.deps.dpr(), mW);
        LW.width = cW, LW.height = wW;
        if (!this.guarded((() => (NW.emW(PW, LW), EW.open(PW, cW, wW, WW))))) throw this.hostCall(void 0, (() => {
          NW.vmW(PW)
        })), new Error("the page's renderer is lent to a session that is running");
        this.restartModelsIfFailed();
        const tW = new Ei(this, EW, PW, LW, [cW, wW], this.deps);
        return this.previews.set(PW, tW), this.startFrames(), tW
      }
      prefetch(WW) {
        if (this.prefetched || !this.mayPrefetch) return;
        this.prefetched = !0;
        (null === this.module ? this.loadModule(WW) : Promise.resolve(this.module)).then((async iW => {
          null !== iW && (await (null === WW || void 0 === WW ? void 0 : WW("preview workers and files")), this.mayPrefetch && (this.startModels(), this.fetchAnimationTable().catch((() => {})), this.prefetchPlayerFiles()))
        }), (() => {}))
      }
      modelFile(WW) {
        return this.prefetchedOr(WW, this.deps.fetchModel)
      }
      imageFile(WW) {
        return this.prefetchedOr(WW, mW.C)
      }
      prefetchedOr(WW, iW) {
        const OW = this.prefetchedFiles.get(WW);
        return void 0 === OW ? iW(WW) : OW.catch((() => iW(WW)))
      }
      async prefetchPlayerFiles() {
        const WW = this.deps.playerFile().then((WW => this.deps.files.url(WW))),
          iW = await Promise.all([WW, this.deps.images.lifeformAtlasUrl(HW.e)]).catch((() => null));
        if (null === iW) return;
        const [OW, mW] = iW, EW = (WW, iW) => {
          if (null === WW) return;
          const OW = iW(WW);
          this.prefetchedFiles.set(WW, OW), OW.catch((() => {
            this.prefetchedFiles.delete(WW)
          }))
        };
        EW(OW, (WW => this.modelFile(WW))), EW(mW, (WW => this.imageFile(WW)))
      }
      loadModule(WW) {
        return this.moduleLoad ??= this.deps.loadModule(WW).then((WW => (null === WW && (this.moduleLoad = null), WW)), (WW => {
          throw this.moduleLoad = null, WW
        })), this.moduleLoad
      }
      fetchAnimationTable() {
        return this.animationTable ??= this.deps.fetchAnimations().catch((WW => {
          throw this.animationTable = null, WW
        })), this.animationTable
      }
      get modelsUnavailable() {
        return this.unavailable
      }
      startModels() {
        this.models ??= this.deps.startModels(this.modelsListener).catch((WW => (this.modelsFailed(WW), () => new Promise((() => {})))))
      }
      buildModel(WW, iW) {
        return this.startModels(), this.models.then((OW => OW(WW, iW))).then((WW => this.unavailable ? new Promise((() => {})) : WW))
      }
      restartModelsIfFailed() {
        this.unavailable && !this.modelsRestarted && 0 === this.previews.size && (this.modelsRestarted = !0, this.models = null, this.unavailable = !1, this.startModels())
      }
      modelsFailed(WW) {
        this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${CW} the model workers didn't start: models won't draw in the previews`, WW))
      }
      called(WW) {
        return 0 !== WW && this.logError(WW, 0), WW
      }
      closePreview(WW) {
        this.previews.delete(WW.id), null !== this.module && WW.dispose(this.module), 0 === this.previews.size && null !== this.frameId && (this.deps.cancelFrame(this.frameId), this.frameId = null)
      }
      hostOf(WW) {
        if (null !== this.module && this.module !== WW) throw new Error("a second renderer module on one page");
        return this.module = WW, null === this.host && (this.host = this.guarded((() => new WW.dmW)), this.tellInGame(), this.handOverShaderPack()), this.host
      }
      tellInGame() {
        const {
          host: WW
        } = this;
        null !== WW && this.outsideCall("the game's start or end", (() => {
          WW.rmW(this.deps.game.inGame())
        }))
      }
      handOverShaderPack() {
        const {
          host: WW,
          shaderPackArgs: iW
        } = this;
        null !== WW && null !== iW && this.outsideCall("the shader pack's hand-over", (() => {
          WW.umW(...iW) || console.warn(`${CW} the host refused the shader pack: previews draw without it at home`)
        }))
      }
      outsideCall(WW, iW) {
        try {
          this.hostCall(void 0, iW)
        } catch (OW) {
          this.stop(), console.warn(`${CW} the previews stopped: ${WW} threw`, OW)
        }
      }
      async loadAnimations(WW) {
        const iW = PW(null),
          OW = this.module;
        try {
          iW.wasm = null === OW ? iW.wasm : this.hostCall(iW.wasm, (() => OW.RZ()))
        } catch {}
        let mW, EW;
        try {
          mW = await this.fetchAnimationTable()
        } catch (NW) {
          return void this.deps.onAnimationsFailed({
            stage: "fetch",
            error: NW
          }, iW)
        }
        if (!this.settleIfTrapped()) {
          try {
            EW = WW.zmW(mW)
          } catch (NW) {
            if (this.stopIfTrapped(NW)) return;
            return void this.deps.onAnimationsFailed({
              stage: "decode",
              error: NW
            }, iW)
          }
          EW || this.deps.onAnimationsFailed({
            stage: "decode",
            error: null
          }, iW)
        }
      }
      async renderingHost() {
        if (null !== this.binding && await this.binding.done, this.settleIfTrapped()) return null;
        const WW = this.host;
        return null !== WW && this.guarded((() => WW.ImW())) ? WW : (this.opening ??= this.openAtHome().finally((() => {
          this.opening = null
        })), this.opening)
      }
      async openAtHome() {
        var WW;
        const iW = null !== (WW = this.module) && void 0 !== WW ? WW : await this.loadModule();
        if (null === iW) return null;
        const OW = this.hostOf(iW),
          mW = () => this.guarded((() => OW.ImW()));
        if (mW()) return OW;
        if (null !== (0, uW.F)() || (0, uW.c)()) return null;
        const EW = this.deps.createCanvas();
        EW.width = 1, EW.height = 1;
        const NW = await this.deps.openExtras();
        if (this.settleIfTrapped()) return null;
        const PW = (0, vW.e)().sampleCount;
        let LW;
        try {
          LW = await (0, MW.x)(iW, "previewRenderer", EW, PW, DW.h, NW)
        } catch (cW) {
          throw cW instanceof hW.e ? this.stopForTrap(cW) : (0, MW.u)(cW) && await this.deps.onRenderFailed("start_failed", cW), cW
        }
        return this.guarded((() => OW.amW(LW))) ? ((0, uW.u)(performance.now()), this.samples = PW, this.pageCanvas = EW, (0, gW.d)(this.registryOf(iW)), OW) : mW() ? OW : null
      }
      startFrames() {
        null !== this.frameId || this.isStopped || (this.frameId = this.deps.requestFrame(this.frame))
      }
      drawFrame(WW, iW) {
        for (const PW of this.previews.values()) PW.feed();
        if (this.stopped) return;
        this.module.DH(this.deps.heldLow());
        const OW = this.deps.now(),
          mW = WW.frame(iW);
        this.costs.push(this.deps.now() - OW), this.costs.length > 120 && this.costs.shift();
        const EW = 0 !== (256 & mW),
          NW = 255 & mW;
        for (const PW of this.previews.values()) {
          if (this.stopped) return;
          PW.collect(EW)
        }
        if (!this.stopped) {
          if (0 !== (512 & mW) && this.deps.onDrew(), EW) {
            const iW = WW.FmW();
            for (let WW = 0; WW + 1 < iW.length; WW += 2) iW[WW] === sW.D.RenderDeviceLost && this.deps.onDeviceLost(), this.logError(iW[WW], iW[WW + 1])
          }
          if (NW !== GW) {
            if (NW === IW) return this.stop(), void this.deps.onFatal(WW.WEW(), WW.iEW());
            if (NW === aW) return this.stop(), void console.warn(`${CW} the previews stopped: the page's renderer went with its session`);
            (0, jW.c)(iW), this.startFrames()
          } else {
            const iW = WW.QmW();
            this.stop();
            const OW = iW[2] === sW.cd.PIPELINE_FAILED ? "pipeline_failed" : "lost";
            this.deps.onRenderFailed(OW, void 0, iW[1], iW[2] === sW.cd.RESTORE_LOST)
          }
        }
      }
      get isStopped() {
        return this.stopped || this.isTrapped
      }
      get mayPrefetch() {
        return !this.isStopped && !(0, uW.c)() && null === (0, uW.F)()
      }
      get isTrapped() {
        return null !== this.module && ((0, hW.i)(this.module) || "failed" === (0, AW.D)())
      }
      hostCall(WW, iW) {
        if (this.settleIfTrapped()) return WW;
        try {
          return iW()
        } catch (OW) {
          if (this.stopIfTrapped(OW)) return WW;
          throw OW
        }
      }
      guarded(WW) {
        if (this.settleIfTrapped()) throw new Error("the previews stopped: their module trapped");
        try {
          return WW()
        } catch (iW) {
          throw this.stopIfTrapped(iW), iW
        }
      }
      registryOf(WW) {
        return {
          OEW: (iW, OW) => {
            this.hostCall(void 0, (() => {
              WW.OEW(iW, OW)
            }))
          },
          mEW: iW => {
            this.hostCall(void 0, (() => {
              WW.mEW(iW)
            }))
          },
          ...void 0 === WW.EEW ? {} : {
            EEW: (iW, OW) => {
              this.hostCall(void 0, (() => {
                var mW;
                null === (mW = WW.EEW) || void 0 === mW || mW.call(WW, iW, OW)
              }))
            }
          },
          ...void 0 === WW.PEW ? {} : {
            PEW: iW => {
              this.hostCall(void 0, (() => {
                var OW;
                null === (OW = WW.PEW) || void 0 === OW || OW.call(WW, iW)
              }))
            }
          }
        }
      }
      settleIfTrapped() {
        return !!this.isTrapped && (this.stopped || (this.stop(), (0, gW.d)(null)), !0)
      }
      stopIfTrapped(WW) {
        return !(null === this.module || !(0, hW.k)(this.module, WW)) && (this.stopForTrap(WW), !0)
      }
      stopForTrap(WW) {
        this.stop(), (0, gW.d)(null), (0, pW.g)("previews", WW)
      }
      stop() {
        this.stopped = !0;
        for (const WW of this.previews.values()) WW.abandon()
      }
      logError(WW, iW) {
        const OW = `${WW}:${iW}`;
        this.loggedErrors.has(OW) || (this.loggedErrors.add(OW), console.warn(`${CW} error ${WW} (detail ${iW})`))
      }
    }
    let Pi = null;

    function Li() {
      return Pi ??= new Ni(function() {
        const WW = (0, TW.p)(bW.clientSideServerUrls.staticUrl, {
          packUrl: WW => {
            var iW, OW;
            return null !== (iW = null === (OW = HW.h.current) || void 0 === OW ? void 0 : OW.modelUrl(WW)) && void 0 !== iW ? iW : null
          }
        });
        return {
          loadModule: mi,
          startModels: async WW => {
            const {
              pageModelPool: iW
            } = await OW.e(51).then((() => OW(54853))), {
              pool: mW
            } = iW(WW);
            return (WW, iW) => mW.build(WW, iW)
          },
          fetchAnimations: async () => LW(await (0, mW.C)(Wi())),
          playerFile: async () => (await (0, TW.l)()).PLAYER_FILE,
          onAnimationsFailed: (WW, iW) => {
            cW("previewAnimations", Wi(), WW, iW)
          },
          provideBuiltInAnimationPack: WW => {
            xW().provide(WW)
          },
          openExtras: uW.z,
          files: WW,
          images: (0, HW.m)((0, SW.q)(WW.url), (() => HW.h.current)),
          pack: HW.h,
          game: nW.d,
          fetchModel: WW => (0, TW.h)(WW),
          createCanvas: () => document.createElement("canvas"),
          dpr: () => window.devicePixelRatio,
          now: () => performance.now(),
          requestFrame: WW => requestAnimationFrame(WW),
          cancelFrame: WW => {
            cancelAnimationFrame(WW)
          },
          onRenderFailed: ii,
          onFatal: (WW, iW) => {
            console.error(`${CW} the previews stopped: renderer error ${WW} (detail ${iW})`)
          },
          onDeviceLost: () => {
            (0, uW.B)() === eW.e.webgpu && ((0, KW.h)((0, AW.R)() ? (0, MW.M)((0, AW.G)()) : null), UW.G.lost())
          },
          onDrew: () => {
            UW.G.drew(), (0, YW.l)()
          },
          frameDue: YW.r,
          heldLow: YW.o
        }
      }()), Pi
    }
    var ci = OW(632),
      wi = OW(39881),
      ti = OW(4454);
    const Zi = {
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
    var xi = OW(40380),
      li = OW(40337),
      Ai = OW(44924);
    class bi {
      constructor() {
        this.pet = null, this.aura = null, this.companions = {
          pet: null,
          aura: null
        }
      }
      of(WW, iW) {
        const OW = void 0 === WW ? null : (0, li.h)(WW),
          mW = void 0 === iW ? null : (0, li.g)(iW);
        return OW === this.pet && mW === this.aura || (this.pet = OW, this.aura = mW, this.companions = {
          pet: OW && ji(OW),
          aura: mW && Ui(mW)
        }), this.companions
      }
    }

    function ji(WW) {
      var iW;
      const OW = Ai.COSMETIC_MODEL_KEYS.get(WW.model);
      if (void 0 === OW) return console.warn(`[bloxd-previews] pet model ${WW.model} isn't a Player attachment model`), null;
      const {
        scale: mW,
        followOffset: EW,
        yawOffset: NW,
        bobAmplitude: PW,
        bobHz: LW,
        clips: cW
      } = WW;
      return {
        model: OW,
        scale: mW,
        offset: EW,
        yawOffset: NW,
        bobAmplitude: PW,
        bobHz: LW,
        flyClip: null !== (iW = null === cW || void 0 === cW ? void 0 : cW.fly) && void 0 !== iW ? iW : null
      }
    }

    function Ui(WW) {
      const {
        opts: iW,
        half: OW
      } = (0, xi.d)(WW);
      return {
        opts: JSON.stringify(iW),
        offset: WW.offset,
        half: OW
      }
    }
    var ki = OW(35247),
      si = OW(37432),
      Mi = OW(42659);
    const Ki = "[bloxd-previews]",
      Si = new Uint32Array(5);

    function Yi(WW) {
      return ci.i.indexOf(WW)
    }
    const yi = new WeakSet;

    function Ti(WW) {
      const iW = (0, wi.h)(WW),
        OW = null === iW ? -1 : Ji(iW);
      return -1 !== OW ? OW : (yi.has(WW) || (yi.add(WW), console.warn(`${Ki} an animation the previews' table lacks: the mob idles instead`)), -1)
    }

    function Ji(WW) {
      var iW;
      return null !== (iW = Zi[WW]) && void 0 !== iW ? iW : -1
    }

    function Hi(WW, iW) {
      const {
        canvas: OW
      } = iW;
      OW.style.width = "100%", OW.style.height = "100%", OW.style.display = "block", WW.appendChild(OW)
    }

    function ni(WW) {
      const iW = WW.getBoundingClientRect();
      return [iW.width, iW.height]
    }
    class ui {
      constructor(WW, iW) {
        this.preview = WW, this.showView = iW
      }
      show(WW) {
        this.showView(this.preview, WW)
      }
      resize(WW, iW) {
        this.preview.resize(WW, iW)
      }
      close() {
        this.preview.close()
      }
    }
    class oi {
      constructor(WW) {
        this.preview = WW, this.ready = void 0, this.dev = void 0, this.built = !1, this.cosmetics = {}, this.emote = null, this.tunings = new bi, this.companions = null, this.nametag = null, this.stopRasteringNametag = null, this.detachControls = void 0, this.detachControls = (0, ki.f)(WW), this.dev = {
          canvas: () => WW.canvas,
          captureFrame: iW => (0, Mi.c)((() => WW.isClosed ? null : WW.canvas), YW.b, iW),
          isolateHead: () => {
            console.warn(`${Ki} isolateHead: noa's character preview only`)
          },
          isolatePet: () => {
            console.warn(`${Ki} isolatePet: noa's character preview only`)
          }
        }, this.apply(), this.ready = WW.untilSettled().then((() => {
          if (WW.isStopped) throw new Error(`${Ki} the previews stopped before the character drew`);
          this.built = !0
        }))
      }
      isReady() {
        return this.built && !this.preview.isClosed
      }
      setCosmetic(WW, iW) {
        this.cosmetics[WW] = iW, this.apply()
      }
      setNametag(WW) {
        var iW;
        if (this.nametag = WW, null === (iW = this.stopRasteringNametag) || void 0 === iW || iW.call(this), this.stopRasteringNametag = null, !WW) return void this.preview.setNametag("", "null", "null");
        const OW = () => {
          this.preview.setNametag(WW.name, JSON.stringify(WW.nameColour), JSON.stringify(WW.ranks))
        };
        si.k.untilLoadedFor(WW.name).then((() => {
          this.nametag !== WW || this.preview.isClosed || (OW(), this.stopRasteringNametag = (0, si.i)(OW))
        }))
      }
      playEmote(WW) {
        null === WW || WW !== this.emote ? (this.emote = WW, this.apply()) : this.preview.replay()
      }
      untilDrawn(WW) {
        return this.preview.untilSettled()
      }
      setOrbit(WW) {
        let {
          yaw: iW,
          pitch: OW,
          radius: mW
        } = WW;
        const EW = this.preview.orbit;
        null !== EW && this.preview.setOrbit({
          alpha: iW,
          beta: OW,
          radius: null !== mW && void 0 !== mW ? mW : EW.radius
        })
      }
      resetCamera() {}
      resize(WW, iW) {
        this.preview.resize(WW, iW)
      }
      close() {
        var WW;
        null === (WW = this.stopRasteringNametag) || void 0 === WW || WW.call(this), this.detachControls(), this.preview.close()
      }
      apply() {
        var WW;
        this.preview.setPlayer(JSON.stringify(this.cosmetics), Si, null === (WW = this.emote) ? -1 : Ji(WW));
        const iW = this.tunings.of(this.cosmetics.pet, this.cosmetics.aura);
        iW !== this.companions && (this.companions = iW, this.preview.setCompanions(iW))
      }
    }

    function di(WW, iW) {
      let {
        mobType: OW,
        variation: mW,
        animation: EW
      } = iW;
      WW.setMob(Yi(OW), null !== mW && void 0 !== mW ? mW : "", 1, Ti(EW))
    }

    function ei(WW, iW) {
      let {
        mobType: OW,
        variation: mW,
        metaInfo: EW,
        tamed: NW
      } = iW;
      WW.setPet(Yi(OW), mW, EW, NW)
    }
    const vi = {
      aimed: .533 / 1.15 * 1.1,
      ready: .16 / .85 * 1.1
    };
    class gi {
      constructor(WW, iW, OW, mW) {
        this.preview = null, this.closed = !1, this.figure = null, this.shown = !1, this.order = "", this.span = {
          left: 0,
          width: 0
        }, this.lineup = [0, 0], this.given = null, this.loaded = !1, WW(OW.width, mW[1], mW).then((WW => {
          if (this.closed) return void WW.close();
          const {
            style: OW
          } = WW.canvas;
          OW.position = "absolute", OW.top = "0", OW.visibility = "hidden", Hi(iW, WW), this.preview = WW, this.apply()
        })).catch((WW => {
          console.error(`${Ki} couldn't open a lineup figure`, WW)
        }))
      }
      update(WW, iW, OW, mW, EW) {
        this.figure = WW, this.shown = iW, this.order = OW, this.span = mW, this.lineup = EW, this.apply()
      }
      close() {
        var WW;
        this.closed = !0, null === (WW = this.preview) || void 0 === WW || WW.close(), this.preview = null
      }
      apply() {
        var WW;
        const {
          preview: iW,
          figure: OW,
          lineup: mW
        } = this;
        if (null === iW || null === OW) return;
        if (this.given !== OW) {
          var EW;
          this.given = OW, this.loaded = !1;
          const WW = null === OW.nS ? 0 : null !== (EW = (0, ti.b)(OW.nS)) && void 0 !== EW ? EW : 0;
          iW.setFigure(function(WW) {
            return JSON.stringify(Object.fromEntries(WW.cosmetics))
          }(OW), WW, Ti(OW.animation), OW.size), iW.untilSettled().then((() => {
            this.given === OW && (this.loaded = !0, this.apply())
          }))
        }
        const {
          left: NW,
          width: PW
        } = this.span;
        iW.resize(PW, mW[1], mW);
        const {
          style: LW
        } = iW.canvas;
        LW.top = -(null !== (WW = OW.lift) && void 0 !== WW ? WW : 0) * mW[1] + "px", LW.left = `${NW}px`, LW.width = `${PW}px`, LW.zIndex = this.order, LW.visibility = this.shown && this.loaded ? "visible" : "hidden"
      }
    }
    class Di {
      constructor(WW, iW) {
        this.open = iW, this.layer = void 0, this.figures = [], this.view = {
          figures: [],
          shown: []
        }, this.size = void 0, this.size = ni(WW), this.layer = document.createElement("div");
        const {
          style: OW
        } = this.layer;
        OW.position = "relative", OW.isolation = "isolate", OW.overflow = "hidden", OW.width = "100%", OW.height = "100%", OW.pointerEvents = "none", WW.appendChild(this.layer)
      }
      show(WW) {
        this.view = WW, this.place()
      }
      resize(WW, iW) {
        this.size = [WW, iW], this.place()
      }
      close() {
        for (const WW of this.figures) WW.close();
        this.figures = [], this.layer.remove()
      }
      place() {
        const {
          figures: WW,
          shown: iW
        } = this.view;
        for (const mW of this.figures.splice(WW.length)) mW.close();
        const {
          size: OW
        } = this;
        WW.forEach(((mW, EW) => {
          var NW;
          const PW = function(WW, iW, OW, mW) {
            let [EW, NW] = mW;
            const PW = (WW + .5) * EW / iW,
              LW = Math.min(Math.max(EW / iW, 2 * OW * NW), 2 * Math.max(PW, EW - PW));
            return {
              left: PW - LW / 2,
              width: LW
            }
          }(EW, WW.length, function(WW) {
            let {
              animation: iW,
              size: OW
            } = WW;
            const {
              aimed: mW,
              ready: EW
            } = vi;
            return (Ti(iW) === Zi.gunAimed ? mW : EW) * OW
          }(mW), OW);
          this.figures[EW] ??= new gi(this.open, this.layer, PW, OW), this.figures[EW].update(mW, null !== (NW = iW[EW]) && void 0 !== NW && NW, function(WW, iW) {
            return String(Math.round(1e3 * WW) + iW)
          }(mW.size, EW), PW, OW)
        }))
      }
    }
    const Vi = {
      player: BW,
      store: qW,
      showcase: RW
    };
    class fi {
      constructor(WW) {
        this.page = WW
      }
      async openMob(WW) {
        return new ui(await this.open(WW, XW), di)
      }
      async openPet(WW) {
        return new ui(await this.open(WW, XW), ei)
      }
      openMobLineup(WW) {
        return new Di(WW, ((WW, iW, OW) => this.page.openPreview(XW, WW, iW, OW)))
      }
      async openCharacter(WW, iW) {
        return new oi(await this.open(WW, Vi[iW]))
      }
      async open(WW, iW) {
        const [OW, mW] = ni(WW), EW = await this.page.openPreview(iW, OW, mW);
        return Hi(WW, EW), EW
      }
    }
  },
  44913: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/builtInAnimations.anim.1876a593a8239b631bf1.gz"
  },
  44918: (WW, iW, OW) => {
    WW.exports = OW.p + "static/media/previewAnimations.dat.a9c06de838594e8096c6.gz"
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);