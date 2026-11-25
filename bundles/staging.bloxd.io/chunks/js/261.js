export const id = 261;
export const ids = [261, 262];
export const modules = {
  41362: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => zM,
      e: () => mM
    });
    var OM = iM(41099),
      SM = iM(41105),
      jM = iM(38040),
      aM = iM(38173),
      PM = iM(41366),
      nM = iM(41328),
      QM = iM(38085);
    let zM = (() => {
        var MM;
        let rM, iM, nM = PM.d,
          QM = [],
          zM = [],
          LM = [],
          mM = [];
        return MM = class extends nM {
          constructor(MM, rM, iM, SM) {
            super(MM, iM, SM), this.groundColor = (0, OM.m)(this, QM, new aM.d(0, 0, 0)), this.direction = ((0, OM.m)(this, zM), (0, OM.m)(this, LM, void 0)), (0, OM.m)(this, mM), this.direction = rM || jM.q.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(MM) {
            return this.direction = jM.q.Normalize(MM.subtract(jM.q.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(MM, rM) {
            const iM = jM.q.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", iM.x, iM.y, iM.z, 0, rM), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), rM), this
          }
          transferToNodeMaterialEffect(MM, rM) {
            const iM = jM.q.Normalize(this.direction);
            return MM.setFloat3(rM, iM.x, iM.y, iM.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = jM.d.Identity()), this._worldMatrix
          }
          getTypeID() {
            return PM.d.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(MM, rM) {
            MM["HEMILIGHT" + rM] = !0
          }
        }, (() => {
          const jM = "function" === typeof Symbol && Symbol.metadata ? Object.create(nM[Symbol.metadata] ?? null) : void 0;
          rM = [(0, SM.r)()], iM = [(0, SM.J)()], (0, OM.i)(null, null, rM, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: MM => "groundColor" in MM,
              get: MM => MM.groundColor,
              set: (MM, rM) => {
                MM.groundColor = rM
              }
            },
            metadata: jM
          }, QM, zM), (0, OM.i)(null, null, iM, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: MM => "direction" in MM,
              get: MM => MM.direction,
              set: (MM, rM) => {
                MM.direction = rM
              }
            },
            metadata: jM
          }, LM, mM), jM && Object.defineProperty(MM, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: jM
          })
        })(), MM
      })(),
      LM = !1;

    function mM() {
      LM || (LM = !0, nM.d.AddNodeConstructor("Light_Type_3", ((MM, rM) => () => new zM(MM, jM.q.Zero(), rM))), (0, QM.e)("BABYLON.HemisphericLight", zM))
    }
  },
  38740: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => SM
    });
    var OM = iM(38744);
    class SM {
      static GetPlanes(MM) {
        const rM = [];
        for (let iM = 0; iM < 6; iM++) rM.push(new OM.d(0, 0, 0, 0));
        return SM.GetPlanesToRef(MM, rM), rM
      }
      static GetNearPlaneToRef(MM, rM) {
        const iM = MM.m;
        rM.normal.x = iM[3] + iM[2], rM.normal.y = iM[7] + iM[6], rM.normal.z = iM[11] + iM[10], rM.d = iM[15] + iM[14], rM.normalize()
      }
      static GetFarPlaneToRef(MM, rM) {
        const iM = MM.m;
        rM.normal.x = iM[3] - iM[2], rM.normal.y = iM[7] - iM[6], rM.normal.z = iM[11] - iM[10], rM.d = iM[15] - iM[14], rM.normalize()
      }
      static GetLeftPlaneToRef(MM, rM) {
        const iM = MM.m;
        rM.normal.x = iM[3] + iM[0], rM.normal.y = iM[7] + iM[4], rM.normal.z = iM[11] + iM[8], rM.d = iM[15] + iM[12], rM.normalize()
      }
      static GetRightPlaneToRef(MM, rM) {
        const iM = MM.m;
        rM.normal.x = iM[3] - iM[0], rM.normal.y = iM[7] - iM[4], rM.normal.z = iM[11] - iM[8], rM.d = iM[15] - iM[12], rM.normalize()
      }
      static GetTopPlaneToRef(MM, rM) {
        const iM = MM.m;
        rM.normal.x = iM[3] - iM[1], rM.normal.y = iM[7] - iM[5], rM.normal.z = iM[11] - iM[9], rM.d = iM[15] - iM[13], rM.normalize()
      }
      static GetBottomPlaneToRef(MM, rM) {
        const iM = MM.m;
        rM.normal.x = iM[3] + iM[1], rM.normal.y = iM[7] + iM[5], rM.normal.z = iM[11] + iM[9], rM.d = iM[15] + iM[13], rM.normalize()
      }
      static GetPlanesToRef(MM, rM) {
        SM.GetNearPlaneToRef(MM, rM[0]), SM.GetFarPlaneToRef(MM, rM[1]), SM.GetLeftPlaneToRef(MM, rM[2]), SM.GetRightPlaneToRef(MM, rM[3]), SM.GetTopPlaneToRef(MM, rM[4]), SM.GetBottomPlaneToRef(MM, rM[5])
      }
      static IsPointInFrustum(MM, rM) {
        for (let iM = 0; iM < 6; iM++)
          if (rM[iM].dotCoordinate(MM) < 0) return !1;
        return !0
      }
    }
  },
  38744: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => SM
    });
    var OM = iM(38040);
    class SM {
      constructor(MM, rM, iM, SM) {
        this.normal = new OM.q(MM, rM, iM), this.d = SM
      }
      HOM() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new SM(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let MM = this.normal.getHashCode();
        return MM = 397 * MM ^ this.d, MM
      }
      normalize() {
        const MM = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let rM = 0;
        return 0 !== MM && (rM = 1 / MM), this.normal.x *= rM, this.normal.y *= rM, this.normal.z *= rM, this.d *= rM, this
      }
      transform(MM) {
        const rM = SM._TmpMatrix;
        MM.invertToRef(rM);
        const iM = rM.m,
          OM = this.normal.x,
          jM = this.normal.y,
          aM = this.normal.z,
          PM = this.d,
          nM = OM * iM[0] + jM * iM[1] + aM * iM[2] + PM * iM[3],
          QM = OM * iM[4] + jM * iM[5] + aM * iM[6] + PM * iM[7],
          zM = OM * iM[8] + jM * iM[9] + aM * iM[10] + PM * iM[11],
          LM = OM * iM[12] + jM * iM[13] + aM * iM[14] + PM * iM[15];
        return new SM(nM, QM, zM, LM)
      }
      dotCoordinate(MM) {
        return this.normal.x * MM.x + this.normal.y * MM.y + this.normal.z * MM.z + this.d
      }
      copyFromPoints(MM, rM, iM) {
        const OM = rM.x - MM.x,
          SM = rM.y - MM.y,
          jM = rM.z - MM.z,
          aM = iM.x - MM.x,
          PM = iM.y - MM.y,
          nM = iM.z - MM.z,
          QM = SM * nM - jM * PM,
          zM = jM * aM - OM * nM,
          LM = OM * PM - SM * aM,
          mM = Math.sqrt(QM * QM + zM * zM + LM * LM);
        let HM;
        return HM = 0 !== mM ? 1 / mM : 0, this.normal.x = QM * HM, this.normal.y = zM * HM, this.normal.z = LM * HM, this.d = -(this.normal.x * MM.x + this.normal.y * MM.y + this.normal.z * MM.z), this
      }
      isFrontFacingTo(MM, rM) {
        return OM.q.Dot(this.normal, MM) <= rM
      }
      signedDistanceTo(MM) {
        return OM.q.Dot(MM, this.normal) + this.d
      }
      static FromArray(MM) {
        return new SM(MM[0], MM[1], MM[2], MM[3])
      }
      static FromPoints(MM, rM, iM) {
        const OM = new SM(0, 0, 0, 0);
        return OM.copyFromPoints(MM, rM, iM), OM
      }
      static FromPositionAndNormal(MM, rM) {
        const iM = new SM(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(MM, rM, iM)
      }
      static FromPositionAndNormalToRef(MM, rM, iM) {
        return iM.normal.jR(rM), iM.normal.normalize(), iM.d = -MM.dot(iM.normal), iM
      }
      static SignedDistanceToPlaneFromPositionAndNormal(MM, rM, iM) {
        const SM = -(rM.x * MM.x + rM.y * MM.y + rM.z * MM.z);
        return OM.q.Dot(iM, rM) + SM
      }
    }
    SM._TmpMatrix = OM.d.Identity()
  },
  39078: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM
    });
    class OM {
      constructor(MM, rM, iM, OM) {
        this.x = MM, this.y = rM, this.width = iM, this.height = OM
      }
      toGlobal(MM, rM) {
        return new OM(this.x * MM, this.y * rM, this.width * MM, this.height * rM)
      }
      toGlobalToRef(MM, rM, iM) {
        return iM.x = this.x * MM, iM.y = this.y * rM, iM.width = this.width * MM, iM.height = this.height * rM, this
      }
      clone() {
        return new OM(this.x, this.y, this.width, this.height)
      }
    }
  },
  39705: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => jM
    });
    var OM = iM(39711);
    const SM = (MM, rM, iM) => MM ? MM.getClassName && "Mesh" === MM.getClassName() ? null : !MM.getClassName || "SubMesh" !== MM.getClassName() && "PhysicsBody" !== MM.getClassName() ? MM.clone ? MM.clone() : Array.isArray(MM) ? MM.slice() : iM && "object" === typeof MM ? {
      ...MM
    } : null : MM.clone(rM) : null;
    class jM {
      static DeepCopy(MM, rM, iM, jM) {
        let aM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const PM = function(MM) {
          const rM = [];
          do {
            const iM = Object.getOwnPropertyNames(MM);
            for (const MM of iM) - 1 === rM.indexOf(MM) && rM.push(MM)
          } while (MM = Object.getPrototypeOf(MM));
          return rM
        }(MM);
        for (const QM of PM) {
          if ("_" === QM[0] && (!jM || -1 === jM.indexOf(QM))) continue;
          if (QM.endsWith("Observable")) continue;
          if (iM && -1 !== iM.indexOf(QM)) continue;
          const PM = MM[QM],
            zM = typeof PM;
          if ("function" !== zM) try {
            if ("object" === zM)
              if (PM instanceof Uint8Array) rM[QM] = Uint8Array.from(PM);
              else if (PM instanceof Array) {
              if (rM[QM] = [], PM.length > 0)
                if ("object" == typeof PM[0])
                  for (let MM = 0; MM < PM.length; MM++) {
                    const iM = SM(PM[MM], rM, aM); - 1 === rM[QM].indexOf(iM) && rM[QM].push(iM)
                  } else rM[QM] = PM.slice(0)
            } else rM[QM] = SM(PM, rM, aM);
            else rM[QM] = PM
          } catch (nM) {
            OM.e.Warn(nM.message)
          }
        }
      }
    }
  },
  38885: (MM, rM, iM) => {
    function OM() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (MM => {
        const rM = 16 * Math.random() | 0;
        return ("x" === MM ? rM : 3 & rM | 8).toString(16)
      }))
    }
    iM.d(rM, {
      d: () => OM
    })
  },
  39711: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM
    });
    class OM {
      static _CheckLimit(MM, rM) {
        let iM = OM._LogLimitOutputs[MM];
        return iM ? iM.current++ : (iM = {
          limit: rM,
          current: 1
        }, OM._LogLimitOutputs[MM] = iM), iM.current <= iM.limit
      }
      static _GenerateLimitMessage(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const iM = OM._LogLimitOutputs[MM];
        if (!iM || !OM.MessageLimitReached) return;
        const SM = this._Levels[rM];
        iM.current === iM.limit && OM[SM.name](OM.MessageLimitReached.replace(/%LIMIT%/g, "" + iM.limit).replace(/%TYPE%/g, SM.name ?? ""))
      }
      static _AddLogEntry(MM) {
        OM._LogCache = MM + OM._LogCache, OM.OnNewCacheEntry && OM.OnNewCacheEntry(MM)
      }
      static _FormatMessage(MM) {
        const rM = MM => MM < 10 ? "0" + MM : "" + MM,
          iM = new Date;
        return "[" + rM(iM.getHours()) + ":" + rM(iM.getMinutes()) + ":" + rM(iM.getSeconds()) + "]: " + MM
      }
      static _LogDisabled(MM, rM) {}
      static _LogEnabled() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          rM = arguments.length > 1 ? arguments[1] : void 0,
          iM = arguments.length > 2 ? arguments[2] : void 0;
        const SM = Array.isArray(rM) ? rM[0] : rM;
        if (void 0 !== iM && !OM._CheckLimit(SM, iM)) return;
        const jM = OM._FormatMessage(SM),
          aM = this._Levels[MM],
          PM = Array.isArray(rM) ? rM.slice(1) : [];
        aM.logFunc && aM.logFunc("BJS - " + jM, ...PM);
        const nM = `<div style='color:${aM.color}'>${jM}</div><br>`;
        OM._AddLogEntry(nM), OM._GenerateLimitMessage(SM, MM)
      }
      static get LogCache() {
        return OM._LogCache
      }
      static ClearLogCache() {
        OM._LogCache = "", OM._LogLimitOutputs = {}, OM.errorsCount = 0
      }
      static set LogLevels(MM) {
        OM.Log = OM._LogDisabled, OM.Warn = OM._LogDisabled, OM.Error = OM._LogDisabled;
        const rM = [OM.MessageLogLevel, OM.WarningLogLevel, OM.ErrorLogLevel];
        for (const iM of rM)
          if ((MM & iM) === iM) {
            const MM = this._Levels[iM];
            OM[MM.name] = OM._LogEnabled.bind(OM, iM)
          }
      }
    }
    OM.NoneLogLevel = 0, OM.MessageLogLevel = 1, OM.WarningLogLevel = 2, OM.ErrorLogLevel = 4, OM.AllLogLevel = 7, OM.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", OM._LogCache = "", OM._LogLimitOutputs = {}, OM._Levels = [{}, {
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
    }], OM.errorsCount = 0, OM.Log = OM._LogEnabled.bind(OM, OM.MessageLogLevel), OM.Warn = OM._LogEnabled.bind(OM, OM.WarningLogLevel), OM.Error = OM._LogEnabled.bind(OM, OM.ErrorLogLevel)
  },
  63893: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      CreateScreenshot: () => ZM,
      CreateScreenshotAsync: () => oM,
      CreateScreenshotForFrameGraphAsync: () => AM,
      CreateScreenshotUsingRenderTarget: () => YM,
      CreateScreenshotUsingRenderTargetAsync: () => NM,
      CreateScreenshotWithResizeAsync: () => fM,
      RegisterScreenshotTools: () => BM,
      ScreenshotTools: () => vM
    });
    var OM = iM(41560),
      SM = iM(44465),
      jM = iM(44439),
      aM = iM(41121),
      PM = iM(44445),
      nM = iM(38064),
      QM = iM(38040);
    class zM extends PM.c {
      static _GetDefines(MM) {
        if (!MM) return null;
        return MM.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
      }
      _gatherImports(MM, rM) {
        MM ? (this._webGPUReady = !0, rM.push(Promise.all([iM.e(683).then((() => iM(64144))), iM.e(684).then((() => iM(64151)))]))) : rM.push(Promise.all([iM.e(685).then((() => iM(64153))), iM.e(686).then((() => iM(64161)))]))
      }
      constructor(MM) {
        const rM = {
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: MM,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || nM.c.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          vertexShader: zM.VertexUrl,
          fragmentShader: zM.FragmentUrl,
          uniforms: zM.Uniforms
        };
        super({
          ...rM,
          defines: zM._GetDefines(rM.engine)
        }), this.texelSize = new QM.o(0, 0)
      }
      bind() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.bind(MM), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
      }
    }
    zM.VertexUrl = "fxaa", zM.FragmentUrl = "fxaa", zM.Uniforms = ["texelSize"];
    class LM extends jM.b {
      getClassName() {
        return "FxaaPostProcess"
      }
      constructor(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          SM = arguments.length > 3 ? arguments[3] : void 0,
          jM = arguments.length > 4 ? arguments[4] : void 0,
          aM = arguments.length > 5 ? arguments[5] : void 0,
          PM = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const nM = {
          uniforms: zM.Uniforms,
          size: "number" === typeof rM ? rM : void 0,
          camera: iM,
          samplingMode: SM || OM.h.BILINEAR_SAMPLINGMODE,
          engine: jM,
          reusable: aM,
          textureType: PM,
          ...rM
        };
        super(MM, zM.FragmentUrl, {
          effectWrapper: "number" !== typeof rM && rM.effectWrapper ? void 0 : new zM(MM, jM, nM),
          ...nM
        }), this.onApplyObservable.add((MM => {
          this._effectWrapper.texelSize = this.texelSize
        }))
      }
      static _Parse(MM, rM, iM, OM) {
        return aM.b.Parse((() => new LM(MM.name, MM.options, rM, MM.renderTargetSamplingMode, iM.ph(), MM.reusable)), MM, iM, OM)
      }
    }
    var mM = iM(39711),
      HM = iM(41205),
      hM = iM(44478),
      JM = iM(44458),
      dM = iM(41003);
    const yM = 0;
    class lM {
      constructor(MM, rM, iM) {
        this.name = MM, this._parentTask = rM, this._context = iM, this.disabled = !1
      }
      setInitializeFunc(MM) {
        this._initFunc = MM
      }
      setExecuteFunc(MM) {
        this._executeFunc = MM
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
    class EM extends lM {
      static IsObjectListPass(MM) {
        return void 0 !== MM.setObjectList
      }
      get objectList() {
        return this._objectList
      }
      setObjectList(MM) {
        this._objectList = MM
      }
      constructor(MM, rM, iM, OM) {
        super(MM, rM, iM), this._engine = OM
      }
      _isValid() {
        const MM = super._isValid();
        return MM || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
      }
    }
    class UM extends lM {
      static IsRenderPass(MM) {
        return void 0 !== MM.setRenderTarget
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
      constructor(MM, rM, iM, OM) {
        super(MM, rM, iM), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = OM
      }
      setRenderTarget(MM) {
        this._renderTarget = MM
      }
      setRenderTargetDepth(MM) {
        this._renderTargetDepth = MM
      }
      addDependencies(MM) {
        if (void 0 !== MM)
          if (Array.isArray(MM))
            for (const rM of MM) this._dependencies.add(rM);
          else this._dependencies.add(MM)
      }
      collectDependencies(MM) {
        const rM = this._dependencies.keys();
        for (let iM = rM.next(); !0 !== iM.done; iM = rM.next()) MM.add(iM.value);
        if (void 0 !== this._renderTarget)
          if (Array.isArray(this._renderTarget))
            for (const iM of this._renderTarget) void 0 !== iM && MM.add(iM);
          else MM.add(this._renderTarget);
        void 0 !== this._renderTargetDepth && MM.add(this._renderTargetDepth)
      }
      setOutputLayerAndFaceIndices(MM) {
        const rM = this.frameGraphRenderTarget.renderTargetWrapper;
        if (rM)
          for (const iM of MM) rM.setLayerAndFaceIndex(iM.targetIndex, iM.layerIndex, iM.faceIndex)
      }
      _initialize() {
        this._frameGraphRenderTarget = this._context.createRenderTarget(this.name, this._renderTarget, this._renderTargetDepth, this.depthReadOnly, this.stencilReadOnly), super._initialize()
      }
      _execute() {
        this._context.bindRenderTarget(this._frameGraphRenderTarget), super._execute(), this._context.restoreDefaultFramebuffer()
      }
      _isValid() {
        const MM = super._isValid();
        return MM || (void 0 !== this._renderTarget || void 0 !== this.renderTargetDepth ? null : "Render target and render target depth cannot both be undefined.")
      }
      _dispose() {
        this._frameGraphRenderTarget?.dispose()
      }
    }
    var GM = iM(38068);
    class CM {
      get name() {
        return this._name
      }
      set name(MM) {
        this._name = MM
      }
      get disabled() {
        return this._disabled
      }
      set disabled(MM) {
        this._disabled = MM
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
      constructor(MM, rM) {
        this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new GM.d, this.onBeforeTaskExecute = new GM.d, this.onAfterTaskExecute = new GM.d, this.name = MM, this._frameGraph = rM, this._reset()
      }
      _reset() {
        for (const MM of this._passes) MM._dispose();
        for (const MM of this._passesDisabled) MM._dispose();
        this._passes.length = 0, this._passesDisabled.length = 0
      }
      _addPass(MM, rM) {
        rM ? this._passesDisabled.push(MM) : this._passes.push(MM)
      }
      _checkTask() {
        let MM, rM = null,
          iM = null;
        for (const PM of this._passes) {
          const OM = PM._isValid();
          if (OM) throw new Error(`Pass "${PM.name}" is not valid. ${OM}`);
          if (UM.IsRenderPass(PM)) {
            const MM = Array.isArray(PM.renderTarget) ? PM.renderTarget : [PM.renderTarget];
            rM = [];
            for (const iM of MM) void 0 !== iM && rM.push(this._frameGraph.textureManager.getTextureFromHandle(iM));
            iM = void 0 !== PM.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(PM.renderTargetDepth) : null
          } else EM.IsObjectListPass(PM) && (MM = PM.objectList)
        }
        let OM, SM = null,
          jM = [],
          aM = null;
        for (const PM of this._passesDisabled) {
          const MM = PM._isValid();
          if (MM) throw new Error(`Pass "${PM.name}" is not valid. ${MM}`);
          if (UM.IsRenderPass(PM)) {
            const MM = Array.isArray(PM.renderTarget) ? PM.renderTarget : [PM.renderTarget];
            SM = [];
            for (const rM of MM) void 0 !== rM && SM.push(this._frameGraph.textureManager.getTextureFromHandle(rM));
            jM = MM, aM = void 0 !== PM.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(PM.renderTargetDepth) : null
          } else EM.IsObjectListPass(PM) && (OM = PM.objectList)
        }
        if (this._passesDisabled.length > 0) {
          if (!this._checkSameRenderTarget(rM, SM)) {
            let MM = !0;
            for (const rM of jM)
              if (void 0 !== rM && !this._frameGraph.textureManager.isHistoryTexture(rM)) {
                MM = !1;
                break
              } if (!MM) throw new Error(`The output texture of the task "${this.name}" is different when it is enabled or disabled.`)
          }
          if (iM !== aM && null !== aM) throw new Error(`The output depth texture of the task "${this.name}" is different when it is enabled or disabled.`);
          if (MM !== OM && null !== OM) throw new Error(`The output object list of the task "${this.name}" is different when it is enabled or disabled.`)
        }
      }
      _execute() {
        const MM = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
        this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const rM of MM) rM._execute()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
        this.onAfterTaskExecute.notifyObservers(this)
      }
      _initializePasses() {
        this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const MM of this._passes) MM._initialize();
          for (const MM of this._passesDisabled) MM._initialize()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
      }
      _checkSameRenderTarget(MM, rM) {
        if (null === MM || null === rM) return MM === rM;
        if (MM.length !== rM.length) return !1;
        for (let iM = 0; iM < MM.length; iM++)
          if (MM[iM] !== rM[iM]) return !1;
        return !0
      }
    }
    class eM extends CM {
      get alphaMode() {
        return this.postProcess.alphaMode
      }
      set alphaMode(MM) {
        this.postProcess.alphaMode = MM
      }
      get drawWrapper() {
        return this._postProcessDrawWrapper
      }
      constructor(MM, rM, iM) {
        super(MM, rM), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = iM, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture = this._frameGraph.textureManager.createDanglingHandle(), this.outputDepthAttachmentTexture = this._frameGraph.textureManager.createDanglingHandle()
      }
      isReady() {
        return this.postProcess.isReady()
      }
      getClassName() {
        return "FrameGraphPostProcessTask"
      }
      record() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          rM = arguments.length > 1 ? arguments[1] : void 0,
          iM = arguments.length > 2 ? arguments[2] : void 0;
        if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
        const OM = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
        if (OM && (OM.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, OM), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentTexture, this.depthAttachmentTexture), OM) {
          const MM = this._frameGraph.textureManager.getTextureAbsoluteDimensions(OM);
          this._sourceWidth = MM.width, this._sourceHeight = MM.height
        }
        const SM = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
        this._outputWidth = SM.size.width, this._outputHeight = SM.size.height;
        const jM = this._frameGraph.addRenderPass(this.name);
        if (jM.depthReadOnly = this.depthReadOnly, jM.stencilReadOnly = this.stencilReadOnly, jM.addDependencies(this.sourceTexture), jM.setRenderTarget(this.outputTexture), jM.setRenderTargetDepth(this.depthAttachmentTexture), jM.setExecuteFunc((MM => {
            MM.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && MM.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), rM?.(MM), this.viewport && MM.setViewport(this.viewport), MM.applyFullScreenEffect(this._postProcessDrawWrapper, (() => {
              void 0 !== this.sourceTexture && MM.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), iM?.(MM), this.postProcess.bind()
            }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), MM.restoreDefaultFramebuffer(), MM.popDebugGroup()
          })), !MM) {
          const MM = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
          MM.depthReadOnly = this.depthReadOnly, MM.stencilReadOnly = this.stencilReadOnly, MM.addDependencies(this.sourceTexture), MM.setRenderTarget(this.outputTexture), MM.setRenderTargetDepth(this.depthAttachmentTexture), MM.setExecuteFunc((MM => {
            void 0 !== this.sourceTexture && 0 === this.alphaMode && (this.viewport && MM.setViewport(this.viewport), MM.copyTexture(this.sourceTexture, void 0, void 0 !== this.viewport))
          }))
        }
        return jM
      }
      dispose() {
        this.postProcess.dispose(), super.dispose()
      }
    }
    class bM extends eM {
      constructor(MM, rM, iM) {
        super(MM, rM, iM || new zM(MM, rM.engine))
      }
      getClassName() {
        return "FrameGraphFXAATask"
      }
      record() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          rM = arguments.length > 1 ? arguments[1] : void 0,
          iM = arguments.length > 2 ? arguments[2] : void 0;
        const OM = super.record(MM, rM, iM);
        return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, OM
      }
    }
    var wM = iM(44469);
    class tM extends eM {
      constructor(MM, rM, iM) {
        super(MM, rM, iM || new wM.f(MM, rM.engine))
      }
      getClassName() {
        return "FrameGraphPassTask"
      }
    }
    var gM = iM(41196),
      uM = iM(41283),
      RM = iM(41242),
      pM = iM(41362),
      WM = iM(38173);
    class sM {
      getRenderCamera(MM) {
        if (this._renderCamera) return this._renderCamera;
        {
          let rM;
          return rM = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, MM && rM && rM.isRigCamera ? rM.rigParent : rM
        }
      }
      setRenderCamera(MM) {
        this._renderCamera = MM
      }
      _getSharedGizmoLight() {
        return this._sharedGizmoLight || (this._sharedGizmoLight = new pM.d("shared gizmo light", new QM.q(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = WM.d.Gray()), this._sharedGizmoLight
      }
      static get DefaultUtilityLayer() {
        return null == sM._DefaultUtilityLayer ? sM._CreateDefaultUtilityLayerFromScene(nM.c.LastCreatedScene) : sM._DefaultUtilityLayer
      }
      static _CreateDefaultUtilityLayerFromScene(MM) {
        return sM._DefaultUtilityLayer = new sM(MM), sM._DefaultUtilityLayer.originalScene.Rk.addOnce((() => {
          sM._DefaultUtilityLayer = null
        })), sM._DefaultUtilityLayer
      }
      static get DefaultKeepDepthUtilityLayer() {
        return null == sM._DefaultKeepDepthUtilityLayer ? sM._CreateDefaultKeepUtilityLayerFromScene(nM.c.LastCreatedScene) : sM._DefaultKeepDepthUtilityLayer
      }
      static _CreateDefaultKeepUtilityLayerFromScene(MM) {
        return sM._DefaultKeepDepthUtilityLayer = new sM(MM), sM._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, sM._DefaultKeepDepthUtilityLayer.originalScene.Rk.addOnce((() => {
          sM._DefaultKeepDepthUtilityLayer = null
        })), sM._DefaultKeepDepthUtilityLayer
      }
      constructor(MM) {
        let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.originalScene = MM, this.handleEvents = rM, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.processAllEvents = !1, this.pickingEnabled = !0, this.onPointerOutObservable = new GM.d, this.utilityLayerScene = new gM.d(MM.ph(), {
          virtual: !0,
          useFloatingOrigin: MM.floatingOriginMode
        }), this.utilityLayerScene.useRightHandedSystem = MM.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), rM && (this._originalPointerObserver = MM.onPrePointerObservable.add((rM => {
          if (!this.utilityLayerScene.activeCamera) return;
          if (!this.pickingEnabled) return;
          if (!this.processAllEvents && rM.type !== uM.d.POINTERMOVE && rM.type !== uM.d.POINTERUP && rM.type !== uM.d.POINTERDOWN && rM.type !== uM.d.POINTERDOUBLETAP) return;
          this.utilityLayerScene.pointerX = MM.pointerX, this.utilityLayerScene.pointerY = MM.pointerY;
          const iM = rM.event;
          if (MM.isPointerCaptured(iM.pointerId)) return void(this._pointerCaptures[iM.pointerId] = !1);
          const OM = iM => {
              let OM;
              if (rM.nearInteractionPickingInfo) OM = rM.nearInteractionPickingInfo.pickedMesh.Hk() == iM ? rM.nearInteractionPickingInfo : new RM.c;
              else if (iM !== this.utilityLayerScene && rM.originalPickingInfo) OM = rM.originalPickingInfo;
              else {
                let SM = null;
                this._renderCamera && (SM = iM._activeCamera, iM._activeCamera = this._renderCamera, rM.ray = null), OM = rM.ray ? iM.pickWithRay(rM.ray) : iM.LH(MM.pointerX, MM.pointerY), SM && (iM._activeCamera = SM)
              }
              return OM
            },
            SM = OM(this.utilityLayerScene);
          if (!rM.ray && SM && (rM.ray = SM.ray), rM.originalPickingInfo?.aimTransform && SM && (SM.aimTransform = rM.originalPickingInfo.aimTransform, SM.gripTransform = rM.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(rM), this.onlyCheckPointerDownEvents && rM.type != uM.d.POINTERDOWN) return rM.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new uM.j(rM.type, rM.event, SM), rM.type), void(rM.type === uM.d.POINTERUP && this._pointerCaptures[iM.pointerId] && (this._pointerCaptures[iM.pointerId] = !1));
          if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) SM && SM.hit && (rM.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new uM.j(rM.type, rM.event, SM), rM.type), rM.skipOnPointerObservable = !0);
          else {
            const iM = OM(MM),
              jM = rM.event;
            iM && SM && (0 === SM.distance && iM.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(iM.pickedMesh) ? (this._notifyObservers(rM, iM, jM), rM.skipOnPointerObservable = !0) : rM.type === uM.d.POINTERDOWN ? (this._pointerCaptures[jM.pointerId] = !0, this._notifyObservers(rM, iM, jM)) : rM.type !== uM.d.POINTERMOVE && rM.type !== uM.d.POINTERUP || (this._lastPointerEvents[jM.pointerId] && (this.onPointerOutObservable.notifyObservers(jM.pointerId), delete this._lastPointerEvents[jM.pointerId]), this._notifyObservers(rM, iM, jM)) : !this._pointerCaptures[jM.pointerId] && (SM.distance < iM.distance || 0 === iM.distance) ? (this._notifyObservers(rM, SM, jM), rM.skipOnPointerObservable || (rM.skipOnPointerObservable = SM.distance > 0)) : !this._pointerCaptures[jM.pointerId] && SM.distance >= iM.distance && (this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(iM.pickedMesh) ? (this._notifyObservers(rM, iM, jM), rM.skipOnPointerObservable = !0) : (rM.type !== uM.d.POINTERMOVE && rM.type !== uM.d.POINTERUP || this._lastPointerEvents[jM.pointerId] && (this.onPointerOutObservable.notifyObservers(jM.pointerId), delete this._lastPointerEvents[jM.pointerId]), this._notifyObservers(rM, SM, jM))), rM.type === uM.d.POINTERUP && this._pointerCaptures[jM.pointerId] && (this._pointerCaptures[jM.pointerId] = !1))
          }
        })), this._originalPointerObserver && MM.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, iM || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((MM => {
          this.shouldRender && MM == this.getRenderCamera() && this.render()
        }))), this._sceneDisposeObserver = this.originalScene.Rk.add((() => {
          this.dispose()
        })), this._updateCamera()
      }
      _notifyObservers(MM, rM, iM) {
        MM.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new uM.j(MM.type, MM.event, rM), MM.type), this._lastPointerEvents[iM.pointerId] = !0)
      }
      render() {
        if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
          const MM = this.utilityLayerScene.activeCamera.Hk(),
            rM = this.utilityLayerScene.activeCamera;
          rM._scene = this.utilityLayerScene, rM.leftCamera && (rM.leftCamera._scene = this.utilityLayerScene), rM.rightCamera && (rM.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), rM._scene = MM, rM.leftCamera && (rM.leftCamera._scene = MM), rM.rightCamera && (rM.rightCamera._scene = MM)
        }
      }
      dispose() {
        this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.Rk.remove(this._sceneDisposeObserver), this._originalPointerObserver && this.originalScene.onPrePointerObservable.remove(this._originalPointerObserver), this.utilityLayerScene.dispose()
      }
      _updateCamera() {
        this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
      }
    }
    sM._DefaultUtilityLayer = null, sM._DefaultKeepDepthUtilityLayer = null;
    const DM = {
      FindMainCamera: function(MM) {
        return MM.findMainCamera()
      },
      FindMainObjectRenderer: function(MM) {
        return MM.findMainObjectRenderer()
      },
      CreateUtilityLayerRenderer: function(MM) {
        let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const iM = MM.YJ,
          OM = new sM(iM, rM, !0);
        OM.utilityLayerScene.activeCamera = iM.activeCamera;
        let SM = DM.FindMainCamera(iM.frameGraph);
        !SM && iM.cameras.length > 0 && (SM = iM.cameras[0]), SM && (OM.setRenderCamera(SM), OM.utilityLayerScene.activeCamera = SM);
        const jM = iM.onAfterRenderObservable.add((() => {
          OM.render()
        }));
        return OM.utilityLayerScene.Rk.addOnce((() => {
          iM.onAfterRenderObservable.remove(jM)
        })), OM
      }
    };
    let kM = null;

    function ZM(MM, rM, iM, OM) {
      let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        jM = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        aM = arguments.length > 6 ? arguments[6] : void 0,
        PM = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        nM = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
      const {
        height: QM,
        width: zM
      } = xM(MM, rM, iM);
      if (!QM || !zM) return void mM.e.Error("Invalid 'size' parameter !");
      const LM = rM.Hk();
      let hM = LM.activeCamera !== rM;
      if (LM.frameGraph) {
        const MM = DM.FindMainObjectRenderer(LM.frameGraph);
        MM && (hM = MM.camera !== rM)
      }
      hM ? YM(MM, rM, iM, (MM => {
        if (jM) {
          const rM = new Blob([MM]);
          HM.e.DownloadBlob(rM), OM && OM("")
        } else OM && OM(MM)
      }), SM, 1, MM.getCreationOptions().antialias, void 0, void 0, void 0, void 0, aM) : MM.onEndFrameObservable.addOnce((() => {
        kM || (kM = document.createElement("canvas")), kM.width = zM, kM.height = QM;
        const rM = kM.getContext("2d"),
          iM = MM.getRenderingCanvas();
        if (!rM || !iM) return void mM.e.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
        const hM = iM.width,
          JM = iM.height,
          dM = kM.width,
          yM = kM.height,
          lM = dM / hM,
          EM = yM / JM,
          UM = PM ? Math.max(lM, EM) : Math.min(lM, EM),
          GM = hM * UM,
          CM = JM * UM,
          eM = (dM - GM) / 2,
          bM = (yM - CM) / 2;
        rM.save(), rM.fillStyle = nM ? LM.clearColor.toHexString() : "rgba(0, 0, 0, 0)", rM.fillRect(0, 0, zM, QM), rM.restore(), rM.drawImage(iM, 0, 0, hM, JM, eM, bM, GM, CM), jM ? (HM.e.EncodeScreenshotCanvasData(kM, void 0, SM, void 0, aM), OM && OM("")) : HM.e.EncodeScreenshotCanvasData(kM, OM, SM, void 0, aM)
      }))
    }
    async function oM(MM, rM, iM) {
      let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        SM = arguments.length > 4 ? arguments[4] : void 0,
        jM = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        aM = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        PM = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      return await new Promise(((nM, QM) => {
        ZM(MM, rM, iM, (MM => {
          "undefined" !== typeof MM ? nM(MM) : QM(new Error("Data is undefined"))
        }), OM, PM, SM, jM, aM)
      }))
    }
    async function fM(MM, rM, iM, OM) {
      let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        jM = arguments.length > 5 ? arguments[5] : void 0,
        aM = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return await new Promise((PM => {
        ZM(MM, rM, {
          width: iM,
          height: OM
        }, (() => {
          PM()
        }), SM, !0, jM, aM)
      }))
    }

    function YM(MM, rM, jM, aM) {
      let PM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        nM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
        QM = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        zM = arguments.length > 7 ? arguments[7] : void 0,
        HM = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        yM = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        lM = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
        EM = arguments.length > 11 ? arguments[11] : void 0,
        UM = arguments.length > 12 ? arguments[12] : void 0,
        GM = arguments.length > 13 ? arguments[13] : void 0,
        CM = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
        eM = arguments.length > 15 ? arguments[15] : void 0;
      const bM = rM.Hk();
      if (bM.frameGraph) return void AM(bM.frameGraph, rM, jM, PM, nM, QM, zM, EM, GM, !aM).then((MM => {
        aM && aM(MM)
      }));
      const {
        height: wM,
        width: tM,
        finalWidth: gM,
        finalHeight: uM
      } = xM(MM, rM, jM), RM = {
        width: tM,
        height: wM
      };
      if (!wM || !tM) return void mM.e.Error("Invalid 'size' parameter !");
      MM.skipFrameRender = !0;
      const pM = MM.getRenderWidth,
        WM = MM.getRenderHeight;
      MM.getRenderWidth = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && MM._currentRenderTarget ? MM._currentRenderTarget.width : tM
      }, MM.getRenderHeight = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && MM._currentRenderTarget ? MM._currentRenderTarget.height : wM
      }, MM.onResizeObservable.hasObservers() && MM.onResizeObservable.notifyObservers(MM);
      const sM = new SM.c("screenShot", RM, bM, !1, !1, 0, !1, OM.h.BILINEAR_SAMPLINGMODE, void 0, yM, void 0, void 0, void 0, nM);
      sM.renderList = bM.meshes.slice(), sM.samples = nM, sM.renderSprites = HM, sM.activeCamera = rM, sM.forceLayerMaskCheck = lM, UM?.(sM);
      const DM = GM || hM.DumpData,
        kM = () => {
          bM.incrementRenderId(), bM.resetCachedMaterial(), (0, dM.d)((() => sM.isReadyForRendering() && rM.isReady(!0)), (() => {
            MM.onEndFrameObservable.addOnce((() => {
              gM === tM && uM === wM ? sM.readPixels(void 0, void 0, void 0, !1).then((MM => {
                DM(tM, wM, MM, aM, PM, zM, !0, void 0, EM), sM.dispose()
              })) : (MM.isWebGPU ? iM.e(679).then((() => iM(64081))) : iM.e(680).then((() => iM(64089)))).then((async () => await (0, JM.d)("pass", sM.getInternalTexture(), bM, void 0, void 0, void 0, gM, uM).then((rM => {
                MM._readTexturePixels(rM, gM, uM, -1, 0, null, !0, !1, 0, 0).then((MM => {
                  DM(gM, uM, MM, aM, PM, zM, !0, void 0, EM), rM.dispose()
                }))
              }))))
            })), bM.incrementRenderId(), bM.resetCachedMaterial();
            const OM = bM.activeCamera,
              SM = bM.activeCameras,
              jM = rM.outputRenderTarget,
              nM = bM.spritesEnabled;
            bM.activeCamera = rM, bM.activeCameras = null, rM.outputRenderTarget = sM, bM.spritesEnabled = HM;
            const QM = bM.meshes;
            bM.meshes = sM.renderList || bM.meshes;
            try {
              bM.render()
            } finally {
              bM.activeCamera = OM, bM.activeCameras = SM, rM.outputRenderTarget = jM, bM.spritesEnabled = nM, bM.meshes = QM, MM.getRenderWidth = pM, MM.getRenderHeight = WM, MM.onResizeObservable.hasObservers() && MM.onResizeObservable.notifyObservers(MM), rM.getProjectionMatrix(!0), MM.skipFrameRender = !1
            }
          }), (() => {
            MM.skipFrameRender = !1, MM.getRenderWidth = pM, MM.getRenderHeight = WM, eM?.()
          }), void 0, CM)
        };
      if (QM) {
        const MM = new LM("antialiasing", 1, bM.activeCamera);
        sM.addPostProcess(MM), MM.autoClear = !0, MM.onEffectCreatedObservable.addOnce((MM => {
          MM.isReady() ? kM() : MM.onCompiled = () => {
            kM()
          }
        }))
      } else kM()
    }
    async function NM(MM, rM, iM) {
      let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        jM = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        aM = arguments.length > 6 ? arguments[6] : void 0,
        PM = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        nM = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        QM = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
        zM = arguments.length > 10 ? arguments[10] : void 0,
        LM = arguments.length > 11 ? arguments[11] : void 0,
        mM = arguments.length > 12 ? arguments[12] : void 0;
      return await new Promise(((HM, hM) => {
        YM(MM, rM, iM, (MM => {
          "undefined" !== typeof MM ? HM(MM) : hM(new Error("Data is undefined"))
        }), OM, SM, jM, aM, PM, nM, QM, zM, LM, mM)
      }))
    }
    async function AM(MM, rM, iM) {
      let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        jM = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        aM = arguments.length > 6 ? arguments[6] : void 0,
        PM = arguments.length > 7 ? arguments[7] : void 0,
        nM = arguments.length > 8 ? arguments[8] : void 0,
        QM = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        zM = arguments.length > 10 ? arguments[10] : void 0;
      const LM = MM.engine,
        mM = MM.textureManager,
        {
          height: HM,
          width: JM,
          finalWidth: dM,
          finalHeight: lM
        } = xM(LM, rM, iM),
        EM = {
          width: JM,
          height: HM
        },
        UM = nM || hM.DumpData,
        GM = MM.tasks,
        CM = GM.length,
        eM = MM.pausedExecution,
        wM = LM.getCaps().parallelShaderCompile;
      mM.setBackBufferTextures(0, 0, {
        size: EM,
        options: {
          createMipMaps: !1,
          samples: SM,
          types: [0],
          formats: [5],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot color"]
        },
        sizeIsPercentage: !1
      }, {
        size: EM,
        options: {
          createMipMaps: !1,
          samples: SM,
          types: [0],
          formats: [LM.isStencilEnable ? 13 : 14],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot depth"]
        },
        sizeIsPercentage: !1
      });
      let gM = yM;
      if (jM) {
        const rM = new bM("fxaa", MM);
        rM.sourceTexture = gM, gM = rM.outputTexture, MM.addTask(rM)
      }
      if (dM !== JM || lM !== HM) {
        const rM = new tM("pass", MM);
        rM.sourceTexture = gM, rM.targetTexture = MM.textureManager.createRenderTargetTexture("pass_output", {
          size: {
            width: dM,
            height: lM
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
        }), gM = rM.outputTexture, MM.addTask(rM)
      }
      const uM = DM.FindMainObjectRenderer(MM);
      let RM = null;
      uM && (RM = uM.camera, uM.camera = rM), LM.getCaps().parallelShaderCompile = void 0, await MM.buildAsync();
      const pM = zM ?? (mM.hasHistoryTextures ? 32 : 1);
      for (let hM = 0; hM < pM; ++hM) MM.execute();
      MM.pausedExecution = !0, LM.getCaps().parallelShaderCompile = wM;
      for (let hM = CM; hM < GM.length; ++hM) MM.tasks[hM].dispose();
      MM.tasks.length = CM, uM && RM && (uM.camera = RM);
      const WM = MM.textureManager.getTextureFromHandle(gM);
      return WM.incrementReferences(), mM.resetBackBufferTextures(), await MM.buildAsync(), MM.pausedExecution = eM, new Promise((MM => {
        LM._readTexturePixels(WM, dM, lM, -1, 0, null, !0, !1, 0, 0).then((async rM => {
          WM.dispose(), UM(dM, lM, rM, QM ? void 0 : rM => MM(rM), OM, aM, !0, void 0, PM), QM && MM(null)
        }))
      }))
    }

    function xM(MM, rM, iM) {
      let OM = 0,
        SM = 0,
        jM = 0,
        aM = 0;
      if ("object" === typeof iM) {
        const PM = iM.precision ? Math.abs(iM.precision) : 1;
        iM.width && iM.height ? (OM = iM.height * PM, SM = iM.width * PM) : iM.width && !iM.height ? (SM = iM.width * PM, OM = Math.round(SM / MM.getAspectRatio(rM))) : iM.height && !iM.width ? (OM = iM.height * PM, SM = Math.round(OM * MM.getAspectRatio(rM))) : (SM = Math.round(MM.getRenderWidth() * PM), OM = Math.round(SM / MM.getAspectRatio(rM))), iM.finalWidth && iM.finalHeight ? (aM = iM.finalHeight, jM = iM.finalWidth) : iM.finalWidth && !iM.finalHeight ? (jM = iM.finalWidth, aM = Math.round(jM / MM.getAspectRatio(rM))) : iM.finalHeight && !iM.finalWidth ? (aM = iM.finalHeight, jM = Math.round(aM * MM.getAspectRatio(rM))) : (jM = SM, aM = OM)
      } else isNaN(iM) || (OM = iM, SM = iM, jM = iM, aM = iM);
      return SM && (SM = Math.floor(SM)), OM && (OM = Math.floor(OM)), jM && (jM = Math.floor(jM)), aM && (aM = Math.floor(aM)), {
        height: 0 | OM,
        width: 0 | SM,
        finalWidth: 0 | jM,
        finalHeight: 0 | aM
      }
    }
    const vM = {
      CreateScreenshot: ZM,
      CreateScreenshotAsync: oM,
      CreateScreenshotWithResizeAsync: fM,
      CreateScreenshotUsingRenderTarget: YM,
      CreateScreenshotUsingRenderTargetAsync: NM,
      CreateScreenshotForFrameGraphAsync: AM
    };
    let FM = !1;

    function BM() {
      if (FM) return;
      FM = !0;
      HM.e.CreateScreenshot = ZM, HM.e.CreateScreenshotAsync = oM, HM.e.CreateScreenshotUsingRenderTarget = YM, HM.e.CreateScreenshotUsingRenderTargetAsync = NM
    }
    BM()
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);