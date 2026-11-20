export const id = 232;
export const ids = [232, 233];
export const modules = {
  39876: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => IT,
      e: () => CT
    });
    var lT = cT(39620),
      MT = cT(39624),
      KT = cT(36892),
      OT = cT(37093),
      yT = cT(39883),
      fT = cT(39846),
      xT = cT(36949);
    let IT = (() => {
        var TT;
        let kT, cT, fT = yT.d,
          xT = [],
          IT = [],
          AT = [],
          CT = [];
        return TT = class extends fT {
          constructor(TT, kT, cT, MT) {
            super(TT, cT, MT), this.groundColor = (0, lT.h)(this, xT, new OT.c(0, 0, 0)), this.direction = ((0, lT.h)(this, IT), (0, lT.h)(this, AT, void 0)), (0, lT.h)(this, CT), this.direction = kT || KT.m.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(TT) {
            return this.direction = KT.m.Normalize(TT.subtract(KT.m.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(TT, kT) {
            const cT = KT.m.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", cT.x, cT.y, cT.z, 0, kT), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), kT), this
          }
          transferToNodeMaterialEffect(TT, kT) {
            const cT = KT.m.Normalize(this.direction);
            return TT.setFloat3(kT, cT.x, cT.y, cT.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = KT.d.Identity()), this._worldMatrix
          }
          getTypeID() {
            return yT.d.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(TT, kT) {
            TT["HEMILIGHT" + kT] = !0
          }
        }, (() => {
          const KT = "function" === typeof Symbol && Symbol.metadata ? Object.create(fT[Symbol.metadata] ?? null) : void 0;
          kT = [(0, MT.m)()], cT = [(0, MT.F)()], (0, lT.e)(null, null, kT, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: TT => "groundColor" in TT,
              get: TT => TT.groundColor,
              set: (TT, kT) => {
                TT.groundColor = kT
              }
            },
            metadata: KT
          }, xT, IT), (0, lT.e)(null, null, cT, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: TT => "direction" in TT,
              get: TT => TT.direction,
              set: (TT, kT) => {
                TT.direction = kT
              }
            },
            metadata: KT
          }, AT, CT), KT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: KT
          })
        })(), TT
      })(),
      AT = !1;

    function CT() {
      AT || (AT = !0, fT.b.AddNodeConstructor("Light_Type_3", ((TT, kT) => () => new IT(TT, KT.m.Zero(), kT))), (0, xT.g)("BABYLON.HemisphericLight", IT))
    }
  },
  37632: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => MT
    });
    var lT = cT(37637);
    class MT {
      static GetPlanes(TT) {
        const kT = [];
        for (let cT = 0; cT < 6; cT++) kT.push(new lT.e(0, 0, 0, 0));
        return MT.GetPlanesToRef(TT, kT), kT
      }
      static GetNearPlaneToRef(TT, kT) {
        const cT = TT.m;
        kT.normal.x = cT[3] + cT[2], kT.normal.y = cT[7] + cT[6], kT.normal.z = cT[11] + cT[10], kT.d = cT[15] + cT[14], kT.normalize()
      }
      static GetFarPlaneToRef(TT, kT) {
        const cT = TT.m;
        kT.normal.x = cT[3] - cT[2], kT.normal.y = cT[7] - cT[6], kT.normal.z = cT[11] - cT[10], kT.d = cT[15] - cT[14], kT.normalize()
      }
      static GetLeftPlaneToRef(TT, kT) {
        const cT = TT.m;
        kT.normal.x = cT[3] + cT[0], kT.normal.y = cT[7] + cT[4], kT.normal.z = cT[11] + cT[8], kT.d = cT[15] + cT[12], kT.normalize()
      }
      static GetRightPlaneToRef(TT, kT) {
        const cT = TT.m;
        kT.normal.x = cT[3] - cT[0], kT.normal.y = cT[7] - cT[4], kT.normal.z = cT[11] - cT[8], kT.d = cT[15] - cT[12], kT.normalize()
      }
      static GetTopPlaneToRef(TT, kT) {
        const cT = TT.m;
        kT.normal.x = cT[3] - cT[1], kT.normal.y = cT[7] - cT[5], kT.normal.z = cT[11] - cT[9], kT.d = cT[15] - cT[13], kT.normalize()
      }
      static GetBottomPlaneToRef(TT, kT) {
        const cT = TT.m;
        kT.normal.x = cT[3] + cT[1], kT.normal.y = cT[7] + cT[5], kT.normal.z = cT[11] + cT[9], kT.d = cT[15] + cT[13], kT.normalize()
      }
      static GetPlanesToRef(TT, kT) {
        MT.GetNearPlaneToRef(TT, kT[0]), MT.GetFarPlaneToRef(TT, kT[1]), MT.GetLeftPlaneToRef(TT, kT[2]), MT.GetRightPlaneToRef(TT, kT[3]), MT.GetTopPlaneToRef(TT, kT[4]), MT.GetBottomPlaneToRef(TT, kT[5])
      }
      static IsPointInFrustum(TT, kT) {
        for (let cT = 0; cT < 6; cT++)
          if (kT[cT].dotCoordinate(TT) < 0) return !1;
        return !0
      }
    }
  },
  37637: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => MT
    });
    var lT = cT(36892);
    class MT {
      constructor(TT, kT, cT, MT) {
        this.normal = new lT.m(TT, kT, cT), this.d = MT
      }
      acT() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new MT(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let kT = 0;
        return 0 !== TT && (kT = 1 / TT), this.normal.x *= kT, this.normal.y *= kT, this.normal.z *= kT, this.d *= kT, this
      }
      transform(TT) {
        const kT = MT._TmpMatrix;
        TT.invertToRef(kT);
        const cT = kT.m,
          lT = this.normal.x,
          KT = this.normal.y,
          OT = this.normal.z,
          yT = this.d,
          fT = lT * cT[0] + KT * cT[1] + OT * cT[2] + yT * cT[3],
          xT = lT * cT[4] + KT * cT[5] + OT * cT[6] + yT * cT[7],
          IT = lT * cT[8] + KT * cT[9] + OT * cT[10] + yT * cT[11],
          AT = lT * cT[12] + KT * cT[13] + OT * cT[14] + yT * cT[15];
        return new MT(fT, xT, IT, AT)
      }
      dotCoordinate(TT) {
        return this.normal.x * TT.x + this.normal.y * TT.y + this.normal.z * TT.z + this.d
      }
      copyFromPoints(TT, kT, cT) {
        const lT = kT.x - TT.x,
          MT = kT.y - TT.y,
          KT = kT.z - TT.z,
          OT = cT.x - TT.x,
          yT = cT.y - TT.y,
          fT = cT.z - TT.z,
          xT = MT * fT - KT * yT,
          IT = KT * OT - lT * fT,
          AT = lT * yT - MT * OT,
          CT = Math.sqrt(xT * xT + IT * IT + AT * AT);
        let jT;
        return jT = 0 !== CT ? 1 / CT : 0, this.normal.x = xT * jT, this.normal.y = IT * jT, this.normal.z = AT * jT, this.d = -(this.normal.x * TT.x + this.normal.y * TT.y + this.normal.z * TT.z), this
      }
      isFrontFacingTo(TT, kT) {
        return lT.m.Dot(this.normal, TT) <= kT
      }
      signedDistanceTo(TT) {
        return lT.m.Dot(TT, this.normal) + this.d
      }
      static FromArray(TT) {
        return new MT(TT[0], TT[1], TT[2], TT[3])
      }
      static FromPoints(TT, kT, cT) {
        const lT = new MT(0, 0, 0, 0);
        return lT.copyFromPoints(TT, kT, cT), lT
      }
      static FromPositionAndNormal(TT, kT) {
        const cT = new MT(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(TT, kT, cT)
      }
      static FromPositionAndNormalToRef(TT, kT, cT) {
        return cT.normal.UkT(kT), cT.normal.normalize(), cT.d = -TT.dot(cT.normal), cT
      }
      static SignedDistanceToPlaneFromPositionAndNormal(TT, kT, cT) {
        const MT = -(kT.x * TT.x + kT.y * TT.y + kT.z * TT.z);
        return lT.m.Dot(cT, kT) + MT
      }
    }
    MT._TmpMatrix = lT.d.Identity()
  },
  37939: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => lT
    });
    class lT {
      constructor(TT, kT, cT, lT) {
        this.x = TT, this.y = kT, this.width = cT, this.height = lT
      }
      toGlobal(TT, kT) {
        return new lT(this.x * TT, this.y * kT, this.width * TT, this.height * kT)
      }
      toGlobalToRef(TT, kT, cT) {
        return cT.x = this.x * TT, cT.y = this.y * kT, cT.width = this.width * TT, cT.height = this.height * kT, this
      }
      clone() {
        return new lT(this.x, this.y, this.width, this.height)
      }
    }
  },
  38507: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => KT
    });
    var lT = cT(38512);
    const MT = (TT, kT, cT) => TT ? TT.getClassName && "Mesh" === TT.getClassName() ? null : !TT.getClassName || "SubMesh" !== TT.getClassName() && "PhysicsBody" !== TT.getClassName() ? TT.clone ? TT.clone() : Array.isArray(TT) ? TT.slice() : cT && "object" === typeof TT ? {
      ...TT
    } : null : TT.clone(kT) : null;
    class KT {
      static DeepCopy(TT, kT, cT, KT) {
        let OT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const yT = function(TT) {
          const kT = [];
          do {
            const cT = Object.getOwnPropertyNames(TT);
            for (const TT of cT) - 1 === kT.indexOf(TT) && kT.push(TT)
          } while (TT = Object.getPrototypeOf(TT));
          return kT
        }(TT);
        for (const xT of yT) {
          if ("_" === xT[0] && (!KT || -1 === KT.indexOf(xT))) continue;
          if (xT.endsWith("Observable")) continue;
          if (cT && -1 !== cT.indexOf(xT)) continue;
          const yT = TT[xT],
            IT = typeof yT;
          if ("function" !== IT) try {
            if ("object" === IT)
              if (yT instanceof Uint8Array) kT[xT] = Uint8Array.from(yT);
              else if (yT instanceof Array) {
              if (kT[xT] = [], yT.length > 0)
                if ("object" == typeof yT[0])
                  for (let TT = 0; TT < yT.length; TT++) {
                    const cT = MT(yT[TT], kT, OT); - 1 === kT[xT].indexOf(cT) && kT[xT].push(cT)
                  } else kT[xT] = yT.slice(0)
            } else kT[xT] = MT(yT, kT, OT);
            else kT[xT] = yT
          } catch (fT) {
            lT.e.Warn(fT.message)
          }
        }
      }
    }
  },
  37760: (TT, kT, cT) => {
    function lT() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (TT => {
        const kT = 16 * Math.random() | 0;
        return ("x" === TT ? kT : 3 & kT | 8).toString(16)
      }))
    }
    cT.d(kT, {
      c: () => lT
    })
  },
  38512: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => lT
    });
    class lT {
      static _CheckLimit(TT, kT) {
        let cT = lT._LogLimitOutputs[TT];
        return cT ? cT.current++ : (cT = {
          limit: kT,
          current: 1
        }, lT._LogLimitOutputs[TT] = cT), cT.current <= cT.limit
      }
      static _GenerateLimitMessage(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const cT = lT._LogLimitOutputs[TT];
        if (!cT || !lT.MessageLimitReached) return;
        const MT = this._Levels[kT];
        cT.current === cT.limit && lT[MT.name](lT.MessageLimitReached.replace(/%LIMIT%/g, "" + cT.limit).replace(/%TYPE%/g, MT.name ?? ""))
      }
      static _AddLogEntry(TT) {
        lT._LogCache = TT + lT._LogCache, lT.OnNewCacheEntry && lT.OnNewCacheEntry(TT)
      }
      static _FormatMessage(TT) {
        const kT = TT => TT < 10 ? "0" + TT : "" + TT,
          cT = new Date;
        return "[" + kT(cT.getHours()) + ":" + kT(cT.getMinutes()) + ":" + kT(cT.getSeconds()) + "]: " + TT
      }
      static _LogDisabled(TT, kT) {}
      static _LogEnabled() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          kT = arguments.length > 1 ? arguments[1] : void 0,
          cT = arguments.length > 2 ? arguments[2] : void 0;
        const MT = Array.isArray(kT) ? kT[0] : kT;
        if (void 0 !== cT && !lT._CheckLimit(MT, cT)) return;
        const KT = lT._FormatMessage(MT),
          OT = this._Levels[TT],
          yT = Array.isArray(kT) ? kT.slice(1) : [];
        OT.logFunc && OT.logFunc("BJS - " + KT, ...yT);
        const fT = `<div style='color:${OT.color}'>${KT}</div><br>`;
        lT._AddLogEntry(fT), lT._GenerateLimitMessage(MT, TT)
      }
      static get LogCache() {
        return lT._LogCache
      }
      static ClearLogCache() {
        lT._LogCache = "", lT._LogLimitOutputs = {}, lT.errorsCount = 0
      }
      static set LogLevels(TT) {
        lT.Log = lT._LogDisabled, lT.Warn = lT._LogDisabled, lT.Error = lT._LogDisabled;
        const kT = [lT.MessageLogLevel, lT.WarningLogLevel, lT.ErrorLogLevel];
        for (const cT of kT)
          if ((TT & cT) === cT) {
            const TT = this._Levels[cT];
            lT[TT.name] = lT._LogEnabled.bind(lT, cT)
          }
      }
    }
    lT.NoneLogLevel = 0, lT.MessageLogLevel = 1, lT.WarningLogLevel = 2, lT.ErrorLogLevel = 4, lT.AllLogLevel = 7, lT.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", lT._LogCache = "", lT._LogLimitOutputs = {}, lT._Levels = [{}, {
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
    }], lT.errorsCount = 0, lT.Log = lT._LogEnabled.bind(lT, lT.MessageLogLevel), lT.Warn = lT._LogEnabled.bind(lT, lT.WarningLogLevel), lT.Error = lT._LogEnabled.bind(lT, lT.ErrorLogLevel)
  },
  60554: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      CreateScreenshot: () => ET,
      CreateScreenshotAsync: () => ZT,
      CreateScreenshotForFrameGraphAsync: () => LT,
      CreateScreenshotUsingRenderTarget: () => XT,
      CreateScreenshotUsingRenderTargetAsync: () => dT,
      CreateScreenshotWithResizeAsync: () => uT,
      RegisterScreenshotTools: () => YT,
      ScreenshotTools: () => gT
    });
    var lT = cT(40111),
      MT = cT(41380),
      KT = cT(41357),
      OT = cT(39645),
      yT = cT(41359),
      fT = cT(36925),
      xT = cT(36892);
    class IT extends yT.g {
      static _GetDefines(TT) {
        if (!TT) return null;
        return TT.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
      }
      _gatherImports(TT, kT) {
        TT ? (this._webGPUReady = !0, kT.push(Promise.all([cT.e(368).then((() => cT(60893))), cT.e(369).then((() => cT(60900)))]))) : kT.push(Promise.all([cT.e(370).then((() => cT(60909))), cT.e(371).then((() => cT(60915)))]))
      }
      constructor(TT) {
        const kT = {
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: TT,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || fT.d.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          vertexShader: IT.VertexUrl,
          fragmentShader: IT.FragmentUrl,
          uniforms: IT.Uniforms
        };
        super({
          ...kT,
          defines: IT._GetDefines(kT.engine)
        }), this.texelSize = new xT.i(0, 0)
      }
      bind() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.bind(TT), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
      }
    }
    IT.VertexUrl = "fxaa", IT.FragmentUrl = "fxaa", IT.Uniforms = ["texelSize"];
    class AT extends KT.e {
      getClassName() {
        return "FxaaPostProcess"
      }
      constructor(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          MT = arguments.length > 3 ? arguments[3] : void 0,
          KT = arguments.length > 4 ? arguments[4] : void 0,
          OT = arguments.length > 5 ? arguments[5] : void 0,
          yT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const fT = {
          uniforms: IT.Uniforms,
          size: "number" === typeof kT ? kT : void 0,
          camera: cT,
          samplingMode: MT || lT.f.BILINEAR_SAMPLINGMODE,
          engine: KT,
          reusable: OT,
          textureType: yT,
          ...kT
        };
        super(TT, IT.FragmentUrl, {
          effectWrapper: "number" !== typeof kT && kT.effectWrapper ? void 0 : new IT(TT, KT, fT),
          ...fT
        }), this.onApplyObservable.add((TT => {
          this._effectWrapper.texelSize = this.texelSize
        }))
      }
      static _Parse(TT, kT, cT, lT) {
        return OT.d.Parse((() => new AT(TT.name, TT.options, kT, TT.renderTargetSamplingMode, cT.Dv(), TT.reusable)), TT, cT, lT)
      }
    }
    var CT = cT(38512),
      jT = cT(39727),
      vT = cT(41386),
      tT = cT(41377),
      hT = cT(39514);
    const NT = 0;
    class QT {
      constructor(TT, kT, cT) {
        this.name = TT, this._parentTask = kT, this._context = cT, this.disabled = !1
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
    class ST extends QT {
      static IsObjectListPass(TT) {
        return void 0 !== TT.setObjectList
      }
      get objectList() {
        return this._objectList
      }
      setObjectList(TT) {
        this._objectList = TT
      }
      constructor(TT, kT, cT, lT) {
        super(TT, kT, cT), this._engine = lT
      }
      _isValid() {
        const TT = super._isValid();
        return TT || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
      }
    }
    class DT extends QT {
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
      constructor(TT, kT, cT, lT) {
        super(TT, kT, cT), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = lT
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
            for (const kT of TT) this._dependencies.add(kT);
          else this._dependencies.add(TT)
      }
      collectDependencies(TT) {
        const kT = this._dependencies.keys();
        for (let cT = kT.next(); !0 !== cT.done; cT = kT.next()) TT.add(cT.value);
        if (void 0 !== this._renderTarget)
          if (Array.isArray(this._renderTarget))
            for (const cT of this._renderTarget) void 0 !== cT && TT.add(cT);
          else TT.add(this._renderTarget);
        void 0 !== this._renderTargetDepth && TT.add(this._renderTargetDepth)
      }
      setOutputLayerAndFaceIndices(TT) {
        const kT = this.frameGraphRenderTarget.renderTargetWrapper;
        if (kT)
          for (const cT of TT) kT.setLayerAndFaceIndex(cT.targetIndex, cT.layerIndex, cT.faceIndex)
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
    var aT = cT(36932);
    class FT {
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
      constructor(TT, kT) {
        this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new aT.b, this.onBeforeTaskExecute = new aT.b, this.onAfterTaskExecute = new aT.b, this.name = TT, this._frameGraph = kT, this._reset()
      }
      _reset() {
        for (const TT of this._passes) TT._dispose();
        for (const TT of this._passesDisabled) TT._dispose();
        this._passes.length = 0, this._passesDisabled.length = 0
      }
      _addPass(TT, kT) {
        kT ? this._passesDisabled.push(TT) : this._passes.push(TT)
      }
      _checkTask() {
        let TT, kT = null,
          cT = null;
        for (const yT of this._passes) {
          const lT = yT._isValid();
          if (lT) throw new Error(`Pass "${yT.name}" is not valid. ${lT}`);
          if (DT.IsRenderPass(yT)) {
            const TT = Array.isArray(yT.renderTarget) ? yT.renderTarget : [yT.renderTarget];
            kT = [];
            for (const cT of TT) void 0 !== cT && kT.push(this._frameGraph.textureManager.getTextureFromHandle(cT));
            cT = void 0 !== yT.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(yT.renderTargetDepth) : null
          } else ST.IsObjectListPass(yT) && (TT = yT.objectList)
        }
        let lT, MT = null,
          KT = [],
          OT = null;
        for (const yT of this._passesDisabled) {
          const TT = yT._isValid();
          if (TT) throw new Error(`Pass "${yT.name}" is not valid. ${TT}`);
          if (DT.IsRenderPass(yT)) {
            const TT = Array.isArray(yT.renderTarget) ? yT.renderTarget : [yT.renderTarget];
            MT = [];
            for (const kT of TT) void 0 !== kT && MT.push(this._frameGraph.textureManager.getTextureFromHandle(kT));
            KT = TT, OT = void 0 !== yT.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(yT.renderTargetDepth) : null
          } else ST.IsObjectListPass(yT) && (lT = yT.objectList)
        }
        if (this._passesDisabled.length > 0) {
          if (!this._checkSameRenderTarget(kT, MT)) {
            let TT = !0;
            for (const kT of KT)
              if (void 0 !== kT && !this._frameGraph.textureManager.isHistoryTexture(kT)) {
                TT = !1;
                break
              } if (!TT) throw new Error(`The output texture of the task "${this.name}" is different when it is enabled or disabled.`)
          }
          if (cT !== OT && null !== OT) throw new Error(`The output depth texture of the task "${this.name}" is different when it is enabled or disabled.`);
          if (TT !== lT && null !== lT) throw new Error(`The output object list of the task "${this.name}" is different when it is enabled or disabled.`)
        }
      }
      _execute() {
        const TT = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
        this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const kT of TT) kT._execute()
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
      _checkSameRenderTarget(TT, kT) {
        if (null === TT || null === kT) return TT === kT;
        if (TT.length !== kT.length) return !1;
        for (let cT = 0; cT < TT.length; cT++)
          if (TT[cT] !== kT[cT]) return !1;
        return !0
      }
    }
    class rT extends FT {
      get alphaMode() {
        return this.postProcess.alphaMode
      }
      set alphaMode(TT) {
        this.postProcess.alphaMode = TT
      }
      get drawWrapper() {
        return this._postProcessDrawWrapper
      }
      constructor(TT, kT, cT) {
        super(TT, kT), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = cT, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture = this._frameGraph.textureManager.createDanglingHandle(), this.outputDepthAttachmentTexture = this._frameGraph.textureManager.createDanglingHandle()
      }
      isReady() {
        return this.postProcess.isReady()
      }
      getClassName() {
        return "FrameGraphPostProcessTask"
      }
      record() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          kT = arguments.length > 1 ? arguments[1] : void 0,
          cT = arguments.length > 2 ? arguments[2] : void 0;
        if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
        const lT = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
        if (lT && (lT.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, lT), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentTexture, this.depthAttachmentTexture), lT) {
          const TT = this._frameGraph.textureManager.getTextureAbsoluteDimensions(lT);
          this._sourceWidth = TT.width, this._sourceHeight = TT.height
        }
        const MT = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
        this._outputWidth = MT.size.width, this._outputHeight = MT.size.height;
        const KT = this._frameGraph.addRenderPass(this.name);
        if (KT.depthReadOnly = this.depthReadOnly, KT.stencilReadOnly = this.stencilReadOnly, KT.addDependencies(this.sourceTexture), KT.setRenderTarget(this.outputTexture), KT.setRenderTargetDepth(this.depthAttachmentTexture), KT.setExecuteFunc((TT => {
            TT.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && TT.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), kT?.(TT), this.viewport && TT.setViewport(this.viewport), TT.applyFullScreenEffect(this._postProcessDrawWrapper, (() => {
              void 0 !== this.sourceTexture && TT.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), cT?.(TT), this.postProcess.bind()
            }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), TT.restoreDefaultFramebuffer(), TT.popDebugGroup()
          })), !TT) {
          const TT = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
          TT.depthReadOnly = this.depthReadOnly, TT.stencilReadOnly = this.stencilReadOnly, TT.addDependencies(this.sourceTexture), TT.setRenderTarget(this.outputTexture), TT.setRenderTargetDepth(this.depthAttachmentTexture), TT.setExecuteFunc((TT => {
            void 0 !== this.sourceTexture && 0 === this.alphaMode && (this.viewport && TT.setViewport(this.viewport), TT.copyTexture(this.sourceTexture, void 0, void 0 !== this.viewport))
          }))
        }
        return KT
      }
      dispose() {
        this.postProcess.dispose(), super.dispose()
      }
    }
    class PT extends rT {
      constructor(TT, kT, cT) {
        super(TT, kT, cT || new IT(TT, kT.engine))
      }
      getClassName() {
        return "FrameGraphFXAATask"
      }
      record() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          kT = arguments.length > 1 ? arguments[1] : void 0,
          cT = arguments.length > 2 ? arguments[2] : void 0;
        const lT = super.record(TT, kT, cT);
        return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, lT
      }
    }
    var wT = cT(41382);
    class mT extends rT {
      constructor(TT, kT, cT) {
        super(TT, kT, cT || new wT.h(TT, kT.engine))
      }
      getClassName() {
        return "FrameGraphPassTask"
      }
    }
    var bT = cT(39720),
      zT = cT(39812),
      JT = cT(39775),
      oT = cT(39876),
      HT = cT(37093);
    class eT {
      getRenderCamera(TT) {
        if (this._renderCamera) return this._renderCamera;
        {
          let kT;
          return kT = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, TT && kT && kT.isRigCamera ? kT.rigParent : kT
        }
      }
      setRenderCamera(TT) {
        this._renderCamera = TT
      }
      _getSharedGizmoLight() {
        return this._sharedGizmoLight || (this._sharedGizmoLight = new oT.d("shared gizmo light", new xT.m(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = HT.c.Gray()), this._sharedGizmoLight
      }
      static get DefaultUtilityLayer() {
        return null == eT._DefaultUtilityLayer ? eT._CreateDefaultUtilityLayerFromScene(fT.d.LastCreatedScene) : eT._DefaultUtilityLayer
      }
      static _CreateDefaultUtilityLayerFromScene(TT) {
        return eT._DefaultUtilityLayer = new eT(TT), eT._DefaultUtilityLayer.originalScene.QJ.addOnce((() => {
          eT._DefaultUtilityLayer = null
        })), eT._DefaultUtilityLayer
      }
      static get DefaultKeepDepthUtilityLayer() {
        return null == eT._DefaultKeepDepthUtilityLayer ? eT._CreateDefaultKeepUtilityLayerFromScene(fT.d.LastCreatedScene) : eT._DefaultKeepDepthUtilityLayer
      }
      static _CreateDefaultKeepUtilityLayerFromScene(TT) {
        return eT._DefaultKeepDepthUtilityLayer = new eT(TT), eT._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, eT._DefaultKeepDepthUtilityLayer.originalScene.QJ.addOnce((() => {
          eT._DefaultKeepDepthUtilityLayer = null
        })), eT._DefaultKeepDepthUtilityLayer
      }
      constructor(TT) {
        let kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.originalScene = TT, this.handleEvents = kT, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.processAllEvents = !1, this.pickingEnabled = !0, this.onPointerOutObservable = new aT.b, this.utilityLayerScene = new bT.f(TT.Dv(), {
          virtual: !0,
          useFloatingOrigin: TT.floatingOriginMode
        }), this.utilityLayerScene.useRightHandedSystem = TT.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), kT && (this._originalPointerObserver = TT.onPrePointerObservable.add((kT => {
          if (!this.utilityLayerScene.activeCamera) return;
          if (!this.pickingEnabled) return;
          if (!this.processAllEvents && kT.type !== zT.c.POINTERMOVE && kT.type !== zT.c.POINTERUP && kT.type !== zT.c.POINTERDOWN && kT.type !== zT.c.POINTERDOUBLETAP) return;
          this.utilityLayerScene.pointerX = TT.pointerX, this.utilityLayerScene.pointerY = TT.pointerY;
          const cT = kT.event;
          if (TT.isPointerCaptured(cT.pointerId)) return void(this._pointerCaptures[cT.pointerId] = !1);
          const lT = cT => {
              let lT;
              if (kT.nearInteractionPickingInfo) lT = kT.nearInteractionPickingInfo.pickedMesh.NJ() == cT ? kT.nearInteractionPickingInfo : new JT.d;
              else if (cT !== this.utilityLayerScene && kT.originalPickingInfo) lT = kT.originalPickingInfo;
              else {
                let MT = null;
                this._renderCamera && (MT = cT._activeCamera, cT._activeCamera = this._renderCamera, kT.ray = null), lT = kT.ray ? cT.pickWithRay(kT.ray) : cT.gC(TT.pointerX, TT.pointerY), MT && (cT._activeCamera = MT)
              }
              return lT
            },
            MT = lT(this.utilityLayerScene);
          if (!kT.ray && MT && (kT.ray = MT.ray), kT.originalPickingInfo?.aimTransform && MT && (MT.aimTransform = kT.originalPickingInfo.aimTransform, MT.gripTransform = kT.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(kT), this.onlyCheckPointerDownEvents && kT.type != zT.c.POINTERDOWN) return kT.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new zT.h(kT.type, kT.event, MT), kT.type), void(kT.type === zT.c.POINTERUP && this._pointerCaptures[cT.pointerId] && (this._pointerCaptures[cT.pointerId] = !1));
          if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) MT && MT.hit && (kT.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new zT.h(kT.type, kT.event, MT), kT.type), kT.skipOnPointerObservable = !0);
          else {
            const cT = lT(TT),
              KT = kT.event;
            cT && MT && (0 === MT.distance && cT.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(cT.pickedMesh) ? (this._notifyObservers(kT, cT, KT), kT.skipOnPointerObservable = !0) : kT.type === zT.c.POINTERDOWN ? (this._pointerCaptures[KT.pointerId] = !0, this._notifyObservers(kT, cT, KT)) : kT.type !== zT.c.POINTERMOVE && kT.type !== zT.c.POINTERUP || (this._lastPointerEvents[KT.pointerId] && (this.onPointerOutObservable.notifyObservers(KT.pointerId), delete this._lastPointerEvents[KT.pointerId]), this._notifyObservers(kT, cT, KT)) : !this._pointerCaptures[KT.pointerId] && (MT.distance < cT.distance || 0 === cT.distance) ? (this._notifyObservers(kT, MT, KT), kT.skipOnPointerObservable || (kT.skipOnPointerObservable = MT.distance > 0)) : !this._pointerCaptures[KT.pointerId] && MT.distance >= cT.distance && (this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(cT.pickedMesh) ? (this._notifyObservers(kT, cT, KT), kT.skipOnPointerObservable = !0) : (kT.type !== zT.c.POINTERMOVE && kT.type !== zT.c.POINTERUP || this._lastPointerEvents[KT.pointerId] && (this.onPointerOutObservable.notifyObservers(KT.pointerId), delete this._lastPointerEvents[KT.pointerId]), this._notifyObservers(kT, MT, KT))), kT.type === zT.c.POINTERUP && this._pointerCaptures[KT.pointerId] && (this._pointerCaptures[KT.pointerId] = !1))
          }
        })), this._originalPointerObserver && TT.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, cT || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((TT => {
          this.shouldRender && TT == this.getRenderCamera() && this.render()
        }))), this._sceneDisposeObserver = this.originalScene.QJ.add((() => {
          this.dispose()
        })), this._updateCamera()
      }
      _notifyObservers(TT, kT, cT) {
        TT.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new zT.h(TT.type, TT.event, kT), TT.type), this._lastPointerEvents[cT.pointerId] = !0)
      }
      render() {
        if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
          const TT = this.utilityLayerScene.activeCamera.NJ(),
            kT = this.utilityLayerScene.activeCamera;
          kT._scene = this.utilityLayerScene, kT.leftCamera && (kT.leftCamera._scene = this.utilityLayerScene), kT.rightCamera && (kT.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), kT._scene = TT, kT.leftCamera && (kT.leftCamera._scene = TT), kT.rightCamera && (kT.rightCamera._scene = TT)
        }
      }
      dispose() {
        this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.QJ.remove(this._sceneDisposeObserver), this._originalPointerObserver && this.originalScene.onPrePointerObservable.remove(this._originalPointerObserver), this.utilityLayerScene.dispose()
      }
      _updateCamera() {
        this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
      }
    }
    eT._DefaultUtilityLayer = null, eT._DefaultKeepDepthUtilityLayer = null;
    const GT = {
      FindMainCamera: function(TT) {
        return TT.findMainCamera()
      },
      FindMainObjectRenderer: function(TT) {
        return TT.findMainObjectRenderer()
      },
      CreateUtilityLayerRenderer: function(TT) {
        let kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const cT = TT.et,
          lT = new eT(cT, kT, !0);
        lT.utilityLayerScene.activeCamera = cT.activeCamera;
        let MT = GT.FindMainCamera(cT.frameGraph);
        !MT && cT.cameras.length > 0 && (MT = cT.cameras[0]), MT && (lT.setRenderCamera(MT), lT.utilityLayerScene.activeCamera = MT);
        const KT = cT.onAfterRenderObservable.add((() => {
          lT.render()
        }));
        return lT.utilityLayerScene.QJ.addOnce((() => {
          cT.onAfterRenderObservable.remove(KT)
        })), lT
      }
    };
    let VT = null;

    function ET(TT, kT, cT, lT) {
      let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        KT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        OT = arguments.length > 6 ? arguments[6] : void 0,
        yT = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        fT = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
      const {
        height: xT,
        width: IT
      } = RT(TT, kT, cT);
      if (!xT || !IT) return void CT.e.Error("Invalid 'size' parameter !");
      const AT = kT.NJ();
      let vT = AT.activeCamera !== kT;
      if (AT.frameGraph) {
        const TT = GT.FindMainObjectRenderer(AT.frameGraph);
        TT && (vT = TT.camera !== kT)
      }
      vT ? XT(TT, kT, cT, (TT => {
        if (KT) {
          const kT = new Blob([TT]);
          jT.h.DownloadBlob(kT), lT && lT("")
        } else lT && lT(TT)
      }), MT, 1, TT.getCreationOptions().antialias, void 0, void 0, void 0, void 0, OT) : TT.onEndFrameObservable.addOnce((() => {
        VT || (VT = document.createElement("canvas")), VT.width = IT, VT.height = xT;
        const kT = VT.getContext("2d"),
          cT = TT.getRenderingCanvas();
        if (!kT || !cT) return void CT.e.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
        const vT = cT.width,
          tT = cT.height,
          hT = VT.width,
          NT = VT.height,
          QT = hT / vT,
          ST = NT / tT,
          DT = yT ? Math.max(QT, ST) : Math.min(QT, ST),
          aT = vT * DT,
          FT = tT * DT,
          rT = (hT - aT) / 2,
          PT = (NT - FT) / 2;
        kT.save(), kT.fillStyle = fT ? AT.clearColor.toHexString() : "rgba(0, 0, 0, 0)", kT.fillRect(0, 0, IT, xT), kT.restore(), kT.drawImage(cT, 0, 0, vT, tT, rT, PT, aT, FT), KT ? (jT.h.EncodeScreenshotCanvasData(VT, void 0, MT, void 0, OT), lT && lT("")) : jT.h.EncodeScreenshotCanvasData(VT, lT, MT, void 0, OT)
      }))
    }
    async function ZT(TT, kT, cT) {
      let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        MT = arguments.length > 4 ? arguments[4] : void 0,
        KT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        OT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        yT = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      return await new Promise(((fT, xT) => {
        ET(TT, kT, cT, (TT => {
          "undefined" !== typeof TT ? fT(TT) : xT(new Error("Data is undefined"))
        }), lT, yT, MT, KT, OT)
      }))
    }
    async function uT(TT, kT, cT, lT) {
      let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        KT = arguments.length > 5 ? arguments[5] : void 0,
        OT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return await new Promise((yT => {
        ET(TT, kT, {
          width: cT,
          height: lT
        }, (() => {
          yT()
        }), MT, !0, KT, OT)
      }))
    }

    function XT(TT, kT, KT, OT) {
      let yT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        fT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
        xT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        IT = arguments.length > 7 ? arguments[7] : void 0,
        jT = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        NT = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        QT = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
        ST = arguments.length > 11 ? arguments[11] : void 0,
        DT = arguments.length > 12 ? arguments[12] : void 0,
        aT = arguments.length > 13 ? arguments[13] : void 0,
        FT = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
        rT = arguments.length > 15 ? arguments[15] : void 0;
      const PT = kT.NJ();
      if (PT.frameGraph) return void LT(PT.frameGraph, kT, KT, yT, fT, xT, IT, ST, aT, !OT).then((TT => {
        OT && OT(TT)
      }));
      const {
        height: wT,
        width: mT,
        finalWidth: bT,
        finalHeight: zT
      } = RT(TT, kT, KT), JT = {
        width: mT,
        height: wT
      };
      if (!wT || !mT) return void CT.e.Error("Invalid 'size' parameter !");
      TT.skipFrameRender = !0;
      const oT = TT.getRenderWidth,
        HT = TT.getRenderHeight;
      TT.getRenderWidth = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && TT._currentRenderTarget ? TT._currentRenderTarget.width : mT
      }, TT.getRenderHeight = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && TT._currentRenderTarget ? TT._currentRenderTarget.height : wT
      }, TT.onResizeObservable.hasObservers() && TT.onResizeObservable.notifyObservers(TT);
      const eT = new MT.c("screenShot", JT, PT, !1, !1, 0, !1, lT.f.BILINEAR_SAMPLINGMODE, void 0, NT, void 0, void 0, void 0, fT);
      eT.renderList = PT.meshes.slice(), eT.samples = fT, eT.renderSprites = jT, eT.activeCamera = kT, eT.forceLayerMaskCheck = QT, DT?.(eT);
      const GT = aT || vT.DumpData,
        VT = () => {
          PT.incrementRenderId(), PT.resetCachedMaterial(), (0, hT.g)((() => eT.isReadyForRendering() && kT.isReady(!0)), (() => {
            TT.onEndFrameObservable.addOnce((() => {
              bT === mT && zT === wT ? eT.readPixels(void 0, void 0, void 0, !1).then((TT => {
                GT(mT, wT, TT, OT, yT, IT, !0, void 0, ST), eT.dispose()
              })) : (TT.isWebGPU ? cT.e(364).then((() => cT(60836))) : cT.e(365).then((() => cT(60844)))).then((async () => await (0, tT.b)("pass", eT.getInternalTexture(), PT, void 0, void 0, void 0, bT, zT).then((kT => {
                TT._readTexturePixels(kT, bT, zT, -1, 0, null, !0, !1, 0, 0).then((TT => {
                  GT(bT, zT, TT, OT, yT, IT, !0, void 0, ST), kT.dispose()
                }))
              }))))
            })), PT.incrementRenderId(), PT.resetCachedMaterial();
            const lT = PT.activeCamera,
              MT = PT.activeCameras,
              KT = kT.outputRenderTarget,
              fT = PT.spritesEnabled;
            PT.activeCamera = kT, PT.activeCameras = null, kT.outputRenderTarget = eT, PT.spritesEnabled = jT;
            const xT = PT.meshes;
            PT.meshes = eT.renderList || PT.meshes;
            try {
              PT.render()
            } finally {
              PT.activeCamera = lT, PT.activeCameras = MT, kT.outputRenderTarget = KT, PT.spritesEnabled = fT, PT.meshes = xT, TT.getRenderWidth = oT, TT.getRenderHeight = HT, TT.onResizeObservable.hasObservers() && TT.onResizeObservable.notifyObservers(TT), kT.getProjectionMatrix(!0), TT.skipFrameRender = !1
            }
          }), (() => {
            TT.skipFrameRender = !1, TT.getRenderWidth = oT, TT.getRenderHeight = HT, rT?.()
          }), void 0, FT)
        };
      if (xT) {
        const TT = new AT("antialiasing", 1, PT.activeCamera);
        eT.addPostProcess(TT), TT.autoClear = !0, TT.onEffectCreatedObservable.addOnce((TT => {
          TT.isReady() ? VT() : TT.onCompiled = () => {
            VT()
          }
        }))
      } else VT()
    }
    async function dT(TT, kT, cT) {
      let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        KT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        OT = arguments.length > 6 ? arguments[6] : void 0,
        yT = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        fT = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        xT = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
        IT = arguments.length > 10 ? arguments[10] : void 0,
        AT = arguments.length > 11 ? arguments[11] : void 0,
        CT = arguments.length > 12 ? arguments[12] : void 0;
      return await new Promise(((jT, vT) => {
        XT(TT, kT, cT, (TT => {
          "undefined" !== typeof TT ? jT(TT) : vT(new Error("Data is undefined"))
        }), lT, MT, KT, OT, yT, fT, xT, IT, AT, CT)
      }))
    }
    async function LT(TT, kT, cT) {
      let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        KT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        OT = arguments.length > 6 ? arguments[6] : void 0,
        yT = arguments.length > 7 ? arguments[7] : void 0,
        fT = arguments.length > 8 ? arguments[8] : void 0,
        xT = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        IT = arguments.length > 10 ? arguments[10] : void 0;
      const AT = TT.engine,
        CT = TT.textureManager,
        {
          height: jT,
          width: tT,
          finalWidth: hT,
          finalHeight: QT
        } = RT(AT, kT, cT),
        ST = {
          width: tT,
          height: jT
        },
        DT = fT || vT.DumpData,
        aT = TT.tasks,
        FT = aT.length,
        rT = TT.pausedExecution,
        wT = AT.getCaps().parallelShaderCompile;
      CT.setBackBufferTextures(0, 0, {
        size: ST,
        options: {
          createMipMaps: !1,
          samples: MT,
          types: [0],
          formats: [5],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot color"]
        },
        sizeIsPercentage: !1
      }, {
        size: ST,
        options: {
          createMipMaps: !1,
          samples: MT,
          types: [0],
          formats: [AT.isStencilEnable ? 13 : 14],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot depth"]
        },
        sizeIsPercentage: !1
      });
      let bT = NT;
      if (KT) {
        const kT = new PT("fxaa", TT);
        kT.sourceTexture = bT, bT = kT.outputTexture, TT.addTask(kT)
      }
      if (hT !== tT || QT !== jT) {
        const kT = new mT("pass", TT);
        kT.sourceTexture = bT, kT.targetTexture = TT.textureManager.createRenderTargetTexture("pass_output", {
          size: {
            width: hT,
            height: QT
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
        }), bT = kT.outputTexture, TT.addTask(kT)
      }
      const zT = GT.FindMainObjectRenderer(TT);
      let JT = null;
      zT && (JT = zT.camera, zT.camera = kT), AT.getCaps().parallelShaderCompile = void 0, await TT.buildAsync();
      const oT = IT ?? (CT.hasHistoryTextures ? 32 : 1);
      for (let vT = 0; vT < oT; ++vT) TT.execute();
      TT.pausedExecution = !0, AT.getCaps().parallelShaderCompile = wT;
      for (let vT = FT; vT < aT.length; ++vT) TT.tasks[vT].dispose();
      TT.tasks.length = FT, zT && JT && (zT.camera = JT);
      const HT = TT.textureManager.getTextureFromHandle(bT);
      return HT.incrementReferences(), CT.resetBackBufferTextures(), await TT.buildAsync(), TT.pausedExecution = rT, new Promise((TT => {
        AT._readTexturePixels(HT, hT, QT, -1, 0, null, !0, !1, 0, 0).then((async kT => {
          HT.dispose(), DT(hT, QT, kT, xT ? void 0 : kT => TT(kT), lT, OT, !0, void 0, yT), xT && TT(null)
        }))
      }))
    }

    function RT(TT, kT, cT) {
      let lT = 0,
        MT = 0,
        KT = 0,
        OT = 0;
      if ("object" === typeof cT) {
        const yT = cT.precision ? Math.abs(cT.precision) : 1;
        cT.width && cT.height ? (lT = cT.height * yT, MT = cT.width * yT) : cT.width && !cT.height ? (MT = cT.width * yT, lT = Math.round(MT / TT.getAspectRatio(kT))) : cT.height && !cT.width ? (lT = cT.height * yT, MT = Math.round(lT * TT.getAspectRatio(kT))) : (MT = Math.round(TT.getRenderWidth() * yT), lT = Math.round(MT / TT.getAspectRatio(kT))), cT.finalWidth && cT.finalHeight ? (OT = cT.finalHeight, KT = cT.finalWidth) : cT.finalWidth && !cT.finalHeight ? (KT = cT.finalWidth, OT = Math.round(KT / TT.getAspectRatio(kT))) : cT.finalHeight && !cT.finalWidth ? (OT = cT.finalHeight, KT = Math.round(OT * TT.getAspectRatio(kT))) : (KT = MT, OT = lT)
      } else isNaN(cT) || (lT = cT, MT = cT, KT = cT, OT = cT);
      return MT && (MT = Math.floor(MT)), lT && (lT = Math.floor(lT)), KT && (KT = Math.floor(KT)), OT && (OT = Math.floor(OT)), {
        height: 0 | lT,
        width: 0 | MT,
        finalWidth: 0 | KT,
        finalHeight: 0 | OT
      }
    }
    const gT = {
      CreateScreenshot: ET,
      CreateScreenshotAsync: ZT,
      CreateScreenshotWithResizeAsync: uT,
      CreateScreenshotUsingRenderTarget: XT,
      CreateScreenshotUsingRenderTargetAsync: dT,
      CreateScreenshotForFrameGraphAsync: LT
    };
    let UT = !1;

    function YT() {
      if (UT) return;
      UT = !0;
      jT.h.CreateScreenshot = ET, jT.h.CreateScreenshotAsync = ZT, jT.h.CreateScreenshotUsingRenderTarget = XT, jT.h.CreateScreenshotUsingRenderTargetAsync = dT
    }
    YT()
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);