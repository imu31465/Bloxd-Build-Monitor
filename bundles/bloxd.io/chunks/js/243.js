export const id = 243;
export const ids = [243, 244];
export const modules = {
  40506: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Cu,
      f: () => cu
    });
    var su = ju(40255),
      Uu = ju(40258),
      Zu = ju(37494),
      Xu = ju(37680),
      lu = ju(40508),
      qu = ju(40467),
      fu = ju(37532);
    let Cu = (() => {
        var uu;
        let Eu, ju, qu = lu.e,
          fu = [],
          Cu = [],
          bu = [],
          cu = [];
        return uu = class extends qu {
          constructor(uu, Eu, ju, Uu) {
            super(uu, ju, Uu), this.groundColor = (0, su.g)(this, fu, new Xu.c(0, 0, 0)), this.direction = ((0, su.g)(this, Cu), (0, su.g)(this, bu, void 0)), (0, su.g)(this, cu), this.direction = Eu || Zu.t.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(uu) {
            return this.direction = Zu.t.Normalize(uu.subtract(Zu.t.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(uu, Eu) {
            const ju = Zu.t.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", ju.x, ju.y, ju.z, 0, Eu), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), Eu), this
          }
          transferToNodeMaterialEffect(uu, Eu) {
            const ju = Zu.t.Normalize(this.direction);
            return uu.setFloat3(Eu, ju.x, ju.y, ju.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = Zu.e.Identity()), this._worldMatrix
          }
          getTypeID() {
            return lu.e.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(uu, Eu) {
            uu["HEMILIGHT" + Eu] = !0
          }
        }, (() => {
          const Zu = "function" === typeof Symbol && Symbol.metadata ? Object.create(qu[Symbol.metadata] ?? null) : void 0;
          Eu = [(0, Uu.j)()], ju = [(0, Uu.A)()], (0, su.e)(null, null, Eu, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: uu => "groundColor" in uu,
              get: uu => uu.groundColor,
              set: (uu, Eu) => {
                uu.groundColor = Eu
              }
            },
            metadata: Zu
          }, fu, Cu), (0, su.e)(null, null, ju, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: uu => "direction" in uu,
              get: uu => uu.direction,
              set: (uu, Eu) => {
                uu.direction = Eu
              }
            },
            metadata: Zu
          }, bu, cu), Zu && Object.defineProperty(uu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Zu
          })
        })(), uu
      })(),
      bu = !1;

    function cu() {
      bu || (bu = !0, qu.c.AddNodeConstructor("Light_Type_3", ((uu, Eu) => () => new Cu(uu, Zu.t.Zero(), Eu))), (0, fu.f)("BABYLON.HemisphericLight", Cu))
    }
  },
  38152: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Uu
    });
    var su = ju(38154);
    class Uu {
      static GetPlanes(uu) {
        const Eu = [];
        for (let ju = 0; ju < 6; ju++) Eu.push(new su.d(0, 0, 0, 0));
        return Uu.GetPlanesToRef(uu, Eu), Eu
      }
      static GetNearPlaneToRef(uu, Eu) {
        const ju = uu.m;
        Eu.normal.x = ju[3] + ju[2], Eu.normal.y = ju[7] + ju[6], Eu.normal.z = ju[11] + ju[10], Eu.d = ju[15] + ju[14], Eu.normalize()
      }
      static GetFarPlaneToRef(uu, Eu) {
        const ju = uu.m;
        Eu.normal.x = ju[3] - ju[2], Eu.normal.y = ju[7] - ju[6], Eu.normal.z = ju[11] - ju[10], Eu.d = ju[15] - ju[14], Eu.normalize()
      }
      static GetLeftPlaneToRef(uu, Eu) {
        const ju = uu.m;
        Eu.normal.x = ju[3] + ju[0], Eu.normal.y = ju[7] + ju[4], Eu.normal.z = ju[11] + ju[8], Eu.d = ju[15] + ju[12], Eu.normalize()
      }
      static GetRightPlaneToRef(uu, Eu) {
        const ju = uu.m;
        Eu.normal.x = ju[3] - ju[0], Eu.normal.y = ju[7] - ju[4], Eu.normal.z = ju[11] - ju[8], Eu.d = ju[15] - ju[12], Eu.normalize()
      }
      static GetTopPlaneToRef(uu, Eu) {
        const ju = uu.m;
        Eu.normal.x = ju[3] - ju[1], Eu.normal.y = ju[7] - ju[5], Eu.normal.z = ju[11] - ju[9], Eu.d = ju[15] - ju[13], Eu.normalize()
      }
      static GetBottomPlaneToRef(uu, Eu) {
        const ju = uu.m;
        Eu.normal.x = ju[3] + ju[1], Eu.normal.y = ju[7] + ju[5], Eu.normal.z = ju[11] + ju[9], Eu.d = ju[15] + ju[13], Eu.normalize()
      }
      static GetPlanesToRef(uu, Eu) {
        Uu.GetNearPlaneToRef(uu, Eu[0]), Uu.GetFarPlaneToRef(uu, Eu[1]), Uu.GetLeftPlaneToRef(uu, Eu[2]), Uu.GetRightPlaneToRef(uu, Eu[3]), Uu.GetTopPlaneToRef(uu, Eu[4]), Uu.GetBottomPlaneToRef(uu, Eu[5])
      }
      static IsPointInFrustum(uu, Eu) {
        for (let ju = 0; ju < 6; ju++)
          if (Eu[ju].dotCoordinate(uu) < 0) return !1;
        return !0
      }
    }
  },
  38154: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Uu
    });
    var su = ju(37494);
    class Uu {
      constructor(uu, Eu, ju, Uu) {
        this.normal = new su.t(uu, Eu, ju), this.d = Uu
      }
      Osu() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Uu(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let uu = this.normal.getHashCode();
        return uu = 397 * uu ^ this.d, uu
      }
      normalize() {
        const uu = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let Eu = 0;
        return 0 !== uu && (Eu = 1 / uu), this.normal.x *= Eu, this.normal.y *= Eu, this.normal.z *= Eu, this.d *= Eu, this
      }
      transform(uu) {
        const Eu = Uu._TmpMatrix;
        uu.invertToRef(Eu);
        const ju = Eu.m,
          su = this.normal.x,
          Zu = this.normal.y,
          Xu = this.normal.z,
          lu = this.d,
          qu = su * ju[0] + Zu * ju[1] + Xu * ju[2] + lu * ju[3],
          fu = su * ju[4] + Zu * ju[5] + Xu * ju[6] + lu * ju[7],
          Cu = su * ju[8] + Zu * ju[9] + Xu * ju[10] + lu * ju[11],
          bu = su * ju[12] + Zu * ju[13] + Xu * ju[14] + lu * ju[15];
        return new Uu(qu, fu, Cu, bu)
      }
      dotCoordinate(uu) {
        return this.normal.x * uu.x + this.normal.y * uu.y + this.normal.z * uu.z + this.d
      }
      copyFromPoints(uu, Eu, ju) {
        const su = Eu.x - uu.x,
          Uu = Eu.y - uu.y,
          Zu = Eu.z - uu.z,
          Xu = ju.x - uu.x,
          lu = ju.y - uu.y,
          qu = ju.z - uu.z,
          fu = Uu * qu - Zu * lu,
          Cu = Zu * Xu - su * qu,
          bu = su * lu - Uu * Xu,
          cu = Math.sqrt(fu * fu + Cu * Cu + bu * bu);
        let Nu;
        return Nu = 0 !== cu ? 1 / cu : 0, this.normal.x = fu * Nu, this.normal.y = Cu * Nu, this.normal.z = bu * Nu, this.d = -(this.normal.x * uu.x + this.normal.y * uu.y + this.normal.z * uu.z), this
      }
      isFrontFacingTo(uu, Eu) {
        return su.t.Dot(this.normal, uu) <= Eu
      }
      signedDistanceTo(uu) {
        return su.t.Dot(uu, this.normal) + this.d
      }
      static FromArray(uu) {
        return new Uu(uu[0], uu[1], uu[2], uu[3])
      }
      static FromPoints(uu, Eu, ju) {
        const su = new Uu(0, 0, 0, 0);
        return su.copyFromPoints(uu, Eu, ju), su
      }
      static FromPositionAndNormal(uu, Eu) {
        const ju = new Uu(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(uu, Eu, ju)
      }
      static FromPositionAndNormalToRef(uu, Eu, ju) {
        return ju.normal.yJ(Eu), ju.normal.normalize(), ju.d = -uu.dot(ju.normal), ju
      }
      static SignedDistanceToPlaneFromPositionAndNormal(uu, Eu, ju) {
        const Uu = -(Eu.x * uu.x + Eu.y * uu.y + Eu.z * uu.z);
        return su.t.Dot(ju, Eu) + Uu
      }
    }
    Uu._TmpMatrix = su.e.Identity()
  },
  38458: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => su
    });
    class su {
      constructor(uu, Eu, ju, su) {
        this.x = uu, this.y = Eu, this.width = ju, this.height = su
      }
      toGlobal(uu, Eu) {
        return new su(this.x * uu, this.y * Eu, this.width * uu, this.height * Eu)
      }
      toGlobalToRef(uu, Eu, ju) {
        return ju.x = this.x * uu, ju.y = this.y * Eu, ju.width = this.width * uu, ju.height = this.height * Eu, this
      }
      clone() {
        return new su(this.x, this.y, this.width, this.height)
      }
    }
  },
  39030: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Zu
    });
    var su = ju(39032);
    const Uu = (uu, Eu, ju) => uu ? uu.getClassName && "Mesh" === uu.getClassName() ? null : !uu.getClassName || "SubMesh" !== uu.getClassName() && "PhysicsBody" !== uu.getClassName() ? uu.clone ? uu.clone() : Array.isArray(uu) ? uu.slice() : ju && "object" === typeof uu ? {
      ...uu
    } : null : uu.clone(Eu) : null;
    class Zu {
      static DeepCopy(uu, Eu, ju, Zu) {
        let Xu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const lu = function(uu) {
          const Eu = [];
          do {
            const ju = Object.getOwnPropertyNames(uu);
            for (const uu of ju) - 1 === Eu.indexOf(uu) && Eu.push(uu)
          } while (uu = Object.getPrototypeOf(uu));
          return Eu
        }(uu);
        for (const fu of lu) {
          if ("_" === fu[0] && (!Zu || -1 === Zu.indexOf(fu))) continue;
          if (fu.endsWith("Observable")) continue;
          if (ju && -1 !== ju.indexOf(fu)) continue;
          const lu = uu[fu],
            Cu = typeof lu;
          if ("function" !== Cu) try {
            if ("object" === Cu)
              if (lu instanceof Uint8Array) Eu[fu] = Uint8Array.from(lu);
              else if (lu instanceof Array) {
              if (Eu[fu] = [], lu.length > 0)
                if ("object" == typeof lu[0])
                  for (let uu = 0; uu < lu.length; uu++) {
                    const ju = Uu(lu[uu], Eu, Xu); - 1 === Eu[fu].indexOf(ju) && Eu[fu].push(ju)
                  } else Eu[fu] = lu.slice(0)
            } else Eu[fu] = Uu(lu, Eu, Xu);
            else Eu[fu] = lu
          } catch (qu) {
            su.b.Warn(qu.message)
          }
        }
      }
    }
  },
  38303: (uu, Eu, ju) => {
    function su() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (uu => {
        const Eu = 16 * Math.random() | 0;
        return ("x" === uu ? Eu : 3 & Eu | 8).toString(16)
      }))
    }
    ju.d(Eu, {
      e: () => su
    })
  },
  39032: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => su
    });
    class su {
      static _CheckLimit(uu, Eu) {
        let ju = su._LogLimitOutputs[uu];
        return ju ? ju.current++ : (ju = {
          limit: Eu,
          current: 1
        }, su._LogLimitOutputs[uu] = ju), ju.current <= ju.limit
      }
      static _GenerateLimitMessage(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const ju = su._LogLimitOutputs[uu];
        if (!ju || !su.MessageLimitReached) return;
        const Uu = this._Levels[Eu];
        ju.current === ju.limit && su[Uu.name](su.MessageLimitReached.replace(/%LIMIT%/g, "" + ju.limit).replace(/%TYPE%/g, Uu.name ?? ""))
      }
      static _AddLogEntry(uu) {
        su._LogCache = uu + su._LogCache, su.OnNewCacheEntry && su.OnNewCacheEntry(uu)
      }
      static _FormatMessage(uu) {
        const Eu = uu => uu < 10 ? "0" + uu : "" + uu,
          ju = new Date;
        return "[" + Eu(ju.getHours()) + ":" + Eu(ju.getMinutes()) + ":" + Eu(ju.getSeconds()) + "]: " + uu
      }
      static _LogDisabled(uu, Eu) {}
      static _LogEnabled() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Eu = arguments.length > 1 ? arguments[1] : void 0,
          ju = arguments.length > 2 ? arguments[2] : void 0;
        const Uu = Array.isArray(Eu) ? Eu[0] : Eu;
        if (void 0 !== ju && !su._CheckLimit(Uu, ju)) return;
        const Zu = su._FormatMessage(Uu),
          Xu = this._Levels[uu],
          lu = Array.isArray(Eu) ? Eu.slice(1) : [];
        Xu.logFunc && Xu.logFunc("BJS - " + Zu, ...lu);
        const qu = `<div style='color:${Xu.color}'>${Zu}</div><br>`;
        su._AddLogEntry(qu), su._GenerateLimitMessage(Uu, uu)
      }
      static get LogCache() {
        return su._LogCache
      }
      static ClearLogCache() {
        su._LogCache = "", su._LogLimitOutputs = {}, su.errorsCount = 0
      }
      static set LogLevels(uu) {
        su.Log = su._LogDisabled, su.Warn = su._LogDisabled, su.Error = su._LogDisabled;
        const Eu = [su.MessageLogLevel, su.WarningLogLevel, su.ErrorLogLevel];
        for (const ju of Eu)
          if ((uu & ju) === ju) {
            const uu = this._Levels[ju];
            su[uu.name] = su._LogEnabled.bind(su, ju)
          }
      }
    }
    su.NoneLogLevel = 0, su.MessageLogLevel = 1, su.WarningLogLevel = 2, su.ErrorLogLevel = 4, su.AllLogLevel = 7, su.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", su._LogCache = "", su._LogLimitOutputs = {}, su._Levels = [{}, {
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
    }], su.errorsCount = 0, su.Log = su._LogEnabled.bind(su, su.MessageLogLevel), su.Warn = su._LogEnabled.bind(su, su.WarningLogLevel), su.Error = su._LogEnabled.bind(su, su.ErrorLogLevel)
  },
  61483: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      CreateScreenshot: () => Qu,
      CreateScreenshotAsync: () => iu,
      CreateScreenshotForFrameGraphAsync: () => Fu,
      CreateScreenshotUsingRenderTarget: () => Su,
      CreateScreenshotUsingRenderTargetAsync: () => Iu,
      CreateScreenshotWithResizeAsync: () => Wu,
      RegisterScreenshotTools: () => xu,
      ScreenshotTools: () => Lu
    });
    var su = ju(40739),
      Uu = ju(42085),
      Zu = ju(42068),
      Xu = ju(40272),
      lu = ju(42075),
      qu = ju(37506),
      fu = ju(37494);
    class Cu extends lu.d {
      static _GetDefines(uu) {
        if (!uu) return null;
        return uu.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
      }
      _gatherImports(uu, Eu) {
        uu ? (this._webGPUReady = !0, Eu.push(Promise.all([ju.e(379).then((() => ju(61725))), ju.e(380).then((() => ju(61734)))]))) : Eu.push(Promise.all([ju.e(381).then((() => ju(61742))), ju.e(382).then((() => ju(61751)))]))
      }
      constructor(uu) {
        const Eu = {
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: uu,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || qu.b.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          vertexShader: Cu.VertexUrl,
          fragmentShader: Cu.FragmentUrl,
          uniforms: Cu.Uniforms
        };
        super({
          ...Eu,
          defines: Cu._GetDefines(Eu.engine)
        }), this.texelSize = new fu.p(0, 0)
      }
      bind() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.bind(uu), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
      }
    }
    Cu.VertexUrl = "fxaa", Cu.FragmentUrl = "fxaa", Cu.Uniforms = ["texelSize"];
    class bu extends Zu.b {
      getClassName() {
        return "FxaaPostProcess"
      }
      constructor(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Uu = arguments.length > 3 ? arguments[3] : void 0,
          Zu = arguments.length > 4 ? arguments[4] : void 0,
          Xu = arguments.length > 5 ? arguments[5] : void 0,
          lu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const qu = {
          uniforms: Cu.Uniforms,
          size: "number" === typeof Eu ? Eu : void 0,
          camera: ju,
          samplingMode: Uu || su.g.BILINEAR_SAMPLINGMODE,
          engine: Zu,
          reusable: Xu,
          textureType: lu,
          ...Eu
        };
        super(uu, Cu.FragmentUrl, {
          effectWrapper: "number" !== typeof Eu && Eu.effectWrapper ? void 0 : new Cu(uu, Zu, qu),
          ...qu
        }), this.onApplyObservable.add((uu => {
          this._effectWrapper.texelSize = this.texelSize
        }))
      }
      static _Parse(uu, Eu, ju, su) {
        return Xu.e.Parse((() => new bu(uu.name, uu.options, Eu, uu.renderTargetSamplingMode, ju.wO(), uu.reusable)), uu, ju, su)
      }
    }
    var cu = ju(39032),
      Nu = ju(40356),
      Ou = ju(42102),
      Yu = ju(42082),
      hu = ju(40164);
    const Du = 0;
    class gu {
      constructor(uu, Eu, ju) {
        this.name = uu, this._parentTask = Eu, this._context = ju, this.disabled = !1
      }
      setInitializeFunc(uu) {
        this._initFunc = uu
      }
      setExecuteFunc(uu) {
        this._executeFunc = uu
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
    class Mu extends gu {
      static IsObjectListPass(uu) {
        return void 0 !== uu.setObjectList
      }
      get objectList() {
        return this._objectList
      }
      setObjectList(uu) {
        this._objectList = uu
      }
      constructor(uu, Eu, ju, su) {
        super(uu, Eu, ju), this._engine = su
      }
      _isValid() {
        const uu = super._isValid();
        return uu || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
      }
    }
    class eu extends gu {
      static IsRenderPass(uu) {
        return void 0 !== uu.setRenderTarget
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
      constructor(uu, Eu, ju, su) {
        super(uu, Eu, ju), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = su
      }
      setRenderTarget(uu) {
        this._renderTarget = uu
      }
      setRenderTargetDepth(uu) {
        this._renderTargetDepth = uu
      }
      addDependencies(uu) {
        if (void 0 !== uu)
          if (Array.isArray(uu))
            for (const Eu of uu) this._dependencies.add(Eu);
          else this._dependencies.add(uu)
      }
      collectDependencies(uu) {
        const Eu = this._dependencies.keys();
        for (let ju = Eu.next(); !0 !== ju.done; ju = Eu.next()) uu.add(ju.value);
        if (void 0 !== this._renderTarget)
          if (Array.isArray(this._renderTarget))
            for (const ju of this._renderTarget) void 0 !== ju && uu.add(ju);
          else uu.add(this._renderTarget);
        void 0 !== this._renderTargetDepth && uu.add(this._renderTargetDepth)
      }
      setOutputLayerAndFaceIndices(uu) {
        const Eu = this.frameGraphRenderTarget.renderTargetWrapper;
        if (Eu)
          for (const ju of uu) Eu.setLayerAndFaceIndex(ju.targetIndex, ju.layerIndex, ju.faceIndex)
      }
      _initialize() {
        this._frameGraphRenderTarget = this._context.createRenderTarget(this.name, this._renderTarget, this._renderTargetDepth, this.depthReadOnly, this.stencilReadOnly), super._initialize()
      }
      _execute() {
        this._context.bindRenderTarget(this._frameGraphRenderTarget), super._execute(), this._context.restoreDefaultFramebuffer()
      }
      _isValid() {
        const uu = super._isValid();
        return uu || (void 0 !== this._renderTarget || void 0 !== this.renderTargetDepth ? null : "Render target and render target depth cannot both be undefined.")
      }
      _dispose() {
        this._frameGraphRenderTarget?.dispose()
      }
    }
    var Gu = ju(37514);
    class pu {
      get name() {
        return this._name
      }
      set name(uu) {
        this._name = uu
      }
      get disabled() {
        return this._disabled
      }
      set disabled(uu) {
        this._disabled = uu
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
      constructor(uu, Eu) {
        this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new Gu.d, this.onBeforeTaskExecute = new Gu.d, this.onAfterTaskExecute = new Gu.d, this.name = uu, this._frameGraph = Eu, this._reset()
      }
      _reset() {
        for (const uu of this._passes) uu._dispose();
        for (const uu of this._passesDisabled) uu._dispose();
        this._passes.length = 0, this._passesDisabled.length = 0
      }
      _addPass(uu, Eu) {
        Eu ? this._passesDisabled.push(uu) : this._passes.push(uu)
      }
      _checkTask() {
        let uu, Eu = null,
          ju = null;
        for (const lu of this._passes) {
          const su = lu._isValid();
          if (su) throw new Error(`Pass "${lu.name}" is not valid. ${su}`);
          if (eu.IsRenderPass(lu)) {
            const uu = Array.isArray(lu.renderTarget) ? lu.renderTarget : [lu.renderTarget];
            Eu = [];
            for (const ju of uu) void 0 !== ju && Eu.push(this._frameGraph.textureManager.getTextureFromHandle(ju));
            ju = void 0 !== lu.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(lu.renderTargetDepth) : null
          } else Mu.IsObjectListPass(lu) && (uu = lu.objectList)
        }
        let su, Uu = null,
          Zu = [],
          Xu = null;
        for (const lu of this._passesDisabled) {
          const uu = lu._isValid();
          if (uu) throw new Error(`Pass "${lu.name}" is not valid. ${uu}`);
          if (eu.IsRenderPass(lu)) {
            const uu = Array.isArray(lu.renderTarget) ? lu.renderTarget : [lu.renderTarget];
            Uu = [];
            for (const Eu of uu) void 0 !== Eu && Uu.push(this._frameGraph.textureManager.getTextureFromHandle(Eu));
            Zu = uu, Xu = void 0 !== lu.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(lu.renderTargetDepth) : null
          } else Mu.IsObjectListPass(lu) && (su = lu.objectList)
        }
        if (this._passesDisabled.length > 0) {
          if (!this._checkSameRenderTarget(Eu, Uu)) {
            let uu = !0;
            for (const Eu of Zu)
              if (void 0 !== Eu && !this._frameGraph.textureManager.isHistoryTexture(Eu)) {
                uu = !1;
                break
              } if (!uu) throw new Error(`The output texture of the task "${this.name}" is different when it is enabled or disabled.`)
          }
          if (ju !== Xu && null !== Xu) throw new Error(`The output depth texture of the task "${this.name}" is different when it is enabled or disabled.`);
          if (uu !== su && null !== su) throw new Error(`The output object list of the task "${this.name}" is different when it is enabled or disabled.`)
        }
      }
      _execute() {
        const uu = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
        this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const Eu of uu) Eu._execute()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
        this.onAfterTaskExecute.notifyObservers(this)
      }
      _initializePasses() {
        this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const uu of this._passes) uu._initialize();
          for (const uu of this._passesDisabled) uu._initialize()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
      }
      _checkSameRenderTarget(uu, Eu) {
        if (null === uu || null === Eu) return uu === Eu;
        if (uu.length !== Eu.length) return !1;
        for (let ju = 0; ju < uu.length; ju++)
          if (uu[ju] !== Eu[ju]) return !1;
        return !0
      }
    }
    class wu extends pu {
      get alphaMode() {
        return this.postProcess.alphaMode
      }
      set alphaMode(uu) {
        this.postProcess.alphaMode = uu
      }
      get drawWrapper() {
        return this._postProcessDrawWrapper
      }
      constructor(uu, Eu, ju) {
        super(uu, Eu), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = ju, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture = this._frameGraph.textureManager.createDanglingHandle(), this.outputDepthAttachmentTexture = this._frameGraph.textureManager.createDanglingHandle()
      }
      isReady() {
        return this.postProcess.isReady()
      }
      getClassName() {
        return "FrameGraphPostProcessTask"
      }
      record() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Eu = arguments.length > 1 ? arguments[1] : void 0,
          ju = arguments.length > 2 ? arguments[2] : void 0;
        if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
        const su = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
        if (su && (su.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, su), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentTexture, this.depthAttachmentTexture), su) {
          const uu = this._frameGraph.textureManager.getTextureAbsoluteDimensions(su);
          this._sourceWidth = uu.width, this._sourceHeight = uu.height
        }
        const Uu = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
        this._outputWidth = Uu.size.width, this._outputHeight = Uu.size.height;
        const Zu = this._frameGraph.addRenderPass(this.name);
        if (Zu.depthReadOnly = this.depthReadOnly, Zu.stencilReadOnly = this.stencilReadOnly, Zu.addDependencies(this.sourceTexture), Zu.setRenderTarget(this.outputTexture), Zu.setRenderTargetDepth(this.depthAttachmentTexture), Zu.setExecuteFunc((uu => {
            uu.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && uu.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), Eu?.(uu), this.viewport && uu.setViewport(this.viewport), uu.applyFullScreenEffect(this._postProcessDrawWrapper, (() => {
              void 0 !== this.sourceTexture && uu.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), ju?.(uu), this.postProcess.bind()
            }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), uu.restoreDefaultFramebuffer(), uu.popDebugGroup()
          })), !uu) {
          const uu = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
          uu.depthReadOnly = this.depthReadOnly, uu.stencilReadOnly = this.stencilReadOnly, uu.addDependencies(this.sourceTexture), uu.setRenderTarget(this.outputTexture), uu.setRenderTargetDepth(this.depthAttachmentTexture), uu.setExecuteFunc((uu => {
            void 0 !== this.sourceTexture && 0 === this.alphaMode && (this.viewport && uu.setViewport(this.viewport), uu.copyTexture(this.sourceTexture, void 0, void 0 !== this.viewport))
          }))
        }
        return Zu
      }
      dispose() {
        this.postProcess.dispose(), super.dispose()
      }
    }
    class Ju extends wu {
      constructor(uu, Eu, ju) {
        super(uu, Eu, ju || new Cu(uu, Eu.engine))
      }
      getClassName() {
        return "FrameGraphFXAATask"
      }
      record() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Eu = arguments.length > 1 ? arguments[1] : void 0,
          ju = arguments.length > 2 ? arguments[2] : void 0;
        const su = super.record(uu, Eu, ju);
        return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, su
      }
    }
    var du = ju(42093);
    class au extends wu {
      constructor(uu, Eu, ju) {
        super(uu, Eu, ju || new du.f(uu, Eu.engine))
      }
      getClassName() {
        return "FrameGraphPassTask"
      }
    }
    var Pu = ju(40350),
      ou = ju(40430),
      ku = ju(40393),
      mu = ju(40506),
      vu = ju(37680);
    class Ku {
      getRenderCamera(uu) {
        if (this._renderCamera) return this._renderCamera;
        {
          let Eu;
          return Eu = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, uu && Eu && Eu.isRigCamera ? Eu.rigParent : Eu
        }
      }
      setRenderCamera(uu) {
        this._renderCamera = uu
      }
      _getSharedGizmoLight() {
        return this._sharedGizmoLight || (this._sharedGizmoLight = new mu.e("shared gizmo light", new fu.t(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = vu.c.Gray()), this._sharedGizmoLight
      }
      static get DefaultUtilityLayer() {
        return null == Ku._DefaultUtilityLayer ? Ku._CreateDefaultUtilityLayerFromScene(qu.b.LastCreatedScene) : Ku._DefaultUtilityLayer
      }
      static _CreateDefaultUtilityLayerFromScene(uu) {
        return Ku._DefaultUtilityLayer = new Ku(uu), Ku._DefaultUtilityLayer.originalScene.wV.addOnce((() => {
          Ku._DefaultUtilityLayer = null
        })), Ku._DefaultUtilityLayer
      }
      static get DefaultKeepDepthUtilityLayer() {
        return null == Ku._DefaultKeepDepthUtilityLayer ? Ku._CreateDefaultKeepUtilityLayerFromScene(qu.b.LastCreatedScene) : Ku._DefaultKeepDepthUtilityLayer
      }
      static _CreateDefaultKeepUtilityLayerFromScene(uu) {
        return Ku._DefaultKeepDepthUtilityLayer = new Ku(uu), Ku._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, Ku._DefaultKeepDepthUtilityLayer.originalScene.wV.addOnce((() => {
          Ku._DefaultKeepDepthUtilityLayer = null
        })), Ku._DefaultKeepDepthUtilityLayer
      }
      constructor(uu) {
        let Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.originalScene = uu, this.handleEvents = Eu, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.processAllEvents = !1, this.pickingEnabled = !0, this.onPointerOutObservable = new Gu.d, this.utilityLayerScene = new Pu.f(uu.wO(), {
          virtual: !0,
          useFloatingOrigin: uu.floatingOriginMode
        }), this.utilityLayerScene.useRightHandedSystem = uu.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), Eu && (this._originalPointerObserver = uu.onPrePointerObservable.add((Eu => {
          if (!this.utilityLayerScene.activeCamera) return;
          if (!this.pickingEnabled) return;
          if (!this.processAllEvents && Eu.type !== ou.d.POINTERMOVE && Eu.type !== ou.d.POINTERUP && Eu.type !== ou.d.POINTERDOWN && Eu.type !== ou.d.POINTERDOUBLETAP) return;
          this.utilityLayerScene.pointerX = uu.pointerX, this.utilityLayerScene.pointerY = uu.pointerY;
          const ju = Eu.event;
          if (uu.isPointerCaptured(ju.pointerId)) return void(this._pointerCaptures[ju.pointerId] = !1);
          const su = ju => {
              let su;
              if (Eu.nearInteractionPickingInfo) su = Eu.nearInteractionPickingInfo.pickedMesh.hV() == ju ? Eu.nearInteractionPickingInfo : new ku.b;
              else if (ju !== this.utilityLayerScene && Eu.originalPickingInfo) su = Eu.originalPickingInfo;
              else {
                let Uu = null;
                this._renderCamera && (Uu = ju._activeCamera, ju._activeCamera = this._renderCamera, Eu.ray = null), su = Eu.ray ? ju.pickWithRay(Eu.ray) : ju.Hc(uu.pointerX, uu.pointerY), Uu && (ju._activeCamera = Uu)
              }
              return su
            },
            Uu = su(this.utilityLayerScene);
          if (!Eu.ray && Uu && (Eu.ray = Uu.ray), Eu.originalPickingInfo?.aimTransform && Uu && (Uu.aimTransform = Eu.originalPickingInfo.aimTransform, Uu.gripTransform = Eu.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(Eu), this.onlyCheckPointerDownEvents && Eu.type != ou.d.POINTERDOWN) return Eu.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new ou.h(Eu.type, Eu.event, Uu), Eu.type), void(Eu.type === ou.d.POINTERUP && this._pointerCaptures[ju.pointerId] && (this._pointerCaptures[ju.pointerId] = !1));
          if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) Uu && Uu.hit && (Eu.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new ou.h(Eu.type, Eu.event, Uu), Eu.type), Eu.skipOnPointerObservable = !0);
          else {
            const ju = su(uu),
              Zu = Eu.event;
            ju && Uu && (0 === Uu.distance && ju.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(ju.pickedMesh) ? (this._notifyObservers(Eu, ju, Zu), Eu.skipOnPointerObservable = !0) : Eu.type === ou.d.POINTERDOWN ? (this._pointerCaptures[Zu.pointerId] = !0, this._notifyObservers(Eu, ju, Zu)) : Eu.type !== ou.d.POINTERMOVE && Eu.type !== ou.d.POINTERUP || (this._lastPointerEvents[Zu.pointerId] && (this.onPointerOutObservable.notifyObservers(Zu.pointerId), delete this._lastPointerEvents[Zu.pointerId]), this._notifyObservers(Eu, ju, Zu)) : !this._pointerCaptures[Zu.pointerId] && (Uu.distance < ju.distance || 0 === ju.distance) ? (this._notifyObservers(Eu, Uu, Zu), Eu.skipOnPointerObservable || (Eu.skipOnPointerObservable = Uu.distance > 0)) : !this._pointerCaptures[Zu.pointerId] && Uu.distance >= ju.distance && (this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(ju.pickedMesh) ? (this._notifyObservers(Eu, ju, Zu), Eu.skipOnPointerObservable = !0) : (Eu.type !== ou.d.POINTERMOVE && Eu.type !== ou.d.POINTERUP || this._lastPointerEvents[Zu.pointerId] && (this.onPointerOutObservable.notifyObservers(Zu.pointerId), delete this._lastPointerEvents[Zu.pointerId]), this._notifyObservers(Eu, Uu, Zu))), Eu.type === ou.d.POINTERUP && this._pointerCaptures[Zu.pointerId] && (this._pointerCaptures[Zu.pointerId] = !1))
          }
        })), this._originalPointerObserver && uu.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, ju || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((uu => {
          this.shouldRender && uu == this.getRenderCamera() && this.render()
        }))), this._sceneDisposeObserver = this.originalScene.wV.add((() => {
          this.dispose()
        })), this._updateCamera()
      }
      _notifyObservers(uu, Eu, ju) {
        uu.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new ou.h(uu.type, uu.event, Eu), uu.type), this._lastPointerEvents[ju.pointerId] = !0)
      }
      render() {
        if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
          const uu = this.utilityLayerScene.activeCamera.hV(),
            Eu = this.utilityLayerScene.activeCamera;
          Eu._scene = this.utilityLayerScene, Eu.leftCamera && (Eu.leftCamera._scene = this.utilityLayerScene), Eu.rightCamera && (Eu.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), Eu._scene = uu, Eu.leftCamera && (Eu.leftCamera._scene = uu), Eu.rightCamera && (Eu.rightCamera._scene = uu)
        }
      }
      dispose() {
        this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.wV.remove(this._sceneDisposeObserver), this._originalPointerObserver && this.originalScene.onPrePointerObservable.remove(this._originalPointerObserver), this.utilityLayerScene.dispose()
      }
      _updateCamera() {
        this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
      }
    }
    Ku._DefaultUtilityLayer = null, Ku._DefaultKeepDepthUtilityLayer = null;
    const Vu = {
      FindMainCamera: function(uu) {
        return uu.findMainCamera()
      },
      FindMainObjectRenderer: function(uu) {
        return uu.findMainObjectRenderer()
      },
      CreateUtilityLayerRenderer: function(uu) {
        let Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const ju = uu.vY,
          su = new Ku(ju, Eu, !0);
        su.utilityLayerScene.activeCamera = ju.activeCamera;
        let Uu = Vu.FindMainCamera(ju.frameGraph);
        !Uu && ju.cameras.length > 0 && (Uu = ju.cameras[0]), Uu && (su.setRenderCamera(Uu), su.utilityLayerScene.activeCamera = Uu);
        const Zu = ju.onAfterRenderObservable.add((() => {
          su.render()
        }));
        return su.utilityLayerScene.wV.addOnce((() => {
          ju.onAfterRenderObservable.remove(Zu)
        })), su
      }
    };
    let ru = null;

    function Qu(uu, Eu, ju, su) {
      let Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        Zu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Xu = arguments.length > 6 ? arguments[6] : void 0,
        lu = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        qu = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
      const {
        height: fu,
        width: Cu
      } = Bu(uu, Eu, ju);
      if (!fu || !Cu) return void cu.b.Error("Invalid 'size' parameter !");
      const bu = Eu.hV();
      let Ou = bu.activeCamera !== Eu;
      if (bu.frameGraph) {
        const uu = Vu.FindMainObjectRenderer(bu.frameGraph);
        uu && (Ou = uu.camera !== Eu)
      }
      Ou ? Su(uu, Eu, ju, (uu => {
        if (Zu) {
          const Eu = new Blob([uu]);
          Nu.h.DownloadBlob(Eu), su && su("")
        } else su && su(uu)
      }), Uu, 1, uu.getCreationOptions().antialias, void 0, void 0, void 0, void 0, Xu) : uu.onEndFrameObservable.addOnce((() => {
        ru || (ru = document.createElement("canvas")), ru.width = Cu, ru.height = fu;
        const Eu = ru.getContext("2d"),
          ju = uu.getRenderingCanvas();
        if (!Eu || !ju) return void cu.b.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
        const Ou = ju.width,
          Yu = ju.height,
          hu = ru.width,
          Du = ru.height,
          gu = hu / Ou,
          Mu = Du / Yu,
          eu = lu ? Math.max(gu, Mu) : Math.min(gu, Mu),
          Gu = Ou * eu,
          pu = Yu * eu,
          wu = (hu - Gu) / 2,
          Ju = (Du - pu) / 2;
        Eu.save(), Eu.fillStyle = qu ? bu.clearColor.toHexString() : "rgba(0, 0, 0, 0)", Eu.fillRect(0, 0, Cu, fu), Eu.restore(), Eu.drawImage(ju, 0, 0, Ou, Yu, wu, Ju, Gu, pu), Zu ? (Nu.h.EncodeScreenshotCanvasData(ru, void 0, Uu, void 0, Xu), su && su("")) : Nu.h.EncodeScreenshotCanvasData(ru, su, Uu, void 0, Xu)
      }))
    }
    async function iu(uu, Eu, ju) {
      let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Uu = arguments.length > 4 ? arguments[4] : void 0,
        Zu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Xu = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        lu = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      return await new Promise(((qu, fu) => {
        Qu(uu, Eu, ju, (uu => {
          "undefined" !== typeof uu ? qu(uu) : fu(new Error("Data is undefined"))
        }), su, lu, Uu, Zu, Xu)
      }))
    }
    async function Wu(uu, Eu, ju, su) {
      let Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        Zu = arguments.length > 5 ? arguments[5] : void 0,
        Xu = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return await new Promise((lu => {
        Qu(uu, Eu, {
          width: ju,
          height: su
        }, (() => {
          lu()
        }), Uu, !0, Zu, Xu)
      }))
    }

    function Su(uu, Eu, Zu, Xu) {
      let lu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        qu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
        fu = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Cu = arguments.length > 7 ? arguments[7] : void 0,
        Nu = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Du = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        gu = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
        Mu = arguments.length > 11 ? arguments[11] : void 0,
        eu = arguments.length > 12 ? arguments[12] : void 0,
        Gu = arguments.length > 13 ? arguments[13] : void 0,
        pu = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
        wu = arguments.length > 15 ? arguments[15] : void 0;
      const Ju = Eu.hV();
      if (Ju.frameGraph) return void Fu(Ju.frameGraph, Eu, Zu, lu, qu, fu, Cu, Mu, Gu, !Xu).then((uu => {
        Xu && Xu(uu)
      }));
      const {
        height: du,
        width: au,
        finalWidth: Pu,
        finalHeight: ou
      } = Bu(uu, Eu, Zu), ku = {
        width: au,
        height: du
      };
      if (!du || !au) return void cu.b.Error("Invalid 'size' parameter !");
      uu.skipFrameRender = !0;
      const mu = uu.getRenderWidth,
        vu = uu.getRenderHeight;
      uu.getRenderWidth = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && uu._currentRenderTarget ? uu._currentRenderTarget.width : au
      }, uu.getRenderHeight = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && uu._currentRenderTarget ? uu._currentRenderTarget.height : du
      }, uu.onResizeObservable.hasObservers() && uu.onResizeObservable.notifyObservers(uu);
      const Ku = new Uu.b("screenShot", ku, Ju, !1, !1, 0, !1, su.g.BILINEAR_SAMPLINGMODE, void 0, Du, void 0, void 0, void 0, qu);
      Ku.renderList = Ju.meshes.slice(), Ku.samples = qu, Ku.renderSprites = Nu, Ku.activeCamera = Eu, Ku.forceLayerMaskCheck = gu, eu?.(Ku);
      const Vu = Gu || Ou.DumpData,
        ru = () => {
          Ju.incrementRenderId(), Ju.resetCachedMaterial(), (0, hu.d)((() => Ku.isReadyForRendering() && Eu.isReady(!0)), (() => {
            uu.onEndFrameObservable.addOnce((() => {
              Pu === au && ou === du ? Ku.readPixels(void 0, void 0, void 0, !1).then((uu => {
                Vu(au, du, uu, Xu, lu, Cu, !0, void 0, Mu), Ku.dispose()
              })) : (uu.isWebGPU ? ju.e(375).then((() => ju(61679))) : ju.e(376).then((() => ju(61682)))).then((async () => await (0, Yu.c)("pass", Ku.getInternalTexture(), Ju, void 0, void 0, void 0, Pu, ou).then((Eu => {
                uu._readTexturePixels(Eu, Pu, ou, -1, 0, null, !0, !1, 0, 0).then((uu => {
                  Vu(Pu, ou, uu, Xu, lu, Cu, !0, void 0, Mu), Eu.dispose()
                }))
              }))))
            })), Ju.incrementRenderId(), Ju.resetCachedMaterial();
            const su = Ju.activeCamera,
              Uu = Ju.activeCameras,
              Zu = Eu.outputRenderTarget,
              qu = Ju.spritesEnabled;
            Ju.activeCamera = Eu, Ju.activeCameras = null, Eu.outputRenderTarget = Ku, Ju.spritesEnabled = Nu;
            const fu = Ju.meshes;
            Ju.meshes = Ku.renderList || Ju.meshes;
            try {
              Ju.render()
            } finally {
              Ju.activeCamera = su, Ju.activeCameras = Uu, Eu.outputRenderTarget = Zu, Ju.spritesEnabled = qu, Ju.meshes = fu, uu.getRenderWidth = mu, uu.getRenderHeight = vu, uu.onResizeObservable.hasObservers() && uu.onResizeObservable.notifyObservers(uu), Eu.getProjectionMatrix(!0), uu.skipFrameRender = !1
            }
          }), (() => {
            uu.skipFrameRender = !1, uu.getRenderWidth = mu, uu.getRenderHeight = vu, wu?.()
          }), void 0, pu)
        };
      if (fu) {
        const uu = new bu("antialiasing", 1, Ju.activeCamera);
        Ku.addPostProcess(uu), uu.autoClear = !0, uu.onEffectCreatedObservable.addOnce((uu => {
          uu.isReady() ? ru() : uu.onCompiled = () => {
            ru()
          }
        }))
      } else ru()
    }
    async function Iu(uu, Eu, ju) {
      let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        Zu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Xu = arguments.length > 6 ? arguments[6] : void 0,
        lu = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        qu = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        fu = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
        Cu = arguments.length > 10 ? arguments[10] : void 0,
        bu = arguments.length > 11 ? arguments[11] : void 0,
        cu = arguments.length > 12 ? arguments[12] : void 0;
      return await new Promise(((Nu, Ou) => {
        Su(uu, Eu, ju, (uu => {
          "undefined" !== typeof uu ? Nu(uu) : Ou(new Error("Data is undefined"))
        }), su, Uu, Zu, Xu, lu, qu, fu, Cu, bu, cu)
      }))
    }
    async function Fu(uu, Eu, ju) {
      let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        Zu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Xu = arguments.length > 6 ? arguments[6] : void 0,
        lu = arguments.length > 7 ? arguments[7] : void 0,
        qu = arguments.length > 8 ? arguments[8] : void 0,
        fu = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        Cu = arguments.length > 10 ? arguments[10] : void 0;
      const bu = uu.engine,
        cu = uu.textureManager,
        {
          height: Nu,
          width: Yu,
          finalWidth: hu,
          finalHeight: gu
        } = Bu(bu, Eu, ju),
        Mu = {
          width: Yu,
          height: Nu
        },
        eu = qu || Ou.DumpData,
        Gu = uu.tasks,
        pu = Gu.length,
        wu = uu.pausedExecution,
        du = bu.getCaps().parallelShaderCompile;
      cu.setBackBufferTextures(0, 0, {
        size: Mu,
        options: {
          createMipMaps: !1,
          samples: Uu,
          types: [0],
          formats: [5],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot color"]
        },
        sizeIsPercentage: !1
      }, {
        size: Mu,
        options: {
          createMipMaps: !1,
          samples: Uu,
          types: [0],
          formats: [bu.isStencilEnable ? 13 : 14],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot depth"]
        },
        sizeIsPercentage: !1
      });
      let Pu = Du;
      if (Zu) {
        const Eu = new Ju("fxaa", uu);
        Eu.sourceTexture = Pu, Pu = Eu.outputTexture, uu.addTask(Eu)
      }
      if (hu !== Yu || gu !== Nu) {
        const Eu = new au("pass", uu);
        Eu.sourceTexture = Pu, Eu.targetTexture = uu.textureManager.createRenderTargetTexture("pass_output", {
          size: {
            width: hu,
            height: gu
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
        }), Pu = Eu.outputTexture, uu.addTask(Eu)
      }
      const ou = Vu.FindMainObjectRenderer(uu);
      let ku = null;
      ou && (ku = ou.camera, ou.camera = Eu), bu.getCaps().parallelShaderCompile = void 0, await uu.buildAsync();
      const mu = Cu ?? (cu.hasHistoryTextures ? 32 : 1);
      for (let Ou = 0; Ou < mu; ++Ou) uu.execute();
      uu.pausedExecution = !0, bu.getCaps().parallelShaderCompile = du;
      for (let Ou = pu; Ou < Gu.length; ++Ou) uu.tasks[Ou].dispose();
      uu.tasks.length = pu, ou && ku && (ou.camera = ku);
      const vu = uu.textureManager.getTextureFromHandle(Pu);
      return vu.incrementReferences(), cu.resetBackBufferTextures(), await uu.buildAsync(), uu.pausedExecution = wu, new Promise((uu => {
        bu._readTexturePixels(vu, hu, gu, -1, 0, null, !0, !1, 0, 0).then((async Eu => {
          vu.dispose(), eu(hu, gu, Eu, fu ? void 0 : Eu => uu(Eu), su, Xu, !0, void 0, lu), fu && uu(null)
        }))
      }))
    }

    function Bu(uu, Eu, ju) {
      let su = 0,
        Uu = 0,
        Zu = 0,
        Xu = 0;
      if ("object" === typeof ju) {
        const lu = ju.precision ? Math.abs(ju.precision) : 1;
        ju.width && ju.height ? (su = ju.height * lu, Uu = ju.width * lu) : ju.width && !ju.height ? (Uu = ju.width * lu, su = Math.round(Uu / uu.getAspectRatio(Eu))) : ju.height && !ju.width ? (su = ju.height * lu, Uu = Math.round(su * uu.getAspectRatio(Eu))) : (Uu = Math.round(uu.getRenderWidth() * lu), su = Math.round(Uu / uu.getAspectRatio(Eu))), ju.finalWidth && ju.finalHeight ? (Xu = ju.finalHeight, Zu = ju.finalWidth) : ju.finalWidth && !ju.finalHeight ? (Zu = ju.finalWidth, Xu = Math.round(Zu / uu.getAspectRatio(Eu))) : ju.finalHeight && !ju.finalWidth ? (Xu = ju.finalHeight, Zu = Math.round(Xu * uu.getAspectRatio(Eu))) : (Zu = Uu, Xu = su)
      } else isNaN(ju) || (su = ju, Uu = ju, Zu = ju, Xu = ju);
      return Uu && (Uu = Math.floor(Uu)), su && (su = Math.floor(su)), Zu && (Zu = Math.floor(Zu)), Xu && (Xu = Math.floor(Xu)), {
        height: 0 | su,
        width: 0 | Uu,
        finalWidth: 0 | Zu,
        finalHeight: 0 | Xu
      }
    }
    const Lu = {
      CreateScreenshot: Qu,
      CreateScreenshotAsync: iu,
      CreateScreenshotWithResizeAsync: Wu,
      CreateScreenshotUsingRenderTarget: Su,
      CreateScreenshotUsingRenderTargetAsync: Iu,
      CreateScreenshotForFrameGraphAsync: Fu
    };
    let tu = !1;

    function xu() {
      if (tu) return;
      tu = !0;
      Nu.h.CreateScreenshot = Qu, Nu.h.CreateScreenshotAsync = iu, Nu.h.CreateScreenshotUsingRenderTarget = Su, Nu.h.CreateScreenshotUsingRenderTargetAsync = Iu
    }
    xu()
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);