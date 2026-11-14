export const id = 48;
export const ids = [48];
export const modules = {
  36680: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => CW,
      h: () => zR
    });
    const wW = new WeakMap;

    function CW(WW, RW) {
      return wW.set(WW, RW), WW
    }

    function zR(WW) {
      var RW;
      return null !== (RW = wW.get(WW)) && void 0 !== RW ? RW : null
    }
  },
  40721: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      WasmPreviewHost: () => XR,
      pageBuiltInAnimationPack: () => tR,
      pagePreviews: () => qR,
      previewModule: () => KW
    });
    var wW = MW(2801),
      CW = MW(265);
    const zR = "[bloxd-wasm-client]";

    function AW(WW) {
      const RW = {
        wasm: "unknown",
        client: String(CW.e)
      };
      try {
        var MW;
        RW.wasm = null !== (MW = null === WW || void 0 === WW ? void 0 : WW.XW()) && void 0 !== MW ? MW : RW.wasm
      } catch {}
      return RW
    }
    async function bR(WW) {
      if (WW.length < 2 || 31 !== WW[0] || 139 !== WW[1]) return WW;
      if ("undefined" === typeof DecompressionStream) {
        const {
          ungzip: RW
        } = await MW.e(198).then((() => MW(35150)));
        return RW(WW)
      }
      const RW = new Blob([WW]).stream().pipeThrough(new DecompressionStream("gzip"));
      return new Uint8Array(await new Response(RW).arrayBuffer())
    }

    function yR(WW, RW, wW, CW) {
      Promise.resolve().then((() => MW(38425))).then((MW => {
        let {
          reportDataLoadFailure: zR
        } = MW;
        zR(WW, RW, wW, CW)
      }), (RW => {
        console.warn(`${zR} ${WW} didn't load, and the report couldn't be sent`, wW.error, RW)
      }))
    }
    const NW = [3e4, 12e4, 3e5];
    class eW {
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
        const RW = AW(WW),
          MW = await async function(WW, RW) {
            let MW;
            try {
              MW = await WW()
            } catch (wW) {
              return {
                stage: "fetch",
                error: wW
              }
            }
            try {
              return RW(MW) ? null : {
                stage: "decode",
                error: null
              }
            } catch (wW) {
              return {
                stage: "decode",
                error: wW
              }
            }
          }((() => this.deps.fetch()), (RW => {
            const MW = WW.PBW(RW);
            return MW && this.resolveSet(RW), MW
          }));
        if (null !== MW) {
          if ("fetch" === MW.stage) {
            this.loading = null;
            const RW = NW[this.retries++];
            void 0 !== RW && this.deps.later((() => {
              this.provide(WW)
            }), RW)
          }
          this.reported || (this.reported = !0, this.deps.onFailed(MW, RW))
        }
      }
    }
    let BW = null;

    function tR() {
      return BW ??= new eW({
        fetch: async () => bR(await (0, wW.q)(TW(), {
          priority: "low"
        })),
        onFailed: (WW, RW) => {
          yR("builtInAnimations", TW(), WW, RW)
        },
        later: (WW, RW) => {
          setTimeout(WW, RW)
        }
      }), BW
    }

    function TW() {
      return MW(40727)
    }
    var gR = MW(2793),
      iR = MW(34631),
      YW = MW(38277),
      JW = MW(1033),
      PW = MW(38292),
      IW = MW(38493),
      oW = MW(38432),
      lW = MW(38437),
      FW = MW(38440),
      fW = MW(38317),
      QW = MW(38503),
      rR = MW(38326),
      cR = MW(38393),
      XW = MW(38469),
      jR = MW(38500),
      kR = MW(40019),
      aR = MW(38324);
    const sW = "[bloxd-previews]",
      dW = 4e5,
      pW = 0,
      hW = 1,
      UW = 1,
      EW = 2,
      VW = 3,
      mR = 0,
      xR = 1,
      vR = 2;

    function KW(WW) {
      const RW = WW,
        MW = (0, PW.F)(WW),
        wW = (0, PW.k)(WW);
      return null !== MW && null !== wW && "function" === typeof RW.itW && "function" === typeof RW.YBW && "function" === typeof RW.JBW ? RW : null
    }

    function uW(WW, RW, MW) {
      const wW = Math.min(Number.isFinite(MW) && MW > 0 ? MW : 1, 2);
      let CW = Math.max(0, WW) * wW,
        zR = Math.max(0, RW) * wW;
      if (CW * zR > dW) {
        const WW = Math.sqrt(dW / (CW * zR));
        CW *= WW, zR *= WW
      }
      return [Math.max(1, Math.floor(CW)), Math.max(1, Math.floor(zR))]
    }

    function OW() {
      return MW(40736)
    }
    async function nW(WW, RW) {
      const wW = await (0, rR.D)();
      if (null === wW || (0, PW.l)(wW) || "webgpu" !== wW.backend || (0, rR.b)()) return;
      const CW = (0, PW.H)();
      if (null !== CW) {
        const MW = `WebGPU failed at home (${WW}${void 0===RW?"":`: ${RW instanceof Error?RW.message:(0,aR.g)(RW)}`}) and ${CW}`;
        return console.warn(`${sW} ${MW}: the previews stop`, null !== RW && void 0 !== RW ? RW : ""), void(0, rR.t)(MW)
      }(0, rR.s)();
      try {
        await async function(WW, RW, wW) {
          var CW;
          const zR = (0, gR._)(),
            {
              flushCrashReports: bR,
              reportRenderReload: yR
            } = await Promise.resolve().then((() => MW(38425)));
          yR("webgpu", "start_failed" === WW ? 0 : 1, AW(zR ? (0, gR.N)() : null), {
            cause: WW,
            error: "lost" === WW && null !== (CW = (0, PW.K)(zR ? (0, PW.F)((0, gR.N)()) : null)) && void 0 !== CW ? CW : RW,
            context: {
              adapter: wW,
              boundAtMs: "start_failed" === WW ? null : (0, rR.B)()
            }
          }), await bR(cR.b)
        }(WW, RW, wW.adapter)
      } catch (zR) {
        console.warn(`${sW} WebGPU failed at home (${WW}), and its report couldn't be sent`, zR)
      }(0, cR.i)()
    }
    async function GW() {
      if (!(0, gR._)()) {
        const WW = await (0, rR.D)();
        if (null === WW || (0, PW.l)(WW)) return null;
        if (await (0, iR.c)(await WW.load(), YW.i), !(0, gR._)()) return null
      }
      return KW((0, gR.N)())
    }
    class LW {
      constructor(WW, RW, MW, wW, CW, zR) {
        this.page = WW, this.host = RW, this.id = MW, this.canvas = wW, this.size = CW, this.models = void 0, this.images = void 0, this.write = void 0, this.outcomes = [], this.closed = !1, this.quiet = 0, this.settled = [];
        const AW = {
            ...zR.images,
            glbUrl: WW => {
              var RW;
              return null !== (RW = this.models.drawnUrl(WW)) && void 0 !== RW ? RW : zR.images.glbUrl(WW)
            }
          },
          bR = RW => WW.modelFile(RW);
        this.images = new IW.e(AW, (WW => {
          console.warn(`${sW} image ${WW.key.kind}:${WW.key.index}:${WW.key.word} failed`, WW.error)
        }), {
          fetchFile: bR,
          fetchImage: RW => WW.imageFile(RW)
        }), WW.startModels(), this.models = new oW.k(zR.files, ((RW, MW) => WW.buildModel(RW, MW)), (WW => {
          console.warn(`${sW} model file ${WW.file} (${WW.url}) failed`, WW.error)
        }), {
          fetchFile: bR,
          onWritten: (WW, RW) => {
            this.images.glbWritten(WW, RW)
          },
          onTaken: (WW, RW) => {
            this.images.glbTaken(WW, RW)
          }
        }), this.write = (WW, RW, MW) => {
          if (this.closed) return !0;
          if (WW === oW.c) {
            const WW = new DataView(MW.buffer, MW.byteOffset, FW.b),
              wW = WW.getUint32(0, !0),
              CW = WW.getUint32(FW.f, !0),
              zR = this.page.hostCall(vR, (() => this.host.otW(this.id, wW, RW, MW.subarray(FW.b))));
            return this.outcomes.push([CW, zR]), !0
          }
          return WW === IW.b && (this.page.hostCall(void 0, (() => {
            this.host.FtW(this.id, MW)
          })), !0)
        }
      }
      get isClosed() {
        return this.closed
      }
      resize(WW, RW) {
        if (this.closed) return;
        const [MW, wW] = uW(WW, RW, this.page.dpr());
        MW === this.size[0] && wW === this.size[1] || (this.size = [MW, wW], this.page.hostCall(void 0, (() => {
          this.host.resize(this.id, MW, wW)
        })))
      }
      setMob(WW, RW, MW, wW, CW) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.cTW(this.id, WW, RW, MW, wW, CW))))
      }
      setPlayer(WW, RW, MW) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.QtW(this.id, WW, RW, MW))))
      }
      setFigure(WW, RW, MW) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.rTW(this.id, WW, RW, MW))))
      }
      setPlacement(WW) {
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.jTW(this.id, Float64Array.from(WW))
        }))
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
          alpha: RW,
          beta: MW,
          radius: wW
        } = WW;
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.XtW(this.id, RW, MW, wW)
        }))
      }
      untilSettled() {
        return this.closed || this.page.isStopped ? Promise.resolve() : (this.quiet = 0, new Promise((WW => {
          this.settled.push(WW)
        })))
      }
      packChanged() {
        this.quiet = 0, this.models.refresh(), (0, QW.i)(this.images)
      }
      feed() {
        this.models.drain(this.write);
        for (const [WW, RW] of this.outcomes) {
          const MW = RW === mR ? [] : [RW === xR ? WW : (WW | oW.g) >>> 0];
          this.models.taken(WW, MW)
        }
        this.outcomes.length = 0, this.images.drain(this.write)
      }
      collect(WW) {
        let RW = !1;
        if (WW) {
          const WW = this.host.stW(this.id);
          for (const RW of WW) this.models.request(RW);
          const MW = this.host.aTW(this.id);
          MW.length > 0 && this.images.onEvent(MW), RW = WW.length > 0 || MW.length > 0
        }
        const MW = this.page.modelsUnavailable ? 0 : this.models.asking + this.models.unanswered,
          wW = RW || MW > 0 || this.images.waiting > 0 || this.images.inFlight > 0;
        this.quiet = wW ? 0 : this.quiet + 1, this.quiet >= 3 && this.resolveSettled()
      }
      close() {
        this.closed || (this.closed = !0, this.page.closePreview(this), this.resolveSettled())
      }
      abandon() {
        this.resolveSettled()
      }
      dispose(WW) {
        this.page.hostCall(void 0, (() => {
          const RW = this.host.close(this.id);
          RW.length > 0 && this.images.onEvent(RW), this.page.isTrapped || WW.JBW(this.id)
        })), this.images.dispose(), this.canvas.remove()
      }
      resolveSettled() {
        const WW = this.settled;
        this.settled = [];
        for (const RW of WW) RW()
      }
    }
    class HW {
      constructor(WW) {
        this.deps = WW, this.module = null, this.host = null, this.opening = null, this.pageCanvas = null, this.samples = 1, this.binding = null, this.sessionEnds = 0, this.lastEndReturned = !0, this.previews = new Map, this.nextId = 1, this.frameId = null, this.stopped = !1, this.loggedErrors = new Set, this.modelsListener = {
          onUnavailable: WW => {
            this.modelsFailed(WW)
          },
          onDecoderFailed: WW => {
            this.loggedErrors.has("modelDecoder") || (this.loggedErrors.add("modelDecoder"), console.warn(`${sW} the Draco decoder didn't load: models waiting on it won't draw`, WW))
          },
          onWorkerLost: WW => {
            this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${sW} a model worker was lost: ${WW}`))
          }
        }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.frame = WW => {
          this.frameId = null;
          const RW = this.host;
          if (null !== RW && 0 !== this.previews.size && !this.settleIfTrapped() && !this.stopped) try {
            this.drawFrame(RW, WW)
          } catch (MW) {
            if (!this.stopIfTrapped(MW) && (this.stop(), (0, PW.n)(MW))) return void this.deps.onWebGpuFailed("frames_refused", MW);
            console.warn(`${sW} the previews stopped: their frame threw`, MW)
          }
        }, WW.pack.onChange((() => {
          this.packChanged()
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
        var WW, RW;
        return null !== (WW = null === (RW = this.host) || void 0 === RW ? void 0 : RW.attached()) && void 0 !== WW && WW
      }
      get open() {
        return this.previews.size
      }
      get frameCostMs() {
        return 0 === this.costs.length ? 0 : this.costs.reduce(((WW, RW) => WW + RW), 0) / this.costs.length
      }
      async bindSession(WW, RW, MW) {
        const wW = this.binding,
          CW = this.sessionEnds;
        try {
          const zR = this.hostOf(WW);
          if (!zR.ltW()) {
            const RW = (0, XW.f)().sampleCount,
              AW = await MW(RW);
            if (this.sessionEnds !== CW) return this.keepRendererOfEndedSession(WW, zR, AW, RW, wW), RW;
            if (!zR.yTW(AW)) throw new Error("the page has a renderer already");
            (0, rR.v)(performance.now()), this.samples = RW, (0, jR.i)((0, PW.k)(WW))
          }
          if (!zR.attach(RW)) throw new Error("the page's renderer is lent to another session");
          return this.samples
        } finally {
          this.binding === wW && this.endBinding()
        }
      }
      keepRendererOfEndedSession(WW, RW, MW, wW, CW) {
        if (!this.lastEndReturned || null !== this.binding && this.binding !== CW) try {
          MW.free()
        } catch (zR) {
          console.warn(`${sW} an ended session's renderer didn't free`, zR)
        } else RW.yTW(MW) && ((0, rR.v)(performance.now()), this.samples = wW, (0, jR.i)(this.registryOf(WW)))
      }
      async beginSession() {
        var WW;
        let RW = () => {};
        const MW = new Promise((WW => {
          RW = WW
        }));
        this.binding = {
          done: MW,
          release: RW
        }, await (null === (WW = this.opening) || void 0 === WW ? void 0 : WW.catch((() => null)));
        const wW = this.pageCanvas;
        return this.pageCanvas = null, wW
      }
      endSession(WW) {
        var RW, MW;
        if (this.sessionEnds++, this.lastEndReturned = WW, this.endBinding(), WW) {
          try {
            var wW;
            null === (wW = this.host) || void 0 === wW || wW.detach()
          } catch (CW) {
            return void console.warn(`${sW} the session's core kept the page's renderer`, CW)
          }!0 === (null === (RW = this.host) || void 0 === RW ? void 0 : RW.attached()) && console.warn(`${sW} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (MW = this.host) || void 0 === MW ? void 0 : MW.ltW()) && (0, jR.i)(this.registryOf(this.module))
        }
      }
      endBinding() {
        var WW;
        null === (WW = this.binding) || void 0 === WW || WW.release(), this.binding = null
      }
      async openPreview(WW, RW, MW) {
        const wW = await this.renderingHost(),
          CW = this.module;
        if (null === wW || null === CW) throw new Error("this page can't draw previews: it has no renderer build");
        if (this.animations ??= this.loadAnimations(wW), this.deps.pack.wanted(), this.isStopped) throw new Error("the previews stopped");
        this.guarded((() => {
          this.deps.provideBuiltInAnimationPack(CW)
        }));
        const zR = this.nextId++,
          AW = this.deps.createCanvas(),
          [bR, yR] = uW(RW, MW, this.deps.dpr());
        AW.width = bR, AW.height = yR;
        if (!this.guarded((() => (CW.YBW(zR, AW), wW.open(zR, bR, yR, WW))))) throw this.hostCall(void 0, (() => {
          CW.JBW(zR)
        })), new Error("the page's renderer is lent to a session that is running");
        this.restartModelsIfFailed();
        const NW = new LW(this, wW, zR, AW, [bR, yR], this.deps);
        return this.previews.set(zR, NW), this.startFrames(), NW
      }
      prefetch() {
        if (this.prefetched || this.isStopped || (0, rR.b)() || null !== (0, rR.A)()) return;
        this.prefetched = !0;
        (null === this.module ? this.loadModule() : Promise.resolve(this.module)).then((WW => {
          null === WW || this.isStopped || (this.startModels(), this.fetchAnimationTable().catch((() => {})), this.prefetchPlayerFiles())
        }), (() => {}))
      }
      modelFile(WW) {
        return this.prefetchedOr(WW, this.deps.fetchModel)
      }
      imageFile(WW) {
        return this.prefetchedOr(WW, wW.q)
      }
      prefetchedOr(WW, RW) {
        const MW = this.prefetchedFiles.get(WW);
        return void 0 === MW ? RW(WW) : MW.catch((() => RW(WW)))
      }
      async prefetchPlayerFiles() {
        const WW = this.deps.playerFile().then((WW => this.deps.files.url(WW))),
          RW = await Promise.all([WW, this.deps.images.lifeformAtlasUrl(QW.d)]).catch((() => null));
        if (null === RW) return;
        const [MW, wW] = RW, CW = (WW, RW) => {
          if (null === WW) return;
          const MW = RW(WW);
          this.prefetchedFiles.set(WW, MW), MW.catch((() => {
            this.prefetchedFiles.delete(WW)
          }))
        };
        CW(MW, (WW => this.modelFile(WW))), CW(wW, (WW => this.imageFile(WW)))
      }
      loadModule() {
        return this.moduleLoad ??= this.deps.loadModule().then((WW => (null === WW && (this.moduleLoad = null), WW)), (WW => {
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
      buildModel(WW, RW) {
        return this.startModels(), this.models.then((MW => MW(WW, RW))).then((WW => this.unavailable ? new Promise((() => {})) : WW))
      }
      restartModelsIfFailed() {
        this.unavailable && !this.modelsRestarted && 0 === this.previews.size && (this.modelsRestarted = !0, this.models = null, this.unavailable = !1, this.startModels())
      }
      modelsFailed(WW) {
        this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${sW} the model workers didn't start: models won't draw in the previews`, WW))
      }
      called(WW) {
        return 0 !== WW && this.logError(WW, 0), WW
      }
      closePreview(WW) {
        this.previews.delete(WW.id), null !== this.module && WW.dispose(this.module), 0 === this.previews.size && null !== this.frameId && (this.deps.cancelFrame(this.frameId), this.frameId = null)
      }
      hostOf(WW) {
        if (null !== this.module && this.module !== WW) throw new Error("a second renderer module on one page");
        return this.module = WW, this.host ??= this.guarded((() => new WW.itW)), this.host
      }
      async loadAnimations(WW) {
        const RW = AW(null),
          MW = this.module;
        try {
          RW.wasm = null === MW ? RW.wasm : this.hostCall(RW.wasm, (() => MW.XW()))
        } catch {}
        let wW, CW;
        try {
          wW = await this.fetchAnimationTable()
        } catch (zR) {
          return void this.deps.onAnimationsFailed({
            stage: "fetch",
            error: zR
          }, RW)
        }
        if (!this.settleIfTrapped()) {
          try {
            CW = WW.ftW(wW)
          } catch (zR) {
            if (this.stopIfTrapped(zR)) return;
            return void this.deps.onAnimationsFailed({
              stage: "decode",
              error: zR
            }, RW)
          }
          CW || this.deps.onAnimationsFailed({
            stage: "decode",
            error: null
          }, RW)
        }
      }
      async renderingHost() {
        if (null !== this.binding && await this.binding.done, this.settleIfTrapped()) return null;
        const WW = this.host;
        return null !== WW && this.guarded((() => WW.ltW())) ? WW : (this.opening ??= this.openAtHome().finally((() => {
          this.opening = null
        })), this.opening)
      }
      async openAtHome() {
        var WW;
        const RW = null !== (WW = this.module) && void 0 !== WW ? WW : await this.loadModule();
        if (null === RW) return null;
        const MW = this.hostOf(RW),
          wW = () => this.guarded((() => MW.ltW()));
        if (wW()) return MW;
        if (null !== (0, rR.A)() || (0, rR.b)()) return null;
        const CW = this.deps.createCanvas();
        CW.width = 1, CW.height = 1;
        const zR = await this.deps.openExtras();
        if (this.settleIfTrapped()) return null;
        const AW = (0, XW.f)().sampleCount;
        let bR;
        try {
          bR = await (0, PW.s)(RW, "previewRenderer", CW, AW, kR.b, zR)
        } catch (yR) {
          throw yR instanceof fW.d ? this.stopForTrap(yR) : (0, PW.o)(yR) && await this.deps.onWebGpuFailed("start_failed", yR), yR
        }
        return this.guarded((() => MW.yTW(bR))) ? ((0, rR.v)(performance.now()), this.samples = AW, this.pageCanvas = CW, (0, jR.i)(this.registryOf(RW)), MW) : wW() ? MW : null
      }
      startFrames() {
        null !== this.frameId || this.isStopped || (this.frameId = this.deps.requestFrame(this.frame))
      }
      drawFrame(WW, RW) {
        for (const AW of this.previews.values()) AW.feed();
        if (this.stopped) return;
        const MW = this.deps.now(),
          wW = WW.frame(RW);
        this.costs.push(this.deps.now() - MW), this.costs.length > 120 && this.costs.shift();
        const CW = 0 !== (256 & wW),
          zR = 255 & wW;
        for (const AW of this.previews.values()) {
          if (this.stopped) return;
          AW.collect(CW)
        }
        if (!this.stopped) {
          if (CW) {
            const RW = WW.kTW();
            for (let WW = 0; WW + 1 < RW.length; WW += 2) this.logError(RW[WW], RW[WW + 1])
          }
          return zR === UW ? (this.stop(), void this.deps.onWebGpuFailed("lost")) : zR === EW ? (this.stop(), void this.deps.onFatal(WW.PtW(), WW.ItW())) : zR === VW ? (this.stop(), void console.warn(`${sW} the previews stopped: the page's renderer went with its session`)) : void this.startFrames()
        }
      }
      get isStopped() {
        return this.stopped || this.isTrapped
      }
      get isTrapped() {
        return null !== this.module && ((0, fW.j)(this.module) || "failed" === (0, gR.J)())
      }
      hostCall(WW, RW) {
        if (this.settleIfTrapped()) return WW;
        try {
          return RW()
        } catch (MW) {
          if (this.stopIfTrapped(MW)) return WW;
          throw MW
        }
      }
      guarded(WW) {
        if (this.settleIfTrapped()) throw new Error("the previews stopped: their module trapped");
        try {
          return WW()
        } catch (RW) {
          throw this.stopIfTrapped(RW), RW
        }
      }
      registryOf(WW) {
        return {
          MNW: (RW, MW) => {
            this.hostCall(void 0, (() => {
              WW.MNW(RW, MW)
            }))
          },
          wNW: RW => {
            this.hostCall(void 0, (() => {
              WW.wNW(RW)
            }))
          }
        }
      }
      settleIfTrapped() {
        return !!this.isTrapped && (this.stopped || (this.stop(), (0, jR.i)(null)), !0)
      }
      stopIfTrapped(WW) {
        return !(null === this.module || !(0, fW.l)(this.module, WW)) && (this.stopForTrap(WW), !0)
      }
      stopForTrap(WW) {
        this.stop(), (0, jR.i)(null), (0, gR.cb)(WW)
      }
      stop() {
        this.stopped = !0;
        for (const WW of this.previews.values()) WW.abandon()
      }
      logError(WW, RW) {
        const MW = `${WW}:${RW}`;
        this.loggedErrors.has(MW) || (this.loggedErrors.add(MW), console.warn(`${sW} error ${WW} (detail ${RW})`))
      }
    }
    let DW = null;

    function qR() {
      return DW ??= new HW(function() {
        const WW = (0, lW.q)(JW.clientSideServerUrls.staticUrl, {
          packUrl: WW => {
            var RW, MW;
            return null !== (RW = null === (MW = QW.h.current) || void 0 === MW ? void 0 : MW.modelUrl(WW)) && void 0 !== RW ? RW : null
          }
        });
        return {
          loadModule: GW,
          startModels: async WW => {
            const {
              pageModelPool: RW
            } = await MW.e(36).then((() => MW(40799))), {
              pool: wW
            } = RW(WW);
            return (WW, RW) => wW.build(WW, RW)
          },
          fetchAnimations: async () => bR(await (0, wW.q)(OW())),
          playerFile: async () => (await (0, lW.n)()).PLAYER_FILE,
          onAnimationsFailed: (WW, RW) => {
            yR("previewAnimations", OW(), WW, RW)
          },
          provideBuiltInAnimationPack: WW => {
            tR().provide(WW)
          },
          openExtras: rR.x,
          files: WW,
          images: (0, QW.j)((0, IW.j)(WW.url), (() => QW.h.current)),
          pack: QW.h,
          fetchModel: WW => (0, lW.i)(WW),
          createCanvas: () => document.createElement("canvas"),
          dpr: () => window.devicePixelRatio,
          now: () => performance.now(),
          requestFrame: WW => requestAnimationFrame(WW),
          cancelFrame: WW => {
            cancelAnimationFrame(WW)
          },
          onWebGpuFailed: nW,
          onFatal: (WW, RW) => {
            console.error(`${sW} the previews stopped: renderer error ${WW} (detail ${RW})`)
          }
        }
      }()), DW
    }
    var ZW = MW(548),
      SW = MW(556),
      WR = MW(36537),
      RR = MW(284),
      MR = MW(36680),
      wR = MW(2410);
    const CR = {
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
    const zM = "[bloxd-previews]",
      AR = 1,
      bM = 2,
      yM = 4,
      NR = 8,
      eR = 15,
      BR = [6, 0, -6, 0, 0, Math.PI / 4],
      tM = new Uint32Array(5);

    function TR(WW) {
      return ZW.i.indexOf(WW)
    }

    function gM(WW, RW) {
      var MW;
      const wW = null !== (MW = SW.i[WW]) && void 0 !== MW ? MW : [];
      return null === RW ? -1 : wW.indexOf(RW)
    }
    const iM = new WeakSet;

    function YR(WW) {
      const RW = (0, MR.h)(WW),
        MW = null === RW ? -1 : JR(RW);
      return -1 !== MW ? MW : (iM.has(WW) || (iM.add(WW), console.warn(`${zM} an animation the previews' table lacks: the mob idles instead`)), -1)
    }

    function JR(WW) {
      var RW;
      return null !== (RW = CR[WW]) && void 0 !== RW ? RW : -1
    }

    function PR(WW, RW) {
      const {
        canvas: MW
      } = RW;
      MW.style.width = "100%", MW.style.height = "100%", MW.style.display = "block", WW.appendChild(MW)
    }

    function IR(WW) {
      const RW = WW.getBoundingClientRect();
      return [RW.width, RW.height]
    }
    class oR {
      constructor(WW, RW) {
        this.preview = WW, this.showView = RW
      }
      show(WW) {
        this.showView(this.preview, WW)
      }
      resize(WW, RW) {
        this.preview.resize(WW, RW)
      }
      close() {
        this.preview.close()
      }
    }
    class lR {
      constructor(WW) {
        this.preview = WW, this.ready = void 0, this.dev = void 0, this.built = !1, this.cosmetics = {}, this.emote = null, this.detachControls = void 0, this.detachControls = function(WW) {
          const {
            canvas: RW
          } = WW;
          let MW = null;
          const wW = WW => {
              var wW;
              MW = {
                pointer: WW.pointerId,
                x: WW.clientX,
                y: WW.clientY
              }, null === (wW = RW.setPointerCapture) || void 0 === wW || wW.call(RW, WW.pointerId)
            },
            CW = RW => {
              var wW;
              const CW = WW.orbit;
              if ((null === (wW = MW) || void 0 === wW ? void 0 : wW.pointer) !== RW.pointerId || null === CW) return;
              const zR = RW.clientX - MW.x,
                AW = RW.clientY - MW.y;
              MW = {
                ...MW,
                x: RW.clientX,
                y: RW.clientY
              }, WW.setOrbit({
                alpha: CW.alpha - .01 * zR,
                beta: Math.min(Math.PI - .01, Math.max(.01, CW.beta - .01 * AW)),
                radius: CW.radius
              })
            },
            zR = WW => {
              var RW;
              (null === (RW = MW) || void 0 === RW ? void 0 : RW.pointer) === WW.pointerId && (MW = null)
            },
            AW = RW => {
              const MW = WW.orbit;
              if (null === MW) return;
              RW.preventDefault();
              const wW = RW.deltaY * (RW.deltaMode === WheelEvent.DOM_DELTA_LINE ? 40 : RW.deltaMode === WheelEvent.DOM_DELTA_PAGE ? 800 : 1),
                CW = Math.min(100, Math.max(5, MW.radius + .08 * wW));
              WW.setOrbit({
                ...MW,
                radius: CW
              })
            };
          return RW.style.touchAction = "none", RW.addEventListener("pointerdown", wW), RW.addEventListener("pointermove", CW), RW.addEventListener("pointerup", zR), RW.addEventListener("pointercancel", zR), RW.addEventListener("wheel", AW, {
            passive: !1
          }), () => {
            RW.removeEventListener("pointerdown", wW), RW.removeEventListener("pointermove", CW), RW.removeEventListener("pointerup", zR), RW.removeEventListener("pointercancel", zR), RW.removeEventListener("wheel", AW)
          }
        }(WW), this.dev = {
          setCamera: RW => {
            let {
              yaw: MW,
              pitch: wW,
              radius: CW
            } = RW;
            const zR = WW.orbit;
            null !== zR && WW.setOrbit({
              alpha: MW,
              beta: wW,
              radius: null !== CW && void 0 !== CW ? CW : zR.radius
            })
          },
          canvas: () => WW.canvas,
          isolateHead: () => {
            console.warn(`${zM} isolateHead: noa's character preview only`)
          }
        }, this.apply(), this.ready = WW.untilSettled().then((() => {
          this.built = !0
        }))
      }
      isReady() {
        return this.built && !this.preview.isClosed
      }
      setCosmetic(WW, RW) {
        this.cosmetics[WW] = RW, this.apply()
      }
      playEmote(WW) {
        null === WW || WW !== this.emote ? (this.emote = WW, this.apply()) : this.preview.replay()
      }
      untilDrawn(WW) {
        return this.preview.untilSettled()
      }
      resize(WW, RW) {
        this.preview.resize(WW, RW)
      }
      close() {
        this.detachControls(), this.preview.close()
      }
      apply() {
        var WW;
        this.preview.setPlayer(JSON.stringify(this.cosmetics), tM, null === (WW = this.emote) ? -1 : JR(WW))
      }
    }

    function FR(WW, RW) {
      let {
        mobType: MW,
        variation: wW,
        animation: CW
      } = RW;
      WW.setMob(TR(MW), gM(MW, wW), eR, 1, YR(CW))
    }

    function fR(WW, RW) {
      let {
        mobType: MW,
        variation: wW,
        shownGroups: CW
      } = RW;
      const zR = AR | (CW.collar ? bM : 0) | (CW.saddle ? yM : 0) | (CW.antlers ? NR : 0);
      WW.setMob(TR(MW), gM(MW, wW), zR, 1, -1), WW.setPlacement(BR)
    }
    const QR = Math.PI - Math.PI / 16;
    class rM {
      constructor(WW, RW, MW) {
        this.size = MW, this.preview = null, this.closed = !1, this.figure = null, this.shown = !1, this.placement = [], this.order = "", this.given = null, this.givenPlacement = [], this.loaded = !1, WW(...MW).then((WW => {
          if (this.closed) return void WW.close();
          const {
            style: MW
          } = WW.canvas;
          MW.position = "absolute", MW.top = "0", MW.left = "0", MW.visibility = "hidden", PR(RW, WW), this.preview = WW, WW.resize(...this.size), this.apply()
        })).catch((WW => {
          console.error(`${zM} couldn't open a lineup figure`, WW)
        }))
      }
      update(WW, RW, MW, wW) {
        this.figure = WW, this.shown = RW, this.placement = MW, this.order = wW, this.apply()
      }
      resize(WW, RW) {
        var MW;
        this.size = [WW, RW], null === (MW = this.preview) || void 0 === MW || MW.resize(WW, RW)
      }
      close() {
        var WW;
        this.closed = !0, null === (WW = this.preview) || void 0 === WW || WW.close(), this.preview = null
      }
      apply() {
        const {
          preview: WW,
          figure: RW
        } = this;
        if (null === WW || null === RW) return;
        if (this.given !== RW) {
          var MW;
          this.given = RW, this.loaded = !1;
          const wW = null === RW.WJ ? 0 : null !== (MW = (0, wR.e)(RW.WJ)) && void 0 !== MW ? MW : 0;
          WW.setFigure(function(WW) {
            return JSON.stringify(Object.fromEntries(WW.cosmetics))
          }(RW), wW, YR(RW.animation)), WW.untilSettled().then((() => {
            this.given === RW && (this.loaded = !0, this.apply())
          }))
        }(0, RR.p)(this.givenPlacement, this.placement) || (this.givenPlacement = this.placement, WW.setPlacement(this.placement));
        const {
          style: wW
        } = WW.canvas;
        wW.zIndex = this.order, wW.visibility = this.shown && this.loaded ? "visible" : "hidden"
      }
    }
    class cM {
      constructor(WW, RW) {
        this.open = RW, this.layer = void 0, this.figures = [], this.view = {
          figures: [],
          shown: []
        }, this.size = void 0, this.size = IR(WW), this.layer = document.createElement("div");
        const {
          style: MW
        } = this.layer;
        MW.position = "relative", MW.isolation = "isolate", MW.width = "100%", MW.height = "100%", MW.pointerEvents = "none", WW.appendChild(this.layer)
      }
      show(WW) {
        this.view = WW, this.place()
      }
      resize(WW, RW) {
        this.size = [WW, RW];
        for (const MW of this.figures) MW.resize(WW, RW);
        this.place()
      }
      close() {
        for (const WW of this.figures) WW.close();
        this.figures = [], this.layer.remove()
      }
      place() {
        const {
          figures: WW,
          shown: RW
        } = this.view;
        for (const zR of this.figures.splice(WW.length)) zR.close();
        const [MW, wW] = this.size, CW = wW > 0 ? MW / wW : 1;
        WW.forEach(((MW, wW) => {
          var zR;
          this.figures[wW] ??= new rM(this.open, this.layer, this.size);
          const AW = function(WW, RW, MW) {
            const {
              height: wW,
              width: CW
            } = (0, WR.d)("NPC").hitBoxDimensions, zR = 13 / Math.max(wW, CW);
            return [zR * MW, (.5 - WW) * (44 * Math.tan(.4)) * RW, -wW * zR / 2, 0, QR, 0]
          }((wW + .5) / WW.length, CW, MW.size);
          this.figures[wW].update(MW, null !== (zR = RW[wW]) && void 0 !== zR && zR, AW, function(WW, RW) {
            return String(Math.round(1e3 * WW) + RW)
          }(MW.size, wW))
        }))
      }
    }
    class XR {
      constructor(WW) {
        this.page = WW
      }
      async openMob(WW) {
        return new oR(await this.open(WW, pW), FR)
      }
      async openPet(WW) {
        return new oR(await this.open(WW, pW), fR)
      }
      openMobLineup(WW) {
        return new cM(WW, ((WW, RW) => this.page.openPreview(pW, WW, RW)))
      }
      async openCharacter(WW) {
        return new lR(await this.open(WW, hW))
      }
      async open(WW, RW) {
        const [MW, wW] = IR(WW), CW = await this.page.openPreview(RW, MW, wW);
        return PR(WW, CW), CW
      }
    }
  },
  36537: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => gR
    });
    var wW = MW(173),
      CW = MW(35716);
    const zR = 1.2,
      AW = {
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
        aA: .5,
        jyW: !1
      },
      bR = {
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
        aA: .5,
        jyW: !1
      },
      yR = {
        physicsBodyDimensions: {
          width: wW.c.bI,
          height: wW.c.yI
        },
        hitBoxDimensions: {
          width: wW.c.bI + .4,
          height: wW.c.yI + .6
        },
        eyeHeight: wW.c.yI * wW.c.playerEyeToHeightRatio,
        rideHeight: wW.c.yI - .3,
        aA: .5,
        jyW: !1
      },
      NW = {
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
        aA: .5,
        jyW: !1
      },
      eW = {
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
        aA: .5,
        jyW: !1
      },
      BW = {
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
        aA: .5,
        jyW: !1
      },
      tR = {
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
        aA: .5,
        jyW: !1
      },
      TW = {
        Player: {
          defaultName: "Player",
          physicsBodyDimensions: {
            width: wW.c.bI,
            height: wW.c.yI
          },
          hitBoxDimensions: {
            width: wW.c.bI + .4,
            height: wW.c.yI + .6
          },
          eyeHeight: wW.c.yI * wW.c.playerEyeToHeightRatio,
          rideHeight: wW.c.yI - .1,
          aA: CW.f.aA,
          jyW: !0
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
          aA: .5,
          jyW: !1
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
          aA: .5,
          jyW: !1
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
          aA: .5,
          jyW: !1
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
          aA: .5,
          jyW: !1
        },
        Camel: {
          modelScale: zR,
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
          aA: .5,
          jyW: !1
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
          aA: .5,
          jyW: !1
        },
        "Cave Golem": AW,
        "Draugr Zombie": {
          ...yR,
          defaultPose: "zombie"
        },
        "Draugr Skeleton": yR,
        "Frost Golem": AW,
        "Frost Zombie": {
          ...yR,
          defaultPose: "zombie"
        },
        "Frost Skeleton": yR,
        "Draugr Knight": {
          physicsBodyDimensions: {
            width: wW.c.bI,
            height: wW.c.yI
          },
          hitBoxDimensions: {
            width: wW.c.bI + .4,
            height: 2.8
          },
          eyeHeight: 1.9,
          rideHeight: 1.8,
          aA: .5,
          jyW: !1
        },
        Wolf: NW,
        Bear: eW,
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
          aA: .5,
          jyW: !1
        },
        Stag: BW,
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
          aA: .5,
          jyW: !1
        },
        Gorilla: tR,
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
          aA: .5,
          jyW: !1
        },
        "Draugr Huntress": yR,
        "Magma Golem": AW,
        "Spirit Golem": AW,
        "Spirit Wolf": NW,
        "Spirit Bear": eW,
        "Spirit Stag": BW,
        "Spirit Gorilla": tR,
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
          aA: .5,
          jyW: !1
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
          aA: .5,
          jyW: !1
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
          aA: .5,
          jyW: !1
        },
        NPC: {
          physicsBodyDimensions: {
            width: wW.c.bI,
            height: wW.c.yI
          },
          hitBoxDimensions: {
            width: wW.c.bI + .4,
            height: wW.c.yI + .6
          },
          eyeHeight: wW.c.yI * wW.c.playerEyeToHeightRatio,
          rideHeight: wW.c.yI - .1,
          aA: .5,
          jyW: !1
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
          aA: .5,
          jyW: !1
        },
        "Bobino Musculino": {
          physicsBodyDimensions: {
            width: wW.c.bI,
            height: wW.c.yI
          },
          hitBoxDimensions: {
            width: wW.c.bI + .4,
            height: wW.c.yI + .6
          },
          eyeHeight: wW.c.yI * wW.c.playerEyeToHeightRatio,
          rideHeight: wW.c.yI - .1,
          aA: .5,
          jyW: !1
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
          aA: .5,
          jyW: !1
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
          aA: .5,
          jyW: !1
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
          aA: .5,
          jyW: !1
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
          aA: .5,
          jyW: !1
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
          aA: .5,
          jyW: !1
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
          aA: .5,
          jyW: !1
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
          aA: .5,
          jyW: !1
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
          aA: .5,
          jyW: !1
        },
        Zombie: {
          ...yR,
          defaultPose: "zombie"
        },
        Skeleton: yR,
        Mummy: {
          ...yR,
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
          aA: .5,
          jyW: !1
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
          aA: .5,
          jyW: !1
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
          aA: .5,
          jyW: !1
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
          aA: .5,
          jyW: !1
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
          aA: .5,
          jyW: !1
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
          aA: .5,
          jyW: !1
        },
        "Iron Guardian": bR,
        "Gold Guardian": bR,
        "Diamond Guardian": bR,
        "Moonstone Guardian": bR,
        "Iron Goofy Golem": bR,
        "Gold Goofy Golem": bR,
        "Diamond Goofy Golem": bR,
        "Moonstone Goofy Golem": bR,
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
          aA: .5,
          jyW: !1
        }
      };

    function gR(WW) {
      return TW[WW]
    }
  },
  34950: (WW, RW, MW) => {
    MW.d(RW, {
      A: () => NW,
      B: () => TW,
      F: () => gR,
      J: () => iR,
      N: () => JW,
      d: () => wW,
      h: () => CW,
      l: () => tR,
      p: () => YW,
      s: () => eW,
      u: () => PW,
      x: () => yR
    });
    const wW = [{
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

    function CW(WW, RW) {
      const {
        numLines: MW,
        charsPerLine: CW
      } = wW[RW];
      return IW(WW, MW, CW, !1)
    }
    const zR = 7 / 8,
      AW = .25,
      bR = 8;

    function yR(WW, RW) {
      return {
        width: Math.min(WW, bR) - 2 * AW,
        height: Math.min(RW, bR) - 2 * AW
      }
    }

    function NW(WW, RW, MW) {
      const CW = yR(WW, RW),
        {
          numLines: AW,
          charsPerLine: bR
        } = wW[MW];
      return {
        numLines: Math.max(1, Math.floor(AW / zR * CW.height)),
        charsPerLine: Math.max(1, Math.floor(bR * CW.width))
      }
    }

    function eW(WW, RW, MW, wW) {
      const {
        numLines: CW,
        charsPerLine: zR
      } = NW(MW, wW, RW);
      return IW(WW, CW, zR, !1)
    }
    const BW = 32e3;

    function tR(WW) {
      return WW.slice(0, BW)
    }
    const TW = 512e3,
      gR = 64,
      iR = TW;

    function YW(WW, RW) {
      const MW = Math.max(0, iR - RW),
        wW = Math.min(TW, MW);
      return WW.slice(0, wW)
    }
    const JW = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      Tv: {
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

    function PW(WW, RW) {
      const {
        numLines: MW,
        charsPerLine: wW
      } = JW[RW];
      return IW(WW, MW, wW, !1)
    }

    function IW(WW, RW, MW, wW, CW) {
      (CW || wW) && (WW = WW.slice(0, null !== CW && void 0 !== CW ? CW : RW * MW));
      const zR = WW.split("\n");
      if (zR.length > RW && zR.splice(RW, zR.length - RW), !wW)
        for (let AW = 0; AW < zR.length; AW++) {
          const WW = zR[AW];
          WW.length > MW && (zR[AW] = WW.substring(0, MW), zR.length < RW && zR.splice(AW + 1, 0, WW.substring(MW)))
        }
      return zR.join("\n")
    }
  },
  35721: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => AW
    });
    var wW = MW(290),
      CW = MW.n(wW),
      zR = MW(1050);
    let AW;
    var bR, yR, NW, eW, BW, tR, TW, gR, iR;
    const YW = [1, "b", 0, 56, 3, 9, 40, 5, 124, 197, 8, 255, "length", 150, "d", 98, 4, "undefined", void 0, "a", 63, 6, "fromCodePoint", 7, 12, "push", 115, 2, !1, 217, !0, null, 31, 126, "i", "g", 91, "f", 8191, 88, 13, 14, 142, 127, 128, 71, "c", 193, "e", "h", 240, 21, 82, 121, 52, 60, 33554432, 67108864, 36, 229, 78, 138, 209, 149, 151, 146, 147, 148, 152, 153, 154, 143, 144, 145, 164, 165, 196, 99, 182, "CA", 177, 81, 176, 173, 181, 66, 72, "j", 200, 158, 73, "on"];

    function JW(WW) {
      return typeof bR[WW] === YW[17] ? bR[WW] = function(...WW) {
        for (jR(WW[YW[12]] = YW[0], WW[YW[0]] = 'BM[jiQZAlWkOxa]J{w2.vY3@bRd#!u7c~H6PL:}rp8X+I%"$(hKs^nmV;yTC?qf>`FgN5G&)4=z/tUD|S*,0o1eE_9<', WW[YW[1]] = "" + (WW[YW[2]] || ""), WW[YW[4]] = WW[YW[1]].length, WW[-YW[9]] = [], WW[YW[7]] = YW[2], WW[-YW[8]] = YW[2], WW[YW[6]] = -YW[0]), WW[-YW[3]] = YW[2]; WW[-YW[3]] < WW[YW[4]]; WW[-YW[3]]++)
          if (WW[YW[5]] = WW[YW[0]].indexOf(WW[YW[1]][WW[-YW[3]]]), WW[YW[5]] !== -YW[0])
            if (WW[YW[6]] < YW[2]) WW[YW[6]] = WW[YW[5]];
            else {
              jR(WW[YW[6]] += WW[YW[5]] * YW[36], WW[YW[7]] |= WW[YW[6]] << WW[-YW[8]], WW[-YW[8]] += (WW[YW[6]] & YW[38]) > YW[39] ? YW[40] : YW[41]);
              do {
                jR(WW[-YW[9]].push(WW[YW[7]] & YW[11]), WW[YW[7]] >>= YW[10], WW[-YW[8]] -= YW[10])
              } while (WW[-YW[8]] > YW[23]);
              WW[YW[6]] = -YW[0]
            } return WW[YW[6]] > -YW[0] && WW[-YW[9]].push((WW[YW[7]] | WW[YW[6]] << WW[-YW[8]]) & YW[11]), PW(WW[-YW[9]])
      }(yR[WW]) : bR[WW]
    }

    function PW(WW) {
      return typeof eW !== YW[17] && eW ? (new eW).decode(new BW(WW)) : typeof tR !== YW[17] && tR ? tR.from(WW).toString("utf-8") : iR(WW)
    }

    function IW() {}
    jR(bR = {}, yR = ["N%rWL$XSZT+St)l}Kcd/uqAAFJj$+,k", "g(u!R}LTOCEM)T$#TF7i", "u:r=lt*8Myf=i#k", "v?xk*HsMdF`SB", "Y)]H1^bL:.q;^C>w(v)^ZG]T72", "J>uAV&[7~Y$GZ}.#VB", "V5;=Q(ZbIYQTzhvpGmb=GLnP,y)S,]Z", ")f5K~5fxUOPgJK{p]>EZ", "Hm+uNz.*RF0Nlj|djP>tDt(`/C6(zGHLu)H4r,6^Z", '$sNum,P/,?)!mqc:4me=in~`(ggOw{.!Q)Eh&zW.Mmd(OK_!J~"ig*quagu4B', "|6?zJ*sulV?!u{=}]pk#eHIp$xM5H{l", "bp/U|)h8QaO#v#W}5B", "H6eAVUuA?F{br]3#px4hK;mpi", ":(1K|GUaZ", "BPWmmU{^YmFYE]a.eXd~.)Kppw*nO}Ruv?!z(581M>V", '%5$=0%`eTf<z|&i2Lj[/noB7;FJ/"[', "MhCuLp`5/C[TiJa", "Bip=,}M8c>)=k[3!<]3c(T8$nmVi@[R!GB", "T:rtLq[7^`ShEdV6rfyZ85}[", "TmV^v}BLS>Kfdh{6;5/Q|LWndF5&7K&bq@B7]KsM", "AmlH%;`z;ve~^#}bi~)h0)W8H2FOj&,6+xV^@^H.>ns", 'Gv&t{f~b"2CYCT+}HsCnL$J$Wk!VXR`@_vxU#', "NW64Pq%.lT[4:(Yp|c1)ZzXxTC!|~$m6^FqkV|m[", "N%4Zno![", "=5=~/}Py}.tMW{Kp55tUvp`7FW", "4F8#dmunK>@ww{W", "C(/nt0*|CO=SoSyuD%ZW", "Rv:Vky$aLy=R;#%r0RaA", "/CriXhHGRwvTw(2!S6<sPC2^NmYvs}Sp]ZksG67L^mp", "%s8Z85l`#w;AvjEp&j[", "/@uc=(9Aaf`^AK?XZ>bWAz>P5`/Sd]uPuM", '6:aVU*"2g?s!84{6`(+UyUPPzO3w{$wv?p/U}50PjWw|Ub4cUZFZ', 'KjZ^g?qMATAqK:Pcim/z9%/u6?1NmTC8o&f!CUl"CO&!H{*pN@&A', '"FtQMLGM', 'Qd9syo"[Nxaq9iSdLmEhkz*MNm>&.#Q.9sou"SE@g.zMFLx', "rFH~1K,^i", "KpAW7=wuK?Thni`wtfM/N6v^*yQ|,[U#9=>i=?WR9v!c3qa", "bd>t=G]`v`(=)jn#.J0~3", '?5Ck_H]ldfuF*4y@=OK4Khf5(g`"I#Lb^Z@=_)C$0Wmi+dm#spb7`|F/zv', "$+fVCsX`fl", '^y.u|GxTd]"^l#(dhFQzyo]"MmEU~0[7f@>^1H5TQ', '$pEh"5>$_v^', "Vy0z}hB", 'L(^nX5`elkw|4?g:J)u^eGDb*x4"Jd_8!"Mm1HO><]N;M', "u5LUFL>8LW:4|&k", "MY^zsU^7(?J@d:BL|w%z|L&ZxYy&aQ", 'wZ]cqr:*G.5U7}avE]Dc#1Z&3`a5f}`XIFR~n>:y7g^P!C1P>F2#!pv"Aa', "s:9Zg(<p8fKGW{`Lm(2/Bog5t]a/i#x", "ts~#MnMnCv*JP&i+]x0u~m;^nmznrT52Z?uk,0YAB>a|+[yXaM", '3u,sK:#$#Ca6S#2#A"Xu>?|8)`}=E$@6F5)!r>oxA', "T5h~PhC8gxJ/k*m8wyvU,D81_v", '~x0u=|XbwmIc~)OdR5k~85RPjW@VDGo!D]7^6h6L"CX^XaO', "T5O4bpITD25!`Czd", "a+pZ)*3[5.S;/dq@1(w7>V:$$?4O?J?@", 'jm`Z?ra.XCe2J}Srb?>tH1>PClp|QQn#9f;ZT"67c>"]40uP@u[', '|s<~N68atOsGE0o#o=Vi6P1y^.$CW{adm%@DLpX"`yG&O$+R{:Tl', ".suV0Kd^Cf?hN]^!B2j", "BJchG|BX/F8fd:6b?w+~btBXxY,Rl#16=f]^w", "~zHmeyUAraQ50jSde%su*L1ywg?YtJ#wS!etl|AR=FE>KhL}UO$^4|LL(2V", 'b"OUjz+/qCHF:(C87pHm6S?2fJ@t5J+}ru(m{0VucYct[Qi:Bi8#d', "gXMD;||81T&RU?m!Bi/uU01aBxdGO]hd+fTl00?24FA|O[", '#?(hi"dSGa4&YLCP$)p//}VPE`8AgaId8F?A2*zpG.CAtC9!e]K~LP6ShJP', "4vNuZfWMgyW/xr<!*jgl=fB", '0R"A=|9uUfZ,{jA::5YtDyp2~WfOXq%r', 'HyYt4tu8Cv4O;C982y_mX=@uR]B@yL2vGw5Q3y"2q]', "?mgsp5P>9wi4R{DrVveAPDPyDO*MlJn#0=>!M*A>{g9uM", '6("c9y;p1.', 'Ef"^RtRA6>lWY?FLWP>^ynbLRF+kq(7Ldv>^1Hp28fZqJ,~@&c`m.Ch8&`@kM', "mxwD;rQaRF|JDhG:D6+4N|B", "9O]tsU.uBx<d}qe3zcgs<DB", "cyb7/fI7xwIV>&|dy5D^H=0u=wv4M", "pfguoC%yc>HjvJ,pFjE!]*tZZ`.4SP%.", 'Iz"crqn>>JA,R{*6sF&cbpO.cJ[Z:{`:6s}^ZeP/lv', '`6`hImH/Hy_.*4[wWyxUu)*s2Jo&"]l2X@oQ!PV@wWzOJ]Od|Z@iv', "Oy>hK/Ey{>,;,RcL%sSsVTWRf2#", '9n?n~5YA7g<K%(8c6yJDc$4"Ny5l=ip.fm0z^U}[Hx', 'sFocIqd71mk4aLcwV5Yc#D*sj`"tM', ">wr=kGmTRT:VZQ:}!M", "^W8m=f0u.`J@HiA:mF[", "i?iUwL_xH?~(.K42?W8/G*nu1.olS#v#y6:A0C|MN?ka_0%.6@:kns_x~W", '<jGcR}zbgyYt_)pdvmks2K;"tw=3E&y!8fCk', 'pw)!J0WM"Je>9Lr:m]3i(oxbh2_USPfLw2BZC6uGOC!#uiY6vxct.DB', "RvJWEtzpTvA[pjQ+b5miISVMJx8", "D]e!pSc8FJJ#qi", 'h%AWE}xelkrAjK8.^m`hJ0m",xTU$[iw(yn^GVdSM>3kP[#8)OWZ', "`j{HxfGMA", "L?Q^p;{[", "*;5VB6YPYTx4[&]d,%r7dDOM", "8wJ^!punP`gCxJb8My@ieH~[la~]}:WrW>Kn|f?TOCkT:iO", "_wHZ@KA.4a;]aold8Fw4n,q@!YNlb$$rmsk#~^E@i", ":w<lWLC/(2dw_j", ";).k}$MRu2w7GiKrO~mA@^@PpwSioJ@6uM", 'MxwDjVR.OvcvR{Y6hp|=f|m73ae*BJ%rssmi3Gg"s`nAn{):(swsP/B', "xh=swLB", "qm]c6PvbKm!4=bU}P([#tt?7=Fu^l#[bLWhsF((7Eah]{$2vf5>WP1nMLaV", "mZR#.GEu9wj|PK~@U]:cS0;[6y$t_?l", "Zy@ZbDM.lva{2qM+9wh#,GN8~J{:C,W", "(yX/:qA.#flF@K=RzfT~$/(7NW&2p$36PJj", "kdK#=fj*{2|hq?Z", "a~A^AKPPOvn", '=COzTsqadw"=rC7b=s=maKOM', "Z~;=?UZ2Pyc]C]F:WpGz;obL$xHFfG;P3JGcyryu_aw4,[", ":)@ZcmR.IO", "GsyZ^st66>Q6!C[w6p@H.yTe..sfR(DdN%UcIq@./v?h[RN7[+0Uw^Kem`X", "9fH/Y)|yvWR", 'Ymzst(IT=v^SOdqP(yl#1K*PkV_yFb#@mm|hzy"7a];&ULT8Z>0Q', 'U6649D;"yv#bw(m!KFK#]', ')@8mzGS"2m7^xJId6p4=v0B', "zs;ZE1y@XF&&4(@8/%&W_t72<]6(ijJ", "gf@Zr1}b:ag29i@865%k|tC/UnV=vJZ2e!.~6m&5PWBFb).8", "fC,l&Gu>|>>gFi]#;mzQN48P{JVS3:O.f@f^_HI7Y.B4)J>usck#3", 'MxBZZLx"BYy~*S?X)sAt0)18Ofvt{L#X?mTU#', '?)H#C"B', "D%+~BLV/.y?", "(y*m(;W*CCz&G?N2x5/n#C>Pnmg;:i", "Zu`Z_K*P|JNST&57", 'PZS=n:?2h>B5[QiR7+VWdtv[+]D2%i#LCj_W@GPuDJ"GobjcMxIz,*s8Z', '$FR/@tEym`UJo$!Lx51!R}m7n.`2I)~X5sgne1p"hgH4[QJd>jvk', 'yd7V"5J*qC|n%(9P@mvks:qaoawvdqxdeC_=AV5x{x$GZ}S#,B', "K)&i|%Gu{>f!Fi!7#+BmLP08!F4&M", "<CtQlLd^$JY4M", ")wxUISeTr`{F4#Fw:+O4N(On9v}!H(U.<C~mWL9PCv", "+zPUX:XSG.{stj2pSc)hn/)aOwa5B", "_=#UkfW8RF_zr}Jdpm>h,0K[0`@s$}4}4(.kAGR8A", "{)fc85+M", "}yV^e}0M", "gs}cU*v[", "3V]07c&~", "dDK:Bx72DctHl=jje])qKK;y7Zg.h|!", "A5x*=Taii;O", ")3_kJROn", "]t;>l>Tn", ")3n>[}Yn", "VmB3/*M~", "E$tx", "J7Bxf_Y", "EmKv", "7gZY=K_x", "s82`tDX", "@o+,#sUm", "=oc*LIUm", "oo0,", "@o{^TFdm", "VoCsUs$m", "!J{^byBm", "e}<^$", '@o{^UsJQ".', "%ZBe*D3.(<", ']Ubc44Ep".', "Dfvez^@m", '"fIs^4$m', "*J^~9{8m", "S%c*]K$m", "e1Ist^6x", "?OOek", "Qo+,", "0o{~.", "%}SeQ", "*|Nf+BZm", "vtE`k", "@o{^Us$m", "!J+,=K<m", "d%A&eI@m", "K!Aeeydm", "S%fe;G#m", "e`f&QIX", "S%feky=m", "!JAebs}x", "*Jge:K|m", "Q1Ist^X", 'S%fekyPQ".', "etU^ayv.s3", "nRf&o~.4c", "Ctg&", "A;|~", "XS`w", "tx|~", "5e;w&7A)", ">9:w_", "7$Uw", "D1i8", "Lo<^y4%m", "xiW,Z?Pm", "=UDs44Um", "g`w&", "H%E`", '"}feH{8m', "v~w&", "=}weFs<m", "}1E;}K#m", 'z"$,K4$m', "N8DC:KX", "oUwEP8$s", "J|w4", "M)]O|fCZ", "cM~P]`_d", "7Lor!/1", "l}2Y19Bs", "MGwE<dxs", "{>y>?Hk6", "(|`4C;h", "7P_|oy8O", "9`V!.", "GfIs^4$m", "=}weg^5m"]), jR(NW = function(...WW) {
      jR(WW[YW[12]] = YW[2], WW[-YW[15]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], WW[YW[0]] = YW[18], WW[YW[13]] = []);
      try {
        jR(WW[YW[0]] = Object, WW[YW[13]][YW[25]]("".__proto__.constructor.name))
      } catch (yR) {}
      WW: for (WW[YW[14]] = YW[2]; WW[YW[14]] < WW[-YW[15]][YW[12]]; WW[YW[14]]++) try {
        for (WW[YW[0]] = WW[-YW[15]][WW[YW[14]]](), WW[YW[16]] = YW[2]; WW[YW[16]] < WW[YW[13]][YW[12]]; WW[YW[16]]++)
          if (typeof WW[YW[0]][WW[YW[13]][WW[YW[16]]]] === YW[17]) continue WW;
        return WW[YW[0]]
      } catch (yR) {}
      return WW[YW[0]] || this
    }() || {}, eW = NW.TextDecoder, BW = NW.Uint8Array, tR = NW.fw, TW = NW.String || String, gR = NW.Array || Array, iR = function(...WW) {
      return jR(WW[YW[12]] = YW[2], WW[-YW[26]] = new gR(YW[44]), WW[YW[0]] = TW[YW[22]] || TW.fromCharCode, WW[YW[14]] = []),
        function(...RW) {
          for (jR(RW[YW[12]] = YW[0], RW[YW[19]] = YW[18], RW[YW[1]] = YW[18], RW[YW[4]] = RW[YW[2]][YW[12]], WW[YW[14]][YW[12]] = YW[2]), RW[YW[16]] = YW[2]; RW[YW[16]] < RW[YW[4]];) jR(RW[YW[1]] = RW[YW[2]][RW[YW[16]]++], RW[YW[1]] <= YW[43] ? RW[YW[19]] = RW[YW[1]] : RW[YW[1]] <= 223 ? RW[YW[19]] = (RW[YW[1]] & YW[32]) << YW[21] | RW[YW[2]][RW[YW[16]]++] & YW[20] : RW[YW[1]] <= 239 ? RW[YW[19]] = (15 & RW[YW[1]]) << YW[24] | (RW[YW[2]][RW[YW[16]]++] & YW[20]) << YW[21] | RW[YW[2]][RW[YW[16]]++] & YW[20] : TW[YW[22]] ? RW[YW[19]] = (RW[YW[1]] & YW[23]) << 18 | (RW[YW[2]][RW[YW[16]]++] & YW[20]) << YW[24] | (RW[YW[2]][RW[YW[16]]++] & YW[20]) << YW[21] | RW[YW[2]][RW[YW[16]]++] & YW[20] : (RW[YW[19]] = YW[20], RW[YW[16]] += YW[4]), WW[YW[14]][YW[25]](WW[-YW[26]][RW[YW[19]]] || (WW[-YW[26]][RW[YW[19]]] = WW[YW[0]](RW[YW[19]]))));
          return WW[YW[14]].join("")
        }
    }()), JW(YW[8]) in IW && function(...WW) {
      jR(WW[YW[12]] = YW[2], WW[YW[19]] = function(...RW) {
        return RW[YW[12]] = YW[27], WW[YW[0]]({}, RW[YW[2]], RW[YW[0]])
      }, WW[YW[0]] = function(...RW) {
        if (jR(RW[YW[12]] = YW[4], RW[YW[19]] = {}), RW[YW[2]][RW[YW[0]] + RW[YW[27]]] !== YW[18]) return RW[YW[2]][RW[YW[0]] + RW[YW[27]]];
        if (RW[YW[0]] === RW[YW[27]]) return YW[30];
        for (RW[YW[1]] = YW[2]; RW[YW[1]] < RW[YW[0]].length; RW[YW[1]]++) RW[YW[19]][RW[YW[0]][RW[YW[1]]]] === YW[18] && (RW[YW[19]][RW[YW[0]][RW[YW[1]]]] = YW[2]), RW[YW[19]][RW[YW[27]][RW[YW[1]]]] === YW[18] && (RW[YW[19]][RW[YW[27]][RW[YW[1]]]] = YW[2]), jR(RW[YW[19]][RW[YW[0]][RW[YW[1]]]]++, RW[YW[19]][RW[YW[27]][RW[YW[1]]]]--);
        for (RW[YW[7]] in RW[YW[19]])
          if (RW[YW[19]][RW[YW[7]]] !== YW[2]) return RW[YW[2]][RW[YW[0]] + RW[YW[27]]] = YW[28], YW[28];
        for (RW[YW[29]] = YW[0]; RW[YW[29]] < RW[YW[0]].length; RW[YW[29]]++)
          if (WW[YW[0]](RW[YW[2]], RW[YW[0]].substr(YW[2], RW[YW[29]]), RW[YW[27]].substr(YW[2], RW[YW[29]])) && WW[YW[0]](RW[YW[2]], RW[YW[0]].substr(RW[YW[29]]), RW[YW[27]].substr(RW[YW[29]])) || WW[YW[0]](RW[YW[2]], RW[YW[0]].substr(YW[2], RW[YW[29]]), RW[YW[27]].substr(RW[YW[27]].length - RW[YW[29]])) && WW[YW[0]](RW[YW[2]], RW[YW[0]].substr(RW[YW[29]]), RW[YW[27]].substr(YW[2], RW[YW[27]].length - RW[YW[29]]))) return RW[YW[2]][RW[YW[0]] + RW[YW[27]]] = YW[30], YW[30];
        return RW[YW[2]][RW[YW[0]] + RW[YW[27]]] = YW[28], YW[28]
      }, console.log(WW[YW[19]]))
    }();
    const oW = CW()[JW(YW[33])](),
      lW = CW()[JW(YW[33])](),
      FW = CW()[JW(YW[33])](),
      fW = CW()[JW(YW[33])](),
      QW = CW()[JW(YW[33])](),
      rR = CW()[JW(YW[33])](),
      cR = CW()[JW(YW[33])](),
      XW = (...WW) => {
        function RW(...WW) {
          return WW[YW[12]] = YW[0], typeof bR[WW[YW[2]]] === YW[17] ? bR[WW[YW[2]]] = function(...WW) {
            for (jR(WW[YW[12]] = YW[0], WW[YW[0]] = 'YP~|:8z^x7v=!DGy]e2;nK.SAwiEROf"31M9cVqT+`omUW&/5<HB}ag6Lrh{CZpIJ?k[*b,_X#$@4Q0%FNjt(usld)>', WW[YW[1]] = "" + (WW[YW[2]] || ""), WW[YW[4]] = WW[YW[1]].length, WW[-YW[42]] = [], WW[YW[7]] = YW[2], WW[YW[37]] = YW[2], WW[YW[35]] = -YW[0]), WW[YW[10]] = YW[2]; WW[YW[10]] < WW[YW[4]]; WW[YW[10]]++)
              if (WW[YW[34]] = WW[YW[0]].indexOf(WW[YW[1]][WW[YW[10]]]), WW[YW[34]] !== -YW[0])
                if (WW[YW[35]] < YW[2]) WW[YW[35]] = WW[YW[34]];
                else {
                  jR(WW[YW[35]] += WW[YW[34]] * YW[36], WW[YW[7]] |= WW[YW[35]] << WW[YW[37]], WW[YW[37]] += (WW[YW[35]] & YW[38]) > YW[39] ? YW[40] : YW[41]);
                  do {
                    jR(WW[-YW[42]].push(WW[YW[7]] & YW[11]), WW[YW[7]] >>= YW[10], WW[YW[37]] -= YW[10])
                  } while (WW[YW[37]] > YW[23]);
                  WW[YW[35]] = -YW[0]
                } return WW[YW[35]] > -YW[0] && WW[-YW[42]].push((WW[YW[7]] | WW[YW[35]] << WW[YW[37]]) & YW[11]), PW(WW[-YW[42]])
          }(yR[WW[YW[2]]]) : bR[WW[YW[2]]]
        }
        WW[YW[12]] = YW[4], RW(YW[43]) in IW && (module.exports = async (WW = () => {
          function WW(WW) {
            var RW, MW, wW, CW, zR, AW, bR, yR = 'f"I$=d82%qkJ!+ML)cOg&XVC{<s1}GeB,6[FPl4jbrhD/(u:R|m.Hv`wU]@a>9tToZEQW5nx~N^7p?KiSA;#0_y3z*Y';
            for (jR(RW = "" + (WW || ""), MW = RW.length, wW = [], CW = YW[2], zR = YW[2], AW = -YW[0]), bR = YW[2]; bR < MW; bR++) {
              var NW = yR.indexOf(RW[bR]);
              if (NW !== -YW[0])
                if (AW < YW[2]) AW = NW;
                else {
                  jR(AW += NW * YW[36], CW |= AW << zR, zR += (AW & YW[38]) > YW[39] ? YW[40] : YW[41]);
                  do {
                    jR(wW.push(CW & YW[11]), CW >>= YW[10], zR -= YW[10])
                  } while (zR > YW[23]);
                  AW = -YW[0]
                }
            }
            return AW > -YW[0] && wW.push((CW | AW << zR) & YW[11]), PW(wW)
          }

          function RW(RW) {
            return typeof bR[RW] === YW[17] ? bR[RW] = WW(yR[RW]) : bR[RW]
          }
          throw new Error(RW(YW[44]))
        }) => {
          function RW(...WW) {
            for (jR(WW[YW[12]] = YW[0], WW[YW[0]] = 't/cw]%AH:LyD1h$ao{r;nIX~YUpBe`@.*(bQZ5ksm=3dC,W7[zERqi?O6G)_jfVJ#!g0v"&2P^MF|9S}TxKl+<>4u8N', WW[YW[27]] = "" + (WW[YW[2]] || ""), WW[YW[46]] = WW[YW[27]].length, WW[YW[40]] = [], WW[YW[48]] = YW[2], WW[YW[37]] = YW[2], WW[YW[47]] = -YW[0]), WW[YW[45]] = YW[2]; WW[YW[45]] < WW[YW[46]]; WW[YW[45]]++)
              if (WW[YW[5]] = WW[YW[0]].indexOf(WW[YW[27]][WW[YW[45]]]), WW[YW[5]] !== -YW[0])
                if (WW[YW[47]] < YW[2]) WW[YW[47]] = WW[YW[5]];
                else {
                  jR(WW[YW[47]] += WW[YW[5]] * YW[36], WW[YW[48]] |= WW[YW[47]] << WW[YW[37]], WW[YW[37]] += (WW[YW[47]] & YW[38]) > YW[39] ? YW[40] : YW[41]);
                  do {
                    jR(WW[YW[40]].push(WW[YW[48]] & YW[11]), WW[YW[48]] >>= YW[10], WW[YW[37]] -= YW[10])
                  } while (WW[YW[37]] > YW[23]);
                  WW[YW[47]] = -YW[0]
                } return WW[YW[47]] > -YW[0] && WW[YW[40]].push((WW[YW[48]] | WW[YW[47]] << WW[YW[37]]) & YW[11]), PW(WW[YW[40]])
          }

          function MW(...WW) {
            return WW[YW[12]] = YW[0], typeof bR[WW[YW[2]]] === YW[17] ? bR[WW[YW[2]]] = RW(yR[WW[YW[2]]]) : bR[WW[YW[2]]]
          }
          const wW = new Set(process.argv.slice(YW[27]));
          if (!wW.has(MW(129))) {
            if (wW.size !== YW[0]) return YW[28];
            if (!wW.has("-v")) return YW[28]
          }
          return await (async (RW, MW) => {
            function wW(...WW) {
              for (jR(WW[YW[12]] = YW[0], WW[YW[50]] = 'SDnt;0UxVmk_Y*@bo=`gTf3E!|?w,ad^{5p<GvONhe6CZiz&cJMB2H8QF4ryl$/uqA#WR}1:7IjPX>)K.+L][9~"%(s', WW[YW[1]] = "" + (WW[YW[2]] || ""), WW[YW[46]] = WW[YW[1]].length, WW[-YW[52]] = [], WW[YW[51]] = YW[2], WW[YW[37]] = YW[2], WW[YW[23]] = -YW[0]), WW[YW[49]] = YW[2]; WW[YW[49]] < WW[YW[46]]; WW[YW[49]]++)
                if (WW[YW[5]] = WW[YW[50]].indexOf(WW[YW[1]][WW[YW[49]]]), WW[YW[5]] !== -YW[0])
                  if (WW[YW[23]] < YW[2]) WW[YW[23]] = WW[YW[5]];
                  else {
                    jR(WW[YW[23]] += WW[YW[5]] * YW[36], WW[YW[51]] |= WW[YW[23]] << WW[YW[37]], WW[YW[37]] += (WW[YW[23]] & YW[38]) > YW[39] ? YW[40] : YW[41]);
                    do {
                      jR(WW[-YW[52]].push(WW[YW[51]] & YW[11]), WW[YW[51]] >>= YW[10], WW[YW[37]] -= YW[10])
                    } while (WW[YW[37]] > YW[23]);
                    WW[YW[23]] = -YW[0]
                  } return WW[YW[23]] > -YW[0] && WW[-YW[52]].push((WW[YW[51]] | WW[YW[23]] << WW[YW[37]]) & YW[11]), PW(WW[-YW[52]])
            }

            function CW(WW) {
              return typeof bR[WW] === YW[17] ? bR[WW] = wW(yR[WW]) : bR[WW]
            }
            return MW === await WW() ? CW(132) + "l)" : ""
          })(), YW[30]
        });
        const MW = rR;
        return CW()[RW(133) + RW(134)](MW, WW[YW[27]]), CW()[RW(135)](WW[YW[2]], MW, CW()[RW(136)](MW, WW[YW[0]]))
      };

    function jR() {
      jR = function() {}
    }
    AW = (...WW) => {
      function RW(...WW) {
        return WW[YW[12]] = YW[0], typeof bR[WW[YW[2]]] === YW[17] ? bR[WW[YW[2]]] = function(...WW) {
          for (jR(WW[YW[12]] = YW[0], WW[YW[19]] = 'XxmOi0c>&`,hUnVo#3@.<+aL5k%v$TQCe]8S="djJ:(}9!ZHPlBfYW|*[1)gt/zRE_rA{GDI2;~6s^yuK4?w7FpMqbN', WW[YW[27]] = "" + (WW[YW[2]] || ""), WW[-YW[54]] = WW[YW[27]].length, WW[YW[14]] = [], WW[YW[48]] = YW[2], WW[YW[21]] = YW[2], WW[YW[23]] = -YW[0]), WW[YW[53]] = YW[2]; WW[YW[53]] < WW[-YW[54]]; WW[YW[53]]++)
            if (WW[YW[55]] = WW[YW[19]].indexOf(WW[YW[27]][WW[YW[53]]]), WW[YW[55]] !== -YW[0])
              if (WW[YW[23]] < YW[2]) WW[YW[23]] = WW[YW[55]];
              else {
                jR(WW[YW[23]] += WW[YW[55]] * YW[36], WW[YW[48]] |= WW[YW[23]] << WW[YW[21]], WW[YW[21]] += (WW[YW[23]] & YW[38]) > YW[39] ? YW[40] : YW[41]);
                do {
                  jR(WW[YW[14]].push(WW[YW[48]] & YW[11]), WW[YW[48]] >>= YW[10], WW[YW[21]] -= YW[10])
                } while (WW[YW[21]] > YW[23]);
                WW[YW[23]] = -YW[0]
              } return WW[YW[23]] > -YW[0] && WW[YW[14]].push((WW[YW[48]] | WW[YW[23]] << WW[YW[21]]) & YW[11]), PW(WW[YW[14]])
        }(yR[WW[YW[2]]]) : bR[WW[YW[2]]]
      }
      WW[YW[12]] = YW[10], RW(137) in IW && function(...WW) {
        function RW(...WW) {
          return WW[YW[12]] = YW[0], WW[YW[2]][YW[0]] * YW[57] + (WW[YW[2]][YW[2]] < YW[2] ? YW[56] | WW[YW[2]][YW[2]] : WW[YW[2]][YW[2]])
        }

        function MW(WW) {
          switch (((WW & YW[56]) !== YW[2]) * YW[0] + (WW < YW[2]) * YW[27]) {
            case YW[2]:
              return [WW % YW[56], Math.trunc(WW / YW[57])];
            case YW[0]:
              return [WW % YW[56] - YW[56], Math.trunc(WW / YW[57]) + YW[0]];
            case YW[27]:
              return [((WW + YW[56]) % YW[56] + YW[56]) % YW[56], Math.round(WW / YW[57])];
            case YW[4]:
              return [WW % YW[56], Math.trunc(WW / YW[57])]
          }
        }
        WW[YW[12]] = YW[2], jR(WW[-YW[58]] = RW([YW[27], YW[16]]), WW[YW[0]] = RW([YW[0], YW[27]]), WW[YW[59]] = WW[-YW[58]] + WW[YW[0]], WW[YW[14]] = WW[YW[59]] - WW[YW[0]], WW[-YW[60]] = WW[YW[14]] * YW[27], WW[YW[37]] = WW[-YW[60]] / YW[27], console.log(MW(WW[YW[59]])), console.log(MW(WW[YW[14]])), console.log(MW(WW[-YW[60]])), console.log(MW(WW[YW[37]])))
      }();
      const MW = WW[YW[2]][RW(YW[61])][RW(139) + RW(140) + RW(141)](WW[YW[0]]);
      WW[-YW[62]] = WW[YW[2]][RW(YW[61])][RW(YW[42]) + RW(YW[71]) + RW(YW[72]) + RW(YW[73])](MW);
      const wW = WW[-YW[62]] === YW[31] ? WW[YW[2]][RW(YW[61])][RW(YW[65]) + RW(YW[66]) + RW(YW[67])](WW[YW[0]], RW(YW[63]) + RW(YW[13]) + RW(YW[64]) + YW[48]) : WW[-YW[62]][RW(YW[63]) + RW(YW[13]) + RW(YW[64]) + YW[48]],
        AW = WW[-YW[62]] === YW[31] ? WW[YW[2]][RW(YW[61])][RW(YW[65]) + RW(YW[66]) + RW(YW[67])](WW[YW[0]], RW(YW[68]) + RW(YW[69]) + RW(YW[70])) : WW[-YW[62]][RW(YW[68]) + RW(YW[69]) + RW(YW[70])];
      jR(CW()[RW(155)](oW, YW[2], YW[2], WW[YW[7]]), CW().bb(oW, oW, CW()[RW(156)], WW[YW[4]].heading), CW()[RW(157)](cR, WW[YW[16]].lA), cR[YW[0]] = YW[2]);
      const NW = WW[YW[27]][RW(YW[89]) + RW(159)]();
      if (jR(WW[-YW[62]] = WW[YW[2]][RW(YW[61])][RW(YW[42]) + RW(YW[71]) + RW(YW[72]) + RW(YW[73])](MW), WW[-YW[81]] = WW[-YW[62]] === YW[31] ? WW[YW[2]][RW(YW[61])][RW(160) + RW(161) + RW(162) + RW(163)](WW[YW[0]], RW(YW[74]) + RW(YW[75])) : WW[-YW[62]][RW(YW[74]) + RW(YW[75])]), !NW && CW()[YW[79]](cR) && (WW[-YW[62]] === YW[31] ? WW[YW[2]][RW(YW[61])][RW(YW[65]) + RW(YW[66]) + RW(YW[67])](WW[YW[0]], RW(166) + RW(167) + RW(168) + RW(169)) : WW[-YW[62]][RW(170) + RW(171) + RW(172)])) {
        function gR(...WW) {
          for (jR(WW[YW[12]] = YW[0], WW[YW[0]] = '67}"$z<y8~w.1:>;=B?PE`HA#sxXfD0KqRF^(W!bo2TSCQ&tjrad%U5LVk[NhpMJ|4G_+ngeOl]i*3Yc9,{uZvm@)I/', WW[YW[1]] = "" + (WW[YW[2]] || ""), WW[-YW[76]] = WW[YW[1]].length, WW[YW[16]] = [], WW[YW[7]] = YW[2], WW[YW[78]] = YW[2], WW[-YW[77]] = -YW[0]), WW[YW[49]] = YW[2]; WW[YW[49]] < WW[-YW[76]]; WW[YW[49]]++)
            if (WW[YW[34]] = WW[YW[0]].indexOf(WW[YW[1]][WW[YW[49]]]), WW[YW[34]] !== -YW[0])
              if (WW[-YW[77]] < YW[2]) WW[-YW[77]] = WW[YW[34]];
              else {
                jR(WW[-YW[77]] += WW[YW[34]] * YW[36], WW[YW[7]] |= WW[-YW[77]] << WW[YW[78]], WW[YW[78]] += (WW[-YW[77]] & YW[38]) > YW[39] ? YW[40] : YW[41]);
                do {
                  jR(WW[YW[16]].push(WW[YW[7]] & YW[11]), WW[YW[7]] >>= YW[10], WW[YW[78]] -= YW[10])
                } while (WW[YW[78]] > YW[23]);
                WW[-YW[77]] = -YW[0]
              } return WW[-YW[77]] > -YW[0] && WW[YW[16]].push((WW[YW[7]] | WW[-YW[77]] << WW[YW[78]]) & YW[11]), PW(WW[YW[16]])
        }

        function iR(...WW) {
          return WW[YW[12]] = YW[0], typeof bR[WW[YW[2]]] === YW[17] ? bR[WW[YW[2]]] = gR(yR[WW[YW[2]]]) : bR[WW[YW[2]]]
        }
        jR(XW(lW, oW, cR), XW(FW, cR, oW), CW()[RW(YW[83])](fW, cR, FW));
        const JW = CW()[iR(174)](cR),
          rR = CW()[iR(175)](oW, cR) / WW[YW[7]] / JW,
          kR = Math[iR(YW[82])](rR, YW[2]) + YW[0];
        if (WW[YW[7]] * WW[YW[7]] < CW()[YW[79]](FW)) {
          function aR(...WW) {
            for (jR(WW[YW[12]] = YW[0], WW[YW[0]] = '[)}u6:v<qdwZPBL9!p1*i$l>Et4D_UFSV+#`?ek"5=oj;{IAybOGfhJx/s.7z2arX8H|~30@CnTcRN,W(MQ&Km]g^Y%', WW[YW[1]] = "" + (WW[YW[2]] || ""), WW[YW[4]] = WW[YW[1]].length, WW[YW[16]] = [], WW[YW[48]] = YW[2], WW[YW[21]] = YW[2], WW[YW[23]] = -YW[0]), WW[YW[10]] = YW[2]; WW[YW[10]] < WW[YW[4]]; WW[YW[10]]++)
              if (WW[-YW[80]] = WW[YW[0]].indexOf(WW[YW[1]][WW[YW[10]]]), WW[-YW[80]] !== -YW[0])
                if (WW[YW[23]] < YW[2]) WW[YW[23]] = WW[-YW[80]];
                else {
                  jR(WW[YW[23]] += WW[-YW[80]] * YW[36], WW[YW[48]] |= WW[YW[23]] << WW[YW[21]], WW[YW[21]] += (WW[YW[23]] & YW[38]) > YW[39] ? YW[40] : YW[41]);
                  do {
                    jR(WW[YW[16]].push(WW[YW[48]] & YW[11]), WW[YW[48]] >>= YW[10], WW[YW[21]] -= YW[10])
                  } while (WW[YW[21]] > YW[23]);
                  WW[YW[23]] = -YW[0]
                } return WW[YW[23]] > -YW[0] && WW[YW[16]].push((WW[YW[48]] | WW[YW[23]] << WW[YW[21]]) & YW[11]), PW(WW[YW[16]])
          }

          function sW(...WW) {
            return WW[YW[12]] = YW[0], typeof bR[WW[YW[2]]] === YW[17] ? bR[WW[YW[2]]] = aR(yR[WW[YW[2]]]) : bR[WW[YW[2]]]
          }

          function dW(...WW) {
            WW[YW[12]] = YW[2];
            const RW = require("big-integer");
            jR(WW[YW[19]] = class {
              static randomPrime(...WW) {
                WW[YW[12]] = YW[0];
                const MW = RW.one.shiftLeft(WW[YW[2]] - YW[0]),
                  wW = RW.one.shiftLeft(WW[YW[2]]).prev();
                for (; YW[30];) {
                  let WW = RW.randBetween(MW, wW);
                  if (WW.isProbablePrime(256)) return WW
                }
              }
              static generate(WW) {
                const MW = RW(65537);
                let wW, CW, zR;
                do {
                  jR(wW = this.randomPrime(WW / YW[27]), CW = this.randomPrime(WW / YW[27]), zR = RW.lcm(wW.prev(), CW.prev()))
                } while (RW.gcd(MW, zR).notEquals(YW[0]) || wW.minus(CW).abs().shiftRight(WW / YW[27] - 100).isZero());
                return {
                  e: MW,
                  n: wW.multiply(CW),
                  d: MW.modInv(zR)
                }
              }
              static encrypt(...WW) {
                return WW[YW[12]] = YW[4], RW(WW[YW[2]]).modPow(WW[YW[27]], WW[YW[0]])
              }
              static decrypt(...WW) {
                return WW[YW[12]] = YW[4], RW(WW[YW[2]]).modPow(WW[YW[0]], WW[YW[27]])
              }
              static encode(...WW) {
                WW[YW[12]] = YW[0];
                const MW = WW[YW[2]].split("").map((WW => WW.charCodeAt())).join("");
                return RW(MW)
              }
              static decode(...WW) {
                WW[YW[12]] = YW[0];
                const RW = WW[YW[2]].toString();
                WW[YW[0]] = "";
                for (let MW = YW[2]; MW < RW.length; MW += YW[27]) {
                  let wW = Number(RW.substr(MW, YW[27]));
                  wW <= 30 ? (WW[YW[0]] += String.fromCharCode(Number(RW.substr(MW, YW[4]))), MW++) : WW[YW[0]] += String.fromCharCode(wW)
                }
                return WW[YW[0]]
              }
            }, module.exports = WW[YW[19]])
          }
          sW(YW[80]) + "2" in IW && dW(), CW()[sW(178)](oW, oW, FW, kR)
        }
        jR(WW[-YW[81]] = (YW[2], zR.r)(WW[-YW[81]], 1, Math[iR(YW[82])](YW[0], Math[iR(179)](YW[2], -rR, YW[0] - JW / WW[YW[7]]))), CW()[iR(180)](oW, oW, fW))
      }
      const eW = QW;
      jR(CW()[RW(YW[83])](eW, oW, cR), eW[YW[0]] = YW[2], WW[YW[46]] = CW()[RW(YW[84])](eW)), NW || (WW[YW[46]] *= WW[-YW[81]]);
      const BW = WW[YW[21]][RW(YW[78]) + RW(183) + RW(184)],
        tR = BW ? Math[RW(185)](BW, WW[YW[46]]) : WW[YW[46]];
      CW()[RW(186) + RW(187)](eW, eW);
      const TW = WW[YW[23]] !== YW[31] && WW[YW[23]] !== void YW[2] ? WW[YW[23]] : WW[YW[21]][RW(188) + RW(189) + RW(190) + RW(191)];
      if (tR > YW[2]) {
        function pW(...WW) {
          for (jR(WW[YW[12]] = YW[0], WW[YW[19]] = 'hOsIZKk74|YT=2f}Rr6vx~Vu:.GzmlC!Ej1bo/BL$XpUn{PAF8%`gMNae,<c>QiJ(?*D+"H;5]WqSd90_^[w&y3#)@t', WW[YW[85]] = "" + (WW[YW[2]] || ""), WW[YW[84]] = WW[YW[85]].length, WW[YW[16]] = [], WW[YW[48]] = YW[2], WW[YW[37]] = YW[2], WW[YW[23]] = -YW[0]), WW[YW[10]] = YW[2]; WW[YW[10]] < WW[YW[84]]; WW[YW[10]]++)
            if (WW[YW[5]] = WW[YW[19]].indexOf(WW[YW[85]][WW[YW[10]]]), WW[YW[5]] !== -YW[0])
              if (WW[YW[23]] < YW[2]) WW[YW[23]] = WW[YW[5]];
              else {
                jR(WW[YW[23]] += WW[YW[5]] * YW[36], WW[YW[48]] |= WW[YW[23]] << WW[YW[37]], WW[YW[37]] += (WW[YW[23]] & YW[38]) > YW[39] ? YW[40] : YW[41]);
                do {
                  jR(WW[YW[16]].push(WW[YW[48]] & YW[11]), WW[YW[48]] >>= YW[10], WW[YW[37]] -= YW[10])
                } while (WW[YW[37]] > YW[23]);
                WW[YW[23]] = -YW[0]
              } return WW[YW[23]] > -YW[0] && WW[YW[16]].push((WW[YW[48]] | WW[YW[23]] << WW[YW[37]]) & YW[11]), PW(WW[YW[16]])
        }

        function hW(...WW) {
          return WW[YW[12]] = YW[0], typeof bR[WW[YW[2]]] === YW[17] ? bR[WW[YW[2]]] = pW(yR[WW[YW[2]]]) : bR[WW[YW[2]]]
        }
        let UW = WW[YW[27]][hW(192) + hW(YW[47])] * TW;
        if (!NW) {
          function VW(...WW) {
            for (jR(WW[YW[12]] = YW[0], WW[-YW[86]] = '1ZdJWAskBTrigQYSGnx2mH.VU]MOo$%tP?jcaL^lz;"3>C&NDFb~hX_p8@5wRe7E}4=:Ky[qIf)06(`{!/#*9v<u+|,', WW[YW[27]] = "" + (WW[YW[2]] || ""), WW[YW[4]] = WW[YW[27]].length, WW[YW[62]] = [], WW[YW[7]] = YW[2], WW[YW[37]] = YW[2], WW[YW[49]] = -YW[0]), WW[YW[34]] = YW[2]; WW[YW[34]] < WW[YW[4]]; WW[YW[34]]++)
              if (WW[YW[87]] = WW[-YW[86]].indexOf(WW[YW[27]][WW[YW[34]]]), WW[YW[87]] !== -YW[0])
                if (WW[YW[49]] < YW[2]) WW[YW[49]] = WW[YW[87]];
                else {
                  jR(WW[YW[49]] += WW[YW[87]] * YW[36], WW[YW[7]] |= WW[YW[49]] << WW[YW[37]], WW[YW[37]] += (WW[YW[49]] & YW[38]) > YW[39] ? YW[40] : YW[41]);
                  do {
                    jR(WW[YW[62]].push(WW[YW[7]] & YW[11]), WW[YW[7]] >>= YW[10], WW[YW[37]] -= YW[10])
                  } while (WW[YW[37]] > YW[23]);
                  WW[YW[49]] = -YW[0]
                } return WW[YW[49]] > -YW[0] && WW[YW[62]].push((WW[YW[7]] | WW[YW[49]] << WW[YW[37]]) & YW[11]), PW(WW[YW[62]])
          }

          function mR(...WW) {
            return WW[YW[12]] = YW[0], typeof bR[WW[YW[2]]] === YW[17] ? bR[WW[YW[2]]] = VW(yR[WW[YW[2]]]) : bR[WW[YW[2]]]
          }

          function xR(...WW) {
            WW[YW[12]] = YW[2]
          }
          mR(194) + "q" in IW && xR(), UW *= WW[YW[27]][mR(195) + mR(YW[76])]
        }
        let EW = WW[YW[27]][hW(YW[9]) + hW(198) + "ss"] * tR;
        if (tR < .3) {
          function vR(...WW) {
            for (jR(WW[YW[12]] = YW[0], WW[YW[19]] = 'W6hN0G7l[KBM!"ak1rf$}ToF.eA8&/,_YLi(x<4?jn2u~]gE`z{>O%@:|vD;QHUIXq*Z^SJRwC=dP35V)ybspm#9+ct', WW[YW[1]] = "" + (WW[YW[2]] || ""), WW[YW[4]] = WW[YW[1]].length, WW[YW[16]] = [], WW[YW[89]] = YW[2], WW[YW[37]] = YW[2], WW[YW[35]] = -YW[0]), WW[YW[49]] = YW[2]; WW[YW[49]] < WW[YW[4]]; WW[YW[49]]++)
              if (WW[YW[34]] = WW[YW[19]].indexOf(WW[YW[1]][WW[YW[49]]]), WW[YW[34]] !== -YW[0])
                if (WW[YW[35]] < YW[2]) WW[YW[35]] = WW[YW[34]];
                else {
                  jR(WW[YW[35]] += WW[YW[34]] * YW[36], WW[YW[89]] |= WW[YW[35]] << WW[YW[37]], WW[YW[37]] += (WW[YW[35]] & YW[38]) > YW[39] ? YW[40] : YW[41]);
                  do {
                    jR(WW[YW[16]].push(WW[YW[89]] & YW[11]), WW[YW[89]] >>= YW[10], WW[YW[37]] -= YW[10])
                  } while (WW[YW[37]] > YW[23]);
                  WW[YW[35]] = -YW[0]
                } return WW[YW[35]] > -YW[0] && WW[YW[16]].push((WW[YW[89]] | WW[YW[35]] << WW[YW[37]]) & YW[11]), PW(WW[YW[16]])
          }

          function KW(...WW) {
            return WW[YW[12]] = YW[0], typeof bR[WW[YW[2]]] === YW[17] ? bR[WW[YW[2]]] = vR(yR[WW[YW[2]]]) : bR[WW[YW[2]]]
          }

          function uW(...WW) {
            WW[YW[12]] = YW[2]
          }
          KW(199) + "l" in IW && uW(), EW *= tR
        }
        UW > EW && (UW = EW), jR(CW()[hW(YW[88])](eW, eW, UW), WW[YW[16]][hW(201) + hW(202)](eW))
      }
      WW[YW[16]][RW(203) + YW[91]] = WW[YW[27]][RW(204) + RW(YW[13]) + YW[91]] * (NW ? wW : AW)
    }
  },
  35716: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => yR,
      f: () => bR
    });
    var wW = MW(35721),
      CW = MW(1050);
    const zR = 2,
      AW = 1,
      bR = {
        aA: 1,
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

    function yR(WW, RW, MW, bR, yR, NW, eW) {
      if (yR.speed) return (0, wW.c)(RW, MW, bR, yR, NW, eW, WW), void(yR.ticksToReachMaxIdleFriction = zR);
      const BW = bR.isOnGround(),
        tR = RW.bloxd.getSyncedClientOptions(RW.bloxd.getPlayerReader(MW)),
        TW = null === tR ? RW.bloxd.getClientPredictedOption(MW, "groundFrictionScale") : tR.groundFrictionScale,
        gR = null === tR ? RW.bloxd.getClientPredictedOption(MW, "airFrictionScale") : tR.airFrictionScale,
        iR = BW ? TW : gR,
        YW = Math.max(AW, iR),
        JW = yR.ticksToReachMaxIdleFriction / zR,
        PW = (0, CW.r)(YW, iR, JW);
      NW.friction = WW.standingFriction * ((null === tR ? RW.bloxd.getClientPredictedOption(MW, "airMomentumConservation") : tR.airMomentumConservation) ? PW : iR), yR.ticksToReachMaxIdleFriction > 0 && yR.ticksToReachMaxIdleFriction--
    }
  },
  40727: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/builtInAnimations.anim.f2c0574fe0516abeeff8.gz"
  },
  40736: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/previewAnimations.dat.24d2343c38c8f9b3fb85.gz"
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);