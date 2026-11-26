export const id = 265;
export const ids = [265, 266];
export const modules = {
  41248: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => MB,
      d: () => zB
    });
    var YB = GB(40998),
      DB = GB(41004),
      QB = GB(37778),
      oB = GB(37894),
      jB = GB(41250),
      yB = GB(41220),
      JB = GB(37823);
    let MB = (() => {
        var BB;
        let OB, GB, yB = jB.d,
          JB = [],
          MB = [],
          PB = [],
          zB = [];
        return BB = class extends yB {
          constructor(BB, OB, GB, DB) {
            super(BB, GB, DB), this.groundColor = (0, YB.j)(this, JB, new oB.c(0, 0, 0)), this.direction = ((0, YB.j)(this, MB), (0, YB.j)(this, PB, void 0)), (0, YB.j)(this, zB), this.direction = OB || QB.r.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(BB) {
            return this.direction = QB.r.Normalize(BB.subtract(QB.r.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(BB, OB) {
            const GB = QB.r.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", GB.x, GB.y, GB.z, 0, OB), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), OB), this
          }
          transferToNodeMaterialEffect(BB, OB) {
            const GB = QB.r.Normalize(this.direction);
            return BB.setFloat3(OB, GB.x, GB.y, GB.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = QB.d.Identity()), this._worldMatrix
          }
          getTypeID() {
            return jB.d.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(BB, OB) {
            BB["HEMILIGHT" + OB] = !0
          }
        }, (() => {
          const QB = "function" === typeof Symbol && Symbol.metadata ? Object.create(yB[Symbol.metadata] ?? null) : void 0;
          OB = [(0, DB.n)()], GB = [(0, DB.H)()], (0, YB.h)(null, null, OB, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "groundColor" in BB,
              get: BB => BB.groundColor,
              set: (BB, OB) => {
                BB.groundColor = OB
              }
            },
            metadata: QB
          }, JB, MB), (0, YB.h)(null, null, GB, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: BB => "direction" in BB,
              get: BB => BB.direction,
              set: (BB, OB) => {
                BB.direction = OB
              }
            },
            metadata: QB
          }, PB, zB), QB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: QB
          })
        })(), BB
      })(),
      PB = !1;

    function zB() {
      PB || (PB = !0, yB.b.AddNodeConstructor("Light_Type_3", ((BB, OB) => () => new MB(BB, QB.r.Zero(), OB))), (0, JB.f)("BABYLON.HemisphericLight", MB))
    }
  },
  38424: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => DB
    });
    var YB = GB(38432);
    class DB {
      static GetPlanes(BB) {
        const OB = [];
        for (let GB = 0; GB < 6; GB++) OB.push(new YB.c(0, 0, 0, 0));
        return DB.GetPlanesToRef(BB, OB), OB
      }
      static GetNearPlaneToRef(BB, OB) {
        const GB = BB.m;
        OB.normal.x = GB[3] + GB[2], OB.normal.y = GB[7] + GB[6], OB.normal.z = GB[11] + GB[10], OB.d = GB[15] + GB[14], OB.normalize()
      }
      static GetFarPlaneToRef(BB, OB) {
        const GB = BB.m;
        OB.normal.x = GB[3] - GB[2], OB.normal.y = GB[7] - GB[6], OB.normal.z = GB[11] - GB[10], OB.d = GB[15] - GB[14], OB.normalize()
      }
      static GetLeftPlaneToRef(BB, OB) {
        const GB = BB.m;
        OB.normal.x = GB[3] + GB[0], OB.normal.y = GB[7] + GB[4], OB.normal.z = GB[11] + GB[8], OB.d = GB[15] + GB[12], OB.normalize()
      }
      static GetRightPlaneToRef(BB, OB) {
        const GB = BB.m;
        OB.normal.x = GB[3] - GB[0], OB.normal.y = GB[7] - GB[4], OB.normal.z = GB[11] - GB[8], OB.d = GB[15] - GB[12], OB.normalize()
      }
      static GetTopPlaneToRef(BB, OB) {
        const GB = BB.m;
        OB.normal.x = GB[3] - GB[1], OB.normal.y = GB[7] - GB[5], OB.normal.z = GB[11] - GB[9], OB.d = GB[15] - GB[13], OB.normalize()
      }
      static GetBottomPlaneToRef(BB, OB) {
        const GB = BB.m;
        OB.normal.x = GB[3] + GB[1], OB.normal.y = GB[7] + GB[5], OB.normal.z = GB[11] + GB[9], OB.d = GB[15] + GB[13], OB.normalize()
      }
      static GetPlanesToRef(BB, OB) {
        DB.GetNearPlaneToRef(BB, OB[0]), DB.GetFarPlaneToRef(BB, OB[1]), DB.GetLeftPlaneToRef(BB, OB[2]), DB.GetRightPlaneToRef(BB, OB[3]), DB.GetTopPlaneToRef(BB, OB[4]), DB.GetBottomPlaneToRef(BB, OB[5])
      }
      static IsPointInFrustum(BB, OB) {
        for (let GB = 0; GB < 6; GB++)
          if (OB[GB].dotCoordinate(BB) < 0) return !1;
        return !0
      }
    }
  },
  38432: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => DB
    });
    var YB = GB(37778);
    class DB {
      constructor(BB, OB, GB, DB) {
        this.normal = new YB.r(BB, OB, GB), this.d = DB
      }
      dDB() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new DB(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let BB = this.normal.getHashCode();
        return BB = 397 * BB ^ this.d, BB
      }
      normalize() {
        const BB = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let OB = 0;
        return 0 !== BB && (OB = 1 / BB), this.normal.x *= OB, this.normal.y *= OB, this.normal.z *= OB, this.d *= OB, this
      }
      transform(BB) {
        const OB = DB._TmpMatrix;
        BB.invertToRef(OB);
        const GB = OB.m,
          YB = this.normal.x,
          QB = this.normal.y,
          oB = this.normal.z,
          jB = this.d,
          yB = YB * GB[0] + QB * GB[1] + oB * GB[2] + jB * GB[3],
          JB = YB * GB[4] + QB * GB[5] + oB * GB[6] + jB * GB[7],
          MB = YB * GB[8] + QB * GB[9] + oB * GB[10] + jB * GB[11],
          PB = YB * GB[12] + QB * GB[13] + oB * GB[14] + jB * GB[15];
        return new DB(yB, JB, MB, PB)
      }
      dotCoordinate(BB) {
        return this.normal.x * BB.x + this.normal.y * BB.y + this.normal.z * BB.z + this.d
      }
      copyFromPoints(BB, OB, GB) {
        const YB = OB.x - BB.x,
          DB = OB.y - BB.y,
          QB = OB.z - BB.z,
          oB = GB.x - BB.x,
          jB = GB.y - BB.y,
          yB = GB.z - BB.z,
          JB = DB * yB - QB * jB,
          MB = QB * oB - YB * yB,
          PB = YB * jB - DB * oB,
          zB = Math.sqrt(JB * JB + MB * MB + PB * PB);
        let lB;
        return lB = 0 !== zB ? 1 / zB : 0, this.normal.x = JB * lB, this.normal.y = MB * lB, this.normal.z = PB * lB, this.d = -(this.normal.x * BB.x + this.normal.y * BB.y + this.normal.z * BB.z), this
      }
      isFrontFacingTo(BB, OB) {
        return YB.r.Dot(this.normal, BB) <= OB
      }
      signedDistanceTo(BB) {
        return YB.r.Dot(BB, this.normal) + this.d
      }
      static FromArray(BB) {
        return new DB(BB[0], BB[1], BB[2], BB[3])
      }
      static FromPoints(BB, OB, GB) {
        const YB = new DB(0, 0, 0, 0);
        return YB.copyFromPoints(BB, OB, GB), YB
      }
      static FromPositionAndNormal(BB, OB) {
        const GB = new DB(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(BB, OB, GB)
      }
      static FromPositionAndNormalToRef(BB, OB, GB) {
        return GB.normal.IU(OB), GB.normal.normalize(), GB.d = -BB.dot(GB.normal), GB
      }
      static SignedDistanceToPlaneFromPositionAndNormal(BB, OB, GB) {
        const DB = -(OB.x * BB.x + OB.y * BB.y + OB.z * BB.z);
        return YB.r.Dot(GB, OB) + DB
      }
    }
    DB._TmpMatrix = YB.d.Identity()
  },
  38769: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => YB
    });
    class YB {
      constructor(BB, OB, GB, YB) {
        this.x = BB, this.y = OB, this.width = GB, this.height = YB
      }
      toGlobal(BB, OB) {
        return new YB(this.x * BB, this.y * OB, this.width * BB, this.height * OB)
      }
      toGlobalToRef(BB, OB, GB) {
        return GB.x = this.x * BB, GB.y = this.y * OB, GB.width = this.width * BB, GB.height = this.height * OB, this
      }
      clone() {
        return new YB(this.x, this.y, this.width, this.height)
      }
    }
  },
  39358: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => QB
    });
    var YB = GB(39366);
    const DB = (BB, OB, GB) => BB ? BB.getClassName && "Mesh" === BB.getClassName() ? null : !BB.getClassName || "SubMesh" !== BB.getClassName() && "PhysicsBody" !== BB.getClassName() ? BB.clone ? BB.clone() : Array.isArray(BB) ? BB.slice() : GB && "object" === typeof BB ? {
      ...BB
    } : null : BB.clone(OB) : null;
    class QB {
      static DeepCopy(BB, OB, GB, QB) {
        let oB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const jB = function(BB) {
          const OB = [];
          do {
            const GB = Object.getOwnPropertyNames(BB);
            for (const BB of GB) - 1 === OB.indexOf(BB) && OB.push(BB)
          } while (BB = Object.getPrototypeOf(BB));
          return OB
        }(BB);
        for (const JB of jB) {
          if ("_" === JB[0] && (!QB || -1 === QB.indexOf(JB))) continue;
          if (JB.endsWith("Observable")) continue;
          if (GB && -1 !== GB.indexOf(JB)) continue;
          const jB = BB[JB],
            MB = typeof jB;
          if ("function" !== MB) try {
            if ("object" === MB)
              if (jB instanceof Uint8Array) OB[JB] = Uint8Array.from(jB);
              else if (jB instanceof Array) {
              if (OB[JB] = [], jB.length > 0)
                if ("object" == typeof jB[0])
                  for (let BB = 0; BB < jB.length; BB++) {
                    const GB = DB(jB[BB], OB, oB); - 1 === OB[JB].indexOf(GB) && OB[JB].push(GB)
                  } else OB[JB] = jB.slice(0)
            } else OB[JB] = DB(jB, OB, oB);
            else OB[JB] = jB
          } catch (yB) {
            YB.b.Warn(yB.message)
          }
        }
      }
    }
  },
  38589: (BB, OB, GB) => {
    function YB() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (BB => {
        const OB = 16 * Math.random() | 0;
        return ("x" === BB ? OB : 3 & OB | 8).toString(16)
      }))
    }
    GB.d(OB, {
      e: () => YB
    })
  },
  39366: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => YB
    });
    class YB {
      static _CheckLimit(BB, OB) {
        let GB = YB._LogLimitOutputs[BB];
        return GB ? GB.current++ : (GB = {
          limit: OB,
          current: 1
        }, YB._LogLimitOutputs[BB] = GB), GB.current <= GB.limit
      }
      static _GenerateLimitMessage(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const GB = YB._LogLimitOutputs[BB];
        if (!GB || !YB.MessageLimitReached) return;
        const DB = this._Levels[OB];
        GB.current === GB.limit && YB[DB.name](YB.MessageLimitReached.replace(/%LIMIT%/g, "" + GB.limit).replace(/%TYPE%/g, DB.name ?? ""))
      }
      static _AddLogEntry(BB) {
        YB._LogCache = BB + YB._LogCache, YB.OnNewCacheEntry && YB.OnNewCacheEntry(BB)
      }
      static _FormatMessage(BB) {
        const OB = BB => BB < 10 ? "0" + BB : "" + BB,
          GB = new Date;
        return "[" + OB(GB.getHours()) + ":" + OB(GB.getMinutes()) + ":" + OB(GB.getSeconds()) + "]: " + BB
      }
      static _LogDisabled(BB, OB) {}
      static _LogEnabled() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          OB = arguments.length > 1 ? arguments[1] : void 0,
          GB = arguments.length > 2 ? arguments[2] : void 0;
        const DB = Array.isArray(OB) ? OB[0] : OB;
        if (void 0 !== GB && !YB._CheckLimit(DB, GB)) return;
        const QB = YB._FormatMessage(DB),
          oB = this._Levels[BB],
          jB = Array.isArray(OB) ? OB.slice(1) : [];
        oB.logFunc && oB.logFunc("BJS - " + QB, ...jB);
        const yB = `<div style='color:${oB.color}'>${QB}</div><br>`;
        YB._AddLogEntry(yB), YB._GenerateLimitMessage(DB, BB)
      }
      static get LogCache() {
        return YB._LogCache
      }
      static ClearLogCache() {
        YB._LogCache = "", YB._LogLimitOutputs = {}, YB.errorsCount = 0
      }
      static set LogLevels(BB) {
        YB.Log = YB._LogDisabled, YB.Warn = YB._LogDisabled, YB.Error = YB._LogDisabled;
        const OB = [YB.MessageLogLevel, YB.WarningLogLevel, YB.ErrorLogLevel];
        for (const GB of OB)
          if ((BB & GB) === GB) {
            const BB = this._Levels[GB];
            YB[BB.name] = YB._LogEnabled.bind(YB, GB)
          }
      }
    }
    YB.NoneLogLevel = 0, YB.MessageLogLevel = 1, YB.WarningLogLevel = 2, YB.ErrorLogLevel = 4, YB.AllLogLevel = 7, YB.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", YB._LogCache = "", YB._LogLimitOutputs = {}, YB._Levels = [{}, {
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
    }], YB.errorsCount = 0, YB.Log = YB._LogEnabled.bind(YB, YB.MessageLogLevel), YB.Warn = YB._LogEnabled.bind(YB, YB.WarningLogLevel), YB.Error = YB._LogEnabled.bind(YB, YB.ErrorLogLevel)
  },
  63871: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      CreateScreenshot: () => gB,
      CreateScreenshotAsync: () => rB,
      CreateScreenshotForFrameGraphAsync: () => cB,
      CreateScreenshotUsingRenderTarget: () => wB,
      CreateScreenshotUsingRenderTargetAsync: () => EB,
      CreateScreenshotWithResizeAsync: () => XB,
      RegisterScreenshotTools: () => TB,
      ScreenshotTools: () => aB
    });
    var YB = GB(41470),
      DB = GB(44953),
      QB = GB(44931),
      oB = GB(41022),
      jB = GB(44939),
      yB = GB(37796),
      JB = GB(37778);
    class MB extends jB.h {
      static _GetDefines(BB) {
        if (!BB) return null;
        return BB.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
      }
      _gatherImports(BB, OB) {
        BB ? (this._webGPUReady = !0, OB.push(Promise.all([GB.e(683).then((() => GB(64093))), GB.e(684).then((() => GB(64095)))]))) : OB.push(Promise.all([GB.e(685).then((() => GB(64104))), GB.e(686).then((() => GB(64106)))]))
      }
      constructor(BB) {
        const OB = {
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: BB,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || yB.b.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          vertexShader: MB.VertexUrl,
          fragmentShader: MB.FragmentUrl,
          uniforms: MB.Uniforms
        };
        super({
          ...OB,
          defines: MB._GetDefines(OB.engine)
        }), this.texelSize = new JB.o(0, 0)
      }
      bind() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.bind(BB), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
      }
    }
    MB.VertexUrl = "fxaa", MB.FragmentUrl = "fxaa", MB.Uniforms = ["texelSize"];
    class PB extends QB.b {
      getClassName() {
        return "FxaaPostProcess"
      }
      constructor(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          DB = arguments.length > 3 ? arguments[3] : void 0,
          QB = arguments.length > 4 ? arguments[4] : void 0,
          oB = arguments.length > 5 ? arguments[5] : void 0,
          jB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const yB = {
          uniforms: MB.Uniforms,
          size: "number" === typeof OB ? OB : void 0,
          camera: GB,
          samplingMode: DB || YB.e.BILINEAR_SAMPLINGMODE,
          engine: QB,
          reusable: oB,
          textureType: jB,
          ...OB
        };
        super(BB, MB.FragmentUrl, {
          effectWrapper: "number" !== typeof OB && OB.effectWrapper ? void 0 : new MB(BB, QB, yB),
          ...yB
        }), this.onApplyObservable.add((BB => {
          this._effectWrapper.texelSize = this.texelSize
        }))
      }
      static _Parse(BB, OB, GB, YB) {
        return oB.d.Parse((() => new PB(BB.name, BB.options, OB, BB.renderTargetSamplingMode, GB.Lp(), BB.reusable)), BB, GB, YB)
      }
    }
    var zB = GB(39366),
      lB = GB(41097),
      pB = GB(44969),
      qB = GB(44947),
      ZB = GB(40899);
    const NB = 0;
    class RB {
      constructor(BB, OB, GB) {
        this.name = BB, this._parentTask = OB, this._context = GB, this.disabled = !1
      }
      setInitializeFunc(BB) {
        this._initFunc = BB
      }
      setExecuteFunc(BB) {
        this._executeFunc = BB
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
    class WB extends RB {
      static IsObjectListPass(BB) {
        return void 0 !== BB.setObjectList
      }
      get objectList() {
        return this._objectList
      }
      setObjectList(BB) {
        this._objectList = BB
      }
      constructor(BB, OB, GB, YB) {
        super(BB, OB, GB), this._engine = YB
      }
      _isValid() {
        const BB = super._isValid();
        return BB || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
      }
    }
    class AB extends RB {
      static IsRenderPass(BB) {
        return void 0 !== BB.setRenderTarget
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
      constructor(BB, OB, GB, YB) {
        super(BB, OB, GB), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = YB
      }
      setRenderTarget(BB) {
        this._renderTarget = BB
      }
      setRenderTargetDepth(BB) {
        this._renderTargetDepth = BB
      }
      addDependencies(BB) {
        if (void 0 !== BB)
          if (Array.isArray(BB))
            for (const OB of BB) this._dependencies.add(OB);
          else this._dependencies.add(BB)
      }
      collectDependencies(BB) {
        const OB = this._dependencies.keys();
        for (let GB = OB.next(); !0 !== GB.done; GB = OB.next()) BB.add(GB.value);
        if (void 0 !== this._renderTarget)
          if (Array.isArray(this._renderTarget))
            for (const GB of this._renderTarget) void 0 !== GB && BB.add(GB);
          else BB.add(this._renderTarget);
        void 0 !== this._renderTargetDepth && BB.add(this._renderTargetDepth)
      }
      setOutputLayerAndFaceIndices(BB) {
        const OB = this.frameGraphRenderTarget.renderTargetWrapper;
        if (OB)
          for (const GB of BB) OB.setLayerAndFaceIndex(GB.targetIndex, GB.layerIndex, GB.faceIndex)
      }
      _initialize() {
        this._frameGraphRenderTarget = this._context.createRenderTarget(this.name, this._renderTarget, this._renderTargetDepth, this.depthReadOnly, this.stencilReadOnly), super._initialize()
      }
      _execute() {
        this._context.bindRenderTarget(this._frameGraphRenderTarget), super._execute(), this._context.restoreDefaultFramebuffer()
      }
      _isValid() {
        const BB = super._isValid();
        return BB || (void 0 !== this._renderTarget || void 0 !== this.renderTargetDepth ? null : "Render target and render target depth cannot both be undefined.")
      }
      _dispose() {
        this._frameGraphRenderTarget?.dispose()
      }
    }
    var VB = GB(37802);
    class SB {
      get name() {
        return this._name
      }
      set name(BB) {
        this._name = BB
      }
      get disabled() {
        return this._disabled
      }
      set disabled(BB) {
        this._disabled = BB
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
      constructor(BB, OB) {
        this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new VB.b, this.onBeforeTaskExecute = new VB.b, this.onAfterTaskExecute = new VB.b, this.name = BB, this._frameGraph = OB, this._reset()
      }
      _reset() {
        for (const BB of this._passes) BB._dispose();
        for (const BB of this._passesDisabled) BB._dispose();
        this._passes.length = 0, this._passesDisabled.length = 0
      }
      _addPass(BB, OB) {
        OB ? this._passesDisabled.push(BB) : this._passes.push(BB)
      }
      _checkTask() {
        let BB, OB = null,
          GB = null;
        for (const jB of this._passes) {
          const YB = jB._isValid();
          if (YB) throw new Error(`Pass "${jB.name}" is not valid. ${YB}`);
          if (AB.IsRenderPass(jB)) {
            const BB = Array.isArray(jB.renderTarget) ? jB.renderTarget : [jB.renderTarget];
            OB = [];
            for (const GB of BB) void 0 !== GB && OB.push(this._frameGraph.textureManager.getTextureFromHandle(GB));
            GB = void 0 !== jB.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(jB.renderTargetDepth) : null
          } else WB.IsObjectListPass(jB) && (BB = jB.objectList)
        }
        let YB, DB = null,
          QB = [],
          oB = null;
        for (const jB of this._passesDisabled) {
          const BB = jB._isValid();
          if (BB) throw new Error(`Pass "${jB.name}" is not valid. ${BB}`);
          if (AB.IsRenderPass(jB)) {
            const BB = Array.isArray(jB.renderTarget) ? jB.renderTarget : [jB.renderTarget];
            DB = [];
            for (const OB of BB) void 0 !== OB && DB.push(this._frameGraph.textureManager.getTextureFromHandle(OB));
            QB = BB, oB = void 0 !== jB.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(jB.renderTargetDepth) : null
          } else WB.IsObjectListPass(jB) && (YB = jB.objectList)
        }
        if (this._passesDisabled.length > 0) {
          if (!this._checkSameRenderTarget(OB, DB)) {
            let BB = !0;
            for (const OB of QB)
              if (void 0 !== OB && !this._frameGraph.textureManager.isHistoryTexture(OB)) {
                BB = !1;
                break
              } if (!BB) throw new Error(`The output texture of the task "${this.name}" is different when it is enabled or disabled.`)
          }
          if (GB !== oB && null !== oB) throw new Error(`The output depth texture of the task "${this.name}" is different when it is enabled or disabled.`);
          if (BB !== YB && null !== YB) throw new Error(`The output object list of the task "${this.name}" is different when it is enabled or disabled.`)
        }
      }
      _execute() {
        const BB = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
        this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const OB of BB) OB._execute()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
        this.onAfterTaskExecute.notifyObservers(this)
      }
      _initializePasses() {
        this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const BB of this._passes) BB._initialize();
          for (const BB of this._passesDisabled) BB._initialize()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
      }
      _checkSameRenderTarget(BB, OB) {
        if (null === BB || null === OB) return BB === OB;
        if (BB.length !== OB.length) return !1;
        for (let GB = 0; GB < BB.length; GB++)
          if (BB[GB] !== OB[GB]) return !1;
        return !0
      }
    }
    class nB extends SB {
      get alphaMode() {
        return this.postProcess.alphaMode
      }
      set alphaMode(BB) {
        this.postProcess.alphaMode = BB
      }
      get drawWrapper() {
        return this._postProcessDrawWrapper
      }
      constructor(BB, OB, GB) {
        super(BB, OB), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = GB, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture = this._frameGraph.textureManager.createDanglingHandle(), this.outputDepthAttachmentTexture = this._frameGraph.textureManager.createDanglingHandle()
      }
      isReady() {
        return this.postProcess.isReady()
      }
      getClassName() {
        return "FrameGraphPostProcessTask"
      }
      record() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          OB = arguments.length > 1 ? arguments[1] : void 0,
          GB = arguments.length > 2 ? arguments[2] : void 0;
        if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
        const YB = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
        if (YB && (YB.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, YB), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentTexture, this.depthAttachmentTexture), YB) {
          const BB = this._frameGraph.textureManager.getTextureAbsoluteDimensions(YB);
          this._sourceWidth = BB.width, this._sourceHeight = BB.height
        }
        const DB = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
        this._outputWidth = DB.size.width, this._outputHeight = DB.size.height;
        const QB = this._frameGraph.addRenderPass(this.name);
        if (QB.depthReadOnly = this.depthReadOnly, QB.stencilReadOnly = this.stencilReadOnly, QB.addDependencies(this.sourceTexture), QB.setRenderTarget(this.outputTexture), QB.setRenderTargetDepth(this.depthAttachmentTexture), QB.setExecuteFunc((BB => {
            BB.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && BB.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), OB?.(BB), this.viewport && BB.setViewport(this.viewport), BB.applyFullScreenEffect(this._postProcessDrawWrapper, (() => {
              void 0 !== this.sourceTexture && BB.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), GB?.(BB), this.postProcess.bind()
            }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), BB.restoreDefaultFramebuffer(), BB.popDebugGroup()
          })), !BB) {
          const BB = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
          BB.depthReadOnly = this.depthReadOnly, BB.stencilReadOnly = this.stencilReadOnly, BB.addDependencies(this.sourceTexture), BB.setRenderTarget(this.outputTexture), BB.setRenderTargetDepth(this.depthAttachmentTexture), BB.setExecuteFunc((BB => {
            void 0 !== this.sourceTexture && 0 === this.alphaMode && (this.viewport && BB.setViewport(this.viewport), BB.copyTexture(this.sourceTexture, void 0, void 0 !== this.viewport))
          }))
        }
        return QB
      }
      dispose() {
        this.postProcess.dispose(), super.dispose()
      }
    }
    class UB extends nB {
      constructor(BB, OB, GB) {
        super(BB, OB, GB || new MB(BB, OB.engine))
      }
      getClassName() {
        return "FrameGraphFXAATask"
      }
      record() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          OB = arguments.length > 1 ? arguments[1] : void 0,
          GB = arguments.length > 2 ? arguments[2] : void 0;
        const YB = super.record(BB, OB, GB);
        return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, YB
      }
    }
    var fB = GB(44960);
    class kB extends nB {
      constructor(BB, OB, GB) {
        super(BB, OB, GB || new fB.d(BB, OB.engine))
      }
      getClassName() {
        return "FrameGraphPassTask"
      }
    }
    var dB = GB(41091),
      KB = GB(41190),
      uB = GB(41145),
      mB = GB(41248),
      IB = GB(37894);
    class FB {
      getRenderCamera(BB) {
        if (this._renderCamera) return this._renderCamera;
        {
          let OB;
          return OB = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, BB && OB && OB.isRigCamera ? OB.rigParent : OB
        }
      }
      setRenderCamera(BB) {
        this._renderCamera = BB
      }
      _getSharedGizmoLight() {
        return this._sharedGizmoLight || (this._sharedGizmoLight = new mB.c("shared gizmo light", new JB.r(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = IB.c.Gray()), this._sharedGizmoLight
      }
      static get DefaultUtilityLayer() {
        return null == FB._DefaultUtilityLayer ? FB._CreateDefaultUtilityLayerFromScene(yB.b.LastCreatedScene) : FB._DefaultUtilityLayer
      }
      static _CreateDefaultUtilityLayerFromScene(BB) {
        return FB._DefaultUtilityLayer = new FB(BB), FB._DefaultUtilityLayer.originalScene.lF.addOnce((() => {
          FB._DefaultUtilityLayer = null
        })), FB._DefaultUtilityLayer
      }
      static get DefaultKeepDepthUtilityLayer() {
        return null == FB._DefaultKeepDepthUtilityLayer ? FB._CreateDefaultKeepUtilityLayerFromScene(yB.b.LastCreatedScene) : FB._DefaultKeepDepthUtilityLayer
      }
      static _CreateDefaultKeepUtilityLayerFromScene(BB) {
        return FB._DefaultKeepDepthUtilityLayer = new FB(BB), FB._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, FB._DefaultKeepDepthUtilityLayer.originalScene.lF.addOnce((() => {
          FB._DefaultKeepDepthUtilityLayer = null
        })), FB._DefaultKeepDepthUtilityLayer
      }
      constructor(BB) {
        let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.originalScene = BB, this.handleEvents = OB, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.processAllEvents = !1, this.pickingEnabled = !0, this.onPointerOutObservable = new VB.b, this.utilityLayerScene = new dB.e(BB.Lp(), {
          virtual: !0,
          useFloatingOrigin: BB.floatingOriginMode
        }), this.utilityLayerScene.useRightHandedSystem = BB.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), OB && (this._originalPointerObserver = BB.onPrePointerObservable.add((OB => {
          if (!this.utilityLayerScene.activeCamera) return;
          if (!this.pickingEnabled) return;
          if (!this.processAllEvents && OB.type !== KB.c.POINTERMOVE && OB.type !== KB.c.POINTERUP && OB.type !== KB.c.POINTERDOWN && OB.type !== KB.c.POINTERDOUBLETAP) return;
          this.utilityLayerScene.pointerX = BB.pointerX, this.utilityLayerScene.pointerY = BB.pointerY;
          const GB = OB.event;
          if (BB.isPointerCaptured(GB.pointerId)) return void(this._pointerCaptures[GB.pointerId] = !1);
          const YB = GB => {
              let YB;
              if (OB.nearInteractionPickingInfo) YB = OB.nearInteractionPickingInfo.pickedMesh.JF() == GB ? OB.nearInteractionPickingInfo : new uB.e;
              else if (GB !== this.utilityLayerScene && OB.originalPickingInfo) YB = OB.originalPickingInfo;
              else {
                let DB = null;
                this._renderCamera && (DB = GB._activeCamera, GB._activeCamera = this._renderCamera, OB.ray = null), YB = OB.ray ? GB.pickWithRay(OB.ray) : GB.pl(BB.pointerX, BB.pointerY), DB && (GB._activeCamera = DB)
              }
              return YB
            },
            DB = YB(this.utilityLayerScene);
          if (!OB.ray && DB && (OB.ray = DB.ray), OB.originalPickingInfo?.aimTransform && DB && (DB.aimTransform = OB.originalPickingInfo.aimTransform, DB.gripTransform = OB.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(OB), this.onlyCheckPointerDownEvents && OB.type != KB.c.POINTERDOWN) return OB.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new KB.f(OB.type, OB.event, DB), OB.type), void(OB.type === KB.c.POINTERUP && this._pointerCaptures[GB.pointerId] && (this._pointerCaptures[GB.pointerId] = !1));
          if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) DB && DB.hit && (OB.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new KB.f(OB.type, OB.event, DB), OB.type), OB.skipOnPointerObservable = !0);
          else {
            const GB = YB(BB),
              QB = OB.event;
            GB && DB && (0 === DB.distance && GB.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(GB.pickedMesh) ? (this._notifyObservers(OB, GB, QB), OB.skipOnPointerObservable = !0) : OB.type === KB.c.POINTERDOWN ? (this._pointerCaptures[QB.pointerId] = !0, this._notifyObservers(OB, GB, QB)) : OB.type !== KB.c.POINTERMOVE && OB.type !== KB.c.POINTERUP || (this._lastPointerEvents[QB.pointerId] && (this.onPointerOutObservable.notifyObservers(QB.pointerId), delete this._lastPointerEvents[QB.pointerId]), this._notifyObservers(OB, GB, QB)) : !this._pointerCaptures[QB.pointerId] && (DB.distance < GB.distance || 0 === GB.distance) ? (this._notifyObservers(OB, DB, QB), OB.skipOnPointerObservable || (OB.skipOnPointerObservable = DB.distance > 0)) : !this._pointerCaptures[QB.pointerId] && DB.distance >= GB.distance && (this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(GB.pickedMesh) ? (this._notifyObservers(OB, GB, QB), OB.skipOnPointerObservable = !0) : (OB.type !== KB.c.POINTERMOVE && OB.type !== KB.c.POINTERUP || this._lastPointerEvents[QB.pointerId] && (this.onPointerOutObservable.notifyObservers(QB.pointerId), delete this._lastPointerEvents[QB.pointerId]), this._notifyObservers(OB, DB, QB))), OB.type === KB.c.POINTERUP && this._pointerCaptures[QB.pointerId] && (this._pointerCaptures[QB.pointerId] = !1))
          }
        })), this._originalPointerObserver && BB.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, GB || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((BB => {
          this.shouldRender && BB == this.getRenderCamera() && this.render()
        }))), this._sceneDisposeObserver = this.originalScene.lF.add((() => {
          this.dispose()
        })), this._updateCamera()
      }
      _notifyObservers(BB, OB, GB) {
        BB.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new KB.f(BB.type, BB.event, OB), BB.type), this._lastPointerEvents[GB.pointerId] = !0)
      }
      render() {
        if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
          const BB = this.utilityLayerScene.activeCamera.JF(),
            OB = this.utilityLayerScene.activeCamera;
          OB._scene = this.utilityLayerScene, OB.leftCamera && (OB.leftCamera._scene = this.utilityLayerScene), OB.rightCamera && (OB.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), OB._scene = BB, OB.leftCamera && (OB.leftCamera._scene = BB), OB.rightCamera && (OB.rightCamera._scene = BB)
        }
      }
      dispose() {
        this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.lF.remove(this._sceneDisposeObserver), this._originalPointerObserver && this.originalScene.onPrePointerObservable.remove(this._originalPointerObserver), this.utilityLayerScene.dispose()
      }
      _updateCamera() {
        this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
      }
    }
    FB._DefaultUtilityLayer = null, FB._DefaultKeepDepthUtilityLayer = null;
    const iB = {
      FindMainCamera: function(BB) {
        return BB.findMainCamera()
      },
      FindMainObjectRenderer: function(BB) {
        return BB.findMainObjectRenderer()
      },
      CreateUtilityLayerRenderer: function(BB) {
        let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const GB = BB.eq,
          YB = new FB(GB, OB, !0);
        YB.utilityLayerScene.activeCamera = GB.activeCamera;
        let DB = iB.FindMainCamera(GB.frameGraph);
        !DB && GB.cameras.length > 0 && (DB = GB.cameras[0]), DB && (YB.setRenderCamera(DB), YB.utilityLayerScene.activeCamera = DB);
        const QB = GB.onAfterRenderObservable.add((() => {
          YB.render()
        }));
        return YB.utilityLayerScene.lF.addOnce((() => {
          GB.onAfterRenderObservable.remove(QB)
        })), YB
      }
    };
    let LB = null;

    function gB(BB, OB, GB, YB) {
      let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        QB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        oB = arguments.length > 6 ? arguments[6] : void 0,
        jB = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        yB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
      const {
        height: JB,
        width: MB
      } = hB(BB, OB, GB);
      if (!JB || !MB) return void zB.b.Error("Invalid 'size' parameter !");
      const PB = OB.JF();
      let pB = PB.activeCamera !== OB;
      if (PB.frameGraph) {
        const BB = iB.FindMainObjectRenderer(PB.frameGraph);
        BB && (pB = BB.camera !== OB)
      }
      pB ? wB(BB, OB, GB, (BB => {
        if (QB) {
          const OB = new Blob([BB]);
          lB.j.DownloadBlob(OB), YB && YB("")
        } else YB && YB(BB)
      }), DB, 1, BB.getCreationOptions().antialias, void 0, void 0, void 0, void 0, oB) : BB.onEndFrameObservable.addOnce((() => {
        LB || (LB = document.createElement("canvas")), LB.width = MB, LB.height = JB;
        const OB = LB.getContext("2d"),
          GB = BB.getRenderingCanvas();
        if (!OB || !GB) return void zB.b.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
        const pB = GB.width,
          qB = GB.height,
          ZB = LB.width,
          NB = LB.height,
          RB = ZB / pB,
          WB = NB / qB,
          AB = jB ? Math.max(RB, WB) : Math.min(RB, WB),
          VB = pB * AB,
          SB = qB * AB,
          nB = (ZB - VB) / 2,
          UB = (NB - SB) / 2;
        OB.save(), OB.fillStyle = yB ? PB.clearColor.toHexString() : "rgba(0, 0, 0, 0)", OB.fillRect(0, 0, MB, JB), OB.restore(), OB.drawImage(GB, 0, 0, pB, qB, nB, UB, VB, SB), QB ? (lB.j.EncodeScreenshotCanvasData(LB, void 0, DB, void 0, oB), YB && YB("")) : lB.j.EncodeScreenshotCanvasData(LB, YB, DB, void 0, oB)
      }))
    }
    async function rB(BB, OB, GB) {
      let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        DB = arguments.length > 4 ? arguments[4] : void 0,
        QB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        oB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        jB = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      return await new Promise(((yB, JB) => {
        gB(BB, OB, GB, (BB => {
          "undefined" !== typeof BB ? yB(BB) : JB(new Error("Data is undefined"))
        }), YB, jB, DB, QB, oB)
      }))
    }
    async function XB(BB, OB, GB, YB) {
      let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        QB = arguments.length > 5 ? arguments[5] : void 0,
        oB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return await new Promise((jB => {
        gB(BB, OB, {
          width: GB,
          height: YB
        }, (() => {
          jB()
        }), DB, !0, QB, oB)
      }))
    }

    function wB(BB, OB, QB, oB) {
      let jB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        yB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
        JB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        MB = arguments.length > 7 ? arguments[7] : void 0,
        lB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        NB = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        RB = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
        WB = arguments.length > 11 ? arguments[11] : void 0,
        AB = arguments.length > 12 ? arguments[12] : void 0,
        VB = arguments.length > 13 ? arguments[13] : void 0,
        SB = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
        nB = arguments.length > 15 ? arguments[15] : void 0;
      const UB = OB.JF();
      if (UB.frameGraph) return void cB(UB.frameGraph, OB, QB, jB, yB, JB, MB, WB, VB, !oB).then((BB => {
        oB && oB(BB)
      }));
      const {
        height: fB,
        width: kB,
        finalWidth: dB,
        finalHeight: KB
      } = hB(BB, OB, QB), uB = {
        width: kB,
        height: fB
      };
      if (!fB || !kB) return void zB.b.Error("Invalid 'size' parameter !");
      BB.skipFrameRender = !0;
      const mB = BB.getRenderWidth,
        IB = BB.getRenderHeight;
      BB.getRenderWidth = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && BB._currentRenderTarget ? BB._currentRenderTarget.width : kB
      }, BB.getRenderHeight = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && BB._currentRenderTarget ? BB._currentRenderTarget.height : fB
      }, BB.onResizeObservable.hasObservers() && BB.onResizeObservable.notifyObservers(BB);
      const FB = new DB.d("screenShot", uB, UB, !1, !1, 0, !1, YB.e.BILINEAR_SAMPLINGMODE, void 0, NB, void 0, void 0, void 0, yB);
      FB.renderList = UB.meshes.slice(), FB.samples = yB, FB.renderSprites = lB, FB.activeCamera = OB, FB.forceLayerMaskCheck = RB, AB?.(FB);
      const iB = VB || pB.DumpData,
        LB = () => {
          UB.incrementRenderId(), UB.resetCachedMaterial(), (0, ZB.d)((() => FB.isReadyForRendering() && OB.isReady(!0)), (() => {
            BB.onEndFrameObservable.addOnce((() => {
              dB === kB && KB === fB ? FB.readPixels(void 0, void 0, void 0, !1).then((BB => {
                iB(kB, fB, BB, oB, jB, MB, !0, void 0, WB), FB.dispose()
              })) : (BB.isWebGPU ? GB.e(679).then((() => GB(64046))) : GB.e(680).then((() => GB(64051)))).then((async () => await (0, qB.d)("pass", FB.getInternalTexture(), UB, void 0, void 0, void 0, dB, KB).then((OB => {
                BB._readTexturePixels(OB, dB, KB, -1, 0, null, !0, !1, 0, 0).then((BB => {
                  iB(dB, KB, BB, oB, jB, MB, !0, void 0, WB), OB.dispose()
                }))
              }))))
            })), UB.incrementRenderId(), UB.resetCachedMaterial();
            const YB = UB.activeCamera,
              DB = UB.activeCameras,
              QB = OB.outputRenderTarget,
              yB = UB.spritesEnabled;
            UB.activeCamera = OB, UB.activeCameras = null, OB.outputRenderTarget = FB, UB.spritesEnabled = lB;
            const JB = UB.meshes;
            UB.meshes = FB.renderList || UB.meshes;
            try {
              UB.render()
            } finally {
              UB.activeCamera = YB, UB.activeCameras = DB, OB.outputRenderTarget = QB, UB.spritesEnabled = yB, UB.meshes = JB, BB.getRenderWidth = mB, BB.getRenderHeight = IB, BB.onResizeObservable.hasObservers() && BB.onResizeObservable.notifyObservers(BB), OB.getProjectionMatrix(!0), BB.skipFrameRender = !1
            }
          }), (() => {
            BB.skipFrameRender = !1, BB.getRenderWidth = mB, BB.getRenderHeight = IB, nB?.()
          }), void 0, SB)
        };
      if (JB) {
        const BB = new PB("antialiasing", 1, UB.activeCamera);
        FB.addPostProcess(BB), BB.autoClear = !0, BB.onEffectCreatedObservable.addOnce((BB => {
          BB.isReady() ? LB() : BB.onCompiled = () => {
            LB()
          }
        }))
      } else LB()
    }
    async function EB(BB, OB, GB) {
      let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        QB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        oB = arguments.length > 6 ? arguments[6] : void 0,
        jB = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        yB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        JB = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
        MB = arguments.length > 10 ? arguments[10] : void 0,
        PB = arguments.length > 11 ? arguments[11] : void 0,
        zB = arguments.length > 12 ? arguments[12] : void 0;
      return await new Promise(((lB, pB) => {
        wB(BB, OB, GB, (BB => {
          "undefined" !== typeof BB ? lB(BB) : pB(new Error("Data is undefined"))
        }), YB, DB, QB, oB, jB, yB, JB, MB, PB, zB)
      }))
    }
    async function cB(BB, OB, GB) {
      let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        QB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        oB = arguments.length > 6 ? arguments[6] : void 0,
        jB = arguments.length > 7 ? arguments[7] : void 0,
        yB = arguments.length > 8 ? arguments[8] : void 0,
        JB = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        MB = arguments.length > 10 ? arguments[10] : void 0;
      const PB = BB.engine,
        zB = BB.textureManager,
        {
          height: lB,
          width: qB,
          finalWidth: ZB,
          finalHeight: RB
        } = hB(PB, OB, GB),
        WB = {
          width: qB,
          height: lB
        },
        AB = yB || pB.DumpData,
        VB = BB.tasks,
        SB = VB.length,
        nB = BB.pausedExecution,
        fB = PB.getCaps().parallelShaderCompile;
      zB.setBackBufferTextures(0, 0, {
        size: WB,
        options: {
          createMipMaps: !1,
          samples: DB,
          types: [0],
          formats: [5],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot color"]
        },
        sizeIsPercentage: !1
      }, {
        size: WB,
        options: {
          createMipMaps: !1,
          samples: DB,
          types: [0],
          formats: [PB.isStencilEnable ? 13 : 14],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot depth"]
        },
        sizeIsPercentage: !1
      });
      let dB = NB;
      if (QB) {
        const OB = new UB("fxaa", BB);
        OB.sourceTexture = dB, dB = OB.outputTexture, BB.addTask(OB)
      }
      if (ZB !== qB || RB !== lB) {
        const OB = new kB("pass", BB);
        OB.sourceTexture = dB, OB.targetTexture = BB.textureManager.createRenderTargetTexture("pass_output", {
          size: {
            width: ZB,
            height: RB
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
        }), dB = OB.outputTexture, BB.addTask(OB)
      }
      const KB = iB.FindMainObjectRenderer(BB);
      let uB = null;
      KB && (uB = KB.camera, KB.camera = OB), PB.getCaps().parallelShaderCompile = void 0, await BB.buildAsync();
      const mB = MB ?? (zB.hasHistoryTextures ? 32 : 1);
      for (let pB = 0; pB < mB; ++pB) BB.execute();
      BB.pausedExecution = !0, PB.getCaps().parallelShaderCompile = fB;
      for (let pB = SB; pB < VB.length; ++pB) BB.tasks[pB].dispose();
      BB.tasks.length = SB, KB && uB && (KB.camera = uB);
      const IB = BB.textureManager.getTextureFromHandle(dB);
      return IB.incrementReferences(), zB.resetBackBufferTextures(), await BB.buildAsync(), BB.pausedExecution = nB, new Promise((BB => {
        PB._readTexturePixels(IB, ZB, RB, -1, 0, null, !0, !1, 0, 0).then((async OB => {
          IB.dispose(), AB(ZB, RB, OB, JB ? void 0 : OB => BB(OB), YB, oB, !0, void 0, jB), JB && BB(null)
        }))
      }))
    }

    function hB(BB, OB, GB) {
      let YB = 0,
        DB = 0,
        QB = 0,
        oB = 0;
      if ("object" === typeof GB) {
        const jB = GB.precision ? Math.abs(GB.precision) : 1;
        GB.width && GB.height ? (YB = GB.height * jB, DB = GB.width * jB) : GB.width && !GB.height ? (DB = GB.width * jB, YB = Math.round(DB / BB.getAspectRatio(OB))) : GB.height && !GB.width ? (YB = GB.height * jB, DB = Math.round(YB * BB.getAspectRatio(OB))) : (DB = Math.round(BB.getRenderWidth() * jB), YB = Math.round(DB / BB.getAspectRatio(OB))), GB.finalWidth && GB.finalHeight ? (oB = GB.finalHeight, QB = GB.finalWidth) : GB.finalWidth && !GB.finalHeight ? (QB = GB.finalWidth, oB = Math.round(QB / BB.getAspectRatio(OB))) : GB.finalHeight && !GB.finalWidth ? (oB = GB.finalHeight, QB = Math.round(oB * BB.getAspectRatio(OB))) : (QB = DB, oB = YB)
      } else isNaN(GB) || (YB = GB, DB = GB, QB = GB, oB = GB);
      return DB && (DB = Math.floor(DB)), YB && (YB = Math.floor(YB)), QB && (QB = Math.floor(QB)), oB && (oB = Math.floor(oB)), {
        height: 0 | YB,
        width: 0 | DB,
        finalWidth: 0 | QB,
        finalHeight: 0 | oB
      }
    }
    const aB = {
      CreateScreenshot: gB,
      CreateScreenshotAsync: rB,
      CreateScreenshotWithResizeAsync: XB,
      CreateScreenshotUsingRenderTarget: wB,
      CreateScreenshotUsingRenderTargetAsync: EB,
      CreateScreenshotForFrameGraphAsync: cB
    };
    let eB = !1;

    function TB() {
      if (eB) return;
      eB = !0;
      lB.j.CreateScreenshot = gB, lB.j.CreateScreenshotAsync = rB, lB.j.CreateScreenshotUsingRenderTarget = wB, lB.j.CreateScreenshotUsingRenderTargetAsync = EB
    }
    TB()
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);