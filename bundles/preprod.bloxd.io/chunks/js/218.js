export const id = 218;
export const ids = [218, 219];
export const modules = {
  38740: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => By,
      g: () => ey
    });
    var Uy = Wy(38464),
      hy = Wy(38466),
      fy = Wy(35861),
      Zy = Wy(35919),
      cb = Wy(38742),
      Py = Wy(38697),
      oy = Wy(35909);
    let By = (() => {
        var yb;
        let bb, Wy, Py = cb.d,
          oy = [],
          By = [],
          Ky = [],
          ey = [];
        return yb = class extends Py {
          constructor(yb, bb, Wy, hy) {
            super(yb, Wy, hy), this.groundColor = (0, Uy.l)(this, oy, new Zy.d(0, 0, 0)), this.direction = ((0, Uy.l)(this, By), (0, Uy.l)(this, Ky, void 0)), (0, Uy.l)(this, ey), this.direction = bb || fy.n.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(yb) {
            return this.direction = fy.n.Normalize(yb.subtract(fy.n.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(yb, bb) {
            const Wy = fy.n.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", Wy.x, Wy.y, Wy.z, 0, bb), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), bb), this
          }
          transferToNodeMaterialEffect(yb, bb) {
            const Wy = fy.n.Normalize(this.direction);
            return yb.setFloat3(bb, Wy.x, Wy.y, Wy.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = fy.c.Identity()), this._worldMatrix
          }
          getTypeID() {
            return cb.d.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(yb, bb) {
            yb["HEMILIGHT" + bb] = !0
          }
        }, (() => {
          const fy = "function" === typeof Symbol && Symbol.metadata ? Object.create(Py[Symbol.metadata] ?? null) : void 0;
          bb = [(0, hy.q)()], Wy = [(0, hy.P)()], (0, Uy.j)(null, null, bb, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: yb => "groundColor" in yb,
              get: yb => yb.groundColor,
              set: (yb, bb) => {
                yb.groundColor = bb
              }
            },
            metadata: fy
          }, oy, By), (0, Uy.j)(null, null, Wy, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: yb => "direction" in yb,
              get: yb => yb.direction,
              set: (yb, bb) => {
                yb.direction = bb
              }
            },
            metadata: fy
          }, Ky, ey), fy && Object.defineProperty(yb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: fy
          })
        })(), yb
      })(),
      Ky = !1;

    function ey() {
      Ky || (Ky = !0, Py.b.AddNodeConstructor("Light_Type_3", ((yb, bb) => () => new By(yb, fy.n.Zero(), bb))), (0, oy.e)("BABYLON.HemisphericLight", By))
    }
  },
  36425: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => hy
    });
    var Uy = Wy(36434);
    class hy {
      static GetPlanes(yb) {
        const bb = [];
        for (let Wy = 0; Wy < 6; Wy++) bb.push(new Uy.c(0, 0, 0, 0));
        return hy.GetPlanesToRef(yb, bb), bb
      }
      static GetNearPlaneToRef(yb, bb) {
        const Wy = yb.m;
        bb.normal.x = Wy[3] + Wy[2], bb.normal.y = Wy[7] + Wy[6], bb.normal.z = Wy[11] + Wy[10], bb.d = Wy[15] + Wy[14], bb.normalize()
      }
      static GetFarPlaneToRef(yb, bb) {
        const Wy = yb.m;
        bb.normal.x = Wy[3] - Wy[2], bb.normal.y = Wy[7] - Wy[6], bb.normal.z = Wy[11] - Wy[10], bb.d = Wy[15] - Wy[14], bb.normalize()
      }
      static GetLeftPlaneToRef(yb, bb) {
        const Wy = yb.m;
        bb.normal.x = Wy[3] + Wy[0], bb.normal.y = Wy[7] + Wy[4], bb.normal.z = Wy[11] + Wy[8], bb.d = Wy[15] + Wy[12], bb.normalize()
      }
      static GetRightPlaneToRef(yb, bb) {
        const Wy = yb.m;
        bb.normal.x = Wy[3] - Wy[0], bb.normal.y = Wy[7] - Wy[4], bb.normal.z = Wy[11] - Wy[8], bb.d = Wy[15] - Wy[12], bb.normalize()
      }
      static GetTopPlaneToRef(yb, bb) {
        const Wy = yb.m;
        bb.normal.x = Wy[3] - Wy[1], bb.normal.y = Wy[7] - Wy[5], bb.normal.z = Wy[11] - Wy[9], bb.d = Wy[15] - Wy[13], bb.normalize()
      }
      static GetBottomPlaneToRef(yb, bb) {
        const Wy = yb.m;
        bb.normal.x = Wy[3] + Wy[1], bb.normal.y = Wy[7] + Wy[5], bb.normal.z = Wy[11] + Wy[9], bb.d = Wy[15] + Wy[13], bb.normalize()
      }
      static GetPlanesToRef(yb, bb) {
        hy.GetNearPlaneToRef(yb, bb[0]), hy.GetFarPlaneToRef(yb, bb[1]), hy.GetLeftPlaneToRef(yb, bb[2]), hy.GetRightPlaneToRef(yb, bb[3]), hy.GetTopPlaneToRef(yb, bb[4]), hy.GetBottomPlaneToRef(yb, bb[5])
      }
      static IsPointInFrustum(yb, bb) {
        for (let Wy = 0; Wy < 6; Wy++)
          if (bb[Wy].dotCoordinate(yb) < 0) return !1;
        return !0
      }
    }
  },
  36434: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => hy
    });
    var Uy = Wy(35861);
    class hy {
      constructor(yb, bb, Wy, hy) {
        this.normal = new Uy.n(yb, bb, Wy), this.d = hy
      }
      hBy() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new hy(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let yb = this.normal.getHashCode();
        return yb = 397 * yb ^ this.d, yb
      }
      normalize() {
        const yb = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let bb = 0;
        return 0 !== yb && (bb = 1 / yb), this.normal.x *= bb, this.normal.y *= bb, this.normal.z *= bb, this.d *= bb, this
      }
      transform(yb) {
        const bb = hy._TmpMatrix;
        yb.invertToRef(bb);
        const Wy = bb.m,
          Uy = this.normal.x,
          fy = this.normal.y,
          Zy = this.normal.z,
          cb = this.d,
          Py = Uy * Wy[0] + fy * Wy[1] + Zy * Wy[2] + cb * Wy[3],
          oy = Uy * Wy[4] + fy * Wy[5] + Zy * Wy[6] + cb * Wy[7],
          By = Uy * Wy[8] + fy * Wy[9] + Zy * Wy[10] + cb * Wy[11],
          Ky = Uy * Wy[12] + fy * Wy[13] + Zy * Wy[14] + cb * Wy[15];
        return new hy(Py, oy, By, Ky)
      }
      dotCoordinate(yb) {
        return this.normal.x * yb.x + this.normal.y * yb.y + this.normal.z * yb.z + this.d
      }
      copyFromPoints(yb, bb, Wy) {
        const Uy = bb.x - yb.x,
          hy = bb.y - yb.y,
          fy = bb.z - yb.z,
          Zy = Wy.x - yb.x,
          cb = Wy.y - yb.y,
          Py = Wy.z - yb.z,
          oy = hy * Py - fy * cb,
          By = fy * Zy - Uy * Py,
          Ky = Uy * cb - hy * Zy,
          ey = Math.sqrt(oy * oy + By * By + Ky * Ky);
        let qb;
        return qb = 0 !== ey ? 1 / ey : 0, this.normal.x = oy * qb, this.normal.y = By * qb, this.normal.z = Ky * qb, this.d = -(this.normal.x * yb.x + this.normal.y * yb.y + this.normal.z * yb.z), this
      }
      isFrontFacingTo(yb, bb) {
        return Uy.n.Dot(this.normal, yb) <= bb
      }
      signedDistanceTo(yb) {
        return Uy.n.Dot(yb, this.normal) + this.d
      }
      static FromArray(yb) {
        return new hy(yb[0], yb[1], yb[2], yb[3])
      }
      static FromPoints(yb, bb, Wy) {
        const Uy = new hy(0, 0, 0, 0);
        return Uy.copyFromPoints(yb, bb, Wy), Uy
      }
      static FromPositionAndNormal(yb, bb) {
        const Wy = new hy(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(yb, bb, Wy)
      }
      static FromPositionAndNormalToRef(yb, bb, Wy) {
        return Wy.normal.Coy(bb), Wy.normal.normalize(), Wy.d = -yb.dot(Wy.normal), Wy
      }
      static SignedDistanceToPlaneFromPositionAndNormal(yb, bb, Wy) {
        const hy = -(bb.x * yb.x + bb.y * yb.y + bb.z * yb.z);
        return Uy.n.Dot(Wy, bb) + hy
      }
    }
    hy._TmpMatrix = Uy.c.Identity()
  },
  36794: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Uy
    });
    class Uy {
      constructor(yb, bb, Wy, Uy) {
        this.x = yb, this.y = bb, this.width = Wy, this.height = Uy
      }
      toGlobal(yb, bb) {
        return new Uy(this.x * yb, this.y * bb, this.width * yb, this.height * bb)
      }
      toGlobalToRef(yb, bb, Wy) {
        return Wy.x = this.x * yb, Wy.y = this.y * bb, Wy.width = this.width * yb, Wy.height = this.height * bb, this
      }
      clone() {
        return new Uy(this.x, this.y, this.width, this.height)
      }
    }
  },
  37346: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => fy
    });
    var Uy = Wy(37350);
    const hy = (yb, bb, Wy) => yb ? yb.getClassName && "Mesh" === yb.getClassName() ? null : !yb.getClassName || "SubMesh" !== yb.getClassName() && "PhysicsBody" !== yb.getClassName() ? yb.clone ? yb.clone() : Array.isArray(yb) ? yb.slice() : Wy && "object" === typeof yb ? {
      ...yb
    } : null : yb.clone(bb) : null;
    class fy {
      static DeepCopy(yb, bb, Wy, fy) {
        let Zy = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const cb = function(yb) {
          const bb = [];
          do {
            const Wy = Object.getOwnPropertyNames(yb);
            for (const yb of Wy) - 1 === bb.indexOf(yb) && bb.push(yb)
          } while (yb = Object.getPrototypeOf(yb));
          return bb
        }(yb);
        for (const oy of cb) {
          if ("_" === oy[0] && (!fy || -1 === fy.indexOf(oy))) continue;
          if (oy.endsWith("Observable")) continue;
          if (Wy && -1 !== Wy.indexOf(oy)) continue;
          const cb = yb[oy],
            By = typeof cb;
          if ("function" !== By) try {
            if ("object" === By)
              if (cb instanceof Uint8Array) bb[oy] = Uint8Array.from(cb);
              else if (cb instanceof Array) {
              if (bb[oy] = [], cb.length > 0)
                if ("object" == typeof cb[0])
                  for (let yb = 0; yb < cb.length; yb++) {
                    const Wy = hy(cb[yb], bb, Zy); - 1 === bb[oy].indexOf(Wy) && bb[oy].push(Wy)
                  } else bb[oy] = cb.slice(0)
            } else bb[oy] = hy(cb, bb, Zy);
            else bb[oy] = cb
          } catch (Py) {
            Uy.b.Warn(Py.message)
          }
        }
      }
    }
  },
  36559: (yb, bb, Wy) => {
    function Uy() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (yb => {
        const bb = 16 * Math.random() | 0;
        return ("x" === yb ? bb : 3 & bb | 8).toString(16)
      }))
    }
    Wy.d(bb, {
      e: () => Uy
    })
  },
  37350: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Uy
    });
    class Uy {
      static _CheckLimit(yb, bb) {
        let Wy = Uy._LogLimitOutputs[yb];
        return Wy ? Wy.current++ : (Wy = {
          limit: bb,
          current: 1
        }, Uy._LogLimitOutputs[yb] = Wy), Wy.current <= Wy.limit
      }
      static _GenerateLimitMessage(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const Wy = Uy._LogLimitOutputs[yb];
        if (!Wy || !Uy.MessageLimitReached) return;
        const hy = this._Levels[bb];
        Wy.current === Wy.limit && Uy[hy.name](Uy.MessageLimitReached.replace(/%LIMIT%/g, "" + Wy.limit).replace(/%TYPE%/g, hy.name ?? ""))
      }
      static _AddLogEntry(yb) {
        Uy._LogCache = yb + Uy._LogCache, Uy.OnNewCacheEntry && Uy.OnNewCacheEntry(yb)
      }
      static _FormatMessage(yb) {
        const bb = yb => yb < 10 ? "0" + yb : "" + yb,
          Wy = new Date;
        return "[" + bb(Wy.getHours()) + ":" + bb(Wy.getMinutes()) + ":" + bb(Wy.getSeconds()) + "]: " + yb
      }
      static _LogDisabled(yb, bb) {}
      static _LogEnabled() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          bb = arguments.length > 1 ? arguments[1] : void 0,
          Wy = arguments.length > 2 ? arguments[2] : void 0;
        const hy = Array.isArray(bb) ? bb[0] : bb;
        if (void 0 !== Wy && !Uy._CheckLimit(hy, Wy)) return;
        const fy = Uy._FormatMessage(hy),
          Zy = this._Levels[yb],
          cb = Array.isArray(bb) ? bb.slice(1) : [];
        Zy.logFunc && Zy.logFunc("BJS - " + fy, ...cb);
        const Py = `<div style='color:${Zy.color}'>${fy}</div><br>`;
        Uy._AddLogEntry(Py), Uy._GenerateLimitMessage(hy, yb)
      }
      static get LogCache() {
        return Uy._LogCache
      }
      static ClearLogCache() {
        Uy._LogCache = "", Uy._LogLimitOutputs = {}, Uy.errorsCount = 0
      }
      static set LogLevels(yb) {
        Uy.Log = Uy._LogDisabled, Uy.Warn = Uy._LogDisabled, Uy.Error = Uy._LogDisabled;
        const bb = [Uy.MessageLogLevel, Uy.WarningLogLevel, Uy.ErrorLogLevel];
        for (const Wy of bb)
          if ((yb & Wy) === Wy) {
            const yb = this._Levels[Wy];
            Uy[yb.name] = Uy._LogEnabled.bind(Uy, Wy)
          }
      }
    }
    Uy.NoneLogLevel = 0, Uy.MessageLogLevel = 1, Uy.WarningLogLevel = 2, Uy.ErrorLogLevel = 4, Uy.AllLogLevel = 7, Uy.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Uy._LogCache = "", Uy._LogLimitOutputs = {}, Uy._Levels = [{}, {
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
    }], Uy.errorsCount = 0, Uy.Log = Uy._LogEnabled.bind(Uy, Uy.MessageLogLevel), Uy.Warn = Uy._LogEnabled.bind(Uy, Uy.WarningLogLevel), Uy.Error = Uy._LogEnabled.bind(Uy, Uy.ErrorLogLevel)
  },
  59680: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      CreateScreenshot: () => Hy,
      CreateScreenshotAsync: () => ab,
      CreateScreenshotForFrameGraphAsync: () => Qy,
      CreateScreenshotUsingRenderTarget: () => py,
      CreateScreenshotUsingRenderTargetAsync: () => Ly,
      CreateScreenshotWithResizeAsync: () => Fy,
      RegisterScreenshotTools: () => wy,
      ScreenshotTools: () => Dy
    });
    var Uy = Wy(38989),
      hy = Wy(40299),
      fy = Wy(40273),
      Zy = Wy(38485),
      cb = Wy(40281),
      Py = Wy(35886),
      oy = Wy(35861);
    class By extends cb.d {
      static _GetDefines(yb) {
        if (!yb) return null;
        return yb.extractDriverInfo().toLowerCase().indexOf("mali") > -1 ? "#define MALI 1\n" : null
      }
      _gatherImports(yb, bb) {
        yb ? (this._webGPUReady = !0, bb.push(Promise.all([Wy.e(355).then((() => Wy(60054))), Wy.e(356).then((() => Wy(60060)))]))) : bb.push(Promise.all([Wy.e(357).then((() => Wy(60066))), Wy.e(358).then((() => Wy(60071)))]))
      }
      constructor(yb) {
        const bb = {
          ...arguments.length > 2 ? arguments[2] : void 0,
          name: yb,
          engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || Py.c.LastCreatedEngine,
          useShaderStore: !0,
          useAsPostProcess: !0,
          vertexShader: By.VertexUrl,
          fragmentShader: By.FragmentUrl,
          uniforms: By.Uniforms
        };
        super({
          ...bb,
          defines: By._GetDefines(bb.engine)
        }), this.texelSize = new oy.m(0, 0)
      }
      bind() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.bind(yb), this._drawWrapper.effect.setFloat2("texelSize", this.texelSize.x, this.texelSize.y)
      }
    }
    By.VertexUrl = "fxaa", By.FragmentUrl = "fxaa", By.Uniforms = ["texelSize"];
    class Ky extends fy.c {
      getClassName() {
        return "FxaaPostProcess"
      }
      constructor(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          hy = arguments.length > 3 ? arguments[3] : void 0,
          fy = arguments.length > 4 ? arguments[4] : void 0,
          Zy = arguments.length > 5 ? arguments[5] : void 0,
          cb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const Py = {
          uniforms: By.Uniforms,
          size: "number" === typeof bb ? bb : void 0,
          camera: Wy,
          samplingMode: hy || Uy.f.BILINEAR_SAMPLINGMODE,
          engine: fy,
          reusable: Zy,
          textureType: cb,
          ...bb
        };
        super(yb, By.FragmentUrl, {
          effectWrapper: "number" !== typeof bb && bb.effectWrapper ? void 0 : new By(yb, fy, Py),
          ...Py
        }), this.onApplyObservable.add((yb => {
          this._effectWrapper.texelSize = this.texelSize
        }))
      }
      static _Parse(yb, bb, Wy, Uy) {
        return Zy.c.Parse((() => new Ky(yb.name, yb.options, bb, yb.renderTargetSamplingMode, Wy.xh(), yb.reusable)), yb, Wy, Uy)
      }
    }
    var ey = Wy(37350),
      qb = Wy(38576),
      sy = Wy(40309),
      Sy = Wy(40293),
      Ey = Wy(38354);
    const ly = 0;
    class mb {
      constructor(yb, bb, Wy) {
        this.name = yb, this._parentTask = bb, this._context = Wy, this.disabled = !1
      }
      setInitializeFunc(yb) {
        this._initFunc = yb
      }
      setExecuteFunc(yb) {
        this._executeFunc = yb
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
    class Cy extends mb {
      static IsObjectListPass(yb) {
        return void 0 !== yb.setObjectList
      }
      get objectList() {
        return this._objectList
      }
      setObjectList(yb) {
        this._objectList = yb
      }
      constructor(yb, bb, Wy, Uy) {
        super(yb, bb, Wy), this._engine = Uy
      }
      _isValid() {
        const yb = super._isValid();
        return yb || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
      }
    }
    class Ty extends mb {
      static IsRenderPass(yb) {
        return void 0 !== yb.setRenderTarget
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
      constructor(yb, bb, Wy, Uy) {
        super(yb, bb, Wy), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = Uy
      }
      setRenderTarget(yb) {
        this._renderTarget = yb
      }
      setRenderTargetDepth(yb) {
        this._renderTargetDepth = yb
      }
      addDependencies(yb) {
        if (void 0 !== yb)
          if (Array.isArray(yb))
            for (const bb of yb) this._dependencies.add(bb);
          else this._dependencies.add(yb)
      }
      collectDependencies(yb) {
        const bb = this._dependencies.keys();
        for (let Wy = bb.next(); !0 !== Wy.done; Wy = bb.next()) yb.add(Wy.value);
        if (void 0 !== this._renderTarget)
          if (Array.isArray(this._renderTarget))
            for (const Wy of this._renderTarget) void 0 !== Wy && yb.add(Wy);
          else yb.add(this._renderTarget);
        void 0 !== this._renderTargetDepth && yb.add(this._renderTargetDepth)
      }
      setOutputLayerAndFaceIndices(yb) {
        const bb = this.frameGraphRenderTarget.renderTargetWrapper;
        if (bb)
          for (const Wy of yb) bb.setLayerAndFaceIndex(Wy.targetIndex, Wy.layerIndex, Wy.faceIndex)
      }
      _initialize() {
        this._frameGraphRenderTarget = this._context.createRenderTarget(this.name, this._renderTarget, this._renderTargetDepth, this.depthReadOnly, this.stencilReadOnly), super._initialize()
      }
      _execute() {
        this._context.bindRenderTarget(this._frameGraphRenderTarget), super._execute(), this._context.restoreDefaultFramebuffer()
      }
      _isValid() {
        const yb = super._isValid();
        return yb || (void 0 !== this._renderTarget || void 0 !== this.renderTargetDepth ? null : "Render target and render target depth cannot both be undefined.")
      }
      _dispose() {
        this._frameGraphRenderTarget?.dispose()
      }
    }
    var Vy = Wy(35893);
    class Jy {
      get name() {
        return this._name
      }
      set name(yb) {
        this._name = yb
      }
      get disabled() {
        return this._disabled
      }
      set disabled(yb) {
        this._disabled = yb
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
      constructor(yb, bb) {
        this._passes = [], this._passesDisabled = [], this._disabled = !1, this.onTexturesAllocatedObservable = new Vy.c, this.onBeforeTaskExecute = new Vy.c, this.onAfterTaskExecute = new Vy.c, this.name = yb, this._frameGraph = bb, this._reset()
      }
      _reset() {
        for (const yb of this._passes) yb._dispose();
        for (const yb of this._passesDisabled) yb._dispose();
        this._passes.length = 0, this._passesDisabled.length = 0
      }
      _addPass(yb, bb) {
        bb ? this._passesDisabled.push(yb) : this._passes.push(yb)
      }
      _checkTask() {
        let yb, bb = null,
          Wy = null;
        for (const cb of this._passes) {
          const Uy = cb._isValid();
          if (Uy) throw new Error(`Pass "${cb.name}" is not valid. ${Uy}`);
          if (Ty.IsRenderPass(cb)) {
            const yb = Array.isArray(cb.renderTarget) ? cb.renderTarget : [cb.renderTarget];
            bb = [];
            for (const Wy of yb) void 0 !== Wy && bb.push(this._frameGraph.textureManager.getTextureFromHandle(Wy));
            Wy = void 0 !== cb.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(cb.renderTargetDepth) : null
          } else Cy.IsObjectListPass(cb) && (yb = cb.objectList)
        }
        let Uy, hy = null,
          fy = [],
          Zy = null;
        for (const cb of this._passesDisabled) {
          const yb = cb._isValid();
          if (yb) throw new Error(`Pass "${cb.name}" is not valid. ${yb}`);
          if (Ty.IsRenderPass(cb)) {
            const yb = Array.isArray(cb.renderTarget) ? cb.renderTarget : [cb.renderTarget];
            hy = [];
            for (const bb of yb) void 0 !== bb && hy.push(this._frameGraph.textureManager.getTextureFromHandle(bb));
            fy = yb, Zy = void 0 !== cb.renderTargetDepth ? this._frameGraph.textureManager.getTextureFromHandle(cb.renderTargetDepth) : null
          } else Cy.IsObjectListPass(cb) && (Uy = cb.objectList)
        }
        if (this._passesDisabled.length > 0) {
          if (!this._checkSameRenderTarget(bb, hy)) {
            let yb = !0;
            for (const bb of fy)
              if (void 0 !== bb && !this._frameGraph.textureManager.isHistoryTexture(bb)) {
                yb = !1;
                break
              } if (!yb) throw new Error(`The output texture of the task "${this.name}" is different when it is enabled or disabled.`)
          }
          if (Wy !== Zy && null !== Zy) throw new Error(`The output depth texture of the task "${this.name}" is different when it is enabled or disabled.`);
          if (yb !== Uy && null !== Uy) throw new Error(`The output object list of the task "${this.name}" is different when it is enabled or disabled.`)
        }
      }
      _execute() {
        const yb = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
        this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const bb of yb) bb._execute()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
        this.onAfterTaskExecute.notifyObservers(this)
      }
      _initializePasses() {
        this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
        try {
          for (const yb of this._passes) yb._initialize();
          for (const yb of this._passesDisabled) yb._initialize()
        } finally {
          this._frameGraph.engine._debugPopGroup?.()
        }
      }
      _checkSameRenderTarget(yb, bb) {
        if (null === yb || null === bb) return yb === bb;
        if (yb.length !== bb.length) return !1;
        for (let Wy = 0; Wy < yb.length; Wy++)
          if (yb[Wy] !== bb[Wy]) return !1;
        return !0
      }
    }
    class gb extends Jy {
      get alphaMode() {
        return this.postProcess.alphaMode
      }
      set alphaMode(yb) {
        this.postProcess.alphaMode = yb
      }
      get drawWrapper() {
        return this._postProcessDrawWrapper
      }
      constructor(yb, bb, Wy) {
        super(yb, bb), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = Wy, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture = this._frameGraph.textureManager.createDanglingHandle(), this.outputDepthAttachmentTexture = this._frameGraph.textureManager.createDanglingHandle()
      }
      isReady() {
        return this.postProcess.isReady()
      }
      getClassName() {
        return "FrameGraphPostProcessTask"
      }
      record() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          bb = arguments.length > 1 ? arguments[1] : void 0,
          Wy = arguments.length > 2 ? arguments[2] : void 0;
        if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
        const Uy = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
        if (Uy && (Uy.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, Uy), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentTexture, this.depthAttachmentTexture), Uy) {
          const yb = this._frameGraph.textureManager.getTextureAbsoluteDimensions(Uy);
          this._sourceWidth = yb.width, this._sourceHeight = yb.height
        }
        const hy = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
        this._outputWidth = hy.size.width, this._outputHeight = hy.size.height;
        const fy = this._frameGraph.addRenderPass(this.name);
        if (fy.depthReadOnly = this.depthReadOnly, fy.stencilReadOnly = this.stencilReadOnly, fy.addDependencies(this.sourceTexture), fy.setRenderTarget(this.outputTexture), fy.setRenderTargetDepth(this.depthAttachmentTexture), fy.setExecuteFunc((yb => {
            yb.pushDebugGroup(`Apply post-process (${this.name})`), void 0 !== this.sourceTexture && yb.setTextureSamplingMode(this.sourceTexture, this.sourceSamplingMode), bb?.(yb), this.viewport && yb.setViewport(this.viewport), yb.applyFullScreenEffect(this._postProcessDrawWrapper, (() => {
              void 0 !== this.sourceTexture && yb.bindTextureHandle(this._postProcessDrawWrapper.effect, "textureSampler", this.sourceTexture), Wy?.(yb), this.postProcess.bind()
            }), this.stencilState, this.disableColorWrite, this.drawBackFace, this.depthTest, void 0 !== this.viewport), yb.restoreDefaultFramebuffer(), yb.popDebugGroup()
          })), !yb) {
          const yb = this._frameGraph.addRenderPass(this.name + "_disabled", !0);
          yb.depthReadOnly = this.depthReadOnly, yb.stencilReadOnly = this.stencilReadOnly, yb.addDependencies(this.sourceTexture), yb.setRenderTarget(this.outputTexture), yb.setRenderTargetDepth(this.depthAttachmentTexture), yb.setExecuteFunc((yb => {
            void 0 !== this.sourceTexture && 0 === this.alphaMode && (this.viewport && yb.setViewport(this.viewport), yb.copyTexture(this.sourceTexture, void 0, void 0 !== this.viewport))
          }))
        }
        return fy
      }
      dispose() {
        this.postProcess.dispose(), super.dispose()
      }
    }
    class Gy extends gb {
      constructor(yb, bb, Wy) {
        super(yb, bb, Wy || new By(yb, bb.engine))
      }
      getClassName() {
        return "FrameGraphFXAATask"
      }
      record() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          bb = arguments.length > 1 ? arguments[1] : void 0,
          Wy = arguments.length > 2 ? arguments[2] : void 0;
        const Uy = super.record(yb, bb, Wy);
        return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, Uy
      }
    }
    var Oy = Wy(40304);
    class Ry extends gb {
      constructor(yb, bb, Wy) {
        super(yb, bb, Wy || new Oy.g(yb, bb.engine))
      }
      getClassName() {
        return "FrameGraphPassTask"
      }
    }
    var vb = Wy(38569),
      ib = Wy(38655),
      My = Wy(38611),
      Yy = Wy(38740),
      Xy = Wy(35919);
    class ny {
      getRenderCamera(yb) {
        if (this._renderCamera) return this._renderCamera;
        {
          let bb;
          return bb = this.originalScene.activeCameras && this.originalScene.activeCameras.length > 1 ? this.originalScene.activeCameras[this.originalScene.activeCameras.length - 1] : this.originalScene.activeCamera, yb && bb && bb.isRigCamera ? bb.rigParent : bb
        }
      }
      setRenderCamera(yb) {
        this._renderCamera = yb
      }
      _getSharedGizmoLight() {
        return this._sharedGizmoLight || (this._sharedGizmoLight = new Yy.d("shared gizmo light", new oy.n(0, 1, 0), this.utilityLayerScene), this._sharedGizmoLight.intensity = 2, this._sharedGizmoLight.groundColor = Xy.d.Gray()), this._sharedGizmoLight
      }
      static get DefaultUtilityLayer() {
        return null == ny._DefaultUtilityLayer ? ny._CreateDefaultUtilityLayerFromScene(Py.c.LastCreatedScene) : ny._DefaultUtilityLayer
      }
      static _CreateDefaultUtilityLayerFromScene(yb) {
        return ny._DefaultUtilityLayer = new ny(yb), ny._DefaultUtilityLayer.originalScene.Nby.addOnce((() => {
          ny._DefaultUtilityLayer = null
        })), ny._DefaultUtilityLayer
      }
      static get DefaultKeepDepthUtilityLayer() {
        return null == ny._DefaultKeepDepthUtilityLayer ? ny._CreateDefaultKeepUtilityLayerFromScene(Py.c.LastCreatedScene) : ny._DefaultKeepDepthUtilityLayer
      }
      static _CreateDefaultKeepUtilityLayerFromScene(yb) {
        return ny._DefaultKeepDepthUtilityLayer = new ny(yb), ny._DefaultKeepDepthUtilityLayer.utilityLayerScene.autoClearDepthAndStencil = !1, ny._DefaultKeepDepthUtilityLayer.originalScene.Nby.addOnce((() => {
          ny._DefaultKeepDepthUtilityLayer = null
        })), ny._DefaultKeepDepthUtilityLayer
      }
      constructor(yb) {
        let bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.originalScene = yb, this.handleEvents = bb, this._pointerCaptures = {}, this._lastPointerEvents = {}, this._sharedGizmoLight = null, this._renderCamera = null, this.pickUtilitySceneFirst = !0, this.shouldRender = !0, this.onlyCheckPointerDownEvents = !0, this.processAllEvents = !1, this.pickingEnabled = !0, this.onPointerOutObservable = new Vy.c, this.utilityLayerScene = new vb.g(yb.xh(), {
          virtual: !0,
          useFloatingOrigin: yb.floatingOriginMode
        }), this.utilityLayerScene.useRightHandedSystem = yb.useRightHandedSystem, this.utilityLayerScene._allowPostProcessClearColor = !1, this.utilityLayerScene.postProcessesEnabled = !1, this.utilityLayerScene.detachControl(), bb && (this._originalPointerObserver = yb.onPrePointerObservable.add((bb => {
          if (!this.utilityLayerScene.activeCamera) return;
          if (!this.pickingEnabled) return;
          if (!this.processAllEvents && bb.type !== ib.d.POINTERMOVE && bb.type !== ib.d.POINTERUP && bb.type !== ib.d.POINTERDOWN && bb.type !== ib.d.POINTERDOUBLETAP) return;
          this.utilityLayerScene.pointerX = yb.pointerX, this.utilityLayerScene.pointerY = yb.pointerY;
          const Wy = bb.event;
          if (yb.isPointerCaptured(Wy.pointerId)) return void(this._pointerCaptures[Wy.pointerId] = !1);
          const Uy = Wy => {
              let Uy;
              if (bb.nearInteractionPickingInfo) Uy = bb.nearInteractionPickingInfo.pickedMesh.kWy() == Wy ? bb.nearInteractionPickingInfo : new My.b;
              else if (Wy !== this.utilityLayerScene && bb.originalPickingInfo) Uy = bb.originalPickingInfo;
              else {
                let hy = null;
                this._renderCamera && (hy = Wy._activeCamera, Wy._activeCamera = this._renderCamera, bb.ray = null), Uy = bb.ray ? Wy.pickWithRay(bb.ray) : Wy.cU(yb.pointerX, yb.pointerY), hy && (Wy._activeCamera = hy)
              }
              return Uy
            },
            hy = Uy(this.utilityLayerScene);
          if (!bb.ray && hy && (bb.ray = hy.ray), bb.originalPickingInfo?.aimTransform && hy && (hy.aimTransform = bb.originalPickingInfo.aimTransform, hy.gripTransform = bb.originalPickingInfo.gripTransform), this.utilityLayerScene.onPrePointerObservable.notifyObservers(bb), this.onlyCheckPointerDownEvents && bb.type != ib.d.POINTERDOWN) return bb.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new ib.l(bb.type, bb.event, hy), bb.type), void(bb.type === ib.d.POINTERUP && this._pointerCaptures[Wy.pointerId] && (this._pointerCaptures[Wy.pointerId] = !1));
          if (this.utilityLayerScene.autoClearDepthAndStencil || this.pickUtilitySceneFirst) hy && hy.hit && (bb.skipOnPointerObservable || this.utilityLayerScene.onPointerObservable.notifyObservers(new ib.l(bb.type, bb.event, hy), bb.type), bb.skipOnPointerObservable = !0);
          else {
            const Wy = Uy(yb),
              fy = bb.event;
            Wy && hy && (0 === hy.distance && Wy.pickedMesh ? this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(Wy.pickedMesh) ? (this._notifyObservers(bb, Wy, fy), bb.skipOnPointerObservable = !0) : bb.type === ib.d.POINTERDOWN ? (this._pointerCaptures[fy.pointerId] = !0, this._notifyObservers(bb, Wy, fy)) : bb.type !== ib.d.POINTERMOVE && bb.type !== ib.d.POINTERUP || (this._lastPointerEvents[fy.pointerId] && (this.onPointerOutObservable.notifyObservers(fy.pointerId), delete this._lastPointerEvents[fy.pointerId]), this._notifyObservers(bb, Wy, fy)) : !this._pointerCaptures[fy.pointerId] && (hy.distance < Wy.distance || 0 === Wy.distance) ? (this._notifyObservers(bb, hy, fy), bb.skipOnPointerObservable || (bb.skipOnPointerObservable = hy.distance > 0)) : !this._pointerCaptures[fy.pointerId] && hy.distance >= Wy.distance && (this.mainSceneTrackerPredicate && this.mainSceneTrackerPredicate(Wy.pickedMesh) ? (this._notifyObservers(bb, Wy, fy), bb.skipOnPointerObservable = !0) : (bb.type !== ib.d.POINTERMOVE && bb.type !== ib.d.POINTERUP || this._lastPointerEvents[fy.pointerId] && (this.onPointerOutObservable.notifyObservers(fy.pointerId), delete this._lastPointerEvents[fy.pointerId]), this._notifyObservers(bb, hy, fy))), bb.type === ib.d.POINTERUP && this._pointerCaptures[fy.pointerId] && (this._pointerCaptures[fy.pointerId] = !1))
          }
        })), this._originalPointerObserver && yb.onPrePointerObservable.makeObserverTopPriority(this._originalPointerObserver)), this.utilityLayerScene.autoClear = !1, Wy || (this._afterRenderObserver = this.originalScene.onAfterRenderCameraObservable.add((yb => {
          this.shouldRender && yb == this.getRenderCamera() && this.render()
        }))), this._sceneDisposeObserver = this.originalScene.Nby.add((() => {
          this.dispose()
        })), this._updateCamera()
      }
      _notifyObservers(yb, bb, Wy) {
        yb.skipOnPointerObservable || (this.utilityLayerScene.onPointerObservable.notifyObservers(new ib.l(yb.type, yb.event, bb), yb.type), this._lastPointerEvents[Wy.pointerId] = !0)
      }
      render() {
        if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
          const yb = this.utilityLayerScene.activeCamera.kWy(),
            bb = this.utilityLayerScene.activeCamera;
          bb._scene = this.utilityLayerScene, bb.leftCamera && (bb.leftCamera._scene = this.utilityLayerScene), bb.rightCamera && (bb.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), bb._scene = yb, bb.leftCamera && (bb.leftCamera._scene = yb), bb.rightCamera && (bb.rightCamera._scene = yb)
        }
      }
      dispose() {
        this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.Nby.remove(this._sceneDisposeObserver), this._originalPointerObserver && this.originalScene.onPrePointerObservable.remove(this._originalPointerObserver), this.utilityLayerScene.dispose()
      }
      _updateCamera() {
        this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
      }
    }
    ny._DefaultUtilityLayer = null, ny._DefaultKeepDepthUtilityLayer = null;
    const uy = {
      FindMainCamera: function(yb) {
        return yb.findMainCamera()
      },
      FindMainObjectRenderer: function(yb) {
        return yb.findMainObjectRenderer()
      },
      CreateUtilityLayerRenderer: function(yb) {
        let bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const Wy = yb.Pf,
          Uy = new ny(Wy, bb, !0);
        Uy.utilityLayerScene.activeCamera = Wy.activeCamera;
        let hy = uy.FindMainCamera(Wy.frameGraph);
        !hy && Wy.cameras.length > 0 && (hy = Wy.cameras[0]), hy && (Uy.setRenderCamera(hy), Uy.utilityLayerScene.activeCamera = hy);
        const fy = Wy.onAfterRenderObservable.add((() => {
          Uy.render()
        }));
        return Uy.utilityLayerScene.Nby.addOnce((() => {
          Wy.onAfterRenderObservable.remove(fy)
        })), Uy
      }
    };
    let rb = null;

    function Hy(yb, bb, Wy, Uy) {
      let hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        fy = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Zy = arguments.length > 6 ? arguments[6] : void 0,
        cb = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Py = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
      const {
        height: oy,
        width: By
      } = jb(yb, bb, Wy);
      if (!oy || !By) return void ey.b.Error("Invalid 'size' parameter !");
      const Ky = bb.kWy();
      let sy = Ky.activeCamera !== bb;
      if (Ky.frameGraph) {
        const yb = uy.FindMainObjectRenderer(Ky.frameGraph);
        yb && (sy = yb.camera !== bb)
      }
      sy ? py(yb, bb, Wy, (yb => {
        if (fy) {
          const bb = new Blob([yb]);
          qb.k.DownloadBlob(bb), Uy && Uy("")
        } else Uy && Uy(yb)
      }), hy, 1, yb.getCreationOptions().antialias, void 0, void 0, void 0, void 0, Zy) : yb.onEndFrameObservable.addOnce((() => {
        rb || (rb = document.createElement("canvas")), rb.width = By, rb.height = oy;
        const bb = rb.getContext("2d"),
          Wy = yb.getRenderingCanvas();
        if (!bb || !Wy) return void ey.b.Error("Failed to create screenshot. Rendering context or rendering canvas is not available.");
        const sy = Wy.width,
          Sy = Wy.height,
          Ey = rb.width,
          ly = rb.height,
          mb = Ey / sy,
          Cy = ly / Sy,
          Ty = cb ? Math.max(mb, Cy) : Math.min(mb, Cy),
          Vy = sy * Ty,
          Jy = Sy * Ty,
          gb = (Ey - Vy) / 2,
          Gy = (ly - Jy) / 2;
        bb.save(), bb.fillStyle = Py ? Ky.clearColor.toHexString() : "rgba(0, 0, 0, 0)", bb.fillRect(0, 0, By, oy), bb.restore(), bb.drawImage(Wy, 0, 0, sy, Sy, gb, Gy, Vy, Jy), fy ? (qb.k.EncodeScreenshotCanvasData(rb, void 0, hy, void 0, Zy), Uy && Uy("")) : qb.k.EncodeScreenshotCanvasData(rb, Uy, hy, void 0, Zy)
      }))
    }
    async function ab(yb, bb, Wy) {
      let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        hy = arguments.length > 4 ? arguments[4] : void 0,
        fy = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Zy = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        cb = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
      return await new Promise(((Py, oy) => {
        Hy(yb, bb, Wy, (yb => {
          "undefined" !== typeof yb ? Py(yb) : oy(new Error("Data is undefined"))
        }), Uy, cb, hy, fy, Zy)
      }))
    }
    async function Fy(yb, bb, Wy, Uy) {
      let hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        fy = arguments.length > 5 ? arguments[5] : void 0,
        Zy = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
      return await new Promise((cb => {
        Hy(yb, bb, {
          width: Wy,
          height: Uy
        }, (() => {
          cb()
        }), hy, !0, fy, Zy)
      }))
    }

    function py(yb, bb, fy, Zy) {
      let cb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
        Py = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
        oy = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
        By = arguments.length > 7 ? arguments[7] : void 0,
        qb = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        ly = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        mb = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
        Cy = arguments.length > 11 ? arguments[11] : void 0,
        Ty = arguments.length > 12 ? arguments[12] : void 0,
        Vy = arguments.length > 13 ? arguments[13] : void 0,
        Jy = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
        gb = arguments.length > 15 ? arguments[15] : void 0;
      const Gy = bb.kWy();
      if (Gy.frameGraph) return void Qy(Gy.frameGraph, bb, fy, cb, Py, oy, By, Cy, Vy, !Zy).then((yb => {
        Zy && Zy(yb)
      }));
      const {
        height: Oy,
        width: Ry,
        finalWidth: vb,
        finalHeight: ib
      } = jb(yb, bb, fy), My = {
        width: Ry,
        height: Oy
      };
      if (!Oy || !Ry) return void ey.b.Error("Invalid 'size' parameter !");
      yb.skipFrameRender = !0;
      const Yy = yb.getRenderWidth,
        Xy = yb.getRenderHeight;
      yb.getRenderWidth = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && yb._currentRenderTarget ? yb._currentRenderTarget.width : Ry
      }, yb.getRenderHeight = function() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && yb._currentRenderTarget ? yb._currentRenderTarget.height : Oy
      }, yb.onResizeObservable.hasObservers() && yb.onResizeObservable.notifyObservers(yb);
      const ny = new hy.e("screenShot", My, Gy, !1, !1, 0, !1, Uy.f.BILINEAR_SAMPLINGMODE, void 0, ly, void 0, void 0, void 0, Py);
      ny.renderList = Gy.meshes.slice(), ny.samples = Py, ny.renderSprites = qb, ny.activeCamera = bb, ny.forceLayerMaskCheck = mb, Ty?.(ny);
      const uy = Vy || sy.DumpData,
        rb = () => {
          Gy.incrementRenderId(), Gy.resetCachedMaterial(), (0, Ey.c)((() => ny.isReadyForRendering() && bb.isReady(!0)), (() => {
            yb.onEndFrameObservable.addOnce((() => {
              vb === Ry && ib === Oy ? ny.readPixels(void 0, void 0, void 0, !1).then((yb => {
                uy(Ry, Oy, yb, Zy, cb, By, !0, void 0, Cy), ny.dispose()
              })) : (yb.isWebGPU ? Wy.e(351).then((() => Wy(59997))) : Wy.e(352).then((() => Wy(60001)))).then((async () => await (0, Sy.d)("pass", ny.getInternalTexture(), Gy, void 0, void 0, void 0, vb, ib).then((bb => {
                yb._readTexturePixels(bb, vb, ib, -1, 0, null, !0, !1, 0, 0).then((yb => {
                  uy(vb, ib, yb, Zy, cb, By, !0, void 0, Cy), bb.dispose()
                }))
              }))))
            })), Gy.incrementRenderId(), Gy.resetCachedMaterial();
            const Uy = Gy.activeCamera,
              hy = Gy.activeCameras,
              fy = bb.outputRenderTarget,
              Py = Gy.spritesEnabled;
            Gy.activeCamera = bb, Gy.activeCameras = null, bb.outputRenderTarget = ny, Gy.spritesEnabled = qb;
            const oy = Gy.meshes;
            Gy.meshes = ny.renderList || Gy.meshes;
            try {
              Gy.render()
            } finally {
              Gy.activeCamera = Uy, Gy.activeCameras = hy, bb.outputRenderTarget = fy, Gy.spritesEnabled = Py, Gy.meshes = oy, yb.getRenderWidth = Yy, yb.getRenderHeight = Xy, yb.onResizeObservable.hasObservers() && yb.onResizeObservable.notifyObservers(yb), bb.getProjectionMatrix(!0), yb.skipFrameRender = !1
            }
          }), (() => {
            yb.skipFrameRender = !1, yb.getRenderWidth = Yy, yb.getRenderHeight = Xy, gb?.()
          }), void 0, Jy)
        };
      if (oy) {
        const yb = new Ky("antialiasing", 1, Gy.activeCamera);
        ny.addPostProcess(yb), yb.autoClear = !0, yb.onEffectCreatedObservable.addOnce((yb => {
          yb.isReady() ? rb() : yb.onCompiled = () => {
            rb()
          }
        }))
      } else rb()
    }
    async function Ly(yb, bb, Wy) {
      let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        fy = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Zy = arguments.length > 6 ? arguments[6] : void 0,
        cb = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        Py = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        oy = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
        By = arguments.length > 10 ? arguments[10] : void 0,
        Ky = arguments.length > 11 ? arguments[11] : void 0,
        ey = arguments.length > 12 ? arguments[12] : void 0;
      return await new Promise(((qb, sy) => {
        py(yb, bb, Wy, (yb => {
          "undefined" !== typeof yb ? qb(yb) : sy(new Error("Data is undefined"))
        }), Uy, hy, fy, Zy, cb, Py, oy, By, Ky, ey)
      }))
    }
    async function Qy(yb, bb, Wy) {
      let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
        hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        fy = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        Zy = arguments.length > 6 ? arguments[6] : void 0,
        cb = arguments.length > 7 ? arguments[7] : void 0,
        Py = arguments.length > 8 ? arguments[8] : void 0,
        oy = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
        By = arguments.length > 10 ? arguments[10] : void 0;
      const Ky = yb.engine,
        ey = yb.textureManager,
        {
          height: qb,
          width: Sy,
          finalWidth: Ey,
          finalHeight: mb
        } = jb(Ky, bb, Wy),
        Cy = {
          width: Sy,
          height: qb
        },
        Ty = Py || sy.DumpData,
        Vy = yb.tasks,
        Jy = Vy.length,
        gb = yb.pausedExecution,
        Oy = Ky.getCaps().parallelShaderCompile;
      ey.setBackBufferTextures(0, 0, {
        size: Cy,
        options: {
          createMipMaps: !1,
          samples: hy,
          types: [0],
          formats: [5],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot color"]
        },
        sizeIsPercentage: !1
      }, {
        size: Cy,
        options: {
          createMipMaps: !1,
          samples: hy,
          types: [0],
          formats: [Ky.isStencilEnable ? 13 : 14],
          useSRGBBuffers: [!1],
          creationFlags: [0],
          labels: ["screenshot depth"]
        },
        sizeIsPercentage: !1
      });
      let vb = ly;
      if (fy) {
        const bb = new Gy("fxaa", yb);
        bb.sourceTexture = vb, vb = bb.outputTexture, yb.addTask(bb)
      }
      if (Ey !== Sy || mb !== qb) {
        const bb = new Ry("pass", yb);
        bb.sourceTexture = vb, bb.targetTexture = yb.textureManager.createRenderTargetTexture("pass_output", {
          size: {
            width: Ey,
            height: mb
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
        }), vb = bb.outputTexture, yb.addTask(bb)
      }
      const ib = uy.FindMainObjectRenderer(yb);
      let My = null;
      ib && (My = ib.camera, ib.camera = bb), Ky.getCaps().parallelShaderCompile = void 0, await yb.buildAsync();
      const Yy = By ?? (ey.hasHistoryTextures ? 32 : 1);
      for (let sy = 0; sy < Yy; ++sy) yb.execute();
      yb.pausedExecution = !0, Ky.getCaps().parallelShaderCompile = Oy;
      for (let sy = Jy; sy < Vy.length; ++sy) yb.tasks[sy].dispose();
      yb.tasks.length = Jy, ib && My && (ib.camera = My);
      const Xy = yb.textureManager.getTextureFromHandle(vb);
      return Xy.incrementReferences(), ey.resetBackBufferTextures(), await yb.buildAsync(), yb.pausedExecution = gb, new Promise((yb => {
        Ky._readTexturePixels(Xy, Ey, mb, -1, 0, null, !0, !1, 0, 0).then((async bb => {
          Xy.dispose(), Ty(Ey, mb, bb, oy ? void 0 : bb => yb(bb), Uy, Zy, !0, void 0, cb), oy && yb(null)
        }))
      }))
    }

    function jb(yb, bb, Wy) {
      let Uy = 0,
        hy = 0,
        fy = 0,
        Zy = 0;
      if ("object" === typeof Wy) {
        const cb = Wy.precision ? Math.abs(Wy.precision) : 1;
        Wy.width && Wy.height ? (Uy = Wy.height * cb, hy = Wy.width * cb) : Wy.width && !Wy.height ? (hy = Wy.width * cb, Uy = Math.round(hy / yb.getAspectRatio(bb))) : Wy.height && !Wy.width ? (Uy = Wy.height * cb, hy = Math.round(Uy * yb.getAspectRatio(bb))) : (hy = Math.round(yb.getRenderWidth() * cb), Uy = Math.round(hy / yb.getAspectRatio(bb))), Wy.finalWidth && Wy.finalHeight ? (Zy = Wy.finalHeight, fy = Wy.finalWidth) : Wy.finalWidth && !Wy.finalHeight ? (fy = Wy.finalWidth, Zy = Math.round(fy / yb.getAspectRatio(bb))) : Wy.finalHeight && !Wy.finalWidth ? (Zy = Wy.finalHeight, fy = Math.round(Zy * yb.getAspectRatio(bb))) : (fy = hy, Zy = Uy)
      } else isNaN(Wy) || (Uy = Wy, hy = Wy, fy = Wy, Zy = Wy);
      return hy && (hy = Math.floor(hy)), Uy && (Uy = Math.floor(Uy)), fy && (fy = Math.floor(fy)), Zy && (Zy = Math.floor(Zy)), {
        height: 0 | Uy,
        width: 0 | hy,
        finalWidth: 0 | fy,
        finalHeight: 0 | Zy
      }
    }
    const Dy = {
      CreateScreenshot: Hy,
      CreateScreenshotAsync: ab,
      CreateScreenshotWithResizeAsync: Fy,
      CreateScreenshotUsingRenderTarget: py,
      CreateScreenshotUsingRenderTargetAsync: Ly,
      CreateScreenshotForFrameGraphAsync: Qy
    };
    let tb = !1;

    function wy() {
      if (tb) return;
      tb = !0;
      qb.k.CreateScreenshot = Hy, qb.k.CreateScreenshotAsync = ab, qb.k.CreateScreenshotUsingRenderTarget = py, qb.k.CreateScreenshotUsingRenderTargetAsync = Ly
    }
    wy()
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);