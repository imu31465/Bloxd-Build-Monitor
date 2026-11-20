export const id = 231;
export const ids = [231, 232];
export const modules = {
  39665: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => sk,
      d: () => Jk
    });
    var Rk = Bk(39397),
      tk = Bk(39404),
      ak = Bk(36758),
      Xk = Bk(36917),
      bk = Bk(39668),
      wk = Bk(39628),
      dk = Bk(36798);
    let sk = (() => {
        var kk;
        let Fk, Bk, wk = bk.d,
          dk = [],
          sk = [],
          Vk = [],
          Jk = [];
        return kk = class extends wk {
          constructor(kk, Fk, Bk, tk) {
            super(kk, Bk, tk), this.groundColor = (0, Rk.l)(this, dk, new Xk.e(0, 0, 0)), this.direction = ((0, Rk.l)(this, sk), (0, Rk.l)(this, Vk, void 0)), (0, Rk.l)(this, Jk), this.direction = Fk || ak.s.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(kk) {
            return this.direction = ak.s.Normalize(kk.subtract(ak.s.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(kk, Fk) {
            const Bk = ak.s.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", Bk.x, Bk.y, Bk.z, 0, Fk), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), Fk), this
          }
          transferToNodeMaterialEffect(kk, Fk) {
            const Bk = ak.s.Normalize(this.direction);
            return kk.setFloat3(Fk, Bk.x, Bk.y, Bk.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = ak.c.Identity()), this._worldMatrix
          }
          getTypeID() {
            return bk.d.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(kk, Fk) {
            kk["HEMILIGHT" + Fk] = !0
          }
        }, (() => {
          const ak = "function" === typeof Symbol && Symbol.metadata ? Object.create(wk[Symbol.metadata] ?? null) : void 0;
          Fk = [(0, tk.l)()], Bk = [(0, tk.K)()], (0, Rk.j)(null, null, Fk, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: kk => "groundColor" in kk,
              get: kk => kk.groundColor,
              set: (kk, Fk) => {
                kk.groundColor = Fk
              }
            },
            metadata: ak
          }, dk, sk), (0, Rk.j)(null, null, Bk, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: kk => "direction" in kk,
              get: kk => kk.direction,
              set: (kk, Fk) => {
                kk.direction = Fk
              }
            },
            metadata: ak
          }, Vk, Jk), ak && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ak
          })
        })(), kk
      })(),
      Vk = !1;

    function Jk() {
      Vk || (Vk = !0, wk.b.AddNodeConstructor("Light_Type_3", ((kk, Fk) => () => new sk(kk, ak.s.Zero(), Fk))), (0, dk.d)("BABYLON.HemisphericLight", sk))
    }
  },
  37459: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => tk
    });
    var Rk = Bk(37467);
    class tk {
      static GetPlanes(kk) {
        const Fk = [];
        for (let Bk = 0; Bk < 6; Bk++) Fk.push(new Rk.c(0, 0, 0, 0));
        return tk.GetPlanesToRef(kk, Fk), Fk
      }
      static GetNearPlaneToRef(kk, Fk) {
        const Bk = kk.m;
        Fk.normal.x = Bk[3] + Bk[2], Fk.normal.y = Bk[7] + Bk[6], Fk.normal.z = Bk[11] + Bk[10], Fk.d = Bk[15] + Bk[14], Fk.normalize()
      }
      static GetFarPlaneToRef(kk, Fk) {
        const Bk = kk.m;
        Fk.normal.x = Bk[3] - Bk[2], Fk.normal.y = Bk[7] - Bk[6], Fk.normal.z = Bk[11] - Bk[10], Fk.d = Bk[15] - Bk[14], Fk.normalize()
      }
      static GetLeftPlaneToRef(kk, Fk) {
        const Bk = kk.m;
        Fk.normal.x = Bk[3] + Bk[0], Fk.normal.y = Bk[7] + Bk[4], Fk.normal.z = Bk[11] + Bk[8], Fk.d = Bk[15] + Bk[12], Fk.normalize()
      }
      static GetRightPlaneToRef(kk, Fk) {
        const Bk = kk.m;
        Fk.normal.x = Bk[3] - Bk[0], Fk.normal.y = Bk[7] - Bk[4], Fk.normal.z = Bk[11] - Bk[8], Fk.d = Bk[15] - Bk[12], Fk.normalize()
      }
      static GetTopPlaneToRef(kk, Fk) {
        const Bk = kk.m;
        Fk.normal.x = Bk[3] - Bk[1], Fk.normal.y = Bk[7] - Bk[5], Fk.normal.z = Bk[11] - Bk[9], Fk.d = Bk[15] - Bk[13], Fk.normalize()
      }
      static GetBottomPlaneToRef(kk, Fk) {
        const Bk = kk.m;
        Fk.normal.x = Bk[3] + Bk[1], Fk.normal.y = Bk[7] + Bk[5], Fk.normal.z = Bk[11] + Bk[9], Fk.d = Bk[15] + Bk[13], Fk.normalize()
      }
      static GetPlanesToRef(kk, Fk) {
        tk.GetNearPlaneToRef(kk, Fk[0]), tk.GetFarPlaneToRef(kk, Fk[1]), tk.GetLeftPlaneToRef(kk, Fk[2]), tk.GetRightPlaneToRef(kk, Fk[3]), tk.GetTopPlaneToRef(kk, Fk[4]), tk.GetBottomPlaneToRef(kk, Fk[5])
      }
      static IsPointInFrustum(kk, Fk) {
        for (let Bk = 0; Bk < 6; Bk++)
          if (Fk[Bk].dotCoordinate(kk) < 0) return !1;
        return !0
      }
    }
  },
  37467: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => tk
    });
    var Rk = Bk(36758);
    class tk {
      constructor(kk, Fk, Bk, tk) {
        this.normal = new Rk.s(kk, Fk, Bk), this.d = tk
      }
      PBk() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new tk(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let kk = this.normal.getHashCode();
        return kk = 397 * kk ^ this.d, kk
      }
      normalize() {
        const kk = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let Fk = 0;
        return 0 !== kk && (Fk = 1 / kk), this.normal.x *= Fk, this.normal.y *= Fk, this.normal.z *= Fk, this.d *= Fk, this
      }
      transform(kk) {
        const Fk = tk._TmpMatrix;
        kk.invertToRef(Fk);
        const Bk = Fk.m,
          Rk = this.normal.x,
          ak = this.normal.y,
          Xk = this.normal.z,
          bk = this.d,
          wk = Rk * Bk[0] + ak * Bk[1] + Xk * Bk[2] + bk * Bk[3],
          dk = Rk * Bk[4] + ak * Bk[5] + Xk * Bk[6] + bk * Bk[7],
          sk = Rk * Bk[8] + ak * Bk[9] + Xk * Bk[10] + bk * Bk[11],
          Vk = Rk * Bk[12] + ak * Bk[13] + Xk * Bk[14] + bk * Bk[15];
        return new tk(wk, dk, sk, Vk)
      }
      dotCoordinate(kk) {
        return this.normal.x * kk.x + this.normal.y * kk.y + this.normal.z * kk.z + this.d
      }
      copyFromPoints(kk, Fk, Bk) {
        const Rk = Fk.x - kk.x,
          tk = Fk.y - kk.y,
          ak = Fk.z - kk.z,
          Xk = Bk.x - kk.x,
          bk = Bk.y - kk.y,
          wk = Bk.z - kk.z,
          dk = tk * wk - ak * bk,
          sk = ak * Xk - Rk * wk,
          Vk = Rk * bk - tk * Xk,
          Jk = Math.sqrt(dk * dk + sk * sk + Vk * Vk);
        let Ak;
        return Ak = 0 !== Jk ? 1 / Jk : 0, this.normal.x = dk * Ak, this.normal.y = sk * Ak, this.normal.z = Vk * Ak, this.d = -(this.normal.x * kk.x + this.normal.y * kk.y + this.normal.z * kk.z), this
      }
      isFrontFacingTo(kk, Fk) {
        return Rk.s.Dot(this.normal, kk) <= Fk
      }
      signedDistanceTo(kk) {
        return Rk.s.Dot(kk, this.normal) + this.d
      }
      static FromArray(kk) {
        return new tk(kk[0], kk[1], kk[2], kk[3])
      }
      static FromPoints(kk, Fk, Bk) {
        const Rk = new tk(0, 0, 0, 0);
        return Rk.copyFromPoints(kk, Fk, Bk), Rk
      }
      static FromPositionAndNormal(kk, Fk) {
        const Bk = new tk(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(kk, Fk, Bk)
      }
      static FromPositionAndNormalToRef(kk, Fk, Bk) {
        return Bk.normal.sBk(Fk), Bk.normal.normalize(), Bk.d = -kk.dot(Bk.normal), Bk
      }
      static SignedDistanceToPlaneFromPositionAndNormal(kk, Fk, Bk) {
        const tk = -(Fk.x * kk.x + Fk.y * kk.y + Fk.z * kk.z);
        return Rk.s.Dot(Bk, Fk) + tk
      }
    }
    tk._TmpMatrix = Rk.c.Identity()
  },
  37759: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Rk
    });
    class Rk {
      constructor(kk, Fk, Bk, Rk) {
        this.x = kk, this.y = Fk, this.width = Bk, this.height = Rk
      }
      toGlobal(kk, Fk) {
        return new Rk(this.x * kk, this.y * Fk, this.width * kk, this.height * Fk)
      }
      toGlobalToRef(kk, Fk, Bk) {
        return Bk.x = this.x * kk, Bk.y = this.y * Fk, Bk.width = this.width * kk, Bk.height = this.height * Fk, this
      }
      clone() {
        return new Rk(this.x, this.y, this.width, this.height)
      }
    }
  },
  38318: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => ak
    });
    var Rk = Bk(38320);
    const tk = (kk, Fk, Bk) => kk ? kk.getClassName && "Mesh" === kk.getClassName() ? null : !kk.getClassName || "SubMesh" !== kk.getClassName() && "PhysicsBody" !== kk.getClassName() ? kk.clone ? kk.clone() : Array.isArray(kk) ? kk.slice() : Bk && "object" === typeof kk ? {
      ...kk
    } : null : kk.clone(Fk) : null;
    class ak {
      static DeepCopy(kk, Fk, Bk, ak) {
        let Xk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const bk = function(kk) {
          const Fk = [];
          do {
            const Bk = Object.getOwnPropertyNames(kk);
            for (const kk of Bk) - 1 === Fk.indexOf(kk) && Fk.push(kk)
          } while (kk = Object.getPrototypeOf(kk));
          return Fk
        }(kk);
        for (const dk of bk) {
          if ("_" === dk[0] && (!ak || -1 === ak.indexOf(dk))) continue;
          if (dk.endsWith("Observable")) continue;
          if (Bk && -1 !== Bk.indexOf(dk)) continue;
          const bk = kk[dk],
            sk = typeof bk;
          if ("function" !== sk) try {
            if ("object" === sk)
              if (bk instanceof Uint8Array) Fk[dk] = Uint8Array.from(bk);
              else if (bk instanceof Array) {
              if (Fk[dk] = [], bk.length > 0)
                if ("object" == typeof bk[0])
                  for (let kk = 0; kk < bk.length; kk++) {
                    const Bk = tk(bk[kk], Fk, Xk); - 1 === Fk[dk].indexOf(Bk) && Fk[dk].push(Bk)
                  } else Fk[dk] = bk.slice(0)
            } else Fk[dk] = tk(bk, Fk, Xk);
            else Fk[dk] = bk
          } catch (wk) {
            Rk.b.Warn(wk.message)
          }
        }
      }
    }
  },
  37578: (kk, Fk, Bk) => {
    function Rk() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (kk => {
        const Fk = 16 * Math.random() | 0;
        return ("x" === kk ? Fk : 3 & Fk | 8).toString(16)
      }))
    }
    Bk.d(Fk, {
      e: () => Rk
    })
  },
  38320: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Rk
    });
    class Rk {
      static _CheckLimit(kk, Fk) {
        let Bk = Rk._LogLimitOutputs[kk];
        return Bk ? Bk.current++ : (Bk = {
          limit: Fk,
          current: 1
        }, Rk._LogLimitOutputs[kk] = Bk), Bk.current <= Bk.limit
      }
      static _GenerateLimitMessage(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const Bk = Rk._LogLimitOutputs[kk];
        if (!Bk || !Rk.MessageLimitReached) return;
        const tk = this._Levels[Fk];
        Bk.current === Bk.limit && Rk[tk.name](Rk.MessageLimitReached.replace(/%LIMIT%/g, "" + Bk.limit).replace(/%TYPE%/g, tk.name ?? ""))
      }
      static _AddLogEntry(kk) {
        Rk._LogCache = kk + Rk._LogCache, Rk.OnNewCacheEntry && Rk.OnNewCacheEntry(kk)
      }
      static _FormatMessage(kk) {
        const Fk = kk => kk < 10 ? "0" + kk : "" + kk,
          Bk = new Date;
        return "[" + Fk(Bk.getHours()) + ":" + Fk(Bk.getMinutes()) + ":" + Fk(Bk.getSeconds()) + "]: " + kk
      }
      static _LogDisabled(kk, Fk) {}
      static _LogEnabled() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Fk = arguments.length > 1 ? arguments[1] : void 0,
          Bk = arguments.length > 2 ? arguments[2] : void 0;
        const tk = Array.isArray(Fk) ? Fk[0] : Fk;
        if (void 0 !== Bk && !Rk._CheckLimit(tk, Bk)) return;
        const ak = Rk._FormatMessage(tk),
          Xk = this._Levels[kk],
          bk = Array.isArray(Fk) ? Fk.slice(1) : [];
        Xk.logFunc && Xk.logFunc("BJS - " + ak, ...bk);
        const wk = `<div style='color:${Xk.color}'>${ak}</div><br>`;
        Rk._AddLogEntry(wk), Rk._GenerateLimitMessage(tk, kk)
      }
      static get LogCache() {
        return Rk._LogCache
      }
      static ClearLogCache() {
        Rk._LogCache = "", Rk._LogLimitOutputs = {}, Rk.errorsCount = 0
      }
      static set LogLevels(kk) {
        Rk.Log = Rk._LogDisabled, Rk.Warn = Rk._LogDisabled, Rk.Error = Rk._LogDisabled;
        const Fk = [Rk.MessageLogLevel, Rk.WarningLogLevel, Rk.ErrorLogLevel];
        for (const Bk of Fk)
          if ((kk & Bk) === Bk) {
            const kk = this._Levels[Bk];
            Rk[kk.name] = Rk._LogEnabled.bind(Rk, Bk)
          }
      }
    }
    Rk.NoneLogLevel = 0, Rk.MessageLogLevel = 1, Rk.WarningLogLevel = 2, Rk.ErrorLogLevel = 4, Rk.AllLogLevel = 7, Rk.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Rk._LogCache = "", Rk._LogLimitOutputs = {}, Rk._Levels = [{}, {
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
    }], Rk.errorsCount = 0, Rk.Log = Rk._LogEnabled.bind(Rk, Rk.MessageLogLevel), Rk.Warn = Rk._LogEnabled.bind(Rk, Rk.WarningLogLevel), Rk.Error = Rk._LogEnabled.bind(Rk, Rk.ErrorLogLevel)
  },
  60912: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      CreateScreenshot: () => rk,
      CreateScreenshotAsync: () => Dk,
      CreateScreenshotForFrameGraphAsync: () => qk,
      CreateScreenshotUsingRenderTarget: () => Pk,
      CreateScreenshotUsingRenderTargetAsync: () => hk,
      CreateScreenshotWithResizeAsync: () => zk,
      RegisterScreenshotTools: () => Kk,
      ScreenshotTools: () => Zk
    });
    var Rk = Bk(39895),
      tk = Bk(41237),
      ak = Bk(41215),
      Xk = Bk(39414),
      bk = Bk(41218),
      wk = Bk(36772),
      dk = Bk(36758);
    class sk extends bk.g {
      static _GetDefines(kk) {
        if (!kk) return null;
        return kk.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
      }
      _gatherImports(kk, Fk) {
        kk ? (this._webGPUReady = !0, Fk.push(Promise.all([Bk.e(367).then((() => Bk(61259))), Bk.e(368).then((() => Bk(61265)))]))) : Fk.push(Promise.all([Bk.e(369).then((() => Bk(61271))), Bk.e(370).then((() => Bk(61278)))]))
      }
      constructor(kk) {
        const Fk = {
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: kk,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || wk.c.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          vertexShader: sk.VertexUrl,
          fragmentShader: sk.FragmentUrl,
          uniforms: sk.Uniforms
        };
        super({
          ...Fk,
          defines: sk._GetDefines(Fk.engine)
        }), this.texelSize = new dk.p(0, 0)
      }
      bind() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.bind(kk), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
      }
    }
    sk.VertexUrl = "fxaa", sk.FragmentUrl = "fxaa", sk.Uniforms = ["texelSize"];
    class Vk extends ak.b {
      getClassName() {
        return "FxaaPostProcess"
      }
      constructor(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          tk = arguments.length > 3 ? arguments[3] : void 0,
          ak = arguments.length > 4 ? arguments[4] : void 0,
          Xk = arguments.length > 5 ? arguments[5] : void 0,
          bk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const wk = {
          uniforms: sk.Uniforms,
          size: "number" === typeof Fk ? Fk : void 0,
          camera: Bk,
          samplingMode: tk || Rk.f.BILINEAR_SAMPLINGMODE,
          engine: ak,
          reusable: Xk,
          textureType: bk,
          ...Fk
        };
        super(kk, sk.FragmentUrl, {
          effectWrapper: "number" !== typeof Fk && Fk.effectWrapper ? void 0 : new sk(kk, ak, wk),
          ...wk
        }), this.onApplyObservable.add((kk => {
          this._effectWrapper.texelSize = this.texelSize
        }))
      }
      static _Parse(kk, Fk, Bk, Rk) {
        return Xk.c.Parse((() => new Vk(kk.name, kk.options, Fk, kk.renderTargetSamplingMode, Bk.ne(), kk.reusable)), kk, Bk, Rk)
      }
    }
    var Jk = Bk(38320),
      Ak = Bk(39492),
      ek = Bk(41248),
      yk = Bk(41230),
      fk = Bk(39302);
    const mk = 0;
    class Wk {
      constructor(kk, Fk, Bk) {
        this.name = kk, this._parentTask = Fk, this._context = Bk, this.disabled = !1
      }
      setInitializeFunc(kk) {
        this._initFunc = kk
      }
      setExecuteFunc(kk) {
        this._executeFunc = kk
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
    class vk extends Wk {
      static IsObjectListPass(kk) {
        return void 0 !== kk.setObjectList
      }
      get objectList() {
        return this._objectList
      }
      setObjectList(kk) {
        this._objectList = kk
      }
      constructor(kk, Fk, Bk, Rk) {
        super(kk, Fk, Bk), this._engine = Rk
      }
      _isValid() {
        const kk = super._isValid();
        return kk || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
      }
    }
    class ik extends Wk {
      static IsRenderPass(kk) {
        return void 0 !== kk.setRenderTarget
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
      constructor(kk, Fk, Bk, Rk) {
        super(kk, Fk, Bk), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = Rk
      }
      setRenderTarget(kk) {
        this._renderTarget = kk
      }
      setRenderTargetDepth(kk) {
        this._renderTargetDepth = kk
      }
      addDependencies(kk) {
        if (void 0 !== kk)
          if (Array.isArray(kk))
            for (const Fk of kk) this._dependencies.add(Fk);
          else this._dependencies.add(kk)
      }
      collectDependencies(kk) {
        const Fk = this._dependencies.keys();
        for (let Bk = Fk.next(); !0 !== Bk.done; Bk = Fk.next()) kk.add(Bk.value);
        if (void 0 !== this._renderTarget)
          if (Array.isArray(this._renderTarget))
            for (const Bk of this._renderTarget) void 0 !== Bk && kk.add(Bk);
          else kk.add(this._renderTarget);
        void 0 !== this._renderTargetDepth && kk.add(this._renderTargetDepth)
      }
      setOutputLayerAndFaceIndices(kk) {
        const Fk = this.frameGraphRenderTarget.renderTargetWrapper;
        if (Fk)
          for (const Bk of kk) Fk.setLayerAndFaceIndex(Bk.targetIndex, Bk.layerIndex, Bk.faceIndex)
      }
      _initialize() {
        this._frameGraphRenderTarget = this._context.createRenderTarget(this.name, this._renderTarget, this._renderTargetDepth, this.depthReadOnly, this.stencilReadOnly), super._initialize()
      }
      _execute() {
        this._context.bindRenderTarget(this._frameGraphRenderTarget), super._execute(), this._context.restoreDefaultFramebuffer()
      }
      _isValid() {
        const kk = super._isValid();
        return kk || (void 0 !== this._renderTarget || void 0 !== this.renderTargetDepth ? null : "Render target and render target depth cannot both be undefined.")
      }
      _dispose() {
        this._frameGraphRenderTarget?.dispose()
      }
    }
    var Yk = Bk(36781);
    class Lk {
      get name() {
        return this._name
      }
      set name(kk) {
        this._name = kk
      }
      get disabled() {
        return this._disabled
      }
      set disabled(kk) {
        this._disabled = kk
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
      constructor(kk, Fk) {
        this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new Yk.e, this.onBeforeTaskExecute = new Yk.e, this.onAfterTaskExecute = new Yk.e, this.name = kk, this._frameGraph = Fk, this._reset()
      }
      _reset() {
        for (const kk of this._passes) kk._dispose();
        for (const kk of this._passesDisabled) kk._dispose();
        this._passes.length = 0, this._passesDisabled.length = 0
      }
      _addPass(kk, Fk) {
        Fk ? this._passesDisabled.push(kk) : this._passes.push(kk)
      }
      _checkTask() {
        let kk, Fk = null,
          Bk = null;
        for (const bk of this._passes) {
          const Rk = bk._isValid();
          if (Rk) throw new Error(`Pass "${bk.name}" is not valid. ${Rk}`);
          if (ik.IsRenderPass(bk)) {
            const kk = Array.isArray(bk.renderTarget) ? bk.renderTarget : [bk.renderTarget];
            Fk = [];
            for (const Bk of kk) void 0 !== Bk && Fk.push(this._frameGraph.textureManager.getTextureFromHandle(Bk));
            Bk = void 0 !== bk.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(bk.renderTargetDepth) : null
          } else vk.IsObjectListPass(bk) && (kk = bk.objectList)
        }
        let Rk, tk = null,
          ak = [],
          Xk = null;
        for (const bk of this._passesDisabled) {
          const kk = bk._isValid();
          if (kk) throw new Error(`Pass "${bk.name}" is not valid. ${kk}`);
          if (ik.IsRenderPass(bk)) {
            const kk = Array.isArray(bk.renderTarget) ? bk.renderTarget : [bk.renderTarget];
            tk = [];
            for (const Fk of kk) void 0 !== Fk && tk.push(this._frameGraph.textureManager.getTextureFromHandle(Fk));
            ak = kk, Xk = void 0 !== bk.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(bk.renderTargetDepth) : null
          } else vk.IsObjectListPass(bk) && (Rk = bk.objectList)
        }
        if (this._passesDisabled.length > 0) {
          if (!this._checkSameRenderTarget(Fk, tk)) {
            let kk = !0;
            for (const Fk of ak)
              if (void 0 !== Fk && !this._frameGraph.textureManager.isHistoryTexture(Fk)) {
                kk = !1;
                break
              } if (!kk) throw new Error(`The output texture of the task "${this.name}" is different when it is enabled or disabled.`)
          }
          if (Bk !== Xk && null !== Xk) throw new Error(`The output depth texture of the task "${this.name}" is different when it is enabled or disabled.`);
          if (kk !== Rk && null !== Rk) throw new Error(`The output object list of the task "${this.name}" is different when it is enabled or disabled.`)
        }
      }
      _execute() {
        const kk = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
        this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const Fk of kk) Fk._execute()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
        this.onAfterTaskExecute.notifyObservers(this)
      }
      _initializePasses() {
        this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const kk of this._passes) kk._initialize();
          for (const kk of this._passesDisabled) kk._initialize()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
      }
      _checkSameRenderTarget(kk, Fk) {
        if (null === kk || null === Fk) return kk === Fk;
        if (kk.length !== Fk.length) return !1;
        for (let Bk = 0; Bk < kk.length; Bk++)
          if (kk[Bk] !== Fk[Bk]) return !1;
        return !0
      }
    }
    class Ok extends Lk {
      get alphaMode() {
        return this.postProcess.alphaMode
      }
      set alphaMode(kk) {
        this.postProcess.alphaMode = kk
      }
      get drawWrapper() {
        return this._postProcessDrawWrapper
      }
      constructor(kk, Fk, Bk) {
        super(kk, Fk), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = Bk, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture = this._frameGraph.textureManager.createDanglingHandle(), this.outputDepthAttachmentTexture = this._frameGraph.textureManager.createDanglingHandle()
      }
      isReady() {
        return this.postProcess.isReady()
      }
      getClassName() {
        return "FrameGraphPostProcessTask"
      }
      record() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Fk = arguments.length > 1 ? arguments[1] : void 0,
          Bk = arguments.length > 2 ? arguments[2] : void 0;
        if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
        const Rk = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
        if (Rk && (Rk.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, Rk), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentTexture, this.depthAttachmentTexture), Rk) {
          const kk = this._frameGraph.textureManager.getTextureAbsoluteDimensions(Rk);
          this._sourceWidth = kk.width, this._sourceHeight = kk.height
        }
        const tk = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
        this._outputWidth = tk.size.width, this._outputHeight = tk.size.height;
        const ak = this._frameGraph.addRenderPass(this.name);
        if (ak.depthReadOnly = this.depthReadOnly, ak.stencilReadOnly = this.stencilReadOnly, ak.addDependencies(this.sourceTexture), ak.setRenderTarget(this.outputTexture), ak.setRenderTargetDepth(this.depthAttachmentTexture), ak.setExecuteFunc((kk => {
            kk.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && kk.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), Fk?.(kk), this.viewport && kk.setViewport(this.viewport), kk.applyFullScreenEffect(this._postProcessDrawWrapper, (() => {
              void 0 !== this.sourceTexture && kk.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), Bk?.(kk), this.postProcess.bind()
            }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), kk.restoreDefaultFramebuffer(), kk.popDebugGroup()
          })), !kk) {
          const kk = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
          kk.depthReadOnly = this.depthReadOnly, kk.stencilReadOnly = this.stencilReadOnly, kk.addDependencies(this.sourceTexture), kk.setRenderTarget(this.outputTexture), kk.setRenderTargetDepth(this.depthAttachmentTexture), kk.setExecuteFunc((kk => {
            void 0 !== this.sourceTexture && 0 === this.alphaMode && (this.viewport && kk.setViewport(this.viewport), kk.copyTexture(this.sourceTexture, void 0, void 0 !== this.viewport))
          }))
        }
        return ak
      }
      dispose() {
        this.postProcess.dispose(), super.dispose()
      }
    }
    class Ek extends Ok {
      constructor(kk, Fk, Bk) {
        super(kk, Fk, Bk || new sk(kk, Fk.engine))
      }
      getClassName() {
        return "FrameGraphFXAATask"
      }
      record() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Fk = arguments.length > 1 ? arguments[1] : void 0,
          Bk = arguments.length > 2 ? arguments[2] : void 0;
        const Rk = super.record(kk, Fk, Bk);
        return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, Rk
      }
    }
    var Sk = Bk(41240);
    class Nk extends Ok {
      constructor(kk, Fk, Bk) {
        super(kk, Fk, Bk || new Sk.f(kk, Fk.engine))
      }
      getClassName() {
        return "FrameGraphPassTask"
      }
    }
    var Hk = Bk(39489),
      uk = Bk(39582),
      Mk = Bk(39537),
      gk = Bk(39665),
      Uk = Bk(36917);
    class ck {
      getRenderCamera(kk) {
        if (this._renderCamera) return this._renderCamera;
        {
          let Fk;
          return Fk = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, kk && Fk && Fk.isRigCamera ? Fk.rigParent : Fk
        }
      }
      setRenderCamera(kk) {
        this._renderCamera = kk
      }
      _getSharedGizmoLight() {
        return this._sharedGizmoLight || (this._sharedGizmoLight = new gk.c("shared gizmo light", new dk.s(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = Uk.e.Gray()), this._sharedGizmoLight
      }
      static get DefaultUtilityLayer() {
        return null == ck._DefaultUtilityLayer ? ck._CreateDefaultUtilityLayerFromScene(wk.c.LastCreatedScene) : ck._DefaultUtilityLayer
      }
      static _CreateDefaultUtilityLayerFromScene(kk) {
        return ck._DefaultUtilityLayer = new ck(kk), ck._DefaultUtilityLayer.originalScene.yN.addOnce((() => {
          ck._DefaultUtilityLayer = null
        })), ck._DefaultUtilityLayer
      }
      static get DefaultKeepDepthUtilityLayer() {
        return null == ck._DefaultKeepDepthUtilityLayer ? ck._CreateDefaultKeepUtilityLayerFromScene(wk.c.LastCreatedScene) : ck._DefaultKeepDepthUtilityLayer
      }
      static _CreateDefaultKeepUtilityLayerFromScene(kk) {
        return ck._DefaultKeepDepthUtilityLayer = new ck(kk), ck._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, ck._DefaultKeepDepthUtilityLayer.originalScene.yN.addOnce((() => {
          ck._DefaultKeepDepthUtilityLayer = null
        })), ck._DefaultKeepDepthUtilityLayer
      }
      constructor(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.originalScene = kk, this.handleEvents = Fk, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.processAllEvents = !1, this.pickingEnabled = !0, this.onPointerOutObservable = new Yk.e, this.utilityLayerScene = new Hk.c(kk.ne(), {
          virtual: !0,
          useFloatingOrigin: kk.floatingOriginMode
        }), this.utilityLayerScene.useRightHandedSystem = kk.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), Fk && (this._originalPointerObserver = kk.onPrePointerObservable.add((Fk => {
          if (!this.utilityLayerScene.activeCamera) return;
          if (!this.pickingEnabled) return;
          if (!this.processAllEvents && Fk.type !== uk.c.POINTERMOVE && Fk.type !== uk.c.POINTERUP && Fk.type !== uk.c.POINTERDOWN && Fk.type !== uk.c.POINTERDOUBLETAP) return;
          this.utilityLayerScene.pointerX = kk.pointerX, this.utilityLayerScene.pointerY = kk.pointerY;
          const Bk = Fk.event;
          if (kk.isPointerCaptured(Bk.pointerId)) return void(this._pointerCaptures[Bk.pointerId] = !1);
          const Rk = Bk => {
              let Rk;
              if (Fk.nearInteractionPickingInfo) Rk = Fk.nearInteractionPickingInfo.pickedMesh.XN() == Bk ? Fk.nearInteractionPickingInfo : new Mk.c;
              else if (Bk !== this.utilityLayerScene && Fk.originalPickingInfo) Rk = Fk.originalPickingInfo;
              else {
                let tk = null;
                this._renderCamera && (tk = Bk._activeCamera, Bk._activeCamera = this._renderCamera, Fk.ray = null), Rk = Fk.ray ? Bk.pickWithRay(Fk.ray) : Bk.AA(kk.pointerX, kk.pointerY), tk && (Bk._activeCamera = tk)
              }
              return Rk
            },
            tk = Rk(this.utilityLayerScene);
          if (!Fk.ray && tk && (Fk.ray = tk.ray), Fk.originalPickingInfo?.aimTransform && tk && (tk.aimTransform = Fk.originalPickingInfo.aimTransform, tk.gripTransform = Fk.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(Fk), this.onlyCheckPointerDownEvents && Fk.type != uk.c.POINTERDOWN) return Fk.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new uk.i(Fk.type, Fk.event, tk), Fk.type), void(Fk.type === uk.c.POINTERUP && this._pointerCaptures[Bk.pointerId] && (this._pointerCaptures[Bk.pointerId] = !1));
          if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) tk && tk.hit && (Fk.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new uk.i(Fk.type, Fk.event, tk), Fk.type), Fk.skipOnPointerObservable = !0);
          else {
            const Bk = Rk(kk),
              ak = Fk.event;
            Bk && tk && (0 === tk.distance && Bk.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(Bk.pickedMesh) ? (this._notifyObservers(Fk, Bk, ak), Fk.skipOnPointerObservable = !0) : Fk.type === uk.c.POINTERDOWN ? (this._pointerCaptures[ak.pointerId] = !0, this._notifyObservers(Fk, Bk, ak)) : Fk.type !== uk.c.POINTERMOVE && Fk.type !== uk.c.POINTERUP || (this._lastPointerEvents[ak.pointerId] && (this.onPointerOutObservable.notifyObservers(ak.pointerId), delete this._lastPointerEvents[ak.pointerId]), this._notifyObservers(Fk, Bk, ak)) : !this._pointerCaptures[ak.pointerId] && (tk.distance < Bk.distance || 0 === Bk.distance) ? (this._notifyObservers(Fk, tk, ak), Fk.skipOnPointerObservable || (Fk.skipOnPointerObservable = tk.distance > 0)) : !this._pointerCaptures[ak.pointerId] && tk.distance >= Bk.distance && (this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(Bk.pickedMesh) ? (this._notifyObservers(Fk, Bk, ak), Fk.skipOnPointerObservable = !0) : (Fk.type !== uk.c.POINTERMOVE && Fk.type !== uk.c.POINTERUP || this._lastPointerEvents[ak.pointerId] && (this.onPointerOutObservable.notifyObservers(ak.pointerId), delete this._lastPointerEvents[ak.pointerId]), this._notifyObservers(Fk, tk, ak))), Fk.type === uk.c.POINTERUP && this._pointerCaptures[ak.pointerId] && (this._pointerCaptures[ak.pointerId] = !1))
          }
        })), this._originalPointerObserver && kk.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, Bk || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((kk => {
          this.shouldRender && kk == this.getRenderCamera() && this.render()
        }))), this._sceneDisposeObserver = this.originalScene.yN.add((() => {
          this.dispose()
        })), this._updateCamera()
      }
      _notifyObservers(kk, Fk, Bk) {
        kk.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new uk.i(kk.type, kk.event, Fk), kk.type), this._lastPointerEvents[Bk.pointerId] = !0)
      }
      render() {
        if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
          const kk = this.utilityLayerScene.activeCamera.XN(),
            Fk = this.utilityLayerScene.activeCamera;
          Fk._scene = this.utilityLayerScene, Fk.leftCamera && (Fk.leftCamera._scene = this.utilityLayerScene), Fk.rightCamera && (Fk.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), Fk._scene = kk, Fk.leftCamera && (Fk.leftCamera._scene = kk), Fk.rightCamera && (Fk.rightCamera._scene = kk)
        }
      }
      dispose() {
        this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.yN.remove(this._sceneDisposeObserver), this._originalPointerObserver && this.originalScene.onPrePointerObservable.remove(this._originalPointerObserver), this.utilityLayerScene.dispose()
      }
      _updateCamera() {
        this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
      }
    }
    ck._DefaultUtilityLayer = null, ck._DefaultKeepDepthUtilityLayer = null;
    const Gk = {
      FindMainCamera: function(kk) {
        return kk.findMainCamera()
      },
      FindMainObjectRenderer: function(kk) {
        return kk.findMainObjectRenderer()
      },
      CreateUtilityLayerRenderer: function(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const Bk = kk.ef,
          Rk = new ck(Bk, Fk, !0);
        Rk.utilityLayerScene.activeCamera = Bk.activeCamera;
        let tk = Gk.FindMainCamera(Bk.frameGraph);
        !tk && Bk.cameras.length > 0 && (tk = Bk.cameras[0]), tk && (Rk.setRenderCamera(tk), Rk.utilityLayerScene.activeCamera = tk);
        const ak = Bk.onAfterRenderObservable.add((() => {
          Rk.render()
        }));
        return Rk.utilityLayerScene.yN.addOnce((() => {
          Bk.onAfterRenderObservable.remove(ak)
        })), Rk
      }
    };
    let Tk = null;

    function rk(kk, Fk, Bk, Rk) {
      let tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        ak = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Xk = arguments.length > 6 ? arguments[6] : void 0,
        bk = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        wk = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
      const {
        height: dk,
        width: sk
      } = Ck(kk, Fk, Bk);
      if (!dk || !sk) return void Jk.b.Error("Invalid 'size' parameter !");
      const Vk = Fk.XN();
      let ek = Vk.activeCamera !== Fk;
      if (Vk.frameGraph) {
        const kk = Gk.FindMainObjectRenderer(Vk.frameGraph);
        kk && (ek = kk.camera !== Fk)
      }
      ek ? Pk(kk, Fk, Bk, (kk => {
        if (ak) {
          const Fk = new Blob([kk]);
          Ak.h.DownloadBlob(Fk), Rk && Rk("")
        } else Rk && Rk(kk)
      }), tk, 1, kk.getCreationOptions().antialias, void 0, void 0, void 0, void 0, Xk) : kk.onEndFrameObservable.addOnce((() => {
        Tk || (Tk = document.createElement("canvas")), Tk.width = sk, Tk.height = dk;
        const Fk = Tk.getContext("2d"),
          Bk = kk.getRenderingCanvas();
        if (!Fk || !Bk) return void Jk.b.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
        const ek = Bk.width,
          yk = Bk.height,
          fk = Tk.width,
          mk = Tk.height,
          Wk = fk / ek,
          vk = mk / yk,
          ik = bk ? Math.max(Wk, vk) : Math.min(Wk, vk),
          Yk = ek * ik,
          Lk = yk * ik,
          Ok = (fk - Yk) / 2,
          Ek = (mk - Lk) / 2;
        Fk.save(), Fk.fillStyle = wk ? Vk.clearColor.toHexString() : "rgba(0, 0, 0, 0)", Fk.fillRect(0, 0, sk, dk), Fk.restore(), Fk.drawImage(Bk, 0, 0, ek, yk, Ok, Ek, Yk, Lk), ak ? (Ak.h.EncodeScreenshotCanvasData(Tk, void 0, tk, void 0, Xk), Rk && Rk("")) : Ak.h.EncodeScreenshotCanvasData(Tk, Rk, tk, void 0, Xk)
      }))
    }
    async function Dk(kk, Fk, Bk) {
      let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        tk = arguments.length > 4 ? arguments[4] : void 0,
        ak = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Xk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        bk = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      return await new Promise(((wk, dk) => {
        rk(kk, Fk, Bk, (kk => {
          "undefined" !== typeof kk ? wk(kk) : dk(new Error("Data is undefined"))
        }), Rk, bk, tk, ak, Xk)
      }))
    }
    async function zk(kk, Fk, Bk, Rk) {
      let tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        ak = arguments.length > 5 ? arguments[5] : void 0,
        Xk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return await new Promise((bk => {
        rk(kk, Fk, {
          width: Bk,
          height: Rk
        }, (() => {
          bk()
        }), tk, !0, ak, Xk)
      }))
    }

    function Pk(kk, Fk, ak, Xk) {
      let bk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        wk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
        dk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        sk = arguments.length > 7 ? arguments[7] : void 0,
        Ak = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        mk = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        Wk = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
        vk = arguments.length > 11 ? arguments[11] : void 0,
        ik = arguments.length > 12 ? arguments[12] : void 0,
        Yk = arguments.length > 13 ? arguments[13] : void 0,
        Lk = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
        Ok = arguments.length > 15 ? arguments[15] : void 0;
      const Ek = Fk.XN();
      if (Ek.frameGraph) return void qk(Ek.frameGraph, Fk, ak, bk, wk, dk, sk, vk, Yk, !Xk).then((kk => {
        Xk && Xk(kk)
      }));
      const {
        height: Sk,
        width: Nk,
        finalWidth: Hk,
        finalHeight: uk
      } = Ck(kk, Fk, ak), Mk = {
        width: Nk,
        height: Sk
      };
      if (!Sk || !Nk) return void Jk.b.Error("Invalid 'size' parameter !");
      kk.skipFrameRender = !0;
      const gk = kk.getRenderWidth,
        Uk = kk.getRenderHeight;
      kk.getRenderWidth = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && kk._currentRenderTarget ? kk._currentRenderTarget.width : Nk
      }, kk.getRenderHeight = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && kk._currentRenderTarget ? kk._currentRenderTarget.height : Sk
      }, kk.onResizeObservable.hasObservers() && kk.onResizeObservable.notifyObservers(kk);
      const ck = new tk.d("screenShot", Mk, Ek, !1, !1, 0, !1, Rk.f.BILINEAR_SAMPLINGMODE, void 0, mk, void 0, void 0, void 0, wk);
      ck.renderList = Ek.meshes.slice(), ck.samples = wk, ck.renderSprites = Ak, ck.activeCamera = Fk, ck.forceLayerMaskCheck = Wk, ik?.(ck);
      const Gk = Yk || ek.DumpData,
        Tk = () => {
          Ek.incrementRenderId(), Ek.resetCachedMaterial(), (0, fk.g)((() => ck.isReadyForRendering() && Fk.isReady(!0)), (() => {
            kk.onEndFrameObservable.addOnce((() => {
              Hk === Nk && uk === Sk ? ck.readPixels(void 0, void 0, void 0, !1).then((kk => {
                Gk(Nk, Sk, kk, Xk, bk, sk, !0, void 0, vk), ck.dispose()
              })) : (kk.isWebGPU ? Bk.e(363).then((() => Bk(61204))) : Bk.e(364).then((() => Bk(61212)))).then((async () => await (0, yk.d)("pass", ck.getInternalTexture(), Ek, void 0, void 0, void 0, Hk, uk).then((Fk => {
                kk._readTexturePixels(Fk, Hk, uk, -1, 0, null, !0, !1, 0, 0).then((kk => {
                  Gk(Hk, uk, kk, Xk, bk, sk, !0, void 0, vk), Fk.dispose()
                }))
              }))))
            })), Ek.incrementRenderId(), Ek.resetCachedMaterial();
            const Rk = Ek.activeCamera,
              tk = Ek.activeCameras,
              ak = Fk.outputRenderTarget,
              wk = Ek.spritesEnabled;
            Ek.activeCamera = Fk, Ek.activeCameras = null, Fk.outputRenderTarget = ck, Ek.spritesEnabled = Ak;
            const dk = Ek.meshes;
            Ek.meshes = ck.renderList || Ek.meshes;
            try {
              Ek.render()
            } finally {
              Ek.activeCamera = Rk, Ek.activeCameras = tk, Fk.outputRenderTarget = ak, Ek.spritesEnabled = wk, Ek.meshes = dk, kk.getRenderWidth = gk, kk.getRenderHeight = Uk, kk.onResizeObservable.hasObservers() && kk.onResizeObservable.notifyObservers(kk), Fk.getProjectionMatrix(!0), kk.skipFrameRender = !1
            }
          }), (() => {
            kk.skipFrameRender = !1, kk.getRenderWidth = gk, kk.getRenderHeight = Uk, Ok?.()
          }), void 0, Lk)
        };
      if (dk) {
        const kk = new Vk("antialiasing", 1, Ek.activeCamera);
        ck.addPostProcess(kk), kk.autoClear = !0, kk.onEffectCreatedObservable.addOnce((kk => {
          kk.isReady() ? Tk() : kk.onCompiled = () => {
            Tk()
          }
        }))
      } else Tk()
    }
    async function hk(kk, Fk, Bk) {
      let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        ak = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Xk = arguments.length > 6 ? arguments[6] : void 0,
        bk = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        wk = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        dk = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
        sk = arguments.length > 10 ? arguments[10] : void 0,
        Vk = arguments.length > 11 ? arguments[11] : void 0,
        Jk = arguments.length > 12 ? arguments[12] : void 0;
      return await new Promise(((Ak, ek) => {
        Pk(kk, Fk, Bk, (kk => {
          "undefined" !== typeof kk ? Ak(kk) : ek(new Error("Data is undefined"))
        }), Rk, tk, ak, Xk, bk, wk, dk, sk, Vk, Jk)
      }))
    }
    async function qk(kk, Fk, Bk) {
      let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        ak = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Xk = arguments.length > 6 ? arguments[6] : void 0,
        bk = arguments.length > 7 ? arguments[7] : void 0,
        wk = arguments.length > 8 ? arguments[8] : void 0,
        dk = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        sk = arguments.length > 10 ? arguments[10] : void 0;
      const Vk = kk.engine,
        Jk = kk.textureManager,
        {
          height: Ak,
          width: yk,
          finalWidth: fk,
          finalHeight: Wk
        } = Ck(Vk, Fk, Bk),
        vk = {
          width: yk,
          height: Ak
        },
        ik = wk || ek.DumpData,
        Yk = kk.tasks,
        Lk = Yk.length,
        Ok = kk.pausedExecution,
        Sk = Vk.getCaps().parallelShaderCompile;
      Jk.setBackBufferTextures(0, 0, {
        size: vk,
        options: {
          createMipMaps: !1,
          samples: tk,
          types: [0],
          formats: [5],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot color"]
        },
        sizeIsPercentage: !1
      }, {
        size: vk,
        options: {
          createMipMaps: !1,
          samples: tk,
          types: [0],
          formats: [Vk.isStencilEnable ? 13 : 14],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot depth"]
        },
        sizeIsPercentage: !1
      });
      let Hk = mk;
      if (ak) {
        const Fk = new Ek("fxaa", kk);
        Fk.sourceTexture = Hk, Hk = Fk.outputTexture, kk.addTask(Fk)
      }
      if (fk !== yk || Wk !== Ak) {
        const Fk = new Nk("pass", kk);
        Fk.sourceTexture = Hk, Fk.targetTexture = kk.textureManager.createRenderTargetTexture("pass_output", {
          size: {
            width: fk,
            height: Wk
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
        }), Hk = Fk.outputTexture, kk.addTask(Fk)
      }
      const uk = Gk.FindMainObjectRenderer(kk);
      let Mk = null;
      uk && (Mk = uk.camera, uk.camera = Fk), Vk.getCaps().parallelShaderCompile = void 0, await kk.buildAsync();
      const gk = sk ?? (Jk.hasHistoryTextures ? 32 : 1);
      for (let ek = 0; ek < gk; ++ek) kk.execute();
      kk.pausedExecution = !0, Vk.getCaps().parallelShaderCompile = Sk;
      for (let ek = Lk; ek < Yk.length; ++ek) kk.tasks[ek].dispose();
      kk.tasks.length = Lk, uk && Mk && (uk.camera = Mk);
      const Uk = kk.textureManager.getTextureFromHandle(Hk);
      return Uk.incrementReferences(), Jk.resetBackBufferTextures(), await kk.buildAsync(), kk.pausedExecution = Ok, new Promise((kk => {
        Vk._readTexturePixels(Uk, fk, Wk, -1, 0, null, !0, !1, 0, 0).then((async Fk => {
          Uk.dispose(), ik(fk, Wk, Fk, dk ? void 0 : Fk => kk(Fk), Rk, Xk, !0, void 0, bk), dk && kk(null)
        }))
      }))
    }

    function Ck(kk, Fk, Bk) {
      let Rk = 0,
        tk = 0,
        ak = 0,
        Xk = 0;
      if ("object" === typeof Bk) {
        const bk = Bk.precision ? Math.abs(Bk.precision) : 1;
        Bk.width && Bk.height ? (Rk = Bk.height * bk, tk = Bk.width * bk) : Bk.width && !Bk.height ? (tk = Bk.width * bk, Rk = Math.round(tk / kk.getAspectRatio(Fk))) : Bk.height && !Bk.width ? (Rk = Bk.height * bk, tk = Math.round(Rk * kk.getAspectRatio(Fk))) : (tk = Math.round(kk.getRenderWidth() * bk), Rk = Math.round(tk / kk.getAspectRatio(Fk))), Bk.finalWidth && Bk.finalHeight ? (Xk = Bk.finalHeight, ak = Bk.finalWidth) : Bk.finalWidth && !Bk.finalHeight ? (ak = Bk.finalWidth, Xk = Math.round(ak / kk.getAspectRatio(Fk))) : Bk.finalHeight && !Bk.finalWidth ? (Xk = Bk.finalHeight, ak = Math.round(Xk * kk.getAspectRatio(Fk))) : (ak = tk, Xk = Rk)
      } else isNaN(Bk) || (Rk = Bk, tk = Bk, ak = Bk, Xk = Bk);
      return tk && (tk = Math.floor(tk)), Rk && (Rk = Math.floor(Rk)), ak && (ak = Math.floor(ak)), Xk && (Xk = Math.floor(Xk)), {
        height: 0 | Rk,
        width: 0 | tk,
        finalWidth: 0 | ak,
        finalHeight: 0 | Xk
      }
    }
    const Zk = {
      CreateScreenshot: rk,
      CreateScreenshotAsync: Dk,
      CreateScreenshotWithResizeAsync: zk,
      CreateScreenshotUsingRenderTarget: Pk,
      CreateScreenshotUsingRenderTargetAsync: hk,
      CreateScreenshotForFrameGraphAsync: qk
    };
    let pk = !1;

    function Kk() {
      if (pk) return;
      pk = !0;
      Ak.h.CreateScreenshot = rk, Ak.h.CreateScreenshotAsync = Dk, Ak.h.CreateScreenshotUsingRenderTarget = Pk, Ak.h.CreateScreenshotUsingRenderTargetAsync = hk
    }
    Kk()
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);