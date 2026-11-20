export const id = 231;
export const ids = [231, 232];
export const modules = {
  39700: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => fb,
      d: () => Xb
    });
    var kb = sb(39414),
      Wb = sb(39418),
      ab = sb(36656),
      Tb = sb(36830),
      Ub = sb(39706),
      Ib = sb(39667),
      Hb = sb(36698);
    let fb = (() => {
        var bb;
        let cb, sb, Ib = Ub.b,
          Hb = [],
          fb = [],
          Mb = [],
          Xb = [];
        return bb = class extends Ib {
          constructor(bb, cb, sb, Wb) {
            super(bb, sb, Wb), this.groundColor = (0, kb.m)(this, Hb, new Tb.e(0, 0, 0)), this.direction = ((0, kb.m)(this, fb), (0, kb.m)(this, Mb, void 0)), (0, kb.m)(this, Xb), this.direction = cb || ab.p.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(bb) {
            return this.direction = ab.p.Normalize(bb.subtract(ab.p.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(bb, cb) {
            const sb = ab.p.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", sb.x, sb.y, sb.z, 0, cb), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), cb), this
          }
          transferToNodeMaterialEffect(bb, cb) {
            const sb = ab.p.Normalize(this.direction);
            return bb.setFloat3(cb, sb.x, sb.y, sb.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = ab.e.Identity()), this._worldMatrix
          }
          getTypeID() {
            return Ub.b.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(bb, cb) {
            bb["HEMILIGHT" + cb] = !0
          }
        }, (() => {
          const ab = "function" === typeof Symbol && Symbol.metadata ? Object.create(Ib[Symbol.metadata] ?? null) : void 0;
          cb = [(0, Wb.o)()], sb = [(0, Wb.C)()], (0, kb.j)(null, null, cb, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "groundColor" in bb,
              get: bb => bb.groundColor,
              set: (bb, cb) => {
                bb.groundColor = cb
              }
            },
            metadata: ab
          }, Hb, fb), (0, kb.j)(null, null, sb, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: bb => "direction" in bb,
              get: bb => bb.direction,
              set: (bb, cb) => {
                bb.direction = cb
              }
            },
            metadata: ab
          }, Mb, Xb), ab && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ab
          })
        })(), bb
      })(),
      Mb = !1;

    function Xb() {
      Mb || (Mb = !0, Ib.c.AddNodeConstructor("Light_Type_3", ((bb, cb) => () => new fb(bb, ab.p.Zero(), cb))), (0, Hb.h)("BABYLON.HemisphericLight", fb))
    }
  },
  37365: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Wb
    });
    var kb = sb(37368);
    class Wb {
      static GetPlanes(bb) {
        const cb = [];
        for (let sb = 0; sb < 6; sb++) cb.push(new kb.c(0, 0, 0, 0));
        return Wb.GetPlanesToRef(bb, cb), cb
      }
      static GetNearPlaneToRef(bb, cb) {
        const sb = bb.m;
        cb.normal.x = sb[3] + sb[2], cb.normal.y = sb[7] + sb[6], cb.normal.z = sb[11] + sb[10], cb.d = sb[15] + sb[14], cb.normalize()
      }
      static GetFarPlaneToRef(bb, cb) {
        const sb = bb.m;
        cb.normal.x = sb[3] - sb[2], cb.normal.y = sb[7] - sb[6], cb.normal.z = sb[11] - sb[10], cb.d = sb[15] - sb[14], cb.normalize()
      }
      static GetLeftPlaneToRef(bb, cb) {
        const sb = bb.m;
        cb.normal.x = sb[3] + sb[0], cb.normal.y = sb[7] + sb[4], cb.normal.z = sb[11] + sb[8], cb.d = sb[15] + sb[12], cb.normalize()
      }
      static GetRightPlaneToRef(bb, cb) {
        const sb = bb.m;
        cb.normal.x = sb[3] - sb[0], cb.normal.y = sb[7] - sb[4], cb.normal.z = sb[11] - sb[8], cb.d = sb[15] - sb[12], cb.normalize()
      }
      static GetTopPlaneToRef(bb, cb) {
        const sb = bb.m;
        cb.normal.x = sb[3] - sb[1], cb.normal.y = sb[7] - sb[5], cb.normal.z = sb[11] - sb[9], cb.d = sb[15] - sb[13], cb.normalize()
      }
      static GetBottomPlaneToRef(bb, cb) {
        const sb = bb.m;
        cb.normal.x = sb[3] + sb[1], cb.normal.y = sb[7] + sb[5], cb.normal.z = sb[11] + sb[9], cb.d = sb[15] + sb[13], cb.normalize()
      }
      static GetPlanesToRef(bb, cb) {
        Wb.GetNearPlaneToRef(bb, cb[0]), Wb.GetFarPlaneToRef(bb, cb[1]), Wb.GetLeftPlaneToRef(bb, cb[2]), Wb.GetRightPlaneToRef(bb, cb[3]), Wb.GetTopPlaneToRef(bb, cb[4]), Wb.GetBottomPlaneToRef(bb, cb[5])
      }
      static IsPointInFrustum(bb, cb) {
        for (let sb = 0; sb < 6; sb++)
          if (cb[sb].dotCoordinate(bb) < 0) return !1;
        return !0
      }
    }
  },
  37368: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Wb
    });
    var kb = sb(36656);
    class Wb {
      constructor(bb, cb, sb, Wb) {
        this.normal = new kb.p(bb, cb, sb), this.d = Wb
      }
      Osb() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Wb(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let bb = this.normal.getHashCode();
        return bb = 397 * bb ^ this.d, bb
      }
      normalize() {
        const bb = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let cb = 0;
        return 0 !== bb && (cb = 1 / bb), this.normal.x *= cb, this.normal.y *= cb, this.normal.z *= cb, this.d *= cb, this
      }
      transform(bb) {
        const cb = Wb._TmpMatrix;
        bb.invertToRef(cb);
        const sb = cb.m,
          kb = this.normal.x,
          ab = this.normal.y,
          Tb = this.normal.z,
          Ub = this.d,
          Ib = kb * sb[0] + ab * sb[1] + Tb * sb[2] + Ub * sb[3],
          Hb = kb * sb[4] + ab * sb[5] + Tb * sb[6] + Ub * sb[7],
          fb = kb * sb[8] + ab * sb[9] + Tb * sb[10] + Ub * sb[11],
          Mb = kb * sb[12] + ab * sb[13] + Tb * sb[14] + Ub * sb[15];
        return new Wb(Ib, Hb, fb, Mb)
      }
      dotCoordinate(bb) {
        return this.normal.x * bb.x + this.normal.y * bb.y + this.normal.z * bb.z + this.d
      }
      copyFromPoints(bb, cb, sb) {
        const kb = cb.x - bb.x,
          Wb = cb.y - bb.y,
          ab = cb.z - bb.z,
          Tb = sb.x - bb.x,
          Ub = sb.y - bb.y,
          Ib = sb.z - bb.z,
          Hb = Wb * Ib - ab * Ub,
          fb = ab * Tb - kb * Ib,
          Mb = kb * Ub - Wb * Tb,
          Xb = Math.sqrt(Hb * Hb + fb * fb + Mb * Mb);
        let nb;
        return nb = 0 !== Xb ? 1 / Xb : 0, this.normal.x = Hb * nb, this.normal.y = fb * nb, this.normal.z = Mb * nb, this.d = -(this.normal.x * bb.x + this.normal.y * bb.y + this.normal.z * bb.z), this
      }
      isFrontFacingTo(bb, cb) {
        return kb.p.Dot(this.normal, bb) <= cb
      }
      signedDistanceTo(bb) {
        return kb.p.Dot(bb, this.normal) + this.d
      }
      static FromArray(bb) {
        return new Wb(bb[0], bb[1], bb[2], bb[3])
      }
      static FromPoints(bb, cb, sb) {
        const kb = new Wb(0, 0, 0, 0);
        return kb.copyFromPoints(bb, cb, sb), kb
      }
      static FromPositionAndNormal(bb, cb) {
        const sb = new Wb(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(bb, cb, sb)
      }
      static FromPositionAndNormalToRef(bb, cb, sb) {
        return sb.normal.ssb(cb), sb.normal.normalize(), sb.d = -bb.dot(sb.normal), sb
      }
      static SignedDistanceToPlaneFromPositionAndNormal(bb, cb, sb) {
        const Wb = -(cb.x * bb.x + cb.y * bb.y + cb.z * bb.z);
        return kb.p.Dot(sb, cb) + Wb
      }
    }
    Wb._TmpMatrix = kb.e.Identity()
  },
  37700: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => kb
    });
    class kb {
      constructor(bb, cb, sb, kb) {
        this.x = bb, this.y = cb, this.width = sb, this.height = kb
      }
      toGlobal(bb, cb) {
        return new kb(this.x * bb, this.y * cb, this.width * bb, this.height * cb)
      }
      toGlobalToRef(bb, cb, sb) {
        return sb.x = this.x * bb, sb.y = this.y * cb, sb.width = this.width * bb, sb.height = this.height * cb, this
      }
      clone() {
        return new kb(this.x, this.y, this.width, this.height)
      }
    }
  },
  38279: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => ab
    });
    var kb = sb(38284);
    const Wb = (bb, cb, sb) => bb ? bb.getClassName && "Mesh" === bb.getClassName() ? null : !bb.getClassName || "SubMesh" !== bb.getClassName() && "PhysicsBody" !== bb.getClassName() ? bb.clone ? bb.clone() : Array.isArray(bb) ? bb.slice() : sb && "object" === typeof bb ? {
      ...bb
    } : null : bb.clone(cb) : null;
    class ab {
      static DeepCopy(bb, cb, sb, ab) {
        let Tb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Ub = function(bb) {
          const cb = [];
          do {
            const sb = Object.getOwnPropertyNames(bb);
            for (const bb of sb) - 1 === cb.indexOf(bb) && cb.push(bb)
          } while (bb = Object.getPrototypeOf(bb));
          return cb
        }(bb);
        for (const Hb of Ub) {
          if ("_" === Hb[0] && (!ab || -1 === ab.indexOf(Hb))) continue;
          if (Hb.endsWith("Observable")) continue;
          if (sb && -1 !== sb.indexOf(Hb)) continue;
          const Ub = bb[Hb],
            fb = typeof Ub;
          if ("function" !== fb) try {
            if ("object" === fb)
              if (Ub instanceof Uint8Array) cb[Hb] = Uint8Array.from(Ub);
              else if (Ub instanceof Array) {
              if (cb[Hb] = [], Ub.length > 0)
                if ("object" == typeof Ub[0])
                  for (let bb = 0; bb < Ub.length; bb++) {
                    const sb = Wb(Ub[bb], cb, Tb); - 1 === cb[Hb].indexOf(sb) && cb[Hb].push(sb)
                  } else cb[Hb] = Ub.slice(0)
            } else cb[Hb] = Wb(Ub, cb, Tb);
            else cb[Hb] = Ub
          } catch (Ib) {
            kb.c.Warn(Ib.message)
          }
        }
      }
    }
  },
  37501: (bb, cb, sb) => {
    function kb() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (bb => {
        const cb = 16 * Math.random() | 0;
        return ("x" === bb ? cb : 3 & cb | 8).toString(16)
      }))
    }
    sb.d(cb, {
      b: () => kb
    })
  },
  38284: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => kb
    });
    class kb {
      static _CheckLimit(bb, cb) {
        let sb = kb._LogLimitOutputs[bb];
        return sb ? sb.current++ : (sb = {
          limit: cb,
          current: 1
        }, kb._LogLimitOutputs[bb] = sb), sb.current <= sb.limit
      }
      static _GenerateLimitMessage(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const sb = kb._LogLimitOutputs[bb];
        if (!sb || !kb.MessageLimitReached) return;
        const Wb = this._Levels[cb];
        sb.current === sb.limit && kb[Wb.name](kb.MessageLimitReached.replace(/%LIMIT%/g, "" + sb.limit).replace(/%TYPE%/g, Wb.name ?? ""))
      }
      static _AddLogEntry(bb) {
        kb._LogCache = bb + kb._LogCache, kb.OnNewCacheEntry && kb.OnNewCacheEntry(bb)
      }
      static _FormatMessage(bb) {
        const cb = bb => bb < 10 ? "0" + bb : "" + bb,
          sb = new Date;
        return "[" + cb(sb.getHours()) + ":" + cb(sb.getMinutes()) + ":" + cb(sb.getSeconds()) + "]: " + bb
      }
      static _LogDisabled(bb, cb) {}
      static _LogEnabled() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          cb = arguments.length > 1 ? arguments[1] : void 0,
          sb = arguments.length > 2 ? arguments[2] : void 0;
        const Wb = Array.isArray(cb) ? cb[0] : cb;
        if (void 0 !== sb && !kb._CheckLimit(Wb, sb)) return;
        const ab = kb._FormatMessage(Wb),
          Tb = this._Levels[bb],
          Ub = Array.isArray(cb) ? cb.slice(1) : [];
        Tb.logFunc && Tb.logFunc("BJS - " + ab, ...Ub);
        const Ib = `<div style='color:${Tb.color}'>${ab}</div><br>`;
        kb._AddLogEntry(Ib), kb._GenerateLimitMessage(Wb, bb)
      }
      static get LogCache() {
        return kb._LogCache
      }
      static ClearLogCache() {
        kb._LogCache = "", kb._LogLimitOutputs = {}, kb.errorsCount = 0
      }
      static set LogLevels(bb) {
        kb.Log = kb._LogDisabled, kb.Warn = kb._LogDisabled, kb.Error = kb._LogDisabled;
        const cb = [kb.MessageLogLevel, kb.WarningLogLevel, kb.ErrorLogLevel];
        for (const sb of cb)
          if ((bb & sb) === sb) {
            const bb = this._Levels[sb];
            kb[bb.name] = kb._LogEnabled.bind(kb, sb)
          }
      }
    }
    kb.NoneLogLevel = 0, kb.MessageLogLevel = 1, kb.WarningLogLevel = 2, kb.ErrorLogLevel = 4, kb.AllLogLevel = 7, kb.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", kb._LogCache = "", kb._LogLimitOutputs = {}, kb._Levels = [{}, {
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
    }], kb.errorsCount = 0, kb.Log = kb._LogEnabled.bind(kb, kb.MessageLogLevel), kb.Warn = kb._LogEnabled.bind(kb, kb.WarningLogLevel), kb.Error = kb._LogEnabled.bind(kb, kb.ErrorLogLevel)
  },
  60567: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      CreateScreenshot: () => Gb,
      CreateScreenshotAsync: () => Kb,
      CreateScreenshotForFrameGraphAsync: () => db,
      CreateScreenshotUsingRenderTarget: () => zb,
      CreateScreenshotUsingRenderTargetAsync: () => qb,
      CreateScreenshotWithResizeAsync: () => Zb,
      RegisterScreenshotTools: () => ob,
      ScreenshotTools: () => wb
    });
    var kb = sb(39895),
      Wb = sb(41218),
      ab = sb(41190),
      Tb = sb(39441),
      Ub = sb(41194),
      Ib = sb(36677),
      Hb = sb(36656);
    class fb extends Ub.e {
      static _GetDefines(bb) {
        if (!bb) return null;
        return bb.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
      }
      _gatherImports(bb, cb) {
        bb ? (this._webGPUReady = !0, cb.push(Promise.all([sb.e(367).then((() => sb(60923))), sb.e(368).then((() => sb(60927)))]))) : cb.push(Promise.all([sb.e(369).then((() => sb(60931))), sb.e(370).then((() => sb(60933)))]))
      }
      constructor(bb) {
        const cb = {
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: bb,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || Ib.d.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          vertexShader: fb.VertexUrl,
          fragmentShader: fb.FragmentUrl,
          uniforms: fb.Uniforms
        };
        super({
          ...cb,
          defines: fb._GetDefines(cb.engine)
        }), this.texelSize = new Hb.n(0, 0)
      }
      bind() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.bind(bb), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
      }
    }
    fb.VertexUrl = "fxaa", fb.FragmentUrl = "fxaa", fb.Uniforms = ["texelSize"];
    class Mb extends ab.c {
      getClassName() {
        return "FxaaPostProcess"
      }
      constructor(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Wb = arguments.length > 3 ? arguments[3] : void 0,
          ab = arguments.length > 4 ? arguments[4] : void 0,
          Tb = arguments.length > 5 ? arguments[5] : void 0,
          Ub = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const Ib = {
          uniforms: fb.Uniforms,
          size: "number" === typeof cb ? cb : void 0,
          camera: sb,
          samplingMode: Wb || kb.e.BILINEAR_SAMPLINGMODE,
          engine: ab,
          reusable: Tb,
          textureType: Ub,
          ...cb
        };
        super(bb, fb.FragmentUrl, {
          effectWrapper: "number" !== typeof cb && cb.effectWrapper ? void 0 : new fb(bb, ab, Ib),
          ...Ib
        }), this.onApplyObservable.add((bb => {
          this._effectWrapper.texelSize = this.texelSize
        }))
      }
      static _Parse(bb, cb, sb, kb) {
        return Tb.d.Parse((() => new Mb(bb.name, bb.options, cb, bb.renderTargetSamplingMode, sb.Sm(), bb.reusable)), bb, sb, kb)
      }
    }
    var Xb = sb(38284),
      nb = sb(39531),
      mb = sb(41232),
      lb = sb(41209),
      Qb = sb(39307);
    const eb = 0;
    class Cb {
      constructor(bb, cb, sb) {
        this.name = bb, this._parentTask = cb, this._context = sb, this.disabled = !1
      }
      setInitializeFunc(bb) {
        this._initFunc = bb
      }
      setExecuteFunc(bb) {
        this._executeFunc = bb
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
    class Nb extends Cb {
      static IsObjectListPass(bb) {
        return void 0 !== bb.setObjectList
      }
      get objectList() {
        return this._objectList
      }
      setObjectList(bb) {
        this._objectList = bb
      }
      constructor(bb, cb, sb, kb) {
        super(bb, cb, sb), this._engine = kb
      }
      _isValid() {
        const bb = super._isValid();
        return bb || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
      }
    }
    class Vb extends Cb {
      static IsRenderPass(bb) {
        return void 0 !== bb.setRenderTarget
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
      constructor(bb, cb, sb, kb) {
        super(bb, cb, sb), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = kb
      }
      setRenderTarget(bb) {
        this._renderTarget = bb
      }
      setRenderTargetDepth(bb) {
        this._renderTargetDepth = bb
      }
      addDependencies(bb) {
        if (void 0 !== bb)
          if (Array.isArray(bb))
            for (const cb of bb) this._dependencies.add(cb);
          else this._dependencies.add(bb)
      }
      collectDependencies(bb) {
        const cb = this._dependencies.keys();
        for (let sb = cb.next(); !0 !== sb.done; sb = cb.next()) bb.add(sb.value);
        if (void 0 !== this._renderTarget)
          if (Array.isArray(this._renderTarget))
            for (const sb of this._renderTarget) void 0 !== sb && bb.add(sb);
          else bb.add(this._renderTarget);
        void 0 !== this._renderTargetDepth && bb.add(this._renderTargetDepth)
      }
      setOutputLayerAndFaceIndices(bb) {
        const cb = this.frameGraphRenderTarget.renderTargetWrapper;
        if (cb)
          for (const sb of bb) cb.setLayerAndFaceIndex(sb.targetIndex, sb.layerIndex, sb.faceIndex)
      }
      _initialize() {
        this._frameGraphRenderTarget = this._context.createRenderTarget(this.name, this._renderTarget, this._renderTargetDepth, this.depthReadOnly, this.stencilReadOnly), super._initialize()
      }
      _execute() {
        this._context.bindRenderTarget(this._frameGraphRenderTarget), super._execute(), this._context.restoreDefaultFramebuffer()
      }
      _isValid() {
        const bb = super._isValid();
        return bb || (void 0 !== this._renderTarget || void 0 !== this.renderTargetDepth ? null : "Render target and render target depth cannot both be undefined.")
      }
      _dispose() {
        this._frameGraphRenderTarget?.dispose()
      }
    }
    var Lb = sb(36683);
    class ub {
      get name() {
        return this._name
      }
      set name(bb) {
        this._name = bb
      }
      get disabled() {
        return this._disabled
      }
      set disabled(bb) {
        this._disabled = bb
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
      constructor(bb, cb) {
        this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new Lb.c, this.onBeforeTaskExecute = new Lb.c, this.onAfterTaskExecute = new Lb.c, this.name = bb, this._frameGraph = cb, this._reset()
      }
      _reset() {
        for (const bb of this._passes) bb._dispose();
        for (const bb of this._passesDisabled) bb._dispose();
        this._passes.length = 0, this._passesDisabled.length = 0
      }
      _addPass(bb, cb) {
        cb ? this._passesDisabled.push(bb) : this._passes.push(bb)
      }
      _checkTask() {
        let bb, cb = null,
          sb = null;
        for (const Ub of this._passes) {
          const kb = Ub._isValid();
          if (kb) throw new Error(`Pass "${Ub.name}" is not valid. ${kb}`);
          if (Vb.IsRenderPass(Ub)) {
            const bb = Array.isArray(Ub.renderTarget) ? Ub.renderTarget : [Ub.renderTarget];
            cb = [];
            for (const sb of bb) void 0 !== sb && cb.push(this._frameGraph.textureManager.getTextureFromHandle(sb));
            sb = void 0 !== Ub.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(Ub.renderTargetDepth) : null
          } else Nb.IsObjectListPass(Ub) && (bb = Ub.objectList)
        }
        let kb, Wb = null,
          ab = [],
          Tb = null;
        for (const Ub of this._passesDisabled) {
          const bb = Ub._isValid();
          if (bb) throw new Error(`Pass "${Ub.name}" is not valid. ${bb}`);
          if (Vb.IsRenderPass(Ub)) {
            const bb = Array.isArray(Ub.renderTarget) ? Ub.renderTarget : [Ub.renderTarget];
            Wb = [];
            for (const cb of bb) void 0 !== cb && Wb.push(this._frameGraph.textureManager.getTextureFromHandle(cb));
            ab = bb, Tb = void 0 !== Ub.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(Ub.renderTargetDepth) : null
          } else Nb.IsObjectListPass(Ub) && (kb = Ub.objectList)
        }
        if (this._passesDisabled.length > 0) {
          if (!this._checkSameRenderTarget(cb, Wb)) {
            let bb = !0;
            for (const cb of ab)
              if (void 0 !== cb && !this._frameGraph.textureManager.isHistoryTexture(cb)) {
                bb = !1;
                break
              } if (!bb) throw new Error(`The output texture of the task "${this.name}" is different when it is enabled or disabled.`)
          }
          if (sb !== Tb && null !== Tb) throw new Error(`The output depth texture of the task "${this.name}" is different when it is enabled or disabled.`);
          if (bb !== kb && null !== kb) throw new Error(`The output object list of the task "${this.name}" is different when it is enabled or disabled.`)
        }
      }
      _execute() {
        const bb = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
        this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const cb of bb) cb._execute()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
        this.onAfterTaskExecute.notifyObservers(this)
      }
      _initializePasses() {
        this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const bb of this._passes) bb._initialize();
          for (const bb of this._passesDisabled) bb._initialize()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
      }
      _checkSameRenderTarget(bb, cb) {
        if (null === bb || null === cb) return bb === cb;
        if (bb.length !== cb.length) return !1;
        for (let sb = 0; sb < bb.length; sb++)
          if (bb[sb] !== cb[sb]) return !1;
        return !0
      }
    }
    class Yb extends ub {
      get alphaMode() {
        return this.postProcess.alphaMode
      }
      set alphaMode(bb) {
        this.postProcess.alphaMode = bb
      }
      get drawWrapper() {
        return this._postProcessDrawWrapper
      }
      constructor(bb, cb, sb) {
        super(bb, cb), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = sb, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture = this._frameGraph.textureManager.createDanglingHandle(), this.outputDepthAttachmentTexture = this._frameGraph.textureManager.createDanglingHandle()
      }
      isReady() {
        return this.postProcess.isReady()
      }
      getClassName() {
        return "FrameGraphPostProcessTask"
      }
      record() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          cb = arguments.length > 1 ? arguments[1] : void 0,
          sb = arguments.length > 2 ? arguments[2] : void 0;
        if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
        const kb = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
        if (kb && (kb.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, kb), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentTexture, this.depthAttachmentTexture), kb) {
          const bb = this._frameGraph.textureManager.getTextureAbsoluteDimensions(kb);
          this._sourceWidth = bb.width, this._sourceHeight = bb.height
        }
        const Wb = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
        this._outputWidth = Wb.size.width, this._outputHeight = Wb.size.height;
        const ab = this._frameGraph.addRenderPass(this.name);
        if (ab.depthReadOnly = this.depthReadOnly, ab.stencilReadOnly = this.stencilReadOnly, ab.addDependencies(this.sourceTexture), ab.setRenderTarget(this.outputTexture), ab.setRenderTargetDepth(this.depthAttachmentTexture), ab.setExecuteFunc((bb => {
            bb.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && bb.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), cb?.(bb), this.viewport && bb.setViewport(this.viewport), bb.applyFullScreenEffect(this._postProcessDrawWrapper, (() => {
              void 0 !== this.sourceTexture && bb.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), sb?.(bb), this.postProcess.bind()
            }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), bb.restoreDefaultFramebuffer(), bb.popDebugGroup()
          })), !bb) {
          const bb = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
          bb.depthReadOnly = this.depthReadOnly, bb.stencilReadOnly = this.stencilReadOnly, bb.addDependencies(this.sourceTexture), bb.setRenderTarget(this.outputTexture), bb.setRenderTargetDepth(this.depthAttachmentTexture), bb.setExecuteFunc((bb => {
            void 0 !== this.sourceTexture && 0 === this.alphaMode && (this.viewport && bb.setViewport(this.viewport), bb.copyTexture(this.sourceTexture, void 0, void 0 !== this.viewport))
          }))
        }
        return ab
      }
      dispose() {
        this.postProcess.dispose(), super.dispose()
      }
    }
    class hb extends Yb {
      constructor(bb, cb, sb) {
        super(bb, cb, sb || new fb(bb, cb.engine))
      }
      getClassName() {
        return "FrameGraphFXAATask"
      }
      record() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          cb = arguments.length > 1 ? arguments[1] : void 0,
          sb = arguments.length > 2 ? arguments[2] : void 0;
        const kb = super.record(bb, cb, sb);
        return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, kb
      }
    }
    var Jb = sb(41227);
    class gb extends Yb {
      constructor(bb, cb, sb) {
        super(bb, cb, sb || new Jb.d(bb, cb.engine))
      }
      getClassName() {
        return "FrameGraphPassTask"
      }
    }
    var Bb = sb(39524),
      tb = sb(39613),
      yb = sb(39568),
      Pb = sb(39700),
      Db = sb(36830);
    class Eb {
      getRenderCamera(bb) {
        if (this._renderCamera) return this._renderCamera;
        {
          let cb;
          return cb = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, bb && cb && cb.isRigCamera ? cb.rigParent : cb
        }
      }
      setRenderCamera(bb) {
        this._renderCamera = bb
      }
      _getSharedGizmoLight() {
        return this._sharedGizmoLight || (this._sharedGizmoLight = new Pb.b("shared gizmo light", new Hb.p(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = Db.e.Gray()), this._sharedGizmoLight
      }
      static get DefaultUtilityLayer() {
        return null == Eb._DefaultUtilityLayer ? Eb._CreateDefaultUtilityLayerFromScene(Ib.d.LastCreatedScene) : Eb._DefaultUtilityLayer
      }
      static _CreateDefaultUtilityLayerFromScene(bb) {
        return Eb._DefaultUtilityLayer = new Eb(bb), Eb._DefaultUtilityLayer.originalScene.ZY.addOnce((() => {
          Eb._DefaultUtilityLayer = null
        })), Eb._DefaultUtilityLayer
      }
      static get DefaultKeepDepthUtilityLayer() {
        return null == Eb._DefaultKeepDepthUtilityLayer ? Eb._CreateDefaultKeepUtilityLayerFromScene(Ib.d.LastCreatedScene) : Eb._DefaultKeepDepthUtilityLayer
      }
      static _CreateDefaultKeepUtilityLayerFromScene(bb) {
        return Eb._DefaultKeepDepthUtilityLayer = new Eb(bb), Eb._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, Eb._DefaultKeepDepthUtilityLayer.originalScene.ZY.addOnce((() => {
          Eb._DefaultKeepDepthUtilityLayer = null
        })), Eb._DefaultKeepDepthUtilityLayer
      }
      constructor(bb) {
        let cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.originalScene = bb, this.handleEvents = cb, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.processAllEvents = !1, this.pickingEnabled = !0, this.onPointerOutObservable = new Lb.c, this.utilityLayerScene = new Bb.c(bb.Sm(), {
          virtual: !0,
          useFloatingOrigin: bb.floatingOriginMode
        }), this.utilityLayerScene.useRightHandedSystem = bb.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), cb && (this._originalPointerObserver = bb.onPrePointerObservable.add((cb => {
          if (!this.utilityLayerScene.activeCamera) return;
          if (!this.pickingEnabled) return;
          if (!this.processAllEvents && cb.type !== tb.b.POINTERMOVE && cb.type !== tb.b.POINTERUP && cb.type !== tb.b.POINTERDOWN && cb.type !== tb.b.POINTERDOUBLETAP) return;
          this.utilityLayerScene.pointerX = bb.pointerX, this.utilityLayerScene.pointerY = bb.pointerY;
          const sb = cb.event;
          if (bb.isPointerCaptured(sb.pointerId)) return void(this._pointerCaptures[sb.pointerId] = !1);
          const kb = sb => {
              let kb;
              if (cb.nearInteractionPickingInfo) kb = cb.nearInteractionPickingInfo.pickedMesh.EY() == sb ? cb.nearInteractionPickingInfo : new yb.e;
              else if (sb !== this.utilityLayerScene && cb.originalPickingInfo) kb = cb.originalPickingInfo;
              else {
                let Wb = null;
                this._renderCamera && (Wb = sb._activeCamera, sb._activeCamera = this._renderCamera, cb.ray = null), kb = cb.ray ? sb.pickWithRay(cb.ray) : sb.Wn(bb.pointerX, bb.pointerY), Wb && (sb._activeCamera = Wb)
              }
              return kb
            },
            Wb = kb(this.utilityLayerScene);
          if (!cb.ray && Wb && (cb.ray = Wb.ray), cb.originalPickingInfo?.aimTransform && Wb && (Wb.aimTransform = cb.originalPickingInfo.aimTransform, Wb.gripTransform = cb.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(cb), this.onlyCheckPointerDownEvents && cb.type != tb.b.POINTERDOWN) return cb.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new tb.g(cb.type, cb.event, Wb), cb.type), void(cb.type === tb.b.POINTERUP && this._pointerCaptures[sb.pointerId] && (this._pointerCaptures[sb.pointerId] = !1));
          if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) Wb && Wb.hit && (cb.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new tb.g(cb.type, cb.event, Wb), cb.type), cb.skipOnPointerObservable = !0);
          else {
            const sb = kb(bb),
              ab = cb.event;
            sb && Wb && (0 === Wb.distance && sb.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(sb.pickedMesh) ? (this._notifyObservers(cb, sb, ab), cb.skipOnPointerObservable = !0) : cb.type === tb.b.POINTERDOWN ? (this._pointerCaptures[ab.pointerId] = !0, this._notifyObservers(cb, sb, ab)) : cb.type !== tb.b.POINTERMOVE && cb.type !== tb.b.POINTERUP || (this._lastPointerEvents[ab.pointerId] && (this.onPointerOutObservable.notifyObservers(ab.pointerId), delete this._lastPointerEvents[ab.pointerId]), this._notifyObservers(cb, sb, ab)) : !this._pointerCaptures[ab.pointerId] && (Wb.distance < sb.distance || 0 === sb.distance) ? (this._notifyObservers(cb, Wb, ab), cb.skipOnPointerObservable || (cb.skipOnPointerObservable = Wb.distance > 0)) : !this._pointerCaptures[ab.pointerId] && Wb.distance >= sb.distance && (this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(sb.pickedMesh) ? (this._notifyObservers(cb, sb, ab), cb.skipOnPointerObservable = !0) : (cb.type !== tb.b.POINTERMOVE && cb.type !== tb.b.POINTERUP || this._lastPointerEvents[ab.pointerId] && (this.onPointerOutObservable.notifyObservers(ab.pointerId), delete this._lastPointerEvents[ab.pointerId]), this._notifyObservers(cb, Wb, ab))), cb.type === tb.b.POINTERUP && this._pointerCaptures[ab.pointerId] && (this._pointerCaptures[ab.pointerId] = !1))
          }
        })), this._originalPointerObserver && bb.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, sb || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((bb => {
          this.shouldRender && bb == this.getRenderCamera() && this.render()
        }))), this._sceneDisposeObserver = this.originalScene.ZY.add((() => {
          this.dispose()
        })), this._updateCamera()
      }
      _notifyObservers(bb, cb, sb) {
        bb.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new tb.g(bb.type, bb.event, cb), bb.type), this._lastPointerEvents[sb.pointerId] = !0)
      }
      render() {
        if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
          const bb = this.utilityLayerScene.activeCamera.EY(),
            cb = this.utilityLayerScene.activeCamera;
          cb._scene = this.utilityLayerScene, cb.leftCamera && (cb.leftCamera._scene = this.utilityLayerScene), cb.rightCamera && (cb.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), cb._scene = bb, cb.leftCamera && (cb.leftCamera._scene = bb), cb.rightCamera && (cb.rightCamera._scene = bb)
        }
      }
      dispose() {
        this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.ZY.remove(this._sceneDisposeObserver), this._originalPointerObserver && this.originalScene.onPrePointerObservable.remove(this._originalPointerObserver), this.utilityLayerScene.dispose()
      }
      _updateCamera() {
        this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
      }
    }
    Eb._DefaultUtilityLayer = null, Eb._DefaultKeepDepthUtilityLayer = null;
    const ib = {
      FindMainCamera: function(bb) {
        return bb.findMainCamera()
      },
      FindMainObjectRenderer: function(bb) {
        return bb.findMainObjectRenderer()
      },
      CreateUtilityLayerRenderer: function(bb) {
        let cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const sb = bb.aQ,
          kb = new Eb(sb, cb, !0);
        kb.utilityLayerScene.activeCamera = sb.activeCamera;
        let Wb = ib.FindMainCamera(sb.frameGraph);
        !Wb && sb.cameras.length > 0 && (Wb = sb.cameras[0]), Wb && (kb.setRenderCamera(Wb), kb.utilityLayerScene.activeCamera = Wb);
        const ab = sb.onAfterRenderObservable.add((() => {
          kb.render()
        }));
        return kb.utilityLayerScene.ZY.addOnce((() => {
          sb.onAfterRenderObservable.remove(ab)
        })), kb
      }
    };
    let Ob = null;

    function Gb(bb, cb, sb, kb) {
      let Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        ab = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Tb = arguments.length > 6 ? arguments[6] : void 0,
        Ub = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Ib = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
      const {
        height: Hb,
        width: fb
      } = Ab(bb, cb, sb);
      if (!Hb || !fb) return void Xb.c.Error("Invalid 'size' parameter !");
      const Mb = cb.EY();
      let mb = Mb.activeCamera !== cb;
      if (Mb.frameGraph) {
        const bb = ib.FindMainObjectRenderer(Mb.frameGraph);
        bb && (mb = bb.camera !== cb)
      }
      mb ? zb(bb, cb, sb, (bb => {
        if (ab) {
          const cb = new Blob([bb]);
          nb.g.DownloadBlob(cb), kb && kb("")
        } else kb && kb(bb)
      }), Wb, 1, bb.getCreationOptions().antialias, void 0, void 0, void 0, void 0, Tb) : bb.onEndFrameObservable.addOnce((() => {
        Ob || (Ob = document.createElement("canvas")), Ob.width = fb, Ob.height = Hb;
        const cb = Ob.getContext("2d"),
          sb = bb.getRenderingCanvas();
        if (!cb || !sb) return void Xb.c.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
        const mb = sb.width,
          lb = sb.height,
          Qb = Ob.width,
          eb = Ob.height,
          Cb = Qb / mb,
          Nb = eb / lb,
          Vb = Ub ? Math.max(Cb, Nb) : Math.min(Cb, Nb),
          Lb = mb * Vb,
          ub = lb * Vb,
          Yb = (Qb - Lb) / 2,
          hb = (eb - ub) / 2;
        cb.save(), cb.fillStyle = Ib ? Mb.clearColor.toHexString() : "rgba(0, 0, 0, 0)", cb.fillRect(0, 0, fb, Hb), cb.restore(), cb.drawImage(sb, 0, 0, mb, lb, Yb, hb, Lb, ub), ab ? (nb.g.EncodeScreenshotCanvasData(Ob, void 0, Wb, void 0, Tb), kb && kb("")) : nb.g.EncodeScreenshotCanvasData(Ob, kb, Wb, void 0, Tb)
      }))
    }
    async function Kb(bb, cb, sb) {
      let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Wb = arguments.length > 4 ? arguments[4] : void 0,
        ab = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Tb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Ub = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      return await new Promise(((Ib, Hb) => {
        Gb(bb, cb, sb, (bb => {
          "undefined" !== typeof bb ? Ib(bb) : Hb(new Error("Data is undefined"))
        }), kb, Ub, Wb, ab, Tb)
      }))
    }
    async function Zb(bb, cb, sb, kb) {
      let Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        ab = arguments.length > 5 ? arguments[5] : void 0,
        Tb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return await new Promise((Ub => {
        Gb(bb, cb, {
          width: sb,
          height: kb
        }, (() => {
          Ub()
        }), Wb, !0, ab, Tb)
      }))
    }

    function zb(bb, cb, ab, Tb) {
      let Ub = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        Ib = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
        Hb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        fb = arguments.length > 7 ? arguments[7] : void 0,
        nb = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        eb = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        Cb = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
        Nb = arguments.length > 11 ? arguments[11] : void 0,
        Vb = arguments.length > 12 ? arguments[12] : void 0,
        Lb = arguments.length > 13 ? arguments[13] : void 0,
        ub = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
        Yb = arguments.length > 15 ? arguments[15] : void 0;
      const hb = cb.EY();
      if (hb.frameGraph) return void db(hb.frameGraph, cb, ab, Ub, Ib, Hb, fb, Nb, Lb, !Tb).then((bb => {
        Tb && Tb(bb)
      }));
      const {
        height: Jb,
        width: gb,
        finalWidth: Bb,
        finalHeight: tb
      } = Ab(bb, cb, ab), yb = {
        width: gb,
        height: Jb
      };
      if (!Jb || !gb) return void Xb.c.Error("Invalid 'size' parameter !");
      bb.skipFrameRender = !0;
      const Pb = bb.getRenderWidth,
        Db = bb.getRenderHeight;
      bb.getRenderWidth = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && bb._currentRenderTarget ? bb._currentRenderTarget.width : gb
      }, bb.getRenderHeight = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && bb._currentRenderTarget ? bb._currentRenderTarget.height : Jb
      }, bb.onResizeObservable.hasObservers() && bb.onResizeObservable.notifyObservers(bb);
      const Eb = new Wb.d("screenShot", yb, hb, !1, !1, 0, !1, kb.e.BILINEAR_SAMPLINGMODE, void 0, eb, void 0, void 0, void 0, Ib);
      Eb.renderList = hb.meshes.slice(), Eb.samples = Ib, Eb.renderSprites = nb, Eb.activeCamera = cb, Eb.forceLayerMaskCheck = Cb, Vb?.(Eb);
      const ib = Lb || mb.DumpData,
        Ob = () => {
          hb.incrementRenderId(), hb.resetCachedMaterial(), (0, Qb.d)((() => Eb.isReadyForRendering() && cb.isReady(!0)), (() => {
            bb.onEndFrameObservable.addOnce((() => {
              Bb === gb && tb === Jb ? Eb.readPixels(void 0, void 0, void 0, !1).then((bb => {
                ib(gb, Jb, bb, Tb, Ub, fb, !0, void 0, Nb), Eb.dispose()
              })) : (bb.isWebGPU ? sb.e(363).then((() => sb(60875))) : sb.e(364).then((() => sb(60880)))).then((async () => await (0, lb.b)("pass", Eb.getInternalTexture(), hb, void 0, void 0, void 0, Bb, tb).then((cb => {
                bb._readTexturePixels(cb, Bb, tb, -1, 0, null, !0, !1, 0, 0).then((bb => {
                  ib(Bb, tb, bb, Tb, Ub, fb, !0, void 0, Nb), cb.dispose()
                }))
              }))))
            })), hb.incrementRenderId(), hb.resetCachedMaterial();
            const kb = hb.activeCamera,
              Wb = hb.activeCameras,
              ab = cb.outputRenderTarget,
              Ib = hb.spritesEnabled;
            hb.activeCamera = cb, hb.activeCameras = null, cb.outputRenderTarget = Eb, hb.spritesEnabled = nb;
            const Hb = hb.meshes;
            hb.meshes = Eb.renderList || hb.meshes;
            try {
              hb.render()
            } finally {
              hb.activeCamera = kb, hb.activeCameras = Wb, cb.outputRenderTarget = ab, hb.spritesEnabled = Ib, hb.meshes = Hb, bb.getRenderWidth = Pb, bb.getRenderHeight = Db, bb.onResizeObservable.hasObservers() && bb.onResizeObservable.notifyObservers(bb), cb.getProjectionMatrix(!0), bb.skipFrameRender = !1
            }
          }), (() => {
            bb.skipFrameRender = !1, bb.getRenderWidth = Pb, bb.getRenderHeight = Db, Yb?.()
          }), void 0, ub)
        };
      if (Hb) {
        const bb = new Mb("antialiasing", 1, hb.activeCamera);
        Eb.addPostProcess(bb), bb.autoClear = !0, bb.onEffectCreatedObservable.addOnce((bb => {
          bb.isReady() ? Ob() : bb.onCompiled = () => {
            Ob()
          }
        }))
      } else Ob()
    }
    async function qb(bb, cb, sb) {
      let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        ab = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Tb = arguments.length > 6 ? arguments[6] : void 0,
        Ub = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Ib = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Hb = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
        fb = arguments.length > 10 ? arguments[10] : void 0,
        Mb = arguments.length > 11 ? arguments[11] : void 0,
        Xb = arguments.length > 12 ? arguments[12] : void 0;
      return await new Promise(((nb, mb) => {
        zb(bb, cb, sb, (bb => {
          "undefined" !== typeof bb ? nb(bb) : mb(new Error("Data is undefined"))
        }), kb, Wb, ab, Tb, Ub, Ib, Hb, fb, Mb, Xb)
      }))
    }
    async function db(bb, cb, sb) {
      let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        ab = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Tb = arguments.length > 6 ? arguments[6] : void 0,
        Ub = arguments.length > 7 ? arguments[7] : void 0,
        Ib = arguments.length > 8 ? arguments[8] : void 0,
        Hb = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        fb = arguments.length > 10 ? arguments[10] : void 0;
      const Mb = bb.engine,
        Xb = bb.textureManager,
        {
          height: nb,
          width: lb,
          finalWidth: Qb,
          finalHeight: Cb
        } = Ab(Mb, cb, sb),
        Nb = {
          width: lb,
          height: nb
        },
        Vb = Ib || mb.DumpData,
        Lb = bb.tasks,
        ub = Lb.length,
        Yb = bb.pausedExecution,
        Jb = Mb.getCaps().parallelShaderCompile;
      Xb.setBackBufferTextures(0, 0, {
        size: Nb,
        options: {
          createMipMaps: !1,
          samples: Wb,
          types: [0],
          formats: [5],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot color"]
        },
        sizeIsPercentage: !1
      }, {
        size: Nb,
        options: {
          createMipMaps: !1,
          samples: Wb,
          types: [0],
          formats: [Mb.isStencilEnable ? 13 : 14],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot depth"]
        },
        sizeIsPercentage: !1
      });
      let Bb = eb;
      if (ab) {
        const cb = new hb("fxaa", bb);
        cb.sourceTexture = Bb, Bb = cb.outputTexture, bb.addTask(cb)
      }
      if (Qb !== lb || Cb !== nb) {
        const cb = new gb("pass", bb);
        cb.sourceTexture = Bb, cb.targetTexture = bb.textureManager.createRenderTargetTexture("pass_output", {
          size: {
            width: Qb,
            height: Cb
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
        }), Bb = cb.outputTexture, bb.addTask(cb)
      }
      const tb = ib.FindMainObjectRenderer(bb);
      let yb = null;
      tb && (yb = tb.camera, tb.camera = cb), Mb.getCaps().parallelShaderCompile = void 0, await bb.buildAsync();
      const Pb = fb ?? (Xb.hasHistoryTextures ? 32 : 1);
      for (let mb = 0; mb < Pb; ++mb) bb.execute();
      bb.pausedExecution = !0, Mb.getCaps().parallelShaderCompile = Jb;
      for (let mb = ub; mb < Lb.length; ++mb) bb.tasks[mb].dispose();
      bb.tasks.length = ub, tb && yb && (tb.camera = yb);
      const Db = bb.textureManager.getTextureFromHandle(Bb);
      return Db.incrementReferences(), Xb.resetBackBufferTextures(), await bb.buildAsync(), bb.pausedExecution = Yb, new Promise((bb => {
        Mb._readTexturePixels(Db, Qb, Cb, -1, 0, null, !0, !1, 0, 0).then((async cb => {
          Db.dispose(), Vb(Qb, Cb, cb, Hb ? void 0 : cb => bb(cb), kb, Tb, !0, void 0, Ub), Hb && bb(null)
        }))
      }))
    }

    function Ab(bb, cb, sb) {
      let kb = 0,
        Wb = 0,
        ab = 0,
        Tb = 0;
      if ("object" === typeof sb) {
        const Ub = sb.precision ? Math.abs(sb.precision) : 1;
        sb.width && sb.height ? (kb = sb.height * Ub, Wb = sb.width * Ub) : sb.width && !sb.height ? (Wb = sb.width * Ub, kb = Math.round(Wb / bb.getAspectRatio(cb))) : sb.height && !sb.width ? (kb = sb.height * Ub, Wb = Math.round(kb * bb.getAspectRatio(cb))) : (Wb = Math.round(bb.getRenderWidth() * Ub), kb = Math.round(Wb / bb.getAspectRatio(cb))), sb.finalWidth && sb.finalHeight ? (Tb = sb.finalHeight, ab = sb.finalWidth) : sb.finalWidth && !sb.finalHeight ? (ab = sb.finalWidth, Tb = Math.round(ab / bb.getAspectRatio(cb))) : sb.finalHeight && !sb.finalWidth ? (Tb = sb.finalHeight, ab = Math.round(Tb * bb.getAspectRatio(cb))) : (ab = Wb, Tb = kb)
      } else isNaN(sb) || (kb = sb, Wb = sb, ab = sb, Tb = sb);
      return Wb && (Wb = Math.floor(Wb)), kb && (kb = Math.floor(kb)), ab && (ab = Math.floor(ab)), Tb && (Tb = Math.floor(Tb)), {
        height: 0 | kb,
        width: 0 | Wb,
        finalWidth: 0 | ab,
        finalHeight: 0 | Tb
      }
    }
    const wb = {
      CreateScreenshot: Gb,
      CreateScreenshotAsync: Kb,
      CreateScreenshotWithResizeAsync: Zb,
      CreateScreenshotUsingRenderTarget: zb,
      CreateScreenshotUsingRenderTargetAsync: qb,
      CreateScreenshotForFrameGraphAsync: db
    };
    let rb = !1;

    function ob() {
      if (rb) return;
      rb = !0;
      nb.g.CreateScreenshot = Gb, nb.g.CreateScreenshotAsync = Kb, nb.g.CreateScreenshotUsingRenderTarget = zb, nb.g.CreateScreenshotUsingRenderTargetAsync = qb
    }
    ob()
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);