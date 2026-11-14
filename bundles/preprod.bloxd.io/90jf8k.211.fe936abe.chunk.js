export const id = 211;
export const ids = [211, 212];
export const modules = {
  38223: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => RF,
      g: () => eF
    });
    var CF = SF(37972),
      AF = SF(37974),
      uF = SF(35623),
      hF = SF(35678),
      bW = SF(38230),
      dF = SF(38187),
      PF = SF(35660);
    let RF = (() => {
        var FF;
        let WF, SF, dF = bW.c,
          PF = [],
          RF = [],
          iW = [],
          eF = [];
        return FF = class extends dF {
          constructor(FF, WF, SF, AF) {
            super(FF, SF, AF), this.groundColor = (0, CF.k)(this, PF, new hF.e(0, 0, 0)), this.direction = ((0, CF.k)(this, RF), (0, CF.k)(this, iW, void 0)), (0, CF.k)(this, eF), this.direction = WF || uF.r.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(FF) {
            return this.direction = uF.r.Normalize(FF.subtract(uF.r.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(FF, WF) {
            const SF = uF.r.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", SF.x, SF.y, SF.z, 0, WF), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), WF), this
          }
          transferToNodeMaterialEffect(FF, WF) {
            const SF = uF.r.Normalize(this.direction);
            return FF.setFloat3(WF, SF.x, SF.y, SF.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = uF.b.Identity()), this._worldMatrix
          }
          getTypeID() {
            return bW.c.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(FF, WF) {
            FF["HEMILIGHT" + WF] = !0
          }
        }, (() => {
          const uF = "function" === typeof Symbol && Symbol.metadata ? Object.create(dF[Symbol.metadata] ?? null) : void 0;
          WF = [(0, AF.o)()], SF = [(0, AF.G)()], (0, CF.j)(null, null, WF, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: FF => "groundColor" in FF,
              get: FF => FF.groundColor,
              set: (FF, WF) => {
                FF.groundColor = WF
              }
            },
            metadata: uF
          }, PF, RF), (0, CF.j)(null, null, SF, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: FF => "direction" in FF,
              get: FF => FF.direction,
              set: (FF, WF) => {
                FF.direction = WF
              }
            },
            metadata: uF
          }, iW, eF), uF && Object.defineProperty(FF, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: uF
          })
        })(), FF
      })(),
      iW = !1;

    function eF() {
      iW || (iW = !0, dF.e.AddNodeConstructor("Light_Type_3", ((FF, WF) => () => new RF(FF, uF.r.Zero(), WF))), (0, PF.f)("BABYLON.HemisphericLight", RF))
    }
  },
  36173: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => AF
    });
    var CF = SF(36181);
    class AF {
      static GetPlanes(FF) {
        const WF = [];
        for (let SF = 0; SF < 6; SF++) WF.push(new CF.d(0, 0, 0, 0));
        return AF.GetPlanesToRef(FF, WF), WF
      }
      static GetNearPlaneToRef(FF, WF) {
        const SF = FF.m;
        WF.normal.x = SF[3] + SF[2], WF.normal.y = SF[7] + SF[6], WF.normal.z = SF[11] + SF[10], WF.d = SF[15] + SF[14], WF.normalize()
      }
      static GetFarPlaneToRef(FF, WF) {
        const SF = FF.m;
        WF.normal.x = SF[3] - SF[2], WF.normal.y = SF[7] - SF[6], WF.normal.z = SF[11] - SF[10], WF.d = SF[15] - SF[14], WF.normalize()
      }
      static GetLeftPlaneToRef(FF, WF) {
        const SF = FF.m;
        WF.normal.x = SF[3] + SF[0], WF.normal.y = SF[7] + SF[4], WF.normal.z = SF[11] + SF[8], WF.d = SF[15] + SF[12], WF.normalize()
      }
      static GetRightPlaneToRef(FF, WF) {
        const SF = FF.m;
        WF.normal.x = SF[3] - SF[0], WF.normal.y = SF[7] - SF[4], WF.normal.z = SF[11] - SF[8], WF.d = SF[15] - SF[12], WF.normalize()
      }
      static GetTopPlaneToRef(FF, WF) {
        const SF = FF.m;
        WF.normal.x = SF[3] - SF[1], WF.normal.y = SF[7] - SF[5], WF.normal.z = SF[11] - SF[9], WF.d = SF[15] - SF[13], WF.normalize()
      }
      static GetBottomPlaneToRef(FF, WF) {
        const SF = FF.m;
        WF.normal.x = SF[3] + SF[1], WF.normal.y = SF[7] + SF[5], WF.normal.z = SF[11] + SF[9], WF.d = SF[15] + SF[13], WF.normalize()
      }
      static GetPlanesToRef(FF, WF) {
        AF.GetNearPlaneToRef(FF, WF[0]), AF.GetFarPlaneToRef(FF, WF[1]), AF.GetLeftPlaneToRef(FF, WF[2]), AF.GetRightPlaneToRef(FF, WF[3]), AF.GetTopPlaneToRef(FF, WF[4]), AF.GetBottomPlaneToRef(FF, WF[5])
      }
      static IsPointInFrustum(FF, WF) {
        for (let SF = 0; SF < 6; SF++)
          if (WF[SF].dotCoordinate(FF) < 0) return !1;
        return !0
      }
    }
  },
  36181: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => AF
    });
    var CF = SF(35623);
    class AF {
      constructor(FF, WF, SF, AF) {
        this.normal = new CF.r(FF, WF, SF), this.d = AF
      }
      kRF() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new AF(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let FF = this.normal.getHashCode();
        return FF = 397 * FF ^ this.d, FF
      }
      normalize() {
        const FF = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let WF = 0;
        return 0 !== FF && (WF = 1 / FF), this.normal.x *= WF, this.normal.y *= WF, this.normal.z *= WF, this.d *= WF, this
      }
      transform(FF) {
        const WF = AF._TmpMatrix;
        FF.invertToRef(WF);
        const SF = WF.m,
          CF = this.normal.x,
          uF = this.normal.y,
          hF = this.normal.z,
          bW = this.d,
          dF = CF * SF[0] + uF * SF[1] + hF * SF[2] + bW * SF[3],
          PF = CF * SF[4] + uF * SF[5] + hF * SF[6] + bW * SF[7],
          RF = CF * SF[8] + uF * SF[9] + hF * SF[10] + bW * SF[11],
          iW = CF * SF[12] + uF * SF[13] + hF * SF[14] + bW * SF[15];
        return new AF(dF, PF, RF, iW)
      }
      dotCoordinate(FF) {
        return this.normal.x * FF.x + this.normal.y * FF.y + this.normal.z * FF.z + this.d
      }
      copyFromPoints(FF, WF, SF) {
        const CF = WF.x - FF.x,
          AF = WF.y - FF.y,
          uF = WF.z - FF.z,
          hF = SF.x - FF.x,
          bW = SF.y - FF.y,
          dF = SF.z - FF.z,
          PF = AF * dF - uF * bW,
          RF = uF * hF - CF * dF,
          iW = CF * bW - AF * hF,
          eF = Math.sqrt(PF * PF + RF * RF + iW * iW);
        let EF;
        return EF = 0 !== eF ? 1 / eF : 0, this.normal.x = PF * EF, this.normal.y = RF * EF, this.normal.z = iW * EF, this.d = -(this.normal.x * FF.x + this.normal.y * FF.y + this.normal.z * FF.z), this
      }
      isFrontFacingTo(FF, WF) {
        return CF.r.Dot(this.normal, FF) <= WF
      }
      signedDistanceTo(FF) {
        return CF.r.Dot(FF, this.normal) + this.d
      }
      static FromArray(FF) {
        return new AF(FF[0], FF[1], FF[2], FF[3])
      }
      static FromPoints(FF, WF, SF) {
        const CF = new AF(0, 0, 0, 0);
        return CF.copyFromPoints(FF, WF, SF), CF
      }
      static FromPositionAndNormal(FF, WF) {
        const SF = new AF(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(FF, WF, SF)
      }
      static FromPositionAndNormalToRef(FF, WF, SF) {
        return SF.normal.fdF(WF), SF.normal.normalize(), SF.d = -FF.dot(SF.normal), SF
      }
      static SignedDistanceToPlaneFromPositionAndNormal(FF, WF, SF) {
        const AF = -(WF.x * FF.x + WF.y * FF.y + WF.z * FF.z);
        return CF.r.Dot(SF, WF) + AF
      }
    }
    AF._TmpMatrix = CF.b.Identity()
  },
  36545: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => CF
    });
    class CF {
      constructor(FF, WF, SF, CF) {
        this.x = FF, this.y = WF, this.width = SF, this.height = CF
      }
      toGlobal(FF, WF) {
        return new CF(this.x * FF, this.y * WF, this.width * FF, this.height * WF)
      }
      toGlobalToRef(FF, WF, SF) {
        return SF.x = this.x * FF, SF.y = this.y * WF, SF.width = this.width * FF, SF.height = this.height * WF, this
      }
      clone() {
        return new CF(this.x, this.y, this.width, this.height)
      }
    }
  },
  37069: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => uF
    });
    var CF = SF(37076);
    const AF = (FF, WF, SF) => FF ? FF.getClassName && "Mesh" === FF.getClassName() ? null : !FF.getClassName || "SubMesh" !== FF.getClassName() && "PhysicsBody" !== FF.getClassName() ? FF.clone ? FF.clone() : Array.isArray(FF) ? FF.slice() : SF && "object" === typeof FF ? {
      ...FF
    } : null : FF.clone(WF) : null;
    class uF {
      static DeepCopy(FF, WF, SF, uF) {
        let hF = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const bW = function(FF) {
          const WF = [];
          do {
            const SF = Object.getOwnPropertyNames(FF);
            for (const FF of SF) - 1 === WF.indexOf(FF) && WF.push(FF)
          } while (FF = Object.getPrototypeOf(FF));
          return WF
        }(FF);
        for (const PF of bW) {
          if ("_" === PF[0] && (!uF || -1 === uF.indexOf(PF))) continue;
          if (PF.endsWith("Observable")) continue;
          if (SF && -1 !== SF.indexOf(PF)) continue;
          const bW = FF[PF],
            RF = typeof bW;
          if ("function" !== RF) try {
            if ("object" === RF)
              if (bW instanceof Uint8Array) WF[PF] = Uint8Array.from(bW);
              else if (bW instanceof Array) {
              if (WF[PF] = [], bW.length > 0)
                if ("object" == typeof bW[0])
                  for (let FF = 0; FF < bW.length; FF++) {
                    const SF = AF(bW[FF], WF, hF); - 1 === WF[PF].indexOf(SF) && WF[PF].push(SF)
                  } else WF[PF] = bW.slice(0)
            } else WF[PF] = AF(bW, WF, hF);
            else WF[PF] = bW
          } catch (dF) {
            CF.b.Warn(dF.message)
          }
        }
      }
    }
  },
  36308: (FF, WF, SF) => {
    function CF() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (FF => {
        const WF = 16 * Math.random() | 0;
        return ("x" === FF ? WF : 3 & WF | 8).toString(16)
      }))
    }
    SF.d(WF, {
      b: () => CF
    })
  },
  37076: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => CF
    });
    class CF {
      static _CheckLimit(FF, WF) {
        let SF = CF._LogLimitOutputs[FF];
        return SF ? SF.current++ : (SF = {
          limit: WF,
          current: 1
        }, CF._LogLimitOutputs[FF] = SF), SF.current <= SF.limit
      }
      static _GenerateLimitMessage(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const SF = CF._LogLimitOutputs[FF];
        if (!SF || !CF.MessageLimitReached) return;
        const AF = this._Levels[WF];
        SF.current === SF.limit && CF[AF.name](CF.MessageLimitReached.replace(/%LIMIT%/g, "" + SF.limit).replace(/%TYPE%/g, AF.name ?? ""))
      }
      static _AddLogEntry(FF) {
        CF._LogCache = FF + CF._LogCache, CF.OnNewCacheEntry && CF.OnNewCacheEntry(FF)
      }
      static _FormatMessage(FF) {
        const WF = FF => FF < 10 ? "0" + FF : "" + FF,
          SF = new Date;
        return "[" + WF(SF.getHours()) + ":" + WF(SF.getMinutes()) + ":" + WF(SF.getSeconds()) + "]: " + FF
      }
      static _LogDisabled(FF, WF) {}
      static _LogEnabled() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          WF = arguments.length > 1 ? arguments[1] : void 0,
          SF = arguments.length > 2 ? arguments[2] : void 0;
        const AF = Array.isArray(WF) ? WF[0] : WF;
        if (void 0 !== SF && !CF._CheckLimit(AF, SF)) return;
        const uF = CF._FormatMessage(AF),
          hF = this._Levels[FF],
          bW = Array.isArray(WF) ? WF.slice(1) : [];
        hF.logFunc && hF.logFunc("BJS - " + uF, ...bW);
        const dF = `<div style='color:${hF.color}'>${uF}</div><br>`;
        CF._AddLogEntry(dF), CF._GenerateLimitMessage(AF, FF)
      }
      static get LogCache() {
        return CF._LogCache
      }
      static ClearLogCache() {
        CF._LogCache = "", CF._LogLimitOutputs = {}, CF.errorsCount = 0
      }
      static set LogLevels(FF) {
        CF.Log = CF._LogDisabled, CF.Warn = CF._LogDisabled, CF.Error = CF._LogDisabled;
        const WF = [CF.MessageLogLevel, CF.WarningLogLevel, CF.ErrorLogLevel];
        for (const SF of WF)
          if ((FF & SF) === SF) {
            const FF = this._Levels[SF];
            CF[FF.name] = CF._LogEnabled.bind(CF, SF)
          }
      }
    }
    CF.NoneLogLevel = 0, CF.MessageLogLevel = 1, CF.WarningLogLevel = 2, CF.ErrorLogLevel = 4, CF.AllLogLevel = 7, CF.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", CF._LogCache = "", CF._LogLimitOutputs = {}, CF._Levels = [{}, {
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
    }], CF.errorsCount = 0, CF.Log = CF._LogEnabled.bind(CF, CF.MessageLogLevel), CF.Warn = CF._LogEnabled.bind(CF, CF.WarningLogLevel), CF.Error = CF._LogEnabled.bind(CF, CF.ErrorLogLevel)
  },
  58887: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      CreateScreenshot: () => zW,
      CreateScreenshotAsync: () => IF,
      CreateScreenshotForFrameGraphAsync: () => nF,
      CreateScreenshotUsingRenderTarget: () => yW,
      CreateScreenshotUsingRenderTargetAsync: () => sF,
      CreateScreenshotWithResizeAsync: () => fF,
      RegisterScreenshotTools: () => XF,
      ScreenshotTools: () => KF
    });
    var CF = SF(38448),
      AF = SF(39659),
      uF = SF(39636),
      hF = SF(37994),
      bW = SF(39645),
      dF = SF(35639),
      PF = SF(35623);
    class RF extends bW.e {
      static _GetDefines(FF) {
        if (!FF) return null;
        return FF.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
      }
      _gatherImports(FF, WF) {
        FF ? (this._webGPUReady = !0, WF.push(Promise.all([SF.e(347).then((() => SF(59237))), SF.e(348).then((() => SF(59242)))]))) : WF.push(Promise.all([SF.e(349).then((() => SF(59247))), SF.e(350).then((() => SF(59256)))]))
      }
      constructor(FF) {
        const WF = {
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: FF,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || dF.e.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          vertexShader: RF.VertexUrl,
          fragmentShader: RF.FragmentUrl,
          uniforms: RF.Uniforms
        };
        super({
          ...WF,
          defines: RF._GetDefines(WF.engine)
        }), this.texelSize = new PF.n(0, 0)
      }
      bind() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.bind(FF), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
      }
    }
    RF.VertexUrl = "fxaa", RF.FragmentUrl = "fxaa", RF.Uniforms = ["texelSize"];
    class iW extends uF.b {
      getClassName() {
        return "FxaaPostProcess"
      }
      constructor(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          AF = arguments.length > 3 ? arguments[3] : void 0,
          uF = arguments.length > 4 ? arguments[4] : void 0,
          hF = arguments.length > 5 ? arguments[5] : void 0,
          bW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const dF = {
          uniforms: RF.Uniforms,
          size: "number" === typeof WF ? WF : void 0,
          camera: SF,
          samplingMode: AF || CF.i.BILINEAR_SAMPLINGMODE,
          engine: uF,
          reusable: hF,
          textureType: bW,
          ...WF
        };
        super(FF, RF.FragmentUrl, {
          effectWrapper: "number" !== typeof WF && WF.effectWrapper ? void 0 : new RF(FF, uF, dF),
          ...dF
        }), this.onApplyObservable.add((FF => {
          this._effectWrapper.texelSize = this.texelSize
        }))
      }
      static _Parse(FF, WF, SF, CF) {
        return hF.e.Parse((() => new iW(FF.name, FF.options, WF, FF.renderTargetSamplingMode, SF.sC(), FF.reusable)), FF, SF, CF)
      }
    }
    var eF = SF(37076),
      EF = SF(38065),
      QF = SF(39669),
      rW = SF(39657),
      gW = SF(37860);
    const tW = 0;
    class TF {
      constructor(FF, WF, SF) {
        this.name = FF, this._parentTask = WF, this._context = SF, this.disabled = !1
      }
      setInitializeFunc(FF) {
        this._initFunc = FF
      }
      setExecuteFunc(FF) {
        this._executeFunc = FF
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
    class aW extends TF {
      static IsObjectListPass(FF) {
        return void 0 !== FF.setObjectList
      }
      get objectList() {
        return this._objectList
      }
      setObjectList(FF) {
        this._objectList = FF
      }
      constructor(FF, WF, SF, CF) {
        super(FF, WF, SF), this._engine = CF
      }
      _isValid() {
        const FF = super._isValid();
        return FF || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
      }
    }
    class kW extends TF {
      static IsRenderPass(FF) {
        return void 0 !== FF.setRenderTarget
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
      constructor(FF, WF, SF, CF) {
        super(FF, WF, SF), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = CF
      }
      setRenderTarget(FF) {
        this._renderTarget = FF
      }
      setRenderTargetDepth(FF) {
        this._renderTargetDepth = FF
      }
      addDependencies(FF) {
        if (void 0 !== FF)
          if (Array.isArray(FF))
            for (const WF of FF) this._dependencies.add(WF);
          else this._dependencies.add(FF)
      }
      collectDependencies(FF) {
        const WF = this._dependencies.keys();
        for (let SF = WF.next(); !0 !== SF.done; SF = WF.next()) FF.add(SF.value);
        if (void 0 !== this._renderTarget)
          if (Array.isArray(this._renderTarget))
            for (const SF of this._renderTarget) void 0 !== SF && FF.add(SF);
          else FF.add(this._renderTarget);
        void 0 !== this._renderTargetDepth && FF.add(this._renderTargetDepth)
      }
      setOutputLayerAndFaceIndices(FF) {
        const WF = this.frameGraphRenderTarget.renderTargetWrapper;
        if (WF)
          for (const SF of FF) WF.setLayerAndFaceIndex(SF.targetIndex, SF.layerIndex, SF.faceIndex)
      }
      _initialize() {
        this._frameGraphRenderTarget = this._context.createRenderTarget(this.name, this._renderTarget, this._renderTargetDepth, this.depthReadOnly, this.stencilReadOnly), super._initialize()
      }
      _execute() {
        this._context.bindRenderTarget(this._frameGraphRenderTarget), super._execute(), this._context.restoreDefaultFramebuffer()
      }
      _isValid() {
        const FF = super._isValid();
        return FF || (void 0 !== this._renderTarget || void 0 !== this.renderTargetDepth ? null : "Render target and render target depth cannot both be undefined.")
      }
      _dispose() {
        this._frameGraphRenderTarget?.dispose()
      }
    }
    var qW = SF(35647);
    class VF {
      get name() {
        return this._name
      }
      set name(FF) {
        this._name = FF
      }
      get disabled() {
        return this._disabled
      }
      set disabled(FF) {
        this._disabled = FF
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
      constructor(FF, WF) {
        this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new qW.b, this.onBeforeTaskExecute = new qW.b, this.onAfterTaskExecute = new qW.b, this.name = FF, this._frameGraph = WF, this._reset()
      }
      _reset() {
        for (const FF of this._passes) FF._dispose();
        for (const FF of this._passesDisabled) FF._dispose();
        this._passes.length = 0, this._passesDisabled.length = 0
      }
      _addPass(FF, WF) {
        WF ? this._passesDisabled.push(FF) : this._passes.push(FF)
      }
      _checkTask() {
        let FF, WF = null,
          SF = null;
        for (const bW of this._passes) {
          const CF = bW._isValid();
          if (CF) throw new Error(`Pass "${bW.name}" is not valid. ${CF}`);
          if (kW.IsRenderPass(bW)) {
            const FF = Array.isArray(bW.renderTarget) ? bW.renderTarget : [bW.renderTarget];
            WF = [];
            for (const SF of FF) void 0 !== SF && WF.push(this._frameGraph.textureManager.getTextureFromHandle(SF));
            SF = void 0 !== bW.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(bW.renderTargetDepth) : null
          } else aW.IsObjectListPass(bW) && (FF = bW.objectList)
        }
        let CF, AF = null,
          uF = [],
          hF = null;
        for (const bW of this._passesDisabled) {
          const FF = bW._isValid();
          if (FF) throw new Error(`Pass "${bW.name}" is not valid. ${FF}`);
          if (kW.IsRenderPass(bW)) {
            const FF = Array.isArray(bW.renderTarget) ? bW.renderTarget : [bW.renderTarget];
            AF = [];
            for (const WF of FF) void 0 !== WF && AF.push(this._frameGraph.textureManager.getTextureFromHandle(WF));
            uF = FF, hF = void 0 !== bW.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(bW.renderTargetDepth) : null
          } else aW.IsObjectListPass(bW) && (CF = bW.objectList)
        }
        if (this._passesDisabled.length > 0) {
          if (!this._checkSameRenderTarget(WF, AF)) {
            let FF = !0;
            for (const WF of uF)
              if (void 0 !== WF && !this._frameGraph.textureManager.isHistoryTexture(WF)) {
                FF = !1;
                break
              } if (!FF) throw new Error(`The output texture of the task "${this.name}" is different when it is enabled or disabled.`)
          }
          if (SF !== hF && null !== hF) throw new Error(`The output depth texture of the task "${this.name}" is different when it is enabled or disabled.`);
          if (FF !== CF && null !== CF) throw new Error(`The output object list of the task "${this.name}" is different when it is enabled or disabled.`)
        }
      }
      _execute() {
        const FF = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
        this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const WF of FF) WF._execute()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
        this.onAfterTaskExecute.notifyObservers(this)
      }
      _initializePasses() {
        this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const FF of this._passes) FF._initialize();
          for (const FF of this._passesDisabled) FF._initialize()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
      }
      _checkSameRenderTarget(FF, WF) {
        if (null === FF || null === WF) return FF === WF;
        if (FF.length !== WF.length) return !1;
        for (let SF = 0; SF < FF.length; SF++)
          if (FF[SF] !== WF[SF]) return !1;
        return !0
      }
    }
    class NF extends VF {
      get alphaMode() {
        return this.postProcess.alphaMode
      }
      set alphaMode(FF) {
        this.postProcess.alphaMode = FF
      }
      get drawWrapper() {
        return this._postProcessDrawWrapper
      }
      constructor(FF, WF, SF) {
        super(FF, WF), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = SF, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture = this._frameGraph.textureManager.createDanglingHandle(), this.outputDepthAttachmentTexture = this._frameGraph.textureManager.createDanglingHandle()
      }
      isReady() {
        return this.postProcess.isReady()
      }
      getClassName() {
        return "FrameGraphPostProcessTask"
      }
      record() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          WF = arguments.length > 1 ? arguments[1] : void 0,
          SF = arguments.length > 2 ? arguments[2] : void 0;
        if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
        const CF = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
        if (CF && (CF.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, CF), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentTexture, this.depthAttachmentTexture), CF) {
          const FF = this._frameGraph.textureManager.getTextureAbsoluteDimensions(CF);
          this._sourceWidth = FF.width, this._sourceHeight = FF.height
        }
        const AF = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
        this._outputWidth = AF.size.width, this._outputHeight = AF.size.height;
        const uF = this._frameGraph.addRenderPass(this.name);
        if (uF.depthReadOnly = this.depthReadOnly, uF.stencilReadOnly = this.stencilReadOnly, uF.addDependencies(this.sourceTexture), uF.setRenderTarget(this.outputTexture), uF.setRenderTargetDepth(this.depthAttachmentTexture), uF.setExecuteFunc((FF => {
            FF.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && FF.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), WF?.(FF), this.viewport && FF.setViewport(this.viewport), FF.applyFullScreenEffect(this._postProcessDrawWrapper, (() => {
              void 0 !== this.sourceTexture && FF.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), SF?.(FF), this.postProcess.bind()
            }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), FF.restoreDefaultFramebuffer(), FF.popDebugGroup()
          })), !FF) {
          const FF = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
          FF.depthReadOnly = this.depthReadOnly, FF.stencilReadOnly = this.stencilReadOnly, FF.addDependencies(this.sourceTexture), FF.setRenderTarget(this.outputTexture), FF.setRenderTargetDepth(this.depthAttachmentTexture), FF.setExecuteFunc((FF => {
            void 0 !== this.sourceTexture && 0 === this.alphaMode && (this.viewport && FF.setViewport(this.viewport), FF.copyTexture(this.sourceTexture, void 0, void 0 !== this.viewport))
          }))
        }
        return uF
      }
      dispose() {
        this.postProcess.dispose(), super.dispose()
      }
    }
    class DF extends NF {
      constructor(FF, WF, SF) {
        super(FF, WF, SF || new RF(FF, WF.engine))
      }
      getClassName() {
        return "FrameGraphFXAATask"
      }
      record() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          WF = arguments.length > 1 ? arguments[1] : void 0,
          SF = arguments.length > 2 ? arguments[2] : void 0;
        const CF = super.record(FF, WF, SF);
        return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, CF
      }
    }
    var LF = SF(39665);
    class mW extends NF {
      constructor(FF, WF, SF) {
        super(FF, WF, SF || new LF.h(FF, WF.engine))
      }
      getClassName() {
        return "FrameGraphPassTask"
      }
    }
    var OF = SF(38057),
      xW = SF(38145),
      ZF = SF(38100),
      oF = SF(38223),
      YF = SF(35678);
    class MF {
      getRenderCamera(FF) {
        if (this._renderCamera) return this._renderCamera;
        {
          let WF;
          return WF = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, FF && WF && WF.isRigCamera ? WF.rigParent : WF
        }
      }
      setRenderCamera(FF) {
        this._renderCamera = FF
      }
      _getSharedGizmoLight() {
        return this._sharedGizmoLight || (this._sharedGizmoLight = new oF.c("shared gizmo light", new PF.r(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = YF.e.Gray()), this._sharedGizmoLight
      }
      static get DefaultUtilityLayer() {
        return null == MF._DefaultUtilityLayer ? MF._CreateDefaultUtilityLayerFromScene(dF.e.LastCreatedScene) : MF._DefaultUtilityLayer
      }
      static _CreateDefaultUtilityLayerFromScene(FF) {
        return MF._DefaultUtilityLayer = new MF(FF), MF._DefaultUtilityLayer.originalScene.xSF.addOnce((() => {
          MF._DefaultUtilityLayer = null
        })), MF._DefaultUtilityLayer
      }
      static get DefaultKeepDepthUtilityLayer() {
        return null == MF._DefaultKeepDepthUtilityLayer ? MF._CreateDefaultKeepUtilityLayerFromScene(dF.e.LastCreatedScene) : MF._DefaultKeepDepthUtilityLayer
      }
      static _CreateDefaultKeepUtilityLayerFromScene(FF) {
        return MF._DefaultKeepDepthUtilityLayer = new MF(FF), MF._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, MF._DefaultKeepDepthUtilityLayer.originalScene.xSF.addOnce((() => {
          MF._DefaultKeepDepthUtilityLayer = null
        })), MF._DefaultKeepDepthUtilityLayer
      }
      constructor(FF) {
        let WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.originalScene = FF, this.handleEvents = WF, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.processAllEvents = !1, this.pickingEnabled = !0, this.onPointerOutObservable = new qW.b, this.utilityLayerScene = new OF.f(FF.sC(), {
          virtual: !0,
          useFloatingOrigin: FF.floatingOriginMode
        }), this.utilityLayerScene.useRightHandedSystem = FF.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), WF && (this._originalPointerObserver = FF.onPrePointerObservable.add((WF => {
          if (!this.utilityLayerScene.activeCamera) return;
          if (!this.pickingEnabled) return;
          if (!this.processAllEvents && WF.type !== xW.b.POINTERMOVE && WF.type !== xW.b.POINTERUP && WF.type !== xW.b.POINTERDOWN && WF.type !== xW.b.POINTERDOUBLETAP) return;
          this.utilityLayerScene.pointerX = FF.pointerX, this.utilityLayerScene.pointerY = FF.pointerY;
          const SF = WF.event;
          if (FF.isPointerCaptured(SF.pointerId)) return void(this._pointerCaptures[SF.pointerId] = !1);
          const CF = SF => {
              let CF;
              if (WF.nearInteractionPickingInfo) CF = WF.nearInteractionPickingInfo.pickedMesh.OWF() == SF ? WF.nearInteractionPickingInfo : new ZF.b;
              else if (SF !== this.utilityLayerScene && WF.originalPickingInfo) CF = WF.originalPickingInfo;
              else {
                let AF = null;
                this._renderCamera && (AF = SF._activeCamera, SF._activeCamera = this._renderCamera, WF.ray = null), CF = WF.ray ? SF.pickWithRay(WF.ray) : SF.lW(FF.pointerX, FF.pointerY), AF && (SF._activeCamera = AF)
              }
              return CF
            },
            AF = CF(this.utilityLayerScene);
          if (!WF.ray && AF && (WF.ray = AF.ray), WF.originalPickingInfo?.aimTransform && AF && (AF.aimTransform = WF.originalPickingInfo.aimTransform, AF.gripTransform = WF.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(WF), this.onlyCheckPointerDownEvents && WF.type != xW.b.POINTERDOWN) return WF.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new xW.f(WF.type, WF.event, AF), WF.type), void(WF.type === xW.b.POINTERUP && this._pointerCaptures[SF.pointerId] && (this._pointerCaptures[SF.pointerId] = !1));
          if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) AF && AF.hit && (WF.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new xW.f(WF.type, WF.event, AF), WF.type), WF.skipOnPointerObservable = !0);
          else {
            const SF = CF(FF),
              uF = WF.event;
            SF && AF && (0 === AF.distance && SF.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(SF.pickedMesh) ? (this._notifyObservers(WF, SF, uF), WF.skipOnPointerObservable = !0) : WF.type === xW.b.POINTERDOWN ? (this._pointerCaptures[uF.pointerId] = !0, this._notifyObservers(WF, SF, uF)) : WF.type !== xW.b.POINTERMOVE && WF.type !== xW.b.POINTERUP || (this._lastPointerEvents[uF.pointerId] && (this.onPointerOutObservable.notifyObservers(uF.pointerId), delete this._lastPointerEvents[uF.pointerId]), this._notifyObservers(WF, SF, uF)) : !this._pointerCaptures[uF.pointerId] && (AF.distance < SF.distance || 0 === SF.distance) ? (this._notifyObservers(WF, AF, uF), WF.skipOnPointerObservable || (WF.skipOnPointerObservable = AF.distance > 0)) : !this._pointerCaptures[uF.pointerId] && AF.distance >= SF.distance && (this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(SF.pickedMesh) ? (this._notifyObservers(WF, SF, uF), WF.skipOnPointerObservable = !0) : (WF.type !== xW.b.POINTERMOVE && WF.type !== xW.b.POINTERUP || this._lastPointerEvents[uF.pointerId] && (this.onPointerOutObservable.notifyObservers(uF.pointerId), delete this._lastPointerEvents[uF.pointerId]), this._notifyObservers(WF, AF, uF))), WF.type === xW.b.POINTERUP && this._pointerCaptures[uF.pointerId] && (this._pointerCaptures[uF.pointerId] = !1))
          }
        })), this._originalPointerObserver && FF.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, SF || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((FF => {
          this.shouldRender && FF == this.getRenderCamera() && this.render()
        }))), this._sceneDisposeObserver = this.originalScene.xSF.add((() => {
          this.dispose()
        })), this._updateCamera()
      }
      _notifyObservers(FF, WF, SF) {
        FF.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new xW.f(FF.type, FF.event, WF), FF.type), this._lastPointerEvents[SF.pointerId] = !0)
      }
      render() {
        if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
          const FF = this.utilityLayerScene.activeCamera.OWF(),
            WF = this.utilityLayerScene.activeCamera;
          WF._scene = this.utilityLayerScene, WF.leftCamera && (WF.leftCamera._scene = this.utilityLayerScene), WF.rightCamera && (WF.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), WF._scene = FF, WF.leftCamera && (WF.leftCamera._scene = FF), WF.rightCamera && (WF.rightCamera._scene = FF)
        }
      }
      dispose() {
        this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.xSF.remove(this._sceneDisposeObserver), this._originalPointerObserver && this.originalScene.onPrePointerObservable.remove(this._originalPointerObserver), this.utilityLayerScene.dispose()
      }
      _updateCamera() {
        this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
      }
    }
    MF._DefaultUtilityLayer = null, MF._DefaultKeepDepthUtilityLayer = null;
    const cW = {
      FindMainCamera: function(FF) {
        return FF.findMainCamera()
      },
      FindMainObjectRenderer: function(FF) {
        return FF.findMainObjectRenderer()
      },
      CreateUtilityLayerRenderer: function(FF) {
        let WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const SF = FF.ju,
          CF = new MF(SF, WF, !0);
        CF.utilityLayerScene.activeCamera = SF.activeCamera;
        let AF = cW.FindMainCamera(SF.frameGraph);
        !AF && SF.cameras.length > 0 && (AF = SF.cameras[0]), AF && (CF.setRenderCamera(AF), CF.utilityLayerScene.activeCamera = AF);
        const uF = SF.onAfterRenderObservable.add((() => {
          CF.render()
        }));
        return CF.utilityLayerScene.xSF.addOnce((() => {
          SF.onAfterRenderObservable.remove(uF)
        })), CF
      }
    };
    let GF = null;

    function zW(FF, WF, SF, CF) {
      let AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        uF = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        hF = arguments.length > 6 ? arguments[6] : void 0,
        bW = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        dF = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
      const {
        height: PF,
        width: RF
      } = HF(FF, WF, SF);
      if (!PF || !RF) return void eF.b.Error("Invalid 'size' parameter !");
      const iW = WF.OWF();
      let QF = iW.activeCamera !== WF;
      if (iW.frameGraph) {
        const FF = cW.FindMainObjectRenderer(iW.frameGraph);
        FF && (QF = FF.camera !== WF)
      }
      QF ? yW(FF, WF, SF, (FF => {
        if (uF) {
          const WF = new Blob([FF]);
          EF.h.DownloadBlob(WF), CF && CF("")
        } else CF && CF(FF)
      }), AF, 1, FF.getCreationOptions().antialias, void 0, void 0, void 0, void 0, hF) : FF.onEndFrameObservable.addOnce((() => {
        GF || (GF = document.createElement("canvas")), GF.width = RF, GF.height = PF;
        const WF = GF.getContext("2d"),
          SF = FF.getRenderingCanvas();
        if (!WF || !SF) return void eF.b.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
        const QF = SF.width,
          rW = SF.height,
          gW = GF.width,
          tW = GF.height,
          TF = gW / QF,
          aW = tW / rW,
          kW = bW ? Math.max(TF, aW) : Math.min(TF, aW),
          qW = QF * kW,
          VF = rW * kW,
          NF = (gW - qW) / 2,
          DF = (tW - VF) / 2;
        WF.save(), WF.fillStyle = dF ? iW.clearColor.toHexString() : "rgba(0, 0, 0, 0)", WF.fillRect(0, 0, RF, PF), WF.restore(), WF.drawImage(SF, 0, 0, QF, rW, NF, DF, qW, VF), uF ? (EF.h.EncodeScreenshotCanvasData(GF, void 0, AF, void 0, hF), CF && CF("")) : EF.h.EncodeScreenshotCanvasData(GF, CF, AF, void 0, hF)
      }))
    }
    async function IF(FF, WF, SF) {
      let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        AF = arguments.length > 4 ? arguments[4] : void 0,
        uF = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        hF = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        bW = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      return await new Promise(((dF, PF) => {
        zW(FF, WF, SF, (FF => {
          "undefined" !== typeof FF ? dF(FF) : PF(new Error("Data is undefined"))
        }), CF, bW, AF, uF, hF)
      }))
    }
    async function fF(FF, WF, SF, CF) {
      let AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        uF = arguments.length > 5 ? arguments[5] : void 0,
        hF = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return await new Promise((bW => {
        zW(FF, WF, {
          width: SF,
          height: CF
        }, (() => {
          bW()
        }), AF, !0, uF, hF)
      }))
    }

    function yW(FF, WF, uF, hF) {
      let bW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        dF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
        PF = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        RF = arguments.length > 7 ? arguments[7] : void 0,
        EF = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        tW = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        TF = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
        aW = arguments.length > 11 ? arguments[11] : void 0,
        kW = arguments.length > 12 ? arguments[12] : void 0,
        qW = arguments.length > 13 ? arguments[13] : void 0,
        VF = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
        NF = arguments.length > 15 ? arguments[15] : void 0;
      const DF = WF.OWF();
      if (DF.frameGraph) return void nF(DF.frameGraph, WF, uF, bW, dF, PF, RF, aW, qW, !hF).then((FF => {
        hF && hF(FF)
      }));
      const {
        height: LF,
        width: mW,
        finalWidth: OF,
        finalHeight: xW
      } = HF(FF, WF, uF), ZF = {
        width: mW,
        height: LF
      };
      if (!LF || !mW) return void eF.b.Error("Invalid 'size' parameter !");
      FF.skipFrameRender = !0;
      const oF = FF.getRenderWidth,
        YF = FF.getRenderHeight;
      FF.getRenderWidth = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && FF._currentRenderTarget ? FF._currentRenderTarget.width : mW
      }, FF.getRenderHeight = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && FF._currentRenderTarget ? FF._currentRenderTarget.height : LF
      }, FF.onResizeObservable.hasObservers() && FF.onResizeObservable.notifyObservers(FF);
      const MF = new AF.c("screenShot", ZF, DF, !1, !1, 0, !1, CF.i.BILINEAR_SAMPLINGMODE, void 0, tW, void 0, void 0, void 0, dF);
      MF.renderList = DF.meshes.slice(), MF.samples = dF, MF.renderSprites = EF, MF.activeCamera = WF, MF.forceLayerMaskCheck = TF, kW?.(MF);
      const cW = qW || QF.DumpData,
        GF = () => {
          DF.incrementRenderId(), DF.resetCachedMaterial(), (0, gW.f)((() => MF.isReadyForRendering() && WF.isReady(!0)), (() => {
            FF.onEndFrameObservable.addOnce((() => {
              OF === mW && xW === LF ? MF.readPixels(void 0, void 0, void 0, !1).then((FF => {
                cW(mW, LF, FF, hF, bW, RF, !0, void 0, aW), MF.dispose()
              })) : (FF.isWebGPU ? SF.e(343).then((() => SF(59188))) : SF.e(344).then((() => SF(59192)))).then((async () => await (0, rW.d)("pass", MF.getInternalTexture(), DF, void 0, void 0, void 0, OF, xW).then((WF => {
                FF._readTexturePixels(WF, OF, xW, -1, 0, null, !0, !1, 0, 0).then((FF => {
                  cW(OF, xW, FF, hF, bW, RF, !0, void 0, aW), WF.dispose()
                }))
              }))))
            })), DF.incrementRenderId(), DF.resetCachedMaterial();
            const CF = DF.activeCamera,
              AF = DF.activeCameras,
              uF = WF.outputRenderTarget,
              dF = DF.spritesEnabled;
            DF.activeCamera = WF, DF.activeCameras = null, WF.outputRenderTarget = MF, DF.spritesEnabled = EF;
            const PF = DF.meshes;
            DF.meshes = MF.renderList || DF.meshes;
            try {
              DF.render()
            } finally {
              DF.activeCamera = CF, DF.activeCameras = AF, WF.outputRenderTarget = uF, DF.spritesEnabled = dF, DF.meshes = PF, FF.getRenderWidth = oF, FF.getRenderHeight = YF, FF.onResizeObservable.hasObservers() && FF.onResizeObservable.notifyObservers(FF), WF.getProjectionMatrix(!0), FF.skipFrameRender = !1
            }
          }), (() => {
            FF.skipFrameRender = !1, FF.getRenderWidth = oF, FF.getRenderHeight = YF, NF?.()
          }), void 0, VF)
        };
      if (PF) {
        const FF = new iW("antialiasing", 1, DF.activeCamera);
        MF.addPostProcess(FF), FF.autoClear = !0, FF.onEffectCreatedObservable.addOnce((FF => {
          FF.isReady() ? GF() : FF.onCompiled = () => {
            GF()
          }
        }))
      } else GF()
    }
    async function sF(FF, WF, SF) {
      let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        uF = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        hF = arguments.length > 6 ? arguments[6] : void 0,
        bW = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        dF = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        PF = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
        RF = arguments.length > 10 ? arguments[10] : void 0,
        iW = arguments.length > 11 ? arguments[11] : void 0,
        eF = arguments.length > 12 ? arguments[12] : void 0;
      return await new Promise(((EF, QF) => {
        yW(FF, WF, SF, (FF => {
          "undefined" !== typeof FF ? EF(FF) : QF(new Error("Data is undefined"))
        }), CF, AF, uF, hF, bW, dF, PF, RF, iW, eF)
      }))
    }
    async function nF(FF, WF, SF) {
      let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        uF = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        hF = arguments.length > 6 ? arguments[6] : void 0,
        bW = arguments.length > 7 ? arguments[7] : void 0,
        dF = arguments.length > 8 ? arguments[8] : void 0,
        PF = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        RF = arguments.length > 10 ? arguments[10] : void 0;
      const iW = FF.engine,
        eF = FF.textureManager,
        {
          height: EF,
          width: rW,
          finalWidth: gW,
          finalHeight: TF
        } = HF(iW, WF, SF),
        aW = {
          width: rW,
          height: EF
        },
        kW = dF || QF.DumpData,
        qW = FF.tasks,
        VF = qW.length,
        NF = FF.pausedExecution,
        LF = iW.getCaps().parallelShaderCompile;
      eF.setBackBufferTextures(0, 0, {
        size: aW,
        options: {
          createMipMaps: !1,
          samples: AF,
          types: [0],
          formats: [5],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot color"]
        },
        sizeIsPercentage: !1
      }, {
        size: aW,
        options: {
          createMipMaps: !1,
          samples: AF,
          types: [0],
          formats: [iW.isStencilEnable ? 13 : 14],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot depth"]
        },
        sizeIsPercentage: !1
      });
      let OF = tW;
      if (uF) {
        const WF = new DF("fxaa", FF);
        WF.sourceTexture = OF, OF = WF.outputTexture, FF.addTask(WF)
      }
      if (gW !== rW || TF !== EF) {
        const WF = new mW("pass", FF);
        WF.sourceTexture = OF, WF.targetTexture = FF.textureManager.createRenderTargetTexture("pass_output", {
          size: {
            width: gW,
            height: TF
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
        }), OF = WF.outputTexture, FF.addTask(WF)
      }
      const xW = cW.FindMainObjectRenderer(FF);
      let ZF = null;
      xW && (ZF = xW.camera, xW.camera = WF), iW.getCaps().parallelShaderCompile = void 0, await FF.buildAsync();
      const oF = RF ?? (eF.hasHistoryTextures ? 32 : 1);
      for (let QF = 0; QF < oF; ++QF) FF.execute();
      FF.pausedExecution = !0, iW.getCaps().parallelShaderCompile = LF;
      for (let QF = VF; QF < qW.length; ++QF) FF.tasks[QF].dispose();
      FF.tasks.length = VF, xW && ZF && (xW.camera = ZF);
      const YF = FF.textureManager.getTextureFromHandle(OF);
      return YF.incrementReferences(), eF.resetBackBufferTextures(), await FF.buildAsync(), FF.pausedExecution = NF, new Promise((FF => {
        iW._readTexturePixels(YF, gW, TF, -1, 0, null, !0, !1, 0, 0).then((async WF => {
          YF.dispose(), kW(gW, TF, WF, PF ? void 0 : WF => FF(WF), CF, hF, !0, void 0, bW), PF && FF(null)
        }))
      }))
    }

    function HF(FF, WF, SF) {
      let CF = 0,
        AF = 0,
        uF = 0,
        hF = 0;
      if ("object" === typeof SF) {
        const bW = SF.precision ? Math.abs(SF.precision) : 1;
        SF.width && SF.height ? (CF = SF.height * bW, AF = SF.width * bW) : SF.width && !SF.height ? (AF = SF.width * bW, CF = Math.round(AF / FF.getAspectRatio(WF))) : SF.height && !SF.width ? (CF = SF.height * bW, AF = Math.round(CF * FF.getAspectRatio(WF))) : (AF = Math.round(FF.getRenderWidth() * bW), CF = Math.round(AF / FF.getAspectRatio(WF))), SF.finalWidth && SF.finalHeight ? (hF = SF.finalHeight, uF = SF.finalWidth) : SF.finalWidth && !SF.finalHeight ? (uF = SF.finalWidth, hF = Math.round(uF / FF.getAspectRatio(WF))) : SF.finalHeight && !SF.finalWidth ? (hF = SF.finalHeight, uF = Math.round(hF * FF.getAspectRatio(WF))) : (uF = AF, hF = CF)
      } else isNaN(SF) || (CF = SF, AF = SF, uF = SF, hF = SF);
      return AF && (AF = Math.floor(AF)), CF && (CF = Math.floor(CF)), uF && (uF = Math.floor(uF)), hF && (hF = Math.floor(hF)), {
        height: 0 | CF,
        width: 0 | AF,
        finalWidth: 0 | uF,
        finalHeight: 0 | hF
      }
    }
    const KF = {
      CreateScreenshot: zW,
      CreateScreenshotAsync: IF,
      CreateScreenshotWithResizeAsync: fF,
      CreateScreenshotUsingRenderTarget: yW,
      CreateScreenshotUsingRenderTargetAsync: sF,
      CreateScreenshotForFrameGraphAsync: nF
    };
    let wF = !1;

    function XF() {
      if (wF) return;
      wF = !0;
      EF.h.CreateScreenshot = zW, EF.h.CreateScreenshotAsync = IF, EF.h.CreateScreenshotUsingRenderTarget = yW, EF.h.CreateScreenshotUsingRenderTargetAsync = sF
    }
    XF()
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);