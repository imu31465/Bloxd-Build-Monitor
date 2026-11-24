export const id = 243;
export const ids = [243, 244];
export const modules = {
  40305: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => nB,
      h: () => zB
    });
    var TB = ZB(40061),
      JB = ZB(40065),
      oB = ZB(37120),
      GB = ZB(37311),
      vB = ZB(40310),
      kB = ZB(40272),
      cB = ZB(37170);
    let nB = (() => {
        var BB;
        let IB, ZB, kB = vB.b,
          cB = [],
          nB = [],
          hB = [],
          zB = [];
        return BB = class extends kB {
          constructor(BB, IB, ZB, JB) {
            super(BB, ZB, JB), this.groundColor = (0, TB.l)(this, cB, new GB.c(0, 0, 0)), this.direction = ((0, TB.l)(this, nB), (0, TB.l)(this, hB, void 0)), (0, TB.l)(this, zB), this.direction = IB || oB.s.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(BB) {
            return this.direction = oB.s.Normalize(BB.subtract(oB.s.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(BB, IB) {
            const ZB = oB.s.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", ZB.x, ZB.y, ZB.z, 0, IB), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), IB), this
          }
          transferToNodeMaterialEffect(BB, IB) {
            const ZB = oB.s.Normalize(this.direction);
            return BB.setFloat3(IB, ZB.x, ZB.y, ZB.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = oB.b.Identity()), this._worldMatrix
          }
          getTypeID() {
            return vB.b.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(BB, IB) {
            BB["HEMILIGHT" + IB] = !0
          }
        }, (() => {
          const oB = "function" === typeof Symbol && Symbol.metadata ? Object.create(kB[Symbol.metadata] ?? null) : void 0;
          IB = [(0, JB.l)()], ZB = [(0, JB.A)()], (0, TB.j)(null, null, IB, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "groundColor" in BB,
              get: BB => BB.groundColor,
              set: (BB, IB) => {
                BB.groundColor = IB
              }
            },
            metadata: oB
          }, cB, nB), (0, TB.j)(null, null, ZB, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: BB => "direction" in BB,
              get: BB => BB.direction,
              set: (BB, IB) => {
                BB.direction = IB
              }
            },
            metadata: oB
          }, hB, zB), oB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: oB
          })
        })(), BB
      })(),
      hB = !1;

    function zB() {
      hB || (hB = !0, kB.e.AddNodeConstructor("Light_Type_3", ((BB, IB) => () => new nB(BB, oB.s.Zero(), IB))), (0, cB.i)("BABYLON.HemisphericLight", nB))
    }
  },
  37819: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => JB
    });
    var TB = ZB(37824);
    class JB {
      static GetPlanes(BB) {
        const IB = [];
        for (let ZB = 0; ZB < 6; ZB++) IB.push(new TB.c(0, 0, 0, 0));
        return JB.GetPlanesToRef(BB, IB), IB
      }
      static GetNearPlaneToRef(BB, IB) {
        const ZB = BB.m;
        IB.normal.x = ZB[3] + ZB[2], IB.normal.y = ZB[7] + ZB[6], IB.normal.z = ZB[11] + ZB[10], IB.d = ZB[15] + ZB[14], IB.normalize()
      }
      static GetFarPlaneToRef(BB, IB) {
        const ZB = BB.m;
        IB.normal.x = ZB[3] - ZB[2], IB.normal.y = ZB[7] - ZB[6], IB.normal.z = ZB[11] - ZB[10], IB.d = ZB[15] - ZB[14], IB.normalize()
      }
      static GetLeftPlaneToRef(BB, IB) {
        const ZB = BB.m;
        IB.normal.x = ZB[3] + ZB[0], IB.normal.y = ZB[7] + ZB[4], IB.normal.z = ZB[11] + ZB[8], IB.d = ZB[15] + ZB[12], IB.normalize()
      }
      static GetRightPlaneToRef(BB, IB) {
        const ZB = BB.m;
        IB.normal.x = ZB[3] - ZB[0], IB.normal.y = ZB[7] - ZB[4], IB.normal.z = ZB[11] - ZB[8], IB.d = ZB[15] - ZB[12], IB.normalize()
      }
      static GetTopPlaneToRef(BB, IB) {
        const ZB = BB.m;
        IB.normal.x = ZB[3] - ZB[1], IB.normal.y = ZB[7] - ZB[5], IB.normal.z = ZB[11] - ZB[9], IB.d = ZB[15] - ZB[13], IB.normalize()
      }
      static GetBottomPlaneToRef(BB, IB) {
        const ZB = BB.m;
        IB.normal.x = ZB[3] + ZB[1], IB.normal.y = ZB[7] + ZB[5], IB.normal.z = ZB[11] + ZB[9], IB.d = ZB[15] + ZB[13], IB.normalize()
      }
      static GetPlanesToRef(BB, IB) {
        JB.GetNearPlaneToRef(BB, IB[0]), JB.GetFarPlaneToRef(BB, IB[1]), JB.GetLeftPlaneToRef(BB, IB[2]), JB.GetRightPlaneToRef(BB, IB[3]), JB.GetTopPlaneToRef(BB, IB[4]), JB.GetBottomPlaneToRef(BB, IB[5])
      }
      static IsPointInFrustum(BB, IB) {
        for (let ZB = 0; ZB < 6; ZB++)
          if (IB[ZB].dotCoordinate(BB) < 0) return !1;
        return !0
      }
    }
  },
  37824: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => JB
    });
    var TB = ZB(37120);
    class JB {
      constructor(BB, IB, ZB, JB) {
        this.normal = new TB.s(BB, IB, ZB), this.d = JB
      }
      HTB() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new JB(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let BB = this.normal.getHashCode();
        return BB = 397 * BB ^ this.d, BB
      }
      normalize() {
        const BB = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let IB = 0;
        return 0 !== BB && (IB = 1 / BB), this.normal.x *= IB, this.normal.y *= IB, this.normal.z *= IB, this.d *= IB, this
      }
      transform(BB) {
        const IB = JB._TmpMatrix;
        BB.invertToRef(IB);
        const ZB = IB.m,
          TB = this.normal.x,
          oB = this.normal.y,
          GB = this.normal.z,
          vB = this.d,
          kB = TB * ZB[0] + oB * ZB[1] + GB * ZB[2] + vB * ZB[3],
          cB = TB * ZB[4] + oB * ZB[5] + GB * ZB[6] + vB * ZB[7],
          nB = TB * ZB[8] + oB * ZB[9] + GB * ZB[10] + vB * ZB[11],
          hB = TB * ZB[12] + oB * ZB[13] + GB * ZB[14] + vB * ZB[15];
        return new JB(kB, cB, nB, hB)
      }
      dotCoordinate(BB) {
        return this.normal.x * BB.x + this.normal.y * BB.y + this.normal.z * BB.z + this.d
      }
      copyFromPoints(BB, IB, ZB) {
        const TB = IB.x - BB.x,
          JB = IB.y - BB.y,
          oB = IB.z - BB.z,
          GB = ZB.x - BB.x,
          vB = ZB.y - BB.y,
          kB = ZB.z - BB.z,
          cB = JB * kB - oB * vB,
          nB = oB * GB - TB * kB,
          hB = TB * vB - JB * GB,
          zB = Math.sqrt(cB * cB + nB * nB + hB * hB);
        let FB;
        return FB = 0 !== zB ? 1 / zB : 0, this.normal.x = cB * FB, this.normal.y = nB * FB, this.normal.z = hB * FB, this.d = -(this.normal.x * BB.x + this.normal.y * BB.y + this.normal.z * BB.z), this
      }
      isFrontFacingTo(BB, IB) {
        return TB.s.Dot(this.normal, BB) <= IB
      }
      signedDistanceTo(BB) {
        return TB.s.Dot(BB, this.normal) + this.d
      }
      static FromArray(BB) {
        return new JB(BB[0], BB[1], BB[2], BB[3])
      }
      static FromPoints(BB, IB, ZB) {
        const TB = new JB(0, 0, 0, 0);
        return TB.copyFromPoints(BB, IB, ZB), TB
      }
      static FromPositionAndNormal(BB, IB) {
        const ZB = new JB(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(BB, IB, ZB)
      }
      static FromPositionAndNormalToRef(BB, IB, ZB) {
        return ZB.normal.TY(IB), ZB.normal.normalize(), ZB.d = -BB.dot(ZB.normal), ZB
      }
      static SignedDistanceToPlaneFromPositionAndNormal(BB, IB, ZB) {
        const JB = -(IB.x * BB.x + IB.y * BB.y + IB.z * BB.z);
        return TB.s.Dot(ZB, IB) + JB
      }
    }
    JB._TmpMatrix = TB.b.Identity()
  },
  38151: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => TB
    });
    class TB {
      constructor(BB, IB, ZB, TB) {
        this.x = BB, this.y = IB, this.width = ZB, this.height = TB
      }
      toGlobal(BB, IB) {
        return new TB(this.x * BB, this.y * IB, this.width * BB, this.height * IB)
      }
      toGlobalToRef(BB, IB, ZB) {
        return ZB.x = this.x * BB, ZB.y = this.y * IB, ZB.width = this.width * BB, ZB.height = this.height * IB, this
      }
      clone() {
        return new TB(this.x, this.y, this.width, this.height)
      }
    }
  },
  38714: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => oB
    });
    var TB = ZB(38718);
    const JB = (BB, IB, ZB) => BB ? BB.getClassName && "Mesh" === BB.getClassName() ? null : !BB.getClassName || "SubMesh" !== BB.getClassName() && "PhysicsBody" !== BB.getClassName() ? BB.clone ? BB.clone() : Array.isArray(BB) ? BB.slice() : ZB && "object" === typeof BB ? {
      ...BB
    } : null : BB.clone(IB) : null;
    class oB {
      static DeepCopy(BB, IB, ZB, oB) {
        let GB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const vB = function(BB) {
          const IB = [];
          do {
            const ZB = Object.getOwnPropertyNames(BB);
            for (const BB of ZB) - 1 === IB.indexOf(BB) && IB.push(BB)
          } while (BB = Object.getPrototypeOf(BB));
          return IB
        }(BB);
        for (const cB of vB) {
          if ("_" === cB[0] && (!oB || -1 === oB.indexOf(cB))) continue;
          if (cB.endsWith("Observable")) continue;
          if (ZB && -1 !== ZB.indexOf(cB)) continue;
          const vB = BB[cB],
            nB = typeof vB;
          if ("function" !== nB) try {
            if ("object" === nB)
              if (vB instanceof Uint8Array) IB[cB] = Uint8Array.from(vB);
              else if (vB instanceof Array) {
              if (IB[cB] = [], vB.length > 0)
                if ("object" == typeof vB[0])
                  for (let BB = 0; BB < vB.length; BB++) {
                    const ZB = JB(vB[BB], IB, GB); - 1 === IB[cB].indexOf(ZB) && IB[cB].push(ZB)
                  } else IB[cB] = vB.slice(0)
            } else IB[cB] = JB(vB, IB, GB);
            else IB[cB] = vB
          } catch (kB) {
            TB.d.Warn(kB.message)
          }
        }
      }
    }
  },
  37964: (BB, IB, ZB) => {
    function TB() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (BB => {
        const IB = 16 * Math.random() | 0;
        return ("x" === BB ? IB : 3 & IB | 8).toString(16)
      }))
    }
    ZB.d(IB, {
      d: () => TB
    })
  },
  38718: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => TB
    });
    class TB {
      static _CheckLimit(BB, IB) {
        let ZB = TB._LogLimitOutputs[BB];
        return ZB ? ZB.current++ : (ZB = {
          limit: IB,
          current: 1
        }, TB._LogLimitOutputs[BB] = ZB), ZB.current <= ZB.limit
      }
      static _GenerateLimitMessage(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const ZB = TB._LogLimitOutputs[BB];
        if (!ZB || !TB.MessageLimitReached) return;
        const JB = this._Levels[IB];
        ZB.current === ZB.limit && TB[JB.name](TB.MessageLimitReached.replace(/%LIMIT%/g, "" + ZB.limit).replace(/%TYPE%/g, JB.name ?? ""))
      }
      static _AddLogEntry(BB) {
        TB._LogCache = BB + TB._LogCache, TB.OnNewCacheEntry && TB.OnNewCacheEntry(BB)
      }
      static _FormatMessage(BB) {
        const IB = BB => BB < 10 ? "0" + BB : "" + BB,
          ZB = new Date;
        return "[" + IB(ZB.getHours()) + ":" + IB(ZB.getMinutes()) + ":" + IB(ZB.getSeconds()) + "]: " + BB
      }
      static _LogDisabled(BB, IB) {}
      static _LogEnabled() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          IB = arguments.length > 1 ? arguments[1] : void 0,
          ZB = arguments.length > 2 ? arguments[2] : void 0;
        const JB = Array.isArray(IB) ? IB[0] : IB;
        if (void 0 !== ZB && !TB._CheckLimit(JB, ZB)) return;
        const oB = TB._FormatMessage(JB),
          GB = this._Levels[BB],
          vB = Array.isArray(IB) ? IB.slice(1) : [];
        GB.logFunc && GB.logFunc("BJS - " + oB, ...vB);
        const kB = `<div style='color:${GB.color}'>${oB}</div><br>`;
        TB._AddLogEntry(kB), TB._GenerateLimitMessage(JB, BB)
      }
      static get LogCache() {
        return TB._LogCache
      }
      static ClearLogCache() {
        TB._LogCache = "", TB._LogLimitOutputs = {}, TB.errorsCount = 0
      }
      static set LogLevels(BB) {
        TB.Log = TB._LogDisabled, TB.Warn = TB._LogDisabled, TB.Error = TB._LogDisabled;
        const IB = [TB.MessageLogLevel, TB.WarningLogLevel, TB.ErrorLogLevel];
        for (const ZB of IB)
          if ((BB & ZB) === ZB) {
            const BB = this._Levels[ZB];
            TB[BB.name] = TB._LogEnabled.bind(TB, ZB)
          }
      }
    }
    TB.NoneLogLevel = 0, TB.MessageLogLevel = 1, TB.WarningLogLevel = 2, TB.ErrorLogLevel = 4, TB.AllLogLevel = 7, TB.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", TB._LogCache = "", TB._LogLimitOutputs = {}, TB._Levels = [{}, {
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
    }], TB.errorsCount = 0, TB.Log = TB._LogEnabled.bind(TB, TB.MessageLogLevel), TB.Warn = TB._LogEnabled.bind(TB, TB.WarningLogLevel), TB.Error = TB._LogEnabled.bind(TB, TB.ErrorLogLevel)
  },
  61297: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      CreateScreenshot: () => rB,
      CreateScreenshotAsync: () => mB,
      CreateScreenshotForFrameGraphAsync: () => uB,
      CreateScreenshotUsingRenderTarget: () => LB,
      CreateScreenshotUsingRenderTargetAsync: () => eB,
      CreateScreenshotWithResizeAsync: () => XB,
      RegisterScreenshotTools: () => tB,
      ScreenshotTools: () => lB
    });
    var TB = ZB(40521),
      JB = ZB(41851),
      oB = ZB(41821),
      GB = ZB(40085),
      vB = ZB(41825),
      kB = ZB(37147),
      cB = ZB(37120);
    class nB extends vB.f {
      static _GetDefines(BB) {
        if (!BB) return null;
        return BB.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
      }
      _gatherImports(BB, IB) {
        BB ? (this._webGPUReady = !0, IB.push(Promise.all([ZB.e(379).then((() => ZB(61528))), ZB.e(380).then((() => ZB(61531)))]))) : IB.push(Promise.all([ZB.e(381).then((() => ZB(61533))), ZB.e(382).then((() => ZB(61539)))]))
      }
      constructor(BB) {
        const IB = {
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: BB,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || kB.e.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          vertexShader: nB.VertexUrl,
          fragmentShader: nB.FragmentUrl,
          uniforms: nB.Uniforms
        };
        super({
          ...IB,
          defines: nB._GetDefines(IB.engine)
        }), this.texelSize = new cB.p(0, 0)
      }
      bind() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.bind(BB), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
      }
    }
    nB.VertexUrl = "fxaa", nB.FragmentUrl = "fxaa", nB.Uniforms = ["texelSize"];
    class hB extends oB.d {
      getClassName() {
        return "FxaaPostProcess"
      }
      constructor(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          JB = arguments.length > 3 ? arguments[3] : void 0,
          oB = arguments.length > 4 ? arguments[4] : void 0,
          GB = arguments.length > 5 ? arguments[5] : void 0,
          vB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const kB = {
          uniforms: nB.Uniforms,
          size: "number" === typeof IB ? IB : void 0,
          camera: ZB,
          samplingMode: JB || TB.e.BILINEAR_SAMPLINGMODE,
          engine: oB,
          reusable: GB,
          textureType: vB,
          ...IB
        };
        super(BB, nB.FragmentUrl, {
          effectWrapper: "number" !== typeof IB && IB.effectWrapper ? void 0 : new nB(BB, oB, kB),
          ...kB
        }), this.onApplyObservable.add((BB => {
          this._effectWrapper.texelSize = this.texelSize
        }))
      }
      static _Parse(BB, IB, ZB, TB) {
        return GB.b.Parse((() => new hB(BB.name, BB.options, IB, BB.renderTargetSamplingMode, ZB.PN(), BB.reusable)), BB, ZB, TB)
      }
    }
    var zB = ZB(38718),
      FB = ZB(40152),
      NB = ZB(41862),
      gB = ZB(41842),
      qB = ZB(39943);
    const yB = 0;
    class UB {
      constructor(BB, IB, ZB) {
        this.name = BB, this._parentTask = IB, this._context = ZB, this.disabled = !1
      }
      setInitializeFunc(BB) {
        this._initFunc = BB
      }
      setExecuteFunc(BB) {
        this._executeFunc = BB
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
    class WB extends UB {
      static IsObjectListPass(BB) {
        return void 0 !== BB.setObjectList
      }
      get objectList() {
        return this._objectList
      }
      setObjectList(BB) {
        this._objectList = BB
      }
      constructor(BB, IB, ZB, TB) {
        super(BB, IB, ZB), this._engine = TB
      }
      _isValid() {
        const BB = super._isValid();
        return BB || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
      }
    }
    class dB extends UB {
      static IsRenderPass(BB) {
        return void 0 !== BB.setRenderTarget
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
      constructor(BB, IB, ZB, TB) {
        super(BB, IB, ZB), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = TB
      }
      setRenderTarget(BB) {
        this._renderTarget = BB
      }
      setRenderTargetDepth(BB) {
        this._renderTargetDepth = BB
      }
      addDependencies(BB) {
        if (void 0 !== BB)
          if (Array.isArray(BB))
            for (const IB of BB) this._dependencies.add(IB);
          else this._dependencies.add(BB)
      }
      collectDependencies(BB) {
        const IB = this._dependencies.keys();
        for (let ZB = IB.next(); !0 !== ZB.done; ZB = IB.next()) BB.add(ZB.value);
        if (void 0 !== this._renderTarget)
          if (Array.isArray(this._renderTarget))
            for (const ZB of this._renderTarget) void 0 !== ZB && BB.add(ZB);
          else BB.add(this._renderTarget);
        void 0 !== this._renderTargetDepth && BB.add(this._renderTargetDepth)
      }
      setOutputLayerAndFaceIndices(BB) {
        const IB = this.frameGraphRenderTarget.renderTargetWrapper;
        if (IB)
          for (const ZB of BB) IB.setLayerAndFaceIndex(ZB.targetIndex, ZB.layerIndex, ZB.faceIndex)
      }
      _initialize() {
        this._frameGraphRenderTarget = this._context.createRenderTarget(this.name, this._renderTarget, this._renderTargetDepth, this.depthReadOnly, this.stencilReadOnly), super._initialize()
      }
      _execute() {
        this._context.bindRenderTarget(this._frameGraphRenderTarget), super._execute(), this._context.restoreDefaultFramebuffer()
      }
      _isValid() {
        const BB = super._isValid();
        return BB || (void 0 !== this._renderTarget || void 0 !== this.renderTargetDepth ? null : "Render target and render target depth cannot both be undefined.")
      }
      _dispose() {
        this._frameGraphRenderTarget?.dispose()
      }
    }
    var CB = ZB(37153);
    class QB {
      get name() {
        return this._name
      }
      set name(BB) {
        this._name = BB
      }
      get disabled() {
        return this._disabled
      }
      set disabled(BB) {
        this._disabled = BB
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
      constructor(BB, IB) {
        this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new CB.b, this.onBeforeTaskExecute = new CB.b, this.onAfterTaskExecute = new CB.b, this.name = BB, this._frameGraph = IB, this._reset()
      }
      _reset() {
        for (const BB of this._passes) BB._dispose();
        for (const BB of this._passesDisabled) BB._dispose();
        this._passes.length = 0, this._passesDisabled.length = 0
      }
      _addPass(BB, IB) {
        IB ? this._passesDisabled.push(BB) : this._passes.push(BB)
      }
      _checkTask() {
        let BB, IB = null,
          ZB = null;
        for (const vB of this._passes) {
          const TB = vB._isValid();
          if (TB) throw new Error(`Pass "${vB.name}" is not valid. ${TB}`);
          if (dB.IsRenderPass(vB)) {
            const BB = Array.isArray(vB.renderTarget) ? vB.renderTarget : [vB.renderTarget];
            IB = [];
            for (const ZB of BB) void 0 !== ZB && IB.push(this._frameGraph.textureManager.getTextureFromHandle(ZB));
            ZB = void 0 !== vB.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(vB.renderTargetDepth) : null
          } else WB.IsObjectListPass(vB) && (BB = vB.objectList)
        }
        let TB, JB = null,
          oB = [],
          GB = null;
        for (const vB of this._passesDisabled) {
          const BB = vB._isValid();
          if (BB) throw new Error(`Pass "${vB.name}" is not valid. ${BB}`);
          if (dB.IsRenderPass(vB)) {
            const BB = Array.isArray(vB.renderTarget) ? vB.renderTarget : [vB.renderTarget];
            JB = [];
            for (const IB of BB) void 0 !== IB && JB.push(this._frameGraph.textureManager.getTextureFromHandle(IB));
            oB = BB, GB = void 0 !== vB.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(vB.renderTargetDepth) : null
          } else WB.IsObjectListPass(vB) && (TB = vB.objectList)
        }
        if (this._passesDisabled.length > 0) {
          if (!this._checkSameRenderTarget(IB, JB)) {
            let BB = !0;
            for (const IB of oB)
              if (void 0 !== IB && !this._frameGraph.textureManager.isHistoryTexture(IB)) {
                BB = !1;
                break
              } if (!BB) throw new Error(`The output texture of the task "${this.name}" is different when it is enabled or disabled.`)
          }
          if (ZB !== GB && null !== GB) throw new Error(`The output depth texture of the task "${this.name}" is different when it is enabled or disabled.`);
          if (BB !== TB && null !== TB) throw new Error(`The output object list of the task "${this.name}" is different when it is enabled or disabled.`)
        }
      }
      _execute() {
        const BB = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
        this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const IB of BB) IB._execute()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
        this.onAfterTaskExecute.notifyObservers(this)
      }
      _initializePasses() {
        this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const BB of this._passes) BB._initialize();
          for (const BB of this._passesDisabled) BB._initialize()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
      }
      _checkSameRenderTarget(BB, IB) {
        if (null === BB || null === IB) return BB === IB;
        if (BB.length !== IB.length) return !1;
        for (let ZB = 0; ZB < BB.length; ZB++)
          if (BB[ZB] !== IB[ZB]) return !1;
        return !0
      }
    }
    class sB extends QB {
      get alphaMode() {
        return this.postProcess.alphaMode
      }
      set alphaMode(BB) {
        this.postProcess.alphaMode = BB
      }
      get drawWrapper() {
        return this._postProcessDrawWrapper
      }
      constructor(BB, IB, ZB) {
        super(BB, IB), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = ZB, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture = this._frameGraph.textureManager.createDanglingHandle(), this.outputDepthAttachmentTexture = this._frameGraph.textureManager.createDanglingHandle()
      }
      isReady() {
        return this.postProcess.isReady()
      }
      getClassName() {
        return "FrameGraphPostProcessTask"
      }
      record() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          IB = arguments.length > 1 ? arguments[1] : void 0,
          ZB = arguments.length > 2 ? arguments[2] : void 0;
        if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
        const TB = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
        if (TB && (TB.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, TB), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentTexture, this.depthAttachmentTexture), TB) {
          const BB = this._frameGraph.textureManager.getTextureAbsoluteDimensions(TB);
          this._sourceWidth = BB.width, this._sourceHeight = BB.height
        }
        const JB = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
        this._outputWidth = JB.size.width, this._outputHeight = JB.size.height;
        const oB = this._frameGraph.addRenderPass(this.name);
        if (oB.depthReadOnly = this.depthReadOnly, oB.stencilReadOnly = this.stencilReadOnly, oB.addDependencies(this.sourceTexture), oB.setRenderTarget(this.outputTexture), oB.setRenderTargetDepth(this.depthAttachmentTexture), oB.setExecuteFunc((BB => {
            BB.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && BB.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), IB?.(BB), this.viewport && BB.setViewport(this.viewport), BB.applyFullScreenEffect(this._postProcessDrawWrapper, (() => {
              void 0 !== this.sourceTexture && BB.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), ZB?.(BB), this.postProcess.bind()
            }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), BB.restoreDefaultFramebuffer(), BB.popDebugGroup()
          })), !BB) {
          const BB = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
          BB.depthReadOnly = this.depthReadOnly, BB.stencilReadOnly = this.stencilReadOnly, BB.addDependencies(this.sourceTexture), BB.setRenderTarget(this.outputTexture), BB.setRenderTargetDepth(this.depthAttachmentTexture), BB.setExecuteFunc((BB => {
            void 0 !== this.sourceTexture && 0 === this.alphaMode && (this.viewport && BB.setViewport(this.viewport), BB.copyTexture(this.sourceTexture, void 0, void 0 !== this.viewport))
          }))
        }
        return oB
      }
      dispose() {
        this.postProcess.dispose(), super.dispose()
      }
    }
    class wB extends sB {
      constructor(BB, IB, ZB) {
        super(BB, IB, ZB || new nB(BB, IB.engine))
      }
      getClassName() {
        return "FrameGraphFXAATask"
      }
      record() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          IB = arguments.length > 1 ? arguments[1] : void 0,
          ZB = arguments.length > 2 ? arguments[2] : void 0;
        const TB = super.record(BB, IB, ZB);
        return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, TB
      }
    }
    var OB = ZB(41858);
    class YB extends sB {
      constructor(BB, IB, ZB) {
        super(BB, IB, ZB || new OB.c(BB, IB.engine))
      }
      getClassName() {
        return "FrameGraphPassTask"
      }
    }
    var iB = ZB(40148),
      pB = ZB(40224),
      aB = ZB(40185),
      HB = ZB(40305),
      MB = ZB(37311);
    class jB {
      getRenderCamera(BB) {
        if (this._renderCamera) return this._renderCamera;
        {
          let IB;
          return IB = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, BB && IB && IB.isRigCamera ? IB.rigParent : IB
        }
      }
      setRenderCamera(BB) {
        this._renderCamera = BB
      }
      _getSharedGizmoLight() {
        return this._sharedGizmoLight || (this._sharedGizmoLight = new HB.e("shared gizmo light", new cB.s(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = MB.c.Gray()), this._sharedGizmoLight
      }
      static get DefaultUtilityLayer() {
        return null == jB._DefaultUtilityLayer ? jB._CreateDefaultUtilityLayerFromScene(kB.e.LastCreatedScene) : jB._DefaultUtilityLayer
      }
      static _CreateDefaultUtilityLayerFromScene(BB) {
        return jB._DefaultUtilityLayer = new jB(BB), jB._DefaultUtilityLayer.originalScene.oR.addOnce((() => {
          jB._DefaultUtilityLayer = null
        })), jB._DefaultUtilityLayer
      }
      static get DefaultKeepDepthUtilityLayer() {
        return null == jB._DefaultKeepDepthUtilityLayer ? jB._CreateDefaultKeepUtilityLayerFromScene(kB.e.LastCreatedScene) : jB._DefaultKeepDepthUtilityLayer
      }
      static _CreateDefaultKeepUtilityLayerFromScene(BB) {
        return jB._DefaultKeepDepthUtilityLayer = new jB(BB), jB._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, jB._DefaultKeepDepthUtilityLayer.originalScene.oR.addOnce((() => {
          jB._DefaultKeepDepthUtilityLayer = null
        })), jB._DefaultKeepDepthUtilityLayer
      }
      constructor(BB) {
        let IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.originalScene = BB, this.handleEvents = IB, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.processAllEvents = !1, this.pickingEnabled = !0, this.onPointerOutObservable = new CB.b, this.utilityLayerScene = new iB.e(BB.PN(), {
          virtual: !0,
          useFloatingOrigin: BB.floatingOriginMode
        }), this.utilityLayerScene.useRightHandedSystem = BB.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), IB && (this._originalPointerObserver = BB.onPrePointerObservable.add((IB => {
          if (!this.utilityLayerScene.activeCamera) return;
          if (!this.pickingEnabled) return;
          if (!this.processAllEvents && IB.type !== pB.d.POINTERMOVE && IB.type !== pB.d.POINTERUP && IB.type !== pB.d.POINTERDOWN && IB.type !== pB.d.POINTERDOUBLETAP) return;
          this.utilityLayerScene.pointerX = BB.pointerX, this.utilityLayerScene.pointerY = BB.pointerY;
          const ZB = IB.event;
          if (BB.isPointerCaptured(ZB.pointerId)) return void(this._pointerCaptures[ZB.pointerId] = !1);
          const TB = ZB => {
              let TB;
              if (IB.nearInteractionPickingInfo) TB = IB.nearInteractionPickingInfo.pickedMesh.JR() == ZB ? IB.nearInteractionPickingInfo : new aB.e;
              else if (ZB !== this.utilityLayerScene && IB.originalPickingInfo) TB = IB.originalPickingInfo;
              else {
                let JB = null;
                this._renderCamera && (JB = ZB._activeCamera, ZB._activeCamera = this._renderCamera, IB.ray = null), TB = IB.ray ? ZB.pickWithRay(IB.ray) : ZB.TF(BB.pointerX, BB.pointerY), JB && (ZB._activeCamera = JB)
              }
              return TB
            },
            JB = TB(this.utilityLayerScene);
          if (!IB.ray && JB && (IB.ray = JB.ray), IB.originalPickingInfo?.aimTransform && JB && (JB.aimTransform = IB.originalPickingInfo.aimTransform, JB.gripTransform = IB.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(IB), this.onlyCheckPointerDownEvents && IB.type != pB.d.POINTERDOWN) return IB.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new pB.i(IB.type, IB.event, JB), IB.type), void(IB.type === pB.d.POINTERUP && this._pointerCaptures[ZB.pointerId] && (this._pointerCaptures[ZB.pointerId] = !1));
          if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) JB && JB.hit && (IB.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new pB.i(IB.type, IB.event, JB), IB.type), IB.skipOnPointerObservable = !0);
          else {
            const ZB = TB(BB),
              oB = IB.event;
            ZB && JB && (0 === JB.distance && ZB.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(ZB.pickedMesh) ? (this._notifyObservers(IB, ZB, oB), IB.skipOnPointerObservable = !0) : IB.type === pB.d.POINTERDOWN ? (this._pointerCaptures[oB.pointerId] = !0, this._notifyObservers(IB, ZB, oB)) : IB.type !== pB.d.POINTERMOVE && IB.type !== pB.d.POINTERUP || (this._lastPointerEvents[oB.pointerId] && (this.onPointerOutObservable.notifyObservers(oB.pointerId), delete this._lastPointerEvents[oB.pointerId]), this._notifyObservers(IB, ZB, oB)) : !this._pointerCaptures[oB.pointerId] && (JB.distance < ZB.distance || 0 === ZB.distance) ? (this._notifyObservers(IB, JB, oB), IB.skipOnPointerObservable || (IB.skipOnPointerObservable = JB.distance > 0)) : !this._pointerCaptures[oB.pointerId] && JB.distance >= ZB.distance && (this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(ZB.pickedMesh) ? (this._notifyObservers(IB, ZB, oB), IB.skipOnPointerObservable = !0) : (IB.type !== pB.d.POINTERMOVE && IB.type !== pB.d.POINTERUP || this._lastPointerEvents[oB.pointerId] && (this.onPointerOutObservable.notifyObservers(oB.pointerId), delete this._lastPointerEvents[oB.pointerId]), this._notifyObservers(IB, JB, oB))), IB.type === pB.d.POINTERUP && this._pointerCaptures[oB.pointerId] && (this._pointerCaptures[oB.pointerId] = !1))
          }
        })), this._originalPointerObserver && BB.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, ZB || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((BB => {
          this.shouldRender && BB == this.getRenderCamera() && this.render()
        }))), this._sceneDisposeObserver = this.originalScene.oR.add((() => {
          this.dispose()
        })), this._updateCamera()
      }
      _notifyObservers(BB, IB, ZB) {
        BB.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new pB.i(BB.type, BB.event, IB), BB.type), this._lastPointerEvents[ZB.pointerId] = !0)
      }
      render() {
        if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
          const BB = this.utilityLayerScene.activeCamera.JR(),
            IB = this.utilityLayerScene.activeCamera;
          IB._scene = this.utilityLayerScene, IB.leftCamera && (IB.leftCamera._scene = this.utilityLayerScene), IB.rightCamera && (IB.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), IB._scene = BB, IB.leftCamera && (IB.leftCamera._scene = BB), IB.rightCamera && (IB.rightCamera._scene = BB)
        }
      }
      dispose() {
        this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.oR.remove(this._sceneDisposeObserver), this._originalPointerObserver && this.originalScene.onPrePointerObservable.remove(this._originalPointerObserver), this.utilityLayerScene.dispose()
      }
      _updateCamera() {
        this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
      }
    }
    jB._DefaultUtilityLayer = null, jB._DefaultKeepDepthUtilityLayer = null;
    const PB = {
      FindMainCamera: function(BB) {
        return BB.findMainCamera()
      },
      FindMainObjectRenderer: function(BB) {
        return BB.findMainObjectRenderer()
      },
      CreateUtilityLayerRenderer: function(BB) {
        let IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const ZB = BB.lg,
          TB = new jB(ZB, IB, !0);
        TB.utilityLayerScene.activeCamera = ZB.activeCamera;
        let JB = PB.FindMainCamera(ZB.frameGraph);
        !JB && ZB.cameras.length > 0 && (JB = ZB.cameras[0]), JB && (TB.setRenderCamera(JB), TB.utilityLayerScene.activeCamera = JB);
        const oB = ZB.onAfterRenderObservable.add((() => {
          TB.render()
        }));
        return TB.utilityLayerScene.oR.addOnce((() => {
          ZB.onAfterRenderObservable.remove(oB)
        })), TB
      }
    };
    let RB = null;

    function rB(BB, IB, ZB, TB) {
      let JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        oB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        GB = arguments.length > 6 ? arguments[6] : void 0,
        vB = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        kB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
      const {
        height: cB,
        width: nB
      } = fB(BB, IB, ZB);
      if (!cB || !nB) return void zB.d.Error("Invalid 'size' parameter !");
      const hB = IB.JR();
      let NB = hB.activeCamera !== IB;
      if (hB.frameGraph) {
        const BB = PB.FindMainObjectRenderer(hB.frameGraph);
        BB && (NB = BB.camera !== IB)
      }
      NB ? LB(BB, IB, ZB, (BB => {
        if (oB) {
          const IB = new Blob([BB]);
          FB.j.DownloadBlob(IB), TB && TB("")
        } else TB && TB(BB)
      }), JB, 1, BB.getCreationOptions().antialias, void 0, void 0, void 0, void 0, GB) : BB.onEndFrameObservable.addOnce((() => {
        RB || (RB = document.createElement("canvas")), RB.width = nB, RB.height = cB;
        const IB = RB.getContext("2d"),
          ZB = BB.getRenderingCanvas();
        if (!IB || !ZB) return void zB.d.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
        const NB = ZB.width,
          gB = ZB.height,
          qB = RB.width,
          yB = RB.height,
          UB = qB / NB,
          WB = yB / gB,
          dB = vB ? Math.max(UB, WB) : Math.min(UB, WB),
          CB = NB * dB,
          QB = gB * dB,
          sB = (qB - CB) / 2,
          wB = (yB - QB) / 2;
        IB.save(), IB.fillStyle = kB ? hB.clearColor.toHexString() : "rgba(0, 0, 0, 0)", IB.fillRect(0, 0, nB, cB), IB.restore(), IB.drawImage(ZB, 0, 0, NB, gB, sB, wB, CB, QB), oB ? (FB.j.EncodeScreenshotCanvasData(RB, void 0, JB, void 0, GB), TB && TB("")) : FB.j.EncodeScreenshotCanvasData(RB, TB, JB, void 0, GB)
      }))
    }
    async function mB(BB, IB, ZB) {
      let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        JB = arguments.length > 4 ? arguments[4] : void 0,
        oB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        GB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        vB = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      return await new Promise(((kB, cB) => {
        rB(BB, IB, ZB, (BB => {
          "undefined" !== typeof BB ? kB(BB) : cB(new Error("Data is undefined"))
        }), TB, vB, JB, oB, GB)
      }))
    }
    async function XB(BB, IB, ZB, TB) {
      let JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        oB = arguments.length > 5 ? arguments[5] : void 0,
        GB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return await new Promise((vB => {
        rB(BB, IB, {
          width: ZB,
          height: TB
        }, (() => {
          vB()
        }), JB, !0, oB, GB)
      }))
    }

    function LB(BB, IB, oB, GB) {
      let vB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        kB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
        cB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        nB = arguments.length > 7 ? arguments[7] : void 0,
        FB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        yB = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        UB = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
        WB = arguments.length > 11 ? arguments[11] : void 0,
        dB = arguments.length > 12 ? arguments[12] : void 0,
        CB = arguments.length > 13 ? arguments[13] : void 0,
        QB = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
        sB = arguments.length > 15 ? arguments[15] : void 0;
      const wB = IB.JR();
      if (wB.frameGraph) return void uB(wB.frameGraph, IB, oB, vB, kB, cB, nB, WB, CB, !GB).then((BB => {
        GB && GB(BB)
      }));
      const {
        height: OB,
        width: YB,
        finalWidth: iB,
        finalHeight: pB
      } = fB(BB, IB, oB), aB = {
        width: YB,
        height: OB
      };
      if (!OB || !YB) return void zB.d.Error("Invalid 'size' parameter !");
      BB.skipFrameRender = !0;
      const HB = BB.getRenderWidth,
        MB = BB.getRenderHeight;
      BB.getRenderWidth = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && BB._currentRenderTarget ? BB._currentRenderTarget.width : YB
      }, BB.getRenderHeight = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && BB._currentRenderTarget ? BB._currentRenderTarget.height : OB
      }, BB.onResizeObservable.hasObservers() && BB.onResizeObservable.notifyObservers(BB);
      const jB = new JB.c("screenShot", aB, wB, !1, !1, 0, !1, TB.e.BILINEAR_SAMPLINGMODE, void 0, yB, void 0, void 0, void 0, kB);
      jB.renderList = wB.meshes.slice(), jB.samples = kB, jB.renderSprites = FB, jB.activeCamera = IB, jB.forceLayerMaskCheck = UB, dB?.(jB);
      const PB = CB || NB.DumpData,
        RB = () => {
          wB.incrementRenderId(), wB.resetCachedMaterial(), (0, qB.f)((() => jB.isReadyForRendering() && IB.isReady(!0)), (() => {
            BB.onEndFrameObservable.addOnce((() => {
              iB === YB && pB === OB ? jB.readPixels(void 0, void 0, void 0, !1).then((BB => {
                PB(YB, OB, BB, GB, vB, nB, !0, void 0, WB), jB.dispose()
              })) : (BB.isWebGPU ? ZB.e(375).then((() => ZB(61477))) : ZB.e(376).then((() => ZB(61482)))).then((async () => await (0, gB.b)("pass", jB.getInternalTexture(), wB, void 0, void 0, void 0, iB, pB).then((IB => {
                BB._readTexturePixels(IB, iB, pB, -1, 0, null, !0, !1, 0, 0).then((BB => {
                  PB(iB, pB, BB, GB, vB, nB, !0, void 0, WB), IB.dispose()
                }))
              }))))
            })), wB.incrementRenderId(), wB.resetCachedMaterial();
            const TB = wB.activeCamera,
              JB = wB.activeCameras,
              oB = IB.outputRenderTarget,
              kB = wB.spritesEnabled;
            wB.activeCamera = IB, wB.activeCameras = null, IB.outputRenderTarget = jB, wB.spritesEnabled = FB;
            const cB = wB.meshes;
            wB.meshes = jB.renderList || wB.meshes;
            try {
              wB.render()
            } finally {
              wB.activeCamera = TB, wB.activeCameras = JB, IB.outputRenderTarget = oB, wB.spritesEnabled = kB, wB.meshes = cB, BB.getRenderWidth = HB, BB.getRenderHeight = MB, BB.onResizeObservable.hasObservers() && BB.onResizeObservable.notifyObservers(BB), IB.getProjectionMatrix(!0), BB.skipFrameRender = !1
            }
          }), (() => {
            BB.skipFrameRender = !1, BB.getRenderWidth = HB, BB.getRenderHeight = MB, sB?.()
          }), void 0, QB)
        };
      if (cB) {
        const BB = new hB("antialiasing", 1, wB.activeCamera);
        jB.addPostProcess(BB), BB.autoClear = !0, BB.onEffectCreatedObservable.addOnce((BB => {
          BB.isReady() ? RB() : BB.onCompiled = () => {
            RB()
          }
        }))
      } else RB()
    }
    async function eB(BB, IB, ZB) {
      let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        oB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        GB = arguments.length > 6 ? arguments[6] : void 0,
        vB = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        kB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        cB = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
        nB = arguments.length > 10 ? arguments[10] : void 0,
        hB = arguments.length > 11 ? arguments[11] : void 0,
        zB = arguments.length > 12 ? arguments[12] : void 0;
      return await new Promise(((FB, NB) => {
        LB(BB, IB, ZB, (BB => {
          "undefined" !== typeof BB ? FB(BB) : NB(new Error("Data is undefined"))
        }), TB, JB, oB, GB, vB, kB, cB, nB, hB, zB)
      }))
    }
    async function uB(BB, IB, ZB) {
      let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        oB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        GB = arguments.length > 6 ? arguments[6] : void 0,
        vB = arguments.length > 7 ? arguments[7] : void 0,
        kB = arguments.length > 8 ? arguments[8] : void 0,
        cB = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        nB = arguments.length > 10 ? arguments[10] : void 0;
      const hB = BB.engine,
        zB = BB.textureManager,
        {
          height: FB,
          width: gB,
          finalWidth: qB,
          finalHeight: UB
        } = fB(hB, IB, ZB),
        WB = {
          width: gB,
          height: FB
        },
        dB = kB || NB.DumpData,
        CB = BB.tasks,
        QB = CB.length,
        sB = BB.pausedExecution,
        OB = hB.getCaps().parallelShaderCompile;
      zB.setBackBufferTextures(0, 0, {
        size: WB,
        options: {
          createMipMaps: !1,
          samples: JB,
          types: [0],
          formats: [5],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot color"]
        },
        sizeIsPercentage: !1
      }, {
        size: WB,
        options: {
          createMipMaps: !1,
          samples: JB,
          types: [0],
          formats: [hB.isStencilEnable ? 13 : 14],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot depth"]
        },
        sizeIsPercentage: !1
      });
      let iB = yB;
      if (oB) {
        const IB = new wB("fxaa", BB);
        IB.sourceTexture = iB, iB = IB.outputTexture, BB.addTask(IB)
      }
      if (qB !== gB || UB !== FB) {
        const IB = new YB("pass", BB);
        IB.sourceTexture = iB, IB.targetTexture = BB.textureManager.createRenderTargetTexture("pass_output", {
          size: {
            width: qB,
            height: UB
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
        }), iB = IB.outputTexture, BB.addTask(IB)
      }
      const pB = PB.FindMainObjectRenderer(BB);
      let aB = null;
      pB && (aB = pB.camera, pB.camera = IB), hB.getCaps().parallelShaderCompile = void 0, await BB.buildAsync();
      const HB = nB ?? (zB.hasHistoryTextures ? 32 : 1);
      for (let NB = 0; NB < HB; ++NB) BB.execute();
      BB.pausedExecution = !0, hB.getCaps().parallelShaderCompile = OB;
      for (let NB = QB; NB < CB.length; ++NB) BB.tasks[NB].dispose();
      BB.tasks.length = QB, pB && aB && (pB.camera = aB);
      const MB = BB.textureManager.getTextureFromHandle(iB);
      return MB.incrementReferences(), zB.resetBackBufferTextures(), await BB.buildAsync(), BB.pausedExecution = sB, new Promise((BB => {
        hB._readTexturePixels(MB, qB, UB, -1, 0, null, !0, !1, 0, 0).then((async IB => {
          MB.dispose(), dB(qB, UB, IB, cB ? void 0 : IB => BB(IB), TB, GB, !0, void 0, vB), cB && BB(null)
        }))
      }))
    }

    function fB(BB, IB, ZB) {
      let TB = 0,
        JB = 0,
        oB = 0,
        GB = 0;
      if ("object" === typeof ZB) {
        const vB = ZB.precision ? Math.abs(ZB.precision) : 1;
        ZB.width && ZB.height ? (TB = ZB.height * vB, JB = ZB.width * vB) : ZB.width && !ZB.height ? (JB = ZB.width * vB, TB = Math.round(JB / BB.getAspectRatio(IB))) : ZB.height && !ZB.width ? (TB = ZB.height * vB, JB = Math.round(TB * BB.getAspectRatio(IB))) : (JB = Math.round(BB.getRenderWidth() * vB), TB = Math.round(JB / BB.getAspectRatio(IB))), ZB.finalWidth && ZB.finalHeight ? (GB = ZB.finalHeight, oB = ZB.finalWidth) : ZB.finalWidth && !ZB.finalHeight ? (oB = ZB.finalWidth, GB = Math.round(oB / BB.getAspectRatio(IB))) : ZB.finalHeight && !ZB.finalWidth ? (GB = ZB.finalHeight, oB = Math.round(GB * BB.getAspectRatio(IB))) : (oB = JB, GB = TB)
      } else isNaN(ZB) || (TB = ZB, JB = ZB, oB = ZB, GB = ZB);
      return JB && (JB = Math.floor(JB)), TB && (TB = Math.floor(TB)), oB && (oB = Math.floor(oB)), GB && (GB = Math.floor(GB)), {
        height: 0 | TB,
        width: 0 | JB,
        finalWidth: 0 | oB,
        finalHeight: 0 | GB
      }
    }
    const lB = {
      CreateScreenshot: rB,
      CreateScreenshotAsync: mB,
      CreateScreenshotWithResizeAsync: XB,
      CreateScreenshotUsingRenderTarget: LB,
      CreateScreenshotUsingRenderTargetAsync: eB,
      CreateScreenshotForFrameGraphAsync: uB
    };
    let AB = !1;

    function tB() {
      if (AB) return;
      AB = !0;
      FB.j.CreateScreenshot = rB, FB.j.CreateScreenshotAsync = mB, FB.j.CreateScreenshotUsingRenderTarget = LB, FB.j.CreateScreenshotUsingRenderTargetAsync = eB
    }
    tB()
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);