export const id = 49;
export const ids = [49];
export const modules = {
  37145: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Ic,
      f: () => rB
    });
    const Vc = new WeakMap;

    function Ic(cB, Bc) {
      return Vc.set(cB, Bc), cB
    }

    function rB(cB) {
      var Bc;
      return null !== (Bc = Vc.get(cB)) && void 0 !== Bc ? Bc : null
    }
  },
  41193: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      WasmPreviewHost: () => UB,
      pageBuiltInAnimationPack: () => Tc,
      pagePreviews: () => dc,
      previewModule: () => Hc
    });
    var Vc = nc(2876),
      Ic = nc(283);
    const rB = "[bloxd-wasm-client]";

    function uc(cB) {
      const Bc = {
        wasm: "unknown",
        client: String(Ic.c)
      };
      try {
        var nc;
        Bc.wasm = null !== (nc = null === cB || void 0 === cB ? void 0 : cB.Uc()) && void 0 !== nc ? nc : Bc.wasm
      } catch {}
      return Bc
    }
    async function sc(cB) {
      if (cB.length < 2 || 31 !== cB[0] || 139 !== cB[1]) return cB;
      if ("undefined" === typeof DecompressionStream) {
        const {
          ungzip: Bc
        } = await nc.e(203).then((() => nc(35571)));
        return Bc(cB)
      }
      const Bc = new Blob([cB]).stream().pipeThrough(new DecompressionStream("gzip"));
      return new Uint8Array(await new Response(Bc).arrayBuffer())
    }

    function Mc(cB, Bc, Vc, Ic) {
      Promise.resolve().then((() => nc(38900))).then((nc => {
        let {
          reportDataLoadFailure: rB
        } = nc;
        rB(cB, Bc, Vc, Ic)
      }), (Bc => {
        console.warn(`${rB} ${cB} didn't load, and the report couldn't be sent`, Vc.error, Bc)
      }))
    }
    const Pc = [3e4, 12e4, 3e5];
    class qB {
      constructor(cB) {
        this.deps = cB, this.loading = null, this.reported = !1, this.retries = 0, this.resolveSet = () => {}, this.set = new Promise((cB => {
          this.resolveSet = cB
        }))
      }
      provide(cB) {
        return this.loading ??= this.load(cB), this.loading
      }
      whenSet() {
        return this.set
      }
      async load(cB) {
        const Bc = uc(cB),
          nc = await async function(cB, Bc) {
            let nc;
            try {
              nc = await cB()
            } catch (Vc) {
              return {
                stage: "fetch",
                error: Vc
              }
            }
            try {
              return Bc(nc) ? null : {
                stage: "decode",
                error: null
              }
            } catch (Vc) {
              return {
                stage: "decode",
                error: Vc
              }
            }
          }((() => this.deps.fetch()), (Bc => {
            const nc = cB.xTc(Bc);
            return nc && this.resolveSet(Bc), nc
          }));
        if (null !== nc) {
          if ("fetch" === nc.stage) {
            this.loading = null;
            const Bc = Pc[this.retries++];
            void 0 !== Bc && this.deps.later((() => {
              this.provide(cB)
            }), Bc)
          }
          this.reported || (this.reported = !0, this.deps.onFailed(nc, Bc))
        }
      }
    }
    let Oc = null;

    function Tc() {
      return Oc ??= new qB({
        fetch: async () => sc(await (0, Vc.x)(fc(), {
          priority: "low"
        })),
        onFailed: (cB, Bc) => {
          Mc("builtInAnimations", fc(), cB, Bc)
        },
        later: (cB, Bc) => {
          setTimeout(cB, Bc)
        }
      }), Oc
    }

    function fc() {
      return nc(41198)
    }
    var mB = nc(2870),
      ec = nc(35045),
      tB = nc(38780),
      Sc = nc(1062),
      yB = nc(38798),
      zB = nc(38995),
      pc = nc(38923),
      hc = nc(38931),
      aB = nc(38935),
      lc = nc(38810),
      Yc = nc(39010),
      Lc = nc(38820),
      gB = nc(38880),
      Uc = nc(38970),
      bB = nc(39004),
      Zc = nc(40535),
      Qc = nc(38814);
    const Cc = "[bloxd-previews]",
      vB = 4e5,
      Dc = 0,
      Nc = 1,
      Ec = 1,
      oc = 2,
      Wc = 3,
      wc = 0,
      kB = 1,
      Xc = 2;

    function Hc(cB) {
      const Bc = cB,
        nc = (0, yB.N)(cB),
        Vc = (0, yB.r)(cB);
      return null !== nc && null !== Vc && "function" === typeof Bc.ROc && "function" === typeof Bc.iTc && "function" === typeof Bc.KOc ? Bc : null
    }

    function Fc(cB, Bc, nc) {
      const Vc = Math.min(Number.isFinite(nc) && nc > 0 ? nc : 1, 2);
      let Ic = Math.max(0, cB) * Vc,
        rB = Math.max(0, Bc) * Vc;
      if (Ic * rB > vB) {
        const cB = Math.sqrt(vB / (Ic * rB));
        Ic *= cB, rB *= cB
      }
      return [Math.max(1, Math.floor(Ic)), Math.max(1, Math.floor(rB))]
    }

    function Jc() {
      return nc(41203)
    }
    async function jB(cB, Bc) {
      const Vc = await (0, Lc.A)();
      if (null === Vc || (0, yB.v)(Vc) || "webgpu" !== Vc.backend || (0, Lc.b)()) return;
      const Ic = (0, yB.O)();
      if (null !== Ic) {
        const nc = `WebGPU failed at home (${cB}${void 0===Bc?"":`: ${Bc instanceof Error?Bc.message:(0,Qc.e)(Bc)}`}) and ${Ic}`;
        return console.warn(`${Cc} ${nc}: the previews stop`, null !== Bc && void 0 !== Bc ? Bc : ""), void(0, Lc.r)(nc)
      }(0, Lc.n)();
      try {
        await async function(cB, Bc, Vc) {
          var Ic;
          const rB = (0, mB.P)(),
            {
              flushCrashReports: sc,
              reportRenderReload: Mc
            } = await Promise.resolve().then((() => nc(38900)));
          Mc("webgpu", "start_failed" === cB ? 0 : 1, uc(rB ? (0, mB.G)() : null), {
            cause: cB,
            error: "lost" === cB && null !== (Ic = (0, yB.T)(rB ? (0, yB.N)((0, mB.G)()) : null)) && void 0 !== Ic ? Ic : Bc,
            context: {
              adapter: Vc,
              boundAtMs: "start_failed" === cB ? null : (0, Lc.z)()
            }
          }), await sc(gB.e)
        }(cB, Bc, Vc.adapter)
      } catch (rB) {
        console.warn(`${Cc} WebGPU failed at home (${cB}), and its report couldn't be sent`, rB)
      }(0, gB.m)()
    }
    async function Rc() {
      if (!(0, mB.P)()) {
        const cB = await (0, Lc.A)();
        if (null === cB || (0, yB.v)(cB)) return null;
        if (await (0, ec.h)(await cB.load(), tB.f), !(0, mB.P)()) return null
      }
      return Hc((0, mB.G)())
    }
    class iB {
      constructor(cB, Bc, nc, Vc, Ic, rB) {
        this.page = cB, this.host = Bc, this.id = nc, this.canvas = Vc, this.size = Ic, this.models = void 0, this.images = void 0, this.write = void 0, this.outcomes = [], this.closed = !1, this.quiet = 0, this.settled = [];
        const uc = {
            ...rB.images,
            glbUrl: cB => {
              var Bc;
              return null !== (Bc = this.models.drawnUrl(cB)) && void 0 !== Bc ? Bc : rB.images.glbUrl(cB)
            }
          },
          sc = Bc => cB.modelFile(Bc);
        this.images = new zB.f(uc, (cB => {
          console.warn(`${Cc} image ${cB.key.kind}:${cB.key.index}:${cB.key.word} failed`, cB.error)
        }), {
          fetchFile: sc,
          fetchImage: Bc => cB.imageFile(Bc)
        }), cB.startModels(), this.models = new pc.f(rB.files, ((Bc, nc) => cB.buildModel(Bc, nc)), (cB => {
          console.warn(`${Cc} model file ${cB.file} (${cB.url}) failed`, cB.error)
        }), {
          fetchFile: sc,
          onWritten: (cB, Bc) => {
            this.images.glbWritten(cB, Bc)
          },
          onTaken: (cB, Bc) => {
            this.images.glbTaken(cB, Bc)
          }
        }), this.write = (cB, Bc, nc) => {
          if (this.closed) return !0;
          if (cB === pc.c) {
            const cB = new DataView(nc.buffer, nc.byteOffset, aB.e),
              Vc = cB.getUint32(0, !0),
              Ic = cB.getUint32(aB.h, !0),
              rB = this.page.hostCall(Xc, (() => this.host.ATc(this.id, Vc, Bc, nc.subarray(aB.e))));
            return this.outcomes.push([Ic, rB]), !0
          }
          return cB === zB.b && (this.page.hostCall(void 0, (() => {
            this.host.cmc(this.id, nc)
          })), !0)
        }
      }
      get isClosed() {
        return this.closed
      }
      resize(cB, Bc) {
        if (this.closed) return;
        const [nc, Vc] = Fc(cB, Bc, this.page.dpr());
        nc === this.size[0] && Vc === this.size[1] || (this.size = [nc, Vc], this.page.hostCall(void 0, (() => {
          this.host.resize(this.id, nc, Vc)
        })))
      }
      setMob(cB, Bc, nc, Vc, Ic) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.rmc(this.id, cB, Bc, nc, Vc, Ic))))
      }
      setPlayer(cB, Bc, nc) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.Vfc(this.id, cB, Bc, nc))))
      }
      setFigure(cB, Bc, nc) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.Ifc(this.id, cB, Bc, nc))))
      }
      setPlacement(cB) {
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.sfc(this.id, Float64Array.from(cB))
        }))
      }
      replay() {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.replay(this.id))))
      }
      get orbit() {
        if (this.closed) return null;
        const cB = this.page.hostCall(null, (() => this.host.orbit(this.id)));
        return null === cB || cB.length < 3 ? null : {
          alpha: cB[0],
          beta: cB[1],
          radius: cB[2]
        }
      }
      setOrbit(cB) {
        let {
          alpha: Bc,
          beta: nc,
          radius: Vc
        } = cB;
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.ufc(this.id, Bc, nc, Vc)
        }))
      }
      untilSettled() {
        return this.closed || this.page.isStopped ? Promise.resolve() : (this.quiet = 0, new Promise((cB => {
          this.settled.push(cB)
        })))
      }
      packChanged() {
        this.quiet = 0, this.models.refresh(), (0, Yc.e)(this.images)
      }
      feed() {
        this.models.drain(this.write);
        for (const [cB, Bc] of this.outcomes) {
          const nc = Bc === wc ? [] : [Bc === kB ? cB : (cB | pc.d) >>> 0];
          this.models.taken(cB, nc)
        }
        this.outcomes.length = 0, this.images.drain(this.write)
      }
      collect(cB) {
        let Bc = !1;
        if (cB) {
          const cB = this.host.qmc(this.id);
          for (const Bc of cB) this.models.request(Bc);
          const nc = this.host.Pfc(this.id);
          nc.length > 0 && this.images.onEvent(nc), Bc = cB.length > 0 || nc.length > 0
        }
        const nc = this.page.modelsUnavailable ? 0 : this.models.asking + this.models.unanswered,
          Vc = Bc || nc > 0 || this.images.waiting > 0 || this.images.inFlight > 0;
        this.quiet = Vc ? 0 : this.quiet + 1, this.quiet >= 3 && this.resolveSettled()
      }
      close() {
        this.closed || (this.closed = !0, this.page.closePreview(this), this.resolveSettled())
      }
      abandon() {
        this.resolveSettled()
      }
      dispose(cB) {
        this.page.hostCall(void 0, (() => {
          const Bc = this.host.close(this.id);
          Bc.length > 0 && this.images.onEvent(Bc), this.page.isTrapped || cB.KOc(this.id)
        })), this.images.dispose(), this.canvas.remove()
      }
      resolveSettled() {
        const cB = this.settled;
        this.settled = [];
        for (const Bc of cB) Bc()
      }
    }
    class Kc {
      constructor(cB) {
        this.deps = cB, this.module = null, this.host = null, this.opening = null, this.pageCanvas = null, this.samples = 1, this.binding = null, this.sessionEnds = 0, this.lastEndReturned = !0, this.previews = new Map, this.nextId = 1, this.frameId = null, this.stopped = !1, this.loggedErrors = new Set, this.modelsListener = {
          onUnavailable: cB => {
            this.modelsFailed(cB)
          },
          onDecoderFailed: cB => {
            this.loggedErrors.has("modelDecoder") || (this.loggedErrors.add("modelDecoder"), console.warn(`${Cc} the Draco decoder didn't load: models waiting on it won't draw`, cB))
          },
          onWorkerLost: cB => {
            this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${Cc} a model worker was lost: ${cB}`))
          }
        }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.frame = cB => {
          this.frameId = null;
          const Bc = this.host;
          if (null !== Bc && 0 !== this.previews.size && !this.settleIfTrapped() && !this.stopped) try {
            this.drawFrame(Bc, cB)
          } catch (nc) {
            if (!this.stopIfTrapped(nc) && (this.stop(), (0, yB.w)(nc))) return void this.deps.onWebGpuFailed("frames_refused", nc);
            console.warn(`${Cc} the previews stopped: their frame threw`, nc)
          }
        }, cB.pack.onChange((() => {
          this.packChanged()
        }))
      }
      packChanged() {
        if (!this.stopped)
          for (const cB of this.previews.values()) cB.packChanged()
      }
      dpr() {
        return this.deps.dpr()
      }
      get sessionBound() {
        var cB, Bc;
        return null !== (cB = null === (Bc = this.host) || void 0 === Bc ? void 0 : Bc.attached()) && void 0 !== cB && cB
      }
      get open() {
        return this.previews.size
      }
      get frameCostMs() {
        return 0 === this.costs.length ? 0 : this.costs.reduce(((cB, Bc) => cB + Bc), 0) / this.costs.length
      }
      async bindSession(cB, Bc, nc) {
        const Vc = this.binding,
          Ic = this.sessionEnds;
        try {
          const rB = this.hostOf(cB);
          if (!rB.GTc()) {
            const Bc = (0, Uc.i)().sampleCount,
              uc = await nc(Bc);
            if (this.sessionEnds !== Ic) return this.keepRendererOfEndedSession(cB, rB, uc, Bc, Vc), Bc;
            if (!rB.WTc(uc)) throw new Error("the page has a renderer already");
            (0, Lc.u)(performance.now()), this.samples = Bc, (0, bB.g)((0, yB.r)(cB))
          }
          if (!rB.attach(Bc)) throw new Error("the page's renderer is lent to another session");
          return this.samples
        } finally {
          this.binding === Vc && this.endBinding()
        }
      }
      keepRendererOfEndedSession(cB, Bc, nc, Vc, Ic) {
        if (!this.lastEndReturned || null !== this.binding && this.binding !== Ic) try {
          nc.free()
        } catch (rB) {
          console.warn(`${Cc} an ended session's renderer didn't free`, rB)
        } else Bc.WTc(nc) && ((0, Lc.u)(performance.now()), this.samples = Vc, (0, bB.g)(this.registryOf(cB)))
      }
      async beginSession() {
        var cB;
        let Bc = () => {};
        const nc = new Promise((cB => {
          Bc = cB
        }));
        this.binding = {
          done: nc,
          release: Bc
        }, await (null === (cB = this.opening) || void 0 === cB ? void 0 : cB.catch((() => null)));
        const Vc = this.pageCanvas;
        return this.pageCanvas = null, Vc
      }
      endSession(cB) {
        var Bc, nc;
        if (this.sessionEnds++, this.lastEndReturned = cB, this.endBinding(), cB) {
          try {
            var Vc;
            null === (Vc = this.host) || void 0 === Vc || Vc.detach()
          } catch (Ic) {
            return void console.warn(`${Cc} the session's core kept the page's renderer`, Ic)
          }!0 === (null === (Bc = this.host) || void 0 === Bc ? void 0 : Bc.attached()) && console.warn(`${Cc} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (nc = this.host) || void 0 === nc ? void 0 : nc.GTc()) && (0, bB.g)(this.registryOf(this.module))
        }
      }
      endBinding() {
        var cB;
        null === (cB = this.binding) || void 0 === cB || cB.release(), this.binding = null
      }
      async openPreview(cB, Bc, nc) {
        const Vc = await this.renderingHost(),
          Ic = this.module;
        if (null === Vc || null === Ic) throw new Error("this page can't draw previews: it has no renderer build");
        if (this.animations ??= this.loadAnimations(Vc), this.deps.pack.wanted(), this.isStopped) throw new Error("the previews stopped");
        this.guarded((() => {
          this.deps.provideBuiltInAnimationPack(Ic)
        }));
        const rB = this.nextId++,
          uc = this.deps.createCanvas(),
          [sc, Mc] = Fc(Bc, nc, this.deps.dpr());
        uc.width = sc, uc.height = Mc;
        if (!this.guarded((() => (Ic.iTc(rB, uc), Vc.open(rB, sc, Mc, cB))))) throw this.hostCall(void 0, (() => {
          Ic.KOc(rB)
        })), new Error("the page's renderer is lent to a session that is running");
        this.restartModelsIfFailed();
        const Pc = new iB(this, Vc, rB, uc, [sc, Mc], this.deps);
        return this.previews.set(rB, Pc), this.startFrames(), Pc
      }
      prefetch() {
        if (this.prefetched || this.isStopped || (0, Lc.b)() || null !== (0, Lc.x)()) return;
        this.prefetched = !0;
        (null === this.module ? this.loadModule() : Promise.resolve(this.module)).then((cB => {
          null === cB || this.isStopped || (this.startModels(), this.fetchAnimationTable().catch((() => {})), this.prefetchPlayerFiles())
        }), (() => {}))
      }
      modelFile(cB) {
        return this.prefetchedOr(cB, this.deps.fetchModel)
      }
      imageFile(cB) {
        return this.prefetchedOr(cB, Vc.x)
      }
      prefetchedOr(cB, Bc) {
        const nc = this.prefetchedFiles.get(cB);
        return void 0 === nc ? Bc(cB) : nc.catch((() => Bc(cB)))
      }
      async prefetchPlayerFiles() {
        const cB = this.deps.playerFile().then((cB => this.deps.files.url(cB))),
          Bc = await Promise.all([cB, this.deps.images.lifeformAtlasUrl(Yc.b)]).catch((() => null));
        if (null === Bc) return;
        const [nc, Vc] = Bc, Ic = (cB, Bc) => {
          if (null === cB) return;
          const nc = Bc(cB);
          this.prefetchedFiles.set(cB, nc), nc.catch((() => {
            this.prefetchedFiles.delete(cB)
          }))
        };
        Ic(nc, (cB => this.modelFile(cB))), Ic(Vc, (cB => this.imageFile(cB)))
      }
      loadModule() {
        return this.moduleLoad ??= this.deps.loadModule().then((cB => (null === cB && (this.moduleLoad = null), cB)), (cB => {
          throw this.moduleLoad = null, cB
        })), this.moduleLoad
      }
      fetchAnimationTable() {
        return this.animationTable ??= this.deps.fetchAnimations().catch((cB => {
          throw this.animationTable = null, cB
        })), this.animationTable
      }
      get modelsUnavailable() {
        return this.unavailable
      }
      startModels() {
        this.models ??= this.deps.startModels(this.modelsListener).catch((cB => (this.modelsFailed(cB), () => new Promise((() => {})))))
      }
      buildModel(cB, Bc) {
        return this.startModels(), this.models.then((nc => nc(cB, Bc))).then((cB => this.unavailable ? new Promise((() => {})) : cB))
      }
      restartModelsIfFailed() {
        this.unavailable && !this.modelsRestarted && 0 === this.previews.size && (this.modelsRestarted = !0, this.models = null, this.unavailable = !1, this.startModels())
      }
      modelsFailed(cB) {
        this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${Cc} the model workers didn't start: models won't draw in the previews`, cB))
      }
      called(cB) {
        return 0 !== cB && this.logError(cB, 0), cB
      }
      closePreview(cB) {
        this.previews.delete(cB.id), null !== this.module && cB.dispose(this.module), 0 === this.previews.size && null !== this.frameId && (this.deps.cancelFrame(this.frameId), this.frameId = null)
      }
      hostOf(cB) {
        if (null !== this.module && this.module !== cB) throw new Error("a second renderer module on one page");
        return this.module = cB, this.host ??= this.guarded((() => new cB.ROc)), this.host
      }
      async loadAnimations(cB) {
        const Bc = uc(null),
          nc = this.module;
        try {
          Bc.wasm = null === nc ? Bc.wasm : this.hostCall(Bc.wasm, (() => nc.Uc()))
        } catch {}
        let Vc, Ic;
        try {
          Vc = await this.fetchAnimationTable()
        } catch (rB) {
          return void this.deps.onAnimationsFailed({
            stage: "fetch",
            error: rB
          }, Bc)
        }
        if (!this.settleIfTrapped()) {
          try {
            Ic = cB.Bfc(Vc)
          } catch (rB) {
            if (this.stopIfTrapped(rB)) return;
            return void this.deps.onAnimationsFailed({
              stage: "decode",
              error: rB
            }, Bc)
          }
          Ic || this.deps.onAnimationsFailed({
            stage: "decode",
            error: null
          }, Bc)
        }
      }
      async renderingHost() {
        if (null !== this.binding && await this.binding.done, this.settleIfTrapped()) return null;
        const cB = this.host;
        return null !== cB && this.guarded((() => cB.GTc())) ? cB : (this.opening ??= this.openAtHome().finally((() => {
          this.opening = null
        })), this.opening)
      }
      async openAtHome() {
        var cB;
        const Bc = null !== (cB = this.module) && void 0 !== cB ? cB : await this.loadModule();
        if (null === Bc) return null;
        const nc = this.hostOf(Bc),
          Vc = () => this.guarded((() => nc.GTc()));
        if (Vc()) return nc;
        if (null !== (0, Lc.x)() || (0, Lc.b)()) return null;
        const Ic = this.deps.createCanvas();
        Ic.width = 1, Ic.height = 1;
        const rB = await this.deps.openExtras();
        if (this.settleIfTrapped()) return null;
        const uc = (0, Uc.i)().sampleCount;
        let sc;
        try {
          sc = await (0, yB.B)(Bc, "previewRenderer", Ic, uc, Zc.e, rB)
        } catch (Mc) {
          throw Mc instanceof lc.b ? this.stopForTrap(Mc) : (0, yB.y)(Mc) && await this.deps.onWebGpuFailed("start_failed", Mc), Mc
        }
        return this.guarded((() => nc.WTc(sc))) ? ((0, Lc.u)(performance.now()), this.samples = uc, this.pageCanvas = Ic, (0, bB.g)(this.registryOf(Bc)), nc) : Vc() ? nc : null
      }
      startFrames() {
        null !== this.frameId || this.isStopped || (this.frameId = this.deps.requestFrame(this.frame))
      }
      drawFrame(cB, Bc) {
        for (const uc of this.previews.values()) uc.feed();
        if (this.stopped) return;
        const nc = this.deps.now(),
          Vc = cB.frame(Bc);
        this.costs.push(this.deps.now() - nc), this.costs.length > 120 && this.costs.shift();
        const Ic = 0 !== (256 & Vc),
          rB = 255 & Vc;
        for (const uc of this.previews.values()) {
          if (this.stopped) return;
          uc.collect(Ic)
        }
        if (!this.stopped) {
          if (Ic) {
            const Bc = cB.Mfc();
            for (let cB = 0; cB + 1 < Bc.length; cB += 2) this.logError(Bc[cB], Bc[cB + 1])
          }
          return rB === Ec ? (this.stop(), void this.deps.onWebGpuFailed("lost")) : rB === oc ? (this.stop(), void this.deps.onFatal(cB.KTc(), cB.dTc())) : rB === Wc ? (this.stop(), void console.warn(`${Cc} the previews stopped: the page's renderer went with its session`)) : void this.startFrames()
        }
      }
      get isStopped() {
        return this.stopped || this.isTrapped
      }
      get isTrapped() {
        return null !== this.module && ((0, lc.i)(this.module) || "failed" === (0, mB.E)())
      }
      hostCall(cB, Bc) {
        if (this.settleIfTrapped()) return cB;
        try {
          return Bc()
        } catch (nc) {
          if (this.stopIfTrapped(nc)) return cB;
          throw nc
        }
      }
      guarded(cB) {
        if (this.settleIfTrapped()) throw new Error("the previews stopped: their module trapped");
        try {
          return cB()
        } catch (Bc) {
          throw this.stopIfTrapped(Bc), Bc
        }
      }
      registryOf(cB) {
        return {
          QPc: (Bc, nc) => {
            this.hostCall(void 0, (() => {
              cB.QPc(Bc, nc)
            }))
          },
          CPc: Bc => {
            this.hostCall(void 0, (() => {
              cB.CPc(Bc)
            }))
          }
        }
      }
      settleIfTrapped() {
        return !!this.isTrapped && (this.stopped || (this.stop(), (0, bB.g)(null)), !0)
      }
      stopIfTrapped(cB) {
        return !(null === this.module || !(0, lc.k)(this.module, cB)) && (this.stopForTrap(cB), !0)
      }
      stopForTrap(cB) {
        this.stop(), (0, bB.g)(null), (0, mB.R)(cB)
      }
      stop() {
        this.stopped = !0;
        for (const cB of this.previews.values()) cB.abandon()
      }
      logError(cB, Bc) {
        const nc = `${cB}:${Bc}`;
        this.loggedErrors.has(nc) || (this.loggedErrors.add(nc), console.warn(`${Cc} error ${cB} (detail ${Bc})`))
      }
    }
    let xB = null;

    function dc() {
      return xB ??= new Kc(function() {
        const cB = (0, hc.l)(Sc.clientSideServerUrls.staticUrl, {
          packUrl: cB => {
            var Bc, nc;
            return null !== (Bc = null === (nc = Yc.d.current) || void 0 === nc ? void 0 : nc.modelUrl(cB)) && void 0 !== Bc ? Bc : null
          }
        });
        return {
          loadModule: Rc,
          startModels: async cB => {
            const {
              pageModelPool: Bc
            } = await nc.e(37).then((() => nc(41274))), {
              pool: Vc
            } = Bc(cB);
            return (cB, Bc) => Vc.build(cB, Bc)
          },
          fetchAnimations: async () => sc(await (0, Vc.x)(Jc())),
          playerFile: async () => (await (0, hc.k)()).PLAYER_FILE,
          onAnimationsFailed: (cB, Bc) => {
            Mc("previewAnimations", Jc(), cB, Bc)
          },
          provideBuiltInAnimationPack: cB => {
            Tc().provide(cB)
          },
          openExtras: Lc.v,
          files: cB,
          images: (0, Yc.g)((0, zB.p)(cB.url), (() => Yc.d.current)),
          pack: Yc.d,
          fetchModel: cB => (0, hc.g)(cB),
          createCanvas: () => document.createElement("canvas"),
          dpr: () => window.devicePixelRatio,
          now: () => performance.now(),
          requestFrame: cB => requestAnimationFrame(cB),
          cancelFrame: cB => {
            cancelAnimationFrame(cB)
          },
          onWebGpuFailed: jB,
          onFatal: (cB, Bc) => {
            console.error(`${Cc} the previews stopped: renderer error ${cB} (detail ${Bc})`)
          }
        }
      }()), xB
    }
    var Ac = nc(556),
      Gc = nc(564),
      cn = nc(37024),
      BB = nc(302),
      nB = nc(37145),
      VB = nc(2444);
    const IB = {
      wave: 0,
      clap: 1,
      point: 2,
      shrug: 3,
      cheer: 4,
      sit: 5,
      beeFly: 6,
      bow: 7,
      jesterDance: 8,
      mobIdle: 9,
      caveGolem: 10,
      magmaGolem: 11,
      frostWraith: 12,
      tikiTerror: 13,
      gunReady: 14,
      gunAimed: 15
    };
    const rn = "[bloxd-previews]",
      uB = 1,
      sB = 2,
      MB = 4,
      PB = 8,
      qn = 15,
      OB = [6, 0, -6, 0, 0, Math.PI / 4],
      TB = new Uint32Array(5);

    function fB(cB) {
      return Ac.i.indexOf(cB)
    }

    function mn(cB, Bc) {
      var nc;
      const Vc = null !== (nc = Gc.i[cB]) && void 0 !== nc ? nc : [];
      return null === Bc ? -1 : Vc.indexOf(Bc)
    }
    const eB = new WeakSet;

    function tn(cB) {
      const Bc = (0, nB.f)(cB),
        nc = null === Bc ? -1 : SB(Bc);
      return -1 !== nc ? nc : (eB.has(cB) || (eB.add(cB), console.warn(`${rn} an animation the previews' table lacks: the mob idles instead`)), -1)
    }

    function SB(cB) {
      var Bc;
      return null !== (Bc = IB[cB]) && void 0 !== Bc ? Bc : -1
    }

    function yn(cB, Bc) {
      const {
        canvas: nc
      } = Bc;
      nc.style.width = "100%", nc.style.height = "100%", nc.style.display = "block", cB.appendChild(nc)
    }

    function zn(cB) {
      const Bc = cB.getBoundingClientRect();
      return [Bc.width, Bc.height]
    }
    class pB {
      constructor(cB, Bc) {
        this.preview = cB, this.showView = Bc
      }
      show(cB) {
        this.showView(this.preview, cB)
      }
      resize(cB, Bc) {
        this.preview.resize(cB, Bc)
      }
      close() {
        this.preview.close()
      }
    }
    class hB {
      constructor(cB) {
        this.preview = cB, this.ready = void 0, this.dev = void 0, this.built = !1, this.cosmetics = {}, this.emote = null, this.detachControls = void 0, this.detachControls = function(cB) {
          const {
            canvas: Bc
          } = cB;
          let nc = null;
          const Vc = cB => {
              var Vc;
              nc = {
                pointer: cB.pointerId,
                x: cB.clientX,
                y: cB.clientY
              }, null === (Vc = Bc.setPointerCapture) || void 0 === Vc || Vc.call(Bc, cB.pointerId)
            },
            Ic = Bc => {
              var Vc;
              const Ic = cB.orbit;
              if ((null === (Vc = nc) || void 0 === Vc ? void 0 : Vc.pointer) !== Bc.pointerId || null === Ic) return;
              const rB = Bc.clientX - nc.x,
                uc = Bc.clientY - nc.y;
              nc = {
                ...nc,
                x: Bc.clientX,
                y: Bc.clientY
              }, cB.setOrbit({
                alpha: Ic.alpha - .01 * rB,
                beta: Math.min(Math.PI - .01, Math.max(.01, Ic.beta - .01 * uc)),
                radius: Ic.radius
              })
            },
            rB = cB => {
              var Bc;
              (null === (Bc = nc) || void 0 === Bc ? void 0 : Bc.pointer) === cB.pointerId && (nc = null)
            },
            uc = Bc => {
              const nc = cB.orbit;
              if (null === nc) return;
              Bc.preventDefault();
              const Vc = Bc.deltaY * (Bc.deltaMode === WheelEvent.DOM_DELTA_LINE ? 40 : Bc.deltaMode === WheelEvent.DOM_DELTA_PAGE ? 800 : 1),
                Ic = Math.min(100, Math.max(5, nc.radius + .08 * Vc));
              cB.setOrbit({
                ...nc,
                radius: Ic
              })
            };
          return Bc.style.touchAction = "none", Bc.addEventListener("pointerdown", Vc), Bc.addEventListener("pointermove", Ic), Bc.addEventListener("pointerup", rB), Bc.addEventListener("pointercancel", rB), Bc.addEventListener("wheel", uc, {
            passive: !1
          }), () => {
            Bc.removeEventListener("pointerdown", Vc), Bc.removeEventListener("pointermove", Ic), Bc.removeEventListener("pointerup", rB), Bc.removeEventListener("pointercancel", rB), Bc.removeEventListener("wheel", uc)
          }
        }(cB), this.dev = {
          setCamera: Bc => {
            let {
              yaw: nc,
              pitch: Vc,
              radius: Ic
            } = Bc;
            const rB = cB.orbit;
            null !== rB && cB.setOrbit({
              alpha: nc,
              beta: Vc,
              radius: null !== Ic && void 0 !== Ic ? Ic : rB.radius
            })
          },
          canvas: () => cB.canvas,
          isolateHead: () => {
            console.warn(`${rn} isolateHead: noa's character preview only`)
          }
        }, this.apply(), this.ready = cB.untilSettled().then((() => {
          this.built = !0
        }))
      }
      isReady() {
        return this.built && !this.preview.isClosed
      }
      setCosmetic(cB, Bc) {
        this.cosmetics[cB] = Bc, this.apply()
      }
      playEmote(cB) {
        null === cB || cB !== this.emote ? (this.emote = cB, this.apply()) : this.preview.replay()
      }
      untilDrawn(cB) {
        return this.preview.untilSettled()
      }
      resize(cB, Bc) {
        this.preview.resize(cB, Bc)
      }
      close() {
        this.detachControls(), this.preview.close()
      }
      apply() {
        var cB;
        this.preview.setPlayer(JSON.stringify(this.cosmetics), TB, null === (cB = this.emote) ? -1 : SB(cB))
      }
    }

    function an(cB, Bc) {
      let {
        mobType: nc,
        variation: Vc,
        animation: Ic
      } = Bc;
      cB.setMob(fB(nc), mn(nc, Vc), qn, 1, tn(Ic))
    }

    function lB(cB, Bc) {
      let {
        mobType: nc,
        variation: Vc,
        shownGroups: Ic
      } = Bc;
      const rB = uB | (Ic.collar ? sB : 0) | (Ic.saddle ? MB : 0) | (Ic.antlers ? PB : 0);
      cB.setMob(fB(nc), mn(nc, Vc), rB, 1, -1), cB.setPlacement(OB)
    }
    const YB = Math.PI - Math.PI / 16;
    class LB {
      constructor(cB, Bc, nc) {
        this.size = nc, this.preview = null, this.closed = !1, this.figure = null, this.shown = !1, this.placement = [], this.order = "", this.given = null, this.givenPlacement = [], this.loaded = !1, cB(...nc).then((cB => {
          if (this.closed) return void cB.close();
          const {
            style: nc
          } = cB.canvas;
          nc.position = "absolute", nc.top = "0", nc.left = "0", nc.visibility = "hidden", yn(Bc, cB), this.preview = cB, cB.resize(...this.size), this.apply()
        })).catch((cB => {
          console.error(`${rn} couldn't open a lineup figure`, cB)
        }))
      }
      update(cB, Bc, nc, Vc) {
        this.figure = cB, this.shown = Bc, this.placement = nc, this.order = Vc, this.apply()
      }
      resize(cB, Bc) {
        var nc;
        this.size = [cB, Bc], null === (nc = this.preview) || void 0 === nc || nc.resize(cB, Bc)
      }
      close() {
        var cB;
        this.closed = !0, null === (cB = this.preview) || void 0 === cB || cB.close(), this.preview = null
      }
      apply() {
        const {
          preview: cB,
          figure: Bc
        } = this;
        if (null === cB || null === Bc) return;
        if (this.given !== Bc) {
          var nc;
          this.given = Bc, this.loaded = !1;
          const Vc = null === Bc.vY ? 0 : null !== (nc = (0, VB.e)(Bc.vY)) && void 0 !== nc ? nc : 0;
          cB.setFigure(function(cB) {
            return JSON.stringify(Object.fromEntries(cB.cosmetics))
          }(Bc), Vc, tn(Bc.animation)), cB.untilSettled().then((() => {
            this.given === Bc && (this.loaded = !0, this.apply())
          }))
        }(0, BB.k)(this.givenPlacement, this.placement) || (this.givenPlacement = this.placement, cB.setPlacement(this.placement));
        const {
          style: Vc
        } = cB.canvas;
        Vc.zIndex = this.order, Vc.visibility = this.shown && this.loaded ? "visible" : "hidden"
      }
    }
    class gn {
      constructor(cB, Bc) {
        this.open = Bc, this.layer = void 0, this.figures = [], this.view = {
          figures: [],
          shown: []
        }, this.size = void 0, this.size = zn(cB), this.layer = document.createElement("div");
        const {
          style: nc
        } = this.layer;
        nc.position = "relative", nc.isolation = "isolate", nc.width = "100%", nc.height = "100%", nc.pointerEvents = "none", cB.appendChild(this.layer)
      }
      show(cB) {
        this.view = cB, this.place()
      }
      resize(cB, Bc) {
        this.size = [cB, Bc];
        for (const nc of this.figures) nc.resize(cB, Bc);
        this.place()
      }
      close() {
        for (const cB of this.figures) cB.close();
        this.figures = [], this.layer.remove()
      }
      place() {
        const {
          figures: cB,
          shown: Bc
        } = this.view;
        for (const rB of this.figures.splice(cB.length)) rB.close();
        const [nc, Vc] = this.size, Ic = Vc > 0 ? nc / Vc : 1;
        cB.forEach(((nc, Vc) => {
          var rB;
          this.figures[Vc] ??= new LB(this.open, this.layer, this.size);
          const uc = function(cB, Bc, nc) {
            const {
              height: Vc,
              width: Ic
            } = (0, cn.d)("NPC").hitBoxDimensions, rB = 13 / Math.max(Vc, Ic);
            return [rB * nc, (.5 - cB) * (44 * Math.tan(.4)) * Bc, -Vc * rB / 2, 0, YB, 0]
          }((Vc + .5) / cB.length, Ic, nc.size);
          this.figures[Vc].update(nc, null !== (rB = Bc[Vc]) && void 0 !== rB && rB, uc, function(cB, Bc) {
            return String(Math.round(1e3 * cB) + Bc)
          }(nc.size, Vc))
        }))
      }
    }
    class UB {
      constructor(cB) {
        this.page = cB
      }
      async openMob(cB) {
        return new pB(await this.open(cB, Dc), an)
      }
      async openPet(cB) {
        return new pB(await this.open(cB, Dc), lB)
      }
      openMobLineup(cB) {
        return new gn(cB, ((cB, Bc) => this.page.openPreview(Dc, cB, Bc)))
      }
      async openCharacter(cB) {
        return new hB(await this.open(cB, Nc))
      }
      async open(cB, Bc) {
        const [nc, Vc] = zn(cB), Ic = await this.page.openPreview(Bc, nc, Vc);
        return yn(cB, Ic), Ic
      }
    }
  },
  37024: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => mB
    });
    var Vc = nc(174),
      Ic = nc(36197);
    const rB = 1.2,
      uc = {
        poseRig: "golem",
        physicsBodyDimensions: {
          width: .5,
          height: 2.5
        },
        hitBoxDimensions: {
          width: 2.2,
          height: 2.8
        },
        eyeHeight: 2.3,
        rideHeight: 2.3,
        ku: .5,
        IMc: !1
      },
      sc = {
        physicsBodyDimensions: {
          width: .5,
          height: 2.5
        },
        hitBoxDimensions: {
          width: 1.8,
          height: 2.6
        },
        eyeHeight: 2.3,
        rideHeight: 2.3,
        ku: .5,
        IMc: !1
      },
      Mc = {
        physicsBodyDimensions: {
          width: Vc.e.EY,
          height: Vc.e.wY
        },
        hitBoxDimensions: {
          width: Vc.e.EY + .4,
          height: Vc.e.wY + .6
        },
        eyeHeight: Vc.e.wY * Vc.e.playerEyeToHeightRatio,
        rideHeight: Vc.e.wY - .3,
        ku: .5,
        IMc: !1
      },
      Pc = {
        physicsBodyDimensions: {
          width: .5,
          height: .95
        },
        hitBoxDimensions: {
          width: 1.6,
          height: 1.1
        },
        eyeHeight: .9,
        rideHeight: .5,
        ku: .5,
        IMc: !1
      },
      qB = {
        physicsBodyDimensions: {
          width: .5,
          height: 1.8
        },
        hitBoxDimensions: {
          width: 1.7,
          height: 1.9
        },
        eyeHeight: 1.3,
        rideHeight: 1.3,
        ku: .5,
        IMc: !1
      },
      Oc = {
        physicsBodyDimensions: {
          width: .5,
          height: 1.9
        },
        hitBoxDimensions: {
          width: 1.5,
          height: 2.1
        },
        eyeHeight: 1.9,
        rideHeight: 1,
        ku: .5,
        IMc: !1
      },
      Tc = {
        physicsBodyDimensions: {
          width: .5,
          height: 1.9
        },
        hitBoxDimensions: {
          width: 1.5,
          height: 2.4
        },
        eyeHeight: 2,
        rideHeight: 1.8,
        ku: .5,
        IMc: !1
      },
      fc = {
        Player: {
          defaultName: "Player",
          physicsBodyDimensions: {
            width: Vc.e.EY,
            height: Vc.e.wY
          },
          hitBoxDimensions: {
            width: Vc.e.EY + .4,
            height: Vc.e.wY + .6
          },
          eyeHeight: Vc.e.wY * Vc.e.playerEyeToHeightRatio,
          rideHeight: Vc.e.wY - .1,
          ku: Ic.e.ku,
          IMc: !0
        },
        Pig: {
          poseNameRise: {
            sitting: 1.4
          },
          physicsBodyDimensions: {
            width: .5,
            height: .8
          },
          hitBoxDimensions: {
            width: 1.5,
            height: 1.2
          },
          eyeHeight: .8,
          rideHeight: .5,
          ku: .5,
          IMc: !1
        },
        Cow: {
          physicsBodyDimensions: {
            width: .5,
            height: 1.1
          },
          hitBoxDimensions: {
            width: 1.6,
            height: 1.4
          },
          eyeHeight: 1.2,
          rideHeight: 1,
          ku: .5,
          IMc: !1
        },
        Sheep: {
          physicsBodyDimensions: {
            width: .5,
            height: 1.1
          },
          hitBoxDimensions: {
            width: 1.6,
            height: 1.3
          },
          eyeHeight: 1.2,
          rideHeight: .8,
          ku: .5,
          IMc: !1
        },
        Horse: {
          physicsBodyDimensions: {
            width: .5,
            height: 1.9
          },
          hitBoxDimensions: {
            width: 1.5,
            height: 2.1
          },
          eyeHeight: 1.9,
          rideHeight: .9,
          ku: .5,
          IMc: !1
        },
        Camel: {
          modelScale: rB,
          physicsBodyDimensions: {
            width: .6,
            height: 2.52
          },
          hitBoxDimensions: {
            width: 1.92,
            height: 2.76
          },
          eyeHeight: 2.52,
          rideHeight: 1.7999999999999998,
          ku: .5,
          IMc: !1
        },
        Slime: {
          physicsBodyDimensions: {
            width: .6,
            height: .8
          },
          hitBoxDimensions: {
            width: 1,
            height: .9
          },
          eyeHeight: .5,
          rideHeight: .5,
          ku: .5,
          IMc: !1
        },
        "Cave Golem": uc,
        "Draugr Zombie": {
          ...Mc,
          defaultPose: "zombie"
        },
        "Draugr Skeleton": Mc,
        "Frost Golem": uc,
        "Frost Zombie": {
          ...Mc,
          defaultPose: "zombie"
        },
        "Frost Skeleton": Mc,
        "Draugr Knight": {
          physicsBodyDimensions: {
            width: Vc.e.EY,
            height: Vc.e.wY
          },
          hitBoxDimensions: {
            width: Vc.e.EY + .4,
            height: 2.8
          },
          eyeHeight: 1.9,
          rideHeight: 1.8,
          ku: .5,
          IMc: !1
        },
        Wolf: Pc,
        Bear: qB,
        Deer: {
          physicsBodyDimensions: {
            width: .5,
            height: 1.9
          },
          hitBoxDimensions: {
            width: 1.5,
            height: 2.1
          },
          eyeHeight: 1.8,
          rideHeight: .8,
          ku: .5,
          IMc: !1
        },
        Stag: Oc,
        "Gold Watermelon Stag": {
          physicsBodyDimensions: {
            width: .5,
            height: 1.9
          },
          hitBoxDimensions: {
            width: 1.5,
            height: 2.1
          },
          eyeHeight: 1.9,
          rideHeight: 1,
          ku: .5,
          IMc: !1
        },
        Gorilla: Tc,
        Wildcat: {
          physicsBodyDimensions: {
            width: .5,
            height: .7
          },
          hitBoxDimensions: {
            width: 1.5,
            height: .7
          },
          eyeHeight: .55,
          rideHeight: .4,
          ku: .5,
          IMc: !1
        },
        "Draugr Huntress": Mc,
        "Magma Golem": uc,
        "Spirit Golem": uc,
        "Spirit Wolf": Pc,
        "Spirit Bear": qB,
        "Spirit Stag": Oc,
        "Spirit Gorilla": Tc,
        "Draugr Warper": {
          physicsBodyDimensions: {
            width: .5,
            height: 2.5
          },
          hitBoxDimensions: {
            width: .6,
            height: 3
          },
          eyeHeight: 2.4,
          rideHeight: 2.8,
          ku: .5,
          IMc: !1
        },
        "Frost Wraith": {
          poseRig: "wraith",
          physicsBodyDimensions: {
            width: .5,
            height: 2.7
          },
          hitBoxDimensions: {
            width: .6,
            height: 2.8
          },
          eyeHeight: 2.3,
          rideHeight: 2.6,
          ku: .5,
          IMc: !1
        },
        "Draugr Reaver": {
          physicsBodyDimensions: {
            width: .5,
            height: 2.6
          },
          hitBoxDimensions: {
            width: .6,
            height: 2.7
          },
          eyeHeight: 2.2,
          rideHeight: 2.5,
          ku: .5,
          IMc: !1
        },
        NPC: {
          physicsBodyDimensions: {
            width: Vc.e.EY,
            height: Vc.e.wY
          },
          hitBoxDimensions: {
            width: Vc.e.EY + .4,
            height: Vc.e.wY + .6
          },
          eyeHeight: Vc.e.wY * Vc.e.playerEyeToHeightRatio,
          rideHeight: Vc.e.wY - .1,
          ku: .5,
          IMc: !1
        },
        67: {
          physicsBodyDimensions: {
            width: .5,
            height: 2.5
          },
          hitBoxDimensions: {
            width: 3,
            height: 2.5
          },
          eyeHeight: 1.9,
          rideHeight: 2.5,
          ku: .5,
          IMc: !1
        },
        "Bobino Musculino": {
          physicsBodyDimensions: {
            width: Vc.e.EY,
            height: Vc.e.wY
          },
          hitBoxDimensions: {
            width: Vc.e.EY + .4,
            height: Vc.e.wY + .6
          },
          eyeHeight: Vc.e.wY * Vc.e.playerEyeToHeightRatio,
          rideHeight: Vc.e.wY - .1,
          ku: .5,
          IMc: !1
        },
        "Capitano Explovissimo": {
          physicsBodyDimensions: {
            width: .5,
            height: 1.8
          },
          hitBoxDimensions: {
            width: .5,
            height: 2.5
          },
          eyeHeight: 1.5,
          rideHeight: 2,
          ku: .5,
          IMc: !1
        },
        "Desert Fennec": {
          physicsBodyDimensions: {
            width: .4,
            height: .8
          },
          hitBoxDimensions: {
            width: .8,
            height: .8
          },
          eyeHeight: .65,
          rideHeight: .6,
          ku: .5,
          IMc: !1
        },
        "Armour Collector": {
          physicsBodyDimensions: {
            width: 1,
            height: 3.5
          },
          hitBoxDimensions: {
            width: 2,
            height: 3.7
          },
          eyeHeight: 3.1,
          rideHeight: 3.6,
          ku: .5,
          IMc: !1
        },
        "Furnace Knight": {
          physicsBodyDimensions: {
            width: .8,
            height: 2.4
          },
          hitBoxDimensions: {
            width: 1.6,
            height: 2.5
          },
          eyeHeight: 2,
          rideHeight: 2.45,
          ku: .5,
          IMc: !1
        },
        "Lil Knight": {
          physicsBodyDimensions: {
            width: .8,
            height: 2.4
          },
          hitBoxDimensions: {
            width: 1.6,
            height: 2.55
          },
          eyeHeight: 2,
          rideHeight: 2.5,
          ku: .5,
          IMc: !1
        },
        "Glass Gremlin": {
          physicsBodyDimensions: {
            width: .6,
            height: 2.5
          },
          hitBoxDimensions: {
            width: 1,
            height: 2.6
          },
          eyeHeight: 2.2,
          rideHeight: 2.55,
          ku: .5,
          IMc: !1
        },
        "Glass Bro": {
          physicsBodyDimensions: {
            width: .8,
            height: 2.1
          },
          hitBoxDimensions: {
            width: 1.3,
            height: 2.2
          },
          eyeHeight: 1.8,
          rideHeight: 2.1,
          ku: .5,
          IMc: !1
        },
        "Lord Vulcan": {
          physicsBodyDimensions: {
            width: 1.2,
            height: 5.4
          },
          hitBoxDimensions: {
            width: 2.4,
            height: 5.4
          },
          eyeHeight: 4.1,
          rideHeight: 5.4,
          ku: .5,
          IMc: !1
        },
        Zombie: {
          ...Mc,
          defaultPose: "zombie"
        },
        Skeleton: Mc,
        Mummy: {
          ...Mc,
          defaultPose: "zombie"
        },
        Scorpion: {
          physicsBodyDimensions: {
            width: 1,
            height: .9
          },
          hitBoxDimensions: {
            width: 1.6,
            height: 1.4
          },
          eyeHeight: .6,
          rideHeight: .9,
          ku: .5,
          IMc: !1
        },
        Vulcanite: {
          physicsBodyDimensions: {
            width: .8,
            height: 2
          },
          hitBoxDimensions: {
            width: 1.3,
            height: 2.1
          },
          eyeHeight: 1.6,
          rideHeight: 2.1,
          ku: .5,
          IMc: !1
        },
        "Evil Tome": {
          physicsBodyDimensions: {
            width: .6,
            height: .9
          },
          hitBoxDimensions: {
            width: .9,
            height: .95
          },
          eyeHeight: .6,
          rideHeight: .95,
          ku: .5,
          IMc: !1
        },
        "Magma Toad": {
          physicsBodyDimensions: {
            width: 1,
            height: 1
          },
          hitBoxDimensions: {
            width: 1.5,
            height: 1.15
          },
          eyeHeight: 1,
          rideHeight: 1.1,
          ku: .5,
          IMc: !1
        },
        Stalker: {
          physicsBodyDimensions: {
            width: .5,
            height: 2.6
          },
          hitBoxDimensions: {
            width: .6,
            height: 2.9
          },
          eyeHeight: 2.4,
          rideHeight: 2.5,
          ku: .5,
          IMc: !1
        },
        Crone: {
          turnRate: 1.2,
          physicsBodyDimensions: {
            width: .6,
            height: 2.9
          },
          hitBoxDimensions: {
            width: .7,
            height: 3.2
          },
          eyeHeight: 2.7,
          rideHeight: 2.8,
          ku: .5,
          IMc: !1
        },
        "Iron Guardian": sc,
        "Gold Guardian": sc,
        "Diamond Guardian": sc,
        "Moonstone Guardian": sc,
        "Iron Goofy Golem": sc,
        "Gold Goofy Golem": sc,
        "Diamond Goofy Golem": sc,
        "Moonstone Goofy Golem": sc,
        "Tiki Terror": {
          poseRig: "tiki",
          physicsBodyDimensions: {
            width: 1,
            height: 4.3
          },
          hitBoxDimensions: {
            width: 2.4,
            height: 4.5
          },
          eyeHeight: 3.9,
          rideHeight: 4.3,
          ku: .5,
          IMc: !1
        }
      };

    function mB(cB) {
      return fc[cB]
    }
  },
  35361: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Vc,
      e: () => Ic,
      f: () => Tc,
      h: () => tB,
      j: () => qB,
      k: () => yB,
      o: () => Mc,
      s: () => Pc,
      u: () => fc,
      w: () => mB,
      x: () => ec,
      z: () => Sc
    });
    const Vc = [{
      numLines: 7,
      charsPerLine: 16,
      uiFontSize: 3.3,
      ingameFontSize: 25
    }, {
      numLines: 5,
      charsPerLine: 11,
      uiFontSize: 4.6,
      ingameFontSize: 36
    }, {
      numLines: 3,
      charsPerLine: 7,
      uiFontSize: 7.5,
      ingameFontSize: 58
    }];

    function Ic(cB, Bc) {
      const {
        numLines: nc,
        charsPerLine: Ic
      } = Vc[Bc];
      return zB(cB, nc, Ic, !1)
    }
    const rB = 7 / 8,
      uc = .25,
      sc = 8;

    function Mc(cB, Bc) {
      return {
        width: Math.min(cB, sc) - 2 * uc,
        height: Math.min(Bc, sc) - 2 * uc
      }
    }

    function Pc(cB, Bc, nc) {
      const Ic = Mc(cB, Bc),
        {
          numLines: uc,
          charsPerLine: sc
        } = Vc[nc];
      return {
        numLines: Math.max(1, Math.floor(uc / rB * Ic.height)),
        charsPerLine: Math.max(1, Math.floor(sc * Ic.width))
      }
    }

    function qB(cB, Bc, nc, Vc) {
      const {
        numLines: Ic,
        charsPerLine: rB
      } = Pc(nc, Vc, Bc);
      return zB(cB, Ic, rB, !1)
    }
    const Oc = 32e3;

    function Tc(cB) {
      return cB.slice(0, Oc)
    }
    const fc = 512e3,
      mB = 64,
      ec = fc;

    function tB(cB, Bc) {
      const nc = Math.max(0, ec - Bc),
        Vc = Math.min(fc, nc);
      return cB.slice(0, Vc)
    }
    const Sc = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      Hk: {
        numLines: 1,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      nameTag: {
        numLines: 1,
        charsPerLine: 13,
        uiFontSize: 4.6
      }
    };

    function yB(cB, Bc) {
      const {
        numLines: nc,
        charsPerLine: Vc
      } = Sc[Bc];
      return zB(cB, nc, Vc, !1)
    }

    function zB(cB, Bc, nc, Vc, Ic) {
      (Ic || Vc) && (cB = cB.slice(0, null !== Ic && void 0 !== Ic ? Ic : Bc * nc));
      const rB = cB.split("\n");
      if (rB.length > Bc && rB.splice(Bc, rB.length - Bc), !Vc)
        for (let uc = 0; uc < rB.length; uc++) {
          const cB = rB[uc];
          cB.length > nc && (rB[uc] = cB.substring(0, nc), rB.length < Bc && rB.splice(uc + 1, 0, cB.substring(nc)))
        }
      return rB.join("\n")
    }
  },
  36204: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => uc
    });
    var Vc = nc(309),
      Ic = nc.n(Vc),
      rB = nc(1534);
    let uc;
    var sc, Mc, Pc, qB, Oc, Tc, fc, mB, ec;
    const tB = [55, 0, 1, 135, 3, "a", 9, 167, "e", "f", 4, 8, 255, "length", 2, 208, 72, "undefined", void 0, 16, 115, "c", 63, 6, "fromCodePoint", 7, 12, "push", 196, 91, 8191, 88, 13, 14, 249, 222, 241, 5, 10, 159, 172, "g", 138, 221, "b", 61, 71, 218, 179, 28, "h", 210, 19, "d", 114, 56, !1, 224, 87, 246, 46, "i", 212, 92, null, 103, 104, 105, 110, 111, 112, 96, 97, 98, 99, 106, 107, 108, 109, 118, 119, 120, 121, 122, 123, 128, 73, 248, 243, 141, 1023, 43, 65536, 163, 55296, 56320, 229, 127, 31, 15, 18, 140, 17, 95, 238, 205, 165, 90, 186, 192, 240, "qs", 35, 143, 129, 153, 152, 37, 41, 32, 69, 82, 52, 202, 56319, 64512, 65535, 66, 193, 57343, 203, 213, 4294967168, 239, 4294965248, 4294901760, 4292870144, 187, 232, 230, 160, 233, 59, 70, 185, 2048, 177, 1114111, "on"];

    function Sc(...cB) {
      return cB[tB[13]] = tB[2], typeof sc[cB[tB[1]]] === tB[17] ? sc[cB[tB[1]]] = function(...cB) {
        for (bB(cB[tB[13]] = tB[2], cB[tB[5]] = '0]v_$CcA9P8q=|."T*&u1@V3%Kzg>4Zn`p25Ge/f}o^k?L{BME!dS()WrQ~lFDU#x:bXyh6;ItYJHaiN,R+Osj<w[m7', cB[tB[0]] = "" + (cB[tB[1]] || ""), cB[tB[4]] = cB[tB[0]].length, cB[tB[10]] = [], cB[tB[8]] = tB[1], cB[tB[9]] = tB[1], cB[-tB[7]] = -tB[2]), cB[tB[3]] = tB[1]; cB[tB[3]] < cB[tB[4]]; cB[tB[3]]++)
          if (cB[tB[6]] = cB[tB[5]].indexOf(cB[tB[0]][cB[tB[3]]]), cB[tB[6]] !== -tB[2])
            if (cB[-tB[7]] < tB[1]) cB[-tB[7]] = cB[tB[6]];
            else {
              bB(cB[-tB[7]] += cB[tB[6]] * tB[29], cB[tB[8]] |= cB[-tB[7]] << cB[tB[9]], cB[tB[9]] += (cB[-tB[7]] & tB[30]) > tB[31] ? tB[32] : tB[33]);
              do {
                bB(cB[tB[10]].push(cB[tB[8]] & tB[12]), cB[tB[8]] >>= tB[11], cB[tB[9]] -= tB[11])
              } while (cB[tB[9]] > tB[25]);
              cB[-tB[7]] = -tB[2]
            } return cB[-tB[7]] > -tB[2] && cB[tB[10]].push((cB[tB[8]] | cB[-tB[7]] << cB[tB[9]]) & tB[12]), yB(cB[tB[10]])
      }(Mc[cB[tB[1]]]) : sc[cB[tB[1]]]
    }

    function yB(...cB) {
      return cB[tB[13]] = tB[2], typeof qB !== tB[17] && qB ? (new qB).decode(new Oc(cB[tB[1]])) : typeof Tc !== tB[17] && Tc ? Tc.from(cB[tB[1]]).toString("utf-8") : ec(cB[tB[1]])
    }

    function zB() {}
    bB(sc = {}, Mc = ['G=`cFNeA[13HOOvZWU!a4,~}@xMh?Btf")+`$N(#du$D|M[2~z)n:I`vr:5', "(_54uiK59WDSzEj}VdZnyY?~|@UtR$#G@QMc", "bMjnh2PhdPOX9T/eee<HmQ_R+=+!JzYumLO4mHPKV|Z*vKhnQ.v", ":M!(j;?{ZlU&:ItK})$apj;|0PZ1/|y%H:FaD~=&1u", "idsAIN#hRQ&8,;9n:n6$TWO|*#pICD|1))/E4j%%?U&+n+sVYy$A", "C`%tTQv%I:/t^ev%u&*ZntJ4!)I{u.zo$kAHEy_o<~!&`_|", "z4})!yWo5QiY7zM}7lY(c(I<p#IKn+be9zKZsU|(!Q7zg!TzEPSa3Q&SWxk", "l;~9{~(AF9", '9{(W@H;QPWD.aI}n";?89Ub=/|M.mF!}rd74hNm3Ou&h0', "EQ{SJUU{t:ht7v", 'Ne18qR!v#F"c`;#*)=IEl20', "3Q<H5,Co^:fl]F:3WdZ$JU0", ']&3H";[2I~F`[;fnytcS6MpuT&%|eT`3C=]JeDR4gl|NyI_&|QGW{6*]', "z{j!TQ2&ZbI`&C5&w:?Ap;]J{966DE2ZJd}PV}ZZvQTM]", 'A{B>:M3ui"wXrg#4=EASk+Q5xFb.|F,z<_l9Ld}~E&CB,_K^zktc4', '(LAci!9%:&N&,"[T;.DWk)J|T&<a?Tx&LUVH~{55$', "PQKI*R~}&=PJ[Bs}UlVWwL0,c", 'WLZPtQ+2dPu%h$]Z;yb4"/@AoUfN__', "qYsaZtB5TF0Zwv", "72a!>iK(#F1cw.}u(zgaLEOoh~^M]Gen2d(AtFB|k.v+[_", "I3PiYhvxXPnlLThu1FX!IF$Z^:o", 'O6s!AUI{&FCe*TO23:jnsUY~{b/2zEAnXtC!.W^{Xu#tJ/PK*"P)5J89,P', "^yV>G,?Z,#gg`_K2Ol4HcNC(m~J&f.xZv$yzNhrS]b>U};W4qQya(++2c", 'S1cWqh?ZEQrl|GF^arYa2}<2J.($,OYz<LF(9H5uR&"If.Xn_#>aQs8Gb=', "s6(SL+~~P*k%6hl4T;ncNGU~m:@1W.(o{n3S_Y0", "Lz>8[OxZt:*JeTm2tLj$~(^={r=2LMIn!1{Hwl#|xQcvx_Fo&QY`wSE#k*", "gP+`sH@A=*12Ov239zY`nlxyPW@~E$}/wdS8", "j>{HByc9#(|*%_$&(PM)m;gouF`IT_j}FU0cmH&GuF?hzEl^Tz18|", '!MnPtHv&uu{$0_TfbL<$kd"Ah)uNe$OoK)k`Hh}{Z#:K0_', "u{(>3l#BW~0cvR6Kw0", ')y"SQFD|n#.3;6]%)Q_', "/)zdBeJNSx,rt$B}5dPZqhe#$", '*}ZHot"|*"+4g+c', "Ze;H!e#oP:b,2eV>y_i;:R`Z$", 'wMMP6I9<YU=es5z>V"Ki>Sy&J:?>="]kRc8dNR1<b=aR]', 'oc/neJ,~<~Vnu+NzK}oJXNd5"&a(".goslR9glJjm:x60', ">4NHhM6yQ*!ns;Q3oQ?8", "9Q]I{~.9&ud.1lQ>kYK)wHEjN(W#VC#ZK48Jg/)ZBFIX$fHu", '"`jn^tSvN&|N5Ofu^4;Pw;fByP4H`Mc%O^;>Eas{a(3*+Kz5Y^8`%', "0{ZWEd9Z*bO90_,2;^v", 'w*xt~a%Z4&veB6fK}="pmjW5XFcD}_23A$kI&', "T`O`8M5Q>:#@R$AKR6>W2ti%z.ZHrF*gA]", 'Je:d{yk#:">WQG#3S=]).!_oI|wF]', 'he(nC2d4_F4NI"b3t^TP+Sx%m:&Jx%r2t0', '`M,tJOH{2PveLIZ43)ogsU4B?(F,Sl5K#:")^+qKHrK*5!8', "6:/$*RKJDqwXuvZ3(Q}Z_(W3_", ">3N>)#j4LqTy>_zo0PoJ>O+2A", '!nZ>JYs=+"&hL$m3(;Ec?+pAP.f.oI]%CF3tiHo5H*&hEEbehyb49H0', "7LhnsSkuI:q_F_)53:*d6I2ZE&nU7hm4`}tdKt%S&#K|PIK>W3#$:{)&?U##]", "T#/P]{9%OuwVl6tfJU_", "{=`cTOLA*#s6u/8", 'k1aAd+Wo|&IXfBK>@"(W/}v6Zbf5]', "Fl8`V!c&2Pe@3vK3.`#S}tgJ,&eSnz`*x}w>BJ}~/~TIwzO}3cv", ')P#SS6k|7Ubrwv.gC55`nj%x=.Et4M9uMQ=A"/4AbFv|6RGZ2F.Hr#0', '5y{H9<iY/x4AO.Xe"cazs;y~@)9M{Kbe{ev', '={_YRU>9+Pz:eM5*5Y#H@HTS3x7u?lLfir54^y]5T#8cT"n4JUs4WNS~5Q?', "&;nP9YNoc~#beMMzL3iHd#JQm1", "@PWtVh~}[|?,]", "LUH!FfZ&M@4~GO43,t5`DN8SU#GSr_A", '.$O`b{m]yP,"FOp%$EfE#YRNEQe88R//@c54j;DBUq;Kwz+fx3m)~(0', "CE;SbI<}yu%HylGn/;sn)f#|>@", "bM0);!JQg.ESZDg*|{)Pz", "od2g(fj3c", 'N1NPK/BQT"3Hq.`%@FJ4W2dB5=', "t_:)GJp#3|DAA/V2=#CHCM%Gf1Zg]", "PEb`aR|]qU|y2en3~;]g]<M&sxMtRM`&WQZ>iYA]", "|=jz+O+Sg.X@FOYz]P#HGBFZW1e>nz1>rLxd(eS&C", ":U^`[HIc]#i6:%Hfz{{S{+S~GQ*Jkzjg>;g4zH(oq1/2Fg;%p==83!0", 'K}O9*SY{I~!.{|YnWy;HIG_|3~"2DM#e{;PcErgR[~2hk~ofn)+9wiYSMF2H0', "/y5`>)J]LUDty$%o", "h*.SYYm*()zIVeV2(QX8A<R|G|<&{|Z*_4CA!e0", "GMQc7)aAO=NRX.`42_xt^,NN$", "_58dxM>&LU4NyMXKPE9)%", "Mk+d^6x&nF`%%_", 'F3x)6h{=T"wR`O_nw2C8Z', "keeY{aXdk:i6{vz5(}u4]IZ=R#S>|MMfhUs;8!Z<OP{l.RgoVz#$ey0", "@`ZH5JmQc~fSCI#4v)LWv(e|P~dH[lc", "fM<AaYE#Hri6`_=ff3uI9R0^yuh5vKhK);eHh(/G_FP3;6jo3;1AF6|]", "8{u8[pB#RPB%hMx^{U5aU2B5L&jrn+UZ}QFWr6;49:!HCIi}$`JC", "K){WZDuAB@F,k.H/^Q`cptIc[1", "VYiA3j&v", "/]eFE#<I", "8@2VQ`n#j,6vd?}yDzmSooU).40aWs}y.(wb.D8p!EaGTkD@s@F9S", "`o!XF1N{EiHQ%0bY~r4e<</^:Z2pS8bYQxC+hh7B~FH|K*%Ua3", 'OSAJ!"LKc=QyPGT33Sr(#s!HDxYC.!e#lp%Cn', "*yTH", "bSw&p?W8", "bd/naR1v", 'EuJTC"mI', "j;}F", "<ZJFV#t", "jurk", "Rdq(t%!", "b_{v$R*K", "S_76Lp*K", "__/v", "b_4f@jsK", "._YR*R:K", ";T4fF#0K", "e1af:", "b_4f*RTxyQ", ",U0e6%}Q9a", "m*F7ii8AyQ", "%E2e&fbK", "yEpRfi:K", "6TfBw4dK", "b_4f*R:K", ";T{vSDaK", "s,|+epbK", "D;|ee#sK", "],76mD:K", "eCpRtfIJ", '"lle)', "x_{v", "/_4BQ", ",1]ex", "6hME{0UK", "2t8()", "],Eeo[$K", "e(E+xp!", "],Ee)#SK", ";T|eFR1J", "6T>e~DhK", "xCpRtf!", "r/*{eZpG", "syC?$lBL", ")_ciEUGL", "Hk?2yu+", "Q29D|i/L", "2Ob:X.NL", "#YcAwl=L", "#Y#?2", '2+#"O$oseWbNP~pV=+:v~h3', '|rOCxGk_"Q)=;*T(XRhBok739S[&D/F', 'f{HlLGR<,"4Pp]W_M{Q6]i?', "/_2YU7lW@,(mPs~B#3C.tl)d<FEg[q!", "/_2YU7lW@,RoY(v)TI2.Y{iW7/,", "*p>sg=:", "+Os?t(51", "QN^A", "k3(.", "Lt@K", "|eJx", "D#@K", "LtFxo", "GfVx", "a!Z.", "Yt>+", "L_af#i,K", "8(`v1=pJ", 'JW`vU"rK', "S*%Rii*K", ">(c+", "u,8(", "y1Eeu4dK", "2Bc+", "S1cejRaK", "1C8o1D$K", "&y:vDi:K", "Md%Y~D!", "S1ceUPTK", "!fEc", "t(U~8ZXH", "Ko,_CMJ", "j?03*g%z", "MAE>RvJz", "VyHuBw{R", '9"L7V^jf', "]U{:2IEf", ')X7m"|D', "hmtb+:>f", "mx;H@&,f", "lB{q~^kf", "lBl7m", "*{zc9VTsmdQHw~+U[{}t~0A", "ON_M+r)jE/9zZ!;TC:lS=)8`hyp(Q&0", 'J|Nz&H<*y"vU0_69c|1!_Rf', "*{zc9VTsE!yY=[LDeKS$,TXGmdQHw~8", "%$OXEBfFKWTLX{&l6:O}XwDFB%W", ":^C[H7A", "RyOhw1,x", "Ab&z", "bfocHIx", "UDSf1#+^", "goPlh", "[EpRfi:K", "S1ce>fGK"]), bB(Pc = function(...cB) {
      bB(cB[tB[13]] = tB[1], cB[tB[15]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], cB[tB[2]] = tB[18], cB[tB[14]] = []);
      try {
        bB(cB[tB[2]] = Object, cB[tB[14]][tB[27]]("".__proto__.constructor.name))
      } catch (Mc) {}
      cB: for (cB[tB[4]] = tB[1]; cB[tB[4]] < cB[tB[15]][tB[13]]; cB[tB[4]]++) try {
        for (cB[tB[2]] = cB[tB[15]][cB[tB[4]]](), cB[tB[16]] = tB[1]; cB[tB[16]] < cB[tB[14]][tB[13]]; cB[tB[16]]++)
          if (typeof cB[tB[2]][cB[tB[14]][cB[tB[16]]]] === tB[17]) continue cB;
        return cB[tB[2]]
      } catch (Mc) {}
      return cB[tB[2]] || this
    }() || {}, qB = Pc.TextDecoder, Oc = Pc.Uint8Array, Tc = Pc.QV, fc = Pc.String || String, mB = Pc.Array || Array, ec = function(...cB) {
      return bB(cB[tB[13]] = tB[1], cB[tB[5]] = new mB(tB[85]), cB[-tB[28]] = fc[tB[24]] || fc.fromCharCode, cB[tB[19]] = []),
        function(...Bc) {
          for (bB(Bc[tB[13]] = tB[2], Bc[tB[5]] = tB[18], Bc[tB[14]] = tB[18], Bc[tB[21]] = Bc[tB[1]][tB[13]], cB[tB[19]][tB[13]] = tB[1]), Bc[-tB[20]] = tB[1]; Bc[-tB[20]] < Bc[tB[21]];) bB(Bc[tB[14]] = Bc[tB[1]][Bc[-tB[20]]++], Bc[tB[14]] <= tB[97] ? Bc[tB[5]] = Bc[tB[14]] : Bc[tB[14]] <= 223 ? Bc[tB[5]] = (Bc[tB[14]] & tB[98]) << tB[23] | Bc[tB[1]][Bc[-tB[20]]++] & tB[22] : Bc[tB[14]] <= tB[133] ? Bc[tB[5]] = (Bc[tB[14]] & tB[99]) << tB[26] | (Bc[tB[1]][Bc[-tB[20]]++] & tB[22]) << tB[23] | Bc[tB[1]][Bc[-tB[20]]++] & tB[22] : fc[tB[24]] ? Bc[tB[5]] = (Bc[tB[14]] & tB[25]) << tB[100] | (Bc[tB[1]][Bc[-tB[20]]++] & tB[22]) << tB[26] | (Bc[tB[1]][Bc[-tB[20]]++] & tB[22]) << tB[23] | Bc[tB[1]][Bc[-tB[20]]++] & tB[22] : (Bc[tB[5]] = tB[22], Bc[-tB[20]] += tB[4]), cB[tB[19]][tB[27]](cB[tB[5]][Bc[tB[5]]] || (cB[tB[5]][Bc[tB[5]]] = cB[-tB[28]](Bc[tB[5]]))));
          return cB[tB[19]].join("")
        }
    }()), Sc(80) in zB && function(...cB) {
      cB[tB[13]] = tB[1]
    }();
    const pc = Ic()[Sc(tB[58])](),
      hc = Ic()[Sc(tB[58])](),
      aB = Ic()[Sc(tB[58])](),
      lc = Ic()[Sc(tB[58])](),
      Yc = Ic()[Sc(tB[58])](),
      Lc = Ic()[Sc(tB[58])](),
      gB = Ic()[Sc(tB[58])](),
      Uc = (...cB) => {
        function Bc(...cB) {
          return cB[tB[13]] = tB[2], typeof sc[cB[tB[1]]] === tB[17] ? sc[cB[tB[1]]] = function(...cB) {
            for (bB(cB[tB[13]] = tB[2], cB[tB[2]] = 'tGI]gpiWFZkUfYcnXbeahrqOSPDjHdVLTsmMAENQBoRu_*KC?^lJw2y.~8:+31v%</7)"|5#9z;$=[@0,>4}x&!{(6`', cB[tB[44]] = "" + (cB[tB[1]] || ""), cB[tB[21]] = cB[tB[44]].length, cB[tB[53]] = [], cB[tB[8]] = tB[1], cB[tB[23]] = tB[1], cB[tB[25]] = -tB[2]), cB[tB[59]] = tB[1]; cB[tB[59]] < cB[tB[21]]; cB[tB[59]]++)
              if (cB[tB[6]] = cB[tB[2]].indexOf(cB[tB[44]][cB[tB[59]]]), cB[tB[6]] !== -tB[2])
                if (cB[tB[25]] < tB[1]) cB[tB[25]] = cB[tB[6]];
                else {
                  bB(cB[tB[25]] += cB[tB[6]] * tB[29], cB[tB[8]] |= cB[tB[25]] << cB[tB[23]], cB[tB[23]] += (cB[tB[25]] & tB[30]) > tB[31] ? tB[32] : tB[33]);
                  do {
                    bB(cB[tB[53]].push(cB[tB[8]] & tB[12]), cB[tB[8]] >>= tB[11], cB[tB[23]] -= tB[11])
                  } while (cB[tB[23]] > tB[25]);
                  cB[tB[25]] = -tB[2]
                } return cB[tB[25]] > -tB[2] && cB[tB[53]].push((cB[tB[8]] | cB[tB[25]] << cB[tB[23]]) & tB[12]), yB(cB[tB[53]])
          }(Mc[cB[tB[1]]]) : sc[cB[tB[1]]]
        }
        cB[tB[13]] = tB[4];
        const nc = Lc;
        return Ic()[Bc(tB[31]) + Bc(89)](nc, cB[tB[14]]), Ic()[Bc(tB[107])](cB[tB[1]], nc, Ic()[Bc(tB[29])](nc, cB[tB[2]]))
      };

    function bB() {
      bB = function() {}
    }
    uc = (...cB) => {
      function Bc(...cB) {
        return cB[tB[13]] = tB[2], typeof sc[cB[tB[1]]] === tB[17] ? sc[cB[tB[1]]] = function(...cB) {
          for (bB(cB[tB[13]] = tB[2], cB[tB[5]] = '!JKlW/7O+(v5*H._$}bQa{VLG),2:@xYemd]SyszT~91w;UurP0E^`h6NCk>t=&<8n?|4[%pqoBIRf#ZDi"cXjA3gFM', cB[-tB[48]] = "" + (cB[tB[1]] || ""), cB[tB[4]] = cB[-tB[48]].length, cB[-tB[62]] = [], cB[tB[37]] = tB[1], cB[tB[9]] = tB[1], cB[tB[25]] = -tB[2]), cB[-tB[60]] = tB[1]; cB[-tB[60]] < cB[tB[4]]; cB[-tB[60]]++)
            if (cB[tB[61]] = cB[tB[5]].indexOf(cB[-tB[48]][cB[-tB[60]]]), cB[tB[61]] !== -tB[2])
              if (cB[tB[25]] < tB[1]) cB[tB[25]] = cB[tB[61]];
              else {
                bB(cB[tB[25]] += cB[tB[61]] * tB[29], cB[tB[37]] |= cB[tB[25]] << cB[tB[9]], cB[tB[9]] += (cB[tB[25]] & tB[30]) > tB[31] ? tB[32] : tB[33]);
                do {
                  bB(cB[-tB[62]].push(cB[tB[37]] & tB[12]), cB[tB[37]] >>= tB[11], cB[tB[9]] -= tB[11])
                } while (cB[tB[9]] > tB[25]);
                cB[tB[25]] = -tB[2]
              } return cB[tB[25]] > -tB[2] && cB[-tB[62]].push((cB[tB[37]] | cB[tB[25]] << cB[tB[9]]) & tB[12]), yB(cB[-tB[62]])
        }(Mc[cB[tB[1]]]) : sc[cB[tB[1]]]
      }
      cB[tB[13]] = tB[11];
      const nc = cB[tB[1]][Bc(tB[63])][Bc(93) + Bc(94) + Bc(tB[103])](cB[tB[2]]);
      cB[tB[11]] = cB[tB[1]][Bc(tB[63])][Bc(tB[71]) + Bc(tB[72]) + Bc(tB[73]) + Bc(tB[74])](nc);
      const Vc = cB[tB[11]] === tB[64] ? cB[tB[1]][Bc(tB[63])][Bc(100) + Bc(101) + Bc(102)](cB[tB[2]], Bc(tB[65]) + Bc(tB[66]) + Bc(tB[67]) + tB[8]) : cB[tB[11]][Bc(tB[65]) + Bc(tB[66]) + Bc(tB[67]) + tB[8]],
        uc = cB[tB[11]] === tB[64] ? cB[tB[1]][Bc(tB[63])][Bc(tB[75]) + Bc(tB[76]) + Bc(tB[77]) + Bc(tB[78])](cB[tB[2]], Bc(tB[68]) + Bc(tB[69]) + Bc(tB[70])) : cB[tB[11]][Bc(tB[68]) + Bc(tB[69]) + Bc(tB[70])];
      bB(Ic()[Bc(113)](pc, tB[1], tB[1], cB[tB[37]]), Ic().fu(pc, pc, Ic()[Bc(tB[54])], cB[tB[4]].heading), Ic()[Bc(tB[20])](gB, cB[tB[10]].Qu), gB[tB[2]] = tB[1]);
      const Pc = cB[tB[14]][Bc(116) + Bc(117)]();
      if (bB(cB[tB[11]] = cB[tB[1]][Bc(tB[63])][Bc(tB[71]) + Bc(tB[72]) + Bc(tB[73]) + Bc(tB[74])](nc), cB[-tB[112]] = cB[tB[11]] === tB[64] ? cB[tB[1]][Bc(tB[63])][Bc(tB[75]) + Bc(tB[76]) + Bc(tB[77]) + Bc(tB[78])](cB[tB[2]], Bc(tB[79]) + Bc(tB[80])) : cB[tB[11]][Bc(tB[79]) + Bc(tB[80])]), !Pc && Ic()[tB[111]](gB) && (cB[tB[11]] === tB[64] ? cB[tB[1]][Bc(tB[63])][Bc(tB[75]) + Bc(tB[76]) + Bc(tB[77]) + Bc(tB[78])](cB[tB[2]], Bc(tB[81]) + Bc(tB[82]) + Bc(tB[83]) + Bc(tB[84])) : cB[tB[11]][Bc(tB[81]) + Bc(tB[82]) + Bc(tB[83]) + Bc(tB[84])])) {
        function mB(cB) {
          var Bc, nc, Vc, Ic, rB, uc, sc;
          for (bB(Bc = "" + (cB || ""), nc = Bc.length, Vc = [], Ic = tB[1], rB = tB[1], uc = -tB[2]), sc = tB[1]; sc < nc; sc++) {
            var Mc = ':GcQfF6~.KxI!uXt1/?)UJ>LW+#|oa9kY=[N0B8p_OSe&}AD`s,CMVRTH$"(3qi<@Emzv5h{;nlZ7]P4gdy2^w*rj%b'.indexOf(Bc[sc]);
            if (Mc !== -tB[2])
              if (uc < tB[1]) uc = Mc;
              else {
                bB(uc += Mc * tB[29], Ic |= uc << rB, rB += (uc & tB[30]) > tB[31] ? tB[32] : tB[33]);
                do {
                  bB(Vc.push(Ic & tB[12]), Ic >>= tB[11], rB -= tB[11])
                } while (rB > tB[25]);
                uc = -tB[2]
              }
          }
          return uc > -tB[2] && Vc.push((Ic | uc << rB) & tB[12]), yB(Vc)
        }

        function ec(...cB) {
          return cB[tB[13]] = tB[2], typeof sc[cB[tB[1]]] === tB[17] ? sc[cB[tB[1]]] = mB(Mc[cB[tB[1]]]) : sc[cB[tB[1]]]
        }

        function Sc() {
          function cB(...cB) {
            return cB[tB[13]] = tB[2], typeof sc[cB[tB[1]]] === tB[17] ? sc[cB[tB[1]]] = function(...cB) {
              for (bB(cB[tB[13]] = tB[2], cB[tB[2]] = 'Xt10{[YuA*ULjn;Nf6|Zv@8,3Q7b5ys?DB)2mK}COM4al"w>EJh]iF&%V_9rH+Go/`e!I~R#(.g^zP$px=qS:k<WdTc', cB[tB[86]] = "" + (cB[tB[1]] || ""), cB[-tB[85]] = cB[tB[86]].length, cB[tB[53]] = [], cB[tB[37]] = tB[1], cB[-tB[39]] = tB[1], cB[tB[25]] = -tB[2]), cB[tB[11]] = tB[1]; cB[tB[11]] < cB[-tB[85]]; cB[tB[11]]++)
                if (cB[tB[61]] = cB[tB[2]].indexOf(cB[tB[86]][cB[tB[11]]]), cB[tB[61]] !== -tB[2])
                  if (cB[tB[25]] < tB[1]) cB[tB[25]] = cB[tB[61]];
                  else {
                    bB(cB[tB[25]] += cB[tB[61]] * tB[29], cB[tB[37]] |= cB[tB[25]] << cB[-tB[39]], cB[-tB[39]] += (cB[tB[25]] & tB[30]) > tB[31] ? tB[32] : tB[33]);
                    do {
                      bB(cB[tB[53]].push(cB[tB[37]] & tB[12]), cB[tB[37]] >>= tB[11], cB[-tB[39]] -= tB[11])
                    } while (cB[-tB[39]] > tB[25]);
                    cB[tB[25]] = -tB[2]
                  } return cB[tB[25]] > -tB[2] && cB[tB[53]].push((cB[tB[37]] | cB[tB[25]] << cB[-tB[39]]) & tB[12]), yB(cB[tB[53]])
            }(Mc[cB[tB[1]]]) : sc[cB[tB[1]]]
          }! function(...cB) {
            function Bc(...cB) {
              for (bB(cB[tB[13]] = tB[2], cB[-tB[89]] = [], cB[tB[87]] = tB[1], cB[tB[4]] = cB[tB[1]].length, cB[-tB[88]] = tB[18], cB[tB[8]] = tB[18]); cB[tB[87]] < cB[tB[4]];) bB(cB[-tB[88]] = cB[tB[1]].charCodeAt(cB[tB[87]]++), cB[-tB[88]] >= tB[94] && cB[-tB[88]] <= tB[124] && cB[tB[87]] < cB[tB[4]] ? (cB[tB[8]] = cB[tB[1]].charCodeAt(cB[tB[87]]++), (cB[tB[8]] & tB[125]) == tB[95] ? cB[-tB[89]].push(((cB[-tB[88]] & tB[90]) << tB[38]) + (cB[tB[8]] & tB[90]) + tB[92]) : (cB[-tB[89]].push(cB[-tB[88]]), cB[tB[87]]--)) : cB[-tB[89]].push(cB[-tB[88]]));
              return cB[-tB[89]]
            }

            function nc(...cB) {
              if (cB[tB[13]] = tB[2], cB[tB[1]] >= tB[94] && cB[tB[1]] <= tB[129]) {
                function Bc(...cB) {
                  for (bB(cB[tB[13]] = tB[2], cB[tB[5]] = '+OLsdp%6:(D~G9gkNJvC1Wl3>25`fTuH?,Y]7V0F/|zyx@thBbq_cA=}8<{e;QMPn&KE*a^$U4w#jiZr."[o)ISmX!R', cB[tB[14]] = "" + (cB[tB[1]] || ""), cB[-tB[96]] = cB[tB[14]].length, cB[tB[53]] = [], cB[tB[8]] = tB[1], cB[tB[23]] = tB[1], cB[tB[25]] = -tB[2]), cB[tB[50]] = tB[1]; cB[tB[50]] < cB[-tB[96]]; cB[tB[50]]++)
                    if (cB[tB[6]] = cB[tB[5]].indexOf(cB[tB[14]][cB[tB[50]]]), cB[tB[6]] !== -tB[2])
                      if (cB[tB[25]] < tB[1]) cB[tB[25]] = cB[tB[6]];
                      else {
                        bB(cB[tB[25]] += cB[tB[6]] * tB[29], cB[tB[8]] |= cB[tB[25]] << cB[tB[23]], cB[tB[23]] += (cB[tB[25]] & tB[30]) > tB[31] ? tB[32] : tB[33]);
                        do {
                          bB(cB[tB[53]].push(cB[tB[8]] & tB[12]), cB[tB[8]] >>= tB[11], cB[tB[23]] -= tB[11])
                        } while (cB[tB[23]] > tB[25]);
                        cB[tB[25]] = -tB[2]
                      } return cB[tB[25]] > -tB[2] && cB[tB[53]].push((cB[tB[8]] | cB[tB[25]] << cB[tB[23]]) & tB[12]), yB(cB[tB[53]])
                }

                function nc(...cB) {
                  return cB[tB[13]] = tB[2], typeof sc[cB[tB[1]]] === tB[17] ? sc[cB[tB[1]]] = Bc(Mc[cB[tB[1]]]) : sc[cB[tB[1]]]
                }
                throw Error(nc(125) + nc(126) + nc(tB[97]) + cB[tB[1]].toString(tB[19]).toUpperCase() + (nc(tB[85]) + nc(tB[114]) + nc(130) + nc(131)))
              }
            }

            function Vc(...Bc) {
              return Bc[tB[13]] = tB[14], cB[tB[5]](Bc[tB[1]] >> Bc[tB[2]] & tB[22] | tB[85])
            }

            function Ic(...Bc) {
              return Bc[tB[13]] = tB[2], (Bc[tB[1]] & tB[132]) == tB[1] ? cB[tB[5]](Bc[tB[1]]) : (Bc[tB[5]] = "", (Bc[tB[1]] & tB[134]) == tB[1] ? Bc[tB[5]] = cB[tB[5]](Bc[tB[1]] >> tB[23] & tB[98] | tB[109]) : (Bc[tB[1]] & tB[135]) == tB[1] ? bB(nc(Bc[tB[1]]), Bc[tB[5]] = cB[tB[5]](Bc[tB[1]] >> tB[26] & tB[99] | tB[57]), Bc[tB[5]] += Vc(Bc[tB[1]], tB[23])) : (Bc[tB[1]] & tB[136]) == tB[1] && bB(Bc[tB[5]] = cB[tB[5]](Bc[tB[1]] >> tB[100] & tB[25] | tB[110]), Bc[tB[5]] += Vc(Bc[tB[1]], tB[26]), Bc[tB[5]] += Vc(Bc[tB[1]], tB[23])), Bc[tB[5]] += cB[tB[5]](Bc[tB[1]] & tB[22] | tB[85]), Bc[tB[5]])
            }

            function rB(...Bc) {
              if (Bc[tB[13]] = tB[1], cB[tB[108]] >= cB[tB[4]]) {
                function nc(...cB) {
                  for (bB(cB[tB[13]] = tB[2], cB[-tB[29]] = '3HZTDWUgAx?VFX[1f24{O}wKsS`Lym:v"YPp|*I@+(!MdGn_r=Bk;)juE/ic]~qe,bRQz6907&o8$<^JN.l#h%t>C5a', cB[-tB[105]] = "" + (cB[tB[1]] || ""), cB[tB[4]] = cB[-tB[105]].length, cB[tB[53]] = [], cB[tB[37]] = tB[1], cB[tB[23]] = tB[1], cB[-tB[106]] = -tB[2]), cB[tB[50]] = tB[1]; cB[tB[50]] < cB[tB[4]]; cB[tB[50]]++)
                    if (cB[tB[61]] = cB[-tB[29]].indexOf(cB[-tB[105]][cB[tB[50]]]), cB[tB[61]] !== -tB[2])
                      if (cB[-tB[106]] < tB[1]) cB[-tB[106]] = cB[tB[61]];
                      else {
                        bB(cB[-tB[106]] += cB[tB[61]] * tB[29], cB[tB[37]] |= cB[-tB[106]] << cB[tB[23]], cB[tB[23]] += (cB[-tB[106]] & tB[30]) > tB[31] ? tB[32] : tB[33]);
                        do {
                          bB(cB[tB[53]].push(cB[tB[37]] & tB[12]), cB[tB[37]] >>= tB[11], cB[tB[23]] -= tB[11])
                        } while (cB[tB[23]] > tB[25]);
                        cB[-tB[106]] = -tB[2]
                      } return cB[-tB[106]] > -tB[2] && cB[tB[53]].push((cB[tB[37]] | cB[-tB[106]] << cB[tB[23]]) & tB[12]), yB(cB[tB[53]])
                }

                function Vc(...cB) {
                  return cB[tB[13]] = tB[2], typeof sc[cB[tB[1]]] === tB[17] ? sc[cB[tB[1]]] = nc(Mc[cB[tB[1]]]) : sc[cB[tB[1]]]
                }
                throw Error(Vc(132))
              }
              if (bB(Bc[tB[44]] = cB[-tB[107]][cB[tB[108]]] & tB[12], cB[tB[108]]++), (Bc[tB[44]] & tB[109]) == tB[85]) return Bc[tB[44]] & tB[22];
              throw Error(function(cB) {
                return typeof sc[cB] === tB[17] ? sc[cB] = function(...cB) {
                  for (bB(cB[tB[13]] = tB[2], cB[tB[5]] = '2scbASnTBaKUFIpoi|q7xEm>_8X@{<.NC!DlM(#1rLfW6,]tw*Qh}P^yJ:4)R/`9"[=gvH$?VZk+Gj;u&3YOz05%d~e', cB[tB[102]] = "" + (cB[tB[1]] || ""), cB[tB[21]] = cB[tB[102]].length, cB[tB[104]] = [], cB[tB[37]] = tB[1], cB[tB[9]] = tB[1], cB[tB[25]] = -tB[2]), cB[tB[103]] = tB[1]; cB[tB[103]] < cB[tB[21]]; cB[tB[103]]++)
                    if (cB[tB[43]] = cB[tB[5]].indexOf(cB[tB[102]][cB[tB[103]]]), cB[tB[43]] !== -tB[2])
                      if (cB[tB[25]] < tB[1]) cB[tB[25]] = cB[tB[43]];
                      else {
                        bB(cB[tB[25]] += cB[tB[43]] * tB[29], cB[tB[37]] |= cB[tB[25]] << cB[tB[9]], cB[tB[9]] += (cB[tB[25]] & tB[30]) > tB[31] ? tB[32] : tB[33]);
                        do {
                          bB(cB[tB[104]].push(cB[tB[37]] & tB[12]), cB[tB[37]] >>= tB[11], cB[tB[9]] -= tB[11])
                        } while (cB[tB[9]] > tB[25]);
                        cB[tB[25]] = -tB[2]
                      } return cB[tB[25]] > -tB[2] && cB[tB[104]].push((cB[tB[37]] | cB[tB[25]] << cB[tB[9]]) & tB[12]), yB(cB[tB[104]])
                }(Mc[cB]) : sc[cB]
              }(133))
            }

            function uc() {
              var Bc, Vc, Ic, uc, Pc;
              if (bB(Vc = void 0, Ic = void 0, uc = void 0, Pc = void 0), cB[tB[108]] > cB[tB[4]]) {
                function qB(...cB) {
                  for (bB(cB[tB[13]] = tB[2], cB[tB[5]] = '?Aod^"k=:CT_Ju$e&fcDLr+@<)I#.zQ6lVpW8*sv{USm9%Y!|MXNZ3(;>EFaK]1,n4t2w7~0`qRBGh[xPOgHib/jy}5', cB[tB[44]] = "" + (cB[tB[1]] || ""), cB[tB[4]] = cB[tB[44]].length, cB[tB[53]] = [], cB[tB[8]] = tB[1], cB[tB[23]] = tB[1], cB[tB[25]] = -tB[2]), cB[tB[11]] = tB[1]; cB[tB[11]] < cB[tB[4]]; cB[tB[11]]++)
                    if (cB[tB[6]] = cB[tB[5]].indexOf(cB[tB[44]][cB[tB[11]]]), cB[tB[6]] !== -tB[2])
                      if (cB[tB[25]] < tB[1]) cB[tB[25]] = cB[tB[6]];
                      else {
                        bB(cB[tB[25]] += cB[tB[6]] * tB[29], cB[tB[8]] |= cB[tB[25]] << cB[tB[23]], cB[tB[23]] += (cB[tB[25]] & tB[30]) > tB[31] ? tB[32] : tB[33]);
                        do {
                          bB(cB[tB[53]].push(cB[tB[8]] & tB[12]), cB[tB[8]] >>= tB[11], cB[tB[23]] -= tB[11])
                        } while (cB[tB[23]] > tB[25]);
                        cB[tB[25]] = -tB[2]
                      } return cB[tB[25]] > -tB[2] && cB[tB[53]].push((cB[tB[8]] | cB[tB[25]] << cB[tB[23]]) & tB[12]), yB(cB[tB[53]])
                }

                function Oc(...cB) {
                  return cB[tB[13]] = tB[2], typeof sc[cB[tB[1]]] === tB[17] ? sc[cB[tB[1]]] = qB(Mc[cB[tB[1]]]) : sc[cB[tB[1]]]
                }
                throw Error(Oc(134))
              }
              if (cB[tB[108]] == cB[tB[4]]) return tB[56];
              if (bB(Bc = cB[-tB[107]][cB[tB[108]]] & tB[12], cB[tB[108]]++), (Bc & tB[85]) == tB[1]) return Bc;
              if ((Bc & tB[57]) == tB[109]) {
                if (bB(Vc = rB(), Pc = (Bc & tB[98]) << tB[23] | Vc), Pc >= tB[85]) return Pc;
                throw Error(ec(tB[3]))
              }
              if ((Bc & tB[110]) == tB[57]) {
                if (bB(Vc = rB(), Ic = rB(), Pc = (Bc & tB[99]) << tB[26] | Vc << tB[23] | Ic), Pc >= tB[145]) return nc(Pc), Pc;
                throw Error(ec(tB[3]))
              }
              if ((Bc & tB[87]) == tB[110] && (bB(Vc = rB(), Ic = rB(), uc = rB(), Pc = (Bc & tB[25]) << tB[100] | Vc << tB[26] | Ic << tB[23] | uc), Pc >= tB[92] && Pc <= tB[147])) return Pc;
              throw Error(ec(136))
            }
            bB(cB[tB[13]] = tB[2], cB[tB[5]] = String.fromCharCode), bB(cB[-tB[107]] = tB[18], cB[tB[4]] = tB[18], cB[tB[108]] = tB[18]), bB(cB[tB[1]].version = ec(137), cB[tB[1]].encode = function(...cB) {
              for (bB(cB[tB[13]] = tB[2], cB[tB[5]] = Bc(cB[tB[1]]), cB[tB[44]] = cB[tB[5]].length, cB[tB[21]] = -tB[2], cB[tB[10]] = tB[18], cB[tB[101]] = ""); ++cB[tB[21]] < cB[tB[44]];) bB(cB[tB[10]] = cB[tB[5]][cB[tB[21]]], cB[tB[101]] += Ic(cB[tB[10]]));
              return cB[tB[101]]
            }, cB[tB[1]].decode = function(nc) {
              var Vc, Ic;
              for (bB(cB[-tB[107]] = Bc(nc), cB[tB[4]] = cB[-tB[107]].length, cB[tB[108]] = tB[1], Vc = [], Ic = void 0);
                (Ic = uc()) !== tB[56];) Vc.push(Ic);
              return function(...Bc) {
                for (bB(Bc[tB[13]] = tB[2], Bc[tB[91]] = Bc[tB[1]].length, Bc[tB[44]] = -tB[2], Bc[tB[4]] = tB[18], Bc[-tB[93]] = ""); ++Bc[tB[44]] < Bc[tB[91]];) Bc[tB[4]] = Bc[tB[1]][Bc[tB[44]]], Bc[tB[4]] > tB[126] && bB(Bc[tB[4]] -= tB[92], Bc[-tB[93]] += cB[tB[5]](Bc[tB[4]] >>> tB[38] & tB[90] | tB[94]), Bc[tB[4]] = tB[95] | Bc[tB[4]] & tB[90]), Bc[-tB[93]] += cB[tB[5]](Bc[tB[4]]);
                return Bc[-tB[93]]
              }(Vc)
            })
          }(typeof exports === cB(tB[42]) + cB(139) ? this.utf8 = {} : exports)
        }
        ec(124) + tB[41] in zB && Sc(), bB(Uc(hc, pc, gB), Uc(aB, gB, pc), Ic()[ec(tB[101])](lc, gB, aB));
        const Lc = Ic()[ec(tB[89])](gB),
          Zc = Ic()[ec(142)](pc, gB) / cB[tB[37]] / Lc,
          Qc = Math[ec(tB[113])](Zc, tB[1]) + tB[2];
        cB[tB[37]] * cB[tB[37]] < Ic()[tB[111]](aB) && Ic()[ec(144)](pc, pc, aB, Qc), bB(cB[-tB[112]] = (0, rB.v)(cB[-tB[112]], 1, Math[ec(tB[113])](tB[2], Math[ec(145)](tB[1], -Zc, tB[2] - Lc / cB[tB[37]]))), Ic()[ec(146)](pc, pc, lc))
      }
      const qB = Yc;
      if (bB(Ic()[Bc(147)](qB, pc, gB), qB[tB[2]] = tB[1], cB[tB[21]] = Ic()[Bc(148)](qB)), !Pc) {
        function Cc(...cB) {
          cB[tB[13]] = tB[1]
        }
        Bc(149) in zB && Cc(), cB[tB[21]] *= cB[-tB[112]]
      }
      const Oc = cB[tB[23]][Bc(150) + Bc(151) + Bc(tB[116])],
        Tc = Oc ? Math[Bc(tB[115])](Oc, cB[tB[21]]) : cB[tB[21]];
      Ic()[Bc(154) + Bc(155)](qB, qB);
      const fc = cB[tB[25]] !== tB[64] && void 0 !== cB[tB[25]] ? cB[tB[25]] : cB[tB[23]][Bc(156) + Bc(157) + Bc(158) + Bc(tB[39])];
      if (Tc > tB[1]) {
        function vB(...cB) {
          for (bB(cB[tB[13]] = tB[2], cB[-tB[34]] = 'x^zG$iwUcf3r{0@?:<=tJLP52hA]&jHl>}*_1B%WF9X/umDZ7+ToQM4(n~R|"eC!bdas,k;IKyp[NvgOSq)EY#V68`.', cB[tB[44]] = "" + (cB[tB[1]] || ""), cB[tB[69]] = cB[tB[44]].length, cB[tB[53]] = [], cB[tB[8]] = tB[1], cB[tB[9]] = tB[1], cB[tB[19]] = -tB[2]), cB[tB[11]] = tB[1]; cB[tB[11]] < cB[tB[69]]; cB[tB[11]]++)
            if (cB[tB[6]] = cB[-tB[34]].indexOf(cB[tB[44]][cB[tB[11]]]), cB[tB[6]] !== -tB[2])
              if (cB[tB[19]] < tB[1]) cB[tB[19]] = cB[tB[6]];
              else {
                bB(cB[tB[19]] += cB[tB[6]] * tB[29], cB[tB[8]] |= cB[tB[19]] << cB[tB[9]], cB[tB[9]] += (cB[tB[19]] & tB[30]) > tB[31] ? tB[32] : tB[33]);
                do {
                  bB(cB[tB[53]].push(cB[tB[8]] & tB[12]), cB[tB[8]] >>= tB[11], cB[tB[9]] -= tB[11])
                } while (cB[tB[9]] > tB[25]);
                cB[tB[19]] = -tB[2]
              } return cB[tB[19]] > -tB[2] && cB[tB[53]].push((cB[tB[8]] | cB[tB[19]] << cB[tB[9]]) & tB[12]), yB(cB[tB[53]])
        }

        function Dc(...cB) {
          return cB[tB[13]] = tB[2], typeof sc[cB[tB[1]]] === tB[17] ? sc[cB[tB[1]]] = vB(Mc[cB[tB[1]]]) : sc[cB[tB[1]]]
        }
        let Nc = cB[tB[14]][Bc(tB[140]) + Dc(161)] * fc;
        if (!Pc) {
          function oc(cB) {
            var Bc, nc, Vc, Ic, rB, uc, sc;
            for (bB(Bc = "" + (cB || ""), nc = Bc.length, Vc = [], Ic = tB[1], rB = tB[1], uc = -tB[2]), sc = tB[1]; sc < nc; sc++) {
              var Mc = 'J]H%+fND=5_@);4I#Be.uRzv|8(g,3dy~WTt*o?s2qQi![mOw`bUx$X6k0pY<7KF&>nEL^V/Aa1hG{Z9CMj:}"lPSrc'.indexOf(Bc[sc]);
              if (Mc !== -tB[2])
                if (uc < tB[1]) uc = Mc;
                else {
                  bB(uc += Mc * tB[29], Ic |= uc << rB, rB += (uc & tB[30]) > tB[31] ? tB[32] : tB[33]);
                  do {
                    bB(Vc.push(Ic & tB[12]), Ic >>= tB[11], rB -= tB[11])
                  } while (rB > tB[25]);
                  uc = -tB[2]
                }
            }
            return uc > -tB[2] && Vc.push((Ic | uc << rB) & tB[12]), yB(Vc)
          }

          function Wc(...cB) {
            return cB[tB[13]] = tB[2], typeof sc[cB[tB[1]]] === tB[17] ? sc[cB[tB[1]]] = oc(Mc[cB[tB[1]]]) : sc[cB[tB[1]]]
          }
          Nc *= cB[tB[14]][Wc(162) + Wc(tB[93])]
        }
        let Ec = cB[tB[14]][Dc(164) + Dc(tB[106]) + "ss"] * Tc;
        if (Tc < .3) {
          function wc(...cB) {
            for (bB(cB[tB[13]] = tB[2], cB[tB[5]] = 'AJRjadBL$u&U85v,6*ZX9lCrsNe3]2}tc7w+#Do^{P_"(;.hW[!Spxbng?>yK~`mEQYf4iFMq1T%VI=kHG)z0/:<|O@', cB[tB[14]] = "" + (cB[tB[1]] || ""), cB[tB[114]] = cB[tB[14]].length, cB[-tB[58]] = [], cB[tB[115]] = tB[1], cB[tB[23]] = tB[1], cB[tB[25]] = -tB[2]), cB[tB[11]] = tB[1]; cB[tB[11]] < cB[tB[114]]; cB[tB[11]]++)
              if (cB[tB[61]] = cB[tB[5]].indexOf(cB[tB[14]][cB[tB[11]]]), cB[tB[61]] !== -tB[2])
                if (cB[tB[25]] < tB[1]) cB[tB[25]] = cB[tB[61]];
                else {
                  bB(cB[tB[25]] += cB[tB[61]] * tB[29], cB[tB[115]] |= cB[tB[25]] << cB[tB[23]], cB[tB[23]] += (cB[tB[25]] & tB[30]) > tB[31] ? tB[32] : tB[33]);
                  do {
                    bB(cB[-tB[58]].push(cB[tB[115]] & tB[12]), cB[tB[115]] >>= tB[11], cB[tB[23]] -= tB[11])
                  } while (cB[tB[23]] > tB[25]);
                  cB[tB[25]] = -tB[2]
                } return cB[tB[25]] > -tB[2] && cB[-tB[58]].push((cB[tB[115]] | cB[tB[25]] << cB[tB[23]]) & tB[12]), yB(cB[-tB[58]])
          }

          function kB(...cB) {
            return cB[tB[13]] = tB[2], typeof sc[cB[tB[1]]] === tB[17] ? sc[cB[tB[1]]] = wc(Mc[cB[tB[1]]]) : sc[cB[tB[1]]]
          }

          function Xc(...cB) {
            function Bc(...cB) {
              return cB[tB[13]] = tB[2], typeof sc[cB[tB[1]]] === tB[17] ? sc[cB[tB[1]]] = function(...cB) {
                for (bB(cB[tB[13]] = tB[2], cB[-tB[118]] = '/wx(])<#z>u0C@tb}6kMBFoJeAqg,4Oh.^G!`sIYyU2p7*%d+c9{;?ia_V:=PRnl~Df85vEX1KT&HLrmQ[Z3"$|jSNW', cB[tB[44]] = "" + (cB[tB[1]] || ""), cB[tB[116]] = cB[tB[44]].length, cB[-tB[120]] = [], cB[tB[8]] = tB[1], cB[tB[23]] = tB[1], cB[tB[41]] = -tB[2]), cB[tB[117]] = tB[1]; cB[tB[117]] < cB[tB[116]]; cB[tB[117]]++)
                  if (cB[-tB[119]] = cB[-tB[118]].indexOf(cB[tB[44]][cB[tB[117]]]), cB[-tB[119]] !== -tB[2])
                    if (cB[tB[41]] < tB[1]) cB[tB[41]] = cB[-tB[119]];
                    else {
                      bB(cB[tB[41]] += cB[-tB[119]] * tB[29], cB[tB[8]] |= cB[tB[41]] << cB[tB[23]], cB[tB[23]] += (cB[tB[41]] & tB[30]) > tB[31] ? tB[32] : tB[33]);
                      do {
                        bB(cB[-tB[120]].push(cB[tB[8]] & tB[12]), cB[tB[8]] >>= tB[11], cB[tB[23]] -= tB[11])
                      } while (cB[tB[23]] > tB[25]);
                      cB[tB[41]] = -tB[2]
                    } return cB[tB[41]] > -tB[2] && cB[-tB[120]].push((cB[tB[8]] | cB[tB[41]] << cB[tB[23]]) & tB[12]), yB(cB[-tB[120]])
              }(Mc[cB[tB[1]]]) : sc[cB[tB[1]]]
            }
            cB[tB[13]] = tB[1],
              function(...cB) {
                function Bc(...cB) {
                  for (bB(cB[tB[13]] = tB[2], cB[tB[2]] = [], cB[-tB[122]] = tB[1], cB[-tB[88]] = cB[tB[1]].length, cB[-tB[123]] = tB[18], cB[tB[121]] = tB[18]); cB[-tB[122]] < cB[-tB[88]];) bB(cB[-tB[123]] = cB[tB[1]].charCodeAt(cB[-tB[122]]++), cB[-tB[123]] >= tB[94] && cB[-tB[123]] <= tB[124] && cB[-tB[122]] < cB[-tB[88]] ? (cB[tB[121]] = cB[tB[1]].charCodeAt(cB[-tB[122]]++), (cB[tB[121]] & tB[125]) == tB[95] ? cB[tB[2]].push(((cB[-tB[123]] & tB[90]) << tB[38]) + (cB[tB[121]] & tB[90]) + tB[92]) : (cB[tB[2]].push(cB[-tB[123]]), cB[-tB[122]]--)) : cB[tB[2]].push(cB[-tB[123]]));
                  return cB[tB[2]]
                }

                function nc(...cB) {
                  if (cB[tB[13]] = tB[2], cB[tB[1]] >= tB[94] && cB[tB[1]] <= tB[129]) {
                    function Bc(...cB) {
                      for (bB(cB[tB[13]] = tB[2], cB[tB[130]] = 'Dxf9<T}OH(bCEtsX,RrL$i^Y%m`5z6|)7!BSvFan>+W"*G.0j;AU{qk/ude1KhNQ8JP2cgZVIp~lw:o_&=#[]?34@yM', cB[tB[44]] = "" + (cB[tB[1]] || ""), cB[tB[122]] = cB[tB[44]].length, cB[tB[53]] = [], cB[tB[8]] = tB[1], cB[tB[23]] = tB[1], cB[-tB[131]] = -tB[2]), cB[tB[50]] = tB[1]; cB[tB[50]] < cB[tB[122]]; cB[tB[50]]++)
                        if (cB[-tB[3]] = cB[tB[130]].indexOf(cB[tB[44]][cB[tB[50]]]), cB[-tB[3]] !== -tB[2])
                          if (cB[-tB[131]] < tB[1]) cB[-tB[131]] = cB[-tB[3]];
                          else {
                            bB(cB[-tB[131]] += cB[-tB[3]] * tB[29], cB[tB[8]] |= cB[-tB[131]] << cB[tB[23]], cB[tB[23]] += (cB[-tB[131]] & tB[30]) > tB[31] ? tB[32] : tB[33]);
                            do {
                              bB(cB[tB[53]].push(cB[tB[8]] & tB[12]), cB[tB[8]] >>= tB[11], cB[tB[23]] -= tB[11])
                            } while (cB[tB[23]] > tB[25]);
                            cB[-tB[131]] = -tB[2]
                          } return cB[-tB[131]] > -tB[2] && cB[tB[53]].push((cB[tB[8]] | cB[-tB[131]] << cB[tB[23]]) & tB[12]), yB(cB[tB[53]])
                    }

                    function nc(...cB) {
                      return cB[tB[13]] = tB[2], typeof sc[cB[tB[1]]] === tB[17] ? sc[cB[tB[1]]] = Bc(Mc[cB[tB[1]]]) : sc[cB[tB[1]]]
                    }
                    throw Error(nc(tB[7]) + nc(168) + nc(169) + cB[tB[1]].toString(tB[19]).toUpperCase() + (nc(170) + nc(171) + nc(tB[40]) + nc(173)))
                  }
                }

                function Vc(...Bc) {
                  return Bc[tB[13]] = tB[14], cB[-tB[128]](Bc[tB[1]] >> Bc[tB[2]] & tB[22] | tB[85])
                }

                function Ic(...Bc) {
                  return Bc[tB[13]] = tB[2], (Bc[tB[1]] & tB[132]) == tB[1] ? cB[-tB[128]](Bc[tB[1]]) : (Bc[tB[133]] = "", (Bc[tB[1]] & tB[134]) == tB[1] ? Bc[tB[133]] = cB[-tB[128]](Bc[tB[1]] >> tB[23] & tB[98] | tB[109]) : (Bc[tB[1]] & tB[135]) == tB[1] ? bB(nc(Bc[tB[1]]), Bc[tB[133]] = cB[-tB[128]](Bc[tB[1]] >> tB[26] & tB[99] | tB[57]), Bc[tB[133]] += Vc(Bc[tB[1]], tB[23])) : (Bc[tB[1]] & tB[136]) == tB[1] && bB(Bc[tB[133]] = cB[-tB[128]](Bc[tB[1]] >> tB[100] & tB[25] | tB[110]), Bc[tB[133]] += Vc(Bc[tB[1]], tB[26]), Bc[tB[133]] += Vc(Bc[tB[1]], tB[23])), Bc[tB[133]] += cB[-tB[128]](Bc[tB[1]] & tB[22] | tB[85]), Bc[tB[133]])
                }

                function rB(...Bc) {
                  if (Bc[tB[13]] = tB[1], cB[tB[14]] >= cB[tB[4]]) throw Error(kB(174));
                  if (bB(Bc[tB[5]] = cB[tB[10]][cB[tB[14]]] & tB[12], cB[tB[14]]++), (Bc[tB[5]] & tB[109]) == tB[85]) return Bc[tB[5]] & tB[22];
                  throw Error(function(...cB) {
                    return cB[tB[13]] = tB[2], typeof sc[cB[tB[1]]] === tB[17] ? sc[cB[tB[1]]] = function(...cB) {
                      for (bB(cB[tB[13]] = tB[2], cB[-tB[138]] = 'uPAi>yK;S%"30{a=UOV8+HnBjIC1s#[vMcQ6GTRXNWw]edt*b!/l.54DkJo9:&,hEpz7~q$f|g)}r<ZF(`^_m@2?LYx', cB[tB[14]] = "" + (cB[tB[1]] || ""), cB[tB[21]] = cB[tB[14]].length, cB[tB[10]] = [], cB[tB[37]] = tB[1], cB[tB[112]] = tB[1], cB[tB[41]] = -tB[2]), cB[tB[50]] = tB[1]; cB[tB[50]] < cB[tB[21]]; cB[tB[50]]++)
                        if (cB[-tB[108]] = cB[-tB[138]].indexOf(cB[tB[14]][cB[tB[50]]]), cB[-tB[108]] !== -tB[2])
                          if (cB[tB[41]] < tB[1]) cB[tB[41]] = cB[-tB[108]];
                          else {
                            bB(cB[tB[41]] += cB[-tB[108]] * tB[29], cB[tB[37]] |= cB[tB[41]] << cB[tB[112]], cB[tB[112]] += (cB[tB[41]] & tB[30]) > tB[31] ? tB[32] : tB[33]);
                            do {
                              bB(cB[tB[10]].push(cB[tB[37]] & tB[12]), cB[tB[37]] >>= tB[11], cB[tB[112]] -= tB[11])
                            } while (cB[tB[112]] > tB[25]);
                            cB[tB[41]] = -tB[2]
                          } return cB[tB[41]] > -tB[2] && cB[tB[10]].push((cB[tB[37]] | cB[tB[41]] << cB[tB[112]]) & tB[12]), yB(cB[tB[10]])
                    }(Mc[cB[tB[1]]]) : sc[cB[tB[1]]]
                  }(175))
                }

                function uc() {
                  var Bc, Vc, Ic, uc, Pc;
                  if (bB(void 0, Vc = void 0, Ic = void 0, uc = void 0, Pc = void 0), cB[tB[14]] > cB[tB[4]]) {
                    function qB(...cB) {
                      for (bB(cB[tB[13]] = tB[2], cB[tB[2]] = 'fMW#%")G?Lx9:=twsJi[&E3]*/j,gm1!zQ06^$}K|{PlI>Y+Zcr2dC745bA~X_nypv.`(@;u8h<aHBVDUoFNRTkeqOS', cB[tB[14]] = "" + (cB[tB[1]] || ""), cB[tB[4]] = cB[tB[14]].length, cB[tB[53]] = [], cB[tB[8]] = tB[1], cB[tB[144]] = tB[1], cB[-tB[107]] = -tB[2]), cB[tB[50]] = tB[1]; cB[tB[50]] < cB[tB[4]]; cB[tB[50]]++)
                        if (cB[-tB[143]] = cB[tB[2]].indexOf(cB[tB[14]][cB[tB[50]]]), cB[-tB[143]] !== -tB[2])
                          if (cB[-tB[107]] < tB[1]) cB[-tB[107]] = cB[-tB[143]];
                          else {
                            bB(cB[-tB[107]] += cB[-tB[143]] * tB[29], cB[tB[8]] |= cB[-tB[107]] << cB[tB[144]], cB[tB[144]] += (cB[-tB[107]] & tB[30]) > tB[31] ? tB[32] : tB[33]);
                            do {
                              bB(cB[tB[53]].push(cB[tB[8]] & tB[12]), cB[tB[8]] >>= tB[11], cB[tB[144]] -= tB[11])
                            } while (cB[tB[144]] > tB[25]);
                            cB[-tB[107]] = -tB[2]
                          } return cB[-tB[107]] > -tB[2] && cB[tB[53]].push((cB[tB[8]] | cB[-tB[107]] << cB[tB[144]]) & tB[12]), yB(cB[tB[53]])
                    }

                    function Oc(...cB) {
                      return cB[tB[13]] = tB[2], typeof sc[cB[tB[1]]] === tB[17] ? sc[cB[tB[1]]] = qB(Mc[cB[tB[1]]]) : sc[cB[tB[1]]]
                    }
                    throw Error(Oc(176))
                  }
                  if (cB[tB[14]] == cB[tB[4]]) return tB[56];
                  if (bB(Bc = cB[tB[10]][cB[tB[14]]] & tB[12], cB[tB[14]]++), (Bc & tB[85]) == tB[1]) return Bc;
                  if ((Bc & tB[57]) == tB[109]) {
                    if (bB(Vc = rB(), Pc = (Bc & tB[98]) << tB[23] | Vc), Pc >= tB[85]) return Pc;
                    throw Error(kB(tB[146]))
                  }
                  if ((Bc & tB[110]) == tB[57]) {
                    if (bB(Vc = rB(), Ic = rB(), Pc = (Bc & tB[99]) << tB[26] | Vc << tB[23] | Ic), Pc >= tB[145]) return nc(Pc), Pc;
                    throw Error(kB(tB[146]))
                  }
                  if ((Bc & tB[87]) == tB[110] && (bB(Vc = rB(), Ic = rB(), uc = rB(), Pc = (Bc & tB[25]) << tB[100] | Vc << tB[26] | Ic << tB[23] | uc), Pc >= tB[92] && Pc <= tB[147])) return Pc;
                  throw Error(function(cB) {
                    return typeof sc[cB] === tB[17] ? sc[cB] = function(...cB) {
                      for (bB(cB[tB[13]] = tB[2], cB[tB[5]] = '"14`57|>}^x:g8Grj%?lE0ANFY]!L/unX2aJistc$M;o*yQI9RWv#@T6Z+h{=[DUK3mV&~kwebfqB<.,pHCOSP_)z(d', cB[-tB[139]] = "" + (cB[tB[1]] || ""), cB[tB[21]] = cB[-tB[139]].length, cB[-tB[140]] = [], cB[tB[37]] = tB[1], cB[tB[142]] = tB[1], cB[tB[25]] = -tB[2]), cB[tB[11]] = tB[1]; cB[tB[11]] < cB[tB[21]]; cB[tB[11]]++)
                        if (cB[tB[141]] = cB[tB[5]].indexOf(cB[-tB[139]][cB[tB[11]]]), cB[tB[141]] !== -tB[2])
                          if (cB[tB[25]] < tB[1]) cB[tB[25]] = cB[tB[141]];
                          else {
                            bB(cB[tB[25]] += cB[tB[141]] * tB[29], cB[tB[37]] |= cB[tB[25]] << cB[tB[142]], cB[tB[142]] += (cB[tB[25]] & tB[30]) > tB[31] ? tB[32] : tB[33]);
                            do {
                              bB(cB[-tB[140]].push(cB[tB[37]] & tB[12]), cB[tB[37]] >>= tB[11], cB[tB[142]] -= tB[11])
                            } while (cB[tB[142]] > tB[25]);
                            cB[tB[25]] = -tB[2]
                          } return cB[tB[25]] > -tB[2] && cB[-tB[140]].push((cB[tB[37]] | cB[tB[25]] << cB[tB[142]]) & tB[12]), yB(cB[-tB[140]])
                    }(Mc[cB]) : sc[cB]
                  }(178))
                }
                bB(cB[tB[13]] = tB[2], cB[-tB[128]] = String.fromCharCode), bB(cB[tB[10]] = tB[18], cB[tB[4]] = tB[18], cB[tB[14]] = tB[18]), bB(cB[tB[1]].version = kB(tB[48]), cB[tB[1]].encode = function(...cB) {
                  for (bB(cB[tB[13]] = tB[2], cB[tB[2]] = Bc(cB[tB[1]]), cB[tB[44]] = cB[tB[2]].length, cB[tB[137]] = -tB[2], cB[tB[10]] = tB[18], cB[tB[25]] = ""); ++cB[tB[137]] < cB[tB[44]];) bB(cB[tB[10]] = cB[tB[2]][cB[tB[137]]], cB[tB[25]] += Ic(cB[tB[10]]));
                  return cB[tB[25]]
                }, cB[tB[1]].decode = function(nc) {
                  var Vc, Ic;
                  for (bB(cB[tB[10]] = Bc(nc), cB[tB[4]] = cB[tB[10]].length, cB[tB[14]] = tB[1], Vc = [], Ic = void 0);
                    (Ic = uc()) !== tB[56];) Vc.push(Ic);
                  return function(...Bc) {
                    for (bB(Bc[tB[13]] = tB[2], Bc[tB[2]] = Bc[tB[1]].length, Bc[-tB[115]] = -tB[2], Bc[tB[4]] = tB[18], Bc[-tB[127]] = ""); ++Bc[-tB[115]] < Bc[tB[2]];) Bc[tB[4]] = Bc[tB[1]][Bc[-tB[115]]], Bc[tB[4]] > tB[126] && bB(Bc[tB[4]] -= tB[92], Bc[-tB[127]] += cB[-tB[128]](Bc[tB[4]] >>> tB[38] & tB[90] | tB[94]), Bc[tB[4]] = tB[95] | Bc[tB[4]] & tB[90]), Bc[-tB[127]] += cB[-tB[128]](Bc[tB[4]]);
                    return Bc[-tB[127]]
                  }(Vc)
                })
              }(typeof exports === Bc(180) + Bc(181) ? this.utf8 = {} : exports)
          }
          kB(166) in zB && Xc(), Ec *= Tc
        }
        Nc > Ec && (Nc = Ec), bB(Ic()[Dc(182)](qB, qB, Nc), cB[tB[10]][Dc(183) + Dc(184)](qB))
      }
      cB[tB[10]][Bc(tB[144]) + tB[148]] = cB[tB[14]][Bc(tB[108]) + Bc(tB[66]) + tB[148]] * (Pc ? Vc : uc)
    }
  },
  36197: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Mc,
      e: () => sc
    });
    var Vc = nc(36204),
      Ic = nc(1534);
    const rB = 2,
      uc = 1,
      sc = {
        ku: 1,
        fluidDrag: -1,
        fluidDragHorizontal: -1,
        fluidDragVertical: -1,
        gravityMultiplier: 2,
        width: .5,
        height: 1.8,
        canRun: !0,
        jumpMultiplier: 1,
        upwardImpulseOnUse: 0,
        canAutoStep: !0,
        canAutoStepByBlock: {},
        riderOffset: [0, 0, 0],
        pose: "standing",
        effect: null,
        standingFriction: 5,
        maxPushDistance: 0,
        movementForceMultiplier: 1,
        disableBaseMovement: !1,
        speedMultiplier: 1,
        landSpeedMultiplier: 1,
        fluidSpeedMultiplier: 1,
        airSpeedMultiplier: 1,
        speedMultiplierByBlock: {},
        disableFootstepSounds: !1,
        horizontalBounciness: 0,
        verticalBounciness: 0,
        minHorizontalSpeedToBounce: 0,
        minVerticalSpeedToBounce: 0,
        horizontalImpactCameraShake: null,
        verticalImpactCameraShake: null,
        steering: null,
        fixedHeading: null,
        fluidSkip: null,
        airborneMode: null,
        airborneMovement: null,
        airborneFallSpeedLimit: null
      };

    function Mc(cB, Bc, nc, sc, Mc, Pc, qB) {
      if (Mc.speed) return (0, Vc.e)(Bc, nc, sc, Mc, Pc, qB, cB), void(Mc.ticksToReachMaxIdleFriction = rB);
      const Oc = sc.isOnGround(),
        Tc = Bc.bloxd.getSyncedClientOptions(Bc.bloxd.getPlayerReader(nc)),
        fc = null === Tc ? Bc.bloxd.getClientPredictedOption(nc, "groundFrictionScale") : Tc.groundFrictionScale,
        mB = null === Tc ? Bc.bloxd.getClientPredictedOption(nc, "airFrictionScale") : Tc.airFrictionScale,
        ec = Oc ? fc : mB,
        tB = Math.max(uc, ec),
        Sc = Mc.ticksToReachMaxIdleFriction / rB,
        yB = (0, Ic.v)(tB, ec, Sc);
      Pc.friction = cB.standingFriction * ((null === Tc ? Bc.bloxd.getClientPredictedOption(nc, "airMomentumConservation") : Tc.airMomentumConservation) ? yB : ec), Mc.ticksToReachMaxIdleFriction > 0 && Mc.ticksToReachMaxIdleFriction--
    }
  },
  41198: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/builtInAnimations.anim.f2c0574fe0516abeeff8.gz"
  },
  41203: (cB, Bc, nc) => {
    cB.exports = nc.p + "static/media/previewAnimations.dat.24d2343c38c8f9b3fb85.gz"
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);