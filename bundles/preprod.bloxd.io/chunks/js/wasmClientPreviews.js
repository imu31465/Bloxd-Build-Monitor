export const id = 71;
export const ids = [71];
export const modules = {
  39860: (BB, OB, GB) => {
    function YB(BB) {
      return void 0 === BB ? void 0 : [BB[0], BB[1], BB[2]]
    }

    function DB(BB) {
      const OB = BB.particles;
      return {
        opts: {
          texture: OB.texture,
          CP: OB.CP,
          minLifeTime: OB.minLifeTime,
          maxLifeTime: OB.maxLifeTime,
          minSize: OB.minSize,
          maxSize: OB.maxSize,
          minEmitPower: OB.minEmitPower,
          maxEmitPower: OB.maxEmitPower,
          emitRate: OB.emitRate,
          gravity: YB(OB.gravity),
          dir1: YB(OB.dir1),
          dir2: YB(OB.dir2),
          colorGradients: OB.colorGradients,
          blendMode: OB.blendMode
        },
        half: [OB.width / 2, OB.height / 2, OB.depth / 2]
      }
    }
    GB.d(OB, {
      c: () => DB
    })
  },
  39836: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => QB,
      d: () => JB,
      f: () => yB,
      g: () => oB
    });
    var YB = GB(204);
    const DB = JSON.parse('{"aura_snowfall":{"offset":[0,2.6,0],"ownInFirstPerson":true,"particles":{"blendMode":1,"capacity":64,"colorGradients":[{"minColor":[255,255,255,0.9],"timeFraction":0},{"minColor":[255,255,255,0],"timeFraction":1}],"depth":3,"dir1":[-0.2,-1,-0.2],"dir2":[0.2,-1,0.2],"emitRate":12,"gravity":[0,-1.5,0],"height":0.2,"maxEmitPower":0.6,"maxLifeTime":2.5,"maxSize":0.15,"minEmitPower":0.3,"minLifeTime":1.5,"minSize":0.08,"texture":"snowflake","width":3}}}'),
      QB = "PetRoot";
    let oB = JSON.parse('{"pet_reindeer":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0},"pet_reindeer2":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0}}'),
      jB = DB;
    new Map, new Map;

    function yB(BB) {
      var OB;
      return null !== (OB = (0, YB.c)(oB, BB)) && void 0 !== OB ? OB : null
    }

    function JB(BB) {
      var OB;
      return null !== (OB = (0, YB.c)(jB, BB)) && void 0 !== OB ? OB : null
    }
  },
  39331: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => DB,
      f: () => QB
    });
    const YB = new WeakMap;

    function DB(BB, OB) {
      return YB.set(BB, OB), BB
    }

    function QB(BB) {
      var OB;
      return null !== (OB = YB.get(BB)) && void 0 !== OB ? OB : null
    }
  },
  36939: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => QB
    });
    const YB = 4e5,
      DB = 2;

    function QB(BB, OB, GB) {
      let [QB, oB] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [BB, OB], jB = Math.min(Number.isFinite(GB) && GB > 0 ? GB : 1, DB);
      const yB = Math.max(0, QB, BB) * Math.max(0, oB, OB) * jB * jB;
      return yB > YB && (jB *= Math.sqrt(YB / yB)), [Math.max(1, Math.floor(Math.max(0, BB) * jB)), Math.max(1, Math.floor(Math.max(0, OB) * jB))]
    }
  },
  54039: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      WasmPreviewHost: () => iO,
      pageBuiltInAnimationPack: () => zB,
      pagePreviews: () => oO,
      previewModule: () => xB
    });
    var YB = GB(3210),
      DB = GB(645);
    const QB = "[bloxd-wasm-client]";

    function oB(BB) {
      const OB = {
        wasm: "unknown",
        client: String(DB.b)
      };
      try {
        var GB;
        OB.wasm = null !== (GB = null === BB || void 0 === BB ? void 0 : BB.eP()) && void 0 !== GB ? GB : OB.wasm
      } catch {}
      return OB
    }
    async function jB(BB) {
      if (BB.length < 2 || 31 !== BB[0] || 139 !== BB[1]) return BB;
      if ("undefined" === typeof DecompressionStream) {
        const {
          ungzip: OB
        } = await Promise.resolve().then((() => GB(3143)));
        return OB(BB)
      }
      const OB = new Blob([BB]).stream().pipeThrough(new DecompressionStream("gzip"));
      return new Uint8Array(await new Response(OB).arrayBuffer())
    }

    function yB(BB, OB, YB, DB) {
      Promise.resolve().then((() => GB(41773))).then((GB => {
        let {
          reportDataLoadFailure: QB
        } = GB;
        QB(BB, OB, YB, DB)
      }), (OB => {
        console.warn(`${QB} ${BB} didn't load, and the report couldn't be sent`, YB.error, OB)
      }))
    }
    const JB = [3e4, 12e4, 3e5];
    class MB {
      constructor(BB) {
        this.deps = BB, this.loading = null, this.reported = !1, this.retries = 0, this.resolveSet = () => {}, this.set = new Promise((BB => {
          this.resolveSet = BB
        }))
      }
      provide(BB) {
        return this.loading ??= this.load(BB), this.loading
      }
      whenSet() {
        return this.set
      }
      async load(BB) {
        const OB = oB(BB),
          GB = await async function(BB, OB) {
            let GB;
            try {
              GB = await BB()
            } catch (YB) {
              return {
                stage: "fetch",
                error: YB
              }
            }
            try {
              return OB(GB) ? null : {
                stage: "decode",
                error: null
              }
            } catch (YB) {
              return {
                stage: "decode",
                error: YB
              }
            }
          }((() => this.deps.fetch()), (OB => {
            const GB = BB.LoB(OB);
            return GB && this.resolveSet(OB), GB
          }));
        if (null !== GB) {
          if ("fetch" === GB.stage) {
            this.loading = null;
            const OB = JB[this.retries++];
            void 0 !== OB && this.deps.later((() => {
              this.provide(BB)
            }), OB)
          }
          this.reported || (this.reported = !0, this.deps.onFailed(GB, OB))
        }
      }
    }
    let PB = null;

    function zB() {
      return PB ??= new MB({
        fetch: async () => jB(await (0, YB.I)(lB(), {
          priority: "low"
        })),
        onFailed: (BB, OB) => {
          yB("builtInAnimations", lB(), BB, OB)
        },
        later: (BB, OB) => {
          setTimeout(BB, OB)
        }
      }), PB
    }

    function lB() {
      return GB(54047)
    }
    var pB = GB(3206),
      qB = GB(1186),
      ZB = GB(328),
      NB = GB(320),
      RB = GB(662),
      WB = GB(5281),
      AB = GB(41729),
      VB = GB(41761),
      SB = GB(41953),
      nB = (GB(41805), GB(36937)),
      UB = GB(41827),
      fB = GB(41834),
      kB = GB(41842),
      dB = GB(41742),
      KB = GB(41971),
      uB = GB(41980),
      mB = GB(41723),
      IB = GB(41995),
      FB = GB(41874),
      iB = GB(41864),
      LB = GB(41900),
      gB = GB(41964),
      rB = GB(36945),
      XB = GB(36876),
      wB = GB(4128),
      EB = GB(36939);
    const cB = "[bloxd-previews]",
      hB = 0,
      aB = 1,
      eB = 2,
      TB = 1,
      bB = 2,
      CB = 3,
      HB = 0,
      vB = 1,
      sB = 2;

    function xB(BB) {
      const OB = BB,
        GB = (0, AB.W)(BB),
        YB = (0, AB.r)(BB);
      return null !== GB && null !== YB && "function" === typeof OB.IoB && "function" === typeof OB.FoB && "function" === typeof OB.ioB ? OB : null
    }

    function tB() {
      return GB(54055)
    }
    async function BO(BB, OB, YB) {
      var DB;
      let QB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      "lost" === BB && (0, mB.D)();
      const jB = await (0, mB.P)();
      if (null === jB || (0, AB.u)(jB) || (0, mB.c)()) return;
      const yB = "webgpu" === jB.backend;
      if (!yB && "lost" !== BB) return;
      const JB = yB && (0, NB.r)(jB.adapter, null !== YB && void 0 !== YB ? YB : null, "lost" === BB, QB),
        MB = null !== (DB = "lost" === BB ? (0, VB.l)((0, pB.S)() ? (0, AB.W)((0, pB.A)()) : null) : void 0) && void 0 !== DB ? DB : OB,
        PB = yB ? (0, AB.eb)(BB, void 0, (0, VB.c)(MB)) : (0, RB.p)() ? null : RB.f;
      if (null === PB) {
        (0, mB.s)();
        try {
          await async function(BB, OB, YB, DB, QB) {
            let {
              restoreLost: jB,
              adapterRemembered: yB
            } = QB;
            const JB = (0, pB.S)(),
              {
                flushCrashReports: MB,
                reportRenderReload: PB
              } = await Promise.resolve().then((() => GB(41773)));
            PB(BB.backend, DB, oB(JB ? (0, pB.A)() : null), {
              from: "home",
              cause: OB,
              restoreLost: jB,
              adapterRemembered: yB,
              ...OO(BB, OB, YB)
            }), await MB(FB.c)
          }(jB, BB, MB, null !== YB && void 0 !== YB ? YB : "start_failed" === BB ? 0 : 1, {
            restoreLost: QB,
            adapterRemembered: JB
          })
        } catch (lB) {
          console.warn(`${cB} ${jB.backend} failed at home (${BB}), and its report couldn't be sent`, lB)
        }(0, FB.g)()
      } else {
        var zB;
        const OB = OO(jB, BB, MB),
          YB = `${yB?"WebGPU":"WebGL"} failed at home (${BB}${void 0===OB.error?"":`: ${OB.error instanceof Error?OB.error.message:(0,XB.l)(OB.error)}`}) and ${PB}`;
        console.warn(`${cB} ${YB}: the previews stop`, null !== (zB = OB.error) && void 0 !== zB ? zB : ""), (0, mB.v)({
          why: YB,
          webgpu: yB
        });
        try {
          const {
            countRenderLost: YB
          } = await Promise.resolve().then((() => GB(41773)));
          YB(BB, OB.error, OB.context)
        } catch (qB) {
          console.warn(`${cB} ${jB.backend} failed at home (${BB}), and its count couldn't be sent`, qB)
        }
      }
    }

    function OO(BB, OB, GB) {
      let {
        adapter: YB
      } = BB;
      return {
        error: GB,
        context: {
          adapter: YB,
          boundAtMs: "start_failed" === OB ? null : (0, mB.L)(),
          indirectHangs: (0, mB.E)(),
          restoresSkipped: (0, mB.O)()
        }
      }
    }
    async function GO() {
      if (!(0, pB.S)()) {
        const BB = await (0, mB.P)();
        if (null === BB || (0, AB.u)(BB)) return null;
        if (await (0, IB.b)(await BB.load()), !(0, pB.S)()) return null
      }
      return xB((0, pB.A)())
    }
    class YO {
      constructor(BB, OB, GB, YB, DB, QB) {
        this.page = BB, this.host = OB, this.id = GB, this.canvas = YB, this.size = DB, this.models = void 0, this.images = void 0, this.write = void 0, this.outcomes = [], this.closed = !1, this.quiet = 0, this.settled = [];
        const oB = {
            ...QB.images,
            glbUrl: BB => {
              var OB;
              return null !== (OB = this.models.drawnUrl(BB)) && void 0 !== OB ? OB : QB.images.glbUrl(BB)
            }
          },
          jB = OB => BB.modelFile(OB);
        this.images = new SB.h(oB, (BB => {
          console.warn(`${cB} image ${BB.key.kind}:${BB.key.index}:${BB.key.word} failed`, BB.error)
        }), {
          fetchFile: jB,
          fetchImage: OB => BB.imageFile(OB)
        }), BB.startModels(), this.models = new UB.f(QB.files, ((OB, GB) => BB.buildModel(OB, GB)), (BB => {
          console.warn(`${cB} model file ${BB.file} (${BB.url}) failed`, BB.error)
        }), {
          fetchFile: jB,
          onWritten: (BB, OB) => {
            this.images.glbWritten(BB, OB)
          },
          onTaken: (BB, OB) => {
            this.images.glbTaken(BB, OB)
          }
        }), this.write = (BB, OB, GB) => {
          if (this.closed) return !0;
          if (BB === UB.d) {
            const BB = new DataView(GB.buffer, GB.byteOffset, kB.d),
              YB = BB.getUint32(0, !0),
              DB = BB.getUint32(kB.f, !0),
              QB = this.page.hostCall(sB, (() => this.host.EjB(this.id, YB, OB, GB.subarray(kB.d))));
            return this.outcomes.push([DB, QB]), !0
          }
          return BB === SB.e && (this.page.hostCall(void 0, (() => {
            this.host.ajB(this.id, GB)
          })), !0)
        }
      }
      get isClosed() {
        return this.closed
      }
      get isStopped() {
        return this.page.isStopped
      }
      resize(BB, OB, GB) {
        if (this.closed) return;
        const [YB, DB] = (0, EB.c)(BB, OB, this.page.dpr(), GB);
        YB === this.size[0] && DB === this.size[1] || (this.size = [YB, DB], this.page.hostCall(void 0, (() => {
          this.host.resize(this.id, YB, DB)
        })))
      }
      setMob(BB, OB, GB, YB) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.vjB(this.id, BB, OB, GB, YB))))
      }
      setPet(BB, OB, GB, YB) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.xjB(this.id, BB, OB, GB, YB))))
      }
      setPlayer(BB, OB, GB) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.bjB(this.id, BB, OB, GB))))
      }
      setCompanions(BB) {
        var OB;
        let {
          pet: GB,
          aura: YB
        } = BB;
        if (this.closed) return;
        const DB = null !== (OB = null === GB || void 0 === GB ? void 0 : GB.model) && void 0 !== OB ? OB : -1,
          QB = new Float64Array(GB ? [GB.scale, ...GB.offset, GB.yawOffset, GB.bobAmplitude, GB.bobHz] : []),
          oB = new Float64Array(YB ? [...YB.offset, ...YB.half] : []);
        this.page.hostCall(void 0, (() => {
          var BB, OB;
          this.host.TjB(this.id, DB, QB, null !== (BB = null === GB || void 0 === GB ? void 0 : GB.flyClip) && void 0 !== BB ? BB : "", null !== (OB = null === YB || void 0 === YB ? void 0 : YB.opts) && void 0 !== OB ? OB : "", oB)
        }))
      }
      setFigure(BB, OB, GB, YB) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.CjB(this.id, BB, OB, GB, YB))))
      }
      replay() {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.replay(this.id))))
      }
      get orbit() {
        if (this.closed) return null;
        const BB = this.page.hostCall(null, (() => this.host.orbit(this.id)));
        return null === BB || BB.length < 3 ? null : {
          alpha: BB[0],
          beta: BB[1],
          radius: BB[2]
        }
      }
      setOrbit(BB) {
        let {
          alpha: OB,
          beta: GB,
          radius: YB
        } = BB;
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.sjB(this.id, OB, GB, YB)
        }))
      }
      untilSettled() {
        return this.closed || this.page.isStopped ? Promise.resolve() : (this.quiet = 0, new Promise((BB => {
          this.settled.push(BB)
        })))
      }
      packChanged() {
        this.quiet = 0, this.models.refresh(), (0, KB.j)(this.images)
      }
      feed() {
        this.models.drain(this.write);
        for (const [BB, OB] of this.outcomes) {
          const GB = OB === HB ? [] : [OB === vB ? BB : (BB | UB.e) >>> 0];
          this.models.taken(BB, GB)
        }
        this.outcomes.length = 0, this.images.drain(this.write)
      }
      collect(BB) {
        let OB = !1;
        if (BB) {
          const BB = this.host.OyB(this.id);
          for (const OB of BB) this.models.request(OB);
          const GB = this.host.ByB(this.id);
          GB.length > 0 && this.images.onEvent(GB), OB = BB.length > 0 || GB.length > 0
        }
        const GB = this.page.modelsUnavailable ? 0 : this.models.asking + this.models.unanswered,
          YB = OB || GB > 0 || this.images.waiting > 0 || this.images.inFlight > 0;
        this.quiet = YB ? 0 : this.quiet + 1, this.quiet >= 3 && this.resolveSettled()
      }
      close() {
        this.closed || (this.closed = !0, this.page.closePreview(this), this.resolveSettled())
      }
      abandon() {
        this.resolveSettled()
      }
      dispose(BB) {
        this.page.hostCall(void 0, (() => {
          const OB = this.host.close(this.id);
          OB.length > 0 && this.images.onEvent(OB), this.page.isTrapped || BB.ioB(this.id)
        })), this.images.dispose(), this.canvas.remove()
      }
      resolveSettled() {
        const BB = this.settled;
        this.settled = [];
        for (const OB of BB) OB()
      }
    }
    class DO {
      constructor(BB) {
        this.deps = BB, this.module = null, this.host = null, this.opening = null, this.pageCanvas = null, this.samples = 1, this.binding = null, this.sessionEnds = 0, this.lastEndReturned = !0, this.previews = new Map, this.nextId = 1, this.frameId = null, this.stopped = !1, this.loggedErrors = new Set, this.modelsListener = {
          onUnavailable: BB => {
            this.modelsFailed(BB)
          },
          onWorkerLost: BB => {
            this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${cB} a model worker was lost: ${BB}`))
          },
          onModuleRetry: () => {}
        }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.zp = {
          setShaderPack: (BB, OB, GB, YB, DB) => (this.shaderPackArgs = [BB, OB, GB, YB, DB], this.handOverShaderPack(), !0)
        }, this.frame = BB => {
          this.frameId = null;
          const OB = this.host;
          if (null !== OB && 0 !== this.previews.size && !this.settleIfTrapped() && !this.stopped)
            if (this.deps.frameDue(BB)) try {
              this.drawFrame(OB, BB)
            } catch (GB) {
              if (!this.stopIfTrapped(GB) && (this.stop(), (0, AB.v)(GB))) return void this.deps.onRenderFailed("frames_refused", GB);
              console.warn(`${cB} the previews stopped: their frame threw`, GB)
            } else this.startFrames()
        }, BB.pack.onChange((() => {
          this.packChanged()
        })), BB.game.onGameChange((() => {
          this.tellInGame()
        }))
      }
      packChanged() {
        if (!this.stopped)
          for (const BB of this.previews.values()) BB.packChanged()
      }
      dpr() {
        return this.deps.dpr()
      }
      get sessionBound() {
        var BB, OB;
        return null !== (BB = null === (OB = this.host) || void 0 === OB ? void 0 : OB.attached()) && void 0 !== BB && BB
      }
      get open() {
        return this.previews.size
      }
      get frameCostMs() {
        return 0 === this.costs.length ? 0 : this.costs.reduce(((BB, OB) => BB + OB), 0) / this.costs.length
      }
      async bindSession(BB, OB, GB) {
        const YB = this.binding,
          DB = this.sessionEnds;
        try {
          const QB = this.hostOf(BB);
          if (!QB.hjB()) {
            const OB = (0, LB.i)().sampleCount,
              oB = await GB(OB);
            if (this.sessionEnds !== DB) return this.keepRendererOfEndedSession(BB, QB, oB, OB, YB), OB;
            if (!QB.UjB(oB)) throw new Error("the page has a renderer already");
            (0, mB.z)(performance.now()), this.samples = OB, (0, gB.h)((0, AB.r)(BB))
          }
          if (!QB.attach(OB)) throw new Error("the page's renderer is lent to another session");
          return this.samples
        } finally {
          this.binding === YB && this.endBinding()
        }
      }
      keepRendererOfEndedSession(BB, OB, GB, YB, DB) {
        if (!this.lastEndReturned || null !== this.binding && this.binding !== DB) try {
          GB.free()
        } catch (QB) {
          console.warn(`${cB} an ended session's renderer didn't free`, QB)
        } else OB.UjB(GB) && ((0, mB.z)(performance.now()), this.samples = YB, (0, gB.h)(this.registryOf(BB)))
      }
      async beginSession() {
        var BB;
        let OB = () => {};
        const GB = new Promise((BB => {
          OB = BB
        }));
        this.binding = {
          done: GB,
          release: OB
        }, await (null === (BB = this.opening) || void 0 === BB ? void 0 : BB.catch((() => null)));
        const YB = this.pageCanvas;
        return this.pageCanvas = null, YB
      }
      endSession(BB) {
        var OB, GB;
        if (this.sessionEnds++, this.lastEndReturned = BB, this.endBinding(), BB) {
          try {
            var YB;
            null === (YB = this.host) || void 0 === YB || YB.detach()
          } catch (DB) {
            return void console.warn(`${cB} the session's core kept the page's renderer`, DB)
          }!0 === (null === (OB = this.host) || void 0 === OB ? void 0 : OB.attached()) && console.warn(`${cB} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (GB = this.host) || void 0 === GB ? void 0 : GB.hjB()) && (0, gB.h)(this.registryOf(this.module))
        }
      }
      endBinding() {
        var BB;
        null === (BB = this.binding) || void 0 === BB || BB.release(), this.binding = null
      }
      async openPreview(BB, OB, GB, YB) {
        const DB = await this.renderingHost(),
          QB = this.module;
        if (null === DB || null === QB) throw new Error("this page can't draw previews: it has no renderer build");
        if (this.animations ??= this.loadAnimations(DB), this.deps.pack.wanted(), this.isStopped) throw new Error("the previews stopped");
        this.guarded((() => {
          this.deps.provideBuiltInAnimationPack(QB)
        }));
        const oB = this.nextId++,
          jB = this.deps.createCanvas(),
          [yB, JB] = (0, EB.c)(OB, GB, this.deps.dpr(), YB);
        jB.width = yB, jB.height = JB;
        if (!this.guarded((() => (QB.FoB(oB, jB), DB.open(oB, yB, JB, BB))))) throw this.hostCall(void 0, (() => {
          QB.ioB(oB)
        })), new Error("the page's renderer is lent to a session that is running");
        this.restartModelsIfFailed();
        const MB = new YO(this, DB, oB, jB, [yB, JB], this.deps);
        return this.previews.set(oB, MB), this.startFrames(), MB
      }
      prefetch() {
        if (this.prefetched || this.isStopped || (0, mB.c)() || null !== (0, mB.K)()) return;
        this.prefetched = !0;
        (null === this.module ? this.loadModule() : Promise.resolve(this.module)).then((BB => {
          null === BB || this.isStopped || (this.startModels(), this.fetchAnimationTable().catch((() => {})), this.prefetchPlayerFiles())
        }), (() => {}))
      }
      modelFile(BB) {
        return this.prefetchedOr(BB, this.deps.fetchModel)
      }
      imageFile(BB) {
        return this.prefetchedOr(BB, YB.I)
      }
      prefetchedOr(BB, OB) {
        const GB = this.prefetchedFiles.get(BB);
        return void 0 === GB ? OB(BB) : GB.catch((() => OB(BB)))
      }
      async prefetchPlayerFiles() {
        const BB = this.deps.playerFile().then((BB => this.deps.files.url(BB))),
          OB = await Promise.all([BB, this.deps.images.lifeformAtlasUrl(KB.c)]).catch((() => null));
        if (null === OB) return;
        const [GB, YB] = OB, DB = (BB, OB) => {
          if (null === BB) return;
          const GB = OB(BB);
          this.prefetchedFiles.set(BB, GB), GB.catch((() => {
            this.prefetchedFiles.delete(BB)
          }))
        };
        DB(GB, (BB => this.modelFile(BB))), DB(YB, (BB => this.imageFile(BB)))
      }
      loadModule() {
        return this.moduleLoad ??= this.deps.loadModule().then((BB => (null === BB && (this.moduleLoad = null), BB)), (BB => {
          throw this.moduleLoad = null, BB
        })), this.moduleLoad
      }
      fetchAnimationTable() {
        return this.animationTable ??= this.deps.fetchAnimations().catch((BB => {
          throw this.animationTable = null, BB
        })), this.animationTable
      }
      get modelsUnavailable() {
        return this.unavailable
      }
      startModels() {
        this.models ??= this.deps.startModels(this.modelsListener).catch((BB => (this.modelsFailed(BB), () => new Promise((() => {})))))
      }
      buildModel(BB, OB) {
        return this.startModels(), this.models.then((GB => GB(BB, OB))).then((BB => this.unavailable ? new Promise((() => {})) : BB))
      }
      restartModelsIfFailed() {
        this.unavailable && !this.modelsRestarted && 0 === this.previews.size && (this.modelsRestarted = !0, this.models = null, this.unavailable = !1, this.startModels())
      }
      modelsFailed(BB) {
        this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${cB} the model workers didn't start: models won't draw in the previews`, BB))
      }
      called(BB) {
        return 0 !== BB && this.logError(BB, 0), BB
      }
      closePreview(BB) {
        this.previews.delete(BB.id), null !== this.module && BB.dispose(this.module), 0 === this.previews.size && null !== this.frameId && (this.deps.cancelFrame(this.frameId), this.frameId = null)
      }
      hostOf(BB) {
        if (null !== this.module && this.module !== BB) throw new Error("a second renderer module on one page");
        return this.module = BB, null === this.host && (this.host = this.guarded((() => new BB.IoB)), this.tellInGame(), this.handOverShaderPack()), this.host
      }
      tellInGame() {
        const {
          host: BB
        } = this;
        null !== BB && this.outsideCall("the game's start or end", (() => {
          BB.HjB(this.deps.game.inGame())
        }))
      }
      handOverShaderPack() {
        const {
          host: BB,
          shaderPackArgs: OB
        } = this;
        null !== BB && null !== OB && this.outsideCall("the shader pack's hand-over", (() => {
          BB.uDB(...OB) || console.warn(`${cB} the host refused the shader pack: previews draw without it at home`)
        }))
      }
      outsideCall(BB, OB) {
        try {
          this.hostCall(void 0, OB)
        } catch (GB) {
          this.stop(), console.warn(`${cB} the previews stopped: ${BB} threw`, GB)
        }
      }
      async loadAnimations(BB) {
        const OB = oB(null),
          GB = this.module;
        try {
          OB.wasm = null === GB ? OB.wasm : this.hostCall(OB.wasm, (() => GB.eP()))
        } catch {}
        let YB, DB;
        try {
          YB = await this.fetchAnimationTable()
        } catch (QB) {
          return void this.deps.onAnimationsFailed({
            stage: "fetch",
            error: QB
          }, OB)
        }
        if (!this.settleIfTrapped()) {
          try {
            DB = BB.ejB(YB)
          } catch (QB) {
            if (this.stopIfTrapped(QB)) return;
            return void this.deps.onAnimationsFailed({
              stage: "decode",
              error: QB
            }, OB)
          }
          DB || this.deps.onAnimationsFailed({
            stage: "decode",
            error: null
          }, OB)
        }
      }
      async renderingHost() {
        if (null !== this.binding && await this.binding.done, this.settleIfTrapped()) return null;
        const BB = this.host;
        return null !== BB && this.guarded((() => BB.hjB())) ? BB : (this.opening ??= this.openAtHome().finally((() => {
          this.opening = null
        })), this.opening)
      }
      async openAtHome() {
        var BB;
        const OB = null !== (BB = this.module) && void 0 !== BB ? BB : await this.loadModule();
        if (null === OB) return null;
        const GB = this.hostOf(OB),
          YB = () => this.guarded((() => GB.hjB()));
        if (YB()) return GB;
        if (null !== (0, mB.K)() || (0, mB.c)()) return null;
        const DB = this.deps.createCanvas();
        DB.width = 1, DB.height = 1;
        const QB = await this.deps.openExtras();
        if (this.settleIfTrapped()) return null;
        const oB = (0, LB.i)().sampleCount;
        let jB;
        try {
          jB = await (0, AB.B)(OB, "previewRenderer", DB, oB, rB.f, QB)
        } catch (yB) {
          throw yB instanceof dB.e ? this.stopForTrap(yB) : (0, AB.y)(yB) && await this.deps.onRenderFailed("start_failed", yB), yB
        }
        return this.guarded((() => GB.UjB(jB))) ? ((0, mB.z)(performance.now()), this.samples = oB, this.pageCanvas = DB, (0, gB.h)(this.registryOf(OB)), GB) : YB() ? GB : null
      }
      startFrames() {
        null !== this.frameId || this.isStopped || (this.frameId = this.deps.requestFrame(this.frame))
      }
      drawFrame(BB, OB) {
        for (const oB of this.previews.values()) oB.feed();
        if (this.stopped) return;
        const GB = this.deps.now(),
          YB = BB.frame(OB);
        this.costs.push(this.deps.now() - GB), this.costs.length > 120 && this.costs.shift();
        const DB = 0 !== (256 & YB),
          QB = 255 & YB;
        for (const oB of this.previews.values()) {
          if (this.stopped) return;
          oB.collect(DB)
        }
        if (!this.stopped) {
          if (0 !== (512 & YB) && this.deps.onDrew(), DB) {
            const OB = BB.tjB();
            for (let BB = 0; BB + 1 < OB.length; BB += 2) OB[BB] === WB.I.RenderDeviceLost && this.deps.onDeviceLost(), this.logError(OB[BB], OB[BB + 1])
          }
          if (QB !== TB) {
            if (QB === bB) return this.stop(), void this.deps.onFatal(BB.rjB(), BB.XjB());
            if (QB === CB) return this.stop(), void console.warn(`${cB} the previews stopped: the page's renderer went with its session`);
            (0, ZB.b)(OB), this.startFrames()
          } else {
            const OB = BB.wjB();
            this.stop();
            const GB = OB[2] === WB.dd.PIPELINE_FAILED ? "pipeline_failed" : "lost";
            this.deps.onRenderFailed(GB, void 0, OB[1], OB[2] === WB.dd.RESTORE_LOST)
          }
        }
      }
      get isStopped() {
        return this.stopped || this.isTrapped
      }
      get isTrapped() {
        return null !== this.module && ((0, dB.m)(this.module) || "failed" === (0, pB.x)())
      }
      hostCall(BB, OB) {
        if (this.settleIfTrapped()) return BB;
        try {
          return OB()
        } catch (GB) {
          if (this.stopIfTrapped(GB)) return BB;
          throw GB
        }
      }
      guarded(BB) {
        if (this.settleIfTrapped()) throw new Error("the previews stopped: their module trapped");
        try {
          return BB()
        } catch (OB) {
          throw this.stopIfTrapped(OB), OB
        }
      }
      registryOf(BB) {
        return {
          ZDB: (OB, GB) => {
            this.hostCall(void 0, (() => {
              BB.ZDB(OB, GB)
            }))
          },
          NDB: OB => {
            this.hostCall(void 0, (() => {
              BB.NDB(OB)
            }))
          }
        }
      }
      settleIfTrapped() {
        return !!this.isTrapped && (this.stopped || (this.stop(), (0, gB.h)(null)), !0)
      }
      stopIfTrapped(BB) {
        return !(null === this.module || !(0, dB.q)(this.module, BB)) && (this.stopForTrap(BB), !0)
      }
      stopForTrap(BB) {
        this.stop(), (0, gB.h)(null), (0, wB.g)("previews", BB)
      }
      stop() {
        this.stopped = !0;
        for (const BB of this.previews.values()) BB.abandon()
      }
      logError(BB, OB) {
        const GB = `${BB}:${OB}`;
        this.loggedErrors.has(GB) || (this.loggedErrors.add(GB), console.warn(`${cB} error ${BB} (detail ${OB})`))
      }
    }
    let QO = null;

    function oO() {
      return QO ??= new DO(function() {
        const BB = (0, fB.n)(qB.clientSideServerUrls.staticUrl, {
          packUrl: BB => {
            var OB, GB;
            return null !== (OB = null === (GB = KB.g.current) || void 0 === GB ? void 0 : GB.modelUrl(BB)) && void 0 !== OB ? OB : null
          }
        });
        return {
          loadModule: GO,
          startModels: async BB => {
            const {
              pageModelPool: OB
            } = await GB.e(50).then((() => GB(54113))), {
              pool: YB
            } = OB(BB);
            return (BB, OB) => YB.build(BB, OB)
          },
          fetchAnimations: async () => jB(await (0, YB.I)(tB())),
          playerFile: async () => (await (0, fB.m)()).PLAYER_FILE,
          onAnimationsFailed: (BB, OB) => {
            yB("previewAnimations", tB(), BB, OB)
          },
          provideBuiltInAnimationPack: BB => {
            zB().provide(BB)
          },
          openExtras: mB.G,
          files: BB,
          images: (0, KB.l)((0, SB.q)(BB.url), (() => KB.g.current)),
          pack: KB.g,
          game: uB.b,
          fetchModel: BB => (0, fB.h)(BB),
          createCanvas: () => document.createElement("canvas"),
          dpr: () => window.devicePixelRatio,
          now: () => performance.now(),
          requestFrame: BB => requestAnimationFrame(BB),
          cancelFrame: BB => {
            cancelAnimationFrame(BB)
          },
          onRenderFailed: BO,
          onFatal: (BB, OB) => {
            console.error(`${cB} the previews stopped: renderer error ${BB} (detail ${OB})`)
          },
          onDeviceLost: () => {
            (0, mB.I)() === iB.e.webgpu && ((0, VB.d)((0, pB.S)() ? (0, AB.W)((0, pB.A)()) : null), NB.C.lost())
          },
          onDrew: () => {
            NB.C.drew(), (0, nB.m)()
          },
          frameDue: nB.p
        }
      }()), QO
    }
    var jO = GB(633),
      yO = GB(39331),
      JO = GB(3708);
    const MO = {
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
    var PO = GB(39860),
      zO = GB(39836),
      lO = GB(45733);
    class pO {
      constructor() {
        this.pet = null, this.aura = null, this.companions = {
          pet: null,
          aura: null
        }
      }
      of(BB, OB) {
        const GB = void 0 === BB ? null : (0, zO.f)(BB),
          YB = void 0 === OB ? null : (0, zO.d)(OB);
        return GB === this.pet && YB === this.aura || (this.pet = GB, this.aura = YB, this.companions = {
          pet: GB && qO(GB),
          aura: YB && ZO(YB)
        }), this.companions
      }
    }

    function qO(BB) {
      var OB;
      const GB = lO.COSMETIC_MODEL_KEYS.get(BB.model);
      if (void 0 === GB) return console.warn(`[bloxd-previews] pet model ${BB.model} isn't a Player attachment model`), null;
      const {
        scale: YB,
        followOffset: DB,
        yawOffset: QB,
        bobAmplitude: oB,
        bobHz: jB,
        clips: yB
      } = BB;
      return {
        model: GB,
        scale: YB,
        offset: DB,
        yawOffset: QB,
        bobAmplitude: oB,
        bobHz: jB,
        flyClip: null !== (OB = null === yB || void 0 === yB ? void 0 : yB.fly) && void 0 !== OB ? OB : null
      }
    }

    function ZO(BB) {
      const {
        opts: OB,
        half: GB
      } = (0, PO.c)(BB);
      return {
        opts: JSON.stringify(OB),
        offset: BB.offset,
        half: GB
      }
    }
    const NO = "[bloxd-previews]",
      RO = new Uint32Array(5);

    function WO(BB) {
      return jO.j.indexOf(BB)
    }
    const AO = new WeakSet;

    function VO(BB) {
      const OB = (0, yO.f)(BB),
        GB = null === OB ? -1 : SO(OB);
      return -1 !== GB ? GB : (AO.has(BB) || (AO.add(BB), console.warn(`${NO} an animation the previews' table lacks: the mob idles instead`)), -1)
    }

    function SO(BB) {
      var OB;
      return null !== (OB = MO[BB]) && void 0 !== OB ? OB : -1
    }

    function nO(BB, OB) {
      const {
        canvas: GB
      } = OB;
      GB.style.width = "100%", GB.style.height = "100%", GB.style.display = "block", BB.appendChild(GB)
    }

    function UO(BB) {
      const OB = BB.getBoundingClientRect();
      return [OB.width, OB.height]
    }
    class fO {
      constructor(BB, OB) {
        this.preview = BB, this.showView = OB
      }
      show(BB) {
        this.showView(this.preview, BB)
      }
      resize(BB, OB) {
        this.preview.resize(BB, OB)
      }
      close() {
        this.preview.close()
      }
    }
    class kO {
      constructor(BB) {
        this.preview = BB, this.ready = void 0, this.dev = void 0, this.built = !1, this.cosmetics = {}, this.emote = null, this.tunings = new pO, this.companions = null, this.detachControls = void 0, this.detachControls = function(BB) {
          const {
            canvas: OB
          } = BB;
          let GB = null;
          const YB = BB => {
              var YB;
              GB = {
                pointer: BB.pointerId,
                x: BB.clientX,
                y: BB.clientY
              }, null === (YB = OB.setPointerCapture) || void 0 === YB || YB.call(OB, BB.pointerId)
            },
            DB = OB => {
              var YB;
              const DB = BB.orbit;
              if ((null === (YB = GB) || void 0 === YB ? void 0 : YB.pointer) !== OB.pointerId || null === DB) return;
              const QB = OB.clientX - GB.x,
                oB = OB.clientY - GB.y;
              GB = {
                ...GB,
                x: OB.clientX,
                y: OB.clientY
              }, BB.setOrbit({
                alpha: DB.alpha - .01 * QB,
                beta: Math.min(Math.PI - .01, Math.max(.01, DB.beta - .01 * oB)),
                radius: DB.radius
              })
            },
            QB = BB => {
              var OB;
              (null === (OB = GB) || void 0 === OB ? void 0 : OB.pointer) === BB.pointerId && (GB = null)
            },
            oB = OB => {
              const GB = BB.orbit;
              if (null === GB) return;
              OB.preventDefault();
              const YB = OB.deltaY * (OB.deltaMode === WheelEvent.DOM_DELTA_LINE ? 40 : OB.deltaMode === WheelEvent.DOM_DELTA_PAGE ? 800 : 1),
                DB = Math.min(100, Math.max(5, GB.radius + .08 * YB));
              BB.setOrbit({
                ...GB,
                radius: DB
              })
            };
          return OB.style.touchAction = "none", OB.addEventListener("pointerdown", YB), OB.addEventListener("pointermove", DB), OB.addEventListener("pointerup", QB), OB.addEventListener("pointercancel", QB), OB.addEventListener("wheel", oB, {
            passive: !1
          }), () => {
            OB.removeEventListener("pointerdown", YB), OB.removeEventListener("pointermove", DB), OB.removeEventListener("pointerup", QB), OB.removeEventListener("pointercancel", QB), OB.removeEventListener("wheel", oB)
          }
        }(BB), this.dev = {
          canvas: () => BB.canvas,
          isolateHead: () => {
            console.warn(`${NO} isolateHead: noa's character preview only`)
          },
          isolatePet: () => {
            console.warn(`${NO} isolatePet: noa's character preview only`)
          }
        }, this.apply(), this.ready = BB.untilSettled().then((() => {
          if (BB.isStopped) throw new Error(`${NO} the previews stopped before the character drew`);
          this.built = !0
        }))
      }
      isReady() {
        return this.built && !this.preview.isClosed
      }
      setCosmetic(BB, OB) {
        this.cosmetics[BB] = OB, this.apply()
      }
      playEmote(BB) {
        null === BB || BB !== this.emote ? (this.emote = BB, this.apply()) : this.preview.replay()
      }
      untilDrawn(BB) {
        return this.preview.untilSettled()
      }
      setOrbit(BB) {
        let {
          yaw: OB,
          pitch: GB,
          radius: YB
        } = BB;
        const DB = this.preview.orbit;
        null !== DB && this.preview.setOrbit({
          alpha: OB,
          beta: GB,
          radius: null !== YB && void 0 !== YB ? YB : DB.radius
        })
      }
      resetCamera() {}
      resize(BB, OB) {
        this.preview.resize(BB, OB)
      }
      close() {
        this.detachControls(), this.preview.close()
      }
      apply() {
        var BB;
        this.preview.setPlayer(JSON.stringify(this.cosmetics), RO, null === (BB = this.emote) ? -1 : SO(BB));
        const OB = this.tunings.of(this.cosmetics.pet, this.cosmetics.aura);
        OB !== this.companions && (this.companions = OB, this.preview.setCompanions(OB))
      }
    }

    function dO(BB, OB) {
      let {
        mobType: GB,
        variation: YB,
        animation: DB
      } = OB;
      BB.setMob(WO(GB), null !== YB && void 0 !== YB ? YB : "", 1, VO(DB))
    }

    function KO(BB, OB) {
      let {
        mobType: GB,
        variation: YB,
        metaInfo: DB,
        tamed: QB
      } = OB;
      BB.setPet(WO(GB), YB, DB, QB)
    }
    const uO = {
      aimed: .533 / 1.15 * 1.1,
      ready: .16 / .85 * 1.1
    };
    class mO {
      constructor(BB, OB, GB, YB) {
        this.preview = null, this.closed = !1, this.figure = null, this.shown = !1, this.order = "", this.span = {
          left: 0,
          width: 0
        }, this.lineup = [0, 0], this.given = null, this.loaded = !1, BB(GB.width, YB[1], YB).then((BB => {
          if (this.closed) return void BB.close();
          const {
            style: GB
          } = BB.canvas;
          GB.position = "absolute", GB.top = "0", GB.visibility = "hidden", nO(OB, BB), this.preview = BB, this.apply()
        })).catch((BB => {
          console.error(`${NO} couldn't open a lineup figure`, BB)
        }))
      }
      update(BB, OB, GB, YB, DB) {
        this.figure = BB, this.shown = OB, this.order = GB, this.span = YB, this.lineup = DB, this.apply()
      }
      close() {
        var BB;
        this.closed = !0, null === (BB = this.preview) || void 0 === BB || BB.close(), this.preview = null
      }
      apply() {
        const {
          preview: BB,
          figure: OB,
          lineup: GB
        } = this;
        if (null === BB || null === OB) return;
        if (this.given !== OB) {
          var YB;
          this.given = OB, this.loaded = !1;
          const GB = null === OB.cW ? 0 : null !== (YB = (0, JO.c)(OB.cW)) && void 0 !== YB ? YB : 0;
          BB.setFigure(function(BB) {
            return JSON.stringify(Object.fromEntries(BB.cosmetics))
          }(OB), GB, VO(OB.animation), OB.size), BB.untilSettled().then((() => {
            this.given === OB && (this.loaded = !0, this.apply())
          }))
        }
        const {
          left: DB,
          width: QB
        } = this.span;
        BB.resize(QB, GB[1], GB);
        const {
          style: oB
        } = BB.canvas;
        oB.left = `${DB}px`, oB.width = `${QB}px`, oB.zIndex = this.order, oB.visibility = this.shown && this.loaded ? "visible" : "hidden"
      }
    }
    class IO {
      constructor(BB, OB) {
        this.open = OB, this.layer = void 0, this.figures = [], this.view = {
          figures: [],
          shown: []
        }, this.size = void 0, this.size = UO(BB), this.layer = document.createElement("div");
        const {
          style: GB
        } = this.layer;
        GB.position = "relative", GB.isolation = "isolate", GB.overflow = "hidden", GB.width = "100%", GB.height = "100%", GB.pointerEvents = "none", BB.appendChild(this.layer)
      }
      show(BB) {
        this.view = BB, this.place()
      }
      resize(BB, OB) {
        this.size = [BB, OB], this.place()
      }
      close() {
        for (const BB of this.figures) BB.close();
        this.figures = [], this.layer.remove()
      }
      place() {
        const {
          figures: BB,
          shown: OB
        } = this.view;
        for (const YB of this.figures.splice(BB.length)) YB.close();
        const {
          size: GB
        } = this;
        BB.forEach(((YB, DB) => {
          var QB;
          const oB = function(BB, OB, GB, YB) {
            let [DB, QB] = YB;
            const oB = (BB + .5) * DB / OB,
              jB = Math.min(Math.max(DB / OB, 2 * GB * QB), 2 * Math.max(oB, DB - oB));
            return {
              left: oB - jB / 2,
              width: jB
            }
          }(DB, BB.length, function(BB) {
            let {
              animation: OB,
              size: GB
            } = BB;
            const {
              aimed: YB,
              ready: DB
            } = uO;
            return (VO(OB) === MO.gunAimed ? YB : DB) * GB
          }(YB), GB);
          this.figures[DB] ??= new mO(this.open, this.layer, oB, GB), this.figures[DB].update(YB, null !== (QB = OB[DB]) && void 0 !== QB && QB, function(BB, OB) {
            return String(Math.round(1e3 * BB) + OB)
          }(YB.size, DB), oB, GB)
        }))
      }
    }
    const FO = {
      player: aB,
      store: eB
    };
    class iO {
      constructor(BB) {
        this.page = BB
      }
      async openMob(BB) {
        return new fO(await this.open(BB, hB), dO)
      }
      async openPet(BB) {
        return new fO(await this.open(BB, hB), KO)
      }
      openMobLineup(BB) {
        return new IO(BB, ((BB, OB, GB) => this.page.openPreview(hB, BB, OB, GB)))
      }
      async openCharacter(BB, OB) {
        return new kO(await this.open(BB, FO[OB]))
      }
      async open(BB, OB) {
        const [GB, YB] = UO(BB), DB = await this.page.openPreview(OB, GB, YB);
        return nO(BB, DB), DB
      }
    }
  },
  36945: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => ZB,
      f: () => EB,
      h: () => uB,
      i: () => FB
    });
    var YB = GB(36977),
      DB = GB(36948),
      QB = GB(36954),
      oB = GB(36961);

    function jB(BB, OB, GB) {
      const YB = "object" === typeof BB && null !== BB ? BB : {},
        DB = function(BB, OB, GB) {
          if (!Array.isArray(BB) || 0 === BB.length) return [];
          const YB = [{
            width: 0,
            height: 0,
            y: 0,
            items: []
          }];
          for (const jB of (0, oB.h)(BB, oB.d.DEFAULT_FONT_SIZE, GB)) {
            if ("text" !== jB.kind) {
              YB[YB.length - 1].items.push({
                content: jB,
                chars: 1,
                size: {
                  x: 0,
                  width: 0
                }
              });
              continue
            }
            if (0 === jB.text.length) continue;
            const BB = YB[YB.length - 1].items.reduce(((BB, OB) => BB + ("text" === OB.content.kind ? (0, QB.c)(OB.content.text) : OB.chars)), 0);
            (0, QB.d)(jB.text, BB).forEach(((BB, OB) => {
              OB > 0 && YB.push({
                width: 0,
                height: 0,
                y: 0,
                items: []
              }), BB.length > 0 && YB[YB.length - 1].items.push({
                content: {
                  ...jB,
                  text: BB
                },
                chars: BB.length,
                size: {
                  x: 0,
                  width: 0
                }
              })
            }))
          }
          let DB = oB.d.VERTICAL_PADDING / 2;
          for (const QB of YB) {
            if (0 === QB.items.length) continue;
            const {
              width: BB,
              height: YB,
              sizes: jB
            } = (0, oB.f)(QB.items.map((BB => BB.content)), OB, GB);
            QB.items.forEach(((BB, OB) => {
              BB.size = jB[OB]
            })), QB.width = BB, QB.height = YB, QB.y = DB, DB += YB + oB.d.LINE_SPACING
          }
          return YB
        }(YB.content, OB, GB);
      let jB = 0,
        yB = oB.d.VERTICAL_PADDING,
        JB = 0;
      for (const QB of DB) {
        jB = Math.max(jB, QB.width + 2 * oB.d.HORIZONTAL_PADDING), yB += QB.height + oB.d.LINE_SPACING;
        for (const BB of QB.items) JB += BB.chars
      }
      const MB = "string" === typeof YB.backgroundColor ? YB.backgroundColor : "#22283b";
      return {
        width: jB,
        height: yB,
        chars: JB,
        draw: (BB, OB) => {
          const YB = [];
          if (BB.fillStyle = MB, BB.fillRect(0, 0, jB, yB), null === OB)
            for (const QB of DB) QB.items.length > 0 && (0, oB.p)(QB.items.map((BB => BB.content)), 0, QB.y, QB.height, BB, GB, YB);
          else {
            let QB = 0;
            for (const jB of DB)
              for (const DB of jB.items) {
                if (QB >= OB) break;
                const yB = "text" === DB.content.kind ? {
                  ...DB.content,
                  text: DB.content.text.substring(0, OB - QB)
                } : DB.content;
                (0, oB.m)(yB, DB.size.x, jB.y, jB.height, BB, GB, YB, DB.size.width), QB += DB.chars
              }
          }(0, oB.l)(YB, BB)
        }
      }
    }
    var yB = GB(36963),
      JB = GB(36972);
    const MB = 256,
      PB = 1024,
      zB = {
        width: 1,
        height: 7 / 8
      };
    var lB = GB(36985);
    const pB = {
      leaderboard: ""
    };
    var qB = GB(36991);
    const ZB = {
        Nametag: 1,
        MultilineText: 2,
        Board: 3,
        Leaderboard: 4
      },
      NB = 2048,
      RB = 256,
      WB = 10,
      AB = 4,
      VB = 65536,
      SB = new TextDecoder;
    let nB = qB.s,
      UB = -1;
    const fB = new Map,
      kB = new Map;
    let dB = 0;
    const KB = new TextEncoder;

    function uB(BB, OB) {
      const GB = KB.encode(JSON.stringify(OB)),
        YB = new Uint8Array(GB.length + 1);
      return YB[0] = BB, YB.set(GB, 1), YB
    }
    const mB = {
        name: "Ag",
        info: null,
        colour: "default",
        ranks: [],
        effects: [],
        health: .5,
        IM: null,
        hideNameSeed: null
      },
      IB = [uB(ZB.Nametag, mB), uB(ZB.Nametag, {
        ...mB,
        info: {
          content: [{
            str: "Ag"
          }],
          subtitle: ["Ag"]
        }
      }), uB(ZB.MultilineText, {
        box: {
          content: ["Ag"]
        },
        shown: null
      }), ...YB.b.map(((BB, OB) => uB(ZB.Board, {
        shared: {
          text: "Ag",
          textSize: OB
        },
        w: 0,
        h: 0
      })))];

    function FB(BB) {
      qB.k.load().then((() => {
        if (BB()) return;
        const OB = (0, DB.f)(1, 1, {
          willReadFrequently: !0
        });
        var GB;
        OB && (GB = OB.canvas, IB.map((BB => EB(BB, GB))))
      }))
    }
    let iB = qB.y;

    function LB() {
      fB.clear(), kB.clear()
    }

    function gB(BB, OB) {
      const GB = BB.get(OB);
      return void 0 !== GB && (BB.delete(OB), BB.set(OB, GB)), GB
    }

    function rB(BB, OB, GB) {
      BB.set(OB, GB), BB.size > RB && BB.delete(BB.keys().next().value)
    }

    function XB(BB, OB, GB) {
      if (BB === ZB.Nametag) {
        let BB = gB(fB, OB);
        return void 0 === BB && (BB = (0, yB.d)(JSON.parse(OB), GB, nB), rB(fB, OB, BB)), BB
      }
      if (BB === ZB.MultilineText) {
        var DB;
        const BB = JSON.parse(OB),
          YB = JSON.stringify(null !== (DB = BB.box) && void 0 !== DB ? DB : null),
          QB = "number" === typeof BB.shown ? BB.shown : null;
        let oB = gB(kB, YB);
        void 0 === oB && (oB = jB(BB.box, GB, nB), rB(kB, YB, oB));
        const yB = null === QB ? null : Math.min(Math.max(0, Math.floor(QB)), oB.chars),
          JB = oB;
        return {
          width: JB.width,
          height: JB.height,
          draw: BB => {
            JB.draw(BB, yB)
          }
        }
      }
      if (BB === ZB.Board) return function(BB, OB) {
        var GB;
        if (!OB.canSeePlayerWrittenText) return null;
        const {
          shared: DB,
          w: QB = 0,
          h: oB = 0
        } = BB, jB = !QB;
        let yB;
        if (jB) {
          var lB, pB;
          yB = null !== (lB = null === DB || void 0 === DB || null === (pB = DB.text) || void 0 === pB ? void 0 : pB.toString()) && void 0 !== lB ? lB : ""
        } else {
          if ("string" !== typeof(null === DB || void 0 === DB ? void 0 : DB.text)) return null;
          yB = DB.text
        }
        if ("" === yB.trim()) return null;
        const qB = null !== (GB = null === DB || void 0 === DB ? void 0 : DB.textSize) && void 0 !== GB ? GB : 0,
          ZB = YB.b[qB].ingameFontSize;
        let NB = zB,
          RB = MB;
        jB || (yB = (0, YB.m)(yB, qB, QB, oB), NB = (0, YB.t)(QB, oB), RB = Math.min(MB, PB / Math.max(NB.width, NB.height)));
        const WB = Math.round(RB * NB.width),
          AB = Math.round(RB * NB.height),
          VB = RB / MB;
        return {
          width: WB,
          height: AB,
          draw: BB => {
            JB.c.fontSize = ZB * VB, JB.c.fontWeight = "bold", JB.c.font = "'Jetbrains Mono', monospace", JB.c.drawText(BB, yB, 0, (-10 - 7 * qB) * VB, WB, AB)
          }
        }
      }(JSON.parse(OB), nB);
      if (BB === ZB.Leaderboard) return function(BB, OB, GB) {
        var YB;
        const DB = (0, lB.i)(BB.opts, pB),
          QB = (0, lB.f)(DB, GB),
          oB = {
            top: (0, lB.h)(DB, (0, lB.l)(BB.top)),
            around: null !== (YB = BB.around) && void 0 !== YB ? YB : null,
            showPlayerText: OB.canSeePlayerWrittenText,
            localPlayerDbId: OB.localPlayerDbId
          };
        return {
          width: QB.pixelWidth,
          height: QB.pixelHeight,
          draw: BB => {
            const {
              a: OB,
              d: GB
            } = BB.getTransform();
            (0, lB.d)(BB, Math.round(QB.pixelWidth * OB), Math.round(QB.pixelHeight * GB), QB, DB, oB)
          }
        }
      }(JSON.parse(OB), nB, NB);
      throw new Error(`unknown text plane kind ${BB}`)
    }
    const wB = 2 ** Math.floor(Math.log2(NB));

    function EB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      try {
        if (BB.length < 2) return [0, 0];
        const QB = (0, DB.e)(OB);
        if (!QB) return [0, 0];
        const oB = iB();
        oB !== UB && (UB = oB, LB());
        const [jB] = BB, yB = SB.decode(BB.subarray(1));
        let JB;
        jB !== ZB.Board && jB !== ZB.Leaderboard || !nB.canSeePlayerWrittenText || nB.glyphsShown(yB), QB.save();
        try {
          JB = XB(jB, yB, QB)
        } finally {
          QB.restore()
        }
        if (null === JB || !(JB.width > 0 && JB.height > 0)) return [0, 0];
        const MB = Math.min(1, NB / JB.width, NB / JB.height),
          PB = BB => YB ? function(BB) {
            const OB = 2 ** Math.ceil(Math.log2(BB));
            return Math.min(wB, OB - BB > BB - OB / 2 ? OB / 2 : OB)
          }(BB) : Math.min(NB, Math.ceil(BB * MB)),
          [zB, lB] = [PB(JB.width), PB(JB.height)];
        ! function(BB, OB, GB, YB, DB) {
          const QB = Math.max(BB.width, GB),
            oB = Math.max(BB.height, YB),
            jB = DB || QB * oB > Math.max(AB * GB * YB, VB),
            [yB, JB] = jB ? [GB, YB] : [QB, oB];
          yB === BB.width && JB === BB.height ? OB.clearRect(0, 0, yB, JB) : (BB.width = yB, BB.height = JB)
        }(OB, QB, zB, lB, GB), QB.save();
        try {
          const [BB, OB] = YB ? [zB / JB.width, lB / JB.height] : [MB, MB];
          1 === BB && 1 === OB || QB.scale(BB, OB), JB.draw(QB)
        } finally {
          QB.restore()
        }
        return [zB, lB]
      } catch (QB) {
        ! function(BB, OB) {
          dB < WB && (dB++, console.warn(`[bloxd-wasm-client] ${BB}`, OB))
        }("could not raster a text plane", QB);
        try {
          OB.width = 1
        } catch {}
        return [0, 0]
      }
    }
  },
  54047: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/builtInAnimations.anim.1876a593a8239b631bf1.gz"
  },
  54055: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/previewAnimations.dat.a9c06de838594e8096c6.gz"
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);