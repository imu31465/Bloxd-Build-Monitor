export const id = 243;
export const ids = [243, 244];
export const modules = {
  40438: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Xt,
      f: () => lt
    });
    var Ot = Vt(40211),
      qt = Vt(40213),
      Dt = Vt(37336),
      mt = Vt(37513),
      dt = Vt(40445),
      jt = Vt(40415),
      Ht = Vt(37390);
    let Xt = (() => {
        var tt;
        let et, Vt, jt = dt.e,
          Ht = [],
          Xt = [],
          Qt = [],
          lt = [];
        return tt = class extends jt {
          constructor(tt, et, Vt, qt) {
            super(tt, Vt, qt), this.groundColor = (0, Ot.m)(this, Ht, new mt.b(0, 0, 0)), this.direction = ((0, Ot.m)(this, Xt), (0, Ot.m)(this, Qt, void 0)), (0, Ot.m)(this, lt), this.direction = et || Dt.n.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(tt) {
            return this.direction = Dt.n.Normalize(tt.subtract(Dt.n.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(tt, et) {
            const Vt = Dt.n.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", Vt.x, Vt.y, Vt.z, 0, et), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), et), this
          }
          transferToNodeMaterialEffect(tt, et) {
            const Vt = Dt.n.Normalize(this.direction);
            return tt.setFloat3(et, Vt.x, Vt.y, Vt.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = Dt.c.Identity()), this._worldMatrix
          }
          getTypeID() {
            return dt.e.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(tt, et) {
            tt["HEMILIGHT" + et] = !0
          }
        }, (() => {
          const Dt = "function" === typeof Symbol && Symbol.metadata ? Object.create(jt[Symbol.metadata] ?? null) : void 0;
          et = [(0, qt.t)()], Vt = [(0, qt.M)()], (0, Ot.l)(null, null, et, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: tt => "groundColor" in tt,
              get: tt => tt.groundColor,
              set: (tt, et) => {
                tt.groundColor = et
              }
            },
            metadata: Dt
          }, Ht, Xt), (0, Ot.l)(null, null, Vt, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: tt => "direction" in tt,
              get: tt => tt.direction,
              set: (tt, et) => {
                tt.direction = et
              }
            },
            metadata: Dt
          }, Qt, lt), Dt && Object.defineProperty(tt, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Dt
          })
        })(), tt
      })(),
      Qt = !1;

    function lt() {
      Qt || (Qt = !0, jt.d.AddNodeConstructor("Light_Type_3", ((tt, et) => () => new Xt(tt, Dt.n.Zero(), et))), (0, Ht.i)("BABYLON.HemisphericLight", Xt))
    }
  },
  38009: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => qt
    });
    var Ot = Vt(38016);
    class qt {
      static GetPlanes(tt) {
        const et = [];
        for (let Vt = 0; Vt < 6; Vt++) et.push(new Ot.b(0, 0, 0, 0));
        return qt.GetPlanesToRef(tt, et), et
      }
      static GetNearPlaneToRef(tt, et) {
        const Vt = tt.m;
        et.normal.x = Vt[3] + Vt[2], et.normal.y = Vt[7] + Vt[6], et.normal.z = Vt[11] + Vt[10], et.d = Vt[15] + Vt[14], et.normalize()
      }
      static GetFarPlaneToRef(tt, et) {
        const Vt = tt.m;
        et.normal.x = Vt[3] - Vt[2], et.normal.y = Vt[7] - Vt[6], et.normal.z = Vt[11] - Vt[10], et.d = Vt[15] - Vt[14], et.normalize()
      }
      static GetLeftPlaneToRef(tt, et) {
        const Vt = tt.m;
        et.normal.x = Vt[3] + Vt[0], et.normal.y = Vt[7] + Vt[4], et.normal.z = Vt[11] + Vt[8], et.d = Vt[15] + Vt[12], et.normalize()
      }
      static GetRightPlaneToRef(tt, et) {
        const Vt = tt.m;
        et.normal.x = Vt[3] - Vt[0], et.normal.y = Vt[7] - Vt[4], et.normal.z = Vt[11] - Vt[8], et.d = Vt[15] - Vt[12], et.normalize()
      }
      static GetTopPlaneToRef(tt, et) {
        const Vt = tt.m;
        et.normal.x = Vt[3] - Vt[1], et.normal.y = Vt[7] - Vt[5], et.normal.z = Vt[11] - Vt[9], et.d = Vt[15] - Vt[13], et.normalize()
      }
      static GetBottomPlaneToRef(tt, et) {
        const Vt = tt.m;
        et.normal.x = Vt[3] + Vt[1], et.normal.y = Vt[7] + Vt[5], et.normal.z = Vt[11] + Vt[9], et.d = Vt[15] + Vt[13], et.normalize()
      }
      static GetPlanesToRef(tt, et) {
        qt.GetNearPlaneToRef(tt, et[0]), qt.GetFarPlaneToRef(tt, et[1]), qt.GetLeftPlaneToRef(tt, et[2]), qt.GetRightPlaneToRef(tt, et[3]), qt.GetTopPlaneToRef(tt, et[4]), qt.GetBottomPlaneToRef(tt, et[5])
      }
      static IsPointInFrustum(tt, et) {
        for (let Vt = 0; Vt < 6; Vt++)
          if (et[Vt].dotCoordinate(tt) < 0) return !1;
        return !0
      }
    }
  },
  38016: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => qt
    });
    var Ot = Vt(37336);
    class qt {
      constructor(tt, et, Vt, qt) {
        this.normal = new Ot.n(tt, et, Vt), this.d = qt
      }
      GOt() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new qt(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let tt = this.normal.getHashCode();
        return tt = 397 * tt ^ this.d, tt
      }
      normalize() {
        const tt = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let et = 0;
        return 0 !== tt && (et = 1 / tt), this.normal.x *= et, this.normal.y *= et, this.normal.z *= et, this.d *= et, this
      }
      transform(tt) {
        const et = qt._TmpMatrix;
        tt.invertToRef(et);
        const Vt = et.m,
          Ot = this.normal.x,
          Dt = this.normal.y,
          mt = this.normal.z,
          dt = this.d,
          jt = Ot * Vt[0] + Dt * Vt[1] + mt * Vt[2] + dt * Vt[3],
          Ht = Ot * Vt[4] + Dt * Vt[5] + mt * Vt[6] + dt * Vt[7],
          Xt = Ot * Vt[8] + Dt * Vt[9] + mt * Vt[10] + dt * Vt[11],
          Qt = Ot * Vt[12] + Dt * Vt[13] + mt * Vt[14] + dt * Vt[15];
        return new qt(jt, Ht, Xt, Qt)
      }
      dotCoordinate(tt) {
        return this.normal.x * tt.x + this.normal.y * tt.y + this.normal.z * tt.z + this.d
      }
      copyFromPoints(tt, et, Vt) {
        const Ot = et.x - tt.x,
          qt = et.y - tt.y,
          Dt = et.z - tt.z,
          mt = Vt.x - tt.x,
          dt = Vt.y - tt.y,
          jt = Vt.z - tt.z,
          Ht = qt * jt - Dt * dt,
          Xt = Dt * mt - Ot * jt,
          Qt = Ot * dt - qt * mt,
          lt = Math.sqrt(Ht * Ht + Xt * Xt + Qt * Qt);
        let Et;
        return Et = 0 !== lt ? 1 / lt : 0, this.normal.x = Ht * Et, this.normal.y = Xt * Et, this.normal.z = Qt * Et, this.d = -(this.normal.x * tt.x + this.normal.y * tt.y + this.normal.z * tt.z), this
      }
      isFrontFacingTo(tt, et) {
        return Ot.n.Dot(this.normal, tt) <= et
      }
      signedDistanceTo(tt) {
        return Ot.n.Dot(tt, this.normal) + this.d
      }
      static FromArray(tt) {
        return new qt(tt[0], tt[1], tt[2], tt[3])
      }
      static FromPoints(tt, et, Vt) {
        const Ot = new qt(0, 0, 0, 0);
        return Ot.copyFromPoints(tt, et, Vt), Ot
      }
      static FromPositionAndNormal(tt, et) {
        const Vt = new qt(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(tt, et, Vt)
      }
      static FromPositionAndNormalToRef(tt, et, Vt) {
        return Vt.normal.rK(et), Vt.normal.normalize(), Vt.d = -tt.dot(Vt.normal), Vt
      }
      static SignedDistanceToPlaneFromPositionAndNormal(tt, et, Vt) {
        const qt = -(et.x * tt.x + et.y * tt.y + et.z * tt.z);
        return Ot.n.Dot(Vt, et) + qt
      }
    }
    qt._TmpMatrix = Ot.c.Identity()
  },
  38340: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Ot
    });
    class Ot {
      constructor(tt, et, Vt, Ot) {
        this.x = tt, this.y = et, this.width = Vt, this.height = Ot
      }
      toGlobal(tt, et) {
        return new Ot(this.x * tt, this.y * et, this.width * tt, this.height * et)
      }
      toGlobalToRef(tt, et, Vt) {
        return Vt.x = this.x * tt, Vt.y = this.y * et, Vt.width = this.width * tt, Vt.height = this.height * et, this
      }
      clone() {
        return new Ot(this.x, this.y, this.width, this.height)
      }
    }
  },
  38897: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Dt
    });
    var Ot = Vt(38899);
    const qt = (tt, et, Vt) => tt ? tt.getClassName && "Mesh" === tt.getClassName() ? null : !tt.getClassName || "SubMesh" !== tt.getClassName() && "PhysicsBody" !== tt.getClassName() ? tt.clone ? tt.clone() : Array.isArray(tt) ? tt.slice() : Vt && "object" === typeof tt ? {
      ...tt
    } : null : tt.clone(et) : null;
    class Dt {
      static DeepCopy(tt, et, Vt, Dt) {
        let mt = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const dt = function(tt) {
          const et = [];
          do {
            const Vt = Object.getOwnPropertyNames(tt);
            for (const tt of Vt) - 1 === et.indexOf(tt) && et.push(tt)
          } while (tt = Object.getPrototypeOf(tt));
          return et
        }(tt);
        for (const Ht of dt) {
          if ("_" === Ht[0] && (!Dt || -1 === Dt.indexOf(Ht))) continue;
          if (Ht.endsWith("Observable")) continue;
          if (Vt && -1 !== Vt.indexOf(Ht)) continue;
          const dt = tt[Ht],
            Xt = typeof dt;
          if ("function" !== Xt) try {
            if ("object" === Xt)
              if (dt instanceof Uint8Array) et[Ht] = Uint8Array.from(dt);
              else if (dt instanceof Array) {
              if (et[Ht] = [], dt.length > 0)
                if ("object" == typeof dt[0])
                  for (let tt = 0; tt < dt.length; tt++) {
                    const Vt = qt(dt[tt], et, mt); - 1 === et[Ht].indexOf(Vt) && et[Ht].push(Vt)
                  } else et[Ht] = dt.slice(0)
            } else et[Ht] = qt(dt, et, mt);
            else et[Ht] = dt
          } catch (jt) {
            Ot.d.Warn(jt.message)
          }
        }
      }
    }
  },
  38159: (tt, et, Vt) => {
    function Ot() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (tt => {
        const et = 16 * Math.random() | 0;
        return ("x" === tt ? et : 3 & et | 8).toString(16)
      }))
    }
    Vt.d(et, {
      b: () => Ot
    })
  },
  38899: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Ot
    });
    class Ot {
      static _CheckLimit(tt, et) {
        let Vt = Ot._LogLimitOutputs[tt];
        return Vt ? Vt.current++ : (Vt = {
          limit: et,
          current: 1
        }, Ot._LogLimitOutputs[tt] = Vt), Vt.current <= Vt.limit
      }
      static _GenerateLimitMessage(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const Vt = Ot._LogLimitOutputs[tt];
        if (!Vt || !Ot.MessageLimitReached) return;
        const qt = this._Levels[et];
        Vt.current === Vt.limit && Ot[qt.name](Ot.MessageLimitReached.replace(/%LIMIT%/g, "" + Vt.limit).replace(/%TYPE%/g, qt.name ?? ""))
      }
      static _AddLogEntry(tt) {
        Ot._LogCache = tt + Ot._LogCache, Ot.OnNewCacheEntry && Ot.OnNewCacheEntry(tt)
      }
      static _FormatMessage(tt) {
        const et = tt => tt < 10 ? "0" + tt : "" + tt,
          Vt = new Date;
        return "[" + et(Vt.getHours()) + ":" + et(Vt.getMinutes()) + ":" + et(Vt.getSeconds()) + "]: " + tt
      }
      static _LogDisabled(tt, et) {}
      static _LogEnabled() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          et = arguments.length > 1 ? arguments[1] : void 0,
          Vt = arguments.length > 2 ? arguments[2] : void 0;
        const qt = Array.isArray(et) ? et[0] : et;
        if (void 0 !== Vt && !Ot._CheckLimit(qt, Vt)) return;
        const Dt = Ot._FormatMessage(qt),
          mt = this._Levels[tt],
          dt = Array.isArray(et) ? et.slice(1) : [];
        mt.logFunc && mt.logFunc("BJS - " + Dt, ...dt);
        const jt = `<div style='color:${mt.color}'>${Dt}</div><br>`;
        Ot._AddLogEntry(jt), Ot._GenerateLimitMessage(qt, tt)
      }
      static get LogCache() {
        return Ot._LogCache
      }
      static ClearLogCache() {
        Ot._LogCache = "", Ot._LogLimitOutputs = {}, Ot.errorsCount = 0
      }
      static set LogLevels(tt) {
        Ot.Log = Ot._LogDisabled, Ot.Warn = Ot._LogDisabled, Ot.Error = Ot._LogDisabled;
        const et = [Ot.MessageLogLevel, Ot.WarningLogLevel, Ot.ErrorLogLevel];
        for (const Vt of et)
          if ((tt & Vt) === Vt) {
            const tt = this._Levels[Vt];
            Ot[tt.name] = Ot._LogEnabled.bind(Ot, Vt)
          }
      }
    }
    Ot.NoneLogLevel = 0, Ot.MessageLogLevel = 1, Ot.WarningLogLevel = 2, Ot.ErrorLogLevel = 4, Ot.AllLogLevel = 7, Ot.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Ot._LogCache = "", Ot._LogLimitOutputs = {}, Ot._Levels = [{}, {
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
    }], Ot.errorsCount = 0, Ot.Log = Ot._LogEnabled.bind(Ot, Ot.MessageLogLevel), Ot.Warn = Ot._LogEnabled.bind(Ot, Ot.WarningLogLevel), Ot.Error = Ot._LogEnabled.bind(Ot, Ot.ErrorLogLevel)
  },
  61516: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      CreateScreenshot: () => kt,
      CreateScreenshotAsync: () => Gt,
      CreateScreenshotForFrameGraphAsync: () => Ut,
      CreateScreenshotUsingRenderTarget: () => ot,
      CreateScreenshotUsingRenderTargetAsync: () => rt,
      CreateScreenshotWithResizeAsync: () => zt,
      RegisterScreenshotTools: () => Bt,
      ScreenshotTools: () => it
    });
    var Ot = Vt(40661),
      qt = Vt(42076),
      Dt = Vt(42062),
      mt = Vt(40230),
      dt = Vt(42065),
      jt = Vt(37359),
      Ht = Vt(37336);
    class Xt extends dt.d {
      static _GetDefines(tt) {
        if (!tt) return null;
        return tt.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
      }
      _gatherImports(tt, et) {
        tt ? (this._webGPUReady = !0, et.push(Promise.all([Vt.e(379).then((() => Vt(61741))), Vt.e(380).then((() => Vt(61744)))]))) : et.push(Promise.all([Vt.e(381).then((() => Vt(61749))), Vt.e(382).then((() => Vt(61754)))]))
      }
      constructor(tt) {
        const et = {
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: tt,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || jt.d.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          vertexShader: Xt.VertexUrl,
          fragmentShader: Xt.FragmentUrl,
          uniforms: Xt.Uniforms
        };
        super({
          ...et,
          defines: Xt._GetDefines(et.engine)
        }), this.texelSize = new Ht.m(0, 0)
      }
      bind() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.bind(tt), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
      }
    }
    Xt.VertexUrl = "fxaa", Xt.FragmentUrl = "fxaa", Xt.Uniforms = ["texelSize"];
    class Qt extends Dt.d {
      getClassName() {
        return "FxaaPostProcess"
      }
      constructor(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          qt = arguments.length > 3 ? arguments[3] : void 0,
          Dt = arguments.length > 4 ? arguments[4] : void 0,
          mt = arguments.length > 5 ? arguments[5] : void 0,
          dt = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const jt = {
          uniforms: Xt.Uniforms,
          size: "number" === typeof et ? et : void 0,
          camera: Vt,
          samplingMode: qt || Ot.f.BILINEAR_SAMPLINGMODE,
          engine: Dt,
          reusable: mt,
          textureType: dt,
          ...et
        };
        super(tt, Xt.FragmentUrl, {
          effectWrapper: "number" !== typeof et && et.effectWrapper ? void 0 : new Xt(tt, Dt, jt),
          ...jt
        }), this.onApplyObservable.add((tt => {
          this._effectWrapper.texelSize = this.texelSize
        }))
      }
      static _Parse(tt, et, Vt, Ot) {
        return mt.d.Parse((() => new Qt(tt.name, tt.options, et, tt.renderTargetSamplingMode, Vt.Jf(), tt.reusable)), tt, Vt, Ot)
      }
    }
    var lt = Vt(38899),
      Et = Vt(40300),
      ft = Vt(42085),
      wt = Vt(42074),
      yt = Vt(40085);
    const Nt = 0;
    class Mt {
      constructor(tt, et, Vt) {
        this.name = tt, this._parentTask = et, this._context = Vt, this.disabled = !1
      }
      setInitializeFunc(tt) {
        this._initFunc = tt
      }
      setExecuteFunc(tt) {
        this._executeFunc = tt
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
    class bt extends Mt {
      static IsObjectListPass(tt) {
        return void 0 !== tt.setObjectList
      }
      get objectList() {
        return this._objectList
      }
      setObjectList(tt) {
        this._objectList = tt
      }
      constructor(tt, et, Vt, Ot) {
        super(tt, et, Vt), this._engine = Ot
      }
      _isValid() {
        const tt = super._isValid();
        return tt || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
      }
    }
    class Jt extends Mt {
      static IsRenderPass(tt) {
        return void 0 !== tt.setRenderTarget
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
      constructor(tt, et, Vt, Ot) {
        super(tt, et, Vt), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = Ot
      }
      setRenderTarget(tt) {
        this._renderTarget = tt
      }
      setRenderTargetDepth(tt) {
        this._renderTargetDepth = tt
      }
      addDependencies(tt) {
        if (void 0 !== tt)
          if (Array.isArray(tt))
            for (const et of tt) this._dependencies.add(et);
          else this._dependencies.add(tt)
      }
      collectDependencies(tt) {
        const et = this._dependencies.keys();
        for (let Vt = et.next(); !0 !== Vt.done; Vt = et.next()) tt.add(Vt.value);
        if (void 0 !== this._renderTarget)
          if (Array.isArray(this._renderTarget))
            for (const Vt of this._renderTarget) void 0 !== Vt && tt.add(Vt);
          else tt.add(this._renderTarget);
        void 0 !== this._renderTargetDepth && tt.add(this._renderTargetDepth)
      }
      setOutputLayerAndFaceIndices(tt) {
        const et = this.frameGraphRenderTarget.renderTargetWrapper;
        if (et)
          for (const Vt of tt) et.setLayerAndFaceIndex(Vt.targetIndex, Vt.layerIndex, Vt.faceIndex)
      }
      _initialize() {
        this._frameGraphRenderTarget = this._context.createRenderTarget(this.name, this._renderTarget, this._renderTargetDepth, this.depthReadOnly, this.stencilReadOnly), super._initialize()
      }
      _execute() {
        this._context.bindRenderTarget(this._frameGraphRenderTarget), super._execute(), this._context.restoreDefaultFramebuffer()
      }
      _isValid() {
        const tt = super._isValid();
        return tt || (void 0 !== this._renderTarget || void 0 !== this.renderTargetDepth ? null : "Render target and render target depth cannot both be undefined.")
      }
      _dispose() {
        this._frameGraphRenderTarget?.dispose()
      }
    }
    var Ct = Vt(37367);
    class ut {
      get name() {
        return this._name
      }
      set name(tt) {
        this._name = tt
      }
      get disabled() {
        return this._disabled
      }
      set disabled(tt) {
        this._disabled = tt
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
      constructor(tt, et) {
        this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new Ct.c, this.onBeforeTaskExecute = new Ct.c, this.onAfterTaskExecute = new Ct.c, this.name = tt, this._frameGraph = et, this._reset()
      }
      _reset() {
        for (const tt of this._passes) tt._dispose();
        for (const tt of this._passesDisabled) tt._dispose();
        this._passes.length = 0, this._passesDisabled.length = 0
      }
      _addPass(tt, et) {
        et ? this._passesDisabled.push(tt) : this._passes.push(tt)
      }
      _checkTask() {
        let tt, et = null,
          Vt = null;
        for (const dt of this._passes) {
          const Ot = dt._isValid();
          if (Ot) throw new Error(`Pass "${dt.name}" is not valid. ${Ot}`);
          if (Jt.IsRenderPass(dt)) {
            const tt = Array.isArray(dt.renderTarget) ? dt.renderTarget : [dt.renderTarget];
            et = [];
            for (const Vt of tt) void 0 !== Vt && et.push(this._frameGraph.textureManager.getTextureFromHandle(Vt));
            Vt = void 0 !== dt.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(dt.renderTargetDepth) : null
          } else bt.IsObjectListPass(dt) && (tt = dt.objectList)
        }
        let Ot, qt = null,
          Dt = [],
          mt = null;
        for (const dt of this._passesDisabled) {
          const tt = dt._isValid();
          if (tt) throw new Error(`Pass "${dt.name}" is not valid. ${tt}`);
          if (Jt.IsRenderPass(dt)) {
            const tt = Array.isArray(dt.renderTarget) ? dt.renderTarget : [dt.renderTarget];
            qt = [];
            for (const et of tt) void 0 !== et && qt.push(this._frameGraph.textureManager.getTextureFromHandle(et));
            Dt = tt, mt = void 0 !== dt.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(dt.renderTargetDepth) : null
          } else bt.IsObjectListPass(dt) && (Ot = dt.objectList)
        }
        if (this._passesDisabled.length > 0) {
          if (!this._checkSameRenderTarget(et, qt)) {
            let tt = !0;
            for (const et of Dt)
              if (void 0 !== et && !this._frameGraph.textureManager.isHistoryTexture(et)) {
                tt = !1;
                break
              } if (!tt) throw new Error(`The output texture of the task "${this.name}" is different when it is enabled or disabled.`)
          }
          if (Vt !== mt && null !== mt) throw new Error(`The output depth texture of the task "${this.name}" is different when it is enabled or disabled.`);
          if (tt !== Ot && null !== Ot) throw new Error(`The output object list of the task "${this.name}" is different when it is enabled or disabled.`)
        }
      }
      _execute() {
        const tt = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
        this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const et of tt) et._execute()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
        this.onAfterTaskExecute.notifyObservers(this)
      }
      _initializePasses() {
        this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const tt of this._passes) tt._initialize();
          for (const tt of this._passesDisabled) tt._initialize()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
      }
      _checkSameRenderTarget(tt, et) {
        if (null === tt || null === et) return tt === et;
        if (tt.length !== et.length) return !1;
        for (let Vt = 0; Vt < tt.length; Vt++)
          if (tt[Vt] !== et[Vt]) return !1;
        return !0
      }
    }
    class Kt extends ut {
      get alphaMode() {
        return this.postProcess.alphaMode
      }
      set alphaMode(tt) {
        this.postProcess.alphaMode = tt
      }
      get drawWrapper() {
        return this._postProcessDrawWrapper
      }
      constructor(tt, et, Vt) {
        super(tt, et), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = Vt, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture = this._frameGraph.textureManager.createDanglingHandle(), this.outputDepthAttachmentTexture = this._frameGraph.textureManager.createDanglingHandle()
      }
      isReady() {
        return this.postProcess.isReady()
      }
      getClassName() {
        return "FrameGraphPostProcessTask"
      }
      record() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          et = arguments.length > 1 ? arguments[1] : void 0,
          Vt = arguments.length > 2 ? arguments[2] : void 0;
        if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
        const Ot = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
        if (Ot && (Ot.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, Ot), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentTexture, this.depthAttachmentTexture), Ot) {
          const tt = this._frameGraph.textureManager.getTextureAbsoluteDimensions(Ot);
          this._sourceWidth = tt.width, this._sourceHeight = tt.height
        }
        const qt = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
        this._outputWidth = qt.size.width, this._outputHeight = qt.size.height;
        const Dt = this._frameGraph.addRenderPass(this.name);
        if (Dt.depthReadOnly = this.depthReadOnly, Dt.stencilReadOnly = this.stencilReadOnly, Dt.addDependencies(this.sourceTexture), Dt.setRenderTarget(this.outputTexture), Dt.setRenderTargetDepth(this.depthAttachmentTexture), Dt.setExecuteFunc((tt => {
            tt.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && tt.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), et?.(tt), this.viewport && tt.setViewport(this.viewport), tt.applyFullScreenEffect(this._postProcessDrawWrapper, (() => {
              void 0 !== this.sourceTexture && tt.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), Vt?.(tt), this.postProcess.bind()
            }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), tt.restoreDefaultFramebuffer(), tt.popDebugGroup()
          })), !tt) {
          const tt = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
          tt.depthReadOnly = this.depthReadOnly, tt.stencilReadOnly = this.stencilReadOnly, tt.addDependencies(this.sourceTexture), tt.setRenderTarget(this.outputTexture), tt.setRenderTargetDepth(this.depthAttachmentTexture), tt.setExecuteFunc((tt => {
            void 0 !== this.sourceTexture && 0 === this.alphaMode && (this.viewport && tt.setViewport(this.viewport), tt.copyTexture(this.sourceTexture, void 0, void 0 !== this.viewport))
          }))
        }
        return Dt
      }
      dispose() {
        this.postProcess.dispose(), super.dispose()
      }
    }
    class ht extends Kt {
      constructor(tt, et, Vt) {
        super(tt, et, Vt || new Xt(tt, et.engine))
      }
      getClassName() {
        return "FrameGraphFXAATask"
      }
      record() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          et = arguments.length > 1 ? arguments[1] : void 0,
          Vt = arguments.length > 2 ? arguments[2] : void 0;
        const Ot = super.record(tt, et, Vt);
        return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, Ot
      }
    }
    var vt = Vt(42078);
    class Wt extends Kt {
      constructor(tt, et, Vt) {
        super(tt, et, Vt || new vt.g(tt, et.engine))
      }
      getClassName() {
        return "FrameGraphPassTask"
      }
    }
    var St = Vt(40296),
      ct = Vt(40373),
      Rt = Vt(40340),
      It = Vt(40438),
      Pt = Vt(37513);
    class Zt {
      getRenderCamera(tt) {
        if (this._renderCamera) return this._renderCamera;
        {
          let et;
          return et = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, tt && et && et.isRigCamera ? et.rigParent : et
        }
      }
      setRenderCamera(tt) {
        this._renderCamera = tt
      }
      _getSharedGizmoLight() {
        return this._sharedGizmoLight || (this._sharedGizmoLight = new It.b("shared gizmo light", new Ht.n(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = Pt.b.Gray()), this._sharedGizmoLight
      }
      static get DefaultUtilityLayer() {
        return null == Zt._DefaultUtilityLayer ? Zt._CreateDefaultUtilityLayerFromScene(jt.d.LastCreatedScene) : Zt._DefaultUtilityLayer
      }
      static _CreateDefaultUtilityLayerFromScene(tt) {
        return Zt._DefaultUtilityLayer = new Zt(tt), Zt._DefaultUtilityLayer.originalScene.ZI.addOnce((() => {
          Zt._DefaultUtilityLayer = null
        })), Zt._DefaultUtilityLayer
      }
      static get DefaultKeepDepthUtilityLayer() {
        return null == Zt._DefaultKeepDepthUtilityLayer ? Zt._CreateDefaultKeepUtilityLayerFromScene(jt.d.LastCreatedScene) : Zt._DefaultKeepDepthUtilityLayer
      }
      static _CreateDefaultKeepUtilityLayerFromScene(tt) {
        return Zt._DefaultKeepDepthUtilityLayer = new Zt(tt), Zt._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, Zt._DefaultKeepDepthUtilityLayer.originalScene.ZI.addOnce((() => {
          Zt._DefaultKeepDepthUtilityLayer = null
        })), Zt._DefaultKeepDepthUtilityLayer
      }
      constructor(tt) {
        let et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.originalScene = tt, this.handleEvents = et, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.processAllEvents = !1, this.pickingEnabled = !0, this.onPointerOutObservable = new Ct.c, this.utilityLayerScene = new St.d(tt.Jf(), {
          virtual: !0,
          useFloatingOrigin: tt.floatingOriginMode
        }), this.utilityLayerScene.useRightHandedSystem = tt.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), et && (this._originalPointerObserver = tt.onPrePointerObservable.add((et => {
          if (!this.utilityLayerScene.activeCamera) return;
          if (!this.pickingEnabled) return;
          if (!this.processAllEvents && et.type !== ct.c.POINTERMOVE && et.type !== ct.c.POINTERUP && et.type !== ct.c.POINTERDOWN && et.type !== ct.c.POINTERDOUBLETAP) return;
          this.utilityLayerScene.pointerX = tt.pointerX, this.utilityLayerScene.pointerY = tt.pointerY;
          const Vt = et.event;
          if (tt.isPointerCaptured(Vt.pointerId)) return void(this._pointerCaptures[Vt.pointerId] = !1);
          const Ot = Vt => {
              let Ot;
              if (et.nearInteractionPickingInfo) Ot = et.nearInteractionPickingInfo.pickedMesh.vI() == Vt ? et.nearInteractionPickingInfo : new Rt.b;
              else if (Vt !== this.utilityLayerScene && et.originalPickingInfo) Ot = et.originalPickingInfo;
              else {
                let qt = null;
                this._renderCamera && (qt = Vt._activeCamera, Vt._activeCamera = this._renderCamera, et.ray = null), Ot = et.ray ? Vt.pickWithRay(et.ray) : Vt.il(tt.pointerX, tt.pointerY), qt && (Vt._activeCamera = qt)
              }
              return Ot
            },
            qt = Ot(this.utilityLayerScene);
          if (!et.ray && qt && (et.ray = qt.ray), et.originalPickingInfo?.aimTransform && qt && (qt.aimTransform = et.originalPickingInfo.aimTransform, qt.gripTransform = et.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(et), this.onlyCheckPointerDownEvents && et.type != ct.c.POINTERDOWN) return et.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new ct.f(et.type, et.event, qt), et.type), void(et.type === ct.c.POINTERUP && this._pointerCaptures[Vt.pointerId] && (this._pointerCaptures[Vt.pointerId] = !1));
          if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) qt && qt.hit && (et.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new ct.f(et.type, et.event, qt), et.type), et.skipOnPointerObservable = !0);
          else {
            const Vt = Ot(tt),
              Dt = et.event;
            Vt && qt && (0 === qt.distance && Vt.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(Vt.pickedMesh) ? (this._notifyObservers(et, Vt, Dt), et.skipOnPointerObservable = !0) : et.type === ct.c.POINTERDOWN ? (this._pointerCaptures[Dt.pointerId] = !0, this._notifyObservers(et, Vt, Dt)) : et.type !== ct.c.POINTERMOVE && et.type !== ct.c.POINTERUP || (this._lastPointerEvents[Dt.pointerId] && (this.onPointerOutObservable.notifyObservers(Dt.pointerId), delete this._lastPointerEvents[Dt.pointerId]), this._notifyObservers(et, Vt, Dt)) : !this._pointerCaptures[Dt.pointerId] && (qt.distance < Vt.distance || 0 === Vt.distance) ? (this._notifyObservers(et, qt, Dt), et.skipOnPointerObservable || (et.skipOnPointerObservable = qt.distance > 0)) : !this._pointerCaptures[Dt.pointerId] && qt.distance >= Vt.distance && (this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(Vt.pickedMesh) ? (this._notifyObservers(et, Vt, Dt), et.skipOnPointerObservable = !0) : (et.type !== ct.c.POINTERMOVE && et.type !== ct.c.POINTERUP || this._lastPointerEvents[Dt.pointerId] && (this.onPointerOutObservable.notifyObservers(Dt.pointerId), delete this._lastPointerEvents[Dt.pointerId]), this._notifyObservers(et, qt, Dt))), et.type === ct.c.POINTERUP && this._pointerCaptures[Dt.pointerId] && (this._pointerCaptures[Dt.pointerId] = !1))
          }
        })), this._originalPointerObserver && tt.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, Vt || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((tt => {
          this.shouldRender && tt == this.getRenderCamera() && this.render()
        }))), this._sceneDisposeObserver = this.originalScene.ZI.add((() => {
          this.dispose()
        })), this._updateCamera()
      }
      _notifyObservers(tt, et, Vt) {
        tt.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new ct.f(tt.type, tt.event, et), tt.type), this._lastPointerEvents[Vt.pointerId] = !0)
      }
      render() {
        if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
          const tt = this.utilityLayerScene.activeCamera.vI(),
            et = this.utilityLayerScene.activeCamera;
          et._scene = this.utilityLayerScene, et.leftCamera && (et.leftCamera._scene = this.utilityLayerScene), et.rightCamera && (et.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), et._scene = tt, et.leftCamera && (et.leftCamera._scene = tt), et.rightCamera && (et.rightCamera._scene = tt)
        }
      }
      dispose() {
        this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.ZI.remove(this._sceneDisposeObserver), this._originalPointerObserver && this.originalScene.onPrePointerObservable.remove(this._originalPointerObserver), this.utilityLayerScene.dispose()
      }
      _updateCamera() {
        this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
      }
    }
    Zt._DefaultUtilityLayer = null, Zt._DefaultKeepDepthUtilityLayer = null;
    const Lt = {
      FindMainCamera: function(tt) {
        return tt.findMainCamera()
      },
      FindMainObjectRenderer: function(tt) {
        return tt.findMainObjectRenderer()
      },
      CreateUtilityLayerRenderer: function(tt) {
        let et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const Vt = tt.Fw,
          Ot = new Zt(Vt, et, !0);
        Ot.utilityLayerScene.activeCamera = Vt.activeCamera;
        let qt = Lt.FindMainCamera(Vt.frameGraph);
        !qt && Vt.cameras.length > 0 && (qt = Vt.cameras[0]), qt && (Ot.setRenderCamera(qt), Ot.utilityLayerScene.activeCamera = qt);
        const Dt = Vt.onAfterRenderObservable.add((() => {
          Ot.render()
        }));
        return Ot.utilityLayerScene.ZI.addOnce((() => {
          Vt.onAfterRenderObservable.remove(Dt)
        })), Ot
      }
    };
    let Ft = null;

    function kt(tt, et, Vt, Ot) {
      let qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        Dt = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        mt = arguments.length > 6 ? arguments[6] : void 0,
        dt = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        jt = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
      const {
        height: Ht,
        width: Xt
      } = At(tt, et, Vt);
      if (!Ht || !Xt) return void lt.d.Error("Invalid 'size' parameter !");
      const Qt = et.vI();
      let ft = Qt.activeCamera !== et;
      if (Qt.frameGraph) {
        const tt = Lt.FindMainObjectRenderer(Qt.frameGraph);
        tt && (ft = tt.camera !== et)
      }
      ft ? ot(tt, et, Vt, (tt => {
        if (Dt) {
          const et = new Blob([tt]);
          Et.l.DownloadBlob(et), Ot && Ot("")
        } else Ot && Ot(tt)
      }), qt, 1, tt.getCreationOptions().antialias, void 0, void 0, void 0, void 0, mt) : tt.onEndFrameObservable.addOnce((() => {
        Ft || (Ft = document.createElement("canvas")), Ft.width = Xt, Ft.height = Ht;
        const et = Ft.getContext("2d"),
          Vt = tt.getRenderingCanvas();
        if (!et || !Vt) return void lt.d.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
        const ft = Vt.width,
          wt = Vt.height,
          yt = Ft.width,
          Nt = Ft.height,
          Mt = yt / ft,
          bt = Nt / wt,
          Jt = dt ? Math.max(Mt, bt) : Math.min(Mt, bt),
          Ct = ft * Jt,
          ut = wt * Jt,
          Kt = (yt - Ct) / 2,
          ht = (Nt - ut) / 2;
        et.save(), et.fillStyle = jt ? Qt.clearColor.toHexString() : "rgba(0, 0, 0, 0)", et.fillRect(0, 0, Xt, Ht), et.restore(), et.drawImage(Vt, 0, 0, ft, wt, Kt, ht, Ct, ut), Dt ? (Et.l.EncodeScreenshotCanvasData(Ft, void 0, qt, void 0, mt), Ot && Ot("")) : Et.l.EncodeScreenshotCanvasData(Ft, Ot, qt, void 0, mt)
      }))
    }
    async function Gt(tt, et, Vt) {
      let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        qt = arguments.length > 4 ? arguments[4] : void 0,
        Dt = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        mt = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        dt = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      return await new Promise(((jt, Ht) => {
        kt(tt, et, Vt, (tt => {
          "undefined" !== typeof tt ? jt(tt) : Ht(new Error("Data is undefined"))
        }), Ot, dt, qt, Dt, mt)
      }))
    }
    async function zt(tt, et, Vt, Ot) {
      let qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        Dt = arguments.length > 5 ? arguments[5] : void 0,
        mt = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return await new Promise((dt => {
        kt(tt, et, {
          width: Vt,
          height: Ot
        }, (() => {
          dt()
        }), qt, !0, Dt, mt)
      }))
    }

    function ot(tt, et, Dt, mt) {
      let dt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        jt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
        Ht = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Xt = arguments.length > 7 ? arguments[7] : void 0,
        Et = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Nt = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        Mt = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
        bt = arguments.length > 11 ? arguments[11] : void 0,
        Jt = arguments.length > 12 ? arguments[12] : void 0,
        Ct = arguments.length > 13 ? arguments[13] : void 0,
        ut = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
        Kt = arguments.length > 15 ? arguments[15] : void 0;
      const ht = et.vI();
      if (ht.frameGraph) return void Ut(ht.frameGraph, et, Dt, dt, jt, Ht, Xt, bt, Ct, !mt).then((tt => {
        mt && mt(tt)
      }));
      const {
        height: vt,
        width: Wt,
        finalWidth: St,
        finalHeight: ct
      } = At(tt, et, Dt), Rt = {
        width: Wt,
        height: vt
      };
      if (!vt || !Wt) return void lt.d.Error("Invalid 'size' parameter !");
      tt.skipFrameRender = !0;
      const It = tt.getRenderWidth,
        Pt = tt.getRenderHeight;
      tt.getRenderWidth = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && tt._currentRenderTarget ? tt._currentRenderTarget.width : Wt
      }, tt.getRenderHeight = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && tt._currentRenderTarget ? tt._currentRenderTarget.height : vt
      }, tt.onResizeObservable.hasObservers() && tt.onResizeObservable.notifyObservers(tt);
      const Zt = new qt.d("screenShot", Rt, ht, !1, !1, 0, !1, Ot.f.BILINEAR_SAMPLINGMODE, void 0, Nt, void 0, void 0, void 0, jt);
      Zt.renderList = ht.meshes.slice(), Zt.samples = jt, Zt.renderSprites = Et, Zt.activeCamera = et, Zt.forceLayerMaskCheck = Mt, Jt?.(Zt);
      const Lt = Ct || ft.DumpData,
        Ft = () => {
          ht.incrementRenderId(), ht.resetCachedMaterial(), (0, yt.g)((() => Zt.isReadyForRendering() && et.isReady(!0)), (() => {
            tt.onEndFrameObservable.addOnce((() => {
              St === Wt && ct === vt ? Zt.readPixels(void 0, void 0, void 0, !1).then((tt => {
                Lt(Wt, vt, tt, mt, dt, Xt, !0, void 0, bt), Zt.dispose()
              })) : (tt.isWebGPU ? Vt.e(375).then((() => Vt(61682))) : Vt.e(376).then((() => Vt(61688)))).then((async () => await (0, wt.e)("pass", Zt.getInternalTexture(), ht, void 0, void 0, void 0, St, ct).then((et => {
                tt._readTexturePixels(et, St, ct, -1, 0, null, !0, !1, 0, 0).then((tt => {
                  Lt(St, ct, tt, mt, dt, Xt, !0, void 0, bt), et.dispose()
                }))
              }))))
            })), ht.incrementRenderId(), ht.resetCachedMaterial();
            const Ot = ht.activeCamera,
              qt = ht.activeCameras,
              Dt = et.outputRenderTarget,
              jt = ht.spritesEnabled;
            ht.activeCamera = et, ht.activeCameras = null, et.outputRenderTarget = Zt, ht.spritesEnabled = Et;
            const Ht = ht.meshes;
            ht.meshes = Zt.renderList || ht.meshes;
            try {
              ht.render()
            } finally {
              ht.activeCamera = Ot, ht.activeCameras = qt, et.outputRenderTarget = Dt, ht.spritesEnabled = jt, ht.meshes = Ht, tt.getRenderWidth = It, tt.getRenderHeight = Pt, tt.onResizeObservable.hasObservers() && tt.onResizeObservable.notifyObservers(tt), et.getProjectionMatrix(!0), tt.skipFrameRender = !1
            }
          }), (() => {
            tt.skipFrameRender = !1, tt.getRenderWidth = It, tt.getRenderHeight = Pt, Kt?.()
          }), void 0, ut)
        };
      if (Ht) {
        const tt = new Qt("antialiasing", 1, ht.activeCamera);
        Zt.addPostProcess(tt), tt.autoClear = !0, tt.onEffectCreatedObservable.addOnce((tt => {
          tt.isReady() ? Ft() : tt.onCompiled = () => {
            Ft()
          }
        }))
      } else Ft()
    }
    async function rt(tt, et, Vt) {
      let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        Dt = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        mt = arguments.length > 6 ? arguments[6] : void 0,
        dt = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        jt = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Ht = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
        Xt = arguments.length > 10 ? arguments[10] : void 0,
        Qt = arguments.length > 11 ? arguments[11] : void 0,
        lt = arguments.length > 12 ? arguments[12] : void 0;
      return await new Promise(((Et, ft) => {
        ot(tt, et, Vt, (tt => {
          "undefined" !== typeof tt ? Et(tt) : ft(new Error("Data is undefined"))
        }), Ot, qt, Dt, mt, dt, jt, Ht, Xt, Qt, lt)
      }))
    }
    async function Ut(tt, et, Vt) {
      let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        Dt = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        mt = arguments.length > 6 ? arguments[6] : void 0,
        dt = arguments.length > 7 ? arguments[7] : void 0,
        jt = arguments.length > 8 ? arguments[8] : void 0,
        Ht = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        Xt = arguments.length > 10 ? arguments[10] : void 0;
      const Qt = tt.engine,
        lt = tt.textureManager,
        {
          height: Et,
          width: wt,
          finalWidth: yt,
          finalHeight: Mt
        } = At(Qt, et, Vt),
        bt = {
          width: wt,
          height: Et
        },
        Jt = jt || ft.DumpData,
        Ct = tt.tasks,
        ut = Ct.length,
        Kt = tt.pausedExecution,
        vt = Qt.getCaps().parallelShaderCompile;
      lt.setBackBufferTextures(0, 0, {
        size: bt,
        options: {
          createMipMaps: !1,
          samples: qt,
          types: [0],
          formats: [5],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot color"]
        },
        sizeIsPercentage: !1
      }, {
        size: bt,
        options: {
          createMipMaps: !1,
          samples: qt,
          types: [0],
          formats: [Qt.isStencilEnable ? 13 : 14],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot depth"]
        },
        sizeIsPercentage: !1
      });
      let St = Nt;
      if (Dt) {
        const et = new ht("fxaa", tt);
        et.sourceTexture = St, St = et.outputTexture, tt.addTask(et)
      }
      if (yt !== wt || Mt !== Et) {
        const et = new Wt("pass", tt);
        et.sourceTexture = St, et.targetTexture = tt.textureManager.createRenderTargetTexture("pass_output", {
          size: {
            width: yt,
            height: Mt
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
        }), St = et.outputTexture, tt.addTask(et)
      }
      const ct = Lt.FindMainObjectRenderer(tt);
      let Rt = null;
      ct && (Rt = ct.camera, ct.camera = et), Qt.getCaps().parallelShaderCompile = void 0, await tt.buildAsync();
      const It = Xt ?? (lt.hasHistoryTextures ? 32 : 1);
      for (let ft = 0; ft < It; ++ft) tt.execute();
      tt.pausedExecution = !0, Qt.getCaps().parallelShaderCompile = vt;
      for (let ft = ut; ft < Ct.length; ++ft) tt.tasks[ft].dispose();
      tt.tasks.length = ut, ct && Rt && (ct.camera = Rt);
      const Pt = tt.textureManager.getTextureFromHandle(St);
      return Pt.incrementReferences(), lt.resetBackBufferTextures(), await tt.buildAsync(), tt.pausedExecution = Kt, new Promise((tt => {
        Qt._readTexturePixels(Pt, yt, Mt, -1, 0, null, !0, !1, 0, 0).then((async et => {
          Pt.dispose(), Jt(yt, Mt, et, Ht ? void 0 : et => tt(et), Ot, mt, !0, void 0, dt), Ht && tt(null)
        }))
      }))
    }

    function At(tt, et, Vt) {
      let Ot = 0,
        qt = 0,
        Dt = 0,
        mt = 0;
      if ("object" === typeof Vt) {
        const dt = Vt.precision ? Math.abs(Vt.precision) : 1;
        Vt.width && Vt.height ? (Ot = Vt.height * dt, qt = Vt.width * dt) : Vt.width && !Vt.height ? (qt = Vt.width * dt, Ot = Math.round(qt / tt.getAspectRatio(et))) : Vt.height && !Vt.width ? (Ot = Vt.height * dt, qt = Math.round(Ot * tt.getAspectRatio(et))) : (qt = Math.round(tt.getRenderWidth() * dt), Ot = Math.round(qt / tt.getAspectRatio(et))), Vt.finalWidth && Vt.finalHeight ? (mt = Vt.finalHeight, Dt = Vt.finalWidth) : Vt.finalWidth && !Vt.finalHeight ? (Dt = Vt.finalWidth, mt = Math.round(Dt / tt.getAspectRatio(et))) : Vt.finalHeight && !Vt.finalWidth ? (mt = Vt.finalHeight, Dt = Math.round(mt * tt.getAspectRatio(et))) : (Dt = qt, mt = Ot)
      } else isNaN(Vt) || (Ot = Vt, qt = Vt, Dt = Vt, mt = Vt);
      return qt && (qt = Math.floor(qt)), Ot && (Ot = Math.floor(Ot)), Dt && (Dt = Math.floor(Dt)), mt && (mt = Math.floor(mt)), {
        height: 0 | Ot,
        width: 0 | qt,
        finalWidth: 0 | Dt,
        finalHeight: 0 | mt
      }
    }
    const it = {
      CreateScreenshot: kt,
      CreateScreenshotAsync: Gt,
      CreateScreenshotWithResizeAsync: zt,
      CreateScreenshotUsingRenderTarget: ot,
      CreateScreenshotUsingRenderTargetAsync: rt,
      CreateScreenshotForFrameGraphAsync: Ut
    };
    let Yt = !1;

    function Bt() {
      if (Yt) return;
      Yt = !0;
      Et.l.CreateScreenshot = kt, Et.l.CreateScreenshotAsync = Gt, Et.l.CreateScreenshotUsingRenderTarget = ot, Et.l.CreateScreenshotUsingRenderTargetAsync = rt
    }
    Bt()
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);