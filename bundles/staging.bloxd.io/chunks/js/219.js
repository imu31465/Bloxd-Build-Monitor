export const id = 219;
export const ids = [219, 220];
export const modules = {
  39007: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => oB,
      h: () => LB
    });
    var VB = dB(38745),
      yB = dB(38750),
      pB = dB(36126),
      lB = dB(36183),
      JB = dB(39016),
      YB = dB(38980),
      gB = dB(36166);
    let oB = (() => {
        var BB;
        let TB, dB, YB = JB.c,
          gB = [],
          oB = [],
          kB = [],
          LB = [];
        return BB = class extends YB {
          constructor(BB, TB, dB, yB) {
            super(BB, dB, yB), this.groundColor = (0, VB.h)(this, gB, new lB.c(0, 0, 0)), this.direction = ((0, VB.h)(this, oB), (0, VB.h)(this, kB, void 0)), (0, VB.h)(this, LB), this.direction = TB || pB.p.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(BB) {
            return this.direction = pB.p.Normalize(BB.subtract(pB.p.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(BB, TB) {
            const dB = pB.p.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", dB.x, dB.y, dB.z, 0, TB), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), TB), this
          }
          transferToNodeMaterialEffect(BB, TB) {
            const dB = pB.p.Normalize(this.direction);
            return BB.setFloat3(TB, dB.x, dB.y, dB.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = pB.b.Identity()), this._worldMatrix
          }
          getTypeID() {
            return JB.c.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(BB, TB) {
            BB["HEMILIGHT" + TB] = !0
          }
        }, (() => {
          const pB = "function" === typeof Symbol && Symbol.metadata ? Object.create(YB[Symbol.metadata] ?? null) : void 0;
          TB = [(0, yB.s)()], dB = [(0, yB.T)()], (0, VB.g)(null, null, TB, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "groundColor" in BB,
              get: BB => BB.groundColor,
              set: (BB, TB) => {
                BB.groundColor = TB
              }
            },
            metadata: pB
          }, gB, oB), (0, VB.g)(null, null, dB, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: BB => "direction" in BB,
              get: BB => BB.direction,
              set: (BB, TB) => {
                BB.direction = TB
              }
            },
            metadata: pB
          }, kB, LB), pB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: pB
          })
        })(), BB
      })(),
      kB = !1;

    function LB() {
      kB || (kB = !0, YB.e.AddNodeConstructor("Light_Type_3", ((BB, TB) => () => new oB(BB, pB.p.Zero(), TB))), (0, gB.g)("BABYLON.HemisphericLight", oB))
    }
  },
  36688: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => yB
    });
    var VB = dB(36690);
    class yB {
      static GetPlanes(BB) {
        const TB = [];
        for (let dB = 0; dB < 6; dB++) TB.push(new VB.d(0, 0, 0, 0));
        return yB.GetPlanesToRef(BB, TB), TB
      }
      static GetNearPlaneToRef(BB, TB) {
        const dB = BB.m;
        TB.normal.x = dB[3] + dB[2], TB.normal.y = dB[7] + dB[6], TB.normal.z = dB[11] + dB[10], TB.d = dB[15] + dB[14], TB.normalize()
      }
      static GetFarPlaneToRef(BB, TB) {
        const dB = BB.m;
        TB.normal.x = dB[3] - dB[2], TB.normal.y = dB[7] - dB[6], TB.normal.z = dB[11] - dB[10], TB.d = dB[15] - dB[14], TB.normalize()
      }
      static GetLeftPlaneToRef(BB, TB) {
        const dB = BB.m;
        TB.normal.x = dB[3] + dB[0], TB.normal.y = dB[7] + dB[4], TB.normal.z = dB[11] + dB[8], TB.d = dB[15] + dB[12], TB.normalize()
      }
      static GetRightPlaneToRef(BB, TB) {
        const dB = BB.m;
        TB.normal.x = dB[3] - dB[0], TB.normal.y = dB[7] - dB[4], TB.normal.z = dB[11] - dB[8], TB.d = dB[15] - dB[12], TB.normalize()
      }
      static GetTopPlaneToRef(BB, TB) {
        const dB = BB.m;
        TB.normal.x = dB[3] - dB[1], TB.normal.y = dB[7] - dB[5], TB.normal.z = dB[11] - dB[9], TB.d = dB[15] - dB[13], TB.normalize()
      }
      static GetBottomPlaneToRef(BB, TB) {
        const dB = BB.m;
        TB.normal.x = dB[3] + dB[1], TB.normal.y = dB[7] + dB[5], TB.normal.z = dB[11] + dB[9], TB.d = dB[15] + dB[13], TB.normalize()
      }
      static GetPlanesToRef(BB, TB) {
        yB.GetNearPlaneToRef(BB, TB[0]), yB.GetFarPlaneToRef(BB, TB[1]), yB.GetLeftPlaneToRef(BB, TB[2]), yB.GetRightPlaneToRef(BB, TB[3]), yB.GetTopPlaneToRef(BB, TB[4]), yB.GetBottomPlaneToRef(BB, TB[5])
      }
      static IsPointInFrustum(BB, TB) {
        for (let dB = 0; dB < 6; dB++)
          if (TB[dB].dotCoordinate(BB) < 0) return !1;
        return !0
      }
    }
  },
  36690: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => yB
    });
    var VB = dB(36126);
    class yB {
      constructor(BB, TB, dB, yB) {
        this.normal = new VB.p(BB, TB, dB), this.d = yB
      }
      FVB() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new yB(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let TB = 0;
        return 0 !== BB && (TB = 1 / BB), this.normal.x *= TB, this.normal.y *= TB, this.normal.z *= TB, this.d *= TB, this
      }
      transform(BB) {
        const TB = yB._TmpMatrix;
        BB.invertToRef(TB);
        const dB = TB.m,
          VB = this.normal.x,
          pB = this.normal.y,
          lB = this.normal.z,
          JB = this.d,
          YB = VB * dB[0] + pB * dB[1] + lB * dB[2] + JB * dB[3],
          gB = VB * dB[4] + pB * dB[5] + lB * dB[6] + JB * dB[7],
          oB = VB * dB[8] + pB * dB[9] + lB * dB[10] + JB * dB[11],
          kB = VB * dB[12] + pB * dB[13] + lB * dB[14] + JB * dB[15];
        return new yB(YB, gB, oB, kB)
      }
      dotCoordinate(BB) {
        return this.normal.x * BB.x + this.normal.y * BB.y + this.normal.z * BB.z + this.d
      }
      copyFromPoints(BB, TB, dB) {
        const VB = TB.x - BB.x,
          yB = TB.y - BB.y,
          pB = TB.z - BB.z,
          lB = dB.x - BB.x,
          JB = dB.y - BB.y,
          YB = dB.z - BB.z,
          gB = yB * YB - pB * JB,
          oB = pB * lB - VB * YB,
          kB = VB * JB - yB * lB,
          LB = Math.sqrt(gB * gB + oB * oB + kB * kB);
        let OB;
        return OB = 0 !== LB ? 1 / LB : 0, this.normal.x = gB * OB, this.normal.y = oB * OB, this.normal.z = kB * OB, this.d = -(this.normal.x * BB.x + this.normal.y * BB.y + this.normal.z * BB.z), this
      }
      isFrontFacingTo(BB, TB) {
        return VB.p.Dot(this.normal, BB) <= TB
      }
      signedDistanceTo(BB) {
        return VB.p.Dot(BB, this.normal) + this.d
      }
      static FromArray(BB) {
        return new yB(BB[0], BB[1], BB[2], BB[3])
      }
      static FromPoints(BB, TB, dB) {
        const VB = new yB(0, 0, 0, 0);
        return VB.copyFromPoints(BB, TB, dB), VB
      }
      static FromPositionAndNormal(BB, TB) {
        const dB = new yB(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(BB, TB, dB)
      }
      static FromPositionAndNormalToRef(BB, TB, dB) {
        return dB.normal.bdB(TB), dB.normal.normalize(), dB.d = -BB.dot(dB.normal), dB
      }
      static SignedDistanceToPlaneFromPositionAndNormal(BB, TB, dB) {
        const yB = -(TB.x * BB.x + TB.y * BB.y + TB.z * BB.z);
        return VB.p.Dot(dB, TB) + yB
      }
    }
    yB._TmpMatrix = VB.b.Identity()
  },
  37029: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => VB
    });
    class VB {
      constructor(BB, TB, dB, VB) {
        this.x = BB, this.y = TB, this.width = dB, this.height = VB
      }
      toGlobal(BB, TB) {
        return new VB(this.x * BB, this.y * TB, this.width * BB, this.height * TB)
      }
      toGlobalToRef(BB, TB, dB) {
        return dB.x = this.x * BB, dB.y = this.y * TB, dB.width = this.width * BB, dB.height = this.height * TB, this
      }
      clone() {
        return new VB(this.x, this.y, this.width, this.height)
      }
    }
  },
  37646: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => pB
    });
    var VB = dB(37651);
    const yB = (BB, TB, dB) => BB ? BB.getClassName && "Mesh" === BB.getClassName() ? null : !BB.getClassName || "SubMesh" !== BB.getClassName() && "PhysicsBody" !== BB.getClassName() ? BB.clone ? BB.clone() : Array.isArray(BB) ? BB.slice() : dB && "object" === typeof BB ? {
      ...BB
    } : null : BB.clone(TB) : null;
    class pB {
      static DeepCopy(BB, TB, dB, pB) {
        let lB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const JB = function(BB) {
          const TB = [];
          do {
            const dB = Object.getOwnPropertyNames(BB);
            for (const BB of dB) - 1 === TB.indexOf(BB) && TB.push(BB)
          } while (BB = Object.getPrototypeOf(BB));
          return TB
        }(BB);
        for (const gB of JB) {
          if ("_" === gB[0] && (!pB || -1 === pB.indexOf(gB))) continue;
          if (gB.endsWith("Observable")) continue;
          if (dB && -1 !== dB.indexOf(gB)) continue;
          const JB = BB[gB],
            oB = typeof JB;
          if ("function" !== oB) try {
            if ("object" === oB)
              if (JB instanceof Uint8Array) TB[gB] = Uint8Array.from(JB);
              else if (JB instanceof Array) {
              if (TB[gB] = [], JB.length > 0)
                if ("object" == typeof JB[0])
                  for (let BB = 0; BB < JB.length; BB++) {
                    const dB = yB(JB[BB], TB, lB); - 1 === TB[gB].indexOf(dB) && TB[gB].push(dB)
                  } else TB[gB] = JB.slice(0)
            } else TB[gB] = yB(JB, TB, lB);
            else TB[gB] = JB
          } catch (YB) {
            VB.b.Warn(YB.message)
          }
        }
      }
    }
  },
  36822: (BB, TB, dB) => {
    function VB() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (BB => {
        const TB = 16 * Math.random() | 0;
        return ("x" === BB ? TB : 3 & TB | 8).toString(16)
      }))
    }
    dB.d(TB, {
      c: () => VB
    })
  },
  37651: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => VB
    });
    class VB {
      static _CheckLimit(BB, TB) {
        let dB = VB._LogLimitOutputs[BB];
        return dB ? dB.current++ : (dB = {
          limit: TB,
          current: 1
        }, VB._LogLimitOutputs[BB] = dB), dB.current <= dB.limit
      }
      static _GenerateLimitMessage(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const dB = VB._LogLimitOutputs[BB];
        if (!dB || !VB.MessageLimitReached) return;
        const yB = this._Levels[TB];
        dB.current === dB.limit && VB[yB.name](VB.MessageLimitReached.replace(/%LIMIT%/g, "" + dB.limit).replace(/%TYPE%/g, yB.name ?? ""))
      }
      static _AddLogEntry(BB) {
        VB._LogCache = BB + VB._LogCache, VB.OnNewCacheEntry && VB.OnNewCacheEntry(BB)
      }
      static _FormatMessage(BB) {
        const TB = BB => BB < 10 ? "0" + BB : "" + BB,
          dB = new Date;
        return "[" + TB(dB.getHours()) + ":" + TB(dB.getMinutes()) + ":" + TB(dB.getSeconds()) + "]: " + BB
      }
      static _LogDisabled(BB, TB) {}
      static _LogEnabled() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          TB = arguments.length > 1 ? arguments[1] : void 0,
          dB = arguments.length > 2 ? arguments[2] : void 0;
        const yB = Array.isArray(TB) ? TB[0] : TB;
        if (void 0 !== dB && !VB._CheckLimit(yB, dB)) return;
        const pB = VB._FormatMessage(yB),
          lB = this._Levels[BB],
          JB = Array.isArray(TB) ? TB.slice(1) : [];
        lB.logFunc && lB.logFunc("BJS - " + pB, ...JB);
        const YB = `<div style='color:${lB.color}'>${pB}</div><br>`;
        VB._AddLogEntry(YB), VB._GenerateLimitMessage(yB, BB)
      }
      static get LogCache() {
        return VB._LogCache
      }
      static ClearLogCache() {
        VB._LogCache = "", VB._LogLimitOutputs = {}, VB.errorsCount = 0
      }
      static set LogLevels(BB) {
        VB.Log = VB._LogDisabled, VB.Warn = VB._LogDisabled, VB.Error = VB._LogDisabled;
        const TB = [VB.MessageLogLevel, VB.WarningLogLevel, VB.ErrorLogLevel];
        for (const dB of TB)
          if ((BB & dB) === dB) {
            const BB = this._Levels[dB];
            VB[BB.name] = VB._LogEnabled.bind(VB, dB)
          }
      }
    }
    VB.NoneLogLevel = 0, VB.MessageLogLevel = 1, VB.WarningLogLevel = 2, VB.ErrorLogLevel = 4, VB.AllLogLevel = 7, VB.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", VB._LogCache = "", VB._LogLimitOutputs = {}, VB._Levels = [{}, {
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
    }], VB.errorsCount = 0, VB.Log = VB._LogEnabled.bind(VB, VB.MessageLogLevel), VB.Warn = VB._LogEnabled.bind(VB, VB.WarningLogLevel), VB.Error = VB._LogEnabled.bind(VB, VB.ErrorLogLevel)
  },
  59713: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      CreateScreenshot: () => PB,
      CreateScreenshotAsync: () => QB,
      CreateScreenshotForFrameGraphAsync: () => XB,
      CreateScreenshotUsingRenderTarget: () => aB,
      CreateScreenshotUsingRenderTargetAsync: () => ZB,
      CreateScreenshotWithResizeAsync: () => RB,
      RegisterScreenshotTools: () => GB,
      ScreenshotTools: () => hB
    });
    var VB = dB(39218),
      yB = dB(40516),
      pB = dB(40496),
      lB = dB(38772),
      JB = dB(40501),
      YB = dB(36148),
      gB = dB(36126);
    class oB extends JB.g {
      static _GetDefines(BB) {
        if (!BB) return null;
        return BB.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
      }
      _gatherImports(BB, TB) {
        BB ? (this._webGPUReady = !0, TB.push(Promise.all([dB.e(357).then((() => dB(60064))), dB.e(358).then((() => dB(60066)))]))) : TB.push(Promise.all([dB.e(359).then((() => dB(60069))), dB.e(360).then((() => dB(60073)))]))
      }
      constructor(BB) {
        const TB = {
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: BB,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || YB.c.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          vertexShader: oB.VertexUrl,
          fragmentShader: oB.FragmentUrl,
          uniforms: oB.Uniforms
        };
        super({
          ...TB,
          defines: oB._GetDefines(TB.engine)
        }), this.texelSize = new gB.l(0, 0)
      }
      bind() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.bind(BB), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
      }
    }
    oB.VertexUrl = "fxaa", oB.FragmentUrl = "fxaa", oB.Uniforms = ["texelSize"];
    class kB extends pB.e {
      getClassName() {
        return "FxaaPostProcess"
      }
      constructor(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          yB = arguments.length > 3 ? arguments[3] : void 0,
          pB = arguments.length > 4 ? arguments[4] : void 0,
          lB = arguments.length > 5 ? arguments[5] : void 0,
          JB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const YB = {
          uniforms: oB.Uniforms,
          size: "number" === typeof TB ? TB : void 0,
          camera: dB,
          samplingMode: yB || VB.f.BILINEAR_SAMPLINGMODE,
          engine: pB,
          reusable: lB,
          textureType: JB,
          ...TB
        };
        super(BB, oB.FragmentUrl, {
          effectWrapper: "number" !== typeof TB && TB.effectWrapper ? void 0 : new oB(BB, pB, YB),
          ...YB
        }), this.onApplyObservable.add((BB => {
          this._effectWrapper.texelSize = this.texelSize
        }))
      }
      static _Parse(BB, TB, dB, VB) {
        return lB.c.Parse((() => new kB(BB.name, BB.options, TB, BB.renderTargetSamplingMode, dB.PD(), BB.reusable)), BB, dB, VB)
      }
    }
    var LB = dB(37651),
      OB = dB(38848),
      DB = dB(40532),
      uB = dB(40510),
      HB = dB(38645);
    const EB = 0;
    class vB {
      constructor(BB, TB, dB) {
        this.name = BB, this._parentTask = TB, this._context = dB, this.disabled = !1
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
    class mB extends vB {
      static IsObjectListPass(BB) {
        return void 0 !== BB.setObjectList
      }
      get objectList() {
        return this._objectList
      }
      setObjectList(BB) {
        this._objectList = BB
      }
      constructor(BB, TB, dB, VB) {
        super(BB, TB, dB), this._engine = VB
      }
      _isValid() {
        const BB = super._isValid();
        return BB || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
      }
    }
    class iB extends vB {
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
      constructor(BB, TB, dB, VB) {
        super(BB, TB, dB), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = VB
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
            for (const TB of BB) this._dependencies.add(TB);
          else this._dependencies.add(BB)
      }
      collectDependencies(BB) {
        const TB = this._dependencies.keys();
        for (let dB = TB.next(); !0 !== dB.done; dB = TB.next()) BB.add(dB.value);
        if (void 0 !== this._renderTarget)
          if (Array.isArray(this._renderTarget))
            for (const dB of this._renderTarget) void 0 !== dB && BB.add(dB);
          else BB.add(this._renderTarget);
        void 0 !== this._renderTargetDepth && BB.add(this._renderTargetDepth)
      }
      setOutputLayerAndFaceIndices(BB) {
        const TB = this.frameGraphRenderTarget.renderTargetWrapper;
        if (TB)
          for (const dB of BB) TB.setLayerAndFaceIndex(dB.targetIndex, dB.layerIndex, dB.faceIndex)
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
    var NB = dB(36150);
    class tB {
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
      constructor(BB, TB) {
        this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new NB.e, this.onBeforeTaskExecute = new NB.e, this.onAfterTaskExecute = new NB.e, this.name = BB, this._frameGraph = TB, this._reset()
      }
      _reset() {
        for (const BB of this._passes) BB._dispose();
        for (const BB of this._passesDisabled) BB._dispose();
        this._passes.length = 0, this._passesDisabled.length = 0
      }
      _addPass(BB, TB) {
        TB ? this._passesDisabled.push(BB) : this._passes.push(BB)
      }
      _checkTask() {
        let BB, TB = null,
          dB = null;
        for (const JB of this._passes) {
          const VB = JB._isValid();
          if (VB) throw new Error(`Pass "${JB.name}" is not valid. ${VB}`);
          if (iB.IsRenderPass(JB)) {
            const BB = Array.isArray(JB.renderTarget) ? JB.renderTarget : [JB.renderTarget];
            TB = [];
            for (const dB of BB) void 0 !== dB && TB.push(this._frameGraph.textureManager.getTextureFromHandle(dB));
            dB = void 0 !== JB.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(JB.renderTargetDepth) : null
          } else mB.IsObjectListPass(JB) && (BB = JB.objectList)
        }
        let VB, yB = null,
          pB = [],
          lB = null;
        for (const JB of this._passesDisabled) {
          const BB = JB._isValid();
          if (BB) throw new Error(`Pass "${JB.name}" is not valid. ${BB}`);
          if (iB.IsRenderPass(JB)) {
            const BB = Array.isArray(JB.renderTarget) ? JB.renderTarget : [JB.renderTarget];
            yB = [];
            for (const TB of BB) void 0 !== TB && yB.push(this._frameGraph.textureManager.getTextureFromHandle(TB));
            pB = BB, lB = void 0 !== JB.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(JB.renderTargetDepth) : null
          } else mB.IsObjectListPass(JB) && (VB = JB.objectList)
        }
        if (this._passesDisabled.length > 0) {
          if (!this._checkSameRenderTarget(TB, yB)) {
            let BB = !0;
            for (const TB of pB)
              if (void 0 !== TB && !this._frameGraph.textureManager.isHistoryTexture(TB)) {
                BB = !1;
                break
              } if (!BB) throw new Error(`The output texture of the task "${this.name}" is different when it is enabled or disabled.`)
          }
          if (dB !== lB && null !== lB) throw new Error(`The output depth texture of the task "${this.name}" is different when it is enabled or disabled.`);
          if (BB !== VB && null !== VB) throw new Error(`The output object list of the task "${this.name}" is different when it is enabled or disabled.`)
        }
      }
      _execute() {
        const BB = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
        this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const TB of BB) TB._execute()
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
      _checkSameRenderTarget(BB, TB) {
        if (null === BB || null === TB) return BB === TB;
        if (BB.length !== TB.length) return !1;
        for (let dB = 0; dB < BB.length; dB++)
          if (BB[dB] !== TB[dB]) return !1;
        return !0
      }
    }
    class fB extends tB {
      get alphaMode() {
        return this.postProcess.alphaMode
      }
      set alphaMode(BB) {
        this.postProcess.alphaMode = BB
      }
      get drawWrapper() {
        return this._postProcessDrawWrapper
      }
      constructor(BB, TB, dB) {
        super(BB, TB), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = dB, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture = this._frameGraph.textureManager.createDanglingHandle(), this.outputDepthAttachmentTexture = this._frameGraph.textureManager.createDanglingHandle()
      }
      isReady() {
        return this.postProcess.isReady()
      }
      getClassName() {
        return "FrameGraphPostProcessTask"
      }
      record() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          TB = arguments.length > 1 ? arguments[1] : void 0,
          dB = arguments.length > 2 ? arguments[2] : void 0;
        if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
        const VB = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
        if (VB && (VB.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, VB), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentTexture, this.depthAttachmentTexture), VB) {
          const BB = this._frameGraph.textureManager.getTextureAbsoluteDimensions(VB);
          this._sourceWidth = BB.width, this._sourceHeight = BB.height
        }
        const yB = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
        this._outputWidth = yB.size.width, this._outputHeight = yB.size.height;
        const pB = this._frameGraph.addRenderPass(this.name);
        if (pB.depthReadOnly = this.depthReadOnly, pB.stencilReadOnly = this.stencilReadOnly, pB.addDependencies(this.sourceTexture), pB.setRenderTarget(this.outputTexture), pB.setRenderTargetDepth(this.depthAttachmentTexture), pB.setExecuteFunc((BB => {
            BB.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && BB.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), TB?.(BB), this.viewport && BB.setViewport(this.viewport), BB.applyFullScreenEffect(this._postProcessDrawWrapper, (() => {
              void 0 !== this.sourceTexture && BB.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), dB?.(BB), this.postProcess.bind()
            }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), BB.restoreDefaultFramebuffer(), BB.popDebugGroup()
          })), !BB) {
          const BB = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
          BB.depthReadOnly = this.depthReadOnly, BB.stencilReadOnly = this.stencilReadOnly, BB.addDependencies(this.sourceTexture), BB.setRenderTarget(this.outputTexture), BB.setRenderTargetDepth(this.depthAttachmentTexture), BB.setExecuteFunc((BB => {
            void 0 !== this.sourceTexture && 0 === this.alphaMode && (this.viewport && BB.setViewport(this.viewport), BB.copyTexture(this.sourceTexture, void 0, void 0 !== this.viewport))
          }))
        }
        return pB
      }
      dispose() {
        this.postProcess.dispose(), super.dispose()
      }
    }
    class sB extends fB {
      constructor(BB, TB, dB) {
        super(BB, TB, dB || new oB(BB, TB.engine))
      }
      getClassName() {
        return "FrameGraphFXAATask"
      }
      record() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          TB = arguments.length > 1 ? arguments[1] : void 0,
          dB = arguments.length > 2 ? arguments[2] : void 0;
        const VB = super.record(BB, TB, dB);
        return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, VB
      }
    }
    var MB = dB(40525);
    class zB extends fB {
      constructor(BB, TB, dB) {
        super(BB, TB, dB || new MB.g(BB, TB.engine))
      }
      getClassName() {
        return "FrameGraphPassTask"
      }
    }
    var wB = dB(38843),
      UB = dB(38930),
      FB = dB(38889),
      KB = dB(39007),
      rB = dB(36183);
    class IB {
      getRenderCamera(BB) {
        if (this._renderCamera) return this._renderCamera;
        {
          let TB;
          return TB = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, BB && TB && TB.isRigCamera ? TB.rigParent : TB
        }
      }
      setRenderCamera(BB) {
        this._renderCamera = BB
      }
      _getSharedGizmoLight() {
        return this._sharedGizmoLight || (this._sharedGizmoLight = new KB.d("shared gizmo light", new gB.p(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = rB.c.Gray()), this._sharedGizmoLight
      }
      static get DefaultUtilityLayer() {
        return null == IB._DefaultUtilityLayer ? IB._CreateDefaultUtilityLayerFromScene(YB.c.LastCreatedScene) : IB._DefaultUtilityLayer
      }
      static _CreateDefaultUtilityLayerFromScene(BB) {
        return IB._DefaultUtilityLayer = new IB(BB), IB._DefaultUtilityLayer.originalScene.lF.addOnce((() => {
          IB._DefaultUtilityLayer = null
        })), IB._DefaultUtilityLayer
      }
      static get DefaultKeepDepthUtilityLayer() {
        return null == IB._DefaultKeepDepthUtilityLayer ? IB._CreateDefaultKeepUtilityLayerFromScene(YB.c.LastCreatedScene) : IB._DefaultKeepDepthUtilityLayer
      }
      static _CreateDefaultKeepUtilityLayerFromScene(BB) {
        return IB._DefaultKeepDepthUtilityLayer = new IB(BB), IB._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, IB._DefaultKeepDepthUtilityLayer.originalScene.lF.addOnce((() => {
          IB._DefaultKeepDepthUtilityLayer = null
        })), IB._DefaultKeepDepthUtilityLayer
      }
      constructor(BB) {
        let TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.originalScene = BB, this.handleEvents = TB, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.processAllEvents = !1, this.pickingEnabled = !0, this.onPointerOutObservable = new NB.e, this.utilityLayerScene = new wB.g(BB.PD(), {
          virtual: !0,
          useFloatingOrigin: BB.floatingOriginMode
        }), this.utilityLayerScene.useRightHandedSystem = BB.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), TB && (this._originalPointerObserver = BB.onPrePointerObservable.add((TB => {
          if (!this.utilityLayerScene.activeCamera) return;
          if (!this.pickingEnabled) return;
          if (!this.processAllEvents && TB.type !== UB.d.POINTERMOVE && TB.type !== UB.d.POINTERUP && TB.type !== UB.d.POINTERDOWN && TB.type !== UB.d.POINTERDOUBLETAP) return;
          this.utilityLayerScene.pointerX = BB.pointerX, this.utilityLayerScene.pointerY = BB.pointerY;
          const dB = TB.event;
          if (BB.isPointerCaptured(dB.pointerId)) return void(this._pointerCaptures[dB.pointerId] = !1);
          const VB = dB => {
              let VB;
              if (TB.nearInteractionPickingInfo) VB = TB.nearInteractionPickingInfo.pickedMesh.jU() == dB ? TB.nearInteractionPickingInfo : new FB.b;
              else if (dB !== this.utilityLayerScene && TB.originalPickingInfo) VB = TB.originalPickingInfo;
              else {
                let yB = null;
                this._renderCamera && (yB = dB._activeCamera, dB._activeCamera = this._renderCamera, TB.ray = null), VB = TB.ray ? dB.pickWithRay(TB.ray) : dB.dO(BB.pointerX, BB.pointerY), yB && (dB._activeCamera = yB)
              }
              return VB
            },
            yB = VB(this.utilityLayerScene);
          if (!TB.ray && yB && (TB.ray = yB.ray), TB.originalPickingInfo?.aimTransform && yB && (yB.aimTransform = TB.originalPickingInfo.aimTransform, yB.gripTransform = TB.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(TB), this.onlyCheckPointerDownEvents && TB.type != UB.d.POINTERDOWN) return TB.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new UB.f(TB.type, TB.event, yB), TB.type), void(TB.type === UB.d.POINTERUP && this._pointerCaptures[dB.pointerId] && (this._pointerCaptures[dB.pointerId] = !1));
          if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) yB && yB.hit && (TB.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new UB.f(TB.type, TB.event, yB), TB.type), TB.skipOnPointerObservable = !0);
          else {
            const dB = VB(BB),
              pB = TB.event;
            dB && yB && (0 === yB.distance && dB.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(dB.pickedMesh) ? (this._notifyObservers(TB, dB, pB), TB.skipOnPointerObservable = !0) : TB.type === UB.d.POINTERDOWN ? (this._pointerCaptures[pB.pointerId] = !0, this._notifyObservers(TB, dB, pB)) : TB.type !== UB.d.POINTERMOVE && TB.type !== UB.d.POINTERUP || (this._lastPointerEvents[pB.pointerId] && (this.onPointerOutObservable.notifyObservers(pB.pointerId), delete this._lastPointerEvents[pB.pointerId]), this._notifyObservers(TB, dB, pB)) : !this._pointerCaptures[pB.pointerId] && (yB.distance < dB.distance || 0 === dB.distance) ? (this._notifyObservers(TB, yB, pB), TB.skipOnPointerObservable || (TB.skipOnPointerObservable = yB.distance > 0)) : !this._pointerCaptures[pB.pointerId] && yB.distance >= dB.distance && (this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(dB.pickedMesh) ? (this._notifyObservers(TB, dB, pB), TB.skipOnPointerObservable = !0) : (TB.type !== UB.d.POINTERMOVE && TB.type !== UB.d.POINTERUP || this._lastPointerEvents[pB.pointerId] && (this.onPointerOutObservable.notifyObservers(pB.pointerId), delete this._lastPointerEvents[pB.pointerId]), this._notifyObservers(TB, yB, pB))), TB.type === UB.d.POINTERUP && this._pointerCaptures[pB.pointerId] && (this._pointerCaptures[pB.pointerId] = !1))
          }
        })), this._originalPointerObserver && BB.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, dB || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((BB => {
          this.shouldRender && BB == this.getRenderCamera() && this.render()
        }))), this._sceneDisposeObserver = this.originalScene.lF.add((() => {
          this.dispose()
        })), this._updateCamera()
      }
      _notifyObservers(BB, TB, dB) {
        BB.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new UB.f(BB.type, BB.event, TB), BB.type), this._lastPointerEvents[dB.pointerId] = !0)
      }
      render() {
        if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
          const BB = this.utilityLayerScene.activeCamera.jU(),
            TB = this.utilityLayerScene.activeCamera;
          TB._scene = this.utilityLayerScene, TB.leftCamera && (TB.leftCamera._scene = this.utilityLayerScene), TB.rightCamera && (TB.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), TB._scene = BB, TB.leftCamera && (TB.leftCamera._scene = BB), TB.rightCamera && (TB.rightCamera._scene = BB)
        }
      }
      dispose() {
        this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.lF.remove(this._sceneDisposeObserver), this._originalPointerObserver && this.originalScene.onPrePointerObservable.remove(this._originalPointerObserver), this.utilityLayerScene.dispose()
      }
      _updateCamera() {
        this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
      }
    }
    IB._DefaultUtilityLayer = null, IB._DefaultKeepDepthUtilityLayer = null;
    const cB = {
      FindMainCamera: function(BB) {
        return BB.findMainCamera()
      },
      FindMainObjectRenderer: function(BB) {
        return BB.findMainObjectRenderer()
      },
      CreateUtilityLayerRenderer: function(BB) {
        let TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const dB = BB.Gu,
          VB = new IB(dB, TB, !0);
        VB.utilityLayerScene.activeCamera = dB.activeCamera;
        let yB = cB.FindMainCamera(dB.frameGraph);
        !yB && dB.cameras.length > 0 && (yB = dB.cameras[0]), yB && (VB.setRenderCamera(yB), VB.utilityLayerScene.activeCamera = yB);
        const pB = dB.onAfterRenderObservable.add((() => {
          VB.render()
        }));
        return VB.utilityLayerScene.lF.addOnce((() => {
          dB.onAfterRenderObservable.remove(pB)
        })), VB
      }
    };
    let SB = null;

    function PB(BB, TB, dB, VB) {
      let yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        pB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        lB = arguments.length > 6 ? arguments[6] : void 0,
        JB = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        YB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
      const {
        height: gB,
        width: oB
      } = WB(BB, TB, dB);
      if (!gB || !oB) return void LB.b.Error("Invalid 'size' parameter !");
      const kB = TB.jU();
      let DB = kB.activeCamera !== TB;
      if (kB.frameGraph) {
        const BB = cB.FindMainObjectRenderer(kB.frameGraph);
        BB && (DB = BB.camera !== TB)
      }
      DB ? aB(BB, TB, dB, (BB => {
        if (pB) {
          const TB = new Blob([BB]);
          OB.h.DownloadBlob(TB), VB && VB("")
        } else VB && VB(BB)
      }), yB, 1, BB.getCreationOptions().antialias, void 0, void 0, void 0, void 0, lB) : BB.onEndFrameObservable.addOnce((() => {
        SB || (SB = document.createElement("canvas")), SB.width = oB, SB.height = gB;
        const TB = SB.getContext("2d"),
          dB = BB.getRenderingCanvas();
        if (!TB || !dB) return void LB.b.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
        const DB = dB.width,
          uB = dB.height,
          HB = SB.width,
          EB = SB.height,
          vB = HB / DB,
          mB = EB / uB,
          iB = JB ? Math.max(vB, mB) : Math.min(vB, mB),
          NB = DB * iB,
          tB = uB * iB,
          fB = (HB - NB) / 2,
          sB = (EB - tB) / 2;
        TB.save(), TB.fillStyle = YB ? kB.clearColor.toHexString() : "rgba(0, 0, 0, 0)", TB.fillRect(0, 0, oB, gB), TB.restore(), TB.drawImage(dB, 0, 0, DB, uB, fB, sB, NB, tB), pB ? (OB.h.EncodeScreenshotCanvasData(SB, void 0, yB, void 0, lB), VB && VB("")) : OB.h.EncodeScreenshotCanvasData(SB, VB, yB, void 0, lB)
      }))
    }
    async function QB(BB, TB, dB) {
      let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        yB = arguments.length > 4 ? arguments[4] : void 0,
        pB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        lB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        JB = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      return await new Promise(((YB, gB) => {
        PB(BB, TB, dB, (BB => {
          "undefined" !== typeof BB ? YB(BB) : gB(new Error("Data is undefined"))
        }), VB, JB, yB, pB, lB)
      }))
    }
    async function RB(BB, TB, dB, VB) {
      let yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        pB = arguments.length > 5 ? arguments[5] : void 0,
        lB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return await new Promise((JB => {
        PB(BB, TB, {
          width: dB,
          height: VB
        }, (() => {
          JB()
        }), yB, !0, pB, lB)
      }))
    }

    function aB(BB, TB, pB, lB) {
      let JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        YB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
        gB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        oB = arguments.length > 7 ? arguments[7] : void 0,
        OB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        EB = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        vB = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
        mB = arguments.length > 11 ? arguments[11] : void 0,
        iB = arguments.length > 12 ? arguments[12] : void 0,
        NB = arguments.length > 13 ? arguments[13] : void 0,
        tB = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
        fB = arguments.length > 15 ? arguments[15] : void 0;
      const sB = TB.jU();
      if (sB.frameGraph) return void XB(sB.frameGraph, TB, pB, JB, YB, gB, oB, mB, NB, !lB).then((BB => {
        lB && lB(BB)
      }));
      const {
        height: MB,
        width: zB,
        finalWidth: wB,
        finalHeight: UB
      } = WB(BB, TB, pB), FB = {
        width: zB,
        height: MB
      };
      if (!MB || !zB) return void LB.b.Error("Invalid 'size' parameter !");
      BB.skipFrameRender = !0;
      const KB = BB.getRenderWidth,
        rB = BB.getRenderHeight;
      BB.getRenderWidth = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && BB._currentRenderTarget ? BB._currentRenderTarget.width : zB
      }, BB.getRenderHeight = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && BB._currentRenderTarget ? BB._currentRenderTarget.height : MB
      }, BB.onResizeObservable.hasObservers() && BB.onResizeObservable.notifyObservers(BB);
      const IB = new yB.b("screenShot", FB, sB, !1, !1, 0, !1, VB.f.BILINEAR_SAMPLINGMODE, void 0, EB, void 0, void 0, void 0, YB);
      IB.renderList = sB.meshes.slice(), IB.samples = YB, IB.renderSprites = OB, IB.activeCamera = TB, IB.forceLayerMaskCheck = vB, iB?.(IB);
      const cB = NB || DB.DumpData,
        SB = () => {
          sB.incrementRenderId(), sB.resetCachedMaterial(), (0, HB.c)((() => IB.isReadyForRendering() && TB.isReady(!0)), (() => {
            BB.onEndFrameObservable.addOnce((() => {
              wB === zB && UB === MB ? IB.readPixels(void 0, void 0, void 0, !1).then((BB => {
                cB(zB, MB, BB, lB, JB, oB, !0, void 0, mB), IB.dispose()
              })) : (BB.isWebGPU ? dB.e(353).then((() => dB(60006))) : dB.e(354).then((() => dB(60010)))).then((async () => await (0, uB.d)("pass", IB.getInternalTexture(), sB, void 0, void 0, void 0, wB, UB).then((TB => {
                BB._readTexturePixels(TB, wB, UB, -1, 0, null, !0, !1, 0, 0).then((BB => {
                  cB(wB, UB, BB, lB, JB, oB, !0, void 0, mB), TB.dispose()
                }))
              }))))
            })), sB.incrementRenderId(), sB.resetCachedMaterial();
            const VB = sB.activeCamera,
              yB = sB.activeCameras,
              pB = TB.outputRenderTarget,
              YB = sB.spritesEnabled;
            sB.activeCamera = TB, sB.activeCameras = null, TB.outputRenderTarget = IB, sB.spritesEnabled = OB;
            const gB = sB.meshes;
            sB.meshes = IB.renderList || sB.meshes;
            try {
              sB.render()
            } finally {
              sB.activeCamera = VB, sB.activeCameras = yB, TB.outputRenderTarget = pB, sB.spritesEnabled = YB, sB.meshes = gB, BB.getRenderWidth = KB, BB.getRenderHeight = rB, BB.onResizeObservable.hasObservers() && BB.onResizeObservable.notifyObservers(BB), TB.getProjectionMatrix(!0), BB.skipFrameRender = !1
            }
          }), (() => {
            BB.skipFrameRender = !1, BB.getRenderWidth = KB, BB.getRenderHeight = rB, fB?.()
          }), void 0, tB)
        };
      if (gB) {
        const BB = new kB("antialiasing", 1, sB.activeCamera);
        IB.addPostProcess(BB), BB.autoClear = !0, BB.onEffectCreatedObservable.addOnce((BB => {
          BB.isReady() ? SB() : BB.onCompiled = () => {
            SB()
          }
        }))
      } else SB()
    }
    async function ZB(BB, TB, dB) {
      let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        pB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        lB = arguments.length > 6 ? arguments[6] : void 0,
        JB = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        YB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        gB = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
        oB = arguments.length > 10 ? arguments[10] : void 0,
        kB = arguments.length > 11 ? arguments[11] : void 0,
        LB = arguments.length > 12 ? arguments[12] : void 0;
      return await new Promise(((OB, DB) => {
        aB(BB, TB, dB, (BB => {
          "undefined" !== typeof BB ? OB(BB) : DB(new Error("Data is undefined"))
        }), VB, yB, pB, lB, JB, YB, gB, oB, kB, LB)
      }))
    }
    async function XB(BB, TB, dB) {
      let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        pB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        lB = arguments.length > 6 ? arguments[6] : void 0,
        JB = arguments.length > 7 ? arguments[7] : void 0,
        YB = arguments.length > 8 ? arguments[8] : void 0,
        gB = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        oB = arguments.length > 10 ? arguments[10] : void 0;
      const kB = BB.engine,
        LB = BB.textureManager,
        {
          height: OB,
          width: uB,
          finalWidth: HB,
          finalHeight: vB
        } = WB(kB, TB, dB),
        mB = {
          width: uB,
          height: OB
        },
        iB = YB || DB.DumpData,
        NB = BB.tasks,
        tB = NB.length,
        fB = BB.pausedExecution,
        MB = kB.getCaps().parallelShaderCompile;
      LB.setBackBufferTextures(0, 0, {
        size: mB,
        options: {
          createMipMaps: !1,
          samples: yB,
          types: [0],
          formats: [5],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot color"]
        },
        sizeIsPercentage: !1
      }, {
        size: mB,
        options: {
          createMipMaps: !1,
          samples: yB,
          types: [0],
          formats: [kB.isStencilEnable ? 13 : 14],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot depth"]
        },
        sizeIsPercentage: !1
      });
      let wB = EB;
      if (pB) {
        const TB = new sB("fxaa", BB);
        TB.sourceTexture = wB, wB = TB.outputTexture, BB.addTask(TB)
      }
      if (HB !== uB || vB !== OB) {
        const TB = new zB("pass", BB);
        TB.sourceTexture = wB, TB.targetTexture = BB.textureManager.createRenderTargetTexture("pass_output", {
          size: {
            width: HB,
            height: vB
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
        }), wB = TB.outputTexture, BB.addTask(TB)
      }
      const UB = cB.FindMainObjectRenderer(BB);
      let FB = null;
      UB && (FB = UB.camera, UB.camera = TB), kB.getCaps().parallelShaderCompile = void 0, await BB.buildAsync();
      const KB = oB ?? (LB.hasHistoryTextures ? 32 : 1);
      for (let DB = 0; DB < KB; ++DB) BB.execute();
      BB.pausedExecution = !0, kB.getCaps().parallelShaderCompile = MB;
      for (let DB = tB; DB < NB.length; ++DB) BB.tasks[DB].dispose();
      BB.tasks.length = tB, UB && FB && (UB.camera = FB);
      const rB = BB.textureManager.getTextureFromHandle(wB);
      return rB.incrementReferences(), LB.resetBackBufferTextures(), await BB.buildAsync(), BB.pausedExecution = fB, new Promise((BB => {
        kB._readTexturePixels(rB, HB, vB, -1, 0, null, !0, !1, 0, 0).then((async TB => {
          rB.dispose(), iB(HB, vB, TB, gB ? void 0 : TB => BB(TB), VB, lB, !0, void 0, JB), gB && BB(null)
        }))
      }))
    }

    function WB(BB, TB, dB) {
      let VB = 0,
        yB = 0,
        pB = 0,
        lB = 0;
      if ("object" === typeof dB) {
        const JB = dB.precision ? Math.abs(dB.precision) : 1;
        dB.width && dB.height ? (VB = dB.height * JB, yB = dB.width * JB) : dB.width && !dB.height ? (yB = dB.width * JB, VB = Math.round(yB / BB.getAspectRatio(TB))) : dB.height && !dB.width ? (VB = dB.height * JB, yB = Math.round(VB * BB.getAspectRatio(TB))) : (yB = Math.round(BB.getRenderWidth() * JB), VB = Math.round(yB / BB.getAspectRatio(TB))), dB.finalWidth && dB.finalHeight ? (lB = dB.finalHeight, pB = dB.finalWidth) : dB.finalWidth && !dB.finalHeight ? (pB = dB.finalWidth, lB = Math.round(pB / BB.getAspectRatio(TB))) : dB.finalHeight && !dB.finalWidth ? (lB = dB.finalHeight, pB = Math.round(lB * BB.getAspectRatio(TB))) : (pB = yB, lB = VB)
      } else isNaN(dB) || (VB = dB, yB = dB, pB = dB, lB = dB);
      return yB && (yB = Math.floor(yB)), VB && (VB = Math.floor(VB)), pB && (pB = Math.floor(pB)), lB && (lB = Math.floor(lB)), {
        height: 0 | VB,
        width: 0 | yB,
        finalWidth: 0 | pB,
        finalHeight: 0 | lB
      }
    }
    const hB = {
      CreateScreenshot: PB,
      CreateScreenshotAsync: QB,
      CreateScreenshotWithResizeAsync: RB,
      CreateScreenshotUsingRenderTarget: aB,
      CreateScreenshotUsingRenderTargetAsync: ZB,
      CreateScreenshotForFrameGraphAsync: XB
    };
    let CB = !1;

    function GB() {
      if (CB) return;
      CB = !0;
      OB.h.CreateScreenshot = PB, OB.h.CreateScreenshotAsync = QB, OB.h.CreateScreenshotUsingRenderTarget = aB, OB.h.CreateScreenshotUsingRenderTargetAsync = ZB
    }
    GB()
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);