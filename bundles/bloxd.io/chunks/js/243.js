export const id = 243;
export const ids = [243, 244];
export const modules = {
  40369: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => jT,
      e: () => LT
    });
    var WT = mT(40095),
      zT = mT(40102),
      MT = mT(37188),
      gT = mT(37367),
      nT = mT(40373),
      HT = mT(40335),
      kT = mT(37239);
    let jT = (() => {
        var TT;
        let UT, mT, HT = nT.e,
          kT = [],
          jT = [],
          lT = [],
          LT = [];
        return TT = class extends HT {
          constructor(TT, UT, mT, zT) {
            super(TT, mT, zT), this.groundColor = (0, WT.k)(this, kT, new gT.d(0, 0, 0)), this.direction = ((0, WT.k)(this, jT), (0, WT.k)(this, lT, void 0)), (0, WT.k)(this, LT), this.direction = UT || MT.p.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(TT) {
            return this.direction = MT.p.Normalize(TT.subtract(MT.p.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(TT, UT) {
            const mT = MT.p.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", mT.x, mT.y, mT.z, 0, UT), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), UT), this
          }
          transferToNodeMaterialEffect(TT, UT) {
            const mT = MT.p.Normalize(this.direction);
            return TT.setFloat3(UT, mT.x, mT.y, mT.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = MT.e.Identity()), this._worldMatrix
          }
          getTypeID() {
            return nT.e.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(TT, UT) {
            TT["HEMILIGHT" + UT] = !0
          }
        }, (() => {
          const MT = "function" === typeof Symbol && Symbol.metadata ? Object.create(HT[Symbol.metadata] ?? null) : void 0;
          UT = [(0, zT.l)()], mT = [(0, zT.J)()], (0, WT.h)(null, null, UT, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: TT => "groundColor" in TT,
              get: TT => TT.groundColor,
              set: (TT, UT) => {
                TT.groundColor = UT
              }
            },
            metadata: MT
          }, kT, jT), (0, WT.h)(null, null, mT, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: TT => "direction" in TT,
              get: TT => TT.direction,
              set: (TT, UT) => {
                TT.direction = UT
              }
            },
            metadata: MT
          }, lT, LT), MT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: MT
          })
        })(), TT
      })(),
      lT = !1;

    function LT() {
      lT || (lT = !0, HT.d.AddNodeConstructor("Light_Type_3", ((TT, UT) => () => new jT(TT, MT.p.Zero(), UT))), (0, kT.h)("BABYLON.HemisphericLight", jT))
    }
  },
  37885: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => zT
    });
    var WT = mT(37889);
    class zT {
      static GetPlanes(TT) {
        const UT = [];
        for (let mT = 0; mT < 6; mT++) UT.push(new WT.e(0, 0, 0, 0));
        return zT.GetPlanesToRef(TT, UT), UT
      }
      static GetNearPlaneToRef(TT, UT) {
        const mT = TT.m;
        UT.normal.x = mT[3] + mT[2], UT.normal.y = mT[7] + mT[6], UT.normal.z = mT[11] + mT[10], UT.d = mT[15] + mT[14], UT.normalize()
      }
      static GetFarPlaneToRef(TT, UT) {
        const mT = TT.m;
        UT.normal.x = mT[3] - mT[2], UT.normal.y = mT[7] - mT[6], UT.normal.z = mT[11] - mT[10], UT.d = mT[15] - mT[14], UT.normalize()
      }
      static GetLeftPlaneToRef(TT, UT) {
        const mT = TT.m;
        UT.normal.x = mT[3] + mT[0], UT.normal.y = mT[7] + mT[4], UT.normal.z = mT[11] + mT[8], UT.d = mT[15] + mT[12], UT.normalize()
      }
      static GetRightPlaneToRef(TT, UT) {
        const mT = TT.m;
        UT.normal.x = mT[3] - mT[0], UT.normal.y = mT[7] - mT[4], UT.normal.z = mT[11] - mT[8], UT.d = mT[15] - mT[12], UT.normalize()
      }
      static GetTopPlaneToRef(TT, UT) {
        const mT = TT.m;
        UT.normal.x = mT[3] - mT[1], UT.normal.y = mT[7] - mT[5], UT.normal.z = mT[11] - mT[9], UT.d = mT[15] - mT[13], UT.normalize()
      }
      static GetBottomPlaneToRef(TT, UT) {
        const mT = TT.m;
        UT.normal.x = mT[3] + mT[1], UT.normal.y = mT[7] + mT[5], UT.normal.z = mT[11] + mT[9], UT.d = mT[15] + mT[13], UT.normalize()
      }
      static GetPlanesToRef(TT, UT) {
        zT.GetNearPlaneToRef(TT, UT[0]), zT.GetFarPlaneToRef(TT, UT[1]), zT.GetLeftPlaneToRef(TT, UT[2]), zT.GetRightPlaneToRef(TT, UT[3]), zT.GetTopPlaneToRef(TT, UT[4]), zT.GetBottomPlaneToRef(TT, UT[5])
      }
      static IsPointInFrustum(TT, UT) {
        for (let mT = 0; mT < 6; mT++)
          if (UT[mT].dotCoordinate(TT) < 0) return !1;
        return !0
      }
    }
  },
  37889: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => zT
    });
    var WT = mT(37188);
    class zT {
      constructor(TT, UT, mT, zT) {
        this.normal = new WT.p(TT, UT, mT), this.d = zT
      }
      cWT() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new zT(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let TT = this.normal.getHashCode();
        return TT = 397 * TT ^ this.d, TT
      }
      normalize() {
        const TT = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let UT = 0;
        return 0 !== TT && (UT = 1 / TT), this.normal.x *= UT, this.normal.y *= UT, this.normal.z *= UT, this.d *= UT, this
      }
      transform(TT) {
        const UT = zT._TmpMatrix;
        TT.invertToRef(UT);
        const mT = UT.m,
          WT = this.normal.x,
          MT = this.normal.y,
          gT = this.normal.z,
          nT = this.d,
          HT = WT * mT[0] + MT * mT[1] + gT * mT[2] + nT * mT[3],
          kT = WT * mT[4] + MT * mT[5] + gT * mT[6] + nT * mT[7],
          jT = WT * mT[8] + MT * mT[9] + gT * mT[10] + nT * mT[11],
          lT = WT * mT[12] + MT * mT[13] + gT * mT[14] + nT * mT[15];
        return new zT(HT, kT, jT, lT)
      }
      dotCoordinate(TT) {
        return this.normal.x * TT.x + this.normal.y * TT.y + this.normal.z * TT.z + this.d
      }
      copyFromPoints(TT, UT, mT) {
        const WT = UT.x - TT.x,
          zT = UT.y - TT.y,
          MT = UT.z - TT.z,
          gT = mT.x - TT.x,
          nT = mT.y - TT.y,
          HT = mT.z - TT.z,
          kT = zT * HT - MT * nT,
          jT = MT * gT - WT * HT,
          lT = WT * nT - zT * gT,
          LT = Math.sqrt(kT * kT + jT * jT + lT * lT);
        let pT;
        return pT = 0 !== LT ? 1 / LT : 0, this.normal.x = kT * pT, this.normal.y = jT * pT, this.normal.z = lT * pT, this.d = -(this.normal.x * TT.x + this.normal.y * TT.y + this.normal.z * TT.z), this
      }
      isFrontFacingTo(TT, UT) {
        return WT.p.Dot(this.normal, TT) <= UT
      }
      signedDistanceTo(TT) {
        return WT.p.Dot(TT, this.normal) + this.d
      }
      static FromArray(TT) {
        return new zT(TT[0], TT[1], TT[2], TT[3])
      }
      static FromPoints(TT, UT, mT) {
        const WT = new zT(0, 0, 0, 0);
        return WT.copyFromPoints(TT, UT, mT), WT
      }
      static FromPositionAndNormal(TT, UT) {
        const mT = new zT(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(TT, UT, mT)
      }
      static FromPositionAndNormalToRef(TT, UT, mT) {
        return mT.normal.Gw(UT), mT.normal.normalize(), mT.d = -TT.dot(mT.normal), mT
      }
      static SignedDistanceToPlaneFromPositionAndNormal(TT, UT, mT) {
        const zT = -(UT.x * TT.x + UT.y * TT.y + UT.z * TT.z);
        return WT.p.Dot(mT, UT) + zT
      }
    }
    zT._TmpMatrix = WT.e.Identity()
  },
  38229: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => WT
    });
    class WT {
      constructor(TT, UT, mT, WT) {
        this.x = TT, this.y = UT, this.width = mT, this.height = WT
      }
      toGlobal(TT, UT) {
        return new WT(this.x * TT, this.y * UT, this.width * TT, this.height * UT)
      }
      toGlobalToRef(TT, UT, mT) {
        return mT.x = this.x * TT, mT.y = this.y * UT, mT.width = this.width * TT, mT.height = this.height * UT, this
      }
      clone() {
        return new WT(this.x, this.y, this.width, this.height)
      }
    }
  },
  38793: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => MT
    });
    var WT = mT(38800);
    const zT = (TT, UT, mT) => TT ? TT.getClassName && "Mesh" === TT.getClassName() ? null : !TT.getClassName || "SubMesh" !== TT.getClassName() && "PhysicsBody" !== TT.getClassName() ? TT.clone ? TT.clone() : Array.isArray(TT) ? TT.slice() : mT && "object" === typeof TT ? {
      ...TT
    } : null : TT.clone(UT) : null;
    class MT {
      static DeepCopy(TT, UT, mT, MT) {
        let gT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const nT = function(TT) {
          const UT = [];
          do {
            const mT = Object.getOwnPropertyNames(TT);
            for (const TT of mT) - 1 === UT.indexOf(TT) && UT.push(TT)
          } while (TT = Object.getPrototypeOf(TT));
          return UT
        }(TT);
        for (const kT of nT) {
          if ("_" === kT[0] && (!MT || -1 === MT.indexOf(kT))) continue;
          if (kT.endsWith("Observable")) continue;
          if (mT && -1 !== mT.indexOf(kT)) continue;
          const nT = TT[kT],
            jT = typeof nT;
          if ("function" !== jT) try {
            if ("object" === jT)
              if (nT instanceof Uint8Array) UT[kT] = Uint8Array.from(nT);
              else if (nT instanceof Array) {
              if (UT[kT] = [], nT.length > 0)
                if ("object" == typeof nT[0])
                  for (let TT = 0; TT < nT.length; TT++) {
                    const mT = zT(nT[TT], UT, gT); - 1 === UT[kT].indexOf(mT) && UT[kT].push(mT)
                  } else UT[kT] = nT.slice(0)
            } else UT[kT] = zT(nT, UT, gT);
            else UT[kT] = nT
          } catch (HT) {
            WT.b.Warn(HT.message)
          }
        }
      }
    }
  },
  38045: (TT, UT, mT) => {
    function WT() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (TT => {
        const UT = 16 * Math.random() | 0;
        return ("x" === TT ? UT : 3 & UT | 8).toString(16)
      }))
    }
    mT.d(UT, {
      c: () => WT
    })
  },
  38800: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => WT
    });
    class WT {
      static _CheckLimit(TT, UT) {
        let mT = WT._LogLimitOutputs[TT];
        return mT ? mT.current++ : (mT = {
          limit: UT,
          current: 1
        }, WT._LogLimitOutputs[TT] = mT), mT.current <= mT.limit
      }
      static _GenerateLimitMessage(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const mT = WT._LogLimitOutputs[TT];
        if (!mT || !WT.MessageLimitReached) return;
        const zT = this._Levels[UT];
        mT.current === mT.limit && WT[zT.name](WT.MessageLimitReached.replace(/%LIMIT%/g, "" + mT.limit).replace(/%TYPE%/g, zT.name ?? ""))
      }
      static _AddLogEntry(TT) {
        WT._LogCache = TT + WT._LogCache, WT.OnNewCacheEntry && WT.OnNewCacheEntry(TT)
      }
      static _FormatMessage(TT) {
        const UT = TT => TT < 10 ? "0" + TT : "" + TT,
          mT = new Date;
        return "[" + UT(mT.getHours()) + ":" + UT(mT.getMinutes()) + ":" + UT(mT.getSeconds()) + "]: " + TT
      }
      static _LogDisabled(TT, UT) {}
      static _LogEnabled() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          UT = arguments.length > 1 ? arguments[1] : void 0,
          mT = arguments.length > 2 ? arguments[2] : void 0;
        const zT = Array.isArray(UT) ? UT[0] : UT;
        if (void 0 !== mT && !WT._CheckLimit(zT, mT)) return;
        const MT = WT._FormatMessage(zT),
          gT = this._Levels[TT],
          nT = Array.isArray(UT) ? UT.slice(1) : [];
        gT.logFunc && gT.logFunc("BJS - " + MT, ...nT);
        const HT = `<div style='color:${gT.color}'>${MT}</div><br>`;
        WT._AddLogEntry(HT), WT._GenerateLimitMessage(zT, TT)
      }
      static get LogCache() {
        return WT._LogCache
      }
      static ClearLogCache() {
        WT._LogCache = "", WT._LogLimitOutputs = {}, WT.errorsCount = 0
      }
      static set LogLevels(TT) {
        WT.Log = WT._LogDisabled, WT.Warn = WT._LogDisabled, WT.Error = WT._LogDisabled;
        const UT = [WT.MessageLogLevel, WT.WarningLogLevel, WT.ErrorLogLevel];
        for (const mT of UT)
          if ((TT & mT) === mT) {
            const TT = this._Levels[mT];
            WT[TT.name] = WT._LogEnabled.bind(WT, mT)
          }
      }
    }
    WT.NoneLogLevel = 0, WT.MessageLogLevel = 1, WT.WarningLogLevel = 2, WT.ErrorLogLevel = 4, WT.AllLogLevel = 7, WT.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", WT._LogCache = "", WT._LogLimitOutputs = {}, WT._Levels = [{}, {
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
    }], WT.errorsCount = 0, WT.Log = WT._LogEnabled.bind(WT, WT.MessageLogLevel), WT.Warn = WT._LogEnabled.bind(WT, WT.WarningLogLevel), WT.Error = WT._LogEnabled.bind(WT, WT.ErrorLogLevel)
  },
  61133: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      CreateScreenshot: () => sT,
      CreateScreenshotAsync: () => FT,
      CreateScreenshotForFrameGraphAsync: () => CT,
      CreateScreenshotUsingRenderTarget: () => VT,
      CreateScreenshotUsingRenderTargetAsync: () => uT,
      CreateScreenshotWithResizeAsync: () => PT,
      RegisterScreenshotTools: () => GT,
      ScreenshotTools: () => KT
    });
    var WT = mT(40602),
      zT = mT(41960),
      MT = mT(41939),
      gT = mT(40122),
      nT = mT(41944),
      HT = mT(37216),
      kT = mT(37188);
    class jT extends nT.h {
      static _GetDefines(TT) {
        if (!TT) return null;
        return TT.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
      }
      _gatherImports(TT, UT) {
        TT ? (this._webGPUReady = !0, UT.push(Promise.all([mT.e(379).then((() => mT(61363))), mT.e(380).then((() => mT(61371)))]))) : UT.push(Promise.all([mT.e(381).then((() => mT(61374))), mT.e(382).then((() => mT(61382)))]))
      }
      constructor(TT) {
        const UT = {
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: TT,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || HT.c.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          vertexShader: jT.VertexUrl,
          fragmentShader: jT.FragmentUrl,
          uniforms: jT.Uniforms
        };
        super({
          ...UT,
          defines: jT._GetDefines(UT.engine)
        }), this.texelSize = new kT.o(0, 0)
      }
      bind() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.bind(TT), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
      }
    }
    jT.VertexUrl = "fxaa", jT.FragmentUrl = "fxaa", jT.Uniforms = ["texelSize"];
    class lT extends MT.c {
      getClassName() {
        return "FxaaPostProcess"
      }
      constructor(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          zT = arguments.length > 3 ? arguments[3] : void 0,
          MT = arguments.length > 4 ? arguments[4] : void 0,
          gT = arguments.length > 5 ? arguments[5] : void 0,
          nT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const HT = {
          uniforms: jT.Uniforms,
          size: "number" === typeof UT ? UT : void 0,
          camera: mT,
          samplingMode: zT || WT.g.BILINEAR_SAMPLINGMODE,
          engine: MT,
          reusable: gT,
          textureType: nT,
          ...UT
        };
        super(TT, jT.FragmentUrl, {
          effectWrapper: "number" !== typeof UT && UT.effectWrapper ? void 0 : new jT(TT, MT, HT),
          ...HT
        }), this.onApplyObservable.add((TT => {
          this._effectWrapper.texelSize = this.texelSize
        }))
      }
      static _Parse(TT, UT, mT, WT) {
        return gT.e.Parse((() => new lT(TT.name, TT.options, UT, TT.renderTargetSamplingMode, mT.eB(), TT.reusable)), TT, mT, WT)
      }
    }
    var LT = mT(38800),
      pT = mT(40201),
      BT = mT(41976),
      ZT = mT(41957),
      cT = mT(39975);
    const vT = 0;
    class fT {
      constructor(TT, UT, mT) {
        this.name = TT, this._parentTask = UT, this._context = mT, this.disabled = !1
      }
      setInitializeFunc(TT) {
        this._initFunc = TT
      }
      setExecuteFunc(TT) {
        this._executeFunc = TT
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
    class qT extends fT {
      static IsObjectListPass(TT) {
        return void 0 !== TT.setObjectList
      }
      get objectList() {
        return this._objectList
      }
      setObjectList(TT) {
        this._objectList = TT
      }
      constructor(TT, UT, mT, WT) {
        super(TT, UT, mT), this._engine = WT
      }
      _isValid() {
        const TT = super._isValid();
        return TT || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
      }
    }
    class iT extends fT {
      static IsRenderPass(TT) {
        return void 0 !== TT.setRenderTarget
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
      constructor(TT, UT, mT, WT) {
        super(TT, UT, mT), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = WT
      }
      setRenderTarget(TT) {
        this._renderTarget = TT
      }
      setRenderTargetDepth(TT) {
        this._renderTargetDepth = TT
      }
      addDependencies(TT) {
        if (void 0 !== TT)
          if (Array.isArray(TT))
            for (const UT of TT) this._dependencies.add(UT);
          else this._dependencies.add(TT)
      }
      collectDependencies(TT) {
        const UT = this._dependencies.keys();
        for (let mT = UT.next(); !0 !== mT.done; mT = UT.next()) TT.add(mT.value);
        if (void 0 !== this._renderTarget)
          if (Array.isArray(this._renderTarget))
            for (const mT of this._renderTarget) void 0 !== mT && TT.add(mT);
          else TT.add(this._renderTarget);
        void 0 !== this._renderTargetDepth && TT.add(this._renderTargetDepth)
      }
      setOutputLayerAndFaceIndices(TT) {
        const UT = this.frameGraphRenderTarget.renderTargetWrapper;
        if (UT)
          for (const mT of TT) UT.setLayerAndFaceIndex(mT.targetIndex, mT.layerIndex, mT.faceIndex)
      }
      _initialize() {
        this._frameGraphRenderTarget = this._context.createRenderTarget(this.name, this._renderTarget, this._renderTargetDepth, this.depthReadOnly, this.stencilReadOnly), super._initialize()
      }
      _execute() {
        this._context.bindRenderTarget(this._frameGraphRenderTarget), super._execute(), this._context.restoreDefaultFramebuffer()
      }
      _isValid() {
        const TT = super._isValid();
        return TT || (void 0 !== this._renderTarget || void 0 !== this.renderTargetDepth ? null : "Render target and render target depth cannot both be undefined.")
      }
      _dispose() {
        this._frameGraphRenderTarget?.dispose()
      }
    }
    var bT = mT(37219);
    class OT {
      get name() {
        return this._name
      }
      set name(TT) {
        this._name = TT
      }
      get disabled() {
        return this._disabled
      }
      set disabled(TT) {
        this._disabled = TT
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
      constructor(TT, UT) {
        this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new bT.d, this.onBeforeTaskExecute = new bT.d, this.onAfterTaskExecute = new bT.d, this.name = TT, this._frameGraph = UT, this._reset()
      }
      _reset() {
        for (const TT of this._passes) TT._dispose();
        for (const TT of this._passesDisabled) TT._dispose();
        this._passes.length = 0, this._passesDisabled.length = 0
      }
      _addPass(TT, UT) {
        UT ? this._passesDisabled.push(TT) : this._passes.push(TT)
      }
      _checkTask() {
        let TT, UT = null,
          mT = null;
        for (const nT of this._passes) {
          const WT = nT._isValid();
          if (WT) throw new Error(`Pass "${nT.name}" is not valid. ${WT}`);
          if (iT.IsRenderPass(nT)) {
            const TT = Array.isArray(nT.renderTarget) ? nT.renderTarget : [nT.renderTarget];
            UT = [];
            for (const mT of TT) void 0 !== mT && UT.push(this._frameGraph.textureManager.getTextureFromHandle(mT));
            mT = void 0 !== nT.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(nT.renderTargetDepth) : null
          } else qT.IsObjectListPass(nT) && (TT = nT.objectList)
        }
        let WT, zT = null,
          MT = [],
          gT = null;
        for (const nT of this._passesDisabled) {
          const TT = nT._isValid();
          if (TT) throw new Error(`Pass "${nT.name}" is not valid. ${TT}`);
          if (iT.IsRenderPass(nT)) {
            const TT = Array.isArray(nT.renderTarget) ? nT.renderTarget : [nT.renderTarget];
            zT = [];
            for (const UT of TT) void 0 !== UT && zT.push(this._frameGraph.textureManager.getTextureFromHandle(UT));
            MT = TT, gT = void 0 !== nT.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(nT.renderTargetDepth) : null
          } else qT.IsObjectListPass(nT) && (WT = nT.objectList)
        }
        if (this._passesDisabled.length > 0) {
          if (!this._checkSameRenderTarget(UT, zT)) {
            let TT = !0;
            for (const UT of MT)
              if (void 0 !== UT && !this._frameGraph.textureManager.isHistoryTexture(UT)) {
                TT = !1;
                break
              } if (!TT) throw new Error(`The output texture of the task "${this.name}" is different when it is enabled or disabled.`)
          }
          if (mT !== gT && null !== gT) throw new Error(`The output depth texture of the task "${this.name}" is different when it is enabled or disabled.`);
          if (TT !== WT && null !== WT) throw new Error(`The output object list of the task "${this.name}" is different when it is enabled or disabled.`)
        }
      }
      _execute() {
        const TT = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
        this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const UT of TT) UT._execute()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
        this.onAfterTaskExecute.notifyObservers(this)
      }
      _initializePasses() {
        this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const TT of this._passes) TT._initialize();
          for (const TT of this._passesDisabled) TT._initialize()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
      }
      _checkSameRenderTarget(TT, UT) {
        if (null === TT || null === UT) return TT === UT;
        if (TT.length !== UT.length) return !1;
        for (let mT = 0; mT < TT.length; mT++)
          if (TT[mT] !== UT[mT]) return !1;
        return !0
      }
    }
    class eT extends OT {
      get alphaMode() {
        return this.postProcess.alphaMode
      }
      set alphaMode(TT) {
        this.postProcess.alphaMode = TT
      }
      get drawWrapper() {
        return this._postProcessDrawWrapper
      }
      constructor(TT, UT, mT) {
        super(TT, UT), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = mT, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture = this._frameGraph.textureManager.createDanglingHandle(), this.outputDepthAttachmentTexture = this._frameGraph.textureManager.createDanglingHandle()
      }
      isReady() {
        return this.postProcess.isReady()
      }
      getClassName() {
        return "FrameGraphPostProcessTask"
      }
      record() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          UT = arguments.length > 1 ? arguments[1] : void 0,
          mT = arguments.length > 2 ? arguments[2] : void 0;
        if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
        const WT = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
        if (WT && (WT.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, WT), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentTexture, this.depthAttachmentTexture), WT) {
          const TT = this._frameGraph.textureManager.getTextureAbsoluteDimensions(WT);
          this._sourceWidth = TT.width, this._sourceHeight = TT.height
        }
        const zT = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
        this._outputWidth = zT.size.width, this._outputHeight = zT.size.height;
        const MT = this._frameGraph.addRenderPass(this.name);
        if (MT.depthReadOnly = this.depthReadOnly, MT.stencilReadOnly = this.stencilReadOnly, MT.addDependencies(this.sourceTexture), MT.setRenderTarget(this.outputTexture), MT.setRenderTargetDepth(this.depthAttachmentTexture), MT.setExecuteFunc((TT => {
            TT.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && TT.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), UT?.(TT), this.viewport && TT.setViewport(this.viewport), TT.applyFullScreenEffect(this._postProcessDrawWrapper, (() => {
              void 0 !== this.sourceTexture && TT.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), mT?.(TT), this.postProcess.bind()
            }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), TT.restoreDefaultFramebuffer(), TT.popDebugGroup()
          })), !TT) {
          const TT = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
          TT.depthReadOnly = this.depthReadOnly, TT.stencilReadOnly = this.stencilReadOnly, TT.addDependencies(this.sourceTexture), TT.setRenderTarget(this.outputTexture), TT.setRenderTargetDepth(this.depthAttachmentTexture), TT.setExecuteFunc((TT => {
            void 0 !== this.sourceTexture && 0 === this.alphaMode && (this.viewport && TT.setViewport(this.viewport), TT.copyTexture(this.sourceTexture, void 0, void 0 !== this.viewport))
          }))
        }
        return MT
      }
      dispose() {
        this.postProcess.dispose(), super.dispose()
      }
    }
    class YT extends eT {
      constructor(TT, UT, mT) {
        super(TT, UT, mT || new jT(TT, UT.engine))
      }
      getClassName() {
        return "FrameGraphFXAATask"
      }
      record() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          UT = arguments.length > 1 ? arguments[1] : void 0,
          mT = arguments.length > 2 ? arguments[2] : void 0;
        const WT = super.record(TT, UT, mT);
        return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, WT
      }
    }
    var JT = mT(41969);
    class xT extends eT {
      constructor(TT, UT, mT) {
        super(TT, UT, mT || new JT.g(TT, UT.engine))
      }
      getClassName() {
        return "FrameGraphPassTask"
      }
    }
    var dT = mT(40198),
      wT = mT(40288),
      tT = mT(40251),
      aT = mT(40369),
      yT = mT(37367);
    class XT {
      getRenderCamera(TT) {
        if (this._renderCamera) return this._renderCamera;
        {
          let UT;
          return UT = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, TT && UT && UT.isRigCamera ? UT.rigParent : UT
        }
      }
      setRenderCamera(TT) {
        this._renderCamera = TT
      }
      _getSharedGizmoLight() {
        return this._sharedGizmoLight || (this._sharedGizmoLight = new aT.d("shared gizmo light", new kT.p(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = yT.d.Gray()), this._sharedGizmoLight
      }
      static get DefaultUtilityLayer() {
        return null == XT._DefaultUtilityLayer ? XT._CreateDefaultUtilityLayerFromScene(HT.c.LastCreatedScene) : XT._DefaultUtilityLayer
      }
      static _CreateDefaultUtilityLayerFromScene(TT) {
        return XT._DefaultUtilityLayer = new XT(TT), XT._DefaultUtilityLayer.originalScene.SF.addOnce((() => {
          XT._DefaultUtilityLayer = null
        })), XT._DefaultUtilityLayer
      }
      static get DefaultKeepDepthUtilityLayer() {
        return null == XT._DefaultKeepDepthUtilityLayer ? XT._CreateDefaultKeepUtilityLayerFromScene(HT.c.LastCreatedScene) : XT._DefaultKeepDepthUtilityLayer
      }
      static _CreateDefaultKeepUtilityLayerFromScene(TT) {
        return XT._DefaultKeepDepthUtilityLayer = new XT(TT), XT._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, XT._DefaultKeepDepthUtilityLayer.originalScene.SF.addOnce((() => {
          XT._DefaultKeepDepthUtilityLayer = null
        })), XT._DefaultKeepDepthUtilityLayer
      }
      constructor(TT) {
        let UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.originalScene = TT, this.handleEvents = UT, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.processAllEvents = !1, this.pickingEnabled = !0, this.onPointerOutObservable = new bT.d, this.utilityLayerScene = new dT.i(TT.eB(), {
          virtual: !0,
          useFloatingOrigin: TT.floatingOriginMode
        }), this.utilityLayerScene.useRightHandedSystem = TT.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), UT && (this._originalPointerObserver = TT.onPrePointerObservable.add((UT => {
          if (!this.utilityLayerScene.activeCamera) return;
          if (!this.pickingEnabled) return;
          if (!this.processAllEvents && UT.type !== wT.d.POINTERMOVE && UT.type !== wT.d.POINTERUP && UT.type !== wT.d.POINTERDOWN && UT.type !== wT.d.POINTERDOUBLETAP) return;
          this.utilityLayerScene.pointerX = TT.pointerX, this.utilityLayerScene.pointerY = TT.pointerY;
          const mT = UT.event;
          if (TT.isPointerCaptured(mT.pointerId)) return void(this._pointerCaptures[mT.pointerId] = !1);
          const WT = mT => {
              let WT;
              if (UT.nearInteractionPickingInfo) WT = UT.nearInteractionPickingInfo.pickedMesh.KF() == mT ? UT.nearInteractionPickingInfo : new tT.c;
              else if (mT !== this.utilityLayerScene && UT.originalPickingInfo) WT = UT.originalPickingInfo;
              else {
                let zT = null;
                this._renderCamera && (zT = mT._activeCamera, mT._activeCamera = this._renderCamera, UT.ray = null), WT = UT.ray ? mT.pickWithRay(UT.ray) : mT.VL(TT.pointerX, TT.pointerY), zT && (mT._activeCamera = zT)
              }
              return WT
            },
            zT = WT(this.utilityLayerScene);
          if (!UT.ray && zT && (UT.ray = zT.ray), UT.originalPickingInfo?.aimTransform && zT && (zT.aimTransform = UT.originalPickingInfo.aimTransform, zT.gripTransform = UT.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(UT), this.onlyCheckPointerDownEvents && UT.type != wT.d.POINTERDOWN) return UT.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new wT.h(UT.type, UT.event, zT), UT.type), void(UT.type === wT.d.POINTERUP && this._pointerCaptures[mT.pointerId] && (this._pointerCaptures[mT.pointerId] = !1));
          if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) zT && zT.hit && (UT.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new wT.h(UT.type, UT.event, zT), UT.type), UT.skipOnPointerObservable = !0);
          else {
            const mT = WT(TT),
              MT = UT.event;
            mT && zT && (0 === zT.distance && mT.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(mT.pickedMesh) ? (this._notifyObservers(UT, mT, MT), UT.skipOnPointerObservable = !0) : UT.type === wT.d.POINTERDOWN ? (this._pointerCaptures[MT.pointerId] = !0, this._notifyObservers(UT, mT, MT)) : UT.type !== wT.d.POINTERMOVE && UT.type !== wT.d.POINTERUP || (this._lastPointerEvents[MT.pointerId] && (this.onPointerOutObservable.notifyObservers(MT.pointerId), delete this._lastPointerEvents[MT.pointerId]), this._notifyObservers(UT, mT, MT)) : !this._pointerCaptures[MT.pointerId] && (zT.distance < mT.distance || 0 === mT.distance) ? (this._notifyObservers(UT, zT, MT), UT.skipOnPointerObservable || (UT.skipOnPointerObservable = zT.distance > 0)) : !this._pointerCaptures[MT.pointerId] && zT.distance >= mT.distance && (this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(mT.pickedMesh) ? (this._notifyObservers(UT, mT, MT), UT.skipOnPointerObservable = !0) : (UT.type !== wT.d.POINTERMOVE && UT.type !== wT.d.POINTERUP || this._lastPointerEvents[MT.pointerId] && (this.onPointerOutObservable.notifyObservers(MT.pointerId), delete this._lastPointerEvents[MT.pointerId]), this._notifyObservers(UT, zT, MT))), UT.type === wT.d.POINTERUP && this._pointerCaptures[MT.pointerId] && (this._pointerCaptures[MT.pointerId] = !1))
          }
        })), this._originalPointerObserver && TT.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, mT || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((TT => {
          this.shouldRender && TT == this.getRenderCamera() && this.render()
        }))), this._sceneDisposeObserver = this.originalScene.SF.add((() => {
          this.dispose()
        })), this._updateCamera()
      }
      _notifyObservers(TT, UT, mT) {
        TT.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new wT.h(TT.type, TT.event, UT), TT.type), this._lastPointerEvents[mT.pointerId] = !0)
      }
      render() {
        if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
          const TT = this.utilityLayerScene.activeCamera.KF(),
            UT = this.utilityLayerScene.activeCamera;
          UT._scene = this.utilityLayerScene, UT.leftCamera && (UT.leftCamera._scene = this.utilityLayerScene), UT.rightCamera && (UT.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), UT._scene = TT, UT.leftCamera && (UT.leftCamera._scene = TT), UT.rightCamera && (UT.rightCamera._scene = TT)
        }
      }
      dispose() {
        this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.SF.remove(this._sceneDisposeObserver), this._originalPointerObserver && this.originalScene.onPrePointerObservable.remove(this._originalPointerObserver), this.utilityLayerScene.dispose()
      }
      _updateCamera() {
        this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
      }
    }
    XT._DefaultUtilityLayer = null, XT._DefaultKeepDepthUtilityLayer = null;
    const IT = {
      FindMainCamera: function(TT) {
        return TT.findMainCamera()
      },
      FindMainObjectRenderer: function(TT) {
        return TT.findMainObjectRenderer()
      },
      CreateUtilityLayerRenderer: function(TT) {
        let UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const mT = TT.XZ,
          WT = new XT(mT, UT, !0);
        WT.utilityLayerScene.activeCamera = mT.activeCamera;
        let zT = IT.FindMainCamera(mT.frameGraph);
        !zT && mT.cameras.length > 0 && (zT = mT.cameras[0]), zT && (WT.setRenderCamera(zT), WT.utilityLayerScene.activeCamera = zT);
        const MT = mT.onAfterRenderObservable.add((() => {
          WT.render()
        }));
        return WT.utilityLayerScene.SF.addOnce((() => {
          mT.onAfterRenderObservable.remove(MT)
        })), WT
      }
    };
    let QT = null;

    function sT(TT, UT, mT, WT) {
      let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        MT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        gT = arguments.length > 6 ? arguments[6] : void 0,
        nT = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        HT = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
      const {
        height: kT,
        width: jT
      } = rT(TT, UT, mT);
      if (!kT || !jT) return void LT.b.Error("Invalid 'size' parameter !");
      const lT = UT.KF();
      let BT = lT.activeCamera !== UT;
      if (lT.frameGraph) {
        const TT = IT.FindMainObjectRenderer(lT.frameGraph);
        TT && (BT = TT.camera !== UT)
      }
      BT ? VT(TT, UT, mT, (TT => {
        if (MT) {
          const UT = new Blob([TT]);
          pT.j.DownloadBlob(UT), WT && WT("")
        } else WT && WT(TT)
      }), zT, 1, TT.getCreationOptions().antialias, void 0, void 0, void 0, void 0, gT) : TT.onEndFrameObservable.addOnce((() => {
        QT || (QT = document.createElement("canvas")), QT.width = jT, QT.height = kT;
        const UT = QT.getContext("2d"),
          mT = TT.getRenderingCanvas();
        if (!UT || !mT) return void LT.b.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
        const BT = mT.width,
          ZT = mT.height,
          cT = QT.width,
          vT = QT.height,
          fT = cT / BT,
          qT = vT / ZT,
          iT = nT ? Math.max(fT, qT) : Math.min(fT, qT),
          bT = BT * iT,
          OT = ZT * iT,
          eT = (cT - bT) / 2,
          YT = (vT - OT) / 2;
        UT.save(), UT.fillStyle = HT ? lT.clearColor.toHexString() : "rgba(0, 0, 0, 0)", UT.fillRect(0, 0, jT, kT), UT.restore(), UT.drawImage(mT, 0, 0, BT, ZT, eT, YT, bT, OT), MT ? (pT.j.EncodeScreenshotCanvasData(QT, void 0, zT, void 0, gT), WT && WT("")) : pT.j.EncodeScreenshotCanvasData(QT, WT, zT, void 0, gT)
      }))
    }
    async function FT(TT, UT, mT) {
      let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        zT = arguments.length > 4 ? arguments[4] : void 0,
        MT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        gT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        nT = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      return await new Promise(((HT, kT) => {
        sT(TT, UT, mT, (TT => {
          "undefined" !== typeof TT ? HT(TT) : kT(new Error("Data is undefined"))
        }), WT, nT, zT, MT, gT)
      }))
    }
    async function PT(TT, UT, mT, WT) {
      let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        MT = arguments.length > 5 ? arguments[5] : void 0,
        gT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return await new Promise((nT => {
        sT(TT, UT, {
          width: mT,
          height: WT
        }, (() => {
          nT()
        }), zT, !0, MT, gT)
      }))
    }

    function VT(TT, UT, MT, gT) {
      let nT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        HT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
        kT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        jT = arguments.length > 7 ? arguments[7] : void 0,
        pT = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        vT = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        fT = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
        qT = arguments.length > 11 ? arguments[11] : void 0,
        iT = arguments.length > 12 ? arguments[12] : void 0,
        bT = arguments.length > 13 ? arguments[13] : void 0,
        OT = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
        eT = arguments.length > 15 ? arguments[15] : void 0;
      const YT = UT.KF();
      if (YT.frameGraph) return void CT(YT.frameGraph, UT, MT, nT, HT, kT, jT, qT, bT, !gT).then((TT => {
        gT && gT(TT)
      }));
      const {
        height: JT,
        width: xT,
        finalWidth: dT,
        finalHeight: wT
      } = rT(TT, UT, MT), tT = {
        width: xT,
        height: JT
      };
      if (!JT || !xT) return void LT.b.Error("Invalid 'size' parameter !");
      TT.skipFrameRender = !0;
      const aT = TT.getRenderWidth,
        yT = TT.getRenderHeight;
      TT.getRenderWidth = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && TT._currentRenderTarget ? TT._currentRenderTarget.width : xT
      }, TT.getRenderHeight = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && TT._currentRenderTarget ? TT._currentRenderTarget.height : JT
      }, TT.onResizeObservable.hasObservers() && TT.onResizeObservable.notifyObservers(TT);
      const XT = new zT.d("screenShot", tT, YT, !1, !1, 0, !1, WT.g.BILINEAR_SAMPLINGMODE, void 0, vT, void 0, void 0, void 0, HT);
      XT.renderList = YT.meshes.slice(), XT.samples = HT, XT.renderSprites = pT, XT.activeCamera = UT, XT.forceLayerMaskCheck = fT, iT?.(XT);
      const IT = bT || BT.DumpData,
        QT = () => {
          YT.incrementRenderId(), YT.resetCachedMaterial(), (0, cT.i)((() => XT.isReadyForRendering() && UT.isReady(!0)), (() => {
            TT.onEndFrameObservable.addOnce((() => {
              dT === xT && wT === JT ? XT.readPixels(void 0, void 0, void 0, !1).then((TT => {
                IT(xT, JT, TT, gT, nT, jT, !0, void 0, qT), XT.dispose()
              })) : (TT.isWebGPU ? mT.e(375).then((() => mT(61318))) : mT.e(376).then((() => mT(61324)))).then((async () => await (0, ZT.d)("pass", XT.getInternalTexture(), YT, void 0, void 0, void 0, dT, wT).then((UT => {
                TT._readTexturePixels(UT, dT, wT, -1, 0, null, !0, !1, 0, 0).then((TT => {
                  IT(dT, wT, TT, gT, nT, jT, !0, void 0, qT), UT.dispose()
                }))
              }))))
            })), YT.incrementRenderId(), YT.resetCachedMaterial();
            const WT = YT.activeCamera,
              zT = YT.activeCameras,
              MT = UT.outputRenderTarget,
              HT = YT.spritesEnabled;
            YT.activeCamera = UT, YT.activeCameras = null, UT.outputRenderTarget = XT, YT.spritesEnabled = pT;
            const kT = YT.meshes;
            YT.meshes = XT.renderList || YT.meshes;
            try {
              YT.render()
            } finally {
              YT.activeCamera = WT, YT.activeCameras = zT, UT.outputRenderTarget = MT, YT.spritesEnabled = HT, YT.meshes = kT, TT.getRenderWidth = aT, TT.getRenderHeight = yT, TT.onResizeObservable.hasObservers() && TT.onResizeObservable.notifyObservers(TT), UT.getProjectionMatrix(!0), TT.skipFrameRender = !1
            }
          }), (() => {
            TT.skipFrameRender = !1, TT.getRenderWidth = aT, TT.getRenderHeight = yT, eT?.()
          }), void 0, OT)
        };
      if (kT) {
        const TT = new lT("antialiasing", 1, YT.activeCamera);
        XT.addPostProcess(TT), TT.autoClear = !0, TT.onEffectCreatedObservable.addOnce((TT => {
          TT.isReady() ? QT() : TT.onCompiled = () => {
            QT()
          }
        }))
      } else QT()
    }
    async function uT(TT, UT, mT) {
      let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        MT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        gT = arguments.length > 6 ? arguments[6] : void 0,
        nT = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        HT = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        kT = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
        jT = arguments.length > 10 ? arguments[10] : void 0,
        lT = arguments.length > 11 ? arguments[11] : void 0,
        LT = arguments.length > 12 ? arguments[12] : void 0;
      return await new Promise(((pT, BT) => {
        VT(TT, UT, mT, (TT => {
          "undefined" !== typeof TT ? pT(TT) : BT(new Error("Data is undefined"))
        }), WT, zT, MT, gT, nT, HT, kT, jT, lT, LT)
      }))
    }
    async function CT(TT, UT, mT) {
      let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        MT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        gT = arguments.length > 6 ? arguments[6] : void 0,
        nT = arguments.length > 7 ? arguments[7] : void 0,
        HT = arguments.length > 8 ? arguments[8] : void 0,
        kT = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        jT = arguments.length > 10 ? arguments[10] : void 0;
      const lT = TT.engine,
        LT = TT.textureManager,
        {
          height: pT,
          width: ZT,
          finalWidth: cT,
          finalHeight: fT
        } = rT(lT, UT, mT),
        qT = {
          width: ZT,
          height: pT
        },
        iT = HT || BT.DumpData,
        bT = TT.tasks,
        OT = bT.length,
        eT = TT.pausedExecution,
        JT = lT.getCaps().parallelShaderCompile;
      LT.setBackBufferTextures(0, 0, {
        size: qT,
        options: {
          createMipMaps: !1,
          samples: zT,
          types: [0],
          formats: [5],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot color"]
        },
        sizeIsPercentage: !1
      }, {
        size: qT,
        options: {
          createMipMaps: !1,
          samples: zT,
          types: [0],
          formats: [lT.isStencilEnable ? 13 : 14],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot depth"]
        },
        sizeIsPercentage: !1
      });
      let dT = vT;
      if (MT) {
        const UT = new YT("fxaa", TT);
        UT.sourceTexture = dT, dT = UT.outputTexture, TT.addTask(UT)
      }
      if (cT !== ZT || fT !== pT) {
        const UT = new xT("pass", TT);
        UT.sourceTexture = dT, UT.targetTexture = TT.textureManager.createRenderTargetTexture("pass_output", {
          size: {
            width: cT,
            height: fT
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
        }), dT = UT.outputTexture, TT.addTask(UT)
      }
      const wT = IT.FindMainObjectRenderer(TT);
      let tT = null;
      wT && (tT = wT.camera, wT.camera = UT), lT.getCaps().parallelShaderCompile = void 0, await TT.buildAsync();
      const aT = jT ?? (LT.hasHistoryTextures ? 32 : 1);
      for (let BT = 0; BT < aT; ++BT) TT.execute();
      TT.pausedExecution = !0, lT.getCaps().parallelShaderCompile = JT;
      for (let BT = OT; BT < bT.length; ++BT) TT.tasks[BT].dispose();
      TT.tasks.length = OT, wT && tT && (wT.camera = tT);
      const yT = TT.textureManager.getTextureFromHandle(dT);
      return yT.incrementReferences(), LT.resetBackBufferTextures(), await TT.buildAsync(), TT.pausedExecution = eT, new Promise((TT => {
        lT._readTexturePixels(yT, cT, fT, -1, 0, null, !0, !1, 0, 0).then((async UT => {
          yT.dispose(), iT(cT, fT, UT, kT ? void 0 : UT => TT(UT), WT, gT, !0, void 0, nT), kT && TT(null)
        }))
      }))
    }

    function rT(TT, UT, mT) {
      let WT = 0,
        zT = 0,
        MT = 0,
        gT = 0;
      if ("object" === typeof mT) {
        const nT = mT.precision ? Math.abs(mT.precision) : 1;
        mT.width && mT.height ? (WT = mT.height * nT, zT = mT.width * nT) : mT.width && !mT.height ? (zT = mT.width * nT, WT = Math.round(zT / TT.getAspectRatio(UT))) : mT.height && !mT.width ? (WT = mT.height * nT, zT = Math.round(WT * TT.getAspectRatio(UT))) : (zT = Math.round(TT.getRenderWidth() * nT), WT = Math.round(zT / TT.getAspectRatio(UT))), mT.finalWidth && mT.finalHeight ? (gT = mT.finalHeight, MT = mT.finalWidth) : mT.finalWidth && !mT.finalHeight ? (MT = mT.finalWidth, gT = Math.round(MT / TT.getAspectRatio(UT))) : mT.finalHeight && !mT.finalWidth ? (gT = mT.finalHeight, MT = Math.round(gT * TT.getAspectRatio(UT))) : (MT = zT, gT = WT)
      } else isNaN(mT) || (WT = mT, zT = mT, MT = mT, gT = mT);
      return zT && (zT = Math.floor(zT)), WT && (WT = Math.floor(WT)), MT && (MT = Math.floor(MT)), gT && (gT = Math.floor(gT)), {
        height: 0 | WT,
        width: 0 | zT,
        finalWidth: 0 | MT,
        finalHeight: 0 | gT
      }
    }
    const KT = {
      CreateScreenshot: sT,
      CreateScreenshotAsync: FT,
      CreateScreenshotWithResizeAsync: PT,
      CreateScreenshotUsingRenderTarget: VT,
      CreateScreenshotUsingRenderTargetAsync: uT,
      CreateScreenshotForFrameGraphAsync: CT
    };
    let ST = !1;

    function GT() {
      if (ST) return;
      ST = !0;
      pT.j.CreateScreenshot = sT, pT.j.CreateScreenshotAsync = FT, pT.j.CreateScreenshotUsingRenderTarget = VT, pT.j.CreateScreenshotUsingRenderTargetAsync = uT
    }
    GT()
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);