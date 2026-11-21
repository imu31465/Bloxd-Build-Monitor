export const id = 232;
export const ids = [232, 233];
export const modules = {
  40234: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Kd,
      e: () => ld
    });
    var pd = kd(39964),
      Nd = kd(39966),
      Wd = kd(37251),
      Pd = kd(37443),
      Zd = kd(40243),
      gd = kd(40205),
      Cd = kd(37303);
    let Kd = (() => {
        var dd;
        let Jd, kd, gd = Zd.d,
          Cd = [],
          Kd = [],
          od = [],
          ld = [];
        return dd = class extends gd {
          constructor(dd, Jd, kd, Nd) {
            super(dd, kd, Nd), this.groundColor = (0, pd.i)(this, Cd, new Pd.c(0, 0, 0)), this.direction = ((0, pd.i)(this, Kd), (0, pd.i)(this, od, void 0)), (0, pd.i)(this, ld), this.direction = Jd || Wd.n.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(dd) {
            return this.direction = Wd.n.Normalize(dd.subtract(Wd.n.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(dd, Jd) {
            const kd = Wd.n.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", kd.x, kd.y, kd.z, 0, Jd), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), Jd), this
          }
          transferToNodeMaterialEffect(dd, Jd) {
            const kd = Wd.n.Normalize(this.direction);
            return dd.setFloat3(Jd, kd.x, kd.y, kd.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = Wd.b.Identity()), this._worldMatrix
          }
          getTypeID() {
            return Zd.d.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(dd, Jd) {
            dd["HEMILIGHT" + Jd] = !0
          }
        }, (() => {
          const Wd = "function" === typeof Symbol && Symbol.metadata ? Object.create(gd[Symbol.metadata] ?? null) : void 0;
          Jd = [(0, Nd.n)()], kd = [(0, Nd.F)()], (0, pd.h)(null, null, Jd, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: dd => "groundColor" in dd,
              get: dd => dd.groundColor,
              set: (dd, Jd) => {
                dd.groundColor = Jd
              }
            },
            metadata: Wd
          }, Cd, Kd), (0, pd.h)(null, null, kd, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: dd => "direction" in dd,
              get: dd => dd.direction,
              set: (dd, Jd) => {
                dd.direction = Jd
              }
            },
            metadata: Wd
          }, od, ld), Wd && Object.defineProperty(dd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Wd
          })
        })(), dd
      })(),
      od = !1;

    function ld() {
      od || (od = !0, gd.c.AddNodeConstructor("Light_Type_3", ((dd, Jd) => () => new Kd(dd, Wd.n.Zero(), Jd))), (0, Cd.h)("BABYLON.HemisphericLight", Kd))
    }
  },
  37966: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Nd
    });
    var pd = kd(37969);
    class Nd {
      static GetPlanes(dd) {
        const Jd = [];
        for (let kd = 0; kd < 6; kd++) Jd.push(new pd.c(0, 0, 0, 0));
        return Nd.GetPlanesToRef(dd, Jd), Jd
      }
      static GetNearPlaneToRef(dd, Jd) {
        const kd = dd.m;
        Jd.normal.x = kd[3] + kd[2], Jd.normal.y = kd[7] + kd[6], Jd.normal.z = kd[11] + kd[10], Jd.d = kd[15] + kd[14], Jd.normalize()
      }
      static GetFarPlaneToRef(dd, Jd) {
        const kd = dd.m;
        Jd.normal.x = kd[3] - kd[2], Jd.normal.y = kd[7] - kd[6], Jd.normal.z = kd[11] - kd[10], Jd.d = kd[15] - kd[14], Jd.normalize()
      }
      static GetLeftPlaneToRef(dd, Jd) {
        const kd = dd.m;
        Jd.normal.x = kd[3] + kd[0], Jd.normal.y = kd[7] + kd[4], Jd.normal.z = kd[11] + kd[8], Jd.d = kd[15] + kd[12], Jd.normalize()
      }
      static GetRightPlaneToRef(dd, Jd) {
        const kd = dd.m;
        Jd.normal.x = kd[3] - kd[0], Jd.normal.y = kd[7] - kd[4], Jd.normal.z = kd[11] - kd[8], Jd.d = kd[15] - kd[12], Jd.normalize()
      }
      static GetTopPlaneToRef(dd, Jd) {
        const kd = dd.m;
        Jd.normal.x = kd[3] - kd[1], Jd.normal.y = kd[7] - kd[5], Jd.normal.z = kd[11] - kd[9], Jd.d = kd[15] - kd[13], Jd.normalize()
      }
      static GetBottomPlaneToRef(dd, Jd) {
        const kd = dd.m;
        Jd.normal.x = kd[3] + kd[1], Jd.normal.y = kd[7] + kd[5], Jd.normal.z = kd[11] + kd[9], Jd.d = kd[15] + kd[13], Jd.normalize()
      }
      static GetPlanesToRef(dd, Jd) {
        Nd.GetNearPlaneToRef(dd, Jd[0]), Nd.GetFarPlaneToRef(dd, Jd[1]), Nd.GetLeftPlaneToRef(dd, Jd[2]), Nd.GetRightPlaneToRef(dd, Jd[3]), Nd.GetTopPlaneToRef(dd, Jd[4]), Nd.GetBottomPlaneToRef(dd, Jd[5])
      }
      static IsPointInFrustum(dd, Jd) {
        for (let kd = 0; kd < 6; kd++)
          if (Jd[kd].dotCoordinate(dd) < 0) return !1;
        return !0
      }
    }
  },
  37969: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Nd
    });
    var pd = kd(37251);
    class Nd {
      constructor(dd, Jd, kd, Nd) {
        this.normal = new pd.n(dd, Jd, kd), this.d = Nd
      }
      spd() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Nd(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let dd = this.normal.getHashCode();
        return dd = 397 * dd ^ this.d, dd
      }
      normalize() {
        const dd = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let Jd = 0;
        return 0 !== dd && (Jd = 1 / dd), this.normal.x *= Jd, this.normal.y *= Jd, this.normal.z *= Jd, this.d *= Jd, this
      }
      transform(dd) {
        const Jd = Nd._TmpMatrix;
        dd.invertToRef(Jd);
        const kd = Jd.m,
          pd = this.normal.x,
          Wd = this.normal.y,
          Pd = this.normal.z,
          Zd = this.d,
          gd = pd * kd[0] + Wd * kd[1] + Pd * kd[2] + Zd * kd[3],
          Cd = pd * kd[4] + Wd * kd[5] + Pd * kd[6] + Zd * kd[7],
          Kd = pd * kd[8] + Wd * kd[9] + Pd * kd[10] + Zd * kd[11],
          od = pd * kd[12] + Wd * kd[13] + Pd * kd[14] + Zd * kd[15];
        return new Nd(gd, Cd, Kd, od)
      }
      dotCoordinate(dd) {
        return this.normal.x * dd.x + this.normal.y * dd.y + this.normal.z * dd.z + this.d
      }
      copyFromPoints(dd, Jd, kd) {
        const pd = Jd.x - dd.x,
          Nd = Jd.y - dd.y,
          Wd = Jd.z - dd.z,
          Pd = kd.x - dd.x,
          Zd = kd.y - dd.y,
          gd = kd.z - dd.z,
          Cd = Nd * gd - Wd * Zd,
          Kd = Wd * Pd - pd * gd,
          od = pd * Zd - Nd * Pd,
          ld = Math.sqrt(Cd * Cd + Kd * Kd + od * od);
        let Qd;
        return Qd = 0 !== ld ? 1 / ld : 0, this.normal.x = Cd * Qd, this.normal.y = Kd * Qd, this.normal.z = od * Qd, this.d = -(this.normal.x * dd.x + this.normal.y * dd.y + this.normal.z * dd.z), this
      }
      isFrontFacingTo(dd, Jd) {
        return pd.n.Dot(this.normal, dd) <= Jd
      }
      signedDistanceTo(dd) {
        return pd.n.Dot(dd, this.normal) + this.d
      }
      static FromArray(dd) {
        return new Nd(dd[0], dd[1], dd[2], dd[3])
      }
      static FromPoints(dd, Jd, kd) {
        const pd = new Nd(0, 0, 0, 0);
        return pd.copyFromPoints(dd, Jd, kd), pd
      }
      static FromPositionAndNormal(dd, Jd) {
        const kd = new Nd(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(dd, Jd, kd)
      }
      static FromPositionAndNormalToRef(dd, Jd, kd) {
        return kd.normal.Fs(Jd), kd.normal.normalize(), kd.d = -dd.dot(kd.normal), kd
      }
      static SignedDistanceToPlaneFromPositionAndNormal(dd, Jd, kd) {
        const Nd = -(Jd.x * dd.x + Jd.y * dd.y + Jd.z * dd.z);
        return pd.n.Dot(kd, Jd) + Nd
      }
    }
    Nd._TmpMatrix = pd.b.Identity()
  },
  38281: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => pd
    });
    class pd {
      constructor(dd, Jd, kd, pd) {
        this.x = dd, this.y = Jd, this.width = kd, this.height = pd
      }
      toGlobal(dd, Jd) {
        return new pd(this.x * dd, this.y * Jd, this.width * dd, this.height * Jd)
      }
      toGlobalToRef(dd, Jd, kd) {
        return kd.x = this.x * dd, kd.y = this.y * Jd, kd.width = this.width * dd, kd.height = this.height * Jd, this
      }
      clone() {
        return new pd(this.x, this.y, this.width, this.height)
      }
    }
  },
  38806: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Wd
    });
    var pd = kd(38812);
    const Nd = (dd, Jd, kd) => dd ? dd.getClassName && "Mesh" === dd.getClassName() ? null : !dd.getClassName || "SubMesh" !== dd.getClassName() && "PhysicsBody" !== dd.getClassName() ? dd.clone ? dd.clone() : Array.isArray(dd) ? dd.slice() : kd && "object" === typeof dd ? {
      ...dd
    } : null : dd.clone(Jd) : null;
    class Wd {
      static DeepCopy(dd, Jd, kd, Wd) {
        let Pd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Zd = function(dd) {
          const Jd = [];
          do {
            const kd = Object.getOwnPropertyNames(dd);
            for (const dd of kd) - 1 === Jd.indexOf(dd) && Jd.push(dd)
          } while (dd = Object.getPrototypeOf(dd));
          return Jd
        }(dd);
        for (const Cd of Zd) {
          if ("_" === Cd[0] && (!Wd || -1 === Wd.indexOf(Cd))) continue;
          if (Cd.endsWith("Observable")) continue;
          if (kd && -1 !== kd.indexOf(Cd)) continue;
          const Zd = dd[Cd],
            Kd = typeof Zd;
          if ("function" !== Kd) try {
            if ("object" === Kd)
              if (Zd instanceof Uint8Array) Jd[Cd] = Uint8Array.from(Zd);
              else if (Zd instanceof Array) {
              if (Jd[Cd] = [], Zd.length > 0)
                if ("object" == typeof Zd[0])
                  for (let dd = 0; dd < Zd.length; dd++) {
                    const kd = Nd(Zd[dd], Jd, Pd); - 1 === Jd[Cd].indexOf(kd) && Jd[Cd].push(kd)
                  } else Jd[Cd] = Zd.slice(0)
            } else Jd[Cd] = Nd(Zd, Jd, Pd);
            else Jd[Cd] = Zd
          } catch (gd) {
            pd.c.Warn(gd.message)
          }
        }
      }
    }
  },
  38105: (dd, Jd, kd) => {
    function pd() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (dd => {
        const Jd = 16 * Math.random() | 0;
        return ("x" === dd ? Jd : 3 & Jd | 8).toString(16)
      }))
    }
    kd.d(Jd, {
      c: () => pd
    })
  },
  38812: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => pd
    });
    class pd {
      static _CheckLimit(dd, Jd) {
        let kd = pd._LogLimitOutputs[dd];
        return kd ? kd.current++ : (kd = {
          limit: Jd,
          current: 1
        }, pd._LogLimitOutputs[dd] = kd), kd.current <= kd.limit
      }
      static _GenerateLimitMessage(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const kd = pd._LogLimitOutputs[dd];
        if (!kd || !pd.MessageLimitReached) return;
        const Nd = this._Levels[Jd];
        kd.current === kd.limit && pd[Nd.name](pd.MessageLimitReached.replace(/%LIMIT%/g, "" + kd.limit).replace(/%TYPE%/g, Nd.name ?? ""))
      }
      static _AddLogEntry(dd) {
        pd._LogCache = dd + pd._LogCache, pd.OnNewCacheEntry && pd.OnNewCacheEntry(dd)
      }
      static _FormatMessage(dd) {
        const Jd = dd => dd < 10 ? "0" + dd : "" + dd,
          kd = new Date;
        return "[" + Jd(kd.getHours()) + ":" + Jd(kd.getMinutes()) + ":" + Jd(kd.getSeconds()) + "]: " + dd
      }
      static _LogDisabled(dd, Jd) {}
      static _LogEnabled() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Jd = arguments.length > 1 ? arguments[1] : void 0,
          kd = arguments.length > 2 ? arguments[2] : void 0;
        const Nd = Array.isArray(Jd) ? Jd[0] : Jd;
        if (void 0 !== kd && !pd._CheckLimit(Nd, kd)) return;
        const Wd = pd._FormatMessage(Nd),
          Pd = this._Levels[dd],
          Zd = Array.isArray(Jd) ? Jd.slice(1) : [];
        Pd.logFunc && Pd.logFunc("BJS - " + Wd, ...Zd);
        const gd = `<div style='color:${Pd.color}'>${Wd}</div><br>`;
        pd._AddLogEntry(gd), pd._GenerateLimitMessage(Nd, dd)
      }
      static get LogCache() {
        return pd._LogCache
      }
      static ClearLogCache() {
        pd._LogCache = "", pd._LogLimitOutputs = {}, pd.errorsCount = 0
      }
      static set LogLevels(dd) {
        pd.Log = pd._LogDisabled, pd.Warn = pd._LogDisabled, pd.Error = pd._LogDisabled;
        const Jd = [pd.MessageLogLevel, pd.WarningLogLevel, pd.ErrorLogLevel];
        for (const kd of Jd)
          if ((dd & kd) === kd) {
            const dd = this._Levels[kd];
            pd[dd.name] = pd._LogEnabled.bind(pd, kd)
          }
      }
    }
    pd.NoneLogLevel = 0, pd.MessageLogLevel = 1, pd.WarningLogLevel = 2, pd.ErrorLogLevel = 4, pd.AllLogLevel = 7, pd.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", pd._LogCache = "", pd._LogLimitOutputs = {}, pd._Levels = [{}, {
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
    }], pd.errorsCount = 0, pd.Log = pd._LogEnabled.bind(pd, pd.MessageLogLevel), pd.Warn = pd._LogEnabled.bind(pd, pd.WarningLogLevel), pd.Error = pd._LogEnabled.bind(pd, pd.ErrorLogLevel)
  },
  60867: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      CreateScreenshot: () => nd,
      CreateScreenshotAsync: () => Ud,
      CreateScreenshotForFrameGraphAsync: () => Ed,
      CreateScreenshotUsingRenderTarget: () => Dd,
      CreateScreenshotUsingRenderTargetAsync: () => Td,
      CreateScreenshotWithResizeAsync: () => yd,
      RegisterScreenshotTools: () => ud,
      ScreenshotTools: () => hd
    });
    var pd = kd(40471),
      Nd = kd(41773),
      Wd = kd(41752),
      Pd = kd(39983),
      Zd = kd(41761),
      gd = kd(37277),
      Cd = kd(37251);
    class Kd extends Zd.f {
      static _GetDefines(dd) {
        if (!dd) return null;
        return dd.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
      }
      _gatherImports(dd, Jd) {
        dd ? (this._webGPUReady = !0, Jd.push(Promise.all([kd.e(368).then((() => kd(61225))), kd.e(369).then((() => kd(61233)))]))) : Jd.push(Promise.all([kd.e(370).then((() => kd(61241))), kd.e(371).then((() => kd(61246)))]))
      }
      constructor(dd) {
        const Jd = {
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: dd,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || gd.d.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          vertexShader: Kd.VertexUrl,
          fragmentShader: Kd.FragmentUrl,
          uniforms: Kd.Uniforms
        };
        super({
          ...Jd,
          defines: Kd._GetDefines(Jd.engine)
        }), this.texelSize = new Cd.k(0, 0)
      }
      bind() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.bind(dd), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
      }
    }
    Kd.VertexUrl = "fxaa", Kd.FragmentUrl = "fxaa", Kd.Uniforms = ["texelSize"];
    class od extends Wd.e {
      getClassName() {
        return "FxaaPostProcess"
      }
      constructor(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Nd = arguments.length > 3 ? arguments[3] : void 0,
          Wd = arguments.length > 4 ? arguments[4] : void 0,
          Pd = arguments.length > 5 ? arguments[5] : void 0,
          Zd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const gd = {
          uniforms: Kd.Uniforms,
          size: "number" === typeof Jd ? Jd : void 0,
          camera: kd,
          samplingMode: Nd || pd.c.BILINEAR_SAMPLINGMODE,
          engine: Wd,
          reusable: Pd,
          textureType: Zd,
          ...Jd
        };
        super(dd, Kd.FragmentUrl, {
          effectWrapper: "number" !== typeof Jd && Jd.effectWrapper ? void 0 : new Kd(dd, Wd, gd),
          ...gd
        }), this.onApplyObservable.add((dd => {
          this._effectWrapper.texelSize = this.texelSize
        }))
      }
      static _Parse(dd, Jd, kd, pd) {
        return Pd.c.Parse((() => new od(dd.name, dd.options, Jd, dd.renderTargetSamplingMode, kd.eL(), dd.reusable)), dd, kd, pd)
      }
    }
    var ld = kd(38812),
      Qd = kd(40066),
      Ld = kd(41784),
      Od = kd(41767),
      ed = kd(39866);
    const Rd = 0;
    class Id {
      constructor(dd, Jd, kd) {
        this.name = dd, this._parentTask = Jd, this._context = kd, this.disabled = !1
      }
      setInitializeFunc(dd) {
        this._initFunc = dd
      }
      setExecuteFunc(dd) {
        this._executeFunc = dd
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
    class Gd extends Id {
      static IsObjectListPass(dd) {
        return void 0 !== dd.setObjectList
      }
      get objectList() {
        return this._objectList
      }
      setObjectList(dd) {
        this._objectList = dd
      }
      constructor(dd, Jd, kd, pd) {
        super(dd, Jd, kd), this._engine = pd
      }
      _isValid() {
        const dd = super._isValid();
        return dd || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
      }
    }
    class vd extends Id {
      static IsRenderPass(dd) {
        return void 0 !== dd.setRenderTarget
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
      constructor(dd, Jd, kd, pd) {
        super(dd, Jd, kd), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = pd
      }
      setRenderTarget(dd) {
        this._renderTarget = dd
      }
      setRenderTargetDepth(dd) {
        this._renderTargetDepth = dd
      }
      addDependencies(dd) {
        if (void 0 !== dd)
          if (Array.isArray(dd))
            for (const Jd of dd) this._dependencies.add(Jd);
          else this._dependencies.add(dd)
      }
      collectDependencies(dd) {
        const Jd = this._dependencies.keys();
        for (let kd = Jd.next(); !0 !== kd.done; kd = Jd.next()) dd.add(kd.value);
        if (void 0 !== this._renderTarget)
          if (Array.isArray(this._renderTarget))
            for (const kd of this._renderTarget) void 0 !== kd && dd.add(kd);
          else dd.add(this._renderTarget);
        void 0 !== this._renderTargetDepth && dd.add(this._renderTargetDepth)
      }
      setOutputLayerAndFaceIndices(dd) {
        const Jd = this.frameGraphRenderTarget.renderTargetWrapper;
        if (Jd)
          for (const kd of dd) Jd.setLayerAndFaceIndex(kd.targetIndex, kd.layerIndex, kd.faceIndex)
      }
      _initialize() {
        this._frameGraphRenderTarget = this._context.createRenderTarget(this.name, this._renderTarget, this._renderTargetDepth, this.depthReadOnly, this.stencilReadOnly), super._initialize()
      }
      _execute() {
        this._context.bindRenderTarget(this._frameGraphRenderTarget), super._execute(), this._context.restoreDefaultFramebuffer()
      }
      _isValid() {
        const dd = super._isValid();
        return dd || (void 0 !== this._renderTarget || void 0 !== this.renderTargetDepth ? null : "Render target and render target depth cannot both be undefined.")
      }
      _dispose() {
        this._frameGraphRenderTarget?.dispose()
      }
    }
    var xd = kd(37280);
    class qd {
      get name() {
        return this._name
      }
      set name(dd) {
        this._name = dd
      }
      get disabled() {
        return this._disabled
      }
      set disabled(dd) {
        this._disabled = dd
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
      constructor(dd, Jd) {
        this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new xd.e, this.onBeforeTaskExecute = new xd.e, this.onAfterTaskExecute = new xd.e, this.name = dd, this._frameGraph = Jd, this._reset()
      }
      _reset() {
        for (const dd of this._passes) dd._dispose();
        for (const dd of this._passesDisabled) dd._dispose();
        this._passes.length = 0, this._passesDisabled.length = 0
      }
      _addPass(dd, Jd) {
        Jd ? this._passesDisabled.push(dd) : this._passes.push(dd)
      }
      _checkTask() {
        let dd, Jd = null,
          kd = null;
        for (const Zd of this._passes) {
          const pd = Zd._isValid();
          if (pd) throw new Error(`Pass "${Zd.name}" is not valid. ${pd}`);
          if (vd.IsRenderPass(Zd)) {
            const dd = Array.isArray(Zd.renderTarget) ? Zd.renderTarget : [Zd.renderTarget];
            Jd = [];
            for (const kd of dd) void 0 !== kd && Jd.push(this._frameGraph.textureManager.getTextureFromHandle(kd));
            kd = void 0 !== Zd.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(Zd.renderTargetDepth) : null
          } else Gd.IsObjectListPass(Zd) && (dd = Zd.objectList)
        }
        let pd, Nd = null,
          Wd = [],
          Pd = null;
        for (const Zd of this._passesDisabled) {
          const dd = Zd._isValid();
          if (dd) throw new Error(`Pass "${Zd.name}" is not valid. ${dd}`);
          if (vd.IsRenderPass(Zd)) {
            const dd = Array.isArray(Zd.renderTarget) ? Zd.renderTarget : [Zd.renderTarget];
            Nd = [];
            for (const Jd of dd) void 0 !== Jd && Nd.push(this._frameGraph.textureManager.getTextureFromHandle(Jd));
            Wd = dd, Pd = void 0 !== Zd.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(Zd.renderTargetDepth) : null
          } else Gd.IsObjectListPass(Zd) && (pd = Zd.objectList)
        }
        if (this._passesDisabled.length > 0) {
          if (!this._checkSameRenderTarget(Jd, Nd)) {
            let dd = !0;
            for (const Jd of Wd)
              if (void 0 !== Jd && !this._frameGraph.textureManager.isHistoryTexture(Jd)) {
                dd = !1;
                break
              } if (!dd) throw new Error(`The output texture of the task "${this.name}" is different when it is enabled or disabled.`)
          }
          if (kd !== Pd && null !== Pd) throw new Error(`The output depth texture of the task "${this.name}" is different when it is enabled or disabled.`);
          if (dd !== pd && null !== pd) throw new Error(`The output object list of the task "${this.name}" is different when it is enabled or disabled.`)
        }
      }
      _execute() {
        const dd = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
        this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const Jd of dd) Jd._execute()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
        this.onAfterTaskExecute.notifyObservers(this)
      }
      _initializePasses() {
        this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const dd of this._passes) dd._initialize();
          for (const dd of this._passesDisabled) dd._initialize()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
      }
      _checkSameRenderTarget(dd, Jd) {
        if (null === dd || null === Jd) return dd === Jd;
        if (dd.length !== Jd.length) return !1;
        for (let kd = 0; kd < dd.length; kd++)
          if (dd[kd] !== Jd[kd]) return !1;
        return !0
      }
    }
    class Bd extends qd {
      get alphaMode() {
        return this.postProcess.alphaMode
      }
      set alphaMode(dd) {
        this.postProcess.alphaMode = dd
      }
      get drawWrapper() {
        return this._postProcessDrawWrapper
      }
      constructor(dd, Jd, kd) {
        super(dd, Jd), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = kd, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture = this._frameGraph.textureManager.createDanglingHandle(), this.outputDepthAttachmentTexture = this._frameGraph.textureManager.createDanglingHandle()
      }
      isReady() {
        return this.postProcess.isReady()
      }
      getClassName() {
        return "FrameGraphPostProcessTask"
      }
      record() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Jd = arguments.length > 1 ? arguments[1] : void 0,
          kd = arguments.length > 2 ? arguments[2] : void 0;
        if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
        const pd = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
        if (pd && (pd.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, pd), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentTexture, this.depthAttachmentTexture), pd) {
          const dd = this._frameGraph.textureManager.getTextureAbsoluteDimensions(pd);
          this._sourceWidth = dd.width, this._sourceHeight = dd.height
        }
        const Nd = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
        this._outputWidth = Nd.size.width, this._outputHeight = Nd.size.height;
        const Wd = this._frameGraph.addRenderPass(this.name);
        if (Wd.depthReadOnly = this.depthReadOnly, Wd.stencilReadOnly = this.stencilReadOnly, Wd.addDependencies(this.sourceTexture), Wd.setRenderTarget(this.outputTexture), Wd.setRenderTargetDepth(this.depthAttachmentTexture), Wd.setExecuteFunc((dd => {
            dd.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && dd.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), Jd?.(dd), this.viewport && dd.setViewport(this.viewport), dd.applyFullScreenEffect(this._postProcessDrawWrapper, (() => {
              void 0 !== this.sourceTexture && dd.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), kd?.(dd), this.postProcess.bind()
            }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), dd.restoreDefaultFramebuffer(), dd.popDebugGroup()
          })), !dd) {
          const dd = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
          dd.depthReadOnly = this.depthReadOnly, dd.stencilReadOnly = this.stencilReadOnly, dd.addDependencies(this.sourceTexture), dd.setRenderTarget(this.outputTexture), dd.setRenderTargetDepth(this.depthAttachmentTexture), dd.setExecuteFunc((dd => {
            void 0 !== this.sourceTexture && 0 === this.alphaMode && (this.viewport && dd.setViewport(this.viewport), dd.copyTexture(this.sourceTexture, void 0, void 0 !== this.viewport))
          }))
        }
        return Wd
      }
      dispose() {
        this.postProcess.dispose(), super.dispose()
      }
    }
    class sd extends Bd {
      constructor(dd, Jd, kd) {
        super(dd, Jd, kd || new Kd(dd, Jd.engine))
      }
      getClassName() {
        return "FrameGraphFXAATask"
      }
      record() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Jd = arguments.length > 1 ? arguments[1] : void 0,
          kd = arguments.length > 2 ? arguments[2] : void 0;
        const pd = super.record(dd, Jd, kd);
        return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, pd
      }
    }
    var ad = kd(41782);
    class Md extends Bd {
      constructor(dd, Jd, kd) {
        super(dd, Jd, kd || new ad.e(dd, Jd.engine))
      }
      getClassName() {
        return "FrameGraphPassTask"
      }
    }
    var Fd = kd(40062),
      Yd = kd(40156),
      md = kd(40107),
      bd = kd(40234),
      Sd = kd(37443);
    class jd {
      getRenderCamera(dd) {
        if (this._renderCamera) return this._renderCamera;
        {
          let Jd;
          return Jd = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, dd && Jd && Jd.isRigCamera ? Jd.rigParent : Jd
        }
      }
      setRenderCamera(dd) {
        this._renderCamera = dd
      }
      _getSharedGizmoLight() {
        return this._sharedGizmoLight || (this._sharedGizmoLight = new bd.d("shared gizmo light", new Cd.n(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = Sd.c.Gray()), this._sharedGizmoLight
      }
      static get DefaultUtilityLayer() {
        return null == jd._DefaultUtilityLayer ? jd._CreateDefaultUtilityLayerFromScene(gd.d.LastCreatedScene) : jd._DefaultUtilityLayer
      }
      static _CreateDefaultUtilityLayerFromScene(dd) {
        return jd._DefaultUtilityLayer = new jd(dd), jd._DefaultUtilityLayer.originalScene.Zm.addOnce((() => {
          jd._DefaultUtilityLayer = null
        })), jd._DefaultUtilityLayer
      }
      static get DefaultKeepDepthUtilityLayer() {
        return null == jd._DefaultKeepDepthUtilityLayer ? jd._CreateDefaultKeepUtilityLayerFromScene(gd.d.LastCreatedScene) : jd._DefaultKeepDepthUtilityLayer
      }
      static _CreateDefaultKeepUtilityLayerFromScene(dd) {
        return jd._DefaultKeepDepthUtilityLayer = new jd(dd), jd._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, jd._DefaultKeepDepthUtilityLayer.originalScene.Zm.addOnce((() => {
          jd._DefaultKeepDepthUtilityLayer = null
        })), jd._DefaultKeepDepthUtilityLayer
      }
      constructor(dd) {
        let Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.originalScene = dd, this.handleEvents = Jd, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.processAllEvents = !1, this.pickingEnabled = !0, this.onPointerOutObservable = new xd.e, this.utilityLayerScene = new Fd.i(dd.eL(), {
          virtual: !0,
          useFloatingOrigin: dd.floatingOriginMode
        }), this.utilityLayerScene.useRightHandedSystem = dd.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), Jd && (this._originalPointerObserver = dd.onPrePointerObservable.add((Jd => {
          if (!this.utilityLayerScene.activeCamera) return;
          if (!this.pickingEnabled) return;
          if (!this.processAllEvents && Jd.type !== Yd.b.POINTERMOVE && Jd.type !== Yd.b.POINTERUP && Jd.type !== Yd.b.POINTERDOWN && Jd.type !== Yd.b.POINTERDOUBLETAP) return;
          this.utilityLayerScene.pointerX = dd.pointerX, this.utilityLayerScene.pointerY = dd.pointerY;
          const kd = Jd.event;
          if (dd.isPointerCaptured(kd.pointerId)) return void(this._pointerCaptures[kd.pointerId] = !1);
          const pd = kd => {
              let pd;
              if (Jd.nearInteractionPickingInfo) pd = Jd.nearInteractionPickingInfo.pickedMesh.Wm() == kd ? Jd.nearInteractionPickingInfo : new md.d;
              else if (kd !== this.utilityLayerScene && Jd.originalPickingInfo) pd = Jd.originalPickingInfo;
              else {
                let Nd = null;
                this._renderCamera && (Nd = kd._activeCamera, kd._activeCamera = this._renderCamera, Jd.ray = null), pd = Jd.ray ? kd.pickWithRay(Jd.ray) : kd.Tl(dd.pointerX, dd.pointerY), Nd && (kd._activeCamera = Nd)
              }
              return pd
            },
            Nd = pd(this.utilityLayerScene);
          if (!Jd.ray && Nd && (Jd.ray = Nd.ray), Jd.originalPickingInfo?.aimTransform && Nd && (Nd.aimTransform = Jd.originalPickingInfo.aimTransform, Nd.gripTransform = Jd.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(Jd), this.onlyCheckPointerDownEvents && Jd.type != Yd.b.POINTERDOWN) return Jd.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new Yd.f(Jd.type, Jd.event, Nd), Jd.type), void(Jd.type === Yd.b.POINTERUP && this._pointerCaptures[kd.pointerId] && (this._pointerCaptures[kd.pointerId] = !1));
          if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) Nd && Nd.hit && (Jd.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new Yd.f(Jd.type, Jd.event, Nd), Jd.type), Jd.skipOnPointerObservable = !0);
          else {
            const kd = pd(dd),
              Wd = Jd.event;
            kd && Nd && (0 === Nd.distance && kd.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(kd.pickedMesh) ? (this._notifyObservers(Jd, kd, Wd), Jd.skipOnPointerObservable = !0) : Jd.type === Yd.b.POINTERDOWN ? (this._pointerCaptures[Wd.pointerId] = !0, this._notifyObservers(Jd, kd, Wd)) : Jd.type !== Yd.b.POINTERMOVE && Jd.type !== Yd.b.POINTERUP || (this._lastPointerEvents[Wd.pointerId] && (this.onPointerOutObservable.notifyObservers(Wd.pointerId), delete this._lastPointerEvents[Wd.pointerId]), this._notifyObservers(Jd, kd, Wd)) : !this._pointerCaptures[Wd.pointerId] && (Nd.distance < kd.distance || 0 === kd.distance) ? (this._notifyObservers(Jd, Nd, Wd), Jd.skipOnPointerObservable || (Jd.skipOnPointerObservable = Nd.distance > 0)) : !this._pointerCaptures[Wd.pointerId] && Nd.distance >= kd.distance && (this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(kd.pickedMesh) ? (this._notifyObservers(Jd, kd, Wd), Jd.skipOnPointerObservable = !0) : (Jd.type !== Yd.b.POINTERMOVE && Jd.type !== Yd.b.POINTERUP || this._lastPointerEvents[Wd.pointerId] && (this.onPointerOutObservable.notifyObservers(Wd.pointerId), delete this._lastPointerEvents[Wd.pointerId]), this._notifyObservers(Jd, Nd, Wd))), Jd.type === Yd.b.POINTERUP && this._pointerCaptures[Wd.pointerId] && (this._pointerCaptures[Wd.pointerId] = !1))
          }
        })), this._originalPointerObserver && dd.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, kd || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((dd => {
          this.shouldRender && dd == this.getRenderCamera() && this.render()
        }))), this._sceneDisposeObserver = this.originalScene.Zm.add((() => {
          this.dispose()
        })), this._updateCamera()
      }
      _notifyObservers(dd, Jd, kd) {
        dd.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new Yd.f(dd.type, dd.event, Jd), dd.type), this._lastPointerEvents[kd.pointerId] = !0)
      }
      render() {
        if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
          const dd = this.utilityLayerScene.activeCamera.Wm(),
            Jd = this.utilityLayerScene.activeCamera;
          Jd._scene = this.utilityLayerScene, Jd.leftCamera && (Jd.leftCamera._scene = this.utilityLayerScene), Jd.rightCamera && (Jd.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), Jd._scene = dd, Jd.leftCamera && (Jd.leftCamera._scene = dd), Jd.rightCamera && (Jd.rightCamera._scene = dd)
        }
      }
      dispose() {
        this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.Zm.remove(this._sceneDisposeObserver), this._originalPointerObserver && this.originalScene.onPrePointerObservable.remove(this._originalPointerObserver), this.utilityLayerScene.dispose()
      }
      _updateCamera() {
        this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
      }
    }
    jd._DefaultUtilityLayer = null, jd._DefaultKeepDepthUtilityLayer = null;
    const Xd = {
      FindMainCamera: function(dd) {
        return dd.findMainCamera()
      },
      FindMainObjectRenderer: function(dd) {
        return dd.findMainObjectRenderer()
      },
      CreateUtilityLayerRenderer: function(dd) {
        let Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const kd = dd.BO,
          pd = new jd(kd, Jd, !0);
        pd.utilityLayerScene.activeCamera = kd.activeCamera;
        let Nd = Xd.FindMainCamera(kd.frameGraph);
        !Nd && kd.cameras.length > 0 && (Nd = kd.cameras[0]), Nd && (pd.setRenderCamera(Nd), pd.utilityLayerScene.activeCamera = Nd);
        const Wd = kd.onAfterRenderObservable.add((() => {
          pd.render()
        }));
        return pd.utilityLayerScene.Zm.addOnce((() => {
          kd.onAfterRenderObservable.remove(Wd)
        })), pd
      }
    };
    let fd = null;

    function nd(dd, Jd, kd, pd) {
      let Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        Wd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Pd = arguments.length > 6 ? arguments[6] : void 0,
        Zd = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        gd = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
      const {
        height: Cd,
        width: Kd
      } = cd(dd, Jd, kd);
      if (!Cd || !Kd) return void ld.c.Error("Invalid 'size' parameter !");
      const od = Jd.Wm();
      let Ld = od.activeCamera !== Jd;
      if (od.frameGraph) {
        const dd = Xd.FindMainObjectRenderer(od.frameGraph);
        dd && (Ld = dd.camera !== Jd)
      }
      Ld ? Dd(dd, Jd, kd, (dd => {
        if (Wd) {
          const Jd = new Blob([dd]);
          Qd.h.DownloadBlob(Jd), pd && pd("")
        } else pd && pd(dd)
      }), Nd, 1, dd.getCreationOptions().antialias, void 0, void 0, void 0, void 0, Pd) : dd.onEndFrameObservable.addOnce((() => {
        fd || (fd = document.createElement("canvas")), fd.width = Kd, fd.height = Cd;
        const Jd = fd.getContext("2d"),
          kd = dd.getRenderingCanvas();
        if (!Jd || !kd) return void ld.c.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
        const Ld = kd.width,
          Od = kd.height,
          ed = fd.width,
          Rd = fd.height,
          Id = ed / Ld,
          Gd = Rd / Od,
          vd = Zd ? Math.max(Id, Gd) : Math.min(Id, Gd),
          xd = Ld * vd,
          qd = Od * vd,
          Bd = (ed - xd) / 2,
          sd = (Rd - qd) / 2;
        Jd.save(), Jd.fillStyle = gd ? od.clearColor.toHexString() : "rgba(0, 0, 0, 0)", Jd.fillRect(0, 0, Kd, Cd), Jd.restore(), Jd.drawImage(kd, 0, 0, Ld, Od, Bd, sd, xd, qd), Wd ? (Qd.h.EncodeScreenshotCanvasData(fd, void 0, Nd, void 0, Pd), pd && pd("")) : Qd.h.EncodeScreenshotCanvasData(fd, pd, Nd, void 0, Pd)
      }))
    }
    async function Ud(dd, Jd, kd) {
      let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Nd = arguments.length > 4 ? arguments[4] : void 0,
        Wd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Pd = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Zd = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      return await new Promise(((gd, Cd) => {
        nd(dd, Jd, kd, (dd => {
          "undefined" !== typeof dd ? gd(dd) : Cd(new Error("Data is undefined"))
        }), pd, Zd, Nd, Wd, Pd)
      }))
    }
    async function yd(dd, Jd, kd, pd) {
      let Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        Wd = arguments.length > 5 ? arguments[5] : void 0,
        Pd = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return await new Promise((Zd => {
        nd(dd, Jd, {
          width: kd,
          height: pd
        }, (() => {
          Zd()
        }), Nd, !0, Wd, Pd)
      }))
    }

    function Dd(dd, Jd, Wd, Pd) {
      let Zd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        gd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
        Cd = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Kd = arguments.length > 7 ? arguments[7] : void 0,
        Qd = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Rd = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        Id = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
        Gd = arguments.length > 11 ? arguments[11] : void 0,
        vd = arguments.length > 12 ? arguments[12] : void 0,
        xd = arguments.length > 13 ? arguments[13] : void 0,
        qd = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
        Bd = arguments.length > 15 ? arguments[15] : void 0;
      const sd = Jd.Wm();
      if (sd.frameGraph) return void Ed(sd.frameGraph, Jd, Wd, Zd, gd, Cd, Kd, Gd, xd, !Pd).then((dd => {
        Pd && Pd(dd)
      }));
      const {
        height: ad,
        width: Md,
        finalWidth: Fd,
        finalHeight: Yd
      } = cd(dd, Jd, Wd), md = {
        width: Md,
        height: ad
      };
      if (!ad || !Md) return void ld.c.Error("Invalid 'size' parameter !");
      dd.skipFrameRender = !0;
      const bd = dd.getRenderWidth,
        Sd = dd.getRenderHeight;
      dd.getRenderWidth = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && dd._currentRenderTarget ? dd._currentRenderTarget.width : Md
      }, dd.getRenderHeight = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && dd._currentRenderTarget ? dd._currentRenderTarget.height : ad
      }, dd.onResizeObservable.hasObservers() && dd.onResizeObservable.notifyObservers(dd);
      const jd = new Nd.c("screenShot", md, sd, !1, !1, 0, !1, pd.c.BILINEAR_SAMPLINGMODE, void 0, Rd, void 0, void 0, void 0, gd);
      jd.renderList = sd.meshes.slice(), jd.samples = gd, jd.renderSprites = Qd, jd.activeCamera = Jd, jd.forceLayerMaskCheck = Id, vd?.(jd);
      const Xd = xd || Ld.DumpData,
        fd = () => {
          sd.incrementRenderId(), sd.resetCachedMaterial(), (0, ed.f)((() => jd.isReadyForRendering() && Jd.isReady(!0)), (() => {
            dd.onEndFrameObservable.addOnce((() => {
              Fd === Md && Yd === ad ? jd.readPixels(void 0, void 0, void 0, !1).then((dd => {
                Xd(Md, ad, dd, Pd, Zd, Kd, !0, void 0, Gd), jd.dispose()
              })) : (dd.isWebGPU ? kd.e(364).then((() => kd(61174))) : kd.e(365).then((() => kd(61182)))).then((async () => await (0, Od.c)("pass", jd.getInternalTexture(), sd, void 0, void 0, void 0, Fd, Yd).then((Jd => {
                dd._readTexturePixels(Jd, Fd, Yd, -1, 0, null, !0, !1, 0, 0).then((dd => {
                  Xd(Fd, Yd, dd, Pd, Zd, Kd, !0, void 0, Gd), Jd.dispose()
                }))
              }))))
            })), sd.incrementRenderId(), sd.resetCachedMaterial();
            const pd = sd.activeCamera,
              Nd = sd.activeCameras,
              Wd = Jd.outputRenderTarget,
              gd = sd.spritesEnabled;
            sd.activeCamera = Jd, sd.activeCameras = null, Jd.outputRenderTarget = jd, sd.spritesEnabled = Qd;
            const Cd = sd.meshes;
            sd.meshes = jd.renderList || sd.meshes;
            try {
              sd.render()
            } finally {
              sd.activeCamera = pd, sd.activeCameras = Nd, Jd.outputRenderTarget = Wd, sd.spritesEnabled = gd, sd.meshes = Cd, dd.getRenderWidth = bd, dd.getRenderHeight = Sd, dd.onResizeObservable.hasObservers() && dd.onResizeObservable.notifyObservers(dd), Jd.getProjectionMatrix(!0), dd.skipFrameRender = !1
            }
          }), (() => {
            dd.skipFrameRender = !1, dd.getRenderWidth = bd, dd.getRenderHeight = Sd, Bd?.()
          }), void 0, qd)
        };
      if (Cd) {
        const dd = new od("antialiasing", 1, sd.activeCamera);
        jd.addPostProcess(dd), dd.autoClear = !0, dd.onEffectCreatedObservable.addOnce((dd => {
          dd.isReady() ? fd() : dd.onCompiled = () => {
            fd()
          }
        }))
      } else fd()
    }
    async function Td(dd, Jd, kd) {
      let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        Wd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Pd = arguments.length > 6 ? arguments[6] : void 0,
        Zd = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        gd = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Cd = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
        Kd = arguments.length > 10 ? arguments[10] : void 0,
        od = arguments.length > 11 ? arguments[11] : void 0,
        ld = arguments.length > 12 ? arguments[12] : void 0;
      return await new Promise(((Qd, Ld) => {
        Dd(dd, Jd, kd, (dd => {
          "undefined" !== typeof dd ? Qd(dd) : Ld(new Error("Data is undefined"))
        }), pd, Nd, Wd, Pd, Zd, gd, Cd, Kd, od, ld)
      }))
    }
    async function Ed(dd, Jd, kd) {
      let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        Wd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Pd = arguments.length > 6 ? arguments[6] : void 0,
        Zd = arguments.length > 7 ? arguments[7] : void 0,
        gd = arguments.length > 8 ? arguments[8] : void 0,
        Cd = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        Kd = arguments.length > 10 ? arguments[10] : void 0;
      const od = dd.engine,
        ld = dd.textureManager,
        {
          height: Qd,
          width: Od,
          finalWidth: ed,
          finalHeight: Id
        } = cd(od, Jd, kd),
        Gd = {
          width: Od,
          height: Qd
        },
        vd = gd || Ld.DumpData,
        xd = dd.tasks,
        qd = xd.length,
        Bd = dd.pausedExecution,
        ad = od.getCaps().parallelShaderCompile;
      ld.setBackBufferTextures(0, 0, {
        size: Gd,
        options: {
          createMipMaps: !1,
          samples: Nd,
          types: [0],
          formats: [5],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot color"]
        },
        sizeIsPercentage: !1
      }, {
        size: Gd,
        options: {
          createMipMaps: !1,
          samples: Nd,
          types: [0],
          formats: [od.isStencilEnable ? 13 : 14],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot depth"]
        },
        sizeIsPercentage: !1
      });
      let Fd = Rd;
      if (Wd) {
        const Jd = new sd("fxaa", dd);
        Jd.sourceTexture = Fd, Fd = Jd.outputTexture, dd.addTask(Jd)
      }
      if (ed !== Od || Id !== Qd) {
        const Jd = new Md("pass", dd);
        Jd.sourceTexture = Fd, Jd.targetTexture = dd.textureManager.createRenderTargetTexture("pass_output", {
          size: {
            width: ed,
            height: Id
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
        }), Fd = Jd.outputTexture, dd.addTask(Jd)
      }
      const Yd = Xd.FindMainObjectRenderer(dd);
      let md = null;
      Yd && (md = Yd.camera, Yd.camera = Jd), od.getCaps().parallelShaderCompile = void 0, await dd.buildAsync();
      const bd = Kd ?? (ld.hasHistoryTextures ? 32 : 1);
      for (let Ld = 0; Ld < bd; ++Ld) dd.execute();
      dd.pausedExecution = !0, od.getCaps().parallelShaderCompile = ad;
      for (let Ld = qd; Ld < xd.length; ++Ld) dd.tasks[Ld].dispose();
      dd.tasks.length = qd, Yd && md && (Yd.camera = md);
      const Sd = dd.textureManager.getTextureFromHandle(Fd);
      return Sd.incrementReferences(), ld.resetBackBufferTextures(), await dd.buildAsync(), dd.pausedExecution = Bd, new Promise((dd => {
        od._readTexturePixels(Sd, ed, Id, -1, 0, null, !0, !1, 0, 0).then((async Jd => {
          Sd.dispose(), vd(ed, Id, Jd, Cd ? void 0 : Jd => dd(Jd), pd, Pd, !0, void 0, Zd), Cd && dd(null)
        }))
      }))
    }

    function cd(dd, Jd, kd) {
      let pd = 0,
        Nd = 0,
        Wd = 0,
        Pd = 0;
      if ("object" === typeof kd) {
        const Zd = kd.precision ? Math.abs(kd.precision) : 1;
        kd.width && kd.height ? (pd = kd.height * Zd, Nd = kd.width * Zd) : kd.width && !kd.height ? (Nd = kd.width * Zd, pd = Math.round(Nd / dd.getAspectRatio(Jd))) : kd.height && !kd.width ? (pd = kd.height * Zd, Nd = Math.round(pd * dd.getAspectRatio(Jd))) : (Nd = Math.round(dd.getRenderWidth() * Zd), pd = Math.round(Nd / dd.getAspectRatio(Jd))), kd.finalWidth && kd.finalHeight ? (Pd = kd.finalHeight, Wd = kd.finalWidth) : kd.finalWidth && !kd.finalHeight ? (Wd = kd.finalWidth, Pd = Math.round(Wd / dd.getAspectRatio(Jd))) : kd.finalHeight && !kd.finalWidth ? (Pd = kd.finalHeight, Wd = Math.round(Pd * dd.getAspectRatio(Jd))) : (Wd = Nd, Pd = pd)
      } else isNaN(kd) || (pd = kd, Nd = kd, Wd = kd, Pd = kd);
      return Nd && (Nd = Math.floor(Nd)), pd && (pd = Math.floor(pd)), Wd && (Wd = Math.floor(Wd)), Pd && (Pd = Math.floor(Pd)), {
        height: 0 | pd,
        width: 0 | Nd,
        finalWidth: 0 | Wd,
        finalHeight: 0 | Pd
      }
    }
    const hd = {
      CreateScreenshot: nd,
      CreateScreenshotAsync: Ud,
      CreateScreenshotWithResizeAsync: yd,
      CreateScreenshotUsingRenderTarget: Dd,
      CreateScreenshotUsingRenderTargetAsync: Td,
      CreateScreenshotForFrameGraphAsync: Ed
    };
    let rd = !1;

    function ud() {
      if (rd) return;
      rd = !0;
      Qd.h.CreateScreenshot = nd, Qd.h.CreateScreenshotAsync = Ud, Qd.h.CreateScreenshotUsingRenderTarget = Dd, Qd.h.CreateScreenshotUsingRenderTargetAsync = Td
    }
    ud()
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);