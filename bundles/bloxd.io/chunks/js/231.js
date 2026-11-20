export const id = 231;
export const ids = [231, 232];
export const modules = {
  39643: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => cU,
      e: () => jU
    });
    var tU = gU(39377),
      pU = gU(39380),
      EU = gU(36600),
      PU = gU(36761),
      TU = gU(39645),
      qU = gU(39610),
      KU = gU(36639);
    let cU = (() => {
        var UU;
        let RU, gU, qU = TU.e,
          KU = [],
          cU = [],
          GU = [],
          jU = [];
        return UU = class extends qU {
          constructor(UU, RU, gU, pU) {
            super(UU, gU, pU), this.groundColor = (0, tU.j)(this, KU, new PU.e(0, 0, 0)), this.direction = ((0, tU.j)(this, cU), (0, tU.j)(this, GU, void 0)), (0, tU.j)(this, jU), this.direction = RU || EU.n.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(UU) {
            return this.direction = EU.n.Normalize(UU.subtract(EU.n.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(UU, RU) {
            const gU = EU.n.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", gU.x, gU.y, gU.z, 0, RU), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), RU), this
          }
          transferToNodeMaterialEffect(UU, RU) {
            const gU = EU.n.Normalize(this.direction);
            return UU.setFloat3(RU, gU.x, gU.y, gU.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = EU.c.Identity()), this._worldMatrix
          }
          getTypeID() {
            return TU.e.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(UU, RU) {
            UU["HEMILIGHT" + RU] = !0
          }
        }, (() => {
          const EU = "function" === typeof Symbol && Symbol.metadata ? Object.create(qU[Symbol.metadata] ?? null) : void 0;
          RU = [(0, pU.l)()], gU = [(0, pU.I)()], (0, tU.i)(null, null, RU, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: UU => "groundColor" in UU,
              get: UU => UU.groundColor,
              set: (UU, RU) => {
                UU.groundColor = RU
              }
            },
            metadata: EU
          }, KU, cU), (0, tU.i)(null, null, gU, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: UU => "direction" in UU,
              get: UU => UU.direction,
              set: (UU, RU) => {
                UU.direction = RU
              }
            },
            metadata: EU
          }, GU, jU), EU && Object.defineProperty(UU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: EU
          })
        })(), UU
      })(),
      GU = !1;

    function jU() {
      GU || (GU = !0, qU.b.AddNodeConstructor("Light_Type_3", ((UU, RU) => () => new cU(UU, EU.n.Zero(), RU))), (0, KU.g)("BABYLON.HemisphericLight", cU))
    }
  },
  37301: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => pU
    });
    var tU = gU(37308);
    class pU {
      static GetPlanes(UU) {
        const RU = [];
        for (let gU = 0; gU < 6; gU++) RU.push(new tU.e(0, 0, 0, 0));
        return pU.GetPlanesToRef(UU, RU), RU
      }
      static GetNearPlaneToRef(UU, RU) {
        const gU = UU.m;
        RU.normal.x = gU[3] + gU[2], RU.normal.y = gU[7] + gU[6], RU.normal.z = gU[11] + gU[10], RU.d = gU[15] + gU[14], RU.normalize()
      }
      static GetFarPlaneToRef(UU, RU) {
        const gU = UU.m;
        RU.normal.x = gU[3] - gU[2], RU.normal.y = gU[7] - gU[6], RU.normal.z = gU[11] - gU[10], RU.d = gU[15] - gU[14], RU.normalize()
      }
      static GetLeftPlaneToRef(UU, RU) {
        const gU = UU.m;
        RU.normal.x = gU[3] + gU[0], RU.normal.y = gU[7] + gU[4], RU.normal.z = gU[11] + gU[8], RU.d = gU[15] + gU[12], RU.normalize()
      }
      static GetRightPlaneToRef(UU, RU) {
        const gU = UU.m;
        RU.normal.x = gU[3] - gU[0], RU.normal.y = gU[7] - gU[4], RU.normal.z = gU[11] - gU[8], RU.d = gU[15] - gU[12], RU.normalize()
      }
      static GetTopPlaneToRef(UU, RU) {
        const gU = UU.m;
        RU.normal.x = gU[3] - gU[1], RU.normal.y = gU[7] - gU[5], RU.normal.z = gU[11] - gU[9], RU.d = gU[15] - gU[13], RU.normalize()
      }
      static GetBottomPlaneToRef(UU, RU) {
        const gU = UU.m;
        RU.normal.x = gU[3] + gU[1], RU.normal.y = gU[7] + gU[5], RU.normal.z = gU[11] + gU[9], RU.d = gU[15] + gU[13], RU.normalize()
      }
      static GetPlanesToRef(UU, RU) {
        pU.GetNearPlaneToRef(UU, RU[0]), pU.GetFarPlaneToRef(UU, RU[1]), pU.GetLeftPlaneToRef(UU, RU[2]), pU.GetRightPlaneToRef(UU, RU[3]), pU.GetTopPlaneToRef(UU, RU[4]), pU.GetBottomPlaneToRef(UU, RU[5])
      }
      static IsPointInFrustum(UU, RU) {
        for (let gU = 0; gU < 6; gU++)
          if (RU[gU].dotCoordinate(UU) < 0) return !1;
        return !0
      }
    }
  },
  37308: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => pU
    });
    var tU = gU(36600);
    class pU {
      constructor(UU, RU, gU, pU) {
        this.normal = new tU.n(UU, RU, gU), this.d = pU
      }
      vgU() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new pU(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let UU = this.normal.getHashCode();
        return UU = 397 * UU ^ this.d, UU
      }
      normalize() {
        const UU = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let RU = 0;
        return 0 !== UU && (RU = 1 / UU), this.normal.x *= RU, this.normal.y *= RU, this.normal.z *= RU, this.d *= RU, this
      }
      transform(UU) {
        const RU = pU._TmpMatrix;
        UU.invertToRef(RU);
        const gU = RU.m,
          tU = this.normal.x,
          EU = this.normal.y,
          PU = this.normal.z,
          TU = this.d,
          qU = tU * gU[0] + EU * gU[1] + PU * gU[2] + TU * gU[3],
          KU = tU * gU[4] + EU * gU[5] + PU * gU[6] + TU * gU[7],
          cU = tU * gU[8] + EU * gU[9] + PU * gU[10] + TU * gU[11],
          GU = tU * gU[12] + EU * gU[13] + PU * gU[14] + TU * gU[15];
        return new pU(qU, KU, cU, GU)
      }
      dotCoordinate(UU) {
        return this.normal.x * UU.x + this.normal.y * UU.y + this.normal.z * UU.z + this.d
      }
      copyFromPoints(UU, RU, gU) {
        const tU = RU.x - UU.x,
          pU = RU.y - UU.y,
          EU = RU.z - UU.z,
          PU = gU.x - UU.x,
          TU = gU.y - UU.y,
          qU = gU.z - UU.z,
          KU = pU * qU - EU * TU,
          cU = EU * PU - tU * qU,
          GU = tU * TU - pU * PU,
          jU = Math.sqrt(KU * KU + cU * cU + GU * GU);
        let uU;
        return uU = 0 !== jU ? 1 / jU : 0, this.normal.x = KU * uU, this.normal.y = cU * uU, this.normal.z = GU * uU, this.d = -(this.normal.x * UU.x + this.normal.y * UU.y + this.normal.z * UU.z), this
      }
      isFrontFacingTo(UU, RU) {
        return tU.n.Dot(this.normal, UU) <= RU
      }
      signedDistanceTo(UU) {
        return tU.n.Dot(UU, this.normal) + this.d
      }
      static FromArray(UU) {
        return new pU(UU[0], UU[1], UU[2], UU[3])
      }
      static FromPoints(UU, RU, gU) {
        const tU = new pU(0, 0, 0, 0);
        return tU.copyFromPoints(UU, RU, gU), tU
      }
      static FromPositionAndNormal(UU, RU) {
        const gU = new pU(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(UU, RU, gU)
      }
      static FromPositionAndNormalToRef(UU, RU, gU) {
        return gU.normal.PgU(RU), gU.normal.normalize(), gU.d = -UU.dot(gU.normal), gU
      }
      static SignedDistanceToPlaneFromPositionAndNormal(UU, RU, gU) {
        const pU = -(RU.x * UU.x + RU.y * UU.y + RU.z * UU.z);
        return tU.n.Dot(gU, RU) + pU
      }
    }
    pU._TmpMatrix = tU.c.Identity()
  },
  37641: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => tU
    });
    class tU {
      constructor(UU, RU, gU, tU) {
        this.x = UU, this.y = RU, this.width = gU, this.height = tU
      }
      toGlobal(UU, RU) {
        return new tU(this.x * UU, this.y * RU, this.width * UU, this.height * RU)
      }
      toGlobalToRef(UU, RU, gU) {
        return gU.x = this.x * UU, gU.y = this.y * RU, gU.width = this.width * UU, gU.height = this.height * RU, this
      }
      clone() {
        return new tU(this.x, this.y, this.width, this.height)
      }
    }
  },
  38234: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => EU
    });
    var tU = gU(38236);
    const pU = (UU, RU, gU) => UU ? UU.getClassName && "Mesh" === UU.getClassName() ? null : !UU.getClassName || "SubMesh" !== UU.getClassName() && "PhysicsBody" !== UU.getClassName() ? UU.clone ? UU.clone() : Array.isArray(UU) ? UU.slice() : gU && "object" === typeof UU ? {
      ...UU
    } : null : UU.clone(RU) : null;
    class EU {
      static DeepCopy(UU, RU, gU, EU) {
        let PU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const TU = function(UU) {
          const RU = [];
          do {
            const gU = Object.getOwnPropertyNames(UU);
            for (const UU of gU) - 1 === RU.indexOf(UU) && RU.push(UU)
          } while (UU = Object.getPrototypeOf(UU));
          return RU
        }(UU);
        for (const KU of TU) {
          if ("_" === KU[0] && (!EU || -1 === EU.indexOf(KU))) continue;
          if (KU.endsWith("Observable")) continue;
          if (gU && -1 !== gU.indexOf(KU)) continue;
          const TU = UU[KU],
            cU = typeof TU;
          if ("function" !== cU) try {
            if ("object" === cU)
              if (TU instanceof Uint8Array) RU[KU] = Uint8Array.from(TU);
              else if (TU instanceof Array) {
              if (RU[KU] = [], TU.length > 0)
                if ("object" == typeof TU[0])
                  for (let UU = 0; UU < TU.length; UU++) {
                    const gU = pU(TU[UU], RU, PU); - 1 === RU[KU].indexOf(gU) && RU[KU].push(gU)
                  } else RU[KU] = TU.slice(0)
            } else RU[KU] = pU(TU, RU, PU);
            else RU[KU] = TU
          } catch (qU) {
            tU.e.Warn(qU.message)
          }
        }
      }
    }
  },
  37439: (UU, RU, gU) => {
    function tU() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (UU => {
        const RU = 16 * Math.random() | 0;
        return ("x" === UU ? RU : 3 & RU | 8).toString(16)
      }))
    }
    gU.d(RU, {
      b: () => tU
    })
  },
  38236: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => tU
    });
    class tU {
      static _CheckLimit(UU, RU) {
        let gU = tU._LogLimitOutputs[UU];
        return gU ? gU.current++ : (gU = {
          limit: RU,
          current: 1
        }, tU._LogLimitOutputs[UU] = gU), gU.current <= gU.limit
      }
      static _GenerateLimitMessage(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const gU = tU._LogLimitOutputs[UU];
        if (!gU || !tU.MessageLimitReached) return;
        const pU = this._Levels[RU];
        gU.current === gU.limit && tU[pU.name](tU.MessageLimitReached.replace(/%LIMIT%/g, "" + gU.limit).replace(/%TYPE%/g, pU.name ?? ""))
      }
      static _AddLogEntry(UU) {
        tU._LogCache = UU + tU._LogCache, tU.OnNewCacheEntry && tU.OnNewCacheEntry(UU)
      }
      static _FormatMessage(UU) {
        const RU = UU => UU < 10 ? "0" + UU : "" + UU,
          gU = new Date;
        return "[" + RU(gU.getHours()) + ":" + RU(gU.getMinutes()) + ":" + RU(gU.getSeconds()) + "]: " + UU
      }
      static _LogDisabled(UU, RU) {}
      static _LogEnabled() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          RU = arguments.length > 1 ? arguments[1] : void 0,
          gU = arguments.length > 2 ? arguments[2] : void 0;
        const pU = Array.isArray(RU) ? RU[0] : RU;
        if (void 0 !== gU && !tU._CheckLimit(pU, gU)) return;
        const EU = tU._FormatMessage(pU),
          PU = this._Levels[UU],
          TU = Array.isArray(RU) ? RU.slice(1) : [];
        PU.logFunc && PU.logFunc("BJS - " + EU, ...TU);
        const qU = `<div style='color:${PU.color}'>${EU}</div><br>`;
        tU._AddLogEntry(qU), tU._GenerateLimitMessage(pU, UU)
      }
      static get LogCache() {
        return tU._LogCache
      }
      static ClearLogCache() {
        tU._LogCache = "", tU._LogLimitOutputs = {}, tU.errorsCount = 0
      }
      static set LogLevels(UU) {
        tU.Log = tU._LogDisabled, tU.Warn = tU._LogDisabled, tU.Error = tU._LogDisabled;
        const RU = [tU.MessageLogLevel, tU.WarningLogLevel, tU.ErrorLogLevel];
        for (const gU of RU)
          if ((UU & gU) === gU) {
            const UU = this._Levels[gU];
            tU[UU.name] = tU._LogEnabled.bind(tU, gU)
          }
      }
    }
    tU.NoneLogLevel = 0, tU.MessageLogLevel = 1, tU.WarningLogLevel = 2, tU.ErrorLogLevel = 4, tU.AllLogLevel = 7, tU.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", tU._LogCache = "", tU._LogLimitOutputs = {}, tU._Levels = [{}, {
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
    }], tU.errorsCount = 0, tU.Log = tU._LogEnabled.bind(tU, tU.MessageLogLevel), tU.Warn = tU._LogEnabled.bind(tU, tU.WarningLogLevel), tU.Error = tU._LogEnabled.bind(tU, tU.ErrorLogLevel)
  },
  60532: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      CreateScreenshot: () => vU,
      CreateScreenshotAsync: () => dU,
      CreateScreenshotForFrameGraphAsync: () => yU,
      CreateScreenshotUsingRenderTarget: () => SU,
      CreateScreenshotUsingRenderTargetAsync: () => sU,
      CreateScreenshotWithResizeAsync: () => HU,
      RegisterScreenshotTools: () => AU,
      ScreenshotTools: () => FU
    });
    var tU = gU(39855),
      pU = gU(41170),
      EU = gU(41147),
      PU = gU(39395),
      TU = gU(41152),
      qU = gU(36622),
      KU = gU(36600);
    class cU extends TU.f {
      static _GetDefines(UU) {
        if (!UU) return null;
        return UU.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
      }
      _gatherImports(UU, RU) {
        UU ? (this._webGPUReady = !0, RU.push(Promise.all([gU.e(367).then((() => gU(60871))), gU.e(368).then((() => gU(60877)))]))) : RU.push(Promise.all([gU.e(369).then((() => gU(60883))), gU.e(370).then((() => gU(60891)))]))
      }
      constructor(UU) {
        const RU = {
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: UU,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || qU.c.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          vertexShader: cU.VertexUrl,
          fragmentShader: cU.FragmentUrl,
          uniforms: cU.Uniforms
        };
        super({
          ...RU,
          defines: cU._GetDefines(RU.engine)
        }), this.texelSize = new KU.l(0, 0)
      }
      bind() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.bind(UU), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
      }
    }
    cU.VertexUrl = "fxaa", cU.FragmentUrl = "fxaa", cU.Uniforms = ["texelSize"];
    class GU extends EU.e {
      getClassName() {
        return "FxaaPostProcess"
      }
      constructor(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          pU = arguments.length > 3 ? arguments[3] : void 0,
          EU = arguments.length > 4 ? arguments[4] : void 0,
          PU = arguments.length > 5 ? arguments[5] : void 0,
          TU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const qU = {
          uniforms: cU.Uniforms,
          size: "number" === typeof RU ? RU : void 0,
          camera: gU,
          samplingMode: pU || tU.e.BILINEAR_SAMPLINGMODE,
          engine: EU,
          reusable: PU,
          textureType: TU,
          ...RU
        };
        super(UU, cU.FragmentUrl, {
          effectWrapper: "number" !== typeof RU && RU.effectWrapper ? void 0 : new cU(UU, EU, qU),
          ...qU
        }), this.onApplyObservable.add((UU => {
          this._effectWrapper.texelSize = this.texelSize
        }))
      }
      static _Parse(UU, RU, gU, tU) {
        return PU.b.Parse((() => new GU(UU.name, UU.options, RU, UU.renderTargetSamplingMode, gU.WC(), UU.reusable)), UU, gU, tU)
      }
    }
    var jU = gU(38236),
      uU = gU(39473),
      CU = gU(41181),
      hU = gU(41165),
      QU = gU(39268);
    const eU = 0;
    class WU {
      constructor(UU, RU, gU) {
        this.name = UU, this._parentTask = RU, this._context = gU, this.disabled = !1
      }
      setInitializeFunc(UU) {
        this._initFunc = UU
      }
      setExecuteFunc(UU) {
        this._executeFunc = UU
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
    class fU extends WU {
      static IsObjectListPass(UU) {
        return void 0 !== UU.setObjectList
      }
      get objectList() {
        return this._objectList
      }
      setObjectList(UU) {
        this._objectList = UU
      }
      constructor(UU, RU, gU, tU) {
        super(UU, RU, gU), this._engine = tU
      }
      _isValid() {
        const UU = super._isValid();
        return UU || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
      }
    }
    class xU extends WU {
      static IsRenderPass(UU) {
        return void 0 !== UU.setRenderTarget
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
      constructor(UU, RU, gU, tU) {
        super(UU, RU, gU), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = tU
      }
      setRenderTarget(UU) {
        this._renderTarget = UU
      }
      setRenderTargetDepth(UU) {
        this._renderTargetDepth = UU
      }
      addDependencies(UU) {
        if (void 0 !== UU)
          if (Array.isArray(UU))
            for (const RU of UU) this._dependencies.add(RU);
          else this._dependencies.add(UU)
      }
      collectDependencies(UU) {
        const RU = this._dependencies.keys();
        for (let gU = RU.next(); !0 !== gU.done; gU = RU.next()) UU.add(gU.value);
        if (void 0 !== this._renderTarget)
          if (Array.isArray(this._renderTarget))
            for (const gU of this._renderTarget) void 0 !== gU && UU.add(gU);
          else UU.add(this._renderTarget);
        void 0 !== this._renderTargetDepth && UU.add(this._renderTargetDepth)
      }
      setOutputLayerAndFaceIndices(UU) {
        const RU = this.frameGraphRenderTarget.renderTargetWrapper;
        if (RU)
          for (const gU of UU) RU.setLayerAndFaceIndex(gU.targetIndex, gU.layerIndex, gU.faceIndex)
      }
      _initialize() {
        this._frameGraphRenderTarget = this._context.createRenderTarget(this.name, this._renderTarget, this._renderTargetDepth, this.depthReadOnly, this.stencilReadOnly), super._initialize()
      }
      _execute() {
        this._context.bindRenderTarget(this._frameGraphRenderTarget), super._execute(), this._context.restoreDefaultFramebuffer()
      }
      _isValid() {
        const UU = super._isValid();
        return UU || (void 0 !== this._renderTarget || void 0 !== this.renderTargetDepth ? null : "Render target and render target depth cannot both be undefined.")
      }
      _dispose() {
        this._frameGraphRenderTarget?.dispose()
      }
    }
    var mU = gU(36624);
    class IU {
      get name() {
        return this._name
      }
      set name(UU) {
        this._name = UU
      }
      get disabled() {
        return this._disabled
      }
      set disabled(UU) {
        this._disabled = UU
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
      constructor(UU, RU) {
        this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new mU.b, this.onBeforeTaskExecute = new mU.b, this.onAfterTaskExecute = new mU.b, this.name = UU, this._frameGraph = RU, this._reset()
      }
      _reset() {
        for (const UU of this._passes) UU._dispose();
        for (const UU of this._passesDisabled) UU._dispose();
        this._passes.length = 0, this._passesDisabled.length = 0
      }
      _addPass(UU, RU) {
        RU ? this._passesDisabled.push(UU) : this._passes.push(UU)
      }
      _checkTask() {
        let UU, RU = null,
          gU = null;
        for (const TU of this._passes) {
          const tU = TU._isValid();
          if (tU) throw new Error(`Pass "${TU.name}" is not valid. ${tU}`);
          if (xU.IsRenderPass(TU)) {
            const UU = Array.isArray(TU.renderTarget) ? TU.renderTarget : [TU.renderTarget];
            RU = [];
            for (const gU of UU) void 0 !== gU && RU.push(this._frameGraph.textureManager.getTextureFromHandle(gU));
            gU = void 0 !== TU.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(TU.renderTargetDepth) : null
          } else fU.IsObjectListPass(TU) && (UU = TU.objectList)
        }
        let tU, pU = null,
          EU = [],
          PU = null;
        for (const TU of this._passesDisabled) {
          const UU = TU._isValid();
          if (UU) throw new Error(`Pass "${TU.name}" is not valid. ${UU}`);
          if (xU.IsRenderPass(TU)) {
            const UU = Array.isArray(TU.renderTarget) ? TU.renderTarget : [TU.renderTarget];
            pU = [];
            for (const RU of UU) void 0 !== RU && pU.push(this._frameGraph.textureManager.getTextureFromHandle(RU));
            EU = UU, PU = void 0 !== TU.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(TU.renderTargetDepth) : null
          } else fU.IsObjectListPass(TU) && (tU = TU.objectList)
        }
        if (this._passesDisabled.length > 0) {
          if (!this._checkSameRenderTarget(RU, pU)) {
            let UU = !0;
            for (const RU of EU)
              if (void 0 !== RU && !this._frameGraph.textureManager.isHistoryTexture(RU)) {
                UU = !1;
                break
              } if (!UU) throw new Error(`The output texture of the task "${this.name}" is different when it is enabled or disabled.`)
          }
          if (gU !== PU && null !== PU) throw new Error(`The output depth texture of the task "${this.name}" is different when it is enabled or disabled.`);
          if (UU !== tU && null !== tU) throw new Error(`The output object list of the task "${this.name}" is different when it is enabled or disabled.`)
        }
      }
      _execute() {
        const UU = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
        this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const RU of UU) RU._execute()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
        this.onAfterTaskExecute.notifyObservers(this)
      }
      _initializePasses() {
        this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const UU of this._passes) UU._initialize();
          for (const UU of this._passesDisabled) UU._initialize()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
      }
      _checkSameRenderTarget(UU, RU) {
        if (null === UU || null === RU) return UU === RU;
        if (UU.length !== RU.length) return !1;
        for (let gU = 0; gU < UU.length; gU++)
          if (UU[gU] !== RU[gU]) return !1;
        return !0
      }
    }
    class JU extends IU {
      get alphaMode() {
        return this.postProcess.alphaMode
      }
      set alphaMode(UU) {
        this.postProcess.alphaMode = UU
      }
      get drawWrapper() {
        return this._postProcessDrawWrapper
      }
      constructor(UU, RU, gU) {
        super(UU, RU), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = gU, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture = this._frameGraph.textureManager.createDanglingHandle(), this.outputDepthAttachmentTexture = this._frameGraph.textureManager.createDanglingHandle()
      }
      isReady() {
        return this.postProcess.isReady()
      }
      getClassName() {
        return "FrameGraphPostProcessTask"
      }
      record() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          RU = arguments.length > 1 ? arguments[1] : void 0,
          gU = arguments.length > 2 ? arguments[2] : void 0;
        if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
        const tU = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
        if (tU && (tU.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, tU), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentTexture, this.depthAttachmentTexture), tU) {
          const UU = this._frameGraph.textureManager.getTextureAbsoluteDimensions(tU);
          this._sourceWidth = UU.width, this._sourceHeight = UU.height
        }
        const pU = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
        this._outputWidth = pU.size.width, this._outputHeight = pU.size.height;
        const EU = this._frameGraph.addRenderPass(this.name);
        if (EU.depthReadOnly = this.depthReadOnly, EU.stencilReadOnly = this.stencilReadOnly, EU.addDependencies(this.sourceTexture), EU.setRenderTarget(this.outputTexture), EU.setRenderTargetDepth(this.depthAttachmentTexture), EU.setExecuteFunc((UU => {
            UU.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && UU.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), RU?.(UU), this.viewport && UU.setViewport(this.viewport), UU.applyFullScreenEffect(this._postProcessDrawWrapper, (() => {
              void 0 !== this.sourceTexture && UU.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), gU?.(UU), this.postProcess.bind()
            }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), UU.restoreDefaultFramebuffer(), UU.popDebugGroup()
          })), !UU) {
          const UU = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
          UU.depthReadOnly = this.depthReadOnly, UU.stencilReadOnly = this.stencilReadOnly, UU.addDependencies(this.sourceTexture), UU.setRenderTarget(this.outputTexture), UU.setRenderTargetDepth(this.depthAttachmentTexture), UU.setExecuteFunc((UU => {
            void 0 !== this.sourceTexture && 0 === this.alphaMode && (this.viewport && UU.setViewport(this.viewport), UU.copyTexture(this.sourceTexture, void 0, void 0 !== this.viewport))
          }))
        }
        return EU
      }
      dispose() {
        this.postProcess.dispose(), super.dispose()
      }
    }
    class wU extends JU {
      constructor(UU, RU, gU) {
        super(UU, RU, gU || new cU(UU, RU.engine))
      }
      getClassName() {
        return "FrameGraphFXAATask"
      }
      record() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          RU = arguments.length > 1 ? arguments[1] : void 0,
          gU = arguments.length > 2 ? arguments[2] : void 0;
        const tU = super.record(UU, RU, gU);
        return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, tU
      }
    }
    var nU = gU(41179);
    class bU extends JU {
      constructor(UU, RU, gU) {
        super(UU, RU, gU || new nU.d(UU, RU.engine))
      }
      getClassName() {
        return "FrameGraphPassTask"
      }
    }
    var oU = gU(39468),
      ZU = gU(39554),
      aU = gU(39513),
      YU = gU(39643),
      BU = gU(36761);
    class VU {
      getRenderCamera(UU) {
        if (this._renderCamera) return this._renderCamera;
        {
          let RU;
          return RU = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, UU && RU && RU.isRigCamera ? RU.rigParent : RU
        }
      }
      setRenderCamera(UU) {
        this._renderCamera = UU
      }
      _getSharedGizmoLight() {
        return this._sharedGizmoLight || (this._sharedGizmoLight = new YU.b("shared gizmo light", new KU.n(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = BU.e.Gray()), this._sharedGizmoLight
      }
      static get DefaultUtilityLayer() {
        return null == VU._DefaultUtilityLayer ? VU._CreateDefaultUtilityLayerFromScene(qU.c.LastCreatedScene) : VU._DefaultUtilityLayer
      }
      static _CreateDefaultUtilityLayerFromScene(UU) {
        return VU._DefaultUtilityLayer = new VU(UU), VU._DefaultUtilityLayer.originalScene.HZ.addOnce((() => {
          VU._DefaultUtilityLayer = null
        })), VU._DefaultUtilityLayer
      }
      static get DefaultKeepDepthUtilityLayer() {
        return null == VU._DefaultKeepDepthUtilityLayer ? VU._CreateDefaultKeepUtilityLayerFromScene(qU.c.LastCreatedScene) : VU._DefaultKeepDepthUtilityLayer
      }
      static _CreateDefaultKeepUtilityLayerFromScene(UU) {
        return VU._DefaultKeepDepthUtilityLayer = new VU(UU), VU._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, VU._DefaultKeepDepthUtilityLayer.originalScene.HZ.addOnce((() => {
          VU._DefaultKeepDepthUtilityLayer = null
        })), VU._DefaultKeepDepthUtilityLayer
      }
      constructor(UU) {
        let RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.originalScene = UU, this.handleEvents = RU, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.processAllEvents = !1, this.pickingEnabled = !0, this.onPointerOutObservable = new mU.b, this.utilityLayerScene = new oU.f(UU.WC(), {
          virtual: !0,
          useFloatingOrigin: UU.floatingOriginMode
        }), this.utilityLayerScene.useRightHandedSystem = UU.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), RU && (this._originalPointerObserver = UU.onPrePointerObservable.add((RU => {
          if (!this.utilityLayerScene.activeCamera) return;
          if (!this.pickingEnabled) return;
          if (!this.processAllEvents && RU.type !== ZU.e.POINTERMOVE && RU.type !== ZU.e.POINTERUP && RU.type !== ZU.e.POINTERDOWN && RU.type !== ZU.e.POINTERDOUBLETAP) return;
          this.utilityLayerScene.pointerX = UU.pointerX, this.utilityLayerScene.pointerY = UU.pointerY;
          const gU = RU.event;
          if (UU.isPointerCaptured(gU.pointerId)) return void(this._pointerCaptures[gU.pointerId] = !1);
          const tU = gU => {
              let tU;
              if (RU.nearInteractionPickingInfo) tU = RU.nearInteractionPickingInfo.pickedMesh.aZ() == gU ? RU.nearInteractionPickingInfo : new aU.b;
              else if (gU !== this.utilityLayerScene && RU.originalPickingInfo) tU = RU.originalPickingInfo;
              else {
                let pU = null;
                this._renderCamera && (pU = gU._activeCamera, gU._activeCamera = this._renderCamera, RU.ray = null), tU = RU.ray ? gU.pickWithRay(RU.ray) : gU.Hj(UU.pointerX, UU.pointerY), pU && (gU._activeCamera = pU)
              }
              return tU
            },
            pU = tU(this.utilityLayerScene);
          if (!RU.ray && pU && (RU.ray = pU.ray), RU.originalPickingInfo?.aimTransform && pU && (pU.aimTransform = RU.originalPickingInfo.aimTransform, pU.gripTransform = RU.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(RU), this.onlyCheckPointerDownEvents && RU.type != ZU.e.POINTERDOWN) return RU.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new ZU.k(RU.type, RU.event, pU), RU.type), void(RU.type === ZU.e.POINTERUP && this._pointerCaptures[gU.pointerId] && (this._pointerCaptures[gU.pointerId] = !1));
          if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) pU && pU.hit && (RU.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new ZU.k(RU.type, RU.event, pU), RU.type), RU.skipOnPointerObservable = !0);
          else {
            const gU = tU(UU),
              EU = RU.event;
            gU && pU && (0 === pU.distance && gU.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(gU.pickedMesh) ? (this._notifyObservers(RU, gU, EU), RU.skipOnPointerObservable = !0) : RU.type === ZU.e.POINTERDOWN ? (this._pointerCaptures[EU.pointerId] = !0, this._notifyObservers(RU, gU, EU)) : RU.type !== ZU.e.POINTERMOVE && RU.type !== ZU.e.POINTERUP || (this._lastPointerEvents[EU.pointerId] && (this.onPointerOutObservable.notifyObservers(EU.pointerId), delete this._lastPointerEvents[EU.pointerId]), this._notifyObservers(RU, gU, EU)) : !this._pointerCaptures[EU.pointerId] && (pU.distance < gU.distance || 0 === gU.distance) ? (this._notifyObservers(RU, pU, EU), RU.skipOnPointerObservable || (RU.skipOnPointerObservable = pU.distance > 0)) : !this._pointerCaptures[EU.pointerId] && pU.distance >= gU.distance && (this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(gU.pickedMesh) ? (this._notifyObservers(RU, gU, EU), RU.skipOnPointerObservable = !0) : (RU.type !== ZU.e.POINTERMOVE && RU.type !== ZU.e.POINTERUP || this._lastPointerEvents[EU.pointerId] && (this.onPointerOutObservable.notifyObservers(EU.pointerId), delete this._lastPointerEvents[EU.pointerId]), this._notifyObservers(RU, pU, EU))), RU.type === ZU.e.POINTERUP && this._pointerCaptures[EU.pointerId] && (this._pointerCaptures[EU.pointerId] = !1))
          }
        })), this._originalPointerObserver && UU.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, gU || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((UU => {
          this.shouldRender && UU == this.getRenderCamera() && this.render()
        }))), this._sceneDisposeObserver = this.originalScene.HZ.add((() => {
          this.dispose()
        })), this._updateCamera()
      }
      _notifyObservers(UU, RU, gU) {
        UU.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new ZU.k(UU.type, UU.event, RU), UU.type), this._lastPointerEvents[gU.pointerId] = !0)
      }
      render() {
        if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
          const UU = this.utilityLayerScene.activeCamera.aZ(),
            RU = this.utilityLayerScene.activeCamera;
          RU._scene = this.utilityLayerScene, RU.leftCamera && (RU.leftCamera._scene = this.utilityLayerScene), RU.rightCamera && (RU.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), RU._scene = UU, RU.leftCamera && (RU.leftCamera._scene = UU), RU.rightCamera && (RU.rightCamera._scene = UU)
        }
      }
      dispose() {
        this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.HZ.remove(this._sceneDisposeObserver), this._originalPointerObserver && this.originalScene.onPrePointerObservable.remove(this._originalPointerObserver), this.utilityLayerScene.dispose()
      }
      _updateCamera() {
        this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
      }
    }
    VU._DefaultUtilityLayer = null, VU._DefaultKeepDepthUtilityLayer = null;
    const rU = {
      FindMainCamera: function(UU) {
        return UU.findMainCamera()
      },
      FindMainObjectRenderer: function(UU) {
        return UU.findMainObjectRenderer()
      },
      CreateUtilityLayerRenderer: function(UU) {
        let RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const gU = UU.Zh,
          tU = new VU(gU, RU, !0);
        tU.utilityLayerScene.activeCamera = gU.activeCamera;
        let pU = rU.FindMainCamera(gU.frameGraph);
        !pU && gU.cameras.length > 0 && (pU = gU.cameras[0]), pU && (tU.setRenderCamera(pU), tU.utilityLayerScene.activeCamera = pU);
        const EU = gU.onAfterRenderObservable.add((() => {
          tU.render()
        }));
        return tU.utilityLayerScene.HZ.addOnce((() => {
          gU.onAfterRenderObservable.remove(EU)
        })), tU
      }
    };
    let XU = null;

    function vU(UU, RU, gU, tU) {
      let pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        EU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        PU = arguments.length > 6 ? arguments[6] : void 0,
        TU = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        qU = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
      const {
        height: KU,
        width: cU
      } = kU(UU, RU, gU);
      if (!KU || !cU) return void jU.e.Error("Invalid 'size' parameter !");
      const GU = RU.aZ();
      let CU = GU.activeCamera !== RU;
      if (GU.frameGraph) {
        const UU = rU.FindMainObjectRenderer(GU.frameGraph);
        UU && (CU = UU.camera !== RU)
      }
      CU ? SU(UU, RU, gU, (UU => {
        if (EU) {
          const RU = new Blob([UU]);
          uU.g.DownloadBlob(RU), tU && tU("")
        } else tU && tU(UU)
      }), pU, 1, UU.getCreationOptions().antialias, void 0, void 0, void 0, void 0, PU) : UU.onEndFrameObservable.addOnce((() => {
        XU || (XU = document.createElement("canvas")), XU.width = cU, XU.height = KU;
        const RU = XU.getContext("2d"),
          gU = UU.getRenderingCanvas();
        if (!RU || !gU) return void jU.e.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
        const CU = gU.width,
          hU = gU.height,
          QU = XU.width,
          eU = XU.height,
          WU = QU / CU,
          fU = eU / hU,
          xU = TU ? Math.max(WU, fU) : Math.min(WU, fU),
          mU = CU * xU,
          IU = hU * xU,
          JU = (QU - mU) / 2,
          wU = (eU - IU) / 2;
        RU.save(), RU.fillStyle = qU ? GU.clearColor.toHexString() : "rgba(0, 0, 0, 0)", RU.fillRect(0, 0, cU, KU), RU.restore(), RU.drawImage(gU, 0, 0, CU, hU, JU, wU, mU, IU), EU ? (uU.g.EncodeScreenshotCanvasData(XU, void 0, pU, void 0, PU), tU && tU("")) : uU.g.EncodeScreenshotCanvasData(XU, tU, pU, void 0, PU)
      }))
    }
    async function dU(UU, RU, gU) {
      let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        pU = arguments.length > 4 ? arguments[4] : void 0,
        EU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        PU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        TU = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      return await new Promise(((qU, KU) => {
        vU(UU, RU, gU, (UU => {
          "undefined" !== typeof UU ? qU(UU) : KU(new Error("Data is undefined"))
        }), tU, TU, pU, EU, PU)
      }))
    }
    async function HU(UU, RU, gU, tU) {
      let pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        EU = arguments.length > 5 ? arguments[5] : void 0,
        PU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return await new Promise((TU => {
        vU(UU, RU, {
          width: gU,
          height: tU
        }, (() => {
          TU()
        }), pU, !0, EU, PU)
      }))
    }

    function SU(UU, RU, EU, PU) {
      let TU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        qU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
        KU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        cU = arguments.length > 7 ? arguments[7] : void 0,
        uU = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        eU = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        WU = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
        fU = arguments.length > 11 ? arguments[11] : void 0,
        xU = arguments.length > 12 ? arguments[12] : void 0,
        mU = arguments.length > 13 ? arguments[13] : void 0,
        IU = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
        JU = arguments.length > 15 ? arguments[15] : void 0;
      const wU = RU.aZ();
      if (wU.frameGraph) return void yU(wU.frameGraph, RU, EU, TU, qU, KU, cU, fU, mU, !PU).then((UU => {
        PU && PU(UU)
      }));
      const {
        height: nU,
        width: bU,
        finalWidth: oU,
        finalHeight: ZU
      } = kU(UU, RU, EU), aU = {
        width: bU,
        height: nU
      };
      if (!nU || !bU) return void jU.e.Error("Invalid 'size' parameter !");
      UU.skipFrameRender = !0;
      const YU = UU.getRenderWidth,
        BU = UU.getRenderHeight;
      UU.getRenderWidth = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && UU._currentRenderTarget ? UU._currentRenderTarget.width : bU
      }, UU.getRenderHeight = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && UU._currentRenderTarget ? UU._currentRenderTarget.height : nU
      }, UU.onResizeObservable.hasObservers() && UU.onResizeObservable.notifyObservers(UU);
      const VU = new pU.e("screenShot", aU, wU, !1, !1, 0, !1, tU.e.BILINEAR_SAMPLINGMODE, void 0, eU, void 0, void 0, void 0, qU);
      VU.renderList = wU.meshes.slice(), VU.samples = qU, VU.renderSprites = uU, VU.activeCamera = RU, VU.forceLayerMaskCheck = WU, xU?.(VU);
      const rU = mU || CU.DumpData,
        XU = () => {
          wU.incrementRenderId(), wU.resetCachedMaterial(), (0, QU.c)((() => VU.isReadyForRendering() && RU.isReady(!0)), (() => {
            UU.onEndFrameObservable.addOnce((() => {
              oU === bU && ZU === nU ? VU.readPixels(void 0, void 0, void 0, !1).then((UU => {
                rU(bU, nU, UU, PU, TU, cU, !0, void 0, fU), VU.dispose()
              })) : (UU.isWebGPU ? gU.e(363).then((() => gU(60812))) : gU.e(364).then((() => gU(60817)))).then((async () => await (0, hU.c)("pass", VU.getInternalTexture(), wU, void 0, void 0, void 0, oU, ZU).then((RU => {
                UU._readTexturePixels(RU, oU, ZU, -1, 0, null, !0, !1, 0, 0).then((UU => {
                  rU(oU, ZU, UU, PU, TU, cU, !0, void 0, fU), RU.dispose()
                }))
              }))))
            })), wU.incrementRenderId(), wU.resetCachedMaterial();
            const tU = wU.activeCamera,
              pU = wU.activeCameras,
              EU = RU.outputRenderTarget,
              qU = wU.spritesEnabled;
            wU.activeCamera = RU, wU.activeCameras = null, RU.outputRenderTarget = VU, wU.spritesEnabled = uU;
            const KU = wU.meshes;
            wU.meshes = VU.renderList || wU.meshes;
            try {
              wU.render()
            } finally {
              wU.activeCamera = tU, wU.activeCameras = pU, RU.outputRenderTarget = EU, wU.spritesEnabled = qU, wU.meshes = KU, UU.getRenderWidth = YU, UU.getRenderHeight = BU, UU.onResizeObservable.hasObservers() && UU.onResizeObservable.notifyObservers(UU), RU.getProjectionMatrix(!0), UU.skipFrameRender = !1
            }
          }), (() => {
            UU.skipFrameRender = !1, UU.getRenderWidth = YU, UU.getRenderHeight = BU, JU?.()
          }), void 0, IU)
        };
      if (KU) {
        const UU = new GU("antialiasing", 1, wU.activeCamera);
        VU.addPostProcess(UU), UU.autoClear = !0, UU.onEffectCreatedObservable.addOnce((UU => {
          UU.isReady() ? XU() : UU.onCompiled = () => {
            XU()
          }
        }))
      } else XU()
    }
    async function sU(UU, RU, gU) {
      let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        EU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        PU = arguments.length > 6 ? arguments[6] : void 0,
        TU = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        qU = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        KU = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
        cU = arguments.length > 10 ? arguments[10] : void 0,
        GU = arguments.length > 11 ? arguments[11] : void 0,
        jU = arguments.length > 12 ? arguments[12] : void 0;
      return await new Promise(((uU, CU) => {
        SU(UU, RU, gU, (UU => {
          "undefined" !== typeof UU ? uU(UU) : CU(new Error("Data is undefined"))
        }), tU, pU, EU, PU, TU, qU, KU, cU, GU, jU)
      }))
    }
    async function yU(UU, RU, gU) {
      let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        EU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        PU = arguments.length > 6 ? arguments[6] : void 0,
        TU = arguments.length > 7 ? arguments[7] : void 0,
        qU = arguments.length > 8 ? arguments[8] : void 0,
        KU = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        cU = arguments.length > 10 ? arguments[10] : void 0;
      const GU = UU.engine,
        jU = UU.textureManager,
        {
          height: uU,
          width: hU,
          finalWidth: QU,
          finalHeight: WU
        } = kU(GU, RU, gU),
        fU = {
          width: hU,
          height: uU
        },
        xU = qU || CU.DumpData,
        mU = UU.tasks,
        IU = mU.length,
        JU = UU.pausedExecution,
        nU = GU.getCaps().parallelShaderCompile;
      jU.setBackBufferTextures(0, 0, {
        size: fU,
        options: {
          createMipMaps: !1,
          samples: pU,
          types: [0],
          formats: [5],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot color"]
        },
        sizeIsPercentage: !1
      }, {
        size: fU,
        options: {
          createMipMaps: !1,
          samples: pU,
          types: [0],
          formats: [GU.isStencilEnable ? 13 : 14],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot depth"]
        },
        sizeIsPercentage: !1
      });
      let oU = eU;
      if (EU) {
        const RU = new wU("fxaa", UU);
        RU.sourceTexture = oU, oU = RU.outputTexture, UU.addTask(RU)
      }
      if (QU !== hU || WU !== uU) {
        const RU = new bU("pass", UU);
        RU.sourceTexture = oU, RU.targetTexture = UU.textureManager.createRenderTargetTexture("pass_output", {
          size: {
            width: QU,
            height: WU
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
        }), oU = RU.outputTexture, UU.addTask(RU)
      }
      const ZU = rU.FindMainObjectRenderer(UU);
      let aU = null;
      ZU && (aU = ZU.camera, ZU.camera = RU), GU.getCaps().parallelShaderCompile = void 0, await UU.buildAsync();
      const YU = cU ?? (jU.hasHistoryTextures ? 32 : 1);
      for (let CU = 0; CU < YU; ++CU) UU.execute();
      UU.pausedExecution = !0, GU.getCaps().parallelShaderCompile = nU;
      for (let CU = IU; CU < mU.length; ++CU) UU.tasks[CU].dispose();
      UU.tasks.length = IU, ZU && aU && (ZU.camera = aU);
      const BU = UU.textureManager.getTextureFromHandle(oU);
      return BU.incrementReferences(), jU.resetBackBufferTextures(), await UU.buildAsync(), UU.pausedExecution = JU, new Promise((UU => {
        GU._readTexturePixels(BU, QU, WU, -1, 0, null, !0, !1, 0, 0).then((async RU => {
          BU.dispose(), xU(QU, WU, RU, KU ? void 0 : RU => UU(RU), tU, PU, !0, void 0, TU), KU && UU(null)
        }))
      }))
    }

    function kU(UU, RU, gU) {
      let tU = 0,
        pU = 0,
        EU = 0,
        PU = 0;
      if ("object" === typeof gU) {
        const TU = gU.precision ? Math.abs(gU.precision) : 1;
        gU.width && gU.height ? (tU = gU.height * TU, pU = gU.width * TU) : gU.width && !gU.height ? (pU = gU.width * TU, tU = Math.round(pU / UU.getAspectRatio(RU))) : gU.height && !gU.width ? (tU = gU.height * TU, pU = Math.round(tU * UU.getAspectRatio(RU))) : (pU = Math.round(UU.getRenderWidth() * TU), tU = Math.round(pU / UU.getAspectRatio(RU))), gU.finalWidth && gU.finalHeight ? (PU = gU.finalHeight, EU = gU.finalWidth) : gU.finalWidth && !gU.finalHeight ? (EU = gU.finalWidth, PU = Math.round(EU / UU.getAspectRatio(RU))) : gU.finalHeight && !gU.finalWidth ? (PU = gU.finalHeight, EU = Math.round(PU * UU.getAspectRatio(RU))) : (EU = pU, PU = tU)
      } else isNaN(gU) || (tU = gU, pU = gU, EU = gU, PU = gU);
      return pU && (pU = Math.floor(pU)), tU && (tU = Math.floor(tU)), EU && (EU = Math.floor(EU)), PU && (PU = Math.floor(PU)), {
        height: 0 | tU,
        width: 0 | pU,
        finalWidth: 0 | EU,
        finalHeight: 0 | PU
      }
    }
    const FU = {
      CreateScreenshot: vU,
      CreateScreenshotAsync: dU,
      CreateScreenshotWithResizeAsync: HU,
      CreateScreenshotUsingRenderTarget: SU,
      CreateScreenshotUsingRenderTargetAsync: sU,
      CreateScreenshotForFrameGraphAsync: yU
    };
    let iU = !1;

    function AU() {
      if (iU) return;
      iU = !0;
      uU.g.CreateScreenshot = vU, uU.g.CreateScreenshotAsync = dU, uU.g.CreateScreenshotUsingRenderTarget = SU, uU.g.CreateScreenshotUsingRenderTargetAsync = sU
    }
    AU()
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);