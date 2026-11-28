export const id = 272;
export const ids = [272, 273];
export const modules = {
  41929: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Ib,
      h: () => Ub
    });
    var eb = Mb(41675),
      Hb = Mb(41679),
      pb = Mb(38285),
      Vb = Mb(38406),
      gb = Mb(41931),
      lb = Mb(41886),
      Lb = Mb(38333);
    let Ib = (() => {
        var bb;
        let wb, Mb, lb = gb.d,
          Lb = [],
          Ib = [],
          Ob = [],
          Ub = [];
        return bb = class extends lb {
          constructor(bb, wb, Mb, Hb) {
            super(bb, Mb, Hb), this.groundColor = (0, eb.m)(this, Lb, new Vb.e(0, 0, 0)), this.direction = ((0, eb.m)(this, Ib), (0, eb.m)(this, Ob, void 0)), (0, eb.m)(this, Ub), this.direction = wb || pb.o.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(bb) {
            return this.direction = pb.o.Normalize(bb.subtract(pb.o.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(bb, wb) {
            const Mb = pb.o.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", Mb.x, Mb.y, Mb.z, 0, wb), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), wb), this
          }
          transferToNodeMaterialEffect(bb, wb) {
            const Mb = pb.o.Normalize(this.direction);
            return bb.setFloat3(wb, Mb.x, Mb.y, Mb.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = pb.b.Identity()), this._worldMatrix
          }
          getTypeID() {
            return gb.d.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(bb, wb) {
            bb["HEMILIGHT" + wb] = !0
          }
        }, (() => {
          const pb = "function" === typeof Symbol && Symbol.metadata ? Object.create(lb[Symbol.metadata] ?? null) : void 0;
          wb = [(0, Hb.i)()], Mb = [(0, Hb.B)()], (0, eb.i)(null, null, wb, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "groundColor" in bb,
              get: bb => bb.groundColor,
              set: (bb, wb) => {
                bb.groundColor = wb
              }
            },
            metadata: pb
          }, Lb, Ib), (0, eb.i)(null, null, Mb, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: bb => "direction" in bb,
              get: bb => bb.direction,
              set: (bb, wb) => {
                bb.direction = wb
              }
            },
            metadata: pb
          }, Ob, Ub), pb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: pb
          })
        })(), bb
      })(),
      Ob = !1;

    function Ub() {
      Ob || (Ob = !0, lb.d.AddNodeConstructor("Light_Type_3", ((bb, wb) => () => new Ib(bb, pb.o.Zero(), wb))), (0, Lb.e)("BABYLON.HemisphericLight", Ib))
    }
  },
  38994: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Hb
    });
    var eb = Mb(39001);
    class Hb {
      static GetPlanes(bb) {
        const wb = [];
        for (let Mb = 0; Mb < 6; Mb++) wb.push(new eb.d(0, 0, 0, 0));
        return Hb.GetPlanesToRef(bb, wb), wb
      }
      static GetNearPlaneToRef(bb, wb) {
        const Mb = bb.m;
        wb.normal.x = Mb[3] + Mb[2], wb.normal.y = Mb[7] + Mb[6], wb.normal.z = Mb[11] + Mb[10], wb.d = Mb[15] + Mb[14], wb.normalize()
      }
      static GetFarPlaneToRef(bb, wb) {
        const Mb = bb.m;
        wb.normal.x = Mb[3] - Mb[2], wb.normal.y = Mb[7] - Mb[6], wb.normal.z = Mb[11] - Mb[10], wb.d = Mb[15] - Mb[14], wb.normalize()
      }
      static GetLeftPlaneToRef(bb, wb) {
        const Mb = bb.m;
        wb.normal.x = Mb[3] + Mb[0], wb.normal.y = Mb[7] + Mb[4], wb.normal.z = Mb[11] + Mb[8], wb.d = Mb[15] + Mb[12], wb.normalize()
      }
      static GetRightPlaneToRef(bb, wb) {
        const Mb = bb.m;
        wb.normal.x = Mb[3] - Mb[0], wb.normal.y = Mb[7] - Mb[4], wb.normal.z = Mb[11] - Mb[8], wb.d = Mb[15] - Mb[12], wb.normalize()
      }
      static GetTopPlaneToRef(bb, wb) {
        const Mb = bb.m;
        wb.normal.x = Mb[3] - Mb[1], wb.normal.y = Mb[7] - Mb[5], wb.normal.z = Mb[11] - Mb[9], wb.d = Mb[15] - Mb[13], wb.normalize()
      }
      static GetBottomPlaneToRef(bb, wb) {
        const Mb = bb.m;
        wb.normal.x = Mb[3] + Mb[1], wb.normal.y = Mb[7] + Mb[5], wb.normal.z = Mb[11] + Mb[9], wb.d = Mb[15] + Mb[13], wb.normalize()
      }
      static GetPlanesToRef(bb, wb) {
        Hb.GetNearPlaneToRef(bb, wb[0]), Hb.GetFarPlaneToRef(bb, wb[1]), Hb.GetLeftPlaneToRef(bb, wb[2]), Hb.GetRightPlaneToRef(bb, wb[3]), Hb.GetTopPlaneToRef(bb, wb[4]), Hb.GetBottomPlaneToRef(bb, wb[5])
      }
      static IsPointInFrustum(bb, wb) {
        for (let Mb = 0; Mb < 6; Mb++)
          if (wb[Mb].dotCoordinate(bb) < 0) return !1;
        return !0
      }
    }
  },
  39001: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Hb
    });
    var eb = Mb(38285);
    class Hb {
      constructor(bb, wb, Mb, Hb) {
        this.normal = new eb.o(bb, wb, Mb), this.d = Hb
      }
      ppb() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Hb(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let bb = this.normal.getHashCode();
        return bb = 397 * bb ^ this.d, bb
      }
      normalize() {
        const bb = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let wb = 0;
        return 0 !== bb && (wb = 1 / bb), this.normal.x *= wb, this.normal.y *= wb, this.normal.z *= wb, this.d *= wb, this
      }
      transform(bb) {
        const wb = Hb._TmpMatrix;
        bb.invertToRef(wb);
        const Mb = wb.m,
          eb = this.normal.x,
          pb = this.normal.y,
          Vb = this.normal.z,
          gb = this.d,
          lb = eb * Mb[0] + pb * Mb[1] + Vb * Mb[2] + gb * Mb[3],
          Lb = eb * Mb[4] + pb * Mb[5] + Vb * Mb[6] + gb * Mb[7],
          Ib = eb * Mb[8] + pb * Mb[9] + Vb * Mb[10] + gb * Mb[11],
          Ob = eb * Mb[12] + pb * Mb[13] + Vb * Mb[14] + gb * Mb[15];
        return new Hb(lb, Lb, Ib, Ob)
      }
      dotCoordinate(bb) {
        return this.normal.x * bb.x + this.normal.y * bb.y + this.normal.z * bb.z + this.d
      }
      copyFromPoints(bb, wb, Mb) {
        const eb = wb.x - bb.x,
          Hb = wb.y - bb.y,
          pb = wb.z - bb.z,
          Vb = Mb.x - bb.x,
          gb = Mb.y - bb.y,
          lb = Mb.z - bb.z,
          Lb = Hb * lb - pb * gb,
          Ib = pb * Vb - eb * lb,
          Ob = eb * gb - Hb * Vb,
          Ub = Math.sqrt(Lb * Lb + Ib * Ib + Ob * Ob);
        let tb;
        return tb = 0 !== Ub ? 1 / Ub : 0, this.normal.x = Lb * tb, this.normal.y = Ib * tb, this.normal.z = Ob * tb, this.d = -(this.normal.x * bb.x + this.normal.y * bb.y + this.normal.z * bb.z), this
      }
      isFrontFacingTo(bb, wb) {
        return eb.o.Dot(this.normal, bb) <= wb
      }
      signedDistanceTo(bb) {
        return eb.o.Dot(bb, this.normal) + this.d
      }
      static FromArray(bb) {
        return new Hb(bb[0], bb[1], bb[2], bb[3])
      }
      static FromPoints(bb, wb, Mb) {
        const eb = new Hb(0, 0, 0, 0);
        return eb.copyFromPoints(bb, wb, Mb), eb
      }
      static FromPositionAndNormal(bb, wb) {
        const Mb = new Hb(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(bb, wb, Mb)
      }
      static FromPositionAndNormalToRef(bb, wb, Mb) {
        return Mb.normal.eZ(wb), Mb.normal.normalize(), Mb.d = -bb.dot(Mb.normal), Mb
      }
      static SignedDistanceToPlaneFromPositionAndNormal(bb, wb, Mb) {
        const Hb = -(wb.x * bb.x + wb.y * bb.y + wb.z * bb.z);
        return eb.o.Dot(Mb, wb) + Hb
      }
    }
    Hb._TmpMatrix = eb.b.Identity()
  },
  39323: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => eb
    });
    class eb {
      constructor(bb, wb, Mb, eb) {
        this.x = bb, this.y = wb, this.width = Mb, this.height = eb
      }
      toGlobal(bb, wb) {
        return new eb(this.x * bb, this.y * wb, this.width * bb, this.height * wb)
      }
      toGlobalToRef(bb, wb, Mb) {
        return Mb.x = this.x * bb, Mb.y = this.y * wb, Mb.width = this.width * bb, Mb.height = this.height * wb, this
      }
      clone() {
        return new eb(this.x, this.y, this.width, this.height)
      }
    }
  },
  39966: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => pb
    });
    var eb = Mb(39971);
    const Hb = (bb, wb, Mb) => bb ? bb.getClassName && "Mesh" === bb.getClassName() ? null : !bb.getClassName || "SubMesh" !== bb.getClassName() && "PhysicsBody" !== bb.getClassName() ? bb.clone ? bb.clone() : Array.isArray(bb) ? bb.slice() : Mb && "object" === typeof bb ? {
      ...bb
    } : null : bb.clone(wb) : null;
    class pb {
      static DeepCopy(bb, wb, Mb, pb) {
        let Vb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const gb = function(bb) {
          const wb = [];
          do {
            const Mb = Object.getOwnPropertyNames(bb);
            for (const bb of Mb) - 1 === wb.indexOf(bb) && wb.push(bb)
          } while (bb = Object.getPrototypeOf(bb));
          return wb
        }(bb);
        for (const Lb of gb) {
          if ("_" === Lb[0] && (!pb || -1 === pb.indexOf(Lb))) continue;
          if (Lb.endsWith("Observable")) continue;
          if (Mb && -1 !== Mb.indexOf(Lb)) continue;
          const gb = bb[Lb],
            Ib = typeof gb;
          if ("function" !== Ib) try {
            if ("object" === Ib)
              if (gb instanceof Uint8Array) wb[Lb] = Uint8Array.from(gb);
              else if (gb instanceof Array) {
              if (wb[Lb] = [], gb.length > 0)
                if ("object" == typeof gb[0])
                  for (let bb = 0; bb < gb.length; bb++) {
                    const Mb = Hb(gb[bb], wb, Vb); - 1 === wb[Lb].indexOf(Mb) && wb[Lb].push(Mb)
                  } else wb[Lb] = gb.slice(0)
            } else wb[Lb] = Hb(gb, wb, Vb);
            else wb[Lb] = gb
          } catch (lb) {
            eb.b.Warn(lb.message)
          }
        }
      }
    }
  },
  39148: (bb, wb, Mb) => {
    function eb() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (bb => {
        const wb = 16 * Math.random() | 0;
        return ("x" === bb ? wb : 3 & wb | 8).toString(16)
      }))
    }
    Mb.d(wb, {
      c: () => eb
    })
  },
  39971: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => eb
    });
    class eb {
      static _CheckLimit(bb, wb) {
        let Mb = eb._LogLimitOutputs[bb];
        return Mb ? Mb.current++ : (Mb = {
          limit: wb,
          current: 1
        }, eb._LogLimitOutputs[bb] = Mb), Mb.current <= Mb.limit
      }
      static _GenerateLimitMessage(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const Mb = eb._LogLimitOutputs[bb];
        if (!Mb || !eb.MessageLimitReached) return;
        const Hb = this._Levels[wb];
        Mb.current === Mb.limit && eb[Hb.name](eb.MessageLimitReached.replace(/%LIMIT%/g, "" + Mb.limit).replace(/%TYPE%/g, Hb.name ?? ""))
      }
      static _AddLogEntry(bb) {
        eb._LogCache = bb + eb._LogCache, eb.OnNewCacheEntry && eb.OnNewCacheEntry(bb)
      }
      static _FormatMessage(bb) {
        const wb = bb => bb < 10 ? "0" + bb : "" + bb,
          Mb = new Date;
        return "[" + wb(Mb.getHours()) + ":" + wb(Mb.getMinutes()) + ":" + wb(Mb.getSeconds()) + "]: " + bb
      }
      static _LogDisabled(bb, wb) {}
      static _LogEnabled() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          wb = arguments.length > 1 ? arguments[1] : void 0,
          Mb = arguments.length > 2 ? arguments[2] : void 0;
        const Hb = Array.isArray(wb) ? wb[0] : wb;
        if (void 0 !== Mb && !eb._CheckLimit(Hb, Mb)) return;
        const pb = eb._FormatMessage(Hb),
          Vb = this._Levels[bb],
          gb = Array.isArray(wb) ? wb.slice(1) : [];
        Vb.logFunc && Vb.logFunc("BJS - " + pb, ...gb);
        const lb = `<div style='color:${Vb.color}'>${pb}</div><br>`;
        eb._AddLogEntry(lb), eb._GenerateLimitMessage(Hb, bb)
      }
      static get LogCache() {
        return eb._LogCache
      }
      static ClearLogCache() {
        eb._LogCache = "", eb._LogLimitOutputs = {}, eb.errorsCount = 0
      }
      static set LogLevels(bb) {
        eb.Log = eb._LogDisabled, eb.Warn = eb._LogDisabled, eb.Error = eb._LogDisabled;
        const wb = [eb.MessageLogLevel, eb.WarningLogLevel, eb.ErrorLogLevel];
        for (const Mb of wb)
          if ((bb & Mb) === Mb) {
            const bb = this._Levels[Mb];
            eb[bb.name] = eb._LogEnabled.bind(eb, Mb)
          }
      }
    }
    eb.NoneLogLevel = 0, eb.MessageLogLevel = 1, eb.WarningLogLevel = 2, eb.ErrorLogLevel = 4, eb.AllLogLevel = 7, eb.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", eb._LogCache = "", eb._LogLimitOutputs = {}, eb._Levels = [{}, {
      color: "white",
      logFunc: console.log,
      name: "Log"
    }, {
      color: "orange",
      logFunc: console.warn,
      name: "Warn"
    }, {}, {
      color: "red",
      logFunc: console.error,
      name: "Error"
    }], eb.errorsCount = 0, eb.Log = eb._LogEnabled.bind(eb, eb.MessageLogLevel), eb.Warn = eb._LogEnabled.bind(eb, eb.WarningLogLevel), eb.Error = eb._LogEnabled.bind(eb, eb.ErrorLogLevel)
  },
  64409: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      CreateScreenshot: () => Jb,
      CreateScreenshotAsync: () => Sb,
      CreateScreenshotForFrameGraphAsync: () => Gb,
      CreateScreenshotUsingRenderTarget: () => vb,
      CreateScreenshotUsingRenderTargetAsync: () => Qb,
      CreateScreenshotWithResizeAsync: () => Nb,
      RegisterScreenshotTools: () => ub,
      ScreenshotTools: () => ab
    });
    var eb = Mb(42152),
      Hb = Mb(54051),
      pb = Mb(54022),
      Vb = Mb(41697),
      gb = Mb(54027),
      lb = Mb(38313),
      Lb = Mb(38285);
    class Ib extends gb.f {
      static _GetDefines(bb) {
        if (!bb) return null;
        return bb.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
      }
      _gatherImports(bb, wb) {
        bb ? (this._webGPUReady = !0, wb.push(Promise.all([Mb.e(693).then((() => Mb(64645))), Mb.e(694).then((() => Mb(64647)))]))) : wb.push(Promise.all([Mb.e(695).then((() => Mb(64649))), Mb.e(696).then((() => Mb(64657)))]))
      }
      constructor(bb) {
        const wb = {
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: bb,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || lb.e.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          vertexShader: Ib.VertexUrl,
          fragmentShader: Ib.FragmentUrl,
          uniforms: Ib.Uniforms
        };
        super({
          ...wb,
          defines: Ib._GetDefines(wb.engine)
        }), this.texelSize = new Lb.m(0, 0)
      }
      bind() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.bind(bb), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
      }
    }
    Ib.VertexUrl = "fxaa", Ib.FragmentUrl = "fxaa", Ib.Uniforms = ["texelSize"];
    class Ob extends pb.e {
      getClassName() {
        return "FxaaPostProcess"
      }
      constructor(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Hb = arguments.length > 3 ? arguments[3] : void 0,
          pb = arguments.length > 4 ? arguments[4] : void 0,
          Vb = arguments.length > 5 ? arguments[5] : void 0,
          gb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const lb = {
          uniforms: Ib.Uniforms,
          size: "number" === typeof wb ? wb : void 0,
          camera: Mb,
          samplingMode: Hb || eb.f.BILINEAR_SAMPLINGMODE,
          engine: pb,
          reusable: Vb,
          textureType: gb,
          ...wb
        };
        super(bb, Ib.FragmentUrl, {
          effectWrapper: "number" !== typeof wb && wb.effectWrapper ? void 0 : new Ib(bb, pb, lb),
          ...lb
        }), this.onApplyObservable.add((bb => {
          this._effectWrapper.texelSize = this.texelSize
        }))
      }
      static _Parse(bb, wb, Mb, eb) {
        return Vb.d.Parse((() => new Ob(bb.name, bb.options, wb, bb.renderTargetSamplingMode, Mb.DC(), bb.reusable)), bb, Mb, eb)
      }
    }
    var Ub = Mb(39971),
      tb = Mb(41771),
      Cb = Mb(54062),
      Eb = Mb(54042),
      Fb = Mb(41565);
    const Bb = 0;
    class sb {
      constructor(bb, wb, Mb) {
        this.name = bb, this._parentTask = wb, this._context = Mb, this.disabled = !1
      }
      setInitializeFunc(bb) {
        this._initFunc = bb
      }
      setExecuteFunc(bb) {
        this._executeFunc = bb
      }
      _execute() {
        this.disabled || this._executeFunc(this._context)
      }
      _initialize() {
        this._initFunc?.(this._context)
      }
      _isValid() {
        return void 0 !== this._executeFunc ? null : "Execute function is not set (call setExecuteFunc to set it)"
      }
      _dispose() {}
    }
    class mb extends sb {
      static IsObjectListPass(bb) {
        return void 0 !== bb.setObjectList
      }
      get objectList() {
        return this._objectList
      }
      setObjectList(bb) {
        this._objectList = bb
      }
      constructor(bb, wb, Mb, eb) {
        super(bb, wb, Mb), this._engine = eb
      }
      _isValid() {
        const bb = super._isValid();
        return bb || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
      }
    }
    class hb extends sb {
      static IsRenderPass(bb) {
        return void 0 !== bb.setRenderTarget
      }
      get renderTarget() {
        return this._renderTarget
      }
      get renderTargetDepth() {
        return this._renderTargetDepth
      }
      get frameGraphRenderTarget() {
        return this._frameGraphRenderTarget
      }
      constructor(bb, wb, Mb, eb) {
        super(bb, wb, Mb), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = eb
      }
      setRenderTarget(bb) {
        this._renderTarget = bb
      }
      setRenderTargetDepth(bb) {
        this._renderTargetDepth = bb
      }
      addDependencies(bb) {
        if (void 0 !== bb)
          if (Array.isArray(bb))
            for (const wb of bb) this._dependencies.add(wb);
          else this._dependencies.add(bb)
      }
      collectDependencies(bb) {
        const wb = this._dependencies.keys();
        for (let Mb = wb.next(); !0 !== Mb.done; Mb = wb.next()) bb.add(Mb.value);
        if (void 0 !== this._renderTarget)
          if (Array.isArray(this._renderTarget))
            for (const Mb of this._renderTarget) void 0 !== Mb && bb.add(Mb);
          else bb.add(this._renderTarget);
        void 0 !== this._renderTargetDepth && bb.add(this._renderTargetDepth)
      }
      setOutputLayerAndFaceIndices(bb) {
        const wb = this.frameGraphRenderTarget.renderTargetWrapper;
        if (wb)
          for (const Mb of bb) wb.setLayerAndFaceIndex(Mb.targetIndex, Mb.layerIndex, Mb.faceIndex)
      }
      _initialize() {
        this._frameGraphRenderTarget = this._context.createRenderTarget(this.name, this._renderTarget, this._renderTargetDepth, this.depthReadOnly, this.stencilReadOnly), super._initialize()
      }
      _execute() {
        this._context.bindRenderTarget(this._frameGraphRenderTarget), super._execute(), this._context.restoreDefaultFramebuffer()
      }
      _isValid() {
        const bb = super._isValid();
        return bb || (void 0 !== this._renderTarget || void 0 !== this.renderTargetDepth ? null : "Render target and render target depth cannot both be undefined.")
      }
      _dispose() {
        this._frameGraphRenderTarget?.dispose()
      }
    }
    var zb = Mb(38318);
    class Xb {
      get name() {
        return this._name
      }
      set name(bb) {
        this._name = bb
      }
      get disabled() {
        return this._disabled
      }
      set disabled(bb) {
        this._disabled = bb
      }
      get passes() {
        return this._passes
      }
      get passesDisabled() {
        return this._passesDisabled
      }
      getClassName() {
        return "FrameGraphTask"
      }
      initAsync() {
        return Promise.resolve()
      }
      isReady() {
        return !0
      }
      dispose() {
        this._reset(), this.onTexturesAllocatedObservable.clear(), this.onBeforeTaskExecute.clear(), this.onAfterTaskExecute.clear()
      }
      constructor(bb, wb) {
        this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new zb.b, this.onBeforeTaskExecute = new zb.b, this.onAfterTaskExecute = new zb.b, this.name = bb, this._frameGraph = wb, this._reset()
      }
      _reset() {
        for (const bb of this._passes) bb._dispose();
        for (const bb of this._passesDisabled) bb._dispose();
        this._passes.length = 0, this._passesDisabled.length = 0
      }
      _addPass(bb, wb) {
        wb ? this._passesDisabled.push(bb) : this._passes.push(bb)
      }
      _checkTask() {
        let bb, wb = null,
          Mb = null;
        for (const gb of this._passes) {
          const eb = gb._isValid();
          if (eb) throw new Error(`Pass "${gb.name}" is not valid. ${eb}`);
          if (hb.IsRenderPass(gb)) {
            const bb = Array.isArray(gb.renderTarget) ? gb.renderTarget : [gb.renderTarget];
            wb = [];
            for (const Mb of bb) void 0 !== Mb && wb.push(this._frameGraph.textureManager.getTextureFromHandle(Mb));
            Mb = void 0 !== gb.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(gb.renderTargetDepth) : null
          } else mb.IsObjectListPass(gb) && (bb = gb.objectList)
        }
        let eb, Hb = null,
          pb = [],
          Vb = null;
        for (const gb of this._passesDisabled) {
          const bb = gb._isValid();
          if (bb) throw new Error(`Pass "${gb.name}" is not valid. ${bb}`);
          if (hb.IsRenderPass(gb)) {
            const bb = Array.isArray(gb.renderTarget) ? gb.renderTarget : [gb.renderTarget];
            Hb = [];
            for (const wb of bb) void 0 !== wb && Hb.push(this._frameGraph.textureManager.getTextureFromHandle(wb));
            pb = bb, Vb = void 0 !== gb.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(gb.renderTargetDepth) : null
          } else mb.IsObjectListPass(gb) && (eb = gb.objectList)
        }
        if (this._passesDisabled.length > 0) {
          if (!this._checkSameRenderTarget(wb, Hb)) {
            let bb = !0;
            for (const wb of pb)
              if (void 0 !== wb && !this._frameGraph.textureManager.isHistoryTexture(wb)) {
                bb = !1;
                break
              } if (!bb) throw new Error(`The output texture of the task "${this.name}" is different when it is enabled or disabled.`)
          }
          if (Mb !== Vb && null !== Vb) throw new Error(`The output depth texture of the task "${this.name}" is different when it is enabled or disabled.`);
          if (bb !== eb && null !== eb) throw new Error(`The output object list of the task "${this.name}" is different when it is enabled or disabled.`)
        }
      }
      _execute() {
        const bb = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
        this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const wb of bb) wb._execute()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
        this.onAfterTaskExecute.notifyObservers(this)
      }
      _initializePasses() {
        this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const bb of this._passes) bb._initialize();
          for (const bb of this._passesDisabled) bb._initialize()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
      }
      _checkSameRenderTarget(bb, wb) {
        if (null === bb || null === wb) return bb === wb;
        if (bb.length !== wb.length) return !1;
        for (let Mb = 0; Mb < bb.length; Mb++)
          if (bb[Mb] !== wb[Mb]) return !1;
        return !0
      }
    }
    class xb extends Xb {
      get alphaMode() {
        return this.postProcess.alphaMode
      }
      set alphaMode(bb) {
        this.postProcess.alphaMode = bb
      }
      get drawWrapper() {
        return this._postProcessDrawWrapper
      }
      constructor(bb, wb, Mb) {
        super(bb, wb), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = Mb, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture = this._frameGraph.textureManager.createDanglingHandle(), this.outputDepthAttachmentTexture = this._frameGraph.textureManager.createDanglingHandle()
      }
      isReady() {
        return this.postProcess.isReady()
      }
      getClassName() {
        return "FrameGraphPostProcessTask"
      }
      record() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          wb = arguments.length > 1 ? arguments[1] : void 0,
          Mb = arguments.length > 2 ? arguments[2] : void 0;
        if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
        const eb = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
        if (eb && (eb.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, eb), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentTexture, this.depthAttachmentTexture), eb) {
          const bb = this._frameGraph.textureManager.getTextureAbsoluteDimensions(eb);
          this._sourceWidth = bb.width, this._sourceHeight = bb.height
        }
        const Hb = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
        this._outputWidth = Hb.size.width, this._outputHeight = Hb.size.height;
        const pb = this._frameGraph.addRenderPass(this.name);
        if (pb.depthReadOnly = this.depthReadOnly, pb.stencilReadOnly = this.stencilReadOnly, pb.addDependencies(this.sourceTexture), pb.setRenderTarget(this.outputTexture), pb.setRenderTargetDepth(this.depthAttachmentTexture), pb.setExecuteFunc((bb => {
            bb.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && bb.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), wb?.(bb), this.viewport && bb.setViewport(this.viewport), bb.applyFullScreenEffect(this._postProcessDrawWrapper, (() => {
              void 0 !== this.sourceTexture && bb.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), Mb?.(bb), this.postProcess.bind()
            }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), bb.restoreDefaultFramebuffer(), bb.popDebugGroup()
          })), !bb) {
          const bb = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
          bb.depthReadOnly = this.depthReadOnly, bb.stencilReadOnly = this.stencilReadOnly, bb.addDependencies(this.sourceTexture), bb.setRenderTarget(this.outputTexture), bb.setRenderTargetDepth(this.depthAttachmentTexture), bb.setExecuteFunc((bb => {
            void 0 !== this.sourceTexture && 0 === this.alphaMode && (this.viewport && bb.setViewport(this.viewport), bb.copyTexture(this.sourceTexture, void 0, void 0 !== this.viewport))
          }))
        }
        return pb
      }
      dispose() {
        this.postProcess.dispose(), super.dispose()
      }
    }
    class jb extends xb {
      constructor(bb, wb, Mb) {
        super(bb, wb, Mb || new Ib(bb, wb.engine))
      }
      getClassName() {
        return "FrameGraphFXAATask"
      }
      record() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          wb = arguments.length > 1 ? arguments[1] : void 0,
          Mb = arguments.length > 2 ? arguments[2] : void 0;
        const eb = super.record(bb, wb, Mb);
        return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, eb
      }
    }
    var Kb = Mb(54058);
    class rb extends xb {
      constructor(bb, wb, Mb) {
        super(bb, wb, Mb || new Kb.c(bb, wb.engine))
      }
      getClassName() {
        return "FrameGraphPassTask"
      }
    }
    var Rb = Mb(41764),
      Db = Mb(41843),
      cb = Mb(41808),
      Yb = Mb(41929),
      Zb = Mb(38406);
    class fb {
      getRenderCamera(bb) {
        if (this._renderCamera) return this._renderCamera;
        {
          let wb;
          return wb = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, bb && wb && wb.isRigCamera ? wb.rigParent : wb
        }
      }
      setRenderCamera(bb) {
        this._renderCamera = bb
      }
      _getSharedGizmoLight() {
        return this._sharedGizmoLight || (this._sharedGizmoLight = new Yb.e("shared gizmo light", new Lb.o(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = Zb.e.Gray()), this._sharedGizmoLight
      }
      static get DefaultUtilityLayer() {
        return null == fb._DefaultUtilityLayer ? fb._CreateDefaultUtilityLayerFromScene(lb.e.LastCreatedScene) : fb._DefaultUtilityLayer
      }
      static _CreateDefaultUtilityLayerFromScene(bb) {
        return fb._DefaultUtilityLayer = new fb(bb), fb._DefaultUtilityLayer.originalScene.vJ.addOnce((() => {
          fb._DefaultUtilityLayer = null
        })), fb._DefaultUtilityLayer
      }
      static get DefaultKeepDepthUtilityLayer() {
        return null == fb._DefaultKeepDepthUtilityLayer ? fb._CreateDefaultKeepUtilityLayerFromScene(lb.e.LastCreatedScene) : fb._DefaultKeepDepthUtilityLayer
      }
      static _CreateDefaultKeepUtilityLayerFromScene(bb) {
        return fb._DefaultKeepDepthUtilityLayer = new fb(bb), fb._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, fb._DefaultKeepDepthUtilityLayer.originalScene.vJ.addOnce((() => {
          fb._DefaultKeepDepthUtilityLayer = null
        })), fb._DefaultKeepDepthUtilityLayer
      }
      constructor(bb) {
        let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.originalScene = bb, this.handleEvents = wb, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.processAllEvents = !1, this.pickingEnabled = !0, this.onPointerOutObservable = new zb.b, this.utilityLayerScene = new Rb.g(bb.DC(), {
          virtual: !0,
          useFloatingOrigin: bb.floatingOriginMode
        }), this.utilityLayerScene.useRightHandedSystem = bb.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), wb && (this._originalPointerObserver = bb.onPrePointerObservable.add((wb => {
          if (!this.utilityLayerScene.activeCamera) return;
          if (!this.pickingEnabled) return;
          if (!this.processAllEvents && wb.type !== Db.b.POINTERMOVE && wb.type !== Db.b.POINTERUP && wb.type !== Db.b.POINTERDOWN && wb.type !== Db.b.POINTERDOUBLETAP) return;
          this.utilityLayerScene.pointerX = bb.pointerX, this.utilityLayerScene.pointerY = bb.pointerY;
          const Mb = wb.event;
          if (bb.isPointerCaptured(Mb.pointerId)) return void(this._pointerCaptures[Mb.pointerId] = !1);
          const eb = Mb => {
              let eb;
              if (wb.nearInteractionPickingInfo) eb = wb.nearInteractionPickingInfo.pickedMesh.RJ() == Mb ? wb.nearInteractionPickingInfo : new cb.c;
              else if (Mb !== this.utilityLayerScene && wb.originalPickingInfo) eb = wb.originalPickingInfo;
              else {
                let Hb = null;
                this._renderCamera && (Hb = Mb._activeCamera, Mb._activeCamera = this._renderCamera, wb.ray = null), eb = wb.ray ? Mb.pickWithRay(wb.ray) : Mb.Vt(bb.pointerX, bb.pointerY), Hb && (Mb._activeCamera = Hb)
              }
              return eb
            },
            Hb = eb(this.utilityLayerScene);
          if (!wb.ray && Hb && (wb.ray = Hb.ray), wb.originalPickingInfo?.aimTransform && Hb && (Hb.aimTransform = wb.originalPickingInfo.aimTransform, Hb.gripTransform = wb.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(wb), this.onlyCheckPointerDownEvents && wb.type != Db.b.POINTERDOWN) return wb.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new Db.f(wb.type, wb.event, Hb), wb.type), void(wb.type === Db.b.POINTERUP && this._pointerCaptures[Mb.pointerId] && (this._pointerCaptures[Mb.pointerId] = !1));
          if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) Hb && Hb.hit && (wb.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new Db.f(wb.type, wb.event, Hb), wb.type), wb.skipOnPointerObservable = !0);
          else {
            const Mb = eb(bb),
              pb = wb.event;
            Mb && Hb && (0 === Hb.distance && Mb.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(Mb.pickedMesh) ? (this._notifyObservers(wb, Mb, pb), wb.skipOnPointerObservable = !0) : wb.type === Db.b.POINTERDOWN ? (this._pointerCaptures[pb.pointerId] = !0, this._notifyObservers(wb, Mb, pb)) : wb.type !== Db.b.POINTERMOVE && wb.type !== Db.b.POINTERUP || (this._lastPointerEvents[pb.pointerId] && (this.onPointerOutObservable.notifyObservers(pb.pointerId), delete this._lastPointerEvents[pb.pointerId]), this._notifyObservers(wb, Mb, pb)) : !this._pointerCaptures[pb.pointerId] && (Hb.distance < Mb.distance || 0 === Mb.distance) ? (this._notifyObservers(wb, Hb, pb), wb.skipOnPointerObservable || (wb.skipOnPointerObservable = Hb.distance > 0)) : !this._pointerCaptures[pb.pointerId] && Hb.distance >= Mb.distance && (this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(Mb.pickedMesh) ? (this._notifyObservers(wb, Mb, pb), wb.skipOnPointerObservable = !0) : (wb.type !== Db.b.POINTERMOVE && wb.type !== Db.b.POINTERUP || this._lastPointerEvents[pb.pointerId] && (this.onPointerOutObservable.notifyObservers(pb.pointerId), delete this._lastPointerEvents[pb.pointerId]), this._notifyObservers(wb, Hb, pb))), wb.type === Db.b.POINTERUP && this._pointerCaptures[pb.pointerId] && (this._pointerCaptures[pb.pointerId] = !1))
          }
        })), this._originalPointerObserver && bb.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, Mb || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((bb => {
          this.shouldRender && bb == this.getRenderCamera() && this.render()
        }))), this._sceneDisposeObserver = this.originalScene.vJ.add((() => {
          this.dispose()
        })), this._updateCamera()
      }
      _notifyObservers(bb, wb, Mb) {
        bb.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new Db.f(bb.type, bb.event, wb), bb.type), this._lastPointerEvents[Mb.pointerId] = !0)
      }
      render() {
        if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
          const bb = this.utilityLayerScene.activeCamera.RJ(),
            wb = this.utilityLayerScene.activeCamera;
          wb._scene = this.utilityLayerScene, wb.leftCamera && (wb.leftCamera._scene = this.utilityLayerScene), wb.rightCamera && (wb.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), wb._scene = bb, wb.leftCamera && (wb.leftCamera._scene = bb), wb.rightCamera && (wb.rightCamera._scene = bb)
        }
      }
      dispose() {
        this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.vJ.remove(this._sceneDisposeObserver), this._originalPointerObserver && this.originalScene.onPrePointerObservable.remove(this._originalPointerObserver), this.utilityLayerScene.dispose()
      }
      _updateCamera() {
        this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
      }
    }
    fb._DefaultUtilityLayer = null, fb._DefaultKeepDepthUtilityLayer = null;
    const Ab = {
      FindMainCamera: function(bb) {
        return bb.findMainCamera()
      },
      FindMainObjectRenderer: function(bb) {
        return bb.findMainObjectRenderer()
      },
      CreateUtilityLayerRenderer: function(bb) {
        let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const Mb = bb.JE,
          eb = new fb(Mb, wb, !0);
        eb.utilityLayerScene.activeCamera = Mb.activeCamera;
        let Hb = Ab.FindMainCamera(Mb.frameGraph);
        !Hb && Mb.cameras.length > 0 && (Hb = Mb.cameras[0]), Hb && (eb.setRenderCamera(Hb), eb.utilityLayerScene.activeCamera = Hb);
        const pb = Mb.onAfterRenderObservable.add((() => {
          eb.render()
        }));
        return eb.utilityLayerScene.vJ.addOnce((() => {
          Mb.onAfterRenderObservable.remove(pb)
        })), eb
      }
    };
    let Wb = null;

    function Jb(bb, wb, Mb, eb) {
      let Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        pb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Vb = arguments.length > 6 ? arguments[6] : void 0,
        gb = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        lb = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
      const {
        height: Lb,
        width: Ib
      } = qb(bb, wb, Mb);
      if (!Lb || !Ib) return void Ub.b.Error("Invalid 'size' parameter !");
      const Ob = wb.RJ();
      let Cb = Ob.activeCamera !== wb;
      if (Ob.frameGraph) {
        const bb = Ab.FindMainObjectRenderer(Ob.frameGraph);
        bb && (Cb = bb.camera !== wb)
      }
      Cb ? vb(bb, wb, Mb, (bb => {
        if (pb) {
          const wb = new Blob([bb]);
          tb.e.DownloadBlob(wb), eb && eb("")
        } else eb && eb(bb)
      }), Hb, 1, bb.getCreationOptions().antialias, void 0, void 0, void 0, void 0, Vb) : bb.onEndFrameObservable.addOnce((() => {
        Wb || (Wb = document.createElement("canvas")), Wb.width = Ib, Wb.height = Lb;
        const wb = Wb.getContext("2d"),
          Mb = bb.getRenderingCanvas();
        if (!wb || !Mb) return void Ub.b.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
        const Cb = Mb.width,
          Eb = Mb.height,
          Fb = Wb.width,
          Bb = Wb.height,
          sb = Fb / Cb,
          mb = Bb / Eb,
          hb = gb ? Math.max(sb, mb) : Math.min(sb, mb),
          zb = Cb * hb,
          Xb = Eb * hb,
          xb = (Fb - zb) / 2,
          jb = (Bb - Xb) / 2;
        wb.save(), wb.fillStyle = lb ? Ob.clearColor.toHexString() : "rgba(0, 0, 0, 0)", wb.fillRect(0, 0, Ib, Lb), wb.restore(), wb.drawImage(Mb, 0, 0, Cb, Eb, xb, jb, zb, Xb), pb ? (tb.e.EncodeScreenshotCanvasData(Wb, void 0, Hb, void 0, Vb), eb && eb("")) : tb.e.EncodeScreenshotCanvasData(Wb, eb, Hb, void 0, Vb)
      }))
    }
    async function Sb(bb, wb, Mb) {
      let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Hb = arguments.length > 4 ? arguments[4] : void 0,
        pb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Vb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        gb = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      return await new Promise(((lb, Lb) => {
        Jb(bb, wb, Mb, (bb => {
          "undefined" !== typeof bb ? lb(bb) : Lb(new Error("Data is undefined"))
        }), eb, gb, Hb, pb, Vb)
      }))
    }
    async function Nb(bb, wb, Mb, eb) {
      let Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        pb = arguments.length > 5 ? arguments[5] : void 0,
        Vb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return await new Promise((gb => {
        Jb(bb, wb, {
          width: Mb,
          height: eb
        }, (() => {
          gb()
        }), Hb, !0, pb, Vb)
      }))
    }

    function vb(bb, wb, pb, Vb) {
      let gb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        lb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
        Lb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Ib = arguments.length > 7 ? arguments[7] : void 0,
        tb = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Bb = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        sb = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
        mb = arguments.length > 11 ? arguments[11] : void 0,
        hb = arguments.length > 12 ? arguments[12] : void 0,
        zb = arguments.length > 13 ? arguments[13] : void 0,
        Xb = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
        xb = arguments.length > 15 ? arguments[15] : void 0;
      const jb = wb.RJ();
      if (jb.frameGraph) return void Gb(jb.frameGraph, wb, pb, gb, lb, Lb, Ib, mb, zb, !Vb).then((bb => {
        Vb && Vb(bb)
      }));
      const {
        height: Kb,
        width: rb,
        finalWidth: Rb,
        finalHeight: Db
      } = qb(bb, wb, pb), cb = {
        width: rb,
        height: Kb
      };
      if (!Kb || !rb) return void Ub.b.Error("Invalid 'size' parameter !");
      bb.skipFrameRender = !0;
      const Yb = bb.getRenderWidth,
        Zb = bb.getRenderHeight;
      bb.getRenderWidth = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && bb._currentRenderTarget ? bb._currentRenderTarget.width : rb
      }, bb.getRenderHeight = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && bb._currentRenderTarget ? bb._currentRenderTarget.height : Kb
      }, bb.onResizeObservable.hasObservers() && bb.onResizeObservable.notifyObservers(bb);
      const fb = new Hb.b("screenShot", cb, jb, !1, !1, 0, !1, eb.f.BILINEAR_SAMPLINGMODE, void 0, Bb, void 0, void 0, void 0, lb);
      fb.renderList = jb.meshes.slice(), fb.samples = lb, fb.renderSprites = tb, fb.activeCamera = wb, fb.forceLayerMaskCheck = sb, hb?.(fb);
      const Ab = zb || Cb.DumpData,
        Wb = () => {
          jb.incrementRenderId(), jb.resetCachedMaterial(), (0, Fb.e)((() => fb.isReadyForRendering() && wb.isReady(!0)), (() => {
            bb.onEndFrameObservable.addOnce((() => {
              Rb === rb && Db === Kb ? fb.readPixels(void 0, void 0, void 0, !1).then((bb => {
                Ab(rb, Kb, bb, Vb, gb, Ib, !0, void 0, mb), fb.dispose()
              })) : (bb.isWebGPU ? Mb.e(689).then((() => Mb(64582))) : Mb.e(690).then((() => Mb(64585)))).then((async () => await (0, Eb.c)("pass", fb.getInternalTexture(), jb, void 0, void 0, void 0, Rb, Db).then((wb => {
                bb._readTexturePixels(wb, Rb, Db, -1, 0, null, !0, !1, 0, 0).then((bb => {
                  Ab(Rb, Db, bb, Vb, gb, Ib, !0, void 0, mb), wb.dispose()
                }))
              }))))
            })), jb.incrementRenderId(), jb.resetCachedMaterial();
            const eb = jb.activeCamera,
              Hb = jb.activeCameras,
              pb = wb.outputRenderTarget,
              lb = jb.spritesEnabled;
            jb.activeCamera = wb, jb.activeCameras = null, wb.outputRenderTarget = fb, jb.spritesEnabled = tb;
            const Lb = jb.meshes;
            jb.meshes = fb.renderList || jb.meshes;
            try {
              jb.render()
            } finally {
              jb.activeCamera = eb, jb.activeCameras = Hb, wb.outputRenderTarget = pb, jb.spritesEnabled = lb, jb.meshes = Lb, bb.getRenderWidth = Yb, bb.getRenderHeight = Zb, bb.onResizeObservable.hasObservers() && bb.onResizeObservable.notifyObservers(bb), wb.getProjectionMatrix(!0), bb.skipFrameRender = !1
            }
          }), (() => {
            bb.skipFrameRender = !1, bb.getRenderWidth = Yb, bb.getRenderHeight = Zb, xb?.()
          }), void 0, Xb)
        };
      if (Lb) {
        const bb = new Ob("antialiasing", 1, jb.activeCamera);
        fb.addPostProcess(bb), bb.autoClear = !0, bb.onEffectCreatedObservable.addOnce((bb => {
          bb.isReady() ? Wb() : bb.onCompiled = () => {
            Wb()
          }
        }))
      } else Wb()
    }
    async function Qb(bb, wb, Mb) {
      let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        pb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Vb = arguments.length > 6 ? arguments[6] : void 0,
        gb = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        lb = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Lb = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
        Ib = arguments.length > 10 ? arguments[10] : void 0,
        Ob = arguments.length > 11 ? arguments[11] : void 0,
        Ub = arguments.length > 12 ? arguments[12] : void 0;
      return await new Promise(((tb, Cb) => {
        vb(bb, wb, Mb, (bb => {
          "undefined" !== typeof bb ? tb(bb) : Cb(new Error("Data is undefined"))
        }), eb, Hb, pb, Vb, gb, lb, Lb, Ib, Ob, Ub)
      }))
    }
    async function Gb(bb, wb, Mb) {
      let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        pb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Vb = arguments.length > 6 ? arguments[6] : void 0,
        gb = arguments.length > 7 ? arguments[7] : void 0,
        lb = arguments.length > 8 ? arguments[8] : void 0,
        Lb = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        Ib = arguments.length > 10 ? arguments[10] : void 0;
      const Ob = bb.engine,
        Ub = bb.textureManager,
        {
          height: tb,
          width: Eb,
          finalWidth: Fb,
          finalHeight: sb
        } = qb(Ob, wb, Mb),
        mb = {
          width: Eb,
          height: tb
        },
        hb = lb || Cb.DumpData,
        zb = bb.tasks,
        Xb = zb.length,
        xb = bb.pausedExecution,
        Kb = Ob.getCaps().parallelShaderCompile;
      Ub.setBackBufferTextures(0, 0, {
        size: mb,
        options: {
          createMipMaps: !1,
          samples: Hb,
          types: [0],
          formats: [5],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot color"]
        },
        sizeIsPercentage: !1
      }, {
        size: mb,
        options: {
          createMipMaps: !1,
          samples: Hb,
          types: [0],
          formats: [Ob.isStencilEnable ? 13 : 14],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot depth"]
        },
        sizeIsPercentage: !1
      });
      let Rb = Bb;
      if (pb) {
        const wb = new jb("fxaa", bb);
        wb.sourceTexture = Rb, Rb = wb.outputTexture, bb.addTask(wb)
      }
      if (Fb !== Eb || sb !== tb) {
        const wb = new rb("pass", bb);
        wb.sourceTexture = Rb, wb.targetTexture = bb.textureManager.createRenderTargetTexture("pass_output", {
          size: {
            width: Fb,
            height: sb
          },
          options: {
            createMipMaps: !1,
            types: [0],
            formats: [5],
            samples: 1,
            labels: ["screenshot_final_texture"],
            useSRGBBuffers: [!1]
          },
          sizeIsPercentage: !1
        }), Rb = wb.outputTexture, bb.addTask(wb)
      }
      const Db = Ab.FindMainObjectRenderer(bb);
      let cb = null;
      Db && (cb = Db.camera, Db.camera = wb), Ob.getCaps().parallelShaderCompile = void 0, await bb.buildAsync();
      const Yb = Ib ?? (Ub.hasHistoryTextures ? 32 : 1);
      for (let Cb = 0; Cb < Yb; ++Cb) bb.execute();
      bb.pausedExecution = !0, Ob.getCaps().parallelShaderCompile = Kb;
      for (let Cb = Xb; Cb < zb.length; ++Cb) bb.tasks[Cb].dispose();
      bb.tasks.length = Xb, Db && cb && (Db.camera = cb);
      const Zb = bb.textureManager.getTextureFromHandle(Rb);
      return Zb.incrementReferences(), Ub.resetBackBufferTextures(), await bb.buildAsync(), bb.pausedExecution = xb, new Promise((bb => {
        Ob._readTexturePixels(Zb, Fb, sb, -1, 0, null, !0, !1, 0, 0).then((async wb => {
          Zb.dispose(), hb(Fb, sb, wb, Lb ? void 0 : wb => bb(wb), eb, Vb, !0, void 0, gb), Lb && bb(null)
        }))
      }))
    }

    function qb(bb, wb, Mb) {
      let eb = 0,
        Hb = 0,
        pb = 0,
        Vb = 0;
      if ("object" === typeof Mb) {
        const gb = Mb.precision ? Math.abs(Mb.precision) : 1;
        Mb.width && Mb.height ? (eb = Mb.height * gb, Hb = Mb.width * gb) : Mb.width && !Mb.height ? (Hb = Mb.width * gb, eb = Math.round(Hb / bb.getAspectRatio(wb))) : Mb.height && !Mb.width ? (eb = Mb.height * gb, Hb = Math.round(eb * bb.getAspectRatio(wb))) : (Hb = Math.round(bb.getRenderWidth() * gb), eb = Math.round(Hb / bb.getAspectRatio(wb))), Mb.finalWidth && Mb.finalHeight ? (Vb = Mb.finalHeight, pb = Mb.finalWidth) : Mb.finalWidth && !Mb.finalHeight ? (pb = Mb.finalWidth, Vb = Math.round(pb / bb.getAspectRatio(wb))) : Mb.finalHeight && !Mb.finalWidth ? (Vb = Mb.finalHeight, pb = Math.round(Vb * bb.getAspectRatio(wb))) : (pb = Hb, Vb = eb)
      } else isNaN(Mb) || (eb = Mb, Hb = Mb, pb = Mb, Vb = Mb);
      return Hb && (Hb = Math.floor(Hb)), eb && (eb = Math.floor(eb)), pb && (pb = Math.floor(pb)), Vb && (Vb = Math.floor(Vb)), {
        height: 0 | eb,
        width: 0 | Hb,
        finalWidth: 0 | pb,
        finalHeight: 0 | Vb
      }
    }
    const ab = {
      CreateScreenshot: Jb,
      CreateScreenshotAsync: Sb,
      CreateScreenshotWithResizeAsync: Nb,
      CreateScreenshotUsingRenderTarget: vb,
      CreateScreenshotUsingRenderTargetAsync: Qb,
      CreateScreenshotForFrameGraphAsync: Gb
    };
    let ib = !1;

    function ub() {
      if (ib) return;
      ib = !0;
      tb.e.CreateScreenshot = Jb, tb.e.CreateScreenshotAsync = Sb, tb.e.CreateScreenshotUsingRenderTarget = vb, tb.e.CreateScreenshotUsingRenderTargetAsync = Qb
    }
    ub()
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);