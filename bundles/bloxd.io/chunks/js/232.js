export const id = 232;
export const ids = [232, 233];
export const modules = {
  39544: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => lv,
      c: () => Wv
    });
    var hv = Pv(39295),
      Sv = Pv(39300),
      ev = Pv(36594),
      gv = Pv(36751),
      pv = Pv(39553),
      dv = Pv(39518),
      Nv = Pv(36631);
    let lv = (() => {
        var vv;
        let zv, Pv, dv = pv.c,
          Nv = [],
          lv = [],
          Tv = [],
          Wv = [];
        return vv = class extends dv {
          constructor(vv, zv, Pv, Sv) {
            super(vv, Pv, Sv), this.groundColor = (0, hv.f)(this, Nv, new gv.b(0, 0, 0)), this.direction = ((0, hv.f)(this, lv), (0, hv.f)(this, Tv, void 0)), (0, hv.f)(this, Wv), this.direction = zv || ev.l.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(vv) {
            return this.direction = ev.l.Normalize(vv.subtract(ev.l.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(vv, zv) {
            const Pv = ev.l.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", Pv.x, Pv.y, Pv.z, 0, zv), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), zv), this
          }
          transferToNodeMaterialEffect(vv, zv) {
            const Pv = ev.l.Normalize(this.direction);
            return vv.setFloat3(zv, Pv.x, Pv.y, Pv.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = ev.c.Identity()), this._worldMatrix
          }
          getTypeID() {
            return pv.c.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(vv, zv) {
            vv["HEMILIGHT" + zv] = !0
          }
        }, (() => {
          const ev = "function" === typeof Symbol && Symbol.metadata ? Object.create(dv[Symbol.metadata] ?? null) : void 0;
          zv = [(0, Sv.n)()], Pv = [(0, Sv.I)()], (0, hv.e)(null, null, zv, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: vv => "groundColor" in vv,
              get: vv => vv.groundColor,
              set: (vv, zv) => {
                vv.groundColor = zv
              }
            },
            metadata: ev
          }, Nv, lv), (0, hv.e)(null, null, Pv, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: vv => "direction" in vv,
              get: vv => vv.direction,
              set: (vv, zv) => {
                vv.direction = zv
              }
            },
            metadata: ev
          }, Tv, Wv), ev && Object.defineProperty(vv, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ev
          })
        })(), vv
      })(),
      Tv = !1;

    function Wv() {
      Tv || (Tv = !0, dv.c.AddNodeConstructor("Light_Type_3", ((vv, zv) => () => new lv(vv, ev.l.Zero(), zv))), (0, Nv.c)("BABYLON.HemisphericLight", lv))
    }
  },
  37290: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Sv
    });
    var hv = Pv(37293);
    class Sv {
      static GetPlanes(vv) {
        const zv = [];
        for (let Pv = 0; Pv < 6; Pv++) zv.push(new hv.b(0, 0, 0, 0));
        return Sv.GetPlanesToRef(vv, zv), zv
      }
      static GetNearPlaneToRef(vv, zv) {
        const Pv = vv.m;
        zv.normal.x = Pv[3] + Pv[2], zv.normal.y = Pv[7] + Pv[6], zv.normal.z = Pv[11] + Pv[10], zv.d = Pv[15] + Pv[14], zv.normalize()
      }
      static GetFarPlaneToRef(vv, zv) {
        const Pv = vv.m;
        zv.normal.x = Pv[3] - Pv[2], zv.normal.y = Pv[7] - Pv[6], zv.normal.z = Pv[11] - Pv[10], zv.d = Pv[15] - Pv[14], zv.normalize()
      }
      static GetLeftPlaneToRef(vv, zv) {
        const Pv = vv.m;
        zv.normal.x = Pv[3] + Pv[0], zv.normal.y = Pv[7] + Pv[4], zv.normal.z = Pv[11] + Pv[8], zv.d = Pv[15] + Pv[12], zv.normalize()
      }
      static GetRightPlaneToRef(vv, zv) {
        const Pv = vv.m;
        zv.normal.x = Pv[3] - Pv[0], zv.normal.y = Pv[7] - Pv[4], zv.normal.z = Pv[11] - Pv[8], zv.d = Pv[15] - Pv[12], zv.normalize()
      }
      static GetTopPlaneToRef(vv, zv) {
        const Pv = vv.m;
        zv.normal.x = Pv[3] - Pv[1], zv.normal.y = Pv[7] - Pv[5], zv.normal.z = Pv[11] - Pv[9], zv.d = Pv[15] - Pv[13], zv.normalize()
      }
      static GetBottomPlaneToRef(vv, zv) {
        const Pv = vv.m;
        zv.normal.x = Pv[3] + Pv[1], zv.normal.y = Pv[7] + Pv[5], zv.normal.z = Pv[11] + Pv[9], zv.d = Pv[15] + Pv[13], zv.normalize()
      }
      static GetPlanesToRef(vv, zv) {
        Sv.GetNearPlaneToRef(vv, zv[0]), Sv.GetFarPlaneToRef(vv, zv[1]), Sv.GetLeftPlaneToRef(vv, zv[2]), Sv.GetRightPlaneToRef(vv, zv[3]), Sv.GetTopPlaneToRef(vv, zv[4]), Sv.GetBottomPlaneToRef(vv, zv[5])
      }
      static IsPointInFrustum(vv, zv) {
        for (let Pv = 0; Pv < 6; Pv++)
          if (zv[Pv].dotCoordinate(vv) < 0) return !1;
        return !0
      }
    }
  },
  37293: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Sv
    });
    var hv = Pv(36594);
    class Sv {
      constructor(vv, zv, Pv, Sv) {
        this.normal = new hv.l(vv, zv, Pv), this.d = Sv
      }
      pPv() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Sv(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let vv = this.normal.getHashCode();
        return vv = 397 * vv ^ this.d, vv
      }
      normalize() {
        const vv = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let zv = 0;
        return 0 !== vv && (zv = 1 / vv), this.normal.x *= zv, this.normal.y *= zv, this.normal.z *= zv, this.d *= zv, this
      }
      transform(vv) {
        const zv = Sv._TmpMatrix;
        vv.invertToRef(zv);
        const Pv = zv.m,
          hv = this.normal.x,
          ev = this.normal.y,
          gv = this.normal.z,
          pv = this.d,
          dv = hv * Pv[0] + ev * Pv[1] + gv * Pv[2] + pv * Pv[3],
          Nv = hv * Pv[4] + ev * Pv[5] + gv * Pv[6] + pv * Pv[7],
          lv = hv * Pv[8] + ev * Pv[9] + gv * Pv[10] + pv * Pv[11],
          Tv = hv * Pv[12] + ev * Pv[13] + gv * Pv[14] + pv * Pv[15];
        return new Sv(dv, Nv, lv, Tv)
      }
      dotCoordinate(vv) {
        return this.normal.x * vv.x + this.normal.y * vv.y + this.normal.z * vv.z + this.d
      }
      copyFromPoints(vv, zv, Pv) {
        const hv = zv.x - vv.x,
          Sv = zv.y - vv.y,
          ev = zv.z - vv.z,
          gv = Pv.x - vv.x,
          pv = Pv.y - vv.y,
          dv = Pv.z - vv.z,
          Nv = Sv * dv - ev * pv,
          lv = ev * gv - hv * dv,
          Tv = hv * pv - Sv * gv,
          Wv = Math.sqrt(Nv * Nv + lv * lv + Tv * Tv);
        let wv;
        return wv = 0 !== Wv ? 1 / Wv : 0, this.normal.x = Nv * wv, this.normal.y = lv * wv, this.normal.z = Tv * wv, this.d = -(this.normal.x * vv.x + this.normal.y * vv.y + this.normal.z * vv.z), this
      }
      isFrontFacingTo(vv, zv) {
        return hv.l.Dot(this.normal, vv) <= zv
      }
      signedDistanceTo(vv) {
        return hv.l.Dot(vv, this.normal) + this.d
      }
      static FromArray(vv) {
        return new Sv(vv[0], vv[1], vv[2], vv[3])
      }
      static FromPoints(vv, zv, Pv) {
        const hv = new Sv(0, 0, 0, 0);
        return hv.copyFromPoints(vv, zv, Pv), hv
      }
      static FromPositionAndNormal(vv, zv) {
        const Pv = new Sv(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(vv, zv, Pv)
      }
      static FromPositionAndNormalToRef(vv, zv, Pv) {
        return Pv.normal.Vzv(zv), Pv.normal.normalize(), Pv.d = -vv.dot(Pv.normal), Pv
      }
      static SignedDistanceToPlaneFromPositionAndNormal(vv, zv, Pv) {
        const Sv = -(zv.x * vv.x + zv.y * vv.y + zv.z * vv.z);
        return hv.l.Dot(Pv, zv) + Sv
      }
    }
    Sv._TmpMatrix = hv.c.Identity()
  },
  37633: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => hv
    });
    class hv {
      constructor(vv, zv, Pv, hv) {
        this.x = vv, this.y = zv, this.width = Pv, this.height = hv
      }
      toGlobal(vv, zv) {
        return new hv(this.x * vv, this.y * zv, this.width * vv, this.height * zv)
      }
      toGlobalToRef(vv, zv, Pv) {
        return Pv.x = this.x * vv, Pv.y = this.y * zv, Pv.width = this.width * vv, Pv.height = this.height * zv, this
      }
      clone() {
        return new hv(this.x, this.y, this.width, this.height)
      }
    }
  },
  38207: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => ev
    });
    var hv = Pv(38209);
    const Sv = (vv, zv, Pv) => vv ? vv.getClassName && "Mesh" === vv.getClassName() ? null : !vv.getClassName || "SubMesh" !== vv.getClassName() && "PhysicsBody" !== vv.getClassName() ? vv.clone ? vv.clone() : Array.isArray(vv) ? vv.slice() : Pv && "object" === typeof vv ? {
      ...vv
    } : null : vv.clone(zv) : null;
    class ev {
      static DeepCopy(vv, zv, Pv, ev) {
        let gv = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const pv = function(vv) {
          const zv = [];
          do {
            const Pv = Object.getOwnPropertyNames(vv);
            for (const vv of Pv) - 1 === zv.indexOf(vv) && zv.push(vv)
          } while (vv = Object.getPrototypeOf(vv));
          return zv
        }(vv);
        for (const Nv of pv) {
          if ("_" === Nv[0] && (!ev || -1 === ev.indexOf(Nv))) continue;
          if (Nv.endsWith("Observable")) continue;
          if (Pv && -1 !== Pv.indexOf(Nv)) continue;
          const pv = vv[Nv],
            lv = typeof pv;
          if ("function" !== lv) try {
            if ("object" === lv)
              if (pv instanceof Uint8Array) zv[Nv] = Uint8Array.from(pv);
              else if (pv instanceof Array) {
              if (zv[Nv] = [], pv.length > 0)
                if ("object" == typeof pv[0])
                  for (let vv = 0; vv < pv.length; vv++) {
                    const Pv = Sv(pv[vv], zv, gv); - 1 === zv[Nv].indexOf(Pv) && zv[Nv].push(Pv)
                  } else zv[Nv] = pv.slice(0)
            } else zv[Nv] = Sv(pv, zv, gv);
            else zv[Nv] = pv
          } catch (dv) {
            hv.d.Warn(dv.message)
          }
        }
      }
    }
  },
  37431: (vv, zv, Pv) => {
    function hv() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (vv => {
        const zv = 16 * Math.random() | 0;
        return ("x" === vv ? zv : 3 & zv | 8).toString(16)
      }))
    }
    Pv.d(zv, {
      b: () => hv
    })
  },
  38209: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => hv
    });
    class hv {
      static _CheckLimit(vv, zv) {
        let Pv = hv._LogLimitOutputs[vv];
        return Pv ? Pv.current++ : (Pv = {
          limit: zv,
          current: 1
        }, hv._LogLimitOutputs[vv] = Pv), Pv.current <= Pv.limit
      }
      static _GenerateLimitMessage(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const Pv = hv._LogLimitOutputs[vv];
        if (!Pv || !hv.MessageLimitReached) return;
        const Sv = this._Levels[zv];
        Pv.current === Pv.limit && hv[Sv.name](hv.MessageLimitReached.replace(/%LIMIT%/g, "" + Pv.limit).replace(/%TYPE%/g, Sv.name ?? ""))
      }
      static _AddLogEntry(vv) {
        hv._LogCache = vv + hv._LogCache, hv.OnNewCacheEntry && hv.OnNewCacheEntry(vv)
      }
      static _FormatMessage(vv) {
        const zv = vv => vv < 10 ? "0" + vv : "" + vv,
          Pv = new Date;
        return "[" + zv(Pv.getHours()) + ":" + zv(Pv.getMinutes()) + ":" + zv(Pv.getSeconds()) + "]: " + vv
      }
      static _LogDisabled(vv, zv) {}
      static _LogEnabled() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          zv = arguments.length > 1 ? arguments[1] : void 0,
          Pv = arguments.length > 2 ? arguments[2] : void 0;
        const Sv = Array.isArray(zv) ? zv[0] : zv;
        if (void 0 !== Pv && !hv._CheckLimit(Sv, Pv)) return;
        const ev = hv._FormatMessage(Sv),
          gv = this._Levels[vv],
          pv = Array.isArray(zv) ? zv.slice(1) : [];
        gv.logFunc && gv.logFunc("BJS - " + ev, ...pv);
        const dv = `<div style='color:${gv.color}'>${ev}</div><br>`;
        hv._AddLogEntry(dv), hv._GenerateLimitMessage(Sv, vv)
      }
      static get LogCache() {
        return hv._LogCache
      }
      static ClearLogCache() {
        hv._LogCache = "", hv._LogLimitOutputs = {}, hv.errorsCount = 0
      }
      static set LogLevels(vv) {
        hv.Log = hv._LogDisabled, hv.Warn = hv._LogDisabled, hv.Error = hv._LogDisabled;
        const zv = [hv.MessageLogLevel, hv.WarningLogLevel, hv.ErrorLogLevel];
        for (const Pv of zv)
          if ((vv & Pv) === Pv) {
            const vv = this._Levels[Pv];
            hv[vv.name] = hv._LogEnabled.bind(hv, Pv)
          }
      }
    }
    hv.NoneLogLevel = 0, hv.MessageLogLevel = 1, hv.WarningLogLevel = 2, hv.ErrorLogLevel = 4, hv.AllLogLevel = 7, hv.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", hv._LogCache = "", hv._LogLimitOutputs = {}, hv._Levels = [{}, {
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
    }], hv.errorsCount = 0, hv.Log = hv._LogEnabled.bind(hv, hv.MessageLogLevel), hv.Warn = hv._LogEnabled.bind(hv, hv.WarningLogLevel), hv.Error = hv._LogEnabled.bind(hv, hv.ErrorLogLevel)
  },
  60567: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      CreateScreenshot: () => Iv,
      CreateScreenshotAsync: () => Qv,
      CreateScreenshotForFrameGraphAsync: () => Hv,
      CreateScreenshotUsingRenderTarget: () => Av,
      CreateScreenshotUsingRenderTargetAsync: () => Lv,
      CreateScreenshotWithResizeAsync: () => Zv,
      RegisterScreenshotTools: () => Jv,
      ScreenshotTools: () => yv
    });
    var hv = Pv(39798),
      Sv = Pv(41125),
      ev = Pv(41097),
      gv = Pv(39312),
      pv = Pv(41103),
      dv = Pv(36615),
      Nv = Pv(36594);
    class lv extends pv.g {
      static _GetDefines(vv) {
        if (!vv) return null;
        return vv.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
      }
      _gatherImports(vv, zv) {
        vv ? (this._webGPUReady = !0, zv.push(Promise.all([Pv.e(368).then((() => Pv(60927))), Pv.e(369).then((() => Pv(60931)))]))) : zv.push(Promise.all([Pv.e(370).then((() => Pv(60934))), Pv.e(371).then((() => Pv(60936)))]))
      }
      constructor(vv) {
        const zv = {
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: vv,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || dv.e.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          vertexShader: lv.VertexUrl,
          fragmentShader: lv.FragmentUrl,
          uniforms: lv.Uniforms
        };
        super({
          ...zv,
          defines: lv._GetDefines(zv.engine)
        }), this.texelSize = new Nv.j(0, 0)
      }
      bind() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.bind(vv), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
      }
    }
    lv.VertexUrl = "fxaa", lv.FragmentUrl = "fxaa", lv.Uniforms = ["texelSize"];
    class Tv extends ev.d {
      getClassName() {
        return "FxaaPostProcess"
      }
      constructor(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Sv = arguments.length > 3 ? arguments[3] : void 0,
          ev = arguments.length > 4 ? arguments[4] : void 0,
          gv = arguments.length > 5 ? arguments[5] : void 0,
          pv = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const dv = {
          uniforms: lv.Uniforms,
          size: "number" === typeof zv ? zv : void 0,
          camera: Pv,
          samplingMode: Sv || hv.e.BILINEAR_SAMPLINGMODE,
          engine: ev,
          reusable: gv,
          textureType: pv,
          ...zv
        };
        super(vv, lv.FragmentUrl, {
          effectWrapper: "number" !== typeof zv && zv.effectWrapper ? void 0 : new lv(vv, ev, dv),
          ...dv
        }), this.onApplyObservable.add((vv => {
          this._effectWrapper.texelSize = this.texelSize
        }))
      }
      static _Parse(vv, zv, Pv, hv) {
        return gv.c.Parse((() => new Tv(vv.name, vv.options, zv, vv.renderTargetSamplingMode, Pv.ma(), vv.reusable)), vv, Pv, hv)
      }
    }
    var Wv = Pv(38209),
      wv = Pv(39399),
      av = Pv(41139),
      sv = Pv(41118),
      Cv = Pv(39204);
    const iv = 0;
    class cv {
      constructor(vv, zv, Pv) {
        this.name = vv, this._parentTask = zv, this._context = Pv, this.disabled = !1
      }
      setInitializeFunc(vv) {
        this._initFunc = vv
      }
      setExecuteFunc(vv) {
        this._executeFunc = vv
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
    class Gv extends cv {
      static IsObjectListPass(vv) {
        return void 0 !== vv.setObjectList
      }
      get objectList() {
        return this._objectList
      }
      setObjectList(vv) {
        this._objectList = vv
      }
      constructor(vv, zv, Pv, hv) {
        super(vv, zv, Pv), this._engine = hv
      }
      _isValid() {
        const vv = super._isValid();
        return vv || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
      }
    }
    class mv extends cv {
      static IsRenderPass(vv) {
        return void 0 !== vv.setRenderTarget
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
      constructor(vv, zv, Pv, hv) {
        super(vv, zv, Pv), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = hv
      }
      setRenderTarget(vv) {
        this._renderTarget = vv
      }
      setRenderTargetDepth(vv) {
        this._renderTargetDepth = vv
      }
      addDependencies(vv) {
        if (void 0 !== vv)
          if (Array.isArray(vv))
            for (const zv of vv) this._dependencies.add(zv);
          else this._dependencies.add(vv)
      }
      collectDependencies(vv) {
        const zv = this._dependencies.keys();
        for (let Pv = zv.next(); !0 !== Pv.done; Pv = zv.next()) vv.add(Pv.value);
        if (void 0 !== this._renderTarget)
          if (Array.isArray(this._renderTarget))
            for (const Pv of this._renderTarget) void 0 !== Pv && vv.add(Pv);
          else vv.add(this._renderTarget);
        void 0 !== this._renderTargetDepth && vv.add(this._renderTargetDepth)
      }
      setOutputLayerAndFaceIndices(vv) {
        const zv = this.frameGraphRenderTarget.renderTargetWrapper;
        if (zv)
          for (const Pv of vv) zv.setLayerAndFaceIndex(Pv.targetIndex, Pv.layerIndex, Pv.faceIndex)
      }
      _initialize() {
        this._frameGraphRenderTarget = this._context.createRenderTarget(this.name, this._renderTarget, this._renderTargetDepth, this.depthReadOnly, this.stencilReadOnly), super._initialize()
      }
      _execute() {
        this._context.bindRenderTarget(this._frameGraphRenderTarget), super._execute(), this._context.restoreDefaultFramebuffer()
      }
      _isValid() {
        const vv = super._isValid();
        return vv || (void 0 !== this._renderTarget || void 0 !== this.renderTargetDepth ? null : "Render target and render target depth cannot both be undefined.")
      }
      _dispose() {
        this._frameGraphRenderTarget?.dispose()
      }
    }
    var jv = Pv(36618);
    class fv {
      get name() {
        return this._name
      }
      set name(vv) {
        this._name = vv
      }
      get disabled() {
        return this._disabled
      }
      set disabled(vv) {
        this._disabled = vv
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
      constructor(vv, zv) {
        this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new jv.c, this.onBeforeTaskExecute = new jv.c, this.onAfterTaskExecute = new jv.c, this.name = vv, this._frameGraph = zv, this._reset()
      }
      _reset() {
        for (const vv of this._passes) vv._dispose();
        for (const vv of this._passesDisabled) vv._dispose();
        this._passes.length = 0, this._passesDisabled.length = 0
      }
      _addPass(vv, zv) {
        zv ? this._passesDisabled.push(vv) : this._passes.push(vv)
      }
      _checkTask() {
        let vv, zv = null,
          Pv = null;
        for (const pv of this._passes) {
          const hv = pv._isValid();
          if (hv) throw new Error(`Pass "${pv.name}" is not valid. ${hv}`);
          if (mv.IsRenderPass(pv)) {
            const vv = Array.isArray(pv.renderTarget) ? pv.renderTarget : [pv.renderTarget];
            zv = [];
            for (const Pv of vv) void 0 !== Pv && zv.push(this._frameGraph.textureManager.getTextureFromHandle(Pv));
            Pv = void 0 !== pv.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(pv.renderTargetDepth) : null
          } else Gv.IsObjectListPass(pv) && (vv = pv.objectList)
        }
        let hv, Sv = null,
          ev = [],
          gv = null;
        for (const pv of this._passesDisabled) {
          const vv = pv._isValid();
          if (vv) throw new Error(`Pass "${pv.name}" is not valid. ${vv}`);
          if (mv.IsRenderPass(pv)) {
            const vv = Array.isArray(pv.renderTarget) ? pv.renderTarget : [pv.renderTarget];
            Sv = [];
            for (const zv of vv) void 0 !== zv && Sv.push(this._frameGraph.textureManager.getTextureFromHandle(zv));
            ev = vv, gv = void 0 !== pv.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(pv.renderTargetDepth) : null
          } else Gv.IsObjectListPass(pv) && (hv = pv.objectList)
        }
        if (this._passesDisabled.length > 0) {
          if (!this._checkSameRenderTarget(zv, Sv)) {
            let vv = !0;
            for (const zv of ev)
              if (void 0 !== zv && !this._frameGraph.textureManager.isHistoryTexture(zv)) {
                vv = !1;
                break
              } if (!vv) throw new Error(`The output texture of the task "${this.name}" is different when it is enabled or disabled.`)
          }
          if (Pv !== gv && null !== gv) throw new Error(`The output depth texture of the task "${this.name}" is different when it is enabled or disabled.`);
          if (vv !== hv && null !== hv) throw new Error(`The output object list of the task "${this.name}" is different when it is enabled or disabled.`)
        }
      }
      _execute() {
        const vv = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
        this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const zv of vv) zv._execute()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
        this.onAfterTaskExecute.notifyObservers(this)
      }
      _initializePasses() {
        this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const vv of this._passes) vv._initialize();
          for (const vv of this._passesDisabled) vv._initialize()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
      }
      _checkSameRenderTarget(vv, zv) {
        if (null === vv || null === zv) return vv === zv;
        if (vv.length !== zv.length) return !1;
        for (let Pv = 0; Pv < vv.length; Pv++)
          if (vv[Pv] !== zv[Pv]) return !1;
        return !0
      }
    }
    class Fv extends fv {
      get alphaMode() {
        return this.postProcess.alphaMode
      }
      set alphaMode(vv) {
        this.postProcess.alphaMode = vv
      }
      get drawWrapper() {
        return this._postProcessDrawWrapper
      }
      constructor(vv, zv, Pv) {
        super(vv, zv), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = Pv, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture = this._frameGraph.textureManager.createDanglingHandle(), this.outputDepthAttachmentTexture = this._frameGraph.textureManager.createDanglingHandle()
      }
      isReady() {
        return this.postProcess.isReady()
      }
      getClassName() {
        return "FrameGraphPostProcessTask"
      }
      record() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          zv = arguments.length > 1 ? arguments[1] : void 0,
          Pv = arguments.length > 2 ? arguments[2] : void 0;
        if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
        const hv = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
        if (hv && (hv.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, hv), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentTexture, this.depthAttachmentTexture), hv) {
          const vv = this._frameGraph.textureManager.getTextureAbsoluteDimensions(hv);
          this._sourceWidth = vv.width, this._sourceHeight = vv.height
        }
        const Sv = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
        this._outputWidth = Sv.size.width, this._outputHeight = Sv.size.height;
        const ev = this._frameGraph.addRenderPass(this.name);
        if (ev.depthReadOnly = this.depthReadOnly, ev.stencilReadOnly = this.stencilReadOnly, ev.addDependencies(this.sourceTexture), ev.setRenderTarget(this.outputTexture), ev.setRenderTargetDepth(this.depthAttachmentTexture), ev.setExecuteFunc((vv => {
            vv.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && vv.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), zv?.(vv), this.viewport && vv.setViewport(this.viewport), vv.applyFullScreenEffect(this._postProcessDrawWrapper, (() => {
              void 0 !== this.sourceTexture && vv.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), Pv?.(vv), this.postProcess.bind()
            }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), vv.restoreDefaultFramebuffer(), vv.popDebugGroup()
          })), !vv) {
          const vv = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
          vv.depthReadOnly = this.depthReadOnly, vv.stencilReadOnly = this.stencilReadOnly, vv.addDependencies(this.sourceTexture), vv.setRenderTarget(this.outputTexture), vv.setRenderTargetDepth(this.depthAttachmentTexture), vv.setExecuteFunc((vv => {
            void 0 !== this.sourceTexture && 0 === this.alphaMode && (this.viewport && vv.setViewport(this.viewport), vv.copyTexture(this.sourceTexture, void 0, void 0 !== this.viewport))
          }))
        }
        return ev
      }
      dispose() {
        this.postProcess.dispose(), super.dispose()
      }
    }
    class Yv extends Fv {
      constructor(vv, zv, Pv) {
        super(vv, zv, Pv || new lv(vv, zv.engine))
      }
      getClassName() {
        return "FrameGraphFXAATask"
      }
      record() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          zv = arguments.length > 1 ? arguments[1] : void 0,
          Pv = arguments.length > 2 ? arguments[2] : void 0;
        const hv = super.record(vv, zv, Pv);
        return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, hv
      }
    }
    var nv = Pv(41130);
    class Ov extends Fv {
      constructor(vv, zv, Pv) {
        super(vv, zv, Pv || new nv.e(vv, zv.engine))
      }
      getClassName() {
        return "FrameGraphPassTask"
      }
    }
    var Dv = Pv(39395),
      Kv = Pv(39479),
      Vv = Pv(39438),
      Uv = Pv(39544),
      Rv = Pv(36751);
    class xv {
      getRenderCamera(vv) {
        if (this._renderCamera) return this._renderCamera;
        {
          let zv;
          return zv = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, vv && zv && zv.isRigCamera ? zv.rigParent : zv
        }
      }
      setRenderCamera(vv) {
        this._renderCamera = vv
      }
      _getSharedGizmoLight() {
        return this._sharedGizmoLight || (this._sharedGizmoLight = new Uv.b("shared gizmo light", new Nv.l(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = Rv.b.Gray()), this._sharedGizmoLight
      }
      static get DefaultUtilityLayer() {
        return null == xv._DefaultUtilityLayer ? xv._CreateDefaultUtilityLayerFromScene(dv.e.LastCreatedScene) : xv._DefaultUtilityLayer
      }
      static _CreateDefaultUtilityLayerFromScene(vv) {
        return xv._DefaultUtilityLayer = new xv(vv), xv._DefaultUtilityLayer.originalScene.uD.addOnce((() => {
          xv._DefaultUtilityLayer = null
        })), xv._DefaultUtilityLayer
      }
      static get DefaultKeepDepthUtilityLayer() {
        return null == xv._DefaultKeepDepthUtilityLayer ? xv._CreateDefaultKeepUtilityLayerFromScene(dv.e.LastCreatedScene) : xv._DefaultKeepDepthUtilityLayer
      }
      static _CreateDefaultKeepUtilityLayerFromScene(vv) {
        return xv._DefaultKeepDepthUtilityLayer = new xv(vv), xv._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, xv._DefaultKeepDepthUtilityLayer.originalScene.uD.addOnce((() => {
          xv._DefaultKeepDepthUtilityLayer = null
        })), xv._DefaultKeepDepthUtilityLayer
      }
      constructor(vv) {
        let zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.originalScene = vv, this.handleEvents = zv, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.processAllEvents = !1, this.pickingEnabled = !0, this.onPointerOutObservable = new jv.c, this.utilityLayerScene = new Dv.g(vv.ma(), {
          virtual: !0,
          useFloatingOrigin: vv.floatingOriginMode
        }), this.utilityLayerScene.useRightHandedSystem = vv.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), zv && (this._originalPointerObserver = vv.onPrePointerObservable.add((zv => {
          if (!this.utilityLayerScene.activeCamera) return;
          if (!this.pickingEnabled) return;
          if (!this.processAllEvents && zv.type !== Kv.b.POINTERMOVE && zv.type !== Kv.b.POINTERUP && zv.type !== Kv.b.POINTERDOWN && zv.type !== Kv.b.POINTERDOUBLETAP) return;
          this.utilityLayerScene.pointerX = vv.pointerX, this.utilityLayerScene.pointerY = vv.pointerY;
          const Pv = zv.event;
          if (vv.isPointerCaptured(Pv.pointerId)) return void(this._pointerCaptures[Pv.pointerId] = !1);
          const hv = Pv => {
              let hv;
              if (zv.nearInteractionPickingInfo) hv = zv.nearInteractionPickingInfo.pickedMesh.rD() == Pv ? zv.nearInteractionPickingInfo : new Vv.c;
              else if (Pv !== this.utilityLayerScene && zv.originalPickingInfo) hv = zv.originalPickingInfo;
              else {
                let Sv = null;
                this._renderCamera && (Sv = Pv._activeCamera, Pv._activeCamera = this._renderCamera, zv.ray = null), hv = zv.ray ? Pv.pickWithRay(zv.ray) : Pv.HW(vv.pointerX, vv.pointerY), Sv && (Pv._activeCamera = Sv)
              }
              return hv
            },
            Sv = hv(this.utilityLayerScene);
          if (!zv.ray && Sv && (zv.ray = Sv.ray), zv.originalPickingInfo?.aimTransform && Sv && (Sv.aimTransform = zv.originalPickingInfo.aimTransform, Sv.gripTransform = zv.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(zv), this.onlyCheckPointerDownEvents && zv.type != Kv.b.POINTERDOWN) return zv.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new Kv.g(zv.type, zv.event, Sv), zv.type), void(zv.type === Kv.b.POINTERUP && this._pointerCaptures[Pv.pointerId] && (this._pointerCaptures[Pv.pointerId] = !1));
          if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) Sv && Sv.hit && (zv.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new Kv.g(zv.type, zv.event, Sv), zv.type), zv.skipOnPointerObservable = !0);
          else {
            const Pv = hv(vv),
              ev = zv.event;
            Pv && Sv && (0 === Sv.distance && Pv.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(Pv.pickedMesh) ? (this._notifyObservers(zv, Pv, ev), zv.skipOnPointerObservable = !0) : zv.type === Kv.b.POINTERDOWN ? (this._pointerCaptures[ev.pointerId] = !0, this._notifyObservers(zv, Pv, ev)) : zv.type !== Kv.b.POINTERMOVE && zv.type !== Kv.b.POINTERUP || (this._lastPointerEvents[ev.pointerId] && (this.onPointerOutObservable.notifyObservers(ev.pointerId), delete this._lastPointerEvents[ev.pointerId]), this._notifyObservers(zv, Pv, ev)) : !this._pointerCaptures[ev.pointerId] && (Sv.distance < Pv.distance || 0 === Pv.distance) ? (this._notifyObservers(zv, Sv, ev), zv.skipOnPointerObservable || (zv.skipOnPointerObservable = Sv.distance > 0)) : !this._pointerCaptures[ev.pointerId] && Sv.distance >= Pv.distance && (this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(Pv.pickedMesh) ? (this._notifyObservers(zv, Pv, ev), zv.skipOnPointerObservable = !0) : (zv.type !== Kv.b.POINTERMOVE && zv.type !== Kv.b.POINTERUP || this._lastPointerEvents[ev.pointerId] && (this.onPointerOutObservable.notifyObservers(ev.pointerId), delete this._lastPointerEvents[ev.pointerId]), this._notifyObservers(zv, Sv, ev))), zv.type === Kv.b.POINTERUP && this._pointerCaptures[ev.pointerId] && (this._pointerCaptures[ev.pointerId] = !1))
          }
        })), this._originalPointerObserver && vv.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, Pv || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((vv => {
          this.shouldRender && vv == this.getRenderCamera() && this.render()
        }))), this._sceneDisposeObserver = this.originalScene.uD.add((() => {
          this.dispose()
        })), this._updateCamera()
      }
      _notifyObservers(vv, zv, Pv) {
        vv.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new Kv.g(vv.type, vv.event, zv), vv.type), this._lastPointerEvents[Pv.pointerId] = !0)
      }
      render() {
        if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
          const vv = this.utilityLayerScene.activeCamera.rD(),
            zv = this.utilityLayerScene.activeCamera;
          zv._scene = this.utilityLayerScene, zv.leftCamera && (zv.leftCamera._scene = this.utilityLayerScene), zv.rightCamera && (zv.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), zv._scene = vv, zv.leftCamera && (zv.leftCamera._scene = vv), zv.rightCamera && (zv.rightCamera._scene = vv)
        }
      }
      dispose() {
        this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.uD.remove(this._sceneDisposeObserver), this._originalPointerObserver && this.originalScene.onPrePointerObservable.remove(this._originalPointerObserver), this.utilityLayerScene.dispose()
      }
      _updateCamera() {
        this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
      }
    }
    xv._DefaultUtilityLayer = null, xv._DefaultKeepDepthUtilityLayer = null;
    const tv = {
      FindMainCamera: function(vv) {
        return vv.findMainCamera()
      },
      FindMainObjectRenderer: function(vv) {
        return vv.findMainObjectRenderer()
      },
      CreateUtilityLayerRenderer: function(vv) {
        let zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const Pv = vv.Is,
          hv = new xv(Pv, zv, !0);
        hv.utilityLayerScene.activeCamera = Pv.activeCamera;
        let Sv = tv.FindMainCamera(Pv.frameGraph);
        !Sv && Pv.cameras.length > 0 && (Sv = Pv.cameras[0]), Sv && (hv.setRenderCamera(Sv), hv.utilityLayerScene.activeCamera = Sv);
        const ev = Pv.onAfterRenderObservable.add((() => {
          hv.render()
        }));
        return hv.utilityLayerScene.uD.addOnce((() => {
          Pv.onAfterRenderObservable.remove(ev)
        })), hv
      }
    };
    let qv = null;

    function Iv(vv, zv, Pv, hv) {
      let Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        ev = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        gv = arguments.length > 6 ? arguments[6] : void 0,
        pv = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        dv = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
      const {
        height: Nv,
        width: lv
      } = Mv(vv, zv, Pv);
      if (!Nv || !lv) return void Wv.d.Error("Invalid 'size' parameter !");
      const Tv = zv.rD();
      let av = Tv.activeCamera !== zv;
      if (Tv.frameGraph) {
        const vv = tv.FindMainObjectRenderer(Tv.frameGraph);
        vv && (av = vv.camera !== zv)
      }
      av ? Av(vv, zv, Pv, (vv => {
        if (ev) {
          const zv = new Blob([vv]);
          wv.h.DownloadBlob(zv), hv && hv("")
        } else hv && hv(vv)
      }), Sv, 1, vv.getCreationOptions().antialias, void 0, void 0, void 0, void 0, gv) : vv.onEndFrameObservable.addOnce((() => {
        qv || (qv = document.createElement("canvas")), qv.width = lv, qv.height = Nv;
        const zv = qv.getContext("2d"),
          Pv = vv.getRenderingCanvas();
        if (!zv || !Pv) return void Wv.d.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
        const av = Pv.width,
          sv = Pv.height,
          Cv = qv.width,
          iv = qv.height,
          cv = Cv / av,
          Gv = iv / sv,
          mv = pv ? Math.max(cv, Gv) : Math.min(cv, Gv),
          jv = av * mv,
          fv = sv * mv,
          Fv = (Cv - jv) / 2,
          Yv = (iv - fv) / 2;
        zv.save(), zv.fillStyle = dv ? Tv.clearColor.toHexString() : "rgba(0, 0, 0, 0)", zv.fillRect(0, 0, lv, Nv), zv.restore(), zv.drawImage(Pv, 0, 0, av, sv, Fv, Yv, jv, fv), ev ? (wv.h.EncodeScreenshotCanvasData(qv, void 0, Sv, void 0, gv), hv && hv("")) : wv.h.EncodeScreenshotCanvasData(qv, hv, Sv, void 0, gv)
      }))
    }
    async function Qv(vv, zv, Pv) {
      let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Sv = arguments.length > 4 ? arguments[4] : void 0,
        ev = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        gv = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        pv = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      return await new Promise(((dv, Nv) => {
        Iv(vv, zv, Pv, (vv => {
          "undefined" !== typeof vv ? dv(vv) : Nv(new Error("Data is undefined"))
        }), hv, pv, Sv, ev, gv)
      }))
    }
    async function Zv(vv, zv, Pv, hv) {
      let Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        ev = arguments.length > 5 ? arguments[5] : void 0,
        gv = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return await new Promise((pv => {
        Iv(vv, zv, {
          width: Pv,
          height: hv
        }, (() => {
          pv()
        }), Sv, !0, ev, gv)
      }))
    }

    function Av(vv, zv, ev, gv) {
      let pv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        dv = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
        Nv = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        lv = arguments.length > 7 ? arguments[7] : void 0,
        wv = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        iv = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        cv = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
        Gv = arguments.length > 11 ? arguments[11] : void 0,
        mv = arguments.length > 12 ? arguments[12] : void 0,
        jv = arguments.length > 13 ? arguments[13] : void 0,
        fv = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
        Fv = arguments.length > 15 ? arguments[15] : void 0;
      const Yv = zv.rD();
      if (Yv.frameGraph) return void Hv(Yv.frameGraph, zv, ev, pv, dv, Nv, lv, Gv, jv, !gv).then((vv => {
        gv && gv(vv)
      }));
      const {
        height: nv,
        width: Ov,
        finalWidth: Dv,
        finalHeight: Kv
      } = Mv(vv, zv, ev), Vv = {
        width: Ov,
        height: nv
      };
      if (!nv || !Ov) return void Wv.d.Error("Invalid 'size' parameter !");
      vv.skipFrameRender = !0;
      const Uv = vv.getRenderWidth,
        Rv = vv.getRenderHeight;
      vv.getRenderWidth = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && vv._currentRenderTarget ? vv._currentRenderTarget.width : Ov
      }, vv.getRenderHeight = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && vv._currentRenderTarget ? vv._currentRenderTarget.height : nv
      }, vv.onResizeObservable.hasObservers() && vv.onResizeObservable.notifyObservers(vv);
      const xv = new Sv.e("screenShot", Vv, Yv, !1, !1, 0, !1, hv.e.BILINEAR_SAMPLINGMODE, void 0, iv, void 0, void 0, void 0, dv);
      xv.renderList = Yv.meshes.slice(), xv.samples = dv, xv.renderSprites = wv, xv.activeCamera = zv, xv.forceLayerMaskCheck = cv, mv?.(xv);
      const tv = jv || av.DumpData,
        qv = () => {
          Yv.incrementRenderId(), Yv.resetCachedMaterial(), (0, Cv.g)((() => xv.isReadyForRendering() && zv.isReady(!0)), (() => {
            vv.onEndFrameObservable.addOnce((() => {
              Dv === Ov && Kv === nv ? xv.readPixels(void 0, void 0, void 0, !1).then((vv => {
                tv(Ov, nv, vv, gv, pv, lv, !0, void 0, Gv), xv.dispose()
              })) : (vv.isWebGPU ? Pv.e(364).then((() => Pv(60863))) : Pv.e(365).then((() => Pv(60869)))).then((async () => await (0, sv.b)("pass", xv.getInternalTexture(), Yv, void 0, void 0, void 0, Dv, Kv).then((zv => {
                vv._readTexturePixels(zv, Dv, Kv, -1, 0, null, !0, !1, 0, 0).then((vv => {
                  tv(Dv, Kv, vv, gv, pv, lv, !0, void 0, Gv), zv.dispose()
                }))
              }))))
            })), Yv.incrementRenderId(), Yv.resetCachedMaterial();
            const hv = Yv.activeCamera,
              Sv = Yv.activeCameras,
              ev = zv.outputRenderTarget,
              dv = Yv.spritesEnabled;
            Yv.activeCamera = zv, Yv.activeCameras = null, zv.outputRenderTarget = xv, Yv.spritesEnabled = wv;
            const Nv = Yv.meshes;
            Yv.meshes = xv.renderList || Yv.meshes;
            try {
              Yv.render()
            } finally {
              Yv.activeCamera = hv, Yv.activeCameras = Sv, zv.outputRenderTarget = ev, Yv.spritesEnabled = dv, Yv.meshes = Nv, vv.getRenderWidth = Uv, vv.getRenderHeight = Rv, vv.onResizeObservable.hasObservers() && vv.onResizeObservable.notifyObservers(vv), zv.getProjectionMatrix(!0), vv.skipFrameRender = !1
            }
          }), (() => {
            vv.skipFrameRender = !1, vv.getRenderWidth = Uv, vv.getRenderHeight = Rv, Fv?.()
          }), void 0, fv)
        };
      if (Nv) {
        const vv = new Tv("antialiasing", 1, Yv.activeCamera);
        xv.addPostProcess(vv), vv.autoClear = !0, vv.onEffectCreatedObservable.addOnce((vv => {
          vv.isReady() ? qv() : vv.onCompiled = () => {
            qv()
          }
        }))
      } else qv()
    }
    async function Lv(vv, zv, Pv) {
      let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        ev = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        gv = arguments.length > 6 ? arguments[6] : void 0,
        pv = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        dv = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Nv = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
        lv = arguments.length > 10 ? arguments[10] : void 0,
        Tv = arguments.length > 11 ? arguments[11] : void 0,
        Wv = arguments.length > 12 ? arguments[12] : void 0;
      return await new Promise(((wv, av) => {
        Av(vv, zv, Pv, (vv => {
          "undefined" !== typeof vv ? wv(vv) : av(new Error("Data is undefined"))
        }), hv, Sv, ev, gv, pv, dv, Nv, lv, Tv, Wv)
      }))
    }
    async function Hv(vv, zv, Pv) {
      let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        ev = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        gv = arguments.length > 6 ? arguments[6] : void 0,
        pv = arguments.length > 7 ? arguments[7] : void 0,
        dv = arguments.length > 8 ? arguments[8] : void 0,
        Nv = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        lv = arguments.length > 10 ? arguments[10] : void 0;
      const Tv = vv.engine,
        Wv = vv.textureManager,
        {
          height: wv,
          width: sv,
          finalWidth: Cv,
          finalHeight: cv
        } = Mv(Tv, zv, Pv),
        Gv = {
          width: sv,
          height: wv
        },
        mv = dv || av.DumpData,
        jv = vv.tasks,
        fv = jv.length,
        Fv = vv.pausedExecution,
        nv = Tv.getCaps().parallelShaderCompile;
      Wv.setBackBufferTextures(0, 0, {
        size: Gv,
        options: {
          createMipMaps: !1,
          samples: Sv,
          types: [0],
          formats: [5],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot color"]
        },
        sizeIsPercentage: !1
      }, {
        size: Gv,
        options: {
          createMipMaps: !1,
          samples: Sv,
          types: [0],
          formats: [Tv.isStencilEnable ? 13 : 14],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot depth"]
        },
        sizeIsPercentage: !1
      });
      let Dv = iv;
      if (ev) {
        const zv = new Yv("fxaa", vv);
        zv.sourceTexture = Dv, Dv = zv.outputTexture, vv.addTask(zv)
      }
      if (Cv !== sv || cv !== wv) {
        const zv = new Ov("pass", vv);
        zv.sourceTexture = Dv, zv.targetTexture = vv.textureManager.createRenderTargetTexture("pass_output", {
          size: {
            width: Cv,
            height: cv
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
        }), Dv = zv.outputTexture, vv.addTask(zv)
      }
      const Kv = tv.FindMainObjectRenderer(vv);
      let Vv = null;
      Kv && (Vv = Kv.camera, Kv.camera = zv), Tv.getCaps().parallelShaderCompile = void 0, await vv.buildAsync();
      const Uv = lv ?? (Wv.hasHistoryTextures ? 32 : 1);
      for (let av = 0; av < Uv; ++av) vv.execute();
      vv.pausedExecution = !0, Tv.getCaps().parallelShaderCompile = nv;
      for (let av = fv; av < jv.length; ++av) vv.tasks[av].dispose();
      vv.tasks.length = fv, Kv && Vv && (Kv.camera = Vv);
      const Rv = vv.textureManager.getTextureFromHandle(Dv);
      return Rv.incrementReferences(), Wv.resetBackBufferTextures(), await vv.buildAsync(), vv.pausedExecution = Fv, new Promise((vv => {
        Tv._readTexturePixels(Rv, Cv, cv, -1, 0, null, !0, !1, 0, 0).then((async zv => {
          Rv.dispose(), mv(Cv, cv, zv, Nv ? void 0 : zv => vv(zv), hv, gv, !0, void 0, pv), Nv && vv(null)
        }))
      }))
    }

    function Mv(vv, zv, Pv) {
      let hv = 0,
        Sv = 0,
        ev = 0,
        gv = 0;
      if ("object" === typeof Pv) {
        const pv = Pv.precision ? Math.abs(Pv.precision) : 1;
        Pv.width && Pv.height ? (hv = Pv.height * pv, Sv = Pv.width * pv) : Pv.width && !Pv.height ? (Sv = Pv.width * pv, hv = Math.round(Sv / vv.getAspectRatio(zv))) : Pv.height && !Pv.width ? (hv = Pv.height * pv, Sv = Math.round(hv * vv.getAspectRatio(zv))) : (Sv = Math.round(vv.getRenderWidth() * pv), hv = Math.round(Sv / vv.getAspectRatio(zv))), Pv.finalWidth && Pv.finalHeight ? (gv = Pv.finalHeight, ev = Pv.finalWidth) : Pv.finalWidth && !Pv.finalHeight ? (ev = Pv.finalWidth, gv = Math.round(ev / vv.getAspectRatio(zv))) : Pv.finalHeight && !Pv.finalWidth ? (gv = Pv.finalHeight, ev = Math.round(gv * vv.getAspectRatio(zv))) : (ev = Sv, gv = hv)
      } else isNaN(Pv) || (hv = Pv, Sv = Pv, ev = Pv, gv = Pv);
      return Sv && (Sv = Math.floor(Sv)), hv && (hv = Math.floor(hv)), ev && (ev = Math.floor(ev)), gv && (gv = Math.floor(gv)), {
        height: 0 | hv,
        width: 0 | Sv,
        finalWidth: 0 | ev,
        finalHeight: 0 | gv
      }
    }
    const yv = {
      CreateScreenshot: Iv,
      CreateScreenshotAsync: Qv,
      CreateScreenshotWithResizeAsync: Zv,
      CreateScreenshotUsingRenderTarget: Av,
      CreateScreenshotUsingRenderTargetAsync: Lv,
      CreateScreenshotForFrameGraphAsync: Hv
    };
    let Bv = !1;

    function Jv() {
      if (Bv) return;
      Bv = !0;
      wv.h.CreateScreenshot = Iv, wv.h.CreateScreenshotAsync = Qv, wv.h.CreateScreenshotUsingRenderTarget = Av, wv.h.CreateScreenshotUsingRenderTargetAsync = Lv
    }
    Jv()
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);