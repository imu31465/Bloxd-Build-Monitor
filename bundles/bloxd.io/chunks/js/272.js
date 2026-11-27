export const id = 272;
export const ids = [272, 273];
export const modules = {
  42090: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => pr,
      f: () => mr
    });
    var Zr = Qr(41872),
      Wr = Qr(41875),
      ar = Qr(38560),
      jr = Qr(38684),
      Ir = Qr(42094),
      fr = Qr(42060),
      Er = Qr(38609);
    let pr = (() => {
        var rr;
        let Sr, Qr, fr = Ir.c,
          Er = [],
          pr = [],
          xr = [],
          mr = [];
        return rr = class extends fr {
          constructor(rr, Sr, Qr, Wr) {
            super(rr, Qr, Wr), this.groundColor = (0, Zr.m)(this, Er, new jr.e(0, 0, 0)), this.direction = ((0, Zr.m)(this, pr), (0, Zr.m)(this, xr, void 0)), (0, Zr.m)(this, mr), this.direction = Sr || ar.u.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(rr) {
            return this.direction = ar.u.Normalize(rr.subtract(ar.u.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(rr, Sr) {
            const Qr = ar.u.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", Qr.x, Qr.y, Qr.z, 0, Sr), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), Sr), this
          }
          transferToNodeMaterialEffect(rr, Sr) {
            const Qr = ar.u.Normalize(this.direction);
            return rr.setFloat3(Sr, Qr.x, Qr.y, Qr.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = ar.d.Identity()), this._worldMatrix
          }
          getTypeID() {
            return Ir.c.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(rr, Sr) {
            rr["HEMILIGHT" + Sr] = !0
          }
        }, (() => {
          const ar = "function" === typeof Symbol && Symbol.metadata ? Object.create(fr[Symbol.metadata] ?? null) : void 0;
          Sr = [(0, Wr.n)()], Qr = [(0, Wr.C)()], (0, Zr.k)(null, null, Sr, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: rr => "groundColor" in rr,
              get: rr => rr.groundColor,
              set: (rr, Sr) => {
                rr.groundColor = Sr
              }
            },
            metadata: ar
          }, Er, pr), (0, Zr.k)(null, null, Qr, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: rr => "direction" in rr,
              get: rr => rr.direction,
              set: (rr, Sr) => {
                rr.direction = Sr
              }
            },
            metadata: ar
          }, xr, mr), ar && Object.defineProperty(rr, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ar
          })
        })(), rr
      })(),
      xr = !1;

    function mr() {
      xr || (xr = !0, fr.c.AddNodeConstructor("Light_Type_3", ((rr, Sr) => () => new pr(rr, ar.u.Zero(), Sr))), (0, Er.e)("BABYLON.HemisphericLight", pr))
    }
  },
  39262: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Wr
    });
    var Zr = Qr(39264);
    class Wr {
      static GetPlanes(rr) {
        const Sr = [];
        for (let Qr = 0; Qr < 6; Qr++) Sr.push(new Zr.d(0, 0, 0, 0));
        return Wr.GetPlanesToRef(rr, Sr), Sr
      }
      static GetNearPlaneToRef(rr, Sr) {
        const Qr = rr.m;
        Sr.normal.x = Qr[3] + Qr[2], Sr.normal.y = Qr[7] + Qr[6], Sr.normal.z = Qr[11] + Qr[10], Sr.d = Qr[15] + Qr[14], Sr.normalize()
      }
      static GetFarPlaneToRef(rr, Sr) {
        const Qr = rr.m;
        Sr.normal.x = Qr[3] - Qr[2], Sr.normal.y = Qr[7] - Qr[6], Sr.normal.z = Qr[11] - Qr[10], Sr.d = Qr[15] - Qr[14], Sr.normalize()
      }
      static GetLeftPlaneToRef(rr, Sr) {
        const Qr = rr.m;
        Sr.normal.x = Qr[3] + Qr[0], Sr.normal.y = Qr[7] + Qr[4], Sr.normal.z = Qr[11] + Qr[8], Sr.d = Qr[15] + Qr[12], Sr.normalize()
      }
      static GetRightPlaneToRef(rr, Sr) {
        const Qr = rr.m;
        Sr.normal.x = Qr[3] - Qr[0], Sr.normal.y = Qr[7] - Qr[4], Sr.normal.z = Qr[11] - Qr[8], Sr.d = Qr[15] - Qr[12], Sr.normalize()
      }
      static GetTopPlaneToRef(rr, Sr) {
        const Qr = rr.m;
        Sr.normal.x = Qr[3] - Qr[1], Sr.normal.y = Qr[7] - Qr[5], Sr.normal.z = Qr[11] - Qr[9], Sr.d = Qr[15] - Qr[13], Sr.normalize()
      }
      static GetBottomPlaneToRef(rr, Sr) {
        const Qr = rr.m;
        Sr.normal.x = Qr[3] + Qr[1], Sr.normal.y = Qr[7] + Qr[5], Sr.normal.z = Qr[11] + Qr[9], Sr.d = Qr[15] + Qr[13], Sr.normalize()
      }
      static GetPlanesToRef(rr, Sr) {
        Wr.GetNearPlaneToRef(rr, Sr[0]), Wr.GetFarPlaneToRef(rr, Sr[1]), Wr.GetLeftPlaneToRef(rr, Sr[2]), Wr.GetRightPlaneToRef(rr, Sr[3]), Wr.GetTopPlaneToRef(rr, Sr[4]), Wr.GetBottomPlaneToRef(rr, Sr[5])
      }
      static IsPointInFrustum(rr, Sr) {
        for (let Qr = 0; Qr < 6; Qr++)
          if (Sr[Qr].dotCoordinate(rr) < 0) return !1;
        return !0
      }
    }
  },
  39264: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Wr
    });
    var Zr = Qr(38560);
    class Wr {
      constructor(rr, Sr, Qr, Wr) {
        this.normal = new Zr.u(rr, Sr, Qr), this.d = Wr
      }
      OWr() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Wr(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let rr = this.normal.getHashCode();
        return rr = 397 * rr ^ this.d, rr
      }
      normalize() {
        const rr = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let Sr = 0;
        return 0 !== rr && (Sr = 1 / rr), this.normal.x *= Sr, this.normal.y *= Sr, this.normal.z *= Sr, this.d *= Sr, this
      }
      transform(rr) {
        const Sr = Wr._TmpMatrix;
        rr.invertToRef(Sr);
        const Qr = Sr.m,
          Zr = this.normal.x,
          ar = this.normal.y,
          jr = this.normal.z,
          Ir = this.d,
          fr = Zr * Qr[0] + ar * Qr[1] + jr * Qr[2] + Ir * Qr[3],
          Er = Zr * Qr[4] + ar * Qr[5] + jr * Qr[6] + Ir * Qr[7],
          pr = Zr * Qr[8] + ar * Qr[9] + jr * Qr[10] + Ir * Qr[11],
          xr = Zr * Qr[12] + ar * Qr[13] + jr * Qr[14] + Ir * Qr[15];
        return new Wr(fr, Er, pr, xr)
      }
      dotCoordinate(rr) {
        return this.normal.x * rr.x + this.normal.y * rr.y + this.normal.z * rr.z + this.d
      }
      copyFromPoints(rr, Sr, Qr) {
        const Zr = Sr.x - rr.x,
          Wr = Sr.y - rr.y,
          ar = Sr.z - rr.z,
          jr = Qr.x - rr.x,
          Ir = Qr.y - rr.y,
          fr = Qr.z - rr.z,
          Er = Wr * fr - ar * Ir,
          pr = ar * jr - Zr * fr,
          xr = Zr * Ir - Wr * jr,
          mr = Math.sqrt(Er * Er + pr * pr + xr * xr);
        let Nr;
        return Nr = 0 !== mr ? 1 / mr : 0, this.normal.x = Er * Nr, this.normal.y = pr * Nr, this.normal.z = xr * Nr, this.d = -(this.normal.x * rr.x + this.normal.y * rr.y + this.normal.z * rr.z), this
      }
      isFrontFacingTo(rr, Sr) {
        return Zr.u.Dot(this.normal, rr) <= Sr
      }
      signedDistanceTo(rr) {
        return Zr.u.Dot(rr, this.normal) + this.d
      }
      static FromArray(rr) {
        return new Wr(rr[0], rr[1], rr[2], rr[3])
      }
      static FromPoints(rr, Sr, Qr) {
        const Zr = new Wr(0, 0, 0, 0);
        return Zr.copyFromPoints(rr, Sr, Qr), Zr
      }
      static FromPositionAndNormal(rr, Sr) {
        const Qr = new Wr(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(rr, Sr, Qr)
      }
      static FromPositionAndNormalToRef(rr, Sr, Qr) {
        return Qr.normal.iH(Sr), Qr.normal.normalize(), Qr.d = -rr.dot(Qr.normal), Qr
      }
      static SignedDistanceToPlaneFromPositionAndNormal(rr, Sr, Qr) {
        const Wr = -(Sr.x * rr.x + Sr.y * rr.y + Sr.z * rr.z);
        return Zr.u.Dot(Qr, Sr) + Wr
      }
    }
    Wr._TmpMatrix = Zr.d.Identity()
  },
  39607: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Zr
    });
    class Zr {
      constructor(rr, Sr, Qr, Zr) {
        this.x = rr, this.y = Sr, this.width = Qr, this.height = Zr
      }
      toGlobal(rr, Sr) {
        return new Zr(this.x * rr, this.y * Sr, this.width * rr, this.height * Sr)
      }
      toGlobalToRef(rr, Sr, Qr) {
        return Qr.x = this.x * rr, Qr.y = this.y * Sr, Qr.width = this.width * rr, Qr.height = this.height * Sr, this
      }
      clone() {
        return new Zr(this.x, this.y, this.width, this.height)
      }
    }
  },
  40237: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => ar
    });
    var Zr = Qr(40246);
    const Wr = (rr, Sr, Qr) => rr ? rr.getClassName && "Mesh" === rr.getClassName() ? null : !rr.getClassName || "SubMesh" !== rr.getClassName() && "PhysicsBody" !== rr.getClassName() ? rr.clone ? rr.clone() : Array.isArray(rr) ? rr.slice() : Qr && "object" === typeof rr ? {
      ...rr
    } : null : rr.clone(Sr) : null;
    class ar {
      static DeepCopy(rr, Sr, Qr, ar) {
        let jr = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Ir = function(rr) {
          const Sr = [];
          do {
            const Qr = Object.getOwnPropertyNames(rr);
            for (const rr of Qr) - 1 === Sr.indexOf(rr) && Sr.push(rr)
          } while (rr = Object.getPrototypeOf(rr));
          return Sr
        }(rr);
        for (const Er of Ir) {
          if ("_" === Er[0] && (!ar || -1 === ar.indexOf(Er))) continue;
          if (Er.endsWith("Observable")) continue;
          if (Qr && -1 !== Qr.indexOf(Er)) continue;
          const Ir = rr[Er],
            pr = typeof Ir;
          if ("function" !== pr) try {
            if ("object" === pr)
              if (Ir instanceof Uint8Array) Sr[Er] = Uint8Array.from(Ir);
              else if (Ir instanceof Array) {
              if (Sr[Er] = [], Ir.length > 0)
                if ("object" == typeof Ir[0])
                  for (let rr = 0; rr < Ir.length; rr++) {
                    const Qr = Wr(Ir[rr], Sr, jr); - 1 === Sr[Er].indexOf(Qr) && Sr[Er].push(Qr)
                  } else Sr[Er] = Ir.slice(0)
            } else Sr[Er] = Wr(Ir, Sr, jr);
            else Sr[Er] = Ir
          } catch (fr) {
            Zr.c.Warn(fr.message)
          }
        }
      }
    }
  },
  39405: (rr, Sr, Qr) => {
    function Zr() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (rr => {
        const Sr = 16 * Math.random() | 0;
        return ("x" === rr ? Sr : 3 & Sr | 8).toString(16)
      }))
    }
    Qr.d(Sr, {
      b: () => Zr
    })
  },
  40246: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Zr
    });
    class Zr {
      static _CheckLimit(rr, Sr) {
        let Qr = Zr._LogLimitOutputs[rr];
        return Qr ? Qr.current++ : (Qr = {
          limit: Sr,
          current: 1
        }, Zr._LogLimitOutputs[rr] = Qr), Qr.current <= Qr.limit
      }
      static _GenerateLimitMessage(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const Qr = Zr._LogLimitOutputs[rr];
        if (!Qr || !Zr.MessageLimitReached) return;
        const Wr = this._Levels[Sr];
        Qr.current === Qr.limit && Zr[Wr.name](Zr.MessageLimitReached.replace(/%LIMIT%/g, "" + Qr.limit).replace(/%TYPE%/g, Wr.name ?? ""))
      }
      static _AddLogEntry(rr) {
        Zr._LogCache = rr + Zr._LogCache, Zr.OnNewCacheEntry && Zr.OnNewCacheEntry(rr)
      }
      static _FormatMessage(rr) {
        const Sr = rr => rr < 10 ? "0" + rr : "" + rr,
          Qr = new Date;
        return "[" + Sr(Qr.getHours()) + ":" + Sr(Qr.getMinutes()) + ":" + Sr(Qr.getSeconds()) + "]: " + rr
      }
      static _LogDisabled(rr, Sr) {}
      static _LogEnabled() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Sr = arguments.length > 1 ? arguments[1] : void 0,
          Qr = arguments.length > 2 ? arguments[2] : void 0;
        const Wr = Array.isArray(Sr) ? Sr[0] : Sr;
        if (void 0 !== Qr && !Zr._CheckLimit(Wr, Qr)) return;
        const ar = Zr._FormatMessage(Wr),
          jr = this._Levels[rr],
          Ir = Array.isArray(Sr) ? Sr.slice(1) : [];
        jr.logFunc && jr.logFunc("BJS - " + ar, ...Ir);
        const fr = `<div style='color:${jr.color}'>${ar}</div><br>`;
        Zr._AddLogEntry(fr), Zr._GenerateLimitMessage(Wr, rr)
      }
      static get LogCache() {
        return Zr._LogCache
      }
      static ClearLogCache() {
        Zr._LogCache = "", Zr._LogLimitOutputs = {}, Zr.errorsCount = 0
      }
      static set LogLevels(rr) {
        Zr.Log = Zr._LogDisabled, Zr.Warn = Zr._LogDisabled, Zr.Error = Zr._LogDisabled;
        const Sr = [Zr.MessageLogLevel, Zr.WarningLogLevel, Zr.ErrorLogLevel];
        for (const Qr of Sr)
          if ((rr & Qr) === Qr) {
            const rr = this._Levels[Qr];
            Zr[rr.name] = Zr._LogEnabled.bind(Zr, Qr)
          }
      }
    }
    Zr.NoneLogLevel = 0, Zr.MessageLogLevel = 1, Zr.WarningLogLevel = 2, Zr.ErrorLogLevel = 4, Zr.AllLogLevel = 7, Zr.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Zr._LogCache = "", Zr._LogLimitOutputs = {}, Zr._Levels = [{}, {
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
    }], Zr.errorsCount = 0, Zr.Log = Zr._LogEnabled.bind(Zr, Zr.MessageLogLevel), Zr.Warn = Zr._LogEnabled.bind(Zr, Zr.WarningLogLevel), Zr.Error = Zr._LogEnabled.bind(Zr, Zr.ErrorLogLevel)
  },
  64598: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      CreateScreenshot: () => Cr,
      CreateScreenshotAsync: () => Mr,
      CreateScreenshotForFrameGraphAsync: () => Vr,
      CreateScreenshotUsingRenderTarget: () => kr,
      CreateScreenshotUsingRenderTargetAsync: () => Ar,
      CreateScreenshotWithResizeAsync: () => Gr,
      RegisterScreenshotTools: () => Fr,
      ScreenshotTools: () => wr
    });
    var Zr = Qr(42310),
      Wr = Qr(54357),
      ar = Qr(54330),
      jr = Qr(41889),
      Ir = Qr(54337),
      fr = Qr(38587),
      Er = Qr(38560);
    class pr extends Ir.g {
      static _GetDefines(rr) {
        if (!rr) return null;
        return rr.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
      }
      _gatherImports(rr, Sr) {
        rr ? (this._webGPUReady = !0, Sr.push(Promise.all([Qr.e(693).then((() => Qr(64843))), Qr.e(694).then((() => Qr(64848)))]))) : Sr.push(Promise.all([Qr.e(695).then((() => Qr(64850))), Qr.e(696).then((() => Qr(64858)))]))
      }
      constructor(rr) {
        const Sr = {
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: rr,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || fr.b.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          vertexShader: pr.VertexUrl,
          fragmentShader: pr.FragmentUrl,
          uniforms: pr.Uniforms
        };
        super({
          ...Sr,
          defines: pr._GetDefines(Sr.engine)
        }), this.texelSize = new Er.q(0, 0)
      }
      bind() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.bind(rr), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
      }
    }
    pr.VertexUrl = "fxaa", pr.FragmentUrl = "fxaa", pr.Uniforms = ["texelSize"];
    class xr extends ar.b {
      getClassName() {
        return "FxaaPostProcess"
      }
      constructor(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Wr = arguments.length > 3 ? arguments[3] : void 0,
          ar = arguments.length > 4 ? arguments[4] : void 0,
          jr = arguments.length > 5 ? arguments[5] : void 0,
          Ir = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const fr = {
          uniforms: pr.Uniforms,
          size: "number" === typeof Sr ? Sr : void 0,
          camera: Qr,
          samplingMode: Wr || Zr.f.BILINEAR_SAMPLINGMODE,
          engine: ar,
          reusable: jr,
          textureType: Ir,
          ...Sr
        };
        super(rr, pr.FragmentUrl, {
          effectWrapper: "number" !== typeof Sr && Sr.effectWrapper ? void 0 : new pr(rr, ar, fr),
          ...fr
        }), this.onApplyObservable.add((rr => {
          this._effectWrapper.texelSize = this.texelSize
        }))
      }
      static _Parse(rr, Sr, Qr, Zr) {
        return jr.e.Parse((() => new xr(rr.name, rr.options, Sr, rr.renderTargetSamplingMode, Qr.MU(), rr.reusable)), rr, Qr, Zr)
      }
    }
    var mr = Qr(40246),
      Nr = Qr(41950),
      Ur = Qr(54362),
      tr = Qr(54348),
      hr = Qr(41781);
    const zr = 0;
    class Yr {
      constructor(rr, Sr, Qr) {
        this.name = rr, this._parentTask = Sr, this._context = Qr, this.disabled = !1
      }
      setInitializeFunc(rr) {
        this._initFunc = rr
      }
      setExecuteFunc(rr) {
        this._executeFunc = rr
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
    class nr extends Yr {
      static IsObjectListPass(rr) {
        return void 0 !== rr.setObjectList
      }
      get objectList() {
        return this._objectList
      }
      setObjectList(rr) {
        this._objectList = rr
      }
      constructor(rr, Sr, Qr, Zr) {
        super(rr, Sr, Qr), this._engine = Zr
      }
      _isValid() {
        const rr = super._isValid();
        return rr || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
      }
    }
    class er extends Yr {
      static IsRenderPass(rr) {
        return void 0 !== rr.setRenderTarget
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
      constructor(rr, Sr, Qr, Zr) {
        super(rr, Sr, Qr), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = Zr
      }
      setRenderTarget(rr) {
        this._renderTarget = rr
      }
      setRenderTargetDepth(rr) {
        this._renderTargetDepth = rr
      }
      addDependencies(rr) {
        if (void 0 !== rr)
          if (Array.isArray(rr))
            for (const Sr of rr) this._dependencies.add(Sr);
          else this._dependencies.add(rr)
      }
      collectDependencies(rr) {
        const Sr = this._dependencies.keys();
        for (let Qr = Sr.next(); !0 !== Qr.done; Qr = Sr.next()) rr.add(Qr.value);
        if (void 0 !== this._renderTarget)
          if (Array.isArray(this._renderTarget))
            for (const Qr of this._renderTarget) void 0 !== Qr && rr.add(Qr);
          else rr.add(this._renderTarget);
        void 0 !== this._renderTargetDepth && rr.add(this._renderTargetDepth)
      }
      setOutputLayerAndFaceIndices(rr) {
        const Sr = this.frameGraphRenderTarget.renderTargetWrapper;
        if (Sr)
          for (const Qr of rr) Sr.setLayerAndFaceIndex(Qr.targetIndex, Qr.layerIndex, Qr.faceIndex)
      }
      _initialize() {
        this._frameGraphRenderTarget = this._context.createRenderTarget(this.name, this._renderTarget, this._renderTargetDepth, this.depthReadOnly, this.stencilReadOnly), super._initialize()
      }
      _execute() {
        this._context.bindRenderTarget(this._frameGraphRenderTarget), super._execute(), this._context.restoreDefaultFramebuffer()
      }
      _isValid() {
        const rr = super._isValid();
        return rr || (void 0 !== this._renderTarget || void 0 !== this.renderTargetDepth ? null : "Render target and render target depth cannot both be undefined.")
      }
      _dispose() {
        this._frameGraphRenderTarget?.dispose()
      }
    }
    var Kr = Qr(38595);
    class yr {
      get name() {
        return this._name
      }
      set name(rr) {
        this._name = rr
      }
      get disabled() {
        return this._disabled
      }
      set disabled(rr) {
        this._disabled = rr
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
      constructor(rr, Sr) {
        this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new Kr.d, this.onBeforeTaskExecute = new Kr.d, this.onAfterTaskExecute = new Kr.d, this.name = rr, this._frameGraph = Sr, this._reset()
      }
      _reset() {
        for (const rr of this._passes) rr._dispose();
        for (const rr of this._passesDisabled) rr._dispose();
        this._passes.length = 0, this._passesDisabled.length = 0
      }
      _addPass(rr, Sr) {
        Sr ? this._passesDisabled.push(rr) : this._passes.push(rr)
      }
      _checkTask() {
        let rr, Sr = null,
          Qr = null;
        for (const Ir of this._passes) {
          const Zr = Ir._isValid();
          if (Zr) throw new Error(`Pass "${Ir.name}" is not valid. ${Zr}`);
          if (er.IsRenderPass(Ir)) {
            const rr = Array.isArray(Ir.renderTarget) ? Ir.renderTarget : [Ir.renderTarget];
            Sr = [];
            for (const Qr of rr) void 0 !== Qr && Sr.push(this._frameGraph.textureManager.getTextureFromHandle(Qr));
            Qr = void 0 !== Ir.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(Ir.renderTargetDepth) : null
          } else nr.IsObjectListPass(Ir) && (rr = Ir.objectList)
        }
        let Zr, Wr = null,
          ar = [],
          jr = null;
        for (const Ir of this._passesDisabled) {
          const rr = Ir._isValid();
          if (rr) throw new Error(`Pass "${Ir.name}" is not valid. ${rr}`);
          if (er.IsRenderPass(Ir)) {
            const rr = Array.isArray(Ir.renderTarget) ? Ir.renderTarget : [Ir.renderTarget];
            Wr = [];
            for (const Sr of rr) void 0 !== Sr && Wr.push(this._frameGraph.textureManager.getTextureFromHandle(Sr));
            ar = rr, jr = void 0 !== Ir.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(Ir.renderTargetDepth) : null
          } else nr.IsObjectListPass(Ir) && (Zr = Ir.objectList)
        }
        if (this._passesDisabled.length > 0) {
          if (!this._checkSameRenderTarget(Sr, Wr)) {
            let rr = !0;
            for (const Sr of ar)
              if (void 0 !== Sr && !this._frameGraph.textureManager.isHistoryTexture(Sr)) {
                rr = !1;
                break
              } if (!rr) throw new Error(`The output texture of the task "${this.name}" is different when it is enabled or disabled.`)
          }
          if (Qr !== jr && null !== jr) throw new Error(`The output depth texture of the task "${this.name}" is different when it is enabled or disabled.`);
          if (rr !== Zr && null !== Zr) throw new Error(`The output object list of the task "${this.name}" is different when it is enabled or disabled.`)
        }
      }
      _execute() {
        const rr = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
        this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const Sr of rr) Sr._execute()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
        this.onAfterTaskExecute.notifyObservers(this)
      }
      _initializePasses() {
        this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const rr of this._passes) rr._initialize();
          for (const rr of this._passesDisabled) rr._initialize()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
      }
      _checkSameRenderTarget(rr, Sr) {
        if (null === rr || null === Sr) return rr === Sr;
        if (rr.length !== Sr.length) return !1;
        for (let Qr = 0; Qr < rr.length; Qr++)
          if (rr[Qr] !== Sr[Qr]) return !1;
        return !0
      }
    }
    class Br extends yr {
      get alphaMode() {
        return this.postProcess.alphaMode
      }
      set alphaMode(rr) {
        this.postProcess.alphaMode = rr
      }
      get drawWrapper() {
        return this._postProcessDrawWrapper
      }
      constructor(rr, Sr, Qr) {
        super(rr, Sr), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = Qr, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture = this._frameGraph.textureManager.createDanglingHandle(), this.outputDepthAttachmentTexture = this._frameGraph.textureManager.createDanglingHandle()
      }
      isReady() {
        return this.postProcess.isReady()
      }
      getClassName() {
        return "FrameGraphPostProcessTask"
      }
      record() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Sr = arguments.length > 1 ? arguments[1] : void 0,
          Qr = arguments.length > 2 ? arguments[2] : void 0;
        if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
        const Zr = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
        if (Zr && (Zr.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, Zr), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentTexture, this.depthAttachmentTexture), Zr) {
          const rr = this._frameGraph.textureManager.getTextureAbsoluteDimensions(Zr);
          this._sourceWidth = rr.width, this._sourceHeight = rr.height
        }
        const Wr = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
        this._outputWidth = Wr.size.width, this._outputHeight = Wr.size.height;
        const ar = this._frameGraph.addRenderPass(this.name);
        if (ar.depthReadOnly = this.depthReadOnly, ar.stencilReadOnly = this.stencilReadOnly, ar.addDependencies(this.sourceTexture), ar.setRenderTarget(this.outputTexture), ar.setRenderTargetDepth(this.depthAttachmentTexture), ar.setExecuteFunc((rr => {
            rr.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && rr.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), Sr?.(rr), this.viewport && rr.setViewport(this.viewport), rr.applyFullScreenEffect(this._postProcessDrawWrapper, (() => {
              void 0 !== this.sourceTexture && rr.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), Qr?.(rr), this.postProcess.bind()
            }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), rr.restoreDefaultFramebuffer(), rr.popDebugGroup()
          })), !rr) {
          const rr = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
          rr.depthReadOnly = this.depthReadOnly, rr.stencilReadOnly = this.stencilReadOnly, rr.addDependencies(this.sourceTexture), rr.setRenderTarget(this.outputTexture), rr.setRenderTargetDepth(this.depthAttachmentTexture), rr.setExecuteFunc((rr => {
            void 0 !== this.sourceTexture && 0 === this.alphaMode && (this.viewport && rr.setViewport(this.viewport), rr.copyTexture(this.sourceTexture, void 0, void 0 !== this.viewport))
          }))
        }
        return ar
      }
      dispose() {
        this.postProcess.dispose(), super.dispose()
      }
    }
    class Tr extends Br {
      constructor(rr, Sr, Qr) {
        super(rr, Sr, Qr || new pr(rr, Sr.engine))
      }
      getClassName() {
        return "FrameGraphFXAATask"
      }
      record() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Sr = arguments.length > 1 ? arguments[1] : void 0,
          Qr = arguments.length > 2 ? arguments[2] : void 0;
        const Zr = super.record(rr, Sr, Qr);
        return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, Zr
      }
    }
    var vr = Qr(54359);
    class Or extends Br {
      constructor(rr, Sr, Qr) {
        super(rr, Sr, Qr || new vr.f(rr, Sr.engine))
      }
      getClassName() {
        return "FrameGraphPassTask"
      }
    }
    var Lr = Qr(41941),
      lr = Qr(42028),
      Xr = Qr(41989),
      Pr = Qr(42090),
      Hr = Qr(38684);
    class qr {
      getRenderCamera(rr) {
        if (this._renderCamera) return this._renderCamera;
        {
          let Sr;
          return Sr = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, rr && Sr && Sr.isRigCamera ? Sr.rigParent : Sr
        }
      }
      setRenderCamera(rr) {
        this._renderCamera = rr
      }
      _getSharedGizmoLight() {
        return this._sharedGizmoLight || (this._sharedGizmoLight = new Pr.c("shared gizmo light", new Er.u(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = Hr.e.Gray()), this._sharedGizmoLight
      }
      static get DefaultUtilityLayer() {
        return null == qr._DefaultUtilityLayer ? qr._CreateDefaultUtilityLayerFromScene(fr.b.LastCreatedScene) : qr._DefaultUtilityLayer
      }
      static _CreateDefaultUtilityLayerFromScene(rr) {
        return qr._DefaultUtilityLayer = new qr(rr), qr._DefaultUtilityLayer.originalScene.lC.addOnce((() => {
          qr._DefaultUtilityLayer = null
        })), qr._DefaultUtilityLayer
      }
      static get DefaultKeepDepthUtilityLayer() {
        return null == qr._DefaultKeepDepthUtilityLayer ? qr._CreateDefaultKeepUtilityLayerFromScene(fr.b.LastCreatedScene) : qr._DefaultKeepDepthUtilityLayer
      }
      static _CreateDefaultKeepUtilityLayerFromScene(rr) {
        return qr._DefaultKeepDepthUtilityLayer = new qr(rr), qr._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, qr._DefaultKeepDepthUtilityLayer.originalScene.lC.addOnce((() => {
          qr._DefaultKeepDepthUtilityLayer = null
        })), qr._DefaultKeepDepthUtilityLayer
      }
      constructor(rr) {
        let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.originalScene = rr, this.handleEvents = Sr, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.processAllEvents = !1, this.pickingEnabled = !0, this.onPointerOutObservable = new Kr.d, this.utilityLayerScene = new Lr.f(rr.MU(), {
          virtual: !0,
          useFloatingOrigin: rr.floatingOriginMode
        }), this.utilityLayerScene.useRightHandedSystem = rr.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), Sr && (this._originalPointerObserver = rr.onPrePointerObservable.add((Sr => {
          if (!this.utilityLayerScene.activeCamera) return;
          if (!this.pickingEnabled) return;
          if (!this.processAllEvents && Sr.type !== lr.b.POINTERMOVE && Sr.type !== lr.b.POINTERUP && Sr.type !== lr.b.POINTERDOWN && Sr.type !== lr.b.POINTERDOUBLETAP) return;
          this.utilityLayerScene.pointerX = rr.pointerX, this.utilityLayerScene.pointerY = rr.pointerY;
          const Qr = Sr.event;
          if (rr.isPointerCaptured(Qr.pointerId)) return void(this._pointerCaptures[Qr.pointerId] = !1);
          const Zr = Qr => {
              let Zr;
              if (Sr.nearInteractionPickingInfo) Zr = Sr.nearInteractionPickingInfo.pickedMesh.eC() == Qr ? Sr.nearInteractionPickingInfo : new Xr.b;
              else if (Qr !== this.utilityLayerScene && Sr.originalPickingInfo) Zr = Sr.originalPickingInfo;
              else {
                let Wr = null;
                this._renderCamera && (Wr = Qr._activeCamera, Qr._activeCamera = this._renderCamera, Sr.ray = null), Zr = Sr.ray ? Qr.pickWithRay(Sr.ray) : Qr.eN(rr.pointerX, rr.pointerY), Wr && (Qr._activeCamera = Wr)
              }
              return Zr
            },
            Wr = Zr(this.utilityLayerScene);
          if (!Sr.ray && Wr && (Sr.ray = Wr.ray), Sr.originalPickingInfo?.aimTransform && Wr && (Wr.aimTransform = Sr.originalPickingInfo.aimTransform, Wr.gripTransform = Sr.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(Sr), this.onlyCheckPointerDownEvents && Sr.type != lr.b.POINTERDOWN) return Sr.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new lr.f(Sr.type, Sr.event, Wr), Sr.type), void(Sr.type === lr.b.POINTERUP && this._pointerCaptures[Qr.pointerId] && (this._pointerCaptures[Qr.pointerId] = !1));
          if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) Wr && Wr.hit && (Sr.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new lr.f(Sr.type, Sr.event, Wr), Sr.type), Sr.skipOnPointerObservable = !0);
          else {
            const Qr = Zr(rr),
              ar = Sr.event;
            Qr && Wr && (0 === Wr.distance && Qr.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(Qr.pickedMesh) ? (this._notifyObservers(Sr, Qr, ar), Sr.skipOnPointerObservable = !0) : Sr.type === lr.b.POINTERDOWN ? (this._pointerCaptures[ar.pointerId] = !0, this._notifyObservers(Sr, Qr, ar)) : Sr.type !== lr.b.POINTERMOVE && Sr.type !== lr.b.POINTERUP || (this._lastPointerEvents[ar.pointerId] && (this.onPointerOutObservable.notifyObservers(ar.pointerId), delete this._lastPointerEvents[ar.pointerId]), this._notifyObservers(Sr, Qr, ar)) : !this._pointerCaptures[ar.pointerId] && (Wr.distance < Qr.distance || 0 === Qr.distance) ? (this._notifyObservers(Sr, Wr, ar), Sr.skipOnPointerObservable || (Sr.skipOnPointerObservable = Wr.distance > 0)) : !this._pointerCaptures[ar.pointerId] && Wr.distance >= Qr.distance && (this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(Qr.pickedMesh) ? (this._notifyObservers(Sr, Qr, ar), Sr.skipOnPointerObservable = !0) : (Sr.type !== lr.b.POINTERMOVE && Sr.type !== lr.b.POINTERUP || this._lastPointerEvents[ar.pointerId] && (this.onPointerOutObservable.notifyObservers(ar.pointerId), delete this._lastPointerEvents[ar.pointerId]), this._notifyObservers(Sr, Wr, ar))), Sr.type === lr.b.POINTERUP && this._pointerCaptures[ar.pointerId] && (this._pointerCaptures[ar.pointerId] = !1))
          }
        })), this._originalPointerObserver && rr.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, Qr || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((rr => {
          this.shouldRender && rr == this.getRenderCamera() && this.render()
        }))), this._sceneDisposeObserver = this.originalScene.lC.add((() => {
          this.dispose()
        })), this._updateCamera()
      }
      _notifyObservers(rr, Sr, Qr) {
        rr.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new lr.f(rr.type, rr.event, Sr), rr.type), this._lastPointerEvents[Qr.pointerId] = !0)
      }
      render() {
        if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
          const rr = this.utilityLayerScene.activeCamera.eC(),
            Sr = this.utilityLayerScene.activeCamera;
          Sr._scene = this.utilityLayerScene, Sr.leftCamera && (Sr.leftCamera._scene = this.utilityLayerScene), Sr.rightCamera && (Sr.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), Sr._scene = rr, Sr.leftCamera && (Sr.leftCamera._scene = rr), Sr.rightCamera && (Sr.rightCamera._scene = rr)
        }
      }
      dispose() {
        this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.lC.remove(this._sceneDisposeObserver), this._originalPointerObserver && this.originalScene.onPrePointerObservable.remove(this._originalPointerObserver), this.utilityLayerScene.dispose()
      }
      _updateCamera() {
        this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
      }
    }
    qr._DefaultUtilityLayer = null, qr._DefaultKeepDepthUtilityLayer = null;
    const Rr = {
      FindMainCamera: function(rr) {
        return rr.findMainCamera()
      },
      FindMainObjectRenderer: function(rr) {
        return rr.findMainObjectRenderer()
      },
      CreateUtilityLayerRenderer: function(rr) {
        let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const Qr = rr.Dt,
          Zr = new qr(Qr, Sr, !0);
        Zr.utilityLayerScene.activeCamera = Qr.activeCamera;
        let Wr = Rr.FindMainCamera(Qr.frameGraph);
        !Wr && Qr.cameras.length > 0 && (Wr = Qr.cameras[0]), Wr && (Zr.setRenderCamera(Wr), Zr.utilityLayerScene.activeCamera = Wr);
        const ar = Qr.onAfterRenderObservable.add((() => {
          Zr.render()
        }));
        return Zr.utilityLayerScene.lC.addOnce((() => {
          Qr.onAfterRenderObservable.remove(ar)
        })), Zr
      }
    };
    let gr = null;

    function Cr(rr, Sr, Qr, Zr) {
      let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        ar = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        jr = arguments.length > 6 ? arguments[6] : void 0,
        Ir = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        fr = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
      const {
        height: Er,
        width: pr
      } = ir(rr, Sr, Qr);
      if (!Er || !pr) return void mr.c.Error("Invalid 'size' parameter !");
      const xr = Sr.eC();
      let Ur = xr.activeCamera !== Sr;
      if (xr.frameGraph) {
        const rr = Rr.FindMainObjectRenderer(xr.frameGraph);
        rr && (Ur = rr.camera !== Sr)
      }
      Ur ? kr(rr, Sr, Qr, (rr => {
        if (ar) {
          const Sr = new Blob([rr]);
          Nr.h.DownloadBlob(Sr), Zr && Zr("")
        } else Zr && Zr(rr)
      }), Wr, 1, rr.getCreationOptions().antialias, void 0, void 0, void 0, void 0, jr) : rr.onEndFrameObservable.addOnce((() => {
        gr || (gr = document.createElement("canvas")), gr.width = pr, gr.height = Er;
        const Sr = gr.getContext("2d"),
          Qr = rr.getRenderingCanvas();
        if (!Sr || !Qr) return void mr.c.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
        const Ur = Qr.width,
          tr = Qr.height,
          hr = gr.width,
          zr = gr.height,
          Yr = hr / Ur,
          nr = zr / tr,
          er = Ir ? Math.max(Yr, nr) : Math.min(Yr, nr),
          Kr = Ur * er,
          yr = tr * er,
          Br = (hr - Kr) / 2,
          Tr = (zr - yr) / 2;
        Sr.save(), Sr.fillStyle = fr ? xr.clearColor.toHexString() : "rgba(0, 0, 0, 0)", Sr.fillRect(0, 0, pr, Er), Sr.restore(), Sr.drawImage(Qr, 0, 0, Ur, tr, Br, Tr, Kr, yr), ar ? (Nr.h.EncodeScreenshotCanvasData(gr, void 0, Wr, void 0, jr), Zr && Zr("")) : Nr.h.EncodeScreenshotCanvasData(gr, Zr, Wr, void 0, jr)
      }))
    }
    async function Mr(rr, Sr, Qr) {
      let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Wr = arguments.length > 4 ? arguments[4] : void 0,
        ar = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        jr = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Ir = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      return await new Promise(((fr, Er) => {
        Cr(rr, Sr, Qr, (rr => {
          "undefined" !== typeof rr ? fr(rr) : Er(new Error("Data is undefined"))
        }), Zr, Ir, Wr, ar, jr)
      }))
    }
    async function Gr(rr, Sr, Qr, Zr) {
      let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        ar = arguments.length > 5 ? arguments[5] : void 0,
        jr = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return await new Promise((Ir => {
        Cr(rr, Sr, {
          width: Qr,
          height: Zr
        }, (() => {
          Ir()
        }), Wr, !0, ar, jr)
      }))
    }

    function kr(rr, Sr, ar, jr) {
      let Ir = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        fr = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
        Er = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        pr = arguments.length > 7 ? arguments[7] : void 0,
        Nr = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        zr = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        Yr = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
        nr = arguments.length > 11 ? arguments[11] : void 0,
        er = arguments.length > 12 ? arguments[12] : void 0,
        Kr = arguments.length > 13 ? arguments[13] : void 0,
        yr = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
        Br = arguments.length > 15 ? arguments[15] : void 0;
      const Tr = Sr.eC();
      if (Tr.frameGraph) return void Vr(Tr.frameGraph, Sr, ar, Ir, fr, Er, pr, nr, Kr, !jr).then((rr => {
        jr && jr(rr)
      }));
      const {
        height: vr,
        width: Or,
        finalWidth: Lr,
        finalHeight: lr
      } = ir(rr, Sr, ar), Xr = {
        width: Or,
        height: vr
      };
      if (!vr || !Or) return void mr.c.Error("Invalid 'size' parameter !");
      rr.skipFrameRender = !0;
      const Pr = rr.getRenderWidth,
        Hr = rr.getRenderHeight;
      rr.getRenderWidth = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && rr._currentRenderTarget ? rr._currentRenderTarget.width : Or
      }, rr.getRenderHeight = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && rr._currentRenderTarget ? rr._currentRenderTarget.height : vr
      }, rr.onResizeObservable.hasObservers() && rr.onResizeObservable.notifyObservers(rr);
      const qr = new Wr.b("screenShot", Xr, Tr, !1, !1, 0, !1, Zr.f.BILINEAR_SAMPLINGMODE, void 0, zr, void 0, void 0, void 0, fr);
      qr.renderList = Tr.meshes.slice(), qr.samples = fr, qr.renderSprites = Nr, qr.activeCamera = Sr, qr.forceLayerMaskCheck = Yr, er?.(qr);
      const Rr = Kr || Ur.DumpData,
        gr = () => {
          Tr.incrementRenderId(), Tr.resetCachedMaterial(), (0, hr.f)((() => qr.isReadyForRendering() && Sr.isReady(!0)), (() => {
            rr.onEndFrameObservable.addOnce((() => {
              Lr === Or && lr === vr ? qr.readPixels(void 0, void 0, void 0, !1).then((rr => {
                Rr(Or, vr, rr, jr, Ir, pr, !0, void 0, nr), qr.dispose()
              })) : (rr.isWebGPU ? Qr.e(689).then((() => Qr(64788))) : Qr.e(690).then((() => Qr(64796)))).then((async () => await (0, tr.d)("pass", qr.getInternalTexture(), Tr, void 0, void 0, void 0, Lr, lr).then((Sr => {
                rr._readTexturePixels(Sr, Lr, lr, -1, 0, null, !0, !1, 0, 0).then((rr => {
                  Rr(Lr, lr, rr, jr, Ir, pr, !0, void 0, nr), Sr.dispose()
                }))
              }))))
            })), Tr.incrementRenderId(), Tr.resetCachedMaterial();
            const Zr = Tr.activeCamera,
              Wr = Tr.activeCameras,
              ar = Sr.outputRenderTarget,
              fr = Tr.spritesEnabled;
            Tr.activeCamera = Sr, Tr.activeCameras = null, Sr.outputRenderTarget = qr, Tr.spritesEnabled = Nr;
            const Er = Tr.meshes;
            Tr.meshes = qr.renderList || Tr.meshes;
            try {
              Tr.render()
            } finally {
              Tr.activeCamera = Zr, Tr.activeCameras = Wr, Sr.outputRenderTarget = ar, Tr.spritesEnabled = fr, Tr.meshes = Er, rr.getRenderWidth = Pr, rr.getRenderHeight = Hr, rr.onResizeObservable.hasObservers() && rr.onResizeObservable.notifyObservers(rr), Sr.getProjectionMatrix(!0), rr.skipFrameRender = !1
            }
          }), (() => {
            rr.skipFrameRender = !1, rr.getRenderWidth = Pr, rr.getRenderHeight = Hr, Br?.()
          }), void 0, yr)
        };
      if (Er) {
        const rr = new xr("antialiasing", 1, Tr.activeCamera);
        qr.addPostProcess(rr), rr.autoClear = !0, rr.onEffectCreatedObservable.addOnce((rr => {
          rr.isReady() ? gr() : rr.onCompiled = () => {
            gr()
          }
        }))
      } else gr()
    }
    async function Ar(rr, Sr, Qr) {
      let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        ar = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        jr = arguments.length > 6 ? arguments[6] : void 0,
        Ir = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        fr = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Er = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
        pr = arguments.length > 10 ? arguments[10] : void 0,
        xr = arguments.length > 11 ? arguments[11] : void 0,
        mr = arguments.length > 12 ? arguments[12] : void 0;
      return await new Promise(((Nr, Ur) => {
        kr(rr, Sr, Qr, (rr => {
          "undefined" !== typeof rr ? Nr(rr) : Ur(new Error("Data is undefined"))
        }), Zr, Wr, ar, jr, Ir, fr, Er, pr, xr, mr)
      }))
    }
    async function Vr(rr, Sr, Qr) {
      let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        ar = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        jr = arguments.length > 6 ? arguments[6] : void 0,
        Ir = arguments.length > 7 ? arguments[7] : void 0,
        fr = arguments.length > 8 ? arguments[8] : void 0,
        Er = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        pr = arguments.length > 10 ? arguments[10] : void 0;
      const xr = rr.engine,
        mr = rr.textureManager,
        {
          height: Nr,
          width: tr,
          finalWidth: hr,
          finalHeight: Yr
        } = ir(xr, Sr, Qr),
        nr = {
          width: tr,
          height: Nr
        },
        er = fr || Ur.DumpData,
        Kr = rr.tasks,
        yr = Kr.length,
        Br = rr.pausedExecution,
        vr = xr.getCaps().parallelShaderCompile;
      mr.setBackBufferTextures(0, 0, {
        size: nr,
        options: {
          createMipMaps: !1,
          samples: Wr,
          types: [0],
          formats: [5],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot color"]
        },
        sizeIsPercentage: !1
      }, {
        size: nr,
        options: {
          createMipMaps: !1,
          samples: Wr,
          types: [0],
          formats: [xr.isStencilEnable ? 13 : 14],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot depth"]
        },
        sizeIsPercentage: !1
      });
      let Lr = zr;
      if (ar) {
        const Sr = new Tr("fxaa", rr);
        Sr.sourceTexture = Lr, Lr = Sr.outputTexture, rr.addTask(Sr)
      }
      if (hr !== tr || Yr !== Nr) {
        const Sr = new Or("pass", rr);
        Sr.sourceTexture = Lr, Sr.targetTexture = rr.textureManager.createRenderTargetTexture("pass_output", {
          size: {
            width: hr,
            height: Yr
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
        }), Lr = Sr.outputTexture, rr.addTask(Sr)
      }
      const lr = Rr.FindMainObjectRenderer(rr);
      let Xr = null;
      lr && (Xr = lr.camera, lr.camera = Sr), xr.getCaps().parallelShaderCompile = void 0, await rr.buildAsync();
      const Pr = pr ?? (mr.hasHistoryTextures ? 32 : 1);
      for (let Ur = 0; Ur < Pr; ++Ur) rr.execute();
      rr.pausedExecution = !0, xr.getCaps().parallelShaderCompile = vr;
      for (let Ur = yr; Ur < Kr.length; ++Ur) rr.tasks[Ur].dispose();
      rr.tasks.length = yr, lr && Xr && (lr.camera = Xr);
      const Hr = rr.textureManager.getTextureFromHandle(Lr);
      return Hr.incrementReferences(), mr.resetBackBufferTextures(), await rr.buildAsync(), rr.pausedExecution = Br, new Promise((rr => {
        xr._readTexturePixels(Hr, hr, Yr, -1, 0, null, !0, !1, 0, 0).then((async Sr => {
          Hr.dispose(), er(hr, Yr, Sr, Er ? void 0 : Sr => rr(Sr), Zr, jr, !0, void 0, Ir), Er && rr(null)
        }))
      }))
    }

    function ir(rr, Sr, Qr) {
      let Zr = 0,
        Wr = 0,
        ar = 0,
        jr = 0;
      if ("object" === typeof Qr) {
        const Ir = Qr.precision ? Math.abs(Qr.precision) : 1;
        Qr.width && Qr.height ? (Zr = Qr.height * Ir, Wr = Qr.width * Ir) : Qr.width && !Qr.height ? (Wr = Qr.width * Ir, Zr = Math.round(Wr / rr.getAspectRatio(Sr))) : Qr.height && !Qr.width ? (Zr = Qr.height * Ir, Wr = Math.round(Zr * rr.getAspectRatio(Sr))) : (Wr = Math.round(rr.getRenderWidth() * Ir), Zr = Math.round(Wr / rr.getAspectRatio(Sr))), Qr.finalWidth && Qr.finalHeight ? (jr = Qr.finalHeight, ar = Qr.finalWidth) : Qr.finalWidth && !Qr.finalHeight ? (ar = Qr.finalWidth, jr = Math.round(ar / rr.getAspectRatio(Sr))) : Qr.finalHeight && !Qr.finalWidth ? (jr = Qr.finalHeight, ar = Math.round(jr * rr.getAspectRatio(Sr))) : (ar = Wr, jr = Zr)
      } else isNaN(Qr) || (Zr = Qr, Wr = Qr, ar = Qr, jr = Qr);
      return Wr && (Wr = Math.floor(Wr)), Zr && (Zr = Math.floor(Zr)), ar && (ar = Math.floor(ar)), jr && (jr = Math.floor(jr)), {
        height: 0 | Zr,
        width: 0 | Wr,
        finalWidth: 0 | ar,
        finalHeight: 0 | jr
      }
    }
    const wr = {
      CreateScreenshot: Cr,
      CreateScreenshotAsync: Mr,
      CreateScreenshotWithResizeAsync: Gr,
      CreateScreenshotUsingRenderTarget: kr,
      CreateScreenshotUsingRenderTargetAsync: Ar,
      CreateScreenshotForFrameGraphAsync: Vr
    };
    let cr = !1;

    function Fr() {
      if (cr) return;
      cr = !0;
      Nr.h.CreateScreenshot = Cr, Nr.h.CreateScreenshotAsync = Mr, Nr.h.CreateScreenshotUsingRenderTarget = kr, Nr.h.CreateScreenshotUsingRenderTargetAsync = Ar
    }
    Fr()
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);