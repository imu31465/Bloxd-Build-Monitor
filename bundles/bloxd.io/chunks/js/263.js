export const id = 263;
export const ids = [263, 268];
export const modules = {
  54247: (dd, Od, md) => {
    md.d(Od, {
      e: () => Xd
    });
    var Wd = md(54193),
      Fd = md(41914);
    let Rd = !1;

    function Xd() {
      Rd || (Rd = !0, Fd.c.prototype._sphericalPolynomialTargetSize = 0, Fd.c.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(Fd.c.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = Wd.c.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((dd => {
              this._texture._sphericalPolynomial = dd, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(dd) {
          this._texture && (this._texture._sphericalPolynomial = dd)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  38736: (dd, Od, md) => {
    md.d(Od, {
      Color3: () => Wd.d,
      b: () => Wd.f
    });
    var Wd = md(38741);
    (0, Wd.g)()
  },
  39297: (dd, Od, md) => {
    md.d(Od, {
      e: () => Fd
    });
    var Wd = md(39306);
    class Fd {
      static GetPlanes(dd) {
        const Od = [];
        for (let md = 0; md < 6; md++) Od.push(new Wd.d(0, 0, 0, 0));
        return Fd.GetPlanesToRef(dd, Od), Od
      }
      static GetNearPlaneToRef(dd, Od) {
        const md = dd.m;
        Od.normal.x = md[3] + md[2], Od.normal.y = md[7] + md[6], Od.normal.z = md[11] + md[10], Od.d = md[15] + md[14], Od.normalize()
      }
      static GetFarPlaneToRef(dd, Od) {
        const md = dd.m;
        Od.normal.x = md[3] - md[2], Od.normal.y = md[7] - md[6], Od.normal.z = md[11] - md[10], Od.d = md[15] - md[14], Od.normalize()
      }
      static GetLeftPlaneToRef(dd, Od) {
        const md = dd.m;
        Od.normal.x = md[3] + md[0], Od.normal.y = md[7] + md[4], Od.normal.z = md[11] + md[8], Od.d = md[15] + md[12], Od.normalize()
      }
      static GetRightPlaneToRef(dd, Od) {
        const md = dd.m;
        Od.normal.x = md[3] - md[0], Od.normal.y = md[7] - md[4], Od.normal.z = md[11] - md[8], Od.d = md[15] - md[12], Od.normalize()
      }
      static GetTopPlaneToRef(dd, Od) {
        const md = dd.m;
        Od.normal.x = md[3] - md[1], Od.normal.y = md[7] - md[5], Od.normal.z = md[11] - md[9], Od.d = md[15] - md[13], Od.normalize()
      }
      static GetBottomPlaneToRef(dd, Od) {
        const md = dd.m;
        Od.normal.x = md[3] + md[1], Od.normal.y = md[7] + md[5], Od.normal.z = md[11] + md[9], Od.d = md[15] + md[13], Od.normalize()
      }
      static GetPlanesToRef(dd, Od) {
        Fd.GetNearPlaneToRef(dd, Od[0]), Fd.GetFarPlaneToRef(dd, Od[1]), Fd.GetLeftPlaneToRef(dd, Od[2]), Fd.GetRightPlaneToRef(dd, Od[3]), Fd.GetTopPlaneToRef(dd, Od[4]), Fd.GetBottomPlaneToRef(dd, Od[5])
      }
      static IsPointInFrustum(dd, Od) {
        for (let md = 0; md < 6; md++)
          if (Od[md].dotCoordinate(dd) < 0) return !1;
        return !0
      }
    }
  },
  39306: (dd, Od, md) => {
    md.d(Od, {
      d: () => Fd
    });
    var Wd = md(38636);
    class Fd {
      constructor(dd, Od, md, Fd) {
        this.normal = new Wd.j(dd, Od, md), this.d = Fd
      }
      RRd() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Fd(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let dd = this.normal.getHashCode();
        return dd = 397 * dd ^ this.d, dd
      }
      normalize() {
        const dd = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let Od = 0;
        return 0 !== dd && (Od = 1 / dd), this.normal.x *= Od, this.normal.y *= Od, this.normal.z *= Od, this.d *= Od, this
      }
      transform(dd) {
        const Od = Fd._TmpMatrix;
        dd.invertToRef(Od);
        const md = Od.m,
          Wd = this.normal.x,
          Rd = this.normal.y,
          Xd = this.normal.z,
          Kd = this.d,
          hd = Wd * md[0] + Rd * md[1] + Xd * md[2] + Kd * md[3],
          vd = Wd * md[4] + Rd * md[5] + Xd * md[6] + Kd * md[7],
          Qd = Wd * md[8] + Rd * md[9] + Xd * md[10] + Kd * md[11],
          td = Wd * md[12] + Rd * md[13] + Xd * md[14] + Kd * md[15];
        return new Fd(hd, vd, Qd, td)
      }
      dotCoordinate(dd) {
        return this.normal.x * dd.x + this.normal.y * dd.y + this.normal.z * dd.z + this.d
      }
      copyFromPoints(dd, Od, md) {
        const Wd = Od.x - dd.x,
          Fd = Od.y - dd.y,
          Rd = Od.z - dd.z,
          Xd = md.x - dd.x,
          Kd = md.y - dd.y,
          hd = md.z - dd.z,
          vd = Fd * hd - Rd * Kd,
          Qd = Rd * Xd - Wd * hd,
          td = Wd * Kd - Fd * Xd,
          od = Math.sqrt(vd * vd + Qd * Qd + td * td);
        let Nd;
        return Nd = 0 !== od ? 1 / od : 0, this.normal.x = vd * Nd, this.normal.y = Qd * Nd, this.normal.z = td * Nd, this.d = -(this.normal.x * dd.x + this.normal.y * dd.y + this.normal.z * dd.z), this
      }
      isFrontFacingTo(dd, Od) {
        return Wd.j.Dot(this.normal, dd) <= Od
      }
      signedDistanceTo(dd) {
        return Wd.j.Dot(dd, this.normal) + this.d
      }
      static FromArray(dd) {
        return new Fd(dd[0], dd[1], dd[2], dd[3])
      }
      static FromPoints(dd, Od, md) {
        const Wd = new Fd(0, 0, 0, 0);
        return Wd.copyFromPoints(dd, Od, md), Wd
      }
      static FromPositionAndNormal(dd, Od) {
        const md = new Fd(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(dd, Od, md)
      }
      static FromPositionAndNormalToRef(dd, Od, md) {
        return md.normal.Bx(Od), md.normal.normalize(), md.d = -dd.dot(md.normal), md
      }
      static SignedDistanceToPlaneFromPositionAndNormal(dd, Od, md) {
        const Fd = -(Od.x * dd.x + Od.y * dd.y + Od.z * dd.z);
        return Wd.j.Dot(md, Od) + Fd
      }
    }
    Fd._TmpMatrix = Wd.d.Identity()
  },
  38627: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      Matrix: () => Wd.d,
      Quaternion: () => Wd.e,
      RegisterMathVector: () => Wd.f,
      TmpVectors: () => Wd.h,
      Vector2: () => Wd.i,
      Cq: () => Wd.j,
      Vector4: () => Wd.k
    });
    var Wd = md(38636);
    (0, Wd.f)()
  },
  39642: (dd, Od, md) => {
    md.d(Od, {
      b: () => Wd
    });
    class Wd {
      constructor(dd, Od, md, Wd) {
        this.x = dd, this.y = Od, this.width = md, this.height = Wd
      }
      toGlobal(dd, Od) {
        return new Wd(this.x * dd, this.y * Od, this.width * dd, this.height * Od)
      }
      toGlobalToRef(dd, Od, md) {
        return md.x = this.x * dd, md.y = this.y * Od, md.width = this.width * dd, md.height = this.height * Od, this
      }
      clone() {
        return new Wd(this.x, this.y, this.width, this.height)
      }
    }
  },
  54193: (dd, Od, md) => {
    md.d(Od, {
      c: () => vd
    });
    var Wd = md(38636),
      Fd = md(38663),
      Rd = md(41907),
      Xd = md(38644),
      Kd = md(38741);
    class hd {
      constructor(dd, Od, md, Wd) {
        this.name = dd, this.worldAxisForNormal = Od, this.worldAxisForFileX = md, this.worldAxisForFileY = Wd
      }
    }
    class vd {
      static _NearestPow2Floor(dd) {
        return dd <= 1 ? 1 : 1 << Math.floor(Math.log2(dd))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(dd) {
        if (!dd.isCube) return null;
        dd.zV()?.Iq().flushFramebuffer();
        const Od = dd.getSize().width,
          md = dd._sphericalPolynomialTargetSize,
          Wd = md > 0 ? this._NearestPow2Floor(md) : 0,
          Fd = !dd.noMipmap && !0 === dd._texture?.generateMipMaps,
          Rd = Wd > 0 && Wd < Od && Fd,
          Xd = Rd ? Math.max(0, Math.round(Math.log2(Od / Wd))) : 0,
          Kd = Rd ? Math.max(1, Math.floor(Od / Math.pow(2, Xd))) : Od,
          hd = dd.readPixels(0, Xd, void 0, !1),
          vd = dd.readPixels(1, Xd, void 0, !1);
        let Qd, td;
        dd.isRenderTarget ? (Qd = dd.readPixels(3, Xd, void 0, !1), td = dd.readPixels(2, Xd, void 0, !1)) : (Qd = dd.readPixels(2, Xd, void 0, !1), td = dd.readPixels(3, Xd, void 0, !1));
        const od = dd.readPixels(4, Xd, void 0, !1),
          Nd = dd.readPixels(5, Xd, void 0, !1),
          qd = dd.gammaSpace,
          Hd = Wd > 0 && Wd < Od && !Rd;
        return new Promise((dd => {
          Promise.all([vd, hd, Qd, td, od, Nd]).then((md => {
            let [Fd, Rd, Xd, hd, vd, Qd] = md, td = Kd;
            if (Hd) {
              const dd = 4;
              Fd = this._DownsampleFace(Fd, Od, Wd, dd), Rd = this._DownsampleFace(Rd, Od, Wd, dd), Xd = this._DownsampleFace(Xd, Od, Wd, dd), hd = this._DownsampleFace(hd, Od, Wd, dd), vd = this._DownsampleFace(vd, Od, Wd, dd), Qd = this._DownsampleFace(Qd, Od, Wd, dd), td = Wd
            }
            const od = {
              size: td,
              right: Rd,
              left: Fd,
              up: Xd,
              down: hd,
              front: vd,
              back: Qd,
              format: 5,
              type: Fd instanceof Float32Array ? 1 : 0,
              gammaSpace: qd
            };
            dd(this.ConvertCubeMapToSphericalPolynomial(od))
          }))
        }))
      }
      static _AreaElement(dd, Od) {
        return Math.atan2(dd * Od, Math.sqrt(dd * dd + Od * Od + 1))
      }
      static _DownsampleFace(dd, Od, md, Wd) {
        const Fd = dd instanceof Float32Array ? dd : Float32Array.from(dd),
          Rd = md * md * Wd,
          Xd = new Float32Array(Rd),
          Kd = Od / md,
          hd = 1 / (Kd * Kd);
        for (let Qd = 0; Qd < md; Qd++) {
          const dd = Math.floor(Qd * Kd),
            Rd = Math.floor((Qd + 1) * Kd);
          for (let vd = 0; vd < md; vd++) {
            const td = Math.floor(vd * Kd),
              od = Math.floor((vd + 1) * Kd),
              Nd = (Qd * md + vd) * Wd;
            for (let md = 0; md < Wd; md++) {
              let Kd = 0;
              for (let Xd = dd; Xd < Rd; Xd++)
                for (let dd = td; dd < od; dd++) Kd += Fd[(Xd * Od + dd) * Wd + md];
              Xd[Nd + md] = Kd * hd
            }
          }
        }
        if (dd instanceof Float32Array) return Xd;
        const vd = new(0, dd.constructor)(Rd);
        for (let Qd = 0; Qd < Rd; Qd++) vd[Qd] = Xd[Qd] + .5 | 0;
        return vd
      }
      static ConvertCubeMapToSphericalPolynomial(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const md = Od > 0 ? this._NearestPow2Floor(Od) : 0;
        if (md > 0 && dd.size > md) {
          const Od = 5 === dd.format ? 4 : 3,
            Wd = ["right", "left", "up", "down", "front", "back"],
            Fd = {};
          for (const Rd of Wd) Fd[Rd] = this._DownsampleFace(dd[Rd], dd.size, md, Od);
          dd = {
            ...dd,
            ...Fd,
            size: md
          }
        }
        const Wd = new Rd.c;
        let hd = 0;
        const vd = 2 / dd.size,
          Qd = vd,
          td = .5 * vd,
          od = td - 1;
        for (let Rd = 0; Rd < 6; Rd++) {
          const Od = this._FileFaces[Rd],
            md = dd[Od.name];
          let Nd = od;
          const qd = 5 === dd.format ? 4 : 3;
          for (let Rd = 0; Rd < dd.size; Rd++) {
            let Hd = od;
            for (let Qd = 0; Qd < dd.size; Qd++) {
              const od = Od.worldAxisForFileX.scale(Hd).add(Od.worldAxisForFileY.scale(Nd)).add(Od.worldAxisForNormal);
              od.normalize();
              const yd = this._AreaElement(Hd - td, Nd - td) - this._AreaElement(Hd - td, Nd + td) - this._AreaElement(Hd + td, Nd - td) + this._AreaElement(Hd + td, Nd + td);
              let bd = md[Rd * dd.size * qd + Qd * qd + 0],
                Td = md[Rd * dd.size * qd + Qd * qd + 1],
                pd = md[Rd * dd.size * qd + Qd * qd + 2];
              isNaN(bd) && (bd = 0), isNaN(Td) && (Td = 0), isNaN(pd) && (pd = 0), 0 === dd.type && (bd /= 255, Td /= 255, pd /= 255), dd.gammaSpace && (bd = Math.pow((0, Fd.Clamp)(bd), Xd.f), Td = Math.pow((0, Fd.Clamp)(Td), Xd.f), pd = Math.pow((0, Fd.Clamp)(pd), Xd.f));
              const Yd = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const dd = Math.max(bd, Td, pd);
                if (dd > Yd) {
                  const Od = Yd / dd;
                  bd *= Od, Td *= Od, pd *= Od
                }
              } else bd = (0, Fd.Clamp)(bd, 0, Yd), Td = (0, Fd.Clamp)(Td, 0, Yd), pd = (0, Fd.Clamp)(pd, 0, Yd);
              const gd = new Kd.d(bd, Td, pd);
              Wd.addLight(od, gd, yd), hd += yd, Hd += vd
            }
            Nd += Qd
          }
        }
        const Nd = 6 * (4 * Math.PI) / 6 / hd;
        return Wd.scaleInPlace(Nd), Wd.convertIncidentRadianceToIrradiance(), Wd.convertIrradianceToLambertianRadiance(), Rd.e.FromHarmonics(Wd)
      }
    }
    vd._FileFaces = [new hd("right", new Wd.j(1, 0, 0), new Wd.j(0, 0, -1), new Wd.j(0, -1, 0)), new hd("left", new Wd.j(-1, 0, 0), new Wd.j(0, 0, 1), new Wd.j(0, -1, 0)), new hd("up", new Wd.j(0, 1, 0), new Wd.j(1, 0, 0), new Wd.j(0, 0, 1)), new hd("down", new Wd.j(0, -1, 0), new Wd.j(1, 0, 0), new Wd.j(0, 0, -1)), new hd("front", new Wd.j(0, 0, 1), new Wd.j(1, 0, 0), new Wd.j(0, -1, 0)), new hd("back", new Wd.j(0, 0, -1), new Wd.j(-1, 0, 0), new Wd.j(0, -1, 0))], vd.MAX_HDRI_VALUE = 4096, vd.PRESERVE_CLAMPED_COLORS = !1
  },
  54047: (dd, Od, md) => {
    md.d(Od, {
      c: () => Wd.e,
      g: () => Wd.h
    });
    var Wd = md(41961);
    (0, Wd.k)()
  },
  39461: (dd, Od, md) => {
    function Wd() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (dd => {
        const Od = 16 * Math.random() | 0;
        return ("x" === dd ? Od : 3 & Od | 8).toString(16)
      }))
    }
    md.d(Od, {
      b: () => Wd
    })
  },
  54227: (dd, Od, md) => {
    md.d(Od, {
      c: () => Rd
    });
    var Wd = md(54217),
      Fd = md(54229);
    class Rd {
      static ExpandRGBDTexture(dd) {
        const Od = dd._texture;
        if (!Od || !dd.isRGBD) return;
        const Fd = Od.Iq(),
          Rd = Fd.getCaps(),
          Xd = Od.isReady;
        let Kd = !1;
        Rd.textureHalfFloatRender && Rd.textureHalfFloatLinearFiltering ? (Kd = !0, Od.type = 2) : Rd.textureFloatRender && Rd.textureFloatLinearFiltering && (Kd = !0, Od.type = 1), Kd && (Od.isReady = !1, Od._isRGBD = !1, Od.invertY = !1);
        const hd = async () => {
          const Rd = Fd.isWebGPU,
            Xd = Rd ? 1 : 0;
          Od.isReady = !1, Rd ? await md.e(661).then((() => md(64889))) : await md.e(643).then((() => md(64894)));
          const Kd = new Wd.c("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, Fd, !1, void 0, Od.type, void 0, null, !1, void 0, Xd);
          Kd.externalTextureSamplerBinding = !0;
          const hd = Fd.createRenderTargetTexture(Od.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: Od.samplingMode,
            type: Od.type,
            format: 5
          });
          Kd.onEffectCreatedObservable.addOnce((md => {
            md.executeWhenCompiled((() => {
              Kd.onApply = dd => {
                dd._bindTexture("textureSampler", Od), dd.setFloat2("scale", 1, 1)
              }, dd.zV()?.postProcessManager.directRender([Kd], hd, !0), Fd.restoreDefaultFramebuffer(), Fd._releaseTexture(Od), Kd && Kd.dispose(), hd._swapAndDie(Od), Od.isReady = !0
            }))
          }))
        };
        Kd && (Xd ? hd() : dd.onLoadObservable.addOnce(hd))
      }
      static async EncodeTextureToRGBD(dd, Od) {
        let Wd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return Od.Iq().isWebGPU ? await md.e(662).then((() => md(64907))) : await md.e(644).then((() => md(64899))), await (0, Fd.e)("rgbdEncode", dd, Od, Wd, 1, 5)
      }
    }
  },
  64761: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      AsyncLoop: () => Wd.d,
      RegisterTools: () => Wd.e,
      Tools: () => Wd.g,
      className: () => Wd.j
    });
    var Wd = md(42029);
    (0, Wd.e)()
  },
  54270: (dd, Od, md) => {
    md.d(Od, {
      c: () => Fd
    });
    class Wd {
      constructor(dd) {
        this._pendingActions = new Array, this._workerInfos = dd.map((dd => ({
          workerPromise: Promise.resolve(dd),
          idle: !0
        })))
      }
      dispose() {
        for (const dd of this._workerInfos) dd.workerPromise.then((dd => {
          dd.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(dd) {
        this._executeOnIdleWorker(dd) || this._pendingActions.push(dd)
      }
      _executeOnIdleWorker(dd) {
        for (const Od of this._workerInfos)
          if (Od.idle) return this._execute(Od, dd), !0;
        return !1
      }
      _execute(dd, Od) {
        dd.idle = !1, dd.workerPromise.then((md => {
          Od(md, (() => {
            const Od = this._pendingActions.shift();
            Od ? this._execute(dd, Od) : dd.idle = !0
          }))
        }))
      }
    }
    class Fd extends Wd {
      constructor(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Fd.DefaultOptions;
        super([]), this._maxWorkers = dd, this._createWorkerAsync = Od, this._options = md
      }
      push(dd) {
        if (!this._executeOnIdleWorker(dd))
          if (this._workerInfos.length < this._maxWorkers) {
            const Od = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(Od), this._execute(Od, dd)
          } else this._pendingActions.push(dd)
      }
      _execute(dd, Od) {
        dd.timeoutId && (clearTimeout(dd.timeoutId), delete dd.timeoutId), super._execute(dd, ((md, Wd) => {
          Od(md, (() => {
            Wd(), dd.idle && (dd.timeoutId = setTimeout((() => {
              dd.workerPromise.then((dd => {
                dd.terminate()
              }));
              const Od = this._workerInfos.indexOf(dd); - 1 !== Od && this._workerInfos.splice(Od, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    Fd.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  },
  64791: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      AbstractThreeMfSerializer: () => CK,
      BVHExporter: () => BX,
      ContentTypeFileName: () => yK,
      DefaultXmlSerializerFormatOptions: () => DX,
      DefaultXmlSerializerNumberOptions: () => jX,
      EXT_lights_area: () => pF,
      EXT_mesh_gpu_instancing: () => zW,
      EXT_texture_avif: () => KX,
      EXT_texture_webp: () => WX,
      GLTF2Export: () => nW,
      GLTFData: () => vd,
      GetXmlFieldMeta: () => nX,
      GetXmlName: () => LX,
      IsQualifiedName: () => SX,
      KHR_draco_mesh_compression: () => dF,
      KHR_interactivity: () => oF,
      KHR_lights_punctual: () => hF,
      KHR_materials_anisotropy: () => aF,
      KHR_materials_clearcoat: () => BF,
      KHR_materials_coat: () => AF,
      KHR_materials_diffuse_roughness: () => LR,
      KHR_materials_diffuse_transmission: () => zF,
      KHR_materials_dispersion: () => eF,
      KHR_materials_emissive_strength: () => ZF,
      KHR_materials_fuzz: () => NR,
      KHR_materials_ior: () => dR,
      KHR_materials_iridescence: () => FR,
      KHR_materials_openpbr: () => jR,
      KHR_materials_sheen: () => hR,
      KHR_materials_specular: () => bR,
      KHR_materials_transmission: () => gR,
      KHR_materials_unlit: () => UR,
      KHR_materials_volume: () => sR,
      KHR_materials_volume_scatter: () => AR,
      KHR_texture_basisu: () => MR,
      KHR_texture_transform: () => lR,
      Known3mfRelationshipTypes: () => bK,
      KnownI3mfContentType: () => tK,
      Matrix3d: () => aK,
      MatrixFormatter: () => EK,
      ModelFileName: () => qK,
      NumberFormatter: () => lX,
      OBJExport: () => Xd,
      Object3dDirName: () => NK,
      OpenXmlContentTypesNamespace: () => vK,
      OpenXmlRelationshipsNamespace: () => QK,
      RegisterEXT_lights_area: () => gF,
      RegisterEXT_mesh_gpu_instancing: () => jW,
      RegisterEXT_texture_avif: () => vX,
      RegisterEXT_texture_webp: () => RX,
      RegisterKHR_draco_mesh_compression: () => mF,
      RegisterKHR_interactivity: () => qF,
      RegisterKHR_lights_punctual: () => QF,
      RegisterKHR_materials_anisotropy: () => JF,
      RegisterKHR_materials_clearcoat: () => sF,
      RegisterKHR_materials_coat: () => GF,
      RegisterKHR_materials_diffuse_roughness: () => zR,
      RegisterKHR_materials_diffuse_transmission: () => jF,
      RegisterKHR_materials_dispersion: () => lF,
      RegisterKHR_materials_emissive_strength: () => fF,
      RegisterKHR_materials_fuzz: () => HR,
      RegisterKHR_materials_ior: () => mR,
      RegisterKHR_materials_iridescence: () => XR,
      RegisterKHR_materials_openpbr: () => eR,
      RegisterKHR_materials_sheen: () => QR,
      RegisterKHR_materials_specular: () => pR,
      RegisterKHR_materials_transmission: () => aR,
      RegisterKHR_materials_unlit: () => BR,
      RegisterKHR_materials_volume: () => VR,
      RegisterKHR_materials_volume_scatter: () => GR,
      RegisterKHR_texture_basisu: () => OX,
      RegisterKHR_texture_transform: () => ZR,
      RelationshipDirName: () => oK,
      RelationshipFileName: () => HK,
      ResolveFormatOptions: () => IX,
      ResolveNumberOptions: () => eX,
      STLExport: () => QX,
      ST_ObjectType: () => hK,
      ST_Unit: () => KK,
      StringXmlWriter: () => WK,
      ThreeDimModelNamespace: () => RK,
      ThreeMf: () => ZK,
      ThreeMfBase: () => LK,
      ThreeMfBaseMaterials: () => nK,
      ThreeMfBuild: () => PK,
      ThreeMfComponent: () => GK,
      ThreeMfComponents: () => rK,
      ThreeMfComponentsBuilder: () => jK,
      ThreeMfContentType: () => pK,
      ThreeMfContentTypes: () => TK,
      ThreeMfDocument: () => wK,
      ThreeMfDocumentBuilder: () => lK,
      ThreeMfItem: () => zK,
      ThreeMfMaterialBuilder: () => eK,
      ThreeMfMesh: () => sK,
      ThreeMfMeshBuilder: () => DK,
      ThreeMfMeta: () => UK,
      ThreeMfMetadataGroup: () => xK,
      ThreeMfModel: () => JK,
      ThreeMfModelBuilder: () => IK,
      ThreeMfObject: () => SK,
      ThreeMfObjectBuilder: () => cK,
      ThreeMfRelationship: () => gK,
      ThreeMfRelationships: () => YK,
      ThreeMfResources: () => BK,
      ThreeMfSerializer: () => MK,
      ThreeMfSerializerGlobalConfiguration: () => kK,
      ThreeMfTriangle: () => AK,
      ThreeMfTriangles: () => iK,
      ThreeMfVertex: () => VK,
      ThreeMfVertices: () => uK,
      ToQualifiedString: () => cX,
      TokenType: () => OK,
      TriangleSetsNamespace: () => XK,
      USDZExportAsync: () => UX,
      Utf8XmlWriterToBytes: () => FK,
      XmlAttr: () => rX,
      XmlBuilder: () => mK,
      XmlElem: () => GX,
      XmlIgnore: () => AX,
      XmlName: () => iX,
      XmlNameToParts: () => zX,
      XmlSerializer: () => MX,
      _ConvertToGLTFPBRMetallicRoughness: () => Bm,
      _SolveMetallic: () => xm,
      __IGLTFExporterExtension: () => Kd
    });
    var Wd = md(38627),
      Fd = md(64761),
      Rd = md(42208);
    class Xd {
      static OBJ(dd, Od, md, Xd) {
        const Kd = [];
        let hd = 1,
          vd = 1;
        Od && (md || (md = "mat"), Kd.push("mtllib " + md + ".mtl"));
        for (let Qd = 0; Qd < dd.length; Qd++) {
          const md = dd[Qd],
            td = md.name || `mesh${Qd}}`;
          Kd.push(`o ${td}`);
          let od = null;
          if (Xd) {
            const dd = md.computeWorldMatrix(!0);
            od = new Wd.Matrix, dd.invertToRef(od), md.bakeTransformIntoVertices(dd)
          }
          if (Od) {
            const dd = md.material;
            dd && Kd.push("usemtl " + dd.id)
          }
          const Nd = md.geometry;
          if (!Nd) {
            Fd.Tools.Warn("No geometry is present on the mesh");
            continue
          }
          const qd = Nd.getVerticesData("position"),
            Hd = Nd.getVerticesData("normal"),
            yd = Nd.getVerticesData("uv"),
            bd = Nd.jRd();
          let Td = 0,
            pd = 0;
          if (!qd || !bd) {
            Fd.Tools.Warn("There are no position vertices or indices on the mesh!");
            continue
          }
          const Yd = dd[0].zV().useRightHandedSystem ? 1 : -1;
          for (let dd = 0; dd < qd.length; dd += 3) Kd.push("v " + qd[dd] * Yd + " " + qd[dd + 1] + " " + qd[dd + 2]), Td++;
          if (null != Hd)
            for (let dd = 0; dd < Hd.length; dd += 3) Kd.push("vn " + Hd[dd] * Yd + " " + Hd[dd + 1] + " " + Hd[dd + 2]);
          if (null != yd)
            for (let dd = 0; dd < yd.length; dd += 2) Kd.push("vt " + yd[dd] + " " + yd[dd + 1]), pd++;
          const gd = ["", "", ""],
            wd = (md.material || md.zV().defaultMaterial)._getEffectiveOrientation(md),
            [Ed, Jd] = wd === Rd.b.ClockWiseSideOrientation ? [2, 1] : [1, 2];
          for (let dd = 0; dd < bd.length; dd += 3) {
            const Od = [String(bd[dd] + hd), String(bd[dd + Ed] + hd), String(bd[dd + Jd] + hd)],
              md = [String(bd[dd] + vd), String(bd[dd + Ed] + vd), String(bd[dd + Jd] + vd)],
              Wd = Od,
              Fd = null != yd ? md : gd,
              Rd = null != Hd ? Od : gd;
            Kd.push("f " + Wd[0] + "/" + Fd[0] + "/" + Rd[0] + " " + Wd[1] + "/" + Fd[1] + "/" + Rd[1] + " " + Wd[2] + "/" + Fd[2] + "/" + Rd[2])
          }
          Xd && od && md.bakeTransformIntoVertices(od), hd += Td, vd += pd
        }
        return Kd.join("\n")
      }
      static MTL(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
        const md = [],
          Wd = dd.material;
        md.push("newmtl " + Od), md.push("  Ns " + Wd.specularPower.toFixed(4)), md.push("  Ni 1.5000"), md.push("  d " + Wd.alpha.toFixed(4)), md.push("  Tr 0.0000"), md.push("  Tf 1.0000 1.0000 1.0000"), md.push("  illum 2"), md.push("  Ka " + Wd.ambientColor.r.toFixed(4) + " " + Wd.ambientColor.g.toFixed(4) + " " + Wd.ambientColor.b.toFixed(4)), md.push("  Kd " + Wd.diffuseColor.r.toFixed(4) + " " + Wd.diffuseColor.g.toFixed(4) + " " + Wd.diffuseColor.b.toFixed(4)), md.push("  Ks " + Wd.specularColor.r.toFixed(4) + " " + Wd.specularColor.g.toFixed(4) + " " + Wd.specularColor.b.toFixed(4)), md.push("  Ke " + Wd.emissiveColor.r.toFixed(4) + " " + Wd.emissiveColor.g.toFixed(4) + " " + Wd.emissiveColor.b.toFixed(4));
        Wd.ambientTexture && md.push("  map_Ka " + Wd.ambientTexture.name), Wd.diffuseTexture && md.push("  map_Kd " + Wd.diffuseTexture.name), Wd.specularTexture && md.push("  map_Ks " + Wd.specularTexture.name), Wd.bumpTexture && md.push("  map_bump -imfchan z " + Wd.bumpTexture.name), Wd.opacityTexture && md.push("  map_d " + Wd.opacityTexture.name);
        return md.join("\n")
      }
    }
    var Kd = 0,
      hd = md(54047);
    class vd {
      constructor() {
        this.files = {}
      }
      get glTFFiles() {
        return this.files
      }
      downloadFiles() {
        for (const dd in this.files) {
          const Od = this.files[dd],
            md = new Blob([Od], {
              type: (0, hd.c)(dd)
            });
          Fd.Tools.Download(md, dd)
        }
      }
    }
    var Qd = md(43122),
      td = md(43061),
      od = md(54040),
      Nd = md(43076),
      qd = md(41756),
      Hd = md(38651),
      yd = md(38736),
      bd = md(38663);
    const Td = bd.HighestCommonFactor,
      pd = {
        ...bd,
        TwoPi: 2 * Math.PI,
        Sign: Math.sign,
        Log2: Math.log2,
        HCF: Td
      };
    var Yd = md(54229),
      gd = md(43101),
      wd = md(54016),
      Ed = md(54019),
      Jd = md(54245);
    (0, Jd.RegisterDumpTools)();
    var Ud = md(41922),
      xd = md(41931),
      Bd = md(40262),
      Sd = md(42041),
      sd = md(42412),
      ud = md(54227);
    let Vd = 0;
    const Ad = (dd, Od, md, Wd) => {
        if (!dd[md]) {
          const Fd = dd.useDelayedTextureLoading;
          dd.useDelayedTextureLoading = !1;
          const Rd = dd._blockEntityCollection;
          dd._blockEntityCollection = !1;
          const Xd = sd.f.CreateFromBase64String(Od, Wd + Vd++, dd, !0, !1, sd.f.BILINEAR_SAMPLINGMODE);
          dd._blockEntityCollection = Rd;
          const Kd = dd.Iq().getLoadedTexturesCache(),
            hd = Kd.indexOf(Xd.getInternalTexture()); - 1 !== hd && Kd.splice(hd, 1), Xd.isRGBD = !0, Xd.wrapU = sd.f.CLAMP_ADDRESSMODE, Xd.wrapV = sd.f.CLAMP_ADDRESSMODE, dd[md] = Xd, dd.useDelayedTextureLoading = Fd, ud.c.ExpandRGBDTexture(Xd);
          const vd = dd.Iq().eq.add((() => {
            Xd.isRGBD = !0;
            const Od = dd.onBeforeRenderObservable.add((() => {
              Xd.isReady() && (dd.onBeforeRenderObservable.remove(Od), ud.c.ExpandRGBDTexture(Xd))
            }))
          }));
          dd.cV.add((() => {
            dd.Iq().eq.remove(vd)
          }))
        }
        return dd[md]
      },
      rd = dd => Ad(dd, "data:image/png;base64,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", "environmentBRDFTexture", "EnvironmentBRDFTexture"),
      Gd = dd => Ad(dd, "data:image/png;base64,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", "environmentFuzzBRDFTexture", "EnvironmentFuzzBRDFTexture"),
      nd = dd => Ad(dd, "data:image/png;base64,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", "openPBREnvironmentBRDFTexture", "OpenPBREnvironmentBRDFTexture");
    var Ld = md(42020),
      Pd = md(38636),
      zd = md(42075),
      cd = md(42199),
      jd = md(42283);
    class Dd extends cd.b {
      constructor() {
        super(...arguments), this.BRDF_V_HEIGHT_CORRELATED = !1, this.MS_BRDF_ENERGY_CONSERVATION = !1, this.SPHERICAL_HARMONICS = !1, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !1, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 0, this.CONDUCTOR_SPECULAR_MODEL = 0
      }
    }
    let ed = (() => {
      var dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd, vd;
      let Qd, td, od, Nd, qd, Hd, yd, bd, Td, pd = jd.e,
        Yd = [],
        gd = [],
        wd = [],
        Ed = [],
        Jd = [],
        Bd = [],
        Sd = [],
        sd = [],
        ud = [],
        Vd = [],
        Ad = [],
        rd = [],
        Gd = [],
        nd = [],
        Ld = [],
        Pd = [],
        zd = [],
        cd = [];
      return dd = class extends pd {
        get useEnergyConservation() {
          return (0, Ud.c)(this, Od, "f")
        }
        set useEnergyConservation(dd) {
          (0, Ud.e)(this, Od, dd, "f")
        }
        get useSmithVisibilityHeightCorrelated() {
          return (0, Ud.c)(this, md, "f")
        }
        set useSmithVisibilityHeightCorrelated(dd) {
          (0, Ud.e)(this, md, dd, "f")
        }
        get useSphericalHarmonics() {
          return (0, Ud.c)(this, Wd, "f")
        }
        set useSphericalHarmonics(dd) {
          (0, Ud.e)(this, Wd, dd, "f")
        }
        get useSpecularGlossinessInputEnergyConservation() {
          return (0, Ud.c)(this, Fd, "f")
        }
        set useSpecularGlossinessInputEnergyConservation(dd) {
          (0, Ud.e)(this, Fd, dd, "f")
        }
        get mixIblRadianceWithIrradiance() {
          return (0, Ud.c)(this, Rd, "f")
        }
        set mixIblRadianceWithIrradiance(dd) {
          (0, Ud.e)(this, Rd, dd, "f")
        }
        get useLegacySpecularEnergyConservation() {
          return (0, Ud.c)(this, Xd, "f")
        }
        set useLegacySpecularEnergyConservation(dd) {
          (0, Ud.e)(this, Xd, dd, "f")
        }
        get baseDiffuseModel() {
          return (0, Ud.c)(this, Kd, "f")
        }
        set baseDiffuseModel(dd) {
          (0, Ud.e)(this, Kd, dd, "f")
        }
        get dielectricSpecularModel() {
          return (0, Ud.c)(this, hd, "f")
        }
        set dielectricSpecularModel(dd) {
          (0, Ud.e)(this, hd, dd, "f")
        }
        get conductorSpecularModel() {
          return (0, Ud.c)(this, vd, "f")
        }
        set conductorSpecularModel(dd) {
          (0, Ud.e)(this, vd, dd, "f")
        }
        _markAllSubMeshesAsMiscDirty() {
          this._internalMarkAllSubMeshesAsMiscDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(Qd) {
          let td = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(Qd, "PBRBRDF", 90, new Dd, td), this._useEnergyConservation = dd.DEFAULT_USE_ENERGY_CONSERVATION, Od.set(this, (0, Ud.k)(this, Yd, dd.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, Ud.k)(this, gd), dd.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED), md.set(this, (0, Ud.k)(this, wd, dd.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED)), this._useSphericalHarmonics = ((0, Ud.k)(this, Ed), dd.DEFAULT_USE_SPHERICAL_HARMONICS), Wd.set(this, (0, Ud.k)(this, Jd, dd.DEFAULT_USE_SPHERICAL_HARMONICS)), this._useSpecularGlossinessInputEnergyConservation = ((0, Ud.k)(this, Bd), dd.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION), Fd.set(this, (0, Ud.k)(this, Sd, dd.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION)), this._mixIblRadianceWithIrradiance = ((0, Ud.k)(this, sd), dd.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE), Rd.set(this, (0, Ud.k)(this, ud, dd.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE)), this._useLegacySpecularEnergyConservation = ((0, Ud.k)(this, Vd), dd.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION), Xd.set(this, (0, Ud.k)(this, Ad, dd.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION)), this._baseDiffuseModel = ((0, Ud.k)(this, rd), dd.DEFAULT_DIFFUSE_MODEL), Kd.set(this, (0, Ud.k)(this, Gd, dd.DEFAULT_DIFFUSE_MODEL)), this._dielectricSpecularModel = ((0, Ud.k)(this, nd), dd.DEFAULT_DIELECTRIC_SPECULAR_MODEL), hd.set(this, (0, Ud.k)(this, Ld, dd.DEFAULT_DIELECTRIC_SPECULAR_MODEL)), this._conductorSpecularModel = ((0, Ud.k)(this, Pd), dd.DEFAULT_CONDUCTOR_SPECULAR_MODEL), vd.set(this, (0, Ud.k)(this, zd, dd.DEFAULT_CONDUCTOR_SPECULAR_MODEL)), this._internalMarkAllSubMeshesAsMiscDirty = (0, Ud.k)(this, cd), this._internalMarkAllSubMeshesAsMiscDirty = Qd._dirtyCallbacks[16], this._enable(!0)
        }
        prepareDefines(dd) {
          dd.BRDF_V_HEIGHT_CORRELATED = this._useSmithVisibilityHeightCorrelated, dd.MS_BRDF_ENERGY_CONSERVATION = this._useEnergyConservation && this._useSmithVisibilityHeightCorrelated, dd.SPHERICAL_HARMONICS = this._useSphericalHarmonics, dd.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = this._useSpecularGlossinessInputEnergyConservation, dd.MIX_IBL_RADIANCE_WITH_IRRADIANCE = this._mixIblRadianceWithIrradiance && !this._material._disableLighting, dd.LEGACY_SPECULAR_ENERGY_CONSERVATION = this._useLegacySpecularEnergyConservation, dd.BASE_DIFFUSE_MODEL = this._baseDiffuseModel, dd.DIELECTRIC_SPECULAR_MODEL = this._dielectricSpecularModel, dd.CONDUCTOR_SPECULAR_MODEL = this._conductorSpecularModel
        }
        getClassName() {
          return "PBRBRDFConfiguration"
        }
      }, Od = new WeakMap, md = new WeakMap, Wd = new WeakMap, Fd = new WeakMap, Rd = new WeakMap, Xd = new WeakMap, Kd = new WeakMap, hd = new WeakMap, vd = new WeakMap, (() => {
        const Od = "function" === typeof Symbol && Symbol.metadata ? Object.create(pd[Symbol.metadata] ?? null) : void 0;
        Qd = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsMiscDirty")], td = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsMiscDirty")], od = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsMiscDirty")], Nd = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsMiscDirty")], qd = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsMiscDirty")], Hd = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsMiscDirty")], yd = [(0, xd.E)("baseDiffuseModel"), (0, xd.g)("_markAllSubMeshesAsMiscDirty")], bd = [(0, xd.E)("dielectricSpecularModel"), (0, xd.g)("_markAllSubMeshesAsMiscDirty")], Td = [(0, xd.E)("conductorSpecularModel"), (0, xd.g)("_markAllSubMeshesAsMiscDirty")], (0, Ud.h)(dd, null, Qd, {
          kind: "accessor",
          name: "useEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: dd => "useEnergyConservation" in dd,
            get: dd => dd.useEnergyConservation,
            set: (dd, Od) => {
              dd.useEnergyConservation = Od
            }
          },
          metadata: Od
        }, Yd, gd), (0, Ud.h)(dd, null, td, {
          kind: "accessor",
          name: "useSmithVisibilityHeightCorrelated",
          static: !1,
          private: !1,
          access: {
            has: dd => "useSmithVisibilityHeightCorrelated" in dd,
            get: dd => dd.useSmithVisibilityHeightCorrelated,
            set: (dd, Od) => {
              dd.useSmithVisibilityHeightCorrelated = Od
            }
          },
          metadata: Od
        }, wd, Ed), (0, Ud.h)(dd, null, od, {
          kind: "accessor",
          name: "useSphericalHarmonics",
          static: !1,
          private: !1,
          access: {
            has: dd => "useSphericalHarmonics" in dd,
            get: dd => dd.useSphericalHarmonics,
            set: (dd, Od) => {
              dd.useSphericalHarmonics = Od
            }
          },
          metadata: Od
        }, Jd, Bd), (0, Ud.h)(dd, null, Nd, {
          kind: "accessor",
          name: "useSpecularGlossinessInputEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: dd => "useSpecularGlossinessInputEnergyConservation" in dd,
            get: dd => dd.useSpecularGlossinessInputEnergyConservation,
            set: (dd, Od) => {
              dd.useSpecularGlossinessInputEnergyConservation = Od
            }
          },
          metadata: Od
        }, Sd, sd), (0, Ud.h)(dd, null, qd, {
          kind: "accessor",
          name: "mixIblRadianceWithIrradiance",
          static: !1,
          private: !1,
          access: {
            has: dd => "mixIblRadianceWithIrradiance" in dd,
            get: dd => dd.mixIblRadianceWithIrradiance,
            set: (dd, Od) => {
              dd.mixIblRadianceWithIrradiance = Od
            }
          },
          metadata: Od
        }, ud, Vd), (0, Ud.h)(dd, null, Hd, {
          kind: "accessor",
          name: "useLegacySpecularEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: dd => "useLegacySpecularEnergyConservation" in dd,
            get: dd => dd.useLegacySpecularEnergyConservation,
            set: (dd, Od) => {
              dd.useLegacySpecularEnergyConservation = Od
            }
          },
          metadata: Od
        }, Ad, rd), (0, Ud.h)(dd, null, yd, {
          kind: "accessor",
          name: "baseDiffuseModel",
          static: !1,
          private: !1,
          access: {
            has: dd => "baseDiffuseModel" in dd,
            get: dd => dd.baseDiffuseModel,
            set: (dd, Od) => {
              dd.baseDiffuseModel = Od
            }
          },
          metadata: Od
        }, Gd, nd), (0, Ud.h)(dd, null, bd, {
          kind: "accessor",
          name: "dielectricSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: dd => "dielectricSpecularModel" in dd,
            get: dd => dd.dielectricSpecularModel,
            set: (dd, Od) => {
              dd.dielectricSpecularModel = Od
            }
          },
          metadata: Od
        }, Ld, Pd), (0, Ud.h)(dd, null, Td, {
          kind: "accessor",
          name: "conductorSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: dd => "conductorSpecularModel" in dd,
            get: dd => dd.conductorSpecularModel,
            set: (dd, Od) => {
              dd.conductorSpecularModel = Od
            }
          },
          metadata: Od
        }, zd, cd), Od && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Od
        })
      })(), dd.DEFAULT_USE_ENERGY_CONSERVATION = !0, dd.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED = !0, dd.DEFAULT_USE_SPHERICAL_HARMONICS = !0, dd.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION = !0, dd.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, dd.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION = !0, dd.DEFAULT_DIFFUSE_MODEL = 0, dd.DEFAULT_DIELECTRIC_SPECULAR_MODEL = 0, dd.DEFAULT_CONDUCTOR_SPECULAR_MODEL = 0, dd
    })();
    var Id = md(42190),
      ld = md(38741),
      Cd = md(42197),
      Zd = md(42046),
      kd = md(42262),
      fd = md(42254),
      Md = md(42271),
      dO = md(42242);
    class OO extends cd.b {
      constructor() {
        super(...arguments), this.CLEARCOAT = !1, this.CLEARCOAT_DEFAULTIOR = !1, this.CLEARCOAT_TEXTURE = !1, this.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this.CLEARCOAT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, this.CLEARCOAT_BUMP = !1, this.CLEARCOAT_BUMPDIRECTUV = 0, this.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, this.CLEARCOAT_REMAP_F0 = !1, this.CLEARCOAT_TINT = !1, this.CLEARCOAT_TINT_TEXTURE = !1, this.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TINT_GAMMATEXTURE = !1
      }
    }
    let mO = (() => {
      var dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd, vd;
      let Qd, td, od, Nd, qd, Hd, yd, bd, Td, pd, Yd, gd, wd, Ed, Jd = jd.e,
        Bd = [],
        Sd = [],
        sd = [],
        ud = [],
        Vd = [],
        Ad = [],
        rd = [],
        Gd = [],
        nd = [],
        Ld = [],
        Pd = [],
        zd = [],
        cd = [],
        Dd = [],
        ed = [],
        Id = [],
        Cd = [],
        Zd = [],
        kd = [],
        Md = [],
        mO = [],
        WO = [],
        FO = [],
        RO = [],
        XO = [],
        KO = [],
        hO = [],
        vO = [];
      return dd = class extends Jd {
        get isEnabled() {
          return (0, Ud.c)(this, Od, "f")
        }
        set isEnabled(dd) {
          (0, Ud.e)(this, Od, dd, "f")
        }
        get indexOfRefraction() {
          return (0, Ud.c)(this, md, "f")
        }
        set indexOfRefraction(dd) {
          (0, Ud.e)(this, md, dd, "f")
        }
        get texture() {
          return (0, Ud.c)(this, Wd, "f")
        }
        set texture(dd) {
          (0, Ud.e)(this, Wd, dd, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, Ud.c)(this, Fd, "f")
        }
        set useRoughnessFromMainTexture(dd) {
          (0, Ud.e)(this, Fd, dd, "f")
        }
        get textureRoughness() {
          return (0, Ud.c)(this, Rd, "f")
        }
        set textureRoughness(dd) {
          (0, Ud.e)(this, Rd, dd, "f")
        }
        get remapF0OnInterfaceChange() {
          return (0, Ud.c)(this, Xd, "f")
        }
        set remapF0OnInterfaceChange(dd) {
          (0, Ud.e)(this, Xd, dd, "f")
        }
        get bumpTexture() {
          return (0, Ud.c)(this, Kd, "f")
        }
        set bumpTexture(dd) {
          (0, Ud.e)(this, Kd, dd, "f")
        }
        get isTintEnabled() {
          return (0, Ud.c)(this, hd, "f")
        }
        set isTintEnabled(dd) {
          (0, Ud.e)(this, hd, dd, "f")
        }
        get tintTexture() {
          return (0, Ud.c)(this, vd, "f")
        }
        set tintTexture(dd) {
          (0, Ud.e)(this, vd, dd, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(Qd) {
          let td = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(Qd, "PBRClearCoat", 100, new OO, td), this._isEnabled = !1, Od.set(this, (0, Ud.k)(this, Bd, !1)), this.intensity = ((0, Ud.k)(this, Sd), (0, Ud.k)(this, sd, 1)), this.roughness = ((0, Ud.k)(this, ud), (0, Ud.k)(this, Vd, 0)), this._indexOfRefraction = ((0, Ud.k)(this, Ad), dd._DefaultIndexOfRefraction), md.set(this, (0, Ud.k)(this, rd, dd._DefaultIndexOfRefraction)), this._texture = ((0, Ud.k)(this, Gd), null), Wd.set(this, (0, Ud.k)(this, nd, null)), this._useRoughnessFromMainTexture = ((0, Ud.k)(this, Ld), !0), Fd.set(this, (0, Ud.k)(this, Pd, !0)), this._textureRoughness = ((0, Ud.k)(this, zd), null), Rd.set(this, (0, Ud.k)(this, cd, null)), this._remapF0OnInterfaceChange = ((0, Ud.k)(this, Dd), !0), Xd.set(this, (0, Ud.k)(this, ed, !0)), this._bumpTexture = ((0, Ud.k)(this, Id), null), Kd.set(this, (0, Ud.k)(this, Cd, null)), this._isTintEnabled = ((0, Ud.k)(this, Zd), !1), hd.set(this, (0, Ud.k)(this, kd, !1)), this.tintColor = ((0, Ud.k)(this, Md), (0, Ud.k)(this, mO, ld.d.White())), this.tintColorAtDistance = ((0, Ud.k)(this, WO), (0, Ud.k)(this, FO, 1)), this.tintThickness = ((0, Ud.k)(this, RO), (0, Ud.k)(this, XO, 1)), this._tintTexture = ((0, Ud.k)(this, KO), null), vd.set(this, (0, Ud.k)(this, hO, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Ud.k)(this, vO), this._internalMarkAllSubMeshesAsTexturesDirty = Qd._dirtyCallbacks[1]
        }
        isReadyForSubMesh(dd, Od, md) {
          if (!this._isEnabled) return !0;
          const Wd = this._material._disableBumpMap;
          if (dd._areTexturesDirty && Od.texturesEnabled) {
            if (this._texture && fd.b.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && fd.b.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
            if (md.getCaps().standardDerivatives && this._bumpTexture && fd.b.ClearCoatBumpTextureEnabled && !Wd && !this._bumpTexture.isReady()) return !1;
            if (this._isTintEnabled && this._tintTexture && fd.b.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(Od, md) {
          this._isEnabled ? (Od.CLEARCOAT = !0, Od.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, Od.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, Od._areTexturesDirty && md.texturesEnabled && (this._texture && fd.b.ClearCoatTextureEnabled ? (0, dO.M)(this._texture, Od, "CLEARCOAT_TEXTURE") : Od.CLEARCOAT_TEXTURE = !1, this._textureRoughness && fd.b.ClearCoatTextureEnabled ? (0, dO.M)(this._textureRoughness, Od, "CLEARCOAT_TEXTURE_ROUGHNESS") : Od.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this._bumpTexture && fd.b.ClearCoatBumpTextureEnabled ? (0, dO.M)(this._bumpTexture, Od, "CLEARCOAT_BUMP") : Od.CLEARCOAT_BUMP = !1, Od.CLEARCOAT_DEFAULTIOR = this._indexOfRefraction === dd._DefaultIndexOfRefraction, this._isTintEnabled ? (Od.CLEARCOAT_TINT = !0, this._tintTexture && fd.b.ClearCoatTintTextureEnabled ? ((0, dO.M)(this._tintTexture, Od, "CLEARCOAT_TINT_TEXTURE"), Od.CLEARCOAT_TINT_GAMMATEXTURE = this._tintTexture.gammaSpace) : Od.CLEARCOAT_TINT_TEXTURE = !1) : (Od.CLEARCOAT_TINT = !1, Od.CLEARCOAT_TINT_TEXTURE = !1))) : (Od.CLEARCOAT = !1, Od.CLEARCOAT_TEXTURE = !1, Od.CLEARCOAT_TEXTURE_ROUGHNESS = !1, Od.CLEARCOAT_BUMP = !1, Od.CLEARCOAT_TINT = !1, Od.CLEARCOAT_TINT_TEXTURE = !1, Od.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, Od.CLEARCOAT_DEFAULTIOR = !1, Od.CLEARCOAT_TEXTUREDIRECTUV = 0, Od.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, Od.CLEARCOAT_BUMPDIRECTUV = 0, Od.CLEARCOAT_REMAP_F0 = !1, Od.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, Od.CLEARCOAT_TINT_GAMMATEXTURE = !1)
        }
        bindForSubMesh(dd, Od, md, Wd) {
          if (!this._isEnabled) return;
          const Fd = Wd.materialDefines,
            Rd = this._material.isFrozen,
            Xd = this._material._disableBumpMap,
            Kd = this._material._invertNormalMapX,
            hd = this._material._invertNormalMapY;
          if (!dd.useUbo || !Rd || !dd.isSync) {
            (this._texture || this._textureRoughness) && fd.b.ClearCoatTextureEnabled && (dd.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, dO.q)(this._texture, dd, "clearCoat"), this._textureRoughness && !Fd.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, dO.q)(this._textureRoughness, dd, "clearCoatRoughness")), this._bumpTexture && md.getCaps().standardDerivatives && fd.b.ClearCoatTextureEnabled && !Xd && (dd.updateFloat2("vClearCoatBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level), (0, dO.q)(this._bumpTexture, dd, "clearCoatBump"), Od._mirroredCameraPosition ? dd.updateFloat2("vClearCoatTangentSpaceParams", Kd ? 1 : -1, hd ? 1 : -1) : dd.updateFloat2("vClearCoatTangentSpaceParams", Kd ? -1 : 1, hd ? -1 : 1)), this._tintTexture && fd.b.ClearCoatTintTextureEnabled && (dd.updateFloat2("vClearCoatTintInfos", this._tintTexture.coordinatesIndex, this._tintTexture.level), (0, dO.q)(this._tintTexture, dd, "clearCoatTint")), dd.updateFloat2("vClearCoatParams", this.intensity, this.roughness);
            const Wd = 1 - this._indexOfRefraction,
              Rd = 1 + this._indexOfRefraction,
              vd = Math.pow(-Wd / Rd, 2),
              Qd = 1 / this._indexOfRefraction;
            dd.updateFloat4("vClearCoatRefractionParams", vd, Qd, Wd, Rd), this._isTintEnabled && (dd.updateFloat4("vClearCoatTintParams", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintThickness)), dd.updateFloat("clearCoatColorAtDistance", Math.max(1e-5, this.tintColorAtDistance)))
          }
          Od.texturesEnabled && (this._texture && fd.b.ClearCoatTextureEnabled && dd.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !Fd.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && fd.b.ClearCoatTextureEnabled && dd.setTexture("clearCoatRoughnessSampler", this._textureRoughness), this._bumpTexture && md.getCaps().standardDerivatives && fd.b.ClearCoatBumpTextureEnabled && !Xd && dd.setTexture("clearCoatBumpSampler", this._bumpTexture), this._isTintEnabled && this._tintTexture && fd.b.ClearCoatTintTextureEnabled && dd.setTexture("clearCoatTintSampler", this._tintTexture))
        }
        hasTexture(dd) {
          return this._texture === dd || (this._textureRoughness === dd || (this._bumpTexture === dd || this._tintTexture === dd))
        }
        getActiveTextures(dd) {
          this._texture && dd.push(this._texture), this._textureRoughness && dd.push(this._textureRoughness), this._bumpTexture && dd.push(this._bumpTexture), this._tintTexture && dd.push(this._tintTexture)
        }
        getAnimatables(dd) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && dd.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && dd.push(this._textureRoughness), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && dd.push(this._bumpTexture), this._tintTexture && this._tintTexture.animations && this._tintTexture.animations.length > 0 && dd.push(this._tintTexture)
        }
        dispose(dd) {
          dd && (this._texture?.dispose(), this._textureRoughness?.dispose(), this._bumpTexture?.dispose(), this._tintTexture?.dispose())
        }
        getClassName() {
          return "PBRClearCoatConfiguration"
        }
        addFallbacks(dd, Od, md) {
          return dd.CLEARCOAT_BUMP && Od.addFallback(md++, "CLEARCOAT_BUMP"), dd.CLEARCOAT_TINT && Od.addFallback(md++, "CLEARCOAT_TINT"), dd.CLEARCOAT && Od.addFallback(md++, "CLEARCOAT"), md
        }
        getSamplers(dd) {
          dd.push("clearCoatSampler", "clearCoatRoughnessSampler", "clearCoatBumpSampler", "clearCoatTintSampler")
        }
        getUniforms() {
          return {
            ubo: [{
              name: "vClearCoatParams",
              size: 2,
              type: "vec2"
            }, {
              name: "vClearCoatRefractionParams",
              size: 4,
              type: "vec4"
            }, {
              name: "vClearCoatInfos",
              size: 4,
              type: "vec4"
            }, {
              name: "clearCoatMatrix",
              size: 16,
              type: "mat4"
            }, {
              name: "clearCoatRoughnessMatrix",
              size: 16,
              type: "mat4"
            }, {
              name: "vClearCoatBumpInfos",
              size: 2,
              type: "vec2"
            }, {
              name: "vClearCoatTangentSpaceParams",
              size: 2,
              type: "vec2"
            }, {
              name: "clearCoatBumpMatrix",
              size: 16,
              type: "mat4"
            }, {
              name: "vClearCoatTintParams",
              size: 4,
              type: "vec4"
            }, {
              name: "clearCoatColorAtDistance",
              size: 1,
              type: "float"
            }, {
              name: "vClearCoatTintInfos",
              size: 2,
              type: "vec2"
            }, {
              name: "clearCoatTintMatrix",
              size: 16,
              type: "mat4"
            }]
          }
        }
      }, Od = new WeakMap, md = new WeakMap, Wd = new WeakMap, Fd = new WeakMap, Rd = new WeakMap, Xd = new WeakMap, Kd = new WeakMap, hd = new WeakMap, vd = new WeakMap, (() => {
        const Od = "function" === typeof Symbol && Symbol.metadata ? Object.create(Jd[Symbol.metadata] ?? null) : void 0;
        Qd = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], td = [(0, xd.E)()], od = [(0, xd.E)()], Nd = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], qd = [(0, xd.x)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], Hd = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], yd = [(0, xd.x)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], bd = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], Td = [(0, xd.x)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], pd = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], Yd = [(0, xd.m)()], gd = [(0, xd.E)()], wd = [(0, xd.E)()], Ed = [(0, xd.x)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], (0, Ud.h)(dd, null, Qd, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: dd => "isEnabled" in dd,
            get: dd => dd.isEnabled,
            set: (dd, Od) => {
              dd.isEnabled = Od
            }
          },
          metadata: Od
        }, Bd, Sd), (0, Ud.h)(dd, null, Nd, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: dd => "indexOfRefraction" in dd,
            get: dd => dd.indexOfRefraction,
            set: (dd, Od) => {
              dd.indexOfRefraction = Od
            }
          },
          metadata: Od
        }, rd, Gd), (0, Ud.h)(dd, null, qd, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: dd => "texture" in dd,
            get: dd => dd.texture,
            set: (dd, Od) => {
              dd.texture = Od
            }
          },
          metadata: Od
        }, nd, Ld), (0, Ud.h)(dd, null, Hd, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "useRoughnessFromMainTexture" in dd,
            get: dd => dd.useRoughnessFromMainTexture,
            set: (dd, Od) => {
              dd.useRoughnessFromMainTexture = Od
            }
          },
          metadata: Od
        }, Pd, zd), (0, Ud.h)(dd, null, yd, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: dd => "textureRoughness" in dd,
            get: dd => dd.textureRoughness,
            set: (dd, Od) => {
              dd.textureRoughness = Od
            }
          },
          metadata: Od
        }, cd, Dd), (0, Ud.h)(dd, null, bd, {
          kind: "accessor",
          name: "remapF0OnInterfaceChange",
          static: !1,
          private: !1,
          access: {
            has: dd => "remapF0OnInterfaceChange" in dd,
            get: dd => dd.remapF0OnInterfaceChange,
            set: (dd, Od) => {
              dd.remapF0OnInterfaceChange = Od
            }
          },
          metadata: Od
        }, ed, Id), (0, Ud.h)(dd, null, Td, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "bumpTexture" in dd,
            get: dd => dd.bumpTexture,
            set: (dd, Od) => {
              dd.bumpTexture = Od
            }
          },
          metadata: Od
        }, Cd, Zd), (0, Ud.h)(dd, null, pd, {
          kind: "accessor",
          name: "isTintEnabled",
          static: !1,
          private: !1,
          access: {
            has: dd => "isTintEnabled" in dd,
            get: dd => dd.isTintEnabled,
            set: (dd, Od) => {
              dd.isTintEnabled = Od
            }
          },
          metadata: Od
        }, kd, Md), (0, Ud.h)(dd, null, Ed, {
          kind: "accessor",
          name: "tintTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "tintTexture" in dd,
            get: dd => dd.tintTexture,
            set: (dd, Od) => {
              dd.tintTexture = Od
            }
          },
          metadata: Od
        }, hO, vO), (0, Ud.h)(null, null, td, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: dd => "intensity" in dd,
            get: dd => dd.intensity,
            set: (dd, Od) => {
              dd.intensity = Od
            }
          },
          metadata: Od
        }, sd, ud), (0, Ud.h)(null, null, od, {
          kind: "field",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: dd => "roughness" in dd,
            get: dd => dd.roughness,
            set: (dd, Od) => {
              dd.roughness = Od
            }
          },
          metadata: Od
        }, Vd, Ad), (0, Ud.h)(null, null, Yd, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: dd => "tintColor" in dd,
            get: dd => dd.tintColor,
            set: (dd, Od) => {
              dd.tintColor = Od
            }
          },
          metadata: Od
        }, mO, WO), (0, Ud.h)(null, null, gd, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: dd => "tintColorAtDistance" in dd,
            get: dd => dd.tintColorAtDistance,
            set: (dd, Od) => {
              dd.tintColorAtDistance = Od
            }
          },
          metadata: Od
        }, FO, RO), (0, Ud.h)(null, null, wd, {
          kind: "field",
          name: "tintThickness",
          static: !1,
          private: !1,
          access: {
            has: dd => "tintThickness" in dd,
            get: dd => dd.tintThickness,
            set: (dd, Od) => {
              dd.tintThickness = Od
            }
          },
          metadata: Od
        }, XO, KO), Od && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Od
        })
      })(), dd._DefaultIndexOfRefraction = 1.5, dd
    })();
    class WO extends cd.b {
      constructor() {
        super(...arguments), this.IRIDESCENCE = !1, this.IRIDESCENCE_TEXTURE = !1, this.IRIDESCENCE_TEXTUREDIRECTUV = 0, this.IRIDESCENCE_THICKNESS_TEXTURE = !1, this.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0
      }
    }
    let FO = (() => {
      var dd, Od, md, Wd;
      let Fd, Rd, Xd, Kd, hd, vd, Qd, td = jd.e,
        od = [],
        Nd = [],
        qd = [],
        Hd = [],
        yd = [],
        bd = [],
        Td = [],
        pd = [],
        Yd = [],
        gd = [],
        wd = [],
        Ed = [],
        Jd = [],
        Bd = [];
      return dd = class extends td {
        get isEnabled() {
          return (0, Ud.c)(this, Od, "f")
        }
        set isEnabled(dd) {
          (0, Ud.e)(this, Od, dd, "f")
        }
        get texture() {
          return (0, Ud.c)(this, md, "f")
        }
        set texture(dd) {
          (0, Ud.e)(this, md, dd, "f")
        }
        get thicknessTexture() {
          return (0, Ud.c)(this, Wd, "f")
        }
        set thicknessTexture(dd) {
          (0, Ud.e)(this, Wd, dd, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(Fd) {
          let Rd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(Fd, "PBRIridescence", 110, new WO, Rd), this._isEnabled = !1, Od.set(this, (0, Ud.k)(this, od, !1)), this.intensity = ((0, Ud.k)(this, Nd), (0, Ud.k)(this, qd, 1)), this.minimumThickness = ((0, Ud.k)(this, Hd), (0, Ud.k)(this, yd, dd._DefaultMinimumThickness)), this.maximumThickness = ((0, Ud.k)(this, bd), (0, Ud.k)(this, Td, dd._DefaultMaximumThickness)), this.indexOfRefraction = ((0, Ud.k)(this, pd), (0, Ud.k)(this, Yd, dd._DefaultIndexOfRefraction)), this._texture = ((0, Ud.k)(this, gd), null), md.set(this, (0, Ud.k)(this, wd, null)), this._thicknessTexture = ((0, Ud.k)(this, Ed), null), Wd.set(this, (0, Ud.k)(this, Jd, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Ud.k)(this, Bd), this._internalMarkAllSubMeshesAsTexturesDirty = Fd._dirtyCallbacks[1]
        }
        isReadyForSubMesh(dd, Od) {
          if (!this._isEnabled) return !0;
          if (dd._areTexturesDirty && Od.texturesEnabled) {
            if (this._texture && fd.b.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._thicknessTexture && fd.b.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(dd, Od) {
          this._isEnabled ? (dd.IRIDESCENCE = !0, dd._areTexturesDirty && Od.texturesEnabled && (this._texture && fd.b.IridescenceTextureEnabled ? (0, dO.M)(this._texture, dd, "IRIDESCENCE_TEXTURE") : dd.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && fd.b.IridescenceTextureEnabled ? (0, dO.M)(this._thicknessTexture, dd, "IRIDESCENCE_THICKNESS_TEXTURE") : dd.IRIDESCENCE_THICKNESS_TEXTURE = !1)) : (dd.IRIDESCENCE = !1, dd.IRIDESCENCE_TEXTURE = !1, dd.IRIDESCENCE_THICKNESS_TEXTURE = !1, dd.IRIDESCENCE_TEXTUREDIRECTUV = 0, dd.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0)
        }
        bindForSubMesh(dd, Od) {
          if (!this._isEnabled) return;
          const md = this._material.isFrozen;
          dd.useUbo && md && dd.isSync || ((this._texture || this._thicknessTexture) && fd.b.IridescenceTextureEnabled && (dd.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._thicknessTexture?.level ?? 0), this._texture && (0, dO.q)(this._texture, dd, "iridescence"), this._thicknessTexture && (0, dO.q)(this._thicknessTexture, dd, "iridescenceThickness")), dd.updateFloat4("vIridescenceParams", this.intensity, this.indexOfRefraction, this.minimumThickness, this.maximumThickness)), Od.texturesEnabled && (this._texture && fd.b.IridescenceTextureEnabled && dd.setTexture("iridescenceSampler", this._texture), this._thicknessTexture && fd.b.IridescenceTextureEnabled && dd.setTexture("iridescenceThicknessSampler", this._thicknessTexture))
        }
        hasTexture(dd) {
          return this._texture === dd || this._thicknessTexture === dd
        }
        getActiveTextures(dd) {
          this._texture && dd.push(this._texture), this._thicknessTexture && dd.push(this._thicknessTexture)
        }
        getAnimatables(dd) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && dd.push(this._texture), this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && dd.push(this._thicknessTexture)
        }
        dispose(dd) {
          dd && (this._texture?.dispose(), this._thicknessTexture?.dispose())
        }
        getClassName() {
          return "PBRIridescenceConfiguration"
        }
        addFallbacks(dd, Od, md) {
          return dd.IRIDESCENCE && Od.addFallback(md++, "IRIDESCENCE"), md
        }
        getSamplers(dd) {
          dd.push("iridescenceSampler", "iridescenceThicknessSampler")
        }
        getUniforms() {
          return {
            ubo: [{
              name: "vIridescenceParams",
              size: 4,
              type: "vec4"
            }, {
              name: "vIridescenceInfos",
              size: 4,
              type: "vec4"
            }, {
              name: "iridescenceMatrix",
              size: 16,
              type: "mat4"
            }, {
              name: "iridescenceThicknessMatrix",
              size: 16,
              type: "mat4"
            }]
          }
        }
      }, Od = new WeakMap, md = new WeakMap, Wd = new WeakMap, (() => {
        const Od = "function" === typeof Symbol && Symbol.metadata ? Object.create(td[Symbol.metadata] ?? null) : void 0;
        Fd = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], Rd = [(0, xd.E)()], Xd = [(0, xd.E)()], Kd = [(0, xd.E)()], hd = [(0, xd.E)()], vd = [(0, xd.x)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], Qd = [(0, xd.x)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], (0, Ud.h)(dd, null, Fd, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: dd => "isEnabled" in dd,
            get: dd => dd.isEnabled,
            set: (dd, Od) => {
              dd.isEnabled = Od
            }
          },
          metadata: Od
        }, od, Nd), (0, Ud.h)(dd, null, vd, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: dd => "texture" in dd,
            get: dd => dd.texture,
            set: (dd, Od) => {
              dd.texture = Od
            }
          },
          metadata: Od
        }, wd, Ed), (0, Ud.h)(dd, null, Qd, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "thicknessTexture" in dd,
            get: dd => dd.thicknessTexture,
            set: (dd, Od) => {
              dd.thicknessTexture = Od
            }
          },
          metadata: Od
        }, Jd, Bd), (0, Ud.h)(null, null, Rd, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: dd => "intensity" in dd,
            get: dd => dd.intensity,
            set: (dd, Od) => {
              dd.intensity = Od
            }
          },
          metadata: Od
        }, qd, Hd), (0, Ud.h)(null, null, Xd, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: dd => "minimumThickness" in dd,
            get: dd => dd.minimumThickness,
            set: (dd, Od) => {
              dd.minimumThickness = Od
            }
          },
          metadata: Od
        }, yd, bd), (0, Ud.h)(null, null, Kd, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: dd => "maximumThickness" in dd,
            get: dd => dd.maximumThickness,
            set: (dd, Od) => {
              dd.maximumThickness = Od
            }
          },
          metadata: Od
        }, Td, pd), (0, Ud.h)(null, null, hd, {
          kind: "field",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: dd => "indexOfRefraction" in dd,
            get: dd => dd.indexOfRefraction,
            set: (dd, Od) => {
              dd.indexOfRefraction = Od
            }
          },
          metadata: Od
        }, Yd, gd), Od && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Od
        })
      })(), dd._DefaultMinimumThickness = 100, dd._DefaultMaximumThickness = 400, dd._DefaultIndexOfRefraction = 1.3, dd
    })();
    class RO extends cd.b {
      constructor() {
        super(...arguments), this.ANISOTROPIC = !1, this.ANISOTROPIC_TEXTURE = !1, this.ANISOTROPIC_TEXTUREDIRECTUV = 0, this.ANISOTROPIC_LEGACY = !1, this.MAINUV1 = !1
      }
    }
    let XO = (() => {
      var dd, Od, md, Wd;
      let Fd, Rd, Xd, Kd, hd, vd = jd.e,
        Qd = [],
        td = [],
        od = [],
        Nd = [],
        qd = [],
        Hd = [],
        yd = [],
        bd = [],
        Td = [],
        pd = [];
      return dd = class extends vd {
        get isEnabled() {
          return (0, Ud.c)(this, Od, "f")
        }
        set isEnabled(dd) {
          (0, Ud.e)(this, Od, dd, "f")
        }
        set angle(dd) {
          this.direction.x = Math.cos(dd), this.direction.y = Math.sin(dd)
        }
        get angle() {
          return Math.atan2(this.direction.y, this.direction.x)
        }
        get texture() {
          return (0, Ud.c)(this, md, "f")
        }
        set texture(dd) {
          (0, Ud.e)(this, md, dd, "f")
        }
        get legacy() {
          return (0, Ud.c)(this, Wd, "f")
        }
        set legacy(dd) {
          (0, Ud.e)(this, Wd, dd, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        _markAllSubMeshesAsMiscDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsMiscDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(dd) {
          let Fd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(dd, "PBRAnisotropic", 110, new RO, Fd), this._isEnabled = !1, Od.set(this, (0, Ud.k)(this, Qd, !1)), this.intensity = ((0, Ud.k)(this, td), (0, Ud.k)(this, od, 1)), this.direction = ((0, Ud.k)(this, Nd), (0, Ud.k)(this, qd, new Pd.i(1, 0))), this._texture = ((0, Ud.k)(this, Hd), null), md.set(this, (0, Ud.k)(this, yd, null)), this._legacy = ((0, Ud.k)(this, bd), !1), Wd.set(this, (0, Ud.k)(this, Td, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Ud.k)(this, pd), this._internalMarkAllSubMeshesAsTexturesDirty = dd._dirtyCallbacks[1], this._internalMarkAllSubMeshesAsMiscDirty = dd._dirtyCallbacks[16]
        }
        isReadyForSubMesh(dd, Od) {
          return !this._isEnabled || !(dd._areTexturesDirty && Od.texturesEnabled && this._texture && fd.b.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking())
        }
        prepareDefinesBeforeAttributes(dd, Od, md) {
          this._isEnabled ? (dd.ANISOTROPIC = this._isEnabled, this._isEnabled && !md.isVerticesDataPresent(zd.j.TangentKind) && (dd._needUVs = !0, dd.MAINUV1 = !0), dd._areTexturesDirty && Od.texturesEnabled && (this._texture && fd.b.AnisotropicTextureEnabled ? (0, dO.M)(this._texture, dd, "ANISOTROPIC_TEXTURE") : dd.ANISOTROPIC_TEXTURE = !1), dd._areMiscDirty && (dd.ANISOTROPIC_LEGACY = this._legacy)) : (dd.ANISOTROPIC = !1, dd.ANISOTROPIC_TEXTURE = !1, dd.ANISOTROPIC_TEXTUREDIRECTUV = 0, dd.ANISOTROPIC_LEGACY = !1)
        }
        bindForSubMesh(dd, Od) {
          if (!this._isEnabled) return;
          const md = this._material.isFrozen;
          dd.useUbo && md && dd.isSync || (this._texture && fd.b.AnisotropicTextureEnabled && (dd.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, dO.q)(this._texture, dd, "anisotropy")), dd.updateFloat3("vAnisotropy", this.direction.x, this.direction.y, this.intensity)), Od.texturesEnabled && this._texture && fd.b.AnisotropicTextureEnabled && dd.setTexture("anisotropySampler", this._texture)
        }
        hasTexture(dd) {
          return this._texture === dd
        }
        getActiveTextures(dd) {
          this._texture && dd.push(this._texture)
        }
        getAnimatables(dd) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && dd.push(this._texture)
        }
        dispose(dd) {
          dd && this._texture && this._texture.dispose()
        }
        getClassName() {
          return "PBRAnisotropicConfiguration"
        }
        addFallbacks(dd, Od, md) {
          return dd.ANISOTROPIC && Od.addFallback(md++, "ANISOTROPIC"), md
        }
        getSamplers(dd) {
          dd.push("anisotropySampler")
        }
        getUniforms() {
          return {
            ubo: [{
              name: "vAnisotropy",
              size: 3,
              type: "vec3"
            }, {
              name: "vAnisotropyInfos",
              size: 2,
              type: "vec2"
            }, {
              name: "anisotropyMatrix",
              size: 16,
              type: "mat4"
            }]
          }
        }
        parse(dd, Od, md) {
          super.parse(dd, Od, md), void 0 === dd.legacy && (this.legacy = !0)
        }
      }, Od = new WeakMap, md = new WeakMap, Wd = new WeakMap, (() => {
        const Od = "function" === typeof Symbol && Symbol.metadata ? Object.create(vd[Symbol.metadata] ?? null) : void 0;
        Fd = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], Rd = [(0, xd.E)()], Xd = [(0, xd.z)()], Kd = [(0, xd.x)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], hd = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsMiscDirty")], (0, Ud.h)(dd, null, Fd, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: dd => "isEnabled" in dd,
            get: dd => dd.isEnabled,
            set: (dd, Od) => {
              dd.isEnabled = Od
            }
          },
          metadata: Od
        }, Qd, td), (0, Ud.h)(dd, null, Kd, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: dd => "texture" in dd,
            get: dd => dd.texture,
            set: (dd, Od) => {
              dd.texture = Od
            }
          },
          metadata: Od
        }, yd, bd), (0, Ud.h)(dd, null, hd, {
          kind: "accessor",
          name: "legacy",
          static: !1,
          private: !1,
          access: {
            has: dd => "legacy" in dd,
            get: dd => dd.legacy,
            set: (dd, Od) => {
              dd.legacy = Od
            }
          },
          metadata: Od
        }, Td, pd), (0, Ud.h)(null, null, Rd, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: dd => "intensity" in dd,
            get: dd => dd.intensity,
            set: (dd, Od) => {
              dd.intensity = Od
            }
          },
          metadata: Od
        }, od, Nd), (0, Ud.h)(null, null, Xd, {
          kind: "field",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: dd => "direction" in dd,
            get: dd => dd.direction,
            set: (dd, Od) => {
              dd.direction = Od
            }
          },
          metadata: Od
        }, qd, Hd), Od && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Od
        })
      })(), dd
    })();
    class KO extends cd.b {
      constructor() {
        super(...arguments), this.SHEEN = !1, this.SHEEN_TEXTURE = !1, this.SHEEN_GAMMATEXTURE = !1, this.SHEEN_TEXTURE_ROUGHNESS = !1, this.SHEEN_TEXTUREDIRECTUV = 0, this.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0, this.SHEEN_LINKWITHALBEDO = !1, this.SHEEN_ROUGHNESS = !1, this.SHEEN_ALBEDOSCALING = !1, this.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1
      }
    }
    let hO = (() => {
      var dd, Od, md, Wd, Fd, Rd, Xd, Kd;
      let hd, vd, Qd, td, od, Nd, qd, Hd, yd, bd = jd.e,
        Td = [],
        pd = [],
        Yd = [],
        gd = [],
        wd = [],
        Ed = [],
        Jd = [],
        Bd = [],
        Sd = [],
        sd = [],
        ud = [],
        Vd = [],
        Ad = [],
        rd = [],
        Gd = [],
        nd = [],
        Ld = [],
        Pd = [];
      return dd = class extends bd {
        get isEnabled() {
          return (0, Ud.c)(this, Od, "f")
        }
        set isEnabled(dd) {
          (0, Ud.e)(this, Od, dd, "f")
        }
        get linkSheenWithAlbedo() {
          return (0, Ud.c)(this, md, "f")
        }
        set linkSheenWithAlbedo(dd) {
          (0, Ud.e)(this, md, dd, "f")
        }
        get texture() {
          return (0, Ud.c)(this, Wd, "f")
        }
        set texture(dd) {
          (0, Ud.e)(this, Wd, dd, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, Ud.c)(this, Fd, "f")
        }
        set useRoughnessFromMainTexture(dd) {
          (0, Ud.e)(this, Fd, dd, "f")
        }
        get roughness() {
          return (0, Ud.c)(this, Rd, "f")
        }
        set roughness(dd) {
          (0, Ud.e)(this, Rd, dd, "f")
        }
        get textureRoughness() {
          return (0, Ud.c)(this, Xd, "f")
        }
        set textureRoughness(dd) {
          (0, Ud.e)(this, Xd, dd, "f")
        }
        get albedoScaling() {
          return (0, Ud.c)(this, Kd, "f")
        }
        set albedoScaling(dd) {
          (0, Ud.e)(this, Kd, dd, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(dd) {
          let hd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(dd, "Sheen", 120, new KO, hd), this._isEnabled = !1, Od.set(this, (0, Ud.k)(this, Td, !1)), this._linkSheenWithAlbedo = ((0, Ud.k)(this, pd), !1), md.set(this, (0, Ud.k)(this, Yd, !1)), this.intensity = ((0, Ud.k)(this, gd), (0, Ud.k)(this, wd, 1)), this.color = ((0, Ud.k)(this, Ed), (0, Ud.k)(this, Jd, ld.d.White())), this._texture = ((0, Ud.k)(this, Bd), null), Wd.set(this, (0, Ud.k)(this, Sd, null)), this._useRoughnessFromMainTexture = ((0, Ud.k)(this, sd), !0), Fd.set(this, (0, Ud.k)(this, ud, !0)), this._roughness = ((0, Ud.k)(this, Vd), null), Rd.set(this, (0, Ud.k)(this, Ad, null)), this._textureRoughness = ((0, Ud.k)(this, rd), null), Xd.set(this, (0, Ud.k)(this, Gd, null)), this._albedoScaling = ((0, Ud.k)(this, nd), !1), Kd.set(this, (0, Ud.k)(this, Ld, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Ud.k)(this, Pd), this._internalMarkAllSubMeshesAsTexturesDirty = dd._dirtyCallbacks[1]
        }
        isReadyForSubMesh(dd, Od) {
          if (!this._isEnabled) return !0;
          if (dd._areTexturesDirty && Od.texturesEnabled) {
            if (this._texture && fd.b.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && fd.b.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(dd, Od) {
          this._isEnabled ? (dd.SHEEN = !0, dd.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, dd.SHEEN_ROUGHNESS = null !== this._roughness, dd.SHEEN_ALBEDOSCALING = this._albedoScaling, dd.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, dd._areTexturesDirty && Od.texturesEnabled && (this._texture && fd.b.SheenTextureEnabled ? ((0, dO.M)(this._texture, dd, "SHEEN_TEXTURE"), dd.SHEEN_GAMMATEXTURE = this._texture.gammaSpace) : dd.SHEEN_TEXTURE = !1, this._textureRoughness && fd.b.SheenTextureEnabled ? (0, dO.M)(this._textureRoughness, dd, "SHEEN_TEXTURE_ROUGHNESS") : dd.SHEEN_TEXTURE_ROUGHNESS = !1)) : (dd.SHEEN = !1, dd.SHEEN_TEXTURE = !1, dd.SHEEN_TEXTURE_ROUGHNESS = !1, dd.SHEEN_LINKWITHALBEDO = !1, dd.SHEEN_ROUGHNESS = !1, dd.SHEEN_ALBEDOSCALING = !1, dd.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, dd.SHEEN_GAMMATEXTURE = !1, dd.SHEEN_TEXTUREDIRECTUV = 0, dd.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0)
        }
        bindForSubMesh(dd, Od, md, Wd) {
          if (!this._isEnabled) return;
          const Fd = Wd.materialDefines,
            Rd = this._material.isFrozen;
          dd.useUbo && Rd && dd.isSync || ((this._texture || this._textureRoughness) && fd.b.SheenTextureEnabled && (dd.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, dO.q)(this._texture, dd, "sheen"), this._textureRoughness && !Fd.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, dO.q)(this._textureRoughness, dd, "sheenRoughness")), dd.updateFloat4("vSheenColor", this.color.r, this.color.g, this.color.b, this.intensity), null !== this._roughness && dd.updateFloat("vSheenRoughness", this._roughness)), Od.texturesEnabled && (this._texture && fd.b.SheenTextureEnabled && dd.setTexture("sheenSampler", this._texture), this._textureRoughness && !Fd.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && fd.b.SheenTextureEnabled && dd.setTexture("sheenRoughnessSampler", this._textureRoughness))
        }
        hasTexture(dd) {
          return this._texture === dd || this._textureRoughness === dd
        }
        getActiveTextures(dd) {
          this._texture && dd.push(this._texture), this._textureRoughness && dd.push(this._textureRoughness)
        }
        getAnimatables(dd) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && dd.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && dd.push(this._textureRoughness)
        }
        dispose(dd) {
          dd && (this._texture?.dispose(), this._textureRoughness?.dispose())
        }
        getClassName() {
          return "PBRSheenConfiguration"
        }
        addFallbacks(dd, Od, md) {
          return dd.SHEEN && Od.addFallback(md++, "SHEEN"), md
        }
        getSamplers(dd) {
          dd.push("sheenSampler", "sheenRoughnessSampler")
        }
        getUniforms() {
          return {
            ubo: [{
              name: "vSheenColor",
              size: 4,
              type: "vec4"
            }, {
              name: "vSheenRoughness",
              size: 1,
              type: "float"
            }, {
              name: "vSheenInfos",
              size: 4,
              type: "vec4"
            }, {
              name: "sheenMatrix",
              size: 16,
              type: "mat4"
            }, {
              name: "sheenRoughnessMatrix",
              size: 16,
              type: "mat4"
            }]
          }
        }
      }, Od = new WeakMap, md = new WeakMap, Wd = new WeakMap, Fd = new WeakMap, Rd = new WeakMap, Xd = new WeakMap, Kd = new WeakMap, (() => {
        const Od = "function" === typeof Symbol && Symbol.metadata ? Object.create(bd[Symbol.metadata] ?? null) : void 0;
        hd = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], vd = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], Qd = [(0, xd.E)()], td = [(0, xd.m)()], od = [(0, xd.x)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], Nd = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], qd = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], Hd = [(0, xd.x)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], yd = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], (0, Ud.h)(dd, null, hd, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: dd => "isEnabled" in dd,
            get: dd => dd.isEnabled,
            set: (dd, Od) => {
              dd.isEnabled = Od
            }
          },
          metadata: Od
        }, Td, pd), (0, Ud.h)(dd, null, vd, {
          kind: "accessor",
          name: "linkSheenWithAlbedo",
          static: !1,
          private: !1,
          access: {
            has: dd => "linkSheenWithAlbedo" in dd,
            get: dd => dd.linkSheenWithAlbedo,
            set: (dd, Od) => {
              dd.linkSheenWithAlbedo = Od
            }
          },
          metadata: Od
        }, Yd, gd), (0, Ud.h)(dd, null, od, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: dd => "texture" in dd,
            get: dd => dd.texture,
            set: (dd, Od) => {
              dd.texture = Od
            }
          },
          metadata: Od
        }, Sd, sd), (0, Ud.h)(dd, null, Nd, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "useRoughnessFromMainTexture" in dd,
            get: dd => dd.useRoughnessFromMainTexture,
            set: (dd, Od) => {
              dd.useRoughnessFromMainTexture = Od
            }
          },
          metadata: Od
        }, ud, Vd), (0, Ud.h)(dd, null, qd, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: dd => "roughness" in dd,
            get: dd => dd.roughness,
            set: (dd, Od) => {
              dd.roughness = Od
            }
          },
          metadata: Od
        }, Ad, rd), (0, Ud.h)(dd, null, Hd, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: dd => "textureRoughness" in dd,
            get: dd => dd.textureRoughness,
            set: (dd, Od) => {
              dd.textureRoughness = Od
            }
          },
          metadata: Od
        }, Gd, nd), (0, Ud.h)(dd, null, yd, {
          kind: "accessor",
          name: "albedoScaling",
          static: !1,
          private: !1,
          access: {
            has: dd => "albedoScaling" in dd,
            get: dd => dd.albedoScaling,
            set: (dd, Od) => {
              dd.albedoScaling = Od
            }
          },
          metadata: Od
        }, Ld, Pd), (0, Ud.h)(null, null, Qd, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: dd => "intensity" in dd,
            get: dd => dd.intensity,
            set: (dd, Od) => {
              dd.intensity = Od
            }
          },
          metadata: Od
        }, wd, Ed), (0, Ud.h)(null, null, td, {
          kind: "field",
          name: "color",
          static: !1,
          private: !1,
          access: {
            has: dd => "color" in dd,
            get: dd => dd.color,
            set: (dd, Od) => {
              dd.color = Od
            }
          },
          metadata: Od
        }, Jd, Bd), Od && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Od
        })
      })(), dd
    })();
    class vO extends cd.b {
      constructor() {
        super(...arguments), this.SUBSURFACE = !1, this.SS_REFRACTION = !1, this.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_TRANSLUCENCY = !1, this.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_SCATTERING = !1, this.SS_DISPERSION = !1, this.SS_THICKNESSANDMASK_TEXTURE = !1, this.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, this.SS_HAS_THICKNESS = !1, this.SS_REFRACTIONINTENSITY_TEXTURE = !1, this.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, this.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, this.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, this.SS_REFRACTIONMAP_3D = !1, this.SS_REFRACTIONMAP_OPPOSITEZ = !1, this.SS_LODINREFRACTIONALPHA = !1, this.SS_GAMMAREFRACTION = !1, this.SS_RGBDREFRACTION = !1, this.SS_LINEARSPECULARREFRACTION = !1, this.SS_LINKREFRACTIONTOTRANSPARENCY = !1, this.SS_ALBEDOFORREFRACTIONTINT = !1, this.SS_ALBEDOFORTRANSLUCENCYTINT = !1, this.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.SS_USE_THICKNESS_AS_DEPTH = !1, this.SS_USE_GLTF_TEXTURES = !1, this.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1, this.SS_TRANSLUCENCY_LEGACY = !1
      }
    }
    let QO = (() => {
      var dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd, vd, Qd, td, od, Nd, qd, Hd, yd;
      let bd, Td, pd, Yd, gd, wd, Ed, Jd, Bd, Sd, sd, ud, Vd, Ad, rd, Gd, nd, Ld, zd, cd, Dd, ed, Id, Cd, Zd, kd, Md, OO, mO, WO, FO = jd.e,
        RO = [],
        XO = [],
        KO = [],
        hO = [],
        QO = [],
        tO = [],
        oO = [],
        NO = [],
        qO = [],
        HO = [],
        yO = [],
        bO = [],
        TO = [],
        pO = [],
        YO = [],
        gO = [],
        wO = [],
        aO = [],
        EO = [],
        JO = [],
        UO = [],
        xO = [],
        BO = [],
        SO = [],
        sO = [],
        uO = [],
        VO = [],
        iO = [],
        AO = [],
        rO = [],
        GO = [],
        nO = [],
        LO = [],
        PO = [],
        zO = [],
        cO = [],
        jO = [],
        DO = [],
        eO = [],
        IO = [],
        lO = [],
        CO = [],
        ZO = [],
        kO = [],
        fO = [],
        MO = [],
        dm = [],
        Om = [],
        mm = [],
        Wm = [],
        Fm = [],
        Rm = [],
        Xm = [],
        Km = [],
        hm = [],
        Qm = [],
        tm = [],
        om = [],
        Nm = [],
        qm = [];
      return dd = class extends FO {
        get isRefractionEnabled() {
          return (0, Ud.c)(this, Od, "f")
        }
        set isRefractionEnabled(dd) {
          (0, Ud.e)(this, Od, dd, "f")
        }
        get isTranslucencyEnabled() {
          return (0, Ud.c)(this, md, "f")
        }
        set isTranslucencyEnabled(dd) {
          (0, Ud.e)(this, md, dd, "f")
        }
        get isDispersionEnabled() {
          return (0, Ud.c)(this, Wd, "f")
        }
        set isDispersionEnabled(dd) {
          (0, Ud.e)(this, Wd, dd, "f")
        }
        get isScatteringEnabled() {
          return (0, Ud.c)(this, Fd, "f")
        }
        set isScatteringEnabled(dd) {
          (0, Ud.e)(this, Fd, dd, "f")
        }
        get scatteringDiffusionProfile() {
          return this._scene.subSurfaceConfiguration ? this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex] : null
        }
        set scatteringDiffusionProfile(dd) {
          this._scene.enableSubSurfaceForPrePass() && dd && (this._scatteringDiffusionProfileIndex = this._scene.subSurfaceConfiguration.addDiffusionProfile(dd))
        }
        get useAlbedoToTintRefraction() {
          return (0, Ud.c)(this, Rd, "f")
        }
        set useAlbedoToTintRefraction(dd) {
          (0, Ud.e)(this, Rd, dd, "f")
        }
        get useAlbedoToTintTranslucency() {
          return (0, Ud.c)(this, Xd, "f")
        }
        set useAlbedoToTintTranslucency(dd) {
          (0, Ud.e)(this, Xd, dd, "f")
        }
        get thicknessTexture() {
          return (0, Ud.c)(this, Kd, "f")
        }
        set thicknessTexture(dd) {
          (0, Ud.e)(this, Kd, dd, "f")
        }
        get refractionTexture() {
          return (0, Ud.c)(this, hd, "f")
        }
        set refractionTexture(dd) {
          (0, Ud.e)(this, hd, dd, "f")
        }
        get indexOfRefraction() {
          return (0, Ud.c)(this, vd, "f")
        }
        set indexOfRefraction(dd) {
          (0, Ud.e)(this, vd, dd, "f")
        }
        get volumeIndexOfRefraction() {
          return this._volumeIndexOfRefraction >= 1 ? this._volumeIndexOfRefraction : this._indexOfRefraction
        }
        set volumeIndexOfRefraction(dd) {
          const Od = dd >= 1 ? dd : -1;
          this._volumeIndexOfRefraction !== Od && (this._volumeIndexOfRefraction = Od, this._markAllSubMeshesAsTexturesDirty())
        }
        get invertRefractionY() {
          return (0, Ud.c)(this, Qd, "f")
        }
        set invertRefractionY(dd) {
          (0, Ud.e)(this, Qd, dd, "f")
        }
        get linkRefractionWithTransparency() {
          return (0, Ud.c)(this, td, "f")
        }
        set linkRefractionWithTransparency(dd) {
          (0, Ud.e)(this, td, dd, "f")
        }
        get useMaskFromThicknessTexture() {
          return (0, Ud.c)(this, od, "f")
        }
        set useMaskFromThicknessTexture(dd) {
          (0, Ud.e)(this, od, dd, "f")
        }
        get refractionIntensityTexture() {
          return (0, Ud.c)(this, Nd, "f")
        }
        set refractionIntensityTexture(dd) {
          (0, Ud.e)(this, Nd, dd, "f")
        }
        get translucencyIntensityTexture() {
          return (0, Ud.c)(this, qd, "f")
        }
        set translucencyIntensityTexture(dd) {
          (0, Ud.e)(this, qd, dd, "f")
        }
        get translucencyColorTexture() {
          return (0, Ud.c)(this, Hd, "f")
        }
        set translucencyColorTexture(dd) {
          (0, Ud.e)(this, Hd, dd, "f")
        }
        get useGltfStyleTextures() {
          return (0, Ud.c)(this, yd, "f")
        }
        set useGltfStyleTextures(dd) {
          (0, Ud.e)(this, yd, dd, "f")
        }
        get legacyTransluceny() {
          return this.legacyTranslucency
        }
        set legacyTransluceny(dd) {
          this.legacyTranslucency = dd
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        _markScenePrePassDirty() {
          this._enable(this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled), this._internalMarkAllSubMeshesAsTexturesDirty(), this._internalMarkScenePrePassDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(bd) {
          let Td = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(bd, "PBRSubSurface", 130, new vO, Td), this._isRefractionEnabled = !1, Od.set(this, (0, Ud.k)(this, RO, !1)), this._isTranslucencyEnabled = ((0, Ud.k)(this, XO), !1), md.set(this, (0, Ud.k)(this, KO, !1)), this._isDispersionEnabled = ((0, Ud.k)(this, hO), !1), Wd.set(this, (0, Ud.k)(this, QO, !1)), this._isScatteringEnabled = ((0, Ud.k)(this, tO), !1), Fd.set(this, (0, Ud.k)(this, oO, !1)), this._scatteringDiffusionProfileIndex = ((0, Ud.k)(this, NO), (0, Ud.k)(this, qO, 0)), this.refractionIntensity = ((0, Ud.k)(this, HO), (0, Ud.k)(this, yO, 1)), this.translucencyIntensity = ((0, Ud.k)(this, bO), (0, Ud.k)(this, TO, 1)), this._useAlbedoToTintRefraction = ((0, Ud.k)(this, pO), !1), Rd.set(this, (0, Ud.k)(this, YO, !1)), this._useAlbedoToTintTranslucency = ((0, Ud.k)(this, gO), !1), Xd.set(this, (0, Ud.k)(this, wO, !1)), this._thicknessTexture = ((0, Ud.k)(this, aO), null), Kd.set(this, (0, Ud.k)(this, EO, null)), this._refractionTexture = ((0, Ud.k)(this, JO), null), hd.set(this, (0, Ud.k)(this, UO, null)), this._indexOfRefraction = ((0, Ud.k)(this, xO), 1.5), vd.set(this, (0, Ud.k)(this, BO, 1.5)), this._volumeIndexOfRefraction = ((0, Ud.k)(this, SO), (0, Ud.k)(this, sO, -1)), this._invertRefractionY = ((0, Ud.k)(this, uO), !1), Qd.set(this, (0, Ud.k)(this, VO, !1)), this._linkRefractionWithTransparency = ((0, Ud.k)(this, iO), !1), td.set(this, (0, Ud.k)(this, AO, !1)), this.minimumThickness = ((0, Ud.k)(this, rO), (0, Ud.k)(this, GO, 0)), this.maximumThickness = ((0, Ud.k)(this, nO), (0, Ud.k)(this, LO, 1)), this.useThicknessAsDepth = ((0, Ud.k)(this, PO), (0, Ud.k)(this, zO, !1)), this.tintColor = ((0, Ud.k)(this, cO), (0, Ud.k)(this, jO, ld.d.White())), this.tintColorAtDistance = ((0, Ud.k)(this, DO), (0, Ud.k)(this, eO, 1)), this.dispersion = ((0, Ud.k)(this, IO), (0, Ud.k)(this, lO, 0)), this.diffusionDistance = ((0, Ud.k)(this, CO), (0, Ud.k)(this, ZO, ld.d.White())), this._useMaskFromThicknessTexture = ((0, Ud.k)(this, kO), !1), od.set(this, (0, Ud.k)(this, fO, !1)), this._refractionIntensityTexture = ((0, Ud.k)(this, MO), null), Nd.set(this, (0, Ud.k)(this, dm, null)), this._translucencyIntensityTexture = ((0, Ud.k)(this, Om), null), qd.set(this, (0, Ud.k)(this, mm, null)), this.translucencyColor = ((0, Ud.k)(this, Wm), (0, Ud.k)(this, Fm, null)), this._translucencyColorTexture = ((0, Ud.k)(this, Rm), null), Hd.set(this, (0, Ud.k)(this, Xm, null)), this._useGltfStyleTextures = ((0, Ud.k)(this, Km), !0), yd.set(this, (0, Ud.k)(this, hm, !0)), this.applyAlbedoAfterSubSurface = ((0, Ud.k)(this, Qm), (0, Ud.k)(this, tm, dd.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE)), this.legacyTranslucency = ((0, Ud.k)(this, om), (0, Ud.k)(this, Nm, dd.DEFAULT_LEGACY_TRANSLUCENCY)), this._scene = (0, Ud.k)(this, qm), this._scene = bd.zV(), this.registerForExtraEvents = !0, this._internalMarkAllSubMeshesAsTexturesDirty = bd._dirtyCallbacks[1], this._internalMarkScenePrePassDirty = bd._dirtyCallbacks[32]
        }
        isReadyForSubMesh(dd, Od) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return !0;
          if (dd._areTexturesDirty && Od.texturesEnabled) {
            if (this._thicknessTexture && fd.b.ThicknessTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1;
            if (this._refractionIntensityTexture && fd.b.RefractionIntensityTextureEnabled && !this._refractionIntensityTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyColorTexture && fd.b.TranslucencyColorTextureEnabled && !this._translucencyColorTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyIntensityTexture && fd.b.TranslucencyIntensityTextureEnabled && !this._translucencyIntensityTexture.isReadyOrNotBlocking()) return !1;
            const dd = this._getRefractionTexture(Od);
            if (dd && fd.b.RefractionTextureEnabled && !dd.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(dd, Od) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return dd.SUBSURFACE = !1, dd.SS_DISPERSION = !1, dd.SS_TRANSLUCENCY = !1, dd.SS_SCATTERING = !1, dd.SS_REFRACTION = !1, dd.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, dd.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, dd.SS_THICKNESSANDMASK_TEXTURE = !1, dd.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, dd.SS_HAS_THICKNESS = !1, dd.SS_REFRACTIONINTENSITY_TEXTURE = !1, dd.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, dd.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, dd.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, dd.SS_REFRACTIONMAP_3D = !1, dd.SS_REFRACTIONMAP_OPPOSITEZ = !1, dd.SS_LODINREFRACTIONALPHA = !1, dd.SS_GAMMAREFRACTION = !1, dd.SS_RGBDREFRACTION = !1, dd.SS_LINEARSPECULARREFRACTION = !1, dd.SS_LINKREFRACTIONTOTRANSPARENCY = !1, dd.SS_ALBEDOFORREFRACTIONTINT = !1, dd.SS_ALBEDOFORTRANSLUCENCYTINT = !1, dd.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, dd.SS_USE_THICKNESS_AS_DEPTH = !1, dd.SS_USE_GLTF_TEXTURES = !1, dd.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, dd.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, dd.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, void(dd.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1);
          if (dd._areTexturesDirty) {
            if (dd.SUBSURFACE = !0, dd.SS_DISPERSION = this._isDispersionEnabled, dd.SS_TRANSLUCENCY = this._isTranslucencyEnabled, dd.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, dd.SS_TRANSLUCENCY_LEGACY = this.legacyTranslucency, dd.SS_SCATTERING = this._isScatteringEnabled, dd.SS_THICKNESSANDMASK_TEXTURE = !1, dd.SS_REFRACTIONINTENSITY_TEXTURE = !1, dd.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, dd.SS_HAS_THICKNESS = !1, dd.SS_USE_GLTF_TEXTURES = !1, dd.SS_REFRACTION = !1, dd.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, dd.SS_REFRACTIONMAP_3D = !1, dd.SS_GAMMAREFRACTION = !1, dd.SS_RGBDREFRACTION = !1, dd.SS_LINEARSPECULARREFRACTION = !1, dd.SS_REFRACTIONMAP_OPPOSITEZ = !1, dd.SS_LODINREFRACTIONALPHA = !1, dd.SS_LINKREFRACTIONTOTRANSPARENCY = !1, dd.SS_ALBEDOFORREFRACTIONTINT = !1, dd.SS_ALBEDOFORTRANSLUCENCYTINT = !1, dd.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, dd.SS_USE_THICKNESS_AS_DEPTH = !1, dd.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, dd.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = this.applyAlbedoAfterSubSurface, dd._areTexturesDirty && Od.texturesEnabled && (this._thicknessTexture && fd.b.ThicknessTextureEnabled && (0, dO.M)(this._thicknessTexture, dd, "SS_THICKNESSANDMASK_TEXTURE"), this._refractionIntensityTexture && fd.b.RefractionIntensityTextureEnabled && (0, dO.M)(this._refractionIntensityTexture, dd, "SS_REFRACTIONINTENSITY_TEXTURE"), this._translucencyIntensityTexture && fd.b.TranslucencyIntensityTextureEnabled && (0, dO.M)(this._translucencyIntensityTexture, dd, "SS_TRANSLUCENCYINTENSITY_TEXTURE"), this._translucencyColorTexture && fd.b.TranslucencyColorTextureEnabled && ((0, dO.M)(this._translucencyColorTexture, dd, "SS_TRANSLUCENCYCOLOR_TEXTURE"), dd.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = this._translucencyColorTexture.gammaSpace)), dd.SS_HAS_THICKNESS = this.maximumThickness - this.minimumThickness !== 0, dd.SS_USE_GLTF_TEXTURES = this._useGltfStyleTextures, dd.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._refractionIntensityTexture, dd.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._translucencyIntensityTexture, this._isRefractionEnabled && Od.texturesEnabled) {
              const md = this._getRefractionTexture(Od);
              md && fd.b.RefractionTextureEnabled && (dd.SS_REFRACTION = !0, dd.SS_REFRACTIONMAP_3D = md.isCube, dd.SS_GAMMAREFRACTION = md.gammaSpace, dd.SS_RGBDREFRACTION = md.isRGBD, dd.SS_LINEARSPECULARREFRACTION = md.linearSpecularLOD, dd.SS_REFRACTIONMAP_OPPOSITEZ = this._scene.useRightHandedSystem && md.isCube ? !md.invertZ : md.invertZ, dd.SS_LODINREFRACTIONALPHA = md.lodLevelInAlpha, dd.SS_LINKREFRACTIONTOTRANSPARENCY = this._linkRefractionWithTransparency, dd.SS_ALBEDOFORREFRACTIONTINT = this._useAlbedoToTintRefraction, dd.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = md.isCube && md.boundingBoxSize, dd.SS_USE_THICKNESS_AS_DEPTH = this.useThicknessAsDepth)
            }
            this._isTranslucencyEnabled && (dd.SS_ALBEDOFORTRANSLUCENCYTINT = this._useAlbedoToTintTranslucency)
          }
        }
        hardBindForSubMesh(dd, Od, md, Wd) {
          if (this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled)
            if (0 === this.maximumThickness && 0 === this.minimumThickness) dd.updateFloat2("vThicknessParam", 0, 0);
            else {
              Wd.getRenderingMesh().getWorldMatrix().decompose(Pd.h.Cq[0]);
              const Od = Math.max(Math.abs(Pd.h.Cq[0].x), Math.abs(Pd.h.Cq[0].y), Math.abs(Pd.h.Cq[0].z));
              dd.updateFloat2("vThicknessParam", this.minimumThickness * Od, (this.maximumThickness - this.minimumThickness) * Od)
            }
        }
        bindForSubMesh(dd, Od, md, Wd) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return;
          const Fd = Wd.materialDefines,
            Rd = this._material.isFrozen,
            Xd = this._material.realTimeFiltering,
            Kd = Fd.LODBASEDMICROSFURACE,
            hd = this._getRefractionTexture(Od);
          if (!dd.useUbo || !Rd || !dd.isSync) {
            if (this._thicknessTexture && fd.b.ThicknessTextureEnabled && (dd.updateFloat2("vThicknessInfos", this._thicknessTexture.coordinatesIndex, this._thicknessTexture.level), (0, dO.q)(this._thicknessTexture, dd, "thickness")), this._refractionIntensityTexture && fd.b.RefractionIntensityTextureEnabled && Fd.SS_REFRACTIONINTENSITY_TEXTURE && (dd.updateFloat2("vRefractionIntensityInfos", this._refractionIntensityTexture.coordinatesIndex, this._refractionIntensityTexture.level), (0, dO.q)(this._refractionIntensityTexture, dd, "refractionIntensity")), this._translucencyColorTexture && fd.b.TranslucencyColorTextureEnabled && Fd.SS_TRANSLUCENCYCOLOR_TEXTURE && (dd.updateFloat2("vTranslucencyColorInfos", this._translucencyColorTexture.coordinatesIndex, this._translucencyColorTexture.level), (0, dO.q)(this._translucencyColorTexture, dd, "translucencyColor")), this._translucencyIntensityTexture && fd.b.TranslucencyIntensityTextureEnabled && Fd.SS_TRANSLUCENCYINTENSITY_TEXTURE && (dd.updateFloat2("vTranslucencyIntensityInfos", this._translucencyIntensityTexture.coordinatesIndex, this._translucencyIntensityTexture.level), (0, dO.q)(this._translucencyIntensityTexture, dd, "translucencyIntensity")), hd && fd.b.RefractionTextureEnabled) {
              dd.Idd("refractionMatrix", hd.getRefractionTextureMatrix());
              let Od = 1;
              hd.isCube || hd.depth && (Od = hd.depth);
              const md = hd.getSize().width,
                Wd = this.volumeIndexOfRefraction;
              if (dd.updateFloat4("vRefractionInfos", hd.level, 1 / Wd, Od, this._invertRefractionY ? -1 : 1), dd.updateFloat4("vRefractionMicrosurfaceInfos", md, hd.lodGenerationScale, hd.lodGenerationOffset, 1 / this.indexOfRefraction), Xd && dd.updateFloat2("vRefractionFilteringInfo", md, Math.log2(md)), hd.boundingBoxSize) {
                const Od = hd;
                dd.updateVector3("vRefractionPosition", Od.boundingBoxPosition), dd.updateVector3("vRefractionSize", Od.boundingBoxSize)
              }
            }
            this._isScatteringEnabled && dd.updateFloat("scatteringDiffusionProfile", this._scatteringDiffusionProfileIndex), dd.updateColor3("vDiffusionDistance", this.diffusionDistance), dd.updateFloat4("vTintColor", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintColorAtDistance)), dd.updateColor4("vTranslucencyColor", this.translucencyColor ?? this.tintColor, 0), dd.updateFloat3("vSubSurfaceIntensity", this.refractionIntensity, this.translucencyIntensity, 0), dd.updateFloat("dispersion", this.dispersion)
          }
          Od.texturesEnabled && (this._thicknessTexture && fd.b.ThicknessTextureEnabled && dd.setTexture("thicknessSampler", this._thicknessTexture), this._refractionIntensityTexture && fd.b.RefractionIntensityTextureEnabled && Fd.SS_REFRACTIONINTENSITY_TEXTURE && dd.setTexture("refractionIntensitySampler", this._refractionIntensityTexture), this._translucencyIntensityTexture && fd.b.TranslucencyIntensityTextureEnabled && Fd.SS_TRANSLUCENCYINTENSITY_TEXTURE && dd.setTexture("translucencyIntensitySampler", this._translucencyIntensityTexture), this._translucencyColorTexture && fd.b.TranslucencyColorTextureEnabled && Fd.SS_TRANSLUCENCYCOLOR_TEXTURE && dd.setTexture("translucencyColorSampler", this._translucencyColorTexture), hd && fd.b.RefractionTextureEnabled && (Kd ? dd.setTexture("refractionSampler", hd) : (dd.setTexture("refractionSampler", hd._lodTextureMid || hd), dd.setTexture("refractionSamplerLow", hd._lodTextureLow || hd), dd.setTexture("refractionSamplerHigh", hd._lodTextureHigh || hd))))
        }
        _getRefractionTexture(dd) {
          return this._refractionTexture ? this._refractionTexture : this._isRefractionEnabled ? dd.environmentTexture : null
        }
        get disableAlphaBlending() {
          return this._isRefractionEnabled && this._linkRefractionWithTransparency
        }
        fillRenderTargetTextures(dd) {
          fd.b.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && dd.push(this._refractionTexture)
        }
        hasTexture(dd) {
          return this._thicknessTexture === dd || (this._refractionTexture === dd || (this._refractionIntensityTexture === dd || (this._translucencyIntensityTexture === dd || this._translucencyColorTexture === dd)))
        }
        hasRenderTargetTextures() {
          return !!(fd.b.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget)
        }
        getActiveTextures(dd) {
          this._thicknessTexture && dd.push(this._thicknessTexture), this._refractionTexture && dd.push(this._refractionTexture), this._refractionIntensityTexture && dd.push(this._refractionIntensityTexture), this._translucencyColorTexture && dd.push(this._translucencyColorTexture), this._translucencyIntensityTexture && dd.push(this._translucencyIntensityTexture)
        }
        getAnimatables(dd) {
          this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && dd.push(this._thicknessTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && dd.push(this._refractionTexture), this._refractionIntensityTexture && this._refractionIntensityTexture.animations && this._refractionIntensityTexture.animations.length > 0 && dd.push(this._refractionIntensityTexture), this._translucencyColorTexture && this._translucencyColorTexture.animations && this._translucencyColorTexture.animations.length > 0 && dd.push(this._translucencyColorTexture), this._translucencyIntensityTexture && this._translucencyIntensityTexture.animations && this._translucencyIntensityTexture.animations.length > 0 && dd.push(this._translucencyIntensityTexture)
        }
        dispose(dd) {
          dd && (this._thicknessTexture && this._thicknessTexture.dispose(), this._refractionTexture && this._refractionTexture.dispose(), this._refractionIntensityTexture && this._refractionIntensityTexture.dispose(), this._translucencyColorTexture && this._translucencyColorTexture.dispose(), this._translucencyIntensityTexture && this._translucencyIntensityTexture.dispose())
        }
        getClassName() {
          return "PBRSubSurfaceConfiguration"
        }
        addFallbacks(dd, Od, md) {
          return dd.SS_SCATTERING && Od.addFallback(md++, "SS_SCATTERING"), dd.SS_TRANSLUCENCY && Od.addFallback(md++, "SS_TRANSLUCENCY"), md
        }
        getSamplers(dd) {
          dd.push("thicknessSampler", "refractionIntensitySampler", "translucencyIntensitySampler", "refractionSampler", "refractionSamplerLow", "refractionSamplerHigh", "translucencyColorSampler")
        }
        getUniforms() {
          return {
            ubo: [{
              name: "vRefractionMicrosurfaceInfos",
              size: 4,
              type: "vec4"
            }, {
              name: "vRefractionFilteringInfo",
              size: 2,
              type: "vec2"
            }, {
              name: "vTranslucencyIntensityInfos",
              size: 2,
              type: "vec2"
            }, {
              name: "vRefractionInfos",
              size: 4,
              type: "vec4"
            }, {
              name: "refractionMatrix",
              size: 16,
              type: "mat4"
            }, {
              name: "vThicknessInfos",
              size: 2,
              type: "vec2"
            }, {
              name: "vRefractionIntensityInfos",
              size: 2,
              type: "vec2"
            }, {
              name: "thicknessMatrix",
              size: 16,
              type: "mat4"
            }, {
              name: "refractionIntensityMatrix",
              size: 16,
              type: "mat4"
            }, {
              name: "translucencyIntensityMatrix",
              size: 16,
              type: "mat4"
            }, {
              name: "vThicknessParam",
              size: 2,
              type: "vec2"
            }, {
              name: "vDiffusionDistance",
              size: 3,
              type: "vec3"
            }, {
              name: "vTintColor",
              size: 4,
              type: "vec4"
            }, {
              name: "vSubSurfaceIntensity",
              size: 3,
              type: "vec3"
            }, {
              name: "vRefractionPosition",
              size: 3,
              type: "vec3"
            }, {
              name: "vRefractionSize",
              size: 3,
              type: "vec3"
            }, {
              name: "scatteringDiffusionProfile",
              size: 1,
              type: "float"
            }, {
              name: "dispersion",
              size: 1,
              type: "float"
            }, {
              name: "vTranslucencyColor",
              size: 4,
              type: "vec4"
            }, {
              name: "vTranslucencyColorInfos",
              size: 2,
              type: "vec2"
            }, {
              name: "translucencyColorMatrix",
              size: 16,
              type: "mat4"
            }]
          }
        }
      }, Od = new WeakMap, md = new WeakMap, Wd = new WeakMap, Fd = new WeakMap, Rd = new WeakMap, Xd = new WeakMap, Kd = new WeakMap, hd = new WeakMap, vd = new WeakMap, Qd = new WeakMap, td = new WeakMap, od = new WeakMap, Nd = new WeakMap, qd = new WeakMap, Hd = new WeakMap, yd = new WeakMap, (() => {
        const Od = "function" === typeof Symbol && Symbol.metadata ? Object.create(FO[Symbol.metadata] ?? null) : void 0;
        bd = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], Td = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], pd = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], Yd = [(0, xd.E)(), (0, xd.g)("_markScenePrePassDirty")], gd = [(0, xd.E)()], wd = [(0, xd.E)()], Ed = [(0, xd.E)()], Jd = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], Bd = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], Sd = [(0, xd.x)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], sd = [(0, xd.x)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], ud = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], Vd = [(0, xd.E)()], Ad = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], rd = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], Gd = [(0, xd.E)()], nd = [(0, xd.E)()], Ld = [(0, xd.E)()], zd = [(0, xd.m)()], cd = [(0, xd.E)()], Dd = [(0, xd.E)()], ed = [(0, xd.m)()], Id = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], Cd = [(0, xd.x)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], Zd = [(0, xd.x)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], kd = [(0, xd.m)()], Md = [(0, xd.x)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], OO = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], mO = [(0, xd.E)()], WO = [(0, xd.E)()], (0, Ud.h)(dd, null, bd, {
          kind: "accessor",
          name: "isRefractionEnabled",
          static: !1,
          private: !1,
          access: {
            has: dd => "isRefractionEnabled" in dd,
            get: dd => dd.isRefractionEnabled,
            set: (dd, Od) => {
              dd.isRefractionEnabled = Od
            }
          },
          metadata: Od
        }, RO, XO), (0, Ud.h)(dd, null, Td, {
          kind: "accessor",
          name: "isTranslucencyEnabled",
          static: !1,
          private: !1,
          access: {
            has: dd => "isTranslucencyEnabled" in dd,
            get: dd => dd.isTranslucencyEnabled,
            set: (dd, Od) => {
              dd.isTranslucencyEnabled = Od
            }
          },
          metadata: Od
        }, KO, hO), (0, Ud.h)(dd, null, pd, {
          kind: "accessor",
          name: "isDispersionEnabled",
          static: !1,
          private: !1,
          access: {
            has: dd => "isDispersionEnabled" in dd,
            get: dd => dd.isDispersionEnabled,
            set: (dd, Od) => {
              dd.isDispersionEnabled = Od
            }
          },
          metadata: Od
        }, QO, tO), (0, Ud.h)(dd, null, Yd, {
          kind: "accessor",
          name: "isScatteringEnabled",
          static: !1,
          private: !1,
          access: {
            has: dd => "isScatteringEnabled" in dd,
            get: dd => dd.isScatteringEnabled,
            set: (dd, Od) => {
              dd.isScatteringEnabled = Od
            }
          },
          metadata: Od
        }, oO, NO), (0, Ud.h)(dd, null, Jd, {
          kind: "accessor",
          name: "useAlbedoToTintRefraction",
          static: !1,
          private: !1,
          access: {
            has: dd => "useAlbedoToTintRefraction" in dd,
            get: dd => dd.useAlbedoToTintRefraction,
            set: (dd, Od) => {
              dd.useAlbedoToTintRefraction = Od
            }
          },
          metadata: Od
        }, YO, gO), (0, Ud.h)(dd, null, Bd, {
          kind: "accessor",
          name: "useAlbedoToTintTranslucency",
          static: !1,
          private: !1,
          access: {
            has: dd => "useAlbedoToTintTranslucency" in dd,
            get: dd => dd.useAlbedoToTintTranslucency,
            set: (dd, Od) => {
              dd.useAlbedoToTintTranslucency = Od
            }
          },
          metadata: Od
        }, wO, aO), (0, Ud.h)(dd, null, Sd, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "thicknessTexture" in dd,
            get: dd => dd.thicknessTexture,
            set: (dd, Od) => {
              dd.thicknessTexture = Od
            }
          },
          metadata: Od
        }, EO, JO), (0, Ud.h)(dd, null, sd, {
          kind: "accessor",
          name: "refractionTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "refractionTexture" in dd,
            get: dd => dd.refractionTexture,
            set: (dd, Od) => {
              dd.refractionTexture = Od
            }
          },
          metadata: Od
        }, UO, xO), (0, Ud.h)(dd, null, ud, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: dd => "indexOfRefraction" in dd,
            get: dd => dd.indexOfRefraction,
            set: (dd, Od) => {
              dd.indexOfRefraction = Od
            }
          },
          metadata: Od
        }, BO, SO), (0, Ud.h)(dd, null, Ad, {
          kind: "accessor",
          name: "invertRefractionY",
          static: !1,
          private: !1,
          access: {
            has: dd => "invertRefractionY" in dd,
            get: dd => dd.invertRefractionY,
            set: (dd, Od) => {
              dd.invertRefractionY = Od
            }
          },
          metadata: Od
        }, VO, iO), (0, Ud.h)(dd, null, rd, {
          kind: "accessor",
          name: "linkRefractionWithTransparency",
          static: !1,
          private: !1,
          access: {
            has: dd => "linkRefractionWithTransparency" in dd,
            get: dd => dd.linkRefractionWithTransparency,
            set: (dd, Od) => {
              dd.linkRefractionWithTransparency = Od
            }
          },
          metadata: Od
        }, AO, rO), (0, Ud.h)(dd, null, Id, {
          kind: "accessor",
          name: "useMaskFromThicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "useMaskFromThicknessTexture" in dd,
            get: dd => dd.useMaskFromThicknessTexture,
            set: (dd, Od) => {
              dd.useMaskFromThicknessTexture = Od
            }
          },
          metadata: Od
        }, fO, MO), (0, Ud.h)(dd, null, Cd, {
          kind: "accessor",
          name: "refractionIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "refractionIntensityTexture" in dd,
            get: dd => dd.refractionIntensityTexture,
            set: (dd, Od) => {
              dd.refractionIntensityTexture = Od
            }
          },
          metadata: Od
        }, dm, Om), (0, Ud.h)(dd, null, Zd, {
          kind: "accessor",
          name: "translucencyIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "translucencyIntensityTexture" in dd,
            get: dd => dd.translucencyIntensityTexture,
            set: (dd, Od) => {
              dd.translucencyIntensityTexture = Od
            }
          },
          metadata: Od
        }, mm, Wm), (0, Ud.h)(dd, null, Md, {
          kind: "accessor",
          name: "translucencyColorTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "translucencyColorTexture" in dd,
            get: dd => dd.translucencyColorTexture,
            set: (dd, Od) => {
              dd.translucencyColorTexture = Od
            }
          },
          metadata: Od
        }, Xm, Km), (0, Ud.h)(dd, null, OO, {
          kind: "accessor",
          name: "useGltfStyleTextures",
          static: !1,
          private: !1,
          access: {
            has: dd => "useGltfStyleTextures" in dd,
            get: dd => dd.useGltfStyleTextures,
            set: (dd, Od) => {
              dd.useGltfStyleTextures = Od
            }
          },
          metadata: Od
        }, hm, Qm), (0, Ud.h)(null, null, gd, {
          kind: "field",
          name: "_scatteringDiffusionProfileIndex",
          static: !1,
          private: !1,
          access: {
            has: dd => "_scatteringDiffusionProfileIndex" in dd,
            get: dd => dd._scatteringDiffusionProfileIndex,
            set: (dd, Od) => {
              dd._scatteringDiffusionProfileIndex = Od
            }
          },
          metadata: Od
        }, qO, HO), (0, Ud.h)(null, null, wd, {
          kind: "field",
          name: "refractionIntensity",
          static: !1,
          private: !1,
          access: {
            has: dd => "refractionIntensity" in dd,
            get: dd => dd.refractionIntensity,
            set: (dd, Od) => {
              dd.refractionIntensity = Od
            }
          },
          metadata: Od
        }, yO, bO), (0, Ud.h)(null, null, Ed, {
          kind: "field",
          name: "translucencyIntensity",
          static: !1,
          private: !1,
          access: {
            has: dd => "translucencyIntensity" in dd,
            get: dd => dd.translucencyIntensity,
            set: (dd, Od) => {
              dd.translucencyIntensity = Od
            }
          },
          metadata: Od
        }, TO, pO), (0, Ud.h)(null, null, Vd, {
          kind: "field",
          name: "_volumeIndexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: dd => "_volumeIndexOfRefraction" in dd,
            get: dd => dd._volumeIndexOfRefraction,
            set: (dd, Od) => {
              dd._volumeIndexOfRefraction = Od
            }
          },
          metadata: Od
        }, sO, uO), (0, Ud.h)(null, null, Gd, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: dd => "minimumThickness" in dd,
            get: dd => dd.minimumThickness,
            set: (dd, Od) => {
              dd.minimumThickness = Od
            }
          },
          metadata: Od
        }, GO, nO), (0, Ud.h)(null, null, nd, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: dd => "maximumThickness" in dd,
            get: dd => dd.maximumThickness,
            set: (dd, Od) => {
              dd.maximumThickness = Od
            }
          },
          metadata: Od
        }, LO, PO), (0, Ud.h)(null, null, Ld, {
          kind: "field",
          name: "useThicknessAsDepth",
          static: !1,
          private: !1,
          access: {
            has: dd => "useThicknessAsDepth" in dd,
            get: dd => dd.useThicknessAsDepth,
            set: (dd, Od) => {
              dd.useThicknessAsDepth = Od
            }
          },
          metadata: Od
        }, zO, cO), (0, Ud.h)(null, null, zd, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: dd => "tintColor" in dd,
            get: dd => dd.tintColor,
            set: (dd, Od) => {
              dd.tintColor = Od
            }
          },
          metadata: Od
        }, jO, DO), (0, Ud.h)(null, null, cd, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: dd => "tintColorAtDistance" in dd,
            get: dd => dd.tintColorAtDistance,
            set: (dd, Od) => {
              dd.tintColorAtDistance = Od
            }
          },
          metadata: Od
        }, eO, IO), (0, Ud.h)(null, null, Dd, {
          kind: "field",
          name: "dispersion",
          static: !1,
          private: !1,
          access: {
            has: dd => "dispersion" in dd,
            get: dd => dd.dispersion,
            set: (dd, Od) => {
              dd.dispersion = Od
            }
          },
          metadata: Od
        }, lO, CO), (0, Ud.h)(null, null, ed, {
          kind: "field",
          name: "diffusionDistance",
          static: !1,
          private: !1,
          access: {
            has: dd => "diffusionDistance" in dd,
            get: dd => dd.diffusionDistance,
            set: (dd, Od) => {
              dd.diffusionDistance = Od
            }
          },
          metadata: Od
        }, ZO, kO), (0, Ud.h)(null, null, kd, {
          kind: "field",
          name: "translucencyColor",
          static: !1,
          private: !1,
          access: {
            has: dd => "translucencyColor" in dd,
            get: dd => dd.translucencyColor,
            set: (dd, Od) => {
              dd.translucencyColor = Od
            }
          },
          metadata: Od
        }, Fm, Rm), (0, Ud.h)(null, null, mO, {
          kind: "field",
          name: "applyAlbedoAfterSubSurface",
          static: !1,
          private: !1,
          access: {
            has: dd => "applyAlbedoAfterSubSurface" in dd,
            get: dd => dd.applyAlbedoAfterSubSurface,
            set: (dd, Od) => {
              dd.applyAlbedoAfterSubSurface = Od
            }
          },
          metadata: Od
        }, tm, om), (0, Ud.h)(null, null, WO, {
          kind: "field",
          name: "legacyTranslucency",
          static: !1,
          private: !1,
          access: {
            has: dd => "legacyTranslucency" in dd,
            get: dd => dd.legacyTranslucency,
            set: (dd, Od) => {
              dd.legacyTranslucency = Od
            }
          },
          metadata: Od
        }, Nm, qm), Od && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Od
        })
      })(), dd.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE = !1, dd.DEFAULT_LEGACY_TRANSLUCENCY = !1, dd
    })();
    var tO = md(42278),
      oO = md(42248),
      NO = md(42285),
      qO = md(42291),
      HO = md(42298),
      yO = md(42303),
      bO = md(42308),
      TO = md(42314),
      pO = md(41817);
    const YO = {
      effect: null,
      subMesh: null
    };
    class gO extends((0, bO.d)((0, yO.d)(cd.b))) {}
    class wO extends((0, Cd.d)(gO)) {
      constructor(dd) {
        super(dd), this.PBR = !0, this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.ALBEDO = !1, this.GAMMAALBEDO = !1, this.ALBEDODIRECTUV = 0, this.VERTEXCOLOR = !1, this.BASE_WEIGHT = !1, this.BASE_WEIGHTDIRECTUV = 0, this.BASE_DIFFUSE_ROUGHNESS = !1, this.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.AMBIENTINGRAYSCALE = !1, this.OPACITY = !1, this.VERTEXALPHA = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHAFROMALBEDO = !1, this.ALPHATESTVALUE = "0.5", this.SPECULAROVERALPHA = !1, this.RADIANCEOVERALPHA = !1, this.ALPHAFRESNEL = !1, this.LINEARALPHAFRESNEL = !1, this.PREMULTIPLYALPHA = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.GAMMAEMISSIVE = !1, this.REFLECTIVITY = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.MICROSURFACEFROMREFLECTIVITYMAP = !1, this.MICROSURFACEAUTOMATIC = !1, this.LODBASEDMICROSFURACE = !1, this.MICROSURFACEMAP = !1, this.MICROSURFACEMAPDIRECTUV = 0, this.METALLICWORKFLOW = !1, this.ROUGHNESSSTOREINMETALMAPALPHA = !1, this.ROUGHNESSSTOREINMETALMAPGREEN = !1, this.METALLNESSSTOREINMETALMAPBLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.METALLIC_REFLECTANCE = !1, this.METALLIC_REFLECTANCE_GAMMA = !1, this.METALLIC_REFLECTANCEDIRECTUV = 0, this.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = !1, this.REFLECTANCE = !1, this.REFLECTANCE_GAMMA = !1, this.REFLECTANCEDIRECTUV = 0, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.NORMAL = !1, this.TANGENT = !1, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.USELIGHTMAPASSHADOWMAP = !1, this.GAMMALIGHTMAP = !1, this.RGBDLIGHTMAP = !1, this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1, this.LINEARSPECULARREFLECTION = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.PBR = !0, this.NORMALXYSCALE = !0
      }
    }
    class aO extends((0, TO.b)(kd.d)) {}
    let EO = (() => {
      var dd, Od;
      let Wd, Fd = aO,
        Xd = [],
        Kd = [];
      return dd = class extends Fd {
        get realTimeFiltering() {
          return this._realTimeFiltering
        }
        set realTimeFiltering(dd) {
          this._realTimeFiltering = dd, this.KWd(1)
        }
        get realTimeFilteringQuality() {
          return this._realTimeFilteringQuality
        }
        set realTimeFilteringQuality(dd) {
          this._realTimeFilteringQuality = dd, this.KWd(1)
        }
        get canRenderToMRT() {
          return !0
        }
        get debugMode() {
          return (0, Ud.c)(this, Od, "f")
        }
        set debugMode(dd) {
          (0, Ud.e)(this, Od, dd, "f")
        }
        constructor(md, Wd) {
          super(md, Wd, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || dd.ForceGLSL), this._directIntensity = 1, this._emissiveIntensity = 1, this._environmentIntensity = 1, this._specularIntensity = 1, this._lightingInfos = new Pd.k(this._directIntensity, this._emissiveIntensity, this._environmentIntensity, this._specularIntensity), this._disableBumpMap = !1, this._albedoTexture = null, this._baseWeightTexture = null, this._baseDiffuseRoughnessTexture = null, this._ambientTexture = null, this._ambientTextureStrength = 1, this._ambientTextureImpactOnAnalyticalLights = dd.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, this._opacityTexture = null, this._reflectionTexture = null, this._emissiveTexture = null, this._reflectivityTexture = null, this._metallicTexture = null, this._metallic = null, this._roughness = null, this._metallicF0Factor = 1, this._metallicReflectanceColor = ld.d.White(), this._useOnlyMetallicFromMetallicReflectanceTexture = !1, this._metallicReflectanceTexture = null, this._reflectanceTexture = null, this._microSurfaceTexture = null, this._bumpTexture = null, this._lightmapTexture = null, this._ambientColor = new ld.d(0, 0, 0), this._albedoColor = new ld.d(1, 1, 1), this._baseWeight = 1, this._baseDiffuseRoughness = null, this._reflectivityColor = new ld.d(1, 1, 1), this._reflectionColor = new ld.d(1, 1, 1), this._emissiveColor = new ld.d(0, 0, 0), this._microSurface = .9, this._useLightmapAsShadowmap = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromAlbedoTexture = !1, this._useSpecularOverAlpha = !0, this._useMicroSurfaceFromReflectivityMapAlpha = !1, this._useRoughnessFromMetallicTextureAlpha = !0, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallnessFromMetallicTextureBlue = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useAmbientInGrayScale = !1, this._useAutoMicroSurfaceFromReflectivityMap = !1, this._lightFalloff = dd.LIGHTFALLOFF_PHYSICAL, this._useRadianceOverAlpha = !0, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new Sd.e(16), this._globalAmbientColor = new ld.d(0, 0, 0), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, Od.set(this, (0, Ud.k)(this, Xd, 0)), this.debugLimit = ((0, Ud.k)(this, Kd), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this.brdf = new ed(this), this.clearCoat = new mO(this), this.iridescence = new FO(this), this.anisotropy = new XO(this), this.sheen = new hO(this), this.subSurface = new QO(this), this.detailMap = new tO.c(this), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), fd.b.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = rd(this.zV()), this.prePassConfiguration = new Id.c
        }
        get hasRenderTargetTextures() {
          return !!(fd.b.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures
        }
        get isPrePassCapable() {
          return !this.disableDepthWrite
        }
        getClassName() {
          return "PBRBaseMaterial"
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === dd.PBRMATERIAL_OPAQUE || this._transparencyMode === dd.PBRMATERIAL_ALPHATEST || this.subSurface?.disableAlphaBlending
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromAlbedoTexture())
        }
        needAlphaTesting() {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.subSurface?.disableAlphaBlending && (this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === dd.PBRMATERIAL_ALPHATEST))
        }
        _shouldUseAlphaFromAlbedoTexture() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha && this._useAlphaFromAlbedoTexture && this._transparencyMode !== dd.PBRMATERIAL_OPAQUE
        }
        _hasAlphaChannel() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha || null != this._opacityTexture
        }
        getAlphaTestTexture() {
          return this._albedoTexture
        }
        isReadyForSubMesh(dd, Od, md) {
          this._uniformBufferLayoutBuilt || this.buildUniformLayout();
          const Wd = Od._drawWrapper;
          if (Wd.effect && this.isFrozen && Wd._wasPreviouslyReady && Wd._wasPreviouslyUsingInstances === md) return !0;
          Od.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), Od.materialDefines = new wO(this._eventInfo.defineNames));
          const Fd = Od.materialDefines;
          if (this._isReadyForSubMesh(Od)) return !0;
          const Rd = this.zV(),
            Xd = Rd.Iq();
          if (Fd._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, Rd.texturesEnabled)) {
            if (this._albedoTexture && fd.b.DiffuseTextureEnabled && !this._albedoTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseWeightTexture && fd.b.BaseWeightTextureEnabled && !this._baseWeightTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseDiffuseRoughnessTexture && fd.b.BaseDiffuseRoughnessTextureEnabled && !this._baseDiffuseRoughnessTexture.isReadyOrNotBlocking()) return !1;
            if (this._ambientTexture && fd.b.AmbientTextureEnabled && !this._ambientTexture.isReadyOrNotBlocking()) return !1;
            if (this._opacityTexture && fd.b.OpacityTextureEnabled && !this._opacityTexture.isReadyOrNotBlocking()) return !1;
            const dd = this._getReflectionTexture();
            if (dd && fd.b.ReflectionTextureEnabled) {
              if (!dd.isReadyOrNotBlocking()) return !1;
              if (dd.irradianceTexture) {
                if (!dd.irradianceTexture.isReadyOrNotBlocking()) return !1
              } else if (!dd.sphericalPolynomial && dd.getInternalTexture()?._sphericalPolynomialPromise) return !1
            }
            if (this._lightmapTexture && fd.b.LightmapTextureEnabled && !this._lightmapTexture.isReadyOrNotBlocking()) return !1;
            if (this._emissiveTexture && fd.b.EmissiveTextureEnabled && !this._emissiveTexture.isReadyOrNotBlocking()) return !1;
            if (fd.b.SpecularTextureEnabled) {
              if (this._metallicTexture) {
                if (!this._metallicTexture.isReadyOrNotBlocking()) return !1
              } else if (this._reflectivityTexture && !this._reflectivityTexture.isReadyOrNotBlocking()) return !1;
              if (this._metallicReflectanceTexture && !this._metallicReflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._reflectanceTexture && !this._reflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._microSurfaceTexture && !this._microSurfaceTexture.isReadyOrNotBlocking()) return !1
            }
            if (Xd.getCaps().standardDerivatives && this._bumpTexture && fd.b.BumpTextureEnabled && !this._disableBumpMap && !this._bumpTexture.isReady()) return !1;
            if (this._environmentBRDFTexture && fd.b.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1
          }
          if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Fd, this._eventInfo.subMesh = Od, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
          if (Fd._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
          if (Fd.AREALIGHTUSED || Fd.CLUSTLIGHT_BATCH)
            for (let td = 0; td < dd.lightSources.length; td++)
              if (!dd.lightSources[td]._isReady()) return !1;
          if (Xd.getCaps().standardDerivatives || dd.isVerticesDataPresent(zd.j.NormalKind) || (dd.createNormals(!0), Bd.c.Warn("PBRMaterial: Normals have been created for the mesh: " + dd.name)), !(0, dO.b)(Rd, dd, this._maxSimultaneousLights, this._disableLighting)) return !1;
          const Kd = Od.effect,
            hd = Fd._areLightsDisposed,
            vd = this._prepareEffect(dd, Od.getRenderingMesh(), Fd, this.onCompiled, this.onError, md, null);
          let Qd = !1;
          if (vd)
            if (this._onEffectCreatedObservable && (YO.effect = vd, YO.subMesh = Od, this._onEffectCreatedObservable.notifyObservers(YO)), this.allowShaderHotSwapping && Kd && !vd.isReady()) {
              if (Fd.markAsUnprocessed(), Qd = this.isFrozen, hd) return Fd._areLightsDisposed = !0, !1
            } else Rd.resetCachedMaterial(), Od.setEffect(vd, Fd, this._materialContext);
          return !(!Od.effect || !Od.effect.isReady()) && (Fd._renderId = Rd.getRenderId(), Wd._wasPreviouslyReady = !Qd, Wd._wasPreviouslyUsingInstances = !!md, this._checkScenePerformancePriority(), !0)
        }
        isMetallicWorkflow() {
          return !(null == this._metallic && null == this._roughness && !this._metallicTexture)
        }
        _prepareEffect(Od, md, Wd) {
          let Fd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            Rd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            Xd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            Kd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
          if (this._prepareDefines(Od, md, Wd, Xd, Kd), !Wd.isDirty) return null;
          Wd.markAsProcessed();
          const hd = this.zV().Iq(),
            vd = new Md.e;
          let Qd = 0;
          Wd.USESPHERICALINVERTEX && vd.addFallback(Qd++, "USESPHERICALINVERTEX"), Wd.FOG && vd.addFallback(Qd, "FOG"), Wd.SPECULARAA && vd.addFallback(Qd, "SPECULARAA"), Wd.POINTSIZE && vd.addFallback(Qd, "POINTSIZE"), Wd.LOGARITHMICDEPTH && vd.addFallback(Qd, "LOGARITHMICDEPTH"), Wd.PARALLAX && vd.addFallback(Qd, "PARALLAX"), Wd.PARALLAX_RHS && vd.addFallback(Qd, "PARALLAX_RHS"), Wd.PARALLAXOCCLUSION && vd.addFallback(Qd++, "PARALLAXOCCLUSION"), Wd.ENVIRONMENTBRDF && vd.addFallback(Qd++, "ENVIRONMENTBRDF"), Wd.TANGENT && vd.addFallback(Qd++, "TANGENT"), Wd.BUMP && vd.addFallback(Qd++, "BUMP"), Qd = (0, dO.s)(Wd, vd, this._maxSimultaneousLights, Qd), Wd.SPECULARTERM && vd.addFallback(Qd++, "SPECULARTERM"), Wd.USESPHERICALFROMREFLECTIONMAP && vd.addFallback(Qd++, "USESPHERICALFROMREFLECTIONMAP"), Wd.USEIRRADIANCEMAP && vd.addFallback(Qd++, "USEIRRADIANCEMAP"), Wd.LIGHTMAP && vd.addFallback(Qd++, "LIGHTMAP"), Wd.NORMAL && vd.addFallback(Qd++, "NORMAL"), Wd.AMBIENT && vd.addFallback(Qd++, "AMBIENT"), Wd.EMISSIVE && vd.addFallback(Qd++, "EMISSIVE"), Wd.VERTEXCOLOR && vd.addFallback(Qd++, "VERTEXCOLOR"), Wd.MORPHTARGETS && vd.addFallback(Qd++, "MORPHTARGETS"), Wd.MULTIVIEW && vd.addFallback(0, "MULTIVIEW");
          const td = [zd.j.PositionKind];
          Wd.NORMAL && td.push(zd.j.NormalKind), Wd.TANGENT && td.push(zd.j.TangentKind);
          for (let dd = 1; dd <= 6; ++dd) Wd["UV" + dd] && td.push(`uv${1===dd?"":dd}`);
          Wd.VERTEXCOLOR && td.push(zd.j.ColorKind), (0, dO.w)(td, Od, Wd, vd), (0, dO.y)(td, Wd), (0, dO.z)(td, Od, Wd), (0, dO.v)(td, Od, Wd);
          let od = "pbr";
          const Nd = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vAlbedoColor", "baseWeight", "baseDiffuseRoughness", "vReflectivityColor", "vMetallicReflectanceFactors", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vAlbedoInfos", "vBaseWeightInfos", "vBaseDiffuseRoughnessInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vReflectivityInfos", "vMetallicReflectanceInfos", "vReflectanceInfos", "vMicroSurfaceSamplerInfos", "vBumpInfos", "vLightmapInfos", "mBones", "albedoMatrix", "baseWeightMatrix", "baseDiffuseRoughnessMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "reflectivityMatrix", "normalMatrix", "microSurfaceSamplerMatrix", "bumpMatrix", "lightmapMatrix", "metallicReflectanceMatrix", "reflectanceMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
            qd = ["albedoSampler", "baseWeightSampler", "baseDiffuseRoughnessSampler", "reflectivitySampler", "ambientSampler", "emissiveSampler", "bumpSampler", "lightmapSampler", "opacitySampler", "microSurfaceSampler", "environmentBrdfSampler", "boneSampler", "metallicReflectanceSampler", "reflectanceSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
          (0, dO.Y)(Nd, qd, !0);
          const Hd = ["Material", "Scene", "Mesh"],
            yd = {
              maxSimultaneousLights: this._maxSimultaneousLights,
              maxSimultaneousMorphTargets: Wd.NUM_MORPH_INFLUENCERS
            };
          if (this._eventInfo.fallbacks = vd, this._eventInfo.fallbackRank = Qd, this._eventInfo.defines = Wd, this._eventInfo.uniforms = Nd, this._eventInfo.attributes = td, this._eventInfo.samplers = qd, this._eventInfo.uniformBuffersNames = Hd, this._eventInfo.customCode = void 0, this._eventInfo.mesh = Od, this._eventInfo.indexParameters = yd, this._callbackPluginEventGeneric(128, this._eventInfo), HO.c.AddUniformsAndSamplers(Nd, qd), Id.c.AddUniforms(Nd), Id.c.AddSamplers(qd), (0, oO.b)(Nd), this._useVertexPulling) {
            const dd = md?.geometry;
            dd && (this._vertexPullingMetadata = (0, NO.f)(dd), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((dd, Od) => {
              Nd.push(`vp_${Od}_info`)
            })))
          } else this._vertexPullingMetadata = null;
          Zd.b && (Zd.b.PrepareUniforms(Nd, Wd), Zd.b.PrepareSamplers(qd, Wd)), (0, dO.Z)({
            uniformsNames: Nd,
            uniformBuffersNames: Hd,
            samplers: qd,
            defines: Wd,
            maxSimultaneousLights: this._maxSimultaneousLights,
            shaderLanguage: this._shaderLanguage
          });
          const bd = {};
          this.customShaderNameResolve && (od = this.customShaderNameResolve(od, Nd, Hd, qd, Wd, td, bd));
          const Td = Wd.toString(),
            pd = hd.createEffect(od, {
              attributes: td,
              uniformsNames: Nd,
              uniformBuffersNames: Hd,
              samplers: qd,
              defines: Td,
              fallbacks: vd,
              onCompiled: Fd,
              onError: Rd,
              indexParameters: yd,
              processFinalCode: bd.processFinalCode,
              processCodeAfterIncludes: this._eventInfo.customCode,
              multiTarget: Wd.PREPASS,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: dd._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, hd);
          return this._eventInfo.customCode = void 0, pd
        }
        _prepareDefines(Od, md, Wd) {
          let Fd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            Rd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
          const Xd = md.hasThinInstances,
            Kd = this.zV(),
            hd = Kd.Iq();
          (0, dO.L)(Kd, Od, Wd, !0, this._maxSimultaneousLights, this._disableLighting), Wd._needNormals = !0, (0, dO.R)(Kd, Wd);
          const vd = this.needAlphaBlendingForMesh(Od) && this.zV().useOrderIndependentTransparency;
          if ((0, dO.U)(Kd, Wd, this.canRenderToMRT && !vd), (0, dO.T)(Kd, Wd, vd), HO.c.PrepareDefines(hd.currentRenderPassId, Od, Wd), Wd.METALLICWORKFLOW = this.isMetallicWorkflow(), Wd._areTexturesDirty) {
            Wd._needUVs = !1;
            for (let dd = 1; dd <= 6; ++dd) Wd["MAINUV" + dd] = !1;
            if (Kd.texturesEnabled) {
              Wd.ALBEDODIRECTUV = 0, Wd.BASE_WEIGHTDIRECTUV = 0, Wd.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, Wd.AMBIENTDIRECTUV = 0, Wd.OPACITYDIRECTUV = 0, Wd.EMISSIVEDIRECTUV = 0, Wd.REFLECTIVITYDIRECTUV = 0, Wd.MICROSURFACEMAPDIRECTUV = 0, Wd.METALLIC_REFLECTANCEDIRECTUV = 0, Wd.REFLECTANCEDIRECTUV = 0, Wd.BUMPDIRECTUV = 0, Wd.LIGHTMAPDIRECTUV = 0, hd.getCaps().textureLOD && (Wd.LODBASEDMICROSFURACE = !0), this._albedoTexture && fd.b.DiffuseTextureEnabled ? ((0, dO.M)(this._albedoTexture, Wd, "ALBEDO"), Wd.GAMMAALBEDO = this._albedoTexture.gammaSpace) : Wd.ALBEDO = !1, this._baseWeightTexture && fd.b.BaseWeightTextureEnabled ? (0, dO.M)(this._baseWeightTexture, Wd, "BASE_WEIGHT") : Wd.BASE_WEIGHT = !1, this._baseDiffuseRoughnessTexture && fd.b.BaseDiffuseRoughnessTextureEnabled ? (0, dO.M)(this._baseDiffuseRoughnessTexture, Wd, "BASE_DIFFUSE_ROUGHNESS") : Wd.BASE_DIFFUSE_ROUGHNESS = !1, this._ambientTexture && fd.b.AmbientTextureEnabled ? ((0, dO.M)(this._ambientTexture, Wd, "AMBIENT"), Wd.AMBIENTINGRAYSCALE = this._useAmbientInGrayScale) : Wd.AMBIENT = !1, this._opacityTexture && fd.b.OpacityTextureEnabled ? ((0, dO.M)(this._opacityTexture, Wd, "OPACITY"), Wd.OPACITYRGB = this._opacityTexture.getAlphaFromRGB) : Wd.OPACITY = !1;
              const dd = this._getReflectionTexture(),
                Od = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || hd.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
              (0, dO.H)(Kd, dd, Wd, this.realTimeFiltering, this.realTimeFilteringQuality, !Od), this._lightmapTexture && fd.b.LightmapTextureEnabled ? ((0, dO.M)(this._lightmapTexture, Wd, "LIGHTMAP"), Wd.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, Wd.GAMMALIGHTMAP = this._lightmapTexture.gammaSpace, Wd.RGBDLIGHTMAP = this._lightmapTexture.isRGBD) : Wd.LIGHTMAP = !1, this._emissiveTexture && fd.b.EmissiveTextureEnabled ? ((0, dO.M)(this._emissiveTexture, Wd, "EMISSIVE"), Wd.GAMMAEMISSIVE = this._emissiveTexture.gammaSpace) : Wd.EMISSIVE = !1, fd.b.SpecularTextureEnabled ? (this._metallicTexture ? ((0, dO.M)(this._metallicTexture, Wd, "REFLECTIVITY"), Wd.ROUGHNESSSTOREINMETALMAPALPHA = this._useRoughnessFromMetallicTextureAlpha, Wd.ROUGHNESSSTOREINMETALMAPGREEN = !this._useRoughnessFromMetallicTextureAlpha && this._useRoughnessFromMetallicTextureGreen, Wd.METALLNESSSTOREINMETALMAPBLUE = this._useMetallnessFromMetallicTextureBlue, Wd.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed, Wd.REFLECTIVITY_GAMMA = !1) : this._reflectivityTexture ? ((0, dO.M)(this._reflectivityTexture, Wd, "REFLECTIVITY"), Wd.MICROSURFACEFROMREFLECTIVITYMAP = this._useMicroSurfaceFromReflectivityMapAlpha, Wd.MICROSURFACEAUTOMATIC = this._useAutoMicroSurfaceFromReflectivityMap, Wd.REFLECTIVITY_GAMMA = this._reflectivityTexture.gammaSpace) : Wd.REFLECTIVITY = !1, this._metallicReflectanceTexture || this._reflectanceTexture ? (Wd.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = this._useOnlyMetallicFromMetallicReflectanceTexture, this._metallicReflectanceTexture ? ((0, dO.M)(this._metallicReflectanceTexture, Wd, "METALLIC_REFLECTANCE"), Wd.METALLIC_REFLECTANCE_GAMMA = this._metallicReflectanceTexture.gammaSpace) : Wd.METALLIC_REFLECTANCE = !1, this._reflectanceTexture && (!this._metallicReflectanceTexture || this._metallicReflectanceTexture && this._useOnlyMetallicFromMetallicReflectanceTexture) ? ((0, dO.M)(this._reflectanceTexture, Wd, "REFLECTANCE"), Wd.REFLECTANCE_GAMMA = this._reflectanceTexture.gammaSpace) : Wd.REFLECTANCE = !1) : (Wd.METALLIC_REFLECTANCE = !1, Wd.REFLECTANCE = !1), this._microSurfaceTexture ? (0, dO.M)(this._microSurfaceTexture, Wd, "MICROSURFACEMAP") : Wd.MICROSURFACEMAP = !1) : (Wd.REFLECTIVITY = !1, Wd.MICROSURFACEMAP = !1), hd.getCaps().standardDerivatives && this._bumpTexture && fd.b.BumpTextureEnabled && !this._disableBumpMap ? ((0, dO.M)(this._bumpTexture, Wd, "BUMP"), this._useParallax && this._albedoTexture && fd.b.DiffuseTextureEnabled ? (Wd.PARALLAX = !0, Wd.PARALLAX_RHS = Kd.useRightHandedSystem, Wd.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : Wd.PARALLAX = !1, Wd.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (Wd.BUMP = !1, Wd.PARALLAX = !1, Wd.PARALLAX_RHS = !1, Wd.PARALLAXOCCLUSION = !1, Wd.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && fd.b.ReflectionTextureEnabled ? (Wd.ENVIRONMENTBRDF = !0, Wd.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (Wd.ENVIRONMENTBRDF = !1, Wd.ENVIRONMENTBRDF_RGBD = !1), this._shouldUseAlphaFromAlbedoTexture() ? Wd.ALPHAFROMALBEDO = !0 : Wd.ALPHAFROMALBEDO = !1
            }
            Wd.SPECULAROVERALPHA = this._useSpecularOverAlpha, this._lightFalloff === dd.LIGHTFALLOFF_STANDARD ? (Wd.USEPHYSICALLIGHTFALLOFF = !1, Wd.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === dd.LIGHTFALLOFF_GLTF ? (Wd.USEPHYSICALLIGHTFALLOFF = !1, Wd.USEGLTFLIGHTFALLOFF = !0) : (Wd.USEPHYSICALLIGHTFALLOFF = !0, Wd.USEGLTFLIGHTFALLOFF = !1), Wd.RADIANCEOVERALPHA = this._useRadianceOverAlpha, !this.backFaceCulling && this._twoSidedLighting ? Wd.TWOSIDEDLIGHTING = !0 : Wd.TWOSIDEDLIGHTING = !1, Wd.MIRRORED = !!Kd._mirroredCameraPosition, Wd.SPECULARAA = hd.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
          }(Wd._areTexturesDirty || Wd._areMiscDirty) && (Wd.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, Wd.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, Wd.ALPHABLEND = this.needAlphaBlendingForMesh(Od), Wd.ALPHAFRESNEL = this._useAlphaFresnel || this._useLinearAlphaFresnel, Wd.LINEARALPHAFRESNEL = this._useLinearAlphaFresnel), Wd._areTexturesDirty && (Wd.TEXTURE_REPETITION_MODE = hd.version > 1 || hd.isWebGPU ? this.textureRepetitionMode : 0), Wd._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(Wd), Wd.FORCENORMALFORWARD = this._forceNormalForward, Wd.RADIANCEOCCLUSION = this._useRadianceOcclusion, Wd.HORIZONOCCLUSION = this._useHorizonOcclusion, Wd._areMiscDirty && ((0, dO.N)(Od, Kd, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(Od), Wd, this._applyDecalMapAfterDetailMap, this._useVertexPulling, md, this._isVertexOutputInvariant), Wd.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !Od.isVerticesDataPresent(zd.j.NormalKind), Wd.DEBUGMODE = this._debugMode), (0, dO.F)(Kd, hd, this, Wd, !!Fd, Rd, Xd), this._eventInfo.defines = Wd, this._eventInfo.mesh = Od, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, dO.E)(Od, Wd, !0, !0, !0, this._transparencyMode !== dd.PBRMATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
        }
        forceCompilation(dd, Od, md) {
          const Wd = {
            clipPlane: !1,
            useInstances: !1,
            ...md
          };
          this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
          (() => {
            if (this._breakShaderLoadedCheck) return;
            const md = new wO(this._eventInfo.defineNames),
              Fd = this._prepareEffect(dd, dd, md, void 0, void 0, Wd.useInstances, Wd.clipPlane);
            this._onEffectCreatedObservable && (YO.effect = Fd, YO.subMesh = null, this._onEffectCreatedObservable.notifyObservers(YO)), Fd.isReady() ? Od && Od(this) : Fd.onCompileObservable.add((() => {
              Od && Od(this)
            }))
          })()
        }
        buildUniformLayout() {
          const dd = this._uniformBuffer;
          dd.addUniform("vAlbedoInfos", 2), dd.addUniform("vBaseWeightInfos", 2), dd.addUniform("vBaseDiffuseRoughnessInfos", 2), dd.addUniform("vAmbientInfos", 4), dd.addUniform("vOpacityInfos", 2), dd.addUniform("vEmissiveInfos", 2), dd.addUniform("vLightmapInfos", 2), dd.addUniform("vReflectivityInfos", 3), dd.addUniform("vMicroSurfaceSamplerInfos", 2), dd.addUniform("vBumpInfos", 3), dd.addUniform("albedoMatrix", 16), dd.addUniform("baseWeightMatrix", 16), dd.addUniform("baseDiffuseRoughnessMatrix", 16), dd.addUniform("ambientMatrix", 16), dd.addUniform("opacityMatrix", 16), dd.addUniform("emissiveMatrix", 16), dd.addUniform("lightmapMatrix", 16), dd.addUniform("reflectivityMatrix", 16), dd.addUniform("microSurfaceSamplerMatrix", 16), dd.addUniform("bumpMatrix", 16), dd.addUniform("vTangentSpaceParams", 2), dd.addUniform("vAlbedoColor", 4), dd.addUniform("baseWeight", 1), dd.addUniform("baseDiffuseRoughness", 1), dd.addUniform("vLightingIntensity", 4), dd.addUniform("pointSize", 1), dd.addUniform("vReflectivityColor", 4), dd.addUniform("vEmissiveColor", 3), dd.addUniform("vAmbientColor", 3), dd.addUniform("vDebugMode", 2), dd.addUniform("vMetallicReflectanceFactors", 4), dd.addUniform("vMetallicReflectanceInfos", 2), dd.addUniform("metallicReflectanceMatrix", 16), dd.addUniform("vReflectanceInfos", 2), dd.addUniform("reflectanceMatrix", 16), dd.addUniform("cameraInfo", 4), dd.addUniform("vTextureRepetitionHexTilingParams", 4), (0, dO.W)(dd, !0, !0, !0, !0, !0), super.buildUniformLayout()
        }
        bindForSubMesh(dd, Od, md) {
          const Wd = this.zV(),
            Fd = md.materialDefines;
          if (!Fd) return;
          const Rd = md.effect;
          if (!Rd) return;
          this._activeEffect = Rd, Od.getMeshUniformBuffer().bindToEffect(Rd, "Mesh"), Od.transferToEffect(dd);
          const Xd = Wd.Iq();
          this._uniformBuffer.bindToEffect(Rd, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, Wd, Od, dd, this.isFrozen), HO.c.Bind(Xd.currentRenderPassId, this._activeEffect, Od, dd, this);
          const Kd = Wd.activeCamera;
          Kd ? this._uniformBuffer.updateFloat4("cameraInfo", Kd.minZ, Kd.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
          const hd = this.textureRepetitionHexTilingParams;
          this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", hd[0], hd[1], hd[2], hd[3]), this._eventInfo.subMesh = md, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), Fd.OBJECTSPACE_NORMALMAP && (dd.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
          const vd = this._mustRebind(Wd, Rd, md, Od.visibility),
            Qd = Xd._features.needToAlwaysBindUniformBuffers;
          (0, dO.d)(Od, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, NO.e)(this._activeEffect, this._vertexPullingMetadata);
          let td = null;
          const od = this._uniformBuffer;
          if (vd) {
            if (this.bindViewProjection(Rd), td = this._getReflectionTexture(), !od.useUbo || !this.isFrozen || !od.isSync || md._drawWrapper._forceRebindOnNextCall) {
              if (Wd.texturesEnabled && (this._albedoTexture && fd.b.DiffuseTextureEnabled && (od.updateFloat2("vAlbedoInfos", this._albedoTexture.coordinatesIndex, this._albedoTexture.level), (0, dO.q)(this._albedoTexture, od, "albedo")), this._baseWeightTexture && fd.b.BaseWeightTextureEnabled && (od.updateFloat2("vBaseWeightInfos", this._baseWeightTexture.coordinatesIndex, this._baseWeightTexture.level), (0, dO.q)(this._baseWeightTexture, od, "baseWeight")), this._baseDiffuseRoughnessTexture && fd.b.BaseDiffuseRoughnessTextureEnabled && (od.updateFloat2("vBaseDiffuseRoughnessInfos", this._baseDiffuseRoughnessTexture.coordinatesIndex, this._baseDiffuseRoughnessTexture.level), (0, dO.q)(this._baseDiffuseRoughnessTexture, od, "baseDiffuseRoughness")), this._ambientTexture && fd.b.AmbientTextureEnabled && (od.updateFloat4("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level, this._ambientTextureStrength, this._ambientTextureImpactOnAnalyticalLights), (0, dO.q)(this._ambientTexture, od, "ambient")), this._opacityTexture && fd.b.OpacityTextureEnabled && (od.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, dO.q)(this._opacityTexture, od, "opacity")), this._emissiveTexture && fd.b.EmissiveTextureEnabled && (od.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, dO.q)(this._emissiveTexture, od, "emissive")), this._lightmapTexture && fd.b.LightmapTextureEnabled && (od.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, dO.q)(this._lightmapTexture, od, "lightmap")), fd.b.SpecularTextureEnabled && (this._metallicTexture ? (od.updateFloat3("vReflectivityInfos", this._metallicTexture.coordinatesIndex, this._metallicTexture.level, this._ambientTextureStrength), (0, dO.q)(this._metallicTexture, od, "reflectivity")) : this._reflectivityTexture && (od.updateFloat3("vReflectivityInfos", this._reflectivityTexture.coordinatesIndex, this._reflectivityTexture.level, 1), (0, dO.q)(this._reflectivityTexture, od, "reflectivity")), this._metallicReflectanceTexture && (od.updateFloat2("vMetallicReflectanceInfos", this._metallicReflectanceTexture.coordinatesIndex, this._metallicReflectanceTexture.level), (0, dO.q)(this._metallicReflectanceTexture, od, "metallicReflectance")), this._reflectanceTexture && Fd.REFLECTANCE && (od.updateFloat2("vReflectanceInfos", this._reflectanceTexture.coordinatesIndex, this._reflectanceTexture.level), (0, dO.q)(this._reflectanceTexture, od, "reflectance")), this._microSurfaceTexture && (od.updateFloat2("vMicroSurfaceSamplerInfos", this._microSurfaceTexture.coordinatesIndex, this._microSurfaceTexture.level), (0, dO.q)(this._microSurfaceTexture, od, "microSurfaceSampler"))), this._bumpTexture && Xd.getCaps().standardDerivatives && fd.b.BumpTextureEnabled && !this._disableBumpMap && (od.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level, this._parallaxScaleBias), (0, dO.q)(this._bumpTexture, od, "bump"), Wd._mirroredCameraPosition ? od.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : od.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, dO.h)(Wd, Fd, od, this._reflectionColor, td, this.realTimeFiltering, !0, !0, !0, !0, !0)), this.pointsCloud && od.updateFloat("pointSize", this.pointSize), Fd.METALLICWORKFLOW) {
                ld.j.Color4[0].r = void 0 === this._metallic || null === this._metallic ? 1 : this._metallic, ld.j.Color4[0].g = void 0 === this._roughness || null === this._roughness ? 1 : this._roughness;
                const dd = this.subSurface?._indexOfRefraction ?? 1.5,
                  Od = 1;
                ld.j.Color4[0].b = dd;
                const md = Math.pow((dd - Od) / (dd + Od), 2);
                ld.j.Color4[0].a = md, od.updateDirectColor4("vReflectivityColor", ld.j.Color4[0]), od.updateColor4("vMetallicReflectanceFactors", this._metallicReflectanceColor, this._metallicF0Factor)
              } else od.updateColor4("vReflectivityColor", this._reflectivityColor, this._microSurface);
              od.updateColor3("vEmissiveColor", fd.b.EmissiveTextureEnabled ? this._emissiveColor : ld.d.BlackReadOnly), !Fd.SS_REFRACTION && this.subSurface?._linkRefractionWithTransparency ? od.updateColor4("vAlbedoColor", this._albedoColor, 1) : od.updateColor4("vAlbedoColor", this._albedoColor, this.alpha), od.updateFloat("baseWeight", this._baseWeight), od.updateFloat("baseDiffuseRoughness", this._baseDiffuseRoughness || 0), this._lightingInfos.x = this._directIntensity, this._lightingInfos.y = this._emissiveIntensity, this._lightingInfos.z = this._environmentIntensity * Wd.environmentIntensity, this._lightingInfos.w = this._specularIntensity, od.updateVector4("vLightingIntensity", this._lightingInfos), Wd.ambientColor.multiplyToRef(this._ambientColor, this._globalAmbientColor), od.updateColor3("vAmbientColor", this._globalAmbientColor), od.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
            }
            Wd.texturesEnabled && (this._albedoTexture && fd.b.DiffuseTextureEnabled && od.setTexture("albedoSampler", this._albedoTexture), this._baseWeightTexture && fd.b.BaseWeightTextureEnabled && od.setTexture("baseWeightSampler", this._baseWeightTexture), this._baseDiffuseRoughnessTexture && fd.b.BaseDiffuseRoughnessTextureEnabled && od.setTexture("baseDiffuseRoughnessSampler", this._baseDiffuseRoughnessTexture), this._ambientTexture && fd.b.AmbientTextureEnabled && od.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && fd.b.OpacityTextureEnabled && od.setTexture("opacitySampler", this._opacityTexture), (0, dO.j)(Wd, Fd, od, td, this.realTimeFiltering), Fd.ENVIRONMENTBRDF && od.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), this._emissiveTexture && fd.b.EmissiveTextureEnabled && od.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && fd.b.LightmapTextureEnabled && od.setTexture("lightmapSampler", this._lightmapTexture), fd.b.SpecularTextureEnabled && (this._metallicTexture ? od.setTexture("reflectivitySampler", this._metallicTexture) : this._reflectivityTexture && od.setTexture("reflectivitySampler", this._reflectivityTexture), this._metallicReflectanceTexture && od.setTexture("metallicReflectanceSampler", this._metallicReflectanceTexture), this._reflectanceTexture && Fd.REFLECTANCE && od.setTexture("reflectanceSampler", this._reflectanceTexture), this._microSurfaceTexture && od.setTexture("microSurfaceSampler", this._microSurfaceTexture)), this._bumpTexture && Xd.getCaps().standardDerivatives && fd.b.BumpTextureEnabled && !this._disableBumpMap && od.setTexture("bumpSampler", this._bumpTexture)), this.zV().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(Od) && this.zV().depthPeelingRenderer.bind(Rd), this._eventInfo.subMesh = md, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, oO.e)(this._activeEffect, this, Wd), this.bindEyePosition(Rd)
          } else Qd && (this._needToBindSceneUbo = !0);
          !vd && this.isFrozen && !Qd || !Wd.lightsEnabled || this._disableLighting || (0, dO.k)(Wd, Od, this._activeEffect, Fd, this._maxSimultaneousLights), !vd && this.isFrozen || ((Wd.fogEnabled && Od.applyFog && Wd.fogMode !== Ld.c.FOGMODE_NONE || td || this.subSurface.refractionTexture || Od.receiveShadows || Fd.PREPASS || Fd.CLUSTLIGHT_BATCH) && this.bindView(Rd), (0, dO.f)(Wd, Od, this._activeEffect, !0), Fd.NUM_MORPH_INFLUENCERS && (0, dO.n)(Od, this._activeEffect), Fd.BAKED_VERTEX_ANIMATION_TEXTURE && Od.bakedVertexAnimationManager?.bind(Rd, Fd.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, dO.m)(Fd, this._activeEffect, Wd)), this._afterBind(Od, this._activeEffect, md), od.update()
        }
        getAnimatables() {
          const dd = super.getAnimatables();
          return this._albedoTexture && this._albedoTexture.animations && this._albedoTexture.animations.length > 0 && dd.push(this._albedoTexture), this._baseWeightTexture && this._baseWeightTexture.animations && this._baseWeightTexture.animations.length > 0 && dd.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && this._baseDiffuseRoughnessTexture.animations && this._baseDiffuseRoughnessTexture.animations.length > 0 && dd.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && dd.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && dd.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && dd.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && dd.push(this._emissiveTexture), this._metallicTexture && this._metallicTexture.animations && this._metallicTexture.animations.length > 0 ? dd.push(this._metallicTexture) : this._reflectivityTexture && this._reflectivityTexture.animations && this._reflectivityTexture.animations.length > 0 && dd.push(this._reflectivityTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && dd.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && dd.push(this._lightmapTexture), this._metallicReflectanceTexture && this._metallicReflectanceTexture.animations && this._metallicReflectanceTexture.animations.length > 0 && dd.push(this._metallicReflectanceTexture), this._reflectanceTexture && this._reflectanceTexture.animations && this._reflectanceTexture.animations.length > 0 && dd.push(this._reflectanceTexture), this._microSurfaceTexture && this._microSurfaceTexture.animations && this._microSurfaceTexture.animations.length > 0 && dd.push(this._microSurfaceTexture), dd
        }
        _getReflectionTexture() {
          return this._reflectionTexture ? this._reflectionTexture : this.zV().environmentTexture
        }
        getActiveTextures() {
          const dd = super.getActiveTextures();
          return this._albedoTexture && dd.push(this._albedoTexture), this._baseWeightTexture && dd.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && dd.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && dd.push(this._ambientTexture), this._opacityTexture && dd.push(this._opacityTexture), this._reflectionTexture && dd.push(this._reflectionTexture), this._emissiveTexture && dd.push(this._emissiveTexture), this._reflectivityTexture && dd.push(this._reflectivityTexture), this._metallicTexture && dd.push(this._metallicTexture), this._metallicReflectanceTexture && dd.push(this._metallicReflectanceTexture), this._reflectanceTexture && dd.push(this._reflectanceTexture), this._microSurfaceTexture && dd.push(this._microSurfaceTexture), this._bumpTexture && dd.push(this._bumpTexture), this._lightmapTexture && dd.push(this._lightmapTexture), dd
        }
        hasTexture(dd) {
          return !!super.hasTexture(dd) || (this._albedoTexture === dd || (this._baseWeightTexture === dd || (this._baseDiffuseRoughnessTexture === dd || (this._ambientTexture === dd || (this._opacityTexture === dd || (this._reflectionTexture === dd || (this._emissiveTexture === dd || (this._reflectivityTexture === dd || (this._metallicTexture === dd || (this._metallicReflectanceTexture === dd || (this._reflectanceTexture === dd || (this._microSurfaceTexture === dd || (this._bumpTexture === dd || this._lightmapTexture === dd)))))))))))))
        }
        setPrePassRenderer() {
          if (!this.subSurface?.isScatteringEnabled) return !1;
          const dd = this.zV().enableSubSurfaceForPrePass();
          return dd && (dd.enabled = !0), !0
        }
        dispose(dd, Od) {
          this._breakShaderLoadedCheck = !0, Od && (this._environmentBRDFTexture && this.zV().environmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._albedoTexture?.dispose(), this._baseWeightTexture?.dispose(), this._baseDiffuseRoughnessTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._metallicTexture?.dispose(), this._reflectivityTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._metallicReflectanceTexture?.dispose(), this._reflectanceTexture?.dispose(), this._microSurfaceTexture?.dispose()), this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(dd, Od)
        }
      }, Od = new WeakMap, (() => {
        const Od = "function" === typeof Symbol && Symbol.metadata ? Object.create(Fd[Symbol.metadata] ?? null) : void 0;
        Wd = [(0, xd.g)("_markAllSubMeshesAsMiscDirty")], (0, Ud.h)(dd, null, Wd, {
          kind: "accessor",
          name: "debugMode",
          static: !1,
          private: !1,
          access: {
            has: dd => "debugMode" in dd,
            get: dd => dd.debugMode,
            set: (dd, Od) => {
              dd.debugMode = Od
            }
          },
          metadata: Od
        }, Xd, Kd), Od && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Od
        })
      })(), dd.PBRMATERIAL_OPAQUE = Rd.b.MATERIAL_OPAQUE, dd.PBRMATERIAL_ALPHATEST = Rd.b.MATERIAL_ALPHATEST, dd.PBRMATERIAL_ALPHABLEND = Rd.b.MATERIAL_ALPHABLEND, dd.PBRMATERIAL_ALPHATESTANDBLEND = Rd.b.MATERIAL_ALPHATESTANDBLEND, dd.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0, dd.LIGHTFALLOFF_PHYSICAL = 0, dd.LIGHTFALLOFF_GLTF = 1, dd.LIGHTFALLOFF_STANDARD = 2, dd.ForceGLSL = !1, dd._ShaderLoader = new qO.b((() => [Promise.all([md.e(636), md.e(647)]).then((() => md(65012))), Promise.all([md.e(641), md.e(637), md.e(698), md.e(650), md.e(697)]).then((() => md(65035)))]), (() => [Promise.all([md.e(655), md.e(657), md.e(664)]).then((() => md(65114))), Promise.all([md.e(655), md.e(658), md.e(701), md.e(668), md.e(700)]).then((() => md(65137)))])), dd
    })();
    Object.getOwnPropertyDescriptor(EO.prototype, "decalMap") || Object.defineProperty(EO.prototype, "decalMap", (0, pO.g)("PBRBaseMaterial", "decalMap")), (0, md(54247).e)();
    var JO = md(41948);
    var UO = md(42029),
      xO = md(54235),
      BO = md(41763),
      SO = md(41777),
      sO = md(41869);
    let uO = !1;
    const VO = new ld.f,
      iO = new ld.f;
    class AO extends xO.b {
      get isSupported() {
        return this._engine?.getCaps().drawBuffersExtension ?? !1
      }
      get textures() {
        return this._textures
      }
      get count() {
        return this._count
      }
      get depthTexture() {
        return this._textures[this._textures.length - 1]
      }
      set wrapU(dd) {
        if (this._textures)
          for (let Od = 0; Od < this._textures.length; Od++) this._textures[Od].wrapU = dd
      }
      set wrapV(dd) {
        if (this._textures)
          for (let Od = 0; Od < this._textures.length; Od++) this._textures[Od].wrapV = dd
      }
      constructor(dd, Od, md, Wd, Fd, Rd) {
        const Xd = !(!Fd || !Fd.generateMipMaps) && Fd.generateMipMaps,
          Kd = !(!Fd || !Fd.generateDepthTexture) && Fd.generateDepthTexture,
          hd = Fd && Fd.depthTextureFormat ? Fd.depthTextureFormat : 15,
          vd = !Fd || void 0 === Fd.doNotChangeAspectRatio || Fd.doNotChangeAspectRatio,
          Qd = !(!Fd || !Fd.drawOnlyOnFirstAttachmentByDefault) && Fd.drawOnlyOnFirstAttachmentByDefault;
        if (super(dd, Od, Wd, Xd, vd, void 0, void 0, void 0, void 0, void 0, void 0, void 0, !0), uO || (uO = !0, SO.ThinEngine.prototype.restoreSingleAttachment = function() {
            const dd = this._gl;
            this.bindAttachments([dd.BACK])
          }, SO.ThinEngine.prototype.restoreSingleAttachmentForRenderTarget = function() {
            const dd = this._gl;
            this.bindAttachments([dd.COLOR_ATTACHMENT0])
          }, SO.ThinEngine.prototype.buildTextureLayout = function(dd) {
            let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const md = this._gl,
              Wd = [];
            if (Od) Wd.push(md.BACK);
            else
              for (let Fd = 0; Fd < dd.length; Fd++) dd[Fd] ? Wd.push(md["COLOR_ATTACHMENT" + Fd]) : Wd.push(md.NONE);
            return Wd
          }, SO.ThinEngine.prototype.bindAttachments = function(dd) {
            const Od = this._gl,
              md = this._currentRenderTarget?.textures;
            if (this._integerMRTAttachmentsMask = 0, md)
              for (let Wd = 0; Wd < dd.length; Wd++) dd[Wd] !== Od.NONE && md[Wd] && (0, sO.i)(md[Wd].format) && (this._integerMRTAttachmentsMask |= 1 << Wd);
            Od.drawBuffers(dd)
          }, SO.ThinEngine.prototype.clearAttachments = function(dd, Od, md, Wd) {
            let Fd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              Rd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            const Xd = this._currentRenderTarget?.textures;
            let Kd = !1;
            if (md && dd && Xd)
              for (let hd = 0; hd < Od.length; hd++) {
                const dd = Xd[hd];
                if (Od[hd] !== this._gl.NONE && dd && (0, sO.i)(dd.format)) {
                  if (this._webGLVersion < 2) throw new Error("ThinEngine.clearAttachments: integer MRT attachments require WebGL2");
                  Kd = !0;
                  break
                }
              }
            if (!Kd || !dd || !Xd) return this.bindAttachments(Od), void this.clear(dd, md, Wd, Fd, Rd);
            this.bindAttachments(Od), this._applyColorWriteState();
            for (let hd = 0; hd < Od.length; hd++) {
              const md = Xd[hd];
              if (Od[hd] !== this._gl.NONE && md) {
                let Od = dd;
                if ((0, sO.i)(md.format)) {
                  const Wd = (0, sO.j)(md.type);
                  Od = Wd ? VO : iO;
                  const Fd = Wd ? 255 : 1;
                  Od.r = Math.round(dd.r * Fd), Od.g = Math.round(dd.g * Fd), Od.b = Math.round(dd.b * Fd), Od.a = Math.round(dd.a * Fd)
                }
                this._clearColorAttachment(hd, Od, md.format, md.type)
              }
            }
            if (Wd || Fd) {
              const dd = this._integerMRTAttachmentsMask;
              this._integerMRTAttachmentsMask = 0;
              try {
                this.clear(null, !1, Wd, Fd, Rd)
              } finally {
                this._integerMRTAttachmentsMask = dd
              }
            }
          }, SO.ThinEngine.prototype.unBindMultiColorAttachmentFramebuffer = function(dd) {
            let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              md = arguments.length > 2 ? arguments[2] : void 0;
            this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, dd.disableAutomaticMSAAResolve || this.resolveMultiFramebuffer(dd), Od || this.generateMipMapsMultiFramebuffer(dd), md && (dd._MSAAFramebuffer && this._bindUnboundFramebuffer(dd._framebuffer), md()), this._bindUnboundFramebuffer(null)
          }, SO.ThinEngine.prototype.createMultipleRenderTarget = function(dd, Od) {
            let md, Wd = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              Fd = !1,
              Rd = !0,
              Xd = !1,
              Kd = !1,
              hd = 1,
              vd = 1,
              Qd = [],
              td = [],
              od = [],
              Nd = [],
              qd = [],
              Hd = [],
              yd = [],
              bd = [],
              Td = [],
              pd = !1;
            const Yd = this._createHardwareRenderTargetWrapper(!0, !1, dd);
            void 0 !== Od && (Fd = void 0 !== Od.generateMipMaps && Od.generateMipMaps, Rd = void 0 === Od.generateDepthBuffer || Od.generateDepthBuffer, Xd = void 0 !== Od.generateStencilBuffer && Od.generateStencilBuffer, Kd = void 0 !== Od.generateDepthTexture && Od.generateDepthTexture, hd = Od.hhd ?? 1, vd = Od.samples ?? vd, Qd = Od.types || Qd, td = Od.samplingModes || td, od = Od.useSRGBBuffers || od, Nd = Od.formats || Nd, qd = Od.targetTypes || qd, Hd = Od.faceIndex || Hd, yd = Od.layerIndex || yd, bd = Od.layerCounts || bd, Td = Od.labels || Td, pd = Od.dontCreateTextures ?? !1, this.YH > 1 && (13 === Od.depthTextureFormat || 17 === Od.depthTextureFormat || 16 === Od.depthTextureFormat || 14 === Od.depthTextureFormat || 18 === Od.depthTextureFormat) && (md = Od.depthTextureFormat)), void 0 === md && (md = Xd ? 13 : 14);
            const gd = this._gl,
              wd = this._currentFramebuffer,
              Ed = gd.createFramebuffer();
            this._bindUnboundFramebuffer(Ed);
            const Jd = dd.width ?? dd,
              Ud = dd.height ?? dd,
              xd = [],
              Sd = [],
              sd = this.YH > 1 && (13 === md || 17 === md || 18 === md);
            Yd.label = Od?.label ?? "MultiRenderTargetWrapper", Yd._framebuffer = Ed, Yd._generateDepthBuffer = Kd || Rd, Yd._generateStencilBuffer = Kd ? sd : Xd, Yd._depthStencilBuffer = this._setupFramebufferDepthAttachments(Yd._generateStencilBuffer, Yd._generateDepthBuffer, Jd, Ud, 1, md), Yd._attachments = Sd;
            for (let ud = 0; ud < hd; ud++) {
              let dd = td[ud] || 3,
                Od = Qd[ud] || 0,
                md = od[ud] || !1;
              const Wd = Nd[ud] || 5,
                Rd = qd[ud] || 3553,
                Xd = bd[ud] ?? 1;
              (1 !== Od || this._caps.textureFloatLinearFiltering) && (2 !== Od || this._caps.textureHalfFloatLinearFiltering) || (dd = 1);
              const Kd = this._getSamplingParameters(dd, Fd);
              1 !== Od || this._caps.textureFloat || (Od = 0, Bd.c.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type")), md = md && this._caps.supportSRGBBuffers && (this.YH > 1 || this.isWebGPU);
              const hd = this.YH > 1,
                vd = gd[hd ? "COLOR_ATTACHMENT" + ud : "COLOR_ATTACHMENT" + ud + "_WEBGL"];
              if (Sd.push(vd), -1 === Rd || pd) continue;
              const Hd = new BO.c(this, 6);
              xd[ud] = Hd, gd.activeTexture(gd["TEXTURE" + ud]), gd.bindTexture(Rd, Hd._hardwareTexture.underlyingResource), gd.texParameteri(Rd, gd.TEXTURE_MAG_FILTER, Kd.mag), gd.texParameteri(Rd, gd.TEXTURE_MIN_FILTER, Kd.min), gd.texParameteri(Rd, gd.TEXTURE_WRAP_S, gd.CLAMP_TO_EDGE), gd.texParameteri(Rd, gd.TEXTURE_WRAP_T, gd.CLAMP_TO_EDGE);
              const yd = this._getRGBABufferInternalSizedFormat(Od, Wd, md),
                wd = this._getInternalFormat(Wd),
                Ed = this._getWebGLTextureType(Od);
              if (!hd || 35866 !== Rd && 32879 !== Rd)
                if (34067 === Rd) {
                  for (let dd = 0; dd < 6; dd++) gd.texImage2D(gd.TEXTURE_CUBE_MAP_POSITIVE_X + dd, 0, yd, Jd, Ud, 0, wd, Ed, null);
                  Hd.isCube = !0
                } else gd.texImage2D(gd.TEXTURE_2D, 0, yd, Jd, Ud, 0, wd, Ed, null);
              else 35866 === Rd ? Hd.is2DArray = !0 : Hd.is3D = !0, Hd.baseDepth = Hd.depth = Xd, gd.texImage3D(Rd, 0, yd, Jd, Ud, Xd, 0, wd, Ed, null);
              Fd && gd.generateMipmap(Rd), this._bindTextureDirectly(Rd, null), Hd.baseWidth = Jd, Hd.baseHeight = Ud, Hd.width = Jd, Hd.height = Ud, Hd.isReady = !0, Hd.samples = 1, Hd.generateMipMaps = Fd, Hd.samplingMode = dd, Hd.type = Od, Hd._useSRGBBuffer = md, Hd.format = Wd, Hd.label = Td[ud] ?? Yd.label + "-Texture" + ud, this._internalTexturesCache.push(Hd)
            }
            if (Kd && this._caps.depthTextureExtension && !pd) {
              const dd = new BO.c(this, 14);
              let Od = 5,
                Wd = gd.DEPTH_COMPONENT16,
                Rd = gd.DEPTH_COMPONENT,
                Xd = gd.UNSIGNED_SHORT,
                Kd = gd.DEPTH_ATTACHMENT;
              this.YH < 2 ? Wd = gd.DEPTH_COMPONENT : 14 === md ? (Od = 1, Xd = gd.FLOAT, Wd = gd.DEPTH_COMPONENT32F) : 18 === md ? (Od = 0, Xd = gd.FLOAT_32_UNSIGNED_INT_24_8_REV, Wd = gd.DEPTH32F_STENCIL8, Rd = gd.DEPTH_STENCIL, Kd = gd.DEPTH_STENCIL_ATTACHMENT) : 16 === md ? (Od = 0, Xd = gd.UNSIGNED_INT, Wd = gd.DEPTH_COMPONENT24, Kd = gd.DEPTH_ATTACHMENT) : 13 !== md && 17 !== md || (Od = 12, Xd = gd.UNSIGNED_INT_24_8, Wd = gd.DEPTH24_STENCIL8, Rd = gd.DEPTH_STENCIL, Kd = gd.DEPTH_STENCIL_ATTACHMENT), this._bindTextureDirectly(gd.TEXTURE_2D, dd, !0), gd.texParameteri(gd.TEXTURE_2D, gd.TEXTURE_MAG_FILTER, gd.NEAREST), gd.texParameteri(gd.TEXTURE_2D, gd.TEXTURE_MIN_FILTER, gd.NEAREST), gd.texParameteri(gd.TEXTURE_2D, gd.TEXTURE_WRAP_S, gd.CLAMP_TO_EDGE), gd.texParameteri(gd.TEXTURE_2D, gd.TEXTURE_WRAP_T, gd.CLAMP_TO_EDGE), gd.texImage2D(gd.TEXTURE_2D, 0, Wd, Jd, Ud, 0, Rd, Xd, null), gd.framebufferTexture2D(gd.FRAMEBUFFER, Kd, gd.TEXTURE_2D, dd._hardwareTexture.underlyingResource, 0), this._bindTextureDirectly(gd.TEXTURE_2D, null), Yd._depthStencilTexture = dd, Yd._depthStencilTextureWithStencil = sd, dd.baseWidth = Jd, dd.baseHeight = Ud, dd.width = Jd, dd.height = Ud, dd.isReady = !0, dd.samples = 1, dd.generateMipMaps = Fd, dd.samplingMode = 1, dd.format = md, dd.type = Od, dd.label = Yd.label + "-DepthStencil", xd[hd] = dd, this._internalTexturesCache.push(dd)
            }
            if (Yd.setTextures(xd), Wd && gd.drawBuffers(Sd), this._bindUnboundFramebuffer(wd), Yd.setLayerAndFaceIndices(yd, Hd), this.resetTextureCache(), pd) {
              if (vd > 1) {
                const dd = gd.createFramebuffer();
                if (!dd) throw new Error("Unable to create multi sampled framebuffer");
                Yd._samples = vd, Yd._MSAAFramebuffer = dd, hd > 0 && Wd && (this._bindUnboundFramebuffer(dd), gd.drawBuffers(Sd), this._bindUnboundFramebuffer(wd))
              }
            } else this.updateMultipleRenderTargetTextureSampleCount(Yd, vd, Wd);
            return Yd
          }, SO.ThinEngine.prototype.updateMultipleRenderTargetTextureSampleCount = function(dd, Od) {
            let md = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (this.YH < 2 || !dd) return 1;
            if (dd.samples === Od) return Od;
            const Wd = this._gl;
            Od = Math.min(Od, this.getCaps().maxMSAASamples), dd._depthStencilBuffer && (Wd.deleteRenderbuffer(dd._depthStencilBuffer), dd._depthStencilBuffer = null), dd._MSAAFramebuffer && (Wd.deleteFramebuffer(dd._MSAAFramebuffer), dd._MSAAFramebuffer = null);
            const Fd = dd._attachments.length;
            for (let Xd = 0; Xd < Fd; Xd++) {
              const Od = dd.textures[Xd]._hardwareTexture;
              Od?.releaseMSAARenderBuffers()
            }
            if (Od > 1 && "function" === typeof Wd.renderbufferStorageMultisample) {
              const Rd = Wd.createFramebuffer();
              if (!Rd) throw new Error("Unable to create multi sampled framebuffer");
              dd._MSAAFramebuffer = Rd, this._bindUnboundFramebuffer(Rd);
              const Xd = [];
              for (let md = 0; md < Fd; md++) {
                const Fd = dd.textures[md],
                  Rd = Fd._hardwareTexture,
                  Kd = Wd[this.YH > 1 ? "COLOR_ATTACHMENT" + md : "COLOR_ATTACHMENT" + md + "_WEBGL"],
                  hd = this._createRenderBuffer(Fd.width, Fd.height, Od, -1, this._getRGBABufferInternalSizedFormat(Fd.type, Fd.format, Fd._useSRGBBuffer), Kd);
                if (!hd) throw new Error("Unable to create multi sampled framebuffer");
                Rd.addMSAARenderBuffer(hd), Fd.samples = Od, Xd.push(Kd)
              }
              md && Wd.drawBuffers(Xd)
            } else this._bindUnboundFramebuffer(dd._framebuffer);
            const Rd = dd._depthStencilTexture ? dd._depthStencilTexture.format : void 0;
            return dd._depthStencilBuffer = this._setupFramebufferDepthAttachments(dd._generateStencilBuffer, dd._generateDepthBuffer, dd.width, dd.height, Od, Rd), this._bindUnboundFramebuffer(null), dd._samples = Od, Od
          }, SO.ThinEngine.prototype.generateMipMapsMultiFramebuffer = function(dd) {
            const Od = dd,
              md = this._gl;
            if (Od.isMulti)
              for (let Wd = 0; Wd < Od._attachments.length; Wd++) {
                const dd = Od.textures[Wd];
                !dd?.generateMipMaps || dd?.isCube || dd?.is3D || (this._bindTextureDirectly(md.TEXTURE_2D, dd, !0), md.generateMipmap(md.TEXTURE_2D), this._bindTextureDirectly(md.TEXTURE_2D, null))
              }
          }, SO.ThinEngine.prototype.resolveMultiFramebuffer = function(dd) {
            const Od = dd,
              md = this._gl;
            if (!Od._MSAAFramebuffer || !Od.isMulti) return;
            let Wd = Od.resolveMSAAColors ? md.COLOR_BUFFER_BIT : 0;
            Wd |= Od._generateDepthBuffer && Od.resolveMSAADepth ? md.DEPTH_BUFFER_BIT : 0, Wd |= Od._generateStencilBuffer && Od.resolveMSAAStencil ? md.STENCIL_BUFFER_BIT : 0;
            const Fd = Od._attachments,
              Rd = Fd.length;
            md.bindFramebuffer(md.READ_FRAMEBUFFER, Od._MSAAFramebuffer), md.bindFramebuffer(md.DRAW_FRAMEBUFFER, Od._framebuffer);
            for (let Xd = 0; Xd < Rd; Xd++) {
              const dd = Od.textures[Xd];
              for (let Od = 0; Od < Rd; Od++) Fd[Od] = md.NONE;
              Fd[Xd] = md[this.YH > 1 ? "COLOR_ATTACHMENT" + Xd : "COLOR_ATTACHMENT" + Xd + "_WEBGL"], md.readBuffer(Fd[Xd]), md.drawBuffers(Fd), md.blitFramebuffer(0, 0, dd.width, dd.height, 0, 0, dd.width, dd.height, Wd, md.NEAREST)
            }
            for (let Xd = 0; Xd < Rd; Xd++) Fd[Xd] = md[this.YH > 1 ? "COLOR_ATTACHMENT" + Xd : "COLOR_ATTACHMENT" + Xd + "_WEBGL"];
            md.drawBuffers(Fd), md.bindFramebuffer(this._gl.FRAMEBUFFER, Od._MSAAFramebuffer)
          }), !this.isSupported) return void this.dispose();
        this._textureNames = Rd;
        const td = [],
          od = [],
          Nd = [],
          qd = [],
          Hd = [],
          yd = [],
          bd = [],
          Td = [];
        this._initTypes(md, td, od, Nd, qd, Hd, yd, bd, Td, Fd);
        const pd = !Fd || void 0 === Fd.generateDepthBuffer || Fd.generateDepthBuffer,
          Yd = !(!Fd || void 0 === Fd.generateStencilBuffer) && Fd.generateStencilBuffer,
          gd = Fd && Fd.samples ? Fd.samples : 1;
        this._multiRenderTargetOptions = {
          samplingModes: od,
          generateMipMaps: Xd,
          generateDepthBuffer: pd,
          generateStencilBuffer: Yd,
          generateDepthTexture: Kd,
          depthTextureFormat: hd,
          types: td,
          hhd: md,
          useSRGBBuffers: Nd,
          samples: gd,
          formats: qd,
          targetTypes: Hd,
          faceIndex: yd,
          layerIndex: bd,
          layerCounts: Td,
          labels: Rd,
          label: dd
        }, this._count = md, this._drawOnlyOnFirstAttachmentByDefault = Qd, md > 0 && (this._createInternalTextures(), this._createTextures(Rd))
      }
      _initTypes(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd, vd) {
        for (let Qd = 0; Qd < dd; Qd++) vd && vd.types && void 0 !== vd.types[Qd] ? Od.push(vd.types[Qd]) : Od.push(vd && vd.defaultType ? vd.defaultType : 0), vd && vd.samplingModes && void 0 !== vd.samplingModes[Qd] ? md.push(vd.samplingModes[Qd]) : md.push(sd.f.BILINEAR_SAMPLINGMODE), vd && vd.useSRGBBuffers && void 0 !== vd.useSRGBBuffers[Qd] ? Wd.push(vd.useSRGBBuffers[Qd]) : Wd.push(!1), vd && vd.formats && void 0 !== vd.formats[Qd] ? Fd.push(vd.formats[Qd]) : Fd.push(5), vd && vd.targetTypes && void 0 !== vd.targetTypes[Qd] ? Rd.push(vd.targetTypes[Qd]) : Rd.push(3553), vd && vd.faceIndex && void 0 !== vd.faceIndex[Qd] ? Xd.push(vd.faceIndex[Qd]) : Xd.push(0), vd && vd.layerIndex && void 0 !== vd.layerIndex[Qd] ? Kd.push(vd.layerIndex[Qd]) : Kd.push(0), vd && vd.layerCounts && void 0 !== vd.layerCounts[Qd] ? hd.push(vd.layerCounts[Qd]) : hd.push(1)
      }
      _createInternaTextureIndexMapping() {
        const dd = {},
          Od = [];
        if (!this._renderTarget) return Od;
        const md = this._renderTarget.textures;
        for (let Wd = 0; Wd < md.length; Wd++) {
          const Fd = md[Wd];
          if (!Fd) continue;
          const Rd = dd[Fd.uniqueId];
          void 0 !== Rd ? Od[Wd] = Rd : dd[Fd.uniqueId] = Wd
        }
        return Od
      }
      _rebuild() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          md = arguments.length > 2 ? arguments[2] : void 0;
        if (this._count < 1 || dd) return;
        const Wd = this._createInternaTextureIndexMapping();
        this.releaseInternalTextures(), this._createInternalTextures(), Od && (this._releaseTextures(), this._createTextures(md));
        const Fd = this._renderTarget.textures;
        for (let Rd = 0; Rd < Fd.length; Rd++) {
          const dd = this._textures[Rd];
          void 0 !== Wd[Rd] && this._renderTarget.setTexture(Fd[Wd[Rd]], Rd), dd._texture = Fd[Rd], dd._texture && (dd._noMipmap = !dd._texture.useMipMaps, dd._useSRGBBuffer = dd._texture._useSRGBBuffer)
        }
        1 !== this.samples && this._renderTarget.setSamples(this.samples, !this._drawOnlyOnFirstAttachmentByDefault, !0)
      }
      _createInternalTextures() {
        this._renderTarget = this._getEngine().createMultipleRenderTarget(this._size, this._multiRenderTargetOptions, !this._drawOnlyOnFirstAttachmentByDefault), this._texture = this._renderTarget.texture
      }
      _releaseTextures() {
        if (this._textures)
          for (let dd = 0; dd < this._textures.length; dd++) this._textures[dd]._texture = null, this._textures[dd].dispose()
      }
      _createTextures(dd) {
        const Od = this._renderTarget.textures;
        this._textures = [];
        for (let md = 0; md < Od.length; md++) {
          const Wd = new sd.f(null, this.zV());
          dd?.[md] && (Wd.name = dd[md]), Wd._texture = Od[md], Wd._texture && (Wd._noMipmap = !Wd._texture.useMipMaps, Wd._useSRGBBuffer = Wd._texture._useSRGBBuffer), this._textures.push(Wd)
        }
      }
      setInternalTexture(dd, Od) {
        let md = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this.renderTarget && (0 === Od && (this._texture = dd), this.renderTarget.setTexture(dd, Od, md), this.textures[Od] || (this.textures[Od] = new sd.f(null, this.zV()), this.textures[Od].name = this._textureNames?.[Od] ?? this.textures[Od].name), this.textures[Od]._texture = dd, this.textures[Od]._noMipmap = !dd.useMipMaps, this.textures[Od]._useSRGBBuffer = dd._useSRGBBuffer, this._count = this.renderTarget.textures ? this.renderTarget.textures.length : 0, this._multiRenderTargetOptions.types && (this._multiRenderTargetOptions.types[Od] = dd.type), this._multiRenderTargetOptions.samplingModes && (this._multiRenderTargetOptions.samplingModes[Od] = dd.samplingMode), this._multiRenderTargetOptions.useSRGBBuffers && (this._multiRenderTargetOptions.useSRGBBuffers[Od] = dd._useSRGBBuffer), this._multiRenderTargetOptions.targetTypes && -1 !== this._multiRenderTargetOptions.targetTypes[Od])) {
          let md;
          md = dd.is2DArray ? 35866 : dd.isCube ? 34067 : dd.is3D ? 32879 : 3553, this._multiRenderTargetOptions.targetTypes[Od] = md
        }
      }
      setLayerAndFaceIndex(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        this.textures[dd] && this.renderTarget && (this._multiRenderTargetOptions.layerIndex && (this._multiRenderTargetOptions.layerIndex[dd] = Od), this._multiRenderTargetOptions.faceIndex && (this._multiRenderTargetOptions.faceIndex[dd] = md), this.renderTarget.setLayerAndFaceIndex(dd, Od, md))
      }
      setLayerAndFaceIndices(dd, Od) {
        this.renderTarget && (this._multiRenderTargetOptions.layerIndex = dd, this._multiRenderTargetOptions.faceIndex = Od, this.renderTarget.setLayerAndFaceIndices(dd, Od))
      }
      get samples() {
        return this._samples
      }
      set samples(dd) {
        this._renderTarget ? this._samples = this._renderTarget.setSamples(dd) : this._samples = dd
      }
      resize(dd) {
        this._processSizeParameter(dd), this._rebuild(!1, void 0, this._textureNames)
      }
      updateCount(dd, Od, md) {
        this._multiRenderTargetOptions.hhd = dd, this._count = dd;
        const Wd = [],
          Fd = [],
          Rd = [],
          Xd = [],
          Kd = [],
          hd = [],
          vd = [],
          Qd = [];
        this._textureNames = md, this._initTypes(dd, Wd, Fd, Rd, Xd, Kd, hd, vd, Qd, Od), this._multiRenderTargetOptions.types = Wd, this._multiRenderTargetOptions.samplingModes = Fd, this._multiRenderTargetOptions.useSRGBBuffers = Rd, this._multiRenderTargetOptions.formats = Xd, this._multiRenderTargetOptions.targetTypes = Kd, this._multiRenderTargetOptions.faceIndex = hd, this._multiRenderTargetOptions.layerIndex = vd, this._multiRenderTargetOptions.layerCounts = Qd, this._multiRenderTargetOptions.labels = md, this._rebuild(!1, !0, md)
      }
      _unbindFrameBuffer(dd, Od) {
        this._renderTarget && dd.unBindMultiColorAttachmentFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(Od)
        }))
      }
      dispose() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._releaseTextures(), dd ? this._texture = null : this.releaseInternalTextures(), super.dispose()
      }
      releaseInternalTextures() {
        const dd = this._renderTarget?.textures;
        if (dd) {
          for (let Od = dd.length - 1; Od >= 0; Od--) this._textures[Od]._texture = null;
          this._renderTarget?.dispose(), this._renderTarget = null
        }
      }
    }
    var rO = md(42095);
    class GO {
      constructor(dd) {
        this.name = rO.b.NAME_GEOMETRYBUFFERRENDERER, this.MH = dd
      }
      register() {
        this.MH._gatherRenderTargetsStage.registerStep(rO.b.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER, this, this._gatherRenderTargets)
      }
      rebuild() {}
      dispose() {}
      _gatherRenderTargets(dd) {
        this.MH._geometryBufferRenderer && dd.push(this.MH._geometryBufferRenderer.getGBuffer())
      }
    }
    let nO = !1;
    var LO;
    ! function(dd) {
      dd[dd.Small = 0] = "Small", dd[dd.Medium = 1] = "Medium", dd[dd.Large = 2] = "Large", dd[dd.ExtraLarge = 3] = "ExtraLarge"
    }(LO || (LO = {}));
    const PO = ["diffuseSampler", "bumpSampler", "reflectivitySampler", "albedoSampler", "morphTargets", "boneSampler", "transmissionWeightSampler", "subsurfaceWeightSampler", "iblShadowSampler"],
      zO = ["world", "mBones", "viewProjection", "diffuseMatrix", "alphaCutOff", "view", "previousWorld", "previousViewProjection", "mPreviousBones", "bumpMatrix", "reflectivityMatrix", "albedoMatrix", "reflectivityColor", "albedoColor", "reflectionMatrix", "vTransmissionWeight", "vSubsurfaceWeight", "vEyePosition", "vTransmissionScatterAnisotropy", "vSubsurfaceScatterAnisotropy", "shadowTextureSize", "metallic", "glossiness", "vTangentSpaceParams", "vBumpInfos", "morphTargetInfluences", "morphTargetCount", "morphTargetTextureInfo", "morphTargetTextureIndices", "boneTextureInfo", "objectId", "meshBlendTag"];
    class cO {
      get renderTransparentMeshes() {
        return this._renderTransparentMeshes
      }
      set renderTransparentMeshes(dd) {
        if (dd && this._enableMeshBlendTag && !this._scene.Iq().getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
        this._renderTransparentMeshes = dd
      }
      get normalsAreUnsigned() {
        return this._normalsAreUnsigned
      }
      _linkPrePassRenderer(dd) {
        if (this._enableObjectId || this._enableMeshBlendTag) throw new Error("GeometryBufferRenderer: object ID and mesh-blending tag textures are not supported when linked to the PrePassRenderer");
        this._linkedWithPrePass = !0, this._prePassRenderer = dd, this._multiRenderTarget && (this._multiRenderTarget.onClearObservable.clear(), this._multiRenderTarget.onClearObservable.add((() => {})))
      }
      _unlinkPrePassRenderer() {
        this._linkedWithPrePass = !1, this._createRenderTargets()
      }
      _resetLayout() {
        this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableReflectivity = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._attachmentsFromPrePass = []
      }
      _forceTextureType(dd, Od) {
        dd === cO.POSITION_TEXTURE_TYPE ? (this._positionIndex = Od, this._enablePosition = !0) : dd === cO.VELOCITY_TEXTURE_TYPE ? (this._velocityIndex = Od, this._enableVelocity = !0) : dd === cO.VELOCITY_LINEAR_TEXTURE_TYPE ? (this._velocityLinearIndex = Od, this._enableVelocityLinear = !0) : dd === cO.REFLECTIVITY_TEXTURE_TYPE ? (this._reflectivityIndex = Od, this._enableReflectivity = !0) : dd === cO.DEPTH_TEXTURE_TYPE ? (this._depthIndex = Od, this._enableDepth = !0) : dd === cO.NORMAL_TEXTURE_TYPE ? (this._normalIndex = Od, this._enableNormal = !0) : dd === cO.SCREENSPACE_DEPTH_TEXTURE_TYPE ? (this._screenspaceDepthIndex = Od, this._enableScreenspaceDepth = !0) : dd === cO.IRRADIANCE_TEXTURE_TYPE ? (this._irradianceIndex = Od, this._enableIrradiance = !0) : dd === cO.OBJECT_ID_TEXTURE_TYPE ? (this._objectIdIndex = Od, this._enableObjectId = !0) : dd === cO.MESH_BLEND_TAG_TEXTURE_TYPE && (this._meshBlendTagIndex = Od, this._enableMeshBlendTag = !0)
      }
      _setAttachments(dd) {
        this._attachmentsFromPrePass = dd
      }
      _linkInternalTexture(dd) {
        this._multiRenderTarget.setInternalTexture(dd, 0, !1)
      }
      get renderList() {
        return this._multiRenderTarget.renderList
      }
      set renderList(dd) {
        this._multiRenderTarget.renderList = dd
      }
      get isSupported() {
        return this._multiRenderTarget.isSupported
      }
      getTextureIndex(dd) {
        switch (dd) {
          case cO.POSITION_TEXTURE_TYPE:
            return this._positionIndex;
          case cO.VELOCITY_TEXTURE_TYPE:
            return this._velocityIndex;
          case cO.VELOCITY_LINEAR_TEXTURE_TYPE:
            return this._velocityLinearIndex;
          case cO.REFLECTIVITY_TEXTURE_TYPE:
            return this._reflectivityIndex;
          case cO.DEPTH_TEXTURE_TYPE:
            return this._depthIndex;
          case cO.NORMAL_TEXTURE_TYPE:
            return this._normalIndex;
          case cO.SCREENSPACE_DEPTH_TEXTURE_TYPE:
            return this._screenspaceDepthIndex;
          case cO.IRRADIANCE_TEXTURE_TYPE:
            return this._irradianceIndex;
          case cO.OBJECT_ID_TEXTURE_TYPE:
            return this._objectIdIndex;
          case cO.MESH_BLEND_TAG_TEXTURE_TYPE:
            return this._meshBlendTagIndex;
          default:
            return -1
        }
      }
      get enableDepth() {
        return this._enableDepth
      }
      set enableDepth(dd) {
        this._enableDepth = dd, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableNormal() {
        return this._enableNormal
      }
      set enableNormal(dd) {
        this._enableNormal = dd, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enablePosition() {
        return this._enablePosition
      }
      set enablePosition(dd) {
        this._enablePosition = dd, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableVelocity() {
        return this._enableVelocity
      }
      set enableVelocity(dd) {
        this._enableVelocity = dd, dd || (this._previousTransformationMatrices = {}), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets()), this._scene.needsPreviousWorldMatrices = dd
      }
      get enableVelocityLinear() {
        return this._enableVelocityLinear
      }
      set enableVelocityLinear(dd) {
        this._enableVelocityLinear = dd, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableReflectivity() {
        return this._enableReflectivity
      }
      set enableReflectivity(dd) {
        this._enableReflectivity = dd, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableScreenspaceDepth() {
        return this._enableScreenspaceDepth
      }
      set enableScreenspaceDepth(dd) {
        this._enableScreenspaceDepth = dd, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableIrradiance() {
        return this._enableIrradiance
      }
      set enableIrradiance(dd) {
        this._enableIrradiance = dd, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableObjectId() {
        return this._enableObjectId
      }
      set enableObjectId(dd) {
        if (dd && this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: object ID textures are not supported when linked to the PrePassRenderer");
        if (dd && 1 !== this.samples) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (dd && !this._enableObjectId && !this._linkedWithPrePass) {
          const dd = this._scene.Iq(),
            Od = Math.min(dd.getCaps().maxDrawBuffers ?? 1, 8),
            md = this._assignRenderTargetIndices()[0] + 1;
          if (dd.getCaps().drawBuffersExtension && md > Od) throw new Error(`GeometryBufferRenderer: ${md} color attachments were requested, but this engine supports at most ${Od}`)
        }
        this._enableObjectId = dd, dd || (this._objectIdIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableMeshBlendingTag() {
        return this._enableMeshBlendTag
      }
      set enableMeshBlendingTag(dd) {
        if (this._enableMeshBlendTag !== dd) {
          if (dd) {
            const dd = this._scene.Iq();
            if (! function(dd) {
                return "NATIVE" !== dd.shaderPlatformName && (dd.isWebGPU || 2 === dd.YH)
              }(dd)) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require WebGL2 or WebGPU");
            if (this.renderTransparentMeshes && !dd.isWebGPU && !dd.getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
            if (this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: mesh-blending tag textures are not supported when linked to the PrePassRenderer");
            if (1 !== this.samples) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
            if (!this._enableMeshBlendTag) {
              const Od = Math.min(dd.getCaps().maxDrawBuffers ?? 1, 8),
                md = this._assignRenderTargetIndices()[0] + 1;
              if (dd.getCaps().drawBuffersExtension && md > Od) throw new Error(`GeometryBufferRenderer: ${md} color attachments were requested, but this engine supports at most ${Od}`)
            }
          }
          this._enableMeshBlendTag = dd, dd || (this._meshBlendTagIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
        }
      }
      get MH() {
        return this._scene
      }
      get ratio() {
        return "object" === typeof this._ratioOrDimensions ? 1 : this._ratioOrDimensions
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
          Wd = arguments.length > 3 ? arguments[3] : void 0;
        var Fd;
        this._previousTransformationMatrices = {}, this._previousBonesTransformationMatrices = {}, this.excludedSkinnedMeshesFromVelocity = [], this._renderTransparentMeshes = !0, this.generateNormalsInWorldSpace = !1, this._normalsAreUnsigned = !1, this._resizeObserver = null, this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableReflectivity = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._clearColor = new ld.f(0, 0, 0, 0), this._clearDepthColor = new ld.f(0, 0, 0, 1), this._positionIndex = -1, this._velocityIndex = -1, this._velocityLinearIndex = -1, this._reflectivityIndex = -1, this._depthIndex = -1, this._normalIndex = -1, this._screenspaceDepthIndex = -1, this._irradianceIndex = -1, this._objectIdIndex = -1, this._meshBlendTagIndex = -1, this._linkedWithPrePass = !1, this.generateIrradianceWithScatterMask = !1, this.useSpecificClearForDepthTexture = !1, this._shaderLanguage = 0, this._shadersLoaded = !1, this._scene = dd, this._ratioOrDimensions = Od, this._useUbo = dd.Iq().supportsUniformBuffers, this._depthFormat = md, this._textureTypesAndFormats = Wd || {}, this._initShaderSourceAsync(), Fd = cO, nO || (nO = !0, Object.defineProperty(Ld.c.prototype, "geometryBufferRenderer", {
          get: function() {
            return this._geometryBufferRenderer
          },
          set: function(dd) {
            dd && dd.isSupported && (this._geometryBufferRenderer = dd)
          },
          enumerable: !0,
          configurable: !0
        }), Ld.c.prototype.enableGeometryBufferRenderer = function() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15,
            md = arguments.length > 2 ? arguments[2] : void 0;
          return this._geometryBufferRenderer || (this._geometryBufferRenderer = new Fd(this, dd, Od, md), this._geometryBufferRenderer.isSupported || (this._geometryBufferRenderer = null)), this._geometryBufferRenderer
        }, Ld.c.prototype.disableGeometryBufferRenderer = function() {
          this._geometryBufferRenderer && (this._geometryBufferRenderer.dispose(), this._geometryBufferRenderer = null)
        }, Fd._SceneComponentInitialization = dd => {
          let Od = dd._getComponent(rO.b.NAME_GEOMETRYBUFFERRENDERER);
          Od || (Od = new GO(dd), dd.yFd(Od))
        }), cO._SceneComponentInitialization(this._scene), this._createRenderTargets()
      }
      async _initShaderSourceAsync() {
        this._scene.Iq().isWebGPU && !cO.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([md.e(656).then((() => md(65316))), Promise.all([md.e(655), md.e(667)]).then((() => md(65324)))])) : await Promise.all([md.e(639).then((() => md(65326))), md.e(638).then((() => md(65331)))]), this._shadersLoaded = !0
      }
      isReady(dd, Od) {
        if (!this._shadersLoaded) return !1;
        const md = dd.fq();
        if (md && md.disableDepthWrite) return !1;
        if (function(dd) {
            return dd._isGaussianSplatting || "GaussianSplattingMesh" === (Od = dd.getClassName()) || "GaussianSplattingStream" === Od;
            var Od
          }(dd.getMesh())) return !1;
        const Wd = [],
          Fd = [zd.j.PositionKind],
          Rd = dd.getMesh();
        Rd.isVerticesDataPresent(zd.j.NormalKind) && (Wd.push("#define HAS_NORMAL_ATTRIBUTE"), Fd.push(zd.j.NormalKind));
        let Xd = !1,
          Kd = !1;
        if (md) {
          let dd = !1;
          if (md.needAlphaTestingForMesh(Rd) && md.getAlphaTestTexture() && (Wd.push("#define ALPHATEST"), Wd.push(`#define ALPHATEST_UV${md.getAlphaTestTexture().coordinatesIndex+1}`), dd = !0), (md.bumpTexture || md.normalTexture || md.geometryNormalTexture) && fd.b.BumpTextureEnabled) {
            const Od = md.bumpTexture || md.normalTexture || md.geometryNormalTexture;
            Wd.push("#define BUMP"), Wd.push(`#define BUMP_UV${Od.coordinatesIndex+1}`), dd = !0
          }
          if (this._enableReflectivity) {
            let Od = !1;
            if ("PBRMetallicRoughnessMaterial" === md.getClassName()) md.metallicRoughnessTexture && (Wd.push("#define ORMTEXTURE"), Wd.push(`#define REFLECTIVITY_UV${md.metallicRoughnessTexture.coordinatesIndex+1}`), Wd.push("#define METALLICWORKFLOW"), dd = !0, Od = !0), null != md.metallic && (Wd.push("#define METALLIC"), Wd.push("#define METALLICWORKFLOW"), Od = !0), null != md.roughness && (Wd.push("#define ROUGHNESS"), Wd.push("#define METALLICWORKFLOW"), Od = !0), Od && (md.baseTexture && (Wd.push("#define ALBEDOTEXTURE"), Wd.push(`#define ALBEDO_UV${md.baseTexture.coordinatesIndex+1}`), md.baseTexture.gammaSpace && Wd.push("#define GAMMAALBEDO"), dd = !0), md.baseColor && Wd.push("#define ALBEDOCOLOR"));
            else if ("PBRSpecularGlossinessMaterial" === md.getClassName()) md.specularGlossinessTexture ? (Wd.push("#define SPECULARGLOSSINESSTEXTURE"), Wd.push(`#define REFLECTIVITY_UV${md.specularGlossinessTexture.coordinatesIndex+1}`), dd = !0, md.specularGlossinessTexture.gammaSpace && Wd.push("#define GAMMAREFLECTIVITYTEXTURE")) : md.specularColor && Wd.push("#define REFLECTIVITYCOLOR"), null != md.glossiness && Wd.push("#define GLOSSINESS");
            else if ("PBRMaterial" === md.getClassName()) md.metallicTexture && (Wd.push("#define ORMTEXTURE"), Wd.push(`#define REFLECTIVITY_UV${md.metallicTexture.coordinatesIndex+1}`), Wd.push("#define METALLICWORKFLOW"), dd = !0, Od = !0), null != md.metallic && (Wd.push("#define METALLIC"), Wd.push("#define METALLICWORKFLOW"), Od = !0), null != md.roughness && (Wd.push("#define ROUGHNESS"), Wd.push("#define METALLICWORKFLOW"), Od = !0), Od ? (md.albedoTexture && (Wd.push("#define ALBEDOTEXTURE"), Wd.push(`#define ALBEDO_UV${md.albedoTexture.coordinatesIndex+1}`), md.albedoTexture.gammaSpace && Wd.push("#define GAMMAALBEDO"), dd = !0), md.albedoColor && Wd.push("#define ALBEDOCOLOR")) : (md.reflectivityTexture ? (Wd.push("#define SPECULARGLOSSINESSTEXTURE"), Wd.push(`#define REFLECTIVITY_UV${md.reflectivityTexture.coordinatesIndex+1}`), md.reflectivityTexture.gammaSpace && Wd.push("#define GAMMAREFLECTIVITYTEXTURE"), dd = !0) : md.reflectivityColor && Wd.push("#define REFLECTIVITYCOLOR"), null != md.microSurface && Wd.push("#define GLOSSINESS"));
            else if ("StandardMaterial" === md.getClassName()) md.specularTexture && (Wd.push("#define REFLECTIVITYTEXTURE"), Wd.push(`#define REFLECTIVITY_UV${md.specularTexture.coordinatesIndex+1}`), md.specularTexture.gammaSpace && Wd.push("#define GAMMAREFLECTIVITYTEXTURE"), dd = !0), md.specularColor && Wd.push("#define REFLECTIVITYCOLOR");
            else if ("OpenPBRMaterial" === md.getClassName()) {
              const Od = md;
              Wd.push("#define METALLIC"), Wd.push("#define ROUGHNESS"), Od._useRoughnessFromMetallicTextureGreen && Od.baseMetalnessTexture ? (Wd.push("#define ORMTEXTURE"), Wd.push(`#define REFLECTIVITY_UV${Od.baseMetalnessTexture.coordinatesIndex+1}`), dd = !0) : Od.baseMetalnessTexture ? (Wd.push("#define METALLIC_TEXTURE"), Wd.push(`#define METALLIC_UV${Od.baseMetalnessTexture.coordinatesIndex+1}`), dd = !0) : Od.specularRoughnessTexture && (Wd.push("#define ROUGHNESS_TEXTURE"), Wd.push(`#define ROUGHNESS_UV${Od.specularRoughnessTexture.coordinatesIndex+1}`), dd = !0), Od.baseColorTexture && (Wd.push("#define ALBEDOTEXTURE"), Wd.push(`#define ALBEDO_UV${Od.baseColorTexture.coordinatesIndex+1}`), Od.baseColorTexture.gammaSpace && Wd.push("#define GAMMAALBEDO"), dd = !0), Od.baseColor && Wd.push("#define ALBEDOCOLOR")
            }
          }
          if (this._enableIrradiance && this.generateIrradianceWithScatterMask && (Wd.push("#define IRRADIANCE_SCATTER_MASK"), "OpenPBRMaterial" === md.getClassName())) {
            const Od = md;
            Od.subsurfaceWeight > 0 && Od.subsurfaceWeightTexture && (Wd.push("#define SUBSURFACE_WEIGHT"), Wd.push(`#define SUBSURFACEWEIGHT_UV${Od.subsurfaceWeightTexture.coordinatesIndex+1}`), dd = !0), Od.transmissionWeight > 0 && Od.transmissionWeightTexture && (Wd.push("#define TRANSMISSION_WEIGHT"), Wd.push(`#define TRANSMISSIONWEIGHT_UV${Od.transmissionWeightTexture.coordinatesIndex+1}`), dd = !0)
          }
          dd && (Wd.push("#define NEED_UV"), Rd.isVerticesDataPresent(zd.j.UVKind) && (Fd.push(zd.j.UVKind), Wd.push("#define UV1"), Xd = !0), Rd.isVerticesDataPresent(zd.j.UV2Kind) && (Fd.push(zd.j.UV2Kind), Wd.push("#define UV2"), Kd = !0))
        }
        if (this._enableDepth && (Wd.push("#define DEPTH"), Wd.push("#define DEPTH_INDEX " + this._depthIndex)), this._enableNormal && (Wd.push("#define NORMAL"), Wd.push("#define NORMAL_INDEX " + this._normalIndex)), this._enablePosition && (Wd.push("#define POSITION"), Wd.push("#define POSITION_INDEX " + this._positionIndex)), this._enableVelocity && (Wd.push("#define VELOCITY"), Wd.push("#define VELOCITY_INDEX " + this._velocityIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(Rd) && Wd.push("#define BONES_VELOCITY_ENABLED")), this._enableVelocityLinear && (Wd.push("#define VELOCITY_LINEAR"), Wd.push("#define VELOCITY_LINEAR_INDEX " + this._velocityLinearIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(Rd) && Wd.push("#define BONES_VELOCITY_ENABLED")), this._enableReflectivity && (Wd.push("#define REFLECTIVITY"), Wd.push("#define REFLECTIVITY_INDEX " + this._reflectivityIndex)), this._enableScreenspaceDepth && -1 !== this._screenspaceDepthIndex && (Wd.push("#define SCREENSPACE_DEPTH_INDEX " + this._screenspaceDepthIndex), Wd.push("#define SCREENSPACE_DEPTH")), this._enableIrradiance && -1 !== this._irradianceIndex) {
          Wd.push("#define IRRADIANCE_INDEX " + this._irradianceIndex), Wd.push("#define IRRADIANCE");
          const dd = this._scene;
          if (dd.environmentTexture) {
            const Od = {};
            let Fd = !1,
              Rd = 0;
            "OpenPBRMaterial" !== md.getClassName() && "StandardMaterial" !== md.getClassName() && "PBRMetallicRoughnessMaterial" !== md.getClassName() && "PBRSpecularGlossinessMaterial" !== md.getClassName() && "PBRMaterial" !== md.getClassName() || (Fd = !!md.realtimeFiltering, Rd = md.realtimeFilteringQuality || 0), (0, dO.H)(dd, dd.environmentTexture, Od, Fd, Rd, !0);
            for (const dd in Od) Od[dd] && Wd.push("#define " + dd);
            Od.USEIRRADIANCEMAP || Wd.push("#define SPHERICAL_HARMONICS");
            const Xd = dd.postProcessRenderPipelineManager.supportedPipelines.find((dd => "IBLShadowsRenderPipeline" === dd.getClassName()));
            if (Xd) {
              const dd = Xd;
              dd._getAccumulatedTexture() && (Wd.push("#define IBL_SHADOW_TEXTURE"), dd.coloredShadows && Wd.push("#define COLORED_IBL_SHADOWS"))
            }
          }
        }
        this._enableObjectId && (Wd.push("#define OBJECT_ID"), Wd.push("#define OBJECT_ID_INDEX " + this._objectIdIndex)), this._enableMeshBlendTag && (Wd.push("#define MESH_BLEND_TAG"), Wd.push("#define MESH_BLEND_TAG_INDEX " + this._meshBlendTagIndex)), this.generateNormalsInWorldSpace && Wd.push("#define NORMAL_WORLDSPACE"), this._normalsAreUnsigned && Wd.push("#define ENCODE_NORMAL"), Rd.useBones && Rd.computeBonesUsingShaders && Rd.skeleton ? (Fd.push(zd.j.MatricesIndicesKind), Fd.push(zd.j.MatricesWeightsKind), Rd.numBoneInfluencers > 4 && (Fd.push(zd.j.MatricesIndicesExtraKind), Fd.push(zd.j.MatricesWeightsExtraKind)), Wd.push("#define NUM_BONE_INFLUENCERS " + Rd.numBoneInfluencers), Wd.push("#define BONETEXTURE " + Rd.skeleton.isUsingTextureForMatrices), Wd.push("#define BonesPerMesh " + (Rd.skeleton.bones.length + 1))) : (Wd.push("#define NUM_BONE_INFLUENCERS 0"), Wd.push("#define BONETEXTURE false"), Wd.push("#define BonesPerMesh 0"));
        const hd = Rd.morphTargetManager ? (0, dO.B)(Rd.morphTargetManager, Wd, Fd, Rd, !0, !0, !1, Xd, Kd, !1) : 0;
        Od && (Wd.push("#define INSTANCES"), (0, dO._)(Fd, this._enableVelocity || this._enableVelocityLinear), dd.getRenderingMesh().hasThinInstances && Wd.push("#define THIN_INSTANCES")), this._linkedWithPrePass ? Wd.push("#define SCENE_MRT_COUNT " + this._attachmentsFromPrePass.length) : Wd.push("#define SCENE_MRT_COUNT " + this._multiRenderTarget.textures.length), (0, oO.k)(md, this._scene, Wd);
        const vd = this._scene.Iq(),
          Qd = dd._getDrawWrapper(void 0, !0),
          td = Qd.defines,
          od = Wd.join("\n");
        return td !== od && Qd.setEffect(vd.createEffect("geometry", {
          attributes: Fd,
          uniformsNames: zO,
          samplers: PO,
          defines: od,
          onCompiled: null,
          fallbacks: null,
          onError: null,
          uniformBuffersNames: ["Scene"],
          indexParameters: {
            buffersCount: this._multiRenderTarget.textures.length - 1,
            maxSimultaneousMorphTargets: hd
          },
          shaderLanguage: this.shaderLanguage
        }, vd), od), Qd.effect.isReady()
      }
      getGBuffer() {
        return this._multiRenderTarget
      }
      get samples() {
        return this._multiRenderTarget.samples
      }
      set samples(dd) {
        if (this._enableObjectId && 1 !== dd) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (this._enableMeshBlendTag && 1 !== dd) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
        this._multiRenderTarget.samples = dd
      }
      dispose() {
        if (this._resizeObserver) {
          this._scene.Iq().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null
        }
        this._multiRenderTarget?.renderTarget && this.MH.Iq()._currentRenderTarget === this._multiRenderTarget.renderTarget && this.MH.Iq().unBindFramebuffer(this._multiRenderTarget?.renderTarget), this.getGBuffer().dispose()
      }
      _assignRenderTargetIndices() {
        const dd = [],
          Od = [];
        let md = 0;
        return this._enableDepth && (this._depthIndex = md, md++, dd.push("gBuffer_Depth"), Od.push(this._textureTypesAndFormats[cO.DEPTH_TEXTURE_TYPE])), this._enableNormal && (this._normalIndex = md, md++, dd.push("gBuffer_Normal"), Od.push(this._textureTypesAndFormats[cO.NORMAL_TEXTURE_TYPE])), this._enablePosition && (this._positionIndex = md, md++, dd.push("gBuffer_Position"), Od.push(this._textureTypesAndFormats[cO.POSITION_TEXTURE_TYPE])), this._enableVelocity && (this._velocityIndex = md, md++, dd.push("gBuffer_Velocity"), Od.push(this._textureTypesAndFormats[cO.VELOCITY_TEXTURE_TYPE])), this._enableVelocityLinear && (this._velocityLinearIndex = md, md++, dd.push("gBuffer_VelocityLinear"), Od.push(this._textureTypesAndFormats[cO.VELOCITY_LINEAR_TEXTURE_TYPE])), this._enableReflectivity && (this._reflectivityIndex = md, md++, dd.push("gBuffer_Reflectivity"), Od.push(this._textureTypesAndFormats[cO.REFLECTIVITY_TEXTURE_TYPE])), this._enableScreenspaceDepth && (this._screenspaceDepthIndex = md, md++, dd.push("gBuffer_ScreenspaceDepth"), Od.push(this._textureTypesAndFormats[cO.SCREENSPACE_DEPTH_TEXTURE_TYPE])), this._enableIrradiance && (this._irradianceIndex = md, md++, dd.push("gBuffer_Irradiance"), Od.push(this._textureTypesAndFormats[cO.IRRADIANCE_TEXTURE_TYPE])), this._enableObjectId && (this._objectIdIndex = md, md++, dd.push("gBuffer_ObjectId"), Od.push({
          textureType: 0,
          textureFormat: 5,
          samplingMode: 1
        })), this._enableMeshBlendTag && (this._meshBlendTagIndex = md, md++, dd.push("gBuffer_MeshBlendTag"), Od.push({
          textureType: 0,
          textureFormat: 8,
          samplingMode: 1
        })), [md, dd, Od]
      }
      _createRenderTargets() {
        const dd = this._scene.Iq(),
          [Od, md, Wd] = this._assignRenderTargetIndices(),
          Fd = Math.min(dd.getCaps().maxDrawBuffers ?? 1, 8);
        if (dd.getCaps().drawBuffersExtension && Od > Fd) throw new Error(`GeometryBufferRenderer: ${Od} color attachments were requested, but this engine supports at most ${Fd}`);
        let Xd = 0;
        dd._caps.textureFloat && dd._caps.textureFloatLinearFiltering ? Xd = 1 : dd._caps.textureHalfFloat && dd._caps.textureHalfFloatLinearFiltering && (Xd = 2);
        const Kd = this._getRenderTargetDimensions(),
          hd = [],
          vd = [],
          Qd = [];
        for (const Rd of Wd) Rd ? (hd.push(Rd.textureType), vd.push(Rd.textureFormat), Qd.push(Rd.samplingMode ?? 2)) : (hd.push(Xd), vd.push(5), Qd.push(2));
        if (this._normalsAreUnsigned = 11 === hd[cO.NORMAL_TEXTURE_TYPE] || 13 === hd[cO.NORMAL_TEXTURE_TYPE], this._multiRenderTarget = new AO("gBuffer", Kd, Od, this._scene, {
            generateMipMaps: !1,
            generateDepthTexture: !0,
            types: hd,
            formats: vd,
            samplingModes: Qd,
            depthTextureFormat: this._depthFormat
          }, md.concat("gBuffer_DepthBuffer")), !this.isSupported) return;
        this._multiRenderTarget.wrapU = sd.f.CLAMP_ADDRESSMODE, this._multiRenderTarget.wrapV = sd.f.CLAMP_ADDRESSMODE, this._multiRenderTarget.refreshRate = 1, this._multiRenderTarget.renderParticles = !1, this._multiRenderTarget.renderList = null;
        const td = [!0],
          od = [!1],
          Nd = [!0];
        for (let Rd = 1; Rd < Od; ++Rd) td.push(!0), Nd.push(!1), od.push(!0);
        const qd = dd.buildTextureLayout(td),
          Hd = dd.buildTextureLayout(od),
          yd = dd.buildTextureLayout(Nd);
        this._multiRenderTarget.onClearObservable.add((dd => {
          const Od = this.useSpecificClearForDepthTexture ? Hd : qd;
          dd.clearAttachments(this._clearColor, Od, !0, !0, !0), this.useSpecificClearForDepthTexture && dd.clearAttachments(this._clearDepthColor, yd, !0, !1, !1), dd.bindAttachments(qd)
        })), this._resizeObserver = dd.onResizeObservable.add((() => {
          this._multiRenderTarget && this._multiRenderTarget.resize(this._getRenderTargetDimensions())
        }));
        const bd = dd => {
          const Od = dd.getRenderingMesh(),
            md = dd.getEffectiveMesh(),
            Wd = this._scene,
            Fd = Wd.Iq(),
            Xd = dd.fq();
          if (!Xd) return;
          if (md._internalAbstractMeshDataInfo._isActiveIntermediate = !1, (this._enableVelocity || this._enableVelocityLinear) && !this._previousTransformationMatrices[md.uniqueId] && (this._previousTransformationMatrices[md.uniqueId] = {
              Bt: Pd.d.Identity(),
              viewProjection: Wd.getTransformMatrix()
            }, Od.skeleton)) {
            const dd = Od.skeleton.getTransformMatrices(Od);
            this._previousBonesTransformationMatrices[Od.uniqueId] = this._copyBonesTransformationMatrices(dd, new Float32Array(dd.length))
          }
          const Kd = Od._getInstancesRenderList(dd._id, !!dd.getReplacementMesh());
          if (Kd.mustReturn) return;
          const hd = Fd.getCaps().instancedArrays && (null !== Kd.visibleInstances[dd._id] || Od.hasThinInstances),
            vd = md.getWorldMatrix();
          if (this.isReady(dd, hd)) {
            const Qd = dd._getDrawWrapper();
            if (!Qd) return;
            const td = Qd.effect;
            let od;
            Fd.enableEffect(Qd), hd || Od._bind(dd, td, Xd.fillMode), this._useUbo ? ((0, dO.p)(td, this._scene.getSceneUniformBuffer()), this._scene.finalizeSceneUbo()) : (td.setMatrix("viewProjection", Wd.getTransformMatrix()), td.setMatrix("view", Wd.getViewMatrix()), this._scene.bindEyePosition(td, "vEyePosition"));
            if (Od._instanceDataStorage.isFrozen || !Xd.backFaceCulling && null === Xd.sideOrientation) od = Od._effectiveSideOrientation;
            else {
              const dd = md._getWorldMatrixDeterminant();
              od = Xd._getEffectiveOrientation(Od), dd < 0 && (od = od === Rd.b.ClockWiseSideOrientation ? Rd.b.CounterClockWiseSideOrientation : Rd.b.ClockWiseSideOrientation)
            }
            if (Xd._preBind(Qd, od), Xd.needAlphaTestingForMesh(md)) {
              const dd = Xd.getAlphaTestTexture();
              dd && (td.setTexture("diffuseSampler", dd), td.setMatrix("diffuseMatrix", dd.getTextureMatrix()), td.setFloat("alphaCutOff", Xd.alphaCutOff ?? .4))
            }
            if ((Xd.bumpTexture || Xd.normalTexture || Xd.geometryNormalTexture) && Wd.Iq().getCaps().standardDerivatives && fd.b.BumpTextureEnabled) {
              const dd = Xd.bumpTexture || Xd.normalTexture || Xd.geometryNormalTexture;
              td.setFloat3("vBumpInfos", dd.coordinatesIndex, 1 / dd.level, Xd.parallaxScaleBias), td.setMatrix("bumpMatrix", dd.getTextureMatrix()), td.setTexture("bumpSampler", dd), td.setFloat2("vTangentSpaceParams", Xd.invertNormalMapX ? -1 : 1, Xd.invertNormalMapY ? -1 : 1)
            }
            if (this._enableReflectivity)
              if ("PBRMetallicRoughnessMaterial" === Xd.getClassName()) null !== Xd.metallicRoughnessTexture && (td.setTexture("reflectivitySampler", Xd.metallicRoughnessTexture), td.setMatrix("reflectivityMatrix", Xd.metallicRoughnessTexture.getTextureMatrix())), null !== Xd.metallic && td.setFloat("metallic", Xd.metallic), null !== Xd.roughness && td.setFloat("glossiness", 1 - Xd.roughness), null !== Xd.baseTexture && (td.setTexture("albedoSampler", Xd.baseTexture), td.setMatrix("albedoMatrix", Xd.baseTexture.getTextureMatrix())), null !== Xd.baseColor && td.setColor3("albedoColor", Xd.baseColor);
              else if ("PBRSpecularGlossinessMaterial" === Xd.getClassName()) null !== Xd.specularGlossinessTexture ? (td.setTexture("reflectivitySampler", Xd.specularGlossinessTexture), td.setMatrix("reflectivityMatrix", Xd.specularGlossinessTexture.getTextureMatrix())) : null !== Xd.specularColor && td.setColor3("reflectivityColor", Xd.specularColor), null !== Xd.glossiness && td.setFloat("glossiness", Xd.glossiness);
            else if ("PBRMaterial" === Xd.getClassName()) null !== Xd.metallicTexture && (td.setTexture("reflectivitySampler", Xd.metallicTexture), td.setMatrix("reflectivityMatrix", Xd.metallicTexture.getTextureMatrix())), null !== Xd.metallic && td.setFloat("metallic", Xd.metallic), null !== Xd.roughness && td.setFloat("glossiness", 1 - Xd.roughness), null !== Xd.roughness || null !== Xd.metallic || null !== Xd.metallicTexture ? (null !== Xd.albedoTexture && (td.setTexture("albedoSampler", Xd.albedoTexture), td.setMatrix("albedoMatrix", Xd.albedoTexture.getTextureMatrix())), null !== Xd.albedoColor && td.setColor3("albedoColor", Xd.albedoColor)) : (null !== Xd.reflectivityTexture ? (td.setTexture("reflectivitySampler", Xd.reflectivityTexture), td.setMatrix("reflectivityMatrix", Xd.reflectivityTexture.getTextureMatrix())) : null !== Xd.reflectivityColor && td.setColor3("reflectivityColor", Xd.reflectivityColor), null !== Xd.microSurface && td.setFloat("glossiness", Xd.microSurface));
            else if ("StandardMaterial" === Xd.getClassName()) null !== Xd.specularTexture && (td.setTexture("reflectivitySampler", Xd.specularTexture), td.setMatrix("reflectivityMatrix", Xd.specularTexture.getTextureMatrix())), null !== Xd.specularColor && td.setColor3("reflectivityColor", Xd.specularColor);
            else if ("OpenPBRMaterial" === Xd.getClassName()) {
              const dd = Xd;
              dd._useRoughnessFromMetallicTextureGreen && dd.baseMetalnessTexture ? (td.setTexture("reflectivitySampler", dd.baseMetalnessTexture), td.setMatrix("reflectivityMatrix", dd.baseMetalnessTexture.getTextureMatrix())) : dd.baseMetalnessTexture ? (td.setTexture("metallicSampler", dd.baseMetalnessTexture), td.setMatrix("metallicMatrix", dd.baseMetalnessTexture.getTextureMatrix())) : dd.specularRoughnessTexture && (td.setTexture("roughnessSampler", dd.specularRoughnessTexture), td.setMatrix("roughnessMatrix", dd.specularRoughnessTexture.getTextureMatrix())), td.setFloat("metallic", dd.baseMetalness), td.setFloat("glossiness", 1 - dd.specularRoughness), null !== dd.baseColorTexture && (td.setTexture("albedoSampler", dd.baseColorTexture), td.setMatrix("albedoMatrix", dd.baseColorTexture.getTextureMatrix())), null !== dd.baseColor && td.setColor3("albedoColor", dd.baseColor)
            }
            if (this._enableIrradiance && Wd.environmentTexture) {
              const dd = Wd.environmentTexture,
                Od = Wd.postProcessRenderPipelineManager.supportedPipelines.find((dd => "IBLShadowsRenderPipeline" === dd.getClassName()));
              if (Od) {
                const dd = Od._getAccumulatedTexture();
                dd && (td.setTexture("iblShadowSampler", dd), td.setFloat2("shadowTextureSize", dd.getSize().width, dd.getSize().height))
              }
              if (td.setMatrix("reflectionMatrix", dd.getReflectionTextureMatrix()), td.setFloat2("vReflectionInfos", dd.level * Wd.iblIntensity, 0), td.setTexture("reflectionSampler", dd), dd.irradianceTexture && (td.setTexture("irradianceSampler", dd.irradianceTexture), dd.irradianceTexture._dominantDirection && td.setVector3("vReflectionDominantDirection", dd.irradianceTexture._dominantDirection)), dd.sphericalPolynomial) {
                const Od = dd.sphericalPolynomial;
                if (Od.preScaledHarmonics) {
                  const dd = Od.preScaledHarmonics;
                  td.setVector3("vSphericalL00", dd.l00), td.setVector3("vSphericalL1_1", dd.l1_1), td.setVector3("vSphericalL10", dd.l10), td.setVector3("vSphericalL11", dd.l11), td.setVector3("vSphericalL2_2", dd.l2_2), td.setVector3("vSphericalL2_1", dd.l2_1), td.setVector3("vSphericalL20", dd.l20), td.setVector3("vSphericalL21", dd.l21), td.setVector3("vSphericalL22", dd.l22)
                } else td.setFloat3("vSphericalX", Od.x.x, Od.x.y, Od.x.z), td.setFloat3("vSphericalY", Od.y.x, Od.y.y, Od.y.z), td.setFloat3("vSphericalZ", Od.z.x, Od.z.y, Od.z.z), td.setFloat3("vSphericalXX_ZZ", Od.xx.x - Od.zz.x, Od.xx.y - Od.zz.y, Od.xx.z - Od.zz.z), td.setFloat3("vSphericalYY_ZZ", Od.yy.x - Od.zz.x, Od.yy.y - Od.zz.y, Od.yy.z - Od.zz.z), td.setFloat3("vSphericalZZ", Od.zz.x, Od.zz.y, Od.zz.z), td.setFloat3("vSphericalXY", Od.xy.x, Od.xy.y, Od.xy.z), td.setFloat3("vSphericalYZ", Od.yz.x, Od.yz.y, Od.yz.z), td.setFloat3("vSphericalZX", Od.zx.x, Od.zx.y, Od.zx.z)
              }
              if (this.generateIrradianceWithScatterMask && "OpenPBRMaterial" === Xd.getClassName()) {
                const dd = Xd;
                td.setFloat("vSubsurfaceWeight", dd.subsurfaceWeight), dd.subsurfaceWeightTexture && (td.setTexture("subsurfaceWeightSampler", dd.subsurfaceWeightTexture), td.setMatrix("subsurfaceWeightMatrix", dd.subsurfaceWeightTexture.getTextureMatrix())), td.setFloat("vTransmissionWeight", dd.transmissionWeight), dd.transmissionWeightTexture && (td.setTexture("transmissionWeightSampler", dd.transmissionWeightTexture), td.setMatrix("transmissionWeightMatrix", dd.transmissionWeightTexture.getTextureMatrix())), td.setFloat("vTransmissionScatterAnisotropy", dd.transmissionScatterAnisotropy), td.setFloat("vSubsurfaceScatterAnisotropy", dd.subsurfaceScatterAnisotropy)
              }
            }
            if ((0, oO.e)(td, Xd, this._scene), Od.useBones && Od.computeBonesUsingShaders && Od.skeleton) {
              const dd = Od.skeleton;
              if (dd.isUsingTextureForMatrices && td.getUniformIndex("boneTextureInfo") > -1) {
                const md = dd.getTransformMatrixTexture(Od);
                td.setTexture("boneSampler", md), td.setFloat2("boneTextureInfo", dd._textureWidth, dd._textureHeight)
              } else td.setMatrices("mBones", Od.skeleton.getTransformMatrices(Od));
              (this._enableVelocity || this._enableVelocityLinear) && td.setMatrices("mPreviousBones", this._previousBonesTransformationMatrices[Od.uniqueId])
            }
            if ((0, dO.n)(Od, td), Od.morphTargetManager && Od.morphTargetManager.isUsingTextureForTargets && Od.morphTargetManager._bind(td), (this._enableVelocity || this._enableVelocityLinear) && (td.setMatrix("previousWorld", this._previousTransformationMatrices[md.uniqueId].Bt), td.setMatrix("previousViewProjection", this._previousTransformationMatrices[md.uniqueId].viewProjection)), this._enableObjectId) {
              let dd = Od.uniqueId;
              if (this.objectIdProvider) dd = (0, HO.j)(Od, this.objectIdProvider);
              else if (dd > 16777215) throw new Error(`Invalid geometry object ID ${dd} for mesh "${Od.name}". Object IDs must be integers between 0 and 0xFFFFFF.`);
              td.setFloat("objectId", dd)
            }
            if (this._enableMeshBlendTag) {
              const dd = this.meshBlendTagProvider ? (0, HO.g)(Od, this.meshBlendTagProvider) : Od.meshBlendingTag;
              td.setInt("meshBlendTag", dd)
            }
            hd && Od.hasThinInstances && td.setMatrix("world", vd), Od._processRendering(md, dd, td, Xd.fillMode, Kd, hd, ((dd, Od) => {
              dd || td.setMatrix("world", Od)
            }))
          }(this._enableVelocity || this._enableVelocityLinear) && (this._previousTransformationMatrices[md.uniqueId].Bt = vd.clone(), this._previousTransformationMatrices[md.uniqueId].viewProjection = this._scene.getTransformMatrix().clone(), Od.skeleton && this._copyBonesTransformationMatrices(Od.skeleton.getTransformMatrices(Od), this._previousBonesTransformationMatrices[md.uniqueId]))
        };
        this._multiRenderTarget.customIsReadyFunction = (Od, md, Wd) => {
          if ((Wd || 0 === md) && Od.ZE)
            for (let Fd = 0; Fd < Od.ZE.length; ++Fd) {
              const md = Od.ZE[Fd],
                Wd = md.fq(),
                Rd = md.getRenderingMesh();
              if (!Wd) continue;
              const Xd = Rd._getInstancesRenderList(md._id, !!md.getReplacementMesh()),
                Kd = dd.getCaps().instancedArrays && (null !== Xd.visibleInstances[md._id] || Rd.hasThinInstances);
              if (!this.isReady(md, Kd)) return !1
            }
          return !0
        }, this._multiRenderTarget.customRenderFunction = (Od, md, Wd, Fd) => {
          let Rd;
          if (this._linkedWithPrePass) {
            if (!this._prePassRenderer.enabled) return;
            this._scene.Iq().bindAttachments(this._attachmentsFromPrePass)
          }
          if (Fd.length) {
            for (dd.setColorWrite(!1), Rd = 0; Rd < Fd.length; Rd++) bd(Fd.data[Rd]);
            dd.setColorWrite(!0)
          }
          for (Rd = 0; Rd < Od.length; Rd++) bd(Od.data[Rd]);
          for (dd.setDepthWrite(!1), Rd = 0; Rd < md.length; Rd++) bd(md.data[Rd]);
          if (this.renderTransparentMeshes)
            for (Rd = 0; Rd < Wd.length; Rd++) bd(Wd.data[Rd]);
          dd.setDepthWrite(!0)
        }
      }
      _getRenderTargetDimensions() {
        if ("object" === typeof this._ratioOrDimensions) return {
          width: Math.max(1, Math.floor(this._ratioOrDimensions.width)),
          height: Math.max(1, Math.floor(this._ratioOrDimensions.height))
        };
        const dd = this._scene.Iq();
        return {
          width: Math.max(1, Math.floor(dd.getRenderWidth() * this._ratioOrDimensions)),
          height: Math.max(1, Math.floor(dd.getRenderHeight() * this._ratioOrDimensions))
        }
      }
      _copyBonesTransformationMatrices(dd, Od) {
        for (let md = 0; md < dd.length; md++) Od[md] = dd[md];
        return Od
      }
    }
    cO.ForceGLSL = !1, cO.DEPTH_TEXTURE_TYPE = 0, cO.NORMAL_TEXTURE_TYPE = 1, cO.POSITION_TEXTURE_TYPE = 2, cO.VELOCITY_TEXTURE_TYPE = 3, cO.REFLECTIVITY_TEXTURE_TYPE = 4, cO.SCREENSPACE_DEPTH_TEXTURE_TYPE = 5, cO.VELOCITY_LINEAR_TEXTURE_TYPE = 6, cO.IRRADIANCE_TEXTURE_TYPE = 7, cO.OBJECT_ID_TEXTURE_TYPE = 8, cO.MESH_BLEND_TAG_TEXTURE_TYPE = 9, cO._SceneComponentInitialization = dd => {
      throw (0, pO.m)("GeometryBufferRendererSceneComponent")
    };
    var jO = md(38669);
    const DO = {
      effect: null,
      subMesh: null
    };

    function eO(dd) {
      if ("number" === typeof dd) return 1;
      if (dd instanceof Pd.i) return 2;
      if (dd instanceof Pd.j || dd instanceof ld.d) return 3;
      if (dd instanceof Pd.k || dd instanceof ld.f) return 4;
      throw new Error("Unsupported OpenPBR property type.")
    }
    class IO {
      populateVectorFromLinkedProperties(dd) {
        const Od = eO(dd);
        for (const md in this.linkedProperties) {
          const dd = this.linkedProperties[md],
            Wd = dd.numComponents;
          if (Od < Wd || dd.targetUniformComponentOffset > Od - Wd) return void(1 == Wd ? Bd.c.Error(`Float property ${dd.name} has an offset that is too large.`) : Bd.c.Error(`Vector${Wd} property ${dd.name} won't fit in Vector${Od} or has an offset that is too large.`));
          "number" === typeof dd.value ? IO._tmpArray[dd.targetUniformComponentOffset] = dd.value : dd.value.toArray(IO._tmpArray, dd.targetUniformComponentOffset)
        }
        dd.ZQ(IO._tmpArray)
      }
      constructor(dd, Od) {
        this.linkedProperties = {}, this.firstLinkedKey = "", this.name = dd, this.numComponents = Od
      }
    }
    IO._tmpArray = [0, 0, 0, 0];
    class lO {
      constructor(dd, Od, md, Wd) {
        let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          Rd = arguments.length > 5 ? arguments[5] : void 0;
        this.targetUniformComponentNum = 4, this.targetUniformComponentOffset = 0, this.name = dd, this.targetUniformName = md, this.defaultValue = Od, this.value = Od, this.targetUniformComponentNum = Wd, this.targetUniformComponentOffset = Fd, this.requiredDefine = Rd
      }
      get numComponents() {
        return "number" === typeof this.defaultValue ? 1 : eO(this.defaultValue)
      }
    }
    class CO {
      get samplerName() {
        return this.samplerPrefix + "Sampler"
      }
      get samplerInfoName() {
        return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos"
      }
      get samplerMatrixName() {
        return this.samplerPrefix + "Matrix"
      }
      constructor(dd, Od, md) {
        this.value = null, this.samplerPrefix = "", this.textureDefine = "", this.name = dd, this.samplerPrefix = Od, this.textureDefine = md
      }
    }
    class ZO extends((0, bO.d)((0, yO.d)(cd.b))) {}
    class kO extends(function(dd) {
      return class extends dd {
        constructor() {
          super(...arguments), this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1
        }
      }
    }(ZO)) {}
    class fO extends((0, Cd.d)(kO)) {
      constructor(dd) {
        super(dd), this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.LIGHTCOUNT = 0, this.VERTEXCOLOR = !1, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.VERTEXALPHA = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHA_FROM_BASE_COLOR_TEXTURE = !1, this.ALPHATESTVALUE = "0.5", this.PREMULTIPLYALPHA = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.LODBASEDMICROSFURACE = !0, this.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = !1, this.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.SPECULAR_WEIGHT_IN_ALPHA = !1, this.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = !1, this.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = !1, this.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.USE_GLTF_STYLE_ANISOTROPY = !1, this.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = !1, this.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = !1, this.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = !1, this.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = !1, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.FUZZENVIRONMENTBRDF = !1, this.NORMAL = !1, this.TANGENT = !1, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.ANISOTROPIC = !1, this.ANISOTROPIC_OPENPBR = !0, this.ANISOTROPIC_BASE = !1, this.ANISOTROPIC_COAT = !1, this.FUZZ_IBL_SAMPLES = 6, this.REFRACTION_HIGH_QUALITY_BLUR = !1, this.FUZZ = !1, this.THIN_FILM = !1, this.IRIDESCENCE = !1, this.DISPERSION = !1, this.SCATTERING = !1, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !1, this.SSS_SAMPLE_COUNT = 16, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !1, this.TRANSMISSION_SLAB = !1, this.TRANSMISSION_SLAB_VOLUME = !1, this.SUBSURFACE_SLAB = !1, this.GEOMETRY_THIN_WALLED = !1, this.REFRACTED_BACKGROUND = !1, this.REFRACTED_LIGHTS = !1, this.REFRACTED_ENVIRONMENT = !1, this.REFRACTED_ENVIRONMENT_OPPOSITEZ = !1, this.REFRACTED_ENVIRONMENT_LOCAL_CUBE = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.BRDF_V_HEIGHT_CORRELATED = !0, this.MS_BRDF_ENERGY_CONSERVATION = !0, this.SPHERICAL_HARMONICS = !0, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !0, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 1, this.CONDUCTOR_SPECULAR_MODEL = 1, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.NORMALXYSCALE = !0
      }
    }
    class MO extends((0, TO.b)(kd.d)) {}
    let dm = (() => {
        var dd, Od, Wd, Fd, Xd, Kd, hd, vd, Qd, td, od, Nd, qd, Hd, yd, bd, Td, pd, Yd, gd, wd, Ed, Jd, ud, Vd, Ad, rd, Ld, cd, jd, Dd, ed, Cd, kd, OO, mO, WO, FO, RO, XO, KO, hO, vO, QO, tO, yO, bO, TO, pO, YO, gO, wO, aO, EO, xO, BO, SO, sO, uO, VO, iO, AO, rO, GO, nO, LO, PO, zO, jO, eO, ZO, kO, dm, Om, mm, Wm, Fm, Rm, Xm, Km, hm, Qm, tm, om, Nm, qm, Hm, ym, bm, Tm, pm, Ym, gm, wm, am, Em, Jm, Um, xm, Bm, Sm, sm, um;
        let Vm, im, Am, rm, Gm, nm, Lm, Pm, zm, cm, jm, Dm, em, Im, lm, Cm, Zm, km, fm, Mm, dW, OW, mW, WW, FW, RW, XW, KW, hW, vW, QW, tW, oW, NW, qW, HW, yW, bW, TW, pW, YW, gW, wW, aW, EW, JW, UW, xW, BW, SW, sW, uW, VW, iW, AW, rW, GW, nW, LW, PW, zW, cW, jW, DW, eW, IW, lW, CW, ZW, kW, fW, MW, dF, OF, mF, WF, FF, RF, XF, KF, hF, vF, QF, tF, oF, NF, qF, HF, yF, bF, TF, pF, YF, gF, wF, aF, EF, JF, UF, xF, BF, SF, sF, uF, VF, iF = MO,
          AF = [],
          rF = [],
          GF = [],
          nF = [],
          LF = [],
          PF = [],
          zF = [],
          cF = [],
          jF = [],
          DF = [],
          eF = [],
          IF = [],
          lF = [],
          CF = [],
          ZF = [],
          kF = [],
          fF = [],
          MF = [],
          dR = [],
          OR = [],
          mR = [],
          WR = [],
          FR = [],
          RR = [],
          XR = [],
          KR = [],
          hR = [],
          vR = [],
          QR = [],
          tR = [],
          oR = [],
          NR = [],
          qR = [],
          HR = [],
          yR = [],
          bR = [],
          TR = [],
          pR = [],
          YR = [],
          gR = [],
          wR = [],
          aR = [],
          ER = [],
          JR = [],
          UR = [],
          xR = [],
          BR = [],
          SR = [],
          sR = [],
          uR = [],
          VR = [],
          iR = [],
          AR = [],
          rR = [],
          GR = [],
          nR = [],
          LR = [],
          PR = [],
          zR = [],
          cR = [],
          jR = [],
          DR = [],
          eR = [],
          IR = [],
          lR = [],
          CR = [],
          ZR = [],
          kR = [],
          fR = [],
          MR = [],
          dX = [],
          OX = [],
          mX = [],
          WX = [],
          FX = [],
          RX = [],
          XX = [],
          KX = [],
          hX = [],
          vX = [],
          QX = [],
          tX = [],
          oX = [],
          NX = [],
          qX = [],
          HX = [],
          yX = [],
          bX = [],
          TX = [],
          pX = [],
          YX = [],
          gX = [],
          wX = [],
          aX = [],
          EX = [],
          JX = [],
          UX = [],
          xX = [],
          BX = [],
          SX = [],
          sX = [],
          uX = [],
          VX = [],
          iX = [],
          AX = [],
          rX = [],
          GX = [],
          nX = [],
          LX = [],
          PX = [],
          zX = [],
          cX = [],
          jX = [],
          DX = [],
          eX = [],
          IX = [],
          lX = [],
          CX = [],
          ZX = [],
          kX = [],
          fX = [],
          MX = [],
          dK = [],
          OK = [],
          mK = [],
          WK = [],
          FK = [],
          RK = [],
          XK = [],
          KK = [],
          hK = [],
          vK = [],
          QK = [],
          tK = [],
          oK = [],
          NK = [],
          qK = [],
          HK = [],
          yK = [],
          bK = [],
          TK = [],
          pK = [],
          YK = [],
          gK = [],
          wK = [],
          aK = [],
          EK = [],
          JK = [],
          UK = [],
          xK = [],
          BK = [],
          SK = [],
          sK = [],
          uK = [],
          VK = [],
          iK = [],
          AK = [],
          rK = [],
          GK = [],
          nK = [],
          LK = [],
          PK = [],
          zK = [],
          cK = [],
          jK = [],
          DK = [],
          eK = [],
          IK = [],
          lK = [],
          CK = [],
          ZK = [],
          kK = [],
          fK = [],
          MK = [],
          dh = [],
          Oh = [],
          mh = [],
          Wh = [],
          Fh = [],
          Rh = [],
          Xh = [],
          Kh = [],
          hh = [],
          vh = [],
          Qh = [],
          th = [],
          oh = [],
          Nh = [],
          qh = [],
          Hh = [],
          yh = [],
          bh = [],
          Th = [],
          ph = [],
          Yh = [],
          gh = [],
          wh = [],
          ah = [],
          Eh = [],
          Jh = [],
          Uh = [],
          xh = [],
          Bh = [],
          Sh = [],
          sh = [];
        return dd = class extends iF {
          get baseWeight() {
            return (0, Ud.c)(this, Od, "f")
          }
          set baseWeight(dd) {
            (0, Ud.e)(this, Od, dd, "f")
          }
          get baseWeightTexture() {
            return (0, Ud.c)(this, Wd, "f")
          }
          set baseWeightTexture(dd) {
            (0, Ud.e)(this, Wd, dd, "f")
          }
          get baseColor() {
            return (0, Ud.c)(this, Fd, "f")
          }
          set baseColor(dd) {
            (0, Ud.e)(this, Fd, dd, "f")
          }
          get baseColorTexture() {
            return (0, Ud.c)(this, Xd, "f")
          }
          set baseColorTexture(dd) {
            (0, Ud.e)(this, Xd, dd, "f")
          }
          get baseDiffuseRoughness() {
            return (0, Ud.c)(this, Kd, "f")
          }
          set baseDiffuseRoughness(dd) {
            (0, Ud.e)(this, Kd, dd, "f")
          }
          get baseDiffuseRoughnessTexture() {
            return (0, Ud.c)(this, hd, "f")
          }
          set baseDiffuseRoughnessTexture(dd) {
            (0, Ud.e)(this, hd, dd, "f")
          }
          get baseMetalness() {
            return (0, Ud.c)(this, vd, "f")
          }
          set baseMetalness(dd) {
            (0, Ud.e)(this, vd, dd, "f")
          }
          get baseMetalnessTexture() {
            return (0, Ud.c)(this, Qd, "f")
          }
          set baseMetalnessTexture(dd) {
            (0, Ud.e)(this, Qd, dd, "f")
          }
          get specularWeight() {
            return (0, Ud.c)(this, td, "f")
          }
          set specularWeight(dd) {
            (0, Ud.e)(this, td, dd, "f")
          }
          get specularWeightTexture() {
            return (0, Ud.c)(this, od, "f")
          }
          set specularWeightTexture(dd) {
            (0, Ud.e)(this, od, dd, "f")
          }
          get specularColor() {
            return (0, Ud.c)(this, Nd, "f")
          }
          set specularColor(dd) {
            (0, Ud.e)(this, Nd, dd, "f")
          }
          get specularColorTexture() {
            return (0, Ud.c)(this, qd, "f")
          }
          set specularColorTexture(dd) {
            (0, Ud.e)(this, qd, dd, "f")
          }
          get specularRoughness() {
            return (0, Ud.c)(this, Hd, "f")
          }
          set specularRoughness(dd) {
            (0, Ud.e)(this, Hd, dd, "f")
          }
          get specularRoughnessTexture() {
            return (0, Ud.c)(this, yd, "f")
          }
          set specularRoughnessTexture(dd) {
            (0, Ud.e)(this, yd, dd, "f")
          }
          get specularRoughnessAnisotropy() {
            return (0, Ud.c)(this, bd, "f")
          }
          set specularRoughnessAnisotropy(dd) {
            (0, Ud.e)(this, bd, dd, "f")
          }
          get specularRoughnessAnisotropyTexture() {
            return (0, Ud.c)(this, Td, "f")
          }
          set specularRoughnessAnisotropyTexture(dd) {
            (0, Ud.e)(this, Td, dd, "f")
          }
          get specularIor() {
            return (0, Ud.c)(this, pd, "f")
          }
          set specularIor(dd) {
            (0, Ud.e)(this, pd, dd, "f")
          }
          get transmissionWeight() {
            return (0, Ud.c)(this, Yd, "f")
          }
          set transmissionWeight(dd) {
            (0, Ud.e)(this, Yd, dd, "f")
          }
          get transmissionWeightTexture() {
            return (0, Ud.c)(this, gd, "f")
          }
          set transmissionWeightTexture(dd) {
            (0, Ud.e)(this, gd, dd, "f")
          }
          get transmissionColor() {
            return (0, Ud.c)(this, wd, "f")
          }
          set transmissionColor(dd) {
            (0, Ud.e)(this, wd, dd, "f")
          }
          get transmissionColorTexture() {
            return (0, Ud.c)(this, Ed, "f")
          }
          set transmissionColorTexture(dd) {
            (0, Ud.e)(this, Ed, dd, "f")
          }
          get transmissionDepth() {
            return (0, Ud.c)(this, Jd, "f")
          }
          set transmissionDepth(dd) {
            (0, Ud.e)(this, Jd, dd, "f")
          }
          get transmissionDepthTexture() {
            return (0, Ud.c)(this, ud, "f")
          }
          set transmissionDepthTexture(dd) {
            (0, Ud.e)(this, ud, dd, "f")
          }
          get transmissionScatter() {
            return (0, Ud.c)(this, Vd, "f")
          }
          set transmissionScatter(dd) {
            (0, Ud.e)(this, Vd, dd, "f")
          }
          get transmissionScatterTexture() {
            return (0, Ud.c)(this, Ad, "f")
          }
          set transmissionScatterTexture(dd) {
            (0, Ud.e)(this, Ad, dd, "f")
          }
          get transmissionScatterAnisotropy() {
            return (0, Ud.c)(this, rd, "f")
          }
          set transmissionScatterAnisotropy(dd) {
            (0, Ud.e)(this, rd, dd, "f")
          }
          get transmissionDispersionScale() {
            return (0, Ud.c)(this, Ld, "f")
          }
          set transmissionDispersionScale(dd) {
            (0, Ud.e)(this, Ld, dd, "f")
          }
          get transmissionDispersionScaleTexture() {
            return (0, Ud.c)(this, cd, "f")
          }
          set transmissionDispersionScaleTexture(dd) {
            (0, Ud.e)(this, cd, dd, "f")
          }
          get transmissionDispersionAbbeNumber() {
            return (0, Ud.c)(this, jd, "f")
          }
          set transmissionDispersionAbbeNumber(dd) {
            (0, Ud.e)(this, jd, dd, "f")
          }
          get subsurfaceWeight() {
            return (0, Ud.c)(this, Dd, "f")
          }
          set subsurfaceWeight(dd) {
            (0, Ud.e)(this, Dd, dd, "f")
          }
          get subsurfaceWeightTexture() {
            return (0, Ud.c)(this, ed, "f")
          }
          set subsurfaceWeightTexture(dd) {
            (0, Ud.e)(this, ed, dd, "f")
          }
          get subsurfaceColor() {
            return (0, Ud.c)(this, Cd, "f")
          }
          set subsurfaceColor(dd) {
            (0, Ud.e)(this, Cd, dd, "f")
          }
          get subsurfaceColorTexture() {
            return (0, Ud.c)(this, kd, "f")
          }
          set subsurfaceColorTexture(dd) {
            (0, Ud.e)(this, kd, dd, "f")
          }
          get subsurfaceRadius() {
            return (0, Ud.c)(this, OO, "f")
          }
          set subsurfaceRadius(dd) {
            (0, Ud.e)(this, OO, dd, "f")
          }
          get subsurfaceRadiusScale() {
            return (0, Ud.c)(this, mO, "f")
          }
          set subsurfaceRadiusScale(dd) {
            (0, Ud.e)(this, mO, dd, "f")
          }
          get subsurfaceRadiusScaleTexture() {
            return (0, Ud.c)(this, WO, "f")
          }
          set subsurfaceRadiusScaleTexture(dd) {
            (0, Ud.e)(this, WO, dd, "f")
          }
          get subsurfaceScatterAnisotropy() {
            return (0, Ud.c)(this, FO, "f")
          }
          set subsurfaceScatterAnisotropy(dd) {
            (0, Ud.e)(this, FO, dd, "f")
          }
          get coatWeight() {
            return (0, Ud.c)(this, RO, "f")
          }
          set coatWeight(dd) {
            (0, Ud.e)(this, RO, dd, "f")
          }
          get coatWeightTexture() {
            return (0, Ud.c)(this, XO, "f")
          }
          set coatWeightTexture(dd) {
            (0, Ud.e)(this, XO, dd, "f")
          }
          get coatColor() {
            return (0, Ud.c)(this, KO, "f")
          }
          set coatColor(dd) {
            (0, Ud.e)(this, KO, dd, "f")
          }
          get coatColorTexture() {
            return (0, Ud.c)(this, hO, "f")
          }
          set coatColorTexture(dd) {
            (0, Ud.e)(this, hO, dd, "f")
          }
          get coatRoughness() {
            return (0, Ud.c)(this, vO, "f")
          }
          set coatRoughness(dd) {
            (0, Ud.e)(this, vO, dd, "f")
          }
          get coatRoughnessTexture() {
            return (0, Ud.c)(this, QO, "f")
          }
          set coatRoughnessTexture(dd) {
            (0, Ud.e)(this, QO, dd, "f")
          }
          get coatRoughnessAnisotropy() {
            return (0, Ud.c)(this, tO, "f")
          }
          set coatRoughnessAnisotropy(dd) {
            (0, Ud.e)(this, tO, dd, "f")
          }
          get coatRoughnessAnisotropyTexture() {
            return (0, Ud.c)(this, yO, "f")
          }
          set coatRoughnessAnisotropyTexture(dd) {
            (0, Ud.e)(this, yO, dd, "f")
          }
          get coatIor() {
            return (0, Ud.c)(this, bO, "f")
          }
          set coatIor(dd) {
            (0, Ud.e)(this, bO, dd, "f")
          }
          get coatDarkening() {
            return (0, Ud.c)(this, TO, "f")
          }
          set coatDarkening(dd) {
            (0, Ud.e)(this, TO, dd, "f")
          }
          get coatDarkeningTexture() {
            return (0, Ud.c)(this, pO, "f")
          }
          set coatDarkeningTexture(dd) {
            (0, Ud.e)(this, pO, dd, "f")
          }
          get fuzzWeight() {
            return (0, Ud.c)(this, YO, "f")
          }
          set fuzzWeight(dd) {
            (0, Ud.e)(this, YO, dd, "f")
          }
          get fuzzWeightTexture() {
            return (0, Ud.c)(this, gO, "f")
          }
          set fuzzWeightTexture(dd) {
            (0, Ud.e)(this, gO, dd, "f")
          }
          get fuzzColor() {
            return (0, Ud.c)(this, wO, "f")
          }
          set fuzzColor(dd) {
            (0, Ud.e)(this, wO, dd, "f")
          }
          get fuzzColorTexture() {
            return (0, Ud.c)(this, aO, "f")
          }
          set fuzzColorTexture(dd) {
            (0, Ud.e)(this, aO, dd, "f")
          }
          get fuzzRoughness() {
            return (0, Ud.c)(this, EO, "f")
          }
          set fuzzRoughness(dd) {
            (0, Ud.e)(this, EO, dd, "f")
          }
          get fuzzRoughnessTexture() {
            return (0, Ud.c)(this, xO, "f")
          }
          set fuzzRoughnessTexture(dd) {
            (0, Ud.e)(this, xO, dd, "f")
          }
          get geometryThinWalled() {
            return (0, Ud.c)(this, BO, "f")
          }
          set geometryThinWalled(dd) {
            (0, Ud.e)(this, BO, dd, "f")
          }
          get geometryNormalTexture() {
            return (0, Ud.c)(this, SO, "f")
          }
          set geometryNormalTexture(dd) {
            (0, Ud.e)(this, SO, dd, "f")
          }
          get geometryTangent() {
            return (0, Ud.c)(this, sO, "f")
          }
          set geometryTangent(dd) {
            (0, Ud.e)(this, sO, dd, "f")
          }
          get geometryTangentAngle() {
            return Math.atan2(this.geometryTangent.y, this.geometryTangent.x)
          }
          set geometryTangentAngle(dd) {
            this.geometryTangent = new Pd.i(Math.cos(dd), Math.sin(dd))
          }
          get geometryTangentTexture() {
            return (0, Ud.c)(this, uO, "f")
          }
          set geometryTangentTexture(dd) {
            (0, Ud.e)(this, uO, dd, "f")
          }
          get geometryCoatNormalTexture() {
            return (0, Ud.c)(this, VO, "f")
          }
          set geometryCoatNormalTexture(dd) {
            (0, Ud.e)(this, VO, dd, "f")
          }
          get geometryCoatTangent() {
            return (0, Ud.c)(this, iO, "f")
          }
          set geometryCoatTangent(dd) {
            (0, Ud.e)(this, iO, dd, "f")
          }
          get geometryCoatTangentAngle() {
            return Math.atan2(this.geometryCoatTangent.y, this.geometryCoatTangent.x)
          }
          set geometryCoatTangentAngle(dd) {
            this.geometryCoatTangent = new Pd.i(Math.cos(dd), Math.sin(dd))
          }
          get geometryCoatTangentTexture() {
            return (0, Ud.c)(this, AO, "f")
          }
          set geometryCoatTangentTexture(dd) {
            (0, Ud.e)(this, AO, dd, "f")
          }
          get geometryOpacity() {
            return (0, Ud.c)(this, rO, "f")
          }
          set geometryOpacity(dd) {
            (0, Ud.e)(this, rO, dd, "f")
          }
          get geometryOpacityTexture() {
            return (0, Ud.c)(this, GO, "f")
          }
          set geometryOpacityTexture(dd) {
            (0, Ud.e)(this, GO, dd, "f")
          }
          get geometryThickness() {
            return (0, Ud.c)(this, nO, "f")
          }
          set geometryThickness(dd) {
            (0, Ud.e)(this, nO, dd, "f")
          }
          get geometryThicknessTexture() {
            return (0, Ud.c)(this, LO, "f")
          }
          set geometryThicknessTexture(dd) {
            (0, Ud.e)(this, LO, dd, "f")
          }
          get emissionLuminance() {
            return (0, Ud.c)(this, PO, "f")
          }
          set emissionLuminance(dd) {
            (0, Ud.e)(this, PO, dd, "f")
          }
          get emissionColor() {
            return (0, Ud.c)(this, zO, "f")
          }
          set emissionColor(dd) {
            (0, Ud.e)(this, zO, dd, "f")
          }
          get emissionColorTexture() {
            return (0, Ud.c)(this, jO, "f")
          }
          set emissionColorTexture(dd) {
            (0, Ud.e)(this, jO, dd, "f")
          }
          get thinFilmWeight() {
            return (0, Ud.c)(this, eO, "f")
          }
          set thinFilmWeight(dd) {
            (0, Ud.e)(this, eO, dd, "f")
          }
          get thinFilmWeightTexture() {
            return (0, Ud.c)(this, ZO, "f")
          }
          set thinFilmWeightTexture(dd) {
            (0, Ud.e)(this, ZO, dd, "f")
          }
          get thinFilmThickness() {
            return (0, Ud.c)(this, kO, "f")
          }
          set thinFilmThickness(dd) {
            (0, Ud.e)(this, kO, dd, "f")
          }
          get thinFilmThicknessMin() {
            return (0, Ud.c)(this, dm, "f")
          }
          set thinFilmThicknessMin(dd) {
            (0, Ud.e)(this, dm, dd, "f")
          }
          get thinFilmThicknessTexture() {
            return (0, Ud.c)(this, Om, "f")
          }
          set thinFilmThicknessTexture(dd) {
            (0, Ud.e)(this, Om, dd, "f")
          }
          get thinFilmIor() {
            return (0, Ud.c)(this, mm, "f")
          }
          set thinFilmIor(dd) {
            (0, Ud.e)(this, mm, dd, "f")
          }
          get ambientOcclusionTexture() {
            return (0, Ud.c)(this, Wm, "f")
          }
          set ambientOcclusionTexture(dd) {
            (0, Ud.e)(this, Wm, dd, "f")
          }
          get sssQuality() {
            return this._sssQuality
          }
          set sssQuality(dd) {
            this._sssQuality !== dd && (this._sssQuality = dd, this.KWd(1))
          }
          get sssIrradianceTexture() {
            return this._sssIrradianceTexture
          }
          set sssIrradianceTexture(dd) {
            this._sssIrradianceTexture !== dd && (this._sssIrradianceTexture = dd, this._markAllSubMeshesAsTexturesDirty())
          }
          get sssDepthTexture() {
            return this._sssDepthTexture
          }
          set sssDepthTexture(dd) {
            this._sssDepthTexture !== dd && (this._sssDepthTexture = dd, this._markAllSubMeshesAsTexturesDirty())
          }
          get directIntensity() {
            return (0, Ud.c)(this, Fm, "f")
          }
          set directIntensity(dd) {
            (0, Ud.e)(this, Fm, dd, "f")
          }
          get environmentIntensity() {
            return (0, Ud.c)(this, Rm, "f")
          }
          set environmentIntensity(dd) {
            (0, Ud.e)(this, Rm, dd, "f")
          }
          get useSpecularWeightFromTextureAlpha() {
            return (0, Ud.c)(this, Xm, "f")
          }
          set useSpecularWeightFromTextureAlpha(dd) {
            (0, Ud.e)(this, Xm, dd, "f")
          }
          get forceAlphaTest() {
            return (0, Ud.c)(this, Km, "f")
          }
          set forceAlphaTest(dd) {
            (0, Ud.e)(this, Km, dd, "f")
          }
          get alphaCutOff() {
            return (0, Ud.c)(this, hm, "f")
          }
          set alphaCutOff(dd) {
            (0, Ud.e)(this, hm, dd, "f")
          }
          get useAmbientOcclusionFromMetallicTextureRed() {
            return (0, Ud.c)(this, Qm, "f")
          }
          set useAmbientOcclusionFromMetallicTextureRed(dd) {
            (0, Ud.e)(this, Qm, dd, "f")
          }
          get useAmbientInGrayScale() {
            return (0, Ud.c)(this, tm, "f")
          }
          set useAmbientInGrayScale(dd) {
            (0, Ud.e)(this, tm, dd, "f")
          }
          get hasTransparency() {
            return this.subsurfaceWeight > 0 || this.transmissionWeight > 0
          }
          get hasScattering() {
            return this.transmissionWeight > 0 && this.transmissionDepth > 0 && !this.transmissionScatter.equals(ld.d.BlackReadOnly) || this.subsurfaceWeight > 0
          }
          get usePhysicalLightFalloff() {
            return this._lightFalloff === Rd.b.LIGHTFALLOFF_PHYSICAL
          }
          set usePhysicalLightFalloff(dd) {
            dd !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = dd ? Rd.b.LIGHTFALLOFF_PHYSICAL : Rd.b.LIGHTFALLOFF_STANDARD)
          }
          get useGLTFLightFalloff() {
            return this._lightFalloff === Rd.b.LIGHTFALLOFF_GLTF
          }
          set useGLTFLightFalloff(dd) {
            dd !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = dd ? Rd.b.LIGHTFALLOFF_GLTF : Rd.b.LIGHTFALLOFF_STANDARD)
          }
          get useObjectSpaceNormalMap() {
            return (0, Ud.c)(this, om, "f")
          }
          set useObjectSpaceNormalMap(dd) {
            (0, Ud.e)(this, om, dd, "f")
          }
          get useParallax() {
            return (0, Ud.c)(this, Nm, "f")
          }
          set useParallax(dd) {
            (0, Ud.e)(this, Nm, dd, "f")
          }
          get useParallaxOcclusion() {
            return (0, Ud.c)(this, qm, "f")
          }
          set useParallaxOcclusion(dd) {
            (0, Ud.e)(this, qm, dd, "f")
          }
          get parallaxScaleBias() {
            return (0, Ud.c)(this, Hm, "f")
          }
          set parallaxScaleBias(dd) {
            (0, Ud.e)(this, Hm, dd, "f")
          }
          get disableLighting() {
            return (0, Ud.c)(this, ym, "f")
          }
          set disableLighting(dd) {
            (0, Ud.e)(this, ym, dd, "f")
          }
          get forceIrradianceInFragment() {
            return (0, Ud.c)(this, bm, "f")
          }
          set forceIrradianceInFragment(dd) {
            (0, Ud.e)(this, bm, dd, "f")
          }
          get maxSimultaneousLights() {
            return (0, Ud.c)(this, Tm, "f")
          }
          set maxSimultaneousLights(dd) {
            (0, Ud.e)(this, Tm, dd, "f")
          }
          get invertNormalMapX() {
            return (0, Ud.c)(this, pm, "f")
          }
          set invertNormalMapX(dd) {
            (0, Ud.e)(this, pm, dd, "f")
          }
          get invertNormalMapY() {
            return (0, Ud.c)(this, Ym, "f")
          }
          set invertNormalMapY(dd) {
            (0, Ud.e)(this, Ym, dd, "f")
          }
          get twoSidedLighting() {
            return (0, Ud.c)(this, gm, "f")
          }
          set twoSidedLighting(dd) {
            (0, Ud.e)(this, gm, dd, "f")
          }
          get useAlphaFresnel() {
            return (0, Ud.c)(this, wm, "f")
          }
          set useAlphaFresnel(dd) {
            (0, Ud.e)(this, wm, dd, "f")
          }
          get useLinearAlphaFresnel() {
            return (0, Ud.c)(this, am, "f")
          }
          set useLinearAlphaFresnel(dd) {
            (0, Ud.e)(this, am, dd, "f")
          }
          get environmentBRDFTexture() {
            return (0, Ud.c)(this, Em, "f")
          }
          set environmentBRDFTexture(dd) {
            (0, Ud.e)(this, Em, dd, "f")
          }
          get forceNormalForward() {
            return (0, Ud.c)(this, Jm, "f")
          }
          set forceNormalForward(dd) {
            (0, Ud.e)(this, Jm, dd, "f")
          }
          get enableSpecularAntiAliasing() {
            return (0, Ud.c)(this, Um, "f")
          }
          set enableSpecularAntiAliasing(dd) {
            (0, Ud.e)(this, Um, dd, "f")
          }
          get useHorizonOcclusion() {
            return (0, Ud.c)(this, xm, "f")
          }
          set useHorizonOcclusion(dd) {
            (0, Ud.e)(this, xm, dd, "f")
          }
          get useRadianceOcclusion() {
            return (0, Ud.c)(this, Bm, "f")
          }
          set useRadianceOcclusion(dd) {
            (0, Ud.e)(this, Bm, dd, "f")
          }
          get unlit() {
            return (0, Ud.c)(this, Sm, "f")
          }
          set unlit(dd) {
            (0, Ud.e)(this, Sm, dd, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, Ud.c)(this, sm, "f")
          }
          set applyDecalMapAfterDetailMap(dd) {
            (0, Ud.e)(this, sm, dd, "f")
          }
          get backgroundRefractionTexture() {
            return this._backgroundRefractionTexture
          }
          set backgroundRefractionTexture(dd) {
            this._backgroundRefractionTexture = dd, this._markAllSubMeshesAsTexturesDirty()
          }
          get refractionHighQualityBlur() {
            return this._refractionHighQualityBlur
          }
          set refractionHighQualityBlur(dd) {
            this._refractionHighQualityBlur !== dd && (this._refractionHighQualityBlur = dd, this.KWd(1))
          }
          get realTimeFiltering() {
            return this._realTimeFiltering
          }
          set realTimeFiltering(dd) {
            this._realTimeFiltering = dd, this.KWd(1)
          }
          get realTimeFilteringQuality() {
            return this._realTimeFilteringQuality
          }
          set realTimeFilteringQuality(dd) {
            this._realTimeFilteringQuality = dd, this.KWd(1)
          }
          get fuzzSampleNumber() {
            return this._fuzzSampleNumber
          }
          set fuzzSampleNumber(dd) {
            this._fuzzSampleNumber = dd, this.KWd(1)
          }
          get canRenderToMRT() {
            return !0
          }
          get debugMode() {
            return (0, Ud.c)(this, um, "f")
          }
          set debugMode(dd) {
            (0, Ud.e)(this, um, dd, "f")
          }
          constructor(md, xd) {
            super(md, xd, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || dd.ForceGLSL), Od.set(this, ((0, Ud.k)(this, AF), (0, Ud.k)(this, rF, void 0))), this._baseWeight = ((0, Ud.k)(this, GF), new lO("base_weight", 1, "vBaseWeight", 1)), Wd.set(this, (0, Ud.k)(this, nF, void 0)), this._baseWeightTexture = ((0, Ud.k)(this, LF), new CO("base_weight", "baseWeight", "BASE_WEIGHT")), Fd.set(this, (0, Ud.k)(this, PF, void 0)), this._baseColor = ((0, Ud.k)(this, zF), new lO("base_color", ld.d.White(), "vBaseColor", 4)), Xd.set(this, (0, Ud.k)(this, cF, void 0)), this._baseColorTexture = ((0, Ud.k)(this, jF), new CO("base_color", "baseColor", "BASE_COLOR")), Kd.set(this, (0, Ud.k)(this, DF, void 0)), this._baseDiffuseRoughness = ((0, Ud.k)(this, eF), new lO("base_diffuse_roughness", 0, "vBaseDiffuseRoughness", 1)), hd.set(this, (0, Ud.k)(this, IF, void 0)), this._baseDiffuseRoughnessTexture = ((0, Ud.k)(this, lF), new CO("base_diffuse_roughness", "baseDiffuseRoughness", "BASE_DIFFUSE_ROUGHNESS")), vd.set(this, (0, Ud.k)(this, CF, void 0)), this._baseMetalness = ((0, Ud.k)(this, ZF), new lO("base_metalness", 0, "vReflectanceInfo", 4, 0)), Qd.set(this, (0, Ud.k)(this, kF, void 0)), this._baseMetalnessTexture = ((0, Ud.k)(this, fF), new CO("base_metalness", "baseMetalness", "BASE_METALNESS")), td.set(this, (0, Ud.k)(this, MF, void 0)), this._specularWeight = ((0, Ud.k)(this, dR), new lO("specular_weight", 1, "vReflectanceInfo", 4, 3)), od.set(this, (0, Ud.k)(this, OR, void 0)), this._specularWeightTexture = ((0, Ud.k)(this, mR), new CO("specular_weight", "specularWeight", "SPECULAR_WEIGHT")), Nd.set(this, (0, Ud.k)(this, WR, void 0)), this._specularColor = ((0, Ud.k)(this, FR), new lO("specular_color", ld.d.White(), "vSpecularColor", 4)), qd.set(this, (0, Ud.k)(this, RR, void 0)), this._specularColorTexture = ((0, Ud.k)(this, XR), new CO("specular_color", "specularColor", "SPECULAR_COLOR")), Hd.set(this, (0, Ud.k)(this, KR, void 0)), this._specularRoughness = ((0, Ud.k)(this, hR), new lO("specular_roughness", .3, "vReflectanceInfo", 4, 1)), yd.set(this, (0, Ud.k)(this, vR, void 0)), this._specularRoughnessTexture = ((0, Ud.k)(this, QR), new CO("specular_roughness", "specularRoughness", "SPECULAR_ROUGHNESS")), bd.set(this, (0, Ud.k)(this, tR, void 0)), this._specularRoughnessAnisotropy = ((0, Ud.k)(this, oR), new lO("specular_roughness_anisotropy", 0, "vSpecularAnisotropy", 3, 2)), Td.set(this, (0, Ud.k)(this, NR, void 0)), this._specularRoughnessAnisotropyTexture = ((0, Ud.k)(this, qR), new CO("specular_roughness_anisotropy", "specularRoughnessAnisotropy", "SPECULAR_ROUGHNESS_ANISOTROPY")), pd.set(this, (0, Ud.k)(this, HR, void 0)), this._specularIor = ((0, Ud.k)(this, yR), new lO("specular_ior", 1.5, "vReflectanceInfo", 4, 2)), Yd.set(this, (0, Ud.k)(this, bR, void 0)), this._transmissionWeight = ((0, Ud.k)(this, TR), new lO("transmission_weight", 0, "vTransmissionWeight", 1)), gd.set(this, (0, Ud.k)(this, pR, void 0)), this._transmissionWeightTexture = ((0, Ud.k)(this, YR), new CO("transmission_weight", "transmissionWeight", "TRANSMISSION_WEIGHT")), wd.set(this, (0, Ud.k)(this, gR, void 0)), this._transmissionColor = ((0, Ud.k)(this, wR), new lO("transmission_color", ld.d.White(), "vTransmissionColor", 3, 0)), Ed.set(this, (0, Ud.k)(this, aR, void 0)), this._transmissionColorTexture = ((0, Ud.k)(this, ER), new CO("transmission_color", "transmissionColor", "TRANSMISSION_COLOR")), Jd.set(this, (0, Ud.k)(this, JR, void 0)), this._transmissionDepth = ((0, Ud.k)(this, UR), new lO("transmission_depth", 0, "vTransmissionDepth", 1, 0)), ud.set(this, (0, Ud.k)(this, xR, void 0)), this._transmissionDepthTexture = ((0, Ud.k)(this, BR), new CO("transmission_depth", "transmissionDepth", "TRANSMISSION_DEPTH")), Vd.set(this, (0, Ud.k)(this, SR, void 0)), this._transmissionScatter = ((0, Ud.k)(this, sR), new lO("transmission_scatter", ld.d.Black(), "vTransmissionScatter", 3, 0)), Ad.set(this, (0, Ud.k)(this, uR, void 0)), this._transmissionScatterTexture = ((0, Ud.k)(this, VR), new CO("transmission_scatter", "transmissionScatter", "TRANSMISSION_SCATTER")), rd.set(this, (0, Ud.k)(this, iR, void 0)), this._transmissionScatterAnisotropy = ((0, Ud.k)(this, AR), new lO("transmission_scatter_anisotropy", 0, "vTransmissionScatterAnisotropy", 1, 0)), Ld.set(this, (0, Ud.k)(this, rR, void 0)), this._transmissionDispersionScale = ((0, Ud.k)(this, GR), new lO("transmission_dispersion_scale", 0, "vTransmissionDispersionScale", 1, 0)), cd.set(this, (0, Ud.k)(this, nR, void 0)), this._transmissionDispersionScaleTexture = ((0, Ud.k)(this, LR), new CO("transmission_dispersion_scale", "transmissionDispersionScale", "TRANSMISSION_DISPERSION_SCALE")), jd.set(this, (0, Ud.k)(this, PR, void 0)), this._transmissionDispersionAbbeNumber = ((0, Ud.k)(this, zR), new lO("transmission_dispersion_abbe_number", 20, "vTransmissionDispersionAbbeNumber", 1, 0)), Dd.set(this, (0, Ud.k)(this, cR, void 0)), this._subsurfaceWeight = ((0, Ud.k)(this, jR), new lO("subsurface_weight", 0, "vSubsurfaceWeight", 1, 0, "SUBSURFACE_SLAB")), ed.set(this, (0, Ud.k)(this, DR, void 0)), this._subsurfaceWeightTexture = ((0, Ud.k)(this, eR), new CO("subsurface_weight", "subsurfaceWeight", "SUBSURFACE_WEIGHT")), Cd.set(this, (0, Ud.k)(this, IR, void 0)), this._subsurfaceColor = ((0, Ud.k)(this, lR), new lO("subsurface_color", new ld.d(.8, .8, .8), "vSubsurfaceColor", 3, 0, "SUBSURFACE_SLAB")), kd.set(this, (0, Ud.k)(this, CR, void 0)), this._subsurfaceColorTexture = ((0, Ud.k)(this, ZR), new CO("subsurface_color", "subsurfaceColor", "SUBSURFACE_COLOR")), OO.set(this, (0, Ud.k)(this, kR, void 0)), this._subsurfaceRadius = ((0, Ud.k)(this, fR), new lO("subsurface_radius", .1, "vSubsurfaceRadius", 1, 0, "SUBSURFACE_SLAB")), mO.set(this, (0, Ud.k)(this, MR, void 0)), this._subsurfaceRadiusScale = ((0, Ud.k)(this, dX), new lO("subsurface_radius_scale", new ld.d(1, .5, .25), "vSubsurfaceRadiusScale", 3, 0, "SUBSURFACE_SLAB")), WO.set(this, (0, Ud.k)(this, OX, void 0)), this._subsurfaceRadiusScaleTexture = ((0, Ud.k)(this, mX), new CO("subsurface_radius_scale", "subsurfaceRadiusScale", "SUBSURFACE_RADIUS_SCALE")), FO.set(this, (0, Ud.k)(this, WX, void 0)), this._subsurfaceScatterAnisotropy = ((0, Ud.k)(this, FX), new lO("subsurface_scatter_anisotropy", 0, "vSubsurfaceScatterAnisotropy", 1, 0, "SUBSURFACE_SLAB")), RO.set(this, (0, Ud.k)(this, RX, void 0)), this._coatWeight = ((0, Ud.k)(this, XX), new lO("coat_weight", 0, "vCoatWeight", 1, 0)), XO.set(this, (0, Ud.k)(this, KX, void 0)), this._coatWeightTexture = ((0, Ud.k)(this, hX), new CO("coat_weight", "coatWeight", "COAT_WEIGHT")), KO.set(this, (0, Ud.k)(this, vX, void 0)), this._coatColor = ((0, Ud.k)(this, QX), new lO("coat_color", ld.d.White(), "vCoatColor", 3, 0)), hO.set(this, (0, Ud.k)(this, tX, void 0)), this._coatColorTexture = ((0, Ud.k)(this, oX), new CO("coat_color", "coatColor", "COAT_COLOR")), vO.set(this, (0, Ud.k)(this, NX, void 0)), this._coatRoughness = ((0, Ud.k)(this, qX), new lO("coat_roughness", 0, "vCoatRoughness", 1, 0)), QO.set(this, (0, Ud.k)(this, HX, void 0)), this._coatRoughnessTexture = ((0, Ud.k)(this, yX), new CO("coat_roughness", "coatRoughness", "COAT_ROUGHNESS")), tO.set(this, (0, Ud.k)(this, bX, void 0)), this._coatRoughnessAnisotropy = ((0, Ud.k)(this, TX), new lO("coat_roughness_anisotropy", 0, "vCoatRoughnessAnisotropy", 1)), yO.set(this, (0, Ud.k)(this, pX, void 0)), this._coatRoughnessAnisotropyTexture = ((0, Ud.k)(this, YX), new CO("coat_roughness_anisotropy", "coatRoughnessAnisotropy", "COAT_ROUGHNESS_ANISOTROPY")), bO.set(this, (0, Ud.k)(this, gX, void 0)), this._coatIor = ((0, Ud.k)(this, wX), new lO("coat_ior", 1.5, "vCoatIor", 1, 0)), TO.set(this, (0, Ud.k)(this, aX, void 0)), this._coatDarkening = ((0, Ud.k)(this, EX), new lO("coat_darkening", 1, "vCoatDarkening", 1, 0)), pO.set(this, (0, Ud.k)(this, JX, void 0)), this._coatDarkeningTexture = ((0, Ud.k)(this, UX), new CO("coat_darkening", "coatDarkening", "COAT_DARKENING")), this.useCoatRoughnessFromWeightTexture = !1, YO.set(this, (0, Ud.k)(this, xX, void 0)), this._fuzzWeight = ((0, Ud.k)(this, BX), new lO("fuzz_weight", 0, "vFuzzWeight", 1, 0)), gO.set(this, (0, Ud.k)(this, SX, void 0)), this._fuzzWeightTexture = ((0, Ud.k)(this, sX), new CO("fuzz_weight", "fuzzWeight", "FUZZ_WEIGHT")), wO.set(this, (0, Ud.k)(this, uX, void 0)), this._fuzzColor = ((0, Ud.k)(this, VX), new lO("fuzz_color", ld.d.White(), "vFuzzColor", 3, 0)), aO.set(this, (0, Ud.k)(this, iX, void 0)), this._fuzzColorTexture = ((0, Ud.k)(this, AX), new CO("fuzz_color", "fuzzColor", "FUZZ_COLOR")), EO.set(this, (0, Ud.k)(this, rX, void 0)), this._fuzzRoughness = ((0, Ud.k)(this, GX), new lO("fuzz_roughness", .5, "vFuzzRoughness", 1, 0)), xO.set(this, (0, Ud.k)(this, nX, void 0)), this._fuzzRoughnessTexture = ((0, Ud.k)(this, LX), new CO("fuzz_roughness", "fuzzRoughness", "FUZZ_ROUGHNESS")), BO.set(this, (0, Ud.k)(this, PX, void 0)), this._geometryThinWalled = ((0, Ud.k)(this, zX), new lO("geometry_thin_walled", 0, "vGeometryThinWalled", 1, 0)), SO.set(this, (0, Ud.k)(this, cX, void 0)), this._geometryNormalTexture = ((0, Ud.k)(this, jX), new CO("geometry_normal", "geometryNormal", "GEOMETRY_NORMAL")), sO.set(this, (0, Ud.k)(this, DX, void 0)), this._geometryTangent = ((0, Ud.k)(this, eX), new lO("geometry_tangent", new Pd.i(1, 0), "vSpecularAnisotropy", 3, 0)), uO.set(this, (0, Ud.k)(this, IX, void 0)), this._geometryTangentTexture = ((0, Ud.k)(this, lX), new CO("geometry_tangent", "geometryTangent", "GEOMETRY_TANGENT")), VO.set(this, (0, Ud.k)(this, CX, void 0)), this._geometryCoatNormalTexture = ((0, Ud.k)(this, ZX), new CO("geometry_coat_normal", "geometryCoatNormal", "GEOMETRY_COAT_NORMAL")), iO.set(this, (0, Ud.k)(this, kX, void 0)), this._geometryCoatTangent = ((0, Ud.k)(this, fX), new lO("geometry_coat_tangent", new Pd.i(1, 0), "vGeometryCoatTangent", 2, 0)), AO.set(this, (0, Ud.k)(this, MX, void 0)), this._geometryCoatTangentTexture = ((0, Ud.k)(this, dK), new CO("geometry_coat_tangent", "geometryCoatTangent", "GEOMETRY_COAT_TANGENT")), rO.set(this, (0, Ud.k)(this, OK, void 0)), this._geometryOpacity = ((0, Ud.k)(this, mK), new lO("geometry_opacity", 1, "vBaseColor", 4, 3)), GO.set(this, (0, Ud.k)(this, WK, void 0)), this._geometryOpacityTexture = ((0, Ud.k)(this, FK), new CO("geometry_opacity", "geometryOpacity", "GEOMETRY_OPACITY")), nO.set(this, (0, Ud.k)(this, RK, void 0)), this._geometryThickness = ((0, Ud.k)(this, XK), new lO("geometry_thickness", 0, "vGeometryThickness", 1, 0)), LO.set(this, (0, Ud.k)(this, KK, void 0)), this._geometryThicknessTexture = ((0, Ud.k)(this, hK), new CO("geometry_thickness", "geometryThickness", "GEOMETRY_THICKNESS")), PO.set(this, (0, Ud.k)(this, vK, void 0)), this._emissionLuminance = ((0, Ud.k)(this, QK), new lO("emission_luminance", 1, "vLightingIntensity", 4, 1)), zO.set(this, (0, Ud.k)(this, tK, void 0)), this._emissionColor = ((0, Ud.k)(this, oK), new lO("emission_color", ld.d.Black(), "vEmissionColor", 3)), jO.set(this, (0, Ud.k)(this, NK, void 0)), this._emissionColorTexture = ((0, Ud.k)(this, qK), new CO("emission_color", "emissionColor", "EMISSION_COLOR")), eO.set(this, (0, Ud.k)(this, HK, void 0)), this._thinFilmWeight = ((0, Ud.k)(this, yK), new lO("thin_film_weight", 0, "vThinFilmWeight", 1, 0)), ZO.set(this, (0, Ud.k)(this, bK, void 0)), this._thinFilmWeightTexture = ((0, Ud.k)(this, TK), new CO("thin_film_weight", "thinFilmWeight", "THIN_FILM_WEIGHT")), kO.set(this, (0, Ud.k)(this, pK, void 0)), this._thinFilmThickness = ((0, Ud.k)(this, YK), new lO("thin_film_thickness", .5, "vThinFilmThickness", 2, 0)), dm.set(this, (0, Ud.k)(this, gK, void 0)), this._thinFilmThicknessMin = ((0, Ud.k)(this, wK), new lO("thin_film_thickness_min", 0, "vThinFilmThickness", 2, 1)), Om.set(this, (0, Ud.k)(this, aK, void 0)), this._thinFilmThicknessTexture = ((0, Ud.k)(this, EK), new CO("thin_film_thickness", "thinFilmThickness", "THIN_FILM_THICKNESS")), mm.set(this, (0, Ud.k)(this, JK, void 0)), this._thinFilmIor = ((0, Ud.k)(this, UK), new lO("thin_film_ior", 1.4, "vThinFilmIor", 1, 0)), Wm.set(this, (0, Ud.k)(this, xK, void 0)), this._ambientOcclusionTexture = ((0, Ud.k)(this, BK), new CO("ambient_occlusion", "ambientOcclusion", "AMBIENT_OCCLUSION")), this._sssQuality = dd.SSS_QUALITY_MEDIUM, this._sssIrradianceTexture = null, this._sssDepthTexture = null, this._uniformsList = {}, this._uniformsArray = [], this._samplersList = {}, this._samplerDefines = {}, Fm.set(this, (0, Ud.k)(this, SK, 1)), Rm.set(this, ((0, Ud.k)(this, sK), (0, Ud.k)(this, uK, 1))), Xm.set(this, ((0, Ud.k)(this, VK), (0, Ud.k)(this, iK, !1))), Km.set(this, ((0, Ud.k)(this, AK), (0, Ud.k)(this, rK, !1))), hm.set(this, ((0, Ud.k)(this, GK), (0, Ud.k)(this, nK, .4))), Qm.set(this, ((0, Ud.k)(this, LK), (0, Ud.k)(this, PK, !1))), tm.set(this, ((0, Ud.k)(this, zK), (0, Ud.k)(this, cK, !1))), om.set(this, ((0, Ud.k)(this, jK), (0, Ud.k)(this, DK, !1))), Nm.set(this, ((0, Ud.k)(this, eK), (0, Ud.k)(this, IK, !1))), qm.set(this, ((0, Ud.k)(this, lK), (0, Ud.k)(this, CK, !1))), Hm.set(this, ((0, Ud.k)(this, ZK), (0, Ud.k)(this, kK, .05))), ym.set(this, ((0, Ud.k)(this, fK), (0, Ud.k)(this, MK, !1))), bm.set(this, ((0, Ud.k)(this, dh), (0, Ud.k)(this, Oh, !1))), Tm.set(this, ((0, Ud.k)(this, mh), (0, Ud.k)(this, Wh, 4))), pm.set(this, ((0, Ud.k)(this, Fh), (0, Ud.k)(this, Rh, !1))), Ym.set(this, ((0, Ud.k)(this, Xh), (0, Ud.k)(this, Kh, !1))), gm.set(this, ((0, Ud.k)(this, hh), (0, Ud.k)(this, vh, !1))), wm.set(this, ((0, Ud.k)(this, Qh), (0, Ud.k)(this, th, !1))), am.set(this, ((0, Ud.k)(this, oh), (0, Ud.k)(this, Nh, !1))), Em.set(this, ((0, Ud.k)(this, qh), (0, Ud.k)(this, Hh, null))), Jm.set(this, ((0, Ud.k)(this, yh), (0, Ud.k)(this, bh, !1))), Um.set(this, ((0, Ud.k)(this, Th), (0, Ud.k)(this, ph, !1))), xm.set(this, ((0, Ud.k)(this, Yh), (0, Ud.k)(this, gh, !0))), Bm.set(this, ((0, Ud.k)(this, wh), (0, Ud.k)(this, ah, !0))), Sm.set(this, ((0, Ud.k)(this, Eh), (0, Ud.k)(this, Jh, !1))), sm.set(this, ((0, Ud.k)(this, Uh), (0, Ud.k)(this, xh, !1))), this._lightingInfos = ((0, Ud.k)(this, Bh), new Pd.k(this.directIntensity, 1, this.environmentIntensity, 1)), this._radianceTexture = null, this._useSpecularWeightFromAlpha = !1, this._useSpecularWeightFromSpecularColorTexture = !1, this._useSpecularRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessFromGreenChannel = !1, this._useGltfStyleAnisotropy = !1, this._useFuzzRoughnessFromTextureAlpha = !1, this._useSubsurfaceWeightFromTextureAlpha = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromBaseColorTexture = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallicFromMetallicTextureBlue = !1, this._useThinFilmThicknessFromTextureGreen = !1, this._useGeometryThicknessFromGreenChannel = !1, this._lightFalloff = Rd.b.LIGHTFALLOFF_PHYSICAL, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._environmentFuzzBRDFTexture = null, this._backgroundRefractionTexture = null, this._refractionHighQualityBlur = !0, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._fuzzSampleNumber = 4, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new Sd.e(16), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, um.set(this, (0, Ud.k)(this, Sh, 0)), this.debugLimit = ((0, Ud.k)(this, sh), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this._transparencyMode = Rd.b.MATERIAL_OPAQUE, this.zV() && !this.zV()?.Iq().isWebGPU && this.zV().Iq().YH < 2 && Bd.c.Error("OpenPBRMaterial: WebGL 2.0 or above is required for this material."), dd._noiseTextures[this.zV().uniqueId] || (dd._noiseTextures[this.zV().uniqueId] = new sd.f(UO.g.GetAssetUrl("https://assets.babylonjs.com/core/blue_noise/blue_noise_rgb.png"), this.zV(), !1, !0, 1), this.zV().cV.addOnce((() => {
              dd._noiseTextures[this.zV().uniqueId]?.dispose(), delete dd._noiseTextures[this.zV().uniqueId]
            }))), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), fd.b.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget && this._renderTargets.push(this._radianceTexture), fd.b.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget && this._renderTargets.push(this._backgroundRefractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = nd(this.zV()), this._environmentFuzzBRDFTexture = Gd(this.zV()), this.prePassConfiguration = new Id.c, this._propertyList = {};
            for (const dd of Object.getOwnPropertyNames(this)) {
              const Od = this[dd];
              Od instanceof lO && (this._propertyList[dd] = Od)
            }
            Object.keys(this._propertyList).forEach((dd => {
              const Od = this._propertyList[dd];
              let md = this._uniformsList[Od.targetUniformName];
              md ? md.numComponents !== Od.targetUniformComponentNum ? Bd.c.Error(`Uniform ${Od.targetUniformName} already exists of size ${md.numComponents}, but trying to set it to ${Od.targetUniformComponentNum}.`) : md.requiredDefine !== Od.requiredDefine && (md.requiredDefine = void 0) : (md = new IO(Od.targetUniformName, Od.targetUniformComponentNum), md.requiredDefine = Od.requiredDefine, this._uniformsList[Od.targetUniformName] = md), "" === md.firstLinkedKey && (md.firstLinkedKey = Od.name), md.linkedProperties[Od.name] = Od
            })), this._uniformsArray = Object.values(this._uniformsList), this._samplersList = {};
            for (const dd of Object.getOwnPropertyNames(this)) {
              const Od = this[dd];
              Od instanceof CO && (this._samplersList[dd] = Od)
            }
            for (const dd in this._samplersList) {
              const Od = this._samplersList[dd].textureDefine;
              this._samplerDefines[Od] = {
                type: "boolean",
                default: !1
              }, this._samplerDefines[Od + "DIRECTUV"] = {
                type: "number",
                default: 0
              }, this._samplerDefines[Od + "_GAMMA"] = {
                type: "boolean",
                default: !1
              }
            }
            this._baseWeight, this._baseWeightTexture, this._baseColor, this._baseColorTexture, this._baseDiffuseRoughness, this._baseDiffuseRoughnessTexture, this._baseMetalness, this._baseMetalnessTexture, this._specularWeight, this._specularWeightTexture, this._specularColor, this._specularColorTexture, this._specularRoughness, this._specularIor, this._specularRoughnessTexture, this._specularRoughnessAnisotropy, this._specularRoughnessAnisotropyTexture, this._transmissionWeight, this._transmissionWeightTexture, this._transmissionColor, this._transmissionColorTexture, this._transmissionDepth, this._transmissionDepthTexture, this._transmissionScatter, this._transmissionScatterTexture, this._transmissionScatterAnisotropy, this._transmissionDispersionScale, this._transmissionDispersionScaleTexture, this._transmissionDispersionAbbeNumber, this._subsurfaceWeight, this._subsurfaceWeightTexture, this._subsurfaceColor, this._subsurfaceColorTexture, this._subsurfaceRadius, this._subsurfaceRadiusScale, this._subsurfaceRadiusScaleTexture, this._subsurfaceScatterAnisotropy, this._coatWeight, this._coatWeightTexture, this._coatColor, this._coatColorTexture, this._coatRoughness, this._coatRoughnessTexture, this._coatRoughnessAnisotropy, this._coatRoughnessAnisotropyTexture, this._coatIor, this._coatDarkening, this._coatDarkeningTexture, this._fuzzWeight, this._fuzzWeightTexture, this._fuzzColor, this._fuzzColorTexture, this._fuzzRoughness, this._fuzzRoughnessTexture, this._geometryThinWalled, this._geometryNormalTexture, this._geometryTangent, this._geometryTangentTexture, this._geometryCoatNormalTexture, this._geometryCoatTangent, this._geometryCoatTangentTexture, this._geometryOpacity, this._geometryOpacityTexture, this._geometryThickness, this._geometryThicknessTexture, this._thinFilmWeight, this._thinFilmWeightTexture, this._thinFilmThickness, this._thinFilmThicknessMin, this._thinFilmThicknessTexture, this._thinFilmIor, this._emissionLuminance, this._emissionColor, this._emissionColorTexture, this._ambientOcclusionTexture
          }
          get hasRenderTargetTextures() {
            return !!(fd.b.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget) || (!!(fd.b.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite
          }
          getClassName() {
            return "OpenPBRMaterial"
          }
          get transparencyMode() {
            return this._transparencyMode
          }
          set transparencyMode(dd) {
            this._transparencyMode !== dd && (this._transparencyMode = dd, this._markAllSubMeshesAsTexturesAndMiscDirty())
          }
          _shouldUseAlphaFromBaseColorTexture() {
            return this._hasAlphaChannel() && this._transparencyMode !== Rd.b.MATERIAL_OPAQUE && !this.geometryOpacityTexture
          }
          _hasAlphaChannel() {
            return null != this.baseColorTexture && this.baseColorTexture.hasAlpha && this._useAlphaFromBaseColorTexture || null != this.geometryOpacityTexture
          }
          needAlphaBlending() {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture
          }
          needAlphaBlendingForMesh(dd) {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture || super.needAlphaBlendingForMesh(dd)
          }
          clone(Od) {
            let md = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              Wd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const Fd = JO.b.Clone((() => new dd(Od, this.zV())), this, {
              cloneTexturesOnlyOnce: md
            });
            return Fd.id = Od, Fd.name = Od, this.stencil.copyTo(Fd.stencil), this._clonePlugins(Fd, Wd), Fd
          }
          serialize() {
            const dd = super.serialize();
            return dd.customType = "BABYLON.OpenPBRMaterial", dd
          }
          static Parse(Od, md, Wd) {
            const Fd = JO.b.Parse((() => new dd(Od.name, md)), Od, md, Wd);
            return Od.stencil && Fd.stencil.parse(Od.stencil, md, Wd), Rd.b._ParsePlugins(Od, Fd, md, Wd), Fd
          }
          forceCompilation(dd, Od, md) {
            const Wd = {
              clipPlane: !1,
              useInstances: !1,
              ...md
            };
            this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
            (() => {
              if (this._breakShaderLoadedCheck) return;
              const md = new fO({
                  ...this._eventInfo.defineNames || {},
                  ...this._samplerDefines || {}
                }),
                Fd = this._prepareEffect(dd, dd, md, void 0, void 0, Wd.useInstances, Wd.clipPlane);
              this._onEffectCreatedObservable && (DO.effect = Fd, DO.subMesh = null, this._onEffectCreatedObservable.notifyObservers(DO)), Fd.isReady() ? Od && Od(this) : Fd.onCompileObservable.add((() => {
                Od && Od(this)
              }))
            })()
          }
          isReadyForSubMesh(Od, md, Wd) {
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const Fd = md._drawWrapper;
            if (Fd.effect && this.isFrozen && Fd._wasPreviouslyReady && Fd._wasPreviouslyUsingInstances === Wd) return !0;
            md.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), md.materialDefines = new fO({
              ...this._eventInfo.defineNames || {},
              ...this._samplerDefines || {}
            }));
            const Rd = md.materialDefines;
            if (this._isReadyForSubMesh(md)) return !0;
            const Xd = this.zV(),
              Kd = Xd.Iq();
            if (Rd._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, Xd.texturesEnabled)) {
              for (const dd in this._samplersList) {
                const Od = this._samplersList[dd];
                if (Od.value && !Od.value.isReadyOrNotBlocking()) return !1
              }
              const Od = this._getRadianceTexture();
              if (Od && fd.b.ReflectionTextureEnabled) {
                if (!Od.isReadyOrNotBlocking()) return !1;
                if (Od.irradianceTexture) {
                  if (!Od.irradianceTexture.isReadyOrNotBlocking()) return !1
                } else if (!Od.sphericalPolynomial && Od.getInternalTexture()?._sphericalPolynomialPromise) return !1
              }
              if (this._environmentBRDFTexture && fd.b.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1;
              if (this._environmentFuzzBRDFTexture && fd.b.ReflectionTextureEnabled && !this._environmentFuzzBRDFTexture.isReady()) return !1;
              if (this._backgroundRefractionTexture && fd.b.RefractionTextureEnabled && !this._backgroundRefractionTexture.isReadyOrNotBlocking()) return !1;
              if (dd._noiseTextures[Xd.uniqueId] && !dd._noiseTextures[Xd.uniqueId].isReady()) return !1;
              if (this._sssIrradianceTexture && this._sssDepthTexture) {
                if (!this._sssIrradianceTexture.isReady()) return !1;
                if (!this._sssDepthTexture.isReady()) return !1
              }
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Rd, this._eventInfo.subMesh = md, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (Rd._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
            if (Rd.AREALIGHTUSED)
              for (let dd = 0; dd < Od.lightSources.length; dd++)
                if (!Od.lightSources[dd]._isReady()) return !1;
            if (Kd.getCaps().standardDerivatives || Od.isVerticesDataPresent(zd.j.NormalKind) || (Od.createNormals(!0), Bd.c.Warn("OpenPBRMaterial: Normals have been created for the mesh: " + Od.name)), !(0, dO.b)(Xd, Od, this._maxSimultaneousLights, this._disableLighting)) return !1;
            const hd = md.effect,
              vd = Rd._areLightsDisposed,
              Qd = this._prepareEffect(Od, md.getRenderingMesh(), Rd, this.onCompiled, this.onError, Wd, null);
            let td = !1;
            if (Qd)
              if (this._onEffectCreatedObservable && (DO.effect = Qd, DO.subMesh = md, this._onEffectCreatedObservable.notifyObservers(DO)), this.allowShaderHotSwapping && hd && !Qd.isReady()) {
                if (Rd.markAsUnprocessed(), td = this.isFrozen, vd) return Rd._areLightsDisposed = !0, !1
              } else Xd.resetCachedMaterial(), md.setEffect(Qd, Rd, this._materialContext);
            return !(!md.effect || !md.effect.isReady()) && (Rd._renderId = Xd.getRenderId(), Fd._wasPreviouslyReady = !td, Fd._wasPreviouslyUsingInstances = !!Wd, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const dd = this._uniformBuffer;
            dd.addUniform("vTangentSpaceParams", 2), dd.addUniform("vLightingIntensity", 4), dd.addUniform("pointSize", 1), dd.addUniform("vDebugMode", 2), dd.addUniform("renderTargetSize", 2), dd.addUniform("cameraInfo", 4), dd.addUniform("vTextureRepetitionHexTilingParams", 4), dd.addUniform("backgroundRefractionMatrix", 16), dd.addUniform("vBackgroundRefractionInfos", 3), (0, dO.W)(dd, !0, !0, !0, !0, !0), Object.values(this._uniformsList).forEach((Od => {
              dd.addUniform(Od.name, Od.numComponents)
            })), Object.values(this._samplersList).forEach((Od => {
              dd.addUniform(Od.samplerInfoName, 2), dd.addUniform(Od.samplerMatrixName, 16)
            })), super.buildUniformLayout()
          }
          bindPropertiesForSubMesh(dd, Od, md, Wd) {
            if (0 === this.geometryThickness) dd.updateFloat("vGeometryThickness", 0);
            else {
              Wd.getRenderingMesh().getWorldMatrix().decompose(Pd.h.Cq[0]);
              const Od = Math.max(Math.abs(Pd.h.Cq[0].x), Math.abs(Pd.h.Cq[0].y), Math.abs(Pd.h.Cq[0].z));
              dd.updateFloat("vGeometryThickness", this.geometryThickness * Od)
            }
          }
          bindForSubMesh(Od, md, Wd) {
            const Fd = this.zV(),
              Rd = Wd.materialDefines;
            if (!Rd) return;
            const Xd = Wd.effect;
            if (!Xd) return;
            this._activeEffect = Xd, md.getMeshUniformBuffer().bindToEffect(Xd, "Mesh"), md.transferToEffect(Od);
            const Kd = Fd.Iq();
            this._uniformBuffer.bindToEffect(Xd, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, Fd, md, Od, this.isFrozen), HO.c.Bind(Kd.currentRenderPassId, this._activeEffect, md, Od, this);
            const hd = Fd.activeCamera;
            hd ? this._uniformBuffer.updateFloat4("cameraInfo", hd.minZ, hd.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const vd = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", vd[0], vd[1], vd[2], vd[3]), this._eventInfo.subMesh = Wd, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), Rd.OBJECTSPACE_NORMALMAP && (Od.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const Qd = this._mustRebind(Fd, Xd, Wd, md.visibility),
              td = Kd._features.needToAlwaysBindUniformBuffers;
            (0, dO.d)(md, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, NO.e)(this._activeEffect, this._vertexPullingMetadata);
            const od = this._uniformBuffer;
            if (Qd) {
              this.bindViewProjection(Xd);
              const Od = this._getRadianceTexture();
              if (!od.useUbo || !this.isFrozen || !od.isSync || Wd._drawWrapper._forceRebindOnNextCall) {
                if (Fd.texturesEnabled) {
                  for (const dd in this._samplersList) {
                    const Od = this._samplersList[dd];
                    Od.value && (od.updateFloat2(Od.samplerInfoName, Od.value.coordinatesIndex, Od.value.level), (0, dO.q)(Od.value, od, Od.samplerPrefix))
                  }(this.geometryNormalTexture || this.geometryCoatNormalTexture) && (Fd._mirroredCameraPosition ? od.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : od.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, dO.h)(Fd, Rd, od, ld.d.White(), Od, this.realTimeFiltering, !0, !0, !0, !0, !0)
                }
                this.pointsCloud && od.updateFloat("pointSize", this.pointSize);
                const dd = this._uniformsArray;
                for (let Od = 0, md = dd.length; Od < md; Od++) {
                  const md = dd[Od];
                  (void 0 === md.requiredDefine || Rd[md.requiredDefine]) && (4 === md.numComponents ? (md.populateVectorFromLinkedProperties(Pd.h.Vector4[0]), od.updateVector4(md.name, Pd.h.Vector4[0])) : 3 === md.numComponents ? (md.populateVectorFromLinkedProperties(Pd.h.Cq[0]), od.updateVector3(md.name, Pd.h.Cq[0])) : 2 === md.numComponents ? (md.populateVectorFromLinkedProperties(Pd.h.Vector2[0]), od.updateFloat2(md.name, Pd.h.Vector2[0].x, Pd.h.Vector2[0].y)) : 1 === md.numComponents && od.updateFloat(md.name, md.linkedProperties[md.firstLinkedKey].value))
                }
                this._lightingInfos.x = this.directIntensity, this._lightingInfos.y = this.emissionLuminance, this._lightingInfos.z = this.environmentIntensity * Fd.environmentIntensity, this._lightingInfos.w = 1, od.updateVector4("vLightingIntensity", this._lightingInfos), od.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
              }
              if (Fd.texturesEnabled) {
                for (const dd in this._samplersList) {
                  const Od = this._samplersList[dd];
                  Od.value && od.setTexture(Od.samplerName, Od.value)
                }
                if ((0, dO.j)(Fd, Rd, od, Od, this.realTimeFiltering), Rd.ENVIRONMENTBRDF && od.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), Rd.FUZZENVIRONMENTBRDF && od.setTexture("environmentFuzzBrdfSampler", this._environmentFuzzBRDFTexture), Rd.REFRACTED_BACKGROUND && (od.setTexture("backgroundRefractionSampler", this._backgroundRefractionTexture), od.Idd("backgroundRefractionMatrix", this._backgroundRefractionTexture.getReflectionTextureMatrix()), Pd.h.Cq[1].set(Math.log2(this._backgroundRefractionTexture.getSize().width), 0, 0), od.updateVector3("vBackgroundRefractionInfos", Pd.h.Cq[1])), (Rd.ANISOTROPIC || Rd.FUZZ || Rd.REFRACTED_BACKGROUND || Rd.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && od.setTexture("blueNoiseSampler", dd._noiseTextures[this.zV().uniqueId]), Rd.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && this.sssIrradianceTexture && this.sssDepthTexture) {
                  const dd = this.sssIrradianceTexture.getSize().width,
                    Od = this.sssIrradianceTexture.getSize().height;
                  od.setTexture("sceneIrradianceSampler", this.sssIrradianceTexture), od.setTexture("sceneDepthSampler", this.sssDepthTexture), od.updateFloat2("renderTargetSize", dd, Od)
                }
              }
              this.zV().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(md) && this.zV().depthPeelingRenderer.bind(Xd), this._eventInfo.subMesh = Wd, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, oO.e)(this._activeEffect, this, Fd), this.bindEyePosition(Xd)
            } else td && (this._needToBindSceneUbo = !0);
            this.bindPropertiesForSubMesh(this._uniformBuffer, Fd, Fd.Iq(), Wd), !Qd && this.isFrozen && !td || !Fd.lightsEnabled || this._disableLighting || (0, dO.k)(Fd, md, this._activeEffect, Rd, this._maxSimultaneousLights), !Qd && this.isFrozen || (this.bindView(Xd), (0, dO.f)(Fd, md, this._activeEffect, !0), Rd.NUM_MORPH_INFLUENCERS && (0, dO.n)(md, this._activeEffect), Rd.BAKED_VERTEX_ANIMATION_TEXTURE && md.bakedVertexAnimationManager?.bind(Xd, Rd.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, dO.m)(Rd, this._activeEffect, Fd)), this._afterBind(md, this._activeEffect, Wd), od.update()
          }
          getAnimatables() {
            const dd = super.getAnimatables();
            for (const Od in this._samplersList) {
              const md = this._samplersList[Od];
              md.value && md.value.animations && md.value.animations.length > 0 && dd.push(md.value)
            }
            return this._radianceTexture && this._radianceTexture.animations && this._radianceTexture.animations.length > 0 && dd.push(this._radianceTexture), dd
          }
          getActiveTextures() {
            const dd = super.getActiveTextures();
            for (const Od in this._samplersList) {
              const md = this._samplersList[Od];
              md.value && dd.push(md.value)
            }
            return this._radianceTexture && dd.push(this._radianceTexture), dd
          }
          hasTexture(dd) {
            if (super.hasTexture(dd)) return !0;
            for (const Od in this._samplersList) {
              if (this._samplersList[Od].value === dd) return !0
            }
            return this._radianceTexture === dd
          }
          setPrePassRenderer() {
            return !1
          }
          dispose(dd, Od) {
            if (this._breakShaderLoadedCheck = !0, Od) {
              this._environmentBRDFTexture && this.zV().openPBREnvironmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._environmentFuzzBRDFTexture && this.zV().environmentFuzzBRDFTexture !== this._environmentFuzzBRDFTexture && this._environmentFuzzBRDFTexture.dispose(), this._backgroundRefractionTexture = null;
              for (const dd in this._samplersList) {
                const Od = this._samplersList[dd];
                Od.value?.dispose()
              }
              this._radianceTexture?.dispose()
            }
            this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(dd, Od)
          }
          _getRadianceTexture() {
            return this._radianceTexture ? this._radianceTexture : this.zV().environmentTexture
          }
          _prepareEffect(Od, md, Wd) {
            let Fd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              Rd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              Xd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              Kd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
            if (this._prepareDefines(Od, md, Wd, Xd, Kd), !Wd.isDirty) return null;
            Wd.markAsProcessed();
            const hd = this.zV().Iq(),
              vd = new Md.e;
            let Qd = 0;
            Wd.USESPHERICALINVERTEX && vd.addFallback(Qd++, "USESPHERICALINVERTEX"), Wd.FOG && vd.addFallback(Qd, "FOG"), Wd.SPECULARAA && vd.addFallback(Qd, "SPECULARAA"), Wd.POINTSIZE && vd.addFallback(Qd, "POINTSIZE"), Wd.LOGARITHMICDEPTH && vd.addFallback(Qd, "LOGARITHMICDEPTH"), Wd.PARALLAX && vd.addFallback(Qd, "PARALLAX"), Wd.PARALLAX_RHS && vd.addFallback(Qd, "PARALLAX_RHS"), Wd.PARALLAXOCCLUSION && vd.addFallback(Qd++, "PARALLAXOCCLUSION"), Wd.ENVIRONMENTBRDF && vd.addFallback(Qd++, "ENVIRONMENTBRDF"), Wd.TANGENT && vd.addFallback(Qd++, "TANGENT"), Qd = (0, dO.s)(Wd, vd, this._maxSimultaneousLights, Qd), Wd.SPECULARTERM && vd.addFallback(Qd++, "SPECULARTERM"), Wd.USESPHERICALFROMREFLECTIONMAP && vd.addFallback(Qd++, "USESPHERICALFROMREFLECTIONMAP"), Wd.USEIRRADIANCEMAP && vd.addFallback(Qd++, "USEIRRADIANCEMAP"), Wd.NORMAL && vd.addFallback(Qd++, "NORMAL"), Wd.VERTEXCOLOR && vd.addFallback(Qd++, "VERTEXCOLOR"), Wd.MORPHTARGETS && vd.addFallback(Qd++, "MORPHTARGETS"), Wd.MULTIVIEW && vd.addFallback(0, "MULTIVIEW");
            const td = [zd.j.PositionKind];
            Wd.NORMAL && td.push(zd.j.NormalKind), Wd.TANGENT && td.push(zd.j.TangentKind);
            for (let dd = 1; dd <= 6; ++dd) Wd["UV" + dd] && td.push(`uv${1===dd?"":dd}`);
            Wd.VERTEXCOLOR && td.push(zd.j.ColorKind), (0, dO.w)(td, Od, Wd, vd), (0, dO.y)(td, Wd), (0, dO.z)(td, Od, Wd), (0, dO.v)(td, Od, Wd);
            let od = "openpbr";
            const Nd = ["world", "view", "viewProjection", "projection", "vEyePosition", "inverseProjection", "renderTargetSize", "vLightsType", "visibility", "vFogInfos", "vFogColor", "pointSize", "mBones", "normalMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams", "backgroundRefractionMatrix", "vBackgroundRefractionInfos"];
            for (const dd in this._uniformsList) Nd.push(dd);
            const qd = ["environmentBrdfSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
            Wd.FUZZENVIRONMENTBRDF && qd.push("environmentFuzzBrdfSampler"), Wd.REFRACTED_BACKGROUND && qd.push("backgroundRefractionSampler"), (Wd.ANISOTROPIC || Wd.FUZZ || Wd.REFRACTED_BACKGROUND || Wd.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && qd.push("blueNoiseSampler"), Wd.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && (qd.push("sceneIrradianceSampler"), qd.push("sceneDepthSampler"));
            for (const dd in this._samplersList) {
              const Od = this._samplersList[dd];
              qd.push(Od.samplerName), Nd.push(Od.samplerInfoName), Nd.push(Od.samplerMatrixName)
            }(0, dO.Y)(Nd, qd, !0);
            const Hd = ["Material", "Scene", "Mesh"],
              yd = {
                maxSimultaneousLights: this._maxSimultaneousLights,
                maxSimultaneousMorphTargets: Wd.NUM_MORPH_INFLUENCERS
              };
            if (this._eventInfo.fallbacks = vd, this._eventInfo.fallbackRank = Qd, this._eventInfo.defines = Wd, this._eventInfo.uniforms = Nd, this._eventInfo.attributes = td, this._eventInfo.samplers = qd, this._eventInfo.uniformBuffersNames = Hd, this._eventInfo.customCode = void 0, this._eventInfo.mesh = Od, this._eventInfo.indexParameters = yd, this._callbackPluginEventGeneric(128, this._eventInfo), HO.c.AddUniformsAndSamplers(Nd, qd), Id.c.AddUniforms(Nd), Id.c.AddSamplers(qd), (0, oO.b)(Nd), this._useVertexPulling) {
              const dd = md?.geometry;
              dd && (this._vertexPullingMetadata = (0, NO.f)(dd), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((dd, Od) => {
                Nd.push(`vp_${Od}_info`)
              })))
            } else this._vertexPullingMetadata = null;
            Zd.b && (Zd.b.PrepareUniforms(Nd, Wd), Zd.b.PrepareSamplers(qd, Wd)), (0, dO.Z)({
              uniformsNames: Nd,
              uniformBuffersNames: Hd,
              samplers: qd,
              defines: Wd,
              maxSimultaneousLights: this._maxSimultaneousLights,
              shaderLanguage: this._shaderLanguage
            });
            const bd = {};
            this.customShaderNameResolve && (od = this.customShaderNameResolve(od, Nd, Hd, qd, Wd, td, bd));
            const Td = Wd.toString(),
              pd = hd.createEffect(od, {
                attributes: td,
                uniformsNames: Nd,
                uniformBuffersNames: Hd,
                samplers: qd,
                defines: Td,
                fallbacks: vd,
                onCompiled: Fd,
                onError: Rd,
                indexParameters: yd,
                processFinalCode: bd.processFinalCode,
                processCodeAfterIncludes: this._eventInfo.customCode,
                multiTarget: Wd.PREPASS,
                shaderLanguage: this._shaderLanguage,
                extraInitializationsAsync: dd._ShaderLoader.getLoadCallback(this._shaderLanguage)
              }, hd);
            return this._eventInfo.customCode = void 0, pd
          }
          _prepareDefines(Od, md, Wd) {
            let Fd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              Xd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const Kd = md.hasThinInstances,
              hd = this.zV(),
              vd = hd.Iq();
            (0, dO.L)(hd, Od, Wd, !0, this._maxSimultaneousLights, this._disableLighting), Wd._needNormals = !0, (0, dO.R)(hd, Wd);
            const Qd = this.needAlphaBlendingForMesh(Od) && this.zV().useOrderIndependentTransparency;
            if ((0, dO.U)(hd, Wd, this.canRenderToMRT && !Qd), (0, dO.T)(hd, Wd, Qd), HO.c.PrepareDefines(vd.currentRenderPassId, Od, Wd), Wd._areTexturesDirty) {
              Wd._needUVs = !1;
              for (let dd = 1; dd <= 6; ++dd) Wd["MAINUV" + dd] = !1;
              if (hd.texturesEnabled) {
                for (const md in this._samplersList) {
                  const dd = this._samplersList[md];
                  dd.value ? ((0, dO.M)(dd.value, Wd, dd.textureDefine), Wd[dd.textureDefine + "_GAMMA"] = dd.value.gammaSpace) : Wd[dd.textureDefine] = !1
                }
                const dd = this._getRadianceTexture(),
                  Od = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || vd.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
                if ((0, dO.H)(hd, dd, Wd, this.realTimeFiltering, this.realTimeFilteringQuality, !Od), this._baseMetalnessTexture && (Wd.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed), Wd.SPECULAR_WEIGHT_IN_ALPHA = this._useSpecularWeightFromAlpha, Wd.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = this._useSpecularWeightFromSpecularColorTexture, Wd.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useSpecularRoughnessAnisotropyFromTangentTexture, Wd.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useCoatRoughnessAnisotropyFromTangentTexture, Wd.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = this._useCoatRoughnessFromGreenChannel, Wd.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = this._useRoughnessFromMetallicTextureGreen, Wd.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = this._useFuzzRoughnessFromTextureAlpha, Wd.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = this._useSubsurfaceWeightFromTextureAlpha, Wd.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = this._useMetallicFromMetallicTextureBlue, Wd.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = this._useThinFilmThicknessFromTextureGreen, Wd.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = this._useGeometryThicknessFromGreenChannel, this.geometryNormalTexture ? (this._useParallax && this.baseColorTexture && fd.b.DiffuseTextureEnabled ? (Wd.PARALLAX = !0, Wd.PARALLAX_RHS = hd.useRightHandedSystem, Wd.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : Wd.PARALLAX = !1, Wd.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (Wd.PARALLAX = !1, Wd.PARALLAX_RHS = !1, Wd.PARALLAXOCCLUSION = !1, Wd.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && fd.b.ReflectionTextureEnabled ? (Wd.ENVIRONMENTBRDF = !0, Wd.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (Wd.ENVIRONMENTBRDF = !1, Wd.ENVIRONMENTBRDF_RGBD = !1), this._environmentFuzzBRDFTexture ? Wd.FUZZENVIRONMENTBRDF = !0 : Wd.FUZZENVIRONMENTBRDF = !1, this.hasTransparency) {
                  Wd.REFRACTED_BACKGROUND = !!this._backgroundRefractionTexture && fd.b.RefractionTextureEnabled, Wd.REFRACTION_HIGH_QUALITY_BLUR = this._refractionHighQualityBlur, Wd.REFRACTED_LIGHTS = !0;
                  const dd = this._getRadianceTexture();
                  dd ? (Wd.REFRACTED_ENVIRONMENT = fd.b.RefractionTextureEnabled, Wd.REFRACTED_ENVIRONMENT_OPPOSITEZ = this.zV().useRightHandedSystem ? !dd.invertZ : dd.invertZ, Wd.REFRACTED_ENVIRONMENT_LOCAL_CUBE = dd.isCube && dd.boundingBoxSize) : Wd.REFRACTED_ENVIRONMENT = !1
                } else Wd.REFRACTED_BACKGROUND = !1, Wd.REFRACTED_LIGHTS = !1, Wd.REFRACTED_ENVIRONMENT = !1;
                this._shouldUseAlphaFromBaseColorTexture() ? Wd.ALPHA_FROM_BASE_COLOR_TEXTURE = !0 : Wd.ALPHA_FROM_BASE_COLOR_TEXTURE = !1
              }
              this._lightFalloff === Rd.b.LIGHTFALLOFF_STANDARD ? (Wd.USEPHYSICALLIGHTFALLOFF = !1, Wd.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === Rd.b.LIGHTFALLOFF_GLTF ? (Wd.USEPHYSICALLIGHTFALLOFF = !1, Wd.USEGLTFLIGHTFALLOFF = !0) : (Wd.USEPHYSICALLIGHTFALLOFF = !0, Wd.USEGLTFLIGHTFALLOFF = !1), !this.backFaceCulling && this._twoSidedLighting ? Wd.TWOSIDEDLIGHTING = !0 : Wd.TWOSIDEDLIGHTING = !1, Wd.MIRRORED = !!hd._mirroredCameraPosition, Wd.SPECULARAA = vd.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
            }(Wd._areTexturesDirty || Wd._areMiscDirty) && (Wd.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, Wd.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, Wd.ALPHABLEND = this.needAlphaBlendingForMesh(Od)), Wd._areTexturesDirty && (Wd.TEXTURE_REPETITION_MODE = vd.version > 1 || vd.isWebGPU ? this.textureRepetitionMode : 0), Wd._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(Wd), Wd.FORCENORMALFORWARD = this._forceNormalForward, Wd.RADIANCEOCCLUSION = this._useRadianceOcclusion, Wd.HORIZONOCCLUSION = this._useHorizonOcclusion, (this.specularRoughnessAnisotropy > 0 || this.coatRoughnessAnisotropy > 0) && dd._noiseTextures[hd.uniqueId] && fd.b.ReflectionTextureEnabled ? (Wd.ANISOTROPIC = !0, Od.isVerticesDataPresent(zd.j.TangentKind) || (Wd._needUVs = !0, Wd.MAINUV1 = !0), this._useGltfStyleAnisotropy && (Wd.USE_GLTF_STYLE_ANISOTROPY = !0), Wd.ANISOTROPIC_BASE = this.specularRoughnessAnisotropy > 0, Wd.ANISOTROPIC_COAT = this.coatRoughnessAnisotropy > 0) : (Wd.ANISOTROPIC = !1, Wd.USE_GLTF_STYLE_ANISOTROPY = !1, Wd.ANISOTROPIC_BASE = !1, Wd.ANISOTROPIC_COAT = !1), Wd.THIN_FILM = this.thinFilmWeight > 0, Wd.IRIDESCENCE = this.thinFilmWeight > 0, Wd.DISPERSION = this.transmissionDispersionScale > 0, Wd.SCATTERING = this.hasScattering;
            if (Wd.SSS_SAMPLE_COUNT = [8, 16, 32][this._sssQuality] ?? 16, Wd.TRANSMISSION_SLAB = this.transmissionWeight > 0, Wd.TRANSMISSION_SLAB_VOLUME = this.transmissionWeight > 0 && this.transmissionDepth > 0, Wd.SUBSURFACE_SLAB = this.subsurfaceWeight > 0, !Wd.PREPASS && (Wd.SUBSURFACE_SLAB || Wd.TRANSMISSION_SLAB_VOLUME)) {
              let dd = !1;
              if (!this.sssIrradianceTexture && hd.geometryBufferRenderer) {
                const Od = hd.geometryBufferRenderer.getTextureIndex(cO.IRRADIANCE_TEXTURE_TYPE);
                this.sssIrradianceTexture = hd.geometryBufferRenderer.getGBuffer().textures[Od], dd = !0
              }
              if (!this.sssDepthTexture && hd.geometryBufferRenderer) {
                const Od = hd.geometryBufferRenderer.getTextureIndex(cO.SCREENSPACE_DEPTH_TEXTURE_TYPE);
                this.sssDepthTexture = hd.geometryBufferRenderer.getGBuffer().textures[Od], dd = !0
              }
              this.sssIrradianceTexture && this.sssDepthTexture && (Wd.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !0, dd && (Wd.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !0))
            }
            Wd.FUZZ = this.fuzzWeight > 0 && fd.b.ReflectionTextureEnabled, Wd.GEOMETRY_THIN_WALLED = 0 != this.geometryThinWalled, Wd.FUZZ ? (Od.isVerticesDataPresent(zd.j.TangentKind) || (Wd._needUVs = !0, Wd.MAINUV1 = !0), this._environmentFuzzBRDFTexture = Gd(this.zV()), Wd.FUZZ_IBL_SAMPLES = this.fuzzSampleNumber) : (this._environmentFuzzBRDFTexture = null, Wd.FUZZENVIRONMENTBRDF = !1, Wd.FUZZ_IBL_SAMPLES = 0), Wd._areMiscDirty && ((0, dO.N)(Od, hd, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(Od), Wd, this._applyDecalMapAfterDetailMap, this._useVertexPulling, md, this._isVertexOutputInvariant), Wd.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !Od.isVerticesDataPresent(zd.j.NormalKind), Wd.DEBUGMODE = this._debugMode), (0, dO.F)(hd, vd, this, Wd, !!Fd, Xd, Kd), this._eventInfo.defines = Wd, this._eventInfo.mesh = Od, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, dO.E)(Od, Wd, !0, !0, !0, this._transparencyMode !== Rd.b.MATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
          }
        }, Od = new WeakMap, Wd = new WeakMap, Fd = new WeakMap, Xd = new WeakMap, Kd = new WeakMap, hd = new WeakMap, vd = new WeakMap, Qd = new WeakMap, td = new WeakMap, od = new WeakMap, Nd = new WeakMap, qd = new WeakMap, Hd = new WeakMap, yd = new WeakMap, bd = new WeakMap, Td = new WeakMap, pd = new WeakMap, Yd = new WeakMap, gd = new WeakMap, wd = new WeakMap, Ed = new WeakMap, Jd = new WeakMap, ud = new WeakMap, Vd = new WeakMap, Ad = new WeakMap, rd = new WeakMap, Ld = new WeakMap, cd = new WeakMap, jd = new WeakMap, Dd = new WeakMap, ed = new WeakMap, Cd = new WeakMap, kd = new WeakMap, OO = new WeakMap, mO = new WeakMap, WO = new WeakMap, FO = new WeakMap, RO = new WeakMap, XO = new WeakMap, KO = new WeakMap, hO = new WeakMap, vO = new WeakMap, QO = new WeakMap, tO = new WeakMap, yO = new WeakMap, bO = new WeakMap, TO = new WeakMap, pO = new WeakMap, YO = new WeakMap, gO = new WeakMap, wO = new WeakMap, aO = new WeakMap, EO = new WeakMap, xO = new WeakMap, BO = new WeakMap, SO = new WeakMap, sO = new WeakMap, uO = new WeakMap, VO = new WeakMap, iO = new WeakMap, AO = new WeakMap, rO = new WeakMap, GO = new WeakMap, nO = new WeakMap, LO = new WeakMap, PO = new WeakMap, zO = new WeakMap, jO = new WeakMap, eO = new WeakMap, ZO = new WeakMap, kO = new WeakMap, dm = new WeakMap, Om = new WeakMap, mm = new WeakMap, Wm = new WeakMap, Fm = new WeakMap, Rm = new WeakMap, Xm = new WeakMap, Km = new WeakMap, hm = new WeakMap, Qm = new WeakMap, tm = new WeakMap, om = new WeakMap, Nm = new WeakMap, qm = new WeakMap, Hm = new WeakMap, ym = new WeakMap, bm = new WeakMap, Tm = new WeakMap, pm = new WeakMap, Ym = new WeakMap, gm = new WeakMap, wm = new WeakMap, am = new WeakMap, Em = new WeakMap, Jm = new WeakMap, Um = new WeakMap, xm = new WeakMap, Bm = new WeakMap, Sm = new WeakMap, sm = new WeakMap, um = new WeakMap, (() => {
          const Od = "function" === typeof Symbol && Symbol.metadata ? Object.create(iF[Symbol.metadata] ?? null) : void 0;
          Vm = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], im = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], Am = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], rm = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], Gm = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], nm = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], Lm = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], Pm = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], zm = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], cm = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], jm = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], Dm = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], em = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], Im = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], lm = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], Cm = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], Zm = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], km = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], fm = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], Mm = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], dW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], OW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], mW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], WW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], FW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], RW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], XW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], KW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], hW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], vW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], QW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], tW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], oW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], NW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], qW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], HW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], yW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], bW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], TW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], pW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], YW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], gW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], wW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], aW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], EW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], JW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], UW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], xW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], BW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], SW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], sW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], uW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], VW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], iW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], AW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], rW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], GW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], nW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], LW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], PW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], zW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], cW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], jW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], DW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], eW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], IW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], lW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], CW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], ZW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], kW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], fW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], MW = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], dF = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], OF = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], mF = [(0, xd.e)("_markAllSubMeshesAsTexturesDirty")], WF = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], FF = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], RF = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], XF = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesAndMiscDirty")], KF = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesAndMiscDirty")], hF = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], vF = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], QF = [(0, xd.E)()], tF = [(0, xd.E)()], oF = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], NF = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], qF = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], HF = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], yF = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsLightsDirty")], bF = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], TF = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsLightsDirty")], pF = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], YF = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], gF = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], wF = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], aF = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], EF = [(0, xd.g)("_markAllSubMeshesAsTexturesDirty")], JF = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], UF = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], xF = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], BF = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], SF = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsMiscDirty")], sF = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsMiscDirty")], uF = [(0, xd.g)("_markAllSubMeshesAsMiscDirty")], VF = [(0, xd.E)()], (0, Ud.h)(dd, null, Vm, {
            kind: "accessor",
            name: "baseWeight",
            static: !1,
            private: !1,
            access: {
              has: dd => "baseWeight" in dd,
              get: dd => dd.baseWeight,
              set: (dd, Od) => {
                dd.baseWeight = Od
              }
            },
            metadata: Od
          }, rF, GF), (0, Ud.h)(dd, null, im, {
            kind: "accessor",
            name: "baseWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "baseWeightTexture" in dd,
              get: dd => dd.baseWeightTexture,
              set: (dd, Od) => {
                dd.baseWeightTexture = Od
              }
            },
            metadata: Od
          }, nF, LF), (0, Ud.h)(dd, null, Am, {
            kind: "accessor",
            name: "baseColor",
            static: !1,
            private: !1,
            access: {
              has: dd => "baseColor" in dd,
              get: dd => dd.baseColor,
              set: (dd, Od) => {
                dd.baseColor = Od
              }
            },
            metadata: Od
          }, PF, zF), (0, Ud.h)(dd, null, rm, {
            kind: "accessor",
            name: "baseColorTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "baseColorTexture" in dd,
              get: dd => dd.baseColorTexture,
              set: (dd, Od) => {
                dd.baseColorTexture = Od
              }
            },
            metadata: Od
          }, cF, jF), (0, Ud.h)(dd, null, Gm, {
            kind: "accessor",
            name: "baseDiffuseRoughness",
            static: !1,
            private: !1,
            access: {
              has: dd => "baseDiffuseRoughness" in dd,
              get: dd => dd.baseDiffuseRoughness,
              set: (dd, Od) => {
                dd.baseDiffuseRoughness = Od
              }
            },
            metadata: Od
          }, DF, eF), (0, Ud.h)(dd, null, nm, {
            kind: "accessor",
            name: "baseDiffuseRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "baseDiffuseRoughnessTexture" in dd,
              get: dd => dd.baseDiffuseRoughnessTexture,
              set: (dd, Od) => {
                dd.baseDiffuseRoughnessTexture = Od
              }
            },
            metadata: Od
          }, IF, lF), (0, Ud.h)(dd, null, Lm, {
            kind: "accessor",
            name: "baseMetalness",
            static: !1,
            private: !1,
            access: {
              has: dd => "baseMetalness" in dd,
              get: dd => dd.baseMetalness,
              set: (dd, Od) => {
                dd.baseMetalness = Od
              }
            },
            metadata: Od
          }, CF, ZF), (0, Ud.h)(dd, null, Pm, {
            kind: "accessor",
            name: "baseMetalnessTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "baseMetalnessTexture" in dd,
              get: dd => dd.baseMetalnessTexture,
              set: (dd, Od) => {
                dd.baseMetalnessTexture = Od
              }
            },
            metadata: Od
          }, kF, fF), (0, Ud.h)(dd, null, zm, {
            kind: "accessor",
            name: "specularWeight",
            static: !1,
            private: !1,
            access: {
              has: dd => "specularWeight" in dd,
              get: dd => dd.specularWeight,
              set: (dd, Od) => {
                dd.specularWeight = Od
              }
            },
            metadata: Od
          }, MF, dR), (0, Ud.h)(dd, null, cm, {
            kind: "accessor",
            name: "specularWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "specularWeightTexture" in dd,
              get: dd => dd.specularWeightTexture,
              set: (dd, Od) => {
                dd.specularWeightTexture = Od
              }
            },
            metadata: Od
          }, OR, mR), (0, Ud.h)(dd, null, jm, {
            kind: "accessor",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: dd => "specularColor" in dd,
              get: dd => dd.specularColor,
              set: (dd, Od) => {
                dd.specularColor = Od
              }
            },
            metadata: Od
          }, WR, FR), (0, Ud.h)(dd, null, Dm, {
            kind: "accessor",
            name: "specularColorTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "specularColorTexture" in dd,
              get: dd => dd.specularColorTexture,
              set: (dd, Od) => {
                dd.specularColorTexture = Od
              }
            },
            metadata: Od
          }, RR, XR), (0, Ud.h)(dd, null, em, {
            kind: "accessor",
            name: "specularRoughness",
            static: !1,
            private: !1,
            access: {
              has: dd => "specularRoughness" in dd,
              get: dd => dd.specularRoughness,
              set: (dd, Od) => {
                dd.specularRoughness = Od
              }
            },
            metadata: Od
          }, KR, hR), (0, Ud.h)(dd, null, Im, {
            kind: "accessor",
            name: "specularRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "specularRoughnessTexture" in dd,
              get: dd => dd.specularRoughnessTexture,
              set: (dd, Od) => {
                dd.specularRoughnessTexture = Od
              }
            },
            metadata: Od
          }, vR, QR), (0, Ud.h)(dd, null, lm, {
            kind: "accessor",
            name: "specularRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: dd => "specularRoughnessAnisotropy" in dd,
              get: dd => dd.specularRoughnessAnisotropy,
              set: (dd, Od) => {
                dd.specularRoughnessAnisotropy = Od
              }
            },
            metadata: Od
          }, tR, oR), (0, Ud.h)(dd, null, Cm, {
            kind: "accessor",
            name: "specularRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "specularRoughnessAnisotropyTexture" in dd,
              get: dd => dd.specularRoughnessAnisotropyTexture,
              set: (dd, Od) => {
                dd.specularRoughnessAnisotropyTexture = Od
              }
            },
            metadata: Od
          }, NR, qR), (0, Ud.h)(dd, null, Zm, {
            kind: "accessor",
            name: "specularIor",
            static: !1,
            private: !1,
            access: {
              has: dd => "specularIor" in dd,
              get: dd => dd.specularIor,
              set: (dd, Od) => {
                dd.specularIor = Od
              }
            },
            metadata: Od
          }, HR, yR), (0, Ud.h)(dd, null, km, {
            kind: "accessor",
            name: "transmissionWeight",
            static: !1,
            private: !1,
            access: {
              has: dd => "transmissionWeight" in dd,
              get: dd => dd.transmissionWeight,
              set: (dd, Od) => {
                dd.transmissionWeight = Od
              }
            },
            metadata: Od
          }, bR, TR), (0, Ud.h)(dd, null, fm, {
            kind: "accessor",
            name: "transmissionWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "transmissionWeightTexture" in dd,
              get: dd => dd.transmissionWeightTexture,
              set: (dd, Od) => {
                dd.transmissionWeightTexture = Od
              }
            },
            metadata: Od
          }, pR, YR), (0, Ud.h)(dd, null, Mm, {
            kind: "accessor",
            name: "transmissionColor",
            static: !1,
            private: !1,
            access: {
              has: dd => "transmissionColor" in dd,
              get: dd => dd.transmissionColor,
              set: (dd, Od) => {
                dd.transmissionColor = Od
              }
            },
            metadata: Od
          }, gR, wR), (0, Ud.h)(dd, null, dW, {
            kind: "accessor",
            name: "transmissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "transmissionColorTexture" in dd,
              get: dd => dd.transmissionColorTexture,
              set: (dd, Od) => {
                dd.transmissionColorTexture = Od
              }
            },
            metadata: Od
          }, aR, ER), (0, Ud.h)(dd, null, OW, {
            kind: "accessor",
            name: "transmissionDepth",
            static: !1,
            private: !1,
            access: {
              has: dd => "transmissionDepth" in dd,
              get: dd => dd.transmissionDepth,
              set: (dd, Od) => {
                dd.transmissionDepth = Od
              }
            },
            metadata: Od
          }, JR, UR), (0, Ud.h)(dd, null, mW, {
            kind: "accessor",
            name: "transmissionDepthTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "transmissionDepthTexture" in dd,
              get: dd => dd.transmissionDepthTexture,
              set: (dd, Od) => {
                dd.transmissionDepthTexture = Od
              }
            },
            metadata: Od
          }, xR, BR), (0, Ud.h)(dd, null, WW, {
            kind: "accessor",
            name: "transmissionScatter",
            static: !1,
            private: !1,
            access: {
              has: dd => "transmissionScatter" in dd,
              get: dd => dd.transmissionScatter,
              set: (dd, Od) => {
                dd.transmissionScatter = Od
              }
            },
            metadata: Od
          }, SR, sR), (0, Ud.h)(dd, null, FW, {
            kind: "accessor",
            name: "transmissionScatterTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "transmissionScatterTexture" in dd,
              get: dd => dd.transmissionScatterTexture,
              set: (dd, Od) => {
                dd.transmissionScatterTexture = Od
              }
            },
            metadata: Od
          }, uR, VR), (0, Ud.h)(dd, null, RW, {
            kind: "accessor",
            name: "transmissionScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: dd => "transmissionScatterAnisotropy" in dd,
              get: dd => dd.transmissionScatterAnisotropy,
              set: (dd, Od) => {
                dd.transmissionScatterAnisotropy = Od
              }
            },
            metadata: Od
          }, iR, AR), (0, Ud.h)(dd, null, XW, {
            kind: "accessor",
            name: "transmissionDispersionScale",
            static: !1,
            private: !1,
            access: {
              has: dd => "transmissionDispersionScale" in dd,
              get: dd => dd.transmissionDispersionScale,
              set: (dd, Od) => {
                dd.transmissionDispersionScale = Od
              }
            },
            metadata: Od
          }, rR, GR), (0, Ud.h)(dd, null, KW, {
            kind: "accessor",
            name: "transmissionDispersionScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "transmissionDispersionScaleTexture" in dd,
              get: dd => dd.transmissionDispersionScaleTexture,
              set: (dd, Od) => {
                dd.transmissionDispersionScaleTexture = Od
              }
            },
            metadata: Od
          }, nR, LR), (0, Ud.h)(dd, null, hW, {
            kind: "accessor",
            name: "transmissionDispersionAbbeNumber",
            static: !1,
            private: !1,
            access: {
              has: dd => "transmissionDispersionAbbeNumber" in dd,
              get: dd => dd.transmissionDispersionAbbeNumber,
              set: (dd, Od) => {
                dd.transmissionDispersionAbbeNumber = Od
              }
            },
            metadata: Od
          }, PR, zR), (0, Ud.h)(dd, null, vW, {
            kind: "accessor",
            name: "subsurfaceWeight",
            static: !1,
            private: !1,
            access: {
              has: dd => "subsurfaceWeight" in dd,
              get: dd => dd.subsurfaceWeight,
              set: (dd, Od) => {
                dd.subsurfaceWeight = Od
              }
            },
            metadata: Od
          }, cR, jR), (0, Ud.h)(dd, null, QW, {
            kind: "accessor",
            name: "subsurfaceWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "subsurfaceWeightTexture" in dd,
              get: dd => dd.subsurfaceWeightTexture,
              set: (dd, Od) => {
                dd.subsurfaceWeightTexture = Od
              }
            },
            metadata: Od
          }, DR, eR), (0, Ud.h)(dd, null, tW, {
            kind: "accessor",
            name: "subsurfaceColor",
            static: !1,
            private: !1,
            access: {
              has: dd => "subsurfaceColor" in dd,
              get: dd => dd.subsurfaceColor,
              set: (dd, Od) => {
                dd.subsurfaceColor = Od
              }
            },
            metadata: Od
          }, IR, lR), (0, Ud.h)(dd, null, oW, {
            kind: "accessor",
            name: "subsurfaceColorTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "subsurfaceColorTexture" in dd,
              get: dd => dd.subsurfaceColorTexture,
              set: (dd, Od) => {
                dd.subsurfaceColorTexture = Od
              }
            },
            metadata: Od
          }, CR, ZR), (0, Ud.h)(dd, null, NW, {
            kind: "accessor",
            name: "subsurfaceRadius",
            static: !1,
            private: !1,
            access: {
              has: dd => "subsurfaceRadius" in dd,
              get: dd => dd.subsurfaceRadius,
              set: (dd, Od) => {
                dd.subsurfaceRadius = Od
              }
            },
            metadata: Od
          }, kR, fR), (0, Ud.h)(dd, null, qW, {
            kind: "accessor",
            name: "subsurfaceRadiusScale",
            static: !1,
            private: !1,
            access: {
              has: dd => "subsurfaceRadiusScale" in dd,
              get: dd => dd.subsurfaceRadiusScale,
              set: (dd, Od) => {
                dd.subsurfaceRadiusScale = Od
              }
            },
            metadata: Od
          }, MR, dX), (0, Ud.h)(dd, null, HW, {
            kind: "accessor",
            name: "subsurfaceRadiusScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "subsurfaceRadiusScaleTexture" in dd,
              get: dd => dd.subsurfaceRadiusScaleTexture,
              set: (dd, Od) => {
                dd.subsurfaceRadiusScaleTexture = Od
              }
            },
            metadata: Od
          }, OX, mX), (0, Ud.h)(dd, null, yW, {
            kind: "accessor",
            name: "subsurfaceScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: dd => "subsurfaceScatterAnisotropy" in dd,
              get: dd => dd.subsurfaceScatterAnisotropy,
              set: (dd, Od) => {
                dd.subsurfaceScatterAnisotropy = Od
              }
            },
            metadata: Od
          }, WX, FX), (0, Ud.h)(dd, null, bW, {
            kind: "accessor",
            name: "coatWeight",
            static: !1,
            private: !1,
            access: {
              has: dd => "coatWeight" in dd,
              get: dd => dd.coatWeight,
              set: (dd, Od) => {
                dd.coatWeight = Od
              }
            },
            metadata: Od
          }, RX, XX), (0, Ud.h)(dd, null, TW, {
            kind: "accessor",
            name: "coatWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "coatWeightTexture" in dd,
              get: dd => dd.coatWeightTexture,
              set: (dd, Od) => {
                dd.coatWeightTexture = Od
              }
            },
            metadata: Od
          }, KX, hX), (0, Ud.h)(dd, null, pW, {
            kind: "accessor",
            name: "coatColor",
            static: !1,
            private: !1,
            access: {
              has: dd => "coatColor" in dd,
              get: dd => dd.coatColor,
              set: (dd, Od) => {
                dd.coatColor = Od
              }
            },
            metadata: Od
          }, vX, QX), (0, Ud.h)(dd, null, YW, {
            kind: "accessor",
            name: "coatColorTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "coatColorTexture" in dd,
              get: dd => dd.coatColorTexture,
              set: (dd, Od) => {
                dd.coatColorTexture = Od
              }
            },
            metadata: Od
          }, tX, oX), (0, Ud.h)(dd, null, gW, {
            kind: "accessor",
            name: "coatRoughness",
            static: !1,
            private: !1,
            access: {
              has: dd => "coatRoughness" in dd,
              get: dd => dd.coatRoughness,
              set: (dd, Od) => {
                dd.coatRoughness = Od
              }
            },
            metadata: Od
          }, NX, qX), (0, Ud.h)(dd, null, wW, {
            kind: "accessor",
            name: "coatRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "coatRoughnessTexture" in dd,
              get: dd => dd.coatRoughnessTexture,
              set: (dd, Od) => {
                dd.coatRoughnessTexture = Od
              }
            },
            metadata: Od
          }, HX, yX), (0, Ud.h)(dd, null, aW, {
            kind: "accessor",
            name: "coatRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: dd => "coatRoughnessAnisotropy" in dd,
              get: dd => dd.coatRoughnessAnisotropy,
              set: (dd, Od) => {
                dd.coatRoughnessAnisotropy = Od
              }
            },
            metadata: Od
          }, bX, TX), (0, Ud.h)(dd, null, EW, {
            kind: "accessor",
            name: "coatRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "coatRoughnessAnisotropyTexture" in dd,
              get: dd => dd.coatRoughnessAnisotropyTexture,
              set: (dd, Od) => {
                dd.coatRoughnessAnisotropyTexture = Od
              }
            },
            metadata: Od
          }, pX, YX), (0, Ud.h)(dd, null, JW, {
            kind: "accessor",
            name: "coatIor",
            static: !1,
            private: !1,
            access: {
              has: dd => "coatIor" in dd,
              get: dd => dd.coatIor,
              set: (dd, Od) => {
                dd.coatIor = Od
              }
            },
            metadata: Od
          }, gX, wX), (0, Ud.h)(dd, null, UW, {
            kind: "accessor",
            name: "coatDarkening",
            static: !1,
            private: !1,
            access: {
              has: dd => "coatDarkening" in dd,
              get: dd => dd.coatDarkening,
              set: (dd, Od) => {
                dd.coatDarkening = Od
              }
            },
            metadata: Od
          }, aX, EX), (0, Ud.h)(dd, null, xW, {
            kind: "accessor",
            name: "coatDarkeningTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "coatDarkeningTexture" in dd,
              get: dd => dd.coatDarkeningTexture,
              set: (dd, Od) => {
                dd.coatDarkeningTexture = Od
              }
            },
            metadata: Od
          }, JX, UX), (0, Ud.h)(dd, null, BW, {
            kind: "accessor",
            name: "fuzzWeight",
            static: !1,
            private: !1,
            access: {
              has: dd => "fuzzWeight" in dd,
              get: dd => dd.fuzzWeight,
              set: (dd, Od) => {
                dd.fuzzWeight = Od
              }
            },
            metadata: Od
          }, xX, BX), (0, Ud.h)(dd, null, SW, {
            kind: "accessor",
            name: "fuzzWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "fuzzWeightTexture" in dd,
              get: dd => dd.fuzzWeightTexture,
              set: (dd, Od) => {
                dd.fuzzWeightTexture = Od
              }
            },
            metadata: Od
          }, SX, sX), (0, Ud.h)(dd, null, sW, {
            kind: "accessor",
            name: "fuzzColor",
            static: !1,
            private: !1,
            access: {
              has: dd => "fuzzColor" in dd,
              get: dd => dd.fuzzColor,
              set: (dd, Od) => {
                dd.fuzzColor = Od
              }
            },
            metadata: Od
          }, uX, VX), (0, Ud.h)(dd, null, uW, {
            kind: "accessor",
            name: "fuzzColorTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "fuzzColorTexture" in dd,
              get: dd => dd.fuzzColorTexture,
              set: (dd, Od) => {
                dd.fuzzColorTexture = Od
              }
            },
            metadata: Od
          }, iX, AX), (0, Ud.h)(dd, null, VW, {
            kind: "accessor",
            name: "fuzzRoughness",
            static: !1,
            private: !1,
            access: {
              has: dd => "fuzzRoughness" in dd,
              get: dd => dd.fuzzRoughness,
              set: (dd, Od) => {
                dd.fuzzRoughness = Od
              }
            },
            metadata: Od
          }, rX, GX), (0, Ud.h)(dd, null, iW, {
            kind: "accessor",
            name: "fuzzRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "fuzzRoughnessTexture" in dd,
              get: dd => dd.fuzzRoughnessTexture,
              set: (dd, Od) => {
                dd.fuzzRoughnessTexture = Od
              }
            },
            metadata: Od
          }, nX, LX), (0, Ud.h)(dd, null, AW, {
            kind: "accessor",
            name: "geometryThinWalled",
            static: !1,
            private: !1,
            access: {
              has: dd => "geometryThinWalled" in dd,
              get: dd => dd.geometryThinWalled,
              set: (dd, Od) => {
                dd.geometryThinWalled = Od
              }
            },
            metadata: Od
          }, PX, zX), (0, Ud.h)(dd, null, rW, {
            kind: "accessor",
            name: "geometryNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "geometryNormalTexture" in dd,
              get: dd => dd.geometryNormalTexture,
              set: (dd, Od) => {
                dd.geometryNormalTexture = Od
              }
            },
            metadata: Od
          }, cX, jX), (0, Ud.h)(dd, null, GW, {
            kind: "accessor",
            name: "geometryTangent",
            static: !1,
            private: !1,
            access: {
              has: dd => "geometryTangent" in dd,
              get: dd => dd.geometryTangent,
              set: (dd, Od) => {
                dd.geometryTangent = Od
              }
            },
            metadata: Od
          }, DX, eX), (0, Ud.h)(dd, null, nW, {
            kind: "accessor",
            name: "geometryTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "geometryTangentTexture" in dd,
              get: dd => dd.geometryTangentTexture,
              set: (dd, Od) => {
                dd.geometryTangentTexture = Od
              }
            },
            metadata: Od
          }, IX, lX), (0, Ud.h)(dd, null, LW, {
            kind: "accessor",
            name: "geometryCoatNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "geometryCoatNormalTexture" in dd,
              get: dd => dd.geometryCoatNormalTexture,
              set: (dd, Od) => {
                dd.geometryCoatNormalTexture = Od
              }
            },
            metadata: Od
          }, CX, ZX), (0, Ud.h)(dd, null, PW, {
            kind: "accessor",
            name: "geometryCoatTangent",
            static: !1,
            private: !1,
            access: {
              has: dd => "geometryCoatTangent" in dd,
              get: dd => dd.geometryCoatTangent,
              set: (dd, Od) => {
                dd.geometryCoatTangent = Od
              }
            },
            metadata: Od
          }, kX, fX), (0, Ud.h)(dd, null, zW, {
            kind: "accessor",
            name: "geometryCoatTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "geometryCoatTangentTexture" in dd,
              get: dd => dd.geometryCoatTangentTexture,
              set: (dd, Od) => {
                dd.geometryCoatTangentTexture = Od
              }
            },
            metadata: Od
          }, MX, dK), (0, Ud.h)(dd, null, cW, {
            kind: "accessor",
            name: "geometryOpacity",
            static: !1,
            private: !1,
            access: {
              has: dd => "geometryOpacity" in dd,
              get: dd => dd.geometryOpacity,
              set: (dd, Od) => {
                dd.geometryOpacity = Od
              }
            },
            metadata: Od
          }, OK, mK), (0, Ud.h)(dd, null, jW, {
            kind: "accessor",
            name: "geometryOpacityTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "geometryOpacityTexture" in dd,
              get: dd => dd.geometryOpacityTexture,
              set: (dd, Od) => {
                dd.geometryOpacityTexture = Od
              }
            },
            metadata: Od
          }, WK, FK), (0, Ud.h)(dd, null, DW, {
            kind: "accessor",
            name: "geometryThickness",
            static: !1,
            private: !1,
            access: {
              has: dd => "geometryThickness" in dd,
              get: dd => dd.geometryThickness,
              set: (dd, Od) => {
                dd.geometryThickness = Od
              }
            },
            metadata: Od
          }, RK, XK), (0, Ud.h)(dd, null, eW, {
            kind: "accessor",
            name: "geometryThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "geometryThicknessTexture" in dd,
              get: dd => dd.geometryThicknessTexture,
              set: (dd, Od) => {
                dd.geometryThicknessTexture = Od
              }
            },
            metadata: Od
          }, KK, hK), (0, Ud.h)(dd, null, IW, {
            kind: "accessor",
            name: "emissionLuminance",
            static: !1,
            private: !1,
            access: {
              has: dd => "emissionLuminance" in dd,
              get: dd => dd.emissionLuminance,
              set: (dd, Od) => {
                dd.emissionLuminance = Od
              }
            },
            metadata: Od
          }, vK, QK), (0, Ud.h)(dd, null, lW, {
            kind: "accessor",
            name: "emissionColor",
            static: !1,
            private: !1,
            access: {
              has: dd => "emissionColor" in dd,
              get: dd => dd.emissionColor,
              set: (dd, Od) => {
                dd.emissionColor = Od
              }
            },
            metadata: Od
          }, tK, oK), (0, Ud.h)(dd, null, CW, {
            kind: "accessor",
            name: "emissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "emissionColorTexture" in dd,
              get: dd => dd.emissionColorTexture,
              set: (dd, Od) => {
                dd.emissionColorTexture = Od
              }
            },
            metadata: Od
          }, NK, qK), (0, Ud.h)(dd, null, ZW, {
            kind: "accessor",
            name: "thinFilmWeight",
            static: !1,
            private: !1,
            access: {
              has: dd => "thinFilmWeight" in dd,
              get: dd => dd.thinFilmWeight,
              set: (dd, Od) => {
                dd.thinFilmWeight = Od
              }
            },
            metadata: Od
          }, HK, yK), (0, Ud.h)(dd, null, kW, {
            kind: "accessor",
            name: "thinFilmWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "thinFilmWeightTexture" in dd,
              get: dd => dd.thinFilmWeightTexture,
              set: (dd, Od) => {
                dd.thinFilmWeightTexture = Od
              }
            },
            metadata: Od
          }, bK, TK), (0, Ud.h)(dd, null, fW, {
            kind: "accessor",
            name: "thinFilmThickness",
            static: !1,
            private: !1,
            access: {
              has: dd => "thinFilmThickness" in dd,
              get: dd => dd.thinFilmThickness,
              set: (dd, Od) => {
                dd.thinFilmThickness = Od
              }
            },
            metadata: Od
          }, pK, YK), (0, Ud.h)(dd, null, MW, {
            kind: "accessor",
            name: "thinFilmThicknessMin",
            static: !1,
            private: !1,
            access: {
              has: dd => "thinFilmThicknessMin" in dd,
              get: dd => dd.thinFilmThicknessMin,
              set: (dd, Od) => {
                dd.thinFilmThicknessMin = Od
              }
            },
            metadata: Od
          }, gK, wK), (0, Ud.h)(dd, null, dF, {
            kind: "accessor",
            name: "thinFilmThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "thinFilmThicknessTexture" in dd,
              get: dd => dd.thinFilmThicknessTexture,
              set: (dd, Od) => {
                dd.thinFilmThicknessTexture = Od
              }
            },
            metadata: Od
          }, aK, EK), (0, Ud.h)(dd, null, OF, {
            kind: "accessor",
            name: "thinFilmIor",
            static: !1,
            private: !1,
            access: {
              has: dd => "thinFilmIor" in dd,
              get: dd => dd.thinFilmIor,
              set: (dd, Od) => {
                dd.thinFilmIor = Od
              }
            },
            metadata: Od
          }, JK, UK), (0, Ud.h)(dd, null, mF, {
            kind: "accessor",
            name: "ambientOcclusionTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "ambientOcclusionTexture" in dd,
              get: dd => dd.ambientOcclusionTexture,
              set: (dd, Od) => {
                dd.ambientOcclusionTexture = Od
              }
            },
            metadata: Od
          }, xK, BK), (0, Ud.h)(dd, null, WF, {
            kind: "accessor",
            name: "directIntensity",
            static: !1,
            private: !1,
            access: {
              has: dd => "directIntensity" in dd,
              get: dd => dd.directIntensity,
              set: (dd, Od) => {
                dd.directIntensity = Od
              }
            },
            metadata: Od
          }, SK, sK), (0, Ud.h)(dd, null, FF, {
            kind: "accessor",
            name: "environmentIntensity",
            static: !1,
            private: !1,
            access: {
              has: dd => "environmentIntensity" in dd,
              get: dd => dd.environmentIntensity,
              set: (dd, Od) => {
                dd.environmentIntensity = Od
              }
            },
            metadata: Od
          }, uK, VK), (0, Ud.h)(dd, null, RF, {
            kind: "accessor",
            name: "useSpecularWeightFromTextureAlpha",
            static: !1,
            private: !1,
            access: {
              has: dd => "useSpecularWeightFromTextureAlpha" in dd,
              get: dd => dd.useSpecularWeightFromTextureAlpha,
              set: (dd, Od) => {
                dd.useSpecularWeightFromTextureAlpha = Od
              }
            },
            metadata: Od
          }, iK, AK), (0, Ud.h)(dd, null, XF, {
            kind: "accessor",
            name: "forceAlphaTest",
            static: !1,
            private: !1,
            access: {
              has: dd => "forceAlphaTest" in dd,
              get: dd => dd.forceAlphaTest,
              set: (dd, Od) => {
                dd.forceAlphaTest = Od
              }
            },
            metadata: Od
          }, rK, GK), (0, Ud.h)(dd, null, KF, {
            kind: "accessor",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: dd => "alphaCutOff" in dd,
              get: dd => dd.alphaCutOff,
              set: (dd, Od) => {
                dd.alphaCutOff = Od
              }
            },
            metadata: Od
          }, nK, LK), (0, Ud.h)(dd, null, hF, {
            kind: "accessor",
            name: "useAmbientOcclusionFromMetallicTextureRed",
            static: !1,
            private: !1,
            access: {
              has: dd => "useAmbientOcclusionFromMetallicTextureRed" in dd,
              get: dd => dd.useAmbientOcclusionFromMetallicTextureRed,
              set: (dd, Od) => {
                dd.useAmbientOcclusionFromMetallicTextureRed = Od
              }
            },
            metadata: Od
          }, PK, zK), (0, Ud.h)(dd, null, vF, {
            kind: "accessor",
            name: "useAmbientInGrayScale",
            static: !1,
            private: !1,
            access: {
              has: dd => "useAmbientInGrayScale" in dd,
              get: dd => dd.useAmbientInGrayScale,
              set: (dd, Od) => {
                dd.useAmbientInGrayScale = Od
              }
            },
            metadata: Od
          }, cK, jK), (0, Ud.h)(dd, null, QF, {
            kind: "getter",
            name: "usePhysicalLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: dd => "usePhysicalLightFalloff" in dd,
              get: dd => dd.usePhysicalLightFalloff
            },
            metadata: Od
          }, null, AF), (0, Ud.h)(dd, null, tF, {
            kind: "getter",
            name: "useGLTFLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: dd => "useGLTFLightFalloff" in dd,
              get: dd => dd.useGLTFLightFalloff
            },
            metadata: Od
          }, null, AF), (0, Ud.h)(dd, null, oF, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: dd => "useObjectSpaceNormalMap" in dd,
              get: dd => dd.useObjectSpaceNormalMap,
              set: (dd, Od) => {
                dd.useObjectSpaceNormalMap = Od
              }
            },
            metadata: Od
          }, DK, eK), (0, Ud.h)(dd, null, NF, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: dd => "useParallax" in dd,
              get: dd => dd.useParallax,
              set: (dd, Od) => {
                dd.useParallax = Od
              }
            },
            metadata: Od
          }, IK, lK), (0, Ud.h)(dd, null, qF, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: dd => "useParallaxOcclusion" in dd,
              get: dd => dd.useParallaxOcclusion,
              set: (dd, Od) => {
                dd.useParallaxOcclusion = Od
              }
            },
            metadata: Od
          }, CK, ZK), (0, Ud.h)(dd, null, HF, {
            kind: "accessor",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: dd => "parallaxScaleBias" in dd,
              get: dd => dd.parallaxScaleBias,
              set: (dd, Od) => {
                dd.parallaxScaleBias = Od
              }
            },
            metadata: Od
          }, kK, fK), (0, Ud.h)(dd, null, yF, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: dd => "disableLighting" in dd,
              get: dd => dd.disableLighting,
              set: (dd, Od) => {
                dd.disableLighting = Od
              }
            },
            metadata: Od
          }, MK, dh), (0, Ud.h)(dd, null, bF, {
            kind: "accessor",
            name: "forceIrradianceInFragment",
            static: !1,
            private: !1,
            access: {
              has: dd => "forceIrradianceInFragment" in dd,
              get: dd => dd.forceIrradianceInFragment,
              set: (dd, Od) => {
                dd.forceIrradianceInFragment = Od
              }
            },
            metadata: Od
          }, Oh, mh), (0, Ud.h)(dd, null, TF, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: dd => "maxSimultaneousLights" in dd,
              get: dd => dd.maxSimultaneousLights,
              set: (dd, Od) => {
                dd.maxSimultaneousLights = Od
              }
            },
            metadata: Od
          }, Wh, Fh), (0, Ud.h)(dd, null, pF, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: dd => "invertNormalMapX" in dd,
              get: dd => dd.invertNormalMapX,
              set: (dd, Od) => {
                dd.invertNormalMapX = Od
              }
            },
            metadata: Od
          }, Rh, Xh), (0, Ud.h)(dd, null, YF, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: dd => "invertNormalMapY" in dd,
              get: dd => dd.invertNormalMapY,
              set: (dd, Od) => {
                dd.invertNormalMapY = Od
              }
            },
            metadata: Od
          }, Kh, hh), (0, Ud.h)(dd, null, gF, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: dd => "twoSidedLighting" in dd,
              get: dd => dd.twoSidedLighting,
              set: (dd, Od) => {
                dd.twoSidedLighting = Od
              }
            },
            metadata: Od
          }, vh, Qh), (0, Ud.h)(dd, null, wF, {
            kind: "accessor",
            name: "useAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: dd => "useAlphaFresnel" in dd,
              get: dd => dd.useAlphaFresnel,
              set: (dd, Od) => {
                dd.useAlphaFresnel = Od
              }
            },
            metadata: Od
          }, th, oh), (0, Ud.h)(dd, null, aF, {
            kind: "accessor",
            name: "useLinearAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: dd => "useLinearAlphaFresnel" in dd,
              get: dd => dd.useLinearAlphaFresnel,
              set: (dd, Od) => {
                dd.useLinearAlphaFresnel = Od
              }
            },
            metadata: Od
          }, Nh, qh), (0, Ud.h)(dd, null, EF, {
            kind: "accessor",
            name: "environmentBRDFTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "environmentBRDFTexture" in dd,
              get: dd => dd.environmentBRDFTexture,
              set: (dd, Od) => {
                dd.environmentBRDFTexture = Od
              }
            },
            metadata: Od
          }, Hh, yh), (0, Ud.h)(dd, null, JF, {
            kind: "accessor",
            name: "forceNormalForward",
            static: !1,
            private: !1,
            access: {
              has: dd => "forceNormalForward" in dd,
              get: dd => dd.forceNormalForward,
              set: (dd, Od) => {
                dd.forceNormalForward = Od
              }
            },
            metadata: Od
          }, bh, Th), (0, Ud.h)(dd, null, UF, {
            kind: "accessor",
            name: "enableSpecularAntiAliasing",
            static: !1,
            private: !1,
            access: {
              has: dd => "enableSpecularAntiAliasing" in dd,
              get: dd => dd.enableSpecularAntiAliasing,
              set: (dd, Od) => {
                dd.enableSpecularAntiAliasing = Od
              }
            },
            metadata: Od
          }, ph, Yh), (0, Ud.h)(dd, null, xF, {
            kind: "accessor",
            name: "useHorizonOcclusion",
            static: !1,
            private: !1,
            access: {
              has: dd => "useHorizonOcclusion" in dd,
              get: dd => dd.useHorizonOcclusion,
              set: (dd, Od) => {
                dd.useHorizonOcclusion = Od
              }
            },
            metadata: Od
          }, gh, wh), (0, Ud.h)(dd, null, BF, {
            kind: "accessor",
            name: "useRadianceOcclusion",
            static: !1,
            private: !1,
            access: {
              has: dd => "useRadianceOcclusion" in dd,
              get: dd => dd.useRadianceOcclusion,
              set: (dd, Od) => {
                dd.useRadianceOcclusion = Od
              }
            },
            metadata: Od
          }, ah, Eh), (0, Ud.h)(dd, null, SF, {
            kind: "accessor",
            name: "unlit",
            static: !1,
            private: !1,
            access: {
              has: dd => "unlit" in dd,
              get: dd => dd.unlit,
              set: (dd, Od) => {
                dd.unlit = Od
              }
            },
            metadata: Od
          }, Jh, Uh), (0, Ud.h)(dd, null, sF, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: dd => "applyDecalMapAfterDetailMap" in dd,
              get: dd => dd.applyDecalMapAfterDetailMap,
              set: (dd, Od) => {
                dd.applyDecalMapAfterDetailMap = Od
              }
            },
            metadata: Od
          }, xh, Bh), (0, Ud.h)(dd, null, uF, {
            kind: "accessor",
            name: "debugMode",
            static: !1,
            private: !1,
            access: {
              has: dd => "debugMode" in dd,
              get: dd => dd.debugMode,
              set: (dd, Od) => {
                dd.debugMode = Od
              }
            },
            metadata: Od
          }, Sh, sh), (0, Ud.h)(dd, null, VF, {
            kind: "getter",
            name: "transparencyMode",
            static: !1,
            private: !1,
            access: {
              has: dd => "transparencyMode" in dd,
              get: dd => dd.transparencyMode
            },
            metadata: Od
          }, null, AF), Od && Object.defineProperty(dd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Od
          })
        })(), dd.SSS_QUALITY_LOW = 0, dd.SSS_QUALITY_MEDIUM = 1, dd.SSS_QUALITY_HIGH = 2, dd._noiseTextures = {}, dd.ForceGLSL = !1, dd._ShaderLoader = new qO.b((() => [Promise.all([md.e(636), md.e(699)]).then((() => md(65217))), Promise.all([md.e(641), md.e(637), md.e(698), md.e(703)]).then((() => md(65228)))]), (() => [Promise.all([md.e(655), md.e(657), md.e(702)]).then((() => md(65268))), Promise.all([md.e(655), md.e(658), md.e(701), md.e(704)]).then((() => md(65282)))])), dd
      })(),
      Om = !1;
    Om || (Om = !0, (0, Zd.f)(), (0, jO.e)("BABYLON.OpenPBRMaterial", dm));
    var mm = md(38660);
    class Wm {
      constructor(dd) {
        this.name = rO.b.NAME_PROCEDURALTEXTURE, this.MH = dd
      }
      register() {
        this.MH._beforeClearStage.registerStep(rO.b.STEP_BEFORECLEAR_PROCEDURALTEXTURE, this, this._beforeClear)
      }
      rebuild() {}
      dispose() {}
      _beforeClear() {
        if (this.MH.proceduralTexturesEnabled) {
          UO.g.StartPerformanceCounter("Procedural textures", this.MH.proceduralTextures.length > 0);
          for (let dd = 0; dd < this.MH.proceduralTextures.length; dd++) {
            const Od = this.MH.proceduralTextures[dd];
            Od._shouldRender() && Od.render()
          }
          UO.g.EndPerformanceCounter("Procedural textures", this.MH.proceduralTextures.length > 0)
        }
      }
    }
    var Fm = md(42240);
    let Rm = (() => {
      var dd;
      let Od, Wd, Fd, Xd, Kd, hd = sd.f,
        vd = [],
        Qd = [],
        td = [],
        od = [],
        Nd = [],
        qd = [],
        yd = [],
        bd = [],
        Td = [];
      return dd = class extends hd {
        get shaderLanguage() {
          return this._shaderLanguage
        }
        constructor(dd, Od, md, Wd) {
          let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            Rd = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
            Xd = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
            Kd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          super(null, Wd, !Rd), this.isEnabled = ((0, Ud.k)(this, vd), (0, Ud.k)(this, Qd, !0)), this.autoClear = ((0, Ud.k)(this, td), (0, Ud.k)(this, od, !0)), this.onGenerated = (0, Ud.k)(this, Nd), this.onGeneratedObservable = new mm.c, this.onBeforeGenerationObservable = new mm.c, this.nodeMaterialSource = null, this.defines = "", this._generateMipMaps = (0, Ud.k)(this, qd, void 0), this._drawWrapper = (0, Ud.k)(this, yd), this._textures = {}, this._size = (0, Ud.k)(this, bd, void 0), this._textureType = (0, Ud.k)(this, Td), this._currentRefreshId = -1, this._frameId = -1, this._refreshRate = 1, this._vertexBuffers = {}, this._uniforms = new Array, this._samplers = new Array, this._floats = {}, this._ints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors4 = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._matrices = {}, this._fallbackTextureUsed = !1, this._cachedDefines = null, this._contentUpdateId = -1, this._rtWrapper = null, null === Fd || Fd instanceof sd.f ? (this._options = {}, this._fallbackTexture = Fd) : (this._options = Fd, this._fallbackTexture = Fd.fallbackTexture ?? null), this._shaderLanguage = this._options.shaderLanguage ?? 0;
          let hd = (Wd = this.zV() || Hd.e.LastCreatedScene)._getComponent(rO.b.NAME_PROCEDURALTEXTURE);
          hd || (hd = new Wm(Wd), Wd.yFd(hd)), this._options.skipSceneRegistration || Wd.proceduralTextures.push(this), this._fullEngine = Wd.Iq(), this.name = dd, this.isRenderTarget = !0, this._size = Od, this._textureType = Kd, this._generateMipMaps = Rd, this._drawWrapper = new Fm.b(this._fullEngine), this.setFragment(md);
          const pd = this._createRtWrapper(Xd, Od, Rd, Kd);
          this._texture = pd.texture;
          const Yd = [];
          Yd.push(1, 1), Yd.push(-1, 1), Yd.push(-1, -1), Yd.push(1, -1), this._vertexBuffers[zd.j.PositionKind] = new zd.j(this._fullEngine, Yd, zd.j.PositionKind, !1, !1, 2), this._createIndexBuffer()
        }
        _createRtWrapper(dd, Od, md, Wd) {
          return dd ? (this._rtWrapper = this._fullEngine.createRenderTargetCubeTexture(Od, {
            generateMipMaps: md,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: Wd,
            ...this._options
          }), this.setFloat("face", 0)) : (this._rtWrapper = this._fullEngine.createRenderTargetTexture(Od, {
            generateMipMaps: md,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: Wd,
            ...this._options
          }), this._rtWrapper.is3D && (this.setFloat("layer", 0), this.setInt("layerNum", 0))), this._rtWrapper
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        _setEffect(dd) {
          this._drawWrapper.effect = dd
        }
        getContent() {
          return this._contentData && this._frameId === this._contentUpdateId || (this._contentData ? this._contentData.then((dd => {
            this._contentData = this.readPixels(0, 0, dd), this._contentUpdateId = this._frameId
          })) : (this._contentData = this.readPixels(0, 0), this._contentUpdateId = this._frameId)), this._contentData
        }
        _createIndexBuffer() {
          const dd = this._fullEngine,
            Od = [];
          Od.push(0), Od.push(1), Od.push(2), Od.push(0), Od.push(2), Od.push(3), this._indexBuffer = dd.createIndexBuffer(Od)
        }
        _rebuild() {
          const dd = this._vertexBuffers[zd.j.PositionKind];
          dd && dd._rebuild(), this._createIndexBuffer(), this.refreshRate === xO.b.REFRESHRATE_RENDER_ONCE && (this.refreshRate = xO.b.REFRESHRATE_RENDER_ONCE)
        }
        reset() {
          this._drawWrapper.effect?.dispose(), this._drawWrapper.effect = null, this._cachedDefines = null
        }
        _getDefines() {
          return this.defines
        }
        executeWhenReady(dd) {
          if (this.isReady()) return void dd(this);
          const Od = this.getEffect();
          Od && Od.executeWhenCompiled((() => {
            dd(this)
          }))
        }
        isReady() {
          const dd = this._fullEngine;
          if (this.nodeMaterialSource) return this._drawWrapper.effect?.isReady() ?? !1;
          if (!this._fragment) return !1;
          if (this._fallbackTextureUsed) return !0;
          if (!this._texture) return !1;
          const Od = this._getDefines();
          if (this._drawWrapper.effect && Od === this._cachedDefines && this._drawWrapper.effect.isReady()) return !0;
          const Wd = {
            vertex: "procedural",
            fragmentElement: this._fragment.fragmentElement,
            fragmentSource: this._fragment.fragmentSource,
            fragment: "string" === typeof this._fragment ? this._fragment : void 0
          };
          return this._cachedDefines !== Od && (this._cachedDefines = Od, this._drawWrapper.effect = dd.createEffect(Wd, [zd.j.PositionKind], this._uniforms, this._samplers, Od, void 0, void 0, (() => {
            this._rtWrapper?.dispose(), this._rtWrapper = this._texture = null, this._fallbackTexture && (this._texture = this._fallbackTexture._texture, this._texture && this._texture.incrementReferences()), this._fallbackTextureUsed = !0
          }), void 0, this._shaderLanguage, (async () => {
            this._options.extraInitializationsAsync ? 1 === this.shaderLanguage ? await Promise.all([md.e(707).then((() => md(65347))), this._options.extraInitializationsAsync()]) : await Promise.all([md.e(708).then((() => md(65353))), this._options.extraInitializationsAsync()]) : 1 === this.shaderLanguage ? await md.e(707).then((() => md(65347))) : await md.e(708).then((() => md(65353)))
          }))), this._drawWrapper.effect.isReady()
        }
        resetRefreshCounter() {
          this._currentRefreshId = -1
        }
        setFragment(dd) {
          this._fragment = dd
        }
        get refreshRate() {
          return this._refreshRate
        }
        set refreshRate(dd) {
          this._refreshRate = dd, this.resetRefreshCounter()
        }
        _shouldRender() {
          return this.isEnabled && this.isReady() && this._texture ? !this._fallbackTextureUsed && (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, this._frameId++, !0) : (this._currentRefreshId++, !1)) : (this._texture && (this._texture.isReady = !1), !1)
        }
        getRenderSize() {
          return this._size
        }
        resize(dd, Od) {
          if (this._fallbackTextureUsed || !this._rtWrapper || !this._texture) return;
          const md = this._texture.isCube;
          this._rtWrapper.dispose();
          const Wd = this._createRtWrapper(md, dd, Od, this._textureType);
          this._texture = Wd.texture, this._size = dd, this._generateMipMaps = Od
        }
        _checkUniform(dd) {
          -1 === this._uniforms.indexOf(dd) && this._uniforms.push(dd)
        }
        setTexture(dd, Od) {
          return -1 === this._samplers.indexOf(dd) && this._samplers.push(dd), this._textures[dd] = Od, this
        }
        setFloat(dd, Od) {
          return this._checkUniform(dd), this._floats[dd] = Od, this
        }
        setInt(dd, Od) {
          return this._checkUniform(dd), this._ints[dd] = Od, this
        }
        setFloats(dd, Od) {
          return this._checkUniform(dd), this._floatsArrays[dd] = Od, this
        }
        setColor3(dd, Od) {
          return this._checkUniform(dd), this._colors3[dd] = Od, this
        }
        setColor4(dd, Od) {
          return this._checkUniform(dd), this._colors4[dd] = Od, this
        }
        setVector2(dd, Od) {
          return this._checkUniform(dd), this._vectors2[dd] = Od, this
        }
        setVector3(dd, Od) {
          return this._checkUniform(dd), this._vectors3[dd] = Od, this
        }
        setVector4(dd, Od) {
          return this._checkUniform(dd), this._vectors4[dd] = Od, this
        }
        setMatrix(dd, Od) {
          return this._checkUniform(dd), this._matrices[dd] = Od, this
        }
        render(dd) {
          const Od = this.zV();
          if (!Od) return;
          const md = this._fullEngine;
          if (md.enableEffect(this._drawWrapper), this.onBeforeGenerationObservable.notifyObservers(this), md.setState(!1), !this.nodeMaterialSource) {
            for (const dd in this._textures) this._drawWrapper.effect.setTexture(dd, this._textures[dd]);
            for (const dd in this._ints) this._drawWrapper.effect.setInt(dd, this._ints[dd]);
            for (const dd in this._floats) this._drawWrapper.effect.setFloat(dd, this._floats[dd]);
            for (const dd in this._floatsArrays) this._drawWrapper.effect.setArray(dd, this._floatsArrays[dd]);
            for (const dd in this._colors3) this._drawWrapper.effect.setColor3(dd, this._colors3[dd]);
            for (const dd in this._colors4) {
              const Od = this._colors4[dd];
              this._drawWrapper.effect.setFloat4(dd, Od.r, Od.g, Od.b, Od.a)
            }
            for (const dd in this._vectors2) this._drawWrapper.effect.setVector2(dd, this._vectors2[dd]);
            for (const dd in this._vectors3) this._drawWrapper.effect.setVector3(dd, this._vectors3[dd]);
            for (const dd in this._vectors4) this._drawWrapper.effect.setVector4(dd, this._vectors4[dd]);
            for (const dd in this._matrices) this._drawWrapper.effect.setMatrix(dd, this._matrices[dd])
          }
          if (!this._texture || !this._rtWrapper) return;
          md._enableGPUDebugMarkers && md._debugPushGroup?.(`procedural texture generation for ${this.name}`);
          const Wd = md.currentViewport;
          if (this.isCube)
            for (let Fd = 0; Fd < 6; Fd++) md.bindFramebuffer(this._rtWrapper, Fd, void 0, void 0, !0), md.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._drawWrapper.effect.setFloat("face", Fd), this.autoClear && md.clear(Od.clearColor, !0, !1, !1), md.drawElementsType(Rd.b.TriangleFillMode, 0, 6), md.unBindFramebuffer(this._rtWrapper, !0);
          else {
            let dd = 1;
            this._rtWrapper.is3D ? dd = this._rtWrapper.depth : this._rtWrapper.is2DArray && (dd = this._rtWrapper.layers);
            for (let Wd = 0; Wd < dd; Wd++) {
              if (md.bindFramebuffer(this._rtWrapper, 0, void 0, void 0, !0, 0, Wd), md.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._rtWrapper.is3D || this._rtWrapper.is2DArray) {
                this._drawWrapper.effect?.setFloat("layer", 1 !== dd ? Wd / (dd - 1) : 0), this._drawWrapper.effect?.setInt("layerNum", Wd);
                for (const dd in this._textures) this._drawWrapper.effect.setTexture(dd, this._textures[dd])
              }
              this.autoClear && md.clear(Od.clearColor, !0, !1, !1), md.drawElementsType(Rd.b.TriangleFillMode, 0, 6), md.unBindFramebuffer(this._rtWrapper, !this._generateMipMaps)
            }
          }
          Wd && md.setViewport(Wd), this.isCube && md.generateMipMapsForCubemap(this._texture, !0), md._enableGPUDebugMarkers && md._debugPopGroup?.(), this.onGenerated && this.onGenerated(), this.onGeneratedObservable.notifyObservers(this)
        }
        clone() {
          const Od = this.getSize(),
            md = new dd(this.name, Od.width, this._fragment, this.zV(), this._fallbackTexture, this._generateMipMaps);
          return md.hasAlpha = this.hasAlpha, md.level = this.level, md.coordinatesMode = this.coordinatesMode, md
        }
        dispose() {
          const dd = this.zV();
          if (!dd) return;
          const Od = dd.proceduralTextures.indexOf(this);
          Od >= 0 && dd.proceduralTextures.splice(Od, 1);
          const md = this._vertexBuffers[zd.j.PositionKind];
          md && (md.dispose(), this._vertexBuffers[zd.j.PositionKind] = null), this._indexBuffer && this._fullEngine._releaseBuffer(this._indexBuffer) && (this._indexBuffer = null), this.onGeneratedObservable.clear(), this.onBeforeGenerationObservable.clear(), super.dispose()
        }
      }, (() => {
        const md = "function" === typeof Symbol && Symbol.metadata ? Object.create(hd[Symbol.metadata] ?? null) : void 0;
        Od = [(0, xd.E)()], Wd = [(0, xd.E)()], Fd = [(0, xd.E)()], Xd = [(0, xd.E)()], Kd = [(0, xd.E)()], (0, Ud.h)(dd, null, Kd, {
          kind: "getter",
          name: "refreshRate",
          static: !1,
          private: !1,
          access: {
            has: dd => "refreshRate" in dd,
            get: dd => dd.refreshRate
          },
          metadata: md
        }, null, vd), (0, Ud.h)(null, null, Od, {
          kind: "field",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: dd => "isEnabled" in dd,
            get: dd => dd.isEnabled,
            set: (dd, Od) => {
              dd.isEnabled = Od
            }
          },
          metadata: md
        }, Qd, td), (0, Ud.h)(null, null, Wd, {
          kind: "field",
          name: "autoClear",
          static: !1,
          private: !1,
          access: {
            has: dd => "autoClear" in dd,
            get: dd => dd.autoClear,
            set: (dd, Od) => {
              dd.autoClear = Od
            }
          },
          metadata: md
        }, od, Nd), (0, Ud.h)(null, null, Fd, {
          kind: "field",
          name: "_generateMipMaps",
          static: !1,
          private: !1,
          access: {
            has: dd => "_generateMipMaps" in dd,
            get: dd => dd._generateMipMaps,
            set: (dd, Od) => {
              dd._generateMipMaps = Od
            }
          },
          metadata: md
        }, qd, yd), (0, Ud.h)(null, null, Xd, {
          kind: "field",
          name: "_size",
          static: !1,
          private: !1,
          access: {
            has: dd => "_size" in dd,
            get: dd => dd._size,
            set: (dd, Od) => {
              dd._size = Od
            }
          },
          metadata: md
        }, bd, Td), md && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: md
        })
      })(), dd
    })();

    function Xm(dd) {
      return "texture" in dd
    }

    function Km(dd) {
      return "value" in dd
    }
    async function hm(dd, Od, Wd) {
      const Fd = [Od.red, Od.green, Od.blue, Od.alpha],
        Rd = [],
        Xd = [];
      for (let md = 0; md < 4; md++) {
        const dd = Fd[md];
        if (dd)
          if (Xm(dd)) {
            if (dd.sourceChannel < 0 || dd.sourceChannel > 3) throw new Error("Source channel must be between 0 and 3 (R, G, B, A)");
            let Od = Rd.indexOf(dd.texture); - 1 === Od && (Od = Rd.length, Rd.push(dd.texture)), Xd[md] = Od
          } else {
            if (!Km(dd)) throw new Error("Invalid channel input configuration");
            if (dd.value < 0 || dd.value > 1) throw new Error("Constant value must be between 0.0 and 1.0");
            Xd[md] = -1
          }
        else Xd[md] = -1
      }
      let Kd = Od.outputSize;
      if (!Kd && Rd.length > 0) {
        let dd = 0;
        for (const Od of Rd) {
          const md = Od.getSize(),
            Wd = Math.max(md.width, md.height);
          Wd > dd && (dd = Wd, Kd = md.width === md.height ? dd : md)
        }
      }
      Kd = Kd || 512;
      const hd = [],
        vd = new Set;
      for (let md = 0; md < 4; md++) {
        const dd = Fd[md],
          Od = ["RED", "GREEN", "BLUE", "ALPHA"][md];
        if (dd && Xm(dd)) {
          hd.push(`${Od}_FROM_TEXTURE`);
          const dd = Xd[md];
          vd.add(dd)
        }
      }
      vd.forEach((dd => {
        hd.push(`USE_TEXTURE${dd}`)
      }));
      const Qd = {
          type: 2,
          format: 5,
          samplingMode: 1,
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          shaderLanguage: Wd.Iq().isWebGPU ? 1 : 0,
          extraInitializationsAsync: async () => {
            Wd.Iq().isWebGPU ? await Promise.all([md.e(705).then((() => md(65338)))]) : await Promise.all([md.e(706).then((() => md(65342)))])
          },
          skipSceneRegistration: !0
        },
        td = new Rm(dd, Kd, "textureMerger", Wd, Qd);
      td.refreshRate = -1, td.defines = hd.length > 0 ? "#define " + hd.join("\n#define ") + "\n" : "";
      for (let md = 0; md < Rd.length; md++) od = Rd[md], (Nd = td).uOffset = od.uOffset, Nd.vOffset = od.vOffset, Nd.uScale = od.uScale, Nd.vScale = od.vScale, Nd.uAng = od.uAng, Nd.vAng = od.vAng, Nd.wAng = od.wAng, Nd.uRotationCenter = od.uRotationCenter, Nd.vRotationCenter = od.vRotationCenter, td.setTexture(`inputTexture${md}`, Rd[md]);
      var od, Nd;
      for (let md = 0; md < 4; md++) {
        const dd = Fd[md],
          Od = ["red", "green", "blue", "alpha"][md];
        if (dd && Xm(dd)) {
          const Wd = Xd[md];
          td.setInt(`${Od}TextureIndex`, Wd), td.setInt(`${Od}SourceChannel`, dd.sourceChannel)
        } else {
          let Wd;
          Wd = dd && Km(dd) ? dd.value : 3 === md ? 1 : 0, td.setFloat(`${Od}ConstantValue`, Wd)
        }
      }
      return await new Promise(((dd, Od) => {
        td.executeWhenReady((() => {
          try {
            td.render(), dd(td)
          } catch (md) {
            Od(md instanceof Error ? md : new Error(String(md)))
          }
        }))
      }))
    }

    function Qm(dd, Od) {
      return {
        texture: dd,
        sourceChannel: Od
      }
    }

    function tm(dd) {
      return {
        value: dd
      }
    }

    function om(dd, Od, md, Wd) {
      return {
        red: dd,
        green: Od,
        blue: md,
        alpha: Wd
      }
    }
    var Nm = md(41759),
      qm = md(41856),
      Hm = md(38649),
      ym = md(41905),
      bm = md(41852);
    class Tm {
      constructor() {
        this.renderWidth = 512, this.renderHeight = 256, this.textureSize = 512, this.deterministicLockstep = !1, this.lockstepMaxSteps = 4
      }
    }
    class pm extends Nm.c {
      isDeterministicLockStep() {
        return this._options.deterministicLockstep
      }
      getLockstepMaxSteps() {
        return this._options.lockstepMaxSteps
      }
      getHardwareScalingLevel() {
        return 1
      }
      get supportsUniformBuffers() {
        return !!this._options?.enableMultiview || this.YH > 1 && !this.disableUniformBuffers
      }
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Tm;
        super(null), void 0 === dd.deterministicLockstep && (dd.deterministicLockstep = !1), void 0 !== dd.timeStep && (this._timeStep = dd.timeStep), void 0 === dd.lockstepMaxSteps && (dd.lockstepMaxSteps = 4), this._options = dd, Hm.b.SetMatrixPrecision(!!dd.useHighPrecisionMatrix), this._caps = {
          maxTexturesImageUnits: 16,
          maxVertexTextureImageUnits: 16,
          maxCombinedTexturesImageUnits: 32,
          maxTextureSize: 512,
          maxCubemapTextureSize: 512,
          maxDrawBuffers: 0,
          maxRenderTextureSize: 512,
          maxVertexAttribs: 16,
          maxVaryingVectors: 16,
          maxFragmentUniformVectors: 16,
          maxVertexUniformVectors: 16,
          shaderFloatPrecision: 10,
          standardDerivatives: !1,
          astc: null,
          pvrtc: null,
          etc1: null,
          etc2: null,
          bptc: null,
          maxAnisotropy: 0,
          uintIndices: !1,
          fragmentDepthSupported: !1,
          highPrecisionShaderSupported: !0,
          colorBufferFloat: !1,
          blendFloat: !1,
          supportFloatTexturesResolve: !1,
          rg11b10ufColorRenderable: !1,
          textureFloat: !1,
          textureFloatLinearFiltering: !1,
          textureFloatRender: !1,
          textureHalfFloat: !1,
          textureHalfFloatLinearFiltering: !1,
          textureHalfFloatRender: !1,
          textureLOD: !1,
          texelFetch: !1,
          drawBuffersExtension: !1,
          depthTextureExtension: !1,
          vertexArrayObject: !1,
          instancedArrays: !1,
          supportOcclusionQuery: !1,
          canUseTimestampForTimerQuery: !1,
          maxMSAASamples: 1,
          blendMinMax: !1,
          canUseGLInstanceID: !1,
          canUseGLVertexID: !1,
          supportComputeShaders: !1,
          supportSRGBBuffers: !1,
          supportTransformFeedbacks: !1,
          textureMaxLevel: !1,
          texture2DArrayMaxLayerCount: 128,
          disableMorphTargetTexture: !1,
          textureNorm16: !1,
          blendParametersPerTarget: !1,
          dualSourceBlending: !1,
          supportReadWriteStorageTextures: !1
        }, dd.enableMultiview && (this._caps.multiview = {
          framebufferTextureMultiviewOVR: () => {}
        }), this._features = {
          forceBitmapOverHTMLImageElement: !1,
          supportRenderAndCopyToLodForFloatTextures: !1,
          supportDepthStencilTexture: !1,
          supportShadowSamplers: !1,
          uniformBufferHardCheckMatrix: !1,
          allowTexturePrefiltering: !1,
          trackUbosInFrame: !1,
          checkUbosContentBeforeUpload: !1,
          supportCSM: !1,
          basisNeedsPOT: !1,
          support3DTextures: !1,
          needTypeSuffixInShaderConstants: !1,
          supportMSAA: !1,
          supportSSAO2: !1,
          supportIBLShadows: !1,
          supportExtendedTextureFormats: !1,
          supportSwitchCaseInShader: !1,
          supportSyncTextureRead: !1,
          needsInvertingBitmap: !1,
          useUBOBindingCache: !1,
          needShaderCodeInlining: !1,
          needToAlwaysBindUniformBuffers: !1,
          supportRenderPasses: !0,
          supportSpriteInstancing: !1,
          forceVertexBufferStrideAndOffsetMultiple4Bytes: !1,
          _checkNonFloatVertexBuffersDontRecreatePipelineContext: !1
        }, dd.renderingCanvas && (this._renderingCanvas = dd.renderingCanvas), Bd.c.Log(`Babylon.js v${Nm.c.Version} - Null engine`);
        const Od = "undefined" !== typeof self ? self : "undefined" !== typeof global ? global : window;
        "undefined" === typeof URL && (Od.URL = {
          createObjectURL: function() {},
          revokeObjectURL: function() {}
        }), "undefined" === typeof Blob && (Od.Blob = function() {})
      }
      createVertexBuffer(dd) {
        const Od = new qm.c;
        return Od.references = 1, Od
      }
      createIndexBuffer(dd) {
        const Od = new qm.c;
        return Od.references = 1, Od
      }
      clear(dd, Od, md) {}
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._options.renderWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._options.renderHeight
      }
      setViewport(dd, Od, md) {
        this._cachedViewport = dd
      }
      createUniformBuffer(dd) {
        const Od = new qm.c;
        return Od.references = 1, Od.Mt = dd instanceof Array ? dd.length * Float32Array.BYTES_PER_ELEMENT : dd.byteLength, Od
      }
      createDynamicUniformBuffer(dd) {
        return this.createUniformBuffer(dd)
      }
      updateUniformBuffer(dd, Od, md, Wd) {}
      bindUniformBufferBase(dd, Od, md) {}
      bindUniformBlock(dd, Od, md) {}
      createShaderProgram(dd, Od, md, Wd, Fd) {
        return {
          __SPECTOR_rebuildProgram: null
        }
      }
      getUniforms(dd, Od) {
        return []
      }
      getAttributes(dd, Od) {
        return []
      }
      bindSamplers(dd) {
        this._currentEffect = null
      }
      enableEffect(dd) {
        dd = null !== dd && (0, bm.c)(dd) ? dd.effect : dd, this._currentEffect = dd, dd && (dd.onBind && dd.onBind(dd), dd._onBindObservable && dd._onBindObservable.notifyObservers(dd))
      }
      setStateCullFaceType(dd, Od) {}
      setState(dd) {}
      setIntArray(dd, Od) {
        return !0
      }
      setIntArray2(dd, Od) {
        return !0
      }
      setIntArray3(dd, Od) {
        return !0
      }
      setIntArray4(dd, Od) {
        return !0
      }
      setFloatArray(dd, Od) {
        return !0
      }
      setFloatArray2(dd, Od) {
        return !0
      }
      setFloatArray3(dd, Od) {
        return !0
      }
      setFloatArray4(dd, Od) {
        return !0
      }
      setArray(dd, Od) {
        return !0
      }
      setArray2(dd, Od) {
        return !0
      }
      setArray3(dd, Od) {
        return !0
      }
      setArray4(dd, Od) {
        return !0
      }
      setMatrices(dd, Od) {
        return !0
      }
      setMatrix3x3(dd, Od) {
        return !0
      }
      setMatrix2x2(dd, Od) {
        return !0
      }
      setFloat(dd, Od) {
        return !0
      }
      setFloat2(dd, Od, md) {
        return !0
      }
      setFloat3(dd, Od, md, Wd) {
        return !0
      }
      setBool(dd, Od) {
        return !0
      }
      setFloat4(dd, Od, md, Wd, Fd) {
        return !0
      }
      setAlphaMode(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._alphaMode[md] !== dd && (this.alphaState.setAlphaBlend(0 !== dd, 0), Od || this.setDepthWrite(0 === dd), this._alphaMode[md] = dd)
      }
      bindBuffers(dd, Od, md) {}
      wipeCaches(dd) {
        this.preventCacheWipeBetweenFrames || (this.resetTextureCache(), this._currentEffect = null, dd && (this._currentProgram = null, this._stencilStateComposer.reset(), this.depthCullingState.reset(), this.alphaState.reset()), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null)
      }
      draw(dd, Od, md, Wd) {}
      drawElementsType(dd, Od, md, Wd) {}
      drawArraysType(dd, Od, md, Wd) {}
      _createTexture() {
        return {}
      }
      _releaseTexture(dd) {}
      createTexture(dd, Od, md, Wd) {
        let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          Rd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Xd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Kd = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
        const hd = new BO.c(this, 1),
          vd = String(dd);
        return hd.url = vd, hd.generateMipMaps = !Od, hd.samplingMode = Fd, hd.invertY = md, hd.baseWidth = this._options.textureSize, hd.baseHeight = this._options.textureSize, hd.width = this._options.textureSize, hd.height = this._options.textureSize, Kd && (hd.format = Kd), Xd && (hd._buffer = Xd), hd.isReady = !0, Rd && setTimeout((() => {
          Rd(hd)
        })), this._internalTexturesCache.push(hd), hd
      }
      _createHardwareRenderTargetWrapper(dd, Od, md) {
        const Wd = new ym.d(dd, Od, md, this);
        return this._renderTargetWrapperCache.push(Wd), Wd
      }
      createRenderTargetTexture(dd, Od) {
        const md = this._createHardwareRenderTargetWrapper(!1, !1, dd),
          Wd = {};
        void 0 !== Od && "object" === typeof Od ? (Wd.generateMipMaps = Od.generateMipMaps, Wd.generateDepthBuffer = void 0 === Od.generateDepthBuffer || Od.generateDepthBuffer, Wd.generateStencilBuffer = Wd.generateDepthBuffer && Od.generateStencilBuffer, Wd.type = void 0 === Od.type ? 0 : Od.type, Wd.samplingMode = void 0 === Od.samplingMode ? 3 : Od.samplingMode) : (Wd.generateMipMaps = Od, Wd.generateDepthBuffer = !0, Wd.generateStencilBuffer = !1, Wd.type = 0, Wd.samplingMode = 3);
        const Fd = new BO.c(this, 5);
        md.setTexture(Fd);
        const Rd = dd.width || dd,
          Xd = dd.height || dd;
        return md._generateDepthBuffer = Wd.generateDepthBuffer, md._generateStencilBuffer = !!Wd.generateStencilBuffer, Fd.baseWidth = Rd, Fd.baseHeight = Xd, Fd.width = Rd, Fd.height = Xd, Fd.isReady = !0, Fd.samples = 1, Fd.generateMipMaps = !!Wd.generateMipMaps, Fd.samplingMode = Wd.samplingMode, Fd.type = Wd.type, this._internalTexturesCache.push(Fd), md
      }
      createMultiviewRenderTargetTexture(dd, Od) {
        if (!this.getCaps().multiview) throw new Error("Multiview is not supported");
        const md = this._createHardwareRenderTargetWrapper(!1, !1, {
            width: dd,
            height: Od
          }),
          Wd = new BO.c(this, 5, !0);
        return Wd.baseWidth = dd, Wd.baseHeight = Od, Wd.width = dd, Wd.height = Od, Wd.isMultiview = !0, Wd.isReady = !0, Wd.format = 5, Wd.samples = 1, md.setTextures(Wd), md
      }
      bindMultiviewFramebuffer(dd) {
        this.bindFramebuffer(dd, void 0, void 0, void 0, !0)
      }
      createRenderTargetCubeTexture(dd, Od) {
        const md = this._createHardwareRenderTargetWrapper(!1, !0, dd),
          Wd = {
            generateMipMaps: !0,
            generateDepthBuffer: !0,
            generateStencilBuffer: !1,
            type: 0,
            samplingMode: 3,
            format: 5,
            ...Od
          };
        Wd.generateStencilBuffer = Wd.generateDepthBuffer && Wd.generateStencilBuffer, (1 !== Wd.type || this._caps.textureFloatLinearFiltering) && (2 !== Wd.type || this._caps.textureHalfFloatLinearFiltering) || (Wd.samplingMode = 1), md._generateDepthBuffer = Wd.generateDepthBuffer, md._generateStencilBuffer = !!Wd.generateStencilBuffer;
        const Fd = new BO.c(this, 5);
        return Fd.baseWidth = dd, Fd.baseHeight = dd, Fd.width = dd, Fd.height = dd, Fd.isReady = !0, Fd.isCube = !0, Fd.samples = 1, Fd.generateMipMaps = !!Wd.generateMipMaps, Fd.samplingMode = Wd.samplingMode, Fd.type = Wd.type, this._internalTexturesCache.push(Fd), md
      }
      updateTextureSamplingMode(dd, Od) {
        Od.samplingMode = dd
      }
      createRawTexture(dd, Od, md, Wd, Fd, Rd, Xd) {
        let Kd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          hd = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          vd = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const Qd = new BO.c(this, 3);
        return Qd.baseWidth = Od, Qd.baseHeight = md, Qd.width = Od, Qd.height = md, Qd.format = Wd, Qd.generateMipMaps = Fd, Qd.samplingMode = Xd, Qd.invertY = Rd, Qd._compression = Kd, Qd.type = hd, Qd._useSRGBBuffer = vd, this._doNotHandleContextLost || (Qd._bufferView = dd), Qd
      }
      updateRawTexture(dd, Od, md, Wd) {
        let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          Rd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Xd = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        dd && (dd._bufferView = Od, dd.format = md, dd.invertY = Wd, dd._compression = Fd, dd.type = Rd, dd._useSRGBBuffer = Xd)
      }
      bindFramebuffer(dd, Od, md, Wd, Fd) {
        this._currentRenderTarget && this.unBindFramebuffer(this._currentRenderTarget), this._currentRenderTarget = dd, this._currentFramebuffer = null, this._cachedViewport && !Fd && this.setViewport(this._cachedViewport, md, Wd)
      }
      unBindFramebuffer(dd) {
        let Od = arguments.length > 2 ? arguments[2] : void 0;
        this._currentRenderTarget = null, Od && Od(), this._currentFramebuffer = null
      }
      createDynamicVertexBuffer(dd) {
        const Od = new qm.c;
        return Od.references = 1, Od.Mt = 1, Od
      }
      updateDynamicTexture(dd, Od, md) {}
      areAllEffectsReady() {
        return !0
      }
      getError() {
        return 0
      }
      _getUnpackAlignement() {
        return 1
      }
      _unpackFlipY(dd) {}
      updateDynamicIndexBuffer(dd, Od) {}
      updateDynamicVertexBuffer(dd, Od, md, Wd) {}
      _bindTextureDirectly(dd, Od) {
        return this._boundTexturesCache[this._activeChannel] !== Od && (this._boundTexturesCache[this._activeChannel] = Od, !0)
      }
      _bindTexture(dd, Od) {
        dd < 0 || this._bindTextureDirectly(0, Od)
      }
      _deleteBuffer(dd) {}
      releaseEffects() {}
      displayLoadingUI() {}
      hideLoadingUI() {}
      set loadingUIText(dd) {}
      flushFramebuffer() {}
      _uploadCompressedDataToTextureDirectly(dd, Od, md, Wd, Fd) {}
      _uploadDataToTextureDirectly(dd, Od) {}
      _uploadArrayBufferViewToTexture(dd, Od) {}
      _uploadImageToTexture(dd, Od) {}
    }
    md(41957), md(42004), md(41954);
    async function Ym(dd) {
      const Od = dd.getInternalTexture();
      if (!Od || 1 !== Od.source) return null;
      if (Od.invertY) {
        const Od = dd.zV()?.Iq();
        if (!(Od instanceof pm)) return null
      }
      const md = Od._buffer;
      let Wd, Rd = dd.mimeType;
      try {
        md ? ArrayBuffer.isView(md) ? Wd = md.buffer.slice(md.byteOffset, md.byteOffset + md.byteLength) : md instanceof ArrayBuffer ? Wd = md : md instanceof Blob ? (Wd = await md.arrayBuffer(), Rd = md.type || Rd) : "string" === typeof md ? (Wd = await Fd.Tools.LoadFileAsync(md), Rd = (0, hd.c)(md) || Rd) : "undefined" !== typeof HTMLImageElement && md instanceof HTMLImageElement && (Wd = await Fd.Tools.LoadFileAsync(md.src), Rd = (0, hd.c)(md.src) || Rd) : (Wd = await Fd.Tools.LoadFileAsync(Od.url), Rd = (0, hd.c)(Od.url) || Rd)
      } catch {
        return null
      }
      if (Wd && !Rd && Od.url) {
        const dd = Od.url.match(/^data:([^;,]+)/);
        Rd = dd ? dd[1] : (0, hd.c)(Od.url)
      }
      return Wd && Rd ? {
        data: Wd,
        mimeType: Rd
      } : null
    }
    const gm = 1e-6,
      wm = new yd.Color3(.04, .04, .04),
      am = 1024,
      Em = yd.Color3.White(),
      Jm = yd.Color3.BlackReadOnly;

    function Um(dd) {
      switch (dd) {
        case "image/jpeg":
        case "image/png":
        case "image/webp":
        case "image/avif":
        case "image/ktx2":
          return !0;
        default:
          return !1
      }
    }

    function xm(dd, Od, md) {
      if (Od < wm.r) return 0;
      const Wd = wm.r,
        Fd = dd * md / (1 - wm.r) + Od - 2 * wm.r,
        Rd = Fd * Fd - 4 * Wd * (wm.r - Od);
      return pd.Clamp((-Fd + Math.sqrt(Rd)) / (2 * Wd), 0, 1)
    }

    function Bm(dd) {
      const Od = dd.diffuseColor.toLinearSpace(dd.zV().Iq().useExactSrgbConversions).scale(.5),
        md = dd.alpha,
        Wd = function(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Pd.i(0, 1),
            md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Pd.i(0, .1),
            Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Pd.i(0, .1),
            Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Pd.i(1300, .1);
          return function(dd, Od, md, Wd, Fd) {
            return (1 - dd) * (1 - dd) * (1 - dd) * Od + 3 * (1 - dd) * (1 - dd) * dd * md + 3 * (1 - dd) * dd * dd * Wd + dd * dd * dd * Fd
          }(Math.pow(dd / Fd.x, .333333), Od.y, md.y, Wd.y, Fd.y)
        }(pd.Clamp(dd.specularPower, 0, am));
      return {
        baseColorFactor: [Od.r, Od.g, Od.b, md],
        metallicFactor: 0,
        roughnessFactor: Wd
      }
    }

    function Sm(dd, Od) {
      Od.needAlphaBlending() ? dd.alphaMode = "BLEND" : Od.needAlphaTesting() && (dd.alphaMode = "MASK", dd.alphaCutoff = Od.alphaCutOff)
    }

    function sm(dd, Od, md) {
      const Wd = new Uint8Array(dd * Od * 4);
      for (let Fd = 0; Fd < Wd.length; Fd += 4) Wd[Fd] = Wd[Fd + 1] = Wd[Fd + 2] = Wd[Fd + 3] = 255;
      return wd.e.CreateRGBATexture(Wd, dd, Od, md)
    }

    function um(dd) {
      if (dd instanceof Uint8Array) {
        const Od = dd.length,
          md = new Float32Array(dd.length);
        for (let Wd = 0; Wd < Od; ++Wd) md[Wd] = dd[Wd] / 255;
        return md
      }
      if (dd instanceof Float32Array) return dd;
      throw new Error("Unsupported pixel format!")
    }
    class Vm {
      constructor(dd) {
        this._exporter = dd, this._textureMap = new Map, this._internalTextureToImage = {}
      }
      getTextureInfo(dd) {
        return dd ? this._textureMap.get(dd.uniqueId) ?? null : null
      }
      async exportStandardMaterialAsync(dd, Od) {
        const md = Bm(dd),
          Wd = {
            name: dd.name
          };
        if (null == dd.backFaceCulling || dd.backFaceCulling || (dd.twoSidedLighting || Fd.Tools.Warn(dd.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), Wd.doubleSided = !0), Od) {
          const Od = [],
            Fd = dd.diffuseTexture;
          Fd && Od.push(this.exportTextureAsync(Fd).then((dd => {
            dd && (md.baseColorTexture = dd)
          })));
          const Rd = dd.bumpTexture;
          Rd && Od.push(this.exportTextureAsync(Rd).then((dd => {
            dd && (Wd.normalTexture = dd, 1 !== Rd.level && (Wd.normalTexture.scale = Rd.level))
          })));
          const Xd = dd.emissiveTexture;
          Xd && (Wd.emissiveFactor = [1, 1, 1], Od.push(this.exportTextureAsync(Xd).then((dd => {
            dd && (Wd.emissiveTexture = dd)
          }))));
          const Kd = dd.ambientTexture;
          Kd && Od.push(this.exportTextureAsync(Kd).then((dd => {
            if (dd) {
              const Od = {
                index: dd.index
              };
              Wd.occlusionTexture = Od
            }
          }))), Od.length > 0 && (this._exporter._materialNeedsUVsSet.add(dd), await Promise.all(Od))
        }(dd.alpha < 1 || dd.opacityTexture) && (dd.alphaMode === Ed.b.ALPHA_COMBINE ? Wd.alphaMode = "BLEND" : Fd.Tools.Warn(dd.name + ": glTF 2.0 does not support alpha mode: " + dd.alphaMode.toString())), dd.emissiveColor && !dd.emissiveColor.equalsWithEpsilon(Jm, gm) && (Wd.emissiveFactor = dd.emissiveColor.RRd()), Wd.pbrMetallicRoughness = md, Sm(Wd, dd), await this._finishMaterialAsync(Wd, dd);
        const Rd = this._exporter._materials;
        return Rd.push(Wd), Rd.length - 1
      }
      async _finishMaterialAsync(dd, Od) {
        const md = await this._exporter._extensionsPostExportMaterialAdditionalTexturesAsync("exportMaterial", dd, Od),
          Wd = [];
        for (const Fd of md) Wd.push(this.exportTextureAsync(Fd));
        await Promise.all(Wd), await this._exporter._extensionsPostExportMaterialAsync("exportMaterial", dd, Od)
      }
      _resizeTexturesToSameDimensions(dd, Od, md) {
        const Wd = dd ? dd.getSize() : {
            width: 0,
            height: 0
          },
          Fd = Od ? Od.getSize() : {
            width: 0,
            height: 0
          };
        let Rd, Xd;
        return Wd.width < Fd.width ? (Rd = dd && dd instanceof gd.b ? Yd.l.CreateResizedCopy(dd, Fd.width, Fd.height, !0) : sm(Fd.width, Fd.height, md), Xd = Od) : Wd.width > Fd.width ? (Xd = Od && Od instanceof gd.b ? Yd.l.CreateResizedCopy(Od, Wd.width, Wd.height, !0) : sm(Wd.width, Wd.height, md), Rd = dd) : (Rd = dd, Xd = Od), {
          texture1: Rd,
          texture2: Xd
        }
      }
      async _convertSpecularGlossinessTexturesToMetallicRoughnessAsync(dd, Od, md) {
        const Wd = new Array;
        if (!dd && !Od) return await Promise.reject("diffuse and specular glossiness textures are not defined!");
        const Fd = dd ? dd.zV() : Od ? Od.zV() : null;
        if (Fd) {
          const Rd = this._resizeTexturesToSameDimensions(dd, Od, Fd),
            Xd = Rd.texture1?.getSize();
          let Kd, hd;
          const vd = Xd.width,
            Qd = Xd.height,
            td = await Rd.texture1.readPixels(),
            od = await Rd.texture2.readPixels();
          if (!td) return await Promise.reject("Failed to retrieve pixels from diffuse texture!");
          if (Kd = um(td), !od) return await Promise.reject("Failed to retrieve pixels from specular glossiness texture!");
          hd = um(od);
          const Nd = hd.byteLength,
            qd = new Uint8Array(Nd),
            Hd = new Uint8Array(Nd),
            bd = 4,
            Td = new yd.Color3(0, 0, 0);
          let pd = 0,
            Yd = 0;
          for (let dd = 0; dd < Qd; ++dd)
            for (let Od = 0; Od < vd; ++Od) {
              const Wd = (vd * dd + Od) * bd,
                Xd = {
                  diffuseColor: new yd.Color3(Kd[Wd], Kd[Wd + 1], Kd[Wd + 2]).toLinearSpace(Fd.Iq().useExactSrgbConversions).multiply(md.diffuseColor),
                  specularColor: new yd.Color3(hd[Wd], hd[Wd + 1], hd[Wd + 2]).toLinearSpace(Fd.Iq().useExactSrgbConversions).multiply(md.specularColor),
                  glossiness: hd[Wd + 3] * md.glossiness
                },
                Qd = this._convertSpecularGlossinessToMetallicRoughness(Xd);
              Td.r = Math.max(Td.r, Qd.baseColor.r), Td.g = Math.max(Td.g, Qd.baseColor.g), Td.b = Math.max(Td.b, Qd.baseColor.b), pd = Math.max(pd, Qd.metallic), Yd = Math.max(Yd, Qd.roughness), Hd[Wd] = 255 * Qd.baseColor.r, Hd[Wd + 1] = 255 * Qd.baseColor.g, Hd[Wd + 2] = 255 * Qd.baseColor.b, Hd[Wd + 3] = Rd.texture1.hasAlpha ? 255 * Kd[Wd + 3] : 255, qd[Wd] = 0, qd[Wd + 1] = 255 * Qd.roughness, qd[Wd + 2] = 255 * Qd.metallic, qd[Wd + 3] = 255
            }
          const gd = {
            baseColor: Td,
            metallic: pd,
            roughness: Yd
          };
          let wd = !1,
            Ed = !1;
          for (let dd = 0; dd < Qd; ++dd)
            for (let Od = 0; Od < vd; ++Od) {
              const md = (vd * dd + Od) * bd;
              Hd[md] /= gd.baseColor.r > gm ? gd.baseColor.r : 1, Hd[md + 1] /= gd.baseColor.g > gm ? gd.baseColor.g : 1, Hd[md + 2] /= gd.baseColor.b > gm ? gd.baseColor.b : 1;
              const Wd = yd.Color3.FromInts(Hd[md], Hd[md + 1], Hd[md + 2]).toGammaSpace(Fd.Iq().useExactSrgbConversions);
              Hd[md] = 255 * Wd.r, Hd[md + 1] = 255 * Wd.g, Hd[md + 2] = 255 * Wd.b, Wd.equalsWithEpsilon(Em, gm) || (Ed = !0), qd[md + 1] /= gd.roughness > gm ? gd.roughness : 1, qd[md + 2] /= gd.metallic > gm ? gd.metallic : 1;
              yd.Color3.FromInts(255, qd[md + 1], qd[md + 2]).equalsWithEpsilon(Em, gm) || (wd = !0)
            }
          return wd && Wd.push((0, Jd.EncodeImageAsync)(qd, vd, Qd).then((dd => {
            gd.metallicRoughnessTextureData = dd
          }))), Ed && Wd.push((0, Jd.EncodeImageAsync)(Hd, vd, Qd).then((dd => {
            gd.baseColorTextureData = dd
          }))), await Promise.all(Wd).then((() => gd))
        }
        return await Promise.reject("_ConvertSpecularGlossinessTexturesToMetallicRoughness: Scene from textures is missing!")
      }
      _convertSpecularGlossinessToMetallicRoughness(dd) {
        const Od = this._getPerceivedBrightness(dd.diffuseColor),
          md = this._getPerceivedBrightness(dd.specularColor),
          Wd = 1 - this._getMaxComponent(dd.specularColor),
          Fd = xm(Od, md, Wd),
          Rd = dd.diffuseColor.scale(Wd / (1 - wm.r) / Math.max(1 - Fd, gm)),
          Xd = dd.specularColor.subtract(wm.scale(1 - Fd)).scale(1 / Math.max(Fd, gm));
        let Kd = yd.Color3.Lerp(Rd, Xd, Fd * Fd);
        Kd = Kd.clampToRef(0, 1, Kd);
        return {
          baseColor: Kd,
          metallic: Fd,
          roughness: 1 - dd.glossiness
        }
      }
      _getPerceivedBrightness(dd) {
        return Math.sqrt(.299 * dd.r * dd.r + .587 * dd.g * dd.g + .114 * dd.b * dd.b)
      }
      _getMaxComponent(dd) {
        return Math.max(dd.r, Math.max(dd.g, dd.b))
      }
      async _convertMetalRoughFactorsToMetallicRoughnessAsync(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd) {
        const vd = [],
          Qd = {
            baseColor: dd,
            metallic: Od,
            roughness: md
          };
        if (hd)
          if (Xd instanceof dm) {
            if (Xd.geometryOpacityTexture) {
              const dd = Wd && Wd.getInternalTexture() ? Wd.getInternalTexture().uniqueId : 0,
                Od = Xd.geometryOpacityTexture && Xd.geometryOpacityTexture.getInternalTexture() ? Xd.geometryOpacityTexture.getInternalTexture().uniqueId : 0,
                md = Number(`${dd}${Od}`),
                Fd = this._textureMap.get(md);
              Fd ? Kd.baseColorTexture = Fd : vd.push(hm("baseColorOpacityTexture", om(Wd ? Qm(Wd, 0) : tm(1), Wd ? Qm(Wd, 1) : tm(1), Wd ? Qm(Wd, 2) : tm(1), Qm(Xd.geometryOpacityTexture, 0)), Xd.zV()).then((async dd => {
                const Od = await this.exportTextureAsync(dd, md);
                Od && (Kd.baseColorTexture = Od)
              })))
            } else Wd && vd.push(this.exportTextureAsync(Wd).then((dd => {
              dd && (Kd.baseColorTexture = dd)
            })));
            if (Xd._useMetallicFromMetallicTextureBlue && Fd) vd.push(this.exportTextureAsync(Fd).then((dd => {
              dd && (Kd.metallicRoughnessTexture = dd)
            })));
            else if (Rd || Fd) {
              const dd = Fd && Fd.getInternalTexture() ? Fd.getInternalTexture().uniqueId : 0,
                Od = Rd && Rd.getInternalTexture() ? Rd.getInternalTexture().uniqueId : 0,
                md = Number(`${dd}${Od}`),
                Wd = this._textureMap.get(md);
              Wd ? Kd.metallicRoughnessTexture = Wd : vd.push(hm("MetalRoughTexture", om(Xd.ambientOcclusionTexture ? Qm(Xd.ambientOcclusionTexture, 0) : tm(1), Rd ? Qm(Rd, 0) : tm(1), Fd ? Qm(Fd, 0) : tm(1)), Xd.zV()).then((async dd => {
                const Od = await this.exportTextureAsync(dd, md);
                Od && (Kd.metallicRoughnessTexture = Od)
              })))
            }
          } else Wd && vd.push(this.exportTextureAsync(Wd).then((dd => {
            dd && (Kd.baseColorTexture = dd)
          }))), Fd && vd.push(this.exportTextureAsync(Fd).then((dd => {
            dd && (Kd.metallicRoughnessTexture = dd)
          })));
        return vd.length > 0 && (this._exporter._materialNeedsUVsSet.add(Xd), await Promise.all(vd)), Qd
      }
      _getTextureSampler(dd) {
        const Od = {};
        if (!dd || !(dd instanceof gd.b)) return Od;
        const md = this._getGLTFTextureWrapMode(dd.wrapU);
        10497 !== md && (Od.wrapS = md);
        const Wd = this._getGLTFTextureWrapMode(dd.wrapV);
        switch (10497 !== Wd && (Od.wrapT = Wd), dd.samplingMode) {
          case gd.b.LINEAR_LINEAR:
            Od.magFilter = 9729, Od.minFilter = 9729;
            break;
          case gd.b.LINEAR_NEAREST:
            Od.magFilter = 9729, Od.minFilter = 9728;
            break;
          case gd.b.NEAREST_LINEAR:
            Od.magFilter = 9728, Od.minFilter = 9729;
            break;
          case gd.b.NEAREST_LINEAR_MIPLINEAR:
            Od.magFilter = 9728, Od.minFilter = 9987;
            break;
          case gd.b.NEAREST_NEAREST:
            Od.magFilter = 9728, Od.minFilter = 9728;
            break;
          case gd.b.NEAREST_LINEAR_MIPNEAREST:
            Od.magFilter = 9728, Od.minFilter = 9985;
            break;
          case gd.b.LINEAR_NEAREST_MIPNEAREST:
            Od.magFilter = 9729, Od.minFilter = 9984;
            break;
          case gd.b.LINEAR_NEAREST_MIPLINEAR:
            Od.magFilter = 9729, Od.minFilter = 9986;
            break;
          case gd.b.NEAREST_NEAREST_MIPLINEAR:
            Od.magFilter = 9728, Od.minFilter = 9986;
            break;
          case gd.b.LINEAR_LINEAR_MIPLINEAR:
            Od.magFilter = 9729, Od.minFilter = 9987;
            break;
          case gd.b.LINEAR_LINEAR_MIPNEAREST:
            Od.magFilter = 9729, Od.minFilter = 9985;
            break;
          case gd.b.NEAREST_NEAREST_MIPNEAREST:
            Od.magFilter = 9728, Od.minFilter = 9984
        }
        return Od
      }
      _getGLTFTextureWrapMode(dd) {
        switch (dd) {
          case gd.b.WRAP_ADDRESSMODE:
            return 10497;
          case gd.b.CLAMP_ADDRESSMODE:
            return 33071;
          case gd.b.MIRROR_ADDRESSMODE:
            return 33648;
          default:
            return Fd.Tools.Error(`Unsupported Texture Wrap Mode ${dd}!`), 10497
        }
      }
      async _convertSpecGlossFactorsToMetallicRoughnessAsync(dd, Od, md) {
        const Wd = {
            diffuseColor: dd._albedoColor,
            specularColor: dd._reflectivityColor,
            glossiness: dd._microSurface
          },
          Fd = dd._albedoTexture,
          Rd = dd._reflectivityTexture,
          Xd = dd._useMicroSurfaceFromReflectivityMapAlpha;
        if (Rd && !Xd) return await Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported");
        if ((Fd || Rd) && md) {
          this._exporter._materialNeedsUVsSet.add(dd);
          const md = this._exportTextureSampler(Fd || Rd),
            Xd = await this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(Fd, Rd, Wd),
            Kd = this._exporter._textures;
          if (Xd.baseColorTextureData) {
            const dd = await this._exportImageAsync(`baseColor${Kd.length}`, Xd.baseColorTextureData);
            Od.baseColorTexture = this._exportTextureInfo(dd, md, Fd?.coordinatesIndex)
          }
          if (Xd.metallicRoughnessTextureData) {
            const dd = await this._exportImageAsync(`metallicRoughness${Kd.length}`, Xd.metallicRoughnessTextureData);
            Od.metallicRoughnessTexture = this._exportTextureInfo(dd, md, Rd?.coordinatesIndex)
          }
          return Xd
        }
        return this._convertSpecularGlossinessToMetallicRoughness(Wd)
      }
      async exportPBRMaterialAsync(dd, Od) {
        const md = {},
          Wd = {
            name: dd.name
          },
          Fd = dd.isMetallicWorkflow();
        if (Fd) {
          const Od = dd._albedoColor,
            Wd = dd.alpha;
          Od && (md.baseColorFactor = [Od.r, Od.g, Od.b, Wd])
        }
        const Rd = Fd ? await this._convertMetalRoughFactorsToMetallicRoughnessAsync(dd._albedoColor, dd._metallic, dd._roughness, dd._albedoTexture, dd._metallicTexture, dd._metallicTexture, dd, md, Od) : await this._convertSpecGlossFactorsToMetallicRoughnessAsync(dd, md, Od);
        await this._setMetallicRoughnessPbrMaterialAsync(Rd, dd, Wd, md, Od), await this._finishMaterialAsync(Wd, dd);
        const Xd = this._exporter._materials;
        return Xd.push(Wd), Xd.length - 1
      }
      async _setMetallicRoughnessPbrMaterialAsync(dd, Od, md, Wd, Rd) {
        if (Sm(md, Od), dd.baseColor.equalsWithEpsilon(Em, gm) && pd.WithinEpsilon(Od.alpha, 1, gm) || (Wd.baseColorFactor = [dd.baseColor.r, dd.baseColor.g, dd.baseColor.b, Od.alpha]), null != dd.metallic && 1 !== dd.metallic && (Wd.metallicFactor = dd.metallic), null != dd.roughness && 1 !== dd.roughness && (Wd.roughnessFactor = dd.roughness), null == Od.backFaceCulling || Od.backFaceCulling || (Od._twoSidedLighting || Fd.Tools.Warn(Od.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), md.doubleSided = !0), Rd) {
          const dd = [],
            Fd = Od instanceof EO ? Od._bumpTexture : Od.geometryNormalTexture;
          Fd && dd.push(this.exportTextureAsync(Fd).then((dd => {
            dd && (md.normalTexture = dd, 1 !== Fd.level && (md.normalTexture.scale = Fd.level))
          })));
          const Rd = Od instanceof EO ? Od._ambientTexture : Od.ambientOcclusionTexture;
          Rd && dd.push(new Promise((async dd => {
            if (Od instanceof dm && Wd.metallicRoughnessTexture) {
              const Od = this._exportTextureSampler(Rd),
                md = this._exporter._textures[Wd.metallicRoughnessTexture.index].source,
                Fd = this._exportTextureInfo(md, Od, Rd.coordinatesIndex);
              return this._textureMap.set(Rd.uniqueId, Fd), this._exporter._extensionsPostExportTextures("exporter", Fd, Rd), dd(Fd)
            }
            return dd(await this.exportTextureAsync(Rd))
          })).then((async dd => {
            if (dd) {
              const Wd = {
                index: dd.index,
                texCoord: dd.texCoord,
                extensions: dd.extensions
              };
              md.occlusionTexture = Wd, Wd.strength = Od instanceof EO ? Od._ambientTextureStrength : Od.ambientOcclusionTexture.level
            }
          })));
          const Xd = Od instanceof EO ? Od._emissiveTexture : Od.emissionColorTexture;
          Xd && dd.push(this.exportTextureAsync(Xd).then((dd => {
            dd && (md.emissiveTexture = dd)
          }))), dd.length > 0 && (this._exporter._materialNeedsUVsSet.add(Od), await Promise.all(dd))
        }
        const Xd = Od instanceof EO ? Od._emissiveColor : Od.emissionColor;
        Xd.equalsWithEpsilon(Jm, gm) || (md.emissiveFactor = Xd.RRd()), md.pbrMetallicRoughness = Wd
      }
      async exportOpenPBRMaterialAsync(dd, Od) {
        const md = {},
          Wd = {
            name: dd.name
          },
          Fd = dd.baseColor,
          Rd = dd.geometryOpacity;
        Fd && (md.baseColorFactor = [Fd.r, Fd.g, Fd.b, Rd]);
        const Xd = await this._convertMetalRoughFactorsToMetallicRoughnessAsync(dd.baseColor, dd.baseMetalness, dd.specularRoughness, dd.baseColorTexture, dd.baseMetalnessTexture, dd.specularRoughnessTexture, dd, md, Od);
        await this._setMetallicRoughnessPbrMaterialAsync(Xd, dd, Wd, md, Od), await this._finishMaterialAsync(Wd, dd);
        const Kd = this._exporter._materials;
        return Kd.push(Wd), Kd.length - 1
      }
      async exportTextureAsync(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          md = this._textureMap.get(Od ?? dd.uniqueId);
        if (md) return md;
        const Wd = this._exportTextureSampler(dd),
          Fd = await this._exportTextureImageAsync(dd);
        return md = this._exportTextureInfo(Fd, Wd, dd.coordinatesIndex), this._textureMap.set(Od ?? dd.uniqueId, md), this._exporter._extensionsPostExportTextures("exporter", md, dd), md
      }
      async _exportTextureImageAsync(dd) {
        const Od = dd.mimeType ?? "none",
          md = this._internalTextureToImage,
          Wd = dd.getInternalTexture().uniqueId;
        md[Wd] = md[Wd] || {};
        let Rd = md[Wd][Od];
        return void 0 === Rd && (Rd = (async () => {
          const md = await Ym(dd);
          if (md && Um(md.mimeType) && ("none" === Od || md.mimeType === Od)) return await this._exportImageAsync(dd.name, new Blob([md.data], {
            type: md.mimeType
          }));
          let Wd = "image/png";
          "none" !== Od && (Um(Od) ? Wd = Od : (Wd = "image/png", Fd.Tools.Warn(`Unsupported media type: ${Od}. Exporting texture as PNG.`)));
          const Rd = dd.getSize(),
            Xd = await (0, Yd.h)(dd),
            Kd = await (0, Jd.EncodeImageAsync)(Xd, Rd.width, Rd.height, Wd);
          return await this._exportImageAsync(dd.name, Kd)
        })(), md[Wd][Od] = Rd), await Rd
      }
      async _exportImageAsync(dd, Od) {
        const md = this._exporter._images;
        let Wd;
        if (this._exporter._shouldUseGlb) {
          Wd = {
            name: dd,
            mimeType: Od.type,
            bufferView: void 0
          };
          const md = await Od.arrayBuffer(),
            Fd = this._exporter._bufferManager.createBufferView(new Uint8Array(md));
          this._exporter._bufferManager.setBufferView(Wd, Fd)
        } else {
          const Rd = dd.replace(/\.\/|\/|\.\\|\\/g, "_"),
            Xd = function(dd) {
              switch (dd) {
                case "image/jpeg":
                  return ".jpg";
                case "image/png":
                  return ".png";
                case "image/webp":
                  return ".webp";
                case "image/avif":
                  return ".avif";
                case "image/ktx2":
                  return ".ktx2"
              }
            }(Od.type);
          let Kd = Rd + Xd;
          md.some((dd => dd.uri === Kd)) && (Kd = `${Rd}_${Fd.Tools.RandomId()}${Xd}`), Wd = {
            name: dd,
            uri: Kd
          }, this._exporter._imageData[Kd] = Od
        }
        return md.push(Wd), md.length - 1
      }
      _exportTextureInfo(dd, Od, md) {
        const Wd = this._exporter._textures;
        let Fd = Wd.findIndex((md => md.sampler == Od && md.source === dd)); - 1 === Fd && (Fd = Wd.length, Wd.push({
          source: dd,
          sampler: Od
        }));
        const Rd = {
          index: Fd
        };
        return md && (Rd.texCoord = md), Rd
      }
      _exportTextureSampler(dd) {
        const Od = this._getTextureSampler(dd),
          md = this._exporter._samplers,
          Wd = md.findIndex((dd => dd.minFilter === Od.minFilter && dd.magFilter === Od.magFilter && dd.wrapS === Od.wrapS && dd.wrapT === Od.wrapT));
        return -1 !== Wd ? Wd : (md.push(Od), md.length - 1)
      }
    }
    var im = md(41991),
      Am = md(42123);
    (0, Am.d)();
    var rm = md(38644);
    const Gm = Wd.Matrix.Compose(new Wd.Cq(-1, 1, 1), Wd.Quaternion.Identity(), Wd.Cq.Zero());

    function nm(dd, Od) {
      if (!(dd instanceof td.c)) return !1;
      if (Od) {
        if (!dd.getWorldMatrix().equalsWithEpsilon(Wd.Matrix.IdentityReadOnly, rm.b)) return !1
      } else {
        if (!dd.getWorldMatrix().multiplyToRef(Gm, Wd.TmpVectors.Matrix[0]).equalsWithEpsilon(Wd.Matrix.IdentityReadOnly, rm.b)) return !1
      }
      return !(dd instanceof od.d && dd.geometry)
    }
    const Lm = Wd.Cq.ZeroReadOnly,
      Pm = Wd.Quaternion.Identity(),
      zm = Wd.Cq.OneReadOnly,
      cm = new Wd.Cq(-1, 1, 1);

    function jm(dd, Od) {
      const {
        byteOffset: md,
        byteStride: Wd,
        type: Fd,
        normalized: Rd
      } = dd, Xd = dd.getSize(), Kd = Od.reduce(((dd, Od) => Od.getTotalVertices() > dd ? Od.getTotalVertices() : dd), -Number.MAX_VALUE);
      return {
        byteOffset: md,
        byteStride: Wd,
        componentCount: Xd,
        type: Fd,
        count: Kd * Xd,
        normalized: Rd,
        totalVertices: Kd,
        kind: dd.getKind()
      }
    }

    function Dm(dd) {
      switch (dd) {
        case "MAT2":
        case "VEC4":
          return 4;
        case "MAT3":
          return 9;
        case "MAT4":
          return 16;
        case "SCALAR":
          return 1;
        case "VEC2":
          return 2;
        case "VEC3":
          return 3
      }
    }

    function em(dd) {
      switch (dd) {
        case Qd.g.PositionKind:
        case Qd.g.NormalKind:
        case Qd.g.TangentKind:
        case Qd.g.ColorKind:
        case Qd.g.MatricesIndicesKind:
        case Qd.g.MatricesIndicesExtraKind:
        case Qd.g.MatricesWeightsKind:
        case Qd.g.MatricesWeightsExtraKind:
        case Qd.g.UVKind:
        case Qd.g.UV2Kind:
        case Qd.g.UV3Kind:
        case Qd.g.UV4Kind:
        case Qd.g.UV5Kind:
        case Qd.g.UV6Kind:
          return !0
      }
      return !1
    }

    function Im(dd) {
      const Od = Math.sqrt(dd.x * dd.x + dd.y * dd.y + dd.z * dd.z);
      Od > 0 && (dd.x /= Od, dd.y /= Od, dd.z /= Od)
    }

    function lm(dd) {
      return dd.x *= -1, dd
    }

    function Cm(dd) {
      if (dd.x * dd.x + dd.y * dd.y > .5) {
        const Od = Math.abs(dd.x),
          md = Math.abs(dd.y);
        if (Od > md) {
          const md = Math.sign(dd.x);
          dd.x = Od, dd.y *= -md, dd.z *= -md, dd.w *= md
        } else {
          const Od = Math.sign(dd.y);
          dd.x *= -Od, dd.y = md, dd.z *= Od, dd.w *= -Od
        }
      } else {
        const Od = Math.abs(dd.z),
          md = Math.abs(dd.w);
        if (Od > md) {
          const md = Math.sign(dd.z);
          dd.x *= -md, dd.y *= md, dd.z = Od, dd.w *= -md
        } else {
          const Od = Math.sign(dd.w);
          dd.x *= Od, dd.y *= -Od, dd.z *= -Od, dd.w = md
        }
      }
      return dd
    }

    function Zm(dd) {
      dd.KOd(-dd.z, dd.w, dd.x, -dd.y)
    }

    function km(dd, Od) {
      const md = Wd.Cq.FromArrayToRef(Od.translation || [0, 0, 0], 0, Wd.TmpVectors.Cq[0]),
        Fd = Wd.Quaternion.FromArrayToRef(Od.rotation || [0, 0, 0, 1], 0, Wd.TmpVectors.Quaternion[0]),
        Rd = Wd.Matrix.ComposeToRef(zm, Fd, md, Wd.TmpVectors.Matrix[0]),
        Xd = Wd.Cq.FromArrayToRef(dd.translation || [0, 0, 0], 0, Wd.TmpVectors.Cq[2]),
        Kd = Wd.Quaternion.FromArrayToRef(dd.rotation || [0, 0, 0, 1], 0, Wd.TmpVectors.Quaternion[1]),
        hd = Wd.Matrix.ComposeToRef(zm, Kd, Xd, Wd.TmpVectors.Matrix[1]);
      Rd.multiplyToRef(hd, hd), hd.decompose(void 0, Fd, md), md.equalsWithEpsilon(Lm, rm.b) ? delete Od.translation : Od.translation = md.RRd(), Fd.equalsWithEpsilon(Pm, rm.b) ? delete Od.rotation : Od.rotation = Fd.RRd(), Od.scale && delete Od.scale
    }

    function fm(dd, Od) {
      if (!(Od instanceof td.c)) return !1;
      if (!(1 === Od.getChildren().length && 0 === dd.getChildren().length && dd.parent === Od)) return !1;
      const md = dd.zV(),
        Wd = dd instanceof Am.h && !md.useRightHandedSystem ? cm : zm;
      return !!Od.Tt.equalsWithEpsilon(Wd, rm.b) || (Bd.c.Warn(`Cannot collapse node ${dd.name} into parent node ${Od.name} with modified scaling.`), !1)
    }

    function Mm(dd) {
      if (dd instanceof Array) {
        const Od = new Float32Array(dd);
        return new Uint8Array(Od.buffer, Od.byteOffset, Od.byteLength)
      }
      return ArrayBuffer.isView(dd) ? new Uint8Array(dd.buffer, dd.byteOffset, dd.byteLength) : new Uint8Array(dd)
    }

    function dW(dd, Od) {
      for (const [md, Wd] of Object.entries(dd)) {
        const Fd = Od[md];
        (Array.isArray(Wd) && Array.isArray(Fd) && OW(Wd, Fd) || Wd === Fd) && delete dd[md]
      }
      return dd
    }

    function OW(dd, Od) {
      return dd.length === Od.length && dd.every(((dd, md) => dd === Od[md]))
    }
    const mW = new Map([
      [Int8Array, (dd, Od, md) => dd.setInt8(Od, md)],
      [Uint8Array, (dd, Od, md) => dd.setUint8(Od, md)],
      [Uint8ClampedArray, (dd, Od, md) => dd.setUint8(Od, md)],
      [Int16Array, (dd, Od, md) => dd.setInt16(Od, md, !0)],
      [Uint16Array, (dd, Od, md) => dd.setUint16(Od, md, !0)],
      [Int32Array, (dd, Od, md) => dd.setInt32(Od, md, !0)],
      [Uint32Array, (dd, Od, md) => dd.setUint32(Od, md, !0)],
      [Float32Array, (dd, Od, md) => dd.setFloat32(Od, md, !0)],
      [Float64Array, (dd, Od, md) => dd.setFloat64(Od, md, !0)]
    ]);
    class WW {
      writeTypedArray(dd) {
        this._checkGrowBuffer(dd.byteLength);
        const Od = mW.get(dd.constructor);
        for (let md = 0; md < dd.length; md++) Od(this._dataView, this._byteOffset, dd[md]), this._byteOffset += dd.BYTES_PER_ELEMENT
      }
      constructor(dd) {
        this._data = new Uint8Array(dd), this._dataView = new DataView(this._data.buffer), this._byteOffset = 0
      }
      get byteOffset() {
        return this._byteOffset
      }
      getOutputData() {
        return new Uint8Array(this._data.buffer, 0, this._byteOffset)
      }
      writeUInt8(dd) {
        this._checkGrowBuffer(1), this._dataView.setUint8(this._byteOffset, dd), this._byteOffset++
      }
      writeInt8(dd) {
        this._checkGrowBuffer(1), this._dataView.setInt8(this._byteOffset, dd), this._byteOffset++
      }
      writeInt16(dd) {
        this._checkGrowBuffer(2), this._dataView.setInt16(this._byteOffset, dd, !0), this._byteOffset += 2
      }
      writeUInt16(dd) {
        this._checkGrowBuffer(2), this._dataView.setUint16(this._byteOffset, dd, !0), this._byteOffset += 2
      }
      writeInt32(dd) {
        this._checkGrowBuffer(4), this._dataView.setInt32(this._byteOffset, dd, !0), this._byteOffset += 4
      }
      writeUInt32(dd) {
        this._checkGrowBuffer(4), this._dataView.setUint32(this._byteOffset, dd, !0), this._byteOffset += 4
      }
      writeFloat32(dd) {
        this._checkGrowBuffer(4), this._dataView.setFloat32(this._byteOffset, dd, !0), this._byteOffset += 4
      }
      writeFloat64(dd) {
        this._checkGrowBuffer(8), this._dataView.setFloat64(this._byteOffset, dd, !0), this._byteOffset += 8
      }
      _checkGrowBuffer(dd) {
        const Od = this.byteOffset + dd;
        if (Od > this._data.byteLength) {
          const dd = new Uint8Array(2 * Od);
          dd.set(this._data), this._data = dd, this._dataView = new DataView(this._data.buffer)
        }
      }
    }

    function FW(dd) {
      return dd % 4 === 0 ? 4 : dd % 2 === 0 ? 2 : 1
    }
    class RW {
      constructor() {
        this._bufferViewToData = new Map, this._bufferViewToProperties = new Map, this._accessorToBufferView = new Map
      }
      generateBinary(dd) {
        let Od = 0;
        this._bufferViewToData.forEach((dd => {
          Od += dd.byteLength
        }));
        const md = new WW(Od),
          Wd = Array.from(this._bufferViewToData.keys()).sort(((dd, Od) => FW(Od.byteLength) - FW(dd.byteLength)));
        for (const Fd of Wd) {
          Fd.byteOffset = md.byteOffset, dd.push(Fd);
          const Od = dd.length - 1,
            Wd = this.getPropertiesWithBufferView(Fd);
          for (const dd of Wd) dd.bufferView = Od;
          md.writeTypedArray(this._bufferViewToData.get(Fd)), this._bufferViewToData.delete(Fd)
        }
        return md.getOutputData()
      }
      createBufferView(dd, Od) {
        const md = {
          buffer: 0,
          byteOffset: void 0,
          byteLength: dd.byteLength,
          byteStride: Od
        };
        return this._bufferViewToData.set(md, dd), md
      }
      createAccessor(dd, Od, md, Wd, Fd, Rd, Xd) {
        this._verifyBufferView(dd);
        const Kd = {
          bufferView: void 0,
          componentType: md,
          count: Wd,
          type: Od,
          min: Rd?.min,
          max: Rd?.max,
          normalized: Xd,
          byteOffset: Fd
        };
        return this.setBufferView(Kd, dd), this._accessorToBufferView.set(Kd, dd), Kd
      }
      setBufferView(dd, Od) {
        this._verifyBufferView(Od);
        this.getPropertiesWithBufferView(Od).push(dd)
      }
      removeBufferView(dd) {
        const Od = this.getPropertiesWithBufferView(dd);
        for (const md of Od) void 0 !== md.bufferView && delete md.bufferView;
        this._bufferViewToData.delete(dd), this._bufferViewToProperties.delete(dd), this._accessorToBufferView.forEach(((Od, md) => {
          Od === dd && (void 0 !== md.byteOffset && delete md.byteOffset, this._accessorToBufferView.delete(md))
        }))
      }
      getBufferView(dd) {
        const Od = this._accessorToBufferView.get(dd);
        return this._verifyBufferView(Od), Od
      }
      getPropertiesWithBufferView(dd) {
        return this._verifyBufferView(dd), this._bufferViewToProperties.set(dd, this._bufferViewToProperties.get(dd) ?? []), this._bufferViewToProperties.get(dd)
      }
      getData(dd) {
        return this._verifyBufferView(dd), this._bufferViewToData.get(dd)
      }
      _verifyBufferView(dd) {
        if (void 0 === dd || !this._bufferViewToData.has(dd)) throw new Error(`BufferView ${dd} not found in BufferManager.`)
      }
    }
    var XW = md(42126);
    (0, XW.i)();
    var KW = md(42378);
    (0, KW.g)();
    var hW = md(42179),
      vW = md(43051);
    (0, vW.h)();
    let QW = (() => {
      var dd;
      let Od, md, Wd = [],
        Fd = [],
        Rd = [],
        Xd = [];
      return dd = class {
        get influence() {
          return this._influence
        }
        set influence(dd) {
          if (this._influence === dd) return;
          const Od = this._influence;
          this._influence = dd, this.onInfluenceChanged.hasObservers() && this.onInfluenceChanged.notifyObservers(0 === Od || 0 === dd)
        }
        get animationPropertiesOverride() {
          return !this._animationPropertiesOverride && this._scene ? this._scene.animationPropertiesOverride : this._animationPropertiesOverride
        }
        set animationPropertiesOverride(dd) {
          this._animationPropertiesOverride = dd
        }
        constructor(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            Kd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = dd, this.animations = [], this._positions = null, this._normals = null, this._tangents = null, this._uvs = null, this._uv2s = null, this._colors = null, this._uniqueId = 0, this.onInfluenceChanged = new mm.c, this._onDataLayoutChanged = new mm.c, this.id = (0, Ud.k)(this, Wd, void 0), this.morphTargetManager = ((0, Ud.k)(this, Fd), (0, Ud.k)(this, Rd, null)), this._animationPropertiesOverride = ((0, Ud.k)(this, Xd), null), this.id = dd, this.morphTargetManager = Kd, this._scene = md || Hd.e.LastCreatedScene, this.influence = Od, this._scene && (this._uniqueId = this._scene.getUniqueId())
        }
        get uniqueId() {
          return this._uniqueId
        }
        get hasPositions() {
          return !!this._positions
        }
        get hasNormals() {
          return !!this._normals
        }
        get hasTangents() {
          return !!this._tangents
        }
        get hasUVs() {
          return !!this._uvs
        }
        get hasUV2s() {
          return !!this._uv2s
        }
        get hasColors() {
          return !!this._colors
        }
        get vertexCount() {
          return this._positions ? this._positions.length / 3 : this._normals ? this._normals.length / 3 : this._tangents ? this._tangents.length / 3 : this._uvs ? this._uvs.length / 2 : this._uv2s ? this._uv2s.length / 2 : this._colors ? this._colors.length / 4 : 0
        }
        vhd(dd) {
          const Od = this.hasPositions;
          this._positions = dd, Od !== this.hasPositions && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getPositions() {
          return this._positions
        }
        setNormals(dd) {
          const Od = this.hasNormals;
          this._normals = dd, Od !== this.hasNormals && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getNormals() {
          return this._normals
        }
        setTangents(dd) {
          const Od = this.hasTangents;
          this._tangents = dd, Od !== this.hasTangents && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getTangents() {
          return this._tangents
        }
        setUVs(dd) {
          const Od = this.hasUVs;
          this._uvs = dd, Od !== this.hasUVs && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUVs() {
          return this._uvs
        }
        setUV2s(dd) {
          const Od = this.hasUV2s;
          this._uv2s = dd, Od !== this.hasUV2s && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUV2s() {
          return this._uv2s
        }
        setColors(dd) {
          const Od = this.hasColors;
          this._colors = dd, Od !== this.hasColors && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getColors() {
          return this._colors
        }
        clone() {
          const Od = JO.b.Clone((() => new dd(this.name, this.influence, this._scene, this.morphTargetManager)), this);
          return Od._positions = this._positions, Od._normals = this._normals, Od._tangents = this._tangents, Od._uvs = this._uvs, Od._uv2s = this._uv2s, Od._colors = this._colors, Od
        }
        serialize() {
          const dd = {};
          return dd.name = this.name, dd.influence = this.influence, null != this.id && (dd.id = this.id), dd.uniqueId = this.uniqueId, dd.positions = Array.prototype.slice.call(this.getPositions()), this.hasNormals && (dd.normals = Array.prototype.slice.call(this.getNormals())), this.hasTangents && (dd.tangents = Array.prototype.slice.call(this.getTangents())), this.hasUVs && (dd.uvs = Array.prototype.slice.call(this.getUVs())), this.hasUV2s && (dd.uv2s = Array.prototype.slice.call(this.getUV2s())), this.hasColors && (dd.colors = Array.prototype.slice.call(this.getColors())), JO.b.AppendSerializedAnimations(this, dd), dd
        }
        getClassName() {
          return "MorphTarget"
        }
        static Parse(Od, md) {
          let Wd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          const Fd = new dd(Od.name, Od.influence, md, Wd);
          if (Fd.vhd(Od.positions), null != Od.id && (Fd.id = Od.id), Od.normals && Fd.setNormals(Od.normals), Od.tangents && Fd.setTangents(Od.tangents), Od.uvs && Fd.setUVs(Od.uvs), Od.uv2s && Fd.setUV2s(Od.uv2s), Od.colors && Fd.setColors(Od.colors), Od.animations) {
            for (let dd = 0; dd < Od.animations.length; dd++) {
              const md = Od.animations[dd],
                Wd = (0, jO.c)("BABYLON.Animation");
              Wd && Fd.animations.push(Wd.Parse(md))
            }
            Od.autoAnimate && md && md.beginAnimation(Fd, Od.autoAnimateFrom, Od.autoAnimateTo, Od.autoAnimateLoop, Od.autoAnimateSpeed || 1)
          }
          return Fd
        }
        static FromMesh(Od, md, Wd) {
          md || (md = Od.name);
          const Fd = new dd(md, Wd, Od.zV(), Od.morphTargetManager);
          return Fd.vhd(Od.getVerticesData(zd.j.PositionKind)), Od.isVerticesDataPresent(zd.j.NormalKind) && Fd.setNormals(Od.getVerticesData(zd.j.NormalKind)), Od.isVerticesDataPresent(zd.j.TangentKind) && Fd.setTangents(Od.getVerticesData(zd.j.TangentKind)), Od.isVerticesDataPresent(zd.j.UVKind) && Fd.setUVs(Od.getVerticesData(zd.j.UVKind)), Od.isVerticesDataPresent(zd.j.UV2Kind) && Fd.setUV2s(Od.getVerticesData(zd.j.UV2Kind)), Od.isVerticesDataPresent(zd.j.ColorKind) && Fd.setColors(Od.getVerticesData(zd.j.ColorKind)), Fd
        }
      }, (() => {
        const Kd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Od = [(0, xd.E)()], md = [(0, xd.E)()], (0, Ud.h)(null, null, Od, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: dd => "id" in dd,
            get: dd => dd.id,
            set: (dd, Od) => {
              dd.id = Od
            }
          },
          metadata: Kd
        }, Wd, Fd), (0, Ud.h)(null, null, md, {
          kind: "field",
          name: "morphTargetManager",
          static: !1,
          private: !1,
          access: {
            has: dd => "morphTargetManager" in dd,
            get: dd => dd.morphTargetManager,
            set: (dd, Od) => {
              dd.morphTargetManager = Od
            }
          },
          metadata: Kd
        }, Rd, Xd), Kd && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Kd
        })
      })(), dd
    })();
    var tW, oW = md(43129),
      NW = md(42172);
    ! function(dd) {
      dd[dd.INTANGENT = 0] = "INTANGENT", dd[dd.OUTTANGENT = 1] = "OUTTANGENT"
    }(tW || (tW = {}));
    class qW {
      static _IsTransformable(dd) {
        return dd && (dd instanceof td.c || dd instanceof XW.e || dd instanceof NW.c)
      }
      static _CreateNodeAnimation(dd, Od, md, Wd, Rd) {
        if (this._IsTransformable(dd)) {
          const Xd = [],
            Kd = [],
            hd = Od.getKeys(),
            vd = qW._CalculateMinMaxKeyFrames(hd),
            Qd = qW._DeduceInterpolation(hd, md, Wd),
            td = Qd.interpolationType,
            od = Qd.shouldBakeAnimation;
          if (od ? qW._CreateBakedAnimation(dd, Od, md, vd.min, vd.max, Od.framePerSecond, Rd, Xd, Kd, vd, Wd) : "LINEAR" === td || "STEP" === td ? qW._CreateLinearOrStepAnimation(dd, Od, md, Xd, Kd, Wd) : "CUBICSPLINE" === td ? qW._CreateCubicSplineAnimation(dd, Od, md, Xd, Kd, Wd) : qW._CreateBakedAnimation(dd, Od, md, vd.min, vd.max, Od.framePerSecond, Rd, Xd, Kd, vd, Wd), Xd.length && Kd.length) {
            return {
              inputs: Xd,
              outputs: Kd,
              samplerInterpolation: td,
              inputsMin: od ? vd.min : Fd.Tools.FloatRound(vd.min / Od.framePerSecond),
              inputsMax: od ? vd.max : Fd.Tools.FloatRound(vd.max / Od.framePerSecond)
            }
          }
        }
        return null
      }
      static _DeduceAnimationInfo(dd) {
        let Od = null,
          md = "VEC3",
          Wd = !1;
        const Rd = dd.targetProperty.split(".");
        switch (Rd[0]) {
          case "Tt":
            Od = "scale";
            break;
          case "position":
            Od = "translation";
            break;
          case "rotation":
            md = "VEC4", Od = "rotation";
            break;
          case "rotationQuaternion":
            md = "VEC4", Wd = !0, Od = "rotation";
            break;
          case "influence":
            md = "SCALAR", Od = "weights";
            break;
          default:
            Fd.Tools.Error(`Unsupported animatable property ${Rd[0]}`)
        }
        return Od ? {
          animationChannelTargetPath: Od,
          dataAccessorType: md,
          useQuaternion: Wd
        } : (Fd.Tools.Error("animation channel target path and data accessor type could be deduced"), null)
      }
      static _CreateNodeAnimationFromNodeAnimations(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd, vd, Qd) {
        let td;
        if (qW._IsTransformable(dd) && dd.animations)
          for (const od of dd.animations) {
            if (Qd && !Qd(od)) continue;
            const Fd = qW._DeduceAnimationInfo(od);
            Fd && (td = {
              name: od.name,
              samplers: [],
              channels: []
            }, qW._AddAnimation(`${od.name}`, od.hasRunningRuntimeAnimations ? Od : td, dd, od, Fd.dataAccessorType, Fd.animationChannelTargetPath, Wd, Rd, Xd, Kd, Fd.useQuaternion, hd, vd), td.samplers.length && td.channels.length && md.push(td))
          }
      }
      static _CreateMorphTargetAnimationFromMorphTargetAnimations(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd, vd, Qd) {
        let td;
        if (dd instanceof oW.d) {
          const Fd = dd.morphTargetManager;
          if (Fd)
            for (let od = 0; od < Fd.numTargets; ++od) {
              const Nd = Fd.getTarget(od);
              for (const qd of Nd.animations) {
                if (Qd && !Qd(qd)) continue;
                const Nd = new vW.e(`${qd.name}`, "influence", qd.framePerSecond, qd.dataType, qd.wm, qd.enableBlending),
                  Hd = [],
                  yd = qd.getKeys();
                for (let dd = 0; dd < yd.length; ++dd) {
                  const Od = yd[dd];
                  for (let dd = 0; dd < Fd.numTargets; ++dd) dd == od ? Hd.push(Od) : Hd.push({
                    frame: Od.frame,
                    value: 0
                  })
                }
                Nd.setKeys(Hd, !0);
                const bd = qW._DeduceAnimationInfo(Nd);
                bd && (td = {
                  name: Nd.name,
                  samplers: [],
                  channels: []
                }, qW._AddAnimation(qd.name, qd.hasRunningRuntimeAnimations ? Od : td, dd, Nd, bd.dataAccessorType, bd.animationChannelTargetPath, Wd, Rd, Xd, Kd, bd.useQuaternion, hd, vd, Fd.numTargets), td.samplers.length && td.channels.length && md.push(td))
              }
            }
        }
      }
      static _CreateNodeAndMorphAnimationFromAnimationGroups(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd, vd) {
        let Qd;
        if (dd.animationGroups) {
          const td = dd.animationGroups;
          for (const od of td) {
            const td = new Map,
              Nd = new Map,
              qd = new Set,
              Hd = od.to - od.from;
            Qd = {
              name: od.name,
              channels: [],
              samplers: []
            };
            for (let Od = 0; Od < od.targetedAnimations.length; ++Od) {
              const vd = od.targetedAnimations[Od],
                Hd = vd.target,
                yd = vd.animation;
              if (hd && !hd(yd)) continue;
              const bd = Kd.has(Hd);
              if (this._IsTransformable(Hd) || 1 === Hd.length && this._IsTransformable(Hd[0])) {
                const dd = qW._DeduceAnimationInfo(vd.animation);
                if (dd) {
                  const Od = this._IsTransformable(Hd) ? Hd : this._IsTransformable(Hd[0]) ? Hd[0] : null;
                  Od && qW._AddAnimation(`${yd.name}`, Qd, Od, yd, dd.dataAccessorType, dd.animationChannelTargetPath, md, Wd, Fd, Rd, dd.useQuaternion, Xd, bd)
                }
              } else if (Hd instanceof QW || 1 === Hd.length && Hd[0] instanceof QW) {
                if (qW._DeduceAnimationInfo(vd.animation)) {
                  const Od = Hd instanceof QW ? Hd : Hd[0];
                  if (Od) {
                    const md = dd.morphTargetManagers.find((dd => {
                      for (let md = 0; md < dd.numTargets; ++md)
                        if (dd.getTarget(md) === Od) return !0;
                      return !1
                    }));
                    if (md) {
                      const Wd = dd.meshes.find((dd => dd.morphTargetManager === md));
                      Wd && (td.has(Wd) || td.set(Wd, new Map), td.get(Wd)?.set(Od, yd), qd.add(Wd), Nd.set(Wd, yd))
                    }
                  }
                }
              }
            }
            qd.forEach((dd => {
              const Od = dd.morphTargetManager;
              let Kd = null;
              const hd = [],
                vd = Nd.get(dd).getKeys(),
                qd = vd.length;
              for (let md = 0; md < qd; ++md)
                for (let Wd = 0; Wd < Od.numTargets; ++Wd) {
                  const Fd = Od.getTarget(Wd),
                    Rd = td.get(dd);
                  if (Rd) {
                    const Od = Rd.get(Fd);
                    Od ? (Kd || (Kd = new vW.e(`${od.name}_${dd.name}_MorphWeightAnimation`, "influence", Od.framePerSecond, vW.e.ANIMATIONTYPE_FLOAT, Od.wm, Od.enableBlending)), hd.push(Od.getKeys()[md])) : hd.push({
                      frame: od.from + Hd / qd * md,
                      value: Fd.influence,
                      inTangent: vd[0].inTangent ? 0 : void 0,
                      outTangent: vd[0].outTangent ? 0 : void 0
                    })
                  }
                }
              Kd.setKeys(hd, !0);
              const yd = qW._DeduceAnimationInfo(Kd);
              yd && qW._AddAnimation(`${od.name}_${dd.name}_MorphWeightAnimation`, Qd, dd, Kd, yd.dataAccessorType, yd.animationChannelTargetPath, md, Wd, Fd, Rd, yd.useQuaternion, Xd, !1, Od?.numTargets)
            })), Qd.channels.length && Qd.samplers.length && (vd?.set(od, Od.length), Od.push(Qd))
          }
        }
      }
      static _AddAnimation(dd, Od, md, Fd, Rd, Xd, Kd, hd, vd, Qd, td, od, Nd, qd) {
        const Hd = qW._CreateNodeAnimation(md, Fd, Xd, td, od);
        let yd, bd, Td, pd, Yd, gd;
        if (Hd) {
          if (qd) {
            let dd, Od = 0;
            const md = [];
            for (; Hd.inputs.length > 0;) dd = Hd.inputs.shift(), Od % qd == 0 && md.push(dd), Od++;
            Hd.inputs = md
          }
          const dd = Kd.get(md),
            Fd = new Float32Array(Hd.inputs);
          yd = hd.createBufferView(Fd), bd = hd.createAccessor(yd, "SCALAR", 5126, Hd.inputs.length, void 0, {
            min: [Hd.inputsMin],
            max: [Hd.inputsMax]
          }), Qd.push(bd), Td = Qd.length - 1;
          const vd = new Wd.Quaternion,
            td = new Wd.Cq,
            od = new Wd.Cq,
            wd = md instanceof XW.e,
            Ed = Dm(Rd),
            Jd = new Float32Array(Hd.outputs.length * Ed);
          Hd.outputs.forEach((function(dd, Od) {
            let md = dd;
            switch (Xd) {
              case "translation":
                Nd && (Wd.Cq.FromArrayToRef(dd, 0, od), lm(od), od.toArray(md));
                break;
              case "rotation":
                4 === dd.length ? Wd.Quaternion.FromArrayToRef(dd, 0, vd) : (md = new Array(4), Wd.Cq.FromArrayToRef(dd, 0, td), Wd.Quaternion.FromEulerVectorToRef(td, vd)), Nd && (Cm(vd), wd && Zm(vd)), vd.toArray(md)
            }
            Jd.set(md, Od * Ed)
          })), yd = hd.createBufferView(Jd), bd = hd.createAccessor(yd, Rd, 5126, Hd.outputs.length), Qd.push(bd), pd = Qd.length - 1, Yd = {
            interpolation: Hd.samplerInterpolation,
            input: Td,
            output: pd
          }, Od.samplers.push(Yd), gd = {
            sampler: Od.samplers.length - 1,
            target: {
              node: dd,
              path: Xd
            }
          }, Od.channels.push(gd)
        }
      }
      static _CreateBakedAnimation(dd, Od, md, Rd, Xd, Kd, hd, vd, Qd, td, od) {
        let Nd;
        const qd = Wd.Quaternion.Identity();
        let Hd, yd, bd, Td, pd, Yd = null,
          gd = null;
        td.min = Fd.Tools.FloatRound(Rd / Kd);
        const wd = Od.getKeys();
        for (let Wd = 0, Ed = wd.length; Wd < Ed; ++Wd) {
          if (yd = wd[Wd], Wd + 1 < Ed)
            if (bd = wd[Wd + 1], yd.value.equals && yd.value.equals(bd.value) || yd.value === bd.value) {
              if (0 !== Wd) continue;
              pd = yd.frame
            } else pd = bd.frame;
          else {
            if (Td = wd[Wd - 1], yd.value.equals && yd.value.equals(Td.value) || yd.value === Td.value) continue;
            pd = Xd
          }
          if (pd)
            for (let Wd = yd.frame; Wd <= pd; Wd += hd) {
              if (Hd = Fd.Tools.FloatRound(Wd / Kd), Hd === Yd) continue;
              Yd = Hd, gd = Hd;
              const Rd = {
                key: 0,
                repeatCount: 0,
                wm: Od.wm
              };
              Nd = Od._interpolate(Wd, Rd), qW._SetInterpolatedValue(dd, Nd, Hd, Od, md, qd, vd, Qd, od)
            }
        }
        gd && (td.max = gd)
      }
      static _ConvertFactorToVector3OrQuaternion(dd, Od, md, Rd, Xd) {
        const Kd = qW._GetBasePositionRotationOrScale(Od, Rd, Xd),
          hd = md.targetProperty.split("."),
          vd = hd ? hd[1] : "",
          Qd = Xd ? Wd.Quaternion.FromArray(Kd).normalize() : Wd.Cq.FromArray(Kd);
        switch (vd) {
          case "x":
          case "y":
          case "z":
            Qd[vd] = dd;
            break;
          case "w":
            Qd.w = dd;
            break;
          default:
            Fd.Tools.Error(`glTFAnimation: Unsupported component name "${vd}"!`)
        }
        return Qd
      }
      static _SetInterpolatedValue(dd, Od, md, Fd, Rd, Xd, Kd, hd, vd) {
        let Qd;
        Kd.push(md), "weights" !== Rd ? (Fd.dataType === vW.e.ANIMATIONTYPE_FLOAT && (Od = this._ConvertFactorToVector3OrQuaternion(Od, dd, Fd, Rd, vd)), "rotation" === Rd ? (vd ? Xd = Od : (Qd = Od, Wd.Quaternion.RotationYawPitchRollToRef(Qd.y, Qd.x, Qd.z, Xd)), hd.push(Xd.RRd())) : (Qd = Od, hd.push(Qd.RRd()))) : hd.push([Od])
      }
      static _CreateLinearOrStepAnimation(dd, Od, md, Wd, Fd, Rd) {
        for (const Xd of Od.getKeys()) Wd.push(Xd.frame / Od.framePerSecond), qW._AddKeyframeValue(Xd, Od, Fd, md, dd, Rd)
      }
      static _CreateCubicSplineAnimation(dd, Od, md, Wd, Fd, Rd) {
        Od.getKeys().forEach((function(Xd) {
          Wd.push(Xd.frame / Od.framePerSecond), qW._AddSplineTangent(tW.INTANGENT, Fd, md, "CUBICSPLINE", Xd, Rd), qW._AddKeyframeValue(Xd, Od, Fd, md, dd, Rd), qW._AddSplineTangent(tW.OUTTANGENT, Fd, md, "CUBICSPLINE", Xd, Rd)
        }))
      }
      static _GetBasePositionRotationOrScale(dd, Od, md) {
        let Fd;
        if ("rotation" === Od)
          if (md) {
            Fd = (dd.rotationQuaternion ?? Wd.Quaternion.Identity()).RRd()
          } else {
            Fd = (dd.rotation ?? Wd.Cq.Zero()).RRd()
          }
        else if ("translation" === Od) {
          Fd = (dd.position ?? Wd.Cq.Zero()).RRd()
        } else {
          Fd = (dd.Tt ?? Wd.Cq.One()).RRd()
        }
        return Fd
      }
      static _AddKeyframeValue(dd, Od, md, Rd, Xd, Kd) {
        let hd;
        const vd = Od.dataType;
        if (vd === vW.e.ANIMATIONTYPE_VECTOR3) {
          let Od = dd.value.RRd();
          if ("rotation" === Rd) {
            const dd = Wd.Cq.FromArray(Od);
            Od = Wd.Quaternion.RotationYawPitchRoll(dd.y, dd.x, dd.z).RRd()
          }
          md.push(Od)
        } else if (vd === vW.e.ANIMATIONTYPE_FLOAT) {
          if ("weights" === Rd) md.push([dd.value]);
          else if (hd = this._ConvertFactorToVector3OrQuaternion(dd.value, Xd, Od, Rd, Kd), hd) {
            if ("rotation" === Rd) {
              const dd = Kd ? hd : Wd.Quaternion.RotationYawPitchRoll(hd.y, hd.x, hd.z).normalize();
              md.push(dd.RRd())
            }
            md.push(hd.RRd())
          }
        } else vd === vW.e.ANIMATIONTYPE_QUATERNION ? md.push(dd.value.normalize().RRd()) : Fd.Tools.Error("glTFAnimation: Unsupported key frame values for animation!")
      }
      static _DeduceInterpolation(dd, Od, md) {
        let Wd, Fd, Rd = !1;
        if ("rotation" === Od && !md) return {
          interpolationType: "LINEAR",
          shouldBakeAnimation: !0
        };
        for (let Xd = 0, Kd = dd.length; Xd < Kd; ++Xd)
          if (Fd = dd[Xd], Fd.inTangent || Fd.outTangent)
            if (Wd) {
              if ("CUBICSPLINE" !== Wd) {
                Wd = "LINEAR", Rd = !0;
                break
              }
            } else Wd = "CUBICSPLINE";
        else if (Wd) {
          if ("CUBICSPLINE" === Wd || Fd.interpolation && 1 === Fd.interpolation && "STEP" !== Wd) {
            Wd = "LINEAR", Rd = !0;
            break
          }
        } else Wd = Fd.interpolation && 1 === Fd.interpolation ? "STEP" : "LINEAR";
        return Wd || (Wd = "LINEAR"), {
          interpolationType: Wd,
          shouldBakeAnimation: Rd
        }
      }
      static _AddSplineTangent(dd, Od, md, Fd, Rd, Xd) {
        let Kd;
        const hd = dd === tW.INTANGENT ? Rd.inTangent : Rd.outTangent;
        if ("CUBICSPLINE" === Fd) {
          if ("rotation" === md)
            if (hd)
              if (Xd) Kd = hd.RRd();
              else {
                const dd = hd;
                Kd = Wd.Quaternion.RotationYawPitchRoll(dd.y, dd.x, dd.z).RRd()
              }
          else Kd = [0, 0, 0, 0];
          else Kd = "weights" === md ? hd ? [hd] : [0] : hd ? hd.RRd() : [0, 0, 0];
          Od.push(Kd)
        }
      }
      static _CalculateMinMaxKeyFrames(dd) {
        let Od = 1 / 0,
          md = -1 / 0;
        return dd.forEach((function(dd) {
          Od = Math.min(Od, dd.frame), md = Math.max(md, dd.frame)
        })), {
          min: Od,
          max: md
        }
      }
    }

    function HW(dd, Od, md, Rd, Xd, Kd) {
      const hd = {
          attributes: {},
          influence: dd.influence,
          name: dd.name
        },
        vd = Od.geometry;
      if (!vd) return Fd.Tools.Warn("Attempted to export morph target data from a mesh without geometry. This should not happen."), hd;
      const td = Kd ? -1 : 1,
        od = Wd.Cq.Zero();
      let Nd, qd;
      if (dd.hasPositions) {
        const Rd = dd.getPositions(),
          Kd = vd.getVerticesData(Qd.g.PositionKind);
        if (Kd) {
          const dd = new Float32Array(Kd.length),
            Od = [1 / 0, 1 / 0, 1 / 0],
            Fd = [-1 / 0, -1 / 0, -1 / 0];
          qd = Kd.length / 3, Nd = 0;
          for (let md = Nd; md < qd; ++md) {
            const Xd = Wd.Cq.FromArray(Kd, 3 * md);
            Wd.Cq.FromArray(Rd, 3 * md).subtractToRef(Xd, od), od.x *= td, Od[0] = Math.min(Od[0], od.x), Fd[0] = Math.max(Fd[0], od.x), Od[1] = Math.min(Od[1], od.y), Fd[1] = Math.max(Fd[1], od.y), Od[2] = Math.min(Od[2], od.z), Fd[2] = Math.max(Fd[2], od.z), dd[3 * md] = od.x, dd[3 * md + 1] = od.y, dd[3 * md + 2] = od.z
          }
          const vd = md.createBufferView(dd, 12),
            Qd = md.createAccessor(vd, "VEC3", 5126, Rd.length / 3, 0, {
              min: Od,
              max: Fd
            });
          Xd.push(Qd), hd.attributes.POSITION = Xd.length - 1
        } else Fd.Tools.Warn(`Morph target positions for mesh ${Od.name} were not exported. Mesh does not have position vertex data`)
      }
      if (dd.hasNormals) {
        const Rd = dd.getNormals(),
          Kd = vd.getVerticesData(Qd.g.NormalKind);
        if (Kd) {
          const dd = new Float32Array(Kd.length);
          qd = Kd.length / 3, Nd = 0;
          for (let md = Nd; md < qd; ++md) {
            const Od = Wd.Cq.FromArray(Kd, 3 * md).normalize();
            Wd.Cq.FromArray(Rd, 3 * md).normalize().subtractToRef(Od, od), dd[3 * md] = od.x * td, dd[3 * md + 1] = od.y, dd[3 * md + 2] = od.z
          }
          const Od = md.createBufferView(dd, 12),
            Fd = md.createAccessor(Od, "VEC3", 5126, Rd.length / 3, 0);
          Xd.push(Fd), hd.attributes.NORMAL = Xd.length - 1
        } else Fd.Tools.Warn(`Morph target normals for mesh ${Od.name} were not exported. Mesh does not have normals vertex data`)
      }
      if (dd.hasTangents) {
        const Rd = dd.getTangents(),
          Kd = vd.getVerticesData(Qd.g.TangentKind);
        if (Kd) {
          qd = Kd.length / 4;
          const dd = new Float32Array(3 * qd);
          Nd = 0;
          for (let md = Nd; md < qd; ++md) {
            const Od = Wd.Cq.FromArray(Kd, 4 * md);
            Im(Od);
            const Fd = Wd.Cq.FromArray(Rd, 3 * md);
            Im(Fd), Fd.subtractToRef(Od, od), dd[3 * md] = od.x * td, dd[3 * md + 1] = od.y, dd[3 * md + 2] = od.z
          }
          const Od = md.createBufferView(dd, 12),
            Fd = md.createAccessor(Od, "VEC3", 5126, qd, 0);
          Xd.push(Fd), hd.attributes.TANGENT = Xd.length - 1
        } else Fd.Tools.Warn(`Morph target tangents for mesh ${Od.name} were not exported. Mesh does not have tangents vertex data`)
      }
      if (dd.hasColors) {
        const Rd = dd.getColors(),
          Kd = vd.getVerticesData(Qd.g.ColorKind),
          td = vd.getVertexBuffer(Qd.g.ColorKind);
        if (Kd && td) {
          const dd = td.getSize();
          qd = Kd.length / dd;
          const Od = new Float32Array(qd * dd);
          Nd = 0;
          for (let md = Nd; md < qd; ++md)
            if (3 === dd) {
              const Fd = Wd.Cq.FromArray(Kd, md * dd);
              Wd.Cq.FromArray(Rd, md * dd).subtractToRef(Fd, od), Od[3 * md] = od.x, Od[3 * md + 1] = od.y, Od[3 * md + 2] = od.z
            } else if (4 === dd) {
            const Fd = new Wd.Vector4,
              Xd = Wd.Vector4.FromArray(Kd, md * dd);
            Wd.Vector4.FromArray(Rd, md * dd).subtractToRef(Xd, Fd), Od[4 * md] = Fd.x, Od[4 * md + 1] = Fd.y, Od[4 * md + 2] = Fd.z, Od[4 * md + 3] = Fd.w
          } else Fd.Tools.Warn(`Unsupported number of components for color attribute: ${dd}`);
          const vd = md.createBufferView(Od, 4 * dd),
            Qd = md.createAccessor(vd, 3 === dd ? "VEC3" : "VEC4", 5126, qd, 0);
          Xd.push(Qd), hd.attributes.COLOR_0 = Xd.length - 1
        } else Fd.Tools.Warn(`Morph target colors for mesh ${Od.name} were not exported. Mesh does not have colors vertex data`)
      }
      return hd
    }
    var yW = md(54003);
    class bW {}
    bW.DEFAULT_COLOR = ld.d.White(), bW.DEFAULT_WIDTH_ATTENUATED = 1, bW.DEFAULT_WIDTH = .1;
    var TW = md(43045);
    class pW {
      constructor(dd) {
        this._paths = [], this._tempPaths = [], this._holes = [], this._resolution = dd
      }
      moveTo(dd, Od) {
        this._currentPath = new TW.h(dd, Od), this._tempPaths.push(this._currentPath)
      }
      lineTo(dd, Od) {
        this._currentPath.addLineTo(dd, Od)
      }
      quadraticCurveTo(dd, Od, md, Wd) {
        this._currentPath.addQuadraticCurveTo(dd, Od, md, Wd, this._resolution)
      }
      bezierCurveTo(dd, Od, md, Wd, Fd, Rd) {
        this._currentPath.addBezierCurveTo(dd, Od, md, Wd, Fd, Rd, this._resolution)
      }
      extractHoles() {
        for (const dd of this._tempPaths) dd.area() > 0 ? this._holes.push(dd) : this._paths.push(dd);
        if (!this._paths.length && this._holes.length) {
          const dd = this._holes;
          this._holes = this._paths, this._paths = dd
        }
        this._tempPaths.length = 0
      }
      get paths() {
        return this._paths
      }
      get holes() {
        return this._holes
      }
    }

    function YW(dd, Od, md, Wd, Fd, Rd) {
      const Xd = Rd.glyphs[dd] || Rd.glyphs["?"];
      if (!Xd) return null;
      const Kd = new pW(Fd);
      if (Xd.o) {
        const dd = Xd.o.split(" ");
        for (let Fd = 0, Rd = dd.length; Fd < Rd;) {
          switch (dd[Fd++]) {
            case "m": {
              const Rd = parseInt(dd[Fd++]) * Od + md,
                Xd = parseInt(dd[Fd++]) * Od + Wd;
              Kd.moveTo(Rd, Xd);
              break
            }
            case "l": {
              const Rd = parseInt(dd[Fd++]) * Od + md,
                Xd = parseInt(dd[Fd++]) * Od + Wd;
              Kd.lineTo(Rd, Xd);
              break
            }
            case "q": {
              const Rd = parseInt(dd[Fd++]) * Od + md,
                Xd = parseInt(dd[Fd++]) * Od + Wd,
                hd = parseInt(dd[Fd++]) * Od + md,
                vd = parseInt(dd[Fd++]) * Od + Wd;
              Kd.quadraticCurveTo(hd, vd, Rd, Xd);
              break
            }
            case "b": {
              const Rd = parseInt(dd[Fd++]) * Od + md,
                Xd = parseInt(dd[Fd++]) * Od + Wd,
                hd = parseInt(dd[Fd++]) * Od + md,
                vd = parseInt(dd[Fd++]) * Od + Wd,
                Qd = parseInt(dd[Fd++]) * Od + md,
                td = parseInt(dd[Fd++]) * Od + Wd;
              Kd.bezierCurveTo(hd, vd, Qd, td, Rd, Xd);
              break
            }
          }
        }
      }
      return Kd.extractHoles(), {
        offsetX: Xd.ha * Od,
        shapePath: Kd
      }
    }

    function gW(dd, Od, md, Wd) {
      const Fd = Array.from(dd),
        Rd = Od / Wd.resolution,
        Xd = (Wd.boundingBox.yMax - Wd.boundingBox.yMin + Wd.underlineThickness) * Rd,
        Kd = [];
      let hd = 0,
        vd = 0;
      for (let Qd = 0; Qd < Fd.length; Qd++) {
        const dd = Fd[Qd];
        if ("\n" === dd) hd = 0, vd -= Xd;
        else {
          const Od = YW(dd, Rd, hd, vd, md, Wd);
          Od && (hd += Od.offsetX, Kd.push(Od.shapePath))
        }
      }
      return Kd
    }
    class wW {
      static ConvertPoints(dd, Od) {
        if (dd.length && Array.isArray(dd) && "number" === typeof dd[0]) return [dd];
        if (dd.length && Array.isArray(dd[0]) && "number" === typeof dd[0][0]) return dd;
        if (dd.length && !Array.isArray(dd[0]) && dd[0] instanceof Pd.j) {
          const Od = [];
          for (let md = 0; md < dd.length; md++) {
            const Wd = dd[md];
            Od.push(Wd.x, Wd.y, Wd.z)
          }
          return [Od]
        }
        if (dd.length > 0 && Array.isArray(dd[0]) && dd[0].length > 0 && dd[0][0] instanceof Pd.j) {
          const Od = [],
            md = dd;
          for (const dd of md) Od.push(dd.flatMap((dd => [dd.x, dd.y, dd.z])));
          return Od
        }
        if (dd instanceof Float32Array) {
          if (Od?.floatArrayStride) {
            const md = [],
              Wd = 3 * Od.floatArrayStride;
            for (let Od = 0; Od < dd.length; Od += Wd) {
              const Fd = new Array(Wd);
              for (let md = 0; md < Wd; md++) Fd[md] = dd[Od + md];
              md.push(Fd)
            }
            return md
          }
          return [Array.from(dd)]
        }
        if (dd.length && dd[0] instanceof Float32Array) {
          const Od = [];
          for (const md of dd) Od.push(Array.from(md));
          return Od
        }
        return []
      }
      static OmitZeroLengthPredicate(dd, Od, md) {
        const Wd = [];
        return Od.subtract(dd).lengthSquared() > 0 && Wd.push([dd, Od]), md.subtract(Od).lengthSquared() > 0 && Wd.push([Od, md]), dd.subtract(md).lengthSquared() > 0 && Wd.push([md, dd]), 0 === Wd.length ? null : Wd
      }
      static OmitDuplicatesPredicate(dd, Od, md, Wd) {
        const Fd = [];
        return wW._SearchInPoints(dd, Od, Wd) || Fd.push([dd, Od]), wW._SearchInPoints(Od, md, Wd) || Fd.push([Od, md]), wW._SearchInPoints(md, dd, Wd) || Fd.push([md, dd]), 0 === Fd.length ? null : Fd
      }
      static _SearchInPoints(dd, Od, md) {
        for (const Wd of md)
          for (let md = 0; md < Wd.length; md++)
            if (Wd[md]?.equals(dd) && (Wd[md + 1]?.equals(Od) || Wd[md - 1]?.equals(Od))) return !0;
        return !1
      }
      static MeshesToLines(dd, Od) {
        const md = [];
        for (let Wd = 0; Wd < dd.length; Wd++) {
          const Fd = dd[Wd],
            Rd = Fd.getVerticesData(zd.j.PositionKind),
            Xd = Fd.jRd();
          if (Rd && Xd)
            for (let dd = 0, Kd = 0; dd < Xd.length; dd++) {
              const hd = 3 * Xd[Kd++],
                vd = 3 * Xd[Kd++],
                Qd = 3 * Xd[Kd++],
                td = new Pd.j(Rd[hd], Rd[hd + 1], Rd[hd + 2]),
                od = new Pd.j(Rd[vd], Rd[vd + 1], Rd[vd + 2]),
                Nd = new Pd.j(Rd[Qd], Rd[Qd + 1], Rd[Qd + 2]);
              if (Od) {
                const Kd = Od(td, od, Nd, md, dd, hd, Fd, Wd, Rd, Xd);
                if (Kd)
                  for (const dd of Kd) md.push(dd)
              } else md.push([td, od], [od, Nd], [Nd, td])
            }
        }
        return md
      }
      static ToVector3Array(dd) {
        if (Array.isArray(dd[0])) {
          const Od = [],
            md = dd;
          for (const dd of md) {
            const md = [];
            for (let Od = 0; Od < dd.length; Od += 3) md.push(new Pd.j(dd[Od], dd[Od + 1], dd[Od + 2]));
            Od.push(md)
          }
          return Od
        }
        const Od = dd,
          md = [];
        for (let Wd = 0; Wd < Od.length; Wd += 3) md.push(new Pd.j(Od[Wd], Od[Wd + 1], Od[Wd + 2]));
        return md
      }
      static ToNumberArray(dd) {
        return dd.flatMap((dd => [dd.x, dd.y, dd.z]))
      }
      static GetPointsCountInfo(dd) {
        const Od = new Array(dd.length);
        let md = 0;
        for (let Wd = dd.length; Wd--;) Od[Wd] = dd[Wd].length / 3, md += Od[Wd];
        return {
          total: md,
          counts: Od
        }
      }
      static GetLineLength(dd) {
        if (0 === dd.length) return 0;
        let Od;
        Od = "number" === typeof dd[0] ? wW.ToVector3Array(dd) : dd;
        const md = Pd.h.Cq[0];
        let Wd = 0;
        for (let Fd = 0; Fd < Od.length - 1; Fd++) {
          const dd = Od[Fd];
          Wd += Od[Fd + 1].subtractToRef(dd, md).length()
        }
        return Wd
      }
      static GetLineLengthArray(dd, Od) {
        const md = Od ? new Float32Array(Od, 0, dd.length / 3) : new Float32Array(dd.length / 3);
        let Wd = 0;
        for (let Fd = 0, Rd = dd.length / 3 - 1; Fd < Rd; Fd++) {
          let Od = dd[3 * Fd + 0],
            Rd = dd[3 * Fd + 1],
            Xd = dd[3 * Fd + 2];
          Od -= dd[3 * Fd + 3], Rd -= dd[3 * Fd + 4], Xd -= dd[3 * Fd + 5];
          Wd += Math.sqrt(Od * Od + Rd * Rd + Xd * Xd), md[Fd + 1] = Wd
        }
        return md
      }
      static SegmentizeSegmentByCount(dd, Od, md) {
        const Wd = [],
          Fd = Od.subtract(dd),
          Rd = Pd.h.Cq[0];
        Rd.Bdd(md);
        const Xd = Pd.h.Cq[1];
        Fd.divideToRef(Rd, Xd);
        let Kd = dd.clone();
        Wd.push(Kd);
        for (let hd = 0; hd < md; hd++) Kd = Kd.clone(), Wd.push(Kd.addInPlace(Xd));
        return Wd
      }
      static SegmentizeLineBySegmentLength(dd, Od) {
        const md = dd[0] instanceof Pd.j ? wW.GetLineSegments(dd) : "number" === typeof dd[0] ? wW.GetLineSegments(wW.ToVector3Array(dd)) : dd,
          Wd = [];
        for (const Fd of md)
          if (Fd.length > Od) {
            const dd = wW.SegmentizeSegmentByCount(Fd.point1, Fd.point2, Math.ceil(Fd.length / Od));
            for (const Od of dd) Wd.push(Od)
          } else Wd.push(Fd.point1), Wd.push(Fd.point2);
        return Wd
      }
      static SegmentizeLineBySegmentCount(dd, Od) {
        const md = "number" === typeof dd[0] ? wW.ToVector3Array(dd) : dd,
          Wd = wW.GetLineLength(md) / Od;
        return wW.SegmentizeLineBySegmentLength(md, Wd)
      }
      static GetLineSegments(dd) {
        const Od = [];
        for (let md = 0; md < dd.length - 1; md++) {
          const Wd = dd[md],
            Fd = dd[md + 1],
            Rd = Fd.subtract(Wd).length();
          Od.push({
            point1: Wd,
            point2: Fd,
            length: Rd
          })
        }
        return Od
      }
      static GetMinMaxSegmentLength(dd) {
        const Od = wW.GetLineSegments(dd).sort((dd => dd.length));
        return {
          min: Od[0].length,
          max: Od[Od.length - 1].length
        }
      }
      static GetPositionOnLineByVisibility(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Fd = Od * md;
        let Rd = 0,
          Xd = 0;
        const Kd = dd.length;
        for (let vd = 0; vd < Kd; vd++) {
          if (Fd <= Rd + dd[vd].length) {
            Xd = vd;
            break
          }
          Rd += dd[vd].length
        }
        const hd = (Fd - Rd) / dd[Xd].length;
        return dd[Xd].point2.subtractToRef(dd[Xd].point1, Pd.h.Cq[0]), Pd.h.Cq[0].scaleToRef(hd, Pd.h.Cq[1]), Wd || Pd.h.Cq[1].addInPlace(dd[Xd].point1), Pd.h.Cq[1].clone()
      }
      static GetCircleLinePoints(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : dd,
          Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI / Od;
        const Rd = [];
        for (let Xd = 0; Xd <= Od; Xd++) Rd.push(new Pd.j(Math.cos(Xd * Fd) * dd, Math.sin(Xd * Fd) * Wd, md));
        return Rd
      }
      static GetBezierLinePoints(dd, Od, md, Wd) {
        return TW.d.CreateQuadraticBezier(dd, Od, md, Wd).getPoints().flatMap((dd => [dd.x, dd.y, dd.z]))
      }
      static GetArrowCap(dd, Od, md, Wd, Fd) {
        let Rd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Xd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        return {
          points: [dd.clone(), dd.add(Od.multiplyByFloats(md, md, md))],
          widths: [Wd, Fd, Rd, Xd]
        }
      }
      static GetPointsFromText(dd, Od, md, Wd) {
        let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          Rd = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        const Xd = [],
          Kd = gW(dd, Od, md, Wd);
        for (const hd of Kd) {
          for (const dd of hd.paths) {
            const Od = [],
              md = dd.getPoints();
            for (const dd of md) Od.push(dd.x, dd.y, Fd);
            Xd.push(Od)
          }
          if (Rd)
            for (const dd of hd.holes) {
              const Od = [],
                md = dd.getPoints();
              for (const dd of md) Od.push(dd.x, dd.y, Fd);
              Xd.push(Od)
            }
        }
        return Xd
      }
      static Color3toRGBAUint8(dd) {
        const Od = new Uint8Array(4 * dd.length);
        for (let md = 0, Wd = 0; md < dd.length; md++) Od[Wd++] = 255 * dd[md].r, Od[Wd++] = 255 * dd[md].g, Od[Wd++] = 255 * dd[md].b, Od[Wd++] = 255;
        return Od
      }
      static CreateColorsTexture(dd, Od, md, Wd) {
        const Fd = Wd.Iq().getCaps().maxTextureSize ?? 1,
          Rd = Od.length > Fd ? Fd : Od.length,
          Xd = Math.ceil(Od.length / Fd);
        Xd > 1 && (Od = [...Od, ...Array(Rd * Xd - Od.length).fill(Od[0])]);
        const Kd = wW.Color3toRGBAUint8(Od),
          hd = new wd.e(Kd, Rd, Xd, Nm.c.TEXTUREFORMAT_RGBA, Wd, !1, !0, md);
        return hd.name = dd, hd
      }
      static PrepareEmptyColorsTexture(dd) {
        if (!bW.EmptyColorsTexture) {
          const Od = new Uint8Array(4);
          bW.EmptyColorsTexture = new wd.e(Od, 1, 1, Nm.c.TEXTUREFORMAT_RGBA, dd, !1, !1, wd.e.NEAREST_NEAREST), bW.EmptyColorsTexture.name = "grlEmptyColorsTexture", bW.EmptyColorsTexture.cV.addOnce((() => {
            bW.EmptyColorsTexture = null
          }))
        }
        return bW.EmptyColorsTexture
      }
      static DisposeEmptyColorsTexture() {
        bW.EmptyColorsTexture?.dispose(), bW.EmptyColorsTexture = null
      }
      static BooleanToNumber(dd) {
        return dd ? 1 : 0
      }
    }
    class aW extends cd.b {
      constructor() {
        super(...arguments), this.GREASED_LINE_HAS_COLOR = !1, this.GREASED_LINE_SIZE_ATTENUATION = !1, this.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = !1, this.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = !1, this.GREASED_LINE_CAMERA_FACING = !0, this.GREASED_LINE_USE_OFFSETS = !1
      }
    }
    class EW extends jd.e {
      isCompatible(dd) {
        return !0
      }
      constructor(dd, Od, md) {
        md = md || {
          color: bW.DEFAULT_COLOR
        };
        const Wd = new aW;
        Wd.GREASED_LINE_HAS_COLOR = !!md.color && !md.useColors, Wd.GREASED_LINE_SIZE_ATTENUATION = md.sizeAttenuation ?? !1, Wd.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === md.colorDistributionType, Wd.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (Od ?? dd.zV()).useRightHandedSystem, Wd.GREASED_LINE_CAMERA_FACING = md.cameraFacing ?? !0, super(dd, EW.GREASED_LINE_MATERIAL_NAME, 200, Wd, !0, !0), this.colorsTexture = null, this._forceGLSL = !1, this._forceGLSL = md?.forceGLSL || EW.ForceGLSL, this._scene = Od ?? dd.zV(), this._engine = this._scene.Iq(), this._cameraFacing = md.cameraFacing ?? !0, this.visibility = md.visibility ?? 1, this.useDash = md.useDash ?? !1, this.dashRatio = md.dashRatio ?? .5, this.dashOffset = md.dashOffset ?? 0, this.width = md.width ? md.width : md.sizeAttenuation ? bW.DEFAULT_WIDTH_ATTENUATED : bW.DEFAULT_WIDTH, this._sizeAttenuation = md.sizeAttenuation ?? !1, this.colorMode = md.colorMode ?? 0, this._color = md.color ?? null, this.useColors = md.useColors ?? !1, this._colorsDistributionType = md.colorDistributionType ?? 0, this.colorsSampling = md.colorsSampling ?? wd.e.NEAREST_NEAREST, this._colors = md.colors ?? null, this.dashCount = md.dashCount ?? 1, this.resolution = md.resolution ?? new Pd.i(this._engine.getRenderWidth(), this._engine.getRenderHeight()), md.colorsTexture ? this.colorsTexture = md.colorsTexture : this._colors ? this.colorsTexture = wW.CreateColorsTexture(`${dd.name}-colors-texture`, this._colors, this.colorsSampling, this._scene) : (this._color = this._color ?? bW.DEFAULT_COLOR, wW.PrepareEmptyColorsTexture(this._scene)), this._engine.cV.add((() => {
          wW.DisposeEmptyColorsTexture()
        }))
      }
      getAttributes(dd) {
        dd.push("grl_offsets"), dd.push("grl_widths"), dd.push("grl_colorPointers"), dd.push("grl_counters"), this._cameraFacing ? (dd.push("grl_previousAndSide"), dd.push("grl_nextAndCounters")) : dd.push("grl_slopes")
      }
      getSamplers(dd) {
        dd.push("grl_colors")
      }
      getActiveTextures(dd) {
        this.colorsTexture && dd.push(this.colorsTexture)
      }
      getUniforms() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const Od = [{
          name: "grl_singleColor",
          size: 3,
          type: "vec3"
        }, {
          name: "grl_textureSize",
          size: 2,
          type: "vec2"
        }, {
          name: "grl_dashOptions",
          size: 4,
          type: "vec4"
        }, {
          name: "grl_colorMode_visibility_colorsWidth_useColors",
          size: 4,
          type: "vec4"
        }];
        return this._cameraFacing && Od.push({
          name: "grl_projection",
          size: 16,
          type: "mat4"
        }, {
          name: "grl_aspect_resolution_lineWidth",
          size: 4,
          type: "vec4"
        }), 1 === dd && Od.push({
          name: "viewProjection",
          size: 16,
          type: "mat4"
        }), {
          ubo: Od,
          vertex: this._cameraFacing && this._isGLSL(dd) ? "\n                    uniform vec4 grl_aspect_resolution_lineWidth;\n                    uniform mat4 grl_projection;\n    " : "",
          fragment: this._isGLSL(dd) ? "\n                    uniform vec4 grl_dashOptions;\n                    uniform vec2 grl_textureSize;\n                    uniform vec4 grl_colorMode_visibility_colorsWidth_useColors;\n                    uniform vec3 grl_singleColor;\n    " : ""
        }
      }
      get isEnabled() {
        return !0
      }
      bindForSubMesh(dd) {
        if (this._cameraFacing) {
          dd.Idd("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || dd.Idd("viewProjection", this._scene.getTransformMatrix());
          const Od = Pd.h.Vector4[0];
          Od.x = this._aspect, Od.y = this._resolution.x, Od.z = this._resolution.y, Od.w = this.width, dd.updateVector4("grl_aspect_resolution_lineWidth", Od)
        }
        const Od = Pd.h.Vector4[0];
        Od.x = wW.BooleanToNumber(this.useDash), Od.y = this._dashArray, Od.z = this.dashOffset, Od.w = this.dashRatio, dd.updateVector4("grl_dashOptions", Od);
        const md = Pd.h.Vector4[1];
        md.x = this.colorMode, md.y = this.visibility, md.z = this.colorsTexture ? this.colorsTexture.getSize().width : 0, md.w = wW.BooleanToNumber(this.useColors), dd.updateVector4("grl_colorMode_visibility_colorsWidth_useColors", md), this._color && dd.updateColor3("grl_singleColor", this._color);
        const Wd = this.colorsTexture ?? bW.EmptyColorsTexture;
        dd.setTexture("grl_colors", Wd), dd.updateFloat2("grl_textureSize", Wd?.getSize().width ?? 1, Wd?.getSize().height ?? 1)
      }
      prepareDefines(dd, Od, md) {
        dd.GREASED_LINE_HAS_COLOR = !!this.color && !this.useColors, dd.GREASED_LINE_SIZE_ATTENUATION = this._sizeAttenuation, dd.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === this._colorsDistributionType, dd.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = Od.useRightHandedSystem, dd.GREASED_LINE_CAMERA_FACING = this._cameraFacing, dd.GREASED_LINE_USE_OFFSETS = !!md.offsets
      }
      getClassName() {
        return EW.GREASED_LINE_MATERIAL_NAME
      }
      getCustomCode(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._isGLSL(Od) ? function(dd, Od) {
          if ("vertex" === dd) {
            const dd = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute float grl_widths;\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute vec3 grl_offsets;\n                #endif\n                attribute float grl_colorPointers;\n                varying float grlCounters;\n                varying float grlColorPointer;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute vec4 grl_previousAndSide;\n                    attribute vec4 grl_nextAndCounters;\n\n                    vec2 grlFix( vec4 i, float aspect ) {\n                        vec2 res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute vec3 grl_slopes;\n                    attribute float grl_counters;\n                #endif\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    vec3 grlPositionOffset = grl_offsets;\n                #else\n                    vec3 grlPositionOffset = vec3(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (grl_slopes * grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                grlColorPointer = grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    float grlAspect = grl_aspect_resolution_lineWidth.x;\n                    float grlBaseWidth = grl_aspect_resolution_lineWidth.w;\n\n                    vec3 grlPrevious = grl_previousAndSide.xyz;\n                    float grlSide = grl_previousAndSide.w;\n\n                    vec3 grlNext = grl_nextAndCounters.xyz;\n                    grlCounters = grl_nextAndCounters.w;\n                    float grlWidth = grlBaseWidth * grl_widths;\n                    \n                    vec3 worldDir = normalize(grlNext - grlPrevious);\n                    vec3 nearPosition = positionUpdated + (worldDir * 0.01);\n                    mat4 grlMatrix = viewProjection * finalWorld;\n                    vec4 grlFinalPosition = grlMatrix * vec4(positionUpdated , 1.0);\n                    vec4 screenNearPos = grlMatrix * vec4(nearPosition, 1.0);\n                    vec2 grlLinePosition = grlFix(grlFinalPosition, grlAspect);\n                    vec2 grlLineNearPosition = grlFix(screenNearPos, grlAspect);\n                    vec2 grlDir = normalize(grlLineNearPosition - grlLinePosition);\n\n                    vec4 grlNormal = vec4(-grlDir.y, grlDir.x, 0., 1.);\n\n                    #ifdef GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM\n                        grlNormal.xy *= -.5 * grlWidth;\n                    #else\n                        grlNormal.xy *= .5 * grlWidth;\n                    #endif\n\n                    grlNormal *= grl_projection;\n\n                    #ifdef GREASED_LINE_SIZE_ATTENUATION\n                        grlNormal.xy *= grlFinalPosition.w;\n                        grlNormal.xy /= (vec4(grl_aspect_resolution_lineWidth.yz, 0., 1.) * grl_projection).xy;\n                    #endif\n\n                    grlFinalPosition.xy += grlNormal.xy * grlSide;\n                    gl_Position = grlFinalPosition;\n\n                    vPositionW = vec3(grlFinalPosition);\n                #else\n                    grlCounters = grl_counters;\n                #endif\n                "
            };
            return Od && (dd["!gl_Position\\=viewProjection\\*worldPos;"] = "//"), dd
          }
          return "fragment" === dd ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying float grlCounters;\n                    varying float grlColorPointer;\n                    uniform sampler2D grl_colors;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    float grlColorMode = grl_colorMode_visibility_colorsWidth_useColors.x;\n                    float grlVisibility = grl_colorMode_visibility_colorsWidth_useColors.y;\n                    float grlColorsWidth = grl_colorMode_visibility_colorsWidth_useColors.z;\n                    float grlUseColors = grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    float grlUseDash = grl_dashOptions.x;\n                    float grlDashArray = grl_dashOptions.y;\n                    float grlDashOffset = grl_dashOptions.z;\n                    float grlDashRatio = grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(grlCounters, grlVisibility);\n                    if(grlFinalColor.a == 0.) discard;\n\n                    if(grlUseDash == 1.){\n                        grlFinalColor.a *= ceil(mod(grlCounters + grlDashOffset, grlDashArray) - (grlDashArray * grlDashRatio));\n                        if (grlFinalColor.a == 0.) discard;\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor.rgb = grl_singleColor;\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor.rgb += grl_singleColor;\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor.rgb *= grl_singleColor;\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                vec4 grlColor = texture2D(grl_colors, vec2(grlCounters, 0.), 0.);\n                            #else\n                                vec2 lookup = vec2(fract(grlColorPointer / grl_textureSize.x), 1.0 - floor(grlColorPointer / grl_textureSize.x) / max(grl_textureSize.y - 1.0, 1.0));\n                                vec4 grlColor = texture2D(grl_colors, lookup, 0.0);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n                "
          } : null
        }(dd, this._cameraFacing) : function(dd, Od) {
          if ("vertex" === dd) {
            const dd = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute grl_widths: f32;\n                attribute grl_colorPointers: f32;\n                varying grlCounters: f32;\n                varying grlColorPointer: f32;\n\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute grl_offsets: vec3f;   \n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute grl_previousAndSide : vec4f;\n                    attribute grl_nextAndCounters : vec4f;\n\n                    fn grlFix(i: vec4f, aspect: f32) -> vec2f {\n                        var res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute grl_slopes: f32;\n                    attribute grl_counters: f32;\n                #endif\n\n\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    var grlPositionOffset: vec3f = input.grl_offsets;\n                #else\n                    var grlPositionOffset = vec3f(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (input.grl_slopes * input.grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                vertexOutputs.grlColorPointer = input.grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    let grlAspect: f32 = uniforms.grl_aspect_resolution_lineWidth.x;\n                    let grlBaseWidth: f32 = uniforms.grl_aspect_resolution_lineWidth.w;\n\n                    let grlPrevious: vec3f = input.grl_previousAndSide.xyz;\n                    let grlSide: f32 = input.grl_previousAndSide.w;\n\n                    let grlNext: vec3f = input.grl_nextAndCounters.xyz;\n                    vertexOutputs.grlCounters = input.grl_nextAndCounters.w;\n\n                    let grlWidth: f32 = grlBaseWidth * input.grl_widths;\n\n                    let worldDir: vec3f = normalize(grlNext - grlPrevious);\n                    let nearPosition: vec3f = positionUpdated + (worldDir * 0.01);\n                    let grlMatrix: mat4x4f = uniforms.viewProjection * finalWorld;\n                    let grlFinalPosition: vec4f = grlMatrix * vec4f(positionUpdated, 1.0); \n                    let screenNearPos: vec4f = grlMatrix * vec4(nearPosition, 1.0);\n                    let grlLinePosition: vec2f = grlFix(grlFinalPosition, grlAspect);\n                    let grlLineNearPosition: vec2f = grlFix(screenNearPos, grlAspect);\n                    let grlDir: vec2f = normalize(grlLineNearPosition - grlLinePosition);\n\n                    var grlNormal: vec4f = vec4f(-grlDir.y, grlDir.x, 0.0, 1.0);\n\n                    let grlHalfWidth: f32 = 0.5 * grlWidth;\n                    #if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)\n                        grlNormal.x *= -grlHalfWidth;\n                        grlNormal.y *= -grlHalfWidth;\n                    #else\n                        grlNormal.x *= grlHalfWidth;\n                        grlNormal.y *= grlHalfWidth;\n                    #endif\n\n                    grlNormal *= uniforms.grl_projection;\n\n                    #if defined(GREASED_LINE_SIZE_ATTENUATION)\n                        grlNormal.x *= grlFinalPosition.w;\n                        grlNormal.y *= grlFinalPosition.w;\n\n                        let pr = vec4f(uniforms.grl_aspect_resolution_lineWidth.yz, 0.0, 1.0) * uniforms.grl_projection;\n                        grlNormal.x /= pr.x;\n                        grlNormal.y /= pr.y;\n                    #endif\n\n                    vertexOutputs.position = vec4f(grlFinalPosition.xy + grlNormal.xy * grlSide, grlFinalPosition.z, grlFinalPosition.w);\n                    vertexOutputs.vPositionW = vertexOutputs.position.xyz;\n                \n                #else\n                    vertexOutputs.grlCounters = input.grl_counters;\n                #endif\n                "
            };
            return Od && (dd["!vertexOutputs\\.position\\s=\\sscene\\.viewProjection\\s\\*\\sworldPos;"] = "//"), dd
          }
          return "fragment" === dd ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying grlCounters: f32;\n                    varying grlColorPointer: 32;\n\n                    var grl_colors: texture_2d<f32>;\n                    var grl_colorsSampler: sampler;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    let grlColorMode: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.x;\n                    let grlVisibility: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.y;\n                    let grlColorsWidth: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.z;\n                    let grlUseColors: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    let grlUseDash: f32 = uniforms.grl_dashOptions.x;\n                    let grlDashArray: f32 = uniforms.grl_dashOptions.y;\n                    let grlDashOffset: f32 = uniforms.grl_dashOptions.z;\n                    let grlDashRatio: f32 = uniforms.grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(fragmentInputs.grlCounters, grlVisibility);\n                    if (grlFinalColor.a == 0.0) {\n                        discard;\n                    }\n\n                    if (grlUseDash == 1.0) {\n                        let dashPosition = (fragmentInputs.grlCounters + grlDashOffset) % grlDashArray;\n                        grlFinalColor.a *= ceil(dashPosition - (grlDashArray * grlDashRatio));\n\n                        if (grlFinalColor.a == 0.0) {\n                            discard;\n                        }\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor = vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor += vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor *= vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, vec2f(fragmentInputs.grlCounters, 0.));\n                            #else\n                                let lookup: vec2f = vec2(fract(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x), 1.0 - floor(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x) / max(uniforms.grl_textureSize.y - 1.0, 1.0));\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, lookup);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n\n\n                "
          } : null
        }(dd, this._cameraFacing)
      }
      dispose() {
        this.colorsTexture?.dispose(), super.dispose()
      }
      get colors() {
        return this._colors
      }
      set colors(dd) {
        this.setColors(dd)
      }
      setColors(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Wd = this._colors?.length ?? 0;
        if (this._colors = dd, null !== dd && 0 !== dd.length) {
          if (!Od || md)
            if (this.colorsTexture && Wd === dd.length && !md) {
              const Od = wW.Color3toRGBAUint8(dd);
              this.colorsTexture.update(Od)
            } else this.colorsTexture?.dispose(), this.colorsTexture = wW.CreateColorsTexture(`${this._material.name}-colors-texture`, dd, this.colorsSampling, this._scene)
        } else this.colorsTexture?.dispose()
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(dd) {
        this._dashCount = dd, this._dashArray = 1 / dd
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(dd) {
        this._sizeAttenuation = dd, this.markAllDefinesAsDirty()
      }
      get color() {
        return this._color
      }
      set color(dd) {
        this.setColor(dd)
      }
      setColor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null === this._color && null !== dd || null !== this._color && null === dd ? (this._color = dd, Od || this.markAllDefinesAsDirty()) : this._color = dd
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(dd) {
        this._colorsDistributionType = dd, this.markAllDefinesAsDirty()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(dd) {
        this._aspect = dd.x / dd.y, this._resolution = dd
      }
      serialize() {
        const dd = super.serialize(),
          Od = {
            colorDistributionType: this._colorsDistributionType,
            colorsSampling: this.colorsSampling,
            colorMode: this.colorMode,
            dashCount: this._dashCount,
            dashOffset: this.dashOffset,
            dashRatio: this.dashRatio,
            resolution: this._resolution,
            sizeAttenuation: this._sizeAttenuation,
            useColors: this.useColors,
            useDash: this.useDash,
            visibility: this.visibility,
            width: this.width
          };
        return this._colors && (Od.colors = this._colors), this._color && (Od.color = this._color), dd.greasedLineMaterialOptions = Od, dd
      }
      parse(dd, Od, md) {
        super.parse(dd, Od, md);
        const Wd = dd.greasedLineMaterialOptions;
        this.colorsTexture?.dispose(), Wd.color && this.setColor(Wd.color, !0), Wd.colorDistributionType && (this.colorsDistributionType = Wd.colorDistributionType), Wd.colors && (this.colors = Wd.colors), Wd.colorsSampling && (this.colorsSampling = Wd.colorsSampling), Wd.colorMode && (this.colorMode = Wd.colorMode), Wd.useColors && (this.useColors = Wd.useColors), Wd.visibility && (this.visibility = Wd.visibility), Wd.useDash && (this.useDash = Wd.useDash), Wd.dashCount && (this.dashCount = Wd.dashCount), Wd.dashRatio && (this.dashRatio = Wd.dashRatio), Wd.dashOffset && (this.dashOffset = Wd.dashOffset), Wd.width && (this.width = Wd.width), Wd.sizeAttenuation && (this.sizeAttenuation = Wd.sizeAttenuation), Wd.resolution && (this.resolution = Wd.resolution), this.colors ? this.colorsTexture = wW.CreateColorsTexture(`${this._material.name}-colors-texture`, this.colors, this.colorsSampling, Od) : wW.PrepareEmptyColorsTexture(Od), this.markAllDefinesAsDirty()
      }
      copyTo(dd) {
        const Od = dd;
        Od.colorsTexture?.dispose(), this._colors && (Od.colorsTexture = wW.CreateColorsTexture(`${Od._material.name}-colors-texture`, this._colors, Od.colorsSampling, this._scene)), Od.setColor(this.color, !0), Od.colorsDistributionType = this.colorsDistributionType, Od.colorsSampling = this.colorsSampling, Od.colorMode = this.colorMode, Od.useColors = this.useColors, Od.visibility = this.visibility, Od.useDash = this.useDash, Od.dashCount = this.dashCount, Od.dashRatio = this.dashRatio, Od.dashOffset = this.dashOffset, Od.width = this.width, Od.sizeAttenuation = this.sizeAttenuation, Od.resolution = this.resolution, Od.markAllDefinesAsDirty()
      }
      _isGLSL(dd) {
        return 0 === dd || this._forceGLSL
      }
    }
    EW.GREASED_LINE_MATERIAL_NAME = "GreasedLinePluginMaterial", EW.ForceGLSL = !1;
    var JW = md(42330),
      UW = md(42339),
      xW = md(40260),
      BW = md(42406),
      SW = md(41772);
    class sW extends BW.q {
      constructor(dd, Od, Wd) {
        const Fd = Od.Iq(),
          Rd = Fd.isWebGPU && !(Wd.forceGLSL || sW.ForceGLSL),
          Xd = ["COLOR_DISTRIBUTION_TYPE_LINE 1.", "COLOR_DISTRIBUTION_TYPE_SEGMENT 0.", "COLOR_MODE_SET 0.", "COLOR_MODE_ADD 1.", "COLOR_MODE_MULTIPLY 2."];
        Od.useRightHandedSystem && Xd.push("GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM");
        const Kd = ["position", "grl_widths", "grl_offsets", "grl_colorPointers"];
        Wd.cameraFacing ? (Xd.push("GREASED_LINE_CAMERA_FACING"), Kd.push("grl_previousAndSide", "grl_nextAndCounters")) : (Kd.push("grl_slopes"), Kd.push("grl_counters"));
        const hd = ["grlColorsWidth", "grlUseColors", "grlWidth", "grlColor", "grl_colorModeAndColorDistributionType", "grlResolution", "grlAspect", "grlAizeAttenuation", "grlDashArray", "grlDashOffset", "grlDashRatio", "grlUseDash", "grlVisibility", "grlColors"];
        if (Rd || hd.push("world", "viewProjection", "view", "projection"), super(dd, Od, {
            vertex: "greasedLine",
            fragment: "greasedLine"
          }, {
            uniformBuffers: Rd ? ["Scene", "Mesh"] : void 0,
            attributes: Kd,
            uniforms: hd,
            samplers: Rd ? [] : ["grlColors"],
            defines: Xd,
            extraInitializationsAsync: async () => {
              Rd ? await Promise.all([md.e(653).then((() => md(65356))), md.e(709).then((() => md(65359)))]) : await Promise.all([md.e(646).then((() => md(65367))), md.e(710).then((() => md(65376)))])
            },
            shaderLanguage: Rd ? 1 : 0
          }), this._color = ld.d.White(), this._colorsDistributionType = 0, this._colorsTexture = null, Wd = Wd || {
            color: bW.DEFAULT_COLOR
          }, this.visibility = Wd.visibility ?? 1, this.useDash = Wd.useDash ?? !1, this.dashRatio = Wd.dashRatio ?? .5, this.dashOffset = Wd.dashOffset ?? 0, this.dashCount = Wd.dashCount ?? 1, this.width = Wd.width ? Wd.width : Wd.sizeAttenuation && Wd.cameraFacing ? bW.DEFAULT_WIDTH_ATTENUATED : bW.DEFAULT_WIDTH, this.sizeAttenuation = Wd.sizeAttenuation ?? !1, this.color = Wd.color ?? ld.d.White(), this.useColors = Wd.useColors ?? !1, this.colorsDistributionType = Wd.colorDistributionType ?? 0, this.colorsSampling = Wd.colorsSampling ?? wd.e.NEAREST_NEAREST, this.colorMode = Wd.colorMode ?? 0, this._colors = Wd.colors ?? null, this._cameraFacing = Wd.cameraFacing ?? !0, this.resolution = Wd.resolution ?? new Pd.i(Fd.getRenderWidth(), Fd.getRenderHeight()), Wd.colorsTexture ? this.colorsTexture = Wd.colorsTexture : this._colors ? this.colorsTexture = wW.CreateColorsTexture(`${this.name}-colors-texture`, this._colors, this.colorsSampling, Od) : (this._color = this._color ?? bW.DEFAULT_COLOR, this.colorsTexture = wW.PrepareEmptyColorsTexture(Od)), Rd) {
          const dd = new SW.d;
          dd.setParameters(), dd.samplingMode = this.colorsSampling, this.setTextureSampler("grlColorsSampler", dd)
        }
        Fd.cV.add((() => {
          wW.DisposeEmptyColorsTexture()
        }))
      }
      dispose() {
        this._colorsTexture && this._colorsTexture !== bW.EmptyColorsTexture && this._colorsTexture.dispose(), super.dispose()
      }
      _setColorModeAndColorDistributionType() {
        this.setVector2("grl_colorModeAndColorDistributionType", new Pd.i(this._colorMode, this._colorsDistributionType))
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get colors() {
        return this._colors
      }
      set colors(dd) {
        this.setColors(dd)
      }
      setColors(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Wd = this._colors?.length ?? 0;
        if (this._colors = dd, null !== dd && 0 !== dd.length) {
          if (!Od || md)
            if (this._colorsTexture && Wd === dd.length && !md) {
              const Od = wW.Color3toRGBAUint8(dd);
              this._colorsTexture.update(Od)
            } else this._colorsTexture && this._colorsTexture !== bW.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = wW.CreateColorsTexture(`${this.name}-colors-texture`, dd, this.colorsSampling, this.zV())
        } else {
          this._colorsTexture && this._colorsTexture !== bW.EmptyColorsTexture && this._colorsTexture.dispose();
          const dd = this.zV();
          dd && (this.colorsTexture = wW.PrepareEmptyColorsTexture(dd))
        }
      }
      get colorsTexture() {
        return this._colorsTexture ?? null
      }
      set colorsTexture(dd) {
        this._colorsTexture = dd, this.setFloat("grlColorsWidth", this._colorsTexture.getSize().width), this.setTexture("grlColors", this._colorsTexture)
      }
      get width() {
        return this._width
      }
      set width(dd) {
        this._width = dd, this.setFloat("grlWidth", dd)
      }
      get useColors() {
        return this._useColors
      }
      set useColors(dd) {
        this._useColors = dd, this.setFloat("grlUseColors", wW.BooleanToNumber(dd))
      }
      get colorsSampling() {
        return this._colorsSampling
      }
      set colorsSampling(dd) {
        this._colorsSampling = dd
      }
      get visibility() {
        return this._visibility
      }
      set visibility(dd) {
        this._visibility = dd, this.setFloat("grlVisibility", dd)
      }
      get useDash() {
        return this._useDash
      }
      set useDash(dd) {
        this._useDash = dd, this.setFloat("grlUseDash", wW.BooleanToNumber(dd))
      }
      get dashOffset() {
        return this._dashOffset
      }
      set dashOffset(dd) {
        this._dashOffset = dd, this.setFloat("grlDashOffset", dd)
      }
      get dashRatio() {
        return this._dashRatio
      }
      set dashRatio(dd) {
        this._dashRatio = dd, this.setFloat("grlDashRatio", dd)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(dd) {
        this._dashCount = dd, this._dashArray = 1 / dd, this.setFloat("grlDashArray", this._dashArray)
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(dd) {
        this._sizeAttenuation = dd, this.setFloat("grlSizeAttenuation", wW.BooleanToNumber(dd))
      }
      get color() {
        return this._color
      }
      set color(dd) {
        this.setColor(dd)
      }
      setColor(dd) {
        dd = dd ?? bW.DEFAULT_COLOR, this._color = dd, this.setColor3("grlColor", dd)
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(dd) {
        this._colorsDistributionType = dd, this._setColorModeAndColorDistributionType()
      }
      get colorMode() {
        return this._colorMode
      }
      set colorMode(dd) {
        this._colorMode = dd, this._setColorModeAndColorDistributionType()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(dd) {
        this._resolution = dd, this.setVector2("grlResolution", dd), this.setFloat("grlAspect", dd.x / dd.y)
      }
      serialize() {
        const dd = super.serialize(),
          Od = {
            colorDistributionType: this._colorsDistributionType,
            colorsSampling: this._colorsSampling,
            colorMode: this._colorMode,
            color: this._color,
            dashCount: this._dashCount,
            dashOffset: this._dashOffset,
            dashRatio: this._dashRatio,
            resolution: this._resolution,
            sizeAttenuation: this._sizeAttenuation,
            useColors: this._useColors,
            useDash: this._useDash,
            visibility: this._visibility,
            width: this._width,
            cameraFacing: this._cameraFacing
          };
        return this._colors && (Od.colors = this._colors), dd.greasedLineMaterialOptions = Od, dd
      }
      parse(dd, Od, md) {
        const Wd = dd.greasedLineMaterialOptions;
        this._colorsTexture?.dispose(), Wd.color && (this.color = Wd.color), Wd.colorDistributionType && (this.colorsDistributionType = Wd.colorDistributionType), Wd.colorsSampling && (this.colorsSampling = Wd.colorsSampling), Wd.colorMode && (this.colorMode = Wd.colorMode), Wd.useColors && (this.useColors = Wd.useColors), Wd.visibility && (this.visibility = Wd.visibility), Wd.useDash && (this.useDash = Wd.useDash), Wd.dashCount && (this.dashCount = Wd.dashCount), Wd.dashRatio && (this.dashRatio = Wd.dashRatio), Wd.dashOffset && (this.dashOffset = Wd.dashOffset), Wd.width && (this.width = Wd.width), Wd.sizeAttenuation && (this.sizeAttenuation = Wd.sizeAttenuation), Wd.resolution && (this.resolution = Wd.resolution), Wd.colors ? this.colorsTexture = wW.CreateColorsTexture(`${this.name}-colors-texture`, Wd.colors, this.colorsSampling, this.zV()) : this.colorsTexture = wW.PrepareEmptyColorsTexture(Od), this._cameraFacing = Wd.cameraFacing ?? !0, this.setDefine("GREASED_LINE_CAMERA_FACING", this._cameraFacing)
      }
    }
    var uW, VW, iW;
    sW.ForceGLSL = !1,
      function(dd) {
        dd[dd.POINTS_MODE_POINTS = 0] = "POINTS_MODE_POINTS", dd[dd.POINTS_MODE_PATHS = 1] = "POINTS_MODE_PATHS"
      }(uW || (uW = {})),
      function(dd) {
        dd[dd.FACES_MODE_SINGLE_SIDED = 0] = "FACES_MODE_SINGLE_SIDED", dd[dd.FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING = 1] = "FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING", dd[dd.FACES_MODE_DOUBLE_SIDED = 2] = "FACES_MODE_DOUBLE_SIDED"
      }(VW || (VW = {})),
      function(dd) {
        dd[dd.AUTO_DIRECTIONS_FROM_FIRST_SEGMENT = 0] = "AUTO_DIRECTIONS_FROM_FIRST_SEGMENT", dd[dd.AUTO_DIRECTIONS_FROM_ALL_SEGMENTS = 1] = "AUTO_DIRECTIONS_FROM_ALL_SEGMENTS", dd[dd.AUTO_DIRECTIONS_ENHANCED = 2] = "AUTO_DIRECTIONS_ENHANCED", dd[dd.AUTO_DIRECTIONS_FACE_TO = 3] = "AUTO_DIRECTIONS_FACE_TO", dd[dd.AUTO_DIRECTIONS_NONE = 99] = "AUTO_DIRECTIONS_NONE"
      }(iW || (iW = {}));
    class AW extends JW.d {
      constructor(dd, Od, md) {
        super(dd, Od, null, null, !1, !1), this.name = dd, this._options = md, this._lazy = !1, this._updatable = !1, this._engine = Od.Iq(), this._lazy = md.lazy ?? !1, this._updatable = md.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._points = [], this._colorPointers = md.colorPointers ?? [], this._widths = md.widths ?? new Array(md.points.length).fill(1)
      }
      getClassName() {
        return "GreasedLineMesh"
      }
      _updateWidthsWithValue(dd) {
        let Od = 0;
        for (const Wd of this._points) Od += Wd.length;
        const md = Od / 3 * 2 - this._widths.length;
        for (let Wd = 0; Wd < md; Wd++) this._widths.push(dd)
      }
      updateLazy() {
        this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.kq && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
      }
      addPoints(dd, Od) {
        for (const md of dd) this._points.push(md);
        this._lazy || this.setPoints(this._points, Od)
      }
      dispose(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super.dispose(dd, Od)
      }
      isLazy() {
        return this._lazy
      }
      get uvs() {
        return this._uvs
      }
      set uvs(dd) {
        this._uvs = dd instanceof Float32Array ? dd : new Float32Array(dd), this._createVertexBuffers()
      }
      get offsets() {
        return this._offsets
      }
      set offsets(dd) {
        this.material instanceof sW && this.material.setDefine("GREASED_LINE_USE_OFFSETS", dd?.length > 0), this._offsets = dd, this._offsetsBuffer ? this._offsetsBuffer.update(dd) : this._createOffsetsBuffer(dd)
      }
      get widths() {
        return this._widths
      }
      set widths(dd) {
        this._widths = dd, this._lazy || this._widthsBuffer && this._widthsBuffer.update(dd)
      }
      get colorPointers() {
        return this._colorPointers
      }
      set colorPointers(dd) {
        this._colorPointers = dd, this._lazy || this._colorPointersBuffer && this._colorPointersBuffer.update(dd)
      }
      get greasedLineMaterial() {
        if (this.material && this.material instanceof sW) return this.material;
        const dd = this.material?.pluginManager?.getPlugin(EW.GREASED_LINE_MATERIAL_NAME);
        return dd || void 0
      }
      get points() {
        const dd = [];
        return xW.d.DeepCopy(this._points, dd), dd
      }
      setPoints(dd, Od) {
        this._points = wW.ConvertPoints(dd, Od?.pointsOptions ?? this._options.pointsOptions), this._updateWidths(), Od?.colorPointers || this._updateColorPointers(), this._setPoints(this._points, Od)
      }
      _initGreasedLine() {
        this._vertexPositions = [], this._indices = [], this._uvs = []
      }
      _createLineOptions() {
        return {
          points: this._points,
          colorPointers: this._colorPointers,
          lazy: this._lazy,
          updatable: this._updatable,
          uvs: this._uvs,
          widths: this._widths,
          ribbonOptions: this._options.ribbonOptions
        }
      }
      serialize(dd) {
        super.serialize(dd), dd.type = this.getClassName(), dd.lineOptions = this._createLineOptions()
      }
      _createVertexBuffers() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Od = new UW.c;
        return Od.positions = this._vertexPositions, Od.indices = this._indices, Od.uvs = this._uvs, dd && (Od.normals = [], UW.c.ComputeNormals(this._vertexPositions, this._indices, Od.normals)), Od.applyToMesh(this, this._options.updatable), Od
      }
      _createOffsetsBuffer(dd) {
        const Od = this._scene.Iq(),
          md = new zd.b(Od, dd, this._updatable, 3);
        this.setVerticesBuffer(md.createVertexBuffer("grl_offsets", 0, 3)), this._offsetsBuffer = md
      }
    }
    class rW {
      constructor(dd, Od) {
        this._indicesAccessorMap = new Map, this._vertexBufferViewMap = new Map, this._vertexAccessorMap = new Map, this._remappedBufferView = new Map, this._meshMorphTargetMap = new Map, this._vertexMapColorAlpha = new Map, this._exportedNodes = new Set, this._meshMap = new Map, this.convertedToRightHandedBuffers = new Map, this.convertToRightHanded = dd, this.wasAddedByNoopNode = Od
      }
      getIndicesAccessor(dd, Od, md, Wd, Fd) {
        return this._indicesAccessorMap.get(dd)?.get(Od)?.get(md)?.get(Wd)?.get(Fd)
      }
      setIndicesAccessor(dd, Od, md, Wd, Fd, Rd) {
        let Xd = this._indicesAccessorMap.get(dd);
        Xd || (Xd = new Map, this._indicesAccessorMap.set(dd, Xd));
        let Kd = Xd.get(Od);
        Kd || (Kd = new Map, Xd.set(Od, Kd));
        let hd = Kd.get(md);
        hd || (hd = new Map, Kd.set(md, hd));
        let vd = hd.get(Wd);
        vd || (vd = new Map, hd.set(Wd, vd)), vd.set(Fd, Rd)
      }
      pushExportedNode(dd) {
        this._exportedNodes.has(dd) || this._exportedNodes.add(dd)
      }
      getNodesSet() {
        return this._exportedNodes
      }
      getVertexBufferView(dd) {
        return this._vertexBufferViewMap.get(dd)
      }
      setVertexBufferView(dd, Od) {
        this._vertexBufferViewMap.set(dd, Od)
      }
      setRemappedBufferView(dd, Od, md) {
        this._remappedBufferView.set(dd, new Map), this._remappedBufferView.get(dd).set(Od, md)
      }
      getRemappedBufferView(dd, Od) {
        return this._remappedBufferView.get(dd)?.get(Od)
      }
      getVertexAccessor(dd, Od, md) {
        return this._vertexAccessorMap.get(dd)?.get(Od)?.get(md)
      }
      setVertexAccessor(dd, Od, md, Wd) {
        let Fd = this._vertexAccessorMap.get(dd);
        Fd || (Fd = new Map, this._vertexAccessorMap.set(dd, Fd));
        let Rd = Fd.get(Od);
        Rd || (Rd = new Map, Fd.set(Od, Rd)), Rd.set(md, Wd)
      }
      hasVertexColorAlpha(dd) {
        return this._vertexMapColorAlpha.get(dd) || !1
      }
      setHasVertexColorAlpha(dd, Od) {
        return this._vertexMapColorAlpha.set(dd, Od)
      }
      getMesh(dd) {
        return this._meshMap.get(dd)
      }
      setMesh(dd, Od) {
        this._meshMap.set(dd, Od)
      }
      bindMorphDataToMesh(dd, Od) {
        const md = this._meshMorphTargetMap.get(dd) || [];
        this._meshMorphTargetMap.set(dd, md), -1 === md.indexOf(Od) && md.push(Od)
      }
      getMorphTargetsFromMesh(dd) {
        return this._meshMorphTargetMap.get(dd)
      }
    }
    class GW {
      _ApplyExtension(dd, Od, md, Wd) {
        if (md >= Od.length) return Promise.resolve(dd);
        const Fd = Wd(Od[md], dd);
        return Fd ? Fd.then((async dd => dd ? await this._ApplyExtension(dd, Od, md + 1, Wd) : null)) : this._ApplyExtension(dd, Od, md + 1, Wd)
      }
      _ApplyExtensions(dd, Od) {
        const md = [];
        for (const Wd of GW._ExtensionNames) md.push(this._extensions[Wd]);
        return this._ApplyExtension(dd, md, 0, Od)
      }
      _extensionsPostExportNodeAsync(dd, Od, md, Wd, Fd) {
        return this._ApplyExtensions(Od, ((Od, Rd) => Od.postExportNodeAsync && Od.postExportNodeAsync(dd, Rd, md, Wd, Fd, this._bufferManager)))
      }
      _extensionsPostExportMaterialAsync(dd, Od, md) {
        return this._ApplyExtensions(Od, ((Od, Wd) => Od.postExportMaterialAsync && Od.postExportMaterialAsync(dd, Wd, md)))
      }
      async _extensionsPostExportMaterialAdditionalTexturesAsync(dd, Od, md) {
        const Wd = [];
        return await Promise.all(GW._ExtensionNames.map((async Fd => {
          const Rd = this._extensions[Fd];
          if (Rd.postExportMaterialAdditionalTexturesAsync) {
            const Fd = await Rd.postExportMaterialAdditionalTexturesAsync(dd, Od, md);
            Wd.push(...Fd)
          }
        }))), Wd
      }
      _extensionsPostExportTextures(dd, Od, md) {
        for (const Wd of GW._ExtensionNames) {
          const Fd = this._extensions[Wd];
          Fd.postExportTexture && Fd.postExportTexture(dd, Od, md)
        }
      }
      _extensionsPostExportMeshPrimitive(dd) {
        for (const Od of GW._ExtensionNames) {
          const md = this._extensions[Od];
          md.postExportMeshPrimitive && md.postExportMeshPrimitive(dd, this._bufferManager, this._accessors)
        }
      }
      async _extensionsPreGenerateBinaryAsync() {
        for (const dd of GW._ExtensionNames) {
          const Od = this._extensions[dd];
          Od.preGenerateBinaryAsync && await Od.preGenerateBinaryAsync(this._bufferManager)
        }
      }
      _forEachExtensions(dd) {
        for (const Od of GW._ExtensionNames) {
          const md = this._extensions[Od];
          md.enabled && dd(md)
        }
      }
      _extensionsOnExporting() {
        this._forEachExtensions((dd => {
          var Od, md, Wd;
          dd.wasUsed && ((Od = this._glTF).extensionsUsed || (Od.extensionsUsed = []), -1 === this._glTF.extensionsUsed.indexOf(dd.name) && this._glTF.extensionsUsed.push(dd.name), dd.required && ((md = this._glTF).extensionsRequired || (md.extensionsRequired = []), -1 === this._glTF.extensionsRequired.indexOf(dd.name) && this._glTF.extensionsRequired.push(dd.name)), (Wd = this._glTF).extensions || (Wd.extensions = {}), dd.onExporting && dd.onExporting())
        }))
      }
      _loadExtensions() {
        for (const dd of GW._ExtensionNames) {
          const Od = GW._ExtensionFactories[dd](this);
          this._extensions[dd] = Od
        }
      }
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hd.e.LastCreatedScene,
          Od = arguments.length > 1 ? arguments[1] : void 0;
        if (this._glTF = {
            asset: {
              generator: `Babylon.js v${qd.d.Version}`,
              version: "2.0"
            }
          }, this._animations = [], this._accessors = [], this._bufferViews = [], this._cameras = [], this._images = [], this._materials = [], this._meshes = [], this._nodes = [], this._samplers = [], this._scenes = [], this._skins = [], this._textures = [], this._imageData = {}, this._shouldUseGlb = !1, this._materialExporter = new Vm(this), this._extensions = {}, this._bufferManager = new RW, this._shouldExportNodeMap = new Map, this._nodeMap = new Map, this._animationGroupMap = new Map, this._materialMap = new Map, this._camerasMap = new Map, this._nodesCameraMap = new Map, this._skinMap = new Map, this._nodesSkinMap = new Map, this._materialNeedsUVsSet = new Set, !dd) throw new Error("No scene available to export");
        this._babylonScene = dd, this._options = {
          shouldExportNode: () => !0,
          shouldExportAnimation: () => !0,
          metadataSelector: dd => dd?.tV?.extras,
          animationSampleRate: 1 / 60,
          exportWithoutWaitingForScene: !1,
          exportUnusedUVs: !1,
          removeNoopRootNodes: !0,
          includeCoordinateSystemConversionNodes: !1,
          meshCompressionMethod: "None",
          khrInteractivity: void 0,
          ...Od
        }, this._loadExtensions()
      }
      dispose() {
        for (const dd in this._extensions) {
          this._extensions[dd].dispose()
        }
      }
      get options() {
        return this._options
      }
      static RegisterExtension(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        GW.UnregisterExtension(dd) && Fd.Tools.Warn(`Extension with the name ${dd} already exists`), GW._ExtensionFactories[dd] = Od;
        const Wd = md ?? 0;
        GW._ExtensionOrders[dd] = Wd;
        let Rd = GW._ExtensionNames.length;
        for (let Fd = 0; Fd < GW._ExtensionNames.length; Fd++) {
          const dd = GW._ExtensionNames[Fd];
          if (Wd < GW._ExtensionOrders[dd]) {
            Rd = Fd;
            break
          }
        }
        GW._ExtensionNames.splice(Rd, 0, dd)
      }
      static UnregisterExtension(dd) {
        if (!GW._ExtensionFactories[dd]) return !1;
        delete GW._ExtensionFactories[dd], delete GW._ExtensionOrders[dd];
        const Od = GW._ExtensionNames.indexOf(dd);
        return -1 !== Od && GW._ExtensionNames.splice(Od, 1), !0
      }
      _generateJSON(dd, Od, md) {
        const Wd = {
          byteLength: dd
        };
        return Wd.byteLength && (this._glTF.buffers = [Wd]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, this._glTF.MH = 0), this._cameras && this._cameras.length && (this._glTF.cameras = this._cameras), this._bufferViews && this._bufferViews.length && (this._glTF.bufferViews = this._bufferViews), this._accessors && this._accessors.length && (this._glTF.accessors = this._accessors), this._animations && this._animations.length && (this._glTF.animations = this._animations), this._materials && this._materials.length && (this._glTF.materials = this._materials), this._textures && this._textures.length && (this._glTF.textures = this._textures), this._samplers && this._samplers.length && (this._glTF.samplers = this._samplers), this._skins && this._skins.length && (this._glTF.skins = this._skins), this._images && this._images.length && (this._glTF.images = this._images), this._shouldUseGlb || (Wd.uri = Od + ".bin"), md ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF)
      }
      async generateGLTFAsync(dd) {
        const Od = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const md = this._generateJSON(Od.byteLength, dd, !0),
          Wd = new Blob([Od], {
            type: "application/octet-stream"
          }),
          Fd = dd + ".gltf",
          Rd = dd + ".bin",
          Xd = new vd;
        if (Xd.files[Fd] = md, Xd.files[Rd] = Wd, this._imageData)
          for (const Kd in this._imageData) Xd.files[Kd] = this._imageData[Kd];
        return Xd
      }
      async _generateBinaryAsync() {
        return await this._exportSceneAsync(), await this._extensionsPreGenerateBinaryAsync(), this._bufferManager.generateBinary(this._bufferViews)
      }
      _getPadding(dd) {
        const Od = dd % 4;
        return 0 === Od ? Od : 4 - Od
      }
      async generateGLBAsync(dd) {
        this._shouldUseGlb = !0;
        const Od = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const md = this._generateJSON(Od.byteLength),
          Wd = dd + ".glb";
        let Fd, Rd = md.length;
        if ("undefined" !== typeof TextEncoder) {
          Fd = (new TextEncoder).encode(md), Rd = Fd.length
        }
        const Xd = this._getPadding(Rd),
          Kd = this._getPadding(Od.byteLength),
          hd = 28 + Rd + Xd + Od.byteLength + Kd,
          Qd = new WW(hd);
        if (Qd.writeUInt32(1179937895), Qd.writeUInt32(2), Qd.writeUInt32(hd), Qd.writeUInt32(Rd + Xd), Qd.writeUInt32(1313821514), Fd) Qd.writeTypedArray(Fd);
        else {
          const dd = "_".charCodeAt(0);
          for (let Od = 0; Od < Rd; ++Od) {
            const Wd = md.charCodeAt(Od);
            Wd != md.codePointAt(Od) ? Qd.writeUInt8(dd) : Qd.writeUInt8(Wd)
          }
        }
        for (let vd = 0; vd < Xd; ++vd) Qd.writeUInt8(32);
        Qd.writeUInt32(Od.byteLength + Kd), Qd.writeUInt32(5130562), Qd.writeTypedArray(Od);
        for (let vd = 0; vd < Kd; ++vd) Qd.writeUInt8(0);
        const td = new vd;
        return td.files[Wd] = new Blob([Qd.getOutputData()], {
          type: "application/octet-stream"
        }), td
      }
      _setNodeTransformation(dd, Od, md) {
        if (Od.getPivotPoint().equalsWithEpsilon(Lm, rm.b) || Fd.Tools.Warn("Pivot points are not supported in the glTF serializer"), !Od.position.equalsWithEpsilon(Lm, rm.b)) {
          const Fd = Wd.TmpVectors.Cq[0].Bx(Od.position);
          md && lm(Fd), dd.translation = Fd.RRd()
        }
        Od.Tt.equalsWithEpsilon(zm, rm.b) || (dd.scale = Od.Tt.RRd());
        const Rd = Od.rotationQuaternion?.clone() || Wd.Quaternion.FromEulerAngles(Od.rotation.x, Od.rotation.y, Od.rotation.z);
        Rd.equalsWithEpsilon(Pm, rm.b) || (md && Cm(Rd), dd.rotation = Rd.normalize().RRd())
      }
      _setCameraTransformation(dd, Od, md) {
        const Fd = Wd.TmpVectors.Cq[0],
          Rd = Wd.TmpVectors.Quaternion[0],
          Xd = Od.getWorldMatrix();
        if (Od.parent) {
          const dd = Od.parent.getWorldMatrix().invertToRef(Wd.TmpVectors.Matrix[0]);
          Xd.multiplyToRef(dd, Wd.TmpVectors.Matrix[1]).decompose(void 0, Rd, Fd)
        } else Xd.decompose(void 0, Rd, Fd);
        Fd.equalsWithEpsilon(Lm, rm.b) || (md && lm(Fd), dd.translation = Fd.RRd()), md && Cm(Rd), this._babylonScene.useRightHandedSystem || Zm(Rd), Rd.equalsWithEpsilon(Pm, rm.b) || (dd.rotation = Rd.RRd())
      }
      _listAvailableCameras() {
        for (const dd of this._babylonScene.cameras) {
          const Od = {
            type: dd.mode === XW.e.PERSPECTIVE_CAMERA ? "perspective" : "orthographic"
          };
          if (dd.name && (Od.name = dd.name), "perspective" === Od.type) Od.perspective = {
            aspectRatio: dd.Iq().getAspectRatio(dd),
            yfov: dd.fovMode === XW.e.FOVMODE_VERTICAL_FIXED ? dd.fov : dd.fov * dd.Iq().getAspectRatio(dd),
            znear: dd.minZ,
            zfar: dd.maxZ
          };
          else if ("orthographic" === Od.type) {
            const md = dd.orthoLeft && dd.orthoRight ? .5 * (dd.orthoRight - dd.orthoLeft) : .5 * dd.Iq().getRenderWidth(),
              Wd = dd.orthoBottom && dd.orthoTop ? .5 * (dd.orthoTop - dd.orthoBottom) : .5 * dd.Iq().getRenderHeight();
            Od.orthographic = {
              xmag: md,
              ymag: Wd,
              znear: dd.minZ,
              zfar: dd.maxZ
            }
          }
          this._camerasMap.set(dd, Od)
        }
      }
      _exportAndAssignCameras() {
        const dd = Array.from(this._camerasMap.values());
        for (const Od of dd) {
          const dd = this._nodesCameraMap.get(Od);
          if (void 0 !== dd) {
            this._cameras.push(Od);
            for (const Od of dd) Od.camera = this._cameras.length - 1
          }
        }
      }
      _listAvailableSkeletons() {
        for (const dd of this._babylonScene.skeletons) {
          if (dd.bones.length <= 0) continue;
          const Od = {
            joints: []
          };
          this._skinMap.set(dd, Od)
        }
      }
      _exportAndAssignSkeletons(dd) {
        for (const md of this._babylonScene.skeletons) {
          if (md.bones.length <= 0) continue;
          const Rd = this._skinMap.get(md);
          if (void 0 == Rd) continue;
          const Xd = {};
          let Kd = -1;
          for (let dd = 0; dd < md.bones.length; ++dd) {
            const Od = md.bones[dd],
              Wd = Od.getIndex() ?? dd; - 1 !== Wd && (Xd[Wd] = Od, Wd > Kd && (Kd = Wd))
          }
          const hd = [];
          for (let md = 0; md <= Kd; ++md) {
            const Kd = Xd[md],
              vd = Kd.getTransformNode(),
              Qd = vd ? this._nodeMap.get(vd) : void 0;
            if (void 0 === Qd) {
              Fd.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported.");
              continue
            }
            Rd.joints.push(Qd);
            const td = Kd.getAbsoluteInverseBindMatrix().clone();
            dd.has(vd) && (Od = td, Gm.invertToRef(Wd.TmpVectors.Matrix[0]).multiplyToRef(Od, Od).multiplyToRef(Gm, Od)), hd.push(td)
          }
          const vd = this._nodesSkinMap.get(Rd);
          if (Rd.joints.length > 0 && void 0 !== vd) {
            const dd = new Float32Array(16 * hd.length);
            hd.forEach(((Od, md) => {
              dd.set(Od.m, 16 * md)
            }));
            const Od = this._bufferManager.createBufferView(dd);
            this._accessors.push(this._bufferManager.createAccessor(Od, "MAT4", 5126, hd.length)), Rd.inverseBindMatrices = this._accessors.length - 1, this._skins.push(Rd);
            const md = this._skins.length - 1;
            for (const Wd of vd) Wd.skin = md
          }
        }
        var Od
      }
      async _exportSceneAsync() {
        const dd = {
          nodes: []
        };
        if (this._babylonScene.metadata) {
          const Od = this._options.metadataSelector(this._babylonScene.metadata);
          Od && (dd.extras = Od)
        }
        const Od = new Array,
          md = new Array,
          Wd = new Array,
          Fd = this._options.removeNoopRootNodes && !this._options.khrInteractivity;
        let Rd;
        if (Fd && !this._options.includeCoordinateSystemConversionNodes)
          for (const vd of this._babylonScene.animationGroups)
            for (const dd of vd.targetedAnimations) {
              const Od = dd.target;
              Od instanceof td.c && !Od.parent && (Rd ?? (Rd = new Set)).add(Od)
            }
        for (const vd of this._babylonScene.rootNodes) {
          const dd = vd.animations,
            Xd = !!dd && dd.length > 0 || Rd?.has(vd);
          Fd && !this._options.includeCoordinateSystemConversionNodes && nm(vd, this._babylonScene.useRightHandedSystem) && !Xd ? Wd.push(...vd.getChildren()) : this._babylonScene.useRightHandedSystem ? Od.push(vd) : md.push(vd)
        }
        this._listAvailableCameras(), this._listAvailableSkeletons();
        const Xd = new rW(!0, !1);
        dd.nodes.push(...await this._exportNodesAsync(md, Xd));
        const Kd = new rW(!1, !1);
        dd.nodes.push(...await this._exportNodesAsync(Od, Kd));
        const hd = new rW(!1, !0);
        dd.nodes.push(...await this._exportNodesAsync(Wd, hd)), dd.nodes.length && this._scenes.push(dd), this._exportAndAssignCameras(), this._exportAndAssignSkeletons(Xd.getNodesSet()), this._babylonScene.animationGroups.length && qW._CreateNodeAndMorphAnimationFromAnimationGroups(this._babylonScene, this._animations, this._nodeMap, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, Xd.getNodesSet(), this._options.shouldExportAnimation, this._animationGroupMap)
      }
      _getNodeIndex(dd) {
        return this._nodeMap.get(dd)
      }
      _getAnimationIndex(dd) {
        return this._animationGroupMap.get(dd)
      }
      _getCameraIndex(dd) {
        const Od = this._camerasMap.get(dd);
        if (!Od) return;
        const md = this._cameras.indexOf(Od);
        return md >= 0 ? md : void 0
      }
      _getMaterialIndex(dd) {
        return this._materialMap.get(dd)
      }
      _getRootIndex(dd, Od) {
        switch (dd) {
          case "nodes":
            return this._getNodeIndex(Od);
          case "animations":
            return this._getAnimationIndex(Od);
          case "cameras":
            return this._getCameraIndex(Od);
          case "materials":
            return this._getMaterialIndex(Od);
          case "meshes": {
            const dd = this._getNodeIndex(Od);
            return void 0 === dd ? void 0 : this._nodes[dd]?.mesh
          }
          case "textures":
            return this._materialExporter.getTextureInfo(Od)?.index;
          case "images": {
            const dd = this._materialExporter.getTextureInfo(Od)?.index;
            if (void 0 === dd) return;
            const md = this._textures[dd];
            for (const Od of ["KHR_texture_basisu", "EXT_texture_webp", "EXT_texture_avif"]) {
              const dd = md?.extensions?.[Od]?.source;
              if ("number" === typeof dd) return dd
            }
            return md?.source
          }
          case "samplers": {
            const dd = this._materialExporter.getTextureInfo(Od)?.index;
            return void 0 === dd ? void 0 : this._textures[dd]?.sampler
          }
          case "skins": {
            const dd = this._skinMap.get(Od),
              md = dd ? this._skins.indexOf(dd) : -1;
            return md >= 0 ? md : void 0
          }
          case "scenes":
            return Od === this._babylonScene && this._scenes.length > 0 ? 0 : void 0
        }
      }
      _setNodeExtension(dd, Od, md) {
        const Wd = this._nodes[dd];
        if (!Wd) throw new Error(`Cannot write ${Od}: glTF node ${dd} does not exist.`);
        Wd.extensions || (Wd.extensions = {}), Wd.extensions[Od] = md
      }
      _shouldExportNode(dd) {
        let Od = this._shouldExportNodeMap.get(dd);
        return void 0 === Od && (Od = this._options.shouldExportNode(dd), this._shouldExportNodeMap.set(dd, Od)), Od
      }
      async _exportNodesAsync(dd, Od) {
        const md = new Array;
        this._exportBuffers(dd, Od);
        for (const Wd of dd) await this._exportNodeAsync(Wd, md, Od);
        return md
      }
      _collectBuffers(dd, Od, md, Wd, Fd) {
        if (this._shouldExportNode(dd) && dd instanceof od.d && dd.geometry) {
          const Rd = dd.geometry.getVertexBuffers();
          if (Rd)
            for (const Wd in Rd) {
              if (!em(Wd)) continue;
              const Xd = Rd[Wd];
              Fd.setHasVertexColorAlpha(Xd, dd.hasVertexAlpha);
              const Kd = Xd._buffer,
                hd = Od.get(Kd) || [];
              Od.set(Kd, hd), -1 === hd.indexOf(Xd) && hd.push(Xd);
              const vd = md.get(Xd) || [];
              md.set(Xd, vd), -1 === vd.indexOf(dd) && vd.push(dd)
            }
          const Xd = dd.morphTargetManager;
          if (Xd)
            for (let Od = 0; Od < Xd.numTargets; Od++) {
              const md = Xd.getTarget(Od),
                Fd = Wd.get(md) || [];
              Wd.set(md, Fd), -1 === Fd.indexOf(dd) && Fd.push(dd)
            }
        }
        for (const Rd of dd.getChildren()) this._collectBuffers(Rd, Od, md, Wd, Fd)
      }
      _exportBuffers(dd, Od) {
        const md = new Map,
          Wd = new Map,
          Fd = new Map;
        for (const Kd of dd) this._collectBuffers(Kd, md, Wd, Fd, Od);
        const Rd = Array.from(md.keys());
        for (const Kd of Rd) {
          const dd = Kd.getData();
          if (!dd) throw new Error("Buffer data is not available");
          const Fd = md.get(Kd);
          if (!Fd) continue;
          const Rd = Fd[0].byteStride;
          if (Fd.some((dd => dd.byteStride !== Rd))) throw new Error("Vertex buffers pointing to the same buffer must have the same byte stride");
          const Xd = Mm(dd).slice();
          for (const Od of Fd) {
            const dd = Wd.get(Od),
              {
                byteOffset: md,
                byteStride: Fd,
                componentCount: Rd,
                type: Kd,
                count: hd,
                normalized: vd,
                kind: td
              } = jm(Od, dd);
            switch (td) {
              case Qd.g.NormalKind:
              case Qd.g.TangentKind:
                (0, im.i)(Xd, md, Fd, Rd, Kd, hd, vd, (dd => {
                  const Od = Math.sqrt(dd[0] * dd[0] + dd[1] * dd[1] + dd[2] * dd[2]);
                  if (Od > 0) {
                    const md = 1 / Od;
                    dd[0] *= md, dd[1] *= md, dd[2] *= md
                  }
                }));
                break;
              case Qd.g.ColorKind: {
                const Od = dd.filter((dd => dd.material instanceof hW.StandardMaterial || null == dd.material)).length;
                if (0 == Od) break;
                if (Od != dd.length) {
                  Bd.c.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
                  break
                }
                Kd == Qd.g.UNSIGNED_BYTE && Bd.c.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
                const Wd = new yd.Color3,
                  td = new yd.b,
                  od = this._babylonScene.Iq().useExactSrgbConversions;
                (0, im.i)(Xd, md, Fd, Rd, Kd, hd, vd, (dd => {
                  3 === dd.length ? (Wd.ZQ(dd, 0), Wd.toLinearSpaceToRef(Wd, od), Wd.toArray(dd, 0)) : (td.ZQ(dd, 0), td.toLinearSpaceToRef(td, od), td.toArray(dd, 0))
                }))
              }
            }
          }
          if (Od.convertToRightHanded) {
            for (const dd of Fd) {
              const Od = Wd.get(dd),
                {
                  byteOffset: md,
                  byteStride: Fd,
                  componentCount: Rd,
                  type: Kd,
                  count: hd,
                  normalized: vd,
                  kind: td
                } = jm(dd, Od);
              switch (td) {
                case Qd.g.PositionKind:
                case Qd.g.NormalKind:
                case Qd.g.TangentKind:
                  (0, im.i)(Xd, md, Fd, Rd, Kd, hd, vd, (dd => {
                    dd[0] = -dd[0]
                  }))
              }
            }
            Od.convertedToRightHandedBuffers.set(Kd, Xd)
          }
          const hd = this._bufferManager.createBufferView(Xd, Rd);
          Od.setVertexBufferView(Kd, hd);
          const vd = new Map;
          for (const Od of Fd) {
            const dd = Wd.get(Od),
              {
                kind: md,
                totalVertices: Fd
              } = jm(Od, dd);
            switch (md) {
              case Qd.g.MatricesIndicesKind:
              case Qd.g.MatricesIndicesExtraKind:
                if (Od.type == Qd.g.FLOAT) {
                  const dd = Od.getFloatData(Fd);
                  null !== dd && vd.set(Od, dd)
                }
            }
          }
          0 !== vd.size && Bd.c.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
          const td = Array.from(vd.keys());
          for (const md of td) {
            const dd = vd.get(md);
            if (!dd) continue;
            const Wd = dd.some((dd => dd >= 256)),
              Fd = new(Wd ? Uint16Array : Uint8Array)(dd.length);
            for (let Od = 0; Od < dd.length; Od++) Fd[Od] = dd[Od];
            const Rd = this._bufferManager.createBufferView(Fd, 4 * (Wd ? 2 : 1));
            Od.setRemappedBufferView(Kd, md, Rd)
          }
        }
        const Xd = Array.from(Fd.keys());
        for (const Kd of Xd) {
          const dd = Fd.get(Kd);
          if (!dd) continue;
          const md = HW(Kd, dd[0], this._bufferManager, this._bufferViews, this._accessors, Od.convertToRightHanded);
          for (const Wd of dd) Od.bindMorphDataToMesh(Wd, md)
        }
      }
      async _exportNodeAsync(dd, Od, md) {
        let Wd = this._nodeMap.get(dd);
        if (void 0 !== Wd) return void(Od.includes(Wd) || Od.push(Wd));
        const Fd = await this._createNodeAsync(dd, md);
        if (Fd) {
          Wd = this._nodes.length, this._nodes.push(Fd), this._nodeMap.set(dd, Wd), md.pushExportedNode(dd), Od.push(Wd);
          const Rd = {
              name: "runtime animations",
              channels: [],
              samplers: []
            },
            Xd = [];
          this._babylonScene.animationGroups.length || (qW._CreateMorphTargetAnimationFromMorphTargetAnimations(dd, Rd, Xd, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, md.convertToRightHanded, this._options.shouldExportAnimation), dd.animations.length && qW._CreateNodeAnimationFromNodeAnimations(dd, Rd, Xd, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, md.convertToRightHanded, this._options.shouldExportAnimation)), Rd.channels.length && Rd.samplers.length && this._animations.push(Rd), Xd.forEach((dd => {
            dd.channels.length && dd.samplers.length && this._animations.push(dd)
          }))
        }
        const Rd = Fd ? [] : Od;
        for (const Xd of dd.getChildren()) await this._exportNodeAsync(Xd, Rd, md);
        Fd && Rd.length && (Fd.children = Rd)
      }
      async _createNodeAsync(dd, Od) {
        if (!this._shouldExportNode(dd)) return null;
        const md = {};
        if (dd.name && (md.name = dd.name), dd.metadata) {
          const Od = this._options.metadataSelector(dd.metadata);
          Od && (md.extras = Od)
        }
        if (dd instanceof td.c && (this._setNodeTransformation(md, dd, Od.convertToRightHanded), dd instanceof od.d)) {
          const Wd = dd instanceof Nd.e ? dd.ZRd : dd;
          if (Wd.ZE && Wd.ZE.length > 0 && (md.mesh = await this._exportMeshAsync(Wd, Od)), dd.skeleton) {
            const Od = this._skinMap.get(dd.skeleton);
            void 0 !== Od && (void 0 === this._nodesSkinMap.get(Od) && this._nodesSkinMap.set(Od, []), this._nodesSkinMap.get(Od)?.push(md))
          }
        }
        if (dd instanceof Am.h) {
          const Wd = this._camerasMap.get(dd);
          if (Wd) {
            void 0 === this._nodesCameraMap.get(Wd) && this._nodesCameraMap.set(Wd, []), this._setCameraTransformation(md, dd, Od.convertToRightHanded);
            const Fd = dd.parent;
            if (null !== Fd && fm(dd, Fd)) {
              const dd = this._nodeMap.get(Fd);
              if (void 0 !== dd) {
                const Od = this._nodes[dd];
                return km(md, Od), this._nodesCameraMap.get(Wd)?.push(Od), null
              }
            }
            this._nodesCameraMap.get(Wd)?.push(md)
          }
        }
        return await this._extensionsPostExportNodeAsync("exportNodeAsync", md, dd, this._nodeMap, Od.convertToRightHanded) ? md : (Bd.c.Warn(`Not exporting node ${dd.name}`), null)
      }
      _exportIndices(dd, Od, md, Wd, Fd, Xd, Kd, hd, vd) {
        let Qd = null;
        vd.mode = function(dd) {
          switch (dd) {
            case Rd.b.TriangleFillMode:
              return 4;
            case Rd.b.TriangleStripDrawMode:
              return 5;
            case Rd.b.TriangleFanDrawMode:
              return 6;
            case Rd.b.PointListDrawMode:
            case Rd.b.PointFillMode:
              return 0;
            case Rd.b.LineLoopDrawMode:
              return 2;
            case Rd.b.LineListDrawMode:
              return 1;
            case Rd.b.LineStripDrawMode:
              return 3
          }
          throw new Error(`Unknown fill mode: ${dd}`)
        }(Xd);
        const td = Kd !== Rd.b.CounterClockWiseSideOrientation && function(dd) {
          switch (dd) {
            case Rd.b.TriangleFillMode:
            case Rd.b.TriangleStripDrawMode:
            case Rd.b.TriangleFanDrawMode:
              return !0
          }
          return !1
        }(Xd);
        if (td) {
          if (Xd === Rd.b.TriangleStripDrawMode || Xd === Rd.b.TriangleFanDrawMode) throw new Error("Triangle strip/fan fill mode is not implemented");
          const Kd = Od ? new Uint32Array(Wd) : new Uint16Array(Wd);
          if (dd)
            for (let Od = 0; Od + 2 < Wd; Od += 3) Kd[Od] = dd[md + Od] + Fd, Kd[Od + 1] = dd[md + Od + 2] + Fd, Kd[Od + 2] = dd[md + Od + 1] + Fd;
          else
            for (let dd = 0; dd + 2 < Wd; dd += 3) Kd[dd] = dd, Kd[dd + 1] = dd + 2, Kd[dd + 2] = dd + 1;
          Qd = Kd
        } else if (dd && 0 !== Fd) {
          const Rd = Od ? new Uint32Array(Wd) : new Uint16Array(Wd);
          for (let Od = 0; Od < Wd; Od++) Rd[Od] = dd[md + Od] + Fd;
          Qd = Rd
        } else dd && (Qd = function(dd, Od, md, Wd) {
          let Fd = dd;
          return 0 === Od && md === dd.length || (Fd = Array.isArray(dd) ? dd.slice(Od, Od + md) : dd.subarray(Od, Od + md)), Fd instanceof Int32Array ? new Uint32Array(Fd.buffer, Fd.byteOffset, Fd.length) : Array.isArray(Fd) ? Wd ? new Uint32Array(Fd) : new Uint16Array(Fd) : Fd
        }(dd, md, Wd, Od));
        if (Qd) {
          let Rd = hd.getIndicesAccessor(dd, md, Wd, Fd, td);
          if (void 0 === Rd) {
            const Xd = this._bufferManager.createBufferView(Qd),
              Kd = Od ? 5125 : 5123;
            this._accessors.push(this._bufferManager.createAccessor(Xd, "SCALAR", Kd, Wd, 0)), Rd = this._accessors.length - 1, hd.setIndicesAccessor(dd, md, Wd, Fd, td, Rd)
          }
          vd.indices = Rd
        }
      }
      _exportVertexBuffer(dd, Od, md, Wd, Fd, Rd) {
        const Xd = dd.getKind();
        if (!em(Xd)) return;
        if (Xd.startsWith("uv") && !this._options.exportUnusedUVs && (!Od || !this._materialNeedsUVsSet.has(Od))) return;
        let Kd = Fd.getVertexAccessor(dd, md, Wd);
        if (void 0 === Kd) {
          const Od = Fd.convertedToRightHandedBuffers.get(dd._buffer) || dd._buffer.getData(),
            Rd = Xd === Qd.g.PositionKind ? function(dd, Od, md, Wd) {
              const {
                byteOffset: Fd,
                byteStride: Rd,
                type: Xd,
                normalized: Kd
              } = Od, hd = Od.getSize(), vd = new Array(hd).fill(1 / 0), Qd = new Array(hd).fill(-1 / 0);
              return (0, im.i)(dd, Fd + md * Rd, Rd, hd, Xd, Wd * hd, Kd, (dd => {
                for (let Od = 0; Od < hd; Od++) vd[Od] = Math.min(vd[Od], dd[Od]), Qd[Od] = Math.max(Qd[Od], dd[Od])
              })), {
                min: vd,
                max: Qd
              }
            }(Od, dd, md, Wd) : void 0,
            hd = (Xd === Qd.g.MatricesIndicesKind || Xd === Qd.g.MatricesIndicesExtraKind) && dd.type === Qd.g.FLOAT,
            vd = hd ? Qd.g.UNSIGNED_BYTE : dd.type,
            td = hd ? void 0 : dd.normalized,
            od = hd ? Fd.getRemappedBufferView(dd._buffer, dd) : Fd.getVertexBufferView(dd._buffer),
            Nd = dd.byteOffset + md * dd.byteStride;
          this._accessors.push(this._bufferManager.createAccessor(od, function(dd, Od) {
            if (dd == Qd.g.ColorKind) return Od ? "VEC4" : "VEC3";
            switch (dd) {
              case Qd.g.PositionKind:
              case Qd.g.NormalKind:
                return "VEC3";
              case Qd.g.TangentKind:
              case Qd.g.MatricesIndicesKind:
              case Qd.g.MatricesIndicesExtraKind:
              case Qd.g.MatricesWeightsKind:
              case Qd.g.MatricesWeightsExtraKind:
                return "VEC4";
              case Qd.g.UVKind:
              case Qd.g.UV2Kind:
              case Qd.g.UV3Kind:
              case Qd.g.UV4Kind:
              case Qd.g.UV5Kind:
              case Qd.g.UV6Kind:
                return "VEC2"
            }
            throw new Error(`Unknown kind ${dd}`)
          }(Xd, Fd.hasVertexColorAlpha(dd)), vd, Wd, Nd, Rd, td)), Kd = this._accessors.length - 1, Fd.setVertexAccessor(dd, md, Wd, Kd)
        }
        Rd.attributes[function(dd) {
          switch (dd) {
            case Qd.g.PositionKind:
              return "POSITION";
            case Qd.g.NormalKind:
              return "NORMAL";
            case Qd.g.TangentKind:
              return "TANGENT";
            case Qd.g.ColorKind:
              return "COLOR_0";
            case Qd.g.UVKind:
              return "TEXCOORD_0";
            case Qd.g.UV2Kind:
              return "TEXCOORD_1";
            case Qd.g.UV3Kind:
              return "TEXCOORD_2";
            case Qd.g.UV4Kind:
              return "TEXCOORD_3";
            case Qd.g.UV5Kind:
              return "TEXCOORD_4";
            case Qd.g.UV6Kind:
              return "TEXCOORD_5";
            case Qd.g.MatricesIndicesKind:
              return "JOINTS_0";
            case Qd.g.MatricesIndicesExtraKind:
              return "JOINTS_1";
            case Qd.g.MatricesWeightsKind:
              return "WEIGHTS_0";
            case Qd.g.MatricesWeightsExtraKind:
              return "WEIGHTS_1"
          }
          throw new Error(`Unknown kind: ${dd}`)
        }(Xd)] = Kd
      }
      async _exportMaterialAsync(dd, Od, md, Wd) {
        let Fd = this._materialMap.get(dd);
        if (void 0 === Fd) {
          const Wd = Od && Object.keys(Od).some((dd => dd.startsWith("uv")));
          if ((dd = dd instanceof KW.d ? dd.WOd[md.materialIndex] : dd) instanceof EO) Fd = await this._materialExporter.exportPBRMaterialAsync(dd, Wd);
          else if (dd instanceof hW.StandardMaterial) Fd = await this._materialExporter.exportStandardMaterialAsync(dd, Wd);
          else {
            if (!(dd instanceof dm)) return void Bd.c.Warn(`Unsupported material '${dd.name}' with type ${dd.getClassName()}`);
            Fd = await this._materialExporter.exportOpenPBRMaterialAsync(dd, Wd)
          }
          this._materialMap.set(dd, Fd)
        }
        Wd.material = Fd
      }
      async _exportMeshAsync(dd, Od) {
        let md = Od.getMesh(dd);
        if (void 0 !== md) return md;
        const Wd = {
          primitives: []
        };
        md = this._meshes.length, this._meshes.push(Wd), Od.setMesh(dd, md);
        const Fd = dd.isUnIndexed ? null : dd.jRd(),
          Xd = dd.geometry?.getVertexBuffers(),
          Kd = Od.getMorphTargetsFromMesh(dd),
          hd = dd instanceof yW.d,
          vd = dd instanceof AW,
          Qd = dd.ZE;
        if (Xd && Qd && Qd.length > 0)
          for (const td of Qd) {
            const md = {
                attributes: {}
              },
              Qd = td.fq() || this._babylonScene.defaultMaterial;
            if (vd) {
              const Od = {
                  name: Qd.name
                },
                Wd = dd,
                Fd = yd.Color3.White(),
                Rd = Wd.material?.alpha ?? 1,
                Xd = Wd.greasedLineMaterial?.color ?? Fd;
              (!Xd.equalsWithEpsilon(Fd, rm.b) || Rd < 1) && (Od.pbrMetallicRoughness = {
                baseColorFactor: [...Xd.RRd(), Rd]
              }), this._materials.push(Od), md.material = this._materials.length - 1
            } else if (hd) {
              const Od = {
                  name: Qd.name
                },
                Wd = dd;
              (!Wd.color.equalsWithEpsilon(yd.Color3.White(), rm.b) || Wd.alpha < 1) && (Od.pbrMetallicRoughness = {
                baseColorFactor: [...Wd.color.RRd(), Wd.alpha]
              }), this._materials.push(Od), md.material = this._materials.length - 1
            } else await this._exportMaterialAsync(Qd, Xd, td, md);
            const od = hd || vd ? Rd.b.LineListDrawMode : dd.overrideRenderingFillMode ?? Qd.fillMode;
            let Nd = Qd._getEffectiveOrientation(dd);
            Od.wasAddedByNoopNode && !dd.zV().useRightHandedSystem && (Nd = Nd === Rd.b.ClockWiseSideOrientation ? Rd.b.CounterClockWiseSideOrientation : Rd.b.ClockWiseSideOrientation), this._exportIndices(Fd, Fd ? (0, im.c)(Fd, td.indexCount, td.indexStart, td.verticesStart) : td.verticesCount > 65535, Fd ? td.indexStart : td.verticesStart, Fd ? td.indexCount : td.verticesCount, -td.verticesStart, od, Nd, Od, md);
            for (const dd of Object.values(Xd)) this._exportVertexBuffer(dd, Qd, td.verticesStart, td.verticesCount, Od, md);
            if (Kd) {
              md.targets = [];
              for (const dd of Kd) md.targets.push(dd.attributes)
            }
            Wd.primitives.push(md), this._extensionsPostExportMeshPrimitive(md)
          }
        if (Kd) {
          Wd.weights = [], Wd.extras || (Wd.extras = {}), Wd.extras.targetNames = [];
          for (const dd of Kd) Wd.weights.push(dd.influence), Wd.extras.targetNames.push(dd.name)
        }
        return md
      }
    }
    GW._ExtensionNames = new Array, GW._ExtensionFactories = {}, GW._ExtensionOrders = {};
    class nW {
      static async GLTFAsync(dd, Od, md) {
        md && md.exportWithoutWaitingForScene || await dd.whenReadyAsync();
        const Wd = new GW(dd, md),
          Fd = await Wd.generateGLTFAsync(Od.replace(/\.[^/.]+$/, ""));
        return Wd.dispose(), Fd
      }
      static async GLBAsync(dd, Od, md) {
        md && md.exportWithoutWaitingForScene || await dd.whenReadyAsync();
        const Wd = new GW(dd, md),
          Fd = await Wd.generateGLBAsync(Od.replace(/\.[^/.]+$/, ""));
        return Wd.dispose(), Fd
      }
    }
    const LW = "EXT_mesh_gpu_instancing";

    function PW(dd, Od) {
      const md = new Float32Array(3 * Od);
      for (let Wd = 0; Wd < Od; Wd++) md[3 * Wd + 0] = dd[4 * Wd + 0], md[3 * Wd + 1] = dd[4 * Wd + 1], md[3 * Wd + 2] = dd[4 * Wd + 2];
      return md
    }
    class zW {
      constructor(dd) {
        this.name = LW, this.enabled = !0, this.required = !1, this._instanceColorWarned = !1, this._wasUsed = !1, this._exporter = dd
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportNodeAsync(dd, Od, md, Wd, Fd, Rd) {
        return await new Promise((dd => {
          if (Od && md instanceof JW.d && md.hasThinInstances && this._exporter) {
            this._wasUsed = !0;
            const dd = Pd.j.Zero(),
              Wd = Pd.e.Identity(),
              Xd = Pd.j.One(),
              Kd = md.thinInstanceGetWorldMatrices(),
              hd = Pd.h.Cq[2],
              vd = Pd.h.Quaternion[1],
              Qd = Pd.h.Cq[3];
            let td = !1,
              od = !1,
              Nd = !1;
            const qd = new Float32Array(3 * md.ndd),
              Hd = new Float32Array(4 * md.ndd),
              yd = new Float32Array(3 * md.ndd);
            let bd = 0;
            for (const Od of Kd) Od.decompose(Qd, vd, hd), Fd && (lm(hd), Cm(vd)), qd.set(hd.RRd(), 3 * bd), Hd.set(vd.normalize().RRd(), 4 * bd), yd.set(Qd.RRd(), 3 * bd), td = td || !hd.equalsWithEpsilon(dd), od = od || !vd.equalsWithEpsilon(Wd), Nd = Nd || !Qd.equalsWithEpsilon(Xd), bd++;
            const Td = {
              attributes: {}
            };
            td && (Td.attributes.TRANSLATION = this._buildAccessor(qd, "VEC3", md.ndd, Rd)), od && (Td.attributes.ROTATION = this._buildAccessor(Hd, "VEC4", md.ndd, Rd)), Nd && (Td.attributes.SCALE = this._buildAccessor(yd, "VEC3", md.ndd, Rd));
            let pd = md._userThinInstanceBuffersStorage?.data?.instanceColor;
            if (pd) {
              const dd = md.ndd,
                Od = "VEC3";
              md.hasVertexAlpha && pd.length === 4 * dd ? (this._instanceColorWarned || (Bd.c.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), pd = PW(pd, dd)) : pd.length === 4 * dd && (pd = PW(pd, dd)), pd.length === 3 * dd && (Td.attributes._COLOR_0 = this._buildAccessor(pd, Od, dd, Rd))
            }
            Od.extensions = Od.extensions || {}, Od.extensions[LW] = Td
          }
          dd(Od)
        }))
      }
      _buildAccessor(dd, Od, md, Wd) {
        const Fd = Wd.createBufferView(dd),
          Rd = Wd.createAccessor(Fd, Od, 5126, md);
        return this._exporter._accessors.push(Rd), this._exporter._accessors.length - 1
      }
    }
    let cW = !1;

    function jW() {
      cW || (cW = !0, GW.RegisterExtension(LW, (dd => new zW(dd))))
    }
    md(42420);
    jW();
    var DW = md(54270);

    function eW(dd, Od, md, Wd) {
      const Fd = dd;
      let Rd = null,
        Xd = null,
        Kd = null,
        hd = null;
      const vd = {},
        Qd = Od.find((dd => "POSITION" === dd.dracoName));
      if (!Qd) throw new Error("Draco: Missing position attribute for encoding.");
      if (!md) {
        const dd = Qd.data.length / Qd.size;
        md = new(dd > 65535 ? Uint32Array : Uint16Array)(dd);
        for (let Od = 0; Od < dd; Od++) md[Od] = Od
      }
      try {
        Rd = new Fd.Encoder, Xd = new Fd.MeshBuilder, Kd = new Fd.Mesh, Xd.AddFacesToMesh(Kd, md.length / 3, md);
        const dd = new Map([
          [Float32Array, (dd, Od, md, Wd, Fd, Rd) => dd.AddFloatAttribute(Od, md, Wd, Fd, Rd)],
          [Uint32Array, (dd, Od, md, Wd, Fd, Rd) => dd.AddUInt32Attribute(Od, md, Wd, Fd, Rd)],
          [Uint16Array, (dd, Od, md, Wd, Fd, Rd) => dd.AddUInt16Attribute(Od, md, Wd, Fd, Rd)],
          [Uint8Array, (dd, Od, md, Wd, Fd, Rd) => dd.AddUInt8Attribute(Od, md, Wd, Fd, Rd)],
          [Int32Array, (dd, Od, md, Wd, Fd, Rd) => dd.AddInt32Attribute(Od, md, Wd, Fd, Rd)],
          [Int16Array, (dd, Od, md, Wd, Fd, Rd) => dd.AddInt16Attribute(Od, md, Wd, Fd, Rd)],
          [Int8Array, (dd, Od, md, Wd, Fd, Rd) => dd.AddInt8Attribute(Od, md, Wd, Fd, Rd)]
        ]);
        for (const md of Od) {
          md.data instanceof Uint8ClampedArray && (md.data = new Uint8Array(md.data));
          const Od = dd.get(md.data.constructor),
            hd = md.data.length / md.size;
          vd[md.kind] = Od(Xd, Kd, Fd[md.dracoName], hd, md.size, md.data), Wd.quantizationBits && Wd.quantizationBits[md.dracoName] && Rd.SetAttributeQuantization(Fd[md.dracoName], Wd.quantizationBits[md.dracoName])
        }
        Wd.method && Rd.SetEncodingMethod(Fd[Wd.method]), void 0 !== Wd.encodeSpeed && void 0 !== Wd.decodeSpeed && Rd.SetSpeedOptions(Wd.encodeSpeed, Wd.decodeSpeed), hd = new Fd.DracoInt8Array;
        const Qd = Rd.EncodeMeshToDracoBuffer(Kd, hd);
        if (Qd <= 0) throw new Error("Draco: Failed to encode.");
        const td = new Int8Array(Qd);
        for (let Od = 0; Od < Qd; Od++) td[Od] = hd.GetValue(Od);
        return {
          data: td,
          attributeIds: vd
        }
      } finally {
        Kd && Fd.destroy(Kd), Xd && Fd.destroy(Xd), Rd && Fd.destroy(Rd), hd && Fd.destroy(hd)
      }
    }

    function IW() {
      let dd;
      onmessage = Od => {
        const md = Od.data;
        switch (md.id) {
          case "init": {
            md.url && importScripts(md.url);
            const Od = md.wasmBinary ? {
              wasmBinary: md.wasmBinary
            } : {};
            dd = DracoEncoderModule(Od), postMessage({
              id: "initDone"
            });
            break
          }
          case "encodeMesh":
            if (!dd) throw new Error("Draco: Encoder module is not available.");
            dd.then((dd => {
              const Od = eW(dd, md.attributes, md.indices, md.options);
              postMessage({
                id: "encodeMeshSuccess",
                encodedMeshData: Od
              }, Od ? [Od.data.buffer] : void 0)
            })).catch((dd => {
              postMessage({
                id: "encodeMeshError",
                errorMessage: dd.message
              })
            }))
        }
      }
    }
    class lW {
      constructor(dd) {
        if (dd.workerPool) return void(this._workerPoolPromise = Promise.resolve(dd.workerPool));
        const Od = dd.wasmBinary,
          md = dd.numWorkers ?? ("object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1),
          Wd = md && "function" === typeof Worker && "function" === typeof URL,
          Fd = Wd || !dd.jsModule,
          Rd = dd.wasmUrl && dd.wasmBinaryUrl && "object" === typeof WebAssembly ? {
            url: Fd ? UO.g.GetBabylonScriptURL(dd.wasmUrl, !0) : "",
            wasmBinaryPromise: Od ? Promise.resolve(Od) : UO.g.LoadFileAsync(UO.g.GetBabylonScriptURL(dd.wasmBinaryUrl, !0))
          } : {
            url: Fd ? UO.g.GetBabylonScriptURL(dd.fallbackUrl) : "",
            wasmBinaryPromise: Promise.resolve(void 0)
          };
        Wd ? this._workerPoolPromise = Rd.wasmBinaryPromise.then((dd => {
          const Od = this._getWorkerContent(),
            Wd = URL.createObjectURL(new Blob([Od], {
              type: "application/javascript"
            }));
          return new DW.c(md, (() => async function(dd, Od, md) {
            return await new Promise(((Wd, Fd) => {
              const Rd = Od => {
                  dd.removeEventListener("error", Rd), dd.removeEventListener("message", Xd), Fd(Od)
                },
                Xd = Od => {
                  "initDone" === Od.data.id && (dd.removeEventListener("error", Rd), dd.removeEventListener("message", Xd), Wd(dd))
                };
              if (dd.addEventListener("error", Rd), dd.addEventListener("message", Xd), Od) {
                const Wd = Od.slice(0);
                dd.postMessage({
                  id: "init",
                  url: md,
                  wasmBinary: Wd
                }, [Wd])
              } else dd.postMessage({
                id: "init",
                url: md
              })
            }))
          }(new Worker(Wd), dd, Rd.url)))
        })) : this._modulePromise = Rd.wasmBinaryPromise.then((async Od => {
          if (!this._isModuleAvailable() && !dd.jsModule) {
            if (!Rd.url) throw new Error("Draco codec module is not available");
            await UO.g.LoadBabylonScriptAsync(Rd.url)
          }
          return await this._createModuleAsync(Od, dd.jsModule)
        }))
      }
      async whenReadyAsync() {
        this._workerPoolPromise ? await this._workerPoolPromise : this._modulePromise && await this._modulePromise
      }
      dispose() {
        this._workerPoolPromise && this._workerPoolPromise.then((dd => {
          dd.dispose()
        })), delete this._workerPoolPromise, delete this._modulePromise
      }
    }

    function CW() {
      const dd = dd => !!dd && "object" === typeof dd;
      for (var Od = arguments.length, md = new Array(Od), Wd = 0; Wd < Od; Wd++) md[Wd] = arguments[Wd];
      return md.reduce(((Od, md) => {
        const Wd = Object.keys(md);
        for (const Fd of Wd) {
          const Wd = Od[Fd],
            Rd = md[Fd];
          Array.isArray(Wd) && Array.isArray(Rd) ? Od[Fd] = Wd.concat(Rd) : dd(Wd) && dd(Rd) ? Od[Fd] = CW(Wd, Rd) : Od[Fd] = Rd
        }
        return Od
      }), {})
    }

    function ZW(dd) {
      return dd === zd.j.PositionKind ? "POSITION" : dd === zd.j.NormalKind ? "NORMAL" : dd === zd.j.ColorKind ? "COLOR" : dd.startsWith(zd.j.UVKind) ? "TEX_COORD" : "GENERIC"
    }
    const kW = {
      decodeSpeed: 5,
      encodeSpeed: 5,
      method: "MESH_EDGEBREAKER_ENCODING",
      quantizationBits: {
        POSITION: 14,
        NORMAL: 10,
        COLOR: 8,
        TEX_COORD: 12,
        GENERIC: 12
      }
    };
    class fW extends lW {
      static get DefaultAvailable() {
        return !!((dd = fW.DefaultConfiguration).wasmUrl && (dd.wasmBinary || dd.wasmBinaryUrl) && "object" === typeof WebAssembly || dd.fallbackUrl);
        var dd
      }
      static get Default() {
        return fW._Default ?? (fW._Default = new fW), fW._Default
      }
      static ResetDefault(dd) {
        fW._Default && (dd || fW._Default.dispose(), fW._Default = null)
      }
      _isModuleAvailable() {
        return "undefined" !== typeof DracoEncoderModule
      }
      async _createModuleAsync(dd, Od) {
        return {
          module: await (Od || DracoEncoderModule)({
            wasmBinary: dd
          })
        }
      }
      _getWorkerContent() {
        return `${eW}(${IW})()`
      }
      constructor() {
        super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fW.DefaultConfiguration)
      }
      async _encodeAsync(dd, Od, md) {
        const Wd = md ? CW(kW, md) : kW;
        if (this._workerPoolPromise) {
          const md = await this._workerPoolPromise;
          return await new Promise(((Fd, Rd) => {
            md.push(((md, Xd) => {
              const Kd = dd => {
                  md.removeEventListener("error", Kd), md.removeEventListener("message", hd), Rd(dd), Xd()
                },
                hd = dd => {
                  "encodeMeshSuccess" === dd.data.id ? (md.removeEventListener("error", Kd), md.removeEventListener("message", hd), Fd(dd.data.encodedMeshData), Xd()) : "encodeMeshError" === dd.data.id && (md.removeEventListener("error", Kd), md.removeEventListener("message", hd), Rd(new Error(dd.data.errorMessage)), Xd())
                };
              md.addEventListener("error", Kd), md.addEventListener("message", hd);
              const vd = [];
              for (const Od of dd) vd.push(Od.data.buffer);
              Od && vd.push(Od.buffer), md.postMessage({
                id: "encodeMesh",
                attributes: dd,
                indices: Od,
                options: Wd
              }, vd)
            }))
          }))
        }
        if (this._modulePromise) {
          return eW((await this._modulePromise).module, dd, Od, Wd)
        }
        throw new Error("Draco: Encoder module is not available")
      }
      async encodeMeshAsync(dd, Od) {
        if (0 == dd.getTotalVertices()) throw new Error("Draco: Cannot encode geometry with no vertices.");
        dd instanceof JW.d && dd.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === Od?.method && (Bd.c.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), Od.method = "MESH_SEQUENTIAL_ENCODING");
        const md = function(dd) {
            let Od = dd.jRd(void 0, !0);
            return !Od || Od instanceof Uint32Array || Od instanceof Uint16Array || (Od = ((0, im.c)(Od, Od.length) ? Uint32Array : Uint16Array).from(Od)), Od
          }(dd),
          Wd = function(dd, Od) {
            const md = [];
            for (const Wd of dd.getVerticesDataKinds()) {
              if (Od?.includes(Wd)) {
                if (Wd === zd.j.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
                continue
              }
              const Fd = dd.getVertexBuffer(Wd),
                Rd = Fd.getSize(),
                Xd = (0, im.q)(Fd.getData(), Rd, Fd.type, Fd.byteOffset, Fd.byteStride, dd.getTotalVertices(), !0);
              md.push({
                kind: Wd,
                dracoName: ZW(Wd),
                size: Rd,
                data: Xd
              })
            }
            return md
          }(dd, Od?.excludedAttributes);
        return await this._encodeAsync(Wd, md, Od)
      }
    }
    fW.DefaultConfiguration = {
      wasmUrl: `${UO.g._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
      wasmBinaryUrl: `${UO.g._DefaultCdnUrl}/draco_encoder.wasm`,
      fallbackUrl: `${UO.g._DefaultCdnUrl}/draco_encoder.js`
    }, fW._Default = null;
    const MW = "KHR_draco_mesh_compression";
    class dF {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(dd) {
        this.name = MW, this.required = !0, this._bufferViewsUsed = new Set, this._accessorsUsed = new Set, this._encodePromises = [], this._wasUsed = !1, this.enabled = "Draco" === dd.options.meshCompressionMethod && fW.DefaultAvailable
      }
      dispose() {}
      postExportMeshPrimitive(dd, Od, md) {
        if (!this.enabled) return;
        if (4 !== dd.mode && 5 !== dd.mode) return void Bd.c.Warn("Cannot compress primitive with mode " + dd.mode + ".");
        const Wd = [],
          Fd = [];
        let Rd = null;
        if (void 0 !== dd.indices) {
          const Xd = md[dd.indices],
            Kd = Od.getBufferView(Xd);
          Rd = Od.getData(Kd).slice(), Wd.push(Kd), Fd.push(Xd)
        }
        const Xd = [];
        for (const [Qd, td] of Object.entries(dd.attributes)) {
          const dd = md[td],
            Rd = Od.getBufferView(dd),
            hd = Dm(dd.type),
            vd = (0, im.q)(Od.getData(Rd), hd, dd.componentType, dd.byteOffset || 0, Rd.byteStride || (0, im.p)(dd.componentType) * hd, dd.count, !0);
          Xd.push({
            kind: Qd,
            dracoName: (Kd = Qd, "POSITION" === Kd ? "POSITION" : "NORMAL" === Kd ? "NORMAL" : Kd.startsWith("COLOR") ? "COLOR" : Kd.startsWith("TEXCOORD") ? "TEX_COORD" : "GENERIC"),
            size: Dm(dd.type),
            data: vd
          }), Wd.push(Rd), Fd.push(dd)
        }
        var Kd;
        const hd = {
            method: dd.targets ? "MESH_SEQUENTIAL_ENCODING" : "MESH_EDGEBREAKER_ENCODING"
          },
          vd = fW.Default._encodeAsync(Xd, Rd, hd).then((md => {
            const Rd = {
                bufferView: -1,
                attributes: md.attributeIds
              },
              Xd = Od.createBufferView(md.data);
            Od.setBufferView(Rd, Xd);
            for (const dd of Wd) this._bufferViewsUsed.add(dd);
            for (const dd of Fd) this._accessorsUsed.add(dd);
            dd.extensions || (dd.extensions = {}), dd.extensions[MW] = Rd
          })).catch((dd => {
            Bd.c.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + dd.message)
          }));
        this._encodePromises.push(vd), this._wasUsed = !0
      }
      async preGenerateBinaryAsync(dd) {
        this.enabled && (await Promise.all(this._encodePromises), this._bufferViewsUsed.forEach((Od => {
          dd.getPropertiesWithBufferView(Od).every((dd => this._accessorsUsed.has(dd))) && dd.removeBufferView(Od)
        })), this._bufferViewsUsed.clear(), this._accessorsUsed.clear())
      }
    }
    let OF = !1;

    function mF() {
      OF || (OF = !0, GW.RegisterExtension(MW, (dd => new dF(dd))))
    }
    mF();
    var WF = md(53995);
    const FF = "KHR_lights_punctual",
      RF = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        range: Number.MAX_VALUE
      },
      XF = {
        innerConeAngle: 0,
        outerConeAngle: Math.PI / 4
      },
      KF = Pd.j.Backward();
    class hF {
      constructor(dd) {
        this.name = FF, this.enabled = !0, this.required = !1, this._exporter = dd
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[FF] = this._lights
      }
      async postExportNodeAsync(dd, Od, md, Wd, Fd) {
        return await new Promise((Rd => {
          if (!(md instanceof NW.c)) return void Rd(Od);
          const Xd = md.getTypeID() == NW.c.LIGHTTYPEID_POINTLIGHT ? "point" : md.getTypeID() == NW.c.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : md.getTypeID() == NW.c.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
          if (!Xd || !(md instanceof WF.b)) return Bd.c.Warn(`${dd}: Light ${md.name} is not supported in ${FF}`), void Rd(Od);
          if (md.falloffType !== NW.c.FALLOFF_GLTF && Bd.c.Warn(`${dd}: Light falloff for ${md.name} does not match the ${FF} specification!`), !md.position.Qhd(0, 0, 0)) {
            const dd = Pd.h.Cq[0].Bx(md.position);
            Fd && lm(dd), Od.translation = dd.RRd()
          }
          if ("point" !== Xd) {
            const dd = md.direction.normalizeToRef(Pd.h.Cq[0]);
            Fd && lm(dd);
            const Wd = Pd.e.FromUnitVectorsToRef(KF, dd, Pd.h.Quaternion[0]);
            Pd.e.IsIdentity(Wd) || (Od.rotation = Wd.RRd())
          }
          const Kd = {
            type: Xd,
            name: md.name,
            color: md.diffuse.RRd(),
            intensity: md.intensity,
            range: md.range
          };
          if (dW(Kd, RF), "spot" === Xd) {
            const dd = md;
            Kd.spot = {
              innerConeAngle: dd.innerAngle / 2,
              outerConeAngle: dd.angle / 2
            }, dW(Kd.spot, XF)
          }
          this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(Kd);
          const hd = {
              light: this._lights.lights.length - 1
            },
            vd = md.parent;
          if (vd && fm(md, vd)) {
            const dd = Wd.get(vd);
            if (dd) {
              const md = this._exporter._nodes[dd];
              return km(Od, md), md.extensions || (md.extensions = {}), md.extensions[FF] = hd, void Rd(null)
            }
          }
          Od.extensions || (Od.extensions = {}), Od.extensions[FF] = hd, Rd(Od)
        }))
      }
    }
    let vF = !1;

    function QF() {
      vF || (vF = !0, GW.RegisterExtension(FF, (dd => new hF(dd))))
    }
    QF();
    const tF = "KHR_interactivity";
    class oF {
      constructor(dd) {
        this._exporter = dd, this.name = tF, this.enabled = !!dd.options.khrInteractivity, this.required = dd.options.khrInteractivity?.required ?? !1
      }
      dispose() {
        this._exporter = null
      }
      get wasUsed() {
        return this.enabled
      }
      onExporting() {
        var dd, Od, md;
        const Wd = this._exporter.options.khrInteractivity;
        if (!Wd) return;
        const Fd = Wd.build({
          getNodeCount: () => this._exporter._nodes.length,
          getNodeIndex: dd => this._exporter._getNodeIndex(dd),
          getAnimationIndex: dd => this._exporter._getAnimationIndex(dd),
          getCameraIndex: dd => this._exporter._getCameraIndex(dd),
          getMaterialIndex: dd => this._exporter._getMaterialIndex(dd),
          getRootIndex: (dd, Od) => this._exporter._getRootIndex(dd, Od),
          setNodeExtension: (dd, Od, md) => this._exporter._setNodeExtension(dd, Od, md)
        });
        this._exporter._glTF.extensions[tF] = Fd;
        for (const Rd of Wd.additionalExtensionsUsed)(dd = this._exporter._glTF).extensionsUsed || (dd.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(Rd) && this._exporter._glTF.extensionsUsed.push(Rd);
        for (const Rd of Wd.additionalExtensionsRequired)(Od = this._exporter._glTF).extensionsUsed || (Od.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(Rd) && this._exporter._glTF.extensionsUsed.push(Rd), (md = this._exporter._glTF).extensionsRequired || (md.extensionsRequired = []), -1 === this._exporter._glTF.extensionsRequired.indexOf(Rd) && this._exporter._glTF.extensionsRequired.push(Rd)
      }
    }
    let NF = !1;

    function qF() {
      NF || (NF = !0, GW.RegisterExtension(tF, (dd => new oF(dd)), 200))
    }
    qF();
    const HF = "EXT_lights_area",
      yF = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        size: 1
      },
      bF = {
        aspect: 1
      },
      TF = Pd.j.Backward();
    class pF {
      constructor(dd) {
        this.name = HF, this.enabled = !0, this.required = !1, this._exporter = dd
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[HF] = this._lights
      }
      async postExportNodeAsync(dd, Od, md, Wd, Fd) {
        return await new Promise((Rd => {
          if (!(md instanceof NW.c)) return void Rd(Od);
          const Xd = md.getTypeID() == NW.c.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
          if (!Xd) return Bd.c.Warn(`${dd}: Light ${md.name} is not supported in ${HF}`), void Rd(Od);
          const Kd = md;
          if (Kd.falloffType !== NW.c.FALLOFF_GLTF && Bd.c.Warn(`${dd}: Light falloff for ${md.name} does not match the ${HF} specification!`), !Kd.position.Qhd(0, 0, 0)) {
            const dd = Pd.h.Cq[0].Bx(Kd.position);
            Fd && lm(dd), Od.translation = dd.RRd()
          }
          const hd = Pd.j.Forward();
          Fd && lm(hd);
          const vd = Pd.e.FromUnitVectorsToRef(TF, hd, Pd.h.Quaternion[0]);
          Pd.e.IsIdentity(vd) || (Od.rotation = vd.RRd());
          const Qd = {
            type: Xd,
            name: Kd.name,
            color: Kd.diffuse.RRd(),
            intensity: Kd.intensity,
            size: Kd.height,
            rect: {
              aspect: Kd.width / Kd.height
            }
          };
          dW(Qd, yF), Qd.rect && dW(Qd.rect, bF), this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(Qd);
          const td = {
              light: this._lights.lights.length - 1
            },
            od = md.parent;
          if (od && fm(Kd, od)) {
            const dd = Wd.get(od);
            if (dd) {
              const md = this._exporter._nodes[dd];
              return km(Od, md), md.extensions || (md.extensions = {}), md.extensions[HF] = td, void Rd(null)
            }
          }
          Od.extensions || (Od.extensions = {}), Od.extensions[HF] = td, Rd(Od)
        }))
      }
    }
    let YF = !1;

    function gF() {
      YF || (YF = !0, GW.RegisterExtension(HF, (dd => new pF(dd))))
    }
    gF();
    const wF = "KHR_materials_anisotropy";
    class aF {
      constructor(dd) {
        this.name = wF, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._anisoTexturesMap = {}, this._exporter = dd
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(dd, Od, md) {
        const Wd = [];
        if (md instanceof EO) {
          if (md.anisotropy.isEnabled && !md.anisotropy.legacy) return md.anisotropy.texture && Wd.push(md.anisotropy.texture), Wd
        } else if (md instanceof dm && md.specularRoughnessAnisotropy > 0) {
          const dd = function(dd) {
            const Od = dd.specularRoughnessAnisotropyTexture,
              md = dd.geometryTangentTexture;
            return `${Od&&Od.getInternalTexture()?Od.getInternalTexture().uniqueId:"NoStrength"}_${md&&md.getInternalTexture()?md.getInternalTexture().uniqueId:"NoTangent"}`
          }(md);
          if (this._anisoTexturesMap[dd]) Wd.push(this._anisoTexturesMap[dd]);
          else {
            const Od = await async function(dd) {
              const Od = dd.zV(),
                md = dd.specularRoughnessAnisotropyTexture,
                Wd = dd.geometryTangentTexture;
              return md || Wd ? await hm("AnisotropyTexture", om(Wd ? Qm(Wd, 0) : tm(1), Wd ? Qm(Wd, 1) : tm(0), md ? Qm(md, 0) : tm(1)), Od) : null
            }(md);
            Od && (Wd.push(Od), this._anisoTexturesMap[dd] = Od)
          }
          return Wd
        }
        return []
      }
      postExportMaterialAsync(dd, Od, md) {
        return new Promise((dd => {
          var Wd;
          if (md instanceof EO) {
            if (!md.anisotropy.isEnabled || md.anisotropy.legacy) return void dd(Od);
            this._wasUsed = !0, Od.extensions = Od.extensions || {};
            const Wd = this._exporter._materialExporter.getTextureInfo(md.anisotropy.texture),
              Fd = {
                anisotropyStrength: md.anisotropy.intensity,
                anisotropyRotation: md.anisotropy.angle,
                anisotropyTexture: Wd ?? void 0
              };
            null !== Fd.anisotropyTexture && this._exporter._materialNeedsUVsSet.add(md), Od.extensions[wF] = Fd
          } else if (md instanceof dm && md.specularRoughnessAnisotropy > 0) {
            this._wasUsed = !0, Od.extensions = Od.extensions || {};
            let Fd = md.specularRoughnessTexture;
            md._useRoughnessFromMetallicTextureGreen && (Fd = md.baseMetalnessTexture);
            const Rd = this._anisoTexturesMap[md.id];
            if (!Fd && !Rd) {
              let Wd = md.specularRoughness,
                Fd = md.specularRoughnessAnisotropy;
              if (!md._useGltfStyleAnisotropy) {
                const dd = function(dd, Od) {
                  const md = dd * dd,
                    Wd = md * Math.sqrt(2 / (1 + (1 - Od) * (1 - Od))),
                    Fd = (1 - Od) * Wd;
                  return {
                    newBaseRoughness: Math.sqrt(Fd),
                    newAnisotropyStrength: Math.min(Math.sqrt((Wd - md) / Math.max(1 - md, 1e-4)), 1)
                  }
                }(md.specularRoughness, md.specularRoughnessAnisotropy);
                Wd = dd.newBaseRoughness, Fd = dd.newAnisotropyStrength
              }
              Od.pbrMetallicRoughness && (Od.pbrMetallicRoughness.roughnessFactor = Wd);
              const Rd = {
                anisotropyStrength: Fd,
                anisotropyRotation: md.geometryTangentAngle + .5 * Math.PI,
                anisotropyTexture: void 0
              };
              return Od.extensions[wF] = Rd, dd(Od)
            }
            const Xd = Rd ? this._exporter._materialExporter.getTextureInfo(Rd) : null,
              Kd = {
                anisotropyStrength: md.specularRoughnessAnisotropy,
                anisotropyRotation: md.geometryTangentAngle,
                anisotropyTexture: Xd || void 0,
                extensions: {}
              };
            md._useGltfStyleAnisotropy || (Od.extensions.KHR_materials_openpbr = {}, (Wd = this._exporter._glTF).extensionsUsed || (Wd.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr")), this._exporter._materialNeedsUVsSet.add(md), Od.extensions[wF] = Kd
          }
          dd(Od)
        }))
      }
    }
    let EF = !1;

    function JF() {
      EF || (EF = !0, GW.RegisterExtension(wF, (dd => new aF(dd))))
    }
    JF();
    const UF = "KHR_materials_clearcoat";

    function xF(dd, Od) {
      const md = new sd.f(Od.name, Od.zV());
      return md._texture = dd, md.coordinatesIndex = Od.coordinatesIndex, Od instanceof sd.f && (md.uOffset = Od.uOffset, md.vOffset = Od.vOffset, md.uScale = Od.uScale, md.vScale = Od.vScale, md.wAng = Od.wAng), md.wrapU = Od.wrapU, md.wrapV = Od.wrapV, md
    }
    class BF {
      constructor(dd) {
        this.name = UF, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = dd
      }
      dispose() {
        for (const dd of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[dd].dispose()
        }
        this._mergedTexturesMap = {};
        for (const dd of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[dd].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(dd, Od, md) {
        const Wd = [];
        if (md instanceof EO) {
          if (md.clearCoat.isEnabled) return md.clearCoat.texture && Wd.push(md.clearCoat.texture), !md.clearCoat.useRoughnessFromMainTexture && md.clearCoat.textureRoughness && Wd.push(md.clearCoat.textureRoughness), md.clearCoat.bumpTexture && Wd.push(md.clearCoat.bumpTexture), Wd
        } else if (md instanceof dm && md.coatWeight > 0) {
          let dd = !1;
          if (md.coatWeightTexture ? md.coatRoughnessTexture ? md._useCoatRoughnessFromGreenChannel && md.coatWeightTexture.getInternalTexture() === md.coatRoughnessTexture.getInternalTexture() ? (Wd.push(md.coatWeightTexture), Wd.push(md.coatRoughnessTexture)) : dd = !0 : Wd.push(md.coatWeightTexture) : md.coatRoughnessTexture && (md._useCoatRoughnessFromGreenChannel ? Wd.push(md.coatRoughnessTexture) : dd = !0), dd) {
            const dd = function(dd) {
              const Od = dd.coatWeightTexture,
                md = Od && Od.getInternalTexture() ? Od.getInternalTexture().uniqueId : "NoCoat",
                Wd = dd.coatRoughnessTexture;
              return `${md}_${Wd&&Wd.getInternalTexture()?Wd.getInternalTexture().uniqueId:"NoRoughness"}`
            }(md);
            if (!this._cachedInternalTexturesMap[dd]) {
              const Od = await async function(dd) {
                const Od = dd.zV(),
                  md = dd.coatWeightTexture,
                  Wd = dd.coatRoughnessTexture;
                return md || Wd ? (await hm("CoatTexture", om(md ? Qm(md, 0) : tm(1), Wd ? Qm(Wd, dd._useCoatRoughnessFromGreenChannel ? 1 : 0) : tm(1)), Od)).getInternalTexture() : null
              }(md);
              Od && (this._cachedInternalTexturesMap[dd] = Od)
            }
            this._cachedInternalTexturesMap[dd] && (md.coatWeightTexture && (this._mergedTexturesMap[md.coatWeightTexture.uniqueId] = xF(this._cachedInternalTexturesMap[dd], md.coatWeightTexture), Wd.push(this._mergedTexturesMap[md.coatWeightTexture.uniqueId])), md.coatRoughnessTexture && (this._mergedTexturesMap[md.coatRoughnessTexture.uniqueId] = xF(this._cachedInternalTexturesMap[dd], md.coatRoughnessTexture), Wd.push(this._mergedTexturesMap[md.coatRoughnessTexture.uniqueId])))
          }
          return md.geometryCoatNormalTexture && Wd.push(md.geometryCoatNormalTexture), Wd
        }
        return []
      }
      postExportMaterialAsync(dd, Od, md) {
        return new Promise((dd => {
          if (md instanceof EO) {
            if (!md.clearCoat.isEnabled) return void dd(Od);
            this._wasUsed = !0, Od.extensions = Od.extensions || {};
            const Wd = this._exporter._materialExporter.getTextureInfo(md.clearCoat.texture);
            let Fd;
            Fd = md.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(md.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(md.clearCoat.textureRoughness), md.clearCoat.isTintEnabled && UO.g.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${md.name}`), md.clearCoat.remapF0OnInterfaceChange && UO.g.Warn(`Clear Color F0 remapping is not supported for glTF export. Ignoring for: ${md.name}`);
            const Rd = this._exporter._materialExporter.getTextureInfo(md.clearCoat.bumpTexture),
              Xd = {
                clearcoatFactor: md.clearCoat.intensity,
                clearcoatTexture: Wd ?? void 0,
                clearcoatRoughnessFactor: md.clearCoat.roughness,
                clearcoatRoughnessTexture: Fd ?? void 0,
                clearcoatNormalTexture: Rd ?? void 0
              };
            null === Xd.clearcoatTexture && null === Xd.clearcoatRoughnessTexture && null === Xd.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(md), Od.extensions[UF] = Xd
          } else if (md instanceof dm) {
            if (0 == md.coatWeight) return void dd(Od);
            let Wd, Fd, Rd, Xd;
            this._wasUsed = !0, Od.extensions = Od.extensions || {}, md.coatWeightTexture && (Wd = this._mergedTexturesMap[md.coatWeightTexture.uniqueId], Fd = this._exporter._materialExporter.getTextureInfo(Wd)), md.coatRoughnessTexture && (Rd = this._mergedTexturesMap[md.coatRoughnessTexture.uniqueId], Xd = this._exporter._materialExporter.getTextureInfo(Rd)), md.coatColorTexture && UO.g.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${md.name}`);
            const Kd = this._exporter._materialExporter.getTextureInfo(md.geometryCoatNormalTexture),
              hd = {
                clearcoatFactor: md.coatWeight,
                clearcoatTexture: Fd ?? void 0,
                clearcoatRoughnessFactor: md.coatRoughness,
                clearcoatRoughnessTexture: Xd ?? void 0,
                clearcoatNormalTexture: Kd ?? void 0
              };
            null === hd.clearcoatTexture && null === hd.clearcoatRoughnessTexture && null === hd.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(md), Od.extensions[UF] = hd
          }
          dd(Od)
        }))
      }
    }
    let SF = !1;

    function sF() {
      SF || (SF = !0, GW.RegisterExtension(UF, (dd => new BF(dd))))
    }
    sF();
    const uF = "KHR_materials_coat";

    function VF(dd) {
      const Od = dd.coatRoughnessAnisotropyTexture,
        md = dd.geometryCoatTangentTexture;
      return `${Od&&Od.getInternalTexture()?Od.getInternalTexture().uniqueId:"NoStrength"}_${md&&md.getInternalTexture()?md.getInternalTexture().uniqueId:"NoTangent"}`
    }

    function iF(dd, Od) {
      const md = new sd.f(Od.name, Od.zV());
      return md._texture = dd, md.coordinatesIndex = Od.coordinatesIndex, Od instanceof sd.f && (md.uOffset = Od.uOffset, md.vOffset = Od.vOffset, md.uScale = Od.uScale, md.vScale = Od.vScale, md.wAng = Od.wAng), md.wrapU = Od.wrapU, md.wrapV = Od.wrapV, md
    }
    class AF {
      constructor(dd) {
        this.name = uF, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = dd
      }
      dispose() {
        for (const dd of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[dd].dispose()
        }
        this._mergedTexturesMap = {};
        for (const dd of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[dd].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(dd, Od, md) {
        const Wd = [];
        if (md instanceof EO) {
          if (md.clearCoat.isEnabled) return md.clearCoat.texture && Wd.push(md.clearCoat.texture), !md.clearCoat.useRoughnessFromMainTexture && md.clearCoat.textureRoughness && Wd.push(md.clearCoat.textureRoughness), md.clearCoat.bumpTexture && Wd.push(md.clearCoat.bumpTexture), md.clearCoat.tintTexture && Wd.push(md.clearCoat.tintTexture), Wd
        } else if (md instanceof dm && md.coatWeight > 0) {
          let dd = !1;
          if (md.coatWeightTexture ? md.coatRoughnessTexture ? md._useCoatRoughnessFromGreenChannel && md.coatWeightTexture.getInternalTexture() === md.coatRoughnessTexture.getInternalTexture() ? (Wd.push(md.coatWeightTexture), Wd.push(md.coatRoughnessTexture)) : dd = !0 : Wd.push(md.coatWeightTexture) : md.coatRoughnessTexture && (md._useCoatRoughnessFromGreenChannel ? Wd.push(md.coatRoughnessTexture) : dd = !0), dd) {
            const dd = function(dd) {
              const Od = dd.coatWeightTexture,
                md = Od && Od.getInternalTexture() ? Od.getInternalTexture().uniqueId : "NoCoat",
                Wd = dd.coatRoughnessTexture;
              return `${md}_${Wd&&Wd.getInternalTexture()?Wd.getInternalTexture().uniqueId:"NoRoughness"}`
            }(md);
            if (!this._cachedInternalTexturesMap[dd]) {
              const Od = await async function(dd) {
                const Od = dd.zV(),
                  md = dd.coatWeightTexture,
                  Wd = dd.coatRoughnessTexture;
                return md || Wd ? (await hm("CoatTexture", om(md ? Qm(md, 0) : tm(1), Wd ? Qm(Wd, dd._useCoatRoughnessFromGreenChannel ? 1 : 0) : tm(1)), Od)).getInternalTexture() : null
              }(md);
              Od && (this._cachedInternalTexturesMap[dd] = Od)
            }
            this._cachedInternalTexturesMap[dd] && (md.coatWeightTexture && (this._mergedTexturesMap[md.coatWeightTexture.uniqueId] = iF(this._cachedInternalTexturesMap[dd], md.coatWeightTexture), Wd.push(this._mergedTexturesMap[md.coatWeightTexture.uniqueId])), md.coatRoughnessTexture && (this._mergedTexturesMap[md.coatRoughnessTexture.uniqueId] = iF(this._cachedInternalTexturesMap[dd], md.coatRoughnessTexture), Wd.push(this._mergedTexturesMap[md.coatRoughnessTexture.uniqueId])))
          }
          if (md.geometryCoatNormalTexture && Wd.push(md.geometryCoatNormalTexture), md.coatColorTexture && Wd.push(md.coatColorTexture), md.coatRoughnessAnisotropy > 0) {
            const dd = VF(md);
            if (this._mergedTexturesMap[dd]) Wd.push(this._mergedTexturesMap[dd]);
            else {
              const Od = await async function(dd) {
                const Od = dd.zV(),
                  md = dd.coatRoughnessAnisotropyTexture,
                  Wd = dd.geometryCoatTangentTexture;
                return md || Wd ? await hm("AnisotropyTexture", om(Wd ? Qm(Wd, 0) : tm(1), Wd ? Qm(Wd, 1) : tm(0), md ? Qm(md, 0) : tm(1)), Od) : null
              }(md);
              Od && (Wd.push(Od), this._mergedTexturesMap[dd] = Od)
            }
            return Wd
          }
          return Wd
        }
        return []
      }
      postExportMaterialAsync(dd, Od, md) {
        return new Promise((dd => {
          var Wd;
          if (md instanceof EO) {
            if (!md.clearCoat.isEnabled) return void dd(Od);
            this._wasUsed = !0, Od.extensions = Od.extensions || {};
            const Wd = this._exporter._materialExporter.getTextureInfo(md.clearCoat.texture);
            let Fd, Rd;
            Fd = md.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(md.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(md.clearCoat.textureRoughness), md.clearCoat.isTintEnabled && (Rd = this._exporter._materialExporter.getTextureInfo(md.clearCoat.tintTexture));
            const Xd = this._exporter._materialExporter.getTextureInfo(md.clearCoat.bumpTexture),
              Kd = md.clearCoat.indexOfRefraction,
              hd = {
                coatFactor: md.clearCoat.intensity,
                coatTexture: Wd ?? void 0,
                coatRoughnessFactor: md.clearCoat.roughness,
                coatRoughnessTexture: Fd ?? void 0,
                coatNormalTexture: Xd ?? void 0,
                coatColorFactor: md.clearCoat.tintColor.RRd(),
                coatColorTexture: Rd ?? void 0,
                coatIor: 1.5 !== Kd ? Kd : void 0
              };
            null === hd.coatTexture && null === hd.coatRoughnessTexture && null === hd.coatRoughnessTexture && null === hd.coatColorTexture || this._exporter._materialNeedsUVsSet.add(md), Od.extensions[uF] = hd
          } else if (md instanceof dm) {
            if (0 == md.coatWeight) return void dd(Od);
            let Fd, Rd, Xd, Kd;
            this._wasUsed = !0, Od.extensions = Od.extensions || {}, md.coatWeightTexture && (Fd = this._mergedTexturesMap[md.coatWeightTexture.uniqueId] ? this._mergedTexturesMap[md.coatWeightTexture.uniqueId] : md.coatWeightTexture, Rd = this._exporter._materialExporter.getTextureInfo(Fd)), md.coatRoughnessTexture && (Xd = this._mergedTexturesMap[md.coatRoughnessTexture.uniqueId] ? this._mergedTexturesMap[md.coatRoughnessTexture.uniqueId] : md.coatRoughnessTexture, Kd = this._exporter._materialExporter.getTextureInfo(Xd));
            const hd = this._exporter._materialExporter.getTextureInfo(md.geometryCoatNormalTexture),
              vd = this._exporter._materialExporter.getTextureInfo(md.coatColorTexture),
              Qd = md.coatIor,
              td = md.coatDarkening,
              od = md.coatRoughnessTexture,
              Nd = VF(md),
              qd = this._mergedTexturesMap[Nd];
            let Hd, yd = 0,
              bd = 0;
            if (md.coatRoughnessAnisotropy > 0) {
              if (od || qd) {
                const dd = qd ? this._exporter._materialExporter.getTextureInfo(qd) : null;
                yd = md.coatRoughnessAnisotropy, bd = md.geometryCoatTangentAngle, Hd = dd || void 0
              } else {
                let dd = md.coatRoughness,
                  Wd = md.coatRoughnessAnisotropy;
                if (!md._useGltfStyleAnisotropy) {
                  const Od = function(dd, Od) {
                    const md = dd * dd,
                      Wd = md * Math.sqrt(2 / (1 + (1 - Od) * (1 - Od))),
                      Fd = (1 - Od) * Wd;
                    return {
                      newBaseRoughness: Math.sqrt(Fd),
                      newAnisotropyStrength: Math.min(Math.sqrt((Wd - md) / Math.max(1 - md, 1e-4)), 1)
                    }
                  }(md.coatRoughness, md.coatRoughnessAnisotropy);
                  dd = Od.newBaseRoughness, Wd = Od.newAnisotropyStrength
                }
                Od.pbrMetallicRoughness && (Od.pbrMetallicRoughness.roughnessFactor = dd), yd = Wd, bd = md.geometryCoatTangentAngle + .5 * Math.PI, Hd = void 0
              }
              md._useGltfStyleAnisotropy || (Od.extensions.KHR_materials_openpbr = {}, (Wd = this._exporter._glTF).extensionsUsed || (Wd.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr"))
            }
            const Td = {
              coatFactor: md.coatWeight,
              coatTexture: Rd ?? void 0,
              coatRoughnessFactor: md.coatRoughness,
              coatRoughnessTexture: Kd ?? void 0,
              coatNormalTexture: hd ?? void 0,
              coatColorFactor: md.coatColor.RRd(),
              coatColorTexture: vd ?? void 0,
              coatIor: 1.5 !== Qd ? Qd : void 0,
              coatDarkeningFactor: 1 !== td ? td : void 0,
              coatAnisotropyRotation: bd,
              coatAnisotropyStrength: yd,
              coatAnisotropyTexture: Hd
            };
            null === Td.coatTexture && null === Td.coatRoughnessTexture && null === Td.coatRoughnessTexture && null === Td.coatAnisotropyTexture && null === Td.coatColorTexture || this._exporter._materialNeedsUVsSet.add(md), Od.extensions[uF] = Td
          }
          dd(Od)
        }))
      }
    }
    let rF = !1;

    function GF() {
      rF || (rF = !0, GW.RegisterExtension(uF, (dd => new AF(dd))))
    }
    GF();
    let nF = (() => {
      var dd, Od, md, Wd, Fd, Xd, Kd, hd, vd, Qd, td, od, Nd, qd, Hd, yd, bd, Td, pd, Yd, gd, wd, Ed, Jd, Bd, Sd, sd, ud, Vd, Ad, Gd, nd, Ld, Pd, zd, cd, jd, Dd, ed, Id, Cd, Zd, kd, fd, Md, dO, OO, mO, WO, FO, RO, XO, KO, hO, vO, QO, tO, oO, NO, qO, HO, yO, bO, TO, pO, YO, gO;
      let wO, aO, UO, xO, BO, SO, sO, uO, VO, iO, AO, rO, GO, nO, LO, PO, zO, cO, jO, DO, eO, IO, lO, CO, ZO, kO, fO, MO, dm, Om, mm, Wm, Fm, Rm, Xm, Km, hm, Qm, tm, om, Nm, qm, Hm, ym, bm, Tm, pm, Ym, gm, wm, am, Em, Jm, Um, xm, Bm, Sm, sm, um, Vm, im, Am, rm, Gm, nm, Lm, Pm, zm, cm = EO,
        jm = [],
        Dm = [],
        em = [],
        Im = [],
        lm = [],
        Cm = [],
        Zm = [],
        km = [],
        fm = [],
        Mm = [],
        dW = [],
        OW = [],
        mW = [],
        WW = [],
        FW = [],
        RW = [],
        XW = [],
        KW = [],
        hW = [],
        vW = [],
        QW = [],
        tW = [],
        oW = [],
        NW = [],
        qW = [],
        HW = [],
        yW = [],
        bW = [],
        TW = [],
        pW = [],
        YW = [],
        gW = [],
        wW = [],
        aW = [],
        EW = [],
        JW = [],
        UW = [],
        xW = [],
        BW = [],
        SW = [],
        sW = [],
        uW = [],
        VW = [],
        iW = [],
        AW = [],
        rW = [],
        GW = [],
        nW = [],
        LW = [],
        PW = [],
        zW = [],
        cW = [],
        jW = [],
        DW = [],
        eW = [],
        IW = [],
        lW = [],
        CW = [],
        ZW = [],
        kW = [],
        fW = [],
        MW = [],
        dF = [],
        OF = [],
        mF = [],
        WF = [],
        FF = [],
        RF = [],
        XF = [],
        KF = [],
        hF = [],
        vF = [],
        QF = [],
        tF = [],
        oF = [],
        NF = [],
        qF = [],
        HF = [],
        yF = [],
        bF = [],
        TF = [],
        pF = [],
        YF = [],
        gF = [],
        wF = [],
        aF = [],
        EF = [],
        JF = [],
        UF = [],
        xF = [],
        BF = [],
        SF = [],
        sF = [],
        uF = [],
        VF = [],
        iF = [],
        AF = [],
        rF = [],
        GF = [],
        nF = [],
        LF = [],
        PF = [],
        zF = [],
        cF = [],
        jF = [],
        DF = [],
        eF = [],
        IF = [],
        lF = [],
        CF = [],
        ZF = [],
        kF = [],
        fF = [],
        MF = [],
        dR = [],
        OR = [],
        mR = [],
        WR = [],
        FR = [],
        RR = [],
        XR = [],
        KR = [],
        hR = [],
        vR = [],
        QR = [],
        tR = [],
        oR = [],
        NR = [],
        qR = [],
        HR = [],
        yR = [],
        bR = [],
        TR = [];
      return dd = class extends cm {
        get directIntensity() {
          return (0, Ud.c)(this, Od, "f")
        }
        set directIntensity(dd) {
          (0, Ud.e)(this, Od, dd, "f")
        }
        get emissiveIntensity() {
          return (0, Ud.c)(this, md, "f")
        }
        set emissiveIntensity(dd) {
          (0, Ud.e)(this, md, dd, "f")
        }
        get environmentIntensity() {
          return (0, Ud.c)(this, Wd, "f")
        }
        set environmentIntensity(dd) {
          (0, Ud.e)(this, Wd, dd, "f")
        }
        get specularIntensity() {
          return (0, Ud.c)(this, Fd, "f")
        }
        set specularIntensity(dd) {
          (0, Ud.e)(this, Fd, dd, "f")
        }
        get disableBumpMap() {
          return (0, Ud.c)(this, Xd, "f")
        }
        set disableBumpMap(dd) {
          (0, Ud.e)(this, Xd, dd, "f")
        }
        get albedoTexture() {
          return (0, Ud.c)(this, Kd, "f")
        }
        set albedoTexture(dd) {
          (0, Ud.e)(this, Kd, dd, "f")
        }
        get baseWeightTexture() {
          return (0, Ud.c)(this, hd, "f")
        }
        set baseWeightTexture(dd) {
          (0, Ud.e)(this, hd, dd, "f")
        }
        get baseDiffuseRoughnessTexture() {
          return (0, Ud.c)(this, vd, "f")
        }
        set baseDiffuseRoughnessTexture(dd) {
          (0, Ud.e)(this, vd, dd, "f")
        }
        get ambientTexture() {
          return (0, Ud.c)(this, Qd, "f")
        }
        set ambientTexture(dd) {
          (0, Ud.e)(this, Qd, dd, "f")
        }
        get ambientTextureStrength() {
          return (0, Ud.c)(this, td, "f")
        }
        set ambientTextureStrength(dd) {
          (0, Ud.e)(this, td, dd, "f")
        }
        get ambientTextureImpactOnAnalyticalLights() {
          return (0, Ud.c)(this, od, "f")
        }
        set ambientTextureImpactOnAnalyticalLights(dd) {
          (0, Ud.e)(this, od, dd, "f")
        }
        get opacityTexture() {
          return (0, Ud.c)(this, Nd, "f")
        }
        set opacityTexture(dd) {
          (0, Ud.e)(this, Nd, dd, "f")
        }
        get reflectionTexture() {
          return (0, Ud.c)(this, qd, "f")
        }
        set reflectionTexture(dd) {
          (0, Ud.e)(this, qd, dd, "f")
        }
        get emissiveTexture() {
          return (0, Ud.c)(this, Hd, "f")
        }
        set emissiveTexture(dd) {
          (0, Ud.e)(this, Hd, dd, "f")
        }
        get reflectivityTexture() {
          return (0, Ud.c)(this, yd, "f")
        }
        set reflectivityTexture(dd) {
          (0, Ud.e)(this, yd, dd, "f")
        }
        get metallicTexture() {
          return (0, Ud.c)(this, bd, "f")
        }
        set metallicTexture(dd) {
          (0, Ud.e)(this, bd, dd, "f")
        }
        get metallic() {
          return (0, Ud.c)(this, Td, "f")
        }
        set metallic(dd) {
          (0, Ud.e)(this, Td, dd, "f")
        }
        get roughness() {
          return (0, Ud.c)(this, pd, "f")
        }
        set roughness(dd) {
          (0, Ud.e)(this, pd, dd, "f")
        }
        get metallicF0Factor() {
          return (0, Ud.c)(this, Yd, "f")
        }
        set metallicF0Factor(dd) {
          (0, Ud.e)(this, Yd, dd, "f")
        }
        get metallicReflectanceColor() {
          return (0, Ud.c)(this, gd, "f")
        }
        set metallicReflectanceColor(dd) {
          (0, Ud.e)(this, gd, dd, "f")
        }
        get useOnlyMetallicFromMetallicReflectanceTexture() {
          return (0, Ud.c)(this, wd, "f")
        }
        set useOnlyMetallicFromMetallicReflectanceTexture(dd) {
          (0, Ud.e)(this, wd, dd, "f")
        }
        get metallicReflectanceTexture() {
          return (0, Ud.c)(this, Ed, "f")
        }
        set metallicReflectanceTexture(dd) {
          (0, Ud.e)(this, Ed, dd, "f")
        }
        get reflectanceTexture() {
          return (0, Ud.c)(this, Jd, "f")
        }
        set reflectanceTexture(dd) {
          (0, Ud.e)(this, Jd, dd, "f")
        }
        get microSurfaceTexture() {
          return (0, Ud.c)(this, Bd, "f")
        }
        set microSurfaceTexture(dd) {
          (0, Ud.e)(this, Bd, dd, "f")
        }
        get bumpTexture() {
          return (0, Ud.c)(this, Sd, "f")
        }
        set bumpTexture(dd) {
          (0, Ud.e)(this, Sd, dd, "f")
        }
        get lightmapTexture() {
          return (0, Ud.c)(this, sd, "f")
        }
        set lightmapTexture(dd) {
          (0, Ud.e)(this, sd, dd, "f")
        }
        get refractionTexture() {
          return this.subSurface.refractionTexture
        }
        set refractionTexture(dd) {
          this.subSurface.refractionTexture = dd, dd ? this.subSurface.isRefractionEnabled = !0 : this.subSurface.linkRefractionWithTransparency || (this.subSurface.isRefractionEnabled = !1)
        }
        get ambientColor() {
          return (0, Ud.c)(this, ud, "f")
        }
        set ambientColor(dd) {
          (0, Ud.e)(this, ud, dd, "f")
        }
        get albedoColor() {
          return (0, Ud.c)(this, Vd, "f")
        }
        set albedoColor(dd) {
          (0, Ud.e)(this, Vd, dd, "f")
        }
        get baseWeight() {
          return (0, Ud.c)(this, Ad, "f")
        }
        set baseWeight(dd) {
          (0, Ud.e)(this, Ad, dd, "f")
        }
        get baseDiffuseRoughness() {
          return (0, Ud.c)(this, Gd, "f")
        }
        set baseDiffuseRoughness(dd) {
          (0, Ud.e)(this, Gd, dd, "f")
        }
        get reflectivityColor() {
          return (0, Ud.c)(this, nd, "f")
        }
        set reflectivityColor(dd) {
          (0, Ud.e)(this, nd, dd, "f")
        }
        get reflectionColor() {
          return (0, Ud.c)(this, Ld, "f")
        }
        set reflectionColor(dd) {
          (0, Ud.e)(this, Ld, dd, "f")
        }
        get emissiveColor() {
          return (0, Ud.c)(this, Pd, "f")
        }
        set emissiveColor(dd) {
          (0, Ud.e)(this, Pd, dd, "f")
        }
        get microSurface() {
          return (0, Ud.c)(this, zd, "f")
        }
        set microSurface(dd) {
          (0, Ud.e)(this, zd, dd, "f")
        }
        get indexOfRefraction() {
          return this.subSurface.indexOfRefraction
        }
        set indexOfRefraction(dd) {
          this.subSurface.indexOfRefraction = dd
        }
        get invertRefractionY() {
          return this.subSurface.invertRefractionY
        }
        set invertRefractionY(dd) {
          this.subSurface.invertRefractionY = dd
        }
        get linkRefractionWithTransparency() {
          return this.subSurface.linkRefractionWithTransparency
        }
        set linkRefractionWithTransparency(dd) {
          this.subSurface.linkRefractionWithTransparency = dd, dd && (this.subSurface.isRefractionEnabled = !0)
        }
        get useLightmapAsShadowmap() {
          return (0, Ud.c)(this, cd, "f")
        }
        set useLightmapAsShadowmap(dd) {
          (0, Ud.e)(this, cd, dd, "f")
        }
        get useAlphaFromAlbedoTexture() {
          return (0, Ud.c)(this, jd, "f")
        }
        set useAlphaFromAlbedoTexture(dd) {
          (0, Ud.e)(this, jd, dd, "f")
        }
        get forceAlphaTest() {
          return (0, Ud.c)(this, Dd, "f")
        }
        set forceAlphaTest(dd) {
          (0, Ud.e)(this, Dd, dd, "f")
        }
        get alphaCutOff() {
          return (0, Ud.c)(this, ed, "f")
        }
        set alphaCutOff(dd) {
          (0, Ud.e)(this, ed, dd, "f")
        }
        get useSpecularOverAlpha() {
          return (0, Ud.c)(this, Id, "f")
        }
        set useSpecularOverAlpha(dd) {
          (0, Ud.e)(this, Id, dd, "f")
        }
        get useMicroSurfaceFromReflectivityMapAlpha() {
          return (0, Ud.c)(this, Cd, "f")
        }
        set useMicroSurfaceFromReflectivityMapAlpha(dd) {
          (0, Ud.e)(this, Cd, dd, "f")
        }
        get useRoughnessFromMetallicTextureAlpha() {
          return (0, Ud.c)(this, Zd, "f")
        }
        set useRoughnessFromMetallicTextureAlpha(dd) {
          (0, Ud.e)(this, Zd, dd, "f")
        }
        get useRoughnessFromMetallicTextureGreen() {
          return (0, Ud.c)(this, kd, "f")
        }
        set useRoughnessFromMetallicTextureGreen(dd) {
          (0, Ud.e)(this, kd, dd, "f")
        }
        get useMetallnessFromMetallicTextureBlue() {
          return (0, Ud.c)(this, fd, "f")
        }
        set useMetallnessFromMetallicTextureBlue(dd) {
          (0, Ud.e)(this, fd, dd, "f")
        }
        get useAmbientOcclusionFromMetallicTextureRed() {
          return (0, Ud.c)(this, Md, "f")
        }
        set useAmbientOcclusionFromMetallicTextureRed(dd) {
          (0, Ud.e)(this, Md, dd, "f")
        }
        get useAmbientInGrayScale() {
          return (0, Ud.c)(this, dO, "f")
        }
        set useAmbientInGrayScale(dd) {
          (0, Ud.e)(this, dO, dd, "f")
        }
        get useAutoMicroSurfaceFromReflectivityMap() {
          return (0, Ud.c)(this, OO, "f")
        }
        set useAutoMicroSurfaceFromReflectivityMap(dd) {
          (0, Ud.e)(this, OO, dd, "f")
        }
        get usePhysicalLightFalloff() {
          return this._lightFalloff === EO.LIGHTFALLOFF_PHYSICAL
        }
        set usePhysicalLightFalloff(dd) {
          dd !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = dd ? EO.LIGHTFALLOFF_PHYSICAL : EO.LIGHTFALLOFF_STANDARD)
        }
        get useGLTFLightFalloff() {
          return this._lightFalloff === EO.LIGHTFALLOFF_GLTF
        }
        set useGLTFLightFalloff(dd) {
          dd !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = dd ? EO.LIGHTFALLOFF_GLTF : EO.LIGHTFALLOFF_STANDARD)
        }
        get useRadianceOverAlpha() {
          return (0, Ud.c)(this, mO, "f")
        }
        set useRadianceOverAlpha(dd) {
          (0, Ud.e)(this, mO, dd, "f")
        }
        get useObjectSpaceNormalMap() {
          return (0, Ud.c)(this, WO, "f")
        }
        set useObjectSpaceNormalMap(dd) {
          (0, Ud.e)(this, WO, dd, "f")
        }
        get useParallax() {
          return (0, Ud.c)(this, FO, "f")
        }
        set useParallax(dd) {
          (0, Ud.e)(this, FO, dd, "f")
        }
        get useParallaxOcclusion() {
          return (0, Ud.c)(this, RO, "f")
        }
        set useParallaxOcclusion(dd) {
          (0, Ud.e)(this, RO, dd, "f")
        }
        get parallaxScaleBias() {
          return (0, Ud.c)(this, XO, "f")
        }
        set parallaxScaleBias(dd) {
          (0, Ud.e)(this, XO, dd, "f")
        }
        get disableLighting() {
          return (0, Ud.c)(this, KO, "f")
        }
        set disableLighting(dd) {
          (0, Ud.e)(this, KO, dd, "f")
        }
        get forceIrradianceInFragment() {
          return (0, Ud.c)(this, hO, "f")
        }
        set forceIrradianceInFragment(dd) {
          (0, Ud.e)(this, hO, dd, "f")
        }
        get maxSimultaneousLights() {
          return (0, Ud.c)(this, vO, "f")
        }
        set maxSimultaneousLights(dd) {
          (0, Ud.e)(this, vO, dd, "f")
        }
        get invertNormalMapX() {
          return (0, Ud.c)(this, QO, "f")
        }
        set invertNormalMapX(dd) {
          (0, Ud.e)(this, QO, dd, "f")
        }
        get invertNormalMapY() {
          return (0, Ud.c)(this, tO, "f")
        }
        set invertNormalMapY(dd) {
          (0, Ud.e)(this, tO, dd, "f")
        }
        get twoSidedLighting() {
          return (0, Ud.c)(this, oO, "f")
        }
        set twoSidedLighting(dd) {
          (0, Ud.e)(this, oO, dd, "f")
        }
        get useAlphaFresnel() {
          return (0, Ud.c)(this, NO, "f")
        }
        set useAlphaFresnel(dd) {
          (0, Ud.e)(this, NO, dd, "f")
        }
        get useLinearAlphaFresnel() {
          return (0, Ud.c)(this, qO, "f")
        }
        set useLinearAlphaFresnel(dd) {
          (0, Ud.e)(this, qO, dd, "f")
        }
        get environmentBRDFTexture() {
          return (0, Ud.c)(this, HO, "f")
        }
        set environmentBRDFTexture(dd) {
          (0, Ud.e)(this, HO, dd, "f")
        }
        get forceNormalForward() {
          return (0, Ud.c)(this, yO, "f")
        }
        set forceNormalForward(dd) {
          (0, Ud.e)(this, yO, dd, "f")
        }
        get enableSpecularAntiAliasing() {
          return (0, Ud.c)(this, bO, "f")
        }
        set enableSpecularAntiAliasing(dd) {
          (0, Ud.e)(this, bO, dd, "f")
        }
        get useHorizonOcclusion() {
          return (0, Ud.c)(this, TO, "f")
        }
        set useHorizonOcclusion(dd) {
          (0, Ud.e)(this, TO, dd, "f")
        }
        get useRadianceOcclusion() {
          return (0, Ud.c)(this, pO, "f")
        }
        set useRadianceOcclusion(dd) {
          (0, Ud.e)(this, pO, dd, "f")
        }
        get unlit() {
          return (0, Ud.c)(this, YO, "f")
        }
        set unlit(dd) {
          (0, Ud.e)(this, YO, dd, "f")
        }
        get applyDecalMapAfterDetailMap() {
          return (0, Ud.c)(this, gO, "f")
        }
        set applyDecalMapAfterDetailMap(dd) {
          (0, Ud.e)(this, gO, dd, "f")
        }
        constructor(Rd, xd) {
          super(Rd, xd, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), Od.set(this, ((0, Ud.k)(this, jm), (0, Ud.k)(this, Dm, 1))), md.set(this, ((0, Ud.k)(this, em), (0, Ud.k)(this, Im, 1))), Wd.set(this, ((0, Ud.k)(this, lm), (0, Ud.k)(this, Cm, 1))), Fd.set(this, ((0, Ud.k)(this, Zm), (0, Ud.k)(this, km, 1))), Xd.set(this, ((0, Ud.k)(this, fm), (0, Ud.k)(this, Mm, !1))), Kd.set(this, ((0, Ud.k)(this, dW), (0, Ud.k)(this, OW, void 0))), hd.set(this, ((0, Ud.k)(this, mW), (0, Ud.k)(this, WW, void 0))), vd.set(this, ((0, Ud.k)(this, FW), (0, Ud.k)(this, RW, void 0))), Qd.set(this, ((0, Ud.k)(this, XW), (0, Ud.k)(this, KW, void 0))), td.set(this, ((0, Ud.k)(this, hW), (0, Ud.k)(this, vW, 1))), od.set(this, ((0, Ud.k)(this, QW), (0, Ud.k)(this, tW, dd.DEFAULT_AO_ON_ANALYTICAL_LIGHTS))), Nd.set(this, ((0, Ud.k)(this, oW), (0, Ud.k)(this, NW, void 0))), qd.set(this, ((0, Ud.k)(this, qW), (0, Ud.k)(this, HW, void 0))), Hd.set(this, ((0, Ud.k)(this, yW), (0, Ud.k)(this, bW, void 0))), yd.set(this, ((0, Ud.k)(this, TW), (0, Ud.k)(this, pW, void 0))), bd.set(this, ((0, Ud.k)(this, YW), (0, Ud.k)(this, gW, void 0))), Td.set(this, ((0, Ud.k)(this, wW), (0, Ud.k)(this, aW, void 0))), pd.set(this, ((0, Ud.k)(this, EW), (0, Ud.k)(this, JW, void 0))), Yd.set(this, ((0, Ud.k)(this, UW), (0, Ud.k)(this, xW, 1))), gd.set(this, ((0, Ud.k)(this, BW), (0, Ud.k)(this, SW, ld.d.White()))), wd.set(this, ((0, Ud.k)(this, sW), (0, Ud.k)(this, uW, !1))), Ed.set(this, ((0, Ud.k)(this, VW), (0, Ud.k)(this, iW, void 0))), Jd.set(this, ((0, Ud.k)(this, AW), (0, Ud.k)(this, rW, void 0))), Bd.set(this, ((0, Ud.k)(this, GW), (0, Ud.k)(this, nW, void 0))), Sd.set(this, ((0, Ud.k)(this, LW), (0, Ud.k)(this, PW, void 0))), sd.set(this, ((0, Ud.k)(this, zW), (0, Ud.k)(this, cW, void 0))), ud.set(this, ((0, Ud.k)(this, jW), (0, Ud.k)(this, DW, new ld.d(0, 0, 0)))), Vd.set(this, ((0, Ud.k)(this, eW), (0, Ud.k)(this, IW, new ld.d(1, 1, 1)))), Ad.set(this, ((0, Ud.k)(this, lW), (0, Ud.k)(this, CW, 1))), Gd.set(this, ((0, Ud.k)(this, ZW), (0, Ud.k)(this, kW, void 0))), nd.set(this, ((0, Ud.k)(this, fW), (0, Ud.k)(this, MW, new ld.d(1, 1, 1)))), Ld.set(this, ((0, Ud.k)(this, dF), (0, Ud.k)(this, OF, new ld.d(1, 1, 1)))), Pd.set(this, ((0, Ud.k)(this, mF), (0, Ud.k)(this, WF, new ld.d(0, 0, 0)))), zd.set(this, ((0, Ud.k)(this, FF), (0, Ud.k)(this, RF, 1))), cd.set(this, ((0, Ud.k)(this, XF), (0, Ud.k)(this, KF, !1))), jd.set(this, ((0, Ud.k)(this, hF), (0, Ud.k)(this, vF, !1))), Dd.set(this, ((0, Ud.k)(this, QF), (0, Ud.k)(this, tF, !1))), ed.set(this, ((0, Ud.k)(this, oF), (0, Ud.k)(this, NF, .4))), Id.set(this, ((0, Ud.k)(this, qF), (0, Ud.k)(this, HF, !0))), Cd.set(this, ((0, Ud.k)(this, yF), (0, Ud.k)(this, bF, !1))), Zd.set(this, ((0, Ud.k)(this, TF), (0, Ud.k)(this, pF, !0))), kd.set(this, ((0, Ud.k)(this, YF), (0, Ud.k)(this, gF, !1))), fd.set(this, ((0, Ud.k)(this, wF), (0, Ud.k)(this, aF, !1))), Md.set(this, ((0, Ud.k)(this, EF), (0, Ud.k)(this, JF, !1))), dO.set(this, ((0, Ud.k)(this, UF), (0, Ud.k)(this, xF, !1))), OO.set(this, ((0, Ud.k)(this, BF), (0, Ud.k)(this, SF, !1))), mO.set(this, ((0, Ud.k)(this, sF), (0, Ud.k)(this, uF, !0))), WO.set(this, ((0, Ud.k)(this, VF), (0, Ud.k)(this, iF, !1))), FO.set(this, ((0, Ud.k)(this, AF), (0, Ud.k)(this, rF, !1))), RO.set(this, ((0, Ud.k)(this, GF), (0, Ud.k)(this, nF, !1))), XO.set(this, ((0, Ud.k)(this, LF), (0, Ud.k)(this, PF, .05))), KO.set(this, ((0, Ud.k)(this, zF), (0, Ud.k)(this, cF, !1))), hO.set(this, ((0, Ud.k)(this, jF), (0, Ud.k)(this, DF, !1))), vO.set(this, ((0, Ud.k)(this, eF), (0, Ud.k)(this, IF, 4))), QO.set(this, ((0, Ud.k)(this, lF), (0, Ud.k)(this, CF, !1))), tO.set(this, ((0, Ud.k)(this, ZF), (0, Ud.k)(this, kF, !1))), oO.set(this, ((0, Ud.k)(this, fF), (0, Ud.k)(this, MF, !1))), NO.set(this, ((0, Ud.k)(this, dR), (0, Ud.k)(this, OR, !1))), qO.set(this, ((0, Ud.k)(this, mR), (0, Ud.k)(this, WR, !1))), HO.set(this, ((0, Ud.k)(this, FR), (0, Ud.k)(this, RR, null))), yO.set(this, ((0, Ud.k)(this, XR), (0, Ud.k)(this, KR, !1))), bO.set(this, ((0, Ud.k)(this, hR), (0, Ud.k)(this, vR, !1))), TO.set(this, ((0, Ud.k)(this, QR), (0, Ud.k)(this, tR, !0))), pO.set(this, ((0, Ud.k)(this, oR), (0, Ud.k)(this, NR, !0))), YO.set(this, ((0, Ud.k)(this, qR), (0, Ud.k)(this, HR, !1))), gO.set(this, ((0, Ud.k)(this, yR), (0, Ud.k)(this, bR, !1))), (0, Ud.k)(this, TR), this._environmentBRDFTexture = rd(this.zV())
        }
        getClassName() {
          return "PBRMaterial"
        }
        clone(Od) {
          let md = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            Wd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const Fd = JO.b.Clone((() => new dd(Od, this.zV())), this, {
            cloneTexturesOnlyOnce: md
          });
          return Fd.id = Od, Fd.name = Od, this.stencil.copyTo(Fd.stencil), this._clonePlugins(Fd, Wd), Fd
        }
        serialize() {
          const dd = super.serialize();
          return dd.customType = "BABYLON.PBRMaterial", dd
        }
        static Parse(Od, md, Wd) {
          const Fd = JO.b.Parse((() => new dd(Od.name, md)), Od, md, Wd);
          return Od.stencil && Fd.stencil.parse(Od.stencil, md, Wd), Rd.b._ParsePlugins(Od, Fd, md, Wd), Od.clearCoat && Fd.clearCoat.parse(Od.clearCoat, md, Wd), Od.anisotropy && Fd.anisotropy.parse(Od.anisotropy, md, Wd), Od.brdf && Fd.brdf.parse(Od.brdf, md, Wd), Od.sheen && Fd.sheen.parse(Od.sheen, md, Wd), Od.subSurface && Fd.subSurface.parse(Od.subSurface, md, Wd), Od.iridescence && Fd.iridescence.parse(Od.iridescence, md, Wd), Fd
        }
      }, Od = new WeakMap, md = new WeakMap, Wd = new WeakMap, Fd = new WeakMap, Xd = new WeakMap, Kd = new WeakMap, hd = new WeakMap, vd = new WeakMap, Qd = new WeakMap, td = new WeakMap, od = new WeakMap, Nd = new WeakMap, qd = new WeakMap, Hd = new WeakMap, yd = new WeakMap, bd = new WeakMap, Td = new WeakMap, pd = new WeakMap, Yd = new WeakMap, gd = new WeakMap, wd = new WeakMap, Ed = new WeakMap, Jd = new WeakMap, Bd = new WeakMap, Sd = new WeakMap, sd = new WeakMap, ud = new WeakMap, Vd = new WeakMap, Ad = new WeakMap, Gd = new WeakMap, nd = new WeakMap, Ld = new WeakMap, Pd = new WeakMap, zd = new WeakMap, cd = new WeakMap, jd = new WeakMap, Dd = new WeakMap, ed = new WeakMap, Id = new WeakMap, Cd = new WeakMap, Zd = new WeakMap, kd = new WeakMap, fd = new WeakMap, Md = new WeakMap, dO = new WeakMap, OO = new WeakMap, mO = new WeakMap, WO = new WeakMap, FO = new WeakMap, RO = new WeakMap, XO = new WeakMap, KO = new WeakMap, hO = new WeakMap, vO = new WeakMap, QO = new WeakMap, tO = new WeakMap, oO = new WeakMap, NO = new WeakMap, qO = new WeakMap, HO = new WeakMap, yO = new WeakMap, bO = new WeakMap, TO = new WeakMap, pO = new WeakMap, YO = new WeakMap, gO = new WeakMap, (() => {
        const Od = "function" === typeof Symbol && Symbol.metadata ? Object.create(cm[Symbol.metadata] ?? null) : void 0;
        wO = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], aO = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], UO = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], xO = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], BO = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], SO = [(0, xd.x)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], sO = [(0, xd.x)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], uO = [(0, xd.x)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], VO = [(0, xd.x)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], iO = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], AO = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], rO = [(0, xd.x)(), (0, xd.g)("_markAllSubMeshesAsTexturesAndMiscDirty")], GO = [(0, xd.x)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], nO = [(0, xd.x)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], LO = [(0, xd.x)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], PO = [(0, xd.x)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], zO = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], cO = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], jO = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], DO = [(0, xd.m)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], eO = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], IO = [(0, xd.x)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], lO = [(0, xd.x)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], CO = [(0, xd.x)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], ZO = [(0, xd.x)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], kO = [(0, xd.x)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty", null)], fO = [(0, xd.m)("ambient"), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], MO = [(0, xd.m)("albedo"), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], dm = [(0, xd.E)("baseWeight"), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], Om = [(0, xd.E)("baseDiffuseRoughness"), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], mm = [(0, xd.m)("reflectivity"), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], Wm = [(0, xd.m)("reflection"), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], Fm = [(0, xd.m)("emissive"), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], Rm = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], Xm = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], Km = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesAndMiscDirty")], hm = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesAndMiscDirty")], Qm = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesAndMiscDirty")], tm = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], om = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], Nm = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], qm = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], Hm = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], ym = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], bm = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], Tm = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], pm = [(0, xd.E)()], Ym = [(0, xd.E)()], gm = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], wm = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], am = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], Em = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], Jm = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], Um = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsLightsDirty")], xm = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], Bm = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsLightsDirty")], Sm = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], sm = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], um = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], Vm = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], im = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], Am = [(0, xd.g)("_markAllSubMeshesAsTexturesDirty")], rm = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], Gm = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], nm = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], Lm = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsTexturesDirty")], Pm = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsMiscDirty")], zm = [(0, xd.E)(), (0, xd.g)("_markAllSubMeshesAsMiscDirty")], (0, Ud.h)(dd, null, wO, {
          kind: "accessor",
          name: "directIntensity",
          static: !1,
          private: !1,
          access: {
            has: dd => "directIntensity" in dd,
            get: dd => dd.directIntensity,
            set: (dd, Od) => {
              dd.directIntensity = Od
            }
          },
          metadata: Od
        }, Dm, em), (0, Ud.h)(dd, null, aO, {
          kind: "accessor",
          name: "emissiveIntensity",
          static: !1,
          private: !1,
          access: {
            has: dd => "emissiveIntensity" in dd,
            get: dd => dd.emissiveIntensity,
            set: (dd, Od) => {
              dd.emissiveIntensity = Od
            }
          },
          metadata: Od
        }, Im, lm), (0, Ud.h)(dd, null, UO, {
          kind: "accessor",
          name: "environmentIntensity",
          static: !1,
          private: !1,
          access: {
            has: dd => "environmentIntensity" in dd,
            get: dd => dd.environmentIntensity,
            set: (dd, Od) => {
              dd.environmentIntensity = Od
            }
          },
          metadata: Od
        }, Cm, Zm), (0, Ud.h)(dd, null, xO, {
          kind: "accessor",
          name: "specularIntensity",
          static: !1,
          private: !1,
          access: {
            has: dd => "specularIntensity" in dd,
            get: dd => dd.specularIntensity,
            set: (dd, Od) => {
              dd.specularIntensity = Od
            }
          },
          metadata: Od
        }, km, fm), (0, Ud.h)(dd, null, BO, {
          kind: "accessor",
          name: "disableBumpMap",
          static: !1,
          private: !1,
          access: {
            has: dd => "disableBumpMap" in dd,
            get: dd => dd.disableBumpMap,
            set: (dd, Od) => {
              dd.disableBumpMap = Od
            }
          },
          metadata: Od
        }, Mm, dW), (0, Ud.h)(dd, null, SO, {
          kind: "accessor",
          name: "albedoTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "albedoTexture" in dd,
            get: dd => dd.albedoTexture,
            set: (dd, Od) => {
              dd.albedoTexture = Od
            }
          },
          metadata: Od
        }, OW, mW), (0, Ud.h)(dd, null, sO, {
          kind: "accessor",
          name: "baseWeightTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "baseWeightTexture" in dd,
            get: dd => dd.baseWeightTexture,
            set: (dd, Od) => {
              dd.baseWeightTexture = Od
            }
          },
          metadata: Od
        }, WW, FW), (0, Ud.h)(dd, null, uO, {
          kind: "accessor",
          name: "baseDiffuseRoughnessTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "baseDiffuseRoughnessTexture" in dd,
            get: dd => dd.baseDiffuseRoughnessTexture,
            set: (dd, Od) => {
              dd.baseDiffuseRoughnessTexture = Od
            }
          },
          metadata: Od
        }, RW, XW), (0, Ud.h)(dd, null, VO, {
          kind: "accessor",
          name: "ambientTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "ambientTexture" in dd,
            get: dd => dd.ambientTexture,
            set: (dd, Od) => {
              dd.ambientTexture = Od
            }
          },
          metadata: Od
        }, KW, hW), (0, Ud.h)(dd, null, iO, {
          kind: "accessor",
          name: "ambientTextureStrength",
          static: !1,
          private: !1,
          access: {
            has: dd => "ambientTextureStrength" in dd,
            get: dd => dd.ambientTextureStrength,
            set: (dd, Od) => {
              dd.ambientTextureStrength = Od
            }
          },
          metadata: Od
        }, vW, QW), (0, Ud.h)(dd, null, AO, {
          kind: "accessor",
          name: "ambientTextureImpactOnAnalyticalLights",
          static: !1,
          private: !1,
          access: {
            has: dd => "ambientTextureImpactOnAnalyticalLights" in dd,
            get: dd => dd.ambientTextureImpactOnAnalyticalLights,
            set: (dd, Od) => {
              dd.ambientTextureImpactOnAnalyticalLights = Od
            }
          },
          metadata: Od
        }, tW, oW), (0, Ud.h)(dd, null, rO, {
          kind: "accessor",
          name: "opacityTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "opacityTexture" in dd,
            get: dd => dd.opacityTexture,
            set: (dd, Od) => {
              dd.opacityTexture = Od
            }
          },
          metadata: Od
        }, NW, qW), (0, Ud.h)(dd, null, GO, {
          kind: "accessor",
          name: "reflectionTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "reflectionTexture" in dd,
            get: dd => dd.reflectionTexture,
            set: (dd, Od) => {
              dd.reflectionTexture = Od
            }
          },
          metadata: Od
        }, HW, yW), (0, Ud.h)(dd, null, nO, {
          kind: "accessor",
          name: "emissiveTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "emissiveTexture" in dd,
            get: dd => dd.emissiveTexture,
            set: (dd, Od) => {
              dd.emissiveTexture = Od
            }
          },
          metadata: Od
        }, bW, TW), (0, Ud.h)(dd, null, LO, {
          kind: "accessor",
          name: "reflectivityTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "reflectivityTexture" in dd,
            get: dd => dd.reflectivityTexture,
            set: (dd, Od) => {
              dd.reflectivityTexture = Od
            }
          },
          metadata: Od
        }, pW, YW), (0, Ud.h)(dd, null, PO, {
          kind: "accessor",
          name: "metallicTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "metallicTexture" in dd,
            get: dd => dd.metallicTexture,
            set: (dd, Od) => {
              dd.metallicTexture = Od
            }
          },
          metadata: Od
        }, gW, wW), (0, Ud.h)(dd, null, zO, {
          kind: "accessor",
          name: "metallic",
          static: !1,
          private: !1,
          access: {
            has: dd => "metallic" in dd,
            get: dd => dd.metallic,
            set: (dd, Od) => {
              dd.metallic = Od
            }
          },
          metadata: Od
        }, aW, EW), (0, Ud.h)(dd, null, cO, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: dd => "roughness" in dd,
            get: dd => dd.roughness,
            set: (dd, Od) => {
              dd.roughness = Od
            }
          },
          metadata: Od
        }, JW, UW), (0, Ud.h)(dd, null, jO, {
          kind: "accessor",
          name: "metallicF0Factor",
          static: !1,
          private: !1,
          access: {
            has: dd => "metallicF0Factor" in dd,
            get: dd => dd.metallicF0Factor,
            set: (dd, Od) => {
              dd.metallicF0Factor = Od
            }
          },
          metadata: Od
        }, xW, BW), (0, Ud.h)(dd, null, DO, {
          kind: "accessor",
          name: "metallicReflectanceColor",
          static: !1,
          private: !1,
          access: {
            has: dd => "metallicReflectanceColor" in dd,
            get: dd => dd.metallicReflectanceColor,
            set: (dd, Od) => {
              dd.metallicReflectanceColor = Od
            }
          },
          metadata: Od
        }, SW, sW), (0, Ud.h)(dd, null, eO, {
          kind: "accessor",
          name: "useOnlyMetallicFromMetallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "useOnlyMetallicFromMetallicReflectanceTexture" in dd,
            get: dd => dd.useOnlyMetallicFromMetallicReflectanceTexture,
            set: (dd, Od) => {
              dd.useOnlyMetallicFromMetallicReflectanceTexture = Od
            }
          },
          metadata: Od
        }, uW, VW), (0, Ud.h)(dd, null, IO, {
          kind: "accessor",
          name: "metallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "metallicReflectanceTexture" in dd,
            get: dd => dd.metallicReflectanceTexture,
            set: (dd, Od) => {
              dd.metallicReflectanceTexture = Od
            }
          },
          metadata: Od
        }, iW, AW), (0, Ud.h)(dd, null, lO, {
          kind: "accessor",
          name: "reflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "reflectanceTexture" in dd,
            get: dd => dd.reflectanceTexture,
            set: (dd, Od) => {
              dd.reflectanceTexture = Od
            }
          },
          metadata: Od
        }, rW, GW), (0, Ud.h)(dd, null, CO, {
          kind: "accessor",
          name: "microSurfaceTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "microSurfaceTexture" in dd,
            get: dd => dd.microSurfaceTexture,
            set: (dd, Od) => {
              dd.microSurfaceTexture = Od
            }
          },
          metadata: Od
        }, nW, LW), (0, Ud.h)(dd, null, ZO, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "bumpTexture" in dd,
            get: dd => dd.bumpTexture,
            set: (dd, Od) => {
              dd.bumpTexture = Od
            }
          },
          metadata: Od
        }, PW, zW), (0, Ud.h)(dd, null, kO, {
          kind: "accessor",
          name: "lightmapTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "lightmapTexture" in dd,
            get: dd => dd.lightmapTexture,
            set: (dd, Od) => {
              dd.lightmapTexture = Od
            }
          },
          metadata: Od
        }, cW, jW), (0, Ud.h)(dd, null, fO, {
          kind: "accessor",
          name: "ambientColor",
          static: !1,
          private: !1,
          access: {
            has: dd => "ambientColor" in dd,
            get: dd => dd.ambientColor,
            set: (dd, Od) => {
              dd.ambientColor = Od
            }
          },
          metadata: Od
        }, DW, eW), (0, Ud.h)(dd, null, MO, {
          kind: "accessor",
          name: "albedoColor",
          static: !1,
          private: !1,
          access: {
            has: dd => "albedoColor" in dd,
            get: dd => dd.albedoColor,
            set: (dd, Od) => {
              dd.albedoColor = Od
            }
          },
          metadata: Od
        }, IW, lW), (0, Ud.h)(dd, null, dm, {
          kind: "accessor",
          name: "baseWeight",
          static: !1,
          private: !1,
          access: {
            has: dd => "baseWeight" in dd,
            get: dd => dd.baseWeight,
            set: (dd, Od) => {
              dd.baseWeight = Od
            }
          },
          metadata: Od
        }, CW, ZW), (0, Ud.h)(dd, null, Om, {
          kind: "accessor",
          name: "baseDiffuseRoughness",
          static: !1,
          private: !1,
          access: {
            has: dd => "baseDiffuseRoughness" in dd,
            get: dd => dd.baseDiffuseRoughness,
            set: (dd, Od) => {
              dd.baseDiffuseRoughness = Od
            }
          },
          metadata: Od
        }, kW, fW), (0, Ud.h)(dd, null, mm, {
          kind: "accessor",
          name: "reflectivityColor",
          static: !1,
          private: !1,
          access: {
            has: dd => "reflectivityColor" in dd,
            get: dd => dd.reflectivityColor,
            set: (dd, Od) => {
              dd.reflectivityColor = Od
            }
          },
          metadata: Od
        }, MW, dF), (0, Ud.h)(dd, null, Wm, {
          kind: "accessor",
          name: "reflectionColor",
          static: !1,
          private: !1,
          access: {
            has: dd => "reflectionColor" in dd,
            get: dd => dd.reflectionColor,
            set: (dd, Od) => {
              dd.reflectionColor = Od
            }
          },
          metadata: Od
        }, OF, mF), (0, Ud.h)(dd, null, Fm, {
          kind: "accessor",
          name: "emissiveColor",
          static: !1,
          private: !1,
          access: {
            has: dd => "emissiveColor" in dd,
            get: dd => dd.emissiveColor,
            set: (dd, Od) => {
              dd.emissiveColor = Od
            }
          },
          metadata: Od
        }, WF, FF), (0, Ud.h)(dd, null, Rm, {
          kind: "accessor",
          name: "microSurface",
          static: !1,
          private: !1,
          access: {
            has: dd => "microSurface" in dd,
            get: dd => dd.microSurface,
            set: (dd, Od) => {
              dd.microSurface = Od
            }
          },
          metadata: Od
        }, RF, XF), (0, Ud.h)(dd, null, Xm, {
          kind: "accessor",
          name: "useLightmapAsShadowmap",
          static: !1,
          private: !1,
          access: {
            has: dd => "useLightmapAsShadowmap" in dd,
            get: dd => dd.useLightmapAsShadowmap,
            set: (dd, Od) => {
              dd.useLightmapAsShadowmap = Od
            }
          },
          metadata: Od
        }, KF, hF), (0, Ud.h)(dd, null, Km, {
          kind: "accessor",
          name: "useAlphaFromAlbedoTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "useAlphaFromAlbedoTexture" in dd,
            get: dd => dd.useAlphaFromAlbedoTexture,
            set: (dd, Od) => {
              dd.useAlphaFromAlbedoTexture = Od
            }
          },
          metadata: Od
        }, vF, QF), (0, Ud.h)(dd, null, hm, {
          kind: "accessor",
          name: "forceAlphaTest",
          static: !1,
          private: !1,
          access: {
            has: dd => "forceAlphaTest" in dd,
            get: dd => dd.forceAlphaTest,
            set: (dd, Od) => {
              dd.forceAlphaTest = Od
            }
          },
          metadata: Od
        }, tF, oF), (0, Ud.h)(dd, null, Qm, {
          kind: "accessor",
          name: "alphaCutOff",
          static: !1,
          private: !1,
          access: {
            has: dd => "alphaCutOff" in dd,
            get: dd => dd.alphaCutOff,
            set: (dd, Od) => {
              dd.alphaCutOff = Od
            }
          },
          metadata: Od
        }, NF, qF), (0, Ud.h)(dd, null, tm, {
          kind: "accessor",
          name: "useSpecularOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: dd => "useSpecularOverAlpha" in dd,
            get: dd => dd.useSpecularOverAlpha,
            set: (dd, Od) => {
              dd.useSpecularOverAlpha = Od
            }
          },
          metadata: Od
        }, HF, yF), (0, Ud.h)(dd, null, om, {
          kind: "accessor",
          name: "useMicroSurfaceFromReflectivityMapAlpha",
          static: !1,
          private: !1,
          access: {
            has: dd => "useMicroSurfaceFromReflectivityMapAlpha" in dd,
            get: dd => dd.useMicroSurfaceFromReflectivityMapAlpha,
            set: (dd, Od) => {
              dd.useMicroSurfaceFromReflectivityMapAlpha = Od
            }
          },
          metadata: Od
        }, bF, TF), (0, Ud.h)(dd, null, Nm, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureAlpha",
          static: !1,
          private: !1,
          access: {
            has: dd => "useRoughnessFromMetallicTextureAlpha" in dd,
            get: dd => dd.useRoughnessFromMetallicTextureAlpha,
            set: (dd, Od) => {
              dd.useRoughnessFromMetallicTextureAlpha = Od
            }
          },
          metadata: Od
        }, pF, YF), (0, Ud.h)(dd, null, qm, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureGreen",
          static: !1,
          private: !1,
          access: {
            has: dd => "useRoughnessFromMetallicTextureGreen" in dd,
            get: dd => dd.useRoughnessFromMetallicTextureGreen,
            set: (dd, Od) => {
              dd.useRoughnessFromMetallicTextureGreen = Od
            }
          },
          metadata: Od
        }, gF, wF), (0, Ud.h)(dd, null, Hm, {
          kind: "accessor",
          name: "useMetallnessFromMetallicTextureBlue",
          static: !1,
          private: !1,
          access: {
            has: dd => "useMetallnessFromMetallicTextureBlue" in dd,
            get: dd => dd.useMetallnessFromMetallicTextureBlue,
            set: (dd, Od) => {
              dd.useMetallnessFromMetallicTextureBlue = Od
            }
          },
          metadata: Od
        }, aF, EF), (0, Ud.h)(dd, null, ym, {
          kind: "accessor",
          name: "useAmbientOcclusionFromMetallicTextureRed",
          static: !1,
          private: !1,
          access: {
            has: dd => "useAmbientOcclusionFromMetallicTextureRed" in dd,
            get: dd => dd.useAmbientOcclusionFromMetallicTextureRed,
            set: (dd, Od) => {
              dd.useAmbientOcclusionFromMetallicTextureRed = Od
            }
          },
          metadata: Od
        }, JF, UF), (0, Ud.h)(dd, null, bm, {
          kind: "accessor",
          name: "useAmbientInGrayScale",
          static: !1,
          private: !1,
          access: {
            has: dd => "useAmbientInGrayScale" in dd,
            get: dd => dd.useAmbientInGrayScale,
            set: (dd, Od) => {
              dd.useAmbientInGrayScale = Od
            }
          },
          metadata: Od
        }, xF, BF), (0, Ud.h)(dd, null, Tm, {
          kind: "accessor",
          name: "useAutoMicroSurfaceFromReflectivityMap",
          static: !1,
          private: !1,
          access: {
            has: dd => "useAutoMicroSurfaceFromReflectivityMap" in dd,
            get: dd => dd.useAutoMicroSurfaceFromReflectivityMap,
            set: (dd, Od) => {
              dd.useAutoMicroSurfaceFromReflectivityMap = Od
            }
          },
          metadata: Od
        }, SF, sF), (0, Ud.h)(dd, null, pm, {
          kind: "getter",
          name: "usePhysicalLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: dd => "usePhysicalLightFalloff" in dd,
            get: dd => dd.usePhysicalLightFalloff
          },
          metadata: Od
        }, null, jm), (0, Ud.h)(dd, null, Ym, {
          kind: "getter",
          name: "useGLTFLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: dd => "useGLTFLightFalloff" in dd,
            get: dd => dd.useGLTFLightFalloff
          },
          metadata: Od
        }, null, jm), (0, Ud.h)(dd, null, gm, {
          kind: "accessor",
          name: "useRadianceOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: dd => "useRadianceOverAlpha" in dd,
            get: dd => dd.useRadianceOverAlpha,
            set: (dd, Od) => {
              dd.useRadianceOverAlpha = Od
            }
          },
          metadata: Od
        }, uF, VF), (0, Ud.h)(dd, null, wm, {
          kind: "accessor",
          name: "useObjectSpaceNormalMap",
          static: !1,
          private: !1,
          access: {
            has: dd => "useObjectSpaceNormalMap" in dd,
            get: dd => dd.useObjectSpaceNormalMap,
            set: (dd, Od) => {
              dd.useObjectSpaceNormalMap = Od
            }
          },
          metadata: Od
        }, iF, AF), (0, Ud.h)(dd, null, am, {
          kind: "accessor",
          name: "useParallax",
          static: !1,
          private: !1,
          access: {
            has: dd => "useParallax" in dd,
            get: dd => dd.useParallax,
            set: (dd, Od) => {
              dd.useParallax = Od
            }
          },
          metadata: Od
        }, rF, GF), (0, Ud.h)(dd, null, Em, {
          kind: "accessor",
          name: "useParallaxOcclusion",
          static: !1,
          private: !1,
          access: {
            has: dd => "useParallaxOcclusion" in dd,
            get: dd => dd.useParallaxOcclusion,
            set: (dd, Od) => {
              dd.useParallaxOcclusion = Od
            }
          },
          metadata: Od
        }, nF, LF), (0, Ud.h)(dd, null, Jm, {
          kind: "accessor",
          name: "parallaxScaleBias",
          static: !1,
          private: !1,
          access: {
            has: dd => "parallaxScaleBias" in dd,
            get: dd => dd.parallaxScaleBias,
            set: (dd, Od) => {
              dd.parallaxScaleBias = Od
            }
          },
          metadata: Od
        }, PF, zF), (0, Ud.h)(dd, null, Um, {
          kind: "accessor",
          name: "disableLighting",
          static: !1,
          private: !1,
          access: {
            has: dd => "disableLighting" in dd,
            get: dd => dd.disableLighting,
            set: (dd, Od) => {
              dd.disableLighting = Od
            }
          },
          metadata: Od
        }, cF, jF), (0, Ud.h)(dd, null, xm, {
          kind: "accessor",
          name: "forceIrradianceInFragment",
          static: !1,
          private: !1,
          access: {
            has: dd => "forceIrradianceInFragment" in dd,
            get: dd => dd.forceIrradianceInFragment,
            set: (dd, Od) => {
              dd.forceIrradianceInFragment = Od
            }
          },
          metadata: Od
        }, DF, eF), (0, Ud.h)(dd, null, Bm, {
          kind: "accessor",
          name: "maxSimultaneousLights",
          static: !1,
          private: !1,
          access: {
            has: dd => "maxSimultaneousLights" in dd,
            get: dd => dd.maxSimultaneousLights,
            set: (dd, Od) => {
              dd.maxSimultaneousLights = Od
            }
          },
          metadata: Od
        }, IF, lF), (0, Ud.h)(dd, null, Sm, {
          kind: "accessor",
          name: "invertNormalMapX",
          static: !1,
          private: !1,
          access: {
            has: dd => "invertNormalMapX" in dd,
            get: dd => dd.invertNormalMapX,
            set: (dd, Od) => {
              dd.invertNormalMapX = Od
            }
          },
          metadata: Od
        }, CF, ZF), (0, Ud.h)(dd, null, sm, {
          kind: "accessor",
          name: "invertNormalMapY",
          static: !1,
          private: !1,
          access: {
            has: dd => "invertNormalMapY" in dd,
            get: dd => dd.invertNormalMapY,
            set: (dd, Od) => {
              dd.invertNormalMapY = Od
            }
          },
          metadata: Od
        }, kF, fF), (0, Ud.h)(dd, null, um, {
          kind: "accessor",
          name: "twoSidedLighting",
          static: !1,
          private: !1,
          access: {
            has: dd => "twoSidedLighting" in dd,
            get: dd => dd.twoSidedLighting,
            set: (dd, Od) => {
              dd.twoSidedLighting = Od
            }
          },
          metadata: Od
        }, MF, dR), (0, Ud.h)(dd, null, Vm, {
          kind: "accessor",
          name: "useAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: dd => "useAlphaFresnel" in dd,
            get: dd => dd.useAlphaFresnel,
            set: (dd, Od) => {
              dd.useAlphaFresnel = Od
            }
          },
          metadata: Od
        }, OR, mR), (0, Ud.h)(dd, null, im, {
          kind: "accessor",
          name: "useLinearAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: dd => "useLinearAlphaFresnel" in dd,
            get: dd => dd.useLinearAlphaFresnel,
            set: (dd, Od) => {
              dd.useLinearAlphaFresnel = Od
            }
          },
          metadata: Od
        }, WR, FR), (0, Ud.h)(dd, null, Am, {
          kind: "accessor",
          name: "environmentBRDFTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "environmentBRDFTexture" in dd,
            get: dd => dd.environmentBRDFTexture,
            set: (dd, Od) => {
              dd.environmentBRDFTexture = Od
            }
          },
          metadata: Od
        }, RR, XR), (0, Ud.h)(dd, null, rm, {
          kind: "accessor",
          name: "forceNormalForward",
          static: !1,
          private: !1,
          access: {
            has: dd => "forceNormalForward" in dd,
            get: dd => dd.forceNormalForward,
            set: (dd, Od) => {
              dd.forceNormalForward = Od
            }
          },
          metadata: Od
        }, KR, hR), (0, Ud.h)(dd, null, Gm, {
          kind: "accessor",
          name: "enableSpecularAntiAliasing",
          static: !1,
          private: !1,
          access: {
            has: dd => "enableSpecularAntiAliasing" in dd,
            get: dd => dd.enableSpecularAntiAliasing,
            set: (dd, Od) => {
              dd.enableSpecularAntiAliasing = Od
            }
          },
          metadata: Od
        }, vR, QR), (0, Ud.h)(dd, null, nm, {
          kind: "accessor",
          name: "useHorizonOcclusion",
          static: !1,
          private: !1,
          access: {
            has: dd => "useHorizonOcclusion" in dd,
            get: dd => dd.useHorizonOcclusion,
            set: (dd, Od) => {
              dd.useHorizonOcclusion = Od
            }
          },
          metadata: Od
        }, tR, oR), (0, Ud.h)(dd, null, Lm, {
          kind: "accessor",
          name: "useRadianceOcclusion",
          static: !1,
          private: !1,
          access: {
            has: dd => "useRadianceOcclusion" in dd,
            get: dd => dd.useRadianceOcclusion,
            set: (dd, Od) => {
              dd.useRadianceOcclusion = Od
            }
          },
          metadata: Od
        }, NR, qR), (0, Ud.h)(dd, null, Pm, {
          kind: "accessor",
          name: "unlit",
          static: !1,
          private: !1,
          access: {
            has: dd => "unlit" in dd,
            get: dd => dd.unlit,
            set: (dd, Od) => {
              dd.unlit = Od
            }
          },
          metadata: Od
        }, HR, yR), (0, Ud.h)(dd, null, zm, {
          kind: "accessor",
          name: "applyDecalMapAfterDetailMap",
          static: !1,
          private: !1,
          access: {
            has: dd => "applyDecalMapAfterDetailMap" in dd,
            get: dd => dd.applyDecalMapAfterDetailMap,
            set: (dd, Od) => {
              dd.applyDecalMapAfterDetailMap = Od
            }
          },
          metadata: Od
        }, bR, TR), Od && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Od
        })
      })(), dd.PBRMATERIAL_OPAQUE = EO.PBRMATERIAL_OPAQUE, dd.PBRMATERIAL_ALPHATEST = EO.PBRMATERIAL_ALPHATEST, dd.PBRMATERIAL_ALPHABLEND = EO.PBRMATERIAL_ALPHABLEND, dd.PBRMATERIAL_ALPHATESTANDBLEND = EO.PBRMATERIAL_ALPHATESTANDBLEND, dd.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = EO.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, dd
    })();
    const LF = "KHR_materials_diffuse_transmission";

    function PF(dd, Od) {
      const md = Od.subSurface;
      let Wd = null;
      return md.translucencyIntensityTexture ? Wd = md.translucencyIntensityTexture : md.thicknessTexture && md.useMaskFromThicknessTexture && (Wd = md.thicknessTexture), Wd && !md.useGltfStyleTextures ? (Bd.c.Warn(`${dd}: Translucency intensity texture is not supported when useGltfStyleTextures = false. Ignoring for: ${Od.name}`, 1), null) : Wd
    }
    class zF {
      constructor(dd) {
        this.name = LF, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = dd
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(dd, Od, md) {
        const Wd = [];
        if (md instanceof nF && this._isExtensionEnabled(md)) {
          const Od = PF(dd, md);
          return Od && Wd.push(Od), md.subSurface.translucencyColorTexture && Wd.push(md.subSurface.translucencyColorTexture), Wd
        }
        return Wd
      }
      _isExtensionEnabled(dd) {
        if (dd.unlit) return !1;
        const Od = dd.subSurface;
        return !!Od.isTranslucencyEnabled && (!dd.unlit && !Od.useAlbedoToTintTranslucency && Od.useGltfStyleTextures && 1 === Od.volumeIndexOfRefraction && 0 === Od.minimumThickness && 0 === Od.maximumThickness)
      }
      postExportMaterialAsync(dd, Od, md) {
        return new Promise((Wd => {
          if (md instanceof nF && this._isExtensionEnabled(md)) {
            this._wasUsed = !0;
            const Wd = md.subSurface,
              Fd = PF(dd, md),
              Rd = 0 == Wd.translucencyIntensity ? void 0 : Wd.translucencyIntensity,
              Xd = this._exporter._materialExporter.getTextureInfo(Fd) ?? void 0,
              Kd = !Wd.translucencyColor || Wd.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : Wd.translucencyColor.RRd(),
              hd = this._exporter._materialExporter.getTextureInfo(Wd.translucencyColorTexture) ?? void 0,
              vd = {
                diffuseTransmissionFactor: Rd,
                diffuseTransmissionTexture: Xd,
                diffuseTransmissionColorFactor: Kd,
                diffuseTransmissionColorTexture: hd
              };
            (Xd || hd) && this._exporter._materialNeedsUVsSet.add(md), Od.extensions = Od.extensions || {}, Od.extensions[LF] = vd
          }
          Wd(Od)
        }))
      }
    }
    let cF = !1;

    function jF() {
      cF || (cF = !0, GW.RegisterExtension(LF, (dd => new zF(dd))))
    }
    jF();
    const DF = "KHR_materials_dispersion";
    class eF {
      constructor() {
        this.name = DF, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(dd) {
        if (dd.unlit) return !1;
        const Od = dd.subSurface;
        return !(!Od.isRefractionEnabled && !Od.isDispersionEnabled)
      }
      postExportMaterialAsync(dd, Od, md) {
        return new Promise((dd => {
          if (md instanceof nF && this._isExtensionEnabled(md)) {
            this._wasUsed = !0;
            const dd = {
              dispersion: md.subSurface.dispersion
            };
            Od.extensions = Od.extensions || {}, Od.extensions[DF] = dd
          }
          dd(Od)
        }))
      }
    }
    let IF = !1;

    function lF() {
      IF || (IF = !0, GW.RegisterExtension(DF, (() => new eF)))
    }
    lF();
    const CF = "KHR_materials_emissive_strength";
    class ZF {
      constructor() {
        this.name = CF, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAsync(dd, Od, md) {
        return await new Promise((dd => {
          if (!(md instanceof nF)) return dd(Od);
          const Wd = md.emissiveColor.scale(md.emissiveIntensity),
            Fd = Math.max(...Wd.RRd());
          if (Fd > 1) {
            Od.emissiveFactor = Wd.scale(1 / Fd).RRd(), this._wasUsed = !0;
            const dd = {
              emissiveStrength: Fd
            };
            Od.extensions || (Od.extensions = {}), Od.extensions[CF] = dd
          } else Od.emissiveFactor = Wd.RRd();
          return dd(Od)
        }))
      }
    }
    let kF = !1;

    function fF() {
      kF || (kF = !0, GW.RegisterExtension(CF, (() => new ZF)))
    }
    fF();
    const MF = "KHR_materials_ior";
    class dR {
      constructor() {
        this.name = MF, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(dd) {
        return !dd.unlit && (dd instanceof dm ? 1.5 != dd.specularIor : dd instanceof nF && (void 0 != dd.indexOfRefraction && 1.5 != dd.indexOfRefraction))
      }
      postExportMaterialAsync(dd, Od, md) {
        return new Promise((dd => {
          if (md instanceof nF && this._isExtensionEnabled(md)) {
            this._wasUsed = !0;
            const dd = {
              ior: md.indexOfRefraction
            };
            Od.extensions = Od.extensions || {}, Od.extensions[MF] = dd
          } else if (md instanceof dm && this._isExtensionEnabled(md)) {
            this._wasUsed = !0;
            const dd = {
              ior: md.specularIor
            };
            Od.extensions = Od.extensions || {}, Od.extensions[MF] = dd
          }
          dd(Od)
        }))
      }
    }
    let OR = !1;

    function mR() {
      OR || (OR = !0, GW.RegisterExtension(MF, (() => new dR)))
    }
    mR();
    const WR = "KHR_materials_iridescence";
    class FR {
      constructor(dd) {
        this.name = WR, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = dd
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(dd, Od, md) {
        const Wd = [];
        if (md instanceof EO) {
          if (md.iridescence.isEnabled) return md.iridescence.texture && Wd.push(md.iridescence.texture), md.iridescence.thicknessTexture && md.iridescence.thicknessTexture !== md.iridescence.texture && Wd.push(md.iridescence.thicknessTexture), Wd
        } else if (md instanceof dm && md.thinFilmWeight > 0) return md.thinFilmWeightTexture && Wd.push(md.thinFilmWeightTexture), md.thinFilmThicknessTexture && md.thinFilmThicknessTexture !== md.thinFilmWeightTexture && Wd.push(md.thinFilmThicknessTexture), Wd;
        return []
      }
      postExportMaterialAsync(dd, Od, md) {
        return new Promise((dd => {
          if (md instanceof EO) {
            if (!md.iridescence.isEnabled) return void dd(Od);
            this._wasUsed = !0, Od.extensions = Od.extensions || {};
            const Wd = this._exporter._materialExporter.getTextureInfo(md.iridescence.texture),
              Fd = this._exporter._materialExporter.getTextureInfo(md.iridescence.thicknessTexture),
              Rd = {
                iridescenceFactor: md.iridescence.intensity,
                iridescenceIor: md.iridescence.indexOfRefraction,
                iridescenceThicknessMinimum: md.iridescence.minimumThickness,
                iridescenceThicknessMaximum: md.iridescence.maximumThickness,
                iridescenceTexture: Wd ?? void 0,
                iridescenceThicknessTexture: Fd ?? void 0
              };
            null === Rd.iridescenceTexture && null === Rd.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(md), Od.extensions[WR] = Rd
          } else if (md instanceof dm) {
            if (md.thinFilmWeight <= 0) return void dd(Od);
            this._wasUsed = !0, Od.extensions = Od.extensions || {};
            const Wd = this._exporter._materialExporter.getTextureInfo(md.thinFilmWeightTexture),
              Fd = this._exporter._materialExporter.getTextureInfo(md.thinFilmThicknessTexture),
              Rd = {
                iridescenceFactor: md.thinFilmWeight,
                iridescenceIor: md.thinFilmIor,
                iridescenceThicknessMinimum: 1e3 * md.thinFilmThicknessMin,
                iridescenceThicknessMaximum: 1e3 * md.thinFilmThickness,
                iridescenceTexture: Wd ?? void 0,
                iridescenceThicknessTexture: Fd ?? void 0
              };
            null === Rd.iridescenceTexture && null === Rd.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(md), Od.extensions[WR] = Rd
          }
          dd(Od)
        }))
      }
    }
    let RR = !1;

    function XR() {
      RR || (RR = !0, GW.RegisterExtension(WR, (dd => new FR(dd))))
    }
    XR();
    const KR = "KHR_materials_sheen";
    class hR {
      constructor(dd) {
        this.name = KR, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = dd
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(dd, Od, md) {
        return md instanceof nF && md.sheen.isEnabled && md.sheen.texture ? [md.sheen.texture] : []
      }
      async postExportMaterialAsync(dd, Od, md) {
        return await new Promise((dd => {
          if (md instanceof nF) {
            if (!md.sheen.isEnabled) return void dd(Od);
            this._wasUsed = !0, null == Od.extensions && (Od.extensions = {});
            const Wd = {
              sheenColorFactor: md.sheen.color.RRd(),
              sheenRoughnessFactor: md.sheen.roughness ?? 0
            };
            null === Wd.sheenColorTexture && null === Wd.sheenRoughnessTexture || this._exporter._materialNeedsUVsSet.add(md), md.sheen.texture && (Wd.sheenColorTexture = this._exporter._materialExporter.getTextureInfo(md.sheen.texture) ?? void 0), md.sheen.textureRoughness && !md.sheen.useRoughnessFromMainTexture ? Wd.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(md.sheen.textureRoughness) ?? void 0 : md.sheen.texture && md.sheen.useRoughnessFromMainTexture && (Wd.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(md.sheen.texture) ?? void 0), Od.extensions[KR] = Wd
          }
          dd(Od)
        }))
      }
    }
    let vR = !1;

    function QR() {
      vR || (vR = !0, GW.RegisterExtension(KR, (dd => new hR(dd))))
    }
    QR();
    const tR = "KHR_materials_fuzz";

    function oR(dd, Od) {
      const md = new sd.f(Od.name, Od.zV());
      return md._texture = dd, md.coordinatesIndex = Od.coordinatesIndex, Od instanceof sd.f && (md.uOffset = Od.uOffset, md.vOffset = Od.vOffset, md.uScale = Od.uScale, md.vScale = Od.vScale, md.wAng = Od.wAng), md.wrapU = Od.wrapU, md.wrapV = Od.wrapV, md
    }
    class NR {
      constructor(dd) {
        this.name = tR, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = dd
      }
      dispose() {
        for (const dd of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[dd].dispose()
        }
        this._mergedTexturesMap = {};
        for (const dd of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[dd].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(dd, Od, md) {
        if (md instanceof dm) {
          const dd = [];
          if (md.fuzzWeight > 0) {
            md.fuzzWeightTexture && dd.push(md.fuzzWeightTexture);
            let Od = !1;
            if (md.fuzzRoughnessTexture && (md._useFuzzRoughnessFromTextureAlpha ? dd.push(md.fuzzRoughnessTexture) : Od = !0), md.fuzzColorTexture && !Od && dd.push(md.fuzzColorTexture), Od) {
              const Od = function(dd) {
                const Od = dd.fuzzColorTexture,
                  md = Od && Od.getInternalTexture() ? Od.getInternalTexture().uniqueId : "NoFuzzColor",
                  Wd = dd.fuzzRoughnessTexture;
                return `FuzzColor_${md}_FuzzRoughness_${Wd&&Wd.getInternalTexture()?Wd.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
              }(md);
              if (!this._cachedInternalTexturesMap[Od]) {
                const dd = await async function(dd) {
                  const Od = dd.zV(),
                    md = dd.fuzzColorTexture,
                    Wd = dd.fuzzRoughnessTexture;
                  return md || Wd ? (await hm("FuzzTexture", om(md ? Qm(md, 0) : tm(1), md ? Qm(md, 1) : tm(1), md ? Qm(md, 2) : tm(1), Wd ? Qm(Wd, dd._useFuzzRoughnessFromTextureAlpha ? 3 : 0) : tm(1)), Od)).getInternalTexture() : null
                }(md);
                dd && (this._cachedInternalTexturesMap[Od] = dd)
              }
              this._cachedInternalTexturesMap[Od] && (md.fuzzColorTexture && (this._mergedTexturesMap[md.fuzzColorTexture.uniqueId] = oR(this._cachedInternalTexturesMap[Od], md.fuzzColorTexture), dd.push(this._mergedTexturesMap[md.fuzzColorTexture.uniqueId])), md.fuzzRoughnessTexture && (this._mergedTexturesMap[md.fuzzRoughnessTexture.uniqueId] = oR(this._cachedInternalTexturesMap[Od], md.fuzzRoughnessTexture), dd.push(this._mergedTexturesMap[md.fuzzRoughnessTexture.uniqueId])))
            }
          }
          return dd
        }
        return []
      }
      async postExportMaterialAsync(dd, Od, md) {
        return await new Promise((dd => {
          if (md instanceof dm) {
            if (0 == md.fuzzWeight) return void dd(Od);
            this._wasUsed = !0, null == Od.extensions && (Od.extensions = {});
            const Wd = {
              fuzzFactor: md.fuzzWeight,
              fuzzColorFactor: md.fuzzColor.RRd(),
              fuzzRoughnessFactor: md.fuzzRoughness
            };
            let Fd, Rd;
            md.fuzzWeightTexture && (Wd.fuzzTexture = this._exporter._materialExporter.getTextureInfo(md.fuzzWeightTexture) ?? void 0), md.fuzzColorTexture && (Fd = this._mergedTexturesMap[md.fuzzColorTexture.uniqueId] ? this._mergedTexturesMap[md.fuzzColorTexture.uniqueId] : md.fuzzColorTexture, Wd.fuzzColorTexture = this._exporter._materialExporter.getTextureInfo(Fd) ?? void 0), md.fuzzRoughnessTexture && (Rd = this._mergedTexturesMap[md.fuzzRoughnessTexture.uniqueId] ? this._mergedTexturesMap[md.fuzzRoughnessTexture.uniqueId] : md.fuzzRoughnessTexture, Wd.fuzzRoughnessTexture = this._exporter._materialExporter.getTextureInfo(Rd) ?? void 0), null === Wd.fuzzColorTexture && null === Wd.fuzzRoughnessTexture || this._exporter._materialNeedsUVsSet.add(md), Od.extensions[tR] = Wd
          }
          dd(Od)
        }))
      }
    }
    let qR = !1;

    function HR() {
      qR || (qR = !0, GW.RegisterExtension(tR, (dd => new NR(dd))))
    }
    HR();
    const yR = "KHR_materials_specular";
    class bR {
      constructor(dd) {
        this.name = yR, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = dd
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(dd, Od, md) {
        const Wd = [];
        return md instanceof nF && this._isExtensionEnabled(md) ? (md.metallicReflectanceTexture && Wd.push(md.metallicReflectanceTexture), md.reflectanceTexture && Wd.push(md.reflectanceTexture), Wd) : Wd
      }
      _isExtensionEnabled(dd) {
        return !dd.unlit && (void 0 != dd.metallicF0Factor && 1 != dd.metallicF0Factor || void 0 != dd.metallicReflectanceColor && !dd.metallicReflectanceColor.equalsFloats(1, 1, 1) || this._hasTexturesExtension(dd))
      }
      _hasTexturesExtension(dd) {
        return null != dd.metallicReflectanceTexture || null != dd.reflectanceTexture
      }
      postExportMaterialAsync(dd, Od, md) {
        return new Promise((dd => {
          var Wd;
          if (md instanceof nF && this._isExtensionEnabled(md)) {
            this._wasUsed = !0, Od.extensions = Od.extensions || {};
            const dd = this._exporter._materialExporter.getTextureInfo(md.metallicReflectanceTexture) ?? void 0,
              Wd = this._exporter._materialExporter.getTextureInfo(md.reflectanceTexture) ?? void 0,
              Fd = {
                specularFactor: 1 == md.metallicF0Factor ? void 0 : md.metallicF0Factor,
                specularTexture: dd,
                specularColorFactor: md.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : md.metallicReflectanceColor.RRd(),
                specularColorTexture: Wd
              };
            this._hasTexturesExtension(md) && this._exporter._materialNeedsUVsSet.add(md), Od.extensions[yR] = Fd
          } else if (md instanceof dm) {
            Od.extensions = Od.extensions || {};
            const Fd = this._exporter._materialExporter.getTextureInfo(md.specularWeightTexture) ?? void 0,
              Rd = this._exporter._materialExporter.getTextureInfo(md.specularColorTexture) ?? void 0,
              Xd = 1 == md.specularWeight ? void 0 : md.specularWeight,
              Kd = md.specularColor.equalsFloats(1, 1, 1) ? void 0 : md.specularColor.RRd();
            if (!Rd && !Fd && void 0 === Xd && void 0 === Kd) return dd(Od);
            this._wasUsed = !0;
            const hd = {
                specularEdgeColorEnabled: !0
              },
              vd = {
                specularFactor: Xd,
                specularTexture: Fd,
                specularColorFactor: Kd,
                specularColorTexture: Rd,
                extensions: {}
              };
            vd.extensions.EXT_materials_specular_edge_color = hd, (Wd = this._exporter._glTF).extensionsUsed || (Wd.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("EXT_materials_specular_edge_color") && this._exporter._glTF.extensionsUsed.push("EXT_materials_specular_edge_color"), (Fd || Rd) && this._exporter._materialNeedsUVsSet.add(md), Od.extensions[yR] = vd
          }
          dd(Od)
        }))
      }
    }
    let TR = !1;

    function pR() {
      TR || (TR = !0, GW.RegisterExtension(yR, (dd => new bR(dd))))
    }
    pR();
    const YR = "KHR_materials_transmission";
    class gR {
      constructor(dd) {
        this.name = YR, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = dd
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(dd, Od, md) {
        const Wd = [];
        if (md instanceof nF) {
          if (this._isExtensionEnabled(md)) return md.subSurface.refractionIntensityTexture && md.subSurface.useGltfStyleTextures && Wd.push(md.subSurface.refractionIntensityTexture), Wd
        } else md instanceof dm && (md.transmissionWeight > 0 && md.transmissionWeightTexture && (Wd.push(md.transmissionWeightTexture), md.transmissionColorTexture && Wd.push(md.transmissionColorTexture)), md.subsurfaceWeight > 0 && md.subsurfaceWeightTexture && Wd.push(md.subsurfaceWeightTexture));
        return Wd
      }
      _isExtensionEnabled(dd) {
        if (dd instanceof dm && !dd.unlit) return dd.transmissionWeight > 0 || dd.subsurfaceWeight > 0;
        if (dd instanceof nF && !dd.unlit) {
          const Od = dd.subSurface;
          return Od.isRefractionEnabled && void 0 != Od.refractionIntensity && 0 != Od.refractionIntensity || null != Od.refractionIntensityTexture && Od.useGltfStyleTextures
        }
        return !1
      }
      async postExportMaterialAsync(dd, Od, md) {
        if (!this._isExtensionEnabled(md)) return Od;
        if (md instanceof nF) {
          this._wasUsed = !0;
          const Wd = md.subSurface,
            Fd = {
              transmissionFactor: 0 === Wd.refractionIntensity ? void 0 : Wd.refractionIntensity
            };
          if (Wd.refractionIntensityTexture)
            if (Wd.useGltfStyleTextures) {
              this._exporter._materialNeedsUVsSet.add(md);
              const dd = this._exporter._materialExporter.getTextureInfo(Wd.refractionIntensityTexture);
              dd && (Fd.transmissionTexture = dd)
            } else Bd.c.Warn(`${dd}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
          Od.extensions || (Od.extensions = {}), Od.extensions[YR] = Fd
        } else if (md instanceof dm) {
          this._wasUsed = !0;
          const dd = {
            transmissionFactor: (1 - md.transmissionWeight) * md.subsurfaceWeight + md.transmissionWeight
          };
          if (md.transmissionWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(md);
            const Od = this._exporter._materialExporter.getTextureInfo(md.transmissionWeightTexture);
            Od && (dd.transmissionTexture = Od)
          } else if (md.subsurfaceWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(md);
            const Od = this._exporter._materialExporter.getTextureInfo(md.subsurfaceWeightTexture);
            Od && (dd.transmissionTexture = Od)
          }
          if (0 == md.transmissionDepth && (!md.transmissionColor.equals(ld.d.White()) || md.transmissionColorTexture) && Od.pbrMetallicRoughness && (Od.pbrMetallicRoughness.baseColorFactor || (Od.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1]), Od.pbrMetallicRoughness.baseColorFactor[0] *= md.transmissionColor.r, Od.pbrMetallicRoughness.baseColorFactor[1] *= md.transmissionColor.g, Od.pbrMetallicRoughness.baseColorFactor[2] *= md.transmissionColor.b, md.transmissionColorTexture && !Od.pbrMetallicRoughness.baseColorTexture)) {
            const dd = this._exporter._materialExporter.getTextureInfo(md.transmissionColorTexture);
            dd && (Od.pbrMetallicRoughness.baseColorTexture = dd, this._exporter._materialNeedsUVsSet.add(md))
          }
          Od.extensions || (Od.extensions = {}), Od.extensions[YR] = dd
        }
        return Od
      }
    }
    let wR = !1;

    function aR() {
      wR || (wR = !0, GW.RegisterExtension(YR, (dd => new gR(dd))))
    }
    aR();
    var ER = md(42186);
    const JR = "KHR_materials_unlit";
    class UR {
      constructor() {
        this.name = JR, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      get wasUsed() {
        return this._wasUsed
      }
      dispose() {}
      postExportMaterialAsync(dd, Od, md) {
        return new Promise((dd => {
          let Wd = !1;
          md instanceof nF ? Wd = md.unlit : md instanceof ER.i && (Wd = md.disableLighting), Wd && (this._wasUsed = !0, null == Od.extensions && (Od.extensions = {}), Od.extensions[JR] = {}), dd(Od)
        }))
      }
    }
    let xR = !1;

    function BR() {
      xR || (xR = !0, GW.RegisterExtension(JR, (() => new UR)))
    }
    BR();
    const SR = "KHR_materials_volume";
    class sR {
      constructor(dd) {
        this.name = SR, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = dd
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(dd, Od, md) {
        const Wd = [];
        if (md instanceof nF) {
          if (this._isExtensionEnabled(md)) return md.subSurface.thicknessTexture && Wd.push(md.subSurface.thicknessTexture), Wd
        } else md instanceof dm && (md.transmissionWeight > 0 || md.subsurfaceWeight > 0) && md.geometryThicknessTexture && Wd.push(md.geometryThicknessTexture);
        return Wd
      }
      _isExtensionEnabled(dd) {
        if (dd.unlit) return !1;
        const Od = dd.subSurface;
        return !(!Od.isRefractionEnabled && !Od.isTranslucencyEnabled) && (void 0 != Od.maximumThickness && 0 != Od.maximumThickness || void 0 != Od.tintColorAtDistance && Od.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != Od.tintColor && Od.tintColor != ld.d.White() || this._hasTexturesExtension(dd))
      }
      _hasTexturesExtension(dd) {
        return null != dd.subSurface.thicknessTexture
      }
      postExportMaterialAsync(dd, Od, md) {
        return new Promise((dd => {
          if (md instanceof nF && this._isExtensionEnabled(md)) {
            this._wasUsed = !0;
            const dd = md.subSurface,
              Wd = {
                thicknessFactor: 0 == dd.maximumThickness ? void 0 : dd.maximumThickness,
                thicknessTexture: this._exporter._materialExporter.getTextureInfo(dd.thicknessTexture) ?? void 0,
                attenuationDistance: dd.tintColorAtDistance == Number.POSITIVE_INFINITY ? void 0 : dd.tintColorAtDistance,
                attenuationColor: dd.tintColor.equalsFloats(1, 1, 1) ? void 0 : dd.tintColor.RRd()
              };
            this._hasTexturesExtension(md) && this._exporter._materialNeedsUVsSet.add(md), Od.extensions = Od.extensions || {}, Od.extensions[SR] = Wd
          } else if (md instanceof dm) {
            const dd = md.transmissionWeight > 0 && !md.geometryThinWalled,
              Wd = md.subsurfaceWeight > 0 && !md.geometryThinWalled;
            if (dd || Wd) {
              this._wasUsed = !0;
              const Fd = md.geometryThickness,
                Rd = this._exporter._materialExporter.getTextureInfo(md.geometryThicknessTexture) ?? void 0;
              let Xd;
              Rd && this._exporter._materialNeedsUVsSet.add(md);
              const Kd = ld.d.White().RRd();
              if (dd && md.transmissionDepth > 0) {
                const dd = 1 / md.transmissionDepth;
                let Od = new Pd.j(-Math.log(md.transmissionColor.r) * dd, -Math.log(md.transmissionColor.g) * dd, -Math.log(md.transmissionColor.b) * dd);
                const Wd = new Pd.j(md.transmissionScatter.r * dd, md.transmissionScatter.g * dd, md.transmissionScatter.b * dd),
                  Fd = Od.subtract(Wd),
                  Rd = Math.min(Fd.x, Fd.y, Fd.z);
                Rd < 0 && (Fd.x = Fd.x - Rd, Fd.y = Fd.y - Rd, Fd.z = Fd.z - Rd), Od = Fd.add(Wd);
                Xd = 1 / Math.max(Od.x, Od.y, Od.z), Kd[0] = Math.exp(-Od.x * Xd), Kd[1] = Math.exp(-Od.y * Xd), Kd[2] = Math.exp(-Od.z * Xd)
              } else Xd = Number.MAX_VALUE, Kd[0] = 1, Kd[1] = 1, Kd[2] = 1;
              let hd = 1;
              const vd = ld.d.White().RRd();
              if (Wd) {
                const dd = md.subsurfaceRadius,
                  Od = md.subsurfaceRadiusScale,
                  Wd = new Pd.j(Od.r, Od.g, Od.b).multiplyByFloats(dd, dd, dd),
                  Fd = new Pd.j(1 / Math.max(Wd.x, 1e-6), 1 / Math.max(Wd.y, 1e-6), 1 / Math.max(Wd.z, 1e-6));
                hd = 1 / Math.max(Fd.x, Fd.y, Fd.z), vd[0] = Math.exp(-Fd.x * hd), vd[1] = Math.exp(-Fd.y * hd), vd[2] = Math.exp(-Fd.z * hd)
              }
              const Qd = (1 - md.transmissionWeight) * md.subsurfaceWeight,
                td = Qd + md.transmissionWeight,
                od = 1 / Math.max(td, 1e-6),
                Nd = md.transmissionWeight * od,
                qd = Qd * od,
                Hd = Kd.map(((dd, Od) => dd * Nd + vd[Od] * qd)),
                yd = {
                  thicknessFactor: Fd,
                  thicknessTexture: Rd,
                  attenuationDistance: Xd * Nd + hd * qd,
                  attenuationColor: Hd
                };
              Od.extensions = Od.extensions || {}, Od.extensions[SR] = yd
            }
          }
          dd(Od)
        }))
      }
    }
    let uR = !1;

    function VR() {
      uR || (uR = !0, GW.RegisterExtension(SR, (dd => new sR(dd))))
    }
    VR();
    const iR = "KHR_materials_volume_scatter";
    class AR {
      constructor(dd) {
        this.name = iR, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = dd
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(dd, Od, md) {
        const Wd = [];
        return md instanceof dm && (md.transmissionWeight > 0 && md.transmissionScatterTexture && Wd.push(md.transmissionScatterTexture), md.subsurfaceWeight > 0 && md.subsurfaceColorTexture && Wd.push(md.subsurfaceColorTexture)), Wd
      }
      _isExtensionEnabled(dd) {
        if (dd.unlit) return !1;
        const Od = dd.transmissionWeight > 0 && !dd.geometryThinWalled && dd.transmissionDepth > 0 && !dd.transmissionScatter.equals(ld.d.Black()),
          md = dd.subsurfaceWeight > 0 && !dd.geometryThinWalled;
        return !(!Od && !md)
      }
      postExportMaterialAsync(dd, Od, md) {
        return new Promise((dd => {
          if (md instanceof dm && this._isExtensionEnabled(md)) {
            this._wasUsed = !0;
            let dd = Pd.j.Zero(),
              Wd = 0;
            if (md.transmissionWeight > 0) {
              dd = function(dd) {
                const Od = new Pd.j(Math.sqrt(1 - dd.x), Math.sqrt(1 - dd.y), Math.sqrt(1 - dd.z)),
                  md = new Pd.j(1, 1, 1),
                  Wd = md.subtract(Od),
                  Fd = md.subtract(new Pd.j(.139, .139, .139).multiplyInPlace(Od)),
                  Rd = md.add(new Pd.j(1.17, 1.17, 1.17).multiplyInPlace(Od));
                return Wd.multiplyInPlace(Fd).divideInPlace(Rd)
              }(new Pd.j(md.transmissionScatter.r, md.transmissionScatter.g, md.transmissionScatter.b)), Wd = md.transmissionScatterAnisotropy
            }
            const Fd = Pd.j.Zero();
            let Rd = 0;
            md.subsurfaceWeight > 0 && (Fd.set(md.subsurfaceColor.r, md.subsurfaceColor.g, md.subsurfaceColor.b), Rd = md.subsurfaceScatterAnisotropy);
            const Xd = (1 - md.transmissionWeight) * md.subsurfaceWeight,
              Kd = Xd + md.transmissionWeight,
              hd = 1 / Math.max(Kd, 1e-6),
              vd = md.transmissionWeight * hd,
              Qd = Xd * hd,
              td = {
                multiscatterColorFactor: dd.multiplyByFloats(vd, vd, vd).addInPlace(Fd.multiplyByFloats(Qd, Qd, Qd)).RRd(),
                scatterAnisotropy: Wd * vd + Rd * Qd
              };
            if (md.subsurfaceWeight > 0 && md.subsurfaceColorTexture) {
              this._exporter._materialNeedsUVsSet.add(md);
              const dd = this._exporter._materialExporter.getTextureInfo(md.subsurfaceColorTexture);
              dd && (td.multiscatterColorTexture = dd)
            } else if (md.transmissionWeight > 0 && md.transmissionScatterTexture) {
              this._exporter._materialNeedsUVsSet.add(md);
              const dd = this._exporter._materialExporter.getTextureInfo(md.transmissionScatterTexture);
              dd && (td.multiscatterColorTexture = dd)
            }
            Od.extensions = Od.extensions || {}, Od.extensions[iR] = td
          }
          dd(Od)
        }))
      }
    }
    let rR = !1;

    function GR() {
      rR || (rR = !0, GW.RegisterExtension(iR, (dd => new AR(dd)), 101))
    }
    GR();
    const nR = "KHR_materials_diffuse_roughness";
    class LR {
      constructor(dd) {
        this.name = nR, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = dd
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(dd, Od, md) {
        const Wd = [];
        if (md instanceof EO) {
          if (md._baseDiffuseRoughness) return md._baseDiffuseRoughnessTexture && Wd.push(md._baseDiffuseRoughnessTexture), Wd
        } else if (md instanceof dm && md.baseDiffuseRoughness) return md.baseDiffuseRoughnessTexture && Wd.push(md.baseDiffuseRoughnessTexture), Wd;
        return []
      }
      postExportMaterialAsync(dd, Od, md) {
        return new Promise((dd => {
          let Wd = null,
            Fd = null;
          if (md instanceof EO ? (Wd = md._baseDiffuseRoughness, Fd = md._baseDiffuseRoughnessTexture) : md instanceof dm && (Wd = md.baseDiffuseRoughness, Fd = md.baseDiffuseRoughnessTexture), !Wd) return void dd(Od);
          this._wasUsed = !0, Od.extensions = Od.extensions || {};
          const Rd = {
            diffuseRoughnessFactor: Wd,
            diffuseRoughnessTexture: this._exporter._materialExporter.getTextureInfo(Fd) ?? void 0
          };
          null !== Rd.diffuseRoughnessTexture && this._exporter._materialNeedsUVsSet.add(md), Od.extensions[nR] = Rd, dd(Od)
        }))
      }
    }
    let PR = !1;

    function zR() {
      PR || (PR = !0, GW.RegisterExtension(nR, (dd => new LR(dd))))
    }
    zR();
    const cR = "KHR_materials_openpbr";
    class jR {
      constructor() {
        this.name = cR, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportMaterialAsync(dd, Od, md) {
        return new Promise((dd => {
          md instanceof dm && (this._wasUsed = !0, Od.extensions = Od.extensions || {}, Od.extensions[cR] = {}), dd(Od)
        }))
      }
    }
    let DR = !1;

    function eR() {
      DR || (DR = !0, GW.RegisterExtension(cR, (() => new jR)))
    }
    eR();
    const IR = "KHR_texture_transform";
    class lR {
      constructor() {
        this.name = IR, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportTexture(dd, Od, md) {
        if (md.zV() || UO.g.Warn(`${dd}: "scene" is not defined for Babylon texture ${md.name}!`), (0 !== md.uAng || 0 !== md.vAng) && (UO.g.Warn(`${dd}: Texture ${md.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== md.uRotationCenter || 0 !== md.vRotationCenter)) return;
        const Wd = {};
        let Fd = !1;
        if (0 === md.uOffset && 0 === md.vOffset || (Wd.offset = [md.uOffset, md.vOffset], Fd = !0), 1 === md.uScale && 1 === md.vScale || (Wd.scale = [md.uScale, md.vScale], Fd = !0), 0 !== md.wAng) {
          if (0 !== md.uRotationCenter || 0 !== md.vRotationCenter) {
            if (md.homogeneousRotationInUVTransform && md.uScale !== md.vScale) return void UO.g.Warn(`${dd}: Texture ${md.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${IR}.`);
            UO.g.Warn(`${dd}: Texture ${md.name} with non-origin rotation center will be exported using an adjusted offset with ${IR}.`), Wd.offset = function(dd) {
              const {
                uOffset: Od,
                vOffset: md,
                uRotationCenter: Wd,
                vRotationCenter: Fd,
                uScale: Rd,
                vScale: Xd,
                wAng: Kd
              } = dd, hd = Math.cos(Kd), vd = Math.sin(Kd), Qd = Wd * Rd, td = Fd * Xd;
              return [Od + (Qd * (1 - hd) + td * vd), md + (td * (1 - hd) - Qd * vd)]
            }(md)
          }
          Wd.rotation = -md.wAng, Fd = !0
        }
        0 !== md.coordinatesIndex && (Wd.texCoord = md.coordinatesIndex, Fd = !0), Fd && (this._wasUsed = !0, Od.extensions || (Od.extensions = {}), Od.extensions[IR] = Wd)
      }
    }
    let CR = !1;

    function ZR() {
      CR || (CR = !0, GW.RegisterExtension(IR, (() => new lR)))
    }
    ZR();
    var kR = md(41961);
    const fR = "KHR_texture_basisu";
    class MR {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(dd) {
        this.name = fR, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = dd
      }
      dispose() {}
      postExportTexture(dd, Od) {
        const md = this._exporter._textures[Od.index],
          Wd = md.source;
        if (void 0 === Wd) return;
        const Fd = this._exporter._images[Wd];
        "image/ktx2" === (Fd.mimeType || (0, kR.e)(Fd.uri)) && (md.source = void 0, md.extensions || (md.extensions = {}), md.extensions[fR] = {
          source: Wd
        }, this._wasUsed = !0)
      }
    }
    let dX = !1;

    function OX() {
      dX || (dX = !0, GW.RegisterExtension(fR, (dd => new MR(dd))))
    }
    OX();
    const mX = "EXT_texture_webp";
    class WX {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(dd) {
        this.name = mX, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = dd
      }
      dispose() {}
      postExportTexture(dd, Od) {
        const md = this._exporter._textures[Od.index],
          Wd = md.source;
        if (void 0 === Wd) return;
        const Fd = this._exporter._images[Wd];
        "image/webp" === (Fd.mimeType || (0, kR.e)(Fd.uri)) && (md.source = void 0, md.extensions || (md.extensions = {}), md.extensions[mX] = {
          source: Wd
        }, this._wasUsed = !0)
      }
    }
    let FX = !1;

    function RX() {
      FX || (FX = !0, GW.RegisterExtension(mX, (dd => new WX(dd))))
    }
    RX();
    const XX = "EXT_texture_avif";
    class KX {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(dd) {
        this.name = XX, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = dd
      }
      dispose() {}
      postExportTexture(dd, Od) {
        const md = this._exporter._textures[Od.index],
          Wd = md.source;
        if (void 0 === Wd) return;
        const Fd = this._exporter._images[Wd];
        "image/avif" === (Fd.mimeType || (0, kR.e)(Fd.uri)) && (md.source = void 0, md.extensions || (md.extensions = {}), md.extensions[XX] = {
          source: Wd
        }, this._wasUsed = !0)
      }
    }
    let hX = !1;

    function vX() {
      hX || (hX = !0, GW.RegisterExtension(XX, (dd => new KX(dd))))
    }
    vX();
    class QX {
      static CreateSTL(dd) {
        let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stlmesh",
          Fd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Rd = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Xd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Kd = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          hd = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        const vd = function(dd, Od, md) {
            const Fd = [3 * dd[md], 3 * dd[md + 1], 3 * dd[md + 2]],
              Rd = [new Wd.Cq(Od[Fd[0]], Od[Fd[0] + 2], Od[Fd[0] + 1]), new Wd.Cq(Od[Fd[1]], Od[Fd[1] + 2], Od[Fd[1] + 1]), new Wd.Cq(Od[Fd[2]], Od[Fd[2] + 2], Od[Fd[2] + 1])],
              Xd = Rd[0].subtract(Rd[1]),
              Kd = Rd[2].subtract(Rd[1]);
            return {
              v: Rd,
              n: Wd.Cq.Cross(Kd, Xd).normalize()
            }
          },
          td = function(dd, Od, md, Wd) {
            return Od = od(dd, Od, md.x, Wd), Od = od(dd, Od, md.y, Wd), od(dd, Od, md.z, Wd)
          },
          od = function(dd, Od, md, Wd) {
            return dd.setFloat32(Od, md, Wd), Od + 4
          },
          qd = function(dd) {
            if (Kd) {
              let Od = dd;
              dd instanceof Nd.e && (Od = dd.ZRd);
              const md = Od.getVerticesData(Qd.g.PositionKind, !0, !0);
              if (!md) return [];
              const Fd = Wd.Cq.Zero();
              let Rd;
              for (Rd = 0; Rd < md.length; Rd += 3) Wd.Cq.TransformCoordinatesFromFloatsToRef(md[Rd], md[Rd + 1], md[Rd + 2], dd.computeWorldMatrix(!0), Fd).toArray(md, Rd);
              return md
            }
            return dd.getVerticesData(Qd.g.PositionKind) || []
          };
        Kd && (Xd = !0);
        let Hd = "",
          yd = 0,
          bd = 0;
        if (Fd) {
          for (let md = 0; md < dd.length; md++) {
            const Od = dd[md].jRd();
            yd += Od ? Od.length / 3 : 0
          }
          const Od = new ArrayBuffer(84 + 50 * yd);
          Hd = new DataView(Od), bd += 80, Hd.setUint32(bd, yd, Rd), bd += 4
        } else hd || (Hd = "solid stlmesh\r\n");
        for (let Wd = 0; Wd < dd.length; Wd++) {
          const Od = dd[Wd];
          !Fd && hd && (Hd += "solid " + Od.name + "\r\n"), !Xd && Od instanceof oW.d && Od.bakeCurrentTransformIntoVertices();
          const md = qd(Od),
            Kd = Od.jRd() || [];
          for (let dd = 0; dd < Kd.length; dd += 3) {
            const Od = vd(Kd, md, dd);
            Fd ? (bd = td(Hd, bd, Od.n, Rd), bd = td(Hd, bd, Od.v[0], Rd), bd = td(Hd, bd, Od.v[1], Rd), bd = td(Hd, bd, Od.v[2], Rd), bd += 2) : (Hd += "\tfacet normal " + Od.n.x + " " + Od.n.y + " " + Od.n.z + "\r\n", Hd += "\t\touter loop\r\n", Hd += "\t\t\tvertex " + Od.v[0].x + " " + Od.v[0].y + " " + Od.v[0].z + "\r\n", Hd += "\t\t\tvertex " + Od.v[1].x + " " + Od.v[1].y + " " + Od.v[1].z + "\r\n", Hd += "\t\t\tvertex " + Od.v[2].x + " " + Od.v[2].y + " " + Od.v[2].z + "\r\n", Hd += "\t\tendloop\r\n", Hd += "\tendfacet\r\n")
          }!Fd && hd && (Hd += "endsolid " + name + "\r\n")
        }
        if (Fd || hd || (Hd += "endsolid stlmesh"), Od) {
          const dd = document.createElement("a"),
            Od = new Blob([Hd], {
              type: "application/octet-stream"
            });
          dd.href = window.URL.createObjectURL(Od), dd.download = md + ".stl", dd.click()
        }
        return Hd
      }
    }

    function tX(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        Wd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Fd = [];
      for (let Rd = 0; Rd < dd.length / md; Rd++) {
        const Xd = dd[Rd * md] * (Wd ? -1 : 1),
          Kd = dd[Rd * md + 1],
          hd = dd[Rd * md + 2];
        Fd.push(`(${Xd.toPrecision(Od.precision)}, ${Kd.toPrecision(Od.precision)}, ${hd.toPrecision(Od.precision)})`)
      }
      return Fd.join(", ")
    }

    function oX(dd, Od) {
      const md = [];
      for (let Wd = 0; Wd < dd.length / 2; Wd++) {
        const Fd = dd[2 * Wd],
          Rd = dd[2 * Wd + 1];
        md.push(`(${Fd.toPrecision(Od.precision)}, ${(1-Rd).toPrecision(Od.precision)})`)
      }
      return md.join(", ")
    }

    function NX(dd, Od, md, Wd) {
      const Fd = dd.getVerticesData(Qd.g.PositionKind),
        Rd = dd.getVerticesData(Qd.g.NormalKind);
      if (Fd && Rd) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${md}"\n\t\tint[] faceVertexCounts = [${function(dd){const Od=dd.jRd()?.length?dd.getTotalIndices():dd.getTotalVertices();return Array(Od/3).fill(3).join(", ")}(dd)}]\n\t\tint[] faceVertexIndices = [${function(dd){const Od=dd.jRd(),md=Od?.length??dd.getTotalVertices(),Wd=[];if(null!==Od)for(let Fd=0;Fd<md;Fd++)Wd.push(Od[Fd]);else for(let Fd=0;Fd<md;Fd++)Wd.push(Fd);return Wd.join(", ")}(dd)}]\n\t\tnormal3f[] normals = [${tX(Rd,Od,void 0,Wd)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)\n\t\tpoint3f[] points = [${tX(Fd,Od,void 0,Wd)}]\n        ${function(dd,Od){let md="";for(let Fd=0;Fd<4;Fd++){const Wd=Fd>0?Fd:"",Rd=dd.getVerticesData(Qd.g.UVKind+(Wd?Wd+1:""));Rd&&(md+=`\n\t\ttexCoord2f[] primvars:st${Wd} = [${oX(Rd,Od)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)`)}const Wd=dd.getVerticesData(Qd.g.ColorKind);return Wd&&(md+=`\
      n\ tcolor3f[] primvars: displayColor = [$ {
        tX(Wd, Od, Wd.length / dd.getTotalVertices())
      }](\n\ t\ tinterpolation = "vertex"\
        n\ t\ t)`),md}(dd,Od)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
    }

    function qX(dd, Od, md, Wd) {
      return `\n        def "Geometry"\n        {\n        ${NX(dd,Od,md,Wd)}\n        }\n        `
    }

    function HX(dd) {
      let Od = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      return Od += dd, fflate.strToU8(Od)
    }

    function yX(dd) {
      const Od = dd.m;
      return `( ${bX(Od,0)}, ${bX(Od,4)}, ${bX(Od,8)}, ${bX(Od,12)} )`
    }

    function bX(dd, Od) {
      return `(${dd[Od+0]}, ${dd[Od+1]}, ${dd[Od+2]}, ${dd[Od+3]})`
    }

    function TX(dd, Od) {
      const md = "Object_" + dd.uniqueId,
        Wd = yX(Od);
      return `def Xform "${md}" (\n\tprepend references = @./geometries/Geometry_${dd.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${Wd}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    rel material:binding = </Root/Materials/Material_${dd.material.uniqueId}>\n}\n\n`
    }

    function pX(dd) {
      switch (dd) {
        case Ed.b.TEXTURE_CLAMP_ADDRESSMODE:
          return "clamp";
        case Ed.b.TEXTURE_MIRROR_ADDRESSMODE:
          return "mirror";
        case Ed.b.TEXTURE_WRAP_ADDRESSMODE:
        default:
          return "repeat"
      }
    }

    function YX(dd) {
      return `(${dd.x}, ${dd.y})`
    }

    function gX(dd) {
      return `(${dd.r}, ${dd.g}, ${dd.b})`
    }

    function wX(dd) {
      return "image/jpeg" === dd || "image/png" === dd
    }

    function aX(dd, Od, md, Fd, Rd, Xd) {
      const Kd = dd.getInternalTexture().uniqueId + "_" + dd.invertY,
        vd = dd.mimeType || (0, hd.c)(dd.getInternalTexture()?.url ?? ""),
        Qd = wX(vd) ? vd : "image/png",
        td = "image/jpeg" === Qd ? "jpg" : "png";
      Rd[Kd] = {
        texture: dd,
        mimeType: Qd,
        ext: td
      };
      const od = dd.coordinatesIndex > 0 ? "st" + dd.coordinatesIndex : "st",
        Nd = new Wd.Vector2(dd.uScale, dd.vScale),
        qd = new Wd.Vector2(dd.uOffset, dd.vOffset),
        Hd = dd.wAng,
        yd = Math.sin(Hd),
        bd = Math.cos(Hd);
      return qd.y = 1 - qd.y - Nd.y, qd.x += yd * Nd.x, qd.y += (1 - bd) * Nd.y, `\n    def Shader "PrimvarReader_${md}"\n    {\n        uniform token info:id = "UsdPrimvarReader_float2"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = "${od}"\n        float2 outputs:result\n    }\n\n    def Shader "Transform2d_${md}"\n    {\n        uniform token info:id = "UsdTransform2d"\n        token inputs:in.connect = </Root/Materials/Material_${Od.uniqueId}/PrimvarReader_${md}.outputs:result>\n        float inputs:rotation = ${(Hd*(180/Math.PI)).toFixed(Xd.precision)}\n        float2 inputs:scale = ${YX(Nd)}\n        float2 inputs:translation = ${YX(qd)}\n        float2 outputs:result\n    }\n\n    def Shader "Texture_${dd.uniqueId}_${md}"\n    {\n        uniform token info:id = "UsdUVTexture"\n        asset inputs:file = @textures/Texture_${Kd}.${td}@\n        float2 inputs:st.connect = </Root/Materials/Material_${Od.uniqueId}/Transform2d_${md}.outputs:result>\n        ${Fd?"float4 inputs:scale = "+function(dd){return`(${dd.r}, ${dd.g}, ${dd.b}, 1.0)`}(Fd):""}\n        token inputs:sourceColorSpace = "${dd.gammaSpace?"sRGB":"raw"}"\n        token inputs:wrapS = "${pX(dd.wrapU)}"\n        token inputs:wrapT = "${pX(dd.wrapV)}"\n        float outputs:r\n        float outputs:g\n        float outputs:b\n        float3 outputs:rgb\n        ${Od.needAlphaBlending()||Od.needAlphaTesting()?"float outputs:a":""}\n    }`
    }

    function EX(dd, Od, md) {
      const Wd = "\t\t\t",
        Fd = [],
        Rd = [],
        {
          diffuseMap: Xd,
          diffuse: Kd,
          alphaCutOff: hd,
          emissiveMap: vd,
          emissive: Qd,
          normalMap: td,
          roughnessMap: od,
          roughnessChannel: Nd,
          roughness: qd,
          metalnessMap: Hd,
          metalnessChannel: bd,
          metalness: Td,
          aoMap: pd,
          aoMapChannel: Yd,
          aoMapIntensity: gd,
          alphaMap: wd,
          ior: Ed,
          clearCoatEnabled: Jd,
          clearCoat: Ud,
          clearCoatMap: xd,
          clearCoatRoughness: Bd,
          clearCoatRoughnessMap: Sd
        } = function(dd) {
          const Od = {
            diffuseMap: null,
            diffuse: null,
            alphaCutOff: 0,
            emissiveMap: null,
            emissive: null,
            normalMap: null,
            roughnessMap: null,
            roughnessChannel: "a",
            roughness: 0,
            metalnessMap: null,
            metalnessChannel: "r",
            metalness: 0,
            aoMap: null,
            aoMapChannel: "rgb",
            aoMapIntensity: 0,
            alphaMap: null,
            ior: 1,
            clearCoatEnabled: !1,
            clearCoat: 0,
            clearCoatMap: null,
            clearCoatRoughness: 0,
            clearCoatRoughnessMap: null
          };
          return dd instanceof hW.StandardMaterial ? {
            ...Od,
            diffuseMap: dd.diffuseTexture,
            diffuse: dd.diffuseColor,
            alphaCutOff: dd.alphaCutOff,
            emissiveMap: dd.emissiveTexture,
            emissive: dd.emissiveColor,
            roughness: 1,
            alphaMap: dd.opacityTexture
          } : dd instanceof EO ? {
            ...Od,
            diffuseMap: dd._albedoTexture,
            diffuse: dd._albedoColor,
            alphaCutOff: dd._alphaCutOff,
            emissiveMap: dd._emissiveTexture,
            emissive: dd._emissiveColor,
            normalMap: dd._bumpTexture,
            roughnessMap: dd._metallicTexture,
            roughnessChannel: dd._useRoughnessFromMetallicTextureAlpha ? "a" : "g",
            roughness: dd._roughness ?? 1,
            metalnessMap: dd._metallicTexture,
            metalnessChannel: dd._useMetallnessFromMetallicTextureBlue ? "b" : "r",
            metalness: dd._metallic ?? 0,
            aoMap: dd._ambientTexture,
            aoMapChannel: dd._useAmbientInGrayScale ? "r" : "rgb",
            aoMapIntensity: dd._ambientTextureStrength,
            alphaMap: dd._opacityTexture,
            ior: dd.subSurface.indexOfRefraction,
            clearCoatEnabled: dd.clearCoat.isEnabled,
            clearCoat: dd.clearCoat.intensity,
            clearCoatMap: dd.clearCoat.texture,
            clearCoatRoughness: dd.clearCoat.roughness,
            clearCoatRoughnessMap: dd.clearCoat.useRoughnessFromMainTexture ? dd.clearCoat.texture : dd.clearCoat.textureRoughness
          } : Od
        }(dd);
      return null !== Xd ? (Fd.push(`${Wd}color3f inputs:diffuseColor.connect = </Root/Materials/Material_${dd.uniqueId}/Texture_${Xd.uniqueId}_diffuse.outputs:rgb>`), dd.needAlphaBlending() ? Fd.push(`${Wd}float inputs:opacity.connect = </Root/Materials/Material_${dd.uniqueId}/Texture_${Xd.uniqueId}_diffuse.outputs:a>`) : dd.needAlphaTesting() && (Fd.push(`${Wd}float inputs:opacity.connect = </Root/Materials/Material_${dd.uniqueId}/Texture_${Xd.uniqueId}_diffuse.outputs:a>`), Fd.push(`${Wd}float inputs:opacityThreshold = ${hd}`)), Rd.push(aX(Xd, dd, "diffuse", Kd, Od, md))) : Fd.push(`${Wd}color3f inputs:diffuseColor = ${gX(Kd||yd.Color3.White())}`), null !== vd ? (Fd.push(`${Wd}color3f inputs:emissiveColor.connect = </Root/Materials/Material_${dd.uniqueId}/Texture_${vd.uniqueId}_emissive.outputs:rgb>`), Rd.push(aX(vd, dd, "emissive", Qd, Od, md))) : Qd && Qd.toLuminance() > 0 && Fd.push(`${Wd}color3f inputs:emissiveColor = ${gX(Qd)}`), null !== td && (Fd.push(`${Wd}normal3f inputs:normal.connect = </Root/Materials/Material_${dd.uniqueId}/Texture_${td.uniqueId}_normal.outputs:rgb>`), Rd.push(aX(td, dd, "normal", null, Od, md))), null !== pd && (Fd.push(`${Wd}float inputs:occlusion.connect = </Root/Materials/Material_${dd.uniqueId}/Texture_${pd.uniqueId}_occlusion.outputs:${Yd}>`), Rd.push(aX(pd, dd, "occlusion", new yd.Color3(gd, gd, gd), Od, md))), null !== od ? (Fd.push(`${Wd}float inputs:roughness.connect = </Root/Materials/Material_${dd.uniqueId}/Texture_${od.uniqueId}_roughness.outputs:${Nd}>`), Rd.push(aX(od, dd, "roughness", new yd.Color3(qd, qd, qd), Od, md))) : Fd.push(`${Wd}float inputs:roughness = ${qd}`), null !== Hd ? (Fd.push(`${Wd}float inputs:metallic.connect = </Root/Materials/Material_${dd.uniqueId}/Texture_${Hd.uniqueId}_metallic.outputs:${bd}>`), Rd.push(aX(Hd, dd, "metallic", new yd.Color3(Td, Td, Td), Od, md))) : Fd.push(`${Wd}float inputs:metallic = ${Td}`), null !== wd ? (Fd.push(`${Wd}float inputs:opacity.connect = </Root/Materials/Material_${dd.uniqueId}/Texture_${wd.uniqueId}_opacity.outputs:r>`), Fd.push(`${Wd}float inputs:opacityThreshold = 0.0001`), Rd.push(aX(wd, dd, "opacity", null, Od, md))) : Fd.push(`${Wd}float inputs:opacity = ${dd.alpha}`), Jd && (null !== xd ? (Fd.push(`${Wd}float inputs:clearcoat.connect = </Root/Materials/Material_${dd.uniqueId}/Texture_${xd.uniqueId}_clearcoat.outputs:r>`), Rd.push(aX(xd, dd, "clearcoat", new yd.Color3(Ud, Ud, Ud), Od, md))) : Fd.push(`${Wd}float inputs:clearcoat = ${Ud}`), null !== Sd ? (Fd.push(`${Wd}float inputs:clearcoatRoughness.connect = </Root/Materials/Material_${dd.uniqueId}/Texture_${Sd.uniqueId}_clearcoatRoughness.outputs:g>`), Rd.push(aX(Sd, dd, "clearcoatRoughness", new yd.Color3(Bd, Bd, Bd), Od, md))) : Fd.push(`${Wd}float inputs:clearcoatRoughness = ${Bd}`)), Fd.push(`${Wd}float inputs:ior = ${Ed}`), `\n\tdef Material "Material_${dd.uniqueId}"\n\t{\n\t\tdef Shader "PreviewSurface"\n\t\t{\n\t\t\tuniform token info:id = "UsdPreviewSurface"\n${Fd.join("\n")}\n\t\t\tint inputs:useSpecularWorkflow = 0\n\t\t\ttoken outputs:surface\n\t\t}\n\n\t\ttoken outputs:surface.connect = </Root/Materials/Material_${dd.uniqueId}/PreviewSurface.outputs:surface>\n\n${Rd.join("\n")}\n\n\t}\n`
    }

    function JX(dd) {
      dd.computeWorldMatrix(!0);
      const Od = dd.getWorldMatrix().clone(),
        md = dd.zV().useRightHandedSystem;
      let Wd = dd.material?._getEffectiveOrientation(dd) ?? dd.sideOrientation,
        Xd = !md,
        Kd = dd.parent;
      for (; Kd;) {
        if (nm(Kd, md) && null === Kd.parent) {
          md || (Od.multiplyToRef(Kd.getWorldMatrix().invert(), Od), Wd = Wd === Rd.b.ClockWiseSideOrientation ? Rd.b.CounterClockWiseSideOrientation : Rd.b.ClockWiseSideOrientation), Xd = !1;
          break
        }
        Kd = Kd.parent
      }
      return Od.determinant() < 0 && Fd.Tools.Warn(`Mesh ${dd.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
        matrix: Od,
        windingOrder: Wd === Rd.b.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
        convertToRightHanded: Xd
      }
    }
    async function UX(dd, Od, md) {
      const Rd = {
        fflateUrl: "https://unpkg.com/fflate@0.8.2",
        includeAnchoringProperties: !0,
        anchoringType: "plane",
        planeAnchoringAlignment: "horizontal",
        modelFileName: "model.usda",
        precision: 5,
        exportCamera: !1,
        cameraSensorWidth: 35,
        ...Od
      };
      "undefined" === typeof fflate && await Fd.Tools.LoadScriptAsync(Rd.fflateUrl);
      const Xd = {};
      Xd[Rd.modelFileName] = null;
      let Kd = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      Kd += function(dd) {
        return `def Xform "Root"\n    {\n        def Scope "Scenes" (\n            kind = "sceneLibrary"\n        )\n        {\n            def Xform "Scene" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    string sceneName = "Scene"\n                }\n                sceneName = "Scene"\n            )\n            {${!0===dd.includeAnchoringProperties?`\n\t\ttoken preliminary:anchoring:type = "${dd.anchoringType}"\n\t\ttoken preliminary:planeAnchoring:alignment = "${dd.planeAnchoringAlignment}"`:""}\n            `
      }(Rd);
      const hd = {};
      for (const Wd of dd.meshes) {
        if (0 === Wd.getTotalVertices()) continue;
        const dd = Wd,
          Od = dd.geometry,
          vd = dd.material;
        if (!vd || !Od || md && !md(dd)) continue;
        if (-1 !== ["StandardMaterial", "PBRMaterial", "PBRMetallicRoughnessMaterial"].indexOf(vd.getClassName())) {
          const md = "geometries/Geometry_" + Od.uniqueId + ".usda",
            {
              matrix: Wd,
              windingOrder: Fd,
              convertToRightHanded: Qd
            } = JX(dd);
          if (!(md in Xd)) {
            const dd = qX(Od, Rd, Fd, Qd);
            Xd[md] = HX(dd)
          }
          vd.uniqueId in hd || (hd[vd.uniqueId] = vd), Kd += TX(dd, Wd)
        } else Fd.Tools.Warn("USDZExportAsync does not support this material type: " + vd.getClassName())
      }
      dd.activeCamera && Rd.exportCamera && (Kd += function(dd, Od) {
        const md = "Camera_" + dd.uniqueId,
          Fd = yX(Wd.Matrix.RotationY(Math.PI).multiply(dd.getWorldMatrix()));
        if (dd.mode === Ed.b.ORTHOGRAPHIC_CAMERA) return `def Camera "${md}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${Fd}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${dd.minZ.toPrecision(Od.precision)}, ${dd.maxZ.toPrecision(Od.precision)})\n\t\t\tfloat horizontalAperture = ${(10*(Math.abs(dd.orthoLeft||1)+Math.abs(dd.orthoRight||1))).toPrecision(Od.precision)}\n\t\t\tfloat verticalAperture = ${(10*(Math.abs(dd.orthoTop||1)+Math.abs(dd.orthoBottom||1))).toPrecision(Od.precision)}\n\t\t\ttoken projection = "orthographic"\n\t\t}\n\t\n\t`;
        {
          const Wd = dd.Iq().getAspectRatio(dd),
            Rd = Od.cameraSensorWidth || 35;
          return `def Camera "${md}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${Fd}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${dd.minZ.toPrecision(Od.precision)}, ${dd.maxZ.toPrecision(Od.precision)})\n\t\t\tfloat focalLength = ${(Rd/(2*Math.tan(.5*dd.fov))).toPrecision(Od.precision)}\n            token projection = "perspective"\n\t\t\tfloat horizontalAperture = ${(Rd*Wd).toPrecision(Od.precision)}\n\t\t\tfloat verticalAperture = ${(Rd/Wd).toPrecision(Od.precision)}            \n\t\t}\n\t\n\t`
        }
      }(dd.activeCamera, Rd)), Kd += "\n            }\n        }";
      const vd = {};
      Kd += function(dd, Od, md) {
        const Wd = [];
        for (const Fd in dd) {
          const Rd = dd[Fd];
          Wd.push(EX(Rd, Od, md))
        }
        return `\n    def "Materials"\n{\n${Wd.join("")}\n}\n\n`
      }(hd, vd, Rd), Kd += "\n    }", Xd[Rd.modelFileName] = fflate.strToU8(Kd);
      for (const Wd in vd) {
        const {
          texture: dd,
          ext: Od,
          mimeType: md
        } = vd[Wd], Fd = await Ym(dd);
        if (Fd && wX(Fd.mimeType) && Fd.mimeType === md) Xd[`textures/Texture_${Wd}.${Od}`] = new Uint8Array(Fd.data);
        else {
          const Fd = dd.getSize(),
            Rd = await (0, Yd.h)(dd),
            Kd = await Jd.DumpTools.DumpDataAsync(Fd.width, Fd.height, Rd, md, void 0, !1, !0);
          Xd[`textures/Texture_${Wd}.${Od}`] = new Uint8Array(Kd).slice()
        }
      }
      let Qd = 0;
      for (const Wd in Xd) {
        const dd = Xd[Wd];
        if (!dd) continue;
        Qd += 34 + Wd.length;
        const Od = 63 & Qd;
        if (4 !== Od) {
          const md = new Uint8Array(64 - Od);
          Xd[Wd] = [dd, {
            extra: {
              12345: md
            }
          }]
        }
        Qd = dd.length
      }
      return fflate.zipSync(Xd, {
        level: 0
      })
    }
    var xX = md(43059);
    class BX {
      static Export(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          md = arguments.length > 2 ? arguments[2] : void 0;
        if (!dd || 0 === dd.bones.length) throw new Error("Invalid or empty skeleton provided");
        let Wd = Od;
        Od && 0 !== Od.length || (Wd = dd.animations.map((dd => dd.name)));
        let Fd = null;
        for (const vd of Wd) {
          const Od = dd.getAnimationRange(vd);
          Od && (Fd = Fd ? new xX.e("animation-range", Math.min(Fd.from, Od.from), Math.max(Fd.to, Od.to)) : Od)
        }
        if (!Fd && (dd.animations.length > 0 && (Fd = dd.getAnimationRange(dd.animations[0].name)), !Fd)) throw new Error("No animation range found in skeleton");
        const Rd = md || 1 / (dd.animations[0]?.framePerSecond || 30),
          Xd = this._BuildBoneHierarchy(dd, Wd);
        let Kd = 0;
        for (const vd of Xd) vd.positionKeys.length > 0 && (Kd = Math.max(Kd, vd.positionKeys.length)), vd.rotationKeys.length > 0 && (Kd = Math.max(Kd, vd.rotationKeys.length));
        0 === Kd && (Kd = Math.floor((Fd.to - Fd.from) / Rd) + 1);
        let hd = "";
        return hd += "HIERARCHY\n", hd += this._ExportHierarchy(Xd, 0), hd += "MOTION\n", hd += `Frames: ${Kd}\n`, hd += `Frame Time: ${Rd.toFixed(6)}\n`, hd += this._ExportMotionData(Xd, Kd, 0, Wd), hd
      }
      static _BuildBoneHierarchy(dd, Od) {
        const md = new Map,
          Wd = [];
        for (const Fd of dd.bones) {
          const dd = {
            bone: Fd,
            children: [],
            hasPositionChannels: !1,
            hasRotationChannels: !1,
            positionKeys: [],
            rotationKeys: []
          };
          md.set(Fd, dd)
        }
        for (const Fd of dd.bones) {
          const dd = md.get(Fd);
          if (Fd.animations.length > 0)
            for (const md of Fd.animations) Od.includes(md.name) && ("position" === md.targetProperty ? (dd.hasPositionChannels = !0, dd.positionKeys.push(...md.getKeys())) : "rotationQuaternion" === md.targetProperty && (dd.hasRotationChannels = !0, dd.rotationKeys.push(...md.getKeys())));
          if (Fd.getParent()) {
            const Od = md.get(Fd.getParent());
            Od && Od.children.push(dd)
          } else Wd.push(dd)
        }
        return Wd
      }
      static _ExportHierarchy(dd, Od) {
        let md = "";
        const Wd = "    ".repeat(Od);
        for (const Fd of dd) {
          const dd = Fd.bone;
          if (this._IsEndSite(Fd)) {
            md += `${Wd}End Site\n`, md += `${Wd}{\n`;
            const Od = this._GetBoneOffset(dd);
            md += `${Wd}    OFFSET ${Od.x.toFixed(6)} ${Od.y.toFixed(6)} ${Od.z.toFixed(6)}\n`, md += `${Wd}}\n`
          } else {
            md += `${0===Od?"ROOT":`${Wd}JOINT`} ${dd.name}\n`, md += `${Wd}{\n`;
            const Rd = this._GetBoneOffset(dd);
            md += `${Wd}    OFFSET ${Rd.x.toFixed(6)} ${Rd.y.toFixed(6)} ${Rd.z.toFixed(6)}\n`;
            const Xd = [];
            Fd.hasPositionChannels && Xd.push("Xposition", "Yposition", "Zposition"), Fd.hasRotationChannels && Xd.push("Zrotation", "Xrotation", "Yrotation"), Xd.length > 0 && (md += `${Wd}    CHANNELS ${Xd.length} ${Xd.join(" ")}\n`), Fd.children.length > 0 && (md += this._ExportHierarchy(Fd.children, Od + 1)), md += `${Wd}}\n`
          }
        }
        return md
      }
      static _IsEndSite(dd) {
        return 0 === dd.children.length
      }
      static _GetBoneOffset(dd) {
        try {
          if (!dd.getParent()) return dd.getRestMatrix().getTranslation();
          return dd.getLocalMatrix().getTranslation()
        } catch (Od) {
          return Wd.Cq.Zero()
        }
      }
      static _ExportMotionData(dd, Od, md, Wd) {
        let Fd = "";
        for (let Rd = 0; Rd < Od; Rd++) {
          const Od = [];
          this._CollectFrameValues(dd, Rd + md, Od, Wd), Fd += Od.map((dd => dd.toFixed(6))).join(" ") + "\n"
        }
        return Fd
      }
      static _CollectFrameValues(dd, Od, md, Wd) {
        for (const Fd of dd)
          if (!this._IsEndSite(Fd)) {
            if (Fd.hasPositionChannels) {
              const dd = this._GetPositionAtFrameIndex(Fd.positionKeys, Od);
              md.push(dd.x, dd.y, dd.z)
            }
            if (Fd.hasRotationChannels) {
              const dd = this._GetRotationAtFrameIndex(Fd.rotationKeys, Od),
                Wd = this._QuaternionToEuler(dd);
              md.push(Wd.z, Wd.x, Wd.y)
            }
            Fd.children.length > 0 && this._CollectFrameValues(Fd.children, Od, md, Wd)
          }
      }
      static _GetPositionAtFrameIndex(dd, Od) {
        if (0 === dd.length) return Wd.Cq.Zero();
        return dd[Math.max(0, Math.min(Od, dd.length - 1))].value.clone()
      }
      static _GetRotationAtFrameIndex(dd, Od) {
        if (0 === dd.length) return Wd.Quaternion.Identity();
        return dd[Math.max(0, Math.min(Od, dd.length - 1))].value.clone()
      }
      static _QuaternionToEuler(dd) {
        const Od = new Wd.Matrix;
        dd.toRotationMatrix(Od);
        const md = Od.m;
        let Rd, Xd, Kd;
        const hd = Math.sqrt(md[0] * md[0] + md[1] * md[1]);
        return hd > rm.b ? (Rd = Math.atan2(md[6], md[10]), Xd = Math.atan2(-md[2], hd), Kd = Math.atan2(md[1], md[0])) : (Rd = Math.atan2(-md[9], md[5]), Xd = Math.atan2(-md[2], hd), Kd = 0), new Wd.Cq(Fd.Tools.ToDegrees(Rd), Fd.Tools.ToDegrees(Xd), Fd.Tools.ToDegrees(Kd))
      }
    }

    function SX(dd) {
      return "string" === typeof dd?.name
    }
    const sX = Symbol("__xml:meta$__"),
      uX = Symbol("__xml:name$__");

    function VX(dd, Od) {
      Object.prototype.hasOwnProperty.call(dd.metadata, sX) || (dd.metadata[sX] = []), dd.metadata[sX].push(Od)
    }

    function iX(dd) {
      return (Od, md) => {
        Od[uX] = dd
      }
    }

    function AX() {
      return (dd, Od) => VX(Od, {
        kind: "none",
        prop: String(Od.name),
        ignore: !0
      })
    }

    function rX(dd) {
      return (Od, md) => VX(md, {
        kind: "attr",
        prop: String(md.name),
        ...dd
      })
    }

    function GX(dd) {
      return (Od, md) => VX(md, {
        kind: "elem",
        prop: String(md.name),
        ...dd
      })
    }

    function nX(dd) {
      const Od = "function" === typeof dd ? dd : dd?.constructor,
        md = Od?.[Symbol.metadata];
      if (!md) return [];
      const Wd = [];
      let Fd = md;
      for (; Fd;) Object.prototype.hasOwnProperty.call(Fd, sX) && Wd.push(...Fd[sX]), Fd = Object.getPrototypeOf(Fd);
      return Wd
    }

    function LX(dd) {
      const Od = dd?.constructor?.[uX];
      return Od || void 0
    }

    function PX(dd) {
      return /^[A-Za-z_][A-Za-z0-9._-]*$/.test(dd)
    }

    function zX(dd) {
      if (SX(dd)) return dd;
      const Od = (dd ?? "").trim();
      if (!Od) return {
        name: ""
      };
      const md = Od.indexOf(":");
      if (-1 === md) return {
        name: Od
      };
      if (-1 !== Od.indexOf(":", md + 1)) return {
        name: Od
      };
      const Wd = Od.slice(0, md),
        Fd = Od.slice(md + 1);
      return PX(Wd) && PX(Fd) ? {
        ns: Wd,
        name: Fd
      } : {
        name: Od
      }
    }

    function cX(dd, Od) {
      return Od ? `${Od}:${dd}` : dd
    }
    const jX = Object.freeze({
        eps: 1e-6,
        maxDecimalsCap: 15,
        trimTrailingZeros: !0,
        allowScientific: !1,
        snapNearZero: !0
      }),
      DX = Object.freeze({
        number: jX
      });

    function eX(dd) {
      const Od = dd?.eps ?? jX.eps;
      return {
        eps: Od,
        maxDecimalsCap: dd?.maxDecimalsCap ?? jX.maxDecimalsCap,
        trimTrailingZeros: dd?.trimTrailingZeros ?? jX.trimTrailingZeros,
        fixedDecimals: dd?.fixedDecimals,
        allowScientific: dd?.allowScientific ?? jX.allowScientific,
        snapNearZero: dd?.snapNearZero ?? jX.snapNearZero,
        zeroThreshold: dd?.zeroThreshold ?? Od,
        perAttributeEps: dd?.perAttributeEps
      }
    }

    function IX(dd) {
      return {
        number: eX(dd?.number)
      }
    }
    class lX {
      constructor(dd) {
        if (this.o = dd, this._o = dd.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
      }
      toString(dd) {
        if (!Number.isFinite(dd)) throw new Error(`Cannot format non-finite number: ${dd}`);
        const Od = this._o,
          md = this._clampInt(Od.maxDecimalsCap ?? 15, 0, 20),
          Wd = Od.trimTrailingZeros ?? !0,
          Fd = Od.snapNearZero ?? !0,
          Rd = Od.zeroThreshold ?? Od.eps,
          Xd = 1 / Od.eps;
        let Kd, hd = Math.round(dd * Xd) / Xd;
        if (Object.is(hd, -0) && (hd = 0), Fd && Math.abs(hd) <= Rd && (hd = 0), Kd = void 0 !== Od.fixedDecimals ? this._clampInt(Od.fixedDecimals, 0, md) : this._clampInt(Math.ceil(-Math.log10(Od.eps)), 0, md), Od.allowScientific, 0 === Kd) return String(Math.trunc(hd));
        let vd = hd.toFixed(Kd);
        if (Wd && void 0 === Od.fixedDecimals && (vd = vd.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(vd)) throw new Error(`Scientific notation not allowed in XML output: ${vd}`);
        return vd
      }
      _clampInt(dd, Od, md) {
        return Number.isFinite(dd) ? (dd = Math.trunc(dd), Math.max(Od, Math.min(md, dd))) : Od
      }
    }

    function CX(dd) {
      return dd instanceof Date
    }

    function ZX(dd) {
      return "string" === typeof dd
    }

    function kX(dd) {
      return "string" === typeof dd || "number" === typeof dd || "boolean" === typeof dd || "bigint" === typeof dd || CX(dd)
    }

    function fX(dd) {
      return "number" === typeof dd || "boolean" === typeof dd || "bigint" === typeof dd || CX(dd)
    }
    class MX {
      constructor(dd, Od) {
        this._ns = new Map, this._prefixCount = 0, this._builder = dd, this._format = IX(Od), this._nFmt = new lX(this._format)
      }
      withNamespace() {
        for (var dd = arguments.length, Od = new Array(dd), md = 0; md < dd; md++) Od[md] = arguments[md];
        for (const Wd of Od) this._assignNamespace(Wd);
        return this
      }
      serialize(dd, Od) {
        if (!(Od = Od ?? LX(dd))) throw new Error("can not find name for given object");
        const md = zX(Od);
        md.ns && this._assignNamespace(md.ns, "xmlns"), this._gatherNamespaces(dd, new WeakSet);
        const Wd = this._builder.ele(null, md.name);
        for (const [Fd, Rd] of Array.from(this._ns.entries())) Wd.att("xmlns", Rd, Fd);
        this._writeObjectContent(Wd, dd, (new WeakSet).add(dd)), this._builder.end()
      }
      _writeObject(dd, Od, md) {
        if (md.has(Od)) return;
        if (md.add(Od), Array.isArray(Od)) {
          for (const Wd of Od) fX(Wd) || (ZX(Wd) ? this._builder.text(Wd) : this._writeObject(dd, Wd, md));
          return
        }
        const Wd = LX(Od);
        if (!Wd) return;
        const Fd = zX(Wd),
          Rd = this._getPrefix(Fd),
          Xd = cX(Fd.name, Rd);
        dd.ele(null, Xd), this._writeObjectContent(dd, Od, md), this._builder.end()
      }
      _getPrefix(dd) {
        if (dd.ns) {
          const Od = this._ns.get(dd.ns.toLowerCase());
          if ("xmlns" !== Od) return Od
        }
      }
      _writeObjectContent(dd, Od, md) {
        const Wd = nX(Od) ?? [],
          Fd = new Map;
        for (const Xd of Wd) {
          const dd = Fd.get(Xd.prop) ?? [];
          dd.push(Xd), Fd.set(Xd.prop, dd)
        }
        const Rd = Object.keys(Od).sort(((dd, Od) => {
          const md = (Fd.get(dd) ?? []).some((dd => "attr" === dd.kind));
          return md === (Fd.get(Od) ?? []).some((dd => "attr" === dd.kind)) ? 0 : md ? -1 : 1
        }));
        for (const Xd of Rd) {
          const Wd = Od[Xd];
          if (null === Wd || void 0 === Wd) continue;
          const Rd = Fd.get(Xd);
          if (Rd) {
            if (Rd.some((dd => !0 === dd.ignore || "none" === dd.kind))) continue;
            for (const Od of Rd) {
              const md = Od.name ?? Od.prop.toLowerCase();
              if (md) switch (Od.kind) {
                case "attr": {
                  let Fd = null;
                  if ("number" === typeof Wd && this._nFmt && (Fd = this._nFmt.toString(Wd)), Od.formatter) {
                    Fd = new Od.formatter(this._format).toString(Wd)
                  }
                  if (Fd = Fd ?? Wd.toString(), Fd) {
                    const Od = zX(md),
                      Wd = this._getPrefix(Od),
                      Rd = cX(Od.name, Wd);
                    dd.att(null, Rd, Fd)
                  }
                  break
                }
              }
            }
          } else fX(Wd) || (ZX(Wd) ? this._builder.text(Wd) : this._writeObject(dd, Wd, md))
        }
      }
      _gatherNamespaces(dd, Od) {
        if (Od.has(dd)) return;
        if (Od.add(dd), Array.isArray(dd)) {
          for (const md of dd) kX(md) || this._gatherNamespaces(md, Od);
          return
        }
        const md = LX(dd);
        md && this._assignNamespace(md);
        const Wd = nX(dd) ?? [],
          Fd = new Map;
        for (const Xd of Wd) {
          const dd = Fd.get(Xd.prop) ?? [];
          dd.push(Xd), Fd.set(Xd.prop, dd)
        }
        const Rd = [];
        for (const Xd of Object.keys(dd)) {
          const Od = dd[Xd];
          if (null === Od || void 0 === Od) continue;
          const md = Fd.get(Xd);
          if (md) {
            if (md.some((dd => !0 === dd.ignore || "none" === dd.kind))) continue;
            for (const dd of md) dd.name && this._assignNamespace(dd.name)
          }
          Rd.push(Od)
        }
        for (const Xd of Rd) kX(Xd) || this._gatherNamespaces(Xd, Od)
      }
      _assignNamespace(dd, Od) {
        const md = zX(dd);
        if (md?.ns) {
          const dd = md.ns.toLowerCase();
          this._ns.get(dd) || this._ns.set(dd, Od ?? this._buildNsPrefix(dd))
        } else if ("xmlns" === Od) {
          const dd = md.name.toLowerCase();
          this._ns.get(dd) || this._ns.set(dd, Od ?? this._buildNsPrefix(dd))
        }
      }
      _buildNsPrefix(dd) {
        let Od, md = !1;
        do {
          Od = "ns" + this._prefixCount++;
          for (const dd of Array.from(this._ns.values()))
            if (dd === Od) {
              md = !0;
              break
            }
        } while (md);
        return Od
      }
    }
    class dK {}
    var OK;
    dK.OpenTag = "<", dK.CloseTag = ">", dK.Slash = "/", dK.Question = "?", dK.Quote = '"', dK.Equal = "=", dK.Space = " ", dK.Semicolon = ":", dK.Dec = "<?xml", dK.Xml = "xml", dK.Xmlns = "xmlns", dK.Xsi = "xsi", dK.VersionKeyword = "version", dK.EncodingKeyword = "encoding", dK.StandaloneKeyword = "standalone",
      function(dd) {
        dd[dd.Declaration = 0] = "Declaration", dd[dd.Tag = 1] = "Tag", dd[dd.Attribute = 2] = "Attribute", dd[dd.Text = 3] = "Text"
      }(OK || (OK = {}));
    class mK {
      constructor(dd) {
        this._ctxStack = [], this._d = 0, this._w = dd
      }
      dec(dd, Od, md) {
        return this._w.write(dK.Dec), this._writeAttStr(dK.VersionKeyword, dd), Od && this._writeAttStr(dK.EncodingKeyword, Od), void 0 !== md && this._writeAttStr(dK.StandaloneKeyword, md ? "yes" : "no"), this._w.write(dK.Question, dK.CloseTag), this
      }
      att(dd, Od, md) {
        const Wd = this._peekContext();
        if (!Wd) throw new Error("att() without open element");
        if (Wd.closed) throw new Error(`att() after start tag closed for <${Wd.name}>`);
        if (this._isXmlnsDecl(dd, Od)) {
          if (Od === dK.Xmlns) Wd.defaultNs = md, this._registerNamespace(Wd, "", md), this._writeAttStr(dK.Xmlns, md);
          else if (dd) this._registerNamespace(Wd, Od, md), this._writeAttStr(`${dd}:${Od}`, md);
          else {
            const dd = Od.slice(6);
            this._registerNamespace(Wd, dd, md), this._writeAttStr(Od, md)
          }
          return Wd.lastToken = OK.Attribute, this
        }
        let Fd = Od;
        if (dd) {
          Fd = `${this._ensurePrefixDeclared(Wd,dd)}:${Od}`
        }
        return Wd.lastToken = OK.Attribute, this._writeAttStr(Fd, md), this
      }
      ele(dd, Od) {
        const md = this._peekContext();
        md && this._closeOpenTagIfNeeded(md);
        let Wd = Od;
        if (dd) {
          Wd = `${this._lookupPrefix(dd)??dd}:${Od}`
        }
        return this._pushContext(Wd, ++this._d), this._w.write(dK.OpenTag, Wd), this
      }
      text(dd) {
        const Od = this._peekContext();
        if (!Od) throw new Error("text() without open element");
        return this._closeOpenTagIfNeeded(Od), Od.lastToken = OK.Text, this._w.write(this._escText(dd)), this
      }
      end() {
        const dd = this._popContext();
        return dd && (this._d--, dd.closed ? this._w.write(dK.OpenTag, dK.Slash, dd.name, dK.CloseTag) : this._w.write(dK.Slash, dK.CloseTag)), this
      }
      _pushContext(dd, Od) {
        const md = new mK.Context(dd, Od);
        return this._ctxStack.push(md), md
      }
      _popContext() {
        return this._ctxStack.pop()
      }
      _peekContext() {
        return this._ctxStack[this._ctxStack.length - 1]
      }
      get _contextDepth() {
        return this._ctxStack.length
      }
      _writeAttStr(dd, Od) {
        this._w.write(dK.Space, dd, dK.Equal, dK.Quote, this._escAttr(Od), dK.Quote)
      }
      _lookupPrefix(dd) {
        let Od = this._ctxStack.length - 1;
        if (Od >= 0)
          do {
            const md = this._ctxStack[Od--],
              Wd = md.ns2prefix?.get(dd);
            if (Wd) return Wd
          } while (Od >= 0)
      }
      _escText(dd) {
        return dd.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
      _escAttr(dd) {
        return this._escText(dd).replace(/"/g, "&quot;").replace(/'/g, "&apos;")
      }
      _isXmlnsDecl(dd, Od) {
        if (dd) return dd === dK.Xmlns;
        const md = Od.length,
          Wd = dK.Xmlns.length;
        return md >= Wd && (Od.startsWith(dK.Xmlns) && (Od.length == Wd || Od[Wd] == dK.Semicolon))
      }
      _registerNamespace(dd, Od, md) {
        if (Od === dK.Xml || Od === dK.Xmlns) throw new Error(`reserved prefix '${Od}'`);
        const Wd = dd.prefix2ns.get(Od);
        if (Wd && Wd !== md) throw new Error(`prefix '${Od}' already bound to a different namespace`);
        dd.ns2prefix.get(md) || dd.ns2prefix.set(md, Od), dd.prefix2ns.set(Od, md)
      }
      _allocPrefix(dd) {
        let Od = 1;
        for (;;) {
          const md = "ns" + Od++;
          if (!dd.prefix2ns.has(md)) return md
        }
      }
      _ensurePrefixDeclared(dd, Od) {
        const md = this._lookupPrefix(Od);
        if (md) return md;
        if (dd.closed) throw new Error(`can not declare namespace after start tag closed for <${dd.name}>`);
        const Wd = this._allocPrefix(dd);
        return this._writeAttStr(`${dK.Xmlns}:${Wd}`, Od), this._registerNamespace(dd, Wd, Od), Wd
      }
      _closeOpenTagIfNeeded(dd) {
        dd.closed || (this._w.write(dK.CloseTag), dd.closed = !0)
      }
    }
    mK.Context = class {
      constructor(dd, Od) {
        this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = dd, this.depth = Od
      }
    };
    class WK {
      constructor() {
        this.count = 0, this._chunks = []
      }
      write() {
        for (var dd = arguments.length, Od = new Array(dd), md = 0; md < dd; md++) Od[md] = arguments[md];
        if (0 === Od.length) return this;
        const Wd = Od.join("");
        return this._chunks.push(Wd), this.count += Wd.length, this
      }
      toString() {
        return this._chunks.join("")
      }
      clear() {
        this._chunks = [], this.count = 0
      }
    }
    class FK {
      constructor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._sink = dd, this._opts = Od, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
      }
      write() {
        for (var dd = arguments.length, Od = new Array(dd), md = 0; md < dd; md++) Od[md] = arguments[md];
        if (0 === Od.length) return this;
        const Wd = Od.join("");
        if (0 === Wd.length) return this;
        this._pending += Wd, this._pendingChars += Wd.length;
        const Fd = this._opts.flushChars ?? 65536;
        return this._pendingChars >= Fd && this.flush(), this
      }
      flush() {
        if (0 === this._pendingChars) return this;
        const dd = this._encoder.encode(this._pending);
        return this._sink.push(dd), this.count += dd.length, this._pending = "", this._pendingChars = 0, this
      }
      finish() {
        this.flush(), this._sink.push(new Uint8Array(0), !0)
      }
      clear() {
        this._pending = "", this._pendingChars = 0, this.count = 0
      }
    }
    const RK = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
      XK = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
    var KK, hK;
    ! function(dd) {
      dd.micron = "micron", dd.millimeter = "millimeter", dd.centimeter = "centimeter", dd.inch = "inch", dd.foot = "foot", dd.meter = "meter"
    }(KK || (KK = {})),
    function(dd) {
      dd.model = "model", dd.solidsupport = "solidsupport", dd.support = "support", dd.surface = "surface", dd.other = "other"
    }(hK || (hK = {}));
    const vK = "http://schemas.openxmlformats.org/package/2006/content-types",
      QK = "http://schemas.openxmlformats.org/package/2006/relationships";
    var tK;
    ! function(dd) {
      dd.Relationships = "application/vnd.openxmlformats-package.relationships+xml", dd.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", dd.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", dd.Colors = "application/vnd.ms-package.3dmanufacturing-colors+xml", dd.Texture = "application/vnd.ms-package.3dmanufacturing-texture+xml", dd.Texture2D = "application/vnd.ms-package.3dmanufacturing-texture2d+xml", dd.Production = "application/vnd.ms-package.3dmanufacturing-production+xml", dd.Slice = "application/vnd.ms-package.3dmanufacturing-slice+xml", dd.BeamLattice = "application/vnd.ms-package.3dmanufacturing-beamlattice+xml", dd.SecureContent = "application/vnd.ms-package.3dmanufacturing-securecontent+xml", dd.Png = "image/png", dd.Jpeg = "image/jpeg", dd.Tiff = "image/tiff", dd.Xml = "application/xml"
    }(tK || (tK = {}));
    const oK = "_rels/",
      NK = "3D/",
      qK = "3dmodel.model",
      HK = ".rels",
      yK = "[Content_Types].xml";
    class bK {
      static IsKnown(dd) {
        return bK.Known.has(dd)
      }
      static IsThreeDimModel(dd) {
        return dd === bK.ThreeDimModel
      }
    }
    bK.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", bK.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", bK.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", bK.MustPreserve = "http://schemas.openxmlformats.org/package/2006/relationships/mustpreserve", bK.Known = new Set([bK.ThreeDimModel, bK.Thumbnail, bK.PrintTicket, bK.MustPreserve]);
    let TK = (() => {
        let dd, Od, md = [iX({
            ns: vK,
            name: "Types"
          })],
          Wd = [];
        Od = class {
          constructor() {
            this.items = []
          }
        };
        return (0, Ud.n)(Od, "ThreeMfContentTypes"), (() => {
          const Fd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Ud.h)(null, dd = {
            value: Od
          }, md, {
            kind: "class",
            name: Od.name,
            metadata: Fd
          }, null, Wd), Od = dd.value, Fd && Object.defineProperty(Od, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Fd
          }), (0, Ud.k)(Od, Wd)
        })(), Od
      })(),
      pK = (() => {
        let dd, Od, md, Wd, Fd = [iX({
            ns: vK,
            name: "Default"
          })],
          Rd = [],
          Xd = [],
          Kd = [],
          hd = [],
          vd = [];
        Od = class {
          constructor(dd, Od) {
            this.ext = (0, Ud.k)(this, Xd, void 0), this.ct = ((0, Ud.k)(this, Kd), (0, Ud.k)(this, hd, void 0)), (0, Ud.k)(this, vd), this.ext = dd, this.ct = Od
          }
        };
        return (0, Ud.n)(Od, "ThreeMfContentType"), (() => {
          const Qd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          md = [rX({
            name: {
              ns: vK,
              name: "Extension"
            }
          })], Wd = [rX({
            name: {
              ns: vK,
              name: "ContentType"
            }
          })], (0, Ud.h)(null, null, md, {
            kind: "field",
            name: "ext",
            static: !1,
            private: !1,
            access: {
              has: dd => "ext" in dd,
              get: dd => dd.ext,
              set: (dd, Od) => {
                dd.ext = Od
              }
            },
            metadata: Qd
          }, Xd, Kd), (0, Ud.h)(null, null, Wd, {
            kind: "field",
            name: "ct",
            static: !1,
            private: !1,
            access: {
              has: dd => "ct" in dd,
              get: dd => dd.ct,
              set: (dd, Od) => {
                dd.ct = Od
              }
            },
            metadata: Qd
          }, hd, vd), (0, Ud.h)(null, dd = {
            value: Od
          }, Fd, {
            kind: "class",
            name: Od.name,
            metadata: Qd
          }, null, Rd), Od = dd.value, Qd && Object.defineProperty(Od, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Qd
          }), (0, Ud.k)(Od, Rd)
        })(), Od
      })(),
      YK = (() => {
        let dd, Od, md = [iX({
            ns: QK,
            name: "Relationships"
          })],
          Wd = [];
        Od = class {
          constructor() {
            this.items = []
          }
        };
        return (0, Ud.n)(Od, "ThreeMfRelationships"), (() => {
          const Fd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Ud.h)(null, dd = {
            value: Od
          }, md, {
            kind: "class",
            name: Od.name,
            metadata: Fd
          }, null, Wd), Od = dd.value, Fd && Object.defineProperty(Od, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Fd
          }), (0, Ud.k)(Od, Wd)
        })(), Od
      })(),
      gK = (() => {
        let dd, Od, md, Wd, Fd, Rd = [iX({
            ns: QK,
            name: "Relationship"
          })],
          Xd = [],
          Kd = [],
          hd = [],
          vd = [],
          Qd = [],
          td = [],
          od = [];
        Od = class {
          constructor(dd, Od, md) {
            this.id = (0, Ud.k)(this, Kd, void 0), this.type = ((0, Ud.k)(this, hd), (0, Ud.k)(this, vd, void 0)), this.target = ((0, Ud.k)(this, Qd), (0, Ud.k)(this, td, void 0)), (0, Ud.k)(this, od), this.id = dd, this.type = Od, this.target = md
          }
        };
        return (0, Ud.n)(Od, "ThreeMfRelationship"), (() => {
          const Nd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          md = [rX({
            name: "Id"
          })], Wd = [rX({
            name: "Type"
          })], Fd = [rX({
            name: "Target"
          })], (0, Ud.h)(null, null, md, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: dd => "id" in dd,
              get: dd => dd.id,
              set: (dd, Od) => {
                dd.id = Od
              }
            },
            metadata: Nd
          }, Kd, hd), (0, Ud.h)(null, null, Wd, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: dd => "type" in dd,
              get: dd => dd.type,
              set: (dd, Od) => {
                dd.type = Od
              }
            },
            metadata: Nd
          }, vd, Qd), (0, Ud.h)(null, null, Fd, {
            kind: "field",
            name: "target",
            static: !1,
            private: !1,
            access: {
              has: dd => "target" in dd,
              get: dd => dd.target,
              set: (dd, Od) => {
                dd.target = Od
              }
            },
            metadata: Nd
          }, td, od), (0, Ud.h)(null, dd = {
            value: Od
          }, Rd, {
            kind: "class",
            name: Od.name,
            metadata: Nd
          }, null, Xd), Od = dd.value, Nd && Object.defineProperty(Od, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Nd
          }), (0, Ud.k)(Od, Xd)
        })(), Od
      })();
    class wK {
      constructor(dd, Od, md) {
        this.contentTypes = dd, this.relationships = Od, this.model = md
      }
    }
    class aK {
      static Zero() {
        return new aK([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }
      constructor(dd) {
        this.values = dd
      }
      toString() {
        return this.values.join(" ")
      }
    }
    class EK {
      constructor(dd) {
        this.o = dd, this._f = new lX(dd)
      }
      toString(dd) {
        return dd.values.map((dd => this._f.toString(dd))).join(" ")
      }
    }
    let JK = (() => {
        let dd, Od, md, Wd, Fd, Rd = [iX({
            ns: RK,
            name: "model"
          })],
          Xd = [],
          Kd = [],
          hd = [],
          vd = [],
          Qd = [],
          td = [],
          od = [];
        Od = class {
          constructor() {
            this.unit = (0, Ud.k)(this, Kd, KK.millimeter), this.requiredextensions = ((0, Ud.k)(this, hd), (0, Ud.k)(this, vd, void 0)), this.recommendedextensions = ((0, Ud.k)(this, Qd), (0, Ud.k)(this, td, void 0)), this.metadata = (0, Ud.k)(this, od)
          }
        };
        return (0, Ud.n)(Od, "ThreeMfModel"), (() => {
          const Nd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          md = [rX({
            name: "unit"
          })], Wd = [rX({
            name: "requiredextensions"
          })], Fd = [rX({
            name: "recommendedextensions"
          })], (0, Ud.h)(null, null, md, {
            kind: "field",
            name: "unit",
            static: !1,
            private: !1,
            access: {
              has: dd => "unit" in dd,
              get: dd => dd.unit,
              set: (dd, Od) => {
                dd.unit = Od
              }
            },
            metadata: Nd
          }, Kd, hd), (0, Ud.h)(null, null, Wd, {
            kind: "field",
            name: "requiredextensions",
            static: !1,
            private: !1,
            access: {
              has: dd => "requiredextensions" in dd,
              get: dd => dd.requiredextensions,
              set: (dd, Od) => {
                dd.requiredextensions = Od
              }
            },
            metadata: Nd
          }, vd, Qd), (0, Ud.h)(null, null, Fd, {
            kind: "field",
            name: "recommendedextensions",
            static: !1,
            private: !1,
            access: {
              has: dd => "recommendedextensions" in dd,
              get: dd => dd.recommendedextensions,
              set: (dd, Od) => {
                dd.recommendedextensions = Od
              }
            },
            metadata: Nd
          }, td, od), (0, Ud.h)(null, dd = {
            value: Od
          }, Rd, {
            kind: "class",
            name: Od.name,
            metadata: Nd
          }, null, Xd), Od = dd.value, Nd && Object.defineProperty(Od, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Nd
          })
        })(), Od.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, Ud.k)(Od, Xd), Od
      })(),
      UK = (() => {
        let dd, Od, md, Wd, Fd, Rd = [iX({
            ns: RK,
            name: "meta"
          })],
          Xd = [],
          Kd = [],
          hd = [],
          vd = [],
          Qd = [],
          td = [],
          od = [];
        Od = class {
          constructor(dd, Od, md, Wd) {
            this.name = (0, Ud.k)(this, Kd, void 0), this.preserve = ((0, Ud.k)(this, hd), (0, Ud.k)(this, vd, void 0)), this.type = ((0, Ud.k)(this, Qd), (0, Ud.k)(this, td, void 0)), this.value = (0, Ud.k)(this, od), this.name = dd, this.value = Od, this.preserve = md, this.type = Wd
          }
        };
        return (0, Ud.n)(Od, "ThreeMfMeta"), (() => {
          const Nd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          md = [rX({
            name: "name"
          })], Wd = [rX({
            name: "preserve"
          })], Fd = [rX({
            name: "type"
          })], (0, Ud.h)(null, null, md, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: dd => "name" in dd,
              get: dd => dd.name,
              set: (dd, Od) => {
                dd.name = Od
              }
            },
            metadata: Nd
          }, Kd, hd), (0, Ud.h)(null, null, Wd, {
            kind: "field",
            name: "preserve",
            static: !1,
            private: !1,
            access: {
              has: dd => "preserve" in dd,
              get: dd => dd.preserve,
              set: (dd, Od) => {
                dd.preserve = Od
              }
            },
            metadata: Nd
          }, vd, Qd), (0, Ud.h)(null, null, Fd, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: dd => "type" in dd,
              get: dd => dd.type,
              set: (dd, Od) => {
                dd.type = Od
              }
            },
            metadata: Nd
          }, td, od), (0, Ud.h)(null, dd = {
            value: Od
          }, Rd, {
            kind: "class",
            name: Od.name,
            metadata: Nd
          }, null, Xd), Od = dd.value, Nd && Object.defineProperty(Od, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Nd
          }), (0, Ud.k)(Od, Xd)
        })(), Od
      })(),
      xK = (() => {
        let dd, Od, md = [iX({
            ns: RK,
            name: "metadatagroup"
          })],
          Wd = [];
        Od = class {
          constructor() {
            this.metadata = []
          }
        };
        return (0, Ud.n)(Od, "ThreeMfMetadataGroup"), (() => {
          const Fd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Ud.h)(null, dd = {
            value: Od
          }, md, {
            kind: "class",
            name: Od.name,
            metadata: Fd
          }, null, Wd), Od = dd.value, Fd && Object.defineProperty(Od, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Fd
          }), (0, Ud.k)(Od, Wd)
        })(), Od
      })(),
      BK = (() => {
        let dd, Od, md = [iX({
            ns: RK,
            name: "resources"
          })],
          Wd = [];
        Od = class {
          constructor() {
            this.object = []
          }
        };
        return (0, Ud.n)(Od, "ThreeMfResources"), (() => {
          const Fd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Ud.h)(null, dd = {
            value: Od
          }, md, {
            kind: "class",
            name: Od.name,
            metadata: Fd
          }, null, Wd), Od = dd.value, Fd && Object.defineProperty(Od, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Fd
          }), (0, Ud.k)(Od, Wd)
        })(), Od
      })(),
      SK = (() => {
        let dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd, vd = [iX({
            ns: RK,
            name: "object"
          })],
          Qd = [],
          td = [],
          od = [],
          Nd = [],
          qd = [],
          Hd = [],
          yd = [],
          bd = [],
          Td = [],
          pd = [],
          Yd = [],
          gd = [],
          wd = [],
          Ed = [],
          Jd = [];
        Od = class {
          constructor(dd) {
            let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hK.model;
            this.id = (0, Ud.k)(this, td, void 0), this.type = ((0, Ud.k)(this, od), (0, Ud.k)(this, Nd, void 0)), this.thumbnail = ((0, Ud.k)(this, qd), (0, Ud.k)(this, Hd, void 0)), this.partnumber = ((0, Ud.k)(this, yd), (0, Ud.k)(this, bd, void 0)), this.name = ((0, Ud.k)(this, Td), (0, Ud.k)(this, pd, void 0)), this.pid = ((0, Ud.k)(this, Yd), (0, Ud.k)(this, gd, void 0)), this.pindex = ((0, Ud.k)(this, wd), (0, Ud.k)(this, Ed, void 0)), this.metadatagroup = (0, Ud.k)(this, Jd), this.id = dd, this.type = Od
          }
        };
        return (0, Ud.n)(Od, "ThreeMfObject"), (() => {
          const xd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          md = [rX({
            name: "id"
          })], Wd = [rX({
            name: "type"
          })], Fd = [rX({
            name: "thumbnail"
          })], Rd = [rX({
            name: "partnumber"
          })], Xd = [rX({
            name: "name"
          })], Kd = [rX({
            name: "pid"
          })], hd = [rX({
            name: "pindex"
          })], (0, Ud.h)(null, null, md, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: dd => "id" in dd,
              get: dd => dd.id,
              set: (dd, Od) => {
                dd.id = Od
              }
            },
            metadata: xd
          }, td, od), (0, Ud.h)(null, null, Wd, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: dd => "type" in dd,
              get: dd => dd.type,
              set: (dd, Od) => {
                dd.type = Od
              }
            },
            metadata: xd
          }, Nd, qd), (0, Ud.h)(null, null, Fd, {
            kind: "field",
            name: "thumbnail",
            static: !1,
            private: !1,
            access: {
              has: dd => "thumbnail" in dd,
              get: dd => dd.thumbnail,
              set: (dd, Od) => {
                dd.thumbnail = Od
              }
            },
            metadata: xd
          }, Hd, yd), (0, Ud.h)(null, null, Rd, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: dd => "partnumber" in dd,
              get: dd => dd.partnumber,
              set: (dd, Od) => {
                dd.partnumber = Od
              }
            },
            metadata: xd
          }, bd, Td), (0, Ud.h)(null, null, Xd, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: dd => "name" in dd,
              get: dd => dd.name,
              set: (dd, Od) => {
                dd.name = Od
              }
            },
            metadata: xd
          }, pd, Yd), (0, Ud.h)(null, null, Kd, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: dd => "pid" in dd,
              get: dd => dd.pid,
              set: (dd, Od) => {
                dd.pid = Od
              }
            },
            metadata: xd
          }, gd, wd), (0, Ud.h)(null, null, hd, {
            kind: "field",
            name: "pindex",
            static: !1,
            private: !1,
            access: {
              has: dd => "pindex" in dd,
              get: dd => dd.pindex,
              set: (dd, Od) => {
                dd.pindex = Od
              }
            },
            metadata: xd
          }, Ed, Jd), (0, Ud.h)(null, dd = {
            value: Od
          }, vd, {
            kind: "class",
            name: Od.name,
            metadata: xd
          }, null, Qd), Od = dd.value, xd && Object.defineProperty(Od, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: xd
          }), (0, Ud.k)(Od, Qd)
        })(), Od
      })(),
      sK = (() => {
        let dd, Od, md = [iX({
            ns: RK,
            name: "mesh"
          })],
          Wd = [];
        Od = class {
          constructor(dd, Od) {
            this.vertices = dd ?? new uK, this.triangles = Od ?? new iK
          }
        };
        return (0, Ud.n)(Od, "ThreeMfMesh"), (() => {
          const Fd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Ud.h)(null, dd = {
            value: Od
          }, md, {
            kind: "class",
            name: Od.name,
            metadata: Fd
          }, null, Wd), Od = dd.value, Fd && Object.defineProperty(Od, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Fd
          }), (0, Ud.k)(Od, Wd)
        })(), Od
      })(),
      uK = (() => {
        let dd, Od, md = [iX({
            ns: RK,
            name: "vertices"
          })],
          Wd = [];
        Od = class {
          constructor() {
            this.vertex = []
          }
        };
        return (0, Ud.n)(Od, "ThreeMfVertices"), (() => {
          const Fd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Ud.h)(null, dd = {
            value: Od
          }, md, {
            kind: "class",
            name: Od.name,
            metadata: Fd
          }, null, Wd), Od = dd.value, Fd && Object.defineProperty(Od, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Fd
          }), (0, Ud.k)(Od, Wd)
        })(), Od
      })(),
      VK = (() => {
        let dd, Od, md, Wd, Fd, Rd = [iX({
            ns: RK,
            name: "vertex"
          })],
          Xd = [],
          Kd = [],
          hd = [],
          vd = [],
          Qd = [],
          td = [],
          od = [];
        Od = class {
          constructor() {
            let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.x = (0, Ud.k)(this, Kd, void 0), this.y = ((0, Ud.k)(this, hd), (0, Ud.k)(this, vd, void 0)), this.z = ((0, Ud.k)(this, Qd), (0, Ud.k)(this, td, void 0)), (0, Ud.k)(this, od), this.x = dd, this.y = Od, this.z = md
          }
        };
        return (0, Ud.n)(Od, "ThreeMfVertex"), (() => {
          const Nd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          md = [rX({
            name: "x"
          })], Wd = [rX({
            name: "y"
          })], Fd = [rX({
            name: "z"
          })], (0, Ud.h)(null, null, md, {
            kind: "field",
            name: "x",
            static: !1,
            private: !1,
            access: {
              has: dd => "x" in dd,
              get: dd => dd.x,
              set: (dd, Od) => {
                dd.x = Od
              }
            },
            metadata: Nd
          }, Kd, hd), (0, Ud.h)(null, null, Wd, {
            kind: "field",
            name: "y",
            static: !1,
            private: !1,
            access: {
              has: dd => "y" in dd,
              get: dd => dd.y,
              set: (dd, Od) => {
                dd.y = Od
              }
            },
            metadata: Nd
          }, vd, Qd), (0, Ud.h)(null, null, Fd, {
            kind: "field",
            name: "z",
            static: !1,
            private: !1,
            access: {
              has: dd => "z" in dd,
              get: dd => dd.z,
              set: (dd, Od) => {
                dd.z = Od
              }
            },
            metadata: Nd
          }, td, od), (0, Ud.h)(null, dd = {
            value: Od
          }, Rd, {
            kind: "class",
            name: Od.name,
            metadata: Nd
          }, null, Xd), Od = dd.value, Nd && Object.defineProperty(Od, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Nd
          }), (0, Ud.k)(Od, Xd)
        })(), Od
      })(),
      iK = (() => {
        let dd, Od, md = [iX({
            ns: RK,
            name: "triangles"
          })],
          Wd = [];
        Od = class {
          constructor() {
            this.triangle = []
          }
        };
        return (0, Ud.n)(Od, "ThreeMfTriangles"), (() => {
          const Fd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Ud.h)(null, dd = {
            value: Od
          }, md, {
            kind: "class",
            name: Od.name,
            metadata: Fd
          }, null, Wd), Od = dd.value, Fd && Object.defineProperty(Od, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Fd
          }), (0, Ud.k)(Od, Wd)
        })(), Od
      })(),
      AK = (() => {
        let dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd, vd = [iX({
            ns: RK,
            name: "triangle"
          })],
          Qd = [],
          td = [],
          od = [],
          Nd = [],
          qd = [],
          Hd = [],
          yd = [],
          bd = [],
          Td = [],
          pd = [],
          Yd = [],
          gd = [],
          wd = [],
          Ed = [],
          Jd = [];
        Od = class {
          constructor(dd, Od, md) {
            this.v1 = (0, Ud.k)(this, td, void 0), this.v2 = ((0, Ud.k)(this, od), (0, Ud.k)(this, Nd, void 0)), this.v3 = ((0, Ud.k)(this, qd), (0, Ud.k)(this, Hd, void 0)), this.p1 = ((0, Ud.k)(this, yd), (0, Ud.k)(this, bd, void 0)), this.p2 = ((0, Ud.k)(this, Td), (0, Ud.k)(this, pd, void 0)), this.p3 = ((0, Ud.k)(this, Yd), (0, Ud.k)(this, gd, void 0)), this.pid = ((0, Ud.k)(this, wd), (0, Ud.k)(this, Ed, void 0)), (0, Ud.k)(this, Jd), this.v1 = dd, this.v2 = Od, this.v3 = md
          }
        };
        return (0, Ud.n)(Od, "ThreeMfTriangle"), (() => {
          const xd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          md = [rX({
            name: "v1"
          })], Wd = [rX({
            name: "v2"
          })], Fd = [rX({
            name: "v3"
          })], Rd = [rX({
            name: "p1"
          })], Xd = [rX({
            name: "p2"
          })], Kd = [rX({
            name: "p3"
          })], hd = [rX({
            name: "pid"
          })], (0, Ud.h)(null, null, md, {
            kind: "field",
            name: "v1",
            static: !1,
            private: !1,
            access: {
              has: dd => "v1" in dd,
              get: dd => dd.v1,
              set: (dd, Od) => {
                dd.v1 = Od
              }
            },
            metadata: xd
          }, td, od), (0, Ud.h)(null, null, Wd, {
            kind: "field",
            name: "v2",
            static: !1,
            private: !1,
            access: {
              has: dd => "v2" in dd,
              get: dd => dd.v2,
              set: (dd, Od) => {
                dd.v2 = Od
              }
            },
            metadata: xd
          }, Nd, qd), (0, Ud.h)(null, null, Fd, {
            kind: "field",
            name: "v3",
            static: !1,
            private: !1,
            access: {
              has: dd => "v3" in dd,
              get: dd => dd.v3,
              set: (dd, Od) => {
                dd.v3 = Od
              }
            },
            metadata: xd
          }, Hd, yd), (0, Ud.h)(null, null, Rd, {
            kind: "field",
            name: "p1",
            static: !1,
            private: !1,
            access: {
              has: dd => "p1" in dd,
              get: dd => dd.p1,
              set: (dd, Od) => {
                dd.p1 = Od
              }
            },
            metadata: xd
          }, bd, Td), (0, Ud.h)(null, null, Xd, {
            kind: "field",
            name: "p2",
            static: !1,
            private: !1,
            access: {
              has: dd => "p2" in dd,
              get: dd => dd.p2,
              set: (dd, Od) => {
                dd.p2 = Od
              }
            },
            metadata: xd
          }, pd, Yd), (0, Ud.h)(null, null, Kd, {
            kind: "field",
            name: "p3",
            static: !1,
            private: !1,
            access: {
              has: dd => "p3" in dd,
              get: dd => dd.p3,
              set: (dd, Od) => {
                dd.p3 = Od
              }
            },
            metadata: xd
          }, gd, wd), (0, Ud.h)(null, null, hd, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: dd => "pid" in dd,
              get: dd => dd.pid,
              set: (dd, Od) => {
                dd.pid = Od
              }
            },
            metadata: xd
          }, Ed, Jd), (0, Ud.h)(null, dd = {
            value: Od
          }, vd, {
            kind: "class",
            name: Od.name,
            metadata: xd
          }, null, Qd), Od = dd.value, xd && Object.defineProperty(Od, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: xd
          }), (0, Ud.k)(Od, Qd)
        })(), Od
      })(),
      rK = (() => {
        let dd, Od, md = [iX({
            ns: RK,
            name: "components"
          })],
          Wd = [];
        Od = class {
          constructor() {
            this.component = []
          }
        };
        return (0, Ud.n)(Od, "ThreeMfComponents"), (() => {
          const Fd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Ud.h)(null, dd = {
            value: Od
          }, md, {
            kind: "class",
            name: Od.name,
            metadata: Fd
          }, null, Wd), Od = dd.value, Fd && Object.defineProperty(Od, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Fd
          }), (0, Ud.k)(Od, Wd)
        })(), Od
      })(),
      GK = (() => {
        let dd, Od, md, Wd, Fd = [iX({
            ns: RK,
            name: "component"
          })],
          Rd = [],
          Xd = [],
          Kd = [],
          hd = [],
          vd = [];
        Od = class {
          constructor(dd, Od) {
            this.objectid = (0, Ud.k)(this, Xd, void 0), this.transform = ((0, Ud.k)(this, Kd), (0, Ud.k)(this, hd, void 0)), (0, Ud.k)(this, vd), this.objectid = dd, this.transform = Od
          }
        };
        return (0, Ud.n)(Od, "ThreeMfComponent"), (() => {
          const Qd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          md = [rX({
            name: "objectid"
          })], Wd = [rX({
            name: "transform",
            formatter: EK
          })], (0, Ud.h)(null, null, md, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: dd => "objectid" in dd,
              get: dd => dd.objectid,
              set: (dd, Od) => {
                dd.objectid = Od
              }
            },
            metadata: Qd
          }, Xd, Kd), (0, Ud.h)(null, null, Wd, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: dd => "transform" in dd,
              get: dd => dd.transform,
              set: (dd, Od) => {
                dd.transform = Od
              }
            },
            metadata: Qd
          }, hd, vd), (0, Ud.h)(null, dd = {
            value: Od
          }, Fd, {
            kind: "class",
            name: Od.name,
            metadata: Qd
          }, null, Rd), Od = dd.value, Qd && Object.defineProperty(Od, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Qd
          }), (0, Ud.k)(Od, Rd)
        })(), Od
      })(),
      nK = (() => {
        let dd, Od, md, Wd = [iX({
            ns: RK,
            name: "basematerials"
          })],
          Fd = [],
          Rd = [],
          Xd = [];
        Od = class {
          constructor(dd) {
            this.id = (0, Ud.k)(this, Rd, void 0), this.base = ((0, Ud.k)(this, Xd), []), this.id = dd
          }
        };
        return (0, Ud.n)(Od, "ThreeMfBaseMaterials"), (() => {
          const Kd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          md = [rX({
            name: "id"
          })], (0, Ud.h)(null, null, md, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: dd => "id" in dd,
              get: dd => dd.id,
              set: (dd, Od) => {
                dd.id = Od
              }
            },
            metadata: Kd
          }, Rd, Xd), (0, Ud.h)(null, dd = {
            value: Od
          }, Wd, {
            kind: "class",
            name: Od.name,
            metadata: Kd
          }, null, Fd), Od = dd.value, Kd && Object.defineProperty(Od, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Kd
          }), (0, Ud.k)(Od, Fd)
        })(), Od
      })(),
      LK = (() => {
        let dd, Od, md, Wd, Fd = [iX({
            ns: RK,
            name: "base"
          })],
          Rd = [],
          Xd = [],
          Kd = [],
          hd = [],
          vd = [];
        Od = class {
          constructor(dd, Od) {
            this.name = (0, Ud.k)(this, Xd, void 0), this.displaycolor = ((0, Ud.k)(this, Kd), (0, Ud.k)(this, hd, void 0)), (0, Ud.k)(this, vd), this.name = dd, this.displaycolor = Od
          }
        };
        return (0, Ud.n)(Od, "ThreeMfBase"), (() => {
          const Qd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          md = [rX({
            name: "name"
          })], Wd = [rX({
            name: "displaycolor"
          })], (0, Ud.h)(null, null, md, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: dd => "name" in dd,
              get: dd => dd.name,
              set: (dd, Od) => {
                dd.name = Od
              }
            },
            metadata: Qd
          }, Xd, Kd), (0, Ud.h)(null, null, Wd, {
            kind: "field",
            name: "displaycolor",
            static: !1,
            private: !1,
            access: {
              has: dd => "displaycolor" in dd,
              get: dd => dd.displaycolor,
              set: (dd, Od) => {
                dd.displaycolor = Od
              }
            },
            metadata: Qd
          }, hd, vd), (0, Ud.h)(null, dd = {
            value: Od
          }, Fd, {
            kind: "class",
            name: Od.name,
            metadata: Qd
          }, null, Rd), Od = dd.value, Qd && Object.defineProperty(Od, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Qd
          }), (0, Ud.k)(Od, Rd)
        })(), Od
      })(),
      PK = (() => {
        let dd, Od, md = [iX({
            ns: RK,
            name: "build"
          })],
          Wd = [];
        Od = class {
          constructor() {
            this.item = []
          }
        };
        return (0, Ud.n)(Od, "ThreeMfBuild"), (() => {
          const Fd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Ud.h)(null, dd = {
            value: Od
          }, md, {
            kind: "class",
            name: Od.name,
            metadata: Fd
          }, null, Wd), Od = dd.value, Fd && Object.defineProperty(Od, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Fd
          }), (0, Ud.k)(Od, Wd)
        })(), Od
      })(),
      zK = (() => {
        let dd, Od, md, Wd, Fd, Rd = [iX({
            ns: RK,
            name: "item"
          })],
          Xd = [],
          Kd = [],
          hd = [],
          vd = [],
          Qd = [],
          td = [],
          od = [];
        Od = class {
          constructor(dd, Od, md) {
            this.objectid = (0, Ud.k)(this, Kd, void 0), this.transform = ((0, Ud.k)(this, hd), (0, Ud.k)(this, vd, void 0)), this.partnumber = ((0, Ud.k)(this, Qd), (0, Ud.k)(this, td, void 0)), this.metadatagroup = (0, Ud.k)(this, od), this.objectid = dd, this.transform = Od, this.partnumber = md
          }
        };
        return (0, Ud.n)(Od, "ThreeMfItem"), (() => {
          const Nd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          md = [rX({
            name: "objectid"
          })], Wd = [rX({
            name: "transform",
            formatter: EK
          })], Fd = [rX({
            name: "partnumber"
          })], (0, Ud.h)(null, null, md, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: dd => "objectid" in dd,
              get: dd => dd.objectid,
              set: (dd, Od) => {
                dd.objectid = Od
              }
            },
            metadata: Nd
          }, Kd, hd), (0, Ud.h)(null, null, Wd, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: dd => "transform" in dd,
              get: dd => dd.transform,
              set: (dd, Od) => {
                dd.transform = Od
              }
            },
            metadata: Nd
          }, vd, Qd), (0, Ud.h)(null, null, Fd, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: dd => "partnumber" in dd,
              get: dd => dd.partnumber,
              set: (dd, Od) => {
                dd.partnumber = Od
              }
            },
            metadata: Nd
          }, td, od), (0, Ud.h)(null, dd = {
            value: Od
          }, Rd, {
            kind: "class",
            name: Od.name,
            metadata: Nd
          }, null, Xd), Od = dd.value, Nd && Object.defineProperty(Od, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Nd
          }), (0, Ud.k)(Od, Xd)
        })(), Od
      })();
    class cK {
      constructor(dd, Od) {
        this._object = new SK(dd, Od)
      }
      withName(dd) {
        return this._object.name = dd, this
      }
      withThumbnail(dd) {
        return this._object.thumbnail = dd, this
      }
      withProperty(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._object.pid = dd, this._object.id = Od, this
      }
      build() {
        return this._object
      }
      reset(dd, Od) {
        this._object = new SK(dd, Od)
      }
    }
    class jK extends cK {
      constructor(dd) {
        super(dd, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hK.model), this._object.content = new rK
      }
      withComponent(dd, Od) {
        return this._object.content.component.push(new GK(dd, Od)), this
      }
    }
    class DK extends cK {
      constructor(dd) {
        super(dd, hK.model)
      }
      withPostProcessHandlers(dd, Od) {
        return this._vh = dd, this._th = Od, this
      }
      withData(dd) {
        return this._object.content = this._buildMesh(dd), this
      }
      withMaterial(dd, Od) {
        return this._object.pid = dd, this._object.pindex = Od, this
      }
      _buildMesh(dd) {
        const Od = this._buildVertices(dd.positions),
          md = this._buildTriangle(dd.indices);
        return new sK(Od, md)
      }
      _buildVertices(dd) {
        const Od = new uK;
        if (dd)
          for (let md = 0; md < dd.length;) {
            const Wd = dd[md++],
              Fd = dd[md++],
              Rd = dd[md++];
            let Xd = new VK(Wd, Fd, Rd);
            this._vh && (Xd = this._vh(Xd)), Od.vertex.push(Xd)
          }
        return Od
      }
      _buildTriangle(dd) {
        const Od = new iK;
        if (dd)
          for (let md = 0; md < dd.length;) {
            const Wd = dd[md++],
              Fd = dd[md++],
              Rd = dd[md++];
            let Xd = new AK(Wd, Fd, Rd);
            this._th && (Xd = this._th(Xd)), Od.triangle.push(Xd)
          }
        return Od
      }
    }
    class eK {
      constructor(dd) {
        this._m = new nK(dd)
      }
      withColor(dd, Od) {
        this._m.base = this._m.base ?? [];
        let md = this._m.base.find((Od => Od.name.toLowerCase() === dd.toLowerCase()));
        return md ? (md.displaycolor = this._rgbaToHex(Od), this) : (md = new LK(dd, this._rgbaToHex(Od)), this._m.base.push(md), this)
      }
      build() {
        return this._m
      }
      _rgbaToHex(dd) {
        const Od = dd => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(dd, 1 / 2.2)))),
          md = Od(dd.r).toString(16).padStart(2, "0").toUpperCase(),
          Wd = Od(dd.g).toString(16).padStart(2, "0").toUpperCase(),
          Fd = Od(dd.b).toString(16).padStart(2, "0").toUpperCase();
        if ("number" === typeof dd.a) {
          return `#${md}${Wd}${Fd}${Math.round(Math.min(255,Math.max(0,255*dd.a))).toString(16).padStart(2,"0").toUpperCase()}`
        }
        return `#${md}${Wd}${Fd}`
      }
    }
    class IK {
      constructor() {
        this._model = new JK, this._objects = new Map
      }
      withMetaData(dd, Od, md, Wd) {
        return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new UK(dd, Od, md, Wd)), this
      }
      withMaterial(dd) {
        return dd instanceof eK && (dd = dd.build()), dd && (this._model.resources = this._model.resources ?? new BK, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(dd)), this
      }
      withMesh(dd) {
        return dd instanceof DK && (dd = dd.build()), this._model.resources = this._model.resources ?? new BK, this._model.resources.object.push(dd), this
      }
      withComponents(dd) {
        return dd instanceof jK && (dd = dd.build()), this._model.resources = this._model.resources ?? new BK, this._model.resources.object.push(dd), this
      }
      withBuild(dd, Od, md) {
        return this._model.build = this._model.build ?? new PK, this._model.build.item?.push(new zK(dd, Od, md)), this
      }
      withUnit(dd) {
        return this._model.unit = dd, this
      }
      reset() {
        return this._model = new JK, this._objects = new Map, this
      }
      build() {
        if (!this._model.resources?.object?.length) throw new Error("Invalid state: resources MUST be defined ");
        if (!this._model.build?.item?.length) throw new Error("Invalid state: Build MUST be defined ");
        return this._model
      }
    }
    IK.KnownMetaSet = new Set(JK.KnownMeta.map((dd => dd.toLowerCase())));
    class lK {
      withContentType(dd) {
        this._cts || (this._cts = new TK);
        const Od = this._cts.items;
        return Od.some((Od => Od.ext === dd.ext && Od.ct === dd.ct)) || Od.push(dd), this
      }
      withRelationship(dd) {
        this._rs || (this._rs = new YK);
        const Od = this._rs.items;
        return Od.some((Od => Od.id === dd.id)) || Od.push(dd), this.withContentType(new pK("rels", tK.Relationships)), this
      }
      withModel(dd) {
        return dd instanceof IK && (dd = dd.build()), this._m = dd, this.withContentType(new pK("model", tK.Model)), this
      }
      build() {
        if (!this._m) throw new Error("Invalid state: you Must provide at least a model.");
        const dd = `${NK}${qK}`;
        if (!this._rs) {
          const Od = `/${dd}`;
          this.withRelationship(new gK("rel0", bK.ThreeDimModel, Od))
        }
        return new wK(this._cts, this._rs, this._m)
      }
    }
    class CK {
      constructor(dd) {
        this._o = dd
      }
      get options() {
        return this._o
      }
      async serializeAsync(dd) {
        const Od = await this.ensureZipLibReadyAsync();
        if (!Od) return;
        const md = Od.Zip,
          Wd = Od.ZipDeflate;
        if (!md || !Wd) throw new Error("fflate Zip / ZipDeflate not available");
        const Fd = function(dd, Od, md) {
          const Fd = new Wd(Od, {
            level: 6
          });
          dd.add(Fd);
          const Rd = function(dd) {
              return {
                push: (Od, md) => dd.push(Od, md)
              }
            }(Fd),
            Xd = new FK(Rd),
            Kd = new mK(Xd).dec("1.0", "UTF-8");
          new MX(Kd).serialize(md), Xd.finish()
        };
        for (var Rd = arguments.length, Xd = new Array(Rd > 1 ? Rd - 1 : 0), Kd = 1; Kd < Rd; Kd++) Xd[Kd - 1] = arguments[Kd];
        const hd = this.toDocument(...Xd);
        if (!hd) return;
        const vd = new md(dd);
        Fd(vd, yK, hd.contentTypes), Fd(vd, `${oK}${HK}`, hd.relationships), Fd(vd, `${NK}${qK}`, hd.model), vd.end()
      }
      toDocument() {
        const dd = (new IK).withUnit(this._o?.unit ?? KK.millimeter);
        if (this.options.metadata)
          for (const Fd in this.options.metadata) dd.withMetaData(Fd, this.options.metadata[Fd]);
        for (var Od = arguments.length, md = new Array(Od), Wd = 0; Wd < Od; Wd++) md[Wd] = arguments[Wd];
        return (new lK).withModel(this.toModel(dd, ...md)).build()
      }
    }
    class ZK {
      static async SerializeToMemoryAsync(dd) {
        const Od = new Array;
        let md = 0;
        for (var Wd = arguments.length, Fd = new Array(Wd > 1 ? Wd - 1 : 0), Rd = 1; Rd < Wd; Rd++) Fd[Rd - 1] = arguments[Rd];
        if (await dd.serializeAsync((function(dd, Wd, Fd) {
            Od.push(Wd), md += Wd.length
          }), ...Fd), !md) return;
        const Xd = new Uint8Array(md);
        let Kd = 0;
        for (const hd of Od) Xd.set(hd, Kd), Kd += hd.length;
        return Xd
      }
    }
    class kK {}
    kK.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class fK {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._from = dd, this._to = Od, this._step = md, this._i = dd
      }
      next() {
        if (this._i < this._to) throw new Error("ST_ResourceID out of bound");
        const dd = this._i;
        return this._i += this._step, dd
      }
      reset() {
        return this._i = this._from, this
      }
    }
    class MK extends CK {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super({
          ...MK.DefaultOptions,
          ...dd
        })
      }
      toModel(dd) {
        for (var Od = arguments.length, md = new Array(Od > 1 ? Od - 1 : 0), Wd = 1; Wd < Od; Wd++) md[Wd - 1] = arguments[Wd];
        md = md.filter((dd => dd instanceof oW.d || dd instanceof Nd.e));
        const Fd = new fK,
          Rd = dd,
          Xd = new Map,
          Kd = this.options.exportInstances ? [] : null;
        for (let hd = 0; hd < md.length; hd++) {
          const dd = md[hd];
          if (dd instanceof Nd.e) {
            Kd?.push(dd);
            continue
          }
          const Od = dd.name || `mesh${hd}`,
            Wd = dd.getWorldMatrix(),
            vd = this._handleBabylonTo3mfMatrixTransformToRef(Wd, aK.Zero()),
            Qd = dd.ZE;
          if (void 0 === Qd) continue;
          const td = 1 == Qd.length;
          for (let md = 0; md < Qd.length; md++) {
            const Wd = Qd[md],
              Kd = this._extractSubMesh(dd, Wd);
            if (Kd) {
              const dd = td ? `${Od}` : `${Od}_${md}`,
                hd = new DK(Fd.next()).withData(Kd).withName(dd).build();
              Rd.withMesh(hd), Rd.withBuild(hd.id, vd), Xd.set(Wd, hd)
            }
          }
        }
        if (Kd && Kd.length) {
          const dd = this._groupBy(Kd, (dd => dd.ZRd));
          for (const [Od, md] of Array.from(dd.entries()))
            if (md && md.length)
              for (let dd = 0; dd < md.length; dd++) {
                const Wd = md[dd].getWorldMatrix(),
                  Fd = Od.ZE;
                for (let dd = 0; dd < Fd.length; dd++) {
                  const Od = Fd[dd],
                    md = Xd.get(Od);
                  md && Rd.withBuild(md.id, this._handleBabylonTo3mfMatrixTransformToRef(Wd, aK.Zero()))
                }
              }
        }
        return Rd.build()
      }
      async ensureZipLibReadyAsync() {
        return this._fflateReadyPromise || (this._fflateReadyPromise = (async () => {
          const dd = globalThis;
          return dd.fflate || await Fd.Tools.LoadScriptAsync(kK.FFLATEUrl), dd.fflate
        })()), await this._fflateReadyPromise
      }
      _extractSubMesh(dd, Od) {
        const md = dd.jRd();
        if (!md) return;
        const Wd = dd.getVerticesData(MK._PositionKind);
        if (!Wd) return;
        if (0 == Od.indexStart && Od.indexCount == md.length) return {
          positions: Wd,
          indices: md
        };
        const Fd = Od.indexStart,
          Rd = new Map,
          Xd = [],
          Kd = new Uint32Array(Od.indexCount);
        for (let hd = 0; hd < Od.indexCount; hd++) {
          const dd = md[Fd + hd];
          let Od = Rd.get(dd);
          if (void 0 === Od) {
            Od = Rd.size, Rd.set(dd, Od);
            const md = 3 * dd;
            Xd.push(Wd[md], Wd[md + 1], Wd[md + 2])
          }
          Kd[hd] = Od
        }
        return {
          positions: new Float32Array(Xd),
          indices: Kd
        }
      }
      _groupBy(dd, Od) {
        const md = new Map;
        for (const Wd of dd) {
          const dd = Od(Wd),
            Fd = md.get(dd);
          Fd ? Fd.push(Wd) : md.set(dd, [Wd])
        }
        return md
      }
      _handleBabylonTo3mfMatrixTransformToRef(dd, Od) {
        const md = dd.multiplyToRef(MK._R_BJS_TO_3MF, Pd.d.Zero()).m;
        return Od.values = [md[0], md[1], md[2], md[4], md[5], md[6], md[8], md[9], md[10], md[12], md[13], md[14]], Od
      }
    }
    MK.DefaultOptions = {
      unit: KK.meter,
      exportInstances: !1
    }, MK._PositionKind = "position", MK._R_BJS_TO_3MF = Pd.d.RotationX(Math.PI / 2).multiply(Pd.d.Scaling(1, -1, 1))
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);