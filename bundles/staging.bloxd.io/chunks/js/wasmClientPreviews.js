export const id = 72;
export const ids = [72];
export const modules = {
  40756: (dd, Od, md) => {
    function Wd(dd) {
      return void 0 === dd ? void 0 : [dd[0], dd[1], dd[2]]
    }

    function Fd(dd) {
      const Od = dd.particles;
      return {
        opts: {
          texture: Od.texture,
          Mt: Od.Mt,
          minLifeTime: Od.minLifeTime,
          maxLifeTime: Od.maxLifeTime,
          minSize: Od.minSize,
          maxSize: Od.maxSize,
          minEmitPower: Od.minEmitPower,
          maxEmitPower: Od.maxEmitPower,
          emitRate: Od.emitRate,
          gravity: Wd(Od.gravity),
          dir1: Wd(Od.dir1),
          dir2: Wd(Od.dir2),
          colorGradients: Od.colorGradients,
          blendMode: Od.blendMode
        },
        half: [Od.width / 2, Od.height / 2, Od.depth / 2]
      }
    }
    md.d(Od, {
      d: () => Fd
    })
  },
  40721: (dd, Od, md) => {
    md.d(Od, {
      e: () => Rd,
      i: () => vd,
      j: () => hd,
      k: () => Xd
    });
    var Wd = md(231);
    const Fd = JSON.parse('{"aura_snowfall":{"offset":[0,2.6,0],"ownInFirstPerson":true,"particles":{"blendMode":1,"capacity":64,"colorGradients":[{"minColor":[255,255,255,0.9],"timeFraction":0},{"minColor":[255,255,255,0],"timeFraction":1}],"depth":3,"dir1":[-0.2,-1,-0.2],"dir2":[0.2,-1,0.2],"emitRate":12,"gravity":[0,-1.5,0],"height":0.2,"maxEmitPower":0.6,"maxLifeTime":2.5,"maxSize":0.15,"minEmitPower":0.3,"minLifeTime":1.5,"minSize":0.08,"texture":"snowflake","width":3}}}'),
      Rd = "PetRoot";
    let Xd = JSON.parse('{"pet_reindeer":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0},"pet_reindeer2":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0}}'),
      Kd = Fd;
    new Map, new Map;

    function hd(dd) {
      var Od;
      return null !== (Od = (0, Wd.b)(Xd, dd)) && void 0 !== Od ? Od : null
    }

    function vd(dd) {
      var Od;
      return null !== (Od = (0, Wd.b)(Kd, dd)) && void 0 !== Od ? Od : null
    }
  },
  40230: (dd, Od, md) => {
    md.d(Od, {
      d: () => Fd,
      h: () => Rd
    });
    const Wd = new WeakMap;

    function Fd(dd, Od) {
      return Wd.set(dd, Od), dd
    }

    function Rd(dd) {
      var Od;
      return null !== (Od = Wd.get(dd)) && void 0 !== Od ? Od : null
    }
  },
  43152: (dd, Od, md) => {
    function Wd(dd, Od, md) {
      return new Promise((Wd => {
        const Fd = setTimeout((() => {
            Rd(), Wd(null)
          }), md),
          Rd = Od((() => {
            clearTimeout(Fd);
            const Od = dd();
            Wd(null === Od ? null : function(dd) {
              if (0 === dd.width || 0 === dd.height) return null;
              const Od = document.createElement("canvas");
              Od.width = dd.width, Od.height = dd.height;
              const md = Od.getContext("2d");
              return md ? (md.drawImage(dd, 0, 0), Od) : null
            }(Od))
          }))
      }))
    }
    md.d(Od, {
      b: () => Wd
    })
  },
  37713: (dd, Od, md) => {
    md.d(Od, {
      c: () => Rd
    });
    const Wd = 4e5,
      Fd = 2;

    function Rd(dd, Od, md) {
      let [Rd, Xd] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [dd, Od], Kd = Math.min(Number.isFinite(md) && md > 0 ? md : 1, Fd);
      const hd = Math.max(0, Rd, dd) * Math.max(0, Xd, Od) * Kd * Kd;
      return hd > Wd && (Kd *= Math.sqrt(Wd / hd)), [Math.max(1, Math.floor(Math.max(0, dd) * Kd)), Math.max(1, Math.floor(Math.max(0, Od) * Kd))]
    }
  },
  35566: (dd, Od, md) => {
    md.d(Od, {
      d: () => Wd,
      g: () => Qd
    });
    const Wd = .01,
      Fd = .08,
      Rd = .01,
      Xd = 5,
      Kd = 100,
      hd = 40,
      vd = 800;

    function Qd(dd) {
      const {
        canvas: Od
      } = dd;
      let md = null;
      const Qd = dd => {
          var Wd;
          md = {
            pointer: dd.pointerId,
            x: dd.clientX,
            y: dd.clientY
          }, null === (Wd = Od.setPointerCapture) || void 0 === Wd || Wd.call(Od, dd.pointerId)
        },
        td = Od => {
          var Fd;
          const Xd = dd.orbit;
          if ((null === (Fd = md) || void 0 === Fd ? void 0 : Fd.pointer) !== Od.pointerId || null === Xd) return;
          const Kd = Od.clientX - md.x,
            hd = Od.clientY - md.y;
          md = {
            ...md,
            x: Od.clientX,
            y: Od.clientY
          }, dd.setOrbit({
            alpha: Xd.alpha - Kd * Wd,
            beta: Math.min(Math.PI - Rd, Math.max(Rd, Xd.beta - hd * Wd)),
            radius: Xd.radius
          })
        },
        od = dd => {
          var Od;
          (null === (Od = md) || void 0 === Od ? void 0 : Od.pointer) === dd.pointerId && (md = null)
        },
        Nd = Od => {
          const md = dd.orbit;
          if (null === md) return;
          Od.preventDefault();
          const Wd = Od.deltaY * (Od.deltaMode === WheelEvent.DOM_DELTA_LINE ? hd : Od.deltaMode === WheelEvent.DOM_DELTA_PAGE ? vd : 1),
            Rd = Math.min(Kd, Math.max(Xd, md.radius + Wd * Fd));
          dd.setOrbit({
            ...md,
            radius: Rd
          })
        };
      return Od.style.touchAction = "none", Od.addEventListener("pointerdown", Qd), Od.addEventListener("pointermove", td), Od.addEventListener("pointerup", od), Od.addEventListener("pointercancel", od), Od.addEventListener("wheel", Nd, {
        passive: !1
      }), () => {
        Od.removeEventListener("pointerdown", Qd), Od.removeEventListener("pointermove", td), Od.removeEventListener("pointerup", od), Od.removeEventListener("pointercancel", od), Od.removeEventListener("wheel", Nd)
      }
    }
  },
  45347: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      WasmPreviewHost: () => PO,
      pageBuiltInAnimationPack: () => od,
      pagePreviews: () => vO,
      previewModule: () => OO
    });
    var Wd = md(2425),
      Fd = md(708);
    const Rd = "[bloxd-wasm-client]";

    function Xd(dd) {
      const Od = {
        wasm: "unknown",
        client: String(Fd.c)
      };
      try {
        var md;
        Od.wasm = null !== (md = null === dd || void 0 === dd ? void 0 : dd.Zt()) && void 0 !== md ? md : Od.wasm
      } catch {}
      return Od
    }
    async function Kd(dd) {
      if (dd.length < 2 || 31 !== dd[0] || 139 !== dd[1]) return dd;
      if ("undefined" === typeof DecompressionStream) {
        const {
          ungzip: Od
        } = await Promise.resolve().then((() => md(3914)));
        return Od(dd)
      }
      const Od = new Blob([dd]).stream().pipeThrough(new DecompressionStream("gzip"));
      return new Uint8Array(await new Response(Od).arrayBuffer())
    }

    function hd(dd, Od, Wd, Fd) {
      Promise.resolve().then((() => md(42709))).then((md => {
        let {
          reportDataLoadFailure: Rd
        } = md;
        Rd(dd, Od, Wd, Fd)
      }), (Od => {
        console.warn(`${Rd} ${dd} didn't load, and the report couldn't be sent`, Wd.error, Od)
      }))
    }
    const vd = [3e4, 12e4, 3e5];
    class Qd {
      constructor(dd) {
        this.deps = dd, this.loading = null, this.reported = !1, this.retries = 0, this.resolveSet = () => {}, this.set = new Promise((dd => {
          this.resolveSet = dd
        }))
      }
      provide(dd) {
        return this.loading ??= this.load(dd), this.loading
      }
      whenSet() {
        return this.set
      }
      async load(dd) {
        const Od = Xd(dd),
          md = await async function(dd, Od) {
            let md;
            try {
              md = await dd()
            } catch (Wd) {
              return {
                stage: "fetch",
                error: Wd
              }
            }
            try {
              return Od(md) ? null : {
                stage: "decode",
                error: null
              }
            } catch (Wd) {
              return {
                stage: "decode",
                error: Wd
              }
            }
          }((() => this.deps.fetch()), (Od => {
            const md = dd.xFd(Od);
            return md && this.resolveSet(Od), md
          }));
        if (null !== md) {
          if ("fetch" === md.stage) {
            this.loading = null;
            const Od = vd[this.retries++];
            void 0 !== Od && this.deps.later((() => {
              this.provide(dd)
            }), Od)
          }
          this.reported || (this.reported = !0, this.deps.onFailed(md, Od))
        }
      }
    }
    let td = null;

    function od() {
      return td ??= new Qd({
        fetch: async () => Kd(await (0, Wd.J)(Nd(), {
          priority: "low"
        })),
        onFailed: (dd, Od) => {
          hd("builtInAnimations", Nd(), dd, Od)
        },
        later: (dd, Od) => {
          setTimeout(dd, Od)
        }
      }), td
    }

    function Nd() {
      return md(45350)
    }
    var qd = md(2421),
      Hd = md(1253),
      yd = md(382),
      bd = md(373),
      Td = md(732),
      pd = md(5568),
      Yd = md(42658),
      gd = md(42677),
      wd = md(42923),
      Ed = (md(42685), md(37709)),
      Jd = md(42772),
      Ud = md(42779),
      xd = md(42788),
      Bd = md(42663),
      Sd = md(42938),
      sd = md(42946),
      ud = md(42693),
      Vd = md(42811),
      Ad = md(42849),
      rd = md(42807),
      Gd = md(42861),
      nd = md(42929),
      Ld = md(37722),
      Pd = md(37659),
      zd = md(2414),
      cd = md(37713);
    const jd = "[bloxd-previews]",
      Dd = 0,
      ed = 1,
      Id = 2,
      ld = 3,
      Cd = 1,
      Zd = 2,
      kd = 3,
      fd = 0,
      Md = 1,
      dO = 2;

    function OO(dd) {
      const Od = dd,
        md = (0, Yd.S)(dd),
        Wd = (0, Yd.l)(dd);
      return null !== md && null !== Wd && "function" === typeof Od.BFd && "function" === typeof Od.SFd && "function" === typeof Od.sFd && "function" === typeof Od.qV ? Od : null
    }

    function mO() {
      return md(45358)
    }
    async function WO(dd, Od, Wd) {
      var Fd;
      let Rd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      "lost" === dd && (0, ud.w)();
      const Kd = await (0, ud.J)();
      if (null === Kd || (0, Yd.p)(Kd) || (0, ud.b)()) return;
      const hd = "webgpu" === Kd.backend;
      if (!hd && "lost" !== dd) return;
      const vd = hd && (0, bd.k)(Kd.adapter, null !== Wd && void 0 !== Wd ? Wd : null, "lost" === dd, Rd),
        Qd = null !== (Fd = "lost" === dd ? (0, gd.k)((0, qd.P)() ? (0, Yd.S)((0, qd.A)()) : null) : void 0) && void 0 !== Fd ? Fd : Od,
        td = hd ? (0, Yd.$)(dd, void 0, (0, gd.c)(Qd)) : (0, Td.r)() ? null : Td.f;
      if (null === td) {
        (0, ud.r)();
        try {
          await async function(dd, Od, Wd, Fd, Rd) {
            let {
              restoreLost: Kd,
              adapterRemembered: hd
            } = Rd;
            const vd = (0, qd.P)(),
              {
                flushCrashReports: Qd,
                reportRenderReload: td
              } = await Promise.resolve().then((() => md(42709)));
            td(dd.backend, Fd, Xd(vd ? (0, qd.A)() : null), {
              from: "home",
              cause: Od,
              restoreLost: Kd,
              adapterRemembered: hd,
              ...FO(dd, Od, Wd)
            }), await Qd(Ad.e)
          }(Kd, dd, Qd, null !== Wd && void 0 !== Wd ? Wd : "start_failed" === dd ? 0 : 1, {
            restoreLost: Rd,
            adapterRemembered: vd
          })
        } catch (Nd) {
          console.warn(`${jd} ${Kd.backend} failed at home (${dd}), and its report couldn't be sent`, Nd)
        }(0, Ad.k)()
      } else {
        var od;
        const Od = FO(Kd, dd, Qd),
          Wd = `${hd?"WebGPU":"WebGL"} failed at home (${dd}${void 0===Od.error?"":`: ${Od.error instanceof Error?Od.error.message:(0,Pd.h)(Od.error)}`}) and ${td}`;
        console.warn(`${jd} ${Wd}: the previews stop`, null !== (od = Od.error) && void 0 !== od ? od : ""), (0, ud.s)({
          why: Wd,
          webgpu: hd
        });
        try {
          const {
            countRenderLost: Wd
          } = await Promise.resolve().then((() => md(42709)));
          Wd(dd, Od.error, Od.context)
        } catch (Hd) {
          console.warn(`${jd} ${Kd.backend} failed at home (${dd}), and its count couldn't be sent`, Hd)
        }
      }
    }

    function FO(dd, Od, md) {
      let {
        adapter: Wd
      } = dd;
      return {
        error: md,
        context: {
          adapter: Wd,
          boundAtMs: "start_failed" === Od ? null : (0, ud.H)(),
          indirectHangs: (0, ud.z)(),
          restoresSkipped: (0, ud.I)()
        }
      }
    }
    async function RO(dd) {
      if (!(0, qd.P)()) {
        await (null === dd || void 0 === dd ? void 0 : dd("renderer pick", {
          longStep: !0
        }));
        const Od = await (0, ud.J)();
        if (null === Od || (0, Yd.p)(Od)) return null;
        const md = await Od.load();
        if (await (null === dd || void 0 === dd ? void 0 : dd("renderer instantiation", {
            longStep: !0
          })), await (0, Vd.d)(md), !(0, qd.P)()) return null
      }
      return OO((0, qd.A)())
    }
    class XO {
      constructor(dd, Od, md, Wd, Fd, Rd) {
        this.page = dd, this.host = Od, this.id = md, this.canvas = Wd, this.size = Fd, this.models = void 0, this.images = void 0, this.write = void 0, this.outcomes = [], this.closed = !1, this.quiet = 0, this.settled = [];
        const Xd = {
            ...Rd.images,
            glbUrl: dd => {
              var Od;
              return null !== (Od = this.models.drawnUrl(dd)) && void 0 !== Od ? Od : Rd.images.glbUrl(dd)
            }
          },
          Kd = Od => dd.modelFile(Od);
        this.images = new wd.e(Xd, (dd => {
          console.warn(`${jd} image ${dd.key.kind}:${dd.key.index}:${dd.key.word} failed`, dd.error)
        }), {
          fetchFile: Kd,
          fetchImage: Od => dd.imageFile(Od)
        }), dd.startModels(), this.models = new Jd.h(Rd.files, ((Od, md) => dd.buildModel(Od, md)), (dd => {
          console.warn(`${jd} model file ${dd.file} (${dd.url}) failed`, dd.error)
        }), {
          fetchFile: Kd,
          onWritten: (dd, Od) => {
            this.images.glbWritten(dd, Od)
          },
          onTaken: (dd, Od) => {
            this.images.glbTaken(dd, Od)
          }
        }), this.write = (dd, Od, md) => {
          if (this.closed) return !0;
          if (dd === Jd.c) {
            const dd = new DataView(md.buffer, md.byteOffset, xd.d),
              Wd = dd.getUint32(0, !0),
              Fd = dd.getUint32(xd.h, !0),
              Rd = this.page.hostCall(dO, (() => this.host.uFd(this.id, Wd, Od, md.subarray(xd.d))));
            return this.outcomes.push([Fd, Rd]), !0
          }
          return dd === wd.b && (this.page.hostCall(void 0, (() => {
            this.host.VFd(this.id, md)
          })), !0)
        }
      }
      get isClosed() {
        return this.closed
      }
      get isStopped() {
        return this.page.isStopped
      }
      resize(dd, Od, md) {
        if (this.closed) return;
        const [Wd, Fd] = (0, cd.c)(dd, Od, this.page.dpr(), md);
        Wd === this.size[0] && Fd === this.size[1] || (this.size = [Wd, Fd], this.page.hostCall(void 0, (() => {
          this.host.resize(this.id, Wd, Fd)
        })))
      }
      setMob(dd, Od, md, Wd) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.iFd(this.id, dd, Od, md, Wd))))
      }
      setPet(dd, Od, md, Wd) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.AFd(this.id, dd, Od, md, Wd))))
      }
      setPlayer(dd, Od, md) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.rFd(this.id, dd, Od, md))))
      }
      setCompanions(dd) {
        var Od;
        let {
          pet: md,
          aura: Wd
        } = dd;
        if (this.closed) return;
        const Fd = null !== (Od = null === md || void 0 === md ? void 0 : md.model) && void 0 !== Od ? Od : -1,
          Rd = new Float64Array(md ? [md.scale, ...md.offset, md.yawOffset, md.bobAmplitude, md.bobHz] : []),
          Xd = new Float64Array(Wd ? [...Wd.offset, ...Wd.half] : []);
        this.page.hostCall(void 0, (() => {
          var dd, Od;
          this.host.GFd(this.id, Fd, Rd, null !== (dd = null === md || void 0 === md ? void 0 : md.flyClip) && void 0 !== dd ? dd : "", null !== (Od = null === Wd || void 0 === Wd ? void 0 : Wd.opts) && void 0 !== Od ? Od : "", Xd)
        }))
      }
      setNametag(dd, Od, md) {
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.nFd(this.id, dd, Od, md)
        }))
      }
      setFigure(dd, Od, md, Wd) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.LFd(this.id, dd, Od, md, Wd))))
      }
      replay() {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.replay(this.id))))
      }
      get orbit() {
        if (this.closed) return null;
        const dd = this.page.hostCall(null, (() => this.host.orbit(this.id)));
        return null === dd || dd.length < 3 ? null : {
          alpha: dd[0],
          beta: dd[1],
          radius: dd[2]
        }
      }
      setOrbit(dd) {
        let {
          alpha: Od,
          beta: md,
          radius: Wd
        } = dd;
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.PFd(this.id, Od, md, Wd)
        }))
      }
      untilSettled() {
        return this.closed || this.page.isStopped ? Promise.resolve() : (this.quiet = 0, new Promise((dd => {
          this.settled.push(dd)
        })))
      }
      packChanged() {
        this.quiet = 0, this.models.refresh(), (0, Sd.j)(this.images)
      }
      feed() {
        this.models.drain(this.write);
        for (const [dd, Od] of this.outcomes) {
          const md = Od === fd ? [] : [Od === Md ? dd : (dd | Jd.e) >>> 0];
          this.models.taken(dd, md)
        }
        this.outcomes.length = 0, this.images.drain(this.write)
      }
      collect(dd) {
        let Od = !1;
        if (dd) {
          const dd = this.host.zFd(this.id);
          for (const Od of dd) this.models.request(Od);
          const md = this.host.cFd(this.id);
          md.length > 0 && this.images.onEvent(md), Od = dd.length > 0 || md.length > 0
        }
        const md = this.page.modelsUnavailable ? 0 : this.models.asking + this.models.unanswered,
          Wd = Od || md > 0 || this.images.waiting > 0 || this.images.inFlight > 0;
        this.quiet = Wd ? 0 : this.quiet + 1, this.quiet >= 3 && this.resolveSettled()
      }
      close() {
        this.closed || (this.closed = !0, this.page.closePreview(this), this.resolveSettled())
      }
      abandon() {
        this.resolveSettled()
      }
      dispose(dd) {
        this.page.hostCall(void 0, (() => {
          const Od = this.host.close(this.id);
          Od.length > 0 && this.images.onEvent(Od), this.page.isTrapped || dd.sFd(this.id)
        })), this.images.dispose(), this.canvas.remove()
      }
      resolveSettled() {
        const dd = this.settled;
        this.settled = [];
        for (const Od of dd) Od()
      }
    }
    class KO {
      constructor(dd) {
        this.deps = dd, this.module = null, this.host = null, this.opening = null, this.pageCanvas = null, this.samples = 1, this.binding = null, this.sessionEnds = 0, this.lastEndReturned = !0, this.previews = new Map, this.nextId = 1, this.frameId = null, this.stopped = !1, this.loggedErrors = new Set, this.modelsListener = {
          onUnavailable: dd => {
            this.modelsFailed(dd)
          },
          onWorkerLost: dd => {
            this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${jd} a model worker was lost: ${dd}`))
          },
          onModuleRetry: () => {}
        }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.Jq = {
          setShaderPack: (dd, Od, md, Wd, Fd) => (this.shaderPackArgs = [dd, Od, md, Wd, Fd], this.handOverShaderPack(), !0)
        }, this.frame = dd => {
          this.frameId = null;
          const Od = this.host;
          if (null !== Od && 0 !== this.previews.size && !this.settleIfTrapped() && !this.stopped)
            if (this.deps.frameDue(dd)) try {
              this.drawFrame(Od, dd)
            } catch (md) {
              if (!this.stopIfTrapped(md) && (this.stop(), (0, Yd.t)(md))) return void this.deps.onRenderFailed("frames_refused", md);
              console.warn(`${jd} the previews stopped: their frame threw`, md)
            } else this.startFrames()
        }, dd.pack.onChange((() => {
          this.packChanged()
        })), dd.game.onGameChange((() => {
          this.tellInGame()
        }))
      }
      packChanged() {
        if (!this.stopped)
          for (const dd of this.previews.values()) dd.packChanged()
      }
      dpr() {
        return this.deps.dpr()
      }
      get sessionBound() {
        var dd, Od;
        return null !== (dd = null === (Od = this.host) || void 0 === Od ? void 0 : Od.attached()) && void 0 !== dd && dd
      }
      get open() {
        return this.previews.size
      }
      get frameCostMs() {
        return 0 === this.costs.length ? 0 : this.costs.reduce(((dd, Od) => dd + Od), 0) / this.costs.length
      }
      async bindSession(dd, Od, md) {
        const Wd = this.binding,
          Fd = this.sessionEnds;
        try {
          const Rd = this.hostOf(dd);
          if (!Rd.jFd()) {
            const Od = (0, Gd.f)().sampleCount,
              Xd = await md(Od);
            if (this.sessionEnds !== Fd) return this.keepRendererOfEndedSession(dd, Rd, Xd, Od, Wd), Od;
            if (!Rd.DFd(Xd)) throw new Error("the page has a renderer already");
            (0, ud.t)(performance.now()), this.samples = Od, (0, nd.f)((0, Yd.l)(dd))
          }
          if (!Rd.attach(Od)) throw new Error("the page's renderer is lent to another session");
          return this.samples
        } finally {
          this.binding === Wd && this.endBinding()
        }
      }
      keepRendererOfEndedSession(dd, Od, md, Wd, Fd) {
        if (!this.lastEndReturned || null !== this.binding && this.binding !== Fd) try {
          md.free()
        } catch (Rd) {
          console.warn(`${jd} an ended session's renderer didn't free`, Rd)
        } else Od.DFd(md) && ((0, ud.t)(performance.now()), this.samples = Wd, (0, nd.f)(this.registryOf(dd)))
      }
      async beginSession() {
        var dd;
        let Od = () => {};
        const md = new Promise((dd => {
          Od = dd
        }));
        this.binding = {
          done: md,
          release: Od
        }, await (null === (dd = this.opening) || void 0 === dd ? void 0 : dd.catch((() => null)));
        const Wd = this.pageCanvas;
        return this.pageCanvas = null, Wd
      }
      endSession(dd) {
        var Od, md;
        if (this.sessionEnds++, this.lastEndReturned = dd, this.endBinding(), dd) {
          try {
            var Wd;
            null === (Wd = this.host) || void 0 === Wd || Wd.detach()
          } catch (Fd) {
            return void console.warn(`${jd} the session's core kept the page's renderer`, Fd)
          }!0 === (null === (Od = this.host) || void 0 === Od ? void 0 : Od.attached()) && console.warn(`${jd} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (md = this.host) || void 0 === md ? void 0 : md.jFd()) && (0, nd.f)(this.registryOf(this.module))
        }
      }
      endBinding() {
        var dd;
        null === (dd = this.binding) || void 0 === dd || dd.release(), this.binding = null
      }
      async openPreview(dd, Od, md, Wd) {
        const Fd = await this.renderingHost(),
          Rd = this.module;
        if (null === Fd || null === Rd) throw new Error("this page can't draw previews: it has no renderer build");
        if (this.animations ??= this.loadAnimations(Fd), this.deps.pack.wanted(), this.isStopped) throw new Error("the previews stopped");
        this.guarded((() => {
          this.deps.provideBuiltInAnimationPack(Rd)
        }));
        const Xd = this.nextId++,
          Kd = this.deps.createCanvas(),
          [hd, vd] = (0, cd.c)(Od, md, this.deps.dpr(), Wd);
        Kd.width = hd, Kd.height = vd;
        if (!this.guarded((() => (Rd.SFd(Xd, Kd), Fd.open(Xd, hd, vd, dd))))) throw this.hostCall(void 0, (() => {
          Rd.sFd(Xd)
        })), new Error("the page's renderer is lent to a session that is running");
        this.restartModelsIfFailed();
        const Qd = new XO(this, Fd, Xd, Kd, [hd, vd], this.deps);
        return this.previews.set(Xd, Qd), this.startFrames(), Qd
      }
      prefetch(dd) {
        if (this.prefetched || !this.mayPrefetch) return;
        this.prefetched = !0;
        (null === this.module ? this.loadModule(dd) : Promise.resolve(this.module)).then((async Od => {
          null !== Od && (await (null === dd || void 0 === dd ? void 0 : dd("preview workers and files")), this.mayPrefetch && (this.startModels(), this.fetchAnimationTable().catch((() => {})), this.prefetchPlayerFiles()))
        }), (() => {}))
      }
      modelFile(dd) {
        return this.prefetchedOr(dd, this.deps.fetchModel)
      }
      imageFile(dd) {
        return this.prefetchedOr(dd, Wd.J)
      }
      prefetchedOr(dd, Od) {
        const md = this.prefetchedFiles.get(dd);
        return void 0 === md ? Od(dd) : md.catch((() => Od(dd)))
      }
      async prefetchPlayerFiles() {
        const dd = this.deps.playerFile().then((dd => this.deps.files.url(dd))),
          Od = await Promise.all([dd, this.deps.images.lifeformAtlasUrl(Sd.e)]).catch((() => null));
        if (null === Od) return;
        const [md, Wd] = Od, Fd = (dd, Od) => {
          if (null === dd) return;
          const md = Od(dd);
          this.prefetchedFiles.set(dd, md), md.catch((() => {
            this.prefetchedFiles.delete(dd)
          }))
        };
        Fd(md, (dd => this.modelFile(dd))), Fd(Wd, (dd => this.imageFile(dd)))
      }
      loadModule(dd) {
        return this.moduleLoad ??= this.deps.loadModule(dd).then((dd => (null === dd && (this.moduleLoad = null), dd)), (dd => {
          throw this.moduleLoad = null, dd
        })), this.moduleLoad
      }
      fetchAnimationTable() {
        return this.animationTable ??= this.deps.fetchAnimations().catch((dd => {
          throw this.animationTable = null, dd
        })), this.animationTable
      }
      get modelsUnavailable() {
        return this.unavailable
      }
      startModels() {
        this.models ??= this.deps.startModels(this.modelsListener).catch((dd => (this.modelsFailed(dd), () => new Promise((() => {})))))
      }
      buildModel(dd, Od) {
        return this.startModels(), this.models.then((md => md(dd, Od))).then((dd => this.unavailable ? new Promise((() => {})) : dd))
      }
      restartModelsIfFailed() {
        this.unavailable && !this.modelsRestarted && 0 === this.previews.size && (this.modelsRestarted = !0, this.models = null, this.unavailable = !1, this.startModels())
      }
      modelsFailed(dd) {
        this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${jd} the model workers didn't start: models won't draw in the previews`, dd))
      }
      called(dd) {
        return 0 !== dd && this.logError(dd, 0), dd
      }
      closePreview(dd) {
        this.previews.delete(dd.id), null !== this.module && dd.dispose(this.module), 0 === this.previews.size && null !== this.frameId && (this.deps.cancelFrame(this.frameId), this.frameId = null)
      }
      hostOf(dd) {
        if (null !== this.module && this.module !== dd) throw new Error("a second renderer module on one page");
        return this.module = dd, null === this.host && (this.host = this.guarded((() => new dd.BFd)), this.tellInGame(), this.handOverShaderPack()), this.host
      }
      tellInGame() {
        const {
          host: dd
        } = this;
        null !== dd && this.outsideCall("the game's start or end", (() => {
          dd.eFd(this.deps.game.inGame())
        }))
      }
      handOverShaderPack() {
        const {
          host: dd,
          shaderPackArgs: Od
        } = this;
        null !== dd && null !== Od && this.outsideCall("the shader pack's hand-over", (() => {
          dd.UFd(...Od) || console.warn(`${jd} the host refused the shader pack: previews draw without it at home`)
        }))
      }
      outsideCall(dd, Od) {
        try {
          this.hostCall(void 0, Od)
        } catch (md) {
          this.stop(), console.warn(`${jd} the previews stopped: ${dd} threw`, md)
        }
      }
      async loadAnimations(dd) {
        const Od = Xd(null),
          md = this.module;
        try {
          Od.wasm = null === md ? Od.wasm : this.hostCall(Od.wasm, (() => md.Zt()))
        } catch {}
        let Wd, Fd;
        try {
          Wd = await this.fetchAnimationTable()
        } catch (Rd) {
          return void this.deps.onAnimationsFailed({
            stage: "fetch",
            error: Rd
          }, Od)
        }
        if (!this.settleIfTrapped()) {
          try {
            Fd = dd.IFd(Wd)
          } catch (Rd) {
            if (this.stopIfTrapped(Rd)) return;
            return void this.deps.onAnimationsFailed({
              stage: "decode",
              error: Rd
            }, Od)
          }
          Fd || this.deps.onAnimationsFailed({
            stage: "decode",
            error: null
          }, Od)
        }
      }
      async renderingHost() {
        if (null !== this.binding && await this.binding.done, this.settleIfTrapped()) return null;
        const dd = this.host;
        return null !== dd && this.guarded((() => dd.jFd())) ? dd : (this.opening ??= this.openAtHome().finally((() => {
          this.opening = null
        })), this.opening)
      }
      async openAtHome() {
        var dd;
        const Od = null !== (dd = this.module) && void 0 !== dd ? dd : await this.loadModule();
        if (null === Od) return null;
        const md = this.hostOf(Od),
          Wd = () => this.guarded((() => md.jFd()));
        if (Wd()) return md;
        if (null !== (0, ud.G)() || (0, ud.b)()) return null;
        const Fd = this.deps.createCanvas();
        Fd.width = 1, Fd.height = 1;
        const Rd = await this.deps.openExtras();
        if (this.settleIfTrapped()) return null;
        const Xd = (0, Gd.f)().sampleCount;
        let Kd;
        try {
          Kd = await (0, Yd.z)(Od, "previewRenderer", Fd, Xd, Ld.g, Rd)
        } catch (hd) {
          throw hd instanceof Bd.e ? this.stopForTrap(hd) : (0, Yd.w)(hd) && await this.deps.onRenderFailed("start_failed", hd), hd
        }
        return this.guarded((() => md.DFd(Kd))) ? ((0, ud.t)(performance.now()), this.samples = Xd, this.pageCanvas = Fd, (0, nd.f)(this.registryOf(Od)), md) : Wd() ? md : null
      }
      startFrames() {
        null !== this.frameId || this.isStopped || (this.frameId = this.deps.requestFrame(this.frame))
      }
      drawFrame(dd, Od) {
        for (const Xd of this.previews.values()) Xd.feed();
        if (this.stopped) return;
        this.module.qV(this.deps.heldLow());
        const md = this.deps.now(),
          Wd = dd.frame(Od);
        this.costs.push(this.deps.now() - md), this.costs.length > 120 && this.costs.shift();
        const Fd = 0 !== (256 & Wd),
          Rd = 255 & Wd;
        for (const Xd of this.previews.values()) {
          if (this.stopped) return;
          Xd.collect(Fd)
        }
        if (!this.stopped) {
          if (0 !== (512 & Wd) && this.deps.onDrew(), Fd) {
            const Od = dd.lFd();
            for (let dd = 0; dd + 1 < Od.length; dd += 2) Od[dd] === pd.F.RenderDeviceLost && this.deps.onDeviceLost(), this.logError(Od[dd], Od[dd + 1])
          }
          if (Rd !== Cd) {
            if (Rd === Zd) return this.stop(), void this.deps.onFatal(dd.ZFd(), dd.kFd());
            if (Rd === kd) return this.stop(), void console.warn(`${jd} the previews stopped: the page's renderer went with its session`);
            (0, yd.e)(Od), this.startFrames()
          } else {
            const Od = dd.CFd();
            this.stop();
            const md = Od[2] === pd._c.PIPELINE_FAILED ? "pipeline_failed" : "lost";
            this.deps.onRenderFailed(md, void 0, Od[1], Od[2] === pd._c.RESTORE_LOST)
          }
        }
      }
      get isStopped() {
        return this.stopped || this.isTrapped
      }
      get mayPrefetch() {
        return !this.isStopped && !(0, ud.b)() && null === (0, ud.G)()
      }
      get isTrapped() {
        return null !== this.module && ((0, Bd.h)(this.module) || "failed" === (0, qd.y)())
      }
      hostCall(dd, Od) {
        if (this.settleIfTrapped()) return dd;
        try {
          return Od()
        } catch (md) {
          if (this.stopIfTrapped(md)) return dd;
          throw md
        }
      }
      guarded(dd) {
        if (this.settleIfTrapped()) throw new Error("the previews stopped: their module trapped");
        try {
          return dd()
        } catch (Od) {
          throw this.stopIfTrapped(Od), Od
        }
      }
      registryOf(dd) {
        return {
          fFd: (Od, md) => {
            this.hostCall(void 0, (() => {
              dd.fFd(Od, md)
            }))
          },
          MFd: Od => {
            this.hostCall(void 0, (() => {
              dd.MFd(Od)
            }))
          },
          ...void 0 === dd.dRd ? {} : {
            dRd: (Od, md) => {
              this.hostCall(void 0, (() => {
                var Wd;
                null === (Wd = dd.dRd) || void 0 === Wd || Wd.call(dd, Od, md)
              }))
            }
          },
          ...void 0 === dd.ORd ? {} : {
            ORd: Od => {
              this.hostCall(void 0, (() => {
                var md;
                null === (md = dd.ORd) || void 0 === md || md.call(dd, Od)
              }))
            }
          }
        }
      }
      settleIfTrapped() {
        return !!this.isTrapped && (this.stopped || (this.stop(), (0, nd.f)(null)), !0)
      }
      stopIfTrapped(dd) {
        return !(null === this.module || !(0, Bd.k)(this.module, dd)) && (this.stopForTrap(dd), !0)
      }
      stopForTrap(dd) {
        this.stop(), (0, nd.f)(null), (0, zd.e)("previews", dd)
      }
      stop() {
        this.stopped = !0;
        for (const dd of this.previews.values()) dd.abandon()
      }
      logError(dd, Od) {
        const md = `${dd}:${Od}`;
        this.loggedErrors.has(md) || (this.loggedErrors.add(md), console.warn(`${jd} error ${dd} (detail ${Od})`))
      }
    }
    let hO = null;

    function vO() {
      return hO ??= new KO(function() {
        const dd = (0, Ud.o)(Hd.clientSideServerUrls.staticUrl, {
          packUrl: dd => {
            var Od, md;
            return null !== (Od = null === (md = Sd.g.current) || void 0 === md ? void 0 : md.modelUrl(dd)) && void 0 !== Od ? Od : null
          }
        });
        return {
          loadModule: RO,
          startModels: async dd => {
            const {
              pageModelPool: Od
            } = await md.e(51).then((() => md(55136))), {
              pool: Wd
            } = Od(dd);
            return (dd, Od) => Wd.build(dd, Od)
          },
          fetchAnimations: async () => Kd(await (0, Wd.J)(mO())),
          playerFile: async () => (await (0, Ud.n)()).PLAYER_FILE,
          onAnimationsFailed: (dd, Od) => {
            hd("previewAnimations", mO(), dd, Od)
          },
          provideBuiltInAnimationPack: dd => {
            od().provide(dd)
          },
          openExtras: ud.C,
          files: dd,
          images: (0, Sd.l)((0, wd.n)(dd.url), (() => Sd.g.current)),
          pack: Sd.g,
          game: sd.e,
          fetchModel: dd => (0, Ud.i)(dd),
          createCanvas: () => document.createElement("canvas"),
          dpr: () => window.devicePixelRatio,
          now: () => performance.now(),
          requestFrame: dd => requestAnimationFrame(dd),
          cancelFrame: dd => {
            cancelAnimationFrame(dd)
          },
          onRenderFailed: WO,
          onFatal: (dd, Od) => {
            console.error(`${jd} the previews stopped: renderer error ${dd} (detail ${Od})`)
          },
          onDeviceLost: () => {
            (0, ud.E)() === rd.e.webgpu && ((0, gd.g)((0, qd.P)() ? (0, Yd.S)((0, qd.A)()) : null), bd.H.lost())
          },
          onDrew: () => {
            bd.H.drew(), (0, Ed.l)()
          },
          frameDue: Ed.r,
          heldLow: Ed.p
        }
      }()), hO
    }
    var QO = md(693),
      tO = md(40230),
      oO = md(4509);
    const NO = {
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
    var qO = md(40756),
      HO = md(40721),
      yO = md(45365);
    class bO {
      constructor() {
        this.pet = null, this.aura = null, this.companions = {
          pet: null,
          aura: null
        }
      }
      of(dd, Od) {
        const md = void 0 === dd ? null : (0, HO.j)(dd),
          Wd = void 0 === Od ? null : (0, HO.i)(Od);
        return md === this.pet && Wd === this.aura || (this.pet = md, this.aura = Wd, this.companions = {
          pet: md && TO(md),
          aura: Wd && pO(Wd)
        }), this.companions
      }
    }

    function TO(dd) {
      var Od;
      const md = yO.COSMETIC_MODEL_KEYS.get(dd.model);
      if (void 0 === md) return console.warn(`[bloxd-previews] pet model ${dd.model} isn't a Player attachment model`), null;
      const {
        scale: Wd,
        followOffset: Fd,
        yawOffset: Rd,
        bobAmplitude: Xd,
        bobHz: Kd,
        clips: hd
      } = dd;
      return {
        model: md,
        scale: Wd,
        offset: Fd,
        yawOffset: Rd,
        bobAmplitude: Xd,
        bobHz: Kd,
        flyClip: null !== (Od = null === hd || void 0 === hd ? void 0 : hd.fly) && void 0 !== Od ? Od : null
      }
    }

    function pO(dd) {
      const {
        opts: Od,
        half: md
      } = (0, qO.d)(dd);
      return {
        opts: JSON.stringify(Od),
        offset: dd.offset,
        half: md
      }
    }
    var YO = md(35566),
      gO = md(37829),
      wO = md(43152);
    const aO = "[bloxd-previews]",
      EO = new Uint32Array(5);

    function JO(dd) {
      return QO.h.indexOf(dd)
    }
    const UO = new WeakSet;

    function xO(dd) {
      const Od = (0, tO.h)(dd),
        md = null === Od ? -1 : BO(Od);
      return -1 !== md ? md : (UO.has(dd) || (UO.add(dd), console.warn(`${aO} an animation the previews' table lacks: the mob idles instead`)), -1)
    }

    function BO(dd) {
      var Od;
      return null !== (Od = NO[dd]) && void 0 !== Od ? Od : -1
    }

    function SO(dd, Od) {
      const {
        canvas: md
      } = Od;
      md.style.width = "100%", md.style.height = "100%", md.style.display = "block", dd.appendChild(md)
    }

    function sO(dd) {
      const Od = dd.getBoundingClientRect();
      return [Od.width, Od.height]
    }
    class uO {
      constructor(dd, Od) {
        this.preview = dd, this.showView = Od
      }
      show(dd) {
        this.showView(this.preview, dd)
      }
      resize(dd, Od) {
        this.preview.resize(dd, Od)
      }
      close() {
        this.preview.close()
      }
    }
    class VO {
      constructor(dd) {
        this.preview = dd, this.ready = void 0, this.dev = void 0, this.built = !1, this.cosmetics = {}, this.emote = null, this.tunings = new bO, this.companions = null, this.nametag = null, this.stopRasteringNametag = null, this.detachControls = void 0, this.detachControls = (0, YO.g)(dd), this.dev = {
          canvas: () => dd.canvas,
          captureFrame: Od => (0, wO.b)((() => dd.isClosed ? null : dd.canvas), Ed.c, Od),
          isolateHead: () => {
            console.warn(`${aO} isolateHead: noa's character preview only`)
          },
          isolatePet: () => {
            console.warn(`${aO} isolatePet: noa's character preview only`)
          }
        }, this.apply(), this.ready = dd.untilSettled().then((() => {
          if (dd.isStopped) throw new Error(`${aO} the previews stopped before the character drew`);
          this.built = !0
        }))
      }
      isReady() {
        return this.built && !this.preview.isClosed
      }
      setCosmetic(dd, Od) {
        this.cosmetics[dd] = Od, this.apply()
      }
      setNametag(dd) {
        var Od;
        if (this.nametag = dd, null === (Od = this.stopRasteringNametag) || void 0 === Od || Od.call(this), this.stopRasteringNametag = null, null === dd || void 0 === dd || !dd.name) return void this.preview.setNametag("", "null", "null");
        const md = () => {
          this.preview.setNametag(dd.name, JSON.stringify(dd.nameColour), JSON.stringify(dd.ranks))
        };
        gO.j.untilLoadedFor(dd.name).then((() => {
          this.nametag !== dd || this.preview.isClosed || (md(), this.stopRasteringNametag = (0, gO.i)(md))
        }))
      }
      playEmote(dd) {
        null === dd || dd !== this.emote ? (this.emote = dd, this.apply()) : this.preview.replay()
      }
      untilDrawn(dd) {
        return this.preview.untilSettled()
      }
      setOrbit(dd) {
        let {
          yaw: Od,
          pitch: md,
          radius: Wd
        } = dd;
        const Fd = this.preview.orbit;
        null !== Fd && this.preview.setOrbit({
          alpha: Od,
          beta: md,
          radius: null !== Wd && void 0 !== Wd ? Wd : Fd.radius
        })
      }
      resetCamera() {}
      resize(dd, Od) {
        this.preview.resize(dd, Od)
      }
      close() {
        var dd;
        null === (dd = this.stopRasteringNametag) || void 0 === dd || dd.call(this), this.detachControls(), this.preview.close()
      }
      apply() {
        var dd;
        this.preview.setPlayer(JSON.stringify(this.cosmetics), EO, null === (dd = this.emote) ? -1 : BO(dd));
        const Od = this.tunings.of(this.cosmetics.pet, this.cosmetics.aura);
        Od !== this.companions && (this.companions = Od, this.preview.setCompanions(Od))
      }
    }

    function iO(dd, Od) {
      let {
        mobType: md,
        variation: Wd,
        animation: Fd
      } = Od;
      dd.setMob(JO(md), null !== Wd && void 0 !== Wd ? Wd : "", 1, xO(Fd))
    }

    function AO(dd, Od) {
      let {
        mobType: md,
        variation: Wd,
        metaInfo: Fd,
        tamed: Rd
      } = Od;
      dd.setPet(JO(md), Wd, Fd, Rd)
    }
    const rO = {
      aimed: .533 / 1.15 * 1.1,
      ready: .16 / .85 * 1.1
    };
    class GO {
      constructor(dd, Od, md, Wd) {
        this.preview = null, this.closed = !1, this.figure = null, this.shown = !1, this.order = "", this.span = {
          left: 0,
          width: 0
        }, this.lineup = [0, 0], this.given = null, this.loaded = !1, dd(md.width, Wd[1], Wd).then((dd => {
          if (this.closed) return void dd.close();
          const {
            style: md
          } = dd.canvas;
          md.position = "absolute", md.top = "0", md.visibility = "hidden", SO(Od, dd), this.preview = dd, this.apply()
        })).catch((dd => {
          console.error(`${aO} couldn't open a lineup figure`, dd)
        }))
      }
      update(dd, Od, md, Wd, Fd) {
        this.figure = dd, this.shown = Od, this.order = md, this.span = Wd, this.lineup = Fd, this.apply()
      }
      close() {
        var dd;
        this.closed = !0, null === (dd = this.preview) || void 0 === dd || dd.close(), this.preview = null
      }
      apply() {
        var dd;
        const {
          preview: Od,
          figure: md,
          lineup: Wd
        } = this;
        if (null === Od || null === md) return;
        if (this.given !== md) {
          var Fd;
          this.given = md, this.loaded = !1;
          const dd = null === md.WE ? 0 : null !== (Fd = (0, oO.d)(md.WE)) && void 0 !== Fd ? Fd : 0;
          Od.setFigure(function(dd) {
            return JSON.stringify(Object.fromEntries(dd.cosmetics))
          }(md), dd, xO(md.animation), md.size), Od.untilSettled().then((() => {
            this.given === md && (this.loaded = !0, this.apply())
          }))
        }
        const {
          left: Rd,
          width: Xd
        } = this.span;
        Od.resize(Xd, Wd[1], Wd);
        const {
          style: Kd
        } = Od.canvas;
        Kd.top = -(null !== (dd = md.lift) && void 0 !== dd ? dd : 0) * Wd[1] + "px", Kd.left = `${Rd}px`, Kd.width = `${Xd}px`, Kd.zIndex = this.order, Kd.visibility = this.shown && this.loaded ? "visible" : "hidden"
      }
    }
    class nO {
      constructor(dd, Od) {
        this.open = Od, this.layer = void 0, this.figures = [], this.view = {
          figures: [],
          shown: []
        }, this.size = void 0, this.size = sO(dd), this.layer = document.createElement("div");
        const {
          style: md
        } = this.layer;
        md.position = "relative", md.isolation = "isolate", md.overflow = "hidden", md.width = "100%", md.height = "100%", md.pointerEvents = "none", dd.appendChild(this.layer)
      }
      show(dd) {
        this.view = dd, this.place()
      }
      resize(dd, Od) {
        this.size = [dd, Od], this.place()
      }
      close() {
        for (const dd of this.figures) dd.close();
        this.figures = [], this.layer.remove()
      }
      place() {
        const {
          figures: dd,
          shown: Od
        } = this.view;
        for (const Wd of this.figures.splice(dd.length)) Wd.close();
        const {
          size: md
        } = this;
        dd.forEach(((Wd, Fd) => {
          var Rd;
          const Xd = function(dd, Od, md, Wd) {
            let [Fd, Rd] = Wd;
            const Xd = (dd + .5) * Fd / Od,
              Kd = Math.min(Math.max(Fd / Od, 2 * md * Rd), 2 * Math.max(Xd, Fd - Xd));
            return {
              left: Xd - Kd / 2,
              width: Kd
            }
          }(Fd, dd.length, function(dd) {
            let {
              animation: Od,
              size: md
            } = dd;
            const {
              aimed: Wd,
              ready: Fd
            } = rO;
            return (xO(Od) === NO.gunAimed ? Wd : Fd) * md
          }(Wd), md);
          this.figures[Fd] ??= new GO(this.open, this.layer, Xd, md), this.figures[Fd].update(Wd, null !== (Rd = Od[Fd]) && void 0 !== Rd && Rd, function(dd, Od) {
            return String(Math.round(1e3 * dd) + Od)
          }(Wd.size, Fd), Xd, md)
        }))
      }
    }
    const LO = {
      player: ed,
      store: Id,
      showcase: ld
    };
    class PO {
      constructor(dd) {
        this.page = dd
      }
      async openMob(dd) {
        return new uO(await this.open(dd, Dd), iO)
      }
      async openPet(dd) {
        return new uO(await this.open(dd, Dd), AO)
      }
      openMobLineup(dd) {
        return new nO(dd, ((dd, Od, md) => this.page.openPreview(Dd, dd, Od, md)))
      }
      async openCharacter(dd, Od) {
        return new VO(await this.open(dd, LO[Od]))
      }
      async open(dd, Od) {
        const [md, Wd] = sO(dd), Fd = await this.page.openPreview(Od, md, Wd);
        return SO(dd, Fd), Fd
      }
    }
  },
  45350: (dd, Od, md) => {
    dd.exports = md.p + "static/media/builtInAnimations.anim.1876a593a8239b631bf1.gz"
  },
  45358: (dd, Od, md) => {
    dd.exports = md.p + "static/media/previewAnimations.dat.a9c06de838594e8096c6.gz"
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);