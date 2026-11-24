export const id = 243;
export const ids = [243, 244];
export const modules = {
  40339: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => aB,
      f: () => rB
    });
    var QB = zB(40066),
      nB = zB(40068),
      dB = zB(37171),
      IB = zB(37379),
      NB = zB(40344),
      uB = zB(40306),
      UB = zB(37222);
    let aB = (() => {
        var BB;
        let jB, zB, uB = NB.b,
          UB = [],
          aB = [],
          pB = [],
          rB = [];
        return BB = class extends uB {
          constructor(BB, jB, zB, nB) {
            super(BB, zB, nB), this.groundColor = (0, QB.g)(this, UB, new IB.d(0, 0, 0)), this.direction = ((0, QB.g)(this, aB), (0, QB.g)(this, pB, void 0)), (0, QB.g)(this, rB), this.direction = jB || dB.m.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(BB) {
            return this.direction = dB.m.Normalize(BB.subtract(dB.m.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(BB, jB) {
            const zB = dB.m.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", zB.x, zB.y, zB.z, 0, jB), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), jB), this
          }
          transferToNodeMaterialEffect(BB, jB) {
            const zB = dB.m.Normalize(this.direction);
            return BB.setFloat3(jB, zB.x, zB.y, zB.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = dB.c.Identity()), this._worldMatrix
          }
          getTypeID() {
            return NB.b.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(BB, jB) {
            BB["HEMILIGHT" + jB] = !0
          }
        }, (() => {
          const dB = "function" === typeof Symbol && Symbol.metadata ? Object.create(uB[Symbol.metadata] ?? null) : void 0;
          jB = [(0, nB.i)()], zB = [(0, nB.x)()], (0, QB.e)(null, null, jB, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "groundColor" in BB,
              get: BB => BB.groundColor,
              set: (BB, jB) => {
                BB.groundColor = jB
              }
            },
            metadata: dB
          }, UB, aB), (0, QB.e)(null, null, zB, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: BB => "direction" in BB,
              get: BB => BB.direction,
              set: (BB, jB) => {
                BB.direction = jB
              }
            },
            metadata: dB
          }, pB, rB), dB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: dB
          })
        })(), BB
      })(),
      pB = !1;

    function rB() {
      pB || (pB = !0, uB.c.AddNodeConstructor("Light_Type_3", ((BB, jB) => () => new aB(BB, dB.m.Zero(), jB))), (0, UB.d)("BABYLON.HemisphericLight", aB))
    }
  },
  37865: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => nB
    });
    var QB = zB(37869);
    class nB {
      static GetPlanes(BB) {
        const jB = [];
        for (let zB = 0; zB < 6; zB++) jB.push(new QB.c(0, 0, 0, 0));
        return nB.GetPlanesToRef(BB, jB), jB
      }
      static GetNearPlaneToRef(BB, jB) {
        const zB = BB.m;
        jB.normal.x = zB[3] + zB[2], jB.normal.y = zB[7] + zB[6], jB.normal.z = zB[11] + zB[10], jB.d = zB[15] + zB[14], jB.normalize()
      }
      static GetFarPlaneToRef(BB, jB) {
        const zB = BB.m;
        jB.normal.x = zB[3] - zB[2], jB.normal.y = zB[7] - zB[6], jB.normal.z = zB[11] - zB[10], jB.d = zB[15] - zB[14], jB.normalize()
      }
      static GetLeftPlaneToRef(BB, jB) {
        const zB = BB.m;
        jB.normal.x = zB[3] + zB[0], jB.normal.y = zB[7] + zB[4], jB.normal.z = zB[11] + zB[8], jB.d = zB[15] + zB[12], jB.normalize()
      }
      static GetRightPlaneToRef(BB, jB) {
        const zB = BB.m;
        jB.normal.x = zB[3] - zB[0], jB.normal.y = zB[7] - zB[4], jB.normal.z = zB[11] - zB[8], jB.d = zB[15] - zB[12], jB.normalize()
      }
      static GetTopPlaneToRef(BB, jB) {
        const zB = BB.m;
        jB.normal.x = zB[3] - zB[1], jB.normal.y = zB[7] - zB[5], jB.normal.z = zB[11] - zB[9], jB.d = zB[15] - zB[13], jB.normalize()
      }
      static GetBottomPlaneToRef(BB, jB) {
        const zB = BB.m;
        jB.normal.x = zB[3] + zB[1], jB.normal.y = zB[7] + zB[5], jB.normal.z = zB[11] + zB[9], jB.d = zB[15] + zB[13], jB.normalize()
      }
      static GetPlanesToRef(BB, jB) {
        nB.GetNearPlaneToRef(BB, jB[0]), nB.GetFarPlaneToRef(BB, jB[1]), nB.GetLeftPlaneToRef(BB, jB[2]), nB.GetRightPlaneToRef(BB, jB[3]), nB.GetTopPlaneToRef(BB, jB[4]), nB.GetBottomPlaneToRef(BB, jB[5])
      }
      static IsPointInFrustum(BB, jB) {
        for (let zB = 0; zB < 6; zB++)
          if (jB[zB].dotCoordinate(BB) < 0) return !1;
        return !0
      }
    }
  },
  37869: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => nB
    });
    var QB = zB(37171);
    class nB {
      constructor(BB, jB, zB, nB) {
        this.normal = new QB.m(BB, jB, zB), this.d = nB
      }
      nQB() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new nB(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let jB = 0;
        return 0 !== BB && (jB = 1 / BB), this.normal.x *= jB, this.normal.y *= jB, this.normal.z *= jB, this.d *= jB, this
      }
      transform(BB) {
        const jB = nB._TmpMatrix;
        BB.invertToRef(jB);
        const zB = jB.m,
          QB = this.normal.x,
          dB = this.normal.y,
          IB = this.normal.z,
          NB = this.d,
          uB = QB * zB[0] + dB * zB[1] + IB * zB[2] + NB * zB[3],
          UB = QB * zB[4] + dB * zB[5] + IB * zB[6] + NB * zB[7],
          aB = QB * zB[8] + dB * zB[9] + IB * zB[10] + NB * zB[11],
          pB = QB * zB[12] + dB * zB[13] + IB * zB[14] + NB * zB[15];
        return new nB(uB, UB, aB, pB)
      }
      dotCoordinate(BB) {
        return this.normal.x * BB.x + this.normal.y * BB.y + this.normal.z * BB.z + this.d
      }
      copyFromPoints(BB, jB, zB) {
        const QB = jB.x - BB.x,
          nB = jB.y - BB.y,
          dB = jB.z - BB.z,
          IB = zB.x - BB.x,
          NB = zB.y - BB.y,
          uB = zB.z - BB.z,
          UB = nB * uB - dB * NB,
          aB = dB * IB - QB * uB,
          pB = QB * NB - nB * IB,
          rB = Math.sqrt(UB * UB + aB * aB + pB * pB);
        let sB;
        return sB = 0 !== rB ? 1 / rB : 0, this.normal.x = UB * sB, this.normal.y = aB * sB, this.normal.z = pB * sB, this.d = -(this.normal.x * BB.x + this.normal.y * BB.y + this.normal.z * BB.z), this
      }
      isFrontFacingTo(BB, jB) {
        return QB.m.Dot(this.normal, BB) <= jB
      }
      signedDistanceTo(BB) {
        return QB.m.Dot(BB, this.normal) + this.d
      }
      static FromArray(BB) {
        return new nB(BB[0], BB[1], BB[2], BB[3])
      }
      static FromPoints(BB, jB, zB) {
        const QB = new nB(0, 0, 0, 0);
        return QB.copyFromPoints(BB, jB, zB), QB
      }
      static FromPositionAndNormal(BB, jB) {
        const zB = new nB(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(BB, jB, zB)
      }
      static FromPositionAndNormalToRef(BB, jB, zB) {
        return zB.normal.jH(jB), zB.normal.normalize(), zB.d = -BB.dot(zB.normal), zB
      }
      static SignedDistanceToPlaneFromPositionAndNormal(BB, jB, zB) {
        const nB = -(jB.x * BB.x + jB.y * BB.y + jB.z * BB.z);
        return QB.m.Dot(zB, jB) + nB
      }
    }
    nB._TmpMatrix = QB.c.Identity()
  },
  38170: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => QB
    });
    class QB {
      constructor(BB, jB, zB, QB) {
        this.x = BB, this.y = jB, this.width = zB, this.height = QB
      }
      toGlobal(BB, jB) {
        return new QB(this.x * BB, this.y * jB, this.width * BB, this.height * jB)
      }
      toGlobalToRef(BB, jB, zB) {
        return zB.x = this.x * BB, zB.y = this.y * jB, zB.width = this.width * BB, zB.height = this.height * jB, this
      }
      clone() {
        return new QB(this.x, this.y, this.width, this.height)
      }
    }
  },
  38780: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => dB
    });
    var QB = zB(38783);
    const nB = (BB, jB, zB) => BB ? BB.getClassName && "Mesh" === BB.getClassName() ? null : !BB.getClassName || "SubMesh" !== BB.getClassName() && "PhysicsBody" !== BB.getClassName() ? BB.clone ? BB.clone() : Array.isArray(BB) ? BB.slice() : zB && "object" === typeof BB ? {
      ...BB
    } : null : BB.clone(jB) : null;
    class dB {
      static DeepCopy(BB, jB, zB, dB) {
        let IB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const NB = function(BB) {
          const jB = [];
          do {
            const zB = Object.getOwnPropertyNames(BB);
            for (const BB of zB) - 1 === jB.indexOf(BB) && jB.push(BB)
          } while (BB = Object.getPrototypeOf(BB));
          return jB
        }(BB);
        for (const UB of NB) {
          if ("_" === UB[0] && (!dB || -1 === dB.indexOf(UB))) continue;
          if (UB.endsWith("Observable")) continue;
          if (zB && -1 !== zB.indexOf(UB)) continue;
          const NB = BB[UB],
            aB = typeof NB;
          if ("function" !== aB) try {
            if ("object" === aB)
              if (NB instanceof Uint8Array) jB[UB] = Uint8Array.from(NB);
              else if (NB instanceof Array) {
              if (jB[UB] = [], NB.length > 0)
                if ("object" == typeof NB[0])
                  for (let BB = 0; BB < NB.length; BB++) {
                    const zB = nB(NB[BB], jB, IB); - 1 === jB[UB].indexOf(zB) && jB[UB].push(zB)
                  } else jB[UB] = NB.slice(0)
            } else jB[UB] = nB(NB, jB, IB);
            else jB[UB] = NB
          } catch (uB) {
            QB.c.Warn(uB.message)
          }
        }
      }
    }
  },
  37987: (BB, jB, zB) => {
    function QB() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (BB => {
        const jB = 16 * Math.random() | 0;
        return ("x" === BB ? jB : 3 & jB | 8).toString(16)
      }))
    }
    zB.d(jB, {
      d: () => QB
    })
  },
  38783: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => QB
    });
    class QB {
      static _CheckLimit(BB, jB) {
        let zB = QB._LogLimitOutputs[BB];
        return zB ? zB.current++ : (zB = {
          limit: jB,
          current: 1
        }, QB._LogLimitOutputs[BB] = zB), zB.current <= zB.limit
      }
      static _GenerateLimitMessage(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const zB = QB._LogLimitOutputs[BB];
        if (!zB || !QB.MessageLimitReached) return;
        const nB = this._Levels[jB];
        zB.current === zB.limit && QB[nB.name](QB.MessageLimitReached.replace(/%LIMIT%/g, "" + zB.limit).replace(/%TYPE%/g, nB.name ?? ""))
      }
      static _AddLogEntry(BB) {
        QB._LogCache = BB + QB._LogCache, QB.OnNewCacheEntry && QB.OnNewCacheEntry(BB)
      }
      static _FormatMessage(BB) {
        const jB = BB => BB < 10 ? "0" + BB : "" + BB,
          zB = new Date;
        return "[" + jB(zB.getHours()) + ":" + jB(zB.getMinutes()) + ":" + jB(zB.getSeconds()) + "]: " + BB
      }
      static _LogDisabled(BB, jB) {}
      static _LogEnabled() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          jB = arguments.length > 1 ? arguments[1] : void 0,
          zB = arguments.length > 2 ? arguments[2] : void 0;
        const nB = Array.isArray(jB) ? jB[0] : jB;
        if (void 0 !== zB && !QB._CheckLimit(nB, zB)) return;
        const dB = QB._FormatMessage(nB),
          IB = this._Levels[BB],
          NB = Array.isArray(jB) ? jB.slice(1) : [];
        IB.logFunc && IB.logFunc("BJS - " + dB, ...NB);
        const uB = `<div style='color:${IB.color}'>${dB}</div><br>`;
        QB._AddLogEntry(uB), QB._GenerateLimitMessage(nB, BB)
      }
      static get LogCache() {
        return QB._LogCache
      }
      static ClearLogCache() {
        QB._LogCache = "", QB._LogLimitOutputs = {}, QB.errorsCount = 0
      }
      static set LogLevels(BB) {
        QB.Log = QB._LogDisabled, QB.Warn = QB._LogDisabled, QB.Error = QB._LogDisabled;
        const jB = [QB.MessageLogLevel, QB.WarningLogLevel, QB.ErrorLogLevel];
        for (const zB of jB)
          if ((BB & zB) === zB) {
            const BB = this._Levels[zB];
            QB[BB.name] = QB._LogEnabled.bind(QB, zB)
          }
      }
    }
    QB.NoneLogLevel = 0, QB.MessageLogLevel = 1, QB.WarningLogLevel = 2, QB.ErrorLogLevel = 4, QB.AllLogLevel = 7, QB.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", QB._LogCache = "", QB._LogLimitOutputs = {}, QB._Levels = [{}, {
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
    }], QB.errorsCount = 0, QB.Log = QB._LogEnabled.bind(QB, QB.MessageLogLevel), QB.Warn = QB._LogEnabled.bind(QB, QB.WarningLogLevel), QB.Error = QB._LogEnabled.bind(QB, QB.ErrorLogLevel)
  },
  61416: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      CreateScreenshot: () => XB,
      CreateScreenshotAsync: () => ZB,
      CreateScreenshotForFrameGraphAsync: () => WB,
      CreateScreenshotUsingRenderTarget: () => TB,
      CreateScreenshotUsingRenderTargetAsync: () => PB,
      CreateScreenshotWithResizeAsync: () => AB,
      RegisterScreenshotTools: () => xB,
      ScreenshotTools: () => lB
    });
    var QB = zB(40580),
      nB = zB(41904),
      dB = zB(41892),
      IB = zB(40086),
      NB = zB(41894),
      uB = zB(37197),
      UB = zB(37171);
    class aB extends NB.f {
      static _GetDefines(BB) {
        if (!BB) return null;
        return BB.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
      }
      _gatherImports(BB, jB) {
        BB ? (this._webGPUReady = !0, jB.push(Promise.all([zB.e(379).then((() => zB(61658))), zB.e(380).then((() => zB(61663)))]))) : jB.push(Promise.all([zB.e(381).then((() => zB(61669))), zB.e(382).then((() => zB(61677)))]))
      }
      constructor(BB) {
        const jB = {
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: BB,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || uB.c.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          vertexShader: aB.VertexUrl,
          fragmentShader: aB.FragmentUrl,
          uniforms: aB.Uniforms
        };
        super({
          ...jB,
          defines: aB._GetDefines(jB.engine)
        }), this.texelSize = new UB.i(0, 0)
      }
      bind() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.bind(BB), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
      }
    }
    aB.VertexUrl = "fxaa", aB.FragmentUrl = "fxaa", aB.Uniforms = ["texelSize"];
    class pB extends dB.d {
      getClassName() {
        return "FxaaPostProcess"
      }
      constructor(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          nB = arguments.length > 3 ? arguments[3] : void 0,
          dB = arguments.length > 4 ? arguments[4] : void 0,
          IB = arguments.length > 5 ? arguments[5] : void 0,
          NB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const uB = {
          uniforms: aB.Uniforms,
          size: "number" === typeof jB ? jB : void 0,
          camera: zB,
          samplingMode: nB || QB.i.BILINEAR_SAMPLINGMODE,
          engine: dB,
          reusable: IB,
          textureType: NB,
          ...jB
        };
        super(BB, aB.FragmentUrl, {
          effectWrapper: "number" !== typeof jB && jB.effectWrapper ? void 0 : new aB(BB, dB, uB),
          ...uB
        }), this.onApplyObservable.add((BB => {
          this._effectWrapper.texelSize = this.texelSize
        }))
      }
      static _Parse(BB, jB, zB, QB) {
        return IB.b.Parse((() => new pB(BB.name, BB.options, jB, BB.renderTargetSamplingMode, zB.wJ(), BB.reusable)), BB, zB, QB)
      }
    }
    var rB = zB(38783),
      sB = zB(40164),
      JB = zB(41914),
      mB = zB(41900),
      yB = zB(39976);
    const kB = 0;
    class GB {
      constructor(BB, jB, zB) {
        this.name = BB, this._parentTask = jB, this._context = zB, this.disabled = !1
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
    class LB extends GB {
      static IsObjectListPass(BB) {
        return void 0 !== BB.setObjectList
      }
      get objectList() {
        return this._objectList
      }
      setObjectList(BB) {
        this._objectList = BB
      }
      constructor(BB, jB, zB, QB) {
        super(BB, jB, zB), this._engine = QB
      }
      _isValid() {
        const BB = super._isValid();
        return BB || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
      }
    }
    class gB extends GB {
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
      constructor(BB, jB, zB, QB) {
        super(BB, jB, zB), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = QB
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
            for (const jB of BB) this._dependencies.add(jB);
          else this._dependencies.add(BB)
      }
      collectDependencies(BB) {
        const jB = this._dependencies.keys();
        for (let zB = jB.next(); !0 !== zB.done; zB = jB.next()) BB.add(zB.value);
        if (void 0 !== this._renderTarget)
          if (Array.isArray(this._renderTarget))
            for (const zB of this._renderTarget) void 0 !== zB && BB.add(zB);
          else BB.add(this._renderTarget);
        void 0 !== this._renderTargetDepth && BB.add(this._renderTargetDepth)
      }
      setOutputLayerAndFaceIndices(BB) {
        const jB = this.frameGraphRenderTarget.renderTargetWrapper;
        if (jB)
          for (const zB of BB) jB.setLayerAndFaceIndex(zB.targetIndex, zB.layerIndex, zB.faceIndex)
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
    var tB = zB(37202);
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
      constructor(BB, jB) {
        this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new tB.c, this.onBeforeTaskExecute = new tB.c, this.onAfterTaskExecute = new tB.c, this.name = BB, this._frameGraph = jB, this._reset()
      }
      _reset() {
        for (const BB of this._passes) BB._dispose();
        for (const BB of this._passesDisabled) BB._dispose();
        this._passes.length = 0, this._passesDisabled.length = 0
      }
      _addPass(BB, jB) {
        jB ? this._passesDisabled.push(BB) : this._passes.push(BB)
      }
      _checkTask() {
        let BB, jB = null,
          zB = null;
        for (const NB of this._passes) {
          const QB = NB._isValid();
          if (QB) throw new Error(`Pass "${NB.name}" is not valid. ${QB}`);
          if (gB.IsRenderPass(NB)) {
            const BB = Array.isArray(NB.renderTarget) ? NB.renderTarget : [NB.renderTarget];
            jB = [];
            for (const zB of BB) void 0 !== zB && jB.push(this._frameGraph.textureManager.getTextureFromHandle(zB));
            zB = void 0 !== NB.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(NB.renderTargetDepth) : null
          } else LB.IsObjectListPass(NB) && (BB = NB.objectList)
        }
        let QB, nB = null,
          dB = [],
          IB = null;
        for (const NB of this._passesDisabled) {
          const BB = NB._isValid();
          if (BB) throw new Error(`Pass "${NB.name}" is not valid. ${BB}`);
          if (gB.IsRenderPass(NB)) {
            const BB = Array.isArray(NB.renderTarget) ? NB.renderTarget : [NB.renderTarget];
            nB = [];
            for (const jB of BB) void 0 !== jB && nB.push(this._frameGraph.textureManager.getTextureFromHandle(jB));
            dB = BB, IB = void 0 !== NB.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(NB.renderTargetDepth) : null
          } else LB.IsObjectListPass(NB) && (QB = NB.objectList)
        }
        if (this._passesDisabled.length > 0) {
          if (!this._checkSameRenderTarget(jB, nB)) {
            let BB = !0;
            for (const jB of dB)
              if (void 0 !== jB && !this._frameGraph.textureManager.isHistoryTexture(jB)) {
                BB = !1;
                break
              } if (!BB) throw new Error(`The output texture of the task "${this.name}" is different when it is enabled or disabled.`)
          }
          if (zB !== IB && null !== IB) throw new Error(`The output depth texture of the task "${this.name}" is different when it is enabled or disabled.`);
          if (BB !== QB && null !== QB) throw new Error(`The output object list of the task "${this.name}" is different when it is enabled or disabled.`)
        }
      }
      _execute() {
        const BB = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
        this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const jB of BB) jB._execute()
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
      _checkSameRenderTarget(BB, jB) {
        if (null === BB || null === jB) return BB === jB;
        if (BB.length !== jB.length) return !1;
        for (let zB = 0; zB < BB.length; zB++)
          if (BB[zB] !== jB[zB]) return !1;
        return !0
      }
    }
    class MB extends SB {
      get alphaMode() {
        return this.postProcess.alphaMode
      }
      set alphaMode(BB) {
        this.postProcess.alphaMode = BB
      }
      get drawWrapper() {
        return this._postProcessDrawWrapper
      }
      constructor(BB, jB, zB) {
        super(BB, jB), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = zB, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture = this._frameGraph.textureManager.createDanglingHandle(), this.outputDepthAttachmentTexture = this._frameGraph.textureManager.createDanglingHandle()
      }
      isReady() {
        return this.postProcess.isReady()
      }
      getClassName() {
        return "FrameGraphPostProcessTask"
      }
      record() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          jB = arguments.length > 1 ? arguments[1] : void 0,
          zB = arguments.length > 2 ? arguments[2] : void 0;
        if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
        const QB = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
        if (QB && (QB.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, QB), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentTexture, this.depthAttachmentTexture), QB) {
          const BB = this._frameGraph.textureManager.getTextureAbsoluteDimensions(QB);
          this._sourceWidth = BB.width, this._sourceHeight = BB.height
        }
        const nB = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
        this._outputWidth = nB.size.width, this._outputHeight = nB.size.height;
        const dB = this._frameGraph.addRenderPass(this.name);
        if (dB.depthReadOnly = this.depthReadOnly, dB.stencilReadOnly = this.stencilReadOnly, dB.addDependencies(this.sourceTexture), dB.setRenderTarget(this.outputTexture), dB.setRenderTargetDepth(this.depthAttachmentTexture), dB.setExecuteFunc((BB => {
            BB.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && BB.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), jB?.(BB), this.viewport && BB.setViewport(this.viewport), BB.applyFullScreenEffect(this._postProcessDrawWrapper, (() => {
              void 0 !== this.sourceTexture && BB.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), zB?.(BB), this.postProcess.bind()
            }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), BB.restoreDefaultFramebuffer(), BB.popDebugGroup()
          })), !BB) {
          const BB = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
          BB.depthReadOnly = this.depthReadOnly, BB.stencilReadOnly = this.stencilReadOnly, BB.addDependencies(this.sourceTexture), BB.setRenderTarget(this.outputTexture), BB.setRenderTargetDepth(this.depthAttachmentTexture), BB.setExecuteFunc((BB => {
            void 0 !== this.sourceTexture && 0 === this.alphaMode && (this.viewport && BB.setViewport(this.viewport), BB.copyTexture(this.sourceTexture, void 0, void 0 !== this.viewport))
          }))
        }
        return dB
      }
      dispose() {
        this.postProcess.dispose(), super.dispose()
      }
    }
    class EB extends MB {
      constructor(BB, jB, zB) {
        super(BB, jB, zB || new aB(BB, jB.engine))
      }
      getClassName() {
        return "FrameGraphFXAATask"
      }
      record() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          jB = arguments.length > 1 ? arguments[1] : void 0,
          zB = arguments.length > 2 ? arguments[2] : void 0;
        const QB = super.record(BB, jB, zB);
        return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, QB
      }
    }
    var iB = zB(41910);
    class qB extends MB {
      constructor(BB, jB, zB) {
        super(BB, jB, zB || new iB.d(BB, jB.engine))
      }
      getClassName() {
        return "FrameGraphPassTask"
      }
    }
    var fB = zB(40156),
      oB = zB(40255),
      HB = zB(40202),
      DB = zB(40339),
      FB = zB(37379);
    class YB {
      getRenderCamera(BB) {
        if (this._renderCamera) return this._renderCamera;
        {
          let jB;
          return jB = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, BB && jB && jB.isRigCamera ? jB.rigParent : jB
        }
      }
      setRenderCamera(BB) {
        this._renderCamera = BB
      }
      _getSharedGizmoLight() {
        return this._sharedGizmoLight || (this._sharedGizmoLight = new DB.e("shared gizmo light", new UB.m(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = FB.d.Gray()), this._sharedGizmoLight
      }
      static get DefaultUtilityLayer() {
        return null == YB._DefaultUtilityLayer ? YB._CreateDefaultUtilityLayerFromScene(uB.c.LastCreatedScene) : YB._DefaultUtilityLayer
      }
      static _CreateDefaultUtilityLayerFromScene(BB) {
        return YB._DefaultUtilityLayer = new YB(BB), YB._DefaultUtilityLayer.originalScene.pY.addOnce((() => {
          YB._DefaultUtilityLayer = null
        })), YB._DefaultUtilityLayer
      }
      static get DefaultKeepDepthUtilityLayer() {
        return null == YB._DefaultKeepDepthUtilityLayer ? YB._CreateDefaultKeepUtilityLayerFromScene(uB.c.LastCreatedScene) : YB._DefaultKeepDepthUtilityLayer
      }
      static _CreateDefaultKeepUtilityLayerFromScene(BB) {
        return YB._DefaultKeepDepthUtilityLayer = new YB(BB), YB._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, YB._DefaultKeepDepthUtilityLayer.originalScene.pY.addOnce((() => {
          YB._DefaultKeepDepthUtilityLayer = null
        })), YB._DefaultKeepDepthUtilityLayer
      }
      constructor(BB) {
        let jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.originalScene = BB, this.handleEvents = jB, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.processAllEvents = !1, this.pickingEnabled = !0, this.onPointerOutObservable = new tB.c, this.utilityLayerScene = new fB.g(BB.wJ(), {
          virtual: !0,
          useFloatingOrigin: BB.floatingOriginMode
        }), this.utilityLayerScene.useRightHandedSystem = BB.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), jB && (this._originalPointerObserver = BB.onPrePointerObservable.add((jB => {
          if (!this.utilityLayerScene.activeCamera) return;
          if (!this.pickingEnabled) return;
          if (!this.processAllEvents && jB.type !== oB.b.POINTERMOVE && jB.type !== oB.b.POINTERUP && jB.type !== oB.b.POINTERDOWN && jB.type !== oB.b.POINTERDOUBLETAP) return;
          this.utilityLayerScene.pointerX = BB.pointerX, this.utilityLayerScene.pointerY = BB.pointerY;
          const zB = jB.event;
          if (BB.isPointerCaptured(zB.pointerId)) return void(this._pointerCaptures[zB.pointerId] = !1);
          const QB = zB => {
              let QB;
              if (jB.nearInteractionPickingInfo) QB = jB.nearInteractionPickingInfo.pickedMesh.aY() == zB ? jB.nearInteractionPickingInfo : new HB.d;
              else if (zB !== this.utilityLayerScene && jB.originalPickingInfo) QB = jB.originalPickingInfo;
              else {
                let nB = null;
                this._renderCamera && (nB = zB._activeCamera, zB._activeCamera = this._renderCamera, jB.ray = null), QB = jB.ray ? zB.pickWithRay(jB.ray) : zB.zs(BB.pointerX, BB.pointerY), nB && (zB._activeCamera = nB)
              }
              return QB
            },
            nB = QB(this.utilityLayerScene);
          if (!jB.ray && nB && (jB.ray = nB.ray), jB.originalPickingInfo?.aimTransform && nB && (nB.aimTransform = jB.originalPickingInfo.aimTransform, nB.gripTransform = jB.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(jB), this.onlyCheckPointerDownEvents && jB.type != oB.b.POINTERDOWN) return jB.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new oB.e(jB.type, jB.event, nB), jB.type), void(jB.type === oB.b.POINTERUP && this._pointerCaptures[zB.pointerId] && (this._pointerCaptures[zB.pointerId] = !1));
          if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) nB && nB.hit && (jB.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new oB.e(jB.type, jB.event, nB), jB.type), jB.skipOnPointerObservable = !0);
          else {
            const zB = QB(BB),
              dB = jB.event;
            zB && nB && (0 === nB.distance && zB.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(zB.pickedMesh) ? (this._notifyObservers(jB, zB, dB), jB.skipOnPointerObservable = !0) : jB.type === oB.b.POINTERDOWN ? (this._pointerCaptures[dB.pointerId] = !0, this._notifyObservers(jB, zB, dB)) : jB.type !== oB.b.POINTERMOVE && jB.type !== oB.b.POINTERUP || (this._lastPointerEvents[dB.pointerId] && (this.onPointerOutObservable.notifyObservers(dB.pointerId), delete this._lastPointerEvents[dB.pointerId]), this._notifyObservers(jB, zB, dB)) : !this._pointerCaptures[dB.pointerId] && (nB.distance < zB.distance || 0 === zB.distance) ? (this._notifyObservers(jB, nB, dB), jB.skipOnPointerObservable || (jB.skipOnPointerObservable = nB.distance > 0)) : !this._pointerCaptures[dB.pointerId] && nB.distance >= zB.distance && (this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(zB.pickedMesh) ? (this._notifyObservers(jB, zB, dB), jB.skipOnPointerObservable = !0) : (jB.type !== oB.b.POINTERMOVE && jB.type !== oB.b.POINTERUP || this._lastPointerEvents[dB.pointerId] && (this.onPointerOutObservable.notifyObservers(dB.pointerId), delete this._lastPointerEvents[dB.pointerId]), this._notifyObservers(jB, nB, dB))), jB.type === oB.b.POINTERUP && this._pointerCaptures[dB.pointerId] && (this._pointerCaptures[dB.pointerId] = !1))
          }
        })), this._originalPointerObserver && BB.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, zB || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((BB => {
          this.shouldRender && BB == this.getRenderCamera() && this.render()
        }))), this._sceneDisposeObserver = this.originalScene.pY.add((() => {
          this.dispose()
        })), this._updateCamera()
      }
      _notifyObservers(BB, jB, zB) {
        BB.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new oB.e(BB.type, BB.event, jB), BB.type), this._lastPointerEvents[zB.pointerId] = !0)
      }
      render() {
        if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
          const BB = this.utilityLayerScene.activeCamera.aY(),
            jB = this.utilityLayerScene.activeCamera;
          jB._scene = this.utilityLayerScene, jB.leftCamera && (jB.leftCamera._scene = this.utilityLayerScene), jB.rightCamera && (jB.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), jB._scene = BB, jB.leftCamera && (jB.leftCamera._scene = BB), jB.rightCamera && (jB.rightCamera._scene = BB)
        }
      }
      dispose() {
        this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.pY.remove(this._sceneDisposeObserver), this._originalPointerObserver && this.originalScene.onPrePointerObservable.remove(this._originalPointerObserver), this.utilityLayerScene.dispose()
      }
      _updateCamera() {
        this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
      }
    }
    YB._DefaultUtilityLayer = null, YB._DefaultKeepDepthUtilityLayer = null;
    const VB = {
      FindMainCamera: function(BB) {
        return BB.findMainCamera()
      },
      FindMainObjectRenderer: function(BB) {
        return BB.findMainObjectRenderer()
      },
      CreateUtilityLayerRenderer: function(BB) {
        let jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const zB = BB.ny,
          QB = new YB(zB, jB, !0);
        QB.utilityLayerScene.activeCamera = zB.activeCamera;
        let nB = VB.FindMainCamera(zB.frameGraph);
        !nB && zB.cameras.length > 0 && (nB = zB.cameras[0]), nB && (QB.setRenderCamera(nB), QB.utilityLayerScene.activeCamera = nB);
        const dB = zB.onAfterRenderObservable.add((() => {
          QB.render()
        }));
        return QB.utilityLayerScene.pY.addOnce((() => {
          zB.onAfterRenderObservable.remove(dB)
        })), QB
      }
    };
    let hB = null;

    function XB(BB, jB, zB, QB) {
      let nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        dB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        IB = arguments.length > 6 ? arguments[6] : void 0,
        NB = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        uB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
      const {
        height: UB,
        width: aB
      } = eB(BB, jB, zB);
      if (!UB || !aB) return void rB.c.Error("Invalid 'size' parameter !");
      const pB = jB.aY();
      let JB = pB.activeCamera !== jB;
      if (pB.frameGraph) {
        const BB = VB.FindMainObjectRenderer(pB.frameGraph);
        BB && (JB = BB.camera !== jB)
      }
      JB ? TB(BB, jB, zB, (BB => {
        if (dB) {
          const jB = new Blob([BB]);
          sB.i.DownloadBlob(jB), QB && QB("")
        } else QB && QB(BB)
      }), nB, 1, BB.getCreationOptions().antialias, void 0, void 0, void 0, void 0, IB) : BB.onEndFrameObservable.addOnce((() => {
        hB || (hB = document.createElement("canvas")), hB.width = aB, hB.height = UB;
        const jB = hB.getContext("2d"),
          zB = BB.getRenderingCanvas();
        if (!jB || !zB) return void rB.c.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
        const JB = zB.width,
          mB = zB.height,
          yB = hB.width,
          kB = hB.height,
          GB = yB / JB,
          LB = kB / mB,
          gB = NB ? Math.max(GB, LB) : Math.min(GB, LB),
          tB = JB * gB,
          SB = mB * gB,
          MB = (yB - tB) / 2,
          EB = (kB - SB) / 2;
        jB.save(), jB.fillStyle = uB ? pB.clearColor.toHexString() : "rgba(0, 0, 0, 0)", jB.fillRect(0, 0, aB, UB), jB.restore(), jB.drawImage(zB, 0, 0, JB, mB, MB, EB, tB, SB), dB ? (sB.i.EncodeScreenshotCanvasData(hB, void 0, nB, void 0, IB), QB && QB("")) : sB.i.EncodeScreenshotCanvasData(hB, QB, nB, void 0, IB)
      }))
    }
    async function ZB(BB, jB, zB) {
      let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        nB = arguments.length > 4 ? arguments[4] : void 0,
        dB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        IB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        NB = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      return await new Promise(((uB, UB) => {
        XB(BB, jB, zB, (BB => {
          "undefined" !== typeof BB ? uB(BB) : UB(new Error("Data is undefined"))
        }), QB, NB, nB, dB, IB)
      }))
    }
    async function AB(BB, jB, zB, QB) {
      let nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        dB = arguments.length > 5 ? arguments[5] : void 0,
        IB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return await new Promise((NB => {
        XB(BB, jB, {
          width: zB,
          height: QB
        }, (() => {
          NB()
        }), nB, !0, dB, IB)
      }))
    }

    function TB(BB, jB, dB, IB) {
      let NB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        uB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
        UB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        aB = arguments.length > 7 ? arguments[7] : void 0,
        sB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        kB = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        GB = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
        LB = arguments.length > 11 ? arguments[11] : void 0,
        gB = arguments.length > 12 ? arguments[12] : void 0,
        tB = arguments.length > 13 ? arguments[13] : void 0,
        SB = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
        MB = arguments.length > 15 ? arguments[15] : void 0;
      const EB = jB.aY();
      if (EB.frameGraph) return void WB(EB.frameGraph, jB, dB, NB, uB, UB, aB, LB, tB, !IB).then((BB => {
        IB && IB(BB)
      }));
      const {
        height: iB,
        width: qB,
        finalWidth: fB,
        finalHeight: oB
      } = eB(BB, jB, dB), HB = {
        width: qB,
        height: iB
      };
      if (!iB || !qB) return void rB.c.Error("Invalid 'size' parameter !");
      BB.skipFrameRender = !0;
      const DB = BB.getRenderWidth,
        FB = BB.getRenderHeight;
      BB.getRenderWidth = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && BB._currentRenderTarget ? BB._currentRenderTarget.width : qB
      }, BB.getRenderHeight = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && BB._currentRenderTarget ? BB._currentRenderTarget.height : iB
      }, BB.onResizeObservable.hasObservers() && BB.onResizeObservable.notifyObservers(BB);
      const YB = new nB.c("screenShot", HB, EB, !1, !1, 0, !1, QB.i.BILINEAR_SAMPLINGMODE, void 0, kB, void 0, void 0, void 0, uB);
      YB.renderList = EB.meshes.slice(), YB.samples = uB, YB.renderSprites = sB, YB.activeCamera = jB, YB.forceLayerMaskCheck = GB, gB?.(YB);
      const VB = tB || JB.DumpData,
        hB = () => {
          EB.incrementRenderId(), EB.resetCachedMaterial(), (0, yB.e)((() => YB.isReadyForRendering() && jB.isReady(!0)), (() => {
            BB.onEndFrameObservable.addOnce((() => {
              fB === qB && oB === iB ? YB.readPixels(void 0, void 0, void 0, !1).then((BB => {
                VB(qB, iB, BB, IB, NB, aB, !0, void 0, LB), YB.dispose()
              })) : (BB.isWebGPU ? zB.e(375).then((() => zB(61599))) : zB.e(376).then((() => zB(61603)))).then((async () => await (0, mB.e)("pass", YB.getInternalTexture(), EB, void 0, void 0, void 0, fB, oB).then((jB => {
                BB._readTexturePixels(jB, fB, oB, -1, 0, null, !0, !1, 0, 0).then((BB => {
                  VB(fB, oB, BB, IB, NB, aB, !0, void 0, LB), jB.dispose()
                }))
              }))))
            })), EB.incrementRenderId(), EB.resetCachedMaterial();
            const QB = EB.activeCamera,
              nB = EB.activeCameras,
              dB = jB.outputRenderTarget,
              uB = EB.spritesEnabled;
            EB.activeCamera = jB, EB.activeCameras = null, jB.outputRenderTarget = YB, EB.spritesEnabled = sB;
            const UB = EB.meshes;
            EB.meshes = YB.renderList || EB.meshes;
            try {
              EB.render()
            } finally {
              EB.activeCamera = QB, EB.activeCameras = nB, jB.outputRenderTarget = dB, EB.spritesEnabled = uB, EB.meshes = UB, BB.getRenderWidth = DB, BB.getRenderHeight = FB, BB.onResizeObservable.hasObservers() && BB.onResizeObservable.notifyObservers(BB), jB.getProjectionMatrix(!0), BB.skipFrameRender = !1
            }
          }), (() => {
            BB.skipFrameRender = !1, BB.getRenderWidth = DB, BB.getRenderHeight = FB, MB?.()
          }), void 0, SB)
        };
      if (UB) {
        const BB = new pB("antialiasing", 1, EB.activeCamera);
        YB.addPostProcess(BB), BB.autoClear = !0, BB.onEffectCreatedObservable.addOnce((BB => {
          BB.isReady() ? hB() : BB.onCompiled = () => {
            hB()
          }
        }))
      } else hB()
    }
    async function PB(BB, jB, zB) {
      let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        dB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        IB = arguments.length > 6 ? arguments[6] : void 0,
        NB = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        uB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        UB = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
        aB = arguments.length > 10 ? arguments[10] : void 0,
        pB = arguments.length > 11 ? arguments[11] : void 0,
        rB = arguments.length > 12 ? arguments[12] : void 0;
      return await new Promise(((sB, JB) => {
        TB(BB, jB, zB, (BB => {
          "undefined" !== typeof BB ? sB(BB) : JB(new Error("Data is undefined"))
        }), QB, nB, dB, IB, NB, uB, UB, aB, pB, rB)
      }))
    }
    async function WB(BB, jB, zB) {
      let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        dB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        IB = arguments.length > 6 ? arguments[6] : void 0,
        NB = arguments.length > 7 ? arguments[7] : void 0,
        uB = arguments.length > 8 ? arguments[8] : void 0,
        UB = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        aB = arguments.length > 10 ? arguments[10] : void 0;
      const pB = BB.engine,
        rB = BB.textureManager,
        {
          height: sB,
          width: mB,
          finalWidth: yB,
          finalHeight: GB
        } = eB(pB, jB, zB),
        LB = {
          width: mB,
          height: sB
        },
        gB = uB || JB.DumpData,
        tB = BB.tasks,
        SB = tB.length,
        MB = BB.pausedExecution,
        iB = pB.getCaps().parallelShaderCompile;
      rB.setBackBufferTextures(0, 0, {
        size: LB,
        options: {
          createMipMaps: !1,
          samples: nB,
          types: [0],
          formats: [5],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot color"]
        },
        sizeIsPercentage: !1
      }, {
        size: LB,
        options: {
          createMipMaps: !1,
          samples: nB,
          types: [0],
          formats: [pB.isStencilEnable ? 13 : 14],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot depth"]
        },
        sizeIsPercentage: !1
      });
      let fB = kB;
      if (dB) {
        const jB = new EB("fxaa", BB);
        jB.sourceTexture = fB, fB = jB.outputTexture, BB.addTask(jB)
      }
      if (yB !== mB || GB !== sB) {
        const jB = new qB("pass", BB);
        jB.sourceTexture = fB, jB.targetTexture = BB.textureManager.createRenderTargetTexture("pass_output", {
          size: {
            width: yB,
            height: GB
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
        }), fB = jB.outputTexture, BB.addTask(jB)
      }
      const oB = VB.FindMainObjectRenderer(BB);
      let HB = null;
      oB && (HB = oB.camera, oB.camera = jB), pB.getCaps().parallelShaderCompile = void 0, await BB.buildAsync();
      const DB = aB ?? (rB.hasHistoryTextures ? 32 : 1);
      for (let JB = 0; JB < DB; ++JB) BB.execute();
      BB.pausedExecution = !0, pB.getCaps().parallelShaderCompile = iB;
      for (let JB = SB; JB < tB.length; ++JB) BB.tasks[JB].dispose();
      BB.tasks.length = SB, oB && HB && (oB.camera = HB);
      const FB = BB.textureManager.getTextureFromHandle(fB);
      return FB.incrementReferences(), rB.resetBackBufferTextures(), await BB.buildAsync(), BB.pausedExecution = MB, new Promise((BB => {
        pB._readTexturePixels(FB, yB, GB, -1, 0, null, !0, !1, 0, 0).then((async jB => {
          FB.dispose(), gB(yB, GB, jB, UB ? void 0 : jB => BB(jB), QB, IB, !0, void 0, NB), UB && BB(null)
        }))
      }))
    }

    function eB(BB, jB, zB) {
      let QB = 0,
        nB = 0,
        dB = 0,
        IB = 0;
      if ("object" === typeof zB) {
        const NB = zB.precision ? Math.abs(zB.precision) : 1;
        zB.width && zB.height ? (QB = zB.height * NB, nB = zB.width * NB) : zB.width && !zB.height ? (nB = zB.width * NB, QB = Math.round(nB / BB.getAspectRatio(jB))) : zB.height && !zB.width ? (QB = zB.height * NB, nB = Math.round(QB * BB.getAspectRatio(jB))) : (nB = Math.round(BB.getRenderWidth() * NB), QB = Math.round(nB / BB.getAspectRatio(jB))), zB.finalWidth && zB.finalHeight ? (IB = zB.finalHeight, dB = zB.finalWidth) : zB.finalWidth && !zB.finalHeight ? (dB = zB.finalWidth, IB = Math.round(dB / BB.getAspectRatio(jB))) : zB.finalHeight && !zB.finalWidth ? (IB = zB.finalHeight, dB = Math.round(IB * BB.getAspectRatio(jB))) : (dB = nB, IB = QB)
      } else isNaN(zB) || (QB = zB, nB = zB, dB = zB, IB = zB);
      return nB && (nB = Math.floor(nB)), QB && (QB = Math.floor(QB)), dB && (dB = Math.floor(dB)), IB && (IB = Math.floor(IB)), {
        height: 0 | QB,
        width: 0 | nB,
        finalWidth: 0 | dB,
        finalHeight: 0 | IB
      }
    }
    const lB = {
      CreateScreenshot: XB,
      CreateScreenshotAsync: ZB,
      CreateScreenshotWithResizeAsync: AB,
      CreateScreenshotUsingRenderTarget: TB,
      CreateScreenshotUsingRenderTargetAsync: PB,
      CreateScreenshotForFrameGraphAsync: WB
    };
    let wB = !1;

    function xB() {
      if (wB) return;
      wB = !0;
      sB.i.CreateScreenshot = XB, sB.i.CreateScreenshotAsync = ZB, sB.i.CreateScreenshotUsingRenderTarget = TB, sB.i.CreateScreenshotUsingRenderTargetAsync = PB
    }
    xB()
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);