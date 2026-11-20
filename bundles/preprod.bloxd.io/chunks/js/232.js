export const id = 232;
export const ids = [232, 233];
export const modules = {
  39993: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => uq,
      e: () => Wq
    });
    var Yq = gq(39757),
      lq = gq(39759),
      Oq = gq(37139),
      mq = gq(37289),
      xq = gq(39995),
      Aq = gq(39960),
      cq = gq(37171);
    let uq = (() => {
        var qq;
        let Eq, gq, Aq = xq.c,
          cq = [],
          uq = [],
          Bq = [],
          Wq = [];
        return qq = class extends Aq {
          constructor(qq, Eq, gq, lq) {
            super(qq, gq, lq), this.groundColor = (0, Yq.i)(this, cq, new mq.d(0, 0, 0)), this.direction = ((0, Yq.i)(this, uq), (0, Yq.i)(this, Bq, void 0)), (0, Yq.i)(this, Wq), this.direction = Eq || Oq.q.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(qq) {
            return this.direction = Oq.q.Normalize(qq.subtract(Oq.q.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(qq, Eq) {
            const gq = Oq.q.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", gq.x, gq.y, gq.z, 0, Eq), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), Eq), this
          }
          transferToNodeMaterialEffect(qq, Eq) {
            const gq = Oq.q.Normalize(this.direction);
            return qq.setFloat3(Eq, gq.x, gq.y, gq.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = Oq.e.Identity()), this._worldMatrix
          }
          getTypeID() {
            return xq.c.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(qq, Eq) {
            qq["HEMILIGHT" + Eq] = !0
          }
        }, (() => {
          const Oq = "function" === typeof Symbol && Symbol.metadata ? Object.create(Aq[Symbol.metadata] ?? null) : void 0;
          Eq = [(0, lq.o)()], gq = [(0, lq.I)()], (0, Yq.f)(null, null, Eq, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: qq => "groundColor" in qq,
              get: qq => qq.groundColor,
              set: (qq, Eq) => {
                qq.groundColor = Eq
              }
            },
            metadata: Oq
          }, cq, uq), (0, Yq.f)(null, null, gq, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: qq => "direction" in qq,
              get: qq => qq.direction,
              set: (qq, Eq) => {
                qq.direction = Eq
              }
            },
            metadata: Oq
          }, Bq, Wq), Oq && Object.defineProperty(qq, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Oq
          })
        })(), qq
      })(),
      Bq = !1;

    function Wq() {
      Bq || (Bq = !0, Aq.c.AddNodeConstructor("Light_Type_3", ((qq, Eq) => () => new uq(qq, Oq.q.Zero(), Eq))), (0, cq.g)("BABYLON.HemisphericLight", uq))
    }
  },
  37758: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => lq
    });
    var Yq = gq(37767);
    class lq {
      static GetPlanes(qq) {
        const Eq = [];
        for (let gq = 0; gq < 6; gq++) Eq.push(new Yq.d(0, 0, 0, 0));
        return lq.GetPlanesToRef(qq, Eq), Eq
      }
      static GetNearPlaneToRef(qq, Eq) {
        const gq = qq.m;
        Eq.normal.x = gq[3] + gq[2], Eq.normal.y = gq[7] + gq[6], Eq.normal.z = gq[11] + gq[10], Eq.d = gq[15] + gq[14], Eq.normalize()
      }
      static GetFarPlaneToRef(qq, Eq) {
        const gq = qq.m;
        Eq.normal.x = gq[3] - gq[2], Eq.normal.y = gq[7] - gq[6], Eq.normal.z = gq[11] - gq[10], Eq.d = gq[15] - gq[14], Eq.normalize()
      }
      static GetLeftPlaneToRef(qq, Eq) {
        const gq = qq.m;
        Eq.normal.x = gq[3] + gq[0], Eq.normal.y = gq[7] + gq[4], Eq.normal.z = gq[11] + gq[8], Eq.d = gq[15] + gq[12], Eq.normalize()
      }
      static GetRightPlaneToRef(qq, Eq) {
        const gq = qq.m;
        Eq.normal.x = gq[3] - gq[0], Eq.normal.y = gq[7] - gq[4], Eq.normal.z = gq[11] - gq[8], Eq.d = gq[15] - gq[12], Eq.normalize()
      }
      static GetTopPlaneToRef(qq, Eq) {
        const gq = qq.m;
        Eq.normal.x = gq[3] - gq[1], Eq.normal.y = gq[7] - gq[5], Eq.normal.z = gq[11] - gq[9], Eq.d = gq[15] - gq[13], Eq.normalize()
      }
      static GetBottomPlaneToRef(qq, Eq) {
        const gq = qq.m;
        Eq.normal.x = gq[3] + gq[1], Eq.normal.y = gq[7] + gq[5], Eq.normal.z = gq[11] + gq[9], Eq.d = gq[15] + gq[13], Eq.normalize()
      }
      static GetPlanesToRef(qq, Eq) {
        lq.GetNearPlaneToRef(qq, Eq[0]), lq.GetFarPlaneToRef(qq, Eq[1]), lq.GetLeftPlaneToRef(qq, Eq[2]), lq.GetRightPlaneToRef(qq, Eq[3]), lq.GetTopPlaneToRef(qq, Eq[4]), lq.GetBottomPlaneToRef(qq, Eq[5])
      }
      static IsPointInFrustum(qq, Eq) {
        for (let gq = 0; gq < 6; gq++)
          if (Eq[gq].dotCoordinate(qq) < 0) return !1;
        return !0
      }
    }
  },
  37767: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => lq
    });
    var Yq = gq(37139);
    class lq {
      constructor(qq, Eq, gq, lq) {
        this.normal = new Yq.q(qq, Eq, gq), this.d = lq
      }
      bYq() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new lq(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let qq = this.normal.getHashCode();
        return qq = 397 * qq ^ this.d, qq
      }
      normalize() {
        const qq = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let Eq = 0;
        return 0 !== qq && (Eq = 1 / qq), this.normal.x *= Eq, this.normal.y *= Eq, this.normal.z *= Eq, this.d *= Eq, this
      }
      transform(qq) {
        const Eq = lq._TmpMatrix;
        qq.invertToRef(Eq);
        const gq = Eq.m,
          Yq = this.normal.x,
          Oq = this.normal.y,
          mq = this.normal.z,
          xq = this.d,
          Aq = Yq * gq[0] + Oq * gq[1] + mq * gq[2] + xq * gq[3],
          cq = Yq * gq[4] + Oq * gq[5] + mq * gq[6] + xq * gq[7],
          uq = Yq * gq[8] + Oq * gq[9] + mq * gq[10] + xq * gq[11],
          Bq = Yq * gq[12] + Oq * gq[13] + mq * gq[14] + xq * gq[15];
        return new lq(Aq, cq, uq, Bq)
      }
      dotCoordinate(qq) {
        return this.normal.x * qq.x + this.normal.y * qq.y + this.normal.z * qq.z + this.d
      }
      copyFromPoints(qq, Eq, gq) {
        const Yq = Eq.x - qq.x,
          lq = Eq.y - qq.y,
          Oq = Eq.z - qq.z,
          mq = gq.x - qq.x,
          xq = gq.y - qq.y,
          Aq = gq.z - qq.z,
          cq = lq * Aq - Oq * xq,
          uq = Oq * mq - Yq * Aq,
          Bq = Yq * xq - lq * mq,
          Wq = Math.sqrt(cq * cq + uq * uq + Bq * Bq);
        let Nq;
        return Nq = 0 !== Wq ? 1 / Wq : 0, this.normal.x = cq * Nq, this.normal.y = uq * Nq, this.normal.z = Bq * Nq, this.d = -(this.normal.x * qq.x + this.normal.y * qq.y + this.normal.z * qq.z), this
      }
      isFrontFacingTo(qq, Eq) {
        return Yq.q.Dot(this.normal, qq) <= Eq
      }
      signedDistanceTo(qq) {
        return Yq.q.Dot(qq, this.normal) + this.d
      }
      static FromArray(qq) {
        return new lq(qq[0], qq[1], qq[2], qq[3])
      }
      static FromPoints(qq, Eq, gq) {
        const Yq = new lq(0, 0, 0, 0);
        return Yq.copyFromPoints(qq, Eq, gq), Yq
      }
      static FromPositionAndNormal(qq, Eq) {
        const gq = new lq(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(qq, Eq, gq)
      }
      static FromPositionAndNormalToRef(qq, Eq, gq) {
        return gq.normal.WG(Eq), gq.normal.normalize(), gq.d = -qq.dot(gq.normal), gq
      }
      static SignedDistanceToPlaneFromPositionAndNormal(qq, Eq, gq) {
        const lq = -(Eq.x * qq.x + Eq.y * qq.y + Eq.z * qq.z);
        return Yq.q.Dot(gq, Eq) + lq
      }
    }
    lq._TmpMatrix = Yq.e.Identity()
  },
  38065: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Yq
    });
    class Yq {
      constructor(qq, Eq, gq, Yq) {
        this.x = qq, this.y = Eq, this.width = gq, this.height = Yq
      }
      toGlobal(qq, Eq) {
        return new Yq(this.x * qq, this.y * Eq, this.width * qq, this.height * Eq)
      }
      toGlobalToRef(qq, Eq, gq) {
        return gq.x = this.x * qq, gq.y = this.y * Eq, gq.width = this.width * qq, gq.height = this.height * Eq, this
      }
      clone() {
        return new Yq(this.x, this.y, this.width, this.height)
      }
    }
  },
  38649: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Oq
    });
    var Yq = gq(38653);
    const lq = (qq, Eq, gq) => qq ? qq.getClassName && "Mesh" === qq.getClassName() ? null : !qq.getClassName || "SubMesh" !== qq.getClassName() && "PhysicsBody" !== qq.getClassName() ? qq.clone ? qq.clone() : Array.isArray(qq) ? qq.slice() : gq && "object" === typeof qq ? {
      ...qq
    } : null : qq.clone(Eq) : null;
    class Oq {
      static DeepCopy(qq, Eq, gq, Oq) {
        let mq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const xq = function(qq) {
          const Eq = [];
          do {
            const gq = Object.getOwnPropertyNames(qq);
            for (const qq of gq) - 1 === Eq.indexOf(qq) && Eq.push(qq)
          } while (qq = Object.getPrototypeOf(qq));
          return Eq
        }(qq);
        for (const cq of xq) {
          if ("_" === cq[0] && (!Oq || -1 === Oq.indexOf(cq))) continue;
          if (cq.endsWith("Observable")) continue;
          if (gq && -1 !== gq.indexOf(cq)) continue;
          const xq = qq[cq],
            uq = typeof xq;
          if ("function" !== uq) try {
            if ("object" === uq)
              if (xq instanceof Uint8Array) Eq[cq] = Uint8Array.from(xq);
              else if (xq instanceof Array) {
              if (Eq[cq] = [], xq.length > 0)
                if ("object" == typeof xq[0])
                  for (let qq = 0; qq < xq.length; qq++) {
                    const gq = lq(xq[qq], Eq, mq); - 1 === Eq[cq].indexOf(gq) && Eq[cq].push(gq)
                  } else Eq[cq] = xq.slice(0)
            } else Eq[cq] = lq(xq, Eq, mq);
            else Eq[cq] = xq
          } catch (Aq) {
            Yq.b.Warn(Aq.message)
          }
        }
      }
    }
  },
  37872: (qq, Eq, gq) => {
    function Yq() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (qq => {
        const Eq = 16 * Math.random() | 0;
        return ("x" === qq ? Eq : 3 & Eq | 8).toString(16)
      }))
    }
    gq.d(Eq, {
      d: () => Yq
    })
  },
  38653: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Yq
    });
    class Yq {
      static _CheckLimit(qq, Eq) {
        let gq = Yq._LogLimitOutputs[qq];
        return gq ? gq.current++ : (gq = {
          limit: Eq,
          current: 1
        }, Yq._LogLimitOutputs[qq] = gq), gq.current <= gq.limit
      }
      static _GenerateLimitMessage(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const gq = Yq._LogLimitOutputs[qq];
        if (!gq || !Yq.MessageLimitReached) return;
        const lq = this._Levels[Eq];
        gq.current === gq.limit && Yq[lq.name](Yq.MessageLimitReached.replace(/%LIMIT%/g, "" + gq.limit).replace(/%TYPE%/g, lq.name ?? ""))
      }
      static _AddLogEntry(qq) {
        Yq._LogCache = qq + Yq._LogCache, Yq.OnNewCacheEntry && Yq.OnNewCacheEntry(qq)
      }
      static _FormatMessage(qq) {
        const Eq = qq => qq < 10 ? "0" + qq : "" + qq,
          gq = new Date;
        return "[" + Eq(gq.getHours()) + ":" + Eq(gq.getMinutes()) + ":" + Eq(gq.getSeconds()) + "]: " + qq
      }
      static _LogDisabled(qq, Eq) {}
      static _LogEnabled() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Eq = arguments.length > 1 ? arguments[1] : void 0,
          gq = arguments.length > 2 ? arguments[2] : void 0;
        const lq = Array.isArray(Eq) ? Eq[0] : Eq;
        if (void 0 !== gq && !Yq._CheckLimit(lq, gq)) return;
        const Oq = Yq._FormatMessage(lq),
          mq = this._Levels[qq],
          xq = Array.isArray(Eq) ? Eq.slice(1) : [];
        mq.logFunc && mq.logFunc("BJS - " + Oq, ...xq);
        const Aq = `<div style='color:${mq.color}'>${Oq}</div><br>`;
        Yq._AddLogEntry(Aq), Yq._GenerateLimitMessage(lq, qq)
      }
      static get LogCache() {
        return Yq._LogCache
      }
      static ClearLogCache() {
        Yq._LogCache = "", Yq._LogLimitOutputs = {}, Yq.errorsCount = 0
      }
      static set LogLevels(qq) {
        Yq.Log = Yq._LogDisabled, Yq.Warn = Yq._LogDisabled, Yq.Error = Yq._LogDisabled;
        const Eq = [Yq.MessageLogLevel, Yq.WarningLogLevel, Yq.ErrorLogLevel];
        for (const gq of Eq)
          if ((qq & gq) === gq) {
            const qq = this._Levels[gq];
            Yq[qq.name] = Yq._LogEnabled.bind(Yq, gq)
          }
      }
    }
    Yq.NoneLogLevel = 0, Yq.MessageLogLevel = 1, Yq.WarningLogLevel = 2, Yq.ErrorLogLevel = 4, Yq.AllLogLevel = 7, Yq.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Yq._LogCache = "", Yq._LogLimitOutputs = {}, Yq._Levels = [{}, {
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
    }], Yq.errorsCount = 0, Yq.Log = Yq._LogEnabled.bind(Yq, Yq.MessageLogLevel), Yq.Warn = Yq._LogEnabled.bind(Yq, Yq.WarningLogLevel), Yq.Error = Yq._LogEnabled.bind(Yq, Yq.ErrorLogLevel)
  },
  61121: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      CreateScreenshot: () => Sq,
      CreateScreenshotAsync: () => pq,
      CreateScreenshotForFrameGraphAsync: () => kq,
      CreateScreenshotUsingRenderTarget: () => Lq,
      CreateScreenshotUsingRenderTargetAsync: () => Jq,
      CreateScreenshotWithResizeAsync: () => Gq,
      RegisterScreenshotTools: () => sq,
      ScreenshotTools: () => Uq
    });
    var Yq = gq(40233),
      lq = gq(41568),
      Oq = gq(41551),
      mq = gq(39779),
      xq = gq(41555),
      Aq = gq(37153),
      cq = gq(37139);
    class uq extends xq.e {
      static _GetDefines(qq) {
        if (!qq) return null;
        return qq.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
      }
      _gatherImports(qq, Eq) {
        qq ? (this._webGPUReady = !0, Eq.push(Promise.all([gq.e(368).then((() => gq(61473))), gq.e(369).then((() => gq(61477)))]))) : Eq.push(Promise.all([gq.e(370).then((() => gq(61485))), gq.e(371).then((() => gq(61488)))]))
      }
      constructor(qq) {
        const Eq = {
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: qq,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || Aq.b.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          vertexShader: uq.VertexUrl,
          fragmentShader: uq.FragmentUrl,
          uniforms: uq.Uniforms
        };
        super({
          ...Eq,
          defines: uq._GetDefines(Eq.engine)
        }), this.texelSize = new cq.p(0, 0)
      }
      bind() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.bind(qq), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
      }
    }
    uq.VertexUrl = "fxaa", uq.FragmentUrl = "fxaa", uq.Uniforms = ["texelSize"];
    class Bq extends Oq.e {
      getClassName() {
        return "FxaaPostProcess"
      }
      constructor(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          lq = arguments.length > 3 ? arguments[3] : void 0,
          Oq = arguments.length > 4 ? arguments[4] : void 0,
          mq = arguments.length > 5 ? arguments[5] : void 0,
          xq = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const Aq = {
          uniforms: uq.Uniforms,
          size: "number" === typeof Eq ? Eq : void 0,
          camera: gq,
          samplingMode: lq || Yq.d.BILINEAR_SAMPLINGMODE,
          engine: Oq,
          reusable: mq,
          textureType: xq,
          ...Eq
        };
        super(qq, uq.FragmentUrl, {
          effectWrapper: "number" !== typeof Eq && Eq.effectWrapper ? void 0 : new uq(qq, Oq, Aq),
          ...Aq
        }), this.onApplyObservable.add((qq => {
          this._effectWrapper.texelSize = this.texelSize
        }))
      }
      static _Parse(qq, Eq, gq, Yq) {
        return mq.d.Parse((() => new Bq(qq.name, qq.options, Eq, qq.renderTargetSamplingMode, gq.Ba(), qq.reusable)), qq, gq, Yq)
      }
    }
    var Wq = gq(38653),
      Nq = gq(39845),
      aq = gq(41581),
      Vq = gq(41561),
      dq = gq(39644);
    const jq = 0;
    class Hq {
      constructor(qq, Eq, gq) {
        this.name = qq, this._parentTask = Eq, this._context = gq, this.disabled = !1
      }
      setInitializeFunc(qq) {
        this._initFunc = qq
      }
      setExecuteFunc(qq) {
        this._executeFunc = qq
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
    class oq extends Hq {
      static IsObjectListPass(qq) {
        return void 0 !== qq.setObjectList
      }
      get objectList() {
        return this._objectList
      }
      setObjectList(qq) {
        this._objectList = qq
      }
      constructor(qq, Eq, gq, Yq) {
        super(qq, Eq, gq), this._engine = Yq
      }
      _isValid() {
        const qq = super._isValid();
        return qq || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
      }
    }
    class Pq extends Hq {
      static IsRenderPass(qq) {
        return void 0 !== qq.setRenderTarget
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
      constructor(qq, Eq, gq, Yq) {
        super(qq, Eq, gq), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = Yq
      }
      setRenderTarget(qq) {
        this._renderTarget = qq
      }
      setRenderTargetDepth(qq) {
        this._renderTargetDepth = qq
      }
      addDependencies(qq) {
        if (void 0 !== qq)
          if (Array.isArray(qq))
            for (const Eq of qq) this._dependencies.add(Eq);
          else this._dependencies.add(qq)
      }
      collectDependencies(qq) {
        const Eq = this._dependencies.keys();
        for (let gq = Eq.next(); !0 !== gq.done; gq = Eq.next()) qq.add(gq.value);
        if (void 0 !== this._renderTarget)
          if (Array.isArray(this._renderTarget))
            for (const gq of this._renderTarget) void 0 !== gq && qq.add(gq);
          else qq.add(this._renderTarget);
        void 0 !== this._renderTargetDepth && qq.add(this._renderTargetDepth)
      }
      setOutputLayerAndFaceIndices(qq) {
        const Eq = this.frameGraphRenderTarget.renderTargetWrapper;
        if (Eq)
          for (const gq of qq) Eq.setLayerAndFaceIndex(gq.targetIndex, gq.layerIndex, gq.faceIndex)
      }
      _initialize() {
        this._frameGraphRenderTarget = this._context.createRenderTarget(this.name, this._renderTarget, this._renderTargetDepth, this.depthReadOnly, this.stencilReadOnly), super._initialize()
      }
      _execute() {
        this._context.bindRenderTarget(this._frameGraphRenderTarget), super._execute(), this._context.restoreDefaultFramebuffer()
      }
      _isValid() {
        const qq = super._isValid();
        return qq || (void 0 !== this._renderTarget || void 0 !== this.renderTargetDepth ? null : "Render target and render target depth cannot both be undefined.")
      }
      _dispose() {
        this._frameGraphRenderTarget?.dispose()
      }
    }
    var Qq = gq(37156);
    class yq {
      get name() {
        return this._name
      }
      set name(qq) {
        this._name = qq
      }
      get disabled() {
        return this._disabled
      }
      set disabled(qq) {
        this._disabled = qq
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
      constructor(qq, Eq) {
        this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new Qq.d, this.onBeforeTaskExecute = new Qq.d, this.onAfterTaskExecute = new Qq.d, this.name = qq, this._frameGraph = Eq, this._reset()
      }
      _reset() {
        for (const qq of this._passes) qq._dispose();
        for (const qq of this._passesDisabled) qq._dispose();
        this._passes.length = 0, this._passesDisabled.length = 0
      }
      _addPass(qq, Eq) {
        Eq ? this._passesDisabled.push(qq) : this._passes.push(qq)
      }
      _checkTask() {
        let qq, Eq = null,
          gq = null;
        for (const xq of this._passes) {
          const Yq = xq._isValid();
          if (Yq) throw new Error(`Pass "${xq.name}" is not valid. ${Yq}`);
          if (Pq.IsRenderPass(xq)) {
            const qq = Array.isArray(xq.renderTarget) ? xq.renderTarget : [xq.renderTarget];
            Eq = [];
            for (const gq of qq) void 0 !== gq && Eq.push(this._frameGraph.textureManager.getTextureFromHandle(gq));
            gq = void 0 !== xq.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(xq.renderTargetDepth) : null
          } else oq.IsObjectListPass(xq) && (qq = xq.objectList)
        }
        let Yq, lq = null,
          Oq = [],
          mq = null;
        for (const xq of this._passesDisabled) {
          const qq = xq._isValid();
          if (qq) throw new Error(`Pass "${xq.name}" is not valid. ${qq}`);
          if (Pq.IsRenderPass(xq)) {
            const qq = Array.isArray(xq.renderTarget) ? xq.renderTarget : [xq.renderTarget];
            lq = [];
            for (const Eq of qq) void 0 !== Eq && lq.push(this._frameGraph.textureManager.getTextureFromHandle(Eq));
            Oq = qq, mq = void 0 !== xq.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(xq.renderTargetDepth) : null
          } else oq.IsObjectListPass(xq) && (Yq = xq.objectList)
        }
        if (this._passesDisabled.length > 0) {
          if (!this._checkSameRenderTarget(Eq, lq)) {
            let qq = !0;
            for (const Eq of Oq)
              if (void 0 !== Eq && !this._frameGraph.textureManager.isHistoryTexture(Eq)) {
                qq = !1;
                break
              } if (!qq) throw new Error(`The output texture of the task "${this.name}" is different when it is enabled or disabled.`)
          }
          if (gq !== mq && null !== mq) throw new Error(`The output depth texture of the task "${this.name}" is different when it is enabled or disabled.`);
          if (qq !== Yq && null !== Yq) throw new Error(`The output object list of the task "${this.name}" is different when it is enabled or disabled.`)
        }
      }
      _execute() {
        const qq = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
        this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const Eq of qq) Eq._execute()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
        this.onAfterTaskExecute.notifyObservers(this)
      }
      _initializePasses() {
        this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const qq of this._passes) qq._initialize();
          for (const qq of this._passesDisabled) qq._initialize()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
      }
      _checkSameRenderTarget(qq, Eq) {
        if (null === qq || null === Eq) return qq === Eq;
        if (qq.length !== Eq.length) return !1;
        for (let gq = 0; gq < qq.length; gq++)
          if (qq[gq] !== Eq[gq]) return !1;
        return !0
      }
    }
    class tq extends yq {
      get alphaMode() {
        return this.postProcess.alphaMode
      }
      set alphaMode(qq) {
        this.postProcess.alphaMode = qq
      }
      get drawWrapper() {
        return this._postProcessDrawWrapper
      }
      constructor(qq, Eq, gq) {
        super(qq, Eq), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = gq, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture = this._frameGraph.textureManager.createDanglingHandle(), this.outputDepthAttachmentTexture = this._frameGraph.textureManager.createDanglingHandle()
      }
      isReady() {
        return this.postProcess.isReady()
      }
      getClassName() {
        return "FrameGraphPostProcessTask"
      }
      record() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Eq = arguments.length > 1 ? arguments[1] : void 0,
          gq = arguments.length > 2 ? arguments[2] : void 0;
        if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
        const Yq = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
        if (Yq && (Yq.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, Yq), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentTexture, this.depthAttachmentTexture), Yq) {
          const qq = this._frameGraph.textureManager.getTextureAbsoluteDimensions(Yq);
          this._sourceWidth = qq.width, this._sourceHeight = qq.height
        }
        const lq = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
        this._outputWidth = lq.size.width, this._outputHeight = lq.size.height;
        const Oq = this._frameGraph.addRenderPass(this.name);
        if (Oq.depthReadOnly = this.depthReadOnly, Oq.stencilReadOnly = this.stencilReadOnly, Oq.addDependencies(this.sourceTexture), Oq.setRenderTarget(this.outputTexture), Oq.setRenderTargetDepth(this.depthAttachmentTexture), Oq.setExecuteFunc((qq => {
            qq.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && qq.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), Eq?.(qq), this.viewport && qq.setViewport(this.viewport), qq.applyFullScreenEffect(this._postProcessDrawWrapper, (() => {
              void 0 !== this.sourceTexture && qq.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), gq?.(qq), this.postProcess.bind()
            }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), qq.restoreDefaultFramebuffer(), qq.popDebugGroup()
          })), !qq) {
          const qq = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
          qq.depthReadOnly = this.depthReadOnly, qq.stencilReadOnly = this.stencilReadOnly, qq.addDependencies(this.sourceTexture), qq.setRenderTarget(this.outputTexture), qq.setRenderTargetDepth(this.depthAttachmentTexture), qq.setExecuteFunc((qq => {
            void 0 !== this.sourceTexture && 0 === this.alphaMode && (this.viewport && qq.setViewport(this.viewport), qq.copyTexture(this.sourceTexture, void 0, void 0 !== this.viewport))
          }))
        }
        return Oq
      }
      dispose() {
        this.postProcess.dispose(), super.dispose()
      }
    }
    class rq extends tq {
      constructor(qq, Eq, gq) {
        super(qq, Eq, gq || new uq(qq, Eq.engine))
      }
      getClassName() {
        return "FrameGraphFXAATask"
      }
      record() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Eq = arguments.length > 1 ? arguments[1] : void 0,
          gq = arguments.length > 2 ? arguments[2] : void 0;
        const Yq = super.record(qq, Eq, gq);
        return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, Yq
      }
    }
    var vq = gq(41577);
    class hq extends tq {
      constructor(qq, Eq, gq) {
        super(qq, Eq, gq || new vq.f(qq, Eq.engine))
      }
      getClassName() {
        return "FrameGraphPassTask"
      }
    }
    var nq = gq(39838),
      bq = gq(39919),
      iq = gq(39876),
      Zq = gq(39993),
      fq = gq(37289);
    class Mq {
      getRenderCamera(qq) {
        if (this._renderCamera) return this._renderCamera;
        {
          let Eq;
          return Eq = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, qq && Eq && Eq.isRigCamera ? Eq.rigParent : Eq
        }
      }
      setRenderCamera(qq) {
        this._renderCamera = qq
      }
      _getSharedGizmoLight() {
        return this._sharedGizmoLight || (this._sharedGizmoLight = new Zq.d("shared gizmo light", new cq.q(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = fq.d.Gray()), this._sharedGizmoLight
      }
      static get DefaultUtilityLayer() {
        return null == Mq._DefaultUtilityLayer ? Mq._CreateDefaultUtilityLayerFromScene(Aq.b.LastCreatedScene) : Mq._DefaultUtilityLayer
      }
      static _CreateDefaultUtilityLayerFromScene(qq) {
        return Mq._DefaultUtilityLayer = new Mq(qq), Mq._DefaultUtilityLayer.originalScene.MJ.addOnce((() => {
          Mq._DefaultUtilityLayer = null
        })), Mq._DefaultUtilityLayer
      }
      static get DefaultKeepDepthUtilityLayer() {
        return null == Mq._DefaultKeepDepthUtilityLayer ? Mq._CreateDefaultKeepUtilityLayerFromScene(Aq.b.LastCreatedScene) : Mq._DefaultKeepDepthUtilityLayer
      }
      static _CreateDefaultKeepUtilityLayerFromScene(qq) {
        return Mq._DefaultKeepDepthUtilityLayer = new Mq(qq), Mq._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, Mq._DefaultKeepDepthUtilityLayer.originalScene.MJ.addOnce((() => {
          Mq._DefaultKeepDepthUtilityLayer = null
        })), Mq._DefaultKeepDepthUtilityLayer
      }
      constructor(qq) {
        let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.originalScene = qq, this.handleEvents = Eq, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.processAllEvents = !1, this.pickingEnabled = !0, this.onPointerOutObservable = new Qq.d, this.utilityLayerScene = new nq.i(qq.Ba(), {
          virtual: !0,
          useFloatingOrigin: qq.floatingOriginMode
        }), this.utilityLayerScene.useRightHandedSystem = qq.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), Eq && (this._originalPointerObserver = qq.onPrePointerObservable.add((Eq => {
          if (!this.utilityLayerScene.activeCamera) return;
          if (!this.pickingEnabled) return;
          if (!this.processAllEvents && Eq.type !== bq.b.POINTERMOVE && Eq.type !== bq.b.POINTERUP && Eq.type !== bq.b.POINTERDOWN && Eq.type !== bq.b.POINTERDOUBLETAP) return;
          this.utilityLayerScene.pointerX = qq.pointerX, this.utilityLayerScene.pointerY = qq.pointerY;
          const gq = Eq.event;
          if (qq.isPointerCaptured(gq.pointerId)) return void(this._pointerCaptures[gq.pointerId] = !1);
          const Yq = gq => {
              let Yq;
              if (Eq.nearInteractionPickingInfo) Yq = Eq.nearInteractionPickingInfo.pickedMesh.ZJ() == gq ? Eq.nearInteractionPickingInfo : new iq.d;
              else if (gq !== this.utilityLayerScene && Eq.originalPickingInfo) Yq = Eq.originalPickingInfo;
              else {
                let lq = null;
                this._renderCamera && (lq = gq._activeCamera, gq._activeCamera = this._renderCamera, Eq.ray = null), Yq = Eq.ray ? gq.pickWithRay(Eq.ray) : gq.zW(qq.pointerX, qq.pointerY), lq && (gq._activeCamera = lq)
              }
              return Yq
            },
            lq = Yq(this.utilityLayerScene);
          if (!Eq.ray && lq && (Eq.ray = lq.ray), Eq.originalPickingInfo?.aimTransform && lq && (lq.aimTransform = Eq.originalPickingInfo.aimTransform, lq.gripTransform = Eq.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(Eq), this.onlyCheckPointerDownEvents && Eq.type != bq.b.POINTERDOWN) return Eq.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new bq.h(Eq.type, Eq.event, lq), Eq.type), void(Eq.type === bq.b.POINTERUP && this._pointerCaptures[gq.pointerId] && (this._pointerCaptures[gq.pointerId] = !1));
          if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) lq && lq.hit && (Eq.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new bq.h(Eq.type, Eq.event, lq), Eq.type), Eq.skipOnPointerObservable = !0);
          else {
            const gq = Yq(qq),
              Oq = Eq.event;
            gq && lq && (0 === lq.distance && gq.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(gq.pickedMesh) ? (this._notifyObservers(Eq, gq, Oq), Eq.skipOnPointerObservable = !0) : Eq.type === bq.b.POINTERDOWN ? (this._pointerCaptures[Oq.pointerId] = !0, this._notifyObservers(Eq, gq, Oq)) : Eq.type !== bq.b.POINTERMOVE && Eq.type !== bq.b.POINTERUP || (this._lastPointerEvents[Oq.pointerId] && (this.onPointerOutObservable.notifyObservers(Oq.pointerId), delete this._lastPointerEvents[Oq.pointerId]), this._notifyObservers(Eq, gq, Oq)) : !this._pointerCaptures[Oq.pointerId] && (lq.distance < gq.distance || 0 === gq.distance) ? (this._notifyObservers(Eq, lq, Oq), Eq.skipOnPointerObservable || (Eq.skipOnPointerObservable = lq.distance > 0)) : !this._pointerCaptures[Oq.pointerId] && lq.distance >= gq.distance && (this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(gq.pickedMesh) ? (this._notifyObservers(Eq, gq, Oq), Eq.skipOnPointerObservable = !0) : (Eq.type !== bq.b.POINTERMOVE && Eq.type !== bq.b.POINTERUP || this._lastPointerEvents[Oq.pointerId] && (this.onPointerOutObservable.notifyObservers(Oq.pointerId), delete this._lastPointerEvents[Oq.pointerId]), this._notifyObservers(Eq, lq, Oq))), Eq.type === bq.b.POINTERUP && this._pointerCaptures[Oq.pointerId] && (this._pointerCaptures[Oq.pointerId] = !1))
          }
        })), this._originalPointerObserver && qq.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, gq || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((qq => {
          this.shouldRender && qq == this.getRenderCamera() && this.render()
        }))), this._sceneDisposeObserver = this.originalScene.MJ.add((() => {
          this.dispose()
        })), this._updateCamera()
      }
      _notifyObservers(qq, Eq, gq) {
        qq.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new bq.h(qq.type, qq.event, Eq), qq.type), this._lastPointerEvents[gq.pointerId] = !0)
      }
      render() {
        if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
          const qq = this.utilityLayerScene.activeCamera.ZJ(),
            Eq = this.utilityLayerScene.activeCamera;
          Eq._scene = this.utilityLayerScene, Eq.leftCamera && (Eq.leftCamera._scene = this.utilityLayerScene), Eq.rightCamera && (Eq.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), Eq._scene = qq, Eq.leftCamera && (Eq.leftCamera._scene = qq), Eq.rightCamera && (Eq.rightCamera._scene = qq)
        }
      }
      dispose() {
        this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.MJ.remove(this._sceneDisposeObserver), this._originalPointerObserver && this.originalScene.onPrePointerObservable.remove(this._originalPointerObserver), this.utilityLayerScene.dispose()
      }
      _updateCamera() {
        this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
      }
    }
    Mq._DefaultUtilityLayer = null, Mq._DefaultKeepDepthUtilityLayer = null;
    const Tq = {
      FindMainCamera: function(qq) {
        return qq.findMainCamera()
      },
      FindMainObjectRenderer: function(qq) {
        return qq.findMainObjectRenderer()
      },
      CreateUtilityLayerRenderer: function(qq) {
        let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const gq = qq.PV,
          Yq = new Mq(gq, Eq, !0);
        Yq.utilityLayerScene.activeCamera = gq.activeCamera;
        let lq = Tq.FindMainCamera(gq.frameGraph);
        !lq && gq.cameras.length > 0 && (lq = gq.cameras[0]), lq && (Yq.setRenderCamera(lq), Yq.utilityLayerScene.activeCamera = lq);
        const Oq = gq.onAfterRenderObservable.add((() => {
          Yq.render()
        }));
        return Yq.utilityLayerScene.MJ.addOnce((() => {
          gq.onAfterRenderObservable.remove(Oq)
        })), Yq
      }
    };
    let zq = null;

    function Sq(qq, Eq, gq, Yq) {
      let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        Oq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        mq = arguments.length > 6 ? arguments[6] : void 0,
        xq = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Aq = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
      const {
        height: cq,
        width: uq
      } = Rq(qq, Eq, gq);
      if (!cq || !uq) return void Wq.b.Error("Invalid 'size' parameter !");
      const Bq = Eq.ZJ();
      let aq = Bq.activeCamera !== Eq;
      if (Bq.frameGraph) {
        const qq = Tq.FindMainObjectRenderer(Bq.frameGraph);
        qq && (aq = qq.camera !== Eq)
      }
      aq ? Lq(qq, Eq, gq, (qq => {
        if (Oq) {
          const Eq = new Blob([qq]);
          Nq.f.DownloadBlob(Eq), Yq && Yq("")
        } else Yq && Yq(qq)
      }), lq, 1, qq.getCreationOptions().antialias, void 0, void 0, void 0, void 0, mq) : qq.onEndFrameObservable.addOnce((() => {
        zq || (zq = document.createElement("canvas")), zq.width = uq, zq.height = cq;
        const Eq = zq.getContext("2d"),
          gq = qq.getRenderingCanvas();
        if (!Eq || !gq) return void Wq.b.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
        const aq = gq.width,
          Vq = gq.height,
          dq = zq.width,
          jq = zq.height,
          Hq = dq / aq,
          oq = jq / Vq,
          Pq = xq ? Math.max(Hq, oq) : Math.min(Hq, oq),
          Qq = aq * Pq,
          yq = Vq * Pq,
          tq = (dq - Qq) / 2,
          rq = (jq - yq) / 2;
        Eq.save(), Eq.fillStyle = Aq ? Bq.clearColor.toHexString() : "rgba(0, 0, 0, 0)", Eq.fillRect(0, 0, uq, cq), Eq.restore(), Eq.drawImage(gq, 0, 0, aq, Vq, tq, rq, Qq, yq), Oq ? (Nq.f.EncodeScreenshotCanvasData(zq, void 0, lq, void 0, mq), Yq && Yq("")) : Nq.f.EncodeScreenshotCanvasData(zq, Yq, lq, void 0, mq)
      }))
    }
    async function pq(qq, Eq, gq) {
      let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        lq = arguments.length > 4 ? arguments[4] : void 0,
        Oq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        mq = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        xq = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      return await new Promise(((Aq, cq) => {
        Sq(qq, Eq, gq, (qq => {
          "undefined" !== typeof qq ? Aq(qq) : cq(new Error("Data is undefined"))
        }), Yq, xq, lq, Oq, mq)
      }))
    }
    async function Gq(qq, Eq, gq, Yq) {
      let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        Oq = arguments.length > 5 ? arguments[5] : void 0,
        mq = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return await new Promise((xq => {
        Sq(qq, Eq, {
          width: gq,
          height: Yq
        }, (() => {
          xq()
        }), lq, !0, Oq, mq)
      }))
    }

    function Lq(qq, Eq, Oq, mq) {
      let xq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        Aq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
        cq = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        uq = arguments.length > 7 ? arguments[7] : void 0,
        Nq = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        jq = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        Hq = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
        oq = arguments.length > 11 ? arguments[11] : void 0,
        Pq = arguments.length > 12 ? arguments[12] : void 0,
        Qq = arguments.length > 13 ? arguments[13] : void 0,
        yq = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
        tq = arguments.length > 15 ? arguments[15] : void 0;
      const rq = Eq.ZJ();
      if (rq.frameGraph) return void kq(rq.frameGraph, Eq, Oq, xq, Aq, cq, uq, oq, Qq, !mq).then((qq => {
        mq && mq(qq)
      }));
      const {
        height: vq,
        width: hq,
        finalWidth: nq,
        finalHeight: bq
      } = Rq(qq, Eq, Oq), iq = {
        width: hq,
        height: vq
      };
      if (!vq || !hq) return void Wq.b.Error("Invalid 'size' parameter !");
      qq.skipFrameRender = !0;
      const Zq = qq.getRenderWidth,
        fq = qq.getRenderHeight;
      qq.getRenderWidth = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && qq._currentRenderTarget ? qq._currentRenderTarget.width : hq
      }, qq.getRenderHeight = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && qq._currentRenderTarget ? qq._currentRenderTarget.height : vq
      }, qq.onResizeObservable.hasObservers() && qq.onResizeObservable.notifyObservers(qq);
      const Mq = new lq.c("screenShot", iq, rq, !1, !1, 0, !1, Yq.d.BILINEAR_SAMPLINGMODE, void 0, jq, void 0, void 0, void 0, Aq);
      Mq.renderList = rq.meshes.slice(), Mq.samples = Aq, Mq.renderSprites = Nq, Mq.activeCamera = Eq, Mq.forceLayerMaskCheck = Hq, Pq?.(Mq);
      const Tq = Qq || aq.DumpData,
        zq = () => {
          rq.incrementRenderId(), rq.resetCachedMaterial(), (0, dq.e)((() => Mq.isReadyForRendering() && Eq.isReady(!0)), (() => {
            qq.onEndFrameObservable.addOnce((() => {
              nq === hq && bq === vq ? Mq.readPixels(void 0, void 0, void 0, !1).then((qq => {
                Tq(hq, vq, qq, mq, xq, uq, !0, void 0, oq), Mq.dispose()
              })) : (qq.isWebGPU ? gq.e(364).then((() => gq(61421))) : gq.e(365).then((() => gq(61424)))).then((async () => await (0, Vq.c)("pass", Mq.getInternalTexture(), rq, void 0, void 0, void 0, nq, bq).then((Eq => {
                qq._readTexturePixels(Eq, nq, bq, -1, 0, null, !0, !1, 0, 0).then((qq => {
                  Tq(nq, bq, qq, mq, xq, uq, !0, void 0, oq), Eq.dispose()
                }))
              }))))
            })), rq.incrementRenderId(), rq.resetCachedMaterial();
            const Yq = rq.activeCamera,
              lq = rq.activeCameras,
              Oq = Eq.outputRenderTarget,
              Aq = rq.spritesEnabled;
            rq.activeCamera = Eq, rq.activeCameras = null, Eq.outputRenderTarget = Mq, rq.spritesEnabled = Nq;
            const cq = rq.meshes;
            rq.meshes = Mq.renderList || rq.meshes;
            try {
              rq.render()
            } finally {
              rq.activeCamera = Yq, rq.activeCameras = lq, Eq.outputRenderTarget = Oq, rq.spritesEnabled = Aq, rq.meshes = cq, qq.getRenderWidth = Zq, qq.getRenderHeight = fq, qq.onResizeObservable.hasObservers() && qq.onResizeObservable.notifyObservers(qq), Eq.getProjectionMatrix(!0), qq.skipFrameRender = !1
            }
          }), (() => {
            qq.skipFrameRender = !1, qq.getRenderWidth = Zq, qq.getRenderHeight = fq, tq?.()
          }), void 0, yq)
        };
      if (cq) {
        const qq = new Bq("antialiasing", 1, rq.activeCamera);
        Mq.addPostProcess(qq), qq.autoClear = !0, qq.onEffectCreatedObservable.addOnce((qq => {
          qq.isReady() ? zq() : qq.onCompiled = () => {
            zq()
          }
        }))
      } else zq()
    }
    async function Jq(qq, Eq, gq) {
      let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        Oq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        mq = arguments.length > 6 ? arguments[6] : void 0,
        xq = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Aq = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        cq = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
        uq = arguments.length > 10 ? arguments[10] : void 0,
        Bq = arguments.length > 11 ? arguments[11] : void 0,
        Wq = arguments.length > 12 ? arguments[12] : void 0;
      return await new Promise(((Nq, aq) => {
        Lq(qq, Eq, gq, (qq => {
          "undefined" !== typeof qq ? Nq(qq) : aq(new Error("Data is undefined"))
        }), Yq, lq, Oq, mq, xq, Aq, cq, uq, Bq, Wq)
      }))
    }
    async function kq(qq, Eq, gq) {
      let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        Oq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        mq = arguments.length > 6 ? arguments[6] : void 0,
        xq = arguments.length > 7 ? arguments[7] : void 0,
        Aq = arguments.length > 8 ? arguments[8] : void 0,
        cq = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        uq = arguments.length > 10 ? arguments[10] : void 0;
      const Bq = qq.engine,
        Wq = qq.textureManager,
        {
          height: Nq,
          width: Vq,
          finalWidth: dq,
          finalHeight: Hq
        } = Rq(Bq, Eq, gq),
        oq = {
          width: Vq,
          height: Nq
        },
        Pq = Aq || aq.DumpData,
        Qq = qq.tasks,
        yq = Qq.length,
        tq = qq.pausedExecution,
        vq = Bq.getCaps().parallelShaderCompile;
      Wq.setBackBufferTextures(0, 0, {
        size: oq,
        options: {
          createMipMaps: !1,
          samples: lq,
          types: [0],
          formats: [5],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot color"]
        },
        sizeIsPercentage: !1
      }, {
        size: oq,
        options: {
          createMipMaps: !1,
          samples: lq,
          types: [0],
          formats: [Bq.isStencilEnable ? 13 : 14],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot depth"]
        },
        sizeIsPercentage: !1
      });
      let nq = jq;
      if (Oq) {
        const Eq = new rq("fxaa", qq);
        Eq.sourceTexture = nq, nq = Eq.outputTexture, qq.addTask(Eq)
      }
      if (dq !== Vq || Hq !== Nq) {
        const Eq = new hq("pass", qq);
        Eq.sourceTexture = nq, Eq.targetTexture = qq.textureManager.createRenderTargetTexture("pass_output", {
          size: {
            width: dq,
            height: Hq
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
        }), nq = Eq.outputTexture, qq.addTask(Eq)
      }
      const bq = Tq.FindMainObjectRenderer(qq);
      let iq = null;
      bq && (iq = bq.camera, bq.camera = Eq), Bq.getCaps().parallelShaderCompile = void 0, await qq.buildAsync();
      const Zq = uq ?? (Wq.hasHistoryTextures ? 32 : 1);
      for (let aq = 0; aq < Zq; ++aq) qq.execute();
      qq.pausedExecution = !0, Bq.getCaps().parallelShaderCompile = vq;
      for (let aq = yq; aq < Qq.length; ++aq) qq.tasks[aq].dispose();
      qq.tasks.length = yq, bq && iq && (bq.camera = iq);
      const fq = qq.textureManager.getTextureFromHandle(nq);
      return fq.incrementReferences(), Wq.resetBackBufferTextures(), await qq.buildAsync(), qq.pausedExecution = tq, new Promise((qq => {
        Bq._readTexturePixels(fq, dq, Hq, -1, 0, null, !0, !1, 0, 0).then((async Eq => {
          fq.dispose(), Pq(dq, Hq, Eq, cq ? void 0 : Eq => qq(Eq), Yq, mq, !0, void 0, xq), cq && qq(null)
        }))
      }))
    }

    function Rq(qq, Eq, gq) {
      let Yq = 0,
        lq = 0,
        Oq = 0,
        mq = 0;
      if ("object" === typeof gq) {
        const xq = gq.precision ? Math.abs(gq.precision) : 1;
        gq.width && gq.height ? (Yq = gq.height * xq, lq = gq.width * xq) : gq.width && !gq.height ? (lq = gq.width * xq, Yq = Math.round(lq / qq.getAspectRatio(Eq))) : gq.height && !gq.width ? (Yq = gq.height * xq, lq = Math.round(Yq * qq.getAspectRatio(Eq))) : (lq = Math.round(qq.getRenderWidth() * xq), Yq = Math.round(lq / qq.getAspectRatio(Eq))), gq.finalWidth && gq.finalHeight ? (mq = gq.finalHeight, Oq = gq.finalWidth) : gq.finalWidth && !gq.finalHeight ? (Oq = gq.finalWidth, mq = Math.round(Oq / qq.getAspectRatio(Eq))) : gq.finalHeight && !gq.finalWidth ? (mq = gq.finalHeight, Oq = Math.round(mq * qq.getAspectRatio(Eq))) : (Oq = lq, mq = Yq)
      } else isNaN(gq) || (Yq = gq, lq = gq, Oq = gq, mq = gq);
      return lq && (lq = Math.floor(lq)), Yq && (Yq = Math.floor(Yq)), Oq && (Oq = Math.floor(Oq)), mq && (mq = Math.floor(mq)), {
        height: 0 | Yq,
        width: 0 | lq,
        finalWidth: 0 | Oq,
        finalHeight: 0 | mq
      }
    }
    const Uq = {
      CreateScreenshot: Sq,
      CreateScreenshotAsync: pq,
      CreateScreenshotWithResizeAsync: Gq,
      CreateScreenshotUsingRenderTarget: Lq,
      CreateScreenshotUsingRenderTargetAsync: Jq,
      CreateScreenshotForFrameGraphAsync: kq
    };
    let Fq = !1;

    function sq() {
      if (Fq) return;
      Fq = !0;
      Nq.f.CreateScreenshot = Sq, Nq.f.CreateScreenshotAsync = pq, Nq.f.CreateScreenshotUsingRenderTarget = Lq, Nq.f.CreateScreenshotUsingRenderTargetAsync = Jq
    }
    sq()
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);