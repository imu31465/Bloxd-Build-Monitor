export const id = 235;
export const ids = [235, 236];
export const modules = {
  39818: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Mk,
      c: () => xk
    });
    var Dk = ik(39566),
      fk = ik(39570),
      Sk = ik(36698),
      bk = ik(36874),
      rk = ik(39822),
      Pk = ik(39787),
      mk = ik(36734);
    let Mk = (() => {
        var kk;
        let ek, ik, Pk = rk.d,
          mk = [],
          Mk = [],
          Kk = [],
          xk = [];
        return kk = class extends Pk {
          constructor(kk, ek, ik, fk) {
            super(kk, ik, fk), this.groundColor = (0, Dk.e)(this, mk, new bk.e(0, 0, 0)), this.direction = ((0, Dk.e)(this, Mk), (0, Dk.e)(this, Kk, void 0)), (0, Dk.e)(this, xk), this.direction = ek || Sk.o.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(kk) {
            return this.direction = Sk.o.Normalize(kk.subtract(Sk.o.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(kk, ek) {
            const ik = Sk.o.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", ik.x, ik.y, ik.z, 0, ek), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), ek), this
          }
          transferToNodeMaterialEffect(kk, ek) {
            const ik = Sk.o.Normalize(this.direction);
            return kk.setFloat3(ek, ik.x, ik.y, ik.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = Sk.b.Identity()), this._worldMatrix
          }
          getTypeID() {
            return rk.d.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(kk, ek) {
            kk["HEMILIGHT" + ek] = !0
          }
        }, (() => {
          const Sk = "function" === typeof Symbol && Symbol.metadata ? Object.create(Pk[Symbol.metadata] ?? null) : void 0;
          ek = [(0, fk.k)()], ik = [(0, fk.F)()], (0, Dk.d)(null, null, ek, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: kk => "groundColor" in kk,
              get: kk => kk.groundColor,
              set: (kk, ek) => {
                kk.groundColor = ek
              }
            },
            metadata: Sk
          }, mk, Mk), (0, Dk.d)(null, null, ik, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: kk => "direction" in kk,
              get: kk => kk.direction,
              set: (kk, ek) => {
                kk.direction = ek
              }
            },
            metadata: Sk
          }, Kk, xk), Sk && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Sk
          })
        })(), kk
      })(),
      Kk = !1;

    function xk() {
      Kk || (Kk = !0, Pk.b.AddNodeConstructor("Light_Type_3", ((kk, ek) => () => new Mk(kk, Sk.o.Zero(), ek))), (0, mk.h)("BABYLON.HemisphericLight", Mk))
    }
  },
  37365: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => fk
    });
    var Dk = ik(37372);
    class fk {
      static GetPlanes(kk) {
        const ek = [];
        for (let ik = 0; ik < 6; ik++) ek.push(new Dk.c(0, 0, 0, 0));
        return fk.GetPlanesToRef(kk, ek), ek
      }
      static GetNearPlaneToRef(kk, ek) {
        const ik = kk.m;
        ek.normal.x = ik[3] + ik[2], ek.normal.y = ik[7] + ik[6], ek.normal.z = ik[11] + ik[10], ek.d = ik[15] + ik[14], ek.normalize()
      }
      static GetFarPlaneToRef(kk, ek) {
        const ik = kk.m;
        ek.normal.x = ik[3] - ik[2], ek.normal.y = ik[7] - ik[6], ek.normal.z = ik[11] - ik[10], ek.d = ik[15] - ik[14], ek.normalize()
      }
      static GetLeftPlaneToRef(kk, ek) {
        const ik = kk.m;
        ek.normal.x = ik[3] + ik[0], ek.normal.y = ik[7] + ik[4], ek.normal.z = ik[11] + ik[8], ek.d = ik[15] + ik[12], ek.normalize()
      }
      static GetRightPlaneToRef(kk, ek) {
        const ik = kk.m;
        ek.normal.x = ik[3] - ik[0], ek.normal.y = ik[7] - ik[4], ek.normal.z = ik[11] - ik[8], ek.d = ik[15] - ik[12], ek.normalize()
      }
      static GetTopPlaneToRef(kk, ek) {
        const ik = kk.m;
        ek.normal.x = ik[3] - ik[1], ek.normal.y = ik[7] - ik[5], ek.normal.z = ik[11] - ik[9], ek.d = ik[15] - ik[13], ek.normalize()
      }
      static GetBottomPlaneToRef(kk, ek) {
        const ik = kk.m;
        ek.normal.x = ik[3] + ik[1], ek.normal.y = ik[7] + ik[5], ek.normal.z = ik[11] + ik[9], ek.d = ik[15] + ik[13], ek.normalize()
      }
      static GetPlanesToRef(kk, ek) {
        fk.GetNearPlaneToRef(kk, ek[0]), fk.GetFarPlaneToRef(kk, ek[1]), fk.GetLeftPlaneToRef(kk, ek[2]), fk.GetRightPlaneToRef(kk, ek[3]), fk.GetTopPlaneToRef(kk, ek[4]), fk.GetBottomPlaneToRef(kk, ek[5])
      }
      static IsPointInFrustum(kk, ek) {
        for (let ik = 0; ik < 6; ik++)
          if (ek[ik].dotCoordinate(kk) < 0) return !1;
        return !0
      }
    }
  },
  37372: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => fk
    });
    var Dk = ik(36698);
    class fk {
      constructor(kk, ek, ik, fk) {
        this.normal = new Dk.o(kk, ek, ik), this.d = fk
      }
      Tik() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new fk(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let ek = 0;
        return 0 !== kk && (ek = 1 / kk), this.normal.x *= ek, this.normal.y *= ek, this.normal.z *= ek, this.d *= ek, this
      }
      transform(kk) {
        const ek = fk._TmpMatrix;
        kk.invertToRef(ek);
        const ik = ek.m,
          Dk = this.normal.x,
          Sk = this.normal.y,
          bk = this.normal.z,
          rk = this.d,
          Pk = Dk * ik[0] + Sk * ik[1] + bk * ik[2] + rk * ik[3],
          mk = Dk * ik[4] + Sk * ik[5] + bk * ik[6] + rk * ik[7],
          Mk = Dk * ik[8] + Sk * ik[9] + bk * ik[10] + rk * ik[11],
          Kk = Dk * ik[12] + Sk * ik[13] + bk * ik[14] + rk * ik[15];
        return new fk(Pk, mk, Mk, Kk)
      }
      dotCoordinate(kk) {
        return this.normal.x * kk.x + this.normal.y * kk.y + this.normal.z * kk.z + this.d
      }
      copyFromPoints(kk, ek, ik) {
        const Dk = ek.x - kk.x,
          fk = ek.y - kk.y,
          Sk = ek.z - kk.z,
          bk = ik.x - kk.x,
          rk = ik.y - kk.y,
          Pk = ik.z - kk.z,
          mk = fk * Pk - Sk * rk,
          Mk = Sk * bk - Dk * Pk,
          Kk = Dk * rk - fk * bk,
          xk = Math.sqrt(mk * mk + Mk * Mk + Kk * Kk);
        let nk;
        return nk = 0 !== xk ? 1 / xk : 0, this.normal.x = mk * nk, this.normal.y = Mk * nk, this.normal.z = Kk * nk, this.d = -(this.normal.x * kk.x + this.normal.y * kk.y + this.normal.z * kk.z), this
      }
      isFrontFacingTo(kk, ek) {
        return Dk.o.Dot(this.normal, kk) <= ek
      }
      signedDistanceTo(kk) {
        return Dk.o.Dot(kk, this.normal) + this.d
      }
      static FromArray(kk) {
        return new fk(kk[0], kk[1], kk[2], kk[3])
      }
      static FromPoints(kk, ek, ik) {
        const Dk = new fk(0, 0, 0, 0);
        return Dk.copyFromPoints(kk, ek, ik), Dk
      }
      static FromPositionAndNormal(kk, ek) {
        const ik = new fk(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(kk, ek, ik)
      }
      static FromPositionAndNormalToRef(kk, ek, ik) {
        return ik.normal.Fs(ek), ik.normal.normalize(), ik.d = -kk.dot(ik.normal), ik
      }
      static SignedDistanceToPlaneFromPositionAndNormal(kk, ek, ik) {
        const fk = -(ek.x * kk.x + ek.y * kk.y + ek.z * kk.z);
        return Dk.o.Dot(ik, ek) + fk
      }
    }
    fk._TmpMatrix = Dk.b.Identity()
  },
  37679: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Dk
    });
    class Dk {
      constructor(kk, ek, ik, Dk) {
        this.x = kk, this.y = ek, this.width = ik, this.height = Dk
      }
      toGlobal(kk, ek) {
        return new Dk(this.x * kk, this.y * ek, this.width * kk, this.height * ek)
      }
      toGlobalToRef(kk, ek, ik) {
        return ik.x = this.x * kk, ik.y = this.y * ek, ik.width = this.width * kk, ik.height = this.height * ek, this
      }
      clone() {
        return new Dk(this.x, this.y, this.width, this.height)
      }
    }
  },
  38265: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Sk
    });
    var Dk = ik(38272);
    const fk = (kk, ek, ik) => kk ? kk.getClassName && "Mesh" === kk.getClassName() ? null : !kk.getClassName || "SubMesh" !== kk.getClassName() && "PhysicsBody" !== kk.getClassName() ? kk.clone ? kk.clone() : Array.isArray(kk) ? kk.slice() : ik && "object" === typeof kk ? {
      ...kk
    } : null : kk.clone(ek) : null;
    class Sk {
      static DeepCopy(kk, ek, ik, Sk) {
        let bk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const rk = function(kk) {
          const ek = [];
          do {
            const ik = Object.getOwnPropertyNames(kk);
            for (const kk of ik) - 1 === ek.indexOf(kk) && ek.push(kk)
          } while (kk = Object.getPrototypeOf(kk));
          return ek
        }(kk);
        for (const mk of rk) {
          if ("_" === mk[0] && (!Sk || -1 === Sk.indexOf(mk))) continue;
          if (mk.endsWith("Observable")) continue;
          if (ik && -1 !== ik.indexOf(mk)) continue;
          const rk = kk[mk],
            Mk = typeof rk;
          if ("function" !== Mk) try {
            if ("object" === Mk)
              if (rk instanceof Uint8Array) ek[mk] = Uint8Array.from(rk);
              else if (rk instanceof Array) {
              if (ek[mk] = [], rk.length > 0)
                if ("object" == typeof rk[0])
                  for (let kk = 0; kk < rk.length; kk++) {
                    const ik = fk(rk[kk], ek, bk); - 1 === ek[mk].indexOf(ik) && ek[mk].push(ik)
                  } else ek[mk] = rk.slice(0)
            } else ek[mk] = fk(rk, ek, bk);
            else ek[mk] = rk
          } catch (Pk) {
            Dk.b.Warn(Pk.message)
          }
        }
      }
    }
  },
  37497: (kk, ek, ik) => {
    function Dk() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (kk => {
        const ek = 16 * Math.random() | 0;
        return ("x" === kk ? ek : 3 & ek | 8).toString(16)
      }))
    }
    ik.d(ek, {
      b: () => Dk
    })
  },
  38272: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Dk
    });
    class Dk {
      static _CheckLimit(kk, ek) {
        let ik = Dk._LogLimitOutputs[kk];
        return ik ? ik.current++ : (ik = {
          limit: ek,
          current: 1
        }, Dk._LogLimitOutputs[kk] = ik), ik.current <= ik.limit
      }
      static _GenerateLimitMessage(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const ik = Dk._LogLimitOutputs[kk];
        if (!ik || !Dk.MessageLimitReached) return;
        const fk = this._Levels[ek];
        ik.current === ik.limit && Dk[fk.name](Dk.MessageLimitReached.replace(/%LIMIT%/g, "" + ik.limit).replace(/%TYPE%/g, fk.name ?? ""))
      }
      static _AddLogEntry(kk) {
        Dk._LogCache = kk + Dk._LogCache, Dk.OnNewCacheEntry && Dk.OnNewCacheEntry(kk)
      }
      static _FormatMessage(kk) {
        const ek = kk => kk < 10 ? "0" + kk : "" + kk,
          ik = new Date;
        return "[" + ek(ik.getHours()) + ":" + ek(ik.getMinutes()) + ":" + ek(ik.getSeconds()) + "]: " + kk
      }
      static _LogDisabled(kk, ek) {}
      static _LogEnabled() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ek = arguments.length > 1 ? arguments[1] : void 0,
          ik = arguments.length > 2 ? arguments[2] : void 0;
        const fk = Array.isArray(ek) ? ek[0] : ek;
        if (void 0 !== ik && !Dk._CheckLimit(fk, ik)) return;
        const Sk = Dk._FormatMessage(fk),
          bk = this._Levels[kk],
          rk = Array.isArray(ek) ? ek.slice(1) : [];
        bk.logFunc && bk.logFunc("BJS - " + Sk, ...rk);
        const Pk = `<div style='color:${bk.color}'>${Sk}</div><br>`;
        Dk._AddLogEntry(Pk), Dk._GenerateLimitMessage(fk, kk)
      }
      static get LogCache() {
        return Dk._LogCache
      }
      static ClearLogCache() {
        Dk._LogCache = "", Dk._LogLimitOutputs = {}, Dk.errorsCount = 0
      }
      static set LogLevels(kk) {
        Dk.Log = Dk._LogDisabled, Dk.Warn = Dk._LogDisabled, Dk.Error = Dk._LogDisabled;
        const ek = [Dk.MessageLogLevel, Dk.WarningLogLevel, Dk.ErrorLogLevel];
        for (const ik of ek)
          if ((kk & ik) === ik) {
            const kk = this._Levels[ik];
            Dk[kk.name] = Dk._LogEnabled.bind(Dk, ik)
          }
      }
    }
    Dk.NoneLogLevel = 0, Dk.MessageLogLevel = 1, Dk.WarningLogLevel = 2, Dk.ErrorLogLevel = 4, Dk.AllLogLevel = 7, Dk.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Dk._LogCache = "", Dk._LogLimitOutputs = {}, Dk._Levels = [{}, {
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
    }], Dk.errorsCount = 0, Dk.Log = Dk._LogEnabled.bind(Dk, Dk.MessageLogLevel), Dk.Warn = Dk._LogEnabled.bind(Dk, Dk.WarningLogLevel), Dk.Error = Dk._LogEnabled.bind(Dk, Dk.ErrorLogLevel)
  },
  60658: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      CreateScreenshot: () => Ek,
      CreateScreenshotAsync: () => hk,
      CreateScreenshotForFrameGraphAsync: () => Xk,
      CreateScreenshotUsingRenderTarget: () => Wk,
      CreateScreenshotUsingRenderTargetAsync: () => tk,
      CreateScreenshotWithResizeAsync: () => ak,
      RegisterScreenshotTools: () => Zk,
      ScreenshotTools: () => ck
    });
    var Dk = ik(40053),
      fk = ik(41404),
      Sk = ik(41376),
      bk = ik(39585),
      rk = ik(41384),
      Pk = ik(36722),
      mk = ik(36698);
    class Mk extends rk.f {
      static _GetDefines(kk) {
        if (!kk) return null;
        return kk.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
      }
      _gatherImports(kk, ek) {
        kk ? (this._webGPUReady = !0, ek.push(Promise.all([ik.e(374).then((() => ik(60897))), ik.e(375).then((() => ik(60901)))]))) : ek.push(Promise.all([ik.e(376).then((() => ik(60909))), ik.e(377).then((() => ik(60918)))]))
      }
      constructor(kk) {
        const ek = {
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: kk,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || Pk.e.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          vertexShader: Mk.VertexUrl,
          fragmentShader: Mk.FragmentUrl,
          uniforms: Mk.Uniforms
        };
        super({
          ...ek,
          defines: Mk._GetDefines(ek.engine)
        }), this.texelSize = new mk.l(0, 0)
      }
      bind() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.bind(kk), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
      }
    }
    Mk.VertexUrl = "fxaa", Mk.FragmentUrl = "fxaa", Mk.Uniforms = ["texelSize"];
    class Kk extends Sk.c {
      getClassName() {
        return "FxaaPostProcess"
      }
      constructor(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          fk = arguments.length > 3 ? arguments[3] : void 0,
          Sk = arguments.length > 4 ? arguments[4] : void 0,
          bk = arguments.length > 5 ? arguments[5] : void 0,
          rk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const Pk = {
          uniforms: Mk.Uniforms,
          size: "number" === typeof ek ? ek : void 0,
          camera: ik,
          samplingMode: fk || Dk.f.BILINEAR_SAMPLINGMODE,
          engine: Sk,
          reusable: bk,
          textureType: rk,
          ...ek
        };
        super(kk, Mk.FragmentUrl, {
          effectWrapper: "number" !== typeof ek && ek.effectWrapper ? void 0 : new Mk(kk, Sk, Pk),
          ...Pk
        }), this.onApplyObservable.add((kk => {
          this._effectWrapper.texelSize = this.texelSize
        }))
      }
      static _Parse(kk, ek, ik, Dk) {
        return bk.b.Parse((() => new Kk(kk.name, kk.options, ek, kk.renderTargetSamplingMode, ik.JU(), kk.reusable)), kk, ik, Dk)
      }
    }
    var xk = ik(38272),
      nk = ik(39662),
      Uk = ik(41413),
      Hk = ik(41397),
      wk = ik(39458);
    const lk = 0;
    class pk {
      constructor(kk, ek, ik) {
        this.name = kk, this._parentTask = ek, this._context = ik, this.disabled = !1
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
    class yk extends pk {
      static IsObjectListPass(kk) {
        return void 0 !== kk.setObjectList
      }
      get objectList() {
        return this._objectList
      }
      setObjectList(kk) {
        this._objectList = kk
      }
      constructor(kk, ek, ik, Dk) {
        super(kk, ek, ik), this._engine = Dk
      }
      _isValid() {
        const kk = super._isValid();
        return kk || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
      }
    }
    class Yk extends pk {
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
      constructor(kk, ek, ik, Dk) {
        super(kk, ek, ik), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = Dk
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
            for (const ek of kk) this._dependencies.add(ek);
          else this._dependencies.add(kk)
      }
      collectDependencies(kk) {
        const ek = this._dependencies.keys();
        for (let ik = ek.next(); !0 !== ik.done; ik = ek.next()) kk.add(ik.value);
        if (void 0 !== this._renderTarget)
          if (Array.isArray(this._renderTarget))
            for (const ik of this._renderTarget) void 0 !== ik && kk.add(ik);
          else kk.add(this._renderTarget);
        void 0 !== this._renderTargetDepth && kk.add(this._renderTargetDepth)
      }
      setOutputLayerAndFaceIndices(kk) {
        const ek = this.frameGraphRenderTarget.renderTargetWrapper;
        if (ek)
          for (const ik of kk) ek.setLayerAndFaceIndex(ik.targetIndex, ik.layerIndex, ik.faceIndex)
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
    var Lk = ik(36726);
    class Ck {
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
      constructor(kk, ek) {
        this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new Lk.c, this.onBeforeTaskExecute = new Lk.c, this.onAfterTaskExecute = new Lk.c, this.name = kk, this._frameGraph = ek, this._reset()
      }
      _reset() {
        for (const kk of this._passes) kk._dispose();
        for (const kk of this._passesDisabled) kk._dispose();
        this._passes.length = 0, this._passesDisabled.length = 0
      }
      _addPass(kk, ek) {
        ek ? this._passesDisabled.push(kk) : this._passes.push(kk)
      }
      _checkTask() {
        let kk, ek = null,
          ik = null;
        for (const rk of this._passes) {
          const Dk = rk._isValid();
          if (Dk) throw new Error(`Pass "${rk.name}" is not valid. ${Dk}`);
          if (Yk.IsRenderPass(rk)) {
            const kk = Array.isArray(rk.renderTarget) ? rk.renderTarget : [rk.renderTarget];
            ek = [];
            for (const ik of kk) void 0 !== ik && ek.push(this._frameGraph.textureManager.getTextureFromHandle(ik));
            ik = void 0 !== rk.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(rk.renderTargetDepth) : null
          } else yk.IsObjectListPass(rk) && (kk = rk.objectList)
        }
        let Dk, fk = null,
          Sk = [],
          bk = null;
        for (const rk of this._passesDisabled) {
          const kk = rk._isValid();
          if (kk) throw new Error(`Pass "${rk.name}" is not valid. ${kk}`);
          if (Yk.IsRenderPass(rk)) {
            const kk = Array.isArray(rk.renderTarget) ? rk.renderTarget : [rk.renderTarget];
            fk = [];
            for (const ek of kk) void 0 !== ek && fk.push(this._frameGraph.textureManager.getTextureFromHandle(ek));
            Sk = kk, bk = void 0 !== rk.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(rk.renderTargetDepth) : null
          } else yk.IsObjectListPass(rk) && (Dk = rk.objectList)
        }
        if (this._passesDisabled.length > 0) {
          if (!this._checkSameRenderTarget(ek, fk)) {
            let kk = !0;
            for (const ek of Sk)
              if (void 0 !== ek && !this._frameGraph.textureManager.isHistoryTexture(ek)) {
                kk = !1;
                break
              } if (!kk) throw new Error(`The output texture of the task "${this.name}" is different when it is enabled or disabled.`)
          }
          if (ik !== bk && null !== bk) throw new Error(`The output depth texture of the task "${this.name}" is different when it is enabled or disabled.`);
          if (kk !== Dk && null !== Dk) throw new Error(`The output object list of the task "${this.name}" is different when it is enabled or disabled.`)
        }
      }
      _execute() {
        const kk = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
        this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const ek of kk) ek._execute()
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
      _checkSameRenderTarget(kk, ek) {
        if (null === kk || null === ek) return kk === ek;
        if (kk.length !== ek.length) return !1;
        for (let ik = 0; ik < kk.length; ik++)
          if (kk[ik] !== ek[ik]) return !1;
        return !0
      }
    }
    class Ak extends Ck {
      get alphaMode() {
        return this.postProcess.alphaMode
      }
      set alphaMode(kk) {
        this.postProcess.alphaMode = kk
      }
      get drawWrapper() {
        return this._postProcessDrawWrapper
      }
      constructor(kk, ek, ik) {
        super(kk, ek), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = ik, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture = this._frameGraph.textureManager.createDanglingHandle(), this.outputDepthAttachmentTexture = this._frameGraph.textureManager.createDanglingHandle()
      }
      isReady() {
        return this.postProcess.isReady()
      }
      getClassName() {
        return "FrameGraphPostProcessTask"
      }
      record() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ek = arguments.length > 1 ? arguments[1] : void 0,
          ik = arguments.length > 2 ? arguments[2] : void 0;
        if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
        const Dk = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
        if (Dk && (Dk.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, Dk), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentTexture, this.depthAttachmentTexture), Dk) {
          const kk = this._frameGraph.textureManager.getTextureAbsoluteDimensions(Dk);
          this._sourceWidth = kk.width, this._sourceHeight = kk.height
        }
        const fk = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
        this._outputWidth = fk.size.width, this._outputHeight = fk.size.height;
        const Sk = this._frameGraph.addRenderPass(this.name);
        if (Sk.depthReadOnly = this.depthReadOnly, Sk.stencilReadOnly = this.stencilReadOnly, Sk.addDependencies(this.sourceTexture), Sk.setRenderTarget(this.outputTexture), Sk.setRenderTargetDepth(this.depthAttachmentTexture), Sk.setExecuteFunc((kk => {
            kk.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && kk.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), ek?.(kk), this.viewport && kk.setViewport(this.viewport), kk.applyFullScreenEffect(this._postProcessDrawWrapper, (() => {
              void 0 !== this.sourceTexture && kk.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), ik?.(kk), this.postProcess.bind()
            }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), kk.restoreDefaultFramebuffer(), kk.popDebugGroup()
          })), !kk) {
          const kk = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
          kk.depthReadOnly = this.depthReadOnly, kk.stencilReadOnly = this.stencilReadOnly, kk.addDependencies(this.sourceTexture), kk.setRenderTarget(this.outputTexture), kk.setRenderTargetDepth(this.depthAttachmentTexture), kk.setExecuteFunc((kk => {
            void 0 !== this.sourceTexture && 0 === this.alphaMode && (this.viewport && kk.setViewport(this.viewport), kk.copyTexture(this.sourceTexture, void 0, void 0 !== this.viewport))
          }))
        }
        return Sk
      }
      dispose() {
        this.postProcess.dispose(), super.dispose()
      }
    }
    class jk extends Ak {
      constructor(kk, ek, ik) {
        super(kk, ek, ik || new Mk(kk, ek.engine))
      }
      getClassName() {
        return "FrameGraphFXAATask"
      }
      record() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ek = arguments.length > 1 ? arguments[1] : void 0,
          ik = arguments.length > 2 ? arguments[2] : void 0;
        const Dk = super.record(kk, ek, ik);
        return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, Dk
      }
    }
    var sk = ik(41407);
    class dk extends Ak {
      constructor(kk, ek, ik) {
        super(kk, ek, ik || new sk.h(kk, ek.engine))
      }
      getClassName() {
        return "FrameGraphPassTask"
      }
    }
    var Vk = ik(39653),
      Fk = ik(39742),
      uk = ik(39701),
      qk = ik(39818),
      Ik = ik(36874);
    class zk {
      getRenderCamera(kk) {
        if (this._renderCamera) return this._renderCamera;
        {
          let ek;
          return ek = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, kk && ek && ek.isRigCamera ? ek.rigParent : ek
        }
      }
      setRenderCamera(kk) {
        this._renderCamera = kk
      }
      _getSharedGizmoLight() {
        return this._sharedGizmoLight || (this._sharedGizmoLight = new qk.b("shared gizmo light", new mk.o(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = Ik.e.Gray()), this._sharedGizmoLight
      }
      static get DefaultUtilityLayer() {
        return null == zk._DefaultUtilityLayer ? zk._CreateDefaultUtilityLayerFromScene(Pk.e.LastCreatedScene) : zk._DefaultUtilityLayer
      }
      static _CreateDefaultUtilityLayerFromScene(kk) {
        return zk._DefaultUtilityLayer = new zk(kk), zk._DefaultUtilityLayer.originalScene.ZF.addOnce((() => {
          zk._DefaultUtilityLayer = null
        })), zk._DefaultUtilityLayer
      }
      static get DefaultKeepDepthUtilityLayer() {
        return null == zk._DefaultKeepDepthUtilityLayer ? zk._CreateDefaultKeepUtilityLayerFromScene(Pk.e.LastCreatedScene) : zk._DefaultKeepDepthUtilityLayer
      }
      static _CreateDefaultKeepUtilityLayerFromScene(kk) {
        return zk._DefaultKeepDepthUtilityLayer = new zk(kk), zk._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, zk._DefaultKeepDepthUtilityLayer.originalScene.ZF.addOnce((() => {
          zk._DefaultKeepDepthUtilityLayer = null
        })), zk._DefaultKeepDepthUtilityLayer
      }
      constructor(kk) {
        let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.originalScene = kk, this.handleEvents = ek, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.processAllEvents = !1, this.pickingEnabled = !0, this.onPointerOutObservable = new Lk.c, this.utilityLayerScene = new Vk.f(kk.JU(), {
          virtual: !0,
          useFloatingOrigin: kk.floatingOriginMode
        }), this.utilityLayerScene.useRightHandedSystem = kk.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), ek && (this._originalPointerObserver = kk.onPrePointerObservable.add((ek => {
          if (!this.utilityLayerScene.activeCamera) return;
          if (!this.pickingEnabled) return;
          if (!this.processAllEvents && ek.type !== Fk.c.POINTERMOVE && ek.type !== Fk.c.POINTERUP && ek.type !== Fk.c.POINTERDOWN && ek.type !== Fk.c.POINTERDOUBLETAP) return;
          this.utilityLayerScene.pointerX = kk.pointerX, this.utilityLayerScene.pointerY = kk.pointerY;
          const ik = ek.event;
          if (kk.isPointerCaptured(ik.pointerId)) return void(this._pointerCaptures[ik.pointerId] = !1);
          const Dk = ik => {
              let Dk;
              if (ek.nearInteractionPickingInfo) Dk = ek.nearInteractionPickingInfo.pickedMesh.XF() == ik ? ek.nearInteractionPickingInfo : new uk.b;
              else if (ik !== this.utilityLayerScene && ek.originalPickingInfo) Dk = ek.originalPickingInfo;
              else {
                let fk = null;
                this._renderCamera && (fk = ik._activeCamera, ik._activeCamera = this._renderCamera, ek.ray = null), Dk = ek.ray ? ik.pickWithRay(ek.ray) : ik.Un(kk.pointerX, kk.pointerY), fk && (ik._activeCamera = fk)
              }
              return Dk
            },
            fk = Dk(this.utilityLayerScene);
          if (!ek.ray && fk && (ek.ray = fk.ray), ek.originalPickingInfo?.aimTransform && fk && (fk.aimTransform = ek.originalPickingInfo.aimTransform, fk.gripTransform = ek.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(ek), this.onlyCheckPointerDownEvents && ek.type != Fk.c.POINTERDOWN) return ek.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new Fk.h(ek.type, ek.event, fk), ek.type), void(ek.type === Fk.c.POINTERUP && this._pointerCaptures[ik.pointerId] && (this._pointerCaptures[ik.pointerId] = !1));
          if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) fk && fk.hit && (ek.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new Fk.h(ek.type, ek.event, fk), ek.type), ek.skipOnPointerObservable = !0);
          else {
            const ik = Dk(kk),
              Sk = ek.event;
            ik && fk && (0 === fk.distance && ik.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(ik.pickedMesh) ? (this._notifyObservers(ek, ik, Sk), ek.skipOnPointerObservable = !0) : ek.type === Fk.c.POINTERDOWN ? (this._pointerCaptures[Sk.pointerId] = !0, this._notifyObservers(ek, ik, Sk)) : ek.type !== Fk.c.POINTERMOVE && ek.type !== Fk.c.POINTERUP || (this._lastPointerEvents[Sk.pointerId] && (this.onPointerOutObservable.notifyObservers(Sk.pointerId), delete this._lastPointerEvents[Sk.pointerId]), this._notifyObservers(ek, ik, Sk)) : !this._pointerCaptures[Sk.pointerId] && (fk.distance < ik.distance || 0 === ik.distance) ? (this._notifyObservers(ek, fk, Sk), ek.skipOnPointerObservable || (ek.skipOnPointerObservable = fk.distance > 0)) : !this._pointerCaptures[Sk.pointerId] && fk.distance >= ik.distance && (this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(ik.pickedMesh) ? (this._notifyObservers(ek, ik, Sk), ek.skipOnPointerObservable = !0) : (ek.type !== Fk.c.POINTERMOVE && ek.type !== Fk.c.POINTERUP || this._lastPointerEvents[Sk.pointerId] && (this.onPointerOutObservable.notifyObservers(Sk.pointerId), delete this._lastPointerEvents[Sk.pointerId]), this._notifyObservers(ek, fk, Sk))), ek.type === Fk.c.POINTERUP && this._pointerCaptures[Sk.pointerId] && (this._pointerCaptures[Sk.pointerId] = !1))
          }
        })), this._originalPointerObserver && kk.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, ik || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((kk => {
          this.shouldRender && kk == this.getRenderCamera() && this.render()
        }))), this._sceneDisposeObserver = this.originalScene.ZF.add((() => {
          this.dispose()
        })), this._updateCamera()
      }
      _notifyObservers(kk, ek, ik) {
        kk.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new Fk.h(kk.type, kk.event, ek), kk.type), this._lastPointerEvents[ik.pointerId] = !0)
      }
      render() {
        if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
          const kk = this.utilityLayerScene.activeCamera.XF(),
            ek = this.utilityLayerScene.activeCamera;
          ek._scene = this.utilityLayerScene, ek.leftCamera && (ek.leftCamera._scene = this.utilityLayerScene), ek.rightCamera && (ek.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), ek._scene = kk, ek.leftCamera && (ek.leftCamera._scene = kk), ek.rightCamera && (ek.rightCamera._scene = kk)
        }
      }
      dispose() {
        this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.ZF.remove(this._sceneDisposeObserver), this._originalPointerObserver && this.originalScene.onPrePointerObservable.remove(this._originalPointerObserver), this.utilityLayerScene.dispose()
      }
      _updateCamera() {
        this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
      }
    }
    zk._DefaultUtilityLayer = null, zk._DefaultKeepDepthUtilityLayer = null;
    const Qk = {
      FindMainCamera: function(kk) {
        return kk.findMainCamera()
      },
      FindMainObjectRenderer: function(kk) {
        return kk.findMainObjectRenderer()
      },
      CreateUtilityLayerRenderer: function(kk) {
        let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const ik = kk.bw,
          Dk = new zk(ik, ek, !0);
        Dk.utilityLayerScene.activeCamera = ik.activeCamera;
        let fk = Qk.FindMainCamera(ik.frameGraph);
        !fk && ik.cameras.length > 0 && (fk = ik.cameras[0]), fk && (Dk.setRenderCamera(fk), Dk.utilityLayerScene.activeCamera = fk);
        const Sk = ik.onAfterRenderObservable.add((() => {
          Dk.render()
        }));
        return Dk.utilityLayerScene.ZF.addOnce((() => {
          ik.onAfterRenderObservable.remove(Sk)
        })), Dk
      }
    };
    let vk = null;

    function Ek(kk, ek, ik, Dk) {
      let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        Sk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        bk = arguments.length > 6 ? arguments[6] : void 0,
        rk = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Pk = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
      const {
        height: mk,
        width: Mk
      } = Bk(kk, ek, ik);
      if (!mk || !Mk) return void xk.b.Error("Invalid 'size' parameter !");
      const Kk = ek.XF();
      let Uk = Kk.activeCamera !== ek;
      if (Kk.frameGraph) {
        const kk = Qk.FindMainObjectRenderer(Kk.frameGraph);
        kk && (Uk = kk.camera !== ek)
      }
      Uk ? Wk(kk, ek, ik, (kk => {
        if (Sk) {
          const ek = new Blob([kk]);
          nk.i.DownloadBlob(ek), Dk && Dk("")
        } else Dk && Dk(kk)
      }), fk, 1, kk.getCreationOptions().antialias, void 0, void 0, void 0, void 0, bk) : kk.onEndFrameObservable.addOnce((() => {
        vk || (vk = document.createElement("canvas")), vk.width = Mk, vk.height = mk;
        const ek = vk.getContext("2d"),
          ik = kk.getRenderingCanvas();
        if (!ek || !ik) return void xk.b.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
        const Uk = ik.width,
          Hk = ik.height,
          wk = vk.width,
          lk = vk.height,
          pk = wk / Uk,
          yk = lk / Hk,
          Yk = rk ? Math.max(pk, yk) : Math.min(pk, yk),
          Lk = Uk * Yk,
          Ck = Hk * Yk,
          Ak = (wk - Lk) / 2,
          jk = (lk - Ck) / 2;
        ek.save(), ek.fillStyle = Pk ? Kk.clearColor.toHexString() : "rgba(0, 0, 0, 0)", ek.fillRect(0, 0, Mk, mk), ek.restore(), ek.drawImage(ik, 0, 0, Uk, Hk, Ak, jk, Lk, Ck), Sk ? (nk.i.EncodeScreenshotCanvasData(vk, void 0, fk, void 0, bk), Dk && Dk("")) : nk.i.EncodeScreenshotCanvasData(vk, Dk, fk, void 0, bk)
      }))
    }
    async function hk(kk, ek, ik) {
      let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        fk = arguments.length > 4 ? arguments[4] : void 0,
        Sk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        bk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        rk = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      return await new Promise(((Pk, mk) => {
        Ek(kk, ek, ik, (kk => {
          "undefined" !== typeof kk ? Pk(kk) : mk(new Error("Data is undefined"))
        }), Dk, rk, fk, Sk, bk)
      }))
    }
    async function ak(kk, ek, ik, Dk) {
      let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        Sk = arguments.length > 5 ? arguments[5] : void 0,
        bk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return await new Promise((rk => {
        Ek(kk, ek, {
          width: ik,
          height: Dk
        }, (() => {
          rk()
        }), fk, !0, Sk, bk)
      }))
    }

    function Wk(kk, ek, Sk, bk) {
      let rk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        Pk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
        mk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Mk = arguments.length > 7 ? arguments[7] : void 0,
        nk = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        lk = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        pk = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
        yk = arguments.length > 11 ? arguments[11] : void 0,
        Yk = arguments.length > 12 ? arguments[12] : void 0,
        Lk = arguments.length > 13 ? arguments[13] : void 0,
        Ck = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
        Ak = arguments.length > 15 ? arguments[15] : void 0;
      const jk = ek.XF();
      if (jk.frameGraph) return void Xk(jk.frameGraph, ek, Sk, rk, Pk, mk, Mk, yk, Lk, !bk).then((kk => {
        bk && bk(kk)
      }));
      const {
        height: sk,
        width: dk,
        finalWidth: Vk,
        finalHeight: Fk
      } = Bk(kk, ek, Sk), uk = {
        width: dk,
        height: sk
      };
      if (!sk || !dk) return void xk.b.Error("Invalid 'size' parameter !");
      kk.skipFrameRender = !0;
      const qk = kk.getRenderWidth,
        Ik = kk.getRenderHeight;
      kk.getRenderWidth = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && kk._currentRenderTarget ? kk._currentRenderTarget.width : dk
      }, kk.getRenderHeight = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && kk._currentRenderTarget ? kk._currentRenderTarget.height : sk
      }, kk.onResizeObservable.hasObservers() && kk.onResizeObservable.notifyObservers(kk);
      const zk = new fk.c("screenShot", uk, jk, !1, !1, 0, !1, Dk.f.BILINEAR_SAMPLINGMODE, void 0, lk, void 0, void 0, void 0, Pk);
      zk.renderList = jk.meshes.slice(), zk.samples = Pk, zk.renderSprites = nk, zk.activeCamera = ek, zk.forceLayerMaskCheck = pk, Yk?.(zk);
      const Qk = Lk || Uk.DumpData,
        vk = () => {
          jk.incrementRenderId(), jk.resetCachedMaterial(), (0, wk.h)((() => zk.isReadyForRendering() && ek.isReady(!0)), (() => {
            kk.onEndFrameObservable.addOnce((() => {
              Vk === dk && Fk === sk ? zk.readPixels(void 0, void 0, void 0, !1).then((kk => {
                Qk(dk, sk, kk, bk, rk, Mk, !0, void 0, yk), zk.dispose()
              })) : (kk.isWebGPU ? ik.e(370).then((() => ik(60846))) : ik.e(371).then((() => ik(60851)))).then((async () => await (0, Hk.c)("pass", zk.getInternalTexture(), jk, void 0, void 0, void 0, Vk, Fk).then((ek => {
                kk._readTexturePixels(ek, Vk, Fk, -1, 0, null, !0, !1, 0, 0).then((kk => {
                  Qk(Vk, Fk, kk, bk, rk, Mk, !0, void 0, yk), ek.dispose()
                }))
              }))))
            })), jk.incrementRenderId(), jk.resetCachedMaterial();
            const Dk = jk.activeCamera,
              fk = jk.activeCameras,
              Sk = ek.outputRenderTarget,
              Pk = jk.spritesEnabled;
            jk.activeCamera = ek, jk.activeCameras = null, ek.outputRenderTarget = zk, jk.spritesEnabled = nk;
            const mk = jk.meshes;
            jk.meshes = zk.renderList || jk.meshes;
            try {
              jk.render()
            } finally {
              jk.activeCamera = Dk, jk.activeCameras = fk, ek.outputRenderTarget = Sk, jk.spritesEnabled = Pk, jk.meshes = mk, kk.getRenderWidth = qk, kk.getRenderHeight = Ik, kk.onResizeObservable.hasObservers() && kk.onResizeObservable.notifyObservers(kk), ek.getProjectionMatrix(!0), kk.skipFrameRender = !1
            }
          }), (() => {
            kk.skipFrameRender = !1, kk.getRenderWidth = qk, kk.getRenderHeight = Ik, Ak?.()
          }), void 0, Ck)
        };
      if (mk) {
        const kk = new Kk("antialiasing", 1, jk.activeCamera);
        zk.addPostProcess(kk), kk.autoClear = !0, kk.onEffectCreatedObservable.addOnce((kk => {
          kk.isReady() ? vk() : kk.onCompiled = () => {
            vk()
          }
        }))
      } else vk()
    }
    async function tk(kk, ek, ik) {
      let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        Sk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        bk = arguments.length > 6 ? arguments[6] : void 0,
        rk = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Pk = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        mk = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
        Mk = arguments.length > 10 ? arguments[10] : void 0,
        Kk = arguments.length > 11 ? arguments[11] : void 0,
        xk = arguments.length > 12 ? arguments[12] : void 0;
      return await new Promise(((nk, Uk) => {
        Wk(kk, ek, ik, (kk => {
          "undefined" !== typeof kk ? nk(kk) : Uk(new Error("Data is undefined"))
        }), Dk, fk, Sk, bk, rk, Pk, mk, Mk, Kk, xk)
      }))
    }
    async function Xk(kk, ek, ik) {
      let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        Sk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        bk = arguments.length > 6 ? arguments[6] : void 0,
        rk = arguments.length > 7 ? arguments[7] : void 0,
        Pk = arguments.length > 8 ? arguments[8] : void 0,
        mk = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        Mk = arguments.length > 10 ? arguments[10] : void 0;
      const Kk = kk.engine,
        xk = kk.textureManager,
        {
          height: nk,
          width: Hk,
          finalWidth: wk,
          finalHeight: pk
        } = Bk(Kk, ek, ik),
        yk = {
          width: Hk,
          height: nk
        },
        Yk = Pk || Uk.DumpData,
        Lk = kk.tasks,
        Ck = Lk.length,
        Ak = kk.pausedExecution,
        sk = Kk.getCaps().parallelShaderCompile;
      xk.setBackBufferTextures(0, 0, {
        size: yk,
        options: {
          createMipMaps: !1,
          samples: fk,
          types: [0],
          formats: [5],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot color"]
        },
        sizeIsPercentage: !1
      }, {
        size: yk,
        options: {
          createMipMaps: !1,
          samples: fk,
          types: [0],
          formats: [Kk.isStencilEnable ? 13 : 14],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot depth"]
        },
        sizeIsPercentage: !1
      });
      let Vk = lk;
      if (Sk) {
        const ek = new jk("fxaa", kk);
        ek.sourceTexture = Vk, Vk = ek.outputTexture, kk.addTask(ek)
      }
      if (wk !== Hk || pk !== nk) {
        const ek = new dk("pass", kk);
        ek.sourceTexture = Vk, ek.targetTexture = kk.textureManager.createRenderTargetTexture("pass_output", {
          size: {
            width: wk,
            height: pk
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
        }), Vk = ek.outputTexture, kk.addTask(ek)
      }
      const Fk = Qk.FindMainObjectRenderer(kk);
      let uk = null;
      Fk && (uk = Fk.camera, Fk.camera = ek), Kk.getCaps().parallelShaderCompile = void 0, await kk.buildAsync();
      const qk = Mk ?? (xk.hasHistoryTextures ? 32 : 1);
      for (let Uk = 0; Uk < qk; ++Uk) kk.execute();
      kk.pausedExecution = !0, Kk.getCaps().parallelShaderCompile = sk;
      for (let Uk = Ck; Uk < Lk.length; ++Uk) kk.tasks[Uk].dispose();
      kk.tasks.length = Ck, Fk && uk && (Fk.camera = uk);
      const Ik = kk.textureManager.getTextureFromHandle(Vk);
      return Ik.incrementReferences(), xk.resetBackBufferTextures(), await kk.buildAsync(), kk.pausedExecution = Ak, new Promise((kk => {
        Kk._readTexturePixels(Ik, wk, pk, -1, 0, null, !0, !1, 0, 0).then((async ek => {
          Ik.dispose(), Yk(wk, pk, ek, mk ? void 0 : ek => kk(ek), Dk, bk, !0, void 0, rk), mk && kk(null)
        }))
      }))
    }

    function Bk(kk, ek, ik) {
      let Dk = 0,
        fk = 0,
        Sk = 0,
        bk = 0;
      if ("object" === typeof ik) {
        const rk = ik.precision ? Math.abs(ik.precision) : 1;
        ik.width && ik.height ? (Dk = ik.height * rk, fk = ik.width * rk) : ik.width && !ik.height ? (fk = ik.width * rk, Dk = Math.round(fk / kk.getAspectRatio(ek))) : ik.height && !ik.width ? (Dk = ik.height * rk, fk = Math.round(Dk * kk.getAspectRatio(ek))) : (fk = Math.round(kk.getRenderWidth() * rk), Dk = Math.round(fk / kk.getAspectRatio(ek))), ik.finalWidth && ik.finalHeight ? (bk = ik.finalHeight, Sk = ik.finalWidth) : ik.finalWidth && !ik.finalHeight ? (Sk = ik.finalWidth, bk = Math.round(Sk / kk.getAspectRatio(ek))) : ik.finalHeight && !ik.finalWidth ? (bk = ik.finalHeight, Sk = Math.round(bk * kk.getAspectRatio(ek))) : (Sk = fk, bk = Dk)
      } else isNaN(ik) || (Dk = ik, fk = ik, Sk = ik, bk = ik);
      return fk && (fk = Math.floor(fk)), Dk && (Dk = Math.floor(Dk)), Sk && (Sk = Math.floor(Sk)), bk && (bk = Math.floor(bk)), {
        height: 0 | Dk,
        width: 0 | fk,
        finalWidth: 0 | Sk,
        finalHeight: 0 | bk
      }
    }
    const ck = {
      CreateScreenshot: Ek,
      CreateScreenshotAsync: hk,
      CreateScreenshotWithResizeAsync: ak,
      CreateScreenshotUsingRenderTarget: Wk,
      CreateScreenshotUsingRenderTargetAsync: tk,
      CreateScreenshotForFrameGraphAsync: Xk
    };
    let Tk = !1;

    function Zk() {
      if (Tk) return;
      Tk = !0;
      nk.i.CreateScreenshot = Ek, nk.i.CreateScreenshotAsync = hk, nk.i.CreateScreenshotUsingRenderTarget = Wk, nk.i.CreateScreenshotUsingRenderTargetAsync = tk
    }
    Zk()
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);