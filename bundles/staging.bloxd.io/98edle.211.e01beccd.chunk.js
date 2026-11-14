export const id = 211;
export const ids = [211, 212];
export const modules = {
  37830: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => eW,
      e: () => tR
    });
    var wW = MW(37587),
      CW = MW(37593),
      zR = MW(35324),
      AW = MW(35376),
      bR = MW(37836),
      yR = MW(37800),
      NW = MW(35361);
    let eW = (() => {
        var WW;
        let RW, MW, yR = bR.c,
          NW = [],
          eW = [],
          BW = [],
          tR = [];
        return WW = class extends yR {
          constructor(WW, RW, MW, CW) {
            super(WW, MW, CW), this.groundColor = (0, wW.i)(this, NW, new AW.d(0, 0, 0)), this.direction = ((0, wW.i)(this, eW), (0, wW.i)(this, BW, void 0)), (0, wW.i)(this, tR), this.direction = RW || zR.q.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(WW) {
            return this.direction = zR.q.Normalize(WW.subtract(zR.q.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(WW, RW) {
            const MW = zR.q.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", MW.x, MW.y, MW.z, 0, RW), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), RW), this
          }
          transferToNodeMaterialEffect(WW, RW) {
            const MW = zR.q.Normalize(this.direction);
            return WW.setFloat3(RW, MW.x, MW.y, MW.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = zR.d.Identity()), this._worldMatrix
          }
          getTypeID() {
            return bR.c.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(WW, RW) {
            WW["HEMILIGHT" + RW] = !0
          }
        }, (() => {
          const zR = "function" === typeof Symbol && Symbol.metadata ? Object.create(yR[Symbol.metadata] ?? null) : void 0;
          RW = [(0, CW.m)()], MW = [(0, CW.B)()], (0, wW.e)(null, null, RW, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: WW => "groundColor" in WW,
              get: WW => WW.groundColor,
              set: (WW, RW) => {
                WW.groundColor = RW
              }
            },
            metadata: zR
          }, NW, eW), (0, wW.e)(null, null, MW, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: WW => "direction" in WW,
              get: WW => WW.direction,
              set: (WW, RW) => {
                WW.direction = RW
              }
            },
            metadata: zR
          }, BW, tR), zR && Object.defineProperty(WW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: zR
          })
        })(), WW
      })(),
      BW = !1;

    function tR() {
      BW || (BW = !0, yR.b.AddNodeConstructor("Light_Type_3", ((WW, RW) => () => new eW(WW, zR.q.Zero(), RW))), (0, NW.e)("BABYLON.HemisphericLight", eW))
    }
  },
  35845: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => CW
    });
    var wW = MW(35852);
    class CW {
      static GetPlanes(WW) {
        const RW = [];
        for (let MW = 0; MW < 6; MW++) RW.push(new wW.c(0, 0, 0, 0));
        return CW.GetPlanesToRef(WW, RW), RW
      }
      static GetNearPlaneToRef(WW, RW) {
        const MW = WW.m;
        RW.normal.x = MW[3] + MW[2], RW.normal.y = MW[7] + MW[6], RW.normal.z = MW[11] + MW[10], RW.d = MW[15] + MW[14], RW.normalize()
      }
      static GetFarPlaneToRef(WW, RW) {
        const MW = WW.m;
        RW.normal.x = MW[3] - MW[2], RW.normal.y = MW[7] - MW[6], RW.normal.z = MW[11] - MW[10], RW.d = MW[15] - MW[14], RW.normalize()
      }
      static GetLeftPlaneToRef(WW, RW) {
        const MW = WW.m;
        RW.normal.x = MW[3] + MW[0], RW.normal.y = MW[7] + MW[4], RW.normal.z = MW[11] + MW[8], RW.d = MW[15] + MW[12], RW.normalize()
      }
      static GetRightPlaneToRef(WW, RW) {
        const MW = WW.m;
        RW.normal.x = MW[3] - MW[0], RW.normal.y = MW[7] - MW[4], RW.normal.z = MW[11] - MW[8], RW.d = MW[15] - MW[12], RW.normalize()
      }
      static GetTopPlaneToRef(WW, RW) {
        const MW = WW.m;
        RW.normal.x = MW[3] - MW[1], RW.normal.y = MW[7] - MW[5], RW.normal.z = MW[11] - MW[9], RW.d = MW[15] - MW[13], RW.normalize()
      }
      static GetBottomPlaneToRef(WW, RW) {
        const MW = WW.m;
        RW.normal.x = MW[3] + MW[1], RW.normal.y = MW[7] + MW[5], RW.normal.z = MW[11] + MW[9], RW.d = MW[15] + MW[13], RW.normalize()
      }
      static GetPlanesToRef(WW, RW) {
        CW.GetNearPlaneToRef(WW, RW[0]), CW.GetFarPlaneToRef(WW, RW[1]), CW.GetLeftPlaneToRef(WW, RW[2]), CW.GetRightPlaneToRef(WW, RW[3]), CW.GetTopPlaneToRef(WW, RW[4]), CW.GetBottomPlaneToRef(WW, RW[5])
      }
      static IsPointInFrustum(WW, RW) {
        for (let MW = 0; MW < 6; MW++)
          if (RW[MW].dotCoordinate(WW) < 0) return !1;
        return !0
      }
    }
  },
  35852: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => CW
    });
    var wW = MW(35324);
    class CW {
      constructor(WW, RW, MW, CW) {
        this.normal = new wW.q(WW, RW, MW), this.d = CW
      }
      JNW() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new CW(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let WW = this.normal.getHashCode();
        return WW = 397 * WW ^ this.d, WW
      }
      normalize() {
        const WW = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let RW = 0;
        return 0 !== WW && (RW = 1 / WW), this.normal.x *= RW, this.normal.y *= RW, this.normal.z *= RW, this.d *= RW, this
      }
      transform(WW) {
        const RW = CW._TmpMatrix;
        WW.invertToRef(RW);
        const MW = RW.m,
          wW = this.normal.x,
          zR = this.normal.y,
          AW = this.normal.z,
          bR = this.d,
          yR = wW * MW[0] + zR * MW[1] + AW * MW[2] + bR * MW[3],
          NW = wW * MW[4] + zR * MW[5] + AW * MW[6] + bR * MW[7],
          eW = wW * MW[8] + zR * MW[9] + AW * MW[10] + bR * MW[11],
          BW = wW * MW[12] + zR * MW[13] + AW * MW[14] + bR * MW[15];
        return new CW(yR, NW, eW, BW)
      }
      dotCoordinate(WW) {
        return this.normal.x * WW.x + this.normal.y * WW.y + this.normal.z * WW.z + this.d
      }
      copyFromPoints(WW, RW, MW) {
        const wW = RW.x - WW.x,
          CW = RW.y - WW.y,
          zR = RW.z - WW.z,
          AW = MW.x - WW.x,
          bR = MW.y - WW.y,
          yR = MW.z - WW.z,
          NW = CW * yR - zR * bR,
          eW = zR * AW - wW * yR,
          BW = wW * bR - CW * AW,
          tR = Math.sqrt(NW * NW + eW * eW + BW * BW);
        let TW;
        return TW = 0 !== tR ? 1 / tR : 0, this.normal.x = NW * TW, this.normal.y = eW * TW, this.normal.z = BW * TW, this.d = -(this.normal.x * WW.x + this.normal.y * WW.y + this.normal.z * WW.z), this
      }
      isFrontFacingTo(WW, RW) {
        return wW.q.Dot(this.normal, WW) <= RW
      }
      signedDistanceTo(WW) {
        return wW.q.Dot(WW, this.normal) + this.d
      }
      static FromArray(WW) {
        return new CW(WW[0], WW[1], WW[2], WW[3])
      }
      static FromPoints(WW, RW, MW) {
        const wW = new CW(0, 0, 0, 0);
        return wW.copyFromPoints(WW, RW, MW), wW
      }
      static FromPositionAndNormal(WW, RW) {
        const MW = new CW(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(WW, RW, MW)
      }
      static FromPositionAndNormalToRef(WW, RW, MW) {
        return MW.normal.hyW(RW), MW.normal.normalize(), MW.d = -WW.dot(MW.normal), MW
      }
      static SignedDistanceToPlaneFromPositionAndNormal(WW, RW, MW) {
        const CW = -(RW.x * WW.x + RW.y * WW.y + RW.z * WW.z);
        return wW.q.Dot(MW, RW) + CW
      }
    }
    CW._TmpMatrix = wW.d.Identity()
  },
  36185: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => wW
    });
    class wW {
      constructor(WW, RW, MW, wW) {
        this.x = WW, this.y = RW, this.width = MW, this.height = wW
      }
      toGlobal(WW, RW) {
        return new wW(this.x * WW, this.y * RW, this.width * WW, this.height * RW)
      }
      toGlobalToRef(WW, RW, MW) {
        return MW.x = this.x * WW, MW.y = this.y * RW, MW.width = this.width * WW, MW.height = this.height * RW, this
      }
      clone() {
        return new wW(this.x, this.y, this.width, this.height)
      }
    }
  },
  36716: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => zR
    });
    var wW = MW(36721);
    const CW = (WW, RW, MW) => WW ? WW.getClassName && "Mesh" === WW.getClassName() ? null : !WW.getClassName || "SubMesh" !== WW.getClassName() && "PhysicsBody" !== WW.getClassName() ? WW.clone ? WW.clone() : Array.isArray(WW) ? WW.slice() : MW && "object" === typeof WW ? {
      ...WW
    } : null : WW.clone(RW) : null;
    class zR {
      static DeepCopy(WW, RW, MW, zR) {
        let AW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const bR = function(WW) {
          const RW = [];
          do {
            const MW = Object.getOwnPropertyNames(WW);
            for (const WW of MW) - 1 === RW.indexOf(WW) && RW.push(WW)
          } while (WW = Object.getPrototypeOf(WW));
          return RW
        }(WW);
        for (const NW of bR) {
          if ("_" === NW[0] && (!zR || -1 === zR.indexOf(NW))) continue;
          if (NW.endsWith("Observable")) continue;
          if (MW && -1 !== MW.indexOf(NW)) continue;
          const bR = WW[NW],
            eW = typeof bR;
          if ("function" !== eW) try {
            if ("object" === eW)
              if (bR instanceof Uint8Array) RW[NW] = Uint8Array.from(bR);
              else if (bR instanceof Array) {
              if (RW[NW] = [], bR.length > 0)
                if ("object" == typeof bR[0])
                  for (let WW = 0; WW < bR.length; WW++) {
                    const MW = CW(bR[WW], RW, AW); - 1 === RW[NW].indexOf(MW) && RW[NW].push(MW)
                  } else RW[NW] = bR.slice(0)
            } else RW[NW] = CW(bR, RW, AW);
            else RW[NW] = bR
          } catch (yR) {
            wW.b.Warn(yR.message)
          }
        }
      }
    }
  },
  35984: (WW, RW, MW) => {
    function wW() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (WW => {
        const RW = 16 * Math.random() | 0;
        return ("x" === WW ? RW : 3 & RW | 8).toString(16)
      }))
    }
    MW.d(RW, {
      e: () => wW
    })
  },
  36721: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => wW
    });
    class wW {
      static _CheckLimit(WW, RW) {
        let MW = wW._LogLimitOutputs[WW];
        return MW ? MW.current++ : (MW = {
          limit: RW,
          current: 1
        }, wW._LogLimitOutputs[WW] = MW), MW.current <= MW.limit
      }
      static _GenerateLimitMessage(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const MW = wW._LogLimitOutputs[WW];
        if (!MW || !wW.MessageLimitReached) return;
        const CW = this._Levels[RW];
        MW.current === MW.limit && wW[CW.name](wW.MessageLimitReached.replace(/%LIMIT%/g, "" + MW.limit).replace(/%TYPE%/g, CW.name ?? ""))
      }
      static _AddLogEntry(WW) {
        wW._LogCache = WW + wW._LogCache, wW.OnNewCacheEntry && wW.OnNewCacheEntry(WW)
      }
      static _FormatMessage(WW) {
        const RW = WW => WW < 10 ? "0" + WW : "" + WW,
          MW = new Date;
        return "[" + RW(MW.getHours()) + ":" + RW(MW.getMinutes()) + ":" + RW(MW.getSeconds()) + "]: " + WW
      }
      static _LogDisabled(WW, RW) {}
      static _LogEnabled() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          RW = arguments.length > 1 ? arguments[1] : void 0,
          MW = arguments.length > 2 ? arguments[2] : void 0;
        const CW = Array.isArray(RW) ? RW[0] : RW;
        if (void 0 !== MW && !wW._CheckLimit(CW, MW)) return;
        const zR = wW._FormatMessage(CW),
          AW = this._Levels[WW],
          bR = Array.isArray(RW) ? RW.slice(1) : [];
        AW.logFunc && AW.logFunc("BJS - " + zR, ...bR);
        const yR = `<div style='color:${AW.color}'>${zR}</div><br>`;
        wW._AddLogEntry(yR), wW._GenerateLimitMessage(CW, WW)
      }
      static get LogCache() {
        return wW._LogCache
      }
      static ClearLogCache() {
        wW._LogCache = "", wW._LogLimitOutputs = {}, wW.errorsCount = 0
      }
      static set LogLevels(WW) {
        wW.Log = wW._LogDisabled, wW.Warn = wW._LogDisabled, wW.Error = wW._LogDisabled;
        const RW = [wW.MessageLogLevel, wW.WarningLogLevel, wW.ErrorLogLevel];
        for (const MW of RW)
          if ((WW & MW) === MW) {
            const WW = this._Levels[MW];
            wW[WW.name] = wW._LogEnabled.bind(wW, MW)
          }
      }
    }
    wW.NoneLogLevel = 0, wW.MessageLogLevel = 1, wW.WarningLogLevel = 2, wW.ErrorLogLevel = 4, wW.AllLogLevel = 7, wW.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", wW._LogCache = "", wW._LogLimitOutputs = {}, wW._Levels = [{}, {
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
    }], wW.errorsCount = 0, wW.Log = wW._LogEnabled.bind(wW, wW.MessageLogLevel), wW.Warn = wW._LogEnabled.bind(wW, wW.WarningLogLevel), wW.Error = wW._LogEnabled.bind(wW, wW.ErrorLogLevel)
  },
  58574: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      CreateScreenshot: () => UW,
      CreateScreenshotAsync: () => EW,
      CreateScreenshotForFrameGraphAsync: () => vR,
      CreateScreenshotUsingRenderTarget: () => mR,
      CreateScreenshotUsingRenderTargetAsync: () => xR,
      CreateScreenshotWithResizeAsync: () => VW,
      RegisterScreenshotTools: () => nW,
      ScreenshotTools: () => uW
    });
    var wW = MW(38069),
      CW = MW(39273),
      zR = MW(39244),
      AW = MW(37615),
      bR = MW(39251),
      yR = MW(35344),
      NW = MW(35324);
    class eW extends bR.f {
      static _GetDefines(WW) {
        if (!WW) return null;
        return WW.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
      }
      _gatherImports(WW, RW) {
        WW ? (this._webGPUReady = !0, RW.push(Promise.all([MW.e(347).then((() => MW(58907))), MW.e(348).then((() => MW(58909)))]))) : RW.push(Promise.all([MW.e(349).then((() => MW(58915))), MW.e(350).then((() => MW(58917)))]))
      }
      constructor(WW) {
        const RW = {
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: WW,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || yR.d.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          vertexShader: eW.VertexUrl,
          fragmentShader: eW.FragmentUrl,
          uniforms: eW.Uniforms
        };
        super({
          ...RW,
          defines: eW._GetDefines(RW.engine)
        }), this.texelSize = new NW.n(0, 0)
      }
      bind() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.bind(WW), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
      }
    }
    eW.VertexUrl = "fxaa", eW.FragmentUrl = "fxaa", eW.Uniforms = ["texelSize"];
    class BW extends zR.c {
      getClassName() {
        return "FxaaPostProcess"
      }
      constructor(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          CW = arguments.length > 3 ? arguments[3] : void 0,
          zR = arguments.length > 4 ? arguments[4] : void 0,
          AW = arguments.length > 5 ? arguments[5] : void 0,
          bR = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const yR = {
          uniforms: eW.Uniforms,
          size: "number" === typeof RW ? RW : void 0,
          camera: MW,
          samplingMode: CW || wW.d.BILINEAR_SAMPLINGMODE,
          engine: zR,
          reusable: AW,
          textureType: bR,
          ...RW
        };
        super(WW, eW.FragmentUrl, {
          effectWrapper: "number" !== typeof RW && RW.effectWrapper ? void 0 : new eW(WW, zR, yR),
          ...yR
        }), this.onApplyObservable.add((WW => {
          this._effectWrapper.texelSize = this.texelSize
        }))
      }
      static _Parse(WW, RW, MW, wW) {
        return AW.d.Parse((() => new BW(WW.name, WW.options, RW, WW.renderTargetSamplingMode, MW.mC(), WW.reusable)), WW, MW, wW)
      }
    }
    var tR = MW(36721),
      TW = MW(37685),
      gR = MW(39287),
      iR = MW(39265),
      YW = MW(37483);
    const JW = 0;
    class PW {
      constructor(WW, RW, MW) {
        this.name = WW, this._parentTask = RW, this._context = MW, this.disabled = !1
      }
      setInitializeFunc(WW) {
        this._initFunc = WW
      }
      setExecuteFunc(WW) {
        this._executeFunc = WW
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
    class IW extends PW {
      static IsObjectListPass(WW) {
        return void 0 !== WW.setObjectList
      }
      get objectList() {
        return this._objectList
      }
      setObjectList(WW) {
        this._objectList = WW
      }
      constructor(WW, RW, MW, wW) {
        super(WW, RW, MW), this._engine = wW
      }
      _isValid() {
        const WW = super._isValid();
        return WW || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
      }
    }
    class oW extends PW {
      static IsRenderPass(WW) {
        return void 0 !== WW.setRenderTarget
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
      constructor(WW, RW, MW, wW) {
        super(WW, RW, MW), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = wW
      }
      setRenderTarget(WW) {
        this._renderTarget = WW
      }
      setRenderTargetDepth(WW) {
        this._renderTargetDepth = WW
      }
      addDependencies(WW) {
        if (void 0 !== WW)
          if (Array.isArray(WW))
            for (const RW of WW) this._dependencies.add(RW);
          else this._dependencies.add(WW)
      }
      collectDependencies(WW) {
        const RW = this._dependencies.keys();
        for (let MW = RW.next(); !0 !== MW.done; MW = RW.next()) WW.add(MW.value);
        if (void 0 !== this._renderTarget)
          if (Array.isArray(this._renderTarget))
            for (const MW of this._renderTarget) void 0 !== MW && WW.add(MW);
          else WW.add(this._renderTarget);
        void 0 !== this._renderTargetDepth && WW.add(this._renderTargetDepth)
      }
      setOutputLayerAndFaceIndices(WW) {
        const RW = this.frameGraphRenderTarget.renderTargetWrapper;
        if (RW)
          for (const MW of WW) RW.setLayerAndFaceIndex(MW.targetIndex, MW.layerIndex, MW.faceIndex)
      }
      _initialize() {
        this._frameGraphRenderTarget = this._context.createRenderTarget(this.name, this._renderTarget, this._renderTargetDepth, this.depthReadOnly, this.stencilReadOnly), super._initialize()
      }
      _execute() {
        this._context.bindRenderTarget(this._frameGraphRenderTarget), super._execute(), this._context.restoreDefaultFramebuffer()
      }
      _isValid() {
        const WW = super._isValid();
        return WW || (void 0 !== this._renderTarget || void 0 !== this.renderTargetDepth ? null : "Render target and render target depth cannot both be undefined.")
      }
      _dispose() {
        this._frameGraphRenderTarget?.dispose()
      }
    }
    var lW = MW(35346);
    class FW {
      get name() {
        return this._name
      }
      set name(WW) {
        this._name = WW
      }
      get disabled() {
        return this._disabled
      }
      set disabled(WW) {
        this._disabled = WW
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
      constructor(WW, RW) {
        this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new lW.c, this.onBeforeTaskExecute = new lW.c, this.onAfterTaskExecute = new lW.c, this.name = WW, this._frameGraph = RW, this._reset()
      }
      _reset() {
        for (const WW of this._passes) WW._dispose();
        for (const WW of this._passesDisabled) WW._dispose();
        this._passes.length = 0, this._passesDisabled.length = 0
      }
      _addPass(WW, RW) {
        RW ? this._passesDisabled.push(WW) : this._passes.push(WW)
      }
      _checkTask() {
        let WW, RW = null,
          MW = null;
        for (const bR of this._passes) {
          const wW = bR._isValid();
          if (wW) throw new Error(`Pass "${bR.name}" is not valid. ${wW}`);
          if (oW.IsRenderPass(bR)) {
            const WW = Array.isArray(bR.renderTarget) ? bR.renderTarget : [bR.renderTarget];
            RW = [];
            for (const MW of WW) void 0 !== MW && RW.push(this._frameGraph.textureManager.getTextureFromHandle(MW));
            MW = void 0 !== bR.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(bR.renderTargetDepth) : null
          } else IW.IsObjectListPass(bR) && (WW = bR.objectList)
        }
        let wW, CW = null,
          zR = [],
          AW = null;
        for (const bR of this._passesDisabled) {
          const WW = bR._isValid();
          if (WW) throw new Error(`Pass "${bR.name}" is not valid. ${WW}`);
          if (oW.IsRenderPass(bR)) {
            const WW = Array.isArray(bR.renderTarget) ? bR.renderTarget : [bR.renderTarget];
            CW = [];
            for (const RW of WW) void 0 !== RW && CW.push(this._frameGraph.textureManager.getTextureFromHandle(RW));
            zR = WW, AW = void 0 !== bR.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(bR.renderTargetDepth) : null
          } else IW.IsObjectListPass(bR) && (wW = bR.objectList)
        }
        if (this._passesDisabled.length > 0) {
          if (!this._checkSameRenderTarget(RW, CW)) {
            let WW = !0;
            for (const RW of zR)
              if (void 0 !== RW && !this._frameGraph.textureManager.isHistoryTexture(RW)) {
                WW = !1;
                break
              } if (!WW) throw new Error(`The output texture of the task "${this.name}" is different when it is enabled or disabled.`)
          }
          if (MW !== AW && null !== AW) throw new Error(`The output depth texture of the task "${this.name}" is different when it is enabled or disabled.`);
          if (WW !== wW && null !== wW) throw new Error(`The output object list of the task "${this.name}" is different when it is enabled or disabled.`)
        }
      }
      _execute() {
        const WW = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
        this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const RW of WW) RW._execute()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
        this.onAfterTaskExecute.notifyObservers(this)
      }
      _initializePasses() {
        this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const WW of this._passes) WW._initialize();
          for (const WW of this._passesDisabled) WW._initialize()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
      }
      _checkSameRenderTarget(WW, RW) {
        if (null === WW || null === RW) return WW === RW;
        if (WW.length !== RW.length) return !1;
        for (let MW = 0; MW < WW.length; MW++)
          if (WW[MW] !== RW[MW]) return !1;
        return !0
      }
    }
    class fW extends FW {
      get alphaMode() {
        return this.postProcess.alphaMode
      }
      set alphaMode(WW) {
        this.postProcess.alphaMode = WW
      }
      get drawWrapper() {
        return this._postProcessDrawWrapper
      }
      constructor(WW, RW, MW) {
        super(WW, RW), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = MW, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture = this._frameGraph.textureManager.createDanglingHandle(), this.outputDepthAttachmentTexture = this._frameGraph.textureManager.createDanglingHandle()
      }
      isReady() {
        return this.postProcess.isReady()
      }
      getClassName() {
        return "FrameGraphPostProcessTask"
      }
      record() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          RW = arguments.length > 1 ? arguments[1] : void 0,
          MW = arguments.length > 2 ? arguments[2] : void 0;
        if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
        const wW = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
        if (wW && (wW.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, wW), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentTexture, this.depthAttachmentTexture), wW) {
          const WW = this._frameGraph.textureManager.getTextureAbsoluteDimensions(wW);
          this._sourceWidth = WW.width, this._sourceHeight = WW.height
        }
        const CW = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
        this._outputWidth = CW.size.width, this._outputHeight = CW.size.height;
        const zR = this._frameGraph.addRenderPass(this.name);
        if (zR.depthReadOnly = this.depthReadOnly, zR.stencilReadOnly = this.stencilReadOnly, zR.addDependencies(this.sourceTexture), zR.setRenderTarget(this.outputTexture), zR.setRenderTargetDepth(this.depthAttachmentTexture), zR.setExecuteFunc((WW => {
            WW.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && WW.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), RW?.(WW), this.viewport && WW.setViewport(this.viewport), WW.applyFullScreenEffect(this._postProcessDrawWrapper, (() => {
              void 0 !== this.sourceTexture && WW.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), MW?.(WW), this.postProcess.bind()
            }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), WW.restoreDefaultFramebuffer(), WW.popDebugGroup()
          })), !WW) {
          const WW = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
          WW.depthReadOnly = this.depthReadOnly, WW.stencilReadOnly = this.stencilReadOnly, WW.addDependencies(this.sourceTexture), WW.setRenderTarget(this.outputTexture), WW.setRenderTargetDepth(this.depthAttachmentTexture), WW.setExecuteFunc((WW => {
            void 0 !== this.sourceTexture && 0 === this.alphaMode && (this.viewport && WW.setViewport(this.viewport), WW.copyTexture(this.sourceTexture, void 0, void 0 !== this.viewport))
          }))
        }
        return zR
      }
      dispose() {
        this.postProcess.dispose(), super.dispose()
      }
    }
    class QW extends fW {
      constructor(WW, RW, MW) {
        super(WW, RW, MW || new eW(WW, RW.engine))
      }
      getClassName() {
        return "FrameGraphFXAATask"
      }
      record() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          RW = arguments.length > 1 ? arguments[1] : void 0,
          MW = arguments.length > 2 ? arguments[2] : void 0;
        const wW = super.record(WW, RW, MW);
        return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, wW
      }
    }
    var rR = MW(39278);
    class cR extends fW {
      constructor(WW, RW, MW) {
        super(WW, RW, MW || new rR.d(WW, RW.engine))
      }
      getClassName() {
        return "FrameGraphPassTask"
      }
    }
    var XW = MW(37677),
      jR = MW(37758),
      kR = MW(37716),
      aR = MW(37830),
      sW = MW(35376);
    class dW {
      getRenderCamera(WW) {
        if (this._renderCamera) return this._renderCamera;
        {
          let RW;
          return RW = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, WW && RW && RW.isRigCamera ? RW.rigParent : RW
        }
      }
      setRenderCamera(WW) {
        this._renderCamera = WW
      }
      _getSharedGizmoLight() {
        return this._sharedGizmoLight || (this._sharedGizmoLight = new aR.b("shared gizmo light", new NW.q(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = sW.d.Gray()), this._sharedGizmoLight
      }
      static get DefaultUtilityLayer() {
        return null == dW._DefaultUtilityLayer ? dW._CreateDefaultUtilityLayerFromScene(yR.d.LastCreatedScene) : dW._DefaultUtilityLayer
      }
      static _CreateDefaultUtilityLayerFromScene(WW) {
        return dW._DefaultUtilityLayer = new dW(WW), dW._DefaultUtilityLayer.originalScene.rMW.addOnce((() => {
          dW._DefaultUtilityLayer = null
        })), dW._DefaultUtilityLayer
      }
      static get DefaultKeepDepthUtilityLayer() {
        return null == dW._DefaultKeepDepthUtilityLayer ? dW._CreateDefaultKeepUtilityLayerFromScene(yR.d.LastCreatedScene) : dW._DefaultKeepDepthUtilityLayer
      }
      static _CreateDefaultKeepUtilityLayerFromScene(WW) {
        return dW._DefaultKeepDepthUtilityLayer = new dW(WW), dW._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, dW._DefaultKeepDepthUtilityLayer.originalScene.rMW.addOnce((() => {
          dW._DefaultKeepDepthUtilityLayer = null
        })), dW._DefaultKeepDepthUtilityLayer
      }
      constructor(WW) {
        let RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.originalScene = WW, this.handleEvents = RW, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.processAllEvents = !1, this.pickingEnabled = !0, this.onPointerOutObservable = new lW.c, this.utilityLayerScene = new XW.i(WW.mC(), {
          virtual: !0,
          useFloatingOrigin: WW.floatingOriginMode
        }), this.utilityLayerScene.useRightHandedSystem = WW.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), RW && (this._originalPointerObserver = WW.onPrePointerObservable.add((RW => {
          if (!this.utilityLayerScene.activeCamera) return;
          if (!this.pickingEnabled) return;
          if (!this.processAllEvents && RW.type !== jR.c.POINTERMOVE && RW.type !== jR.c.POINTERUP && RW.type !== jR.c.POINTERDOWN && RW.type !== jR.c.POINTERDOUBLETAP) return;
          this.utilityLayerScene.pointerX = WW.pointerX, this.utilityLayerScene.pointerY = WW.pointerY;
          const MW = RW.event;
          if (WW.isPointerCaptured(MW.pointerId)) return void(this._pointerCaptures[MW.pointerId] = !1);
          const wW = MW => {
              let wW;
              if (RW.nearInteractionPickingInfo) wW = RW.nearInteractionPickingInfo.pickedMesh.QRW() == MW ? RW.nearInteractionPickingInfo : new kR.d;
              else if (MW !== this.utilityLayerScene && RW.originalPickingInfo) wW = RW.originalPickingInfo;
              else {
                let CW = null;
                this._renderCamera && (CW = MW._activeCamera, MW._activeCamera = this._renderCamera, RW.ray = null), wW = RW.ray ? MW.pickWithRay(RW.ray) : MW.WM(WW.pointerX, WW.pointerY), CW && (MW._activeCamera = CW)
              }
              return wW
            },
            CW = wW(this.utilityLayerScene);
          if (!RW.ray && CW && (RW.ray = CW.ray), RW.originalPickingInfo?.aimTransform && CW && (CW.aimTransform = RW.originalPickingInfo.aimTransform, CW.gripTransform = RW.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(RW), this.onlyCheckPointerDownEvents && RW.type != jR.c.POINTERDOWN) return RW.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new jR.g(RW.type, RW.event, CW), RW.type), void(RW.type === jR.c.POINTERUP && this._pointerCaptures[MW.pointerId] && (this._pointerCaptures[MW.pointerId] = !1));
          if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) CW && CW.hit && (RW.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new jR.g(RW.type, RW.event, CW), RW.type), RW.skipOnPointerObservable = !0);
          else {
            const MW = wW(WW),
              zR = RW.event;
            MW && CW && (0 === CW.distance && MW.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(MW.pickedMesh) ? (this._notifyObservers(RW, MW, zR), RW.skipOnPointerObservable = !0) : RW.type === jR.c.POINTERDOWN ? (this._pointerCaptures[zR.pointerId] = !0, this._notifyObservers(RW, MW, zR)) : RW.type !== jR.c.POINTERMOVE && RW.type !== jR.c.POINTERUP || (this._lastPointerEvents[zR.pointerId] && (this.onPointerOutObservable.notifyObservers(zR.pointerId), delete this._lastPointerEvents[zR.pointerId]), this._notifyObservers(RW, MW, zR)) : !this._pointerCaptures[zR.pointerId] && (CW.distance < MW.distance || 0 === MW.distance) ? (this._notifyObservers(RW, CW, zR), RW.skipOnPointerObservable || (RW.skipOnPointerObservable = CW.distance > 0)) : !this._pointerCaptures[zR.pointerId] && CW.distance >= MW.distance && (this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(MW.pickedMesh) ? (this._notifyObservers(RW, MW, zR), RW.skipOnPointerObservable = !0) : (RW.type !== jR.c.POINTERMOVE && RW.type !== jR.c.POINTERUP || this._lastPointerEvents[zR.pointerId] && (this.onPointerOutObservable.notifyObservers(zR.pointerId), delete this._lastPointerEvents[zR.pointerId]), this._notifyObservers(RW, CW, zR))), RW.type === jR.c.POINTERUP && this._pointerCaptures[zR.pointerId] && (this._pointerCaptures[zR.pointerId] = !1))
          }
        })), this._originalPointerObserver && WW.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, MW || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((WW => {
          this.shouldRender && WW == this.getRenderCamera() && this.render()
        }))), this._sceneDisposeObserver = this.originalScene.rMW.add((() => {
          this.dispose()
        })), this._updateCamera()
      }
      _notifyObservers(WW, RW, MW) {
        WW.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new jR.g(WW.type, WW.event, RW), WW.type), this._lastPointerEvents[MW.pointerId] = !0)
      }
      render() {
        if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
          const WW = this.utilityLayerScene.activeCamera.QRW(),
            RW = this.utilityLayerScene.activeCamera;
          RW._scene = this.utilityLayerScene, RW.leftCamera && (RW.leftCamera._scene = this.utilityLayerScene), RW.rightCamera && (RW.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), RW._scene = WW, RW.leftCamera && (RW.leftCamera._scene = WW), RW.rightCamera && (RW.rightCamera._scene = WW)
        }
      }
      dispose() {
        this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.rMW.remove(this._sceneDisposeObserver), this._originalPointerObserver && this.originalScene.onPrePointerObservable.remove(this._originalPointerObserver), this.utilityLayerScene.dispose()
      }
      _updateCamera() {
        this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
      }
    }
    dW._DefaultUtilityLayer = null, dW._DefaultKeepDepthUtilityLayer = null;
    const pW = {
      FindMainCamera: function(WW) {
        return WW.findMainCamera()
      },
      FindMainObjectRenderer: function(WW) {
        return WW.findMainObjectRenderer()
      },
      CreateUtilityLayerRenderer: function(WW) {
        let RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const MW = WW.LC,
          wW = new dW(MW, RW, !0);
        wW.utilityLayerScene.activeCamera = MW.activeCamera;
        let CW = pW.FindMainCamera(MW.frameGraph);
        !CW && MW.cameras.length > 0 && (CW = MW.cameras[0]), CW && (wW.setRenderCamera(CW), wW.utilityLayerScene.activeCamera = CW);
        const zR = MW.onAfterRenderObservable.add((() => {
          wW.render()
        }));
        return wW.utilityLayerScene.rMW.addOnce((() => {
          MW.onAfterRenderObservable.remove(zR)
        })), wW
      }
    };
    let hW = null;

    function UW(WW, RW, MW, wW) {
      let CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        zR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        AW = arguments.length > 6 ? arguments[6] : void 0,
        bR = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        yR = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
      const {
        height: NW,
        width: eW
      } = KW(WW, RW, MW);
      if (!NW || !eW) return void tR.b.Error("Invalid 'size' parameter !");
      const BW = RW.QRW();
      let gR = BW.activeCamera !== RW;
      if (BW.frameGraph) {
        const WW = pW.FindMainObjectRenderer(BW.frameGraph);
        WW && (gR = WW.camera !== RW)
      }
      gR ? mR(WW, RW, MW, (WW => {
        if (zR) {
          const RW = new Blob([WW]);
          TW.j.DownloadBlob(RW), wW && wW("")
        } else wW && wW(WW)
      }), CW, 1, WW.getCreationOptions().antialias, void 0, void 0, void 0, void 0, AW) : WW.onEndFrameObservable.addOnce((() => {
        hW || (hW = document.createElement("canvas")), hW.width = eW, hW.height = NW;
        const RW = hW.getContext("2d"),
          MW = WW.getRenderingCanvas();
        if (!RW || !MW) return void tR.b.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
        const gR = MW.width,
          iR = MW.height,
          YW = hW.width,
          JW = hW.height,
          PW = YW / gR,
          IW = JW / iR,
          oW = bR ? Math.max(PW, IW) : Math.min(PW, IW),
          lW = gR * oW,
          FW = iR * oW,
          fW = (YW - lW) / 2,
          QW = (JW - FW) / 2;
        RW.save(), RW.fillStyle = yR ? BW.clearColor.toHexString() : "rgba(0, 0, 0, 0)", RW.fillRect(0, 0, eW, NW), RW.restore(), RW.drawImage(MW, 0, 0, gR, iR, fW, QW, lW, FW), zR ? (TW.j.EncodeScreenshotCanvasData(hW, void 0, CW, void 0, AW), wW && wW("")) : TW.j.EncodeScreenshotCanvasData(hW, wW, CW, void 0, AW)
      }))
    }
    async function EW(WW, RW, MW) {
      let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        CW = arguments.length > 4 ? arguments[4] : void 0,
        zR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        AW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        bR = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      return await new Promise(((yR, NW) => {
        UW(WW, RW, MW, (WW => {
          "undefined" !== typeof WW ? yR(WW) : NW(new Error("Data is undefined"))
        }), wW, bR, CW, zR, AW)
      }))
    }
    async function VW(WW, RW, MW, wW) {
      let CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        zR = arguments.length > 5 ? arguments[5] : void 0,
        AW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return await new Promise((bR => {
        UW(WW, RW, {
          width: MW,
          height: wW
        }, (() => {
          bR()
        }), CW, !0, zR, AW)
      }))
    }

    function mR(WW, RW, zR, AW) {
      let bR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        yR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
        NW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        eW = arguments.length > 7 ? arguments[7] : void 0,
        TW = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        JW = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        PW = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
        IW = arguments.length > 11 ? arguments[11] : void 0,
        oW = arguments.length > 12 ? arguments[12] : void 0,
        lW = arguments.length > 13 ? arguments[13] : void 0,
        FW = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
        fW = arguments.length > 15 ? arguments[15] : void 0;
      const QW = RW.QRW();
      if (QW.frameGraph) return void vR(QW.frameGraph, RW, zR, bR, yR, NW, eW, IW, lW, !AW).then((WW => {
        AW && AW(WW)
      }));
      const {
        height: rR,
        width: cR,
        finalWidth: XW,
        finalHeight: jR
      } = KW(WW, RW, zR), kR = {
        width: cR,
        height: rR
      };
      if (!rR || !cR) return void tR.b.Error("Invalid 'size' parameter !");
      WW.skipFrameRender = !0;
      const aR = WW.getRenderWidth,
        sW = WW.getRenderHeight;
      WW.getRenderWidth = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && WW._currentRenderTarget ? WW._currentRenderTarget.width : cR
      }, WW.getRenderHeight = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && WW._currentRenderTarget ? WW._currentRenderTarget.height : rR
      }, WW.onResizeObservable.hasObservers() && WW.onResizeObservable.notifyObservers(WW);
      const dW = new CW.b("screenShot", kR, QW, !1, !1, 0, !1, wW.d.BILINEAR_SAMPLINGMODE, void 0, JW, void 0, void 0, void 0, yR);
      dW.renderList = QW.meshes.slice(), dW.samples = yR, dW.renderSprites = TW, dW.activeCamera = RW, dW.forceLayerMaskCheck = PW, oW?.(dW);
      const pW = lW || gR.DumpData,
        hW = () => {
          QW.incrementRenderId(), QW.resetCachedMaterial(), (0, YW.g)((() => dW.isReadyForRendering() && RW.isReady(!0)), (() => {
            WW.onEndFrameObservable.addOnce((() => {
              XW === cR && jR === rR ? dW.readPixels(void 0, void 0, void 0, !1).then((WW => {
                pW(cR, rR, WW, AW, bR, eW, !0, void 0, IW), dW.dispose()
              })) : (WW.isWebGPU ? MW.e(343).then((() => MW(58866))) : MW.e(344).then((() => MW(58871)))).then((async () => await (0, iR.b)("pass", dW.getInternalTexture(), QW, void 0, void 0, void 0, XW, jR).then((RW => {
                WW._readTexturePixels(RW, XW, jR, -1, 0, null, !0, !1, 0, 0).then((WW => {
                  pW(XW, jR, WW, AW, bR, eW, !0, void 0, IW), RW.dispose()
                }))
              }))))
            })), QW.incrementRenderId(), QW.resetCachedMaterial();
            const wW = QW.activeCamera,
              CW = QW.activeCameras,
              zR = RW.outputRenderTarget,
              yR = QW.spritesEnabled;
            QW.activeCamera = RW, QW.activeCameras = null, RW.outputRenderTarget = dW, QW.spritesEnabled = TW;
            const NW = QW.meshes;
            QW.meshes = dW.renderList || QW.meshes;
            try {
              QW.render()
            } finally {
              QW.activeCamera = wW, QW.activeCameras = CW, RW.outputRenderTarget = zR, QW.spritesEnabled = yR, QW.meshes = NW, WW.getRenderWidth = aR, WW.getRenderHeight = sW, WW.onResizeObservable.hasObservers() && WW.onResizeObservable.notifyObservers(WW), RW.getProjectionMatrix(!0), WW.skipFrameRender = !1
            }
          }), (() => {
            WW.skipFrameRender = !1, WW.getRenderWidth = aR, WW.getRenderHeight = sW, fW?.()
          }), void 0, FW)
        };
      if (NW) {
        const WW = new BW("antialiasing", 1, QW.activeCamera);
        dW.addPostProcess(WW), WW.autoClear = !0, WW.onEffectCreatedObservable.addOnce((WW => {
          WW.isReady() ? hW() : WW.onCompiled = () => {
            hW()
          }
        }))
      } else hW()
    }
    async function xR(WW, RW, MW) {
      let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        zR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        AW = arguments.length > 6 ? arguments[6] : void 0,
        bR = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        yR = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        NW = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
        eW = arguments.length > 10 ? arguments[10] : void 0,
        BW = arguments.length > 11 ? arguments[11] : void 0,
        tR = arguments.length > 12 ? arguments[12] : void 0;
      return await new Promise(((TW, gR) => {
        mR(WW, RW, MW, (WW => {
          "undefined" !== typeof WW ? TW(WW) : gR(new Error("Data is undefined"))
        }), wW, CW, zR, AW, bR, yR, NW, eW, BW, tR)
      }))
    }
    async function vR(WW, RW, MW) {
      let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        zR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        AW = arguments.length > 6 ? arguments[6] : void 0,
        bR = arguments.length > 7 ? arguments[7] : void 0,
        yR = arguments.length > 8 ? arguments[8] : void 0,
        NW = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        eW = arguments.length > 10 ? arguments[10] : void 0;
      const BW = WW.engine,
        tR = WW.textureManager,
        {
          height: TW,
          width: iR,
          finalWidth: YW,
          finalHeight: PW
        } = KW(BW, RW, MW),
        IW = {
          width: iR,
          height: TW
        },
        oW = yR || gR.DumpData,
        lW = WW.tasks,
        FW = lW.length,
        fW = WW.pausedExecution,
        rR = BW.getCaps().parallelShaderCompile;
      tR.setBackBufferTextures(0, 0, {
        size: IW,
        options: {
          createMipMaps: !1,
          samples: CW,
          types: [0],
          formats: [5],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot color"]
        },
        sizeIsPercentage: !1
      }, {
        size: IW,
        options: {
          createMipMaps: !1,
          samples: CW,
          types: [0],
          formats: [BW.isStencilEnable ? 13 : 14],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot depth"]
        },
        sizeIsPercentage: !1
      });
      let XW = JW;
      if (zR) {
        const RW = new QW("fxaa", WW);
        RW.sourceTexture = XW, XW = RW.outputTexture, WW.addTask(RW)
      }
      if (YW !== iR || PW !== TW) {
        const RW = new cR("pass", WW);
        RW.sourceTexture = XW, RW.targetTexture = WW.textureManager.createRenderTargetTexture("pass_output", {
          size: {
            width: YW,
            height: PW
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
        }), XW = RW.outputTexture, WW.addTask(RW)
      }
      const jR = pW.FindMainObjectRenderer(WW);
      let kR = null;
      jR && (kR = jR.camera, jR.camera = RW), BW.getCaps().parallelShaderCompile = void 0, await WW.buildAsync();
      const aR = eW ?? (tR.hasHistoryTextures ? 32 : 1);
      for (let gR = 0; gR < aR; ++gR) WW.execute();
      WW.pausedExecution = !0, BW.getCaps().parallelShaderCompile = rR;
      for (let gR = FW; gR < lW.length; ++gR) WW.tasks[gR].dispose();
      WW.tasks.length = FW, jR && kR && (jR.camera = kR);
      const sW = WW.textureManager.getTextureFromHandle(XW);
      return sW.incrementReferences(), tR.resetBackBufferTextures(), await WW.buildAsync(), WW.pausedExecution = fW, new Promise((WW => {
        BW._readTexturePixels(sW, YW, PW, -1, 0, null, !0, !1, 0, 0).then((async RW => {
          sW.dispose(), oW(YW, PW, RW, NW ? void 0 : RW => WW(RW), wW, AW, !0, void 0, bR), NW && WW(null)
        }))
      }))
    }

    function KW(WW, RW, MW) {
      let wW = 0,
        CW = 0,
        zR = 0,
        AW = 0;
      if ("object" === typeof MW) {
        const bR = MW.precision ? Math.abs(MW.precision) : 1;
        MW.width && MW.height ? (wW = MW.height * bR, CW = MW.width * bR) : MW.width && !MW.height ? (CW = MW.width * bR, wW = Math.round(CW / WW.getAspectRatio(RW))) : MW.height && !MW.width ? (wW = MW.height * bR, CW = Math.round(wW * WW.getAspectRatio(RW))) : (CW = Math.round(WW.getRenderWidth() * bR), wW = Math.round(CW / WW.getAspectRatio(RW))), MW.finalWidth && MW.finalHeight ? (AW = MW.finalHeight, zR = MW.finalWidth) : MW.finalWidth && !MW.finalHeight ? (zR = MW.finalWidth, AW = Math.round(zR / WW.getAspectRatio(RW))) : MW.finalHeight && !MW.finalWidth ? (AW = MW.finalHeight, zR = Math.round(AW * WW.getAspectRatio(RW))) : (zR = CW, AW = wW)
      } else isNaN(MW) || (wW = MW, CW = MW, zR = MW, AW = MW);
      return CW && (CW = Math.floor(CW)), wW && (wW = Math.floor(wW)), zR && (zR = Math.floor(zR)), AW && (AW = Math.floor(AW)), {
        height: 0 | wW,
        width: 0 | CW,
        finalWidth: 0 | zR,
        finalHeight: 0 | AW
      }
    }
    const uW = {
      CreateScreenshot: UW,
      CreateScreenshotAsync: EW,
      CreateScreenshotWithResizeAsync: VW,
      CreateScreenshotUsingRenderTarget: mR,
      CreateScreenshotUsingRenderTargetAsync: xR,
      CreateScreenshotForFrameGraphAsync: vR
    };
    let OW = !1;

    function nW() {
      if (OW) return;
      OW = !0;
      TW.j.CreateScreenshot = UW, TW.j.CreateScreenshotAsync = EW, TW.j.CreateScreenshotUsingRenderTarget = mR, TW.j.CreateScreenshotUsingRenderTargetAsync = xR
    }
    nW()
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);