export const id = 272;
export const ids = [272, 273];
export const modules = {
  42168: (dd, Od, md) => {
    md.d(Od, {
      e: () => Qd,
      f: () => od
    });
    var Wd = md(41922),
      Fd = md(41931),
      Rd = md(38636),
      Xd = md(38741),
      Kd = md(42172),
      hd = md(42132),
      vd = md(38669);
    let Qd = (() => {
        var dd;
        let Od, md, hd = Kd.c,
          vd = [],
          Qd = [],
          td = [],
          od = [];
        return dd = class extends hd {
          constructor(dd, Od, md, Fd) {
            super(dd, md, Fd), this.groundColor = (0, Wd.k)(this, vd, new Xd.d(0, 0, 0)), this.direction = ((0, Wd.k)(this, Qd), (0, Wd.k)(this, td, void 0)), (0, Wd.k)(this, od), this.direction = Od || Rd.j.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(dd) {
            return this.direction = Rd.j.Normalize(dd.subtract(Rd.j.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(dd, Od) {
            const md = Rd.j.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", md.x, md.y, md.z, 0, Od), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), Od), this
          }
          transferToNodeMaterialEffect(dd, Od) {
            const md = Rd.j.Normalize(this.direction);
            return dd.setFloat3(Od, md.x, md.y, md.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = Rd.d.Identity()), this._worldMatrix
          }
          getTypeID() {
            return Kd.c.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(dd, Od) {
            dd["HEMILIGHT" + Od] = !0
          }
        }, (() => {
          const Rd = "function" === typeof Symbol && Symbol.metadata ? Object.create(hd[Symbol.metadata] ?? null) : void 0;
          Od = [(0, Fd.m)()], md = [(0, Fd.B)()], (0, Wd.h)(null, null, Od, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: dd => "groundColor" in dd,
              get: dd => dd.groundColor,
              set: (dd, Od) => {
                dd.groundColor = Od
              }
            },
            metadata: Rd
          }, vd, Qd), (0, Wd.h)(null, null, md, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: dd => "direction" in dd,
              get: dd => dd.direction,
              set: (dd, Od) => {
                dd.direction = Od
              }
            },
            metadata: Rd
          }, td, od), Rd && Object.defineProperty(dd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Rd
          })
        })(), dd
      })(),
      td = !1;

    function od() {
      td || (td = !0, hd.b.AddNodeConstructor("Light_Type_3", ((dd, Od) => () => new Qd(dd, Rd.j.Zero(), Od))), (0, vd.e)("BABYLON.HemisphericLight", Qd))
    }
  },
  39297: (dd, Od, md) => {
    md.d(Od, {
      e: () => Fd
    });
    var Wd = md(39306);
    class Fd {
      static GetPlanes(dd) {
        const Od = [];
        for (let md = 0; md < 6; md++) Od.push(new Wd.d(0, 0, 0, 0));
        return Fd.GetPlanesToRef(dd, Od), Od
      }
      static GetNearPlaneToRef(dd, Od) {
        const md = dd.m;
        Od.normal.x = md[3] + md[2], Od.normal.y = md[7] + md[6], Od.normal.z = md[11] + md[10], Od.d = md[15] + md[14], Od.normalize()
      }
      static GetFarPlaneToRef(dd, Od) {
        const md = dd.m;
        Od.normal.x = md[3] - md[2], Od.normal.y = md[7] - md[6], Od.normal.z = md[11] - md[10], Od.d = md[15] - md[14], Od.normalize()
      }
      static GetLeftPlaneToRef(dd, Od) {
        const md = dd.m;
        Od.normal.x = md[3] + md[0], Od.normal.y = md[7] + md[4], Od.normal.z = md[11] + md[8], Od.d = md[15] + md[12], Od.normalize()
      }
      static GetRightPlaneToRef(dd, Od) {
        const md = dd.m;
        Od.normal.x = md[3] - md[0], Od.normal.y = md[7] - md[4], Od.normal.z = md[11] - md[8], Od.d = md[15] - md[12], Od.normalize()
      }
      static GetTopPlaneToRef(dd, Od) {
        const md = dd.m;
        Od.normal.x = md[3] - md[1], Od.normal.y = md[7] - md[5], Od.normal.z = md[11] - md[9], Od.d = md[15] - md[13], Od.normalize()
      }
      static GetBottomPlaneToRef(dd, Od) {
        const md = dd.m;
        Od.normal.x = md[3] + md[1], Od.normal.y = md[7] + md[5], Od.normal.z = md[11] + md[9], Od.d = md[15] + md[13], Od.normalize()
      }
      static GetPlanesToRef(dd, Od) {
        Fd.GetNearPlaneToRef(dd, Od[0]), Fd.GetFarPlaneToRef(dd, Od[1]), Fd.GetLeftPlaneToRef(dd, Od[2]), Fd.GetRightPlaneToRef(dd, Od[3]), Fd.GetTopPlaneToRef(dd, Od[4]), Fd.GetBottomPlaneToRef(dd, Od[5])
      }
      static IsPointInFrustum(dd, Od) {
        for (let md = 0; md < 6; md++)
          if (Od[md].dotCoordinate(dd) < 0) return !1;
        return !0
      }
    }
  },
  39306: (dd, Od, md) => {
    md.d(Od, {
      d: () => Fd
    });
    var Wd = md(38636);
    class Fd {
      constructor(dd, Od, md, Fd) {
        this.normal = new Wd.j(dd, Od, md), this.d = Fd
      }
      RRd() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Fd(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let Od = 0;
        return 0 !== dd && (Od = 1 / dd), this.normal.x *= Od, this.normal.y *= Od, this.normal.z *= Od, this.d *= Od, this
      }
      transform(dd) {
        const Od = Fd._TmpMatrix;
        dd.invertToRef(Od);
        const md = Od.m,
          Wd = this.normal.x,
          Rd = this.normal.y,
          Xd = this.normal.z,
          Kd = this.d,
          hd = Wd * md[0] + Rd * md[1] + Xd * md[2] + Kd * md[3],
          vd = Wd * md[4] + Rd * md[5] + Xd * md[6] + Kd * md[7],
          Qd = Wd * md[8] + Rd * md[9] + Xd * md[10] + Kd * md[11],
          td = Wd * md[12] + Rd * md[13] + Xd * md[14] + Kd * md[15];
        return new Fd(hd, vd, Qd, td)
      }
      dotCoordinate(dd) {
        return this.normal.x * dd.x + this.normal.y * dd.y + this.normal.z * dd.z + this.d
      }
      copyFromPoints(dd, Od, md) {
        const Wd = Od.x - dd.x,
          Fd = Od.y - dd.y,
          Rd = Od.z - dd.z,
          Xd = md.x - dd.x,
          Kd = md.y - dd.y,
          hd = md.z - dd.z,
          vd = Fd * hd - Rd * Kd,
          Qd = Rd * Xd - Wd * hd,
          td = Wd * Kd - Fd * Xd,
          od = Math.sqrt(vd * vd + Qd * Qd + td * td);
        let Nd;
        return Nd = 0 !== od ? 1 / od : 0, this.normal.x = vd * Nd, this.normal.y = Qd * Nd, this.normal.z = td * Nd, this.d = -(this.normal.x * dd.x + this.normal.y * dd.y + this.normal.z * dd.z), this
      }
      isFrontFacingTo(dd, Od) {
        return Wd.j.Dot(this.normal, dd) <= Od
      }
      signedDistanceTo(dd) {
        return Wd.j.Dot(dd, this.normal) + this.d
      }
      static FromArray(dd) {
        return new Fd(dd[0], dd[1], dd[2], dd[3])
      }
      static FromPoints(dd, Od, md) {
        const Wd = new Fd(0, 0, 0, 0);
        return Wd.copyFromPoints(dd, Od, md), Wd
      }
      static FromPositionAndNormal(dd, Od) {
        const md = new Fd(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(dd, Od, md)
      }
      static FromPositionAndNormalToRef(dd, Od, md) {
        return md.normal.Bx(Od), md.normal.normalize(), md.d = -dd.dot(md.normal), md
      }
      static SignedDistanceToPlaneFromPositionAndNormal(dd, Od, md) {
        const Fd = -(Od.x * dd.x + Od.y * dd.y + Od.z * dd.z);
        return Wd.j.Dot(md, Od) + Fd
      }
    }
    Fd._TmpMatrix = Wd.d.Identity()
  },
  39642: (dd, Od, md) => {
    md.d(Od, {
      b: () => Wd
    });
    class Wd {
      constructor(dd, Od, md, Wd) {
        this.x = dd, this.y = Od, this.width = md, this.height = Wd
      }
      toGlobal(dd, Od) {
        return new Wd(this.x * dd, this.y * Od, this.width * dd, this.height * Od)
      }
      toGlobalToRef(dd, Od, md) {
        return md.x = this.x * dd, md.y = this.y * Od, md.width = this.width * dd, md.height = this.height * Od, this
      }
      clone() {
        return new Wd(this.x, this.y, this.width, this.height)
      }
    }
  },
  40260: (dd, Od, md) => {
    md.d(Od, {
      d: () => Rd
    });
    var Wd = md(40262);
    const Fd = (dd, Od, md) => dd ? dd.getClassName && "Mesh" === dd.getClassName() ? null : !dd.getClassName || "SubMesh" !== dd.getClassName() && "PhysicsBody" !== dd.getClassName() ? dd.clone ? dd.clone() : Array.isArray(dd) ? dd.slice() : md && "object" === typeof dd ? {
      ...dd
    } : null : dd.clone(Od) : null;
    class Rd {
      static DeepCopy(dd, Od, md, Rd) {
        let Xd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Kd = function(dd) {
          const Od = [];
          do {
            const md = Object.getOwnPropertyNames(dd);
            for (const dd of md) - 1 === Od.indexOf(dd) && Od.push(dd)
          } while (dd = Object.getPrototypeOf(dd));
          return Od
        }(dd);
        for (const vd of Kd) {
          if ("_" === vd[0] && (!Rd || -1 === Rd.indexOf(vd))) continue;
          if (vd.endsWith("Observable")) continue;
          if (md && -1 !== md.indexOf(vd)) continue;
          const Kd = dd[vd],
            Qd = typeof Kd;
          if ("function" !== Qd) try {
            if ("object" === Qd)
              if (Kd instanceof Uint8Array) Od[vd] = Uint8Array.from(Kd);
              else if (Kd instanceof Array) {
              if (Od[vd] = [], Kd.length > 0)
                if ("object" == typeof Kd[0])
                  for (let dd = 0; dd < Kd.length; dd++) {
                    const md = Fd(Kd[dd], Od, Xd); - 1 === Od[vd].indexOf(md) && Od[vd].push(md)
                  } else Od[vd] = Kd.slice(0)
            } else Od[vd] = Fd(Kd, Od, Xd);
            else Od[vd] = Kd
          } catch (hd) {
            Wd.c.Warn(hd.message)
          }
        }
      }
    }
  },
  39461: (dd, Od, md) => {
    function Wd() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (dd => {
        const Od = 16 * Math.random() | 0;
        return ("x" === dd ? Od : 3 & Od | 8).toString(16)
      }))
    }
    md.d(Od, {
      b: () => Wd
    })
  },
  40262: (dd, Od, md) => {
    md.d(Od, {
      c: () => Wd
    });
    class Wd {
      static _CheckLimit(dd, Od) {
        let md = Wd._LogLimitOutputs[dd];
        return md ? md.current++ : (md = {
          limit: Od,
          current: 1
        }, Wd._LogLimitOutputs[dd] = md), md.current <= md.limit
      }
      static _GenerateLimitMessage(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const md = Wd._LogLimitOutputs[dd];
        if (!md || !Wd.MessageLimitReached) return;
        const Fd = this._Levels[Od];
        md.current === md.limit && Wd[Fd.name](Wd.MessageLimitReached.replace(/%LIMIT%/g, "" + md.limit).replace(/%TYPE%/g, Fd.name ?? ""))
      }
      static _AddLogEntry(dd) {
        Wd._LogCache = dd + Wd._LogCache, Wd.OnNewCacheEntry && Wd.OnNewCacheEntry(dd)
      }
      static _FormatMessage(dd) {
        const Od = dd => dd < 10 ? "0" + dd : "" + dd,
          md = new Date;
        return "[" + Od(md.getHours()) + ":" + Od(md.getMinutes()) + ":" + Od(md.getSeconds()) + "]: " + dd
      }
      static _LogDisabled(dd, Od) {}
      static _LogEnabled() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Od = arguments.length > 1 ? arguments[1] : void 0,
          md = arguments.length > 2 ? arguments[2] : void 0;
        const Fd = Array.isArray(Od) ? Od[0] : Od;
        if (void 0 !== md && !Wd._CheckLimit(Fd, md)) return;
        const Rd = Wd._FormatMessage(Fd),
          Xd = this._Levels[dd],
          Kd = Array.isArray(Od) ? Od.slice(1) : [];
        Xd.logFunc && Xd.logFunc("BJS - " + Rd, ...Kd);
        const hd = `<div style='color:${Xd.color}'>${Rd}</div><br>`;
        Wd._AddLogEntry(hd), Wd._GenerateLimitMessage(Fd, dd)
      }
      static get LogCache() {
        return Wd._LogCache
      }
      static ClearLogCache() {
        Wd._LogCache = "", Wd._LogLimitOutputs = {}, Wd.errorsCount = 0
      }
      static set LogLevels(dd) {
        Wd.Log = Wd._LogDisabled, Wd.Warn = Wd._LogDisabled, Wd.Error = Wd._LogDisabled;
        const Od = [Wd.MessageLogLevel, Wd.WarningLogLevel, Wd.ErrorLogLevel];
        for (const md of Od)
          if ((dd & md) === md) {
            const dd = this._Levels[md];
            Wd[dd.name] = Wd._LogEnabled.bind(Wd, md)
          }
      }
    }
    Wd.NoneLogLevel = 0, Wd.MessageLogLevel = 1, Wd.WarningLogLevel = 2, Wd.ErrorLogLevel = 4, Wd.AllLogLevel = 7, Wd.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Wd._LogCache = "", Wd._LogLimitOutputs = {}, Wd._Levels = [{}, {
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
    }], Wd.errorsCount = 0, Wd.Log = Wd._LogEnabled.bind(Wd, Wd.MessageLogLevel), Wd.Warn = Wd._LogEnabled.bind(Wd, Wd.WarningLogLevel), Wd.Error = Wd._LogEnabled.bind(Wd, Wd.ErrorLogLevel)
  },
  64768: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      CreateScreenshot: () => nd,
      CreateScreenshotAsync: () => Ld,
      CreateScreenshotForFrameGraphAsync: () => jd,
      CreateScreenshotUsingRenderTarget: () => zd,
      CreateScreenshotUsingRenderTargetAsync: () => cd,
      CreateScreenshotWithResizeAsync: () => Pd,
      RegisterScreenshotTools: () => ld,
      ScreenshotTools: () => ed
    });
    var Wd = md(42412),
      Fd = md(54235),
      Rd = md(54217),
      Xd = md(41948),
      Kd = md(54221),
      hd = md(38651),
      vd = md(38636);
    class Qd extends Kd.g {
      static _GetDefines(dd) {
        if (!dd) return null;
        return dd.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
      }
      _gatherImports(dd, Od) {
        dd ? (this._webGPUReady = !0, Od.push(Promise.all([md.e(693).then((() => md(64998))), md.e(694).then((() => md(65002)))]))) : Od.push(Promise.all([md.e(695).then((() => md(65007))), md.e(696).then((() => md(65009)))]))
      }
      constructor(dd) {
        const Od = {
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: dd,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || hd.e.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          vertexShader: Qd.VertexUrl,
          fragmentShader: Qd.FragmentUrl,
          uniforms: Qd.Uniforms
        };
        super({
          ...Od,
          defines: Qd._GetDefines(Od.engine)
        }), this.texelSize = new vd.i(0, 0)
      }
      bind() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.bind(dd), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
      }
    }
    Qd.VertexUrl = "fxaa", Qd.FragmentUrl = "fxaa", Qd.Uniforms = ["texelSize"];
    class td extends Rd.c {
      getClassName() {
        return "FxaaPostProcess"
      }
      constructor(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Fd = arguments.length > 3 ? arguments[3] : void 0,
          Rd = arguments.length > 4 ? arguments[4] : void 0,
          Xd = arguments.length > 5 ? arguments[5] : void 0,
          Kd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const hd = {
          uniforms: Qd.Uniforms,
          size: "number" === typeof Od ? Od : void 0,
          camera: md,
          samplingMode: Fd || Wd.f.BILINEAR_SAMPLINGMODE,
          engine: Rd,
          reusable: Xd,
          textureType: Kd,
          ...Od
        };
        super(dd, Qd.FragmentUrl, {
          effectWrapper: "number" !== typeof Od && Od.effectWrapper ? void 0 : new Qd(dd, Rd, hd),
          ...hd
        }), this.onApplyObservable.add((dd => {
          this._effectWrapper.texelSize = this.texelSize
        }))
      }
      static _Parse(dd, Od, md, Wd) {
        return Xd.b.Parse((() => new td(dd.name, dd.options, Od, dd.renderTargetSamplingMode, md.Iq(), dd.reusable)), dd, md, Wd)
      }
    }
    var od = md(40262),
      Nd = md(42029),
      qd = md(54245),
      Hd = md(54229),
      yd = md(41831);
    const bd = 0;
    class Td {
      constructor(dd, Od, md) {
        this.name = dd, this._parentTask = Od, this._context = md, this.disabled = !1
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
    class pd extends Td {
      static IsObjectListPass(dd) {
        return void 0 !== dd.setObjectList
      }
      get objectList() {
        return this._objectList
      }
      setObjectList(dd) {
        this._objectList = dd
      }
      constructor(dd, Od, md, Wd) {
        super(dd, Od, md), this._engine = Wd
      }
      _isValid() {
        const dd = super._isValid();
        return dd || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
      }
    }
    class Yd extends Td {
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
      constructor(dd, Od, md, Wd) {
        super(dd, Od, md), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = Wd
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
            for (const Od of dd) this._dependencies.add(Od);
          else this._dependencies.add(dd)
      }
      collectDependencies(dd) {
        const Od = this._dependencies.keys();
        for (let md = Od.next(); !0 !== md.done; md = Od.next()) dd.add(md.value);
        if (void 0 !== this._renderTarget)
          if (Array.isArray(this._renderTarget))
            for (const md of this._renderTarget) void 0 !== md && dd.add(md);
          else dd.add(this._renderTarget);
        void 0 !== this._renderTargetDepth && dd.add(this._renderTargetDepth)
      }
      setOutputLayerAndFaceIndices(dd) {
        const Od = this.frameGraphRenderTarget.renderTargetWrapper;
        if (Od)
          for (const md of dd) Od.setLayerAndFaceIndex(md.targetIndex, md.layerIndex, md.faceIndex)
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
    var gd = md(38660);
    class wd {
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
      constructor(dd, Od) {
        this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new gd.c, this.onBeforeTaskExecute = new gd.c, this.onAfterTaskExecute = new gd.c, this.name = dd, this._frameGraph = Od, this._reset()
      }
      _reset() {
        for (const dd of this._passes) dd._dispose();
        for (const dd of this._passesDisabled) dd._dispose();
        this._passes.length = 0, this._passesDisabled.length = 0
      }
      _addPass(dd, Od) {
        Od ? this._passesDisabled.push(dd) : this._passes.push(dd)
      }
      _checkTask() {
        let dd, Od = null,
          md = null;
        for (const Kd of this._passes) {
          const Wd = Kd._isValid();
          if (Wd) throw new Error(`Pass "${Kd.name}" is not valid. ${Wd}`);
          if (Yd.IsRenderPass(Kd)) {
            const dd = Array.isArray(Kd.renderTarget) ? Kd.renderTarget : [Kd.renderTarget];
            Od = [];
            for (const md of dd) void 0 !== md && Od.push(this._frameGraph.textureManager.getTextureFromHandle(md));
            md = void 0 !== Kd.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(Kd.renderTargetDepth) : null
          } else pd.IsObjectListPass(Kd) && (dd = Kd.objectList)
        }
        let Wd, Fd = null,
          Rd = [],
          Xd = null;
        for (const Kd of this._passesDisabled) {
          const dd = Kd._isValid();
          if (dd) throw new Error(`Pass "${Kd.name}" is not valid. ${dd}`);
          if (Yd.IsRenderPass(Kd)) {
            const dd = Array.isArray(Kd.renderTarget) ? Kd.renderTarget : [Kd.renderTarget];
            Fd = [];
            for (const Od of dd) void 0 !== Od && Fd.push(this._frameGraph.textureManager.getTextureFromHandle(Od));
            Rd = dd, Xd = void 0 !== Kd.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(Kd.renderTargetDepth) : null
          } else pd.IsObjectListPass(Kd) && (Wd = Kd.objectList)
        }
        if (this._passesDisabled.length > 0) {
          if (!this._checkSameRenderTarget(Od, Fd)) {
            let dd = !0;
            for (const Od of Rd)
              if (void 0 !== Od && !this._frameGraph.textureManager.isHistoryTexture(Od)) {
                dd = !1;
                break
              } if (!dd) throw new Error(`The output texture of the task "${this.name}" is different when it is enabled or disabled.`)
          }
          if (md !== Xd && null !== Xd) throw new Error(`The output depth texture of the task "${this.name}" is different when it is enabled or disabled.`);
          if (dd !== Wd && null !== Wd) throw new Error(`The output object list of the task "${this.name}" is different when it is enabled or disabled.`)
        }
      }
      _execute() {
        const dd = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
        this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const Od of dd) Od._execute()
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
      _checkSameRenderTarget(dd, Od) {
        if (null === dd || null === Od) return dd === Od;
        if (dd.length !== Od.length) return !1;
        for (let md = 0; md < dd.length; md++)
          if (dd[md] !== Od[md]) return !1;
        return !0
      }
    }
    class Ed extends wd {
      get alphaMode() {
        return this.postProcess.alphaMode
      }
      set alphaMode(dd) {
        this.postProcess.alphaMode = dd
      }
      get drawWrapper() {
        return this._postProcessDrawWrapper
      }
      constructor(dd, Od, md) {
        super(dd, Od), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = md, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture = this._frameGraph.textureManager.createDanglingHandle(), this.outputDepthAttachmentTexture = this._frameGraph.textureManager.createDanglingHandle()
      }
      isReady() {
        return this.postProcess.isReady()
      }
      getClassName() {
        return "FrameGraphPostProcessTask"
      }
      record() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Od = arguments.length > 1 ? arguments[1] : void 0,
          md = arguments.length > 2 ? arguments[2] : void 0;
        if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
        const Wd = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
        if (Wd && (Wd.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, Wd), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentTexture, this.depthAttachmentTexture), Wd) {
          const dd = this._frameGraph.textureManager.getTextureAbsoluteDimensions(Wd);
          this._sourceWidth = dd.width, this._sourceHeight = dd.height
        }
        const Fd = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
        this._outputWidth = Fd.size.width, this._outputHeight = Fd.size.height;
        const Rd = this._frameGraph.addRenderPass(this.name);
        if (Rd.depthReadOnly = this.depthReadOnly, Rd.stencilReadOnly = this.stencilReadOnly, Rd.addDependencies(this.sourceTexture), Rd.setRenderTarget(this.outputTexture), Rd.setRenderTargetDepth(this.depthAttachmentTexture), Rd.setExecuteFunc((dd => {
            dd.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && dd.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), Od?.(dd), this.viewport && dd.setViewport(this.viewport), dd.applyFullScreenEffect(this._postProcessDrawWrapper, (() => {
              void 0 !== this.sourceTexture && dd.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), md?.(dd), this.postProcess.bind()
            }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), dd.restoreDefaultFramebuffer(), dd.popDebugGroup()
          })), !dd) {
          const dd = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
          dd.depthReadOnly = this.depthReadOnly, dd.stencilReadOnly = this.stencilReadOnly, dd.addDependencies(this.sourceTexture), dd.setRenderTarget(this.outputTexture), dd.setRenderTargetDepth(this.depthAttachmentTexture), dd.setExecuteFunc((dd => {
            void 0 !== this.sourceTexture && 0 === this.alphaMode && (this.viewport && dd.setViewport(this.viewport), dd.copyTexture(this.sourceTexture, void 0, void 0 !== this.viewport))
          }))
        }
        return Rd
      }
      dispose() {
        this.postProcess.dispose(), super.dispose()
      }
    }
    class Jd extends Ed {
      constructor(dd, Od, md) {
        super(dd, Od, md || new Qd(dd, Od.engine))
      }
      getClassName() {
        return "FrameGraphFXAATask"
      }
      record() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Od = arguments.length > 1 ? arguments[1] : void 0,
          md = arguments.length > 2 ? arguments[2] : void 0;
        const Wd = super.record(dd, Od, md);
        return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, Wd
      }
    }
    var Ud = md(54237);
    class xd extends Ed {
      constructor(dd, Od, md) {
        super(dd, Od, md || new Ud.e(dd, Od.engine))
      }
      getClassName() {
        return "FrameGraphPassTask"
      }
    }
    var Bd = md(42020),
      Sd = md(42099),
      sd = md(42072),
      ud = md(42168),
      Vd = md(38741);
    class Ad {
      getRenderCamera(dd) {
        if (this._renderCamera) return this._renderCamera;
        {
          let Od;
          return Od = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, dd && Od && Od.isRigCamera ? Od.rigParent : Od
        }
      }
      setRenderCamera(dd) {
        this._renderCamera = dd
      }
      _getSharedGizmoLight() {
        return this._sharedGizmoLight || (this._sharedGizmoLight = new ud.e("shared gizmo light", new vd.j(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = Vd.d.Gray()), this._sharedGizmoLight
      }
      static get DefaultUtilityLayer() {
        return null == Ad._DefaultUtilityLayer ? Ad._CreateDefaultUtilityLayerFromScene(hd.e.LastCreatedScene) : Ad._DefaultUtilityLayer
      }
      static _CreateDefaultUtilityLayerFromScene(dd) {
        return Ad._DefaultUtilityLayer = new Ad(dd), Ad._DefaultUtilityLayer.originalScene.cV.addOnce((() => {
          Ad._DefaultUtilityLayer = null
        })), Ad._DefaultUtilityLayer
      }
      static get DefaultKeepDepthUtilityLayer() {
        return null == Ad._DefaultKeepDepthUtilityLayer ? Ad._CreateDefaultKeepUtilityLayerFromScene(hd.e.LastCreatedScene) : Ad._DefaultKeepDepthUtilityLayer
      }
      static _CreateDefaultKeepUtilityLayerFromScene(dd) {
        return Ad._DefaultKeepDepthUtilityLayer = new Ad(dd), Ad._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, Ad._DefaultKeepDepthUtilityLayer.originalScene.cV.addOnce((() => {
          Ad._DefaultKeepDepthUtilityLayer = null
        })), Ad._DefaultKeepDepthUtilityLayer
      }
      constructor(dd) {
        let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.originalScene = dd, this.handleEvents = Od, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.processAllEvents = !1, this.pickingEnabled = !0, this.onPointerOutObservable = new gd.c, this.utilityLayerScene = new Bd.c(dd.Iq(), {
          virtual: !0,
          useFloatingOrigin: dd.floatingOriginMode
        }), this.utilityLayerScene.useRightHandedSystem = dd.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), Od && (this._originalPointerObserver = dd.onPrePointerObservable.add((Od => {
          if (!this.utilityLayerScene.activeCamera) return;
          if (!this.pickingEnabled) return;
          if (!this.processAllEvents && Od.type !== Sd.b.POINTERMOVE && Od.type !== Sd.b.POINTERUP && Od.type !== Sd.b.POINTERDOWN && Od.type !== Sd.b.POINTERDOUBLETAP) return;
          this.utilityLayerScene.pointerX = dd.pointerX, this.utilityLayerScene.pointerY = dd.pointerY;
          const md = Od.event;
          if (dd.isPointerCaptured(md.pointerId)) return void(this._pointerCaptures[md.pointerId] = !1);
          const Wd = md => {
              let Wd;
              if (Od.nearInteractionPickingInfo) Wd = Od.nearInteractionPickingInfo.pickedMesh.zV() == md ? Od.nearInteractionPickingInfo : new sd.b;
              else if (md !== this.utilityLayerScene && Od.originalPickingInfo) Wd = Od.originalPickingInfo;
              else {
                let Fd = null;
                this._renderCamera && (Fd = md._activeCamera, md._activeCamera = this._renderCamera, Od.ray = null), Wd = Od.ray ? md.pickWithRay(Od.ray) : md.xN(dd.pointerX, dd.pointerY), Fd && (md._activeCamera = Fd)
              }
              return Wd
            },
            Fd = Wd(this.utilityLayerScene);
          if (!Od.ray && Fd && (Od.ray = Fd.ray), Od.originalPickingInfo?.aimTransform && Fd && (Fd.aimTransform = Od.originalPickingInfo.aimTransform, Fd.gripTransform = Od.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(Od), this.onlyCheckPointerDownEvents && Od.type != Sd.b.POINTERDOWN) return Od.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new Sd.i(Od.type, Od.event, Fd), Od.type), void(Od.type === Sd.b.POINTERUP && this._pointerCaptures[md.pointerId] && (this._pointerCaptures[md.pointerId] = !1));
          if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) Fd && Fd.hit && (Od.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new Sd.i(Od.type, Od.event, Fd), Od.type), Od.skipOnPointerObservable = !0);
          else {
            const md = Wd(dd),
              Rd = Od.event;
            md && Fd && (0 === Fd.distance && md.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(md.pickedMesh) ? (this._notifyObservers(Od, md, Rd), Od.skipOnPointerObservable = !0) : Od.type === Sd.b.POINTERDOWN ? (this._pointerCaptures[Rd.pointerId] = !0, this._notifyObservers(Od, md, Rd)) : Od.type !== Sd.b.POINTERMOVE && Od.type !== Sd.b.POINTERUP || (this._lastPointerEvents[Rd.pointerId] && (this.onPointerOutObservable.notifyObservers(Rd.pointerId), delete this._lastPointerEvents[Rd.pointerId]), this._notifyObservers(Od, md, Rd)) : !this._pointerCaptures[Rd.pointerId] && (Fd.distance < md.distance || 0 === md.distance) ? (this._notifyObservers(Od, Fd, Rd), Od.skipOnPointerObservable || (Od.skipOnPointerObservable = Fd.distance > 0)) : !this._pointerCaptures[Rd.pointerId] && Fd.distance >= md.distance && (this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(md.pickedMesh) ? (this._notifyObservers(Od, md, Rd), Od.skipOnPointerObservable = !0) : (Od.type !== Sd.b.POINTERMOVE && Od.type !== Sd.b.POINTERUP || this._lastPointerEvents[Rd.pointerId] && (this.onPointerOutObservable.notifyObservers(Rd.pointerId), delete this._lastPointerEvents[Rd.pointerId]), this._notifyObservers(Od, Fd, Rd))), Od.type === Sd.b.POINTERUP && this._pointerCaptures[Rd.pointerId] && (this._pointerCaptures[Rd.pointerId] = !1))
          }
        })), this._originalPointerObserver && dd.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, md || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((dd => {
          this.shouldRender && dd == this.getRenderCamera() && this.render()
        }))), this._sceneDisposeObserver = this.originalScene.cV.add((() => {
          this.dispose()
        })), this._updateCamera()
      }
      _notifyObservers(dd, Od, md) {
        dd.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new Sd.i(dd.type, dd.event, Od), dd.type), this._lastPointerEvents[md.pointerId] = !0)
      }
      render() {
        if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
          const dd = this.utilityLayerScene.activeCamera.zV(),
            Od = this.utilityLayerScene.activeCamera;
          Od._scene = this.utilityLayerScene, Od.leftCamera && (Od.leftCamera._scene = this.utilityLayerScene), Od.rightCamera && (Od.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), Od._scene = dd, Od.leftCamera && (Od.leftCamera._scene = dd), Od.rightCamera && (Od.rightCamera._scene = dd)
        }
      }
      dispose() {
        this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.cV.remove(this._sceneDisposeObserver), this._originalPointerObserver && this.originalScene.onPrePointerObservable.remove(this._originalPointerObserver), this.utilityLayerScene.dispose()
      }
      _updateCamera() {
        this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
      }
    }
    Ad._DefaultUtilityLayer = null, Ad._DefaultKeepDepthUtilityLayer = null;
    const rd = {
      FindMainCamera: function(dd) {
        return dd.findMainCamera()
      },
      FindMainObjectRenderer: function(dd) {
        return dd.findMainObjectRenderer()
      },
      CreateUtilityLayerRenderer: function(dd) {
        let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const md = dd.MH,
          Wd = new Ad(md, Od, !0);
        Wd.utilityLayerScene.activeCamera = md.activeCamera;
        let Fd = rd.FindMainCamera(md.frameGraph);
        !Fd && md.cameras.length > 0 && (Fd = md.cameras[0]), Fd && (Wd.setRenderCamera(Fd), Wd.utilityLayerScene.activeCamera = Fd);
        const Rd = md.onAfterRenderObservable.add((() => {
          Wd.render()
        }));
        return Wd.utilityLayerScene.cV.addOnce((() => {
          md.onAfterRenderObservable.remove(Rd)
        })), Wd
      }
    };
    let Gd = null;

    function nd(dd, Od, md, Wd) {
      let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        Rd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Xd = arguments.length > 6 ? arguments[6] : void 0,
        Kd = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        hd = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
      const {
        height: vd,
        width: Qd
      } = Dd(dd, Od, md);
      if (!vd || !Qd) return void od.c.Error("Invalid 'size' parameter !");
      const td = Od.zV();
      let qd = td.activeCamera !== Od;
      if (td.frameGraph) {
        const dd = rd.FindMainObjectRenderer(td.frameGraph);
        dd && (qd = dd.camera !== Od)
      }
      qd ? zd(dd, Od, md, (dd => {
        if (Rd) {
          const Od = new Blob([dd]);
          Nd.g.DownloadBlob(Od), Wd && Wd("")
        } else Wd && Wd(dd)
      }), Fd, 1, dd.getCreationOptions().antialias, void 0, void 0, void 0, void 0, Xd) : dd.onEndFrameObservable.addOnce((() => {
        Gd || (Gd = document.createElement("canvas")), Gd.width = Qd, Gd.height = vd;
        const Od = Gd.getContext("2d"),
          md = dd.getRenderingCanvas();
        if (!Od || !md) return void od.c.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
        const qd = md.width,
          Hd = md.height,
          yd = Gd.width,
          bd = Gd.height,
          Td = yd / qd,
          pd = bd / Hd,
          Yd = Kd ? Math.max(Td, pd) : Math.min(Td, pd),
          gd = qd * Yd,
          wd = Hd * Yd,
          Ed = (yd - gd) / 2,
          Jd = (bd - wd) / 2;
        Od.save(), Od.fillStyle = hd ? td.clearColor.toHexString() : "rgba(0, 0, 0, 0)", Od.fillRect(0, 0, Qd, vd), Od.restore(), Od.drawImage(md, 0, 0, qd, Hd, Ed, Jd, gd, wd), Rd ? (Nd.g.EncodeScreenshotCanvasData(Gd, void 0, Fd, void 0, Xd), Wd && Wd("")) : Nd.g.EncodeScreenshotCanvasData(Gd, Wd, Fd, void 0, Xd)
      }))
    }
    async function Ld(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Fd = arguments.length > 4 ? arguments[4] : void 0,
        Rd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Xd = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Kd = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      return await new Promise(((hd, vd) => {
        nd(dd, Od, md, (dd => {
          "undefined" !== typeof dd ? hd(dd) : vd(new Error("Data is undefined"))
        }), Wd, Kd, Fd, Rd, Xd)
      }))
    }
    async function Pd(dd, Od, md, Wd) {
      let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        Rd = arguments.length > 5 ? arguments[5] : void 0,
        Xd = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return await new Promise((Kd => {
        nd(dd, Od, {
          width: md,
          height: Wd
        }, (() => {
          Kd()
        }), Fd, !0, Rd, Xd)
      }))
    }

    function zd(dd, Od, Rd, Xd) {
      let Kd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        hd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
        vd = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Qd = arguments.length > 7 ? arguments[7] : void 0,
        Nd = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        bd = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        Td = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
        pd = arguments.length > 11 ? arguments[11] : void 0,
        Yd = arguments.length > 12 ? arguments[12] : void 0,
        gd = arguments.length > 13 ? arguments[13] : void 0,
        wd = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
        Ed = arguments.length > 15 ? arguments[15] : void 0;
      const Jd = Od.zV();
      if (Jd.frameGraph) return void jd(Jd.frameGraph, Od, Rd, Kd, hd, vd, Qd, pd, gd, !Xd).then((dd => {
        Xd && Xd(dd)
      }));
      const {
        height: Ud,
        width: xd,
        finalWidth: Bd,
        finalHeight: Sd
      } = Dd(dd, Od, Rd), sd = {
        width: xd,
        height: Ud
      };
      if (!Ud || !xd) return void od.c.Error("Invalid 'size' parameter !");
      dd.skipFrameRender = !0;
      const ud = dd.getRenderWidth,
        Vd = dd.getRenderHeight;
      dd.getRenderWidth = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && dd._currentRenderTarget ? dd._currentRenderTarget.width : xd
      }, dd.getRenderHeight = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && dd._currentRenderTarget ? dd._currentRenderTarget.height : Ud
      }, dd.onResizeObservable.hasObservers() && dd.onResizeObservable.notifyObservers(dd);
      const Ad = new Fd.b("screenShot", sd, Jd, !1, !1, 0, !1, Wd.f.BILINEAR_SAMPLINGMODE, void 0, bd, void 0, void 0, void 0, hd);
      Ad.renderList = Jd.meshes.slice(), Ad.samples = hd, Ad.renderSprites = Nd, Ad.activeCamera = Od, Ad.forceLayerMaskCheck = Td, Yd?.(Ad);
      const rd = gd || qd.DumpData,
        Gd = () => {
          Jd.incrementRenderId(), Jd.resetCachedMaterial(), (0, yd.g)((() => Ad.isReadyForRendering() && Od.isReady(!0)), (() => {
            dd.onEndFrameObservable.addOnce((() => {
              Bd === xd && Sd === Ud ? Ad.readPixels(void 0, void 0, void 0, !1).then((dd => {
                rd(xd, Ud, dd, Xd, Kd, Qd, !0, void 0, pd), Ad.dispose()
              })) : (dd.isWebGPU ? md.e(689).then((() => md(64939))) : md.e(690).then((() => md(64946)))).then((async () => await (0, Hd.e)("pass", Ad.getInternalTexture(), Jd, void 0, void 0, void 0, Bd, Sd).then((Od => {
                dd._readTexturePixels(Od, Bd, Sd, -1, 0, null, !0, !1, 0, 0).then((dd => {
                  rd(Bd, Sd, dd, Xd, Kd, Qd, !0, void 0, pd), Od.dispose()
                }))
              }))))
            })), Jd.incrementRenderId(), Jd.resetCachedMaterial();
            const Wd = Jd.activeCamera,
              Fd = Jd.activeCameras,
              Rd = Od.outputRenderTarget,
              hd = Jd.spritesEnabled;
            Jd.activeCamera = Od, Jd.activeCameras = null, Od.outputRenderTarget = Ad, Jd.spritesEnabled = Nd;
            const vd = Jd.meshes;
            Jd.meshes = Ad.renderList || Jd.meshes;
            try {
              Jd.render()
            } finally {
              Jd.activeCamera = Wd, Jd.activeCameras = Fd, Od.outputRenderTarget = Rd, Jd.spritesEnabled = hd, Jd.meshes = vd, dd.getRenderWidth = ud, dd.getRenderHeight = Vd, dd.onResizeObservable.hasObservers() && dd.onResizeObservable.notifyObservers(dd), Od.getProjectionMatrix(!0), dd.skipFrameRender = !1
            }
          }), (() => {
            dd.skipFrameRender = !1, dd.getRenderWidth = ud, dd.getRenderHeight = Vd, Ed?.()
          }), void 0, wd)
        };
      if (vd) {
        const dd = new td("antialiasing", 1, Jd.activeCamera);
        Ad.addPostProcess(dd), dd.autoClear = !0, dd.onEffectCreatedObservable.addOnce((dd => {
          dd.isReady() ? Gd() : dd.onCompiled = () => {
            Gd()
          }
        }))
      } else Gd()
    }
    async function cd(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        Rd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Xd = arguments.length > 6 ? arguments[6] : void 0,
        Kd = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        hd = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        vd = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
        Qd = arguments.length > 10 ? arguments[10] : void 0,
        td = arguments.length > 11 ? arguments[11] : void 0,
        od = arguments.length > 12 ? arguments[12] : void 0;
      return await new Promise(((Nd, qd) => {
        zd(dd, Od, md, (dd => {
          "undefined" !== typeof dd ? Nd(dd) : qd(new Error("Data is undefined"))
        }), Wd, Fd, Rd, Xd, Kd, hd, vd, Qd, td, od)
      }))
    }
    async function jd(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        Rd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Xd = arguments.length > 6 ? arguments[6] : void 0,
        Kd = arguments.length > 7 ? arguments[7] : void 0,
        hd = arguments.length > 8 ? arguments[8] : void 0,
        vd = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        Qd = arguments.length > 10 ? arguments[10] : void 0;
      const td = dd.engine,
        od = dd.textureManager,
        {
          height: Nd,
          width: Hd,
          finalWidth: yd,
          finalHeight: Td
        } = Dd(td, Od, md),
        pd = {
          width: Hd,
          height: Nd
        },
        Yd = hd || qd.DumpData,
        gd = dd.tasks,
        wd = gd.length,
        Ed = dd.pausedExecution,
        Ud = td.getCaps().parallelShaderCompile;
      od.setBackBufferTextures(0, 0, {
        size: pd,
        options: {
          createMipMaps: !1,
          samples: Fd,
          types: [0],
          formats: [5],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot color"]
        },
        sizeIsPercentage: !1
      }, {
        size: pd,
        options: {
          createMipMaps: !1,
          samples: Fd,
          types: [0],
          formats: [td.isStencilEnable ? 13 : 14],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot depth"]
        },
        sizeIsPercentage: !1
      });
      let Bd = bd;
      if (Rd) {
        const Od = new Jd("fxaa", dd);
        Od.sourceTexture = Bd, Bd = Od.outputTexture, dd.addTask(Od)
      }
      if (yd !== Hd || Td !== Nd) {
        const Od = new xd("pass", dd);
        Od.sourceTexture = Bd, Od.targetTexture = dd.textureManager.createRenderTargetTexture("pass_output", {
          size: {
            width: yd,
            height: Td
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
        }), Bd = Od.outputTexture, dd.addTask(Od)
      }
      const Sd = rd.FindMainObjectRenderer(dd);
      let sd = null;
      Sd && (sd = Sd.camera, Sd.camera = Od), td.getCaps().parallelShaderCompile = void 0, await dd.buildAsync();
      const ud = Qd ?? (od.hasHistoryTextures ? 32 : 1);
      for (let qd = 0; qd < ud; ++qd) dd.execute();
      dd.pausedExecution = !0, td.getCaps().parallelShaderCompile = Ud;
      for (let qd = wd; qd < gd.length; ++qd) dd.tasks[qd].dispose();
      dd.tasks.length = wd, Sd && sd && (Sd.camera = sd);
      const Vd = dd.textureManager.getTextureFromHandle(Bd);
      return Vd.incrementReferences(), od.resetBackBufferTextures(), await dd.buildAsync(), dd.pausedExecution = Ed, new Promise((dd => {
        td._readTexturePixels(Vd, yd, Td, -1, 0, null, !0, !1, 0, 0).then((async Od => {
          Vd.dispose(), Yd(yd, Td, Od, vd ? void 0 : Od => dd(Od), Wd, Xd, !0, void 0, Kd), vd && dd(null)
        }))
      }))
    }

    function Dd(dd, Od, md) {
      let Wd = 0,
        Fd = 0,
        Rd = 0,
        Xd = 0;
      if ("object" === typeof md) {
        const Kd = md.precision ? Math.abs(md.precision) : 1;
        md.width && md.height ? (Wd = md.height * Kd, Fd = md.width * Kd) : md.width && !md.height ? (Fd = md.width * Kd, Wd = Math.round(Fd / dd.getAspectRatio(Od))) : md.height && !md.width ? (Wd = md.height * Kd, Fd = Math.round(Wd * dd.getAspectRatio(Od))) : (Fd = Math.round(dd.getRenderWidth() * Kd), Wd = Math.round(Fd / dd.getAspectRatio(Od))), md.finalWidth && md.finalHeight ? (Xd = md.finalHeight, Rd = md.finalWidth) : md.finalWidth && !md.finalHeight ? (Rd = md.finalWidth, Xd = Math.round(Rd / dd.getAspectRatio(Od))) : md.finalHeight && !md.finalWidth ? (Xd = md.finalHeight, Rd = Math.round(Xd * dd.getAspectRatio(Od))) : (Rd = Fd, Xd = Wd)
      } else isNaN(md) || (Wd = md, Fd = md, Rd = md, Xd = md);
      return Fd && (Fd = Math.floor(Fd)), Wd && (Wd = Math.floor(Wd)), Rd && (Rd = Math.floor(Rd)), Xd && (Xd = Math.floor(Xd)), {
        height: 0 | Wd,
        width: 0 | Fd,
        finalWidth: 0 | Rd,
        finalHeight: 0 | Xd
      }
    }
    const ed = {
      CreateScreenshot: nd,
      CreateScreenshotAsync: Ld,
      CreateScreenshotWithResizeAsync: Pd,
      CreateScreenshotUsingRenderTarget: zd,
      CreateScreenshotUsingRenderTargetAsync: cd,
      CreateScreenshotForFrameGraphAsync: jd
    };
    let Id = !1;

    function ld() {
      if (Id) return;
      Id = !0;
      Nd.g.CreateScreenshot = nd, Nd.g.CreateScreenshotAsync = Ld, Nd.g.CreateScreenshotUsingRenderTarget = zd, Nd.g.CreateScreenshotUsingRenderTargetAsync = cd
    }
    ld()
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);