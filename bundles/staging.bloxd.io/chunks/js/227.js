export const id = 227;
export const ids = [227, 228];
export const modules = {
  39383: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => vY,
      h: () => sY
    });
    var FY = DY(39127),
      AY = DY(39131),
      IY = DY(36524),
      RY = DY(36588),
      OY = DY(39387),
      gY = DY(39347),
      aY = DY(36569);
    let vY = (() => {
        var YY;
        let rY, DY, gY = OY.c,
          aY = [],
          vY = [],
          uY = [],
          sY = [];
        return YY = class extends gY {
          constructor(YY, rY, DY, AY) {
            super(YY, DY, AY), this.groundColor = (0, FY.j)(this, aY, new RY.c(0, 0, 0)), this.direction = ((0, FY.j)(this, vY), (0, FY.j)(this, uY, void 0)), (0, FY.j)(this, sY), this.direction = rY || IY.r.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(YY) {
            return this.direction = IY.r.Normalize(YY.subtract(IY.r.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(YY, rY) {
            const DY = IY.r.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", DY.x, DY.y, DY.z, 0, rY), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), rY), this
          }
          transferToNodeMaterialEffect(YY, rY) {
            const DY = IY.r.Normalize(this.direction);
            return YY.setFloat3(rY, DY.x, DY.y, DY.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = IY.e.Identity()), this._worldMatrix
          }
          getTypeID() {
            return OY.c.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(YY, rY) {
            YY["HEMILIGHT" + rY] = !0
          }
        }, (() => {
          const IY = "function" === typeof Symbol && Symbol.metadata ? Object.create(gY[Symbol.metadata] ?? null) : void 0;
          rY = [(0, AY.o)()], DY = [(0, AY.J)()], (0, FY.i)(null, null, rY, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: YY => "groundColor" in YY,
              get: YY => YY.groundColor,
              set: (YY, rY) => {
                YY.groundColor = rY
              }
            },
            metadata: IY
          }, aY, vY), (0, FY.i)(null, null, DY, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: YY => "direction" in YY,
              get: YY => YY.direction,
              set: (YY, rY) => {
                YY.direction = rY
              }
            },
            metadata: IY
          }, uY, sY), IY && Object.defineProperty(YY, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: IY
          })
        })(), YY
      })(),
      uY = !1;

    function sY() {
      uY || (uY = !0, gY.b.AddNodeConstructor("Light_Type_3", ((YY, rY) => () => new vY(YY, IY.r.Zero(), rY))), (0, aY.i)("BABYLON.HemisphericLight", vY))
    }
  },
  37105: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => AY
    });
    var FY = DY(37107);
    class AY {
      static GetPlanes(YY) {
        const rY = [];
        for (let DY = 0; DY < 6; DY++) rY.push(new FY.c(0, 0, 0, 0));
        return AY.GetPlanesToRef(YY, rY), rY
      }
      static GetNearPlaneToRef(YY, rY) {
        const DY = YY.m;
        rY.normal.x = DY[3] + DY[2], rY.normal.y = DY[7] + DY[6], rY.normal.z = DY[11] + DY[10], rY.d = DY[15] + DY[14], rY.normalize()
      }
      static GetFarPlaneToRef(YY, rY) {
        const DY = YY.m;
        rY.normal.x = DY[3] - DY[2], rY.normal.y = DY[7] - DY[6], rY.normal.z = DY[11] - DY[10], rY.d = DY[15] - DY[14], rY.normalize()
      }
      static GetLeftPlaneToRef(YY, rY) {
        const DY = YY.m;
        rY.normal.x = DY[3] + DY[0], rY.normal.y = DY[7] + DY[4], rY.normal.z = DY[11] + DY[8], rY.d = DY[15] + DY[12], rY.normalize()
      }
      static GetRightPlaneToRef(YY, rY) {
        const DY = YY.m;
        rY.normal.x = DY[3] - DY[0], rY.normal.y = DY[7] - DY[4], rY.normal.z = DY[11] - DY[8], rY.d = DY[15] - DY[12], rY.normalize()
      }
      static GetTopPlaneToRef(YY, rY) {
        const DY = YY.m;
        rY.normal.x = DY[3] - DY[1], rY.normal.y = DY[7] - DY[5], rY.normal.z = DY[11] - DY[9], rY.d = DY[15] - DY[13], rY.normalize()
      }
      static GetBottomPlaneToRef(YY, rY) {
        const DY = YY.m;
        rY.normal.x = DY[3] + DY[1], rY.normal.y = DY[7] + DY[5], rY.normal.z = DY[11] + DY[9], rY.d = DY[15] + DY[13], rY.normalize()
      }
      static GetPlanesToRef(YY, rY) {
        AY.GetNearPlaneToRef(YY, rY[0]), AY.GetFarPlaneToRef(YY, rY[1]), AY.GetLeftPlaneToRef(YY, rY[2]), AY.GetRightPlaneToRef(YY, rY[3]), AY.GetTopPlaneToRef(YY, rY[4]), AY.GetBottomPlaneToRef(YY, rY[5])
      }
      static IsPointInFrustum(YY, rY) {
        for (let DY = 0; DY < 6; DY++)
          if (rY[DY].dotCoordinate(YY) < 0) return !1;
        return !0
      }
    }
  },
  37107: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => AY
    });
    var FY = DY(36524);
    class AY {
      constructor(YY, rY, DY, AY) {
        this.normal = new FY.r(YY, rY, DY), this.d = AY
      }
      VDY() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new AY(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let YY = this.normal.getHashCode();
        return YY = 397 * YY ^ this.d, YY
      }
      normalize() {
        const YY = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let rY = 0;
        return 0 !== YY && (rY = 1 / YY), this.normal.x *= rY, this.normal.y *= rY, this.normal.z *= rY, this.d *= rY, this
      }
      transform(YY) {
        const rY = AY._TmpMatrix;
        YY.invertToRef(rY);
        const DY = rY.m,
          FY = this.normal.x,
          IY = this.normal.y,
          RY = this.normal.z,
          OY = this.d,
          gY = FY * DY[0] + IY * DY[1] + RY * DY[2] + OY * DY[3],
          aY = FY * DY[4] + IY * DY[5] + RY * DY[6] + OY * DY[7],
          vY = FY * DY[8] + IY * DY[9] + RY * DY[10] + OY * DY[11],
          uY = FY * DY[12] + IY * DY[13] + RY * DY[14] + OY * DY[15];
        return new AY(gY, aY, vY, uY)
      }
      dotCoordinate(YY) {
        return this.normal.x * YY.x + this.normal.y * YY.y + this.normal.z * YY.z + this.d
      }
      copyFromPoints(YY, rY, DY) {
        const FY = rY.x - YY.x,
          AY = rY.y - YY.y,
          IY = rY.z - YY.z,
          RY = DY.x - YY.x,
          OY = DY.y - YY.y,
          gY = DY.z - YY.z,
          aY = AY * gY - IY * OY,
          vY = IY * RY - FY * gY,
          uY = FY * OY - AY * RY,
          sY = Math.sqrt(aY * aY + vY * vY + uY * uY);
        let iY;
        return iY = 0 !== sY ? 1 / sY : 0, this.normal.x = aY * iY, this.normal.y = vY * iY, this.normal.z = uY * iY, this.d = -(this.normal.x * YY.x + this.normal.y * YY.y + this.normal.z * YY.z), this
      }
      isFrontFacingTo(YY, rY) {
        return FY.r.Dot(this.normal, YY) <= rY
      }
      signedDistanceTo(YY) {
        return FY.r.Dot(YY, this.normal) + this.d
      }
      static FromArray(YY) {
        return new AY(YY[0], YY[1], YY[2], YY[3])
      }
      static FromPoints(YY, rY, DY) {
        const FY = new AY(0, 0, 0, 0);
        return FY.copyFromPoints(YY, rY, DY), FY
      }
      static FromPositionAndNormal(YY, rY) {
        const DY = new AY(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(YY, rY, DY)
      }
      static FromPositionAndNormalToRef(YY, rY, DY) {
        return DY.normal.brY(rY), DY.normal.normalize(), DY.d = -YY.dot(DY.normal), DY
      }
      static SignedDistanceToPlaneFromPositionAndNormal(YY, rY, DY) {
        const AY = -(rY.x * YY.x + rY.y * YY.y + rY.z * YY.z);
        return FY.r.Dot(DY, rY) + AY
      }
    }
    AY._TmpMatrix = FY.e.Identity()
  },
  37493: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => FY
    });
    class FY {
      constructor(YY, rY, DY, FY) {
        this.x = YY, this.y = rY, this.width = DY, this.height = FY
      }
      toGlobal(YY, rY) {
        return new FY(this.x * YY, this.y * rY, this.width * YY, this.height * rY)
      }
      toGlobalToRef(YY, rY, DY) {
        return DY.x = this.x * YY, DY.y = this.y * rY, DY.width = this.width * YY, DY.height = this.height * rY, this
      }
      clone() {
        return new FY(this.x, this.y, this.width, this.height)
      }
    }
  },
  38037: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => IY
    });
    var FY = DY(38040);
    const AY = (YY, rY, DY) => YY ? YY.getClassName && "Mesh" === YY.getClassName() ? null : !YY.getClassName || "SubMesh" !== YY.getClassName() && "PhysicsBody" !== YY.getClassName() ? YY.clone ? YY.clone() : Array.isArray(YY) ? YY.slice() : DY && "object" === typeof YY ? {
      ...YY
    } : null : YY.clone(rY) : null;
    class IY {
      static DeepCopy(YY, rY, DY, IY) {
        let RY = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const OY = function(YY) {
          const rY = [];
          do {
            const DY = Object.getOwnPropertyNames(YY);
            for (const YY of DY) - 1 === rY.indexOf(YY) && rY.push(YY)
          } while (YY = Object.getPrototypeOf(YY));
          return rY
        }(YY);
        for (const aY of OY) {
          if ("_" === aY[0] && (!IY || -1 === IY.indexOf(aY))) continue;
          if (aY.endsWith("Observable")) continue;
          if (DY && -1 !== DY.indexOf(aY)) continue;
          const OY = YY[aY],
            vY = typeof OY;
          if ("function" !== vY) try {
            if ("object" === vY)
              if (OY instanceof Uint8Array) rY[aY] = Uint8Array.from(OY);
              else if (OY instanceof Array) {
              if (rY[aY] = [], OY.length > 0)
                if ("object" == typeof OY[0])
                  for (let YY = 0; YY < OY.length; YY++) {
                    const DY = AY(OY[YY], rY, RY); - 1 === rY[aY].indexOf(DY) && rY[aY].push(DY)
                  } else rY[aY] = OY.slice(0)
            } else rY[aY] = AY(OY, rY, RY);
            else rY[aY] = OY
          } catch (gY) {
            FY.d.Warn(gY.message)
          }
        }
      }
    }
  },
  37242: (YY, rY, DY) => {
    function FY() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (YY => {
        const rY = 16 * Math.random() | 0;
        return ("x" === YY ? rY : 3 & rY | 8).toString(16)
      }))
    }
    DY.d(rY, {
      c: () => FY
    })
  },
  38040: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => FY
    });
    class FY {
      static _CheckLimit(YY, rY) {
        let DY = FY._LogLimitOutputs[YY];
        return DY ? DY.current++ : (DY = {
          limit: rY,
          current: 1
        }, FY._LogLimitOutputs[YY] = DY), DY.current <= DY.limit
      }
      static _GenerateLimitMessage(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const DY = FY._LogLimitOutputs[YY];
        if (!DY || !FY.MessageLimitReached) return;
        const AY = this._Levels[rY];
        DY.current === DY.limit && FY[AY.name](FY.MessageLimitReached.replace(/%LIMIT%/g, "" + DY.limit).replace(/%TYPE%/g, AY.name ?? ""))
      }
      static _AddLogEntry(YY) {
        FY._LogCache = YY + FY._LogCache, FY.OnNewCacheEntry && FY.OnNewCacheEntry(YY)
      }
      static _FormatMessage(YY) {
        const rY = YY => YY < 10 ? "0" + YY : "" + YY,
          DY = new Date;
        return "[" + rY(DY.getHours()) + ":" + rY(DY.getMinutes()) + ":" + rY(DY.getSeconds()) + "]: " + YY
      }
      static _LogDisabled(YY, rY) {}
      static _LogEnabled() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          rY = arguments.length > 1 ? arguments[1] : void 0,
          DY = arguments.length > 2 ? arguments[2] : void 0;
        const AY = Array.isArray(rY) ? rY[0] : rY;
        if (void 0 !== DY && !FY._CheckLimit(AY, DY)) return;
        const IY = FY._FormatMessage(AY),
          RY = this._Levels[YY],
          OY = Array.isArray(rY) ? rY.slice(1) : [];
        RY.logFunc && RY.logFunc("BJS - " + IY, ...OY);
        const gY = `<div style='color:${RY.color}'>${IY}</div><br>`;
        FY._AddLogEntry(gY), FY._GenerateLimitMessage(AY, YY)
      }
      static get LogCache() {
        return FY._LogCache
      }
      static ClearLogCache() {
        FY._LogCache = "", FY._LogLimitOutputs = {}, FY.errorsCount = 0
      }
      static set LogLevels(YY) {
        FY.Log = FY._LogDisabled, FY.Warn = FY._LogDisabled, FY.Error = FY._LogDisabled;
        const rY = [FY.MessageLogLevel, FY.WarningLogLevel, FY.ErrorLogLevel];
        for (const DY of rY)
          if ((YY & DY) === DY) {
            const YY = this._Levels[DY];
            FY[YY.name] = FY._LogEnabled.bind(FY, DY)
          }
      }
    }
    FY.NoneLogLevel = 0, FY.MessageLogLevel = 1, FY.WarningLogLevel = 2, FY.ErrorLogLevel = 4, FY.AllLogLevel = 7, FY.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", FY._LogCache = "", FY._LogLimitOutputs = {}, FY._Levels = [{}, {
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
    }], FY.errorsCount = 0, FY.Log = FY._LogEnabled.bind(FY, FY.MessageLogLevel), FY.Warn = FY._LogEnabled.bind(FY, FY.WarningLogLevel), FY.Error = FY._LogEnabled.bind(FY, FY.ErrorLogLevel)
  },
  60201: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      CreateScreenshot: () => hY,
      CreateScreenshotAsync: () => dY,
      CreateScreenshotForFrameGraphAsync: () => bY,
      CreateScreenshotUsingRenderTarget: () => MY,
      CreateScreenshotUsingRenderTargetAsync: () => wY,
      CreateScreenshotWithResizeAsync: () => JY,
      RegisterScreenshotTools: () => kY,
      ScreenshotTools: () => qY
    });
    var FY = DY(39596),
      AY = DY(40879),
      IY = DY(40853),
      RY = DY(39144),
      OY = DY(40857),
      gY = DY(36546),
      aY = DY(36524);
    class vY extends OY.f {
      static _GetDefines(YY) {
        if (!YY) return null;
        return YY.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
      }
      _gatherImports(YY, rY) {
        YY ? (this._webGPUReady = !0, rY.push(Promise.all([DY.e(367).then((() => DY(60544))), DY.e(368).then((() => DY(60551)))]))) : rY.push(Promise.all([DY.e(369).then((() => DY(60559))), DY.e(370).then((() => DY(60566)))]))
      }
      constructor(YY) {
        const rY = {
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: YY,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || gY.d.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          vertexShader: vY.VertexUrl,
          fragmentShader: vY.FragmentUrl,
          uniforms: vY.Uniforms
        };
        super({
          ...rY,
          defines: vY._GetDefines(rY.engine)
        }), this.texelSize = new aY.q(0, 0)
      }
      bind() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.bind(YY), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
      }
    }
    vY.VertexUrl = "fxaa", vY.FragmentUrl = "fxaa", vY.Uniforms = ["texelSize"];
    class uY extends IY.d {
      getClassName() {
        return "FxaaPostProcess"
      }
      constructor(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          AY = arguments.length > 3 ? arguments[3] : void 0,
          IY = arguments.length > 4 ? arguments[4] : void 0,
          RY = arguments.length > 5 ? arguments[5] : void 0,
          OY = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const gY = {
          uniforms: vY.Uniforms,
          size: "number" === typeof rY ? rY : void 0,
          camera: DY,
          samplingMode: AY || FY.i.BILINEAR_SAMPLINGMODE,
          engine: IY,
          reusable: RY,
          textureType: OY,
          ...rY
        };
        super(YY, vY.FragmentUrl, {
          effectWrapper: "number" !== typeof rY && rY.effectWrapper ? void 0 : new vY(YY, IY, gY),
          ...gY
        }), this.onApplyObservable.add((YY => {
          this._effectWrapper.texelSize = this.texelSize
        }))
      }
      static _Parse(YY, rY, DY, FY) {
        return RY.b.Parse((() => new uY(YY.name, YY.options, rY, YY.renderTargetSamplingMode, DY.ky(), YY.reusable)), YY, DY, FY)
      }
    }
    var sY = DY(38040),
      iY = DY(39219),
      yY = DY(40891),
      QY = DY(40871),
      oY = DY(39037);
    const WY = 0;
    class EY {
      constructor(YY, rY, DY) {
        this.name = YY, this._parentTask = rY, this._context = DY, this.disabled = !1
      }
      setInitializeFunc(YY) {
        this._initFunc = YY
      }
      setExecuteFunc(YY) {
        this._executeFunc = YY
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
    class mY extends EY {
      static IsObjectListPass(YY) {
        return void 0 !== YY.setObjectList
      }
      get objectList() {
        return this._objectList
      }
      setObjectList(YY) {
        this._objectList = YY
      }
      constructor(YY, rY, DY, FY) {
        super(YY, rY, DY), this._engine = FY
      }
      _isValid() {
        const YY = super._isValid();
        return YY || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
      }
    }
    class VY extends EY {
      static IsRenderPass(YY) {
        return void 0 !== YY.setRenderTarget
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
      constructor(YY, rY, DY, FY) {
        super(YY, rY, DY), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = FY
      }
      setRenderTarget(YY) {
        this._renderTarget = YY
      }
      setRenderTargetDepth(YY) {
        this._renderTargetDepth = YY
      }
      addDependencies(YY) {
        if (void 0 !== YY)
          if (Array.isArray(YY))
            for (const rY of YY) this._dependencies.add(rY);
          else this._dependencies.add(YY)
      }
      collectDependencies(YY) {
        const rY = this._dependencies.keys();
        for (let DY = rY.next(); !0 !== DY.done; DY = rY.next()) YY.add(DY.value);
        if (void 0 !== this._renderTarget)
          if (Array.isArray(this._renderTarget))
            for (const DY of this._renderTarget) void 0 !== DY && YY.add(DY);
          else YY.add(this._renderTarget);
        void 0 !== this._renderTargetDepth && YY.add(this._renderTargetDepth)
      }
      setOutputLayerAndFaceIndices(YY) {
        const rY = this.frameGraphRenderTarget.renderTargetWrapper;
        if (rY)
          for (const DY of YY) rY.setLayerAndFaceIndex(DY.targetIndex, DY.layerIndex, DY.faceIndex)
      }
      _initialize() {
        this._frameGraphRenderTarget = this._context.createRenderTarget(this.name, this._renderTarget, this._renderTargetDepth, this.depthReadOnly, this.stencilReadOnly), super._initialize()
      }
      _execute() {
        this._context.bindRenderTarget(this._frameGraphRenderTarget), super._execute(), this._context.restoreDefaultFramebuffer()
      }
      _isValid() {
        const YY = super._isValid();
        return YY || (void 0 !== this._renderTarget || void 0 !== this.renderTargetDepth ? null : "Render target and render target depth cannot both be undefined.")
      }
      _dispose() {
        this._frameGraphRenderTarget?.dispose()
      }
    }
    var SY = DY(36552);
    class lY {
      get name() {
        return this._name
      }
      set name(YY) {
        this._name = YY
      }
      get disabled() {
        return this._disabled
      }
      set disabled(YY) {
        this._disabled = YY
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
      constructor(YY, rY) {
        this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new SY.e, this.onBeforeTaskExecute = new SY.e, this.onAfterTaskExecute = new SY.e, this.name = YY, this._frameGraph = rY, this._reset()
      }
      _reset() {
        for (const YY of this._passes) YY._dispose();
        for (const YY of this._passesDisabled) YY._dispose();
        this._passes.length = 0, this._passesDisabled.length = 0
      }
      _addPass(YY, rY) {
        rY ? this._passesDisabled.push(YY) : this._passes.push(YY)
      }
      _checkTask() {
        let YY, rY = null,
          DY = null;
        for (const OY of this._passes) {
          const FY = OY._isValid();
          if (FY) throw new Error(`Pass "${OY.name}" is not valid. ${FY}`);
          if (VY.IsRenderPass(OY)) {
            const YY = Array.isArray(OY.renderTarget) ? OY.renderTarget : [OY.renderTarget];
            rY = [];
            for (const DY of YY) void 0 !== DY && rY.push(this._frameGraph.textureManager.getTextureFromHandle(DY));
            DY = void 0 !== OY.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(OY.renderTargetDepth) : null
          } else mY.IsObjectListPass(OY) && (YY = OY.objectList)
        }
        let FY, AY = null,
          IY = [],
          RY = null;
        for (const OY of this._passesDisabled) {
          const YY = OY._isValid();
          if (YY) throw new Error(`Pass "${OY.name}" is not valid. ${YY}`);
          if (VY.IsRenderPass(OY)) {
            const YY = Array.isArray(OY.renderTarget) ? OY.renderTarget : [OY.renderTarget];
            AY = [];
            for (const rY of YY) void 0 !== rY && AY.push(this._frameGraph.textureManager.getTextureFromHandle(rY));
            IY = YY, RY = void 0 !== OY.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(OY.renderTargetDepth) : null
          } else mY.IsObjectListPass(OY) && (FY = OY.objectList)
        }
        if (this._passesDisabled.length > 0) {
          if (!this._checkSameRenderTarget(rY, AY)) {
            let YY = !0;
            for (const rY of IY)
              if (void 0 !== rY && !this._frameGraph.textureManager.isHistoryTexture(rY)) {
                YY = !1;
                break
              } if (!YY) throw new Error(`The output texture of the task "${this.name}" is different when it is enabled or disabled.`)
          }
          if (DY !== RY && null !== RY) throw new Error(`The output depth texture of the task "${this.name}" is different when it is enabled or disabled.`);
          if (YY !== FY && null !== FY) throw new Error(`The output object list of the task "${this.name}" is different when it is enabled or disabled.`)
        }
      }
      _execute() {
        const YY = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
        this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const rY of YY) rY._execute()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
        this.onAfterTaskExecute.notifyObservers(this)
      }
      _initializePasses() {
        this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const YY of this._passes) YY._initialize();
          for (const YY of this._passesDisabled) YY._initialize()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
      }
      _checkSameRenderTarget(YY, rY) {
        if (null === YY || null === rY) return YY === rY;
        if (YY.length !== rY.length) return !1;
        for (let DY = 0; DY < YY.length; DY++)
          if (YY[DY] !== rY[DY]) return !1;
        return !0
      }
    }
    class TY extends lY {
      get alphaMode() {
        return this.postProcess.alphaMode
      }
      set alphaMode(YY) {
        this.postProcess.alphaMode = YY
      }
      get drawWrapper() {
        return this._postProcessDrawWrapper
      }
      constructor(YY, rY, DY) {
        super(YY, rY), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = DY, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture = this._frameGraph.textureManager.createDanglingHandle(), this.outputDepthAttachmentTexture = this._frameGraph.textureManager.createDanglingHandle()
      }
      isReady() {
        return this.postProcess.isReady()
      }
      getClassName() {
        return "FrameGraphPostProcessTask"
      }
      record() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          rY = arguments.length > 1 ? arguments[1] : void 0,
          DY = arguments.length > 2 ? arguments[2] : void 0;
        if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
        const FY = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
        if (FY && (FY.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, FY), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentTexture, this.depthAttachmentTexture), FY) {
          const YY = this._frameGraph.textureManager.getTextureAbsoluteDimensions(FY);
          this._sourceWidth = YY.width, this._sourceHeight = YY.height
        }
        const AY = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
        this._outputWidth = AY.size.width, this._outputHeight = AY.size.height;
        const IY = this._frameGraph.addRenderPass(this.name);
        if (IY.depthReadOnly = this.depthReadOnly, IY.stencilReadOnly = this.stencilReadOnly, IY.addDependencies(this.sourceTexture), IY.setRenderTarget(this.outputTexture), IY.setRenderTargetDepth(this.depthAttachmentTexture), IY.setExecuteFunc((YY => {
            YY.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && YY.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), rY?.(YY), this.viewport && YY.setViewport(this.viewport), YY.applyFullScreenEffect(this._postProcessDrawWrapper, (() => {
              void 0 !== this.sourceTexture && YY.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), DY?.(YY), this.postProcess.bind()
            }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), YY.restoreDefaultFramebuffer(), YY.popDebugGroup()
          })), !YY) {
          const YY = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
          YY.depthReadOnly = this.depthReadOnly, YY.stencilReadOnly = this.stencilReadOnly, YY.addDependencies(this.sourceTexture), YY.setRenderTarget(this.outputTexture), YY.setRenderTargetDepth(this.depthAttachmentTexture), YY.setExecuteFunc((YY => {
            void 0 !== this.sourceTexture && 0 === this.alphaMode && (this.viewport && YY.setViewport(this.viewport), YY.copyTexture(this.sourceTexture, void 0, void 0 !== this.viewport))
          }))
        }
        return IY
      }
      dispose() {
        this.postProcess.dispose(), super.dispose()
      }
    }
    class eY extends TY {
      constructor(YY, rY, DY) {
        super(YY, rY, DY || new vY(YY, rY.engine))
      }
      getClassName() {
        return "FrameGraphFXAATask"
      }
      record() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          rY = arguments.length > 1 ? arguments[1] : void 0,
          DY = arguments.length > 2 ? arguments[2] : void 0;
        const FY = super.record(YY, rY, DY);
        return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, FY
      }
    }
    var NY = DY(40886);
    class BY extends TY {
      constructor(YY, rY, DY) {
        super(YY, rY, DY || new NY.g(YY, rY.engine))
      }
      getClassName() {
        return "FrameGraphPassTask"
      }
    }
    var cY = DY(39217),
      KY = DY(39301),
      HY = DY(39261),
      zY = DY(39383),
      ZY = DY(36588);
    class CY {
      getRenderCamera(YY) {
        if (this._renderCamera) return this._renderCamera;
        {
          let rY;
          return rY = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, YY && rY && rY.isRigCamera ? rY.rigParent : rY
        }
      }
      setRenderCamera(YY) {
        this._renderCamera = YY
      }
      _getSharedGizmoLight() {
        return this._sharedGizmoLight || (this._sharedGizmoLight = new zY.e("shared gizmo light", new aY.r(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = ZY.c.Gray()), this._sharedGizmoLight
      }
      static get DefaultUtilityLayer() {
        return null == CY._DefaultUtilityLayer ? CY._CreateDefaultUtilityLayerFromScene(gY.d.LastCreatedScene) : CY._DefaultUtilityLayer
      }
      static _CreateDefaultUtilityLayerFromScene(YY) {
        return CY._DefaultUtilityLayer = new CY(YY), CY._DefaultUtilityLayer.originalScene.wT.addOnce((() => {
          CY._DefaultUtilityLayer = null
        })), CY._DefaultUtilityLayer
      }
      static get DefaultKeepDepthUtilityLayer() {
        return null == CY._DefaultKeepDepthUtilityLayer ? CY._CreateDefaultKeepUtilityLayerFromScene(gY.d.LastCreatedScene) : CY._DefaultKeepDepthUtilityLayer
      }
      static _CreateDefaultKeepUtilityLayerFromScene(YY) {
        return CY._DefaultKeepDepthUtilityLayer = new CY(YY), CY._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, CY._DefaultKeepDepthUtilityLayer.originalScene.wT.addOnce((() => {
          CY._DefaultKeepDepthUtilityLayer = null
        })), CY._DefaultKeepDepthUtilityLayer
      }
      constructor(YY) {
        let rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.originalScene = YY, this.handleEvents = rY, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.processAllEvents = !1, this.pickingEnabled = !0, this.onPointerOutObservable = new SY.e, this.utilityLayerScene = new cY.g(YY.ky(), {
          virtual: !0,
          useFloatingOrigin: YY.floatingOriginMode
        }), this.utilityLayerScene.useRightHandedSystem = YY.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), rY && (this._originalPointerObserver = YY.onPrePointerObservable.add((rY => {
          if (!this.utilityLayerScene.activeCamera) return;
          if (!this.pickingEnabled) return;
          if (!this.processAllEvents && rY.type !== KY.d.POINTERMOVE && rY.type !== KY.d.POINTERUP && rY.type !== KY.d.POINTERDOWN && rY.type !== KY.d.POINTERDOUBLETAP) return;
          this.utilityLayerScene.pointerX = YY.pointerX, this.utilityLayerScene.pointerY = YY.pointerY;
          const DY = rY.event;
          if (YY.isPointerCaptured(DY.pointerId)) return void(this._pointerCaptures[DY.pointerId] = !1);
          const FY = DY => {
              let FY;
              if (rY.nearInteractionPickingInfo) FY = rY.nearInteractionPickingInfo.pickedMesh.hT() == DY ? rY.nearInteractionPickingInfo : new HY.c;
              else if (DY !== this.utilityLayerScene && rY.originalPickingInfo) FY = rY.originalPickingInfo;
              else {
                let AY = null;
                this._renderCamera && (AY = DY._activeCamera, DY._activeCamera = this._renderCamera, rY.ray = null), FY = rY.ray ? DY.pickWithRay(rY.ray) : DY.Ps(YY.pointerX, YY.pointerY), AY && (DY._activeCamera = AY)
              }
              return FY
            },
            AY = FY(this.utilityLayerScene);
          if (!rY.ray && AY && (rY.ray = AY.ray), rY.originalPickingInfo?.aimTransform && AY && (AY.aimTransform = rY.originalPickingInfo.aimTransform, AY.gripTransform = rY.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(rY), this.onlyCheckPointerDownEvents && rY.type != KY.d.POINTERDOWN) return rY.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new KY.l(rY.type, rY.event, AY), rY.type), void(rY.type === KY.d.POINTERUP && this._pointerCaptures[DY.pointerId] && (this._pointerCaptures[DY.pointerId] = !1));
          if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) AY && AY.hit && (rY.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new KY.l(rY.type, rY.event, AY), rY.type), rY.skipOnPointerObservable = !0);
          else {
            const DY = FY(YY),
              IY = rY.event;
            DY && AY && (0 === AY.distance && DY.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(DY.pickedMesh) ? (this._notifyObservers(rY, DY, IY), rY.skipOnPointerObservable = !0) : rY.type === KY.d.POINTERDOWN ? (this._pointerCaptures[IY.pointerId] = !0, this._notifyObservers(rY, DY, IY)) : rY.type !== KY.d.POINTERMOVE && rY.type !== KY.d.POINTERUP || (this._lastPointerEvents[IY.pointerId] && (this.onPointerOutObservable.notifyObservers(IY.pointerId), delete this._lastPointerEvents[IY.pointerId]), this._notifyObservers(rY, DY, IY)) : !this._pointerCaptures[IY.pointerId] && (AY.distance < DY.distance || 0 === DY.distance) ? (this._notifyObservers(rY, AY, IY), rY.skipOnPointerObservable || (rY.skipOnPointerObservable = AY.distance > 0)) : !this._pointerCaptures[IY.pointerId] && AY.distance >= DY.distance && (this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(DY.pickedMesh) ? (this._notifyObservers(rY, DY, IY), rY.skipOnPointerObservable = !0) : (rY.type !== KY.d.POINTERMOVE && rY.type !== KY.d.POINTERUP || this._lastPointerEvents[IY.pointerId] && (this.onPointerOutObservable.notifyObservers(IY.pointerId), delete this._lastPointerEvents[IY.pointerId]), this._notifyObservers(rY, AY, IY))), rY.type === KY.d.POINTERUP && this._pointerCaptures[IY.pointerId] && (this._pointerCaptures[IY.pointerId] = !1))
          }
        })), this._originalPointerObserver && YY.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, DY || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((YY => {
          this.shouldRender && YY == this.getRenderCamera() && this.render()
        }))), this._sceneDisposeObserver = this.originalScene.wT.add((() => {
          this.dispose()
        })), this._updateCamera()
      }
      _notifyObservers(YY, rY, DY) {
        YY.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new KY.l(YY.type, YY.event, rY), YY.type), this._lastPointerEvents[DY.pointerId] = !0)
      }
      render() {
        if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
          const YY = this.utilityLayerScene.activeCamera.hT(),
            rY = this.utilityLayerScene.activeCamera;
          rY._scene = this.utilityLayerScene, rY.leftCamera && (rY.leftCamera._scene = this.utilityLayerScene), rY.rightCamera && (rY.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), rY._scene = YY, rY.leftCamera && (rY.leftCamera._scene = YY), rY.rightCamera && (rY.rightCamera._scene = YY)
        }
      }
      dispose() {
        this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.wT.remove(this._sceneDisposeObserver), this._originalPointerObserver && this.originalScene.onPrePointerObservable.remove(this._originalPointerObserver), this.utilityLayerScene.dispose()
      }
      _updateCamera() {
        this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
      }
    }
    CY._DefaultUtilityLayer = null, CY._DefaultKeepDepthUtilityLayer = null;
    const fY = {
      FindMainCamera: function(YY) {
        return YY.findMainCamera()
      },
      FindMainObjectRenderer: function(YY) {
        return YY.findMainObjectRenderer()
      },
      CreateUtilityLayerRenderer: function(YY) {
        let rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const DY = YY.LQ,
          FY = new CY(DY, rY, !0);
        FY.utilityLayerScene.activeCamera = DY.activeCamera;
        let AY = fY.FindMainCamera(DY.frameGraph);
        !AY && DY.cameras.length > 0 && (AY = DY.cameras[0]), AY && (FY.setRenderCamera(AY), FY.utilityLayerScene.activeCamera = AY);
        const IY = DY.onAfterRenderObservable.add((() => {
          FY.render()
        }));
        return FY.utilityLayerScene.wT.addOnce((() => {
          DY.onAfterRenderObservable.remove(IY)
        })), FY
      }
    };
    let jY = null;

    function hY(YY, rY, DY, FY) {
      let AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        IY = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        RY = arguments.length > 6 ? arguments[6] : void 0,
        OY = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        gY = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
      const {
        height: aY,
        width: vY
      } = XY(YY, rY, DY);
      if (!aY || !vY) return void sY.d.Error("Invalid 'size' parameter !");
      const uY = rY.hT();
      let yY = uY.activeCamera !== rY;
      if (uY.frameGraph) {
        const YY = fY.FindMainObjectRenderer(uY.frameGraph);
        YY && (yY = YY.camera !== rY)
      }
      yY ? MY(YY, rY, DY, (YY => {
        if (IY) {
          const rY = new Blob([YY]);
          iY.i.DownloadBlob(rY), FY && FY("")
        } else FY && FY(YY)
      }), AY, 1, YY.getCreationOptions().antialias, void 0, void 0, void 0, void 0, RY) : YY.onEndFrameObservable.addOnce((() => {
        jY || (jY = document.createElement("canvas")), jY.width = vY, jY.height = aY;
        const rY = jY.getContext("2d"),
          DY = YY.getRenderingCanvas();
        if (!rY || !DY) return void sY.d.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
        const yY = DY.width,
          QY = DY.height,
          oY = jY.width,
          WY = jY.height,
          EY = oY / yY,
          mY = WY / QY,
          VY = OY ? Math.max(EY, mY) : Math.min(EY, mY),
          SY = yY * VY,
          lY = QY * VY,
          TY = (oY - SY) / 2,
          eY = (WY - lY) / 2;
        rY.save(), rY.fillStyle = gY ? uY.clearColor.toHexString() : "rgba(0, 0, 0, 0)", rY.fillRect(0, 0, vY, aY), rY.restore(), rY.drawImage(DY, 0, 0, yY, QY, TY, eY, SY, lY), IY ? (iY.i.EncodeScreenshotCanvasData(jY, void 0, AY, void 0, RY), FY && FY("")) : iY.i.EncodeScreenshotCanvasData(jY, FY, AY, void 0, RY)
      }))
    }
    async function dY(YY, rY, DY) {
      let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        AY = arguments.length > 4 ? arguments[4] : void 0,
        IY = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        RY = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        OY = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      return await new Promise(((gY, aY) => {
        hY(YY, rY, DY, (YY => {
          "undefined" !== typeof YY ? gY(YY) : aY(new Error("Data is undefined"))
        }), FY, OY, AY, IY, RY)
      }))
    }
    async function JY(YY, rY, DY, FY) {
      let AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        IY = arguments.length > 5 ? arguments[5] : void 0,
        RY = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return await new Promise((OY => {
        hY(YY, rY, {
          width: DY,
          height: FY
        }, (() => {
          OY()
        }), AY, !0, IY, RY)
      }))
    }

    function MY(YY, rY, IY, RY) {
      let OY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        gY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
        aY = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        vY = arguments.length > 7 ? arguments[7] : void 0,
        iY = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        WY = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        EY = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
        mY = arguments.length > 11 ? arguments[11] : void 0,
        VY = arguments.length > 12 ? arguments[12] : void 0,
        SY = arguments.length > 13 ? arguments[13] : void 0,
        lY = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
        TY = arguments.length > 15 ? arguments[15] : void 0;
      const eY = rY.hT();
      if (eY.frameGraph) return void bY(eY.frameGraph, rY, IY, OY, gY, aY, vY, mY, SY, !RY).then((YY => {
        RY && RY(YY)
      }));
      const {
        height: NY,
        width: BY,
        finalWidth: cY,
        finalHeight: KY
      } = XY(YY, rY, IY), HY = {
        width: BY,
        height: NY
      };
      if (!NY || !BY) return void sY.d.Error("Invalid 'size' parameter !");
      YY.skipFrameRender = !0;
      const zY = YY.getRenderWidth,
        ZY = YY.getRenderHeight;
      YY.getRenderWidth = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && YY._currentRenderTarget ? YY._currentRenderTarget.width : BY
      }, YY.getRenderHeight = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && YY._currentRenderTarget ? YY._currentRenderTarget.height : NY
      }, YY.onResizeObservable.hasObservers() && YY.onResizeObservable.notifyObservers(YY);
      const CY = new AY.c("screenShot", HY, eY, !1, !1, 0, !1, FY.i.BILINEAR_SAMPLINGMODE, void 0, WY, void 0, void 0, void 0, gY);
      CY.renderList = eY.meshes.slice(), CY.samples = gY, CY.renderSprites = iY, CY.activeCamera = rY, CY.forceLayerMaskCheck = EY, VY?.(CY);
      const fY = SY || yY.DumpData,
        jY = () => {
          eY.incrementRenderId(), eY.resetCachedMaterial(), (0, oY.e)((() => CY.isReadyForRendering() && rY.isReady(!0)), (() => {
            YY.onEndFrameObservable.addOnce((() => {
              cY === BY && KY === NY ? CY.readPixels(void 0, void 0, void 0, !1).then((YY => {
                fY(BY, NY, YY, RY, OY, vY, !0, void 0, mY), CY.dispose()
              })) : (YY.isWebGPU ? DY.e(363).then((() => DY(60496))) : DY.e(364).then((() => DY(60500)))).then((async () => await (0, QY.b)("pass", CY.getInternalTexture(), eY, void 0, void 0, void 0, cY, KY).then((rY => {
                YY._readTexturePixels(rY, cY, KY, -1, 0, null, !0, !1, 0, 0).then((YY => {
                  fY(cY, KY, YY, RY, OY, vY, !0, void 0, mY), rY.dispose()
                }))
              }))))
            })), eY.incrementRenderId(), eY.resetCachedMaterial();
            const FY = eY.activeCamera,
              AY = eY.activeCameras,
              IY = rY.outputRenderTarget,
              gY = eY.spritesEnabled;
            eY.activeCamera = rY, eY.activeCameras = null, rY.outputRenderTarget = CY, eY.spritesEnabled = iY;
            const aY = eY.meshes;
            eY.meshes = CY.renderList || eY.meshes;
            try {
              eY.render()
            } finally {
              eY.activeCamera = FY, eY.activeCameras = AY, rY.outputRenderTarget = IY, eY.spritesEnabled = gY, eY.meshes = aY, YY.getRenderWidth = zY, YY.getRenderHeight = ZY, YY.onResizeObservable.hasObservers() && YY.onResizeObservable.notifyObservers(YY), rY.getProjectionMatrix(!0), YY.skipFrameRender = !1
            }
          }), (() => {
            YY.skipFrameRender = !1, YY.getRenderWidth = zY, YY.getRenderHeight = ZY, TY?.()
          }), void 0, lY)
        };
      if (aY) {
        const YY = new uY("antialiasing", 1, eY.activeCamera);
        CY.addPostProcess(YY), YY.autoClear = !0, YY.onEffectCreatedObservable.addOnce((YY => {
          YY.isReady() ? jY() : YY.onCompiled = () => {
            jY()
          }
        }))
      } else jY()
    }
    async function wY(YY, rY, DY) {
      let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        IY = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        RY = arguments.length > 6 ? arguments[6] : void 0,
        OY = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        gY = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        aY = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
        vY = arguments.length > 10 ? arguments[10] : void 0,
        uY = arguments.length > 11 ? arguments[11] : void 0,
        sY = arguments.length > 12 ? arguments[12] : void 0;
      return await new Promise(((iY, yY) => {
        MY(YY, rY, DY, (YY => {
          "undefined" !== typeof YY ? iY(YY) : yY(new Error("Data is undefined"))
        }), FY, AY, IY, RY, OY, gY, aY, vY, uY, sY)
      }))
    }
    async function bY(YY, rY, DY) {
      let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        IY = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        RY = arguments.length > 6 ? arguments[6] : void 0,
        OY = arguments.length > 7 ? arguments[7] : void 0,
        gY = arguments.length > 8 ? arguments[8] : void 0,
        aY = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        vY = arguments.length > 10 ? arguments[10] : void 0;
      const uY = YY.engine,
        sY = YY.textureManager,
        {
          height: iY,
          width: QY,
          finalWidth: oY,
          finalHeight: EY
        } = XY(uY, rY, DY),
        mY = {
          width: QY,
          height: iY
        },
        VY = gY || yY.DumpData,
        SY = YY.tasks,
        lY = SY.length,
        TY = YY.pausedExecution,
        NY = uY.getCaps().parallelShaderCompile;
      sY.setBackBufferTextures(0, 0, {
        size: mY,
        options: {
          createMipMaps: !1,
          samples: AY,
          types: [0],
          formats: [5],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot color"]
        },
        sizeIsPercentage: !1
      }, {
        size: mY,
        options: {
          createMipMaps: !1,
          samples: AY,
          types: [0],
          formats: [uY.isStencilEnable ? 13 : 14],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot depth"]
        },
        sizeIsPercentage: !1
      });
      let cY = WY;
      if (IY) {
        const rY = new eY("fxaa", YY);
        rY.sourceTexture = cY, cY = rY.outputTexture, YY.addTask(rY)
      }
      if (oY !== QY || EY !== iY) {
        const rY = new BY("pass", YY);
        rY.sourceTexture = cY, rY.targetTexture = YY.textureManager.createRenderTargetTexture("pass_output", {
          size: {
            width: oY,
            height: EY
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
        }), cY = rY.outputTexture, YY.addTask(rY)
      }
      const KY = fY.FindMainObjectRenderer(YY);
      let HY = null;
      KY && (HY = KY.camera, KY.camera = rY), uY.getCaps().parallelShaderCompile = void 0, await YY.buildAsync();
      const zY = vY ?? (sY.hasHistoryTextures ? 32 : 1);
      for (let yY = 0; yY < zY; ++yY) YY.execute();
      YY.pausedExecution = !0, uY.getCaps().parallelShaderCompile = NY;
      for (let yY = lY; yY < SY.length; ++yY) YY.tasks[yY].dispose();
      YY.tasks.length = lY, KY && HY && (KY.camera = HY);
      const ZY = YY.textureManager.getTextureFromHandle(cY);
      return ZY.incrementReferences(), sY.resetBackBufferTextures(), await YY.buildAsync(), YY.pausedExecution = TY, new Promise((YY => {
        uY._readTexturePixels(ZY, oY, EY, -1, 0, null, !0, !1, 0, 0).then((async rY => {
          ZY.dispose(), VY(oY, EY, rY, aY ? void 0 : rY => YY(rY), FY, RY, !0, void 0, OY), aY && YY(null)
        }))
      }))
    }

    function XY(YY, rY, DY) {
      let FY = 0,
        AY = 0,
        IY = 0,
        RY = 0;
      if ("object" === typeof DY) {
        const OY = DY.precision ? Math.abs(DY.precision) : 1;
        DY.width && DY.height ? (FY = DY.height * OY, AY = DY.width * OY) : DY.width && !DY.height ? (AY = DY.width * OY, FY = Math.round(AY / YY.getAspectRatio(rY))) : DY.height && !DY.width ? (FY = DY.height * OY, AY = Math.round(FY * YY.getAspectRatio(rY))) : (AY = Math.round(YY.getRenderWidth() * OY), FY = Math.round(AY / YY.getAspectRatio(rY))), DY.finalWidth && DY.finalHeight ? (RY = DY.finalHeight, IY = DY.finalWidth) : DY.finalWidth && !DY.finalHeight ? (IY = DY.finalWidth, RY = Math.round(IY / YY.getAspectRatio(rY))) : DY.finalHeight && !DY.finalWidth ? (RY = DY.finalHeight, IY = Math.round(RY * YY.getAspectRatio(rY))) : (IY = AY, RY = FY)
      } else isNaN(DY) || (FY = DY, AY = DY, IY = DY, RY = DY);
      return AY && (AY = Math.floor(AY)), FY && (FY = Math.floor(FY)), IY && (IY = Math.floor(IY)), RY && (RY = Math.floor(RY)), {
        height: 0 | FY,
        width: 0 | AY,
        finalWidth: 0 | IY,
        finalHeight: 0 | RY
      }
    }
    const qY = {
      CreateScreenshot: hY,
      CreateScreenshotAsync: dY,
      CreateScreenshotWithResizeAsync: JY,
      CreateScreenshotUsingRenderTarget: MY,
      CreateScreenshotUsingRenderTargetAsync: wY,
      CreateScreenshotForFrameGraphAsync: bY
    };
    let pY = !1;

    function kY() {
      if (pY) return;
      pY = !0;
      iY.i.CreateScreenshot = hY, iY.i.CreateScreenshotAsync = dY, iY.i.CreateScreenshotUsingRenderTarget = MY, iY.i.CreateScreenshotUsingRenderTargetAsync = wY
    }
    kY()
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);