export const id = 71;
export const ids = [71];
export const modules = {
  39973: (ee, ie, He) => {
    function ye(ee) {
      return void 0 === ee ? void 0 : [ee[0], ee[1], ee[2]]
    }

    function be(ee) {
      const ie = ee.particles;
      return {
        opts: {
          texture: ie.texture,
          bk: ie.bk,
          minLifeTime: ie.minLifeTime,
          maxLifeTime: ie.maxLifeTime,
          minSize: ie.minSize,
          maxSize: ie.maxSize,
          minEmitPower: ie.minEmitPower,
          maxEmitPower: ie.maxEmitPower,
          emitRate: ie.emitRate,
          gravity: ye(ie.gravity),
          dir1: ye(ie.dir1),
          dir2: ye(ie.dir2),
          colorGradients: ie.colorGradients,
          blendMode: ie.blendMode
        },
        half: [ie.width / 2, ie.height / 2, ie.depth / 2]
      }
    }
    He.d(ie, {
      d: () => be
    })
  },
  39925: (ee, ie, He) => {
    He.d(ie, {
      e: () => Me,
      i: () => Je,
      m: () => Fe,
      o: () => Ke
    });
    var ye = He(198);
    const be = JSON.parse('{"aura_snowfall":{"offset":[0,2.6,0],"ownInFirstPerson":true,"particles":{"blendMode":1,"capacity":64,"colorGradients":[{"minColor":[255,255,255,0.9],"timeFraction":0},{"minColor":[255,255,255,0],"timeFraction":1}],"depth":3,"dir1":[-0.2,-1,-0.2],"dir2":[0.2,-1,0.2],"emitRate":12,"gravity":[0,-1.5,0],"height":0.2,"maxEmitPower":0.6,"maxLifeTime":2.5,"maxSize":0.15,"minEmitPower":0.3,"minLifeTime":1.5,"minSize":0.08,"texture":"snowflake","width":3}}}'),
      Me = "PetRoot";
    let Ke = JSON.parse('{"pet_reindeer":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0},"pet_reindeer2":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0}}'),
      Ue = be;
    new Map, new Map;

    function Fe(ee) {
      var ie;
      return null !== (ie = (0, ye.b)(Ke, ee)) && void 0 !== ie ? ie : null
    }

    function Je(ee) {
      var ie;
      return null !== (ie = (0, ye.b)(Ue, ee)) && void 0 !== ie ? ie : null
    }
  },
  39440: (ee, ie, He) => {
    He.d(ie, {
      c: () => be,
      f: () => Me
    });
    const ye = new WeakMap;

    function be(ee, ie) {
      return ye.set(ee, ie), ee
    }

    function Me(ee) {
      var ie;
      return null !== (ie = ye.get(ee)) && void 0 !== ie ? ie : null
    }
  },
  37035: (ee, ie, He) => {
    He.d(ie, {
      c: () => Me
    });
    const ye = 4e5,
      be = 2;

    function Me(ee, ie, He) {
      let [Me, Ke] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [ee, ie], Ue = Math.min(Number.isFinite(He) && He > 0 ? He : 1, be);
      const Fe = Math.max(0, Me, ee) * Math.max(0, Ke, ie) * Ue * Ue;
      return Fe > ye && (Ue *= Math.sqrt(ye / Fe)), [Math.max(1, Math.floor(Math.max(0, ee) * Ue)), Math.max(1, Math.floor(Math.max(0, ie) * Ue))]
    }
  },
  54244: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      WasmPreviewHost: () => ci,
      pageBuiltInAnimationPack: () => ke,
      pagePreviews: () => Ki,
      previewModule: () => re
    });
    var ye = He(3101),
      be = He(618);
    const Me = "[bloxd-wasm-client]";

    function Ke(ee) {
      const ie = {
        wasm: "unknown",
        client: String(be.b)
      };
      try {
        var He;
        ie.wasm = null !== (He = null === ee || void 0 === ee ? void 0 : ee.ik()) && void 0 !== He ? He : ie.wasm
      } catch {}
      return ie
    }
    async function Ue(ee) {
      if (ee.length < 2 || 31 !== ee[0] || 139 !== ee[1]) return ee;
      if ("undefined" === typeof DecompressionStream) {
        const {
          ungzip: ie
        } = await Promise.resolve().then((() => He(3052)));
        return ie(ee)
      }
      const ie = new Blob([ee]).stream().pipeThrough(new DecompressionStream("gzip"));
      return new Uint8Array(await new Response(ie).arrayBuffer())
    }

    function Fe(ee, ie, ye, be) {
      Promise.resolve().then((() => He(41864))).then((He => {
        let {
          reportDataLoadFailure: Me
        } = He;
        Me(ee, ie, ye, be)
      }), (ie => {
        console.warn(`${Me} ${ee} didn't load, and the report couldn't be sent`, ye.error, ie)
      }))
    }
    const Je = [3e4, 12e4, 3e5];
    class oe {
      constructor(ee) {
        this.deps = ee, this.loading = null, this.reported = !1, this.retries = 0, this.resolveSet = () => {}, this.set = new Promise((ee => {
          this.resolveSet = ee
        }))
      }
      provide(ee) {
        return this.loading ??= this.load(ee), this.loading
      }
      whenSet() {
        return this.set
      }
      async load(ee) {
        const ie = Ke(ee),
          He = await async function(ee, ie) {
            let He;
            try {
              He = await ee()
            } catch (ye) {
              return {
                stage: "fetch",
                error: ye
              }
            }
            try {
              return ie(He) ? null : {
                stage: "decode",
                error: null
              }
            } catch (ye) {
              return {
                stage: "decode",
                error: ye
              }
            }
          }((() => this.deps.fetch()), (ie => {
            const He = ee.KUe(ie);
            return He && this.resolveSet(ie), He
          }));
        if (null !== He) {
          if ("fetch" === He.stage) {
            this.loading = null;
            const ie = Je[this.retries++];
            void 0 !== ie && this.deps.later((() => {
              this.provide(ee)
            }), ie)
          }
          this.reported || (this.reported = !0, this.deps.onFailed(He, ie))
        }
      }
    }
    let Re = null;

    function ke() {
      return Re ??= new oe({
        fetch: async () => Ue(await (0, ye.F)(qe(), {
          priority: "low"
        })),
        onFailed: (ee, ie) => {
          Fe("builtInAnimations", qe(), ee, ie)
        },
        later: (ee, ie) => {
          setTimeout(ee, ie)
        }
      }), Re
    }

    function qe() {
      return He(54248)
    }
    var fe = He(3094),
      Te = He(1141),
      pe = He(330),
      Xe = He(325),
      ze = He(645),
      Be = He(5271),
      Ee = He(41827),
      ge = He(41846),
      Oe = He(42028),
      de = (He(41890), He(37028)),
      We = He(41920),
      te = He(41925),
      Ze = He(41933),
      we = He(41836),
      De = He(42048),
      Pe = He(42054),
      Ae = He(41823),
      Ye = He(42068),
      Ve = He(41952),
      ae = He(41948),
      ce = He(41981),
      xe = He(42039),
      Le = He(37043),
      Ce = He(36965),
      ve = He(4097),
      ue = He(37035);
    const me = "[bloxd-previews]",
      le = 0,
      Se = 1,
      ne = 2,
      je = 1,
      se = 2,
      Ie = 3,
      he = 0,
      Ne = 1,
      Ge = 2;

    function re(ee) {
      const ie = ee,
        He = (0, Ee.Q)(ee),
        ye = (0, Ee.o)(ee);
      return null !== He && null !== ye && "function" === typeof ie.yUe && "function" === typeof ie.bUe && "function" === typeof ie.MUe ? ie : null
    }

    function Qe() {
      return He(54255)
    }
    async function ei(ee, ie, ye) {
      var be;
      let Me = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      "lost" === ee && (0, Ae.q)();
      const Ue = await (0, Ae.N)();
      if (null === Ue || (0, Ee.p)(Ue) || (0, Ae.b)()) return;
      const Fe = "webgpu" === Ue.backend;
      if (!Fe && "lost" !== ee) return;
      const Je = Fe && (0, Xe.p)(Ue.adapter, null !== ye && void 0 !== ye ? ye : null, "lost" === ee, Me),
        oe = null !== (be = "lost" === ee ? (0, ge.k)((0, fe.Y)() ? (0, Ee.Q)((0, fe.F)()) : null) : void 0) && void 0 !== be ? be : ie,
        Re = Fe ? (0, Ee.Y)(ee, void 0, (0, ge.d)(oe)) : (0, ze.u)() ? null : ze.e;
      if (null === Re) {
        (0, Ae.m)();
        try {
          await async function(ee, ie, ye, be, Me) {
            let {
              restoreLost: Ue,
              adapterRemembered: Fe
            } = Me;
            const Je = (0, fe.Y)(),
              {
                flushCrashReports: oe,
                reportRenderReload: Re
              } = await Promise.resolve().then((() => He(41864)));
            Re(ee.backend, be, Ke(Je ? (0, fe.F)() : null), {
              from: "home",
              cause: ie,
              restoreLost: Ue,
              adapterRemembered: Fe,
              ...ii(ee, ie, ye)
            }), await oe(Ve.c)
          }(Ue, ee, oe, null !== ye && void 0 !== ye ? ye : "start_failed" === ee ? 0 : 1, {
            restoreLost: Me,
            adapterRemembered: Je
          })
        } catch (qe) {
          console.warn(`${me} ${Ue.backend} failed at home (${ee}), and its report couldn't be sent`, qe)
        }(0, Ve.j)()
      } else {
        var ke;
        const ie = ii(Ue, ee, oe),
          ye = `${Fe?"WebGPU":"WebGL"} failed at home (${ee}${void 0===ie.error?"":`: ${ie.error instanceof Error?ie.error.message:(0,Ce.n)(ie.error)}`}) and ${Re}`;
        console.warn(`${me} ${ye}: the previews stop`, null !== (ke = ie.error) && void 0 !== ke ? ke : ""), (0, Ae.n)({
          why: ye,
          webgpu: Fe
        });
        try {
          const {
            countRenderLost: ye
          } = await Promise.resolve().then((() => He(41864)));
          ye(ee, ie.error, ie.context)
        } catch (Te) {
          console.warn(`${me} ${Ue.backend} failed at home (${ee}), and its count couldn't be sent`, Te)
        }
      }
    }

    function ii(ee, ie, He) {
      let {
        adapter: ye
      } = ee;
      return {
        error: He,
        context: {
          adapter: ye,
          boundAtMs: "start_failed" === ie ? null : (0, Ae.H)(),
          indirectHangs: (0, Ae.u)(),
          restoresSkipped: (0, Ae.L)()
        }
      }
    }
    async function Hi() {
      if (!(0, fe.Y)()) {
        const ee = await (0, Ae.N)();
        if (null === ee || (0, Ee.p)(ee)) return null;
        if (await (0, Ye.c)(await ee.load()), !(0, fe.Y)()) return null
      }
      return re((0, fe.F)())
    }
    class yi {
      constructor(ee, ie, He, ye, be, Me) {
        this.page = ee, this.host = ie, this.id = He, this.canvas = ye, this.size = be, this.models = void 0, this.images = void 0, this.write = void 0, this.outcomes = [], this.closed = !1, this.quiet = 0, this.settled = [];
        const Ke = {
            ...Me.images,
            glbUrl: ee => {
              var ie;
              return null !== (ie = this.models.drawnUrl(ee)) && void 0 !== ie ? ie : Me.images.glbUrl(ee)
            }
          },
          Ue = ie => ee.modelFile(ie);
        this.images = new Oe.f(Ke, (ee => {
          console.warn(`${me} image ${ee.key.kind}:${ee.key.index}:${ee.key.word} failed`, ee.error)
        }), {
          fetchFile: Ue,
          fetchImage: ie => ee.imageFile(ie)
        }), ee.startModels(), this.models = new We.f(Me.files, ((ie, He) => ee.buildModel(ie, He)), (ee => {
          console.warn(`${me} model file ${ee.file} (${ee.url}) failed`, ee.error)
        }), {
          fetchFile: Ue,
          onWritten: (ee, ie) => {
            this.images.glbWritten(ee, ie)
          },
          onTaken: (ee, ie) => {
            this.images.glbTaken(ee, ie)
          }
        }), this.write = (ee, ie, He) => {
          if (this.closed) return !0;
          if (ee === We.d) {
            const ee = new DataView(He.buffer, He.byteOffset, Ze.e),
              ye = ee.getUint32(0, !0),
              be = ee.getUint32(Ze.f, !0),
              Me = this.page.hostCall(Ge, (() => this.host.oFe(this.id, ye, ie, He.subarray(Ze.e))));
            return this.outcomes.push([be, Me]), !0
          }
          return ee === Oe.c && (this.page.hostCall(void 0, (() => {
            this.host.kFe(this.id, He)
          })), !0)
        }
      }
      get isClosed() {
        return this.closed
      }
      get isStopped() {
        return this.page.isStopped
      }
      resize(ee, ie, He) {
        if (this.closed) return;
        const [ye, be] = (0, ue.c)(ee, ie, this.page.dpr(), He);
        ye === this.size[0] && be === this.size[1] || (this.size = [ye, be], this.page.hostCall(void 0, (() => {
          this.host.resize(this.id, ye, be)
        })))
      }
      setMob(ee, ie, He, ye) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.zFe(this.id, ee, ie, He, ye))))
      }
      setPet(ee, ie, He, ye) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.EFe(this.id, ee, ie, He, ye))))
      }
      setPlayer(ee, ie, He) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.TFe(this.id, ee, ie, He))))
      }
      setCompanions(ee) {
        var ie;
        let {
          pet: He,
          aura: ye
        } = ee;
        if (this.closed) return;
        const be = null !== (ie = null === He || void 0 === He ? void 0 : He.model) && void 0 !== ie ? ie : -1,
          Me = new Float64Array(He ? [He.scale, ...He.offset, He.yawOffset, He.bobAmplitude, He.bobHz] : []),
          Ke = new Float64Array(ye ? [...ye.offset, ...ye.half] : []);
        this.page.hostCall(void 0, (() => {
          var ee, ie;
          this.host.fFe(this.id, be, Me, null !== (ee = null === He || void 0 === He ? void 0 : He.flyClip) && void 0 !== ee ? ee : "", null !== (ie = null === ye || void 0 === ye ? void 0 : ye.opts) && void 0 !== ie ? ie : "", Ke)
        }))
      }
      setFigure(ee, ie, He, ye) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.pFe(this.id, ee, ie, He, ye))))
      }
      replay() {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.replay(this.id))))
      }
      get orbit() {
        if (this.closed) return null;
        const ee = this.page.hostCall(null, (() => this.host.orbit(this.id)));
        return null === ee || ee.length < 3 ? null : {
          alpha: ee[0],
          beta: ee[1],
          radius: ee[2]
        }
      }
      setOrbit(ee) {
        let {
          alpha: ie,
          beta: He,
          radius: ye
        } = ee;
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.BFe(this.id, ie, He, ye)
        }))
      }
      untilSettled() {
        return this.closed || this.page.isStopped ? Promise.resolve() : (this.quiet = 0, new Promise((ee => {
          this.settled.push(ee)
        })))
      }
      packChanged() {
        this.quiet = 0, this.models.refresh(), (0, De.j)(this.images)
      }
      feed() {
        this.models.drain(this.write);
        for (const [ee, ie] of this.outcomes) {
          const He = ie === he ? [] : [ie === Ne ? ee : (ee | We.e) >>> 0];
          this.models.taken(ee, He)
        }
        this.outcomes.length = 0, this.images.drain(this.write)
      }
      collect(ee) {
        let ie = !1;
        if (ee) {
          const ee = this.host.dFe(this.id);
          for (const ie of ee) this.models.request(ie);
          const He = this.host.OFe(this.id);
          He.length > 0 && this.images.onEvent(He), ie = ee.length > 0 || He.length > 0
        }
        const He = this.page.modelsUnavailable ? 0 : this.models.asking + this.models.unanswered,
          ye = ie || He > 0 || this.images.waiting > 0 || this.images.inFlight > 0;
        this.quiet = ye ? 0 : this.quiet + 1, this.quiet >= 3 && this.resolveSettled()
      }
      close() {
        this.closed || (this.closed = !0, this.page.closePreview(this), this.resolveSettled())
      }
      abandon() {
        this.resolveSettled()
      }
      dispose(ee) {
        this.page.hostCall(void 0, (() => {
          const ie = this.host.close(this.id);
          ie.length > 0 && this.images.onEvent(ie), this.page.isTrapped || ee.MUe(this.id)
        })), this.images.dispose(), this.canvas.remove()
      }
      resolveSettled() {
        const ee = this.settled;
        this.settled = [];
        for (const ie of ee) ie()
      }
    }
    class bi {
      constructor(ee) {
        this.deps = ee, this.module = null, this.host = null, this.opening = null, this.pageCanvas = null, this.samples = 1, this.binding = null, this.sessionEnds = 0, this.lastEndReturned = !0, this.previews = new Map, this.nextId = 1, this.frameId = null, this.stopped = !1, this.loggedErrors = new Set, this.modelsListener = {
          onUnavailable: ee => {
            this.modelsFailed(ee)
          },
          onWorkerLost: ee => {
            this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${me} a model worker was lost: ${ee}`))
          },
          onModuleRetry: () => {}
        }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.Zf = {
          setShaderPack: (ee, ie, He, ye, be) => (this.shaderPackArgs = [ee, ie, He, ye, be], this.handOverShaderPack(), !0)
        }, this.frame = ee => {
          this.frameId = null;
          const ie = this.host;
          if (null !== ie && 0 !== this.previews.size && !this.settleIfTrapped() && !this.stopped)
            if (this.deps.frameDue(ee)) try {
              this.drawFrame(ie, ee)
            } catch (He) {
              if (!this.stopIfTrapped(He) && (this.stop(), (0, Ee.s)(He))) return void this.deps.onRenderFailed("frames_refused", He);
              console.warn(`${me} the previews stopped: their frame threw`, He)
            } else this.startFrames()
        }, ee.pack.onChange((() => {
          this.packChanged()
        })), ee.game.onGameChange((() => {
          this.tellInGame()
        }))
      }
      packChanged() {
        if (!this.stopped)
          for (const ee of this.previews.values()) ee.packChanged()
      }
      dpr() {
        return this.deps.dpr()
      }
      get sessionBound() {
        var ee, ie;
        return null !== (ee = null === (ie = this.host) || void 0 === ie ? void 0 : ie.attached()) && void 0 !== ee && ee
      }
      get open() {
        return this.previews.size
      }
      get frameCostMs() {
        return 0 === this.costs.length ? 0 : this.costs.reduce(((ee, ie) => ee + ie), 0) / this.costs.length
      }
      async bindSession(ee, ie, He) {
        const ye = this.binding,
          be = this.sessionEnds;
        try {
          const Me = this.hostOf(ee);
          if (!Me.RFe()) {
            const ie = (0, ce.f)().sampleCount,
              Ke = await He(ie);
            if (this.sessionEnds !== be) return this.keepRendererOfEndedSession(ee, Me, Ke, ie, ye), ie;
            if (!Me.hUe(Ke)) throw new Error("the page has a renderer already");
            (0, Ae.p)(performance.now()), this.samples = ie, (0, xe.h)((0, Ee.o)(ee))
          }
          if (!Me.attach(ie)) throw new Error("the page's renderer is lent to another session");
          return this.samples
        } finally {
          this.binding === ye && this.endBinding()
        }
      }
      keepRendererOfEndedSession(ee, ie, He, ye, be) {
        if (!this.lastEndReturned || null !== this.binding && this.binding !== be) try {
          He.free()
        } catch (Me) {
          console.warn(`${me} an ended session's renderer didn't free`, Me)
        } else ie.hUe(He) && ((0, Ae.p)(performance.now()), this.samples = ye, (0, xe.h)(this.registryOf(ee)))
      }
      async beginSession() {
        var ee;
        let ie = () => {};
        const He = new Promise((ee => {
          ie = ee
        }));
        this.binding = {
          done: He,
          release: ie
        }, await (null === (ee = this.opening) || void 0 === ee ? void 0 : ee.catch((() => null)));
        const ye = this.pageCanvas;
        return this.pageCanvas = null, ye
      }
      endSession(ee) {
        var ie, He;
        if (this.sessionEnds++, this.lastEndReturned = ee, this.endBinding(), ee) {
          try {
            var ye;
            null === (ye = this.host) || void 0 === ye || ye.detach()
          } catch (be) {
            return void console.warn(`${me} the session's core kept the page's renderer`, be)
          }!0 === (null === (ie = this.host) || void 0 === ie ? void 0 : ie.attached()) && console.warn(`${me} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (He = this.host) || void 0 === He ? void 0 : He.RFe()) && (0, xe.h)(this.registryOf(this.module))
        }
      }
      endBinding() {
        var ee;
        null === (ee = this.binding) || void 0 === ee || ee.release(), this.binding = null
      }
      async openPreview(ee, ie, He, ye) {
        const be = await this.renderingHost(),
          Me = this.module;
        if (null === be || null === Me) throw new Error("this page can't draw previews: it has no renderer build");
        if (this.animations ??= this.loadAnimations(be), this.deps.pack.wanted(), this.isStopped) throw new Error("the previews stopped");
        this.guarded((() => {
          this.deps.provideBuiltInAnimationPack(Me)
        }));
        const Ke = this.nextId++,
          Ue = this.deps.createCanvas(),
          [Fe, Je] = (0, ue.c)(ie, He, this.deps.dpr(), ye);
        Ue.width = Fe, Ue.height = Je;
        if (!this.guarded((() => (Me.bUe(Ke, Ue), be.open(Ke, Fe, Je, ee))))) throw this.hostCall(void 0, (() => {
          Me.MUe(Ke)
        })), new Error("the page's renderer is lent to a session that is running");
        this.restartModelsIfFailed();
        const oe = new yi(this, be, Ke, Ue, [Fe, Je], this.deps);
        return this.previews.set(Ke, oe), this.startFrames(), oe
      }
      prefetch() {
        if (this.prefetched || this.isStopped || (0, Ae.b)() || null !== (0, Ae.G)()) return;
        this.prefetched = !0;
        (null === this.module ? this.loadModule() : Promise.resolve(this.module)).then((ee => {
          null === ee || this.isStopped || (this.startModels(), this.fetchAnimationTable().catch((() => {})), this.prefetchPlayerFiles())
        }), (() => {}))
      }
      modelFile(ee) {
        return this.prefetchedOr(ee, this.deps.fetchModel)
      }
      imageFile(ee) {
        return this.prefetchedOr(ee, ye.F)
      }
      prefetchedOr(ee, ie) {
        const He = this.prefetchedFiles.get(ee);
        return void 0 === He ? ie(ee) : He.catch((() => ie(ee)))
      }
      async prefetchPlayerFiles() {
        const ee = this.deps.playerFile().then((ee => this.deps.files.url(ee))),
          ie = await Promise.all([ee, this.deps.images.lifeformAtlasUrl(De.d)]).catch((() => null));
        if (null === ie) return;
        const [He, ye] = ie, be = (ee, ie) => {
          if (null === ee) return;
          const He = ie(ee);
          this.prefetchedFiles.set(ee, He), He.catch((() => {
            this.prefetchedFiles.delete(ee)
          }))
        };
        be(He, (ee => this.modelFile(ee))), be(ye, (ee => this.imageFile(ee)))
      }
      loadModule() {
        return this.moduleLoad ??= this.deps.loadModule().then((ee => (null === ee && (this.moduleLoad = null), ee)), (ee => {
          throw this.moduleLoad = null, ee
        })), this.moduleLoad
      }
      fetchAnimationTable() {
        return this.animationTable ??= this.deps.fetchAnimations().catch((ee => {
          throw this.animationTable = null, ee
        })), this.animationTable
      }
      get modelsUnavailable() {
        return this.unavailable
      }
      startModels() {
        this.models ??= this.deps.startModels(this.modelsListener).catch((ee => (this.modelsFailed(ee), () => new Promise((() => {})))))
      }
      buildModel(ee, ie) {
        return this.startModels(), this.models.then((He => He(ee, ie))).then((ee => this.unavailable ? new Promise((() => {})) : ee))
      }
      restartModelsIfFailed() {
        this.unavailable && !this.modelsRestarted && 0 === this.previews.size && (this.modelsRestarted = !0, this.models = null, this.unavailable = !1, this.startModels())
      }
      modelsFailed(ee) {
        this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${me} the model workers didn't start: models won't draw in the previews`, ee))
      }
      called(ee) {
        return 0 !== ee && this.logError(ee, 0), ee
      }
      closePreview(ee) {
        this.previews.delete(ee.id), null !== this.module && ee.dispose(this.module), 0 === this.previews.size && null !== this.frameId && (this.deps.cancelFrame(this.frameId), this.frameId = null)
      }
      hostOf(ee) {
        if (null !== this.module && this.module !== ee) throw new Error("a second renderer module on one page");
        return this.module = ee, null === this.host && (this.host = this.guarded((() => new ee.yUe)), this.tellInGame(), this.handOverShaderPack()), this.host
      }
      tellInGame() {
        const {
          host: ee
        } = this;
        null !== ee && this.outsideCall("the game's start or end", (() => {
          ee.XFe(this.deps.game.inGame())
        }))
      }
      handOverShaderPack() {
        const {
          host: ee,
          shaderPackArgs: ie
        } = this;
        null !== ee && null !== ie && this.outsideCall("the shader pack's hand-over", (() => {
          ee.iMe(...ie) || console.warn(`${me} the host refused the shader pack: previews draw without it at home`)
        }))
      }
      outsideCall(ee, ie) {
        try {
          this.hostCall(void 0, ie)
        } catch (He) {
          this.stop(), console.warn(`${me} the previews stopped: ${ee} threw`, He)
        }
      }
      async loadAnimations(ee) {
        const ie = Ke(null),
          He = this.module;
        try {
          ie.wasm = null === He ? ie.wasm : this.hostCall(ie.wasm, (() => He.ik()))
        } catch {}
        let ye, be;
        try {
          ye = await this.fetchAnimationTable()
        } catch (Me) {
          return void this.deps.onAnimationsFailed({
            stage: "fetch",
            error: Me
          }, ie)
        }
        if (!this.settleIfTrapped()) {
          try {
            be = ee.qFe(ye)
          } catch (Me) {
            if (this.stopIfTrapped(Me)) return;
            return void this.deps.onAnimationsFailed({
              stage: "decode",
              error: Me
            }, ie)
          }
          be || this.deps.onAnimationsFailed({
            stage: "decode",
            error: null
          }, ie)
        }
      }
      async renderingHost() {
        if (null !== this.binding && await this.binding.done, this.settleIfTrapped()) return null;
        const ee = this.host;
        return null !== ee && this.guarded((() => ee.RFe())) ? ee : (this.opening ??= this.openAtHome().finally((() => {
          this.opening = null
        })), this.opening)
      }
      async openAtHome() {
        var ee;
        const ie = null !== (ee = this.module) && void 0 !== ee ? ee : await this.loadModule();
        if (null === ie) return null;
        const He = this.hostOf(ie),
          ye = () => this.guarded((() => He.RFe()));
        if (ye()) return He;
        if (null !== (0, Ae.G)() || (0, Ae.b)()) return null;
        const be = this.deps.createCanvas();
        be.width = 1, be.height = 1;
        const Me = await this.deps.openExtras();
        if (this.settleIfTrapped()) return null;
        const Ke = (0, ce.f)().sampleCount;
        let Ue;
        try {
          Ue = await (0, Ee.u)(ie, "previewRenderer", be, Ke, Le.f, Me)
        } catch (Fe) {
          throw Fe instanceof we.b ? this.stopForTrap(Fe) : (0, Ee.t)(Fe) && await this.deps.onRenderFailed("start_failed", Fe), Fe
        }
        return this.guarded((() => He.hUe(Ue))) ? ((0, Ae.p)(performance.now()), this.samples = Ke, this.pageCanvas = be, (0, xe.h)(this.registryOf(ie)), He) : ye() ? He : null
      }
      startFrames() {
        null !== this.frameId || this.isStopped || (this.frameId = this.deps.requestFrame(this.frame))
      }
      drawFrame(ee, ie) {
        for (const Ke of this.previews.values()) Ke.feed();
        if (this.stopped) return;
        const He = this.deps.now(),
          ye = ee.frame(ie);
        this.costs.push(this.deps.now() - He), this.costs.length > 120 && this.costs.shift();
        const be = 0 !== (256 & ye),
          Me = 255 & ye;
        for (const Ke of this.previews.values()) {
          if (this.stopped) return;
          Ke.collect(be)
        }
        if (!this.stopped) {
          if (0 !== (512 & ye) && this.deps.onDrew(), be) {
            const ie = ee.gFe();
            for (let ee = 0; ee + 1 < ie.length; ee += 2) ie[ee] === Be.E.RenderDeviceLost && this.deps.onDeviceLost(), this.logError(ie[ee], ie[ee + 1])
          }
          if (Me !== je) {
            if (Me === se) return this.stop(), void this.deps.onFatal(ee.UFe(), ee.FFe());
            if (Me === Ie) return this.stop(), void console.warn(`${me} the previews stopped: the page's renderer went with its session`);
            (0, pe.d)(ie), this.startFrames()
          } else {
            const ie = ee.JFe();
            this.stop();
            const He = ie[2] === Be.Pc.PIPELINE_FAILED ? "pipeline_failed" : "lost";
            this.deps.onRenderFailed(He, void 0, ie[1], ie[2] === Be.Pc.RESTORE_LOST)
          }
        }
      }
      get isStopped() {
        return this.stopped || this.isTrapped
      }
      get isTrapped() {
        return null !== this.module && ((0, we.h)(this.module) || "failed" === (0, fe.B)())
      }
      hostCall(ee, ie) {
        if (this.settleIfTrapped()) return ee;
        try {
          return ie()
        } catch (He) {
          if (this.stopIfTrapped(He)) return ee;
          throw He
        }
      }
      guarded(ee) {
        if (this.settleIfTrapped()) throw new Error("the previews stopped: their module trapped");
        try {
          return ee()
        } catch (ie) {
          throw this.stopIfTrapped(ie), ie
        }
      }
      registryOf(ee) {
        return {
          mbe: (ie, He) => {
            this.hostCall(void 0, (() => {
              ee.mbe(ie, He)
            }))
          },
          lbe: ie => {
            this.hostCall(void 0, (() => {
              ee.lbe(ie)
            }))
          }
        }
      }
      settleIfTrapped() {
        return !!this.isTrapped && (this.stopped || (this.stop(), (0, xe.h)(null)), !0)
      }
      stopIfTrapped(ee) {
        return !(null === this.module || !(0, we.j)(this.module, ee)) && (this.stopForTrap(ee), !0)
      }
      stopForTrap(ee) {
        this.stop(), (0, xe.h)(null), (0, ve.g)("previews", ee)
      }
      stop() {
        this.stopped = !0;
        for (const ee of this.previews.values()) ee.abandon()
      }
      logError(ee, ie) {
        const He = `${ee}:${ie}`;
        this.loggedErrors.has(He) || (this.loggedErrors.add(He), console.warn(`${me} error ${ee} (detail ${ie})`))
      }
    }
    let Mi = null;

    function Ki() {
      return Mi ??= new bi(function() {
        const ee = (0, te.t)(Te.clientSideServerUrls.staticUrl, {
          packUrl: ee => {
            var ie, He;
            return null !== (ie = null === (He = De.h.current) || void 0 === He ? void 0 : He.modelUrl(ee)) && void 0 !== ie ? ie : null
          }
        });
        return {
          loadModule: Hi,
          startModels: async ee => {
            const {
              pageModelPool: ie
            } = await He.e(50).then((() => He(54314))), {
              pool: ye
            } = ie(ee);
            return (ee, ie) => ye.build(ee, ie)
          },
          fetchAnimations: async () => Ue(await (0, ye.F)(Qe())),
          playerFile: async () => (await (0, te.r)()).PLAYER_FILE,
          onAnimationsFailed: (ee, ie) => {
            Fe("previewAnimations", Qe(), ee, ie)
          },
          provideBuiltInAnimationPack: ee => {
            ke().provide(ee)
          },
          openExtras: Ae.y,
          files: ee,
          images: (0, De.n)((0, Oe.j)(ee.url), (() => De.h.current)),
          pack: De.h,
          game: Pe.e,
          fetchModel: ee => (0, te.k)(ee),
          createCanvas: () => document.createElement("canvas"),
          dpr: () => window.devicePixelRatio,
          now: () => performance.now(),
          requestFrame: ee => requestAnimationFrame(ee),
          cancelFrame: ee => {
            cancelAnimationFrame(ee)
          },
          onRenderFailed: ei,
          onFatal: (ee, ie) => {
            console.error(`${me} the previews stopped: renderer error ${ee} (detail ${ie})`)
          },
          onDeviceLost: () => {
            (0, Ae.C)() === ae.e.webgpu && ((0, ge.e)((0, fe.Y)() ? (0, Ee.Q)((0, fe.F)()) : null), Xe.F.lost())
          },
          onDrew: () => {
            Xe.F.drew(), (0, de.o)()
          },
          frameDue: de.q
        }
      }()), Mi
    }
    var Ui = He(604),
      Fi = He(39440),
      Ji = He(3608);
    const oi = {
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
    var Ri = He(39973),
      ki = He(39925),
      qi = He(45796);
    class fi {
      constructor() {
        this.pet = null, this.aura = null, this.companions = {
          pet: null,
          aura: null
        }
      }
      of(ee, ie) {
        const He = void 0 === ee ? null : (0, ki.m)(ee),
          ye = void 0 === ie ? null : (0, ki.i)(ie);
        return He === this.pet && ye === this.aura || (this.pet = He, this.aura = ye, this.companions = {
          pet: He && Ti(He),
          aura: ye && Xi(ye)
        }), this.companions
      }
    }

    function Ti(ee) {
      var ie;
      const He = qi.COSMETIC_MODEL_KEYS.get(ee.model);
      if (void 0 === He) return console.warn(`[bloxd-previews] pet model ${ee.model} isn't a Player attachment model`), null;
      const {
        scale: ye,
        followOffset: be,
        yawOffset: Me,
        bobAmplitude: Ke,
        bobHz: Ue,
        clips: Fe
      } = ee;
      return {
        model: He,
        scale: ye,
        offset: be,
        yawOffset: Me,
        bobAmplitude: Ke,
        bobHz: Ue,
        flyClip: null !== (ie = null === Fe || void 0 === Fe ? void 0 : Fe.fly) && void 0 !== ie ? ie : null
      }
    }

    function Xi(ee) {
      const {
        opts: ie,
        half: He
      } = (0, Ri.d)(ee);
      return {
        opts: JSON.stringify(ie),
        offset: ee.offset,
        half: He
      }
    }
    const zi = "[bloxd-previews]",
      Bi = new Uint32Array(5);

    function Ei(ee) {
      return Ui.j.indexOf(ee)
    }
    const gi = new WeakSet;

    function Oi(ee) {
      const ie = (0, Fi.f)(ee),
        He = null === ie ? -1 : di(ie);
      return -1 !== He ? He : (gi.has(ee) || (gi.add(ee), console.warn(`${zi} an animation the previews' table lacks: the mob idles instead`)), -1)
    }

    function di(ee) {
      var ie;
      return null !== (ie = oi[ee]) && void 0 !== ie ? ie : -1
    }

    function Wi(ee, ie) {
      const {
        canvas: He
      } = ie;
      He.style.width = "100%", He.style.height = "100%", He.style.display = "block", ee.appendChild(He)
    }

    function ti(ee) {
      const ie = ee.getBoundingClientRect();
      return [ie.width, ie.height]
    }
    class Zi {
      constructor(ee, ie) {
        this.preview = ee, this.showView = ie
      }
      show(ee) {
        this.showView(this.preview, ee)
      }
      resize(ee, ie) {
        this.preview.resize(ee, ie)
      }
      close() {
        this.preview.close()
      }
    }
    class wi {
      constructor(ee) {
        this.preview = ee, this.ready = void 0, this.dev = void 0, this.built = !1, this.cosmetics = {}, this.emote = null, this.tunings = new fi, this.companions = null, this.detachControls = void 0, this.detachControls = function(ee) {
          const {
            canvas: ie
          } = ee;
          let He = null;
          const ye = ee => {
              var ye;
              He = {
                pointer: ee.pointerId,
                x: ee.clientX,
                y: ee.clientY
              }, null === (ye = ie.setPointerCapture) || void 0 === ye || ye.call(ie, ee.pointerId)
            },
            be = ie => {
              var ye;
              const be = ee.orbit;
              if ((null === (ye = He) || void 0 === ye ? void 0 : ye.pointer) !== ie.pointerId || null === be) return;
              const Me = ie.clientX - He.x,
                Ke = ie.clientY - He.y;
              He = {
                ...He,
                x: ie.clientX,
                y: ie.clientY
              }, ee.setOrbit({
                alpha: be.alpha - .01 * Me,
                beta: Math.min(Math.PI - .01, Math.max(.01, be.beta - .01 * Ke)),
                radius: be.radius
              })
            },
            Me = ee => {
              var ie;
              (null === (ie = He) || void 0 === ie ? void 0 : ie.pointer) === ee.pointerId && (He = null)
            },
            Ke = ie => {
              const He = ee.orbit;
              if (null === He) return;
              ie.preventDefault();
              const ye = ie.deltaY * (ie.deltaMode === WheelEvent.DOM_DELTA_LINE ? 40 : ie.deltaMode === WheelEvent.DOM_DELTA_PAGE ? 800 : 1),
                be = Math.min(100, Math.max(5, He.radius + .08 * ye));
              ee.setOrbit({
                ...He,
                radius: be
              })
            };
          return ie.style.touchAction = "none", ie.addEventListener("pointerdown", ye), ie.addEventListener("pointermove", be), ie.addEventListener("pointerup", Me), ie.addEventListener("pointercancel", Me), ie.addEventListener("wheel", Ke, {
            passive: !1
          }), () => {
            ie.removeEventListener("pointerdown", ye), ie.removeEventListener("pointermove", be), ie.removeEventListener("pointerup", Me), ie.removeEventListener("pointercancel", Me), ie.removeEventListener("wheel", Ke)
          }
        }(ee), this.dev = {
          canvas: () => ee.canvas,
          isolateHead: () => {
            console.warn(`${zi} isolateHead: noa's character preview only`)
          },
          isolatePet: () => {
            console.warn(`${zi} isolatePet: noa's character preview only`)
          }
        }, this.apply(), this.ready = ee.untilSettled().then((() => {
          if (ee.isStopped) throw new Error(`${zi} the previews stopped before the character drew`);
          this.built = !0
        }))
      }
      isReady() {
        return this.built && !this.preview.isClosed
      }
      setCosmetic(ee, ie) {
        this.cosmetics[ee] = ie, this.apply()
      }
      playEmote(ee) {
        null === ee || ee !== this.emote ? (this.emote = ee, this.apply()) : this.preview.replay()
      }
      untilDrawn(ee) {
        return this.preview.untilSettled()
      }
      setOrbit(ee) {
        let {
          yaw: ie,
          pitch: He,
          radius: ye
        } = ee;
        const be = this.preview.orbit;
        null !== be && this.preview.setOrbit({
          alpha: ie,
          beta: He,
          radius: null !== ye && void 0 !== ye ? ye : be.radius
        })
      }
      resetCamera() {}
      resize(ee, ie) {
        this.preview.resize(ee, ie)
      }
      close() {
        this.detachControls(), this.preview.close()
      }
      apply() {
        var ee;
        this.preview.setPlayer(JSON.stringify(this.cosmetics), Bi, null === (ee = this.emote) ? -1 : di(ee));
        const ie = this.tunings.of(this.cosmetics.pet, this.cosmetics.aura);
        ie !== this.companions && (this.companions = ie, this.preview.setCompanions(ie))
      }
    }

    function Di(ee, ie) {
      let {
        mobType: He,
        variation: ye,
        animation: be
      } = ie;
      ee.setMob(Ei(He), null !== ye && void 0 !== ye ? ye : "", 1, Oi(be))
    }

    function Pi(ee, ie) {
      let {
        mobType: He,
        variation: ye,
        metaInfo: be,
        tamed: Me
      } = ie;
      ee.setPet(Ei(He), ye, be, Me)
    }
    const Ai = {
      aimed: .533 / 1.15 * 1.1,
      ready: .16 / .85 * 1.1
    };
    class Yi {
      constructor(ee, ie, He, ye) {
        this.preview = null, this.closed = !1, this.figure = null, this.shown = !1, this.order = "", this.span = {
          left: 0,
          width: 0
        }, this.lineup = [0, 0], this.given = null, this.loaded = !1, ee(He.width, ye[1], ye).then((ee => {
          if (this.closed) return void ee.close();
          const {
            style: He
          } = ee.canvas;
          He.position = "absolute", He.top = "0", He.visibility = "hidden", Wi(ie, ee), this.preview = ee, this.apply()
        })).catch((ee => {
          console.error(`${zi} couldn't open a lineup figure`, ee)
        }))
      }
      update(ee, ie, He, ye, be) {
        this.figure = ee, this.shown = ie, this.order = He, this.span = ye, this.lineup = be, this.apply()
      }
      close() {
        var ee;
        this.closed = !0, null === (ee = this.preview) || void 0 === ee || ee.close(), this.preview = null
      }
      apply() {
        const {
          preview: ee,
          figure: ie,
          lineup: He
        } = this;
        if (null === ee || null === ie) return;
        if (this.given !== ie) {
          var ye;
          this.given = ie, this.loaded = !1;
          const He = null === ie.OW ? 0 : null !== (ye = (0, Ji.c)(ie.OW)) && void 0 !== ye ? ye : 0;
          ee.setFigure(function(ee) {
            return JSON.stringify(Object.fromEntries(ee.cosmetics))
          }(ie), He, Oi(ie.animation), ie.size), ee.untilSettled().then((() => {
            this.given === ie && (this.loaded = !0, this.apply())
          }))
        }
        const {
          left: be,
          width: Me
        } = this.span;
        ee.resize(Me, He[1], He);
        const {
          style: Ke
        } = ee.canvas;
        Ke.left = `${be}px`, Ke.width = `${Me}px`, Ke.zIndex = this.order, Ke.visibility = this.shown && this.loaded ? "visible" : "hidden"
      }
    }
    class Vi {
      constructor(ee, ie) {
        this.open = ie, this.layer = void 0, this.figures = [], this.view = {
          figures: [],
          shown: []
        }, this.size = void 0, this.size = ti(ee), this.layer = document.createElement("div");
        const {
          style: He
        } = this.layer;
        He.position = "relative", He.isolation = "isolate", He.overflow = "hidden", He.width = "100%", He.height = "100%", He.pointerEvents = "none", ee.appendChild(this.layer)
      }
      show(ee) {
        this.view = ee, this.place()
      }
      resize(ee, ie) {
        this.size = [ee, ie], this.place()
      }
      close() {
        for (const ee of this.figures) ee.close();
        this.figures = [], this.layer.remove()
      }
      place() {
        const {
          figures: ee,
          shown: ie
        } = this.view;
        for (const ye of this.figures.splice(ee.length)) ye.close();
        const {
          size: He
        } = this;
        ee.forEach(((ye, be) => {
          var Me;
          const Ke = function(ee, ie, He, ye) {
            let [be, Me] = ye;
            const Ke = (ee + .5) * be / ie,
              Ue = Math.min(Math.max(be / ie, 2 * He * Me), 2 * Math.max(Ke, be - Ke));
            return {
              left: Ke - Ue / 2,
              width: Ue
            }
          }(be, ee.length, function(ee) {
            let {
              animation: ie,
              size: He
            } = ee;
            const {
              aimed: ye,
              ready: be
            } = Ai;
            return (Oi(ie) === oi.gunAimed ? ye : be) * He
          }(ye), He);
          this.figures[be] ??= new Yi(this.open, this.layer, Ke, He), this.figures[be].update(ye, null !== (Me = ie[be]) && void 0 !== Me && Me, function(ee, ie) {
            return String(Math.round(1e3 * ee) + ie)
          }(ye.size, be), Ke, He)
        }))
      }
    }
    const ai = {
      player: Se,
      store: ne
    };
    class ci {
      constructor(ee) {
        this.page = ee
      }
      async openMob(ee) {
        return new Zi(await this.open(ee, le), Di)
      }
      async openPet(ee) {
        return new Zi(await this.open(ee, le), Pi)
      }
      openMobLineup(ee) {
        return new Vi(ee, ((ee, ie, He) => this.page.openPreview(le, ee, ie, He)))
      }
      async openCharacter(ee, ie) {
        return new wi(await this.open(ee, ai[ie]))
      }
      async open(ee, ie) {
        const [He, ye] = ti(ee), be = await this.page.openPreview(ie, He, ye);
        return Wi(ee, be), be
      }
    }
  },
  37043: (ee, ie, He) => {
    He.d(ie, {
      e: () => pe,
      f: () => ue,
      i: () => Pe,
      m: () => Ve
    });
    var ye = He(37068),
      be = He(37049),
      Me = He(37058),
      Ke = He(37062);

    function Ue(ee, ie, He) {
      const ye = "object" === typeof ee && null !== ee ? ee : {},
        be = function(ee, ie, He) {
          if (!Array.isArray(ee) || 0 === ee.length) return [];
          const ye = [{
            width: 0,
            height: 0,
            y: 0,
            items: []
          }];
          for (const Ue of (0, Ke.k)(ee, Ke.d.DEFAULT_FONT_SIZE, He)) {
            if ("text" !== Ue.kind) {
              ye[ye.length - 1].items.push({
                content: Ue,
                chars: 1,
                size: {
                  x: 0,
                  width: 0
                }
              });
              continue
            }
            if (0 === Ue.text.length) continue;
            const ee = ye[ye.length - 1].items.reduce(((ee, ie) => ee + ("text" === ie.content.kind ? (0, Me.e)(ie.content.text) : ie.chars)), 0);
            (0, Me.i)(Ue.text, ee).forEach(((ee, ie) => {
              ie > 0 && ye.push({
                width: 0,
                height: 0,
                y: 0,
                items: []
              }), ee.length > 0 && ye[ye.length - 1].items.push({
                content: {
                  ...Ue,
                  text: ee
                },
                chars: ee.length,
                size: {
                  x: 0,
                  width: 0
                }
              })
            }))
          }
          let be = Ke.d.VERTICAL_PADDING / 2;
          for (const Me of ye) {
            if (0 === Me.items.length) continue;
            const {
              width: ee,
              height: ye,
              sizes: Ue
            } = (0, Ke.g)(Me.items.map((ee => ee.content)), ie, He);
            Me.items.forEach(((ee, ie) => {
              ee.size = Ue[ie]
            })), Me.width = ee, Me.height = ye, Me.y = be, be += ye + Ke.d.LINE_SPACING
          }
          return ye
        }(ye.content, ie, He);
      let Ue = 0,
        Fe = Ke.d.VERTICAL_PADDING,
        Je = 0;
      for (const Me of be) {
        Ue = Math.max(Ue, Me.width + 2 * Ke.d.HORIZONTAL_PADDING), Fe += Me.height + Ke.d.LINE_SPACING;
        for (const ee of Me.items) Je += ee.chars
      }
      const oe = "string" === typeof ye.backgroundColor ? ye.backgroundColor : "#22283b";
      return {
        width: Ue,
        height: Fe,
        chars: Je,
        draw: (ee, ie) => {
          const ye = [];
          if (ee.fillStyle = oe, ee.fillRect(0, 0, Ue, Fe), null === ie)
            for (const Me of be) Me.items.length > 0 && (0, Ke.o)(Me.items.map((ee => ee.content)), 0, Me.y, Me.height, ee, He, ye);
          else {
            let Me = 0;
            for (const Ue of be)
              for (const be of Ue.items) {
                if (Me >= ie) break;
                const Fe = "text" === be.content.kind ? {
                  ...be.content,
                  text: be.content.text.substring(0, ie - Me)
                } : be.content;
                (0, Ke.n)(Fe, be.size.x, Ue.y, Ue.height, ee, He, ye, be.size.width), Me += be.chars
              }
          }(0, Ke.l)(ye, ee)
        }
      }
    }
    var Fe = He(37064),
      Je = He(37066);
    const oe = 256,
      Re = 1024,
      ke = {
        width: 1,
        height: 7 / 8
      };
    var qe = He(37076);
    const fe = {
      leaderboard: ""
    };
    var Te = He(37081);
    const pe = {
        Nametag: 1,
        MultilineText: 2,
        Board: 3,
        Leaderboard: 4
      },
      Xe = 2048,
      ze = 256,
      Be = 10,
      Ee = 4,
      ge = 65536,
      Oe = new TextDecoder;
    let de = Te.q,
      We = -1;
    const te = new Map,
      Ze = new Map;
    let we = 0;
    const De = new TextEncoder;

    function Pe(ee, ie) {
      const He = De.encode(JSON.stringify(ie)),
        ye = new Uint8Array(He.length + 1);
      return ye[0] = ee, ye.set(He, 1), ye
    }
    const Ae = {
        name: "Ag",
        info: null,
        colour: "default",
        ranks: [],
        effects: [],
        health: .5,
        Po: null,
        hideNameSeed: null
      },
      Ye = [Pe(pe.Nametag, Ae), Pe(pe.Nametag, {
        ...Ae,
        info: {
          content: [{
            str: "Ag"
          }],
          subtitle: ["Ag"]
        }
      }), Pe(pe.MultilineText, {
        box: {
          content: ["Ag"]
        },
        shown: null
      }), ...ye.d.map(((ee, ie) => Pe(pe.Board, {
        shared: {
          text: "Ag",
          textSize: ie
        },
        w: 0,
        h: 0
      })))];

    function Ve(ee) {
      Te.j.load().then((() => {
        if (ee()) return;
        const ie = (0, be.f)(1, 1, {
          willReadFrequently: !0
        });
        var He;
        ie && (He = ie.canvas, Ye.map((ee => ue(ee, He))))
      }))
    }
    let ae = Te.w;

    function ce() {
      te.clear(), Ze.clear()
    }

    function xe(ee, ie) {
      const He = ee.get(ie);
      return void 0 !== He && (ee.delete(ie), ee.set(ie, He)), He
    }

    function Le(ee, ie, He) {
      ee.set(ie, He), ee.size > ze && ee.delete(ee.keys().next().value)
    }

    function Ce(ee, ie, He) {
      if (ee === pe.Nametag) {
        let ee = xe(te, ie);
        return void 0 === ee && (ee = (0, Fe.e)(JSON.parse(ie), He, de), Le(te, ie, ee)), ee
      }
      if (ee === pe.MultilineText) {
        var be;
        const ee = JSON.parse(ie),
          ye = JSON.stringify(null !== (be = ee.box) && void 0 !== be ? be : null),
          Me = "number" === typeof ee.shown ? ee.shown : null;
        let Ke = xe(Ze, ye);
        void 0 === Ke && (Ke = Ue(ee.box, He, de), Le(Ze, ye, Ke));
        const Fe = null === Me ? null : Math.min(Math.max(0, Math.floor(Me)), Ke.chars),
          Je = Ke;
        return {
          width: Je.width,
          height: Je.height,
          draw: ee => {
            Je.draw(ee, Fe)
          }
        }
      }
      if (ee === pe.Board) return function(ee, ie) {
        var He;
        if (!ie.canSeePlayerWrittenText) return null;
        const {
          shared: be,
          w: Me = 0,
          h: Ke = 0
        } = ee, Ue = !Me;
        let Fe;
        if (Ue) {
          var qe, fe;
          Fe = null !== (qe = null === be || void 0 === be || null === (fe = be.text) || void 0 === fe ? void 0 : fe.toString()) && void 0 !== qe ? qe : ""
        } else {
          if ("string" !== typeof(null === be || void 0 === be ? void 0 : be.text)) return null;
          Fe = be.text
        }
        if ("" === Fe.trim()) return null;
        const Te = null !== (He = null === be || void 0 === be ? void 0 : be.textSize) && void 0 !== He ? He : 0,
          pe = ye.d[Te].ingameFontSize;
        let Xe = ke,
          ze = oe;
        Ue || (Fe = (0, ye.n)(Fe, Te, Me, Ke), Xe = (0, ye.v)(Me, Ke), ze = Math.min(oe, Re / Math.max(Xe.width, Xe.height)));
        const Be = Math.round(ze * Xe.width),
          Ee = Math.round(ze * Xe.height),
          ge = ze / oe;
        return {
          width: Be,
          height: Ee,
          draw: ee => {
            Je.b.fontSize = pe * ge, Je.b.fontWeight = "bold", Je.b.font = "'Jetbrains Mono', monospace", Je.b.drawText(ee, Fe, 0, (-10 - 7 * Te) * ge, Be, Ee)
          }
        }
      }(JSON.parse(ie), de);
      if (ee === pe.Leaderboard) return function(ee, ie, He) {
        var ye;
        const be = (0, qe.k)(ee.opts, fe),
          Me = (0, qe.f)(be, He),
          Ke = {
            top: (0, qe.g)(be, (0, qe.m)(ee.top)),
            around: null !== (ye = ee.around) && void 0 !== ye ? ye : null,
            showPlayerText: ie.canSeePlayerWrittenText,
            localPlayerDbId: ie.localPlayerDbId
          };
        return {
          width: Me.pixelWidth,
          height: Me.pixelHeight,
          draw: ee => {
            const {
              a: ie,
              d: He
            } = ee.getTransform();
            (0, qe.d)(ee, Math.round(Me.pixelWidth * ie), Math.round(Me.pixelHeight * He), Me, be, Ke)
          }
        }
      }(JSON.parse(ie), de, Xe);
      throw new Error(`unknown text plane kind ${ee}`)
    }
    const ve = 2 ** Math.floor(Math.log2(Xe));

    function ue(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      try {
        if (ee.length < 2) return [0, 0];
        const Me = (0, be.c)(ie);
        if (!Me) return [0, 0];
        const Ke = ae();
        Ke !== We && (We = Ke, ce());
        const [Ue] = ee, Fe = Oe.decode(ee.subarray(1));
        let Je;
        Ue !== pe.Board && Ue !== pe.Leaderboard || !de.canSeePlayerWrittenText || de.glyphsShown(Fe), Me.save();
        try {
          Je = Ce(Ue, Fe, Me)
        } finally {
          Me.restore()
        }
        if (null === Je || !(Je.width > 0 && Je.height > 0)) return [0, 0];
        const oe = Math.min(1, Xe / Je.width, Xe / Je.height),
          Re = ee => ye ? function(ee) {
            const ie = 2 ** Math.ceil(Math.log2(ee));
            return Math.min(ve, ie - ee > ee - ie / 2 ? ie / 2 : ie)
          }(ee) : Math.min(Xe, Math.ceil(ee * oe)),
          [ke, qe] = [Re(Je.width), Re(Je.height)];
        ! function(ee, ie, He, ye, be) {
          const Me = Math.max(ee.width, He),
            Ke = Math.max(ee.height, ye),
            Ue = be || Me * Ke > Math.max(Ee * He * ye, ge),
            [Fe, Je] = Ue ? [He, ye] : [Me, Ke];
          Fe === ee.width && Je === ee.height ? ie.clearRect(0, 0, Fe, Je) : (ee.width = Fe, ee.height = Je)
        }(ie, Me, ke, qe, He), Me.save();
        try {
          const [ee, ie] = ye ? [ke / Je.width, qe / Je.height] : [oe, oe];
          1 === ee && 1 === ie || Me.scale(ee, ie), Je.draw(Me)
        } finally {
          Me.restore()
        }
        return [ke, qe]
      } catch (Me) {
        ! function(ee, ie) {
          we < Be && (we++, console.warn(`[bloxd-wasm-client] ${ee}`, ie))
        }("could not raster a text plane", Me);
        try {
          ie.width = 1
        } catch {}
        return [0, 0]
      }
    }
  },
  54248: (ee, ie, He) => {
    ee.exports = He.p + "static/media/builtInAnimations.anim.1876a593a8239b631bf1.gz"
  },
  54255: (ee, ie, He) => {
    ee.exports = He.p + "static/media/previewAnimations.dat.a9c06de838594e8096c6.gz"
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);