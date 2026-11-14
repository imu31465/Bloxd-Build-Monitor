export const id = 48;
export const ids = [48];
export const modules = {
  37038: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => AF,
      f: () => uF
    });
    const CF = new WeakMap;

    function AF(FF, WF) {
      return CF.set(FF, WF), FF
    }

    function uF(FF) {
      var WF;
      return null !== (WF = CF.get(FF)) && void 0 !== WF ? WF : null
    }
  },
  41156: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      WasmPreviewHost: () => OW,
      pageBuiltInAnimationPack: () => eF,
      pagePreviews: () => JF,
      previewModule: () => HF
    });
    var CF = SF(2906),
      AF = SF(247);
    const uF = "[bloxd-wasm-client]";

    function hF(FF) {
      const WF = {
        wasm: "unknown",
        client: String(AF.c)
      };
      try {
        var SF;
        WF.wasm = null !== (SF = null === FF || void 0 === FF ? void 0 : FF.mW()) && void 0 !== SF ? SF : WF.wasm
      } catch {}
      return WF
    }
    async function bW(FF) {
      if (FF.length < 2 || 31 !== FF[0] || 139 !== FF[1]) return FF;
      if ("undefined" === typeof DecompressionStream) {
        const {
          ungzip: WF
        } = await SF.e(198).then((() => SF(35442)));
        return WF(FF)
      }
      const WF = new Blob([FF]).stream().pipeThrough(new DecompressionStream("gzip"));
      return new Uint8Array(await new Response(WF).arrayBuffer())
    }

    function dF(FF, WF, CF, AF) {
      Promise.resolve().then((() => SF(38806))).then((SF => {
        let {
          reportDataLoadFailure: uF
        } = SF;
        uF(FF, WF, CF, AF)
      }), (WF => {
        console.warn(`${uF} ${FF} didn't load, and the report couldn't be sent`, CF.error, WF)
      }))
    }
    const PF = [3e4, 12e4, 3e5];
    class RF {
      constructor(FF) {
        this.deps = FF, this.loading = null, this.reported = !1, this.retries = 0, this.resolveSet = () => {}, this.set = new Promise((FF => {
          this.resolveSet = FF
        }))
      }
      provide(FF) {
        return this.loading ??= this.load(FF), this.loading
      }
      whenSet() {
        return this.set
      }
      async load(FF) {
        const WF = hF(FF),
          SF = await async function(FF, WF) {
            let SF;
            try {
              SF = await FF()
            } catch (CF) {
              return {
                stage: "fetch",
                error: CF
              }
            }
            try {
              return WF(SF) ? null : {
                stage: "decode",
                error: null
              }
            } catch (CF) {
              return {
                stage: "decode",
                error: CF
              }
            }
          }((() => this.deps.fetch()), (WF => {
            const SF = FF.qeF(WF);
            return SF && this.resolveSet(WF), SF
          }));
        if (null !== SF) {
          if ("fetch" === SF.stage) {
            this.loading = null;
            const WF = PF[this.retries++];
            void 0 !== WF && this.deps.later((() => {
              this.provide(FF)
            }), WF)
          }
          this.reported || (this.reported = !0, this.deps.onFailed(SF, WF))
        }
      }
    }
    let iW = null;

    function eF() {
      return iW ??= new RF({
        fetch: async () => bW(await (0, CF.A)(EF(), {
          priority: "low"
        })),
        onFailed: (FF, WF) => {
          dF("builtInAnimations", EF(), FF, WF)
        },
        later: (FF, WF) => {
          setTimeout(FF, WF)
        }
      }), iW
    }

    function EF() {
      return SF(41159)
    }
    var QF = SF(2903),
      rW = SF(34921),
      gW = SF(38665),
      tW = SF(1056),
      TF = SF(38682),
      aW = SF(38880),
      kW = SF(38819),
      qW = SF(38821),
      VF = SF(38825),
      NF = SF(38698),
      DF = SF(38887),
      LF = SF(38707),
      mW = SF(38771),
      OF = SF(38853),
      xW = SF(38883),
      ZF = SF(40440),
      oF = SF(38700);
    const YF = "[bloxd-previews]",
      MF = 4e5,
      cW = 0,
      GF = 1,
      zW = 1,
      IF = 2,
      fF = 3,
      yW = 0,
      sF = 1,
      nF = 2;

    function HF(FF) {
      const WF = FF,
        SF = (0, TF.G)(FF),
        CF = (0, TF.o)(FF);
      return null !== SF && null !== CF && "function" === typeof WF.TiF && "function" === typeof WF.aeF && "function" === typeof WF.keF ? WF : null
    }

    function KF(FF, WF, SF) {
      const CF = Math.min(Number.isFinite(SF) && SF > 0 ? SF : 1, 2);
      let AF = Math.max(0, FF) * CF,
        uF = Math.max(0, WF) * CF;
      if (AF * uF > MF) {
        const FF = Math.sqrt(MF / (AF * uF));
        AF *= FF, uF *= FF
      }
      return [Math.max(1, Math.floor(AF)), Math.max(1, Math.floor(uF))]
    }

    function wF() {
      return SF(41163)
    }
    async function XF(FF, WF) {
      const CF = await (0, LF.J)();
      if (null === CF || (0, TF.s)(CF) || "webgpu" !== CF.backend || (0, LF.c)()) return;
      const AF = (0, TF.K)();
      if (null !== AF) {
        const SF = `WebGPU failed at home (${FF}${void 0===WF?"":`: ${WF instanceof Error?WF.message:(0,oF.e)(WF)}`}) and ${AF}`;
        return console.warn(`${YF} ${SF}: the previews stop`, null !== WF && void 0 !== WF ? WF : ""), void(0, LF.u)(SF)
      }(0, LF.q)();
      try {
        await async function(FF, WF, CF) {
          var AF;
          const uF = (0, QF.P)(),
            {
              flushCrashReports: bW,
              reportRenderReload: dF
            } = await Promise.resolve().then((() => SF(38806)));
          dF("webgpu", "start_failed" === FF ? 0 : 1, hF(uF ? (0, QF.F)() : null), {
            cause: FF,
            error: "lost" === FF && null !== (AF = (0, TF.O)(uF ? (0, TF.G)((0, QF.F)()) : null)) && void 0 !== AF ? AF : WF,
            context: {
              adapter: CF,
              boundAtMs: "start_failed" === FF ? null : (0, LF.F)()
            }
          }), await bW(mW.c)
        }(FF, WF, CF.adapter)
      } catch (uF) {
        console.warn(`${YF} WebGPU failed at home (${FF}), and its report couldn't be sent`, uF)
      }(0, mW.g)()
    }
    async function UF() {
      if (!(0, QF.P)()) {
        const FF = await (0, LF.J)();
        if (null === FF || (0, TF.s)(FF)) return null;
        if (await (0, rW.i)(await FF.load(), gW.g), !(0, QF.P)()) return null
      }
      return HF((0, QF.F)())
    }
    class BF {
      constructor(FF, WF, SF, CF, AF, uF) {
        this.page = FF, this.host = WF, this.id = SF, this.canvas = CF, this.size = AF, this.models = void 0, this.images = void 0, this.write = void 0, this.outcomes = [], this.closed = !1, this.quiet = 0, this.settled = [];
        const hF = {
            ...uF.images,
            glbUrl: FF => {
              var WF;
              return null !== (WF = this.models.drawnUrl(FF)) && void 0 !== WF ? WF : uF.images.glbUrl(FF)
            }
          },
          bW = WF => FF.modelFile(WF);
        this.images = new aW.h(hF, (FF => {
          console.warn(`${YF} image ${FF.key.kind}:${FF.key.index}:${FF.key.word} failed`, FF.error)
        }), {
          fetchFile: bW,
          fetchImage: WF => FF.imageFile(WF)
        }), FF.startModels(), this.models = new kW.i(uF.files, ((WF, SF) => FF.buildModel(WF, SF)), (FF => {
          console.warn(`${YF} model file ${FF.file} (${FF.url}) failed`, FF.error)
        }), {
          fetchFile: bW,
          onWritten: (FF, WF) => {
            this.images.glbWritten(FF, WF)
          },
          onTaken: (FF, WF) => {
            this.images.glbTaken(FF, WF)
          }
        }), this.write = (FF, WF, SF) => {
          if (this.closed) return !0;
          if (FF === kW.e) {
            const FF = new DataView(SF.buffer, SF.byteOffset, VF.c),
              CF = FF.getUint32(0, !0),
              AF = FF.getUint32(VF.f, !0),
              uF = this.page.hostCall(nF, (() => this.host.DeF(this.id, CF, WF, SF.subarray(VF.c))));
            return this.outcomes.push([AF, uF]), !0
          }
          return FF === aW.e && (this.page.hostCall(void 0, (() => {
            this.host.mEF(this.id, SF)
          })), !0)
        }
      }
      get isClosed() {
        return this.closed
      }
      resize(FF, WF) {
        if (this.closed) return;
        const [SF, CF] = KF(FF, WF, this.page.dpr());
        SF === this.size[0] && CF === this.size[1] || (this.size = [SF, CF], this.page.hostCall(void 0, (() => {
          this.host.resize(this.id, SF, CF)
        })))
      }
      setMob(FF, WF, SF, CF, AF) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.YeF(this.id, FF, WF, SF, CF, AF))))
      }
      setPlayer(FF, WF, SF) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.ZeF(this.id, FF, WF, SF))))
      }
      setFigure(FF, WF, SF) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.oeF(this.id, FF, WF, SF))))
      }
      setPlacement(FF) {
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.cEF(this.id, Float64Array.from(FF))
        }))
      }
      replay() {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.replay(this.id))))
      }
      get orbit() {
        if (this.closed) return null;
        const FF = this.page.hostCall(null, (() => this.host.orbit(this.id)));
        return null === FF || FF.length < 3 ? null : {
          alpha: FF[0],
          beta: FF[1],
          radius: FF[2]
        }
      }
      setOrbit(FF) {
        let {
          alpha: WF,
          beta: SF,
          radius: CF
        } = FF;
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.MeF(this.id, WF, SF, CF)
        }))
      }
      untilSettled() {
        return this.closed || this.page.isStopped ? Promise.resolve() : (this.quiet = 0, new Promise((FF => {
          this.settled.push(FF)
        })))
      }
      packChanged() {
        this.quiet = 0, this.models.refresh(), (0, DF.f)(this.images)
      }
      feed() {
        this.models.drain(this.write);
        for (const [FF, WF] of this.outcomes) {
          const SF = WF === yW ? [] : [WF === sF ? FF : (FF | kW.g) >>> 0];
          this.models.taken(FF, SF)
        }
        this.outcomes.length = 0, this.images.drain(this.write)
      }
      collect(FF) {
        let WF = !1;
        if (FF) {
          const FF = this.host.IeF(this.id);
          for (const WF of FF) this.models.request(WF);
          const SF = this.host.zEF(this.id);
          SF.length > 0 && this.images.onEvent(SF), WF = FF.length > 0 || SF.length > 0
        }
        const SF = this.page.modelsUnavailable ? 0 : this.models.asking + this.models.unanswered,
          CF = WF || SF > 0 || this.images.waiting > 0 || this.images.inFlight > 0;
        this.quiet = CF ? 0 : this.quiet + 1, this.quiet >= 3 && this.resolveSettled()
      }
      close() {
        this.closed || (this.closed = !0, this.page.closePreview(this), this.resolveSettled())
      }
      abandon() {
        this.resolveSettled()
      }
      dispose(FF) {
        this.page.hostCall(void 0, (() => {
          const WF = this.host.close(this.id);
          WF.length > 0 && this.images.onEvent(WF), this.page.isTrapped || FF.keF(this.id)
        })), this.images.dispose(), this.canvas.remove()
      }
      resolveSettled() {
        const FF = this.settled;
        this.settled = [];
        for (const WF of FF) WF()
      }
    }
    class jW {
      constructor(FF) {
        this.deps = FF, this.module = null, this.host = null, this.opening = null, this.pageCanvas = null, this.samples = 1, this.binding = null, this.sessionEnds = 0, this.lastEndReturned = !0, this.previews = new Map, this.nextId = 1, this.frameId = null, this.stopped = !1, this.loggedErrors = new Set, this.modelsListener = {
          onUnavailable: FF => {
            this.modelsFailed(FF)
          },
          onDecoderFailed: FF => {
            this.loggedErrors.has("modelDecoder") || (this.loggedErrors.add("modelDecoder"), console.warn(`${YF} the Draco decoder didn't load: models waiting on it won't draw`, FF))
          },
          onWorkerLost: FF => {
            this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${YF} a model worker was lost: ${FF}`))
          }
        }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.frame = FF => {
          this.frameId = null;
          const WF = this.host;
          if (null !== WF && 0 !== this.previews.size && !this.settleIfTrapped() && !this.stopped) try {
            this.drawFrame(WF, FF)
          } catch (SF) {
            if (!this.stopIfTrapped(SF) && (this.stop(), (0, TF.v)(SF))) return void this.deps.onWebGpuFailed("frames_refused", SF);
            console.warn(`${YF} the previews stopped: their frame threw`, SF)
          }
        }, FF.pack.onChange((() => {
          this.packChanged()
        }))
      }
      packChanged() {
        if (!this.stopped)
          for (const FF of this.previews.values()) FF.packChanged()
      }
      dpr() {
        return this.deps.dpr()
      }
      get sessionBound() {
        var FF, WF;
        return null !== (FF = null === (WF = this.host) || void 0 === WF ? void 0 : WF.attached()) && void 0 !== FF && FF
      }
      get open() {
        return this.previews.size
      }
      get frameCostMs() {
        return 0 === this.costs.length ? 0 : this.costs.reduce(((FF, WF) => FF + WF), 0) / this.costs.length
      }
      async bindSession(FF, WF, SF) {
        const CF = this.binding,
          AF = this.sessionEnds;
        try {
          const uF = this.hostOf(FF);
          if (!uF.LeF()) {
            const WF = (0, OF.f)().sampleCount,
              hF = await SF(WF);
            if (this.sessionEnds !== AF) return this.keepRendererOfEndedSession(FF, uF, hF, WF, CF), WF;
            if (!uF.eeF(hF)) throw new Error("the page has a renderer already");
            (0, LF.x)(performance.now()), this.samples = WF, (0, xW.f)((0, TF.o)(FF))
          }
          if (!uF.attach(WF)) throw new Error("the page's renderer is lent to another session");
          return this.samples
        } finally {
          this.binding === CF && this.endBinding()
        }
      }
      keepRendererOfEndedSession(FF, WF, SF, CF, AF) {
        if (!this.lastEndReturned || null !== this.binding && this.binding !== AF) try {
          SF.free()
        } catch (uF) {
          console.warn(`${YF} an ended session's renderer didn't free`, uF)
        } else WF.eeF(SF) && ((0, LF.x)(performance.now()), this.samples = CF, (0, xW.f)(this.registryOf(FF)))
      }
      async beginSession() {
        var FF;
        let WF = () => {};
        const SF = new Promise((FF => {
          WF = FF
        }));
        this.binding = {
          done: SF,
          release: WF
        }, await (null === (FF = this.opening) || void 0 === FF ? void 0 : FF.catch((() => null)));
        const CF = this.pageCanvas;
        return this.pageCanvas = null, CF
      }
      endSession(FF) {
        var WF, SF;
        if (this.sessionEnds++, this.lastEndReturned = FF, this.endBinding(), FF) {
          try {
            var CF;
            null === (CF = this.host) || void 0 === CF || CF.detach()
          } catch (AF) {
            return void console.warn(`${YF} the session's core kept the page's renderer`, AF)
          }!0 === (null === (WF = this.host) || void 0 === WF ? void 0 : WF.attached()) && console.warn(`${YF} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (SF = this.host) || void 0 === SF ? void 0 : SF.LeF()) && (0, xW.f)(this.registryOf(this.module))
        }
      }
      endBinding() {
        var FF;
        null === (FF = this.binding) || void 0 === FF || FF.release(), this.binding = null
      }
      async openPreview(FF, WF, SF) {
        const CF = await this.renderingHost(),
          AF = this.module;
        if (null === CF || null === AF) throw new Error("this page can't draw previews: it has no renderer build");
        if (this.animations ??= this.loadAnimations(CF), this.deps.pack.wanted(), this.isStopped) throw new Error("the previews stopped");
        this.guarded((() => {
          this.deps.provideBuiltInAnimationPack(AF)
        }));
        const uF = this.nextId++,
          hF = this.deps.createCanvas(),
          [bW, dF] = KF(WF, SF, this.deps.dpr());
        hF.width = bW, hF.height = dF;
        if (!this.guarded((() => (AF.aeF(uF, hF), CF.open(uF, bW, dF, FF))))) throw this.hostCall(void 0, (() => {
          AF.keF(uF)
        })), new Error("the page's renderer is lent to a session that is running");
        this.restartModelsIfFailed();
        const PF = new BF(this, CF, uF, hF, [bW, dF], this.deps);
        return this.previews.set(uF, PF), this.startFrames(), PF
      }
      prefetch() {
        if (this.prefetched || this.isStopped || (0, LF.c)() || null !== (0, LF.C)()) return;
        this.prefetched = !0;
        (null === this.module ? this.loadModule() : Promise.resolve(this.module)).then((FF => {
          null === FF || this.isStopped || (this.startModels(), this.fetchAnimationTable().catch((() => {})), this.prefetchPlayerFiles())
        }), (() => {}))
      }
      modelFile(FF) {
        return this.prefetchedOr(FF, this.deps.fetchModel)
      }
      imageFile(FF) {
        return this.prefetchedOr(FF, CF.A)
      }
      prefetchedOr(FF, WF) {
        const SF = this.prefetchedFiles.get(FF);
        return void 0 === SF ? WF(FF) : SF.catch((() => WF(FF)))
      }
      async prefetchPlayerFiles() {
        const FF = this.deps.playerFile().then((FF => this.deps.files.url(FF))),
          WF = await Promise.all([FF, this.deps.images.lifeformAtlasUrl(DF.d)]).catch((() => null));
        if (null === WF) return;
        const [SF, CF] = WF, AF = (FF, WF) => {
          if (null === FF) return;
          const SF = WF(FF);
          this.prefetchedFiles.set(FF, SF), SF.catch((() => {
            this.prefetchedFiles.delete(FF)
          }))
        };
        AF(SF, (FF => this.modelFile(FF))), AF(CF, (FF => this.imageFile(FF)))
      }
      loadModule() {
        return this.moduleLoad ??= this.deps.loadModule().then((FF => (null === FF && (this.moduleLoad = null), FF)), (FF => {
          throw this.moduleLoad = null, FF
        })), this.moduleLoad
      }
      fetchAnimationTable() {
        return this.animationTable ??= this.deps.fetchAnimations().catch((FF => {
          throw this.animationTable = null, FF
        })), this.animationTable
      }
      get modelsUnavailable() {
        return this.unavailable
      }
      startModels() {
        this.models ??= this.deps.startModels(this.modelsListener).catch((FF => (this.modelsFailed(FF), () => new Promise((() => {})))))
      }
      buildModel(FF, WF) {
        return this.startModels(), this.models.then((SF => SF(FF, WF))).then((FF => this.unavailable ? new Promise((() => {})) : FF))
      }
      restartModelsIfFailed() {
        this.unavailable && !this.modelsRestarted && 0 === this.previews.size && (this.modelsRestarted = !0, this.models = null, this.unavailable = !1, this.startModels())
      }
      modelsFailed(FF) {
        this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${YF} the model workers didn't start: models won't draw in the previews`, FF))
      }
      called(FF) {
        return 0 !== FF && this.logError(FF, 0), FF
      }
      closePreview(FF) {
        this.previews.delete(FF.id), null !== this.module && FF.dispose(this.module), 0 === this.previews.size && null !== this.frameId && (this.deps.cancelFrame(this.frameId), this.frameId = null)
      }
      hostOf(FF) {
        if (null !== this.module && this.module !== FF) throw new Error("a second renderer module on one page");
        return this.module = FF, this.host ??= this.guarded((() => new FF.TiF)), this.host
      }
      async loadAnimations(FF) {
        const WF = hF(null),
          SF = this.module;
        try {
          WF.wasm = null === SF ? WF.wasm : this.hostCall(WF.wasm, (() => SF.mW()))
        } catch {}
        let CF, AF;
        try {
          CF = await this.fetchAnimationTable()
        } catch (uF) {
          return void this.deps.onAnimationsFailed({
            stage: "fetch",
            error: uF
          }, WF)
        }
        if (!this.settleIfTrapped()) {
          try {
            AF = FF.OeF(CF)
          } catch (uF) {
            if (this.stopIfTrapped(uF)) return;
            return void this.deps.onAnimationsFailed({
              stage: "decode",
              error: uF
            }, WF)
          }
          AF || this.deps.onAnimationsFailed({
            stage: "decode",
            error: null
          }, WF)
        }
      }
      async renderingHost() {
        if (null !== this.binding && await this.binding.done, this.settleIfTrapped()) return null;
        const FF = this.host;
        return null !== FF && this.guarded((() => FF.LeF())) ? FF : (this.opening ??= this.openAtHome().finally((() => {
          this.opening = null
        })), this.opening)
      }
      async openAtHome() {
        var FF;
        const WF = null !== (FF = this.module) && void 0 !== FF ? FF : await this.loadModule();
        if (null === WF) return null;
        const SF = this.hostOf(WF),
          CF = () => this.guarded((() => SF.LeF()));
        if (CF()) return SF;
        if (null !== (0, LF.C)() || (0, LF.c)()) return null;
        const AF = this.deps.createCanvas();
        AF.width = 1, AF.height = 1;
        const uF = await this.deps.openExtras();
        if (this.settleIfTrapped()) return null;
        const hF = (0, OF.f)().sampleCount;
        let bW;
        try {
          bW = await (0, TF.x)(WF, "previewRenderer", AF, hF, ZF.d, uF)
        } catch (dF) {
          throw dF instanceof NF.d ? this.stopForTrap(dF) : (0, TF.w)(dF) && await this.deps.onWebGpuFailed("start_failed", dF), dF
        }
        return this.guarded((() => SF.eeF(bW))) ? ((0, LF.x)(performance.now()), this.samples = hF, this.pageCanvas = AF, (0, xW.f)(this.registryOf(WF)), SF) : CF() ? SF : null
      }
      startFrames() {
        null !== this.frameId || this.isStopped || (this.frameId = this.deps.requestFrame(this.frame))
      }
      drawFrame(FF, WF) {
        for (const hF of this.previews.values()) hF.feed();
        if (this.stopped) return;
        const SF = this.deps.now(),
          CF = FF.frame(WF);
        this.costs.push(this.deps.now() - SF), this.costs.length > 120 && this.costs.shift();
        const AF = 0 !== (256 & CF),
          uF = 255 & CF;
        for (const hF of this.previews.values()) {
          if (this.stopped) return;
          hF.collect(AF)
        }
        if (!this.stopped) {
          if (AF) {
            const WF = FF.GeF();
            for (let FF = 0; FF + 1 < WF.length; FF += 2) this.logError(WF[FF], WF[FF + 1])
          }
          return uF === zW ? (this.stop(), void this.deps.onWebGpuFailed("lost")) : uF === IF ? (this.stop(), void this.deps.onFatal(FF.VeF(), FF.NeF())) : uF === fF ? (this.stop(), void console.warn(`${YF} the previews stopped: the page's renderer went with its session`)) : void this.startFrames()
        }
      }
      get isStopped() {
        return this.stopped || this.isTrapped
      }
      get isTrapped() {
        return null !== this.module && ((0, NF.k)(this.module) || "failed" === (0, QF.E)())
      }
      hostCall(FF, WF) {
        if (this.settleIfTrapped()) return FF;
        try {
          return WF()
        } catch (SF) {
          if (this.stopIfTrapped(SF)) return FF;
          throw SF
        }
      }
      guarded(FF) {
        if (this.settleIfTrapped()) throw new Error("the previews stopped: their module trapped");
        try {
          return FF()
        } catch (WF) {
          throw this.stopIfTrapped(WF), WF
        }
      }
      registryOf(FF) {
        return {
          uPF: (WF, SF) => {
            this.hostCall(void 0, (() => {
              FF.uPF(WF, SF)
            }))
          },
          hPF: WF => {
            this.hostCall(void 0, (() => {
              FF.hPF(WF)
            }))
          }
        }
      }
      settleIfTrapped() {
        return !!this.isTrapped && (this.stopped || (this.stop(), (0, xW.f)(null)), !0)
      }
      stopIfTrapped(FF) {
        return !(null === this.module || !(0, NF.m)(this.module, FF)) && (this.stopForTrap(FF), !0)
      }
      stopForTrap(FF) {
        this.stop(), (0, xW.f)(null), (0, QF.R)(FF)
      }
      stop() {
        this.stopped = !0;
        for (const FF of this.previews.values()) FF.abandon()
      }
      logError(FF, WF) {
        const SF = `${FF}:${WF}`;
        this.loggedErrors.has(SF) || (this.loggedErrors.add(SF), console.warn(`${YF} error ${FF} (detail ${WF})`))
      }
    }
    let vW = null;

    function JF() {
      return vW ??= new jW(function() {
        const FF = (0, qW.r)(tW.clientSideServerUrls.staticUrl, {
          packUrl: FF => {
            var WF, SF;
            return null !== (WF = null === (SF = DF.e.current) || void 0 === SF ? void 0 : SF.modelUrl(FF)) && void 0 !== WF ? WF : null
          }
        });
        return {
          loadModule: UF,
          startModels: async FF => {
            const {
              pageModelPool: WF
            } = await SF.e(36).then((() => SF(41217))), {
              pool: CF
            } = WF(FF);
            return (FF, WF) => CF.build(FF, WF)
          },
          fetchAnimations: async () => bW(await (0, CF.A)(wF())),
          playerFile: async () => (await (0, qW.q)()).PLAYER_FILE,
          onAnimationsFailed: (FF, WF) => {
            dF("previewAnimations", wF(), FF, WF)
          },
          provideBuiltInAnimationPack: FF => {
            eF().provide(FF)
          },
          openExtras: LF.z,
          files: FF,
          images: (0, DF.i)((0, aW.o)(FF.url), (() => DF.e.current)),
          pack: DF.e,
          fetchModel: FF => (0, qW.l)(FF),
          createCanvas: () => document.createElement("canvas"),
          dpr: () => window.devicePixelRatio,
          now: () => performance.now(),
          requestFrame: FF => requestAnimationFrame(FF),
          cancelFrame: FF => {
            cancelAnimationFrame(FF)
          },
          onWebGpuFailed: XF,
          onFatal: (FF, WF) => {
            console.error(`${YF} the previews stopped: renderer error ${FF} (detail ${WF})`)
          }
        }
      }()), vW
    }
    var pF = SF(562),
      lF = SF(565),
      FW = SF(36909),
      WW = SF(271),
      SW = SF(37038),
      CW = SF(2477);
    const AW = {
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
    const uW = "[bloxd-previews]",
      hW = 1,
      bS = 2,
      dW = 4,
      PW = 8,
      RW = 15,
      iS = [6, 0, -6, 0, 0, Math.PI / 4],
      eW = new Uint32Array(5);

    function EW(FF) {
      return pF.f.indexOf(FF)
    }

    function QW(FF, WF) {
      var SF;
      const CF = null !== (SF = lF.p[FF]) && void 0 !== SF ? SF : [];
      return null === WF ? -1 : CF.indexOf(WF)
    }
    const rS = new WeakSet;

    function gS(FF) {
      const WF = (0, SW.f)(FF),
        SF = null === WF ? -1 : tS(WF);
      return -1 !== SF ? SF : (rS.has(FF) || (rS.add(FF), console.warn(`${uW} an animation the previews' table lacks: the mob idles instead`)), -1)
    }

    function tS(FF) {
      var WF;
      return null !== (WF = AW[FF]) && void 0 !== WF ? WF : -1
    }

    function TW(FF, WF) {
      const {
        canvas: SF
      } = WF;
      SF.style.width = "100%", SF.style.height = "100%", SF.style.display = "block", FF.appendChild(SF)
    }

    function aS(FF) {
      const WF = FF.getBoundingClientRect();
      return [WF.width, WF.height]
    }
    class kS {
      constructor(FF, WF) {
        this.preview = FF, this.showView = WF
      }
      show(FF) {
        this.showView(this.preview, FF)
      }
      resize(FF, WF) {
        this.preview.resize(FF, WF)
      }
      close() {
        this.preview.close()
      }
    }
    class qS {
      constructor(FF) {
        this.preview = FF, this.ready = void 0, this.dev = void 0, this.built = !1, this.cosmetics = {}, this.emote = null, this.detachControls = void 0, this.detachControls = function(FF) {
          const {
            canvas: WF
          } = FF;
          let SF = null;
          const CF = FF => {
              var CF;
              SF = {
                pointer: FF.pointerId,
                x: FF.clientX,
                y: FF.clientY
              }, null === (CF = WF.setPointerCapture) || void 0 === CF || CF.call(WF, FF.pointerId)
            },
            AF = WF => {
              var CF;
              const AF = FF.orbit;
              if ((null === (CF = SF) || void 0 === CF ? void 0 : CF.pointer) !== WF.pointerId || null === AF) return;
              const uF = WF.clientX - SF.x,
                hF = WF.clientY - SF.y;
              SF = {
                ...SF,
                x: WF.clientX,
                y: WF.clientY
              }, FF.setOrbit({
                alpha: AF.alpha - .01 * uF,
                beta: Math.min(Math.PI - .01, Math.max(.01, AF.beta - .01 * hF)),
                radius: AF.radius
              })
            },
            uF = FF => {
              var WF;
              (null === (WF = SF) || void 0 === WF ? void 0 : WF.pointer) === FF.pointerId && (SF = null)
            },
            hF = WF => {
              const SF = FF.orbit;
              if (null === SF) return;
              WF.preventDefault();
              const CF = WF.deltaY * (WF.deltaMode === WheelEvent.DOM_DELTA_LINE ? 40 : WF.deltaMode === WheelEvent.DOM_DELTA_PAGE ? 800 : 1),
                AF = Math.min(100, Math.max(5, SF.radius + .08 * CF));
              FF.setOrbit({
                ...SF,
                radius: AF
              })
            };
          return WF.style.touchAction = "none", WF.addEventListener("pointerdown", CF), WF.addEventListener("pointermove", AF), WF.addEventListener("pointerup", uF), WF.addEventListener("pointercancel", uF), WF.addEventListener("wheel", hF, {
            passive: !1
          }), () => {
            WF.removeEventListener("pointerdown", CF), WF.removeEventListener("pointermove", AF), WF.removeEventListener("pointerup", uF), WF.removeEventListener("pointercancel", uF), WF.removeEventListener("wheel", hF)
          }
        }(FF), this.dev = {
          setCamera: WF => {
            let {
              yaw: SF,
              pitch: CF,
              radius: AF
            } = WF;
            const uF = FF.orbit;
            null !== uF && FF.setOrbit({
              alpha: SF,
              beta: CF,
              radius: null !== AF && void 0 !== AF ? AF : uF.radius
            })
          },
          canvas: () => FF.canvas,
          isolateHead: () => {
            console.warn(`${uW} isolateHead: noa's character preview only`)
          }
        }, this.apply(), this.ready = FF.untilSettled().then((() => {
          this.built = !0
        }))
      }
      isReady() {
        return this.built && !this.preview.isClosed
      }
      setCosmetic(FF, WF) {
        this.cosmetics[FF] = WF, this.apply()
      }
      playEmote(FF) {
        null === FF || FF !== this.emote ? (this.emote = FF, this.apply()) : this.preview.replay()
      }
      untilDrawn(FF) {
        return this.preview.untilSettled()
      }
      resize(FF, WF) {
        this.preview.resize(FF, WF)
      }
      close() {
        this.detachControls(), this.preview.close()
      }
      apply() {
        var FF;
        this.preview.setPlayer(JSON.stringify(this.cosmetics), eW, null === (FF = this.emote) ? -1 : tS(FF))
      }
    }

    function VW(FF, WF) {
      let {
        mobType: SF,
        variation: CF,
        animation: AF
      } = WF;
      FF.setMob(EW(SF), QW(SF, CF), RW, 1, gS(AF))
    }

    function NW(FF, WF) {
      let {
        mobType: SF,
        variation: CF,
        shownGroups: AF
      } = WF;
      const uF = hW | (AF.collar ? bS : 0) | (AF.saddle ? dW : 0) | (AF.antlers ? PW : 0);
      FF.setMob(EW(SF), QW(SF, CF), uF, 1, -1), FF.setPlacement(iS)
    }
    const DW = Math.PI - Math.PI / 16;
    class LW {
      constructor(FF, WF, SF) {
        this.size = SF, this.preview = null, this.closed = !1, this.figure = null, this.shown = !1, this.placement = [], this.order = "", this.given = null, this.givenPlacement = [], this.loaded = !1, FF(...SF).then((FF => {
          if (this.closed) return void FF.close();
          const {
            style: SF
          } = FF.canvas;
          SF.position = "absolute", SF.top = "0", SF.left = "0", SF.visibility = "hidden", TW(WF, FF), this.preview = FF, FF.resize(...this.size), this.apply()
        })).catch((FF => {
          console.error(`${uW} couldn't open a lineup figure`, FF)
        }))
      }
      update(FF, WF, SF, CF) {
        this.figure = FF, this.shown = WF, this.placement = SF, this.order = CF, this.apply()
      }
      resize(FF, WF) {
        var SF;
        this.size = [FF, WF], null === (SF = this.preview) || void 0 === SF || SF.resize(FF, WF)
      }
      close() {
        var FF;
        this.closed = !0, null === (FF = this.preview) || void 0 === FF || FF.close(), this.preview = null
      }
      apply() {
        const {
          preview: FF,
          figure: WF
        } = this;
        if (null === FF || null === WF) return;
        if (this.given !== WF) {
          var SF;
          this.given = WF, this.loaded = !1;
          const CF = null === WF.qV ? 0 : null !== (SF = (0, CW.b)(WF.qV)) && void 0 !== SF ? SF : 0;
          FF.setFigure(function(FF) {
            return JSON.stringify(Object.fromEntries(FF.cosmetics))
          }(WF), CF, gS(WF.animation)), FF.untilSettled().then((() => {
            this.given === WF && (this.loaded = !0, this.apply())
          }))
        }(0, WW.q)(this.givenPlacement, this.placement) || (this.givenPlacement = this.placement, FF.setPlacement(this.placement));
        const {
          style: CF
        } = FF.canvas;
        CF.zIndex = this.order, CF.visibility = this.shown && this.loaded ? "visible" : "hidden"
      }
    }
    class mS {
      constructor(FF, WF) {
        this.open = WF, this.layer = void 0, this.figures = [], this.view = {
          figures: [],
          shown: []
        }, this.size = void 0, this.size = aS(FF), this.layer = document.createElement("div");
        const {
          style: SF
        } = this.layer;
        SF.position = "relative", SF.isolation = "isolate", SF.width = "100%", SF.height = "100%", SF.pointerEvents = "none", FF.appendChild(this.layer)
      }
      show(FF) {
        this.view = FF, this.place()
      }
      resize(FF, WF) {
        this.size = [FF, WF];
        for (const SF of this.figures) SF.resize(FF, WF);
        this.place()
      }
      close() {
        for (const FF of this.figures) FF.close();
        this.figures = [], this.layer.remove()
      }
      place() {
        const {
          figures: FF,
          shown: WF
        } = this.view;
        for (const uF of this.figures.splice(FF.length)) uF.close();
        const [SF, CF] = this.size, AF = CF > 0 ? SF / CF : 1;
        FF.forEach(((SF, CF) => {
          var uF;
          this.figures[CF] ??= new LW(this.open, this.layer, this.size);
          const hF = function(FF, WF, SF) {
            const {
              height: CF,
              width: AF
            } = (0, FW.d)("NPC").hitBoxDimensions, uF = 13 / Math.max(CF, AF);
            return [uF * SF, (.5 - FF) * (44 * Math.tan(.4)) * WF, -CF * uF / 2, 0, DW, 0]
          }((CF + .5) / FF.length, AF, SF.size);
          this.figures[CF].update(SF, null !== (uF = WF[CF]) && void 0 !== uF && uF, hF, function(FF, WF) {
            return String(Math.round(1e3 * FF) + WF)
          }(SF.size, CF))
        }))
      }
    }
    class OW {
      constructor(FF) {
        this.page = FF
      }
      async openMob(FF) {
        return new kS(await this.open(FF, cW), VW)
      }
      async openPet(FF) {
        return new kS(await this.open(FF, cW), NW)
      }
      openMobLineup(FF) {
        return new mS(FF, ((FF, WF) => this.page.openPreview(cW, FF, WF)))
      }
      async openCharacter(FF) {
        return new qS(await this.open(FF, GF))
      }
      async open(FF, WF) {
        const [SF, CF] = aS(FF), AF = await this.page.openPreview(WF, SF, CF);
        return TW(FF, AF), AF
      }
    }
  },
  36909: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => QF
    });
    var CF = SF(161),
      AF = SF(36036);
    const uF = 1.2,
      hF = {
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
        xh: .5,
        MbF: !1
      },
      bW = {
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
        xh: .5,
        MbF: !1
      },
      dF = {
        physicsBodyDimensions: {
          width: CF.h.RV,
          height: CF.h.aN
        },
        hitBoxDimensions: {
          width: CF.h.RV + .4,
          height: CF.h.aN + .6
        },
        eyeHeight: CF.h.aN * CF.h.playerEyeToHeightRatio,
        rideHeight: CF.h.aN - .3,
        xh: .5,
        MbF: !1
      },
      PF = {
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
        xh: .5,
        MbF: !1
      },
      RF = {
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
        xh: .5,
        MbF: !1
      },
      iW = {
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
        xh: .5,
        MbF: !1
      },
      eF = {
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
        xh: .5,
        MbF: !1
      },
      EF = {
        Player: {
          defaultName: "Player",
          physicsBodyDimensions: {
            width: CF.h.RV,
            height: CF.h.aN
          },
          hitBoxDimensions: {
            width: CF.h.RV + .4,
            height: CF.h.aN + .6
          },
          eyeHeight: CF.h.aN * CF.h.playerEyeToHeightRatio,
          rideHeight: CF.h.aN - .1,
          xh: AF.g.xh,
          MbF: !0
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
        },
        Camel: {
          modelScale: uF,
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
        },
        "Cave Golem": hF,
        "Draugr Zombie": {
          ...dF,
          defaultPose: "zombie"
        },
        "Draugr Skeleton": dF,
        "Frost Golem": hF,
        "Frost Zombie": {
          ...dF,
          defaultPose: "zombie"
        },
        "Frost Skeleton": dF,
        "Draugr Knight": {
          physicsBodyDimensions: {
            width: CF.h.RV,
            height: CF.h.aN
          },
          hitBoxDimensions: {
            width: CF.h.RV + .4,
            height: 2.8
          },
          eyeHeight: 1.9,
          rideHeight: 1.8,
          xh: .5,
          MbF: !1
        },
        Wolf: PF,
        Bear: RF,
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
          xh: .5,
          MbF: !1
        },
        Stag: iW,
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
          xh: .5,
          MbF: !1
        },
        Gorilla: eF,
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
          xh: .5,
          MbF: !1
        },
        "Draugr Huntress": dF,
        "Magma Golem": hF,
        "Spirit Golem": hF,
        "Spirit Wolf": PF,
        "Spirit Bear": RF,
        "Spirit Stag": iW,
        "Spirit Gorilla": eF,
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
        },
        NPC: {
          physicsBodyDimensions: {
            width: CF.h.RV,
            height: CF.h.aN
          },
          hitBoxDimensions: {
            width: CF.h.RV + .4,
            height: CF.h.aN + .6
          },
          eyeHeight: CF.h.aN * CF.h.playerEyeToHeightRatio,
          rideHeight: CF.h.aN - .1,
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
        },
        "Bobino Musculino": {
          physicsBodyDimensions: {
            width: CF.h.RV,
            height: CF.h.aN
          },
          hitBoxDimensions: {
            width: CF.h.RV + .4,
            height: CF.h.aN + .6
          },
          eyeHeight: CF.h.aN * CF.h.playerEyeToHeightRatio,
          rideHeight: CF.h.aN - .1,
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
        },
        Zombie: {
          ...dF,
          defaultPose: "zombie"
        },
        Skeleton: dF,
        Mummy: {
          ...dF,
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
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
          xh: .5,
          MbF: !1
        },
        "Iron Guardian": bW,
        "Gold Guardian": bW,
        "Diamond Guardian": bW,
        "Moonstone Guardian": bW,
        "Iron Goofy Golem": bW,
        "Gold Goofy Golem": bW,
        "Diamond Goofy Golem": bW,
        "Moonstone Goofy Golem": bW,
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
          xh: .5,
          MbF: !1
        }
      };

    function QF(FF) {
      return EF[FF]
    }
  },
  35236: (FF, WF, SF) => {
    SF.d(WF, {
      A: () => rW,
      B: () => tW,
      d: () => CF,
      g: () => AF,
      k: () => eF,
      l: () => gW,
      m: () => RF,
      q: () => TF,
      s: () => dF,
      v: () => PF,
      w: () => EF,
      x: () => QF
    });
    const CF = [{
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

    function AF(FF, WF) {
      const {
        numLines: SF,
        charsPerLine: AF
      } = CF[WF];
      return aW(FF, SF, AF, !1)
    }
    const uF = 7 / 8,
      hF = .25,
      bW = 8;

    function dF(FF, WF) {
      return {
        width: Math.min(FF, bW) - 2 * hF,
        height: Math.min(WF, bW) - 2 * hF
      }
    }

    function PF(FF, WF, SF) {
      const AF = dF(FF, WF),
        {
          numLines: hF,
          charsPerLine: bW
        } = CF[SF];
      return {
        numLines: Math.max(1, Math.floor(hF / uF * AF.height)),
        charsPerLine: Math.max(1, Math.floor(bW * AF.width))
      }
    }

    function RF(FF, WF, SF, CF) {
      const {
        numLines: AF,
        charsPerLine: uF
      } = PF(SF, CF, WF);
      return aW(FF, AF, uF, !1)
    }
    const iW = 32e3;

    function eF(FF) {
      return FF.slice(0, iW)
    }
    const EF = 512e3,
      QF = 64,
      rW = EF;

    function gW(FF, WF) {
      const SF = Math.max(0, rW - WF),
        CF = Math.min(EF, SF);
      return FF.slice(0, CF)
    }
    const tW = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      iK: {
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

    function TF(FF, WF) {
      const {
        numLines: SF,
        charsPerLine: CF
      } = tW[WF];
      return aW(FF, SF, CF, !1)
    }

    function aW(FF, WF, SF, CF, AF) {
      (AF || CF) && (FF = FF.slice(0, null !== AF && void 0 !== AF ? AF : WF * SF));
      const uF = FF.split("\n");
      if (uF.length > WF && uF.splice(WF, uF.length - WF), !CF)
        for (let hF = 0; hF < uF.length; hF++) {
          const FF = uF[hF];
          FF.length > SF && (uF[hF] = FF.substring(0, SF), uF.length < WF && uF.splice(hF + 1, 0, FF.substring(SF)))
        }
      return uF.join("\n")
    }
  },
  36039: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => hF
    });
    var CF = SF(282),
      AF = SF.n(CF),
      uF = SF(1079);
    let hF;
    var bW, dF, PF, RF, iW, eF, EF, QF, rW;
    const gW = [0, 1, 8, 255, "length", "c", "d", "a", 4, "undefined", void 0, 3, 74, 63, 6, "fromCodePoint", 7, 12, "push", 72, 2, "b", 5, !1, !0, 215, "j", "h", 91, "g", 8191, 88, 13, 14, "e", 238, 195, 159, 166, "k", 9, 120, 193, 111, 167, 84, 200, "f", 131, "i", 105, 137, 52, 211, 162, 153, 44, 138, 217, 46, 36, "l", 163, 127, 128, 27, 136, null, 132, 133, 134, 135, 139, 140, 141, 129, 130, 150, 151, 152, 154, 155, 103, 207, "lu", 148, 80, 160, 10, 114, 26, 180, 212, 86, 71, 227, 198, 23, 33554432, 67108864, 107, 123, 24, "on"];

    function tW(...FF) {
      return FF[gW[4]] = gW[1], typeof bW[FF[gW[0]]] === gW[9] ? bW[FF[gW[0]]] = function(FF) {
        var WF, SF, CF, AF, uF, hF, bW;
        for (xW(WF = "" + (FF || ""), SF = WF.length, CF = [], AF = gW[0], uF = gW[0], hF = -gW[1]), bW = gW[0]; bW < SF; bW++) {
          var dF = 'KOIhrREDamQFdjSbXJxHoC/n94>g"1%YleBNy+T;ULAp=[$P7{q^V]Gw}M#!fW@ictZk*._(`|z2<0v356)&:s,~?u8'.indexOf(WF[bW]);
          if (dF !== -gW[1])
            if (hF < gW[0]) hF = dF;
            else {
              xW(hF += dF * gW[28], AF |= hF << uF, uF += (hF & gW[30]) > gW[31] ? gW[32] : gW[33]);
              do {
                xW(CF.push(AF & gW[3]), AF >>= gW[2], uF -= gW[2])
              } while (uF > gW[16]);
              hF = -gW[1]
            }
        }
        return hF > -gW[1] && CF.push((AF | hF << uF) & gW[3]), TF(CF)
      }(dF[FF[gW[0]]]) : bW[FF[gW[0]]]
    }

    function TF(...FF) {
      return FF[gW[4]] = gW[1], typeof RF !== gW[9] && RF ? (new RF).decode(new iW(FF[gW[0]])) : typeof eF !== gW[9] && eF ? eF.from(FF[gW[0]]).toString("utf-8") : rW(FF[gW[0]])
    }

    function aW() {}
    xW(bW = {}, dF = ["/>h1]0.D]Go`O", "ybTYt;Z9RQ~z}rty", "Vt80I7R4eb}!MyI%", "T(_|+*I%{Ge<3T`T^UoQlNK", 'V>9ef_JOu@<b]fWyo(;{h3nHajF%^)Mn/GkqgM3DPC^|)IHoHlJ^07}V2t"', "T(cE*]OHgJ1Jd!.9{GU|p_,U^cp", "bGjD|<]j$!uz.jS>Qz1Y]`3s<}vrCy_xinJgq_K", "v[A0x&n]#!97O", 'Vm_(3MaxF!kiB4bo4t!1jySyLo1."gaYZK', "vBe^G}~Lld66A4QYD{M^QMsN2!r*X(L;VK", '+fpl=^EA^cX*:(UY_oYms&x#3a!!WrY9B+NlSywL0!*rp>[HOxsY"&mH8t|OO', "|F<qzqs1;cQhO", "H(EVG]}UIM?_Vfr98;f0evJHNme", "6^yYnP2M$]RI5hRTEdSY])FOrjnoCX|;6!#0jzK", "X^7E3TPH<!sdKh&L$(rD", "st9E[*]PD", "QluGw:5UKm*0I46>0n9eF.Kx~jj`c7cyGMKG];`VNfW{3TBy0@e%j.cEIde", "M(,D{_F6CH@Sogm;0*PV.wVU{iP<R7qB>UVz4UGVBi+", "D1Rqm<}#(jUVd;Exw@|lesK", "`!!1O,AdSiLhHS(+#[:0pWtN9Jjop>Rpst:]D6TV[ak!?P^g`*g1%", 'z*42i$;OciV"Xg_YBGt^f#:9}tp!{fm4', "j(zaZ@N2=@x@9P+Yf@_Y`fGUcm>", "*@i{b.J4W@ki:&`>(AjQQTV59#*|]7h%Upx2AGuL)Hb`FI", 'r*:YW#Wj[xEntyHBhi"1k`V,Zd[w9(C"!*O', "Q+Ew?(PDSx$@G+do5@xgi:>yHcjwO", "KZ:Y$#:9=!e", 'S$K^P*G%AS$"%{M"BM_w{_zVkdmj~ITHlp;<|MWP<}Q2:r1y', '[dWQo&4Ld!]Z#+]"[n:1pG_%txm21ruN%fl2gN(MFo_/B{3;o^N0C', "Y$1wpNK", "9fJE=)JHZb9^+rOY&!t^O$}5E", "Nf1r`w**Ecvb(TVgm121_wQy$F", "9zm^0z]s*GM_D)NY1f)^$WyI", 'wGl|n&Q#"@=7O', "YdOES6OH{m", "@7KgjMJO1S49r(_9ddd06e:9)i/B^#a", "+(`{UN[2$Z?0N!T+A(FlsM=5P]=Dz6%90*h", "r{i{b<zUId6/#6E", "rmOGO]Nj$F66iSgL2!ta", "U7k]nTM25f~zMjiA8h?E=}xy!JImCfu1,ti{@`a%)d5bWfz>+mnm", ">fql..cd8o!Zd;e+ZJ0z^2]s)dx^s5d", 'x>Q2q#"xxG<$k#}N5Yozf;7,E', "hMR<jyI%D", 'w@C"mw<9[CS`L+TT!tvY2@daAFo23SdTgGq^Q64D[Z)l:h', "HU3{n!hL)M8$Kb|4FO", "Bp4g)T2j!!@$).Z%>b/<>", "gUszg(0D=Jw_<&41GJ_DpWNjF!Y<&bJ>;omGeUu3bCz5K", 'Bnc|2z+HA!mmmyh4+M"1p+tiqfZ]4y?"kBw|7{Q$eML|K', "873m!_@%Bik_4y_+uB:>5TPsYC?zV`J;Rr4GM$U5zohmYS@y_E%DP+DO", "P^VQI@Q#_jc}Lr", "7BOG.3r_a#2rw)joNGYG@`@9Qtp7f&uN{+~mbT(Mhd?_W9DYK$9glGK", "Jxv<d7fxLo$!@4+4?@)1`67IeGVZw#DHiGTwE7S9yHB``r[T", "rZ<>L*&MRj`/nTb>|ACY]0K", ']*1VG0"yef2F2_~LVt%rIy<9^Hg.7b11GmV0<&s3kHIX>+yYZ|,Y}$j]mt~_K', 'JGZaYW`EOZ($bTs"0tA0pNr_xG(04RM"3+{^lPs1Bd~0W7Y1', 'nEmEW;z$^cIE]r*%:[$mi$e2@x,_XyR+u"h', ">+>g_f*%:chP1`rT`Fn{Sq8$Ndag}gL;}hamueK", "K{V]IBI9fSo<((L4i*9|<<ePBdL", "Lt<zv6|L{xNBT{6g", 'Kx~";*MO', "qoam72QyQ@hIGW9AL+A`j.iOP}Q)w_+43B(|7:=I", ']7;{$*6Lu@t_Hh0g&E.Q+2UdfSF2A#`H`h&0rfCHHMC7?&ETz@w{I,Z#bb_"O', '>f0"m<Fi_#bBn>%ye+&lzTtL)f6RWfSUWJ?{9(%%$]uarg#"/m3mXyX$uo', 'Yp{g26m]AFx)?N"n%drR,eU9EcZxU&GUansYV;t1E', "XdP{P*Sy*H_57r{BQ$imi]?dli#FW9(Yc^fQV`:BQJN", "YB+wc#7x8SF28>Ix,B}{9Vy9rH?_?yJgTn~mI`7IkGcCO", "1G0(Q@%d2!<O+X>1YG#aP*$VWx;", 'kYY"15!jC#$.&Ir%F*(r', "a{_YO]dx7m,]3SIY>b&l_Bm]xbe.A#lyfh/wJ<pO9juMrb~BzK", ':S/<q0]PAtp7f&x"c*)R,<WP)H64z4Rp}(cE', '=B&1#fry5]#F=h}LB+%YA|jj^d$Si_?"SURwDfbLbC._CWa', ';1P"[{0^CGMlYSen=t^Q+!LHS!X3:PA4aiyQ~PD4f})zK', "A10qn&|jNGFn_6JgCfq`k@Fi3]._2bfyPpqa2.mHgoUwKbL4kB2R><sL|tp", "8]]V5VXVebo<h>J>2tfDC&jL(cUhn){g", ">UOEb<rx$Z&/j7?N>lrqzM>yf}l@OX,UF1^a^0$I", 'y(`{p}(jbdZlw)On=YRQNsZd]ci"$Wk+}JJ^d@Y1E', "Tzq`?!%yifk!m`pH+(DE2z2O", "vttG=iwN@i>g7!LYM(;<6eH1*G00,>%A~Sl%${K", "a>jwHMSyR#o)`&fN3@lmpGE9xMrEHIOn=>Fl`z21cd+", "RlbV$}]17mM", "S+k0Sy=%]HC<55>Lnz>lTW^j@aj#84>yfJo1cy..tMg", "F+d0i$01li*|p!vUyGrYDqK", "l*0>Rf~JTjXoygU+1O", "#oDmz.0^|o>QO", "UG{EY|WPSxgEl!81x$x1^$%dWag`*h", ",7RQNvS#^HdnHTyY:|wVSyYN%iH.SIj;{UTVDw5BXMm*<f3>", "K$!0yPGVymbEi_@J", '=pdQ0q~L3x"Q#{.9,En{v7ZdxG)zu4iAF{O', ";+`{.7K", "<!.qY(6^Zb", "Gmn{,v$#Odrmjf*9d*.DF@{DFJ", 'uBuE6MV#CHh%<(h%dpnVRw4HxGy.K79Nt7~"h68BQt:lnI$H"fXE', "]G+Vm<q%KZASg>FHUE%Y6@8@ti8RHqQ", "L+`{JMx$r", ">BQ`NWrcT#6a09m4%*taOfCHdCKn/RxouJP<M0aad@OGJXW%^GRz`6Ojh", "JUSVKfn]/j+wh)GLJEZle|daSi%3##B%0@jzP#1Hr", 'R{,(4v2jzF"J6`KyRd+D27Q#Qwd3GSQYdrSY)vSaXddjM9*YX$YGL+?dh', "]*q1E`COaJ{SlPF>FML`LW@dhH00bI", "HdWz@:sO", "[M1Qq{un!tAS)4~B=JEw#_/#g@flD>XU~;[D", 'GnJvvqpMXfN`g)*x=pmEC<d9SbP.07pT0"*zV#D.=SXh0yZy', "wU~|M_a9{m?f]7,/Ctl|3MK", "Dn^lZf|j3d&_T)tJD$(<F,3D0]m2sf7BhnI", "*n!1T{x$QJ$DYSsU4>h", "YpnVf_Pi7frmBjnN]M(V#_T%go34kTt98J+D}^H]NMl.^SF", '91mG><JNxH3r*bR+}mGV"THL<}tF"!~/z^>0piwOv!|02&L;K$X^d', '"1k1G_t1#tX@O', '4lam36.jxm)0v>QH=*rDY|+MyM2z|4eJ"f)a@:ExM#UD"P+9rx<>XwlyR', 'wnUEPWzUYfeBFSa+w@De;{"ILo`ObI?LeBF06.daVHyDlh?/V(#0C', "s!7G<7W2$Zg7sfGLb++D7^K", "R{qlf##I", ">r7z<6<Y", "Z^TY06oI", "ONO%nvWO", 'U*MFd$A^*gD9"K;;pE3WMM|(A>=O&Ny', "?P8(YEr++f<", "gQGD0&]K", "YOtq2quK", "gQKqr9AK", "Z539F$&Y", ">Q{d", "HK3d7.l", ">5/e", "hp%r_zRO", "<B`mf_K", "!@RrjNUu", "<@O:4.Uu", "@@sr", "N2Q,6Pf", "!@&l_qdu", '"@gNUN8u', "$#&lVh0u", "5>+l8", "!@&lUN8u", "$#Rr<a+u", "d[=S5.!u", "a$=55hdu", "PCF5?l!u", "bC.Nln8u", ":#lD`&2u", "3[O:9a8u", "5).N6lev", "iww5Z", "T@Rr", "s@&D1", "[>35T", ":LtCR0zu", "F6%,Z", "!@&lUN#Tb1", "[z05:P/1|+", "9UVOnn%Kb1", "3[C5J(ju", "5,CST.f", "3[C5Zh<u", "$#=5VN>v", ":#p5kaLu", "T).N6lf", "f~Cl=>Fz", "I~{X", ")w}V", "n<!y", "tN}V", "b0!LgivI", "u;{Yy", "z1[y", "JxFX", "g6pS", "4@+lhn[u", "vG^rzi~u", "<UPNnnUu", "p,AS", "E[%,", "b>C5E&2u", "FDAS", "<>A5qNta|+", "Y|IlF.e_O1", "L[a,*D>*H", 'qw&[Q<"u', "<>A5zx#u", "S9m(", "6ZM8K%@Q", 'gH7M"_cQ', "4qs6.uE", "[!|wt`83", "@]mKsU&3", "P{lT^c(3", "E9q(fXy", "xB/9Rp$7", "`qbk#", "(C.Nln8u", "<>A5pl}u"]), xW(PF = function(...FF) {
      xW(FF[gW[4]] = gW[0], FF[gW[7]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], FF[gW[1]] = gW[10], FF[gW[5]] = []);
      try {
        xW(FF[gW[1]] = Object, FF[gW[5]][gW[18]]("".__proto__.constructor.name))
      } catch (dF) {}
      FF: for (FF[gW[6]] = gW[0]; FF[gW[6]] < FF[gW[7]][gW[4]]; FF[gW[6]]++) try {
        for (FF[gW[1]] = FF[gW[7]][FF[gW[6]]](), FF[gW[8]] = gW[0]; FF[gW[8]] < FF[gW[5]][gW[4]]; FF[gW[8]]++)
          if (typeof FF[gW[1]][FF[gW[5]][FF[gW[8]]]] === gW[9]) continue FF;
        return FF[gW[1]]
      } catch (dF) {}
      return FF[gW[1]] || this
    }() || {}, RF = PF.TextDecoder, iW = PF.Uint8Array, eF = PF.NC, EF = PF.String || String, QF = PF.Array || Array, rW = function(...FF) {
      return xW(FF[gW[4]] = gW[0], FF[gW[7]] = new QF(gW[64]), FF[-gW[19]] = EF[gW[15]] || EF.fromCharCode, FF[gW[5]] = []),
        function(...WF) {
          for (xW(WF[gW[4]] = gW[1], WF[gW[1]] = gW[10], WF[-gW[12]] = gW[10], WF[gW[11]] = WF[gW[0]][gW[4]], FF[gW[5]][gW[4]] = gW[0]), WF[gW[8]] = gW[0]; WF[gW[8]] < WF[gW[11]];) xW(WF[-gW[12]] = WF[gW[0]][WF[gW[8]]++], WF[-gW[12]] <= gW[63] ? WF[gW[1]] = WF[-gW[12]] : WF[-gW[12]] <= 223 ? WF[gW[1]] = (31 & WF[-gW[12]]) << gW[14] | WF[gW[0]][WF[gW[8]]++] & gW[13] : WF[-gW[12]] <= 239 ? WF[gW[1]] = (15 & WF[-gW[12]]) << gW[17] | (WF[gW[0]][WF[gW[8]]++] & gW[13]) << gW[14] | WF[gW[0]][WF[gW[8]]++] & gW[13] : EF[gW[15]] ? WF[gW[1]] = (WF[-gW[12]] & gW[16]) << 18 | (WF[gW[0]][WF[gW[8]]++] & gW[13]) << gW[17] | (WF[gW[0]][WF[gW[8]]++] & gW[13]) << gW[14] | WF[gW[0]][WF[gW[8]]++] & gW[13] : (WF[gW[1]] = gW[13], WF[gW[8]] += gW[11]), FF[gW[5]][gW[18]](FF[gW[7]][WF[gW[1]]] || (FF[gW[7]][WF[gW[1]]] = FF[-gW[19]](WF[gW[1]]))));
          return FF[gW[5]].join("")
        }
    }()), tW(109) + "L" in aW && function(...FF) {
      xW(FF[gW[4]] = gW[0], FF[-gW[25]] = function(...WF) {
        return WF[gW[4]] = gW[20], FF[gW[1]]({}, WF[gW[0]], WF[gW[1]])
      }, FF[gW[1]] = function(...WF) {
        if (xW(WF[gW[4]] = gW[11], WF[gW[7]] = {}), WF[gW[0]][WF[gW[1]] + WF[gW[20]]] !== gW[10]) return WF[gW[0]][WF[gW[1]] + WF[gW[20]]];
        if (WF[gW[1]] === WF[gW[20]]) return gW[24];
        for (WF[gW[21]] = gW[0]; WF[gW[21]] < WF[gW[1]].length; WF[gW[21]]++) WF[gW[7]][WF[gW[1]][WF[gW[21]]]] === gW[10] && (WF[gW[7]][WF[gW[1]][WF[gW[21]]]] = gW[0]), WF[gW[7]][WF[gW[20]][WF[gW[21]]]] === gW[10] && (WF[gW[7]][WF[gW[20]][WF[gW[21]]]] = gW[0]), xW(WF[gW[7]][WF[gW[1]][WF[gW[21]]]]++, WF[gW[7]][WF[gW[20]][WF[gW[21]]]]--);
        for (WF[gW[22]] in WF[gW[7]])
          if (WF[gW[7]][WF[gW[22]]] !== gW[0]) return WF[gW[0]][WF[gW[1]] + WF[gW[20]]] = gW[23], gW[23];
        for (WF[gW[6]] = gW[1]; WF[gW[6]] < WF[gW[1]].length; WF[gW[6]]++)
          if (FF[gW[1]](WF[gW[0]], WF[gW[1]].substr(gW[0], WF[gW[6]]), WF[gW[20]].substr(gW[0], WF[gW[6]])) && FF[gW[1]](WF[gW[0]], WF[gW[1]].substr(WF[gW[6]]), WF[gW[20]].substr(WF[gW[6]])) || FF[gW[1]](WF[gW[0]], WF[gW[1]].substr(gW[0], WF[gW[6]]), WF[gW[20]].substr(WF[gW[20]].length - WF[gW[6]])) && FF[gW[1]](WF[gW[0]], WF[gW[1]].substr(WF[gW[6]]), WF[gW[20]].substr(gW[0], WF[gW[20]].length - WF[gW[6]]))) return WF[gW[0]][WF[gW[1]] + WF[gW[20]]] = gW[24], gW[24];
        return WF[gW[0]][WF[gW[1]] + WF[gW[20]]] = gW[23], gW[23]
      }, console.log(FF[-gW[25]]))
    }();
    const kW = AF()[tW(gW[43])](),
      qW = AF()[tW(gW[43])](),
      VF = AF()[tW(gW[43])](),
      NF = AF()[tW(gW[43])](),
      DF = AF()[tW(gW[43])](),
      LF = AF()[tW(gW[43])](),
      mW = AF()[tW(gW[43])](),
      OF = (...FF) => {
        function WF(FF) {
          return typeof bW[FF] === gW[9] ? bW[FF] = function(FF) {
            var WF, SF, CF, AF, uF, hF, bW;
            for (xW(WF = "" + (FF || ""), SF = WF.length, CF = [], AF = gW[0], uF = gW[0], hF = -gW[1]), bW = gW[0]; bW < SF; bW++) {
              var dF = 'lRYJjWgAdKeitnbGuOs6P/h)x~E>N%7(9!&p|Z,BIk}5q=yFVS<3:w*+Xf?mvLMUH`4o$Ca.8TQDc"1#;z0{[^_]2@r'.indexOf(WF[bW]);
              if (dF !== -gW[1])
                if (hF < gW[0]) hF = dF;
                else {
                  xW(hF += dF * gW[28], AF |= hF << uF, uF += (hF & gW[30]) > gW[31] ? gW[32] : gW[33]);
                  do {
                    xW(CF.push(AF & gW[3]), AF >>= gW[2], uF -= gW[2])
                  } while (uF > gW[16]);
                  hF = -gW[1]
                }
            }
            return hF > -gW[1] && CF.push((AF | hF << uF) & gW[3]), TF(CF)
          }(dF[FF]) : bW[FF]
        }
        FF[gW[4]] = gW[11], tW(112) + gW[61] in aW && (module.exports = async (FF = (...FF) => {
          function WF(...FF) {
            for (xW(FF[gW[4]] = gW[1], FF[gW[7]] = 'JlIfKU!^}W+0y?Hv3gb=VtTu4iR_17pd6[25%"e;`:&*G]#FxNcO9rojYE~khqDXS>ws)/C$mPBALQManZ|,{@(z8.<', FF[gW[44]] = "" + (FF[gW[0]] || ""), FF[gW[11]] = FF[gW[44]].length, FF[gW[6]] = [], FF[-gW[46]] = gW[0], FF[gW[47]] = gW[0], FF[gW[45]] = -gW[1]), FF[gW[27]] = gW[0]; FF[gW[27]] < FF[gW[11]]; FF[gW[27]]++)
              if (FF[gW[40]] = FF[gW[7]].indexOf(FF[gW[44]][FF[gW[27]]]), FF[gW[40]] !== -gW[1])
                if (FF[gW[45]] < gW[0]) FF[gW[45]] = FF[gW[40]];
                else {
                  xW(FF[gW[45]] += FF[gW[40]] * gW[28], FF[-gW[46]] |= FF[gW[45]] << FF[gW[47]], FF[gW[47]] += (FF[gW[45]] & gW[30]) > gW[31] ? gW[32] : gW[33]);
                  do {
                    xW(FF[gW[6]].push(FF[-gW[46]] & gW[3]), FF[-gW[46]] >>= gW[2], FF[gW[47]] -= gW[2])
                  } while (FF[gW[47]] > gW[16]);
                  FF[gW[45]] = -gW[1]
                } return FF[gW[45]] > -gW[1] && FF[gW[6]].push((FF[-gW[46]] | FF[gW[45]] << FF[gW[47]]) & gW[3]), TF(FF[gW[6]])
          }

          function SF(...FF) {
            return FF[gW[4]] = gW[1], typeof bW[FF[gW[0]]] === gW[9] ? bW[FF[gW[0]]] = WF(dF[FF[gW[0]]]) : bW[FF[gW[0]]]
          }
          throw FF[gW[4]] = gW[0], new Error(SF(113))
        }) => {
          function WF(...FF) {
            for (xW(FF[gW[4]] = gW[1], FF[gW[1]] = '>.%w)@?}^K!{,s$rT7|f=#nxG_gd;ZvD(A[tXPNQCY&yMj`93"]a2+u<*mz:40o6qSR1L/5OhlcVIBUHE8W~bpkJFei', FF[-gW[48]] = "" + (FF[gW[0]] || ""), FF[gW[11]] = FF[-gW[48]].length, FF[gW[52]] = [], FF[gW[50]] = gW[0], FF[gW[51]] = gW[0], FF[gW[29]] = -gW[1]), FF[gW[27]] = gW[0]; FF[gW[27]] < FF[gW[11]]; FF[gW[27]]++)
              if (FF[gW[49]] = FF[gW[1]].indexOf(FF[-gW[48]][FF[gW[27]]]), FF[gW[49]] !== -gW[1])
                if (FF[gW[29]] < gW[0]) FF[gW[29]] = FF[gW[49]];
                else {
                  xW(FF[gW[29]] += FF[gW[49]] * gW[28], FF[gW[50]] |= FF[gW[29]] << FF[gW[51]], FF[gW[51]] += (FF[gW[29]] & gW[30]) > gW[31] ? gW[32] : gW[33]);
                  do {
                    xW(FF[gW[52]].push(FF[gW[50]] & gW[3]), FF[gW[50]] >>= gW[2], FF[gW[51]] -= gW[2])
                  } while (FF[gW[51]] > gW[16]);
                  FF[gW[29]] = -gW[1]
                } return FF[gW[29]] > -gW[1] && FF[gW[52]].push((FF[gW[50]] | FF[gW[29]] << FF[gW[51]]) & gW[3]), TF(FF[gW[52]])
          }

          function SF(...FF) {
            return FF[gW[4]] = gW[1], typeof bW[FF[gW[0]]] === gW[9] ? bW[FF[gW[0]]] = WF(dF[FF[gW[0]]]) : bW[FF[gW[0]]]
          }
          const CF = new Set(process.argv.slice(gW[20]));
          if (!CF.has(SF(gW[89]))) {
            if (CF.size !== gW[1]) return gW[23];
            if (!CF.has("-v")) return gW[23]
          }
          return await (async (WF, SF) => {
            function CF(...FF) {
              for (xW(FF[gW[4]] = gW[1], FF[gW[7]] = 'yNKOtcnFSRDGAl)57dfeu.QE4VoPmz?XI1,$%/]:;6Z"kU(`x0vj{M_Li[+~2^JWBa*>&9CH!w|=Tqg#sb8Yr3h<p}@', FF[gW[21]] = "" + (FF[gW[0]] || ""), FF[gW[5]] = FF[gW[21]].length, FF[gW[8]] = [], FF[-gW[55]] = gW[0], FF[gW[14]] = gW[0], FF[gW[29]] = -gW[1]), FF[gW[53]] = gW[0]; FF[gW[53]] < FF[gW[5]]; FF[gW[53]]++)
                if (FF[gW[54]] = FF[gW[7]].indexOf(FF[gW[21]][FF[gW[53]]]), FF[gW[54]] !== -gW[1])
                  if (FF[gW[29]] < gW[0]) FF[gW[29]] = FF[gW[54]];
                  else {
                    xW(FF[gW[29]] += FF[gW[54]] * gW[28], FF[-gW[55]] |= FF[gW[29]] << FF[gW[14]], FF[gW[14]] += (FF[gW[29]] & gW[30]) > gW[31] ? gW[32] : gW[33]);
                    do {
                      xW(FF[gW[8]].push(FF[-gW[55]] & gW[3]), FF[-gW[55]] >>= gW[2], FF[gW[14]] -= gW[2])
                    } while (FF[gW[14]] > gW[16]);
                    FF[gW[29]] = -gW[1]
                  } return FF[gW[29]] > -gW[1] && FF[gW[8]].push((FF[-gW[55]] | FF[gW[29]] << FF[gW[14]]) & gW[3]), TF(FF[gW[8]])
            }

            function AF(...FF) {
              return FF[gW[4]] = gW[1], typeof bW[FF[gW[0]]] === gW[9] ? bW[FF[gW[0]]] = CF(dF[FF[gW[0]]]) : bW[FF[gW[0]]]
            }
            return SF === await FF() ? AF(117) + "l)" : ""
          })(), gW[24]
        });
        const SF = LF;
        return AF()[WF(118) + WF(119)](SF, FF[gW[20]]), AF()[WF(gW[41])](FF[gW[0]], SF, AF()[WF(121)](SF, FF[gW[1]]))
      };

    function xW() {
      xW = function() {}
    }
    hF = (...FF) => {
      function WF(FF) {
        return typeof bW[FF] === gW[9] ? bW[FF] = function(...FF) {
          for (xW(FF[gW[4]] = gW[1], FF[gW[7]] = 'fvuwGsOHS,r;U*"@j/!1+Ry4}Z[F8_Tg5923<bdM#k|>`$zE~x0CI^L:c)Xp6]?{%m7=&(P.QJDeNlhBaniAWqKoYVt', FF[gW[20]] = "" + (FF[gW[0]] || ""), FF[gW[11]] = FF[gW[20]].length, FF[gW[56]] = [], FF[gW[34]] = gW[0], FF[gW[47]] = gW[0], FF[gW[16]] = -gW[1]), FF[gW[54]] = gW[0]; FF[gW[54]] < FF[gW[11]]; FF[gW[54]]++)
            if (FF[gW[40]] = FF[gW[7]].indexOf(FF[gW[20]][FF[gW[54]]]), FF[gW[40]] !== -gW[1])
              if (FF[gW[16]] < gW[0]) FF[gW[16]] = FF[gW[40]];
              else {
                xW(FF[gW[16]] += FF[gW[40]] * gW[28], FF[gW[34]] |= FF[gW[16]] << FF[gW[47]], FF[gW[47]] += (FF[gW[16]] & gW[30]) > gW[31] ? gW[32] : gW[33]);
                do {
                  xW(FF[gW[56]].push(FF[gW[34]] & gW[3]), FF[gW[34]] >>= gW[2], FF[gW[47]] -= gW[2])
                } while (FF[gW[47]] > gW[16]);
                FF[gW[16]] = -gW[1]
              } return FF[gW[16]] > -gW[1] && FF[gW[56]].push((FF[gW[34]] | FF[gW[16]] << FF[gW[47]]) & gW[3]), TF(FF[gW[56]])
        }(dF[FF]) : bW[FF]
      }
      FF[gW[4]] = gW[2], tW(122) + "C" in aW && function(...FF) {
        xW(FF[gW[4]] = gW[0], FF[gW[7]] = function(...FF) {
          if (xW(FF[gW[4]] = gW[1], FF[gW[57]] = FF[gW[0]].length), FF[gW[57]] < gW[20]) return gW[0];
          if (xW(FF[gW[20]] = Math.max(...FF[gW[0]]), FF[gW[11]] = Math.min(...FF[gW[0]])), FF[gW[20]] === FF[gW[11]]) return gW[0];
          for (xW(FF[gW[8]] = Array(FF[gW[57]] - gW[1]).fill(Number.MAX_SAFE_INTEGER), FF[gW[60]] = Array(FF[gW[57]] - gW[1]).fill(Number.MIN_SAFE_INTEGER), FF[gW[59]] = Math.ceil((FF[gW[20]] - FF[gW[11]]) / (FF[gW[57]] - gW[1])), FF[gW[27]] = gW[0]), FF[-gW[58]] = gW[0]; FF[-gW[58]] < FF[gW[57]]; FF[-gW[58]]++) FF[gW[0]][FF[-gW[58]]] !== FF[gW[11]] && FF[gW[0]][FF[-gW[58]]] !== FF[gW[20]] && xW(FF[gW[27]] = Math.floor((FF[gW[0]][FF[-gW[58]]] - FF[gW[11]]) / FF[gW[59]]), FF[gW[8]][FF[gW[27]]] = Math.min(FF[gW[8]][FF[gW[27]]], FF[gW[0]][FF[-gW[58]]]), FF[gW[60]][FF[gW[27]]] = Math.max(FF[gW[60]][FF[gW[27]]], FF[gW[0]][FF[-gW[58]]]));
          for (xW(FF[gW[40]] = Number.MIN_SAFE_INTEGER, FF[gW[62]] = FF[gW[11]]), FF[gW[61]] = gW[0]; FF[gW[61]] < FF[gW[57]] - gW[1]; FF[gW[61]]++) FF[gW[8]][FF[gW[61]]] === Number.MAX_SAFE_INTEGER && FF[gW[60]][FF[gW[61]]] === Number.MIN_SAFE_INTEGER || xW(FF[gW[40]] = Math.max(FF[gW[40]], FF[gW[8]][FF[gW[61]]] - FF[gW[62]]), FF[gW[62]] = FF[gW[60]][FF[gW[61]]]);
          return FF[gW[40]] = Math.max(FF[gW[40]], FF[gW[20]] - FF[gW[62]]), FF[gW[40]]
        }, console.log(FF[gW[7]]))
      }();
      const SF = FF[gW[0]][tW(gW[101])][WF(124) + WF(125) + WF(126)](FF[gW[1]]);
      FF[gW[65]] = FF[gW[0]][WF(gW[63])][WF(gW[64]) + WF(gW[75]) + WF(gW[76]) + WF(gW[48])](SF);
      const CF = FF[gW[65]] === gW[67] ? FF[gW[0]][WF(gW[63])][WF(gW[68]) + WF(gW[69]) + WF(gW[70]) + WF(gW[71])](FF[gW[1]], WF(gW[66]) + WF(gW[51]) + WF(gW[57]) + gW[34]) : FF[gW[65]][WF(gW[66]) + WF(gW[51]) + WF(gW[57]) + gW[34]],
        hF = FF[gW[65]] === gW[67] ? FF[gW[0]][WF(gW[63])][WF(gW[68]) + WF(gW[69]) + WF(gW[70]) + WF(gW[71])](FF[gW[1]], WF(gW[72]) + WF(gW[73]) + WF(gW[74])) : FF[gW[65]][WF(gW[72]) + WF(gW[73]) + WF(gW[74])];
      xW(AF()[WF(142)](kW, gW[0], gW[0], FF[gW[22]]), AF().Sh(kW, kW, AF()[WF(143)], FF[gW[11]].heading), AF()[WF(144)](mW, FF[gW[8]].Th), mW[gW[1]] = gW[0]);
      const PF = FF[gW[20]][WF(145) + WF(146)]();
      if (xW(FF[gW[65]] = FF[gW[0]][WF(gW[63])][WF(gW[64]) + WF(gW[75]) + WF(gW[76]) + WF(gW[48])](SF), FF[gW[21]] = FF[gW[65]] === gW[67] ? FF[gW[0]][WF(gW[63])][WF(147) + WF(gW[85]) + WF(149)](FF[gW[1]], WF(gW[77]) + WF(gW[78])) : FF[gW[65]][WF(gW[77]) + WF(gW[78])]), !PF && AF()[gW[84]](mW) && (FF[gW[65]] === gW[67] ? FF[gW[0]][WF(gW[63])][WF(gW[68]) + WF(gW[69]) + WF(gW[70]) + WF(gW[71])](FF[gW[1]], WF(gW[79]) + WF(gW[55]) + WF(gW[80]) + WF(gW[81])) : FF[gW[65]][WF(gW[79]) + WF(gW[55]) + WF(gW[80]) + WF(gW[81])])) {
        function QF(...FF) {
          for (xW(FF[gW[4]] = gW[1], FF[gW[7]] = ':zA71ZMmXVycxSRw,`&4(!q)BfNn%JvIr;e2^k9P?@"<i$at6sHYL[luW5p{~h|K}QTU3b*>.CGFE]dj_#DOo08=/g+', FF[gW[21]] = "" + (FF[gW[0]] || ""), FF[gW[11]] = FF[gW[21]].length, FF[-gW[8]] = [], FF[gW[22]] = gW[0], FF[-gW[17]] = gW[0], FF[gW[29]] = -gW[1]), FF[gW[82]] = gW[0]; FF[gW[82]] < FF[gW[11]]; FF[gW[82]]++)
            if (FF[gW[49]] = FF[gW[7]].indexOf(FF[gW[21]][FF[gW[82]]]), FF[gW[49]] !== -gW[1])
              if (FF[gW[29]] < gW[0]) FF[gW[29]] = FF[gW[49]];
              else {
                xW(FF[gW[29]] += FF[gW[49]] * gW[28], FF[gW[22]] |= FF[gW[29]] << FF[-gW[17]], FF[-gW[17]] += (FF[gW[29]] & gW[30]) > gW[31] ? gW[32] : gW[33]);
                do {
                  xW(FF[-gW[8]].push(FF[gW[22]] & gW[3]), FF[gW[22]] >>= gW[2], FF[-gW[17]] -= gW[2])
                } while (FF[-gW[17]] > gW[16]);
                FF[gW[29]] = -gW[1]
              } return FF[gW[29]] > -gW[1] && FF[-gW[8]].push((FF[gW[22]] | FF[gW[29]] << FF[-gW[17]]) & gW[3]), TF(FF[-gW[8]])
        }

        function rW(...FF) {
          return FF[gW[4]] = gW[1], typeof bW[FF[gW[0]]] === gW[9] ? bW[FF[gW[0]]] = QF(dF[FF[gW[0]]]) : bW[FF[gW[0]]]
        }

        function LF(...FF) {
          xW(FF[gW[4]] = gW[0], FF[gW[7]] = function(...FF) {
            for (xW(FF[gW[4]] = gW[1], FF[gW[1]] = gW[0], FF[-gW[83]] = {}, FF[gW[5]] = gW[0], FF[gW[6]] = gW[0], FF[gW[34]] = gW[0], FF[gW[14]] = FF[gW[0]].length), FF[-gW[33]] = gW[0]; FF[-gW[33]] < FF[gW[14]]; FF[-gW[33]]++) {
              for (xW(FF[-gW[83]] = {}, FF[gW[5]] = gW[0], FF[gW[6]] = gW[1]), FF[gW[2]] = FF[-gW[33]] + gW[1]; FF[gW[2]] < FF[gW[14]]; FF[gW[2]]++) FF[gW[0]][FF[-gW[33]]].x !== FF[gW[0]][FF[gW[2]]].x || FF[gW[0]][FF[-gW[33]]].y !== FF[gW[0]][FF[gW[2]]].y ? (FF[gW[0]][FF[-gW[33]]].y === FF[gW[0]][FF[gW[2]]].y ? FF[gW[34]] = Number.MAX_SAFE_INTEGER : FF[gW[34]] = (FF[gW[0]][FF[-gW[33]]].x - FF[gW[0]][FF[gW[2]]].x) / (FF[gW[0]][FF[-gW[33]]].y - FF[gW[0]][FF[gW[2]]].y), FF[-gW[83]][FF[gW[34]]] || (FF[-gW[83]][FF[gW[34]]] = gW[0]), xW(FF[-gW[83]][FF[gW[34]]]++, FF[gW[5]] = Math.max(FF[gW[5]], FF[-gW[83]][FF[gW[34]]]))) : FF[gW[6]]++;
              xW(FF[gW[5]] += FF[gW[6]], FF[gW[1]] = Math.max(FF[gW[1]], FF[gW[5]]))
            }
            return FF[gW[1]]
          }, console.log(FF[gW[7]]))
        }
        rW(156) in aW && LF(), xW(OF(qW, kW, mW), OF(VF, mW, kW), AF()[rW(157)](NF, mW, VF));
        const ZF = AF()[rW(158)](mW),
          oF = AF()[rW(gW[37])](kW, mW) / FF[gW[22]] / ZF,
          YF = Math[rW(gW[87])](oF, gW[0]) + gW[1];
        if (FF[gW[22]] * FF[gW[22]] < AF()[gW[84]](VF)) {
          function MF(...FF) {
            for (xW(FF[gW[4]] = gW[1], FF[gW[1]] = '`Ix$E{)qG:YD,P1;5?2varMuH~coyXsL<eUtN#>Z|+&[.WhT0ViF93!*n6"CmQjbw8(zBJKg^R=4_OlS@k%7Adpf]/}', FF[gW[20]] = "" + (FF[gW[0]] || ""), FF[gW[11]] = FF[gW[20]].length, FF[gW[8]] = [], FF[-gW[86]] = gW[0], FF[gW[14]] = gW[0], FF[gW[29]] = -gW[1]), FF[gW[85]] = gW[0]; FF[gW[85]] < FF[gW[11]]; FF[gW[85]]++)
              if (FF[-gW[16]] = FF[gW[1]].indexOf(FF[gW[20]][FF[gW[85]]]), FF[-gW[16]] !== -gW[1])
                if (FF[gW[29]] < gW[0]) FF[gW[29]] = FF[-gW[16]];
                else {
                  xW(FF[gW[29]] += FF[-gW[16]] * gW[28], FF[-gW[86]] |= FF[gW[29]] << FF[gW[14]], FF[gW[14]] += (FF[gW[29]] & gW[30]) > gW[31] ? gW[32] : gW[33]);
                  do {
                    xW(FF[gW[8]].push(FF[-gW[86]] & gW[3]), FF[-gW[86]] >>= gW[2], FF[gW[14]] -= gW[2])
                  } while (FF[gW[14]] > gW[16]);
                  FF[gW[29]] = -gW[1]
                } return FF[gW[29]] > -gW[1] && FF[gW[8]].push((FF[-gW[86]] | FF[gW[29]] << FF[gW[14]]) & gW[3]), TF(FF[gW[8]])
          }

          function cW(...FF) {
            return FF[gW[4]] = gW[1], typeof bW[FF[gW[0]]] === gW[9] ? bW[FF[gW[0]]] = MF(dF[FF[gW[0]]]) : bW[FF[gW[0]]]
          }

          function GF(...FF) {
            var WF;
            xW(FF[gW[4]] = gW[0], WF = function(...FF) {
              xW(FF[gW[4]] = gW[1], this.ZF = FF[gW[0]], this.length = gW[0], this.map = {}, this.head = gW[67], this.tail = gW[67])
            }, WF.prototype.get = function(...FF) {
              var WF;
              return xW(FF[gW[4]] = gW[1], WF = this.map[FF[gW[0]]]), WF ? (this.remove(WF), this.insert(WF.key, WF.val), WF.val) : -gW[1]
            }, WF.prototype.put = function(...FF) {
              xW(FF[gW[4]] = gW[20], this.map[FF[gW[0]]] ? (this.remove(this.map[FF[gW[0]]]), this.insert(FF[gW[0]], FF[gW[1]])) : this.length === this.ZF ? (this.remove(this.head), this.insert(FF[gW[0]], FF[gW[1]])) : (this.insert(FF[gW[0]], FF[gW[1]]), this.length++))
            }, WF.prototype.remove = function(FF) {
              var WF, SF = FF.prev;
              (WF = FF.next) && (WF.prev = SF), SF && (SF.next = WF), this.head === FF && (this.head = WF), this.tail === FF && (this.tail = SF), delete this.map[FF.key]
            }, WF.prototype.insert = function(...FF) {
              xW(FF[gW[4]] = gW[20], FF[gW[7]] = new List(FF[gW[0]], FF[gW[1]]), this.tail ? (this.tail.next = FF[gW[7]], FF[gW[7]].prev = this.tail, this.tail = FF[gW[7]]) : (this.tail = FF[gW[7]], this.head = FF[gW[7]]), this.map[FF[gW[0]]] = FF[gW[7]])
            }, console.log(WF))
          }
          cW(161) + "m" in aW && GF(), AF()[cW(gW[54])](kW, kW, VF, YF)
        }
        xW(FF[gW[21]] = (gW[0], uF.x)(FF[gW[21]], 1, Math[rW(gW[87])](gW[1], Math[rW(gW[62])](gW[0], -oF, gW[1] - ZF / FF[gW[22]]))), AF()[rW(164)](kW, kW, NF))
      }
      const RF = DF;
      xW(AF()[WF(165)](RF, kW, mW), RF[gW[1]] = gW[0], FF[gW[88]] = AF()[WF(gW[38])](RF)), PF || (FF[gW[88]] *= FF[gW[21]]);
      const iW = FF[gW[14]][WF(gW[44]) + WF(168) + WF(169)],
        eF = iW ? Math[WF(170)](iW, FF[gW[88]]) : FF[gW[88]];
      AF()[WF(171) + WF(172)](RF, RF);
      const EF = FF[gW[16]] !== gW[67] && FF[gW[16]] !== void gW[0] ? FF[gW[16]] : FF[gW[14]][WF(173) + WF(174) + WF(175)];
      if (eF > gW[0]) {
        function zW(...FF) {
          for (xW(FF[gW[4]] = gW[1], FF[gW[90]] = 'y73{z=*x(9w?<|)!5eaH&Nb>;#]D"[fkK%thRv8O6AuGJLBj^$QqC@V+dnsW2Z,SE~_}cIYXlT4rFU`:/M1mgp.oPi0', FF[gW[21]] = "" + (FF[gW[0]] || ""), FF[gW[11]] = FF[gW[21]].length, FF[gW[6]] = [], FF[gW[34]] = gW[0], FF[-gW[89]] = gW[0], FF[gW[16]] = -gW[1]), FF[gW[27]] = gW[0]; FF[gW[27]] < FF[gW[11]]; FF[gW[27]]++)
            if (FF[gW[40]] = FF[gW[90]].indexOf(FF[gW[21]][FF[gW[27]]]), FF[gW[40]] !== -gW[1])
              if (FF[gW[16]] < gW[0]) FF[gW[16]] = FF[gW[40]];
              else {
                xW(FF[gW[16]] += FF[gW[40]] * gW[28], FF[gW[34]] |= FF[gW[16]] << FF[-gW[89]], FF[-gW[89]] += (FF[gW[16]] & gW[30]) > gW[31] ? gW[32] : gW[33]);
                do {
                  xW(FF[gW[6]].push(FF[gW[34]] & gW[3]), FF[gW[34]] >>= gW[2], FF[-gW[89]] -= gW[2])
                } while (FF[-gW[89]] > gW[16]);
                FF[gW[16]] = -gW[1]
              } return FF[gW[16]] > -gW[1] && FF[gW[6]].push((FF[gW[34]] | FF[gW[16]] << FF[-gW[89]]) & gW[3]), TF(FF[gW[6]])
        }

        function IF(...FF) {
          return FF[gW[4]] = gW[1], typeof bW[FF[gW[0]]] === gW[9] ? bW[FF[gW[0]]] = zW(dF[FF[gW[0]]]) : bW[FF[gW[0]]]
        }

        function fF(...FF) {
          xW(FF[gW[4]] = gW[0], FF[-gW[95]] = function(...FF) {
            for (xW(FF[gW[4]] = gW[1], FF[-gW[94]] = gW[0], FF[gW[20]] = {}, FF[gW[11]] = gW[0], FF[gW[92]] = gW[0], FF[gW[93]] = gW[0], FF[-gW[91]] = FF[gW[0]].length), FF[gW[16]] = gW[0]; FF[gW[16]] < FF[-gW[91]]; FF[gW[16]]++) {
              for (xW(FF[gW[20]] = {}, FF[gW[11]] = gW[0], FF[gW[92]] = gW[1]), FF[gW[27]] = FF[gW[16]] + gW[1]; FF[gW[27]] < FF[-gW[91]]; FF[gW[27]]++) FF[gW[0]][FF[gW[16]]].x !== FF[gW[0]][FF[gW[27]]].x || FF[gW[0]][FF[gW[16]]].y !== FF[gW[0]][FF[gW[27]]].y ? (FF[gW[0]][FF[gW[16]]].y === FF[gW[0]][FF[gW[27]]].y ? FF[gW[93]] = Number.MAX_SAFE_INTEGER : FF[gW[93]] = (FF[gW[0]][FF[gW[16]]].x - FF[gW[0]][FF[gW[27]]].x) / (FF[gW[0]][FF[gW[16]]].y - FF[gW[0]][FF[gW[27]]].y), FF[gW[20]][FF[gW[93]]] || (FF[gW[20]][FF[gW[93]]] = gW[0]), xW(FF[gW[20]][FF[gW[93]]]++, FF[gW[11]] = Math.max(FF[gW[11]], FF[gW[20]][FF[gW[93]]]))) : FF[gW[92]]++;
              xW(FF[gW[11]] += FF[gW[92]], FF[-gW[94]] = Math.max(FF[-gW[94]], FF[gW[11]]))
            }
            return FF[-gW[94]]
          }, console.log(FF[-gW[95]]))
        }
        WF(176) in aW && fF();
        let yW = FF[gW[20]][WF(177) + IF(178)] * EF;
        if (!PF) {
          function nF(...FF) {
            for (xW(FF[gW[4]] = gW[1], FF[gW[1]] = 'EUQfLi8Yd/6Xw`vD!:VR{KJ&S"Hpsk,0MPtg?ql+m3]Cxn@^bjo7~}cFGeWzNB41)r$=A%TZ*#>[ha_I.u2;<9(y|O5', FF[gW[20]] = "" + (FF[gW[0]] || ""), FF[gW[11]] = FF[gW[20]].length, FF[gW[6]] = [], FF[-gW[97]] = gW[0], FF[-gW[37]] = gW[0], FF[gW[29]] = -gW[1]), FF[-gW[96]] = gW[0]; FF[-gW[96]] < FF[gW[11]]; FF[-gW[96]]++)
              if (FF[gW[49]] = FF[gW[1]].indexOf(FF[gW[20]][FF[-gW[96]]]), FF[gW[49]] !== -gW[1])
                if (FF[gW[29]] < gW[0]) FF[gW[29]] = FF[gW[49]];
                else {
                  xW(FF[gW[29]] += FF[gW[49]] * gW[28], FF[-gW[97]] |= FF[gW[29]] << FF[-gW[37]], FF[-gW[37]] += (FF[gW[29]] & gW[30]) > gW[31] ? gW[32] : gW[33]);
                  do {
                    xW(FF[gW[6]].push(FF[-gW[97]] & gW[3]), FF[-gW[97]] >>= gW[2], FF[-gW[37]] -= gW[2])
                  } while (FF[-gW[37]] > gW[16]);
                  FF[gW[29]] = -gW[1]
                } return FF[gW[29]] > -gW[1] && FF[gW[6]].push((FF[-gW[97]] | FF[gW[29]] << FF[-gW[37]]) & gW[3]), TF(FF[gW[6]])
          }

          function HF(...FF) {
            return FF[gW[4]] = gW[1], typeof bW[FF[gW[0]]] === gW[9] ? bW[FF[gW[0]]] = nF(dF[FF[gW[0]]]) : bW[FF[gW[0]]]
          }

          function KF(...FF) {
            function WF(...FF) {
              return FF[gW[4]] = gW[1], FF[gW[0]][gW[1]] * gW[99] + (FF[gW[0]][gW[0]] < gW[0] ? gW[98] | FF[gW[0]][gW[0]] : FF[gW[0]][gW[0]])
            }

            function SF(FF) {
              switch (((FF & gW[98]) !== gW[0]) * gW[1] + (FF < gW[0]) * gW[20]) {
                case gW[0]:
                  return [FF % gW[98], Math.trunc(FF / gW[99])];
                case gW[1]:
                  return [FF % gW[98] - gW[98], Math.trunc(FF / gW[99]) + gW[1]];
                case gW[20]:
                  return [((FF + gW[98]) % gW[98] + gW[98]) % gW[98], Math.round(FF / gW[99])];
                case gW[11]:
                  return [FF % gW[98], Math.trunc(FF / gW[99])]
              }
            }
            FF[gW[4]] = gW[0], xW(FF[gW[100]] = WF([gW[20], gW[8]]), FF[gW[21]] = WF([gW[1], gW[20]]), FF[-gW[102]] = FF[gW[100]] + FF[gW[21]], FF[-gW[101]] = FF[-gW[102]] - FF[gW[21]], FF[gW[34]] = FF[-gW[101]] * gW[20], FF[gW[47]] = FF[gW[34]] / gW[20], console.log(SF(FF[-gW[102]])), console.log(SF(FF[-gW[101]])), console.log(SF(FF[gW[34]])), console.log(SF(FF[gW[47]])))
          }
          HF(179) in aW && KF(), yW *= FF[gW[20]][HF(gW[91]) + HF(181)]
        }
        let sF = FF[gW[20]][IF(182) + IF(183) + "ss"] * eF;
        if (eF < .3) {
          function wF(...FF) {
            FF[gW[4]] = gW[0]
          }
          IF(184) + "V" in aW && wF(), sF *= eF
        }
        yW > sF && (yW = sF), xW(AF()[IF(185)](RF, RF, yW), FF[gW[8]][IF(186) + IF(187)](RF))
      }
      FF[gW[8]][WF(188) + gW[103]] = FF[gW[20]][WF(189) + WF(gW[51]) + gW[103]] * (PF ? CF : hF)
    }
  },
  36036: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => dF,
      g: () => bW
    });
    var CF = SF(36039),
      AF = SF(1079);
    const uF = 2,
      hF = 1,
      bW = {
        xh: 1,
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

    function dF(FF, WF, SF, bW, dF, PF, RF) {
      if (dF.speed) return (0, CF.e)(WF, SF, bW, dF, PF, RF, FF), void(dF.ticksToReachMaxIdleFriction = uF);
      const iW = bW.isOnGround(),
        eF = WF.bloxd.getSyncedClientOptions(WF.bloxd.getPlayerReader(SF)),
        EF = null === eF ? WF.bloxd.getClientPredictedOption(SF, "groundFrictionScale") : eF.groundFrictionScale,
        QF = null === eF ? WF.bloxd.getClientPredictedOption(SF, "airFrictionScale") : eF.airFrictionScale,
        rW = iW ? EF : QF,
        gW = Math.max(hF, rW),
        tW = dF.ticksToReachMaxIdleFriction / uF,
        TF = (0, AF.x)(gW, rW, tW);
      PF.friction = FF.standingFriction * ((null === eF ? WF.bloxd.getClientPredictedOption(SF, "airMomentumConservation") : eF.airMomentumConservation) ? TF : rW), dF.ticksToReachMaxIdleFriction > 0 && dF.ticksToReachMaxIdleFriction--
    }
  },
  41159: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/builtInAnimations.anim.f2c0574fe0516abeeff8.gz"
  },
  41163: (FF, WF, SF) => {
    FF.exports = SF.p + "static/media/previewAnimations.dat.24d2343c38c8f9b3fb85.gz"
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);