export const id = 271;
export const ids = [271, 272];
export const modules = {
  41773: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => VR,
      c: () => wR
    });
    var yR = GR(41520),
      tR = GR(41524),
      uR = GR(38204),
      ZR = GR(38331),
      qR = GR(41777),
      iR = GR(41741),
      fR = GR(38253);
    let VR = (() => {
        var RR;
        let JR, GR, iR = qR.c,
          fR = [],
          VR = [],
          KR = [],
          wR = [];
        return RR = class extends iR {
          constructor(RR, JR, GR, tR) {
            super(RR, GR, tR), this.groundColor = (0, yR.m)(this, fR, new ZR.d(0, 0, 0)), this.direction = ((0, yR.m)(this, VR), (0, yR.m)(this, KR, void 0)), (0, yR.m)(this, wR), this.direction = JR || uR.r.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(RR) {
            return this.direction = uR.r.Normalize(RR.subtract(uR.r.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(RR, JR) {
            const GR = uR.r.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", GR.x, GR.y, GR.z, 0, JR), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), JR), this
          }
          transferToNodeMaterialEffect(RR, JR) {
            const GR = uR.r.Normalize(this.direction);
            return RR.setFloat3(JR, GR.x, GR.y, GR.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = uR.e.Identity()), this._worldMatrix
          }
          getTypeID() {
            return qR.c.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(RR, JR) {
            RR["HEMILIGHT" + JR] = !0
          }
        }, (() => {
          const uR = "function" === typeof Symbol && Symbol.metadata ? Object.create(iR[Symbol.metadata] ?? null) : void 0;
          JR = [(0, tR.k)()], GR = [(0, tR.G)()], (0, yR.l)(null, null, JR, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: RR => "groundColor" in RR,
              get: RR => RR.groundColor,
              set: (RR, JR) => {
                RR.groundColor = JR
              }
            },
            metadata: uR
          }, fR, VR), (0, yR.l)(null, null, GR, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: RR => "direction" in RR,
              get: RR => RR.direction,
              set: (RR, JR) => {
                RR.direction = JR
              }
            },
            metadata: uR
          }, KR, wR), uR && Object.defineProperty(RR, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: uR
          })
        })(), RR
      })(),
      KR = !1;

    function wR() {
      KR || (KR = !0, iR.d.AddNodeConstructor("Light_Type_3", ((RR, JR) => () => new VR(RR, uR.r.Zero(), JR))), (0, fR.f)("BABYLON.HemisphericLight", VR))
    }
  },
  38928: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => tR
    });
    var yR = GR(38933);
    class tR {
      static GetPlanes(RR) {
        const JR = [];
        for (let GR = 0; GR < 6; GR++) JR.push(new yR.c(0, 0, 0, 0));
        return tR.GetPlanesToRef(RR, JR), JR
      }
      static GetNearPlaneToRef(RR, JR) {
        const GR = RR.m;
        JR.normal.x = GR[3] + GR[2], JR.normal.y = GR[7] + GR[6], JR.normal.z = GR[11] + GR[10], JR.d = GR[15] + GR[14], JR.normalize()
      }
      static GetFarPlaneToRef(RR, JR) {
        const GR = RR.m;
        JR.normal.x = GR[3] - GR[2], JR.normal.y = GR[7] - GR[6], JR.normal.z = GR[11] - GR[10], JR.d = GR[15] - GR[14], JR.normalize()
      }
      static GetLeftPlaneToRef(RR, JR) {
        const GR = RR.m;
        JR.normal.x = GR[3] + GR[0], JR.normal.y = GR[7] + GR[4], JR.normal.z = GR[11] + GR[8], JR.d = GR[15] + GR[12], JR.normalize()
      }
      static GetRightPlaneToRef(RR, JR) {
        const GR = RR.m;
        JR.normal.x = GR[3] - GR[0], JR.normal.y = GR[7] - GR[4], JR.normal.z = GR[11] - GR[8], JR.d = GR[15] - GR[12], JR.normalize()
      }
      static GetTopPlaneToRef(RR, JR) {
        const GR = RR.m;
        JR.normal.x = GR[3] - GR[1], JR.normal.y = GR[7] - GR[5], JR.normal.z = GR[11] - GR[9], JR.d = GR[15] - GR[13], JR.normalize()
      }
      static GetBottomPlaneToRef(RR, JR) {
        const GR = RR.m;
        JR.normal.x = GR[3] + GR[1], JR.normal.y = GR[7] + GR[5], JR.normal.z = GR[11] + GR[9], JR.d = GR[15] + GR[13], JR.normalize()
      }
      static GetPlanesToRef(RR, JR) {
        tR.GetNearPlaneToRef(RR, JR[0]), tR.GetFarPlaneToRef(RR, JR[1]), tR.GetLeftPlaneToRef(RR, JR[2]), tR.GetRightPlaneToRef(RR, JR[3]), tR.GetTopPlaneToRef(RR, JR[4]), tR.GetBottomPlaneToRef(RR, JR[5])
      }
      static IsPointInFrustum(RR, JR) {
        for (let GR = 0; GR < 6; GR++)
          if (JR[GR].dotCoordinate(RR) < 0) return !1;
        return !0
      }
    }
  },
  38933: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => tR
    });
    var yR = GR(38204);
    class tR {
      constructor(RR, JR, GR, tR) {
        this.normal = new yR.r(RR, JR, GR), this.d = tR
      }
      QtR() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new tR(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let RR = this.normal.getHashCode();
        return RR = 397 * RR ^ this.d, RR
      }
      normalize() {
        const RR = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let JR = 0;
        return 0 !== RR && (JR = 1 / RR), this.normal.x *= JR, this.normal.y *= JR, this.normal.z *= JR, this.d *= JR, this
      }
      transform(RR) {
        const JR = tR._TmpMatrix;
        RR.invertToRef(JR);
        const GR = JR.m,
          yR = this.normal.x,
          uR = this.normal.y,
          ZR = this.normal.z,
          qR = this.d,
          iR = yR * GR[0] + uR * GR[1] + ZR * GR[2] + qR * GR[3],
          fR = yR * GR[4] + uR * GR[5] + ZR * GR[6] + qR * GR[7],
          VR = yR * GR[8] + uR * GR[9] + ZR * GR[10] + qR * GR[11],
          KR = yR * GR[12] + uR * GR[13] + ZR * GR[14] + qR * GR[15];
        return new tR(iR, fR, VR, KR)
      }
      dotCoordinate(RR) {
        return this.normal.x * RR.x + this.normal.y * RR.y + this.normal.z * RR.z + this.d
      }
      copyFromPoints(RR, JR, GR) {
        const yR = JR.x - RR.x,
          tR = JR.y - RR.y,
          uR = JR.z - RR.z,
          ZR = GR.x - RR.x,
          qR = GR.y - RR.y,
          iR = GR.z - RR.z,
          fR = tR * iR - uR * qR,
          VR = uR * ZR - yR * iR,
          KR = yR * qR - tR * ZR,
          wR = Math.sqrt(fR * fR + VR * VR + KR * KR);
        let rR;
        return rR = 0 !== wR ? 1 / wR : 0, this.normal.x = fR * rR, this.normal.y = VR * rR, this.normal.z = KR * rR, this.d = -(this.normal.x * RR.x + this.normal.y * RR.y + this.normal.z * RR.z), this
      }
      isFrontFacingTo(RR, JR) {
        return yR.r.Dot(this.normal, RR) <= JR
      }
      signedDistanceTo(RR) {
        return yR.r.Dot(RR, this.normal) + this.d
      }
      static FromArray(RR) {
        return new tR(RR[0], RR[1], RR[2], RR[3])
      }
      static FromPoints(RR, JR, GR) {
        const yR = new tR(0, 0, 0, 0);
        return yR.copyFromPoints(RR, JR, GR), yR
      }
      static FromPositionAndNormal(RR, JR) {
        const GR = new tR(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(RR, JR, GR)
      }
      static FromPositionAndNormalToRef(RR, JR, GR) {
        return GR.normal.vN(JR), GR.normal.normalize(), GR.d = -RR.dot(GR.normal), GR
      }
      static SignedDistanceToPlaneFromPositionAndNormal(RR, JR, GR) {
        const tR = -(JR.x * RR.x + JR.y * RR.y + JR.z * RR.z);
        return yR.r.Dot(GR, JR) + tR
      }
    }
    tR._TmpMatrix = yR.e.Identity()
  },
  39248: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => yR
    });
    class yR {
      constructor(RR, JR, GR, yR) {
        this.x = RR, this.y = JR, this.width = GR, this.height = yR
      }
      toGlobal(RR, JR) {
        return new yR(this.x * RR, this.y * JR, this.width * RR, this.height * JR)
      }
      toGlobalToRef(RR, JR, GR) {
        return GR.x = this.x * RR, GR.y = this.y * JR, GR.width = this.width * RR, GR.height = this.height * JR, this
      }
      clone() {
        return new yR(this.x, this.y, this.width, this.height)
      }
    }
  },
  39912: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => uR
    });
    var yR = GR(39914);
    const tR = (RR, JR, GR) => RR ? RR.getClassName && "Mesh" === RR.getClassName() ? null : !RR.getClassName || "SubMesh" !== RR.getClassName() && "PhysicsBody" !== RR.getClassName() ? RR.clone ? RR.clone() : Array.isArray(RR) ? RR.slice() : GR && "object" === typeof RR ? {
      ...RR
    } : null : RR.clone(JR) : null;
    class uR {
      static DeepCopy(RR, JR, GR, uR) {
        let ZR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const qR = function(RR) {
          const JR = [];
          do {
            const GR = Object.getOwnPropertyNames(RR);
            for (const RR of GR) - 1 === JR.indexOf(RR) && JR.push(RR)
          } while (RR = Object.getPrototypeOf(RR));
          return JR
        }(RR);
        for (const fR of qR) {
          if ("_" === fR[0] && (!uR || -1 === uR.indexOf(fR))) continue;
          if (fR.endsWith("Observable")) continue;
          if (GR && -1 !== GR.indexOf(fR)) continue;
          const qR = RR[fR],
            VR = typeof qR;
          if ("function" !== VR) try {
            if ("object" === VR)
              if (qR instanceof Uint8Array) JR[fR] = Uint8Array.from(qR);
              else if (qR instanceof Array) {
              if (JR[fR] = [], qR.length > 0)
                if ("object" == typeof qR[0])
                  for (let RR = 0; RR < qR.length; RR++) {
                    const GR = tR(qR[RR], JR, ZR); - 1 === JR[fR].indexOf(GR) && JR[fR].push(GR)
                  } else JR[fR] = qR.slice(0)
            } else JR[fR] = tR(qR, JR, ZR);
            else JR[fR] = qR
          } catch (iR) {
            yR.c.Warn(iR.message)
          }
        }
      }
    }
  },
  39062: (RR, JR, GR) => {
    function yR() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (RR => {
        const JR = 16 * Math.random() | 0;
        return ("x" === RR ? JR : 3 & JR | 8).toString(16)
      }))
    }
    GR.d(JR, {
      c: () => yR
    })
  },
  39914: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => yR
    });
    class yR {
      static _CheckLimit(RR, JR) {
        let GR = yR._LogLimitOutputs[RR];
        return GR ? GR.current++ : (GR = {
          limit: JR,
          current: 1
        }, yR._LogLimitOutputs[RR] = GR), GR.current <= GR.limit
      }
      static _GenerateLimitMessage(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const GR = yR._LogLimitOutputs[RR];
        if (!GR || !yR.MessageLimitReached) return;
        const tR = this._Levels[JR];
        GR.current === GR.limit && yR[tR.name](yR.MessageLimitReached.replace(/%LIMIT%/g, "" + GR.limit).replace(/%TYPE%/g, tR.name ?? ""))
      }
      static _AddLogEntry(RR) {
        yR._LogCache = RR + yR._LogCache, yR.OnNewCacheEntry && yR.OnNewCacheEntry(RR)
      }
      static _FormatMessage(RR) {
        const JR = RR => RR < 10 ? "0" + RR : "" + RR,
          GR = new Date;
        return "[" + JR(GR.getHours()) + ":" + JR(GR.getMinutes()) + ":" + JR(GR.getSeconds()) + "]: " + RR
      }
      static _LogDisabled(RR, JR) {}
      static _LogEnabled() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          JR = arguments.length > 1 ? arguments[1] : void 0,
          GR = arguments.length > 2 ? arguments[2] : void 0;
        const tR = Array.isArray(JR) ? JR[0] : JR;
        if (void 0 !== GR && !yR._CheckLimit(tR, GR)) return;
        const uR = yR._FormatMessage(tR),
          ZR = this._Levels[RR],
          qR = Array.isArray(JR) ? JR.slice(1) : [];
        ZR.logFunc && ZR.logFunc("BJS - " + uR, ...qR);
        const iR = `<div style='color:${ZR.color}'>${uR}</div><br>`;
        yR._AddLogEntry(iR), yR._GenerateLimitMessage(tR, RR)
      }
      static get LogCache() {
        return yR._LogCache
      }
      static ClearLogCache() {
        yR._LogCache = "", yR._LogLimitOutputs = {}, yR.errorsCount = 0
      }
      static set LogLevels(RR) {
        yR.Log = yR._LogDisabled, yR.Warn = yR._LogDisabled, yR.Error = yR._LogDisabled;
        const JR = [yR.MessageLogLevel, yR.WarningLogLevel, yR.ErrorLogLevel];
        for (const GR of JR)
          if ((RR & GR) === GR) {
            const RR = this._Levels[GR];
            yR[RR.name] = yR._LogEnabled.bind(yR, GR)
          }
      }
    }
    yR.NoneLogLevel = 0, yR.MessageLogLevel = 1, yR.WarningLogLevel = 2, yR.ErrorLogLevel = 4, yR.AllLogLevel = 7, yR.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", yR._LogCache = "", yR._LogLimitOutputs = {}, yR._Levels = [{}, {
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
    }], yR.errorsCount = 0, yR.Log = yR._LogEnabled.bind(yR, yR.MessageLogLevel), yR.Warn = yR._LogEnabled.bind(yR, yR.WarningLogLevel), yR.Error = yR._LogEnabled.bind(yR, yR.ErrorLogLevel)
  },
  64134: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      CreateScreenshot: () => oR,
      CreateScreenshotAsync: () => cR,
      CreateScreenshotForFrameGraphAsync: () => zR,
      CreateScreenshotUsingRenderTarget: () => IR,
      CreateScreenshotUsingRenderTargetAsync: () => mR,
      CreateScreenshotWithResizeAsync: () => PR,
      RegisterScreenshotTools: () => ER,
      ScreenshotTools: () => jR
    });
    var yR = GR(42011),
      tR = GR(53843),
      uR = GR(53823),
      ZR = GR(41542),
      qR = GR(53825),
      iR = GR(38224),
      fR = GR(38204);
    class VR extends qR.h {
      static _GetDefines(RR) {
        if (!RR) return null;
        return RR.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
      }
      _gatherImports(RR, JR) {
        RR ? (this._webGPUReady = !0, JR.push(Promise.all([GR.e(692).then((() => GR(64371))), GR.e(693).then((() => GR(64377)))]))) : JR.push(Promise.all([GR.e(694).then((() => GR(64384))), GR.e(695).then((() => GR(64393)))]))
      }
      constructor(RR) {
        const JR = {
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: RR,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || iR.c.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          vertexShader: VR.VertexUrl,
          fragmentShader: VR.FragmentUrl,
          uniforms: VR.Uniforms
        };
        super({
          ...JR,
          defines: VR._GetDefines(JR.engine)
        }), this.texelSize = new fR.n(0, 0)
      }
      bind() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.bind(RR), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
      }
    }
    VR.VertexUrl = "fxaa", VR.FragmentUrl = "fxaa", VR.Uniforms = ["texelSize"];
    class KR extends uR.c {
      getClassName() {
        return "FxaaPostProcess"
      }
      constructor(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          tR = arguments.length > 3 ? arguments[3] : void 0,
          uR = arguments.length > 4 ? arguments[4] : void 0,
          ZR = arguments.length > 5 ? arguments[5] : void 0,
          qR = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const iR = {
          uniforms: VR.Uniforms,
          size: "number" === typeof JR ? JR : void 0,
          camera: GR,
          samplingMode: tR || yR.f.BILINEAR_SAMPLINGMODE,
          engine: uR,
          reusable: ZR,
          textureType: qR,
          ...JR
        };
        super(RR, VR.FragmentUrl, {
          effectWrapper: "number" !== typeof JR && JR.effectWrapper ? void 0 : new VR(RR, uR, iR),
          ...iR
        }), this.onApplyObservable.add((RR => {
          this._effectWrapper.texelSize = this.texelSize
        }))
      }
      static _Parse(RR, JR, GR, yR) {
        return ZR.c.Parse((() => new KR(RR.name, RR.options, JR, RR.renderTargetSamplingMode, GR.ke(), RR.reusable)), RR, GR, yR)
      }
    }
    var wR = GR(39914),
      rR = GR(41616),
      eR = GR(53856),
      aR = GR(53836),
      LR = GR(41415);
    const nR = 0;
    class UR {
      constructor(RR, JR, GR) {
        this.name = RR, this._parentTask = JR, this._context = GR, this.disabled = !1
      }
      setInitializeFunc(RR) {
        this._initFunc = RR
      }
      setExecuteFunc(RR) {
        this._executeFunc = RR
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
    class WR extends UR {
      static IsObjectListPass(RR) {
        return void 0 !== RR.setObjectList
      }
      get objectList() {
        return this._objectList
      }
      setObjectList(RR) {
        this._objectList = RR
      }
      constructor(RR, JR, GR, yR) {
        super(RR, JR, GR), this._engine = yR
      }
      _isValid() {
        const RR = super._isValid();
        return RR || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
      }
    }
    class AR extends UR {
      static IsRenderPass(RR) {
        return void 0 !== RR.setRenderTarget
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
      constructor(RR, JR, GR, yR) {
        super(RR, JR, GR), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = yR
      }
      setRenderTarget(RR) {
        this._renderTarget = RR
      }
      setRenderTargetDepth(RR) {
        this._renderTargetDepth = RR
      }
      addDependencies(RR) {
        if (void 0 !== RR)
          if (Array.isArray(RR))
            for (const JR of RR) this._dependencies.add(JR);
          else this._dependencies.add(RR)
      }
      collectDependencies(RR) {
        const JR = this._dependencies.keys();
        for (let GR = JR.next(); !0 !== GR.done; GR = JR.next()) RR.add(GR.value);
        if (void 0 !== this._renderTarget)
          if (Array.isArray(this._renderTarget))
            for (const GR of this._renderTarget) void 0 !== GR && RR.add(GR);
          else RR.add(this._renderTarget);
        void 0 !== this._renderTargetDepth && RR.add(this._renderTargetDepth)
      }
      setOutputLayerAndFaceIndices(RR) {
        const JR = this.frameGraphRenderTarget.renderTargetWrapper;
        if (JR)
          for (const GR of RR) JR.setLayerAndFaceIndex(GR.targetIndex, GR.layerIndex, GR.faceIndex)
      }
      _initialize() {
        this._frameGraphRenderTarget = this._context.createRenderTarget(this.name, this._renderTarget, this._renderTargetDepth, this.depthReadOnly, this.stencilReadOnly), super._initialize()
      }
      _execute() {
        this._context.bindRenderTarget(this._frameGraphRenderTarget), super._execute(), this._context.restoreDefaultFramebuffer()
      }
      _isValid() {
        const RR = super._isValid();
        return RR || (void 0 !== this._renderTarget || void 0 !== this.renderTargetDepth ? null : "Render target and render target depth cannot both be undefined.")
      }
      _dispose() {
        this._frameGraphRenderTarget?.dispose()
      }
    }
    var CR = GR(38233);
    class XR {
      get name() {
        return this._name
      }
      set name(RR) {
        this._name = RR
      }
      get disabled() {
        return this._disabled
      }
      set disabled(RR) {
        this._disabled = RR
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
      constructor(RR, JR) {
        this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new CR.b, this.onBeforeTaskExecute = new CR.b, this.onAfterTaskExecute = new CR.b, this.name = RR, this._frameGraph = JR, this._reset()
      }
      _reset() {
        for (const RR of this._passes) RR._dispose();
        for (const RR of this._passesDisabled) RR._dispose();
        this._passes.length = 0, this._passesDisabled.length = 0
      }
      _addPass(RR, JR) {
        JR ? this._passesDisabled.push(RR) : this._passes.push(RR)
      }
      _checkTask() {
        let RR, JR = null,
          GR = null;
        for (const qR of this._passes) {
          const yR = qR._isValid();
          if (yR) throw new Error(`Pass "${qR.name}" is not valid. ${yR}`);
          if (AR.IsRenderPass(qR)) {
            const RR = Array.isArray(qR.renderTarget) ? qR.renderTarget : [qR.renderTarget];
            JR = [];
            for (const GR of RR) void 0 !== GR && JR.push(this._frameGraph.textureManager.getTextureFromHandle(GR));
            GR = void 0 !== qR.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(qR.renderTargetDepth) : null
          } else WR.IsObjectListPass(qR) && (RR = qR.objectList)
        }
        let yR, tR = null,
          uR = [],
          ZR = null;
        for (const qR of this._passesDisabled) {
          const RR = qR._isValid();
          if (RR) throw new Error(`Pass "${qR.name}" is not valid. ${RR}`);
          if (AR.IsRenderPass(qR)) {
            const RR = Array.isArray(qR.renderTarget) ? qR.renderTarget : [qR.renderTarget];
            tR = [];
            for (const JR of RR) void 0 !== JR && tR.push(this._frameGraph.textureManager.getTextureFromHandle(JR));
            uR = RR, ZR = void 0 !== qR.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(qR.renderTargetDepth) : null
          } else WR.IsObjectListPass(qR) && (yR = qR.objectList)
        }
        if (this._passesDisabled.length > 0) {
          if (!this._checkSameRenderTarget(JR, tR)) {
            let RR = !0;
            for (const JR of uR)
              if (void 0 !== JR && !this._frameGraph.textureManager.isHistoryTexture(JR)) {
                RR = !1;
                break
              } if (!RR) throw new Error(`The output texture of the task "${this.name}" is different when it is enabled or disabled.`)
          }
          if (GR !== ZR && null !== ZR) throw new Error(`The output depth texture of the task "${this.name}" is different when it is enabled or disabled.`);
          if (RR !== yR && null !== yR) throw new Error(`The output object list of the task "${this.name}" is different when it is enabled or disabled.`)
        }
      }
      _execute() {
        const RR = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
        this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const JR of RR) JR._execute()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
        this.onAfterTaskExecute.notifyObservers(this)
      }
      _initializePasses() {
        this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const RR of this._passes) RR._initialize();
          for (const RR of this._passesDisabled) RR._initialize()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
      }
      _checkSameRenderTarget(RR, JR) {
        if (null === RR || null === JR) return RR === JR;
        if (RR.length !== JR.length) return !1;
        for (let GR = 0; GR < RR.length; GR++)
          if (RR[GR] !== JR[GR]) return !1;
        return !0
      }
    }
    class MR extends XR {
      get alphaMode() {
        return this.postProcess.alphaMode
      }
      set alphaMode(RR) {
        this.postProcess.alphaMode = RR
      }
      get drawWrapper() {
        return this._postProcessDrawWrapper
      }
      constructor(RR, JR, GR) {
        super(RR, JR), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = GR, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture = this._frameGraph.textureManager.createDanglingHandle(), this.outputDepthAttachmentTexture = this._frameGraph.textureManager.createDanglingHandle()
      }
      isReady() {
        return this.postProcess.isReady()
      }
      getClassName() {
        return "FrameGraphPostProcessTask"
      }
      record() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          JR = arguments.length > 1 ? arguments[1] : void 0,
          GR = arguments.length > 2 ? arguments[2] : void 0;
        if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
        const yR = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
        if (yR && (yR.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, yR), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentTexture, this.depthAttachmentTexture), yR) {
          const RR = this._frameGraph.textureManager.getTextureAbsoluteDimensions(yR);
          this._sourceWidth = RR.width, this._sourceHeight = RR.height
        }
        const tR = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
        this._outputWidth = tR.size.width, this._outputHeight = tR.size.height;
        const uR = this._frameGraph.addRenderPass(this.name);
        if (uR.depthReadOnly = this.depthReadOnly, uR.stencilReadOnly = this.stencilReadOnly, uR.addDependencies(this.sourceTexture), uR.setRenderTarget(this.outputTexture), uR.setRenderTargetDepth(this.depthAttachmentTexture), uR.setExecuteFunc((RR => {
            RR.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && RR.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), JR?.(RR), this.viewport && RR.setViewport(this.viewport), RR.applyFullScreenEffect(this._postProcessDrawWrapper, (() => {
              void 0 !== this.sourceTexture && RR.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), GR?.(RR), this.postProcess.bind()
            }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), RR.restoreDefaultFramebuffer(), RR.popDebugGroup()
          })), !RR) {
          const RR = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
          RR.depthReadOnly = this.depthReadOnly, RR.stencilReadOnly = this.stencilReadOnly, RR.addDependencies(this.sourceTexture), RR.setRenderTarget(this.outputTexture), RR.setRenderTargetDepth(this.depthAttachmentTexture), RR.setExecuteFunc((RR => {
            void 0 !== this.sourceTexture && 0 === this.alphaMode && (this.viewport && RR.setViewport(this.viewport), RR.copyTexture(this.sourceTexture, void 0, void 0 !== this.viewport))
          }))
        }
        return uR
      }
      dispose() {
        this.postProcess.dispose(), super.dispose()
      }
    }
    class BR extends MR {
      constructor(RR, JR, GR) {
        super(RR, JR, GR || new VR(RR, JR.engine))
      }
      getClassName() {
        return "FrameGraphFXAATask"
      }
      record() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          JR = arguments.length > 1 ? arguments[1] : void 0,
          GR = arguments.length > 2 ? arguments[2] : void 0;
        const yR = super.record(RR, JR, GR);
        return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, yR
      }
    }
    var lR = GR(53852);
    class pR extends MR {
      constructor(RR, JR, GR) {
        super(RR, JR, GR || new lR.d(RR, JR.engine))
      }
      getClassName() {
        return "FrameGraphPassTask"
      }
    }
    var gR = GR(41612),
      bR = GR(41701),
      vR = GR(41659),
      OR = GR(41773),
      xR = GR(38331);
    class NR {
      getRenderCamera(RR) {
        if (this._renderCamera) return this._renderCamera;
        {
          let JR;
          return JR = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, RR && JR && JR.isRigCamera ? JR.rigParent : JR
        }
      }
      setRenderCamera(RR) {
        this._renderCamera = RR
      }
      _getSharedGizmoLight() {
        return this._sharedGizmoLight || (this._sharedGizmoLight = new OR.b("shared gizmo light", new fR.r(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = xR.d.Gray()), this._sharedGizmoLight
      }
      static get DefaultUtilityLayer() {
        return null == NR._DefaultUtilityLayer ? NR._CreateDefaultUtilityLayerFromScene(iR.c.LastCreatedScene) : NR._DefaultUtilityLayer
      }
      static _CreateDefaultUtilityLayerFromScene(RR) {
        return NR._DefaultUtilityLayer = new NR(RR), NR._DefaultUtilityLayer.originalScene.YH.addOnce((() => {
          NR._DefaultUtilityLayer = null
        })), NR._DefaultUtilityLayer
      }
      static get DefaultKeepDepthUtilityLayer() {
        return null == NR._DefaultKeepDepthUtilityLayer ? NR._CreateDefaultKeepUtilityLayerFromScene(iR.c.LastCreatedScene) : NR._DefaultKeepDepthUtilityLayer
      }
      static _CreateDefaultKeepUtilityLayerFromScene(RR) {
        return NR._DefaultKeepDepthUtilityLayer = new NR(RR), NR._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, NR._DefaultKeepDepthUtilityLayer.originalScene.YH.addOnce((() => {
          NR._DefaultKeepDepthUtilityLayer = null
        })), NR._DefaultKeepDepthUtilityLayer
      }
      constructor(RR) {
        let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.originalScene = RR, this.handleEvents = JR, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.processAllEvents = !1, this.pickingEnabled = !0, this.onPointerOutObservable = new CR.b, this.utilityLayerScene = new gR.g(RR.ke(), {
          virtual: !0,
          useFloatingOrigin: RR.floatingOriginMode
        }), this.utilityLayerScene.useRightHandedSystem = RR.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), JR && (this._originalPointerObserver = RR.onPrePointerObservable.add((JR => {
          if (!this.utilityLayerScene.activeCamera) return;
          if (!this.pickingEnabled) return;
          if (!this.processAllEvents && JR.type !== bR.c.POINTERMOVE && JR.type !== bR.c.POINTERUP && JR.type !== bR.c.POINTERDOWN && JR.type !== bR.c.POINTERDOUBLETAP) return;
          this.utilityLayerScene.pointerX = RR.pointerX, this.utilityLayerScene.pointerY = RR.pointerY;
          const GR = JR.event;
          if (RR.isPointerCaptured(GR.pointerId)) return void(this._pointerCaptures[GR.pointerId] = !1);
          const yR = GR => {
              let yR;
              if (JR.nearInteractionPickingInfo) yR = JR.nearInteractionPickingInfo.pickedMesh.jH() == GR ? JR.nearInteractionPickingInfo : new vR.e;
              else if (GR !== this.utilityLayerScene && JR.originalPickingInfo) yR = JR.originalPickingInfo;
              else {
                let tR = null;
                this._renderCamera && (tR = GR._activeCamera, GR._activeCamera = this._renderCamera, JR.ray = null), yR = JR.ray ? GR.pickWithRay(JR.ray) : GR.Ur(RR.pointerX, RR.pointerY), tR && (GR._activeCamera = tR)
              }
              return yR
            },
            tR = yR(this.utilityLayerScene);
          if (!JR.ray && tR && (JR.ray = tR.ray), JR.originalPickingInfo?.aimTransform && tR && (tR.aimTransform = JR.originalPickingInfo.aimTransform, tR.gripTransform = JR.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(JR), this.onlyCheckPointerDownEvents && JR.type != bR.c.POINTERDOWN) return JR.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new bR.j(JR.type, JR.event, tR), JR.type), void(JR.type === bR.c.POINTERUP && this._pointerCaptures[GR.pointerId] && (this._pointerCaptures[GR.pointerId] = !1));
          if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) tR && tR.hit && (JR.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new bR.j(JR.type, JR.event, tR), JR.type), JR.skipOnPointerObservable = !0);
          else {
            const GR = yR(RR),
              uR = JR.event;
            GR && tR && (0 === tR.distance && GR.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(GR.pickedMesh) ? (this._notifyObservers(JR, GR, uR), JR.skipOnPointerObservable = !0) : JR.type === bR.c.POINTERDOWN ? (this._pointerCaptures[uR.pointerId] = !0, this._notifyObservers(JR, GR, uR)) : JR.type !== bR.c.POINTERMOVE && JR.type !== bR.c.POINTERUP || (this._lastPointerEvents[uR.pointerId] && (this.onPointerOutObservable.notifyObservers(uR.pointerId), delete this._lastPointerEvents[uR.pointerId]), this._notifyObservers(JR, GR, uR)) : !this._pointerCaptures[uR.pointerId] && (tR.distance < GR.distance || 0 === GR.distance) ? (this._notifyObservers(JR, tR, uR), JR.skipOnPointerObservable || (JR.skipOnPointerObservable = tR.distance > 0)) : !this._pointerCaptures[uR.pointerId] && tR.distance >= GR.distance && (this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(GR.pickedMesh) ? (this._notifyObservers(JR, GR, uR), JR.skipOnPointerObservable = !0) : (JR.type !== bR.c.POINTERMOVE && JR.type !== bR.c.POINTERUP || this._lastPointerEvents[uR.pointerId] && (this.onPointerOutObservable.notifyObservers(uR.pointerId), delete this._lastPointerEvents[uR.pointerId]), this._notifyObservers(JR, tR, uR))), JR.type === bR.c.POINTERUP && this._pointerCaptures[uR.pointerId] && (this._pointerCaptures[uR.pointerId] = !1))
          }
        })), this._originalPointerObserver && RR.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, GR || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((RR => {
          this.shouldRender && RR == this.getRenderCamera() && this.render()
        }))), this._sceneDisposeObserver = this.originalScene.YH.add((() => {
          this.dispose()
        })), this._updateCamera()
      }
      _notifyObservers(RR, JR, GR) {
        RR.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new bR.j(RR.type, RR.event, JR), RR.type), this._lastPointerEvents[GR.pointerId] = !0)
      }
      render() {
        if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
          const RR = this.utilityLayerScene.activeCamera.jH(),
            JR = this.utilityLayerScene.activeCamera;
          JR._scene = this.utilityLayerScene, JR.leftCamera && (JR.leftCamera._scene = this.utilityLayerScene), JR.rightCamera && (JR.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), JR._scene = RR, JR.leftCamera && (JR.leftCamera._scene = RR), JR.rightCamera && (JR.rightCamera._scene = RR)
        }
      }
      dispose() {
        this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.YH.remove(this._sceneDisposeObserver), this._originalPointerObserver && this.originalScene.onPrePointerObservable.remove(this._originalPointerObserver), this.utilityLayerScene.dispose()
      }
      _updateCamera() {
        this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
      }
    }
    NR._DefaultUtilityLayer = null, NR._DefaultKeepDepthUtilityLayer = null;
    const DR = {
      FindMainCamera: function(RR) {
        return RR.findMainCamera()
      },
      FindMainObjectRenderer: function(RR) {
        return RR.findMainObjectRenderer()
      },
      CreateUtilityLayerRenderer: function(RR) {
        let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const GR = RR.tL,
          yR = new NR(GR, JR, !0);
        yR.utilityLayerScene.activeCamera = GR.activeCamera;
        let tR = DR.FindMainCamera(GR.frameGraph);
        !tR && GR.cameras.length > 0 && (tR = GR.cameras[0]), tR && (yR.setRenderCamera(tR), yR.utilityLayerScene.activeCamera = tR);
        const uR = GR.onAfterRenderObservable.add((() => {
          yR.render()
        }));
        return yR.utilityLayerScene.YH.addOnce((() => {
          GR.onAfterRenderObservable.remove(uR)
        })), yR
      }
    };
    let HR = null;

    function oR(RR, JR, GR, yR) {
      let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        uR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        ZR = arguments.length > 6 ? arguments[6] : void 0,
        qR = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        iR = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
      const {
        height: fR,
        width: VR
      } = SR(RR, JR, GR);
      if (!fR || !VR) return void wR.c.Error("Invalid 'size' parameter !");
      const KR = JR.jH();
      let eR = KR.activeCamera !== JR;
      if (KR.frameGraph) {
        const RR = DR.FindMainObjectRenderer(KR.frameGraph);
        RR && (eR = RR.camera !== JR)
      }
      eR ? IR(RR, JR, GR, (RR => {
        if (uR) {
          const JR = new Blob([RR]);
          rR.h.DownloadBlob(JR), yR && yR("")
        } else yR && yR(RR)
      }), tR, 1, RR.getCreationOptions().antialias, void 0, void 0, void 0, void 0, ZR) : RR.onEndFrameObservable.addOnce((() => {
        HR || (HR = document.createElement("canvas")), HR.width = VR, HR.height = fR;
        const JR = HR.getContext("2d"),
          GR = RR.getRenderingCanvas();
        if (!JR || !GR) return void wR.c.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
        const eR = GR.width,
          aR = GR.height,
          LR = HR.width,
          nR = HR.height,
          UR = LR / eR,
          WR = nR / aR,
          AR = qR ? Math.max(UR, WR) : Math.min(UR, WR),
          CR = eR * AR,
          XR = aR * AR,
          MR = (LR - CR) / 2,
          BR = (nR - XR) / 2;
        JR.save(), JR.fillStyle = iR ? KR.clearColor.toHexString() : "rgba(0, 0, 0, 0)", JR.fillRect(0, 0, VR, fR), JR.restore(), JR.drawImage(GR, 0, 0, eR, aR, MR, BR, CR, XR), uR ? (rR.h.EncodeScreenshotCanvasData(HR, void 0, tR, void 0, ZR), yR && yR("")) : rR.h.EncodeScreenshotCanvasData(HR, yR, tR, void 0, ZR)
      }))
    }
    async function cR(RR, JR, GR) {
      let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        tR = arguments.length > 4 ? arguments[4] : void 0,
        uR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        ZR = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        qR = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      return await new Promise(((iR, fR) => {
        oR(RR, JR, GR, (RR => {
          "undefined" !== typeof RR ? iR(RR) : fR(new Error("Data is undefined"))
        }), yR, qR, tR, uR, ZR)
      }))
    }
    async function PR(RR, JR, GR, yR) {
      let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        uR = arguments.length > 5 ? arguments[5] : void 0,
        ZR = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return await new Promise((qR => {
        oR(RR, JR, {
          width: GR,
          height: yR
        }, (() => {
          qR()
        }), tR, !0, uR, ZR)
      }))
    }

    function IR(RR, JR, uR, ZR) {
      let qR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        iR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
        fR = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        VR = arguments.length > 7 ? arguments[7] : void 0,
        rR = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        nR = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        UR = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
        WR = arguments.length > 11 ? arguments[11] : void 0,
        AR = arguments.length > 12 ? arguments[12] : void 0,
        CR = arguments.length > 13 ? arguments[13] : void 0,
        XR = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
        MR = arguments.length > 15 ? arguments[15] : void 0;
      const BR = JR.jH();
      if (BR.frameGraph) return void zR(BR.frameGraph, JR, uR, qR, iR, fR, VR, WR, CR, !ZR).then((RR => {
        ZR && ZR(RR)
      }));
      const {
        height: lR,
        width: pR,
        finalWidth: gR,
        finalHeight: bR
      } = SR(RR, JR, uR), vR = {
        width: pR,
        height: lR
      };
      if (!lR || !pR) return void wR.c.Error("Invalid 'size' parameter !");
      RR.skipFrameRender = !0;
      const OR = RR.getRenderWidth,
        xR = RR.getRenderHeight;
      RR.getRenderWidth = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && RR._currentRenderTarget ? RR._currentRenderTarget.width : pR
      }, RR.getRenderHeight = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && RR._currentRenderTarget ? RR._currentRenderTarget.height : lR
      }, RR.onResizeObservable.hasObservers() && RR.onResizeObservable.notifyObservers(RR);
      const NR = new tR.b("screenShot", vR, BR, !1, !1, 0, !1, yR.f.BILINEAR_SAMPLINGMODE, void 0, nR, void 0, void 0, void 0, iR);
      NR.renderList = BR.meshes.slice(), NR.samples = iR, NR.renderSprites = rR, NR.activeCamera = JR, NR.forceLayerMaskCheck = UR, AR?.(NR);
      const DR = CR || eR.DumpData,
        HR = () => {
          BR.incrementRenderId(), BR.resetCachedMaterial(), (0, LR.g)((() => NR.isReadyForRendering() && JR.isReady(!0)), (() => {
            RR.onEndFrameObservable.addOnce((() => {
              gR === pR && bR === lR ? NR.readPixels(void 0, void 0, void 0, !1).then((RR => {
                DR(pR, lR, RR, ZR, qR, VR, !0, void 0, WR), NR.dispose()
              })) : (RR.isWebGPU ? GR.e(688).then((() => GR(64317))) : GR.e(689).then((() => GR(64320)))).then((async () => await (0, aR.e)("pass", NR.getInternalTexture(), BR, void 0, void 0, void 0, gR, bR).then((JR => {
                RR._readTexturePixels(JR, gR, bR, -1, 0, null, !0, !1, 0, 0).then((RR => {
                  DR(gR, bR, RR, ZR, qR, VR, !0, void 0, WR), JR.dispose()
                }))
              }))))
            })), BR.incrementRenderId(), BR.resetCachedMaterial();
            const yR = BR.activeCamera,
              tR = BR.activeCameras,
              uR = JR.outputRenderTarget,
              iR = BR.spritesEnabled;
            BR.activeCamera = JR, BR.activeCameras = null, JR.outputRenderTarget = NR, BR.spritesEnabled = rR;
            const fR = BR.meshes;
            BR.meshes = NR.renderList || BR.meshes;
            try {
              BR.render()
            } finally {
              BR.activeCamera = yR, BR.activeCameras = tR, JR.outputRenderTarget = uR, BR.spritesEnabled = iR, BR.meshes = fR, RR.getRenderWidth = OR, RR.getRenderHeight = xR, RR.onResizeObservable.hasObservers() && RR.onResizeObservable.notifyObservers(RR), JR.getProjectionMatrix(!0), RR.skipFrameRender = !1
            }
          }), (() => {
            RR.skipFrameRender = !1, RR.getRenderWidth = OR, RR.getRenderHeight = xR, MR?.()
          }), void 0, XR)
        };
      if (fR) {
        const RR = new KR("antialiasing", 1, BR.activeCamera);
        NR.addPostProcess(RR), RR.autoClear = !0, RR.onEffectCreatedObservable.addOnce((RR => {
          RR.isReady() ? HR() : RR.onCompiled = () => {
            HR()
          }
        }))
      } else HR()
    }
    async function mR(RR, JR, GR) {
      let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        uR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        ZR = arguments.length > 6 ? arguments[6] : void 0,
        qR = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        iR = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        fR = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
        VR = arguments.length > 10 ? arguments[10] : void 0,
        KR = arguments.length > 11 ? arguments[11] : void 0,
        wR = arguments.length > 12 ? arguments[12] : void 0;
      return await new Promise(((rR, eR) => {
        IR(RR, JR, GR, (RR => {
          "undefined" !== typeof RR ? rR(RR) : eR(new Error("Data is undefined"))
        }), yR, tR, uR, ZR, qR, iR, fR, VR, KR, wR)
      }))
    }
    async function zR(RR, JR, GR) {
      let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        uR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        ZR = arguments.length > 6 ? arguments[6] : void 0,
        qR = arguments.length > 7 ? arguments[7] : void 0,
        iR = arguments.length > 8 ? arguments[8] : void 0,
        fR = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        VR = arguments.length > 10 ? arguments[10] : void 0;
      const KR = RR.engine,
        wR = RR.textureManager,
        {
          height: rR,
          width: aR,
          finalWidth: LR,
          finalHeight: UR
        } = SR(KR, JR, GR),
        WR = {
          width: aR,
          height: rR
        },
        AR = iR || eR.DumpData,
        CR = RR.tasks,
        XR = CR.length,
        MR = RR.pausedExecution,
        lR = KR.getCaps().parallelShaderCompile;
      wR.setBackBufferTextures(0, 0, {
        size: WR,
        options: {
          createMipMaps: !1,
          samples: tR,
          types: [0],
          formats: [5],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot color"]
        },
        sizeIsPercentage: !1
      }, {
        size: WR,
        options: {
          createMipMaps: !1,
          samples: tR,
          types: [0],
          formats: [KR.isStencilEnable ? 13 : 14],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot depth"]
        },
        sizeIsPercentage: !1
      });
      let gR = nR;
      if (uR) {
        const JR = new BR("fxaa", RR);
        JR.sourceTexture = gR, gR = JR.outputTexture, RR.addTask(JR)
      }
      if (LR !== aR || UR !== rR) {
        const JR = new pR("pass", RR);
        JR.sourceTexture = gR, JR.targetTexture = RR.textureManager.createRenderTargetTexture("pass_output", {
          size: {
            width: LR,
            height: UR
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
        }), gR = JR.outputTexture, RR.addTask(JR)
      }
      const bR = DR.FindMainObjectRenderer(RR);
      let vR = null;
      bR && (vR = bR.camera, bR.camera = JR), KR.getCaps().parallelShaderCompile = void 0, await RR.buildAsync();
      const OR = VR ?? (wR.hasHistoryTextures ? 32 : 1);
      for (let eR = 0; eR < OR; ++eR) RR.execute();
      RR.pausedExecution = !0, KR.getCaps().parallelShaderCompile = lR;
      for (let eR = XR; eR < CR.length; ++eR) RR.tasks[eR].dispose();
      RR.tasks.length = XR, bR && vR && (bR.camera = vR);
      const xR = RR.textureManager.getTextureFromHandle(gR);
      return xR.incrementReferences(), wR.resetBackBufferTextures(), await RR.buildAsync(), RR.pausedExecution = MR, new Promise((RR => {
        KR._readTexturePixels(xR, LR, UR, -1, 0, null, !0, !1, 0, 0).then((async JR => {
          xR.dispose(), AR(LR, UR, JR, fR ? void 0 : JR => RR(JR), yR, ZR, !0, void 0, qR), fR && RR(null)
        }))
      }))
    }

    function SR(RR, JR, GR) {
      let yR = 0,
        tR = 0,
        uR = 0,
        ZR = 0;
      if ("object" === typeof GR) {
        const qR = GR.precision ? Math.abs(GR.precision) : 1;
        GR.width && GR.height ? (yR = GR.height * qR, tR = GR.width * qR) : GR.width && !GR.height ? (tR = GR.width * qR, yR = Math.round(tR / RR.getAspectRatio(JR))) : GR.height && !GR.width ? (yR = GR.height * qR, tR = Math.round(yR * RR.getAspectRatio(JR))) : (tR = Math.round(RR.getRenderWidth() * qR), yR = Math.round(tR / RR.getAspectRatio(JR))), GR.finalWidth && GR.finalHeight ? (ZR = GR.finalHeight, uR = GR.finalWidth) : GR.finalWidth && !GR.finalHeight ? (uR = GR.finalWidth, ZR = Math.round(uR / RR.getAspectRatio(JR))) : GR.finalHeight && !GR.finalWidth ? (ZR = GR.finalHeight, uR = Math.round(ZR * RR.getAspectRatio(JR))) : (uR = tR, ZR = yR)
      } else isNaN(GR) || (yR = GR, tR = GR, uR = GR, ZR = GR);
      return tR && (tR = Math.floor(tR)), yR && (yR = Math.floor(yR)), uR && (uR = Math.floor(uR)), ZR && (ZR = Math.floor(ZR)), {
        height: 0 | yR,
        width: 0 | tR,
        finalWidth: 0 | uR,
        finalHeight: 0 | ZR
      }
    }
    const jR = {
      CreateScreenshot: oR,
      CreateScreenshotAsync: cR,
      CreateScreenshotWithResizeAsync: PR,
      CreateScreenshotUsingRenderTarget: IR,
      CreateScreenshotUsingRenderTargetAsync: mR,
      CreateScreenshotForFrameGraphAsync: zR
    };
    let dR = !1;

    function ER() {
      if (dR) return;
      dR = !0;
      rR.h.CreateScreenshot = oR, rR.h.CreateScreenshotAsync = cR, rR.h.CreateScreenshotUsingRenderTarget = IR, rR.h.CreateScreenshotUsingRenderTargetAsync = mR
    }
    ER()
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);