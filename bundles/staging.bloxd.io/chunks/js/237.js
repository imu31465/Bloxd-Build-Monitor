export const id = 237;
export const ids = [237, 238];
export const modules = {
  40347: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Rm,
      g: () => Em
    });
    var hm = fm(40113),
      Am = fm(40119),
      am = fm(37185),
      xm = fm(37336),
      wm = fm(40355),
      Dm = fm(40326),
      im = fm(37224);
    let Rm = (() => {
        var mm;
        let Tm, fm, Dm = wm.e,
          im = [],
          Rm = [],
          pm = [],
          Em = [];
        return mm = class extends Dm {
          constructor(mm, Tm, fm, Am) {
            super(mm, fm, Am), this.groundColor = (0, hm.i)(this, im, new xm.b(0, 0, 0)), this.direction = ((0, hm.i)(this, Rm), (0, hm.i)(this, pm, void 0)), (0, hm.i)(this, Em), this.direction = Tm || am.p.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(mm) {
            return this.direction = am.p.Normalize(mm.subtract(am.p.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(mm, Tm) {
            const fm = am.p.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", fm.x, fm.y, fm.z, 0, Tm), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), Tm), this
          }
          transferToNodeMaterialEffect(mm, Tm) {
            const fm = am.p.Normalize(this.direction);
            return mm.setFloat3(Tm, fm.x, fm.y, fm.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = am.e.Identity()), this._worldMatrix
          }
          getTypeID() {
            return wm.e.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(mm, Tm) {
            mm["HEMILIGHT" + Tm] = !0
          }
        }, (() => {
          const am = "function" === typeof Symbol && Symbol.metadata ? Object.create(Dm[Symbol.metadata] ?? null) : void 0;
          Tm = [(0, Am.k)()], fm = [(0, Am.F)()], (0, hm.g)(null, null, Tm, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: mm => "groundColor" in mm,
              get: mm => mm.groundColor,
              set: (mm, Tm) => {
                mm.groundColor = Tm
              }
            },
            metadata: am
          }, im, Rm), (0, hm.g)(null, null, fm, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: mm => "direction" in mm,
              get: mm => mm.direction,
              set: (mm, Tm) => {
                mm.direction = Tm
              }
            },
            metadata: am
          }, pm, Em), am && Object.defineProperty(mm, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: am
          })
        })(), mm
      })(),
      pm = !1;

    function Em() {
      pm || (pm = !0, Dm.c.AddNodeConstructor("Light_Type_3", ((mm, Tm) => () => new Rm(mm, am.p.Zero(), Tm))), (0, im.d)("BABYLON.HemisphericLight", Rm))
    }
  },
  37813: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Am
    });
    var hm = fm(37821);
    class Am {
      static GetPlanes(mm) {
        const Tm = [];
        for (let fm = 0; fm < 6; fm++) Tm.push(new hm.d(0, 0, 0, 0));
        return Am.GetPlanesToRef(mm, Tm), Tm
      }
      static GetNearPlaneToRef(mm, Tm) {
        const fm = mm.m;
        Tm.normal.x = fm[3] + fm[2], Tm.normal.y = fm[7] + fm[6], Tm.normal.z = fm[11] + fm[10], Tm.d = fm[15] + fm[14], Tm.normalize()
      }
      static GetFarPlaneToRef(mm, Tm) {
        const fm = mm.m;
        Tm.normal.x = fm[3] - fm[2], Tm.normal.y = fm[7] - fm[6], Tm.normal.z = fm[11] - fm[10], Tm.d = fm[15] - fm[14], Tm.normalize()
      }
      static GetLeftPlaneToRef(mm, Tm) {
        const fm = mm.m;
        Tm.normal.x = fm[3] + fm[0], Tm.normal.y = fm[7] + fm[4], Tm.normal.z = fm[11] + fm[8], Tm.d = fm[15] + fm[12], Tm.normalize()
      }
      static GetRightPlaneToRef(mm, Tm) {
        const fm = mm.m;
        Tm.normal.x = fm[3] - fm[0], Tm.normal.y = fm[7] - fm[4], Tm.normal.z = fm[11] - fm[8], Tm.d = fm[15] - fm[12], Tm.normalize()
      }
      static GetTopPlaneToRef(mm, Tm) {
        const fm = mm.m;
        Tm.normal.x = fm[3] - fm[1], Tm.normal.y = fm[7] - fm[5], Tm.normal.z = fm[11] - fm[9], Tm.d = fm[15] - fm[13], Tm.normalize()
      }
      static GetBottomPlaneToRef(mm, Tm) {
        const fm = mm.m;
        Tm.normal.x = fm[3] + fm[1], Tm.normal.y = fm[7] + fm[5], Tm.normal.z = fm[11] + fm[9], Tm.d = fm[15] + fm[13], Tm.normalize()
      }
      static GetPlanesToRef(mm, Tm) {
        Am.GetNearPlaneToRef(mm, Tm[0]), Am.GetFarPlaneToRef(mm, Tm[1]), Am.GetLeftPlaneToRef(mm, Tm[2]), Am.GetRightPlaneToRef(mm, Tm[3]), Am.GetTopPlaneToRef(mm, Tm[4]), Am.GetBottomPlaneToRef(mm, Tm[5])
      }
      static IsPointInFrustum(mm, Tm) {
        for (let fm = 0; fm < 6; fm++)
          if (Tm[fm].dotCoordinate(mm) < 0) return !1;
        return !0
      }
    }
  },
  37821: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Am
    });
    var hm = fm(37185);
    class Am {
      constructor(mm, Tm, fm, Am) {
        this.normal = new hm.p(mm, Tm, fm), this.d = Am
      }
      ahm() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Am(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let mm = this.normal.getHashCode();
        return mm = 397 * mm ^ this.d, mm
      }
      normalize() {
        const mm = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let Tm = 0;
        return 0 !== mm && (Tm = 1 / mm), this.normal.x *= Tm, this.normal.y *= Tm, this.normal.z *= Tm, this.d *= Tm, this
      }
      transform(mm) {
        const Tm = Am._TmpMatrix;
        mm.invertToRef(Tm);
        const fm = Tm.m,
          hm = this.normal.x,
          am = this.normal.y,
          xm = this.normal.z,
          wm = this.d,
          Dm = hm * fm[0] + am * fm[1] + xm * fm[2] + wm * fm[3],
          im = hm * fm[4] + am * fm[5] + xm * fm[6] + wm * fm[7],
          Rm = hm * fm[8] + am * fm[9] + xm * fm[10] + wm * fm[11],
          pm = hm * fm[12] + am * fm[13] + xm * fm[14] + wm * fm[15];
        return new Am(Dm, im, Rm, pm)
      }
      dotCoordinate(mm) {
        return this.normal.x * mm.x + this.normal.y * mm.y + this.normal.z * mm.z + this.d
      }
      copyFromPoints(mm, Tm, fm) {
        const hm = Tm.x - mm.x,
          Am = Tm.y - mm.y,
          am = Tm.z - mm.z,
          xm = fm.x - mm.x,
          wm = fm.y - mm.y,
          Dm = fm.z - mm.z,
          im = Am * Dm - am * wm,
          Rm = am * xm - hm * Dm,
          pm = hm * wm - Am * xm,
          Em = Math.sqrt(im * im + Rm * Rm + pm * pm);
        let om;
        return om = 0 !== Em ? 1 / Em : 0, this.normal.x = im * om, this.normal.y = Rm * om, this.normal.z = pm * om, this.d = -(this.normal.x * mm.x + this.normal.y * mm.y + this.normal.z * mm.z), this
      }
      isFrontFacingTo(mm, Tm) {
        return hm.p.Dot(this.normal, mm) <= Tm
      }
      signedDistanceTo(mm) {
        return hm.p.Dot(mm, this.normal) + this.d
      }
      static FromArray(mm) {
        return new Am(mm[0], mm[1], mm[2], mm[3])
      }
      static FromPoints(mm, Tm, fm) {
        const hm = new Am(0, 0, 0, 0);
        return hm.copyFromPoints(mm, Tm, fm), hm
      }
      static FromPositionAndNormal(mm, Tm) {
        const fm = new Am(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(mm, Tm, fm)
      }
      static FromPositionAndNormalToRef(mm, Tm, fm) {
        return fm.normal.ZZ(Tm), fm.normal.normalize(), fm.d = -mm.dot(fm.normal), fm
      }
      static SignedDistanceToPlaneFromPositionAndNormal(mm, Tm, fm) {
        const Am = -(Tm.x * mm.x + Tm.y * mm.y + Tm.z * mm.z);
        return hm.p.Dot(fm, Tm) + Am
      }
    }
    Am._TmpMatrix = hm.e.Identity()
  },
  38151: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => hm
    });
    class hm {
      constructor(mm, Tm, fm, hm) {
        this.x = mm, this.y = Tm, this.width = fm, this.height = hm
      }
      toGlobal(mm, Tm) {
        return new hm(this.x * mm, this.y * Tm, this.width * mm, this.height * Tm)
      }
      toGlobalToRef(mm, Tm, fm) {
        return fm.x = this.x * mm, fm.y = this.y * Tm, fm.width = this.width * mm, fm.height = this.height * Tm, this
      }
      clone() {
        return new hm(this.x, this.y, this.width, this.height)
      }
    }
  },
  38764: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => am
    });
    var hm = fm(38766);
    const Am = (mm, Tm, fm) => mm ? mm.getClassName && "Mesh" === mm.getClassName() ? null : !mm.getClassName || "SubMesh" !== mm.getClassName() && "PhysicsBody" !== mm.getClassName() ? mm.clone ? mm.clone() : Array.isArray(mm) ? mm.slice() : fm && "object" === typeof mm ? {
      ...mm
    } : null : mm.clone(Tm) : null;
    class am {
      static DeepCopy(mm, Tm, fm, am) {
        let xm = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const wm = function(mm) {
          const Tm = [];
          do {
            const fm = Object.getOwnPropertyNames(mm);
            for (const mm of fm) - 1 === Tm.indexOf(mm) && Tm.push(mm)
          } while (mm = Object.getPrototypeOf(mm));
          return Tm
        }(mm);
        for (const im of wm) {
          if ("_" === im[0] && (!am || -1 === am.indexOf(im))) continue;
          if (im.endsWith("Observable")) continue;
          if (fm && -1 !== fm.indexOf(im)) continue;
          const wm = mm[im],
            Rm = typeof wm;
          if ("function" !== Rm) try {
            if ("object" === Rm)
              if (wm instanceof Uint8Array) Tm[im] = Uint8Array.from(wm);
              else if (wm instanceof Array) {
              if (Tm[im] = [], wm.length > 0)
                if ("object" == typeof wm[0])
                  for (let mm = 0; mm < wm.length; mm++) {
                    const fm = Am(wm[mm], Tm, xm); - 1 === Tm[im].indexOf(fm) && Tm[im].push(fm)
                  } else Tm[im] = wm.slice(0)
            } else Tm[im] = Am(wm, Tm, xm);
            else Tm[im] = wm
          } catch (Dm) {
            hm.b.Warn(Dm.message)
          }
        }
      }
    }
  },
  37970: (mm, Tm, fm) => {
    function hm() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (mm => {
        const Tm = 16 * Math.random() | 0;
        return ("x" === mm ? Tm : 3 & Tm | 8).toString(16)
      }))
    }
    fm.d(Tm, {
      c: () => hm
    })
  },
  38766: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => hm
    });
    class hm {
      static _CheckLimit(mm, Tm) {
        let fm = hm._LogLimitOutputs[mm];
        return fm ? fm.current++ : (fm = {
          limit: Tm,
          current: 1
        }, hm._LogLimitOutputs[mm] = fm), fm.current <= fm.limit
      }
      static _GenerateLimitMessage(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const fm = hm._LogLimitOutputs[mm];
        if (!fm || !hm.MessageLimitReached) return;
        const Am = this._Levels[Tm];
        fm.current === fm.limit && hm[Am.name](hm.MessageLimitReached.replace(/%LIMIT%/g, "" + fm.limit).replace(/%TYPE%/g, Am.name ?? ""))
      }
      static _AddLogEntry(mm) {
        hm._LogCache = mm + hm._LogCache, hm.OnNewCacheEntry && hm.OnNewCacheEntry(mm)
      }
      static _FormatMessage(mm) {
        const Tm = mm => mm < 10 ? "0" + mm : "" + mm,
          fm = new Date;
        return "[" + Tm(fm.getHours()) + ":" + Tm(fm.getMinutes()) + ":" + Tm(fm.getSeconds()) + "]: " + mm
      }
      static _LogDisabled(mm, Tm) {}
      static _LogEnabled() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Tm = arguments.length > 1 ? arguments[1] : void 0,
          fm = arguments.length > 2 ? arguments[2] : void 0;
        const Am = Array.isArray(Tm) ? Tm[0] : Tm;
        if (void 0 !== fm && !hm._CheckLimit(Am, fm)) return;
        const am = hm._FormatMessage(Am),
          xm = this._Levels[mm],
          wm = Array.isArray(Tm) ? Tm.slice(1) : [];
        xm.logFunc && xm.logFunc("BJS - " + am, ...wm);
        const Dm = `<div style='color:${xm.color}'>${am}</div><br>`;
        hm._AddLogEntry(Dm), hm._GenerateLimitMessage(Am, mm)
      }
      static get LogCache() {
        return hm._LogCache
      }
      static ClearLogCache() {
        hm._LogCache = "", hm._LogLimitOutputs = {}, hm.errorsCount = 0
      }
      static set LogLevels(mm) {
        hm.Log = hm._LogDisabled, hm.Warn = hm._LogDisabled, hm.Error = hm._LogDisabled;
        const Tm = [hm.MessageLogLevel, hm.WarningLogLevel, hm.ErrorLogLevel];
        for (const fm of Tm)
          if ((mm & fm) === fm) {
            const mm = this._Levels[fm];
            hm[mm.name] = hm._LogEnabled.bind(hm, fm)
          }
      }
    }
    hm.NoneLogLevel = 0, hm.MessageLogLevel = 1, hm.WarningLogLevel = 2, hm.ErrorLogLevel = 4, hm.AllLogLevel = 7, hm.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", hm._LogCache = "", hm._LogLimitOutputs = {}, hm._Levels = [{}, {
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
    }], hm.errorsCount = 0, hm.Log = hm._LogEnabled.bind(hm, hm.MessageLogLevel), hm.Warn = hm._LogEnabled.bind(hm, hm.WarningLogLevel), hm.Error = hm._LogEnabled.bind(hm, hm.ErrorLogLevel)
  },
  61315: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      CreateScreenshot: () => Hm,
      CreateScreenshotAsync: () => ym,
      CreateScreenshotForFrameGraphAsync: () => lm,
      CreateScreenshotUsingRenderTarget: () => rm,
      CreateScreenshotUsingRenderTargetAsync: () => sm,
      CreateScreenshotWithResizeAsync: () => Cm,
      RegisterScreenshotTools: () => Lm,
      ScreenshotTools: () => um
    });
    var hm = fm(40585),
      Am = fm(41834),
      am = fm(41820),
      xm = fm(40129),
      wm = fm(41822),
      Dm = fm(37201),
      im = fm(37185);
    class Rm extends wm.g {
      static _GetDefines(mm) {
        if (!mm) return null;
        return mm.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
      }
      _gatherImports(mm, Tm) {
        mm ? (this._webGPUReady = !0, Tm.push(Promise.all([fm.e(375).then((() => fm(61582))), fm.e(376).then((() => fm(61591)))]))) : Tm.push(Promise.all([fm.e(377).then((() => fm(61597))), fm.e(378).then((() => fm(61606)))]))
      }
      constructor(mm) {
        const Tm = {
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: mm,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || Dm.c.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          vertexShader: Rm.VertexUrl,
          fragmentShader: Rm.FragmentUrl,
          uniforms: Rm.Uniforms
        };
        super({
          ...Tm,
          defines: Rm._GetDefines(Tm.engine)
        }), this.texelSize = new im.l(0, 0)
      }
      bind() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.bind(mm), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
      }
    }
    Rm.VertexUrl = "fxaa", Rm.FragmentUrl = "fxaa", Rm.Uniforms = ["texelSize"];
    class pm extends am.b {
      getClassName() {
        return "FxaaPostProcess"
      }
      constructor(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Am = arguments.length > 3 ? arguments[3] : void 0,
          am = arguments.length > 4 ? arguments[4] : void 0,
          xm = arguments.length > 5 ? arguments[5] : void 0,
          wm = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const Dm = {
          uniforms: Rm.Uniforms,
          size: "number" === typeof Tm ? Tm : void 0,
          camera: fm,
          samplingMode: Am || hm.f.BILINEAR_SAMPLINGMODE,
          engine: am,
          reusable: xm,
          textureType: wm,
          ...Tm
        };
        super(mm, Rm.FragmentUrl, {
          effectWrapper: "number" !== typeof Tm && Tm.effectWrapper ? void 0 : new Rm(mm, am, Dm),
          ...Dm
        }), this.onApplyObservable.add((mm => {
          this._effectWrapper.texelSize = this.texelSize
        }))
      }
      static _Parse(mm, Tm, fm, hm) {
        return xm.d.Parse((() => new pm(mm.name, mm.options, Tm, mm.renderTargetSamplingMode, fm.dO(), mm.reusable)), mm, fm, hm)
      }
    }
    var Em = fm(38766),
      om = fm(40203),
      Om = fm(41846),
      Ym = fm(41831),
      qm = fm(40008);
    const jm = 0;
    class Vm {
      constructor(mm, Tm, fm) {
        this.name = mm, this._parentTask = Tm, this._context = fm, this.disabled = !1
      }
      setInitializeFunc(mm) {
        this._initFunc = mm
      }
      setExecuteFunc(mm) {
        this._executeFunc = mm
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
    class Im extends Vm {
      static IsObjectListPass(mm) {
        return void 0 !== mm.setObjectList
      }
      get objectList() {
        return this._objectList
      }
      setObjectList(mm) {
        this._objectList = mm
      }
      constructor(mm, Tm, fm, hm) {
        super(mm, Tm, fm), this._engine = hm
      }
      _isValid() {
        const mm = super._isValid();
        return mm || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
      }
    }
    class Km extends Vm {
      static IsRenderPass(mm) {
        return void 0 !== mm.setRenderTarget
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
      constructor(mm, Tm, fm, hm) {
        super(mm, Tm, fm), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = hm
      }
      setRenderTarget(mm) {
        this._renderTarget = mm
      }
      setRenderTargetDepth(mm) {
        this._renderTargetDepth = mm
      }
      addDependencies(mm) {
        if (void 0 !== mm)
          if (Array.isArray(mm))
            for (const Tm of mm) this._dependencies.add(Tm);
          else this._dependencies.add(mm)
      }
      collectDependencies(mm) {
        const Tm = this._dependencies.keys();
        for (let fm = Tm.next(); !0 !== fm.done; fm = Tm.next()) mm.add(fm.value);
        if (void 0 !== this._renderTarget)
          if (Array.isArray(this._renderTarget))
            for (const fm of this._renderTarget) void 0 !== fm && mm.add(fm);
          else mm.add(this._renderTarget);
        void 0 !== this._renderTargetDepth && mm.add(this._renderTargetDepth)
      }
      setOutputLayerAndFaceIndices(mm) {
        const Tm = this.frameGraphRenderTarget.renderTargetWrapper;
        if (Tm)
          for (const fm of mm) Tm.setLayerAndFaceIndex(fm.targetIndex, fm.layerIndex, fm.faceIndex)
      }
      _initialize() {
        this._frameGraphRenderTarget = this._context.createRenderTarget(this.name, this._renderTarget, this._renderTargetDepth, this.depthReadOnly, this.stencilReadOnly), super._initialize()
      }
      _execute() {
        this._context.bindRenderTarget(this._frameGraphRenderTarget), super._execute(), this._context.restoreDefaultFramebuffer()
      }
      _isValid() {
        const mm = super._isValid();
        return mm || (void 0 !== this._renderTarget || void 0 !== this.renderTargetDepth ? null : "Render target and render target depth cannot both be undefined.")
      }
      _dispose() {
        this._frameGraphRenderTarget?.dispose()
      }
    }
    var Qm = fm(37203);
    class nm {
      get name() {
        return this._name
      }
      set name(mm) {
        this._name = mm
      }
      get disabled() {
        return this._disabled
      }
      set disabled(mm) {
        this._disabled = mm
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
      constructor(mm, Tm) {
        this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new Qm.c, this.onBeforeTaskExecute = new Qm.c, this.onAfterTaskExecute = new Qm.c, this.name = mm, this._frameGraph = Tm, this._reset()
      }
      _reset() {
        for (const mm of this._passes) mm._dispose();
        for (const mm of this._passesDisabled) mm._dispose();
        this._passes.length = 0, this._passesDisabled.length = 0
      }
      _addPass(mm, Tm) {
        Tm ? this._passesDisabled.push(mm) : this._passes.push(mm)
      }
      _checkTask() {
        let mm, Tm = null,
          fm = null;
        for (const wm of this._passes) {
          const hm = wm._isValid();
          if (hm) throw new Error(`Pass "${wm.name}" is not valid. ${hm}`);
          if (Km.IsRenderPass(wm)) {
            const mm = Array.isArray(wm.renderTarget) ? wm.renderTarget : [wm.renderTarget];
            Tm = [];
            for (const fm of mm) void 0 !== fm && Tm.push(this._frameGraph.textureManager.getTextureFromHandle(fm));
            fm = void 0 !== wm.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(wm.renderTargetDepth) : null
          } else Im.IsObjectListPass(wm) && (mm = wm.objectList)
        }
        let hm, Am = null,
          am = [],
          xm = null;
        for (const wm of this._passesDisabled) {
          const mm = wm._isValid();
          if (mm) throw new Error(`Pass "${wm.name}" is not valid. ${mm}`);
          if (Km.IsRenderPass(wm)) {
            const mm = Array.isArray(wm.renderTarget) ? wm.renderTarget : [wm.renderTarget];
            Am = [];
            for (const Tm of mm) void 0 !== Tm && Am.push(this._frameGraph.textureManager.getTextureFromHandle(Tm));
            am = mm, xm = void 0 !== wm.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(wm.renderTargetDepth) : null
          } else Im.IsObjectListPass(wm) && (hm = wm.objectList)
        }
        if (this._passesDisabled.length > 0) {
          if (!this._checkSameRenderTarget(Tm, Am)) {
            let mm = !0;
            for (const Tm of am)
              if (void 0 !== Tm && !this._frameGraph.textureManager.isHistoryTexture(Tm)) {
                mm = !1;
                break
              } if (!mm) throw new Error(`The output texture of the task "${this.name}" is different when it is enabled or disabled.`)
          }
          if (fm !== xm && null !== xm) throw new Error(`The output depth texture of the task "${this.name}" is different when it is enabled or disabled.`);
          if (mm !== hm && null !== hm) throw new Error(`The output object list of the task "${this.name}" is different when it is enabled or disabled.`)
        }
      }
      _execute() {
        const mm = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
        this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const Tm of mm) Tm._execute()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
        this.onAfterTaskExecute.notifyObservers(this)
      }
      _initializePasses() {
        this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const mm of this._passes) mm._initialize();
          for (const mm of this._passesDisabled) mm._initialize()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
      }
      _checkSameRenderTarget(mm, Tm) {
        if (null === mm || null === Tm) return mm === Tm;
        if (mm.length !== Tm.length) return !1;
        for (let fm = 0; fm < mm.length; fm++)
          if (mm[fm] !== Tm[fm]) return !1;
        return !0
      }
    }
    class Jm extends nm {
      get alphaMode() {
        return this.postProcess.alphaMode
      }
      set alphaMode(mm) {
        this.postProcess.alphaMode = mm
      }
      get drawWrapper() {
        return this._postProcessDrawWrapper
      }
      constructor(mm, Tm, fm) {
        super(mm, Tm), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = fm, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture = this._frameGraph.textureManager.createDanglingHandle(), this.outputDepthAttachmentTexture = this._frameGraph.textureManager.createDanglingHandle()
      }
      isReady() {
        return this.postProcess.isReady()
      }
      getClassName() {
        return "FrameGraphPostProcessTask"
      }
      record() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Tm = arguments.length > 1 ? arguments[1] : void 0,
          fm = arguments.length > 2 ? arguments[2] : void 0;
        if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
        const hm = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
        if (hm && (hm.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, hm), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentTexture, this.depthAttachmentTexture), hm) {
          const mm = this._frameGraph.textureManager.getTextureAbsoluteDimensions(hm);
          this._sourceWidth = mm.width, this._sourceHeight = mm.height
        }
        const Am = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
        this._outputWidth = Am.size.width, this._outputHeight = Am.size.height;
        const am = this._frameGraph.addRenderPass(this.name);
        if (am.depthReadOnly = this.depthReadOnly, am.stencilReadOnly = this.stencilReadOnly, am.addDependencies(this.sourceTexture), am.setRenderTarget(this.outputTexture), am.setRenderTargetDepth(this.depthAttachmentTexture), am.setExecuteFunc((mm => {
            mm.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && mm.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), Tm?.(mm), this.viewport && mm.setViewport(this.viewport), mm.applyFullScreenEffect(this._postProcessDrawWrapper, (() => {
              void 0 !== this.sourceTexture && mm.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), fm?.(mm), this.postProcess.bind()
            }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), mm.restoreDefaultFramebuffer(), mm.popDebugGroup()
          })), !mm) {
          const mm = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
          mm.depthReadOnly = this.depthReadOnly, mm.stencilReadOnly = this.stencilReadOnly, mm.addDependencies(this.sourceTexture), mm.setRenderTarget(this.outputTexture), mm.setRenderTargetDepth(this.depthAttachmentTexture), mm.setExecuteFunc((mm => {
            void 0 !== this.sourceTexture && 0 === this.alphaMode && (this.viewport && mm.setViewport(this.viewport), mm.copyTexture(this.sourceTexture, void 0, void 0 !== this.viewport))
          }))
        }
        return am
      }
      dispose() {
        this.postProcess.dispose(), super.dispose()
      }
    }
    class cm extends Jm {
      constructor(mm, Tm, fm) {
        super(mm, Tm, fm || new Rm(mm, Tm.engine))
      }
      getClassName() {
        return "FrameGraphFXAATask"
      }
      record() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Tm = arguments.length > 1 ? arguments[1] : void 0,
          fm = arguments.length > 2 ? arguments[2] : void 0;
        const hm = super.record(mm, Tm, fm);
        return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, hm
      }
    }
    var zm = fm(41839);
    class Zm extends Jm {
      constructor(mm, Tm, fm) {
        super(mm, Tm, fm || new zm.h(mm, Tm.engine))
      }
      getClassName() {
        return "FrameGraphPassTask"
      }
    }
    var km = fm(40199),
      bm = fm(40283),
      Sm = fm(40242),
      em = fm(40347),
      Nm = fm(37336);
    class Gm {
      getRenderCamera(mm) {
        if (this._renderCamera) return this._renderCamera;
        {
          let Tm;
          return Tm = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, mm && Tm && Tm.isRigCamera ? Tm.rigParent : Tm
        }
      }
      setRenderCamera(mm) {
        this._renderCamera = mm
      }
      _getSharedGizmoLight() {
        return this._sharedGizmoLight || (this._sharedGizmoLight = new em.e("shared gizmo light", new im.p(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = Nm.b.Gray()), this._sharedGizmoLight
      }
      static get DefaultUtilityLayer() {
        return null == Gm._DefaultUtilityLayer ? Gm._CreateDefaultUtilityLayerFromScene(Dm.c.LastCreatedScene) : Gm._DefaultUtilityLayer
      }
      static _CreateDefaultUtilityLayerFromScene(mm) {
        return Gm._DefaultUtilityLayer = new Gm(mm), Gm._DefaultUtilityLayer.originalScene.iG.addOnce((() => {
          Gm._DefaultUtilityLayer = null
        })), Gm._DefaultUtilityLayer
      }
      static get DefaultKeepDepthUtilityLayer() {
        return null == Gm._DefaultKeepDepthUtilityLayer ? Gm._CreateDefaultKeepUtilityLayerFromScene(Dm.c.LastCreatedScene) : Gm._DefaultKeepDepthUtilityLayer
      }
      static _CreateDefaultKeepUtilityLayerFromScene(mm) {
        return Gm._DefaultKeepDepthUtilityLayer = new Gm(mm), Gm._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, Gm._DefaultKeepDepthUtilityLayer.originalScene.iG.addOnce((() => {
          Gm._DefaultKeepDepthUtilityLayer = null
        })), Gm._DefaultKeepDepthUtilityLayer
      }
      constructor(mm) {
        let Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.originalScene = mm, this.handleEvents = Tm, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.processAllEvents = !1, this.pickingEnabled = !0, this.onPointerOutObservable = new Qm.c, this.utilityLayerScene = new km.f(mm.dO(), {
          virtual: !0,
          useFloatingOrigin: mm.floatingOriginMode
        }), this.utilityLayerScene.useRightHandedSystem = mm.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), Tm && (this._originalPointerObserver = mm.onPrePointerObservable.add((Tm => {
          if (!this.utilityLayerScene.activeCamera) return;
          if (!this.pickingEnabled) return;
          if (!this.processAllEvents && Tm.type !== bm.c.POINTERMOVE && Tm.type !== bm.c.POINTERUP && Tm.type !== bm.c.POINTERDOWN && Tm.type !== bm.c.POINTERDOUBLETAP) return;
          this.utilityLayerScene.pointerX = mm.pointerX, this.utilityLayerScene.pointerY = mm.pointerY;
          const fm = Tm.event;
          if (mm.isPointerCaptured(fm.pointerId)) return void(this._pointerCaptures[fm.pointerId] = !1);
          const hm = fm => {
              let hm;
              if (Tm.nearInteractionPickingInfo) hm = Tm.nearInteractionPickingInfo.pickedMesh.wG() == fm ? Tm.nearInteractionPickingInfo : new Sm.e;
              else if (fm !== this.utilityLayerScene && Tm.originalPickingInfo) hm = Tm.originalPickingInfo;
              else {
                let Am = null;
                this._renderCamera && (Am = fm._activeCamera, fm._activeCamera = this._renderCamera, Tm.ray = null), hm = Tm.ray ? fm.pickWithRay(Tm.ray) : fm.Do(mm.pointerX, mm.pointerY), Am && (fm._activeCamera = Am)
              }
              return hm
            },
            Am = hm(this.utilityLayerScene);
          if (!Tm.ray && Am && (Tm.ray = Am.ray), Tm.originalPickingInfo?.aimTransform && Am && (Am.aimTransform = Tm.originalPickingInfo.aimTransform, Am.gripTransform = Tm.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(Tm), this.onlyCheckPointerDownEvents && Tm.type != bm.c.POINTERDOWN) return Tm.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new bm.f(Tm.type, Tm.event, Am), Tm.type), void(Tm.type === bm.c.POINTERUP && this._pointerCaptures[fm.pointerId] && (this._pointerCaptures[fm.pointerId] = !1));
          if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) Am && Am.hit && (Tm.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new bm.f(Tm.type, Tm.event, Am), Tm.type), Tm.skipOnPointerObservable = !0);
          else {
            const fm = hm(mm),
              am = Tm.event;
            fm && Am && (0 === Am.distance && fm.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(fm.pickedMesh) ? (this._notifyObservers(Tm, fm, am), Tm.skipOnPointerObservable = !0) : Tm.type === bm.c.POINTERDOWN ? (this._pointerCaptures[am.pointerId] = !0, this._notifyObservers(Tm, fm, am)) : Tm.type !== bm.c.POINTERMOVE && Tm.type !== bm.c.POINTERUP || (this._lastPointerEvents[am.pointerId] && (this.onPointerOutObservable.notifyObservers(am.pointerId), delete this._lastPointerEvents[am.pointerId]), this._notifyObservers(Tm, fm, am)) : !this._pointerCaptures[am.pointerId] && (Am.distance < fm.distance || 0 === fm.distance) ? (this._notifyObservers(Tm, Am, am), Tm.skipOnPointerObservable || (Tm.skipOnPointerObservable = Am.distance > 0)) : !this._pointerCaptures[am.pointerId] && Am.distance >= fm.distance && (this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(fm.pickedMesh) ? (this._notifyObservers(Tm, fm, am), Tm.skipOnPointerObservable = !0) : (Tm.type !== bm.c.POINTERMOVE && Tm.type !== bm.c.POINTERUP || this._lastPointerEvents[am.pointerId] && (this.onPointerOutObservable.notifyObservers(am.pointerId), delete this._lastPointerEvents[am.pointerId]), this._notifyObservers(Tm, Am, am))), Tm.type === bm.c.POINTERUP && this._pointerCaptures[am.pointerId] && (this._pointerCaptures[am.pointerId] = !1))
          }
        })), this._originalPointerObserver && mm.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, fm || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((mm => {
          this.shouldRender && mm == this.getRenderCamera() && this.render()
        }))), this._sceneDisposeObserver = this.originalScene.iG.add((() => {
          this.dispose()
        })), this._updateCamera()
      }
      _notifyObservers(mm, Tm, fm) {
        mm.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new bm.f(mm.type, mm.event, Tm), mm.type), this._lastPointerEvents[fm.pointerId] = !0)
      }
      render() {
        if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
          const mm = this.utilityLayerScene.activeCamera.wG(),
            Tm = this.utilityLayerScene.activeCamera;
          Tm._scene = this.utilityLayerScene, Tm.leftCamera && (Tm.leftCamera._scene = this.utilityLayerScene), Tm.rightCamera && (Tm.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), Tm._scene = mm, Tm.leftCamera && (Tm.leftCamera._scene = mm), Tm.rightCamera && (Tm.rightCamera._scene = mm)
        }
      }
      dispose() {
        this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.iG.remove(this._sceneDisposeObserver), this._originalPointerObserver && this.originalScene.onPrePointerObservable.remove(this._originalPointerObserver), this.utilityLayerScene.dispose()
      }
      _updateCamera() {
        this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
      }
    }
    Gm._DefaultUtilityLayer = null, Gm._DefaultKeepDepthUtilityLayer = null;
    const Xm = {
      FindMainCamera: function(mm) {
        return mm.findMainCamera()
      },
      FindMainObjectRenderer: function(mm) {
        return mm.findMainObjectRenderer()
      },
      CreateUtilityLayerRenderer: function(mm) {
        let Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const fm = mm.Aq,
          hm = new Gm(fm, Tm, !0);
        hm.utilityLayerScene.activeCamera = fm.activeCamera;
        let Am = Xm.FindMainCamera(fm.frameGraph);
        !Am && fm.cameras.length > 0 && (Am = fm.cameras[0]), Am && (hm.setRenderCamera(Am), hm.utilityLayerScene.activeCamera = Am);
        const am = fm.onAfterRenderObservable.add((() => {
          hm.render()
        }));
        return hm.utilityLayerScene.iG.addOnce((() => {
          fm.onAfterRenderObservable.remove(am)
        })), hm
      }
    };
    let Pm = null;

    function Hm(mm, Tm, fm, hm) {
      let Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        am = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        xm = arguments.length > 6 ? arguments[6] : void 0,
        wm = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Dm = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
      const {
        height: im,
        width: Rm
      } = Mm(mm, Tm, fm);
      if (!im || !Rm) return void Em.b.Error("Invalid 'size' parameter !");
      const pm = Tm.wG();
      let Om = pm.activeCamera !== Tm;
      if (pm.frameGraph) {
        const mm = Xm.FindMainObjectRenderer(pm.frameGraph);
        mm && (Om = mm.camera !== Tm)
      }
      Om ? rm(mm, Tm, fm, (mm => {
        if (am) {
          const Tm = new Blob([mm]);
          om.h.DownloadBlob(Tm), hm && hm("")
        } else hm && hm(mm)
      }), Am, 1, mm.getCreationOptions().antialias, void 0, void 0, void 0, void 0, xm) : mm.onEndFrameObservable.addOnce((() => {
        Pm || (Pm = document.createElement("canvas")), Pm.width = Rm, Pm.height = im;
        const Tm = Pm.getContext("2d"),
          fm = mm.getRenderingCanvas();
        if (!Tm || !fm) return void Em.b.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
        const Om = fm.width,
          Ym = fm.height,
          qm = Pm.width,
          jm = Pm.height,
          Vm = qm / Om,
          Im = jm / Ym,
          Km = wm ? Math.max(Vm, Im) : Math.min(Vm, Im),
          Qm = Om * Km,
          nm = Ym * Km,
          Jm = (qm - Qm) / 2,
          cm = (jm - nm) / 2;
        Tm.save(), Tm.fillStyle = Dm ? pm.clearColor.toHexString() : "rgba(0, 0, 0, 0)", Tm.fillRect(0, 0, Rm, im), Tm.restore(), Tm.drawImage(fm, 0, 0, Om, Ym, Jm, cm, Qm, nm), am ? (om.h.EncodeScreenshotCanvasData(Pm, void 0, Am, void 0, xm), hm && hm("")) : om.h.EncodeScreenshotCanvasData(Pm, hm, Am, void 0, xm)
      }))
    }
    async function ym(mm, Tm, fm) {
      let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Am = arguments.length > 4 ? arguments[4] : void 0,
        am = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        xm = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        wm = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      return await new Promise(((Dm, im) => {
        Hm(mm, Tm, fm, (mm => {
          "undefined" !== typeof mm ? Dm(mm) : im(new Error("Data is undefined"))
        }), hm, wm, Am, am, xm)
      }))
    }
    async function Cm(mm, Tm, fm, hm) {
      let Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        am = arguments.length > 5 ? arguments[5] : void 0,
        xm = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return await new Promise((wm => {
        Hm(mm, Tm, {
          width: fm,
          height: hm
        }, (() => {
          wm()
        }), Am, !0, am, xm)
      }))
    }

    function rm(mm, Tm, am, xm) {
      let wm = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        Dm = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
        im = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Rm = arguments.length > 7 ? arguments[7] : void 0,
        om = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        jm = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        Vm = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
        Im = arguments.length > 11 ? arguments[11] : void 0,
        Km = arguments.length > 12 ? arguments[12] : void 0,
        Qm = arguments.length > 13 ? arguments[13] : void 0,
        nm = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
        Jm = arguments.length > 15 ? arguments[15] : void 0;
      const cm = Tm.wG();
      if (cm.frameGraph) return void lm(cm.frameGraph, Tm, am, wm, Dm, im, Rm, Im, Qm, !xm).then((mm => {
        xm && xm(mm)
      }));
      const {
        height: zm,
        width: Zm,
        finalWidth: km,
        finalHeight: bm
      } = Mm(mm, Tm, am), Sm = {
        width: Zm,
        height: zm
      };
      if (!zm || !Zm) return void Em.b.Error("Invalid 'size' parameter !");
      mm.skipFrameRender = !0;
      const em = mm.getRenderWidth,
        Nm = mm.getRenderHeight;
      mm.getRenderWidth = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && mm._currentRenderTarget ? mm._currentRenderTarget.width : Zm
      }, mm.getRenderHeight = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && mm._currentRenderTarget ? mm._currentRenderTarget.height : zm
      }, mm.onResizeObservable.hasObservers() && mm.onResizeObservable.notifyObservers(mm);
      const Gm = new Am.c("screenShot", Sm, cm, !1, !1, 0, !1, hm.f.BILINEAR_SAMPLINGMODE, void 0, jm, void 0, void 0, void 0, Dm);
      Gm.renderList = cm.meshes.slice(), Gm.samples = Dm, Gm.renderSprites = om, Gm.activeCamera = Tm, Gm.forceLayerMaskCheck = Vm, Km?.(Gm);
      const Xm = Qm || Om.DumpData,
        Pm = () => {
          cm.incrementRenderId(), cm.resetCachedMaterial(), (0, qm.f)((() => Gm.isReadyForRendering() && Tm.isReady(!0)), (() => {
            mm.onEndFrameObservable.addOnce((() => {
              km === Zm && bm === zm ? Gm.readPixels(void 0, void 0, void 0, !1).then((mm => {
                Xm(Zm, zm, mm, xm, wm, Rm, !0, void 0, Im), Gm.dispose()
              })) : (mm.isWebGPU ? fm.e(371).then((() => fm(61516))) : fm.e(372).then((() => fm(61521)))).then((async () => await (0, Ym.d)("pass", Gm.getInternalTexture(), cm, void 0, void 0, void 0, km, bm).then((Tm => {
                mm._readTexturePixels(Tm, km, bm, -1, 0, null, !0, !1, 0, 0).then((mm => {
                  Xm(km, bm, mm, xm, wm, Rm, !0, void 0, Im), Tm.dispose()
                }))
              }))))
            })), cm.incrementRenderId(), cm.resetCachedMaterial();
            const hm = cm.activeCamera,
              Am = cm.activeCameras,
              am = Tm.outputRenderTarget,
              Dm = cm.spritesEnabled;
            cm.activeCamera = Tm, cm.activeCameras = null, Tm.outputRenderTarget = Gm, cm.spritesEnabled = om;
            const im = cm.meshes;
            cm.meshes = Gm.renderList || cm.meshes;
            try {
              cm.render()
            } finally {
              cm.activeCamera = hm, cm.activeCameras = Am, Tm.outputRenderTarget = am, cm.spritesEnabled = Dm, cm.meshes = im, mm.getRenderWidth = em, mm.getRenderHeight = Nm, mm.onResizeObservable.hasObservers() && mm.onResizeObservable.notifyObservers(mm), Tm.getProjectionMatrix(!0), mm.skipFrameRender = !1
            }
          }), (() => {
            mm.skipFrameRender = !1, mm.getRenderWidth = em, mm.getRenderHeight = Nm, Jm?.()
          }), void 0, nm)
        };
      if (im) {
        const mm = new pm("antialiasing", 1, cm.activeCamera);
        Gm.addPostProcess(mm), mm.autoClear = !0, mm.onEffectCreatedObservable.addOnce((mm => {
          mm.isReady() ? Pm() : mm.onCompiled = () => {
            Pm()
          }
        }))
      } else Pm()
    }
    async function sm(mm, Tm, fm) {
      let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        am = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        xm = arguments.length > 6 ? arguments[6] : void 0,
        wm = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Dm = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        im = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
        Rm = arguments.length > 10 ? arguments[10] : void 0,
        pm = arguments.length > 11 ? arguments[11] : void 0,
        Em = arguments.length > 12 ? arguments[12] : void 0;
      return await new Promise(((om, Om) => {
        rm(mm, Tm, fm, (mm => {
          "undefined" !== typeof mm ? om(mm) : Om(new Error("Data is undefined"))
        }), hm, Am, am, xm, wm, Dm, im, Rm, pm, Em)
      }))
    }
    async function lm(mm, Tm, fm) {
      let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        am = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        xm = arguments.length > 6 ? arguments[6] : void 0,
        wm = arguments.length > 7 ? arguments[7] : void 0,
        Dm = arguments.length > 8 ? arguments[8] : void 0,
        im = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        Rm = arguments.length > 10 ? arguments[10] : void 0;
      const pm = mm.engine,
        Em = mm.textureManager,
        {
          height: om,
          width: Ym,
          finalWidth: qm,
          finalHeight: Vm
        } = Mm(pm, Tm, fm),
        Im = {
          width: Ym,
          height: om
        },
        Km = Dm || Om.DumpData,
        Qm = mm.tasks,
        nm = Qm.length,
        Jm = mm.pausedExecution,
        zm = pm.getCaps().parallelShaderCompile;
      Em.setBackBufferTextures(0, 0, {
        size: Im,
        options: {
          createMipMaps: !1,
          samples: Am,
          types: [0],
          formats: [5],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot color"]
        },
        sizeIsPercentage: !1
      }, {
        size: Im,
        options: {
          createMipMaps: !1,
          samples: Am,
          types: [0],
          formats: [pm.isStencilEnable ? 13 : 14],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot depth"]
        },
        sizeIsPercentage: !1
      });
      let km = jm;
      if (am) {
        const Tm = new cm("fxaa", mm);
        Tm.sourceTexture = km, km = Tm.outputTexture, mm.addTask(Tm)
      }
      if (qm !== Ym || Vm !== om) {
        const Tm = new Zm("pass", mm);
        Tm.sourceTexture = km, Tm.targetTexture = mm.textureManager.createRenderTargetTexture("pass_output", {
          size: {
            width: qm,
            height: Vm
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
        }), km = Tm.outputTexture, mm.addTask(Tm)
      }
      const bm = Xm.FindMainObjectRenderer(mm);
      let Sm = null;
      bm && (Sm = bm.camera, bm.camera = Tm), pm.getCaps().parallelShaderCompile = void 0, await mm.buildAsync();
      const em = Rm ?? (Em.hasHistoryTextures ? 32 : 1);
      for (let Om = 0; Om < em; ++Om) mm.execute();
      mm.pausedExecution = !0, pm.getCaps().parallelShaderCompile = zm;
      for (let Om = nm; Om < Qm.length; ++Om) mm.tasks[Om].dispose();
      mm.tasks.length = nm, bm && Sm && (bm.camera = Sm);
      const Nm = mm.textureManager.getTextureFromHandle(km);
      return Nm.incrementReferences(), Em.resetBackBufferTextures(), await mm.buildAsync(), mm.pausedExecution = Jm, new Promise((mm => {
        pm._readTexturePixels(Nm, qm, Vm, -1, 0, null, !0, !1, 0, 0).then((async Tm => {
          Nm.dispose(), Km(qm, Vm, Tm, im ? void 0 : Tm => mm(Tm), hm, xm, !0, void 0, wm), im && mm(null)
        }))
      }))
    }

    function Mm(mm, Tm, fm) {
      let hm = 0,
        Am = 0,
        am = 0,
        xm = 0;
      if ("object" === typeof fm) {
        const wm = fm.precision ? Math.abs(fm.precision) : 1;
        fm.width && fm.height ? (hm = fm.height * wm, Am = fm.width * wm) : fm.width && !fm.height ? (Am = fm.width * wm, hm = Math.round(Am / mm.getAspectRatio(Tm))) : fm.height && !fm.width ? (hm = fm.height * wm, Am = Math.round(hm * mm.getAspectRatio(Tm))) : (Am = Math.round(mm.getRenderWidth() * wm), hm = Math.round(Am / mm.getAspectRatio(Tm))), fm.finalWidth && fm.finalHeight ? (xm = fm.finalHeight, am = fm.finalWidth) : fm.finalWidth && !fm.finalHeight ? (am = fm.finalWidth, xm = Math.round(am / mm.getAspectRatio(Tm))) : fm.finalHeight && !fm.finalWidth ? (xm = fm.finalHeight, am = Math.round(xm * mm.getAspectRatio(Tm))) : (am = Am, xm = hm)
      } else isNaN(fm) || (hm = fm, Am = fm, am = fm, xm = fm);
      return Am && (Am = Math.floor(Am)), hm && (hm = Math.floor(hm)), am && (am = Math.floor(am)), xm && (xm = Math.floor(xm)), {
        height: 0 | hm,
        width: 0 | Am,
        finalWidth: 0 | am,
        finalHeight: 0 | xm
      }
    }
    const um = {
      CreateScreenshot: Hm,
      CreateScreenshotAsync: ym,
      CreateScreenshotWithResizeAsync: Cm,
      CreateScreenshotUsingRenderTarget: rm,
      CreateScreenshotUsingRenderTargetAsync: sm,
      CreateScreenshotForFrameGraphAsync: lm
    };
    let Bm = !1;

    function Lm() {
      if (Bm) return;
      Bm = !0;
      om.h.CreateScreenshot = Hm, om.h.CreateScreenshotAsync = ym, om.h.CreateScreenshotUsingRenderTarget = rm, om.h.CreateScreenshotUsingRenderTargetAsync = sm
    }
    Lm()
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);