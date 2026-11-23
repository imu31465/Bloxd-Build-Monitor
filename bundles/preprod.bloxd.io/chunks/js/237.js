export const id = 237;
export const ids = [237, 238];
export const modules = {
  40078: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => FC,
      e: () => NC
    });
    var QC = ZC(39811),
      wC = ZC(39818),
      bC = ZC(36963),
      nC = ZC(37142),
      fC = ZC(40084),
      oC = ZC(40046),
      qC = ZC(37002);
    let FC = (() => {
        var CC;
        let zC, ZC, oC = fC.c,
          qC = [],
          FC = [],
          WC = [],
          NC = [];
        return CC = class extends oC {
          constructor(CC, zC, ZC, wC) {
            super(CC, ZC, wC), this.groundColor = (0, QC.n)(this, qC, new nC.e(0, 0, 0)), this.direction = ((0, QC.n)(this, FC), (0, QC.n)(this, WC, void 0)), (0, QC.n)(this, NC), this.direction = zC || bC.r.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(CC) {
            return this.direction = bC.r.Normalize(CC.subtract(bC.r.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(CC, zC) {
            const ZC = bC.r.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", ZC.x, ZC.y, ZC.z, 0, zC), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), zC), this
          }
          transferToNodeMaterialEffect(CC, zC) {
            const ZC = bC.r.Normalize(this.direction);
            return CC.setFloat3(zC, ZC.x, ZC.y, ZC.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = bC.b.Identity()), this._worldMatrix
          }
          getTypeID() {
            return fC.c.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(CC, zC) {
            CC["HEMILIGHT" + zC] = !0
          }
        }, (() => {
          const bC = "function" === typeof Symbol && Symbol.metadata ? Object.create(oC[Symbol.metadata] ?? null) : void 0;
          zC = [(0, wC.n)()], ZC = [(0, wC.J)()], (0, QC.j)(null, null, zC, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: CC => "groundColor" in CC,
              get: CC => CC.groundColor,
              set: (CC, zC) => {
                CC.groundColor = zC
              }
            },
            metadata: bC
          }, qC, FC), (0, QC.j)(null, null, ZC, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: CC => "direction" in CC,
              get: CC => CC.direction,
              set: (CC, zC) => {
                CC.direction = zC
              }
            },
            metadata: bC
          }, WC, NC), bC && Object.defineProperty(CC, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: bC
          })
        })(), CC
      })(),
      WC = !1;

    function NC() {
      WC || (WC = !0, oC.d.AddNodeConstructor("Light_Type_3", ((CC, zC) => () => new FC(CC, bC.r.Zero(), zC))), (0, qC.d)("BABYLON.HemisphericLight", FC))
    }
  },
  37590: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => wC
    });
    var QC = ZC(37596);
    class wC {
      static GetPlanes(CC) {
        const zC = [];
        for (let ZC = 0; ZC < 6; ZC++) zC.push(new QC.d(0, 0, 0, 0));
        return wC.GetPlanesToRef(CC, zC), zC
      }
      static GetNearPlaneToRef(CC, zC) {
        const ZC = CC.m;
        zC.normal.x = ZC[3] + ZC[2], zC.normal.y = ZC[7] + ZC[6], zC.normal.z = ZC[11] + ZC[10], zC.d = ZC[15] + ZC[14], zC.normalize()
      }
      static GetFarPlaneToRef(CC, zC) {
        const ZC = CC.m;
        zC.normal.x = ZC[3] - ZC[2], zC.normal.y = ZC[7] - ZC[6], zC.normal.z = ZC[11] - ZC[10], zC.d = ZC[15] - ZC[14], zC.normalize()
      }
      static GetLeftPlaneToRef(CC, zC) {
        const ZC = CC.m;
        zC.normal.x = ZC[3] + ZC[0], zC.normal.y = ZC[7] + ZC[4], zC.normal.z = ZC[11] + ZC[8], zC.d = ZC[15] + ZC[12], zC.normalize()
      }
      static GetRightPlaneToRef(CC, zC) {
        const ZC = CC.m;
        zC.normal.x = ZC[3] - ZC[0], zC.normal.y = ZC[7] - ZC[4], zC.normal.z = ZC[11] - ZC[8], zC.d = ZC[15] - ZC[12], zC.normalize()
      }
      static GetTopPlaneToRef(CC, zC) {
        const ZC = CC.m;
        zC.normal.x = ZC[3] - ZC[1], zC.normal.y = ZC[7] - ZC[5], zC.normal.z = ZC[11] - ZC[9], zC.d = ZC[15] - ZC[13], zC.normalize()
      }
      static GetBottomPlaneToRef(CC, zC) {
        const ZC = CC.m;
        zC.normal.x = ZC[3] + ZC[1], zC.normal.y = ZC[7] + ZC[5], zC.normal.z = ZC[11] + ZC[9], zC.d = ZC[15] + ZC[13], zC.normalize()
      }
      static GetPlanesToRef(CC, zC) {
        wC.GetNearPlaneToRef(CC, zC[0]), wC.GetFarPlaneToRef(CC, zC[1]), wC.GetLeftPlaneToRef(CC, zC[2]), wC.GetRightPlaneToRef(CC, zC[3]), wC.GetTopPlaneToRef(CC, zC[4]), wC.GetBottomPlaneToRef(CC, zC[5])
      }
      static IsPointInFrustum(CC, zC) {
        for (let ZC = 0; ZC < 6; ZC++)
          if (zC[ZC].dotCoordinate(CC) < 0) return !1;
        return !0
      }
    }
  },
  37596: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => wC
    });
    var QC = ZC(36963);
    class wC {
      constructor(CC, zC, ZC, wC) {
        this.normal = new QC.r(CC, zC, ZC), this.d = wC
      }
      VZC() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new wC(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let CC = this.normal.getHashCode();
        return CC = 397 * CC ^ this.d, CC
      }
      normalize() {
        const CC = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let zC = 0;
        return 0 !== CC && (zC = 1 / CC), this.normal.x *= zC, this.normal.y *= zC, this.normal.z *= zC, this.d *= zC, this
      }
      transform(CC) {
        const zC = wC._TmpMatrix;
        CC.invertToRef(zC);
        const ZC = zC.m,
          QC = this.normal.x,
          bC = this.normal.y,
          nC = this.normal.z,
          fC = this.d,
          oC = QC * ZC[0] + bC * ZC[1] + nC * ZC[2] + fC * ZC[3],
          qC = QC * ZC[4] + bC * ZC[5] + nC * ZC[6] + fC * ZC[7],
          FC = QC * ZC[8] + bC * ZC[9] + nC * ZC[10] + fC * ZC[11],
          WC = QC * ZC[12] + bC * ZC[13] + nC * ZC[14] + fC * ZC[15];
        return new wC(oC, qC, FC, WC)
      }
      dotCoordinate(CC) {
        return this.normal.x * CC.x + this.normal.y * CC.y + this.normal.z * CC.z + this.d
      }
      copyFromPoints(CC, zC, ZC) {
        const QC = zC.x - CC.x,
          wC = zC.y - CC.y,
          bC = zC.z - CC.z,
          nC = ZC.x - CC.x,
          fC = ZC.y - CC.y,
          oC = ZC.z - CC.z,
          qC = wC * oC - bC * fC,
          FC = bC * nC - QC * oC,
          WC = QC * fC - wC * nC,
          NC = Math.sqrt(qC * qC + FC * FC + WC * WC);
        let MC;
        return MC = 0 !== NC ? 1 / NC : 0, this.normal.x = qC * MC, this.normal.y = FC * MC, this.normal.z = WC * MC, this.d = -(this.normal.x * CC.x + this.normal.y * CC.y + this.normal.z * CC.z), this
      }
      isFrontFacingTo(CC, zC) {
        return QC.r.Dot(this.normal, CC) <= zC
      }
      signedDistanceTo(CC) {
        return QC.r.Dot(CC, this.normal) + this.d
      }
      static FromArray(CC) {
        return new wC(CC[0], CC[1], CC[2], CC[3])
      }
      static FromPoints(CC, zC, ZC) {
        const QC = new wC(0, 0, 0, 0);
        return QC.copyFromPoints(CC, zC, ZC), QC
      }
      static FromPositionAndNormal(CC, zC) {
        const ZC = new wC(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(CC, zC, ZC)
      }
      static FromPositionAndNormalToRef(CC, zC, ZC) {
        return ZC.normal.Av(zC), ZC.normal.normalize(), ZC.d = -CC.dot(ZC.normal), ZC
      }
      static SignedDistanceToPlaneFromPositionAndNormal(CC, zC, ZC) {
        const wC = -(zC.x * CC.x + zC.y * CC.y + zC.z * CC.z);
        return QC.r.Dot(ZC, zC) + wC
      }
    }
    wC._TmpMatrix = QC.b.Identity()
  },
  37931: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => QC
    });
    class QC {
      constructor(CC, zC, ZC, QC) {
        this.x = CC, this.y = zC, this.width = ZC, this.height = QC
      }
      toGlobal(CC, zC) {
        return new QC(this.x * CC, this.y * zC, this.width * CC, this.height * zC)
      }
      toGlobalToRef(CC, zC, ZC) {
        return ZC.x = this.x * CC, ZC.y = this.y * zC, ZC.width = this.width * CC, ZC.height = this.height * zC, this
      }
      clone() {
        return new QC(this.x, this.y, this.width, this.height)
      }
    }
  },
  38501: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => bC
    });
    var QC = ZC(38507);
    const wC = (CC, zC, ZC) => CC ? CC.getClassName && "Mesh" === CC.getClassName() ? null : !CC.getClassName || "SubMesh" !== CC.getClassName() && "PhysicsBody" !== CC.getClassName() ? CC.clone ? CC.clone() : Array.isArray(CC) ? CC.slice() : ZC && "object" === typeof CC ? {
      ...CC
    } : null : CC.clone(zC) : null;
    class bC {
      static DeepCopy(CC, zC, ZC, bC) {
        let nC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const fC = function(CC) {
          const zC = [];
          do {
            const ZC = Object.getOwnPropertyNames(CC);
            for (const CC of ZC) - 1 === zC.indexOf(CC) && zC.push(CC)
          } while (CC = Object.getPrototypeOf(CC));
          return zC
        }(CC);
        for (const qC of fC) {
          if ("_" === qC[0] && (!bC || -1 === bC.indexOf(qC))) continue;
          if (qC.endsWith("Observable")) continue;
          if (ZC && -1 !== ZC.indexOf(qC)) continue;
          const fC = CC[qC],
            FC = typeof fC;
          if ("function" !== FC) try {
            if ("object" === FC)
              if (fC instanceof Uint8Array) zC[qC] = Uint8Array.from(fC);
              else if (fC instanceof Array) {
              if (zC[qC] = [], fC.length > 0)
                if ("object" == typeof fC[0])
                  for (let CC = 0; CC < fC.length; CC++) {
                    const ZC = wC(fC[CC], zC, nC); - 1 === zC[qC].indexOf(ZC) && zC[qC].push(ZC)
                  } else zC[qC] = fC.slice(0)
            } else zC[qC] = wC(fC, zC, nC);
            else zC[qC] = fC
          } catch (oC) {
            QC.c.Warn(oC.message)
          }
        }
      }
    }
  },
  37731: (CC, zC, ZC) => {
    function QC() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (CC => {
        const zC = 16 * Math.random() | 0;
        return ("x" === CC ? zC : 3 & zC | 8).toString(16)
      }))
    }
    ZC.d(zC, {
      b: () => QC
    })
  },
  38507: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => QC
    });
    class QC {
      static _CheckLimit(CC, zC) {
        let ZC = QC._LogLimitOutputs[CC];
        return ZC ? ZC.current++ : (ZC = {
          limit: zC,
          current: 1
        }, QC._LogLimitOutputs[CC] = ZC), ZC.current <= ZC.limit
      }
      static _GenerateLimitMessage(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const ZC = QC._LogLimitOutputs[CC];
        if (!ZC || !QC.MessageLimitReached) return;
        const wC = this._Levels[zC];
        ZC.current === ZC.limit && QC[wC.name](QC.MessageLimitReached.replace(/%LIMIT%/g, "" + ZC.limit).replace(/%TYPE%/g, wC.name ?? ""))
      }
      static _AddLogEntry(CC) {
        QC._LogCache = CC + QC._LogCache, QC.OnNewCacheEntry && QC.OnNewCacheEntry(CC)
      }
      static _FormatMessage(CC) {
        const zC = CC => CC < 10 ? "0" + CC : "" + CC,
          ZC = new Date;
        return "[" + zC(ZC.getHours()) + ":" + zC(ZC.getMinutes()) + ":" + zC(ZC.getSeconds()) + "]: " + CC
      }
      static _LogDisabled(CC, zC) {}
      static _LogEnabled() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          zC = arguments.length > 1 ? arguments[1] : void 0,
          ZC = arguments.length > 2 ? arguments[2] : void 0;
        const wC = Array.isArray(zC) ? zC[0] : zC;
        if (void 0 !== ZC && !QC._CheckLimit(wC, ZC)) return;
        const bC = QC._FormatMessage(wC),
          nC = this._Levels[CC],
          fC = Array.isArray(zC) ? zC.slice(1) : [];
        nC.logFunc && nC.logFunc("BJS - " + bC, ...fC);
        const oC = `<div style='color:${nC.color}'>${bC}</div><br>`;
        QC._AddLogEntry(oC), QC._GenerateLimitMessage(wC, CC)
      }
      static get LogCache() {
        return QC._LogCache
      }
      static ClearLogCache() {
        QC._LogCache = "", QC._LogLimitOutputs = {}, QC.errorsCount = 0
      }
      static set LogLevels(CC) {
        QC.Log = QC._LogDisabled, QC.Warn = QC._LogDisabled, QC.Error = QC._LogDisabled;
        const zC = [QC.MessageLogLevel, QC.WarningLogLevel, QC.ErrorLogLevel];
        for (const ZC of zC)
          if ((CC & ZC) === ZC) {
            const CC = this._Levels[ZC];
            QC[CC.name] = QC._LogEnabled.bind(QC, ZC)
          }
      }
    }
    QC.NoneLogLevel = 0, QC.MessageLogLevel = 1, QC.WarningLogLevel = 2, QC.ErrorLogLevel = 4, QC.AllLogLevel = 7, QC.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", QC._LogCache = "", QC._LogLimitOutputs = {}, QC._Levels = [{}, {
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
    }], QC.errorsCount = 0, QC.Log = QC._LogEnabled.bind(QC, QC.MessageLogLevel), QC.Warn = QC._LogEnabled.bind(QC, QC.WarningLogLevel), QC.Error = QC._LogEnabled.bind(QC, QC.ErrorLogLevel)
  },
  60925: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      CreateScreenshot: () => XC,
      CreateScreenshotAsync: () => cC,
      CreateScreenshotForFrameGraphAsync: () => TC,
      CreateScreenshotUsingRenderTarget: () => rC,
      CreateScreenshotUsingRenderTargetAsync: () => sC,
      CreateScreenshotWithResizeAsync: () => uC,
      RegisterScreenshotTools: () => jC,
      ScreenshotTools: () => tC
    });
    var QC = ZC(40303),
      wC = ZC(41638),
      bC = ZC(41618),
      nC = ZC(39842),
      fC = ZC(41622),
      oC = ZC(36985),
      qC = ZC(36963);
    class FC extends fC.e {
      static _GetDefines(CC) {
        if (!CC) return null;
        return CC.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
      }
      _gatherImports(CC, zC) {
        CC ? (this._webGPUReady = !0, zC.push(Promise.all([ZC.e(375).then((() => ZC(61149))), ZC.e(376).then((() => ZC(61156)))]))) : zC.push(Promise.all([ZC.e(377).then((() => ZC(61164))), ZC.e(378).then((() => ZC(61171)))]))
      }
      constructor(CC) {
        const zC = {
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: CC,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || oC.c.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          vertexShader: FC.VertexUrl,
          fragmentShader: FC.FragmentUrl,
          uniforms: FC.Uniforms
        };
        super({
          ...zC,
          defines: FC._GetDefines(zC.engine)
        }), this.texelSize = new qC.n(0, 0)
      }
      bind() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.bind(CC), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
      }
    }
    FC.VertexUrl = "fxaa", FC.FragmentUrl = "fxaa", FC.Uniforms = ["texelSize"];
    class WC extends bC.d {
      getClassName() {
        return "FxaaPostProcess"
      }
      constructor(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          wC = arguments.length > 3 ? arguments[3] : void 0,
          bC = arguments.length > 4 ? arguments[4] : void 0,
          nC = arguments.length > 5 ? arguments[5] : void 0,
          fC = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const oC = {
          uniforms: FC.Uniforms,
          size: "number" === typeof zC ? zC : void 0,
          camera: ZC,
          samplingMode: wC || QC.h.BILINEAR_SAMPLINGMODE,
          engine: bC,
          reusable: nC,
          textureType: fC,
          ...zC
        };
        super(CC, FC.FragmentUrl, {
          effectWrapper: "number" !== typeof zC && zC.effectWrapper ? void 0 : new FC(CC, bC, oC),
          ...oC
        }), this.onApplyObservable.add((CC => {
          this._effectWrapper.texelSize = this.texelSize
        }))
      }
      static _Parse(CC, zC, ZC, QC) {
        return nC.d.Parse((() => new WC(CC.name, CC.options, zC, CC.renderTargetSamplingMode, ZC.mg(), CC.reusable)), CC, ZC, QC)
      }
    }
    var NC = ZC(38507),
      MC = ZC(39913),
      gC = ZC(41648),
      SC = ZC(41634),
      pC = ZC(39712);
    const PC = 0;
    class GC {
      constructor(CC, zC, ZC) {
        this.name = CC, this._parentTask = zC, this._context = ZC, this.disabled = !1
      }
      setInitializeFunc(CC) {
        this._initFunc = CC
      }
      setExecuteFunc(CC) {
        this._executeFunc = CC
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
    class RC extends GC {
      static IsObjectListPass(CC) {
        return void 0 !== CC.setObjectList
      }
      get objectList() {
        return this._objectList
      }
      setObjectList(CC) {
        this._objectList = CC
      }
      constructor(CC, zC, ZC, QC) {
        super(CC, zC, ZC), this._engine = QC
      }
      _isValid() {
        const CC = super._isValid();
        return CC || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
      }
    }
    class AC extends GC {
      static IsRenderPass(CC) {
        return void 0 !== CC.setRenderTarget
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
      constructor(CC, zC, ZC, QC) {
        super(CC, zC, ZC), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = QC
      }
      setRenderTarget(CC) {
        this._renderTarget = CC
      }
      setRenderTargetDepth(CC) {
        this._renderTargetDepth = CC
      }
      addDependencies(CC) {
        if (void 0 !== CC)
          if (Array.isArray(CC))
            for (const zC of CC) this._dependencies.add(zC);
          else this._dependencies.add(CC)
      }
      collectDependencies(CC) {
        const zC = this._dependencies.keys();
        for (let ZC = zC.next(); !0 !== ZC.done; ZC = zC.next()) CC.add(ZC.value);
        if (void 0 !== this._renderTarget)
          if (Array.isArray(this._renderTarget))
            for (const ZC of this._renderTarget) void 0 !== ZC && CC.add(ZC);
          else CC.add(this._renderTarget);
        void 0 !== this._renderTargetDepth && CC.add(this._renderTargetDepth)
      }
      setOutputLayerAndFaceIndices(CC) {
        const zC = this.frameGraphRenderTarget.renderTargetWrapper;
        if (zC)
          for (const ZC of CC) zC.setLayerAndFaceIndex(ZC.targetIndex, ZC.layerIndex, ZC.faceIndex)
      }
      _initialize() {
        this._frameGraphRenderTarget = this._context.createRenderTarget(this.name, this._renderTarget, this._renderTargetDepth, this.depthReadOnly, this.stencilReadOnly), super._initialize()
      }
      _execute() {
        this._context.bindRenderTarget(this._frameGraphRenderTarget), super._execute(), this._context.restoreDefaultFramebuffer()
      }
      _isValid() {
        const CC = super._isValid();
        return CC || (void 0 !== this._renderTarget || void 0 !== this.renderTargetDepth ? null : "Render target and render target depth cannot both be undefined.")
      }
      _dispose() {
        this._frameGraphRenderTarget?.dispose()
      }
    }
    var xC = ZC(36987);
    class JC {
      get name() {
        return this._name
      }
      set name(CC) {
        this._name = CC
      }
      get disabled() {
        return this._disabled
      }
      set disabled(CC) {
        this._disabled = CC
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
      constructor(CC, zC) {
        this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new xC.d, this.onBeforeTaskExecute = new xC.d, this.onAfterTaskExecute = new xC.d, this.name = CC, this._frameGraph = zC, this._reset()
      }
      _reset() {
        for (const CC of this._passes) CC._dispose();
        for (const CC of this._passesDisabled) CC._dispose();
        this._passes.length = 0, this._passesDisabled.length = 0
      }
      _addPass(CC, zC) {
        zC ? this._passesDisabled.push(CC) : this._passes.push(CC)
      }
      _checkTask() {
        let CC, zC = null,
          ZC = null;
        for (const fC of this._passes) {
          const QC = fC._isValid();
          if (QC) throw new Error(`Pass "${fC.name}" is not valid. ${QC}`);
          if (AC.IsRenderPass(fC)) {
            const CC = Array.isArray(fC.renderTarget) ? fC.renderTarget : [fC.renderTarget];
            zC = [];
            for (const ZC of CC) void 0 !== ZC && zC.push(this._frameGraph.textureManager.getTextureFromHandle(ZC));
            ZC = void 0 !== fC.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(fC.renderTargetDepth) : null
          } else RC.IsObjectListPass(fC) && (CC = fC.objectList)
        }
        let QC, wC = null,
          bC = [],
          nC = null;
        for (const fC of this._passesDisabled) {
          const CC = fC._isValid();
          if (CC) throw new Error(`Pass "${fC.name}" is not valid. ${CC}`);
          if (AC.IsRenderPass(fC)) {
            const CC = Array.isArray(fC.renderTarget) ? fC.renderTarget : [fC.renderTarget];
            wC = [];
            for (const zC of CC) void 0 !== zC && wC.push(this._frameGraph.textureManager.getTextureFromHandle(zC));
            bC = CC, nC = void 0 !== fC.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(fC.renderTargetDepth) : null
          } else RC.IsObjectListPass(fC) && (QC = fC.objectList)
        }
        if (this._passesDisabled.length > 0) {
          if (!this._checkSameRenderTarget(zC, wC)) {
            let CC = !0;
            for (const zC of bC)
              if (void 0 !== zC && !this._frameGraph.textureManager.isHistoryTexture(zC)) {
                CC = !1;
                break
              } if (!CC) throw new Error(`The output texture of the task "${this.name}" is different when it is enabled or disabled.`)
          }
          if (ZC !== nC && null !== nC) throw new Error(`The output depth texture of the task "${this.name}" is different when it is enabled or disabled.`);
          if (CC !== QC && null !== QC) throw new Error(`The output object list of the task "${this.name}" is different when it is enabled or disabled.`)
        }
      }
      _execute() {
        const CC = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
        this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const zC of CC) zC._execute()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
        this.onAfterTaskExecute.notifyObservers(this)
      }
      _initializePasses() {
        this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const CC of this._passes) CC._initialize();
          for (const CC of this._passesDisabled) CC._initialize()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
      }
      _checkSameRenderTarget(CC, zC) {
        if (null === CC || null === zC) return CC === zC;
        if (CC.length !== zC.length) return !1;
        for (let ZC = 0; ZC < CC.length; ZC++)
          if (CC[ZC] !== zC[ZC]) return !1;
        return !0
      }
    }
    class IC extends JC {
      get alphaMode() {
        return this.postProcess.alphaMode
      }
      set alphaMode(CC) {
        this.postProcess.alphaMode = CC
      }
      get drawWrapper() {
        return this._postProcessDrawWrapper
      }
      constructor(CC, zC, ZC) {
        super(CC, zC), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = ZC, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture = this._frameGraph.textureManager.createDanglingHandle(), this.outputDepthAttachmentTexture = this._frameGraph.textureManager.createDanglingHandle()
      }
      isReady() {
        return this.postProcess.isReady()
      }
      getClassName() {
        return "FrameGraphPostProcessTask"
      }
      record() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          zC = arguments.length > 1 ? arguments[1] : void 0,
          ZC = arguments.length > 2 ? arguments[2] : void 0;
        if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
        const QC = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
        if (QC && (QC.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, QC), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentTexture, this.depthAttachmentTexture), QC) {
          const CC = this._frameGraph.textureManager.getTextureAbsoluteDimensions(QC);
          this._sourceWidth = CC.width, this._sourceHeight = CC.height
        }
        const wC = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
        this._outputWidth = wC.size.width, this._outputHeight = wC.size.height;
        const bC = this._frameGraph.addRenderPass(this.name);
        if (bC.depthReadOnly = this.depthReadOnly, bC.stencilReadOnly = this.stencilReadOnly, bC.addDependencies(this.sourceTexture), bC.setRenderTarget(this.outputTexture), bC.setRenderTargetDepth(this.depthAttachmentTexture), bC.setExecuteFunc((CC => {
            CC.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && CC.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), zC?.(CC), this.viewport && CC.setViewport(this.viewport), CC.applyFullScreenEffect(this._postProcessDrawWrapper, (() => {
              void 0 !== this.sourceTexture && CC.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), ZC?.(CC), this.postProcess.bind()
            }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), CC.restoreDefaultFramebuffer(), CC.popDebugGroup()
          })), !CC) {
          const CC = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
          CC.depthReadOnly = this.depthReadOnly, CC.stencilReadOnly = this.stencilReadOnly, CC.addDependencies(this.sourceTexture), CC.setRenderTarget(this.outputTexture), CC.setRenderTargetDepth(this.depthAttachmentTexture), CC.setExecuteFunc((CC => {
            void 0 !== this.sourceTexture && 0 === this.alphaMode && (this.viewport && CC.setViewport(this.viewport), CC.copyTexture(this.sourceTexture, void 0, void 0 !== this.viewport))
          }))
        }
        return bC
      }
      dispose() {
        this.postProcess.dispose(), super.dispose()
      }
    }
    class iC extends IC {
      constructor(CC, zC, ZC) {
        super(CC, zC, ZC || new FC(CC, zC.engine))
      }
      getClassName() {
        return "FrameGraphFXAATask"
      }
      record() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          zC = arguments.length > 1 ? arguments[1] : void 0,
          ZC = arguments.length > 2 ? arguments[2] : void 0;
        const QC = super.record(CC, zC, ZC);
        return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, QC
      }
    }
    var vC = ZC(41640);
    class eC extends IC {
      constructor(CC, zC, ZC) {
        super(CC, zC, ZC || new vC.g(CC, zC.engine))
      }
      getClassName() {
        return "FrameGraphPassTask"
      }
    }
    var hC = ZC(39910),
      KC = ZC(39993),
      YC = ZC(39953),
      dC = ZC(40078),
      mC = ZC(37142);
    class HC {
      getRenderCamera(CC) {
        if (this._renderCamera) return this._renderCamera;
        {
          let zC;
          return zC = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, CC && zC && zC.isRigCamera ? zC.rigParent : zC
        }
      }
      setRenderCamera(CC) {
        this._renderCamera = CC
      }
      _getSharedGizmoLight() {
        return this._sharedGizmoLight || (this._sharedGizmoLight = new dC.b("shared gizmo light", new qC.r(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = mC.e.Gray()), this._sharedGizmoLight
      }
      static get DefaultUtilityLayer() {
        return null == HC._DefaultUtilityLayer ? HC._CreateDefaultUtilityLayerFromScene(oC.c.LastCreatedScene) : HC._DefaultUtilityLayer
      }
      static _CreateDefaultUtilityLayerFromScene(CC) {
        return HC._DefaultUtilityLayer = new HC(CC), HC._DefaultUtilityLayer.originalScene.Tm.addOnce((() => {
          HC._DefaultUtilityLayer = null
        })), HC._DefaultUtilityLayer
      }
      static get DefaultKeepDepthUtilityLayer() {
        return null == HC._DefaultKeepDepthUtilityLayer ? HC._CreateDefaultKeepUtilityLayerFromScene(oC.c.LastCreatedScene) : HC._DefaultKeepDepthUtilityLayer
      }
      static _CreateDefaultKeepUtilityLayerFromScene(CC) {
        return HC._DefaultKeepDepthUtilityLayer = new HC(CC), HC._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, HC._DefaultKeepDepthUtilityLayer.originalScene.Tm.addOnce((() => {
          HC._DefaultKeepDepthUtilityLayer = null
        })), HC._DefaultKeepDepthUtilityLayer
      }
      constructor(CC) {
        let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.originalScene = CC, this.handleEvents = zC, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.processAllEvents = !1, this.pickingEnabled = !0, this.onPointerOutObservable = new xC.d, this.utilityLayerScene = new hC.g(CC.mg(), {
          virtual: !0,
          useFloatingOrigin: CC.floatingOriginMode
        }), this.utilityLayerScene.useRightHandedSystem = CC.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), zC && (this._originalPointerObserver = CC.onPrePointerObservable.add((zC => {
          if (!this.utilityLayerScene.activeCamera) return;
          if (!this.pickingEnabled) return;
          if (!this.processAllEvents && zC.type !== KC.b.POINTERMOVE && zC.type !== KC.b.POINTERUP && zC.type !== KC.b.POINTERDOWN && zC.type !== KC.b.POINTERDOUBLETAP) return;
          this.utilityLayerScene.pointerX = CC.pointerX, this.utilityLayerScene.pointerY = CC.pointerY;
          const ZC = zC.event;
          if (CC.isPointerCaptured(ZC.pointerId)) return void(this._pointerCaptures[ZC.pointerId] = !1);
          const QC = ZC => {
              let QC;
              if (zC.nearInteractionPickingInfo) QC = zC.nearInteractionPickingInfo.pickedMesh.Km() == ZC ? zC.nearInteractionPickingInfo : new YC.c;
              else if (ZC !== this.utilityLayerScene && zC.originalPickingInfo) QC = zC.originalPickingInfo;
              else {
                let wC = null;
                this._renderCamera && (wC = ZC._activeCamera, ZC._activeCamera = this._renderCamera, zC.ray = null), QC = zC.ray ? ZC.pickWithRay(zC.ray) : ZC.CM(CC.pointerX, CC.pointerY), wC && (ZC._activeCamera = wC)
              }
              return QC
            },
            wC = QC(this.utilityLayerScene);
          if (!zC.ray && wC && (zC.ray = wC.ray), zC.originalPickingInfo?.aimTransform && wC && (wC.aimTransform = zC.originalPickingInfo.aimTransform, wC.gripTransform = zC.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(zC), this.onlyCheckPointerDownEvents && zC.type != KC.b.POINTERDOWN) return zC.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new KC.h(zC.type, zC.event, wC), zC.type), void(zC.type === KC.b.POINTERUP && this._pointerCaptures[ZC.pointerId] && (this._pointerCaptures[ZC.pointerId] = !1));
          if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) wC && wC.hit && (zC.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new KC.h(zC.type, zC.event, wC), zC.type), zC.skipOnPointerObservable = !0);
          else {
            const ZC = QC(CC),
              bC = zC.event;
            ZC && wC && (0 === wC.distance && ZC.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(ZC.pickedMesh) ? (this._notifyObservers(zC, ZC, bC), zC.skipOnPointerObservable = !0) : zC.type === KC.b.POINTERDOWN ? (this._pointerCaptures[bC.pointerId] = !0, this._notifyObservers(zC, ZC, bC)) : zC.type !== KC.b.POINTERMOVE && zC.type !== KC.b.POINTERUP || (this._lastPointerEvents[bC.pointerId] && (this.onPointerOutObservable.notifyObservers(bC.pointerId), delete this._lastPointerEvents[bC.pointerId]), this._notifyObservers(zC, ZC, bC)) : !this._pointerCaptures[bC.pointerId] && (wC.distance < ZC.distance || 0 === ZC.distance) ? (this._notifyObservers(zC, wC, bC), zC.skipOnPointerObservable || (zC.skipOnPointerObservable = wC.distance > 0)) : !this._pointerCaptures[bC.pointerId] && wC.distance >= ZC.distance && (this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(ZC.pickedMesh) ? (this._notifyObservers(zC, ZC, bC), zC.skipOnPointerObservable = !0) : (zC.type !== KC.b.POINTERMOVE && zC.type !== KC.b.POINTERUP || this._lastPointerEvents[bC.pointerId] && (this.onPointerOutObservable.notifyObservers(bC.pointerId), delete this._lastPointerEvents[bC.pointerId]), this._notifyObservers(zC, wC, bC))), zC.type === KC.b.POINTERUP && this._pointerCaptures[bC.pointerId] && (this._pointerCaptures[bC.pointerId] = !1))
          }
        })), this._originalPointerObserver && CC.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, ZC || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((CC => {
          this.shouldRender && CC == this.getRenderCamera() && this.render()
        }))), this._sceneDisposeObserver = this.originalScene.Tm.add((() => {
          this.dispose()
        })), this._updateCamera()
      }
      _notifyObservers(CC, zC, ZC) {
        CC.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new KC.h(CC.type, CC.event, zC), CC.type), this._lastPointerEvents[ZC.pointerId] = !0)
      }
      render() {
        if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
          const CC = this.utilityLayerScene.activeCamera.Km(),
            zC = this.utilityLayerScene.activeCamera;
          zC._scene = this.utilityLayerScene, zC.leftCamera && (zC.leftCamera._scene = this.utilityLayerScene), zC.rightCamera && (zC.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), zC._scene = CC, zC.leftCamera && (zC.leftCamera._scene = CC), zC.rightCamera && (zC.rightCamera._scene = CC)
        }
      }
      dispose() {
        this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.Tm.remove(this._sceneDisposeObserver), this._originalPointerObserver && this.originalScene.onPrePointerObservable.remove(this._originalPointerObserver), this.utilityLayerScene.dispose()
      }
      _updateCamera() {
        this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
      }
    }
    HC._DefaultUtilityLayer = null, HC._DefaultKeepDepthUtilityLayer = null;
    const EC = {
      FindMainCamera: function(CC) {
        return CC.findMainCamera()
      },
      FindMainObjectRenderer: function(CC) {
        return CC.findMainObjectRenderer()
      },
      CreateUtilityLayerRenderer: function(CC) {
        let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const ZC = CC.sS,
          QC = new HC(ZC, zC, !0);
        QC.utilityLayerScene.activeCamera = ZC.activeCamera;
        let wC = EC.FindMainCamera(ZC.frameGraph);
        !wC && ZC.cameras.length > 0 && (wC = ZC.cameras[0]), wC && (QC.setRenderCamera(wC), QC.utilityLayerScene.activeCamera = wC);
        const bC = ZC.onAfterRenderObservable.add((() => {
          QC.render()
        }));
        return QC.utilityLayerScene.Tm.addOnce((() => {
          ZC.onAfterRenderObservable.remove(bC)
        })), QC
      }
    };
    let lC = null;

    function XC(CC, zC, ZC, QC) {
      let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        bC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        nC = arguments.length > 6 ? arguments[6] : void 0,
        fC = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        oC = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
      const {
        height: qC,
        width: FC
      } = aC(CC, zC, ZC);
      if (!qC || !FC) return void NC.c.Error("Invalid 'size' parameter !");
      const WC = zC.Km();
      let gC = WC.activeCamera !== zC;
      if (WC.frameGraph) {
        const CC = EC.FindMainObjectRenderer(WC.frameGraph);
        CC && (gC = CC.camera !== zC)
      }
      gC ? rC(CC, zC, ZC, (CC => {
        if (bC) {
          const zC = new Blob([CC]);
          MC.g.DownloadBlob(zC), QC && QC("")
        } else QC && QC(CC)
      }), wC, 1, CC.getCreationOptions().antialias, void 0, void 0, void 0, void 0, nC) : CC.onEndFrameObservable.addOnce((() => {
        lC || (lC = document.createElement("canvas")), lC.width = FC, lC.height = qC;
        const zC = lC.getContext("2d"),
          ZC = CC.getRenderingCanvas();
        if (!zC || !ZC) return void NC.c.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
        const gC = ZC.width,
          SC = ZC.height,
          pC = lC.width,
          PC = lC.height,
          GC = pC / gC,
          RC = PC / SC,
          AC = fC ? Math.max(GC, RC) : Math.min(GC, RC),
          xC = gC * AC,
          JC = SC * AC,
          IC = (pC - xC) / 2,
          iC = (PC - JC) / 2;
        zC.save(), zC.fillStyle = oC ? WC.clearColor.toHexString() : "rgba(0, 0, 0, 0)", zC.fillRect(0, 0, FC, qC), zC.restore(), zC.drawImage(ZC, 0, 0, gC, SC, IC, iC, xC, JC), bC ? (MC.g.EncodeScreenshotCanvasData(lC, void 0, wC, void 0, nC), QC && QC("")) : MC.g.EncodeScreenshotCanvasData(lC, QC, wC, void 0, nC)
      }))
    }
    async function cC(CC, zC, ZC) {
      let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        wC = arguments.length > 4 ? arguments[4] : void 0,
        bC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        nC = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        fC = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      return await new Promise(((oC, qC) => {
        XC(CC, zC, ZC, (CC => {
          "undefined" !== typeof CC ? oC(CC) : qC(new Error("Data is undefined"))
        }), QC, fC, wC, bC, nC)
      }))
    }
    async function uC(CC, zC, ZC, QC) {
      let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        bC = arguments.length > 5 ? arguments[5] : void 0,
        nC = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return await new Promise((fC => {
        XC(CC, zC, {
          width: ZC,
          height: QC
        }, (() => {
          fC()
        }), wC, !0, bC, nC)
      }))
    }

    function rC(CC, zC, bC, nC) {
      let fC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        oC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
        qC = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        FC = arguments.length > 7 ? arguments[7] : void 0,
        MC = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        PC = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        GC = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
        RC = arguments.length > 11 ? arguments[11] : void 0,
        AC = arguments.length > 12 ? arguments[12] : void 0,
        xC = arguments.length > 13 ? arguments[13] : void 0,
        JC = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
        IC = arguments.length > 15 ? arguments[15] : void 0;
      const iC = zC.Km();
      if (iC.frameGraph) return void TC(iC.frameGraph, zC, bC, fC, oC, qC, FC, RC, xC, !nC).then((CC => {
        nC && nC(CC)
      }));
      const {
        height: vC,
        width: eC,
        finalWidth: hC,
        finalHeight: KC
      } = aC(CC, zC, bC), YC = {
        width: eC,
        height: vC
      };
      if (!vC || !eC) return void NC.c.Error("Invalid 'size' parameter !");
      CC.skipFrameRender = !0;
      const dC = CC.getRenderWidth,
        mC = CC.getRenderHeight;
      CC.getRenderWidth = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && CC._currentRenderTarget ? CC._currentRenderTarget.width : eC
      }, CC.getRenderHeight = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && CC._currentRenderTarget ? CC._currentRenderTarget.height : vC
      }, CC.onResizeObservable.hasObservers() && CC.onResizeObservable.notifyObservers(CC);
      const HC = new wC.e("screenShot", YC, iC, !1, !1, 0, !1, QC.h.BILINEAR_SAMPLINGMODE, void 0, PC, void 0, void 0, void 0, oC);
      HC.renderList = iC.meshes.slice(), HC.samples = oC, HC.renderSprites = MC, HC.activeCamera = zC, HC.forceLayerMaskCheck = GC, AC?.(HC);
      const EC = xC || gC.DumpData,
        lC = () => {
          iC.incrementRenderId(), iC.resetCachedMaterial(), (0, pC.g)((() => HC.isReadyForRendering() && zC.isReady(!0)), (() => {
            CC.onEndFrameObservable.addOnce((() => {
              hC === eC && KC === vC ? HC.readPixels(void 0, void 0, void 0, !1).then((CC => {
                EC(eC, vC, CC, nC, fC, FC, !0, void 0, RC), HC.dispose()
              })) : (CC.isWebGPU ? ZC.e(371).then((() => ZC(61101))) : ZC.e(372).then((() => ZC(61109)))).then((async () => await (0, SC.b)("pass", HC.getInternalTexture(), iC, void 0, void 0, void 0, hC, KC).then((zC => {
                CC._readTexturePixels(zC, hC, KC, -1, 0, null, !0, !1, 0, 0).then((CC => {
                  EC(hC, KC, CC, nC, fC, FC, !0, void 0, RC), zC.dispose()
                }))
              }))))
            })), iC.incrementRenderId(), iC.resetCachedMaterial();
            const QC = iC.activeCamera,
              wC = iC.activeCameras,
              bC = zC.outputRenderTarget,
              oC = iC.spritesEnabled;
            iC.activeCamera = zC, iC.activeCameras = null, zC.outputRenderTarget = HC, iC.spritesEnabled = MC;
            const qC = iC.meshes;
            iC.meshes = HC.renderList || iC.meshes;
            try {
              iC.render()
            } finally {
              iC.activeCamera = QC, iC.activeCameras = wC, zC.outputRenderTarget = bC, iC.spritesEnabled = oC, iC.meshes = qC, CC.getRenderWidth = dC, CC.getRenderHeight = mC, CC.onResizeObservable.hasObservers() && CC.onResizeObservable.notifyObservers(CC), zC.getProjectionMatrix(!0), CC.skipFrameRender = !1
            }
          }), (() => {
            CC.skipFrameRender = !1, CC.getRenderWidth = dC, CC.getRenderHeight = mC, IC?.()
          }), void 0, JC)
        };
      if (qC) {
        const CC = new WC("antialiasing", 1, iC.activeCamera);
        HC.addPostProcess(CC), CC.autoClear = !0, CC.onEffectCreatedObservable.addOnce((CC => {
          CC.isReady() ? lC() : CC.onCompiled = () => {
            lC()
          }
        }))
      } else lC()
    }
    async function sC(CC, zC, ZC) {
      let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        bC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        nC = arguments.length > 6 ? arguments[6] : void 0,
        fC = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        oC = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        qC = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
        FC = arguments.length > 10 ? arguments[10] : void 0,
        WC = arguments.length > 11 ? arguments[11] : void 0,
        NC = arguments.length > 12 ? arguments[12] : void 0;
      return await new Promise(((MC, gC) => {
        rC(CC, zC, ZC, (CC => {
          "undefined" !== typeof CC ? MC(CC) : gC(new Error("Data is undefined"))
        }), QC, wC, bC, nC, fC, oC, qC, FC, WC, NC)
      }))
    }
    async function TC(CC, zC, ZC) {
      let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        bC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        nC = arguments.length > 6 ? arguments[6] : void 0,
        fC = arguments.length > 7 ? arguments[7] : void 0,
        oC = arguments.length > 8 ? arguments[8] : void 0,
        qC = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        FC = arguments.length > 10 ? arguments[10] : void 0;
      const WC = CC.engine,
        NC = CC.textureManager,
        {
          height: MC,
          width: SC,
          finalWidth: pC,
          finalHeight: GC
        } = aC(WC, zC, ZC),
        RC = {
          width: SC,
          height: MC
        },
        AC = oC || gC.DumpData,
        xC = CC.tasks,
        JC = xC.length,
        IC = CC.pausedExecution,
        vC = WC.getCaps().parallelShaderCompile;
      NC.setBackBufferTextures(0, 0, {
        size: RC,
        options: {
          createMipMaps: !1,
          samples: wC,
          types: [0],
          formats: [5],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot color"]
        },
        sizeIsPercentage: !1
      }, {
        size: RC,
        options: {
          createMipMaps: !1,
          samples: wC,
          types: [0],
          formats: [WC.isStencilEnable ? 13 : 14],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot depth"]
        },
        sizeIsPercentage: !1
      });
      let hC = PC;
      if (bC) {
        const zC = new iC("fxaa", CC);
        zC.sourceTexture = hC, hC = zC.outputTexture, CC.addTask(zC)
      }
      if (pC !== SC || GC !== MC) {
        const zC = new eC("pass", CC);
        zC.sourceTexture = hC, zC.targetTexture = CC.textureManager.createRenderTargetTexture("pass_output", {
          size: {
            width: pC,
            height: GC
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
        }), hC = zC.outputTexture, CC.addTask(zC)
      }
      const KC = EC.FindMainObjectRenderer(CC);
      let YC = null;
      KC && (YC = KC.camera, KC.camera = zC), WC.getCaps().parallelShaderCompile = void 0, await CC.buildAsync();
      const dC = FC ?? (NC.hasHistoryTextures ? 32 : 1);
      for (let gC = 0; gC < dC; ++gC) CC.execute();
      CC.pausedExecution = !0, WC.getCaps().parallelShaderCompile = vC;
      for (let gC = JC; gC < xC.length; ++gC) CC.tasks[gC].dispose();
      CC.tasks.length = JC, KC && YC && (KC.camera = YC);
      const mC = CC.textureManager.getTextureFromHandle(hC);
      return mC.incrementReferences(), NC.resetBackBufferTextures(), await CC.buildAsync(), CC.pausedExecution = IC, new Promise((CC => {
        WC._readTexturePixels(mC, pC, GC, -1, 0, null, !0, !1, 0, 0).then((async zC => {
          mC.dispose(), AC(pC, GC, zC, qC ? void 0 : zC => CC(zC), QC, nC, !0, void 0, fC), qC && CC(null)
        }))
      }))
    }

    function aC(CC, zC, ZC) {
      let QC = 0,
        wC = 0,
        bC = 0,
        nC = 0;
      if ("object" === typeof ZC) {
        const fC = ZC.precision ? Math.abs(ZC.precision) : 1;
        ZC.width && ZC.height ? (QC = ZC.height * fC, wC = ZC.width * fC) : ZC.width && !ZC.height ? (wC = ZC.width * fC, QC = Math.round(wC / CC.getAspectRatio(zC))) : ZC.height && !ZC.width ? (QC = ZC.height * fC, wC = Math.round(QC * CC.getAspectRatio(zC))) : (wC = Math.round(CC.getRenderWidth() * fC), QC = Math.round(wC / CC.getAspectRatio(zC))), ZC.finalWidth && ZC.finalHeight ? (nC = ZC.finalHeight, bC = ZC.finalWidth) : ZC.finalWidth && !ZC.finalHeight ? (bC = ZC.finalWidth, nC = Math.round(bC / CC.getAspectRatio(zC))) : ZC.finalHeight && !ZC.finalWidth ? (nC = ZC.finalHeight, bC = Math.round(nC * CC.getAspectRatio(zC))) : (bC = wC, nC = QC)
      } else isNaN(ZC) || (QC = ZC, wC = ZC, bC = ZC, nC = ZC);
      return wC && (wC = Math.floor(wC)), QC && (QC = Math.floor(QC)), bC && (bC = Math.floor(bC)), nC && (nC = Math.floor(nC)), {
        height: 0 | QC,
        width: 0 | wC,
        finalWidth: 0 | bC,
        finalHeight: 0 | nC
      }
    }
    const tC = {
      CreateScreenshot: XC,
      CreateScreenshotAsync: cC,
      CreateScreenshotWithResizeAsync: uC,
      CreateScreenshotUsingRenderTarget: rC,
      CreateScreenshotUsingRenderTargetAsync: sC,
      CreateScreenshotForFrameGraphAsync: TC
    };
    let DC = !1;

    function jC() {
      if (DC) return;
      DC = !0;
      MC.g.CreateScreenshot = XC, MC.g.CreateScreenshotAsync = cC, MC.g.CreateScreenshotUsingRenderTarget = rC, MC.g.CreateScreenshotUsingRenderTargetAsync = sC
    }
    jC()
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);