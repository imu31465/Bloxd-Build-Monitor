export const id = 243;
export const ids = [243, 244];
export const modules = {
  40631: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => VG,
      f: () => fG
    });
    var wG = ZG(40393),
      SG = ZG(40398),
      LG = ZG(37439),
      yG = ZG(37621),
      kG = ZG(40635),
      UG = ZG(40599),
      YG = ZG(37484);
    let VG = (() => {
        var GG;
        let bG, ZG, UG = kG.c,
          YG = [],
          VG = [],
          pG = [],
          fG = [];
        return GG = class extends UG {
          constructor(GG, bG, ZG, SG) {
            super(GG, ZG, SG), this.groundColor = (0, wG.n)(this, YG, new yG.c(0, 0, 0)), this.direction = ((0, wG.n)(this, VG), (0, wG.n)(this, pG, void 0)), (0, wG.n)(this, fG), this.direction = bG || LG.p.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(GG) {
            return this.direction = LG.p.Normalize(GG.subtract(LG.p.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(GG, bG) {
            const ZG = LG.p.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", ZG.x, ZG.y, ZG.z, 0, bG), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), bG), this
          }
          transferToNodeMaterialEffect(GG, bG) {
            const ZG = LG.p.Normalize(this.direction);
            return GG.setFloat3(bG, ZG.x, ZG.y, ZG.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = LG.e.Identity()), this._worldMatrix
          }
          getTypeID() {
            return kG.c.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(GG, bG) {
            GG["HEMILIGHT" + bG] = !0
          }
        }, (() => {
          const LG = "function" === typeof Symbol && Symbol.metadata ? Object.create(UG[Symbol.metadata] ?? null) : void 0;
          bG = [(0, SG.m)()], ZG = [(0, SG.M)()], (0, wG.k)(null, null, bG, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: GG => "groundColor" in GG,
              get: GG => GG.groundColor,
              set: (GG, bG) => {
                GG.groundColor = bG
              }
            },
            metadata: LG
          }, YG, VG), (0, wG.k)(null, null, ZG, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: GG => "direction" in GG,
              get: GG => GG.direction,
              set: (GG, bG) => {
                GG.direction = bG
              }
            },
            metadata: LG
          }, pG, fG), LG && Object.defineProperty(GG, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: LG
          })
        })(), GG
      })(),
      pG = !1;

    function fG() {
      pG || (pG = !0, UG.e.AddNodeConstructor("Light_Type_3", ((GG, bG) => () => new VG(GG, LG.p.Zero(), bG))), (0, YG.i)("BABYLON.HemisphericLight", VG))
    }
  },
  38167: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => SG
    });
    var wG = ZG(38175);
    class SG {
      static GetPlanes(GG) {
        const bG = [];
        for (let ZG = 0; ZG < 6; ZG++) bG.push(new wG.b(0, 0, 0, 0));
        return SG.GetPlanesToRef(GG, bG), bG
      }
      static GetNearPlaneToRef(GG, bG) {
        const ZG = GG.m;
        bG.normal.x = ZG[3] + ZG[2], bG.normal.y = ZG[7] + ZG[6], bG.normal.z = ZG[11] + ZG[10], bG.d = ZG[15] + ZG[14], bG.normalize()
      }
      static GetFarPlaneToRef(GG, bG) {
        const ZG = GG.m;
        bG.normal.x = ZG[3] - ZG[2], bG.normal.y = ZG[7] - ZG[6], bG.normal.z = ZG[11] - ZG[10], bG.d = ZG[15] - ZG[14], bG.normalize()
      }
      static GetLeftPlaneToRef(GG, bG) {
        const ZG = GG.m;
        bG.normal.x = ZG[3] + ZG[0], bG.normal.y = ZG[7] + ZG[4], bG.normal.z = ZG[11] + ZG[8], bG.d = ZG[15] + ZG[12], bG.normalize()
      }
      static GetRightPlaneToRef(GG, bG) {
        const ZG = GG.m;
        bG.normal.x = ZG[3] - ZG[0], bG.normal.y = ZG[7] - ZG[4], bG.normal.z = ZG[11] - ZG[8], bG.d = ZG[15] - ZG[12], bG.normalize()
      }
      static GetTopPlaneToRef(GG, bG) {
        const ZG = GG.m;
        bG.normal.x = ZG[3] - ZG[1], bG.normal.y = ZG[7] - ZG[5], bG.normal.z = ZG[11] - ZG[9], bG.d = ZG[15] - ZG[13], bG.normalize()
      }
      static GetBottomPlaneToRef(GG, bG) {
        const ZG = GG.m;
        bG.normal.x = ZG[3] + ZG[1], bG.normal.y = ZG[7] + ZG[5], bG.normal.z = ZG[11] + ZG[9], bG.d = ZG[15] + ZG[13], bG.normalize()
      }
      static GetPlanesToRef(GG, bG) {
        SG.GetNearPlaneToRef(GG, bG[0]), SG.GetFarPlaneToRef(GG, bG[1]), SG.GetLeftPlaneToRef(GG, bG[2]), SG.GetRightPlaneToRef(GG, bG[3]), SG.GetTopPlaneToRef(GG, bG[4]), SG.GetBottomPlaneToRef(GG, bG[5])
      }
      static IsPointInFrustum(GG, bG) {
        for (let ZG = 0; ZG < 6; ZG++)
          if (bG[ZG].dotCoordinate(GG) < 0) return !1;
        return !0
      }
    }
  },
  38175: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => SG
    });
    var wG = ZG(37439);
    class SG {
      constructor(GG, bG, ZG, SG) {
        this.normal = new wG.p(GG, bG, ZG), this.d = SG
      }
      mwG() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new SG(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let GG = this.normal.getHashCode();
        return GG = 397 * GG ^ this.d, GG
      }
      normalize() {
        const GG = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let bG = 0;
        return 0 !== GG && (bG = 1 / GG), this.normal.x *= bG, this.normal.y *= bG, this.normal.z *= bG, this.d *= bG, this
      }
      transform(GG) {
        const bG = SG._TmpMatrix;
        GG.invertToRef(bG);
        const ZG = bG.m,
          wG = this.normal.x,
          LG = this.normal.y,
          yG = this.normal.z,
          kG = this.d,
          UG = wG * ZG[0] + LG * ZG[1] + yG * ZG[2] + kG * ZG[3],
          YG = wG * ZG[4] + LG * ZG[5] + yG * ZG[6] + kG * ZG[7],
          VG = wG * ZG[8] + LG * ZG[9] + yG * ZG[10] + kG * ZG[11],
          pG = wG * ZG[12] + LG * ZG[13] + yG * ZG[14] + kG * ZG[15];
        return new SG(UG, YG, VG, pG)
      }
      dotCoordinate(GG) {
        return this.normal.x * GG.x + this.normal.y * GG.y + this.normal.z * GG.z + this.d
      }
      copyFromPoints(GG, bG, ZG) {
        const wG = bG.x - GG.x,
          SG = bG.y - GG.y,
          LG = bG.z - GG.z,
          yG = ZG.x - GG.x,
          kG = ZG.y - GG.y,
          UG = ZG.z - GG.z,
          YG = SG * UG - LG * kG,
          VG = LG * yG - wG * UG,
          pG = wG * kG - SG * yG,
          fG = Math.sqrt(YG * YG + VG * VG + pG * pG);
        let QG;
        return QG = 0 !== fG ? 1 / fG : 0, this.normal.x = YG * QG, this.normal.y = VG * QG, this.normal.z = pG * QG, this.d = -(this.normal.x * GG.x + this.normal.y * GG.y + this.normal.z * GG.z), this
      }
      isFrontFacingTo(GG, bG) {
        return wG.p.Dot(this.normal, GG) <= bG
      }
      signedDistanceTo(GG) {
        return wG.p.Dot(GG, this.normal) + this.d
      }
      static FromArray(GG) {
        return new SG(GG[0], GG[1], GG[2], GG[3])
      }
      static FromPoints(GG, bG, ZG) {
        const wG = new SG(0, 0, 0, 0);
        return wG.copyFromPoints(GG, bG, ZG), wG
      }
      static FromPositionAndNormal(GG, bG) {
        const ZG = new SG(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(GG, bG, ZG)
      }
      static FromPositionAndNormalToRef(GG, bG, ZG) {
        return ZG.normal.oW(bG), ZG.normal.normalize(), ZG.d = -GG.dot(ZG.normal), ZG
      }
      static SignedDistanceToPlaneFromPositionAndNormal(GG, bG, ZG) {
        const SG = -(bG.x * GG.x + bG.y * GG.y + bG.z * GG.z);
        return wG.p.Dot(ZG, bG) + SG
      }
    }
    SG._TmpMatrix = wG.e.Identity()
  },
  38499: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => wG
    });
    class wG {
      constructor(GG, bG, ZG, wG) {
        this.x = GG, this.y = bG, this.width = ZG, this.height = wG
      }
      toGlobal(GG, bG) {
        return new wG(this.x * GG, this.y * bG, this.width * GG, this.height * bG)
      }
      toGlobalToRef(GG, bG, ZG) {
        return ZG.x = this.x * GG, ZG.y = this.y * bG, ZG.width = this.width * GG, ZG.height = this.height * bG, this
      }
      clone() {
        return new wG(this.x, this.y, this.width, this.height)
      }
    }
  },
  39086: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => LG
    });
    var wG = ZG(39093);
    const SG = (GG, bG, ZG) => GG ? GG.getClassName && "Mesh" === GG.getClassName() ? null : !GG.getClassName || "SubMesh" !== GG.getClassName() && "PhysicsBody" !== GG.getClassName() ? GG.clone ? GG.clone() : Array.isArray(GG) ? GG.slice() : ZG && "object" === typeof GG ? {
      ...GG
    } : null : GG.clone(bG) : null;
    class LG {
      static DeepCopy(GG, bG, ZG, LG) {
        let yG = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const kG = function(GG) {
          const bG = [];
          do {
            const ZG = Object.getOwnPropertyNames(GG);
            for (const GG of ZG) - 1 === bG.indexOf(GG) && bG.push(GG)
          } while (GG = Object.getPrototypeOf(GG));
          return bG
        }(GG);
        for (const YG of kG) {
          if ("_" === YG[0] && (!LG || -1 === LG.indexOf(YG))) continue;
          if (YG.endsWith("Observable")) continue;
          if (ZG && -1 !== ZG.indexOf(YG)) continue;
          const kG = GG[YG],
            VG = typeof kG;
          if ("function" !== VG) try {
            if ("object" === VG)
              if (kG instanceof Uint8Array) bG[YG] = Uint8Array.from(kG);
              else if (kG instanceof Array) {
              if (bG[YG] = [], kG.length > 0)
                if ("object" == typeof kG[0])
                  for (let GG = 0; GG < kG.length; GG++) {
                    const ZG = SG(kG[GG], bG, yG); - 1 === bG[YG].indexOf(ZG) && bG[YG].push(ZG)
                  } else bG[YG] = kG.slice(0)
            } else bG[YG] = SG(kG, bG, yG);
            else bG[YG] = kG
          } catch (UG) {
            wG.c.Warn(UG.message)
          }
        }
      }
    }
  },
  38311: (GG, bG, ZG) => {
    function wG() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (GG => {
        const bG = 16 * Math.random() | 0;
        return ("x" === GG ? bG : 3 & bG | 8).toString(16)
      }))
    }
    ZG.d(bG, {
      e: () => wG
    })
  },
  39093: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => wG
    });
    class wG {
      static _CheckLimit(GG, bG) {
        let ZG = wG._LogLimitOutputs[GG];
        return ZG ? ZG.current++ : (ZG = {
          limit: bG,
          current: 1
        }, wG._LogLimitOutputs[GG] = ZG), ZG.current <= ZG.limit
      }
      static _GenerateLimitMessage(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const ZG = wG._LogLimitOutputs[GG];
        if (!ZG || !wG.MessageLimitReached) return;
        const SG = this._Levels[bG];
        ZG.current === ZG.limit && wG[SG.name](wG.MessageLimitReached.replace(/%LIMIT%/g, "" + ZG.limit).replace(/%TYPE%/g, SG.name ?? ""))
      }
      static _AddLogEntry(GG) {
        wG._LogCache = GG + wG._LogCache, wG.OnNewCacheEntry && wG.OnNewCacheEntry(GG)
      }
      static _FormatMessage(GG) {
        const bG = GG => GG < 10 ? "0" + GG : "" + GG,
          ZG = new Date;
        return "[" + bG(ZG.getHours()) + ":" + bG(ZG.getMinutes()) + ":" + bG(ZG.getSeconds()) + "]: " + GG
      }
      static _LogDisabled(GG, bG) {}
      static _LogEnabled() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          bG = arguments.length > 1 ? arguments[1] : void 0,
          ZG = arguments.length > 2 ? arguments[2] : void 0;
        const SG = Array.isArray(bG) ? bG[0] : bG;
        if (void 0 !== ZG && !wG._CheckLimit(SG, ZG)) return;
        const LG = wG._FormatMessage(SG),
          yG = this._Levels[GG],
          kG = Array.isArray(bG) ? bG.slice(1) : [];
        yG.logFunc && yG.logFunc("BJS - " + LG, ...kG);
        const UG = `<div style='color:${yG.color}'>${LG}</div><br>`;
        wG._AddLogEntry(UG), wG._GenerateLimitMessage(SG, GG)
      }
      static get LogCache() {
        return wG._LogCache
      }
      static ClearLogCache() {
        wG._LogCache = "", wG._LogLimitOutputs = {}, wG.errorsCount = 0
      }
      static set LogLevels(GG) {
        wG.Log = wG._LogDisabled, wG.Warn = wG._LogDisabled, wG.Error = wG._LogDisabled;
        const bG = [wG.MessageLogLevel, wG.WarningLogLevel, wG.ErrorLogLevel];
        for (const ZG of bG)
          if ((GG & ZG) === ZG) {
            const GG = this._Levels[ZG];
            wG[GG.name] = wG._LogEnabled.bind(wG, ZG)
          }
      }
    }
    wG.NoneLogLevel = 0, wG.MessageLogLevel = 1, wG.WarningLogLevel = 2, wG.ErrorLogLevel = 4, wG.AllLogLevel = 7, wG.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", wG._LogCache = "", wG._LogLimitOutputs = {}, wG._Levels = [{}, {
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
    }], wG.errorsCount = 0, wG.Log = wG._LogEnabled.bind(wG, wG.MessageLogLevel), wG.Warn = wG._LogEnabled.bind(wG, wG.WarningLogLevel), wG.Error = wG._LogEnabled.bind(wG, wG.ErrorLogLevel)
  },
  61807: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      CreateScreenshot: () => PG,
      CreateScreenshotAsync: () => MG,
      CreateScreenshotForFrameGraphAsync: () => nG,
      CreateScreenshotUsingRenderTarget: () => sG,
      CreateScreenshotUsingRenderTargetAsync: () => qG,
      CreateScreenshotWithResizeAsync: () => AG,
      RegisterScreenshotTools: () => TG,
      ScreenshotTools: () => eG
    });
    var wG = ZG(40857),
      SG = ZG(42277),
      LG = ZG(42248),
      yG = ZG(40416),
      kG = ZG(42253),
      UG = ZG(37463),
      YG = ZG(37439);
    class VG extends kG.e {
      static _GetDefines(GG) {
        if (!GG) return null;
        return GG.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
      }
      _gatherImports(GG, bG) {
        GG ? (this._webGPUReady = !0, bG.push(Promise.all([ZG.e(379).then((() => ZG(62072))), ZG.e(380).then((() => ZG(62081)))]))) : bG.push(Promise.all([ZG.e(381).then((() => ZG(62084))), ZG.e(382).then((() => ZG(62086)))]))
      }
      constructor(GG) {
        const bG = {
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: GG,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || UG.c.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          vertexShader: VG.VertexUrl,
          fragmentShader: VG.FragmentUrl,
          uniforms: VG.Uniforms
        };
        super({
          ...bG,
          defines: VG._GetDefines(bG.engine)
        }), this.texelSize = new YG.m(0, 0)
      }
      bind() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.bind(GG), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
      }
    }
    VG.VertexUrl = "fxaa", VG.FragmentUrl = "fxaa", VG.Uniforms = ["texelSize"];
    class pG extends LG.e {
      getClassName() {
        return "FxaaPostProcess"
      }
      constructor(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          SG = arguments.length > 3 ? arguments[3] : void 0,
          LG = arguments.length > 4 ? arguments[4] : void 0,
          yG = arguments.length > 5 ? arguments[5] : void 0,
          kG = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const UG = {
          uniforms: VG.Uniforms,
          size: "number" === typeof bG ? bG : void 0,
          camera: ZG,
          samplingMode: SG || wG.d.BILINEAR_SAMPLINGMODE,
          engine: LG,
          reusable: yG,
          textureType: kG,
          ...bG
        };
        super(GG, VG.FragmentUrl, {
          effectWrapper: "number" !== typeof bG && bG.effectWrapper ? void 0 : new VG(GG, LG, UG),
          ...UG
        }), this.onApplyObservable.add((GG => {
          this._effectWrapper.texelSize = this.texelSize
        }))
      }
      static _Parse(GG, bG, ZG, wG) {
        return yG.b.Parse((() => new pG(GG.name, GG.options, bG, GG.renderTargetSamplingMode, ZG.CK(), GG.reusable)), GG, ZG, wG)
      }
    }
    var fG = ZG(39093),
      QG = ZG(40477),
      KG = ZG(42289),
      hG = ZG(42268),
      dG = ZG(40271);
    const JG = 0;
    class rG {
      constructor(GG, bG, ZG) {
        this.name = GG, this._parentTask = bG, this._context = ZG, this.disabled = !1
      }
      setInitializeFunc(GG) {
        this._initFunc = GG
      }
      setExecuteFunc(GG) {
        this._executeFunc = GG
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
    class zG extends rG {
      static IsObjectListPass(GG) {
        return void 0 !== GG.setObjectList
      }
      get objectList() {
        return this._objectList
      }
      setObjectList(GG) {
        this._objectList = GG
      }
      constructor(GG, bG, ZG, wG) {
        super(GG, bG, ZG), this._engine = wG
      }
      _isValid() {
        const GG = super._isValid();
        return GG || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
      }
    }
    class EG extends rG {
      static IsRenderPass(GG) {
        return void 0 !== GG.setRenderTarget
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
      constructor(GG, bG, ZG, wG) {
        super(GG, bG, ZG), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = wG
      }
      setRenderTarget(GG) {
        this._renderTarget = GG
      }
      setRenderTargetDepth(GG) {
        this._renderTargetDepth = GG
      }
      addDependencies(GG) {
        if (void 0 !== GG)
          if (Array.isArray(GG))
            for (const bG of GG) this._dependencies.add(bG);
          else this._dependencies.add(GG)
      }
      collectDependencies(GG) {
        const bG = this._dependencies.keys();
        for (let ZG = bG.next(); !0 !== ZG.done; ZG = bG.next()) GG.add(ZG.value);
        if (void 0 !== this._renderTarget)
          if (Array.isArray(this._renderTarget))
            for (const ZG of this._renderTarget) void 0 !== ZG && GG.add(ZG);
          else GG.add(this._renderTarget);
        void 0 !== this._renderTargetDepth && GG.add(this._renderTargetDepth)
      }
      setOutputLayerAndFaceIndices(GG) {
        const bG = this.frameGraphRenderTarget.renderTargetWrapper;
        if (bG)
          for (const ZG of GG) bG.setLayerAndFaceIndex(ZG.targetIndex, ZG.layerIndex, ZG.faceIndex)
      }
      _initialize() {
        this._frameGraphRenderTarget = this._context.createRenderTarget(this.name, this._renderTarget, this._renderTargetDepth, this.depthReadOnly, this.stencilReadOnly), super._initialize()
      }
      _execute() {
        this._context.bindRenderTarget(this._frameGraphRenderTarget), super._execute(), this._context.restoreDefaultFramebuffer()
      }
      _isValid() {
        const GG = super._isValid();
        return GG || (void 0 !== this._renderTarget || void 0 !== this.renderTargetDepth ? null : "Render target and render target depth cannot both be undefined.")
      }
      _dispose() {
        this._frameGraphRenderTarget?.dispose()
      }
    }
    var oG = ZG(37465);
    class XG {
      get name() {
        return this._name
      }
      set name(GG) {
        this._name = GG
      }
      get disabled() {
        return this._disabled
      }
      set disabled(GG) {
        this._disabled = GG
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
      constructor(GG, bG) {
        this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new oG.c, this.onBeforeTaskExecute = new oG.c, this.onAfterTaskExecute = new oG.c, this.name = GG, this._frameGraph = bG, this._reset()
      }
      _reset() {
        for (const GG of this._passes) GG._dispose();
        for (const GG of this._passesDisabled) GG._dispose();
        this._passes.length = 0, this._passesDisabled.length = 0
      }
      _addPass(GG, bG) {
        bG ? this._passesDisabled.push(GG) : this._passes.push(GG)
      }
      _checkTask() {
        let GG, bG = null,
          ZG = null;
        for (const kG of this._passes) {
          const wG = kG._isValid();
          if (wG) throw new Error(`Pass "${kG.name}" is not valid. ${wG}`);
          if (EG.IsRenderPass(kG)) {
            const GG = Array.isArray(kG.renderTarget) ? kG.renderTarget : [kG.renderTarget];
            bG = [];
            for (const ZG of GG) void 0 !== ZG && bG.push(this._frameGraph.textureManager.getTextureFromHandle(ZG));
            ZG = void 0 !== kG.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(kG.renderTargetDepth) : null
          } else zG.IsObjectListPass(kG) && (GG = kG.objectList)
        }
        let wG, SG = null,
          LG = [],
          yG = null;
        for (const kG of this._passesDisabled) {
          const GG = kG._isValid();
          if (GG) throw new Error(`Pass "${kG.name}" is not valid. ${GG}`);
          if (EG.IsRenderPass(kG)) {
            const GG = Array.isArray(kG.renderTarget) ? kG.renderTarget : [kG.renderTarget];
            SG = [];
            for (const bG of GG) void 0 !== bG && SG.push(this._frameGraph.textureManager.getTextureFromHandle(bG));
            LG = GG, yG = void 0 !== kG.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(kG.renderTargetDepth) : null
          } else zG.IsObjectListPass(kG) && (wG = kG.objectList)
        }
        if (this._passesDisabled.length > 0) {
          if (!this._checkSameRenderTarget(bG, SG)) {
            let GG = !0;
            for (const bG of LG)
              if (void 0 !== bG && !this._frameGraph.textureManager.isHistoryTexture(bG)) {
                GG = !1;
                break
              } if (!GG) throw new Error(`The output texture of the task "${this.name}" is different when it is enabled or disabled.`)
          }
          if (ZG !== yG && null !== yG) throw new Error(`The output depth texture of the task "${this.name}" is different when it is enabled or disabled.`);
          if (GG !== wG && null !== wG) throw new Error(`The output object list of the task "${this.name}" is different when it is enabled or disabled.`)
        }
      }
      _execute() {
        const GG = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
        this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const bG of GG) bG._execute()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
        this.onAfterTaskExecute.notifyObservers(this)
      }
      _initializePasses() {
        this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const GG of this._passes) GG._initialize();
          for (const GG of this._passesDisabled) GG._initialize()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
      }
      _checkSameRenderTarget(GG, bG) {
        if (null === GG || null === bG) return GG === bG;
        if (GG.length !== bG.length) return !1;
        for (let ZG = 0; ZG < GG.length; ZG++)
          if (GG[ZG] !== bG[ZG]) return !1;
        return !0
      }
    }
    class uG extends XG {
      get alphaMode() {
        return this.postProcess.alphaMode
      }
      set alphaMode(GG) {
        this.postProcess.alphaMode = GG
      }
      get drawWrapper() {
        return this._postProcessDrawWrapper
      }
      constructor(GG, bG, ZG) {
        super(GG, bG), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = ZG, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture = this._frameGraph.textureManager.createDanglingHandle(), this.outputDepthAttachmentTexture = this._frameGraph.textureManager.createDanglingHandle()
      }
      isReady() {
        return this.postProcess.isReady()
      }
      getClassName() {
        return "FrameGraphPostProcessTask"
      }
      record() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          bG = arguments.length > 1 ? arguments[1] : void 0,
          ZG = arguments.length > 2 ? arguments[2] : void 0;
        if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
        const wG = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
        if (wG && (wG.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, wG), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentTexture, this.depthAttachmentTexture), wG) {
          const GG = this._frameGraph.textureManager.getTextureAbsoluteDimensions(wG);
          this._sourceWidth = GG.width, this._sourceHeight = GG.height
        }
        const SG = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
        this._outputWidth = SG.size.width, this._outputHeight = SG.size.height;
        const LG = this._frameGraph.addRenderPass(this.name);
        if (LG.depthReadOnly = this.depthReadOnly, LG.stencilReadOnly = this.stencilReadOnly, LG.addDependencies(this.sourceTexture), LG.setRenderTarget(this.outputTexture), LG.setRenderTargetDepth(this.depthAttachmentTexture), LG.setExecuteFunc((GG => {
            GG.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && GG.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), bG?.(GG), this.viewport && GG.setViewport(this.viewport), GG.applyFullScreenEffect(this._postProcessDrawWrapper, (() => {
              void 0 !== this.sourceTexture && GG.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), ZG?.(GG), this.postProcess.bind()
            }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), GG.restoreDefaultFramebuffer(), GG.popDebugGroup()
          })), !GG) {
          const GG = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
          GG.depthReadOnly = this.depthReadOnly, GG.stencilReadOnly = this.stencilReadOnly, GG.addDependencies(this.sourceTexture), GG.setRenderTarget(this.outputTexture), GG.setRenderTargetDepth(this.depthAttachmentTexture), GG.setExecuteFunc((GG => {
            void 0 !== this.sourceTexture && 0 === this.alphaMode && (this.viewport && GG.setViewport(this.viewport), GG.copyTexture(this.sourceTexture, void 0, void 0 !== this.viewport))
          }))
        }
        return LG
      }
      dispose() {
        this.postProcess.dispose(), super.dispose()
      }
    }
    class iG extends uG {
      constructor(GG, bG, ZG) {
        super(GG, bG, ZG || new VG(GG, bG.engine))
      }
      getClassName() {
        return "FrameGraphFXAATask"
      }
      record() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          bG = arguments.length > 1 ? arguments[1] : void 0,
          ZG = arguments.length > 2 ? arguments[2] : void 0;
        const wG = super.record(GG, bG, ZG);
        return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, wG
      }
    }
    var CG = ZG(42286);
    class WG extends uG {
      constructor(GG, bG, ZG) {
        super(GG, bG, ZG || new CG.g(GG, bG.engine))
      }
      getClassName() {
        return "FrameGraphPassTask"
      }
    }
    var mG = ZG(40475),
      IG = ZG(40550),
      FG = ZG(40517),
      vG = ZG(40631),
      aG = ZG(37621);
    class cG {
      getRenderCamera(GG) {
        if (this._renderCamera) return this._renderCamera;
        {
          let bG;
          return bG = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, GG && bG && bG.isRigCamera ? bG.rigParent : bG
        }
      }
      setRenderCamera(GG) {
        this._renderCamera = GG
      }
      _getSharedGizmoLight() {
        return this._sharedGizmoLight || (this._sharedGizmoLight = new vG.e("shared gizmo light", new YG.p(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = aG.c.Gray()), this._sharedGizmoLight
      }
      static get DefaultUtilityLayer() {
        return null == cG._DefaultUtilityLayer ? cG._CreateDefaultUtilityLayerFromScene(UG.c.LastCreatedScene) : cG._DefaultUtilityLayer
      }
      static _CreateDefaultUtilityLayerFromScene(GG) {
        return cG._DefaultUtilityLayer = new cG(GG), cG._DefaultUtilityLayer.originalScene.Gl.addOnce((() => {
          cG._DefaultUtilityLayer = null
        })), cG._DefaultUtilityLayer
      }
      static get DefaultKeepDepthUtilityLayer() {
        return null == cG._DefaultKeepDepthUtilityLayer ? cG._CreateDefaultKeepUtilityLayerFromScene(UG.c.LastCreatedScene) : cG._DefaultKeepDepthUtilityLayer
      }
      static _CreateDefaultKeepUtilityLayerFromScene(GG) {
        return cG._DefaultKeepDepthUtilityLayer = new cG(GG), cG._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, cG._DefaultKeepDepthUtilityLayer.originalScene.Gl.addOnce((() => {
          cG._DefaultKeepDepthUtilityLayer = null
        })), cG._DefaultKeepDepthUtilityLayer
      }
      constructor(GG) {
        let bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.originalScene = GG, this.handleEvents = bG, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.processAllEvents = !1, this.pickingEnabled = !0, this.onPointerOutObservable = new oG.c, this.utilityLayerScene = new mG.f(GG.CK(), {
          virtual: !0,
          useFloatingOrigin: GG.floatingOriginMode
        }), this.utilityLayerScene.useRightHandedSystem = GG.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), bG && (this._originalPointerObserver = GG.onPrePointerObservable.add((bG => {
          if (!this.utilityLayerScene.activeCamera) return;
          if (!this.pickingEnabled) return;
          if (!this.processAllEvents && bG.type !== IG.b.POINTERMOVE && bG.type !== IG.b.POINTERUP && bG.type !== IG.b.POINTERDOWN && bG.type !== IG.b.POINTERDOUBLETAP) return;
          this.utilityLayerScene.pointerX = GG.pointerX, this.utilityLayerScene.pointerY = GG.pointerY;
          const ZG = bG.event;
          if (GG.isPointerCaptured(ZG.pointerId)) return void(this._pointerCaptures[ZG.pointerId] = !1);
          const wG = ZG => {
              let wG;
              if (bG.nearInteractionPickingInfo) wG = bG.nearInteractionPickingInfo.pickedMesh.Dv() == ZG ? bG.nearInteractionPickingInfo : new FG.c;
              else if (ZG !== this.utilityLayerScene && bG.originalPickingInfo) wG = bG.originalPickingInfo;
              else {
                let SG = null;
                this._renderCamera && (SG = ZG._activeCamera, ZG._activeCamera = this._renderCamera, bG.ray = null), wG = bG.ray ? ZG.pickWithRay(bG.ray) : ZG.Df(GG.pointerX, GG.pointerY), SG && (ZG._activeCamera = SG)
              }
              return wG
            },
            SG = wG(this.utilityLayerScene);
          if (!bG.ray && SG && (bG.ray = SG.ray), bG.originalPickingInfo?.aimTransform && SG && (SG.aimTransform = bG.originalPickingInfo.aimTransform, SG.gripTransform = bG.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(bG), this.onlyCheckPointerDownEvents && bG.type != IG.b.POINTERDOWN) return bG.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new IG.h(bG.type, bG.event, SG), bG.type), void(bG.type === IG.b.POINTERUP && this._pointerCaptures[ZG.pointerId] && (this._pointerCaptures[ZG.pointerId] = !1));
          if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) SG && SG.hit && (bG.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new IG.h(bG.type, bG.event, SG), bG.type), bG.skipOnPointerObservable = !0);
          else {
            const ZG = wG(GG),
              LG = bG.event;
            ZG && SG && (0 === SG.distance && ZG.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(ZG.pickedMesh) ? (this._notifyObservers(bG, ZG, LG), bG.skipOnPointerObservable = !0) : bG.type === IG.b.POINTERDOWN ? (this._pointerCaptures[LG.pointerId] = !0, this._notifyObservers(bG, ZG, LG)) : bG.type !== IG.b.POINTERMOVE && bG.type !== IG.b.POINTERUP || (this._lastPointerEvents[LG.pointerId] && (this.onPointerOutObservable.notifyObservers(LG.pointerId), delete this._lastPointerEvents[LG.pointerId]), this._notifyObservers(bG, ZG, LG)) : !this._pointerCaptures[LG.pointerId] && (SG.distance < ZG.distance || 0 === ZG.distance) ? (this._notifyObservers(bG, SG, LG), bG.skipOnPointerObservable || (bG.skipOnPointerObservable = SG.distance > 0)) : !this._pointerCaptures[LG.pointerId] && SG.distance >= ZG.distance && (this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(ZG.pickedMesh) ? (this._notifyObservers(bG, ZG, LG), bG.skipOnPointerObservable = !0) : (bG.type !== IG.b.POINTERMOVE && bG.type !== IG.b.POINTERUP || this._lastPointerEvents[LG.pointerId] && (this.onPointerOutObservable.notifyObservers(LG.pointerId), delete this._lastPointerEvents[LG.pointerId]), this._notifyObservers(bG, SG, LG))), bG.type === IG.b.POINTERUP && this._pointerCaptures[LG.pointerId] && (this._pointerCaptures[LG.pointerId] = !1))
          }
        })), this._originalPointerObserver && GG.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, ZG || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((GG => {
          this.shouldRender && GG == this.getRenderCamera() && this.render()
        }))), this._sceneDisposeObserver = this.originalScene.Gl.add((() => {
          this.dispose()
        })), this._updateCamera()
      }
      _notifyObservers(GG, bG, ZG) {
        GG.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new IG.h(GG.type, GG.event, bG), GG.type), this._lastPointerEvents[ZG.pointerId] = !0)
      }
      render() {
        if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
          const GG = this.utilityLayerScene.activeCamera.Dv(),
            bG = this.utilityLayerScene.activeCamera;
          bG._scene = this.utilityLayerScene, bG.leftCamera && (bG.leftCamera._scene = this.utilityLayerScene), bG.rightCamera && (bG.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), bG._scene = GG, bG.leftCamera && (bG.leftCamera._scene = GG), bG.rightCamera && (bG.rightCamera._scene = GG)
        }
      }
      dispose() {
        this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.Gl.remove(this._sceneDisposeObserver), this._originalPointerObserver && this.originalScene.onPrePointerObservable.remove(this._originalPointerObserver), this.utilityLayerScene.dispose()
      }
      _updateCamera() {
        this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
      }
    }
    cG._DefaultUtilityLayer = null, cG._DefaultKeepDepthUtilityLayer = null;
    const lG = {
      FindMainCamera: function(GG) {
        return GG.findMainCamera()
      },
      FindMainObjectRenderer: function(GG) {
        return GG.findMainObjectRenderer()
      },
      CreateUtilityLayerRenderer: function(GG) {
        let bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const ZG = GG.Ah,
          wG = new cG(ZG, bG, !0);
        wG.utilityLayerScene.activeCamera = ZG.activeCamera;
        let SG = lG.FindMainCamera(ZG.frameGraph);
        !SG && ZG.cameras.length > 0 && (SG = ZG.cameras[0]), SG && (wG.setRenderCamera(SG), wG.utilityLayerScene.activeCamera = SG);
        const LG = ZG.onAfterRenderObservable.add((() => {
          wG.render()
        }));
        return wG.utilityLayerScene.Gl.addOnce((() => {
          ZG.onAfterRenderObservable.remove(LG)
        })), wG
      }
    };
    let jG = null;

    function PG(GG, bG, ZG, wG) {
      let SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        LG = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        yG = arguments.length > 6 ? arguments[6] : void 0,
        kG = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        UG = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
      const {
        height: YG,
        width: VG
      } = gG(GG, bG, ZG);
      if (!YG || !VG) return void fG.c.Error("Invalid 'size' parameter !");
      const pG = bG.Dv();
      let KG = pG.activeCamera !== bG;
      if (pG.frameGraph) {
        const GG = lG.FindMainObjectRenderer(pG.frameGraph);
        GG && (KG = GG.camera !== bG)
      }
      KG ? sG(GG, bG, ZG, (GG => {
        if (LG) {
          const bG = new Blob([GG]);
          QG.f.DownloadBlob(bG), wG && wG("")
        } else wG && wG(GG)
      }), SG, 1, GG.getCreationOptions().antialias, void 0, void 0, void 0, void 0, yG) : GG.onEndFrameObservable.addOnce((() => {
        jG || (jG = document.createElement("canvas")), jG.width = VG, jG.height = YG;
        const bG = jG.getContext("2d"),
          ZG = GG.getRenderingCanvas();
        if (!bG || !ZG) return void fG.c.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
        const KG = ZG.width,
          hG = ZG.height,
          dG = jG.width,
          JG = jG.height,
          rG = dG / KG,
          zG = JG / hG,
          EG = kG ? Math.max(rG, zG) : Math.min(rG, zG),
          oG = KG * EG,
          XG = hG * EG,
          uG = (dG - oG) / 2,
          iG = (JG - XG) / 2;
        bG.save(), bG.fillStyle = UG ? pG.clearColor.toHexString() : "rgba(0, 0, 0, 0)", bG.fillRect(0, 0, VG, YG), bG.restore(), bG.drawImage(ZG, 0, 0, KG, hG, uG, iG, oG, XG), LG ? (QG.f.EncodeScreenshotCanvasData(jG, void 0, SG, void 0, yG), wG && wG("")) : QG.f.EncodeScreenshotCanvasData(jG, wG, SG, void 0, yG)
      }))
    }
    async function MG(GG, bG, ZG) {
      let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        SG = arguments.length > 4 ? arguments[4] : void 0,
        LG = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        yG = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        kG = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      return await new Promise(((UG, YG) => {
        PG(GG, bG, ZG, (GG => {
          "undefined" !== typeof GG ? UG(GG) : YG(new Error("Data is undefined"))
        }), wG, kG, SG, LG, yG)
      }))
    }
    async function AG(GG, bG, ZG, wG) {
      let SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        LG = arguments.length > 5 ? arguments[5] : void 0,
        yG = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return await new Promise((kG => {
        PG(GG, bG, {
          width: ZG,
          height: wG
        }, (() => {
          kG()
        }), SG, !0, LG, yG)
      }))
    }

    function sG(GG, bG, LG, yG) {
      let kG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        UG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
        YG = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        VG = arguments.length > 7 ? arguments[7] : void 0,
        QG = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        JG = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        rG = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
        zG = arguments.length > 11 ? arguments[11] : void 0,
        EG = arguments.length > 12 ? arguments[12] : void 0,
        oG = arguments.length > 13 ? arguments[13] : void 0,
        XG = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
        uG = arguments.length > 15 ? arguments[15] : void 0;
      const iG = bG.Dv();
      if (iG.frameGraph) return void nG(iG.frameGraph, bG, LG, kG, UG, YG, VG, zG, oG, !yG).then((GG => {
        yG && yG(GG)
      }));
      const {
        height: CG,
        width: WG,
        finalWidth: mG,
        finalHeight: IG
      } = gG(GG, bG, LG), FG = {
        width: WG,
        height: CG
      };
      if (!CG || !WG) return void fG.c.Error("Invalid 'size' parameter !");
      GG.skipFrameRender = !0;
      const vG = GG.getRenderWidth,
        aG = GG.getRenderHeight;
      GG.getRenderWidth = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && GG._currentRenderTarget ? GG._currentRenderTarget.width : WG
      }, GG.getRenderHeight = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && GG._currentRenderTarget ? GG._currentRenderTarget.height : CG
      }, GG.onResizeObservable.hasObservers() && GG.onResizeObservable.notifyObservers(GG);
      const cG = new SG.b("screenShot", FG, iG, !1, !1, 0, !1, wG.d.BILINEAR_SAMPLINGMODE, void 0, JG, void 0, void 0, void 0, UG);
      cG.renderList = iG.meshes.slice(), cG.samples = UG, cG.renderSprites = QG, cG.activeCamera = bG, cG.forceLayerMaskCheck = rG, EG?.(cG);
      const lG = oG || KG.DumpData,
        jG = () => {
          iG.incrementRenderId(), iG.resetCachedMaterial(), (0, dG.c)((() => cG.isReadyForRendering() && bG.isReady(!0)), (() => {
            GG.onEndFrameObservable.addOnce((() => {
              mG === WG && IG === CG ? cG.readPixels(void 0, void 0, void 0, !1).then((GG => {
                lG(WG, CG, GG, yG, kG, VG, !0, void 0, zG), cG.dispose()
              })) : (GG.isWebGPU ? ZG.e(375).then((() => ZG(62004))) : ZG.e(376).then((() => ZG(62011)))).then((async () => await (0, hG.e)("pass", cG.getInternalTexture(), iG, void 0, void 0, void 0, mG, IG).then((bG => {
                GG._readTexturePixels(bG, mG, IG, -1, 0, null, !0, !1, 0, 0).then((GG => {
                  lG(mG, IG, GG, yG, kG, VG, !0, void 0, zG), bG.dispose()
                }))
              }))))
            })), iG.incrementRenderId(), iG.resetCachedMaterial();
            const wG = iG.activeCamera,
              SG = iG.activeCameras,
              LG = bG.outputRenderTarget,
              UG = iG.spritesEnabled;
            iG.activeCamera = bG, iG.activeCameras = null, bG.outputRenderTarget = cG, iG.spritesEnabled = QG;
            const YG = iG.meshes;
            iG.meshes = cG.renderList || iG.meshes;
            try {
              iG.render()
            } finally {
              iG.activeCamera = wG, iG.activeCameras = SG, bG.outputRenderTarget = LG, iG.spritesEnabled = UG, iG.meshes = YG, GG.getRenderWidth = vG, GG.getRenderHeight = aG, GG.onResizeObservable.hasObservers() && GG.onResizeObservable.notifyObservers(GG), bG.getProjectionMatrix(!0), GG.skipFrameRender = !1
            }
          }), (() => {
            GG.skipFrameRender = !1, GG.getRenderWidth = vG, GG.getRenderHeight = aG, uG?.()
          }), void 0, XG)
        };
      if (YG) {
        const GG = new pG("antialiasing", 1, iG.activeCamera);
        cG.addPostProcess(GG), GG.autoClear = !0, GG.onEffectCreatedObservable.addOnce((GG => {
          GG.isReady() ? jG() : GG.onCompiled = () => {
            jG()
          }
        }))
      } else jG()
    }
    async function qG(GG, bG, ZG) {
      let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        LG = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        yG = arguments.length > 6 ? arguments[6] : void 0,
        kG = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        UG = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        YG = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
        VG = arguments.length > 10 ? arguments[10] : void 0,
        pG = arguments.length > 11 ? arguments[11] : void 0,
        fG = arguments.length > 12 ? arguments[12] : void 0;
      return await new Promise(((QG, KG) => {
        sG(GG, bG, ZG, (GG => {
          "undefined" !== typeof GG ? QG(GG) : KG(new Error("Data is undefined"))
        }), wG, SG, LG, yG, kG, UG, YG, VG, pG, fG)
      }))
    }
    async function nG(GG, bG, ZG) {
      let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        LG = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        yG = arguments.length > 6 ? arguments[6] : void 0,
        kG = arguments.length > 7 ? arguments[7] : void 0,
        UG = arguments.length > 8 ? arguments[8] : void 0,
        YG = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        VG = arguments.length > 10 ? arguments[10] : void 0;
      const pG = GG.engine,
        fG = GG.textureManager,
        {
          height: QG,
          width: hG,
          finalWidth: dG,
          finalHeight: rG
        } = gG(pG, bG, ZG),
        zG = {
          width: hG,
          height: QG
        },
        EG = UG || KG.DumpData,
        oG = GG.tasks,
        XG = oG.length,
        uG = GG.pausedExecution,
        CG = pG.getCaps().parallelShaderCompile;
      fG.setBackBufferTextures(0, 0, {
        size: zG,
        options: {
          createMipMaps: !1,
          samples: SG,
          types: [0],
          formats: [5],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot color"]
        },
        sizeIsPercentage: !1
      }, {
        size: zG,
        options: {
          createMipMaps: !1,
          samples: SG,
          types: [0],
          formats: [pG.isStencilEnable ? 13 : 14],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot depth"]
        },
        sizeIsPercentage: !1
      });
      let mG = JG;
      if (LG) {
        const bG = new iG("fxaa", GG);
        bG.sourceTexture = mG, mG = bG.outputTexture, GG.addTask(bG)
      }
      if (dG !== hG || rG !== QG) {
        const bG = new WG("pass", GG);
        bG.sourceTexture = mG, bG.targetTexture = GG.textureManager.createRenderTargetTexture("pass_output", {
          size: {
            width: dG,
            height: rG
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
        }), mG = bG.outputTexture, GG.addTask(bG)
      }
      const IG = lG.FindMainObjectRenderer(GG);
      let FG = null;
      IG && (FG = IG.camera, IG.camera = bG), pG.getCaps().parallelShaderCompile = void 0, await GG.buildAsync();
      const vG = VG ?? (fG.hasHistoryTextures ? 32 : 1);
      for (let KG = 0; KG < vG; ++KG) GG.execute();
      GG.pausedExecution = !0, pG.getCaps().parallelShaderCompile = CG;
      for (let KG = XG; KG < oG.length; ++KG) GG.tasks[KG].dispose();
      GG.tasks.length = XG, IG && FG && (IG.camera = FG);
      const aG = GG.textureManager.getTextureFromHandle(mG);
      return aG.incrementReferences(), fG.resetBackBufferTextures(), await GG.buildAsync(), GG.pausedExecution = uG, new Promise((GG => {
        pG._readTexturePixels(aG, dG, rG, -1, 0, null, !0, !1, 0, 0).then((async bG => {
          aG.dispose(), EG(dG, rG, bG, YG ? void 0 : bG => GG(bG), wG, yG, !0, void 0, kG), YG && GG(null)
        }))
      }))
    }

    function gG(GG, bG, ZG) {
      let wG = 0,
        SG = 0,
        LG = 0,
        yG = 0;
      if ("object" === typeof ZG) {
        const kG = ZG.precision ? Math.abs(ZG.precision) : 1;
        ZG.width && ZG.height ? (wG = ZG.height * kG, SG = ZG.width * kG) : ZG.width && !ZG.height ? (SG = ZG.width * kG, wG = Math.round(SG / GG.getAspectRatio(bG))) : ZG.height && !ZG.width ? (wG = ZG.height * kG, SG = Math.round(wG * GG.getAspectRatio(bG))) : (SG = Math.round(GG.getRenderWidth() * kG), wG = Math.round(SG / GG.getAspectRatio(bG))), ZG.finalWidth && ZG.finalHeight ? (yG = ZG.finalHeight, LG = ZG.finalWidth) : ZG.finalWidth && !ZG.finalHeight ? (LG = ZG.finalWidth, yG = Math.round(LG / GG.getAspectRatio(bG))) : ZG.finalHeight && !ZG.finalWidth ? (yG = ZG.finalHeight, LG = Math.round(yG * GG.getAspectRatio(bG))) : (LG = SG, yG = wG)
      } else isNaN(ZG) || (wG = ZG, SG = ZG, LG = ZG, yG = ZG);
      return SG && (SG = Math.floor(SG)), wG && (wG = Math.floor(wG)), LG && (LG = Math.floor(LG)), yG && (yG = Math.floor(yG)), {
        height: 0 | wG,
        width: 0 | SG,
        finalWidth: 0 | LG,
        finalHeight: 0 | yG
      }
    }
    const eG = {
      CreateScreenshot: PG,
      CreateScreenshotAsync: MG,
      CreateScreenshotWithResizeAsync: AG,
      CreateScreenshotUsingRenderTarget: sG,
      CreateScreenshotUsingRenderTargetAsync: qG,
      CreateScreenshotForFrameGraphAsync: nG
    };
    let RG = !1;

    function TG() {
      if (RG) return;
      RG = !0;
      QG.f.CreateScreenshot = PG, QG.f.CreateScreenshotAsync = MG, QG.f.CreateScreenshotUsingRenderTarget = sG, QG.f.CreateScreenshotUsingRenderTargetAsync = qG
    }
    TG()
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);