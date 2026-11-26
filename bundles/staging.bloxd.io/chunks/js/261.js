export const id = 261;
export const ids = [261, 262];
export const modules = {
  41512: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => wV,
      g: () => vV
    });
    var JV = xV(41257),
      YV = xV(41263),
      UV = xV(38269),
      yV = xV(38389),
      pV = xV(41521),
      QV = xV(41486),
      nV = xV(38318);
    let wV = (() => {
        var VV;
        let eV, xV, QV = pV.d,
          nV = [],
          wV = [],
          ZV = [],
          vV = [];
        return VV = class extends QV {
          constructor(VV, eV, xV, YV) {
            super(VV, xV, YV), this.groundColor = (0, JV.l)(this, nV, new yV.d(0, 0, 0)), this.direction = ((0, JV.l)(this, wV), (0, JV.l)(this, ZV, void 0)), (0, JV.l)(this, vV), this.direction = eV || UV.o.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(VV) {
            return this.direction = UV.o.Normalize(VV.subtract(UV.o.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(VV, eV) {
            const xV = UV.o.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", xV.x, xV.y, xV.z, 0, eV), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), eV), this
          }
          transferToNodeMaterialEffect(VV, eV) {
            const xV = UV.o.Normalize(this.direction);
            return VV.setFloat3(eV, xV.x, xV.y, xV.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = UV.d.Identity()), this._worldMatrix
          }
          getTypeID() {
            return pV.d.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(VV, eV) {
            VV["HEMILIGHT" + eV] = !0
          }
        }, (() => {
          const UV = "function" === typeof Symbol && Symbol.metadata ? Object.create(QV[Symbol.metadata] ?? null) : void 0;
          eV = [(0, YV.o)()], xV = [(0, YV.I)()], (0, JV.i)(null, null, eV, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: VV => "groundColor" in VV,
              get: VV => VV.groundColor,
              set: (VV, eV) => {
                VV.groundColor = eV
              }
            },
            metadata: UV
          }, nV, wV), (0, JV.i)(null, null, xV, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: VV => "direction" in VV,
              get: VV => VV.direction,
              set: (VV, eV) => {
                VV.direction = eV
              }
            },
            metadata: UV
          }, ZV, vV), UV && Object.defineProperty(VV, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: UV
          })
        })(), VV
      })(),
      ZV = !1;

    function vV() {
      ZV || (ZV = !0, QV.e.AddNodeConstructor("Light_Type_3", ((VV, eV) => () => new wV(VV, UV.o.Zero(), eV))), (0, nV.d)("BABYLON.HemisphericLight", wV))
    }
  },
  38908: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => YV
    });
    var JV = xV(38917);
    class YV {
      static GetPlanes(VV) {
        const eV = [];
        for (let xV = 0; xV < 6; xV++) eV.push(new JV.d(0, 0, 0, 0));
        return YV.GetPlanesToRef(VV, eV), eV
      }
      static GetNearPlaneToRef(VV, eV) {
        const xV = VV.m;
        eV.normal.x = xV[3] + xV[2], eV.normal.y = xV[7] + xV[6], eV.normal.z = xV[11] + xV[10], eV.d = xV[15] + xV[14], eV.normalize()
      }
      static GetFarPlaneToRef(VV, eV) {
        const xV = VV.m;
        eV.normal.x = xV[3] - xV[2], eV.normal.y = xV[7] - xV[6], eV.normal.z = xV[11] - xV[10], eV.d = xV[15] - xV[14], eV.normalize()
      }
      static GetLeftPlaneToRef(VV, eV) {
        const xV = VV.m;
        eV.normal.x = xV[3] + xV[0], eV.normal.y = xV[7] + xV[4], eV.normal.z = xV[11] + xV[8], eV.d = xV[15] + xV[12], eV.normalize()
      }
      static GetRightPlaneToRef(VV, eV) {
        const xV = VV.m;
        eV.normal.x = xV[3] - xV[0], eV.normal.y = xV[7] - xV[4], eV.normal.z = xV[11] - xV[8], eV.d = xV[15] - xV[12], eV.normalize()
      }
      static GetTopPlaneToRef(VV, eV) {
        const xV = VV.m;
        eV.normal.x = xV[3] - xV[1], eV.normal.y = xV[7] - xV[5], eV.normal.z = xV[11] - xV[9], eV.d = xV[15] - xV[13], eV.normalize()
      }
      static GetBottomPlaneToRef(VV, eV) {
        const xV = VV.m;
        eV.normal.x = xV[3] + xV[1], eV.normal.y = xV[7] + xV[5], eV.normal.z = xV[11] + xV[9], eV.d = xV[15] + xV[13], eV.normalize()
      }
      static GetPlanesToRef(VV, eV) {
        YV.GetNearPlaneToRef(VV, eV[0]), YV.GetFarPlaneToRef(VV, eV[1]), YV.GetLeftPlaneToRef(VV, eV[2]), YV.GetRightPlaneToRef(VV, eV[3]), YV.GetTopPlaneToRef(VV, eV[4]), YV.GetBottomPlaneToRef(VV, eV[5])
      }
      static IsPointInFrustum(VV, eV) {
        for (let xV = 0; xV < 6; xV++)
          if (eV[xV].dotCoordinate(VV) < 0) return !1;
        return !0
      }
    }
  },
  38917: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => YV
    });
    var JV = xV(38269);
    class YV {
      constructor(VV, eV, xV, YV) {
        this.normal = new JV.o(VV, eV, xV), this.d = YV
      }
      WYV() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new YV(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let VV = this.normal.getHashCode();
        return VV = 397 * VV ^ this.d, VV
      }
      normalize() {
        const VV = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let eV = 0;
        return 0 !== VV && (eV = 1 / VV), this.normal.x *= eV, this.normal.y *= eV, this.normal.z *= eV, this.d *= eV, this
      }
      transform(VV) {
        const eV = YV._TmpMatrix;
        VV.invertToRef(eV);
        const xV = eV.m,
          JV = this.normal.x,
          UV = this.normal.y,
          yV = this.normal.z,
          pV = this.d,
          QV = JV * xV[0] + UV * xV[1] + yV * xV[2] + pV * xV[3],
          nV = JV * xV[4] + UV * xV[5] + yV * xV[6] + pV * xV[7],
          wV = JV * xV[8] + UV * xV[9] + yV * xV[10] + pV * xV[11],
          ZV = JV * xV[12] + UV * xV[13] + yV * xV[14] + pV * xV[15];
        return new YV(QV, nV, wV, ZV)
      }
      dotCoordinate(VV) {
        return this.normal.x * VV.x + this.normal.y * VV.y + this.normal.z * VV.z + this.d
      }
      copyFromPoints(VV, eV, xV) {
        const JV = eV.x - VV.x,
          YV = eV.y - VV.y,
          UV = eV.z - VV.z,
          yV = xV.x - VV.x,
          pV = xV.y - VV.y,
          QV = xV.z - VV.z,
          nV = YV * QV - UV * pV,
          wV = UV * yV - JV * QV,
          ZV = JV * pV - YV * yV,
          vV = Math.sqrt(nV * nV + wV * wV + ZV * ZV);
        let rV;
        return rV = 0 !== vV ? 1 / vV : 0, this.normal.x = nV * rV, this.normal.y = wV * rV, this.normal.z = ZV * rV, this.d = -(this.normal.x * VV.x + this.normal.y * VV.y + this.normal.z * VV.z), this
      }
      isFrontFacingTo(VV, eV) {
        return JV.o.Dot(this.normal, VV) <= eV
      }
      signedDistanceTo(VV) {
        return JV.o.Dot(VV, this.normal) + this.d
      }
      static FromArray(VV) {
        return new YV(VV[0], VV[1], VV[2], VV[3])
      }
      static FromPoints(VV, eV, xV) {
        const JV = new YV(0, 0, 0, 0);
        return JV.copyFromPoints(VV, eV, xV), JV
      }
      static FromPositionAndNormal(VV, eV) {
        const xV = new YV(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(VV, eV, xV)
      }
      static FromPositionAndNormalToRef(VV, eV, xV) {
        return xV.normal.iG(eV), xV.normal.normalize(), xV.d = -VV.dot(xV.normal), xV
      }
      static SignedDistanceToPlaneFromPositionAndNormal(VV, eV, xV) {
        const YV = -(eV.x * VV.x + eV.y * VV.y + eV.z * VV.z);
        return JV.o.Dot(xV, eV) + YV
      }
    }
    YV._TmpMatrix = JV.d.Identity()
  },
  39240: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => JV
    });
    class JV {
      constructor(VV, eV, xV, JV) {
        this.x = VV, this.y = eV, this.width = xV, this.height = JV
      }
      toGlobal(VV, eV) {
        return new JV(this.x * VV, this.y * eV, this.width * VV, this.height * eV)
      }
      toGlobalToRef(VV, eV, xV) {
        return xV.x = this.x * VV, xV.y = this.y * eV, xV.width = this.width * VV, xV.height = this.height * eV, this
      }
      clone() {
        return new JV(this.x, this.y, this.width, this.height)
      }
    }
  },
  39867: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => UV
    });
    var JV = xV(39870);
    const YV = (VV, eV, xV) => VV ? VV.getClassName && "Mesh" === VV.getClassName() ? null : !VV.getClassName || "SubMesh" !== VV.getClassName() && "PhysicsBody" !== VV.getClassName() ? VV.clone ? VV.clone() : Array.isArray(VV) ? VV.slice() : xV && "object" === typeof VV ? {
      ...VV
    } : null : VV.clone(eV) : null;
    class UV {
      static DeepCopy(VV, eV, xV, UV) {
        let yV = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const pV = function(VV) {
          const eV = [];
          do {
            const xV = Object.getOwnPropertyNames(VV);
            for (const VV of xV) - 1 === eV.indexOf(VV) && eV.push(VV)
          } while (VV = Object.getPrototypeOf(VV));
          return eV
        }(VV);
        for (const nV of pV) {
          if ("_" === nV[0] && (!UV || -1 === UV.indexOf(nV))) continue;
          if (nV.endsWith("Observable")) continue;
          if (xV && -1 !== xV.indexOf(nV)) continue;
          const pV = VV[nV],
            wV = typeof pV;
          if ("function" !== wV) try {
            if ("object" === wV)
              if (pV instanceof Uint8Array) eV[nV] = Uint8Array.from(pV);
              else if (pV instanceof Array) {
              if (eV[nV] = [], pV.length > 0)
                if ("object" == typeof pV[0])
                  for (let VV = 0; VV < pV.length; VV++) {
                    const xV = YV(pV[VV], eV, yV); - 1 === eV[nV].indexOf(xV) && eV[nV].push(xV)
                  } else eV[nV] = pV.slice(0)
            } else eV[nV] = YV(pV, eV, yV);
            else eV[nV] = pV
          } catch (QV) {
            JV.b.Warn(QV.message)
          }
        }
      }
    }
  },
  39058: (VV, eV, xV) => {
    function JV() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (VV => {
        const eV = 16 * Math.random() | 0;
        return ("x" === VV ? eV : 3 & eV | 8).toString(16)
      }))
    }
    xV.d(eV, {
      d: () => JV
    })
  },
  39870: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => JV
    });
    class JV {
      static _CheckLimit(VV, eV) {
        let xV = JV._LogLimitOutputs[VV];
        return xV ? xV.current++ : (xV = {
          limit: eV,
          current: 1
        }, JV._LogLimitOutputs[VV] = xV), xV.current <= xV.limit
      }
      static _GenerateLimitMessage(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const xV = JV._LogLimitOutputs[VV];
        if (!xV || !JV.MessageLimitReached) return;
        const YV = this._Levels[eV];
        xV.current === xV.limit && JV[YV.name](JV.MessageLimitReached.replace(/%LIMIT%/g, "" + xV.limit).replace(/%TYPE%/g, YV.name ?? ""))
      }
      static _AddLogEntry(VV) {
        JV._LogCache = VV + JV._LogCache, JV.OnNewCacheEntry && JV.OnNewCacheEntry(VV)
      }
      static _FormatMessage(VV) {
        const eV = VV => VV < 10 ? "0" + VV : "" + VV,
          xV = new Date;
        return "[" + eV(xV.getHours()) + ":" + eV(xV.getMinutes()) + ":" + eV(xV.getSeconds()) + "]: " + VV
      }
      static _LogDisabled(VV, eV) {}
      static _LogEnabled() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          eV = arguments.length > 1 ? arguments[1] : void 0,
          xV = arguments.length > 2 ? arguments[2] : void 0;
        const YV = Array.isArray(eV) ? eV[0] : eV;
        if (void 0 !== xV && !JV._CheckLimit(YV, xV)) return;
        const UV = JV._FormatMessage(YV),
          yV = this._Levels[VV],
          pV = Array.isArray(eV) ? eV.slice(1) : [];
        yV.logFunc && yV.logFunc("BJS - " + UV, ...pV);
        const QV = `<div style='color:${yV.color}'>${UV}</div><br>`;
        JV._AddLogEntry(QV), JV._GenerateLimitMessage(YV, VV)
      }
      static get LogCache() {
        return JV._LogCache
      }
      static ClearLogCache() {
        JV._LogCache = "", JV._LogLimitOutputs = {}, JV.errorsCount = 0
      }
      static set LogLevels(VV) {
        JV.Log = JV._LogDisabled, JV.Warn = JV._LogDisabled, JV.Error = JV._LogDisabled;
        const eV = [JV.MessageLogLevel, JV.WarningLogLevel, JV.ErrorLogLevel];
        for (const xV of eV)
          if ((VV & xV) === xV) {
            const VV = this._Levels[xV];
            JV[VV.name] = JV._LogEnabled.bind(JV, xV)
          }
      }
    }
    JV.NoneLogLevel = 0, JV.MessageLogLevel = 1, JV.WarningLogLevel = 2, JV.ErrorLogLevel = 4, JV.AllLogLevel = 7, JV.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", JV._LogCache = "", JV._LogLimitOutputs = {}, JV._Levels = [{}, {
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
    }], JV.errorsCount = 0, JV.Log = JV._LogEnabled.bind(JV, JV.MessageLogLevel), JV.Warn = JV._LogEnabled.bind(JV, JV.WarningLogLevel), JV.Error = JV._LogEnabled.bind(JV, JV.ErrorLogLevel)
  },
  64275: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      CreateScreenshot: () => CV,
      CreateScreenshotAsync: () => aV,
      CreateScreenshotForFrameGraphAsync: () => lV,
      CreateScreenshotUsingRenderTarget: () => cV,
      CreateScreenshotUsingRenderTargetAsync: () => hV,
      CreateScreenshotWithResizeAsync: () => oV,
      RegisterScreenshotTools: () => KV,
      ScreenshotTools: () => fV
    });
    var JV = xV(41738),
      YV = xV(44717),
      UV = xV(44697),
      yV = xV(41279),
      pV = xV(44699),
      QV = xV(38287),
      nV = xV(38269);
    class wV extends pV.d {
      static _GetDefines(VV) {
        if (!VV) return null;
        return VV.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
      }
      _gatherImports(VV, eV) {
        VV ? (this._webGPUReady = !0, eV.push(Promise.all([xV.e(683).then((() => xV(64532))), xV.e(684).then((() => xV(64534)))]))) : eV.push(Promise.all([xV.e(685).then((() => xV(64540))), xV.e(686).then((() => xV(64549)))]))
      }
      constructor(VV) {
        const eV = {
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: VV,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || QV.d.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          vertexShader: wV.VertexUrl,
          fragmentShader: wV.FragmentUrl,
          uniforms: wV.Uniforms
        };
        super({
          ...eV,
          defines: wV._GetDefines(eV.engine)
        }), this.texelSize = new nV.n(0, 0)
      }
      bind() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.bind(VV), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
      }
    }
    wV.VertexUrl = "fxaa", wV.FragmentUrl = "fxaa", wV.Uniforms = ["texelSize"];
    class ZV extends UV.d {
      getClassName() {
        return "FxaaPostProcess"
      }
      constructor(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          YV = arguments.length > 3 ? arguments[3] : void 0,
          UV = arguments.length > 4 ? arguments[4] : void 0,
          yV = arguments.length > 5 ? arguments[5] : void 0,
          pV = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const QV = {
          uniforms: wV.Uniforms,
          size: "number" === typeof eV ? eV : void 0,
          camera: xV,
          samplingMode: YV || JV.f.BILINEAR_SAMPLINGMODE,
          engine: UV,
          reusable: yV,
          textureType: pV,
          ...eV
        };
        super(VV, wV.FragmentUrl, {
          effectWrapper: "number" !== typeof eV && eV.effectWrapper ? void 0 : new wV(VV, UV, QV),
          ...QV
        }), this.onApplyObservable.add((VV => {
          this._effectWrapper.texelSize = this.texelSize
        }))
      }
      static _Parse(VV, eV, xV, JV) {
        return yV.b.Parse((() => new ZV(VV.name, VV.options, eV, VV.renderTargetSamplingMode, xV.sk(), VV.reusable)), VV, xV, JV)
      }
    }
    var vV = xV(39870),
      rV = xV(41341),
      kV = xV(44723),
      bV = xV(44714),
      EV = xV(41145);
    const BV = 0;
    class jV {
      constructor(VV, eV, xV) {
        this.name = VV, this._parentTask = eV, this._context = xV, this.disabled = !1
      }
      setInitializeFunc(VV) {
        this._initFunc = VV
      }
      setExecuteFunc(VV) {
        this._executeFunc = VV
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
    class qV extends jV {
      static IsObjectListPass(VV) {
        return void 0 !== VV.setObjectList
      }
      get objectList() {
        return this._objectList
      }
      setObjectList(VV) {
        this._objectList = VV
      }
      constructor(VV, eV, xV, JV) {
        super(VV, eV, xV), this._engine = JV
      }
      _isValid() {
        const VV = super._isValid();
        return VV || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
      }
    }
    class tV extends jV {
      static IsRenderPass(VV) {
        return void 0 !== VV.setRenderTarget
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
      constructor(VV, eV, xV, JV) {
        super(VV, eV, xV), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = JV
      }
      setRenderTarget(VV) {
        this._renderTarget = VV
      }
      setRenderTargetDepth(VV) {
        this._renderTargetDepth = VV
      }
      addDependencies(VV) {
        if (void 0 !== VV)
          if (Array.isArray(VV))
            for (const eV of VV) this._dependencies.add(eV);
          else this._dependencies.add(VV)
      }
      collectDependencies(VV) {
        const eV = this._dependencies.keys();
        for (let xV = eV.next(); !0 !== xV.done; xV = eV.next()) VV.add(xV.value);
        if (void 0 !== this._renderTarget)
          if (Array.isArray(this._renderTarget))
            for (const xV of this._renderTarget) void 0 !== xV && VV.add(xV);
          else VV.add(this._renderTarget);
        void 0 !== this._renderTargetDepth && VV.add(this._renderTargetDepth)
      }
      setOutputLayerAndFaceIndices(VV) {
        const eV = this.frameGraphRenderTarget.renderTargetWrapper;
        if (eV)
          for (const xV of VV) eV.setLayerAndFaceIndex(xV.targetIndex, xV.layerIndex, xV.faceIndex)
      }
      _initialize() {
        this._frameGraphRenderTarget = this._context.createRenderTarget(this.name, this._renderTarget, this._renderTargetDepth, this.depthReadOnly, this.stencilReadOnly), super._initialize()
      }
      _execute() {
        this._context.bindRenderTarget(this._frameGraphRenderTarget), super._execute(), this._context.restoreDefaultFramebuffer()
      }
      _isValid() {
        const VV = super._isValid();
        return VV || (void 0 !== this._renderTarget || void 0 !== this.renderTargetDepth ? null : "Render target and render target depth cannot both be undefined.")
      }
      _dispose() {
        this._frameGraphRenderTarget?.dispose()
      }
    }
    var FV = xV(38296);
    class TV {
      get name() {
        return this._name
      }
      set name(VV) {
        this._name = VV
      }
      get disabled() {
        return this._disabled
      }
      set disabled(VV) {
        this._disabled = VV
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
      constructor(VV, eV) {
        this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new FV.c, this.onBeforeTaskExecute = new FV.c, this.onAfterTaskExecute = new FV.c, this.name = VV, this._frameGraph = eV, this._reset()
      }
      _reset() {
        for (const VV of this._passes) VV._dispose();
        for (const VV of this._passesDisabled) VV._dispose();
        this._passes.length = 0, this._passesDisabled.length = 0
      }
      _addPass(VV, eV) {
        eV ? this._passesDisabled.push(VV) : this._passes.push(VV)
      }
      _checkTask() {
        let VV, eV = null,
          xV = null;
        for (const pV of this._passes) {
          const JV = pV._isValid();
          if (JV) throw new Error(`Pass "${pV.name}" is not valid. ${JV}`);
          if (tV.IsRenderPass(pV)) {
            const VV = Array.isArray(pV.renderTarget) ? pV.renderTarget : [pV.renderTarget];
            eV = [];
            for (const xV of VV) void 0 !== xV && eV.push(this._frameGraph.textureManager.getTextureFromHandle(xV));
            xV = void 0 !== pV.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(pV.renderTargetDepth) : null
          } else qV.IsObjectListPass(pV) && (VV = pV.objectList)
        }
        let JV, YV = null,
          UV = [],
          yV = null;
        for (const pV of this._passesDisabled) {
          const VV = pV._isValid();
          if (VV) throw new Error(`Pass "${pV.name}" is not valid. ${VV}`);
          if (tV.IsRenderPass(pV)) {
            const VV = Array.isArray(pV.renderTarget) ? pV.renderTarget : [pV.renderTarget];
            YV = [];
            for (const eV of VV) void 0 !== eV && YV.push(this._frameGraph.textureManager.getTextureFromHandle(eV));
            UV = VV, yV = void 0 !== pV.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(pV.renderTargetDepth) : null
          } else qV.IsObjectListPass(pV) && (JV = pV.objectList)
        }
        if (this._passesDisabled.length > 0) {
          if (!this._checkSameRenderTarget(eV, YV)) {
            let VV = !0;
            for (const eV of UV)
              if (void 0 !== eV && !this._frameGraph.textureManager.isHistoryTexture(eV)) {
                VV = !1;
                break
              } if (!VV) throw new Error(`The output texture of the task "${this.name}" is different when it is enabled or disabled.`)
          }
          if (xV !== yV && null !== yV) throw new Error(`The output depth texture of the task "${this.name}" is different when it is enabled or disabled.`);
          if (VV !== JV && null !== JV) throw new Error(`The output object list of the task "${this.name}" is different when it is enabled or disabled.`)
        }
      }
      _execute() {
        const VV = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
        this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const eV of VV) eV._execute()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
        this.onAfterTaskExecute.notifyObservers(this)
      }
      _initializePasses() {
        this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const VV of this._passes) VV._initialize();
          for (const VV of this._passesDisabled) VV._initialize()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
      }
      _checkSameRenderTarget(VV, eV) {
        if (null === VV || null === eV) return VV === eV;
        if (VV.length !== eV.length) return !1;
        for (let xV = 0; xV < VV.length; xV++)
          if (VV[xV] !== eV[xV]) return !1;
        return !0
      }
    }
    class PV extends TV {
      get alphaMode() {
        return this.postProcess.alphaMode
      }
      set alphaMode(VV) {
        this.postProcess.alphaMode = VV
      }
      get drawWrapper() {
        return this._postProcessDrawWrapper
      }
      constructor(VV, eV, xV) {
        super(VV, eV), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = xV, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture = this._frameGraph.textureManager.createDanglingHandle(), this.outputDepthAttachmentTexture = this._frameGraph.textureManager.createDanglingHandle()
      }
      isReady() {
        return this.postProcess.isReady()
      }
      getClassName() {
        return "FrameGraphPostProcessTask"
      }
      record() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          eV = arguments.length > 1 ? arguments[1] : void 0,
          xV = arguments.length > 2 ? arguments[2] : void 0;
        if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
        const JV = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
        if (JV && (JV.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, JV), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentTexture, this.depthAttachmentTexture), JV) {
          const VV = this._frameGraph.textureManager.getTextureAbsoluteDimensions(JV);
          this._sourceWidth = VV.width, this._sourceHeight = VV.height
        }
        const YV = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
        this._outputWidth = YV.size.width, this._outputHeight = YV.size.height;
        const UV = this._frameGraph.addRenderPass(this.name);
        if (UV.depthReadOnly = this.depthReadOnly, UV.stencilReadOnly = this.stencilReadOnly, UV.addDependencies(this.sourceTexture), UV.setRenderTarget(this.outputTexture), UV.setRenderTargetDepth(this.depthAttachmentTexture), UV.setExecuteFunc((VV => {
            VV.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && VV.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), eV?.(VV), this.viewport && VV.setViewport(this.viewport), VV.applyFullScreenEffect(this._postProcessDrawWrapper, (() => {
              void 0 !== this.sourceTexture && VV.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), xV?.(VV), this.postProcess.bind()
            }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), VV.restoreDefaultFramebuffer(), VV.popDebugGroup()
          })), !VV) {
          const VV = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
          VV.depthReadOnly = this.depthReadOnly, VV.stencilReadOnly = this.stencilReadOnly, VV.addDependencies(this.sourceTexture), VV.setRenderTarget(this.outputTexture), VV.setRenderTargetDepth(this.depthAttachmentTexture), VV.setExecuteFunc((VV => {
            void 0 !== this.sourceTexture && 0 === this.alphaMode && (this.viewport && VV.setViewport(this.viewport), VV.copyTexture(this.sourceTexture, void 0, void 0 !== this.viewport))
          }))
        }
        return UV
      }
      dispose() {
        this.postProcess.dispose(), super.dispose()
      }
    }
    class AV extends PV {
      constructor(VV, eV, xV) {
        super(VV, eV, xV || new wV(VV, eV.engine))
      }
      getClassName() {
        return "FrameGraphFXAATask"
      }
      record() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          eV = arguments.length > 1 ? arguments[1] : void 0,
          xV = arguments.length > 2 ? arguments[2] : void 0;
        const JV = super.record(VV, eV, xV);
        return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, JV
      }
    }
    var NV = xV(44719);
    class XV extends PV {
      constructor(VV, eV, xV) {
        super(VV, eV, xV || new NV.e(VV, eV.engine))
      }
      getClassName() {
        return "FrameGraphPassTask"
      }
    }
    var MV = xV(41337),
      zV = xV(41433),
      GV = xV(41390),
      WV = xV(41512),
      RV = xV(38389);
    class gV {
      getRenderCamera(VV) {
        if (this._renderCamera) return this._renderCamera;
        {
          let eV;
          return eV = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, VV && eV && eV.isRigCamera ? eV.rigParent : eV
        }
      }
      setRenderCamera(VV) {
        this._renderCamera = VV
      }
      _getSharedGizmoLight() {
        return this._sharedGizmoLight || (this._sharedGizmoLight = new WV.c("shared gizmo light", new nV.o(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = RV.d.Gray()), this._sharedGizmoLight
      }
      static get DefaultUtilityLayer() {
        return null == gV._DefaultUtilityLayer ? gV._CreateDefaultUtilityLayerFromScene(QV.d.LastCreatedScene) : gV._DefaultUtilityLayer
      }
      static _CreateDefaultUtilityLayerFromScene(VV) {
        return gV._DefaultUtilityLayer = new gV(VV), gV._DefaultUtilityLayer.originalScene.eC.addOnce((() => {
          gV._DefaultUtilityLayer = null
        })), gV._DefaultUtilityLayer
      }
      static get DefaultKeepDepthUtilityLayer() {
        return null == gV._DefaultKeepDepthUtilityLayer ? gV._CreateDefaultKeepUtilityLayerFromScene(QV.d.LastCreatedScene) : gV._DefaultKeepDepthUtilityLayer
      }
      static _CreateDefaultKeepUtilityLayerFromScene(VV) {
        return gV._DefaultKeepDepthUtilityLayer = new gV(VV), gV._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, gV._DefaultKeepDepthUtilityLayer.originalScene.eC.addOnce((() => {
          gV._DefaultKeepDepthUtilityLayer = null
        })), gV._DefaultKeepDepthUtilityLayer
      }
      constructor(VV) {
        let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.originalScene = VV, this.handleEvents = eV, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.processAllEvents = !1, this.pickingEnabled = !0, this.onPointerOutObservable = new FV.c, this.utilityLayerScene = new MV.e(VV.sk(), {
          virtual: !0,
          useFloatingOrigin: VV.floatingOriginMode
        }), this.utilityLayerScene.useRightHandedSystem = VV.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), eV && (this._originalPointerObserver = VV.onPrePointerObservable.add((eV => {
          if (!this.utilityLayerScene.activeCamera) return;
          if (!this.pickingEnabled) return;
          if (!this.processAllEvents && eV.type !== zV.b.POINTERMOVE && eV.type !== zV.b.POINTERUP && eV.type !== zV.b.POINTERDOWN && eV.type !== zV.b.POINTERDOUBLETAP) return;
          this.utilityLayerScene.pointerX = VV.pointerX, this.utilityLayerScene.pointerY = VV.pointerY;
          const xV = eV.event;
          if (VV.isPointerCaptured(xV.pointerId)) return void(this._pointerCaptures[xV.pointerId] = !1);
          const JV = xV => {
              let JV;
              if (eV.nearInteractionPickingInfo) JV = eV.nearInteractionPickingInfo.pickedMesh.dD() == xV ? eV.nearInteractionPickingInfo : new GV.c;
              else if (xV !== this.utilityLayerScene && eV.originalPickingInfo) JV = eV.originalPickingInfo;
              else {
                let YV = null;
                this._renderCamera && (YV = xV._activeCamera, xV._activeCamera = this._renderCamera, eV.ray = null), JV = eV.ray ? xV.pickWithRay(eV.ray) : xV.Pr(VV.pointerX, VV.pointerY), YV && (xV._activeCamera = YV)
              }
              return JV
            },
            YV = JV(this.utilityLayerScene);
          if (!eV.ray && YV && (eV.ray = YV.ray), eV.originalPickingInfo?.aimTransform && YV && (YV.aimTransform = eV.originalPickingInfo.aimTransform, YV.gripTransform = eV.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(eV), this.onlyCheckPointerDownEvents && eV.type != zV.b.POINTERDOWN) return eV.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new zV.i(eV.type, eV.event, YV), eV.type), void(eV.type === zV.b.POINTERUP && this._pointerCaptures[xV.pointerId] && (this._pointerCaptures[xV.pointerId] = !1));
          if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) YV && YV.hit && (eV.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new zV.i(eV.type, eV.event, YV), eV.type), eV.skipOnPointerObservable = !0);
          else {
            const xV = JV(VV),
              UV = eV.event;
            xV && YV && (0 === YV.distance && xV.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(xV.pickedMesh) ? (this._notifyObservers(eV, xV, UV), eV.skipOnPointerObservable = !0) : eV.type === zV.b.POINTERDOWN ? (this._pointerCaptures[UV.pointerId] = !0, this._notifyObservers(eV, xV, UV)) : eV.type !== zV.b.POINTERMOVE && eV.type !== zV.b.POINTERUP || (this._lastPointerEvents[UV.pointerId] && (this.onPointerOutObservable.notifyObservers(UV.pointerId), delete this._lastPointerEvents[UV.pointerId]), this._notifyObservers(eV, xV, UV)) : !this._pointerCaptures[UV.pointerId] && (YV.distance < xV.distance || 0 === xV.distance) ? (this._notifyObservers(eV, YV, UV), eV.skipOnPointerObservable || (eV.skipOnPointerObservable = YV.distance > 0)) : !this._pointerCaptures[UV.pointerId] && YV.distance >= xV.distance && (this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(xV.pickedMesh) ? (this._notifyObservers(eV, xV, UV), eV.skipOnPointerObservable = !0) : (eV.type !== zV.b.POINTERMOVE && eV.type !== zV.b.POINTERUP || this._lastPointerEvents[UV.pointerId] && (this.onPointerOutObservable.notifyObservers(UV.pointerId), delete this._lastPointerEvents[UV.pointerId]), this._notifyObservers(eV, YV, UV))), eV.type === zV.b.POINTERUP && this._pointerCaptures[UV.pointerId] && (this._pointerCaptures[UV.pointerId] = !1))
          }
        })), this._originalPointerObserver && VV.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, xV || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((VV => {
          this.shouldRender && VV == this.getRenderCamera() && this.render()
        }))), this._sceneDisposeObserver = this.originalScene.eC.add((() => {
          this.dispose()
        })), this._updateCamera()
      }
      _notifyObservers(VV, eV, xV) {
        VV.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new zV.i(VV.type, VV.event, eV), VV.type), this._lastPointerEvents[xV.pointerId] = !0)
      }
      render() {
        if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
          const VV = this.utilityLayerScene.activeCamera.dD(),
            eV = this.utilityLayerScene.activeCamera;
          eV._scene = this.utilityLayerScene, eV.leftCamera && (eV.leftCamera._scene = this.utilityLayerScene), eV.rightCamera && (eV.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), eV._scene = VV, eV.leftCamera && (eV.leftCamera._scene = VV), eV.rightCamera && (eV.rightCamera._scene = VV)
        }
      }
      dispose() {
        this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.eC.remove(this._sceneDisposeObserver), this._originalPointerObserver && this.originalScene.onPrePointerObservable.remove(this._originalPointerObserver), this.utilityLayerScene.dispose()
      }
      _updateCamera() {
        this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
      }
    }
    gV._DefaultUtilityLayer = null, gV._DefaultKeepDepthUtilityLayer = null;
    const DV = {
      FindMainCamera: function(VV) {
        return VV.findMainCamera()
      },
      FindMainObjectRenderer: function(VV) {
        return VV.findMainObjectRenderer()
      },
      CreateUtilityLayerRenderer: function(VV) {
        let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const xV = VV.yE,
          JV = new gV(xV, eV, !0);
        JV.utilityLayerScene.activeCamera = xV.activeCamera;
        let YV = DV.FindMainCamera(xV.frameGraph);
        !YV && xV.cameras.length > 0 && (YV = xV.cameras[0]), YV && (JV.setRenderCamera(YV), JV.utilityLayerScene.activeCamera = YV);
        const UV = xV.onAfterRenderObservable.add((() => {
          JV.render()
        }));
        return JV.utilityLayerScene.eC.addOnce((() => {
          xV.onAfterRenderObservable.remove(UV)
        })), JV
      }
    };
    let iV = null;

    function CV(VV, eV, xV, JV) {
      let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        UV = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        yV = arguments.length > 6 ? arguments[6] : void 0,
        pV = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        QV = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
      const {
        height: nV,
        width: wV
      } = LV(VV, eV, xV);
      if (!nV || !wV) return void vV.b.Error("Invalid 'size' parameter !");
      const ZV = eV.dD();
      let kV = ZV.activeCamera !== eV;
      if (ZV.frameGraph) {
        const VV = DV.FindMainObjectRenderer(ZV.frameGraph);
        VV && (kV = VV.camera !== eV)
      }
      kV ? cV(VV, eV, xV, (VV => {
        if (UV) {
          const eV = new Blob([VV]);
          rV.j.DownloadBlob(eV), JV && JV("")
        } else JV && JV(VV)
      }), YV, 1, VV.getCreationOptions().antialias, void 0, void 0, void 0, void 0, yV) : VV.onEndFrameObservable.addOnce((() => {
        iV || (iV = document.createElement("canvas")), iV.width = wV, iV.height = nV;
        const eV = iV.getContext("2d"),
          xV = VV.getRenderingCanvas();
        if (!eV || !xV) return void vV.b.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
        const kV = xV.width,
          bV = xV.height,
          EV = iV.width,
          BV = iV.height,
          jV = EV / kV,
          qV = BV / bV,
          tV = pV ? Math.max(jV, qV) : Math.min(jV, qV),
          FV = kV * tV,
          TV = bV * tV,
          PV = (EV - FV) / 2,
          AV = (BV - TV) / 2;
        eV.save(), eV.fillStyle = QV ? ZV.clearColor.toHexString() : "rgba(0, 0, 0, 0)", eV.fillRect(0, 0, wV, nV), eV.restore(), eV.drawImage(xV, 0, 0, kV, bV, PV, AV, FV, TV), UV ? (rV.j.EncodeScreenshotCanvasData(iV, void 0, YV, void 0, yV), JV && JV("")) : rV.j.EncodeScreenshotCanvasData(iV, JV, YV, void 0, yV)
      }))
    }
    async function aV(VV, eV, xV) {
      let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        YV = arguments.length > 4 ? arguments[4] : void 0,
        UV = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        yV = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        pV = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      return await new Promise(((QV, nV) => {
        CV(VV, eV, xV, (VV => {
          "undefined" !== typeof VV ? QV(VV) : nV(new Error("Data is undefined"))
        }), JV, pV, YV, UV, yV)
      }))
    }
    async function oV(VV, eV, xV, JV) {
      let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        UV = arguments.length > 5 ? arguments[5] : void 0,
        yV = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return await new Promise((pV => {
        CV(VV, eV, {
          width: xV,
          height: JV
        }, (() => {
          pV()
        }), YV, !0, UV, yV)
      }))
    }

    function cV(VV, eV, UV, yV) {
      let pV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        QV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
        nV = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        wV = arguments.length > 7 ? arguments[7] : void 0,
        rV = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        BV = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        jV = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
        qV = arguments.length > 11 ? arguments[11] : void 0,
        tV = arguments.length > 12 ? arguments[12] : void 0,
        FV = arguments.length > 13 ? arguments[13] : void 0,
        TV = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
        PV = arguments.length > 15 ? arguments[15] : void 0;
      const AV = eV.dD();
      if (AV.frameGraph) return void lV(AV.frameGraph, eV, UV, pV, QV, nV, wV, qV, FV, !yV).then((VV => {
        yV && yV(VV)
      }));
      const {
        height: NV,
        width: XV,
        finalWidth: MV,
        finalHeight: zV
      } = LV(VV, eV, UV), GV = {
        width: XV,
        height: NV
      };
      if (!NV || !XV) return void vV.b.Error("Invalid 'size' parameter !");
      VV.skipFrameRender = !0;
      const WV = VV.getRenderWidth,
        RV = VV.getRenderHeight;
      VV.getRenderWidth = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && VV._currentRenderTarget ? VV._currentRenderTarget.width : XV
      }, VV.getRenderHeight = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && VV._currentRenderTarget ? VV._currentRenderTarget.height : NV
      }, VV.onResizeObservable.hasObservers() && VV.onResizeObservable.notifyObservers(VV);
      const gV = new YV.b("screenShot", GV, AV, !1, !1, 0, !1, JV.f.BILINEAR_SAMPLINGMODE, void 0, BV, void 0, void 0, void 0, QV);
      gV.renderList = AV.meshes.slice(), gV.samples = QV, gV.renderSprites = rV, gV.activeCamera = eV, gV.forceLayerMaskCheck = jV, tV?.(gV);
      const DV = FV || kV.DumpData,
        iV = () => {
          AV.incrementRenderId(), AV.resetCachedMaterial(), (0, EV.f)((() => gV.isReadyForRendering() && eV.isReady(!0)), (() => {
            VV.onEndFrameObservable.addOnce((() => {
              MV === XV && zV === NV ? gV.readPixels(void 0, void 0, void 0, !1).then((VV => {
                DV(XV, NV, VV, yV, pV, wV, !0, void 0, qV), gV.dispose()
              })) : (VV.isWebGPU ? xV.e(679).then((() => xV(64473))) : xV.e(680).then((() => xV(64476)))).then((async () => await (0, bV.d)("pass", gV.getInternalTexture(), AV, void 0, void 0, void 0, MV, zV).then((eV => {
                VV._readTexturePixels(eV, MV, zV, -1, 0, null, !0, !1, 0, 0).then((VV => {
                  DV(MV, zV, VV, yV, pV, wV, !0, void 0, qV), eV.dispose()
                }))
              }))))
            })), AV.incrementRenderId(), AV.resetCachedMaterial();
            const JV = AV.activeCamera,
              YV = AV.activeCameras,
              UV = eV.outputRenderTarget,
              QV = AV.spritesEnabled;
            AV.activeCamera = eV, AV.activeCameras = null, eV.outputRenderTarget = gV, AV.spritesEnabled = rV;
            const nV = AV.meshes;
            AV.meshes = gV.renderList || AV.meshes;
            try {
              AV.render()
            } finally {
              AV.activeCamera = JV, AV.activeCameras = YV, eV.outputRenderTarget = UV, AV.spritesEnabled = QV, AV.meshes = nV, VV.getRenderWidth = WV, VV.getRenderHeight = RV, VV.onResizeObservable.hasObservers() && VV.onResizeObservable.notifyObservers(VV), eV.getProjectionMatrix(!0), VV.skipFrameRender = !1
            }
          }), (() => {
            VV.skipFrameRender = !1, VV.getRenderWidth = WV, VV.getRenderHeight = RV, PV?.()
          }), void 0, TV)
        };
      if (nV) {
        const VV = new ZV("antialiasing", 1, AV.activeCamera);
        gV.addPostProcess(VV), VV.autoClear = !0, VV.onEffectCreatedObservable.addOnce((VV => {
          VV.isReady() ? iV() : VV.onCompiled = () => {
            iV()
          }
        }))
      } else iV()
    }
    async function hV(VV, eV, xV) {
      let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        UV = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        yV = arguments.length > 6 ? arguments[6] : void 0,
        pV = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        QV = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        nV = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
        wV = arguments.length > 10 ? arguments[10] : void 0,
        ZV = arguments.length > 11 ? arguments[11] : void 0,
        vV = arguments.length > 12 ? arguments[12] : void 0;
      return await new Promise(((rV, kV) => {
        cV(VV, eV, xV, (VV => {
          "undefined" !== typeof VV ? rV(VV) : kV(new Error("Data is undefined"))
        }), JV, YV, UV, yV, pV, QV, nV, wV, ZV, vV)
      }))
    }
    async function lV(VV, eV, xV) {
      let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        UV = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        yV = arguments.length > 6 ? arguments[6] : void 0,
        pV = arguments.length > 7 ? arguments[7] : void 0,
        QV = arguments.length > 8 ? arguments[8] : void 0,
        nV = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        wV = arguments.length > 10 ? arguments[10] : void 0;
      const ZV = VV.engine,
        vV = VV.textureManager,
        {
          height: rV,
          width: bV,
          finalWidth: EV,
          finalHeight: jV
        } = LV(ZV, eV, xV),
        qV = {
          width: bV,
          height: rV
        },
        tV = QV || kV.DumpData,
        FV = VV.tasks,
        TV = FV.length,
        PV = VV.pausedExecution,
        NV = ZV.getCaps().parallelShaderCompile;
      vV.setBackBufferTextures(0, 0, {
        size: qV,
        options: {
          createMipMaps: !1,
          samples: YV,
          types: [0],
          formats: [5],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot color"]
        },
        sizeIsPercentage: !1
      }, {
        size: qV,
        options: {
          createMipMaps: !1,
          samples: YV,
          types: [0],
          formats: [ZV.isStencilEnable ? 13 : 14],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot depth"]
        },
        sizeIsPercentage: !1
      });
      let MV = BV;
      if (UV) {
        const eV = new AV("fxaa", VV);
        eV.sourceTexture = MV, MV = eV.outputTexture, VV.addTask(eV)
      }
      if (EV !== bV || jV !== rV) {
        const eV = new XV("pass", VV);
        eV.sourceTexture = MV, eV.targetTexture = VV.textureManager.createRenderTargetTexture("pass_output", {
          size: {
            width: EV,
            height: jV
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
        }), MV = eV.outputTexture, VV.addTask(eV)
      }
      const zV = DV.FindMainObjectRenderer(VV);
      let GV = null;
      zV && (GV = zV.camera, zV.camera = eV), ZV.getCaps().parallelShaderCompile = void 0, await VV.buildAsync();
      const WV = wV ?? (vV.hasHistoryTextures ? 32 : 1);
      for (let kV = 0; kV < WV; ++kV) VV.execute();
      VV.pausedExecution = !0, ZV.getCaps().parallelShaderCompile = NV;
      for (let kV = TV; kV < FV.length; ++kV) VV.tasks[kV].dispose();
      VV.tasks.length = TV, zV && GV && (zV.camera = GV);
      const RV = VV.textureManager.getTextureFromHandle(MV);
      return RV.incrementReferences(), vV.resetBackBufferTextures(), await VV.buildAsync(), VV.pausedExecution = PV, new Promise((VV => {
        ZV._readTexturePixels(RV, EV, jV, -1, 0, null, !0, !1, 0, 0).then((async eV => {
          RV.dispose(), tV(EV, jV, eV, nV ? void 0 : eV => VV(eV), JV, yV, !0, void 0, pV), nV && VV(null)
        }))
      }))
    }

    function LV(VV, eV, xV) {
      let JV = 0,
        YV = 0,
        UV = 0,
        yV = 0;
      if ("object" === typeof xV) {
        const pV = xV.precision ? Math.abs(xV.precision) : 1;
        xV.width && xV.height ? (JV = xV.height * pV, YV = xV.width * pV) : xV.width && !xV.height ? (YV = xV.width * pV, JV = Math.round(YV / VV.getAspectRatio(eV))) : xV.height && !xV.width ? (JV = xV.height * pV, YV = Math.round(JV * VV.getAspectRatio(eV))) : (YV = Math.round(VV.getRenderWidth() * pV), JV = Math.round(YV / VV.getAspectRatio(eV))), xV.finalWidth && xV.finalHeight ? (yV = xV.finalHeight, UV = xV.finalWidth) : xV.finalWidth && !xV.finalHeight ? (UV = xV.finalWidth, yV = Math.round(UV / VV.getAspectRatio(eV))) : xV.finalHeight && !xV.finalWidth ? (yV = xV.finalHeight, UV = Math.round(yV * VV.getAspectRatio(eV))) : (UV = YV, yV = JV)
      } else isNaN(xV) || (JV = xV, YV = xV, UV = xV, yV = xV);
      return YV && (YV = Math.floor(YV)), JV && (JV = Math.floor(JV)), UV && (UV = Math.floor(UV)), yV && (yV = Math.floor(yV)), {
        height: 0 | JV,
        width: 0 | YV,
        finalWidth: 0 | UV,
        finalHeight: 0 | yV
      }
    }
    const fV = {
      CreateScreenshot: CV,
      CreateScreenshotAsync: aV,
      CreateScreenshotWithResizeAsync: oV,
      CreateScreenshotUsingRenderTarget: cV,
      CreateScreenshotUsingRenderTargetAsync: hV,
      CreateScreenshotForFrameGraphAsync: lV
    };
    let mV = !1;

    function KV() {
      if (mV) return;
      mV = !0;
      rV.j.CreateScreenshot = CV, rV.j.CreateScreenshotAsync = aV, rV.j.CreateScreenshotUsingRenderTarget = cV, rV.j.CreateScreenshotUsingRenderTargetAsync = hV
    }
    KV()
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);