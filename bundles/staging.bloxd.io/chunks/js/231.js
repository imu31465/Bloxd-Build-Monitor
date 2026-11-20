export const id = 231;
export const ids = [231, 232];
export const modules = {
  39356: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => vb,
      f: () => Pb
    });
    var Ab = Ub(39104),
      Mb = Ub(39110),
      Tb = Ub(36401),
      Eb = Ub(36593),
      Yb = Ub(39359),
      Bb = Ub(39314),
      eb = Ub(36447);
    let vb = (() => {
        var bb;
        let ab, Ub, Bb = Yb.e,
          eb = [],
          vb = [],
          Lb = [],
          Pb = [];
        return bb = class extends Bb {
          constructor(bb, ab, Ub, Mb) {
            super(bb, Ub, Mb), this.groundColor = (0, Ab.k)(this, eb, new Eb.c(0, 0, 0)), this.direction = ((0, Ab.k)(this, vb), (0, Ab.k)(this, Lb, void 0)), (0, Ab.k)(this, Pb), this.direction = ab || Tb.m.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(bb) {
            return this.direction = Tb.m.Normalize(bb.subtract(Tb.m.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(bb, ab) {
            const Ub = Tb.m.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", Ub.x, Ub.y, Ub.z, 0, ab), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), ab), this
          }
          transferToNodeMaterialEffect(bb, ab) {
            const Ub = Tb.m.Normalize(this.direction);
            return bb.setFloat3(ab, Ub.x, Ub.y, Ub.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = Tb.b.Identity()), this._worldMatrix
          }
          getTypeID() {
            return Yb.e.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(bb, ab) {
            bb["HEMILIGHT" + ab] = !0
          }
        }, (() => {
          const Tb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Bb[Symbol.metadata] ?? null) : void 0;
          ab = [(0, Mb.k)()], Ub = [(0, Mb.I)()], (0, Ab.h)(null, null, ab, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "groundColor" in bb,
              get: bb => bb.groundColor,
              set: (bb, ab) => {
                bb.groundColor = ab
              }
            },
            metadata: Tb
          }, eb, vb), (0, Ab.h)(null, null, Ub, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: bb => "direction" in bb,
              get: bb => bb.direction,
              set: (bb, ab) => {
                bb.direction = ab
              }
            },
            metadata: Tb
          }, Lb, Pb), Tb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Tb
          })
        })(), bb
      })(),
      Lb = !1;

    function Pb() {
      Lb || (Lb = !0, Bb.c.AddNodeConstructor("Light_Type_3", ((bb, ab) => () => new vb(bb, Tb.m.Zero(), ab))), (0, eb.f)("BABYLON.HemisphericLight", vb))
    }
  },
  37113: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Mb
    });
    var Ab = Ub(37122);
    class Mb {
      static GetPlanes(bb) {
        const ab = [];
        for (let Ub = 0; Ub < 6; Ub++) ab.push(new Ab.b(0, 0, 0, 0));
        return Mb.GetPlanesToRef(bb, ab), ab
      }
      static GetNearPlaneToRef(bb, ab) {
        const Ub = bb.m;
        ab.normal.x = Ub[3] + Ub[2], ab.normal.y = Ub[7] + Ub[6], ab.normal.z = Ub[11] + Ub[10], ab.d = Ub[15] + Ub[14], ab.normalize()
      }
      static GetFarPlaneToRef(bb, ab) {
        const Ub = bb.m;
        ab.normal.x = Ub[3] - Ub[2], ab.normal.y = Ub[7] - Ub[6], ab.normal.z = Ub[11] - Ub[10], ab.d = Ub[15] - Ub[14], ab.normalize()
      }
      static GetLeftPlaneToRef(bb, ab) {
        const Ub = bb.m;
        ab.normal.x = Ub[3] + Ub[0], ab.normal.y = Ub[7] + Ub[4], ab.normal.z = Ub[11] + Ub[8], ab.d = Ub[15] + Ub[12], ab.normalize()
      }
      static GetRightPlaneToRef(bb, ab) {
        const Ub = bb.m;
        ab.normal.x = Ub[3] - Ub[0], ab.normal.y = Ub[7] - Ub[4], ab.normal.z = Ub[11] - Ub[8], ab.d = Ub[15] - Ub[12], ab.normalize()
      }
      static GetTopPlaneToRef(bb, ab) {
        const Ub = bb.m;
        ab.normal.x = Ub[3] - Ub[1], ab.normal.y = Ub[7] - Ub[5], ab.normal.z = Ub[11] - Ub[9], ab.d = Ub[15] - Ub[13], ab.normalize()
      }
      static GetBottomPlaneToRef(bb, ab) {
        const Ub = bb.m;
        ab.normal.x = Ub[3] + Ub[1], ab.normal.y = Ub[7] + Ub[5], ab.normal.z = Ub[11] + Ub[9], ab.d = Ub[15] + Ub[13], ab.normalize()
      }
      static GetPlanesToRef(bb, ab) {
        Mb.GetNearPlaneToRef(bb, ab[0]), Mb.GetFarPlaneToRef(bb, ab[1]), Mb.GetLeftPlaneToRef(bb, ab[2]), Mb.GetRightPlaneToRef(bb, ab[3]), Mb.GetTopPlaneToRef(bb, ab[4]), Mb.GetBottomPlaneToRef(bb, ab[5])
      }
      static IsPointInFrustum(bb, ab) {
        for (let Ub = 0; Ub < 6; Ub++)
          if (ab[Ub].dotCoordinate(bb) < 0) return !1;
        return !0
      }
    }
  },
  37122: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Mb
    });
    var Ab = Ub(36401);
    class Mb {
      constructor(bb, ab, Ub, Mb) {
        this.normal = new Ab.m(bb, ab, Ub), this.d = Mb
      }
      qUb() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Mb(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let ab = 0;
        return 0 !== bb && (ab = 1 / bb), this.normal.x *= ab, this.normal.y *= ab, this.normal.z *= ab, this.d *= ab, this
      }
      transform(bb) {
        const ab = Mb._TmpMatrix;
        bb.invertToRef(ab);
        const Ub = ab.m,
          Ab = this.normal.x,
          Tb = this.normal.y,
          Eb = this.normal.z,
          Yb = this.d,
          Bb = Ab * Ub[0] + Tb * Ub[1] + Eb * Ub[2] + Yb * Ub[3],
          eb = Ab * Ub[4] + Tb * Ub[5] + Eb * Ub[6] + Yb * Ub[7],
          vb = Ab * Ub[8] + Tb * Ub[9] + Eb * Ub[10] + Yb * Ub[11],
          Lb = Ab * Ub[12] + Tb * Ub[13] + Eb * Ub[14] + Yb * Ub[15];
        return new Mb(Bb, eb, vb, Lb)
      }
      dotCoordinate(bb) {
        return this.normal.x * bb.x + this.normal.y * bb.y + this.normal.z * bb.z + this.d
      }
      copyFromPoints(bb, ab, Ub) {
        const Ab = ab.x - bb.x,
          Mb = ab.y - bb.y,
          Tb = ab.z - bb.z,
          Eb = Ub.x - bb.x,
          Yb = Ub.y - bb.y,
          Bb = Ub.z - bb.z,
          eb = Mb * Bb - Tb * Yb,
          vb = Tb * Eb - Ab * Bb,
          Lb = Ab * Yb - Mb * Eb,
          Pb = Math.sqrt(eb * eb + vb * vb + Lb * Lb);
        let Xb;
        return Xb = 0 !== Pb ? 1 / Pb : 0, this.normal.x = eb * Xb, this.normal.y = vb * Xb, this.normal.z = Lb * Xb, this.d = -(this.normal.x * bb.x + this.normal.y * bb.y + this.normal.z * bb.z), this
      }
      isFrontFacingTo(bb, ab) {
        return Ab.m.Dot(this.normal, bb) <= ab
      }
      signedDistanceTo(bb) {
        return Ab.m.Dot(bb, this.normal) + this.d
      }
      static FromArray(bb) {
        return new Mb(bb[0], bb[1], bb[2], bb[3])
      }
      static FromPoints(bb, ab, Ub) {
        const Ab = new Mb(0, 0, 0, 0);
        return Ab.copyFromPoints(bb, ab, Ub), Ab
      }
      static FromPositionAndNormal(bb, ab) {
        const Ub = new Mb(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(bb, ab, Ub)
      }
      static FromPositionAndNormalToRef(bb, ab, Ub) {
        return Ub.normal.EUb(ab), Ub.normal.normalize(), Ub.d = -bb.dot(Ub.normal), Ub
      }
      static SignedDistanceToPlaneFromPositionAndNormal(bb, ab, Ub) {
        const Mb = -(ab.x * bb.x + ab.y * bb.y + ab.z * bb.z);
        return Ab.m.Dot(Ub, ab) + Mb
      }
    }
    Mb._TmpMatrix = Ab.b.Identity()
  },
  37429: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Ab
    });
    class Ab {
      constructor(bb, ab, Ub, Ab) {
        this.x = bb, this.y = ab, this.width = Ub, this.height = Ab
      }
      toGlobal(bb, ab) {
        return new Ab(this.x * bb, this.y * ab, this.width * bb, this.height * ab)
      }
      toGlobalToRef(bb, ab, Ub) {
        return Ub.x = this.x * bb, Ub.y = this.y * ab, Ub.width = this.width * bb, Ub.height = this.height * ab, this
      }
      clone() {
        return new Ab(this.x, this.y, this.width, this.height)
      }
    }
  },
  37982: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Tb
    });
    var Ab = Ub(37989);
    const Mb = (bb, ab, Ub) => bb ? bb.getClassName && "Mesh" === bb.getClassName() ? null : !bb.getClassName || "SubMesh" !== bb.getClassName() && "PhysicsBody" !== bb.getClassName() ? bb.clone ? bb.clone() : Array.isArray(bb) ? bb.slice() : Ub && "object" === typeof bb ? {
      ...bb
    } : null : bb.clone(ab) : null;
    class Tb {
      static DeepCopy(bb, ab, Ub, Tb) {
        let Eb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Yb = function(bb) {
          const ab = [];
          do {
            const Ub = Object.getOwnPropertyNames(bb);
            for (const bb of Ub) - 1 === ab.indexOf(bb) && ab.push(bb)
          } while (bb = Object.getPrototypeOf(bb));
          return ab
        }(bb);
        for (const eb of Yb) {
          if ("_" === eb[0] && (!Tb || -1 === Tb.indexOf(eb))) continue;
          if (eb.endsWith("Observable")) continue;
          if (Ub && -1 !== Ub.indexOf(eb)) continue;
          const Yb = bb[eb],
            vb = typeof Yb;
          if ("function" !== vb) try {
            if ("object" === vb)
              if (Yb instanceof Uint8Array) ab[eb] = Uint8Array.from(Yb);
              else if (Yb instanceof Array) {
              if (ab[eb] = [], Yb.length > 0)
                if ("object" == typeof Yb[0])
                  for (let bb = 0; bb < Yb.length; bb++) {
                    const Ub = Mb(Yb[bb], ab, Eb); - 1 === ab[eb].indexOf(Ub) && ab[eb].push(Ub)
                  } else ab[eb] = Yb.slice(0)
            } else ab[eb] = Mb(Yb, ab, Eb);
            else ab[eb] = Yb
          } catch (Bb) {
            Ab.e.Warn(Bb.message)
          }
        }
      }
    }
  },
  37251: (bb, ab, Ub) => {
    function Ab() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (bb => {
        const ab = 16 * Math.random() | 0;
        return ("x" === bb ? ab : 3 & ab | 8).toString(16)
      }))
    }
    Ub.d(ab, {
      b: () => Ab
    })
  },
  37989: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Ab
    });
    class Ab {
      static _CheckLimit(bb, ab) {
        let Ub = Ab._LogLimitOutputs[bb];
        return Ub ? Ub.current++ : (Ub = {
          limit: ab,
          current: 1
        }, Ab._LogLimitOutputs[bb] = Ub), Ub.current <= Ub.limit
      }
      static _GenerateLimitMessage(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const Ub = Ab._LogLimitOutputs[bb];
        if (!Ub || !Ab.MessageLimitReached) return;
        const Mb = this._Levels[ab];
        Ub.current === Ub.limit && Ab[Mb.name](Ab.MessageLimitReached.replace(/%LIMIT%/g, "" + Ub.limit).replace(/%TYPE%/g, Mb.name ?? ""))
      }
      static _AddLogEntry(bb) {
        Ab._LogCache = bb + Ab._LogCache, Ab.OnNewCacheEntry && Ab.OnNewCacheEntry(bb)
      }
      static _FormatMessage(bb) {
        const ab = bb => bb < 10 ? "0" + bb : "" + bb,
          Ub = new Date;
        return "[" + ab(Ub.getHours()) + ":" + ab(Ub.getMinutes()) + ":" + ab(Ub.getSeconds()) + "]: " + bb
      }
      static _LogDisabled(bb, ab) {}
      static _LogEnabled() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ab = arguments.length > 1 ? arguments[1] : void 0,
          Ub = arguments.length > 2 ? arguments[2] : void 0;
        const Mb = Array.isArray(ab) ? ab[0] : ab;
        if (void 0 !== Ub && !Ab._CheckLimit(Mb, Ub)) return;
        const Tb = Ab._FormatMessage(Mb),
          Eb = this._Levels[bb],
          Yb = Array.isArray(ab) ? ab.slice(1) : [];
        Eb.logFunc && Eb.logFunc("BJS - " + Tb, ...Yb);
        const Bb = `<div style='color:${Eb.color}'>${Tb}</div><br>`;
        Ab._AddLogEntry(Bb), Ab._GenerateLimitMessage(Mb, bb)
      }
      static get LogCache() {
        return Ab._LogCache
      }
      static ClearLogCache() {
        Ab._LogCache = "", Ab._LogLimitOutputs = {}, Ab.errorsCount = 0
      }
      static set LogLevels(bb) {
        Ab.Log = Ab._LogDisabled, Ab.Warn = Ab._LogDisabled, Ab.Error = Ab._LogDisabled;
        const ab = [Ab.MessageLogLevel, Ab.WarningLogLevel, Ab.ErrorLogLevel];
        for (const Ub of ab)
          if ((bb & Ub) === Ub) {
            const bb = this._Levels[Ub];
            Ab[bb.name] = Ab._LogEnabled.bind(Ab, Ub)
          }
      }
    }
    Ab.NoneLogLevel = 0, Ab.MessageLogLevel = 1, Ab.WarningLogLevel = 2, Ab.ErrorLogLevel = 4, Ab.AllLogLevel = 7, Ab.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Ab._LogCache = "", Ab._LogLimitOutputs = {}, Ab._Levels = [{}, {
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
    }], Ab.errorsCount = 0, Ab.Log = Ab._LogEnabled.bind(Ab, Ab.MessageLogLevel), Ab.Warn = Ab._LogEnabled.bind(Ab, Ab.WarningLogLevel), Ab.Error = Ab._LogEnabled.bind(Ab, Ab.ErrorLogLevel)
  },
  60243: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      CreateScreenshot: () => qb,
      CreateScreenshotAsync: () => ub,
      CreateScreenshotForFrameGraphAsync: () => lb,
      CreateScreenshotUsingRenderTarget: () => Kb,
      CreateScreenshotUsingRenderTargetAsync: () => ob,
      CreateScreenshotWithResizeAsync: () => rb,
      RegisterScreenshotTools: () => gb,
      ScreenshotTools: () => wb
    });
    var Ab = Ub(39605),
      Mb = Ub(40920),
      Tb = Ub(40901),
      Eb = Ub(39124),
      Yb = Ub(40904),
      Bb = Ub(36425),
      eb = Ub(36401);
    class vb extends Yb.g {
      static _GetDefines(bb) {
        if (!bb) return null;
        return bb.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
      }
      _gatherImports(bb, ab) {
        bb ? (this._webGPUReady = !0, ab.push(Promise.all([Ub.e(367).then((() => Ub(60632))), Ub.e(368).then((() => Ub(60640)))]))) : ab.push(Promise.all([Ub.e(369).then((() => Ub(60646))), Ub.e(370).then((() => Ub(60654)))]))
      }
      constructor(bb) {
        const ab = {
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: bb,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || Bb.d.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          vertexShader: vb.VertexUrl,
          fragmentShader: vb.FragmentUrl,
          uniforms: vb.Uniforms
        };
        super({
          ...ab,
          defines: vb._GetDefines(ab.engine)
        }), this.texelSize = new eb.l(0, 0)
      }
      bind() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.bind(bb), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
      }
    }
    vb.VertexUrl = "fxaa", vb.FragmentUrl = "fxaa", vb.Uniforms = ["texelSize"];
    class Lb extends Tb.e {
      getClassName() {
        return "FxaaPostProcess"
      }
      constructor(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Mb = arguments.length > 3 ? arguments[3] : void 0,
          Tb = arguments.length > 4 ? arguments[4] : void 0,
          Eb = arguments.length > 5 ? arguments[5] : void 0,
          Yb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const Bb = {
          uniforms: vb.Uniforms,
          size: "number" === typeof ab ? ab : void 0,
          camera: Ub,
          samplingMode: Mb || Ab.e.BILINEAR_SAMPLINGMODE,
          engine: Tb,
          reusable: Eb,
          textureType: Yb,
          ...ab
        };
        super(bb, vb.FragmentUrl, {
          effectWrapper: "number" !== typeof ab && ab.effectWrapper ? void 0 : new vb(bb, Tb, Bb),
          ...Bb
        }), this.onApplyObservable.add((bb => {
          this._effectWrapper.texelSize = this.texelSize
        }))
      }
      static _Parse(bb, ab, Ub, Ab) {
        return Eb.b.Parse((() => new Lb(bb.name, bb.options, ab, bb.renderTargetSamplingMode, Ub.vj(), bb.reusable)), bb, Ub, Ab)
      }
    }
    var Pb = Ub(37989),
      Xb = Ub(39195),
      jb = Ub(40930),
      Rb = Ub(40914),
      kb = Ub(38993);
    const yb = 0;
    class Zb {
      constructor(bb, ab, Ub) {
        this.name = bb, this._parentTask = ab, this._context = Ub, this.disabled = !1
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
    class Db extends Zb {
      static IsObjectListPass(bb) {
        return void 0 !== bb.setObjectList
      }
      get objectList() {
        return this._objectList
      }
      setObjectList(bb) {
        this._objectList = bb
      }
      constructor(bb, ab, Ub, Ab) {
        super(bb, ab, Ub), this._engine = Ab
      }
      _isValid() {
        const bb = super._isValid();
        return bb || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
      }
    }
    class zb extends Zb {
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
      constructor(bb, ab, Ub, Ab) {
        super(bb, ab, Ub), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = Ab
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
            for (const ab of bb) this._dependencies.add(ab);
          else this._dependencies.add(bb)
      }
      collectDependencies(bb) {
        const ab = this._dependencies.keys();
        for (let Ub = ab.next(); !0 !== Ub.done; Ub = ab.next()) bb.add(Ub.value);
        if (void 0 !== this._renderTarget)
          if (Array.isArray(this._renderTarget))
            for (const Ub of this._renderTarget) void 0 !== Ub && bb.add(Ub);
          else bb.add(this._renderTarget);
        void 0 !== this._renderTargetDepth && bb.add(this._renderTargetDepth)
      }
      setOutputLayerAndFaceIndices(bb) {
        const ab = this.frameGraphRenderTarget.renderTargetWrapper;
        if (ab)
          for (const Ub of bb) ab.setLayerAndFaceIndex(Ub.targetIndex, Ub.layerIndex, Ub.faceIndex)
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
    var xb = Ub(36431);
    class ib {
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
      constructor(bb, ab) {
        this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new xb.b, this.onBeforeTaskExecute = new xb.b, this.onAfterTaskExecute = new xb.b, this.name = bb, this._frameGraph = ab, this._reset()
      }
      _reset() {
        for (const bb of this._passes) bb._dispose();
        for (const bb of this._passesDisabled) bb._dispose();
        this._passes.length = 0, this._passesDisabled.length = 0
      }
      _addPass(bb, ab) {
        ab ? this._passesDisabled.push(bb) : this._passes.push(bb)
      }
      _checkTask() {
        let bb, ab = null,
          Ub = null;
        for (const Yb of this._passes) {
          const Ab = Yb._isValid();
          if (Ab) throw new Error(`Pass "${Yb.name}" is not valid. ${Ab}`);
          if (zb.IsRenderPass(Yb)) {
            const bb = Array.isArray(Yb.renderTarget) ? Yb.renderTarget : [Yb.renderTarget];
            ab = [];
            for (const Ub of bb) void 0 !== Ub && ab.push(this._frameGraph.textureManager.getTextureFromHandle(Ub));
            Ub = void 0 !== Yb.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(Yb.renderTargetDepth) : null
          } else Db.IsObjectListPass(Yb) && (bb = Yb.objectList)
        }
        let Ab, Mb = null,
          Tb = [],
          Eb = null;
        for (const Yb of this._passesDisabled) {
          const bb = Yb._isValid();
          if (bb) throw new Error(`Pass "${Yb.name}" is not valid. ${bb}`);
          if (zb.IsRenderPass(Yb)) {
            const bb = Array.isArray(Yb.renderTarget) ? Yb.renderTarget : [Yb.renderTarget];
            Mb = [];
            for (const ab of bb) void 0 !== ab && Mb.push(this._frameGraph.textureManager.getTextureFromHandle(ab));
            Tb = bb, Eb = void 0 !== Yb.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(Yb.renderTargetDepth) : null
          } else Db.IsObjectListPass(Yb) && (Ab = Yb.objectList)
        }
        if (this._passesDisabled.length > 0) {
          if (!this._checkSameRenderTarget(ab, Mb)) {
            let bb = !0;
            for (const ab of Tb)
              if (void 0 !== ab && !this._frameGraph.textureManager.isHistoryTexture(ab)) {
                bb = !1;
                break
              } if (!bb) throw new Error(`The output texture of the task "${this.name}" is different when it is enabled or disabled.`)
          }
          if (Ub !== Eb && null !== Eb) throw new Error(`The output depth texture of the task "${this.name}" is different when it is enabled or disabled.`);
          if (bb !== Ab && null !== Ab) throw new Error(`The output object list of the task "${this.name}" is different when it is enabled or disabled.`)
        }
      }
      _execute() {
        const bb = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
        this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const ab of bb) ab._execute()
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
      _checkSameRenderTarget(bb, ab) {
        if (null === bb || null === ab) return bb === ab;
        if (bb.length !== ab.length) return !1;
        for (let Ub = 0; Ub < bb.length; Ub++)
          if (bb[Ub] !== ab[Ub]) return !1;
        return !0
      }
    }
    class fb extends ib {
      get alphaMode() {
        return this.postProcess.alphaMode
      }
      set alphaMode(bb) {
        this.postProcess.alphaMode = bb
      }
      get drawWrapper() {
        return this._postProcessDrawWrapper
      }
      constructor(bb, ab, Ub) {
        super(bb, ab), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = Ub, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture = this._frameGraph.textureManager.createDanglingHandle(), this.outputDepthAttachmentTexture = this._frameGraph.textureManager.createDanglingHandle()
      }
      isReady() {
        return this.postProcess.isReady()
      }
      getClassName() {
        return "FrameGraphPostProcessTask"
      }
      record() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ab = arguments.length > 1 ? arguments[1] : void 0,
          Ub = arguments.length > 2 ? arguments[2] : void 0;
        if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
        const Ab = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
        if (Ab && (Ab.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, Ab), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentTexture, this.depthAttachmentTexture), Ab) {
          const bb = this._frameGraph.textureManager.getTextureAbsoluteDimensions(Ab);
          this._sourceWidth = bb.width, this._sourceHeight = bb.height
        }
        const Mb = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
        this._outputWidth = Mb.size.width, this._outputHeight = Mb.size.height;
        const Tb = this._frameGraph.addRenderPass(this.name);
        if (Tb.depthReadOnly = this.depthReadOnly, Tb.stencilReadOnly = this.stencilReadOnly, Tb.addDependencies(this.sourceTexture), Tb.setRenderTarget(this.outputTexture), Tb.setRenderTargetDepth(this.depthAttachmentTexture), Tb.setExecuteFunc((bb => {
            bb.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && bb.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), ab?.(bb), this.viewport && bb.setViewport(this.viewport), bb.applyFullScreenEffect(this._postProcessDrawWrapper, (() => {
              void 0 !== this.sourceTexture && bb.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), Ub?.(bb), this.postProcess.bind()
            }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), bb.restoreDefaultFramebuffer(), bb.popDebugGroup()
          })), !bb) {
          const bb = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
          bb.depthReadOnly = this.depthReadOnly, bb.stencilReadOnly = this.stencilReadOnly, bb.addDependencies(this.sourceTexture), bb.setRenderTarget(this.outputTexture), bb.setRenderTargetDepth(this.depthAttachmentTexture), bb.setExecuteFunc((bb => {
            void 0 !== this.sourceTexture && 0 === this.alphaMode && (this.viewport && bb.setViewport(this.viewport), bb.copyTexture(this.sourceTexture, void 0, void 0 !== this.viewport))
          }))
        }
        return Tb
      }
      dispose() {
        this.postProcess.dispose(), super.dispose()
      }
    }
    class mb extends fb {
      constructor(bb, ab, Ub) {
        super(bb, ab, Ub || new vb(bb, ab.engine))
      }
      getClassName() {
        return "FrameGraphFXAATask"
      }
      record() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ab = arguments.length > 1 ? arguments[1] : void 0,
          Ub = arguments.length > 2 ? arguments[2] : void 0;
        const Ab = super.record(bb, ab, Ub);
        return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, Ab
      }
    }
    var pb = Ub(40925);
    class Nb extends fb {
      constructor(bb, ab, Ub) {
        super(bb, ab, Ub || new pb.g(bb, ab.engine))
      }
      getClassName() {
        return "FrameGraphPassTask"
      }
    }
    var Wb = Ub(39188),
      Hb = Ub(39269),
      Ib = Ub(39240),
      db = Ub(39356),
      Fb = Ub(36593);
    class hb {
      getRenderCamera(bb) {
        if (this._renderCamera) return this._renderCamera;
        {
          let ab;
          return ab = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, bb && ab && ab.isRigCamera ? ab.rigParent : ab
        }
      }
      setRenderCamera(bb) {
        this._renderCamera = bb
      }
      _getSharedGizmoLight() {
        return this._sharedGizmoLight || (this._sharedGizmoLight = new db.d("shared gizmo light", new eb.m(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = Fb.c.Gray()), this._sharedGizmoLight
      }
      static get DefaultUtilityLayer() {
        return null == hb._DefaultUtilityLayer ? hb._CreateDefaultUtilityLayerFromScene(Bb.d.LastCreatedScene) : hb._DefaultUtilityLayer
      }
      static _CreateDefaultUtilityLayerFromScene(bb) {
        return hb._DefaultUtilityLayer = new hb(bb), hb._DefaultUtilityLayer.originalScene.UW.addOnce((() => {
          hb._DefaultUtilityLayer = null
        })), hb._DefaultUtilityLayer
      }
      static get DefaultKeepDepthUtilityLayer() {
        return null == hb._DefaultKeepDepthUtilityLayer ? hb._CreateDefaultKeepUtilityLayerFromScene(Bb.d.LastCreatedScene) : hb._DefaultKeepDepthUtilityLayer
      }
      static _CreateDefaultKeepUtilityLayerFromScene(bb) {
        return hb._DefaultKeepDepthUtilityLayer = new hb(bb), hb._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, hb._DefaultKeepDepthUtilityLayer.originalScene.UW.addOnce((() => {
          hb._DefaultKeepDepthUtilityLayer = null
        })), hb._DefaultKeepDepthUtilityLayer
      }
      constructor(bb) {
        let ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.originalScene = bb, this.handleEvents = ab, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.processAllEvents = !1, this.pickingEnabled = !0, this.onPointerOutObservable = new xb.b, this.utilityLayerScene = new Wb.e(bb.vj(), {
          virtual: !0,
          useFloatingOrigin: bb.floatingOriginMode
        }), this.utilityLayerScene.useRightHandedSystem = bb.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), ab && (this._originalPointerObserver = bb.onPrePointerObservable.add((ab => {
          if (!this.utilityLayerScene.activeCamera) return;
          if (!this.pickingEnabled) return;
          if (!this.processAllEvents && ab.type !== Hb.c.POINTERMOVE && ab.type !== Hb.c.POINTERUP && ab.type !== Hb.c.POINTERDOWN && ab.type !== Hb.c.POINTERDOUBLETAP) return;
          this.utilityLayerScene.pointerX = bb.pointerX, this.utilityLayerScene.pointerY = bb.pointerY;
          const Ub = ab.event;
          if (bb.isPointerCaptured(Ub.pointerId)) return void(this._pointerCaptures[Ub.pointerId] = !1);
          const Ab = Ub => {
              let Ab;
              if (ab.nearInteractionPickingInfo) Ab = ab.nearInteractionPickingInfo.pickedMesh.oN() == Ub ? ab.nearInteractionPickingInfo : new Ib.e;
              else if (Ub !== this.utilityLayerScene && ab.originalPickingInfo) Ab = ab.originalPickingInfo;
              else {
                let Mb = null;
                this._renderCamera && (Mb = Ub._activeCamera, Ub._activeCamera = this._renderCamera, ab.ray = null), Ab = ab.ray ? Ub.pickWithRay(ab.ray) : Ub.GP(bb.pointerX, bb.pointerY), Mb && (Ub._activeCamera = Mb)
              }
              return Ab
            },
            Mb = Ab(this.utilityLayerScene);
          if (!ab.ray && Mb && (ab.ray = Mb.ray), ab.originalPickingInfo?.aimTransform && Mb && (Mb.aimTransform = ab.originalPickingInfo.aimTransform, Mb.gripTransform = ab.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(ab), this.onlyCheckPointerDownEvents && ab.type != Hb.c.POINTERDOWN) return ab.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new Hb.k(ab.type, ab.event, Mb), ab.type), void(ab.type === Hb.c.POINTERUP && this._pointerCaptures[Ub.pointerId] && (this._pointerCaptures[Ub.pointerId] = !1));
          if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) Mb && Mb.hit && (ab.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new Hb.k(ab.type, ab.event, Mb), ab.type), ab.skipOnPointerObservable = !0);
          else {
            const Ub = Ab(bb),
              Tb = ab.event;
            Ub && Mb && (0 === Mb.distance && Ub.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(Ub.pickedMesh) ? (this._notifyObservers(ab, Ub, Tb), ab.skipOnPointerObservable = !0) : ab.type === Hb.c.POINTERDOWN ? (this._pointerCaptures[Tb.pointerId] = !0, this._notifyObservers(ab, Ub, Tb)) : ab.type !== Hb.c.POINTERMOVE && ab.type !== Hb.c.POINTERUP || (this._lastPointerEvents[Tb.pointerId] && (this.onPointerOutObservable.notifyObservers(Tb.pointerId), delete this._lastPointerEvents[Tb.pointerId]), this._notifyObservers(ab, Ub, Tb)) : !this._pointerCaptures[Tb.pointerId] && (Mb.distance < Ub.distance || 0 === Ub.distance) ? (this._notifyObservers(ab, Mb, Tb), ab.skipOnPointerObservable || (ab.skipOnPointerObservable = Mb.distance > 0)) : !this._pointerCaptures[Tb.pointerId] && Mb.distance >= Ub.distance && (this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(Ub.pickedMesh) ? (this._notifyObservers(ab, Ub, Tb), ab.skipOnPointerObservable = !0) : (ab.type !== Hb.c.POINTERMOVE && ab.type !== Hb.c.POINTERUP || this._lastPointerEvents[Tb.pointerId] && (this.onPointerOutObservable.notifyObservers(Tb.pointerId), delete this._lastPointerEvents[Tb.pointerId]), this._notifyObservers(ab, Mb, Tb))), ab.type === Hb.c.POINTERUP && this._pointerCaptures[Tb.pointerId] && (this._pointerCaptures[Tb.pointerId] = !1))
          }
        })), this._originalPointerObserver && bb.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, Ub || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((bb => {
          this.shouldRender && bb == this.getRenderCamera() && this.render()
        }))), this._sceneDisposeObserver = this.originalScene.UW.add((() => {
          this.dispose()
        })), this._updateCamera()
      }
      _notifyObservers(bb, ab, Ub) {
        bb.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new Hb.k(bb.type, bb.event, ab), bb.type), this._lastPointerEvents[Ub.pointerId] = !0)
      }
      render() {
        if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
          const bb = this.utilityLayerScene.activeCamera.oN(),
            ab = this.utilityLayerScene.activeCamera;
          ab._scene = this.utilityLayerScene, ab.leftCamera && (ab.leftCamera._scene = this.utilityLayerScene), ab.rightCamera && (ab.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), ab._scene = bb, ab.leftCamera && (ab.leftCamera._scene = bb), ab.rightCamera && (ab.rightCamera._scene = bb)
        }
      }
      dispose() {
        this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.UW.remove(this._sceneDisposeObserver), this._originalPointerObserver && this.originalScene.onPrePointerObservable.remove(this._originalPointerObserver), this.utilityLayerScene.dispose()
      }
      _updateCamera() {
        this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
      }
    }
    hb._DefaultUtilityLayer = null, hb._DefaultKeepDepthUtilityLayer = null;
    const Gb = {
      FindMainCamera: function(bb) {
        return bb.findMainCamera()
      },
      FindMainObjectRenderer: function(bb) {
        return bb.findMainObjectRenderer()
      },
      CreateUtilityLayerRenderer: function(bb) {
        let ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const Ub = bb.ZR,
          Ab = new hb(Ub, ab, !0);
        Ab.utilityLayerScene.activeCamera = Ub.activeCamera;
        let Mb = Gb.FindMainCamera(Ub.frameGraph);
        !Mb && Ub.cameras.length > 0 && (Mb = Ub.cameras[0]), Mb && (Ab.setRenderCamera(Mb), Ab.utilityLayerScene.activeCamera = Mb);
        const Tb = Ub.onAfterRenderObservable.add((() => {
          Ab.render()
        }));
        return Ab.utilityLayerScene.UW.addOnce((() => {
          Ub.onAfterRenderObservable.remove(Tb)
        })), Ab
      }
    };
    let Qb = null;

    function qb(bb, ab, Ub, Ab) {
      let Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        Tb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Eb = arguments.length > 6 ? arguments[6] : void 0,
        Yb = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Bb = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
      const {
        height: eb,
        width: vb
      } = tb(bb, ab, Ub);
      if (!eb || !vb) return void Pb.e.Error("Invalid 'size' parameter !");
      const Lb = ab.oN();
      let jb = Lb.activeCamera !== ab;
      if (Lb.frameGraph) {
        const bb = Gb.FindMainObjectRenderer(Lb.frameGraph);
        bb && (jb = bb.camera !== ab)
      }
      jb ? Kb(bb, ab, Ub, (bb => {
        if (Tb) {
          const ab = new Blob([bb]);
          Xb.h.DownloadBlob(ab), Ab && Ab("")
        } else Ab && Ab(bb)
      }), Mb, 1, bb.getCreationOptions().antialias, void 0, void 0, void 0, void 0, Eb) : bb.onEndFrameObservable.addOnce((() => {
        Qb || (Qb = document.createElement("canvas")), Qb.width = vb, Qb.height = eb;
        const ab = Qb.getContext("2d"),
          Ub = bb.getRenderingCanvas();
        if (!ab || !Ub) return void Pb.e.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
        const jb = Ub.width,
          Rb = Ub.height,
          kb = Qb.width,
          yb = Qb.height,
          Zb = kb / jb,
          Db = yb / Rb,
          zb = Yb ? Math.max(Zb, Db) : Math.min(Zb, Db),
          xb = jb * zb,
          ib = Rb * zb,
          fb = (kb - xb) / 2,
          mb = (yb - ib) / 2;
        ab.save(), ab.fillStyle = Bb ? Lb.clearColor.toHexString() : "rgba(0, 0, 0, 0)", ab.fillRect(0, 0, vb, eb), ab.restore(), ab.drawImage(Ub, 0, 0, jb, Rb, fb, mb, xb, ib), Tb ? (Xb.h.EncodeScreenshotCanvasData(Qb, void 0, Mb, void 0, Eb), Ab && Ab("")) : Xb.h.EncodeScreenshotCanvasData(Qb, Ab, Mb, void 0, Eb)
      }))
    }
    async function ub(bb, ab, Ub) {
      let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Mb = arguments.length > 4 ? arguments[4] : void 0,
        Tb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Eb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Yb = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      return await new Promise(((Bb, eb) => {
        qb(bb, ab, Ub, (bb => {
          "undefined" !== typeof bb ? Bb(bb) : eb(new Error("Data is undefined"))
        }), Ab, Yb, Mb, Tb, Eb)
      }))
    }
    async function rb(bb, ab, Ub, Ab) {
      let Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        Tb = arguments.length > 5 ? arguments[5] : void 0,
        Eb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return await new Promise((Yb => {
        qb(bb, ab, {
          width: Ub,
          height: Ab
        }, (() => {
          Yb()
        }), Mb, !0, Tb, Eb)
      }))
    }

    function Kb(bb, ab, Tb, Eb) {
      let Yb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        Bb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
        eb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        vb = arguments.length > 7 ? arguments[7] : void 0,
        Xb = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        yb = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        Zb = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
        Db = arguments.length > 11 ? arguments[11] : void 0,
        zb = arguments.length > 12 ? arguments[12] : void 0,
        xb = arguments.length > 13 ? arguments[13] : void 0,
        ib = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
        fb = arguments.length > 15 ? arguments[15] : void 0;
      const mb = ab.oN();
      if (mb.frameGraph) return void lb(mb.frameGraph, ab, Tb, Yb, Bb, eb, vb, Db, xb, !Eb).then((bb => {
        Eb && Eb(bb)
      }));
      const {
        height: pb,
        width: Nb,
        finalWidth: Wb,
        finalHeight: Hb
      } = tb(bb, ab, Tb), Ib = {
        width: Nb,
        height: pb
      };
      if (!pb || !Nb) return void Pb.e.Error("Invalid 'size' parameter !");
      bb.skipFrameRender = !0;
      const db = bb.getRenderWidth,
        Fb = bb.getRenderHeight;
      bb.getRenderWidth = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && bb._currentRenderTarget ? bb._currentRenderTarget.width : Nb
      }, bb.getRenderHeight = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && bb._currentRenderTarget ? bb._currentRenderTarget.height : pb
      }, bb.onResizeObservable.hasObservers() && bb.onResizeObservable.notifyObservers(bb);
      const hb = new Mb.b("screenShot", Ib, mb, !1, !1, 0, !1, Ab.e.BILINEAR_SAMPLINGMODE, void 0, yb, void 0, void 0, void 0, Bb);
      hb.renderList = mb.meshes.slice(), hb.samples = Bb, hb.renderSprites = Xb, hb.activeCamera = ab, hb.forceLayerMaskCheck = Zb, zb?.(hb);
      const Gb = xb || jb.DumpData,
        Qb = () => {
          mb.incrementRenderId(), mb.resetCachedMaterial(), (0, kb.f)((() => hb.isReadyForRendering() && ab.isReady(!0)), (() => {
            bb.onEndFrameObservable.addOnce((() => {
              Wb === Nb && Hb === pb ? hb.readPixels(void 0, void 0, void 0, !1).then((bb => {
                Gb(Nb, pb, bb, Eb, Yb, vb, !0, void 0, Db), hb.dispose()
              })) : (bb.isWebGPU ? Ub.e(363).then((() => Ub(60564))) : Ub.e(364).then((() => Ub(60573)))).then((async () => await (0, Rb.b)("pass", hb.getInternalTexture(), mb, void 0, void 0, void 0, Wb, Hb).then((ab => {
                bb._readTexturePixels(ab, Wb, Hb, -1, 0, null, !0, !1, 0, 0).then((bb => {
                  Gb(Wb, Hb, bb, Eb, Yb, vb, !0, void 0, Db), ab.dispose()
                }))
              }))))
            })), mb.incrementRenderId(), mb.resetCachedMaterial();
            const Ab = mb.activeCamera,
              Mb = mb.activeCameras,
              Tb = ab.outputRenderTarget,
              Bb = mb.spritesEnabled;
            mb.activeCamera = ab, mb.activeCameras = null, ab.outputRenderTarget = hb, mb.spritesEnabled = Xb;
            const eb = mb.meshes;
            mb.meshes = hb.renderList || mb.meshes;
            try {
              mb.render()
            } finally {
              mb.activeCamera = Ab, mb.activeCameras = Mb, ab.outputRenderTarget = Tb, mb.spritesEnabled = Bb, mb.meshes = eb, bb.getRenderWidth = db, bb.getRenderHeight = Fb, bb.onResizeObservable.hasObservers() && bb.onResizeObservable.notifyObservers(bb), ab.getProjectionMatrix(!0), bb.skipFrameRender = !1
            }
          }), (() => {
            bb.skipFrameRender = !1, bb.getRenderWidth = db, bb.getRenderHeight = Fb, fb?.()
          }), void 0, ib)
        };
      if (eb) {
        const bb = new Lb("antialiasing", 1, mb.activeCamera);
        hb.addPostProcess(bb), bb.autoClear = !0, bb.onEffectCreatedObservable.addOnce((bb => {
          bb.isReady() ? Qb() : bb.onCompiled = () => {
            Qb()
          }
        }))
      } else Qb()
    }
    async function ob(bb, ab, Ub) {
      let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        Tb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Eb = arguments.length > 6 ? arguments[6] : void 0,
        Yb = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Bb = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        eb = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
        vb = arguments.length > 10 ? arguments[10] : void 0,
        Lb = arguments.length > 11 ? arguments[11] : void 0,
        Pb = arguments.length > 12 ? arguments[12] : void 0;
      return await new Promise(((Xb, jb) => {
        Kb(bb, ab, Ub, (bb => {
          "undefined" !== typeof bb ? Xb(bb) : jb(new Error("Data is undefined"))
        }), Ab, Mb, Tb, Eb, Yb, Bb, eb, vb, Lb, Pb)
      }))
    }
    async function lb(bb, ab, Ub) {
      let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        Tb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Eb = arguments.length > 6 ? arguments[6] : void 0,
        Yb = arguments.length > 7 ? arguments[7] : void 0,
        Bb = arguments.length > 8 ? arguments[8] : void 0,
        eb = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        vb = arguments.length > 10 ? arguments[10] : void 0;
      const Lb = bb.engine,
        Pb = bb.textureManager,
        {
          height: Xb,
          width: Rb,
          finalWidth: kb,
          finalHeight: Zb
        } = tb(Lb, ab, Ub),
        Db = {
          width: Rb,
          height: Xb
        },
        zb = Bb || jb.DumpData,
        xb = bb.tasks,
        ib = xb.length,
        fb = bb.pausedExecution,
        pb = Lb.getCaps().parallelShaderCompile;
      Pb.setBackBufferTextures(0, 0, {
        size: Db,
        options: {
          createMipMaps: !1,
          samples: Mb,
          types: [0],
          formats: [5],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot color"]
        },
        sizeIsPercentage: !1
      }, {
        size: Db,
        options: {
          createMipMaps: !1,
          samples: Mb,
          types: [0],
          formats: [Lb.isStencilEnable ? 13 : 14],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot depth"]
        },
        sizeIsPercentage: !1
      });
      let Wb = yb;
      if (Tb) {
        const ab = new mb("fxaa", bb);
        ab.sourceTexture = Wb, Wb = ab.outputTexture, bb.addTask(ab)
      }
      if (kb !== Rb || Zb !== Xb) {
        const ab = new Nb("pass", bb);
        ab.sourceTexture = Wb, ab.targetTexture = bb.textureManager.createRenderTargetTexture("pass_output", {
          size: {
            width: kb,
            height: Zb
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
        }), Wb = ab.outputTexture, bb.addTask(ab)
      }
      const Hb = Gb.FindMainObjectRenderer(bb);
      let Ib = null;
      Hb && (Ib = Hb.camera, Hb.camera = ab), Lb.getCaps().parallelShaderCompile = void 0, await bb.buildAsync();
      const db = vb ?? (Pb.hasHistoryTextures ? 32 : 1);
      for (let jb = 0; jb < db; ++jb) bb.execute();
      bb.pausedExecution = !0, Lb.getCaps().parallelShaderCompile = pb;
      for (let jb = ib; jb < xb.length; ++jb) bb.tasks[jb].dispose();
      bb.tasks.length = ib, Hb && Ib && (Hb.camera = Ib);
      const Fb = bb.textureManager.getTextureFromHandle(Wb);
      return Fb.incrementReferences(), Pb.resetBackBufferTextures(), await bb.buildAsync(), bb.pausedExecution = fb, new Promise((bb => {
        Lb._readTexturePixels(Fb, kb, Zb, -1, 0, null, !0, !1, 0, 0).then((async ab => {
          Fb.dispose(), zb(kb, Zb, ab, eb ? void 0 : ab => bb(ab), Ab, Eb, !0, void 0, Yb), eb && bb(null)
        }))
      }))
    }

    function tb(bb, ab, Ub) {
      let Ab = 0,
        Mb = 0,
        Tb = 0,
        Eb = 0;
      if ("object" === typeof Ub) {
        const Yb = Ub.precision ? Math.abs(Ub.precision) : 1;
        Ub.width && Ub.height ? (Ab = Ub.height * Yb, Mb = Ub.width * Yb) : Ub.width && !Ub.height ? (Mb = Ub.width * Yb, Ab = Math.round(Mb / bb.getAspectRatio(ab))) : Ub.height && !Ub.width ? (Ab = Ub.height * Yb, Mb = Math.round(Ab * bb.getAspectRatio(ab))) : (Mb = Math.round(bb.getRenderWidth() * Yb), Ab = Math.round(Mb / bb.getAspectRatio(ab))), Ub.finalWidth && Ub.finalHeight ? (Eb = Ub.finalHeight, Tb = Ub.finalWidth) : Ub.finalWidth && !Ub.finalHeight ? (Tb = Ub.finalWidth, Eb = Math.round(Tb / bb.getAspectRatio(ab))) : Ub.finalHeight && !Ub.finalWidth ? (Eb = Ub.finalHeight, Tb = Math.round(Eb * bb.getAspectRatio(ab))) : (Tb = Mb, Eb = Ab)
      } else isNaN(Ub) || (Ab = Ub, Mb = Ub, Tb = Ub, Eb = Ub);
      return Mb && (Mb = Math.floor(Mb)), Ab && (Ab = Math.floor(Ab)), Tb && (Tb = Math.floor(Tb)), Eb && (Eb = Math.floor(Eb)), {
        height: 0 | Ab,
        width: 0 | Mb,
        finalWidth: 0 | Tb,
        finalHeight: 0 | Eb
      }
    }
    const wb = {
      CreateScreenshot: qb,
      CreateScreenshotAsync: ub,
      CreateScreenshotWithResizeAsync: rb,
      CreateScreenshotUsingRenderTarget: Kb,
      CreateScreenshotUsingRenderTargetAsync: ob,
      CreateScreenshotForFrameGraphAsync: lb
    };
    let sb = !1;

    function gb() {
      if (sb) return;
      sb = !0;
      Xb.h.CreateScreenshot = qb, Xb.h.CreateScreenshotAsync = ub, Xb.h.CreateScreenshotUsingRenderTarget = Kb, Xb.h.CreateScreenshotUsingRenderTargetAsync = ob
    }
    gb()
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);