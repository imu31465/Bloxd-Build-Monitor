export const id = 231;
export const ids = [231, 232];
export const modules = {
  39412: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Oz,
      e: () => dz
    });
    var Ez = bz(39170),
      nz = bz(39172),
      iz = bz(36519),
      lz = bz(36715),
      Mz = bz(39421),
      tz = bz(39384),
      Hz = bz(36564);
    let Oz = (() => {
        var zz;
        let uz, bz, tz = Mz.b,
          Hz = [],
          Oz = [],
          pz = [],
          dz = [];
        return zz = class extends tz {
          constructor(zz, uz, bz, nz) {
            super(zz, bz, nz), this.groundColor = (0, Ez.j)(this, Hz, new lz.c(0, 0, 0)), this.direction = ((0, Ez.j)(this, Oz), (0, Ez.j)(this, pz, void 0)), (0, Ez.j)(this, dz), this.direction = uz || iz.n.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(zz) {
            return this.direction = iz.n.Normalize(zz.subtract(iz.n.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(zz, uz) {
            const bz = iz.n.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", bz.x, bz.y, bz.z, 0, uz), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), uz), this
          }
          transferToNodeMaterialEffect(zz, uz) {
            const bz = iz.n.Normalize(this.direction);
            return zz.setFloat3(uz, bz.x, bz.y, bz.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = iz.d.Identity()), this._worldMatrix
          }
          getTypeID() {
            return Mz.b.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(zz, uz) {
            zz["HEMILIGHT" + uz] = !0
          }
        }, (() => {
          const iz = "function" === typeof Symbol && Symbol.metadata ? Object.create(tz[Symbol.metadata] ?? null) : void 0;
          uz = [(0, nz.q)()], bz = [(0, nz.D)()], (0, Ez.h)(null, null, uz, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: zz => "groundColor" in zz,
              get: zz => zz.groundColor,
              set: (zz, uz) => {
                zz.groundColor = uz
              }
            },
            metadata: iz
          }, Hz, Oz), (0, Ez.h)(null, null, bz, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: zz => "direction" in zz,
              get: zz => zz.direction,
              set: (zz, uz) => {
                zz.direction = uz
              }
            },
            metadata: iz
          }, pz, dz), iz && Object.defineProperty(zz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: iz
          })
        })(), zz
      })(),
      pz = !1;

    function dz() {
      pz || (pz = !0, tz.c.AddNodeConstructor("Light_Type_3", ((zz, uz) => () => new Oz(zz, iz.n.Zero(), uz))), (0, Hz.c)("BABYLON.HemisphericLight", Oz))
    }
  },
  37235: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => nz
    });
    var Ez = bz(37239);
    class nz {
      static GetPlanes(zz) {
        const uz = [];
        for (let bz = 0; bz < 6; bz++) uz.push(new Ez.b(0, 0, 0, 0));
        return nz.GetPlanesToRef(zz, uz), uz
      }
      static GetNearPlaneToRef(zz, uz) {
        const bz = zz.m;
        uz.normal.x = bz[3] + bz[2], uz.normal.y = bz[7] + bz[6], uz.normal.z = bz[11] + bz[10], uz.d = bz[15] + bz[14], uz.normalize()
      }
      static GetFarPlaneToRef(zz, uz) {
        const bz = zz.m;
        uz.normal.x = bz[3] - bz[2], uz.normal.y = bz[7] - bz[6], uz.normal.z = bz[11] - bz[10], uz.d = bz[15] - bz[14], uz.normalize()
      }
      static GetLeftPlaneToRef(zz, uz) {
        const bz = zz.m;
        uz.normal.x = bz[3] + bz[0], uz.normal.y = bz[7] + bz[4], uz.normal.z = bz[11] + bz[8], uz.d = bz[15] + bz[12], uz.normalize()
      }
      static GetRightPlaneToRef(zz, uz) {
        const bz = zz.m;
        uz.normal.x = bz[3] - bz[0], uz.normal.y = bz[7] - bz[4], uz.normal.z = bz[11] - bz[8], uz.d = bz[15] - bz[12], uz.normalize()
      }
      static GetTopPlaneToRef(zz, uz) {
        const bz = zz.m;
        uz.normal.x = bz[3] - bz[1], uz.normal.y = bz[7] - bz[5], uz.normal.z = bz[11] - bz[9], uz.d = bz[15] - bz[13], uz.normalize()
      }
      static GetBottomPlaneToRef(zz, uz) {
        const bz = zz.m;
        uz.normal.x = bz[3] + bz[1], uz.normal.y = bz[7] + bz[5], uz.normal.z = bz[11] + bz[9], uz.d = bz[15] + bz[13], uz.normalize()
      }
      static GetPlanesToRef(zz, uz) {
        nz.GetNearPlaneToRef(zz, uz[0]), nz.GetFarPlaneToRef(zz, uz[1]), nz.GetLeftPlaneToRef(zz, uz[2]), nz.GetRightPlaneToRef(zz, uz[3]), nz.GetTopPlaneToRef(zz, uz[4]), nz.GetBottomPlaneToRef(zz, uz[5])
      }
      static IsPointInFrustum(zz, uz) {
        for (let bz = 0; bz < 6; bz++)
          if (uz[bz].dotCoordinate(zz) < 0) return !1;
        return !0
      }
    }
  },
  37239: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => nz
    });
    var Ez = bz(36519);
    class nz {
      constructor(zz, uz, bz, nz) {
        this.normal = new Ez.n(zz, uz, bz), this.d = nz
      }
      obz() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new nz(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let uz = 0;
        return 0 !== zz && (uz = 1 / zz), this.normal.x *= uz, this.normal.y *= uz, this.normal.z *= uz, this.d *= uz, this
      }
      transform(zz) {
        const uz = nz._TmpMatrix;
        zz.invertToRef(uz);
        const bz = uz.m,
          Ez = this.normal.x,
          iz = this.normal.y,
          lz = this.normal.z,
          Mz = this.d,
          tz = Ez * bz[0] + iz * bz[1] + lz * bz[2] + Mz * bz[3],
          Hz = Ez * bz[4] + iz * bz[5] + lz * bz[6] + Mz * bz[7],
          Oz = Ez * bz[8] + iz * bz[9] + lz * bz[10] + Mz * bz[11],
          pz = Ez * bz[12] + iz * bz[13] + lz * bz[14] + Mz * bz[15];
        return new nz(tz, Hz, Oz, pz)
      }
      dotCoordinate(zz) {
        return this.normal.x * zz.x + this.normal.y * zz.y + this.normal.z * zz.z + this.d
      }
      copyFromPoints(zz, uz, bz) {
        const Ez = uz.x - zz.x,
          nz = uz.y - zz.y,
          iz = uz.z - zz.z,
          lz = bz.x - zz.x,
          Mz = bz.y - zz.y,
          tz = bz.z - zz.z,
          Hz = nz * tz - iz * Mz,
          Oz = iz * lz - Ez * tz,
          pz = Ez * Mz - nz * lz,
          dz = Math.sqrt(Hz * Hz + Oz * Oz + pz * pz);
        let Fz;
        return Fz = 0 !== dz ? 1 / dz : 0, this.normal.x = Hz * Fz, this.normal.y = Oz * Fz, this.normal.z = pz * Fz, this.d = -(this.normal.x * zz.x + this.normal.y * zz.y + this.normal.z * zz.z), this
      }
      isFrontFacingTo(zz, uz) {
        return Ez.n.Dot(this.normal, zz) <= uz
      }
      signedDistanceTo(zz) {
        return Ez.n.Dot(zz, this.normal) + this.d
      }
      static FromArray(zz) {
        return new nz(zz[0], zz[1], zz[2], zz[3])
      }
      static FromPoints(zz, uz, bz) {
        const Ez = new nz(0, 0, 0, 0);
        return Ez.copyFromPoints(zz, uz, bz), Ez
      }
      static FromPositionAndNormal(zz, uz) {
        const bz = new nz(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(zz, uz, bz)
      }
      static FromPositionAndNormalToRef(zz, uz, bz) {
        return bz.normal.euz(uz), bz.normal.normalize(), bz.d = -zz.dot(bz.normal), bz
      }
      static SignedDistanceToPlaneFromPositionAndNormal(zz, uz, bz) {
        const nz = -(uz.x * zz.x + uz.y * zz.y + uz.z * zz.z);
        return Ez.n.Dot(bz, uz) + nz
      }
    }
    nz._TmpMatrix = Ez.d.Identity()
  },
  37519: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Ez
    });
    class Ez {
      constructor(zz, uz, bz, Ez) {
        this.x = zz, this.y = uz, this.width = bz, this.height = Ez
      }
      toGlobal(zz, uz) {
        return new Ez(this.x * zz, this.y * uz, this.width * zz, this.height * uz)
      }
      toGlobalToRef(zz, uz, bz) {
        return bz.x = this.x * zz, bz.y = this.y * uz, bz.width = this.width * zz, bz.height = this.height * uz, this
      }
      clone() {
        return new Ez(this.x, this.y, this.width, this.height)
      }
    }
  },
  38054: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => iz
    });
    var Ez = bz(38060);
    const nz = (zz, uz, bz) => zz ? zz.getClassName && "Mesh" === zz.getClassName() ? null : !zz.getClassName || "SubMesh" !== zz.getClassName() && "PhysicsBody" !== zz.getClassName() ? zz.clone ? zz.clone() : Array.isArray(zz) ? zz.slice() : bz && "object" === typeof zz ? {
      ...zz
    } : null : zz.clone(uz) : null;
    class iz {
      static DeepCopy(zz, uz, bz, iz) {
        let lz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Mz = function(zz) {
          const uz = [];
          do {
            const bz = Object.getOwnPropertyNames(zz);
            for (const zz of bz) - 1 === uz.indexOf(zz) && uz.push(zz)
          } while (zz = Object.getPrototypeOf(zz));
          return uz
        }(zz);
        for (const Hz of Mz) {
          if ("_" === Hz[0] && (!iz || -1 === iz.indexOf(Hz))) continue;
          if (Hz.endsWith("Observable")) continue;
          if (bz && -1 !== bz.indexOf(Hz)) continue;
          const Mz = zz[Hz],
            Oz = typeof Mz;
          if ("function" !== Oz) try {
            if ("object" === Oz)
              if (Mz instanceof Uint8Array) uz[Hz] = Uint8Array.from(Mz);
              else if (Mz instanceof Array) {
              if (uz[Hz] = [], Mz.length > 0)
                if ("object" == typeof Mz[0])
                  for (let zz = 0; zz < Mz.length; zz++) {
                    const bz = nz(Mz[zz], uz, lz); - 1 === uz[Hz].indexOf(bz) && uz[Hz].push(bz)
                  } else uz[Hz] = Mz.slice(0)
            } else uz[Hz] = nz(Mz, uz, lz);
            else uz[Hz] = Mz
          } catch (tz) {
            Ez.e.Warn(tz.message)
          }
        }
      }
    }
  },
  37335: (zz, uz, bz) => {
    function Ez() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (zz => {
        const uz = 16 * Math.random() | 0;
        return ("x" === zz ? uz : 3 & uz | 8).toString(16)
      }))
    }
    bz.d(uz, {
      c: () => Ez
    })
  },
  38060: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Ez
    });
    class Ez {
      static _CheckLimit(zz, uz) {
        let bz = Ez._LogLimitOutputs[zz];
        return bz ? bz.current++ : (bz = {
          limit: uz,
          current: 1
        }, Ez._LogLimitOutputs[zz] = bz), bz.current <= bz.limit
      }
      static _GenerateLimitMessage(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const bz = Ez._LogLimitOutputs[zz];
        if (!bz || !Ez.MessageLimitReached) return;
        const nz = this._Levels[uz];
        bz.current === bz.limit && Ez[nz.name](Ez.MessageLimitReached.replace(/%LIMIT%/g, "" + bz.limit).replace(/%TYPE%/g, nz.name ?? ""))
      }
      static _AddLogEntry(zz) {
        Ez._LogCache = zz + Ez._LogCache, Ez.OnNewCacheEntry && Ez.OnNewCacheEntry(zz)
      }
      static _FormatMessage(zz) {
        const uz = zz => zz < 10 ? "0" + zz : "" + zz,
          bz = new Date;
        return "[" + uz(bz.getHours()) + ":" + uz(bz.getMinutes()) + ":" + uz(bz.getSeconds()) + "]: " + zz
      }
      static _LogDisabled(zz, uz) {}
      static _LogEnabled() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          uz = arguments.length > 1 ? arguments[1] : void 0,
          bz = arguments.length > 2 ? arguments[2] : void 0;
        const nz = Array.isArray(uz) ? uz[0] : uz;
        if (void 0 !== bz && !Ez._CheckLimit(nz, bz)) return;
        const iz = Ez._FormatMessage(nz),
          lz = this._Levels[zz],
          Mz = Array.isArray(uz) ? uz.slice(1) : [];
        lz.logFunc && lz.logFunc("BJS - " + iz, ...Mz);
        const tz = `<div style='color:${lz.color}'>${iz}</div><br>`;
        Ez._AddLogEntry(tz), Ez._GenerateLimitMessage(nz, zz)
      }
      static get LogCache() {
        return Ez._LogCache
      }
      static ClearLogCache() {
        Ez._LogCache = "", Ez._LogLimitOutputs = {}, Ez.errorsCount = 0
      }
      static set LogLevels(zz) {
        Ez.Log = Ez._LogDisabled, Ez.Warn = Ez._LogDisabled, Ez.Error = Ez._LogDisabled;
        const uz = [Ez.MessageLogLevel, Ez.WarningLogLevel, Ez.ErrorLogLevel];
        for (const bz of uz)
          if ((zz & bz) === bz) {
            const zz = this._Levels[bz];
            Ez[zz.name] = Ez._LogEnabled.bind(Ez, bz)
          }
      }
    }
    Ez.NoneLogLevel = 0, Ez.MessageLogLevel = 1, Ez.WarningLogLevel = 2, Ez.ErrorLogLevel = 4, Ez.AllLogLevel = 7, Ez.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Ez._LogCache = "", Ez._LogLimitOutputs = {}, Ez._Levels = [{}, {
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
    }], Ez.errorsCount = 0, Ez.Log = Ez._LogEnabled.bind(Ez, Ez.MessageLogLevel), Ez.Warn = Ez._LogEnabled.bind(Ez, Ez.WarningLogLevel), Ez.Error = Ez._LogEnabled.bind(Ez, Ez.ErrorLogLevel)
  },
  60313: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      CreateScreenshot: () => qz,
      CreateScreenshotAsync: () => hz,
      CreateScreenshotForFrameGraphAsync: () => Sz,
      CreateScreenshotUsingRenderTarget: () => cz,
      CreateScreenshotUsingRenderTargetAsync: () => gz,
      CreateScreenshotWithResizeAsync: () => Uz,
      RegisterScreenshotTools: () => Wz,
      ScreenshotTools: () => Dz
    });
    var Ez = bz(39636),
      nz = bz(41019),
      iz = bz(41e3),
      lz = bz(39182),
      Mz = bz(41009),
      tz = bz(36543),
      Hz = bz(36519);
    class Oz extends Mz.c {
      static _GetDefines(zz) {
        if (!zz) return null;
        return zz.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
      }
      _gatherImports(zz, uz) {
        zz ? (this._webGPUReady = !0, uz.push(Promise.all([bz.e(367).then((() => bz(60645))), bz.e(368).then((() => bz(60649)))]))) : uz.push(Promise.all([bz.e(369).then((() => bz(60656))), bz.e(370).then((() => bz(60661)))]))
      }
      constructor(zz) {
        const uz = {
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: zz,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || tz.d.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          vertexShader: Oz.VertexUrl,
          fragmentShader: Oz.FragmentUrl,
          uniforms: Oz.Uniforms
        };
        super({
          ...uz,
          defines: Oz._GetDefines(uz.engine)
        }), this.texelSize = new Hz.m(0, 0)
      }
      bind() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.bind(zz), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
      }
    }
    Oz.VertexUrl = "fxaa", Oz.FragmentUrl = "fxaa", Oz.Uniforms = ["texelSize"];
    class pz extends iz.d {
      getClassName() {
        return "FxaaPostProcess"
      }
      constructor(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          nz = arguments.length > 3 ? arguments[3] : void 0,
          iz = arguments.length > 4 ? arguments[4] : void 0,
          lz = arguments.length > 5 ? arguments[5] : void 0,
          Mz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const tz = {
          uniforms: Oz.Uniforms,
          size: "number" === typeof uz ? uz : void 0,
          camera: bz,
          samplingMode: nz || Ez.e.BILINEAR_SAMPLINGMODE,
          engine: iz,
          reusable: lz,
          textureType: Mz,
          ...uz
        };
        super(zz, Oz.FragmentUrl, {
          effectWrapper: "number" !== typeof uz && uz.effectWrapper ? void 0 : new Oz(zz, iz, tz),
          ...tz
        }), this.onApplyObservable.add((zz => {
          this._effectWrapper.texelSize = this.texelSize
        }))
      }
      static _Parse(zz, uz, bz, Ez) {
        return lz.e.Parse((() => new pz(zz.name, zz.options, uz, zz.renderTargetSamplingMode, bz.uR(), zz.reusable)), zz, bz, Ez)
      }
    }
    var dz = bz(38060),
      Fz = bz(39258),
      Zz = bz(41031),
      Rz = bz(41014),
      Kz = bz(39071);
    const wz = 0;
    class Xz {
      constructor(zz, uz, bz) {
        this.name = zz, this._parentTask = uz, this._context = bz, this.disabled = !1
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
    class fz extends Xz {
      static IsObjectListPass(zz) {
        return void 0 !== zz.setObjectList
      }
      get objectList() {
        return this._objectList
      }
      setObjectList(zz) {
        this._objectList = zz
      }
      constructor(zz, uz, bz, Ez) {
        super(zz, uz, bz), this._engine = Ez
      }
      _isValid() {
        const zz = super._isValid();
        return zz || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
      }
    }
    class sz extends Xz {
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
      constructor(zz, uz, bz, Ez) {
        super(zz, uz, bz), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = Ez
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
            for (const uz of zz) this._dependencies.add(uz);
          else this._dependencies.add(zz)
      }
      collectDependencies(zz) {
        const uz = this._dependencies.keys();
        for (let bz = uz.next(); !0 !== bz.done; bz = uz.next()) zz.add(bz.value);
        if (void 0 !== this._renderTarget)
          if (Array.isArray(this._renderTarget))
            for (const bz of this._renderTarget) void 0 !== bz && zz.add(bz);
          else zz.add(this._renderTarget);
        void 0 !== this._renderTargetDepth && zz.add(this._renderTargetDepth)
      }
      setOutputLayerAndFaceIndices(zz) {
        const uz = this.frameGraphRenderTarget.renderTargetWrapper;
        if (uz)
          for (const bz of zz) uz.setLayerAndFaceIndex(bz.targetIndex, bz.layerIndex, bz.faceIndex)
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
    var rz = bz(36547);
    class oz {
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
      constructor(zz, uz) {
        this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new rz.b, this.onBeforeTaskExecute = new rz.b, this.onAfterTaskExecute = new rz.b, this.name = zz, this._frameGraph = uz, this._reset()
      }
      _reset() {
        for (const zz of this._passes) zz._dispose();
        for (const zz of this._passesDisabled) zz._dispose();
        this._passes.length = 0, this._passesDisabled.length = 0
      }
      _addPass(zz, uz) {
        uz ? this._passesDisabled.push(zz) : this._passes.push(zz)
      }
      _checkTask() {
        let zz, uz = null,
          bz = null;
        for (const Mz of this._passes) {
          const Ez = Mz._isValid();
          if (Ez) throw new Error(`Pass "${Mz.name}" is not valid. ${Ez}`);
          if (sz.IsRenderPass(Mz)) {
            const zz = Array.isArray(Mz.renderTarget) ? Mz.renderTarget : [Mz.renderTarget];
            uz = [];
            for (const bz of zz) void 0 !== bz && uz.push(this._frameGraph.textureManager.getTextureFromHandle(bz));
            bz = void 0 !== Mz.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(Mz.renderTargetDepth) : null
          } else fz.IsObjectListPass(Mz) && (zz = Mz.objectList)
        }
        let Ez, nz = null,
          iz = [],
          lz = null;
        for (const Mz of this._passesDisabled) {
          const zz = Mz._isValid();
          if (zz) throw new Error(`Pass "${Mz.name}" is not valid. ${zz}`);
          if (sz.IsRenderPass(Mz)) {
            const zz = Array.isArray(Mz.renderTarget) ? Mz.renderTarget : [Mz.renderTarget];
            nz = [];
            for (const uz of zz) void 0 !== uz && nz.push(this._frameGraph.textureManager.getTextureFromHandle(uz));
            iz = zz, lz = void 0 !== Mz.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(Mz.renderTargetDepth) : null
          } else fz.IsObjectListPass(Mz) && (Ez = Mz.objectList)
        }
        if (this._passesDisabled.length > 0) {
          if (!this._checkSameRenderTarget(uz, nz)) {
            let zz = !0;
            for (const uz of iz)
              if (void 0 !== uz && !this._frameGraph.textureManager.isHistoryTexture(uz)) {
                zz = !1;
                break
              } if (!zz) throw new Error(`The output texture of the task "${this.name}" is different when it is enabled or disabled.`)
          }
          if (bz !== lz && null !== lz) throw new Error(`The output depth texture of the task "${this.name}" is different when it is enabled or disabled.`);
          if (zz !== Ez && null !== Ez) throw new Error(`The output object list of the task "${this.name}" is different when it is enabled or disabled.`)
        }
      }
      _execute() {
        const zz = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
        this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const uz of zz) uz._execute()
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
      _checkSameRenderTarget(zz, uz) {
        if (null === zz || null === uz) return zz === uz;
        if (zz.length !== uz.length) return !1;
        for (let bz = 0; bz < zz.length; bz++)
          if (zz[bz] !== uz[bz]) return !1;
        return !0
      }
    }
    class Nz extends oz {
      get alphaMode() {
        return this.postProcess.alphaMode
      }
      set alphaMode(zz) {
        this.postProcess.alphaMode = zz
      }
      get drawWrapper() {
        return this._postProcessDrawWrapper
      }
      constructor(zz, uz, bz) {
        super(zz, uz), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = bz, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture = this._frameGraph.textureManager.createDanglingHandle(), this.outputDepthAttachmentTexture = this._frameGraph.textureManager.createDanglingHandle()
      }
      isReady() {
        return this.postProcess.isReady()
      }
      getClassName() {
        return "FrameGraphPostProcessTask"
      }
      record() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          uz = arguments.length > 1 ? arguments[1] : void 0,
          bz = arguments.length > 2 ? arguments[2] : void 0;
        if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
        const Ez = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
        if (Ez && (Ez.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, Ez), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentTexture, this.depthAttachmentTexture), Ez) {
          const zz = this._frameGraph.textureManager.getTextureAbsoluteDimensions(Ez);
          this._sourceWidth = zz.width, this._sourceHeight = zz.height
        }
        const nz = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
        this._outputWidth = nz.size.width, this._outputHeight = nz.size.height;
        const iz = this._frameGraph.addRenderPass(this.name);
        if (iz.depthReadOnly = this.depthReadOnly, iz.stencilReadOnly = this.stencilReadOnly, iz.addDependencies(this.sourceTexture), iz.setRenderTarget(this.outputTexture), iz.setRenderTargetDepth(this.depthAttachmentTexture), iz.setExecuteFunc((zz => {
            zz.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && zz.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), uz?.(zz), this.viewport && zz.setViewport(this.viewport), zz.applyFullScreenEffect(this._postProcessDrawWrapper, (() => {
              void 0 !== this.sourceTexture && zz.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), bz?.(zz), this.postProcess.bind()
            }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), zz.restoreDefaultFramebuffer(), zz.popDebugGroup()
          })), !zz) {
          const zz = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
          zz.depthReadOnly = this.depthReadOnly, zz.stencilReadOnly = this.stencilReadOnly, zz.addDependencies(this.sourceTexture), zz.setRenderTarget(this.outputTexture), zz.setRenderTargetDepth(this.depthAttachmentTexture), zz.setExecuteFunc((zz => {
            void 0 !== this.sourceTexture && 0 === this.alphaMode && (this.viewport && zz.setViewport(this.viewport), zz.copyTexture(this.sourceTexture, void 0, void 0 !== this.viewport))
          }))
        }
        return iz
      }
      dispose() {
        this.postProcess.dispose(), super.dispose()
      }
    }
    class vz extends Nz {
      constructor(zz, uz, bz) {
        super(zz, uz, bz || new Oz(zz, uz.engine))
      }
      getClassName() {
        return "FrameGraphFXAATask"
      }
      record() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          uz = arguments.length > 1 ? arguments[1] : void 0,
          bz = arguments.length > 2 ? arguments[2] : void 0;
        const Ez = super.record(zz, uz, bz);
        return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, Ez
      }
    }
    var xz = bz(41027);
    class Jz extends Nz {
      constructor(zz, uz, bz) {
        super(zz, uz, bz || new xz.h(zz, uz.engine))
      }
      getClassName() {
        return "FrameGraphPassTask"
      }
    }
    var Az = bz(39253),
      Tz = bz(39331),
      Lz = bz(39296),
      Pz = bz(39412),
      Gz = bz(36715);
    class az {
      getRenderCamera(zz) {
        if (this._renderCamera) return this._renderCamera;
        {
          let uz;
          return uz = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, zz && uz && uz.isRigCamera ? uz.rigParent : uz
        }
      }
      setRenderCamera(zz) {
        this._renderCamera = zz
      }
      _getSharedGizmoLight() {
        return this._sharedGizmoLight || (this._sharedGizmoLight = new Pz.c("shared gizmo light", new Hz.n(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = Gz.c.Gray()), this._sharedGizmoLight
      }
      static get DefaultUtilityLayer() {
        return null == az._DefaultUtilityLayer ? az._CreateDefaultUtilityLayerFromScene(tz.d.LastCreatedScene) : az._DefaultUtilityLayer
      }
      static _CreateDefaultUtilityLayerFromScene(zz) {
        return az._DefaultUtilityLayer = new az(zz), az._DefaultUtilityLayer.originalScene.aT.addOnce((() => {
          az._DefaultUtilityLayer = null
        })), az._DefaultUtilityLayer
      }
      static get DefaultKeepDepthUtilityLayer() {
        return null == az._DefaultKeepDepthUtilityLayer ? az._CreateDefaultKeepUtilityLayerFromScene(tz.d.LastCreatedScene) : az._DefaultKeepDepthUtilityLayer
      }
      static _CreateDefaultKeepUtilityLayerFromScene(zz) {
        return az._DefaultKeepDepthUtilityLayer = new az(zz), az._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, az._DefaultKeepDepthUtilityLayer.originalScene.aT.addOnce((() => {
          az._DefaultKeepDepthUtilityLayer = null
        })), az._DefaultKeepDepthUtilityLayer
      }
      constructor(zz) {
        let uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.originalScene = zz, this.handleEvents = uz, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.processAllEvents = !1, this.pickingEnabled = !0, this.onPointerOutObservable = new rz.b, this.utilityLayerScene = new Az.e(zz.uR(), {
          virtual: !0,
          useFloatingOrigin: zz.floatingOriginMode
        }), this.utilityLayerScene.useRightHandedSystem = zz.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), uz && (this._originalPointerObserver = zz.onPrePointerObservable.add((uz => {
          if (!this.utilityLayerScene.activeCamera) return;
          if (!this.pickingEnabled) return;
          if (!this.processAllEvents && uz.type !== Tz.c.POINTERMOVE && uz.type !== Tz.c.POINTERUP && uz.type !== Tz.c.POINTERDOWN && uz.type !== Tz.c.POINTERDOUBLETAP) return;
          this.utilityLayerScene.pointerX = zz.pointerX, this.utilityLayerScene.pointerY = zz.pointerY;
          const bz = uz.event;
          if (zz.isPointerCaptured(bz.pointerId)) return void(this._pointerCaptures[bz.pointerId] = !1);
          const Ez = bz => {
              let Ez;
              if (uz.nearInteractionPickingInfo) Ez = uz.nearInteractionPickingInfo.pickedMesh.XT() == bz ? uz.nearInteractionPickingInfo : new Lz.c;
              else if (bz !== this.utilityLayerScene && uz.originalPickingInfo) Ez = uz.originalPickingInfo;
              else {
                let nz = null;
                this._renderCamera && (nz = bz._activeCamera, bz._activeCamera = this._renderCamera, uz.ray = null), Ez = uz.ray ? bz.pickWithRay(uz.ray) : bz.NF(zz.pointerX, zz.pointerY), nz && (bz._activeCamera = nz)
              }
              return Ez
            },
            nz = Ez(this.utilityLayerScene);
          if (!uz.ray && nz && (uz.ray = nz.ray), uz.originalPickingInfo?.aimTransform && nz && (nz.aimTransform = uz.originalPickingInfo.aimTransform, nz.gripTransform = uz.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(uz), this.onlyCheckPointerDownEvents && uz.type != Tz.c.POINTERDOWN) return uz.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new Tz.i(uz.type, uz.event, nz), uz.type), void(uz.type === Tz.c.POINTERUP && this._pointerCaptures[bz.pointerId] && (this._pointerCaptures[bz.pointerId] = !1));
          if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) nz && nz.hit && (uz.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new Tz.i(uz.type, uz.event, nz), uz.type), uz.skipOnPointerObservable = !0);
          else {
            const bz = Ez(zz),
              iz = uz.event;
            bz && nz && (0 === nz.distance && bz.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(bz.pickedMesh) ? (this._notifyObservers(uz, bz, iz), uz.skipOnPointerObservable = !0) : uz.type === Tz.c.POINTERDOWN ? (this._pointerCaptures[iz.pointerId] = !0, this._notifyObservers(uz, bz, iz)) : uz.type !== Tz.c.POINTERMOVE && uz.type !== Tz.c.POINTERUP || (this._lastPointerEvents[iz.pointerId] && (this.onPointerOutObservable.notifyObservers(iz.pointerId), delete this._lastPointerEvents[iz.pointerId]), this._notifyObservers(uz, bz, iz)) : !this._pointerCaptures[iz.pointerId] && (nz.distance < bz.distance || 0 === bz.distance) ? (this._notifyObservers(uz, nz, iz), uz.skipOnPointerObservable || (uz.skipOnPointerObservable = nz.distance > 0)) : !this._pointerCaptures[iz.pointerId] && nz.distance >= bz.distance && (this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(bz.pickedMesh) ? (this._notifyObservers(uz, bz, iz), uz.skipOnPointerObservable = !0) : (uz.type !== Tz.c.POINTERMOVE && uz.type !== Tz.c.POINTERUP || this._lastPointerEvents[iz.pointerId] && (this.onPointerOutObservable.notifyObservers(iz.pointerId), delete this._lastPointerEvents[iz.pointerId]), this._notifyObservers(uz, nz, iz))), uz.type === Tz.c.POINTERUP && this._pointerCaptures[iz.pointerId] && (this._pointerCaptures[iz.pointerId] = !1))
          }
        })), this._originalPointerObserver && zz.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, bz || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((zz => {
          this.shouldRender && zz == this.getRenderCamera() && this.render()
        }))), this._sceneDisposeObserver = this.originalScene.aT.add((() => {
          this.dispose()
        })), this._updateCamera()
      }
      _notifyObservers(zz, uz, bz) {
        zz.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new Tz.i(zz.type, zz.event, uz), zz.type), this._lastPointerEvents[bz.pointerId] = !0)
      }
      render() {
        if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
          const zz = this.utilityLayerScene.activeCamera.XT(),
            uz = this.utilityLayerScene.activeCamera;
          uz._scene = this.utilityLayerScene, uz.leftCamera && (uz.leftCamera._scene = this.utilityLayerScene), uz.rightCamera && (uz.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), uz._scene = zz, uz.leftCamera && (uz.leftCamera._scene = zz), uz.rightCamera && (uz.rightCamera._scene = zz)
        }
      }
      dispose() {
        this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.aT.remove(this._sceneDisposeObserver), this._originalPointerObserver && this.originalScene.onPrePointerObservable.remove(this._originalPointerObserver), this.utilityLayerScene.dispose()
      }
      _updateCamera() {
        this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
      }
    }
    az._DefaultUtilityLayer = null, az._DefaultKeepDepthUtilityLayer = null;
    const Vz = {
      FindMainCamera: function(zz) {
        return zz.findMainCamera()
      },
      FindMainObjectRenderer: function(zz) {
        return zz.findMainObjectRenderer()
      },
      CreateUtilityLayerRenderer: function(zz) {
        let uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const bz = zz.tK,
          Ez = new az(bz, uz, !0);
        Ez.utilityLayerScene.activeCamera = bz.activeCamera;
        let nz = Vz.FindMainCamera(bz.frameGraph);
        !nz && bz.cameras.length > 0 && (nz = bz.cameras[0]), nz && (Ez.setRenderCamera(nz), Ez.utilityLayerScene.activeCamera = nz);
        const iz = bz.onAfterRenderObservable.add((() => {
          Ez.render()
        }));
        return Ez.utilityLayerScene.aT.addOnce((() => {
          bz.onAfterRenderObservable.remove(iz)
        })), Ez
      }
    };
    let mz = null;

    function qz(zz, uz, bz, Ez) {
      let nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        iz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        lz = arguments.length > 6 ? arguments[6] : void 0,
        Mz = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        tz = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
      const {
        height: Hz,
        width: Oz
      } = yz(zz, uz, bz);
      if (!Hz || !Oz) return void dz.e.Error("Invalid 'size' parameter !");
      const pz = uz.XT();
      let Zz = pz.activeCamera !== uz;
      if (pz.frameGraph) {
        const zz = Vz.FindMainObjectRenderer(pz.frameGraph);
        zz && (Zz = zz.camera !== uz)
      }
      Zz ? cz(zz, uz, bz, (zz => {
        if (iz) {
          const uz = new Blob([zz]);
          Fz.h.DownloadBlob(uz), Ez && Ez("")
        } else Ez && Ez(zz)
      }), nz, 1, zz.getCreationOptions().antialias, void 0, void 0, void 0, void 0, lz) : zz.onEndFrameObservable.addOnce((() => {
        mz || (mz = document.createElement("canvas")), mz.width = Oz, mz.height = Hz;
        const uz = mz.getContext("2d"),
          bz = zz.getRenderingCanvas();
        if (!uz || !bz) return void dz.e.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
        const Zz = bz.width,
          Rz = bz.height,
          Kz = mz.width,
          wz = mz.height,
          Xz = Kz / Zz,
          fz = wz / Rz,
          sz = Mz ? Math.max(Xz, fz) : Math.min(Xz, fz),
          rz = Zz * sz,
          oz = Rz * sz,
          Nz = (Kz - rz) / 2,
          vz = (wz - oz) / 2;
        uz.save(), uz.fillStyle = tz ? pz.clearColor.toHexString() : "rgba(0, 0, 0, 0)", uz.fillRect(0, 0, Oz, Hz), uz.restore(), uz.drawImage(bz, 0, 0, Zz, Rz, Nz, vz, rz, oz), iz ? (Fz.h.EncodeScreenshotCanvasData(mz, void 0, nz, void 0, lz), Ez && Ez("")) : Fz.h.EncodeScreenshotCanvasData(mz, Ez, nz, void 0, lz)
      }))
    }
    async function hz(zz, uz, bz) {
      let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        nz = arguments.length > 4 ? arguments[4] : void 0,
        iz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        lz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Mz = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      return await new Promise(((tz, Hz) => {
        qz(zz, uz, bz, (zz => {
          "undefined" !== typeof zz ? tz(zz) : Hz(new Error("Data is undefined"))
        }), Ez, Mz, nz, iz, lz)
      }))
    }
    async function Uz(zz, uz, bz, Ez) {
      let nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        iz = arguments.length > 5 ? arguments[5] : void 0,
        lz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return await new Promise((Mz => {
        qz(zz, uz, {
          width: bz,
          height: Ez
        }, (() => {
          Mz()
        }), nz, !0, iz, lz)
      }))
    }

    function cz(zz, uz, iz, lz) {
      let Mz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        tz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
        Hz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        Oz = arguments.length > 7 ? arguments[7] : void 0,
        Fz = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        wz = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        Xz = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
        fz = arguments.length > 11 ? arguments[11] : void 0,
        sz = arguments.length > 12 ? arguments[12] : void 0,
        rz = arguments.length > 13 ? arguments[13] : void 0,
        oz = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
        Nz = arguments.length > 15 ? arguments[15] : void 0;
      const vz = uz.XT();
      if (vz.frameGraph) return void Sz(vz.frameGraph, uz, iz, Mz, tz, Hz, Oz, fz, rz, !lz).then((zz => {
        lz && lz(zz)
      }));
      const {
        height: xz,
        width: Jz,
        finalWidth: Az,
        finalHeight: Tz
      } = yz(zz, uz, iz), Lz = {
        width: Jz,
        height: xz
      };
      if (!xz || !Jz) return void dz.e.Error("Invalid 'size' parameter !");
      zz.skipFrameRender = !0;
      const Pz = zz.getRenderWidth,
        Gz = zz.getRenderHeight;
      zz.getRenderWidth = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && zz._currentRenderTarget ? zz._currentRenderTarget.width : Jz
      }, zz.getRenderHeight = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && zz._currentRenderTarget ? zz._currentRenderTarget.height : xz
      }, zz.onResizeObservable.hasObservers() && zz.onResizeObservable.notifyObservers(zz);
      const az = new nz.e("screenShot", Lz, vz, !1, !1, 0, !1, Ez.e.BILINEAR_SAMPLINGMODE, void 0, wz, void 0, void 0, void 0, tz);
      az.renderList = vz.meshes.slice(), az.samples = tz, az.renderSprites = Fz, az.activeCamera = uz, az.forceLayerMaskCheck = Xz, sz?.(az);
      const Vz = rz || Zz.DumpData,
        mz = () => {
          vz.incrementRenderId(), vz.resetCachedMaterial(), (0, Kz.g)((() => az.isReadyForRendering() && uz.isReady(!0)), (() => {
            zz.onEndFrameObservable.addOnce((() => {
              Az === Jz && Tz === xz ? az.readPixels(void 0, void 0, void 0, !1).then((zz => {
                Vz(Jz, xz, zz, lz, Mz, Oz, !0, void 0, fz), az.dispose()
              })) : (zz.isWebGPU ? bz.e(363).then((() => bz(60594))) : bz.e(364).then((() => bz(60596)))).then((async () => await (0, Rz.c)("pass", az.getInternalTexture(), vz, void 0, void 0, void 0, Az, Tz).then((uz => {
                zz._readTexturePixels(uz, Az, Tz, -1, 0, null, !0, !1, 0, 0).then((zz => {
                  Vz(Az, Tz, zz, lz, Mz, Oz, !0, void 0, fz), uz.dispose()
                }))
              }))))
            })), vz.incrementRenderId(), vz.resetCachedMaterial();
            const Ez = vz.activeCamera,
              nz = vz.activeCameras,
              iz = uz.outputRenderTarget,
              tz = vz.spritesEnabled;
            vz.activeCamera = uz, vz.activeCameras = null, uz.outputRenderTarget = az, vz.spritesEnabled = Fz;
            const Hz = vz.meshes;
            vz.meshes = az.renderList || vz.meshes;
            try {
              vz.render()
            } finally {
              vz.activeCamera = Ez, vz.activeCameras = nz, uz.outputRenderTarget = iz, vz.spritesEnabled = tz, vz.meshes = Hz, zz.getRenderWidth = Pz, zz.getRenderHeight = Gz, zz.onResizeObservable.hasObservers() && zz.onResizeObservable.notifyObservers(zz), uz.getProjectionMatrix(!0), zz.skipFrameRender = !1
            }
          }), (() => {
            zz.skipFrameRender = !1, zz.getRenderWidth = Pz, zz.getRenderHeight = Gz, Nz?.()
          }), void 0, oz)
        };
      if (Hz) {
        const zz = new pz("antialiasing", 1, vz.activeCamera);
        az.addPostProcess(zz), zz.autoClear = !0, zz.onEffectCreatedObservable.addOnce((zz => {
          zz.isReady() ? mz() : zz.onCompiled = () => {
            mz()
          }
        }))
      } else mz()
    }
    async function gz(zz, uz, bz) {
      let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        iz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        lz = arguments.length > 6 ? arguments[6] : void 0,
        Mz = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        tz = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        Hz = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
        Oz = arguments.length > 10 ? arguments[10] : void 0,
        pz = arguments.length > 11 ? arguments[11] : void 0,
        dz = arguments.length > 12 ? arguments[12] : void 0;
      return await new Promise(((Fz, Zz) => {
        cz(zz, uz, bz, (zz => {
          "undefined" !== typeof zz ? Fz(zz) : Zz(new Error("Data is undefined"))
        }), Ez, nz, iz, lz, Mz, tz, Hz, Oz, pz, dz)
      }))
    }
    async function Sz(zz, uz, bz) {
      let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        iz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        lz = arguments.length > 6 ? arguments[6] : void 0,
        Mz = arguments.length > 7 ? arguments[7] : void 0,
        tz = arguments.length > 8 ? arguments[8] : void 0,
        Hz = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        Oz = arguments.length > 10 ? arguments[10] : void 0;
      const pz = zz.engine,
        dz = zz.textureManager,
        {
          height: Fz,
          width: Rz,
          finalWidth: Kz,
          finalHeight: Xz
        } = yz(pz, uz, bz),
        fz = {
          width: Rz,
          height: Fz
        },
        sz = tz || Zz.DumpData,
        rz = zz.tasks,
        oz = rz.length,
        Nz = zz.pausedExecution,
        xz = pz.getCaps().parallelShaderCompile;
      dz.setBackBufferTextures(0, 0, {
        size: fz,
        options: {
          createMipMaps: !1,
          samples: nz,
          types: [0],
          formats: [5],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot color"]
        },
        sizeIsPercentage: !1
      }, {
        size: fz,
        options: {
          createMipMaps: !1,
          samples: nz,
          types: [0],
          formats: [pz.isStencilEnable ? 13 : 14],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot depth"]
        },
        sizeIsPercentage: !1
      });
      let Az = wz;
      if (iz) {
        const uz = new vz("fxaa", zz);
        uz.sourceTexture = Az, Az = uz.outputTexture, zz.addTask(uz)
      }
      if (Kz !== Rz || Xz !== Fz) {
        const uz = new Jz("pass", zz);
        uz.sourceTexture = Az, uz.targetTexture = zz.textureManager.createRenderTargetTexture("pass_output", {
          size: {
            width: Kz,
            height: Xz
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
        }), Az = uz.outputTexture, zz.addTask(uz)
      }
      const Tz = Vz.FindMainObjectRenderer(zz);
      let Lz = null;
      Tz && (Lz = Tz.camera, Tz.camera = uz), pz.getCaps().parallelShaderCompile = void 0, await zz.buildAsync();
      const Pz = Oz ?? (dz.hasHistoryTextures ? 32 : 1);
      for (let Zz = 0; Zz < Pz; ++Zz) zz.execute();
      zz.pausedExecution = !0, pz.getCaps().parallelShaderCompile = xz;
      for (let Zz = oz; Zz < rz.length; ++Zz) zz.tasks[Zz].dispose();
      zz.tasks.length = oz, Tz && Lz && (Tz.camera = Lz);
      const Gz = zz.textureManager.getTextureFromHandle(Az);
      return Gz.incrementReferences(), dz.resetBackBufferTextures(), await zz.buildAsync(), zz.pausedExecution = Nz, new Promise((zz => {
        pz._readTexturePixels(Gz, Kz, Xz, -1, 0, null, !0, !1, 0, 0).then((async uz => {
          Gz.dispose(), sz(Kz, Xz, uz, Hz ? void 0 : uz => zz(uz), Ez, lz, !0, void 0, Mz), Hz && zz(null)
        }))
      }))
    }

    function yz(zz, uz, bz) {
      let Ez = 0,
        nz = 0,
        iz = 0,
        lz = 0;
      if ("object" === typeof bz) {
        const Mz = bz.precision ? Math.abs(bz.precision) : 1;
        bz.width && bz.height ? (Ez = bz.height * Mz, nz = bz.width * Mz) : bz.width && !bz.height ? (nz = bz.width * Mz, Ez = Math.round(nz / zz.getAspectRatio(uz))) : bz.height && !bz.width ? (Ez = bz.height * Mz, nz = Math.round(Ez * zz.getAspectRatio(uz))) : (nz = Math.round(zz.getRenderWidth() * Mz), Ez = Math.round(nz / zz.getAspectRatio(uz))), bz.finalWidth && bz.finalHeight ? (lz = bz.finalHeight, iz = bz.finalWidth) : bz.finalWidth && !bz.finalHeight ? (iz = bz.finalWidth, lz = Math.round(iz / zz.getAspectRatio(uz))) : bz.finalHeight && !bz.finalWidth ? (lz = bz.finalHeight, iz = Math.round(lz * zz.getAspectRatio(uz))) : (iz = nz, lz = Ez)
      } else isNaN(bz) || (Ez = bz, nz = bz, iz = bz, lz = bz);
      return nz && (nz = Math.floor(nz)), Ez && (Ez = Math.floor(Ez)), iz && (iz = Math.floor(iz)), lz && (lz = Math.floor(lz)), {
        height: 0 | Ez,
        width: 0 | nz,
        finalWidth: 0 | iz,
        finalHeight: 0 | lz
      }
    }
    const Dz = {
      CreateScreenshot: qz,
      CreateScreenshotAsync: hz,
      CreateScreenshotWithResizeAsync: Uz,
      CreateScreenshotUsingRenderTarget: cz,
      CreateScreenshotUsingRenderTargetAsync: gz,
      CreateScreenshotForFrameGraphAsync: Sz
    };
    let Qz = !1;

    function Wz() {
      if (Qz) return;
      Qz = !0;
      Fz.h.CreateScreenshot = qz, Fz.h.CreateScreenshotAsync = hz, Fz.h.CreateScreenshotUsingRenderTarget = cz, Fz.h.CreateScreenshotUsingRenderTargetAsync = gz
    }
    Wz()
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);