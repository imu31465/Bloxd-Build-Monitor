export const id = 232;
export const ids = [232, 233];
export const modules = {
  39692: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => ab,
      c: () => wb
    });
    var Bb = hb(39463),
      Ob = hb(39467),
      Gb = hb(36727),
      Ub = hb(36893),
      Lb = hb(39700),
      Yb = hb(39670),
      Sb = hb(36762);
    let ab = (() => {
        var bb;
        let ub, hb, Yb = Lb.b,
          Sb = [],
          ab = [],
          Hb = [],
          wb = [];
        return bb = class extends Yb {
          constructor(bb, ub, hb, Ob) {
            super(bb, hb, Ob), this.groundColor = (0, Bb.k)(this, Sb, new Ub.b(0, 0, 0)), this.direction = ((0, Bb.k)(this, ab), (0, Bb.k)(this, Hb, void 0)), (0, Bb.k)(this, wb), this.direction = ub || Gb.q.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(bb) {
            return this.direction = Gb.q.Normalize(bb.subtract(Gb.q.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(bb, ub) {
            const hb = Gb.q.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", hb.x, hb.y, hb.z, 0, ub), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), ub), this
          }
          transferToNodeMaterialEffect(bb, ub) {
            const hb = Gb.q.Normalize(this.direction);
            return bb.setFloat3(ub, hb.x, hb.y, hb.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = Gb.d.Identity()), this._worldMatrix
          }
          getTypeID() {
            return Lb.b.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(bb, ub) {
            bb["HEMILIGHT" + ub] = !0
          }
        }, (() => {
          const Gb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Yb[Symbol.metadata] ?? null) : void 0;
          ub = [(0, Ob.p)()], hb = [(0, Ob.H)()], (0, Bb.h)(null, null, ub, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "groundColor" in bb,
              get: bb => bb.groundColor,
              set: (bb, ub) => {
                bb.groundColor = ub
              }
            },
            metadata: Gb
          }, Sb, ab), (0, Bb.h)(null, null, hb, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: bb => "direction" in bb,
              get: bb => bb.direction,
              set: (bb, ub) => {
                bb.direction = ub
              }
            },
            metadata: Gb
          }, Hb, wb), Gb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Gb
          })
        })(), bb
      })(),
      Hb = !1;

    function wb() {
      Hb || (Hb = !0, Yb.b.AddNodeConstructor("Light_Type_3", ((bb, ub) => () => new ab(bb, Gb.q.Zero(), ub))), (0, Sb.f)("BABYLON.HemisphericLight", ab))
    }
  },
  37390: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ob
    });
    var Bb = hb(37399);
    class Ob {
      static GetPlanes(bb) {
        const ub = [];
        for (let hb = 0; hb < 6; hb++) ub.push(new Bb.d(0, 0, 0, 0));
        return Ob.GetPlanesToRef(bb, ub), ub
      }
      static GetNearPlaneToRef(bb, ub) {
        const hb = bb.m;
        ub.normal.x = hb[3] + hb[2], ub.normal.y = hb[7] + hb[6], ub.normal.z = hb[11] + hb[10], ub.d = hb[15] + hb[14], ub.normalize()
      }
      static GetFarPlaneToRef(bb, ub) {
        const hb = bb.m;
        ub.normal.x = hb[3] - hb[2], ub.normal.y = hb[7] - hb[6], ub.normal.z = hb[11] - hb[10], ub.d = hb[15] - hb[14], ub.normalize()
      }
      static GetLeftPlaneToRef(bb, ub) {
        const hb = bb.m;
        ub.normal.x = hb[3] + hb[0], ub.normal.y = hb[7] + hb[4], ub.normal.z = hb[11] + hb[8], ub.d = hb[15] + hb[12], ub.normalize()
      }
      static GetRightPlaneToRef(bb, ub) {
        const hb = bb.m;
        ub.normal.x = hb[3] - hb[0], ub.normal.y = hb[7] - hb[4], ub.normal.z = hb[11] - hb[8], ub.d = hb[15] - hb[12], ub.normalize()
      }
      static GetTopPlaneToRef(bb, ub) {
        const hb = bb.m;
        ub.normal.x = hb[3] - hb[1], ub.normal.y = hb[7] - hb[5], ub.normal.z = hb[11] - hb[9], ub.d = hb[15] - hb[13], ub.normalize()
      }
      static GetBottomPlaneToRef(bb, ub) {
        const hb = bb.m;
        ub.normal.x = hb[3] + hb[1], ub.normal.y = hb[7] + hb[5], ub.normal.z = hb[11] + hb[9], ub.d = hb[15] + hb[13], ub.normalize()
      }
      static GetPlanesToRef(bb, ub) {
        Ob.GetNearPlaneToRef(bb, ub[0]), Ob.GetFarPlaneToRef(bb, ub[1]), Ob.GetLeftPlaneToRef(bb, ub[2]), Ob.GetRightPlaneToRef(bb, ub[3]), Ob.GetTopPlaneToRef(bb, ub[4]), Ob.GetBottomPlaneToRef(bb, ub[5])
      }
      static IsPointInFrustum(bb, ub) {
        for (let hb = 0; hb < 6; hb++)
          if (ub[hb].dotCoordinate(bb) < 0) return !1;
        return !0
      }
    }
  },
  37399: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ob
    });
    var Bb = hb(36727);
    class Ob {
      constructor(bb, ub, hb, Ob) {
        this.normal = new Bb.q(bb, ub, hb), this.d = Ob
      }
      ZBb() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Ob(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let ub = 0;
        return 0 !== bb && (ub = 1 / bb), this.normal.x *= ub, this.normal.y *= ub, this.normal.z *= ub, this.d *= ub, this
      }
      transform(bb) {
        const ub = Ob._TmpMatrix;
        bb.invertToRef(ub);
        const hb = ub.m,
          Bb = this.normal.x,
          Gb = this.normal.y,
          Ub = this.normal.z,
          Lb = this.d,
          Yb = Bb * hb[0] + Gb * hb[1] + Ub * hb[2] + Lb * hb[3],
          Sb = Bb * hb[4] + Gb * hb[5] + Ub * hb[6] + Lb * hb[7],
          ab = Bb * hb[8] + Gb * hb[9] + Ub * hb[10] + Lb * hb[11],
          Hb = Bb * hb[12] + Gb * hb[13] + Ub * hb[14] + Lb * hb[15];
        return new Ob(Yb, Sb, ab, Hb)
      }
      dotCoordinate(bb) {
        return this.normal.x * bb.x + this.normal.y * bb.y + this.normal.z * bb.z + this.d
      }
      copyFromPoints(bb, ub, hb) {
        const Bb = ub.x - bb.x,
          Ob = ub.y - bb.y,
          Gb = ub.z - bb.z,
          Ub = hb.x - bb.x,
          Lb = hb.y - bb.y,
          Yb = hb.z - bb.z,
          Sb = Ob * Yb - Gb * Lb,
          ab = Gb * Ub - Bb * Yb,
          Hb = Bb * Lb - Ob * Ub,
          wb = Math.sqrt(Sb * Sb + ab * ab + Hb * Hb);
        let Zb;
        return Zb = 0 !== wb ? 1 / wb : 0, this.normal.x = Sb * Zb, this.normal.y = ab * Zb, this.normal.z = Hb * Zb, this.d = -(this.normal.x * bb.x + this.normal.y * bb.y + this.normal.z * bb.z), this
      }
      isFrontFacingTo(bb, ub) {
        return Bb.q.Dot(this.normal, bb) <= ub
      }
      signedDistanceTo(bb) {
        return Bb.q.Dot(bb, this.normal) + this.d
      }
      static FromArray(bb) {
        return new Ob(bb[0], bb[1], bb[2], bb[3])
      }
      static FromPoints(bb, ub, hb) {
        const Bb = new Ob(0, 0, 0, 0);
        return Bb.copyFromPoints(bb, ub, hb), Bb
      }
      static FromPositionAndNormal(bb, ub) {
        const hb = new Ob(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(bb, ub, hb)
      }
      static FromPositionAndNormalToRef(bb, ub, hb) {
        return hb.normal.mD(ub), hb.normal.normalize(), hb.d = -bb.dot(hb.normal), hb
      }
      static SignedDistanceToPlaneFromPositionAndNormal(bb, ub, hb) {
        const Ob = -(ub.x * bb.x + ub.y * bb.y + ub.z * bb.z);
        return Bb.q.Dot(hb, ub) + Ob
      }
    }
    Ob._TmpMatrix = Bb.d.Identity()
  },
  37699: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Bb
    });
    class Bb {
      constructor(bb, ub, hb, Bb) {
        this.x = bb, this.y = ub, this.width = hb, this.height = Bb
      }
      toGlobal(bb, ub) {
        return new Bb(this.x * bb, this.y * ub, this.width * bb, this.height * ub)
      }
      toGlobalToRef(bb, ub, hb) {
        return hb.x = this.x * bb, hb.y = this.y * ub, hb.width = this.width * bb, hb.height = this.height * ub, this
      }
      clone() {
        return new Bb(this.x, this.y, this.width, this.height)
      }
    }
  },
  38296: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Gb
    });
    var Bb = hb(38302);
    const Ob = (bb, ub, hb) => bb ? bb.getClassName && "Mesh" === bb.getClassName() ? null : !bb.getClassName || "SubMesh" !== bb.getClassName() && "PhysicsBody" !== bb.getClassName() ? bb.clone ? bb.clone() : Array.isArray(bb) ? bb.slice() : hb && "object" === typeof bb ? {
      ...bb
    } : null : bb.clone(ub) : null;
    class Gb {
      static DeepCopy(bb, ub, hb, Gb) {
        let Ub = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Lb = function(bb) {
          const ub = [];
          do {
            const hb = Object.getOwnPropertyNames(bb);
            for (const bb of hb) - 1 === ub.indexOf(bb) && ub.push(bb)
          } while (bb = Object.getPrototypeOf(bb));
          return ub
        }(bb);
        for (const Sb of Lb) {
          if ("_" === Sb[0] && (!Gb || -1 === Gb.indexOf(Sb))) continue;
          if (Sb.endsWith("Observable")) continue;
          if (hb && -1 !== hb.indexOf(Sb)) continue;
          const Lb = bb[Sb],
            ab = typeof Lb;
          if ("function" !== ab) try {
            if ("object" === ab)
              if (Lb instanceof Uint8Array) ub[Sb] = Uint8Array.from(Lb);
              else if (Lb instanceof Array) {
              if (ub[Sb] = [], Lb.length > 0)
                if ("object" == typeof Lb[0])
                  for (let bb = 0; bb < Lb.length; bb++) {
                    const hb = Ob(Lb[bb], ub, Ub); - 1 === ub[Sb].indexOf(hb) && ub[Sb].push(hb)
                  } else ub[Sb] = Lb.slice(0)
            } else ub[Sb] = Ob(Lb, ub, Ub);
            else ub[Sb] = Lb
          } catch (Yb) {
            Bb.b.Warn(Yb.message)
          }
        }
      }
    }
  },
  37507: (bb, ub, hb) => {
    function Bb() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (bb => {
        const ub = 16 * Math.random() | 0;
        return ("x" === bb ? ub : 3 & ub | 8).toString(16)
      }))
    }
    hb.d(ub, {
      d: () => Bb
    })
  },
  38302: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Bb
    });
    class Bb {
      static _CheckLimit(bb, ub) {
        let hb = Bb._LogLimitOutputs[bb];
        return hb ? hb.current++ : (hb = {
          limit: ub,
          current: 1
        }, Bb._LogLimitOutputs[bb] = hb), hb.current <= hb.limit
      }
      static _GenerateLimitMessage(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const hb = Bb._LogLimitOutputs[bb];
        if (!hb || !Bb.MessageLimitReached) return;
        const Ob = this._Levels[ub];
        hb.current === hb.limit && Bb[Ob.name](Bb.MessageLimitReached.replace(/%LIMIT%/g, "" + hb.limit).replace(/%TYPE%/g, Ob.name ?? ""))
      }
      static _AddLogEntry(bb) {
        Bb._LogCache = bb + Bb._LogCache, Bb.OnNewCacheEntry && Bb.OnNewCacheEntry(bb)
      }
      static _FormatMessage(bb) {
        const ub = bb => bb < 10 ? "0" + bb : "" + bb,
          hb = new Date;
        return "[" + ub(hb.getHours()) + ":" + ub(hb.getMinutes()) + ":" + ub(hb.getSeconds()) + "]: " + bb
      }
      static _LogDisabled(bb, ub) {}
      static _LogEnabled() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ub = arguments.length > 1 ? arguments[1] : void 0,
          hb = arguments.length > 2 ? arguments[2] : void 0;
        const Ob = Array.isArray(ub) ? ub[0] : ub;
        if (void 0 !== hb && !Bb._CheckLimit(Ob, hb)) return;
        const Gb = Bb._FormatMessage(Ob),
          Ub = this._Levels[bb],
          Lb = Array.isArray(ub) ? ub.slice(1) : [];
        Ub.logFunc && Ub.logFunc("BJS - " + Gb, ...Lb);
        const Yb = `<div style='color:${Ub.color}'>${Gb}</div><br>`;
        Bb._AddLogEntry(Yb), Bb._GenerateLimitMessage(Ob, bb)
      }
      static get LogCache() {
        return Bb._LogCache
      }
      static ClearLogCache() {
        Bb._LogCache = "", Bb._LogLimitOutputs = {}, Bb.errorsCount = 0
      }
      static set LogLevels(bb) {
        Bb.Log = Bb._LogDisabled, Bb.Warn = Bb._LogDisabled, Bb.Error = Bb._LogDisabled;
        const ub = [Bb.MessageLogLevel, Bb.WarningLogLevel, Bb.ErrorLogLevel];
        for (const hb of ub)
          if ((bb & hb) === hb) {
            const bb = this._Levels[hb];
            Bb[bb.name] = Bb._LogEnabled.bind(Bb, hb)
          }
      }
    }
    Bb.NoneLogLevel = 0, Bb.MessageLogLevel = 1, Bb.WarningLogLevel = 2, Bb.ErrorLogLevel = 4, Bb.AllLogLevel = 7, Bb.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Bb._LogCache = "", Bb._LogLimitOutputs = {}, Bb._Levels = [{}, {
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
    }], Bb.errorsCount = 0, Bb.Log = Bb._LogEnabled.bind(Bb, Bb.MessageLogLevel), Bb.Warn = Bb._LogEnabled.bind(Bb, Bb.WarningLogLevel), Bb.Error = Bb._LogEnabled.bind(Bb, Bb.ErrorLogLevel)
  },
  60585: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      CreateScreenshot: () => Nb,
      CreateScreenshotAsync: () => sb,
      CreateScreenshotForFrameGraphAsync: () => Pb,
      CreateScreenshotUsingRenderTarget: () => mb,
      CreateScreenshotUsingRenderTargetAsync: () => Ib,
      CreateScreenshotWithResizeAsync: () => Mb,
      RegisterScreenshotTools: () => Vb,
      ScreenshotTools: () => Eb
    });
    var Bb = hb(39932),
      Ob = hb(41267),
      Gb = hb(41248),
      Ub = hb(39488),
      Lb = hb(41255),
      Yb = hb(36748),
      Sb = hb(36727);
    class ab extends Lb.f {
      static _GetDefines(bb) {
        if (!bb) return null;
        return bb.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
      }
      _gatherImports(bb, ub) {
        bb ? (this._webGPUReady = !0, ub.push(Promise.all([hb.e(368).then((() => hb(60940))), hb.e(369).then((() => hb(60946)))]))) : ub.push(Promise.all([hb.e(370).then((() => hb(60949))), hb.e(371).then((() => hb(60951)))]))
      }
      constructor(bb) {
        const ub = {
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: bb,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || Yb.b.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          vertexShader: ab.VertexUrl,
          fragmentShader: ab.FragmentUrl,
          uniforms: ab.Uniforms
        };
        super({
          ...ub,
          defines: ab._GetDefines(ub.engine)
        }), this.texelSize = new Sb.m(0, 0)
      }
      bind() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.bind(bb), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
      }
    }
    ab.VertexUrl = "fxaa", ab.FragmentUrl = "fxaa", ab.Uniforms = ["texelSize"];
    class Hb extends Gb.c {
      getClassName() {
        return "FxaaPostProcess"
      }
      constructor(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Ob = arguments.length > 3 ? arguments[3] : void 0,
          Gb = arguments.length > 4 ? arguments[4] : void 0,
          Ub = arguments.length > 5 ? arguments[5] : void 0,
          Lb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const Yb = {
          uniforms: ab.Uniforms,
          size: "number" === typeof ub ? ub : void 0,
          camera: hb,
          samplingMode: Ob || Bb.f.BILINEAR_SAMPLINGMODE,
          engine: Gb,
          reusable: Ub,
          textureType: Lb,
          ...ub
        };
        super(bb, ab.FragmentUrl, {
          effectWrapper: "number" !== typeof ub && ub.effectWrapper ? void 0 : new ab(bb, Gb, Yb),
          ...Yb
        }), this.onApplyObservable.add((bb => {
          this._effectWrapper.texelSize = this.texelSize
        }))
      }
      static _Parse(bb, ub, hb, Bb) {
        return Ub.c.Parse((() => new Hb(bb.name, bb.options, ub, bb.renderTargetSamplingMode, hb.UX(), bb.reusable)), bb, hb, Bb)
      }
    }
    var wb = hb(38302),
      Zb = hb(39559),
      Xb = hb(41277),
      pb = hb(41260),
      ob = hb(39343);
    const Ab = 0;
    class lb {
      constructor(bb, ub, hb) {
        this.name = bb, this._parentTask = ub, this._context = hb, this.disabled = !1
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
    class Kb extends lb {
      static IsObjectListPass(bb) {
        return void 0 !== bb.setObjectList
      }
      get objectList() {
        return this._objectList
      }
      setObjectList(bb) {
        this._objectList = bb
      }
      constructor(bb, ub, hb, Bb) {
        super(bb, ub, hb), this._engine = Bb
      }
      _isValid() {
        const bb = super._isValid();
        return bb || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
      }
    }
    class Wb extends lb {
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
      constructor(bb, ub, hb, Bb) {
        super(bb, ub, hb), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = Bb
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
            for (const ub of bb) this._dependencies.add(ub);
          else this._dependencies.add(bb)
      }
      collectDependencies(bb) {
        const ub = this._dependencies.keys();
        for (let hb = ub.next(); !0 !== hb.done; hb = ub.next()) bb.add(hb.value);
        if (void 0 !== this._renderTarget)
          if (Array.isArray(this._renderTarget))
            for (const hb of this._renderTarget) void 0 !== hb && bb.add(hb);
          else bb.add(this._renderTarget);
        void 0 !== this._renderTargetDepth && bb.add(this._renderTargetDepth)
      }
      setOutputLayerAndFaceIndices(bb) {
        const ub = this.frameGraphRenderTarget.renderTargetWrapper;
        if (ub)
          for (const hb of bb) ub.setLayerAndFaceIndex(hb.targetIndex, hb.layerIndex, hb.faceIndex)
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
    var Cb = hb(36753);
    class db {
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
      constructor(bb, ub) {
        this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new Cb.e, this.onBeforeTaskExecute = new Cb.e, this.onAfterTaskExecute = new Cb.e, this.name = bb, this._frameGraph = ub, this._reset()
      }
      _reset() {
        for (const bb of this._passes) bb._dispose();
        for (const bb of this._passesDisabled) bb._dispose();
        this._passes.length = 0, this._passesDisabled.length = 0
      }
      _addPass(bb, ub) {
        ub ? this._passesDisabled.push(bb) : this._passes.push(bb)
      }
      _checkTask() {
        let bb, ub = null,
          hb = null;
        for (const Lb of this._passes) {
          const Bb = Lb._isValid();
          if (Bb) throw new Error(`Pass "${Lb.name}" is not valid. ${Bb}`);
          if (Wb.IsRenderPass(Lb)) {
            const bb = Array.isArray(Lb.renderTarget) ? Lb.renderTarget : [Lb.renderTarget];
            ub = [];
            for (const hb of bb) void 0 !== hb && ub.push(this._frameGraph.textureManager.getTextureFromHandle(hb));
            hb = void 0 !== Lb.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(Lb.renderTargetDepth) : null
          } else Kb.IsObjectListPass(Lb) && (bb = Lb.objectList)
        }
        let Bb, Ob = null,
          Gb = [],
          Ub = null;
        for (const Lb of this._passesDisabled) {
          const bb = Lb._isValid();
          if (bb) throw new Error(`Pass "${Lb.name}" is not valid. ${bb}`);
          if (Wb.IsRenderPass(Lb)) {
            const bb = Array.isArray(Lb.renderTarget) ? Lb.renderTarget : [Lb.renderTarget];
            Ob = [];
            for (const ub of bb) void 0 !== ub && Ob.push(this._frameGraph.textureManager.getTextureFromHandle(ub));
            Gb = bb, Ub = void 0 !== Lb.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(Lb.renderTargetDepth) : null
          } else Kb.IsObjectListPass(Lb) && (Bb = Lb.objectList)
        }
        if (this._passesDisabled.length > 0) {
          if (!this._checkSameRenderTarget(ub, Ob)) {
            let bb = !0;
            for (const ub of Gb)
              if (void 0 !== ub && !this._frameGraph.textureManager.isHistoryTexture(ub)) {
                bb = !1;
                break
              } if (!bb) throw new Error(`The output texture of the task "${this.name}" is different when it is enabled or disabled.`)
          }
          if (hb !== Ub && null !== Ub) throw new Error(`The output depth texture of the task "${this.name}" is different when it is enabled or disabled.`);
          if (bb !== Bb && null !== Bb) throw new Error(`The output object list of the task "${this.name}" is different when it is enabled or disabled.`)
        }
      }
      _execute() {
        const bb = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
        this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const ub of bb) ub._execute()
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
      _checkSameRenderTarget(bb, ub) {
        if (null === bb || null === ub) return bb === ub;
        if (bb.length !== ub.length) return !1;
        for (let hb = 0; hb < bb.length; hb++)
          if (bb[hb] !== ub[hb]) return !1;
        return !0
      }
    }
    class rb extends db {
      get alphaMode() {
        return this.postProcess.alphaMode
      }
      set alphaMode(bb) {
        this.postProcess.alphaMode = bb
      }
      get drawWrapper() {
        return this._postProcessDrawWrapper
      }
      constructor(bb, ub, hb) {
        super(bb, ub), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = hb, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture = this._frameGraph.textureManager.createDanglingHandle(), this.outputDepthAttachmentTexture = this._frameGraph.textureManager.createDanglingHandle()
      }
      isReady() {
        return this.postProcess.isReady()
      }
      getClassName() {
        return "FrameGraphPostProcessTask"
      }
      record() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ub = arguments.length > 1 ? arguments[1] : void 0,
          hb = arguments.length > 2 ? arguments[2] : void 0;
        if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
        const Bb = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
        if (Bb && (Bb.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, Bb), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentTexture, this.depthAttachmentTexture), Bb) {
          const bb = this._frameGraph.textureManager.getTextureAbsoluteDimensions(Bb);
          this._sourceWidth = bb.width, this._sourceHeight = bb.height
        }
        const Ob = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
        this._outputWidth = Ob.size.width, this._outputHeight = Ob.size.height;
        const Gb = this._frameGraph.addRenderPass(this.name);
        if (Gb.depthReadOnly = this.depthReadOnly, Gb.stencilReadOnly = this.stencilReadOnly, Gb.addDependencies(this.sourceTexture), Gb.setRenderTarget(this.outputTexture), Gb.setRenderTargetDepth(this.depthAttachmentTexture), Gb.setExecuteFunc((bb => {
            bb.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && bb.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), ub?.(bb), this.viewport && bb.setViewport(this.viewport), bb.applyFullScreenEffect(this._postProcessDrawWrapper, (() => {
              void 0 !== this.sourceTexture && bb.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), hb?.(bb), this.postProcess.bind()
            }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), bb.restoreDefaultFramebuffer(), bb.popDebugGroup()
          })), !bb) {
          const bb = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
          bb.depthReadOnly = this.depthReadOnly, bb.stencilReadOnly = this.stencilReadOnly, bb.addDependencies(this.sourceTexture), bb.setRenderTarget(this.outputTexture), bb.setRenderTargetDepth(this.depthAttachmentTexture), bb.setExecuteFunc((bb => {
            void 0 !== this.sourceTexture && 0 === this.alphaMode && (this.viewport && bb.setViewport(this.viewport), bb.copyTexture(this.sourceTexture, void 0, void 0 !== this.viewport))
          }))
        }
        return Gb
      }
      dispose() {
        this.postProcess.dispose(), super.dispose()
      }
    }
    class jb extends rb {
      constructor(bb, ub, hb) {
        super(bb, ub, hb || new ab(bb, ub.engine))
      }
      getClassName() {
        return "FrameGraphFXAATask"
      }
      record() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ub = arguments.length > 1 ? arguments[1] : void 0,
          hb = arguments.length > 2 ? arguments[2] : void 0;
        const Bb = super.record(bb, ub, hb);
        return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, Bb
      }
    }
    var nb = hb(41271);
    class Db extends rb {
      constructor(bb, ub, hb) {
        super(bb, ub, hb || new nb.h(bb, ub.engine))
      }
      getClassName() {
        return "FrameGraphPassTask"
      }
    }
    var xb = hb(39551),
      zb = hb(39638),
      gb = hb(39603),
      ib = hb(39692),
      vb = hb(36893);
    class tb {
      getRenderCamera(bb) {
        if (this._renderCamera) return this._renderCamera;
        {
          let ub;
          return ub = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, bb && ub && ub.isRigCamera ? ub.rigParent : ub
        }
      }
      setRenderCamera(bb) {
        this._renderCamera = bb
      }
      _getSharedGizmoLight() {
        return this._sharedGizmoLight || (this._sharedGizmoLight = new ib.b("shared gizmo light", new Sb.q(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = vb.b.Gray()), this._sharedGizmoLight
      }
      static get DefaultUtilityLayer() {
        return null == tb._DefaultUtilityLayer ? tb._CreateDefaultUtilityLayerFromScene(Yb.b.LastCreatedScene) : tb._DefaultUtilityLayer
      }
      static _CreateDefaultUtilityLayerFromScene(bb) {
        return tb._DefaultUtilityLayer = new tb(bb), tb._DefaultUtilityLayer.originalScene.XN.addOnce((() => {
          tb._DefaultUtilityLayer = null
        })), tb._DefaultUtilityLayer
      }
      static get DefaultKeepDepthUtilityLayer() {
        return null == tb._DefaultKeepDepthUtilityLayer ? tb._CreateDefaultKeepUtilityLayerFromScene(Yb.b.LastCreatedScene) : tb._DefaultKeepDepthUtilityLayer
      }
      static _CreateDefaultKeepUtilityLayerFromScene(bb) {
        return tb._DefaultKeepDepthUtilityLayer = new tb(bb), tb._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, tb._DefaultKeepDepthUtilityLayer.originalScene.XN.addOnce((() => {
          tb._DefaultKeepDepthUtilityLayer = null
        })), tb._DefaultKeepDepthUtilityLayer
      }
      constructor(bb) {
        let ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.originalScene = bb, this.handleEvents = ub, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.processAllEvents = !1, this.pickingEnabled = !0, this.onPointerOutObservable = new Cb.e, this.utilityLayerScene = new xb.f(bb.UX(), {
          virtual: !0,
          useFloatingOrigin: bb.floatingOriginMode
        }), this.utilityLayerScene.useRightHandedSystem = bb.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), ub && (this._originalPointerObserver = bb.onPrePointerObservable.add((ub => {
          if (!this.utilityLayerScene.activeCamera) return;
          if (!this.pickingEnabled) return;
          if (!this.processAllEvents && ub.type !== zb.d.POINTERMOVE && ub.type !== zb.d.POINTERUP && ub.type !== zb.d.POINTERDOWN && ub.type !== zb.d.POINTERDOUBLETAP) return;
          this.utilityLayerScene.pointerX = bb.pointerX, this.utilityLayerScene.pointerY = bb.pointerY;
          const hb = ub.event;
          if (bb.isPointerCaptured(hb.pointerId)) return void(this._pointerCaptures[hb.pointerId] = !1);
          const Bb = hb => {
              let Bb;
              if (ub.nearInteractionPickingInfo) Bb = ub.nearInteractionPickingInfo.pickedMesh.ZN() == hb ? ub.nearInteractionPickingInfo : new gb.d;
              else if (hb !== this.utilityLayerScene && ub.originalPickingInfo) Bb = ub.originalPickingInfo;
              else {
                let Ob = null;
                this._renderCamera && (Ob = hb._activeCamera, hb._activeCamera = this._renderCamera, ub.ray = null), Bb = ub.ray ? hb.pickWithRay(ub.ray) : hb.xw(bb.pointerX, bb.pointerY), Ob && (hb._activeCamera = Ob)
              }
              return Bb
            },
            Ob = Bb(this.utilityLayerScene);
          if (!ub.ray && Ob && (ub.ray = Ob.ray), ub.originalPickingInfo?.aimTransform && Ob && (Ob.aimTransform = ub.originalPickingInfo.aimTransform, Ob.gripTransform = ub.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(ub), this.onlyCheckPointerDownEvents && ub.type != zb.d.POINTERDOWN) return ub.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new zb.g(ub.type, ub.event, Ob), ub.type), void(ub.type === zb.d.POINTERUP && this._pointerCaptures[hb.pointerId] && (this._pointerCaptures[hb.pointerId] = !1));
          if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) Ob && Ob.hit && (ub.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new zb.g(ub.type, ub.event, Ob), ub.type), ub.skipOnPointerObservable = !0);
          else {
            const hb = Bb(bb),
              Gb = ub.event;
            hb && Ob && (0 === Ob.distance && hb.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(hb.pickedMesh) ? (this._notifyObservers(ub, hb, Gb), ub.skipOnPointerObservable = !0) : ub.type === zb.d.POINTERDOWN ? (this._pointerCaptures[Gb.pointerId] = !0, this._notifyObservers(ub, hb, Gb)) : ub.type !== zb.d.POINTERMOVE && ub.type !== zb.d.POINTERUP || (this._lastPointerEvents[Gb.pointerId] && (this.onPointerOutObservable.notifyObservers(Gb.pointerId), delete this._lastPointerEvents[Gb.pointerId]), this._notifyObservers(ub, hb, Gb)) : !this._pointerCaptures[Gb.pointerId] && (Ob.distance < hb.distance || 0 === hb.distance) ? (this._notifyObservers(ub, Ob, Gb), ub.skipOnPointerObservable || (ub.skipOnPointerObservable = Ob.distance > 0)) : !this._pointerCaptures[Gb.pointerId] && Ob.distance >= hb.distance && (this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(hb.pickedMesh) ? (this._notifyObservers(ub, hb, Gb), ub.skipOnPointerObservable = !0) : (ub.type !== zb.d.POINTERMOVE && ub.type !== zb.d.POINTERUP || this._lastPointerEvents[Gb.pointerId] && (this.onPointerOutObservable.notifyObservers(Gb.pointerId), delete this._lastPointerEvents[Gb.pointerId]), this._notifyObservers(ub, Ob, Gb))), ub.type === zb.d.POINTERUP && this._pointerCaptures[Gb.pointerId] && (this._pointerCaptures[Gb.pointerId] = !1))
          }
        })), this._originalPointerObserver && bb.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, hb || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((bb => {
          this.shouldRender && bb == this.getRenderCamera() && this.render()
        }))), this._sceneDisposeObserver = this.originalScene.XN.add((() => {
          this.dispose()
        })), this._updateCamera()
      }
      _notifyObservers(bb, ub, hb) {
        bb.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new zb.g(bb.type, bb.event, ub), bb.type), this._lastPointerEvents[hb.pointerId] = !0)
      }
      render() {
        if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
          const bb = this.utilityLayerScene.activeCamera.ZN(),
            ub = this.utilityLayerScene.activeCamera;
          ub._scene = this.utilityLayerScene, ub.leftCamera && (ub.leftCamera._scene = this.utilityLayerScene), ub.rightCamera && (ub.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), ub._scene = bb, ub.leftCamera && (ub.leftCamera._scene = bb), ub.rightCamera && (ub.rightCamera._scene = bb)
        }
      }
      dispose() {
        this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.XN.remove(this._sceneDisposeObserver), this._originalPointerObserver && this.originalScene.onPrePointerObservable.remove(this._originalPointerObserver), this.utilityLayerScene.dispose()
      }
      _updateCamera() {
        this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
      }
    }
    tb._DefaultUtilityLayer = null, tb._DefaultKeepDepthUtilityLayer = null;
    const Jb = {
      FindMainCamera: function(bb) {
        return bb.findMainCamera()
      },
      FindMainObjectRenderer: function(bb) {
        return bb.findMainObjectRenderer()
      },
      CreateUtilityLayerRenderer: function(bb) {
        let ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const hb = bb.Xp,
          Bb = new tb(hb, ub, !0);
        Bb.utilityLayerScene.activeCamera = hb.activeCamera;
        let Ob = Jb.FindMainCamera(hb.frameGraph);
        !Ob && hb.cameras.length > 0 && (Ob = hb.cameras[0]), Ob && (Bb.setRenderCamera(Ob), Bb.utilityLayerScene.activeCamera = Ob);
        const Gb = hb.onAfterRenderObservable.add((() => {
          Bb.render()
        }));
        return Bb.utilityLayerScene.XN.addOnce((() => {
          hb.onAfterRenderObservable.remove(Gb)
        })), Bb
      }
    };
    let eb = null;

    function Nb(bb, ub, hb, Bb) {
      let Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        Gb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Ub = arguments.length > 6 ? arguments[6] : void 0,
        Lb = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Yb = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
      const {
        height: Sb,
        width: ab
      } = qb(bb, ub, hb);
      if (!Sb || !ab) return void wb.b.Error("Invalid 'size' parameter !");
      const Hb = ub.ZN();
      let Xb = Hb.activeCamera !== ub;
      if (Hb.frameGraph) {
        const bb = Jb.FindMainObjectRenderer(Hb.frameGraph);
        bb && (Xb = bb.camera !== ub)
      }
      Xb ? mb(bb, ub, hb, (bb => {
        if (Gb) {
          const ub = new Blob([bb]);
          Zb.k.DownloadBlob(ub), Bb && Bb("")
        } else Bb && Bb(bb)
      }), Ob, 1, bb.getCreationOptions().antialias, void 0, void 0, void 0, void 0, Ub) : bb.onEndFrameObservable.addOnce((() => {
        eb || (eb = document.createElement("canvas")), eb.width = ab, eb.height = Sb;
        const ub = eb.getContext("2d"),
          hb = bb.getRenderingCanvas();
        if (!ub || !hb) return void wb.b.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
        const Xb = hb.width,
          pb = hb.height,
          ob = eb.width,
          Ab = eb.height,
          lb = ob / Xb,
          Kb = Ab / pb,
          Wb = Lb ? Math.max(lb, Kb) : Math.min(lb, Kb),
          Cb = Xb * Wb,
          db = pb * Wb,
          rb = (ob - Cb) / 2,
          jb = (Ab - db) / 2;
        ub.save(), ub.fillStyle = Yb ? Hb.clearColor.toHexString() : "rgba(0, 0, 0, 0)", ub.fillRect(0, 0, ab, Sb), ub.restore(), ub.drawImage(hb, 0, 0, Xb, pb, rb, jb, Cb, db), Gb ? (Zb.k.EncodeScreenshotCanvasData(eb, void 0, Ob, void 0, Ub), Bb && Bb("")) : Zb.k.EncodeScreenshotCanvasData(eb, Bb, Ob, void 0, Ub)
      }))
    }
    async function sb(bb, ub, hb) {
      let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Ob = arguments.length > 4 ? arguments[4] : void 0,
        Gb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Ub = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Lb = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      return await new Promise(((Yb, Sb) => {
        Nb(bb, ub, hb, (bb => {
          "undefined" !== typeof bb ? Yb(bb) : Sb(new Error("Data is undefined"))
        }), Bb, Lb, Ob, Gb, Ub)
      }))
    }
    async function Mb(bb, ub, hb, Bb) {
      let Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        Gb = arguments.length > 5 ? arguments[5] : void 0,
        Ub = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return await new Promise((Lb => {
        Nb(bb, ub, {
          width: hb,
          height: Bb
        }, (() => {
          Lb()
        }), Ob, !0, Gb, Ub)
      }))
    }

    function mb(bb, ub, Gb, Ub) {
      let Lb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        Yb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
        Sb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        ab = arguments.length > 7 ? arguments[7] : void 0,
        Zb = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Ab = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        lb = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
        Kb = arguments.length > 11 ? arguments[11] : void 0,
        Wb = arguments.length > 12 ? arguments[12] : void 0,
        Cb = arguments.length > 13 ? arguments[13] : void 0,
        db = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
        rb = arguments.length > 15 ? arguments[15] : void 0;
      const jb = ub.ZN();
      if (jb.frameGraph) return void Pb(jb.frameGraph, ub, Gb, Lb, Yb, Sb, ab, Kb, Cb, !Ub).then((bb => {
        Ub && Ub(bb)
      }));
      const {
        height: nb,
        width: Db,
        finalWidth: xb,
        finalHeight: zb
      } = qb(bb, ub, Gb), gb = {
        width: Db,
        height: nb
      };
      if (!nb || !Db) return void wb.b.Error("Invalid 'size' parameter !");
      bb.skipFrameRender = !0;
      const ib = bb.getRenderWidth,
        vb = bb.getRenderHeight;
      bb.getRenderWidth = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && bb._currentRenderTarget ? bb._currentRenderTarget.width : Db
      }, bb.getRenderHeight = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && bb._currentRenderTarget ? bb._currentRenderTarget.height : nb
      }, bb.onResizeObservable.hasObservers() && bb.onResizeObservable.notifyObservers(bb);
      const tb = new Ob.d("screenShot", gb, jb, !1, !1, 0, !1, Bb.f.BILINEAR_SAMPLINGMODE, void 0, Ab, void 0, void 0, void 0, Yb);
      tb.renderList = jb.meshes.slice(), tb.samples = Yb, tb.renderSprites = Zb, tb.activeCamera = ub, tb.forceLayerMaskCheck = lb, Wb?.(tb);
      const Jb = Cb || Xb.DumpData,
        eb = () => {
          jb.incrementRenderId(), jb.resetCachedMaterial(), (0, ob.g)((() => tb.isReadyForRendering() && ub.isReady(!0)), (() => {
            bb.onEndFrameObservable.addOnce((() => {
              xb === Db && zb === nb ? tb.readPixels(void 0, void 0, void 0, !1).then((bb => {
                Jb(Db, nb, bb, Ub, Lb, ab, !0, void 0, Kb), tb.dispose()
              })) : (bb.isWebGPU ? hb.e(364).then((() => hb(60891))) : hb.e(365).then((() => hb(60896)))).then((async () => await (0, pb.b)("pass", tb.getInternalTexture(), jb, void 0, void 0, void 0, xb, zb).then((ub => {
                bb._readTexturePixels(ub, xb, zb, -1, 0, null, !0, !1, 0, 0).then((bb => {
                  Jb(xb, zb, bb, Ub, Lb, ab, !0, void 0, Kb), ub.dispose()
                }))
              }))))
            })), jb.incrementRenderId(), jb.resetCachedMaterial();
            const Bb = jb.activeCamera,
              Ob = jb.activeCameras,
              Gb = ub.outputRenderTarget,
              Yb = jb.spritesEnabled;
            jb.activeCamera = ub, jb.activeCameras = null, ub.outputRenderTarget = tb, jb.spritesEnabled = Zb;
            const Sb = jb.meshes;
            jb.meshes = tb.renderList || jb.meshes;
            try {
              jb.render()
            } finally {
              jb.activeCamera = Bb, jb.activeCameras = Ob, ub.outputRenderTarget = Gb, jb.spritesEnabled = Yb, jb.meshes = Sb, bb.getRenderWidth = ib, bb.getRenderHeight = vb, bb.onResizeObservable.hasObservers() && bb.onResizeObservable.notifyObservers(bb), ub.getProjectionMatrix(!0), bb.skipFrameRender = !1
            }
          }), (() => {
            bb.skipFrameRender = !1, bb.getRenderWidth = ib, bb.getRenderHeight = vb, rb?.()
          }), void 0, db)
        };
      if (Sb) {
        const bb = new Hb("antialiasing", 1, jb.activeCamera);
        tb.addPostProcess(bb), bb.autoClear = !0, bb.onEffectCreatedObservable.addOnce((bb => {
          bb.isReady() ? eb() : bb.onCompiled = () => {
            eb()
          }
        }))
      } else eb()
    }
    async function Ib(bb, ub, hb) {
      let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        Gb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Ub = arguments.length > 6 ? arguments[6] : void 0,
        Lb = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Yb = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Sb = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
        ab = arguments.length > 10 ? arguments[10] : void 0,
        Hb = arguments.length > 11 ? arguments[11] : void 0,
        wb = arguments.length > 12 ? arguments[12] : void 0;
      return await new Promise(((Zb, Xb) => {
        mb(bb, ub, hb, (bb => {
          "undefined" !== typeof bb ? Zb(bb) : Xb(new Error("Data is undefined"))
        }), Bb, Ob, Gb, Ub, Lb, Yb, Sb, ab, Hb, wb)
      }))
    }
    async function Pb(bb, ub, hb) {
      let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        Gb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Ub = arguments.length > 6 ? arguments[6] : void 0,
        Lb = arguments.length > 7 ? arguments[7] : void 0,
        Yb = arguments.length > 8 ? arguments[8] : void 0,
        Sb = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        ab = arguments.length > 10 ? arguments[10] : void 0;
      const Hb = bb.engine,
        wb = bb.textureManager,
        {
          height: Zb,
          width: pb,
          finalWidth: ob,
          finalHeight: lb
        } = qb(Hb, ub, hb),
        Kb = {
          width: pb,
          height: Zb
        },
        Wb = Yb || Xb.DumpData,
        Cb = bb.tasks,
        db = Cb.length,
        rb = bb.pausedExecution,
        nb = Hb.getCaps().parallelShaderCompile;
      wb.setBackBufferTextures(0, 0, {
        size: Kb,
        options: {
          createMipMaps: !1,
          samples: Ob,
          types: [0],
          formats: [5],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot color"]
        },
        sizeIsPercentage: !1
      }, {
        size: Kb,
        options: {
          createMipMaps: !1,
          samples: Ob,
          types: [0],
          formats: [Hb.isStencilEnable ? 13 : 14],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot depth"]
        },
        sizeIsPercentage: !1
      });
      let xb = Ab;
      if (Gb) {
        const ub = new jb("fxaa", bb);
        ub.sourceTexture = xb, xb = ub.outputTexture, bb.addTask(ub)
      }
      if (ob !== pb || lb !== Zb) {
        const ub = new Db("pass", bb);
        ub.sourceTexture = xb, ub.targetTexture = bb.textureManager.createRenderTargetTexture("pass_output", {
          size: {
            width: ob,
            height: lb
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
        }), xb = ub.outputTexture, bb.addTask(ub)
      }
      const zb = Jb.FindMainObjectRenderer(bb);
      let gb = null;
      zb && (gb = zb.camera, zb.camera = ub), Hb.getCaps().parallelShaderCompile = void 0, await bb.buildAsync();
      const ib = ab ?? (wb.hasHistoryTextures ? 32 : 1);
      for (let Xb = 0; Xb < ib; ++Xb) bb.execute();
      bb.pausedExecution = !0, Hb.getCaps().parallelShaderCompile = nb;
      for (let Xb = db; Xb < Cb.length; ++Xb) bb.tasks[Xb].dispose();
      bb.tasks.length = db, zb && gb && (zb.camera = gb);
      const vb = bb.textureManager.getTextureFromHandle(xb);
      return vb.incrementReferences(), wb.resetBackBufferTextures(), await bb.buildAsync(), bb.pausedExecution = rb, new Promise((bb => {
        Hb._readTexturePixels(vb, ob, lb, -1, 0, null, !0, !1, 0, 0).then((async ub => {
          vb.dispose(), Wb(ob, lb, ub, Sb ? void 0 : ub => bb(ub), Bb, Ub, !0, void 0, Lb), Sb && bb(null)
        }))
      }))
    }

    function qb(bb, ub, hb) {
      let Bb = 0,
        Ob = 0,
        Gb = 0,
        Ub = 0;
      if ("object" === typeof hb) {
        const Lb = hb.precision ? Math.abs(hb.precision) : 1;
        hb.width && hb.height ? (Bb = hb.height * Lb, Ob = hb.width * Lb) : hb.width && !hb.height ? (Ob = hb.width * Lb, Bb = Math.round(Ob / bb.getAspectRatio(ub))) : hb.height && !hb.width ? (Bb = hb.height * Lb, Ob = Math.round(Bb * bb.getAspectRatio(ub))) : (Ob = Math.round(bb.getRenderWidth() * Lb), Bb = Math.round(Ob / bb.getAspectRatio(ub))), hb.finalWidth && hb.finalHeight ? (Ub = hb.finalHeight, Gb = hb.finalWidth) : hb.finalWidth && !hb.finalHeight ? (Gb = hb.finalWidth, Ub = Math.round(Gb / bb.getAspectRatio(ub))) : hb.finalHeight && !hb.finalWidth ? (Ub = hb.finalHeight, Gb = Math.round(Ub * bb.getAspectRatio(ub))) : (Gb = Ob, Ub = Bb)
      } else isNaN(hb) || (Bb = hb, Ob = hb, Gb = hb, Ub = hb);
      return Ob && (Ob = Math.floor(Ob)), Bb && (Bb = Math.floor(Bb)), Gb && (Gb = Math.floor(Gb)), Ub && (Ub = Math.floor(Ub)), {
        height: 0 | Bb,
        width: 0 | Ob,
        finalWidth: 0 | Gb,
        finalHeight: 0 | Ub
      }
    }
    const Eb = {
      CreateScreenshot: Nb,
      CreateScreenshotAsync: sb,
      CreateScreenshotWithResizeAsync: Mb,
      CreateScreenshotUsingRenderTarget: mb,
      CreateScreenshotUsingRenderTargetAsync: Ib,
      CreateScreenshotForFrameGraphAsync: Pb
    };
    let yb = !1;

    function Vb() {
      if (yb) return;
      yb = !0;
      Zb.k.CreateScreenshot = Nb, Zb.k.CreateScreenshotAsync = sb, Zb.k.CreateScreenshotUsingRenderTarget = mb, Zb.k.CreateScreenshotUsingRenderTargetAsync = Ib
    }
    Vb()
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);