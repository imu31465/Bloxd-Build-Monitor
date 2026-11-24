export const id = 237;
export const ids = [237, 238];
export const modules = {
  40259: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Lk,
      e: () => Zk
    });
    var Xk = Ik(40003),
      Tk = Ik(40011),
      ik = Ik(37153),
      yk = Ik(37331),
      lk = Ik(40265),
      ak = Ik(40218),
      qk = Ik(37201);
    let Lk = (() => {
        var kk;
        let Fk, Ik, ak = lk.b,
          qk = [],
          Lk = [],
          tk = [],
          Zk = [];
        return kk = class extends ak {
          constructor(kk, Fk, Ik, Tk) {
            super(kk, Ik, Tk), this.groundColor = (0, Xk.n)(this, qk, new yk.e(0, 0, 0)), this.direction = ((0, Xk.n)(this, Lk), (0, Xk.n)(this, tk, void 0)), (0, Xk.n)(this, Zk), this.direction = Fk || ik.t.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(kk) {
            return this.direction = ik.t.Normalize(kk.subtract(ik.t.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(kk, Fk) {
            const Ik = ik.t.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", Ik.x, Ik.y, Ik.z, 0, Fk), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), Fk), this
          }
          transferToNodeMaterialEffect(kk, Fk) {
            const Ik = ik.t.Normalize(this.direction);
            return kk.setFloat3(Fk, Ik.x, Ik.y, Ik.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = ik.c.Identity()), this._worldMatrix
          }
          getTypeID() {
            return lk.b.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(kk, Fk) {
            kk["HEMILIGHT" + Fk] = !0
          }
        }, (() => {
          const ik = "function" === typeof Symbol && Symbol.metadata ? Object.create(ak[Symbol.metadata] ?? null) : void 0;
          Fk = [(0, Tk.n)()], Ik = [(0, Tk.H)()], (0, Xk.j)(null, null, Fk, {
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
            metadata: ik
          }, qk, Lk), (0, Xk.j)(null, null, Ik, {
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
            metadata: ik
          }, tk, Zk), ik && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ik
          })
        })(), kk
      })(),
      tk = !1;

    function Zk() {
      tk || (tk = !0, ak.b.AddNodeConstructor("Light_Type_3", ((kk, Fk) => () => new Lk(kk, ik.t.Zero(), Fk))), (0, qk.f)("BABYLON.HemisphericLight", Lk))
    }
  },
  37780: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Tk
    });
    var Xk = Ik(37785);
    class Tk {
      static GetPlanes(kk) {
        const Fk = [];
        for (let Ik = 0; Ik < 6; Ik++) Fk.push(new Xk.e(0, 0, 0, 0));
        return Tk.GetPlanesToRef(kk, Fk), Fk
      }
      static GetNearPlaneToRef(kk, Fk) {
        const Ik = kk.m;
        Fk.normal.x = Ik[3] + Ik[2], Fk.normal.y = Ik[7] + Ik[6], Fk.normal.z = Ik[11] + Ik[10], Fk.d = Ik[15] + Ik[14], Fk.normalize()
      }
      static GetFarPlaneToRef(kk, Fk) {
        const Ik = kk.m;
        Fk.normal.x = Ik[3] - Ik[2], Fk.normal.y = Ik[7] - Ik[6], Fk.normal.z = Ik[11] - Ik[10], Fk.d = Ik[15] - Ik[14], Fk.normalize()
      }
      static GetLeftPlaneToRef(kk, Fk) {
        const Ik = kk.m;
        Fk.normal.x = Ik[3] + Ik[0], Fk.normal.y = Ik[7] + Ik[4], Fk.normal.z = Ik[11] + Ik[8], Fk.d = Ik[15] + Ik[12], Fk.normalize()
      }
      static GetRightPlaneToRef(kk, Fk) {
        const Ik = kk.m;
        Fk.normal.x = Ik[3] - Ik[0], Fk.normal.y = Ik[7] - Ik[4], Fk.normal.z = Ik[11] - Ik[8], Fk.d = Ik[15] - Ik[12], Fk.normalize()
      }
      static GetTopPlaneToRef(kk, Fk) {
        const Ik = kk.m;
        Fk.normal.x = Ik[3] - Ik[1], Fk.normal.y = Ik[7] - Ik[5], Fk.normal.z = Ik[11] - Ik[9], Fk.d = Ik[15] - Ik[13], Fk.normalize()
      }
      static GetBottomPlaneToRef(kk, Fk) {
        const Ik = kk.m;
        Fk.normal.x = Ik[3] + Ik[1], Fk.normal.y = Ik[7] + Ik[5], Fk.normal.z = Ik[11] + Ik[9], Fk.d = Ik[15] + Ik[13], Fk.normalize()
      }
      static GetPlanesToRef(kk, Fk) {
        Tk.GetNearPlaneToRef(kk, Fk[0]), Tk.GetFarPlaneToRef(kk, Fk[1]), Tk.GetLeftPlaneToRef(kk, Fk[2]), Tk.GetRightPlaneToRef(kk, Fk[3]), Tk.GetTopPlaneToRef(kk, Fk[4]), Tk.GetBottomPlaneToRef(kk, Fk[5])
      }
      static IsPointInFrustum(kk, Fk) {
        for (let Ik = 0; Ik < 6; Ik++)
          if (Fk[Ik].dotCoordinate(kk) < 0) return !1;
        return !0
      }
    }
  },
  37785: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Tk
    });
    var Xk = Ik(37153);
    class Tk {
      constructor(kk, Fk, Ik, Tk) {
        this.normal = new Xk.t(kk, Fk, Ik), this.d = Tk
      }
      iXk() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Tk(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        const Fk = Tk._TmpMatrix;
        kk.invertToRef(Fk);
        const Ik = Fk.m,
          Xk = this.normal.x,
          ik = this.normal.y,
          yk = this.normal.z,
          lk = this.d,
          ak = Xk * Ik[0] + ik * Ik[1] + yk * Ik[2] + lk * Ik[3],
          qk = Xk * Ik[4] + ik * Ik[5] + yk * Ik[6] + lk * Ik[7],
          Lk = Xk * Ik[8] + ik * Ik[9] + yk * Ik[10] + lk * Ik[11],
          tk = Xk * Ik[12] + ik * Ik[13] + yk * Ik[14] + lk * Ik[15];
        return new Tk(ak, qk, Lk, tk)
      }
      dotCoordinate(kk) {
        return this.normal.x * kk.x + this.normal.y * kk.y + this.normal.z * kk.z + this.d
      }
      copyFromPoints(kk, Fk, Ik) {
        const Xk = Fk.x - kk.x,
          Tk = Fk.y - kk.y,
          ik = Fk.z - kk.z,
          yk = Ik.x - kk.x,
          lk = Ik.y - kk.y,
          ak = Ik.z - kk.z,
          qk = Tk * ak - ik * lk,
          Lk = ik * yk - Xk * ak,
          tk = Xk * lk - Tk * yk,
          Zk = Math.sqrt(qk * qk + Lk * Lk + tk * tk);
        let jk;
        return jk = 0 !== Zk ? 1 / Zk : 0, this.normal.x = qk * jk, this.normal.y = Lk * jk, this.normal.z = tk * jk, this.d = -(this.normal.x * kk.x + this.normal.y * kk.y + this.normal.z * kk.z), this
      }
      isFrontFacingTo(kk, Fk) {
        return Xk.t.Dot(this.normal, kk) <= Fk
      }
      signedDistanceTo(kk) {
        return Xk.t.Dot(kk, this.normal) + this.d
      }
      static FromArray(kk) {
        return new Tk(kk[0], kk[1], kk[2], kk[3])
      }
      static FromPoints(kk, Fk, Ik) {
        const Xk = new Tk(0, 0, 0, 0);
        return Xk.copyFromPoints(kk, Fk, Ik), Xk
      }
      static FromPositionAndNormal(kk, Fk) {
        const Ik = new Tk(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(kk, Fk, Ik)
      }
      static FromPositionAndNormalToRef(kk, Fk, Ik) {
        return Ik.normal.kS(Fk), Ik.normal.normalize(), Ik.d = -kk.dot(Ik.normal), Ik
      }
      static SignedDistanceToPlaneFromPositionAndNormal(kk, Fk, Ik) {
        const Tk = -(Fk.x * kk.x + Fk.y * kk.y + Fk.z * kk.z);
        return Xk.t.Dot(Ik, Fk) + Tk
      }
    }
    Tk._TmpMatrix = Xk.c.Identity()
  },
  38099: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Xk
    });
    class Xk {
      constructor(kk, Fk, Ik, Xk) {
        this.x = kk, this.y = Fk, this.width = Ik, this.height = Xk
      }
      toGlobal(kk, Fk) {
        return new Xk(this.x * kk, this.y * Fk, this.width * kk, this.height * Fk)
      }
      toGlobalToRef(kk, Fk, Ik) {
        return Ik.x = this.x * kk, Ik.y = this.y * Fk, Ik.width = this.width * kk, Ik.height = this.height * Fk, this
      }
      clone() {
        return new Xk(this.x, this.y, this.width, this.height)
      }
    }
  },
  38666: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => ik
    });
    var Xk = Ik(38674);
    const Tk = (kk, Fk, Ik) => kk ? kk.getClassName && "Mesh" === kk.getClassName() ? null : !kk.getClassName || "SubMesh" !== kk.getClassName() && "PhysicsBody" !== kk.getClassName() ? kk.clone ? kk.clone() : Array.isArray(kk) ? kk.slice() : Ik && "object" === typeof kk ? {
      ...kk
    } : null : kk.clone(Fk) : null;
    class ik {
      static DeepCopy(kk, Fk, Ik, ik) {
        let yk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const lk = function(kk) {
          const Fk = [];
          do {
            const Ik = Object.getOwnPropertyNames(kk);
            for (const kk of Ik) - 1 === Fk.indexOf(kk) && Fk.push(kk)
          } while (kk = Object.getPrototypeOf(kk));
          return Fk
        }(kk);
        for (const qk of lk) {
          if ("_" === qk[0] && (!ik || -1 === ik.indexOf(qk))) continue;
          if (qk.endsWith("Observable")) continue;
          if (Ik && -1 !== Ik.indexOf(qk)) continue;
          const lk = kk[qk],
            Lk = typeof lk;
          if ("function" !== Lk) try {
            if ("object" === Lk)
              if (lk instanceof Uint8Array) Fk[qk] = Uint8Array.from(lk);
              else if (lk instanceof Array) {
              if (Fk[qk] = [], lk.length > 0)
                if ("object" == typeof lk[0])
                  for (let kk = 0; kk < lk.length; kk++) {
                    const Ik = Tk(lk[kk], Fk, yk); - 1 === Fk[qk].indexOf(Ik) && Fk[qk].push(Ik)
                  } else Fk[qk] = lk.slice(0)
            } else Fk[qk] = Tk(lk, Fk, yk);
            else Fk[qk] = lk
          } catch (ak) {
            Xk.e.Warn(ak.message)
          }
        }
      }
    }
  },
  37902: (kk, Fk, Ik) => {
    function Xk() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (kk => {
        const Fk = 16 * Math.random() | 0;
        return ("x" === kk ? Fk : 3 & Fk | 8).toString(16)
      }))
    }
    Ik.d(Fk, {
      e: () => Xk
    })
  },
  38674: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Xk
    });
    class Xk {
      static _CheckLimit(kk, Fk) {
        let Ik = Xk._LogLimitOutputs[kk];
        return Ik ? Ik.current++ : (Ik = {
          limit: Fk,
          current: 1
        }, Xk._LogLimitOutputs[kk] = Ik), Ik.current <= Ik.limit
      }
      static _GenerateLimitMessage(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const Ik = Xk._LogLimitOutputs[kk];
        if (!Ik || !Xk.MessageLimitReached) return;
        const Tk = this._Levels[Fk];
        Ik.current === Ik.limit && Xk[Tk.name](Xk.MessageLimitReached.replace(/%LIMIT%/g, "" + Ik.limit).replace(/%TYPE%/g, Tk.name ?? ""))
      }
      static _AddLogEntry(kk) {
        Xk._LogCache = kk + Xk._LogCache, Xk.OnNewCacheEntry && Xk.OnNewCacheEntry(kk)
      }
      static _FormatMessage(kk) {
        const Fk = kk => kk < 10 ? "0" + kk : "" + kk,
          Ik = new Date;
        return "[" + Fk(Ik.getHours()) + ":" + Fk(Ik.getMinutes()) + ":" + Fk(Ik.getSeconds()) + "]: " + kk
      }
      static _LogDisabled(kk, Fk) {}
      static _LogEnabled() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Fk = arguments.length > 1 ? arguments[1] : void 0,
          Ik = arguments.length > 2 ? arguments[2] : void 0;
        const Tk = Array.isArray(Fk) ? Fk[0] : Fk;
        if (void 0 !== Ik && !Xk._CheckLimit(Tk, Ik)) return;
        const ik = Xk._FormatMessage(Tk),
          yk = this._Levels[kk],
          lk = Array.isArray(Fk) ? Fk.slice(1) : [];
        yk.logFunc && yk.logFunc("BJS - " + ik, ...lk);
        const ak = `<div style='color:${yk.color}'>${ik}</div><br>`;
        Xk._AddLogEntry(ak), Xk._GenerateLimitMessage(Tk, kk)
      }
      static get LogCache() {
        return Xk._LogCache
      }
      static ClearLogCache() {
        Xk._LogCache = "", Xk._LogLimitOutputs = {}, Xk.errorsCount = 0
      }
      static set LogLevels(kk) {
        Xk.Log = Xk._LogDisabled, Xk.Warn = Xk._LogDisabled, Xk.Error = Xk._LogDisabled;
        const Fk = [Xk.MessageLogLevel, Xk.WarningLogLevel, Xk.ErrorLogLevel];
        for (const Ik of Fk)
          if ((kk & Ik) === Ik) {
            const kk = this._Levels[Ik];
            Xk[kk.name] = Xk._LogEnabled.bind(Xk, Ik)
          }
      }
    }
    Xk.NoneLogLevel = 0, Xk.MessageLogLevel = 1, Xk.WarningLogLevel = 2, Xk.ErrorLogLevel = 4, Xk.AllLogLevel = 7, Xk.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Xk._LogCache = "", Xk._LogLimitOutputs = {}, Xk._Levels = [{}, {
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
    }], Xk.errorsCount = 0, Xk.Log = Xk._LogEnabled.bind(Xk, Xk.MessageLogLevel), Xk.Warn = Xk._LogEnabled.bind(Xk, Xk.WarningLogLevel), Xk.Error = Xk._LogEnabled.bind(Xk, Xk.ErrorLogLevel)
  },
  61276: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      CreateScreenshot: () => Uk,
      CreateScreenshotAsync: () => Ck,
      CreateScreenshotForFrameGraphAsync: () => fk,
      CreateScreenshotUsingRenderTarget: () => ck,
      CreateScreenshotUsingRenderTargetAsync: () => Wk,
      CreateScreenshotWithResizeAsync: () => Nk,
      RegisterScreenshotTools: () => Ak,
      ScreenshotTools: () => dk
    });
    var Xk = Ik(40489),
      Tk = Ik(41815),
      ik = Ik(41795),
      yk = Ik(40021),
      lk = Ik(41797),
      ak = Ik(37178),
      qk = Ik(37153);
    class Lk extends lk.e {
      static _GetDefines(kk) {
        if (!kk) return null;
        return kk.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
      }
      _gatherImports(kk, Fk) {
        kk ? (this._webGPUReady = !0, Fk.push(Promise.all([Ik.e(375).then((() => Ik(61491))), Ik.e(376).then((() => Ik(61498)))]))) : Fk.push(Promise.all([Ik.e(377).then((() => Ik(61503))), Ik.e(378).then((() => Ik(61507)))]))
      }
      constructor(kk) {
        const Fk = {
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: kk,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || ak.e.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          vertexShader: Lk.VertexUrl,
          fragmentShader: Lk.FragmentUrl,
          uniforms: Lk.Uniforms
        };
        super({
          ...Fk,
          defines: Lk._GetDefines(Fk.engine)
        }), this.texelSize = new qk.p(0, 0)
      }
      bind() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.bind(kk), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
      }
    }
    Lk.VertexUrl = "fxaa", Lk.FragmentUrl = "fxaa", Lk.Uniforms = ["texelSize"];
    class tk extends ik.e {
      getClassName() {
        return "FxaaPostProcess"
      }
      constructor(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Tk = arguments.length > 3 ? arguments[3] : void 0,
          ik = arguments.length > 4 ? arguments[4] : void 0,
          yk = arguments.length > 5 ? arguments[5] : void 0,
          lk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const ak = {
          uniforms: Lk.Uniforms,
          size: "number" === typeof Fk ? Fk : void 0,
          camera: Ik,
          samplingMode: Tk || Xk.g.BILINEAR_SAMPLINGMODE,
          engine: ik,
          reusable: yk,
          textureType: lk,
          ...Fk
        };
        super(kk, Lk.FragmentUrl, {
          effectWrapper: "number" !== typeof Fk && Fk.effectWrapper ? void 0 : new Lk(kk, ik, ak),
          ...ak
        }), this.onApplyObservable.add((kk => {
          this._effectWrapper.texelSize = this.texelSize
        }))
      }
      static _Parse(kk, Fk, Ik, Xk) {
        return yk.b.Parse((() => new tk(kk.name, kk.options, Fk, kk.renderTargetSamplingMode, Ik.Oe(), kk.reusable)), kk, Ik, Xk)
      }
    }
    var Zk = Ik(38674),
      jk = Ik(40097),
      ek = Ik(41826),
      wk = Ik(41809),
      Hk = Ik(39878);
    const Jk = 0;
    class xk {
      constructor(kk, Fk, Ik) {
        this.name = kk, this._parentTask = Fk, this._context = Ik, this.disabled = !1
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
    class Pk extends xk {
      static IsObjectListPass(kk) {
        return void 0 !== kk.setObjectList
      }
      get objectList() {
        return this._objectList
      }
      setObjectList(kk) {
        this._objectList = kk
      }
      constructor(kk, Fk, Ik, Xk) {
        super(kk, Fk, Ik), this._engine = Xk
      }
      _isValid() {
        const kk = super._isValid();
        return kk || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
      }
    }
    class Kk extends xk {
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
      constructor(kk, Fk, Ik, Xk) {
        super(kk, Fk, Ik), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = Xk
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
        for (let Ik = Fk.next(); !0 !== Ik.done; Ik = Fk.next()) kk.add(Ik.value);
        if (void 0 !== this._renderTarget)
          if (Array.isArray(this._renderTarget))
            for (const Ik of this._renderTarget) void 0 !== Ik && kk.add(Ik);
          else kk.add(this._renderTarget);
        void 0 !== this._renderTargetDepth && kk.add(this._renderTargetDepth)
      }
      setOutputLayerAndFaceIndices(kk) {
        const Fk = this.frameGraphRenderTarget.renderTargetWrapper;
        if (Fk)
          for (const Ik of kk) Fk.setLayerAndFaceIndex(Ik.targetIndex, Ik.layerIndex, Ik.faceIndex)
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
    var Qk = Ik(37187);
    class sk {
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
        this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new Qk.e, this.onBeforeTaskExecute = new Qk.e, this.onAfterTaskExecute = new Qk.e, this.name = kk, this._frameGraph = Fk, this._reset()
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
          Ik = null;
        for (const lk of this._passes) {
          const Xk = lk._isValid();
          if (Xk) throw new Error(`Pass "${lk.name}" is not valid. ${Xk}`);
          if (Kk.IsRenderPass(lk)) {
            const kk = Array.isArray(lk.renderTarget) ? lk.renderTarget : [lk.renderTarget];
            Fk = [];
            for (const Ik of kk) void 0 !== Ik && Fk.push(this._frameGraph.textureManager.getTextureFromHandle(Ik));
            Ik = void 0 !== lk.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(lk.renderTargetDepth) : null
          } else Pk.IsObjectListPass(lk) && (kk = lk.objectList)
        }
        let Xk, Tk = null,
          ik = [],
          yk = null;
        for (const lk of this._passesDisabled) {
          const kk = lk._isValid();
          if (kk) throw new Error(`Pass "${lk.name}" is not valid. ${kk}`);
          if (Kk.IsRenderPass(lk)) {
            const kk = Array.isArray(lk.renderTarget) ? lk.renderTarget : [lk.renderTarget];
            Tk = [];
            for (const Fk of kk) void 0 !== Fk && Tk.push(this._frameGraph.textureManager.getTextureFromHandle(Fk));
            ik = kk, yk = void 0 !== lk.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(lk.renderTargetDepth) : null
          } else Pk.IsObjectListPass(lk) && (Xk = lk.objectList)
        }
        if (this._passesDisabled.length > 0) {
          if (!this._checkSameRenderTarget(Fk, Tk)) {
            let kk = !0;
            for (const Fk of ik)
              if (void 0 !== Fk && !this._frameGraph.textureManager.isHistoryTexture(Fk)) {
                kk = !1;
                break
              } if (!kk) throw new Error(`The output texture of the task "${this.name}" is different when it is enabled or disabled.`)
          }
          if (Ik !== yk && null !== yk) throw new Error(`The output depth texture of the task "${this.name}" is different when it is enabled or disabled.`);
          if (kk !== Xk && null !== Xk) throw new Error(`The output object list of the task "${this.name}" is different when it is enabled or disabled.`)
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
        for (let Ik = 0; Ik < kk.length; Ik++)
          if (kk[Ik] !== Fk[Ik]) return !1;
        return !0
      }
    }
    class Vk extends sk {
      get alphaMode() {
        return this.postProcess.alphaMode
      }
      set alphaMode(kk) {
        this.postProcess.alphaMode = kk
      }
      get drawWrapper() {
        return this._postProcessDrawWrapper
      }
      constructor(kk, Fk, Ik) {
        super(kk, Fk), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = Ik, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture = this._frameGraph.textureManager.createDanglingHandle(), this.outputDepthAttachmentTexture = this._frameGraph.textureManager.createDanglingHandle()
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
          Ik = arguments.length > 2 ? arguments[2] : void 0;
        if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
        const Xk = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
        if (Xk && (Xk.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, Xk), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentTexture, this.depthAttachmentTexture), Xk) {
          const kk = this._frameGraph.textureManager.getTextureAbsoluteDimensions(Xk);
          this._sourceWidth = kk.width, this._sourceHeight = kk.height
        }
        const Tk = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
        this._outputWidth = Tk.size.width, this._outputHeight = Tk.size.height;
        const ik = this._frameGraph.addRenderPass(this.name);
        if (ik.depthReadOnly = this.depthReadOnly, ik.stencilReadOnly = this.stencilReadOnly, ik.addDependencies(this.sourceTexture), ik.setRenderTarget(this.outputTexture), ik.setRenderTargetDepth(this.depthAttachmentTexture), ik.setExecuteFunc((kk => {
            kk.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && kk.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), Fk?.(kk), this.viewport && kk.setViewport(this.viewport), kk.applyFullScreenEffect(this._postProcessDrawWrapper, (() => {
              void 0 !== this.sourceTexture && kk.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), Ik?.(kk), this.postProcess.bind()
            }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), kk.restoreDefaultFramebuffer(), kk.popDebugGroup()
          })), !kk) {
          const kk = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
          kk.depthReadOnly = this.depthReadOnly, kk.stencilReadOnly = this.stencilReadOnly, kk.addDependencies(this.sourceTexture), kk.setRenderTarget(this.outputTexture), kk.setRenderTargetDepth(this.depthAttachmentTexture), kk.setExecuteFunc((kk => {
            void 0 !== this.sourceTexture && 0 === this.alphaMode && (this.viewport && kk.setViewport(this.viewport), kk.copyTexture(this.sourceTexture, void 0, void 0 !== this.viewport))
          }))
        }
        return ik
      }
      dispose() {
        this.postProcess.dispose(), super.dispose()
      }
    }
    class zk extends Vk {
      constructor(kk, Fk, Ik) {
        super(kk, Fk, Ik || new Lk(kk, Fk.engine))
      }
      getClassName() {
        return "FrameGraphFXAATask"
      }
      record() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Fk = arguments.length > 1 ? arguments[1] : void 0,
          Ik = arguments.length > 2 ? arguments[2] : void 0;
        const Xk = super.record(kk, Fk, Ik);
        return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, Xk
      }
    }
    var Sk = Ik(41822);
    class vk extends Vk {
      constructor(kk, Fk, Ik) {
        super(kk, Fk, Ik || new Sk.g(kk, Fk.engine))
      }
      getClassName() {
        return "FrameGraphPassTask"
      }
    }
    var Ek = Ik(40090),
      Ok = Ik(40169),
      nk = Ik(40139),
      Gk = Ik(40259),
      pk = Ik(37331);
    class uk {
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
        return this._sharedGizmoLight || (this._sharedGizmoLight = new Gk.b("shared gizmo light", new qk.t(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = pk.e.Gray()), this._sharedGizmoLight
      }
      static get DefaultUtilityLayer() {
        return null == uk._DefaultUtilityLayer ? uk._CreateDefaultUtilityLayerFromScene(ak.e.LastCreatedScene) : uk._DefaultUtilityLayer
      }
      static _CreateDefaultUtilityLayerFromScene(kk) {
        return uk._DefaultUtilityLayer = new uk(kk), uk._DefaultUtilityLayer.originalScene.hG.addOnce((() => {
          uk._DefaultUtilityLayer = null
        })), uk._DefaultUtilityLayer
      }
      static get DefaultKeepDepthUtilityLayer() {
        return null == uk._DefaultKeepDepthUtilityLayer ? uk._CreateDefaultKeepUtilityLayerFromScene(ak.e.LastCreatedScene) : uk._DefaultKeepDepthUtilityLayer
      }
      static _CreateDefaultKeepUtilityLayerFromScene(kk) {
        return uk._DefaultKeepDepthUtilityLayer = new uk(kk), uk._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, uk._DefaultKeepDepthUtilityLayer.originalScene.hG.addOnce((() => {
          uk._DefaultKeepDepthUtilityLayer = null
        })), uk._DefaultKeepDepthUtilityLayer
      }
      constructor(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.originalScene = kk, this.handleEvents = Fk, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.processAllEvents = !1, this.pickingEnabled = !0, this.onPointerOutObservable = new Qk.e, this.utilityLayerScene = new Ek.f(kk.Oe(), {
          virtual: !0,
          useFloatingOrigin: kk.floatingOriginMode
        }), this.utilityLayerScene.useRightHandedSystem = kk.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), Fk && (this._originalPointerObserver = kk.onPrePointerObservable.add((Fk => {
          if (!this.utilityLayerScene.activeCamera) return;
          if (!this.pickingEnabled) return;
          if (!this.processAllEvents && Fk.type !== Ok.d.POINTERMOVE && Fk.type !== Ok.d.POINTERUP && Fk.type !== Ok.d.POINTERDOWN && Fk.type !== Ok.d.POINTERDOUBLETAP) return;
          this.utilityLayerScene.pointerX = kk.pointerX, this.utilityLayerScene.pointerY = kk.pointerY;
          const Ik = Fk.event;
          if (kk.isPointerCaptured(Ik.pointerId)) return void(this._pointerCaptures[Ik.pointerId] = !1);
          const Xk = Ik => {
              let Xk;
              if (Fk.nearInteractionPickingInfo) Xk = Fk.nearInteractionPickingInfo.pickedMesh.mG() == Ik ? Fk.nearInteractionPickingInfo : new nk.b;
              else if (Ik !== this.utilityLayerScene && Fk.originalPickingInfo) Xk = Fk.originalPickingInfo;
              else {
                let Tk = null;
                this._renderCamera && (Tk = Ik._activeCamera, Ik._activeCamera = this._renderCamera, Fk.ray = null), Xk = Fk.ray ? Ik.pickWithRay(Fk.ray) : Ik.rZ(kk.pointerX, kk.pointerY), Tk && (Ik._activeCamera = Tk)
              }
              return Xk
            },
            Tk = Xk(this.utilityLayerScene);
          if (!Fk.ray && Tk && (Fk.ray = Tk.ray), Fk.originalPickingInfo?.aimTransform && Tk && (Tk.aimTransform = Fk.originalPickingInfo.aimTransform, Tk.gripTransform = Fk.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(Fk), this.onlyCheckPointerDownEvents && Fk.type != Ok.d.POINTERDOWN) return Fk.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new Ok.j(Fk.type, Fk.event, Tk), Fk.type), void(Fk.type === Ok.d.POINTERUP && this._pointerCaptures[Ik.pointerId] && (this._pointerCaptures[Ik.pointerId] = !1));
          if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) Tk && Tk.hit && (Fk.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new Ok.j(Fk.type, Fk.event, Tk), Fk.type), Fk.skipOnPointerObservable = !0);
          else {
            const Ik = Xk(kk),
              ik = Fk.event;
            Ik && Tk && (0 === Tk.distance && Ik.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(Ik.pickedMesh) ? (this._notifyObservers(Fk, Ik, ik), Fk.skipOnPointerObservable = !0) : Fk.type === Ok.d.POINTERDOWN ? (this._pointerCaptures[ik.pointerId] = !0, this._notifyObservers(Fk, Ik, ik)) : Fk.type !== Ok.d.POINTERMOVE && Fk.type !== Ok.d.POINTERUP || (this._lastPointerEvents[ik.pointerId] && (this.onPointerOutObservable.notifyObservers(ik.pointerId), delete this._lastPointerEvents[ik.pointerId]), this._notifyObservers(Fk, Ik, ik)) : !this._pointerCaptures[ik.pointerId] && (Tk.distance < Ik.distance || 0 === Ik.distance) ? (this._notifyObservers(Fk, Tk, ik), Fk.skipOnPointerObservable || (Fk.skipOnPointerObservable = Tk.distance > 0)) : !this._pointerCaptures[ik.pointerId] && Tk.distance >= Ik.distance && (this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(Ik.pickedMesh) ? (this._notifyObservers(Fk, Ik, ik), Fk.skipOnPointerObservable = !0) : (Fk.type !== Ok.d.POINTERMOVE && Fk.type !== Ok.d.POINTERUP || this._lastPointerEvents[ik.pointerId] && (this.onPointerOutObservable.notifyObservers(ik.pointerId), delete this._lastPointerEvents[ik.pointerId]), this._notifyObservers(Fk, Tk, ik))), Fk.type === Ok.d.POINTERUP && this._pointerCaptures[ik.pointerId] && (this._pointerCaptures[ik.pointerId] = !1))
          }
        })), this._originalPointerObserver && kk.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, Ik || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((kk => {
          this.shouldRender && kk == this.getRenderCamera() && this.render()
        }))), this._sceneDisposeObserver = this.originalScene.hG.add((() => {
          this.dispose()
        })), this._updateCamera()
      }
      _notifyObservers(kk, Fk, Ik) {
        kk.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new Ok.j(kk.type, kk.event, Fk), kk.type), this._lastPointerEvents[Ik.pointerId] = !0)
      }
      render() {
        if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
          const kk = this.utilityLayerScene.activeCamera.mG(),
            Fk = this.utilityLayerScene.activeCamera;
          Fk._scene = this.utilityLayerScene, Fk.leftCamera && (Fk.leftCamera._scene = this.utilityLayerScene), Fk.rightCamera && (Fk.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), Fk._scene = kk, Fk.leftCamera && (Fk.leftCamera._scene = kk), Fk.rightCamera && (Fk.rightCamera._scene = kk)
        }
      }
      dispose() {
        this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.hG.remove(this._sceneDisposeObserver), this._originalPointerObserver && this.originalScene.onPrePointerObservable.remove(this._originalPointerObserver), this.utilityLayerScene.dispose()
      }
      _updateCamera() {
        this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
      }
    }
    uk._DefaultUtilityLayer = null, uk._DefaultKeepDepthUtilityLayer = null;
    const bk = {
      FindMainCamera: function(kk) {
        return kk.findMainCamera()
      },
      FindMainObjectRenderer: function(kk) {
        return kk.findMainObjectRenderer()
      },
      CreateUtilityLayerRenderer: function(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const Ik = kk.Yw,
          Xk = new uk(Ik, Fk, !0);
        Xk.utilityLayerScene.activeCamera = Ik.activeCamera;
        let Tk = bk.FindMainCamera(Ik.frameGraph);
        !Tk && Ik.cameras.length > 0 && (Tk = Ik.cameras[0]), Tk && (Xk.setRenderCamera(Tk), Xk.utilityLayerScene.activeCamera = Tk);
        const ik = Ik.onAfterRenderObservable.add((() => {
          Xk.render()
        }));
        return Xk.utilityLayerScene.hG.addOnce((() => {
          Ik.onAfterRenderObservable.remove(ik)
        })), Xk
      }
    };
    let Rk = null;

    function Uk(kk, Fk, Ik, Xk) {
      let Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        ik = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        yk = arguments.length > 6 ? arguments[6] : void 0,
        lk = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        ak = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
      const {
        height: qk,
        width: Lk
      } = Bk(kk, Fk, Ik);
      if (!qk || !Lk) return void Zk.e.Error("Invalid 'size' parameter !");
      const tk = Fk.mG();
      let ek = tk.activeCamera !== Fk;
      if (tk.frameGraph) {
        const kk = bk.FindMainObjectRenderer(tk.frameGraph);
        kk && (ek = kk.camera !== Fk)
      }
      ek ? ck(kk, Fk, Ik, (kk => {
        if (ik) {
          const Fk = new Blob([kk]);
          jk.h.DownloadBlob(Fk), Xk && Xk("")
        } else Xk && Xk(kk)
      }), Tk, 1, kk.getCreationOptions().antialias, void 0, void 0, void 0, void 0, yk) : kk.onEndFrameObservable.addOnce((() => {
        Rk || (Rk = document.createElement("canvas")), Rk.width = Lk, Rk.height = qk;
        const Fk = Rk.getContext("2d"),
          Ik = kk.getRenderingCanvas();
        if (!Fk || !Ik) return void Zk.e.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
        const ek = Ik.width,
          wk = Ik.height,
          Hk = Rk.width,
          Jk = Rk.height,
          xk = Hk / ek,
          Pk = Jk / wk,
          Kk = lk ? Math.max(xk, Pk) : Math.min(xk, Pk),
          Qk = ek * Kk,
          sk = wk * Kk,
          Vk = (Hk - Qk) / 2,
          zk = (Jk - sk) / 2;
        Fk.save(), Fk.fillStyle = ak ? tk.clearColor.toHexString() : "rgba(0, 0, 0, 0)", Fk.fillRect(0, 0, Lk, qk), Fk.restore(), Fk.drawImage(Ik, 0, 0, ek, wk, Vk, zk, Qk, sk), ik ? (jk.h.EncodeScreenshotCanvasData(Rk, void 0, Tk, void 0, yk), Xk && Xk("")) : jk.h.EncodeScreenshotCanvasData(Rk, Xk, Tk, void 0, yk)
      }))
    }
    async function Ck(kk, Fk, Ik) {
      let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Tk = arguments.length > 4 ? arguments[4] : void 0,
        ik = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        yk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        lk = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      return await new Promise(((ak, qk) => {
        Uk(kk, Fk, Ik, (kk => {
          "undefined" !== typeof kk ? ak(kk) : qk(new Error("Data is undefined"))
        }), Xk, lk, Tk, ik, yk)
      }))
    }
    async function Nk(kk, Fk, Ik, Xk) {
      let Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        ik = arguments.length > 5 ? arguments[5] : void 0,
        yk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return await new Promise((lk => {
        Uk(kk, Fk, {
          width: Ik,
          height: Xk
        }, (() => {
          lk()
        }), Tk, !0, ik, yk)
      }))
    }

    function ck(kk, Fk, ik, yk) {
      let lk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        ak = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
        qk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Lk = arguments.length > 7 ? arguments[7] : void 0,
        jk = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Jk = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        xk = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
        Pk = arguments.length > 11 ? arguments[11] : void 0,
        Kk = arguments.length > 12 ? arguments[12] : void 0,
        Qk = arguments.length > 13 ? arguments[13] : void 0,
        sk = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
        Vk = arguments.length > 15 ? arguments[15] : void 0;
      const zk = Fk.mG();
      if (zk.frameGraph) return void fk(zk.frameGraph, Fk, ik, lk, ak, qk, Lk, Pk, Qk, !yk).then((kk => {
        yk && yk(kk)
      }));
      const {
        height: Sk,
        width: vk,
        finalWidth: Ek,
        finalHeight: Ok
      } = Bk(kk, Fk, ik), nk = {
        width: vk,
        height: Sk
      };
      if (!Sk || !vk) return void Zk.e.Error("Invalid 'size' parameter !");
      kk.skipFrameRender = !0;
      const Gk = kk.getRenderWidth,
        pk = kk.getRenderHeight;
      kk.getRenderWidth = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && kk._currentRenderTarget ? kk._currentRenderTarget.width : vk
      }, kk.getRenderHeight = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && kk._currentRenderTarget ? kk._currentRenderTarget.height : Sk
      }, kk.onResizeObservable.hasObservers() && kk.onResizeObservable.notifyObservers(kk);
      const uk = new Tk.c("screenShot", nk, zk, !1, !1, 0, !1, Xk.g.BILINEAR_SAMPLINGMODE, void 0, Jk, void 0, void 0, void 0, ak);
      uk.renderList = zk.meshes.slice(), uk.samples = ak, uk.renderSprites = jk, uk.activeCamera = Fk, uk.forceLayerMaskCheck = xk, Kk?.(uk);
      const bk = Qk || ek.DumpData,
        Rk = () => {
          zk.incrementRenderId(), zk.resetCachedMaterial(), (0, Hk.h)((() => uk.isReadyForRendering() && Fk.isReady(!0)), (() => {
            kk.onEndFrameObservable.addOnce((() => {
              Ek === vk && Ok === Sk ? uk.readPixels(void 0, void 0, void 0, !1).then((kk => {
                bk(vk, Sk, kk, yk, lk, Lk, !0, void 0, Pk), uk.dispose()
              })) : (kk.isWebGPU ? Ik.e(371).then((() => Ik(61438))) : Ik.e(372).then((() => Ik(61445)))).then((async () => await (0, wk.e)("pass", uk.getInternalTexture(), zk, void 0, void 0, void 0, Ek, Ok).then((Fk => {
                kk._readTexturePixels(Fk, Ek, Ok, -1, 0, null, !0, !1, 0, 0).then((kk => {
                  bk(Ek, Ok, kk, yk, lk, Lk, !0, void 0, Pk), Fk.dispose()
                }))
              }))))
            })), zk.incrementRenderId(), zk.resetCachedMaterial();
            const Xk = zk.activeCamera,
              Tk = zk.activeCameras,
              ik = Fk.outputRenderTarget,
              ak = zk.spritesEnabled;
            zk.activeCamera = Fk, zk.activeCameras = null, Fk.outputRenderTarget = uk, zk.spritesEnabled = jk;
            const qk = zk.meshes;
            zk.meshes = uk.renderList || zk.meshes;
            try {
              zk.render()
            } finally {
              zk.activeCamera = Xk, zk.activeCameras = Tk, Fk.outputRenderTarget = ik, zk.spritesEnabled = ak, zk.meshes = qk, kk.getRenderWidth = Gk, kk.getRenderHeight = pk, kk.onResizeObservable.hasObservers() && kk.onResizeObservable.notifyObservers(kk), Fk.getProjectionMatrix(!0), kk.skipFrameRender = !1
            }
          }), (() => {
            kk.skipFrameRender = !1, kk.getRenderWidth = Gk, kk.getRenderHeight = pk, Vk?.()
          }), void 0, sk)
        };
      if (qk) {
        const kk = new tk("antialiasing", 1, zk.activeCamera);
        uk.addPostProcess(kk), kk.autoClear = !0, kk.onEffectCreatedObservable.addOnce((kk => {
          kk.isReady() ? Rk() : kk.onCompiled = () => {
            Rk()
          }
        }))
      } else Rk()
    }
    async function Wk(kk, Fk, Ik) {
      let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        ik = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        yk = arguments.length > 6 ? arguments[6] : void 0,
        lk = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        ak = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        qk = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
        Lk = arguments.length > 10 ? arguments[10] : void 0,
        tk = arguments.length > 11 ? arguments[11] : void 0,
        Zk = arguments.length > 12 ? arguments[12] : void 0;
      return await new Promise(((jk, ek) => {
        ck(kk, Fk, Ik, (kk => {
          "undefined" !== typeof kk ? jk(kk) : ek(new Error("Data is undefined"))
        }), Xk, Tk, ik, yk, lk, ak, qk, Lk, tk, Zk)
      }))
    }
    async function fk(kk, Fk, Ik) {
      let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        ik = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        yk = arguments.length > 6 ? arguments[6] : void 0,
        lk = arguments.length > 7 ? arguments[7] : void 0,
        ak = arguments.length > 8 ? arguments[8] : void 0,
        qk = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        Lk = arguments.length > 10 ? arguments[10] : void 0;
      const tk = kk.engine,
        Zk = kk.textureManager,
        {
          height: jk,
          width: wk,
          finalWidth: Hk,
          finalHeight: xk
        } = Bk(tk, Fk, Ik),
        Pk = {
          width: wk,
          height: jk
        },
        Kk = ak || ek.DumpData,
        Qk = kk.tasks,
        sk = Qk.length,
        Vk = kk.pausedExecution,
        Sk = tk.getCaps().parallelShaderCompile;
      Zk.setBackBufferTextures(0, 0, {
        size: Pk,
        options: {
          createMipMaps: !1,
          samples: Tk,
          types: [0],
          formats: [5],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot color"]
        },
        sizeIsPercentage: !1
      }, {
        size: Pk,
        options: {
          createMipMaps: !1,
          samples: Tk,
          types: [0],
          formats: [tk.isStencilEnable ? 13 : 14],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot depth"]
        },
        sizeIsPercentage: !1
      });
      let Ek = Jk;
      if (ik) {
        const Fk = new zk("fxaa", kk);
        Fk.sourceTexture = Ek, Ek = Fk.outputTexture, kk.addTask(Fk)
      }
      if (Hk !== wk || xk !== jk) {
        const Fk = new vk("pass", kk);
        Fk.sourceTexture = Ek, Fk.targetTexture = kk.textureManager.createRenderTargetTexture("pass_output", {
          size: {
            width: Hk,
            height: xk
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
        }), Ek = Fk.outputTexture, kk.addTask(Fk)
      }
      const Ok = bk.FindMainObjectRenderer(kk);
      let nk = null;
      Ok && (nk = Ok.camera, Ok.camera = Fk), tk.getCaps().parallelShaderCompile = void 0, await kk.buildAsync();
      const Gk = Lk ?? (Zk.hasHistoryTextures ? 32 : 1);
      for (let ek = 0; ek < Gk; ++ek) kk.execute();
      kk.pausedExecution = !0, tk.getCaps().parallelShaderCompile = Sk;
      for (let ek = sk; ek < Qk.length; ++ek) kk.tasks[ek].dispose();
      kk.tasks.length = sk, Ok && nk && (Ok.camera = nk);
      const pk = kk.textureManager.getTextureFromHandle(Ek);
      return pk.incrementReferences(), Zk.resetBackBufferTextures(), await kk.buildAsync(), kk.pausedExecution = Vk, new Promise((kk => {
        tk._readTexturePixels(pk, Hk, xk, -1, 0, null, !0, !1, 0, 0).then((async Fk => {
          pk.dispose(), Kk(Hk, xk, Fk, qk ? void 0 : Fk => kk(Fk), Xk, yk, !0, void 0, lk), qk && kk(null)
        }))
      }))
    }

    function Bk(kk, Fk, Ik) {
      let Xk = 0,
        Tk = 0,
        ik = 0,
        yk = 0;
      if ("object" === typeof Ik) {
        const lk = Ik.precision ? Math.abs(Ik.precision) : 1;
        Ik.width && Ik.height ? (Xk = Ik.height * lk, Tk = Ik.width * lk) : Ik.width && !Ik.height ? (Tk = Ik.width * lk, Xk = Math.round(Tk / kk.getAspectRatio(Fk))) : Ik.height && !Ik.width ? (Xk = Ik.height * lk, Tk = Math.round(Xk * kk.getAspectRatio(Fk))) : (Tk = Math.round(kk.getRenderWidth() * lk), Xk = Math.round(Tk / kk.getAspectRatio(Fk))), Ik.finalWidth && Ik.finalHeight ? (yk = Ik.finalHeight, ik = Ik.finalWidth) : Ik.finalWidth && !Ik.finalHeight ? (ik = Ik.finalWidth, yk = Math.round(ik / kk.getAspectRatio(Fk))) : Ik.finalHeight && !Ik.finalWidth ? (yk = Ik.finalHeight, ik = Math.round(yk * kk.getAspectRatio(Fk))) : (ik = Tk, yk = Xk)
      } else isNaN(Ik) || (Xk = Ik, Tk = Ik, ik = Ik, yk = Ik);
      return Tk && (Tk = Math.floor(Tk)), Xk && (Xk = Math.floor(Xk)), ik && (ik = Math.floor(ik)), yk && (yk = Math.floor(yk)), {
        height: 0 | Xk,
        width: 0 | Tk,
        finalWidth: 0 | ik,
        finalHeight: 0 | yk
      }
    }
    const dk = {
      CreateScreenshot: Uk,
      CreateScreenshotAsync: Ck,
      CreateScreenshotWithResizeAsync: Nk,
      CreateScreenshotUsingRenderTarget: ck,
      CreateScreenshotUsingRenderTargetAsync: Wk,
      CreateScreenshotForFrameGraphAsync: fk
    };
    let Yk = !1;

    function Ak() {
      if (Yk) return;
      Yk = !0;
      jk.h.CreateScreenshot = Uk, jk.h.CreateScreenshotAsync = Ck, jk.h.CreateScreenshotUsingRenderTarget = ck, jk.h.CreateScreenshotUsingRenderTargetAsync = Wk
    }
    Ak()
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);