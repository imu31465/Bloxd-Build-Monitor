export const id = 231;
export const ids = [231, 232];
export const modules = {
  39413: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Kz,
      e: () => Nz
    });
    var Fz = sz(39167),
      Wz = sz(39170),
      Xz = sz(36475),
      Oz = sz(36654),
      oz = sz(39421),
      vz = sz(39374),
      Uz = sz(36518);
    let Kz = (() => {
        var zz;
        let tz, sz, vz = oz.d,
          Uz = [],
          Kz = [],
          uz = [],
          Nz = [];
        return zz = class extends vz {
          constructor(zz, tz, sz, Wz) {
            super(zz, sz, Wz), this.groundColor = (0, Fz.k)(this, Uz, new Oz.c(0, 0, 0)), this.direction = ((0, Fz.k)(this, Kz), (0, Fz.k)(this, uz, void 0)), (0, Fz.k)(this, Nz), this.direction = tz || Xz.p.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(zz) {
            return this.direction = Xz.p.Normalize(zz.subtract(Xz.p.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(zz, tz) {
            const sz = Xz.p.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", sz.x, sz.y, sz.z, 0, tz), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), tz), this
          }
          transferToNodeMaterialEffect(zz, tz) {
            const sz = Xz.p.Normalize(this.direction);
            return zz.setFloat3(tz, sz.x, sz.y, sz.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = Xz.e.Identity()), this._worldMatrix
          }
          getTypeID() {
            return oz.d.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(zz, tz) {
            zz["HEMILIGHT" + tz] = !0
          }
        }, (() => {
          const Xz = "function" === typeof Symbol && Symbol.metadata ? Object.create(vz[Symbol.metadata] ?? null) : void 0;
          tz = [(0, Wz.p)()], sz = [(0, Wz.H)()], (0, Fz.h)(null, null, tz, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: zz => "groundColor" in zz,
              get: zz => zz.groundColor,
              set: (zz, tz) => {
                zz.groundColor = tz
              }
            },
            metadata: Xz
          }, Uz, Kz), (0, Fz.h)(null, null, sz, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: zz => "direction" in zz,
              get: zz => zz.direction,
              set: (zz, tz) => {
                zz.direction = tz
              }
            },
            metadata: Xz
          }, uz, Nz), Xz && Object.defineProperty(zz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Xz
          })
        })(), zz
      })(),
      uz = !1;

    function Nz() {
      uz || (uz = !0, vz.e.AddNodeConstructor("Light_Type_3", ((zz, tz) => () => new Kz(zz, Xz.p.Zero(), tz))), (0, Uz.g)("BABYLON.HemisphericLight", Kz))
    }
  },
  37191: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Wz
    });
    var Fz = sz(37199);
    class Wz {
      static GetPlanes(zz) {
        const tz = [];
        for (let sz = 0; sz < 6; sz++) tz.push(new Fz.c(0, 0, 0, 0));
        return Wz.GetPlanesToRef(zz, tz), tz
      }
      static GetNearPlaneToRef(zz, tz) {
        const sz = zz.m;
        tz.normal.x = sz[3] + sz[2], tz.normal.y = sz[7] + sz[6], tz.normal.z = sz[11] + sz[10], tz.d = sz[15] + sz[14], tz.normalize()
      }
      static GetFarPlaneToRef(zz, tz) {
        const sz = zz.m;
        tz.normal.x = sz[3] - sz[2], tz.normal.y = sz[7] - sz[6], tz.normal.z = sz[11] - sz[10], tz.d = sz[15] - sz[14], tz.normalize()
      }
      static GetLeftPlaneToRef(zz, tz) {
        const sz = zz.m;
        tz.normal.x = sz[3] + sz[0], tz.normal.y = sz[7] + sz[4], tz.normal.z = sz[11] + sz[8], tz.d = sz[15] + sz[12], tz.normalize()
      }
      static GetRightPlaneToRef(zz, tz) {
        const sz = zz.m;
        tz.normal.x = sz[3] - sz[0], tz.normal.y = sz[7] - sz[4], tz.normal.z = sz[11] - sz[8], tz.d = sz[15] - sz[12], tz.normalize()
      }
      static GetTopPlaneToRef(zz, tz) {
        const sz = zz.m;
        tz.normal.x = sz[3] - sz[1], tz.normal.y = sz[7] - sz[5], tz.normal.z = sz[11] - sz[9], tz.d = sz[15] - sz[13], tz.normalize()
      }
      static GetBottomPlaneToRef(zz, tz) {
        const sz = zz.m;
        tz.normal.x = sz[3] + sz[1], tz.normal.y = sz[7] + sz[5], tz.normal.z = sz[11] + sz[9], tz.d = sz[15] + sz[13], tz.normalize()
      }
      static GetPlanesToRef(zz, tz) {
        Wz.GetNearPlaneToRef(zz, tz[0]), Wz.GetFarPlaneToRef(zz, tz[1]), Wz.GetLeftPlaneToRef(zz, tz[2]), Wz.GetRightPlaneToRef(zz, tz[3]), Wz.GetTopPlaneToRef(zz, tz[4]), Wz.GetBottomPlaneToRef(zz, tz[5])
      }
      static IsPointInFrustum(zz, tz) {
        for (let sz = 0; sz < 6; sz++)
          if (tz[sz].dotCoordinate(zz) < 0) return !1;
        return !0
      }
    }
  },
  37199: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Wz
    });
    var Fz = sz(36475);
    class Wz {
      constructor(zz, tz, sz, Wz) {
        this.normal = new Fz.p(zz, tz, sz), this.d = Wz
      }
      hsz() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Wz(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let zz = this.normal.getHashCode();
        return zz = 397 * zz ^ this.d, zz
      }
      normalize() {
        const zz = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let tz = 0;
        return 0 !== zz && (tz = 1 / zz), this.normal.x *= tz, this.normal.y *= tz, this.normal.z *= tz, this.d *= tz, this
      }
      transform(zz) {
        const tz = Wz._TmpMatrix;
        zz.invertToRef(tz);
        const sz = tz.m,
          Fz = this.normal.x,
          Xz = this.normal.y,
          Oz = this.normal.z,
          oz = this.d,
          vz = Fz * sz[0] + Xz * sz[1] + Oz * sz[2] + oz * sz[3],
          Uz = Fz * sz[4] + Xz * sz[5] + Oz * sz[6] + oz * sz[7],
          Kz = Fz * sz[8] + Xz * sz[9] + Oz * sz[10] + oz * sz[11],
          uz = Fz * sz[12] + Xz * sz[13] + Oz * sz[14] + oz * sz[15];
        return new Wz(vz, Uz, Kz, uz)
      }
      dotCoordinate(zz) {
        return this.normal.x * zz.x + this.normal.y * zz.y + this.normal.z * zz.z + this.d
      }
      copyFromPoints(zz, tz, sz) {
        const Fz = tz.x - zz.x,
          Wz = tz.y - zz.y,
          Xz = tz.z - zz.z,
          Oz = sz.x - zz.x,
          oz = sz.y - zz.y,
          vz = sz.z - zz.z,
          Uz = Wz * vz - Xz * oz,
          Kz = Xz * Oz - Fz * vz,
          uz = Fz * oz - Wz * Oz,
          Nz = Math.sqrt(Uz * Uz + Kz * Kz + uz * uz);
        let bz;
        return bz = 0 !== Nz ? 1 / Nz : 0, this.normal.x = Uz * bz, this.normal.y = Kz * bz, this.normal.z = uz * bz, this.d = -(this.normal.x * zz.x + this.normal.y * zz.y + this.normal.z * zz.z), this
      }
      isFrontFacingTo(zz, tz) {
        return Fz.p.Dot(this.normal, zz) <= tz
      }
      signedDistanceTo(zz) {
        return Fz.p.Dot(zz, this.normal) + this.d
      }
      static FromArray(zz) {
        return new Wz(zz[0], zz[1], zz[2], zz[3])
      }
      static FromPoints(zz, tz, sz) {
        const Fz = new Wz(0, 0, 0, 0);
        return Fz.copyFromPoints(zz, tz, sz), Fz
      }
      static FromPositionAndNormal(zz, tz) {
        const sz = new Wz(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(zz, tz, sz)
      }
      static FromPositionAndNormalToRef(zz, tz, sz) {
        return sz.normal.vsz(tz), sz.normal.normalize(), sz.d = -zz.dot(sz.normal), sz
      }
      static SignedDistanceToPlaneFromPositionAndNormal(zz, tz, sz) {
        const Wz = -(tz.x * zz.x + tz.y * zz.y + tz.z * zz.z);
        return Fz.p.Dot(sz, tz) + Wz
      }
    }
    Wz._TmpMatrix = Fz.e.Identity()
  },
  37536: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Fz
    });
    class Fz {
      constructor(zz, tz, sz, Fz) {
        this.x = zz, this.y = tz, this.width = sz, this.height = Fz
      }
      toGlobal(zz, tz) {
        return new Fz(this.x * zz, this.y * tz, this.width * zz, this.height * tz)
      }
      toGlobalToRef(zz, tz, sz) {
        return sz.x = this.x * zz, sz.y = this.y * tz, sz.width = this.width * zz, sz.height = this.height * tz, this
      }
      clone() {
        return new Fz(this.x, this.y, this.width, this.height)
      }
    }
  },
  38091: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Xz
    });
    var Fz = sz(38097);
    const Wz = (zz, tz, sz) => zz ? zz.getClassName && "Mesh" === zz.getClassName() ? null : !zz.getClassName || "SubMesh" !== zz.getClassName() && "PhysicsBody" !== zz.getClassName() ? zz.clone ? zz.clone() : Array.isArray(zz) ? zz.slice() : sz && "object" === typeof zz ? {
      ...zz
    } : null : zz.clone(tz) : null;
    class Xz {
      static DeepCopy(zz, tz, sz, Xz) {
        let Oz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const oz = function(zz) {
          const tz = [];
          do {
            const sz = Object.getOwnPropertyNames(zz);
            for (const zz of sz) - 1 === tz.indexOf(zz) && tz.push(zz)
          } while (zz = Object.getPrototypeOf(zz));
          return tz
        }(zz);
        for (const Uz of oz) {
          if ("_" === Uz[0] && (!Xz || -1 === Xz.indexOf(Uz))) continue;
          if (Uz.endsWith("Observable")) continue;
          if (sz && -1 !== sz.indexOf(Uz)) continue;
          const oz = zz[Uz],
            Kz = typeof oz;
          if ("function" !== Kz) try {
            if ("object" === Kz)
              if (oz instanceof Uint8Array) tz[Uz] = Uint8Array.from(oz);
              else if (oz instanceof Array) {
              if (tz[Uz] = [], oz.length > 0)
                if ("object" == typeof oz[0])
                  for (let zz = 0; zz < oz.length; zz++) {
                    const sz = Wz(oz[zz], tz, Oz); - 1 === tz[Uz].indexOf(sz) && tz[Uz].push(sz)
                  } else tz[Uz] = oz.slice(0)
            } else tz[Uz] = Wz(oz, tz, Oz);
            else tz[Uz] = oz
          } catch (vz) {
            Fz.e.Warn(vz.message)
          }
        }
      }
    }
  },
  37333: (zz, tz, sz) => {
    function Fz() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (zz => {
        const tz = 16 * Math.random() | 0;
        return ("x" === zz ? tz : 3 & tz | 8).toString(16)
      }))
    }
    sz.d(tz, {
      d: () => Fz
    })
  },
  38097: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Fz
    });
    class Fz {
      static _CheckLimit(zz, tz) {
        let sz = Fz._LogLimitOutputs[zz];
        return sz ? sz.current++ : (sz = {
          limit: tz,
          current: 1
        }, Fz._LogLimitOutputs[zz] = sz), sz.current <= sz.limit
      }
      static _GenerateLimitMessage(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const sz = Fz._LogLimitOutputs[zz];
        if (!sz || !Fz.MessageLimitReached) return;
        const Wz = this._Levels[tz];
        sz.current === sz.limit && Fz[Wz.name](Fz.MessageLimitReached.replace(/%LIMIT%/g, "" + sz.limit).replace(/%TYPE%/g, Wz.name ?? ""))
      }
      static _AddLogEntry(zz) {
        Fz._LogCache = zz + Fz._LogCache, Fz.OnNewCacheEntry && Fz.OnNewCacheEntry(zz)
      }
      static _FormatMessage(zz) {
        const tz = zz => zz < 10 ? "0" + zz : "" + zz,
          sz = new Date;
        return "[" + tz(sz.getHours()) + ":" + tz(sz.getMinutes()) + ":" + tz(sz.getSeconds()) + "]: " + zz
      }
      static _LogDisabled(zz, tz) {}
      static _LogEnabled() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          tz = arguments.length > 1 ? arguments[1] : void 0,
          sz = arguments.length > 2 ? arguments[2] : void 0;
        const Wz = Array.isArray(tz) ? tz[0] : tz;
        if (void 0 !== sz && !Fz._CheckLimit(Wz, sz)) return;
        const Xz = Fz._FormatMessage(Wz),
          Oz = this._Levels[zz],
          oz = Array.isArray(tz) ? tz.slice(1) : [];
        Oz.logFunc && Oz.logFunc("BJS - " + Xz, ...oz);
        const vz = `<div style='color:${Oz.color}'>${Xz}</div><br>`;
        Fz._AddLogEntry(vz), Fz._GenerateLimitMessage(Wz, zz)
      }
      static get LogCache() {
        return Fz._LogCache
      }
      static ClearLogCache() {
        Fz._LogCache = "", Fz._LogLimitOutputs = {}, Fz.errorsCount = 0
      }
      static set LogLevels(zz) {
        Fz.Log = Fz._LogDisabled, Fz.Warn = Fz._LogDisabled, Fz.Error = Fz._LogDisabled;
        const tz = [Fz.MessageLogLevel, Fz.WarningLogLevel, Fz.ErrorLogLevel];
        for (const sz of tz)
          if ((zz & sz) === sz) {
            const zz = this._Levels[sz];
            Fz[zz.name] = Fz._LogEnabled.bind(Fz, sz)
          }
      }
    }
    Fz.NoneLogLevel = 0, Fz.MessageLogLevel = 1, Fz.WarningLogLevel = 2, Fz.ErrorLogLevel = 4, Fz.AllLogLevel = 7, Fz.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Fz._LogCache = "", Fz._LogLimitOutputs = {}, Fz._Levels = [{}, {
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
    }], Fz.errorsCount = 0, Fz.Log = Fz._LogEnabled.bind(Fz, Fz.MessageLogLevel), Fz.Warn = Fz._LogEnabled.bind(Fz, Fz.WarningLogLevel), Fz.Error = Fz._LogEnabled.bind(Fz, Fz.ErrorLogLevel)
  },
  60296: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      CreateScreenshot: () => Mz,
      CreateScreenshotAsync: () => dz,
      CreateScreenshotForFrameGraphAsync: () => iz,
      CreateScreenshotUsingRenderTarget: () => Qz,
      CreateScreenshotUsingRenderTargetAsync: () => kz,
      CreateScreenshotWithResizeAsync: () => hz,
      RegisterScreenshotTools: () => az,
      ScreenshotTools: () => lz
    });
    var Fz = sz(39617),
      Wz = sz(40936),
      Xz = sz(40909),
      Oz = sz(39181),
      oz = sz(40915),
      vz = sz(36502),
      Uz = sz(36475);
    class Kz extends oz.f {
      static _GetDefines(zz) {
        if (!zz) return null;
        return zz.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
      }
      _gatherImports(zz, tz) {
        zz ? (this._webGPUReady = !0, tz.push(Promise.all([sz.e(367).then((() => sz(60654))), sz.e(368).then((() => sz(60659)))]))) : tz.push(Promise.all([sz.e(369).then((() => sz(60663))), sz.e(370).then((() => sz(60671)))]))
      }
      constructor(zz) {
        const tz = {
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: zz,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || vz.c.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          vertexShader: Kz.VertexUrl,
          fragmentShader: Kz.FragmentUrl,
          uniforms: Kz.Uniforms
        };
        super({
          ...tz,
          defines: Kz._GetDefines(tz.engine)
        }), this.texelSize = new Uz.n(0, 0)
      }
      bind() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.bind(zz), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
      }
    }
    Kz.VertexUrl = "fxaa", Kz.FragmentUrl = "fxaa", Kz.Uniforms = ["texelSize"];
    class uz extends Xz.c {
      getClassName() {
        return "FxaaPostProcess"
      }
      constructor(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Wz = arguments.length > 3 ? arguments[3] : void 0,
          Xz = arguments.length > 4 ? arguments[4] : void 0,
          Oz = arguments.length > 5 ? arguments[5] : void 0,
          oz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const vz = {
          uniforms: Kz.Uniforms,
          size: "number" === typeof tz ? tz : void 0,
          camera: sz,
          samplingMode: Wz || Fz.g.BILINEAR_SAMPLINGMODE,
          engine: Xz,
          reusable: Oz,
          textureType: oz,
          ...tz
        };
        super(zz, Kz.FragmentUrl, {
          effectWrapper: "number" !== typeof tz && tz.effectWrapper ? void 0 : new Kz(zz, Xz, vz),
          ...vz
        }), this.onApplyObservable.add((zz => {
          this._effectWrapper.texelSize = this.texelSize
        }))
      }
      static _Parse(zz, tz, sz, Fz) {
        return Oz.e.Parse((() => new uz(zz.name, zz.options, tz, zz.renderTargetSamplingMode, sz.FD(), zz.reusable)), zz, sz, Fz)
      }
    }
    var Nz = sz(38097),
      bz = sz(39264),
      wz = sz(40945),
      Dz = sz(40928),
      gz = sz(39074);
    const Hz = 0;
    class Bz {
      constructor(zz, tz, sz) {
        this.name = zz, this._parentTask = tz, this._context = sz, this.disabled = !1
      }
      setInitializeFunc(zz) {
        this._initFunc = zz
      }
      setExecuteFunc(zz) {
        this._executeFunc = zz
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
    class Pz extends Bz {
      static IsObjectListPass(zz) {
        return void 0 !== zz.setObjectList
      }
      get objectList() {
        return this._objectList
      }
      setObjectList(zz) {
        this._objectList = zz
      }
      constructor(zz, tz, sz, Fz) {
        super(zz, tz, sz), this._engine = Fz
      }
      _isValid() {
        const zz = super._isValid();
        return zz || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
      }
    }
    class rz extends Bz {
      static IsRenderPass(zz) {
        return void 0 !== zz.setRenderTarget
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
      constructor(zz, tz, sz, Fz) {
        super(zz, tz, sz), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = Fz
      }
      setRenderTarget(zz) {
        this._renderTarget = zz
      }
      setRenderTargetDepth(zz) {
        this._renderTargetDepth = zz
      }
      addDependencies(zz) {
        if (void 0 !== zz)
          if (Array.isArray(zz))
            for (const tz of zz) this._dependencies.add(tz);
          else this._dependencies.add(zz)
      }
      collectDependencies(zz) {
        const tz = this._dependencies.keys();
        for (let sz = tz.next(); !0 !== sz.done; sz = tz.next()) zz.add(sz.value);
        if (void 0 !== this._renderTarget)
          if (Array.isArray(this._renderTarget))
            for (const sz of this._renderTarget) void 0 !== sz && zz.add(sz);
          else zz.add(this._renderTarget);
        void 0 !== this._renderTargetDepth && zz.add(this._renderTargetDepth)
      }
      setOutputLayerAndFaceIndices(zz) {
        const tz = this.frameGraphRenderTarget.renderTargetWrapper;
        if (tz)
          for (const sz of zz) tz.setLayerAndFaceIndex(sz.targetIndex, sz.layerIndex, sz.faceIndex)
      }
      _initialize() {
        this._frameGraphRenderTarget = this._context.createRenderTarget(this.name, this._renderTarget, this._renderTargetDepth, this.depthReadOnly, this.stencilReadOnly), super._initialize()
      }
      _execute() {
        this._context.bindRenderTarget(this._frameGraphRenderTarget), super._execute(), this._context.restoreDefaultFramebuffer()
      }
      _isValid() {
        const zz = super._isValid();
        return zz || (void 0 !== this._renderTarget || void 0 !== this.renderTargetDepth ? null : "Render target and render target depth cannot both be undefined.")
      }
      _dispose() {
        this._frameGraphRenderTarget?.dispose()
      }
    }
    var Yz = sz(36505);
    class xz {
      get name() {
        return this._name
      }
      set name(zz) {
        this._name = zz
      }
      get disabled() {
        return this._disabled
      }
      set disabled(zz) {
        this._disabled = zz
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
      constructor(zz, tz) {
        this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new Yz.c, this.onBeforeTaskExecute = new Yz.c, this.onAfterTaskExecute = new Yz.c, this.name = zz, this._frameGraph = tz, this._reset()
      }
      _reset() {
        for (const zz of this._passes) zz._dispose();
        for (const zz of this._passesDisabled) zz._dispose();
        this._passes.length = 0, this._passesDisabled.length = 0
      }
      _addPass(zz, tz) {
        tz ? this._passesDisabled.push(zz) : this._passes.push(zz)
      }
      _checkTask() {
        let zz, tz = null,
          sz = null;
        for (const oz of this._passes) {
          const Fz = oz._isValid();
          if (Fz) throw new Error(`Pass "${oz.name}" is not valid. ${Fz}`);
          if (rz.IsRenderPass(oz)) {
            const zz = Array.isArray(oz.renderTarget) ? oz.renderTarget : [oz.renderTarget];
            tz = [];
            for (const sz of zz) void 0 !== sz && tz.push(this._frameGraph.textureManager.getTextureFromHandle(sz));
            sz = void 0 !== oz.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(oz.renderTargetDepth) : null
          } else Pz.IsObjectListPass(oz) && (zz = oz.objectList)
        }
        let Fz, Wz = null,
          Xz = [],
          Oz = null;
        for (const oz of this._passesDisabled) {
          const zz = oz._isValid();
          if (zz) throw new Error(`Pass "${oz.name}" is not valid. ${zz}`);
          if (rz.IsRenderPass(oz)) {
            const zz = Array.isArray(oz.renderTarget) ? oz.renderTarget : [oz.renderTarget];
            Wz = [];
            for (const tz of zz) void 0 !== tz && Wz.push(this._frameGraph.textureManager.getTextureFromHandle(tz));
            Xz = zz, Oz = void 0 !== oz.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(oz.renderTargetDepth) : null
          } else Pz.IsObjectListPass(oz) && (Fz = oz.objectList)
        }
        if (this._passesDisabled.length > 0) {
          if (!this._checkSameRenderTarget(tz, Wz)) {
            let zz = !0;
            for (const tz of Xz)
              if (void 0 !== tz && !this._frameGraph.textureManager.isHistoryTexture(tz)) {
                zz = !1;
                break
              } if (!zz) throw new Error(`The output texture of the task "${this.name}" is different when it is enabled or disabled.`)
          }
          if (sz !== Oz && null !== Oz) throw new Error(`The output depth texture of the task "${this.name}" is different when it is enabled or disabled.`);
          if (zz !== Fz && null !== Fz) throw new Error(`The output object list of the task "${this.name}" is different when it is enabled or disabled.`)
        }
      }
      _execute() {
        const zz = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
        this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const tz of zz) tz._execute()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
        this.onAfterTaskExecute.notifyObservers(this)
      }
      _initializePasses() {
        this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const zz of this._passes) zz._initialize();
          for (const zz of this._passesDisabled) zz._initialize()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
      }
      _checkSameRenderTarget(zz, tz) {
        if (null === zz || null === tz) return zz === tz;
        if (zz.length !== tz.length) return !1;
        for (let sz = 0; sz < zz.length; sz++)
          if (zz[sz] !== tz[sz]) return !1;
        return !0
      }
    }
    class mz extends xz {
      get alphaMode() {
        return this.postProcess.alphaMode
      }
      set alphaMode(zz) {
        this.postProcess.alphaMode = zz
      }
      get drawWrapper() {
        return this._postProcessDrawWrapper
      }
      constructor(zz, tz, sz) {
        super(zz, tz), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = sz, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture = this._frameGraph.textureManager.createDanglingHandle(), this.outputDepthAttachmentTexture = this._frameGraph.textureManager.createDanglingHandle()
      }
      isReady() {
        return this.postProcess.isReady()
      }
      getClassName() {
        return "FrameGraphPostProcessTask"
      }
      record() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          tz = arguments.length > 1 ? arguments[1] : void 0,
          sz = arguments.length > 2 ? arguments[2] : void 0;
        if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
        const Fz = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
        if (Fz && (Fz.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, Fz), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentTexture, this.depthAttachmentTexture), Fz) {
          const zz = this._frameGraph.textureManager.getTextureAbsoluteDimensions(Fz);
          this._sourceWidth = zz.width, this._sourceHeight = zz.height
        }
        const Wz = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
        this._outputWidth = Wz.size.width, this._outputHeight = Wz.size.height;
        const Xz = this._frameGraph.addRenderPass(this.name);
        if (Xz.depthReadOnly = this.depthReadOnly, Xz.stencilReadOnly = this.stencilReadOnly, Xz.addDependencies(this.sourceTexture), Xz.setRenderTarget(this.outputTexture), Xz.setRenderTargetDepth(this.depthAttachmentTexture), Xz.setExecuteFunc((zz => {
            zz.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && zz.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), tz?.(zz), this.viewport && zz.setViewport(this.viewport), zz.applyFullScreenEffect(this._postProcessDrawWrapper, (() => {
              void 0 !== this.sourceTexture && zz.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), sz?.(zz), this.postProcess.bind()
            }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), zz.restoreDefaultFramebuffer(), zz.popDebugGroup()
          })), !zz) {
          const zz = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
          zz.depthReadOnly = this.depthReadOnly, zz.stencilReadOnly = this.stencilReadOnly, zz.addDependencies(this.sourceTexture), zz.setRenderTarget(this.outputTexture), zz.setRenderTargetDepth(this.depthAttachmentTexture), zz.setExecuteFunc((zz => {
            void 0 !== this.sourceTexture && 0 === this.alphaMode && (this.viewport && zz.setViewport(this.viewport), zz.copyTexture(this.sourceTexture, void 0, void 0 !== this.viewport))
          }))
        }
        return Xz
      }
      dispose() {
        this.postProcess.dispose(), super.dispose()
      }
    }
    class Jz extends mz {
      constructor(zz, tz, sz) {
        super(zz, tz, sz || new Kz(zz, tz.engine))
      }
      getClassName() {
        return "FrameGraphFXAATask"
      }
      record() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          tz = arguments.length > 1 ? arguments[1] : void 0,
          sz = arguments.length > 2 ? arguments[2] : void 0;
        const Fz = super.record(zz, tz, sz);
        return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, Fz
      }
    }
    var Iz = sz(40942);
    class Cz extends mz {
      constructor(zz, tz, sz) {
        super(zz, tz, sz || new Iz.f(zz, tz.engine))
      }
      getClassName() {
        return "FrameGraphPassTask"
      }
    }
    var ez = sz(39256),
      Zz = sz(39328),
      Gz = sz(39284),
      Tz = sz(39413),
      cz = sz(36654);
    class jz {
      getRenderCamera(zz) {
        if (this._renderCamera) return this._renderCamera;
        {
          let tz;
          return tz = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, zz && tz && tz.isRigCamera ? tz.rigParent : tz
        }
      }
      setRenderCamera(zz) {
        this._renderCamera = zz
      }
      _getSharedGizmoLight() {
        return this._sharedGizmoLight || (this._sharedGizmoLight = new Tz.b("shared gizmo light", new Uz.p(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = cz.c.Gray()), this._sharedGizmoLight
      }
      static get DefaultUtilityLayer() {
        return null == jz._DefaultUtilityLayer ? jz._CreateDefaultUtilityLayerFromScene(vz.c.LastCreatedScene) : jz._DefaultUtilityLayer
      }
      static _CreateDefaultUtilityLayerFromScene(zz) {
        return jz._DefaultUtilityLayer = new jz(zz), jz._DefaultUtilityLayer.originalScene.qJ.addOnce((() => {
          jz._DefaultUtilityLayer = null
        })), jz._DefaultUtilityLayer
      }
      static get DefaultKeepDepthUtilityLayer() {
        return null == jz._DefaultKeepDepthUtilityLayer ? jz._CreateDefaultKeepUtilityLayerFromScene(vz.c.LastCreatedScene) : jz._DefaultKeepDepthUtilityLayer
      }
      static _CreateDefaultKeepUtilityLayerFromScene(zz) {
        return jz._DefaultKeepDepthUtilityLayer = new jz(zz), jz._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, jz._DefaultKeepDepthUtilityLayer.originalScene.qJ.addOnce((() => {
          jz._DefaultKeepDepthUtilityLayer = null
        })), jz._DefaultKeepDepthUtilityLayer
      }
      constructor(zz) {
        let tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.originalScene = zz, this.handleEvents = tz, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.processAllEvents = !1, this.pickingEnabled = !0, this.onPointerOutObservable = new Yz.c, this.utilityLayerScene = new ez.i(zz.FD(), {
          virtual: !0,
          useFloatingOrigin: zz.floatingOriginMode
        }), this.utilityLayerScene.useRightHandedSystem = zz.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), tz && (this._originalPointerObserver = zz.onPrePointerObservable.add((tz => {
          if (!this.utilityLayerScene.activeCamera) return;
          if (!this.pickingEnabled) return;
          if (!this.processAllEvents && tz.type !== Zz.c.POINTERMOVE && tz.type !== Zz.c.POINTERUP && tz.type !== Zz.c.POINTERDOWN && tz.type !== Zz.c.POINTERDOUBLETAP) return;
          this.utilityLayerScene.pointerX = zz.pointerX, this.utilityLayerScene.pointerY = zz.pointerY;
          const sz = tz.event;
          if (zz.isPointerCaptured(sz.pointerId)) return void(this._pointerCaptures[sz.pointerId] = !1);
          const Fz = sz => {
              let Fz;
              if (tz.nearInteractionPickingInfo) Fz = tz.nearInteractionPickingInfo.pickedMesh.aJ() == sz ? tz.nearInteractionPickingInfo : new Gz.e;
              else if (sz !== this.utilityLayerScene && tz.originalPickingInfo) Fz = tz.originalPickingInfo;
              else {
                let Wz = null;
                this._renderCamera && (Wz = sz._activeCamera, sz._activeCamera = this._renderCamera, tz.ray = null), Fz = tz.ray ? sz.pickWithRay(tz.ray) : sz.gb(zz.pointerX, zz.pointerY), Wz && (sz._activeCamera = Wz)
              }
              return Fz
            },
            Wz = Fz(this.utilityLayerScene);
          if (!tz.ray && Wz && (tz.ray = Wz.ray), tz.originalPickingInfo?.aimTransform && Wz && (Wz.aimTransform = tz.originalPickingInfo.aimTransform, Wz.gripTransform = tz.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(tz), this.onlyCheckPointerDownEvents && tz.type != Zz.c.POINTERDOWN) return tz.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new Zz.g(tz.type, tz.event, Wz), tz.type), void(tz.type === Zz.c.POINTERUP && this._pointerCaptures[sz.pointerId] && (this._pointerCaptures[sz.pointerId] = !1));
          if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) Wz && Wz.hit && (tz.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new Zz.g(tz.type, tz.event, Wz), tz.type), tz.skipOnPointerObservable = !0);
          else {
            const sz = Fz(zz),
              Xz = tz.event;
            sz && Wz && (0 === Wz.distance && sz.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(sz.pickedMesh) ? (this._notifyObservers(tz, sz, Xz), tz.skipOnPointerObservable = !0) : tz.type === Zz.c.POINTERDOWN ? (this._pointerCaptures[Xz.pointerId] = !0, this._notifyObservers(tz, sz, Xz)) : tz.type !== Zz.c.POINTERMOVE && tz.type !== Zz.c.POINTERUP || (this._lastPointerEvents[Xz.pointerId] && (this.onPointerOutObservable.notifyObservers(Xz.pointerId), delete this._lastPointerEvents[Xz.pointerId]), this._notifyObservers(tz, sz, Xz)) : !this._pointerCaptures[Xz.pointerId] && (Wz.distance < sz.distance || 0 === sz.distance) ? (this._notifyObservers(tz, Wz, Xz), tz.skipOnPointerObservable || (tz.skipOnPointerObservable = Wz.distance > 0)) : !this._pointerCaptures[Xz.pointerId] && Wz.distance >= sz.distance && (this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(sz.pickedMesh) ? (this._notifyObservers(tz, sz, Xz), tz.skipOnPointerObservable = !0) : (tz.type !== Zz.c.POINTERMOVE && tz.type !== Zz.c.POINTERUP || this._lastPointerEvents[Xz.pointerId] && (this.onPointerOutObservable.notifyObservers(Xz.pointerId), delete this._lastPointerEvents[Xz.pointerId]), this._notifyObservers(tz, Wz, Xz))), tz.type === Zz.c.POINTERUP && this._pointerCaptures[Xz.pointerId] && (this._pointerCaptures[Xz.pointerId] = !1))
          }
        })), this._originalPointerObserver && zz.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, sz || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((zz => {
          this.shouldRender && zz == this.getRenderCamera() && this.render()
        }))), this._sceneDisposeObserver = this.originalScene.qJ.add((() => {
          this.dispose()
        })), this._updateCamera()
      }
      _notifyObservers(zz, tz, sz) {
        zz.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new Zz.g(zz.type, zz.event, tz), zz.type), this._lastPointerEvents[sz.pointerId] = !0)
      }
      render() {
        if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
          const zz = this.utilityLayerScene.activeCamera.aJ(),
            tz = this.utilityLayerScene.activeCamera;
          tz._scene = this.utilityLayerScene, tz.leftCamera && (tz.leftCamera._scene = this.utilityLayerScene), tz.rightCamera && (tz.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), tz._scene = zz, tz.leftCamera && (tz.leftCamera._scene = zz), tz.rightCamera && (tz.rightCamera._scene = zz)
        }
      }
      dispose() {
        this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.qJ.remove(this._sceneDisposeObserver), this._originalPointerObserver && this.originalScene.onPrePointerObservable.remove(this._originalPointerObserver), this.utilityLayerScene.dispose()
      }
      _updateCamera() {
        this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
      }
    }
    jz._DefaultUtilityLayer = null, jz._DefaultKeepDepthUtilityLayer = null;
    const Az = {
      FindMainCamera: function(zz) {
        return zz.findMainCamera()
      },
      FindMainObjectRenderer: function(zz) {
        return zz.findMainObjectRenderer()
      },
      CreateUtilityLayerRenderer: function(zz) {
        let tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const sz = zz.Kg,
          Fz = new jz(sz, tz, !0);
        Fz.utilityLayerScene.activeCamera = sz.activeCamera;
        let Wz = Az.FindMainCamera(sz.frameGraph);
        !Wz && sz.cameras.length > 0 && (Wz = sz.cameras[0]), Wz && (Fz.setRenderCamera(Wz), Fz.utilityLayerScene.activeCamera = Wz);
        const Xz = sz.onAfterRenderObservable.add((() => {
          Fz.render()
        }));
        return Fz.utilityLayerScene.qJ.addOnce((() => {
          sz.onAfterRenderObservable.remove(Xz)
        })), Fz
      }
    };
    let yz = null;

    function Mz(zz, tz, sz, Fz) {
      let Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        Xz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Oz = arguments.length > 6 ? arguments[6] : void 0,
        oz = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        vz = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
      const {
        height: Uz,
        width: Kz
      } = Lz(zz, tz, sz);
      if (!Uz || !Kz) return void Nz.e.Error("Invalid 'size' parameter !");
      const uz = tz.aJ();
      let wz = uz.activeCamera !== tz;
      if (uz.frameGraph) {
        const zz = Az.FindMainObjectRenderer(uz.frameGraph);
        zz && (wz = zz.camera !== tz)
      }
      wz ? Qz(zz, tz, sz, (zz => {
        if (Xz) {
          const tz = new Blob([zz]);
          bz.j.DownloadBlob(tz), Fz && Fz("")
        } else Fz && Fz(zz)
      }), Wz, 1, zz.getCreationOptions().antialias, void 0, void 0, void 0, void 0, Oz) : zz.onEndFrameObservable.addOnce((() => {
        yz || (yz = document.createElement("canvas")), yz.width = Kz, yz.height = Uz;
        const tz = yz.getContext("2d"),
          sz = zz.getRenderingCanvas();
        if (!tz || !sz) return void Nz.e.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
        const wz = sz.width,
          Dz = sz.height,
          gz = yz.width,
          Hz = yz.height,
          Bz = gz / wz,
          Pz = Hz / Dz,
          rz = oz ? Math.max(Bz, Pz) : Math.min(Bz, Pz),
          Yz = wz * rz,
          xz = Dz * rz,
          mz = (gz - Yz) / 2,
          Jz = (Hz - xz) / 2;
        tz.save(), tz.fillStyle = vz ? uz.clearColor.toHexString() : "rgba(0, 0, 0, 0)", tz.fillRect(0, 0, Kz, Uz), tz.restore(), tz.drawImage(sz, 0, 0, wz, Dz, mz, Jz, Yz, xz), Xz ? (bz.j.EncodeScreenshotCanvasData(yz, void 0, Wz, void 0, Oz), Fz && Fz("")) : bz.j.EncodeScreenshotCanvasData(yz, Fz, Wz, void 0, Oz)
      }))
    }
    async function dz(zz, tz, sz) {
      let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Wz = arguments.length > 4 ? arguments[4] : void 0,
        Xz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Oz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        oz = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      return await new Promise(((vz, Uz) => {
        Mz(zz, tz, sz, (zz => {
          "undefined" !== typeof zz ? vz(zz) : Uz(new Error("Data is undefined"))
        }), Fz, oz, Wz, Xz, Oz)
      }))
    }
    async function hz(zz, tz, sz, Fz) {
      let Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        Xz = arguments.length > 5 ? arguments[5] : void 0,
        Oz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return await new Promise((oz => {
        Mz(zz, tz, {
          width: sz,
          height: Fz
        }, (() => {
          oz()
        }), Wz, !0, Xz, Oz)
      }))
    }

    function Qz(zz, tz, Xz, Oz) {
      let oz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        vz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
        Uz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Kz = arguments.length > 7 ? arguments[7] : void 0,
        bz = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Hz = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        Bz = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
        Pz = arguments.length > 11 ? arguments[11] : void 0,
        rz = arguments.length > 12 ? arguments[12] : void 0,
        Yz = arguments.length > 13 ? arguments[13] : void 0,
        xz = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
        mz = arguments.length > 15 ? arguments[15] : void 0;
      const Jz = tz.aJ();
      if (Jz.frameGraph) return void iz(Jz.frameGraph, tz, Xz, oz, vz, Uz, Kz, Pz, Yz, !Oz).then((zz => {
        Oz && Oz(zz)
      }));
      const {
        height: Iz,
        width: Cz,
        finalWidth: ez,
        finalHeight: Zz
      } = Lz(zz, tz, Xz), Gz = {
        width: Cz,
        height: Iz
      };
      if (!Iz || !Cz) return void Nz.e.Error("Invalid 'size' parameter !");
      zz.skipFrameRender = !0;
      const Tz = zz.getRenderWidth,
        cz = zz.getRenderHeight;
      zz.getRenderWidth = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && zz._currentRenderTarget ? zz._currentRenderTarget.width : Cz
      }, zz.getRenderHeight = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && zz._currentRenderTarget ? zz._currentRenderTarget.height : Iz
      }, zz.onResizeObservable.hasObservers() && zz.onResizeObservable.notifyObservers(zz);
      const jz = new Wz.d("screenShot", Gz, Jz, !1, !1, 0, !1, Fz.g.BILINEAR_SAMPLINGMODE, void 0, Hz, void 0, void 0, void 0, vz);
      jz.renderList = Jz.meshes.slice(), jz.samples = vz, jz.renderSprites = bz, jz.activeCamera = tz, jz.forceLayerMaskCheck = Bz, rz?.(jz);
      const Az = Yz || wz.DumpData,
        yz = () => {
          Jz.incrementRenderId(), Jz.resetCachedMaterial(), (0, gz.e)((() => jz.isReadyForRendering() && tz.isReady(!0)), (() => {
            zz.onEndFrameObservable.addOnce((() => {
              ez === Cz && Zz === Iz ? jz.readPixels(void 0, void 0, void 0, !1).then((zz => {
                Az(Cz, Iz, zz, Oz, oz, Kz, !0, void 0, Pz), jz.dispose()
              })) : (zz.isWebGPU ? sz.e(363).then((() => sz(60612))) : sz.e(364).then((() => sz(60616)))).then((async () => await (0, Dz.b)("pass", jz.getInternalTexture(), Jz, void 0, void 0, void 0, ez, Zz).then((tz => {
                zz._readTexturePixels(tz, ez, Zz, -1, 0, null, !0, !1, 0, 0).then((zz => {
                  Az(ez, Zz, zz, Oz, oz, Kz, !0, void 0, Pz), tz.dispose()
                }))
              }))))
            })), Jz.incrementRenderId(), Jz.resetCachedMaterial();
            const Fz = Jz.activeCamera,
              Wz = Jz.activeCameras,
              Xz = tz.outputRenderTarget,
              vz = Jz.spritesEnabled;
            Jz.activeCamera = tz, Jz.activeCameras = null, tz.outputRenderTarget = jz, Jz.spritesEnabled = bz;
            const Uz = Jz.meshes;
            Jz.meshes = jz.renderList || Jz.meshes;
            try {
              Jz.render()
            } finally {
              Jz.activeCamera = Fz, Jz.activeCameras = Wz, tz.outputRenderTarget = Xz, Jz.spritesEnabled = vz, Jz.meshes = Uz, zz.getRenderWidth = Tz, zz.getRenderHeight = cz, zz.onResizeObservable.hasObservers() && zz.onResizeObservable.notifyObservers(zz), tz.getProjectionMatrix(!0), zz.skipFrameRender = !1
            }
          }), (() => {
            zz.skipFrameRender = !1, zz.getRenderWidth = Tz, zz.getRenderHeight = cz, mz?.()
          }), void 0, xz)
        };
      if (Uz) {
        const zz = new uz("antialiasing", 1, Jz.activeCamera);
        jz.addPostProcess(zz), zz.autoClear = !0, zz.onEffectCreatedObservable.addOnce((zz => {
          zz.isReady() ? yz() : zz.onCompiled = () => {
            yz()
          }
        }))
      } else yz()
    }
    async function kz(zz, tz, sz) {
      let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        Xz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Oz = arguments.length > 6 ? arguments[6] : void 0,
        oz = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        vz = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Uz = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
        Kz = arguments.length > 10 ? arguments[10] : void 0,
        uz = arguments.length > 11 ? arguments[11] : void 0,
        Nz = arguments.length > 12 ? arguments[12] : void 0;
      return await new Promise(((bz, wz) => {
        Qz(zz, tz, sz, (zz => {
          "undefined" !== typeof zz ? bz(zz) : wz(new Error("Data is undefined"))
        }), Fz, Wz, Xz, Oz, oz, vz, Uz, Kz, uz, Nz)
      }))
    }
    async function iz(zz, tz, sz) {
      let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        Xz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Oz = arguments.length > 6 ? arguments[6] : void 0,
        oz = arguments.length > 7 ? arguments[7] : void 0,
        vz = arguments.length > 8 ? arguments[8] : void 0,
        Uz = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        Kz = arguments.length > 10 ? arguments[10] : void 0;
      const uz = zz.engine,
        Nz = zz.textureManager,
        {
          height: bz,
          width: Dz,
          finalWidth: gz,
          finalHeight: Bz
        } = Lz(uz, tz, sz),
        Pz = {
          width: Dz,
          height: bz
        },
        rz = vz || wz.DumpData,
        Yz = zz.tasks,
        xz = Yz.length,
        mz = zz.pausedExecution,
        Iz = uz.getCaps().parallelShaderCompile;
      Nz.setBackBufferTextures(0, 0, {
        size: Pz,
        options: {
          createMipMaps: !1,
          samples: Wz,
          types: [0],
          formats: [5],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot color"]
        },
        sizeIsPercentage: !1
      }, {
        size: Pz,
        options: {
          createMipMaps: !1,
          samples: Wz,
          types: [0],
          formats: [uz.isStencilEnable ? 13 : 14],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot depth"]
        },
        sizeIsPercentage: !1
      });
      let ez = Hz;
      if (Xz) {
        const tz = new Jz("fxaa", zz);
        tz.sourceTexture = ez, ez = tz.outputTexture, zz.addTask(tz)
      }
      if (gz !== Dz || Bz !== bz) {
        const tz = new Cz("pass", zz);
        tz.sourceTexture = ez, tz.targetTexture = zz.textureManager.createRenderTargetTexture("pass_output", {
          size: {
            width: gz,
            height: Bz
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
        }), ez = tz.outputTexture, zz.addTask(tz)
      }
      const Zz = Az.FindMainObjectRenderer(zz);
      let Gz = null;
      Zz && (Gz = Zz.camera, Zz.camera = tz), uz.getCaps().parallelShaderCompile = void 0, await zz.buildAsync();
      const Tz = Kz ?? (Nz.hasHistoryTextures ? 32 : 1);
      for (let wz = 0; wz < Tz; ++wz) zz.execute();
      zz.pausedExecution = !0, uz.getCaps().parallelShaderCompile = Iz;
      for (let wz = xz; wz < Yz.length; ++wz) zz.tasks[wz].dispose();
      zz.tasks.length = xz, Zz && Gz && (Zz.camera = Gz);
      const cz = zz.textureManager.getTextureFromHandle(ez);
      return cz.incrementReferences(), Nz.resetBackBufferTextures(), await zz.buildAsync(), zz.pausedExecution = mz, new Promise((zz => {
        uz._readTexturePixels(cz, gz, Bz, -1, 0, null, !0, !1, 0, 0).then((async tz => {
          cz.dispose(), rz(gz, Bz, tz, Uz ? void 0 : tz => zz(tz), Fz, Oz, !0, void 0, oz), Uz && zz(null)
        }))
      }))
    }

    function Lz(zz, tz, sz) {
      let Fz = 0,
        Wz = 0,
        Xz = 0,
        Oz = 0;
      if ("object" === typeof sz) {
        const oz = sz.precision ? Math.abs(sz.precision) : 1;
        sz.width && sz.height ? (Fz = sz.height * oz, Wz = sz.width * oz) : sz.width && !sz.height ? (Wz = sz.width * oz, Fz = Math.round(Wz / zz.getAspectRatio(tz))) : sz.height && !sz.width ? (Fz = sz.height * oz, Wz = Math.round(Fz * zz.getAspectRatio(tz))) : (Wz = Math.round(zz.getRenderWidth() * oz), Fz = Math.round(Wz / zz.getAspectRatio(tz))), sz.finalWidth && sz.finalHeight ? (Oz = sz.finalHeight, Xz = sz.finalWidth) : sz.finalWidth && !sz.finalHeight ? (Xz = sz.finalWidth, Oz = Math.round(Xz / zz.getAspectRatio(tz))) : sz.finalHeight && !sz.finalWidth ? (Oz = sz.finalHeight, Xz = Math.round(Oz * zz.getAspectRatio(tz))) : (Xz = Wz, Oz = Fz)
      } else isNaN(sz) || (Fz = sz, Wz = sz, Xz = sz, Oz = sz);
      return Wz && (Wz = Math.floor(Wz)), Fz && (Fz = Math.floor(Fz)), Xz && (Xz = Math.floor(Xz)), Oz && (Oz = Math.floor(Oz)), {
        height: 0 | Fz,
        width: 0 | Wz,
        finalWidth: 0 | Xz,
        finalHeight: 0 | Oz
      }
    }
    const lz = {
      CreateScreenshot: Mz,
      CreateScreenshotAsync: dz,
      CreateScreenshotWithResizeAsync: hz,
      CreateScreenshotUsingRenderTarget: Qz,
      CreateScreenshotUsingRenderTargetAsync: kz,
      CreateScreenshotForFrameGraphAsync: iz
    };
    let nz = !1;

    function az() {
      if (nz) return;
      nz = !0;
      bz.j.CreateScreenshot = Mz, bz.j.CreateScreenshotAsync = dz, bz.j.CreateScreenshotUsingRenderTarget = Qz, bz.j.CreateScreenshotUsingRenderTargetAsync = kz
    }
    az()
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);