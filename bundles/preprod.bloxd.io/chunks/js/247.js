export const id = 247;
export const ids = [247, 248];
export const modules = {
  40519: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => gQ,
      f: () => rQ
    });
    var wQ = XQ(40260),
      qQ = XQ(40268),
      TQ = XQ(37370),
      zQ = XQ(37546),
      sQ = XQ(40525),
      FQ = XQ(40491),
      PQ = XQ(37418);
    let gQ = (() => {
        var QQ;
        let WQ, XQ, FQ = sQ.d,
          PQ = [],
          gQ = [],
          JQ = [],
          rQ = [];
        return QQ = class extends FQ {
          constructor(QQ, WQ, XQ, qQ) {
            super(QQ, XQ, qQ), this.groundColor = (0, wQ.n)(this, PQ, new zQ.b(0, 0, 0)), this.direction = ((0, wQ.n)(this, gQ), (0, wQ.n)(this, JQ, void 0)), (0, wQ.n)(this, rQ), this.direction = WQ || TQ.s.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(QQ) {
            return this.direction = TQ.s.Normalize(QQ.subtract(TQ.s.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(QQ, WQ) {
            const XQ = TQ.s.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", XQ.x, XQ.y, XQ.z, 0, WQ), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), WQ), this
          }
          transferToNodeMaterialEffect(QQ, WQ) {
            const XQ = TQ.s.Normalize(this.direction);
            return QQ.setFloat3(WQ, XQ.x, XQ.y, XQ.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = TQ.e.Identity()), this._worldMatrix
          }
          getTypeID() {
            return sQ.d.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(QQ, WQ) {
            QQ["HEMILIGHT" + WQ] = !0
          }
        }, (() => {
          const TQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(FQ[Symbol.metadata] ?? null) : void 0;
          WQ = [(0, qQ.l)()], XQ = [(0, qQ.F)()], (0, wQ.k)(null, null, WQ, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: QQ => "groundColor" in QQ,
              get: QQ => QQ.groundColor,
              set: (QQ, WQ) => {
                QQ.groundColor = WQ
              }
            },
            metadata: TQ
          }, PQ, gQ), (0, wQ.k)(null, null, XQ, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: QQ => "direction" in QQ,
              get: QQ => QQ.direction,
              set: (QQ, WQ) => {
                QQ.direction = WQ
              }
            },
            metadata: TQ
          }, JQ, rQ), TQ && Object.defineProperty(QQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: TQ
          })
        })(), QQ
      })(),
      JQ = !1;

    function rQ() {
      JQ || (JQ = !0, FQ.e.AddNodeConstructor("Light_Type_3", ((QQ, WQ) => () => new gQ(QQ, TQ.s.Zero(), WQ))), (0, PQ.d)("BABYLON.HemisphericLight", gQ))
    }
  },
  38041: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => qQ
    });
    var wQ = XQ(38047);
    class qQ {
      static GetPlanes(QQ) {
        const WQ = [];
        for (let XQ = 0; XQ < 6; XQ++) WQ.push(new wQ.b(0, 0, 0, 0));
        return qQ.GetPlanesToRef(QQ, WQ), WQ
      }
      static GetNearPlaneToRef(QQ, WQ) {
        const XQ = QQ.m;
        WQ.normal.x = XQ[3] + XQ[2], WQ.normal.y = XQ[7] + XQ[6], WQ.normal.z = XQ[11] + XQ[10], WQ.d = XQ[15] + XQ[14], WQ.normalize()
      }
      static GetFarPlaneToRef(QQ, WQ) {
        const XQ = QQ.m;
        WQ.normal.x = XQ[3] - XQ[2], WQ.normal.y = XQ[7] - XQ[6], WQ.normal.z = XQ[11] - XQ[10], WQ.d = XQ[15] - XQ[14], WQ.normalize()
      }
      static GetLeftPlaneToRef(QQ, WQ) {
        const XQ = QQ.m;
        WQ.normal.x = XQ[3] + XQ[0], WQ.normal.y = XQ[7] + XQ[4], WQ.normal.z = XQ[11] + XQ[8], WQ.d = XQ[15] + XQ[12], WQ.normalize()
      }
      static GetRightPlaneToRef(QQ, WQ) {
        const XQ = QQ.m;
        WQ.normal.x = XQ[3] - XQ[0], WQ.normal.y = XQ[7] - XQ[4], WQ.normal.z = XQ[11] - XQ[8], WQ.d = XQ[15] - XQ[12], WQ.normalize()
      }
      static GetTopPlaneToRef(QQ, WQ) {
        const XQ = QQ.m;
        WQ.normal.x = XQ[3] - XQ[1], WQ.normal.y = XQ[7] - XQ[5], WQ.normal.z = XQ[11] - XQ[9], WQ.d = XQ[15] - XQ[13], WQ.normalize()
      }
      static GetBottomPlaneToRef(QQ, WQ) {
        const XQ = QQ.m;
        WQ.normal.x = XQ[3] + XQ[1], WQ.normal.y = XQ[7] + XQ[5], WQ.normal.z = XQ[11] + XQ[9], WQ.d = XQ[15] + XQ[13], WQ.normalize()
      }
      static GetPlanesToRef(QQ, WQ) {
        qQ.GetNearPlaneToRef(QQ, WQ[0]), qQ.GetFarPlaneToRef(QQ, WQ[1]), qQ.GetLeftPlaneToRef(QQ, WQ[2]), qQ.GetRightPlaneToRef(QQ, WQ[3]), qQ.GetTopPlaneToRef(QQ, WQ[4]), qQ.GetBottomPlaneToRef(QQ, WQ[5])
      }
      static IsPointInFrustum(QQ, WQ) {
        for (let XQ = 0; XQ < 6; XQ++)
          if (WQ[XQ].dotCoordinate(QQ) < 0) return !1;
        return !0
      }
    }
  },
  38047: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => qQ
    });
    var wQ = XQ(37370);
    class qQ {
      constructor(QQ, WQ, XQ, qQ) {
        this.normal = new wQ.s(QQ, WQ, XQ), this.d = qQ
      }
      awQ() {
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
        let WQ = 0;
        return 0 !== QQ && (WQ = 1 / QQ), this.normal.x *= WQ, this.normal.y *= WQ, this.normal.z *= WQ, this.d *= WQ, this
      }
      transform(QQ) {
        const WQ = qQ._TmpMatrix;
        QQ.invertToRef(WQ);
        const XQ = WQ.m,
          wQ = this.normal.x,
          TQ = this.normal.y,
          zQ = this.normal.z,
          sQ = this.d,
          FQ = wQ * XQ[0] + TQ * XQ[1] + zQ * XQ[2] + sQ * XQ[3],
          PQ = wQ * XQ[4] + TQ * XQ[5] + zQ * XQ[6] + sQ * XQ[7],
          gQ = wQ * XQ[8] + TQ * XQ[9] + zQ * XQ[10] + sQ * XQ[11],
          JQ = wQ * XQ[12] + TQ * XQ[13] + zQ * XQ[14] + sQ * XQ[15];
        return new qQ(FQ, PQ, gQ, JQ)
      }
      dotCoordinate(QQ) {
        return this.normal.x * QQ.x + this.normal.y * QQ.y + this.normal.z * QQ.z + this.d
      }
      copyFromPoints(QQ, WQ, XQ) {
        const wQ = WQ.x - QQ.x,
          qQ = WQ.y - QQ.y,
          TQ = WQ.z - QQ.z,
          zQ = XQ.x - QQ.x,
          sQ = XQ.y - QQ.y,
          FQ = XQ.z - QQ.z,
          PQ = qQ * FQ - TQ * sQ,
          gQ = TQ * zQ - wQ * FQ,
          JQ = wQ * sQ - qQ * zQ,
          rQ = Math.sqrt(PQ * PQ + gQ * gQ + JQ * JQ);
        let IQ;
        return IQ = 0 !== rQ ? 1 / rQ : 0, this.normal.x = PQ * IQ, this.normal.y = gQ * IQ, this.normal.z = JQ * IQ, this.d = -(this.normal.x * QQ.x + this.normal.y * QQ.y + this.normal.z * QQ.z), this
      }
      isFrontFacingTo(QQ, WQ) {
        return wQ.s.Dot(this.normal, QQ) <= WQ
      }
      signedDistanceTo(QQ) {
        return wQ.s.Dot(QQ, this.normal) + this.d
      }
      static FromArray(QQ) {
        return new qQ(QQ[0], QQ[1], QQ[2], QQ[3])
      }
      static FromPoints(QQ, WQ, XQ) {
        const wQ = new qQ(0, 0, 0, 0);
        return wQ.copyFromPoints(QQ, WQ, XQ), wQ
      }
      static FromPositionAndNormal(QQ, WQ) {
        const XQ = new qQ(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(QQ, WQ, XQ)
      }
      static FromPositionAndNormalToRef(QQ, WQ, XQ) {
        return XQ.normal.WH(WQ), XQ.normal.normalize(), XQ.d = -QQ.dot(XQ.normal), XQ
      }
      static SignedDistanceToPlaneFromPositionAndNormal(QQ, WQ, XQ) {
        const qQ = -(WQ.x * QQ.x + WQ.y * QQ.y + WQ.z * QQ.z);
        return wQ.s.Dot(XQ, WQ) + qQ
      }
    }
    qQ._TmpMatrix = wQ.e.Identity()
  },
  38377: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => wQ
    });
    class wQ {
      constructor(QQ, WQ, XQ, wQ) {
        this.x = QQ, this.y = WQ, this.width = XQ, this.height = wQ
      }
      toGlobal(QQ, WQ) {
        return new wQ(this.x * QQ, this.y * WQ, this.width * QQ, this.height * WQ)
      }
      toGlobalToRef(QQ, WQ, XQ) {
        return XQ.x = this.x * QQ, XQ.y = this.y * WQ, XQ.width = this.width * QQ, XQ.height = this.height * WQ, this
      }
      clone() {
        return new wQ(this.x, this.y, this.width, this.height)
      }
    }
  },
  38947: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => TQ
    });
    var wQ = XQ(38956);
    const qQ = (QQ, WQ, XQ) => QQ ? QQ.getClassName && "Mesh" === QQ.getClassName() ? null : !QQ.getClassName || "SubMesh" !== QQ.getClassName() && "PhysicsBody" !== QQ.getClassName() ? QQ.clone ? QQ.clone() : Array.isArray(QQ) ? QQ.slice() : XQ && "object" === typeof QQ ? {
      ...QQ
    } : null : QQ.clone(WQ) : null;
    class TQ {
      static DeepCopy(QQ, WQ, XQ, TQ) {
        let zQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const sQ = function(QQ) {
          const WQ = [];
          do {
            const XQ = Object.getOwnPropertyNames(QQ);
            for (const QQ of XQ) - 1 === WQ.indexOf(QQ) && WQ.push(QQ)
          } while (QQ = Object.getPrototypeOf(QQ));
          return WQ
        }(QQ);
        for (const PQ of sQ) {
          if ("_" === PQ[0] && (!TQ || -1 === TQ.indexOf(PQ))) continue;
          if (PQ.endsWith("Observable")) continue;
          if (XQ && -1 !== XQ.indexOf(PQ)) continue;
          const sQ = QQ[PQ],
            gQ = typeof sQ;
          if ("function" !== gQ) try {
            if ("object" === gQ)
              if (sQ instanceof Uint8Array) WQ[PQ] = Uint8Array.from(sQ);
              else if (sQ instanceof Array) {
              if (WQ[PQ] = [], sQ.length > 0)
                if ("object" == typeof sQ[0])
                  for (let QQ = 0; QQ < sQ.length; QQ++) {
                    const XQ = qQ(sQ[QQ], WQ, zQ); - 1 === WQ[PQ].indexOf(XQ) && WQ[PQ].push(XQ)
                  } else WQ[PQ] = sQ.slice(0)
            } else WQ[PQ] = qQ(sQ, WQ, zQ);
            else WQ[PQ] = sQ
          } catch (FQ) {
            wQ.b.Warn(FQ.message)
          }
        }
      }
    }
  },
  38191: (QQ, WQ, XQ) => {
    function wQ() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (QQ => {
        const WQ = 16 * Math.random() | 0;
        return ("x" === QQ ? WQ : 3 & WQ | 8).toString(16)
      }))
    }
    XQ.d(WQ, {
      d: () => wQ
    })
  },
  38956: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => wQ
    });
    class wQ {
      static _CheckLimit(QQ, WQ) {
        let XQ = wQ._LogLimitOutputs[QQ];
        return XQ ? XQ.current++ : (XQ = {
          limit: WQ,
          current: 1
        }, wQ._LogLimitOutputs[QQ] = XQ), XQ.current <= XQ.limit
      }
      static _GenerateLimitMessage(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const XQ = wQ._LogLimitOutputs[QQ];
        if (!XQ || !wQ.MessageLimitReached) return;
        const qQ = this._Levels[WQ];
        XQ.current === XQ.limit && wQ[qQ.name](wQ.MessageLimitReached.replace(/%LIMIT%/g, "" + XQ.limit).replace(/%TYPE%/g, qQ.name ?? ""))
      }
      static _AddLogEntry(QQ) {
        wQ._LogCache = QQ + wQ._LogCache, wQ.OnNewCacheEntry && wQ.OnNewCacheEntry(QQ)
      }
      static _FormatMessage(QQ) {
        const WQ = QQ => QQ < 10 ? "0" + QQ : "" + QQ,
          XQ = new Date;
        return "[" + WQ(XQ.getHours()) + ":" + WQ(XQ.getMinutes()) + ":" + WQ(XQ.getSeconds()) + "]: " + QQ
      }
      static _LogDisabled(QQ, WQ) {}
      static _LogEnabled() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          WQ = arguments.length > 1 ? arguments[1] : void 0,
          XQ = arguments.length > 2 ? arguments[2] : void 0;
        const qQ = Array.isArray(WQ) ? WQ[0] : WQ;
        if (void 0 !== XQ && !wQ._CheckLimit(qQ, XQ)) return;
        const TQ = wQ._FormatMessage(qQ),
          zQ = this._Levels[QQ],
          sQ = Array.isArray(WQ) ? WQ.slice(1) : [];
        zQ.logFunc && zQ.logFunc("BJS - " + TQ, ...sQ);
        const FQ = `<div style='color:${zQ.color}'>${TQ}</div><br>`;
        wQ._AddLogEntry(FQ), wQ._GenerateLimitMessage(qQ, QQ)
      }
      static get LogCache() {
        return wQ._LogCache
      }
      static ClearLogCache() {
        wQ._LogCache = "", wQ._LogLimitOutputs = {}, wQ.errorsCount = 0
      }
      static set LogLevels(QQ) {
        wQ.Log = wQ._LogDisabled, wQ.Warn = wQ._LogDisabled, wQ.Error = wQ._LogDisabled;
        const WQ = [wQ.MessageLogLevel, wQ.WarningLogLevel, wQ.ErrorLogLevel];
        for (const XQ of WQ)
          if ((QQ & XQ) === XQ) {
            const QQ = this._Levels[XQ];
            wQ[QQ.name] = wQ._LogEnabled.bind(wQ, XQ)
          }
      }
    }
    wQ.NoneLogLevel = 0, wQ.MessageLogLevel = 1, wQ.WarningLogLevel = 2, wQ.ErrorLogLevel = 4, wQ.AllLogLevel = 7, wQ.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", wQ._LogCache = "", wQ._LogLimitOutputs = {}, wQ._Levels = [{}, {
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
    }], wQ.errorsCount = 0, wQ.Log = wQ._LogEnabled.bind(wQ, wQ.MessageLogLevel), wQ.Warn = wQ._LogEnabled.bind(wQ, wQ.WarningLogLevel), wQ.Error = wQ._LogEnabled.bind(wQ, wQ.ErrorLogLevel)
  },
  61526: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      CreateScreenshot: () => uQ,
      CreateScreenshotAsync: () => LQ,
      CreateScreenshotForFrameGraphAsync: () => tQ,
      CreateScreenshotUsingRenderTarget: () => fQ,
      CreateScreenshotUsingRenderTargetAsync: () => SQ,
      CreateScreenshotWithResizeAsync: () => kQ,
      RegisterScreenshotTools: () => xQ,
      ScreenshotTools: () => eQ
    });
    var wQ = XQ(40724),
      qQ = XQ(42064),
      TQ = XQ(42041),
      zQ = XQ(40286),
      sQ = XQ(42050),
      FQ = XQ(37392),
      PQ = XQ(37370);
    class gQ extends sQ.i {
      static _GetDefines(QQ) {
        if (!QQ) return null;
        return QQ.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
      }
      _gatherImports(QQ, WQ) {
        QQ ? (this._webGPUReady = !0, WQ.push(Promise.all([XQ.e(383).then((() => XQ(61776))), XQ.e(384).then((() => XQ(61784)))]))) : WQ.push(Promise.all([XQ.e(385).then((() => XQ(61788))), XQ.e(386).then((() => XQ(61792)))]))
      }
      constructor(QQ) {
        const WQ = {
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: QQ,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || FQ.d.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          vertexShader: gQ.VertexUrl,
          fragmentShader: gQ.FragmentUrl,
          uniforms: gQ.Uniforms
        };
        super({
          ...WQ,
          defines: gQ._GetDefines(WQ.engine)
        }), this.texelSize = new PQ.q(0, 0)
      }
      bind() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.bind(QQ), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
      }
    }
    gQ.VertexUrl = "fxaa", gQ.FragmentUrl = "fxaa", gQ.Uniforms = ["texelSize"];
    class JQ extends TQ.b {
      getClassName() {
        return "FxaaPostProcess"
      }
      constructor(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          qQ = arguments.length > 3 ? arguments[3] : void 0,
          TQ = arguments.length > 4 ? arguments[4] : void 0,
          zQ = arguments.length > 5 ? arguments[5] : void 0,
          sQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const FQ = {
          uniforms: gQ.Uniforms,
          size: "number" === typeof WQ ? WQ : void 0,
          camera: XQ,
          samplingMode: qQ || wQ.g.BILINEAR_SAMPLINGMODE,
          engine: TQ,
          reusable: zQ,
          textureType: sQ,
          ...WQ
        };
        super(QQ, gQ.FragmentUrl, {
          effectWrapper: "number" !== typeof WQ && WQ.effectWrapper ? void 0 : new gQ(QQ, TQ, FQ),
          ...FQ
        }), this.onApplyObservable.add((QQ => {
          this._effectWrapper.texelSize = this.texelSize
        }))
      }
      static _Parse(QQ, WQ, XQ, wQ) {
        return zQ.b.Parse((() => new JQ(QQ.name, QQ.options, WQ, QQ.renderTargetSamplingMode, XQ.Uj(), QQ.reusable)), QQ, XQ, wQ)
      }
    }
    var rQ = XQ(38956),
      IQ = XQ(40357),
      jQ = XQ(42076),
      BQ = XQ(42062),
      yQ = XQ(40164);
    const VQ = 0;
    class DQ {
      constructor(QQ, WQ, XQ) {
        this.name = QQ, this._parentTask = WQ, this._context = XQ, this.disabled = !1
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
    class pQ extends DQ {
      static IsObjectListPass(QQ) {
        return void 0 !== QQ.setObjectList
      }
      get objectList() {
        return this._objectList
      }
      setObjectList(QQ) {
        this._objectList = QQ
      }
      constructor(QQ, WQ, XQ, wQ) {
        super(QQ, WQ, XQ), this._engine = wQ
      }
      _isValid() {
        const QQ = super._isValid();
        return QQ || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
      }
    }
    class GQ extends DQ {
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
      constructor(QQ, WQ, XQ, wQ) {
        super(QQ, WQ, XQ), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = wQ
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
            for (const WQ of QQ) this._dependencies.add(WQ);
          else this._dependencies.add(QQ)
      }
      collectDependencies(QQ) {
        const WQ = this._dependencies.keys();
        for (let XQ = WQ.next(); !0 !== XQ.done; XQ = WQ.next()) QQ.add(XQ.value);
        if (void 0 !== this._renderTarget)
          if (Array.isArray(this._renderTarget))
            for (const XQ of this._renderTarget) void 0 !== XQ && QQ.add(XQ);
          else QQ.add(this._renderTarget);
        void 0 !== this._renderTargetDepth && QQ.add(this._renderTargetDepth)
      }
      setOutputLayerAndFaceIndices(QQ) {
        const WQ = this.frameGraphRenderTarget.renderTargetWrapper;
        if (WQ)
          for (const XQ of QQ) WQ.setLayerAndFaceIndex(XQ.targetIndex, XQ.layerIndex, XQ.faceIndex)
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
    var UQ = XQ(37399);
    class bQ {
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
      constructor(QQ, WQ) {
        this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new UQ.b, this.onBeforeTaskExecute = new UQ.b, this.onAfterTaskExecute = new UQ.b, this.name = QQ, this._frameGraph = WQ, this._reset()
      }
      _reset() {
        for (const QQ of this._passes) QQ._dispose();
        for (const QQ of this._passesDisabled) QQ._dispose();
        this._passes.length = 0, this._passesDisabled.length = 0
      }
      _addPass(QQ, WQ) {
        WQ ? this._passesDisabled.push(QQ) : this._passes.push(QQ)
      }
      _checkTask() {
        let QQ, WQ = null,
          XQ = null;
        for (const sQ of this._passes) {
          const wQ = sQ._isValid();
          if (wQ) throw new Error(`Pass "${sQ.name}" is not valid. ${wQ}`);
          if (GQ.IsRenderPass(sQ)) {
            const QQ = Array.isArray(sQ.renderTarget) ? sQ.renderTarget : [sQ.renderTarget];
            WQ = [];
            for (const XQ of QQ) void 0 !== XQ && WQ.push(this._frameGraph.textureManager.getTextureFromHandle(XQ));
            XQ = void 0 !== sQ.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(sQ.renderTargetDepth) : null
          } else pQ.IsObjectListPass(sQ) && (QQ = sQ.objectList)
        }
        let wQ, qQ = null,
          TQ = [],
          zQ = null;
        for (const sQ of this._passesDisabled) {
          const QQ = sQ._isValid();
          if (QQ) throw new Error(`Pass "${sQ.name}" is not valid. ${QQ}`);
          if (GQ.IsRenderPass(sQ)) {
            const QQ = Array.isArray(sQ.renderTarget) ? sQ.renderTarget : [sQ.renderTarget];
            qQ = [];
            for (const WQ of QQ) void 0 !== WQ && qQ.push(this._frameGraph.textureManager.getTextureFromHandle(WQ));
            TQ = QQ, zQ = void 0 !== sQ.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(sQ.renderTargetDepth) : null
          } else pQ.IsObjectListPass(sQ) && (wQ = sQ.objectList)
        }
        if (this._passesDisabled.length > 0) {
          if (!this._checkSameRenderTarget(WQ, qQ)) {
            let QQ = !0;
            for (const WQ of TQ)
              if (void 0 !== WQ && !this._frameGraph.textureManager.isHistoryTexture(WQ)) {
                QQ = !1;
                break
              } if (!QQ) throw new Error(`The output texture of the task "${this.name}" is different when it is enabled or disabled.`)
          }
          if (XQ !== zQ && null !== zQ) throw new Error(`The output depth texture of the task "${this.name}" is different when it is enabled or disabled.`);
          if (QQ !== wQ && null !== wQ) throw new Error(`The output object list of the task "${this.name}" is different when it is enabled or disabled.`)
        }
      }
      _execute() {
        const QQ = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
        this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const WQ of QQ) WQ._execute()
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
      _checkSameRenderTarget(QQ, WQ) {
        if (null === QQ || null === WQ) return QQ === WQ;
        if (QQ.length !== WQ.length) return !1;
        for (let XQ = 0; XQ < QQ.length; XQ++)
          if (QQ[XQ] !== WQ[XQ]) return !1;
        return !0
      }
    }
    class vQ extends bQ {
      get alphaMode() {
        return this.postProcess.alphaMode
      }
      set alphaMode(QQ) {
        this.postProcess.alphaMode = QQ
      }
      get drawWrapper() {
        return this._postProcessDrawWrapper
      }
      constructor(QQ, WQ, XQ) {
        super(QQ, WQ), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = XQ, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture = this._frameGraph.textureManager.createDanglingHandle(), this.outputDepthAttachmentTexture = this._frameGraph.textureManager.createDanglingHandle()
      }
      isReady() {
        return this.postProcess.isReady()
      }
      getClassName() {
        return "FrameGraphPostProcessTask"
      }
      record() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          WQ = arguments.length > 1 ? arguments[1] : void 0,
          XQ = arguments.length > 2 ? arguments[2] : void 0;
        if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
        const wQ = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
        if (wQ && (wQ.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, wQ), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentTexture, this.depthAttachmentTexture), wQ) {
          const QQ = this._frameGraph.textureManager.getTextureAbsoluteDimensions(wQ);
          this._sourceWidth = QQ.width, this._sourceHeight = QQ.height
        }
        const qQ = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
        this._outputWidth = qQ.size.width, this._outputHeight = qQ.size.height;
        const TQ = this._frameGraph.addRenderPass(this.name);
        if (TQ.depthReadOnly = this.depthReadOnly, TQ.stencilReadOnly = this.stencilReadOnly, TQ.addDependencies(this.sourceTexture), TQ.setRenderTarget(this.outputTexture), TQ.setRenderTargetDepth(this.depthAttachmentTexture), TQ.setExecuteFunc((QQ => {
            QQ.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && QQ.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), WQ?.(QQ), this.viewport && QQ.setViewport(this.viewport), QQ.applyFullScreenEffect(this._postProcessDrawWrapper, (() => {
              void 0 !== this.sourceTexture && QQ.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), XQ?.(QQ), this.postProcess.bind()
            }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), QQ.restoreDefaultFramebuffer(), QQ.popDebugGroup()
          })), !QQ) {
          const QQ = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
          QQ.depthReadOnly = this.depthReadOnly, QQ.stencilReadOnly = this.stencilReadOnly, QQ.addDependencies(this.sourceTexture), QQ.setRenderTarget(this.outputTexture), QQ.setRenderTargetDepth(this.depthAttachmentTexture), QQ.setExecuteFunc((QQ => {
            void 0 !== this.sourceTexture && 0 === this.alphaMode && (this.viewport && QQ.setViewport(this.viewport), QQ.copyTexture(this.sourceTexture, void 0, void 0 !== this.viewport))
          }))
        }
        return TQ
      }
      dispose() {
        this.postProcess.dispose(), super.dispose()
      }
    }
    class dQ extends vQ {
      constructor(QQ, WQ, XQ) {
        super(QQ, WQ, XQ || new gQ(QQ, WQ.engine))
      }
      getClassName() {
        return "FrameGraphFXAATask"
      }
      record() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          WQ = arguments.length > 1 ? arguments[1] : void 0,
          XQ = arguments.length > 2 ? arguments[2] : void 0;
        const wQ = super.record(QQ, WQ, XQ);
        return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, wQ
      }
    }
    var HQ = XQ(42070);
    class aQ extends vQ {
      constructor(QQ, WQ, XQ) {
        super(QQ, WQ, XQ || new HQ.g(QQ, WQ.engine))
      }
      getClassName() {
        return "FrameGraphPassTask"
      }
    }
    var lQ = XQ(40355),
      hQ = XQ(40436),
      iQ = XQ(40402),
      cQ = XQ(40519),
      AQ = XQ(37546);
    class RQ {
      getRenderCamera(QQ) {
        if (this._renderCamera) return this._renderCamera;
        {
          let WQ;
          return WQ = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, QQ && WQ && WQ.isRigCamera ? WQ.rigParent : WQ
        }
      }
      setRenderCamera(QQ) {
        this._renderCamera = QQ
      }
      _getSharedGizmoLight() {
        return this._sharedGizmoLight || (this._sharedGizmoLight = new cQ.e("shared gizmo light", new PQ.s(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = AQ.b.Gray()), this._sharedGizmoLight
      }
      static get DefaultUtilityLayer() {
        return null == RQ._DefaultUtilityLayer ? RQ._CreateDefaultUtilityLayerFromScene(FQ.d.LastCreatedScene) : RQ._DefaultUtilityLayer
      }
      static _CreateDefaultUtilityLayerFromScene(QQ) {
        return RQ._DefaultUtilityLayer = new RQ(QQ), RQ._DefaultUtilityLayer.originalScene.yE.addOnce((() => {
          RQ._DefaultUtilityLayer = null
        })), RQ._DefaultUtilityLayer
      }
      static get DefaultKeepDepthUtilityLayer() {
        return null == RQ._DefaultKeepDepthUtilityLayer ? RQ._CreateDefaultKeepUtilityLayerFromScene(FQ.d.LastCreatedScene) : RQ._DefaultKeepDepthUtilityLayer
      }
      static _CreateDefaultKeepUtilityLayerFromScene(QQ) {
        return RQ._DefaultKeepDepthUtilityLayer = new RQ(QQ), RQ._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, RQ._DefaultKeepDepthUtilityLayer.originalScene.yE.addOnce((() => {
          RQ._DefaultKeepDepthUtilityLayer = null
        })), RQ._DefaultKeepDepthUtilityLayer
      }
      constructor(QQ) {
        let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.originalScene = QQ, this.handleEvents = WQ, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.processAllEvents = !1, this.pickingEnabled = !0, this.onPointerOutObservable = new UQ.b, this.utilityLayerScene = new lQ.h(QQ.Uj(), {
          virtual: !0,
          useFloatingOrigin: QQ.floatingOriginMode
        }), this.utilityLayerScene.useRightHandedSystem = QQ.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), WQ && (this._originalPointerObserver = QQ.onPrePointerObservable.add((WQ => {
          if (!this.utilityLayerScene.activeCamera) return;
          if (!this.pickingEnabled) return;
          if (!this.processAllEvents && WQ.type !== hQ.d.POINTERMOVE && WQ.type !== hQ.d.POINTERUP && WQ.type !== hQ.d.POINTERDOWN && WQ.type !== hQ.d.POINTERDOUBLETAP) return;
          this.utilityLayerScene.pointerX = QQ.pointerX, this.utilityLayerScene.pointerY = QQ.pointerY;
          const XQ = WQ.event;
          if (QQ.isPointerCaptured(XQ.pointerId)) return void(this._pointerCaptures[XQ.pointerId] = !1);
          const wQ = XQ => {
              let wQ;
              if (WQ.nearInteractionPickingInfo) wQ = WQ.nearInteractionPickingInfo.pickedMesh.sE() == XQ ? WQ.nearInteractionPickingInfo : new iQ.b;
              else if (XQ !== this.utilityLayerScene && WQ.originalPickingInfo) wQ = WQ.originalPickingInfo;
              else {
                let qQ = null;
                this._renderCamera && (qQ = XQ._activeCamera, XQ._activeCamera = this._renderCamera, WQ.ray = null), wQ = WQ.ray ? XQ.pickWithRay(WQ.ray) : XQ.tr(QQ.pointerX, QQ.pointerY), qQ && (XQ._activeCamera = qQ)
              }
              return wQ
            },
            qQ = wQ(this.utilityLayerScene);
          if (!WQ.ray && qQ && (WQ.ray = qQ.ray), WQ.originalPickingInfo?.aimTransform && qQ && (qQ.aimTransform = WQ.originalPickingInfo.aimTransform, qQ.gripTransform = WQ.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(WQ), this.onlyCheckPointerDownEvents && WQ.type != hQ.d.POINTERDOWN) return WQ.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new hQ.g(WQ.type, WQ.event, qQ), WQ.type), void(WQ.type === hQ.d.POINTERUP && this._pointerCaptures[XQ.pointerId] && (this._pointerCaptures[XQ.pointerId] = !1));
          if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) qQ && qQ.hit && (WQ.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new hQ.g(WQ.type, WQ.event, qQ), WQ.type), WQ.skipOnPointerObservable = !0);
          else {
            const XQ = wQ(QQ),
              TQ = WQ.event;
            XQ && qQ && (0 === qQ.distance && XQ.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(XQ.pickedMesh) ? (this._notifyObservers(WQ, XQ, TQ), WQ.skipOnPointerObservable = !0) : WQ.type === hQ.d.POINTERDOWN ? (this._pointerCaptures[TQ.pointerId] = !0, this._notifyObservers(WQ, XQ, TQ)) : WQ.type !== hQ.d.POINTERMOVE && WQ.type !== hQ.d.POINTERUP || (this._lastPointerEvents[TQ.pointerId] && (this.onPointerOutObservable.notifyObservers(TQ.pointerId), delete this._lastPointerEvents[TQ.pointerId]), this._notifyObservers(WQ, XQ, TQ)) : !this._pointerCaptures[TQ.pointerId] && (qQ.distance < XQ.distance || 0 === XQ.distance) ? (this._notifyObservers(WQ, qQ, TQ), WQ.skipOnPointerObservable || (WQ.skipOnPointerObservable = qQ.distance > 0)) : !this._pointerCaptures[TQ.pointerId] && qQ.distance >= XQ.distance && (this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(XQ.pickedMesh) ? (this._notifyObservers(WQ, XQ, TQ), WQ.skipOnPointerObservable = !0) : (WQ.type !== hQ.d.POINTERMOVE && WQ.type !== hQ.d.POINTERUP || this._lastPointerEvents[TQ.pointerId] && (this.onPointerOutObservable.notifyObservers(TQ.pointerId), delete this._lastPointerEvents[TQ.pointerId]), this._notifyObservers(WQ, qQ, TQ))), WQ.type === hQ.d.POINTERUP && this._pointerCaptures[TQ.pointerId] && (this._pointerCaptures[TQ.pointerId] = !1))
          }
        })), this._originalPointerObserver && QQ.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, XQ || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((QQ => {
          this.shouldRender && QQ == this.getRenderCamera() && this.render()
        }))), this._sceneDisposeObserver = this.originalScene.yE.add((() => {
          this.dispose()
        })), this._updateCamera()
      }
      _notifyObservers(QQ, WQ, XQ) {
        QQ.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new hQ.g(QQ.type, QQ.event, WQ), QQ.type), this._lastPointerEvents[XQ.pointerId] = !0)
      }
      render() {
        if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
          const QQ = this.utilityLayerScene.activeCamera.sE(),
            WQ = this.utilityLayerScene.activeCamera;
          WQ._scene = this.utilityLayerScene, WQ.leftCamera && (WQ.leftCamera._scene = this.utilityLayerScene), WQ.rightCamera && (WQ.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), WQ._scene = QQ, WQ.leftCamera && (WQ.leftCamera._scene = QQ), WQ.rightCamera && (WQ.rightCamera._scene = QQ)
        }
      }
      dispose() {
        this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.yE.remove(this._sceneDisposeObserver), this._originalPointerObserver && this.originalScene.onPrePointerObservable.remove(this._originalPointerObserver), this.utilityLayerScene.dispose()
      }
      _updateCamera() {
        this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
      }
    }
    RQ._DefaultUtilityLayer = null, RQ._DefaultKeepDepthUtilityLayer = null;
    const EQ = {
      FindMainCamera: function(QQ) {
        return QQ.findMainCamera()
      },
      FindMainObjectRenderer: function(QQ) {
        return QQ.findMainObjectRenderer()
      },
      CreateUtilityLayerRenderer: function(QQ) {
        let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const XQ = QQ.cB,
          wQ = new RQ(XQ, WQ, !0);
        wQ.utilityLayerScene.activeCamera = XQ.activeCamera;
        let qQ = EQ.FindMainCamera(XQ.frameGraph);
        !qQ && XQ.cameras.length > 0 && (qQ = XQ.cameras[0]), qQ && (wQ.setRenderCamera(qQ), wQ.utilityLayerScene.activeCamera = qQ);
        const TQ = XQ.onAfterRenderObservable.add((() => {
          wQ.render()
        }));
        return wQ.utilityLayerScene.yE.addOnce((() => {
          XQ.onAfterRenderObservable.remove(TQ)
        })), wQ
      }
    };
    let CQ = null;

    function uQ(QQ, WQ, XQ, wQ) {
      let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        TQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        zQ = arguments.length > 6 ? arguments[6] : void 0,
        sQ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        FQ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
      const {
        height: PQ,
        width: gQ
      } = oQ(QQ, WQ, XQ);
      if (!PQ || !gQ) return void rQ.b.Error("Invalid 'size' parameter !");
      const JQ = WQ.sE();
      let jQ = JQ.activeCamera !== WQ;
      if (JQ.frameGraph) {
        const QQ = EQ.FindMainObjectRenderer(JQ.frameGraph);
        QQ && (jQ = QQ.camera !== WQ)
      }
      jQ ? fQ(QQ, WQ, XQ, (QQ => {
        if (TQ) {
          const WQ = new Blob([QQ]);
          IQ.g.DownloadBlob(WQ), wQ && wQ("")
        } else wQ && wQ(QQ)
      }), qQ, 1, QQ.getCreationOptions().antialias, void 0, void 0, void 0, void 0, zQ) : QQ.onEndFrameObservable.addOnce((() => {
        CQ || (CQ = document.createElement("canvas")), CQ.width = gQ, CQ.height = PQ;
        const WQ = CQ.getContext("2d"),
          XQ = QQ.getRenderingCanvas();
        if (!WQ || !XQ) return void rQ.b.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
        const jQ = XQ.width,
          BQ = XQ.height,
          yQ = CQ.width,
          VQ = CQ.height,
          DQ = yQ / jQ,
          pQ = VQ / BQ,
          GQ = sQ ? Math.max(DQ, pQ) : Math.min(DQ, pQ),
          UQ = jQ * GQ,
          bQ = BQ * GQ,
          vQ = (yQ - UQ) / 2,
          dQ = (VQ - bQ) / 2;
        WQ.save(), WQ.fillStyle = FQ ? JQ.clearColor.toHexString() : "rgba(0, 0, 0, 0)", WQ.fillRect(0, 0, gQ, PQ), WQ.restore(), WQ.drawImage(XQ, 0, 0, jQ, BQ, vQ, dQ, UQ, bQ), TQ ? (IQ.g.EncodeScreenshotCanvasData(CQ, void 0, qQ, void 0, zQ), wQ && wQ("")) : IQ.g.EncodeScreenshotCanvasData(CQ, wQ, qQ, void 0, zQ)
      }))
    }
    async function LQ(QQ, WQ, XQ) {
      let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        qQ = arguments.length > 4 ? arguments[4] : void 0,
        TQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        zQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        sQ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      return await new Promise(((FQ, PQ) => {
        uQ(QQ, WQ, XQ, (QQ => {
          "undefined" !== typeof QQ ? FQ(QQ) : PQ(new Error("Data is undefined"))
        }), wQ, sQ, qQ, TQ, zQ)
      }))
    }
    async function kQ(QQ, WQ, XQ, wQ) {
      let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        TQ = arguments.length > 5 ? arguments[5] : void 0,
        zQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return await new Promise((sQ => {
        uQ(QQ, WQ, {
          width: XQ,
          height: wQ
        }, (() => {
          sQ()
        }), qQ, !0, TQ, zQ)
      }))
    }

    function fQ(QQ, WQ, TQ, zQ) {
      let sQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        FQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
        PQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        gQ = arguments.length > 7 ? arguments[7] : void 0,
        IQ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        VQ = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        DQ = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
        pQ = arguments.length > 11 ? arguments[11] : void 0,
        GQ = arguments.length > 12 ? arguments[12] : void 0,
        UQ = arguments.length > 13 ? arguments[13] : void 0,
        bQ = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
        vQ = arguments.length > 15 ? arguments[15] : void 0;
      const dQ = WQ.sE();
      if (dQ.frameGraph) return void tQ(dQ.frameGraph, WQ, TQ, sQ, FQ, PQ, gQ, pQ, UQ, !zQ).then((QQ => {
        zQ && zQ(QQ)
      }));
      const {
        height: HQ,
        width: aQ,
        finalWidth: lQ,
        finalHeight: hQ
      } = oQ(QQ, WQ, TQ), iQ = {
        width: aQ,
        height: HQ
      };
      if (!HQ || !aQ) return void rQ.b.Error("Invalid 'size' parameter !");
      QQ.skipFrameRender = !0;
      const cQ = QQ.getRenderWidth,
        AQ = QQ.getRenderHeight;
      QQ.getRenderWidth = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && QQ._currentRenderTarget ? QQ._currentRenderTarget.width : aQ
      }, QQ.getRenderHeight = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && QQ._currentRenderTarget ? QQ._currentRenderTarget.height : HQ
      }, QQ.onResizeObservable.hasObservers() && QQ.onResizeObservable.notifyObservers(QQ);
      const RQ = new qQ.c("screenShot", iQ, dQ, !1, !1, 0, !1, wQ.g.BILINEAR_SAMPLINGMODE, void 0, VQ, void 0, void 0, void 0, FQ);
      RQ.renderList = dQ.meshes.slice(), RQ.samples = FQ, RQ.renderSprites = IQ, RQ.activeCamera = WQ, RQ.forceLayerMaskCheck = DQ, GQ?.(RQ);
      const EQ = UQ || jQ.DumpData,
        CQ = () => {
          dQ.incrementRenderId(), dQ.resetCachedMaterial(), (0, yQ.e)((() => RQ.isReadyForRendering() && WQ.isReady(!0)), (() => {
            QQ.onEndFrameObservable.addOnce((() => {
              lQ === aQ && hQ === HQ ? RQ.readPixels(void 0, void 0, void 0, !1).then((QQ => {
                EQ(aQ, HQ, QQ, zQ, sQ, gQ, !0, void 0, pQ), RQ.dispose()
              })) : (QQ.isWebGPU ? XQ.e(379).then((() => XQ(61713))) : XQ.e(380).then((() => XQ(61717)))).then((async () => await (0, BQ.b)("pass", RQ.getInternalTexture(), dQ, void 0, void 0, void 0, lQ, hQ).then((WQ => {
                QQ._readTexturePixels(WQ, lQ, hQ, -1, 0, null, !0, !1, 0, 0).then((QQ => {
                  EQ(lQ, hQ, QQ, zQ, sQ, gQ, !0, void 0, pQ), WQ.dispose()
                }))
              }))))
            })), dQ.incrementRenderId(), dQ.resetCachedMaterial();
            const wQ = dQ.activeCamera,
              qQ = dQ.activeCameras,
              TQ = WQ.outputRenderTarget,
              FQ = dQ.spritesEnabled;
            dQ.activeCamera = WQ, dQ.activeCameras = null, WQ.outputRenderTarget = RQ, dQ.spritesEnabled = IQ;
            const PQ = dQ.meshes;
            dQ.meshes = RQ.renderList || dQ.meshes;
            try {
              dQ.render()
            } finally {
              dQ.activeCamera = wQ, dQ.activeCameras = qQ, WQ.outputRenderTarget = TQ, dQ.spritesEnabled = FQ, dQ.meshes = PQ, QQ.getRenderWidth = cQ, QQ.getRenderHeight = AQ, QQ.onResizeObservable.hasObservers() && QQ.onResizeObservable.notifyObservers(QQ), WQ.getProjectionMatrix(!0), QQ.skipFrameRender = !1
            }
          }), (() => {
            QQ.skipFrameRender = !1, QQ.getRenderWidth = cQ, QQ.getRenderHeight = AQ, vQ?.()
          }), void 0, bQ)
        };
      if (PQ) {
        const QQ = new JQ("antialiasing", 1, dQ.activeCamera);
        RQ.addPostProcess(QQ), QQ.autoClear = !0, QQ.onEffectCreatedObservable.addOnce((QQ => {
          QQ.isReady() ? CQ() : QQ.onCompiled = () => {
            CQ()
          }
        }))
      } else CQ()
    }
    async function SQ(QQ, WQ, XQ) {
      let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        TQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        zQ = arguments.length > 6 ? arguments[6] : void 0,
        sQ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        FQ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        PQ = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
        gQ = arguments.length > 10 ? arguments[10] : void 0,
        JQ = arguments.length > 11 ? arguments[11] : void 0,
        rQ = arguments.length > 12 ? arguments[12] : void 0;
      return await new Promise(((IQ, jQ) => {
        fQ(QQ, WQ, XQ, (QQ => {
          "undefined" !== typeof QQ ? IQ(QQ) : jQ(new Error("Data is undefined"))
        }), wQ, qQ, TQ, zQ, sQ, FQ, PQ, gQ, JQ, rQ)
      }))
    }
    async function tQ(QQ, WQ, XQ) {
      let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        TQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        zQ = arguments.length > 6 ? arguments[6] : void 0,
        sQ = arguments.length > 7 ? arguments[7] : void 0,
        FQ = arguments.length > 8 ? arguments[8] : void 0,
        PQ = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        gQ = arguments.length > 10 ? arguments[10] : void 0;
      const JQ = QQ.engine,
        rQ = QQ.textureManager,
        {
          height: IQ,
          width: BQ,
          finalWidth: yQ,
          finalHeight: DQ
        } = oQ(JQ, WQ, XQ),
        pQ = {
          width: BQ,
          height: IQ
        },
        GQ = FQ || jQ.DumpData,
        UQ = QQ.tasks,
        bQ = UQ.length,
        vQ = QQ.pausedExecution,
        HQ = JQ.getCaps().parallelShaderCompile;
      rQ.setBackBufferTextures(0, 0, {
        size: pQ,
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
        size: pQ,
        options: {
          createMipMaps: !1,
          samples: qQ,
          types: [0],
          formats: [JQ.isStencilEnable ? 13 : 14],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot depth"]
        },
        sizeIsPercentage: !1
      });
      let lQ = VQ;
      if (TQ) {
        const WQ = new dQ("fxaa", QQ);
        WQ.sourceTexture = lQ, lQ = WQ.outputTexture, QQ.addTask(WQ)
      }
      if (yQ !== BQ || DQ !== IQ) {
        const WQ = new aQ("pass", QQ);
        WQ.sourceTexture = lQ, WQ.targetTexture = QQ.textureManager.createRenderTargetTexture("pass_output", {
          size: {
            width: yQ,
            height: DQ
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
        }), lQ = WQ.outputTexture, QQ.addTask(WQ)
      }
      const hQ = EQ.FindMainObjectRenderer(QQ);
      let iQ = null;
      hQ && (iQ = hQ.camera, hQ.camera = WQ), JQ.getCaps().parallelShaderCompile = void 0, await QQ.buildAsync();
      const cQ = gQ ?? (rQ.hasHistoryTextures ? 32 : 1);
      for (let jQ = 0; jQ < cQ; ++jQ) QQ.execute();
      QQ.pausedExecution = !0, JQ.getCaps().parallelShaderCompile = HQ;
      for (let jQ = bQ; jQ < UQ.length; ++jQ) QQ.tasks[jQ].dispose();
      QQ.tasks.length = bQ, hQ && iQ && (hQ.camera = iQ);
      const AQ = QQ.textureManager.getTextureFromHandle(lQ);
      return AQ.incrementReferences(), rQ.resetBackBufferTextures(), await QQ.buildAsync(), QQ.pausedExecution = vQ, new Promise((QQ => {
        JQ._readTexturePixels(AQ, yQ, DQ, -1, 0, null, !0, !1, 0, 0).then((async WQ => {
          AQ.dispose(), GQ(yQ, DQ, WQ, PQ ? void 0 : WQ => QQ(WQ), wQ, zQ, !0, void 0, sQ), PQ && QQ(null)
        }))
      }))
    }

    function oQ(QQ, WQ, XQ) {
      let wQ = 0,
        qQ = 0,
        TQ = 0,
        zQ = 0;
      if ("object" === typeof XQ) {
        const sQ = XQ.precision ? Math.abs(XQ.precision) : 1;
        XQ.width && XQ.height ? (wQ = XQ.height * sQ, qQ = XQ.width * sQ) : XQ.width && !XQ.height ? (qQ = XQ.width * sQ, wQ = Math.round(qQ / QQ.getAspectRatio(WQ))) : XQ.height && !XQ.width ? (wQ = XQ.height * sQ, qQ = Math.round(wQ * QQ.getAspectRatio(WQ))) : (qQ = Math.round(QQ.getRenderWidth() * sQ), wQ = Math.round(qQ / QQ.getAspectRatio(WQ))), XQ.finalWidth && XQ.finalHeight ? (zQ = XQ.finalHeight, TQ = XQ.finalWidth) : XQ.finalWidth && !XQ.finalHeight ? (TQ = XQ.finalWidth, zQ = Math.round(TQ / QQ.getAspectRatio(WQ))) : XQ.finalHeight && !XQ.finalWidth ? (zQ = XQ.finalHeight, TQ = Math.round(zQ * QQ.getAspectRatio(WQ))) : (TQ = qQ, zQ = wQ)
      } else isNaN(XQ) || (wQ = XQ, qQ = XQ, TQ = XQ, zQ = XQ);
      return qQ && (qQ = Math.floor(qQ)), wQ && (wQ = Math.floor(wQ)), TQ && (TQ = Math.floor(TQ)), zQ && (zQ = Math.floor(zQ)), {
        height: 0 | wQ,
        width: 0 | qQ,
        finalWidth: 0 | TQ,
        finalHeight: 0 | zQ
      }
    }
    const eQ = {
      CreateScreenshot: uQ,
      CreateScreenshotAsync: LQ,
      CreateScreenshotWithResizeAsync: kQ,
      CreateScreenshotUsingRenderTarget: fQ,
      CreateScreenshotUsingRenderTargetAsync: SQ,
      CreateScreenshotForFrameGraphAsync: tQ
    };
    let nQ = !1;

    function xQ() {
      if (nQ) return;
      nQ = !0;
      IQ.g.CreateScreenshot = uQ, IQ.g.CreateScreenshotAsync = LQ, IQ.g.CreateScreenshotUsingRenderTarget = fQ, IQ.g.CreateScreenshotUsingRenderTargetAsync = SQ
    }
    xQ()
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);