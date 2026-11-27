export const id = 271;
export const ids = [271, 272];
export const modules = {
  41765: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => tW,
      e: () => xW
    });
    var mW = OW(41516),
      EW = OW(41519),
      NW = OW(38241),
      PW = OW(38372),
      LW = OW(41773),
      cW = OW(41732),
      wW = OW(38299);
    let tW = (() => {
        var WW;
        let iW, OW, cW = LW.b,
          wW = [],
          tW = [],
          ZW = [],
          xW = [];
        return WW = class extends cW {
          constructor(WW, iW, OW, EW) {
            super(WW, OW, EW), this.groundColor = (0, mW.g)(this, wW, new PW.b(0, 0, 0)), this.direction = ((0, mW.g)(this, tW), (0, mW.g)(this, ZW, void 0)), (0, mW.g)(this, xW), this.direction = iW || NW.q.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(WW) {
            return this.direction = NW.q.Normalize(WW.subtract(NW.q.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(WW, iW) {
            const OW = NW.q.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", OW.x, OW.y, OW.z, 0, iW), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), iW), this
          }
          transferToNodeMaterialEffect(WW, iW) {
            const OW = NW.q.Normalize(this.direction);
            return WW.setFloat3(iW, OW.x, OW.y, OW.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = NW.d.Identity()), this._worldMatrix
          }
          getTypeID() {
            return LW.b.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(WW, iW) {
            WW["HEMILIGHT" + iW] = !0
          }
        }, (() => {
          const NW = "function" === typeof Symbol && Symbol.metadata ? Object.create(cW[Symbol.metadata] ?? null) : void 0;
          iW = [(0, EW.n)()], OW = [(0, EW.K)()], (0, mW.e)(null, null, iW, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: WW => "groundColor" in WW,
              get: WW => WW.groundColor,
              set: (WW, iW) => {
                WW.groundColor = iW
              }
            },
            metadata: NW
          }, wW, tW), (0, mW.e)(null, null, OW, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: WW => "direction" in WW,
              get: WW => WW.direction,
              set: (WW, iW) => {
                WW.direction = iW
              }
            },
            metadata: NW
          }, ZW, xW), NW && Object.defineProperty(WW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: NW
          })
        })(), WW
      })(),
      ZW = !1;

    function xW() {
      ZW || (ZW = !0, cW.d.AddNodeConstructor("Light_Type_3", ((WW, iW) => () => new tW(WW, NW.q.Zero(), iW))), (0, wW.h)("BABYLON.HemisphericLight", tW))
    }
  },
  38937: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => EW
    });
    var mW = OW(38939);
    class EW {
      static GetPlanes(WW) {
        const iW = [];
        for (let OW = 0; OW < 6; OW++) iW.push(new mW.c(0, 0, 0, 0));
        return EW.GetPlanesToRef(WW, iW), iW
      }
      static GetNearPlaneToRef(WW, iW) {
        const OW = WW.m;
        iW.normal.x = OW[3] + OW[2], iW.normal.y = OW[7] + OW[6], iW.normal.z = OW[11] + OW[10], iW.d = OW[15] + OW[14], iW.normalize()
      }
      static GetFarPlaneToRef(WW, iW) {
        const OW = WW.m;
        iW.normal.x = OW[3] - OW[2], iW.normal.y = OW[7] - OW[6], iW.normal.z = OW[11] - OW[10], iW.d = OW[15] - OW[14], iW.normalize()
      }
      static GetLeftPlaneToRef(WW, iW) {
        const OW = WW.m;
        iW.normal.x = OW[3] + OW[0], iW.normal.y = OW[7] + OW[4], iW.normal.z = OW[11] + OW[8], iW.d = OW[15] + OW[12], iW.normalize()
      }
      static GetRightPlaneToRef(WW, iW) {
        const OW = WW.m;
        iW.normal.x = OW[3] - OW[0], iW.normal.y = OW[7] - OW[4], iW.normal.z = OW[11] - OW[8], iW.d = OW[15] - OW[12], iW.normalize()
      }
      static GetTopPlaneToRef(WW, iW) {
        const OW = WW.m;
        iW.normal.x = OW[3] - OW[1], iW.normal.y = OW[7] - OW[5], iW.normal.z = OW[11] - OW[9], iW.d = OW[15] - OW[13], iW.normalize()
      }
      static GetBottomPlaneToRef(WW, iW) {
        const OW = WW.m;
        iW.normal.x = OW[3] + OW[1], iW.normal.y = OW[7] + OW[5], iW.normal.z = OW[11] + OW[9], iW.d = OW[15] + OW[13], iW.normalize()
      }
      static GetPlanesToRef(WW, iW) {
        EW.GetNearPlaneToRef(WW, iW[0]), EW.GetFarPlaneToRef(WW, iW[1]), EW.GetLeftPlaneToRef(WW, iW[2]), EW.GetRightPlaneToRef(WW, iW[3]), EW.GetTopPlaneToRef(WW, iW[4]), EW.GetBottomPlaneToRef(WW, iW[5])
      }
      static IsPointInFrustum(WW, iW) {
        for (let OW = 0; OW < 6; OW++)
          if (iW[OW].dotCoordinate(WW) < 0) return !1;
        return !0
      }
    }
  },
  38939: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => EW
    });
    var mW = OW(38241);
    class EW {
      constructor(WW, iW, OW, EW) {
        this.normal = new mW.q(WW, iW, OW), this.d = EW
      }
      wEW() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new EW(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let iW = 0;
        return 0 !== WW && (iW = 1 / WW), this.normal.x *= iW, this.normal.y *= iW, this.normal.z *= iW, this.d *= iW, this
      }
      transform(WW) {
        const iW = EW._TmpMatrix;
        WW.invertToRef(iW);
        const OW = iW.m,
          mW = this.normal.x,
          NW = this.normal.y,
          PW = this.normal.z,
          LW = this.d,
          cW = mW * OW[0] + NW * OW[1] + PW * OW[2] + LW * OW[3],
          wW = mW * OW[4] + NW * OW[5] + PW * OW[6] + LW * OW[7],
          tW = mW * OW[8] + NW * OW[9] + PW * OW[10] + LW * OW[11],
          ZW = mW * OW[12] + NW * OW[13] + PW * OW[14] + LW * OW[15];
        return new EW(cW, wW, tW, ZW)
      }
      dotCoordinate(WW) {
        return this.normal.x * WW.x + this.normal.y * WW.y + this.normal.z * WW.z + this.d
      }
      copyFromPoints(WW, iW, OW) {
        const mW = iW.x - WW.x,
          EW = iW.y - WW.y,
          NW = iW.z - WW.z,
          PW = OW.x - WW.x,
          LW = OW.y - WW.y,
          cW = OW.z - WW.z,
          wW = EW * cW - NW * LW,
          tW = NW * PW - mW * cW,
          ZW = mW * LW - EW * PW,
          xW = Math.sqrt(wW * wW + tW * tW + ZW * ZW);
        let lW;
        return lW = 0 !== xW ? 1 / xW : 0, this.normal.x = wW * lW, this.normal.y = tW * lW, this.normal.z = ZW * lW, this.d = -(this.normal.x * WW.x + this.normal.y * WW.y + this.normal.z * WW.z), this
      }
      isFrontFacingTo(WW, iW) {
        return mW.q.Dot(this.normal, WW) <= iW
      }
      signedDistanceTo(WW) {
        return mW.q.Dot(WW, this.normal) + this.d
      }
      static FromArray(WW) {
        return new EW(WW[0], WW[1], WW[2], WW[3])
      }
      static FromPoints(WW, iW, OW) {
        const mW = new EW(0, 0, 0, 0);
        return mW.copyFromPoints(WW, iW, OW), mW
      }
      static FromPositionAndNormal(WW, iW) {
        const OW = new EW(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(WW, iW, OW)
      }
      static FromPositionAndNormalToRef(WW, iW, OW) {
        return OW.normal.HJ(iW), OW.normal.normalize(), OW.d = -WW.dot(OW.normal), OW
      }
      static SignedDistanceToPlaneFromPositionAndNormal(WW, iW, OW) {
        const EW = -(iW.x * WW.x + iW.y * WW.y + iW.z * WW.z);
        return mW.q.Dot(OW, iW) + EW
      }
    }
    EW._TmpMatrix = mW.d.Identity()
  },
  39271: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => mW
    });
    class mW {
      constructor(WW, iW, OW, mW) {
        this.x = WW, this.y = iW, this.width = OW, this.height = mW
      }
      toGlobal(WW, iW) {
        return new mW(this.x * WW, this.y * iW, this.width * WW, this.height * iW)
      }
      toGlobalToRef(WW, iW, OW) {
        return OW.x = this.x * WW, OW.y = this.y * iW, OW.width = this.width * WW, OW.height = this.height * iW, this
      }
      clone() {
        return new mW(this.x, this.y, this.width, this.height)
      }
    }
  },
  39908: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => NW
    });
    var mW = OW(39911);
    const EW = (WW, iW, OW) => WW ? WW.getClassName && "Mesh" === WW.getClassName() ? null : !WW.getClassName || "SubMesh" !== WW.getClassName() && "PhysicsBody" !== WW.getClassName() ? WW.clone ? WW.clone() : Array.isArray(WW) ? WW.slice() : OW && "object" === typeof WW ? {
      ...WW
    } : null : WW.clone(iW) : null;
    class NW {
      static DeepCopy(WW, iW, OW, NW) {
        let PW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const LW = function(WW) {
          const iW = [];
          do {
            const OW = Object.getOwnPropertyNames(WW);
            for (const WW of OW) - 1 === iW.indexOf(WW) && iW.push(WW)
          } while (WW = Object.getPrototypeOf(WW));
          return iW
        }(WW);
        for (const wW of LW) {
          if ("_" === wW[0] && (!NW || -1 === NW.indexOf(wW))) continue;
          if (wW.endsWith("Observable")) continue;
          if (OW && -1 !== OW.indexOf(wW)) continue;
          const LW = WW[wW],
            tW = typeof LW;
          if ("function" !== tW) try {
            if ("object" === tW)
              if (LW instanceof Uint8Array) iW[wW] = Uint8Array.from(LW);
              else if (LW instanceof Array) {
              if (iW[wW] = [], LW.length > 0)
                if ("object" == typeof LW[0])
                  for (let WW = 0; WW < LW.length; WW++) {
                    const OW = EW(LW[WW], iW, PW); - 1 === iW[wW].indexOf(OW) && iW[wW].push(OW)
                  } else iW[wW] = LW.slice(0)
            } else iW[wW] = EW(LW, iW, PW);
            else iW[wW] = LW
          } catch (cW) {
            mW.b.Warn(cW.message)
          }
        }
      }
    }
  },
  39088: (WW, iW, OW) => {
    function mW() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (WW => {
        const iW = 16 * Math.random() | 0;
        return ("x" === WW ? iW : 3 & iW | 8).toString(16)
      }))
    }
    OW.d(iW, {
      b: () => mW
    })
  },
  39911: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => mW
    });
    class mW {
      static _CheckLimit(WW, iW) {
        let OW = mW._LogLimitOutputs[WW];
        return OW ? OW.current++ : (OW = {
          limit: iW,
          current: 1
        }, mW._LogLimitOutputs[WW] = OW), OW.current <= OW.limit
      }
      static _GenerateLimitMessage(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const OW = mW._LogLimitOutputs[WW];
        if (!OW || !mW.MessageLimitReached) return;
        const EW = this._Levels[iW];
        OW.current === OW.limit && mW[EW.name](mW.MessageLimitReached.replace(/%LIMIT%/g, "" + OW.limit).replace(/%TYPE%/g, EW.name ?? ""))
      }
      static _AddLogEntry(WW) {
        mW._LogCache = WW + mW._LogCache, mW.OnNewCacheEntry && mW.OnNewCacheEntry(WW)
      }
      static _FormatMessage(WW) {
        const iW = WW => WW < 10 ? "0" + WW : "" + WW,
          OW = new Date;
        return "[" + iW(OW.getHours()) + ":" + iW(OW.getMinutes()) + ":" + iW(OW.getSeconds()) + "]: " + WW
      }
      static _LogDisabled(WW, iW) {}
      static _LogEnabled() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          iW = arguments.length > 1 ? arguments[1] : void 0,
          OW = arguments.length > 2 ? arguments[2] : void 0;
        const EW = Array.isArray(iW) ? iW[0] : iW;
        if (void 0 !== OW && !mW._CheckLimit(EW, OW)) return;
        const NW = mW._FormatMessage(EW),
          PW = this._Levels[WW],
          LW = Array.isArray(iW) ? iW.slice(1) : [];
        PW.logFunc && PW.logFunc("BJS - " + NW, ...LW);
        const cW = `<div style='color:${PW.color}'>${NW}</div><br>`;
        mW._AddLogEntry(cW), mW._GenerateLimitMessage(EW, WW)
      }
      static get LogCache() {
        return mW._LogCache
      }
      static ClearLogCache() {
        mW._LogCache = "", mW._LogLimitOutputs = {}, mW.errorsCount = 0
      }
      static set LogLevels(WW) {
        mW.Log = mW._LogDisabled, mW.Warn = mW._LogDisabled, mW.Error = mW._LogDisabled;
        const iW = [mW.MessageLogLevel, mW.WarningLogLevel, mW.ErrorLogLevel];
        for (const OW of iW)
          if ((WW & OW) === OW) {
            const WW = this._Levels[OW];
            mW[WW.name] = mW._LogEnabled.bind(mW, OW)
          }
      }
    }
    mW.NoneLogLevel = 0, mW.MessageLogLevel = 1, mW.WarningLogLevel = 2, mW.ErrorLogLevel = 4, mW.AllLogLevel = 7, mW.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", mW._LogCache = "", mW._LogLimitOutputs = {}, mW._Levels = [{}, {
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
    }], mW.errorsCount = 0, mW.Log = mW._LogEnabled.bind(mW, mW.MessageLogLevel), mW.Warn = mW._LogEnabled.bind(mW, mW.WarningLogLevel), mW.Error = mW._LogEnabled.bind(mW, mW.ErrorLogLevel)
  },
  64392: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      CreateScreenshot: () => gW,
      CreateScreenshotAsync: () => DW,
      CreateScreenshotForFrameGraphAsync: () => CW,
      CreateScreenshotUsingRenderTarget: () => pW,
      CreateScreenshotUsingRenderTargetAsync: () => fW,
      CreateScreenshotWithResizeAsync: () => VW,
      RegisterScreenshotTools: () => RW,
      ScreenshotTools: () => BW
    });
    var mW = OW(41992),
      EW = OW(53997),
      NW = OW(53977),
      PW = OW(41538),
      LW = OW(53980),
      cW = OW(38270),
      wW = OW(38241);
    class tW extends LW.g {
      static _GetDefines(WW) {
        if (!WW) return null;
        return WW.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
      }
      _gatherImports(WW, iW) {
        WW ? (this._webGPUReady = !0, iW.push(Promise.all([OW.e(692).then((() => OW(64634))), OW.e(693).then((() => OW(64641)))]))) : iW.push(Promise.all([OW.e(694).then((() => OW(64650))), OW.e(695).then((() => OW(64659)))]))
      }
      constructor(WW) {
        const iW = {
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: WW,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || cW.d.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          vertexShader: tW.VertexUrl,
          fragmentShader: tW.FragmentUrl,
          uniforms: tW.Uniforms
        };
        super({
          ...iW,
          defines: tW._GetDefines(iW.engine)
        }), this.texelSize = new wW.m(0, 0)
      }
      bind() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.bind(WW), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
      }
    }
    tW.VertexUrl = "fxaa", tW.FragmentUrl = "fxaa", tW.Uniforms = ["texelSize"];
    class ZW extends NW.c {
      getClassName() {
        return "FxaaPostProcess"
      }
      constructor(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          EW = arguments.length > 3 ? arguments[3] : void 0,
          NW = arguments.length > 4 ? arguments[4] : void 0,
          PW = arguments.length > 5 ? arguments[5] : void 0,
          LW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const cW = {
          uniforms: tW.Uniforms,
          size: "number" === typeof iW ? iW : void 0,
          camera: OW,
          samplingMode: EW || mW.h.BILINEAR_SAMPLINGMODE,
          engine: NW,
          reusable: PW,
          textureType: LW,
          ...iW
        };
        super(WW, tW.FragmentUrl, {
          effectWrapper: "number" !== typeof iW && iW.effectWrapper ? void 0 : new tW(WW, NW, cW),
          ...cW
        }), this.onApplyObservable.add((WW => {
          this._effectWrapper.texelSize = this.texelSize
        }))
      }
      static _Parse(WW, iW, OW, mW) {
        return PW.d.Parse((() => new ZW(WW.name, WW.options, iW, WW.renderTargetSamplingMode, OW.VA(), WW.reusable)), WW, OW, mW)
      }
    }
    var xW = OW(39911),
      lW = OW(41620),
      AW = OW(54011),
      bW = OW(53995),
      jW = OW(41420);
    const UW = 0;
    class kW {
      constructor(WW, iW, OW) {
        this.name = WW, this._parentTask = iW, this._context = OW, this.disabled = !1
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
    class sW extends kW {
      static IsObjectListPass(WW) {
        return void 0 !== WW.setObjectList
      }
      get objectList() {
        return this._objectList
      }
      setObjectList(WW) {
        this._objectList = WW
      }
      constructor(WW, iW, OW, mW) {
        super(WW, iW, OW), this._engine = mW
      }
      _isValid() {
        const WW = super._isValid();
        return WW || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
      }
    }
    class MW extends kW {
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
      constructor(WW, iW, OW, mW) {
        super(WW, iW, OW), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = mW
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
            for (const iW of WW) this._dependencies.add(iW);
          else this._dependencies.add(WW)
      }
      collectDependencies(WW) {
        const iW = this._dependencies.keys();
        for (let OW = iW.next(); !0 !== OW.done; OW = iW.next()) WW.add(OW.value);
        if (void 0 !== this._renderTarget)
          if (Array.isArray(this._renderTarget))
            for (const OW of this._renderTarget) void 0 !== OW && WW.add(OW);
          else WW.add(this._renderTarget);
        void 0 !== this._renderTargetDepth && WW.add(this._renderTargetDepth)
      }
      setOutputLayerAndFaceIndices(WW) {
        const iW = this.frameGraphRenderTarget.renderTargetWrapper;
        if (iW)
          for (const OW of WW) iW.setLayerAndFaceIndex(OW.targetIndex, OW.layerIndex, OW.faceIndex)
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
    var KW = OW(38276);
    class SW {
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
      constructor(WW, iW) {
        this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new KW.e, this.onBeforeTaskExecute = new KW.e, this.onAfterTaskExecute = new KW.e, this.name = WW, this._frameGraph = iW, this._reset()
      }
      _reset() {
        for (const WW of this._passes) WW._dispose();
        for (const WW of this._passesDisabled) WW._dispose();
        this._passes.length = 0, this._passesDisabled.length = 0
      }
      _addPass(WW, iW) {
        iW ? this._passesDisabled.push(WW) : this._passes.push(WW)
      }
      _checkTask() {
        let WW, iW = null,
          OW = null;
        for (const LW of this._passes) {
          const mW = LW._isValid();
          if (mW) throw new Error(`Pass "${LW.name}" is not valid. ${mW}`);
          if (MW.IsRenderPass(LW)) {
            const WW = Array.isArray(LW.renderTarget) ? LW.renderTarget : [LW.renderTarget];
            iW = [];
            for (const OW of WW) void 0 !== OW && iW.push(this._frameGraph.textureManager.getTextureFromHandle(OW));
            OW = void 0 !== LW.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(LW.renderTargetDepth) : null
          } else sW.IsObjectListPass(LW) && (WW = LW.objectList)
        }
        let mW, EW = null,
          NW = [],
          PW = null;
        for (const LW of this._passesDisabled) {
          const WW = LW._isValid();
          if (WW) throw new Error(`Pass "${LW.name}" is not valid. ${WW}`);
          if (MW.IsRenderPass(LW)) {
            const WW = Array.isArray(LW.renderTarget) ? LW.renderTarget : [LW.renderTarget];
            EW = [];
            for (const iW of WW) void 0 !== iW && EW.push(this._frameGraph.textureManager.getTextureFromHandle(iW));
            NW = WW, PW = void 0 !== LW.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(LW.renderTargetDepth) : null
          } else sW.IsObjectListPass(LW) && (mW = LW.objectList)
        }
        if (this._passesDisabled.length > 0) {
          if (!this._checkSameRenderTarget(iW, EW)) {
            let WW = !0;
            for (const iW of NW)
              if (void 0 !== iW && !this._frameGraph.textureManager.isHistoryTexture(iW)) {
                WW = !1;
                break
              } if (!WW) throw new Error(`The output texture of the task "${this.name}" is different when it is enabled or disabled.`)
          }
          if (OW !== PW && null !== PW) throw new Error(`The output depth texture of the task "${this.name}" is different when it is enabled or disabled.`);
          if (WW !== mW && null !== mW) throw new Error(`The output object list of the task "${this.name}" is different when it is enabled or disabled.`)
        }
      }
      _execute() {
        const WW = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
        this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const iW of WW) iW._execute()
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
      _checkSameRenderTarget(WW, iW) {
        if (null === WW || null === iW) return WW === iW;
        if (WW.length !== iW.length) return !1;
        for (let OW = 0; OW < WW.length; OW++)
          if (WW[OW] !== iW[OW]) return !1;
        return !0
      }
    }
    class YW extends SW {
      get alphaMode() {
        return this.postProcess.alphaMode
      }
      set alphaMode(WW) {
        this.postProcess.alphaMode = WW
      }
      get drawWrapper() {
        return this._postProcessDrawWrapper
      }
      constructor(WW, iW, OW) {
        super(WW, iW), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = OW, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture = this._frameGraph.textureManager.createDanglingHandle(), this.outputDepthAttachmentTexture = this._frameGraph.textureManager.createDanglingHandle()
      }
      isReady() {
        return this.postProcess.isReady()
      }
      getClassName() {
        return "FrameGraphPostProcessTask"
      }
      record() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          iW = arguments.length > 1 ? arguments[1] : void 0,
          OW = arguments.length > 2 ? arguments[2] : void 0;
        if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
        const mW = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
        if (mW && (mW.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, mW), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentTexture, this.depthAttachmentTexture), mW) {
          const WW = this._frameGraph.textureManager.getTextureAbsoluteDimensions(mW);
          this._sourceWidth = WW.width, this._sourceHeight = WW.height
        }
        const EW = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
        this._outputWidth = EW.size.width, this._outputHeight = EW.size.height;
        const NW = this._frameGraph.addRenderPass(this.name);
        if (NW.depthReadOnly = this.depthReadOnly, NW.stencilReadOnly = this.stencilReadOnly, NW.addDependencies(this.sourceTexture), NW.setRenderTarget(this.outputTexture), NW.setRenderTargetDepth(this.depthAttachmentTexture), NW.setExecuteFunc((WW => {
            WW.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && WW.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), iW?.(WW), this.viewport && WW.setViewport(this.viewport), WW.applyFullScreenEffect(this._postProcessDrawWrapper, (() => {
              void 0 !== this.sourceTexture && WW.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), OW?.(WW), this.postProcess.bind()
            }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), WW.restoreDefaultFramebuffer(), WW.popDebugGroup()
          })), !WW) {
          const WW = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
          WW.depthReadOnly = this.depthReadOnly, WW.stencilReadOnly = this.stencilReadOnly, WW.addDependencies(this.sourceTexture), WW.setRenderTarget(this.outputTexture), WW.setRenderTargetDepth(this.depthAttachmentTexture), WW.setExecuteFunc((WW => {
            void 0 !== this.sourceTexture && 0 === this.alphaMode && (this.viewport && WW.setViewport(this.viewport), WW.copyTexture(this.sourceTexture, void 0, void 0 !== this.viewport))
          }))
        }
        return NW
      }
      dispose() {
        this.postProcess.dispose(), super.dispose()
      }
    }
    class yW extends YW {
      constructor(WW, iW, OW) {
        super(WW, iW, OW || new tW(WW, iW.engine))
      }
      getClassName() {
        return "FrameGraphFXAATask"
      }
      record() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          iW = arguments.length > 1 ? arguments[1] : void 0,
          OW = arguments.length > 2 ? arguments[2] : void 0;
        const mW = super.record(WW, iW, OW);
        return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, mW
      }
    }
    var TW = OW(54003);
    class JW extends YW {
      constructor(WW, iW, OW) {
        super(WW, iW, OW || new TW.h(WW, iW.engine))
      }
      getClassName() {
        return "FrameGraphPassTask"
      }
    }
    var hW = OW(41612),
      HW = OW(41695),
      nW = OW(41653),
      uW = OW(41765),
      oW = OW(38372);
    class dW {
      getRenderCamera(WW) {
        if (this._renderCamera) return this._renderCamera;
        {
          let iW;
          return iW = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, WW && iW && iW.isRigCamera ? iW.rigParent : iW
        }
      }
      setRenderCamera(WW) {
        this._renderCamera = WW
      }
      _getSharedGizmoLight() {
        return this._sharedGizmoLight || (this._sharedGizmoLight = new uW.c("shared gizmo light", new wW.q(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = oW.b.Gray()), this._sharedGizmoLight
      }
      static get DefaultUtilityLayer() {
        return null == dW._DefaultUtilityLayer ? dW._CreateDefaultUtilityLayerFromScene(cW.d.LastCreatedScene) : dW._DefaultUtilityLayer
      }
      static _CreateDefaultUtilityLayerFromScene(WW) {
        return dW._DefaultUtilityLayer = new dW(WW), dW._DefaultUtilityLayer.originalScene.jD.addOnce((() => {
          dW._DefaultUtilityLayer = null
        })), dW._DefaultUtilityLayer
      }
      static get DefaultKeepDepthUtilityLayer() {
        return null == dW._DefaultKeepDepthUtilityLayer ? dW._CreateDefaultKeepUtilityLayerFromScene(cW.d.LastCreatedScene) : dW._DefaultKeepDepthUtilityLayer
      }
      static _CreateDefaultKeepUtilityLayerFromScene(WW) {
        return dW._DefaultKeepDepthUtilityLayer = new dW(WW), dW._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, dW._DefaultKeepDepthUtilityLayer.originalScene.jD.addOnce((() => {
          dW._DefaultKeepDepthUtilityLayer = null
        })), dW._DefaultKeepDepthUtilityLayer
      }
      constructor(WW) {
        let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.originalScene = WW, this.handleEvents = iW, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.processAllEvents = !1, this.pickingEnabled = !0, this.onPointerOutObservable = new KW.e, this.utilityLayerScene = new hW.i(WW.VA(), {
          virtual: !0,
          useFloatingOrigin: WW.floatingOriginMode
        }), this.utilityLayerScene.useRightHandedSystem = WW.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), iW && (this._originalPointerObserver = WW.onPrePointerObservable.add((iW => {
          if (!this.utilityLayerScene.activeCamera) return;
          if (!this.pickingEnabled) return;
          if (!this.processAllEvents && iW.type !== HW.c.POINTERMOVE && iW.type !== HW.c.POINTERUP && iW.type !== HW.c.POINTERDOWN && iW.type !== HW.c.POINTERDOUBLETAP) return;
          this.utilityLayerScene.pointerX = WW.pointerX, this.utilityLayerScene.pointerY = WW.pointerY;
          const OW = iW.event;
          if (WW.isPointerCaptured(OW.pointerId)) return void(this._pointerCaptures[OW.pointerId] = !1);
          const mW = OW => {
              let mW;
              if (iW.nearInteractionPickingInfo) mW = iW.nearInteractionPickingInfo.pickedMesh.bD() == OW ? iW.nearInteractionPickingInfo : new nW.b;
              else if (OW !== this.utilityLayerScene && iW.originalPickingInfo) mW = iW.originalPickingInfo;
              else {
                let EW = null;
                this._renderCamera && (EW = OW._activeCamera, OW._activeCamera = this._renderCamera, iW.ray = null), mW = iW.ray ? OW.pickWithRay(iW.ray) : OW.Kl(WW.pointerX, WW.pointerY), EW && (OW._activeCamera = EW)
              }
              return mW
            },
            EW = mW(this.utilityLayerScene);
          if (!iW.ray && EW && (iW.ray = EW.ray), iW.originalPickingInfo?.aimTransform && EW && (EW.aimTransform = iW.originalPickingInfo.aimTransform, EW.gripTransform = iW.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(iW), this.onlyCheckPointerDownEvents && iW.type != HW.c.POINTERDOWN) return iW.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new HW.f(iW.type, iW.event, EW), iW.type), void(iW.type === HW.c.POINTERUP && this._pointerCaptures[OW.pointerId] && (this._pointerCaptures[OW.pointerId] = !1));
          if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) EW && EW.hit && (iW.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new HW.f(iW.type, iW.event, EW), iW.type), iW.skipOnPointerObservable = !0);
          else {
            const OW = mW(WW),
              NW = iW.event;
            OW && EW && (0 === EW.distance && OW.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(OW.pickedMesh) ? (this._notifyObservers(iW, OW, NW), iW.skipOnPointerObservable = !0) : iW.type === HW.c.POINTERDOWN ? (this._pointerCaptures[NW.pointerId] = !0, this._notifyObservers(iW, OW, NW)) : iW.type !== HW.c.POINTERMOVE && iW.type !== HW.c.POINTERUP || (this._lastPointerEvents[NW.pointerId] && (this.onPointerOutObservable.notifyObservers(NW.pointerId), delete this._lastPointerEvents[NW.pointerId]), this._notifyObservers(iW, OW, NW)) : !this._pointerCaptures[NW.pointerId] && (EW.distance < OW.distance || 0 === OW.distance) ? (this._notifyObservers(iW, EW, NW), iW.skipOnPointerObservable || (iW.skipOnPointerObservable = EW.distance > 0)) : !this._pointerCaptures[NW.pointerId] && EW.distance >= OW.distance && (this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(OW.pickedMesh) ? (this._notifyObservers(iW, OW, NW), iW.skipOnPointerObservable = !0) : (iW.type !== HW.c.POINTERMOVE && iW.type !== HW.c.POINTERUP || this._lastPointerEvents[NW.pointerId] && (this.onPointerOutObservable.notifyObservers(NW.pointerId), delete this._lastPointerEvents[NW.pointerId]), this._notifyObservers(iW, EW, NW))), iW.type === HW.c.POINTERUP && this._pointerCaptures[NW.pointerId] && (this._pointerCaptures[NW.pointerId] = !1))
          }
        })), this._originalPointerObserver && WW.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, OW || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((WW => {
          this.shouldRender && WW == this.getRenderCamera() && this.render()
        }))), this._sceneDisposeObserver = this.originalScene.jD.add((() => {
          this.dispose()
        })), this._updateCamera()
      }
      _notifyObservers(WW, iW, OW) {
        WW.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new HW.f(WW.type, WW.event, iW), WW.type), this._lastPointerEvents[OW.pointerId] = !0)
      }
      render() {
        if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
          const WW = this.utilityLayerScene.activeCamera.bD(),
            iW = this.utilityLayerScene.activeCamera;
          iW._scene = this.utilityLayerScene, iW.leftCamera && (iW.leftCamera._scene = this.utilityLayerScene), iW.rightCamera && (iW.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), iW._scene = WW, iW.leftCamera && (iW.leftCamera._scene = WW), iW.rightCamera && (iW.rightCamera._scene = WW)
        }
      }
      dispose() {
        this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.jD.remove(this._sceneDisposeObserver), this._originalPointerObserver && this.originalScene.onPrePointerObservable.remove(this._originalPointerObserver), this.utilityLayerScene.dispose()
      }
      _updateCamera() {
        this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
      }
    }
    dW._DefaultUtilityLayer = null, dW._DefaultKeepDepthUtilityLayer = null;
    const eW = {
      FindMainCamera: function(WW) {
        return WW.findMainCamera()
      },
      FindMainObjectRenderer: function(WW) {
        return WW.findMainObjectRenderer()
      },
      CreateUtilityLayerRenderer: function(WW) {
        let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const OW = WW.rb,
          mW = new dW(OW, iW, !0);
        mW.utilityLayerScene.activeCamera = OW.activeCamera;
        let EW = eW.FindMainCamera(OW.frameGraph);
        !EW && OW.cameras.length > 0 && (EW = OW.cameras[0]), EW && (mW.setRenderCamera(EW), mW.utilityLayerScene.activeCamera = EW);
        const NW = OW.onAfterRenderObservable.add((() => {
          mW.render()
        }));
        return mW.utilityLayerScene.jD.addOnce((() => {
          OW.onAfterRenderObservable.remove(NW)
        })), mW
      }
    };
    let vW = null;

    function gW(WW, iW, OW, mW) {
      let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        NW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        PW = arguments.length > 6 ? arguments[6] : void 0,
        LW = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        cW = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
      const {
        height: wW,
        width: tW
      } = XW(WW, iW, OW);
      if (!wW || !tW) return void xW.b.Error("Invalid 'size' parameter !");
      const ZW = iW.bD();
      let AW = ZW.activeCamera !== iW;
      if (ZW.frameGraph) {
        const WW = eW.FindMainObjectRenderer(ZW.frameGraph);
        WW && (AW = WW.camera !== iW)
      }
      AW ? pW(WW, iW, OW, (WW => {
        if (NW) {
          const iW = new Blob([WW]);
          lW.f.DownloadBlob(iW), mW && mW("")
        } else mW && mW(WW)
      }), EW, 1, WW.getCreationOptions().antialias, void 0, void 0, void 0, void 0, PW) : WW.onEndFrameObservable.addOnce((() => {
        vW || (vW = document.createElement("canvas")), vW.width = tW, vW.height = wW;
        const iW = vW.getContext("2d"),
          OW = WW.getRenderingCanvas();
        if (!iW || !OW) return void xW.b.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
        const AW = OW.width,
          bW = OW.height,
          jW = vW.width,
          UW = vW.height,
          kW = jW / AW,
          sW = UW / bW,
          MW = LW ? Math.max(kW, sW) : Math.min(kW, sW),
          KW = AW * MW,
          SW = bW * MW,
          YW = (jW - KW) / 2,
          yW = (UW - SW) / 2;
        iW.save(), iW.fillStyle = cW ? ZW.clearColor.toHexString() : "rgba(0, 0, 0, 0)", iW.fillRect(0, 0, tW, wW), iW.restore(), iW.drawImage(OW, 0, 0, AW, bW, YW, yW, KW, SW), NW ? (lW.f.EncodeScreenshotCanvasData(vW, void 0, EW, void 0, PW), mW && mW("")) : lW.f.EncodeScreenshotCanvasData(vW, mW, EW, void 0, PW)
      }))
    }
    async function DW(WW, iW, OW) {
      let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        EW = arguments.length > 4 ? arguments[4] : void 0,
        NW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        PW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        LW = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      return await new Promise(((cW, wW) => {
        gW(WW, iW, OW, (WW => {
          "undefined" !== typeof WW ? cW(WW) : wW(new Error("Data is undefined"))
        }), mW, LW, EW, NW, PW)
      }))
    }
    async function VW(WW, iW, OW, mW) {
      let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        NW = arguments.length > 5 ? arguments[5] : void 0,
        PW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return await new Promise((LW => {
        gW(WW, iW, {
          width: OW,
          height: mW
        }, (() => {
          LW()
        }), EW, !0, NW, PW)
      }))
    }

    function pW(WW, iW, NW, PW) {
      let LW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        cW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
        wW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        tW = arguments.length > 7 ? arguments[7] : void 0,
        lW = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        UW = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        kW = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
        sW = arguments.length > 11 ? arguments[11] : void 0,
        MW = arguments.length > 12 ? arguments[12] : void 0,
        KW = arguments.length > 13 ? arguments[13] : void 0,
        SW = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
        YW = arguments.length > 15 ? arguments[15] : void 0;
      const yW = iW.bD();
      if (yW.frameGraph) return void CW(yW.frameGraph, iW, NW, LW, cW, wW, tW, sW, KW, !PW).then((WW => {
        PW && PW(WW)
      }));
      const {
        height: TW,
        width: JW,
        finalWidth: hW,
        finalHeight: HW
      } = XW(WW, iW, NW), nW = {
        width: JW,
        height: TW
      };
      if (!TW || !JW) return void xW.b.Error("Invalid 'size' parameter !");
      WW.skipFrameRender = !0;
      const uW = WW.getRenderWidth,
        oW = WW.getRenderHeight;
      WW.getRenderWidth = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && WW._currentRenderTarget ? WW._currentRenderTarget.width : JW
      }, WW.getRenderHeight = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && WW._currentRenderTarget ? WW._currentRenderTarget.height : TW
      }, WW.onResizeObservable.hasObservers() && WW.onResizeObservable.notifyObservers(WW);
      const dW = new EW.e("screenShot", nW, yW, !1, !1, 0, !1, mW.h.BILINEAR_SAMPLINGMODE, void 0, UW, void 0, void 0, void 0, cW);
      dW.renderList = yW.meshes.slice(), dW.samples = cW, dW.renderSprites = lW, dW.activeCamera = iW, dW.forceLayerMaskCheck = kW, MW?.(dW);
      const eW = KW || AW.DumpData,
        vW = () => {
          yW.incrementRenderId(), yW.resetCachedMaterial(), (0, jW.g)((() => dW.isReadyForRendering() && iW.isReady(!0)), (() => {
            WW.onEndFrameObservable.addOnce((() => {
              hW === JW && HW === TW ? dW.readPixels(void 0, void 0, void 0, !1).then((WW => {
                eW(JW, TW, WW, PW, LW, tW, !0, void 0, sW), dW.dispose()
              })) : (WW.isWebGPU ? OW.e(688).then((() => OW(64585))) : OW.e(689).then((() => OW(64588)))).then((async () => await (0, bW.c)("pass", dW.getInternalTexture(), yW, void 0, void 0, void 0, hW, HW).then((iW => {
                WW._readTexturePixels(iW, hW, HW, -1, 0, null, !0, !1, 0, 0).then((WW => {
                  eW(hW, HW, WW, PW, LW, tW, !0, void 0, sW), iW.dispose()
                }))
              }))))
            })), yW.incrementRenderId(), yW.resetCachedMaterial();
            const mW = yW.activeCamera,
              EW = yW.activeCameras,
              NW = iW.outputRenderTarget,
              cW = yW.spritesEnabled;
            yW.activeCamera = iW, yW.activeCameras = null, iW.outputRenderTarget = dW, yW.spritesEnabled = lW;
            const wW = yW.meshes;
            yW.meshes = dW.renderList || yW.meshes;
            try {
              yW.render()
            } finally {
              yW.activeCamera = mW, yW.activeCameras = EW, iW.outputRenderTarget = NW, yW.spritesEnabled = cW, yW.meshes = wW, WW.getRenderWidth = uW, WW.getRenderHeight = oW, WW.onResizeObservable.hasObservers() && WW.onResizeObservable.notifyObservers(WW), iW.getProjectionMatrix(!0), WW.skipFrameRender = !1
            }
          }), (() => {
            WW.skipFrameRender = !1, WW.getRenderWidth = uW, WW.getRenderHeight = oW, YW?.()
          }), void 0, SW)
        };
      if (wW) {
        const WW = new ZW("antialiasing", 1, yW.activeCamera);
        dW.addPostProcess(WW), WW.autoClear = !0, WW.onEffectCreatedObservable.addOnce((WW => {
          WW.isReady() ? vW() : WW.onCompiled = () => {
            vW()
          }
        }))
      } else vW()
    }
    async function fW(WW, iW, OW) {
      let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        NW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        PW = arguments.length > 6 ? arguments[6] : void 0,
        LW = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        cW = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        wW = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
        tW = arguments.length > 10 ? arguments[10] : void 0,
        ZW = arguments.length > 11 ? arguments[11] : void 0,
        xW = arguments.length > 12 ? arguments[12] : void 0;
      return await new Promise(((lW, AW) => {
        pW(WW, iW, OW, (WW => {
          "undefined" !== typeof WW ? lW(WW) : AW(new Error("Data is undefined"))
        }), mW, EW, NW, PW, LW, cW, wW, tW, ZW, xW)
      }))
    }
    async function CW(WW, iW, OW) {
      let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        NW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        PW = arguments.length > 6 ? arguments[6] : void 0,
        LW = arguments.length > 7 ? arguments[7] : void 0,
        cW = arguments.length > 8 ? arguments[8] : void 0,
        wW = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        tW = arguments.length > 10 ? arguments[10] : void 0;
      const ZW = WW.engine,
        xW = WW.textureManager,
        {
          height: lW,
          width: bW,
          finalWidth: jW,
          finalHeight: kW
        } = XW(ZW, iW, OW),
        sW = {
          width: bW,
          height: lW
        },
        MW = cW || AW.DumpData,
        KW = WW.tasks,
        SW = KW.length,
        YW = WW.pausedExecution,
        TW = ZW.getCaps().parallelShaderCompile;
      xW.setBackBufferTextures(0, 0, {
        size: sW,
        options: {
          createMipMaps: !1,
          samples: EW,
          types: [0],
          formats: [5],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot color"]
        },
        sizeIsPercentage: !1
      }, {
        size: sW,
        options: {
          createMipMaps: !1,
          samples: EW,
          types: [0],
          formats: [ZW.isStencilEnable ? 13 : 14],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot depth"]
        },
        sizeIsPercentage: !1
      });
      let hW = UW;
      if (NW) {
        const iW = new yW("fxaa", WW);
        iW.sourceTexture = hW, hW = iW.outputTexture, WW.addTask(iW)
      }
      if (jW !== bW || kW !== lW) {
        const iW = new JW("pass", WW);
        iW.sourceTexture = hW, iW.targetTexture = WW.textureManager.createRenderTargetTexture("pass_output", {
          size: {
            width: jW,
            height: kW
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
        }), hW = iW.outputTexture, WW.addTask(iW)
      }
      const HW = eW.FindMainObjectRenderer(WW);
      let nW = null;
      HW && (nW = HW.camera, HW.camera = iW), ZW.getCaps().parallelShaderCompile = void 0, await WW.buildAsync();
      const uW = tW ?? (xW.hasHistoryTextures ? 32 : 1);
      for (let AW = 0; AW < uW; ++AW) WW.execute();
      WW.pausedExecution = !0, ZW.getCaps().parallelShaderCompile = TW;
      for (let AW = SW; AW < KW.length; ++AW) WW.tasks[AW].dispose();
      WW.tasks.length = SW, HW && nW && (HW.camera = nW);
      const oW = WW.textureManager.getTextureFromHandle(hW);
      return oW.incrementReferences(), xW.resetBackBufferTextures(), await WW.buildAsync(), WW.pausedExecution = YW, new Promise((WW => {
        ZW._readTexturePixels(oW, jW, kW, -1, 0, null, !0, !1, 0, 0).then((async iW => {
          oW.dispose(), MW(jW, kW, iW, wW ? void 0 : iW => WW(iW), mW, PW, !0, void 0, LW), wW && WW(null)
        }))
      }))
    }

    function XW(WW, iW, OW) {
      let mW = 0,
        EW = 0,
        NW = 0,
        PW = 0;
      if ("object" === typeof OW) {
        const LW = OW.precision ? Math.abs(OW.precision) : 1;
        OW.width && OW.height ? (mW = OW.height * LW, EW = OW.width * LW) : OW.width && !OW.height ? (EW = OW.width * LW, mW = Math.round(EW / WW.getAspectRatio(iW))) : OW.height && !OW.width ? (mW = OW.height * LW, EW = Math.round(mW * WW.getAspectRatio(iW))) : (EW = Math.round(WW.getRenderWidth() * LW), mW = Math.round(EW / WW.getAspectRatio(iW))), OW.finalWidth && OW.finalHeight ? (PW = OW.finalHeight, NW = OW.finalWidth) : OW.finalWidth && !OW.finalHeight ? (NW = OW.finalWidth, PW = Math.round(NW / WW.getAspectRatio(iW))) : OW.finalHeight && !OW.finalWidth ? (PW = OW.finalHeight, NW = Math.round(PW * WW.getAspectRatio(iW))) : (NW = EW, PW = mW)
      } else isNaN(OW) || (mW = OW, EW = OW, NW = OW, PW = OW);
      return EW && (EW = Math.floor(EW)), mW && (mW = Math.floor(mW)), NW && (NW = Math.floor(NW)), PW && (PW = Math.floor(PW)), {
        height: 0 | mW,
        width: 0 | EW,
        finalWidth: 0 | NW,
        finalHeight: 0 | PW
      }
    }
    const BW = {
      CreateScreenshot: gW,
      CreateScreenshotAsync: DW,
      CreateScreenshotWithResizeAsync: VW,
      CreateScreenshotUsingRenderTarget: pW,
      CreateScreenshotUsingRenderTargetAsync: fW,
      CreateScreenshotForFrameGraphAsync: CW
    };
    let qW = !1;

    function RW() {
      if (qW) return;
      qW = !0;
      lW.f.CreateScreenshot = gW, lW.f.CreateScreenshotAsync = DW, lW.f.CreateScreenshotUsingRenderTarget = pW, lW.f.CreateScreenshotUsingRenderTargetAsync = fW
    }
    RW()
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);