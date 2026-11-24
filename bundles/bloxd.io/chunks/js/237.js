export const id = 237;
export const ids = [237, 238];
export const modules = {
  40186: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => RD,
      g: () => UD
    });
    var pD = wD(39921),
      sD = wD(39927),
      KD = wD(37079),
      rD = wD(37273),
      LD = wD(40189),
      cD = wD(40155),
      gD = wD(37134);
    let RD = (() => {
        var DD;
        let zD, wD, cD = LD.c,
          gD = [],
          RD = [],
          AD = [],
          UD = [];
        return DD = class extends cD {
          constructor(DD, zD, wD, sD) {
            super(DD, wD, sD), this.groundColor = (0, pD.m)(this, gD, new rD.d(0, 0, 0)), this.direction = ((0, pD.m)(this, RD), (0, pD.m)(this, AD, void 0)), (0, pD.m)(this, UD), this.direction = zD || KD.s.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(DD) {
            return this.direction = KD.s.Normalize(DD.subtract(KD.s.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(DD, zD) {
            const wD = KD.s.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", wD.x, wD.y, wD.z, 0, zD), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), zD), this
          }
          transferToNodeMaterialEffect(DD, zD) {
            const wD = KD.s.Normalize(this.direction);
            return DD.setFloat3(zD, wD.x, wD.y, wD.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = KD.e.Identity()), this._worldMatrix
          }
          getTypeID() {
            return LD.c.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(DD, zD) {
            DD["HEMILIGHT" + zD] = !0
          }
        }, (() => {
          const KD = "function" === typeof Symbol && Symbol.metadata ? Object.create(cD[Symbol.metadata] ?? null) : void 0;
          zD = [(0, sD.k)()], wD = [(0, sD.B)()], (0, pD.i)(null, null, zD, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: DD => "groundColor" in DD,
              get: DD => DD.groundColor,
              set: (DD, zD) => {
                DD.groundColor = zD
              }
            },
            metadata: KD
          }, gD, RD), (0, pD.i)(null, null, wD, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: DD => "direction" in DD,
              get: DD => DD.direction,
              set: (DD, zD) => {
                DD.direction = zD
              }
            },
            metadata: KD
          }, AD, UD), KD && Object.defineProperty(DD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: KD
          })
        })(), DD
      })(),
      AD = !1;

    function UD() {
      AD || (AD = !0, cD.b.AddNodeConstructor("Light_Type_3", ((DD, zD) => () => new RD(DD, KD.s.Zero(), zD))), (0, gD.i)("BABYLON.HemisphericLight", RD))
    }
  },
  37752: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => sD
    });
    var pD = wD(37754);
    class sD {
      static GetPlanes(DD) {
        const zD = [];
        for (let wD = 0; wD < 6; wD++) zD.push(new pD.e(0, 0, 0, 0));
        return sD.GetPlanesToRef(DD, zD), zD
      }
      static GetNearPlaneToRef(DD, zD) {
        const wD = DD.m;
        zD.normal.x = wD[3] + wD[2], zD.normal.y = wD[7] + wD[6], zD.normal.z = wD[11] + wD[10], zD.d = wD[15] + wD[14], zD.normalize()
      }
      static GetFarPlaneToRef(DD, zD) {
        const wD = DD.m;
        zD.normal.x = wD[3] - wD[2], zD.normal.y = wD[7] - wD[6], zD.normal.z = wD[11] - wD[10], zD.d = wD[15] - wD[14], zD.normalize()
      }
      static GetLeftPlaneToRef(DD, zD) {
        const wD = DD.m;
        zD.normal.x = wD[3] + wD[0], zD.normal.y = wD[7] + wD[4], zD.normal.z = wD[11] + wD[8], zD.d = wD[15] + wD[12], zD.normalize()
      }
      static GetRightPlaneToRef(DD, zD) {
        const wD = DD.m;
        zD.normal.x = wD[3] - wD[0], zD.normal.y = wD[7] - wD[4], zD.normal.z = wD[11] - wD[8], zD.d = wD[15] - wD[12], zD.normalize()
      }
      static GetTopPlaneToRef(DD, zD) {
        const wD = DD.m;
        zD.normal.x = wD[3] - wD[1], zD.normal.y = wD[7] - wD[5], zD.normal.z = wD[11] - wD[9], zD.d = wD[15] - wD[13], zD.normalize()
      }
      static GetBottomPlaneToRef(DD, zD) {
        const wD = DD.m;
        zD.normal.x = wD[3] + wD[1], zD.normal.y = wD[7] + wD[5], zD.normal.z = wD[11] + wD[9], zD.d = wD[15] + wD[13], zD.normalize()
      }
      static GetPlanesToRef(DD, zD) {
        sD.GetNearPlaneToRef(DD, zD[0]), sD.GetFarPlaneToRef(DD, zD[1]), sD.GetLeftPlaneToRef(DD, zD[2]), sD.GetRightPlaneToRef(DD, zD[3]), sD.GetTopPlaneToRef(DD, zD[4]), sD.GetBottomPlaneToRef(DD, zD[5])
      }
      static IsPointInFrustum(DD, zD) {
        for (let wD = 0; wD < 6; wD++)
          if (zD[wD].dotCoordinate(DD) < 0) return !1;
        return !0
      }
    }
  },
  37754: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => sD
    });
    var pD = wD(37079);
    class sD {
      constructor(DD, zD, wD, sD) {
        this.normal = new pD.s(DD, zD, wD), this.d = sD
      }
      QpD() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new sD(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let DD = this.normal.getHashCode();
        return DD = 397 * DD ^ this.d, DD
      }
      normalize() {
        const DD = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let zD = 0;
        return 0 !== DD && (zD = 1 / DD), this.normal.x *= zD, this.normal.y *= zD, this.normal.z *= zD, this.d *= zD, this
      }
      transform(DD) {
        const zD = sD._TmpMatrix;
        DD.invertToRef(zD);
        const wD = zD.m,
          pD = this.normal.x,
          KD = this.normal.y,
          rD = this.normal.z,
          LD = this.d,
          cD = pD * wD[0] + KD * wD[1] + rD * wD[2] + LD * wD[3],
          gD = pD * wD[4] + KD * wD[5] + rD * wD[6] + LD * wD[7],
          RD = pD * wD[8] + KD * wD[9] + rD * wD[10] + LD * wD[11],
          AD = pD * wD[12] + KD * wD[13] + rD * wD[14] + LD * wD[15];
        return new sD(cD, gD, RD, AD)
      }
      dotCoordinate(DD) {
        return this.normal.x * DD.x + this.normal.y * DD.y + this.normal.z * DD.z + this.d
      }
      copyFromPoints(DD, zD, wD) {
        const pD = zD.x - DD.x,
          sD = zD.y - DD.y,
          KD = zD.z - DD.z,
          rD = wD.x - DD.x,
          LD = wD.y - DD.y,
          cD = wD.z - DD.z,
          gD = sD * cD - KD * LD,
          RD = KD * rD - pD * cD,
          AD = pD * LD - sD * rD,
          UD = Math.sqrt(gD * gD + RD * RD + AD * AD);
        let fD;
        return fD = 0 !== UD ? 1 / UD : 0, this.normal.x = gD * fD, this.normal.y = RD * fD, this.normal.z = AD * fD, this.d = -(this.normal.x * DD.x + this.normal.y * DD.y + this.normal.z * DD.z), this
      }
      isFrontFacingTo(DD, zD) {
        return pD.s.Dot(this.normal, DD) <= zD
      }
      signedDistanceTo(DD) {
        return pD.s.Dot(DD, this.normal) + this.d
      }
      static FromArray(DD) {
        return new sD(DD[0], DD[1], DD[2], DD[3])
      }
      static FromPoints(DD, zD, wD) {
        const pD = new sD(0, 0, 0, 0);
        return pD.copyFromPoints(DD, zD, wD), pD
      }
      static FromPositionAndNormal(DD, zD) {
        const wD = new sD(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(DD, zD, wD)
      }
      static FromPositionAndNormalToRef(DD, zD, wD) {
        return wD.normal.pC(zD), wD.normal.normalize(), wD.d = -DD.dot(wD.normal), wD
      }
      static SignedDistanceToPlaneFromPositionAndNormal(DD, zD, wD) {
        const sD = -(zD.x * DD.x + zD.y * DD.y + zD.z * DD.z);
        return pD.s.Dot(wD, zD) + sD
      }
    }
    sD._TmpMatrix = pD.e.Identity()
  },
  38074: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => pD
    });
    class pD {
      constructor(DD, zD, wD, pD) {
        this.x = DD, this.y = zD, this.width = wD, this.height = pD
      }
      toGlobal(DD, zD) {
        return new pD(this.x * DD, this.y * zD, this.width * DD, this.height * zD)
      }
      toGlobalToRef(DD, zD, wD) {
        return wD.x = this.x * DD, wD.y = this.y * zD, wD.width = this.width * DD, wD.height = this.height * zD, this
      }
      clone() {
        return new pD(this.x, this.y, this.width, this.height)
      }
    }
  },
  38658: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => KD
    });
    var pD = wD(38662);
    const sD = (DD, zD, wD) => DD ? DD.getClassName && "Mesh" === DD.getClassName() ? null : !DD.getClassName || "SubMesh" !== DD.getClassName() && "PhysicsBody" !== DD.getClassName() ? DD.clone ? DD.clone() : Array.isArray(DD) ? DD.slice() : wD && "object" === typeof DD ? {
      ...DD
    } : null : DD.clone(zD) : null;
    class KD {
      static DeepCopy(DD, zD, wD, KD) {
        let rD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const LD = function(DD) {
          const zD = [];
          do {
            const wD = Object.getOwnPropertyNames(DD);
            for (const DD of wD) - 1 === zD.indexOf(DD) && zD.push(DD)
          } while (DD = Object.getPrototypeOf(DD));
          return zD
        }(DD);
        for (const gD of LD) {
          if ("_" === gD[0] && (!KD || -1 === KD.indexOf(gD))) continue;
          if (gD.endsWith("Observable")) continue;
          if (wD && -1 !== wD.indexOf(gD)) continue;
          const LD = DD[gD],
            RD = typeof LD;
          if ("function" !== RD) try {
            if ("object" === RD)
              if (LD instanceof Uint8Array) zD[gD] = Uint8Array.from(LD);
              else if (LD instanceof Array) {
              if (zD[gD] = [], LD.length > 0)
                if ("object" == typeof LD[0])
                  for (let DD = 0; DD < LD.length; DD++) {
                    const wD = sD(LD[DD], zD, rD); - 1 === zD[gD].indexOf(wD) && zD[gD].push(wD)
                  } else zD[gD] = LD.slice(0)
            } else zD[gD] = sD(LD, zD, rD);
            else zD[gD] = LD
          } catch (cD) {
            pD.d.Warn(cD.message)
          }
        }
      }
    }
  },
  37891: (DD, zD, wD) => {
    function pD() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (DD => {
        const zD = 16 * Math.random() | 0;
        return ("x" === DD ? zD : 3 & zD | 8).toString(16)
      }))
    }
    wD.d(zD, {
      c: () => pD
    })
  },
  38662: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => pD
    });
    class pD {
      static _CheckLimit(DD, zD) {
        let wD = pD._LogLimitOutputs[DD];
        return wD ? wD.current++ : (wD = {
          limit: zD,
          current: 1
        }, pD._LogLimitOutputs[DD] = wD), wD.current <= wD.limit
      }
      static _GenerateLimitMessage(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const wD = pD._LogLimitOutputs[DD];
        if (!wD || !pD.MessageLimitReached) return;
        const sD = this._Levels[zD];
        wD.current === wD.limit && pD[sD.name](pD.MessageLimitReached.replace(/%LIMIT%/g, "" + wD.limit).replace(/%TYPE%/g, sD.name ?? ""))
      }
      static _AddLogEntry(DD) {
        pD._LogCache = DD + pD._LogCache, pD.OnNewCacheEntry && pD.OnNewCacheEntry(DD)
      }
      static _FormatMessage(DD) {
        const zD = DD => DD < 10 ? "0" + DD : "" + DD,
          wD = new Date;
        return "[" + zD(wD.getHours()) + ":" + zD(wD.getMinutes()) + ":" + zD(wD.getSeconds()) + "]: " + DD
      }
      static _LogDisabled(DD, zD) {}
      static _LogEnabled() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          zD = arguments.length > 1 ? arguments[1] : void 0,
          wD = arguments.length > 2 ? arguments[2] : void 0;
        const sD = Array.isArray(zD) ? zD[0] : zD;
        if (void 0 !== wD && !pD._CheckLimit(sD, wD)) return;
        const KD = pD._FormatMessage(sD),
          rD = this._Levels[DD],
          LD = Array.isArray(zD) ? zD.slice(1) : [];
        rD.logFunc && rD.logFunc("BJS - " + KD, ...LD);
        const cD = `<div style='color:${rD.color}'>${KD}</div><br>`;
        pD._AddLogEntry(cD), pD._GenerateLimitMessage(sD, DD)
      }
      static get LogCache() {
        return pD._LogCache
      }
      static ClearLogCache() {
        pD._LogCache = "", pD._LogLimitOutputs = {}, pD.errorsCount = 0
      }
      static set LogLevels(DD) {
        pD.Log = pD._LogDisabled, pD.Warn = pD._LogDisabled, pD.Error = pD._LogDisabled;
        const zD = [pD.MessageLogLevel, pD.WarningLogLevel, pD.ErrorLogLevel];
        for (const wD of zD)
          if ((DD & wD) === wD) {
            const DD = this._Levels[wD];
            pD[DD.name] = pD._LogEnabled.bind(pD, wD)
          }
      }
    }
    pD.NoneLogLevel = 0, pD.MessageLogLevel = 1, pD.WarningLogLevel = 2, pD.ErrorLogLevel = 4, pD.AllLogLevel = 7, pD.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", pD._LogCache = "", pD._LogLimitOutputs = {}, pD._Levels = [{}, {
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
    }], pD.errorsCount = 0, pD.Log = pD._LogEnabled.bind(pD, pD.MessageLogLevel), pD.Warn = pD._LogEnabled.bind(pD, pD.WarningLogLevel), pD.Error = pD._LogEnabled.bind(pD, pD.ErrorLogLevel)
  },
  61020: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      CreateScreenshot: () => lD,
      CreateScreenshotAsync: () => WD,
      CreateScreenshotForFrameGraphAsync: () => kD,
      CreateScreenshotUsingRenderTarget: () => ZD,
      CreateScreenshotUsingRenderTargetAsync: () => yD,
      CreateScreenshotWithResizeAsync: () => ND,
      RegisterScreenshotTools: () => aD,
      ScreenshotTools: () => eD
    });
    var pD = wD(40400),
      sD = wD(41731),
      KD = wD(41709),
      rD = wD(39939),
      LD = wD(41711),
      cD = wD(37110),
      gD = wD(37079);
    class RD extends LD.g {
      static _GetDefines(DD) {
        if (!DD) return null;
        return DD.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
      }
      _gatherImports(DD, zD) {
        DD ? (this._webGPUReady = !0, zD.push(Promise.all([wD.e(375).then((() => wD(61272))), wD.e(376).then((() => wD(61276)))]))) : zD.push(Promise.all([wD.e(377).then((() => wD(61281))), wD.e(378).then((() => wD(61285)))]))
      }
      constructor(DD) {
        const zD = {
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: DD,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || cD.d.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          vertexShader: RD.VertexUrl,
          fragmentShader: RD.FragmentUrl,
          uniforms: RD.Uniforms
        };
        super({
          ...zD,
          defines: RD._GetDefines(zD.engine)
        }), this.texelSize = new gD.r(0, 0)
      }
      bind() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.bind(DD), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
      }
    }
    RD.VertexUrl = "fxaa", RD.FragmentUrl = "fxaa", RD.Uniforms = ["texelSize"];
    class AD extends KD.e {
      getClassName() {
        return "FxaaPostProcess"
      }
      constructor(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          sD = arguments.length > 3 ? arguments[3] : void 0,
          KD = arguments.length > 4 ? arguments[4] : void 0,
          rD = arguments.length > 5 ? arguments[5] : void 0,
          LD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const cD = {
          uniforms: RD.Uniforms,
          size: "number" === typeof zD ? zD : void 0,
          camera: wD,
          samplingMode: sD || pD.d.BILINEAR_SAMPLINGMODE,
          engine: KD,
          reusable: rD,
          textureType: LD,
          ...zD
        };
        super(DD, RD.FragmentUrl, {
          effectWrapper: "number" !== typeof zD && zD.effectWrapper ? void 0 : new RD(DD, KD, cD),
          ...cD
        }), this.onApplyObservable.add((DD => {
          this._effectWrapper.texelSize = this.texelSize
        }))
      }
      static _Parse(DD, zD, wD, pD) {
        return rD.d.Parse((() => new AD(DD.name, DD.options, zD, DD.renderTargetSamplingMode, wD.iI(), DD.reusable)), DD, wD, pD)
      }
    }
    var UD = wD(38662),
      fD = wD(40027),
      ID = wD(41742),
      BD = wD(41722),
      GD = wD(39820);
    const hD = 0;
    class nD {
      constructor(DD, zD, wD) {
        this.name = DD, this._parentTask = zD, this._context = wD, this.disabled = !1
      }
      setInitializeFunc(DD) {
        this._initFunc = DD
      }
      setExecuteFunc(DD) {
        this._executeFunc = DD
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
    class MD extends nD {
      static IsObjectListPass(DD) {
        return void 0 !== DD.setObjectList
      }
      get objectList() {
        return this._objectList
      }
      setObjectList(DD) {
        this._objectList = DD
      }
      constructor(DD, zD, wD, pD) {
        super(DD, zD, wD), this._engine = pD
      }
      _isValid() {
        const DD = super._isValid();
        return DD || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
      }
    }
    class OD extends nD {
      static IsRenderPass(DD) {
        return void 0 !== DD.setRenderTarget
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
      constructor(DD, zD, wD, pD) {
        super(DD, zD, wD), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = pD
      }
      setRenderTarget(DD) {
        this._renderTarget = DD
      }
      setRenderTargetDepth(DD) {
        this._renderTargetDepth = DD
      }
      addDependencies(DD) {
        if (void 0 !== DD)
          if (Array.isArray(DD))
            for (const zD of DD) this._dependencies.add(zD);
          else this._dependencies.add(DD)
      }
      collectDependencies(DD) {
        const zD = this._dependencies.keys();
        for (let wD = zD.next(); !0 !== wD.done; wD = zD.next()) DD.add(wD.value);
        if (void 0 !== this._renderTarget)
          if (Array.isArray(this._renderTarget))
            for (const wD of this._renderTarget) void 0 !== wD && DD.add(wD);
          else DD.add(this._renderTarget);
        void 0 !== this._renderTargetDepth && DD.add(this._renderTargetDepth)
      }
      setOutputLayerAndFaceIndices(DD) {
        const zD = this.frameGraphRenderTarget.renderTargetWrapper;
        if (zD)
          for (const wD of DD) zD.setLayerAndFaceIndex(wD.targetIndex, wD.layerIndex, wD.faceIndex)
      }
      _initialize() {
        this._frameGraphRenderTarget = this._context.createRenderTarget(this.name, this._renderTarget, this._renderTargetDepth, this.depthReadOnly, this.stencilReadOnly), super._initialize()
      }
      _execute() {
        this._context.bindRenderTarget(this._frameGraphRenderTarget), super._execute(), this._context.restoreDefaultFramebuffer()
      }
      _isValid() {
        const DD = super._isValid();
        return DD || (void 0 !== this._renderTarget || void 0 !== this.renderTargetDepth ? null : "Render target and render target depth cannot both be undefined.")
      }
      _dispose() {
        this._frameGraphRenderTarget?.dispose()
      }
    }
    var JD = wD(37119);
    class ED {
      get name() {
        return this._name
      }
      set name(DD) {
        this._name = DD
      }
      get disabled() {
        return this._disabled
      }
      set disabled(DD) {
        this._disabled = DD
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
      constructor(DD, zD) {
        this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new JD.b, this.onBeforeTaskExecute = new JD.b, this.onAfterTaskExecute = new JD.b, this.name = DD, this._frameGraph = zD, this._reset()
      }
      _reset() {
        for (const DD of this._passes) DD._dispose();
        for (const DD of this._passesDisabled) DD._dispose();
        this._passes.length = 0, this._passesDisabled.length = 0
      }
      _addPass(DD, zD) {
        zD ? this._passesDisabled.push(DD) : this._passes.push(DD)
      }
      _checkTask() {
        let DD, zD = null,
          wD = null;
        for (const LD of this._passes) {
          const pD = LD._isValid();
          if (pD) throw new Error(`Pass "${LD.name}" is not valid. ${pD}`);
          if (OD.IsRenderPass(LD)) {
            const DD = Array.isArray(LD.renderTarget) ? LD.renderTarget : [LD.renderTarget];
            zD = [];
            for (const wD of DD) void 0 !== wD && zD.push(this._frameGraph.textureManager.getTextureFromHandle(wD));
            wD = void 0 !== LD.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(LD.renderTargetDepth) : null
          } else MD.IsObjectListPass(LD) && (DD = LD.objectList)
        }
        let pD, sD = null,
          KD = [],
          rD = null;
        for (const LD of this._passesDisabled) {
          const DD = LD._isValid();
          if (DD) throw new Error(`Pass "${LD.name}" is not valid. ${DD}`);
          if (OD.IsRenderPass(LD)) {
            const DD = Array.isArray(LD.renderTarget) ? LD.renderTarget : [LD.renderTarget];
            sD = [];
            for (const zD of DD) void 0 !== zD && sD.push(this._frameGraph.textureManager.getTextureFromHandle(zD));
            KD = DD, rD = void 0 !== LD.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(LD.renderTargetDepth) : null
          } else MD.IsObjectListPass(LD) && (pD = LD.objectList)
        }
        if (this._passesDisabled.length > 0) {
          if (!this._checkSameRenderTarget(zD, sD)) {
            let DD = !0;
            for (const zD of KD)
              if (void 0 !== zD && !this._frameGraph.textureManager.isHistoryTexture(zD)) {
                DD = !1;
                break
              } if (!DD) throw new Error(`The output texture of the task "${this.name}" is different when it is enabled or disabled.`)
          }
          if (wD !== rD && null !== rD) throw new Error(`The output depth texture of the task "${this.name}" is different when it is enabled or disabled.`);
          if (DD !== pD && null !== pD) throw new Error(`The output object list of the task "${this.name}" is different when it is enabled or disabled.`)
        }
      }
      _execute() {
        const DD = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
        this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const zD of DD) zD._execute()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
        this.onAfterTaskExecute.notifyObservers(this)
      }
      _initializePasses() {
        this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const DD of this._passes) DD._initialize();
          for (const DD of this._passesDisabled) DD._initialize()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
      }
      _checkSameRenderTarget(DD, zD) {
        if (null === DD || null === zD) return DD === zD;
        if (DD.length !== zD.length) return !1;
        for (let wD = 0; wD < DD.length; wD++)
          if (DD[wD] !== zD[wD]) return !1;
        return !0
      }
    }
    class QD extends ED {
      get alphaMode() {
        return this.postProcess.alphaMode
      }
      set alphaMode(DD) {
        this.postProcess.alphaMode = DD
      }
      get drawWrapper() {
        return this._postProcessDrawWrapper
      }
      constructor(DD, zD, wD) {
        super(DD, zD), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = wD, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture = this._frameGraph.textureManager.createDanglingHandle(), this.outputDepthAttachmentTexture = this._frameGraph.textureManager.createDanglingHandle()
      }
      isReady() {
        return this.postProcess.isReady()
      }
      getClassName() {
        return "FrameGraphPostProcessTask"
      }
      record() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          zD = arguments.length > 1 ? arguments[1] : void 0,
          wD = arguments.length > 2 ? arguments[2] : void 0;
        if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
        const pD = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
        if (pD && (pD.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, pD), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentTexture, this.depthAttachmentTexture), pD) {
          const DD = this._frameGraph.textureManager.getTextureAbsoluteDimensions(pD);
          this._sourceWidth = DD.width, this._sourceHeight = DD.height
        }
        const sD = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
        this._outputWidth = sD.size.width, this._outputHeight = sD.size.height;
        const KD = this._frameGraph.addRenderPass(this.name);
        if (KD.depthReadOnly = this.depthReadOnly, KD.stencilReadOnly = this.stencilReadOnly, KD.addDependencies(this.sourceTexture), KD.setRenderTarget(this.outputTexture), KD.setRenderTargetDepth(this.depthAttachmentTexture), KD.setExecuteFunc((DD => {
            DD.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && DD.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), zD?.(DD), this.viewport && DD.setViewport(this.viewport), DD.applyFullScreenEffect(this._postProcessDrawWrapper, (() => {
              void 0 !== this.sourceTexture && DD.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), wD?.(DD), this.postProcess.bind()
            }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), DD.restoreDefaultFramebuffer(), DD.popDebugGroup()
          })), !DD) {
          const DD = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
          DD.depthReadOnly = this.depthReadOnly, DD.stencilReadOnly = this.stencilReadOnly, DD.addDependencies(this.sourceTexture), DD.setRenderTarget(this.outputTexture), DD.setRenderTargetDepth(this.depthAttachmentTexture), DD.setExecuteFunc((DD => {
            void 0 !== this.sourceTexture && 0 === this.alphaMode && (this.viewport && DD.setViewport(this.viewport), DD.copyTexture(this.sourceTexture, void 0, void 0 !== this.viewport))
          }))
        }
        return KD
      }
      dispose() {
        this.postProcess.dispose(), super.dispose()
      }
    }
    class XD extends QD {
      constructor(DD, zD, wD) {
        super(DD, zD, wD || new RD(DD, zD.engine))
      }
      getClassName() {
        return "FrameGraphFXAATask"
      }
      record() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          zD = arguments.length > 1 ? arguments[1] : void 0,
          wD = arguments.length > 2 ? arguments[2] : void 0;
        const pD = super.record(DD, zD, wD);
        return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, pD
      }
    }
    var VD = wD(41737);
    class PD extends QD {
      constructor(DD, zD, wD) {
        super(DD, zD, wD || new VD.e(DD, zD.engine))
      }
      getClassName() {
        return "FrameGraphPassTask"
      }
    }
    var CD = wD(40022),
      xD = wD(40106),
      TD = wD(40063),
      bD = wD(40186),
      jD = wD(37273);
    class dD {
      getRenderCamera(DD) {
        if (this._renderCamera) return this._renderCamera;
        {
          let zD;
          return zD = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, DD && zD && zD.isRigCamera ? zD.rigParent : zD
        }
      }
      setRenderCamera(DD) {
        this._renderCamera = DD
      }
      _getSharedGizmoLight() {
        return this._sharedGizmoLight || (this._sharedGizmoLight = new bD.d("shared gizmo light", new gD.s(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = jD.d.Gray()), this._sharedGizmoLight
      }
      static get DefaultUtilityLayer() {
        return null == dD._DefaultUtilityLayer ? dD._CreateDefaultUtilityLayerFromScene(cD.d.LastCreatedScene) : dD._DefaultUtilityLayer
      }
      static _CreateDefaultUtilityLayerFromScene(DD) {
        return dD._DefaultUtilityLayer = new dD(DD), dD._DefaultUtilityLayer.originalScene.Bl.addOnce((() => {
          dD._DefaultUtilityLayer = null
        })), dD._DefaultUtilityLayer
      }
      static get DefaultKeepDepthUtilityLayer() {
        return null == dD._DefaultKeepDepthUtilityLayer ? dD._CreateDefaultKeepUtilityLayerFromScene(cD.d.LastCreatedScene) : dD._DefaultKeepDepthUtilityLayer
      }
      static _CreateDefaultKeepUtilityLayerFromScene(DD) {
        return dD._DefaultKeepDepthUtilityLayer = new dD(DD), dD._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, dD._DefaultKeepDepthUtilityLayer.originalScene.Bl.addOnce((() => {
          dD._DefaultKeepDepthUtilityLayer = null
        })), dD._DefaultKeepDepthUtilityLayer
      }
      constructor(DD) {
        let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.originalScene = DD, this.handleEvents = zD, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.processAllEvents = !1, this.pickingEnabled = !0, this.onPointerOutObservable = new JD.b, this.utilityLayerScene = new CD.e(DD.iI(), {
          virtual: !0,
          useFloatingOrigin: DD.floatingOriginMode
        }), this.utilityLayerScene.useRightHandedSystem = DD.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), zD && (this._originalPointerObserver = DD.onPrePointerObservable.add((zD => {
          if (!this.utilityLayerScene.activeCamera) return;
          if (!this.pickingEnabled) return;
          if (!this.processAllEvents && zD.type !== xD.c.POINTERMOVE && zD.type !== xD.c.POINTERUP && zD.type !== xD.c.POINTERDOWN && zD.type !== xD.c.POINTERDOUBLETAP) return;
          this.utilityLayerScene.pointerX = DD.pointerX, this.utilityLayerScene.pointerY = DD.pointerY;
          const wD = zD.event;
          if (DD.isPointerCaptured(wD.pointerId)) return void(this._pointerCaptures[wD.pointerId] = !1);
          const pD = wD => {
              let pD;
              if (zD.nearInteractionPickingInfo) pD = zD.nearInteractionPickingInfo.pickedMesh.Ul() == wD ? zD.nearInteractionPickingInfo : new TD.c;
              else if (wD !== this.utilityLayerScene && zD.originalPickingInfo) pD = zD.originalPickingInfo;
              else {
                let sD = null;
                this._renderCamera && (sD = wD._activeCamera, wD._activeCamera = this._renderCamera, zD.ray = null), pD = zD.ray ? wD.pickWithRay(zD.ray) : wD.HU(DD.pointerX, DD.pointerY), sD && (wD._activeCamera = sD)
              }
              return pD
            },
            sD = pD(this.utilityLayerScene);
          if (!zD.ray && sD && (zD.ray = sD.ray), zD.originalPickingInfo?.aimTransform && sD && (sD.aimTransform = zD.originalPickingInfo.aimTransform, sD.gripTransform = zD.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(zD), this.onlyCheckPointerDownEvents && zD.type != xD.c.POINTERDOWN) return zD.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new xD.i(zD.type, zD.event, sD), zD.type), void(zD.type === xD.c.POINTERUP && this._pointerCaptures[wD.pointerId] && (this._pointerCaptures[wD.pointerId] = !1));
          if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) sD && sD.hit && (zD.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new xD.i(zD.type, zD.event, sD), zD.type), zD.skipOnPointerObservable = !0);
          else {
            const wD = pD(DD),
              KD = zD.event;
            wD && sD && (0 === sD.distance && wD.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(wD.pickedMesh) ? (this._notifyObservers(zD, wD, KD), zD.skipOnPointerObservable = !0) : zD.type === xD.c.POINTERDOWN ? (this._pointerCaptures[KD.pointerId] = !0, this._notifyObservers(zD, wD, KD)) : zD.type !== xD.c.POINTERMOVE && zD.type !== xD.c.POINTERUP || (this._lastPointerEvents[KD.pointerId] && (this.onPointerOutObservable.notifyObservers(KD.pointerId), delete this._lastPointerEvents[KD.pointerId]), this._notifyObservers(zD, wD, KD)) : !this._pointerCaptures[KD.pointerId] && (sD.distance < wD.distance || 0 === wD.distance) ? (this._notifyObservers(zD, sD, KD), zD.skipOnPointerObservable || (zD.skipOnPointerObservable = sD.distance > 0)) : !this._pointerCaptures[KD.pointerId] && sD.distance >= wD.distance && (this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(wD.pickedMesh) ? (this._notifyObservers(zD, wD, KD), zD.skipOnPointerObservable = !0) : (zD.type !== xD.c.POINTERMOVE && zD.type !== xD.c.POINTERUP || this._lastPointerEvents[KD.pointerId] && (this.onPointerOutObservable.notifyObservers(KD.pointerId), delete this._lastPointerEvents[KD.pointerId]), this._notifyObservers(zD, sD, KD))), zD.type === xD.c.POINTERUP && this._pointerCaptures[KD.pointerId] && (this._pointerCaptures[KD.pointerId] = !1))
          }
        })), this._originalPointerObserver && DD.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, wD || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((DD => {
          this.shouldRender && DD == this.getRenderCamera() && this.render()
        }))), this._sceneDisposeObserver = this.originalScene.Bl.add((() => {
          this.dispose()
        })), this._updateCamera()
      }
      _notifyObservers(DD, zD, wD) {
        DD.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new xD.i(DD.type, DD.event, zD), DD.type), this._lastPointerEvents[wD.pointerId] = !0)
      }
      render() {
        if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
          const DD = this.utilityLayerScene.activeCamera.Ul(),
            zD = this.utilityLayerScene.activeCamera;
          zD._scene = this.utilityLayerScene, zD.leftCamera && (zD.leftCamera._scene = this.utilityLayerScene), zD.rightCamera && (zD.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), zD._scene = DD, zD.leftCamera && (zD.leftCamera._scene = DD), zD.rightCamera && (zD.rightCamera._scene = DD)
        }
      }
      dispose() {
        this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.Bl.remove(this._sceneDisposeObserver), this._originalPointerObserver && this.originalScene.onPrePointerObservable.remove(this._originalPointerObserver), this.utilityLayerScene.dispose()
      }
      _updateCamera() {
        this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
      }
    }
    dD._DefaultUtilityLayer = null, dD._DefaultKeepDepthUtilityLayer = null;
    const SD = {
      FindMainCamera: function(DD) {
        return DD.findMainCamera()
      },
      FindMainObjectRenderer: function(DD) {
        return DD.findMainObjectRenderer()
      },
      CreateUtilityLayerRenderer: function(DD) {
        let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const wD = DD.oB,
          pD = new dD(wD, zD, !0);
        pD.utilityLayerScene.activeCamera = wD.activeCamera;
        let sD = SD.FindMainCamera(wD.frameGraph);
        !sD && wD.cameras.length > 0 && (sD = wD.cameras[0]), sD && (pD.setRenderCamera(sD), pD.utilityLayerScene.activeCamera = sD);
        const KD = wD.onAfterRenderObservable.add((() => {
          pD.render()
        }));
        return pD.utilityLayerScene.Bl.addOnce((() => {
          wD.onAfterRenderObservable.remove(KD)
        })), pD
      }
    };
    let iD = null;

    function lD(DD, zD, wD, pD) {
      let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        KD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        rD = arguments.length > 6 ? arguments[6] : void 0,
        LD = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        cD = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
      const {
        height: gD,
        width: RD
      } = mD(DD, zD, wD);
      if (!gD || !RD) return void UD.d.Error("Invalid 'size' parameter !");
      const AD = zD.Ul();
      let ID = AD.activeCamera !== zD;
      if (AD.frameGraph) {
        const DD = SD.FindMainObjectRenderer(AD.frameGraph);
        DD && (ID = DD.camera !== zD)
      }
      ID ? ZD(DD, zD, wD, (DD => {
        if (KD) {
          const zD = new Blob([DD]);
          fD.h.DownloadBlob(zD), pD && pD("")
        } else pD && pD(DD)
      }), sD, 1, DD.getCreationOptions().antialias, void 0, void 0, void 0, void 0, rD) : DD.onEndFrameObservable.addOnce((() => {
        iD || (iD = document.createElement("canvas")), iD.width = RD, iD.height = gD;
        const zD = iD.getContext("2d"),
          wD = DD.getRenderingCanvas();
        if (!zD || !wD) return void UD.d.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
        const ID = wD.width,
          BD = wD.height,
          GD = iD.width,
          hD = iD.height,
          nD = GD / ID,
          MD = hD / BD,
          OD = LD ? Math.max(nD, MD) : Math.min(nD, MD),
          JD = ID * OD,
          ED = BD * OD,
          QD = (GD - JD) / 2,
          XD = (hD - ED) / 2;
        zD.save(), zD.fillStyle = cD ? AD.clearColor.toHexString() : "rgba(0, 0, 0, 0)", zD.fillRect(0, 0, RD, gD), zD.restore(), zD.drawImage(wD, 0, 0, ID, BD, QD, XD, JD, ED), KD ? (fD.h.EncodeScreenshotCanvasData(iD, void 0, sD, void 0, rD), pD && pD("")) : fD.h.EncodeScreenshotCanvasData(iD, pD, sD, void 0, rD)
      }))
    }
    async function WD(DD, zD, wD) {
      let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        sD = arguments.length > 4 ? arguments[4] : void 0,
        KD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        rD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        LD = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      return await new Promise(((cD, gD) => {
        lD(DD, zD, wD, (DD => {
          "undefined" !== typeof DD ? cD(DD) : gD(new Error("Data is undefined"))
        }), pD, LD, sD, KD, rD)
      }))
    }
    async function ND(DD, zD, wD, pD) {
      let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        KD = arguments.length > 5 ? arguments[5] : void 0,
        rD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return await new Promise((LD => {
        lD(DD, zD, {
          width: wD,
          height: pD
        }, (() => {
          LD()
        }), sD, !0, KD, rD)
      }))
    }

    function ZD(DD, zD, KD, rD) {
      let LD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        cD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
        gD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        RD = arguments.length > 7 ? arguments[7] : void 0,
        fD = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        hD = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        nD = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
        MD = arguments.length > 11 ? arguments[11] : void 0,
        OD = arguments.length > 12 ? arguments[12] : void 0,
        JD = arguments.length > 13 ? arguments[13] : void 0,
        ED = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
        QD = arguments.length > 15 ? arguments[15] : void 0;
      const XD = zD.Ul();
      if (XD.frameGraph) return void kD(XD.frameGraph, zD, KD, LD, cD, gD, RD, MD, JD, !rD).then((DD => {
        rD && rD(DD)
      }));
      const {
        height: VD,
        width: PD,
        finalWidth: CD,
        finalHeight: xD
      } = mD(DD, zD, KD), TD = {
        width: PD,
        height: VD
      };
      if (!VD || !PD) return void UD.d.Error("Invalid 'size' parameter !");
      DD.skipFrameRender = !0;
      const bD = DD.getRenderWidth,
        jD = DD.getRenderHeight;
      DD.getRenderWidth = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && DD._currentRenderTarget ? DD._currentRenderTarget.width : PD
      }, DD.getRenderHeight = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && DD._currentRenderTarget ? DD._currentRenderTarget.height : VD
      }, DD.onResizeObservable.hasObservers() && DD.onResizeObservable.notifyObservers(DD);
      const dD = new sD.b("screenShot", TD, XD, !1, !1, 0, !1, pD.d.BILINEAR_SAMPLINGMODE, void 0, hD, void 0, void 0, void 0, cD);
      dD.renderList = XD.meshes.slice(), dD.samples = cD, dD.renderSprites = fD, dD.activeCamera = zD, dD.forceLayerMaskCheck = nD, OD?.(dD);
      const SD = JD || ID.DumpData,
        iD = () => {
          XD.incrementRenderId(), XD.resetCachedMaterial(), (0, GD.e)((() => dD.isReadyForRendering() && zD.isReady(!0)), (() => {
            DD.onEndFrameObservable.addOnce((() => {
              CD === PD && xD === VD ? dD.readPixels(void 0, void 0, void 0, !1).then((DD => {
                SD(PD, VD, DD, rD, LD, RD, !0, void 0, MD), dD.dispose()
              })) : (DD.isWebGPU ? wD.e(371).then((() => wD(61208))) : wD.e(372).then((() => wD(61215)))).then((async () => await (0, BD.d)("pass", dD.getInternalTexture(), XD, void 0, void 0, void 0, CD, xD).then((zD => {
                DD._readTexturePixels(zD, CD, xD, -1, 0, null, !0, !1, 0, 0).then((DD => {
                  SD(CD, xD, DD, rD, LD, RD, !0, void 0, MD), zD.dispose()
                }))
              }))))
            })), XD.incrementRenderId(), XD.resetCachedMaterial();
            const pD = XD.activeCamera,
              sD = XD.activeCameras,
              KD = zD.outputRenderTarget,
              cD = XD.spritesEnabled;
            XD.activeCamera = zD, XD.activeCameras = null, zD.outputRenderTarget = dD, XD.spritesEnabled = fD;
            const gD = XD.meshes;
            XD.meshes = dD.renderList || XD.meshes;
            try {
              XD.render()
            } finally {
              XD.activeCamera = pD, XD.activeCameras = sD, zD.outputRenderTarget = KD, XD.spritesEnabled = cD, XD.meshes = gD, DD.getRenderWidth = bD, DD.getRenderHeight = jD, DD.onResizeObservable.hasObservers() && DD.onResizeObservable.notifyObservers(DD), zD.getProjectionMatrix(!0), DD.skipFrameRender = !1
            }
          }), (() => {
            DD.skipFrameRender = !1, DD.getRenderWidth = bD, DD.getRenderHeight = jD, QD?.()
          }), void 0, ED)
        };
      if (gD) {
        const DD = new AD("antialiasing", 1, XD.activeCamera);
        dD.addPostProcess(DD), DD.autoClear = !0, DD.onEffectCreatedObservable.addOnce((DD => {
          DD.isReady() ? iD() : DD.onCompiled = () => {
            iD()
          }
        }))
      } else iD()
    }
    async function yD(DD, zD, wD) {
      let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        KD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        rD = arguments.length > 6 ? arguments[6] : void 0,
        LD = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        cD = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        gD = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
        RD = arguments.length > 10 ? arguments[10] : void 0,
        AD = arguments.length > 11 ? arguments[11] : void 0,
        UD = arguments.length > 12 ? arguments[12] : void 0;
      return await new Promise(((fD, ID) => {
        ZD(DD, zD, wD, (DD => {
          "undefined" !== typeof DD ? fD(DD) : ID(new Error("Data is undefined"))
        }), pD, sD, KD, rD, LD, cD, gD, RD, AD, UD)
      }))
    }
    async function kD(DD, zD, wD) {
      let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        KD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        rD = arguments.length > 6 ? arguments[6] : void 0,
        LD = arguments.length > 7 ? arguments[7] : void 0,
        cD = arguments.length > 8 ? arguments[8] : void 0,
        gD = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        RD = arguments.length > 10 ? arguments[10] : void 0;
      const AD = DD.engine,
        UD = DD.textureManager,
        {
          height: fD,
          width: BD,
          finalWidth: GD,
          finalHeight: nD
        } = mD(AD, zD, wD),
        MD = {
          width: BD,
          height: fD
        },
        OD = cD || ID.DumpData,
        JD = DD.tasks,
        ED = JD.length,
        QD = DD.pausedExecution,
        VD = AD.getCaps().parallelShaderCompile;
      UD.setBackBufferTextures(0, 0, {
        size: MD,
        options: {
          createMipMaps: !1,
          samples: sD,
          types: [0],
          formats: [5],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot color"]
        },
        sizeIsPercentage: !1
      }, {
        size: MD,
        options: {
          createMipMaps: !1,
          samples: sD,
          types: [0],
          formats: [AD.isStencilEnable ? 13 : 14],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot depth"]
        },
        sizeIsPercentage: !1
      });
      let CD = hD;
      if (KD) {
        const zD = new XD("fxaa", DD);
        zD.sourceTexture = CD, CD = zD.outputTexture, DD.addTask(zD)
      }
      if (GD !== BD || nD !== fD) {
        const zD = new PD("pass", DD);
        zD.sourceTexture = CD, zD.targetTexture = DD.textureManager.createRenderTargetTexture("pass_output", {
          size: {
            width: GD,
            height: nD
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
        }), CD = zD.outputTexture, DD.addTask(zD)
      }
      const xD = SD.FindMainObjectRenderer(DD);
      let TD = null;
      xD && (TD = xD.camera, xD.camera = zD), AD.getCaps().parallelShaderCompile = void 0, await DD.buildAsync();
      const bD = RD ?? (UD.hasHistoryTextures ? 32 : 1);
      for (let ID = 0; ID < bD; ++ID) DD.execute();
      DD.pausedExecution = !0, AD.getCaps().parallelShaderCompile = VD;
      for (let ID = ED; ID < JD.length; ++ID) DD.tasks[ID].dispose();
      DD.tasks.length = ED, xD && TD && (xD.camera = TD);
      const jD = DD.textureManager.getTextureFromHandle(CD);
      return jD.incrementReferences(), UD.resetBackBufferTextures(), await DD.buildAsync(), DD.pausedExecution = QD, new Promise((DD => {
        AD._readTexturePixels(jD, GD, nD, -1, 0, null, !0, !1, 0, 0).then((async zD => {
          jD.dispose(), OD(GD, nD, zD, gD ? void 0 : zD => DD(zD), pD, rD, !0, void 0, LD), gD && DD(null)
        }))
      }))
    }

    function mD(DD, zD, wD) {
      let pD = 0,
        sD = 0,
        KD = 0,
        rD = 0;
      if ("object" === typeof wD) {
        const LD = wD.precision ? Math.abs(wD.precision) : 1;
        wD.width && wD.height ? (pD = wD.height * LD, sD = wD.width * LD) : wD.width && !wD.height ? (sD = wD.width * LD, pD = Math.round(sD / DD.getAspectRatio(zD))) : wD.height && !wD.width ? (pD = wD.height * LD, sD = Math.round(pD * DD.getAspectRatio(zD))) : (sD = Math.round(DD.getRenderWidth() * LD), pD = Math.round(sD / DD.getAspectRatio(zD))), wD.finalWidth && wD.finalHeight ? (rD = wD.finalHeight, KD = wD.finalWidth) : wD.finalWidth && !wD.finalHeight ? (KD = wD.finalWidth, rD = Math.round(KD / DD.getAspectRatio(zD))) : wD.finalHeight && !wD.finalWidth ? (rD = wD.finalHeight, KD = Math.round(rD * DD.getAspectRatio(zD))) : (KD = sD, rD = pD)
      } else isNaN(wD) || (pD = wD, sD = wD, KD = wD, rD = wD);
      return sD && (sD = Math.floor(sD)), pD && (pD = Math.floor(pD)), KD && (KD = Math.floor(KD)), rD && (rD = Math.floor(rD)), {
        height: 0 | pD,
        width: 0 | sD,
        finalWidth: 0 | KD,
        finalHeight: 0 | rD
      }
    }
    const eD = {
      CreateScreenshot: lD,
      CreateScreenshotAsync: WD,
      CreateScreenshotWithResizeAsync: ND,
      CreateScreenshotUsingRenderTarget: ZD,
      CreateScreenshotUsingRenderTargetAsync: yD,
      CreateScreenshotForFrameGraphAsync: kD
    };
    let oD = !1;

    function aD() {
      if (oD) return;
      oD = !0;
      fD.h.CreateScreenshot = lD, fD.h.CreateScreenshotAsync = WD, fD.h.CreateScreenshotUsingRenderTarget = ZD, fD.h.CreateScreenshotUsingRenderTargetAsync = yD
    }
    aD()
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);