export const id = 265;
export const ids = [265, 266];
export const modules = {
  41366: (ee, ie, He) => {
    He.d(ie, {
      d: () => oe,
      f: () => ke
    });
    var ye = He(41113),
      be = He(41121),
      Me = He(37917),
      Ke = He(38022),
      Ue = He(41374),
      Fe = He(41323),
      Je = He(37949);
    let oe = (() => {
        var ee;
        let ie, He, Fe = Ue.e,
          Je = [],
          oe = [],
          Re = [],
          ke = [];
        return ee = class extends Fe {
          constructor(ee, ie, He, be) {
            super(ee, He, be), this.groundColor = (0, ye.l)(this, Je, new Ke.c(0, 0, 0)), this.direction = ((0, ye.l)(this, oe), (0, ye.l)(this, Re, void 0)), (0, ye.l)(this, ke), this.direction = ie || Me.p.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(ee) {
            return this.direction = Me.p.Normalize(ee.subtract(Me.p.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(ee, ie) {
            const He = Me.p.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", He.x, He.y, He.z, 0, ie), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), ie), this
          }
          transferToNodeMaterialEffect(ee, ie) {
            const He = Me.p.Normalize(this.direction);
            return ee.setFloat3(ie, He.x, He.y, He.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = Me.b.Identity()), this._worldMatrix
          }
          getTypeID() {
            return Ue.e.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(ee, ie) {
            ee["HEMILIGHT" + ie] = !0
          }
        }, (() => {
          const Me = "function" === typeof Symbol && Symbol.metadata ? Object.create(Fe[Symbol.metadata] ?? null) : void 0;
          ie = [(0, be.p)()], He = [(0, be.P)()], (0, ye.i)(null, null, ie, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: ee => "groundColor" in ee,
              get: ee => ee.groundColor,
              set: (ee, ie) => {
                ee.groundColor = ie
              }
            },
            metadata: Me
          }, Je, oe), (0, ye.i)(null, null, He, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: ee => "direction" in ee,
              get: ee => ee.direction,
              set: (ee, ie) => {
                ee.direction = ie
              }
            },
            metadata: Me
          }, Re, ke), Me && Object.defineProperty(ee, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Me
          })
        })(), ee
      })(),
      Re = !1;

    function ke() {
      Re || (Re = !0, Fe.d.AddNodeConstructor("Light_Type_3", ((ee, ie) => () => new oe(ee, Me.p.Zero(), ie))), (0, Je.e)("BABYLON.HemisphericLight", oe))
    }
  },
  38581: (ee, ie, He) => {
    He.d(ie, {
      e: () => be
    });
    var ye = He(38590);
    class be {
      static GetPlanes(ee) {
        const ie = [];
        for (let He = 0; He < 6; He++) ie.push(new ye.c(0, 0, 0, 0));
        return be.GetPlanesToRef(ee, ie), ie
      }
      static GetNearPlaneToRef(ee, ie) {
        const He = ee.m;
        ie.normal.x = He[3] + He[2], ie.normal.y = He[7] + He[6], ie.normal.z = He[11] + He[10], ie.d = He[15] + He[14], ie.normalize()
      }
      static GetFarPlaneToRef(ee, ie) {
        const He = ee.m;
        ie.normal.x = He[3] - He[2], ie.normal.y = He[7] - He[6], ie.normal.z = He[11] - He[10], ie.d = He[15] - He[14], ie.normalize()
      }
      static GetLeftPlaneToRef(ee, ie) {
        const He = ee.m;
        ie.normal.x = He[3] + He[0], ie.normal.y = He[7] + He[4], ie.normal.z = He[11] + He[8], ie.d = He[15] + He[12], ie.normalize()
      }
      static GetRightPlaneToRef(ee, ie) {
        const He = ee.m;
        ie.normal.x = He[3] - He[0], ie.normal.y = He[7] - He[4], ie.normal.z = He[11] - He[8], ie.d = He[15] - He[12], ie.normalize()
      }
      static GetTopPlaneToRef(ee, ie) {
        const He = ee.m;
        ie.normal.x = He[3] - He[1], ie.normal.y = He[7] - He[5], ie.normal.z = He[11] - He[9], ie.d = He[15] - He[13], ie.normalize()
      }
      static GetBottomPlaneToRef(ee, ie) {
        const He = ee.m;
        ie.normal.x = He[3] + He[1], ie.normal.y = He[7] + He[5], ie.normal.z = He[11] + He[9], ie.d = He[15] + He[13], ie.normalize()
      }
      static GetPlanesToRef(ee, ie) {
        be.GetNearPlaneToRef(ee, ie[0]), be.GetFarPlaneToRef(ee, ie[1]), be.GetLeftPlaneToRef(ee, ie[2]), be.GetRightPlaneToRef(ee, ie[3]), be.GetTopPlaneToRef(ee, ie[4]), be.GetBottomPlaneToRef(ee, ie[5])
      }
      static IsPointInFrustum(ee, ie) {
        for (let He = 0; He < 6; He++)
          if (ie[He].dotCoordinate(ee) < 0) return !1;
        return !0
      }
    }
  },
  38590: (ee, ie, He) => {
    He.d(ie, {
      c: () => be
    });
    var ye = He(37917);
    class be {
      constructor(ee, ie, He, be) {
        this.normal = new ye.p(ee, ie, He), this.d = be
      }
      Qbe() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new be(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let ee = this.normal.getHashCode();
        return ee = 397 * ee ^ this.d, ee
      }
      normalize() {
        const ee = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let ie = 0;
        return 0 !== ee && (ie = 1 / ee), this.normal.x *= ie, this.normal.y *= ie, this.normal.z *= ie, this.d *= ie, this
      }
      transform(ee) {
        const ie = be._TmpMatrix;
        ee.invertToRef(ie);
        const He = ie.m,
          ye = this.normal.x,
          Me = this.normal.y,
          Ke = this.normal.z,
          Ue = this.d,
          Fe = ye * He[0] + Me * He[1] + Ke * He[2] + Ue * He[3],
          Je = ye * He[4] + Me * He[5] + Ke * He[6] + Ue * He[7],
          oe = ye * He[8] + Me * He[9] + Ke * He[10] + Ue * He[11],
          Re = ye * He[12] + Me * He[13] + Ke * He[14] + Ue * He[15];
        return new be(Fe, Je, oe, Re)
      }
      dotCoordinate(ee) {
        return this.normal.x * ee.x + this.normal.y * ee.y + this.normal.z * ee.z + this.d
      }
      copyFromPoints(ee, ie, He) {
        const ye = ie.x - ee.x,
          be = ie.y - ee.y,
          Me = ie.z - ee.z,
          Ke = He.x - ee.x,
          Ue = He.y - ee.y,
          Fe = He.z - ee.z,
          Je = be * Fe - Me * Ue,
          oe = Me * Ke - ye * Fe,
          Re = ye * Ue - be * Ke,
          ke = Math.sqrt(Je * Je + oe * oe + Re * Re);
        let qe;
        return qe = 0 !== ke ? 1 / ke : 0, this.normal.x = Je * qe, this.normal.y = oe * qe, this.normal.z = Re * qe, this.d = -(this.normal.x * ee.x + this.normal.y * ee.y + this.normal.z * ee.z), this
      }
      isFrontFacingTo(ee, ie) {
        return ye.p.Dot(this.normal, ee) <= ie
      }
      signedDistanceTo(ee) {
        return ye.p.Dot(ee, this.normal) + this.d
      }
      static FromArray(ee) {
        return new be(ee[0], ee[1], ee[2], ee[3])
      }
      static FromPoints(ee, ie, He) {
        const ye = new be(0, 0, 0, 0);
        return ye.copyFromPoints(ee, ie, He), ye
      }
      static FromPositionAndNormal(ee, ie) {
        const He = new be(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(ee, ie, He)
      }
      static FromPositionAndNormalToRef(ee, ie, He) {
        return He.normal.jD(ie), He.normal.normalize(), He.d = -ee.dot(He.normal), He
      }
      static SignedDistanceToPlaneFromPositionAndNormal(ee, ie, He) {
        const be = -(ie.x * ee.x + ie.y * ee.y + ie.z * ee.z);
        return ye.p.Dot(He, ie) + be
      }
    }
    be._TmpMatrix = ye.b.Identity()
  },
  38919: (ee, ie, He) => {
    He.d(ie, {
      d: () => ye
    });
    class ye {
      constructor(ee, ie, He, ye) {
        this.x = ee, this.y = ie, this.width = He, this.height = ye
      }
      toGlobal(ee, ie) {
        return new ye(this.x * ee, this.y * ie, this.width * ee, this.height * ie)
      }
      toGlobalToRef(ee, ie, He) {
        return He.x = this.x * ee, He.y = this.y * ie, He.width = this.width * ee, He.height = this.height * ie, this
      }
      clone() {
        return new ye(this.x, this.y, this.width, this.height)
      }
    }
  },
  39463: (ee, ie, He) => {
    He.d(ie, {
      b: () => Me
    });
    var ye = He(39467);
    const be = (ee, ie, He) => ee ? ee.getClassName && "Mesh" === ee.getClassName() ? null : !ee.getClassName || "SubMesh" !== ee.getClassName() && "PhysicsBody" !== ee.getClassName() ? ee.clone ? ee.clone() : Array.isArray(ee) ? ee.slice() : He && "object" === typeof ee ? {
      ...ee
    } : null : ee.clone(ie) : null;
    class Me {
      static DeepCopy(ee, ie, He, Me) {
        let Ke = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Ue = function(ee) {
          const ie = [];
          do {
            const He = Object.getOwnPropertyNames(ee);
            for (const ee of He) - 1 === ie.indexOf(ee) && ie.push(ee)
          } while (ee = Object.getPrototypeOf(ee));
          return ie
        }(ee);
        for (const Je of Ue) {
          if ("_" === Je[0] && (!Me || -1 === Me.indexOf(Je))) continue;
          if (Je.endsWith("Observable")) continue;
          if (He && -1 !== He.indexOf(Je)) continue;
          const Ue = ee[Je],
            oe = typeof Ue;
          if ("function" !== oe) try {
            if ("object" === oe)
              if (Ue instanceof Uint8Array) ie[Je] = Uint8Array.from(Ue);
              else if (Ue instanceof Array) {
              if (ie[Je] = [], Ue.length > 0)
                if ("object" == typeof Ue[0])
                  for (let ee = 0; ee < Ue.length; ee++) {
                    const He = be(Ue[ee], ie, Ke); - 1 === ie[Je].indexOf(He) && ie[Je].push(He)
                  } else ie[Je] = Ue.slice(0)
            } else ie[Je] = be(Ue, ie, Ke);
            else ie[Je] = Ue
          } catch (Fe) {
            ye.e.Warn(Fe.message)
          }
        }
      }
    }
  },
  38745: (ee, ie, He) => {
    function ye() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (ee => {
        const ie = 16 * Math.random() | 0;
        return ("x" === ee ? ie : 3 & ie | 8).toString(16)
      }))
    }
    He.d(ie, {
      d: () => ye
    })
  },
  39467: (ee, ie, He) => {
    He.d(ie, {
      e: () => ye
    });
    class ye {
      static _CheckLimit(ee, ie) {
        let He = ye._LogLimitOutputs[ee];
        return He ? He.current++ : (He = {
          limit: ie,
          current: 1
        }, ye._LogLimitOutputs[ee] = He), He.current <= He.limit
      }
      static _GenerateLimitMessage(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const He = ye._LogLimitOutputs[ee];
        if (!He || !ye.MessageLimitReached) return;
        const be = this._Levels[ie];
        He.current === He.limit && ye[be.name](ye.MessageLimitReached.replace(/%LIMIT%/g, "" + He.limit).replace(/%TYPE%/g, be.name ?? ""))
      }
      static _AddLogEntry(ee) {
        ye._LogCache = ee + ye._LogCache, ye.OnNewCacheEntry && ye.OnNewCacheEntry(ee)
      }
      static _FormatMessage(ee) {
        const ie = ee => ee < 10 ? "0" + ee : "" + ee,
          He = new Date;
        return "[" + ie(He.getHours()) + ":" + ie(He.getMinutes()) + ":" + ie(He.getSeconds()) + "]: " + ee
      }
      static _LogDisabled(ee, ie) {}
      static _LogEnabled() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ie = arguments.length > 1 ? arguments[1] : void 0,
          He = arguments.length > 2 ? arguments[2] : void 0;
        const be = Array.isArray(ie) ? ie[0] : ie;
        if (void 0 !== He && !ye._CheckLimit(be, He)) return;
        const Me = ye._FormatMessage(be),
          Ke = this._Levels[ee],
          Ue = Array.isArray(ie) ? ie.slice(1) : [];
        Ke.logFunc && Ke.logFunc("BJS - " + Me, ...Ue);
        const Fe = `<div style='color:${Ke.color}'>${Me}</div><br>`;
        ye._AddLogEntry(Fe), ye._GenerateLimitMessage(be, ee)
      }
      static get LogCache() {
        return ye._LogCache
      }
      static ClearLogCache() {
        ye._LogCache = "", ye._LogLimitOutputs = {}, ye.errorsCount = 0
      }
      static set LogLevels(ee) {
        ye.Log = ye._LogDisabled, ye.Warn = ye._LogDisabled, ye.Error = ye._LogDisabled;
        const ie = [ye.MessageLogLevel, ye.WarningLogLevel, ye.ErrorLogLevel];
        for (const He of ie)
          if ((ee & He) === He) {
            const ee = this._Levels[He];
            ye[ee.name] = ye._LogEnabled.bind(ye, He)
          }
      }
    }
    ye.NoneLogLevel = 0, ye.MessageLogLevel = 1, ye.WarningLogLevel = 2, ye.ErrorLogLevel = 4, ye.AllLogLevel = 7, ye.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", ye._LogCache = "", ye._LogLimitOutputs = {}, ye._Levels = [{}, {
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
    }], ye.errorsCount = 0, ye.Log = ye._LogEnabled.bind(ye, ye.MessageLogLevel), ye.Warn = ye._LogEnabled.bind(ye, ye.WarningLogLevel), ye.Error = ye._LogEnabled.bind(ye, ye.ErrorLogLevel)
  },
  63814: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      CreateScreenshot: () => xe,
      CreateScreenshotAsync: () => Le,
      CreateScreenshotForFrameGraphAsync: () => me,
      CreateScreenshotUsingRenderTarget: () => ve,
      CreateScreenshotUsingRenderTargetAsync: () => ue,
      CreateScreenshotWithResizeAsync: () => Ce,
      RegisterScreenshotTools: () => je,
      ScreenshotTools: () => Se
    });
    var ye = He(41593),
      be = He(45019),
      Me = He(44998),
      Ke = He(41141),
      Ue = He(45006),
      Fe = He(37929),
      Je = He(37917);
    class oe extends Ue.f {
      static _GetDefines(ee) {
        if (!ee) return null;
        return ee.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
      }
      _gatherImports(ee, ie) {
        ee ? (this._webGPUReady = !0, ie.push(Promise.all([He.e(683).then((() => He(64060))), He.e(684).then((() => He(64065)))]))) : ie.push(Promise.all([He.e(685).then((() => He(64069))), He.e(686).then((() => He(64076)))]))
      }
      constructor(ee) {
        const ie = {
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: ee,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || Fe.b.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          vertexShader: oe.VertexUrl,
          fragmentShader: oe.FragmentUrl,
          uniforms: oe.Uniforms
        };
        super({
          ...ie,
          defines: oe._GetDefines(ie.engine)
        }), this.texelSize = new Je.n(0, 0)
      }
      bind() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.bind(ee), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
      }
    }
    oe.VertexUrl = "fxaa", oe.FragmentUrl = "fxaa", oe.Uniforms = ["texelSize"];
    class Re extends Me.b {
      getClassName() {
        return "FxaaPostProcess"
      }
      constructor(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          be = arguments.length > 3 ? arguments[3] : void 0,
          Me = arguments.length > 4 ? arguments[4] : void 0,
          Ke = arguments.length > 5 ? arguments[5] : void 0,
          Ue = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const Fe = {
          uniforms: oe.Uniforms,
          size: "number" === typeof ie ? ie : void 0,
          camera: He,
          samplingMode: be || ye.e.BILINEAR_SAMPLINGMODE,
          engine: Me,
          reusable: Ke,
          textureType: Ue,
          ...ie
        };
        super(ee, oe.FragmentUrl, {
          effectWrapper: "number" !== typeof ie && ie.effectWrapper ? void 0 : new oe(ee, Me, Fe),
          ...Fe
        }), this.onApplyObservable.add((ee => {
          this._effectWrapper.texelSize = this.texelSize
        }))
      }
      static _Parse(ee, ie, He, ye) {
        return Ke.c.Parse((() => new Re(ee.name, ee.options, ie, ee.renderTargetSamplingMode, He.Nf(), ee.reusable)), ee, He, ye)
      }
    }
    var ke = He(39467),
      qe = He(41203),
      fe = He(45032),
      Te = He(45015),
      pe = He(40995);
    const Xe = 0;
    class ze {
      constructor(ee, ie, He) {
        this.name = ee, this._parentTask = ie, this._context = He, this.disabled = !1
      }
      setInitializeFunc(ee) {
        this._initFunc = ee
      }
      setExecuteFunc(ee) {
        this._executeFunc = ee
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
    class Be extends ze {
      static IsObjectListPass(ee) {
        return void 0 !== ee.setObjectList
      }
      get objectList() {
        return this._objectList
      }
      setObjectList(ee) {
        this._objectList = ee
      }
      constructor(ee, ie, He, ye) {
        super(ee, ie, He), this._engine = ye
      }
      _isValid() {
        const ee = super._isValid();
        return ee || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
      }
    }
    class Ee extends ze {
      static IsRenderPass(ee) {
        return void 0 !== ee.setRenderTarget
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
      constructor(ee, ie, He, ye) {
        super(ee, ie, He), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = ye
      }
      setRenderTarget(ee) {
        this._renderTarget = ee
      }
      setRenderTargetDepth(ee) {
        this._renderTargetDepth = ee
      }
      addDependencies(ee) {
        if (void 0 !== ee)
          if (Array.isArray(ee))
            for (const ie of ee) this._dependencies.add(ie);
          else this._dependencies.add(ee)
      }
      collectDependencies(ee) {
        const ie = this._dependencies.keys();
        for (let He = ie.next(); !0 !== He.done; He = ie.next()) ee.add(He.value);
        if (void 0 !== this._renderTarget)
          if (Array.isArray(this._renderTarget))
            for (const He of this._renderTarget) void 0 !== He && ee.add(He);
          else ee.add(this._renderTarget);
        void 0 !== this._renderTargetDepth && ee.add(this._renderTargetDepth)
      }
      setOutputLayerAndFaceIndices(ee) {
        const ie = this.frameGraphRenderTarget.renderTargetWrapper;
        if (ie)
          for (const He of ee) ie.setLayerAndFaceIndex(He.targetIndex, He.layerIndex, He.faceIndex)
      }
      _initialize() {
        this._frameGraphRenderTarget = this._context.createRenderTarget(this.name, this._renderTarget, this._renderTargetDepth, this.depthReadOnly, this.stencilReadOnly), super._initialize()
      }
      _execute() {
        this._context.bindRenderTarget(this._frameGraphRenderTarget), super._execute(), this._context.restoreDefaultFramebuffer()
      }
      _isValid() {
        const ee = super._isValid();
        return ee || (void 0 !== this._renderTarget || void 0 !== this.renderTargetDepth ? null : "Render target and render target depth cannot both be undefined.")
      }
      _dispose() {
        this._frameGraphRenderTarget?.dispose()
      }
    }
    var ge = He(37931);
    class Oe {
      get name() {
        return this._name
      }
      set name(ee) {
        this._name = ee
      }
      get disabled() {
        return this._disabled
      }
      set disabled(ee) {
        this._disabled = ee
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
      constructor(ee, ie) {
        this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new ge.d, this.onBeforeTaskExecute = new ge.d, this.onAfterTaskExecute = new ge.d, this.name = ee, this._frameGraph = ie, this._reset()
      }
      _reset() {
        for (const ee of this._passes) ee._dispose();
        for (const ee of this._passesDisabled) ee._dispose();
        this._passes.length = 0, this._passesDisabled.length = 0
      }
      _addPass(ee, ie) {
        ie ? this._passesDisabled.push(ee) : this._passes.push(ee)
      }
      _checkTask() {
        let ee, ie = null,
          He = null;
        for (const Ue of this._passes) {
          const ye = Ue._isValid();
          if (ye) throw new Error(`Pass "${Ue.name}" is not valid. ${ye}`);
          if (Ee.IsRenderPass(Ue)) {
            const ee = Array.isArray(Ue.renderTarget) ? Ue.renderTarget : [Ue.renderTarget];
            ie = [];
            for (const He of ee) void 0 !== He && ie.push(this._frameGraph.textureManager.getTextureFromHandle(He));
            He = void 0 !== Ue.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(Ue.renderTargetDepth) : null
          } else Be.IsObjectListPass(Ue) && (ee = Ue.objectList)
        }
        let ye, be = null,
          Me = [],
          Ke = null;
        for (const Ue of this._passesDisabled) {
          const ee = Ue._isValid();
          if (ee) throw new Error(`Pass "${Ue.name}" is not valid. ${ee}`);
          if (Ee.IsRenderPass(Ue)) {
            const ee = Array.isArray(Ue.renderTarget) ? Ue.renderTarget : [Ue.renderTarget];
            be = [];
            for (const ie of ee) void 0 !== ie && be.push(this._frameGraph.textureManager.getTextureFromHandle(ie));
            Me = ee, Ke = void 0 !== Ue.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(Ue.renderTargetDepth) : null
          } else Be.IsObjectListPass(Ue) && (ye = Ue.objectList)
        }
        if (this._passesDisabled.length > 0) {
          if (!this._checkSameRenderTarget(ie, be)) {
            let ee = !0;
            for (const ie of Me)
              if (void 0 !== ie && !this._frameGraph.textureManager.isHistoryTexture(ie)) {
                ee = !1;
                break
              } if (!ee) throw new Error(`The output texture of the task "${this.name}" is different when it is enabled or disabled.`)
          }
          if (He !== Ke && null !== Ke) throw new Error(`The output depth texture of the task "${this.name}" is different when it is enabled or disabled.`);
          if (ee !== ye && null !== ye) throw new Error(`The output object list of the task "${this.name}" is different when it is enabled or disabled.`)
        }
      }
      _execute() {
        const ee = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
        this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const ie of ee) ie._execute()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
        this.onAfterTaskExecute.notifyObservers(this)
      }
      _initializePasses() {
        this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const ee of this._passes) ee._initialize();
          for (const ee of this._passesDisabled) ee._initialize()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
      }
      _checkSameRenderTarget(ee, ie) {
        if (null === ee || null === ie) return ee === ie;
        if (ee.length !== ie.length) return !1;
        for (let He = 0; He < ee.length; He++)
          if (ee[He] !== ie[He]) return !1;
        return !0
      }
    }
    class de extends Oe {
      get alphaMode() {
        return this.postProcess.alphaMode
      }
      set alphaMode(ee) {
        this.postProcess.alphaMode = ee
      }
      get drawWrapper() {
        return this._postProcessDrawWrapper
      }
      constructor(ee, ie, He) {
        super(ee, ie), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = He, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture = this._frameGraph.textureManager.createDanglingHandle(), this.outputDepthAttachmentTexture = this._frameGraph.textureManager.createDanglingHandle()
      }
      isReady() {
        return this.postProcess.isReady()
      }
      getClassName() {
        return "FrameGraphPostProcessTask"
      }
      record() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ie = arguments.length > 1 ? arguments[1] : void 0,
          He = arguments.length > 2 ? arguments[2] : void 0;
        if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
        const ye = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
        if (ye && (ye.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, ye), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentTexture, this.depthAttachmentTexture), ye) {
          const ee = this._frameGraph.textureManager.getTextureAbsoluteDimensions(ye);
          this._sourceWidth = ee.width, this._sourceHeight = ee.height
        }
        const be = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
        this._outputWidth = be.size.width, this._outputHeight = be.size.height;
        const Me = this._frameGraph.addRenderPass(this.name);
        if (Me.depthReadOnly = this.depthReadOnly, Me.stencilReadOnly = this.stencilReadOnly, Me.addDependencies(this.sourceTexture), Me.setRenderTarget(this.outputTexture), Me.setRenderTargetDepth(this.depthAttachmentTexture), Me.setExecuteFunc((ee => {
            ee.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && ee.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), ie?.(ee), this.viewport && ee.setViewport(this.viewport), ee.applyFullScreenEffect(this._postProcessDrawWrapper, (() => {
              void 0 !== this.sourceTexture && ee.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), He?.(ee), this.postProcess.bind()
            }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), ee.restoreDefaultFramebuffer(), ee.popDebugGroup()
          })), !ee) {
          const ee = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
          ee.depthReadOnly = this.depthReadOnly, ee.stencilReadOnly = this.stencilReadOnly, ee.addDependencies(this.sourceTexture), ee.setRenderTarget(this.outputTexture), ee.setRenderTargetDepth(this.depthAttachmentTexture), ee.setExecuteFunc((ee => {
            void 0 !== this.sourceTexture && 0 === this.alphaMode && (this.viewport && ee.setViewport(this.viewport), ee.copyTexture(this.sourceTexture, void 0, void 0 !== this.viewport))
          }))
        }
        return Me
      }
      dispose() {
        this.postProcess.dispose(), super.dispose()
      }
    }
    class We extends de {
      constructor(ee, ie, He) {
        super(ee, ie, He || new oe(ee, ie.engine))
      }
      getClassName() {
        return "FrameGraphFXAATask"
      }
      record() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ie = arguments.length > 1 ? arguments[1] : void 0,
          He = arguments.length > 2 ? arguments[2] : void 0;
        const ye = super.record(ee, ie, He);
        return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, ye
      }
    }
    var te = He(45023);
    class Ze extends de {
      constructor(ee, ie, He) {
        super(ee, ie, He || new te.d(ee, ie.engine))
      }
      getClassName() {
        return "FrameGraphPassTask"
      }
    }
    var we = He(41199),
      De = He(41286),
      Pe = He(41242),
      Ae = He(41366),
      Ye = He(38022);
    class Ve {
      getRenderCamera(ee) {
        if (this._renderCamera) return this._renderCamera;
        {
          let ie;
          return ie = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, ee && ie && ie.isRigCamera ? ie.rigParent : ie
        }
      }
      setRenderCamera(ee) {
        this._renderCamera = ee
      }
      _getSharedGizmoLight() {
        return this._sharedGizmoLight || (this._sharedGizmoLight = new Ae.d("shared gizmo light", new Je.p(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = Ye.c.Gray()), this._sharedGizmoLight
      }
      static get DefaultUtilityLayer() {
        return null == Ve._DefaultUtilityLayer ? Ve._CreateDefaultUtilityLayerFromScene(Fe.b.LastCreatedScene) : Ve._DefaultUtilityLayer
      }
      static _CreateDefaultUtilityLayerFromScene(ee) {
        return Ve._DefaultUtilityLayer = new Ve(ee), Ve._DefaultUtilityLayer.originalScene.Bx.addOnce((() => {
          Ve._DefaultUtilityLayer = null
        })), Ve._DefaultUtilityLayer
      }
      static get DefaultKeepDepthUtilityLayer() {
        return null == Ve._DefaultKeepDepthUtilityLayer ? Ve._CreateDefaultKeepUtilityLayerFromScene(Fe.b.LastCreatedScene) : Ve._DefaultKeepDepthUtilityLayer
      }
      static _CreateDefaultKeepUtilityLayerFromScene(ee) {
        return Ve._DefaultKeepDepthUtilityLayer = new Ve(ee), Ve._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, Ve._DefaultKeepDepthUtilityLayer.originalScene.Bx.addOnce((() => {
          Ve._DefaultKeepDepthUtilityLayer = null
        })), Ve._DefaultKeepDepthUtilityLayer
      }
      constructor(ee) {
        let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.originalScene = ee, this.handleEvents = ie, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.processAllEvents = !1, this.pickingEnabled = !0, this.onPointerOutObservable = new ge.d, this.utilityLayerScene = new we.f(ee.Nf(), {
          virtual: !0,
          useFloatingOrigin: ee.floatingOriginMode
        }), this.utilityLayerScene.useRightHandedSystem = ee.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), ie && (this._originalPointerObserver = ee.onPrePointerObservable.add((ie => {
          if (!this.utilityLayerScene.activeCamera) return;
          if (!this.pickingEnabled) return;
          if (!this.processAllEvents && ie.type !== De.c.POINTERMOVE && ie.type !== De.c.POINTERUP && ie.type !== De.c.POINTERDOWN && ie.type !== De.c.POINTERDOUBLETAP) return;
          this.utilityLayerScene.pointerX = ee.pointerX, this.utilityLayerScene.pointerY = ee.pointerY;
          const He = ie.event;
          if (ee.isPointerCaptured(He.pointerId)) return void(this._pointerCaptures[He.pointerId] = !1);
          const ye = He => {
              let ye;
              if (ie.nearInteractionPickingInfo) ye = ie.nearInteractionPickingInfo.pickedMesh.Xx() == He ? ie.nearInteractionPickingInfo : new Pe.e;
              else if (He !== this.utilityLayerScene && ie.originalPickingInfo) ye = ie.originalPickingInfo;
              else {
                let be = null;
                this._renderCamera && (be = He._activeCamera, He._activeCamera = this._renderCamera, ie.ray = null), ye = ie.ray ? He.pickWithRay(ie.ray) : He.tq(ee.pointerX, ee.pointerY), be && (He._activeCamera = be)
              }
              return ye
            },
            be = ye(this.utilityLayerScene);
          if (!ie.ray && be && (ie.ray = be.ray), ie.originalPickingInfo?.aimTransform && be && (be.aimTransform = ie.originalPickingInfo.aimTransform, be.gripTransform = ie.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(ie), this.onlyCheckPointerDownEvents && ie.type != De.c.POINTERDOWN) return ie.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new De.i(ie.type, ie.event, be), ie.type), void(ie.type === De.c.POINTERUP && this._pointerCaptures[He.pointerId] && (this._pointerCaptures[He.pointerId] = !1));
          if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) be && be.hit && (ie.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new De.i(ie.type, ie.event, be), ie.type), ie.skipOnPointerObservable = !0);
          else {
            const He = ye(ee),
              Me = ie.event;
            He && be && (0 === be.distance && He.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(He.pickedMesh) ? (this._notifyObservers(ie, He, Me), ie.skipOnPointerObservable = !0) : ie.type === De.c.POINTERDOWN ? (this._pointerCaptures[Me.pointerId] = !0, this._notifyObservers(ie, He, Me)) : ie.type !== De.c.POINTERMOVE && ie.type !== De.c.POINTERUP || (this._lastPointerEvents[Me.pointerId] && (this.onPointerOutObservable.notifyObservers(Me.pointerId), delete this._lastPointerEvents[Me.pointerId]), this._notifyObservers(ie, He, Me)) : !this._pointerCaptures[Me.pointerId] && (be.distance < He.distance || 0 === He.distance) ? (this._notifyObservers(ie, be, Me), ie.skipOnPointerObservable || (ie.skipOnPointerObservable = be.distance > 0)) : !this._pointerCaptures[Me.pointerId] && be.distance >= He.distance && (this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(He.pickedMesh) ? (this._notifyObservers(ie, He, Me), ie.skipOnPointerObservable = !0) : (ie.type !== De.c.POINTERMOVE && ie.type !== De.c.POINTERUP || this._lastPointerEvents[Me.pointerId] && (this.onPointerOutObservable.notifyObservers(Me.pointerId), delete this._lastPointerEvents[Me.pointerId]), this._notifyObservers(ie, be, Me))), ie.type === De.c.POINTERUP && this._pointerCaptures[Me.pointerId] && (this._pointerCaptures[Me.pointerId] = !1))
          }
        })), this._originalPointerObserver && ee.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, He || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((ee => {
          this.shouldRender && ee == this.getRenderCamera() && this.render()
        }))), this._sceneDisposeObserver = this.originalScene.Bx.add((() => {
          this.dispose()
        })), this._updateCamera()
      }
      _notifyObservers(ee, ie, He) {
        ee.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new De.i(ee.type, ee.event, ie), ee.type), this._lastPointerEvents[He.pointerId] = !0)
      }
      render() {
        if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
          const ee = this.utilityLayerScene.activeCamera.Xx(),
            ie = this.utilityLayerScene.activeCamera;
          ie._scene = this.utilityLayerScene, ie.leftCamera && (ie.leftCamera._scene = this.utilityLayerScene), ie.rightCamera && (ie.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), ie._scene = ee, ie.leftCamera && (ie.leftCamera._scene = ee), ie.rightCamera && (ie.rightCamera._scene = ee)
        }
      }
      dispose() {
        this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.Bx.remove(this._sceneDisposeObserver), this._originalPointerObserver && this.originalScene.onPrePointerObservable.remove(this._originalPointerObserver), this.utilityLayerScene.dispose()
      }
      _updateCamera() {
        this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
      }
    }
    Ve._DefaultUtilityLayer = null, Ve._DefaultKeepDepthUtilityLayer = null;
    const ae = {
      FindMainCamera: function(ee) {
        return ee.findMainCamera()
      },
      FindMainObjectRenderer: function(ee) {
        return ee.findMainObjectRenderer()
      },
      CreateUtilityLayerRenderer: function(ee) {
        let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const He = ee.yp,
          ye = new Ve(He, ie, !0);
        ye.utilityLayerScene.activeCamera = He.activeCamera;
        let be = ae.FindMainCamera(He.frameGraph);
        !be && He.cameras.length > 0 && (be = He.cameras[0]), be && (ye.setRenderCamera(be), ye.utilityLayerScene.activeCamera = be);
        const Me = He.onAfterRenderObservable.add((() => {
          ye.render()
        }));
        return ye.utilityLayerScene.Bx.addOnce((() => {
          He.onAfterRenderObservable.remove(Me)
        })), ye
      }
    };
    let ce = null;

    function xe(ee, ie, He, ye) {
      let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        Me = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Ke = arguments.length > 6 ? arguments[6] : void 0,
        Ue = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Fe = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
      const {
        height: Je,
        width: oe
      } = le(ee, ie, He);
      if (!Je || !oe) return void ke.e.Error("Invalid 'size' parameter !");
      const Re = ie.Xx();
      let fe = Re.activeCamera !== ie;
      if (Re.frameGraph) {
        const ee = ae.FindMainObjectRenderer(Re.frameGraph);
        ee && (fe = ee.camera !== ie)
      }
      fe ? ve(ee, ie, He, (ee => {
        if (Me) {
          const ie = new Blob([ee]);
          qe.h.DownloadBlob(ie), ye && ye("")
        } else ye && ye(ee)
      }), be, 1, ee.getCreationOptions().antialias, void 0, void 0, void 0, void 0, Ke) : ee.onEndFrameObservable.addOnce((() => {
        ce || (ce = document.createElement("canvas")), ce.width = oe, ce.height = Je;
        const ie = ce.getContext("2d"),
          He = ee.getRenderingCanvas();
        if (!ie || !He) return void ke.e.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
        const fe = He.width,
          Te = He.height,
          pe = ce.width,
          Xe = ce.height,
          ze = pe / fe,
          Be = Xe / Te,
          Ee = Ue ? Math.max(ze, Be) : Math.min(ze, Be),
          ge = fe * Ee,
          Oe = Te * Ee,
          de = (pe - ge) / 2,
          We = (Xe - Oe) / 2;
        ie.save(), ie.fillStyle = Fe ? Re.clearColor.toHexString() : "rgba(0, 0, 0, 0)", ie.fillRect(0, 0, oe, Je), ie.restore(), ie.drawImage(He, 0, 0, fe, Te, de, We, ge, Oe), Me ? (qe.h.EncodeScreenshotCanvasData(ce, void 0, be, void 0, Ke), ye && ye("")) : qe.h.EncodeScreenshotCanvasData(ce, ye, be, void 0, Ke)
      }))
    }
    async function Le(ee, ie, He) {
      let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        be = arguments.length > 4 ? arguments[4] : void 0,
        Me = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Ke = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Ue = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      return await new Promise(((Fe, Je) => {
        xe(ee, ie, He, (ee => {
          "undefined" !== typeof ee ? Fe(ee) : Je(new Error("Data is undefined"))
        }), ye, Ue, be, Me, Ke)
      }))
    }
    async function Ce(ee, ie, He, ye) {
      let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        Me = arguments.length > 5 ? arguments[5] : void 0,
        Ke = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return await new Promise((Ue => {
        xe(ee, ie, {
          width: He,
          height: ye
        }, (() => {
          Ue()
        }), be, !0, Me, Ke)
      }))
    }

    function ve(ee, ie, Me, Ke) {
      let Ue = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        Fe = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
        Je = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        oe = arguments.length > 7 ? arguments[7] : void 0,
        qe = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Xe = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        ze = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
        Be = arguments.length > 11 ? arguments[11] : void 0,
        Ee = arguments.length > 12 ? arguments[12] : void 0,
        ge = arguments.length > 13 ? arguments[13] : void 0,
        Oe = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
        de = arguments.length > 15 ? arguments[15] : void 0;
      const We = ie.Xx();
      if (We.frameGraph) return void me(We.frameGraph, ie, Me, Ue, Fe, Je, oe, Be, ge, !Ke).then((ee => {
        Ke && Ke(ee)
      }));
      const {
        height: te,
        width: Ze,
        finalWidth: we,
        finalHeight: De
      } = le(ee, ie, Me), Pe = {
        width: Ze,
        height: te
      };
      if (!te || !Ze) return void ke.e.Error("Invalid 'size' parameter !");
      ee.skipFrameRender = !0;
      const Ae = ee.getRenderWidth,
        Ye = ee.getRenderHeight;
      ee.getRenderWidth = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && ee._currentRenderTarget ? ee._currentRenderTarget.width : Ze
      }, ee.getRenderHeight = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && ee._currentRenderTarget ? ee._currentRenderTarget.height : te
      }, ee.onResizeObservable.hasObservers() && ee.onResizeObservable.notifyObservers(ee);
      const Ve = new be.e("screenShot", Pe, We, !1, !1, 0, !1, ye.e.BILINEAR_SAMPLINGMODE, void 0, Xe, void 0, void 0, void 0, Fe);
      Ve.renderList = We.meshes.slice(), Ve.samples = Fe, Ve.renderSprites = qe, Ve.activeCamera = ie, Ve.forceLayerMaskCheck = ze, Ee?.(Ve);
      const ae = ge || fe.DumpData,
        ce = () => {
          We.incrementRenderId(), We.resetCachedMaterial(), (0, pe.f)((() => Ve.isReadyForRendering() && ie.isReady(!0)), (() => {
            ee.onEndFrameObservable.addOnce((() => {
              we === Ze && De === te ? Ve.readPixels(void 0, void 0, void 0, !1).then((ee => {
                ae(Ze, te, ee, Ke, Ue, oe, !0, void 0, Be), Ve.dispose()
              })) : (ee.isWebGPU ? He.e(679).then((() => He(64004))) : He.e(680).then((() => He(64008)))).then((async () => await (0, Te.d)("pass", Ve.getInternalTexture(), We, void 0, void 0, void 0, we, De).then((ie => {
                ee._readTexturePixels(ie, we, De, -1, 0, null, !0, !1, 0, 0).then((ee => {
                  ae(we, De, ee, Ke, Ue, oe, !0, void 0, Be), ie.dispose()
                }))
              }))))
            })), We.incrementRenderId(), We.resetCachedMaterial();
            const ye = We.activeCamera,
              be = We.activeCameras,
              Me = ie.outputRenderTarget,
              Fe = We.spritesEnabled;
            We.activeCamera = ie, We.activeCameras = null, ie.outputRenderTarget = Ve, We.spritesEnabled = qe;
            const Je = We.meshes;
            We.meshes = Ve.renderList || We.meshes;
            try {
              We.render()
            } finally {
              We.activeCamera = ye, We.activeCameras = be, ie.outputRenderTarget = Me, We.spritesEnabled = Fe, We.meshes = Je, ee.getRenderWidth = Ae, ee.getRenderHeight = Ye, ee.onResizeObservable.hasObservers() && ee.onResizeObservable.notifyObservers(ee), ie.getProjectionMatrix(!0), ee.skipFrameRender = !1
            }
          }), (() => {
            ee.skipFrameRender = !1, ee.getRenderWidth = Ae, ee.getRenderHeight = Ye, de?.()
          }), void 0, Oe)
        };
      if (Je) {
        const ee = new Re("antialiasing", 1, We.activeCamera);
        Ve.addPostProcess(ee), ee.autoClear = !0, ee.onEffectCreatedObservable.addOnce((ee => {
          ee.isReady() ? ce() : ee.onCompiled = () => {
            ce()
          }
        }))
      } else ce()
    }
    async function ue(ee, ie, He) {
      let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        Me = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Ke = arguments.length > 6 ? arguments[6] : void 0,
        Ue = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Fe = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Je = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
        oe = arguments.length > 10 ? arguments[10] : void 0,
        Re = arguments.length > 11 ? arguments[11] : void 0,
        ke = arguments.length > 12 ? arguments[12] : void 0;
      return await new Promise(((qe, fe) => {
        ve(ee, ie, He, (ee => {
          "undefined" !== typeof ee ? qe(ee) : fe(new Error("Data is undefined"))
        }), ye, be, Me, Ke, Ue, Fe, Je, oe, Re, ke)
      }))
    }
    async function me(ee, ie, He) {
      let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        Me = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Ke = arguments.length > 6 ? arguments[6] : void 0,
        Ue = arguments.length > 7 ? arguments[7] : void 0,
        Fe = arguments.length > 8 ? arguments[8] : void 0,
        Je = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        oe = arguments.length > 10 ? arguments[10] : void 0;
      const Re = ee.engine,
        ke = ee.textureManager,
        {
          height: qe,
          width: Te,
          finalWidth: pe,
          finalHeight: ze
        } = le(Re, ie, He),
        Be = {
          width: Te,
          height: qe
        },
        Ee = Fe || fe.DumpData,
        ge = ee.tasks,
        Oe = ge.length,
        de = ee.pausedExecution,
        te = Re.getCaps().parallelShaderCompile;
      ke.setBackBufferTextures(0, 0, {
        size: Be,
        options: {
          createMipMaps: !1,
          samples: be,
          types: [0],
          formats: [5],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot color"]
        },
        sizeIsPercentage: !1
      }, {
        size: Be,
        options: {
          createMipMaps: !1,
          samples: be,
          types: [0],
          formats: [Re.isStencilEnable ? 13 : 14],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot depth"]
        },
        sizeIsPercentage: !1
      });
      let we = Xe;
      if (Me) {
        const ie = new We("fxaa", ee);
        ie.sourceTexture = we, we = ie.outputTexture, ee.addTask(ie)
      }
      if (pe !== Te || ze !== qe) {
        const ie = new Ze("pass", ee);
        ie.sourceTexture = we, ie.targetTexture = ee.textureManager.createRenderTargetTexture("pass_output", {
          size: {
            width: pe,
            height: ze
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
        }), we = ie.outputTexture, ee.addTask(ie)
      }
      const De = ae.FindMainObjectRenderer(ee);
      let Pe = null;
      De && (Pe = De.camera, De.camera = ie), Re.getCaps().parallelShaderCompile = void 0, await ee.buildAsync();
      const Ae = oe ?? (ke.hasHistoryTextures ? 32 : 1);
      for (let fe = 0; fe < Ae; ++fe) ee.execute();
      ee.pausedExecution = !0, Re.getCaps().parallelShaderCompile = te;
      for (let fe = Oe; fe < ge.length; ++fe) ee.tasks[fe].dispose();
      ee.tasks.length = Oe, De && Pe && (De.camera = Pe);
      const Ye = ee.textureManager.getTextureFromHandle(we);
      return Ye.incrementReferences(), ke.resetBackBufferTextures(), await ee.buildAsync(), ee.pausedExecution = de, new Promise((ee => {
        Re._readTexturePixels(Ye, pe, ze, -1, 0, null, !0, !1, 0, 0).then((async ie => {
          Ye.dispose(), Ee(pe, ze, ie, Je ? void 0 : ie => ee(ie), ye, Ke, !0, void 0, Ue), Je && ee(null)
        }))
      }))
    }

    function le(ee, ie, He) {
      let ye = 0,
        be = 0,
        Me = 0,
        Ke = 0;
      if ("object" === typeof He) {
        const Ue = He.precision ? Math.abs(He.precision) : 1;
        He.width && He.height ? (ye = He.height * Ue, be = He.width * Ue) : He.width && !He.height ? (be = He.width * Ue, ye = Math.round(be / ee.getAspectRatio(ie))) : He.height && !He.width ? (ye = He.height * Ue, be = Math.round(ye * ee.getAspectRatio(ie))) : (be = Math.round(ee.getRenderWidth() * Ue), ye = Math.round(be / ee.getAspectRatio(ie))), He.finalWidth && He.finalHeight ? (Ke = He.finalHeight, Me = He.finalWidth) : He.finalWidth && !He.finalHeight ? (Me = He.finalWidth, Ke = Math.round(Me / ee.getAspectRatio(ie))) : He.finalHeight && !He.finalWidth ? (Ke = He.finalHeight, Me = Math.round(Ke * ee.getAspectRatio(ie))) : (Me = be, Ke = ye)
      } else isNaN(He) || (ye = He, be = He, Me = He, Ke = He);
      return be && (be = Math.floor(be)), ye && (ye = Math.floor(ye)), Me && (Me = Math.floor(Me)), Ke && (Ke = Math.floor(Ke)), {
        height: 0 | ye,
        width: 0 | be,
        finalWidth: 0 | Me,
        finalHeight: 0 | Ke
      }
    }
    const Se = {
      CreateScreenshot: xe,
      CreateScreenshotAsync: Le,
      CreateScreenshotWithResizeAsync: Ce,
      CreateScreenshotUsingRenderTarget: ve,
      CreateScreenshotUsingRenderTargetAsync: ue,
      CreateScreenshotForFrameGraphAsync: me
    };
    let ne = !1;

    function je() {
      if (ne) return;
      ne = !0;
      qe.h.CreateScreenshot = xe, qe.h.CreateScreenshotAsync = Le, qe.h.CreateScreenshotUsingRenderTarget = ve, qe.h.CreateScreenshotUsingRenderTargetAsync = ue
    }
    je()
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);