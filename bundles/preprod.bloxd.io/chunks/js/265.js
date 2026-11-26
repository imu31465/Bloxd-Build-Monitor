export const id = 265;
export const ids = [265, 266];
export const modules = {
  41533: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => EH,
      c: () => GH
    });
    var AH = LH(41290),
      rH = LH(41297),
      SH = LH(37963),
      hH = LH(38074),
      tH = LH(41535),
      zH = LH(41498),
      CH = LH(38012);
    let EH = (() => {
        var HH;
        let BH, LH, zH = tH.b,
          CH = [],
          EH = [],
          XH = [],
          GH = [];
        return HH = class extends zH {
          constructor(HH, BH, LH, rH) {
            super(HH, LH, rH), this.groundColor = (0, AH.k)(this, CH, new hH.c(0, 0, 0)), this.direction = ((0, AH.k)(this, EH), (0, AH.k)(this, XH, void 0)), (0, AH.k)(this, GH), this.direction = BH || SH.o.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(HH) {
            return this.direction = SH.o.Normalize(HH.subtract(SH.o.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(HH, BH) {
            const LH = SH.o.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", LH.x, LH.y, LH.z, 0, BH), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), BH), this
          }
          transferToNodeMaterialEffect(HH, BH) {
            const LH = SH.o.Normalize(this.direction);
            return HH.setFloat3(BH, LH.x, LH.y, LH.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = SH.e.Identity()), this._worldMatrix
          }
          getTypeID() {
            return tH.b.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(HH, BH) {
            HH["HEMILIGHT" + BH] = !0
          }
        }, (() => {
          const SH = "function" === typeof Symbol && Symbol.metadata ? Object.create(zH[Symbol.metadata] ?? null) : void 0;
          BH = [(0, rH.l)()], LH = [(0, rH.F)()], (0, AH.g)(null, null, BH, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: HH => "groundColor" in HH,
              get: HH => HH.groundColor,
              set: (HH, BH) => {
                HH.groundColor = BH
              }
            },
            metadata: SH
          }, CH, EH), (0, AH.g)(null, null, LH, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: HH => "direction" in HH,
              get: HH => HH.direction,
              set: (HH, BH) => {
                HH.direction = BH
              }
            },
            metadata: SH
          }, XH, GH), SH && Object.defineProperty(HH, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: SH
          })
        })(), HH
      })(),
      XH = !1;

    function GH() {
      XH || (XH = !0, zH.b.AddNodeConstructor("Light_Type_3", ((HH, BH) => () => new EH(HH, SH.o.Zero(), BH))), (0, CH.f)("BABYLON.HemisphericLight", EH))
    }
  },
  38610: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => rH
    });
    var AH = LH(38619);
    class rH {
      static GetPlanes(HH) {
        const BH = [];
        for (let LH = 0; LH < 6; LH++) BH.push(new AH.d(0, 0, 0, 0));
        return rH.GetPlanesToRef(HH, BH), BH
      }
      static GetNearPlaneToRef(HH, BH) {
        const LH = HH.m;
        BH.normal.x = LH[3] + LH[2], BH.normal.y = LH[7] + LH[6], BH.normal.z = LH[11] + LH[10], BH.d = LH[15] + LH[14], BH.normalize()
      }
      static GetFarPlaneToRef(HH, BH) {
        const LH = HH.m;
        BH.normal.x = LH[3] - LH[2], BH.normal.y = LH[7] - LH[6], BH.normal.z = LH[11] - LH[10], BH.d = LH[15] - LH[14], BH.normalize()
      }
      static GetLeftPlaneToRef(HH, BH) {
        const LH = HH.m;
        BH.normal.x = LH[3] + LH[0], BH.normal.y = LH[7] + LH[4], BH.normal.z = LH[11] + LH[8], BH.d = LH[15] + LH[12], BH.normalize()
      }
      static GetRightPlaneToRef(HH, BH) {
        const LH = HH.m;
        BH.normal.x = LH[3] - LH[0], BH.normal.y = LH[7] - LH[4], BH.normal.z = LH[11] - LH[8], BH.d = LH[15] - LH[12], BH.normalize()
      }
      static GetTopPlaneToRef(HH, BH) {
        const LH = HH.m;
        BH.normal.x = LH[3] - LH[1], BH.normal.y = LH[7] - LH[5], BH.normal.z = LH[11] - LH[9], BH.d = LH[15] - LH[13], BH.normalize()
      }
      static GetBottomPlaneToRef(HH, BH) {
        const LH = HH.m;
        BH.normal.x = LH[3] + LH[1], BH.normal.y = LH[7] + LH[5], BH.normal.z = LH[11] + LH[9], BH.d = LH[15] + LH[13], BH.normalize()
      }
      static GetPlanesToRef(HH, BH) {
        rH.GetNearPlaneToRef(HH, BH[0]), rH.GetFarPlaneToRef(HH, BH[1]), rH.GetLeftPlaneToRef(HH, BH[2]), rH.GetRightPlaneToRef(HH, BH[3]), rH.GetTopPlaneToRef(HH, BH[4]), rH.GetBottomPlaneToRef(HH, BH[5])
      }
      static IsPointInFrustum(HH, BH) {
        for (let LH = 0; LH < 6; LH++)
          if (BH[LH].dotCoordinate(HH) < 0) return !1;
        return !0
      }
    }
  },
  38619: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => rH
    });
    var AH = LH(37963);
    class rH {
      constructor(HH, BH, LH, rH) {
        this.normal = new AH.o(HH, BH, LH), this.d = rH
      }
      xrH() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new rH(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let HH = this.normal.getHashCode();
        return HH = 397 * HH ^ this.d, HH
      }
      normalize() {
        const HH = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let BH = 0;
        return 0 !== HH && (BH = 1 / HH), this.normal.x *= BH, this.normal.y *= BH, this.normal.z *= BH, this.d *= BH, this
      }
      transform(HH) {
        const BH = rH._TmpMatrix;
        HH.invertToRef(BH);
        const LH = BH.m,
          AH = this.normal.x,
          SH = this.normal.y,
          hH = this.normal.z,
          tH = this.d,
          zH = AH * LH[0] + SH * LH[1] + hH * LH[2] + tH * LH[3],
          CH = AH * LH[4] + SH * LH[5] + hH * LH[6] + tH * LH[7],
          EH = AH * LH[8] + SH * LH[9] + hH * LH[10] + tH * LH[11],
          XH = AH * LH[12] + SH * LH[13] + hH * LH[14] + tH * LH[15];
        return new rH(zH, CH, EH, XH)
      }
      dotCoordinate(HH) {
        return this.normal.x * HH.x + this.normal.y * HH.y + this.normal.z * HH.z + this.d
      }
      copyFromPoints(HH, BH, LH) {
        const AH = BH.x - HH.x,
          rH = BH.y - HH.y,
          SH = BH.z - HH.z,
          hH = LH.x - HH.x,
          tH = LH.y - HH.y,
          zH = LH.z - HH.z,
          CH = rH * zH - SH * tH,
          EH = SH * hH - AH * zH,
          XH = AH * tH - rH * hH,
          GH = Math.sqrt(CH * CH + EH * EH + XH * XH);
        let YH;
        return YH = 0 !== GH ? 1 / GH : 0, this.normal.x = CH * YH, this.normal.y = EH * YH, this.normal.z = XH * YH, this.d = -(this.normal.x * HH.x + this.normal.y * HH.y + this.normal.z * HH.z), this
      }
      isFrontFacingTo(HH, BH) {
        return AH.o.Dot(this.normal, HH) <= BH
      }
      signedDistanceTo(HH) {
        return AH.o.Dot(HH, this.normal) + this.d
      }
      static FromArray(HH) {
        return new rH(HH[0], HH[1], HH[2], HH[3])
      }
      static FromPoints(HH, BH, LH) {
        const AH = new rH(0, 0, 0, 0);
        return AH.copyFromPoints(HH, BH, LH), AH
      }
      static FromPositionAndNormal(HH, BH) {
        const LH = new rH(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(HH, BH, LH)
      }
      static FromPositionAndNormalToRef(HH, BH, LH) {
        return LH.normal.Tm(BH), LH.normal.normalize(), LH.d = -HH.dot(LH.normal), LH
      }
      static SignedDistanceToPlaneFromPositionAndNormal(HH, BH, LH) {
        const rH = -(BH.x * HH.x + BH.y * HH.y + BH.z * HH.z);
        return AH.o.Dot(LH, BH) + rH
      }
    }
    rH._TmpMatrix = AH.e.Identity()
  },
  38966: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => AH
    });
    class AH {
      constructor(HH, BH, LH, AH) {
        this.x = HH, this.y = BH, this.width = LH, this.height = AH
      }
      toGlobal(HH, BH) {
        return new AH(this.x * HH, this.y * BH, this.width * HH, this.height * BH)
      }
      toGlobalToRef(HH, BH, LH) {
        return LH.x = this.x * HH, LH.y = this.y * BH, LH.width = this.width * HH, LH.height = this.height * BH, this
      }
      clone() {
        return new AH(this.x, this.y, this.width, this.height)
      }
    }
  },
  39588: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => SH
    });
    var AH = LH(39595);
    const rH = (HH, BH, LH) => HH ? HH.getClassName && "Mesh" === HH.getClassName() ? null : !HH.getClassName || "SubMesh" !== HH.getClassName() && "PhysicsBody" !== HH.getClassName() ? HH.clone ? HH.clone() : Array.isArray(HH) ? HH.slice() : LH && "object" === typeof HH ? {
      ...HH
    } : null : HH.clone(BH) : null;
    class SH {
      static DeepCopy(HH, BH, LH, SH) {
        let hH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const tH = function(HH) {
          const BH = [];
          do {
            const LH = Object.getOwnPropertyNames(HH);
            for (const HH of LH) - 1 === BH.indexOf(HH) && BH.push(HH)
          } while (HH = Object.getPrototypeOf(HH));
          return BH
        }(HH);
        for (const CH of tH) {
          if ("_" === CH[0] && (!SH || -1 === SH.indexOf(CH))) continue;
          if (CH.endsWith("Observable")) continue;
          if (LH && -1 !== LH.indexOf(CH)) continue;
          const tH = HH[CH],
            EH = typeof tH;
          if ("function" !== EH) try {
            if ("object" === EH)
              if (tH instanceof Uint8Array) BH[CH] = Uint8Array.from(tH);
              else if (tH instanceof Array) {
              if (BH[CH] = [], tH.length > 0)
                if ("object" == typeof tH[0])
                  for (let HH = 0; HH < tH.length; HH++) {
                    const LH = rH(tH[HH], BH, hH); - 1 === BH[CH].indexOf(LH) && BH[CH].push(LH)
                  } else BH[CH] = tH.slice(0)
            } else BH[CH] = rH(tH, BH, hH);
            else BH[CH] = tH
          } catch (zH) {
            AH.e.Warn(zH.message)
          }
        }
      }
    }
  },
  38790: (HH, BH, LH) => {
    function AH() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (HH => {
        const BH = 16 * Math.random() | 0;
        return ("x" === HH ? BH : 3 & BH | 8).toString(16)
      }))
    }
    LH.d(BH, {
      e: () => AH
    })
  },
  39595: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => AH
    });
    class AH {
      static _CheckLimit(HH, BH) {
        let LH = AH._LogLimitOutputs[HH];
        return LH ? LH.current++ : (LH = {
          limit: BH,
          current: 1
        }, AH._LogLimitOutputs[HH] = LH), LH.current <= LH.limit
      }
      static _GenerateLimitMessage(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const LH = AH._LogLimitOutputs[HH];
        if (!LH || !AH.MessageLimitReached) return;
        const rH = this._Levels[BH];
        LH.current === LH.limit && AH[rH.name](AH.MessageLimitReached.replace(/%LIMIT%/g, "" + LH.limit).replace(/%TYPE%/g, rH.name ?? ""))
      }
      static _AddLogEntry(HH) {
        AH._LogCache = HH + AH._LogCache, AH.OnNewCacheEntry && AH.OnNewCacheEntry(HH)
      }
      static _FormatMessage(HH) {
        const BH = HH => HH < 10 ? "0" + HH : "" + HH,
          LH = new Date;
        return "[" + BH(LH.getHours()) + ":" + BH(LH.getMinutes()) + ":" + BH(LH.getSeconds()) + "]: " + HH
      }
      static _LogDisabled(HH, BH) {}
      static _LogEnabled() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          BH = arguments.length > 1 ? arguments[1] : void 0,
          LH = arguments.length > 2 ? arguments[2] : void 0;
        const rH = Array.isArray(BH) ? BH[0] : BH;
        if (void 0 !== LH && !AH._CheckLimit(rH, LH)) return;
        const SH = AH._FormatMessage(rH),
          hH = this._Levels[HH],
          tH = Array.isArray(BH) ? BH.slice(1) : [];
        hH.logFunc && hH.logFunc("BJS - " + SH, ...tH);
        const zH = `<div style='color:${hH.color}'>${SH}</div><br>`;
        AH._AddLogEntry(zH), AH._GenerateLimitMessage(rH, HH)
      }
      static get LogCache() {
        return AH._LogCache
      }
      static ClearLogCache() {
        AH._LogCache = "", AH._LogLimitOutputs = {}, AH.errorsCount = 0
      }
      static set LogLevels(HH) {
        AH.Log = AH._LogDisabled, AH.Warn = AH._LogDisabled, AH.Error = AH._LogDisabled;
        const BH = [AH.MessageLogLevel, AH.WarningLogLevel, AH.ErrorLogLevel];
        for (const LH of BH)
          if ((HH & LH) === LH) {
            const HH = this._Levels[LH];
            AH[HH.name] = AH._LogEnabled.bind(AH, LH)
          }
      }
    }
    AH.NoneLogLevel = 0, AH.MessageLogLevel = 1, AH.WarningLogLevel = 2, AH.ErrorLogLevel = 4, AH.AllLogLevel = 7, AH.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", AH._LogCache = "", AH._LogLimitOutputs = {}, AH._Levels = [{}, {
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
    }], AH.errorsCount = 0, AH.Log = AH._LogEnabled.bind(AH, AH.MessageLogLevel), AH.Warn = AH._LogEnabled.bind(AH, AH.WarningLogLevel), AH.Error = AH._LogEnabled.bind(AH, AH.ErrorLogLevel)
  },
  64095: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      CreateScreenshot: () => qH,
      CreateScreenshotAsync: () => gH,
      CreateScreenshotForFrameGraphAsync: () => nH,
      CreateScreenshotUsingRenderTarget: () => RH,
      CreateScreenshotUsingRenderTargetAsync: () => jH,
      CreateScreenshotWithResizeAsync: () => NH,
      RegisterScreenshotTools: () => ZH,
      ScreenshotTools: () => DH
    });
    var AH = LH(41777),
      rH = LH(45290),
      SH = LH(45266),
      hH = LH(41319),
      tH = LH(45271),
      zH = LH(37989),
      CH = LH(37963);
    class EH extends tH.f {
      static _GetDefines(HH) {
        if (!HH) return null;
        return HH.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
      }
      _gatherImports(HH, BH) {
        HH ? (this._webGPUReady = !0, BH.push(Promise.all([LH.e(683).then((() => LH(64347))), LH.e(684).then((() => LH(64352)))]))) : BH.push(Promise.all([LH.e(685).then((() => LH(64355))), LH.e(686).then((() => LH(64364)))]))
      }
      constructor(HH) {
        const BH = {
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: HH,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || zH.d.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          vertexShader: EH.VertexUrl,
          fragmentShader: EH.FragmentUrl,
          uniforms: EH.Uniforms
        };
        super({
          ...BH,
          defines: EH._GetDefines(BH.engine)
        }), this.texelSize = new CH.n(0, 0)
      }
      bind() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.bind(HH), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
      }
    }
    EH.VertexUrl = "fxaa", EH.FragmentUrl = "fxaa", EH.Uniforms = ["texelSize"];
    class XH extends SH.d {
      getClassName() {
        return "FxaaPostProcess"
      }
      constructor(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          rH = arguments.length > 3 ? arguments[3] : void 0,
          SH = arguments.length > 4 ? arguments[4] : void 0,
          hH = arguments.length > 5 ? arguments[5] : void 0,
          tH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const zH = {
          uniforms: EH.Uniforms,
          size: "number" === typeof BH ? BH : void 0,
          camera: LH,
          samplingMode: rH || AH.g.BILINEAR_SAMPLINGMODE,
          engine: SH,
          reusable: hH,
          textureType: tH,
          ...BH
        };
        super(HH, EH.FragmentUrl, {
          effectWrapper: "number" !== typeof BH && BH.effectWrapper ? void 0 : new EH(HH, SH, zH),
          ...zH
        }), this.onApplyObservable.add((HH => {
          this._effectWrapper.texelSize = this.texelSize
        }))
      }
      static _Parse(HH, BH, LH, AH) {
        return hH.c.Parse((() => new XH(HH.name, HH.options, BH, HH.renderTargetSamplingMode, LH.Iu(), HH.reusable)), HH, LH, AH)
      }
    }
    var GH = LH(39595),
      YH = LH(41387),
      uH = LH(45299),
      QH = LH(45285),
      WH = LH(41179);
    const MH = 0;
    class xH {
      constructor(HH, BH, LH) {
        this.name = HH, this._parentTask = BH, this._context = LH, this.disabled = !1
      }
      setInitializeFunc(HH) {
        this._initFunc = HH
      }
      setExecuteFunc(HH) {
        this._executeFunc = HH
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
    class vH extends xH {
      static IsObjectListPass(HH) {
        return void 0 !== HH.setObjectList
      }
      get objectList() {
        return this._objectList
      }
      setObjectList(HH) {
        this._objectList = HH
      }
      constructor(HH, BH, LH, AH) {
        super(HH, BH, LH), this._engine = AH
      }
      _isValid() {
        const HH = super._isValid();
        return HH || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
      }
    }
    class PH extends xH {
      static IsRenderPass(HH) {
        return void 0 !== HH.setRenderTarget
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
      constructor(HH, BH, LH, AH) {
        super(HH, BH, LH), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = AH
      }
      setRenderTarget(HH) {
        this._renderTarget = HH
      }
      setRenderTargetDepth(HH) {
        this._renderTargetDepth = HH
      }
      addDependencies(HH) {
        if (void 0 !== HH)
          if (Array.isArray(HH))
            for (const BH of HH) this._dependencies.add(BH);
          else this._dependencies.add(HH)
      }
      collectDependencies(HH) {
        const BH = this._dependencies.keys();
        for (let LH = BH.next(); !0 !== LH.done; LH = BH.next()) HH.add(LH.value);
        if (void 0 !== this._renderTarget)
          if (Array.isArray(this._renderTarget))
            for (const LH of this._renderTarget) void 0 !== LH && HH.add(LH);
          else HH.add(this._renderTarget);
        void 0 !== this._renderTargetDepth && HH.add(this._renderTargetDepth)
      }
      setOutputLayerAndFaceIndices(HH) {
        const BH = this.frameGraphRenderTarget.renderTargetWrapper;
        if (BH)
          for (const LH of HH) BH.setLayerAndFaceIndex(LH.targetIndex, LH.layerIndex, LH.faceIndex)
      }
      _initialize() {
        this._frameGraphRenderTarget = this._context.createRenderTarget(this.name, this._renderTarget, this._renderTargetDepth, this.depthReadOnly, this.stencilReadOnly), super._initialize()
      }
      _execute() {
        this._context.bindRenderTarget(this._frameGraphRenderTarget), super._execute(), this._context.restoreDefaultFramebuffer()
      }
      _isValid() {
        const HH = super._isValid();
        return HH || (void 0 !== this._renderTarget || void 0 !== this.renderTargetDepth ? null : "Render target and render target depth cannot both be undefined.")
      }
      _dispose() {
        this._frameGraphRenderTarget?.dispose()
      }
    }
    var TH = LH(37997);
    class UH {
      get name() {
        return this._name
      }
      set name(HH) {
        this._name = HH
      }
      get disabled() {
        return this._disabled
      }
      set disabled(HH) {
        this._disabled = HH
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
      constructor(HH, BH) {
        this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new TH.d, this.onBeforeTaskExecute = new TH.d, this.onAfterTaskExecute = new TH.d, this.name = HH, this._frameGraph = BH, this._reset()
      }
      _reset() {
        for (const HH of this._passes) HH._dispose();
        for (const HH of this._passesDisabled) HH._dispose();
        this._passes.length = 0, this._passesDisabled.length = 0
      }
      _addPass(HH, BH) {
        BH ? this._passesDisabled.push(HH) : this._passes.push(HH)
      }
      _checkTask() {
        let HH, BH = null,
          LH = null;
        for (const tH of this._passes) {
          const AH = tH._isValid();
          if (AH) throw new Error(`Pass "${tH.name}" is not valid. ${AH}`);
          if (PH.IsRenderPass(tH)) {
            const HH = Array.isArray(tH.renderTarget) ? tH.renderTarget : [tH.renderTarget];
            BH = [];
            for (const LH of HH) void 0 !== LH && BH.push(this._frameGraph.textureManager.getTextureFromHandle(LH));
            LH = void 0 !== tH.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(tH.renderTargetDepth) : null
          } else vH.IsObjectListPass(tH) && (HH = tH.objectList)
        }
        let AH, rH = null,
          SH = [],
          hH = null;
        for (const tH of this._passesDisabled) {
          const HH = tH._isValid();
          if (HH) throw new Error(`Pass "${tH.name}" is not valid. ${HH}`);
          if (PH.IsRenderPass(tH)) {
            const HH = Array.isArray(tH.renderTarget) ? tH.renderTarget : [tH.renderTarget];
            rH = [];
            for (const BH of HH) void 0 !== BH && rH.push(this._frameGraph.textureManager.getTextureFromHandle(BH));
            SH = HH, hH = void 0 !== tH.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(tH.renderTargetDepth) : null
          } else vH.IsObjectListPass(tH) && (AH = tH.objectList)
        }
        if (this._passesDisabled.length > 0) {
          if (!this._checkSameRenderTarget(BH, rH)) {
            let HH = !0;
            for (const BH of SH)
              if (void 0 !== BH && !this._frameGraph.textureManager.isHistoryTexture(BH)) {
                HH = !1;
                break
              } if (!HH) throw new Error(`The output texture of the task "${this.name}" is different when it is enabled or disabled.`)
          }
          if (LH !== hH && null !== hH) throw new Error(`The output depth texture of the task "${this.name}" is different when it is enabled or disabled.`);
          if (HH !== AH && null !== AH) throw new Error(`The output object list of the task "${this.name}" is different when it is enabled or disabled.`)
        }
      }
      _execute() {
        const HH = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
        this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const BH of HH) BH._execute()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
        this.onAfterTaskExecute.notifyObservers(this)
      }
      _initializePasses() {
        this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const HH of this._passes) HH._initialize();
          for (const HH of this._passesDisabled) HH._initialize()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
      }
      _checkSameRenderTarget(HH, BH) {
        if (null === HH || null === BH) return HH === BH;
        if (HH.length !== BH.length) return !1;
        for (let LH = 0; LH < HH.length; LH++)
          if (HH[LH] !== BH[LH]) return !1;
        return !0
      }
    }
    class VH extends UH {
      get alphaMode() {
        return this.postProcess.alphaMode
      }
      set alphaMode(HH) {
        this.postProcess.alphaMode = HH
      }
      get drawWrapper() {
        return this._postProcessDrawWrapper
      }
      constructor(HH, BH, LH) {
        super(HH, BH), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = LH, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture = this._frameGraph.textureManager.createDanglingHandle(), this.outputDepthAttachmentTexture = this._frameGraph.textureManager.createDanglingHandle()
      }
      isReady() {
        return this.postProcess.isReady()
      }
      getClassName() {
        return "FrameGraphPostProcessTask"
      }
      record() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          BH = arguments.length > 1 ? arguments[1] : void 0,
          LH = arguments.length > 2 ? arguments[2] : void 0;
        if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
        const AH = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
        if (AH && (AH.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, AH), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentTexture, this.depthAttachmentTexture), AH) {
          const HH = this._frameGraph.textureManager.getTextureAbsoluteDimensions(AH);
          this._sourceWidth = HH.width, this._sourceHeight = HH.height
        }
        const rH = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
        this._outputWidth = rH.size.width, this._outputHeight = rH.size.height;
        const SH = this._frameGraph.addRenderPass(this.name);
        if (SH.depthReadOnly = this.depthReadOnly, SH.stencilReadOnly = this.stencilReadOnly, SH.addDependencies(this.sourceTexture), SH.setRenderTarget(this.outputTexture), SH.setRenderTargetDepth(this.depthAttachmentTexture), SH.setExecuteFunc((HH => {
            HH.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && HH.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), BH?.(HH), this.viewport && HH.setViewport(this.viewport), HH.applyFullScreenEffect(this._postProcessDrawWrapper, (() => {
              void 0 !== this.sourceTexture && HH.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), LH?.(HH), this.postProcess.bind()
            }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), HH.restoreDefaultFramebuffer(), HH.popDebugGroup()
          })), !HH) {
          const HH = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
          HH.depthReadOnly = this.depthReadOnly, HH.stencilReadOnly = this.stencilReadOnly, HH.addDependencies(this.sourceTexture), HH.setRenderTarget(this.outputTexture), HH.setRenderTargetDepth(this.depthAttachmentTexture), HH.setExecuteFunc((HH => {
            void 0 !== this.sourceTexture && 0 === this.alphaMode && (this.viewport && HH.setViewport(this.viewport), HH.copyTexture(this.sourceTexture, void 0, void 0 !== this.viewport))
          }))
        }
        return SH
      }
      dispose() {
        this.postProcess.dispose(), super.dispose()
      }
    }
    class OH extends VH {
      constructor(HH, BH, LH) {
        super(HH, BH, LH || new EH(HH, BH.engine))
      }
      getClassName() {
        return "FrameGraphFXAATask"
      }
      record() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          BH = arguments.length > 1 ? arguments[1] : void 0,
          LH = arguments.length > 2 ? arguments[2] : void 0;
        const AH = super.record(HH, BH, LH);
        return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, AH
      }
    }
    var bH = LH(45296);
    class kH extends VH {
      constructor(HH, BH, LH) {
        super(HH, BH, LH || new bH.f(HH, BH.engine))
      }
      getClassName() {
        return "FrameGraphPassTask"
      }
    }
    var mH = LH(41383),
      oH = LH(41458),
      IH = LH(41420),
      fH = LH(41533),
      lH = LH(38074);
    class KH {
      getRenderCamera(HH) {
        if (this._renderCamera) return this._renderCamera;
        {
          let BH;
          return BH = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, HH && BH && BH.isRigCamera ? BH.rigParent : BH
        }
      }
      setRenderCamera(HH) {
        this._renderCamera = HH
      }
      _getSharedGizmoLight() {
        return this._sharedGizmoLight || (this._sharedGizmoLight = new fH.b("shared gizmo light", new CH.o(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = lH.c.Gray()), this._sharedGizmoLight
      }
      static get DefaultUtilityLayer() {
        return null == KH._DefaultUtilityLayer ? KH._CreateDefaultUtilityLayerFromScene(zH.d.LastCreatedScene) : KH._DefaultUtilityLayer
      }
      static _CreateDefaultUtilityLayerFromScene(HH) {
        return KH._DefaultUtilityLayer = new KH(HH), KH._DefaultUtilityLayer.originalScene.uR.addOnce((() => {
          KH._DefaultUtilityLayer = null
        })), KH._DefaultUtilityLayer
      }
      static get DefaultKeepDepthUtilityLayer() {
        return null == KH._DefaultKeepDepthUtilityLayer ? KH._CreateDefaultKeepUtilityLayerFromScene(zH.d.LastCreatedScene) : KH._DefaultKeepDepthUtilityLayer
      }
      static _CreateDefaultKeepUtilityLayerFromScene(HH) {
        return KH._DefaultKeepDepthUtilityLayer = new KH(HH), KH._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, KH._DefaultKeepDepthUtilityLayer.originalScene.uR.addOnce((() => {
          KH._DefaultKeepDepthUtilityLayer = null
        })), KH._DefaultKeepDepthUtilityLayer
      }
      constructor(HH) {
        let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.originalScene = HH, this.handleEvents = BH, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.processAllEvents = !1, this.pickingEnabled = !0, this.onPointerOutObservable = new TH.d, this.utilityLayerScene = new mH.d(HH.Iu(), {
          virtual: !0,
          useFloatingOrigin: HH.floatingOriginMode
        }), this.utilityLayerScene.useRightHandedSystem = HH.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), BH && (this._originalPointerObserver = HH.onPrePointerObservable.add((BH => {
          if (!this.utilityLayerScene.activeCamera) return;
          if (!this.pickingEnabled) return;
          if (!this.processAllEvents && BH.type !== oH.d.POINTERMOVE && BH.type !== oH.d.POINTERUP && BH.type !== oH.d.POINTERDOWN && BH.type !== oH.d.POINTERDOUBLETAP) return;
          this.utilityLayerScene.pointerX = HH.pointerX, this.utilityLayerScene.pointerY = HH.pointerY;
          const LH = BH.event;
          if (HH.isPointerCaptured(LH.pointerId)) return void(this._pointerCaptures[LH.pointerId] = !1);
          const AH = LH => {
              let AH;
              if (BH.nearInteractionPickingInfo) AH = BH.nearInteractionPickingInfo.pickedMesh.yN() == LH ? BH.nearInteractionPickingInfo : new IH.b;
              else if (LH !== this.utilityLayerScene && BH.originalPickingInfo) AH = BH.originalPickingInfo;
              else {
                let rH = null;
                this._renderCamera && (rH = LH._activeCamera, LH._activeCamera = this._renderCamera, BH.ray = null), AH = BH.ray ? LH.pickWithRay(BH.ray) : LH.XY(HH.pointerX, HH.pointerY), rH && (LH._activeCamera = rH)
              }
              return AH
            },
            rH = AH(this.utilityLayerScene);
          if (!BH.ray && rH && (BH.ray = rH.ray), BH.originalPickingInfo?.aimTransform && rH && (rH.aimTransform = BH.originalPickingInfo.aimTransform, rH.gripTransform = BH.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(BH), this.onlyCheckPointerDownEvents && BH.type != oH.d.POINTERDOWN) return BH.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new oH.g(BH.type, BH.event, rH), BH.type), void(BH.type === oH.d.POINTERUP && this._pointerCaptures[LH.pointerId] && (this._pointerCaptures[LH.pointerId] = !1));
          if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) rH && rH.hit && (BH.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new oH.g(BH.type, BH.event, rH), BH.type), BH.skipOnPointerObservable = !0);
          else {
            const LH = AH(HH),
              SH = BH.event;
            LH && rH && (0 === rH.distance && LH.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(LH.pickedMesh) ? (this._notifyObservers(BH, LH, SH), BH.skipOnPointerObservable = !0) : BH.type === oH.d.POINTERDOWN ? (this._pointerCaptures[SH.pointerId] = !0, this._notifyObservers(BH, LH, SH)) : BH.type !== oH.d.POINTERMOVE && BH.type !== oH.d.POINTERUP || (this._lastPointerEvents[SH.pointerId] && (this.onPointerOutObservable.notifyObservers(SH.pointerId), delete this._lastPointerEvents[SH.pointerId]), this._notifyObservers(BH, LH, SH)) : !this._pointerCaptures[SH.pointerId] && (rH.distance < LH.distance || 0 === LH.distance) ? (this._notifyObservers(BH, rH, SH), BH.skipOnPointerObservable || (BH.skipOnPointerObservable = rH.distance > 0)) : !this._pointerCaptures[SH.pointerId] && rH.distance >= LH.distance && (this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(LH.pickedMesh) ? (this._notifyObservers(BH, LH, SH), BH.skipOnPointerObservable = !0) : (BH.type !== oH.d.POINTERMOVE && BH.type !== oH.d.POINTERUP || this._lastPointerEvents[SH.pointerId] && (this.onPointerOutObservable.notifyObservers(SH.pointerId), delete this._lastPointerEvents[SH.pointerId]), this._notifyObservers(BH, rH, SH))), BH.type === oH.d.POINTERUP && this._pointerCaptures[SH.pointerId] && (this._pointerCaptures[SH.pointerId] = !1))
          }
        })), this._originalPointerObserver && HH.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, LH || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((HH => {
          this.shouldRender && HH == this.getRenderCamera() && this.render()
        }))), this._sceneDisposeObserver = this.originalScene.uR.add((() => {
          this.dispose()
        })), this._updateCamera()
      }
      _notifyObservers(HH, BH, LH) {
        HH.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new oH.g(HH.type, HH.event, BH), HH.type), this._lastPointerEvents[LH.pointerId] = !0)
      }
      render() {
        if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
          const HH = this.utilityLayerScene.activeCamera.yN(),
            BH = this.utilityLayerScene.activeCamera;
          BH._scene = this.utilityLayerScene, BH.leftCamera && (BH.leftCamera._scene = this.utilityLayerScene), BH.rightCamera && (BH.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), BH._scene = HH, BH.leftCamera && (BH.leftCamera._scene = HH), BH.rightCamera && (BH.rightCamera._scene = HH)
        }
      }
      dispose() {
        this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.uR.remove(this._sceneDisposeObserver), this._originalPointerObserver && this.originalScene.onPrePointerObservable.remove(this._originalPointerObserver), this.utilityLayerScene.dispose()
      }
      _updateCamera() {
        this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
      }
    }
    KH._DefaultUtilityLayer = null, KH._DefaultKeepDepthUtilityLayer = null;
    const cH = {
      FindMainCamera: function(HH) {
        return HH.findMainCamera()
      },
      FindMainObjectRenderer: function(HH) {
        return HH.findMainObjectRenderer()
      },
      CreateUtilityLayerRenderer: function(HH) {
        let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const LH = HH.NQ,
          AH = new KH(LH, BH, !0);
        AH.utilityLayerScene.activeCamera = LH.activeCamera;
        let rH = cH.FindMainCamera(LH.frameGraph);
        !rH && LH.cameras.length > 0 && (rH = LH.cameras[0]), rH && (AH.setRenderCamera(rH), AH.utilityLayerScene.activeCamera = rH);
        const SH = LH.onAfterRenderObservable.add((() => {
          AH.render()
        }));
        return AH.utilityLayerScene.uR.addOnce((() => {
          LH.onAfterRenderObservable.remove(SH)
        })), AH
      }
    };
    let eH = null;

    function qH(HH, BH, LH, AH) {
      let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        SH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        hH = arguments.length > 6 ? arguments[6] : void 0,
        tH = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        zH = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
      const {
        height: CH,
        width: EH
      } = FH(HH, BH, LH);
      if (!CH || !EH) return void GH.e.Error("Invalid 'size' parameter !");
      const XH = BH.yN();
      let uH = XH.activeCamera !== BH;
      if (XH.frameGraph) {
        const HH = cH.FindMainObjectRenderer(XH.frameGraph);
        HH && (uH = HH.camera !== BH)
      }
      uH ? RH(HH, BH, LH, (HH => {
        if (SH) {
          const BH = new Blob([HH]);
          YH.i.DownloadBlob(BH), AH && AH("")
        } else AH && AH(HH)
      }), rH, 1, HH.getCreationOptions().antialias, void 0, void 0, void 0, void 0, hH) : HH.onEndFrameObservable.addOnce((() => {
        eH || (eH = document.createElement("canvas")), eH.width = EH, eH.height = CH;
        const BH = eH.getContext("2d"),
          LH = HH.getRenderingCanvas();
        if (!BH || !LH) return void GH.e.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
        const uH = LH.width,
          QH = LH.height,
          WH = eH.width,
          MH = eH.height,
          xH = WH / uH,
          vH = MH / QH,
          PH = tH ? Math.max(xH, vH) : Math.min(xH, vH),
          TH = uH * PH,
          UH = QH * PH,
          VH = (WH - TH) / 2,
          OH = (MH - UH) / 2;
        BH.save(), BH.fillStyle = zH ? XH.clearColor.toHexString() : "rgba(0, 0, 0, 0)", BH.fillRect(0, 0, EH, CH), BH.restore(), BH.drawImage(LH, 0, 0, uH, QH, VH, OH, TH, UH), SH ? (YH.i.EncodeScreenshotCanvasData(eH, void 0, rH, void 0, hH), AH && AH("")) : YH.i.EncodeScreenshotCanvasData(eH, AH, rH, void 0, hH)
      }))
    }
    async function gH(HH, BH, LH) {
      let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        rH = arguments.length > 4 ? arguments[4] : void 0,
        SH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        hH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        tH = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      return await new Promise(((zH, CH) => {
        qH(HH, BH, LH, (HH => {
          "undefined" !== typeof HH ? zH(HH) : CH(new Error("Data is undefined"))
        }), AH, tH, rH, SH, hH)
      }))
    }
    async function NH(HH, BH, LH, AH) {
      let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        SH = arguments.length > 5 ? arguments[5] : void 0,
        hH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return await new Promise((tH => {
        qH(HH, BH, {
          width: LH,
          height: AH
        }, (() => {
          tH()
        }), rH, !0, SH, hH)
      }))
    }

    function RH(HH, BH, SH, hH) {
      let tH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        zH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
        CH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        EH = arguments.length > 7 ? arguments[7] : void 0,
        YH = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        MH = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        xH = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
        vH = arguments.length > 11 ? arguments[11] : void 0,
        PH = arguments.length > 12 ? arguments[12] : void 0,
        TH = arguments.length > 13 ? arguments[13] : void 0,
        UH = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
        VH = arguments.length > 15 ? arguments[15] : void 0;
      const OH = BH.yN();
      if (OH.frameGraph) return void nH(OH.frameGraph, BH, SH, tH, zH, CH, EH, vH, TH, !hH).then((HH => {
        hH && hH(HH)
      }));
      const {
        height: bH,
        width: kH,
        finalWidth: mH,
        finalHeight: oH
      } = FH(HH, BH, SH), IH = {
        width: kH,
        height: bH
      };
      if (!bH || !kH) return void GH.e.Error("Invalid 'size' parameter !");
      HH.skipFrameRender = !0;
      const fH = HH.getRenderWidth,
        lH = HH.getRenderHeight;
      HH.getRenderWidth = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && HH._currentRenderTarget ? HH._currentRenderTarget.width : kH
      }, HH.getRenderHeight = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && HH._currentRenderTarget ? HH._currentRenderTarget.height : bH
      }, HH.onResizeObservable.hasObservers() && HH.onResizeObservable.notifyObservers(HH);
      const KH = new rH.c("screenShot", IH, OH, !1, !1, 0, !1, AH.g.BILINEAR_SAMPLINGMODE, void 0, MH, void 0, void 0, void 0, zH);
      KH.renderList = OH.meshes.slice(), KH.samples = zH, KH.renderSprites = YH, KH.activeCamera = BH, KH.forceLayerMaskCheck = xH, PH?.(KH);
      const cH = TH || uH.DumpData,
        eH = () => {
          OH.incrementRenderId(), OH.resetCachedMaterial(), (0, WH.f)((() => KH.isReadyForRendering() && BH.isReady(!0)), (() => {
            HH.onEndFrameObservable.addOnce((() => {
              mH === kH && oH === bH ? KH.readPixels(void 0, void 0, void 0, !1).then((HH => {
                cH(kH, bH, HH, hH, tH, EH, !0, void 0, vH), KH.dispose()
              })) : (HH.isWebGPU ? LH.e(679).then((() => LH(64293))) : LH.e(680).then((() => LH(64302)))).then((async () => await (0, QH.d)("pass", KH.getInternalTexture(), OH, void 0, void 0, void 0, mH, oH).then((BH => {
                HH._readTexturePixels(BH, mH, oH, -1, 0, null, !0, !1, 0, 0).then((HH => {
                  cH(mH, oH, HH, hH, tH, EH, !0, void 0, vH), BH.dispose()
                }))
              }))))
            })), OH.incrementRenderId(), OH.resetCachedMaterial();
            const AH = OH.activeCamera,
              rH = OH.activeCameras,
              SH = BH.outputRenderTarget,
              zH = OH.spritesEnabled;
            OH.activeCamera = BH, OH.activeCameras = null, BH.outputRenderTarget = KH, OH.spritesEnabled = YH;
            const CH = OH.meshes;
            OH.meshes = KH.renderList || OH.meshes;
            try {
              OH.render()
            } finally {
              OH.activeCamera = AH, OH.activeCameras = rH, BH.outputRenderTarget = SH, OH.spritesEnabled = zH, OH.meshes = CH, HH.getRenderWidth = fH, HH.getRenderHeight = lH, HH.onResizeObservable.hasObservers() && HH.onResizeObservable.notifyObservers(HH), BH.getProjectionMatrix(!0), HH.skipFrameRender = !1
            }
          }), (() => {
            HH.skipFrameRender = !1, HH.getRenderWidth = fH, HH.getRenderHeight = lH, VH?.()
          }), void 0, UH)
        };
      if (CH) {
        const HH = new XH("antialiasing", 1, OH.activeCamera);
        KH.addPostProcess(HH), HH.autoClear = !0, HH.onEffectCreatedObservable.addOnce((HH => {
          HH.isReady() ? eH() : HH.onCompiled = () => {
            eH()
          }
        }))
      } else eH()
    }
    async function jH(HH, BH, LH) {
      let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        SH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        hH = arguments.length > 6 ? arguments[6] : void 0,
        tH = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        zH = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        CH = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
        EH = arguments.length > 10 ? arguments[10] : void 0,
        XH = arguments.length > 11 ? arguments[11] : void 0,
        GH = arguments.length > 12 ? arguments[12] : void 0;
      return await new Promise(((YH, uH) => {
        RH(HH, BH, LH, (HH => {
          "undefined" !== typeof HH ? YH(HH) : uH(new Error("Data is undefined"))
        }), AH, rH, SH, hH, tH, zH, CH, EH, XH, GH)
      }))
    }
    async function nH(HH, BH, LH) {
      let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        SH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        hH = arguments.length > 6 ? arguments[6] : void 0,
        tH = arguments.length > 7 ? arguments[7] : void 0,
        zH = arguments.length > 8 ? arguments[8] : void 0,
        CH = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        EH = arguments.length > 10 ? arguments[10] : void 0;
      const XH = HH.engine,
        GH = HH.textureManager,
        {
          height: YH,
          width: QH,
          finalWidth: WH,
          finalHeight: xH
        } = FH(XH, BH, LH),
        vH = {
          width: QH,
          height: YH
        },
        PH = zH || uH.DumpData,
        TH = HH.tasks,
        UH = TH.length,
        VH = HH.pausedExecution,
        bH = XH.getCaps().parallelShaderCompile;
      GH.setBackBufferTextures(0, 0, {
        size: vH,
        options: {
          createMipMaps: !1,
          samples: rH,
          types: [0],
          formats: [5],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot color"]
        },
        sizeIsPercentage: !1
      }, {
        size: vH,
        options: {
          createMipMaps: !1,
          samples: rH,
          types: [0],
          formats: [XH.isStencilEnable ? 13 : 14],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot depth"]
        },
        sizeIsPercentage: !1
      });
      let mH = MH;
      if (SH) {
        const BH = new OH("fxaa", HH);
        BH.sourceTexture = mH, mH = BH.outputTexture, HH.addTask(BH)
      }
      if (WH !== QH || xH !== YH) {
        const BH = new kH("pass", HH);
        BH.sourceTexture = mH, BH.targetTexture = HH.textureManager.createRenderTargetTexture("pass_output", {
          size: {
            width: WH,
            height: xH
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
        }), mH = BH.outputTexture, HH.addTask(BH)
      }
      const oH = cH.FindMainObjectRenderer(HH);
      let IH = null;
      oH && (IH = oH.camera, oH.camera = BH), XH.getCaps().parallelShaderCompile = void 0, await HH.buildAsync();
      const fH = EH ?? (GH.hasHistoryTextures ? 32 : 1);
      for (let uH = 0; uH < fH; ++uH) HH.execute();
      HH.pausedExecution = !0, XH.getCaps().parallelShaderCompile = bH;
      for (let uH = UH; uH < TH.length; ++uH) HH.tasks[uH].dispose();
      HH.tasks.length = UH, oH && IH && (oH.camera = IH);
      const lH = HH.textureManager.getTextureFromHandle(mH);
      return lH.incrementReferences(), GH.resetBackBufferTextures(), await HH.buildAsync(), HH.pausedExecution = VH, new Promise((HH => {
        XH._readTexturePixels(lH, WH, xH, -1, 0, null, !0, !1, 0, 0).then((async BH => {
          lH.dispose(), PH(WH, xH, BH, CH ? void 0 : BH => HH(BH), AH, hH, !0, void 0, tH), CH && HH(null)
        }))
      }))
    }

    function FH(HH, BH, LH) {
      let AH = 0,
        rH = 0,
        SH = 0,
        hH = 0;
      if ("object" === typeof LH) {
        const tH = LH.precision ? Math.abs(LH.precision) : 1;
        LH.width && LH.height ? (AH = LH.height * tH, rH = LH.width * tH) : LH.width && !LH.height ? (rH = LH.width * tH, AH = Math.round(rH / HH.getAspectRatio(BH))) : LH.height && !LH.width ? (AH = LH.height * tH, rH = Math.round(AH * HH.getAspectRatio(BH))) : (rH = Math.round(HH.getRenderWidth() * tH), AH = Math.round(rH / HH.getAspectRatio(BH))), LH.finalWidth && LH.finalHeight ? (hH = LH.finalHeight, SH = LH.finalWidth) : LH.finalWidth && !LH.finalHeight ? (SH = LH.finalWidth, hH = Math.round(SH / HH.getAspectRatio(BH))) : LH.finalHeight && !LH.finalWidth ? (hH = LH.finalHeight, SH = Math.round(hH * HH.getAspectRatio(BH))) : (SH = rH, hH = AH)
      } else isNaN(LH) || (AH = LH, rH = LH, SH = LH, hH = LH);
      return rH && (rH = Math.floor(rH)), AH && (AH = Math.floor(AH)), SH && (SH = Math.floor(SH)), hH && (hH = Math.floor(hH)), {
        height: 0 | AH,
        width: 0 | rH,
        finalWidth: 0 | SH,
        finalHeight: 0 | hH
      }
    }
    const DH = {
      CreateScreenshot: qH,
      CreateScreenshotAsync: gH,
      CreateScreenshotWithResizeAsync: NH,
      CreateScreenshotUsingRenderTarget: RH,
      CreateScreenshotUsingRenderTargetAsync: jH,
      CreateScreenshotForFrameGraphAsync: nH
    };
    let wH = !1;

    function ZH() {
      if (wH) return;
      wH = !0;
      YH.i.CreateScreenshot = qH, YH.i.CreateScreenshotAsync = gH, YH.i.CreateScreenshotUsingRenderTarget = RH, YH.i.CreateScreenshotUsingRenderTargetAsync = jH
    }
    ZH()
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);