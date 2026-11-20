export const id = 231;
export const ids = [231, 232];
export const modules = {
  39815: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Vu,
      g: () => Bu
    });
    var Eu = yu(39560),
      Ku = yu(39566),
      Qu = yu(36830),
      mu = yu(36991),
      Ju = yu(39823),
      Nu = yu(39780),
      Xu = yu(36871);
    let Vu = (() => {
        var uu;
        let Ru, yu, Nu = Ju.e,
          Xu = [],
          Vu = [],
          ru = [],
          Bu = [];
        return uu = class extends Nu {
          constructor(uu, Ru, yu, Ku) {
            super(uu, yu, Ku), this.groundColor = (0, Eu.l)(this, Xu, new mu.d(0, 0, 0)), this.direction = ((0, Eu.l)(this, Vu), (0, Eu.l)(this, ru, void 0)), (0, Eu.l)(this, Bu), this.direction = Ru || Qu.p.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(uu) {
            return this.direction = Qu.p.Normalize(uu.subtract(Qu.p.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(uu, Ru) {
            const yu = Qu.p.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", yu.x, yu.y, yu.z, 0, Ru), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), Ru), this
          }
          transferToNodeMaterialEffect(uu, Ru) {
            const yu = Qu.p.Normalize(this.direction);
            return uu.setFloat3(Ru, yu.x, yu.y, yu.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = Qu.d.Identity()), this._worldMatrix
          }
          getTypeID() {
            return Ju.e.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(uu, Ru) {
            uu["HEMILIGHT" + Ru] = !0
          }
        }, (() => {
          const Qu = "function" === typeof Symbol && Symbol.metadata ? Object.create(Nu[Symbol.metadata] ?? null) : void 0;
          Ru = [(0, Ku.n)()], yu = [(0, Ku.G)()], (0, Eu.h)(null, null, Ru, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: uu => "groundColor" in uu,
              get: uu => uu.groundColor,
              set: (uu, Ru) => {
                uu.groundColor = Ru
              }
            },
            metadata: Qu
          }, Xu, Vu), (0, Eu.h)(null, null, yu, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: uu => "direction" in uu,
              get: uu => uu.direction,
              set: (uu, Ru) => {
                uu.direction = Ru
              }
            },
            metadata: Qu
          }, ru, Bu), Qu && Object.defineProperty(uu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Qu
          })
        })(), uu
      })(),
      ru = !1;

    function Bu() {
      ru || (ru = !0, Nu.e.AddNodeConstructor("Light_Type_3", ((uu, Ru) => () => new Vu(uu, Qu.p.Zero(), Ru))), (0, Xu.c)("BABYLON.HemisphericLight", Vu))
    }
  },
  37525: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Ku
    });
    var Eu = yu(37528);
    class Ku {
      static GetPlanes(uu) {
        const Ru = [];
        for (let yu = 0; yu < 6; yu++) Ru.push(new Eu.d(0, 0, 0, 0));
        return Ku.GetPlanesToRef(uu, Ru), Ru
      }
      static GetNearPlaneToRef(uu, Ru) {
        const yu = uu.m;
        Ru.normal.x = yu[3] + yu[2], Ru.normal.y = yu[7] + yu[6], Ru.normal.z = yu[11] + yu[10], Ru.d = yu[15] + yu[14], Ru.normalize()
      }
      static GetFarPlaneToRef(uu, Ru) {
        const yu = uu.m;
        Ru.normal.x = yu[3] - yu[2], Ru.normal.y = yu[7] - yu[6], Ru.normal.z = yu[11] - yu[10], Ru.d = yu[15] - yu[14], Ru.normalize()
      }
      static GetLeftPlaneToRef(uu, Ru) {
        const yu = uu.m;
        Ru.normal.x = yu[3] + yu[0], Ru.normal.y = yu[7] + yu[4], Ru.normal.z = yu[11] + yu[8], Ru.d = yu[15] + yu[12], Ru.normalize()
      }
      static GetRightPlaneToRef(uu, Ru) {
        const yu = uu.m;
        Ru.normal.x = yu[3] - yu[0], Ru.normal.y = yu[7] - yu[4], Ru.normal.z = yu[11] - yu[8], Ru.d = yu[15] - yu[12], Ru.normalize()
      }
      static GetTopPlaneToRef(uu, Ru) {
        const yu = uu.m;
        Ru.normal.x = yu[3] - yu[1], Ru.normal.y = yu[7] - yu[5], Ru.normal.z = yu[11] - yu[9], Ru.d = yu[15] - yu[13], Ru.normalize()
      }
      static GetBottomPlaneToRef(uu, Ru) {
        const yu = uu.m;
        Ru.normal.x = yu[3] + yu[1], Ru.normal.y = yu[7] + yu[5], Ru.normal.z = yu[11] + yu[9], Ru.d = yu[15] + yu[13], Ru.normalize()
      }
      static GetPlanesToRef(uu, Ru) {
        Ku.GetNearPlaneToRef(uu, Ru[0]), Ku.GetFarPlaneToRef(uu, Ru[1]), Ku.GetLeftPlaneToRef(uu, Ru[2]), Ku.GetRightPlaneToRef(uu, Ru[3]), Ku.GetTopPlaneToRef(uu, Ru[4]), Ku.GetBottomPlaneToRef(uu, Ru[5])
      }
      static IsPointInFrustum(uu, Ru) {
        for (let yu = 0; yu < 6; yu++)
          if (Ru[yu].dotCoordinate(uu) < 0) return !1;
        return !0
      }
    }
  },
  37528: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Ku
    });
    var Eu = yu(36830);
    class Ku {
      constructor(uu, Ru, yu, Ku) {
        this.normal = new Eu.p(uu, Ru, yu), this.d = Ku
      }
      AEu() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Ku(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let Ru = 0;
        return 0 !== uu && (Ru = 1 / uu), this.normal.x *= Ru, this.normal.y *= Ru, this.normal.z *= Ru, this.d *= Ru, this
      }
      transform(uu) {
        const Ru = Ku._TmpMatrix;
        uu.invertToRef(Ru);
        const yu = Ru.m,
          Eu = this.normal.x,
          Qu = this.normal.y,
          mu = this.normal.z,
          Ju = this.d,
          Nu = Eu * yu[0] + Qu * yu[1] + mu * yu[2] + Ju * yu[3],
          Xu = Eu * yu[4] + Qu * yu[5] + mu * yu[6] + Ju * yu[7],
          Vu = Eu * yu[8] + Qu * yu[9] + mu * yu[10] + Ju * yu[11],
          ru = Eu * yu[12] + Qu * yu[13] + mu * yu[14] + Ju * yu[15];
        return new Ku(Nu, Xu, Vu, ru)
      }
      dotCoordinate(uu) {
        return this.normal.x * uu.x + this.normal.y * uu.y + this.normal.z * uu.z + this.d
      }
      copyFromPoints(uu, Ru, yu) {
        const Eu = Ru.x - uu.x,
          Ku = Ru.y - uu.y,
          Qu = Ru.z - uu.z,
          mu = yu.x - uu.x,
          Ju = yu.y - uu.y,
          Nu = yu.z - uu.z,
          Xu = Ku * Nu - Qu * Ju,
          Vu = Qu * mu - Eu * Nu,
          ru = Eu * Ju - Ku * mu,
          Bu = Math.sqrt(Xu * Xu + Vu * Vu + ru * ru);
        let xu;
        return xu = 0 !== Bu ? 1 / Bu : 0, this.normal.x = Xu * xu, this.normal.y = Vu * xu, this.normal.z = ru * xu, this.d = -(this.normal.x * uu.x + this.normal.y * uu.y + this.normal.z * uu.z), this
      }
      isFrontFacingTo(uu, Ru) {
        return Eu.p.Dot(this.normal, uu) <= Ru
      }
      signedDistanceTo(uu) {
        return Eu.p.Dot(uu, this.normal) + this.d
      }
      static FromArray(uu) {
        return new Ku(uu[0], uu[1], uu[2], uu[3])
      }
      static FromPoints(uu, Ru, yu) {
        const Eu = new Ku(0, 0, 0, 0);
        return Eu.copyFromPoints(uu, Ru, yu), Eu
      }
      static FromPositionAndNormal(uu, Ru) {
        const yu = new Ku(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(uu, Ru, yu)
      }
      static FromPositionAndNormalToRef(uu, Ru, yu) {
        return yu.normal.Oyu(Ru), yu.normal.normalize(), yu.d = -uu.dot(yu.normal), yu
      }
      static SignedDistanceToPlaneFromPositionAndNormal(uu, Ru, yu) {
        const Ku = -(Ru.x * uu.x + Ru.y * uu.y + Ru.z * uu.z);
        return Eu.p.Dot(yu, Ru) + Ku
      }
    }
    Ku._TmpMatrix = Eu.d.Identity()
  },
  37842: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Eu
    });
    class Eu {
      constructor(uu, Ru, yu, Eu) {
        this.x = uu, this.y = Ru, this.width = yu, this.height = Eu
      }
      toGlobal(uu, Ru) {
        return new Eu(this.x * uu, this.y * Ru, this.width * uu, this.height * Ru)
      }
      toGlobalToRef(uu, Ru, yu) {
        return yu.x = this.x * uu, yu.y = this.y * Ru, yu.width = this.width * uu, yu.height = this.height * Ru, this
      }
      clone() {
        return new Eu(this.x, this.y, this.width, this.height)
      }
    }
  },
  38444: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Qu
    });
    var Eu = yu(38448);
    const Ku = (uu, Ru, yu) => uu ? uu.getClassName && "Mesh" === uu.getClassName() ? null : !uu.getClassName || "SubMesh" !== uu.getClassName() && "PhysicsBody" !== uu.getClassName() ? uu.clone ? uu.clone() : Array.isArray(uu) ? uu.slice() : yu && "object" === typeof uu ? {
      ...uu
    } : null : uu.clone(Ru) : null;
    class Qu {
      static DeepCopy(uu, Ru, yu, Qu) {
        let mu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Ju = function(uu) {
          const Ru = [];
          do {
            const yu = Object.getOwnPropertyNames(uu);
            for (const uu of yu) - 1 === Ru.indexOf(uu) && Ru.push(uu)
          } while (uu = Object.getPrototypeOf(uu));
          return Ru
        }(uu);
        for (const Xu of Ju) {
          if ("_" === Xu[0] && (!Qu || -1 === Qu.indexOf(Xu))) continue;
          if (Xu.endsWith("Observable")) continue;
          if (yu && -1 !== yu.indexOf(Xu)) continue;
          const Ju = uu[Xu],
            Vu = typeof Ju;
          if ("function" !== Vu) try {
            if ("object" === Vu)
              if (Ju instanceof Uint8Array) Ru[Xu] = Uint8Array.from(Ju);
              else if (Ju instanceof Array) {
              if (Ru[Xu] = [], Ju.length > 0)
                if ("object" == typeof Ju[0])
                  for (let uu = 0; uu < Ju.length; uu++) {
                    const yu = Ku(Ju[uu], Ru, mu); - 1 === Ru[Xu].indexOf(yu) && Ru[Xu].push(yu)
                  } else Ru[Xu] = Ju.slice(0)
            } else Ru[Xu] = Ku(Ju, Ru, mu);
            else Ru[Xu] = Ju
          } catch (Nu) {
            Eu.e.Warn(Nu.message)
          }
        }
      }
    }
  },
  37665: (uu, Ru, yu) => {
    function Eu() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (uu => {
        const Ru = 16 * Math.random() | 0;
        return ("x" === uu ? Ru : 3 & Ru | 8).toString(16)
      }))
    }
    yu.d(Ru, {
      b: () => Eu
    })
  },
  38448: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Eu
    });
    class Eu {
      static _CheckLimit(uu, Ru) {
        let yu = Eu._LogLimitOutputs[uu];
        return yu ? yu.current++ : (yu = {
          limit: Ru,
          current: 1
        }, Eu._LogLimitOutputs[uu] = yu), yu.current <= yu.limit
      }
      static _GenerateLimitMessage(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const yu = Eu._LogLimitOutputs[uu];
        if (!yu || !Eu.MessageLimitReached) return;
        const Ku = this._Levels[Ru];
        yu.current === yu.limit && Eu[Ku.name](Eu.MessageLimitReached.replace(/%LIMIT%/g, "" + yu.limit).replace(/%TYPE%/g, Ku.name ?? ""))
      }
      static _AddLogEntry(uu) {
        Eu._LogCache = uu + Eu._LogCache, Eu.OnNewCacheEntry && Eu.OnNewCacheEntry(uu)
      }
      static _FormatMessage(uu) {
        const Ru = uu => uu < 10 ? "0" + uu : "" + uu,
          yu = new Date;
        return "[" + Ru(yu.getHours()) + ":" + Ru(yu.getMinutes()) + ":" + Ru(yu.getSeconds()) + "]: " + uu
      }
      static _LogDisabled(uu, Ru) {}
      static _LogEnabled() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Ru = arguments.length > 1 ? arguments[1] : void 0,
          yu = arguments.length > 2 ? arguments[2] : void 0;
        const Ku = Array.isArray(Ru) ? Ru[0] : Ru;
        if (void 0 !== yu && !Eu._CheckLimit(Ku, yu)) return;
        const Qu = Eu._FormatMessage(Ku),
          mu = this._Levels[uu],
          Ju = Array.isArray(Ru) ? Ru.slice(1) : [];
        mu.logFunc && mu.logFunc("BJS - " + Qu, ...Ju);
        const Nu = `<div style='color:${mu.color}'>${Qu}</div><br>`;
        Eu._AddLogEntry(Nu), Eu._GenerateLimitMessage(Ku, uu)
      }
      static get LogCache() {
        return Eu._LogCache
      }
      static ClearLogCache() {
        Eu._LogCache = "", Eu._LogLimitOutputs = {}, Eu.errorsCount = 0
      }
      static set LogLevels(uu) {
        Eu.Log = Eu._LogDisabled, Eu.Warn = Eu._LogDisabled, Eu.Error = Eu._LogDisabled;
        const Ru = [Eu.MessageLogLevel, Eu.WarningLogLevel, Eu.ErrorLogLevel];
        for (const yu of Ru)
          if ((uu & yu) === yu) {
            const uu = this._Levels[yu];
            Eu[uu.name] = Eu._LogEnabled.bind(Eu, yu)
          }
      }
    }
    Eu.NoneLogLevel = 0, Eu.MessageLogLevel = 1, Eu.WarningLogLevel = 2, Eu.ErrorLogLevel = 4, Eu.AllLogLevel = 7, Eu.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Eu._LogCache = "", Eu._LogLimitOutputs = {}, Eu._Levels = [{}, {
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
    }], Eu.errorsCount = 0, Eu.Log = Eu._LogEnabled.bind(Eu, Eu.MessageLogLevel), Eu.Warn = Eu._LogEnabled.bind(Eu, Eu.WarningLogLevel), Eu.Error = Eu._LogEnabled.bind(Eu, Eu.ErrorLogLevel)
  },
  60989: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      CreateScreenshot: () => gu,
      CreateScreenshotAsync: () => cu,
      CreateScreenshotForFrameGraphAsync: () => wu,
      CreateScreenshotUsingRenderTarget: () => zu,
      CreateScreenshotUsingRenderTargetAsync: () => Fu,
      CreateScreenshotWithResizeAsync: () => Lu,
      RegisterScreenshotTools: () => iu,
      ScreenshotTools: () => hu
    });
    var Eu = yu(40054),
      Ku = yu(41392),
      Qu = yu(41369),
      mu = yu(39582),
      Ju = yu(41376),
      Nu = yu(36851),
      Xu = yu(36830);
    class Vu extends Ju.h {
      static _GetDefines(uu) {
        if (!uu) return null;
        return uu.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
      }
      _gatherImports(uu, Ru) {
        uu ? (this._webGPUReady = !0, Ru.push(Promise.all([yu.e(367).then((() => yu(61382))), yu.e(368).then((() => yu(61387)))]))) : Ru.push(Promise.all([yu.e(369).then((() => yu(61396))), yu.e(370).then((() => yu(61405)))]))
      }
      constructor(uu) {
        const Ru = {
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: uu,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || Nu.b.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          vertexShader: Vu.VertexUrl,
          fragmentShader: Vu.FragmentUrl,
          uniforms: Vu.Uniforms
        };
        super({
          ...Ru,
          defines: Vu._GetDefines(Ru.engine)
        }), this.texelSize = new Xu.n(0, 0)
      }
      bind() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.bind(uu), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
      }
    }
    Vu.VertexUrl = "fxaa", Vu.FragmentUrl = "fxaa", Vu.Uniforms = ["texelSize"];
    class ru extends Qu.d {
      getClassName() {
        return "FxaaPostProcess"
      }
      constructor(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Ku = arguments.length > 3 ? arguments[3] : void 0,
          Qu = arguments.length > 4 ? arguments[4] : void 0,
          mu = arguments.length > 5 ? arguments[5] : void 0,
          Ju = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const Nu = {
          uniforms: Vu.Uniforms,
          size: "number" === typeof Ru ? Ru : void 0,
          camera: yu,
          samplingMode: Ku || Eu.h.BILINEAR_SAMPLINGMODE,
          engine: Qu,
          reusable: mu,
          textureType: Ju,
          ...Ru
        };
        super(uu, Vu.FragmentUrl, {
          effectWrapper: "number" !== typeof Ru && Ru.effectWrapper ? void 0 : new Vu(uu, Qu, Nu),
          ...Nu
        }), this.onApplyObservable.add((uu => {
          this._effectWrapper.texelSize = this.texelSize
        }))
      }
      static _Parse(uu, Ru, yu, Eu) {
        return mu.c.Parse((() => new ru(uu.name, uu.options, Ru, uu.renderTargetSamplingMode, yu.eS(), uu.reusable)), uu, yu, Eu)
      }
    }
    var Bu = yu(38448),
      xu = yu(39655),
      Su = yu(41401),
      pu = yu(41384),
      Tu = yu(39447);
    const Wu = 0;
    class ju {
      constructor(uu, Ru, yu) {
        this.name = uu, this._parentTask = Ru, this._context = yu, this.disabled = !1
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
    class Hu extends ju {
      static IsObjectListPass(uu) {
        return void 0 !== uu.setObjectList
      }
      get objectList() {
        return this._objectList
      }
      setObjectList(uu) {
        this._objectList = uu
      }
      constructor(uu, Ru, yu, Eu) {
        super(uu, Ru, yu), this._engine = Eu
      }
      _isValid() {
        const uu = super._isValid();
        return uu || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
      }
    }
    class du extends ju {
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
      constructor(uu, Ru, yu, Eu) {
        super(uu, Ru, yu), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = Eu
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
            for (const Ru of uu) this._dependencies.add(Ru);
          else this._dependencies.add(uu)
      }
      collectDependencies(uu) {
        const Ru = this._dependencies.keys();
        for (let yu = Ru.next(); !0 !== yu.done; yu = Ru.next()) uu.add(yu.value);
        if (void 0 !== this._renderTarget)
          if (Array.isArray(this._renderTarget))
            for (const yu of this._renderTarget) void 0 !== yu && uu.add(yu);
          else uu.add(this._renderTarget);
        void 0 !== this._renderTargetDepth && uu.add(this._renderTargetDepth)
      }
      setOutputLayerAndFaceIndices(uu) {
        const Ru = this.frameGraphRenderTarget.renderTargetWrapper;
        if (Ru)
          for (const yu of uu) Ru.setLayerAndFaceIndex(yu.targetIndex, yu.layerIndex, yu.faceIndex)
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
    var bu = yu(36858);
    class Cu {
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
      constructor(uu, Ru) {
        this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new bu.b, this.onBeforeTaskExecute = new bu.b, this.onAfterTaskExecute = new bu.b, this.name = uu, this._frameGraph = Ru, this._reset()
      }
      _reset() {
        for (const uu of this._passes) uu._dispose();
        for (const uu of this._passesDisabled) uu._dispose();
        this._passes.length = 0, this._passesDisabled.length = 0
      }
      _addPass(uu, Ru) {
        Ru ? this._passesDisabled.push(uu) : this._passes.push(uu)
      }
      _checkTask() {
        let uu, Ru = null,
          yu = null;
        for (const Ju of this._passes) {
          const Eu = Ju._isValid();
          if (Eu) throw new Error(`Pass "${Ju.name}" is not valid. ${Eu}`);
          if (du.IsRenderPass(Ju)) {
            const uu = Array.isArray(Ju.renderTarget) ? Ju.renderTarget : [Ju.renderTarget];
            Ru = [];
            for (const yu of uu) void 0 !== yu && Ru.push(this._frameGraph.textureManager.getTextureFromHandle(yu));
            yu = void 0 !== Ju.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(Ju.renderTargetDepth) : null
          } else Hu.IsObjectListPass(Ju) && (uu = Ju.objectList)
        }
        let Eu, Ku = null,
          Qu = [],
          mu = null;
        for (const Ju of this._passesDisabled) {
          const uu = Ju._isValid();
          if (uu) throw new Error(`Pass "${Ju.name}" is not valid. ${uu}`);
          if (du.IsRenderPass(Ju)) {
            const uu = Array.isArray(Ju.renderTarget) ? Ju.renderTarget : [Ju.renderTarget];
            Ku = [];
            for (const Ru of uu) void 0 !== Ru && Ku.push(this._frameGraph.textureManager.getTextureFromHandle(Ru));
            Qu = uu, mu = void 0 !== Ju.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(Ju.renderTargetDepth) : null
          } else Hu.IsObjectListPass(Ju) && (Eu = Ju.objectList)
        }
        if (this._passesDisabled.length > 0) {
          if (!this._checkSameRenderTarget(Ru, Ku)) {
            let uu = !0;
            for (const Ru of Qu)
              if (void 0 !== Ru && !this._frameGraph.textureManager.isHistoryTexture(Ru)) {
                uu = !1;
                break
              } if (!uu) throw new Error(`The output texture of the task "${this.name}" is different when it is enabled or disabled.`)
          }
          if (yu !== mu && null !== mu) throw new Error(`The output depth texture of the task "${this.name}" is different when it is enabled or disabled.`);
          if (uu !== Eu && null !== Eu) throw new Error(`The output object list of the task "${this.name}" is different when it is enabled or disabled.`)
        }
      }
      _execute() {
        const uu = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
        this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const Ru of uu) Ru._execute()
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
      _checkSameRenderTarget(uu, Ru) {
        if (null === uu || null === Ru) return uu === Ru;
        if (uu.length !== Ru.length) return !1;
        for (let yu = 0; yu < uu.length; yu++)
          if (uu[yu] !== Ru[yu]) return !1;
        return !0
      }
    }
    class ku extends Cu {
      get alphaMode() {
        return this.postProcess.alphaMode
      }
      set alphaMode(uu) {
        this.postProcess.alphaMode = uu
      }
      get drawWrapper() {
        return this._postProcessDrawWrapper
      }
      constructor(uu, Ru, yu) {
        super(uu, Ru), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = yu, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture = this._frameGraph.textureManager.createDanglingHandle(), this.outputDepthAttachmentTexture = this._frameGraph.textureManager.createDanglingHandle()
      }
      isReady() {
        return this.postProcess.isReady()
      }
      getClassName() {
        return "FrameGraphPostProcessTask"
      }
      record() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Ru = arguments.length > 1 ? arguments[1] : void 0,
          yu = arguments.length > 2 ? arguments[2] : void 0;
        if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
        const Eu = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
        if (Eu && (Eu.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, Eu), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentTexture, this.depthAttachmentTexture), Eu) {
          const uu = this._frameGraph.textureManager.getTextureAbsoluteDimensions(Eu);
          this._sourceWidth = uu.width, this._sourceHeight = uu.height
        }
        const Ku = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
        this._outputWidth = Ku.size.width, this._outputHeight = Ku.size.height;
        const Qu = this._frameGraph.addRenderPass(this.name);
        if (Qu.depthReadOnly = this.depthReadOnly, Qu.stencilReadOnly = this.stencilReadOnly, Qu.addDependencies(this.sourceTexture), Qu.setRenderTarget(this.outputTexture), Qu.setRenderTargetDepth(this.depthAttachmentTexture), Qu.setExecuteFunc((uu => {
            uu.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && uu.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), Ru?.(uu), this.viewport && uu.setViewport(this.viewport), uu.applyFullScreenEffect(this._postProcessDrawWrapper, (() => {
              void 0 !== this.sourceTexture && uu.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), yu?.(uu), this.postProcess.bind()
            }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), uu.restoreDefaultFramebuffer(), uu.popDebugGroup()
          })), !uu) {
          const uu = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
          uu.depthReadOnly = this.depthReadOnly, uu.stencilReadOnly = this.stencilReadOnly, uu.addDependencies(this.sourceTexture), uu.setRenderTarget(this.outputTexture), uu.setRenderTargetDepth(this.depthAttachmentTexture), uu.setExecuteFunc((uu => {
            void 0 !== this.sourceTexture && 0 === this.alphaMode && (this.viewport && uu.setViewport(this.viewport), uu.copyTexture(this.sourceTexture, void 0, void 0 !== this.viewport))
          }))
        }
        return Qu
      }
      dispose() {
        this.postProcess.dispose(), super.dispose()
      }
    }
    class eu extends ku {
      constructor(uu, Ru, yu) {
        super(uu, Ru, yu || new Vu(uu, Ru.engine))
      }
      getClassName() {
        return "FrameGraphFXAATask"
      }
      record() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Ru = arguments.length > 1 ? arguments[1] : void 0,
          yu = arguments.length > 2 ? arguments[2] : void 0;
        const Eu = super.record(uu, Ru, yu);
        return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, Eu
      }
    }
    var Au = yu(41399);
    class Du extends ku {
      constructor(uu, Ru, yu) {
        super(uu, Ru, yu || new Au.g(uu, Ru.engine))
      }
      getClassName() {
        return "FrameGraphPassTask"
      }
    }
    var Mu = yu(39647),
      Iu = yu(39745),
      Gu = yu(39698),
      Uu = yu(39815),
      nu = yu(36991);
    class su {
      getRenderCamera(uu) {
        if (this._renderCamera) return this._renderCamera;
        {
          let Ru;
          return Ru = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, uu && Ru && Ru.isRigCamera ? Ru.rigParent : Ru
        }
      }
      setRenderCamera(uu) {
        this._renderCamera = uu
      }
      _getSharedGizmoLight() {
        return this._sharedGizmoLight || (this._sharedGizmoLight = new Uu.e("shared gizmo light", new Xu.p(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = nu.d.Gray()), this._sharedGizmoLight
      }
      static get DefaultUtilityLayer() {
        return null == su._DefaultUtilityLayer ? su._CreateDefaultUtilityLayerFromScene(Nu.b.LastCreatedScene) : su._DefaultUtilityLayer
      }
      static _CreateDefaultUtilityLayerFromScene(uu) {
        return su._DefaultUtilityLayer = new su(uu), su._DefaultUtilityLayer.originalScene.zD.addOnce((() => {
          su._DefaultUtilityLayer = null
        })), su._DefaultUtilityLayer
      }
      static get DefaultKeepDepthUtilityLayer() {
        return null == su._DefaultKeepDepthUtilityLayer ? su._CreateDefaultKeepUtilityLayerFromScene(Nu.b.LastCreatedScene) : su._DefaultKeepDepthUtilityLayer
      }
      static _CreateDefaultKeepUtilityLayerFromScene(uu) {
        return su._DefaultKeepDepthUtilityLayer = new su(uu), su._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, su._DefaultKeepDepthUtilityLayer.originalScene.zD.addOnce((() => {
          su._DefaultKeepDepthUtilityLayer = null
        })), su._DefaultKeepDepthUtilityLayer
      }
      constructor(uu) {
        let Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.originalScene = uu, this.handleEvents = Ru, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.processAllEvents = !1, this.pickingEnabled = !0, this.onPointerOutObservable = new bu.b, this.utilityLayerScene = new Mu.i(uu.eS(), {
          virtual: !0,
          useFloatingOrigin: uu.floatingOriginMode
        }), this.utilityLayerScene.useRightHandedSystem = uu.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), Ru && (this._originalPointerObserver = uu.onPrePointerObservable.add((Ru => {
          if (!this.utilityLayerScene.activeCamera) return;
          if (!this.pickingEnabled) return;
          if (!this.processAllEvents && Ru.type !== Iu.e.POINTERMOVE && Ru.type !== Iu.e.POINTERUP && Ru.type !== Iu.e.POINTERDOWN && Ru.type !== Iu.e.POINTERDOUBLETAP) return;
          this.utilityLayerScene.pointerX = uu.pointerX, this.utilityLayerScene.pointerY = uu.pointerY;
          const yu = Ru.event;
          if (uu.isPointerCaptured(yu.pointerId)) return void(this._pointerCaptures[yu.pointerId] = !1);
          const Eu = yu => {
              let Eu;
              if (Ru.nearInteractionPickingInfo) Eu = Ru.nearInteractionPickingInfo.pickedMesh.lD() == yu ? Ru.nearInteractionPickingInfo : new Gu.c;
              else if (yu !== this.utilityLayerScene && Ru.originalPickingInfo) Eu = Ru.originalPickingInfo;
              else {
                let Ku = null;
                this._renderCamera && (Ku = yu._activeCamera, yu._activeCamera = this._renderCamera, Ru.ray = null), Eu = Ru.ray ? yu.pickWithRay(Ru.ray) : yu.cB(uu.pointerX, uu.pointerY), Ku && (yu._activeCamera = Ku)
              }
              return Eu
            },
            Ku = Eu(this.utilityLayerScene);
          if (!Ru.ray && Ku && (Ru.ray = Ku.ray), Ru.originalPickingInfo?.aimTransform && Ku && (Ku.aimTransform = Ru.originalPickingInfo.aimTransform, Ku.gripTransform = Ru.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(Ru), this.onlyCheckPointerDownEvents && Ru.type != Iu.e.POINTERDOWN) return Ru.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new Iu.k(Ru.type, Ru.event, Ku), Ru.type), void(Ru.type === Iu.e.POINTERUP && this._pointerCaptures[yu.pointerId] && (this._pointerCaptures[yu.pointerId] = !1));
          if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) Ku && Ku.hit && (Ru.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new Iu.k(Ru.type, Ru.event, Ku), Ru.type), Ru.skipOnPointerObservable = !0);
          else {
            const yu = Eu(uu),
              Qu = Ru.event;
            yu && Ku && (0 === Ku.distance && yu.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(yu.pickedMesh) ? (this._notifyObservers(Ru, yu, Qu), Ru.skipOnPointerObservable = !0) : Ru.type === Iu.e.POINTERDOWN ? (this._pointerCaptures[Qu.pointerId] = !0, this._notifyObservers(Ru, yu, Qu)) : Ru.type !== Iu.e.POINTERMOVE && Ru.type !== Iu.e.POINTERUP || (this._lastPointerEvents[Qu.pointerId] && (this.onPointerOutObservable.notifyObservers(Qu.pointerId), delete this._lastPointerEvents[Qu.pointerId]), this._notifyObservers(Ru, yu, Qu)) : !this._pointerCaptures[Qu.pointerId] && (Ku.distance < yu.distance || 0 === yu.distance) ? (this._notifyObservers(Ru, Ku, Qu), Ru.skipOnPointerObservable || (Ru.skipOnPointerObservable = Ku.distance > 0)) : !this._pointerCaptures[Qu.pointerId] && Ku.distance >= yu.distance && (this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(yu.pickedMesh) ? (this._notifyObservers(Ru, yu, Qu), Ru.skipOnPointerObservable = !0) : (Ru.type !== Iu.e.POINTERMOVE && Ru.type !== Iu.e.POINTERUP || this._lastPointerEvents[Qu.pointerId] && (this.onPointerOutObservable.notifyObservers(Qu.pointerId), delete this._lastPointerEvents[Qu.pointerId]), this._notifyObservers(Ru, Ku, Qu))), Ru.type === Iu.e.POINTERUP && this._pointerCaptures[Qu.pointerId] && (this._pointerCaptures[Qu.pointerId] = !1))
          }
        })), this._originalPointerObserver && uu.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, yu || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((uu => {
          this.shouldRender && uu == this.getRenderCamera() && this.render()
        }))), this._sceneDisposeObserver = this.originalScene.zD.add((() => {
          this.dispose()
        })), this._updateCamera()
      }
      _notifyObservers(uu, Ru, yu) {
        uu.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new Iu.k(uu.type, uu.event, Ru), uu.type), this._lastPointerEvents[yu.pointerId] = !0)
      }
      render() {
        if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
          const uu = this.utilityLayerScene.activeCamera.lD(),
            Ru = this.utilityLayerScene.activeCamera;
          Ru._scene = this.utilityLayerScene, Ru.leftCamera && (Ru.leftCamera._scene = this.utilityLayerScene), Ru.rightCamera && (Ru.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), Ru._scene = uu, Ru.leftCamera && (Ru.leftCamera._scene = uu), Ru.rightCamera && (Ru.rightCamera._scene = uu)
        }
      }
      dispose() {
        this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.zD.remove(this._sceneDisposeObserver), this._originalPointerObserver && this.originalScene.onPrePointerObservable.remove(this._originalPointerObserver), this.utilityLayerScene.dispose()
      }
      _updateCamera() {
        this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
      }
    }
    su._DefaultUtilityLayer = null, su._DefaultKeepDepthUtilityLayer = null;
    const tu = {
      FindMainCamera: function(uu) {
        return uu.findMainCamera()
      },
      FindMainObjectRenderer: function(uu) {
        return uu.findMainObjectRenderer()
      },
      CreateUtilityLayerRenderer: function(uu) {
        let Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const yu = uu.cp,
          Eu = new su(yu, Ru, !0);
        Eu.utilityLayerScene.activeCamera = yu.activeCamera;
        let Ku = tu.FindMainCamera(yu.frameGraph);
        !Ku && yu.cameras.length > 0 && (Ku = yu.cameras[0]), Ku && (Eu.setRenderCamera(Ku), Eu.utilityLayerScene.activeCamera = Ku);
        const Qu = yu.onAfterRenderObservable.add((() => {
          Eu.render()
        }));
        return Eu.utilityLayerScene.zD.addOnce((() => {
          yu.onAfterRenderObservable.remove(Qu)
        })), Eu
      }
    };
    let lu = null;

    function gu(uu, Ru, yu, Eu) {
      let Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        Qu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        mu = arguments.length > 6 ? arguments[6] : void 0,
        Ju = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Nu = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
      const {
        height: Xu,
        width: Vu
      } = Zu(uu, Ru, yu);
      if (!Xu || !Vu) return void Bu.e.Error("Invalid 'size' parameter !");
      const ru = Ru.lD();
      let Su = ru.activeCamera !== Ru;
      if (ru.frameGraph) {
        const uu = tu.FindMainObjectRenderer(ru.frameGraph);
        uu && (Su = uu.camera !== Ru)
      }
      Su ? zu(uu, Ru, yu, (uu => {
        if (Qu) {
          const Ru = new Blob([uu]);
          xu.i.DownloadBlob(Ru), Eu && Eu("")
        } else Eu && Eu(uu)
      }), Ku, 1, uu.getCreationOptions().antialias, void 0, void 0, void 0, void 0, mu) : uu.onEndFrameObservable.addOnce((() => {
        lu || (lu = document.createElement("canvas")), lu.width = Vu, lu.height = Xu;
        const Ru = lu.getContext("2d"),
          yu = uu.getRenderingCanvas();
        if (!Ru || !yu) return void Bu.e.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
        const Su = yu.width,
          pu = yu.height,
          Tu = lu.width,
          Wu = lu.height,
          ju = Tu / Su,
          Hu = Wu / pu,
          du = Ju ? Math.max(ju, Hu) : Math.min(ju, Hu),
          bu = Su * du,
          Cu = pu * du,
          ku = (Tu - bu) / 2,
          eu = (Wu - Cu) / 2;
        Ru.save(), Ru.fillStyle = Nu ? ru.clearColor.toHexString() : "rgba(0, 0, 0, 0)", Ru.fillRect(0, 0, Vu, Xu), Ru.restore(), Ru.drawImage(yu, 0, 0, Su, pu, ku, eu, bu, Cu), Qu ? (xu.i.EncodeScreenshotCanvasData(lu, void 0, Ku, void 0, mu), Eu && Eu("")) : xu.i.EncodeScreenshotCanvasData(lu, Eu, Ku, void 0, mu)
      }))
    }
    async function cu(uu, Ru, yu) {
      let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Ku = arguments.length > 4 ? arguments[4] : void 0,
        Qu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        mu = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Ju = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      return await new Promise(((Nu, Xu) => {
        gu(uu, Ru, yu, (uu => {
          "undefined" !== typeof uu ? Nu(uu) : Xu(new Error("Data is undefined"))
        }), Eu, Ju, Ku, Qu, mu)
      }))
    }
    async function Lu(uu, Ru, yu, Eu) {
      let Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        Qu = arguments.length > 5 ? arguments[5] : void 0,
        mu = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return await new Promise((Ju => {
        gu(uu, Ru, {
          width: yu,
          height: Eu
        }, (() => {
          Ju()
        }), Ku, !0, Qu, mu)
      }))
    }

    function zu(uu, Ru, Qu, mu) {
      let Ju = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        Nu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
        Xu = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Vu = arguments.length > 7 ? arguments[7] : void 0,
        xu = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Wu = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        ju = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
        Hu = arguments.length > 11 ? arguments[11] : void 0,
        du = arguments.length > 12 ? arguments[12] : void 0,
        bu = arguments.length > 13 ? arguments[13] : void 0,
        Cu = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
        ku = arguments.length > 15 ? arguments[15] : void 0;
      const eu = Ru.lD();
      if (eu.frameGraph) return void wu(eu.frameGraph, Ru, Qu, Ju, Nu, Xu, Vu, Hu, bu, !mu).then((uu => {
        mu && mu(uu)
      }));
      const {
        height: Au,
        width: Du,
        finalWidth: Mu,
        finalHeight: Iu
      } = Zu(uu, Ru, Qu), Gu = {
        width: Du,
        height: Au
      };
      if (!Au || !Du) return void Bu.e.Error("Invalid 'size' parameter !");
      uu.skipFrameRender = !0;
      const Uu = uu.getRenderWidth,
        nu = uu.getRenderHeight;
      uu.getRenderWidth = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && uu._currentRenderTarget ? uu._currentRenderTarget.width : Du
      }, uu.getRenderHeight = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && uu._currentRenderTarget ? uu._currentRenderTarget.height : Au
      }, uu.onResizeObservable.hasObservers() && uu.onResizeObservable.notifyObservers(uu);
      const su = new Ku.e("screenShot", Gu, eu, !1, !1, 0, !1, Eu.h.BILINEAR_SAMPLINGMODE, void 0, Wu, void 0, void 0, void 0, Nu);
      su.renderList = eu.meshes.slice(), su.samples = Nu, su.renderSprites = xu, su.activeCamera = Ru, su.forceLayerMaskCheck = ju, du?.(su);
      const tu = bu || Su.DumpData,
        lu = () => {
          eu.incrementRenderId(), eu.resetCachedMaterial(), (0, Tu.f)((() => su.isReadyForRendering() && Ru.isReady(!0)), (() => {
            uu.onEndFrameObservable.addOnce((() => {
              Mu === Du && Iu === Au ? su.readPixels(void 0, void 0, void 0, !1).then((uu => {
                tu(Du, Au, uu, mu, Ju, Vu, !0, void 0, Hu), su.dispose()
              })) : (uu.isWebGPU ? yu.e(363).then((() => yu(61315))) : yu.e(364).then((() => yu(61323)))).then((async () => await (0, pu.c)("pass", su.getInternalTexture(), eu, void 0, void 0, void 0, Mu, Iu).then((Ru => {
                uu._readTexturePixels(Ru, Mu, Iu, -1, 0, null, !0, !1, 0, 0).then((uu => {
                  tu(Mu, Iu, uu, mu, Ju, Vu, !0, void 0, Hu), Ru.dispose()
                }))
              }))))
            })), eu.incrementRenderId(), eu.resetCachedMaterial();
            const Eu = eu.activeCamera,
              Ku = eu.activeCameras,
              Qu = Ru.outputRenderTarget,
              Nu = eu.spritesEnabled;
            eu.activeCamera = Ru, eu.activeCameras = null, Ru.outputRenderTarget = su, eu.spritesEnabled = xu;
            const Xu = eu.meshes;
            eu.meshes = su.renderList || eu.meshes;
            try {
              eu.render()
            } finally {
              eu.activeCamera = Eu, eu.activeCameras = Ku, Ru.outputRenderTarget = Qu, eu.spritesEnabled = Nu, eu.meshes = Xu, uu.getRenderWidth = Uu, uu.getRenderHeight = nu, uu.onResizeObservable.hasObservers() && uu.onResizeObservable.notifyObservers(uu), Ru.getProjectionMatrix(!0), uu.skipFrameRender = !1
            }
          }), (() => {
            uu.skipFrameRender = !1, uu.getRenderWidth = Uu, uu.getRenderHeight = nu, ku?.()
          }), void 0, Cu)
        };
      if (Xu) {
        const uu = new ru("antialiasing", 1, eu.activeCamera);
        su.addPostProcess(uu), uu.autoClear = !0, uu.onEffectCreatedObservable.addOnce((uu => {
          uu.isReady() ? lu() : uu.onCompiled = () => {
            lu()
          }
        }))
      } else lu()
    }
    async function Fu(uu, Ru, yu) {
      let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        Qu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        mu = arguments.length > 6 ? arguments[6] : void 0,
        Ju = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Nu = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Xu = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
        Vu = arguments.length > 10 ? arguments[10] : void 0,
        ru = arguments.length > 11 ? arguments[11] : void 0,
        Bu = arguments.length > 12 ? arguments[12] : void 0;
      return await new Promise(((xu, Su) => {
        zu(uu, Ru, yu, (uu => {
          "undefined" !== typeof uu ? xu(uu) : Su(new Error("Data is undefined"))
        }), Eu, Ku, Qu, mu, Ju, Nu, Xu, Vu, ru, Bu)
      }))
    }
    async function wu(uu, Ru, yu) {
      let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        Qu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        mu = arguments.length > 6 ? arguments[6] : void 0,
        Ju = arguments.length > 7 ? arguments[7] : void 0,
        Nu = arguments.length > 8 ? arguments[8] : void 0,
        Xu = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        Vu = arguments.length > 10 ? arguments[10] : void 0;
      const ru = uu.engine,
        Bu = uu.textureManager,
        {
          height: xu,
          width: pu,
          finalWidth: Tu,
          finalHeight: ju
        } = Zu(ru, Ru, yu),
        Hu = {
          width: pu,
          height: xu
        },
        du = Nu || Su.DumpData,
        bu = uu.tasks,
        Cu = bu.length,
        ku = uu.pausedExecution,
        Au = ru.getCaps().parallelShaderCompile;
      Bu.setBackBufferTextures(0, 0, {
        size: Hu,
        options: {
          createMipMaps: !1,
          samples: Ku,
          types: [0],
          formats: [5],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot color"]
        },
        sizeIsPercentage: !1
      }, {
        size: Hu,
        options: {
          createMipMaps: !1,
          samples: Ku,
          types: [0],
          formats: [ru.isStencilEnable ? 13 : 14],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot depth"]
        },
        sizeIsPercentage: !1
      });
      let Mu = Wu;
      if (Qu) {
        const Ru = new eu("fxaa", uu);
        Ru.sourceTexture = Mu, Mu = Ru.outputTexture, uu.addTask(Ru)
      }
      if (Tu !== pu || ju !== xu) {
        const Ru = new Du("pass", uu);
        Ru.sourceTexture = Mu, Ru.targetTexture = uu.textureManager.createRenderTargetTexture("pass_output", {
          size: {
            width: Tu,
            height: ju
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
        }), Mu = Ru.outputTexture, uu.addTask(Ru)
      }
      const Iu = tu.FindMainObjectRenderer(uu);
      let Gu = null;
      Iu && (Gu = Iu.camera, Iu.camera = Ru), ru.getCaps().parallelShaderCompile = void 0, await uu.buildAsync();
      const Uu = Vu ?? (Bu.hasHistoryTextures ? 32 : 1);
      for (let Su = 0; Su < Uu; ++Su) uu.execute();
      uu.pausedExecution = !0, ru.getCaps().parallelShaderCompile = Au;
      for (let Su = Cu; Su < bu.length; ++Su) uu.tasks[Su].dispose();
      uu.tasks.length = Cu, Iu && Gu && (Iu.camera = Gu);
      const nu = uu.textureManager.getTextureFromHandle(Mu);
      return nu.incrementReferences(), Bu.resetBackBufferTextures(), await uu.buildAsync(), uu.pausedExecution = ku, new Promise((uu => {
        ru._readTexturePixels(nu, Tu, ju, -1, 0, null, !0, !1, 0, 0).then((async Ru => {
          nu.dispose(), du(Tu, ju, Ru, Xu ? void 0 : Ru => uu(Ru), Eu, mu, !0, void 0, Ju), Xu && uu(null)
        }))
      }))
    }

    function Zu(uu, Ru, yu) {
      let Eu = 0,
        Ku = 0,
        Qu = 0,
        mu = 0;
      if ("object" === typeof yu) {
        const Ju = yu.precision ? Math.abs(yu.precision) : 1;
        yu.width && yu.height ? (Eu = yu.height * Ju, Ku = yu.width * Ju) : yu.width && !yu.height ? (Ku = yu.width * Ju, Eu = Math.round(Ku / uu.getAspectRatio(Ru))) : yu.height && !yu.width ? (Eu = yu.height * Ju, Ku = Math.round(Eu * uu.getAspectRatio(Ru))) : (Ku = Math.round(uu.getRenderWidth() * Ju), Eu = Math.round(Ku / uu.getAspectRatio(Ru))), yu.finalWidth && yu.finalHeight ? (mu = yu.finalHeight, Qu = yu.finalWidth) : yu.finalWidth && !yu.finalHeight ? (Qu = yu.finalWidth, mu = Math.round(Qu / uu.getAspectRatio(Ru))) : yu.finalHeight && !yu.finalWidth ? (mu = yu.finalHeight, Qu = Math.round(mu * uu.getAspectRatio(Ru))) : (Qu = Ku, mu = Eu)
      } else isNaN(yu) || (Eu = yu, Ku = yu, Qu = yu, mu = yu);
      return Ku && (Ku = Math.floor(Ku)), Eu && (Eu = Math.floor(Eu)), Qu && (Qu = Math.floor(Qu)), mu && (mu = Math.floor(mu)), {
        height: 0 | Eu,
        width: 0 | Ku,
        finalWidth: 0 | Qu,
        finalHeight: 0 | mu
      }
    }
    const hu = {
      CreateScreenshot: gu,
      CreateScreenshotAsync: cu,
      CreateScreenshotWithResizeAsync: Lu,
      CreateScreenshotUsingRenderTarget: zu,
      CreateScreenshotUsingRenderTargetAsync: Fu,
      CreateScreenshotForFrameGraphAsync: wu
    };
    let Pu = !1;

    function iu() {
      if (Pu) return;
      Pu = !0;
      xu.i.CreateScreenshot = gu, xu.i.CreateScreenshotAsync = cu, xu.i.CreateScreenshotUsingRenderTarget = zu, xu.i.CreateScreenshotUsingRenderTargetAsync = Fu
    }
    iu()
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);