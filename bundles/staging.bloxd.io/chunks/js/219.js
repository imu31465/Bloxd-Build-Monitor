export const id = 219;
export const ids = [219, 220];
export const modules = {
  39015: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => YJ,
      f: () => DJ
    });
    var FJ = ZJ(38800),
      UJ = ZJ(38806),
      eJ = ZJ(36174),
      XJ = ZJ(36231),
      AJ = ZJ(39023),
      qJ = ZJ(38989),
      jJ = ZJ(36216);
    let YJ = (() => {
        var JJ;
        let cJ, ZJ, qJ = AJ.b,
          jJ = [],
          YJ = [],
          hJ = [],
          DJ = [];
        return JJ = class extends qJ {
          constructor(JJ, cJ, ZJ, UJ) {
            super(JJ, ZJ, UJ), this.groundColor = (0, FJ.e)(this, jJ, new XJ.e(0, 0, 0)), this.direction = ((0, FJ.e)(this, YJ), (0, FJ.e)(this, hJ, void 0)), (0, FJ.e)(this, DJ), this.direction = cJ || eJ.j.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(JJ) {
            return this.direction = eJ.j.Normalize(JJ.subtract(eJ.j.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(JJ, cJ) {
            const ZJ = eJ.j.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", ZJ.x, ZJ.y, ZJ.z, 0, cJ), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), cJ), this
          }
          transferToNodeMaterialEffect(JJ, cJ) {
            const ZJ = eJ.j.Normalize(this.direction);
            return JJ.setFloat3(cJ, ZJ.x, ZJ.y, ZJ.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = eJ.b.Identity()), this._worldMatrix
          }
          getTypeID() {
            return AJ.b.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(JJ, cJ) {
            JJ["HEMILIGHT" + cJ] = !0
          }
        }, (() => {
          const eJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(qJ[Symbol.metadata] ?? null) : void 0;
          cJ = [(0, UJ.m)()], ZJ = [(0, UJ.E)()], (0, FJ.d)(null, null, cJ, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: JJ => "groundColor" in JJ,
              get: JJ => JJ.groundColor,
              set: (JJ, cJ) => {
                JJ.groundColor = cJ
              }
            },
            metadata: eJ
          }, jJ, YJ), (0, FJ.d)(null, null, ZJ, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: JJ => "direction" in JJ,
              get: JJ => JJ.direction,
              set: (JJ, cJ) => {
                JJ.direction = cJ
              }
            },
            metadata: eJ
          }, hJ, DJ), eJ && Object.defineProperty(JJ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: eJ
          })
        })(), JJ
      })(),
      hJ = !1;

    function DJ() {
      hJ || (hJ = !0, qJ.b.AddNodeConstructor("Light_Type_3", ((JJ, cJ) => () => new YJ(JJ, eJ.j.Zero(), cJ))), (0, jJ.f)("BABYLON.HemisphericLight", YJ))
    }
  },
  36742: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => UJ
    });
    var FJ = ZJ(36744);
    class UJ {
      static GetPlanes(JJ) {
        const cJ = [];
        for (let ZJ = 0; ZJ < 6; ZJ++) cJ.push(new FJ.c(0, 0, 0, 0));
        return UJ.GetPlanesToRef(JJ, cJ), cJ
      }
      static GetNearPlaneToRef(JJ, cJ) {
        const ZJ = JJ.m;
        cJ.normal.x = ZJ[3] + ZJ[2], cJ.normal.y = ZJ[7] + ZJ[6], cJ.normal.z = ZJ[11] + ZJ[10], cJ.d = ZJ[15] + ZJ[14], cJ.normalize()
      }
      static GetFarPlaneToRef(JJ, cJ) {
        const ZJ = JJ.m;
        cJ.normal.x = ZJ[3] - ZJ[2], cJ.normal.y = ZJ[7] - ZJ[6], cJ.normal.z = ZJ[11] - ZJ[10], cJ.d = ZJ[15] - ZJ[14], cJ.normalize()
      }
      static GetLeftPlaneToRef(JJ, cJ) {
        const ZJ = JJ.m;
        cJ.normal.x = ZJ[3] + ZJ[0], cJ.normal.y = ZJ[7] + ZJ[4], cJ.normal.z = ZJ[11] + ZJ[8], cJ.d = ZJ[15] + ZJ[12], cJ.normalize()
      }
      static GetRightPlaneToRef(JJ, cJ) {
        const ZJ = JJ.m;
        cJ.normal.x = ZJ[3] - ZJ[0], cJ.normal.y = ZJ[7] - ZJ[4], cJ.normal.z = ZJ[11] - ZJ[8], cJ.d = ZJ[15] - ZJ[12], cJ.normalize()
      }
      static GetTopPlaneToRef(JJ, cJ) {
        const ZJ = JJ.m;
        cJ.normal.x = ZJ[3] - ZJ[1], cJ.normal.y = ZJ[7] - ZJ[5], cJ.normal.z = ZJ[11] - ZJ[9], cJ.d = ZJ[15] - ZJ[13], cJ.normalize()
      }
      static GetBottomPlaneToRef(JJ, cJ) {
        const ZJ = JJ.m;
        cJ.normal.x = ZJ[3] + ZJ[1], cJ.normal.y = ZJ[7] + ZJ[5], cJ.normal.z = ZJ[11] + ZJ[9], cJ.d = ZJ[15] + ZJ[13], cJ.normalize()
      }
      static GetPlanesToRef(JJ, cJ) {
        UJ.GetNearPlaneToRef(JJ, cJ[0]), UJ.GetFarPlaneToRef(JJ, cJ[1]), UJ.GetLeftPlaneToRef(JJ, cJ[2]), UJ.GetRightPlaneToRef(JJ, cJ[3]), UJ.GetTopPlaneToRef(JJ, cJ[4]), UJ.GetBottomPlaneToRef(JJ, cJ[5])
      }
      static IsPointInFrustum(JJ, cJ) {
        for (let ZJ = 0; ZJ < 6; ZJ++)
          if (cJ[ZJ].dotCoordinate(JJ) < 0) return !1;
        return !0
      }
    }
  },
  36744: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => UJ
    });
    var FJ = ZJ(36174);
    class UJ {
      constructor(JJ, cJ, ZJ, UJ) {
        this.normal = new FJ.j(JJ, cJ, ZJ), this.d = UJ
      }
      JFJ() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new UJ(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let JJ = this.normal.getHashCode();
        return JJ = 397 * JJ ^ this.d, JJ
      }
      normalize() {
        const JJ = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let cJ = 0;
        return 0 !== JJ && (cJ = 1 / JJ), this.normal.x *= cJ, this.normal.y *= cJ, this.normal.z *= cJ, this.d *= cJ, this
      }
      transform(JJ) {
        const cJ = UJ._TmpMatrix;
        JJ.invertToRef(cJ);
        const ZJ = cJ.m,
          FJ = this.normal.x,
          eJ = this.normal.y,
          XJ = this.normal.z,
          AJ = this.d,
          qJ = FJ * ZJ[0] + eJ * ZJ[1] + XJ * ZJ[2] + AJ * ZJ[3],
          jJ = FJ * ZJ[4] + eJ * ZJ[5] + XJ * ZJ[6] + AJ * ZJ[7],
          YJ = FJ * ZJ[8] + eJ * ZJ[9] + XJ * ZJ[10] + AJ * ZJ[11],
          hJ = FJ * ZJ[12] + eJ * ZJ[13] + XJ * ZJ[14] + AJ * ZJ[15];
        return new UJ(qJ, jJ, YJ, hJ)
      }
      dotCoordinate(JJ) {
        return this.normal.x * JJ.x + this.normal.y * JJ.y + this.normal.z * JJ.z + this.d
      }
      copyFromPoints(JJ, cJ, ZJ) {
        const FJ = cJ.x - JJ.x,
          UJ = cJ.y - JJ.y,
          eJ = cJ.z - JJ.z,
          XJ = ZJ.x - JJ.x,
          AJ = ZJ.y - JJ.y,
          qJ = ZJ.z - JJ.z,
          jJ = UJ * qJ - eJ * AJ,
          YJ = eJ * XJ - FJ * qJ,
          hJ = FJ * AJ - UJ * XJ,
          DJ = Math.sqrt(jJ * jJ + YJ * YJ + hJ * hJ);
        let sJ;
        return sJ = 0 !== DJ ? 1 / DJ : 0, this.normal.x = jJ * sJ, this.normal.y = YJ * sJ, this.normal.z = hJ * sJ, this.d = -(this.normal.x * JJ.x + this.normal.y * JJ.y + this.normal.z * JJ.z), this
      }
      isFrontFacingTo(JJ, cJ) {
        return FJ.j.Dot(this.normal, JJ) <= cJ
      }
      signedDistanceTo(JJ) {
        return FJ.j.Dot(JJ, this.normal) + this.d
      }
      static FromArray(JJ) {
        return new UJ(JJ[0], JJ[1], JJ[2], JJ[3])
      }
      static FromPoints(JJ, cJ, ZJ) {
        const FJ = new UJ(0, 0, 0, 0);
        return FJ.copyFromPoints(JJ, cJ, ZJ), FJ
      }
      static FromPositionAndNormal(JJ, cJ) {
        const ZJ = new UJ(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(JJ, cJ, ZJ)
      }
      static FromPositionAndNormalToRef(JJ, cJ, ZJ) {
        return ZJ.normal.rZJ(cJ), ZJ.normal.normalize(), ZJ.d = -JJ.dot(ZJ.normal), ZJ
      }
      static SignedDistanceToPlaneFromPositionAndNormal(JJ, cJ, ZJ) {
        const UJ = -(cJ.x * JJ.x + cJ.y * JJ.y + cJ.z * JJ.z);
        return FJ.j.Dot(ZJ, cJ) + UJ
      }
    }
    UJ._TmpMatrix = FJ.b.Identity()
  },
  37100: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => FJ
    });
    class FJ {
      constructor(JJ, cJ, ZJ, FJ) {
        this.x = JJ, this.y = cJ, this.width = ZJ, this.height = FJ
      }
      toGlobal(JJ, cJ) {
        return new FJ(this.x * JJ, this.y * cJ, this.width * JJ, this.height * cJ)
      }
      toGlobalToRef(JJ, cJ, ZJ) {
        return ZJ.x = this.x * JJ, ZJ.y = this.y * cJ, ZJ.width = this.width * JJ, ZJ.height = this.height * cJ, this
      }
      clone() {
        return new FJ(this.x, this.y, this.width, this.height)
      }
    }
  },
  37658: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => eJ
    });
    var FJ = ZJ(37660);
    const UJ = (JJ, cJ, ZJ) => JJ ? JJ.getClassName && "Mesh" === JJ.getClassName() ? null : !JJ.getClassName || "SubMesh" !== JJ.getClassName() && "PhysicsBody" !== JJ.getClassName() ? JJ.clone ? JJ.clone() : Array.isArray(JJ) ? JJ.slice() : ZJ && "object" === typeof JJ ? {
      ...JJ
    } : null : JJ.clone(cJ) : null;
    class eJ {
      static DeepCopy(JJ, cJ, ZJ, eJ) {
        let XJ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const AJ = function(JJ) {
          const cJ = [];
          do {
            const ZJ = Object.getOwnPropertyNames(JJ);
            for (const JJ of ZJ) - 1 === cJ.indexOf(JJ) && cJ.push(JJ)
          } while (JJ = Object.getPrototypeOf(JJ));
          return cJ
        }(JJ);
        for (const jJ of AJ) {
          if ("_" === jJ[0] && (!eJ || -1 === eJ.indexOf(jJ))) continue;
          if (jJ.endsWith("Observable")) continue;
          if (ZJ && -1 !== ZJ.indexOf(jJ)) continue;
          const AJ = JJ[jJ],
            YJ = typeof AJ;
          if ("function" !== YJ) try {
            if ("object" === YJ)
              if (AJ instanceof Uint8Array) cJ[jJ] = Uint8Array.from(AJ);
              else if (AJ instanceof Array) {
              if (cJ[jJ] = [], AJ.length > 0)
                if ("object" == typeof AJ[0])
                  for (let JJ = 0; JJ < AJ.length; JJ++) {
                    const ZJ = UJ(AJ[JJ], cJ, XJ); - 1 === cJ[jJ].indexOf(ZJ) && cJ[jJ].push(ZJ)
                  } else cJ[jJ] = AJ.slice(0)
            } else cJ[jJ] = UJ(AJ, cJ, XJ);
            else cJ[jJ] = AJ
          } catch (qJ) {
            FJ.c.Warn(qJ.message)
          }
        }
      }
    }
  },
  36865: (JJ, cJ, ZJ) => {
    function FJ() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (JJ => {
        const cJ = 16 * Math.random() | 0;
        return ("x" === JJ ? cJ : 3 & cJ | 8).toString(16)
      }))
    }
    ZJ.d(cJ, {
      d: () => FJ
    })
  },
  37660: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => FJ
    });
    class FJ {
      static _CheckLimit(JJ, cJ) {
        let ZJ = FJ._LogLimitOutputs[JJ];
        return ZJ ? ZJ.current++ : (ZJ = {
          limit: cJ,
          current: 1
        }, FJ._LogLimitOutputs[JJ] = ZJ), ZJ.current <= ZJ.limit
      }
      static _GenerateLimitMessage(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const ZJ = FJ._LogLimitOutputs[JJ];
        if (!ZJ || !FJ.MessageLimitReached) return;
        const UJ = this._Levels[cJ];
        ZJ.current === ZJ.limit && FJ[UJ.name](FJ.MessageLimitReached.replace(/%LIMIT%/g, "" + ZJ.limit).replace(/%TYPE%/g, UJ.name ?? ""))
      }
      static _AddLogEntry(JJ) {
        FJ._LogCache = JJ + FJ._LogCache, FJ.OnNewCacheEntry && FJ.OnNewCacheEntry(JJ)
      }
      static _FormatMessage(JJ) {
        const cJ = JJ => JJ < 10 ? "0" + JJ : "" + JJ,
          ZJ = new Date;
        return "[" + cJ(ZJ.getHours()) + ":" + cJ(ZJ.getMinutes()) + ":" + cJ(ZJ.getSeconds()) + "]: " + JJ
      }
      static _LogDisabled(JJ, cJ) {}
      static _LogEnabled() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          cJ = arguments.length > 1 ? arguments[1] : void 0,
          ZJ = arguments.length > 2 ? arguments[2] : void 0;
        const UJ = Array.isArray(cJ) ? cJ[0] : cJ;
        if (void 0 !== ZJ && !FJ._CheckLimit(UJ, ZJ)) return;
        const eJ = FJ._FormatMessage(UJ),
          XJ = this._Levels[JJ],
          AJ = Array.isArray(cJ) ? cJ.slice(1) : [];
        XJ.logFunc && XJ.logFunc("BJS - " + eJ, ...AJ);
        const qJ = `<div style='color:${XJ.color}'>${eJ}</div><br>`;
        FJ._AddLogEntry(qJ), FJ._GenerateLimitMessage(UJ, JJ)
      }
      static get LogCache() {
        return FJ._LogCache
      }
      static ClearLogCache() {
        FJ._LogCache = "", FJ._LogLimitOutputs = {}, FJ.errorsCount = 0
      }
      static set LogLevels(JJ) {
        FJ.Log = FJ._LogDisabled, FJ.Warn = FJ._LogDisabled, FJ.Error = FJ._LogDisabled;
        const cJ = [FJ.MessageLogLevel, FJ.WarningLogLevel, FJ.ErrorLogLevel];
        for (const ZJ of cJ)
          if ((JJ & ZJ) === ZJ) {
            const JJ = this._Levels[ZJ];
            FJ[JJ.name] = FJ._LogEnabled.bind(FJ, ZJ)
          }
      }
    }
    FJ.NoneLogLevel = 0, FJ.MessageLogLevel = 1, FJ.WarningLogLevel = 2, FJ.ErrorLogLevel = 4, FJ.AllLogLevel = 7, FJ.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", FJ._LogCache = "", FJ._LogLimitOutputs = {}, FJ._Levels = [{}, {
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
    }], FJ.errorsCount = 0, FJ.Log = FJ._LogEnabled.bind(FJ, FJ.MessageLogLevel), FJ.Warn = FJ._LogEnabled.bind(FJ, FJ.WarningLogLevel), FJ.Error = FJ._LogEnabled.bind(FJ, FJ.ErrorLogLevel)
  },
  59392: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      CreateScreenshot: () => kJ,
      CreateScreenshotAsync: () => pJ,
      CreateScreenshotForFrameGraphAsync: () => OJ,
      CreateScreenshotUsingRenderTarget: () => zJ,
      CreateScreenshotUsingRenderTargetAsync: () => NJ,
      CreateScreenshotWithResizeAsync: () => dJ,
      RegisterScreenshotTools: () => iJ,
      ScreenshotTools: () => CJ
    });
    var FJ = ZJ(39243),
      UJ = ZJ(40527),
      eJ = ZJ(40501),
      XJ = ZJ(38822),
      AJ = ZJ(40506),
      qJ = ZJ(36192),
      jJ = ZJ(36174);
    class YJ extends AJ.i {
      static _GetDefines(JJ) {
        if (!JJ) return null;
        return JJ.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
      }
      _gatherImports(JJ, cJ) {
        JJ ? (this._webGPUReady = !0, cJ.push(Promise.all([ZJ.e(357).then((() => ZJ(59755))), ZJ.e(358).then((() => ZJ(59763)))]))) : cJ.push(Promise.all([ZJ.e(359).then((() => ZJ(59765))), ZJ.e(360).then((() => ZJ(59769)))]))
      }
      constructor(JJ) {
        const cJ = {
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: JJ,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || qJ.c.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          vertexShader: YJ.VertexUrl,
          fragmentShader: YJ.FragmentUrl,
          uniforms: YJ.Uniforms
        };
        super({
          ...cJ,
          defines: YJ._GetDefines(cJ.engine)
        }), this.texelSize = new jJ.i(0, 0)
      }
      bind() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.bind(JJ), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
      }
    }
    YJ.VertexUrl = "fxaa", YJ.FragmentUrl = "fxaa", YJ.Uniforms = ["texelSize"];
    class hJ extends eJ.e {
      getClassName() {
        return "FxaaPostProcess"
      }
      constructor(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          UJ = arguments.length > 3 ? arguments[3] : void 0,
          eJ = arguments.length > 4 ? arguments[4] : void 0,
          XJ = arguments.length > 5 ? arguments[5] : void 0,
          AJ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const qJ = {
          uniforms: YJ.Uniforms,
          size: "number" === typeof cJ ? cJ : void 0,
          camera: ZJ,
          samplingMode: UJ || FJ.i.BILINEAR_SAMPLINGMODE,
          engine: eJ,
          reusable: XJ,
          textureType: AJ,
          ...cJ
        };
        super(JJ, YJ.FragmentUrl, {
          effectWrapper: "number" !== typeof cJ && cJ.effectWrapper ? void 0 : new YJ(JJ, eJ, qJ),
          ...qJ
        }), this.onApplyObservable.add((JJ => {
          this._effectWrapper.texelSize = this.texelSize
        }))
      }
      static _Parse(JJ, cJ, ZJ, FJ) {
        return XJ.c.Parse((() => new hJ(JJ.name, JJ.options, cJ, JJ.renderTargetSamplingMode, ZJ.gn(), JJ.reusable)), JJ, ZJ, FJ)
      }
    }
    var DJ = ZJ(37660),
      sJ = ZJ(38879),
      nJ = ZJ(40538),
      GJ = ZJ(40520),
      fJ = ZJ(38689);
    const xJ = 0;
    class rJ {
      constructor(JJ, cJ, ZJ) {
        this.name = JJ, this._parentTask = cJ, this._context = ZJ, this.disabled = !1
      }
      setInitializeFunc(JJ) {
        this._initFunc = JJ
      }
      setExecuteFunc(JJ) {
        this._executeFunc = JJ
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
    class vJ extends rJ {
      static IsObjectListPass(JJ) {
        return void 0 !== JJ.setObjectList
      }
      get objectList() {
        return this._objectList
      }
      setObjectList(JJ) {
        this._objectList = JJ
      }
      constructor(JJ, cJ, ZJ, FJ) {
        super(JJ, cJ, ZJ), this._engine = FJ
      }
      _isValid() {
        const JJ = super._isValid();
        return JJ || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
      }
    }
    class mJ extends rJ {
      static IsRenderPass(JJ) {
        return void 0 !== JJ.setRenderTarget
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
      constructor(JJ, cJ, ZJ, FJ) {
        super(JJ, cJ, ZJ), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = FJ
      }
      setRenderTarget(JJ) {
        this._renderTarget = JJ
      }
      setRenderTargetDepth(JJ) {
        this._renderTargetDepth = JJ
      }
      addDependencies(JJ) {
        if (void 0 !== JJ)
          if (Array.isArray(JJ))
            for (const cJ of JJ) this._dependencies.add(cJ);
          else this._dependencies.add(JJ)
      }
      collectDependencies(JJ) {
        const cJ = this._dependencies.keys();
        for (let ZJ = cJ.next(); !0 !== ZJ.done; ZJ = cJ.next()) JJ.add(ZJ.value);
        if (void 0 !== this._renderTarget)
          if (Array.isArray(this._renderTarget))
            for (const ZJ of this._renderTarget) void 0 !== ZJ && JJ.add(ZJ);
          else JJ.add(this._renderTarget);
        void 0 !== this._renderTargetDepth && JJ.add(this._renderTargetDepth)
      }
      setOutputLayerAndFaceIndices(JJ) {
        const cJ = this.frameGraphRenderTarget.renderTargetWrapper;
        if (cJ)
          for (const ZJ of JJ) cJ.setLayerAndFaceIndex(ZJ.targetIndex, ZJ.layerIndex, ZJ.faceIndex)
      }
      _initialize() {
        this._frameGraphRenderTarget = this._context.createRenderTarget(this.name, this._renderTarget, this._renderTargetDepth, this.depthReadOnly, this.stencilReadOnly), super._initialize()
      }
      _execute() {
        this._context.bindRenderTarget(this._frameGraphRenderTarget), super._execute(), this._context.restoreDefaultFramebuffer()
      }
      _isValid() {
        const JJ = super._isValid();
        return JJ || (void 0 !== this._renderTarget || void 0 !== this.renderTargetDepth ? null : "Render target and render target depth cannot both be undefined.")
      }
      _dispose() {
        this._frameGraphRenderTarget?.dispose()
      }
    }
    var QJ = ZJ(36200);
    class EJ {
      get name() {
        return this._name
      }
      set name(JJ) {
        this._name = JJ
      }
      get disabled() {
        return this._disabled
      }
      set disabled(JJ) {
        this._disabled = JJ
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
      constructor(JJ, cJ) {
        this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new QJ.c, this.onBeforeTaskExecute = new QJ.c, this.onAfterTaskExecute = new QJ.c, this.name = JJ, this._frameGraph = cJ, this._reset()
      }
      _reset() {
        for (const JJ of this._passes) JJ._dispose();
        for (const JJ of this._passesDisabled) JJ._dispose();
        this._passes.length = 0, this._passesDisabled.length = 0
      }
      _addPass(JJ, cJ) {
        cJ ? this._passesDisabled.push(JJ) : this._passes.push(JJ)
      }
      _checkTask() {
        let JJ, cJ = null,
          ZJ = null;
        for (const AJ of this._passes) {
          const FJ = AJ._isValid();
          if (FJ) throw new Error(`Pass "${AJ.name}" is not valid. ${FJ}`);
          if (mJ.IsRenderPass(AJ)) {
            const JJ = Array.isArray(AJ.renderTarget) ? AJ.renderTarget : [AJ.renderTarget];
            cJ = [];
            for (const ZJ of JJ) void 0 !== ZJ && cJ.push(this._frameGraph.textureManager.getTextureFromHandle(ZJ));
            ZJ = void 0 !== AJ.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(AJ.renderTargetDepth) : null
          } else vJ.IsObjectListPass(AJ) && (JJ = AJ.objectList)
        }
        let FJ, UJ = null,
          eJ = [],
          XJ = null;
        for (const AJ of this._passesDisabled) {
          const JJ = AJ._isValid();
          if (JJ) throw new Error(`Pass "${AJ.name}" is not valid. ${JJ}`);
          if (mJ.IsRenderPass(AJ)) {
            const JJ = Array.isArray(AJ.renderTarget) ? AJ.renderTarget : [AJ.renderTarget];
            UJ = [];
            for (const cJ of JJ) void 0 !== cJ && UJ.push(this._frameGraph.textureManager.getTextureFromHandle(cJ));
            eJ = JJ, XJ = void 0 !== AJ.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(AJ.renderTargetDepth) : null
          } else vJ.IsObjectListPass(AJ) && (FJ = AJ.objectList)
        }
        if (this._passesDisabled.length > 0) {
          if (!this._checkSameRenderTarget(cJ, UJ)) {
            let JJ = !0;
            for (const cJ of eJ)
              if (void 0 !== cJ && !this._frameGraph.textureManager.isHistoryTexture(cJ)) {
                JJ = !1;
                break
              } if (!JJ) throw new Error(`The output texture of the task "${this.name}" is different when it is enabled or disabled.`)
          }
          if (ZJ !== XJ && null !== XJ) throw new Error(`The output depth texture of the task "${this.name}" is different when it is enabled or disabled.`);
          if (JJ !== FJ && null !== FJ) throw new Error(`The output object list of the task "${this.name}" is different when it is enabled or disabled.`)
        }
      }
      _execute() {
        const JJ = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
        this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const cJ of JJ) cJ._execute()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
        this.onAfterTaskExecute.notifyObservers(this)
      }
      _initializePasses() {
        this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const JJ of this._passes) JJ._initialize();
          for (const JJ of this._passesDisabled) JJ._initialize()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
      }
      _checkSameRenderTarget(JJ, cJ) {
        if (null === JJ || null === cJ) return JJ === cJ;
        if (JJ.length !== cJ.length) return !1;
        for (let ZJ = 0; ZJ < JJ.length; ZJ++)
          if (JJ[ZJ] !== cJ[ZJ]) return !1;
        return !0
      }
    }
    class VJ extends EJ {
      get alphaMode() {
        return this.postProcess.alphaMode
      }
      set alphaMode(JJ) {
        this.postProcess.alphaMode = JJ
      }
      get drawWrapper() {
        return this._postProcessDrawWrapper
      }
      constructor(JJ, cJ, ZJ) {
        super(JJ, cJ), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = ZJ, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture = this._frameGraph.textureManager.createDanglingHandle(), this.outputDepthAttachmentTexture = this._frameGraph.textureManager.createDanglingHandle()
      }
      isReady() {
        return this.postProcess.isReady()
      }
      getClassName() {
        return "FrameGraphPostProcessTask"
      }
      record() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          cJ = arguments.length > 1 ? arguments[1] : void 0,
          ZJ = arguments.length > 2 ? arguments[2] : void 0;
        if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
        const FJ = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
        if (FJ && (FJ.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, FJ), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentTexture, this.depthAttachmentTexture), FJ) {
          const JJ = this._frameGraph.textureManager.getTextureAbsoluteDimensions(FJ);
          this._sourceWidth = JJ.width, this._sourceHeight = JJ.height
        }
        const UJ = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
        this._outputWidth = UJ.size.width, this._outputHeight = UJ.size.height;
        const eJ = this._frameGraph.addRenderPass(this.name);
        if (eJ.depthReadOnly = this.depthReadOnly, eJ.stencilReadOnly = this.stencilReadOnly, eJ.addDependencies(this.sourceTexture), eJ.setRenderTarget(this.outputTexture), eJ.setRenderTargetDepth(this.depthAttachmentTexture), eJ.setExecuteFunc((JJ => {
            JJ.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && JJ.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), cJ?.(JJ), this.viewport && JJ.setViewport(this.viewport), JJ.applyFullScreenEffect(this._postProcessDrawWrapper, (() => {
              void 0 !== this.sourceTexture && JJ.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), ZJ?.(JJ), this.postProcess.bind()
            }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), JJ.restoreDefaultFramebuffer(), JJ.popDebugGroup()
          })), !JJ) {
          const JJ = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
          JJ.depthReadOnly = this.depthReadOnly, JJ.stencilReadOnly = this.stencilReadOnly, JJ.addDependencies(this.sourceTexture), JJ.setRenderTarget(this.outputTexture), JJ.setRenderTargetDepth(this.depthAttachmentTexture), JJ.setExecuteFunc((JJ => {
            void 0 !== this.sourceTexture && 0 === this.alphaMode && (this.viewport && JJ.setViewport(this.viewport), JJ.copyTexture(this.sourceTexture, void 0, void 0 !== this.viewport))
          }))
        }
        return eJ
      }
      dispose() {
        this.postProcess.dispose(), super.dispose()
      }
    }
    class KJ extends VJ {
      constructor(JJ, cJ, ZJ) {
        super(JJ, cJ, ZJ || new YJ(JJ, cJ.engine))
      }
      getClassName() {
        return "FrameGraphFXAATask"
      }
      record() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          cJ = arguments.length > 1 ? arguments[1] : void 0,
          ZJ = arguments.length > 2 ? arguments[2] : void 0;
        const FJ = super.record(JJ, cJ, ZJ);
        return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, FJ
      }
    }
    var yJ = ZJ(40531);
    class SJ extends VJ {
      constructor(JJ, cJ, ZJ) {
        super(JJ, cJ, ZJ || new yJ.e(JJ, cJ.engine))
      }
      getClassName() {
        return "FrameGraphPassTask"
      }
    }
    var IJ = ZJ(38874),
      MJ = ZJ(38938),
      bJ = ZJ(38910),
      wJ = ZJ(39015),
      WJ = ZJ(36231);
    class gJ {
      getRenderCamera(JJ) {
        if (this._renderCamera) return this._renderCamera;
        {
          let cJ;
          return cJ = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, JJ && cJ && cJ.isRigCamera ? cJ.rigParent : cJ
        }
      }
      setRenderCamera(JJ) {
        this._renderCamera = JJ
      }
      _getSharedGizmoLight() {
        return this._sharedGizmoLight || (this._sharedGizmoLight = new wJ.e("shared gizmo light", new jJ.j(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = WJ.e.Gray()), this._sharedGizmoLight
      }
      static get DefaultUtilityLayer() {
        return null == gJ._DefaultUtilityLayer ? gJ._CreateDefaultUtilityLayerFromScene(qJ.c.LastCreatedScene) : gJ._DefaultUtilityLayer
      }
      static _CreateDefaultUtilityLayerFromScene(JJ) {
        return gJ._DefaultUtilityLayer = new gJ(JJ), gJ._DefaultUtilityLayer.originalScene.Sy.addOnce((() => {
          gJ._DefaultUtilityLayer = null
        })), gJ._DefaultUtilityLayer
      }
      static get DefaultKeepDepthUtilityLayer() {
        return null == gJ._DefaultKeepDepthUtilityLayer ? gJ._CreateDefaultKeepUtilityLayerFromScene(qJ.c.LastCreatedScene) : gJ._DefaultKeepDepthUtilityLayer
      }
      static _CreateDefaultKeepUtilityLayerFromScene(JJ) {
        return gJ._DefaultKeepDepthUtilityLayer = new gJ(JJ), gJ._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, gJ._DefaultKeepDepthUtilityLayer.originalScene.Sy.addOnce((() => {
          gJ._DefaultKeepDepthUtilityLayer = null
        })), gJ._DefaultKeepDepthUtilityLayer
      }
      constructor(JJ) {
        let cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.originalScene = JJ, this.handleEvents = cJ, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.processAllEvents = !1, this.pickingEnabled = !0, this.onPointerOutObservable = new QJ.c, this.utilityLayerScene = new IJ.e(JJ.gn(), {
          virtual: !0,
          useFloatingOrigin: JJ.floatingOriginMode
        }), this.utilityLayerScene.useRightHandedSystem = JJ.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), cJ && (this._originalPointerObserver = JJ.onPrePointerObservable.add((cJ => {
          if (!this.utilityLayerScene.activeCamera) return;
          if (!this.pickingEnabled) return;
          if (!this.processAllEvents && cJ.type !== MJ.c.POINTERMOVE && cJ.type !== MJ.c.POINTERUP && cJ.type !== MJ.c.POINTERDOWN && cJ.type !== MJ.c.POINTERDOUBLETAP) return;
          this.utilityLayerScene.pointerX = JJ.pointerX, this.utilityLayerScene.pointerY = JJ.pointerY;
          const ZJ = cJ.event;
          if (JJ.isPointerCaptured(ZJ.pointerId)) return void(this._pointerCaptures[ZJ.pointerId] = !1);
          const FJ = ZJ => {
              let FJ;
              if (cJ.nearInteractionPickingInfo) FJ = cJ.nearInteractionPickingInfo.pickedMesh.Qy() == ZJ ? cJ.nearInteractionPickingInfo : new bJ.e;
              else if (ZJ !== this.utilityLayerScene && cJ.originalPickingInfo) FJ = cJ.originalPickingInfo;
              else {
                let UJ = null;
                this._renderCamera && (UJ = ZJ._activeCamera, ZJ._activeCamera = this._renderCamera, cJ.ray = null), FJ = cJ.ray ? ZJ.pickWithRay(cJ.ray) : ZJ.PD(JJ.pointerX, JJ.pointerY), UJ && (ZJ._activeCamera = UJ)
              }
              return FJ
            },
            UJ = FJ(this.utilityLayerScene);
          if (!cJ.ray && UJ && (cJ.ray = UJ.ray), cJ.originalPickingInfo?.aimTransform && UJ && (UJ.aimTransform = cJ.originalPickingInfo.aimTransform, UJ.gripTransform = cJ.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(cJ), this.onlyCheckPointerDownEvents && cJ.type != MJ.c.POINTERDOWN) return cJ.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new MJ.g(cJ.type, cJ.event, UJ), cJ.type), void(cJ.type === MJ.c.POINTERUP && this._pointerCaptures[ZJ.pointerId] && (this._pointerCaptures[ZJ.pointerId] = !1));
          if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) UJ && UJ.hit && (cJ.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new MJ.g(cJ.type, cJ.event, UJ), cJ.type), cJ.skipOnPointerObservable = !0);
          else {
            const ZJ = FJ(JJ),
              eJ = cJ.event;
            ZJ && UJ && (0 === UJ.distance && ZJ.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(ZJ.pickedMesh) ? (this._notifyObservers(cJ, ZJ, eJ), cJ.skipOnPointerObservable = !0) : cJ.type === MJ.c.POINTERDOWN ? (this._pointerCaptures[eJ.pointerId] = !0, this._notifyObservers(cJ, ZJ, eJ)) : cJ.type !== MJ.c.POINTERMOVE && cJ.type !== MJ.c.POINTERUP || (this._lastPointerEvents[eJ.pointerId] && (this.onPointerOutObservable.notifyObservers(eJ.pointerId), delete this._lastPointerEvents[eJ.pointerId]), this._notifyObservers(cJ, ZJ, eJ)) : !this._pointerCaptures[eJ.pointerId] && (UJ.distance < ZJ.distance || 0 === ZJ.distance) ? (this._notifyObservers(cJ, UJ, eJ), cJ.skipOnPointerObservable || (cJ.skipOnPointerObservable = UJ.distance > 0)) : !this._pointerCaptures[eJ.pointerId] && UJ.distance >= ZJ.distance && (this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(ZJ.pickedMesh) ? (this._notifyObservers(cJ, ZJ, eJ), cJ.skipOnPointerObservable = !0) : (cJ.type !== MJ.c.POINTERMOVE && cJ.type !== MJ.c.POINTERUP || this._lastPointerEvents[eJ.pointerId] && (this.onPointerOutObservable.notifyObservers(eJ.pointerId), delete this._lastPointerEvents[eJ.pointerId]), this._notifyObservers(cJ, UJ, eJ))), cJ.type === MJ.c.POINTERUP && this._pointerCaptures[eJ.pointerId] && (this._pointerCaptures[eJ.pointerId] = !1))
          }
        })), this._originalPointerObserver && JJ.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, ZJ || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((JJ => {
          this.shouldRender && JJ == this.getRenderCamera() && this.render()
        }))), this._sceneDisposeObserver = this.originalScene.Sy.add((() => {
          this.dispose()
        })), this._updateCamera()
      }
      _notifyObservers(JJ, cJ, ZJ) {
        JJ.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new MJ.g(JJ.type, JJ.event, cJ), JJ.type), this._lastPointerEvents[ZJ.pointerId] = !0)
      }
      render() {
        if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
          const JJ = this.utilityLayerScene.activeCamera.Qy(),
            cJ = this.utilityLayerScene.activeCamera;
          cJ._scene = this.utilityLayerScene, cJ.leftCamera && (cJ.leftCamera._scene = this.utilityLayerScene), cJ.rightCamera && (cJ.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), cJ._scene = JJ, cJ.leftCamera && (cJ.leftCamera._scene = JJ), cJ.rightCamera && (cJ.rightCamera._scene = JJ)
        }
      }
      dispose() {
        this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.Sy.remove(this._sceneDisposeObserver), this._originalPointerObserver && this.originalScene.onPrePointerObservable.remove(this._originalPointerObserver), this.utilityLayerScene.dispose()
      }
      _updateCamera() {
        this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
      }
    }
    gJ._DefaultUtilityLayer = null, gJ._DefaultKeepDepthUtilityLayer = null;
    const HJ = {
      FindMainCamera: function(JJ) {
        return JJ.findMainCamera()
      },
      FindMainObjectRenderer: function(JJ) {
        return JJ.findMainObjectRenderer()
      },
      CreateUtilityLayerRenderer: function(JJ) {
        let cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const ZJ = JJ.iG,
          FJ = new gJ(ZJ, cJ, !0);
        FJ.utilityLayerScene.activeCamera = ZJ.activeCamera;
        let UJ = HJ.FindMainCamera(ZJ.frameGraph);
        !UJ && ZJ.cameras.length > 0 && (UJ = ZJ.cameras[0]), UJ && (FJ.setRenderCamera(UJ), FJ.utilityLayerScene.activeCamera = UJ);
        const eJ = ZJ.onAfterRenderObservable.add((() => {
          FJ.render()
        }));
        return FJ.utilityLayerScene.Sy.addOnce((() => {
          ZJ.onAfterRenderObservable.remove(eJ)
        })), FJ
      }
    };
    let PJ = null;

    function kJ(JJ, cJ, ZJ, FJ) {
      let UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        eJ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        XJ = arguments.length > 6 ? arguments[6] : void 0,
        AJ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        qJ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
      const {
        height: jJ,
        width: YJ
      } = TJ(JJ, cJ, ZJ);
      if (!jJ || !YJ) return void DJ.c.Error("Invalid 'size' parameter !");
      const hJ = cJ.Qy();
      let nJ = hJ.activeCamera !== cJ;
      if (hJ.frameGraph) {
        const JJ = HJ.FindMainObjectRenderer(hJ.frameGraph);
        JJ && (nJ = JJ.camera !== cJ)
      }
      nJ ? zJ(JJ, cJ, ZJ, (JJ => {
        if (eJ) {
          const cJ = new Blob([JJ]);
          sJ.j.DownloadBlob(cJ), FJ && FJ("")
        } else FJ && FJ(JJ)
      }), UJ, 1, JJ.getCreationOptions().antialias, void 0, void 0, void 0, void 0, XJ) : JJ.onEndFrameObservable.addOnce((() => {
        PJ || (PJ = document.createElement("canvas")), PJ.width = YJ, PJ.height = jJ;
        const cJ = PJ.getContext("2d"),
          ZJ = JJ.getRenderingCanvas();
        if (!cJ || !ZJ) return void DJ.c.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
        const nJ = ZJ.width,
          GJ = ZJ.height,
          fJ = PJ.width,
          xJ = PJ.height,
          rJ = fJ / nJ,
          vJ = xJ / GJ,
          mJ = AJ ? Math.max(rJ, vJ) : Math.min(rJ, vJ),
          QJ = nJ * mJ,
          EJ = GJ * mJ,
          VJ = (fJ - QJ) / 2,
          KJ = (xJ - EJ) / 2;
        cJ.save(), cJ.fillStyle = qJ ? hJ.clearColor.toHexString() : "rgba(0, 0, 0, 0)", cJ.fillRect(0, 0, YJ, jJ), cJ.restore(), cJ.drawImage(ZJ, 0, 0, nJ, GJ, VJ, KJ, QJ, EJ), eJ ? (sJ.j.EncodeScreenshotCanvasData(PJ, void 0, UJ, void 0, XJ), FJ && FJ("")) : sJ.j.EncodeScreenshotCanvasData(PJ, FJ, UJ, void 0, XJ)
      }))
    }
    async function pJ(JJ, cJ, ZJ) {
      let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        UJ = arguments.length > 4 ? arguments[4] : void 0,
        eJ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        XJ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        AJ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      return await new Promise(((qJ, jJ) => {
        kJ(JJ, cJ, ZJ, (JJ => {
          "undefined" !== typeof JJ ? qJ(JJ) : jJ(new Error("Data is undefined"))
        }), FJ, AJ, UJ, eJ, XJ)
      }))
    }
    async function dJ(JJ, cJ, ZJ, FJ) {
      let UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        eJ = arguments.length > 5 ? arguments[5] : void 0,
        XJ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return await new Promise((AJ => {
        kJ(JJ, cJ, {
          width: ZJ,
          height: FJ
        }, (() => {
          AJ()
        }), UJ, !0, eJ, XJ)
      }))
    }

    function zJ(JJ, cJ, eJ, XJ) {
      let AJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        qJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
        jJ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        YJ = arguments.length > 7 ? arguments[7] : void 0,
        sJ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        xJ = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        rJ = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
        vJ = arguments.length > 11 ? arguments[11] : void 0,
        mJ = arguments.length > 12 ? arguments[12] : void 0,
        QJ = arguments.length > 13 ? arguments[13] : void 0,
        EJ = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
        VJ = arguments.length > 15 ? arguments[15] : void 0;
      const KJ = cJ.Qy();
      if (KJ.frameGraph) return void OJ(KJ.frameGraph, cJ, eJ, AJ, qJ, jJ, YJ, vJ, QJ, !XJ).then((JJ => {
        XJ && XJ(JJ)
      }));
      const {
        height: yJ,
        width: SJ,
        finalWidth: IJ,
        finalHeight: MJ
      } = TJ(JJ, cJ, eJ), bJ = {
        width: SJ,
        height: yJ
      };
      if (!yJ || !SJ) return void DJ.c.Error("Invalid 'size' parameter !");
      JJ.skipFrameRender = !0;
      const wJ = JJ.getRenderWidth,
        WJ = JJ.getRenderHeight;
      JJ.getRenderWidth = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && JJ._currentRenderTarget ? JJ._currentRenderTarget.width : SJ
      }, JJ.getRenderHeight = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && JJ._currentRenderTarget ? JJ._currentRenderTarget.height : yJ
      }, JJ.onResizeObservable.hasObservers() && JJ.onResizeObservable.notifyObservers(JJ);
      const gJ = new UJ.d("screenShot", bJ, KJ, !1, !1, 0, !1, FJ.i.BILINEAR_SAMPLINGMODE, void 0, xJ, void 0, void 0, void 0, qJ);
      gJ.renderList = KJ.meshes.slice(), gJ.samples = qJ, gJ.renderSprites = sJ, gJ.activeCamera = cJ, gJ.forceLayerMaskCheck = rJ, mJ?.(gJ);
      const HJ = QJ || nJ.DumpData,
        PJ = () => {
          KJ.incrementRenderId(), KJ.resetCachedMaterial(), (0, fJ.h)((() => gJ.isReadyForRendering() && cJ.isReady(!0)), (() => {
            JJ.onEndFrameObservable.addOnce((() => {
              IJ === SJ && MJ === yJ ? gJ.readPixels(void 0, void 0, void 0, !1).then((JJ => {
                HJ(SJ, yJ, JJ, XJ, AJ, YJ, !0, void 0, vJ), gJ.dispose()
              })) : (JJ.isWebGPU ? ZJ.e(353).then((() => ZJ(59697))) : ZJ.e(354).then((() => ZJ(59703)))).then((async () => await (0, GJ.c)("pass", gJ.getInternalTexture(), KJ, void 0, void 0, void 0, IJ, MJ).then((cJ => {
                JJ._readTexturePixels(cJ, IJ, MJ, -1, 0, null, !0, !1, 0, 0).then((JJ => {
                  HJ(IJ, MJ, JJ, XJ, AJ, YJ, !0, void 0, vJ), cJ.dispose()
                }))
              }))))
            })), KJ.incrementRenderId(), KJ.resetCachedMaterial();
            const FJ = KJ.activeCamera,
              UJ = KJ.activeCameras,
              eJ = cJ.outputRenderTarget,
              qJ = KJ.spritesEnabled;
            KJ.activeCamera = cJ, KJ.activeCameras = null, cJ.outputRenderTarget = gJ, KJ.spritesEnabled = sJ;
            const jJ = KJ.meshes;
            KJ.meshes = gJ.renderList || KJ.meshes;
            try {
              KJ.render()
            } finally {
              KJ.activeCamera = FJ, KJ.activeCameras = UJ, cJ.outputRenderTarget = eJ, KJ.spritesEnabled = qJ, KJ.meshes = jJ, JJ.getRenderWidth = wJ, JJ.getRenderHeight = WJ, JJ.onResizeObservable.hasObservers() && JJ.onResizeObservable.notifyObservers(JJ), cJ.getProjectionMatrix(!0), JJ.skipFrameRender = !1
            }
          }), (() => {
            JJ.skipFrameRender = !1, JJ.getRenderWidth = wJ, JJ.getRenderHeight = WJ, VJ?.()
          }), void 0, EJ)
        };
      if (jJ) {
        const JJ = new hJ("antialiasing", 1, KJ.activeCamera);
        gJ.addPostProcess(JJ), JJ.autoClear = !0, JJ.onEffectCreatedObservable.addOnce((JJ => {
          JJ.isReady() ? PJ() : JJ.onCompiled = () => {
            PJ()
          }
        }))
      } else PJ()
    }
    async function NJ(JJ, cJ, ZJ) {
      let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        eJ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        XJ = arguments.length > 6 ? arguments[6] : void 0,
        AJ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        qJ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        jJ = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
        YJ = arguments.length > 10 ? arguments[10] : void 0,
        hJ = arguments.length > 11 ? arguments[11] : void 0,
        DJ = arguments.length > 12 ? arguments[12] : void 0;
      return await new Promise(((sJ, nJ) => {
        zJ(JJ, cJ, ZJ, (JJ => {
          "undefined" !== typeof JJ ? sJ(JJ) : nJ(new Error("Data is undefined"))
        }), FJ, UJ, eJ, XJ, AJ, qJ, jJ, YJ, hJ, DJ)
      }))
    }
    async function OJ(JJ, cJ, ZJ) {
      let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        eJ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        XJ = arguments.length > 6 ? arguments[6] : void 0,
        AJ = arguments.length > 7 ? arguments[7] : void 0,
        qJ = arguments.length > 8 ? arguments[8] : void 0,
        jJ = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        YJ = arguments.length > 10 ? arguments[10] : void 0;
      const hJ = JJ.engine,
        DJ = JJ.textureManager,
        {
          height: sJ,
          width: GJ,
          finalWidth: fJ,
          finalHeight: rJ
        } = TJ(hJ, cJ, ZJ),
        vJ = {
          width: GJ,
          height: sJ
        },
        mJ = qJ || nJ.DumpData,
        QJ = JJ.tasks,
        EJ = QJ.length,
        VJ = JJ.pausedExecution,
        yJ = hJ.getCaps().parallelShaderCompile;
      DJ.setBackBufferTextures(0, 0, {
        size: vJ,
        options: {
          createMipMaps: !1,
          samples: UJ,
          types: [0],
          formats: [5],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot color"]
        },
        sizeIsPercentage: !1
      }, {
        size: vJ,
        options: {
          createMipMaps: !1,
          samples: UJ,
          types: [0],
          formats: [hJ.isStencilEnable ? 13 : 14],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot depth"]
        },
        sizeIsPercentage: !1
      });
      let IJ = xJ;
      if (eJ) {
        const cJ = new KJ("fxaa", JJ);
        cJ.sourceTexture = IJ, IJ = cJ.outputTexture, JJ.addTask(cJ)
      }
      if (fJ !== GJ || rJ !== sJ) {
        const cJ = new SJ("pass", JJ);
        cJ.sourceTexture = IJ, cJ.targetTexture = JJ.textureManager.createRenderTargetTexture("pass_output", {
          size: {
            width: fJ,
            height: rJ
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
        }), IJ = cJ.outputTexture, JJ.addTask(cJ)
      }
      const MJ = HJ.FindMainObjectRenderer(JJ);
      let bJ = null;
      MJ && (bJ = MJ.camera, MJ.camera = cJ), hJ.getCaps().parallelShaderCompile = void 0, await JJ.buildAsync();
      const wJ = YJ ?? (DJ.hasHistoryTextures ? 32 : 1);
      for (let nJ = 0; nJ < wJ; ++nJ) JJ.execute();
      JJ.pausedExecution = !0, hJ.getCaps().parallelShaderCompile = yJ;
      for (let nJ = EJ; nJ < QJ.length; ++nJ) JJ.tasks[nJ].dispose();
      JJ.tasks.length = EJ, MJ && bJ && (MJ.camera = bJ);
      const WJ = JJ.textureManager.getTextureFromHandle(IJ);
      return WJ.incrementReferences(), DJ.resetBackBufferTextures(), await JJ.buildAsync(), JJ.pausedExecution = VJ, new Promise((JJ => {
        hJ._readTexturePixels(WJ, fJ, rJ, -1, 0, null, !0, !1, 0, 0).then((async cJ => {
          WJ.dispose(), mJ(fJ, rJ, cJ, jJ ? void 0 : cJ => JJ(cJ), FJ, XJ, !0, void 0, AJ), jJ && JJ(null)
        }))
      }))
    }

    function TJ(JJ, cJ, ZJ) {
      let FJ = 0,
        UJ = 0,
        eJ = 0,
        XJ = 0;
      if ("object" === typeof ZJ) {
        const AJ = ZJ.precision ? Math.abs(ZJ.precision) : 1;
        ZJ.width && ZJ.height ? (FJ = ZJ.height * AJ, UJ = ZJ.width * AJ) : ZJ.width && !ZJ.height ? (UJ = ZJ.width * AJ, FJ = Math.round(UJ / JJ.getAspectRatio(cJ))) : ZJ.height && !ZJ.width ? (FJ = ZJ.height * AJ, UJ = Math.round(FJ * JJ.getAspectRatio(cJ))) : (UJ = Math.round(JJ.getRenderWidth() * AJ), FJ = Math.round(UJ / JJ.getAspectRatio(cJ))), ZJ.finalWidth && ZJ.finalHeight ? (XJ = ZJ.finalHeight, eJ = ZJ.finalWidth) : ZJ.finalWidth && !ZJ.finalHeight ? (eJ = ZJ.finalWidth, XJ = Math.round(eJ / JJ.getAspectRatio(cJ))) : ZJ.finalHeight && !ZJ.finalWidth ? (XJ = ZJ.finalHeight, eJ = Math.round(XJ * JJ.getAspectRatio(cJ))) : (eJ = UJ, XJ = FJ)
      } else isNaN(ZJ) || (FJ = ZJ, UJ = ZJ, eJ = ZJ, XJ = ZJ);
      return UJ && (UJ = Math.floor(UJ)), FJ && (FJ = Math.floor(FJ)), eJ && (eJ = Math.floor(eJ)), XJ && (XJ = Math.floor(XJ)), {
        height: 0 | FJ,
        width: 0 | UJ,
        finalWidth: 0 | eJ,
        finalHeight: 0 | XJ
      }
    }
    const CJ = {
      CreateScreenshot: kJ,
      CreateScreenshotAsync: pJ,
      CreateScreenshotWithResizeAsync: dJ,
      CreateScreenshotUsingRenderTarget: zJ,
      CreateScreenshotUsingRenderTargetAsync: NJ,
      CreateScreenshotForFrameGraphAsync: OJ
    };
    let uJ = !1;

    function iJ() {
      if (uJ) return;
      uJ = !0;
      sJ.j.CreateScreenshot = kJ, sJ.j.CreateScreenshotAsync = pJ, sJ.j.CreateScreenshotUsingRenderTarget = zJ, sJ.j.CreateScreenshotUsingRenderTargetAsync = NJ
    }
    iJ()
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);