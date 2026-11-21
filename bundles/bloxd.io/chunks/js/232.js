export const id = 232;
export const ids = [232, 233];
export const modules = {
  39686: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => uQ,
      e: () => bQ
    });
    var LQ = wQ(39402),
      qQ = wQ(39409),
      oQ = wQ(36696),
      DQ = wQ(36873),
      kQ = wQ(39690),
      vQ = wQ(39650),
      mQ = wQ(36741);
    let uQ = (() => {
        var QQ;
        let FQ, wQ, vQ = kQ.c,
          mQ = [],
          uQ = [],
          HQ = [],
          bQ = [];
        return QQ = class extends vQ {
          constructor(QQ, FQ, wQ, qQ) {
            super(QQ, wQ, qQ), this.groundColor = (0, LQ.l)(this, mQ, new DQ.b(0, 0, 0)), this.direction = ((0, LQ.l)(this, uQ), (0, LQ.l)(this, HQ, void 0)), (0, LQ.l)(this, bQ), this.direction = FQ || oQ.p.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(QQ) {
            return this.direction = oQ.p.Normalize(QQ.subtract(oQ.p.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(QQ, FQ) {
            const wQ = oQ.p.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", wQ.x, wQ.y, wQ.z, 0, FQ), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), FQ), this
          }
          transferToNodeMaterialEffect(QQ, FQ) {
            const wQ = oQ.p.Normalize(this.direction);
            return QQ.setFloat3(FQ, wQ.x, wQ.y, wQ.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = oQ.c.Identity()), this._worldMatrix
          }
          getTypeID() {
            return kQ.c.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(QQ, FQ) {
            QQ["HEMILIGHT" + FQ] = !0
          }
        }, (() => {
          const oQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(vQ[Symbol.metadata] ?? null) : void 0;
          FQ = [(0, qQ.m)()], wQ = [(0, qQ.F)()], (0, LQ.i)(null, null, FQ, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: QQ => "groundColor" in QQ,
              get: QQ => QQ.groundColor,
              set: (QQ, FQ) => {
                QQ.groundColor = FQ
              }
            },
            metadata: oQ
          }, mQ, uQ), (0, LQ.i)(null, null, wQ, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: QQ => "direction" in QQ,
              get: QQ => QQ.direction,
              set: (QQ, FQ) => {
                QQ.direction = FQ
              }
            },
            metadata: oQ
          }, HQ, bQ), oQ && Object.defineProperty(QQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: oQ
          })
        })(), QQ
      })(),
      HQ = !1;

    function bQ() {
      HQ || (HQ = !0, vQ.c.AddNodeConstructor("Light_Type_3", ((QQ, FQ) => () => new uQ(QQ, oQ.p.Zero(), FQ))), (0, mQ.e)("BABYLON.HemisphericLight", uQ))
    }
  },
  37320: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => qQ
    });
    var LQ = wQ(37324);
    class qQ {
      static GetPlanes(QQ) {
        const FQ = [];
        for (let wQ = 0; wQ < 6; wQ++) FQ.push(new LQ.d(0, 0, 0, 0));
        return qQ.GetPlanesToRef(QQ, FQ), FQ
      }
      static GetNearPlaneToRef(QQ, FQ) {
        const wQ = QQ.m;
        FQ.normal.x = wQ[3] + wQ[2], FQ.normal.y = wQ[7] + wQ[6], FQ.normal.z = wQ[11] + wQ[10], FQ.d = wQ[15] + wQ[14], FQ.normalize()
      }
      static GetFarPlaneToRef(QQ, FQ) {
        const wQ = QQ.m;
        FQ.normal.x = wQ[3] - wQ[2], FQ.normal.y = wQ[7] - wQ[6], FQ.normal.z = wQ[11] - wQ[10], FQ.d = wQ[15] - wQ[14], FQ.normalize()
      }
      static GetLeftPlaneToRef(QQ, FQ) {
        const wQ = QQ.m;
        FQ.normal.x = wQ[3] + wQ[0], FQ.normal.y = wQ[7] + wQ[4], FQ.normal.z = wQ[11] + wQ[8], FQ.d = wQ[15] + wQ[12], FQ.normalize()
      }
      static GetRightPlaneToRef(QQ, FQ) {
        const wQ = QQ.m;
        FQ.normal.x = wQ[3] - wQ[0], FQ.normal.y = wQ[7] - wQ[4], FQ.normal.z = wQ[11] - wQ[8], FQ.d = wQ[15] - wQ[12], FQ.normalize()
      }
      static GetTopPlaneToRef(QQ, FQ) {
        const wQ = QQ.m;
        FQ.normal.x = wQ[3] - wQ[1], FQ.normal.y = wQ[7] - wQ[5], FQ.normal.z = wQ[11] - wQ[9], FQ.d = wQ[15] - wQ[13], FQ.normalize()
      }
      static GetBottomPlaneToRef(QQ, FQ) {
        const wQ = QQ.m;
        FQ.normal.x = wQ[3] + wQ[1], FQ.normal.y = wQ[7] + wQ[5], FQ.normal.z = wQ[11] + wQ[9], FQ.d = wQ[15] + wQ[13], FQ.normalize()
      }
      static GetPlanesToRef(QQ, FQ) {
        qQ.GetNearPlaneToRef(QQ, FQ[0]), qQ.GetFarPlaneToRef(QQ, FQ[1]), qQ.GetLeftPlaneToRef(QQ, FQ[2]), qQ.GetRightPlaneToRef(QQ, FQ[3]), qQ.GetTopPlaneToRef(QQ, FQ[4]), qQ.GetBottomPlaneToRef(QQ, FQ[5])
      }
      static IsPointInFrustum(QQ, FQ) {
        for (let wQ = 0; wQ < 6; wQ++)
          if (FQ[wQ].dotCoordinate(QQ) < 0) return !1;
        return !0
      }
    }
  },
  37324: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => qQ
    });
    var LQ = wQ(36696);
    class qQ {
      constructor(QQ, FQ, wQ, qQ) {
        this.normal = new LQ.p(QQ, FQ, wQ), this.d = qQ
      }
      RLQ() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new qQ(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let QQ = this.normal.getHashCode();
        return QQ = 397 * QQ ^ this.d, QQ
      }
      normalize() {
        const QQ = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let FQ = 0;
        return 0 !== QQ && (FQ = 1 / QQ), this.normal.x *= FQ, this.normal.y *= FQ, this.normal.z *= FQ, this.d *= FQ, this
      }
      transform(QQ) {
        const FQ = qQ._TmpMatrix;
        QQ.invertToRef(FQ);
        const wQ = FQ.m,
          LQ = this.normal.x,
          oQ = this.normal.y,
          DQ = this.normal.z,
          kQ = this.d,
          vQ = LQ * wQ[0] + oQ * wQ[1] + DQ * wQ[2] + kQ * wQ[3],
          mQ = LQ * wQ[4] + oQ * wQ[5] + DQ * wQ[6] + kQ * wQ[7],
          uQ = LQ * wQ[8] + oQ * wQ[9] + DQ * wQ[10] + kQ * wQ[11],
          HQ = LQ * wQ[12] + oQ * wQ[13] + DQ * wQ[14] + kQ * wQ[15];
        return new qQ(vQ, mQ, uQ, HQ)
      }
      dotCoordinate(QQ) {
        return this.normal.x * QQ.x + this.normal.y * QQ.y + this.normal.z * QQ.z + this.d
      }
      copyFromPoints(QQ, FQ, wQ) {
        const LQ = FQ.x - QQ.x,
          qQ = FQ.y - QQ.y,
          oQ = FQ.z - QQ.z,
          DQ = wQ.x - QQ.x,
          kQ = wQ.y - QQ.y,
          vQ = wQ.z - QQ.z,
          mQ = qQ * vQ - oQ * kQ,
          uQ = oQ * DQ - LQ * vQ,
          HQ = LQ * kQ - qQ * DQ,
          bQ = Math.sqrt(mQ * mQ + uQ * uQ + HQ * HQ);
        let YQ;
        return YQ = 0 !== bQ ? 1 / bQ : 0, this.normal.x = mQ * YQ, this.normal.y = uQ * YQ, this.normal.z = HQ * YQ, this.d = -(this.normal.x * QQ.x + this.normal.y * QQ.y + this.normal.z * QQ.z), this
      }
      isFrontFacingTo(QQ, FQ) {
        return LQ.p.Dot(this.normal, QQ) <= FQ
      }
      signedDistanceTo(QQ) {
        return LQ.p.Dot(QQ, this.normal) + this.d
      }
      static FromArray(QQ) {
        return new qQ(QQ[0], QQ[1], QQ[2], QQ[3])
      }
      static FromPoints(QQ, FQ, wQ) {
        const LQ = new qQ(0, 0, 0, 0);
        return LQ.copyFromPoints(QQ, FQ, wQ), LQ
      }
      static FromPositionAndNormal(QQ, FQ) {
        const wQ = new qQ(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(QQ, FQ, wQ)
      }
      static FromPositionAndNormalToRef(QQ, FQ, wQ) {
        return wQ.normal.Qs(FQ), wQ.normal.normalize(), wQ.d = -QQ.dot(wQ.normal), wQ
      }
      static SignedDistanceToPlaneFromPositionAndNormal(QQ, FQ, wQ) {
        const qQ = -(FQ.x * QQ.x + FQ.y * QQ.y + FQ.z * QQ.z);
        return LQ.p.Dot(wQ, FQ) + qQ
      }
    }
    qQ._TmpMatrix = LQ.c.Identity()
  },
  37631: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => LQ
    });
    class LQ {
      constructor(QQ, FQ, wQ, LQ) {
        this.x = QQ, this.y = FQ, this.width = wQ, this.height = LQ
      }
      toGlobal(QQ, FQ) {
        return new LQ(this.x * QQ, this.y * FQ, this.width * QQ, this.height * FQ)
      }
      toGlobalToRef(QQ, FQ, wQ) {
        return wQ.x = this.x * QQ, wQ.y = this.y * FQ, wQ.width = this.width * QQ, wQ.height = this.height * FQ, this
      }
      clone() {
        return new LQ(this.x, this.y, this.width, this.height)
      }
    }
  },
  38200: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => oQ
    });
    var LQ = wQ(38203);
    const qQ = (QQ, FQ, wQ) => QQ ? QQ.getClassName && "Mesh" === QQ.getClassName() ? null : !QQ.getClassName || "SubMesh" !== QQ.getClassName() && "PhysicsBody" !== QQ.getClassName() ? QQ.clone ? QQ.clone() : Array.isArray(QQ) ? QQ.slice() : wQ && "object" === typeof QQ ? {
      ...QQ
    } : null : QQ.clone(FQ) : null;
    class oQ {
      static DeepCopy(QQ, FQ, wQ, oQ) {
        let DQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const kQ = function(QQ) {
          const FQ = [];
          do {
            const wQ = Object.getOwnPropertyNames(QQ);
            for (const QQ of wQ) - 1 === FQ.indexOf(QQ) && FQ.push(QQ)
          } while (QQ = Object.getPrototypeOf(QQ));
          return FQ
        }(QQ);
        for (const mQ of kQ) {
          if ("_" === mQ[0] && (!oQ || -1 === oQ.indexOf(mQ))) continue;
          if (mQ.endsWith("Observable")) continue;
          if (wQ && -1 !== wQ.indexOf(mQ)) continue;
          const kQ = QQ[mQ],
            uQ = typeof kQ;
          if ("function" !== uQ) try {
            if ("object" === uQ)
              if (kQ instanceof Uint8Array) FQ[mQ] = Uint8Array.from(kQ);
              else if (kQ instanceof Array) {
              if (FQ[mQ] = [], kQ.length > 0)
                if ("object" == typeof kQ[0])
                  for (let QQ = 0; QQ < kQ.length; QQ++) {
                    const wQ = qQ(kQ[QQ], FQ, DQ); - 1 === FQ[mQ].indexOf(wQ) && FQ[mQ].push(wQ)
                  } else FQ[mQ] = kQ.slice(0)
            } else FQ[mQ] = qQ(kQ, FQ, DQ);
            else FQ[mQ] = kQ
          } catch (vQ) {
            LQ.c.Warn(vQ.message)
          }
        }
      }
    }
  },
  37452: (QQ, FQ, wQ) => {
    function LQ() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (QQ => {
        const FQ = 16 * Math.random() | 0;
        return ("x" === QQ ? FQ : 3 & FQ | 8).toString(16)
      }))
    }
    wQ.d(FQ, {
      d: () => LQ
    })
  },
  38203: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => LQ
    });
    class LQ {
      static _CheckLimit(QQ, FQ) {
        let wQ = LQ._LogLimitOutputs[QQ];
        return wQ ? wQ.current++ : (wQ = {
          limit: FQ,
          current: 1
        }, LQ._LogLimitOutputs[QQ] = wQ), wQ.current <= wQ.limit
      }
      static _GenerateLimitMessage(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const wQ = LQ._LogLimitOutputs[QQ];
        if (!wQ || !LQ.MessageLimitReached) return;
        const qQ = this._Levels[FQ];
        wQ.current === wQ.limit && LQ[qQ.name](LQ.MessageLimitReached.replace(/%LIMIT%/g, "" + wQ.limit).replace(/%TYPE%/g, qQ.name ?? ""))
      }
      static _AddLogEntry(QQ) {
        LQ._LogCache = QQ + LQ._LogCache, LQ.OnNewCacheEntry && LQ.OnNewCacheEntry(QQ)
      }
      static _FormatMessage(QQ) {
        const FQ = QQ => QQ < 10 ? "0" + QQ : "" + QQ,
          wQ = new Date;
        return "[" + FQ(wQ.getHours()) + ":" + FQ(wQ.getMinutes()) + ":" + FQ(wQ.getSeconds()) + "]: " + QQ
      }
      static _LogDisabled(QQ, FQ) {}
      static _LogEnabled() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          FQ = arguments.length > 1 ? arguments[1] : void 0,
          wQ = arguments.length > 2 ? arguments[2] : void 0;
        const qQ = Array.isArray(FQ) ? FQ[0] : FQ;
        if (void 0 !== wQ && !LQ._CheckLimit(qQ, wQ)) return;
        const oQ = LQ._FormatMessage(qQ),
          DQ = this._Levels[QQ],
          kQ = Array.isArray(FQ) ? FQ.slice(1) : [];
        DQ.logFunc && DQ.logFunc("BJS - " + oQ, ...kQ);
        const vQ = `<div style='color:${DQ.color}'>${oQ}</div><br>`;
        LQ._AddLogEntry(vQ), LQ._GenerateLimitMessage(qQ, QQ)
      }
      static get LogCache() {
        return LQ._LogCache
      }
      static ClearLogCache() {
        LQ._LogCache = "", LQ._LogLimitOutputs = {}, LQ.errorsCount = 0
      }
      static set LogLevels(QQ) {
        LQ.Log = LQ._LogDisabled, LQ.Warn = LQ._LogDisabled, LQ.Error = LQ._LogDisabled;
        const FQ = [LQ.MessageLogLevel, LQ.WarningLogLevel, LQ.ErrorLogLevel];
        for (const wQ of FQ)
          if ((QQ & wQ) === wQ) {
            const QQ = this._Levels[wQ];
            LQ[QQ.name] = LQ._LogEnabled.bind(LQ, wQ)
          }
      }
    }
    LQ.NoneLogLevel = 0, LQ.MessageLogLevel = 1, LQ.WarningLogLevel = 2, LQ.ErrorLogLevel = 4, LQ.AllLogLevel = 7, LQ.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", LQ._LogCache = "", LQ._LogLimitOutputs = {}, LQ._Levels = [{}, {
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
    }], LQ.errorsCount = 0, LQ.Log = LQ._LogEnabled.bind(LQ, LQ.MessageLogLevel), LQ.Warn = LQ._LogEnabled.bind(LQ, LQ.WarningLogLevel), LQ.Error = LQ._LogEnabled.bind(LQ, LQ.ErrorLogLevel)
  },
  60637: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      CreateScreenshot: () => zQ,
      CreateScreenshotAsync: () => lQ,
      CreateScreenshotForFrameGraphAsync: () => fQ,
      CreateScreenshotUsingRenderTarget: () => aQ,
      CreateScreenshotUsingRenderTargetAsync: () => XQ,
      CreateScreenshotWithResizeAsync: () => jQ,
      RegisterScreenshotTools: () => EQ,
      ScreenshotTools: () => hQ
    });
    var LQ = wQ(39897),
      qQ = wQ(41218),
      oQ = wQ(41200),
      DQ = wQ(39426),
      kQ = wQ(41202),
      vQ = wQ(36720),
      mQ = wQ(36696);
    class uQ extends kQ.f {
      static _GetDefines(QQ) {
        if (!QQ) return null;
        return QQ.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
      }
      _gatherImports(QQ, FQ) {
        QQ ? (this._webGPUReady = !0, FQ.push(Promise.all([wQ.e(368).then((() => wQ(61002))), wQ.e(369).then((() => wQ(61011)))]))) : FQ.push(Promise.all([wQ.e(370).then((() => wQ(61013))), wQ.e(371).then((() => wQ(61020)))]))
      }
      constructor(QQ) {
        const FQ = {
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: QQ,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || vQ.d.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          vertexShader: uQ.VertexUrl,
          fragmentShader: uQ.FragmentUrl,
          uniforms: uQ.Uniforms
        };
        super({
          ...FQ,
          defines: uQ._GetDefines(FQ.engine)
        }), this.texelSize = new mQ.n(0, 0)
      }
      bind() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.bind(QQ), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
      }
    }
    uQ.VertexUrl = "fxaa", uQ.FragmentUrl = "fxaa", uQ.Uniforms = ["texelSize"];
    class HQ extends oQ.d {
      getClassName() {
        return "FxaaPostProcess"
      }
      constructor(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          qQ = arguments.length > 3 ? arguments[3] : void 0,
          oQ = arguments.length > 4 ? arguments[4] : void 0,
          DQ = arguments.length > 5 ? arguments[5] : void 0,
          kQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const vQ = {
          uniforms: uQ.Uniforms,
          size: "number" === typeof FQ ? FQ : void 0,
          camera: wQ,
          samplingMode: qQ || LQ.e.BILINEAR_SAMPLINGMODE,
          engine: oQ,
          reusable: DQ,
          textureType: kQ,
          ...FQ
        };
        super(QQ, uQ.FragmentUrl, {
          effectWrapper: "number" !== typeof FQ && FQ.effectWrapper ? void 0 : new uQ(QQ, oQ, vQ),
          ...vQ
        }), this.onApplyObservable.add((QQ => {
          this._effectWrapper.texelSize = this.texelSize
        }))
      }
      static _Parse(QQ, FQ, wQ, LQ) {
        return DQ.c.Parse((() => new HQ(QQ.name, QQ.options, FQ, QQ.renderTargetSamplingMode, wQ.Wx(), QQ.reusable)), QQ, wQ, LQ)
      }
    }
    var bQ = wQ(38203),
      YQ = wQ(39505),
      xQ = wQ(41235),
      AQ = wQ(41214),
      tQ = wQ(39289);
    const eQ = 0;
    class MQ {
      constructor(QQ, FQ, wQ) {
        this.name = QQ, this._parentTask = FQ, this._context = wQ, this.disabled = !1
      }
      setInitializeFunc(QQ) {
        this._initFunc = QQ
      }
      setExecuteFunc(QQ) {
        this._executeFunc = QQ
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
    class GQ extends MQ {
      static IsObjectListPass(QQ) {
        return void 0 !== QQ.setObjectList
      }
      get objectList() {
        return this._objectList
      }
      setObjectList(QQ) {
        this._objectList = QQ
      }
      constructor(QQ, FQ, wQ, LQ) {
        super(QQ, FQ, wQ), this._engine = LQ
      }
      _isValid() {
        const QQ = super._isValid();
        return QQ || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
      }
    }
    class pQ extends MQ {
      static IsRenderPass(QQ) {
        return void 0 !== QQ.setRenderTarget
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
      constructor(QQ, FQ, wQ, LQ) {
        super(QQ, FQ, wQ), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = LQ
      }
      setRenderTarget(QQ) {
        this._renderTarget = QQ
      }
      setRenderTargetDepth(QQ) {
        this._renderTargetDepth = QQ
      }
      addDependencies(QQ) {
        if (void 0 !== QQ)
          if (Array.isArray(QQ))
            for (const FQ of QQ) this._dependencies.add(FQ);
          else this._dependencies.add(QQ)
      }
      collectDependencies(QQ) {
        const FQ = this._dependencies.keys();
        for (let wQ = FQ.next(); !0 !== wQ.done; wQ = FQ.next()) QQ.add(wQ.value);
        if (void 0 !== this._renderTarget)
          if (Array.isArray(this._renderTarget))
            for (const wQ of this._renderTarget) void 0 !== wQ && QQ.add(wQ);
          else QQ.add(this._renderTarget);
        void 0 !== this._renderTargetDepth && QQ.add(this._renderTargetDepth)
      }
      setOutputLayerAndFaceIndices(QQ) {
        const FQ = this.frameGraphRenderTarget.renderTargetWrapper;
        if (FQ)
          for (const wQ of QQ) FQ.setLayerAndFaceIndex(wQ.targetIndex, wQ.layerIndex, wQ.faceIndex)
      }
      _initialize() {
        this._frameGraphRenderTarget = this._context.createRenderTarget(this.name, this._renderTarget, this._renderTargetDepth, this.depthReadOnly, this.stencilReadOnly), super._initialize()
      }
      _execute() {
        this._context.bindRenderTarget(this._frameGraphRenderTarget), super._execute(), this._context.restoreDefaultFramebuffer()
      }
      _isValid() {
        const QQ = super._isValid();
        return QQ || (void 0 !== this._renderTarget || void 0 !== this.renderTargetDepth ? null : "Render target and render target depth cannot both be undefined.")
      }
      _dispose() {
        this._frameGraphRenderTarget?.dispose()
      }
    }
    var cQ = wQ(36722);
    class CQ {
      get name() {
        return this._name
      }
      set name(QQ) {
        this._name = QQ
      }
      get disabled() {
        return this._disabled
      }
      set disabled(QQ) {
        this._disabled = QQ
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
      constructor(QQ, FQ) {
        this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new cQ.e, this.onBeforeTaskExecute = new cQ.e, this.onAfterTaskExecute = new cQ.e, this.name = QQ, this._frameGraph = FQ, this._reset()
      }
      _reset() {
        for (const QQ of this._passes) QQ._dispose();
        for (const QQ of this._passesDisabled) QQ._dispose();
        this._passes.length = 0, this._passesDisabled.length = 0
      }
      _addPass(QQ, FQ) {
        FQ ? this._passesDisabled.push(QQ) : this._passes.push(QQ)
      }
      _checkTask() {
        let QQ, FQ = null,
          wQ = null;
        for (const kQ of this._passes) {
          const LQ = kQ._isValid();
          if (LQ) throw new Error(`Pass "${kQ.name}" is not valid. ${LQ}`);
          if (pQ.IsRenderPass(kQ)) {
            const QQ = Array.isArray(kQ.renderTarget) ? kQ.renderTarget : [kQ.renderTarget];
            FQ = [];
            for (const wQ of QQ) void 0 !== wQ && FQ.push(this._frameGraph.textureManager.getTextureFromHandle(wQ));
            wQ = void 0 !== kQ.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(kQ.renderTargetDepth) : null
          } else GQ.IsObjectListPass(kQ) && (QQ = kQ.objectList)
        }
        let LQ, qQ = null,
          oQ = [],
          DQ = null;
        for (const kQ of this._passesDisabled) {
          const QQ = kQ._isValid();
          if (QQ) throw new Error(`Pass "${kQ.name}" is not valid. ${QQ}`);
          if (pQ.IsRenderPass(kQ)) {
            const QQ = Array.isArray(kQ.renderTarget) ? kQ.renderTarget : [kQ.renderTarget];
            qQ = [];
            for (const FQ of QQ) void 0 !== FQ && qQ.push(this._frameGraph.textureManager.getTextureFromHandle(FQ));
            oQ = QQ, DQ = void 0 !== kQ.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(kQ.renderTargetDepth) : null
          } else GQ.IsObjectListPass(kQ) && (LQ = kQ.objectList)
        }
        if (this._passesDisabled.length > 0) {
          if (!this._checkSameRenderTarget(FQ, qQ)) {
            let QQ = !0;
            for (const FQ of oQ)
              if (void 0 !== FQ && !this._frameGraph.textureManager.isHistoryTexture(FQ)) {
                QQ = !1;
                break
              } if (!QQ) throw new Error(`The output texture of the task "${this.name}" is different when it is enabled or disabled.`)
          }
          if (wQ !== DQ && null !== DQ) throw new Error(`The output depth texture of the task "${this.name}" is different when it is enabled or disabled.`);
          if (QQ !== LQ && null !== LQ) throw new Error(`The output object list of the task "${this.name}" is different when it is enabled or disabled.`)
        }
      }
      _execute() {
        const QQ = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
        this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const FQ of QQ) FQ._execute()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
        this.onAfterTaskExecute.notifyObservers(this)
      }
      _initializePasses() {
        this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const QQ of this._passes) QQ._initialize();
          for (const QQ of this._passesDisabled) QQ._initialize()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
      }
      _checkSameRenderTarget(QQ, FQ) {
        if (null === QQ || null === FQ) return QQ === FQ;
        if (QQ.length !== FQ.length) return !1;
        for (let wQ = 0; wQ < QQ.length; wQ++)
          if (QQ[wQ] !== FQ[wQ]) return !1;
        return !0
      }
    }
    class SQ extends CQ {
      get alphaMode() {
        return this.postProcess.alphaMode
      }
      set alphaMode(QQ) {
        this.postProcess.alphaMode = QQ
      }
      get drawWrapper() {
        return this._postProcessDrawWrapper
      }
      constructor(QQ, FQ, wQ) {
        super(QQ, FQ), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = wQ, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture = this._frameGraph.textureManager.createDanglingHandle(), this.outputDepthAttachmentTexture = this._frameGraph.textureManager.createDanglingHandle()
      }
      isReady() {
        return this.postProcess.isReady()
      }
      getClassName() {
        return "FrameGraphPostProcessTask"
      }
      record() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          FQ = arguments.length > 1 ? arguments[1] : void 0,
          wQ = arguments.length > 2 ? arguments[2] : void 0;
        if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
        const LQ = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
        if (LQ && (LQ.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, LQ), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentTexture, this.depthAttachmentTexture), LQ) {
          const QQ = this._frameGraph.textureManager.getTextureAbsoluteDimensions(LQ);
          this._sourceWidth = QQ.width, this._sourceHeight = QQ.height
        }
        const qQ = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
        this._outputWidth = qQ.size.width, this._outputHeight = qQ.size.height;
        const oQ = this._frameGraph.addRenderPass(this.name);
        if (oQ.depthReadOnly = this.depthReadOnly, oQ.stencilReadOnly = this.stencilReadOnly, oQ.addDependencies(this.sourceTexture), oQ.setRenderTarget(this.outputTexture), oQ.setRenderTargetDepth(this.depthAttachmentTexture), oQ.setExecuteFunc((QQ => {
            QQ.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && QQ.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), FQ?.(QQ), this.viewport && QQ.setViewport(this.viewport), QQ.applyFullScreenEffect(this._postProcessDrawWrapper, (() => {
              void 0 !== this.sourceTexture && QQ.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), wQ?.(QQ), this.postProcess.bind()
            }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), QQ.restoreDefaultFramebuffer(), QQ.popDebugGroup()
          })), !QQ) {
          const QQ = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
          QQ.depthReadOnly = this.depthReadOnly, QQ.stencilReadOnly = this.stencilReadOnly, QQ.addDependencies(this.sourceTexture), QQ.setRenderTarget(this.outputTexture), QQ.setRenderTargetDepth(this.depthAttachmentTexture), QQ.setExecuteFunc((QQ => {
            void 0 !== this.sourceTexture && 0 === this.alphaMode && (this.viewport && QQ.setViewport(this.viewport), QQ.copyTexture(this.sourceTexture, void 0, void 0 !== this.viewport))
          }))
        }
        return oQ
      }
      dispose() {
        this.postProcess.dispose(), super.dispose()
      }
    }
    class iQ extends SQ {
      constructor(QQ, FQ, wQ) {
        super(QQ, FQ, wQ || new uQ(QQ, FQ.engine))
      }
      getClassName() {
        return "FrameGraphFXAATask"
      }
      record() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          FQ = arguments.length > 1 ? arguments[1] : void 0,
          wQ = arguments.length > 2 ? arguments[2] : void 0;
        const LQ = super.record(QQ, FQ, wQ);
        return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, LQ
      }
    }
    var WQ = wQ(41226);
    class RQ extends SQ {
      constructor(QQ, FQ, wQ) {
        super(QQ, FQ, wQ || new WQ.f(QQ, FQ.engine))
      }
      getClassName() {
        return "FrameGraphPassTask"
      }
    }
    var OQ = wQ(39496),
      sQ = wQ(39595),
      rQ = wQ(39552),
      IQ = wQ(39686),
      UQ = wQ(36873);
    class NQ {
      getRenderCamera(QQ) {
        if (this._renderCamera) return this._renderCamera;
        {
          let FQ;
          return FQ = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, QQ && FQ && FQ.isRigCamera ? FQ.rigParent : FQ
        }
      }
      setRenderCamera(QQ) {
        this._renderCamera = QQ
      }
      _getSharedGizmoLight() {
        return this._sharedGizmoLight || (this._sharedGizmoLight = new IQ.c("shared gizmo light", new mQ.p(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = UQ.b.Gray()), this._sharedGizmoLight
      }
      static get DefaultUtilityLayer() {
        return null == NQ._DefaultUtilityLayer ? NQ._CreateDefaultUtilityLayerFromScene(vQ.d.LastCreatedScene) : NQ._DefaultUtilityLayer
      }
      static _CreateDefaultUtilityLayerFromScene(QQ) {
        return NQ._DefaultUtilityLayer = new NQ(QQ), NQ._DefaultUtilityLayer.originalScene.zN.addOnce((() => {
          NQ._DefaultUtilityLayer = null
        })), NQ._DefaultUtilityLayer
      }
      static get DefaultKeepDepthUtilityLayer() {
        return null == NQ._DefaultKeepDepthUtilityLayer ? NQ._CreateDefaultKeepUtilityLayerFromScene(vQ.d.LastCreatedScene) : NQ._DefaultKeepDepthUtilityLayer
      }
      static _CreateDefaultKeepUtilityLayerFromScene(QQ) {
        return NQ._DefaultKeepDepthUtilityLayer = new NQ(QQ), NQ._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, NQ._DefaultKeepDepthUtilityLayer.originalScene.zN.addOnce((() => {
          NQ._DefaultKeepDepthUtilityLayer = null
        })), NQ._DefaultKeepDepthUtilityLayer
      }
      constructor(QQ) {
        let FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.originalScene = QQ, this.handleEvents = FQ, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.processAllEvents = !1, this.pickingEnabled = !0, this.onPointerOutObservable = new cQ.e, this.utilityLayerScene = new OQ.e(QQ.Wx(), {
          virtual: !0,
          useFloatingOrigin: QQ.floatingOriginMode
        }), this.utilityLayerScene.useRightHandedSystem = QQ.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), FQ && (this._originalPointerObserver = QQ.onPrePointerObservable.add((FQ => {
          if (!this.utilityLayerScene.activeCamera) return;
          if (!this.pickingEnabled) return;
          if (!this.processAllEvents && FQ.type !== sQ.e.POINTERMOVE && FQ.type !== sQ.e.POINTERUP && FQ.type !== sQ.e.POINTERDOWN && FQ.type !== sQ.e.POINTERDOUBLETAP) return;
          this.utilityLayerScene.pointerX = QQ.pointerX, this.utilityLayerScene.pointerY = QQ.pointerY;
          const wQ = FQ.event;
          if (QQ.isPointerCaptured(wQ.pointerId)) return void(this._pointerCaptures[wQ.pointerId] = !1);
          const LQ = wQ => {
              let LQ;
              if (FQ.nearInteractionPickingInfo) LQ = FQ.nearInteractionPickingInfo.pickedMesh.iN() == wQ ? FQ.nearInteractionPickingInfo : new rQ.d;
              else if (wQ !== this.utilityLayerScene && FQ.originalPickingInfo) LQ = FQ.originalPickingInfo;
              else {
                let qQ = null;
                this._renderCamera && (qQ = wQ._activeCamera, wQ._activeCamera = this._renderCamera, FQ.ray = null), LQ = FQ.ray ? wQ.pickWithRay(FQ.ray) : wQ.Vb(QQ.pointerX, QQ.pointerY), qQ && (wQ._activeCamera = qQ)
              }
              return LQ
            },
            qQ = LQ(this.utilityLayerScene);
          if (!FQ.ray && qQ && (FQ.ray = qQ.ray), FQ.originalPickingInfo?.aimTransform && qQ && (qQ.aimTransform = FQ.originalPickingInfo.aimTransform, qQ.gripTransform = FQ.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(FQ), this.onlyCheckPointerDownEvents && FQ.type != sQ.e.POINTERDOWN) return FQ.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new sQ.j(FQ.type, FQ.event, qQ), FQ.type), void(FQ.type === sQ.e.POINTERUP && this._pointerCaptures[wQ.pointerId] && (this._pointerCaptures[wQ.pointerId] = !1));
          if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) qQ && qQ.hit && (FQ.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new sQ.j(FQ.type, FQ.event, qQ), FQ.type), FQ.skipOnPointerObservable = !0);
          else {
            const wQ = LQ(QQ),
              oQ = FQ.event;
            wQ && qQ && (0 === qQ.distance && wQ.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(wQ.pickedMesh) ? (this._notifyObservers(FQ, wQ, oQ), FQ.skipOnPointerObservable = !0) : FQ.type === sQ.e.POINTERDOWN ? (this._pointerCaptures[oQ.pointerId] = !0, this._notifyObservers(FQ, wQ, oQ)) : FQ.type !== sQ.e.POINTERMOVE && FQ.type !== sQ.e.POINTERUP || (this._lastPointerEvents[oQ.pointerId] && (this.onPointerOutObservable.notifyObservers(oQ.pointerId), delete this._lastPointerEvents[oQ.pointerId]), this._notifyObservers(FQ, wQ, oQ)) : !this._pointerCaptures[oQ.pointerId] && (qQ.distance < wQ.distance || 0 === wQ.distance) ? (this._notifyObservers(FQ, qQ, oQ), FQ.skipOnPointerObservable || (FQ.skipOnPointerObservable = qQ.distance > 0)) : !this._pointerCaptures[oQ.pointerId] && qQ.distance >= wQ.distance && (this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(wQ.pickedMesh) ? (this._notifyObservers(FQ, wQ, oQ), FQ.skipOnPointerObservable = !0) : (FQ.type !== sQ.e.POINTERMOVE && FQ.type !== sQ.e.POINTERUP || this._lastPointerEvents[oQ.pointerId] && (this.onPointerOutObservable.notifyObservers(oQ.pointerId), delete this._lastPointerEvents[oQ.pointerId]), this._notifyObservers(FQ, qQ, oQ))), FQ.type === sQ.e.POINTERUP && this._pointerCaptures[oQ.pointerId] && (this._pointerCaptures[oQ.pointerId] = !1))
          }
        })), this._originalPointerObserver && QQ.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, wQ || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((QQ => {
          this.shouldRender && QQ == this.getRenderCamera() && this.render()
        }))), this._sceneDisposeObserver = this.originalScene.zN.add((() => {
          this.dispose()
        })), this._updateCamera()
      }
      _notifyObservers(QQ, FQ, wQ) {
        QQ.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new sQ.j(QQ.type, QQ.event, FQ), QQ.type), this._lastPointerEvents[wQ.pointerId] = !0)
      }
      render() {
        if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
          const QQ = this.utilityLayerScene.activeCamera.iN(),
            FQ = this.utilityLayerScene.activeCamera;
          FQ._scene = this.utilityLayerScene, FQ.leftCamera && (FQ.leftCamera._scene = this.utilityLayerScene), FQ.rightCamera && (FQ.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), FQ._scene = QQ, FQ.leftCamera && (FQ.leftCamera._scene = QQ), FQ.rightCamera && (FQ.rightCamera._scene = QQ)
        }
      }
      dispose() {
        this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.zN.remove(this._sceneDisposeObserver), this._originalPointerObserver && this.originalScene.onPrePointerObservable.remove(this._originalPointerObserver), this.utilityLayerScene.dispose()
      }
      _updateCamera() {
        this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
      }
    }
    NQ._DefaultUtilityLayer = null, NQ._DefaultKeepDepthUtilityLayer = null;
    const TQ = {
      FindMainCamera: function(QQ) {
        return QQ.findMainCamera()
      },
      FindMainObjectRenderer: function(QQ) {
        return QQ.findMainObjectRenderer()
      },
      CreateUtilityLayerRenderer: function(QQ) {
        let FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const wQ = QQ.lA,
          LQ = new NQ(wQ, FQ, !0);
        LQ.utilityLayerScene.activeCamera = wQ.activeCamera;
        let qQ = TQ.FindMainCamera(wQ.frameGraph);
        !qQ && wQ.cameras.length > 0 && (qQ = wQ.cameras[0]), qQ && (LQ.setRenderCamera(qQ), LQ.utilityLayerScene.activeCamera = qQ);
        const oQ = wQ.onAfterRenderObservable.add((() => {
          LQ.render()
        }));
        return LQ.utilityLayerScene.zN.addOnce((() => {
          wQ.onAfterRenderObservable.remove(oQ)
        })), LQ
      }
    };
    let KQ = null;

    function zQ(QQ, FQ, wQ, LQ) {
      let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        oQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        DQ = arguments.length > 6 ? arguments[6] : void 0,
        kQ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        vQ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
      const {
        height: mQ,
        width: uQ
      } = VQ(QQ, FQ, wQ);
      if (!mQ || !uQ) return void bQ.c.Error("Invalid 'size' parameter !");
      const HQ = FQ.iN();
      let xQ = HQ.activeCamera !== FQ;
      if (HQ.frameGraph) {
        const QQ = TQ.FindMainObjectRenderer(HQ.frameGraph);
        QQ && (xQ = QQ.camera !== FQ)
      }
      xQ ? aQ(QQ, FQ, wQ, (QQ => {
        if (oQ) {
          const FQ = new Blob([QQ]);
          YQ.g.DownloadBlob(FQ), LQ && LQ("")
        } else LQ && LQ(QQ)
      }), qQ, 1, QQ.getCreationOptions().antialias, void 0, void 0, void 0, void 0, DQ) : QQ.onEndFrameObservable.addOnce((() => {
        KQ || (KQ = document.createElement("canvas")), KQ.width = uQ, KQ.height = mQ;
        const FQ = KQ.getContext("2d"),
          wQ = QQ.getRenderingCanvas();
        if (!FQ || !wQ) return void bQ.c.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
        const xQ = wQ.width,
          AQ = wQ.height,
          tQ = KQ.width,
          eQ = KQ.height,
          MQ = tQ / xQ,
          GQ = eQ / AQ,
          pQ = kQ ? Math.max(MQ, GQ) : Math.min(MQ, GQ),
          cQ = xQ * pQ,
          CQ = AQ * pQ,
          SQ = (tQ - cQ) / 2,
          iQ = (eQ - CQ) / 2;
        FQ.save(), FQ.fillStyle = vQ ? HQ.clearColor.toHexString() : "rgba(0, 0, 0, 0)", FQ.fillRect(0, 0, uQ, mQ), FQ.restore(), FQ.drawImage(wQ, 0, 0, xQ, AQ, SQ, iQ, cQ, CQ), oQ ? (YQ.g.EncodeScreenshotCanvasData(KQ, void 0, qQ, void 0, DQ), LQ && LQ("")) : YQ.g.EncodeScreenshotCanvasData(KQ, LQ, qQ, void 0, DQ)
      }))
    }
    async function lQ(QQ, FQ, wQ) {
      let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        qQ = arguments.length > 4 ? arguments[4] : void 0,
        oQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        DQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        kQ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      return await new Promise(((vQ, mQ) => {
        zQ(QQ, FQ, wQ, (QQ => {
          "undefined" !== typeof QQ ? vQ(QQ) : mQ(new Error("Data is undefined"))
        }), LQ, kQ, qQ, oQ, DQ)
      }))
    }
    async function jQ(QQ, FQ, wQ, LQ) {
      let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        oQ = arguments.length > 5 ? arguments[5] : void 0,
        DQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return await new Promise((kQ => {
        zQ(QQ, FQ, {
          width: wQ,
          height: LQ
        }, (() => {
          kQ()
        }), qQ, !0, oQ, DQ)
      }))
    }

    function aQ(QQ, FQ, oQ, DQ) {
      let kQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        vQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
        mQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        uQ = arguments.length > 7 ? arguments[7] : void 0,
        YQ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        eQ = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        MQ = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
        GQ = arguments.length > 11 ? arguments[11] : void 0,
        pQ = arguments.length > 12 ? arguments[12] : void 0,
        cQ = arguments.length > 13 ? arguments[13] : void 0,
        CQ = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
        SQ = arguments.length > 15 ? arguments[15] : void 0;
      const iQ = FQ.iN();
      if (iQ.frameGraph) return void fQ(iQ.frameGraph, FQ, oQ, kQ, vQ, mQ, uQ, GQ, cQ, !DQ).then((QQ => {
        DQ && DQ(QQ)
      }));
      const {
        height: WQ,
        width: RQ,
        finalWidth: OQ,
        finalHeight: sQ
      } = VQ(QQ, FQ, oQ), rQ = {
        width: RQ,
        height: WQ
      };
      if (!WQ || !RQ) return void bQ.c.Error("Invalid 'size' parameter !");
      QQ.skipFrameRender = !0;
      const IQ = QQ.getRenderWidth,
        UQ = QQ.getRenderHeight;
      QQ.getRenderWidth = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && QQ._currentRenderTarget ? QQ._currentRenderTarget.width : RQ
      }, QQ.getRenderHeight = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && QQ._currentRenderTarget ? QQ._currentRenderTarget.height : WQ
      }, QQ.onResizeObservable.hasObservers() && QQ.onResizeObservable.notifyObservers(QQ);
      const NQ = new qQ.e("screenShot", rQ, iQ, !1, !1, 0, !1, LQ.e.BILINEAR_SAMPLINGMODE, void 0, eQ, void 0, void 0, void 0, vQ);
      NQ.renderList = iQ.meshes.slice(), NQ.samples = vQ, NQ.renderSprites = YQ, NQ.activeCamera = FQ, NQ.forceLayerMaskCheck = MQ, pQ?.(NQ);
      const TQ = cQ || xQ.DumpData,
        KQ = () => {
          iQ.incrementRenderId(), iQ.resetCachedMaterial(), (0, tQ.e)((() => NQ.isReadyForRendering() && FQ.isReady(!0)), (() => {
            QQ.onEndFrameObservable.addOnce((() => {
              OQ === RQ && sQ === WQ ? NQ.readPixels(void 0, void 0, void 0, !1).then((QQ => {
                TQ(RQ, WQ, QQ, DQ, kQ, uQ, !0, void 0, GQ), NQ.dispose()
              })) : (QQ.isWebGPU ? wQ.e(364).then((() => wQ(60953))) : wQ.e(365).then((() => wQ(60956)))).then((async () => await (0, AQ.b)("pass", NQ.getInternalTexture(), iQ, void 0, void 0, void 0, OQ, sQ).then((FQ => {
                QQ._readTexturePixels(FQ, OQ, sQ, -1, 0, null, !0, !1, 0, 0).then((QQ => {
                  TQ(OQ, sQ, QQ, DQ, kQ, uQ, !0, void 0, GQ), FQ.dispose()
                }))
              }))))
            })), iQ.incrementRenderId(), iQ.resetCachedMaterial();
            const LQ = iQ.activeCamera,
              qQ = iQ.activeCameras,
              oQ = FQ.outputRenderTarget,
              vQ = iQ.spritesEnabled;
            iQ.activeCamera = FQ, iQ.activeCameras = null, FQ.outputRenderTarget = NQ, iQ.spritesEnabled = YQ;
            const mQ = iQ.meshes;
            iQ.meshes = NQ.renderList || iQ.meshes;
            try {
              iQ.render()
            } finally {
              iQ.activeCamera = LQ, iQ.activeCameras = qQ, FQ.outputRenderTarget = oQ, iQ.spritesEnabled = vQ, iQ.meshes = mQ, QQ.getRenderWidth = IQ, QQ.getRenderHeight = UQ, QQ.onResizeObservable.hasObservers() && QQ.onResizeObservable.notifyObservers(QQ), FQ.getProjectionMatrix(!0), QQ.skipFrameRender = !1
            }
          }), (() => {
            QQ.skipFrameRender = !1, QQ.getRenderWidth = IQ, QQ.getRenderHeight = UQ, SQ?.()
          }), void 0, CQ)
        };
      if (mQ) {
        const QQ = new HQ("antialiasing", 1, iQ.activeCamera);
        NQ.addPostProcess(QQ), QQ.autoClear = !0, QQ.onEffectCreatedObservable.addOnce((QQ => {
          QQ.isReady() ? KQ() : QQ.onCompiled = () => {
            KQ()
          }
        }))
      } else KQ()
    }
    async function XQ(QQ, FQ, wQ) {
      let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        oQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        DQ = arguments.length > 6 ? arguments[6] : void 0,
        kQ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        vQ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        mQ = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
        uQ = arguments.length > 10 ? arguments[10] : void 0,
        HQ = arguments.length > 11 ? arguments[11] : void 0,
        bQ = arguments.length > 12 ? arguments[12] : void 0;
      return await new Promise(((YQ, xQ) => {
        aQ(QQ, FQ, wQ, (QQ => {
          "undefined" !== typeof QQ ? YQ(QQ) : xQ(new Error("Data is undefined"))
        }), LQ, qQ, oQ, DQ, kQ, vQ, mQ, uQ, HQ, bQ)
      }))
    }
    async function fQ(QQ, FQ, wQ) {
      let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        oQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        DQ = arguments.length > 6 ? arguments[6] : void 0,
        kQ = arguments.length > 7 ? arguments[7] : void 0,
        vQ = arguments.length > 8 ? arguments[8] : void 0,
        mQ = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        uQ = arguments.length > 10 ? arguments[10] : void 0;
      const HQ = QQ.engine,
        bQ = QQ.textureManager,
        {
          height: YQ,
          width: AQ,
          finalWidth: tQ,
          finalHeight: MQ
        } = VQ(HQ, FQ, wQ),
        GQ = {
          width: AQ,
          height: YQ
        },
        pQ = vQ || xQ.DumpData,
        cQ = QQ.tasks,
        CQ = cQ.length,
        SQ = QQ.pausedExecution,
        WQ = HQ.getCaps().parallelShaderCompile;
      bQ.setBackBufferTextures(0, 0, {
        size: GQ,
        options: {
          createMipMaps: !1,
          samples: qQ,
          types: [0],
          formats: [5],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot color"]
        },
        sizeIsPercentage: !1
      }, {
        size: GQ,
        options: {
          createMipMaps: !1,
          samples: qQ,
          types: [0],
          formats: [HQ.isStencilEnable ? 13 : 14],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot depth"]
        },
        sizeIsPercentage: !1
      });
      let OQ = eQ;
      if (oQ) {
        const FQ = new iQ("fxaa", QQ);
        FQ.sourceTexture = OQ, OQ = FQ.outputTexture, QQ.addTask(FQ)
      }
      if (tQ !== AQ || MQ !== YQ) {
        const FQ = new RQ("pass", QQ);
        FQ.sourceTexture = OQ, FQ.targetTexture = QQ.textureManager.createRenderTargetTexture("pass_output", {
          size: {
            width: tQ,
            height: MQ
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
        }), OQ = FQ.outputTexture, QQ.addTask(FQ)
      }
      const sQ = TQ.FindMainObjectRenderer(QQ);
      let rQ = null;
      sQ && (rQ = sQ.camera, sQ.camera = FQ), HQ.getCaps().parallelShaderCompile = void 0, await QQ.buildAsync();
      const IQ = uQ ?? (bQ.hasHistoryTextures ? 32 : 1);
      for (let xQ = 0; xQ < IQ; ++xQ) QQ.execute();
      QQ.pausedExecution = !0, HQ.getCaps().parallelShaderCompile = WQ;
      for (let xQ = CQ; xQ < cQ.length; ++xQ) QQ.tasks[xQ].dispose();
      QQ.tasks.length = CQ, sQ && rQ && (sQ.camera = rQ);
      const UQ = QQ.textureManager.getTextureFromHandle(OQ);
      return UQ.incrementReferences(), bQ.resetBackBufferTextures(), await QQ.buildAsync(), QQ.pausedExecution = SQ, new Promise((QQ => {
        HQ._readTexturePixels(UQ, tQ, MQ, -1, 0, null, !0, !1, 0, 0).then((async FQ => {
          UQ.dispose(), pQ(tQ, MQ, FQ, mQ ? void 0 : FQ => QQ(FQ), LQ, DQ, !0, void 0, kQ), mQ && QQ(null)
        }))
      }))
    }

    function VQ(QQ, FQ, wQ) {
      let LQ = 0,
        qQ = 0,
        oQ = 0,
        DQ = 0;
      if ("object" === typeof wQ) {
        const kQ = wQ.precision ? Math.abs(wQ.precision) : 1;
        wQ.width && wQ.height ? (LQ = wQ.height * kQ, qQ = wQ.width * kQ) : wQ.width && !wQ.height ? (qQ = wQ.width * kQ, LQ = Math.round(qQ / QQ.getAspectRatio(FQ))) : wQ.height && !wQ.width ? (LQ = wQ.height * kQ, qQ = Math.round(LQ * QQ.getAspectRatio(FQ))) : (qQ = Math.round(QQ.getRenderWidth() * kQ), LQ = Math.round(qQ / QQ.getAspectRatio(FQ))), wQ.finalWidth && wQ.finalHeight ? (DQ = wQ.finalHeight, oQ = wQ.finalWidth) : wQ.finalWidth && !wQ.finalHeight ? (oQ = wQ.finalWidth, DQ = Math.round(oQ / QQ.getAspectRatio(FQ))) : wQ.finalHeight && !wQ.finalWidth ? (DQ = wQ.finalHeight, oQ = Math.round(DQ * QQ.getAspectRatio(FQ))) : (oQ = qQ, DQ = LQ)
      } else isNaN(wQ) || (LQ = wQ, qQ = wQ, oQ = wQ, DQ = wQ);
      return qQ && (qQ = Math.floor(qQ)), LQ && (LQ = Math.floor(LQ)), oQ && (oQ = Math.floor(oQ)), DQ && (DQ = Math.floor(DQ)), {
        height: 0 | LQ,
        width: 0 | qQ,
        finalWidth: 0 | oQ,
        finalHeight: 0 | DQ
      }
    }
    const hQ = {
      CreateScreenshot: zQ,
      CreateScreenshotAsync: lQ,
      CreateScreenshotWithResizeAsync: jQ,
      CreateScreenshotUsingRenderTarget: aQ,
      CreateScreenshotUsingRenderTargetAsync: XQ,
      CreateScreenshotForFrameGraphAsync: fQ
    };
    let JQ = !1;

    function EQ() {
      if (JQ) return;
      JQ = !0;
      YQ.g.CreateScreenshot = zQ, YQ.g.CreateScreenshotAsync = lQ, YQ.g.CreateScreenshotUsingRenderTarget = aQ, YQ.g.CreateScreenshotUsingRenderTargetAsync = XQ
    }
    EQ()
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);