export const id = 257;
export const ids = [257, 258];
export const modules = {
  41340: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => EU,
      f: () => NU
    });
    var cU = zU(41113),
      yU = zU(41121),
      QU = zU(37819),
      AU = zU(37923),
      FU = zU(41346),
      oU = zU(41314),
      DU = zU(37863);
    let EU = (() => {
        var UU;
        let XU, zU, oU = FU.b,
          DU = [],
          EU = [],
          YU = [],
          NU = [];
        return UU = class extends oU {
          constructor(UU, XU, zU, yU) {
            super(UU, zU, yU), this.groundColor = (0, cU.n)(this, DU, new AU.b(0, 0, 0)), this.direction = ((0, cU.n)(this, EU), (0, cU.n)(this, YU, void 0)), (0, cU.n)(this, NU), this.direction = XU || QU.q.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(UU) {
            return this.direction = QU.q.Normalize(UU.subtract(QU.q.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(UU, XU) {
            const zU = QU.q.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", zU.x, zU.y, zU.z, 0, XU), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), XU), this
          }
          transferToNodeMaterialEffect(UU, XU) {
            const zU = QU.q.Normalize(this.direction);
            return UU.setFloat3(XU, zU.x, zU.y, zU.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = QU.e.Identity()), this._worldMatrix
          }
          getTypeID() {
            return FU.b.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(UU, XU) {
            UU["HEMILIGHT" + XU] = !0
          }
        }, (() => {
          const QU = "function" === typeof Symbol && Symbol.metadata ? Object.create(oU[Symbol.metadata] ?? null) : void 0;
          XU = [(0, yU.m)()], zU = [(0, yU.F)()], (0, cU.j)(null, null, XU, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: UU => "groundColor" in UU,
              get: UU => UU.groundColor,
              set: (UU, XU) => {
                UU.groundColor = XU
              }
            },
            metadata: QU
          }, DU, EU), (0, cU.j)(null, null, zU, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: UU => "direction" in UU,
              get: UU => UU.direction,
              set: (UU, XU) => {
                UU.direction = XU
              }
            },
            metadata: QU
          }, YU, NU), QU && Object.defineProperty(UU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: QU
          })
        })(), UU
      })(),
      YU = !1;

    function NU() {
      YU || (YU = !0, oU.e.AddNodeConstructor("Light_Type_3", ((UU, XU) => () => new EU(UU, QU.q.Zero(), XU))), (0, DU.h)("BABYLON.HemisphericLight", EU))
    }
  },
  38502: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => yU
    });
    var cU = zU(38505);
    class yU {
      static GetPlanes(UU) {
        const XU = [];
        for (let zU = 0; zU < 6; zU++) XU.push(new cU.d(0, 0, 0, 0));
        return yU.GetPlanesToRef(UU, XU), XU
      }
      static GetNearPlaneToRef(UU, XU) {
        const zU = UU.m;
        XU.normal.x = zU[3] + zU[2], XU.normal.y = zU[7] + zU[6], XU.normal.z = zU[11] + zU[10], XU.d = zU[15] + zU[14], XU.normalize()
      }
      static GetFarPlaneToRef(UU, XU) {
        const zU = UU.m;
        XU.normal.x = zU[3] - zU[2], XU.normal.y = zU[7] - zU[6], XU.normal.z = zU[11] - zU[10], XU.d = zU[15] - zU[14], XU.normalize()
      }
      static GetLeftPlaneToRef(UU, XU) {
        const zU = UU.m;
        XU.normal.x = zU[3] + zU[0], XU.normal.y = zU[7] + zU[4], XU.normal.z = zU[11] + zU[8], XU.d = zU[15] + zU[12], XU.normalize()
      }
      static GetRightPlaneToRef(UU, XU) {
        const zU = UU.m;
        XU.normal.x = zU[3] - zU[0], XU.normal.y = zU[7] - zU[4], XU.normal.z = zU[11] - zU[8], XU.d = zU[15] - zU[12], XU.normalize()
      }
      static GetTopPlaneToRef(UU, XU) {
        const zU = UU.m;
        XU.normal.x = zU[3] - zU[1], XU.normal.y = zU[7] - zU[5], XU.normal.z = zU[11] - zU[9], XU.d = zU[15] - zU[13], XU.normalize()
      }
      static GetBottomPlaneToRef(UU, XU) {
        const zU = UU.m;
        XU.normal.x = zU[3] + zU[1], XU.normal.y = zU[7] + zU[5], XU.normal.z = zU[11] + zU[9], XU.d = zU[15] + zU[13], XU.normalize()
      }
      static GetPlanesToRef(UU, XU) {
        yU.GetNearPlaneToRef(UU, XU[0]), yU.GetFarPlaneToRef(UU, XU[1]), yU.GetLeftPlaneToRef(UU, XU[2]), yU.GetRightPlaneToRef(UU, XU[3]), yU.GetTopPlaneToRef(UU, XU[4]), yU.GetBottomPlaneToRef(UU, XU[5])
      }
      static IsPointInFrustum(UU, XU) {
        for (let zU = 0; zU < 6; zU++)
          if (XU[zU].dotCoordinate(UU) < 0) return !1;
        return !0
      }
    }
  },
  38505: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => yU
    });
    var cU = zU(37819);
    class yU {
      constructor(UU, XU, zU, yU) {
        this.normal = new cU.q(UU, XU, zU), this.d = yU
      }
      cyU() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new yU(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let XU = 0;
        return 0 !== UU && (XU = 1 / UU), this.normal.x *= XU, this.normal.y *= XU, this.normal.z *= XU, this.d *= XU, this
      }
      transform(UU) {
        const XU = yU._TmpMatrix;
        UU.invertToRef(XU);
        const zU = XU.m,
          cU = this.normal.x,
          QU = this.normal.y,
          AU = this.normal.z,
          FU = this.d,
          oU = cU * zU[0] + QU * zU[1] + AU * zU[2] + FU * zU[3],
          DU = cU * zU[4] + QU * zU[5] + AU * zU[6] + FU * zU[7],
          EU = cU * zU[8] + QU * zU[9] + AU * zU[10] + FU * zU[11],
          YU = cU * zU[12] + QU * zU[13] + AU * zU[14] + FU * zU[15];
        return new yU(oU, DU, EU, YU)
      }
      dotCoordinate(UU) {
        return this.normal.x * UU.x + this.normal.y * UU.y + this.normal.z * UU.z + this.d
      }
      copyFromPoints(UU, XU, zU) {
        const cU = XU.x - UU.x,
          yU = XU.y - UU.y,
          QU = XU.z - UU.z,
          AU = zU.x - UU.x,
          FU = zU.y - UU.y,
          oU = zU.z - UU.z,
          DU = yU * oU - QU * FU,
          EU = QU * AU - cU * oU,
          YU = cU * FU - yU * AU,
          NU = Math.sqrt(DU * DU + EU * EU + YU * YU);
        let IU;
        return IU = 0 !== NU ? 1 / NU : 0, this.normal.x = DU * IU, this.normal.y = EU * IU, this.normal.z = YU * IU, this.d = -(this.normal.x * UU.x + this.normal.y * UU.y + this.normal.z * UU.z), this
      }
      isFrontFacingTo(UU, XU) {
        return cU.q.Dot(this.normal, UU) <= XU
      }
      signedDistanceTo(UU) {
        return cU.q.Dot(UU, this.normal) + this.d
      }
      static FromArray(UU) {
        return new yU(UU[0], UU[1], UU[2], UU[3])
      }
      static FromPoints(UU, XU, zU) {
        const cU = new yU(0, 0, 0, 0);
        return cU.copyFromPoints(UU, XU, zU), cU
      }
      static FromPositionAndNormal(UU, XU) {
        const zU = new yU(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(UU, XU, zU)
      }
      static FromPositionAndNormalToRef(UU, XU, zU) {
        return zU.normal.YL(XU), zU.normal.normalize(), zU.d = -UU.dot(zU.normal), zU
      }
      static SignedDistanceToPlaneFromPositionAndNormal(UU, XU, zU) {
        const yU = -(XU.x * UU.x + XU.y * UU.y + XU.z * UU.z);
        return cU.q.Dot(zU, XU) + yU
      }
    }
    yU._TmpMatrix = cU.e.Identity()
  },
  38845: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => cU
    });
    class cU {
      constructor(UU, XU, zU, cU) {
        this.x = UU, this.y = XU, this.width = zU, this.height = cU
      }
      toGlobal(UU, XU) {
        return new cU(this.x * UU, this.y * XU, this.width * UU, this.height * XU)
      }
      toGlobalToRef(UU, XU, zU) {
        return zU.x = this.x * UU, zU.y = this.y * XU, zU.width = this.width * UU, zU.height = this.height * XU, this
      }
      clone() {
        return new cU(this.x, this.y, this.width, this.height)
      }
    }
  },
  39486: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => QU
    });
    var cU = zU(39493);
    const yU = (UU, XU, zU) => UU ? UU.getClassName && "Mesh" === UU.getClassName() ? null : !UU.getClassName || "SubMesh" !== UU.getClassName() && "PhysicsBody" !== UU.getClassName() ? UU.clone ? UU.clone() : Array.isArray(UU) ? UU.slice() : zU && "object" === typeof UU ? {
      ...UU
    } : null : UU.clone(XU) : null;
    class QU {
      static DeepCopy(UU, XU, zU, QU) {
        let AU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const FU = function(UU) {
          const XU = [];
          do {
            const zU = Object.getOwnPropertyNames(UU);
            for (const UU of zU) - 1 === XU.indexOf(UU) && XU.push(UU)
          } while (UU = Object.getPrototypeOf(UU));
          return XU
        }(UU);
        for (const DU of FU) {
          if ("_" === DU[0] && (!QU || -1 === QU.indexOf(DU))) continue;
          if (DU.endsWith("Observable")) continue;
          if (zU && -1 !== zU.indexOf(DU)) continue;
          const FU = UU[DU],
            EU = typeof FU;
          if ("function" !== EU) try {
            if ("object" === EU)
              if (FU instanceof Uint8Array) XU[DU] = Uint8Array.from(FU);
              else if (FU instanceof Array) {
              if (XU[DU] = [], FU.length > 0)
                if ("object" == typeof FU[0])
                  for (let UU = 0; UU < FU.length; UU++) {
                    const zU = yU(FU[UU], XU, AU); - 1 === XU[DU].indexOf(zU) && XU[DU].push(zU)
                  } else XU[DU] = FU.slice(0)
            } else XU[DU] = yU(FU, XU, AU);
            else XU[DU] = FU
          } catch (oU) {
            cU.b.Warn(oU.message)
          }
        }
      }
    }
  },
  38649: (UU, XU, zU) => {
    function cU() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (UU => {
        const XU = 16 * Math.random() | 0;
        return ("x" === UU ? XU : 3 & XU | 8).toString(16)
      }))
    }
    zU.d(XU, {
      d: () => cU
    })
  },
  39493: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => cU
    });
    class cU {
      static _CheckLimit(UU, XU) {
        let zU = cU._LogLimitOutputs[UU];
        return zU ? zU.current++ : (zU = {
          limit: XU,
          current: 1
        }, cU._LogLimitOutputs[UU] = zU), zU.current <= zU.limit
      }
      static _GenerateLimitMessage(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const zU = cU._LogLimitOutputs[UU];
        if (!zU || !cU.MessageLimitReached) return;
        const yU = this._Levels[XU];
        zU.current === zU.limit && cU[yU.name](cU.MessageLimitReached.replace(/%LIMIT%/g, "" + zU.limit).replace(/%TYPE%/g, yU.name ?? ""))
      }
      static _AddLogEntry(UU) {
        cU._LogCache = UU + cU._LogCache, cU.OnNewCacheEntry && cU.OnNewCacheEntry(UU)
      }
      static _FormatMessage(UU) {
        const XU = UU => UU < 10 ? "0" + UU : "" + UU,
          zU = new Date;
        return "[" + XU(zU.getHours()) + ":" + XU(zU.getMinutes()) + ":" + XU(zU.getSeconds()) + "]: " + UU
      }
      static _LogDisabled(UU, XU) {}
      static _LogEnabled() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          XU = arguments.length > 1 ? arguments[1] : void 0,
          zU = arguments.length > 2 ? arguments[2] : void 0;
        const yU = Array.isArray(XU) ? XU[0] : XU;
        if (void 0 !== zU && !cU._CheckLimit(yU, zU)) return;
        const QU = cU._FormatMessage(yU),
          AU = this._Levels[UU],
          FU = Array.isArray(XU) ? XU.slice(1) : [];
        AU.logFunc && AU.logFunc("BJS - " + QU, ...FU);
        const oU = `<div style='color:${AU.color}'>${QU}</div><br>`;
        cU._AddLogEntry(oU), cU._GenerateLimitMessage(yU, UU)
      }
      static get LogCache() {
        return cU._LogCache
      }
      static ClearLogCache() {
        cU._LogCache = "", cU._LogLimitOutputs = {}, cU.errorsCount = 0
      }
      static set LogLevels(UU) {
        cU.Log = cU._LogDisabled, cU.Warn = cU._LogDisabled, cU.Error = cU._LogDisabled;
        const XU = [cU.MessageLogLevel, cU.WarningLogLevel, cU.ErrorLogLevel];
        for (const zU of XU)
          if ((UU & zU) === zU) {
            const UU = this._Levels[zU];
            cU[UU.name] = cU._LogEnabled.bind(cU, zU)
          }
      }
    }
    cU.NoneLogLevel = 0, cU.MessageLogLevel = 1, cU.WarningLogLevel = 2, cU.ErrorLogLevel = 4, cU.AllLogLevel = 7, cU.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", cU._LogCache = "", cU._LogLimitOutputs = {}, cU._Levels = [{}, {
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
    }], cU.errorsCount = 0, cU.Log = cU._LogEnabled.bind(cU, cU.MessageLogLevel), cU.Warn = cU._LogEnabled.bind(cU, cU.WarningLogLevel), cU.Error = cU._LogEnabled.bind(cU, cU.ErrorLogLevel)
  },
  63944: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      CreateScreenshot: () => fU,
      CreateScreenshotAsync: () => iU,
      CreateScreenshotForFrameGraphAsync: () => VU,
      CreateScreenshotUsingRenderTarget: () => MU,
      CreateScreenshotUsingRenderTargetAsync: () => vU,
      CreateScreenshotWithResizeAsync: () => HU,
      RegisterScreenshotTools: () => lU,
      ScreenshotTools: () => nU
    });
    var cU = zU(41557),
      yU = zU(44516),
      QU = zU(44492),
      AU = zU(41134),
      FU = zU(44501),
      oU = zU(37841),
      DU = zU(37819);
    class EU extends FU.g {
      static _GetDefines(UU) {
        if (!UU) return null;
        return UU.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
      }
      _gatherImports(UU, XU) {
        UU ? (this._webGPUReady = !0, XU.push(Promise.all([zU.e(680).then((() => zU(64164))), zU.e(681).then((() => zU(64171)))]))) : XU.push(Promise.all([zU.e(682).then((() => zU(64175))), zU.e(683).then((() => zU(64180)))]))
      }
      constructor(UU) {
        const XU = {
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: UU,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || oU.b.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          vertexShader: EU.VertexUrl,
          fragmentShader: EU.FragmentUrl,
          uniforms: EU.Uniforms
        };
        super({
          ...XU,
          defines: EU._GetDefines(XU.engine)
        }), this.texelSize = new DU.m(0, 0)
      }
      bind() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.bind(UU), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
      }
    }
    EU.VertexUrl = "fxaa", EU.FragmentUrl = "fxaa", EU.Uniforms = ["texelSize"];
    class YU extends QU.c {
      getClassName() {
        return "FxaaPostProcess"
      }
      constructor(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          yU = arguments.length > 3 ? arguments[3] : void 0,
          QU = arguments.length > 4 ? arguments[4] : void 0,
          AU = arguments.length > 5 ? arguments[5] : void 0,
          FU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const oU = {
          uniforms: EU.Uniforms,
          size: "number" === typeof XU ? XU : void 0,
          camera: zU,
          samplingMode: yU || cU.e.BILINEAR_SAMPLINGMODE,
          engine: QU,
          reusable: AU,
          textureType: FU,
          ...XU
        };
        super(UU, EU.FragmentUrl, {
          effectWrapper: "number" !== typeof XU && XU.effectWrapper ? void 0 : new EU(UU, QU, oU),
          ...oU
        }), this.onApplyObservable.add((UU => {
          this._effectWrapper.texelSize = this.texelSize
        }))
      }
      static _Parse(UU, XU, zU, cU) {
        return AU.b.Parse((() => new YU(UU.name, UU.options, XU, UU.renderTargetSamplingMode, zU.qp(), UU.reusable)), UU, zU, cU)
      }
    }
    var NU = zU(39493),
      IU = zU(41205),
      pU = zU(44529),
      aU = zU(44509),
      tU = zU(40999);
    const gU = 0;
    class kU {
      constructor(UU, XU, zU) {
        this.name = UU, this._parentTask = XU, this._context = zU, this.disabled = !1
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
    class GU extends kU {
      static IsObjectListPass(UU) {
        return void 0 !== UU.setObjectList
      }
      get objectList() {
        return this._objectList
      }
      setObjectList(UU) {
        this._objectList = UU
      }
      constructor(UU, XU, zU, cU) {
        super(UU, XU, zU), this._engine = cU
      }
      _isValid() {
        const UU = super._isValid();
        return UU || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
      }
    }
    class BU extends kU {
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
      constructor(UU, XU, zU, cU) {
        super(UU, XU, zU), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = cU
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
            for (const XU of UU) this._dependencies.add(XU);
          else this._dependencies.add(UU)
      }
      collectDependencies(UU) {
        const XU = this._dependencies.keys();
        for (let zU = XU.next(); !0 !== zU.done; zU = XU.next()) UU.add(zU.value);
        if (void 0 !== this._renderTarget)
          if (Array.isArray(this._renderTarget))
            for (const zU of this._renderTarget) void 0 !== zU && UU.add(zU);
          else UU.add(this._renderTarget);
        void 0 !== this._renderTargetDepth && UU.add(this._renderTargetDepth)
      }
      setOutputLayerAndFaceIndices(UU) {
        const XU = this.frameGraphRenderTarget.renderTargetWrapper;
        if (XU)
          for (const zU of UU) XU.setLayerAndFaceIndex(zU.targetIndex, zU.layerIndex, zU.faceIndex)
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
    var ZU = zU(37846);
    class RU {
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
      constructor(UU, XU) {
        this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new ZU.e, this.onBeforeTaskExecute = new ZU.e, this.onAfterTaskExecute = new ZU.e, this.name = UU, this._frameGraph = XU, this._reset()
      }
      _reset() {
        for (const UU of this._passes) UU._dispose();
        for (const UU of this._passesDisabled) UU._dispose();
        this._passes.length = 0, this._passesDisabled.length = 0
      }
      _addPass(UU, XU) {
        XU ? this._passesDisabled.push(UU) : this._passes.push(UU)
      }
      _checkTask() {
        let UU, XU = null,
          zU = null;
        for (const FU of this._passes) {
          const cU = FU._isValid();
          if (cU) throw new Error(`Pass "${FU.name}" is not valid. ${cU}`);
          if (BU.IsRenderPass(FU)) {
            const UU = Array.isArray(FU.renderTarget) ? FU.renderTarget : [FU.renderTarget];
            XU = [];
            for (const zU of UU) void 0 !== zU && XU.push(this._frameGraph.textureManager.getTextureFromHandle(zU));
            zU = void 0 !== FU.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(FU.renderTargetDepth) : null
          } else GU.IsObjectListPass(FU) && (UU = FU.objectList)
        }
        let cU, yU = null,
          QU = [],
          AU = null;
        for (const FU of this._passesDisabled) {
          const UU = FU._isValid();
          if (UU) throw new Error(`Pass "${FU.name}" is not valid. ${UU}`);
          if (BU.IsRenderPass(FU)) {
            const UU = Array.isArray(FU.renderTarget) ? FU.renderTarget : [FU.renderTarget];
            yU = [];
            for (const XU of UU) void 0 !== XU && yU.push(this._frameGraph.textureManager.getTextureFromHandle(XU));
            QU = UU, AU = void 0 !== FU.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(FU.renderTargetDepth) : null
          } else GU.IsObjectListPass(FU) && (cU = FU.objectList)
        }
        if (this._passesDisabled.length > 0) {
          if (!this._checkSameRenderTarget(XU, yU)) {
            let UU = !0;
            for (const XU of QU)
              if (void 0 !== XU && !this._frameGraph.textureManager.isHistoryTexture(XU)) {
                UU = !1;
                break
              } if (!UU) throw new Error(`The output texture of the task "${this.name}" is different when it is enabled or disabled.`)
          }
          if (zU !== AU && null !== AU) throw new Error(`The output depth texture of the task "${this.name}" is different when it is enabled or disabled.`);
          if (UU !== cU && null !== cU) throw new Error(`The output object list of the task "${this.name}" is different when it is enabled or disabled.`)
        }
      }
      _execute() {
        const UU = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
        this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const XU of UU) XU._execute()
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
      _checkSameRenderTarget(UU, XU) {
        if (null === UU || null === XU) return UU === XU;
        if (UU.length !== XU.length) return !1;
        for (let zU = 0; zU < UU.length; zU++)
          if (UU[zU] !== XU[zU]) return !1;
        return !0
      }
    }
    class PU extends RU {
      get alphaMode() {
        return this.postProcess.alphaMode
      }
      set alphaMode(UU) {
        this.postProcess.alphaMode = UU
      }
      get drawWrapper() {
        return this._postProcessDrawWrapper
      }
      constructor(UU, XU, zU) {
        super(UU, XU), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = zU, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture = this._frameGraph.textureManager.createDanglingHandle(), this.outputDepthAttachmentTexture = this._frameGraph.textureManager.createDanglingHandle()
      }
      isReady() {
        return this.postProcess.isReady()
      }
      getClassName() {
        return "FrameGraphPostProcessTask"
      }
      record() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          XU = arguments.length > 1 ? arguments[1] : void 0,
          zU = arguments.length > 2 ? arguments[2] : void 0;
        if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
        const cU = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
        if (cU && (cU.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, cU), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentTexture, this.depthAttachmentTexture), cU) {
          const UU = this._frameGraph.textureManager.getTextureAbsoluteDimensions(cU);
          this._sourceWidth = UU.width, this._sourceHeight = UU.height
        }
        const yU = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
        this._outputWidth = yU.size.width, this._outputHeight = yU.size.height;
        const QU = this._frameGraph.addRenderPass(this.name);
        if (QU.depthReadOnly = this.depthReadOnly, QU.stencilReadOnly = this.stencilReadOnly, QU.addDependencies(this.sourceTexture), QU.setRenderTarget(this.outputTexture), QU.setRenderTargetDepth(this.depthAttachmentTexture), QU.setExecuteFunc((UU => {
            UU.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && UU.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), XU?.(UU), this.viewport && UU.setViewport(this.viewport), UU.applyFullScreenEffect(this._postProcessDrawWrapper, (() => {
              void 0 !== this.sourceTexture && UU.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), zU?.(UU), this.postProcess.bind()
            }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), UU.restoreDefaultFramebuffer(), UU.popDebugGroup()
          })), !UU) {
          const UU = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
          UU.depthReadOnly = this.depthReadOnly, UU.stencilReadOnly = this.stencilReadOnly, UU.addDependencies(this.sourceTexture), UU.setRenderTarget(this.outputTexture), UU.setRenderTargetDepth(this.depthAttachmentTexture), UU.setExecuteFunc((UU => {
            void 0 !== this.sourceTexture && 0 === this.alphaMode && (this.viewport && UU.setViewport(this.viewport), UU.copyTexture(this.sourceTexture, void 0, void 0 !== this.viewport))
          }))
        }
        return QU
      }
      dispose() {
        this.postProcess.dispose(), super.dispose()
      }
    }
    class WU extends PU {
      constructor(UU, XU, zU) {
        super(UU, XU, zU || new EU(UU, XU.engine))
      }
      getClassName() {
        return "FrameGraphFXAATask"
      }
      record() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          XU = arguments.length > 1 ? arguments[1] : void 0,
          zU = arguments.length > 2 ? arguments[2] : void 0;
        const cU = super.record(UU, XU, zU);
        return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, cU
      }
    }
    var dU = zU(44524);
    class LU extends PU {
      constructor(UU, XU, zU) {
        super(UU, XU, zU || new dU.f(UU, XU.engine))
      }
      getClassName() {
        return "FrameGraphPassTask"
      }
    }
    var eU = zU(41202),
      CU = zU(41271),
      wU = zU(41235),
      qU = zU(41340),
      OU = zU(37923);
    class SU {
      getRenderCamera(UU) {
        if (this._renderCamera) return this._renderCamera;
        {
          let XU;
          return XU = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, UU && XU && XU.isRigCamera ? XU.rigParent : XU
        }
      }
      setRenderCamera(UU) {
        this._renderCamera = UU
      }
      _getSharedGizmoLight() {
        return this._sharedGizmoLight || (this._sharedGizmoLight = new qU.d("shared gizmo light", new DU.q(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = OU.b.Gray()), this._sharedGizmoLight
      }
      static get DefaultUtilityLayer() {
        return null == SU._DefaultUtilityLayer ? SU._CreateDefaultUtilityLayerFromScene(oU.b.LastCreatedScene) : SU._DefaultUtilityLayer
      }
      static _CreateDefaultUtilityLayerFromScene(UU) {
        return SU._DefaultUtilityLayer = new SU(UU), SU._DefaultUtilityLayer.originalScene.bS.addOnce((() => {
          SU._DefaultUtilityLayer = null
        })), SU._DefaultUtilityLayer
      }
      static get DefaultKeepDepthUtilityLayer() {
        return null == SU._DefaultKeepDepthUtilityLayer ? SU._CreateDefaultKeepUtilityLayerFromScene(oU.b.LastCreatedScene) : SU._DefaultKeepDepthUtilityLayer
      }
      static _CreateDefaultKeepUtilityLayerFromScene(UU) {
        return SU._DefaultKeepDepthUtilityLayer = new SU(UU), SU._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, SU._DefaultKeepDepthUtilityLayer.originalScene.bS.addOnce((() => {
          SU._DefaultKeepDepthUtilityLayer = null
        })), SU._DefaultKeepDepthUtilityLayer
      }
      constructor(UU) {
        let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.originalScene = UU, this.handleEvents = XU, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.processAllEvents = !1, this.pickingEnabled = !0, this.onPointerOutObservable = new ZU.e, this.utilityLayerScene = new eU.d(UU.qp(), {
          virtual: !0,
          useFloatingOrigin: UU.floatingOriginMode
        }), this.utilityLayerScene.useRightHandedSystem = UU.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), XU && (this._originalPointerObserver = UU.onPrePointerObservable.add((XU => {
          if (!this.utilityLayerScene.activeCamera) return;
          if (!this.pickingEnabled) return;
          if (!this.processAllEvents && XU.type !== CU.c.POINTERMOVE && XU.type !== CU.c.POINTERUP && XU.type !== CU.c.POINTERDOWN && XU.type !== CU.c.POINTERDOUBLETAP) return;
          this.utilityLayerScene.pointerX = UU.pointerX, this.utilityLayerScene.pointerY = UU.pointerY;
          const zU = XU.event;
          if (UU.isPointerCaptured(zU.pointerId)) return void(this._pointerCaptures[zU.pointerId] = !1);
          const cU = zU => {
              let cU;
              if (XU.nearInteractionPickingInfo) cU = XU.nearInteractionPickingInfo.pickedMesh.nS() == zU ? XU.nearInteractionPickingInfo : new wU.c;
              else if (zU !== this.utilityLayerScene && XU.originalPickingInfo) cU = XU.originalPickingInfo;
              else {
                let yU = null;
                this._renderCamera && (yU = zU._activeCamera, zU._activeCamera = this._renderCamera, XU.ray = null), cU = XU.ray ? zU.pickWithRay(XU.ray) : zU.DI(UU.pointerX, UU.pointerY), yU && (zU._activeCamera = yU)
              }
              return cU
            },
            yU = cU(this.utilityLayerScene);
          if (!XU.ray && yU && (XU.ray = yU.ray), XU.originalPickingInfo?.aimTransform && yU && (yU.aimTransform = XU.originalPickingInfo.aimTransform, yU.gripTransform = XU.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(XU), this.onlyCheckPointerDownEvents && XU.type != CU.c.POINTERDOWN) return XU.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new CU.h(XU.type, XU.event, yU), XU.type), void(XU.type === CU.c.POINTERUP && this._pointerCaptures[zU.pointerId] && (this._pointerCaptures[zU.pointerId] = !1));
          if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) yU && yU.hit && (XU.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new CU.h(XU.type, XU.event, yU), XU.type), XU.skipOnPointerObservable = !0);
          else {
            const zU = cU(UU),
              QU = XU.event;
            zU && yU && (0 === yU.distance && zU.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(zU.pickedMesh) ? (this._notifyObservers(XU, zU, QU), XU.skipOnPointerObservable = !0) : XU.type === CU.c.POINTERDOWN ? (this._pointerCaptures[QU.pointerId] = !0, this._notifyObservers(XU, zU, QU)) : XU.type !== CU.c.POINTERMOVE && XU.type !== CU.c.POINTERUP || (this._lastPointerEvents[QU.pointerId] && (this.onPointerOutObservable.notifyObservers(QU.pointerId), delete this._lastPointerEvents[QU.pointerId]), this._notifyObservers(XU, zU, QU)) : !this._pointerCaptures[QU.pointerId] && (yU.distance < zU.distance || 0 === zU.distance) ? (this._notifyObservers(XU, yU, QU), XU.skipOnPointerObservable || (XU.skipOnPointerObservable = yU.distance > 0)) : !this._pointerCaptures[QU.pointerId] && yU.distance >= zU.distance && (this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(zU.pickedMesh) ? (this._notifyObservers(XU, zU, QU), XU.skipOnPointerObservable = !0) : (XU.type !== CU.c.POINTERMOVE && XU.type !== CU.c.POINTERUP || this._lastPointerEvents[QU.pointerId] && (this.onPointerOutObservable.notifyObservers(QU.pointerId), delete this._lastPointerEvents[QU.pointerId]), this._notifyObservers(XU, yU, QU))), XU.type === CU.c.POINTERUP && this._pointerCaptures[QU.pointerId] && (this._pointerCaptures[QU.pointerId] = !1))
          }
        })), this._originalPointerObserver && UU.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, zU || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((UU => {
          this.shouldRender && UU == this.getRenderCamera() && this.render()
        }))), this._sceneDisposeObserver = this.originalScene.bS.add((() => {
          this.dispose()
        })), this._updateCamera()
      }
      _notifyObservers(UU, XU, zU) {
        UU.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new CU.h(UU.type, UU.event, XU), UU.type), this._lastPointerEvents[zU.pointerId] = !0)
      }
      render() {
        if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
          const UU = this.utilityLayerScene.activeCamera.nS(),
            XU = this.utilityLayerScene.activeCamera;
          XU._scene = this.utilityLayerScene, XU.leftCamera && (XU.leftCamera._scene = this.utilityLayerScene), XU.rightCamera && (XU.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), XU._scene = UU, XU.leftCamera && (XU.leftCamera._scene = UU), XU.rightCamera && (XU.rightCamera._scene = UU)
        }
      }
      dispose() {
        this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.bS.remove(this._sceneDisposeObserver), this._originalPointerObserver && this.originalScene.onPrePointerObservable.remove(this._originalPointerObserver), this.utilityLayerScene.dispose()
      }
      _updateCamera() {
        this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
      }
    }
    SU._DefaultUtilityLayer = null, SU._DefaultKeepDepthUtilityLayer = null;
    const rU = {
      FindMainCamera: function(UU) {
        return UU.findMainCamera()
      },
      FindMainObjectRenderer: function(UU) {
        return UU.findMainObjectRenderer()
      },
      CreateUtilityLayerRenderer: function(UU) {
        let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const zU = UU.sa,
          cU = new SU(zU, XU, !0);
        cU.utilityLayerScene.activeCamera = zU.activeCamera;
        let yU = rU.FindMainCamera(zU.frameGraph);
        !yU && zU.cameras.length > 0 && (yU = zU.cameras[0]), yU && (cU.setRenderCamera(yU), cU.utilityLayerScene.activeCamera = yU);
        const QU = zU.onAfterRenderObservable.add((() => {
          cU.render()
        }));
        return cU.utilityLayerScene.bS.addOnce((() => {
          zU.onAfterRenderObservable.remove(QU)
        })), cU
      }
    };
    let uU = null;

    function fU(UU, XU, zU, cU) {
      let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        QU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        AU = arguments.length > 6 ? arguments[6] : void 0,
        FU = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        oU = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
      const {
        height: DU,
        width: EU
      } = sU(UU, XU, zU);
      if (!DU || !EU) return void NU.b.Error("Invalid 'size' parameter !");
      const YU = XU.nS();
      let pU = YU.activeCamera !== XU;
      if (YU.frameGraph) {
        const UU = rU.FindMainObjectRenderer(YU.frameGraph);
        UU && (pU = UU.camera !== XU)
      }
      pU ? MU(UU, XU, zU, (UU => {
        if (QU) {
          const XU = new Blob([UU]);
          IU.j.DownloadBlob(XU), cU && cU("")
        } else cU && cU(UU)
      }), yU, 1, UU.getCreationOptions().antialias, void 0, void 0, void 0, void 0, AU) : UU.onEndFrameObservable.addOnce((() => {
        uU || (uU = document.createElement("canvas")), uU.width = EU, uU.height = DU;
        const XU = uU.getContext("2d"),
          zU = UU.getRenderingCanvas();
        if (!XU || !zU) return void NU.b.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
        const pU = zU.width,
          aU = zU.height,
          tU = uU.width,
          gU = uU.height,
          kU = tU / pU,
          GU = gU / aU,
          BU = FU ? Math.max(kU, GU) : Math.min(kU, GU),
          ZU = pU * BU,
          RU = aU * BU,
          PU = (tU - ZU) / 2,
          WU = (gU - RU) / 2;
        XU.save(), XU.fillStyle = oU ? YU.clearColor.toHexString() : "rgba(0, 0, 0, 0)", XU.fillRect(0, 0, EU, DU), XU.restore(), XU.drawImage(zU, 0, 0, pU, aU, PU, WU, ZU, RU), QU ? (IU.j.EncodeScreenshotCanvasData(uU, void 0, yU, void 0, AU), cU && cU("")) : IU.j.EncodeScreenshotCanvasData(uU, cU, yU, void 0, AU)
      }))
    }
    async function iU(UU, XU, zU) {
      let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        yU = arguments.length > 4 ? arguments[4] : void 0,
        QU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        AU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        FU = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      return await new Promise(((oU, DU) => {
        fU(UU, XU, zU, (UU => {
          "undefined" !== typeof UU ? oU(UU) : DU(new Error("Data is undefined"))
        }), cU, FU, yU, QU, AU)
      }))
    }
    async function HU(UU, XU, zU, cU) {
      let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        QU = arguments.length > 5 ? arguments[5] : void 0,
        AU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return await new Promise((FU => {
        fU(UU, XU, {
          width: zU,
          height: cU
        }, (() => {
          FU()
        }), yU, !0, QU, AU)
      }))
    }

    function MU(UU, XU, QU, AU) {
      let FU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        oU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
        DU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        EU = arguments.length > 7 ? arguments[7] : void 0,
        IU = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        gU = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        kU = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
        GU = arguments.length > 11 ? arguments[11] : void 0,
        BU = arguments.length > 12 ? arguments[12] : void 0,
        ZU = arguments.length > 13 ? arguments[13] : void 0,
        RU = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
        PU = arguments.length > 15 ? arguments[15] : void 0;
      const WU = XU.nS();
      if (WU.frameGraph) return void VU(WU.frameGraph, XU, QU, FU, oU, DU, EU, GU, ZU, !AU).then((UU => {
        AU && AU(UU)
      }));
      const {
        height: dU,
        width: LU,
        finalWidth: eU,
        finalHeight: CU
      } = sU(UU, XU, QU), wU = {
        width: LU,
        height: dU
      };
      if (!dU || !LU) return void NU.b.Error("Invalid 'size' parameter !");
      UU.skipFrameRender = !0;
      const qU = UU.getRenderWidth,
        OU = UU.getRenderHeight;
      UU.getRenderWidth = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && UU._currentRenderTarget ? UU._currentRenderTarget.width : LU
      }, UU.getRenderHeight = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && UU._currentRenderTarget ? UU._currentRenderTarget.height : dU
      }, UU.onResizeObservable.hasObservers() && UU.onResizeObservable.notifyObservers(UU);
      const SU = new yU.e("screenShot", wU, WU, !1, !1, 0, !1, cU.e.BILINEAR_SAMPLINGMODE, void 0, gU, void 0, void 0, void 0, oU);
      SU.renderList = WU.meshes.slice(), SU.samples = oU, SU.renderSprites = IU, SU.activeCamera = XU, SU.forceLayerMaskCheck = kU, BU?.(SU);
      const rU = ZU || pU.DumpData,
        uU = () => {
          WU.incrementRenderId(), WU.resetCachedMaterial(), (0, tU.h)((() => SU.isReadyForRendering() && XU.isReady(!0)), (() => {
            UU.onEndFrameObservable.addOnce((() => {
              eU === LU && CU === dU ? SU.readPixels(void 0, void 0, void 0, !1).then((UU => {
                rU(LU, dU, UU, AU, FU, EU, !0, void 0, GU), SU.dispose()
              })) : (UU.isWebGPU ? zU.e(676).then((() => zU(64109))) : zU.e(677).then((() => zU(64115)))).then((async () => await (0, aU.c)("pass", SU.getInternalTexture(), WU, void 0, void 0, void 0, eU, CU).then((XU => {
                UU._readTexturePixels(XU, eU, CU, -1, 0, null, !0, !1, 0, 0).then((UU => {
                  rU(eU, CU, UU, AU, FU, EU, !0, void 0, GU), XU.dispose()
                }))
              }))))
            })), WU.incrementRenderId(), WU.resetCachedMaterial();
            const cU = WU.activeCamera,
              yU = WU.activeCameras,
              QU = XU.outputRenderTarget,
              oU = WU.spritesEnabled;
            WU.activeCamera = XU, WU.activeCameras = null, XU.outputRenderTarget = SU, WU.spritesEnabled = IU;
            const DU = WU.meshes;
            WU.meshes = SU.renderList || WU.meshes;
            try {
              WU.render()
            } finally {
              WU.activeCamera = cU, WU.activeCameras = yU, XU.outputRenderTarget = QU, WU.spritesEnabled = oU, WU.meshes = DU, UU.getRenderWidth = qU, UU.getRenderHeight = OU, UU.onResizeObservable.hasObservers() && UU.onResizeObservable.notifyObservers(UU), XU.getProjectionMatrix(!0), UU.skipFrameRender = !1
            }
          }), (() => {
            UU.skipFrameRender = !1, UU.getRenderWidth = qU, UU.getRenderHeight = OU, PU?.()
          }), void 0, RU)
        };
      if (DU) {
        const UU = new YU("antialiasing", 1, WU.activeCamera);
        SU.addPostProcess(UU), UU.autoClear = !0, UU.onEffectCreatedObservable.addOnce((UU => {
          UU.isReady() ? uU() : UU.onCompiled = () => {
            uU()
          }
        }))
      } else uU()
    }
    async function vU(UU, XU, zU) {
      let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        QU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        AU = arguments.length > 6 ? arguments[6] : void 0,
        FU = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        oU = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        DU = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
        EU = arguments.length > 10 ? arguments[10] : void 0,
        YU = arguments.length > 11 ? arguments[11] : void 0,
        NU = arguments.length > 12 ? arguments[12] : void 0;
      return await new Promise(((IU, pU) => {
        MU(UU, XU, zU, (UU => {
          "undefined" !== typeof UU ? IU(UU) : pU(new Error("Data is undefined"))
        }), cU, yU, QU, AU, FU, oU, DU, EU, YU, NU)
      }))
    }
    async function VU(UU, XU, zU) {
      let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        QU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        AU = arguments.length > 6 ? arguments[6] : void 0,
        FU = arguments.length > 7 ? arguments[7] : void 0,
        oU = arguments.length > 8 ? arguments[8] : void 0,
        DU = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        EU = arguments.length > 10 ? arguments[10] : void 0;
      const YU = UU.engine,
        NU = UU.textureManager,
        {
          height: IU,
          width: aU,
          finalWidth: tU,
          finalHeight: kU
        } = sU(YU, XU, zU),
        GU = {
          width: aU,
          height: IU
        },
        BU = oU || pU.DumpData,
        ZU = UU.tasks,
        RU = ZU.length,
        PU = UU.pausedExecution,
        dU = YU.getCaps().parallelShaderCompile;
      NU.setBackBufferTextures(0, 0, {
        size: GU,
        options: {
          createMipMaps: !1,
          samples: yU,
          types: [0],
          formats: [5],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot color"]
        },
        sizeIsPercentage: !1
      }, {
        size: GU,
        options: {
          createMipMaps: !1,
          samples: yU,
          types: [0],
          formats: [YU.isStencilEnable ? 13 : 14],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot depth"]
        },
        sizeIsPercentage: !1
      });
      let eU = gU;
      if (QU) {
        const XU = new WU("fxaa", UU);
        XU.sourceTexture = eU, eU = XU.outputTexture, UU.addTask(XU)
      }
      if (tU !== aU || kU !== IU) {
        const XU = new LU("pass", UU);
        XU.sourceTexture = eU, XU.targetTexture = UU.textureManager.createRenderTargetTexture("pass_output", {
          size: {
            width: tU,
            height: kU
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
        }), eU = XU.outputTexture, UU.addTask(XU)
      }
      const CU = rU.FindMainObjectRenderer(UU);
      let wU = null;
      CU && (wU = CU.camera, CU.camera = XU), YU.getCaps().parallelShaderCompile = void 0, await UU.buildAsync();
      const qU = EU ?? (NU.hasHistoryTextures ? 32 : 1);
      for (let pU = 0; pU < qU; ++pU) UU.execute();
      UU.pausedExecution = !0, YU.getCaps().parallelShaderCompile = dU;
      for (let pU = RU; pU < ZU.length; ++pU) UU.tasks[pU].dispose();
      UU.tasks.length = RU, CU && wU && (CU.camera = wU);
      const OU = UU.textureManager.getTextureFromHandle(eU);
      return OU.incrementReferences(), NU.resetBackBufferTextures(), await UU.buildAsync(), UU.pausedExecution = PU, new Promise((UU => {
        YU._readTexturePixels(OU, tU, kU, -1, 0, null, !0, !1, 0, 0).then((async XU => {
          OU.dispose(), BU(tU, kU, XU, DU ? void 0 : XU => UU(XU), cU, AU, !0, void 0, FU), DU && UU(null)
        }))
      }))
    }

    function sU(UU, XU, zU) {
      let cU = 0,
        yU = 0,
        QU = 0,
        AU = 0;
      if ("object" === typeof zU) {
        const FU = zU.precision ? Math.abs(zU.precision) : 1;
        zU.width && zU.height ? (cU = zU.height * FU, yU = zU.width * FU) : zU.width && !zU.height ? (yU = zU.width * FU, cU = Math.round(yU / UU.getAspectRatio(XU))) : zU.height && !zU.width ? (cU = zU.height * FU, yU = Math.round(cU * UU.getAspectRatio(XU))) : (yU = Math.round(UU.getRenderWidth() * FU), cU = Math.round(yU / UU.getAspectRatio(XU))), zU.finalWidth && zU.finalHeight ? (AU = zU.finalHeight, QU = zU.finalWidth) : zU.finalWidth && !zU.finalHeight ? (QU = zU.finalWidth, AU = Math.round(QU / UU.getAspectRatio(XU))) : zU.finalHeight && !zU.finalWidth ? (AU = zU.finalHeight, QU = Math.round(AU * UU.getAspectRatio(XU))) : (QU = yU, AU = cU)
      } else isNaN(zU) || (cU = zU, yU = zU, QU = zU, AU = zU);
      return yU && (yU = Math.floor(yU)), cU && (cU = Math.floor(cU)), QU && (QU = Math.floor(QU)), AU && (AU = Math.floor(AU)), {
        height: 0 | cU,
        width: 0 | yU,
        finalWidth: 0 | QU,
        finalHeight: 0 | AU
      }
    }
    const nU = {
      CreateScreenshot: fU,
      CreateScreenshotAsync: iU,
      CreateScreenshotWithResizeAsync: HU,
      CreateScreenshotUsingRenderTarget: MU,
      CreateScreenshotUsingRenderTargetAsync: vU,
      CreateScreenshotForFrameGraphAsync: VU
    };
    let mU = !1;

    function lU() {
      if (mU) return;
      mU = !0;
      IU.j.CreateScreenshot = fU, IU.j.CreateScreenshotAsync = iU, IU.j.CreateScreenshotUsingRenderTarget = MU, IU.j.CreateScreenshotUsingRenderTargetAsync = vU
    }
    lU()
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);