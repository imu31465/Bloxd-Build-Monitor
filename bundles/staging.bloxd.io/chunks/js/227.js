export const id = 227;
export const ids = [227, 228];
export const modules = {
  39024: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => ST,
      g: () => LT
    });
    var iT = IT(38764),
      zT = IT(38773),
      kT = IT(36118),
      WT = IT(36177),
      XT = IT(39031),
      BT = IT(38994),
      FT = IT(36166);
    let ST = (() => {
        var TT;
        let oT, IT, BT = XT.b,
          FT = [],
          ST = [],
          DT = [],
          LT = [];
        return TT = class extends BT {
          constructor(TT, oT, IT, zT) {
            super(TT, IT, zT), this.groundColor = (0, iT.j)(this, FT, new WT.e(0, 0, 0)), this.direction = ((0, iT.j)(this, ST), (0, iT.j)(this, DT, void 0)), (0, iT.j)(this, LT), this.direction = oT || kT.m.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(TT) {
            return this.direction = kT.m.Normalize(TT.subtract(kT.m.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(TT, oT) {
            const IT = kT.m.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", IT.x, IT.y, IT.z, 0, oT), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), oT), this
          }
          transferToNodeMaterialEffect(TT, oT) {
            const IT = kT.m.Normalize(this.direction);
            return TT.setFloat3(oT, IT.x, IT.y, IT.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = kT.b.Identity()), this._worldMatrix
          }
          getTypeID() {
            return XT.b.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(TT, oT) {
            TT["HEMILIGHT" + oT] = !0
          }
        }, (() => {
          const kT = "function" === typeof Symbol && Symbol.metadata ? Object.create(BT[Symbol.metadata] ?? null) : void 0;
          oT = [(0, zT.q)()], IT = [(0, zT.M)()], (0, iT.h)(null, null, oT, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: TT => "groundColor" in TT,
              get: TT => TT.groundColor,
              set: (TT, oT) => {
                TT.groundColor = oT
              }
            },
            metadata: kT
          }, FT, ST), (0, iT.h)(null, null, IT, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: TT => "direction" in TT,
              get: TT => TT.direction,
              set: (TT, oT) => {
                TT.direction = oT
              }
            },
            metadata: kT
          }, DT, LT), kT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: kT
          })
        })(), TT
      })(),
      DT = !1;

    function LT() {
      DT || (DT = !0, BT.c.AddNodeConstructor("Light_Type_3", ((TT, oT) => () => new ST(TT, kT.m.Zero(), oT))), (0, FT.h)("BABYLON.HemisphericLight", ST))
    }
  },
  36710: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => zT
    });
    var iT = IT(36717);
    class zT {
      static GetPlanes(TT) {
        const oT = [];
        for (let IT = 0; IT < 6; IT++) oT.push(new iT.b(0, 0, 0, 0));
        return zT.GetPlanesToRef(TT, oT), oT
      }
      static GetNearPlaneToRef(TT, oT) {
        const IT = TT.m;
        oT.normal.x = IT[3] + IT[2], oT.normal.y = IT[7] + IT[6], oT.normal.z = IT[11] + IT[10], oT.d = IT[15] + IT[14], oT.normalize()
      }
      static GetFarPlaneToRef(TT, oT) {
        const IT = TT.m;
        oT.normal.x = IT[3] - IT[2], oT.normal.y = IT[7] - IT[6], oT.normal.z = IT[11] - IT[10], oT.d = IT[15] - IT[14], oT.normalize()
      }
      static GetLeftPlaneToRef(TT, oT) {
        const IT = TT.m;
        oT.normal.x = IT[3] + IT[0], oT.normal.y = IT[7] + IT[4], oT.normal.z = IT[11] + IT[8], oT.d = IT[15] + IT[12], oT.normalize()
      }
      static GetRightPlaneToRef(TT, oT) {
        const IT = TT.m;
        oT.normal.x = IT[3] - IT[0], oT.normal.y = IT[7] - IT[4], oT.normal.z = IT[11] - IT[8], oT.d = IT[15] - IT[12], oT.normalize()
      }
      static GetTopPlaneToRef(TT, oT) {
        const IT = TT.m;
        oT.normal.x = IT[3] - IT[1], oT.normal.y = IT[7] - IT[5], oT.normal.z = IT[11] - IT[9], oT.d = IT[15] - IT[13], oT.normalize()
      }
      static GetBottomPlaneToRef(TT, oT) {
        const IT = TT.m;
        oT.normal.x = IT[3] + IT[1], oT.normal.y = IT[7] + IT[5], oT.normal.z = IT[11] + IT[9], oT.d = IT[15] + IT[13], oT.normalize()
      }
      static GetPlanesToRef(TT, oT) {
        zT.GetNearPlaneToRef(TT, oT[0]), zT.GetFarPlaneToRef(TT, oT[1]), zT.GetLeftPlaneToRef(TT, oT[2]), zT.GetRightPlaneToRef(TT, oT[3]), zT.GetTopPlaneToRef(TT, oT[4]), zT.GetBottomPlaneToRef(TT, oT[5])
      }
      static IsPointInFrustum(TT, oT) {
        for (let IT = 0; IT < 6; IT++)
          if (oT[IT].dotCoordinate(TT) < 0) return !1;
        return !0
      }
    }
  },
  36717: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => zT
    });
    var iT = IT(36118);
    class zT {
      constructor(TT, oT, IT, zT) {
        this.normal = new iT.m(TT, oT, IT), this.d = zT
      }
      bIT() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new zT(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let TT = this.normal.getHashCode();
        return TT = 397 * TT ^ this.d, TT
      }
      normalize() {
        const TT = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let oT = 0;
        return 0 !== TT && (oT = 1 / TT), this.normal.x *= oT, this.normal.y *= oT, this.normal.z *= oT, this.d *= oT, this
      }
      transform(TT) {
        const oT = zT._TmpMatrix;
        TT.invertToRef(oT);
        const IT = oT.m,
          iT = this.normal.x,
          kT = this.normal.y,
          WT = this.normal.z,
          XT = this.d,
          BT = iT * IT[0] + kT * IT[1] + WT * IT[2] + XT * IT[3],
          FT = iT * IT[4] + kT * IT[5] + WT * IT[6] + XT * IT[7],
          ST = iT * IT[8] + kT * IT[9] + WT * IT[10] + XT * IT[11],
          DT = iT * IT[12] + kT * IT[13] + WT * IT[14] + XT * IT[15];
        return new zT(BT, FT, ST, DT)
      }
      dotCoordinate(TT) {
        return this.normal.x * TT.x + this.normal.y * TT.y + this.normal.z * TT.z + this.d
      }
      copyFromPoints(TT, oT, IT) {
        const iT = oT.x - TT.x,
          zT = oT.y - TT.y,
          kT = oT.z - TT.z,
          WT = IT.x - TT.x,
          XT = IT.y - TT.y,
          BT = IT.z - TT.z,
          FT = zT * BT - kT * XT,
          ST = kT * WT - iT * BT,
          DT = iT * XT - zT * WT,
          LT = Math.sqrt(FT * FT + ST * ST + DT * DT);
        let xT;
        return xT = 0 !== LT ? 1 / LT : 0, this.normal.x = FT * xT, this.normal.y = ST * xT, this.normal.z = DT * xT, this.d = -(this.normal.x * TT.x + this.normal.y * TT.y + this.normal.z * TT.z), this
      }
      isFrontFacingTo(TT, oT) {
        return iT.m.Dot(this.normal, TT) <= oT
      }
      signedDistanceTo(TT) {
        return iT.m.Dot(TT, this.normal) + this.d
      }
      static FromArray(TT) {
        return new zT(TT[0], TT[1], TT[2], TT[3])
      }
      static FromPoints(TT, oT, IT) {
        const iT = new zT(0, 0, 0, 0);
        return iT.copyFromPoints(TT, oT, IT), iT
      }
      static FromPositionAndNormal(TT, oT) {
        const IT = new zT(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(TT, oT, IT)
      }
      static FromPositionAndNormalToRef(TT, oT, IT) {
        return IT.normal.SIT(oT), IT.normal.normalize(), IT.d = -TT.dot(IT.normal), IT
      }
      static SignedDistanceToPlaneFromPositionAndNormal(TT, oT, IT) {
        const zT = -(oT.x * TT.x + oT.y * TT.y + oT.z * TT.z);
        return iT.m.Dot(IT, oT) + zT
      }
    }
    zT._TmpMatrix = iT.b.Identity()
  },
  37105: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => iT
    });
    class iT {
      constructor(TT, oT, IT, iT) {
        this.x = TT, this.y = oT, this.width = IT, this.height = iT
      }
      toGlobal(TT, oT) {
        return new iT(this.x * TT, this.y * oT, this.width * TT, this.height * oT)
      }
      toGlobalToRef(TT, oT, IT) {
        return IT.x = this.x * TT, IT.y = this.y * oT, IT.width = this.width * TT, IT.height = this.height * oT, this
      }
      clone() {
        return new iT(this.x, this.y, this.width, this.height)
      }
    }
  },
  37658: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => kT
    });
    var iT = IT(37660);
    const zT = (TT, oT, IT) => TT ? TT.getClassName && "Mesh" === TT.getClassName() ? null : !TT.getClassName || "SubMesh" !== TT.getClassName() && "PhysicsBody" !== TT.getClassName() ? TT.clone ? TT.clone() : Array.isArray(TT) ? TT.slice() : IT && "object" === typeof TT ? {
      ...TT
    } : null : TT.clone(oT) : null;
    class kT {
      static DeepCopy(TT, oT, IT, kT) {
        let WT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const XT = function(TT) {
          const oT = [];
          do {
            const IT = Object.getOwnPropertyNames(TT);
            for (const TT of IT) - 1 === oT.indexOf(TT) && oT.push(TT)
          } while (TT = Object.getPrototypeOf(TT));
          return oT
        }(TT);
        for (const FT of XT) {
          if ("_" === FT[0] && (!kT || -1 === kT.indexOf(FT))) continue;
          if (FT.endsWith("Observable")) continue;
          if (IT && -1 !== IT.indexOf(FT)) continue;
          const XT = TT[FT],
            ST = typeof XT;
          if ("function" !== ST) try {
            if ("object" === ST)
              if (XT instanceof Uint8Array) oT[FT] = Uint8Array.from(XT);
              else if (XT instanceof Array) {
              if (oT[FT] = [], XT.length > 0)
                if ("object" == typeof XT[0])
                  for (let TT = 0; TT < XT.length; TT++) {
                    const IT = zT(XT[TT], oT, WT); - 1 === oT[FT].indexOf(IT) && oT[FT].push(IT)
                  } else oT[FT] = XT.slice(0)
            } else oT[FT] = zT(XT, oT, WT);
            else oT[FT] = XT
          } catch (BT) {
            iT.d.Warn(BT.message)
          }
        }
      }
    }
  },
  36851: (TT, oT, IT) => {
    function iT() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (TT => {
        const oT = 16 * Math.random() | 0;
        return ("x" === TT ? oT : 3 & oT | 8).toString(16)
      }))
    }
    IT.d(oT, {
      e: () => iT
    })
  },
  37660: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => iT
    });
    class iT {
      static _CheckLimit(TT, oT) {
        let IT = iT._LogLimitOutputs[TT];
        return IT ? IT.current++ : (IT = {
          limit: oT,
          current: 1
        }, iT._LogLimitOutputs[TT] = IT), IT.current <= IT.limit
      }
      static _GenerateLimitMessage(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const IT = iT._LogLimitOutputs[TT];
        if (!IT || !iT.MessageLimitReached) return;
        const zT = this._Levels[oT];
        IT.current === IT.limit && iT[zT.name](iT.MessageLimitReached.replace(/%LIMIT%/g, "" + IT.limit).replace(/%TYPE%/g, zT.name ?? ""))
      }
      static _AddLogEntry(TT) {
        iT._LogCache = TT + iT._LogCache, iT.OnNewCacheEntry && iT.OnNewCacheEntry(TT)
      }
      static _FormatMessage(TT) {
        const oT = TT => TT < 10 ? "0" + TT : "" + TT,
          IT = new Date;
        return "[" + oT(IT.getHours()) + ":" + oT(IT.getMinutes()) + ":" + oT(IT.getSeconds()) + "]: " + TT
      }
      static _LogDisabled(TT, oT) {}
      static _LogEnabled() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          oT = arguments.length > 1 ? arguments[1] : void 0,
          IT = arguments.length > 2 ? arguments[2] : void 0;
        const zT = Array.isArray(oT) ? oT[0] : oT;
        if (void 0 !== IT && !iT._CheckLimit(zT, IT)) return;
        const kT = iT._FormatMessage(zT),
          WT = this._Levels[TT],
          XT = Array.isArray(oT) ? oT.slice(1) : [];
        WT.logFunc && WT.logFunc("BJS - " + kT, ...XT);
        const BT = `<div style='color:${WT.color}'>${kT}</div><br>`;
        iT._AddLogEntry(BT), iT._GenerateLimitMessage(zT, TT)
      }
      static get LogCache() {
        return iT._LogCache
      }
      static ClearLogCache() {
        iT._LogCache = "", iT._LogLimitOutputs = {}, iT.errorsCount = 0
      }
      static set LogLevels(TT) {
        iT.Log = iT._LogDisabled, iT.Warn = iT._LogDisabled, iT.Error = iT._LogDisabled;
        const oT = [iT.MessageLogLevel, iT.WarningLogLevel, iT.ErrorLogLevel];
        for (const IT of oT)
          if ((TT & IT) === IT) {
            const TT = this._Levels[IT];
            iT[TT.name] = iT._LogEnabled.bind(iT, IT)
          }
      }
    }
    iT.NoneLogLevel = 0, iT.MessageLogLevel = 1, iT.WarningLogLevel = 2, iT.ErrorLogLevel = 4, iT.AllLogLevel = 7, iT.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", iT._LogCache = "", iT._LogLimitOutputs = {}, iT._Levels = [{}, {
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
    }], iT.errorsCount = 0, iT.Log = iT._LogEnabled.bind(iT, iT.MessageLogLevel), iT.Warn = iT._LogEnabled.bind(iT, iT.WarningLogLevel), iT.Error = iT._LogEnabled.bind(iT, iT.ErrorLogLevel)
  },
  59998: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      CreateScreenshot: () => QT,
      CreateScreenshotAsync: () => OT,
      CreateScreenshotForFrameGraphAsync: () => ZT,
      CreateScreenshotUsingRenderTarget: () => nT,
      CreateScreenshotUsingRenderTargetAsync: () => qT,
      CreateScreenshotWithResizeAsync: () => HT,
      RegisterScreenshotTools: () => GT,
      ScreenshotTools: () => sT
    });
    var iT = IT(39270),
      zT = IT(40635),
      kT = IT(40618),
      WT = IT(38799),
      XT = IT(40626),
      BT = IT(36146),
      FT = IT(36118);
    class ST extends XT.d {
      static _GetDefines(TT) {
        if (!TT) return null;
        return TT.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
      }
      _gatherImports(TT, oT) {
        TT ? (this._webGPUReady = !0, oT.push(Promise.all([IT.e(367).then((() => IT(60373))), IT.e(368).then((() => IT(60375)))]))) : oT.push(Promise.all([IT.e(369).then((() => IT(60378))), IT.e(370).then((() => IT(60385)))]))
      }
      constructor(TT) {
        const oT = {
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: TT,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || BT.d.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          vertexShader: ST.VertexUrl,
          fragmentShader: ST.FragmentUrl,
          uniforms: ST.Uniforms
        };
        super({
          ...oT,
          defines: ST._GetDefines(oT.engine)
        }), this.texelSize = new FT.j(0, 0)
      }
      bind() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.bind(TT), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
      }
    }
    ST.VertexUrl = "fxaa", ST.FragmentUrl = "fxaa", ST.Uniforms = ["texelSize"];
    class DT extends kT.e {
      getClassName() {
        return "FxaaPostProcess"
      }
      constructor(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          zT = arguments.length > 3 ? arguments[3] : void 0,
          kT = arguments.length > 4 ? arguments[4] : void 0,
          WT = arguments.length > 5 ? arguments[5] : void 0,
          XT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const BT = {
          uniforms: ST.Uniforms,
          size: "number" === typeof oT ? oT : void 0,
          camera: IT,
          samplingMode: zT || iT.g.BILINEAR_SAMPLINGMODE,
          engine: kT,
          reusable: WT,
          textureType: XT,
          ...oT
        };
        super(TT, ST.FragmentUrl, {
          effectWrapper: "number" !== typeof oT && oT.effectWrapper ? void 0 : new ST(TT, kT, BT),
          ...BT
        }), this.onApplyObservable.add((TT => {
          this._effectWrapper.texelSize = this.texelSize
        }))
      }
      static _Parse(TT, oT, IT, iT) {
        return WT.c.Parse((() => new DT(TT.name, TT.options, oT, TT.renderTargetSamplingMode, IT.Zc(), TT.reusable)), TT, IT, iT)
      }
    }
    var LT = IT(37660),
      xT = IT(38886),
      cT = IT(40639),
      KT = IT(40631),
      MT = IT(38653);
    const rT = 0;
    class AT {
      constructor(TT, oT, IT) {
        this.name = TT, this._parentTask = oT, this._context = IT, this.disabled = !1
      }
      setInitializeFunc(TT) {
        this._initFunc = TT
      }
      setExecuteFunc(TT) {
        this._executeFunc = TT
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
    class gT extends AT {
      static IsObjectListPass(TT) {
        return void 0 !== TT.setObjectList
      }
      get objectList() {
        return this._objectList
      }
      setObjectList(TT) {
        this._objectList = TT
      }
      constructor(TT, oT, IT, iT) {
        super(TT, oT, IT), this._engine = iT
      }
      _isValid() {
        const TT = super._isValid();
        return TT || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
      }
    }
    class hT extends AT {
      static IsRenderPass(TT) {
        return void 0 !== TT.setRenderTarget
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
      constructor(TT, oT, IT, iT) {
        super(TT, oT, IT), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = iT
      }
      setRenderTarget(TT) {
        this._renderTarget = TT
      }
      setRenderTargetDepth(TT) {
        this._renderTargetDepth = TT
      }
      addDependencies(TT) {
        if (void 0 !== TT)
          if (Array.isArray(TT))
            for (const oT of TT) this._dependencies.add(oT);
          else this._dependencies.add(TT)
      }
      collectDependencies(TT) {
        const oT = this._dependencies.keys();
        for (let IT = oT.next(); !0 !== IT.done; IT = oT.next()) TT.add(IT.value);
        if (void 0 !== this._renderTarget)
          if (Array.isArray(this._renderTarget))
            for (const IT of this._renderTarget) void 0 !== IT && TT.add(IT);
          else TT.add(this._renderTarget);
        void 0 !== this._renderTargetDepth && TT.add(this._renderTargetDepth)
      }
      setOutputLayerAndFaceIndices(TT) {
        const oT = this.frameGraphRenderTarget.renderTargetWrapper;
        if (oT)
          for (const IT of TT) oT.setLayerAndFaceIndex(IT.targetIndex, IT.layerIndex, IT.faceIndex)
      }
      _initialize() {
        this._frameGraphRenderTarget = this._context.createRenderTarget(this.name, this._renderTarget, this._renderTargetDepth, this.depthReadOnly, this.stencilReadOnly), super._initialize()
      }
      _execute() {
        this._context.bindRenderTarget(this._frameGraphRenderTarget), super._execute(), this._context.restoreDefaultFramebuffer()
      }
      _isValid() {
        const TT = super._isValid();
        return TT || (void 0 !== this._renderTarget || void 0 !== this.renderTargetDepth ? null : "Render target and render target depth cannot both be undefined.")
      }
      _dispose() {
        this._frameGraphRenderTarget?.dispose()
      }
    }
    var wT = IT(36149);
    class mT {
      get name() {
        return this._name
      }
      set name(TT) {
        this._name = TT
      }
      get disabled() {
        return this._disabled
      }
      set disabled(TT) {
        this._disabled = TT
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
      constructor(TT, oT) {
        this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new wT.d, this.onBeforeTaskExecute = new wT.d, this.onAfterTaskExecute = new wT.d, this.name = TT, this._frameGraph = oT, this._reset()
      }
      _reset() {
        for (const TT of this._passes) TT._dispose();
        for (const TT of this._passesDisabled) TT._dispose();
        this._passes.length = 0, this._passesDisabled.length = 0
      }
      _addPass(TT, oT) {
        oT ? this._passesDisabled.push(TT) : this._passes.push(TT)
      }
      _checkTask() {
        let TT, oT = null,
          IT = null;
        for (const XT of this._passes) {
          const iT = XT._isValid();
          if (iT) throw new Error(`Pass "${XT.name}" is not valid. ${iT}`);
          if (hT.IsRenderPass(XT)) {
            const TT = Array.isArray(XT.renderTarget) ? XT.renderTarget : [XT.renderTarget];
            oT = [];
            for (const IT of TT) void 0 !== IT && oT.push(this._frameGraph.textureManager.getTextureFromHandle(IT));
            IT = void 0 !== XT.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(XT.renderTargetDepth) : null
          } else gT.IsObjectListPass(XT) && (TT = XT.objectList)
        }
        let iT, zT = null,
          kT = [],
          WT = null;
        for (const XT of this._passesDisabled) {
          const TT = XT._isValid();
          if (TT) throw new Error(`Pass "${XT.name}" is not valid. ${TT}`);
          if (hT.IsRenderPass(XT)) {
            const TT = Array.isArray(XT.renderTarget) ? XT.renderTarget : [XT.renderTarget];
            zT = [];
            for (const oT of TT) void 0 !== oT && zT.push(this._frameGraph.textureManager.getTextureFromHandle(oT));
            kT = TT, WT = void 0 !== XT.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(XT.renderTargetDepth) : null
          } else gT.IsObjectListPass(XT) && (iT = XT.objectList)
        }
        if (this._passesDisabled.length > 0) {
          if (!this._checkSameRenderTarget(oT, zT)) {
            let TT = !0;
            for (const oT of kT)
              if (void 0 !== oT && !this._frameGraph.textureManager.isHistoryTexture(oT)) {
                TT = !1;
                break
              } if (!TT) throw new Error(`The output texture of the task "${this.name}" is different when it is enabled or disabled.`)
          }
          if (IT !== WT && null !== WT) throw new Error(`The output depth texture of the task "${this.name}" is different when it is enabled or disabled.`);
          if (TT !== iT && null !== iT) throw new Error(`The output object list of the task "${this.name}" is different when it is enabled or disabled.`)
        }
      }
      _execute() {
        const TT = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
        this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const oT of TT) oT._execute()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
        this.onAfterTaskExecute.notifyObservers(this)
      }
      _initializePasses() {
        this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const TT of this._passes) TT._initialize();
          for (const TT of this._passesDisabled) TT._initialize()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
      }
      _checkSameRenderTarget(TT, oT) {
        if (null === TT || null === oT) return TT === oT;
        if (TT.length !== oT.length) return !1;
        for (let IT = 0; IT < TT.length; IT++)
          if (TT[IT] !== oT[IT]) return !1;
        return !0
      }
    }
    class eT extends mT {
      get alphaMode() {
        return this.postProcess.alphaMode
      }
      set alphaMode(TT) {
        this.postProcess.alphaMode = TT
      }
      get drawWrapper() {
        return this._postProcessDrawWrapper
      }
      constructor(TT, oT, IT) {
        super(TT, oT), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = IT, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture = this._frameGraph.textureManager.createDanglingHandle(), this.outputDepthAttachmentTexture = this._frameGraph.textureManager.createDanglingHandle()
      }
      isReady() {
        return this.postProcess.isReady()
      }
      getClassName() {
        return "FrameGraphPostProcessTask"
      }
      record() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          oT = arguments.length > 1 ? arguments[1] : void 0,
          IT = arguments.length > 2 ? arguments[2] : void 0;
        if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
        const iT = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
        if (iT && (iT.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, iT), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentTexture, this.depthAttachmentTexture), iT) {
          const TT = this._frameGraph.textureManager.getTextureAbsoluteDimensions(iT);
          this._sourceWidth = TT.width, this._sourceHeight = TT.height
        }
        const zT = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
        this._outputWidth = zT.size.width, this._outputHeight = zT.size.height;
        const kT = this._frameGraph.addRenderPass(this.name);
        if (kT.depthReadOnly = this.depthReadOnly, kT.stencilReadOnly = this.stencilReadOnly, kT.addDependencies(this.sourceTexture), kT.setRenderTarget(this.outputTexture), kT.setRenderTargetDepth(this.depthAttachmentTexture), kT.setExecuteFunc((TT => {
            TT.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && TT.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), oT?.(TT), this.viewport && TT.setViewport(this.viewport), TT.applyFullScreenEffect(this._postProcessDrawWrapper, (() => {
              void 0 !== this.sourceTexture && TT.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), IT?.(TT), this.postProcess.bind()
            }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), TT.restoreDefaultFramebuffer(), TT.popDebugGroup()
          })), !TT) {
          const TT = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
          TT.depthReadOnly = this.depthReadOnly, TT.stencilReadOnly = this.stencilReadOnly, TT.addDependencies(this.sourceTexture), TT.setRenderTarget(this.outputTexture), TT.setRenderTargetDepth(this.depthAttachmentTexture), TT.setExecuteFunc((TT => {
            void 0 !== this.sourceTexture && 0 === this.alphaMode && (this.viewport && TT.setViewport(this.viewport), TT.copyTexture(this.sourceTexture, void 0, void 0 !== this.viewport))
          }))
        }
        return kT
      }
      dispose() {
        this.postProcess.dispose(), super.dispose()
      }
    }
    class RT extends eT {
      constructor(TT, oT, IT) {
        super(TT, oT, IT || new ST(TT, oT.engine))
      }
      getClassName() {
        return "FrameGraphFXAATask"
      }
      record() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          oT = arguments.length > 1 ? arguments[1] : void 0,
          IT = arguments.length > 2 ? arguments[2] : void 0;
        const iT = super.record(TT, oT, IT);
        return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, iT
      }
    }
    var uT = IT(40637);
    class vT extends eT {
      constructor(TT, oT, IT) {
        super(TT, oT, IT || new uT.e(TT, oT.engine))
      }
      getClassName() {
        return "FrameGraphPassTask"
      }
    }
    var ET = IT(38882),
      fT = IT(38957),
      CT = IT(38918),
      jT = IT(39024),
      JT = IT(36177);
    class UT {
      getRenderCamera(TT) {
        if (this._renderCamera) return this._renderCamera;
        {
          let oT;
          return oT = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, TT && oT && oT.isRigCamera ? oT.rigParent : oT
        }
      }
      setRenderCamera(TT) {
        this._renderCamera = TT
      }
      _getSharedGizmoLight() {
        return this._sharedGizmoLight || (this._sharedGizmoLight = new jT.e("shared gizmo light", new FT.m(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = JT.e.Gray()), this._sharedGizmoLight
      }
      static get DefaultUtilityLayer() {
        return null == UT._DefaultUtilityLayer ? UT._CreateDefaultUtilityLayerFromScene(BT.d.LastCreatedScene) : UT._DefaultUtilityLayer
      }
      static _CreateDefaultUtilityLayerFromScene(TT) {
        return UT._DefaultUtilityLayer = new UT(TT), UT._DefaultUtilityLayer.originalScene.bC.addOnce((() => {
          UT._DefaultUtilityLayer = null
        })), UT._DefaultUtilityLayer
      }
      static get DefaultKeepDepthUtilityLayer() {
        return null == UT._DefaultKeepDepthUtilityLayer ? UT._CreateDefaultKeepUtilityLayerFromScene(BT.d.LastCreatedScene) : UT._DefaultKeepDepthUtilityLayer
      }
      static _CreateDefaultKeepUtilityLayerFromScene(TT) {
        return UT._DefaultKeepDepthUtilityLayer = new UT(TT), UT._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, UT._DefaultKeepDepthUtilityLayer.originalScene.bC.addOnce((() => {
          UT._DefaultKeepDepthUtilityLayer = null
        })), UT._DefaultKeepDepthUtilityLayer
      }
      constructor(TT) {
        let oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.originalScene = TT, this.handleEvents = oT, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.processAllEvents = !1, this.pickingEnabled = !0, this.onPointerOutObservable = new wT.d, this.utilityLayerScene = new ET.d(TT.Zc(), {
          virtual: !0,
          useFloatingOrigin: TT.floatingOriginMode
        }), this.utilityLayerScene.useRightHandedSystem = TT.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), oT && (this._originalPointerObserver = TT.onPrePointerObservable.add((oT => {
          if (!this.utilityLayerScene.activeCamera) return;
          if (!this.pickingEnabled) return;
          if (!this.processAllEvents && oT.type !== fT.c.POINTERMOVE && oT.type !== fT.c.POINTERUP && oT.type !== fT.c.POINTERDOWN && oT.type !== fT.c.POINTERDOUBLETAP) return;
          this.utilityLayerScene.pointerX = TT.pointerX, this.utilityLayerScene.pointerY = TT.pointerY;
          const IT = oT.event;
          if (TT.isPointerCaptured(IT.pointerId)) return void(this._pointerCaptures[IT.pointerId] = !1);
          const iT = IT => {
              let iT;
              if (oT.nearInteractionPickingInfo) iT = oT.nearInteractionPickingInfo.pickedMesh.pC() == IT ? oT.nearInteractionPickingInfo : new CT.d;
              else if (IT !== this.utilityLayerScene && oT.originalPickingInfo) iT = oT.originalPickingInfo;
              else {
                let zT = null;
                this._renderCamera && (zT = IT._activeCamera, IT._activeCamera = this._renderCamera, oT.ray = null), iT = oT.ray ? IT.pickWithRay(oT.ray) : IT.PL(TT.pointerX, TT.pointerY), zT && (IT._activeCamera = zT)
              }
              return iT
            },
            zT = iT(this.utilityLayerScene);
          if (!oT.ray && zT && (oT.ray = zT.ray), oT.originalPickingInfo?.aimTransform && zT && (zT.aimTransform = oT.originalPickingInfo.aimTransform, zT.gripTransform = oT.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(oT), this.onlyCheckPointerDownEvents && oT.type != fT.c.POINTERDOWN) return oT.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new fT.h(oT.type, oT.event, zT), oT.type), void(oT.type === fT.c.POINTERUP && this._pointerCaptures[IT.pointerId] && (this._pointerCaptures[IT.pointerId] = !1));
          if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) zT && zT.hit && (oT.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new fT.h(oT.type, oT.event, zT), oT.type), oT.skipOnPointerObservable = !0);
          else {
            const IT = iT(TT),
              kT = oT.event;
            IT && zT && (0 === zT.distance && IT.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(IT.pickedMesh) ? (this._notifyObservers(oT, IT, kT), oT.skipOnPointerObservable = !0) : oT.type === fT.c.POINTERDOWN ? (this._pointerCaptures[kT.pointerId] = !0, this._notifyObservers(oT, IT, kT)) : oT.type !== fT.c.POINTERMOVE && oT.type !== fT.c.POINTERUP || (this._lastPointerEvents[kT.pointerId] && (this.onPointerOutObservable.notifyObservers(kT.pointerId), delete this._lastPointerEvents[kT.pointerId]), this._notifyObservers(oT, IT, kT)) : !this._pointerCaptures[kT.pointerId] && (zT.distance < IT.distance || 0 === IT.distance) ? (this._notifyObservers(oT, zT, kT), oT.skipOnPointerObservable || (oT.skipOnPointerObservable = zT.distance > 0)) : !this._pointerCaptures[kT.pointerId] && zT.distance >= IT.distance && (this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(IT.pickedMesh) ? (this._notifyObservers(oT, IT, kT), oT.skipOnPointerObservable = !0) : (oT.type !== fT.c.POINTERMOVE && oT.type !== fT.c.POINTERUP || this._lastPointerEvents[kT.pointerId] && (this.onPointerOutObservable.notifyObservers(kT.pointerId), delete this._lastPointerEvents[kT.pointerId]), this._notifyObservers(oT, zT, kT))), oT.type === fT.c.POINTERUP && this._pointerCaptures[kT.pointerId] && (this._pointerCaptures[kT.pointerId] = !1))
          }
        })), this._originalPointerObserver && TT.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, IT || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((TT => {
          this.shouldRender && TT == this.getRenderCamera() && this.render()
        }))), this._sceneDisposeObserver = this.originalScene.bC.add((() => {
          this.dispose()
        })), this._updateCamera()
      }
      _notifyObservers(TT, oT, IT) {
        TT.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new fT.h(TT.type, TT.event, oT), TT.type), this._lastPointerEvents[IT.pointerId] = !0)
      }
      render() {
        if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
          const TT = this.utilityLayerScene.activeCamera.pC(),
            oT = this.utilityLayerScene.activeCamera;
          oT._scene = this.utilityLayerScene, oT.leftCamera && (oT.leftCamera._scene = this.utilityLayerScene), oT.rightCamera && (oT.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), oT._scene = TT, oT.leftCamera && (oT.leftCamera._scene = TT), oT.rightCamera && (oT.rightCamera._scene = TT)
        }
      }
      dispose() {
        this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.bC.remove(this._sceneDisposeObserver), this._originalPointerObserver && this.originalScene.onPrePointerObservable.remove(this._originalPointerObserver), this.utilityLayerScene.dispose()
      }
      _updateCamera() {
        this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
      }
    }
    UT._DefaultUtilityLayer = null, UT._DefaultKeepDepthUtilityLayer = null;
    const aT = {
      FindMainCamera: function(TT) {
        return TT.findMainCamera()
      },
      FindMainObjectRenderer: function(TT) {
        return TT.findMainObjectRenderer()
      },
      CreateUtilityLayerRenderer: function(TT) {
        let oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const IT = TT.NK,
          iT = new UT(IT, oT, !0);
        iT.utilityLayerScene.activeCamera = IT.activeCamera;
        let zT = aT.FindMainCamera(IT.frameGraph);
        !zT && IT.cameras.length > 0 && (zT = IT.cameras[0]), zT && (iT.setRenderCamera(zT), iT.utilityLayerScene.activeCamera = zT);
        const kT = IT.onAfterRenderObservable.add((() => {
          iT.render()
        }));
        return iT.utilityLayerScene.bC.addOnce((() => {
          IT.onAfterRenderObservable.remove(kT)
        })), iT
      }
    };
    let YT = null;

    function QT(TT, oT, IT, iT) {
      let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        kT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        WT = arguments.length > 6 ? arguments[6] : void 0,
        XT = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        BT = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
      const {
        height: FT,
        width: ST
      } = lT(TT, oT, IT);
      if (!FT || !ST) return void LT.d.Error("Invalid 'size' parameter !");
      const DT = oT.pC();
      let cT = DT.activeCamera !== oT;
      if (DT.frameGraph) {
        const TT = aT.FindMainObjectRenderer(DT.frameGraph);
        TT && (cT = TT.camera !== oT)
      }
      cT ? nT(TT, oT, IT, (TT => {
        if (kT) {
          const oT = new Blob([TT]);
          xT.i.DownloadBlob(oT), iT && iT("")
        } else iT && iT(TT)
      }), zT, 1, TT.getCreationOptions().antialias, void 0, void 0, void 0, void 0, WT) : TT.onEndFrameObservable.addOnce((() => {
        YT || (YT = document.createElement("canvas")), YT.width = ST, YT.height = FT;
        const oT = YT.getContext("2d"),
          IT = TT.getRenderingCanvas();
        if (!oT || !IT) return void LT.d.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
        const cT = IT.width,
          KT = IT.height,
          MT = YT.width,
          rT = YT.height,
          AT = MT / cT,
          gT = rT / KT,
          hT = XT ? Math.max(AT, gT) : Math.min(AT, gT),
          wT = cT * hT,
          mT = KT * hT,
          eT = (MT - wT) / 2,
          RT = (rT - mT) / 2;
        oT.save(), oT.fillStyle = BT ? DT.clearColor.toHexString() : "rgba(0, 0, 0, 0)", oT.fillRect(0, 0, ST, FT), oT.restore(), oT.drawImage(IT, 0, 0, cT, KT, eT, RT, wT, mT), kT ? (xT.i.EncodeScreenshotCanvasData(YT, void 0, zT, void 0, WT), iT && iT("")) : xT.i.EncodeScreenshotCanvasData(YT, iT, zT, void 0, WT)
      }))
    }
    async function OT(TT, oT, IT) {
      let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        zT = arguments.length > 4 ? arguments[4] : void 0,
        kT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        WT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        XT = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      return await new Promise(((BT, FT) => {
        QT(TT, oT, IT, (TT => {
          "undefined" !== typeof TT ? BT(TT) : FT(new Error("Data is undefined"))
        }), iT, XT, zT, kT, WT)
      }))
    }
    async function HT(TT, oT, IT, iT) {
      let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        kT = arguments.length > 5 ? arguments[5] : void 0,
        WT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return await new Promise((XT => {
        QT(TT, oT, {
          width: IT,
          height: iT
        }, (() => {
          XT()
        }), zT, !0, kT, WT)
      }))
    }

    function nT(TT, oT, kT, WT) {
      let XT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        BT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
        FT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        ST = arguments.length > 7 ? arguments[7] : void 0,
        xT = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        rT = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        AT = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
        gT = arguments.length > 11 ? arguments[11] : void 0,
        hT = arguments.length > 12 ? arguments[12] : void 0,
        wT = arguments.length > 13 ? arguments[13] : void 0,
        mT = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
        eT = arguments.length > 15 ? arguments[15] : void 0;
      const RT = oT.pC();
      if (RT.frameGraph) return void ZT(RT.frameGraph, oT, kT, XT, BT, FT, ST, gT, wT, !WT).then((TT => {
        WT && WT(TT)
      }));
      const {
        height: uT,
        width: vT,
        finalWidth: ET,
        finalHeight: fT
      } = lT(TT, oT, kT), CT = {
        width: vT,
        height: uT
      };
      if (!uT || !vT) return void LT.d.Error("Invalid 'size' parameter !");
      TT.skipFrameRender = !0;
      const jT = TT.getRenderWidth,
        JT = TT.getRenderHeight;
      TT.getRenderWidth = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && TT._currentRenderTarget ? TT._currentRenderTarget.width : vT
      }, TT.getRenderHeight = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && TT._currentRenderTarget ? TT._currentRenderTarget.height : uT
      }, TT.onResizeObservable.hasObservers() && TT.onResizeObservable.notifyObservers(TT);
      const UT = new zT.c("screenShot", CT, RT, !1, !1, 0, !1, iT.g.BILINEAR_SAMPLINGMODE, void 0, rT, void 0, void 0, void 0, BT);
      UT.renderList = RT.meshes.slice(), UT.samples = BT, UT.renderSprites = xT, UT.activeCamera = oT, UT.forceLayerMaskCheck = AT, hT?.(UT);
      const aT = wT || cT.DumpData,
        YT = () => {
          RT.incrementRenderId(), RT.resetCachedMaterial(), (0, MT.e)((() => UT.isReadyForRendering() && oT.isReady(!0)), (() => {
            TT.onEndFrameObservable.addOnce((() => {
              ET === vT && fT === uT ? UT.readPixels(void 0, void 0, void 0, !1).then((TT => {
                aT(vT, uT, TT, WT, XT, ST, !0, void 0, gT), UT.dispose()
              })) : (TT.isWebGPU ? IT.e(363).then((() => IT(60313))) : IT.e(364).then((() => IT(60316)))).then((async () => await (0, KT.b)("pass", UT.getInternalTexture(), RT, void 0, void 0, void 0, ET, fT).then((oT => {
                TT._readTexturePixels(oT, ET, fT, -1, 0, null, !0, !1, 0, 0).then((TT => {
                  aT(ET, fT, TT, WT, XT, ST, !0, void 0, gT), oT.dispose()
                }))
              }))))
            })), RT.incrementRenderId(), RT.resetCachedMaterial();
            const iT = RT.activeCamera,
              zT = RT.activeCameras,
              kT = oT.outputRenderTarget,
              BT = RT.spritesEnabled;
            RT.activeCamera = oT, RT.activeCameras = null, oT.outputRenderTarget = UT, RT.spritesEnabled = xT;
            const FT = RT.meshes;
            RT.meshes = UT.renderList || RT.meshes;
            try {
              RT.render()
            } finally {
              RT.activeCamera = iT, RT.activeCameras = zT, oT.outputRenderTarget = kT, RT.spritesEnabled = BT, RT.meshes = FT, TT.getRenderWidth = jT, TT.getRenderHeight = JT, TT.onResizeObservable.hasObservers() && TT.onResizeObservable.notifyObservers(TT), oT.getProjectionMatrix(!0), TT.skipFrameRender = !1
            }
          }), (() => {
            TT.skipFrameRender = !1, TT.getRenderWidth = jT, TT.getRenderHeight = JT, eT?.()
          }), void 0, mT)
        };
      if (FT) {
        const TT = new DT("antialiasing", 1, RT.activeCamera);
        UT.addPostProcess(TT), TT.autoClear = !0, TT.onEffectCreatedObservable.addOnce((TT => {
          TT.isReady() ? YT() : TT.onCompiled = () => {
            YT()
          }
        }))
      } else YT()
    }
    async function qT(TT, oT, IT) {
      let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        kT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        WT = arguments.length > 6 ? arguments[6] : void 0,
        XT = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        BT = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        FT = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
        ST = arguments.length > 10 ? arguments[10] : void 0,
        DT = arguments.length > 11 ? arguments[11] : void 0,
        LT = arguments.length > 12 ? arguments[12] : void 0;
      return await new Promise(((xT, cT) => {
        nT(TT, oT, IT, (TT => {
          "undefined" !== typeof TT ? xT(TT) : cT(new Error("Data is undefined"))
        }), iT, zT, kT, WT, XT, BT, FT, ST, DT, LT)
      }))
    }
    async function ZT(TT, oT, IT) {
      let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        kT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        WT = arguments.length > 6 ? arguments[6] : void 0,
        XT = arguments.length > 7 ? arguments[7] : void 0,
        BT = arguments.length > 8 ? arguments[8] : void 0,
        FT = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        ST = arguments.length > 10 ? arguments[10] : void 0;
      const DT = TT.engine,
        LT = TT.textureManager,
        {
          height: xT,
          width: KT,
          finalWidth: MT,
          finalHeight: AT
        } = lT(DT, oT, IT),
        gT = {
          width: KT,
          height: xT
        },
        hT = BT || cT.DumpData,
        wT = TT.tasks,
        mT = wT.length,
        eT = TT.pausedExecution,
        uT = DT.getCaps().parallelShaderCompile;
      LT.setBackBufferTextures(0, 0, {
        size: gT,
        options: {
          createMipMaps: !1,
          samples: zT,
          types: [0],
          formats: [5],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot color"]
        },
        sizeIsPercentage: !1
      }, {
        size: gT,
        options: {
          createMipMaps: !1,
          samples: zT,
          types: [0],
          formats: [DT.isStencilEnable ? 13 : 14],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot depth"]
        },
        sizeIsPercentage: !1
      });
      let ET = rT;
      if (kT) {
        const oT = new RT("fxaa", TT);
        oT.sourceTexture = ET, ET = oT.outputTexture, TT.addTask(oT)
      }
      if (MT !== KT || AT !== xT) {
        const oT = new vT("pass", TT);
        oT.sourceTexture = ET, oT.targetTexture = TT.textureManager.createRenderTargetTexture("pass_output", {
          size: {
            width: MT,
            height: AT
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
        }), ET = oT.outputTexture, TT.addTask(oT)
      }
      const fT = aT.FindMainObjectRenderer(TT);
      let CT = null;
      fT && (CT = fT.camera, fT.camera = oT), DT.getCaps().parallelShaderCompile = void 0, await TT.buildAsync();
      const jT = ST ?? (LT.hasHistoryTextures ? 32 : 1);
      for (let cT = 0; cT < jT; ++cT) TT.execute();
      TT.pausedExecution = !0, DT.getCaps().parallelShaderCompile = uT;
      for (let cT = mT; cT < wT.length; ++cT) TT.tasks[cT].dispose();
      TT.tasks.length = mT, fT && CT && (fT.camera = CT);
      const JT = TT.textureManager.getTextureFromHandle(ET);
      return JT.incrementReferences(), LT.resetBackBufferTextures(), await TT.buildAsync(), TT.pausedExecution = eT, new Promise((TT => {
        DT._readTexturePixels(JT, MT, AT, -1, 0, null, !0, !1, 0, 0).then((async oT => {
          JT.dispose(), hT(MT, AT, oT, FT ? void 0 : oT => TT(oT), iT, WT, !0, void 0, XT), FT && TT(null)
        }))
      }))
    }

    function lT(TT, oT, IT) {
      let iT = 0,
        zT = 0,
        kT = 0,
        WT = 0;
      if ("object" === typeof IT) {
        const XT = IT.precision ? Math.abs(IT.precision) : 1;
        IT.width && IT.height ? (iT = IT.height * XT, zT = IT.width * XT) : IT.width && !IT.height ? (zT = IT.width * XT, iT = Math.round(zT / TT.getAspectRatio(oT))) : IT.height && !IT.width ? (iT = IT.height * XT, zT = Math.round(iT * TT.getAspectRatio(oT))) : (zT = Math.round(TT.getRenderWidth() * XT), iT = Math.round(zT / TT.getAspectRatio(oT))), IT.finalWidth && IT.finalHeight ? (WT = IT.finalHeight, kT = IT.finalWidth) : IT.finalWidth && !IT.finalHeight ? (kT = IT.finalWidth, WT = Math.round(kT / TT.getAspectRatio(oT))) : IT.finalHeight && !IT.finalWidth ? (WT = IT.finalHeight, kT = Math.round(WT * TT.getAspectRatio(oT))) : (kT = zT, WT = iT)
      } else isNaN(IT) || (iT = IT, zT = IT, kT = IT, WT = IT);
      return zT && (zT = Math.floor(zT)), iT && (iT = Math.floor(iT)), kT && (kT = Math.floor(kT)), WT && (WT = Math.floor(WT)), {
        height: 0 | iT,
        width: 0 | zT,
        finalWidth: 0 | kT,
        finalHeight: 0 | WT
      }
    }
    const sT = {
      CreateScreenshot: QT,
      CreateScreenshotAsync: OT,
      CreateScreenshotWithResizeAsync: HT,
      CreateScreenshotUsingRenderTarget: nT,
      CreateScreenshotUsingRenderTargetAsync: qT,
      CreateScreenshotForFrameGraphAsync: ZT
    };
    let tT = !1;

    function GT() {
      if (tT) return;
      tT = !0;
      xT.i.CreateScreenshot = QT, xT.i.CreateScreenshotAsync = OT, xT.i.CreateScreenshotUsingRenderTarget = nT, xT.i.CreateScreenshotUsingRenderTargetAsync = qT
    }
    GT()
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);