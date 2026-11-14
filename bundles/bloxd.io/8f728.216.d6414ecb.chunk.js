export const id = 216;
export const ids = [216, 217];
export const modules = {
  38286: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => qB,
      f: () => Tc
    });
    var Vc = nc(38035),
      Ic = nc(38043),
      rB = nc(35756),
      uc = nc(35815),
      sc = nc(38291),
      Mc = nc(38255),
      Pc = nc(35799);
    let qB = (() => {
        var cB;
        let Bc, nc, Mc = sc.b,
          Pc = [],
          qB = [],
          Oc = [],
          Tc = [];
        return cB = class extends Mc {
          constructor(cB, Bc, nc, Ic) {
            super(cB, nc, Ic), this.groundColor = (0, Vc.k)(this, Pc, new uc.e(0, 0, 0)), this.direction = ((0, Vc.k)(this, qB), (0, Vc.k)(this, Oc, void 0)), (0, Vc.k)(this, Tc), this.direction = Bc || rB.p.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(cB) {
            return this.direction = rB.p.Normalize(cB.subtract(rB.p.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(cB, Bc) {
            const nc = rB.p.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", nc.x, nc.y, nc.z, 0, Bc), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), Bc), this
          }
          transferToNodeMaterialEffect(cB, Bc) {
            const nc = rB.p.Normalize(this.direction);
            return cB.setFloat3(Bc, nc.x, nc.y, nc.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = rB.d.Identity()), this._worldMatrix
          }
          getTypeID() {
            return sc.b.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(cB, Bc) {
            cB["HEMILIGHT" + Bc] = !0
          }
        }, (() => {
          const rB = "function" === typeof Symbol && Symbol.metadata ? Object.create(Mc[Symbol.metadata] ?? null) : void 0;
          Bc = [(0, Ic.o)()], nc = [(0, Ic.L)()], (0, Vc.g)(null, null, Bc, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: cB => "groundColor" in cB,
              get: cB => cB.groundColor,
              set: (cB, Bc) => {
                cB.groundColor = Bc
              }
            },
            metadata: rB
          }, Pc, qB), (0, Vc.g)(null, null, nc, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: cB => "direction" in cB,
              get: cB => cB.direction,
              set: (cB, Bc) => {
                cB.direction = Bc
              }
            },
            metadata: rB
          }, Oc, Tc), rB && Object.defineProperty(cB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: rB
          })
        })(), cB
      })(),
      Oc = !1;

    function Tc() {
      Oc || (Oc = !0, Mc.c.AddNodeConstructor("Light_Type_3", ((cB, Bc) => () => new qB(cB, rB.p.Zero(), Bc))), (0, Pc.d)("BABYLON.HemisphericLight", qB))
    }
  },
  36327: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Ic
    });
    var Vc = nc(36329);
    class Ic {
      static GetPlanes(cB) {
        const Bc = [];
        for (let nc = 0; nc < 6; nc++) Bc.push(new Vc.d(0, 0, 0, 0));
        return Ic.GetPlanesToRef(cB, Bc), Bc
      }
      static GetNearPlaneToRef(cB, Bc) {
        const nc = cB.m;
        Bc.normal.x = nc[3] + nc[2], Bc.normal.y = nc[7] + nc[6], Bc.normal.z = nc[11] + nc[10], Bc.d = nc[15] + nc[14], Bc.normalize()
      }
      static GetFarPlaneToRef(cB, Bc) {
        const nc = cB.m;
        Bc.normal.x = nc[3] - nc[2], Bc.normal.y = nc[7] - nc[6], Bc.normal.z = nc[11] - nc[10], Bc.d = nc[15] - nc[14], Bc.normalize()
      }
      static GetLeftPlaneToRef(cB, Bc) {
        const nc = cB.m;
        Bc.normal.x = nc[3] + nc[0], Bc.normal.y = nc[7] + nc[4], Bc.normal.z = nc[11] + nc[8], Bc.d = nc[15] + nc[12], Bc.normalize()
      }
      static GetRightPlaneToRef(cB, Bc) {
        const nc = cB.m;
        Bc.normal.x = nc[3] - nc[0], Bc.normal.y = nc[7] - nc[4], Bc.normal.z = nc[11] - nc[8], Bc.d = nc[15] - nc[12], Bc.normalize()
      }
      static GetTopPlaneToRef(cB, Bc) {
        const nc = cB.m;
        Bc.normal.x = nc[3] - nc[1], Bc.normal.y = nc[7] - nc[5], Bc.normal.z = nc[11] - nc[9], Bc.d = nc[15] - nc[13], Bc.normalize()
      }
      static GetBottomPlaneToRef(cB, Bc) {
        const nc = cB.m;
        Bc.normal.x = nc[3] + nc[1], Bc.normal.y = nc[7] + nc[5], Bc.normal.z = nc[11] + nc[9], Bc.d = nc[15] + nc[13], Bc.normalize()
      }
      static GetPlanesToRef(cB, Bc) {
        Ic.GetNearPlaneToRef(cB, Bc[0]), Ic.GetFarPlaneToRef(cB, Bc[1]), Ic.GetLeftPlaneToRef(cB, Bc[2]), Ic.GetRightPlaneToRef(cB, Bc[3]), Ic.GetTopPlaneToRef(cB, Bc[4]), Ic.GetBottomPlaneToRef(cB, Bc[5])
      }
      static IsPointInFrustum(cB, Bc) {
        for (let nc = 0; nc < 6; nc++)
          if (Bc[nc].dotCoordinate(cB) < 0) return !1;
        return !0
      }
    }
  },
  36329: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Ic
    });
    var Vc = nc(35756);
    class Ic {
      constructor(cB, Bc, nc, Ic) {
        this.normal = new Vc.p(cB, Bc, nc), this.d = Ic
      }
      KPc() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Ic(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let cB = this.normal.getHashCode();
        return cB = 397 * cB ^ this.d, cB
      }
      normalize() {
        const cB = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let Bc = 0;
        return 0 !== cB && (Bc = 1 / cB), this.normal.x *= Bc, this.normal.y *= Bc, this.normal.z *= Bc, this.d *= Bc, this
      }
      transform(cB) {
        const Bc = Ic._TmpMatrix;
        cB.invertToRef(Bc);
        const nc = Bc.m,
          Vc = this.normal.x,
          rB = this.normal.y,
          uc = this.normal.z,
          sc = this.d,
          Mc = Vc * nc[0] + rB * nc[1] + uc * nc[2] + sc * nc[3],
          Pc = Vc * nc[4] + rB * nc[5] + uc * nc[6] + sc * nc[7],
          qB = Vc * nc[8] + rB * nc[9] + uc * nc[10] + sc * nc[11],
          Oc = Vc * nc[12] + rB * nc[13] + uc * nc[14] + sc * nc[15];
        return new Ic(Mc, Pc, qB, Oc)
      }
      dotCoordinate(cB) {
        return this.normal.x * cB.x + this.normal.y * cB.y + this.normal.z * cB.z + this.d
      }
      copyFromPoints(cB, Bc, nc) {
        const Vc = Bc.x - cB.x,
          Ic = Bc.y - cB.y,
          rB = Bc.z - cB.z,
          uc = nc.x - cB.x,
          sc = nc.y - cB.y,
          Mc = nc.z - cB.z,
          Pc = Ic * Mc - rB * sc,
          qB = rB * uc - Vc * Mc,
          Oc = Vc * sc - Ic * uc,
          Tc = Math.sqrt(Pc * Pc + qB * qB + Oc * Oc);
        let fc;
        return fc = 0 !== Tc ? 1 / Tc : 0, this.normal.x = Pc * fc, this.normal.y = qB * fc, this.normal.z = Oc * fc, this.d = -(this.normal.x * cB.x + this.normal.y * cB.y + this.normal.z * cB.z), this
      }
      isFrontFacingTo(cB, Bc) {
        return Vc.p.Dot(this.normal, cB) <= Bc
      }
      signedDistanceTo(cB) {
        return Vc.p.Dot(cB, this.normal) + this.d
      }
      static FromArray(cB) {
        return new Ic(cB[0], cB[1], cB[2], cB[3])
      }
      static FromPoints(cB, Bc, nc) {
        const Vc = new Ic(0, 0, 0, 0);
        return Vc.copyFromPoints(cB, Bc, nc), Vc
      }
      static FromPositionAndNormal(cB, Bc) {
        const nc = new Ic(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(cB, Bc, nc)
      }
      static FromPositionAndNormalToRef(cB, Bc, nc) {
        return nc.normal.qqc(Bc), nc.normal.normalize(), nc.d = -cB.dot(nc.normal), nc
      }
      static SignedDistanceToPlaneFromPositionAndNormal(cB, Bc, nc) {
        const Ic = -(Bc.x * cB.x + Bc.y * cB.y + Bc.z * cB.z);
        return Vc.p.Dot(nc, Bc) + Ic
      }
    }
    Ic._TmpMatrix = Vc.d.Identity()
  },
  36675: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Vc
    });
    class Vc {
      constructor(cB, Bc, nc, Vc) {
        this.x = cB, this.y = Bc, this.width = nc, this.height = Vc
      }
      toGlobal(cB, Bc) {
        return new Vc(this.x * cB, this.y * Bc, this.width * cB, this.height * Bc)
      }
      toGlobalToRef(cB, Bc, nc) {
        return nc.x = this.x * cB, nc.y = this.y * Bc, nc.width = this.width * cB, nc.height = this.height * Bc, this
      }
      clone() {
        return new Vc(this.x, this.y, this.width, this.height)
      }
    }
  },
  37185: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => rB
    });
    var Vc = nc(37191);
    const Ic = (cB, Bc, nc) => cB ? cB.getClassName && "Mesh" === cB.getClassName() ? null : !cB.getClassName || "SubMesh" !== cB.getClassName() && "PhysicsBody" !== cB.getClassName() ? cB.clone ? cB.clone() : Array.isArray(cB) ? cB.slice() : nc && "object" === typeof cB ? {
      ...cB
    } : null : cB.clone(Bc) : null;
    class rB {
      static DeepCopy(cB, Bc, nc, rB) {
        let uc = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const sc = function(cB) {
          const Bc = [];
          do {
            const nc = Object.getOwnPropertyNames(cB);
            for (const cB of nc) - 1 === Bc.indexOf(cB) && Bc.push(cB)
          } while (cB = Object.getPrototypeOf(cB));
          return Bc
        }(cB);
        for (const Pc of sc) {
          if ("_" === Pc[0] && (!rB || -1 === rB.indexOf(Pc))) continue;
          if (Pc.endsWith("Observable")) continue;
          if (nc && -1 !== nc.indexOf(Pc)) continue;
          const sc = cB[Pc],
            qB = typeof sc;
          if ("function" !== qB) try {
            if ("object" === qB)
              if (sc instanceof Uint8Array) Bc[Pc] = Uint8Array.from(sc);
              else if (sc instanceof Array) {
              if (Bc[Pc] = [], sc.length > 0)
                if ("object" == typeof sc[0])
                  for (let cB = 0; cB < sc.length; cB++) {
                    const nc = Ic(sc[cB], Bc, uc); - 1 === Bc[Pc].indexOf(nc) && Bc[Pc].push(nc)
                  } else Bc[Pc] = sc.slice(0)
            } else Bc[Pc] = Ic(sc, Bc, uc);
            else Bc[Pc] = sc
          } catch (Mc) {
            Vc.c.Warn(Mc.message)
          }
        }
      }
    }
  },
  36472: (cB, Bc, nc) => {
    function Vc() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (cB => {
        const Bc = 16 * Math.random() | 0;
        return ("x" === cB ? Bc : 3 & Bc | 8).toString(16)
      }))
    }
    nc.d(Bc, {
      d: () => Vc
    })
  },
  37191: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Vc
    });
    class Vc {
      static _CheckLimit(cB, Bc) {
        let nc = Vc._LogLimitOutputs[cB];
        return nc ? nc.current++ : (nc = {
          limit: Bc,
          current: 1
        }, Vc._LogLimitOutputs[cB] = nc), nc.current <= nc.limit
      }
      static _GenerateLimitMessage(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const nc = Vc._LogLimitOutputs[cB];
        if (!nc || !Vc.MessageLimitReached) return;
        const Ic = this._Levels[Bc];
        nc.current === nc.limit && Vc[Ic.name](Vc.MessageLimitReached.replace(/%LIMIT%/g, "" + nc.limit).replace(/%TYPE%/g, Ic.name ?? ""))
      }
      static _AddLogEntry(cB) {
        Vc._LogCache = cB + Vc._LogCache, Vc.OnNewCacheEntry && Vc.OnNewCacheEntry(cB)
      }
      static _FormatMessage(cB) {
        const Bc = cB => cB < 10 ? "0" + cB : "" + cB,
          nc = new Date;
        return "[" + Bc(nc.getHours()) + ":" + Bc(nc.getMinutes()) + ":" + Bc(nc.getSeconds()) + "]: " + cB
      }
      static _LogDisabled(cB, Bc) {}
      static _LogEnabled() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Bc = arguments.length > 1 ? arguments[1] : void 0,
          nc = arguments.length > 2 ? arguments[2] : void 0;
        const Ic = Array.isArray(Bc) ? Bc[0] : Bc;
        if (void 0 !== nc && !Vc._CheckLimit(Ic, nc)) return;
        const rB = Vc._FormatMessage(Ic),
          uc = this._Levels[cB],
          sc = Array.isArray(Bc) ? Bc.slice(1) : [];
        uc.logFunc && uc.logFunc("BJS - " + rB, ...sc);
        const Mc = `<div style='color:${uc.color}'>${rB}</div><br>`;
        Vc._AddLogEntry(Mc), Vc._GenerateLimitMessage(Ic, cB)
      }
      static get LogCache() {
        return Vc._LogCache
      }
      static ClearLogCache() {
        Vc._LogCache = "", Vc._LogLimitOutputs = {}, Vc.errorsCount = 0
      }
      static set LogLevels(cB) {
        Vc.Log = Vc._LogDisabled, Vc.Warn = Vc._LogDisabled, Vc.Error = Vc._LogDisabled;
        const Bc = [Vc.MessageLogLevel, Vc.WarningLogLevel, Vc.ErrorLogLevel];
        for (const nc of Bc)
          if ((cB & nc) === nc) {
            const cB = this._Levels[nc];
            Vc[cB.name] = Vc._LogEnabled.bind(Vc, nc)
          }
      }
    }
    Vc.NoneLogLevel = 0, Vc.MessageLogLevel = 1, Vc.WarningLogLevel = 2, Vc.ErrorLogLevel = 4, Vc.AllLogLevel = 7, Vc.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Vc._LogCache = "", Vc._LogLimitOutputs = {}, Vc._Levels = [{}, {
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
    }], Vc.errorsCount = 0, Vc.Log = Vc._LogEnabled.bind(Vc, Vc.MessageLogLevel), Vc.Warn = Vc._LogEnabled.bind(Vc, Vc.WarningLogLevel), Vc.Error = Vc._LogEnabled.bind(Vc, Vc.ErrorLogLevel)
  },
  59082: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      CreateScreenshot: () => Ec,
      CreateScreenshotAsync: () => oc,
      CreateScreenshotForFrameGraphAsync: () => Xc,
      CreateScreenshotUsingRenderTarget: () => wc,
      CreateScreenshotUsingRenderTargetAsync: () => kB,
      CreateScreenshotWithResizeAsync: () => Wc,
      RegisterScreenshotTools: () => jB,
      ScreenshotTools: () => Fc
    });
    var Vc = nc(38493),
      Ic = nc(39754),
      rB = nc(39733),
      uc = nc(38068),
      sc = nc(39738),
      Mc = nc(35780),
      Pc = nc(35756);
    class qB extends sc.f {
      static _GetDefines(cB) {
        if (!cB) return null;
        return cB.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
      }
      _gatherImports(cB, Bc) {
        cB ? (this._webGPUReady = !0, Bc.push(Promise.all([nc.e(352).then((() => nc(59411))), nc.e(353).then((() => nc(59414)))]))) : Bc.push(Promise.all([nc.e(354).then((() => nc(59422))), nc.e(355).then((() => nc(59427)))]))
      }
      constructor(cB) {
        const Bc = {
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: cB,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || Mc.d.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          vertexShader: qB.VertexUrl,
          fragmentShader: qB.FragmentUrl,
          uniforms: qB.Uniforms
        };
        super({
          ...Bc,
          defines: qB._GetDefines(Bc.engine)
        }), this.texelSize = new Pc.m(0, 0)
      }
      bind() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.bind(cB), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
      }
    }
    qB.VertexUrl = "fxaa", qB.FragmentUrl = "fxaa", qB.Uniforms = ["texelSize"];
    class Oc extends rB.b {
      getClassName() {
        return "FxaaPostProcess"
      }
      constructor(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Ic = arguments.length > 3 ? arguments[3] : void 0,
          rB = arguments.length > 4 ? arguments[4] : void 0,
          uc = arguments.length > 5 ? arguments[5] : void 0,
          sc = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const Mc = {
          uniforms: qB.Uniforms,
          size: "number" === typeof Bc ? Bc : void 0,
          camera: nc,
          samplingMode: Ic || Vc.e.BILINEAR_SAMPLINGMODE,
          engine: rB,
          reusable: uc,
          textureType: sc,
          ...Bc
        };
        super(cB, qB.FragmentUrl, {
          effectWrapper: "number" !== typeof Bc && Bc.effectWrapper ? void 0 : new qB(cB, rB, Mc),
          ...Mc
        }), this.onApplyObservable.add((cB => {
          this._effectWrapper.texelSize = this.texelSize
        }))
      }
      static _Parse(cB, Bc, nc, Vc) {
        return uc.e.Parse((() => new Oc(cB.name, cB.options, Bc, cB.renderTargetSamplingMode, nc.RV(), cB.reusable)), cB, nc, Vc)
      }
    }
    var Tc = nc(37191),
      fc = nc(38146),
      mB = nc(39770),
      ec = nc(39745),
      tB = nc(37963);
    const Sc = 0;
    class yB {
      constructor(cB, Bc, nc) {
        this.name = cB, this._parentTask = Bc, this._context = nc, this.disabled = !1
      }
      setInitializeFunc(cB) {
        this._initFunc = cB
      }
      setExecuteFunc(cB) {
        this._executeFunc = cB
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
    class zB extends yB {
      static IsObjectListPass(cB) {
        return void 0 !== cB.setObjectList
      }
      get objectList() {
        return this._objectList
      }
      setObjectList(cB) {
        this._objectList = cB
      }
      constructor(cB, Bc, nc, Vc) {
        super(cB, Bc, nc), this._engine = Vc
      }
      _isValid() {
        const cB = super._isValid();
        return cB || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
      }
    }
    class pc extends yB {
      static IsRenderPass(cB) {
        return void 0 !== cB.setRenderTarget
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
      constructor(cB, Bc, nc, Vc) {
        super(cB, Bc, nc), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = Vc
      }
      setRenderTarget(cB) {
        this._renderTarget = cB
      }
      setRenderTargetDepth(cB) {
        this._renderTargetDepth = cB
      }
      addDependencies(cB) {
        if (void 0 !== cB)
          if (Array.isArray(cB))
            for (const Bc of cB) this._dependencies.add(Bc);
          else this._dependencies.add(cB)
      }
      collectDependencies(cB) {
        const Bc = this._dependencies.keys();
        for (let nc = Bc.next(); !0 !== nc.done; nc = Bc.next()) cB.add(nc.value);
        if (void 0 !== this._renderTarget)
          if (Array.isArray(this._renderTarget))
            for (const nc of this._renderTarget) void 0 !== nc && cB.add(nc);
          else cB.add(this._renderTarget);
        void 0 !== this._renderTargetDepth && cB.add(this._renderTargetDepth)
      }
      setOutputLayerAndFaceIndices(cB) {
        const Bc = this.frameGraphRenderTarget.renderTargetWrapper;
        if (Bc)
          for (const nc of cB) Bc.setLayerAndFaceIndex(nc.targetIndex, nc.layerIndex, nc.faceIndex)
      }
      _initialize() {
        this._frameGraphRenderTarget = this._context.createRenderTarget(this.name, this._renderTarget, this._renderTargetDepth, this.depthReadOnly, this.stencilReadOnly), super._initialize()
      }
      _execute() {
        this._context.bindRenderTarget(this._frameGraphRenderTarget), super._execute(), this._context.restoreDefaultFramebuffer()
      }
      _isValid() {
        const cB = super._isValid();
        return cB || (void 0 !== this._renderTarget || void 0 !== this.renderTargetDepth ? null : "Render target and render target depth cannot both be undefined.")
      }
      _dispose() {
        this._frameGraphRenderTarget?.dispose()
      }
    }
    var hc = nc(35783);
    class aB {
      get name() {
        return this._name
      }
      set name(cB) {
        this._name = cB
      }
      get disabled() {
        return this._disabled
      }
      set disabled(cB) {
        this._disabled = cB
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
      constructor(cB, Bc) {
        this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new hc.c, this.onBeforeTaskExecute = new hc.c, this.onAfterTaskExecute = new hc.c, this.name = cB, this._frameGraph = Bc, this._reset()
      }
      _reset() {
        for (const cB of this._passes) cB._dispose();
        for (const cB of this._passesDisabled) cB._dispose();
        this._passes.length = 0, this._passesDisabled.length = 0
      }
      _addPass(cB, Bc) {
        Bc ? this._passesDisabled.push(cB) : this._passes.push(cB)
      }
      _checkTask() {
        let cB, Bc = null,
          nc = null;
        for (const sc of this._passes) {
          const Vc = sc._isValid();
          if (Vc) throw new Error(`Pass "${sc.name}" is not valid. ${Vc}`);
          if (pc.IsRenderPass(sc)) {
            const cB = Array.isArray(sc.renderTarget) ? sc.renderTarget : [sc.renderTarget];
            Bc = [];
            for (const nc of cB) void 0 !== nc && Bc.push(this._frameGraph.textureManager.getTextureFromHandle(nc));
            nc = void 0 !== sc.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(sc.renderTargetDepth) : null
          } else zB.IsObjectListPass(sc) && (cB = sc.objectList)
        }
        let Vc, Ic = null,
          rB = [],
          uc = null;
        for (const sc of this._passesDisabled) {
          const cB = sc._isValid();
          if (cB) throw new Error(`Pass "${sc.name}" is not valid. ${cB}`);
          if (pc.IsRenderPass(sc)) {
            const cB = Array.isArray(sc.renderTarget) ? sc.renderTarget : [sc.renderTarget];
            Ic = [];
            for (const Bc of cB) void 0 !== Bc && Ic.push(this._frameGraph.textureManager.getTextureFromHandle(Bc));
            rB = cB, uc = void 0 !== sc.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(sc.renderTargetDepth) : null
          } else zB.IsObjectListPass(sc) && (Vc = sc.objectList)
        }
        if (this._passesDisabled.length > 0) {
          if (!this._checkSameRenderTarget(Bc, Ic)) {
            let cB = !0;
            for (const Bc of rB)
              if (void 0 !== Bc && !this._frameGraph.textureManager.isHistoryTexture(Bc)) {
                cB = !1;
                break
              } if (!cB) throw new Error(`The output texture of the task "${this.name}" is different when it is enabled or disabled.`)
          }
          if (nc !== uc && null !== uc) throw new Error(`The output depth texture of the task "${this.name}" is different when it is enabled or disabled.`);
          if (cB !== Vc && null !== Vc) throw new Error(`The output object list of the task "${this.name}" is different when it is enabled or disabled.`)
        }
      }
      _execute() {
        const cB = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
        this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const Bc of cB) Bc._execute()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
        this.onAfterTaskExecute.notifyObservers(this)
      }
      _initializePasses() {
        this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const cB of this._passes) cB._initialize();
          for (const cB of this._passesDisabled) cB._initialize()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
      }
      _checkSameRenderTarget(cB, Bc) {
        if (null === cB || null === Bc) return cB === Bc;
        if (cB.length !== Bc.length) return !1;
        for (let nc = 0; nc < cB.length; nc++)
          if (cB[nc] !== Bc[nc]) return !1;
        return !0
      }
    }
    class lc extends aB {
      get alphaMode() {
        return this.postProcess.alphaMode
      }
      set alphaMode(cB) {
        this.postProcess.alphaMode = cB
      }
      get drawWrapper() {
        return this._postProcessDrawWrapper
      }
      constructor(cB, Bc, nc) {
        super(cB, Bc), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = nc, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture = this._frameGraph.textureManager.createDanglingHandle(), this.outputDepthAttachmentTexture = this._frameGraph.textureManager.createDanglingHandle()
      }
      isReady() {
        return this.postProcess.isReady()
      }
      getClassName() {
        return "FrameGraphPostProcessTask"
      }
      record() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Bc = arguments.length > 1 ? arguments[1] : void 0,
          nc = arguments.length > 2 ? arguments[2] : void 0;
        if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
        const Vc = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
        if (Vc && (Vc.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, Vc), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentTexture, this.depthAttachmentTexture), Vc) {
          const cB = this._frameGraph.textureManager.getTextureAbsoluteDimensions(Vc);
          this._sourceWidth = cB.width, this._sourceHeight = cB.height
        }
        const Ic = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
        this._outputWidth = Ic.size.width, this._outputHeight = Ic.size.height;
        const rB = this._frameGraph.addRenderPass(this.name);
        if (rB.depthReadOnly = this.depthReadOnly, rB.stencilReadOnly = this.stencilReadOnly, rB.addDependencies(this.sourceTexture), rB.setRenderTarget(this.outputTexture), rB.setRenderTargetDepth(this.depthAttachmentTexture), rB.setExecuteFunc((cB => {
            cB.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && cB.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), Bc?.(cB), this.viewport && cB.setViewport(this.viewport), cB.applyFullScreenEffect(this._postProcessDrawWrapper, (() => {
              void 0 !== this.sourceTexture && cB.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), nc?.(cB), this.postProcess.bind()
            }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), cB.restoreDefaultFramebuffer(), cB.popDebugGroup()
          })), !cB) {
          const cB = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
          cB.depthReadOnly = this.depthReadOnly, cB.stencilReadOnly = this.stencilReadOnly, cB.addDependencies(this.sourceTexture), cB.setRenderTarget(this.outputTexture), cB.setRenderTargetDepth(this.depthAttachmentTexture), cB.setExecuteFunc((cB => {
            void 0 !== this.sourceTexture && 0 === this.alphaMode && (this.viewport && cB.setViewport(this.viewport), cB.copyTexture(this.sourceTexture, void 0, void 0 !== this.viewport))
          }))
        }
        return rB
      }
      dispose() {
        this.postProcess.dispose(), super.dispose()
      }
    }
    class Yc extends lc {
      constructor(cB, Bc, nc) {
        super(cB, Bc, nc || new qB(cB, Bc.engine))
      }
      getClassName() {
        return "FrameGraphFXAATask"
      }
      record() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Bc = arguments.length > 1 ? arguments[1] : void 0,
          nc = arguments.length > 2 ? arguments[2] : void 0;
        const Vc = super.record(cB, Bc, nc);
        return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, Vc
      }
    }
    var Lc = nc(39761);
    class gB extends lc {
      constructor(cB, Bc, nc) {
        super(cB, Bc, nc || new Lc.f(cB, Bc.engine))
      }
      getClassName() {
        return "FrameGraphPassTask"
      }
    }
    var Uc = nc(38141),
      bB = nc(38218),
      Zc = nc(38187),
      Qc = nc(38286),
      Cc = nc(35815);
    class vB {
      getRenderCamera(cB) {
        if (this._renderCamera) return this._renderCamera;
        {
          let Bc;
          return Bc = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, cB && Bc && Bc.isRigCamera ? Bc.rigParent : Bc
        }
      }
      setRenderCamera(cB) {
        this._renderCamera = cB
      }
      _getSharedGizmoLight() {
        return this._sharedGizmoLight || (this._sharedGizmoLight = new Qc.d("shared gizmo light", new Pc.p(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = Cc.e.Gray()), this._sharedGizmoLight
      }
      static get DefaultUtilityLayer() {
        return null == vB._DefaultUtilityLayer ? vB._CreateDefaultUtilityLayerFromScene(Mc.d.LastCreatedScene) : vB._DefaultUtilityLayer
      }
      static _CreateDefaultUtilityLayerFromScene(cB) {
        return vB._DefaultUtilityLayer = new vB(cB), vB._DefaultUtilityLayer.originalScene.XBc.addOnce((() => {
          vB._DefaultUtilityLayer = null
        })), vB._DefaultUtilityLayer
      }
      static get DefaultKeepDepthUtilityLayer() {
        return null == vB._DefaultKeepDepthUtilityLayer ? vB._CreateDefaultKeepUtilityLayerFromScene(Mc.d.LastCreatedScene) : vB._DefaultKeepDepthUtilityLayer
      }
      static _CreateDefaultKeepUtilityLayerFromScene(cB) {
        return vB._DefaultKeepDepthUtilityLayer = new vB(cB), vB._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, vB._DefaultKeepDepthUtilityLayer.originalScene.XBc.addOnce((() => {
          vB._DefaultKeepDepthUtilityLayer = null
        })), vB._DefaultKeepDepthUtilityLayer
      }
      constructor(cB) {
        let Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.originalScene = cB, this.handleEvents = Bc, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.processAllEvents = !1, this.pickingEnabled = !0, this.onPointerOutObservable = new hc.c, this.utilityLayerScene = new Uc.h(cB.RV(), {
          virtual: !0,
          useFloatingOrigin: cB.floatingOriginMode
        }), this.utilityLayerScene.useRightHandedSystem = cB.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), Bc && (this._originalPointerObserver = cB.onPrePointerObservable.add((Bc => {
          if (!this.utilityLayerScene.activeCamera) return;
          if (!this.pickingEnabled) return;
          if (!this.processAllEvents && Bc.type !== bB.d.POINTERMOVE && Bc.type !== bB.d.POINTERUP && Bc.type !== bB.d.POINTERDOWN && Bc.type !== bB.d.POINTERDOUBLETAP) return;
          this.utilityLayerScene.pointerX = cB.pointerX, this.utilityLayerScene.pointerY = cB.pointerY;
          const nc = Bc.event;
          if (cB.isPointerCaptured(nc.pointerId)) return void(this._pointerCaptures[nc.pointerId] = !1);
          const Vc = nc => {
              let Vc;
              if (Bc.nearInteractionPickingInfo) Vc = Bc.nearInteractionPickingInfo.pickedMesh.knc() == nc ? Bc.nearInteractionPickingInfo : new Zc.c;
              else if (nc !== this.utilityLayerScene && Bc.originalPickingInfo) Vc = Bc.originalPickingInfo;
              else {
                let Ic = null;
                this._renderCamera && (Ic = nc._activeCamera, nc._activeCamera = this._renderCamera, Bc.ray = null), Vc = Bc.ray ? nc.pickWithRay(Bc.ray) : nc.Vn(cB.pointerX, cB.pointerY), Ic && (nc._activeCamera = Ic)
              }
              return Vc
            },
            Ic = Vc(this.utilityLayerScene);
          if (!Bc.ray && Ic && (Bc.ray = Ic.ray), Bc.originalPickingInfo?.aimTransform && Ic && (Ic.aimTransform = Bc.originalPickingInfo.aimTransform, Ic.gripTransform = Bc.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(Bc), this.onlyCheckPointerDownEvents && Bc.type != bB.d.POINTERDOWN) return Bc.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new bB.i(Bc.type, Bc.event, Ic), Bc.type), void(Bc.type === bB.d.POINTERUP && this._pointerCaptures[nc.pointerId] && (this._pointerCaptures[nc.pointerId] = !1));
          if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) Ic && Ic.hit && (Bc.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new bB.i(Bc.type, Bc.event, Ic), Bc.type), Bc.skipOnPointerObservable = !0);
          else {
            const nc = Vc(cB),
              rB = Bc.event;
            nc && Ic && (0 === Ic.distance && nc.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(nc.pickedMesh) ? (this._notifyObservers(Bc, nc, rB), Bc.skipOnPointerObservable = !0) : Bc.type === bB.d.POINTERDOWN ? (this._pointerCaptures[rB.pointerId] = !0, this._notifyObservers(Bc, nc, rB)) : Bc.type !== bB.d.POINTERMOVE && Bc.type !== bB.d.POINTERUP || (this._lastPointerEvents[rB.pointerId] && (this.onPointerOutObservable.notifyObservers(rB.pointerId), delete this._lastPointerEvents[rB.pointerId]), this._notifyObservers(Bc, nc, rB)) : !this._pointerCaptures[rB.pointerId] && (Ic.distance < nc.distance || 0 === nc.distance) ? (this._notifyObservers(Bc, Ic, rB), Bc.skipOnPointerObservable || (Bc.skipOnPointerObservable = Ic.distance > 0)) : !this._pointerCaptures[rB.pointerId] && Ic.distance >= nc.distance && (this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(nc.pickedMesh) ? (this._notifyObservers(Bc, nc, rB), Bc.skipOnPointerObservable = !0) : (Bc.type !== bB.d.POINTERMOVE && Bc.type !== bB.d.POINTERUP || this._lastPointerEvents[rB.pointerId] && (this.onPointerOutObservable.notifyObservers(rB.pointerId), delete this._lastPointerEvents[rB.pointerId]), this._notifyObservers(Bc, Ic, rB))), Bc.type === bB.d.POINTERUP && this._pointerCaptures[rB.pointerId] && (this._pointerCaptures[rB.pointerId] = !1))
          }
        })), this._originalPointerObserver && cB.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, nc || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((cB => {
          this.shouldRender && cB == this.getRenderCamera() && this.render()
        }))), this._sceneDisposeObserver = this.originalScene.XBc.add((() => {
          this.dispose()
        })), this._updateCamera()
      }
      _notifyObservers(cB, Bc, nc) {
        cB.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new bB.i(cB.type, cB.event, Bc), cB.type), this._lastPointerEvents[nc.pointerId] = !0)
      }
      render() {
        if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
          const cB = this.utilityLayerScene.activeCamera.knc(),
            Bc = this.utilityLayerScene.activeCamera;
          Bc._scene = this.utilityLayerScene, Bc.leftCamera && (Bc.leftCamera._scene = this.utilityLayerScene), Bc.rightCamera && (Bc.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), Bc._scene = cB, Bc.leftCamera && (Bc.leftCamera._scene = cB), Bc.rightCamera && (Bc.rightCamera._scene = cB)
        }
      }
      dispose() {
        this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.XBc.remove(this._sceneDisposeObserver), this._originalPointerObserver && this.originalScene.onPrePointerObservable.remove(this._originalPointerObserver), this.utilityLayerScene.dispose()
      }
      _updateCamera() {
        this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
      }
    }
    vB._DefaultUtilityLayer = null, vB._DefaultKeepDepthUtilityLayer = null;
    const Dc = {
      FindMainCamera: function(cB) {
        return cB.findMainCamera()
      },
      FindMainObjectRenderer: function(cB) {
        return cB.findMainObjectRenderer()
      },
      CreateUtilityLayerRenderer: function(cB) {
        let Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const nc = cB.Ir,
          Vc = new vB(nc, Bc, !0);
        Vc.utilityLayerScene.activeCamera = nc.activeCamera;
        let Ic = Dc.FindMainCamera(nc.frameGraph);
        !Ic && nc.cameras.length > 0 && (Ic = nc.cameras[0]), Ic && (Vc.setRenderCamera(Ic), Vc.utilityLayerScene.activeCamera = Ic);
        const rB = nc.onAfterRenderObservable.add((() => {
          Vc.render()
        }));
        return Vc.utilityLayerScene.XBc.addOnce((() => {
          nc.onAfterRenderObservable.remove(rB)
        })), Vc
      }
    };
    let Nc = null;

    function Ec(cB, Bc, nc, Vc) {
      let Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        rB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        uc = arguments.length > 6 ? arguments[6] : void 0,
        sc = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Mc = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
      const {
        height: Pc,
        width: qB
      } = Hc(cB, Bc, nc);
      if (!Pc || !qB) return void Tc.c.Error("Invalid 'size' parameter !");
      const Oc = Bc.knc();
      let mB = Oc.activeCamera !== Bc;
      if (Oc.frameGraph) {
        const cB = Dc.FindMainObjectRenderer(Oc.frameGraph);
        cB && (mB = cB.camera !== Bc)
      }
      mB ? wc(cB, Bc, nc, (cB => {
        if (rB) {
          const Bc = new Blob([cB]);
          fc.g.DownloadBlob(Bc), Vc && Vc("")
        } else Vc && Vc(cB)
      }), Ic, 1, cB.getCreationOptions().antialias, void 0, void 0, void 0, void 0, uc) : cB.onEndFrameObservable.addOnce((() => {
        Nc || (Nc = document.createElement("canvas")), Nc.width = qB, Nc.height = Pc;
        const Bc = Nc.getContext("2d"),
          nc = cB.getRenderingCanvas();
        if (!Bc || !nc) return void Tc.c.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
        const mB = nc.width,
          ec = nc.height,
          tB = Nc.width,
          Sc = Nc.height,
          yB = tB / mB,
          zB = Sc / ec,
          pc = sc ? Math.max(yB, zB) : Math.min(yB, zB),
          hc = mB * pc,
          aB = ec * pc,
          lc = (tB - hc) / 2,
          Yc = (Sc - aB) / 2;
        Bc.save(), Bc.fillStyle = Mc ? Oc.clearColor.toHexString() : "rgba(0, 0, 0, 0)", Bc.fillRect(0, 0, qB, Pc), Bc.restore(), Bc.drawImage(nc, 0, 0, mB, ec, lc, Yc, hc, aB), rB ? (fc.g.EncodeScreenshotCanvasData(Nc, void 0, Ic, void 0, uc), Vc && Vc("")) : fc.g.EncodeScreenshotCanvasData(Nc, Vc, Ic, void 0, uc)
      }))
    }
    async function oc(cB, Bc, nc) {
      let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Ic = arguments.length > 4 ? arguments[4] : void 0,
        rB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        uc = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        sc = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      return await new Promise(((Mc, Pc) => {
        Ec(cB, Bc, nc, (cB => {
          "undefined" !== typeof cB ? Mc(cB) : Pc(new Error("Data is undefined"))
        }), Vc, sc, Ic, rB, uc)
      }))
    }
    async function Wc(cB, Bc, nc, Vc) {
      let Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        rB = arguments.length > 5 ? arguments[5] : void 0,
        uc = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return await new Promise((sc => {
        Ec(cB, Bc, {
          width: nc,
          height: Vc
        }, (() => {
          sc()
        }), Ic, !0, rB, uc)
      }))
    }

    function wc(cB, Bc, rB, uc) {
      let sc = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        Mc = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
        Pc = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        qB = arguments.length > 7 ? arguments[7] : void 0,
        fc = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Sc = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        yB = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
        zB = arguments.length > 11 ? arguments[11] : void 0,
        pc = arguments.length > 12 ? arguments[12] : void 0,
        hc = arguments.length > 13 ? arguments[13] : void 0,
        aB = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
        lc = arguments.length > 15 ? arguments[15] : void 0;
      const Yc = Bc.knc();
      if (Yc.frameGraph) return void Xc(Yc.frameGraph, Bc, rB, sc, Mc, Pc, qB, zB, hc, !uc).then((cB => {
        uc && uc(cB)
      }));
      const {
        height: Lc,
        width: gB,
        finalWidth: Uc,
        finalHeight: bB
      } = Hc(cB, Bc, rB), Zc = {
        width: gB,
        height: Lc
      };
      if (!Lc || !gB) return void Tc.c.Error("Invalid 'size' parameter !");
      cB.skipFrameRender = !0;
      const Qc = cB.getRenderWidth,
        Cc = cB.getRenderHeight;
      cB.getRenderWidth = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && cB._currentRenderTarget ? cB._currentRenderTarget.width : gB
      }, cB.getRenderHeight = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && cB._currentRenderTarget ? cB._currentRenderTarget.height : Lc
      }, cB.onResizeObservable.hasObservers() && cB.onResizeObservable.notifyObservers(cB);
      const vB = new Ic.e("screenShot", Zc, Yc, !1, !1, 0, !1, Vc.e.BILINEAR_SAMPLINGMODE, void 0, Sc, void 0, void 0, void 0, Mc);
      vB.renderList = Yc.meshes.slice(), vB.samples = Mc, vB.renderSprites = fc, vB.activeCamera = Bc, vB.forceLayerMaskCheck = yB, pc?.(vB);
      const Dc = hc || mB.DumpData,
        Nc = () => {
          Yc.incrementRenderId(), Yc.resetCachedMaterial(), (0, tB.h)((() => vB.isReadyForRendering() && Bc.isReady(!0)), (() => {
            cB.onEndFrameObservable.addOnce((() => {
              Uc === gB && bB === Lc ? vB.readPixels(void 0, void 0, void 0, !1).then((cB => {
                Dc(gB, Lc, cB, uc, sc, qB, !0, void 0, zB), vB.dispose()
              })) : (cB.isWebGPU ? nc.e(348).then((() => nc(59357))) : nc.e(349).then((() => nc(59366)))).then((async () => await (0, ec.d)("pass", vB.getInternalTexture(), Yc, void 0, void 0, void 0, Uc, bB).then((Bc => {
                cB._readTexturePixels(Bc, Uc, bB, -1, 0, null, !0, !1, 0, 0).then((cB => {
                  Dc(Uc, bB, cB, uc, sc, qB, !0, void 0, zB), Bc.dispose()
                }))
              }))))
            })), Yc.incrementRenderId(), Yc.resetCachedMaterial();
            const Vc = Yc.activeCamera,
              Ic = Yc.activeCameras,
              rB = Bc.outputRenderTarget,
              Mc = Yc.spritesEnabled;
            Yc.activeCamera = Bc, Yc.activeCameras = null, Bc.outputRenderTarget = vB, Yc.spritesEnabled = fc;
            const Pc = Yc.meshes;
            Yc.meshes = vB.renderList || Yc.meshes;
            try {
              Yc.render()
            } finally {
              Yc.activeCamera = Vc, Yc.activeCameras = Ic, Bc.outputRenderTarget = rB, Yc.spritesEnabled = Mc, Yc.meshes = Pc, cB.getRenderWidth = Qc, cB.getRenderHeight = Cc, cB.onResizeObservable.hasObservers() && cB.onResizeObservable.notifyObservers(cB), Bc.getProjectionMatrix(!0), cB.skipFrameRender = !1
            }
          }), (() => {
            cB.skipFrameRender = !1, cB.getRenderWidth = Qc, cB.getRenderHeight = Cc, lc?.()
          }), void 0, aB)
        };
      if (Pc) {
        const cB = new Oc("antialiasing", 1, Yc.activeCamera);
        vB.addPostProcess(cB), cB.autoClear = !0, cB.onEffectCreatedObservable.addOnce((cB => {
          cB.isReady() ? Nc() : cB.onCompiled = () => {
            Nc()
          }
        }))
      } else Nc()
    }
    async function kB(cB, Bc, nc) {
      let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        rB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        uc = arguments.length > 6 ? arguments[6] : void 0,
        sc = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Mc = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Pc = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
        qB = arguments.length > 10 ? arguments[10] : void 0,
        Oc = arguments.length > 11 ? arguments[11] : void 0,
        Tc = arguments.length > 12 ? arguments[12] : void 0;
      return await new Promise(((fc, mB) => {
        wc(cB, Bc, nc, (cB => {
          "undefined" !== typeof cB ? fc(cB) : mB(new Error("Data is undefined"))
        }), Vc, Ic, rB, uc, sc, Mc, Pc, qB, Oc, Tc)
      }))
    }
    async function Xc(cB, Bc, nc) {
      let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        rB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        uc = arguments.length > 6 ? arguments[6] : void 0,
        sc = arguments.length > 7 ? arguments[7] : void 0,
        Mc = arguments.length > 8 ? arguments[8] : void 0,
        Pc = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        qB = arguments.length > 10 ? arguments[10] : void 0;
      const Oc = cB.engine,
        Tc = cB.textureManager,
        {
          height: fc,
          width: ec,
          finalWidth: tB,
          finalHeight: yB
        } = Hc(Oc, Bc, nc),
        zB = {
          width: ec,
          height: fc
        },
        pc = Mc || mB.DumpData,
        hc = cB.tasks,
        aB = hc.length,
        lc = cB.pausedExecution,
        Lc = Oc.getCaps().parallelShaderCompile;
      Tc.setBackBufferTextures(0, 0, {
        size: zB,
        options: {
          createMipMaps: !1,
          samples: Ic,
          types: [0],
          formats: [5],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot color"]
        },
        sizeIsPercentage: !1
      }, {
        size: zB,
        options: {
          createMipMaps: !1,
          samples: Ic,
          types: [0],
          formats: [Oc.isStencilEnable ? 13 : 14],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot depth"]
        },
        sizeIsPercentage: !1
      });
      let Uc = Sc;
      if (rB) {
        const Bc = new Yc("fxaa", cB);
        Bc.sourceTexture = Uc, Uc = Bc.outputTexture, cB.addTask(Bc)
      }
      if (tB !== ec || yB !== fc) {
        const Bc = new gB("pass", cB);
        Bc.sourceTexture = Uc, Bc.targetTexture = cB.textureManager.createRenderTargetTexture("pass_output", {
          size: {
            width: tB,
            height: yB
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
        }), Uc = Bc.outputTexture, cB.addTask(Bc)
      }
      const bB = Dc.FindMainObjectRenderer(cB);
      let Zc = null;
      bB && (Zc = bB.camera, bB.camera = Bc), Oc.getCaps().parallelShaderCompile = void 0, await cB.buildAsync();
      const Qc = qB ?? (Tc.hasHistoryTextures ? 32 : 1);
      for (let mB = 0; mB < Qc; ++mB) cB.execute();
      cB.pausedExecution = !0, Oc.getCaps().parallelShaderCompile = Lc;
      for (let mB = aB; mB < hc.length; ++mB) cB.tasks[mB].dispose();
      cB.tasks.length = aB, bB && Zc && (bB.camera = Zc);
      const Cc = cB.textureManager.getTextureFromHandle(Uc);
      return Cc.incrementReferences(), Tc.resetBackBufferTextures(), await cB.buildAsync(), cB.pausedExecution = lc, new Promise((cB => {
        Oc._readTexturePixels(Cc, tB, yB, -1, 0, null, !0, !1, 0, 0).then((async Bc => {
          Cc.dispose(), pc(tB, yB, Bc, Pc ? void 0 : Bc => cB(Bc), Vc, uc, !0, void 0, sc), Pc && cB(null)
        }))
      }))
    }

    function Hc(cB, Bc, nc) {
      let Vc = 0,
        Ic = 0,
        rB = 0,
        uc = 0;
      if ("object" === typeof nc) {
        const sc = nc.precision ? Math.abs(nc.precision) : 1;
        nc.width && nc.height ? (Vc = nc.height * sc, Ic = nc.width * sc) : nc.width && !nc.height ? (Ic = nc.width * sc, Vc = Math.round(Ic / cB.getAspectRatio(Bc))) : nc.height && !nc.width ? (Vc = nc.height * sc, Ic = Math.round(Vc * cB.getAspectRatio(Bc))) : (Ic = Math.round(cB.getRenderWidth() * sc), Vc = Math.round(Ic / cB.getAspectRatio(Bc))), nc.finalWidth && nc.finalHeight ? (uc = nc.finalHeight, rB = nc.finalWidth) : nc.finalWidth && !nc.finalHeight ? (rB = nc.finalWidth, uc = Math.round(rB / cB.getAspectRatio(Bc))) : nc.finalHeight && !nc.finalWidth ? (uc = nc.finalHeight, rB = Math.round(uc * cB.getAspectRatio(Bc))) : (rB = Ic, uc = Vc)
      } else isNaN(nc) || (Vc = nc, Ic = nc, rB = nc, uc = nc);
      return Ic && (Ic = Math.floor(Ic)), Vc && (Vc = Math.floor(Vc)), rB && (rB = Math.floor(rB)), uc && (uc = Math.floor(uc)), {
        height: 0 | Vc,
        width: 0 | Ic,
        finalWidth: 0 | rB,
        finalHeight: 0 | uc
      }
    }
    const Fc = {
      CreateScreenshot: Ec,
      CreateScreenshotAsync: oc,
      CreateScreenshotWithResizeAsync: Wc,
      CreateScreenshotUsingRenderTarget: wc,
      CreateScreenshotUsingRenderTargetAsync: kB,
      CreateScreenshotForFrameGraphAsync: Xc
    };
    let Jc = !1;

    function jB() {
      if (Jc) return;
      Jc = !0;
      fc.g.CreateScreenshot = Ec, fc.g.CreateScreenshotAsync = oc, fc.g.CreateScreenshotUsingRenderTarget = wc, fc.g.CreateScreenshotUsingRenderTargetAsync = kB
    }
    jB()
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);