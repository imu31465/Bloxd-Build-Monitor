export const id = 243;
export const ids = [243, 244];
export const modules = {
  40445: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Dp,
      d: () => Pp
    });
    var Op = cp(40203),
      op = cp(40210),
      Ip = cp(37320),
      Sp = cp(37487),
      xp = cp(40451),
      Lp = cp(40415),
      Yp = cp(37368);
    let Dp = (() => {
        var pp;
        let ip, cp, Lp = xp.d,
          Yp = [],
          Dp = [],
          Ap = [],
          Pp = [];
        return pp = class extends Lp {
          constructor(pp, ip, cp, op) {
            super(pp, cp, op), this.groundColor = (0, Op.l)(this, Yp, new Sp.d(0, 0, 0)), this.direction = ((0, Op.l)(this, Dp), (0, Op.l)(this, Ap, void 0)), (0, Op.l)(this, Pp), this.direction = ip || Ip.o.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(pp) {
            return this.direction = Ip.o.Normalize(pp.subtract(Ip.o.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(pp, ip) {
            const cp = Ip.o.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", cp.x, cp.y, cp.z, 0, ip), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), ip), this
          }
          transferToNodeMaterialEffect(pp, ip) {
            const cp = Ip.o.Normalize(this.direction);
            return pp.setFloat3(ip, cp.x, cp.y, cp.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = Ip.b.Identity()), this._worldMatrix
          }
          getTypeID() {
            return xp.d.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(pp, ip) {
            pp["HEMILIGHT" + ip] = !0
          }
        }, (() => {
          const Ip = "function" === typeof Symbol && Symbol.metadata ? Object.create(Lp[Symbol.metadata] ?? null) : void 0;
          ip = [(0, op.n)()], cp = [(0, op.H)()], (0, Op.j)(null, null, ip, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: pp => "groundColor" in pp,
              get: pp => pp.groundColor,
              set: (pp, ip) => {
                pp.groundColor = ip
              }
            },
            metadata: Ip
          }, Yp, Dp), (0, Op.j)(null, null, cp, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: pp => "direction" in pp,
              get: pp => pp.direction,
              set: (pp, ip) => {
                pp.direction = ip
              }
            },
            metadata: Ip
          }, Ap, Pp), Ip && Object.defineProperty(pp, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ip
          })
        })(), pp
      })(),
      Ap = !1;

    function Pp() {
      Ap || (Ap = !0, Lp.b.AddNodeConstructor("Light_Type_3", ((pp, ip) => () => new Dp(pp, Ip.o.Zero(), ip))), (0, Yp.g)("BABYLON.HemisphericLight", Dp))
    }
  },
  37985: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => op
    });
    var Op = cp(37989);
    class op {
      static GetPlanes(pp) {
        const ip = [];
        for (let cp = 0; cp < 6; cp++) ip.push(new Op.e(0, 0, 0, 0));
        return op.GetPlanesToRef(pp, ip), ip
      }
      static GetNearPlaneToRef(pp, ip) {
        const cp = pp.m;
        ip.normal.x = cp[3] + cp[2], ip.normal.y = cp[7] + cp[6], ip.normal.z = cp[11] + cp[10], ip.d = cp[15] + cp[14], ip.normalize()
      }
      static GetFarPlaneToRef(pp, ip) {
        const cp = pp.m;
        ip.normal.x = cp[3] - cp[2], ip.normal.y = cp[7] - cp[6], ip.normal.z = cp[11] - cp[10], ip.d = cp[15] - cp[14], ip.normalize()
      }
      static GetLeftPlaneToRef(pp, ip) {
        const cp = pp.m;
        ip.normal.x = cp[3] + cp[0], ip.normal.y = cp[7] + cp[4], ip.normal.z = cp[11] + cp[8], ip.d = cp[15] + cp[12], ip.normalize()
      }
      static GetRightPlaneToRef(pp, ip) {
        const cp = pp.m;
        ip.normal.x = cp[3] - cp[0], ip.normal.y = cp[7] - cp[4], ip.normal.z = cp[11] - cp[8], ip.d = cp[15] - cp[12], ip.normalize()
      }
      static GetTopPlaneToRef(pp, ip) {
        const cp = pp.m;
        ip.normal.x = cp[3] - cp[1], ip.normal.y = cp[7] - cp[5], ip.normal.z = cp[11] - cp[9], ip.d = cp[15] - cp[13], ip.normalize()
      }
      static GetBottomPlaneToRef(pp, ip) {
        const cp = pp.m;
        ip.normal.x = cp[3] + cp[1], ip.normal.y = cp[7] + cp[5], ip.normal.z = cp[11] + cp[9], ip.d = cp[15] + cp[13], ip.normalize()
      }
      static GetPlanesToRef(pp, ip) {
        op.GetNearPlaneToRef(pp, ip[0]), op.GetFarPlaneToRef(pp, ip[1]), op.GetLeftPlaneToRef(pp, ip[2]), op.GetRightPlaneToRef(pp, ip[3]), op.GetTopPlaneToRef(pp, ip[4]), op.GetBottomPlaneToRef(pp, ip[5])
      }
      static IsPointInFrustum(pp, ip) {
        for (let cp = 0; cp < 6; cp++)
          if (ip[cp].dotCoordinate(pp) < 0) return !1;
        return !0
      }
    }
  },
  37989: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => op
    });
    var Op = cp(37320);
    class op {
      constructor(pp, ip, cp, op) {
        this.normal = new Op.o(pp, ip, cp), this.d = op
      }
      BOp() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new op(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let pp = this.normal.getHashCode();
        return pp = 397 * pp ^ this.d, pp
      }
      normalize() {
        const pp = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let ip = 0;
        return 0 !== pp && (ip = 1 / pp), this.normal.x *= ip, this.normal.y *= ip, this.normal.z *= ip, this.d *= ip, this
      }
      transform(pp) {
        const ip = op._TmpMatrix;
        pp.invertToRef(ip);
        const cp = ip.m,
          Op = this.normal.x,
          Ip = this.normal.y,
          Sp = this.normal.z,
          xp = this.d,
          Lp = Op * cp[0] + Ip * cp[1] + Sp * cp[2] + xp * cp[3],
          Yp = Op * cp[4] + Ip * cp[5] + Sp * cp[6] + xp * cp[7],
          Dp = Op * cp[8] + Ip * cp[9] + Sp * cp[10] + xp * cp[11],
          Ap = Op * cp[12] + Ip * cp[13] + Sp * cp[14] + xp * cp[15];
        return new op(Lp, Yp, Dp, Ap)
      }
      dotCoordinate(pp) {
        return this.normal.x * pp.x + this.normal.y * pp.y + this.normal.z * pp.z + this.d
      }
      copyFromPoints(pp, ip, cp) {
        const Op = ip.x - pp.x,
          op = ip.y - pp.y,
          Ip = ip.z - pp.z,
          Sp = cp.x - pp.x,
          xp = cp.y - pp.y,
          Lp = cp.z - pp.z,
          Yp = op * Lp - Ip * xp,
          Dp = Ip * Sp - Op * Lp,
          Ap = Op * xp - op * Sp,
          Pp = Math.sqrt(Yp * Yp + Dp * Dp + Ap * Ap);
        let Wp;
        return Wp = 0 !== Pp ? 1 / Pp : 0, this.normal.x = Yp * Wp, this.normal.y = Dp * Wp, this.normal.z = Ap * Wp, this.d = -(this.normal.x * pp.x + this.normal.y * pp.y + this.normal.z * pp.z), this
      }
      isFrontFacingTo(pp, ip) {
        return Op.o.Dot(this.normal, pp) <= ip
      }
      signedDistanceTo(pp) {
        return Op.o.Dot(pp, this.normal) + this.d
      }
      static FromArray(pp) {
        return new op(pp[0], pp[1], pp[2], pp[3])
      }
      static FromPoints(pp, ip, cp) {
        const Op = new op(0, 0, 0, 0);
        return Op.copyFromPoints(pp, ip, cp), Op
      }
      static FromPositionAndNormal(pp, ip) {
        const cp = new op(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(pp, ip, cp)
      }
      static FromPositionAndNormalToRef(pp, ip, cp) {
        return cp.normal.rM(ip), cp.normal.normalize(), cp.d = -pp.dot(cp.normal), cp
      }
      static SignedDistanceToPlaneFromPositionAndNormal(pp, ip, cp) {
        const op = -(ip.x * pp.x + ip.y * pp.y + ip.z * pp.z);
        return Op.o.Dot(cp, ip) + op
      }
    }
    op._TmpMatrix = Op.b.Identity()
  },
  38313: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Op
    });
    class Op {
      constructor(pp, ip, cp, Op) {
        this.x = pp, this.y = ip, this.width = cp, this.height = Op
      }
      toGlobal(pp, ip) {
        return new Op(this.x * pp, this.y * ip, this.width * pp, this.height * ip)
      }
      toGlobalToRef(pp, ip, cp) {
        return cp.x = this.x * pp, cp.y = this.y * ip, cp.width = this.width * pp, cp.height = this.height * ip, this
      }
      clone() {
        return new Op(this.x, this.y, this.width, this.height)
      }
    }
  },
  38900: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Ip
    });
    var Op = cp(38905);
    const op = (pp, ip, cp) => pp ? pp.getClassName && "Mesh" === pp.getClassName() ? null : !pp.getClassName || "SubMesh" !== pp.getClassName() && "PhysicsBody" !== pp.getClassName() ? pp.clone ? pp.clone() : Array.isArray(pp) ? pp.slice() : cp && "object" === typeof pp ? {
      ...pp
    } : null : pp.clone(ip) : null;
    class Ip {
      static DeepCopy(pp, ip, cp, Ip) {
        let Sp = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const xp = function(pp) {
          const ip = [];
          do {
            const cp = Object.getOwnPropertyNames(pp);
            for (const pp of cp) - 1 === ip.indexOf(pp) && ip.push(pp)
          } while (pp = Object.getPrototypeOf(pp));
          return ip
        }(pp);
        for (const Yp of xp) {
          if ("_" === Yp[0] && (!Ip || -1 === Ip.indexOf(Yp))) continue;
          if (Yp.endsWith("Observable")) continue;
          if (cp && -1 !== cp.indexOf(Yp)) continue;
          const xp = pp[Yp],
            Dp = typeof xp;
          if ("function" !== Dp) try {
            if ("object" === Dp)
              if (xp instanceof Uint8Array) ip[Yp] = Uint8Array.from(xp);
              else if (xp instanceof Array) {
              if (ip[Yp] = [], xp.length > 0)
                if ("object" == typeof xp[0])
                  for (let pp = 0; pp < xp.length; pp++) {
                    const cp = op(xp[pp], ip, Sp); - 1 === ip[Yp].indexOf(cp) && ip[Yp].push(cp)
                  } else ip[Yp] = xp.slice(0)
            } else ip[Yp] = op(xp, ip, Sp);
            else ip[Yp] = xp
          } catch (Lp) {
            Op.e.Warn(Lp.message)
          }
        }
      }
    }
  },
  38124: (pp, ip, cp) => {
    function Op() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (pp => {
        const ip = 16 * Math.random() | 0;
        return ("x" === pp ? ip : 3 & ip | 8).toString(16)
      }))
    }
    cp.d(ip, {
      e: () => Op
    })
  },
  38905: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Op
    });
    class Op {
      static _CheckLimit(pp, ip) {
        let cp = Op._LogLimitOutputs[pp];
        return cp ? cp.current++ : (cp = {
          limit: ip,
          current: 1
        }, Op._LogLimitOutputs[pp] = cp), cp.current <= cp.limit
      }
      static _GenerateLimitMessage(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const cp = Op._LogLimitOutputs[pp];
        if (!cp || !Op.MessageLimitReached) return;
        const op = this._Levels[ip];
        cp.current === cp.limit && Op[op.name](Op.MessageLimitReached.replace(/%LIMIT%/g, "" + cp.limit).replace(/%TYPE%/g, op.name ?? ""))
      }
      static _AddLogEntry(pp) {
        Op._LogCache = pp + Op._LogCache, Op.OnNewCacheEntry && Op.OnNewCacheEntry(pp)
      }
      static _FormatMessage(pp) {
        const ip = pp => pp < 10 ? "0" + pp : "" + pp,
          cp = new Date;
        return "[" + ip(cp.getHours()) + ":" + ip(cp.getMinutes()) + ":" + ip(cp.getSeconds()) + "]: " + pp
      }
      static _LogDisabled(pp, ip) {}
      static _LogEnabled() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ip = arguments.length > 1 ? arguments[1] : void 0,
          cp = arguments.length > 2 ? arguments[2] : void 0;
        const op = Array.isArray(ip) ? ip[0] : ip;
        if (void 0 !== cp && !Op._CheckLimit(op, cp)) return;
        const Ip = Op._FormatMessage(op),
          Sp = this._Levels[pp],
          xp = Array.isArray(ip) ? ip.slice(1) : [];
        Sp.logFunc && Sp.logFunc("BJS - " + Ip, ...xp);
        const Lp = `<div style='color:${Sp.color}'>${Ip}</div><br>`;
        Op._AddLogEntry(Lp), Op._GenerateLimitMessage(op, pp)
      }
      static get LogCache() {
        return Op._LogCache
      }
      static ClearLogCache() {
        Op._LogCache = "", Op._LogLimitOutputs = {}, Op.errorsCount = 0
      }
      static set LogLevels(pp) {
        Op.Log = Op._LogDisabled, Op.Warn = Op._LogDisabled, Op.Error = Op._LogDisabled;
        const ip = [Op.MessageLogLevel, Op.WarningLogLevel, Op.ErrorLogLevel];
        for (const cp of ip)
          if ((pp & cp) === cp) {
            const pp = this._Levels[cp];
            Op[pp.name] = Op._LogEnabled.bind(Op, cp)
          }
      }
    }
    Op.NoneLogLevel = 0, Op.MessageLogLevel = 1, Op.WarningLogLevel = 2, Op.ErrorLogLevel = 4, Op.AllLogLevel = 7, Op.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Op._LogCache = "", Op._LogLimitOutputs = {}, Op._Levels = [{}, {
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
    }], Op.errorsCount = 0, Op.Log = Op._LogEnabled.bind(Op, Op.MessageLogLevel), Op.Warn = Op._LogEnabled.bind(Op, Op.WarningLogLevel), Op.Error = Op._LogEnabled.bind(Op, Op.ErrorLogLevel)
  },
  61372: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      CreateScreenshot: () => Np,
      CreateScreenshotAsync: () => Tp,
      CreateScreenshotForFrameGraphAsync: () => ap,
      CreateScreenshotUsingRenderTarget: () => bp,
      CreateScreenshotUsingRenderTargetAsync: () => hp,
      CreateScreenshotWithResizeAsync: () => fp,
      RegisterScreenshotTools: () => Gp,
      ScreenshotTools: () => Fp
    });
    var Op = cp(40654),
      op = cp(42087),
      Ip = cp(42060),
      Sp = cp(40233),
      xp = cp(42069),
      Lp = cp(37345),
      Yp = cp(37320);
    class Dp extends xp.f {
      static _GetDefines(pp) {
        if (!pp) return null;
        return pp.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
      }
      _gatherImports(pp, ip) {
        pp ? (this._webGPUReady = !0, ip.push(Promise.all([cp.e(379).then((() => cp(61601))), cp.e(380).then((() => cp(61604)))]))) : ip.push(Promise.all([cp.e(381).then((() => cp(61612))), cp.e(382).then((() => cp(61618)))]))
      }
      constructor(pp) {
        const ip = {
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: pp,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || Lp.e.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          vertexShader: Dp.VertexUrl,
          fragmentShader: Dp.FragmentUrl,
          uniforms: Dp.Uniforms
        };
        super({
          ...ip,
          defines: Dp._GetDefines(ip.engine)
        }), this.texelSize = new Yp.l(0, 0)
      }
      bind() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.bind(pp), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
      }
    }
    Dp.VertexUrl = "fxaa", Dp.FragmentUrl = "fxaa", Dp.Uniforms = ["texelSize"];
    class Ap extends Ip.c {
      getClassName() {
        return "FxaaPostProcess"
      }
      constructor(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          op = arguments.length > 3 ? arguments[3] : void 0,
          Ip = arguments.length > 4 ? arguments[4] : void 0,
          Sp = arguments.length > 5 ? arguments[5] : void 0,
          xp = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const Lp = {
          uniforms: Dp.Uniforms,
          size: "number" === typeof ip ? ip : void 0,
          camera: cp,
          samplingMode: op || Op.d.BILINEAR_SAMPLINGMODE,
          engine: Ip,
          reusable: Sp,
          textureType: xp,
          ...ip
        };
        super(pp, Dp.FragmentUrl, {
          effectWrapper: "number" !== typeof ip && ip.effectWrapper ? void 0 : new Dp(pp, Ip, Lp),
          ...Lp
        }), this.onApplyObservable.add((pp => {
          this._effectWrapper.texelSize = this.texelSize
        }))
      }
      static _Parse(pp, ip, cp, Op) {
        return Sp.c.Parse((() => new Ap(pp.name, pp.options, ip, pp.renderTargetSamplingMode, cp.gy(), pp.reusable)), pp, cp, Op)
      }
    }
    var Pp = cp(38905),
      Wp = cp(40304),
      yp = cp(42102),
      Up = cp(42080),
      wp = cp(40107);
    const vp = 0;
    class tp {
      constructor(pp, ip, cp) {
        this.name = pp, this._parentTask = ip, this._context = cp, this.disabled = !1
      }
      setInitializeFunc(pp) {
        this._initFunc = pp
      }
      setExecuteFunc(pp) {
        this._executeFunc = pp
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
    class Hp extends tp {
      static IsObjectListPass(pp) {
        return void 0 !== pp.setObjectList
      }
      get objectList() {
        return this._objectList
      }
      setObjectList(pp) {
        this._objectList = pp
      }
      constructor(pp, ip, cp, Op) {
        super(pp, ip, cp), this._engine = Op
      }
      _isValid() {
        const pp = super._isValid();
        return pp || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
      }
    }
    class dp extends tp {
      static IsRenderPass(pp) {
        return void 0 !== pp.setRenderTarget
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
      constructor(pp, ip, cp, Op) {
        super(pp, ip, cp), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = Op
      }
      setRenderTarget(pp) {
        this._renderTarget = pp
      }
      setRenderTargetDepth(pp) {
        this._renderTargetDepth = pp
      }
      addDependencies(pp) {
        if (void 0 !== pp)
          if (Array.isArray(pp))
            for (const ip of pp) this._dependencies.add(ip);
          else this._dependencies.add(pp)
      }
      collectDependencies(pp) {
        const ip = this._dependencies.keys();
        for (let cp = ip.next(); !0 !== cp.done; cp = ip.next()) pp.add(cp.value);
        if (void 0 !== this._renderTarget)
          if (Array.isArray(this._renderTarget))
            for (const cp of this._renderTarget) void 0 !== cp && pp.add(cp);
          else pp.add(this._renderTarget);
        void 0 !== this._renderTargetDepth && pp.add(this._renderTargetDepth)
      }
      setOutputLayerAndFaceIndices(pp) {
        const ip = this.frameGraphRenderTarget.renderTargetWrapper;
        if (ip)
          for (const cp of pp) ip.setLayerAndFaceIndex(cp.targetIndex, cp.layerIndex, cp.faceIndex)
      }
      _initialize() {
        this._frameGraphRenderTarget = this._context.createRenderTarget(this.name, this._renderTarget, this._renderTargetDepth, this.depthReadOnly, this.stencilReadOnly), super._initialize()
      }
      _execute() {
        this._context.bindRenderTarget(this._frameGraphRenderTarget), super._execute(), this._context.restoreDefaultFramebuffer()
      }
      _isValid() {
        const pp = super._isValid();
        return pp || (void 0 !== this._renderTarget || void 0 !== this.renderTargetDepth ? null : "Render target and render target depth cannot both be undefined.")
      }
      _dispose() {
        this._frameGraphRenderTarget?.dispose()
      }
    }
    var ep = cp(37349);
    class jp {
      get name() {
        return this._name
      }
      set name(pp) {
        this._name = pp
      }
      get disabled() {
        return this._disabled
      }
      set disabled(pp) {
        this._disabled = pp
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
      constructor(pp, ip) {
        this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new ep.d, this.onBeforeTaskExecute = new ep.d, this.onAfterTaskExecute = new ep.d, this.name = pp, this._frameGraph = ip, this._reset()
      }
      _reset() {
        for (const pp of this._passes) pp._dispose();
        for (const pp of this._passesDisabled) pp._dispose();
        this._passes.length = 0, this._passesDisabled.length = 0
      }
      _addPass(pp, ip) {
        ip ? this._passesDisabled.push(pp) : this._passes.push(pp)
      }
      _checkTask() {
        let pp, ip = null,
          cp = null;
        for (const xp of this._passes) {
          const Op = xp._isValid();
          if (Op) throw new Error(`Pass "${xp.name}" is not valid. ${Op}`);
          if (dp.IsRenderPass(xp)) {
            const pp = Array.isArray(xp.renderTarget) ? xp.renderTarget : [xp.renderTarget];
            ip = [];
            for (const cp of pp) void 0 !== cp && ip.push(this._frameGraph.textureManager.getTextureFromHandle(cp));
            cp = void 0 !== xp.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(xp.renderTargetDepth) : null
          } else Hp.IsObjectListPass(xp) && (pp = xp.objectList)
        }
        let Op, op = null,
          Ip = [],
          Sp = null;
        for (const xp of this._passesDisabled) {
          const pp = xp._isValid();
          if (pp) throw new Error(`Pass "${xp.name}" is not valid. ${pp}`);
          if (dp.IsRenderPass(xp)) {
            const pp = Array.isArray(xp.renderTarget) ? xp.renderTarget : [xp.renderTarget];
            op = [];
            for (const ip of pp) void 0 !== ip && op.push(this._frameGraph.textureManager.getTextureFromHandle(ip));
            Ip = pp, Sp = void 0 !== xp.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(xp.renderTargetDepth) : null
          } else Hp.IsObjectListPass(xp) && (Op = xp.objectList)
        }
        if (this._passesDisabled.length > 0) {
          if (!this._checkSameRenderTarget(ip, op)) {
            let pp = !0;
            for (const ip of Ip)
              if (void 0 !== ip && !this._frameGraph.textureManager.isHistoryTexture(ip)) {
                pp = !1;
                break
              } if (!pp) throw new Error(`The output texture of the task "${this.name}" is different when it is enabled or disabled.`)
          }
          if (cp !== Sp && null !== Sp) throw new Error(`The output depth texture of the task "${this.name}" is different when it is enabled or disabled.`);
          if (pp !== Op && null !== Op) throw new Error(`The output object list of the task "${this.name}" is different when it is enabled or disabled.`)
        }
      }
      _execute() {
        const pp = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
        this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const ip of pp) ip._execute()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
        this.onAfterTaskExecute.notifyObservers(this)
      }
      _initializePasses() {
        this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const pp of this._passes) pp._initialize();
          for (const pp of this._passesDisabled) pp._initialize()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
      }
      _checkSameRenderTarget(pp, ip) {
        if (null === pp || null === ip) return pp === ip;
        if (pp.length !== ip.length) return !1;
        for (let cp = 0; cp < pp.length; cp++)
          if (pp[cp] !== ip[cp]) return !1;
        return !0
      }
    }
    class kp extends jp {
      get alphaMode() {
        return this.postProcess.alphaMode
      }
      set alphaMode(pp) {
        this.postProcess.alphaMode = pp
      }
      get drawWrapper() {
        return this._postProcessDrawWrapper
      }
      constructor(pp, ip, cp) {
        super(pp, ip), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = cp, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture = this._frameGraph.textureManager.createDanglingHandle(), this.outputDepthAttachmentTexture = this._frameGraph.textureManager.createDanglingHandle()
      }
      isReady() {
        return this.postProcess.isReady()
      }
      getClassName() {
        return "FrameGraphPostProcessTask"
      }
      record() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ip = arguments.length > 1 ? arguments[1] : void 0,
          cp = arguments.length > 2 ? arguments[2] : void 0;
        if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
        const Op = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
        if (Op && (Op.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, Op), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentTexture, this.depthAttachmentTexture), Op) {
          const pp = this._frameGraph.textureManager.getTextureAbsoluteDimensions(Op);
          this._sourceWidth = pp.width, this._sourceHeight = pp.height
        }
        const op = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
        this._outputWidth = op.size.width, this._outputHeight = op.size.height;
        const Ip = this._frameGraph.addRenderPass(this.name);
        if (Ip.depthReadOnly = this.depthReadOnly, Ip.stencilReadOnly = this.stencilReadOnly, Ip.addDependencies(this.sourceTexture), Ip.setRenderTarget(this.outputTexture), Ip.setRenderTargetDepth(this.depthAttachmentTexture), Ip.setExecuteFunc((pp => {
            pp.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && pp.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), ip?.(pp), this.viewport && pp.setViewport(this.viewport), pp.applyFullScreenEffect(this._postProcessDrawWrapper, (() => {
              void 0 !== this.sourceTexture && pp.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), cp?.(pp), this.postProcess.bind()
            }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), pp.restoreDefaultFramebuffer(), pp.popDebugGroup()
          })), !pp) {
          const pp = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
          pp.depthReadOnly = this.depthReadOnly, pp.stencilReadOnly = this.stencilReadOnly, pp.addDependencies(this.sourceTexture), pp.setRenderTarget(this.outputTexture), pp.setRenderTargetDepth(this.depthAttachmentTexture), pp.setExecuteFunc((pp => {
            void 0 !== this.sourceTexture && 0 === this.alphaMode && (this.viewport && pp.setViewport(this.viewport), pp.copyTexture(this.sourceTexture, void 0, void 0 !== this.viewport))
          }))
        }
        return Ip
      }
      dispose() {
        this.postProcess.dispose(), super.dispose()
      }
    }
    class mp extends kp {
      constructor(pp, ip, cp) {
        super(pp, ip, cp || new Dp(pp, ip.engine))
      }
      getClassName() {
        return "FrameGraphFXAATask"
      }
      record() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ip = arguments.length > 1 ? arguments[1] : void 0,
          cp = arguments.length > 2 ? arguments[2] : void 0;
        const Op = super.record(pp, ip, cp);
        return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, Op
      }
    }
    var Rp = cp(42094);
    class qp extends kp {
      constructor(pp, ip, cp) {
        super(pp, ip, cp || new Rp.d(pp, ip.engine))
      }
      getClassName() {
        return "FrameGraphPassTask"
      }
    }
    var Mp = cp(40296),
      Cp = cp(40372),
      Ep = cp(40334),
      Xp = cp(40445),
      lp = cp(37487);
    class Qp {
      getRenderCamera(pp) {
        if (this._renderCamera) return this._renderCamera;
        {
          let ip;
          return ip = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, pp && ip && ip.isRigCamera ? ip.rigParent : ip
        }
      }
      setRenderCamera(pp) {
        this._renderCamera = pp
      }
      _getSharedGizmoLight() {
        return this._sharedGizmoLight || (this._sharedGizmoLight = new Xp.b("shared gizmo light", new Yp.o(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = lp.d.Gray()), this._sharedGizmoLight
      }
      static get DefaultUtilityLayer() {
        return null == Qp._DefaultUtilityLayer ? Qp._CreateDefaultUtilityLayerFromScene(Lp.e.LastCreatedScene) : Qp._DefaultUtilityLayer
      }
      static _CreateDefaultUtilityLayerFromScene(pp) {
        return Qp._DefaultUtilityLayer = new Qp(pp), Qp._DefaultUtilityLayer.originalScene.Kl.addOnce((() => {
          Qp._DefaultUtilityLayer = null
        })), Qp._DefaultUtilityLayer
      }
      static get DefaultKeepDepthUtilityLayer() {
        return null == Qp._DefaultKeepDepthUtilityLayer ? Qp._CreateDefaultKeepUtilityLayerFromScene(Lp.e.LastCreatedScene) : Qp._DefaultKeepDepthUtilityLayer
      }
      static _CreateDefaultKeepUtilityLayerFromScene(pp) {
        return Qp._DefaultKeepDepthUtilityLayer = new Qp(pp), Qp._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, Qp._DefaultKeepDepthUtilityLayer.originalScene.Kl.addOnce((() => {
          Qp._DefaultKeepDepthUtilityLayer = null
        })), Qp._DefaultKeepDepthUtilityLayer
      }
      constructor(pp) {
        let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.originalScene = pp, this.handleEvents = ip, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.processAllEvents = !1, this.pickingEnabled = !0, this.onPointerOutObservable = new ep.d, this.utilityLayerScene = new Mp.f(pp.gy(), {
          virtual: !0,
          useFloatingOrigin: pp.floatingOriginMode
        }), this.utilityLayerScene.useRightHandedSystem = pp.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), ip && (this._originalPointerObserver = pp.onPrePointerObservable.add((ip => {
          if (!this.utilityLayerScene.activeCamera) return;
          if (!this.pickingEnabled) return;
          if (!this.processAllEvents && ip.type !== Cp.d.POINTERMOVE && ip.type !== Cp.d.POINTERUP && ip.type !== Cp.d.POINTERDOWN && ip.type !== Cp.d.POINTERDOUBLETAP) return;
          this.utilityLayerScene.pointerX = pp.pointerX, this.utilityLayerScene.pointerY = pp.pointerY;
          const cp = ip.event;
          if (pp.isPointerCaptured(cp.pointerId)) return void(this._pointerCaptures[cp.pointerId] = !1);
          const Op = cp => {
              let Op;
              if (ip.nearInteractionPickingInfo) Op = ip.nearInteractionPickingInfo.pickedMesh.Gl() == cp ? ip.nearInteractionPickingInfo : new Ep.b;
              else if (cp !== this.utilityLayerScene && ip.originalPickingInfo) Op = ip.originalPickingInfo;
              else {
                let op = null;
                this._renderCamera && (op = cp._activeCamera, cp._activeCamera = this._renderCamera, ip.ray = null), Op = ip.ray ? cp.pickWithRay(ip.ray) : cp.SW(pp.pointerX, pp.pointerY), op && (cp._activeCamera = op)
              }
              return Op
            },
            op = Op(this.utilityLayerScene);
          if (!ip.ray && op && (ip.ray = op.ray), ip.originalPickingInfo?.aimTransform && op && (op.aimTransform = ip.originalPickingInfo.aimTransform, op.gripTransform = ip.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(ip), this.onlyCheckPointerDownEvents && ip.type != Cp.d.POINTERDOWN) return ip.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new Cp.i(ip.type, ip.event, op), ip.type), void(ip.type === Cp.d.POINTERUP && this._pointerCaptures[cp.pointerId] && (this._pointerCaptures[cp.pointerId] = !1));
          if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) op && op.hit && (ip.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new Cp.i(ip.type, ip.event, op), ip.type), ip.skipOnPointerObservable = !0);
          else {
            const cp = Op(pp),
              Ip = ip.event;
            cp && op && (0 === op.distance && cp.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(cp.pickedMesh) ? (this._notifyObservers(ip, cp, Ip), ip.skipOnPointerObservable = !0) : ip.type === Cp.d.POINTERDOWN ? (this._pointerCaptures[Ip.pointerId] = !0, this._notifyObservers(ip, cp, Ip)) : ip.type !== Cp.d.POINTERMOVE && ip.type !== Cp.d.POINTERUP || (this._lastPointerEvents[Ip.pointerId] && (this.onPointerOutObservable.notifyObservers(Ip.pointerId), delete this._lastPointerEvents[Ip.pointerId]), this._notifyObservers(ip, cp, Ip)) : !this._pointerCaptures[Ip.pointerId] && (op.distance < cp.distance || 0 === cp.distance) ? (this._notifyObservers(ip, op, Ip), ip.skipOnPointerObservable || (ip.skipOnPointerObservable = op.distance > 0)) : !this._pointerCaptures[Ip.pointerId] && op.distance >= cp.distance && (this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(cp.pickedMesh) ? (this._notifyObservers(ip, cp, Ip), ip.skipOnPointerObservable = !0) : (ip.type !== Cp.d.POINTERMOVE && ip.type !== Cp.d.POINTERUP || this._lastPointerEvents[Ip.pointerId] && (this.onPointerOutObservable.notifyObservers(Ip.pointerId), delete this._lastPointerEvents[Ip.pointerId]), this._notifyObservers(ip, op, Ip))), ip.type === Cp.d.POINTERUP && this._pointerCaptures[Ip.pointerId] && (this._pointerCaptures[Ip.pointerId] = !1))
          }
        })), this._originalPointerObserver && pp.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, cp || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((pp => {
          this.shouldRender && pp == this.getRenderCamera() && this.render()
        }))), this._sceneDisposeObserver = this.originalScene.Kl.add((() => {
          this.dispose()
        })), this._updateCamera()
      }
      _notifyObservers(pp, ip, cp) {
        pp.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new Cp.i(pp.type, pp.event, ip), pp.type), this._lastPointerEvents[cp.pointerId] = !0)
      }
      render() {
        if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
          const pp = this.utilityLayerScene.activeCamera.Gl(),
            ip = this.utilityLayerScene.activeCamera;
          ip._scene = this.utilityLayerScene, ip.leftCamera && (ip.leftCamera._scene = this.utilityLayerScene), ip.rightCamera && (ip.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), ip._scene = pp, ip.leftCamera && (ip.leftCamera._scene = pp), ip.rightCamera && (ip.rightCamera._scene = pp)
        }
      }
      dispose() {
        this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.Kl.remove(this._sceneDisposeObserver), this._originalPointerObserver && this.originalScene.onPrePointerObservable.remove(this._originalPointerObserver), this.utilityLayerScene.dispose()
      }
      _updateCamera() {
        this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
      }
    }
    Qp._DefaultUtilityLayer = null, Qp._DefaultKeepDepthUtilityLayer = null;
    const Jp = {
      FindMainCamera: function(pp) {
        return pp.findMainCamera()
      },
      FindMainObjectRenderer: function(pp) {
        return pp.findMainObjectRenderer()
      },
      CreateUtilityLayerRenderer: function(pp) {
        let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const cp = pp.pw,
          Op = new Qp(cp, ip, !0);
        Op.utilityLayerScene.activeCamera = cp.activeCamera;
        let op = Jp.FindMainCamera(cp.frameGraph);
        !op && cp.cameras.length > 0 && (op = cp.cameras[0]), op && (Op.setRenderCamera(op), Op.utilityLayerScene.activeCamera = op);
        const Ip = cp.onAfterRenderObservable.add((() => {
          Op.render()
        }));
        return Op.utilityLayerScene.Kl.addOnce((() => {
          cp.onAfterRenderObservable.remove(Ip)
        })), Op
      }
    };
    let Bp = null;

    function Np(pp, ip, cp, Op) {
      let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        Ip = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Sp = arguments.length > 6 ? arguments[6] : void 0,
        xp = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Lp = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
      const {
        height: Yp,
        width: Dp
      } = np(pp, ip, cp);
      if (!Yp || !Dp) return void Pp.e.Error("Invalid 'size' parameter !");
      const Ap = ip.Gl();
      let yp = Ap.activeCamera !== ip;
      if (Ap.frameGraph) {
        const pp = Jp.FindMainObjectRenderer(Ap.frameGraph);
        pp && (yp = pp.camera !== ip)
      }
      yp ? bp(pp, ip, cp, (pp => {
        if (Ip) {
          const ip = new Blob([pp]);
          Wp.i.DownloadBlob(ip), Op && Op("")
        } else Op && Op(pp)
      }), op, 1, pp.getCreationOptions().antialias, void 0, void 0, void 0, void 0, Sp) : pp.onEndFrameObservable.addOnce((() => {
        Bp || (Bp = document.createElement("canvas")), Bp.width = Dp, Bp.height = Yp;
        const ip = Bp.getContext("2d"),
          cp = pp.getRenderingCanvas();
        if (!ip || !cp) return void Pp.e.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
        const yp = cp.width,
          Up = cp.height,
          wp = Bp.width,
          vp = Bp.height,
          tp = wp / yp,
          Hp = vp / Up,
          dp = xp ? Math.max(tp, Hp) : Math.min(tp, Hp),
          ep = yp * dp,
          jp = Up * dp,
          kp = (wp - ep) / 2,
          mp = (vp - jp) / 2;
        ip.save(), ip.fillStyle = Lp ? Ap.clearColor.toHexString() : "rgba(0, 0, 0, 0)", ip.fillRect(0, 0, Dp, Yp), ip.restore(), ip.drawImage(cp, 0, 0, yp, Up, kp, mp, ep, jp), Ip ? (Wp.i.EncodeScreenshotCanvasData(Bp, void 0, op, void 0, Sp), Op && Op("")) : Wp.i.EncodeScreenshotCanvasData(Bp, Op, op, void 0, Sp)
      }))
    }
    async function Tp(pp, ip, cp) {
      let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        op = arguments.length > 4 ? arguments[4] : void 0,
        Ip = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Sp = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        xp = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      return await new Promise(((Lp, Yp) => {
        Np(pp, ip, cp, (pp => {
          "undefined" !== typeof pp ? Lp(pp) : Yp(new Error("Data is undefined"))
        }), Op, xp, op, Ip, Sp)
      }))
    }
    async function fp(pp, ip, cp, Op) {
      let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        Ip = arguments.length > 5 ? arguments[5] : void 0,
        Sp = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return await new Promise((xp => {
        Np(pp, ip, {
          width: cp,
          height: Op
        }, (() => {
          xp()
        }), op, !0, Ip, Sp)
      }))
    }

    function bp(pp, ip, Ip, Sp) {
      let xp = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        Lp = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
        Yp = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Dp = arguments.length > 7 ? arguments[7] : void 0,
        Wp = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        vp = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        tp = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
        Hp = arguments.length > 11 ? arguments[11] : void 0,
        dp = arguments.length > 12 ? arguments[12] : void 0,
        ep = arguments.length > 13 ? arguments[13] : void 0,
        jp = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
        kp = arguments.length > 15 ? arguments[15] : void 0;
      const mp = ip.Gl();
      if (mp.frameGraph) return void ap(mp.frameGraph, ip, Ip, xp, Lp, Yp, Dp, Hp, ep, !Sp).then((pp => {
        Sp && Sp(pp)
      }));
      const {
        height: Rp,
        width: qp,
        finalWidth: Mp,
        finalHeight: Cp
      } = np(pp, ip, Ip), Ep = {
        width: qp,
        height: Rp
      };
      if (!Rp || !qp) return void Pp.e.Error("Invalid 'size' parameter !");
      pp.skipFrameRender = !0;
      const Xp = pp.getRenderWidth,
        lp = pp.getRenderHeight;
      pp.getRenderWidth = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && pp._currentRenderTarget ? pp._currentRenderTarget.width : qp
      }, pp.getRenderHeight = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && pp._currentRenderTarget ? pp._currentRenderTarget.height : Rp
      }, pp.onResizeObservable.hasObservers() && pp.onResizeObservable.notifyObservers(pp);
      const Qp = new op.e("screenShot", Ep, mp, !1, !1, 0, !1, Op.d.BILINEAR_SAMPLINGMODE, void 0, vp, void 0, void 0, void 0, Lp);
      Qp.renderList = mp.meshes.slice(), Qp.samples = Lp, Qp.renderSprites = Wp, Qp.activeCamera = ip, Qp.forceLayerMaskCheck = tp, dp?.(Qp);
      const Jp = ep || yp.DumpData,
        Bp = () => {
          mp.incrementRenderId(), mp.resetCachedMaterial(), (0, wp.c)((() => Qp.isReadyForRendering() && ip.isReady(!0)), (() => {
            pp.onEndFrameObservable.addOnce((() => {
              Mp === qp && Cp === Rp ? Qp.readPixels(void 0, void 0, void 0, !1).then((pp => {
                Jp(qp, Rp, pp, Sp, xp, Dp, !0, void 0, Hp), Qp.dispose()
              })) : (pp.isWebGPU ? cp.e(375).then((() => cp(61552))) : cp.e(376).then((() => cp(61559)))).then((async () => await (0, Up.c)("pass", Qp.getInternalTexture(), mp, void 0, void 0, void 0, Mp, Cp).then((ip => {
                pp._readTexturePixels(ip, Mp, Cp, -1, 0, null, !0, !1, 0, 0).then((pp => {
                  Jp(Mp, Cp, pp, Sp, xp, Dp, !0, void 0, Hp), ip.dispose()
                }))
              }))))
            })), mp.incrementRenderId(), mp.resetCachedMaterial();
            const Op = mp.activeCamera,
              op = mp.activeCameras,
              Ip = ip.outputRenderTarget,
              Lp = mp.spritesEnabled;
            mp.activeCamera = ip, mp.activeCameras = null, ip.outputRenderTarget = Qp, mp.spritesEnabled = Wp;
            const Yp = mp.meshes;
            mp.meshes = Qp.renderList || mp.meshes;
            try {
              mp.render()
            } finally {
              mp.activeCamera = Op, mp.activeCameras = op, ip.outputRenderTarget = Ip, mp.spritesEnabled = Lp, mp.meshes = Yp, pp.getRenderWidth = Xp, pp.getRenderHeight = lp, pp.onResizeObservable.hasObservers() && pp.onResizeObservable.notifyObservers(pp), ip.getProjectionMatrix(!0), pp.skipFrameRender = !1
            }
          }), (() => {
            pp.skipFrameRender = !1, pp.getRenderWidth = Xp, pp.getRenderHeight = lp, kp?.()
          }), void 0, jp)
        };
      if (Yp) {
        const pp = new Ap("antialiasing", 1, mp.activeCamera);
        Qp.addPostProcess(pp), pp.autoClear = !0, pp.onEffectCreatedObservable.addOnce((pp => {
          pp.isReady() ? Bp() : pp.onCompiled = () => {
            Bp()
          }
        }))
      } else Bp()
    }
    async function hp(pp, ip, cp) {
      let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        Ip = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Sp = arguments.length > 6 ? arguments[6] : void 0,
        xp = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Lp = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Yp = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
        Dp = arguments.length > 10 ? arguments[10] : void 0,
        Ap = arguments.length > 11 ? arguments[11] : void 0,
        Pp = arguments.length > 12 ? arguments[12] : void 0;
      return await new Promise(((Wp, yp) => {
        bp(pp, ip, cp, (pp => {
          "undefined" !== typeof pp ? Wp(pp) : yp(new Error("Data is undefined"))
        }), Op, op, Ip, Sp, xp, Lp, Yp, Dp, Ap, Pp)
      }))
    }
    async function ap(pp, ip, cp) {
      let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        Ip = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Sp = arguments.length > 6 ? arguments[6] : void 0,
        xp = arguments.length > 7 ? arguments[7] : void 0,
        Lp = arguments.length > 8 ? arguments[8] : void 0,
        Yp = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        Dp = arguments.length > 10 ? arguments[10] : void 0;
      const Ap = pp.engine,
        Pp = pp.textureManager,
        {
          height: Wp,
          width: Up,
          finalWidth: wp,
          finalHeight: tp
        } = np(Ap, ip, cp),
        Hp = {
          width: Up,
          height: Wp
        },
        dp = Lp || yp.DumpData,
        ep = pp.tasks,
        jp = ep.length,
        kp = pp.pausedExecution,
        Rp = Ap.getCaps().parallelShaderCompile;
      Pp.setBackBufferTextures(0, 0, {
        size: Hp,
        options: {
          createMipMaps: !1,
          samples: op,
          types: [0],
          formats: [5],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot color"]
        },
        sizeIsPercentage: !1
      }, {
        size: Hp,
        options: {
          createMipMaps: !1,
          samples: op,
          types: [0],
          formats: [Ap.isStencilEnable ? 13 : 14],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot depth"]
        },
        sizeIsPercentage: !1
      });
      let Mp = vp;
      if (Ip) {
        const ip = new mp("fxaa", pp);
        ip.sourceTexture = Mp, Mp = ip.outputTexture, pp.addTask(ip)
      }
      if (wp !== Up || tp !== Wp) {
        const ip = new qp("pass", pp);
        ip.sourceTexture = Mp, ip.targetTexture = pp.textureManager.createRenderTargetTexture("pass_output", {
          size: {
            width: wp,
            height: tp
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
        }), Mp = ip.outputTexture, pp.addTask(ip)
      }
      const Cp = Jp.FindMainObjectRenderer(pp);
      let Ep = null;
      Cp && (Ep = Cp.camera, Cp.camera = ip), Ap.getCaps().parallelShaderCompile = void 0, await pp.buildAsync();
      const Xp = Dp ?? (Pp.hasHistoryTextures ? 32 : 1);
      for (let yp = 0; yp < Xp; ++yp) pp.execute();
      pp.pausedExecution = !0, Ap.getCaps().parallelShaderCompile = Rp;
      for (let yp = jp; yp < ep.length; ++yp) pp.tasks[yp].dispose();
      pp.tasks.length = jp, Cp && Ep && (Cp.camera = Ep);
      const lp = pp.textureManager.getTextureFromHandle(Mp);
      return lp.incrementReferences(), Pp.resetBackBufferTextures(), await pp.buildAsync(), pp.pausedExecution = kp, new Promise((pp => {
        Ap._readTexturePixels(lp, wp, tp, -1, 0, null, !0, !1, 0, 0).then((async ip => {
          lp.dispose(), dp(wp, tp, ip, Yp ? void 0 : ip => pp(ip), Op, Sp, !0, void 0, xp), Yp && pp(null)
        }))
      }))
    }

    function np(pp, ip, cp) {
      let Op = 0,
        op = 0,
        Ip = 0,
        Sp = 0;
      if ("object" === typeof cp) {
        const xp = cp.precision ? Math.abs(cp.precision) : 1;
        cp.width && cp.height ? (Op = cp.height * xp, op = cp.width * xp) : cp.width && !cp.height ? (op = cp.width * xp, Op = Math.round(op / pp.getAspectRatio(ip))) : cp.height && !cp.width ? (Op = cp.height * xp, op = Math.round(Op * pp.getAspectRatio(ip))) : (op = Math.round(pp.getRenderWidth() * xp), Op = Math.round(op / pp.getAspectRatio(ip))), cp.finalWidth && cp.finalHeight ? (Sp = cp.finalHeight, Ip = cp.finalWidth) : cp.finalWidth && !cp.finalHeight ? (Ip = cp.finalWidth, Sp = Math.round(Ip / pp.getAspectRatio(ip))) : cp.finalHeight && !cp.finalWidth ? (Sp = cp.finalHeight, Ip = Math.round(Sp * pp.getAspectRatio(ip))) : (Ip = op, Sp = Op)
      } else isNaN(cp) || (Op = cp, op = cp, Ip = cp, Sp = cp);
      return op && (op = Math.floor(op)), Op && (Op = Math.floor(Op)), Ip && (Ip = Math.floor(Ip)), Sp && (Sp = Math.floor(Sp)), {
        height: 0 | Op,
        width: 0 | op,
        finalWidth: 0 | Ip,
        finalHeight: 0 | Sp
      }
    }
    const Fp = {
      CreateScreenshot: Np,
      CreateScreenshotAsync: Tp,
      CreateScreenshotWithResizeAsync: fp,
      CreateScreenshotUsingRenderTarget: bp,
      CreateScreenshotUsingRenderTargetAsync: hp,
      CreateScreenshotForFrameGraphAsync: ap
    };
    let gp = !1;

    function Gp() {
      if (gp) return;
      gp = !0;
      Wp.i.CreateScreenshot = Np, Wp.i.CreateScreenshotAsync = Tp, Wp.i.CreateScreenshotUsingRenderTarget = bp, Wp.i.CreateScreenshotUsingRenderTargetAsync = hp
    }
    Gp()
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);