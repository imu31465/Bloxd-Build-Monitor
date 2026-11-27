export const id = 72;
export const ids = [72];
export const modules = {
  40728: (rr, Sr, Qr) => {
    function Zr(rr) {
      return void 0 === rr ? void 0 : [rr[0], rr[1], rr[2]]
    }

    function Wr(rr) {
      const Sr = rr.particles;
      return {
        opts: {
          texture: Sr.texture,
          sx: Sr.sx,
          minLifeTime: Sr.minLifeTime,
          maxLifeTime: Sr.maxLifeTime,
          minSize: Sr.minSize,
          maxSize: Sr.maxSize,
          minEmitPower: Sr.minEmitPower,
          maxEmitPower: Sr.maxEmitPower,
          emitRate: Sr.emitRate,
          gravity: Zr(Sr.gravity),
          dir1: Zr(Sr.dir1),
          dir2: Zr(Sr.dir2),
          colorGradients: Sr.colorGradients,
          blendMode: Sr.blendMode
        },
        half: [Sr.width / 2, Sr.height / 2, Sr.depth / 2]
      }
    }
    Qr.d(Sr, {
      e: () => Wr
    })
  },
  40699: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => ar,
      h: () => Er,
      i: () => fr,
      l: () => jr
    });
    var Zr = Qr(215);
    const Wr = JSON.parse('{"aura_snowfall":{"offset":[0,2.6,0],"ownInFirstPerson":true,"particles":{"blendMode":1,"capacity":64,"colorGradients":[{"minColor":[255,255,255,0.9],"timeFraction":0},{"minColor":[255,255,255,0],"timeFraction":1}],"depth":3,"dir1":[-0.2,-1,-0.2],"dir2":[0.2,-1,0.2],"emitRate":12,"gravity":[0,-1.5,0],"height":0.2,"maxEmitPower":0.6,"maxLifeTime":2.5,"maxSize":0.15,"minEmitPower":0.3,"minLifeTime":1.5,"minSize":0.08,"texture":"snowflake","width":3}}}'),
      ar = "PetRoot";
    let jr = JSON.parse('{"pet_reindeer":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0},"pet_reindeer2":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0}}'),
      Ir = Wr;
    new Map, new Map;

    function fr(rr) {
      var Sr;
      return null !== (Sr = (0, Zr.b)(jr, rr)) && void 0 !== Sr ? Sr : null
    }

    function Er(rr) {
      var Sr;
      return null !== (Sr = (0, Zr.b)(Ir, rr)) && void 0 !== Sr ? Sr : null
    }
  },
  40197: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Wr,
      g: () => ar
    });
    const Zr = new WeakMap;

    function Wr(rr, Sr) {
      return Zr.set(rr, Sr), rr
    }

    function ar(rr) {
      var Sr;
      return null !== (Sr = Zr.get(rr)) && void 0 !== Sr ? Sr : null
    }
  },
  43054: (rr, Sr, Qr) => {
    function Zr(rr, Sr, Qr) {
      return new Promise((Zr => {
        const Wr = setTimeout((() => {
            ar(), Zr(null)
          }), Qr),
          ar = Sr((() => {
            clearTimeout(Wr);
            const Sr = rr();
            Zr(null === Sr ? null : function(rr) {
              if (0 === rr.width || 0 === rr.height) return null;
              const Sr = document.createElement("canvas");
              Sr.width = rr.width, Sr.height = rr.height;
              const Qr = Sr.getContext("2d");
              return Qr ? (Qr.drawImage(rr, 0, 0), Sr) : null
            }(Sr))
          }))
      }))
    }
    Qr.d(Sr, {
      b: () => Zr
    })
  },
  37596: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => ar
    });
    const Zr = 4e5,
      Wr = 2;

    function ar(rr, Sr, Qr) {
      let [ar, jr] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [rr, Sr], Ir = Math.min(Number.isFinite(Qr) && Qr > 0 ? Qr : 1, Wr);
      const fr = Math.max(0, ar, rr) * Math.max(0, jr, Sr) * Ir * Ir;
      return fr > Zr && (Ir *= Math.sqrt(Zr / fr)), [Math.max(1, Math.floor(Math.max(0, rr) * Ir)), Math.max(1, Math.floor(Math.max(0, Sr) * Ir))]
    }
  },
  35490: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Zr,
      f: () => pr
    });
    const Zr = .01,
      Wr = .08,
      ar = .01,
      jr = 5,
      Ir = 100,
      fr = 40,
      Er = 800;

    function pr(rr) {
      const {
        canvas: Sr
      } = rr;
      let Qr = null;
      const pr = rr => {
          var Zr;
          Qr = {
            pointer: rr.pointerId,
            x: rr.clientX,
            y: rr.clientY
          }, null === (Zr = Sr.setPointerCapture) || void 0 === Zr || Zr.call(Sr, rr.pointerId)
        },
        xr = Sr => {
          var Wr;
          const jr = rr.orbit;
          if ((null === (Wr = Qr) || void 0 === Wr ? void 0 : Wr.pointer) !== Sr.pointerId || null === jr) return;
          const Ir = Sr.clientX - Qr.x,
            fr = Sr.clientY - Qr.y;
          Qr = {
            ...Qr,
            x: Sr.clientX,
            y: Sr.clientY
          }, rr.setOrbit({
            alpha: jr.alpha - Ir * Zr,
            beta: Math.min(Math.PI - ar, Math.max(ar, jr.beta - fr * Zr)),
            radius: jr.radius
          })
        },
        mr = rr => {
          var Sr;
          (null === (Sr = Qr) || void 0 === Sr ? void 0 : Sr.pointer) === rr.pointerId && (Qr = null)
        },
        Nr = Sr => {
          const Qr = rr.orbit;
          if (null === Qr) return;
          Sr.preventDefault();
          const Zr = Sr.deltaY * (Sr.deltaMode === WheelEvent.DOM_DELTA_LINE ? fr : Sr.deltaMode === WheelEvent.DOM_DELTA_PAGE ? Er : 1),
            ar = Math.min(Ir, Math.max(jr, Qr.radius + Zr * Wr));
          rr.setOrbit({
            ...Qr,
            radius: ar
          })
        };
      return Sr.style.touchAction = "none", Sr.addEventListener("pointerdown", pr), Sr.addEventListener("pointermove", xr), Sr.addEventListener("pointerup", mr), Sr.addEventListener("pointercancel", mr), Sr.addEventListener("wheel", Nr, {
        passive: !1
      }), () => {
        Sr.removeEventListener("pointerdown", pr), Sr.removeEventListener("pointermove", xr), Sr.removeEventListener("pointerup", mr), Sr.removeEventListener("pointercancel", mr), Sr.removeEventListener("wheel", Nr)
      }
    }
  },
  45305: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      WasmPreviewHost: () => GS,
      pageBuiltInAnimationPack: () => mr,
      pagePreviews: () => IS,
      previewModule: () => ur
    });
    var Zr = Qr(2398),
      Wr = Qr(692);
    const ar = "[bloxd-wasm-client]";

    function jr(rr) {
      const Sr = {
        wasm: "unknown",
        client: String(Wr.e)
      };
      try {
        var Qr;
        Sr.wasm = null !== (Qr = null === rr || void 0 === rr ? void 0 : rr.bx()) && void 0 !== Qr ? Qr : Sr.wasm
      } catch {}
      return Sr
    }
    async function Ir(rr) {
      if (rr.length < 2 || 31 !== rr[0] || 139 !== rr[1]) return rr;
      if ("undefined" === typeof DecompressionStream) {
        const {
          ungzip: Sr
        } = await Promise.resolve().then((() => Qr(3926)));
        return Sr(rr)
      }
      const Sr = new Blob([rr]).stream().pipeThrough(new DecompressionStream("gzip"));
      return new Uint8Array(await new Response(Sr).arrayBuffer())
    }

    function fr(rr, Sr, Zr, Wr) {
      Promise.resolve().then((() => Qr(42607))).then((Qr => {
        let {
          reportDataLoadFailure: ar
        } = Qr;
        ar(rr, Sr, Zr, Wr)
      }), (Sr => {
        console.warn(`${ar} ${rr} didn't load, and the report couldn't be sent`, Zr.error, Sr)
      }))
    }
    const Er = [3e4, 12e4, 3e5];
    class pr {
      constructor(rr) {
        this.deps = rr, this.loading = null, this.reported = !1, this.retries = 0, this.resolveSet = () => {}, this.set = new Promise((rr => {
          this.resolveSet = rr
        }))
      }
      provide(rr) {
        return this.loading ??= this.load(rr), this.loading
      }
      whenSet() {
        return this.set
      }
      async load(rr) {
        const Sr = jr(rr),
          Qr = await async function(rr, Sr) {
            let Qr;
            try {
              Qr = await rr()
            } catch (Zr) {
              return {
                stage: "fetch",
                error: Zr
              }
            }
            try {
              return Sr(Qr) ? null : {
                stage: "decode",
                error: null
              }
            } catch (Zr) {
              return {
                stage: "decode",
                error: Zr
              }
            }
          }((() => this.deps.fetch()), (Sr => {
            const Qr = rr.dZr(Sr);
            return Qr && this.resolveSet(Sr), Qr
          }));
        if (null !== Qr) {
          if ("fetch" === Qr.stage) {
            this.loading = null;
            const Sr = Er[this.retries++];
            void 0 !== Sr && this.deps.later((() => {
              this.provide(rr)
            }), Sr)
          }
          this.reported || (this.reported = !0, this.deps.onFailed(Qr, Sr))
        }
      }
    }
    let xr = null;

    function mr() {
      return xr ??= new pr({
        fetch: async () => Ir(await (0, Zr.K)(Nr(), {
          priority: "low"
        })),
        onFailed: (rr, Sr) => {
          fr("builtInAnimations", Nr(), rr, Sr)
        },
        later: (rr, Sr) => {
          setTimeout(rr, Sr)
        }
      }), xr
    }

    function Nr() {
      return Qr(45314)
    }
    var Ur = Qr(2396),
      tr = Qr(1262),
      hr = Qr(351),
      zr = Qr(345),
      Yr = Qr(712),
      nr = Qr(5610),
      er = Qr(42559),
      Kr = Qr(42585),
      yr = Qr(42805),
      Br = (Qr(42589), Qr(37587)),
      Tr = Qr(42680),
      vr = Qr(42684),
      Or = Qr(42691),
      Lr = Qr(42574),
      lr = Qr(42820),
      Xr = Qr(42827),
      Pr = Qr(42598),
      Hr = Qr(42715),
      qr = Qr(42746),
      Rr = Qr(42707),
      gr = Qr(42753),
      Cr = Qr(42816),
      Mr = Qr(37604),
      Gr = Qr(37529),
      kr = Qr(2393),
      Ar = Qr(37596);
    const Vr = "[bloxd-previews]",
      ir = 0,
      wr = 1,
      cr = 2,
      Fr = 3,
      or = 1,
      br = 2,
      Jr = 3,
      Dr = 0,
      dr = 1,
      sr = 2;

    function ur(rr) {
      const Sr = rr,
        Qr = (0, er.T)(rr),
        Zr = (0, er.n)(rr);
      return null !== Qr && null !== Zr && "function" === typeof Sr.sZr && "function" === typeof Sr.uZr && "function" === typeof Sr.rWr && "function" === typeof Sr.uR ? Sr : null
    }

    function rS() {
      return Qr(45323)
    }
    async function SS(rr, Sr, Zr) {
      var Wr;
      let ar = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      "lost" === rr && (0, Pr.s)();
      const Ir = await (0, Pr.H)();
      if (null === Ir || (0, er.p)(Ir) || (0, Pr.d)()) return;
      const fr = "webgpu" === Ir.backend;
      if (!fr && "lost" !== rr) return;
      const Er = fr && (0, zr.p)(Ir.adapter, null !== Zr && void 0 !== Zr ? Zr : null, "lost" === rr, ar),
        pr = null !== (Wr = "lost" === rr ? (0, Kr.j)((0, Ur.R)() ? (0, er.T)((0, Ur.z)()) : null) : void 0) && void 0 !== Wr ? Wr : Sr,
        xr = fr ? (0, er.gb)(rr, void 0, (0, Kr.b)(pr)) : (0, Yr.w)() ? null : Yr.i;
      if (null === xr) {
        (0, Pr.l)();
        try {
          await async function(rr, Sr, Zr, Wr, ar) {
            let {
              restoreLost: Ir,
              adapterRemembered: fr
            } = ar;
            const Er = (0, Ur.R)(),
              {
                flushCrashReports: pr,
                reportRenderReload: xr
              } = await Promise.resolve().then((() => Qr(42607)));
            xr(rr.backend, Wr, jr(Er ? (0, Ur.z)() : null), {
              from: "home",
              cause: Sr,
              restoreLost: Ir,
              adapterRemembered: fr,
              ...QS(rr, Sr, Zr)
            }), await pr(qr.c)
          }(Ir, rr, pr, null !== Zr && void 0 !== Zr ? Zr : "start_failed" === rr ? 0 : 1, {
            restoreLost: ar,
            adapterRemembered: Er
          })
        } catch (Nr) {
          console.warn(`${Vr} ${Ir.backend} failed at home (${rr}), and its report couldn't be sent`, Nr)
        }(0, qr.h)()
      } else {
        var mr;
        const Sr = QS(Ir, rr, pr),
          Zr = `${fr?"WebGPU":"WebGL"} failed at home (${rr}${void 0===Sr.error?"":`: ${Sr.error instanceof Error?Sr.error.message:(0,Gr.l)(Sr.error)}`}) and ${xr}`;
        console.warn(`${Vr} ${Zr}: the previews stop`, null !== (mr = Sr.error) && void 0 !== mr ? mr : ""), (0, Pr.o)({
          why: Zr,
          webgpu: fr
        });
        try {
          const {
            countRenderLost: Zr
          } = await Promise.resolve().then((() => Qr(42607)));
          Zr(rr, Sr.error, Sr.context)
        } catch (tr) {
          console.warn(`${Vr} ${Ir.backend} failed at home (${rr}), and its count couldn't be sent`, tr)
        }
      }
    }

    function QS(rr, Sr, Qr) {
      let {
        adapter: Zr
      } = rr;
      return {
        error: Qr,
        context: {
          adapter: Zr,
          boundAtMs: "start_failed" === Sr ? null : (0, Pr.D)(),
          indirectHangs: (0, Pr.t)(),
          restoresSkipped: (0, Pr.F)()
        }
      }
    }
    async function ZS(rr) {
      if (!(0, Ur.R)()) {
        await (null === rr || void 0 === rr ? void 0 : rr("renderer pick", {
          longStep: !0
        }));
        const Sr = await (0, Pr.H)();
        if (null === Sr || (0, er.p)(Sr)) return null;
        const Qr = await Sr.load();
        if (await (null === rr || void 0 === rr ? void 0 : rr("renderer instantiation", {
            longStep: !0
          })), await (0, Hr.e)(Qr), !(0, Ur.R)()) return null
      }
      return ur((0, Ur.z)())
    }
    class WS {
      constructor(rr, Sr, Qr, Zr, Wr, ar) {
        this.page = rr, this.host = Sr, this.id = Qr, this.canvas = Zr, this.size = Wr, this.models = void 0, this.images = void 0, this.write = void 0, this.outcomes = [], this.closed = !1, this.quiet = 0, this.settled = [];
        const jr = {
            ...ar.images,
            glbUrl: rr => {
              var Sr;
              return null !== (Sr = this.models.drawnUrl(rr)) && void 0 !== Sr ? Sr : ar.images.glbUrl(rr)
            }
          },
          Ir = Sr => rr.modelFile(Sr);
        this.images = new yr.g(jr, (rr => {
          console.warn(`${Vr} image ${rr.key.kind}:${rr.key.index}:${rr.key.word} failed`, rr.error)
        }), {
          fetchFile: Ir,
          fetchImage: Sr => rr.imageFile(Sr)
        }), rr.startModels(), this.models = new Tr.j(ar.files, ((Sr, Qr) => rr.buildModel(Sr, Qr)), (rr => {
          console.warn(`${Vr} model file ${rr.file} (${rr.url}) failed`, rr.error)
        }), {
          fetchFile: Ir,
          onWritten: (rr, Sr) => {
            this.images.glbWritten(rr, Sr)
          },
          onTaken: (rr, Sr) => {
            this.images.glbTaken(rr, Sr)
          }
        }), this.write = (rr, Sr, Qr) => {
          if (this.closed) return !0;
          if (rr === Tr.d) {
            const rr = new DataView(Qr.buffer, Qr.byteOffset, Or.c),
              Zr = rr.getUint32(0, !0),
              Wr = rr.getUint32(Or.f, !0),
              ar = this.page.hostCall(sr, (() => this.host.SWr(this.id, Zr, Sr, Qr.subarray(Or.c))));
            return this.outcomes.push([Wr, ar]), !0
          }
          return rr === yr.e && (this.page.hostCall(void 0, (() => {
            this.host.QWr(this.id, Qr)
          })), !0)
        }
      }
      get isClosed() {
        return this.closed
      }
      get isStopped() {
        return this.page.isStopped
      }
      resize(rr, Sr, Qr) {
        if (this.closed) return;
        const [Zr, Wr] = (0, Ar.d)(rr, Sr, this.page.dpr(), Qr);
        Zr === this.size[0] && Wr === this.size[1] || (this.size = [Zr, Wr], this.page.hostCall(void 0, (() => {
          this.host.resize(this.id, Zr, Wr)
        })))
      }
      setMob(rr, Sr, Qr, Zr) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.ZWr(this.id, rr, Sr, Qr, Zr))))
      }
      setPet(rr, Sr, Qr, Zr) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.WWr(this.id, rr, Sr, Qr, Zr))))
      }
      setPlayer(rr, Sr, Qr) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.aWr(this.id, rr, Sr, Qr))))
      }
      setCompanions(rr) {
        var Sr;
        let {
          pet: Qr,
          aura: Zr
        } = rr;
        if (this.closed) return;
        const Wr = null !== (Sr = null === Qr || void 0 === Qr ? void 0 : Qr.model) && void 0 !== Sr ? Sr : -1,
          ar = new Float64Array(Qr ? [Qr.scale, ...Qr.offset, Qr.yawOffset, Qr.bobAmplitude, Qr.bobHz] : []),
          jr = new Float64Array(Zr ? [...Zr.offset, ...Zr.half] : []);
        this.page.hostCall(void 0, (() => {
          var rr, Sr;
          this.host.jWr(this.id, Wr, ar, null !== (rr = null === Qr || void 0 === Qr ? void 0 : Qr.flyClip) && void 0 !== rr ? rr : "", null !== (Sr = null === Zr || void 0 === Zr ? void 0 : Zr.opts) && void 0 !== Sr ? Sr : "", jr)
        }))
      }
      setNametag(rr, Sr, Qr) {
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.IWr(this.id, rr, Sr, Qr)
        }))
      }
      setFigure(rr, Sr, Qr, Zr) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.fWr(this.id, rr, Sr, Qr, Zr))))
      }
      replay() {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.replay(this.id))))
      }
      get orbit() {
        if (this.closed) return null;
        const rr = this.page.hostCall(null, (() => this.host.orbit(this.id)));
        return null === rr || rr.length < 3 ? null : {
          alpha: rr[0],
          beta: rr[1],
          radius: rr[2]
        }
      }
      setOrbit(rr) {
        let {
          alpha: Sr,
          beta: Qr,
          radius: Zr
        } = rr;
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.EWr(this.id, Sr, Qr, Zr)
        }))
      }
      untilSettled() {
        return this.closed || this.page.isStopped ? Promise.resolve() : (this.quiet = 0, new Promise((rr => {
          this.settled.push(rr)
        })))
      }
      packChanged() {
        this.quiet = 0, this.models.refresh(), (0, lr.h)(this.images)
      }
      feed() {
        this.models.drain(this.write);
        for (const [rr, Sr] of this.outcomes) {
          const Qr = Sr === Dr ? [] : [Sr === dr ? rr : (rr | Tr.f) >>> 0];
          this.models.taken(rr, Qr)
        }
        this.outcomes.length = 0, this.images.drain(this.write)
      }
      collect(rr) {
        let Sr = !1;
        if (rr) {
          const rr = this.host.pWr(this.id);
          for (const Sr of rr) this.models.request(Sr);
          const Qr = this.host.xWr(this.id);
          Qr.length > 0 && this.images.onEvent(Qr), Sr = rr.length > 0 || Qr.length > 0
        }
        const Qr = this.page.modelsUnavailable ? 0 : this.models.asking + this.models.unanswered,
          Zr = Sr || Qr > 0 || this.images.waiting > 0 || this.images.inFlight > 0;
        this.quiet = Zr ? 0 : this.quiet + 1, this.quiet >= 3 && this.resolveSettled()
      }
      close() {
        this.closed || (this.closed = !0, this.page.closePreview(this), this.resolveSettled())
      }
      abandon() {
        this.resolveSettled()
      }
      dispose(rr) {
        this.page.hostCall(void 0, (() => {
          const Sr = this.host.close(this.id);
          Sr.length > 0 && this.images.onEvent(Sr), this.page.isTrapped || rr.rWr(this.id)
        })), this.images.dispose(), this.canvas.remove()
      }
      resolveSettled() {
        const rr = this.settled;
        this.settled = [];
        for (const Sr of rr) Sr()
      }
    }
    class aS {
      constructor(rr) {
        this.deps = rr, this.module = null, this.host = null, this.opening = null, this.pageCanvas = null, this.samples = 1, this.binding = null, this.sessionEnds = 0, this.lastEndReturned = !0, this.previews = new Map, this.nextId = 1, this.frameId = null, this.stopped = !1, this.loggedErrors = new Set, this.modelsListener = {
          onUnavailable: rr => {
            this.modelsFailed(rr)
          },
          onWorkerLost: rr => {
            this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${Vr} a model worker was lost: ${rr}`))
          },
          onModuleRetry: () => {}
        }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.zU = {
          setShaderPack: (rr, Sr, Qr, Zr, Wr) => (this.shaderPackArgs = [rr, Sr, Qr, Zr, Wr], this.handOverShaderPack(), !0)
        }, this.frame = rr => {
          this.frameId = null;
          const Sr = this.host;
          if (null !== Sr && 0 !== this.previews.size && !this.settleIfTrapped() && !this.stopped)
            if (this.deps.frameDue(rr)) try {
              this.drawFrame(Sr, rr)
            } catch (Qr) {
              if (!this.stopIfTrapped(Qr) && (this.stop(), (0, er.t)(Qr))) return void this.deps.onRenderFailed("frames_refused", Qr);
              console.warn(`${Vr} the previews stopped: their frame threw`, Qr)
            } else this.startFrames()
        }, rr.pack.onChange((() => {
          this.packChanged()
        })), rr.game.onGameChange((() => {
          this.tellInGame()
        }))
      }
      packChanged() {
        if (!this.stopped)
          for (const rr of this.previews.values()) rr.packChanged()
      }
      dpr() {
        return this.deps.dpr()
      }
      get sessionBound() {
        var rr, Sr;
        return null !== (rr = null === (Sr = this.host) || void 0 === Sr ? void 0 : Sr.attached()) && void 0 !== rr && rr
      }
      get open() {
        return this.previews.size
      }
      get frameCostMs() {
        return 0 === this.costs.length ? 0 : this.costs.reduce(((rr, Sr) => rr + Sr), 0) / this.costs.length
      }
      async bindSession(rr, Sr, Qr) {
        const Zr = this.binding,
          Wr = this.sessionEnds;
        try {
          const ar = this.hostOf(rr);
          if (!ar.mWr()) {
            const Sr = (0, gr.g)().sampleCount,
              jr = await Qr(Sr);
            if (this.sessionEnds !== Wr) return this.keepRendererOfEndedSession(rr, ar, jr, Sr, Zr), Sr;
            if (!ar.NWr(jr)) throw new Error("the page has a renderer already");
            (0, Pr.p)(performance.now()), this.samples = Sr, (0, Cr.g)((0, er.n)(rr))
          }
          if (!ar.attach(Sr)) throw new Error("the page's renderer is lent to another session");
          return this.samples
        } finally {
          this.binding === Zr && this.endBinding()
        }
      }
      keepRendererOfEndedSession(rr, Sr, Qr, Zr, Wr) {
        if (!this.lastEndReturned || null !== this.binding && this.binding !== Wr) try {
          Qr.free()
        } catch (ar) {
          console.warn(`${Vr} an ended session's renderer didn't free`, ar)
        } else Sr.NWr(Qr) && ((0, Pr.p)(performance.now()), this.samples = Zr, (0, Cr.g)(this.registryOf(rr)))
      }
      async beginSession() {
        var rr;
        let Sr = () => {};
        const Qr = new Promise((rr => {
          Sr = rr
        }));
        this.binding = {
          done: Qr,
          release: Sr
        }, await (null === (rr = this.opening) || void 0 === rr ? void 0 : rr.catch((() => null)));
        const Zr = this.pageCanvas;
        return this.pageCanvas = null, Zr
      }
      endSession(rr) {
        var Sr, Qr;
        if (this.sessionEnds++, this.lastEndReturned = rr, this.endBinding(), rr) {
          try {
            var Zr;
            null === (Zr = this.host) || void 0 === Zr || Zr.detach()
          } catch (Wr) {
            return void console.warn(`${Vr} the session's core kept the page's renderer`, Wr)
          }!0 === (null === (Sr = this.host) || void 0 === Sr ? void 0 : Sr.attached()) && console.warn(`${Vr} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (Qr = this.host) || void 0 === Qr ? void 0 : Qr.mWr()) && (0, Cr.g)(this.registryOf(this.module))
        }
      }
      endBinding() {
        var rr;
        null === (rr = this.binding) || void 0 === rr || rr.release(), this.binding = null
      }
      async openPreview(rr, Sr, Qr, Zr) {
        const Wr = await this.renderingHost(),
          ar = this.module;
        if (null === Wr || null === ar) throw new Error("this page can't draw previews: it has no renderer build");
        if (this.animations ??= this.loadAnimations(Wr), this.deps.pack.wanted(), this.isStopped) throw new Error("the previews stopped");
        this.guarded((() => {
          this.deps.provideBuiltInAnimationPack(ar)
        }));
        const jr = this.nextId++,
          Ir = this.deps.createCanvas(),
          [fr, Er] = (0, Ar.d)(Sr, Qr, this.deps.dpr(), Zr);
        Ir.width = fr, Ir.height = Er;
        if (!this.guarded((() => (ar.uZr(jr, Ir), Wr.open(jr, fr, Er, rr))))) throw this.hostCall(void 0, (() => {
          ar.rWr(jr)
        })), new Error("the page's renderer is lent to a session that is running");
        this.restartModelsIfFailed();
        const pr = new WS(this, Wr, jr, Ir, [fr, Er], this.deps);
        return this.previews.set(jr, pr), this.startFrames(), pr
      }
      prefetch(rr) {
        if (this.prefetched || !this.mayPrefetch) return;
        this.prefetched = !0;
        (null === this.module ? this.loadModule(rr) : Promise.resolve(this.module)).then((async Sr => {
          null !== Sr && (await (null === rr || void 0 === rr ? void 0 : rr("preview workers and files")), this.mayPrefetch && (this.startModels(), this.fetchAnimationTable().catch((() => {})), this.prefetchPlayerFiles()))
        }), (() => {}))
      }
      modelFile(rr) {
        return this.prefetchedOr(rr, this.deps.fetchModel)
      }
      imageFile(rr) {
        return this.prefetchedOr(rr, Zr.K)
      }
      prefetchedOr(rr, Sr) {
        const Qr = this.prefetchedFiles.get(rr);
        return void 0 === Qr ? Sr(rr) : Qr.catch((() => Sr(rr)))
      }
      async prefetchPlayerFiles() {
        const rr = this.deps.playerFile().then((rr => this.deps.files.url(rr))),
          Sr = await Promise.all([rr, this.deps.images.lifeformAtlasUrl(lr.d)]).catch((() => null));
        if (null === Sr) return;
        const [Qr, Zr] = Sr, Wr = (rr, Sr) => {
          if (null === rr) return;
          const Qr = Sr(rr);
          this.prefetchedFiles.set(rr, Qr), Qr.catch((() => {
            this.prefetchedFiles.delete(rr)
          }))
        };
        Wr(Qr, (rr => this.modelFile(rr))), Wr(Zr, (rr => this.imageFile(rr)))
      }
      loadModule(rr) {
        return this.moduleLoad ??= this.deps.loadModule(rr).then((rr => (null === rr && (this.moduleLoad = null), rr)), (rr => {
          throw this.moduleLoad = null, rr
        })), this.moduleLoad
      }
      fetchAnimationTable() {
        return this.animationTable ??= this.deps.fetchAnimations().catch((rr => {
          throw this.animationTable = null, rr
        })), this.animationTable
      }
      get modelsUnavailable() {
        return this.unavailable
      }
      startModels() {
        this.models ??= this.deps.startModels(this.modelsListener).catch((rr => (this.modelsFailed(rr), () => new Promise((() => {})))))
      }
      buildModel(rr, Sr) {
        return this.startModels(), this.models.then((Qr => Qr(rr, Sr))).then((rr => this.unavailable ? new Promise((() => {})) : rr))
      }
      restartModelsIfFailed() {
        this.unavailable && !this.modelsRestarted && 0 === this.previews.size && (this.modelsRestarted = !0, this.models = null, this.unavailable = !1, this.startModels())
      }
      modelsFailed(rr) {
        this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${Vr} the model workers didn't start: models won't draw in the previews`, rr))
      }
      called(rr) {
        return 0 !== rr && this.logError(rr, 0), rr
      }
      closePreview(rr) {
        this.previews.delete(rr.id), null !== this.module && rr.dispose(this.module), 0 === this.previews.size && null !== this.frameId && (this.deps.cancelFrame(this.frameId), this.frameId = null)
      }
      hostOf(rr) {
        if (null !== this.module && this.module !== rr) throw new Error("a second renderer module on one page");
        return this.module = rr, null === this.host && (this.host = this.guarded((() => new rr.sZr)), this.tellInGame(), this.handOverShaderPack()), this.host
      }
      tellInGame() {
        const {
          host: rr
        } = this;
        null !== rr && this.outsideCall("the game's start or end", (() => {
          rr.UWr(this.deps.game.inGame())
        }))
      }
      handOverShaderPack() {
        const {
          host: rr,
          shaderPackArgs: Sr
        } = this;
        null !== rr && null !== Sr && this.outsideCall("the shader pack's hand-over", (() => {
          rr.DZr(...Sr) || console.warn(`${Vr} the host refused the shader pack: previews draw without it at home`)
        }))
      }
      outsideCall(rr, Sr) {
        try {
          this.hostCall(void 0, Sr)
        } catch (Qr) {
          this.stop(), console.warn(`${Vr} the previews stopped: ${rr} threw`, Qr)
        }
      }
      async loadAnimations(rr) {
        const Sr = jr(null),
          Qr = this.module;
        try {
          Sr.wasm = null === Qr ? Sr.wasm : this.hostCall(Sr.wasm, (() => Qr.bx()))
        } catch {}
        let Zr, Wr;
        try {
          Zr = await this.fetchAnimationTable()
        } catch (ar) {
          return void this.deps.onAnimationsFailed({
            stage: "fetch",
            error: ar
          }, Sr)
        }
        if (!this.settleIfTrapped()) {
          try {
            Wr = rr.tWr(Zr)
          } catch (ar) {
            if (this.stopIfTrapped(ar)) return;
            return void this.deps.onAnimationsFailed({
              stage: "decode",
              error: ar
            }, Sr)
          }
          Wr || this.deps.onAnimationsFailed({
            stage: "decode",
            error: null
          }, Sr)
        }
      }
      async renderingHost() {
        if (null !== this.binding && await this.binding.done, this.settleIfTrapped()) return null;
        const rr = this.host;
        return null !== rr && this.guarded((() => rr.mWr())) ? rr : (this.opening ??= this.openAtHome().finally((() => {
          this.opening = null
        })), this.opening)
      }
      async openAtHome() {
        var rr;
        const Sr = null !== (rr = this.module) && void 0 !== rr ? rr : await this.loadModule();
        if (null === Sr) return null;
        const Qr = this.hostOf(Sr),
          Zr = () => this.guarded((() => Qr.mWr()));
        if (Zr()) return Qr;
        if (null !== (0, Pr.B)() || (0, Pr.d)()) return null;
        const Wr = this.deps.createCanvas();
        Wr.width = 1, Wr.height = 1;
        const ar = await this.deps.openExtras();
        if (this.settleIfTrapped()) return null;
        const jr = (0, gr.g)().sampleCount;
        let Ir;
        try {
          Ir = await (0, er.z)(Sr, "previewRenderer", Wr, jr, Mr.i, ar)
        } catch (fr) {
          throw fr instanceof Lr.d ? this.stopForTrap(fr) : (0, er.x)(fr) && await this.deps.onRenderFailed("start_failed", fr), fr
        }
        return this.guarded((() => Qr.NWr(Ir))) ? ((0, Pr.p)(performance.now()), this.samples = jr, this.pageCanvas = Wr, (0, Cr.g)(this.registryOf(Sr)), Qr) : Zr() ? Qr : null
      }
      startFrames() {
        null !== this.frameId || this.isStopped || (this.frameId = this.deps.requestFrame(this.frame))
      }
      drawFrame(rr, Sr) {
        for (const jr of this.previews.values()) jr.feed();
        if (this.stopped) return;
        this.module.uR(this.deps.heldLow());
        const Qr = this.deps.now(),
          Zr = rr.frame(Sr);
        this.costs.push(this.deps.now() - Qr), this.costs.length > 120 && this.costs.shift();
        const Wr = 0 !== (256 & Zr),
          ar = 255 & Zr;
        for (const jr of this.previews.values()) {
          if (this.stopped) return;
          jr.collect(Wr)
        }
        if (!this.stopped) {
          if (0 !== (512 & Zr) && this.deps.onDrew(), Wr) {
            const Sr = rr.hWr();
            for (let rr = 0; rr + 1 < Sr.length; rr += 2) Sr[rr] === nr.J.RenderDeviceLost && this.deps.onDeviceLost(), this.logError(Sr[rr], Sr[rr + 1])
          }
          if (ar !== or) {
            if (ar === br) return this.stop(), void this.deps.onFatal(rr.YWr(), rr.nWr());
            if (ar === Jr) return this.stop(), void console.warn(`${Vr} the previews stopped: the page's renderer went with its session`);
            (0, hr.e)(Sr), this.startFrames()
          } else {
            const Sr = rr.zWr();
            this.stop();
            const Qr = Sr[2] === nr.fd.PIPELINE_FAILED ? "pipeline_failed" : "lost";
            this.deps.onRenderFailed(Qr, void 0, Sr[1], Sr[2] === nr.fd.RESTORE_LOST)
          }
        }
      }
      get isStopped() {
        return this.stopped || this.isTrapped
      }
      get mayPrefetch() {
        return !this.isStopped && !(0, Pr.d)() && null === (0, Pr.B)()
      }
      get isTrapped() {
        return null !== this.module && ((0, Lr.h)(this.module) || "failed" === (0, Ur.y)())
      }
      hostCall(rr, Sr) {
        if (this.settleIfTrapped()) return rr;
        try {
          return Sr()
        } catch (Qr) {
          if (this.stopIfTrapped(Qr)) return rr;
          throw Qr
        }
      }
      guarded(rr) {
        if (this.settleIfTrapped()) throw new Error("the previews stopped: their module trapped");
        try {
          return rr()
        } catch (Sr) {
          throw this.stopIfTrapped(Sr), Sr
        }
      }
      registryOf(rr) {
        return {
          eWr: (Sr, Qr) => {
            this.hostCall(void 0, (() => {
              rr.eWr(Sr, Qr)
            }))
          },
          KWr: Sr => {
            this.hostCall(void 0, (() => {
              rr.KWr(Sr)
            }))
          },
          ...void 0 === rr.yWr ? {} : {
            yWr: (Sr, Qr) => {
              this.hostCall(void 0, (() => {
                var Zr;
                null === (Zr = rr.yWr) || void 0 === Zr || Zr.call(rr, Sr, Qr)
              }))
            }
          },
          ...void 0 === rr.BWr ? {} : {
            BWr: Sr => {
              this.hostCall(void 0, (() => {
                var Qr;
                null === (Qr = rr.BWr) || void 0 === Qr || Qr.call(rr, Sr)
              }))
            }
          }
        }
      }
      settleIfTrapped() {
        return !!this.isTrapped && (this.stopped || (this.stop(), (0, Cr.g)(null)), !0)
      }
      stopIfTrapped(rr) {
        return !(null === this.module || !(0, Lr.l)(this.module, rr)) && (this.stopForTrap(rr), !0)
      }
      stopForTrap(rr) {
        this.stop(), (0, Cr.g)(null), (0, kr.e)("previews", rr)
      }
      stop() {
        this.stopped = !0;
        for (const rr of this.previews.values()) rr.abandon()
      }
      logError(rr, Sr) {
        const Qr = `${rr}:${Sr}`;
        this.loggedErrors.has(Qr) || (this.loggedErrors.add(Qr), console.warn(`${Vr} error ${rr} (detail ${Sr})`))
      }
    }
    let jS = null;

    function IS() {
      return jS ??= new aS(function() {
        const rr = (0, vr.r)(tr.clientSideServerUrls.staticUrl, {
          packUrl: rr => {
            var Sr, Qr;
            return null !== (Sr = null === (Qr = lr.e.current) || void 0 === Qr ? void 0 : Qr.modelUrl(rr)) && void 0 !== Sr ? Sr : null
          }
        });
        return {
          loadModule: ZS,
          startModels: async rr => {
            const {
              pageModelPool: Sr
            } = await Qr.e(51).then((() => Qr(55199))), {
              pool: Zr
            } = Sr(rr);
            return (rr, Sr) => Zr.build(rr, Sr)
          },
          fetchAnimations: async () => Ir(await (0, Zr.K)(rS())),
          playerFile: async () => (await (0, vr.o)()).PLAYER_FILE,
          onAnimationsFailed: (rr, Sr) => {
            fr("previewAnimations", rS(), rr, Sr)
          },
          provideBuiltInAnimationPack: rr => {
            mr().provide(rr)
          },
          openExtras: Pr.w,
          files: rr,
          images: (0, lr.i)((0, yr.o)(rr.url), (() => lr.e.current)),
          pack: lr.e,
          game: Xr.b,
          fetchModel: rr => (0, vr.j)(rr),
          createCanvas: () => document.createElement("canvas"),
          dpr: () => window.devicePixelRatio,
          now: () => performance.now(),
          requestFrame: rr => requestAnimationFrame(rr),
          cancelFrame: rr => {
            cancelAnimationFrame(rr)
          },
          onRenderFailed: SS,
          onFatal: (rr, Sr) => {
            console.error(`${Vr} the previews stopped: renderer error ${rr} (detail ${Sr})`)
          },
          onDeviceLost: () => {
            (0, Pr.z)() === Rr.c.webgpu && ((0, Kr.d)((0, Ur.R)() ? (0, er.T)((0, Ur.z)()) : null), zr.A.lost())
          },
          onDrew: () => {
            zr.A.drew(), (0, Br.k)()
          },
          frameDue: Br.p,
          heldLow: Br.l
        }
      }()), jS
    }
    var fS = Qr(679),
      ES = Qr(40197),
      pS = Qr(4489);
    const xS = {
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
    var mS = Qr(40728),
      NS = Qr(40699),
      US = Qr(45329);
    class tS {
      constructor() {
        this.pet = null, this.aura = null, this.companions = {
          pet: null,
          aura: null
        }
      }
      of(rr, Sr) {
        const Qr = void 0 === rr ? null : (0, NS.i)(rr),
          Zr = void 0 === Sr ? null : (0, NS.h)(Sr);
        return Qr === this.pet && Zr === this.aura || (this.pet = Qr, this.aura = Zr, this.companions = {
          pet: Qr && hS(Qr),
          aura: Zr && zS(Zr)
        }), this.companions
      }
    }

    function hS(rr) {
      var Sr;
      const Qr = US.COSMETIC_MODEL_KEYS.get(rr.model);
      if (void 0 === Qr) return console.warn(`[bloxd-previews] pet model ${rr.model} isn't a Player attachment model`), null;
      const {
        scale: Zr,
        followOffset: Wr,
        yawOffset: ar,
        bobAmplitude: jr,
        bobHz: Ir,
        clips: fr
      } = rr;
      return {
        model: Qr,
        scale: Zr,
        offset: Wr,
        yawOffset: ar,
        bobAmplitude: jr,
        bobHz: Ir,
        flyClip: null !== (Sr = null === fr || void 0 === fr ? void 0 : fr.fly) && void 0 !== Sr ? Sr : null
      }
    }

    function zS(rr) {
      const {
        opts: Sr,
        half: Qr
      } = (0, mS.e)(rr);
      return {
        opts: JSON.stringify(Sr),
        offset: rr.offset,
        half: Qr
      }
    }
    var YS = Qr(35490),
      nS = Qr(37718),
      eS = Qr(43054);
    const KS = "[bloxd-previews]",
      yS = new Uint32Array(5);

    function BS(rr) {
      return fS.n.indexOf(rr)
    }
    const TS = new WeakSet;

    function vS(rr) {
      const Sr = (0, ES.g)(rr),
        Qr = null === Sr ? -1 : OS(Sr);
      return -1 !== Qr ? Qr : (TS.has(rr) || (TS.add(rr), console.warn(`${KS} an animation the previews' table lacks: the mob idles instead`)), -1)
    }

    function OS(rr) {
      var Sr;
      return null !== (Sr = xS[rr]) && void 0 !== Sr ? Sr : -1
    }

    function LS(rr, Sr) {
      const {
        canvas: Qr
      } = Sr;
      Qr.style.width = "100%", Qr.style.height = "100%", Qr.style.display = "block", rr.appendChild(Qr)
    }

    function lS(rr) {
      const Sr = rr.getBoundingClientRect();
      return [Sr.width, Sr.height]
    }
    class XS {
      constructor(rr, Sr) {
        this.preview = rr, this.showView = Sr
      }
      show(rr) {
        this.showView(this.preview, rr)
      }
      resize(rr, Sr) {
        this.preview.resize(rr, Sr)
      }
      close() {
        this.preview.close()
      }
    }
    class PS {
      constructor(rr) {
        this.preview = rr, this.ready = void 0, this.dev = void 0, this.built = !1, this.cosmetics = {}, this.emote = null, this.tunings = new tS, this.companions = null, this.nametag = null, this.stopRasteringNametag = null, this.detachControls = void 0, this.detachControls = (0, YS.f)(rr), this.dev = {
          canvas: () => rr.canvas,
          captureFrame: Sr => (0, eS.b)((() => rr.isClosed ? null : rr.canvas), Br.b, Sr),
          isolateHead: () => {
            console.warn(`${KS} isolateHead: noa's character preview only`)
          },
          isolatePet: () => {
            console.warn(`${KS} isolatePet: noa's character preview only`)
          }
        }, this.apply(), this.ready = rr.untilSettled().then((() => {
          if (rr.isStopped) throw new Error(`${KS} the previews stopped before the character drew`);
          this.built = !0
        }))
      }
      isReady() {
        return this.built && !this.preview.isClosed
      }
      setCosmetic(rr, Sr) {
        this.cosmetics[rr] = Sr, this.apply()
      }
      setNametag(rr) {
        var Sr;
        if (this.nametag = rr, null === (Sr = this.stopRasteringNametag) || void 0 === Sr || Sr.call(this), this.stopRasteringNametag = null, null === rr || void 0 === rr || !rr.name) return void this.preview.setNametag("", "null", "null");
        const Qr = () => {
          this.preview.setNametag(rr.name, JSON.stringify(rr.nameColour), JSON.stringify(rr.ranks))
        };
        nS.i.untilLoadedFor(rr.name).then((() => {
          this.nametag !== rr || this.preview.isClosed || (Qr(), this.stopRasteringNametag = (0, nS.f)(Qr))
        }))
      }
      playEmote(rr) {
        null === rr || rr !== this.emote ? (this.emote = rr, this.apply()) : this.preview.replay()
      }
      untilDrawn(rr) {
        return this.preview.untilSettled()
      }
      setOrbit(rr) {
        let {
          yaw: Sr,
          pitch: Qr,
          radius: Zr
        } = rr;
        const Wr = this.preview.orbit;
        null !== Wr && this.preview.setOrbit({
          alpha: Sr,
          beta: Qr,
          radius: null !== Zr && void 0 !== Zr ? Zr : Wr.radius
        })
      }
      resetCamera() {}
      resize(rr, Sr) {
        this.preview.resize(rr, Sr)
      }
      close() {
        var rr;
        null === (rr = this.stopRasteringNametag) || void 0 === rr || rr.call(this), this.detachControls(), this.preview.close()
      }
      apply() {
        var rr;
        this.preview.setPlayer(JSON.stringify(this.cosmetics), yS, null === (rr = this.emote) ? -1 : OS(rr));
        const Sr = this.tunings.of(this.cosmetics.pet, this.cosmetics.aura);
        Sr !== this.companions && (this.companions = Sr, this.preview.setCompanions(Sr))
      }
    }

    function HS(rr, Sr) {
      let {
        mobType: Qr,
        variation: Zr,
        animation: Wr
      } = Sr;
      rr.setMob(BS(Qr), null !== Zr && void 0 !== Zr ? Zr : "", 1, vS(Wr))
    }

    function qS(rr, Sr) {
      let {
        mobType: Qr,
        variation: Zr,
        metaInfo: Wr,
        tamed: ar
      } = Sr;
      rr.setPet(BS(Qr), Zr, Wr, ar)
    }
    const RS = {
      aimed: .533 / 1.15 * 1.1,
      ready: .16 / .85 * 1.1
    };
    class gS {
      constructor(rr, Sr, Qr, Zr) {
        this.preview = null, this.closed = !1, this.figure = null, this.shown = !1, this.order = "", this.span = {
          left: 0,
          width: 0
        }, this.lineup = [0, 0], this.given = null, this.loaded = !1, rr(Qr.width, Zr[1], Zr).then((rr => {
          if (this.closed) return void rr.close();
          const {
            style: Qr
          } = rr.canvas;
          Qr.position = "absolute", Qr.top = "0", Qr.visibility = "hidden", LS(Sr, rr), this.preview = rr, this.apply()
        })).catch((rr => {
          console.error(`${KS} couldn't open a lineup figure`, rr)
        }))
      }
      update(rr, Sr, Qr, Zr, Wr) {
        this.figure = rr, this.shown = Sr, this.order = Qr, this.span = Zr, this.lineup = Wr, this.apply()
      }
      close() {
        var rr;
        this.closed = !0, null === (rr = this.preview) || void 0 === rr || rr.close(), this.preview = null
      }
      apply() {
        var rr;
        const {
          preview: Sr,
          figure: Qr,
          lineup: Zr
        } = this;
        if (null === Sr || null === Qr) return;
        if (this.given !== Qr) {
          var Wr;
          this.given = Qr, this.loaded = !1;
          const rr = null === Qr.jB ? 0 : null !== (Wr = (0, pS.e)(Qr.jB)) && void 0 !== Wr ? Wr : 0;
          Sr.setFigure(function(rr) {
            return JSON.stringify(Object.fromEntries(rr.cosmetics))
          }(Qr), rr, vS(Qr.animation), Qr.size), Sr.untilSettled().then((() => {
            this.given === Qr && (this.loaded = !0, this.apply())
          }))
        }
        const {
          left: ar,
          width: jr
        } = this.span;
        Sr.resize(jr, Zr[1], Zr);
        const {
          style: Ir
        } = Sr.canvas;
        Ir.top = -(null !== (rr = Qr.lift) && void 0 !== rr ? rr : 0) * Zr[1] + "px", Ir.left = `${ar}px`, Ir.width = `${jr}px`, Ir.zIndex = this.order, Ir.visibility = this.shown && this.loaded ? "visible" : "hidden"
      }
    }
    class CS {
      constructor(rr, Sr) {
        this.open = Sr, this.layer = void 0, this.figures = [], this.view = {
          figures: [],
          shown: []
        }, this.size = void 0, this.size = lS(rr), this.layer = document.createElement("div");
        const {
          style: Qr
        } = this.layer;
        Qr.position = "relative", Qr.isolation = "isolate", Qr.overflow = "hidden", Qr.width = "100%", Qr.height = "100%", Qr.pointerEvents = "none", rr.appendChild(this.layer)
      }
      show(rr) {
        this.view = rr, this.place()
      }
      resize(rr, Sr) {
        this.size = [rr, Sr], this.place()
      }
      close() {
        for (const rr of this.figures) rr.close();
        this.figures = [], this.layer.remove()
      }
      place() {
        const {
          figures: rr,
          shown: Sr
        } = this.view;
        for (const Zr of this.figures.splice(rr.length)) Zr.close();
        const {
          size: Qr
        } = this;
        rr.forEach(((Zr, Wr) => {
          var ar;
          const jr = function(rr, Sr, Qr, Zr) {
            let [Wr, ar] = Zr;
            const jr = (rr + .5) * Wr / Sr,
              Ir = Math.min(Math.max(Wr / Sr, 2 * Qr * ar), 2 * Math.max(jr, Wr - jr));
            return {
              left: jr - Ir / 2,
              width: Ir
            }
          }(Wr, rr.length, function(rr) {
            let {
              animation: Sr,
              size: Qr
            } = rr;
            const {
              aimed: Zr,
              ready: Wr
            } = RS;
            return (vS(Sr) === xS.gunAimed ? Zr : Wr) * Qr
          }(Zr), Qr);
          this.figures[Wr] ??= new gS(this.open, this.layer, jr, Qr), this.figures[Wr].update(Zr, null !== (ar = Sr[Wr]) && void 0 !== ar && ar, function(rr, Sr) {
            return String(Math.round(1e3 * rr) + Sr)
          }(Zr.size, Wr), jr, Qr)
        }))
      }
    }
    const MS = {
      player: wr,
      store: cr,
      showcase: Fr
    };
    class GS {
      constructor(rr) {
        this.page = rr
      }
      async openMob(rr) {
        return new XS(await this.open(rr, ir), HS)
      }
      async openPet(rr) {
        return new XS(await this.open(rr, ir), qS)
      }
      openMobLineup(rr) {
        return new CS(rr, ((rr, Sr, Qr) => this.page.openPreview(ir, rr, Sr, Qr)))
      }
      async openCharacter(rr, Sr) {
        return new PS(await this.open(rr, MS[Sr]))
      }
      async open(rr, Sr) {
        const [Qr, Zr] = lS(rr), Wr = await this.page.openPreview(Sr, Qr, Zr);
        return LS(rr, Wr), Wr
      }
    }
  },
  45314: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/builtInAnimations.anim.1876a593a8239b631bf1.gz"
  },
  45323: (rr, Sr, Qr) => {
    rr.exports = Qr.p + "static/media/previewAnimations.dat.a9c06de838594e8096c6.gz"
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);