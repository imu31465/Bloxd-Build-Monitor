export const id = 231;
export const ids = [231, 232];
export const modules = {
  39388: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => SD,
      c: () => yD
    });
    var ID = cD(39154),
      pD = cD(39156),
      iD = cD(36446),
      fD = cD(36622),
      bD = cD(39392),
      QD = cD(39356),
      wD = cD(36488);
    let SD = (() => {
        var DD;
        let CD, cD, QD = bD.b,
          wD = [],
          SD = [],
          BD = [],
          yD = [];
        return DD = class extends QD {
          constructor(DD, CD, cD, pD) {
            super(DD, cD, pD), this.groundColor = (0, ID.m)(this, wD, new fD.d(0, 0, 0)), this.direction = ((0, ID.m)(this, SD), (0, ID.m)(this, BD, void 0)), (0, ID.m)(this, yD), this.direction = CD || iD.p.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(DD) {
            return this.direction = iD.p.Normalize(DD.subtract(iD.p.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(DD, CD) {
            const cD = iD.p.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", cD.x, cD.y, cD.z, 0, CD), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), CD), this
          }
          transferToNodeMaterialEffect(DD, CD) {
            const cD = iD.p.Normalize(this.direction);
            return DD.setFloat3(CD, cD.x, cD.y, cD.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = iD.d.Identity()), this._worldMatrix
          }
          getTypeID() {
            return bD.b.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(DD, CD) {
            DD["HEMILIGHT" + CD] = !0
          }
        }, (() => {
          const iD = "function" === typeof Symbol && Symbol.metadata ? Object.create(QD[Symbol.metadata] ?? null) : void 0;
          CD = [(0, pD.l)()], cD = [(0, pD.C)()], (0, ID.k)(null, null, CD, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: DD => "groundColor" in DD,
              get: DD => DD.groundColor,
              set: (DD, CD) => {
                DD.groundColor = CD
              }
            },
            metadata: iD
          }, wD, SD), (0, ID.k)(null, null, cD, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: DD => "direction" in DD,
              get: DD => DD.direction,
              set: (DD, CD) => {
                DD.direction = CD
              }
            },
            metadata: iD
          }, BD, yD), iD && Object.defineProperty(DD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: iD
          })
        })(), DD
      })(),
      BD = !1;

    function yD() {
      BD || (BD = !0, QD.b.AddNodeConstructor("Light_Type_3", ((DD, CD) => () => new SD(DD, iD.p.Zero(), CD))), (0, wD.d)("BABYLON.HemisphericLight", SD))
    }
  },
  37159: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => pD
    });
    var ID = cD(37167);
    class pD {
      static GetPlanes(DD) {
        const CD = [];
        for (let cD = 0; cD < 6; cD++) CD.push(new ID.c(0, 0, 0, 0));
        return pD.GetPlanesToRef(DD, CD), CD
      }
      static GetNearPlaneToRef(DD, CD) {
        const cD = DD.m;
        CD.normal.x = cD[3] + cD[2], CD.normal.y = cD[7] + cD[6], CD.normal.z = cD[11] + cD[10], CD.d = cD[15] + cD[14], CD.normalize()
      }
      static GetFarPlaneToRef(DD, CD) {
        const cD = DD.m;
        CD.normal.x = cD[3] - cD[2], CD.normal.y = cD[7] - cD[6], CD.normal.z = cD[11] - cD[10], CD.d = cD[15] - cD[14], CD.normalize()
      }
      static GetLeftPlaneToRef(DD, CD) {
        const cD = DD.m;
        CD.normal.x = cD[3] + cD[0], CD.normal.y = cD[7] + cD[4], CD.normal.z = cD[11] + cD[8], CD.d = cD[15] + cD[12], CD.normalize()
      }
      static GetRightPlaneToRef(DD, CD) {
        const cD = DD.m;
        CD.normal.x = cD[3] - cD[0], CD.normal.y = cD[7] - cD[4], CD.normal.z = cD[11] - cD[8], CD.d = cD[15] - cD[12], CD.normalize()
      }
      static GetTopPlaneToRef(DD, CD) {
        const cD = DD.m;
        CD.normal.x = cD[3] - cD[1], CD.normal.y = cD[7] - cD[5], CD.normal.z = cD[11] - cD[9], CD.d = cD[15] - cD[13], CD.normalize()
      }
      static GetBottomPlaneToRef(DD, CD) {
        const cD = DD.m;
        CD.normal.x = cD[3] + cD[1], CD.normal.y = cD[7] + cD[5], CD.normal.z = cD[11] + cD[9], CD.d = cD[15] + cD[13], CD.normalize()
      }
      static GetPlanesToRef(DD, CD) {
        pD.GetNearPlaneToRef(DD, CD[0]), pD.GetFarPlaneToRef(DD, CD[1]), pD.GetLeftPlaneToRef(DD, CD[2]), pD.GetRightPlaneToRef(DD, CD[3]), pD.GetTopPlaneToRef(DD, CD[4]), pD.GetBottomPlaneToRef(DD, CD[5])
      }
      static IsPointInFrustum(DD, CD) {
        for (let cD = 0; cD < 6; cD++)
          if (CD[cD].dotCoordinate(DD) < 0) return !1;
        return !0
      }
    }
  },
  37167: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => pD
    });
    var ID = cD(36446);
    class pD {
      constructor(DD, CD, cD, pD) {
        this.normal = new ID.p(DD, CD, cD), this.d = pD
      }
      XcD() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new pD(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let CD = 0;
        return 0 !== DD && (CD = 1 / DD), this.normal.x *= CD, this.normal.y *= CD, this.normal.z *= CD, this.d *= CD, this
      }
      transform(DD) {
        const CD = pD._TmpMatrix;
        DD.invertToRef(CD);
        const cD = CD.m,
          ID = this.normal.x,
          iD = this.normal.y,
          fD = this.normal.z,
          bD = this.d,
          QD = ID * cD[0] + iD * cD[1] + fD * cD[2] + bD * cD[3],
          wD = ID * cD[4] + iD * cD[5] + fD * cD[6] + bD * cD[7],
          SD = ID * cD[8] + iD * cD[9] + fD * cD[10] + bD * cD[11],
          BD = ID * cD[12] + iD * cD[13] + fD * cD[14] + bD * cD[15];
        return new pD(QD, wD, SD, BD)
      }
      dotCoordinate(DD) {
        return this.normal.x * DD.x + this.normal.y * DD.y + this.normal.z * DD.z + this.d
      }
      copyFromPoints(DD, CD, cD) {
        const ID = CD.x - DD.x,
          pD = CD.y - DD.y,
          iD = CD.z - DD.z,
          fD = cD.x - DD.x,
          bD = cD.y - DD.y,
          QD = cD.z - DD.z,
          wD = pD * QD - iD * bD,
          SD = iD * fD - ID * QD,
          BD = ID * bD - pD * fD,
          yD = Math.sqrt(wD * wD + SD * SD + BD * BD);
        let MD;
        return MD = 0 !== yD ? 1 / yD : 0, this.normal.x = wD * MD, this.normal.y = SD * MD, this.normal.z = BD * MD, this.d = -(this.normal.x * DD.x + this.normal.y * DD.y + this.normal.z * DD.z), this
      }
      isFrontFacingTo(DD, CD) {
        return ID.p.Dot(this.normal, DD) <= CD
      }
      signedDistanceTo(DD) {
        return ID.p.Dot(DD, this.normal) + this.d
      }
      static FromArray(DD) {
        return new pD(DD[0], DD[1], DD[2], DD[3])
      }
      static FromPoints(DD, CD, cD) {
        const ID = new pD(0, 0, 0, 0);
        return ID.copyFromPoints(DD, CD, cD), ID
      }
      static FromPositionAndNormal(DD, CD) {
        const cD = new pD(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(DD, CD, cD)
      }
      static FromPositionAndNormalToRef(DD, CD, cD) {
        return cD.normal.YCD(CD), cD.normal.normalize(), cD.d = -DD.dot(cD.normal), cD
      }
      static SignedDistanceToPlaneFromPositionAndNormal(DD, CD, cD) {
        const pD = -(CD.x * DD.x + CD.y * DD.y + CD.z * DD.z);
        return ID.p.Dot(cD, CD) + pD
      }
    }
    pD._TmpMatrix = ID.d.Identity()
  },
  37479: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => ID
    });
    class ID {
      constructor(DD, CD, cD, ID) {
        this.x = DD, this.y = CD, this.width = cD, this.height = ID
      }
      toGlobal(DD, CD) {
        return new ID(this.x * DD, this.y * CD, this.width * DD, this.height * CD)
      }
      toGlobalToRef(DD, CD, cD) {
        return cD.x = this.x * DD, cD.y = this.y * CD, cD.width = this.width * DD, cD.height = this.height * CD, this
      }
      clone() {
        return new ID(this.x, this.y, this.width, this.height)
      }
    }
  },
  38045: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => iD
    });
    var ID = cD(38048);
    const pD = (DD, CD, cD) => DD ? DD.getClassName && "Mesh" === DD.getClassName() ? null : !DD.getClassName || "SubMesh" !== DD.getClassName() && "PhysicsBody" !== DD.getClassName() ? DD.clone ? DD.clone() : Array.isArray(DD) ? DD.slice() : cD && "object" === typeof DD ? {
      ...DD
    } : null : DD.clone(CD) : null;
    class iD {
      static DeepCopy(DD, CD, cD, iD) {
        let fD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const bD = function(DD) {
          const CD = [];
          do {
            const cD = Object.getOwnPropertyNames(DD);
            for (const DD of cD) - 1 === CD.indexOf(DD) && CD.push(DD)
          } while (DD = Object.getPrototypeOf(DD));
          return CD
        }(DD);
        for (const wD of bD) {
          if ("_" === wD[0] && (!iD || -1 === iD.indexOf(wD))) continue;
          if (wD.endsWith("Observable")) continue;
          if (cD && -1 !== cD.indexOf(wD)) continue;
          const bD = DD[wD],
            SD = typeof bD;
          if ("function" !== SD) try {
            if ("object" === SD)
              if (bD instanceof Uint8Array) CD[wD] = Uint8Array.from(bD);
              else if (bD instanceof Array) {
              if (CD[wD] = [], bD.length > 0)
                if ("object" == typeof bD[0])
                  for (let DD = 0; DD < bD.length; DD++) {
                    const cD = pD(bD[DD], CD, fD); - 1 === CD[wD].indexOf(cD) && CD[wD].push(cD)
                  } else CD[wD] = bD.slice(0)
            } else CD[wD] = pD(bD, CD, fD);
            else CD[wD] = bD
          } catch (QD) {
            ID.e.Warn(QD.message)
          }
        }
      }
    }
  },
  37290: (DD, CD, cD) => {
    function ID() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (DD => {
        const CD = 16 * Math.random() | 0;
        return ("x" === DD ? CD : 3 & CD | 8).toString(16)
      }))
    }
    cD.d(CD, {
      d: () => ID
    })
  },
  38048: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => ID
    });
    class ID {
      static _CheckLimit(DD, CD) {
        let cD = ID._LogLimitOutputs[DD];
        return cD ? cD.current++ : (cD = {
          limit: CD,
          current: 1
        }, ID._LogLimitOutputs[DD] = cD), cD.current <= cD.limit
      }
      static _GenerateLimitMessage(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const cD = ID._LogLimitOutputs[DD];
        if (!cD || !ID.MessageLimitReached) return;
        const pD = this._Levels[CD];
        cD.current === cD.limit && ID[pD.name](ID.MessageLimitReached.replace(/%LIMIT%/g, "" + cD.limit).replace(/%TYPE%/g, pD.name ?? ""))
      }
      static _AddLogEntry(DD) {
        ID._LogCache = DD + ID._LogCache, ID.OnNewCacheEntry && ID.OnNewCacheEntry(DD)
      }
      static _FormatMessage(DD) {
        const CD = DD => DD < 10 ? "0" + DD : "" + DD,
          cD = new Date;
        return "[" + CD(cD.getHours()) + ":" + CD(cD.getMinutes()) + ":" + CD(cD.getSeconds()) + "]: " + DD
      }
      static _LogDisabled(DD, CD) {}
      static _LogEnabled() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          CD = arguments.length > 1 ? arguments[1] : void 0,
          cD = arguments.length > 2 ? arguments[2] : void 0;
        const pD = Array.isArray(CD) ? CD[0] : CD;
        if (void 0 !== cD && !ID._CheckLimit(pD, cD)) return;
        const iD = ID._FormatMessage(pD),
          fD = this._Levels[DD],
          bD = Array.isArray(CD) ? CD.slice(1) : [];
        fD.logFunc && fD.logFunc("BJS - " + iD, ...bD);
        const QD = `<div style='color:${fD.color}'>${iD}</div><br>`;
        ID._AddLogEntry(QD), ID._GenerateLimitMessage(pD, DD)
      }
      static get LogCache() {
        return ID._LogCache
      }
      static ClearLogCache() {
        ID._LogCache = "", ID._LogLimitOutputs = {}, ID.errorsCount = 0
      }
      static set LogLevels(DD) {
        ID.Log = ID._LogDisabled, ID.Warn = ID._LogDisabled, ID.Error = ID._LogDisabled;
        const CD = [ID.MessageLogLevel, ID.WarningLogLevel, ID.ErrorLogLevel];
        for (const cD of CD)
          if ((DD & cD) === cD) {
            const DD = this._Levels[cD];
            ID[DD.name] = ID._LogEnabled.bind(ID, cD)
          }
      }
    }
    ID.NoneLogLevel = 0, ID.MessageLogLevel = 1, ID.WarningLogLevel = 2, ID.ErrorLogLevel = 4, ID.AllLogLevel = 7, ID.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", ID._LogCache = "", ID._LogLimitOutputs = {}, ID._Levels = [{}, {
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
    }], ID.errorsCount = 0, ID.Log = ID._LogEnabled.bind(ID, ID.MessageLogLevel), ID.Warn = ID._LogEnabled.bind(ID, ID.WarningLogLevel), ID.Error = ID._LogEnabled.bind(ID, ID.ErrorLogLevel)
  },
  60379: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      CreateScreenshot: () => lD,
      CreateScreenshotAsync: () => LD,
      CreateScreenshotForFrameGraphAsync: () => kD,
      CreateScreenshotUsingRenderTarget: () => GD,
      CreateScreenshotUsingRenderTargetAsync: () => RD,
      CreateScreenshotWithResizeAsync: () => TD,
      RegisterScreenshotTools: () => sD,
      ScreenshotTools: () => YD
    });
    var ID = cD(39595),
      pD = cD(40924),
      iD = cD(40895),
      fD = cD(39174),
      bD = cD(40904),
      QD = cD(36464),
      wD = cD(36446);
    class SD extends bD.h {
      static _GetDefines(DD) {
        if (!DD) return null;
        return DD.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
      }
      _gatherImports(DD, CD) {
        DD ? (this._webGPUReady = !0, CD.push(Promise.all([cD.e(367).then((() => cD(60724))), cD.e(368).then((() => cD(60730)))]))) : CD.push(Promise.all([cD.e(369).then((() => cD(60733))), cD.e(370).then((() => cD(60739)))]))
      }
      constructor(DD) {
        const CD = {
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: DD,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || QD.b.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          vertexShader: SD.VertexUrl,
          fragmentShader: SD.FragmentUrl,
          uniforms: SD.Uniforms
        };
        super({
          ...CD,
          defines: SD._GetDefines(CD.engine)
        }), this.texelSize = new wD.n(0, 0)
      }
      bind() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.bind(DD), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
      }
    }
    SD.VertexUrl = "fxaa", SD.FragmentUrl = "fxaa", SD.Uniforms = ["texelSize"];
    class BD extends iD.d {
      getClassName() {
        return "FxaaPostProcess"
      }
      constructor(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          pD = arguments.length > 3 ? arguments[3] : void 0,
          iD = arguments.length > 4 ? arguments[4] : void 0,
          fD = arguments.length > 5 ? arguments[5] : void 0,
          bD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const QD = {
          uniforms: SD.Uniforms,
          size: "number" === typeof CD ? CD : void 0,
          camera: cD,
          samplingMode: pD || ID.c.BILINEAR_SAMPLINGMODE,
          engine: iD,
          reusable: fD,
          textureType: bD,
          ...CD
        };
        super(DD, SD.FragmentUrl, {
          effectWrapper: "number" !== typeof CD && CD.effectWrapper ? void 0 : new SD(DD, iD, QD),
          ...QD
        }), this.onApplyObservable.add((DD => {
          this._effectWrapper.texelSize = this.texelSize
        }))
      }
      static _Parse(DD, CD, cD, ID) {
        return fD.d.Parse((() => new BD(DD.name, DD.options, CD, DD.renderTargetSamplingMode, cD.DZ(), DD.reusable)), DD, cD, ID)
      }
    }
    var yD = cD(38048),
      MD = cD(39245),
      tD = cD(40941),
      ZD = cD(40917),
      oD = cD(39039);
    const vD = 0;
    class ND {
      constructor(DD, CD, cD) {
        this.name = DD, this._parentTask = CD, this._context = cD, this.disabled = !1
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
    class gD extends ND {
      static IsObjectListPass(DD) {
        return void 0 !== DD.setObjectList
      }
      get objectList() {
        return this._objectList
      }
      setObjectList(DD) {
        this._objectList = DD
      }
      constructor(DD, CD, cD, ID) {
        super(DD, CD, cD), this._engine = ID
      }
      _isValid() {
        const DD = super._isValid();
        return DD || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
      }
    }
    class XD extends ND {
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
      constructor(DD, CD, cD, ID) {
        super(DD, CD, cD), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = ID
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
            for (const CD of DD) this._dependencies.add(CD);
          else this._dependencies.add(DD)
      }
      collectDependencies(DD) {
        const CD = this._dependencies.keys();
        for (let cD = CD.next(); !0 !== cD.done; cD = CD.next()) DD.add(cD.value);
        if (void 0 !== this._renderTarget)
          if (Array.isArray(this._renderTarget))
            for (const cD of this._renderTarget) void 0 !== cD && DD.add(cD);
          else DD.add(this._renderTarget);
        void 0 !== this._renderTargetDepth && DD.add(this._renderTargetDepth)
      }
      setOutputLayerAndFaceIndices(DD) {
        const CD = this.frameGraphRenderTarget.renderTargetWrapper;
        if (CD)
          for (const cD of DD) CD.setLayerAndFaceIndex(cD.targetIndex, cD.layerIndex, cD.faceIndex)
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
    var mD = cD(36473);
    class nD {
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
      constructor(DD, CD) {
        this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new mD.c, this.onBeforeTaskExecute = new mD.c, this.onAfterTaskExecute = new mD.c, this.name = DD, this._frameGraph = CD, this._reset()
      }
      _reset() {
        for (const DD of this._passes) DD._dispose();
        for (const DD of this._passesDisabled) DD._dispose();
        this._passes.length = 0, this._passesDisabled.length = 0
      }
      _addPass(DD, CD) {
        CD ? this._passesDisabled.push(DD) : this._passes.push(DD)
      }
      _checkTask() {
        let DD, CD = null,
          cD = null;
        for (const bD of this._passes) {
          const ID = bD._isValid();
          if (ID) throw new Error(`Pass "${bD.name}" is not valid. ${ID}`);
          if (XD.IsRenderPass(bD)) {
            const DD = Array.isArray(bD.renderTarget) ? bD.renderTarget : [bD.renderTarget];
            CD = [];
            for (const cD of DD) void 0 !== cD && CD.push(this._frameGraph.textureManager.getTextureFromHandle(cD));
            cD = void 0 !== bD.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(bD.renderTargetDepth) : null
          } else gD.IsObjectListPass(bD) && (DD = bD.objectList)
        }
        let ID, pD = null,
          iD = [],
          fD = null;
        for (const bD of this._passesDisabled) {
          const DD = bD._isValid();
          if (DD) throw new Error(`Pass "${bD.name}" is not valid. ${DD}`);
          if (XD.IsRenderPass(bD)) {
            const DD = Array.isArray(bD.renderTarget) ? bD.renderTarget : [bD.renderTarget];
            pD = [];
            for (const CD of DD) void 0 !== CD && pD.push(this._frameGraph.textureManager.getTextureFromHandle(CD));
            iD = DD, fD = void 0 !== bD.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(bD.renderTargetDepth) : null
          } else gD.IsObjectListPass(bD) && (ID = bD.objectList)
        }
        if (this._passesDisabled.length > 0) {
          if (!this._checkSameRenderTarget(CD, pD)) {
            let DD = !0;
            for (const CD of iD)
              if (void 0 !== CD && !this._frameGraph.textureManager.isHistoryTexture(CD)) {
                DD = !1;
                break
              } if (!DD) throw new Error(`The output texture of the task "${this.name}" is different when it is enabled or disabled.`)
          }
          if (cD !== fD && null !== fD) throw new Error(`The output depth texture of the task "${this.name}" is different when it is enabled or disabled.`);
          if (DD !== ID && null !== ID) throw new Error(`The output object list of the task "${this.name}" is different when it is enabled or disabled.`)
        }
      }
      _execute() {
        const DD = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
        this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const CD of DD) CD._execute()
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
      _checkSameRenderTarget(DD, CD) {
        if (null === DD || null === CD) return DD === CD;
        if (DD.length !== CD.length) return !1;
        for (let cD = 0; cD < DD.length; cD++)
          if (DD[cD] !== CD[cD]) return !1;
        return !0
      }
    }
    class OD extends nD {
      get alphaMode() {
        return this.postProcess.alphaMode
      }
      set alphaMode(DD) {
        this.postProcess.alphaMode = DD
      }
      get drawWrapper() {
        return this._postProcessDrawWrapper
      }
      constructor(DD, CD, cD) {
        super(DD, CD), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = cD, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture = this._frameGraph.textureManager.createDanglingHandle(), this.outputDepthAttachmentTexture = this._frameGraph.textureManager.createDanglingHandle()
      }
      isReady() {
        return this.postProcess.isReady()
      }
      getClassName() {
        return "FrameGraphPostProcessTask"
      }
      record() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          CD = arguments.length > 1 ? arguments[1] : void 0,
          cD = arguments.length > 2 ? arguments[2] : void 0;
        if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
        const ID = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
        if (ID && (ID.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, ID), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentTexture, this.depthAttachmentTexture), ID) {
          const DD = this._frameGraph.textureManager.getTextureAbsoluteDimensions(ID);
          this._sourceWidth = DD.width, this._sourceHeight = DD.height
        }
        const pD = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
        this._outputWidth = pD.size.width, this._outputHeight = pD.size.height;
        const iD = this._frameGraph.addRenderPass(this.name);
        if (iD.depthReadOnly = this.depthReadOnly, iD.stencilReadOnly = this.stencilReadOnly, iD.addDependencies(this.sourceTexture), iD.setRenderTarget(this.outputTexture), iD.setRenderTargetDepth(this.depthAttachmentTexture), iD.setExecuteFunc((DD => {
            DD.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && DD.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), CD?.(DD), this.viewport && DD.setViewport(this.viewport), DD.applyFullScreenEffect(this._postProcessDrawWrapper, (() => {
              void 0 !== this.sourceTexture && DD.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), cD?.(DD), this.postProcess.bind()
            }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), DD.restoreDefaultFramebuffer(), DD.popDebugGroup()
          })), !DD) {
          const DD = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
          DD.depthReadOnly = this.depthReadOnly, DD.stencilReadOnly = this.stencilReadOnly, DD.addDependencies(this.sourceTexture), DD.setRenderTarget(this.outputTexture), DD.setRenderTargetDepth(this.depthAttachmentTexture), DD.setExecuteFunc((DD => {
            void 0 !== this.sourceTexture && 0 === this.alphaMode && (this.viewport && DD.setViewport(this.viewport), DD.copyTexture(this.sourceTexture, void 0, void 0 !== this.viewport))
          }))
        }
        return iD
      }
      dispose() {
        this.postProcess.dispose(), super.dispose()
      }
    }
    class PD extends OD {
      constructor(DD, CD, cD) {
        super(DD, CD, cD || new SD(DD, CD.engine))
      }
      getClassName() {
        return "FrameGraphFXAATask"
      }
      record() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          CD = arguments.length > 1 ? arguments[1] : void 0,
          cD = arguments.length > 2 ? arguments[2] : void 0;
        const ID = super.record(DD, CD, cD);
        return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, ID
      }
    }
    var HD = cD(40932);
    class UD extends OD {
      constructor(DD, CD, cD) {
        super(DD, CD, cD || new HD.f(DD, CD.engine))
      }
      getClassName() {
        return "FrameGraphPassTask"
      }
    }
    var xD = cD(39239),
      qD = cD(39319),
      JD = cD(39284),
      KD = cD(39388),
      aD = cD(36622);
    class VD {
      getRenderCamera(DD) {
        if (this._renderCamera) return this._renderCamera;
        {
          let CD;
          return CD = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, DD && CD && CD.isRigCamera ? CD.rigParent : CD
        }
      }
      setRenderCamera(DD) {
        this._renderCamera = DD
      }
      _getSharedGizmoLight() {
        return this._sharedGizmoLight || (this._sharedGizmoLight = new KD.b("shared gizmo light", new wD.p(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = aD.d.Gray()), this._sharedGizmoLight
      }
      static get DefaultUtilityLayer() {
        return null == VD._DefaultUtilityLayer ? VD._CreateDefaultUtilityLayerFromScene(QD.b.LastCreatedScene) : VD._DefaultUtilityLayer
      }
      static _CreateDefaultUtilityLayerFromScene(DD) {
        return VD._DefaultUtilityLayer = new VD(DD), VD._DefaultUtilityLayer.originalScene.Aq.addOnce((() => {
          VD._DefaultUtilityLayer = null
        })), VD._DefaultUtilityLayer
      }
      static get DefaultKeepDepthUtilityLayer() {
        return null == VD._DefaultKeepDepthUtilityLayer ? VD._CreateDefaultKeepUtilityLayerFromScene(QD.b.LastCreatedScene) : VD._DefaultKeepDepthUtilityLayer
      }
      static _CreateDefaultKeepUtilityLayerFromScene(DD) {
        return VD._DefaultKeepDepthUtilityLayer = new VD(DD), VD._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, VD._DefaultKeepDepthUtilityLayer.originalScene.Aq.addOnce((() => {
          VD._DefaultKeepDepthUtilityLayer = null
        })), VD._DefaultKeepDepthUtilityLayer
      }
      constructor(DD) {
        let CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.originalScene = DD, this.handleEvents = CD, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.processAllEvents = !1, this.pickingEnabled = !0, this.onPointerOutObservable = new mD.c, this.utilityLayerScene = new xD.e(DD.DZ(), {
          virtual: !0,
          useFloatingOrigin: DD.floatingOriginMode
        }), this.utilityLayerScene.useRightHandedSystem = DD.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), CD && (this._originalPointerObserver = DD.onPrePointerObservable.add((CD => {
          if (!this.utilityLayerScene.activeCamera) return;
          if (!this.pickingEnabled) return;
          if (!this.processAllEvents && CD.type !== qD.c.POINTERMOVE && CD.type !== qD.c.POINTERUP && CD.type !== qD.c.POINTERDOWN && CD.type !== qD.c.POINTERDOUBLETAP) return;
          this.utilityLayerScene.pointerX = DD.pointerX, this.utilityLayerScene.pointerY = DD.pointerY;
          const cD = CD.event;
          if (DD.isPointerCaptured(cD.pointerId)) return void(this._pointerCaptures[cD.pointerId] = !1);
          const ID = cD => {
              let ID;
              if (CD.nearInteractionPickingInfo) ID = CD.nearInteractionPickingInfo.pickedMesh.hq() == cD ? CD.nearInteractionPickingInfo : new JD.c;
              else if (cD !== this.utilityLayerScene && CD.originalPickingInfo) ID = CD.originalPickingInfo;
              else {
                let pD = null;
                this._renderCamera && (pD = cD._activeCamera, cD._activeCamera = this._renderCamera, CD.ray = null), ID = CD.ray ? cD.pickWithRay(CD.ray) : cD.MM(DD.pointerX, DD.pointerY), pD && (cD._activeCamera = pD)
              }
              return ID
            },
            pD = ID(this.utilityLayerScene);
          if (!CD.ray && pD && (CD.ray = pD.ray), CD.originalPickingInfo?.aimTransform && pD && (pD.aimTransform = CD.originalPickingInfo.aimTransform, pD.gripTransform = CD.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(CD), this.onlyCheckPointerDownEvents && CD.type != qD.c.POINTERDOWN) return CD.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new qD.e(CD.type, CD.event, pD), CD.type), void(CD.type === qD.c.POINTERUP && this._pointerCaptures[cD.pointerId] && (this._pointerCaptures[cD.pointerId] = !1));
          if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) pD && pD.hit && (CD.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new qD.e(CD.type, CD.event, pD), CD.type), CD.skipOnPointerObservable = !0);
          else {
            const cD = ID(DD),
              iD = CD.event;
            cD && pD && (0 === pD.distance && cD.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(cD.pickedMesh) ? (this._notifyObservers(CD, cD, iD), CD.skipOnPointerObservable = !0) : CD.type === qD.c.POINTERDOWN ? (this._pointerCaptures[iD.pointerId] = !0, this._notifyObservers(CD, cD, iD)) : CD.type !== qD.c.POINTERMOVE && CD.type !== qD.c.POINTERUP || (this._lastPointerEvents[iD.pointerId] && (this.onPointerOutObservable.notifyObservers(iD.pointerId), delete this._lastPointerEvents[iD.pointerId]), this._notifyObservers(CD, cD, iD)) : !this._pointerCaptures[iD.pointerId] && (pD.distance < cD.distance || 0 === cD.distance) ? (this._notifyObservers(CD, pD, iD), CD.skipOnPointerObservable || (CD.skipOnPointerObservable = pD.distance > 0)) : !this._pointerCaptures[iD.pointerId] && pD.distance >= cD.distance && (this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(cD.pickedMesh) ? (this._notifyObservers(CD, cD, iD), CD.skipOnPointerObservable = !0) : (CD.type !== qD.c.POINTERMOVE && CD.type !== qD.c.POINTERUP || this._lastPointerEvents[iD.pointerId] && (this.onPointerOutObservable.notifyObservers(iD.pointerId), delete this._lastPointerEvents[iD.pointerId]), this._notifyObservers(CD, pD, iD))), CD.type === qD.c.POINTERUP && this._pointerCaptures[iD.pointerId] && (this._pointerCaptures[iD.pointerId] = !1))
          }
        })), this._originalPointerObserver && DD.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, cD || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((DD => {
          this.shouldRender && DD == this.getRenderCamera() && this.render()
        }))), this._sceneDisposeObserver = this.originalScene.Aq.add((() => {
          this.dispose()
        })), this._updateCamera()
      }
      _notifyObservers(DD, CD, cD) {
        DD.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new qD.e(DD.type, DD.event, CD), DD.type), this._lastPointerEvents[cD.pointerId] = !0)
      }
      render() {
        if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
          const DD = this.utilityLayerScene.activeCamera.hq(),
            CD = this.utilityLayerScene.activeCamera;
          CD._scene = this.utilityLayerScene, CD.leftCamera && (CD.leftCamera._scene = this.utilityLayerScene), CD.rightCamera && (CD.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), CD._scene = DD, CD.leftCamera && (CD.leftCamera._scene = DD), CD.rightCamera && (CD.rightCamera._scene = DD)
        }
      }
      dispose() {
        this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.Aq.remove(this._sceneDisposeObserver), this._originalPointerObserver && this.originalScene.onPrePointerObservable.remove(this._originalPointerObserver), this.utilityLayerScene.dispose()
      }
      _updateCamera() {
        this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
      }
    }
    VD._DefaultUtilityLayer = null, VD._DefaultKeepDepthUtilityLayer = null;
    const zD = {
      FindMainCamera: function(DD) {
        return DD.findMainCamera()
      },
      FindMainObjectRenderer: function(DD) {
        return DD.findMainObjectRenderer()
      },
      CreateUtilityLayerRenderer: function(DD) {
        let CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const cD = DD.wo,
          ID = new VD(cD, CD, !0);
        ID.utilityLayerScene.activeCamera = cD.activeCamera;
        let pD = zD.FindMainCamera(cD.frameGraph);
        !pD && cD.cameras.length > 0 && (pD = cD.cameras[0]), pD && (ID.setRenderCamera(pD), ID.utilityLayerScene.activeCamera = pD);
        const iD = cD.onAfterRenderObservable.add((() => {
          ID.render()
        }));
        return ID.utilityLayerScene.Aq.addOnce((() => {
          cD.onAfterRenderObservable.remove(iD)
        })), ID
      }
    };
    let jD = null;

    function lD(DD, CD, cD, ID) {
      let pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        iD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        fD = arguments.length > 6 ? arguments[6] : void 0,
        bD = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        QD = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
      const {
        height: wD,
        width: SD
      } = dD(DD, CD, cD);
      if (!wD || !SD) return void yD.e.Error("Invalid 'size' parameter !");
      const BD = CD.hq();
      let tD = BD.activeCamera !== CD;
      if (BD.frameGraph) {
        const DD = zD.FindMainObjectRenderer(BD.frameGraph);
        DD && (tD = DD.camera !== CD)
      }
      tD ? GD(DD, CD, cD, (DD => {
        if (iD) {
          const CD = new Blob([DD]);
          MD.g.DownloadBlob(CD), ID && ID("")
        } else ID && ID(DD)
      }), pD, 1, DD.getCreationOptions().antialias, void 0, void 0, void 0, void 0, fD) : DD.onEndFrameObservable.addOnce((() => {
        jD || (jD = document.createElement("canvas")), jD.width = SD, jD.height = wD;
        const CD = jD.getContext("2d"),
          cD = DD.getRenderingCanvas();
        if (!CD || !cD) return void yD.e.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
        const tD = cD.width,
          ZD = cD.height,
          oD = jD.width,
          vD = jD.height,
          ND = oD / tD,
          gD = vD / ZD,
          XD = bD ? Math.max(ND, gD) : Math.min(ND, gD),
          mD = tD * XD,
          nD = ZD * XD,
          OD = (oD - mD) / 2,
          PD = (vD - nD) / 2;
        CD.save(), CD.fillStyle = QD ? BD.clearColor.toHexString() : "rgba(0, 0, 0, 0)", CD.fillRect(0, 0, SD, wD), CD.restore(), CD.drawImage(cD, 0, 0, tD, ZD, OD, PD, mD, nD), iD ? (MD.g.EncodeScreenshotCanvasData(jD, void 0, pD, void 0, fD), ID && ID("")) : MD.g.EncodeScreenshotCanvasData(jD, ID, pD, void 0, fD)
      }))
    }
    async function LD(DD, CD, cD) {
      let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        pD = arguments.length > 4 ? arguments[4] : void 0,
        iD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        fD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        bD = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      return await new Promise(((QD, wD) => {
        lD(DD, CD, cD, (DD => {
          "undefined" !== typeof DD ? QD(DD) : wD(new Error("Data is undefined"))
        }), ID, bD, pD, iD, fD)
      }))
    }
    async function TD(DD, CD, cD, ID) {
      let pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        iD = arguments.length > 5 ? arguments[5] : void 0,
        fD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return await new Promise((bD => {
        lD(DD, CD, {
          width: cD,
          height: ID
        }, (() => {
          bD()
        }), pD, !0, iD, fD)
      }))
    }

    function GD(DD, CD, iD, fD) {
      let bD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        QD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
        wD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        SD = arguments.length > 7 ? arguments[7] : void 0,
        MD = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        vD = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        ND = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
        gD = arguments.length > 11 ? arguments[11] : void 0,
        XD = arguments.length > 12 ? arguments[12] : void 0,
        mD = arguments.length > 13 ? arguments[13] : void 0,
        nD = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
        OD = arguments.length > 15 ? arguments[15] : void 0;
      const PD = CD.hq();
      if (PD.frameGraph) return void kD(PD.frameGraph, CD, iD, bD, QD, wD, SD, gD, mD, !fD).then((DD => {
        fD && fD(DD)
      }));
      const {
        height: HD,
        width: UD,
        finalWidth: xD,
        finalHeight: qD
      } = dD(DD, CD, iD), JD = {
        width: UD,
        height: HD
      };
      if (!HD || !UD) return void yD.e.Error("Invalid 'size' parameter !");
      DD.skipFrameRender = !0;
      const KD = DD.getRenderWidth,
        aD = DD.getRenderHeight;
      DD.getRenderWidth = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && DD._currentRenderTarget ? DD._currentRenderTarget.width : UD
      }, DD.getRenderHeight = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && DD._currentRenderTarget ? DD._currentRenderTarget.height : HD
      }, DD.onResizeObservable.hasObservers() && DD.onResizeObservable.notifyObservers(DD);
      const VD = new pD.b("screenShot", JD, PD, !1, !1, 0, !1, ID.c.BILINEAR_SAMPLINGMODE, void 0, vD, void 0, void 0, void 0, QD);
      VD.renderList = PD.meshes.slice(), VD.samples = QD, VD.renderSprites = MD, VD.activeCamera = CD, VD.forceLayerMaskCheck = ND, XD?.(VD);
      const zD = mD || tD.DumpData,
        jD = () => {
          PD.incrementRenderId(), PD.resetCachedMaterial(), (0, oD.e)((() => VD.isReadyForRendering() && CD.isReady(!0)), (() => {
            DD.onEndFrameObservable.addOnce((() => {
              xD === UD && qD === HD ? VD.readPixels(void 0, void 0, void 0, !1).then((DD => {
                zD(UD, HD, DD, fD, bD, SD, !0, void 0, gD), VD.dispose()
              })) : (DD.isWebGPU ? cD.e(363).then((() => cD(60668))) : cD.e(364).then((() => cD(60673)))).then((async () => await (0, ZD.d)("pass", VD.getInternalTexture(), PD, void 0, void 0, void 0, xD, qD).then((CD => {
                DD._readTexturePixels(CD, xD, qD, -1, 0, null, !0, !1, 0, 0).then((DD => {
                  zD(xD, qD, DD, fD, bD, SD, !0, void 0, gD), CD.dispose()
                }))
              }))))
            })), PD.incrementRenderId(), PD.resetCachedMaterial();
            const ID = PD.activeCamera,
              pD = PD.activeCameras,
              iD = CD.outputRenderTarget,
              QD = PD.spritesEnabled;
            PD.activeCamera = CD, PD.activeCameras = null, CD.outputRenderTarget = VD, PD.spritesEnabled = MD;
            const wD = PD.meshes;
            PD.meshes = VD.renderList || PD.meshes;
            try {
              PD.render()
            } finally {
              PD.activeCamera = ID, PD.activeCameras = pD, CD.outputRenderTarget = iD, PD.spritesEnabled = QD, PD.meshes = wD, DD.getRenderWidth = KD, DD.getRenderHeight = aD, DD.onResizeObservable.hasObservers() && DD.onResizeObservable.notifyObservers(DD), CD.getProjectionMatrix(!0), DD.skipFrameRender = !1
            }
          }), (() => {
            DD.skipFrameRender = !1, DD.getRenderWidth = KD, DD.getRenderHeight = aD, OD?.()
          }), void 0, nD)
        };
      if (wD) {
        const DD = new BD("antialiasing", 1, PD.activeCamera);
        VD.addPostProcess(DD), DD.autoClear = !0, DD.onEffectCreatedObservable.addOnce((DD => {
          DD.isReady() ? jD() : DD.onCompiled = () => {
            jD()
          }
        }))
      } else jD()
    }
    async function RD(DD, CD, cD) {
      let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        iD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        fD = arguments.length > 6 ? arguments[6] : void 0,
        bD = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        QD = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        wD = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
        SD = arguments.length > 10 ? arguments[10] : void 0,
        BD = arguments.length > 11 ? arguments[11] : void 0,
        yD = arguments.length > 12 ? arguments[12] : void 0;
      return await new Promise(((MD, tD) => {
        GD(DD, CD, cD, (DD => {
          "undefined" !== typeof DD ? MD(DD) : tD(new Error("Data is undefined"))
        }), ID, pD, iD, fD, bD, QD, wD, SD, BD, yD)
      }))
    }
    async function kD(DD, CD, cD) {
      let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        iD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        fD = arguments.length > 6 ? arguments[6] : void 0,
        bD = arguments.length > 7 ? arguments[7] : void 0,
        QD = arguments.length > 8 ? arguments[8] : void 0,
        wD = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        SD = arguments.length > 10 ? arguments[10] : void 0;
      const BD = DD.engine,
        yD = DD.textureManager,
        {
          height: MD,
          width: ZD,
          finalWidth: oD,
          finalHeight: ND
        } = dD(BD, CD, cD),
        gD = {
          width: ZD,
          height: MD
        },
        XD = QD || tD.DumpData,
        mD = DD.tasks,
        nD = mD.length,
        OD = DD.pausedExecution,
        HD = BD.getCaps().parallelShaderCompile;
      yD.setBackBufferTextures(0, 0, {
        size: gD,
        options: {
          createMipMaps: !1,
          samples: pD,
          types: [0],
          formats: [5],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot color"]
        },
        sizeIsPercentage: !1
      }, {
        size: gD,
        options: {
          createMipMaps: !1,
          samples: pD,
          types: [0],
          formats: [BD.isStencilEnable ? 13 : 14],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot depth"]
        },
        sizeIsPercentage: !1
      });
      let xD = vD;
      if (iD) {
        const CD = new PD("fxaa", DD);
        CD.sourceTexture = xD, xD = CD.outputTexture, DD.addTask(CD)
      }
      if (oD !== ZD || ND !== MD) {
        const CD = new UD("pass", DD);
        CD.sourceTexture = xD, CD.targetTexture = DD.textureManager.createRenderTargetTexture("pass_output", {
          size: {
            width: oD,
            height: ND
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
        }), xD = CD.outputTexture, DD.addTask(CD)
      }
      const qD = zD.FindMainObjectRenderer(DD);
      let JD = null;
      qD && (JD = qD.camera, qD.camera = CD), BD.getCaps().parallelShaderCompile = void 0, await DD.buildAsync();
      const KD = SD ?? (yD.hasHistoryTextures ? 32 : 1);
      for (let tD = 0; tD < KD; ++tD) DD.execute();
      DD.pausedExecution = !0, BD.getCaps().parallelShaderCompile = HD;
      for (let tD = nD; tD < mD.length; ++tD) DD.tasks[tD].dispose();
      DD.tasks.length = nD, qD && JD && (qD.camera = JD);
      const aD = DD.textureManager.getTextureFromHandle(xD);
      return aD.incrementReferences(), yD.resetBackBufferTextures(), await DD.buildAsync(), DD.pausedExecution = OD, new Promise((DD => {
        BD._readTexturePixels(aD, oD, ND, -1, 0, null, !0, !1, 0, 0).then((async CD => {
          aD.dispose(), XD(oD, ND, CD, wD ? void 0 : CD => DD(CD), ID, fD, !0, void 0, bD), wD && DD(null)
        }))
      }))
    }

    function dD(DD, CD, cD) {
      let ID = 0,
        pD = 0,
        iD = 0,
        fD = 0;
      if ("object" === typeof cD) {
        const bD = cD.precision ? Math.abs(cD.precision) : 1;
        cD.width && cD.height ? (ID = cD.height * bD, pD = cD.width * bD) : cD.width && !cD.height ? (pD = cD.width * bD, ID = Math.round(pD / DD.getAspectRatio(CD))) : cD.height && !cD.width ? (ID = cD.height * bD, pD = Math.round(ID * DD.getAspectRatio(CD))) : (pD = Math.round(DD.getRenderWidth() * bD), ID = Math.round(pD / DD.getAspectRatio(CD))), cD.finalWidth && cD.finalHeight ? (fD = cD.finalHeight, iD = cD.finalWidth) : cD.finalWidth && !cD.finalHeight ? (iD = cD.finalWidth, fD = Math.round(iD / DD.getAspectRatio(CD))) : cD.finalHeight && !cD.finalWidth ? (fD = cD.finalHeight, iD = Math.round(fD * DD.getAspectRatio(CD))) : (iD = pD, fD = ID)
      } else isNaN(cD) || (ID = cD, pD = cD, iD = cD, fD = cD);
      return pD && (pD = Math.floor(pD)), ID && (ID = Math.floor(ID)), iD && (iD = Math.floor(iD)), fD && (fD = Math.floor(fD)), {
        height: 0 | ID,
        width: 0 | pD,
        finalWidth: 0 | iD,
        finalHeight: 0 | fD
      }
    }
    const YD = {
      CreateScreenshot: lD,
      CreateScreenshotAsync: LD,
      CreateScreenshotWithResizeAsync: TD,
      CreateScreenshotUsingRenderTarget: GD,
      CreateScreenshotUsingRenderTargetAsync: RD,
      CreateScreenshotForFrameGraphAsync: kD
    };
    let WD = !1;

    function sD() {
      if (WD) return;
      WD = !0;
      MD.g.CreateScreenshot = lD, MD.g.CreateScreenshotAsync = LD, MD.g.CreateScreenshotUsingRenderTarget = GD, MD.g.CreateScreenshotUsingRenderTargetAsync = RD
    }
    sD()
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);