export const id = 237;
export const ids = [237, 238];
export const modules = {
  40295: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => IS,
      h: () => kS
    });
    var tS = gS(40041),
      bS = gS(40048),
      XS = gS(37117),
      xS = gS(37300),
      NS = gS(40304),
      qS = gS(40256),
      uS = gS(37164);
    let IS = (() => {
        var SS;
        let HS, gS, qS = NS.e,
          uS = [],
          IS = [],
          fS = [],
          kS = [];
        return SS = class extends qS {
          constructor(SS, HS, gS, bS) {
            super(SS, gS, bS), this.groundColor = (0, tS.k)(this, uS, new xS.b(0, 0, 0)), this.direction = ((0, tS.k)(this, IS), (0, tS.k)(this, fS, void 0)), (0, tS.k)(this, kS), this.direction = HS || XS.n.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(SS) {
            return this.direction = XS.n.Normalize(SS.subtract(XS.n.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(SS, HS) {
            const gS = XS.n.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", gS.x, gS.y, gS.z, 0, HS), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), HS), this
          }
          transferToNodeMaterialEffect(SS, HS) {
            const gS = XS.n.Normalize(this.direction);
            return SS.setFloat3(HS, gS.x, gS.y, gS.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = XS.e.Identity()), this._worldMatrix
          }
          getTypeID() {
            return NS.e.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(SS, HS) {
            SS["HEMILIGHT" + HS] = !0
          }
        }, (() => {
          const XS = "function" === typeof Symbol && Symbol.metadata ? Object.create(qS[Symbol.metadata] ?? null) : void 0;
          HS = [(0, bS.k)()], gS = [(0, bS.I)()], (0, tS.j)(null, null, HS, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: SS => "groundColor" in SS,
              get: SS => SS.groundColor,
              set: (SS, HS) => {
                SS.groundColor = HS
              }
            },
            metadata: XS
          }, uS, IS), (0, tS.j)(null, null, gS, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: SS => "direction" in SS,
              get: SS => SS.direction,
              set: (SS, HS) => {
                SS.direction = HS
              }
            },
            metadata: XS
          }, fS, kS), XS && Object.defineProperty(SS, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: XS
          })
        })(), SS
      })(),
      fS = !1;

    function kS() {
      fS || (fS = !0, qS.e.AddNodeConstructor("Light_Type_3", ((SS, HS) => () => new IS(SS, XS.n.Zero(), HS))), (0, uS.f)("BABYLON.HemisphericLight", IS))
    }
  },
  37783: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => bS
    });
    var tS = gS(37791);
    class bS {
      static GetPlanes(SS) {
        const HS = [];
        for (let gS = 0; gS < 6; gS++) HS.push(new tS.e(0, 0, 0, 0));
        return bS.GetPlanesToRef(SS, HS), HS
      }
      static GetNearPlaneToRef(SS, HS) {
        const gS = SS.m;
        HS.normal.x = gS[3] + gS[2], HS.normal.y = gS[7] + gS[6], HS.normal.z = gS[11] + gS[10], HS.d = gS[15] + gS[14], HS.normalize()
      }
      static GetFarPlaneToRef(SS, HS) {
        const gS = SS.m;
        HS.normal.x = gS[3] - gS[2], HS.normal.y = gS[7] - gS[6], HS.normal.z = gS[11] - gS[10], HS.d = gS[15] - gS[14], HS.normalize()
      }
      static GetLeftPlaneToRef(SS, HS) {
        const gS = SS.m;
        HS.normal.x = gS[3] + gS[0], HS.normal.y = gS[7] + gS[4], HS.normal.z = gS[11] + gS[8], HS.d = gS[15] + gS[12], HS.normalize()
      }
      static GetRightPlaneToRef(SS, HS) {
        const gS = SS.m;
        HS.normal.x = gS[3] - gS[0], HS.normal.y = gS[7] - gS[4], HS.normal.z = gS[11] - gS[8], HS.d = gS[15] - gS[12], HS.normalize()
      }
      static GetTopPlaneToRef(SS, HS) {
        const gS = SS.m;
        HS.normal.x = gS[3] - gS[1], HS.normal.y = gS[7] - gS[5], HS.normal.z = gS[11] - gS[9], HS.d = gS[15] - gS[13], HS.normalize()
      }
      static GetBottomPlaneToRef(SS, HS) {
        const gS = SS.m;
        HS.normal.x = gS[3] + gS[1], HS.normal.y = gS[7] + gS[5], HS.normal.z = gS[11] + gS[9], HS.d = gS[15] + gS[13], HS.normalize()
      }
      static GetPlanesToRef(SS, HS) {
        bS.GetNearPlaneToRef(SS, HS[0]), bS.GetFarPlaneToRef(SS, HS[1]), bS.GetLeftPlaneToRef(SS, HS[2]), bS.GetRightPlaneToRef(SS, HS[3]), bS.GetTopPlaneToRef(SS, HS[4]), bS.GetBottomPlaneToRef(SS, HS[5])
      }
      static IsPointInFrustum(SS, HS) {
        for (let gS = 0; gS < 6; gS++)
          if (HS[gS].dotCoordinate(SS) < 0) return !1;
        return !0
      }
    }
  },
  37791: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => bS
    });
    var tS = gS(37117);
    class bS {
      constructor(SS, HS, gS, bS) {
        this.normal = new tS.n(SS, HS, gS), this.d = bS
      }
      lgS() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new bS(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let SS = this.normal.getHashCode();
        return SS = 397 * SS ^ this.d, SS
      }
      normalize() {
        const SS = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let HS = 0;
        return 0 !== SS && (HS = 1 / SS), this.normal.x *= HS, this.normal.y *= HS, this.normal.z *= HS, this.d *= HS, this
      }
      transform(SS) {
        const HS = bS._TmpMatrix;
        SS.invertToRef(HS);
        const gS = HS.m,
          tS = this.normal.x,
          XS = this.normal.y,
          xS = this.normal.z,
          NS = this.d,
          qS = tS * gS[0] + XS * gS[1] + xS * gS[2] + NS * gS[3],
          uS = tS * gS[4] + XS * gS[5] + xS * gS[6] + NS * gS[7],
          IS = tS * gS[8] + XS * gS[9] + xS * gS[10] + NS * gS[11],
          fS = tS * gS[12] + XS * gS[13] + xS * gS[14] + NS * gS[15];
        return new bS(qS, uS, IS, fS)
      }
      dotCoordinate(SS) {
        return this.normal.x * SS.x + this.normal.y * SS.y + this.normal.z * SS.z + this.d
      }
      copyFromPoints(SS, HS, gS) {
        const tS = HS.x - SS.x,
          bS = HS.y - SS.y,
          XS = HS.z - SS.z,
          xS = gS.x - SS.x,
          NS = gS.y - SS.y,
          qS = gS.z - SS.z,
          uS = bS * qS - XS * NS,
          IS = XS * xS - tS * qS,
          fS = tS * NS - bS * xS,
          kS = Math.sqrt(uS * uS + IS * IS + fS * fS);
        let aS;
        return aS = 0 !== kS ? 1 / kS : 0, this.normal.x = uS * aS, this.normal.y = IS * aS, this.normal.z = fS * aS, this.d = -(this.normal.x * SS.x + this.normal.y * SS.y + this.normal.z * SS.z), this
      }
      isFrontFacingTo(SS, HS) {
        return tS.n.Dot(this.normal, SS) <= HS
      }
      signedDistanceTo(SS) {
        return tS.n.Dot(SS, this.normal) + this.d
      }
      static FromArray(SS) {
        return new bS(SS[0], SS[1], SS[2], SS[3])
      }
      static FromPoints(SS, HS, gS) {
        const tS = new bS(0, 0, 0, 0);
        return tS.copyFromPoints(SS, HS, gS), tS
      }
      static FromPositionAndNormal(SS, HS) {
        const gS = new bS(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(SS, HS, gS)
      }
      static FromPositionAndNormalToRef(SS, HS, gS) {
        return gS.normal.dJ(HS), gS.normal.normalize(), gS.d = -SS.dot(gS.normal), gS
      }
      static SignedDistanceToPlaneFromPositionAndNormal(SS, HS, gS) {
        const bS = -(HS.x * SS.x + HS.y * SS.y + HS.z * SS.z);
        return tS.n.Dot(gS, HS) + bS
      }
    }
    bS._TmpMatrix = tS.e.Identity()
  },
  38134: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => tS
    });
    class tS {
      constructor(SS, HS, gS, tS) {
        this.x = SS, this.y = HS, this.width = gS, this.height = tS
      }
      toGlobal(SS, HS) {
        return new tS(this.x * SS, this.y * HS, this.width * SS, this.height * HS)
      }
      toGlobalToRef(SS, HS, gS) {
        return gS.x = this.x * SS, gS.y = this.y * HS, gS.width = this.width * SS, gS.height = this.height * HS, this
      }
      clone() {
        return new tS(this.x, this.y, this.width, this.height)
      }
    }
  },
  38683: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => XS
    });
    var tS = gS(38687);
    const bS = (SS, HS, gS) => SS ? SS.getClassName && "Mesh" === SS.getClassName() ? null : !SS.getClassName || "SubMesh" !== SS.getClassName() && "PhysicsBody" !== SS.getClassName() ? SS.clone ? SS.clone() : Array.isArray(SS) ? SS.slice() : gS && "object" === typeof SS ? {
      ...SS
    } : null : SS.clone(HS) : null;
    class XS {
      static DeepCopy(SS, HS, gS, XS) {
        let xS = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const NS = function(SS) {
          const HS = [];
          do {
            const gS = Object.getOwnPropertyNames(SS);
            for (const SS of gS) - 1 === HS.indexOf(SS) && HS.push(SS)
          } while (SS = Object.getPrototypeOf(SS));
          return HS
        }(SS);
        for (const uS of NS) {
          if ("_" === uS[0] && (!XS || -1 === XS.indexOf(uS))) continue;
          if (uS.endsWith("Observable")) continue;
          if (gS && -1 !== gS.indexOf(uS)) continue;
          const NS = SS[uS],
            IS = typeof NS;
          if ("function" !== IS) try {
            if ("object" === IS)
              if (NS instanceof Uint8Array) HS[uS] = Uint8Array.from(NS);
              else if (NS instanceof Array) {
              if (HS[uS] = [], NS.length > 0)
                if ("object" == typeof NS[0])
                  for (let SS = 0; SS < NS.length; SS++) {
                    const gS = bS(NS[SS], HS, xS); - 1 === HS[uS].indexOf(gS) && HS[uS].push(gS)
                  } else HS[uS] = NS.slice(0)
            } else HS[uS] = bS(NS, HS, xS);
            else HS[uS] = NS
          } catch (qS) {
            tS.b.Warn(qS.message)
          }
        }
      }
    }
  },
  37933: (SS, HS, gS) => {
    function tS() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (SS => {
        const HS = 16 * Math.random() | 0;
        return ("x" === SS ? HS : 3 & HS | 8).toString(16)
      }))
    }
    gS.d(HS, {
      c: () => tS
    })
  },
  38687: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => tS
    });
    class tS {
      static _CheckLimit(SS, HS) {
        let gS = tS._LogLimitOutputs[SS];
        return gS ? gS.current++ : (gS = {
          limit: HS,
          current: 1
        }, tS._LogLimitOutputs[SS] = gS), gS.current <= gS.limit
      }
      static _GenerateLimitMessage(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const gS = tS._LogLimitOutputs[SS];
        if (!gS || !tS.MessageLimitReached) return;
        const bS = this._Levels[HS];
        gS.current === gS.limit && tS[bS.name](tS.MessageLimitReached.replace(/%LIMIT%/g, "" + gS.limit).replace(/%TYPE%/g, bS.name ?? ""))
      }
      static _AddLogEntry(SS) {
        tS._LogCache = SS + tS._LogCache, tS.OnNewCacheEntry && tS.OnNewCacheEntry(SS)
      }
      static _FormatMessage(SS) {
        const HS = SS => SS < 10 ? "0" + SS : "" + SS,
          gS = new Date;
        return "[" + HS(gS.getHours()) + ":" + HS(gS.getMinutes()) + ":" + HS(gS.getSeconds()) + "]: " + SS
      }
      static _LogDisabled(SS, HS) {}
      static _LogEnabled() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          HS = arguments.length > 1 ? arguments[1] : void 0,
          gS = arguments.length > 2 ? arguments[2] : void 0;
        const bS = Array.isArray(HS) ? HS[0] : HS;
        if (void 0 !== gS && !tS._CheckLimit(bS, gS)) return;
        const XS = tS._FormatMessage(bS),
          xS = this._Levels[SS],
          NS = Array.isArray(HS) ? HS.slice(1) : [];
        xS.logFunc && xS.logFunc("BJS - " + XS, ...NS);
        const qS = `<div style='color:${xS.color}'>${XS}</div><br>`;
        tS._AddLogEntry(qS), tS._GenerateLimitMessage(bS, SS)
      }
      static get LogCache() {
        return tS._LogCache
      }
      static ClearLogCache() {
        tS._LogCache = "", tS._LogLimitOutputs = {}, tS.errorsCount = 0
      }
      static set LogLevels(SS) {
        tS.Log = tS._LogDisabled, tS.Warn = tS._LogDisabled, tS.Error = tS._LogDisabled;
        const HS = [tS.MessageLogLevel, tS.WarningLogLevel, tS.ErrorLogLevel];
        for (const gS of HS)
          if ((SS & gS) === gS) {
            const SS = this._Levels[gS];
            tS[SS.name] = tS._LogEnabled.bind(tS, gS)
          }
      }
    }
    tS.NoneLogLevel = 0, tS.MessageLogLevel = 1, tS.WarningLogLevel = 2, tS.ErrorLogLevel = 4, tS.AllLogLevel = 7, tS.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", tS._LogCache = "", tS._LogLimitOutputs = {}, tS._Levels = [{}, {
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
    }], tS.errorsCount = 0, tS.Log = tS._LogEnabled.bind(tS, tS.MessageLogLevel), tS.Warn = tS._LogEnabled.bind(tS, tS.WarningLogLevel), tS.Error = tS._LogEnabled.bind(tS, tS.ErrorLogLevel)
  },
  61309: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      CreateScreenshot: () => VS,
      CreateScreenshotAsync: () => iS,
      CreateScreenshotForFrameGraphAsync: () => pS,
      CreateScreenshotUsingRenderTarget: () => zS,
      CreateScreenshotUsingRenderTargetAsync: () => US,
      CreateScreenshotWithResizeAsync: () => WS,
      RegisterScreenshotTools: () => FS,
      ScreenshotTools: () => BS
    });
    var tS = gS(40510),
      bS = gS(41844),
      XS = gS(41822),
      xS = gS(40068),
      NS = gS(41825),
      qS = gS(37138),
      uS = gS(37117);
    class IS extends NS.f {
      static _GetDefines(SS) {
        if (!SS) return null;
        return SS.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
      }
      _gatherImports(SS, HS) {
        SS ? (this._webGPUReady = !0, HS.push(Promise.all([gS.e(375).then((() => gS(61570))), gS.e(376).then((() => gS(61577)))]))) : HS.push(Promise.all([gS.e(377).then((() => gS(61582))), gS.e(378).then((() => gS(61589)))]))
      }
      constructor(SS) {
        const HS = {
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: SS,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || qS.d.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          vertexShader: IS.VertexUrl,
          fragmentShader: IS.FragmentUrl,
          uniforms: IS.Uniforms
        };
        super({
          ...HS,
          defines: IS._GetDefines(HS.engine)
        }), this.texelSize = new uS.m(0, 0)
      }
      bind() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.bind(SS), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
      }
    }
    IS.VertexUrl = "fxaa", IS.FragmentUrl = "fxaa", IS.Uniforms = ["texelSize"];
    class fS extends XS.e {
      getClassName() {
        return "FxaaPostProcess"
      }
      constructor(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          bS = arguments.length > 3 ? arguments[3] : void 0,
          XS = arguments.length > 4 ? arguments[4] : void 0,
          xS = arguments.length > 5 ? arguments[5] : void 0,
          NS = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const qS = {
          uniforms: IS.Uniforms,
          size: "number" === typeof HS ? HS : void 0,
          camera: gS,
          samplingMode: bS || tS.i.BILINEAR_SAMPLINGMODE,
          engine: XS,
          reusable: xS,
          textureType: NS,
          ...HS
        };
        super(SS, IS.FragmentUrl, {
          effectWrapper: "number" !== typeof HS && HS.effectWrapper ? void 0 : new IS(SS, XS, qS),
          ...qS
        }), this.onApplyObservable.add((SS => {
          this._effectWrapper.texelSize = this.texelSize
        }))
      }
      static _Parse(SS, HS, gS, tS) {
        return xS.b.Parse((() => new fS(SS.name, SS.options, HS, SS.renderTargetSamplingMode, gS.AK(), SS.reusable)), SS, gS, tS)
      }
    }
    var kS = gS(38687),
      aS = gS(40133),
      KS = gS(41859),
      jS = gS(41838),
      GS = gS(39937);
    const CS = 0;
    class nS {
      constructor(SS, HS, gS) {
        this.name = SS, this._parentTask = HS, this._context = gS, this.disabled = !1
      }
      setInitializeFunc(SS) {
        this._initFunc = SS
      }
      setExecuteFunc(SS) {
        this._executeFunc = SS
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
    class PS extends nS {
      static IsObjectListPass(SS) {
        return void 0 !== SS.setObjectList
      }
      get objectList() {
        return this._objectList
      }
      setObjectList(SS) {
        this._objectList = SS
      }
      constructor(SS, HS, gS, tS) {
        super(SS, HS, gS), this._engine = tS
      }
      _isValid() {
        const SS = super._isValid();
        return SS || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
      }
    }
    class QS extends nS {
      static IsRenderPass(SS) {
        return void 0 !== SS.setRenderTarget
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
      constructor(SS, HS, gS, tS) {
        super(SS, HS, gS), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = tS
      }
      setRenderTarget(SS) {
        this._renderTarget = SS
      }
      setRenderTargetDepth(SS) {
        this._renderTargetDepth = SS
      }
      addDependencies(SS) {
        if (void 0 !== SS)
          if (Array.isArray(SS))
            for (const HS of SS) this._dependencies.add(HS);
          else this._dependencies.add(SS)
      }
      collectDependencies(SS) {
        const HS = this._dependencies.keys();
        for (let gS = HS.next(); !0 !== gS.done; gS = HS.next()) SS.add(gS.value);
        if (void 0 !== this._renderTarget)
          if (Array.isArray(this._renderTarget))
            for (const gS of this._renderTarget) void 0 !== gS && SS.add(gS);
          else SS.add(this._renderTarget);
        void 0 !== this._renderTargetDepth && SS.add(this._renderTargetDepth)
      }
      setOutputLayerAndFaceIndices(SS) {
        const HS = this.frameGraphRenderTarget.renderTargetWrapper;
        if (HS)
          for (const gS of SS) HS.setLayerAndFaceIndex(gS.targetIndex, gS.layerIndex, gS.faceIndex)
      }
      _initialize() {
        this._frameGraphRenderTarget = this._context.createRenderTarget(this.name, this._renderTarget, this._renderTargetDepth, this.depthReadOnly, this.stencilReadOnly), super._initialize()
      }
      _execute() {
        this._context.bindRenderTarget(this._frameGraphRenderTarget), super._execute(), this._context.restoreDefaultFramebuffer()
      }
      _isValid() {
        const SS = super._isValid();
        return SS || (void 0 !== this._renderTarget || void 0 !== this.renderTargetDepth ? null : "Render target and render target depth cannot both be undefined.")
      }
      _dispose() {
        this._frameGraphRenderTarget?.dispose()
      }
    }
    var DS = gS(37144);
    class wS {
      get name() {
        return this._name
      }
      set name(SS) {
        this._name = SS
      }
      get disabled() {
        return this._disabled
      }
      set disabled(SS) {
        this._disabled = SS
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
      constructor(SS, HS) {
        this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new DS.e, this.onBeforeTaskExecute = new DS.e, this.onAfterTaskExecute = new DS.e, this.name = SS, this._frameGraph = HS, this._reset()
      }
      _reset() {
        for (const SS of this._passes) SS._dispose();
        for (const SS of this._passesDisabled) SS._dispose();
        this._passes.length = 0, this._passesDisabled.length = 0
      }
      _addPass(SS, HS) {
        HS ? this._passesDisabled.push(SS) : this._passes.push(SS)
      }
      _checkTask() {
        let SS, HS = null,
          gS = null;
        for (const NS of this._passes) {
          const tS = NS._isValid();
          if (tS) throw new Error(`Pass "${NS.name}" is not valid. ${tS}`);
          if (QS.IsRenderPass(NS)) {
            const SS = Array.isArray(NS.renderTarget) ? NS.renderTarget : [NS.renderTarget];
            HS = [];
            for (const gS of SS) void 0 !== gS && HS.push(this._frameGraph.textureManager.getTextureFromHandle(gS));
            gS = void 0 !== NS.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(NS.renderTargetDepth) : null
          } else PS.IsObjectListPass(NS) && (SS = NS.objectList)
        }
        let tS, bS = null,
          XS = [],
          xS = null;
        for (const NS of this._passesDisabled) {
          const SS = NS._isValid();
          if (SS) throw new Error(`Pass "${NS.name}" is not valid. ${SS}`);
          if (QS.IsRenderPass(NS)) {
            const SS = Array.isArray(NS.renderTarget) ? NS.renderTarget : [NS.renderTarget];
            bS = [];
            for (const HS of SS) void 0 !== HS && bS.push(this._frameGraph.textureManager.getTextureFromHandle(HS));
            XS = SS, xS = void 0 !== NS.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(NS.renderTargetDepth) : null
          } else PS.IsObjectListPass(NS) && (tS = NS.objectList)
        }
        if (this._passesDisabled.length > 0) {
          if (!this._checkSameRenderTarget(HS, bS)) {
            let SS = !0;
            for (const HS of XS)
              if (void 0 !== HS && !this._frameGraph.textureManager.isHistoryTexture(HS)) {
                SS = !1;
                break
              } if (!SS) throw new Error(`The output texture of the task "${this.name}" is different when it is enabled or disabled.`)
          }
          if (gS !== xS && null !== xS) throw new Error(`The output depth texture of the task "${this.name}" is different when it is enabled or disabled.`);
          if (SS !== tS && null !== tS) throw new Error(`The output object list of the task "${this.name}" is different when it is enabled or disabled.`)
        }
      }
      _execute() {
        const SS = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
        this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const HS of SS) HS._execute()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
        this.onAfterTaskExecute.notifyObservers(this)
      }
      _initializePasses() {
        this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const SS of this._passes) SS._initialize();
          for (const SS of this._passesDisabled) SS._initialize()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
      }
      _checkSameRenderTarget(SS, HS) {
        if (null === SS || null === HS) return SS === HS;
        if (SS.length !== HS.length) return !1;
        for (let gS = 0; gS < SS.length; gS++)
          if (SS[gS] !== HS[gS]) return !1;
        return !0
      }
    }
    class hS extends wS {
      get alphaMode() {
        return this.postProcess.alphaMode
      }
      set alphaMode(SS) {
        this.postProcess.alphaMode = SS
      }
      get drawWrapper() {
        return this._postProcessDrawWrapper
      }
      constructor(SS, HS, gS) {
        super(SS, HS), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = gS, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture = this._frameGraph.textureManager.createDanglingHandle(), this.outputDepthAttachmentTexture = this._frameGraph.textureManager.createDanglingHandle()
      }
      isReady() {
        return this.postProcess.isReady()
      }
      getClassName() {
        return "FrameGraphPostProcessTask"
      }
      record() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          HS = arguments.length > 1 ? arguments[1] : void 0,
          gS = arguments.length > 2 ? arguments[2] : void 0;
        if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
        const tS = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
        if (tS && (tS.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, tS), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentTexture, this.depthAttachmentTexture), tS) {
          const SS = this._frameGraph.textureManager.getTextureAbsoluteDimensions(tS);
          this._sourceWidth = SS.width, this._sourceHeight = SS.height
        }
        const bS = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
        this._outputWidth = bS.size.width, this._outputHeight = bS.size.height;
        const XS = this._frameGraph.addRenderPass(this.name);
        if (XS.depthReadOnly = this.depthReadOnly, XS.stencilReadOnly = this.stencilReadOnly, XS.addDependencies(this.sourceTexture), XS.setRenderTarget(this.outputTexture), XS.setRenderTargetDepth(this.depthAttachmentTexture), XS.setExecuteFunc((SS => {
            SS.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && SS.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), HS?.(SS), this.viewport && SS.setViewport(this.viewport), SS.applyFullScreenEffect(this._postProcessDrawWrapper, (() => {
              void 0 !== this.sourceTexture && SS.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), gS?.(SS), this.postProcess.bind()
            }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), SS.restoreDefaultFramebuffer(), SS.popDebugGroup()
          })), !SS) {
          const SS = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
          SS.depthReadOnly = this.depthReadOnly, SS.stencilReadOnly = this.stencilReadOnly, SS.addDependencies(this.sourceTexture), SS.setRenderTarget(this.outputTexture), SS.setRenderTargetDepth(this.depthAttachmentTexture), SS.setExecuteFunc((SS => {
            void 0 !== this.sourceTexture && 0 === this.alphaMode && (this.viewport && SS.setViewport(this.viewport), SS.copyTexture(this.sourceTexture, void 0, void 0 !== this.viewport))
          }))
        }
        return XS
      }
      dispose() {
        this.postProcess.dispose(), super.dispose()
      }
    }
    class ZS extends hS {
      constructor(SS, HS, gS) {
        super(SS, HS, gS || new IS(SS, HS.engine))
      }
      getClassName() {
        return "FrameGraphFXAATask"
      }
      record() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          HS = arguments.length > 1 ? arguments[1] : void 0,
          gS = arguments.length > 2 ? arguments[2] : void 0;
        const tS = super.record(SS, HS, gS);
        return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, tS
      }
    }
    var JS = gS(41851);
    class OS extends hS {
      constructor(SS, HS, gS) {
        super(SS, HS, gS || new JS.f(SS, HS.engine))
      }
      getClassName() {
        return "FrameGraphPassTask"
      }
    }
    var dS = gS(40131),
      cS = gS(40218),
      vS = gS(40176),
      ES = gS(40295),
      LS = gS(37300);
    class YS {
      getRenderCamera(SS) {
        if (this._renderCamera) return this._renderCamera;
        {
          let HS;
          return HS = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, SS && HS && HS.isRigCamera ? HS.rigParent : HS
        }
      }
      setRenderCamera(SS) {
        this._renderCamera = SS
      }
      _getSharedGizmoLight() {
        return this._sharedGizmoLight || (this._sharedGizmoLight = new ES.d("shared gizmo light", new uS.n(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = LS.b.Gray()), this._sharedGizmoLight
      }
      static get DefaultUtilityLayer() {
        return null == YS._DefaultUtilityLayer ? YS._CreateDefaultUtilityLayerFromScene(qS.d.LastCreatedScene) : YS._DefaultUtilityLayer
      }
      static _CreateDefaultUtilityLayerFromScene(SS) {
        return YS._DefaultUtilityLayer = new YS(SS), YS._DefaultUtilityLayer.originalScene.bY.addOnce((() => {
          YS._DefaultUtilityLayer = null
        })), YS._DefaultUtilityLayer
      }
      static get DefaultKeepDepthUtilityLayer() {
        return null == YS._DefaultKeepDepthUtilityLayer ? YS._CreateDefaultKeepUtilityLayerFromScene(qS.d.LastCreatedScene) : YS._DefaultKeepDepthUtilityLayer
      }
      static _CreateDefaultKeepUtilityLayerFromScene(SS) {
        return YS._DefaultKeepDepthUtilityLayer = new YS(SS), YS._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, YS._DefaultKeepDepthUtilityLayer.originalScene.bY.addOnce((() => {
          YS._DefaultKeepDepthUtilityLayer = null
        })), YS._DefaultKeepDepthUtilityLayer
      }
      constructor(SS) {
        let HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.originalScene = SS, this.handleEvents = HS, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.processAllEvents = !1, this.pickingEnabled = !0, this.onPointerOutObservable = new DS.e, this.utilityLayerScene = new dS.i(SS.AK(), {
          virtual: !0,
          useFloatingOrigin: SS.floatingOriginMode
        }), this.utilityLayerScene.useRightHandedSystem = SS.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), HS && (this._originalPointerObserver = SS.onPrePointerObservable.add((HS => {
          if (!this.utilityLayerScene.activeCamera) return;
          if (!this.pickingEnabled) return;
          if (!this.processAllEvents && HS.type !== cS.d.POINTERMOVE && HS.type !== cS.d.POINTERUP && HS.type !== cS.d.POINTERDOWN && HS.type !== cS.d.POINTERDOUBLETAP) return;
          this.utilityLayerScene.pointerX = SS.pointerX, this.utilityLayerScene.pointerY = SS.pointerY;
          const gS = HS.event;
          if (SS.isPointerCaptured(gS.pointerId)) return void(this._pointerCaptures[gS.pointerId] = !1);
          const tS = gS => {
              let tS;
              if (HS.nearInteractionPickingInfo) tS = HS.nearInteractionPickingInfo.pickedMesh.lL() == gS ? HS.nearInteractionPickingInfo : new vS.c;
              else if (gS !== this.utilityLayerScene && HS.originalPickingInfo) tS = HS.originalPickingInfo;
              else {
                let bS = null;
                this._renderCamera && (bS = gS._activeCamera, gS._activeCamera = this._renderCamera, HS.ray = null), tS = HS.ray ? gS.pickWithRay(HS.ray) : gS.Sa(SS.pointerX, SS.pointerY), bS && (gS._activeCamera = bS)
              }
              return tS
            },
            bS = tS(this.utilityLayerScene);
          if (!HS.ray && bS && (HS.ray = bS.ray), HS.originalPickingInfo?.aimTransform && bS && (bS.aimTransform = HS.originalPickingInfo.aimTransform, bS.gripTransform = HS.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(HS), this.onlyCheckPointerDownEvents && HS.type != cS.d.POINTERDOWN) return HS.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new cS.l(HS.type, HS.event, bS), HS.type), void(HS.type === cS.d.POINTERUP && this._pointerCaptures[gS.pointerId] && (this._pointerCaptures[gS.pointerId] = !1));
          if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) bS && bS.hit && (HS.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new cS.l(HS.type, HS.event, bS), HS.type), HS.skipOnPointerObservable = !0);
          else {
            const gS = tS(SS),
              XS = HS.event;
            gS && bS && (0 === bS.distance && gS.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(gS.pickedMesh) ? (this._notifyObservers(HS, gS, XS), HS.skipOnPointerObservable = !0) : HS.type === cS.d.POINTERDOWN ? (this._pointerCaptures[XS.pointerId] = !0, this._notifyObservers(HS, gS, XS)) : HS.type !== cS.d.POINTERMOVE && HS.type !== cS.d.POINTERUP || (this._lastPointerEvents[XS.pointerId] && (this.onPointerOutObservable.notifyObservers(XS.pointerId), delete this._lastPointerEvents[XS.pointerId]), this._notifyObservers(HS, gS, XS)) : !this._pointerCaptures[XS.pointerId] && (bS.distance < gS.distance || 0 === gS.distance) ? (this._notifyObservers(HS, bS, XS), HS.skipOnPointerObservable || (HS.skipOnPointerObservable = bS.distance > 0)) : !this._pointerCaptures[XS.pointerId] && bS.distance >= gS.distance && (this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(gS.pickedMesh) ? (this._notifyObservers(HS, gS, XS), HS.skipOnPointerObservable = !0) : (HS.type !== cS.d.POINTERMOVE && HS.type !== cS.d.POINTERUP || this._lastPointerEvents[XS.pointerId] && (this.onPointerOutObservable.notifyObservers(XS.pointerId), delete this._lastPointerEvents[XS.pointerId]), this._notifyObservers(HS, bS, XS))), HS.type === cS.d.POINTERUP && this._pointerCaptures[XS.pointerId] && (this._pointerCaptures[XS.pointerId] = !1))
          }
        })), this._originalPointerObserver && SS.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, gS || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((SS => {
          this.shouldRender && SS == this.getRenderCamera() && this.render()
        }))), this._sceneDisposeObserver = this.originalScene.bY.add((() => {
          this.dispose()
        })), this._updateCamera()
      }
      _notifyObservers(SS, HS, gS) {
        SS.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new cS.l(SS.type, SS.event, HS), SS.type), this._lastPointerEvents[gS.pointerId] = !0)
      }
      render() {
        if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
          const SS = this.utilityLayerScene.activeCamera.lL(),
            HS = this.utilityLayerScene.activeCamera;
          HS._scene = this.utilityLayerScene, HS.leftCamera && (HS.leftCamera._scene = this.utilityLayerScene), HS.rightCamera && (HS.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), HS._scene = SS, HS.leftCamera && (HS.leftCamera._scene = SS), HS.rightCamera && (HS.rightCamera._scene = SS)
        }
      }
      dispose() {
        this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.bY.remove(this._sceneDisposeObserver), this._originalPointerObserver && this.originalScene.onPrePointerObservable.remove(this._originalPointerObserver), this.utilityLayerScene.dispose()
      }
      _updateCamera() {
        this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
      }
    }
    YS._DefaultUtilityLayer = null, YS._DefaultKeepDepthUtilityLayer = null;
    const AS = {
      FindMainCamera: function(SS) {
        return SS.findMainCamera()
      },
      FindMainObjectRenderer: function(SS) {
        return SS.findMainObjectRenderer()
      },
      CreateUtilityLayerRenderer: function(SS) {
        let HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const gS = SS.Bj,
          tS = new YS(gS, HS, !0);
        tS.utilityLayerScene.activeCamera = gS.activeCamera;
        let bS = AS.FindMainCamera(gS.frameGraph);
        !bS && gS.cameras.length > 0 && (bS = gS.cameras[0]), bS && (tS.setRenderCamera(bS), tS.utilityLayerScene.activeCamera = bS);
        const XS = gS.onAfterRenderObservable.add((() => {
          tS.render()
        }));
        return tS.utilityLayerScene.bY.addOnce((() => {
          gS.onAfterRenderObservable.remove(XS)
        })), tS
      }
    };
    let yS = null;

    function VS(SS, HS, gS, tS) {
      let bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        XS = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        xS = arguments.length > 6 ? arguments[6] : void 0,
        NS = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        qS = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
      const {
        height: uS,
        width: IS
      } = sS(SS, HS, gS);
      if (!uS || !IS) return void kS.b.Error("Invalid 'size' parameter !");
      const fS = HS.lL();
      let KS = fS.activeCamera !== HS;
      if (fS.frameGraph) {
        const SS = AS.FindMainObjectRenderer(fS.frameGraph);
        SS && (KS = SS.camera !== HS)
      }
      KS ? zS(SS, HS, gS, (SS => {
        if (XS) {
          const HS = new Blob([SS]);
          aS.k.DownloadBlob(HS), tS && tS("")
        } else tS && tS(SS)
      }), bS, 1, SS.getCreationOptions().antialias, void 0, void 0, void 0, void 0, xS) : SS.onEndFrameObservable.addOnce((() => {
        yS || (yS = document.createElement("canvas")), yS.width = IS, yS.height = uS;
        const HS = yS.getContext("2d"),
          gS = SS.getRenderingCanvas();
        if (!HS || !gS) return void kS.b.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
        const KS = gS.width,
          jS = gS.height,
          GS = yS.width,
          CS = yS.height,
          nS = GS / KS,
          PS = CS / jS,
          QS = NS ? Math.max(nS, PS) : Math.min(nS, PS),
          DS = KS * QS,
          wS = jS * QS,
          hS = (GS - DS) / 2,
          ZS = (CS - wS) / 2;
        HS.save(), HS.fillStyle = qS ? fS.clearColor.toHexString() : "rgba(0, 0, 0, 0)", HS.fillRect(0, 0, IS, uS), HS.restore(), HS.drawImage(gS, 0, 0, KS, jS, hS, ZS, DS, wS), XS ? (aS.k.EncodeScreenshotCanvasData(yS, void 0, bS, void 0, xS), tS && tS("")) : aS.k.EncodeScreenshotCanvasData(yS, tS, bS, void 0, xS)
      }))
    }
    async function iS(SS, HS, gS) {
      let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        bS = arguments.length > 4 ? arguments[4] : void 0,
        XS = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        xS = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        NS = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      return await new Promise(((qS, uS) => {
        VS(SS, HS, gS, (SS => {
          "undefined" !== typeof SS ? qS(SS) : uS(new Error("Data is undefined"))
        }), tS, NS, bS, XS, xS)
      }))
    }
    async function WS(SS, HS, gS, tS) {
      let bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        XS = arguments.length > 5 ? arguments[5] : void 0,
        xS = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return await new Promise((NS => {
        VS(SS, HS, {
          width: gS,
          height: tS
        }, (() => {
          NS()
        }), bS, !0, XS, xS)
      }))
    }

    function zS(SS, HS, XS, xS) {
      let NS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        qS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
        uS = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        IS = arguments.length > 7 ? arguments[7] : void 0,
        aS = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        CS = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        nS = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
        PS = arguments.length > 11 ? arguments[11] : void 0,
        QS = arguments.length > 12 ? arguments[12] : void 0,
        DS = arguments.length > 13 ? arguments[13] : void 0,
        wS = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
        hS = arguments.length > 15 ? arguments[15] : void 0;
      const ZS = HS.lL();
      if (ZS.frameGraph) return void pS(ZS.frameGraph, HS, XS, NS, qS, uS, IS, PS, DS, !xS).then((SS => {
        xS && xS(SS)
      }));
      const {
        height: JS,
        width: OS,
        finalWidth: dS,
        finalHeight: cS
      } = sS(SS, HS, XS), vS = {
        width: OS,
        height: JS
      };
      if (!JS || !OS) return void kS.b.Error("Invalid 'size' parameter !");
      SS.skipFrameRender = !0;
      const ES = SS.getRenderWidth,
        LS = SS.getRenderHeight;
      SS.getRenderWidth = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && SS._currentRenderTarget ? SS._currentRenderTarget.width : OS
      }, SS.getRenderHeight = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && SS._currentRenderTarget ? SS._currentRenderTarget.height : JS
      }, SS.onResizeObservable.hasObservers() && SS.onResizeObservable.notifyObservers(SS);
      const YS = new bS.c("screenShot", vS, ZS, !1, !1, 0, !1, tS.i.BILINEAR_SAMPLINGMODE, void 0, CS, void 0, void 0, void 0, qS);
      YS.renderList = ZS.meshes.slice(), YS.samples = qS, YS.renderSprites = aS, YS.activeCamera = HS, YS.forceLayerMaskCheck = nS, QS?.(YS);
      const AS = DS || KS.DumpData,
        yS = () => {
          ZS.incrementRenderId(), ZS.resetCachedMaterial(), (0, GS.g)((() => YS.isReadyForRendering() && HS.isReady(!0)), (() => {
            SS.onEndFrameObservable.addOnce((() => {
              dS === OS && cS === JS ? YS.readPixels(void 0, void 0, void 0, !1).then((SS => {
                AS(OS, JS, SS, xS, NS, IS, !0, void 0, PS), YS.dispose()
              })) : (SS.isWebGPU ? gS.e(371).then((() => gS(61506))) : gS.e(372).then((() => gS(61513)))).then((async () => await (0, jS.d)("pass", YS.getInternalTexture(), ZS, void 0, void 0, void 0, dS, cS).then((HS => {
                SS._readTexturePixels(HS, dS, cS, -1, 0, null, !0, !1, 0, 0).then((SS => {
                  AS(dS, cS, SS, xS, NS, IS, !0, void 0, PS), HS.dispose()
                }))
              }))))
            })), ZS.incrementRenderId(), ZS.resetCachedMaterial();
            const tS = ZS.activeCamera,
              bS = ZS.activeCameras,
              XS = HS.outputRenderTarget,
              qS = ZS.spritesEnabled;
            ZS.activeCamera = HS, ZS.activeCameras = null, HS.outputRenderTarget = YS, ZS.spritesEnabled = aS;
            const uS = ZS.meshes;
            ZS.meshes = YS.renderList || ZS.meshes;
            try {
              ZS.render()
            } finally {
              ZS.activeCamera = tS, ZS.activeCameras = bS, HS.outputRenderTarget = XS, ZS.spritesEnabled = qS, ZS.meshes = uS, SS.getRenderWidth = ES, SS.getRenderHeight = LS, SS.onResizeObservable.hasObservers() && SS.onResizeObservable.notifyObservers(SS), HS.getProjectionMatrix(!0), SS.skipFrameRender = !1
            }
          }), (() => {
            SS.skipFrameRender = !1, SS.getRenderWidth = ES, SS.getRenderHeight = LS, hS?.()
          }), void 0, wS)
        };
      if (uS) {
        const SS = new fS("antialiasing", 1, ZS.activeCamera);
        YS.addPostProcess(SS), SS.autoClear = !0, SS.onEffectCreatedObservable.addOnce((SS => {
          SS.isReady() ? yS() : SS.onCompiled = () => {
            yS()
          }
        }))
      } else yS()
    }
    async function US(SS, HS, gS) {
      let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        XS = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        xS = arguments.length > 6 ? arguments[6] : void 0,
        NS = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        qS = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        uS = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
        IS = arguments.length > 10 ? arguments[10] : void 0,
        fS = arguments.length > 11 ? arguments[11] : void 0,
        kS = arguments.length > 12 ? arguments[12] : void 0;
      return await new Promise(((aS, KS) => {
        zS(SS, HS, gS, (SS => {
          "undefined" !== typeof SS ? aS(SS) : KS(new Error("Data is undefined"))
        }), tS, bS, XS, xS, NS, qS, uS, IS, fS, kS)
      }))
    }
    async function pS(SS, HS, gS) {
      let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        XS = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        xS = arguments.length > 6 ? arguments[6] : void 0,
        NS = arguments.length > 7 ? arguments[7] : void 0,
        qS = arguments.length > 8 ? arguments[8] : void 0,
        uS = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        IS = arguments.length > 10 ? arguments[10] : void 0;
      const fS = SS.engine,
        kS = SS.textureManager,
        {
          height: aS,
          width: jS,
          finalWidth: GS,
          finalHeight: nS
        } = sS(fS, HS, gS),
        PS = {
          width: jS,
          height: aS
        },
        QS = qS || KS.DumpData,
        DS = SS.tasks,
        wS = DS.length,
        hS = SS.pausedExecution,
        JS = fS.getCaps().parallelShaderCompile;
      kS.setBackBufferTextures(0, 0, {
        size: PS,
        options: {
          createMipMaps: !1,
          samples: bS,
          types: [0],
          formats: [5],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot color"]
        },
        sizeIsPercentage: !1
      }, {
        size: PS,
        options: {
          createMipMaps: !1,
          samples: bS,
          types: [0],
          formats: [fS.isStencilEnable ? 13 : 14],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot depth"]
        },
        sizeIsPercentage: !1
      });
      let dS = CS;
      if (XS) {
        const HS = new ZS("fxaa", SS);
        HS.sourceTexture = dS, dS = HS.outputTexture, SS.addTask(HS)
      }
      if (GS !== jS || nS !== aS) {
        const HS = new OS("pass", SS);
        HS.sourceTexture = dS, HS.targetTexture = SS.textureManager.createRenderTargetTexture("pass_output", {
          size: {
            width: GS,
            height: nS
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
        }), dS = HS.outputTexture, SS.addTask(HS)
      }
      const cS = AS.FindMainObjectRenderer(SS);
      let vS = null;
      cS && (vS = cS.camera, cS.camera = HS), fS.getCaps().parallelShaderCompile = void 0, await SS.buildAsync();
      const ES = IS ?? (kS.hasHistoryTextures ? 32 : 1);
      for (let KS = 0; KS < ES; ++KS) SS.execute();
      SS.pausedExecution = !0, fS.getCaps().parallelShaderCompile = JS;
      for (let KS = wS; KS < DS.length; ++KS) SS.tasks[KS].dispose();
      SS.tasks.length = wS, cS && vS && (cS.camera = vS);
      const LS = SS.textureManager.getTextureFromHandle(dS);
      return LS.incrementReferences(), kS.resetBackBufferTextures(), await SS.buildAsync(), SS.pausedExecution = hS, new Promise((SS => {
        fS._readTexturePixels(LS, GS, nS, -1, 0, null, !0, !1, 0, 0).then((async HS => {
          LS.dispose(), QS(GS, nS, HS, uS ? void 0 : HS => SS(HS), tS, xS, !0, void 0, NS), uS && SS(null)
        }))
      }))
    }

    function sS(SS, HS, gS) {
      let tS = 0,
        bS = 0,
        XS = 0,
        xS = 0;
      if ("object" === typeof gS) {
        const NS = gS.precision ? Math.abs(gS.precision) : 1;
        gS.width && gS.height ? (tS = gS.height * NS, bS = gS.width * NS) : gS.width && !gS.height ? (bS = gS.width * NS, tS = Math.round(bS / SS.getAspectRatio(HS))) : gS.height && !gS.width ? (tS = gS.height * NS, bS = Math.round(tS * SS.getAspectRatio(HS))) : (bS = Math.round(SS.getRenderWidth() * NS), tS = Math.round(bS / SS.getAspectRatio(HS))), gS.finalWidth && gS.finalHeight ? (xS = gS.finalHeight, XS = gS.finalWidth) : gS.finalWidth && !gS.finalHeight ? (XS = gS.finalWidth, xS = Math.round(XS / SS.getAspectRatio(HS))) : gS.finalHeight && !gS.finalWidth ? (xS = gS.finalHeight, XS = Math.round(xS * SS.getAspectRatio(HS))) : (XS = bS, xS = tS)
      } else isNaN(gS) || (tS = gS, bS = gS, XS = gS, xS = gS);
      return bS && (bS = Math.floor(bS)), tS && (tS = Math.floor(tS)), XS && (XS = Math.floor(XS)), xS && (xS = Math.floor(xS)), {
        height: 0 | tS,
        width: 0 | bS,
        finalWidth: 0 | XS,
        finalHeight: 0 | xS
      }
    }
    const BS = {
      CreateScreenshot: VS,
      CreateScreenshotAsync: iS,
      CreateScreenshotWithResizeAsync: WS,
      CreateScreenshotUsingRenderTarget: zS,
      CreateScreenshotUsingRenderTargetAsync: US,
      CreateScreenshotForFrameGraphAsync: pS
    };
    let MS = !1;

    function FS() {
      if (MS) return;
      MS = !0;
      aS.k.CreateScreenshot = VS, aS.k.CreateScreenshotAsync = iS, aS.k.CreateScreenshotUsingRenderTarget = zS, aS.k.CreateScreenshotUsingRenderTargetAsync = US
    }
    FS()
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);