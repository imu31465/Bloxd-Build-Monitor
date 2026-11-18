export const id = 52;
export const ids = [52];
export const modules = {
  37302: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => hy,
      f: () => fy
    });
    const Uy = new WeakMap;

    function hy(yb, bb) {
      return Uy.set(yb, bb), yb
    }

    function fy(yb) {
      var bb;
      return null !== (bb = Uy.get(yb)) && void 0 !== bb ? bb : null
    }
  },
  41808: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      WasmPreviewHost: () => Cb,
      pageBuiltInAnimationPack: () => ey,
      pagePreviews: () => dy,
      previewModule: () => tb
    });
    var Uy = Wy(3004),
      hy = Wy(552);
    const fy = "[bloxd-wasm-client]";

    function Zy(yb) {
      const bb = {
        wasm: "unknown",
        client: String(hy.b)
      };
      try {
        var Wy;
        bb.wasm = null !== (Wy = null === yb || void 0 === yb ? void 0 : yb.Xy()) && void 0 !== Wy ? Wy : bb.wasm
      } catch {}
      return bb
    }
    async function cb(yb) {
      if (yb.length < 2 || 31 !== yb[0] || 139 !== yb[1]) return yb;
      if ("undefined" === typeof DecompressionStream) {
        const {
          ungzip: bb
        } = await Wy.e(205).then((() => Wy(35686)));
        return bb(yb)
      }
      const bb = new Blob([yb]).stream().pipeThrough(new DecompressionStream("gzip"));
      return new Uint8Array(await new Response(bb).arrayBuffer())
    }

    function Py(yb, bb, Uy, hy) {
      Promise.resolve().then((() => Wy(39441))).then((Wy => {
        let {
          reportDataLoadFailure: fy
        } = Wy;
        fy(yb, bb, Uy, hy)
      }), (bb => {
        console.warn(`${fy} ${yb} didn't load, and the report couldn't be sent`, Uy.error, bb)
      }))
    }
    const oy = [3e4, 12e4, 3e5];
    class By {
      constructor(yb) {
        this.deps = yb, this.loading = null, this.reported = !1, this.retries = 0, this.resolveSet = () => {}, this.set = new Promise((yb => {
          this.resolveSet = yb
        }))
      }
      provide(yb) {
        return this.loading ??= this.load(yb), this.loading
      }
      whenSet() {
        return this.set
      }
      async load(yb) {
        const bb = Zy(yb),
          Wy = await async function(yb, bb) {
            let Wy;
            try {
              Wy = await yb()
            } catch (Uy) {
              return {
                stage: "fetch",
                error: Uy
              }
            }
            try {
              return bb(Wy) ? null : {
                stage: "decode",
                error: null
              }
            } catch (Uy) {
              return {
                stage: "decode",
                error: Uy
              }
            }
          }((() => this.deps.fetch()), (bb => {
            const Wy = yb.Bey(bb);
            return Wy && this.resolveSet(bb), Wy
          }));
        if (null !== Wy) {
          if ("fetch" === Wy.stage) {
            this.loading = null;
            const bb = oy[this.retries++];
            void 0 !== bb && this.deps.later((() => {
              this.provide(yb)
            }), bb)
          }
          this.reported || (this.reported = !0, this.deps.onFailed(Wy, bb))
        }
      }
    }
    let Ky = null;

    function ey() {
      return Ky ??= new By({
        fetch: async () => cb(await (0, Uy.B)(qb(), {
          priority: "low"
        })),
        onFailed: (yb, bb) => {
          Py("builtInAnimations", qb(), yb, bb)
        },
        later: (yb, bb) => {
          setTimeout(yb, bb)
        }
      }), Ky
    }

    function qb() {
      return Wy(41816)
    }
    var sy = Wy(2995),
      Sy = Wy(35132),
      Ey = Wy(39273),
      ly = Wy(1052),
      mb = Wy(244),
      Cy = Wy(39288),
      Ty = Wy(39520),
      Vy = Wy(39461),
      Jy = Wy(39466),
      gb = Wy(39473),
      Gy = Wy(39305),
      Oy = Wy(39531),
      Ry = Wy(39534),
      vb = Wy(39310),
      ib = Wy(39391),
      My = Wy(39508),
      Yy = Wy(39525),
      Xy = Wy(41074),
      ny = Wy(39307);
    const uy = "[bloxd-previews]",
      rb = 4e5,
      Hy = 0,
      ab = 1,
      Fy = 1,
      py = 2,
      Ly = 3,
      Qy = 0,
      jb = 1,
      Dy = 2;

    function tb(yb) {
      const bb = yb,
        Wy = (0, Cy.K)(yb),
        Uy = (0, Cy.n)(yb);
      return null !== Wy && null !== Uy && "function" === typeof bb.cqy && "function" === typeof bb.Pey && "function" === typeof bb.oey ? bb : null
    }

    function wy(yb, bb, Wy) {
      let [Uy, hy] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [yb, bb], fy = Math.min(Number.isFinite(Wy) && Wy > 0 ? Wy : 1, 2);
      const Zy = Math.max(0, Uy, yb) * Math.max(0, hy, bb) * fy * fy;
      return Zy > rb && (fy *= Math.sqrt(rb / Zy)), [Math.max(1, Math.floor(Math.max(0, yb) * fy)), Math.max(1, Math.floor(Math.max(0, bb) * fy))]
    }

    function kb() {
      return Wy(41822)
    }
    async function Ny(yb, bb) {
      const Uy = await (0, vb.I)();
      if (null === Uy || (0, Cy.p)(Uy) || (0, vb.e)()) return;
      const hy = "webgpu" === Uy.backend;
      if (!hy && "lost" !== yb) return;
      const fy = hy ? (0, Cy.P)(yb) : null;
      if (null !== fy) {
        const Wy = `WebGPU failed at home (${yb}${void 0===bb?"":`: ${bb instanceof Error?bb.message:(0,ny.f)(bb)}`}) and ${fy}`;
        return console.warn(`${uy} ${Wy}: the previews stop`, null !== bb && void 0 !== bb ? bb : ""), void(0, vb.t)(Wy)
      }(0, vb.q)();
      try {
        await async function(yb, bb, Uy) {
          var hy;
          let {
            backend: fy,
            adapter: cb
          } = yb;
          const Py = (0, sy.P)(),
            {
              flushCrashReports: oy,
              reportRenderReload: By
            } = await Promise.resolve().then((() => Wy(39441)));
          By(fy, "start_failed" === bb ? 0 : 1, Zy(Py ? (0, sy.E)() : null), {
            cause: bb,
            error: "lost" === bb && null !== (hy = (0, Cy.V)(Py ? (0, Cy.K)((0, sy.E)()) : null)) && void 0 !== hy ? hy : Uy,
            context: {
              adapter: cb,
              boundAtMs: "start_failed" === bb ? null : (0, vb.G)()
            }
          }), await oy(ib.e)
        }(Uy, yb, bb)
      } catch (cb) {
        console.warn(`${uy} ${Uy.backend} failed at home (${yb}), and its report couldn't be sent`, cb)
      }(0, ib.m)()
    }
    async function zb() {
      if (!(0, sy.P)()) {
        const yb = await (0, vb.I)();
        if (null === yb || (0, Cy.p)(yb)) return null;
        if (await (0, Sy.h)(await yb.load(), Ey.h), !(0, sy.P)()) return null
      }
      return tb((0, sy.E)())
    }
    class Iy {
      constructor(yb, bb, Wy, Uy, hy, fy) {
        this.page = yb, this.host = bb, this.id = Wy, this.canvas = Uy, this.size = hy, this.models = void 0, this.images = void 0, this.write = void 0, this.outcomes = [], this.closed = !1, this.quiet = 0, this.settled = [];
        const Zy = {
            ...fy.images,
            glbUrl: yb => {
              var bb;
              return null !== (bb = this.models.drawnUrl(yb)) && void 0 !== bb ? bb : fy.images.glbUrl(yb)
            }
          },
          cb = bb => yb.modelFile(bb);
        this.images = new Ty.h(Zy, (yb => {
          console.warn(`${uy} image ${yb.key.kind}:${yb.key.index}:${yb.key.word} failed`, yb.error)
        }), {
          fetchFile: cb,
          fetchImage: bb => yb.imageFile(bb)
        }), yb.startModels(), this.models = new Vy.h(fy.files, ((bb, Wy) => yb.buildModel(bb, Wy)), (yb => {
          console.warn(`${uy} model file ${yb.file} (${yb.url}) failed`, yb.error)
        }), {
          fetchFile: cb,
          onWritten: (yb, bb) => {
            this.images.glbWritten(yb, bb)
          },
          onTaken: (yb, bb) => {
            this.images.glbTaken(yb, bb)
          }
        }), this.write = (yb, bb, Wy) => {
          if (this.closed) return !0;
          if (yb === Vy.c) {
            const yb = new DataView(Wy.buffer, Wy.byteOffset, gb.b),
              Uy = yb.getUint32(0, !0),
              hy = yb.getUint32(gb.e, !0),
              fy = this.page.hostCall(Dy, (() => this.host.Sqy(this.id, Uy, bb, Wy.subarray(gb.b))));
            return this.outcomes.push([hy, fy]), !0
          }
          return yb === Ty.d && (this.page.hostCall(void 0, (() => {
            this.host.lqy(this.id, Wy)
          })), !0)
        }
      }
      get isClosed() {
        return this.closed
      }
      get isStopped() {
        return this.page.isStopped
      }
      resize(yb, bb, Wy) {
        if (this.closed) return;
        const [Uy, hy] = wy(yb, bb, this.page.dpr(), Wy);
        Uy === this.size[0] && hy === this.size[1] || (this.size = [Uy, hy], this.page.hostCall(void 0, (() => {
          this.host.resize(this.id, Uy, hy)
        })))
      }
      setMob(yb, bb, Wy, Uy) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.Jqy(this.id, yb, bb, Wy, Uy))))
      }
      setPet(yb, bb, Wy, Uy) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.Gqy(this.id, yb, bb, Wy, Uy))))
      }
      setPlayer(yb, bb, Wy) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.Cqy(this.id, yb, bb, Wy))))
      }
      setFigure(yb, bb, Wy, Uy) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.Tqy(this.id, yb, bb, Wy, Uy))))
      }
      replay() {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.replay(this.id))))
      }
      get orbit() {
        if (this.closed) return null;
        const yb = this.page.hostCall(null, (() => this.host.orbit(this.id)));
        return null === yb || yb.length < 3 ? null : {
          alpha: yb[0],
          beta: yb[1],
          radius: yb[2]
        }
      }
      setOrbit(yb) {
        let {
          alpha: bb,
          beta: Wy,
          radius: Uy
        } = yb;
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.gsy(this.id, bb, Wy, Uy)
        }))
      }
      untilSettled() {
        return this.closed || this.page.isStopped ? Promise.resolve() : (this.quiet = 0, new Promise((yb => {
          this.settled.push(yb)
        })))
      }
      packChanged() {
        this.quiet = 0, this.models.refresh(), (0, Oy.h)(this.images)
      }
      feed() {
        this.models.drain(this.write);
        for (const [yb, bb] of this.outcomes) {
          const Wy = bb === Qy ? [] : [bb === jb ? yb : (yb | Vy.e) >>> 0];
          this.models.taken(yb, Wy)
        }
        this.outcomes.length = 0, this.images.drain(this.write)
      }
      collect(yb) {
        let bb = !1;
        if (yb) {
          const yb = this.host.vsy(this.id);
          for (const bb of yb) this.models.request(bb);
          const Wy = this.host.Rqy(this.id);
          Wy.length > 0 && this.images.onEvent(Wy), bb = yb.length > 0 || Wy.length > 0
        }
        const Wy = this.page.modelsUnavailable ? 0 : this.models.asking + this.models.unanswered,
          Uy = bb || Wy > 0 || this.images.waiting > 0 || this.images.inFlight > 0;
        this.quiet = Uy ? 0 : this.quiet + 1, this.quiet >= 3 && this.resolveSettled()
      }
      close() {
        this.closed || (this.closed = !0, this.page.closePreview(this), this.resolveSettled())
      }
      abandon() {
        this.resolveSettled()
      }
      dispose(yb) {
        this.page.hostCall(void 0, (() => {
          const bb = this.host.close(this.id);
          bb.length > 0 && this.images.onEvent(bb), this.page.isTrapped || yb.oey(this.id)
        })), this.images.dispose(), this.canvas.remove()
      }
      resolveSettled() {
        const yb = this.settled;
        this.settled = [];
        for (const bb of yb) bb()
      }
    }
    class xb {
      constructor(yb) {
        this.deps = yb, this.module = null, this.host = null, this.opening = null, this.pageCanvas = null, this.samples = 1, this.binding = null, this.sessionEnds = 0, this.lastEndReturned = !0, this.previews = new Map, this.nextId = 1, this.frameId = null, this.stopped = !1, this.loggedErrors = new Set, this.modelsListener = {
          onUnavailable: yb => {
            this.modelsFailed(yb)
          },
          onDecoderFailed: yb => {
            this.loggedErrors.has("modelDecoder") || (this.loggedErrors.add("modelDecoder"), console.warn(`${uy} the Draco decoder didn't load: models waiting on it won't draw`, yb))
          },
          onWorkerLost: yb => {
            this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${uy} a model worker was lost: ${yb}`))
          }
        }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.eU = {
          setShaderPack: (yb, bb, Wy, Uy, hy) => (this.shaderPackArgs = [yb, bb, Wy, Uy, hy], this.handOverShaderPack(), !0)
        }, this.frame = yb => {
          this.frameId = null;
          const bb = this.host;
          if (null !== bb && 0 !== this.previews.size && !this.settleIfTrapped() && !this.stopped) try {
            this.drawFrame(bb, yb)
          } catch (Wy) {
            if (!this.stopIfTrapped(Wy) && (this.stop(), (0, Cy.s)(Wy))) return void this.deps.onRenderFailed("frames_refused", Wy);
            console.warn(`${uy} the previews stopped: their frame threw`, Wy)
          }
        }, yb.pack.onChange((() => {
          this.packChanged()
        })), yb.game.onGameChange((() => {
          this.tellInGame()
        }))
      }
      packChanged() {
        if (!this.stopped)
          for (const yb of this.previews.values()) yb.packChanged()
      }
      dpr() {
        return this.deps.dpr()
      }
      get sessionBound() {
        var yb, bb;
        return null !== (yb = null === (bb = this.host) || void 0 === bb ? void 0 : bb.attached()) && void 0 !== yb && yb
      }
      get open() {
        return this.previews.size
      }
      get frameCostMs() {
        return 0 === this.costs.length ? 0 : this.costs.reduce(((yb, bb) => yb + bb), 0) / this.costs.length
      }
      async bindSession(yb, bb, Wy) {
        const Uy = this.binding,
          hy = this.sessionEnds;
        try {
          const fy = this.hostOf(yb);
          if (!fy.Eqy()) {
            const bb = (0, My.g)().sampleCount,
              Zy = await Wy(bb);
            if (this.sessionEnds !== hy) return this.keepRendererOfEndedSession(yb, fy, Zy, bb, Uy), bb;
            if (!fy.bsy(Zy)) throw new Error("the page has a renderer already");
            (0, vb.u)(performance.now()), this.samples = bb, (0, Yy.i)((0, Cy.n)(yb))
          }
          if (!fy.attach(bb)) throw new Error("the page's renderer is lent to another session");
          return this.samples
        } finally {
          this.binding === Uy && this.endBinding()
        }
      }
      keepRendererOfEndedSession(yb, bb, Wy, Uy, hy) {
        if (!this.lastEndReturned || null !== this.binding && this.binding !== hy) try {
          Wy.free()
        } catch (fy) {
          console.warn(`${uy} an ended session's renderer didn't free`, fy)
        } else bb.bsy(Wy) && ((0, vb.u)(performance.now()), this.samples = Uy, (0, Yy.i)(this.registryOf(yb)))
      }
      async beginSession() {
        var yb;
        let bb = () => {};
        const Wy = new Promise((yb => {
          bb = yb
        }));
        this.binding = {
          done: Wy,
          release: bb
        }, await (null === (yb = this.opening) || void 0 === yb ? void 0 : yb.catch((() => null)));
        const Uy = this.pageCanvas;
        return this.pageCanvas = null, Uy
      }
      endSession(yb) {
        var bb, Wy;
        if (this.sessionEnds++, this.lastEndReturned = yb, this.endBinding(), yb) {
          try {
            var Uy;
            null === (Uy = this.host) || void 0 === Uy || Uy.detach()
          } catch (hy) {
            return void console.warn(`${uy} the session's core kept the page's renderer`, hy)
          }!0 === (null === (bb = this.host) || void 0 === bb ? void 0 : bb.attached()) && console.warn(`${uy} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (Wy = this.host) || void 0 === Wy ? void 0 : Wy.Eqy()) && (0, Yy.i)(this.registryOf(this.module))
        }
      }
      endBinding() {
        var yb;
        null === (yb = this.binding) || void 0 === yb || yb.release(), this.binding = null
      }
      async openPreview(yb, bb, Wy, Uy) {
        const hy = await this.renderingHost(),
          fy = this.module;
        if (null === hy || null === fy) throw new Error("this page can't draw previews: it has no renderer build");
        if (this.animations ??= this.loadAnimations(hy), this.deps.pack.wanted(), this.isStopped) throw new Error("the previews stopped");
        this.guarded((() => {
          this.deps.provideBuiltInAnimationPack(fy)
        }));
        const Zy = this.nextId++,
          cb = this.deps.createCanvas(),
          [Py, oy] = wy(bb, Wy, this.deps.dpr(), Uy);
        cb.width = Py, cb.height = oy;
        if (!this.guarded((() => (fy.Pey(Zy, cb), hy.open(Zy, Py, oy, yb))))) throw this.hostCall(void 0, (() => {
          fy.oey(Zy)
        })), new Error("the page's renderer is lent to a session that is running");
        this.restartModelsIfFailed();
        const By = new Iy(this, hy, Zy, cb, [Py, oy], this.deps);
        return this.previews.set(Zy, By), this.startFrames(), By
      }
      prefetch() {
        if (this.prefetched || this.isStopped || (0, vb.e)() || null !== (0, vb.F)()) return;
        this.prefetched = !0;
        (null === this.module ? this.loadModule() : Promise.resolve(this.module)).then((yb => {
          null === yb || this.isStopped || (this.startModels(), this.fetchAnimationTable().catch((() => {})), this.prefetchPlayerFiles())
        }), (() => {}))
      }
      modelFile(yb) {
        return this.prefetchedOr(yb, this.deps.fetchModel)
      }
      imageFile(yb) {
        return this.prefetchedOr(yb, Uy.B)
      }
      prefetchedOr(yb, bb) {
        const Wy = this.prefetchedFiles.get(yb);
        return void 0 === Wy ? bb(yb) : Wy.catch((() => bb(yb)))
      }
      async prefetchPlayerFiles() {
        const yb = this.deps.playerFile().then((yb => this.deps.files.url(yb))),
          bb = await Promise.all([yb, this.deps.images.lifeformAtlasUrl(Oy.b)]).catch((() => null));
        if (null === bb) return;
        const [Wy, Uy] = bb, hy = (yb, bb) => {
          if (null === yb) return;
          const Wy = bb(yb);
          this.prefetchedFiles.set(yb, Wy), Wy.catch((() => {
            this.prefetchedFiles.delete(yb)
          }))
        };
        hy(Wy, (yb => this.modelFile(yb))), hy(Uy, (yb => this.imageFile(yb)))
      }
      loadModule() {
        return this.moduleLoad ??= this.deps.loadModule().then((yb => (null === yb && (this.moduleLoad = null), yb)), (yb => {
          throw this.moduleLoad = null, yb
        })), this.moduleLoad
      }
      fetchAnimationTable() {
        return this.animationTable ??= this.deps.fetchAnimations().catch((yb => {
          throw this.animationTable = null, yb
        })), this.animationTable
      }
      get modelsUnavailable() {
        return this.unavailable
      }
      startModels() {
        this.models ??= this.deps.startModels(this.modelsListener).catch((yb => (this.modelsFailed(yb), () => new Promise((() => {})))))
      }
      buildModel(yb, bb) {
        return this.startModels(), this.models.then((Wy => Wy(yb, bb))).then((yb => this.unavailable ? new Promise((() => {})) : yb))
      }
      restartModelsIfFailed() {
        this.unavailable && !this.modelsRestarted && 0 === this.previews.size && (this.modelsRestarted = !0, this.models = null, this.unavailable = !1, this.startModels())
      }
      modelsFailed(yb) {
        this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${uy} the model workers didn't start: models won't draw in the previews`, yb))
      }
      called(yb) {
        return 0 !== yb && this.logError(yb, 0), yb
      }
      closePreview(yb) {
        this.previews.delete(yb.id), null !== this.module && yb.dispose(this.module), 0 === this.previews.size && null !== this.frameId && (this.deps.cancelFrame(this.frameId), this.frameId = null)
      }
      hostOf(yb) {
        if (null !== this.module && this.module !== yb) throw new Error("a second renderer module on one page");
        return this.module = yb, null === this.host && (this.host = this.guarded((() => new yb.cqy)), this.tellInGame(), this.handOverShaderPack()), this.host
      }
      tellInGame() {
        const {
          host: yb
        } = this;
        null !== yb && this.outsideCall("the game's start or end", (() => {
          yb.Vqy(this.deps.game.inGame())
        }))
      }
      handOverShaderPack() {
        const {
          host: yb,
          shaderPackArgs: bb
        } = this;
        null !== yb && null !== bb && this.outsideCall("the shader pack's hand-over", (() => {
          yb.xBy(...bb) || console.warn(`${uy} the host refused the shader pack: previews draw without it at home`)
        }))
      }
      outsideCall(yb, bb) {
        try {
          this.hostCall(void 0, bb)
        } catch (Wy) {
          this.stop(), console.warn(`${uy} the previews stopped: ${yb} threw`, Wy)
        }
      }
      async loadAnimations(yb) {
        const bb = Zy(null),
          Wy = this.module;
        try {
          bb.wasm = null === Wy ? bb.wasm : this.hostCall(bb.wasm, (() => Wy.Xy()))
        } catch {}
        let Uy, hy;
        try {
          Uy = await this.fetchAnimationTable()
        } catch (fy) {
          return void this.deps.onAnimationsFailed({
            stage: "fetch",
            error: fy
          }, bb)
        }
        if (!this.settleIfTrapped()) {
          try {
            hy = yb.msy(Uy)
          } catch (fy) {
            if (this.stopIfTrapped(fy)) return;
            return void this.deps.onAnimationsFailed({
              stage: "decode",
              error: fy
            }, bb)
          }
          hy || this.deps.onAnimationsFailed({
            stage: "decode",
            error: null
          }, bb)
        }
      }
      async renderingHost() {
        if (null !== this.binding && await this.binding.done, this.settleIfTrapped()) return null;
        const yb = this.host;
        return null !== yb && this.guarded((() => yb.Eqy())) ? yb : (this.opening ??= this.openAtHome().finally((() => {
          this.opening = null
        })), this.opening)
      }
      async openAtHome() {
        var yb;
        const bb = null !== (yb = this.module) && void 0 !== yb ? yb : await this.loadModule();
        if (null === bb) return null;
        const Wy = this.hostOf(bb),
          Uy = () => this.guarded((() => Wy.Eqy()));
        if (Uy()) return Wy;
        if (null !== (0, vb.F)() || (0, vb.e)()) return null;
        const hy = this.deps.createCanvas();
        hy.width = 1, hy.height = 1;
        const fy = await this.deps.openExtras();
        if (this.settleIfTrapped()) return null;
        const Zy = (0, My.g)().sampleCount;
        let cb;
        try {
          cb = await (0, Cy.w)(bb, "previewRenderer", hy, Zy, Xy.c, fy)
        } catch (Py) {
          throw Py instanceof Gy.c ? this.stopForTrap(Py) : (0, Cy.u)(Py) && await this.deps.onRenderFailed("start_failed", Py), Py
        }
        return this.guarded((() => Wy.bsy(cb))) ? ((0, vb.u)(performance.now()), this.samples = Zy, this.pageCanvas = hy, (0, Yy.i)(this.registryOf(bb)), Wy) : Uy() ? Wy : null
      }
      startFrames() {
        null !== this.frameId || this.isStopped || (this.frameId = this.deps.requestFrame(this.frame))
      }
      drawFrame(yb, bb) {
        for (const Zy of this.previews.values()) Zy.feed();
        if (this.stopped) return;
        const Wy = this.deps.now(),
          Uy = yb.frame(bb);
        this.costs.push(this.deps.now() - Wy), this.costs.length > 120 && this.costs.shift();
        const hy = 0 !== (256 & Uy),
          fy = 255 & Uy;
        for (const Zy of this.previews.values()) {
          if (this.stopped) return;
          Zy.collect(hy)
        }
        if (!this.stopped) {
          if (hy) {
            const bb = yb.Oqy();
            for (let yb = 0; yb + 1 < bb.length; yb += 2) this.logError(bb[yb], bb[yb + 1])
          }
          if (fy === Fy) return this.stop(), void this.deps.onRenderFailed("lost");
          if (fy === py) return this.stop(), void this.deps.onFatal(yb.eqy(), yb.qsy());
          if (fy === Ly) return this.stop(), void console.warn(`${uy} the previews stopped: the page's renderer went with its session`);
          (0, mb.d)(bb), this.startFrames()
        }
      }
      get isStopped() {
        return this.stopped || this.isTrapped
      }
      get isTrapped() {
        return null !== this.module && ((0, Gy.i)(this.module) || "failed" === (0, sy.C)())
      }
      hostCall(yb, bb) {
        if (this.settleIfTrapped()) return yb;
        try {
          return bb()
        } catch (Wy) {
          if (this.stopIfTrapped(Wy)) return yb;
          throw Wy
        }
      }
      guarded(yb) {
        if (this.settleIfTrapped()) throw new Error("the previews stopped: their module trapped");
        try {
          return yb()
        } catch (bb) {
          throw this.stopIfTrapped(bb), bb
        }
      }
      registryOf(yb) {
        return {
          Loy: (bb, Wy) => {
            this.hostCall(void 0, (() => {
              yb.Loy(bb, Wy)
            }))
          },
          Qoy: bb => {
            this.hostCall(void 0, (() => {
              yb.Qoy(bb)
            }))
          }
        }
      }
      settleIfTrapped() {
        return !!this.isTrapped && (this.stopped || (this.stop(), (0, Yy.i)(null)), !0)
      }
      stopIfTrapped(yb) {
        return !(null === this.module || !(0, Gy.k)(this.module, yb)) && (this.stopForTrap(yb), !0)
      }
      stopForTrap(yb) {
        this.stop(), (0, Yy.i)(null), (0, sy.R)(yb)
      }
      stop() {
        this.stopped = !0;
        for (const yb of this.previews.values()) yb.abandon()
      }
      logError(yb, bb) {
        const Wy = `${yb}:${bb}`;
        this.loggedErrors.has(Wy) || (this.loggedErrors.add(Wy), console.warn(`${uy} error ${yb} (detail ${bb})`))
      }
    }
    let Ay = null;

    function dy() {
      return Ay ??= new xb(function() {
        const yb = (0, Jy.m)(ly.clientSideServerUrls.staticUrl, {
          packUrl: yb => {
            var bb, Wy;
            return null !== (bb = null === (Wy = Oy.f.current) || void 0 === Wy ? void 0 : Wy.modelUrl(yb)) && void 0 !== bb ? bb : null
          }
        });
        return {
          loadModule: zb,
          startModels: async yb => {
            const {
              pageModelPool: bb
            } = await Wy.e(39).then((() => Wy(41880))), {
              pool: Uy
            } = bb(yb);
            return (yb, bb) => Uy.build(yb, bb)
          },
          fetchAnimations: async () => cb(await (0, Uy.B)(kb())),
          playerFile: async () => (await (0, Jy.k)()).PLAYER_FILE,
          onAnimationsFailed: (yb, bb) => {
            Py("previewAnimations", kb(), yb, bb)
          },
          provideBuiltInAnimationPack: yb => {
            ey().provide(yb)
          },
          openExtras: vb.y,
          files: yb,
          images: (0, Oy.k)((0, Ty.q)(yb.url), (() => Oy.f.current)),
          pack: Oy.f,
          game: Ry.d,
          fetchModel: yb => (0, Jy.h)(yb),
          createCanvas: () => document.createElement("canvas"),
          dpr: () => window.devicePixelRatio,
          now: () => performance.now(),
          requestFrame: yb => requestAnimationFrame(yb),
          cancelFrame: yb => {
            cancelAnimationFrame(yb)
          },
          onRenderFailed: Ny,
          onFatal: (yb, bb) => {
            console.error(`${uy} the previews stopped: renderer error ${yb} (detail ${bb})`)
          }
        }
      }()), Ay
    }
    var yW = Wy(535),
      bW = Wy(37302),
      Wb = Wy(2597);
    const Ub = {
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
    const hb = "[bloxd-previews]",
      fb = new Uint32Array(5);

    function Zb(yb) {
      return yW.h.indexOf(yb)
    }
    const cW = new WeakSet;

    function Pb(yb) {
      const bb = (0, bW.f)(yb),
        Wy = null === bb ? -1 : ob(bb);
      return -1 !== Wy ? Wy : (cW.has(yb) || (cW.add(yb), console.warn(`${hb} an animation the previews' table lacks: the mob idles instead`)), -1)
    }

    function ob(yb) {
      var bb;
      return null !== (bb = Ub[yb]) && void 0 !== bb ? bb : -1
    }

    function Bb(yb, bb) {
      const {
        canvas: Wy
      } = bb;
      Wy.style.width = "100%", Wy.style.height = "100%", Wy.style.display = "block", yb.appendChild(Wy)
    }

    function Kb(yb) {
      const bb = yb.getBoundingClientRect();
      return [bb.width, bb.height]
    }
    class eb {
      constructor(yb, bb) {
        this.preview = yb, this.showView = bb
      }
      show(yb) {
        this.showView(this.preview, yb)
      }
      resize(yb, bb) {
        this.preview.resize(yb, bb)
      }
      close() {
        this.preview.close()
      }
    }
    class qW {
      constructor(yb) {
        this.preview = yb, this.ready = void 0, this.dev = void 0, this.built = !1, this.cosmetics = {}, this.emote = null, this.detachControls = void 0, this.detachControls = function(yb) {
          const {
            canvas: bb
          } = yb;
          let Wy = null;
          const Uy = yb => {
              var Uy;
              Wy = {
                pointer: yb.pointerId,
                x: yb.clientX,
                y: yb.clientY
              }, null === (Uy = bb.setPointerCapture) || void 0 === Uy || Uy.call(bb, yb.pointerId)
            },
            hy = bb => {
              var Uy;
              const hy = yb.orbit;
              if ((null === (Uy = Wy) || void 0 === Uy ? void 0 : Uy.pointer) !== bb.pointerId || null === hy) return;
              const fy = bb.clientX - Wy.x,
                Zy = bb.clientY - Wy.y;
              Wy = {
                ...Wy,
                x: bb.clientX,
                y: bb.clientY
              }, yb.setOrbit({
                alpha: hy.alpha - .01 * fy,
                beta: Math.min(Math.PI - .01, Math.max(.01, hy.beta - .01 * Zy)),
                radius: hy.radius
              })
            },
            fy = yb => {
              var bb;
              (null === (bb = Wy) || void 0 === bb ? void 0 : bb.pointer) === yb.pointerId && (Wy = null)
            },
            Zy = bb => {
              const Wy = yb.orbit;
              if (null === Wy) return;
              bb.preventDefault();
              const Uy = bb.deltaY * (bb.deltaMode === WheelEvent.DOM_DELTA_LINE ? 40 : bb.deltaMode === WheelEvent.DOM_DELTA_PAGE ? 800 : 1),
                hy = Math.min(100, Math.max(5, Wy.radius + .08 * Uy));
              yb.setOrbit({
                ...Wy,
                radius: hy
              })
            };
          return bb.style.touchAction = "none", bb.addEventListener("pointerdown", Uy), bb.addEventListener("pointermove", hy), bb.addEventListener("pointerup", fy), bb.addEventListener("pointercancel", fy), bb.addEventListener("wheel", Zy, {
            passive: !1
          }), () => {
            bb.removeEventListener("pointerdown", Uy), bb.removeEventListener("pointermove", hy), bb.removeEventListener("pointerup", fy), bb.removeEventListener("pointercancel", fy), bb.removeEventListener("wheel", Zy)
          }
        }(yb), this.dev = {
          setCamera: bb => {
            let {
              yaw: Wy,
              pitch: Uy,
              radius: hy
            } = bb;
            const fy = yb.orbit;
            null !== fy && yb.setOrbit({
              alpha: Wy,
              beta: Uy,
              radius: null !== hy && void 0 !== hy ? hy : fy.radius
            })
          },
          canvas: () => yb.canvas,
          isolateHead: () => {
            console.warn(`${hb} isolateHead: noa's character preview only`)
          }
        }, this.apply(), this.ready = yb.untilSettled().then((() => {
          if (yb.isStopped) throw new Error(`${hb} the previews stopped before the character drew`);
          this.built = !0
        }))
      }
      isReady() {
        return this.built && !this.preview.isClosed
      }
      setCosmetic(yb, bb) {
        this.cosmetics[yb] = bb, this.apply()
      }
      playEmote(yb) {
        null === yb || yb !== this.emote ? (this.emote = yb, this.apply()) : this.preview.replay()
      }
      untilDrawn(yb) {
        return this.preview.untilSettled()
      }
      resetCamera() {}
      resize(yb, bb) {
        this.preview.resize(yb, bb)
      }
      close() {
        this.detachControls(), this.preview.close()
      }
      apply() {
        var yb;
        this.preview.setPlayer(JSON.stringify(this.cosmetics), fb, null === (yb = this.emote) ? -1 : ob(yb))
      }
    }

    function sb(yb, bb) {
      let {
        mobType: Wy,
        variation: Uy,
        animation: hy
      } = bb;
      yb.setMob(Zb(Wy), null !== Uy && void 0 !== Uy ? Uy : "", 1, Pb(hy))
    }

    function Sb(yb, bb) {
      let {
        mobType: Wy,
        variation: Uy,
        metaInfo: hy,
        tamed: fy
      } = bb;
      yb.setPet(Zb(Wy), Uy, hy, fy)
    }
    const Eb = {
      aimed: .533 / 1.15 * 1.1,
      ready: .16 / .85 * 1.1
    };
    class lb {
      constructor(yb, bb, Wy, Uy) {
        this.preview = null, this.closed = !1, this.figure = null, this.shown = !1, this.order = "", this.span = {
          left: 0,
          width: 0
        }, this.lineup = [0, 0], this.given = null, this.loaded = !1, yb(Wy.width, Uy[1], Uy).then((yb => {
          if (this.closed) return void yb.close();
          const {
            style: Wy
          } = yb.canvas;
          Wy.position = "absolute", Wy.top = "0", Wy.visibility = "hidden", Bb(bb, yb), this.preview = yb, this.apply()
        })).catch((yb => {
          console.error(`${hb} couldn't open a lineup figure`, yb)
        }))
      }
      update(yb, bb, Wy, Uy, hy) {
        this.figure = yb, this.shown = bb, this.order = Wy, this.span = Uy, this.lineup = hy, this.apply()
      }
      close() {
        var yb;
        this.closed = !0, null === (yb = this.preview) || void 0 === yb || yb.close(), this.preview = null
      }
      apply() {
        const {
          preview: yb,
          figure: bb,
          lineup: Wy
        } = this;
        if (null === yb || null === bb) return;
        if (this.given !== bb) {
          var Uy;
          this.given = bb, this.loaded = !1;
          const Wy = null === bb.OJ ? 0 : null !== (Uy = (0, Wb.b)(bb.OJ)) && void 0 !== Uy ? Uy : 0;
          yb.setFigure(function(yb) {
            return JSON.stringify(Object.fromEntries(yb.cosmetics))
          }(bb), Wy, Pb(bb.animation), bb.size), yb.untilSettled().then((() => {
            this.given === bb && (this.loaded = !0, this.apply())
          }))
        }
        const {
          left: hy,
          width: fy
        } = this.span;
        yb.resize(fy, Wy[1], Wy);
        const {
          style: Zy
        } = yb.canvas;
        Zy.left = `${hy}px`, Zy.width = `${fy}px`, Zy.zIndex = this.order, Zy.visibility = this.shown && this.loaded ? "visible" : "hidden"
      }
    }
    class mW {
      constructor(yb, bb) {
        this.open = bb, this.layer = void 0, this.figures = [], this.view = {
          figures: [],
          shown: []
        }, this.size = void 0, this.size = Kb(yb), this.layer = document.createElement("div");
        const {
          style: Wy
        } = this.layer;
        Wy.position = "relative", Wy.isolation = "isolate", Wy.overflow = "hidden", Wy.width = "100%", Wy.height = "100%", Wy.pointerEvents = "none", yb.appendChild(this.layer)
      }
      show(yb) {
        this.view = yb, this.place()
      }
      resize(yb, bb) {
        this.size = [yb, bb], this.place()
      }
      close() {
        for (const yb of this.figures) yb.close();
        this.figures = [], this.layer.remove()
      }
      place() {
        const {
          figures: yb,
          shown: bb
        } = this.view;
        for (const Uy of this.figures.splice(yb.length)) Uy.close();
        const {
          size: Wy
        } = this;
        yb.forEach(((Uy, hy) => {
          var fy;
          const Zy = function(yb, bb, Wy, Uy) {
            let [hy, fy] = Uy;
            const Zy = (yb + .5) * hy / bb,
              cb = Math.min(Math.max(hy / bb, 2 * Wy * fy), 2 * Math.max(Zy, hy - Zy));
            return {
              left: Zy - cb / 2,
              width: cb
            }
          }(hy, yb.length, function(yb) {
            let {
              animation: bb,
              size: Wy
            } = yb;
            const {
              aimed: Uy,
              ready: hy
            } = Eb;
            return (Pb(bb) === Ub.gunAimed ? Uy : hy) * Wy
          }(Uy), Wy);
          this.figures[hy] ??= new lb(this.open, this.layer, Zy, Wy), this.figures[hy].update(Uy, null !== (fy = bb[hy]) && void 0 !== fy && fy, function(yb, bb) {
            return String(Math.round(1e3 * yb) + bb)
          }(Uy.size, hy), Zy, Wy)
        }))
      }
    }
    class Cb {
      constructor(yb) {
        this.page = yb
      }
      async openMob(yb) {
        return new eb(await this.open(yb, Hy), sb)
      }
      async openPet(yb) {
        return new eb(await this.open(yb, Hy), Sb)
      }
      openMobLineup(yb) {
        return new mW(yb, ((yb, bb, Wy) => this.page.openPreview(Hy, yb, bb, Wy)))
      }
      async openCharacter(yb) {
        return new qW(await this.open(yb, ab))
      }
      async open(yb, bb) {
        const [Wy, Uy] = Kb(yb), hy = await this.page.openPreview(bb, Wy, Uy);
        return Bb(yb, hy), hy
      }
    }
  },
  35515: (yb, bb, Wy) => {
    Wy.d(bb, {
      B: () => qb,
      D: () => sy,
      F: () => Sy,
      G: () => ly,
      b: () => Uy,
      f: () => hy,
      j: () => ey,
      l: () => Ey,
      n: () => By,
      r: () => mb,
      v: () => Py,
      x: () => oy
    });
    const Uy = [{
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

    function hy(yb, bb) {
      const {
        numLines: Wy,
        charsPerLine: hy
      } = Uy[bb];
      return Cy(yb, Wy, hy, !1)
    }
    const fy = 7 / 8,
      Zy = .25,
      cb = 8;

    function Py(yb, bb) {
      return {
        width: Math.min(yb, cb) - 2 * Zy,
        height: Math.min(bb, cb) - 2 * Zy
      }
    }

    function oy(yb, bb, Wy) {
      const hy = Py(yb, bb),
        {
          numLines: Zy,
          charsPerLine: cb
        } = Uy[Wy];
      return {
        numLines: Math.max(1, Math.floor(Zy / fy * hy.height)),
        charsPerLine: Math.max(1, Math.floor(cb * hy.width))
      }
    }

    function By(yb, bb, Wy, Uy) {
      const {
        numLines: hy,
        charsPerLine: fy
      } = oy(Wy, Uy, bb);
      return Cy(yb, hy, fy, !1)
    }
    const Ky = 32e3;

    function ey(yb) {
      return yb.slice(0, Ky)
    }
    const qb = 512e3,
      sy = 64,
      Sy = qb;

    function Ey(yb, bb) {
      const Wy = Math.max(0, Sy - bb),
        Uy = Math.min(qb, Wy);
      return yb.slice(0, Uy)
    }
    const ly = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      wY: {
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

    function mb(yb, bb) {
      const {
        numLines: Wy,
        charsPerLine: Uy
      } = ly[bb];
      return Cy(yb, Wy, Uy, !1)
    }

    function Cy(yb, bb, Wy, Uy, hy) {
      (hy || Uy) && (yb = yb.slice(0, null !== hy && void 0 !== hy ? hy : bb * Wy));
      const fy = yb.split("\n");
      if (fy.length > bb && fy.splice(bb, fy.length - bb), !Uy)
        for (let Zy = 0; Zy < fy.length; Zy++) {
          const yb = fy[Zy];
          yb.length > Wy && (fy[Zy] = yb.substring(0, Wy), fy.length < bb && fy.splice(Zy + 1, 0, yb.substring(Wy)))
        }
      return fy.join("\n")
    }
  },
  41816: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/builtInAnimations.anim.36d8b13aae7e273ec8e8.gz"
  },
  41822: (yb, bb, Wy) => {
    yb.exports = Wy.p + "static/media/previewAnimations.dat.24d2343c38c8f9b3fb85.gz"
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);