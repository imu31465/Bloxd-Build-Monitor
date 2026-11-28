export const id = 72;
export const ids = [72];
export const modules = {
  40504: (bb, wb, Mb) => {
    function eb(bb) {
      return void 0 === bb ? void 0 : [bb[0], bb[1], bb[2]]
    }

    function Hb(bb) {
      const wb = bb.particles;
      return {
        opts: {
          texture: wb.texture,
          qO: wb.qO,
          minLifeTime: wb.minLifeTime,
          maxLifeTime: wb.maxLifeTime,
          minSize: wb.minSize,
          maxSize: wb.maxSize,
          minEmitPower: wb.minEmitPower,
          maxEmitPower: wb.maxEmitPower,
          emitRate: wb.emitRate,
          gravity: eb(wb.gravity),
          dir1: eb(wb.dir1),
          dir2: eb(wb.dir2),
          colorGradients: wb.colorGradients,
          blendMode: wb.blendMode
        },
        half: [wb.width / 2, wb.height / 2, wb.depth / 2]
      }
    }
    Mb.d(wb, {
      d: () => Hb
    })
  },
  40463: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => pb,
      i: () => Lb,
      j: () => lb,
      l: () => Vb
    });
    var eb = Mb(236);
    const Hb = JSON.parse('{"aura_snowfall":{"offset":[0,2.6,0],"ownInFirstPerson":true,"particles":{"blendMode":1,"capacity":64,"colorGradients":[{"minColor":[255,255,255,0.9],"timeFraction":0},{"minColor":[255,255,255,0],"timeFraction":1}],"depth":3,"dir1":[-0.2,-1,-0.2],"dir2":[0.2,-1,0.2],"emitRate":12,"gravity":[0,-1.5,0],"height":0.2,"maxEmitPower":0.6,"maxLifeTime":2.5,"maxSize":0.15,"minEmitPower":0.3,"minLifeTime":1.5,"minSize":0.08,"texture":"snowflake","width":3}}}'),
      pb = "PetRoot";
    let Vb = JSON.parse('{"pet_reindeer":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0},"pet_reindeer2":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0}}'),
      gb = Hb;
    new Map, new Map;

    function lb(bb) {
      var wb;
      return null !== (wb = (0, eb.c)(Vb, bb)) && void 0 !== wb ? wb : null
    }

    function Lb(bb) {
      var wb;
      return null !== (wb = (0, eb.c)(gb, bb)) && void 0 !== wb ? wb : null
    }
  },
  39927: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Hb,
      d: () => pb
    });
    const eb = new WeakMap;

    function Hb(bb, wb) {
      return eb.set(bb, wb), bb
    }

    function pb(bb) {
      var wb;
      return null !== (wb = eb.get(bb)) && void 0 !== wb ? wb : null
    }
  },
  42862: (bb, wb, Mb) => {
    function eb(bb, wb, Mb) {
      return new Promise((eb => {
        const Hb = setTimeout((() => {
            pb(), eb(null)
          }), Mb),
          pb = wb((() => {
            clearTimeout(Hb);
            const wb = bb();
            eb(null === wb ? null : function(bb) {
              if (0 === bb.width || 0 === bb.height) return null;
              const wb = document.createElement("canvas");
              wb.width = bb.width, wb.height = bb.height;
              const Mb = wb.getContext("2d");
              return Mb ? (Mb.drawImage(bb, 0, 0), wb) : null
            }(wb))
          }))
      }))
    }
    Mb.d(wb, {
      e: () => eb
    })
  },
  37449: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => pb
    });
    const eb = 4e5,
      Hb = 2;

    function pb(bb, wb, Mb) {
      let [pb, Vb] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [bb, wb], gb = Math.min(Number.isFinite(Mb) && Mb > 0 ? Mb : 1, Hb);
      const lb = Math.max(0, pb, bb) * Math.max(0, Vb, wb) * gb * gb;
      return lb > eb && (gb *= Math.sqrt(eb / lb)), [Math.max(1, Math.floor(Math.max(0, bb) * gb)), Math.max(1, Math.floor(Math.max(0, wb) * gb))]
    }
  },
  35358: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => eb,
      f: () => Ib
    });
    const eb = .01,
      Hb = .08,
      pb = .01,
      Vb = 5,
      gb = 100,
      lb = 40,
      Lb = 800;

    function Ib(bb) {
      const {
        canvas: wb
      } = bb;
      let Mb = null;
      const Ib = bb => {
          var eb;
          Mb = {
            pointer: bb.pointerId,
            x: bb.clientX,
            y: bb.clientY
          }, null === (eb = wb.setPointerCapture) || void 0 === eb || eb.call(wb, bb.pointerId)
        },
        Ob = wb => {
          var Hb;
          const Vb = bb.orbit;
          if ((null === (Hb = Mb) || void 0 === Hb ? void 0 : Hb.pointer) !== wb.pointerId || null === Vb) return;
          const gb = wb.clientX - Mb.x,
            lb = wb.clientY - Mb.y;
          Mb = {
            ...Mb,
            x: wb.clientX,
            y: wb.clientY
          }, bb.setOrbit({
            alpha: Vb.alpha - gb * eb,
            beta: Math.min(Math.PI - pb, Math.max(pb, Vb.beta - lb * eb)),
            radius: Vb.radius
          })
        },
        Ub = bb => {
          var wb;
          (null === (wb = Mb) || void 0 === wb ? void 0 : wb.pointer) === bb.pointerId && (Mb = null)
        },
        tb = wb => {
          const Mb = bb.orbit;
          if (null === Mb) return;
          wb.preventDefault();
          const eb = wb.deltaY * (wb.deltaMode === WheelEvent.DOM_DELTA_LINE ? lb : wb.deltaMode === WheelEvent.DOM_DELTA_PAGE ? Lb : 1),
            pb = Math.min(gb, Math.max(Vb, Mb.radius + eb * Hb));
          bb.setOrbit({
            ...Mb,
            radius: pb
          })
        };
      return wb.style.touchAction = "none", wb.addEventListener("pointerdown", Ib), wb.addEventListener("pointermove", Ob), wb.addEventListener("pointerup", Ub), wb.addEventListener("pointercancel", Ub), wb.addEventListener("wheel", tb, {
        passive: !1
      }), () => {
        wb.removeEventListener("pointerdown", Ib), wb.removeEventListener("pointermove", Ob), wb.removeEventListener("pointerup", Ub), wb.removeEventListener("pointercancel", Ub), wb.removeEventListener("wheel", tb)
      }
    }
  },
  45163: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      WasmPreviewHost: () => vw,
      pageBuiltInAnimationPack: () => Ub,
      pagePreviews: () => gw,
      previewModule: () => kb
    });
    var eb = Mb(2471),
      Hb = Mb(667);
    const pb = "[bloxd-wasm-client]";

    function Vb(bb) {
      const wb = {
        wasm: "unknown",
        client: String(Hb.e)
      };
      try {
        var Mb;
        wb.wasm = null !== (Mb = null === bb || void 0 === bb ? void 0 : bb.vO()) && void 0 !== Mb ? Mb : wb.wasm
      } catch {}
      return wb
    }
    async function gb(bb) {
      if (bb.length < 2 || 31 !== bb[0] || 139 !== bb[1]) return bb;
      if ("undefined" === typeof DecompressionStream) {
        const {
          ungzip: wb
        } = await Promise.resolve().then((() => Mb(4071)));
        return wb(bb)
      }
      const wb = new Blob([bb]).stream().pipeThrough(new DecompressionStream("gzip"));
      return new Uint8Array(await new Response(wb).arrayBuffer())
    }

    function lb(bb, wb, eb, Hb) {
      Promise.resolve().then((() => Mb(42434))).then((Mb => {
        let {
          reportDataLoadFailure: pb
        } = Mb;
        pb(bb, wb, eb, Hb)
      }), (wb => {
        console.warn(`${pb} ${bb} didn't load, and the report couldn't be sent`, eb.error, wb)
      }))
    }
    const Lb = [3e4, 12e4, 3e5];
    class Ib {
      constructor(bb) {
        this.deps = bb, this.loading = null, this.reported = !1, this.retries = 0, this.resolveSet = () => {}, this.set = new Promise((bb => {
          this.resolveSet = bb
        }))
      }
      provide(bb) {
        return this.loading ??= this.load(bb), this.loading
      }
      whenSet() {
        return this.set
      }
      async load(bb) {
        const wb = Vb(bb),
          Mb = await async function(bb, wb) {
            let Mb;
            try {
              Mb = await bb()
            } catch (eb) {
              return {
                stage: "fetch",
                error: eb
              }
            }
            try {
              return wb(Mb) ? null : {
                stage: "decode",
                error: null
              }
            } catch (eb) {
              return {
                stage: "decode",
                error: eb
              }
            }
          }((() => this.deps.fetch()), (wb => {
            const Mb = bb.DHb(wb);
            return Mb && this.resolveSet(wb), Mb
          }));
        if (null !== Mb) {
          if ("fetch" === Mb.stage) {
            this.loading = null;
            const wb = Lb[this.retries++];
            void 0 !== wb && this.deps.later((() => {
              this.provide(bb)
            }), wb)
          }
          this.reported || (this.reported = !0, this.deps.onFailed(Mb, wb))
        }
      }
    }
    let Ob = null;

    function Ub() {
      return Ob ??= new Ib({
        fetch: async () => gb(await (0, eb.C)(tb(), {
          priority: "low"
        })),
        onFailed: (bb, wb) => {
          lb("builtInAnimations", tb(), bb, wb)
        },
        later: (bb, wb) => {
          setTimeout(bb, wb)
        }
      }), Ob
    }

    function tb() {
      return Mb(45171)
    }
    var Cb = Mb(2463),
      Eb = Mb(1271),
      Fb = Mb(364),
      Bb = Mb(361),
      sb = Mb(698),
      mb = Mb(5678),
      hb = Mb(42375),
      zb = Mb(42401),
      Xb = Mb(42622),
      xb = (Mb(42406), Mb(37446)),
      jb = Mb(42493),
      Kb = Mb(42502),
      rb = Mb(42509),
      Rb = Mb(42387),
      Db = Mb(42635),
      cb = Mb(42640),
      Yb = Mb(42422),
      Zb = Mb(42528),
      fb = Mb(42554),
      Ab = Mb(42525),
      Wb = Mb(42567),
      Jb = Mb(42633),
      Sb = Mb(37452),
      Nb = Mb(37406),
      vb = Mb(2461),
      Qb = Mb(37449);
    const Gb = "[bloxd-previews]",
      qb = 0,
      ab = 1,
      ib = 2,
      ub = 3,
      db = 1,
      Pb = 2,
      nb = 3,
      yb = 0,
      ob = 1,
      Tb = 2;

    function kb(bb) {
      const wb = bb,
        Mb = (0, hb.O)(bb),
        eb = (0, hb.m)(bb);
      return null !== Mb && null !== eb && "function" === typeof wb.cHb && "function" === typeof wb.YHb && "function" === typeof wb.ZHb && "function" === typeof wb.bJ ? wb : null
    }

    function bw() {
      return Mb(45179)
    }
    async function ww(bb, wb, eb) {
      var Hb;
      let pb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      "lost" === bb && (0, Yb.v)();
      const gb = await (0, Yb.J)();
      if (null === gb || (0, hb.q)(gb) || (0, Yb.e)()) return;
      const lb = "webgpu" === gb.backend;
      if (!lb && "lost" !== bb) return;
      const Lb = lb && (0, Bb.o)(gb.adapter, null !== eb && void 0 !== eb ? eb : null, "lost" === bb, pb),
        Ib = null !== (Hb = "lost" === bb ? (0, zb.l)((0, Cb.H)() ? (0, hb.O)((0, Cb.w)()) : null) : void 0) && void 0 !== Hb ? Hb : wb,
        Ob = lb ? (0, hb.db)(bb, void 0, (0, zb.d)(Ib)) : (0, sb.u)() ? null : sb.f;
      if (null === Ob) {
        (0, Yb.q)();
        try {
          await async function(bb, wb, eb, Hb, pb) {
            let {
              restoreLost: gb,
              adapterRemembered: lb
            } = pb;
            const Lb = (0, Cb.H)(),
              {
                flushCrashReports: Ib,
                reportRenderReload: Ob
              } = await Promise.resolve().then((() => Mb(42434)));
            Ob(bb.backend, Hb, Vb(Lb ? (0, Cb.w)() : null), {
              from: "home",
              cause: wb,
              restoreLost: gb,
              adapterRemembered: lb,
              ...Mw(bb, wb, eb)
            }), await Ib(fb.e)
          }(gb, bb, Ib, null !== eb && void 0 !== eb ? eb : "start_failed" === bb ? 0 : 1, {
            restoreLost: pb,
            adapterRemembered: Lb
          })
        } catch (tb) {
          console.warn(`${Gb} ${gb.backend} failed at home (${bb}), and its report couldn't be sent`, tb)
        }(0, fb.g)()
      } else {
        var Ub;
        const wb = Mw(gb, bb, Ib),
          eb = `${lb?"WebGPU":"WebGL"} failed at home (${bb}${void 0===wb.error?"":`: ${wb.error instanceof Error?wb.error.message:(0,Nb.j)(wb.error)}`}) and ${Ob}`;
        console.warn(`${Gb} ${eb}: the previews stop`, null !== (Ub = wb.error) && void 0 !== Ub ? Ub : ""), (0, Yb.r)({
          why: eb,
          webgpu: lb
        });
        try {
          const {
            countRenderLost: eb
          } = await Promise.resolve().then((() => Mb(42434)));
          eb(bb, wb.error, wb.context)
        } catch (Eb) {
          console.warn(`${Gb} ${gb.backend} failed at home (${bb}), and its count couldn't be sent`, Eb)
        }
      }
    }

    function Mw(bb, wb, Mb) {
      let {
        adapter: eb
      } = bb;
      return {
        error: Mb,
        context: {
          adapter: eb,
          boundAtMs: "start_failed" === wb ? null : (0, Yb.G)(),
          indirectHangs: (0, Yb.x)(),
          restoresSkipped: (0, Yb.I)()
        }
      }
    }
    async function ew(bb) {
      if (!(0, Cb.H)()) {
        await (null === bb || void 0 === bb ? void 0 : bb("renderer pick", {
          longStep: !0
        }));
        const wb = await (0, Yb.J)();
        if (null === wb || (0, hb.q)(wb)) return null;
        const Mb = await wb.load();
        if (await (null === bb || void 0 === bb ? void 0 : bb("renderer instantiation", {
            longStep: !0
          })), await (0, Zb.c)(Mb), !(0, Cb.H)()) return null
      }
      return kb((0, Cb.w)())
    }
    class Hw {
      constructor(bb, wb, Mb, eb, Hb, pb) {
        this.page = bb, this.host = wb, this.id = Mb, this.canvas = eb, this.size = Hb, this.models = void 0, this.images = void 0, this.write = void 0, this.outcomes = [], this.closed = !1, this.quiet = 0, this.settled = [];
        const Vb = {
            ...pb.images,
            glbUrl: bb => {
              var wb;
              return null !== (wb = this.models.drawnUrl(bb)) && void 0 !== wb ? wb : pb.images.glbUrl(bb)
            }
          },
          gb = wb => bb.modelFile(wb);
        this.images = new Xb.g(Vb, (bb => {
          console.warn(`${Gb} image ${bb.key.kind}:${bb.key.index}:${bb.key.word} failed`, bb.error)
        }), {
          fetchFile: gb,
          fetchImage: wb => bb.imageFile(wb)
        }), bb.startModels(), this.models = new jb.i(pb.files, ((wb, Mb) => bb.buildModel(wb, Mb)), (bb => {
          console.warn(`${Gb} model file ${bb.file} (${bb.url}) failed`, bb.error)
        }), {
          fetchFile: gb,
          onWritten: (bb, wb) => {
            this.images.glbWritten(bb, wb)
          },
          onTaken: (bb, wb) => {
            this.images.glbTaken(bb, wb)
          }
        }), this.write = (bb, wb, Mb) => {
          if (this.closed) return !0;
          if (bb === jb.c) {
            const bb = new DataView(Mb.buffer, Mb.byteOffset, rb.b),
              eb = bb.getUint32(0, !0),
              Hb = bb.getUint32(rb.f, !0),
              pb = this.page.hostCall(Tb, (() => this.host.fHb(this.id, eb, wb, Mb.subarray(rb.b))));
            return this.outcomes.push([Hb, pb]), !0
          }
          return bb === Xb.d && (this.page.hostCall(void 0, (() => {
            this.host.AHb(this.id, Mb)
          })), !0)
        }
      }
      get isClosed() {
        return this.closed
      }
      get isStopped() {
        return this.page.isStopped
      }
      resize(bb, wb, Mb) {
        if (this.closed) return;
        const [eb, Hb] = (0, Qb.b)(bb, wb, this.page.dpr(), Mb);
        eb === this.size[0] && Hb === this.size[1] || (this.size = [eb, Hb], this.page.hostCall(void 0, (() => {
          this.host.resize(this.id, eb, Hb)
        })))
      }
      setMob(bb, wb, Mb, eb) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.WHb(this.id, bb, wb, Mb, eb))))
      }
      setPet(bb, wb, Mb, eb) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.JHb(this.id, bb, wb, Mb, eb))))
      }
      setPlayer(bb, wb, Mb) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.SHb(this.id, bb, wb, Mb))))
      }
      setCompanions(bb) {
        var wb;
        let {
          pet: Mb,
          aura: eb
        } = bb;
        if (this.closed) return;
        const Hb = null !== (wb = null === Mb || void 0 === Mb ? void 0 : Mb.model) && void 0 !== wb ? wb : -1,
          pb = new Float64Array(Mb ? [Mb.scale, ...Mb.offset, Mb.yawOffset, Mb.bobAmplitude, Mb.bobHz] : []),
          Vb = new Float64Array(eb ? [...eb.offset, ...eb.half] : []);
        this.page.hostCall(void 0, (() => {
          var bb, wb;
          this.host.NHb(this.id, Hb, pb, null !== (bb = null === Mb || void 0 === Mb ? void 0 : Mb.flyClip) && void 0 !== bb ? bb : "", null !== (wb = null === eb || void 0 === eb ? void 0 : eb.opts) && void 0 !== wb ? wb : "", Vb)
        }))
      }
      setNametag(bb, wb, Mb) {
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.vHb(this.id, bb, wb, Mb)
        }))
      }
      setFigure(bb, wb, Mb, eb) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.QHb(this.id, bb, wb, Mb, eb))))
      }
      replay() {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.replay(this.id))))
      }
      get orbit() {
        if (this.closed) return null;
        const bb = this.page.hostCall(null, (() => this.host.orbit(this.id)));
        return null === bb || bb.length < 3 ? null : {
          alpha: bb[0],
          beta: bb[1],
          radius: bb[2]
        }
      }
      setOrbit(bb) {
        let {
          alpha: wb,
          beta: Mb,
          radius: eb
        } = bb;
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.GHb(this.id, wb, Mb, eb)
        }))
      }
      untilSettled() {
        return this.closed || this.page.isStopped ? Promise.resolve() : (this.quiet = 0, new Promise((bb => {
          this.settled.push(bb)
        })))
      }
      packChanged() {
        this.quiet = 0, this.models.refresh(), (0, Db.j)(this.images)
      }
      feed() {
        this.models.drain(this.write);
        for (const [bb, wb] of this.outcomes) {
          const Mb = wb === yb ? [] : [wb === ob ? bb : (bb | jb.f) >>> 0];
          this.models.taken(bb, Mb)
        }
        this.outcomes.length = 0, this.images.drain(this.write)
      }
      collect(bb) {
        let wb = !1;
        if (bb) {
          const bb = this.host.qHb(this.id);
          for (const wb of bb) this.models.request(wb);
          const Mb = this.host.aHb(this.id);
          Mb.length > 0 && this.images.onEvent(Mb), wb = bb.length > 0 || Mb.length > 0
        }
        const Mb = this.page.modelsUnavailable ? 0 : this.models.asking + this.models.unanswered,
          eb = wb || Mb > 0 || this.images.waiting > 0 || this.images.inFlight > 0;
        this.quiet = eb ? 0 : this.quiet + 1, this.quiet >= 3 && this.resolveSettled()
      }
      close() {
        this.closed || (this.closed = !0, this.page.closePreview(this), this.resolveSettled())
      }
      abandon() {
        this.resolveSettled()
      }
      dispose(bb) {
        this.page.hostCall(void 0, (() => {
          const wb = this.host.close(this.id);
          wb.length > 0 && this.images.onEvent(wb), this.page.isTrapped || bb.ZHb(this.id)
        })), this.images.dispose(), this.canvas.remove()
      }
      resolveSettled() {
        const bb = this.settled;
        this.settled = [];
        for (const wb of bb) wb()
      }
    }
    class pw {
      constructor(bb) {
        this.deps = bb, this.module = null, this.host = null, this.opening = null, this.pageCanvas = null, this.samples = 1, this.binding = null, this.sessionEnds = 0, this.lastEndReturned = !0, this.previews = new Map, this.nextId = 1, this.frameId = null, this.stopped = !1, this.loggedErrors = new Set, this.modelsListener = {
          onUnavailable: bb => {
            this.modelsFailed(bb)
          },
          onWorkerLost: bb => {
            this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${Gb} a model worker was lost: ${bb}`))
          },
          onModuleRetry: () => {}
        }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.LC = {
          setShaderPack: (bb, wb, Mb, eb, Hb) => (this.shaderPackArgs = [bb, wb, Mb, eb, Hb], this.handOverShaderPack(), !0)
        }, this.frame = bb => {
          this.frameId = null;
          const wb = this.host;
          if (null !== wb && 0 !== this.previews.size && !this.settleIfTrapped() && !this.stopped)
            if (this.deps.frameDue(bb)) try {
              this.drawFrame(wb, bb)
            } catch (Mb) {
              if (!this.stopIfTrapped(Mb) && (this.stop(), (0, hb.s)(Mb))) return void this.deps.onRenderFailed("frames_refused", Mb);
              console.warn(`${Gb} the previews stopped: their frame threw`, Mb)
            } else this.startFrames()
        }, bb.pack.onChange((() => {
          this.packChanged()
        })), bb.game.onGameChange((() => {
          this.tellInGame()
        }))
      }
      packChanged() {
        if (!this.stopped)
          for (const bb of this.previews.values()) bb.packChanged()
      }
      dpr() {
        return this.deps.dpr()
      }
      get sessionBound() {
        var bb, wb;
        return null !== (bb = null === (wb = this.host) || void 0 === wb ? void 0 : wb.attached()) && void 0 !== bb && bb
      }
      get open() {
        return this.previews.size
      }
      get frameCostMs() {
        return 0 === this.costs.length ? 0 : this.costs.reduce(((bb, wb) => bb + wb), 0) / this.costs.length
      }
      async bindSession(bb, wb, Mb) {
        const eb = this.binding,
          Hb = this.sessionEnds;
        try {
          const pb = this.hostOf(bb);
          if (!pb.iHb()) {
            const wb = (0, Wb.e)().sampleCount,
              Vb = await Mb(wb);
            if (this.sessionEnds !== Hb) return this.keepRendererOfEndedSession(bb, pb, Vb, wb, eb), wb;
            if (!pb.uHb(Vb)) throw new Error("the page has a renderer already");
            (0, Yb.t)(performance.now()), this.samples = wb, (0, Jb.g)((0, hb.m)(bb))
          }
          if (!pb.attach(wb)) throw new Error("the page's renderer is lent to another session");
          return this.samples
        } finally {
          this.binding === eb && this.endBinding()
        }
      }
      keepRendererOfEndedSession(bb, wb, Mb, eb, Hb) {
        if (!this.lastEndReturned || null !== this.binding && this.binding !== Hb) try {
          Mb.free()
        } catch (pb) {
          console.warn(`${Gb} an ended session's renderer didn't free`, pb)
        } else wb.uHb(Mb) && ((0, Yb.t)(performance.now()), this.samples = eb, (0, Jb.g)(this.registryOf(bb)))
      }
      async beginSession() {
        var bb;
        let wb = () => {};
        const Mb = new Promise((bb => {
          wb = bb
        }));
        this.binding = {
          done: Mb,
          release: wb
        }, await (null === (bb = this.opening) || void 0 === bb ? void 0 : bb.catch((() => null)));
        const eb = this.pageCanvas;
        return this.pageCanvas = null, eb
      }
      endSession(bb) {
        var wb, Mb;
        if (this.sessionEnds++, this.lastEndReturned = bb, this.endBinding(), bb) {
          try {
            var eb;
            null === (eb = this.host) || void 0 === eb || eb.detach()
          } catch (Hb) {
            return void console.warn(`${Gb} the session's core kept the page's renderer`, Hb)
          }!0 === (null === (wb = this.host) || void 0 === wb ? void 0 : wb.attached()) && console.warn(`${Gb} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (Mb = this.host) || void 0 === Mb ? void 0 : Mb.iHb()) && (0, Jb.g)(this.registryOf(this.module))
        }
      }
      endBinding() {
        var bb;
        null === (bb = this.binding) || void 0 === bb || bb.release(), this.binding = null
      }
      async openPreview(bb, wb, Mb, eb) {
        const Hb = await this.renderingHost(),
          pb = this.module;
        if (null === Hb || null === pb) throw new Error("this page can't draw previews: it has no renderer build");
        if (this.animations ??= this.loadAnimations(Hb), this.deps.pack.wanted(), this.isStopped) throw new Error("the previews stopped");
        this.guarded((() => {
          this.deps.provideBuiltInAnimationPack(pb)
        }));
        const Vb = this.nextId++,
          gb = this.deps.createCanvas(),
          [lb, Lb] = (0, Qb.b)(wb, Mb, this.deps.dpr(), eb);
        gb.width = lb, gb.height = Lb;
        if (!this.guarded((() => (pb.YHb(Vb, gb), Hb.open(Vb, lb, Lb, bb))))) throw this.hostCall(void 0, (() => {
          pb.ZHb(Vb)
        })), new Error("the page's renderer is lent to a session that is running");
        this.restartModelsIfFailed();
        const Ib = new Hw(this, Hb, Vb, gb, [lb, Lb], this.deps);
        return this.previews.set(Vb, Ib), this.startFrames(), Ib
      }
      prefetch(bb) {
        if (this.prefetched || !this.mayPrefetch) return;
        this.prefetched = !0;
        (null === this.module ? this.loadModule(bb) : Promise.resolve(this.module)).then((async wb => {
          null !== wb && (await (null === bb || void 0 === bb ? void 0 : bb("preview workers and files")), this.mayPrefetch && (this.startModels(), this.fetchAnimationTable().catch((() => {})), this.prefetchPlayerFiles()))
        }), (() => {}))
      }
      modelFile(bb) {
        return this.prefetchedOr(bb, this.deps.fetchModel)
      }
      imageFile(bb) {
        return this.prefetchedOr(bb, eb.C)
      }
      prefetchedOr(bb, wb) {
        const Mb = this.prefetchedFiles.get(bb);
        return void 0 === Mb ? wb(bb) : Mb.catch((() => wb(bb)))
      }
      async prefetchPlayerFiles() {
        const bb = this.deps.playerFile().then((bb => this.deps.files.url(bb))),
          wb = await Promise.all([bb, this.deps.images.lifeformAtlasUrl(Db.e)]).catch((() => null));
        if (null === wb) return;
        const [Mb, eb] = wb, Hb = (bb, wb) => {
          if (null === bb) return;
          const Mb = wb(bb);
          this.prefetchedFiles.set(bb, Mb), Mb.catch((() => {
            this.prefetchedFiles.delete(bb)
          }))
        };
        Hb(Mb, (bb => this.modelFile(bb))), Hb(eb, (bb => this.imageFile(bb)))
      }
      loadModule(bb) {
        return this.moduleLoad ??= this.deps.loadModule(bb).then((bb => (null === bb && (this.moduleLoad = null), bb)), (bb => {
          throw this.moduleLoad = null, bb
        })), this.moduleLoad
      }
      fetchAnimationTable() {
        return this.animationTable ??= this.deps.fetchAnimations().catch((bb => {
          throw this.animationTable = null, bb
        })), this.animationTable
      }
      get modelsUnavailable() {
        return this.unavailable
      }
      startModels() {
        this.models ??= this.deps.startModels(this.modelsListener).catch((bb => (this.modelsFailed(bb), () => new Promise((() => {})))))
      }
      buildModel(bb, wb) {
        return this.startModels(), this.models.then((Mb => Mb(bb, wb))).then((bb => this.unavailable ? new Promise((() => {})) : bb))
      }
      restartModelsIfFailed() {
        this.unavailable && !this.modelsRestarted && 0 === this.previews.size && (this.modelsRestarted = !0, this.models = null, this.unavailable = !1, this.startModels())
      }
      modelsFailed(bb) {
        this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${Gb} the model workers didn't start: models won't draw in the previews`, bb))
      }
      called(bb) {
        return 0 !== bb && this.logError(bb, 0), bb
      }
      closePreview(bb) {
        this.previews.delete(bb.id), null !== this.module && bb.dispose(this.module), 0 === this.previews.size && null !== this.frameId && (this.deps.cancelFrame(this.frameId), this.frameId = null)
      }
      hostOf(bb) {
        if (null !== this.module && this.module !== bb) throw new Error("a second renderer module on one page");
        return this.module = bb, null === this.host && (this.host = this.guarded((() => new bb.cHb)), this.tellInGame(), this.handOverShaderPack()), this.host
      }
      tellInGame() {
        const {
          host: bb
        } = this;
        null !== bb && this.outsideCall("the game's start or end", (() => {
          bb.dHb(this.deps.game.inGame())
        }))
      }
      handOverShaderPack() {
        const {
          host: bb,
          shaderPackArgs: wb
        } = this;
        null !== bb && null !== wb && this.outsideCall("the shader pack's hand-over", (() => {
          bb.RHb(...wb) || console.warn(`${Gb} the host refused the shader pack: previews draw without it at home`)
        }))
      }
      outsideCall(bb, wb) {
        try {
          this.hostCall(void 0, wb)
        } catch (Mb) {
          this.stop(), console.warn(`${Gb} the previews stopped: ${bb} threw`, Mb)
        }
      }
      async loadAnimations(bb) {
        const wb = Vb(null),
          Mb = this.module;
        try {
          wb.wasm = null === Mb ? wb.wasm : this.hostCall(wb.wasm, (() => Mb.vO()))
        } catch {}
        let eb, Hb;
        try {
          eb = await this.fetchAnimationTable()
        } catch (pb) {
          return void this.deps.onAnimationsFailed({
            stage: "fetch",
            error: pb
          }, wb)
        }
        if (!this.settleIfTrapped()) {
          try {
            Hb = bb.PHb(eb)
          } catch (pb) {
            if (this.stopIfTrapped(pb)) return;
            return void this.deps.onAnimationsFailed({
              stage: "decode",
              error: pb
            }, wb)
          }
          Hb || this.deps.onAnimationsFailed({
            stage: "decode",
            error: null
          }, wb)
        }
      }
      async renderingHost() {
        if (null !== this.binding && await this.binding.done, this.settleIfTrapped()) return null;
        const bb = this.host;
        return null !== bb && this.guarded((() => bb.iHb())) ? bb : (this.opening ??= this.openAtHome().finally((() => {
          this.opening = null
        })), this.opening)
      }
      async openAtHome() {
        var bb;
        const wb = null !== (bb = this.module) && void 0 !== bb ? bb : await this.loadModule();
        if (null === wb) return null;
        const Mb = this.hostOf(wb),
          eb = () => this.guarded((() => Mb.iHb()));
        if (eb()) return Mb;
        if (null !== (0, Yb.E)() || (0, Yb.e)()) return null;
        const Hb = this.deps.createCanvas();
        Hb.width = 1, Hb.height = 1;
        const pb = await this.deps.openExtras();
        if (this.settleIfTrapped()) return null;
        const Vb = (0, Wb.e)().sampleCount;
        let gb;
        try {
          gb = await (0, hb.x)(wb, "previewRenderer", Hb, Vb, Sb.g, pb)
        } catch (lb) {
          throw lb instanceof Rb.d ? this.stopForTrap(lb) : (0, hb.v)(lb) && await this.deps.onRenderFailed("start_failed", lb), lb
        }
        return this.guarded((() => Mb.uHb(gb))) ? ((0, Yb.t)(performance.now()), this.samples = Vb, this.pageCanvas = Hb, (0, Jb.g)(this.registryOf(wb)), Mb) : eb() ? Mb : null
      }
      startFrames() {
        null !== this.frameId || this.isStopped || (this.frameId = this.deps.requestFrame(this.frame))
      }
      drawFrame(bb, wb) {
        for (const Vb of this.previews.values()) Vb.feed();
        if (this.stopped) return;
        this.module.bJ(this.deps.heldLow());
        const Mb = this.deps.now(),
          eb = bb.frame(wb);
        this.costs.push(this.deps.now() - Mb), this.costs.length > 120 && this.costs.shift();
        const Hb = 0 !== (256 & eb),
          pb = 255 & eb;
        for (const Vb of this.previews.values()) {
          if (this.stopped) return;
          Vb.collect(Hb)
        }
        if (!this.stopped) {
          if (0 !== (512 & eb) && this.deps.onDrew(), Hb) {
            const wb = bb.nHb();
            for (let bb = 0; bb + 1 < wb.length; bb += 2) wb[bb] === mb.I.RenderDeviceLost && this.deps.onDeviceLost(), this.logError(wb[bb], wb[bb + 1])
          }
          if (pb !== db) {
            if (pb === Pb) return this.stop(), void this.deps.onFatal(bb.oHb(), bb.THb());
            if (pb === nb) return this.stop(), void console.warn(`${Gb} the previews stopped: the page's renderer went with its session`);
            (0, Fb.e)(wb), this.startFrames()
          } else {
            const wb = bb.yHb();
            this.stop();
            const Mb = wb[2] === mb.Vc.PIPELINE_FAILED ? "pipeline_failed" : "lost";
            this.deps.onRenderFailed(Mb, void 0, wb[1], wb[2] === mb.Vc.RESTORE_LOST)
          }
        }
      }
      get isStopped() {
        return this.stopped || this.isTrapped
      }
      get mayPrefetch() {
        return !this.isStopped && !(0, Yb.e)() && null === (0, Yb.E)()
      }
      get isTrapped() {
        return null !== this.module && ((0, Rb.i)(this.module) || "failed" === (0, Cb.v)())
      }
      hostCall(bb, wb) {
        if (this.settleIfTrapped()) return bb;
        try {
          return wb()
        } catch (Mb) {
          if (this.stopIfTrapped(Mb)) return bb;
          throw Mb
        }
      }
      guarded(bb) {
        if (this.settleIfTrapped()) throw new Error("the previews stopped: their module trapped");
        try {
          return bb()
        } catch (wb) {
          throw this.stopIfTrapped(wb), wb
        }
      }
      registryOf(bb) {
        return {
          kHb: (wb, Mb) => {
            this.hostCall(void 0, (() => {
              bb.kHb(wb, Mb)
            }))
          },
          bpb: wb => {
            this.hostCall(void 0, (() => {
              bb.bpb(wb)
            }))
          },
          ...void 0 === bb.wpb ? {} : {
            wpb: (wb, Mb) => {
              this.hostCall(void 0, (() => {
                var eb;
                null === (eb = bb.wpb) || void 0 === eb || eb.call(bb, wb, Mb)
              }))
            }
          },
          ...void 0 === bb.Mpb ? {} : {
            Mpb: wb => {
              this.hostCall(void 0, (() => {
                var Mb;
                null === (Mb = bb.Mpb) || void 0 === Mb || Mb.call(bb, wb)
              }))
            }
          }
        }
      }
      settleIfTrapped() {
        return !!this.isTrapped && (this.stopped || (this.stop(), (0, Jb.g)(null)), !0)
      }
      stopIfTrapped(bb) {
        return !(null === this.module || !(0, Rb.j)(this.module, bb)) && (this.stopForTrap(bb), !0)
      }
      stopForTrap(bb) {
        this.stop(), (0, Jb.g)(null), (0, vb.c)("previews", bb)
      }
      stop() {
        this.stopped = !0;
        for (const bb of this.previews.values()) bb.abandon()
      }
      logError(bb, wb) {
        const Mb = `${bb}:${wb}`;
        this.loggedErrors.has(Mb) || (this.loggedErrors.add(Mb), console.warn(`${Gb} error ${bb} (detail ${wb})`))
      }
    }
    let Vw = null;

    function gw() {
      return Vw ??= new pw(function() {
        const bb = (0, Kb.n)(Eb.clientSideServerUrls.staticUrl, {
          packUrl: bb => {
            var wb, Mb;
            return null !== (wb = null === (Mb = Db.i.current) || void 0 === Mb ? void 0 : Mb.modelUrl(bb)) && void 0 !== wb ? wb : null
          }
        });
        return {
          loadModule: ew,
          startModels: async bb => {
            const {
              pageModelPool: wb
            } = await Mb.e(51).then((() => Mb(54941))), {
              pool: eb
            } = wb(bb);
            return (bb, wb) => eb.build(bb, wb)
          },
          fetchAnimations: async () => gb(await (0, eb.C)(bw())),
          playerFile: async () => (await (0, Kb.j)()).PLAYER_FILE,
          onAnimationsFailed: (bb, wb) => {
            lb("previewAnimations", bw(), bb, wb)
          },
          provideBuiltInAnimationPack: bb => {
            Ub().provide(bb)
          },
          openExtras: Yb.B,
          files: bb,
          images: (0, Db.n)((0, Xb.n)(bb.url), (() => Db.i.current)),
          pack: Db.i,
          game: cb.d,
          fetchModel: bb => (0, Kb.g)(bb),
          createCanvas: () => document.createElement("canvas"),
          dpr: () => window.devicePixelRatio,
          now: () => performance.now(),
          requestFrame: bb => requestAnimationFrame(bb),
          cancelFrame: bb => {
            cancelAnimationFrame(bb)
          },
          onRenderFailed: ww,
          onFatal: (bb, wb) => {
            console.error(`${Gb} the previews stopped: renderer error ${bb} (detail ${wb})`)
          },
          onDeviceLost: () => {
            (0, Yb.D)() === Ab.b.webgpu && ((0, zb.f)((0, Cb.H)() ? (0, hb.O)((0, Cb.w)()) : null), Bb.C.lost())
          },
          onDrew: () => {
            Bb.C.drew(), (0, xb.n)()
          },
          frameDue: xb.r,
          heldLow: xb.o
        }
      }()), Vw
    }
    var lw = Mb(648),
      Lw = Mb(39927),
      Iw = Mb(4659);
    const Ow = {
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
    var Uw = Mb(40504),
      tw = Mb(40463),
      Cw = Mb(45181);
    class Ew {
      constructor() {
        this.pet = null, this.aura = null, this.companions = {
          pet: null,
          aura: null
        }
      }
      of(bb, wb) {
        const Mb = void 0 === bb ? null : (0, tw.j)(bb),
          eb = void 0 === wb ? null : (0, tw.i)(wb);
        return Mb === this.pet && eb === this.aura || (this.pet = Mb, this.aura = eb, this.companions = {
          pet: Mb && Fw(Mb),
          aura: eb && Bw(eb)
        }), this.companions
      }
    }

    function Fw(bb) {
      var wb;
      const Mb = Cw.COSMETIC_MODEL_KEYS.get(bb.model);
      if (void 0 === Mb) return console.warn(`[bloxd-previews] pet model ${bb.model} isn't a Player attachment model`), null;
      const {
        scale: eb,
        followOffset: Hb,
        yawOffset: pb,
        bobAmplitude: Vb,
        bobHz: gb,
        clips: lb
      } = bb;
      return {
        model: Mb,
        scale: eb,
        offset: Hb,
        yawOffset: pb,
        bobAmplitude: Vb,
        bobHz: gb,
        flyClip: null !== (wb = null === lb || void 0 === lb ? void 0 : lb.fly) && void 0 !== wb ? wb : null
      }
    }

    function Bw(bb) {
      const {
        opts: wb,
        half: Mb
      } = (0, Uw.d)(bb);
      return {
        opts: JSON.stringify(wb),
        offset: bb.offset,
        half: Mb
      }
    }
    var sw = Mb(35358),
      mw = Mb(37528),
      hw = Mb(42862);
    const zw = "[bloxd-previews]",
      Xw = new Uint32Array(5);

    function xw(bb) {
      return lw.j.indexOf(bb)
    }
    const jw = new WeakSet;

    function Kw(bb) {
      const wb = (0, Lw.d)(bb),
        Mb = null === wb ? -1 : rw(wb);
      return -1 !== Mb ? Mb : (jw.has(bb) || (jw.add(bb), console.warn(`${zw} an animation the previews' table lacks: the mob idles instead`)), -1)
    }

    function rw(bb) {
      var wb;
      return null !== (wb = Ow[bb]) && void 0 !== wb ? wb : -1
    }

    function Rw(bb, wb) {
      const {
        canvas: Mb
      } = wb;
      Mb.style.width = "100%", Mb.style.height = "100%", Mb.style.display = "block", bb.appendChild(Mb)
    }

    function Dw(bb) {
      const wb = bb.getBoundingClientRect();
      return [wb.width, wb.height]
    }
    class Yw {
      constructor(bb, wb) {
        this.preview = bb, this.showView = wb
      }
      show(bb) {
        this.showView(this.preview, bb)
      }
      resize(bb, wb) {
        this.preview.resize(bb, wb)
      }
      close() {
        this.preview.close()
      }
    }
    class Zw {
      constructor(bb) {
        this.preview = bb, this.ready = void 0, this.dev = void 0, this.built = !1, this.cosmetics = {}, this.emote = null, this.tunings = new Ew, this.companions = null, this.nametag = null, this.stopRasteringNametag = null, this.detachControls = void 0, this.detachControls = (0, sw.f)(bb), this.dev = {
          canvas: () => bb.canvas,
          captureFrame: wb => (0, hw.e)((() => bb.isClosed ? null : bb.canvas), xb.e, wb),
          isolateHead: () => {
            console.warn(`${zw} isolateHead: noa's character preview only`)
          },
          isolatePet: () => {
            console.warn(`${zw} isolatePet: noa's character preview only`)
          }
        }, this.apply(), this.ready = bb.untilSettled().then((() => {
          if (bb.isStopped) throw new Error(`${zw} the previews stopped before the character drew`);
          this.built = !0
        }))
      }
      isReady() {
        return this.built && !this.preview.isClosed
      }
      setCosmetic(bb, wb) {
        this.cosmetics[bb] = wb, this.apply()
      }
      setNametag(bb) {
        var wb;
        if (this.nametag = bb, null === (wb = this.stopRasteringNametag) || void 0 === wb || wb.call(this), this.stopRasteringNametag = null, null === bb || void 0 === bb || !bb.name) return void this.preview.setNametag("", "null", "null");
        const Mb = () => {
          this.preview.setNametag(bb.name, JSON.stringify(bb.nameColour), JSON.stringify(bb.ranks))
        };
        mw.k.untilLoadedFor(bb.name).then((() => {
          this.nametag !== bb || this.preview.isClosed || (Mb(), this.stopRasteringNametag = (0, mw.i)(Mb))
        }))
      }
      playEmote(bb) {
        null === bb || bb !== this.emote ? (this.emote = bb, this.apply()) : this.preview.replay()
      }
      untilDrawn(bb) {
        return this.preview.untilSettled()
      }
      setOrbit(bb) {
        let {
          yaw: wb,
          pitch: Mb,
          radius: eb
        } = bb;
        const Hb = this.preview.orbit;
        null !== Hb && this.preview.setOrbit({
          alpha: wb,
          beta: Mb,
          radius: null !== eb && void 0 !== eb ? eb : Hb.radius
        })
      }
      resetCamera() {}
      resize(bb, wb) {
        this.preview.resize(bb, wb)
      }
      close() {
        var bb;
        null === (bb = this.stopRasteringNametag) || void 0 === bb || bb.call(this), this.detachControls(), this.preview.close()
      }
      apply() {
        var bb;
        this.preview.setPlayer(JSON.stringify(this.cosmetics), Xw, null === (bb = this.emote) ? -1 : rw(bb));
        const wb = this.tunings.of(this.cosmetics.pet, this.cosmetics.aura);
        wb !== this.companions && (this.companions = wb, this.preview.setCompanions(wb))
      }
    }

    function fw(bb, wb) {
      let {
        mobType: Mb,
        variation: eb,
        animation: Hb
      } = wb;
      bb.setMob(xw(Mb), null !== eb && void 0 !== eb ? eb : "", 1, Kw(Hb))
    }

    function Aw(bb, wb) {
      let {
        mobType: Mb,
        variation: eb,
        metaInfo: Hb,
        tamed: pb
      } = wb;
      bb.setPet(xw(Mb), eb, Hb, pb)
    }
    const Ww = {
      aimed: .533 / 1.15 * 1.1,
      ready: .16 / .85 * 1.1
    };
    class Jw {
      constructor(bb, wb, Mb, eb) {
        this.preview = null, this.closed = !1, this.figure = null, this.shown = !1, this.order = "", this.span = {
          left: 0,
          width: 0
        }, this.lineup = [0, 0], this.given = null, this.loaded = !1, bb(Mb.width, eb[1], eb).then((bb => {
          if (this.closed) return void bb.close();
          const {
            style: Mb
          } = bb.canvas;
          Mb.position = "absolute", Mb.top = "0", Mb.visibility = "hidden", Rw(wb, bb), this.preview = bb, this.apply()
        })).catch((bb => {
          console.error(`${zw} couldn't open a lineup figure`, bb)
        }))
      }
      update(bb, wb, Mb, eb, Hb) {
        this.figure = bb, this.shown = wb, this.order = Mb, this.span = eb, this.lineup = Hb, this.apply()
      }
      close() {
        var bb;
        this.closed = !0, null === (bb = this.preview) || void 0 === bb || bb.close(), this.preview = null
      }
      apply() {
        var bb;
        const {
          preview: wb,
          figure: Mb,
          lineup: eb
        } = this;
        if (null === wb || null === Mb) return;
        if (this.given !== Mb) {
          var Hb;
          this.given = Mb, this.loaded = !1;
          const bb = null === Mb.NK ? 0 : null !== (Hb = (0, Iw.c)(Mb.NK)) && void 0 !== Hb ? Hb : 0;
          wb.setFigure(function(bb) {
            return JSON.stringify(Object.fromEntries(bb.cosmetics))
          }(Mb), bb, Kw(Mb.animation), Mb.size), wb.untilSettled().then((() => {
            this.given === Mb && (this.loaded = !0, this.apply())
          }))
        }
        const {
          left: pb,
          width: Vb
        } = this.span;
        wb.resize(Vb, eb[1], eb);
        const {
          style: gb
        } = wb.canvas;
        gb.top = -(null !== (bb = Mb.lift) && void 0 !== bb ? bb : 0) * eb[1] + "px", gb.left = `${pb}px`, gb.width = `${Vb}px`, gb.zIndex = this.order, gb.visibility = this.shown && this.loaded ? "visible" : "hidden"
      }
    }
    class Sw {
      constructor(bb, wb) {
        this.open = wb, this.layer = void 0, this.figures = [], this.view = {
          figures: [],
          shown: []
        }, this.size = void 0, this.size = Dw(bb), this.layer = document.createElement("div");
        const {
          style: Mb
        } = this.layer;
        Mb.position = "relative", Mb.isolation = "isolate", Mb.overflow = "hidden", Mb.width = "100%", Mb.height = "100%", Mb.pointerEvents = "none", bb.appendChild(this.layer)
      }
      show(bb) {
        this.view = bb, this.place()
      }
      resize(bb, wb) {
        this.size = [bb, wb], this.place()
      }
      close() {
        for (const bb of this.figures) bb.close();
        this.figures = [], this.layer.remove()
      }
      place() {
        const {
          figures: bb,
          shown: wb
        } = this.view;
        for (const eb of this.figures.splice(bb.length)) eb.close();
        const {
          size: Mb
        } = this;
        bb.forEach(((eb, Hb) => {
          var pb;
          const Vb = function(bb, wb, Mb, eb) {
            let [Hb, pb] = eb;
            const Vb = (bb + .5) * Hb / wb,
              gb = Math.min(Math.max(Hb / wb, 2 * Mb * pb), 2 * Math.max(Vb, Hb - Vb));
            return {
              left: Vb - gb / 2,
              width: gb
            }
          }(Hb, bb.length, function(bb) {
            let {
              animation: wb,
              size: Mb
            } = bb;
            const {
              aimed: eb,
              ready: Hb
            } = Ww;
            return (Kw(wb) === Ow.gunAimed ? eb : Hb) * Mb
          }(eb), Mb);
          this.figures[Hb] ??= new Jw(this.open, this.layer, Vb, Mb), this.figures[Hb].update(eb, null !== (pb = wb[Hb]) && void 0 !== pb && pb, function(bb, wb) {
            return String(Math.round(1e3 * bb) + wb)
          }(eb.size, Hb), Vb, Mb)
        }))
      }
    }
    const Nw = {
      player: ab,
      store: ib,
      showcase: ub
    };
    class vw {
      constructor(bb) {
        this.page = bb
      }
      async openMob(bb) {
        return new Yw(await this.open(bb, qb), fw)
      }
      async openPet(bb) {
        return new Yw(await this.open(bb, qb), Aw)
      }
      openMobLineup(bb) {
        return new Sw(bb, ((bb, wb, Mb) => this.page.openPreview(qb, bb, wb, Mb)))
      }
      async openCharacter(bb, wb) {
        return new Zw(await this.open(bb, Nw[wb]))
      }
      async open(bb, wb) {
        const [Mb, eb] = Dw(bb), Hb = await this.page.openPreview(wb, Mb, eb);
        return Rw(bb, Hb), Hb
      }
    }
  },
  45171: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/builtInAnimations.anim.1876a593a8239b631bf1.gz"
  },
  45179: (bb, wb, Mb) => {
    bb.exports = Mb.p + "static/media/previewAnimations.dat.a9c06de838594e8096c6.gz"
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);