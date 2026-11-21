export const id = 225;
export const ids = [225, 230];
export const modules = {
  41793: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Pd
    });
    var pd = kd(41722),
      Nd = kd(39957);
    let Wd = !1;

    function Pd() {
      Wd || (Wd = !0, Nd.b.prototype._sphericalPolynomialTargetSize = 0, Nd.b.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(Nd.b.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = pd.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((dd => {
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
  37438: (dd, Jd, kd) => {
    kd.d(Jd, {
      Color3: () => pd.c,
      c: () => pd.g
    });
    var pd = kd(37443);
    (0, pd.k)()
  },
  37966: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Nd
    });
    var pd = kd(37969);
    class Nd {
      static GetPlanes(dd) {
        const Jd = [];
        for (let kd = 0; kd < 6; kd++) Jd.push(new pd.c(0, 0, 0, 0));
        return Nd.GetPlanesToRef(dd, Jd), Jd
      }
      static GetNearPlaneToRef(dd, Jd) {
        const kd = dd.m;
        Jd.normal.x = kd[3] + kd[2], Jd.normal.y = kd[7] + kd[6], Jd.normal.z = kd[11] + kd[10], Jd.d = kd[15] + kd[14], Jd.normalize()
      }
      static GetFarPlaneToRef(dd, Jd) {
        const kd = dd.m;
        Jd.normal.x = kd[3] - kd[2], Jd.normal.y = kd[7] - kd[6], Jd.normal.z = kd[11] - kd[10], Jd.d = kd[15] - kd[14], Jd.normalize()
      }
      static GetLeftPlaneToRef(dd, Jd) {
        const kd = dd.m;
        Jd.normal.x = kd[3] + kd[0], Jd.normal.y = kd[7] + kd[4], Jd.normal.z = kd[11] + kd[8], Jd.d = kd[15] + kd[12], Jd.normalize()
      }
      static GetRightPlaneToRef(dd, Jd) {
        const kd = dd.m;
        Jd.normal.x = kd[3] - kd[0], Jd.normal.y = kd[7] - kd[4], Jd.normal.z = kd[11] - kd[8], Jd.d = kd[15] - kd[12], Jd.normalize()
      }
      static GetTopPlaneToRef(dd, Jd) {
        const kd = dd.m;
        Jd.normal.x = kd[3] - kd[1], Jd.normal.y = kd[7] - kd[5], Jd.normal.z = kd[11] - kd[9], Jd.d = kd[15] - kd[13], Jd.normalize()
      }
      static GetBottomPlaneToRef(dd, Jd) {
        const kd = dd.m;
        Jd.normal.x = kd[3] + kd[1], Jd.normal.y = kd[7] + kd[5], Jd.normal.z = kd[11] + kd[9], Jd.d = kd[15] + kd[13], Jd.normalize()
      }
      static GetPlanesToRef(dd, Jd) {
        Nd.GetNearPlaneToRef(dd, Jd[0]), Nd.GetFarPlaneToRef(dd, Jd[1]), Nd.GetLeftPlaneToRef(dd, Jd[2]), Nd.GetRightPlaneToRef(dd, Jd[3]), Nd.GetTopPlaneToRef(dd, Jd[4]), Nd.GetBottomPlaneToRef(dd, Jd[5])
      }
      static IsPointInFrustum(dd, Jd) {
        for (let kd = 0; kd < 6; kd++)
          if (Jd[kd].dotCoordinate(dd) < 0) return !1;
        return !0
      }
    }
  },
  37969: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Nd
    });
    var pd = kd(37251);
    class Nd {
      constructor(dd, Jd, kd, Nd) {
        this.normal = new pd.n(dd, Jd, kd), this.d = Nd
      }
      spd() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Nd(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let Jd = 0;
        return 0 !== dd && (Jd = 1 / dd), this.normal.x *= Jd, this.normal.y *= Jd, this.normal.z *= Jd, this.d *= Jd, this
      }
      transform(dd) {
        const Jd = Nd._TmpMatrix;
        dd.invertToRef(Jd);
        const kd = Jd.m,
          pd = this.normal.x,
          Wd = this.normal.y,
          Pd = this.normal.z,
          Zd = this.d,
          gd = pd * kd[0] + Wd * kd[1] + Pd * kd[2] + Zd * kd[3],
          Cd = pd * kd[4] + Wd * kd[5] + Pd * kd[6] + Zd * kd[7],
          Kd = pd * kd[8] + Wd * kd[9] + Pd * kd[10] + Zd * kd[11],
          od = pd * kd[12] + Wd * kd[13] + Pd * kd[14] + Zd * kd[15];
        return new Nd(gd, Cd, Kd, od)
      }
      dotCoordinate(dd) {
        return this.normal.x * dd.x + this.normal.y * dd.y + this.normal.z * dd.z + this.d
      }
      copyFromPoints(dd, Jd, kd) {
        const pd = Jd.x - dd.x,
          Nd = Jd.y - dd.y,
          Wd = Jd.z - dd.z,
          Pd = kd.x - dd.x,
          Zd = kd.y - dd.y,
          gd = kd.z - dd.z,
          Cd = Nd * gd - Wd * Zd,
          Kd = Wd * Pd - pd * gd,
          od = pd * Zd - Nd * Pd,
          ld = Math.sqrt(Cd * Cd + Kd * Kd + od * od);
        let Qd;
        return Qd = 0 !== ld ? 1 / ld : 0, this.normal.x = Cd * Qd, this.normal.y = Kd * Qd, this.normal.z = od * Qd, this.d = -(this.normal.x * dd.x + this.normal.y * dd.y + this.normal.z * dd.z), this
      }
      isFrontFacingTo(dd, Jd) {
        return pd.n.Dot(this.normal, dd) <= Jd
      }
      signedDistanceTo(dd) {
        return pd.n.Dot(dd, this.normal) + this.d
      }
      static FromArray(dd) {
        return new Nd(dd[0], dd[1], dd[2], dd[3])
      }
      static FromPoints(dd, Jd, kd) {
        const pd = new Nd(0, 0, 0, 0);
        return pd.copyFromPoints(dd, Jd, kd), pd
      }
      static FromPositionAndNormal(dd, Jd) {
        const kd = new Nd(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(dd, Jd, kd)
      }
      static FromPositionAndNormalToRef(dd, Jd, kd) {
        return kd.normal.Fs(Jd), kd.normal.normalize(), kd.d = -dd.dot(kd.normal), kd
      }
      static SignedDistanceToPlaneFromPositionAndNormal(dd, Jd, kd) {
        const Nd = -(Jd.x * dd.x + Jd.y * dd.y + Jd.z * dd.z);
        return pd.n.Dot(kd, Jd) + Nd
      }
    }
    Nd._TmpMatrix = pd.b.Identity()
  },
  37245: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      Matrix: () => pd.b,
      Quaternion: () => pd.d,
      RegisterMathVector: () => pd.f,
      TmpVectors: () => pd.h,
      Vector2: () => pd.k,
      IL: () => pd.n,
      Vector4: () => pd.o
    });
    var pd = kd(37251);
    (0, pd.f)()
  },
  38281: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => pd
    });
    class pd {
      constructor(dd, Jd, kd, pd) {
        this.x = dd, this.y = Jd, this.width = kd, this.height = pd
      }
      toGlobal(dd, Jd) {
        return new pd(this.x * dd, this.y * Jd, this.width * dd, this.height * Jd)
      }
      toGlobalToRef(dd, Jd, kd) {
        return kd.x = this.x * dd, kd.y = this.y * Jd, kd.width = this.width * dd, kd.height = this.height * Jd, this
      }
      clone() {
        return new pd(this.x, this.y, this.width, this.height)
      }
    }
  },
  41722: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Cd
    });
    var pd = kd(37251),
      Nd = kd(37289),
      Wd = kd(39952),
      Pd = kd(37259),
      Zd = kd(37443);
    class gd {
      constructor(dd, Jd, kd, pd) {
        this.name = dd, this.worldAxisForNormal = Jd, this.worldAxisForFileX = kd, this.worldAxisForFileY = pd
      }
    }
    class Cd {
      static _NearestPow2Floor(dd) {
        return dd <= 1 ? 1 : 1 << Math.floor(Math.log2(dd))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(dd) {
        if (!dd.isCube) return null;
        dd.Wm()?.eL().flushFramebuffer();
        const Jd = dd.getSize().width,
          kd = dd._sphericalPolynomialTargetSize,
          pd = kd > 0 ? this._NearestPow2Floor(kd) : 0,
          Nd = !dd.noMipmap && !0 === dd._texture?.generateMipMaps,
          Wd = pd > 0 && pd < Jd && Nd,
          Pd = Wd ? Math.max(0, Math.round(Math.log2(Jd / pd))) : 0,
          Zd = Wd ? Math.max(1, Math.floor(Jd / Math.pow(2, Pd))) : Jd,
          gd = dd.readPixels(0, Pd, void 0, !1),
          Cd = dd.readPixels(1, Pd, void 0, !1);
        let Kd, od;
        dd.isRenderTarget ? (Kd = dd.readPixels(3, Pd, void 0, !1), od = dd.readPixels(2, Pd, void 0, !1)) : (Kd = dd.readPixels(2, Pd, void 0, !1), od = dd.readPixels(3, Pd, void 0, !1));
        const ld = dd.readPixels(4, Pd, void 0, !1),
          Qd = dd.readPixels(5, Pd, void 0, !1),
          Ld = dd.gammaSpace,
          Od = pd > 0 && pd < Jd && !Wd;
        return new Promise((dd => {
          Promise.all([Cd, gd, Kd, od, ld, Qd]).then((kd => {
            let [Nd, Wd, Pd, gd, Cd, Kd] = kd, od = Zd;
            if (Od) {
              const dd = 4;
              Nd = this._DownsampleFace(Nd, Jd, pd, dd), Wd = this._DownsampleFace(Wd, Jd, pd, dd), Pd = this._DownsampleFace(Pd, Jd, pd, dd), gd = this._DownsampleFace(gd, Jd, pd, dd), Cd = this._DownsampleFace(Cd, Jd, pd, dd), Kd = this._DownsampleFace(Kd, Jd, pd, dd), od = pd
            }
            const ld = {
              size: od,
              right: Wd,
              left: Nd,
              up: Pd,
              down: gd,
              front: Cd,
              back: Kd,
              format: 5,
              type: Nd instanceof Float32Array ? 1 : 0,
              gammaSpace: Ld
            };
            dd(this.ConvertCubeMapToSphericalPolynomial(ld))
          }))
        }))
      }
      static _AreaElement(dd, Jd) {
        return Math.atan2(dd * Jd, Math.sqrt(dd * dd + Jd * Jd + 1))
      }
      static _DownsampleFace(dd, Jd, kd, pd) {
        const Nd = dd instanceof Float32Array ? dd : Float32Array.from(dd),
          Wd = kd * kd * pd,
          Pd = new Float32Array(Wd),
          Zd = Jd / kd,
          gd = 1 / (Zd * Zd);
        for (let Kd = 0; Kd < kd; Kd++) {
          const dd = Math.floor(Kd * Zd),
            Wd = Math.floor((Kd + 1) * Zd);
          for (let Cd = 0; Cd < kd; Cd++) {
            const od = Math.floor(Cd * Zd),
              ld = Math.floor((Cd + 1) * Zd),
              Qd = (Kd * kd + Cd) * pd;
            for (let kd = 0; kd < pd; kd++) {
              let Zd = 0;
              for (let Pd = dd; Pd < Wd; Pd++)
                for (let dd = od; dd < ld; dd++) Zd += Nd[(Pd * Jd + dd) * pd + kd];
              Pd[Qd + kd] = Zd * gd
            }
          }
        }
        if (dd instanceof Float32Array) return Pd;
        const Cd = new(0, dd.constructor)(Wd);
        for (let Kd = 0; Kd < Wd; Kd++) Cd[Kd] = Pd[Kd] + .5 | 0;
        return Cd
      }
      static ConvertCubeMapToSphericalPolynomial(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const kd = Jd > 0 ? this._NearestPow2Floor(Jd) : 0;
        if (kd > 0 && dd.size > kd) {
          const Jd = 5 === dd.format ? 4 : 3,
            pd = ["right", "left", "up", "down", "front", "back"],
            Nd = {};
          for (const Wd of pd) Nd[Wd] = this._DownsampleFace(dd[Wd], dd.size, kd, Jd);
          dd = {
            ...dd,
            ...Nd,
            size: kd
          }
        }
        const pd = new Wd.b;
        let gd = 0;
        const Cd = 2 / dd.size,
          Kd = Cd,
          od = .5 * Cd,
          ld = od - 1;
        for (let Wd = 0; Wd < 6; Wd++) {
          const Jd = this._FileFaces[Wd],
            kd = dd[Jd.name];
          let Qd = ld;
          const Ld = 5 === dd.format ? 4 : 3;
          for (let Wd = 0; Wd < dd.size; Wd++) {
            let Od = ld;
            for (let Kd = 0; Kd < dd.size; Kd++) {
              const ld = Jd.worldAxisForFileX.scale(Od).add(Jd.worldAxisForFileY.scale(Qd)).add(Jd.worldAxisForNormal);
              ld.normalize();
              const ed = this._AreaElement(Od - od, Qd - od) - this._AreaElement(Od - od, Qd + od) - this._AreaElement(Od + od, Qd - od) + this._AreaElement(Od + od, Qd + od);
              let Rd = kd[Wd * dd.size * Ld + Kd * Ld + 0],
                Id = kd[Wd * dd.size * Ld + Kd * Ld + 1],
                Gd = kd[Wd * dd.size * Ld + Kd * Ld + 2];
              isNaN(Rd) && (Rd = 0), isNaN(Id) && (Id = 0), isNaN(Gd) && (Gd = 0), 0 === dd.type && (Rd /= 255, Id /= 255, Gd /= 255), dd.gammaSpace && (Rd = Math.pow((0, Nd.Clamp)(Rd), Pd.h), Id = Math.pow((0, Nd.Clamp)(Id), Pd.h), Gd = Math.pow((0, Nd.Clamp)(Gd), Pd.h));
              const vd = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const dd = Math.max(Rd, Id, Gd);
                if (dd > vd) {
                  const Jd = vd / dd;
                  Rd *= Jd, Id *= Jd, Gd *= Jd
                }
              } else Rd = (0, Nd.Clamp)(Rd, 0, vd), Id = (0, Nd.Clamp)(Id, 0, vd), Gd = (0, Nd.Clamp)(Gd, 0, vd);
              const xd = new Zd.c(Rd, Id, Gd);
              pd.addLight(ld, xd, ed), gd += ed, Od += Cd
            }
            Qd += Kd
          }
        }
        const Qd = 6 * (4 * Math.PI) / 6 / gd;
        return pd.scaleInPlace(Qd), pd.convertIncidentRadianceToIrradiance(), pd.convertIrradianceToLambertianRadiance(), Wd.f.FromHarmonics(pd)
      }
    }
    Cd._FileFaces = [new gd("right", new pd.n(1, 0, 0), new pd.n(0, 0, -1), new pd.n(0, -1, 0)), new gd("left", new pd.n(-1, 0, 0), new pd.n(0, 0, 1), new pd.n(0, -1, 0)), new gd("up", new pd.n(0, 1, 0), new pd.n(1, 0, 0), new pd.n(0, 0, 1)), new gd("down", new pd.n(0, -1, 0), new pd.n(1, 0, 0), new pd.n(0, 0, -1)), new gd("front", new pd.n(0, 0, 1), new pd.n(1, 0, 0), new pd.n(0, -1, 0)), new gd("back", new pd.n(0, 0, -1), new pd.n(-1, 0, 0), new pd.n(0, -1, 0))], Cd.MAX_HDRI_VALUE = 4096, Cd.PRESERVE_CLAMPED_COLORS = !1
  },
  41515: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => pd.i,
      i: () => pd.r
    });
    var pd = kd(40007);
    (0, pd.w)()
  },
  38105: (dd, Jd, kd) => {
    function pd() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (dd => {
        const Jd = 16 * Math.random() | 0;
        return ("x" === dd ? Jd : 3 & Jd | 8).toString(16)
      }))
    }
    kd.d(Jd, {
      c: () => pd
    })
  },
  41764: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Wd
    });
    var pd = kd(41752),
      Nd = kd(41767);
    class Wd {
      static ExpandRGBDTexture(dd) {
        const Jd = dd._texture;
        if (!Jd || !dd.isRGBD) return;
        const Nd = Jd.eL(),
          Wd = Nd.getCaps(),
          Pd = Jd.isReady;
        let Zd = !1;
        Wd.textureHalfFloatRender && Wd.textureHalfFloatLinearFiltering ? (Zd = !0, Jd.type = 2) : Wd.textureFloatRender && Wd.textureFloatLinearFiltering && (Zd = !0, Jd.type = 1), Zd && (Jd.isReady = !1, Jd._isRGBD = !1, Jd.invertY = !1);
        const gd = async () => {
          const Wd = Nd.isWebGPU,
            Pd = Wd ? 1 : 0;
          Jd.isReady = !1, Wd ? await kd.e(333).then((() => kd(61105))) : await kd.e(315).then((() => kd(61110)));
          const Zd = new pd.e("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, Nd, !1, void 0, Jd.type, void 0, null, !1, void 0, Pd);
          Zd.externalTextureSamplerBinding = !0;
          const gd = Nd.createRenderTargetTexture(Jd.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: Jd.samplingMode,
            type: Jd.type,
            format: 5
          });
          Zd.onEffectCreatedObservable.addOnce((kd => {
            kd.executeWhenCompiled((() => {
              Zd.onApply = dd => {
                dd._bindTexture("textureSampler", Jd), dd.setFloat2("scale", 1, 1)
              }, dd.Wm()?.postProcessManager.directRender([Zd], gd, !0), Nd.restoreDefaultFramebuffer(), Nd._releaseTexture(Jd), Zd && Zd.dispose(), gd._swapAndDie(Jd), Jd.isReady = !0
            }))
          }))
        };
        Zd && (Pd ? gd() : dd.onLoadObservable.addOnce(gd))
      }
      static async EncodeTextureToRGBD(dd, Jd) {
        let pd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return Jd.eL().isWebGPU ? await kd.e(334).then((() => kd(61135))) : await kd.e(316).then((() => kd(61126))), await (0, Nd.c)("rgbdEncode", dd, Jd, pd, 1, 5)
      }
    }
  },
  60859: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      AsyncLoop: () => pd.e,
      RegisterTools: () => pd.g,
      Tools: () => pd.h,
      className: () => pd.k
    });
    var pd = kd(40066);
    (0, pd.g)()
  },
  41811: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Nd
    });
    class pd {
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
        for (const Jd of this._workerInfos)
          if (Jd.idle) return this._execute(Jd, dd), !0;
        return !1
      }
      _execute(dd, Jd) {
        dd.idle = !1, dd.workerPromise.then((kd => {
          Jd(kd, (() => {
            const Jd = this._pendingActions.shift();
            Jd ? this._execute(dd, Jd) : dd.idle = !0
          }))
        }))
      }
    }
    class Nd extends pd {
      constructor(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Nd.DefaultOptions;
        super([]), this._maxWorkers = dd, this._createWorkerAsync = Jd, this._options = kd
      }
      push(dd) {
        if (!this._executeOnIdleWorker(dd))
          if (this._workerInfos.length < this._maxWorkers) {
            const Jd = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(Jd), this._execute(Jd, dd)
          } else this._pendingActions.push(dd)
      }
      _execute(dd, Jd) {
        dd.timeoutId && (clearTimeout(dd.timeoutId), delete dd.timeoutId), super._execute(dd, ((kd, pd) => {
          Jd(kd, (() => {
            pd(), dd.idle && (dd.timeoutId = setTimeout((() => {
              dd.workerPromise.then((dd => {
                dd.terminate()
              }));
              const Jd = this._workerInfos.indexOf(dd); - 1 !== Jd && this._workerInfos.splice(Jd, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    Nd.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  },
  60897: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      AbstractThreeMfSerializer: () => VZ,
      BVHExporter: () => FP,
      ContentTypeFileName: () => eZ,
      DefaultXmlSerializerFormatOptions: () => hP,
      DefaultXmlSerializerNumberOptions: () => cP,
      EXT_lights_area: () => GN,
      EXT_mesh_gpu_instancing: () => Dp,
      EXT_texture_avif: () => ZP,
      EXT_texture_webp: () => pP,
      GLTF2Export: () => np,
      GLTFData: () => Cd,
      GetXmlFieldMeta: () => UP,
      GetXmlName: () => yP,
      IsQualifiedName: () => YP,
      KHR_draco_mesh_compression: () => dN,
      KHR_interactivity: () => lN,
      KHR_lights_punctual: () => gN,
      KHR_materials_anisotropy: () => BN,
      KHR_materials_clearcoat: () => FN,
      KHR_materials_coat: () => XN,
      KHR_materials_diffuse_roughness: () => yW,
      KHR_materials_diffuse_transmission: () => TN,
      KHR_materials_dispersion: () => rN,
      KHR_materials_emissive_strength: () => zN,
      KHR_materials_fuzz: () => QW,
      KHR_materials_ior: () => dW,
      KHR_materials_iridescence: () => NW,
      KHR_materials_openpbr: () => cW,
      KHR_materials_sheen: () => gW,
      KHR_materials_specular: () => RW,
      KHR_materials_transmission: () => xW,
      KHR_materials_unlit: () => aW,
      KHR_materials_volume: () => mW,
      KHR_materials_volume_scatter: () => XW,
      KHR_texture_basisu: () => AW,
      KHR_texture_transform: () => tW,
      Known3mfRelationshipTypes: () => RZ,
      KnownI3mfContentType: () => oZ,
      Matrix3d: () => BZ,
      MatrixFormatter: () => sZ,
      ModelFileName: () => LZ,
      NumberFormatter: () => tP,
      OBJExport: () => Pd,
      Object3dDirName: () => QZ,
      OpenXmlContentTypesNamespace: () => CZ,
      OpenXmlRelationshipsNamespace: () => KZ,
      RegisterEXT_lights_area: () => xN,
      RegisterEXT_mesh_gpu_instancing: () => Ep,
      RegisterEXT_texture_avif: () => CP,
      RegisterEXT_texture_webp: () => WP,
      RegisterKHR_draco_mesh_compression: () => kN,
      RegisterKHR_interactivity: () => LN,
      RegisterKHR_lights_punctual: () => KN,
      RegisterKHR_materials_anisotropy: () => iN,
      RegisterKHR_materials_clearcoat: () => mN,
      RegisterKHR_materials_coat: () => nN,
      RegisterKHR_materials_diffuse_roughness: () => TW,
      RegisterKHR_materials_diffuse_transmission: () => cN,
      RegisterKHR_materials_dispersion: () => tN,
      RegisterKHR_materials_emissive_strength: () => wN,
      RegisterKHR_materials_fuzz: () => OW,
      RegisterKHR_materials_ior: () => kW,
      RegisterKHR_materials_iridescence: () => PW,
      RegisterKHR_materials_openpbr: () => rW,
      RegisterKHR_materials_sheen: () => KW,
      RegisterKHR_materials_specular: () => GW,
      RegisterKHR_materials_transmission: () => BW,
      RegisterKHR_materials_unlit: () => FW,
      RegisterKHR_materials_volume: () => SW,
      RegisterKHR_materials_volume_scatter: () => nW,
      RegisterKHR_texture_basisu: () => JP,
      RegisterKHR_texture_transform: () => zW,
      RelationshipDirName: () => lZ,
      RelationshipFileName: () => OZ,
      ResolveFormatOptions: () => uP,
      ResolveNumberOptions: () => rP,
      STLExport: () => KP,
      ST_ObjectType: () => gZ,
      ST_Unit: () => ZZ,
      StringXmlWriter: () => pZ,
      ThreeDimModelNamespace: () => WZ,
      ThreeMf: () => zZ,
      ThreeMfBase: () => yZ,
      ThreeMfBaseMaterials: () => UZ,
      ThreeMfBuild: () => DZ,
      ThreeMfComponent: () => nZ,
      ThreeMfComponents: () => fZ,
      ThreeMfComponentsBuilder: () => cZ,
      ThreeMfContentType: () => GZ,
      ThreeMfContentTypes: () => IZ,
      ThreeMfDocument: () => qZ,
      ThreeMfDocumentBuilder: () => tZ,
      ThreeMfItem: () => TZ,
      ThreeMfMaterialBuilder: () => rZ,
      ThreeMfMesh: () => mZ,
      ThreeMfMeshBuilder: () => hZ,
      ThreeMfMeta: () => aZ,
      ThreeMfMetadataGroup: () => MZ,
      ThreeMfModel: () => iZ,
      ThreeMfModelBuilder: () => uZ,
      ThreeMfObject: () => YZ,
      ThreeMfObjectBuilder: () => EZ,
      ThreeMfRelationship: () => xZ,
      ThreeMfRelationships: () => vZ,
      ThreeMfResources: () => FZ,
      ThreeMfSerializer: () => AZ,
      ThreeMfSerializerGlobalConfiguration: () => HZ,
      ThreeMfTriangle: () => XZ,
      ThreeMfTriangles: () => jZ,
      ThreeMfVertex: () => SZ,
      ThreeMfVertices: () => bZ,
      ToQualifiedString: () => EP,
      TokenType: () => JZ,
      TriangleSetsNamespace: () => PZ,
      USDZExportAsync: () => aP,
      Utf8XmlWriterToBytes: () => NZ,
      XmlAttr: () => fP,
      XmlBuilder: () => kZ,
      XmlElem: () => nP,
      XmlIgnore: () => XP,
      XmlName: () => jP,
      XmlNameToParts: () => TP,
      XmlSerializer: () => AP,
      _ConvertToGLTFPBRMetallicRoughness: () => Mk,
      _SolveMetallic: () => ak,
      __IGLTFExporterExtension: () => Zd
    });
    var pd = kd(37245),
      Nd = kd(60859),
      Wd = kd(40278);
    class Pd {
      static OBJ(dd, Jd, kd, Pd) {
        const Zd = [];
        let gd = 1,
          Cd = 1;
        Jd && (kd || (kd = "mat"), Zd.push("mtllib " + kd + ".mtl"));
        for (let Kd = 0; Kd < dd.length; Kd++) {
          const kd = dd[Kd],
            od = kd.name || `mesh${Kd}}`;
          Zd.push(`o ${od}`);
          let ld = null;
          if (Pd) {
            const dd = kd.computeWorldMatrix(!0);
            ld = new pd.Matrix, dd.invertToRef(ld), kd.bakeTransformIntoVertices(dd)
          }
          if (Jd) {
            const dd = kd.material;
            dd && Zd.push("usemtl " + dd.id)
          }
          const Qd = kd.geometry;
          if (!Qd) {
            Nd.Tools.Warn("No geometry is present on the mesh");
            continue
          }
          const Ld = Qd.getVerticesData("position"),
            Od = Qd.getVerticesData("normal"),
            ed = Qd.getVerticesData("uv"),
            Rd = Qd.ipd();
          let Id = 0,
            Gd = 0;
          if (!Ld || !Rd) {
            Nd.Tools.Warn("There are no position vertices or indices on the mesh!");
            continue
          }
          const vd = dd[0].Wm().useRightHandedSystem ? 1 : -1;
          for (let dd = 0; dd < Ld.length; dd += 3) Zd.push("v " + Ld[dd] * vd + " " + Ld[dd + 1] + " " + Ld[dd + 2]), Id++;
          if (null != Od)
            for (let dd = 0; dd < Od.length; dd += 3) Zd.push("vn " + Od[dd] * vd + " " + Od[dd + 1] + " " + Od[dd + 2]);
          if (null != ed)
            for (let dd = 0; dd < ed.length; dd += 2) Zd.push("vt " + ed[dd] + " " + ed[dd + 1]), Gd++;
          const xd = ["", "", ""],
            qd = (kd.material || kd.Wm().defaultMaterial)._getEffectiveOrientation(kd),
            [Bd, sd] = qd === Wd.b.ClockWiseSideOrientation ? [2, 1] : [1, 2];
          for (let dd = 0; dd < Rd.length; dd += 3) {
            const Jd = [String(Rd[dd] + gd), String(Rd[dd + Bd] + gd), String(Rd[dd + sd] + gd)],
              kd = [String(Rd[dd] + Cd), String(Rd[dd + Bd] + Cd), String(Rd[dd + sd] + Cd)],
              pd = Jd,
              Nd = null != ed ? kd : xd,
              Wd = null != Od ? Jd : xd;
            Zd.push("f " + pd[0] + "/" + Nd[0] + "/" + Wd[0] + " " + pd[1] + "/" + Nd[1] + "/" + Wd[1] + " " + pd[2] + "/" + Nd[2] + "/" + Wd[2])
          }
          Pd && ld && kd.bakeTransformIntoVertices(ld), gd += Id, Cd += Gd
        }
        return Zd.join("\n")
      }
      static MTL(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
        const kd = [],
          pd = dd.material;
        kd.push("newmtl " + Jd), kd.push("  Ns " + pd.specularPower.toFixed(4)), kd.push("  Ni 1.5000"), kd.push("  d " + pd.alpha.toFixed(4)), kd.push("  Tr 0.0000"), kd.push("  Tf 1.0000 1.0000 1.0000"), kd.push("  illum 2"), kd.push("  Ka " + pd.ambientColor.r.toFixed(4) + " " + pd.ambientColor.g.toFixed(4) + " " + pd.ambientColor.b.toFixed(4)), kd.push("  Kd " + pd.diffuseColor.r.toFixed(4) + " " + pd.diffuseColor.g.toFixed(4) + " " + pd.diffuseColor.b.toFixed(4)), kd.push("  Ks " + pd.specularColor.r.toFixed(4) + " " + pd.specularColor.g.toFixed(4) + " " + pd.specularColor.b.toFixed(4)), kd.push("  Ke " + pd.emissiveColor.r.toFixed(4) + " " + pd.emissiveColor.g.toFixed(4) + " " + pd.emissiveColor.b.toFixed(4));
        pd.ambientTexture && kd.push("  map_Ka " + pd.ambientTexture.name), pd.diffuseTexture && kd.push("  map_Kd " + pd.diffuseTexture.name), pd.specularTexture && kd.push("  map_Ks " + pd.specularTexture.name), pd.bumpTexture && kd.push("  map_bump -imfchan z " + pd.bumpTexture.name), pd.opacityTexture && kd.push("  map_d " + pd.opacityTexture.name);
        return kd.join("\n")
      }
    }
    var Zd = 0,
      gd = kd(41515);
    class Cd {
      constructor() {
        this.files = {}
      }
      get glTFFiles() {
        return this.files
      }
      downloadFiles() {
        for (const dd in this.files) {
          const Jd = this.files[dd],
            kd = new Blob([Jd], {
              type: (0, gd.e)(dd)
            });
          Nd.Tools.Download(kd, dd)
        }
      }
    }
    var Kd = kd(41134),
      od = kd(41090),
      ld = kd(41599),
      Qd = kd(41095),
      Ld = kd(39791),
      Od = kd(37277),
      ed = kd(37438),
      Rd = kd(37289);
    const Id = Rd.HighestCommonFactor,
      Gd = {
        ...Rd,
        TwoPi: 2 * Math.PI,
        Sign: Math.sign,
        Log2: Math.log2,
        HCF: Id
      };
    var vd = kd(41767),
      xd = kd(41115),
      qd = kd(41561),
      Bd = kd(41566),
      sd = kd(41784);
    (0, sd.RegisterDumpTools)();
    var ad = kd(39964),
      Md = kd(39966),
      Fd = kd(38812),
      Yd = kd(40080),
      md = kd(40471),
      bd = kd(41764);
    let Sd = 0;
    const jd = (dd, Jd, kd, pd) => {
        if (!dd[kd]) {
          const Nd = dd.useDelayedTextureLoading;
          dd.useDelayedTextureLoading = !1;
          const Wd = dd._blockEntityCollection;
          dd._blockEntityCollection = !1;
          const Pd = md.c.CreateFromBase64String(Jd, pd + Sd++, dd, !0, !1, md.c.BILINEAR_SAMPLINGMODE);
          dd._blockEntityCollection = Wd;
          const Zd = dd.eL().getLoadedTexturesCache(),
            gd = Zd.indexOf(Pd.getInternalTexture()); - 1 !== gd && Zd.splice(gd, 1), Pd.isRGBD = !0, Pd.wrapU = md.c.CLAMP_ADDRESSMODE, Pd.wrapV = md.c.CLAMP_ADDRESSMODE, dd[kd] = Pd, dd.useDelayedTextureLoading = Nd, bd.d.ExpandRGBDTexture(Pd);
          const Cd = dd.eL().onContextRestoredObservable.add((() => {
            Pd.isRGBD = !0;
            const Jd = dd.onBeforeRenderObservable.add((() => {
              Pd.isReady() && (dd.onBeforeRenderObservable.remove(Jd), bd.d.ExpandRGBDTexture(Pd))
            }))
          }));
          dd.Zm.add((() => {
            dd.eL().onContextRestoredObservable.remove(Cd)
          }))
        }
        return dd[kd]
      },
      Xd = dd => jd(dd, "data:image/png;base64,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", "environmentBRDFTexture", "EnvironmentBRDFTexture"),
      fd = dd => jd(dd, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAF9UlEQVR4nGWVy64eVxGF16X27u7/HMcyuZGYAINwmTBigngBXoc34El4B0ZMGDJjFCExQUIKiRKZYBITHdvn/L1rF4P+c+yEUqmH9WmtrrWLkdB4C1/91h/9yn947D8+8CfdlBeGGAMtqwNd6K7VWAJrw9qwLtw2nDaernh6wKuHPD3S1Vs6vaPT97W9r/Wx1seKUWj7Uzz6vX79T//wF/Gbx/7rw/jsFB/39nlrX7q99LKrp5bJZXAtrqW1uJIncbNOXafBU+o0tZW28got0AJ3KACsE4OfYvmzfvDMb/+4//Td9snD9rfr9vHWnyz9361/1fpNLLde0mt5pTZ7a9pCm32SrqQTfZI3aqNXHAwvcAB4BPwnk/oMEcqX8eaz1t9cHjxs7133f5z6p2v/Ylme9eWmLbexjlhnrPBirz3WxWv30rw0L/Yi96PpDrcDcPMEfq+qvQCfsFF1blcv2js3vb2xLNd9O/XT1p8u/Vlfnvd+25bResXC6BFLj2WJpUdv7uEe0exGByPoOAC//BH+cgNqUjfkU4mOEetde+O2vf+y8br71Nva+9q/XpYXvZ97z9ardUXrra3RerQWrUU4myLk4AzYiADwJ+NRQ41i7MSNEBIcM5YR1+f21rnlXcPWtbVYW1/a7dL21mZvbK211lv01lpEtIi0MxTmFGzMAABAN6gF1CTPxI1gkXa5Z5xGPNrbfo6xB/bQubW9nXvkHtXDPfqIJd2bI+1mpZjmNK17QFuxDzhBJued8Fy0KLvcp7fpNzJuM3JE7daIWGKMqAylW0bLiHQ0e1ppTXEK8Qrwkzv8fUIua6oG553wQpRIme7lbfpBxm3GnoEMZ+wZlYGMlu6pNh1pT3nqALCEugCeAB2ohKqYk9hZd4JFS5ThDm/lB9N305nGtKfnNKZiqk23qZhySZOcYhHFewXfI54UMCBDOYlU3TMkSaYWaCtdwXu5yprOKUxrqk9FyUWXNKXiBfCNgucGboGAUBwUJzFYO3G+MCwFtdAn6K6UZZSyXCXBAUVdGCoS5IVxAcQNujAHKCiLLHJqDtWZh1GHV0Et8EYNqOABTUhglKJoyKBBgSwCBC6Ajz7Azz+GiJbwhFTkZCXnEM6EJcuHDmmlztCkBE2IkMGAAhQoSCBBvgYA0G6xN4DgLE5IU5iqZA1hJ8zDqCY2qktJHfEnZSpIk6bE++kEXwHUEBMCmBBBFzE5UzNZuyBRshlSSF0aEg6MaDHIgyFCPAqvA/YdIjTgQ3WBLNZkpWoQPnRIUljdGiIkHd9jumgeO0ESEI97cNTPJj6Z4ISOZh1JUSVLwiAs7pRp02aTypRUhwIzjvhfPCKF1wH/BTqwA5pQlnYyipgs6dDBQVncZatZaZUlsUxZYVq0jyfm8kNeBzz/Gu0ETrjABAURAoTJOVVJpDAoM3ZOc5olfmMK42CYMrRTAr6tIK6QiSA84VtIIEosslSTNYUkUxyS5aEDQ6tMmQ7YDMOmjziYx8E56oPEl8DdDgM2/BLeIJVw9CRSTClZg97ZrDl0BF6m49V0GTIZQL4CvNuxFj47w4ASmqUkAalYU+DBoIbK8hAG506aZTLonWFG0IMa1AAHXlegW9wFGuAJG97hhFkqiuCxUZyqSSWR5GCZHKxB7nSwDcZADHiACQ4eJ/Oot9+BvsaLQD2Hby9RUEEs1cUlcdKpmWKSQ2VyqAY56J0RiEEPOqHxXYv2W4yJuANWxBkBOKEGFcwyjlhMYdLJSjLJpA8FAxqMwXZRQA0wgdQ94Hcf4nqDFnQhBDcY5YJUIqSSpnxpRqone6ol+2Af7Il2MJJxnN/8lgIA8yWQUKItaBMRsGEdDIrQoYNTnGSyBqdZQSY16IEYaANOOKn/A+htXH+OdgLOiB1BBOEGCz5ejmO6JpGEeexVJTmohJNORqIlnVDyO4CvvsT2AGm0BVEHo0IMHeEooeQipzDFY5eSNcigLgwoGYlIKHF/ky9Z+xD/WrCfoQUuRCGAKBhlwIBRQvmSuykkMYHkqx7EAPK+/wdqEbWmfB0bfwAAAABJRU5ErkJggg==", "environmentFuzzBRDFTexture", "EnvironmentFuzzBRDFTexture"),
      nd = dd => jd(dd, "data:image/png;base64,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", "openPBREnvironmentBRDFTexture", "OpenPBREnvironmentBRDFTexture");
    var Ud = kd(40062),
      yd = kd(37251),
      Dd = kd(40115),
      Td = kd(40275),
      Ed = kd(40351);
    class cd extends Td.d {
      constructor() {
        super(...arguments), this.BRDF_V_HEIGHT_CORRELATED = !1, this.MS_BRDF_ENERGY_CONSERVATION = !1, this.SPHERICAL_HARMONICS = !1, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !1, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 0, this.CONDUCTOR_SPECULAR_MODEL = 0
      }
    }
    let hd = (() => {
      var dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd;
      let Kd, od, ld, Qd, Ld, Od, ed, Rd, Id, Gd = Ed.c,
        vd = [],
        xd = [],
        qd = [],
        Bd = [],
        sd = [],
        Fd = [],
        Yd = [],
        md = [],
        bd = [],
        Sd = [],
        jd = [],
        Xd = [],
        fd = [],
        nd = [],
        Ud = [],
        yd = [],
        Dd = [],
        Td = [];
      return dd = class extends Gd {
        get useEnergyConservation() {
          return (0, ad.d)(this, Jd, "f")
        }
        set useEnergyConservation(dd) {
          (0, ad.e)(this, Jd, dd, "f")
        }
        get useSmithVisibilityHeightCorrelated() {
          return (0, ad.d)(this, kd, "f")
        }
        set useSmithVisibilityHeightCorrelated(dd) {
          (0, ad.e)(this, kd, dd, "f")
        }
        get useSphericalHarmonics() {
          return (0, ad.d)(this, pd, "f")
        }
        set useSphericalHarmonics(dd) {
          (0, ad.e)(this, pd, dd, "f")
        }
        get useSpecularGlossinessInputEnergyConservation() {
          return (0, ad.d)(this, Nd, "f")
        }
        set useSpecularGlossinessInputEnergyConservation(dd) {
          (0, ad.e)(this, Nd, dd, "f")
        }
        get mixIblRadianceWithIrradiance() {
          return (0, ad.d)(this, Wd, "f")
        }
        set mixIblRadianceWithIrradiance(dd) {
          (0, ad.e)(this, Wd, dd, "f")
        }
        get useLegacySpecularEnergyConservation() {
          return (0, ad.d)(this, Pd, "f")
        }
        set useLegacySpecularEnergyConservation(dd) {
          (0, ad.e)(this, Pd, dd, "f")
        }
        get baseDiffuseModel() {
          return (0, ad.d)(this, Zd, "f")
        }
        set baseDiffuseModel(dd) {
          (0, ad.e)(this, Zd, dd, "f")
        }
        get dielectricSpecularModel() {
          return (0, ad.d)(this, gd, "f")
        }
        set dielectricSpecularModel(dd) {
          (0, ad.e)(this, gd, dd, "f")
        }
        get conductorSpecularModel() {
          return (0, ad.d)(this, Cd, "f")
        }
        set conductorSpecularModel(dd) {
          (0, ad.e)(this, Cd, dd, "f")
        }
        _markAllSubMeshesAsMiscDirty() {
          this._internalMarkAllSubMeshesAsMiscDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(Kd) {
          let od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(Kd, "PBRBRDF", 90, new cd, od), this._useEnergyConservation = dd.DEFAULT_USE_ENERGY_CONSERVATION, Jd.set(this, (0, ad.i)(this, vd, dd.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, ad.i)(this, xd), dd.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED), kd.set(this, (0, ad.i)(this, qd, dd.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED)), this._useSphericalHarmonics = ((0, ad.i)(this, Bd), dd.DEFAULT_USE_SPHERICAL_HARMONICS), pd.set(this, (0, ad.i)(this, sd, dd.DEFAULT_USE_SPHERICAL_HARMONICS)), this._useSpecularGlossinessInputEnergyConservation = ((0, ad.i)(this, Fd), dd.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION), Nd.set(this, (0, ad.i)(this, Yd, dd.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION)), this._mixIblRadianceWithIrradiance = ((0, ad.i)(this, md), dd.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE), Wd.set(this, (0, ad.i)(this, bd, dd.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE)), this._useLegacySpecularEnergyConservation = ((0, ad.i)(this, Sd), dd.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION), Pd.set(this, (0, ad.i)(this, jd, dd.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION)), this._baseDiffuseModel = ((0, ad.i)(this, Xd), dd.DEFAULT_DIFFUSE_MODEL), Zd.set(this, (0, ad.i)(this, fd, dd.DEFAULT_DIFFUSE_MODEL)), this._dielectricSpecularModel = ((0, ad.i)(this, nd), dd.DEFAULT_DIELECTRIC_SPECULAR_MODEL), gd.set(this, (0, ad.i)(this, Ud, dd.DEFAULT_DIELECTRIC_SPECULAR_MODEL)), this._conductorSpecularModel = ((0, ad.i)(this, yd), dd.DEFAULT_CONDUCTOR_SPECULAR_MODEL), Cd.set(this, (0, ad.i)(this, Dd, dd.DEFAULT_CONDUCTOR_SPECULAR_MODEL)), this._internalMarkAllSubMeshesAsMiscDirty = (0, ad.i)(this, Td), this._internalMarkAllSubMeshesAsMiscDirty = Kd._dirtyCallbacks[16], this._enable(!0)
        }
        prepareDefines(dd) {
          dd.BRDF_V_HEIGHT_CORRELATED = this._useSmithVisibilityHeightCorrelated, dd.MS_BRDF_ENERGY_CONSERVATION = this._useEnergyConservation && this._useSmithVisibilityHeightCorrelated, dd.SPHERICAL_HARMONICS = this._useSphericalHarmonics, dd.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = this._useSpecularGlossinessInputEnergyConservation, dd.MIX_IBL_RADIANCE_WITH_IRRADIANCE = this._mixIblRadianceWithIrradiance && !this._material._disableLighting, dd.LEGACY_SPECULAR_ENERGY_CONSERVATION = this._useLegacySpecularEnergyConservation, dd.BASE_DIFFUSE_MODEL = this._baseDiffuseModel, dd.DIELECTRIC_SPECULAR_MODEL = this._dielectricSpecularModel, dd.CONDUCTOR_SPECULAR_MODEL = this._conductorSpecularModel
        }
        getClassName() {
          return "PBRBRDFConfiguration"
        }
      }, Jd = new WeakMap, kd = new WeakMap, pd = new WeakMap, Nd = new WeakMap, Wd = new WeakMap, Pd = new WeakMap, Zd = new WeakMap, gd = new WeakMap, Cd = new WeakMap, (() => {
        const Jd = "function" === typeof Symbol && Symbol.metadata ? Object.create(Gd[Symbol.metadata] ?? null) : void 0;
        Kd = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsMiscDirty")], od = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsMiscDirty")], ld = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsMiscDirty")], Qd = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsMiscDirty")], Ld = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsMiscDirty")], Od = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsMiscDirty")], ed = [(0, Md.H)("baseDiffuseModel"), (0, Md.f)("_markAllSubMeshesAsMiscDirty")], Rd = [(0, Md.H)("dielectricSpecularModel"), (0, Md.f)("_markAllSubMeshesAsMiscDirty")], Id = [(0, Md.H)("conductorSpecularModel"), (0, Md.f)("_markAllSubMeshesAsMiscDirty")], (0, ad.h)(dd, null, Kd, {
          kind: "accessor",
          name: "useEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: dd => "useEnergyConservation" in dd,
            get: dd => dd.useEnergyConservation,
            set: (dd, Jd) => {
              dd.useEnergyConservation = Jd
            }
          },
          metadata: Jd
        }, vd, xd), (0, ad.h)(dd, null, od, {
          kind: "accessor",
          name: "useSmithVisibilityHeightCorrelated",
          static: !1,
          private: !1,
          access: {
            has: dd => "useSmithVisibilityHeightCorrelated" in dd,
            get: dd => dd.useSmithVisibilityHeightCorrelated,
            set: (dd, Jd) => {
              dd.useSmithVisibilityHeightCorrelated = Jd
            }
          },
          metadata: Jd
        }, qd, Bd), (0, ad.h)(dd, null, ld, {
          kind: "accessor",
          name: "useSphericalHarmonics",
          static: !1,
          private: !1,
          access: {
            has: dd => "useSphericalHarmonics" in dd,
            get: dd => dd.useSphericalHarmonics,
            set: (dd, Jd) => {
              dd.useSphericalHarmonics = Jd
            }
          },
          metadata: Jd
        }, sd, Fd), (0, ad.h)(dd, null, Qd, {
          kind: "accessor",
          name: "useSpecularGlossinessInputEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: dd => "useSpecularGlossinessInputEnergyConservation" in dd,
            get: dd => dd.useSpecularGlossinessInputEnergyConservation,
            set: (dd, Jd) => {
              dd.useSpecularGlossinessInputEnergyConservation = Jd
            }
          },
          metadata: Jd
        }, Yd, md), (0, ad.h)(dd, null, Ld, {
          kind: "accessor",
          name: "mixIblRadianceWithIrradiance",
          static: !1,
          private: !1,
          access: {
            has: dd => "mixIblRadianceWithIrradiance" in dd,
            get: dd => dd.mixIblRadianceWithIrradiance,
            set: (dd, Jd) => {
              dd.mixIblRadianceWithIrradiance = Jd
            }
          },
          metadata: Jd
        }, bd, Sd), (0, ad.h)(dd, null, Od, {
          kind: "accessor",
          name: "useLegacySpecularEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: dd => "useLegacySpecularEnergyConservation" in dd,
            get: dd => dd.useLegacySpecularEnergyConservation,
            set: (dd, Jd) => {
              dd.useLegacySpecularEnergyConservation = Jd
            }
          },
          metadata: Jd
        }, jd, Xd), (0, ad.h)(dd, null, ed, {
          kind: "accessor",
          name: "baseDiffuseModel",
          static: !1,
          private: !1,
          access: {
            has: dd => "baseDiffuseModel" in dd,
            get: dd => dd.baseDiffuseModel,
            set: (dd, Jd) => {
              dd.baseDiffuseModel = Jd
            }
          },
          metadata: Jd
        }, fd, nd), (0, ad.h)(dd, null, Rd, {
          kind: "accessor",
          name: "dielectricSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: dd => "dielectricSpecularModel" in dd,
            get: dd => dd.dielectricSpecularModel,
            set: (dd, Jd) => {
              dd.dielectricSpecularModel = Jd
            }
          },
          metadata: Jd
        }, Ud, yd), (0, ad.h)(dd, null, Id, {
          kind: "accessor",
          name: "conductorSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: dd => "conductorSpecularModel" in dd,
            get: dd => dd.conductorSpecularModel,
            set: (dd, Jd) => {
              dd.conductorSpecularModel = Jd
            }
          },
          metadata: Jd
        }, Dd, Td), Jd && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Jd
        })
      })(), dd.DEFAULT_USE_ENERGY_CONSERVATION = !0, dd.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED = !0, dd.DEFAULT_USE_SPHERICAL_HARMONICS = !0, dd.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION = !0, dd.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, dd.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION = !0, dd.DEFAULT_DIFFUSE_MODEL = 0, dd.DEFAULT_DIELECTRIC_SPECULAR_MODEL = 0, dd.DEFAULT_CONDUCTOR_SPECULAR_MODEL = 0, dd
    })();
    var rd = kd(40263),
      ud = kd(37443),
      td = kd(40266),
      Vd = kd(40083),
      zd = kd(40333),
      Hd = kd(40325),
      wd = kd(40339),
      Ad = kd(40308);
    class dJ extends Td.d {
      constructor() {
        super(...arguments), this.CLEARCOAT = !1, this.CLEARCOAT_DEFAULTIOR = !1, this.CLEARCOAT_TEXTURE = !1, this.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this.CLEARCOAT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, this.CLEARCOAT_BUMP = !1, this.CLEARCOAT_BUMPDIRECTUV = 0, this.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, this.CLEARCOAT_REMAP_F0 = !1, this.CLEARCOAT_TINT = !1, this.CLEARCOAT_TINT_TEXTURE = !1, this.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TINT_GAMMATEXTURE = !1
      }
    }
    let JJ = (() => {
      var dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd;
      let Kd, od, ld, Qd, Ld, Od, ed, Rd, Id, Gd, vd, xd, qd, Bd, sd = Ed.c,
        Fd = [],
        Yd = [],
        md = [],
        bd = [],
        Sd = [],
        jd = [],
        Xd = [],
        fd = [],
        nd = [],
        Ud = [],
        yd = [],
        Dd = [],
        Td = [],
        cd = [],
        hd = [],
        rd = [],
        td = [],
        Vd = [],
        zd = [],
        wd = [],
        JJ = [],
        kJ = [],
        pJ = [],
        NJ = [],
        WJ = [],
        PJ = [],
        ZJ = [],
        gJ = [];
      return dd = class extends sd {
        get isEnabled() {
          return (0, ad.d)(this, Jd, "f")
        }
        set isEnabled(dd) {
          (0, ad.e)(this, Jd, dd, "f")
        }
        get indexOfRefraction() {
          return (0, ad.d)(this, kd, "f")
        }
        set indexOfRefraction(dd) {
          (0, ad.e)(this, kd, dd, "f")
        }
        get texture() {
          return (0, ad.d)(this, pd, "f")
        }
        set texture(dd) {
          (0, ad.e)(this, pd, dd, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, ad.d)(this, Nd, "f")
        }
        set useRoughnessFromMainTexture(dd) {
          (0, ad.e)(this, Nd, dd, "f")
        }
        get textureRoughness() {
          return (0, ad.d)(this, Wd, "f")
        }
        set textureRoughness(dd) {
          (0, ad.e)(this, Wd, dd, "f")
        }
        get remapF0OnInterfaceChange() {
          return (0, ad.d)(this, Pd, "f")
        }
        set remapF0OnInterfaceChange(dd) {
          (0, ad.e)(this, Pd, dd, "f")
        }
        get bumpTexture() {
          return (0, ad.d)(this, Zd, "f")
        }
        set bumpTexture(dd) {
          (0, ad.e)(this, Zd, dd, "f")
        }
        get isTintEnabled() {
          return (0, ad.d)(this, gd, "f")
        }
        set isTintEnabled(dd) {
          (0, ad.e)(this, gd, dd, "f")
        }
        get tintTexture() {
          return (0, ad.d)(this, Cd, "f")
        }
        set tintTexture(dd) {
          (0, ad.e)(this, Cd, dd, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(Kd) {
          let od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(Kd, "PBRClearCoat", 100, new dJ, od), this._isEnabled = !1, Jd.set(this, (0, ad.i)(this, Fd, !1)), this.intensity = ((0, ad.i)(this, Yd), (0, ad.i)(this, md, 1)), this.roughness = ((0, ad.i)(this, bd), (0, ad.i)(this, Sd, 0)), this._indexOfRefraction = ((0, ad.i)(this, jd), dd._DefaultIndexOfRefraction), kd.set(this, (0, ad.i)(this, Xd, dd._DefaultIndexOfRefraction)), this._texture = ((0, ad.i)(this, fd), null), pd.set(this, (0, ad.i)(this, nd, null)), this._useRoughnessFromMainTexture = ((0, ad.i)(this, Ud), !0), Nd.set(this, (0, ad.i)(this, yd, !0)), this._textureRoughness = ((0, ad.i)(this, Dd), null), Wd.set(this, (0, ad.i)(this, Td, null)), this._remapF0OnInterfaceChange = ((0, ad.i)(this, cd), !0), Pd.set(this, (0, ad.i)(this, hd, !0)), this._bumpTexture = ((0, ad.i)(this, rd), null), Zd.set(this, (0, ad.i)(this, td, null)), this._isTintEnabled = ((0, ad.i)(this, Vd), !1), gd.set(this, (0, ad.i)(this, zd, !1)), this.tintColor = ((0, ad.i)(this, wd), (0, ad.i)(this, JJ, ud.c.White())), this.tintColorAtDistance = ((0, ad.i)(this, kJ), (0, ad.i)(this, pJ, 1)), this.tintThickness = ((0, ad.i)(this, NJ), (0, ad.i)(this, WJ, 1)), this._tintTexture = ((0, ad.i)(this, PJ), null), Cd.set(this, (0, ad.i)(this, ZJ, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, ad.i)(this, gJ), this._internalMarkAllSubMeshesAsTexturesDirty = Kd._dirtyCallbacks[1]
        }
        isReadyForSubMesh(dd, Jd, kd) {
          if (!this._isEnabled) return !0;
          const pd = this._material._disableBumpMap;
          if (dd._areTexturesDirty && Jd.texturesEnabled) {
            if (this._texture && Hd.e.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && Hd.e.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
            if (kd.getCaps().standardDerivatives && this._bumpTexture && Hd.e.ClearCoatBumpTextureEnabled && !pd && !this._bumpTexture.isReady()) return !1;
            if (this._isTintEnabled && this._tintTexture && Hd.e.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(Jd, kd) {
          this._isEnabled ? (Jd.CLEARCOAT = !0, Jd.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, Jd.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, Jd._areTexturesDirty && kd.texturesEnabled && (this._texture && Hd.e.ClearCoatTextureEnabled ? (0, Ad.db)(this._texture, Jd, "CLEARCOAT_TEXTURE") : Jd.CLEARCOAT_TEXTURE = !1, this._textureRoughness && Hd.e.ClearCoatTextureEnabled ? (0, Ad.db)(this._textureRoughness, Jd, "CLEARCOAT_TEXTURE_ROUGHNESS") : Jd.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this._bumpTexture && Hd.e.ClearCoatBumpTextureEnabled ? (0, Ad.db)(this._bumpTexture, Jd, "CLEARCOAT_BUMP") : Jd.CLEARCOAT_BUMP = !1, Jd.CLEARCOAT_DEFAULTIOR = this._indexOfRefraction === dd._DefaultIndexOfRefraction, this._isTintEnabled ? (Jd.CLEARCOAT_TINT = !0, this._tintTexture && Hd.e.ClearCoatTintTextureEnabled ? ((0, Ad.db)(this._tintTexture, Jd, "CLEARCOAT_TINT_TEXTURE"), Jd.CLEARCOAT_TINT_GAMMATEXTURE = this._tintTexture.gammaSpace) : Jd.CLEARCOAT_TINT_TEXTURE = !1) : (Jd.CLEARCOAT_TINT = !1, Jd.CLEARCOAT_TINT_TEXTURE = !1))) : (Jd.CLEARCOAT = !1, Jd.CLEARCOAT_TEXTURE = !1, Jd.CLEARCOAT_TEXTURE_ROUGHNESS = !1, Jd.CLEARCOAT_BUMP = !1, Jd.CLEARCOAT_TINT = !1, Jd.CLEARCOAT_TINT_TEXTURE = !1, Jd.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, Jd.CLEARCOAT_DEFAULTIOR = !1, Jd.CLEARCOAT_TEXTUREDIRECTUV = 0, Jd.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, Jd.CLEARCOAT_BUMPDIRECTUV = 0, Jd.CLEARCOAT_REMAP_F0 = !1, Jd.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, Jd.CLEARCOAT_TINT_GAMMATEXTURE = !1)
        }
        bindForSubMesh(dd, Jd, kd, pd) {
          if (!this._isEnabled) return;
          const Nd = pd.materialDefines,
            Wd = this._material.isFrozen,
            Pd = this._material._disableBumpMap,
            Zd = this._material._invertNormalMapX,
            gd = this._material._invertNormalMapY;
          if (!dd.useUbo || !Wd || !dd.isSync) {
            (this._texture || this._textureRoughness) && Hd.e.ClearCoatTextureEnabled && (dd.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, Ad.C)(this._texture, dd, "clearCoat"), this._textureRoughness && !Nd.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, Ad.C)(this._textureRoughness, dd, "clearCoatRoughness")), this._bumpTexture && kd.getCaps().standardDerivatives && Hd.e.ClearCoatTextureEnabled && !Pd && (dd.updateFloat2("vClearCoatBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level), (0, Ad.C)(this._bumpTexture, dd, "clearCoatBump"), Jd._mirroredCameraPosition ? dd.updateFloat2("vClearCoatTangentSpaceParams", Zd ? 1 : -1, gd ? 1 : -1) : dd.updateFloat2("vClearCoatTangentSpaceParams", Zd ? -1 : 1, gd ? -1 : 1)), this._tintTexture && Hd.e.ClearCoatTintTextureEnabled && (dd.updateFloat2("vClearCoatTintInfos", this._tintTexture.coordinatesIndex, this._tintTexture.level), (0, Ad.C)(this._tintTexture, dd, "clearCoatTint")), dd.updateFloat2("vClearCoatParams", this.intensity, this.roughness);
            const pd = 1 - this._indexOfRefraction,
              Wd = 1 + this._indexOfRefraction,
              Cd = Math.pow(-pd / Wd, 2),
              Kd = 1 / this._indexOfRefraction;
            dd.updateFloat4("vClearCoatRefractionParams", Cd, Kd, pd, Wd), this._isTintEnabled && (dd.updateFloat4("vClearCoatTintParams", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintThickness)), dd.updateFloat("clearCoatColorAtDistance", Math.max(1e-5, this.tintColorAtDistance)))
          }
          Jd.texturesEnabled && (this._texture && Hd.e.ClearCoatTextureEnabled && dd.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !Nd.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && Hd.e.ClearCoatTextureEnabled && dd.setTexture("clearCoatRoughnessSampler", this._textureRoughness), this._bumpTexture && kd.getCaps().standardDerivatives && Hd.e.ClearCoatBumpTextureEnabled && !Pd && dd.setTexture("clearCoatBumpSampler", this._bumpTexture), this._isTintEnabled && this._tintTexture && Hd.e.ClearCoatTintTextureEnabled && dd.setTexture("clearCoatTintSampler", this._tintTexture))
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
        addFallbacks(dd, Jd, kd) {
          return dd.CLEARCOAT_BUMP && Jd.addFallback(kd++, "CLEARCOAT_BUMP"), dd.CLEARCOAT_TINT && Jd.addFallback(kd++, "CLEARCOAT_TINT"), dd.CLEARCOAT && Jd.addFallback(kd++, "CLEARCOAT"), kd
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
      }, Jd = new WeakMap, kd = new WeakMap, pd = new WeakMap, Nd = new WeakMap, Wd = new WeakMap, Pd = new WeakMap, Zd = new WeakMap, gd = new WeakMap, Cd = new WeakMap, (() => {
        const Jd = "function" === typeof Symbol && Symbol.metadata ? Object.create(sd[Symbol.metadata] ?? null) : void 0;
        Kd = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], od = [(0, Md.H)()], ld = [(0, Md.H)()], Qd = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], Ld = [(0, Md.y)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], Od = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], ed = [(0, Md.y)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], Rd = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], Id = [(0, Md.y)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], Gd = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], vd = [(0, Md.n)()], xd = [(0, Md.H)()], qd = [(0, Md.H)()], Bd = [(0, Md.y)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], (0, ad.h)(dd, null, Kd, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: dd => "isEnabled" in dd,
            get: dd => dd.isEnabled,
            set: (dd, Jd) => {
              dd.isEnabled = Jd
            }
          },
          metadata: Jd
        }, Fd, Yd), (0, ad.h)(dd, null, Qd, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: dd => "indexOfRefraction" in dd,
            get: dd => dd.indexOfRefraction,
            set: (dd, Jd) => {
              dd.indexOfRefraction = Jd
            }
          },
          metadata: Jd
        }, Xd, fd), (0, ad.h)(dd, null, Ld, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: dd => "texture" in dd,
            get: dd => dd.texture,
            set: (dd, Jd) => {
              dd.texture = Jd
            }
          },
          metadata: Jd
        }, nd, Ud), (0, ad.h)(dd, null, Od, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "useRoughnessFromMainTexture" in dd,
            get: dd => dd.useRoughnessFromMainTexture,
            set: (dd, Jd) => {
              dd.useRoughnessFromMainTexture = Jd
            }
          },
          metadata: Jd
        }, yd, Dd), (0, ad.h)(dd, null, ed, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: dd => "textureRoughness" in dd,
            get: dd => dd.textureRoughness,
            set: (dd, Jd) => {
              dd.textureRoughness = Jd
            }
          },
          metadata: Jd
        }, Td, cd), (0, ad.h)(dd, null, Rd, {
          kind: "accessor",
          name: "remapF0OnInterfaceChange",
          static: !1,
          private: !1,
          access: {
            has: dd => "remapF0OnInterfaceChange" in dd,
            get: dd => dd.remapF0OnInterfaceChange,
            set: (dd, Jd) => {
              dd.remapF0OnInterfaceChange = Jd
            }
          },
          metadata: Jd
        }, hd, rd), (0, ad.h)(dd, null, Id, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "bumpTexture" in dd,
            get: dd => dd.bumpTexture,
            set: (dd, Jd) => {
              dd.bumpTexture = Jd
            }
          },
          metadata: Jd
        }, td, Vd), (0, ad.h)(dd, null, Gd, {
          kind: "accessor",
          name: "isTintEnabled",
          static: !1,
          private: !1,
          access: {
            has: dd => "isTintEnabled" in dd,
            get: dd => dd.isTintEnabled,
            set: (dd, Jd) => {
              dd.isTintEnabled = Jd
            }
          },
          metadata: Jd
        }, zd, wd), (0, ad.h)(dd, null, Bd, {
          kind: "accessor",
          name: "tintTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "tintTexture" in dd,
            get: dd => dd.tintTexture,
            set: (dd, Jd) => {
              dd.tintTexture = Jd
            }
          },
          metadata: Jd
        }, ZJ, gJ), (0, ad.h)(null, null, od, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: dd => "intensity" in dd,
            get: dd => dd.intensity,
            set: (dd, Jd) => {
              dd.intensity = Jd
            }
          },
          metadata: Jd
        }, md, bd), (0, ad.h)(null, null, ld, {
          kind: "field",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: dd => "roughness" in dd,
            get: dd => dd.roughness,
            set: (dd, Jd) => {
              dd.roughness = Jd
            }
          },
          metadata: Jd
        }, Sd, jd), (0, ad.h)(null, null, vd, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: dd => "tintColor" in dd,
            get: dd => dd.tintColor,
            set: (dd, Jd) => {
              dd.tintColor = Jd
            }
          },
          metadata: Jd
        }, JJ, kJ), (0, ad.h)(null, null, xd, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: dd => "tintColorAtDistance" in dd,
            get: dd => dd.tintColorAtDistance,
            set: (dd, Jd) => {
              dd.tintColorAtDistance = Jd
            }
          },
          metadata: Jd
        }, pJ, NJ), (0, ad.h)(null, null, qd, {
          kind: "field",
          name: "tintThickness",
          static: !1,
          private: !1,
          access: {
            has: dd => "tintThickness" in dd,
            get: dd => dd.tintThickness,
            set: (dd, Jd) => {
              dd.tintThickness = Jd
            }
          },
          metadata: Jd
        }, WJ, PJ), Jd && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Jd
        })
      })(), dd._DefaultIndexOfRefraction = 1.5, dd
    })();
    class kJ extends Td.d {
      constructor() {
        super(...arguments), this.IRIDESCENCE = !1, this.IRIDESCENCE_TEXTURE = !1, this.IRIDESCENCE_TEXTUREDIRECTUV = 0, this.IRIDESCENCE_THICKNESS_TEXTURE = !1, this.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0
      }
    }
    let pJ = (() => {
      var dd, Jd, kd, pd;
      let Nd, Wd, Pd, Zd, gd, Cd, Kd, od = Ed.c,
        ld = [],
        Qd = [],
        Ld = [],
        Od = [],
        ed = [],
        Rd = [],
        Id = [],
        Gd = [],
        vd = [],
        xd = [],
        qd = [],
        Bd = [],
        sd = [],
        Fd = [];
      return dd = class extends od {
        get isEnabled() {
          return (0, ad.d)(this, Jd, "f")
        }
        set isEnabled(dd) {
          (0, ad.e)(this, Jd, dd, "f")
        }
        get texture() {
          return (0, ad.d)(this, kd, "f")
        }
        set texture(dd) {
          (0, ad.e)(this, kd, dd, "f")
        }
        get thicknessTexture() {
          return (0, ad.d)(this, pd, "f")
        }
        set thicknessTexture(dd) {
          (0, ad.e)(this, pd, dd, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(Nd) {
          let Wd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(Nd, "PBRIridescence", 110, new kJ, Wd), this._isEnabled = !1, Jd.set(this, (0, ad.i)(this, ld, !1)), this.intensity = ((0, ad.i)(this, Qd), (0, ad.i)(this, Ld, 1)), this.minimumThickness = ((0, ad.i)(this, Od), (0, ad.i)(this, ed, dd._DefaultMinimumThickness)), this.maximumThickness = ((0, ad.i)(this, Rd), (0, ad.i)(this, Id, dd._DefaultMaximumThickness)), this.indexOfRefraction = ((0, ad.i)(this, Gd), (0, ad.i)(this, vd, dd._DefaultIndexOfRefraction)), this._texture = ((0, ad.i)(this, xd), null), kd.set(this, (0, ad.i)(this, qd, null)), this._thicknessTexture = ((0, ad.i)(this, Bd), null), pd.set(this, (0, ad.i)(this, sd, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, ad.i)(this, Fd), this._internalMarkAllSubMeshesAsTexturesDirty = Nd._dirtyCallbacks[1]
        }
        isReadyForSubMesh(dd, Jd) {
          if (!this._isEnabled) return !0;
          if (dd._areTexturesDirty && Jd.texturesEnabled) {
            if (this._texture && Hd.e.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._thicknessTexture && Hd.e.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(dd, Jd) {
          this._isEnabled ? (dd.IRIDESCENCE = !0, dd._areTexturesDirty && Jd.texturesEnabled && (this._texture && Hd.e.IridescenceTextureEnabled ? (0, Ad.db)(this._texture, dd, "IRIDESCENCE_TEXTURE") : dd.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && Hd.e.IridescenceTextureEnabled ? (0, Ad.db)(this._thicknessTexture, dd, "IRIDESCENCE_THICKNESS_TEXTURE") : dd.IRIDESCENCE_THICKNESS_TEXTURE = !1)) : (dd.IRIDESCENCE = !1, dd.IRIDESCENCE_TEXTURE = !1, dd.IRIDESCENCE_THICKNESS_TEXTURE = !1, dd.IRIDESCENCE_TEXTUREDIRECTUV = 0, dd.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0)
        }
        bindForSubMesh(dd, Jd) {
          if (!this._isEnabled) return;
          const kd = this._material.isFrozen;
          dd.useUbo && kd && dd.isSync || ((this._texture || this._thicknessTexture) && Hd.e.IridescenceTextureEnabled && (dd.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._thicknessTexture?.level ?? 0), this._texture && (0, Ad.C)(this._texture, dd, "iridescence"), this._thicknessTexture && (0, Ad.C)(this._thicknessTexture, dd, "iridescenceThickness")), dd.updateFloat4("vIridescenceParams", this.intensity, this.indexOfRefraction, this.minimumThickness, this.maximumThickness)), Jd.texturesEnabled && (this._texture && Hd.e.IridescenceTextureEnabled && dd.setTexture("iridescenceSampler", this._texture), this._thicknessTexture && Hd.e.IridescenceTextureEnabled && dd.setTexture("iridescenceThicknessSampler", this._thicknessTexture))
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
        addFallbacks(dd, Jd, kd) {
          return dd.IRIDESCENCE && Jd.addFallback(kd++, "IRIDESCENCE"), kd
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
      }, Jd = new WeakMap, kd = new WeakMap, pd = new WeakMap, (() => {
        const Jd = "function" === typeof Symbol && Symbol.metadata ? Object.create(od[Symbol.metadata] ?? null) : void 0;
        Nd = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], Wd = [(0, Md.H)()], Pd = [(0, Md.H)()], Zd = [(0, Md.H)()], gd = [(0, Md.H)()], Cd = [(0, Md.y)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], Kd = [(0, Md.y)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], (0, ad.h)(dd, null, Nd, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: dd => "isEnabled" in dd,
            get: dd => dd.isEnabled,
            set: (dd, Jd) => {
              dd.isEnabled = Jd
            }
          },
          metadata: Jd
        }, ld, Qd), (0, ad.h)(dd, null, Cd, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: dd => "texture" in dd,
            get: dd => dd.texture,
            set: (dd, Jd) => {
              dd.texture = Jd
            }
          },
          metadata: Jd
        }, qd, Bd), (0, ad.h)(dd, null, Kd, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "thicknessTexture" in dd,
            get: dd => dd.thicknessTexture,
            set: (dd, Jd) => {
              dd.thicknessTexture = Jd
            }
          },
          metadata: Jd
        }, sd, Fd), (0, ad.h)(null, null, Wd, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: dd => "intensity" in dd,
            get: dd => dd.intensity,
            set: (dd, Jd) => {
              dd.intensity = Jd
            }
          },
          metadata: Jd
        }, Ld, Od), (0, ad.h)(null, null, Pd, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: dd => "minimumThickness" in dd,
            get: dd => dd.minimumThickness,
            set: (dd, Jd) => {
              dd.minimumThickness = Jd
            }
          },
          metadata: Jd
        }, ed, Rd), (0, ad.h)(null, null, Zd, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: dd => "maximumThickness" in dd,
            get: dd => dd.maximumThickness,
            set: (dd, Jd) => {
              dd.maximumThickness = Jd
            }
          },
          metadata: Jd
        }, Id, Gd), (0, ad.h)(null, null, gd, {
          kind: "field",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: dd => "indexOfRefraction" in dd,
            get: dd => dd.indexOfRefraction,
            set: (dd, Jd) => {
              dd.indexOfRefraction = Jd
            }
          },
          metadata: Jd
        }, vd, xd), Jd && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Jd
        })
      })(), dd._DefaultMinimumThickness = 100, dd._DefaultMaximumThickness = 400, dd._DefaultIndexOfRefraction = 1.3, dd
    })();
    class NJ extends Td.d {
      constructor() {
        super(...arguments), this.ANISOTROPIC = !1, this.ANISOTROPIC_TEXTURE = !1, this.ANISOTROPIC_TEXTUREDIRECTUV = 0, this.ANISOTROPIC_LEGACY = !1, this.MAINUV1 = !1
      }
    }
    let WJ = (() => {
      var dd, Jd, kd, pd;
      let Nd, Wd, Pd, Zd, gd, Cd = Ed.c,
        Kd = [],
        od = [],
        ld = [],
        Qd = [],
        Ld = [],
        Od = [],
        ed = [],
        Rd = [],
        Id = [],
        Gd = [];
      return dd = class extends Cd {
        get isEnabled() {
          return (0, ad.d)(this, Jd, "f")
        }
        set isEnabled(dd) {
          (0, ad.e)(this, Jd, dd, "f")
        }
        set angle(dd) {
          this.direction.x = Math.cos(dd), this.direction.y = Math.sin(dd)
        }
        get angle() {
          return Math.atan2(this.direction.y, this.direction.x)
        }
        get texture() {
          return (0, ad.d)(this, kd, "f")
        }
        set texture(dd) {
          (0, ad.e)(this, kd, dd, "f")
        }
        get legacy() {
          return (0, ad.d)(this, pd, "f")
        }
        set legacy(dd) {
          (0, ad.e)(this, pd, dd, "f")
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
          let Nd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(dd, "PBRAnisotropic", 110, new NJ, Nd), this._isEnabled = !1, Jd.set(this, (0, ad.i)(this, Kd, !1)), this.intensity = ((0, ad.i)(this, od), (0, ad.i)(this, ld, 1)), this.direction = ((0, ad.i)(this, Qd), (0, ad.i)(this, Ld, new yd.k(1, 0))), this._texture = ((0, ad.i)(this, Od), null), kd.set(this, (0, ad.i)(this, ed, null)), this._legacy = ((0, ad.i)(this, Rd), !1), pd.set(this, (0, ad.i)(this, Id, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, ad.i)(this, Gd), this._internalMarkAllSubMeshesAsTexturesDirty = dd._dirtyCallbacks[1], this._internalMarkAllSubMeshesAsMiscDirty = dd._dirtyCallbacks[16]
        }
        isReadyForSubMesh(dd, Jd) {
          return !this._isEnabled || !(dd._areTexturesDirty && Jd.texturesEnabled && this._texture && Hd.e.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking())
        }
        prepareDefinesBeforeAttributes(dd, Jd, kd) {
          this._isEnabled ? (dd.ANISOTROPIC = this._isEnabled, this._isEnabled && !kd.isVerticesDataPresent(Dd.j.TangentKind) && (dd._needUVs = !0, dd.MAINUV1 = !0), dd._areTexturesDirty && Jd.texturesEnabled && (this._texture && Hd.e.AnisotropicTextureEnabled ? (0, Ad.db)(this._texture, dd, "ANISOTROPIC_TEXTURE") : dd.ANISOTROPIC_TEXTURE = !1), dd._areMiscDirty && (dd.ANISOTROPIC_LEGACY = this._legacy)) : (dd.ANISOTROPIC = !1, dd.ANISOTROPIC_TEXTURE = !1, dd.ANISOTROPIC_TEXTUREDIRECTUV = 0, dd.ANISOTROPIC_LEGACY = !1)
        }
        bindForSubMesh(dd, Jd) {
          if (!this._isEnabled) return;
          const kd = this._material.isFrozen;
          dd.useUbo && kd && dd.isSync || (this._texture && Hd.e.AnisotropicTextureEnabled && (dd.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, Ad.C)(this._texture, dd, "anisotropy")), dd.updateFloat3("vAnisotropy", this.direction.x, this.direction.y, this.intensity)), Jd.texturesEnabled && this._texture && Hd.e.AnisotropicTextureEnabled && dd.setTexture("anisotropySampler", this._texture)
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
        addFallbacks(dd, Jd, kd) {
          return dd.ANISOTROPIC && Jd.addFallback(kd++, "ANISOTROPIC"), kd
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
        parse(dd, Jd, kd) {
          super.parse(dd, Jd, kd), void 0 === dd.legacy && (this.legacy = !0)
        }
      }, Jd = new WeakMap, kd = new WeakMap, pd = new WeakMap, (() => {
        const Jd = "function" === typeof Symbol && Symbol.metadata ? Object.create(Cd[Symbol.metadata] ?? null) : void 0;
        Nd = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], Wd = [(0, Md.H)()], Pd = [(0, Md.B)()], Zd = [(0, Md.y)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], gd = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsMiscDirty")], (0, ad.h)(dd, null, Nd, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: dd => "isEnabled" in dd,
            get: dd => dd.isEnabled,
            set: (dd, Jd) => {
              dd.isEnabled = Jd
            }
          },
          metadata: Jd
        }, Kd, od), (0, ad.h)(dd, null, Zd, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: dd => "texture" in dd,
            get: dd => dd.texture,
            set: (dd, Jd) => {
              dd.texture = Jd
            }
          },
          metadata: Jd
        }, ed, Rd), (0, ad.h)(dd, null, gd, {
          kind: "accessor",
          name: "legacy",
          static: !1,
          private: !1,
          access: {
            has: dd => "legacy" in dd,
            get: dd => dd.legacy,
            set: (dd, Jd) => {
              dd.legacy = Jd
            }
          },
          metadata: Jd
        }, Id, Gd), (0, ad.h)(null, null, Wd, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: dd => "intensity" in dd,
            get: dd => dd.intensity,
            set: (dd, Jd) => {
              dd.intensity = Jd
            }
          },
          metadata: Jd
        }, ld, Qd), (0, ad.h)(null, null, Pd, {
          kind: "field",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: dd => "direction" in dd,
            get: dd => dd.direction,
            set: (dd, Jd) => {
              dd.direction = Jd
            }
          },
          metadata: Jd
        }, Ld, Od), Jd && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Jd
        })
      })(), dd
    })();
    class PJ extends Td.d {
      constructor() {
        super(...arguments), this.SHEEN = !1, this.SHEEN_TEXTURE = !1, this.SHEEN_GAMMATEXTURE = !1, this.SHEEN_TEXTURE_ROUGHNESS = !1, this.SHEEN_TEXTUREDIRECTUV = 0, this.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0, this.SHEEN_LINKWITHALBEDO = !1, this.SHEEN_ROUGHNESS = !1, this.SHEEN_ALBEDOSCALING = !1, this.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1
      }
    }
    let ZJ = (() => {
      var dd, Jd, kd, pd, Nd, Wd, Pd, Zd;
      let gd, Cd, Kd, od, ld, Qd, Ld, Od, ed, Rd = Ed.c,
        Id = [],
        Gd = [],
        vd = [],
        xd = [],
        qd = [],
        Bd = [],
        sd = [],
        Fd = [],
        Yd = [],
        md = [],
        bd = [],
        Sd = [],
        jd = [],
        Xd = [],
        fd = [],
        nd = [],
        Ud = [],
        yd = [];
      return dd = class extends Rd {
        get isEnabled() {
          return (0, ad.d)(this, Jd, "f")
        }
        set isEnabled(dd) {
          (0, ad.e)(this, Jd, dd, "f")
        }
        get linkSheenWithAlbedo() {
          return (0, ad.d)(this, kd, "f")
        }
        set linkSheenWithAlbedo(dd) {
          (0, ad.e)(this, kd, dd, "f")
        }
        get texture() {
          return (0, ad.d)(this, pd, "f")
        }
        set texture(dd) {
          (0, ad.e)(this, pd, dd, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, ad.d)(this, Nd, "f")
        }
        set useRoughnessFromMainTexture(dd) {
          (0, ad.e)(this, Nd, dd, "f")
        }
        get roughness() {
          return (0, ad.d)(this, Wd, "f")
        }
        set roughness(dd) {
          (0, ad.e)(this, Wd, dd, "f")
        }
        get textureRoughness() {
          return (0, ad.d)(this, Pd, "f")
        }
        set textureRoughness(dd) {
          (0, ad.e)(this, Pd, dd, "f")
        }
        get albedoScaling() {
          return (0, ad.d)(this, Zd, "f")
        }
        set albedoScaling(dd) {
          (0, ad.e)(this, Zd, dd, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(dd) {
          let gd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(dd, "Sheen", 120, new PJ, gd), this._isEnabled = !1, Jd.set(this, (0, ad.i)(this, Id, !1)), this._linkSheenWithAlbedo = ((0, ad.i)(this, Gd), !1), kd.set(this, (0, ad.i)(this, vd, !1)), this.intensity = ((0, ad.i)(this, xd), (0, ad.i)(this, qd, 1)), this.color = ((0, ad.i)(this, Bd), (0, ad.i)(this, sd, ud.c.White())), this._texture = ((0, ad.i)(this, Fd), null), pd.set(this, (0, ad.i)(this, Yd, null)), this._useRoughnessFromMainTexture = ((0, ad.i)(this, md), !0), Nd.set(this, (0, ad.i)(this, bd, !0)), this._roughness = ((0, ad.i)(this, Sd), null), Wd.set(this, (0, ad.i)(this, jd, null)), this._textureRoughness = ((0, ad.i)(this, Xd), null), Pd.set(this, (0, ad.i)(this, fd, null)), this._albedoScaling = ((0, ad.i)(this, nd), !1), Zd.set(this, (0, ad.i)(this, Ud, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, ad.i)(this, yd), this._internalMarkAllSubMeshesAsTexturesDirty = dd._dirtyCallbacks[1]
        }
        isReadyForSubMesh(dd, Jd) {
          if (!this._isEnabled) return !0;
          if (dd._areTexturesDirty && Jd.texturesEnabled) {
            if (this._texture && Hd.e.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && Hd.e.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(dd, Jd) {
          this._isEnabled ? (dd.SHEEN = !0, dd.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, dd.SHEEN_ROUGHNESS = null !== this._roughness, dd.SHEEN_ALBEDOSCALING = this._albedoScaling, dd.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, dd._areTexturesDirty && Jd.texturesEnabled && (this._texture && Hd.e.SheenTextureEnabled ? ((0, Ad.db)(this._texture, dd, "SHEEN_TEXTURE"), dd.SHEEN_GAMMATEXTURE = this._texture.gammaSpace) : dd.SHEEN_TEXTURE = !1, this._textureRoughness && Hd.e.SheenTextureEnabled ? (0, Ad.db)(this._textureRoughness, dd, "SHEEN_TEXTURE_ROUGHNESS") : dd.SHEEN_TEXTURE_ROUGHNESS = !1)) : (dd.SHEEN = !1, dd.SHEEN_TEXTURE = !1, dd.SHEEN_TEXTURE_ROUGHNESS = !1, dd.SHEEN_LINKWITHALBEDO = !1, dd.SHEEN_ROUGHNESS = !1, dd.SHEEN_ALBEDOSCALING = !1, dd.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, dd.SHEEN_GAMMATEXTURE = !1, dd.SHEEN_TEXTUREDIRECTUV = 0, dd.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0)
        }
        bindForSubMesh(dd, Jd, kd, pd) {
          if (!this._isEnabled) return;
          const Nd = pd.materialDefines,
            Wd = this._material.isFrozen;
          dd.useUbo && Wd && dd.isSync || ((this._texture || this._textureRoughness) && Hd.e.SheenTextureEnabled && (dd.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, Ad.C)(this._texture, dd, "sheen"), this._textureRoughness && !Nd.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, Ad.C)(this._textureRoughness, dd, "sheenRoughness")), dd.updateFloat4("vSheenColor", this.color.r, this.color.g, this.color.b, this.intensity), null !== this._roughness && dd.updateFloat("vSheenRoughness", this._roughness)), Jd.texturesEnabled && (this._texture && Hd.e.SheenTextureEnabled && dd.setTexture("sheenSampler", this._texture), this._textureRoughness && !Nd.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && Hd.e.SheenTextureEnabled && dd.setTexture("sheenRoughnessSampler", this._textureRoughness))
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
        addFallbacks(dd, Jd, kd) {
          return dd.SHEEN && Jd.addFallback(kd++, "SHEEN"), kd
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
      }, Jd = new WeakMap, kd = new WeakMap, pd = new WeakMap, Nd = new WeakMap, Wd = new WeakMap, Pd = new WeakMap, Zd = new WeakMap, (() => {
        const Jd = "function" === typeof Symbol && Symbol.metadata ? Object.create(Rd[Symbol.metadata] ?? null) : void 0;
        gd = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], Cd = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], Kd = [(0, Md.H)()], od = [(0, Md.n)()], ld = [(0, Md.y)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], Qd = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], Ld = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], Od = [(0, Md.y)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], ed = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], (0, ad.h)(dd, null, gd, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: dd => "isEnabled" in dd,
            get: dd => dd.isEnabled,
            set: (dd, Jd) => {
              dd.isEnabled = Jd
            }
          },
          metadata: Jd
        }, Id, Gd), (0, ad.h)(dd, null, Cd, {
          kind: "accessor",
          name: "linkSheenWithAlbedo",
          static: !1,
          private: !1,
          access: {
            has: dd => "linkSheenWithAlbedo" in dd,
            get: dd => dd.linkSheenWithAlbedo,
            set: (dd, Jd) => {
              dd.linkSheenWithAlbedo = Jd
            }
          },
          metadata: Jd
        }, vd, xd), (0, ad.h)(dd, null, ld, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: dd => "texture" in dd,
            get: dd => dd.texture,
            set: (dd, Jd) => {
              dd.texture = Jd
            }
          },
          metadata: Jd
        }, Yd, md), (0, ad.h)(dd, null, Qd, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "useRoughnessFromMainTexture" in dd,
            get: dd => dd.useRoughnessFromMainTexture,
            set: (dd, Jd) => {
              dd.useRoughnessFromMainTexture = Jd
            }
          },
          metadata: Jd
        }, bd, Sd), (0, ad.h)(dd, null, Ld, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: dd => "roughness" in dd,
            get: dd => dd.roughness,
            set: (dd, Jd) => {
              dd.roughness = Jd
            }
          },
          metadata: Jd
        }, jd, Xd), (0, ad.h)(dd, null, Od, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: dd => "textureRoughness" in dd,
            get: dd => dd.textureRoughness,
            set: (dd, Jd) => {
              dd.textureRoughness = Jd
            }
          },
          metadata: Jd
        }, fd, nd), (0, ad.h)(dd, null, ed, {
          kind: "accessor",
          name: "albedoScaling",
          static: !1,
          private: !1,
          access: {
            has: dd => "albedoScaling" in dd,
            get: dd => dd.albedoScaling,
            set: (dd, Jd) => {
              dd.albedoScaling = Jd
            }
          },
          metadata: Jd
        }, Ud, yd), (0, ad.h)(null, null, Kd, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: dd => "intensity" in dd,
            get: dd => dd.intensity,
            set: (dd, Jd) => {
              dd.intensity = Jd
            }
          },
          metadata: Jd
        }, qd, Bd), (0, ad.h)(null, null, od, {
          kind: "field",
          name: "color",
          static: !1,
          private: !1,
          access: {
            has: dd => "color" in dd,
            get: dd => dd.color,
            set: (dd, Jd) => {
              dd.color = Jd
            }
          },
          metadata: Jd
        }, sd, Fd), Jd && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Jd
        })
      })(), dd
    })();
    class gJ extends Td.d {
      constructor() {
        super(...arguments), this.SUBSURFACE = !1, this.SS_REFRACTION = !1, this.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_TRANSLUCENCY = !1, this.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_SCATTERING = !1, this.SS_DISPERSION = !1, this.SS_THICKNESSANDMASK_TEXTURE = !1, this.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, this.SS_HAS_THICKNESS = !1, this.SS_REFRACTIONINTENSITY_TEXTURE = !1, this.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, this.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, this.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, this.SS_REFRACTIONMAP_3D = !1, this.SS_REFRACTIONMAP_OPPOSITEZ = !1, this.SS_LODINREFRACTIONALPHA = !1, this.SS_GAMMAREFRACTION = !1, this.SS_RGBDREFRACTION = !1, this.SS_LINEARSPECULARREFRACTION = !1, this.SS_LINKREFRACTIONTOTRANSPARENCY = !1, this.SS_ALBEDOFORREFRACTIONTINT = !1, this.SS_ALBEDOFORTRANSLUCENCYTINT = !1, this.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.SS_USE_THICKNESS_AS_DEPTH = !1, this.SS_USE_GLTF_TEXTURES = !1, this.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1, this.SS_TRANSLUCENCY_LEGACY = !1
      }
    }
    let CJ = (() => {
      var dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd, Kd, od, ld, Qd, Ld, Od, ed;
      let Rd, Id, Gd, vd, xd, qd, Bd, sd, Fd, Yd, md, bd, Sd, jd, Xd, fd, nd, Ud, Dd, Td, cd, hd, rd, td, Vd, zd, wd, dJ, JJ, kJ, pJ = Ed.c,
        NJ = [],
        WJ = [],
        PJ = [],
        ZJ = [],
        CJ = [],
        KJ = [],
        oJ = [],
        lJ = [],
        QJ = [],
        LJ = [],
        OJ = [],
        eJ = [],
        RJ = [],
        IJ = [],
        GJ = [],
        vJ = [],
        xJ = [],
        qJ = [],
        BJ = [],
        sJ = [],
        iJ = [],
        aJ = [],
        MJ = [],
        FJ = [],
        YJ = [],
        mJ = [],
        bJ = [],
        SJ = [],
        jJ = [],
        XJ = [],
        fJ = [],
        nJ = [],
        UJ = [],
        yJ = [],
        DJ = [],
        TJ = [],
        EJ = [],
        cJ = [],
        hJ = [],
        rJ = [],
        uJ = [],
        tJ = [],
        VJ = [],
        zJ = [],
        HJ = [],
        wJ = [],
        AJ = [],
        dk = [],
        Jk = [],
        kk = [],
        pk = [],
        Nk = [],
        Wk = [],
        Pk = [],
        Zk = [],
        gk = [],
        Ck = [],
        Kk = [],
        lk = [],
        Qk = [];
      return dd = class extends pJ {
        get isRefractionEnabled() {
          return (0, ad.d)(this, Jd, "f")
        }
        set isRefractionEnabled(dd) {
          (0, ad.e)(this, Jd, dd, "f")
        }
        get isTranslucencyEnabled() {
          return (0, ad.d)(this, kd, "f")
        }
        set isTranslucencyEnabled(dd) {
          (0, ad.e)(this, kd, dd, "f")
        }
        get isDispersionEnabled() {
          return (0, ad.d)(this, pd, "f")
        }
        set isDispersionEnabled(dd) {
          (0, ad.e)(this, pd, dd, "f")
        }
        get isScatteringEnabled() {
          return (0, ad.d)(this, Nd, "f")
        }
        set isScatteringEnabled(dd) {
          (0, ad.e)(this, Nd, dd, "f")
        }
        get scatteringDiffusionProfile() {
          return this._scene.subSurfaceConfiguration ? this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex] : null
        }
        set scatteringDiffusionProfile(dd) {
          this._scene.enableSubSurfaceForPrePass() && dd && (this._scatteringDiffusionProfileIndex = this._scene.subSurfaceConfiguration.addDiffusionProfile(dd))
        }
        get useAlbedoToTintRefraction() {
          return (0, ad.d)(this, Wd, "f")
        }
        set useAlbedoToTintRefraction(dd) {
          (0, ad.e)(this, Wd, dd, "f")
        }
        get useAlbedoToTintTranslucency() {
          return (0, ad.d)(this, Pd, "f")
        }
        set useAlbedoToTintTranslucency(dd) {
          (0, ad.e)(this, Pd, dd, "f")
        }
        get thicknessTexture() {
          return (0, ad.d)(this, Zd, "f")
        }
        set thicknessTexture(dd) {
          (0, ad.e)(this, Zd, dd, "f")
        }
        get refractionTexture() {
          return (0, ad.d)(this, gd, "f")
        }
        set refractionTexture(dd) {
          (0, ad.e)(this, gd, dd, "f")
        }
        get indexOfRefraction() {
          return (0, ad.d)(this, Cd, "f")
        }
        set indexOfRefraction(dd) {
          (0, ad.e)(this, Cd, dd, "f")
        }
        get volumeIndexOfRefraction() {
          return this._volumeIndexOfRefraction >= 1 ? this._volumeIndexOfRefraction : this._indexOfRefraction
        }
        set volumeIndexOfRefraction(dd) {
          const Jd = dd >= 1 ? dd : -1;
          this._volumeIndexOfRefraction !== Jd && (this._volumeIndexOfRefraction = Jd, this._markAllSubMeshesAsTexturesDirty())
        }
        get invertRefractionY() {
          return (0, ad.d)(this, Kd, "f")
        }
        set invertRefractionY(dd) {
          (0, ad.e)(this, Kd, dd, "f")
        }
        get linkRefractionWithTransparency() {
          return (0, ad.d)(this, od, "f")
        }
        set linkRefractionWithTransparency(dd) {
          (0, ad.e)(this, od, dd, "f")
        }
        get useMaskFromThicknessTexture() {
          return (0, ad.d)(this, ld, "f")
        }
        set useMaskFromThicknessTexture(dd) {
          (0, ad.e)(this, ld, dd, "f")
        }
        get refractionIntensityTexture() {
          return (0, ad.d)(this, Qd, "f")
        }
        set refractionIntensityTexture(dd) {
          (0, ad.e)(this, Qd, dd, "f")
        }
        get translucencyIntensityTexture() {
          return (0, ad.d)(this, Ld, "f")
        }
        set translucencyIntensityTexture(dd) {
          (0, ad.e)(this, Ld, dd, "f")
        }
        get translucencyColorTexture() {
          return (0, ad.d)(this, Od, "f")
        }
        set translucencyColorTexture(dd) {
          (0, ad.e)(this, Od, dd, "f")
        }
        get useGltfStyleTextures() {
          return (0, ad.d)(this, ed, "f")
        }
        set useGltfStyleTextures(dd) {
          (0, ad.e)(this, ed, dd, "f")
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
        constructor(Rd) {
          let Id = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(Rd, "PBRSubSurface", 130, new gJ, Id), this._isRefractionEnabled = !1, Jd.set(this, (0, ad.i)(this, NJ, !1)), this._isTranslucencyEnabled = ((0, ad.i)(this, WJ), !1), kd.set(this, (0, ad.i)(this, PJ, !1)), this._isDispersionEnabled = ((0, ad.i)(this, ZJ), !1), pd.set(this, (0, ad.i)(this, CJ, !1)), this._isScatteringEnabled = ((0, ad.i)(this, KJ), !1), Nd.set(this, (0, ad.i)(this, oJ, !1)), this._scatteringDiffusionProfileIndex = ((0, ad.i)(this, lJ), (0, ad.i)(this, QJ, 0)), this.refractionIntensity = ((0, ad.i)(this, LJ), (0, ad.i)(this, OJ, 1)), this.translucencyIntensity = ((0, ad.i)(this, eJ), (0, ad.i)(this, RJ, 1)), this._useAlbedoToTintRefraction = ((0, ad.i)(this, IJ), !1), Wd.set(this, (0, ad.i)(this, GJ, !1)), this._useAlbedoToTintTranslucency = ((0, ad.i)(this, vJ), !1), Pd.set(this, (0, ad.i)(this, xJ, !1)), this._thicknessTexture = ((0, ad.i)(this, qJ), null), Zd.set(this, (0, ad.i)(this, BJ, null)), this._refractionTexture = ((0, ad.i)(this, sJ), null), gd.set(this, (0, ad.i)(this, iJ, null)), this._indexOfRefraction = ((0, ad.i)(this, aJ), 1.5), Cd.set(this, (0, ad.i)(this, MJ, 1.5)), this._volumeIndexOfRefraction = ((0, ad.i)(this, FJ), (0, ad.i)(this, YJ, -1)), this._invertRefractionY = ((0, ad.i)(this, mJ), !1), Kd.set(this, (0, ad.i)(this, bJ, !1)), this._linkRefractionWithTransparency = ((0, ad.i)(this, SJ), !1), od.set(this, (0, ad.i)(this, jJ, !1)), this.minimumThickness = ((0, ad.i)(this, XJ), (0, ad.i)(this, fJ, 0)), this.maximumThickness = ((0, ad.i)(this, nJ), (0, ad.i)(this, UJ, 1)), this.useThicknessAsDepth = ((0, ad.i)(this, yJ), (0, ad.i)(this, DJ, !1)), this.tintColor = ((0, ad.i)(this, TJ), (0, ad.i)(this, EJ, ud.c.White())), this.tintColorAtDistance = ((0, ad.i)(this, cJ), (0, ad.i)(this, hJ, 1)), this.dispersion = ((0, ad.i)(this, rJ), (0, ad.i)(this, uJ, 0)), this.diffusionDistance = ((0, ad.i)(this, tJ), (0, ad.i)(this, VJ, ud.c.White())), this._useMaskFromThicknessTexture = ((0, ad.i)(this, zJ), !1), ld.set(this, (0, ad.i)(this, HJ, !1)), this._refractionIntensityTexture = ((0, ad.i)(this, wJ), null), Qd.set(this, (0, ad.i)(this, AJ, null)), this._translucencyIntensityTexture = ((0, ad.i)(this, dk), null), Ld.set(this, (0, ad.i)(this, Jk, null)), this.translucencyColor = ((0, ad.i)(this, kk), (0, ad.i)(this, pk, null)), this._translucencyColorTexture = ((0, ad.i)(this, Nk), null), Od.set(this, (0, ad.i)(this, Wk, null)), this._useGltfStyleTextures = ((0, ad.i)(this, Pk), !0), ed.set(this, (0, ad.i)(this, Zk, !0)), this.applyAlbedoAfterSubSurface = ((0, ad.i)(this, gk), (0, ad.i)(this, Ck, dd.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE)), this.legacyTranslucency = ((0, ad.i)(this, Kk), (0, ad.i)(this, lk, dd.DEFAULT_LEGACY_TRANSLUCENCY)), this._scene = (0, ad.i)(this, Qk), this._scene = Rd.Wm(), this.registerForExtraEvents = !0, this._internalMarkAllSubMeshesAsTexturesDirty = Rd._dirtyCallbacks[1], this._internalMarkScenePrePassDirty = Rd._dirtyCallbacks[32]
        }
        isReadyForSubMesh(dd, Jd) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return !0;
          if (dd._areTexturesDirty && Jd.texturesEnabled) {
            if (this._thicknessTexture && Hd.e.ThicknessTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1;
            if (this._refractionIntensityTexture && Hd.e.RefractionIntensityTextureEnabled && !this._refractionIntensityTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyColorTexture && Hd.e.TranslucencyColorTextureEnabled && !this._translucencyColorTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyIntensityTexture && Hd.e.TranslucencyIntensityTextureEnabled && !this._translucencyIntensityTexture.isReadyOrNotBlocking()) return !1;
            const dd = this._getRefractionTexture(Jd);
            if (dd && Hd.e.RefractionTextureEnabled && !dd.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(dd, Jd) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return dd.SUBSURFACE = !1, dd.SS_DISPERSION = !1, dd.SS_TRANSLUCENCY = !1, dd.SS_SCATTERING = !1, dd.SS_REFRACTION = !1, dd.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, dd.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, dd.SS_THICKNESSANDMASK_TEXTURE = !1, dd.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, dd.SS_HAS_THICKNESS = !1, dd.SS_REFRACTIONINTENSITY_TEXTURE = !1, dd.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, dd.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, dd.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, dd.SS_REFRACTIONMAP_3D = !1, dd.SS_REFRACTIONMAP_OPPOSITEZ = !1, dd.SS_LODINREFRACTIONALPHA = !1, dd.SS_GAMMAREFRACTION = !1, dd.SS_RGBDREFRACTION = !1, dd.SS_LINEARSPECULARREFRACTION = !1, dd.SS_LINKREFRACTIONTOTRANSPARENCY = !1, dd.SS_ALBEDOFORREFRACTIONTINT = !1, dd.SS_ALBEDOFORTRANSLUCENCYTINT = !1, dd.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, dd.SS_USE_THICKNESS_AS_DEPTH = !1, dd.SS_USE_GLTF_TEXTURES = !1, dd.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, dd.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, dd.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, void(dd.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1);
          if (dd._areTexturesDirty) {
            if (dd.SUBSURFACE = !0, dd.SS_DISPERSION = this._isDispersionEnabled, dd.SS_TRANSLUCENCY = this._isTranslucencyEnabled, dd.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, dd.SS_TRANSLUCENCY_LEGACY = this.legacyTranslucency, dd.SS_SCATTERING = this._isScatteringEnabled, dd.SS_THICKNESSANDMASK_TEXTURE = !1, dd.SS_REFRACTIONINTENSITY_TEXTURE = !1, dd.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, dd.SS_HAS_THICKNESS = !1, dd.SS_USE_GLTF_TEXTURES = !1, dd.SS_REFRACTION = !1, dd.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, dd.SS_REFRACTIONMAP_3D = !1, dd.SS_GAMMAREFRACTION = !1, dd.SS_RGBDREFRACTION = !1, dd.SS_LINEARSPECULARREFRACTION = !1, dd.SS_REFRACTIONMAP_OPPOSITEZ = !1, dd.SS_LODINREFRACTIONALPHA = !1, dd.SS_LINKREFRACTIONTOTRANSPARENCY = !1, dd.SS_ALBEDOFORREFRACTIONTINT = !1, dd.SS_ALBEDOFORTRANSLUCENCYTINT = !1, dd.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, dd.SS_USE_THICKNESS_AS_DEPTH = !1, dd.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, dd.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = this.applyAlbedoAfterSubSurface, dd._areTexturesDirty && Jd.texturesEnabled && (this._thicknessTexture && Hd.e.ThicknessTextureEnabled && (0, Ad.db)(this._thicknessTexture, dd, "SS_THICKNESSANDMASK_TEXTURE"), this._refractionIntensityTexture && Hd.e.RefractionIntensityTextureEnabled && (0, Ad.db)(this._refractionIntensityTexture, dd, "SS_REFRACTIONINTENSITY_TEXTURE"), this._translucencyIntensityTexture && Hd.e.TranslucencyIntensityTextureEnabled && (0, Ad.db)(this._translucencyIntensityTexture, dd, "SS_TRANSLUCENCYINTENSITY_TEXTURE"), this._translucencyColorTexture && Hd.e.TranslucencyColorTextureEnabled && ((0, Ad.db)(this._translucencyColorTexture, dd, "SS_TRANSLUCENCYCOLOR_TEXTURE"), dd.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = this._translucencyColorTexture.gammaSpace)), dd.SS_HAS_THICKNESS = this.maximumThickness - this.minimumThickness !== 0, dd.SS_USE_GLTF_TEXTURES = this._useGltfStyleTextures, dd.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._refractionIntensityTexture, dd.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._translucencyIntensityTexture, this._isRefractionEnabled && Jd.texturesEnabled) {
              const kd = this._getRefractionTexture(Jd);
              kd && Hd.e.RefractionTextureEnabled && (dd.SS_REFRACTION = !0, dd.SS_REFRACTIONMAP_3D = kd.isCube, dd.SS_GAMMAREFRACTION = kd.gammaSpace, dd.SS_RGBDREFRACTION = kd.isRGBD, dd.SS_LINEARSPECULARREFRACTION = kd.linearSpecularLOD, dd.SS_REFRACTIONMAP_OPPOSITEZ = this._scene.useRightHandedSystem && kd.isCube ? !kd.invertZ : kd.invertZ, dd.SS_LODINREFRACTIONALPHA = kd.lodLevelInAlpha, dd.SS_LINKREFRACTIONTOTRANSPARENCY = this._linkRefractionWithTransparency, dd.SS_ALBEDOFORREFRACTIONTINT = this._useAlbedoToTintRefraction, dd.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = kd.isCube && kd.boundingBoxSize, dd.SS_USE_THICKNESS_AS_DEPTH = this.useThicknessAsDepth)
            }
            this._isTranslucencyEnabled && (dd.SS_ALBEDOFORTRANSLUCENCYTINT = this._useAlbedoToTintTranslucency)
          }
        }
        hardBindForSubMesh(dd, Jd, kd, pd) {
          if (this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled)
            if (0 === this.maximumThickness && 0 === this.minimumThickness) dd.updateFloat2("vThicknessParam", 0, 0);
            else {
              pd.getRenderingMesh().getWorldMatrix().decompose(yd.h.IL[0]);
              const Jd = Math.max(Math.abs(yd.h.IL[0].x), Math.abs(yd.h.IL[0].y), Math.abs(yd.h.IL[0].z));
              dd.updateFloat2("vThicknessParam", this.minimumThickness * Jd, (this.maximumThickness - this.minimumThickness) * Jd)
            }
        }
        bindForSubMesh(dd, Jd, kd, pd) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return;
          const Nd = pd.materialDefines,
            Wd = this._material.isFrozen,
            Pd = this._material.realTimeFiltering,
            Zd = Nd.LODBASEDMICROSFURACE,
            gd = this._getRefractionTexture(Jd);
          if (!dd.useUbo || !Wd || !dd.isSync) {
            if (this._thicknessTexture && Hd.e.ThicknessTextureEnabled && (dd.updateFloat2("vThicknessInfos", this._thicknessTexture.coordinatesIndex, this._thicknessTexture.level), (0, Ad.C)(this._thicknessTexture, dd, "thickness")), this._refractionIntensityTexture && Hd.e.RefractionIntensityTextureEnabled && Nd.SS_REFRACTIONINTENSITY_TEXTURE && (dd.updateFloat2("vRefractionIntensityInfos", this._refractionIntensityTexture.coordinatesIndex, this._refractionIntensityTexture.level), (0, Ad.C)(this._refractionIntensityTexture, dd, "refractionIntensity")), this._translucencyColorTexture && Hd.e.TranslucencyColorTextureEnabled && Nd.SS_TRANSLUCENCYCOLOR_TEXTURE && (dd.updateFloat2("vTranslucencyColorInfos", this._translucencyColorTexture.coordinatesIndex, this._translucencyColorTexture.level), (0, Ad.C)(this._translucencyColorTexture, dd, "translucencyColor")), this._translucencyIntensityTexture && Hd.e.TranslucencyIntensityTextureEnabled && Nd.SS_TRANSLUCENCYINTENSITY_TEXTURE && (dd.updateFloat2("vTranslucencyIntensityInfos", this._translucencyIntensityTexture.coordinatesIndex, this._translucencyIntensityTexture.level), (0, Ad.C)(this._translucencyIntensityTexture, dd, "translucencyIntensity")), gd && Hd.e.RefractionTextureEnabled) {
              dd.o3("refractionMatrix", gd.getRefractionTextureMatrix());
              let Jd = 1;
              gd.isCube || gd.depth && (Jd = gd.depth);
              const kd = gd.getSize().width,
                pd = this.volumeIndexOfRefraction;
              if (dd.updateFloat4("vRefractionInfos", gd.level, 1 / pd, Jd, this._invertRefractionY ? -1 : 1), dd.updateFloat4("vRefractionMicrosurfaceInfos", kd, gd.lodGenerationScale, gd.lodGenerationOffset, 1 / this.indexOfRefraction), Pd && dd.updateFloat2("vRefractionFilteringInfo", kd, Math.log2(kd)), gd.boundingBoxSize) {
                const Jd = gd;
                dd.updateVector3("vRefractionPosition", Jd.boundingBoxPosition), dd.updateVector3("vRefractionSize", Jd.boundingBoxSize)
              }
            }
            this._isScatteringEnabled && dd.updateFloat("scatteringDiffusionProfile", this._scatteringDiffusionProfileIndex), dd.updateColor3("vDiffusionDistance", this.diffusionDistance), dd.updateFloat4("vTintColor", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintColorAtDistance)), dd.updateColor4("vTranslucencyColor", this.translucencyColor ?? this.tintColor, 0), dd.updateFloat3("vSubSurfaceIntensity", this.refractionIntensity, this.translucencyIntensity, 0), dd.updateFloat("dispersion", this.dispersion)
          }
          Jd.texturesEnabled && (this._thicknessTexture && Hd.e.ThicknessTextureEnabled && dd.setTexture("thicknessSampler", this._thicknessTexture), this._refractionIntensityTexture && Hd.e.RefractionIntensityTextureEnabled && Nd.SS_REFRACTIONINTENSITY_TEXTURE && dd.setTexture("refractionIntensitySampler", this._refractionIntensityTexture), this._translucencyIntensityTexture && Hd.e.TranslucencyIntensityTextureEnabled && Nd.SS_TRANSLUCENCYINTENSITY_TEXTURE && dd.setTexture("translucencyIntensitySampler", this._translucencyIntensityTexture), this._translucencyColorTexture && Hd.e.TranslucencyColorTextureEnabled && Nd.SS_TRANSLUCENCYCOLOR_TEXTURE && dd.setTexture("translucencyColorSampler", this._translucencyColorTexture), gd && Hd.e.RefractionTextureEnabled && (Zd ? dd.setTexture("refractionSampler", gd) : (dd.setTexture("refractionSampler", gd._lodTextureMid || gd), dd.setTexture("refractionSamplerLow", gd._lodTextureLow || gd), dd.setTexture("refractionSamplerHigh", gd._lodTextureHigh || gd))))
        }
        _getRefractionTexture(dd) {
          return this._refractionTexture ? this._refractionTexture : this._isRefractionEnabled ? dd.environmentTexture : null
        }
        get disableAlphaBlending() {
          return this._isRefractionEnabled && this._linkRefractionWithTransparency
        }
        fillRenderTargetTextures(dd) {
          Hd.e.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && dd.push(this._refractionTexture)
        }
        hasTexture(dd) {
          return this._thicknessTexture === dd || (this._refractionTexture === dd || (this._refractionIntensityTexture === dd || (this._translucencyIntensityTexture === dd || this._translucencyColorTexture === dd)))
        }
        hasRenderTargetTextures() {
          return !!(Hd.e.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget)
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
        addFallbacks(dd, Jd, kd) {
          return dd.SS_SCATTERING && Jd.addFallback(kd++, "SS_SCATTERING"), dd.SS_TRANSLUCENCY && Jd.addFallback(kd++, "SS_TRANSLUCENCY"), kd
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
      }, Jd = new WeakMap, kd = new WeakMap, pd = new WeakMap, Nd = new WeakMap, Wd = new WeakMap, Pd = new WeakMap, Zd = new WeakMap, gd = new WeakMap, Cd = new WeakMap, Kd = new WeakMap, od = new WeakMap, ld = new WeakMap, Qd = new WeakMap, Ld = new WeakMap, Od = new WeakMap, ed = new WeakMap, (() => {
        const Jd = "function" === typeof Symbol && Symbol.metadata ? Object.create(pJ[Symbol.metadata] ?? null) : void 0;
        Rd = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], Id = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], Gd = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], vd = [(0, Md.H)(), (0, Md.f)("_markScenePrePassDirty")], xd = [(0, Md.H)()], qd = [(0, Md.H)()], Bd = [(0, Md.H)()], sd = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], Fd = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], Yd = [(0, Md.y)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], md = [(0, Md.y)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], bd = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], Sd = [(0, Md.H)()], jd = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], Xd = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], fd = [(0, Md.H)()], nd = [(0, Md.H)()], Ud = [(0, Md.H)()], Dd = [(0, Md.n)()], Td = [(0, Md.H)()], cd = [(0, Md.H)()], hd = [(0, Md.n)()], rd = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], td = [(0, Md.y)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], Vd = [(0, Md.y)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], zd = [(0, Md.n)()], wd = [(0, Md.y)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], dJ = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], JJ = [(0, Md.H)()], kJ = [(0, Md.H)()], (0, ad.h)(dd, null, Rd, {
          kind: "accessor",
          name: "isRefractionEnabled",
          static: !1,
          private: !1,
          access: {
            has: dd => "isRefractionEnabled" in dd,
            get: dd => dd.isRefractionEnabled,
            set: (dd, Jd) => {
              dd.isRefractionEnabled = Jd
            }
          },
          metadata: Jd
        }, NJ, WJ), (0, ad.h)(dd, null, Id, {
          kind: "accessor",
          name: "isTranslucencyEnabled",
          static: !1,
          private: !1,
          access: {
            has: dd => "isTranslucencyEnabled" in dd,
            get: dd => dd.isTranslucencyEnabled,
            set: (dd, Jd) => {
              dd.isTranslucencyEnabled = Jd
            }
          },
          metadata: Jd
        }, PJ, ZJ), (0, ad.h)(dd, null, Gd, {
          kind: "accessor",
          name: "isDispersionEnabled",
          static: !1,
          private: !1,
          access: {
            has: dd => "isDispersionEnabled" in dd,
            get: dd => dd.isDispersionEnabled,
            set: (dd, Jd) => {
              dd.isDispersionEnabled = Jd
            }
          },
          metadata: Jd
        }, CJ, KJ), (0, ad.h)(dd, null, vd, {
          kind: "accessor",
          name: "isScatteringEnabled",
          static: !1,
          private: !1,
          access: {
            has: dd => "isScatteringEnabled" in dd,
            get: dd => dd.isScatteringEnabled,
            set: (dd, Jd) => {
              dd.isScatteringEnabled = Jd
            }
          },
          metadata: Jd
        }, oJ, lJ), (0, ad.h)(dd, null, sd, {
          kind: "accessor",
          name: "useAlbedoToTintRefraction",
          static: !1,
          private: !1,
          access: {
            has: dd => "useAlbedoToTintRefraction" in dd,
            get: dd => dd.useAlbedoToTintRefraction,
            set: (dd, Jd) => {
              dd.useAlbedoToTintRefraction = Jd
            }
          },
          metadata: Jd
        }, GJ, vJ), (0, ad.h)(dd, null, Fd, {
          kind: "accessor",
          name: "useAlbedoToTintTranslucency",
          static: !1,
          private: !1,
          access: {
            has: dd => "useAlbedoToTintTranslucency" in dd,
            get: dd => dd.useAlbedoToTintTranslucency,
            set: (dd, Jd) => {
              dd.useAlbedoToTintTranslucency = Jd
            }
          },
          metadata: Jd
        }, xJ, qJ), (0, ad.h)(dd, null, Yd, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "thicknessTexture" in dd,
            get: dd => dd.thicknessTexture,
            set: (dd, Jd) => {
              dd.thicknessTexture = Jd
            }
          },
          metadata: Jd
        }, BJ, sJ), (0, ad.h)(dd, null, md, {
          kind: "accessor",
          name: "refractionTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "refractionTexture" in dd,
            get: dd => dd.refractionTexture,
            set: (dd, Jd) => {
              dd.refractionTexture = Jd
            }
          },
          metadata: Jd
        }, iJ, aJ), (0, ad.h)(dd, null, bd, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: dd => "indexOfRefraction" in dd,
            get: dd => dd.indexOfRefraction,
            set: (dd, Jd) => {
              dd.indexOfRefraction = Jd
            }
          },
          metadata: Jd
        }, MJ, FJ), (0, ad.h)(dd, null, jd, {
          kind: "accessor",
          name: "invertRefractionY",
          static: !1,
          private: !1,
          access: {
            has: dd => "invertRefractionY" in dd,
            get: dd => dd.invertRefractionY,
            set: (dd, Jd) => {
              dd.invertRefractionY = Jd
            }
          },
          metadata: Jd
        }, bJ, SJ), (0, ad.h)(dd, null, Xd, {
          kind: "accessor",
          name: "linkRefractionWithTransparency",
          static: !1,
          private: !1,
          access: {
            has: dd => "linkRefractionWithTransparency" in dd,
            get: dd => dd.linkRefractionWithTransparency,
            set: (dd, Jd) => {
              dd.linkRefractionWithTransparency = Jd
            }
          },
          metadata: Jd
        }, jJ, XJ), (0, ad.h)(dd, null, rd, {
          kind: "accessor",
          name: "useMaskFromThicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "useMaskFromThicknessTexture" in dd,
            get: dd => dd.useMaskFromThicknessTexture,
            set: (dd, Jd) => {
              dd.useMaskFromThicknessTexture = Jd
            }
          },
          metadata: Jd
        }, HJ, wJ), (0, ad.h)(dd, null, td, {
          kind: "accessor",
          name: "refractionIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "refractionIntensityTexture" in dd,
            get: dd => dd.refractionIntensityTexture,
            set: (dd, Jd) => {
              dd.refractionIntensityTexture = Jd
            }
          },
          metadata: Jd
        }, AJ, dk), (0, ad.h)(dd, null, Vd, {
          kind: "accessor",
          name: "translucencyIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "translucencyIntensityTexture" in dd,
            get: dd => dd.translucencyIntensityTexture,
            set: (dd, Jd) => {
              dd.translucencyIntensityTexture = Jd
            }
          },
          metadata: Jd
        }, Jk, kk), (0, ad.h)(dd, null, wd, {
          kind: "accessor",
          name: "translucencyColorTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "translucencyColorTexture" in dd,
            get: dd => dd.translucencyColorTexture,
            set: (dd, Jd) => {
              dd.translucencyColorTexture = Jd
            }
          },
          metadata: Jd
        }, Wk, Pk), (0, ad.h)(dd, null, dJ, {
          kind: "accessor",
          name: "useGltfStyleTextures",
          static: !1,
          private: !1,
          access: {
            has: dd => "useGltfStyleTextures" in dd,
            get: dd => dd.useGltfStyleTextures,
            set: (dd, Jd) => {
              dd.useGltfStyleTextures = Jd
            }
          },
          metadata: Jd
        }, Zk, gk), (0, ad.h)(null, null, xd, {
          kind: "field",
          name: "_scatteringDiffusionProfileIndex",
          static: !1,
          private: !1,
          access: {
            has: dd => "_scatteringDiffusionProfileIndex" in dd,
            get: dd => dd._scatteringDiffusionProfileIndex,
            set: (dd, Jd) => {
              dd._scatteringDiffusionProfileIndex = Jd
            }
          },
          metadata: Jd
        }, QJ, LJ), (0, ad.h)(null, null, qd, {
          kind: "field",
          name: "refractionIntensity",
          static: !1,
          private: !1,
          access: {
            has: dd => "refractionIntensity" in dd,
            get: dd => dd.refractionIntensity,
            set: (dd, Jd) => {
              dd.refractionIntensity = Jd
            }
          },
          metadata: Jd
        }, OJ, eJ), (0, ad.h)(null, null, Bd, {
          kind: "field",
          name: "translucencyIntensity",
          static: !1,
          private: !1,
          access: {
            has: dd => "translucencyIntensity" in dd,
            get: dd => dd.translucencyIntensity,
            set: (dd, Jd) => {
              dd.translucencyIntensity = Jd
            }
          },
          metadata: Jd
        }, RJ, IJ), (0, ad.h)(null, null, Sd, {
          kind: "field",
          name: "_volumeIndexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: dd => "_volumeIndexOfRefraction" in dd,
            get: dd => dd._volumeIndexOfRefraction,
            set: (dd, Jd) => {
              dd._volumeIndexOfRefraction = Jd
            }
          },
          metadata: Jd
        }, YJ, mJ), (0, ad.h)(null, null, fd, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: dd => "minimumThickness" in dd,
            get: dd => dd.minimumThickness,
            set: (dd, Jd) => {
              dd.minimumThickness = Jd
            }
          },
          metadata: Jd
        }, fJ, nJ), (0, ad.h)(null, null, nd, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: dd => "maximumThickness" in dd,
            get: dd => dd.maximumThickness,
            set: (dd, Jd) => {
              dd.maximumThickness = Jd
            }
          },
          metadata: Jd
        }, UJ, yJ), (0, ad.h)(null, null, Ud, {
          kind: "field",
          name: "useThicknessAsDepth",
          static: !1,
          private: !1,
          access: {
            has: dd => "useThicknessAsDepth" in dd,
            get: dd => dd.useThicknessAsDepth,
            set: (dd, Jd) => {
              dd.useThicknessAsDepth = Jd
            }
          },
          metadata: Jd
        }, DJ, TJ), (0, ad.h)(null, null, Dd, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: dd => "tintColor" in dd,
            get: dd => dd.tintColor,
            set: (dd, Jd) => {
              dd.tintColor = Jd
            }
          },
          metadata: Jd
        }, EJ, cJ), (0, ad.h)(null, null, Td, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: dd => "tintColorAtDistance" in dd,
            get: dd => dd.tintColorAtDistance,
            set: (dd, Jd) => {
              dd.tintColorAtDistance = Jd
            }
          },
          metadata: Jd
        }, hJ, rJ), (0, ad.h)(null, null, cd, {
          kind: "field",
          name: "dispersion",
          static: !1,
          private: !1,
          access: {
            has: dd => "dispersion" in dd,
            get: dd => dd.dispersion,
            set: (dd, Jd) => {
              dd.dispersion = Jd
            }
          },
          metadata: Jd
        }, uJ, tJ), (0, ad.h)(null, null, hd, {
          kind: "field",
          name: "diffusionDistance",
          static: !1,
          private: !1,
          access: {
            has: dd => "diffusionDistance" in dd,
            get: dd => dd.diffusionDistance,
            set: (dd, Jd) => {
              dd.diffusionDistance = Jd
            }
          },
          metadata: Jd
        }, VJ, zJ), (0, ad.h)(null, null, zd, {
          kind: "field",
          name: "translucencyColor",
          static: !1,
          private: !1,
          access: {
            has: dd => "translucencyColor" in dd,
            get: dd => dd.translucencyColor,
            set: (dd, Jd) => {
              dd.translucencyColor = Jd
            }
          },
          metadata: Jd
        }, pk, Nk), (0, ad.h)(null, null, JJ, {
          kind: "field",
          name: "applyAlbedoAfterSubSurface",
          static: !1,
          private: !1,
          access: {
            has: dd => "applyAlbedoAfterSubSurface" in dd,
            get: dd => dd.applyAlbedoAfterSubSurface,
            set: (dd, Jd) => {
              dd.applyAlbedoAfterSubSurface = Jd
            }
          },
          metadata: Jd
        }, Ck, Kk), (0, ad.h)(null, null, kJ, {
          kind: "field",
          name: "legacyTranslucency",
          static: !1,
          private: !1,
          access: {
            has: dd => "legacyTranslucency" in dd,
            get: dd => dd.legacyTranslucency,
            set: (dd, Jd) => {
              dd.legacyTranslucency = Jd
            }
          },
          metadata: Jd
        }, lk, Qk), Jd && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Jd
        })
      })(), dd.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE = !1, dd.DEFAULT_LEGACY_TRANSLUCENCY = !1, dd
    })();
    var KJ = kd(40342),
      oJ = kd(40317),
      lJ = kd(40353),
      QJ = kd(40358),
      LJ = kd(40364),
      OJ = kd(40372),
      eJ = kd(40379),
      RJ = kd(40382),
      IJ = kd(39860);
    const GJ = {
      effect: null,
      subMesh: null
    };
    class vJ extends((0, eJ.c)((0, OJ.d)(Td.d))) {}
    class xJ extends((0, td.c)(vJ)) {
      constructor(dd) {
        super(dd), this.PBR = !0, this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.ALBEDO = !1, this.GAMMAALBEDO = !1, this.ALBEDODIRECTUV = 0, this.VERTEXCOLOR = !1, this.BASE_WEIGHT = !1, this.BASE_WEIGHTDIRECTUV = 0, this.BASE_DIFFUSE_ROUGHNESS = !1, this.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.AMBIENTINGRAYSCALE = !1, this.OPACITY = !1, this.VERTEXALPHA = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHAFROMALBEDO = !1, this.ALPHATESTVALUE = "0.5", this.SPECULAROVERALPHA = !1, this.RADIANCEOVERALPHA = !1, this.ALPHAFRESNEL = !1, this.LINEARALPHAFRESNEL = !1, this.PREMULTIPLYALPHA = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.GAMMAEMISSIVE = !1, this.REFLECTIVITY = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.MICROSURFACEFROMREFLECTIVITYMAP = !1, this.MICROSURFACEAUTOMATIC = !1, this.LODBASEDMICROSFURACE = !1, this.MICROSURFACEMAP = !1, this.MICROSURFACEMAPDIRECTUV = 0, this.METALLICWORKFLOW = !1, this.ROUGHNESSSTOREINMETALMAPALPHA = !1, this.ROUGHNESSSTOREINMETALMAPGREEN = !1, this.METALLNESSSTOREINMETALMAPBLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.METALLIC_REFLECTANCE = !1, this.METALLIC_REFLECTANCE_GAMMA = !1, this.METALLIC_REFLECTANCEDIRECTUV = 0, this.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = !1, this.REFLECTANCE = !1, this.REFLECTANCE_GAMMA = !1, this.REFLECTANCEDIRECTUV = 0, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.NORMAL = !1, this.TANGENT = !1, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.USELIGHTMAPASSHADOWMAP = !1, this.GAMMALIGHTMAP = !1, this.RGBDLIGHTMAP = !1, this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1, this.LINEARSPECULARREFLECTION = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.PBR = !0, this.NORMALXYSCALE = !0
      }
    }
    class qJ extends((0, RJ.b)(zd.c)) {}
    let BJ = (() => {
      var dd, Jd;
      let pd, Nd = qJ,
        Pd = [],
        Zd = [];
      return dd = class extends Nd {
        get realTimeFiltering() {
          return this._realTimeFiltering
        }
        set realTimeFiltering(dd) {
          this._realTimeFiltering = dd, this.dkd(1)
        }
        get realTimeFilteringQuality() {
          return this._realTimeFilteringQuality
        }
        set realTimeFilteringQuality(dd) {
          this._realTimeFilteringQuality = dd, this.dkd(1)
        }
        get canRenderToMRT() {
          return !0
        }
        get debugMode() {
          return (0, ad.d)(this, Jd, "f")
        }
        set debugMode(dd) {
          (0, ad.e)(this, Jd, dd, "f")
        }
        constructor(kd, pd) {
          super(kd, pd, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || dd.ForceGLSL), this._directIntensity = 1, this._emissiveIntensity = 1, this._environmentIntensity = 1, this._specularIntensity = 1, this._lightingInfos = new yd.o(this._directIntensity, this._emissiveIntensity, this._environmentIntensity, this._specularIntensity), this._disableBumpMap = !1, this._albedoTexture = null, this._baseWeightTexture = null, this._baseDiffuseRoughnessTexture = null, this._ambientTexture = null, this._ambientTextureStrength = 1, this._ambientTextureImpactOnAnalyticalLights = dd.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, this._opacityTexture = null, this._reflectionTexture = null, this._emissiveTexture = null, this._reflectivityTexture = null, this._metallicTexture = null, this._metallic = null, this._roughness = null, this._metallicF0Factor = 1, this._metallicReflectanceColor = ud.c.White(), this._useOnlyMetallicFromMetallicReflectanceTexture = !1, this._metallicReflectanceTexture = null, this._reflectanceTexture = null, this._microSurfaceTexture = null, this._bumpTexture = null, this._lightmapTexture = null, this._ambientColor = new ud.c(0, 0, 0), this._albedoColor = new ud.c(1, 1, 1), this._baseWeight = 1, this._baseDiffuseRoughness = null, this._reflectivityColor = new ud.c(1, 1, 1), this._reflectionColor = new ud.c(1, 1, 1), this._emissiveColor = new ud.c(0, 0, 0), this._microSurface = .9, this._useLightmapAsShadowmap = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromAlbedoTexture = !1, this._useSpecularOverAlpha = !0, this._useMicroSurfaceFromReflectivityMapAlpha = !1, this._useRoughnessFromMetallicTextureAlpha = !0, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallnessFromMetallicTextureBlue = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useAmbientInGrayScale = !1, this._useAutoMicroSurfaceFromReflectivityMap = !1, this._lightFalloff = dd.LIGHTFALLOFF_PHYSICAL, this._useRadianceOverAlpha = !0, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new Yd.h(16), this._globalAmbientColor = new ud.c(0, 0, 0), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, Jd.set(this, (0, ad.i)(this, Pd, 0)), this.debugLimit = ((0, ad.i)(this, Zd), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this.brdf = new hd(this), this.clearCoat = new JJ(this), this.iridescence = new pJ(this), this.anisotropy = new WJ(this), this.sheen = new ZJ(this), this.subSurface = new CJ(this), this.detailMap = new KJ.d(this), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), Hd.e.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = Xd(this.Wm()), this.prePassConfiguration = new rd.e
        }
        get hasRenderTargetTextures() {
          return !!(Hd.e.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures
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
        isReadyForSubMesh(dd, Jd, kd) {
          this._uniformBufferLayoutBuilt || this.buildUniformLayout();
          const pd = Jd._drawWrapper;
          if (pd.effect && this.isFrozen && pd._wasPreviouslyReady && pd._wasPreviouslyUsingInstances === kd) return !0;
          Jd.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), Jd.materialDefines = new xJ(this._eventInfo.defineNames));
          const Nd = Jd.materialDefines;
          if (this._isReadyForSubMesh(Jd)) return !0;
          const Wd = this.Wm(),
            Pd = Wd.eL();
          if (Nd._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, Wd.texturesEnabled)) {
            if (this._albedoTexture && Hd.e.DiffuseTextureEnabled && !this._albedoTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseWeightTexture && Hd.e.BaseWeightTextureEnabled && !this._baseWeightTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseDiffuseRoughnessTexture && Hd.e.BaseDiffuseRoughnessTextureEnabled && !this._baseDiffuseRoughnessTexture.isReadyOrNotBlocking()) return !1;
            if (this._ambientTexture && Hd.e.AmbientTextureEnabled && !this._ambientTexture.isReadyOrNotBlocking()) return !1;
            if (this._opacityTexture && Hd.e.OpacityTextureEnabled && !this._opacityTexture.isReadyOrNotBlocking()) return !1;
            const dd = this._getReflectionTexture();
            if (dd && Hd.e.ReflectionTextureEnabled) {
              if (!dd.isReadyOrNotBlocking()) return !1;
              if (dd.irradianceTexture) {
                if (!dd.irradianceTexture.isReadyOrNotBlocking()) return !1
              } else if (!dd.sphericalPolynomial && dd.getInternalTexture()?._sphericalPolynomialPromise) return !1
            }
            if (this._lightmapTexture && Hd.e.LightmapTextureEnabled && !this._lightmapTexture.isReadyOrNotBlocking()) return !1;
            if (this._emissiveTexture && Hd.e.EmissiveTextureEnabled && !this._emissiveTexture.isReadyOrNotBlocking()) return !1;
            if (Hd.e.SpecularTextureEnabled) {
              if (this._metallicTexture) {
                if (!this._metallicTexture.isReadyOrNotBlocking()) return !1
              } else if (this._reflectivityTexture && !this._reflectivityTexture.isReadyOrNotBlocking()) return !1;
              if (this._metallicReflectanceTexture && !this._metallicReflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._reflectanceTexture && !this._reflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._microSurfaceTexture && !this._microSurfaceTexture.isReadyOrNotBlocking()) return !1
            }
            if (Pd.getCaps().standardDerivatives && this._bumpTexture && Hd.e.BumpTextureEnabled && !this._disableBumpMap && !this._bumpTexture.isReady()) return !1;
            if (this._environmentBRDFTexture && Hd.e.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1
          }
          if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Nd, this._eventInfo.subMesh = Jd, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
          if (Nd._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
          if (Nd.AREALIGHTUSED || Nd.CLUSTLIGHT_BATCH)
            for (let od = 0; od < dd.lightSources.length; od++)
              if (!dd.lightSources[od]._isReady()) return !1;
          if (Pd.getCaps().standardDerivatives || dd.isVerticesDataPresent(Dd.j.NormalKind) || (dd.createNormals(!0), Fd.c.Warn("PBRMaterial: Normals have been created for the mesh: " + dd.name)), !(0, Ad.e)(Wd, dd, this._maxSimultaneousLights, this._disableLighting)) return !1;
          const Zd = Jd.effect,
            gd = Nd._areLightsDisposed,
            Cd = this._prepareEffect(dd, Jd.getRenderingMesh(), Nd, this.onCompiled, this.onError, kd, null);
          let Kd = !1;
          if (Cd)
            if (this._onEffectCreatedObservable && (GJ.effect = Cd, GJ.subMesh = Jd, this._onEffectCreatedObservable.notifyObservers(GJ)), this.allowShaderHotSwapping && Zd && !Cd.isReady()) {
              if (Nd.markAsUnprocessed(), Kd = this.isFrozen, gd) return Nd._areLightsDisposed = !0, !1
            } else Wd.resetCachedMaterial(), Jd.setEffect(Cd, Nd, this._materialContext);
          return !(!Jd.effect || !Jd.effect.isReady()) && (Nd._renderId = Wd.getRenderId(), pd._wasPreviouslyReady = !Kd, pd._wasPreviouslyUsingInstances = !!kd, this._checkScenePerformancePriority(), !0)
        }
        isMetallicWorkflow() {
          return !(null == this._metallic && null == this._roughness && !this._metallicTexture)
        }
        _prepareEffect(Jd, kd, pd) {
          let Nd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            Wd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            Pd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            Zd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
          if (this._prepareDefines(Jd, kd, pd, Pd, Zd), !pd.isDirty) return null;
          pd.markAsProcessed();
          const gd = this.Wm().eL(),
            Cd = new wd.e;
          let Kd = 0;
          pd.USESPHERICALINVERTEX && Cd.addFallback(Kd++, "USESPHERICALINVERTEX"), pd.FOG && Cd.addFallback(Kd, "FOG"), pd.SPECULARAA && Cd.addFallback(Kd, "SPECULARAA"), pd.POINTSIZE && Cd.addFallback(Kd, "POINTSIZE"), pd.LOGARITHMICDEPTH && Cd.addFallback(Kd, "LOGARITHMICDEPTH"), pd.PARALLAX && Cd.addFallback(Kd, "PARALLAX"), pd.PARALLAX_RHS && Cd.addFallback(Kd, "PARALLAX_RHS"), pd.PARALLAXOCCLUSION && Cd.addFallback(Kd++, "PARALLAXOCCLUSION"), pd.ENVIRONMENTBRDF && Cd.addFallback(Kd++, "ENVIRONMENTBRDF"), pd.TANGENT && Cd.addFallback(Kd++, "TANGENT"), pd.BUMP && Cd.addFallback(Kd++, "BUMP"), Kd = (0, Ad.D)(pd, Cd, this._maxSimultaneousLights, Kd), pd.SPECULARTERM && Cd.addFallback(Kd++, "SPECULARTERM"), pd.USESPHERICALFROMREFLECTIONMAP && Cd.addFallback(Kd++, "USESPHERICALFROMREFLECTIONMAP"), pd.USEIRRADIANCEMAP && Cd.addFallback(Kd++, "USEIRRADIANCEMAP"), pd.LIGHTMAP && Cd.addFallback(Kd++, "LIGHTMAP"), pd.NORMAL && Cd.addFallback(Kd++, "NORMAL"), pd.AMBIENT && Cd.addFallback(Kd++, "AMBIENT"), pd.EMISSIVE && Cd.addFallback(Kd++, "EMISSIVE"), pd.VERTEXCOLOR && Cd.addFallback(Kd++, "VERTEXCOLOR"), pd.MORPHTARGETS && Cd.addFallback(Kd++, "MORPHTARGETS"), pd.MULTIVIEW && Cd.addFallback(0, "MULTIVIEW");
          const od = [Dd.j.PositionKind];
          pd.NORMAL && od.push(Dd.j.NormalKind), pd.TANGENT && od.push(Dd.j.TangentKind);
          for (let dd = 1; dd <= 6; ++dd) pd["UV" + dd] && od.push(`uv${1===dd?"":dd}`);
          pd.VERTEXCOLOR && od.push(Dd.j.ColorKind), (0, Ad.I)(od, Jd, pd, Cd), (0, Ad.K)(od, pd), (0, Ad.O)(od, Jd, pd), (0, Ad.H)(od, Jd, pd);
          let ld = "pbr";
          const Qd = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vAlbedoColor", "baseWeight", "baseDiffuseRoughness", "vReflectivityColor", "vMetallicReflectanceFactors", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vAlbedoInfos", "vBaseWeightInfos", "vBaseDiffuseRoughnessInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vReflectivityInfos", "vMetallicReflectanceInfos", "vReflectanceInfos", "vMicroSurfaceSamplerInfos", "vBumpInfos", "vLightmapInfos", "mBones", "albedoMatrix", "baseWeightMatrix", "baseDiffuseRoughnessMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "reflectivityMatrix", "normalMatrix", "microSurfaceSamplerMatrix", "bumpMatrix", "lightmapMatrix", "metallicReflectanceMatrix", "reflectanceMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
            Ld = ["albedoSampler", "baseWeightSampler", "baseDiffuseRoughnessSampler", "reflectivitySampler", "ambientSampler", "emissiveSampler", "bumpSampler", "lightmapSampler", "opacitySampler", "microSurfaceSampler", "environmentBrdfSampler", "boneSampler", "metallicReflectanceSampler", "reflectanceSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
          (0, Ad.lb)(Qd, Ld, !0);
          const Od = ["Material", "Scene", "Mesh"],
            ed = {
              maxSimultaneousLights: this._maxSimultaneousLights,
              maxSimultaneousMorphTargets: pd.NUM_MORPH_INFLUENCERS
            };
          if (this._eventInfo.fallbacks = Cd, this._eventInfo.fallbackRank = Kd, this._eventInfo.defines = pd, this._eventInfo.uniforms = Qd, this._eventInfo.attributes = od, this._eventInfo.samplers = Ld, this._eventInfo.uniformBuffersNames = Od, this._eventInfo.customCode = void 0, this._eventInfo.mesh = Jd, this._eventInfo.indexParameters = ed, this._callbackPluginEventGeneric(128, this._eventInfo), LJ.b.AddUniformsAndSamplers(Qd, Ld), rd.e.AddUniforms(Qd), rd.e.AddSamplers(Ld), (0, oJ.e)(Qd), this._useVertexPulling) {
            const dd = kd?.geometry;
            dd && (this._vertexPullingMetadata = (0, lJ.h)(dd), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((dd, Jd) => {
              Qd.push(`vp_${Jd}_info`)
            })))
          } else this._vertexPullingMetadata = null;
          Vd.e && (Vd.e.PrepareUniforms(Qd, pd), Vd.e.PrepareSamplers(Ld, pd)), (0, Ad.pb)({
            uniformsNames: Qd,
            uniformBuffersNames: Od,
            samplers: Ld,
            defines: pd,
            maxSimultaneousLights: this._maxSimultaneousLights,
            shaderLanguage: this._shaderLanguage
          });
          const Rd = {};
          this.customShaderNameResolve && (ld = this.customShaderNameResolve(ld, Qd, Od, Ld, pd, od, Rd));
          const Id = pd.toString(),
            Gd = gd.createEffect(ld, {
              attributes: od,
              uniformsNames: Qd,
              uniformBuffersNames: Od,
              samplers: Ld,
              defines: Id,
              fallbacks: Cd,
              onCompiled: Nd,
              onError: Wd,
              indexParameters: ed,
              processFinalCode: Rd.processFinalCode,
              processCodeAfterIncludes: this._eventInfo.customCode,
              multiTarget: pd.PREPASS,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: dd._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, gd);
          return this._eventInfo.customCode = void 0, Gd
        }
        _prepareDefines(Jd, kd, pd) {
          let Nd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            Wd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
          const Pd = kd.hasThinInstances,
            Zd = this.Wm(),
            gd = Zd.eL();
          (0, Ad.ab)(Zd, Jd, pd, !0, this._maxSimultaneousLights, this._disableLighting), pd._needNormals = !0, (0, Ad.gb)(Zd, pd);
          const Cd = this.needAlphaBlendingForMesh(Jd) && this.Wm().useOrderIndependentTransparency;
          if ((0, Ad.ib)(Zd, pd, this.canRenderToMRT && !Cd), (0, Ad.hb)(Zd, pd, Cd), LJ.b.PrepareDefines(gd.currentRenderPassId, Jd, pd), pd.METALLICWORKFLOW = this.isMetallicWorkflow(), pd._areTexturesDirty) {
            pd._needUVs = !1;
            for (let dd = 1; dd <= 6; ++dd) pd["MAINUV" + dd] = !1;
            if (Zd.texturesEnabled) {
              pd.ALBEDODIRECTUV = 0, pd.BASE_WEIGHTDIRECTUV = 0, pd.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, pd.AMBIENTDIRECTUV = 0, pd.OPACITYDIRECTUV = 0, pd.EMISSIVEDIRECTUV = 0, pd.REFLECTIVITYDIRECTUV = 0, pd.MICROSURFACEMAPDIRECTUV = 0, pd.METALLIC_REFLECTANCEDIRECTUV = 0, pd.REFLECTANCEDIRECTUV = 0, pd.BUMPDIRECTUV = 0, pd.LIGHTMAPDIRECTUV = 0, gd.getCaps().textureLOD && (pd.LODBASEDMICROSFURACE = !0), this._albedoTexture && Hd.e.DiffuseTextureEnabled ? ((0, Ad.db)(this._albedoTexture, pd, "ALBEDO"), pd.GAMMAALBEDO = this._albedoTexture.gammaSpace) : pd.ALBEDO = !1, this._baseWeightTexture && Hd.e.BaseWeightTextureEnabled ? (0, Ad.db)(this._baseWeightTexture, pd, "BASE_WEIGHT") : pd.BASE_WEIGHT = !1, this._baseDiffuseRoughnessTexture && Hd.e.BaseDiffuseRoughnessTextureEnabled ? (0, Ad.db)(this._baseDiffuseRoughnessTexture, pd, "BASE_DIFFUSE_ROUGHNESS") : pd.BASE_DIFFUSE_ROUGHNESS = !1, this._ambientTexture && Hd.e.AmbientTextureEnabled ? ((0, Ad.db)(this._ambientTexture, pd, "AMBIENT"), pd.AMBIENTINGRAYSCALE = this._useAmbientInGrayScale) : pd.AMBIENT = !1, this._opacityTexture && Hd.e.OpacityTextureEnabled ? ((0, Ad.db)(this._opacityTexture, pd, "OPACITY"), pd.OPACITYRGB = this._opacityTexture.getAlphaFromRGB) : pd.OPACITY = !1;
              const dd = this._getReflectionTexture(),
                Jd = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || gd.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
              (0, Ad.Z)(Zd, dd, pd, this.realTimeFiltering, this.realTimeFilteringQuality, !Jd), this._lightmapTexture && Hd.e.LightmapTextureEnabled ? ((0, Ad.db)(this._lightmapTexture, pd, "LIGHTMAP"), pd.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, pd.GAMMALIGHTMAP = this._lightmapTexture.gammaSpace, pd.RGBDLIGHTMAP = this._lightmapTexture.isRGBD) : pd.LIGHTMAP = !1, this._emissiveTexture && Hd.e.EmissiveTextureEnabled ? ((0, Ad.db)(this._emissiveTexture, pd, "EMISSIVE"), pd.GAMMAEMISSIVE = this._emissiveTexture.gammaSpace) : pd.EMISSIVE = !1, Hd.e.SpecularTextureEnabled ? (this._metallicTexture ? ((0, Ad.db)(this._metallicTexture, pd, "REFLECTIVITY"), pd.ROUGHNESSSTOREINMETALMAPALPHA = this._useRoughnessFromMetallicTextureAlpha, pd.ROUGHNESSSTOREINMETALMAPGREEN = !this._useRoughnessFromMetallicTextureAlpha && this._useRoughnessFromMetallicTextureGreen, pd.METALLNESSSTOREINMETALMAPBLUE = this._useMetallnessFromMetallicTextureBlue, pd.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed, pd.REFLECTIVITY_GAMMA = !1) : this._reflectivityTexture ? ((0, Ad.db)(this._reflectivityTexture, pd, "REFLECTIVITY"), pd.MICROSURFACEFROMREFLECTIVITYMAP = this._useMicroSurfaceFromReflectivityMapAlpha, pd.MICROSURFACEAUTOMATIC = this._useAutoMicroSurfaceFromReflectivityMap, pd.REFLECTIVITY_GAMMA = this._reflectivityTexture.gammaSpace) : pd.REFLECTIVITY = !1, this._metallicReflectanceTexture || this._reflectanceTexture ? (pd.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = this._useOnlyMetallicFromMetallicReflectanceTexture, this._metallicReflectanceTexture ? ((0, Ad.db)(this._metallicReflectanceTexture, pd, "METALLIC_REFLECTANCE"), pd.METALLIC_REFLECTANCE_GAMMA = this._metallicReflectanceTexture.gammaSpace) : pd.METALLIC_REFLECTANCE = !1, this._reflectanceTexture && (!this._metallicReflectanceTexture || this._metallicReflectanceTexture && this._useOnlyMetallicFromMetallicReflectanceTexture) ? ((0, Ad.db)(this._reflectanceTexture, pd, "REFLECTANCE"), pd.REFLECTANCE_GAMMA = this._reflectanceTexture.gammaSpace) : pd.REFLECTANCE = !1) : (pd.METALLIC_REFLECTANCE = !1, pd.REFLECTANCE = !1), this._microSurfaceTexture ? (0, Ad.db)(this._microSurfaceTexture, pd, "MICROSURFACEMAP") : pd.MICROSURFACEMAP = !1) : (pd.REFLECTIVITY = !1, pd.MICROSURFACEMAP = !1), gd.getCaps().standardDerivatives && this._bumpTexture && Hd.e.BumpTextureEnabled && !this._disableBumpMap ? ((0, Ad.db)(this._bumpTexture, pd, "BUMP"), this._useParallax && this._albedoTexture && Hd.e.DiffuseTextureEnabled ? (pd.PARALLAX = !0, pd.PARALLAX_RHS = Zd.useRightHandedSystem, pd.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : pd.PARALLAX = !1, pd.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (pd.BUMP = !1, pd.PARALLAX = !1, pd.PARALLAX_RHS = !1, pd.PARALLAXOCCLUSION = !1, pd.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && Hd.e.ReflectionTextureEnabled ? (pd.ENVIRONMENTBRDF = !0, pd.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (pd.ENVIRONMENTBRDF = !1, pd.ENVIRONMENTBRDF_RGBD = !1), this._shouldUseAlphaFromAlbedoTexture() ? pd.ALPHAFROMALBEDO = !0 : pd.ALPHAFROMALBEDO = !1
            }
            pd.SPECULAROVERALPHA = this._useSpecularOverAlpha, this._lightFalloff === dd.LIGHTFALLOFF_STANDARD ? (pd.USEPHYSICALLIGHTFALLOFF = !1, pd.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === dd.LIGHTFALLOFF_GLTF ? (pd.USEPHYSICALLIGHTFALLOFF = !1, pd.USEGLTFLIGHTFALLOFF = !0) : (pd.USEPHYSICALLIGHTFALLOFF = !0, pd.USEGLTFLIGHTFALLOFF = !1), pd.RADIANCEOVERALPHA = this._useRadianceOverAlpha, !this.backFaceCulling && this._twoSidedLighting ? pd.TWOSIDEDLIGHTING = !0 : pd.TWOSIDEDLIGHTING = !1, pd.MIRRORED = !!Zd._mirroredCameraPosition, pd.SPECULARAA = gd.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
          }(pd._areTexturesDirty || pd._areMiscDirty) && (pd.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, pd.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, pd.ALPHABLEND = this.needAlphaBlendingForMesh(Jd), pd.ALPHAFRESNEL = this._useAlphaFresnel || this._useLinearAlphaFresnel, pd.LINEARALPHAFRESNEL = this._useLinearAlphaFresnel), pd._areTexturesDirty && (pd.TEXTURE_REPETITION_MODE = gd.version > 1 || gd.isWebGPU ? this.textureRepetitionMode : 0), pd._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(pd), pd.FORCENORMALFORWARD = this._forceNormalForward, pd.RADIANCEOCCLUSION = this._useRadianceOcclusion, pd.HORIZONOCCLUSION = this._useHorizonOcclusion, pd._areMiscDirty && ((0, Ad.eb)(Jd, Zd, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(Jd), pd, this._applyDecalMapAfterDetailMap, this._useVertexPulling, kd, this._isVertexOutputInvariant), pd.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !Jd.isVerticesDataPresent(Dd.j.NormalKind), pd.DEBUGMODE = this._debugMode), (0, Ad.V)(Zd, gd, this, pd, !!Nd, Wd, Pd), this._eventInfo.defines = pd, this._eventInfo.mesh = Jd, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, Ad.R)(Jd, pd, !0, !0, !0, this._transparencyMode !== dd.PBRMATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
        }
        forceCompilation(dd, Jd, kd) {
          const pd = {
            clipPlane: !1,
            useInstances: !1,
            ...kd
          };
          this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
          (() => {
            if (this._breakShaderLoadedCheck) return;
            const kd = new xJ(this._eventInfo.defineNames),
              Nd = this._prepareEffect(dd, dd, kd, void 0, void 0, pd.useInstances, pd.clipPlane);
            this._onEffectCreatedObservable && (GJ.effect = Nd, GJ.subMesh = null, this._onEffectCreatedObservable.notifyObservers(GJ)), Nd.isReady() ? Jd && Jd(this) : Nd.onCompileObservable.add((() => {
              Jd && Jd(this)
            }))
          })()
        }
        buildUniformLayout() {
          const dd = this._uniformBuffer;
          dd.addUniform("vAlbedoInfos", 2), dd.addUniform("vBaseWeightInfos", 2), dd.addUniform("vBaseDiffuseRoughnessInfos", 2), dd.addUniform("vAmbientInfos", 4), dd.addUniform("vOpacityInfos", 2), dd.addUniform("vEmissiveInfos", 2), dd.addUniform("vLightmapInfos", 2), dd.addUniform("vReflectivityInfos", 3), dd.addUniform("vMicroSurfaceSamplerInfos", 2), dd.addUniform("vBumpInfos", 3), dd.addUniform("albedoMatrix", 16), dd.addUniform("baseWeightMatrix", 16), dd.addUniform("baseDiffuseRoughnessMatrix", 16), dd.addUniform("ambientMatrix", 16), dd.addUniform("opacityMatrix", 16), dd.addUniform("emissiveMatrix", 16), dd.addUniform("lightmapMatrix", 16), dd.addUniform("reflectivityMatrix", 16), dd.addUniform("microSurfaceSamplerMatrix", 16), dd.addUniform("bumpMatrix", 16), dd.addUniform("vTangentSpaceParams", 2), dd.addUniform("vAlbedoColor", 4), dd.addUniform("baseWeight", 1), dd.addUniform("baseDiffuseRoughness", 1), dd.addUniform("vLightingIntensity", 4), dd.addUniform("pointSize", 1), dd.addUniform("vReflectivityColor", 4), dd.addUniform("vEmissiveColor", 3), dd.addUniform("vAmbientColor", 3), dd.addUniform("vDebugMode", 2), dd.addUniform("vMetallicReflectanceFactors", 4), dd.addUniform("vMetallicReflectanceInfos", 2), dd.addUniform("metallicReflectanceMatrix", 16), dd.addUniform("vReflectanceInfos", 2), dd.addUniform("reflectanceMatrix", 16), dd.addUniform("cameraInfo", 4), dd.addUniform("vTextureRepetitionHexTilingParams", 4), (0, Ad.jb)(dd, !0, !0, !0, !0, !0), super.buildUniformLayout()
        }
        bindForSubMesh(dd, Jd, kd) {
          const pd = this.Wm(),
            Nd = kd.materialDefines;
          if (!Nd) return;
          const Wd = kd.effect;
          if (!Wd) return;
          this._activeEffect = Wd, Jd.getMeshUniformBuffer().bindToEffect(Wd, "Mesh"), Jd.transferToEffect(dd);
          const Pd = pd.eL();
          this._uniformBuffer.bindToEffect(Wd, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, pd, Jd, dd, this.isFrozen), LJ.b.Bind(Pd.currentRenderPassId, this._activeEffect, Jd, dd, this);
          const Zd = pd.activeCamera;
          Zd ? this._uniformBuffer.updateFloat4("cameraInfo", Zd.minZ, Zd.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
          const gd = this.textureRepetitionHexTilingParams;
          this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", gd[0], gd[1], gd[2], gd[3]), this._eventInfo.subMesh = kd, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), Nd.OBJECTSPACE_NORMALMAP && (dd.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
          const Cd = this._mustRebind(pd, Wd, kd, Jd.visibility),
            Kd = Pd._features.needToAlwaysBindUniformBuffers;
          (0, Ad.g)(Jd, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, lJ.e)(this._activeEffect, this._vertexPullingMetadata);
          let od = null;
          const ld = this._uniformBuffer;
          if (Cd) {
            if (this.bindViewProjection(Wd), od = this._getReflectionTexture(), !ld.useUbo || !this.isFrozen || !ld.isSync || kd._drawWrapper._forceRebindOnNextCall) {
              if (pd.texturesEnabled && (this._albedoTexture && Hd.e.DiffuseTextureEnabled && (ld.updateFloat2("vAlbedoInfos", this._albedoTexture.coordinatesIndex, this._albedoTexture.level), (0, Ad.C)(this._albedoTexture, ld, "albedo")), this._baseWeightTexture && Hd.e.BaseWeightTextureEnabled && (ld.updateFloat2("vBaseWeightInfos", this._baseWeightTexture.coordinatesIndex, this._baseWeightTexture.level), (0, Ad.C)(this._baseWeightTexture, ld, "baseWeight")), this._baseDiffuseRoughnessTexture && Hd.e.BaseDiffuseRoughnessTextureEnabled && (ld.updateFloat2("vBaseDiffuseRoughnessInfos", this._baseDiffuseRoughnessTexture.coordinatesIndex, this._baseDiffuseRoughnessTexture.level), (0, Ad.C)(this._baseDiffuseRoughnessTexture, ld, "baseDiffuseRoughness")), this._ambientTexture && Hd.e.AmbientTextureEnabled && (ld.updateFloat4("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level, this._ambientTextureStrength, this._ambientTextureImpactOnAnalyticalLights), (0, Ad.C)(this._ambientTexture, ld, "ambient")), this._opacityTexture && Hd.e.OpacityTextureEnabled && (ld.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, Ad.C)(this._opacityTexture, ld, "opacity")), this._emissiveTexture && Hd.e.EmissiveTextureEnabled && (ld.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, Ad.C)(this._emissiveTexture, ld, "emissive")), this._lightmapTexture && Hd.e.LightmapTextureEnabled && (ld.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, Ad.C)(this._lightmapTexture, ld, "lightmap")), Hd.e.SpecularTextureEnabled && (this._metallicTexture ? (ld.updateFloat3("vReflectivityInfos", this._metallicTexture.coordinatesIndex, this._metallicTexture.level, this._ambientTextureStrength), (0, Ad.C)(this._metallicTexture, ld, "reflectivity")) : this._reflectivityTexture && (ld.updateFloat3("vReflectivityInfos", this._reflectivityTexture.coordinatesIndex, this._reflectivityTexture.level, 1), (0, Ad.C)(this._reflectivityTexture, ld, "reflectivity")), this._metallicReflectanceTexture && (ld.updateFloat2("vMetallicReflectanceInfos", this._metallicReflectanceTexture.coordinatesIndex, this._metallicReflectanceTexture.level), (0, Ad.C)(this._metallicReflectanceTexture, ld, "metallicReflectance")), this._reflectanceTexture && Nd.REFLECTANCE && (ld.updateFloat2("vReflectanceInfos", this._reflectanceTexture.coordinatesIndex, this._reflectanceTexture.level), (0, Ad.C)(this._reflectanceTexture, ld, "reflectance")), this._microSurfaceTexture && (ld.updateFloat2("vMicroSurfaceSamplerInfos", this._microSurfaceTexture.coordinatesIndex, this._microSurfaceTexture.level), (0, Ad.C)(this._microSurfaceTexture, ld, "microSurfaceSampler"))), this._bumpTexture && Pd.getCaps().standardDerivatives && Hd.e.BumpTextureEnabled && !this._disableBumpMap && (ld.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level, this._parallaxScaleBias), (0, Ad.C)(this._bumpTexture, ld, "bump"), pd._mirroredCameraPosition ? ld.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : ld.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, Ad.n)(pd, Nd, ld, this._reflectionColor, od, this.realTimeFiltering, !0, !0, !0, !0, !0)), this.pointsCloud && ld.updateFloat("pointSize", this.pointSize), Nd.METALLICWORKFLOW) {
                ud.m.Color4[0].r = void 0 === this._metallic || null === this._metallic ? 1 : this._metallic, ud.m.Color4[0].g = void 0 === this._roughness || null === this._roughness ? 1 : this._roughness;
                const dd = this.subSurface?._indexOfRefraction ?? 1.5,
                  Jd = 1;
                ud.m.Color4[0].b = dd;
                const kd = Math.pow((dd - Jd) / (dd + Jd), 2);
                ud.m.Color4[0].a = kd, ld.updateDirectColor4("vReflectivityColor", ud.m.Color4[0]), ld.updateColor4("vMetallicReflectanceFactors", this._metallicReflectanceColor, this._metallicF0Factor)
              } else ld.updateColor4("vReflectivityColor", this._reflectivityColor, this._microSurface);
              ld.updateColor3("vEmissiveColor", Hd.e.EmissiveTextureEnabled ? this._emissiveColor : ud.c.BlackReadOnly), !Nd.SS_REFRACTION && this.subSurface?._linkRefractionWithTransparency ? ld.updateColor4("vAlbedoColor", this._albedoColor, 1) : ld.updateColor4("vAlbedoColor", this._albedoColor, this.alpha), ld.updateFloat("baseWeight", this._baseWeight), ld.updateFloat("baseDiffuseRoughness", this._baseDiffuseRoughness || 0), this._lightingInfos.x = this._directIntensity, this._lightingInfos.y = this._emissiveIntensity, this._lightingInfos.z = this._environmentIntensity * pd.environmentIntensity, this._lightingInfos.w = this._specularIntensity, ld.updateVector4("vLightingIntensity", this._lightingInfos), pd.ambientColor.multiplyToRef(this._ambientColor, this._globalAmbientColor), ld.updateColor3("vAmbientColor", this._globalAmbientColor), ld.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
            }
            pd.texturesEnabled && (this._albedoTexture && Hd.e.DiffuseTextureEnabled && ld.setTexture("albedoSampler", this._albedoTexture), this._baseWeightTexture && Hd.e.BaseWeightTextureEnabled && ld.setTexture("baseWeightSampler", this._baseWeightTexture), this._baseDiffuseRoughnessTexture && Hd.e.BaseDiffuseRoughnessTextureEnabled && ld.setTexture("baseDiffuseRoughnessSampler", this._baseDiffuseRoughnessTexture), this._ambientTexture && Hd.e.AmbientTextureEnabled && ld.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && Hd.e.OpacityTextureEnabled && ld.setTexture("opacitySampler", this._opacityTexture), (0, Ad.o)(pd, Nd, ld, od, this.realTimeFiltering), Nd.ENVIRONMENTBRDF && ld.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), this._emissiveTexture && Hd.e.EmissiveTextureEnabled && ld.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && Hd.e.LightmapTextureEnabled && ld.setTexture("lightmapSampler", this._lightmapTexture), Hd.e.SpecularTextureEnabled && (this._metallicTexture ? ld.setTexture("reflectivitySampler", this._metallicTexture) : this._reflectivityTexture && ld.setTexture("reflectivitySampler", this._reflectivityTexture), this._metallicReflectanceTexture && ld.setTexture("metallicReflectanceSampler", this._metallicReflectanceTexture), this._reflectanceTexture && Nd.REFLECTANCE && ld.setTexture("reflectanceSampler", this._reflectanceTexture), this._microSurfaceTexture && ld.setTexture("microSurfaceSampler", this._microSurfaceTexture)), this._bumpTexture && Pd.getCaps().standardDerivatives && Hd.e.BumpTextureEnabled && !this._disableBumpMap && ld.setTexture("bumpSampler", this._bumpTexture)), this.Wm().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(Jd) && this.Wm().depthPeelingRenderer.bind(Wd), this._eventInfo.subMesh = kd, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, oJ.i)(this._activeEffect, this, pd), this.bindEyePosition(Wd)
          } else Kd && (this._needToBindSceneUbo = !0);
          !Cd && this.isFrozen && !Kd || !pd.lightsEnabled || this._disableLighting || (0, Ad.q)(pd, Jd, this._activeEffect, Nd, this._maxSimultaneousLights), !Cd && this.isFrozen || ((pd.fogEnabled && Jd.applyFog && pd.fogMode !== Ud.i.FOGMODE_NONE || od || this.subSurface.refractionTexture || Jd.receiveShadows || Nd.PREPASS || Nd.CLUSTLIGHT_BATCH) && this.bindView(Wd), (0, Ad.k)(pd, Jd, this._activeEffect, !0), Nd.NUM_MORPH_INFLUENCERS && (0, Ad.v)(Jd, this._activeEffect), Nd.BAKED_VERTEX_ANIMATION_TEXTURE && Jd.bakedVertexAnimationManager?.bind(Wd, Nd.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, Ad.s)(Nd, this._activeEffect, pd)), this._afterBind(Jd, this._activeEffect, kd), ld.update()
        }
        getAnimatables() {
          const dd = super.getAnimatables();
          return this._albedoTexture && this._albedoTexture.animations && this._albedoTexture.animations.length > 0 && dd.push(this._albedoTexture), this._baseWeightTexture && this._baseWeightTexture.animations && this._baseWeightTexture.animations.length > 0 && dd.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && this._baseDiffuseRoughnessTexture.animations && this._baseDiffuseRoughnessTexture.animations.length > 0 && dd.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && dd.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && dd.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && dd.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && dd.push(this._emissiveTexture), this._metallicTexture && this._metallicTexture.animations && this._metallicTexture.animations.length > 0 ? dd.push(this._metallicTexture) : this._reflectivityTexture && this._reflectivityTexture.animations && this._reflectivityTexture.animations.length > 0 && dd.push(this._reflectivityTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && dd.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && dd.push(this._lightmapTexture), this._metallicReflectanceTexture && this._metallicReflectanceTexture.animations && this._metallicReflectanceTexture.animations.length > 0 && dd.push(this._metallicReflectanceTexture), this._reflectanceTexture && this._reflectanceTexture.animations && this._reflectanceTexture.animations.length > 0 && dd.push(this._reflectanceTexture), this._microSurfaceTexture && this._microSurfaceTexture.animations && this._microSurfaceTexture.animations.length > 0 && dd.push(this._microSurfaceTexture), dd
        }
        _getReflectionTexture() {
          return this._reflectionTexture ? this._reflectionTexture : this.Wm().environmentTexture
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
          const dd = this.Wm().enableSubSurfaceForPrePass();
          return dd && (dd.enabled = !0), !0
        }
        dispose(dd, Jd) {
          this._breakShaderLoadedCheck = !0, Jd && (this._environmentBRDFTexture && this.Wm().environmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._albedoTexture?.dispose(), this._baseWeightTexture?.dispose(), this._baseDiffuseRoughnessTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._metallicTexture?.dispose(), this._reflectivityTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._metallicReflectanceTexture?.dispose(), this._reflectanceTexture?.dispose(), this._microSurfaceTexture?.dispose()), this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(dd, Jd)
        }
      }, Jd = new WeakMap, (() => {
        const Jd = "function" === typeof Symbol && Symbol.metadata ? Object.create(Nd[Symbol.metadata] ?? null) : void 0;
        pd = [(0, Md.f)("_markAllSubMeshesAsMiscDirty")], (0, ad.h)(dd, null, pd, {
          kind: "accessor",
          name: "debugMode",
          static: !1,
          private: !1,
          access: {
            has: dd => "debugMode" in dd,
            get: dd => dd.debugMode,
            set: (dd, Jd) => {
              dd.debugMode = Jd
            }
          },
          metadata: Jd
        }, Pd, Zd), Jd && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Jd
        })
      })(), dd.PBRMATERIAL_OPAQUE = Wd.b.MATERIAL_OPAQUE, dd.PBRMATERIAL_ALPHATEST = Wd.b.MATERIAL_ALPHATEST, dd.PBRMATERIAL_ALPHABLEND = Wd.b.MATERIAL_ALPHABLEND, dd.PBRMATERIAL_ALPHATESTANDBLEND = Wd.b.MATERIAL_ALPHATESTANDBLEND, dd.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0, dd.LIGHTFALLOFF_PHYSICAL = 0, dd.LIGHTFALLOFF_GLTF = 1, dd.LIGHTFALLOFF_STANDARD = 2, dd.ForceGLSL = !1, dd._ShaderLoader = new QJ.e((() => [Promise.all([kd.e(308), kd.e(319)]).then((() => kd(61248))), Promise.all([kd.e(313), kd.e(309), kd.e(373), kd.e(322), kd.e(372)]).then((() => kd(61266)))]), (() => [Promise.all([kd.e(327), kd.e(329), kd.e(336)]).then((() => kd(61348))), Promise.all([kd.e(327), kd.e(330), kd.e(376), kd.e(340), kd.e(375)]).then((() => kd(61371)))])), dd
    })();
    Object.getOwnPropertyDescriptor(BJ.prototype, "decalMap") || Object.defineProperty(BJ.prototype, "decalMap", (0, IJ.g)("PBRBaseMaterial", "decalMap")), (0, kd(41793).e)();
    var sJ = kd(39983);
    var iJ = kd(40066),
      aJ = kd(41773),
      MJ = kd(39805),
      FJ = kd(39813),
      YJ = kd(39909);
    let mJ = !1;
    const bJ = new ud.g,
      SJ = new ud.g;
    class jJ extends aJ.c {
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
          for (let Jd = 0; Jd < this._textures.length; Jd++) this._textures[Jd].wrapU = dd
      }
      set wrapV(dd) {
        if (this._textures)
          for (let Jd = 0; Jd < this._textures.length; Jd++) this._textures[Jd].wrapV = dd
      }
      constructor(dd, Jd, kd, pd, Nd, Wd) {
        const Pd = !(!Nd || !Nd.generateMipMaps) && Nd.generateMipMaps,
          Zd = !(!Nd || !Nd.generateDepthTexture) && Nd.generateDepthTexture,
          gd = Nd && Nd.depthTextureFormat ? Nd.depthTextureFormat : 15,
          Cd = !Nd || void 0 === Nd.doNotChangeAspectRatio || Nd.doNotChangeAspectRatio,
          Kd = !(!Nd || !Nd.drawOnlyOnFirstAttachmentByDefault) && Nd.drawOnlyOnFirstAttachmentByDefault;
        if (super(dd, Jd, pd, Pd, Cd, void 0, void 0, void 0, void 0, void 0, void 0, void 0, !0), mJ || (mJ = !0, FJ.ThinEngine.prototype.restoreSingleAttachment = function() {
            const dd = this._gl;
            this.bindAttachments([dd.BACK])
          }, FJ.ThinEngine.prototype.restoreSingleAttachmentForRenderTarget = function() {
            const dd = this._gl;
            this.bindAttachments([dd.COLOR_ATTACHMENT0])
          }, FJ.ThinEngine.prototype.buildTextureLayout = function(dd) {
            let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const kd = this._gl,
              pd = [];
            if (Jd) pd.push(kd.BACK);
            else
              for (let Nd = 0; Nd < dd.length; Nd++) dd[Nd] ? pd.push(kd["COLOR_ATTACHMENT" + Nd]) : pd.push(kd.NONE);
            return pd
          }, FJ.ThinEngine.prototype.bindAttachments = function(dd) {
            const Jd = this._gl,
              kd = this._currentRenderTarget?.textures;
            if (this._integerMRTAttachmentsMask = 0, kd)
              for (let pd = 0; pd < dd.length; pd++) dd[pd] !== Jd.NONE && kd[pd] && (0, YJ.g)(kd[pd].format) && (this._integerMRTAttachmentsMask |= 1 << pd);
            Jd.drawBuffers(dd)
          }, FJ.ThinEngine.prototype.clearAttachments = function(dd, Jd, kd, pd) {
            let Nd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              Wd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            const Pd = this._currentRenderTarget?.textures;
            let Zd = !1;
            if (kd && dd && Pd)
              for (let gd = 0; gd < Jd.length; gd++) {
                const dd = Pd[gd];
                if (Jd[gd] !== this._gl.NONE && dd && (0, YJ.g)(dd.format)) {
                  if (this._webGLVersion < 2) throw new Error("ThinEngine.clearAttachments: integer MRT attachments require WebGL2");
                  Zd = !0;
                  break
                }
              }
            if (!Zd || !dd || !Pd) return this.bindAttachments(Jd), void this.clear(dd, kd, pd, Nd, Wd);
            this.bindAttachments(Jd), this._applyColorWriteState();
            for (let gd = 0; gd < Jd.length; gd++) {
              const kd = Pd[gd];
              if (Jd[gd] !== this._gl.NONE && kd) {
                let Jd = dd;
                if ((0, YJ.g)(kd.format)) {
                  const pd = (0, YJ.h)(kd.type);
                  Jd = pd ? bJ : SJ;
                  const Nd = pd ? 255 : 1;
                  Jd.r = Math.round(dd.r * Nd), Jd.g = Math.round(dd.g * Nd), Jd.b = Math.round(dd.b * Nd), Jd.a = Math.round(dd.a * Nd)
                }
                this._clearColorAttachment(gd, Jd, kd.format, kd.type)
              }
            }
            if (pd || Nd) {
              const dd = this._integerMRTAttachmentsMask;
              this._integerMRTAttachmentsMask = 0;
              try {
                this.clear(null, !1, pd, Nd, Wd)
              } finally {
                this._integerMRTAttachmentsMask = dd
              }
            }
          }, FJ.ThinEngine.prototype.unBindMultiColorAttachmentFramebuffer = function(dd) {
            let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              kd = arguments.length > 2 ? arguments[2] : void 0;
            this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, dd.disableAutomaticMSAAResolve || this.resolveMultiFramebuffer(dd), Jd || this.generateMipMapsMultiFramebuffer(dd), kd && (dd._MSAAFramebuffer && this._bindUnboundFramebuffer(dd._framebuffer), kd()), this._bindUnboundFramebuffer(null)
          }, FJ.ThinEngine.prototype.createMultipleRenderTarget = function(dd, Jd) {
            let kd, pd = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              Nd = !1,
              Wd = !0,
              Pd = !1,
              Zd = !1,
              gd = 1,
              Cd = 1,
              Kd = [],
              od = [],
              ld = [],
              Qd = [],
              Ld = [],
              Od = [],
              ed = [],
              Rd = [],
              Id = [],
              Gd = !1;
            const vd = this._createHardwareRenderTargetWrapper(!0, !1, dd);
            void 0 !== Jd && (Nd = void 0 !== Jd.generateMipMaps && Jd.generateMipMaps, Wd = void 0 === Jd.generateDepthBuffer || Jd.generateDepthBuffer, Pd = void 0 !== Jd.generateStencilBuffer && Jd.generateStencilBuffer, Zd = void 0 !== Jd.generateDepthTexture && Jd.generateDepthTexture, gd = Jd.tPd ?? 1, Cd = Jd.samples ?? Cd, Kd = Jd.types || Kd, od = Jd.samplingModes || od, ld = Jd.useSRGBBuffers || ld, Qd = Jd.formats || Qd, Ld = Jd.targetTypes || Ld, Od = Jd.faceIndex || Od, ed = Jd.layerIndex || ed, Rd = Jd.layerCounts || Rd, Id = Jd.labels || Id, Gd = Jd.dontCreateTextures ?? !1, this.uL > 1 && (13 === Jd.depthTextureFormat || 17 === Jd.depthTextureFormat || 16 === Jd.depthTextureFormat || 14 === Jd.depthTextureFormat || 18 === Jd.depthTextureFormat) && (kd = Jd.depthTextureFormat)), void 0 === kd && (kd = Pd ? 13 : 14);
            const xd = this._gl,
              qd = this._currentFramebuffer,
              Bd = xd.createFramebuffer();
            this._bindUnboundFramebuffer(Bd);
            const sd = dd.width ?? dd,
              ad = dd.height ?? dd,
              Md = [],
              Yd = [],
              md = this.uL > 1 && (13 === kd || 17 === kd || 18 === kd);
            vd.label = Jd?.label ?? "MultiRenderTargetWrapper", vd._framebuffer = Bd, vd._generateDepthBuffer = Zd || Wd, vd._generateStencilBuffer = Zd ? md : Pd, vd._depthStencilBuffer = this._setupFramebufferDepthAttachments(vd._generateStencilBuffer, vd._generateDepthBuffer, sd, ad, 1, kd), vd._attachments = Yd;
            for (let bd = 0; bd < gd; bd++) {
              let dd = od[bd] || 3,
                Jd = Kd[bd] || 0,
                kd = ld[bd] || !1;
              const pd = Qd[bd] || 5,
                Wd = Ld[bd] || 3553,
                Pd = Rd[bd] ?? 1;
              (1 !== Jd || this._caps.textureFloatLinearFiltering) && (2 !== Jd || this._caps.textureHalfFloatLinearFiltering) || (dd = 1);
              const Zd = this._getSamplingParameters(dd, Nd);
              1 !== Jd || this._caps.textureFloat || (Jd = 0, Fd.c.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type")), kd = kd && this._caps.supportSRGBBuffers && (this.uL > 1 || this.isWebGPU);
              const gd = this.uL > 1,
                Cd = xd[gd ? "COLOR_ATTACHMENT" + bd : "COLOR_ATTACHMENT" + bd + "_WEBGL"];
              if (Yd.push(Cd), -1 === Wd || Gd) continue;
              const Od = new MJ.b(this, 6);
              Md[bd] = Od, xd.activeTexture(xd["TEXTURE" + bd]), xd.bindTexture(Wd, Od._hardwareTexture.underlyingResource), xd.texParameteri(Wd, xd.TEXTURE_MAG_FILTER, Zd.mag), xd.texParameteri(Wd, xd.TEXTURE_MIN_FILTER, Zd.min), xd.texParameteri(Wd, xd.TEXTURE_WRAP_S, xd.CLAMP_TO_EDGE), xd.texParameteri(Wd, xd.TEXTURE_WRAP_T, xd.CLAMP_TO_EDGE);
              const ed = this._getRGBABufferInternalSizedFormat(Jd, pd, kd),
                qd = this._getInternalFormat(pd),
                Bd = this._getWebGLTextureType(Jd);
              if (!gd || 35866 !== Wd && 32879 !== Wd)
                if (34067 === Wd) {
                  for (let dd = 0; dd < 6; dd++) xd.texImage2D(xd.TEXTURE_CUBE_MAP_POSITIVE_X + dd, 0, ed, sd, ad, 0, qd, Bd, null);
                  Od.isCube = !0
                } else xd.texImage2D(xd.TEXTURE_2D, 0, ed, sd, ad, 0, qd, Bd, null);
              else 35866 === Wd ? Od.is2DArray = !0 : Od.is3D = !0, Od.baseDepth = Od.depth = Pd, xd.texImage3D(Wd, 0, ed, sd, ad, Pd, 0, qd, Bd, null);
              Nd && xd.generateMipmap(Wd), this._bindTextureDirectly(Wd, null), Od.baseWidth = sd, Od.baseHeight = ad, Od.width = sd, Od.height = ad, Od.isReady = !0, Od.samples = 1, Od.generateMipMaps = Nd, Od.samplingMode = dd, Od.type = Jd, Od._useSRGBBuffer = kd, Od.format = pd, Od.label = Id[bd] ?? vd.label + "-Texture" + bd, this._internalTexturesCache.push(Od)
            }
            if (Zd && this._caps.depthTextureExtension && !Gd) {
              const dd = new MJ.b(this, 14);
              let Jd = 5,
                pd = xd.DEPTH_COMPONENT16,
                Wd = xd.DEPTH_COMPONENT,
                Pd = xd.UNSIGNED_SHORT,
                Zd = xd.DEPTH_ATTACHMENT;
              this.uL < 2 ? pd = xd.DEPTH_COMPONENT : 14 === kd ? (Jd = 1, Pd = xd.FLOAT, pd = xd.DEPTH_COMPONENT32F) : 18 === kd ? (Jd = 0, Pd = xd.FLOAT_32_UNSIGNED_INT_24_8_REV, pd = xd.DEPTH32F_STENCIL8, Wd = xd.DEPTH_STENCIL, Zd = xd.DEPTH_STENCIL_ATTACHMENT) : 16 === kd ? (Jd = 0, Pd = xd.UNSIGNED_INT, pd = xd.DEPTH_COMPONENT24, Zd = xd.DEPTH_ATTACHMENT) : 13 !== kd && 17 !== kd || (Jd = 12, Pd = xd.UNSIGNED_INT_24_8, pd = xd.DEPTH24_STENCIL8, Wd = xd.DEPTH_STENCIL, Zd = xd.DEPTH_STENCIL_ATTACHMENT), this._bindTextureDirectly(xd.TEXTURE_2D, dd, !0), xd.texParameteri(xd.TEXTURE_2D, xd.TEXTURE_MAG_FILTER, xd.NEAREST), xd.texParameteri(xd.TEXTURE_2D, xd.TEXTURE_MIN_FILTER, xd.NEAREST), xd.texParameteri(xd.TEXTURE_2D, xd.TEXTURE_WRAP_S, xd.CLAMP_TO_EDGE), xd.texParameteri(xd.TEXTURE_2D, xd.TEXTURE_WRAP_T, xd.CLAMP_TO_EDGE), xd.texImage2D(xd.TEXTURE_2D, 0, pd, sd, ad, 0, Wd, Pd, null), xd.framebufferTexture2D(xd.FRAMEBUFFER, Zd, xd.TEXTURE_2D, dd._hardwareTexture.underlyingResource, 0), this._bindTextureDirectly(xd.TEXTURE_2D, null), vd._depthStencilTexture = dd, vd._depthStencilTextureWithStencil = md, dd.baseWidth = sd, dd.baseHeight = ad, dd.width = sd, dd.height = ad, dd.isReady = !0, dd.samples = 1, dd.generateMipMaps = Nd, dd.samplingMode = 1, dd.format = kd, dd.type = Jd, dd.label = vd.label + "-DepthStencil", Md[gd] = dd, this._internalTexturesCache.push(dd)
            }
            if (vd.setTextures(Md), pd && xd.drawBuffers(Yd), this._bindUnboundFramebuffer(qd), vd.setLayerAndFaceIndices(ed, Od), this.resetTextureCache(), Gd) {
              if (Cd > 1) {
                const dd = xd.createFramebuffer();
                if (!dd) throw new Error("Unable to create multi sampled framebuffer");
                vd._samples = Cd, vd._MSAAFramebuffer = dd, gd > 0 && pd && (this._bindUnboundFramebuffer(dd), xd.drawBuffers(Yd), this._bindUnboundFramebuffer(qd))
              }
            } else this.updateMultipleRenderTargetTextureSampleCount(vd, Cd, pd);
            return vd
          }, FJ.ThinEngine.prototype.updateMultipleRenderTargetTextureSampleCount = function(dd, Jd) {
            let kd = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (this.uL < 2 || !dd) return 1;
            if (dd.samples === Jd) return Jd;
            const pd = this._gl;
            Jd = Math.min(Jd, this.getCaps().maxMSAASamples), dd._depthStencilBuffer && (pd.deleteRenderbuffer(dd._depthStencilBuffer), dd._depthStencilBuffer = null), dd._MSAAFramebuffer && (pd.deleteFramebuffer(dd._MSAAFramebuffer), dd._MSAAFramebuffer = null);
            const Nd = dd._attachments.length;
            for (let Pd = 0; Pd < Nd; Pd++) {
              const Jd = dd.textures[Pd]._hardwareTexture;
              Jd?.releaseMSAARenderBuffers()
            }
            if (Jd > 1 && "function" === typeof pd.renderbufferStorageMultisample) {
              const Wd = pd.createFramebuffer();
              if (!Wd) throw new Error("Unable to create multi sampled framebuffer");
              dd._MSAAFramebuffer = Wd, this._bindUnboundFramebuffer(Wd);
              const Pd = [];
              for (let kd = 0; kd < Nd; kd++) {
                const Nd = dd.textures[kd],
                  Wd = Nd._hardwareTexture,
                  Zd = pd[this.uL > 1 ? "COLOR_ATTACHMENT" + kd : "COLOR_ATTACHMENT" + kd + "_WEBGL"],
                  gd = this._createRenderBuffer(Nd.width, Nd.height, Jd, -1, this._getRGBABufferInternalSizedFormat(Nd.type, Nd.format, Nd._useSRGBBuffer), Zd);
                if (!gd) throw new Error("Unable to create multi sampled framebuffer");
                Wd.addMSAARenderBuffer(gd), Nd.samples = Jd, Pd.push(Zd)
              }
              kd && pd.drawBuffers(Pd)
            } else this._bindUnboundFramebuffer(dd._framebuffer);
            const Wd = dd._depthStencilTexture ? dd._depthStencilTexture.format : void 0;
            return dd._depthStencilBuffer = this._setupFramebufferDepthAttachments(dd._generateStencilBuffer, dd._generateDepthBuffer, dd.width, dd.height, Jd, Wd), this._bindUnboundFramebuffer(null), dd._samples = Jd, Jd
          }, FJ.ThinEngine.prototype.generateMipMapsMultiFramebuffer = function(dd) {
            const Jd = dd,
              kd = this._gl;
            if (Jd.isMulti)
              for (let pd = 0; pd < Jd._attachments.length; pd++) {
                const dd = Jd.textures[pd];
                !dd?.generateMipMaps || dd?.isCube || dd?.is3D || (this._bindTextureDirectly(kd.TEXTURE_2D, dd, !0), kd.generateMipmap(kd.TEXTURE_2D), this._bindTextureDirectly(kd.TEXTURE_2D, null))
              }
          }, FJ.ThinEngine.prototype.resolveMultiFramebuffer = function(dd) {
            const Jd = dd,
              kd = this._gl;
            if (!Jd._MSAAFramebuffer || !Jd.isMulti) return;
            let pd = Jd.resolveMSAAColors ? kd.COLOR_BUFFER_BIT : 0;
            pd |= Jd._generateDepthBuffer && Jd.resolveMSAADepth ? kd.DEPTH_BUFFER_BIT : 0, pd |= Jd._generateStencilBuffer && Jd.resolveMSAAStencil ? kd.STENCIL_BUFFER_BIT : 0;
            const Nd = Jd._attachments,
              Wd = Nd.length;
            kd.bindFramebuffer(kd.READ_FRAMEBUFFER, Jd._MSAAFramebuffer), kd.bindFramebuffer(kd.DRAW_FRAMEBUFFER, Jd._framebuffer);
            for (let Pd = 0; Pd < Wd; Pd++) {
              const dd = Jd.textures[Pd];
              for (let Jd = 0; Jd < Wd; Jd++) Nd[Jd] = kd.NONE;
              Nd[Pd] = kd[this.uL > 1 ? "COLOR_ATTACHMENT" + Pd : "COLOR_ATTACHMENT" + Pd + "_WEBGL"], kd.readBuffer(Nd[Pd]), kd.drawBuffers(Nd), kd.blitFramebuffer(0, 0, dd.width, dd.height, 0, 0, dd.width, dd.height, pd, kd.NEAREST)
            }
            for (let Pd = 0; Pd < Wd; Pd++) Nd[Pd] = kd[this.uL > 1 ? "COLOR_ATTACHMENT" + Pd : "COLOR_ATTACHMENT" + Pd + "_WEBGL"];
            kd.drawBuffers(Nd), kd.bindFramebuffer(this._gl.FRAMEBUFFER, Jd._MSAAFramebuffer)
          }), !this.isSupported) return void this.dispose();
        this._textureNames = Wd;
        const od = [],
          ld = [],
          Qd = [],
          Ld = [],
          Od = [],
          ed = [],
          Rd = [],
          Id = [];
        this._initTypes(kd, od, ld, Qd, Ld, Od, ed, Rd, Id, Nd);
        const Gd = !Nd || void 0 === Nd.generateDepthBuffer || Nd.generateDepthBuffer,
          vd = !(!Nd || void 0 === Nd.generateStencilBuffer) && Nd.generateStencilBuffer,
          xd = Nd && Nd.samples ? Nd.samples : 1;
        this._multiRenderTargetOptions = {
          samplingModes: ld,
          generateMipMaps: Pd,
          generateDepthBuffer: Gd,
          generateStencilBuffer: vd,
          generateDepthTexture: Zd,
          depthTextureFormat: gd,
          types: od,
          tPd: kd,
          useSRGBBuffers: Qd,
          samples: xd,
          formats: Ld,
          targetTypes: Od,
          faceIndex: ed,
          layerIndex: Rd,
          layerCounts: Id,
          labels: Wd,
          label: dd
        }, this._count = kd, this._drawOnlyOnFirstAttachmentByDefault = Kd, kd > 0 && (this._createInternalTextures(), this._createTextures(Wd))
      }
      _initTypes(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd) {
        for (let Kd = 0; Kd < dd; Kd++) Cd && Cd.types && void 0 !== Cd.types[Kd] ? Jd.push(Cd.types[Kd]) : Jd.push(Cd && Cd.defaultType ? Cd.defaultType : 0), Cd && Cd.samplingModes && void 0 !== Cd.samplingModes[Kd] ? kd.push(Cd.samplingModes[Kd]) : kd.push(md.c.BILINEAR_SAMPLINGMODE), Cd && Cd.useSRGBBuffers && void 0 !== Cd.useSRGBBuffers[Kd] ? pd.push(Cd.useSRGBBuffers[Kd]) : pd.push(!1), Cd && Cd.formats && void 0 !== Cd.formats[Kd] ? Nd.push(Cd.formats[Kd]) : Nd.push(5), Cd && Cd.targetTypes && void 0 !== Cd.targetTypes[Kd] ? Wd.push(Cd.targetTypes[Kd]) : Wd.push(3553), Cd && Cd.faceIndex && void 0 !== Cd.faceIndex[Kd] ? Pd.push(Cd.faceIndex[Kd]) : Pd.push(0), Cd && Cd.layerIndex && void 0 !== Cd.layerIndex[Kd] ? Zd.push(Cd.layerIndex[Kd]) : Zd.push(0), Cd && Cd.layerCounts && void 0 !== Cd.layerCounts[Kd] ? gd.push(Cd.layerCounts[Kd]) : gd.push(1)
      }
      _createInternaTextureIndexMapping() {
        const dd = {},
          Jd = [];
        if (!this._renderTarget) return Jd;
        const kd = this._renderTarget.textures;
        for (let pd = 0; pd < kd.length; pd++) {
          const Nd = kd[pd];
          if (!Nd) continue;
          const Wd = dd[Nd.uniqueId];
          void 0 !== Wd ? Jd[pd] = Wd : dd[Nd.uniqueId] = pd
        }
        return Jd
      }
      _rebuild() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          kd = arguments.length > 2 ? arguments[2] : void 0;
        if (this._count < 1 || dd) return;
        const pd = this._createInternaTextureIndexMapping();
        this.releaseInternalTextures(), this._createInternalTextures(), Jd && (this._releaseTextures(), this._createTextures(kd));
        const Nd = this._renderTarget.textures;
        for (let Wd = 0; Wd < Nd.length; Wd++) {
          const dd = this._textures[Wd];
          void 0 !== pd[Wd] && this._renderTarget.setTexture(Nd[pd[Wd]], Wd), dd._texture = Nd[Wd], dd._texture && (dd._noMipmap = !dd._texture.useMipMaps, dd._useSRGBBuffer = dd._texture._useSRGBBuffer)
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
        const Jd = this._renderTarget.textures;
        this._textures = [];
        for (let kd = 0; kd < Jd.length; kd++) {
          const pd = new md.c(null, this.Wm());
          dd?.[kd] && (pd.name = dd[kd]), pd._texture = Jd[kd], pd._texture && (pd._noMipmap = !pd._texture.useMipMaps, pd._useSRGBBuffer = pd._texture._useSRGBBuffer), this._textures.push(pd)
        }
      }
      setInternalTexture(dd, Jd) {
        let kd = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this.renderTarget && (0 === Jd && (this._texture = dd), this.renderTarget.setTexture(dd, Jd, kd), this.textures[Jd] || (this.textures[Jd] = new md.c(null, this.Wm()), this.textures[Jd].name = this._textureNames?.[Jd] ?? this.textures[Jd].name), this.textures[Jd]._texture = dd, this.textures[Jd]._noMipmap = !dd.useMipMaps, this.textures[Jd]._useSRGBBuffer = dd._useSRGBBuffer, this._count = this.renderTarget.textures ? this.renderTarget.textures.length : 0, this._multiRenderTargetOptions.types && (this._multiRenderTargetOptions.types[Jd] = dd.type), this._multiRenderTargetOptions.samplingModes && (this._multiRenderTargetOptions.samplingModes[Jd] = dd.samplingMode), this._multiRenderTargetOptions.useSRGBBuffers && (this._multiRenderTargetOptions.useSRGBBuffers[Jd] = dd._useSRGBBuffer), this._multiRenderTargetOptions.targetTypes && -1 !== this._multiRenderTargetOptions.targetTypes[Jd])) {
          let kd;
          kd = dd.is2DArray ? 35866 : dd.isCube ? 34067 : dd.is3D ? 32879 : 3553, this._multiRenderTargetOptions.targetTypes[Jd] = kd
        }
      }
      setLayerAndFaceIndex(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        this.textures[dd] && this.renderTarget && (this._multiRenderTargetOptions.layerIndex && (this._multiRenderTargetOptions.layerIndex[dd] = Jd), this._multiRenderTargetOptions.faceIndex && (this._multiRenderTargetOptions.faceIndex[dd] = kd), this.renderTarget.setLayerAndFaceIndex(dd, Jd, kd))
      }
      setLayerAndFaceIndices(dd, Jd) {
        this.renderTarget && (this._multiRenderTargetOptions.layerIndex = dd, this._multiRenderTargetOptions.faceIndex = Jd, this.renderTarget.setLayerAndFaceIndices(dd, Jd))
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
      updateCount(dd, Jd, kd) {
        this._multiRenderTargetOptions.tPd = dd, this._count = dd;
        const pd = [],
          Nd = [],
          Wd = [],
          Pd = [],
          Zd = [],
          gd = [],
          Cd = [],
          Kd = [];
        this._textureNames = kd, this._initTypes(dd, pd, Nd, Wd, Pd, Zd, gd, Cd, Kd, Jd), this._multiRenderTargetOptions.types = pd, this._multiRenderTargetOptions.samplingModes = Nd, this._multiRenderTargetOptions.useSRGBBuffers = Wd, this._multiRenderTargetOptions.formats = Pd, this._multiRenderTargetOptions.targetTypes = Zd, this._multiRenderTargetOptions.faceIndex = gd, this._multiRenderTargetOptions.layerIndex = Cd, this._multiRenderTargetOptions.layerCounts = Kd, this._multiRenderTargetOptions.labels = kd, this._rebuild(!1, !0, kd)
      }
      _unbindFrameBuffer(dd, Jd) {
        this._renderTarget && dd.unBindMultiColorAttachmentFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(Jd)
        }))
      }
      dispose() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._releaseTextures(), dd ? this._texture = null : this.releaseInternalTextures(), super.dispose()
      }
      releaseInternalTextures() {
        const dd = this._renderTarget?.textures;
        if (dd) {
          for (let Jd = dd.length - 1; Jd >= 0; Jd--) this._textures[Jd]._texture = null;
          this._renderTarget?.dispose(), this._renderTarget = null
        }
      }
    }
    var XJ = kd(40147);
    class fJ {
      constructor(dd) {
        this.name = XJ.b.NAME_GEOMETRYBUFFERRENDERER, this.BO = dd
      }
      register() {
        this.BO._gatherRenderTargetsStage.registerStep(XJ.b.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER, this, this._gatherRenderTargets)
      }
      rebuild() {}
      dispose() {}
      _gatherRenderTargets(dd) {
        this.BO._geometryBufferRenderer && dd.push(this.BO._geometryBufferRenderer.getGBuffer())
      }
    }
    let nJ = !1;
    var UJ;
    ! function(dd) {
      dd[dd.Small = 0] = "Small", dd[dd.Medium = 1] = "Medium", dd[dd.Large = 2] = "Large", dd[dd.ExtraLarge = 3] = "ExtraLarge"
    }(UJ || (UJ = {}));
    const yJ = ["diffuseSampler", "bumpSampler", "reflectivitySampler", "albedoSampler", "morphTargets", "boneSampler", "transmissionWeightSampler", "subsurfaceWeightSampler", "iblShadowSampler"],
      DJ = ["world", "mBones", "viewProjection", "diffuseMatrix", "alphaCutOff", "view", "previousWorld", "previousViewProjection", "mPreviousBones", "bumpMatrix", "reflectivityMatrix", "albedoMatrix", "reflectivityColor", "albedoColor", "reflectionMatrix", "vTransmissionWeight", "vSubsurfaceWeight", "vEyePosition", "vTransmissionScatterAnisotropy", "vSubsurfaceScatterAnisotropy", "shadowTextureSize", "metallic", "glossiness", "vTangentSpaceParams", "vBumpInfos", "morphTargetInfluences", "morphTargetCount", "morphTargetTextureInfo", "morphTargetTextureIndices", "boneTextureInfo", "objectId", "meshBlendTag"];
    class TJ {
      get renderTransparentMeshes() {
        return this._renderTransparentMeshes
      }
      set renderTransparentMeshes(dd) {
        if (dd && this._enableMeshBlendTag && !this._scene.eL().getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
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
      _forceTextureType(dd, Jd) {
        dd === TJ.POSITION_TEXTURE_TYPE ? (this._positionIndex = Jd, this._enablePosition = !0) : dd === TJ.VELOCITY_TEXTURE_TYPE ? (this._velocityIndex = Jd, this._enableVelocity = !0) : dd === TJ.VELOCITY_LINEAR_TEXTURE_TYPE ? (this._velocityLinearIndex = Jd, this._enableVelocityLinear = !0) : dd === TJ.REFLECTIVITY_TEXTURE_TYPE ? (this._reflectivityIndex = Jd, this._enableReflectivity = !0) : dd === TJ.DEPTH_TEXTURE_TYPE ? (this._depthIndex = Jd, this._enableDepth = !0) : dd === TJ.NORMAL_TEXTURE_TYPE ? (this._normalIndex = Jd, this._enableNormal = !0) : dd === TJ.SCREENSPACE_DEPTH_TEXTURE_TYPE ? (this._screenspaceDepthIndex = Jd, this._enableScreenspaceDepth = !0) : dd === TJ.IRRADIANCE_TEXTURE_TYPE ? (this._irradianceIndex = Jd, this._enableIrradiance = !0) : dd === TJ.OBJECT_ID_TEXTURE_TYPE ? (this._objectIdIndex = Jd, this._enableObjectId = !0) : dd === TJ.MESH_BLEND_TAG_TEXTURE_TYPE && (this._meshBlendTagIndex = Jd, this._enableMeshBlendTag = !0)
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
          case TJ.POSITION_TEXTURE_TYPE:
            return this._positionIndex;
          case TJ.VELOCITY_TEXTURE_TYPE:
            return this._velocityIndex;
          case TJ.VELOCITY_LINEAR_TEXTURE_TYPE:
            return this._velocityLinearIndex;
          case TJ.REFLECTIVITY_TEXTURE_TYPE:
            return this._reflectivityIndex;
          case TJ.DEPTH_TEXTURE_TYPE:
            return this._depthIndex;
          case TJ.NORMAL_TEXTURE_TYPE:
            return this._normalIndex;
          case TJ.SCREENSPACE_DEPTH_TEXTURE_TYPE:
            return this._screenspaceDepthIndex;
          case TJ.IRRADIANCE_TEXTURE_TYPE:
            return this._irradianceIndex;
          case TJ.OBJECT_ID_TEXTURE_TYPE:
            return this._objectIdIndex;
          case TJ.MESH_BLEND_TAG_TEXTURE_TYPE:
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
          const dd = this._scene.eL(),
            Jd = Math.min(dd.getCaps().maxDrawBuffers ?? 1, 8),
            kd = this._assignRenderTargetIndices()[0] + 1;
          if (dd.getCaps().drawBuffersExtension && kd > Jd) throw new Error(`GeometryBufferRenderer: ${kd} color attachments were requested, but this engine supports at most ${Jd}`)
        }
        this._enableObjectId = dd, dd || (this._objectIdIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableMeshBlendingTag() {
        return this._enableMeshBlendTag
      }
      set enableMeshBlendingTag(dd) {
        if (this._enableMeshBlendTag !== dd) {
          if (dd) {
            const dd = this._scene.eL();
            if (! function(dd) {
                return "NATIVE" !== dd.shaderPlatformName && (dd.isWebGPU || 2 === dd.uL)
              }(dd)) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require WebGL2 or WebGPU");
            if (this.renderTransparentMeshes && !dd.isWebGPU && !dd.getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
            if (this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: mesh-blending tag textures are not supported when linked to the PrePassRenderer");
            if (1 !== this.samples) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
            if (!this._enableMeshBlendTag) {
              const Jd = Math.min(dd.getCaps().maxDrawBuffers ?? 1, 8),
                kd = this._assignRenderTargetIndices()[0] + 1;
              if (dd.getCaps().drawBuffersExtension && kd > Jd) throw new Error(`GeometryBufferRenderer: ${kd} color attachments were requested, but this engine supports at most ${Jd}`)
            }
          }
          this._enableMeshBlendTag = dd, dd || (this._meshBlendTagIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
        }
      }
      get BO() {
        return this._scene
      }
      get ratio() {
        return "object" === typeof this._ratioOrDimensions ? 1 : this._ratioOrDimensions
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
          pd = arguments.length > 3 ? arguments[3] : void 0;
        var Nd;
        this._previousTransformationMatrices = {}, this._previousBonesTransformationMatrices = {}, this.excludedSkinnedMeshesFromVelocity = [], this._renderTransparentMeshes = !0, this.generateNormalsInWorldSpace = !1, this._normalsAreUnsigned = !1, this._resizeObserver = null, this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableReflectivity = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._clearColor = new ud.g(0, 0, 0, 0), this._clearDepthColor = new ud.g(0, 0, 0, 1), this._positionIndex = -1, this._velocityIndex = -1, this._velocityLinearIndex = -1, this._reflectivityIndex = -1, this._depthIndex = -1, this._normalIndex = -1, this._screenspaceDepthIndex = -1, this._irradianceIndex = -1, this._objectIdIndex = -1, this._meshBlendTagIndex = -1, this._linkedWithPrePass = !1, this.generateIrradianceWithScatterMask = !1, this.useSpecificClearForDepthTexture = !1, this._shaderLanguage = 0, this._shadersLoaded = !1, this._scene = dd, this._ratioOrDimensions = Jd, this._useUbo = dd.eL().supportsUniformBuffers, this._depthFormat = kd, this._textureTypesAndFormats = pd || {}, this._initShaderSourceAsync(), Nd = TJ, nJ || (nJ = !0, Object.defineProperty(Ud.i.prototype, "geometryBufferRenderer", {
          get: function() {
            return this._geometryBufferRenderer
          },
          set: function(dd) {
            dd && dd.isSupported && (this._geometryBufferRenderer = dd)
          },
          enumerable: !0,
          configurable: !0
        }), Ud.i.prototype.enableGeometryBufferRenderer = function() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15,
            kd = arguments.length > 2 ? arguments[2] : void 0;
          return this._geometryBufferRenderer || (this._geometryBufferRenderer = new Nd(this, dd, Jd, kd), this._geometryBufferRenderer.isSupported || (this._geometryBufferRenderer = null)), this._geometryBufferRenderer
        }, Ud.i.prototype.disableGeometryBufferRenderer = function() {
          this._geometryBufferRenderer && (this._geometryBufferRenderer.dispose(), this._geometryBufferRenderer = null)
        }, Nd._SceneComponentInitialization = dd => {
          let Jd = dd._getComponent(XJ.b.NAME_GEOMETRYBUFFERRENDERER);
          Jd || (Jd = new fJ(dd), dd.Cpd(Jd))
        }), TJ._SceneComponentInitialization(this._scene), this._createRenderTargets()
      }
      async _initShaderSourceAsync() {
        this._scene.eL().isWebGPU && !TJ.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([kd.e(328).then((() => kd(61556))), Promise.all([kd.e(327), kd.e(339)]).then((() => kd(61559)))])) : await Promise.all([kd.e(311).then((() => kd(61562))), kd.e(310).then((() => kd(61569)))]), this._shadersLoaded = !0
      }
      isReady(dd, Jd) {
        if (!this._shadersLoaded) return !1;
        const kd = dd.qL();
        if (kd && kd.disableDepthWrite) return !1;
        if (function(dd) {
            return dd._isGaussianSplatting || "GaussianSplattingMesh" === (Jd = dd.getClassName()) || "GaussianSplattingStream" === Jd;
            var Jd
          }(dd.getMesh())) return !1;
        const pd = [],
          Nd = [Dd.j.PositionKind],
          Wd = dd.getMesh();
        Wd.isVerticesDataPresent(Dd.j.NormalKind) && (pd.push("#define HAS_NORMAL_ATTRIBUTE"), Nd.push(Dd.j.NormalKind));
        let Pd = !1,
          Zd = !1;
        if (kd) {
          let dd = !1;
          if (kd.needAlphaTestingForMesh(Wd) && kd.getAlphaTestTexture() && (pd.push("#define ALPHATEST"), pd.push(`#define ALPHATEST_UV${kd.getAlphaTestTexture().coordinatesIndex+1}`), dd = !0), (kd.bumpTexture || kd.normalTexture || kd.geometryNormalTexture) && Hd.e.BumpTextureEnabled) {
            const Jd = kd.bumpTexture || kd.normalTexture || kd.geometryNormalTexture;
            pd.push("#define BUMP"), pd.push(`#define BUMP_UV${Jd.coordinatesIndex+1}`), dd = !0
          }
          if (this._enableReflectivity) {
            let Jd = !1;
            if ("PBRMetallicRoughnessMaterial" === kd.getClassName()) kd.metallicRoughnessTexture && (pd.push("#define ORMTEXTURE"), pd.push(`#define REFLECTIVITY_UV${kd.metallicRoughnessTexture.coordinatesIndex+1}`), pd.push("#define METALLICWORKFLOW"), dd = !0, Jd = !0), null != kd.metallic && (pd.push("#define METALLIC"), pd.push("#define METALLICWORKFLOW"), Jd = !0), null != kd.roughness && (pd.push("#define ROUGHNESS"), pd.push("#define METALLICWORKFLOW"), Jd = !0), Jd && (kd.baseTexture && (pd.push("#define ALBEDOTEXTURE"), pd.push(`#define ALBEDO_UV${kd.baseTexture.coordinatesIndex+1}`), kd.baseTexture.gammaSpace && pd.push("#define GAMMAALBEDO"), dd = !0), kd.baseColor && pd.push("#define ALBEDOCOLOR"));
            else if ("PBRSpecularGlossinessMaterial" === kd.getClassName()) kd.specularGlossinessTexture ? (pd.push("#define SPECULARGLOSSINESSTEXTURE"), pd.push(`#define REFLECTIVITY_UV${kd.specularGlossinessTexture.coordinatesIndex+1}`), dd = !0, kd.specularGlossinessTexture.gammaSpace && pd.push("#define GAMMAREFLECTIVITYTEXTURE")) : kd.specularColor && pd.push("#define REFLECTIVITYCOLOR"), null != kd.glossiness && pd.push("#define GLOSSINESS");
            else if ("PBRMaterial" === kd.getClassName()) kd.metallicTexture && (pd.push("#define ORMTEXTURE"), pd.push(`#define REFLECTIVITY_UV${kd.metallicTexture.coordinatesIndex+1}`), pd.push("#define METALLICWORKFLOW"), dd = !0, Jd = !0), null != kd.metallic && (pd.push("#define METALLIC"), pd.push("#define METALLICWORKFLOW"), Jd = !0), null != kd.roughness && (pd.push("#define ROUGHNESS"), pd.push("#define METALLICWORKFLOW"), Jd = !0), Jd ? (kd.albedoTexture && (pd.push("#define ALBEDOTEXTURE"), pd.push(`#define ALBEDO_UV${kd.albedoTexture.coordinatesIndex+1}`), kd.albedoTexture.gammaSpace && pd.push("#define GAMMAALBEDO"), dd = !0), kd.albedoColor && pd.push("#define ALBEDOCOLOR")) : (kd.reflectivityTexture ? (pd.push("#define SPECULARGLOSSINESSTEXTURE"), pd.push(`#define REFLECTIVITY_UV${kd.reflectivityTexture.coordinatesIndex+1}`), kd.reflectivityTexture.gammaSpace && pd.push("#define GAMMAREFLECTIVITYTEXTURE"), dd = !0) : kd.reflectivityColor && pd.push("#define REFLECTIVITYCOLOR"), null != kd.microSurface && pd.push("#define GLOSSINESS"));
            else if ("StandardMaterial" === kd.getClassName()) kd.specularTexture && (pd.push("#define REFLECTIVITYTEXTURE"), pd.push(`#define REFLECTIVITY_UV${kd.specularTexture.coordinatesIndex+1}`), kd.specularTexture.gammaSpace && pd.push("#define GAMMAREFLECTIVITYTEXTURE"), dd = !0), kd.specularColor && pd.push("#define REFLECTIVITYCOLOR");
            else if ("OpenPBRMaterial" === kd.getClassName()) {
              const Jd = kd;
              pd.push("#define METALLIC"), pd.push("#define ROUGHNESS"), Jd._useRoughnessFromMetallicTextureGreen && Jd.baseMetalnessTexture ? (pd.push("#define ORMTEXTURE"), pd.push(`#define REFLECTIVITY_UV${Jd.baseMetalnessTexture.coordinatesIndex+1}`), dd = !0) : Jd.baseMetalnessTexture ? (pd.push("#define METALLIC_TEXTURE"), pd.push(`#define METALLIC_UV${Jd.baseMetalnessTexture.coordinatesIndex+1}`), dd = !0) : Jd.specularRoughnessTexture && (pd.push("#define ROUGHNESS_TEXTURE"), pd.push(`#define ROUGHNESS_UV${Jd.specularRoughnessTexture.coordinatesIndex+1}`), dd = !0), Jd.baseColorTexture && (pd.push("#define ALBEDOTEXTURE"), pd.push(`#define ALBEDO_UV${Jd.baseColorTexture.coordinatesIndex+1}`), Jd.baseColorTexture.gammaSpace && pd.push("#define GAMMAALBEDO"), dd = !0), Jd.baseColor && pd.push("#define ALBEDOCOLOR")
            }
          }
          if (this._enableIrradiance && this.generateIrradianceWithScatterMask && (pd.push("#define IRRADIANCE_SCATTER_MASK"), "OpenPBRMaterial" === kd.getClassName())) {
            const Jd = kd;
            Jd.subsurfaceWeight > 0 && Jd.subsurfaceWeightTexture && (pd.push("#define SUBSURFACE_WEIGHT"), pd.push(`#define SUBSURFACEWEIGHT_UV${Jd.subsurfaceWeightTexture.coordinatesIndex+1}`), dd = !0), Jd.transmissionWeight > 0 && Jd.transmissionWeightTexture && (pd.push("#define TRANSMISSION_WEIGHT"), pd.push(`#define TRANSMISSIONWEIGHT_UV${Jd.transmissionWeightTexture.coordinatesIndex+1}`), dd = !0)
          }
          dd && (pd.push("#define NEED_UV"), Wd.isVerticesDataPresent(Dd.j.UVKind) && (Nd.push(Dd.j.UVKind), pd.push("#define UV1"), Pd = !0), Wd.isVerticesDataPresent(Dd.j.UV2Kind) && (Nd.push(Dd.j.UV2Kind), pd.push("#define UV2"), Zd = !0))
        }
        if (this._enableDepth && (pd.push("#define DEPTH"), pd.push("#define DEPTH_INDEX " + this._depthIndex)), this._enableNormal && (pd.push("#define NORMAL"), pd.push("#define NORMAL_INDEX " + this._normalIndex)), this._enablePosition && (pd.push("#define POSITION"), pd.push("#define POSITION_INDEX " + this._positionIndex)), this._enableVelocity && (pd.push("#define VELOCITY"), pd.push("#define VELOCITY_INDEX " + this._velocityIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(Wd) && pd.push("#define BONES_VELOCITY_ENABLED")), this._enableVelocityLinear && (pd.push("#define VELOCITY_LINEAR"), pd.push("#define VELOCITY_LINEAR_INDEX " + this._velocityLinearIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(Wd) && pd.push("#define BONES_VELOCITY_ENABLED")), this._enableReflectivity && (pd.push("#define REFLECTIVITY"), pd.push("#define REFLECTIVITY_INDEX " + this._reflectivityIndex)), this._enableScreenspaceDepth && -1 !== this._screenspaceDepthIndex && (pd.push("#define SCREENSPACE_DEPTH_INDEX " + this._screenspaceDepthIndex), pd.push("#define SCREENSPACE_DEPTH")), this._enableIrradiance && -1 !== this._irradianceIndex) {
          pd.push("#define IRRADIANCE_INDEX " + this._irradianceIndex), pd.push("#define IRRADIANCE");
          const dd = this._scene;
          if (dd.environmentTexture) {
            const Jd = {};
            let Nd = !1,
              Wd = 0;
            "OpenPBRMaterial" !== kd.getClassName() && "StandardMaterial" !== kd.getClassName() && "PBRMetallicRoughnessMaterial" !== kd.getClassName() && "PBRSpecularGlossinessMaterial" !== kd.getClassName() && "PBRMaterial" !== kd.getClassName() || (Nd = !!kd.realtimeFiltering, Wd = kd.realtimeFilteringQuality || 0), (0, Ad.Z)(dd, dd.environmentTexture, Jd, Nd, Wd, !0);
            for (const dd in Jd) Jd[dd] && pd.push("#define " + dd);
            Jd.USEIRRADIANCEMAP || pd.push("#define SPHERICAL_HARMONICS");
            const Pd = dd.postProcessRenderPipelineManager.supportedPipelines.find((dd => "IBLShadowsRenderPipeline" === dd.getClassName()));
            if (Pd) {
              const dd = Pd;
              dd._getAccumulatedTexture() && (pd.push("#define IBL_SHADOW_TEXTURE"), dd.coloredShadows && pd.push("#define COLORED_IBL_SHADOWS"))
            }
          }
        }
        this._enableObjectId && (pd.push("#define OBJECT_ID"), pd.push("#define OBJECT_ID_INDEX " + this._objectIdIndex)), this._enableMeshBlendTag && (pd.push("#define MESH_BLEND_TAG"), pd.push("#define MESH_BLEND_TAG_INDEX " + this._meshBlendTagIndex)), this.generateNormalsInWorldSpace && pd.push("#define NORMAL_WORLDSPACE"), this._normalsAreUnsigned && pd.push("#define ENCODE_NORMAL"), Wd.useBones && Wd.computeBonesUsingShaders && Wd.skeleton ? (Nd.push(Dd.j.MatricesIndicesKind), Nd.push(Dd.j.MatricesWeightsKind), Wd.numBoneInfluencers > 4 && (Nd.push(Dd.j.MatricesIndicesExtraKind), Nd.push(Dd.j.MatricesWeightsExtraKind)), pd.push("#define NUM_BONE_INFLUENCERS " + Wd.numBoneInfluencers), pd.push("#define BONETEXTURE " + Wd.skeleton.isUsingTextureForMatrices), pd.push("#define BonesPerMesh " + (Wd.skeleton.bones.length + 1))) : (pd.push("#define NUM_BONE_INFLUENCERS 0"), pd.push("#define BONETEXTURE false"), pd.push("#define BonesPerMesh 0"));
        const gd = Wd.morphTargetManager ? (0, Ad.P)(Wd.morphTargetManager, pd, Nd, Wd, !0, !0, !1, Pd, Zd, !1) : 0;
        Jd && (pd.push("#define INSTANCES"), (0, Ad.qb)(Nd, this._enableVelocity || this._enableVelocityLinear), dd.getRenderingMesh().hasThinInstances && pd.push("#define THIN_INSTANCES")), this._linkedWithPrePass ? pd.push("#define SCENE_MRT_COUNT " + this._attachmentsFromPrePass.length) : pd.push("#define SCENE_MRT_COUNT " + this._multiRenderTarget.textures.length), (0, oJ.m)(kd, this._scene, pd);
        const Cd = this._scene.eL(),
          Kd = dd._getDrawWrapper(void 0, !0),
          od = Kd.defines,
          ld = pd.join("\n");
        return od !== ld && Kd.setEffect(Cd.createEffect("geometry", {
          attributes: Nd,
          uniformsNames: DJ,
          samplers: yJ,
          defines: ld,
          onCompiled: null,
          fallbacks: null,
          onError: null,
          uniformBuffersNames: ["Scene"],
          indexParameters: {
            buffersCount: this._multiRenderTarget.textures.length - 1,
            maxSimultaneousMorphTargets: gd
          },
          shaderLanguage: this.shaderLanguage
        }, Cd), ld), Kd.effect.isReady()
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
          this._scene.eL().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null
        }
        this._multiRenderTarget?.renderTarget && this.BO.eL()._currentRenderTarget === this._multiRenderTarget.renderTarget && this.BO.eL().unBindFramebuffer(this._multiRenderTarget?.renderTarget), this.getGBuffer().dispose()
      }
      _assignRenderTargetIndices() {
        const dd = [],
          Jd = [];
        let kd = 0;
        return this._enableDepth && (this._depthIndex = kd, kd++, dd.push("gBuffer_Depth"), Jd.push(this._textureTypesAndFormats[TJ.DEPTH_TEXTURE_TYPE])), this._enableNormal && (this._normalIndex = kd, kd++, dd.push("gBuffer_Normal"), Jd.push(this._textureTypesAndFormats[TJ.NORMAL_TEXTURE_TYPE])), this._enablePosition && (this._positionIndex = kd, kd++, dd.push("gBuffer_Position"), Jd.push(this._textureTypesAndFormats[TJ.POSITION_TEXTURE_TYPE])), this._enableVelocity && (this._velocityIndex = kd, kd++, dd.push("gBuffer_Velocity"), Jd.push(this._textureTypesAndFormats[TJ.VELOCITY_TEXTURE_TYPE])), this._enableVelocityLinear && (this._velocityLinearIndex = kd, kd++, dd.push("gBuffer_VelocityLinear"), Jd.push(this._textureTypesAndFormats[TJ.VELOCITY_LINEAR_TEXTURE_TYPE])), this._enableReflectivity && (this._reflectivityIndex = kd, kd++, dd.push("gBuffer_Reflectivity"), Jd.push(this._textureTypesAndFormats[TJ.REFLECTIVITY_TEXTURE_TYPE])), this._enableScreenspaceDepth && (this._screenspaceDepthIndex = kd, kd++, dd.push("gBuffer_ScreenspaceDepth"), Jd.push(this._textureTypesAndFormats[TJ.SCREENSPACE_DEPTH_TEXTURE_TYPE])), this._enableIrradiance && (this._irradianceIndex = kd, kd++, dd.push("gBuffer_Irradiance"), Jd.push(this._textureTypesAndFormats[TJ.IRRADIANCE_TEXTURE_TYPE])), this._enableObjectId && (this._objectIdIndex = kd, kd++, dd.push("gBuffer_ObjectId"), Jd.push({
          textureType: 0,
          textureFormat: 5,
          samplingMode: 1
        })), this._enableMeshBlendTag && (this._meshBlendTagIndex = kd, kd++, dd.push("gBuffer_MeshBlendTag"), Jd.push({
          textureType: 0,
          textureFormat: 8,
          samplingMode: 1
        })), [kd, dd, Jd]
      }
      _createRenderTargets() {
        const dd = this._scene.eL(),
          [Jd, kd, pd] = this._assignRenderTargetIndices(),
          Nd = Math.min(dd.getCaps().maxDrawBuffers ?? 1, 8);
        if (dd.getCaps().drawBuffersExtension && Jd > Nd) throw new Error(`GeometryBufferRenderer: ${Jd} color attachments were requested, but this engine supports at most ${Nd}`);
        let Pd = 0;
        dd._caps.textureFloat && dd._caps.textureFloatLinearFiltering ? Pd = 1 : dd._caps.textureHalfFloat && dd._caps.textureHalfFloatLinearFiltering && (Pd = 2);
        const Zd = this._getRenderTargetDimensions(),
          gd = [],
          Cd = [],
          Kd = [];
        for (const Wd of pd) Wd ? (gd.push(Wd.textureType), Cd.push(Wd.textureFormat), Kd.push(Wd.samplingMode ?? 2)) : (gd.push(Pd), Cd.push(5), Kd.push(2));
        if (this._normalsAreUnsigned = 11 === gd[TJ.NORMAL_TEXTURE_TYPE] || 13 === gd[TJ.NORMAL_TEXTURE_TYPE], this._multiRenderTarget = new jJ("gBuffer", Zd, Jd, this._scene, {
            generateMipMaps: !1,
            generateDepthTexture: !0,
            types: gd,
            formats: Cd,
            samplingModes: Kd,
            depthTextureFormat: this._depthFormat
          }, kd.concat("gBuffer_DepthBuffer")), !this.isSupported) return;
        this._multiRenderTarget.wrapU = md.c.CLAMP_ADDRESSMODE, this._multiRenderTarget.wrapV = md.c.CLAMP_ADDRESSMODE, this._multiRenderTarget.refreshRate = 1, this._multiRenderTarget.renderParticles = !1, this._multiRenderTarget.renderList = null;
        const od = [!0],
          ld = [!1],
          Qd = [!0];
        for (let Wd = 1; Wd < Jd; ++Wd) od.push(!0), Qd.push(!1), ld.push(!0);
        const Ld = dd.buildTextureLayout(od),
          Od = dd.buildTextureLayout(ld),
          ed = dd.buildTextureLayout(Qd);
        this._multiRenderTarget.onClearObservable.add((dd => {
          const Jd = this.useSpecificClearForDepthTexture ? Od : Ld;
          dd.clearAttachments(this._clearColor, Jd, !0, !0, !0), this.useSpecificClearForDepthTexture && dd.clearAttachments(this._clearDepthColor, ed, !0, !1, !1), dd.bindAttachments(Ld)
        })), this._resizeObserver = dd.onResizeObservable.add((() => {
          this._multiRenderTarget && this._multiRenderTarget.resize(this._getRenderTargetDimensions())
        }));
        const Rd = dd => {
          const Jd = dd.getRenderingMesh(),
            kd = dd.getEffectiveMesh(),
            pd = this._scene,
            Nd = pd.eL(),
            Pd = dd.qL();
          if (!Pd) return;
          if (kd._internalAbstractMeshDataInfo._isActiveIntermediate = !1, (this._enableVelocity || this._enableVelocityLinear) && !this._previousTransformationMatrices[kd.uniqueId] && (this._previousTransformationMatrices[kd.uniqueId] = {
              Vo: yd.b.Identity(),
              viewProjection: pd.getTransformMatrix()
            }, Jd.skeleton)) {
            const dd = Jd.skeleton.getTransformMatrices(Jd);
            this._previousBonesTransformationMatrices[Jd.uniqueId] = this._copyBonesTransformationMatrices(dd, new Float32Array(dd.length))
          }
          const Zd = Jd._getInstancesRenderList(dd._id, !!dd.getReplacementMesh());
          if (Zd.mustReturn) return;
          const gd = Nd.getCaps().instancedArrays && (null !== Zd.visibleInstances[dd._id] || Jd.hasThinInstances),
            Cd = kd.getWorldMatrix();
          if (this.isReady(dd, gd)) {
            const Kd = dd._getDrawWrapper();
            if (!Kd) return;
            const od = Kd.effect;
            let ld;
            Nd.enableEffect(Kd), gd || Jd._bind(dd, od, Pd.fillMode), this._useUbo ? ((0, Ad.z)(od, this._scene.getSceneUniformBuffer()), this._scene.finalizeSceneUbo()) : (od.setMatrix("viewProjection", pd.getTransformMatrix()), od.setMatrix("view", pd.getViewMatrix()), this._scene.bindEyePosition(od, "vEyePosition"));
            if (Jd._instanceDataStorage.isFrozen || !Pd.backFaceCulling && null === Pd.sideOrientation) ld = Jd._effectiveSideOrientation;
            else {
              const dd = kd._getWorldMatrixDeterminant();
              ld = Pd._getEffectiveOrientation(Jd), dd < 0 && (ld = ld === Wd.b.ClockWiseSideOrientation ? Wd.b.CounterClockWiseSideOrientation : Wd.b.ClockWiseSideOrientation)
            }
            if (Pd._preBind(Kd, ld), Pd.needAlphaTestingForMesh(kd)) {
              const dd = Pd.getAlphaTestTexture();
              dd && (od.setTexture("diffuseSampler", dd), od.setMatrix("diffuseMatrix", dd.getTextureMatrix()), od.setFloat("alphaCutOff", Pd.alphaCutOff ?? .4))
            }
            if ((Pd.bumpTexture || Pd.normalTexture || Pd.geometryNormalTexture) && pd.eL().getCaps().standardDerivatives && Hd.e.BumpTextureEnabled) {
              const dd = Pd.bumpTexture || Pd.normalTexture || Pd.geometryNormalTexture;
              od.setFloat3("vBumpInfos", dd.coordinatesIndex, 1 / dd.level, Pd.parallaxScaleBias), od.setMatrix("bumpMatrix", dd.getTextureMatrix()), od.setTexture("bumpSampler", dd), od.setFloat2("vTangentSpaceParams", Pd.invertNormalMapX ? -1 : 1, Pd.invertNormalMapY ? -1 : 1)
            }
            if (this._enableReflectivity)
              if ("PBRMetallicRoughnessMaterial" === Pd.getClassName()) null !== Pd.metallicRoughnessTexture && (od.setTexture("reflectivitySampler", Pd.metallicRoughnessTexture), od.setMatrix("reflectivityMatrix", Pd.metallicRoughnessTexture.getTextureMatrix())), null !== Pd.metallic && od.setFloat("metallic", Pd.metallic), null !== Pd.roughness && od.setFloat("glossiness", 1 - Pd.roughness), null !== Pd.baseTexture && (od.setTexture("albedoSampler", Pd.baseTexture), od.setMatrix("albedoMatrix", Pd.baseTexture.getTextureMatrix())), null !== Pd.baseColor && od.setColor3("albedoColor", Pd.baseColor);
              else if ("PBRSpecularGlossinessMaterial" === Pd.getClassName()) null !== Pd.specularGlossinessTexture ? (od.setTexture("reflectivitySampler", Pd.specularGlossinessTexture), od.setMatrix("reflectivityMatrix", Pd.specularGlossinessTexture.getTextureMatrix())) : null !== Pd.specularColor && od.setColor3("reflectivityColor", Pd.specularColor), null !== Pd.glossiness && od.setFloat("glossiness", Pd.glossiness);
            else if ("PBRMaterial" === Pd.getClassName()) null !== Pd.metallicTexture && (od.setTexture("reflectivitySampler", Pd.metallicTexture), od.setMatrix("reflectivityMatrix", Pd.metallicTexture.getTextureMatrix())), null !== Pd.metallic && od.setFloat("metallic", Pd.metallic), null !== Pd.roughness && od.setFloat("glossiness", 1 - Pd.roughness), null !== Pd.roughness || null !== Pd.metallic || null !== Pd.metallicTexture ? (null !== Pd.albedoTexture && (od.setTexture("albedoSampler", Pd.albedoTexture), od.setMatrix("albedoMatrix", Pd.albedoTexture.getTextureMatrix())), null !== Pd.albedoColor && od.setColor3("albedoColor", Pd.albedoColor)) : (null !== Pd.reflectivityTexture ? (od.setTexture("reflectivitySampler", Pd.reflectivityTexture), od.setMatrix("reflectivityMatrix", Pd.reflectivityTexture.getTextureMatrix())) : null !== Pd.reflectivityColor && od.setColor3("reflectivityColor", Pd.reflectivityColor), null !== Pd.microSurface && od.setFloat("glossiness", Pd.microSurface));
            else if ("StandardMaterial" === Pd.getClassName()) null !== Pd.specularTexture && (od.setTexture("reflectivitySampler", Pd.specularTexture), od.setMatrix("reflectivityMatrix", Pd.specularTexture.getTextureMatrix())), null !== Pd.specularColor && od.setColor3("reflectivityColor", Pd.specularColor);
            else if ("OpenPBRMaterial" === Pd.getClassName()) {
              const dd = Pd;
              dd._useRoughnessFromMetallicTextureGreen && dd.baseMetalnessTexture ? (od.setTexture("reflectivitySampler", dd.baseMetalnessTexture), od.setMatrix("reflectivityMatrix", dd.baseMetalnessTexture.getTextureMatrix())) : dd.baseMetalnessTexture ? (od.setTexture("metallicSampler", dd.baseMetalnessTexture), od.setMatrix("metallicMatrix", dd.baseMetalnessTexture.getTextureMatrix())) : dd.specularRoughnessTexture && (od.setTexture("roughnessSampler", dd.specularRoughnessTexture), od.setMatrix("roughnessMatrix", dd.specularRoughnessTexture.getTextureMatrix())), od.setFloat("metallic", dd.baseMetalness), od.setFloat("glossiness", 1 - dd.specularRoughness), null !== dd.baseColorTexture && (od.setTexture("albedoSampler", dd.baseColorTexture), od.setMatrix("albedoMatrix", dd.baseColorTexture.getTextureMatrix())), null !== dd.baseColor && od.setColor3("albedoColor", dd.baseColor)
            }
            if (this._enableIrradiance && pd.environmentTexture) {
              const dd = pd.environmentTexture,
                Jd = pd.postProcessRenderPipelineManager.supportedPipelines.find((dd => "IBLShadowsRenderPipeline" === dd.getClassName()));
              if (Jd) {
                const dd = Jd._getAccumulatedTexture();
                dd && (od.setTexture("iblShadowSampler", dd), od.setFloat2("shadowTextureSize", dd.getSize().width, dd.getSize().height))
              }
              if (od.setMatrix("reflectionMatrix", dd.getReflectionTextureMatrix()), od.setFloat2("vReflectionInfos", dd.level * pd.iblIntensity, 0), od.setTexture("reflectionSampler", dd), dd.irradianceTexture && (od.setTexture("irradianceSampler", dd.irradianceTexture), dd.irradianceTexture._dominantDirection && od.setVector3("vReflectionDominantDirection", dd.irradianceTexture._dominantDirection)), dd.sphericalPolynomial) {
                const Jd = dd.sphericalPolynomial;
                if (Jd.preScaledHarmonics) {
                  const dd = Jd.preScaledHarmonics;
                  od.setVector3("vSphericalL00", dd.l00), od.setVector3("vSphericalL1_1", dd.l1_1), od.setVector3("vSphericalL10", dd.l10), od.setVector3("vSphericalL11", dd.l11), od.setVector3("vSphericalL2_2", dd.l2_2), od.setVector3("vSphericalL2_1", dd.l2_1), od.setVector3("vSphericalL20", dd.l20), od.setVector3("vSphericalL21", dd.l21), od.setVector3("vSphericalL22", dd.l22)
                } else od.setFloat3("vSphericalX", Jd.x.x, Jd.x.y, Jd.x.z), od.setFloat3("vSphericalY", Jd.y.x, Jd.y.y, Jd.y.z), od.setFloat3("vSphericalZ", Jd.z.x, Jd.z.y, Jd.z.z), od.setFloat3("vSphericalXX_ZZ", Jd.xx.x - Jd.zz.x, Jd.xx.y - Jd.zz.y, Jd.xx.z - Jd.zz.z), od.setFloat3("vSphericalYY_ZZ", Jd.yy.x - Jd.zz.x, Jd.yy.y - Jd.zz.y, Jd.yy.z - Jd.zz.z), od.setFloat3("vSphericalZZ", Jd.zz.x, Jd.zz.y, Jd.zz.z), od.setFloat3("vSphericalXY", Jd.xy.x, Jd.xy.y, Jd.xy.z), od.setFloat3("vSphericalYZ", Jd.yz.x, Jd.yz.y, Jd.yz.z), od.setFloat3("vSphericalZX", Jd.zx.x, Jd.zx.y, Jd.zx.z)
              }
              if (this.generateIrradianceWithScatterMask && "OpenPBRMaterial" === Pd.getClassName()) {
                const dd = Pd;
                od.setFloat("vSubsurfaceWeight", dd.subsurfaceWeight), dd.subsurfaceWeightTexture && (od.setTexture("subsurfaceWeightSampler", dd.subsurfaceWeightTexture), od.setMatrix("subsurfaceWeightMatrix", dd.subsurfaceWeightTexture.getTextureMatrix())), od.setFloat("vTransmissionWeight", dd.transmissionWeight), dd.transmissionWeightTexture && (od.setTexture("transmissionWeightSampler", dd.transmissionWeightTexture), od.setMatrix("transmissionWeightMatrix", dd.transmissionWeightTexture.getTextureMatrix())), od.setFloat("vTransmissionScatterAnisotropy", dd.transmissionScatterAnisotropy), od.setFloat("vSubsurfaceScatterAnisotropy", dd.subsurfaceScatterAnisotropy)
              }
            }
            if ((0, oJ.i)(od, Pd, this._scene), Jd.useBones && Jd.computeBonesUsingShaders && Jd.skeleton) {
              const dd = Jd.skeleton;
              if (dd.isUsingTextureForMatrices && od.getUniformIndex("boneTextureInfo") > -1) {
                const kd = dd.getTransformMatrixTexture(Jd);
                od.setTexture("boneSampler", kd), od.setFloat2("boneTextureInfo", dd._textureWidth, dd._textureHeight)
              } else od.setMatrices("mBones", Jd.skeleton.getTransformMatrices(Jd));
              (this._enableVelocity || this._enableVelocityLinear) && od.setMatrices("mPreviousBones", this._previousBonesTransformationMatrices[Jd.uniqueId])
            }
            if ((0, Ad.v)(Jd, od), Jd.morphTargetManager && Jd.morphTargetManager.isUsingTextureForTargets && Jd.morphTargetManager._bind(od), (this._enableVelocity || this._enableVelocityLinear) && (od.setMatrix("previousWorld", this._previousTransformationMatrices[kd.uniqueId].Vo), od.setMatrix("previousViewProjection", this._previousTransformationMatrices[kd.uniqueId].viewProjection)), this._enableObjectId) {
              let dd = Jd.uniqueId;
              if (this.objectIdProvider) dd = (0, LJ.d)(Jd, this.objectIdProvider);
              else if (dd > 16777215) throw new Error(`Invalid geometry object ID ${dd} for mesh "${Jd.name}". Object IDs must be integers between 0 and 0xFFFFFF.`);
              od.setFloat("objectId", dd)
            }
            if (this._enableMeshBlendTag) {
              const dd = this.meshBlendTagProvider ? (0, LJ.c)(Jd, this.meshBlendTagProvider) : Jd.meshBlendingTag;
              od.setInt("meshBlendTag", dd)
            }
            gd && Jd.hasThinInstances && od.setMatrix("world", Cd), Jd._processRendering(kd, dd, od, Pd.fillMode, Zd, gd, ((dd, Jd) => {
              dd || od.setMatrix("world", Jd)
            }))
          }(this._enableVelocity || this._enableVelocityLinear) && (this._previousTransformationMatrices[kd.uniqueId].Vo = Cd.clone(), this._previousTransformationMatrices[kd.uniqueId].viewProjection = this._scene.getTransformMatrix().clone(), Jd.skeleton && this._copyBonesTransformationMatrices(Jd.skeleton.getTransformMatrices(Jd), this._previousBonesTransformationMatrices[kd.uniqueId]))
        };
        this._multiRenderTarget.customIsReadyFunction = (Jd, kd, pd) => {
          if ((pd || 0 === kd) && Jd.rG)
            for (let Nd = 0; Nd < Jd.rG.length; ++Nd) {
              const kd = Jd.rG[Nd],
                pd = kd.qL(),
                Wd = kd.getRenderingMesh();
              if (!pd) continue;
              const Pd = Wd._getInstancesRenderList(kd._id, !!kd.getReplacementMesh()),
                Zd = dd.getCaps().instancedArrays && (null !== Pd.visibleInstances[kd._id] || Wd.hasThinInstances);
              if (!this.isReady(kd, Zd)) return !1
            }
          return !0
        }, this._multiRenderTarget.customRenderFunction = (Jd, kd, pd, Nd) => {
          let Wd;
          if (this._linkedWithPrePass) {
            if (!this._prePassRenderer.enabled) return;
            this._scene.eL().bindAttachments(this._attachmentsFromPrePass)
          }
          if (Nd.length) {
            for (dd.setColorWrite(!1), Wd = 0; Wd < Nd.length; Wd++) Rd(Nd.data[Wd]);
            dd.setColorWrite(!0)
          }
          for (Wd = 0; Wd < Jd.length; Wd++) Rd(Jd.data[Wd]);
          for (dd.setDepthWrite(!1), Wd = 0; Wd < kd.length; Wd++) Rd(kd.data[Wd]);
          if (this.renderTransparentMeshes)
            for (Wd = 0; Wd < pd.length; Wd++) Rd(pd.data[Wd]);
          dd.setDepthWrite(!0)
        }
      }
      _getRenderTargetDimensions() {
        if ("object" === typeof this._ratioOrDimensions) return {
          width: Math.max(1, Math.floor(this._ratioOrDimensions.width)),
          height: Math.max(1, Math.floor(this._ratioOrDimensions.height))
        };
        const dd = this._scene.eL();
        return {
          width: Math.max(1, Math.floor(dd.getRenderWidth() * this._ratioOrDimensions)),
          height: Math.max(1, Math.floor(dd.getRenderHeight() * this._ratioOrDimensions))
        }
      }
      _copyBonesTransformationMatrices(dd, Jd) {
        for (let kd = 0; kd < dd.length; kd++) Jd[kd] = dd[kd];
        return Jd
      }
    }
    TJ.ForceGLSL = !1, TJ.DEPTH_TEXTURE_TYPE = 0, TJ.NORMAL_TEXTURE_TYPE = 1, TJ.POSITION_TEXTURE_TYPE = 2, TJ.VELOCITY_TEXTURE_TYPE = 3, TJ.REFLECTIVITY_TEXTURE_TYPE = 4, TJ.SCREENSPACE_DEPTH_TEXTURE_TYPE = 5, TJ.VELOCITY_LINEAR_TEXTURE_TYPE = 6, TJ.IRRADIANCE_TEXTURE_TYPE = 7, TJ.OBJECT_ID_TEXTURE_TYPE = 8, TJ.MESH_BLEND_TAG_TEXTURE_TYPE = 9, TJ._SceneComponentInitialization = dd => {
      throw (0, IJ.n)("GeometryBufferRendererSceneComponent")
    };
    var EJ = kd(37303);
    const cJ = {
      effect: null,
      subMesh: null
    };

    function hJ(dd) {
      if ("number" === typeof dd) return 1;
      if (dd instanceof yd.k) return 2;
      if (dd instanceof yd.n || dd instanceof ud.c) return 3;
      if (dd instanceof yd.o || dd instanceof ud.g) return 4;
      throw new Error("Unsupported OpenPBR property type.")
    }
    class rJ {
      populateVectorFromLinkedProperties(dd) {
        const Jd = hJ(dd);
        for (const kd in this.linkedProperties) {
          const dd = this.linkedProperties[kd],
            pd = dd.numComponents;
          if (Jd < pd || dd.targetUniformComponentOffset > Jd - pd) return void(1 == pd ? Fd.c.Error(`Float property ${dd.name} has an offset that is too large.`) : Fd.c.Error(`Vector${pd} property ${dd.name} won't fit in Vector${Jd} or has an offset that is too large.`));
          "number" === typeof dd.value ? rJ._tmpArray[dd.targetUniformComponentOffset] = dd.value : dd.value.toArray(rJ._tmpArray, dd.targetUniformComponentOffset)
        }
        dd.lkd(rJ._tmpArray)
      }
      constructor(dd, Jd) {
        this.linkedProperties = {}, this.firstLinkedKey = "", this.name = dd, this.numComponents = Jd
      }
    }
    rJ._tmpArray = [0, 0, 0, 0];
    class uJ {
      constructor(dd, Jd, kd, pd) {
        let Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          Wd = arguments.length > 5 ? arguments[5] : void 0;
        this.targetUniformComponentNum = 4, this.targetUniformComponentOffset = 0, this.name = dd, this.targetUniformName = kd, this.defaultValue = Jd, this.value = Jd, this.targetUniformComponentNum = pd, this.targetUniformComponentOffset = Nd, this.requiredDefine = Wd
      }
      get numComponents() {
        return "number" === typeof this.defaultValue ? 1 : hJ(this.defaultValue)
      }
    }
    class tJ {
      get samplerName() {
        return this.samplerPrefix + "Sampler"
      }
      get samplerInfoName() {
        return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos"
      }
      get samplerMatrixName() {
        return this.samplerPrefix + "Matrix"
      }
      constructor(dd, Jd, kd) {
        this.value = null, this.samplerPrefix = "", this.textureDefine = "", this.name = dd, this.samplerPrefix = Jd, this.textureDefine = kd
      }
    }
    class VJ extends((0, eJ.c)((0, OJ.d)(Td.d))) {}
    class zJ extends(function(dd) {
      return class extends dd {
        constructor() {
          super(...arguments), this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1
        }
      }
    }(VJ)) {}
    class HJ extends((0, td.c)(zJ)) {
      constructor(dd) {
        super(dd), this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.LIGHTCOUNT = 0, this.VERTEXCOLOR = !1, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.VERTEXALPHA = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHA_FROM_BASE_COLOR_TEXTURE = !1, this.ALPHATESTVALUE = "0.5", this.PREMULTIPLYALPHA = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.LODBASEDMICROSFURACE = !0, this.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = !1, this.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.SPECULAR_WEIGHT_IN_ALPHA = !1, this.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = !1, this.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = !1, this.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.USE_GLTF_STYLE_ANISOTROPY = !1, this.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = !1, this.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = !1, this.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = !1, this.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = !1, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.FUZZENVIRONMENTBRDF = !1, this.NORMAL = !1, this.TANGENT = !1, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.ANISOTROPIC = !1, this.ANISOTROPIC_OPENPBR = !0, this.ANISOTROPIC_BASE = !1, this.ANISOTROPIC_COAT = !1, this.FUZZ_IBL_SAMPLES = 6, this.REFRACTION_HIGH_QUALITY_BLUR = !1, this.FUZZ = !1, this.THIN_FILM = !1, this.IRIDESCENCE = !1, this.DISPERSION = !1, this.SCATTERING = !1, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !1, this.SSS_SAMPLE_COUNT = 16, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !1, this.TRANSMISSION_SLAB = !1, this.TRANSMISSION_SLAB_VOLUME = !1, this.SUBSURFACE_SLAB = !1, this.GEOMETRY_THIN_WALLED = !1, this.REFRACTED_BACKGROUND = !1, this.REFRACTED_LIGHTS = !1, this.REFRACTED_ENVIRONMENT = !1, this.REFRACTED_ENVIRONMENT_OPPOSITEZ = !1, this.REFRACTED_ENVIRONMENT_LOCAL_CUBE = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.BRDF_V_HEIGHT_CORRELATED = !0, this.MS_BRDF_ENERGY_CONSERVATION = !0, this.SPHERICAL_HARMONICS = !0, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !0, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 1, this.CONDUCTOR_SPECULAR_MODEL = 1, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.NORMALXYSCALE = !0
      }
    }
    class wJ extends((0, RJ.b)(zd.c)) {}
    let AJ = (() => {
        var dd, Jd, pd, Nd, Pd, Zd, gd, Cd, Kd, od, ld, Qd, Ld, Od, ed, Rd, Id, Gd, vd, xd, qd, Bd, sd, bd, Sd, jd, Xd, Ud, Td, Ed, cd, hd, td, zd, dJ, JJ, kJ, pJ, NJ, WJ, PJ, ZJ, gJ, CJ, KJ, OJ, eJ, RJ, IJ, GJ, vJ, xJ, qJ, BJ, aJ, MJ, FJ, YJ, mJ, bJ, SJ, jJ, XJ, fJ, nJ, UJ, yJ, DJ, EJ, hJ, VJ, zJ, AJ, dk, Jk, kk, pk, Nk, Wk, Pk, Zk, gk, Ck, Kk, lk, Qk, Lk, Ok, ek, Rk, Ik, Gk, vk, xk, qk, Bk, sk, ik, ak, Mk, Fk, Yk, mk;
        let bk, Sk, jk, Xk, fk, nk, Uk, yk, Dk, Tk, Ek, ck, hk, rk, uk, tk, Vk, zk, Hk, wk, Ak, dp, Jp, kp, pp, Np, Wp, Pp, Zp, gp, Cp, Kp, op, lp, Qp, Lp, Op, ep, Rp, Ip, Gp, vp, xp, qp, Bp, sp, ip, ap, Mp, Fp, Yp, mp, bp, Sp, jp, Xp, fp, np, Up, yp, Dp, Tp, Ep, cp, hp, rp, tp, Vp, zp, Hp, wp, Ap, dN, JN, kN, pN, NN, WN, PN, ZN, gN, CN, KN, oN, lN, QN, LN, ON, eN, RN, IN, GN, vN, xN, qN, BN, sN, iN, aN, MN, FN, YN, mN, bN, SN, jN = wJ,
          XN = [],
          fN = [],
          nN = [],
          UN = [],
          yN = [],
          DN = [],
          TN = [],
          EN = [],
          cN = [],
          hN = [],
          rN = [],
          uN = [],
          tN = [],
          VN = [],
          zN = [],
          HN = [],
          wN = [],
          AN = [],
          dW = [],
          JW = [],
          kW = [],
          pW = [],
          NW = [],
          WW = [],
          PW = [],
          ZW = [],
          gW = [],
          CW = [],
          KW = [],
          oW = [],
          lW = [],
          QW = [],
          LW = [],
          OW = [],
          eW = [],
          RW = [],
          IW = [],
          GW = [],
          vW = [],
          xW = [],
          qW = [],
          BW = [],
          sW = [],
          iW = [],
          aW = [],
          MW = [],
          FW = [],
          YW = [],
          mW = [],
          bW = [],
          SW = [],
          jW = [],
          XW = [],
          fW = [],
          nW = [],
          UW = [],
          yW = [],
          DW = [],
          TW = [],
          EW = [],
          cW = [],
          hW = [],
          rW = [],
          uW = [],
          tW = [],
          VW = [],
          zW = [],
          HW = [],
          wW = [],
          AW = [],
          dP = [],
          JP = [],
          kP = [],
          pP = [],
          NP = [],
          WP = [],
          PP = [],
          ZP = [],
          gP = [],
          CP = [],
          KP = [],
          oP = [],
          lP = [],
          QP = [],
          LP = [],
          OP = [],
          eP = [],
          RP = [],
          IP = [],
          GP = [],
          vP = [],
          xP = [],
          qP = [],
          BP = [],
          sP = [],
          iP = [],
          aP = [],
          MP = [],
          FP = [],
          YP = [],
          mP = [],
          bP = [],
          SP = [],
          jP = [],
          XP = [],
          fP = [],
          nP = [],
          UP = [],
          yP = [],
          DP = [],
          TP = [],
          EP = [],
          cP = [],
          hP = [],
          rP = [],
          uP = [],
          tP = [],
          VP = [],
          zP = [],
          HP = [],
          wP = [],
          AP = [],
          dZ = [],
          JZ = [],
          kZ = [],
          pZ = [],
          NZ = [],
          WZ = [],
          PZ = [],
          ZZ = [],
          gZ = [],
          CZ = [],
          KZ = [],
          oZ = [],
          lZ = [],
          QZ = [],
          LZ = [],
          OZ = [],
          eZ = [],
          RZ = [],
          IZ = [],
          GZ = [],
          vZ = [],
          xZ = [],
          qZ = [],
          BZ = [],
          sZ = [],
          iZ = [],
          aZ = [],
          MZ = [],
          FZ = [],
          YZ = [],
          mZ = [],
          bZ = [],
          SZ = [],
          jZ = [],
          XZ = [],
          fZ = [],
          nZ = [],
          UZ = [],
          yZ = [],
          DZ = [],
          TZ = [],
          EZ = [],
          cZ = [],
          hZ = [],
          rZ = [],
          uZ = [],
          tZ = [],
          VZ = [],
          zZ = [],
          HZ = [],
          wZ = [],
          AZ = [],
          dg = [],
          Jg = [],
          kg = [],
          pg = [],
          Ng = [],
          Wg = [],
          Pg = [],
          Zg = [],
          gg = [],
          Cg = [],
          Kg = [],
          og = [],
          lg = [],
          Qg = [],
          Lg = [],
          Og = [],
          eg = [],
          Rg = [],
          Ig = [],
          Gg = [],
          vg = [],
          xg = [],
          qg = [],
          Bg = [],
          sg = [],
          ig = [],
          ag = [],
          Mg = [],
          Fg = [],
          Yg = [],
          mg = [];
        return dd = class extends jN {
          get baseWeight() {
            return (0, ad.d)(this, Jd, "f")
          }
          set baseWeight(dd) {
            (0, ad.e)(this, Jd, dd, "f")
          }
          get baseWeightTexture() {
            return (0, ad.d)(this, pd, "f")
          }
          set baseWeightTexture(dd) {
            (0, ad.e)(this, pd, dd, "f")
          }
          get baseColor() {
            return (0, ad.d)(this, Nd, "f")
          }
          set baseColor(dd) {
            (0, ad.e)(this, Nd, dd, "f")
          }
          get baseColorTexture() {
            return (0, ad.d)(this, Pd, "f")
          }
          set baseColorTexture(dd) {
            (0, ad.e)(this, Pd, dd, "f")
          }
          get baseDiffuseRoughness() {
            return (0, ad.d)(this, Zd, "f")
          }
          set baseDiffuseRoughness(dd) {
            (0, ad.e)(this, Zd, dd, "f")
          }
          get baseDiffuseRoughnessTexture() {
            return (0, ad.d)(this, gd, "f")
          }
          set baseDiffuseRoughnessTexture(dd) {
            (0, ad.e)(this, gd, dd, "f")
          }
          get baseMetalness() {
            return (0, ad.d)(this, Cd, "f")
          }
          set baseMetalness(dd) {
            (0, ad.e)(this, Cd, dd, "f")
          }
          get baseMetalnessTexture() {
            return (0, ad.d)(this, Kd, "f")
          }
          set baseMetalnessTexture(dd) {
            (0, ad.e)(this, Kd, dd, "f")
          }
          get specularWeight() {
            return (0, ad.d)(this, od, "f")
          }
          set specularWeight(dd) {
            (0, ad.e)(this, od, dd, "f")
          }
          get specularWeightTexture() {
            return (0, ad.d)(this, ld, "f")
          }
          set specularWeightTexture(dd) {
            (0, ad.e)(this, ld, dd, "f")
          }
          get specularColor() {
            return (0, ad.d)(this, Qd, "f")
          }
          set specularColor(dd) {
            (0, ad.e)(this, Qd, dd, "f")
          }
          get specularColorTexture() {
            return (0, ad.d)(this, Ld, "f")
          }
          set specularColorTexture(dd) {
            (0, ad.e)(this, Ld, dd, "f")
          }
          get specularRoughness() {
            return (0, ad.d)(this, Od, "f")
          }
          set specularRoughness(dd) {
            (0, ad.e)(this, Od, dd, "f")
          }
          get specularRoughnessTexture() {
            return (0, ad.d)(this, ed, "f")
          }
          set specularRoughnessTexture(dd) {
            (0, ad.e)(this, ed, dd, "f")
          }
          get specularRoughnessAnisotropy() {
            return (0, ad.d)(this, Rd, "f")
          }
          set specularRoughnessAnisotropy(dd) {
            (0, ad.e)(this, Rd, dd, "f")
          }
          get specularRoughnessAnisotropyTexture() {
            return (0, ad.d)(this, Id, "f")
          }
          set specularRoughnessAnisotropyTexture(dd) {
            (0, ad.e)(this, Id, dd, "f")
          }
          get specularIor() {
            return (0, ad.d)(this, Gd, "f")
          }
          set specularIor(dd) {
            (0, ad.e)(this, Gd, dd, "f")
          }
          get transmissionWeight() {
            return (0, ad.d)(this, vd, "f")
          }
          set transmissionWeight(dd) {
            (0, ad.e)(this, vd, dd, "f")
          }
          get transmissionWeightTexture() {
            return (0, ad.d)(this, xd, "f")
          }
          set transmissionWeightTexture(dd) {
            (0, ad.e)(this, xd, dd, "f")
          }
          get transmissionColor() {
            return (0, ad.d)(this, qd, "f")
          }
          set transmissionColor(dd) {
            (0, ad.e)(this, qd, dd, "f")
          }
          get transmissionColorTexture() {
            return (0, ad.d)(this, Bd, "f")
          }
          set transmissionColorTexture(dd) {
            (0, ad.e)(this, Bd, dd, "f")
          }
          get transmissionDepth() {
            return (0, ad.d)(this, sd, "f")
          }
          set transmissionDepth(dd) {
            (0, ad.e)(this, sd, dd, "f")
          }
          get transmissionDepthTexture() {
            return (0, ad.d)(this, bd, "f")
          }
          set transmissionDepthTexture(dd) {
            (0, ad.e)(this, bd, dd, "f")
          }
          get transmissionScatter() {
            return (0, ad.d)(this, Sd, "f")
          }
          set transmissionScatter(dd) {
            (0, ad.e)(this, Sd, dd, "f")
          }
          get transmissionScatterTexture() {
            return (0, ad.d)(this, jd, "f")
          }
          set transmissionScatterTexture(dd) {
            (0, ad.e)(this, jd, dd, "f")
          }
          get transmissionScatterAnisotropy() {
            return (0, ad.d)(this, Xd, "f")
          }
          set transmissionScatterAnisotropy(dd) {
            (0, ad.e)(this, Xd, dd, "f")
          }
          get transmissionDispersionScale() {
            return (0, ad.d)(this, Ud, "f")
          }
          set transmissionDispersionScale(dd) {
            (0, ad.e)(this, Ud, dd, "f")
          }
          get transmissionDispersionScaleTexture() {
            return (0, ad.d)(this, Td, "f")
          }
          set transmissionDispersionScaleTexture(dd) {
            (0, ad.e)(this, Td, dd, "f")
          }
          get transmissionDispersionAbbeNumber() {
            return (0, ad.d)(this, Ed, "f")
          }
          set transmissionDispersionAbbeNumber(dd) {
            (0, ad.e)(this, Ed, dd, "f")
          }
          get subsurfaceWeight() {
            return (0, ad.d)(this, cd, "f")
          }
          set subsurfaceWeight(dd) {
            (0, ad.e)(this, cd, dd, "f")
          }
          get subsurfaceWeightTexture() {
            return (0, ad.d)(this, hd, "f")
          }
          set subsurfaceWeightTexture(dd) {
            (0, ad.e)(this, hd, dd, "f")
          }
          get subsurfaceColor() {
            return (0, ad.d)(this, td, "f")
          }
          set subsurfaceColor(dd) {
            (0, ad.e)(this, td, dd, "f")
          }
          get subsurfaceColorTexture() {
            return (0, ad.d)(this, zd, "f")
          }
          set subsurfaceColorTexture(dd) {
            (0, ad.e)(this, zd, dd, "f")
          }
          get subsurfaceRadius() {
            return (0, ad.d)(this, dJ, "f")
          }
          set subsurfaceRadius(dd) {
            (0, ad.e)(this, dJ, dd, "f")
          }
          get subsurfaceRadiusScale() {
            return (0, ad.d)(this, JJ, "f")
          }
          set subsurfaceRadiusScale(dd) {
            (0, ad.e)(this, JJ, dd, "f")
          }
          get subsurfaceRadiusScaleTexture() {
            return (0, ad.d)(this, kJ, "f")
          }
          set subsurfaceRadiusScaleTexture(dd) {
            (0, ad.e)(this, kJ, dd, "f")
          }
          get subsurfaceScatterAnisotropy() {
            return (0, ad.d)(this, pJ, "f")
          }
          set subsurfaceScatterAnisotropy(dd) {
            (0, ad.e)(this, pJ, dd, "f")
          }
          get coatWeight() {
            return (0, ad.d)(this, NJ, "f")
          }
          set coatWeight(dd) {
            (0, ad.e)(this, NJ, dd, "f")
          }
          get coatWeightTexture() {
            return (0, ad.d)(this, WJ, "f")
          }
          set coatWeightTexture(dd) {
            (0, ad.e)(this, WJ, dd, "f")
          }
          get coatColor() {
            return (0, ad.d)(this, PJ, "f")
          }
          set coatColor(dd) {
            (0, ad.e)(this, PJ, dd, "f")
          }
          get coatColorTexture() {
            return (0, ad.d)(this, ZJ, "f")
          }
          set coatColorTexture(dd) {
            (0, ad.e)(this, ZJ, dd, "f")
          }
          get coatRoughness() {
            return (0, ad.d)(this, gJ, "f")
          }
          set coatRoughness(dd) {
            (0, ad.e)(this, gJ, dd, "f")
          }
          get coatRoughnessTexture() {
            return (0, ad.d)(this, CJ, "f")
          }
          set coatRoughnessTexture(dd) {
            (0, ad.e)(this, CJ, dd, "f")
          }
          get coatRoughnessAnisotropy() {
            return (0, ad.d)(this, KJ, "f")
          }
          set coatRoughnessAnisotropy(dd) {
            (0, ad.e)(this, KJ, dd, "f")
          }
          get coatRoughnessAnisotropyTexture() {
            return (0, ad.d)(this, OJ, "f")
          }
          set coatRoughnessAnisotropyTexture(dd) {
            (0, ad.e)(this, OJ, dd, "f")
          }
          get coatIor() {
            return (0, ad.d)(this, eJ, "f")
          }
          set coatIor(dd) {
            (0, ad.e)(this, eJ, dd, "f")
          }
          get coatDarkening() {
            return (0, ad.d)(this, RJ, "f")
          }
          set coatDarkening(dd) {
            (0, ad.e)(this, RJ, dd, "f")
          }
          get coatDarkeningTexture() {
            return (0, ad.d)(this, IJ, "f")
          }
          set coatDarkeningTexture(dd) {
            (0, ad.e)(this, IJ, dd, "f")
          }
          get fuzzWeight() {
            return (0, ad.d)(this, GJ, "f")
          }
          set fuzzWeight(dd) {
            (0, ad.e)(this, GJ, dd, "f")
          }
          get fuzzWeightTexture() {
            return (0, ad.d)(this, vJ, "f")
          }
          set fuzzWeightTexture(dd) {
            (0, ad.e)(this, vJ, dd, "f")
          }
          get fuzzColor() {
            return (0, ad.d)(this, xJ, "f")
          }
          set fuzzColor(dd) {
            (0, ad.e)(this, xJ, dd, "f")
          }
          get fuzzColorTexture() {
            return (0, ad.d)(this, qJ, "f")
          }
          set fuzzColorTexture(dd) {
            (0, ad.e)(this, qJ, dd, "f")
          }
          get fuzzRoughness() {
            return (0, ad.d)(this, BJ, "f")
          }
          set fuzzRoughness(dd) {
            (0, ad.e)(this, BJ, dd, "f")
          }
          get fuzzRoughnessTexture() {
            return (0, ad.d)(this, aJ, "f")
          }
          set fuzzRoughnessTexture(dd) {
            (0, ad.e)(this, aJ, dd, "f")
          }
          get geometryThinWalled() {
            return (0, ad.d)(this, MJ, "f")
          }
          set geometryThinWalled(dd) {
            (0, ad.e)(this, MJ, dd, "f")
          }
          get geometryNormalTexture() {
            return (0, ad.d)(this, FJ, "f")
          }
          set geometryNormalTexture(dd) {
            (0, ad.e)(this, FJ, dd, "f")
          }
          get geometryTangent() {
            return (0, ad.d)(this, YJ, "f")
          }
          set geometryTangent(dd) {
            (0, ad.e)(this, YJ, dd, "f")
          }
          get geometryTangentAngle() {
            return Math.atan2(this.geometryTangent.y, this.geometryTangent.x)
          }
          set geometryTangentAngle(dd) {
            this.geometryTangent = new yd.k(Math.cos(dd), Math.sin(dd))
          }
          get geometryTangentTexture() {
            return (0, ad.d)(this, mJ, "f")
          }
          set geometryTangentTexture(dd) {
            (0, ad.e)(this, mJ, dd, "f")
          }
          get geometryCoatNormalTexture() {
            return (0, ad.d)(this, bJ, "f")
          }
          set geometryCoatNormalTexture(dd) {
            (0, ad.e)(this, bJ, dd, "f")
          }
          get geometryCoatTangent() {
            return (0, ad.d)(this, SJ, "f")
          }
          set geometryCoatTangent(dd) {
            (0, ad.e)(this, SJ, dd, "f")
          }
          get geometryCoatTangentAngle() {
            return Math.atan2(this.geometryCoatTangent.y, this.geometryCoatTangent.x)
          }
          set geometryCoatTangentAngle(dd) {
            this.geometryCoatTangent = new yd.k(Math.cos(dd), Math.sin(dd))
          }
          get geometryCoatTangentTexture() {
            return (0, ad.d)(this, jJ, "f")
          }
          set geometryCoatTangentTexture(dd) {
            (0, ad.e)(this, jJ, dd, "f")
          }
          get geometryOpacity() {
            return (0, ad.d)(this, XJ, "f")
          }
          set geometryOpacity(dd) {
            (0, ad.e)(this, XJ, dd, "f")
          }
          get geometryOpacityTexture() {
            return (0, ad.d)(this, fJ, "f")
          }
          set geometryOpacityTexture(dd) {
            (0, ad.e)(this, fJ, dd, "f")
          }
          get geometryThickness() {
            return (0, ad.d)(this, nJ, "f")
          }
          set geometryThickness(dd) {
            (0, ad.e)(this, nJ, dd, "f")
          }
          get geometryThicknessTexture() {
            return (0, ad.d)(this, UJ, "f")
          }
          set geometryThicknessTexture(dd) {
            (0, ad.e)(this, UJ, dd, "f")
          }
          get emissionLuminance() {
            return (0, ad.d)(this, yJ, "f")
          }
          set emissionLuminance(dd) {
            (0, ad.e)(this, yJ, dd, "f")
          }
          get emissionColor() {
            return (0, ad.d)(this, DJ, "f")
          }
          set emissionColor(dd) {
            (0, ad.e)(this, DJ, dd, "f")
          }
          get emissionColorTexture() {
            return (0, ad.d)(this, EJ, "f")
          }
          set emissionColorTexture(dd) {
            (0, ad.e)(this, EJ, dd, "f")
          }
          get thinFilmWeight() {
            return (0, ad.d)(this, hJ, "f")
          }
          set thinFilmWeight(dd) {
            (0, ad.e)(this, hJ, dd, "f")
          }
          get thinFilmWeightTexture() {
            return (0, ad.d)(this, VJ, "f")
          }
          set thinFilmWeightTexture(dd) {
            (0, ad.e)(this, VJ, dd, "f")
          }
          get thinFilmThickness() {
            return (0, ad.d)(this, zJ, "f")
          }
          set thinFilmThickness(dd) {
            (0, ad.e)(this, zJ, dd, "f")
          }
          get thinFilmThicknessMin() {
            return (0, ad.d)(this, AJ, "f")
          }
          set thinFilmThicknessMin(dd) {
            (0, ad.e)(this, AJ, dd, "f")
          }
          get thinFilmThicknessTexture() {
            return (0, ad.d)(this, dk, "f")
          }
          set thinFilmThicknessTexture(dd) {
            (0, ad.e)(this, dk, dd, "f")
          }
          get thinFilmIor() {
            return (0, ad.d)(this, Jk, "f")
          }
          set thinFilmIor(dd) {
            (0, ad.e)(this, Jk, dd, "f")
          }
          get ambientOcclusionTexture() {
            return (0, ad.d)(this, kk, "f")
          }
          set ambientOcclusionTexture(dd) {
            (0, ad.e)(this, kk, dd, "f")
          }
          get sssQuality() {
            return this._sssQuality
          }
          set sssQuality(dd) {
            this._sssQuality !== dd && (this._sssQuality = dd, this.dkd(1))
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
            return (0, ad.d)(this, pk, "f")
          }
          set directIntensity(dd) {
            (0, ad.e)(this, pk, dd, "f")
          }
          get environmentIntensity() {
            return (0, ad.d)(this, Nk, "f")
          }
          set environmentIntensity(dd) {
            (0, ad.e)(this, Nk, dd, "f")
          }
          get useSpecularWeightFromTextureAlpha() {
            return (0, ad.d)(this, Wk, "f")
          }
          set useSpecularWeightFromTextureAlpha(dd) {
            (0, ad.e)(this, Wk, dd, "f")
          }
          get forceAlphaTest() {
            return (0, ad.d)(this, Pk, "f")
          }
          set forceAlphaTest(dd) {
            (0, ad.e)(this, Pk, dd, "f")
          }
          get alphaCutOff() {
            return (0, ad.d)(this, Zk, "f")
          }
          set alphaCutOff(dd) {
            (0, ad.e)(this, Zk, dd, "f")
          }
          get useAmbientOcclusionFromMetallicTextureRed() {
            return (0, ad.d)(this, gk, "f")
          }
          set useAmbientOcclusionFromMetallicTextureRed(dd) {
            (0, ad.e)(this, gk, dd, "f")
          }
          get useAmbientInGrayScale() {
            return (0, ad.d)(this, Ck, "f")
          }
          set useAmbientInGrayScale(dd) {
            (0, ad.e)(this, Ck, dd, "f")
          }
          get hasTransparency() {
            return this.subsurfaceWeight > 0 || this.transmissionWeight > 0
          }
          get hasScattering() {
            return this.transmissionWeight > 0 && this.transmissionDepth > 0 && !this.transmissionScatter.equals(ud.c.BlackReadOnly) || this.subsurfaceWeight > 0
          }
          get usePhysicalLightFalloff() {
            return this._lightFalloff === Wd.b.LIGHTFALLOFF_PHYSICAL
          }
          set usePhysicalLightFalloff(dd) {
            dd !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = dd ? Wd.b.LIGHTFALLOFF_PHYSICAL : Wd.b.LIGHTFALLOFF_STANDARD)
          }
          get useGLTFLightFalloff() {
            return this._lightFalloff === Wd.b.LIGHTFALLOFF_GLTF
          }
          set useGLTFLightFalloff(dd) {
            dd !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = dd ? Wd.b.LIGHTFALLOFF_GLTF : Wd.b.LIGHTFALLOFF_STANDARD)
          }
          get useObjectSpaceNormalMap() {
            return (0, ad.d)(this, Kk, "f")
          }
          set useObjectSpaceNormalMap(dd) {
            (0, ad.e)(this, Kk, dd, "f")
          }
          get useParallax() {
            return (0, ad.d)(this, lk, "f")
          }
          set useParallax(dd) {
            (0, ad.e)(this, lk, dd, "f")
          }
          get useParallaxOcclusion() {
            return (0, ad.d)(this, Qk, "f")
          }
          set useParallaxOcclusion(dd) {
            (0, ad.e)(this, Qk, dd, "f")
          }
          get parallaxScaleBias() {
            return (0, ad.d)(this, Lk, "f")
          }
          set parallaxScaleBias(dd) {
            (0, ad.e)(this, Lk, dd, "f")
          }
          get disableLighting() {
            return (0, ad.d)(this, Ok, "f")
          }
          set disableLighting(dd) {
            (0, ad.e)(this, Ok, dd, "f")
          }
          get forceIrradianceInFragment() {
            return (0, ad.d)(this, ek, "f")
          }
          set forceIrradianceInFragment(dd) {
            (0, ad.e)(this, ek, dd, "f")
          }
          get maxSimultaneousLights() {
            return (0, ad.d)(this, Rk, "f")
          }
          set maxSimultaneousLights(dd) {
            (0, ad.e)(this, Rk, dd, "f")
          }
          get invertNormalMapX() {
            return (0, ad.d)(this, Ik, "f")
          }
          set invertNormalMapX(dd) {
            (0, ad.e)(this, Ik, dd, "f")
          }
          get invertNormalMapY() {
            return (0, ad.d)(this, Gk, "f")
          }
          set invertNormalMapY(dd) {
            (0, ad.e)(this, Gk, dd, "f")
          }
          get twoSidedLighting() {
            return (0, ad.d)(this, vk, "f")
          }
          set twoSidedLighting(dd) {
            (0, ad.e)(this, vk, dd, "f")
          }
          get useAlphaFresnel() {
            return (0, ad.d)(this, xk, "f")
          }
          set useAlphaFresnel(dd) {
            (0, ad.e)(this, xk, dd, "f")
          }
          get useLinearAlphaFresnel() {
            return (0, ad.d)(this, qk, "f")
          }
          set useLinearAlphaFresnel(dd) {
            (0, ad.e)(this, qk, dd, "f")
          }
          get environmentBRDFTexture() {
            return (0, ad.d)(this, Bk, "f")
          }
          set environmentBRDFTexture(dd) {
            (0, ad.e)(this, Bk, dd, "f")
          }
          get forceNormalForward() {
            return (0, ad.d)(this, sk, "f")
          }
          set forceNormalForward(dd) {
            (0, ad.e)(this, sk, dd, "f")
          }
          get enableSpecularAntiAliasing() {
            return (0, ad.d)(this, ik, "f")
          }
          set enableSpecularAntiAliasing(dd) {
            (0, ad.e)(this, ik, dd, "f")
          }
          get useHorizonOcclusion() {
            return (0, ad.d)(this, ak, "f")
          }
          set useHorizonOcclusion(dd) {
            (0, ad.e)(this, ak, dd, "f")
          }
          get useRadianceOcclusion() {
            return (0, ad.d)(this, Mk, "f")
          }
          set useRadianceOcclusion(dd) {
            (0, ad.e)(this, Mk, dd, "f")
          }
          get unlit() {
            return (0, ad.d)(this, Fk, "f")
          }
          set unlit(dd) {
            (0, ad.e)(this, Fk, dd, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, ad.d)(this, Yk, "f")
          }
          set applyDecalMapAfterDetailMap(dd) {
            (0, ad.e)(this, Yk, dd, "f")
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
            this._refractionHighQualityBlur !== dd && (this._refractionHighQualityBlur = dd, this.dkd(1))
          }
          get realTimeFiltering() {
            return this._realTimeFiltering
          }
          set realTimeFiltering(dd) {
            this._realTimeFiltering = dd, this.dkd(1)
          }
          get realTimeFilteringQuality() {
            return this._realTimeFilteringQuality
          }
          set realTimeFilteringQuality(dd) {
            this._realTimeFilteringQuality = dd, this.dkd(1)
          }
          get fuzzSampleNumber() {
            return this._fuzzSampleNumber
          }
          set fuzzSampleNumber(dd) {
            this._fuzzSampleNumber = dd, this.dkd(1)
          }
          get canRenderToMRT() {
            return !0
          }
          get debugMode() {
            return (0, ad.d)(this, mk, "f")
          }
          set debugMode(dd) {
            (0, ad.e)(this, mk, dd, "f")
          }
          constructor(kd, Md) {
            super(kd, Md, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || dd.ForceGLSL), Jd.set(this, ((0, ad.i)(this, XN), (0, ad.i)(this, fN, void 0))), this._baseWeight = ((0, ad.i)(this, nN), new uJ("base_weight", 1, "vBaseWeight", 1)), pd.set(this, (0, ad.i)(this, UN, void 0)), this._baseWeightTexture = ((0, ad.i)(this, yN), new tJ("base_weight", "baseWeight", "BASE_WEIGHT")), Nd.set(this, (0, ad.i)(this, DN, void 0)), this._baseColor = ((0, ad.i)(this, TN), new uJ("base_color", ud.c.White(), "vBaseColor", 4)), Pd.set(this, (0, ad.i)(this, EN, void 0)), this._baseColorTexture = ((0, ad.i)(this, cN), new tJ("base_color", "baseColor", "BASE_COLOR")), Zd.set(this, (0, ad.i)(this, hN, void 0)), this._baseDiffuseRoughness = ((0, ad.i)(this, rN), new uJ("base_diffuse_roughness", 0, "vBaseDiffuseRoughness", 1)), gd.set(this, (0, ad.i)(this, uN, void 0)), this._baseDiffuseRoughnessTexture = ((0, ad.i)(this, tN), new tJ("base_diffuse_roughness", "baseDiffuseRoughness", "BASE_DIFFUSE_ROUGHNESS")), Cd.set(this, (0, ad.i)(this, VN, void 0)), this._baseMetalness = ((0, ad.i)(this, zN), new uJ("base_metalness", 0, "vReflectanceInfo", 4, 0)), Kd.set(this, (0, ad.i)(this, HN, void 0)), this._baseMetalnessTexture = ((0, ad.i)(this, wN), new tJ("base_metalness", "baseMetalness", "BASE_METALNESS")), od.set(this, (0, ad.i)(this, AN, void 0)), this._specularWeight = ((0, ad.i)(this, dW), new uJ("specular_weight", 1, "vReflectanceInfo", 4, 3)), ld.set(this, (0, ad.i)(this, JW, void 0)), this._specularWeightTexture = ((0, ad.i)(this, kW), new tJ("specular_weight", "specularWeight", "SPECULAR_WEIGHT")), Qd.set(this, (0, ad.i)(this, pW, void 0)), this._specularColor = ((0, ad.i)(this, NW), new uJ("specular_color", ud.c.White(), "vSpecularColor", 4)), Ld.set(this, (0, ad.i)(this, WW, void 0)), this._specularColorTexture = ((0, ad.i)(this, PW), new tJ("specular_color", "specularColor", "SPECULAR_COLOR")), Od.set(this, (0, ad.i)(this, ZW, void 0)), this._specularRoughness = ((0, ad.i)(this, gW), new uJ("specular_roughness", .3, "vReflectanceInfo", 4, 1)), ed.set(this, (0, ad.i)(this, CW, void 0)), this._specularRoughnessTexture = ((0, ad.i)(this, KW), new tJ("specular_roughness", "specularRoughness", "SPECULAR_ROUGHNESS")), Rd.set(this, (0, ad.i)(this, oW, void 0)), this._specularRoughnessAnisotropy = ((0, ad.i)(this, lW), new uJ("specular_roughness_anisotropy", 0, "vSpecularAnisotropy", 3, 2)), Id.set(this, (0, ad.i)(this, QW, void 0)), this._specularRoughnessAnisotropyTexture = ((0, ad.i)(this, LW), new tJ("specular_roughness_anisotropy", "specularRoughnessAnisotropy", "SPECULAR_ROUGHNESS_ANISOTROPY")), Gd.set(this, (0, ad.i)(this, OW, void 0)), this._specularIor = ((0, ad.i)(this, eW), new uJ("specular_ior", 1.5, "vReflectanceInfo", 4, 2)), vd.set(this, (0, ad.i)(this, RW, void 0)), this._transmissionWeight = ((0, ad.i)(this, IW), new uJ("transmission_weight", 0, "vTransmissionWeight", 1)), xd.set(this, (0, ad.i)(this, GW, void 0)), this._transmissionWeightTexture = ((0, ad.i)(this, vW), new tJ("transmission_weight", "transmissionWeight", "TRANSMISSION_WEIGHT")), qd.set(this, (0, ad.i)(this, xW, void 0)), this._transmissionColor = ((0, ad.i)(this, qW), new uJ("transmission_color", ud.c.White(), "vTransmissionColor", 3, 0)), Bd.set(this, (0, ad.i)(this, BW, void 0)), this._transmissionColorTexture = ((0, ad.i)(this, sW), new tJ("transmission_color", "transmissionColor", "TRANSMISSION_COLOR")), sd.set(this, (0, ad.i)(this, iW, void 0)), this._transmissionDepth = ((0, ad.i)(this, aW), new uJ("transmission_depth", 0, "vTransmissionDepth", 1, 0)), bd.set(this, (0, ad.i)(this, MW, void 0)), this._transmissionDepthTexture = ((0, ad.i)(this, FW), new tJ("transmission_depth", "transmissionDepth", "TRANSMISSION_DEPTH")), Sd.set(this, (0, ad.i)(this, YW, void 0)), this._transmissionScatter = ((0, ad.i)(this, mW), new uJ("transmission_scatter", ud.c.Black(), "vTransmissionScatter", 3, 0)), jd.set(this, (0, ad.i)(this, bW, void 0)), this._transmissionScatterTexture = ((0, ad.i)(this, SW), new tJ("transmission_scatter", "transmissionScatter", "TRANSMISSION_SCATTER")), Xd.set(this, (0, ad.i)(this, jW, void 0)), this._transmissionScatterAnisotropy = ((0, ad.i)(this, XW), new uJ("transmission_scatter_anisotropy", 0, "vTransmissionScatterAnisotropy", 1, 0)), Ud.set(this, (0, ad.i)(this, fW, void 0)), this._transmissionDispersionScale = ((0, ad.i)(this, nW), new uJ("transmission_dispersion_scale", 0, "vTransmissionDispersionScale", 1, 0)), Td.set(this, (0, ad.i)(this, UW, void 0)), this._transmissionDispersionScaleTexture = ((0, ad.i)(this, yW), new tJ("transmission_dispersion_scale", "transmissionDispersionScale", "TRANSMISSION_DISPERSION_SCALE")), Ed.set(this, (0, ad.i)(this, DW, void 0)), this._transmissionDispersionAbbeNumber = ((0, ad.i)(this, TW), new uJ("transmission_dispersion_abbe_number", 20, "vTransmissionDispersionAbbeNumber", 1, 0)), cd.set(this, (0, ad.i)(this, EW, void 0)), this._subsurfaceWeight = ((0, ad.i)(this, cW), new uJ("subsurface_weight", 0, "vSubsurfaceWeight", 1, 0, "SUBSURFACE_SLAB")), hd.set(this, (0, ad.i)(this, hW, void 0)), this._subsurfaceWeightTexture = ((0, ad.i)(this, rW), new tJ("subsurface_weight", "subsurfaceWeight", "SUBSURFACE_WEIGHT")), td.set(this, (0, ad.i)(this, uW, void 0)), this._subsurfaceColor = ((0, ad.i)(this, tW), new uJ("subsurface_color", new ud.c(.8, .8, .8), "vSubsurfaceColor", 3, 0, "SUBSURFACE_SLAB")), zd.set(this, (0, ad.i)(this, VW, void 0)), this._subsurfaceColorTexture = ((0, ad.i)(this, zW), new tJ("subsurface_color", "subsurfaceColor", "SUBSURFACE_COLOR")), dJ.set(this, (0, ad.i)(this, HW, void 0)), this._subsurfaceRadius = ((0, ad.i)(this, wW), new uJ("subsurface_radius", .1, "vSubsurfaceRadius", 1, 0, "SUBSURFACE_SLAB")), JJ.set(this, (0, ad.i)(this, AW, void 0)), this._subsurfaceRadiusScale = ((0, ad.i)(this, dP), new uJ("subsurface_radius_scale", new ud.c(1, .5, .25), "vSubsurfaceRadiusScale", 3, 0, "SUBSURFACE_SLAB")), kJ.set(this, (0, ad.i)(this, JP, void 0)), this._subsurfaceRadiusScaleTexture = ((0, ad.i)(this, kP), new tJ("subsurface_radius_scale", "subsurfaceRadiusScale", "SUBSURFACE_RADIUS_SCALE")), pJ.set(this, (0, ad.i)(this, pP, void 0)), this._subsurfaceScatterAnisotropy = ((0, ad.i)(this, NP), new uJ("subsurface_scatter_anisotropy", 0, "vSubsurfaceScatterAnisotropy", 1, 0, "SUBSURFACE_SLAB")), NJ.set(this, (0, ad.i)(this, WP, void 0)), this._coatWeight = ((0, ad.i)(this, PP), new uJ("coat_weight", 0, "vCoatWeight", 1, 0)), WJ.set(this, (0, ad.i)(this, ZP, void 0)), this._coatWeightTexture = ((0, ad.i)(this, gP), new tJ("coat_weight", "coatWeight", "COAT_WEIGHT")), PJ.set(this, (0, ad.i)(this, CP, void 0)), this._coatColor = ((0, ad.i)(this, KP), new uJ("coat_color", ud.c.White(), "vCoatColor", 3, 0)), ZJ.set(this, (0, ad.i)(this, oP, void 0)), this._coatColorTexture = ((0, ad.i)(this, lP), new tJ("coat_color", "coatColor", "COAT_COLOR")), gJ.set(this, (0, ad.i)(this, QP, void 0)), this._coatRoughness = ((0, ad.i)(this, LP), new uJ("coat_roughness", 0, "vCoatRoughness", 1, 0)), CJ.set(this, (0, ad.i)(this, OP, void 0)), this._coatRoughnessTexture = ((0, ad.i)(this, eP), new tJ("coat_roughness", "coatRoughness", "COAT_ROUGHNESS")), KJ.set(this, (0, ad.i)(this, RP, void 0)), this._coatRoughnessAnisotropy = ((0, ad.i)(this, IP), new uJ("coat_roughness_anisotropy", 0, "vCoatRoughnessAnisotropy", 1)), OJ.set(this, (0, ad.i)(this, GP, void 0)), this._coatRoughnessAnisotropyTexture = ((0, ad.i)(this, vP), new tJ("coat_roughness_anisotropy", "coatRoughnessAnisotropy", "COAT_ROUGHNESS_ANISOTROPY")), eJ.set(this, (0, ad.i)(this, xP, void 0)), this._coatIor = ((0, ad.i)(this, qP), new uJ("coat_ior", 1.5, "vCoatIor", 1, 0)), RJ.set(this, (0, ad.i)(this, BP, void 0)), this._coatDarkening = ((0, ad.i)(this, sP), new uJ("coat_darkening", 1, "vCoatDarkening", 1, 0)), IJ.set(this, (0, ad.i)(this, iP, void 0)), this._coatDarkeningTexture = ((0, ad.i)(this, aP), new tJ("coat_darkening", "coatDarkening", "COAT_DARKENING")), this.useCoatRoughnessFromWeightTexture = !1, GJ.set(this, (0, ad.i)(this, MP, void 0)), this._fuzzWeight = ((0, ad.i)(this, FP), new uJ("fuzz_weight", 0, "vFuzzWeight", 1, 0)), vJ.set(this, (0, ad.i)(this, YP, void 0)), this._fuzzWeightTexture = ((0, ad.i)(this, mP), new tJ("fuzz_weight", "fuzzWeight", "FUZZ_WEIGHT")), xJ.set(this, (0, ad.i)(this, bP, void 0)), this._fuzzColor = ((0, ad.i)(this, SP), new uJ("fuzz_color", ud.c.White(), "vFuzzColor", 3, 0)), qJ.set(this, (0, ad.i)(this, jP, void 0)), this._fuzzColorTexture = ((0, ad.i)(this, XP), new tJ("fuzz_color", "fuzzColor", "FUZZ_COLOR")), BJ.set(this, (0, ad.i)(this, fP, void 0)), this._fuzzRoughness = ((0, ad.i)(this, nP), new uJ("fuzz_roughness", .5, "vFuzzRoughness", 1, 0)), aJ.set(this, (0, ad.i)(this, UP, void 0)), this._fuzzRoughnessTexture = ((0, ad.i)(this, yP), new tJ("fuzz_roughness", "fuzzRoughness", "FUZZ_ROUGHNESS")), MJ.set(this, (0, ad.i)(this, DP, void 0)), this._geometryThinWalled = ((0, ad.i)(this, TP), new uJ("geometry_thin_walled", 0, "vGeometryThinWalled", 1, 0)), FJ.set(this, (0, ad.i)(this, EP, void 0)), this._geometryNormalTexture = ((0, ad.i)(this, cP), new tJ("geometry_normal", "geometryNormal", "GEOMETRY_NORMAL")), YJ.set(this, (0, ad.i)(this, hP, void 0)), this._geometryTangent = ((0, ad.i)(this, rP), new uJ("geometry_tangent", new yd.k(1, 0), "vSpecularAnisotropy", 3, 0)), mJ.set(this, (0, ad.i)(this, uP, void 0)), this._geometryTangentTexture = ((0, ad.i)(this, tP), new tJ("geometry_tangent", "geometryTangent", "GEOMETRY_TANGENT")), bJ.set(this, (0, ad.i)(this, VP, void 0)), this._geometryCoatNormalTexture = ((0, ad.i)(this, zP), new tJ("geometry_coat_normal", "geometryCoatNormal", "GEOMETRY_COAT_NORMAL")), SJ.set(this, (0, ad.i)(this, HP, void 0)), this._geometryCoatTangent = ((0, ad.i)(this, wP), new uJ("geometry_coat_tangent", new yd.k(1, 0), "vGeometryCoatTangent", 2, 0)), jJ.set(this, (0, ad.i)(this, AP, void 0)), this._geometryCoatTangentTexture = ((0, ad.i)(this, dZ), new tJ("geometry_coat_tangent", "geometryCoatTangent", "GEOMETRY_COAT_TANGENT")), XJ.set(this, (0, ad.i)(this, JZ, void 0)), this._geometryOpacity = ((0, ad.i)(this, kZ), new uJ("geometry_opacity", 1, "vBaseColor", 4, 3)), fJ.set(this, (0, ad.i)(this, pZ, void 0)), this._geometryOpacityTexture = ((0, ad.i)(this, NZ), new tJ("geometry_opacity", "geometryOpacity", "GEOMETRY_OPACITY")), nJ.set(this, (0, ad.i)(this, WZ, void 0)), this._geometryThickness = ((0, ad.i)(this, PZ), new uJ("geometry_thickness", 0, "vGeometryThickness", 1, 0)), UJ.set(this, (0, ad.i)(this, ZZ, void 0)), this._geometryThicknessTexture = ((0, ad.i)(this, gZ), new tJ("geometry_thickness", "geometryThickness", "GEOMETRY_THICKNESS")), yJ.set(this, (0, ad.i)(this, CZ, void 0)), this._emissionLuminance = ((0, ad.i)(this, KZ), new uJ("emission_luminance", 1, "vLightingIntensity", 4, 1)), DJ.set(this, (0, ad.i)(this, oZ, void 0)), this._emissionColor = ((0, ad.i)(this, lZ), new uJ("emission_color", ud.c.Black(), "vEmissionColor", 3)), EJ.set(this, (0, ad.i)(this, QZ, void 0)), this._emissionColorTexture = ((0, ad.i)(this, LZ), new tJ("emission_color", "emissionColor", "EMISSION_COLOR")), hJ.set(this, (0, ad.i)(this, OZ, void 0)), this._thinFilmWeight = ((0, ad.i)(this, eZ), new uJ("thin_film_weight", 0, "vThinFilmWeight", 1, 0)), VJ.set(this, (0, ad.i)(this, RZ, void 0)), this._thinFilmWeightTexture = ((0, ad.i)(this, IZ), new tJ("thin_film_weight", "thinFilmWeight", "THIN_FILM_WEIGHT")), zJ.set(this, (0, ad.i)(this, GZ, void 0)), this._thinFilmThickness = ((0, ad.i)(this, vZ), new uJ("thin_film_thickness", .5, "vThinFilmThickness", 2, 0)), AJ.set(this, (0, ad.i)(this, xZ, void 0)), this._thinFilmThicknessMin = ((0, ad.i)(this, qZ), new uJ("thin_film_thickness_min", 0, "vThinFilmThickness", 2, 1)), dk.set(this, (0, ad.i)(this, BZ, void 0)), this._thinFilmThicknessTexture = ((0, ad.i)(this, sZ), new tJ("thin_film_thickness", "thinFilmThickness", "THIN_FILM_THICKNESS")), Jk.set(this, (0, ad.i)(this, iZ, void 0)), this._thinFilmIor = ((0, ad.i)(this, aZ), new uJ("thin_film_ior", 1.4, "vThinFilmIor", 1, 0)), kk.set(this, (0, ad.i)(this, MZ, void 0)), this._ambientOcclusionTexture = ((0, ad.i)(this, FZ), new tJ("ambient_occlusion", "ambientOcclusion", "AMBIENT_OCCLUSION")), this._sssQuality = dd.SSS_QUALITY_MEDIUM, this._sssIrradianceTexture = null, this._sssDepthTexture = null, this._uniformsList = {}, this._uniformsArray = [], this._samplersList = {}, this._samplerDefines = {}, pk.set(this, (0, ad.i)(this, YZ, 1)), Nk.set(this, ((0, ad.i)(this, mZ), (0, ad.i)(this, bZ, 1))), Wk.set(this, ((0, ad.i)(this, SZ), (0, ad.i)(this, jZ, !1))), Pk.set(this, ((0, ad.i)(this, XZ), (0, ad.i)(this, fZ, !1))), Zk.set(this, ((0, ad.i)(this, nZ), (0, ad.i)(this, UZ, .4))), gk.set(this, ((0, ad.i)(this, yZ), (0, ad.i)(this, DZ, !1))), Ck.set(this, ((0, ad.i)(this, TZ), (0, ad.i)(this, EZ, !1))), Kk.set(this, ((0, ad.i)(this, cZ), (0, ad.i)(this, hZ, !1))), lk.set(this, ((0, ad.i)(this, rZ), (0, ad.i)(this, uZ, !1))), Qk.set(this, ((0, ad.i)(this, tZ), (0, ad.i)(this, VZ, !1))), Lk.set(this, ((0, ad.i)(this, zZ), (0, ad.i)(this, HZ, .05))), Ok.set(this, ((0, ad.i)(this, wZ), (0, ad.i)(this, AZ, !1))), ek.set(this, ((0, ad.i)(this, dg), (0, ad.i)(this, Jg, !1))), Rk.set(this, ((0, ad.i)(this, kg), (0, ad.i)(this, pg, 4))), Ik.set(this, ((0, ad.i)(this, Ng), (0, ad.i)(this, Wg, !1))), Gk.set(this, ((0, ad.i)(this, Pg), (0, ad.i)(this, Zg, !1))), vk.set(this, ((0, ad.i)(this, gg), (0, ad.i)(this, Cg, !1))), xk.set(this, ((0, ad.i)(this, Kg), (0, ad.i)(this, og, !1))), qk.set(this, ((0, ad.i)(this, lg), (0, ad.i)(this, Qg, !1))), Bk.set(this, ((0, ad.i)(this, Lg), (0, ad.i)(this, Og, null))), sk.set(this, ((0, ad.i)(this, eg), (0, ad.i)(this, Rg, !1))), ik.set(this, ((0, ad.i)(this, Ig), (0, ad.i)(this, Gg, !1))), ak.set(this, ((0, ad.i)(this, vg), (0, ad.i)(this, xg, !0))), Mk.set(this, ((0, ad.i)(this, qg), (0, ad.i)(this, Bg, !0))), Fk.set(this, ((0, ad.i)(this, sg), (0, ad.i)(this, ig, !1))), Yk.set(this, ((0, ad.i)(this, ag), (0, ad.i)(this, Mg, !1))), this._lightingInfos = ((0, ad.i)(this, Fg), new yd.o(this.directIntensity, 1, this.environmentIntensity, 1)), this._radianceTexture = null, this._useSpecularWeightFromAlpha = !1, this._useSpecularWeightFromSpecularColorTexture = !1, this._useSpecularRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessFromGreenChannel = !1, this._useGltfStyleAnisotropy = !1, this._useFuzzRoughnessFromTextureAlpha = !1, this._useSubsurfaceWeightFromTextureAlpha = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromBaseColorTexture = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallicFromMetallicTextureBlue = !1, this._useThinFilmThicknessFromTextureGreen = !1, this._useGeometryThicknessFromGreenChannel = !1, this._lightFalloff = Wd.b.LIGHTFALLOFF_PHYSICAL, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._environmentFuzzBRDFTexture = null, this._backgroundRefractionTexture = null, this._refractionHighQualityBlur = !0, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._fuzzSampleNumber = 4, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new Yd.h(16), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, mk.set(this, (0, ad.i)(this, Yg, 0)), this.debugLimit = ((0, ad.i)(this, mg), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this._transparencyMode = Wd.b.MATERIAL_OPAQUE, this.Wm() && !this.Wm()?.eL().isWebGPU && this.Wm().eL().uL < 2 && Fd.c.Error("OpenPBRMaterial: WebGL 2.0 or above is required for this material."), dd._noiseTextures[this.Wm().uniqueId] || (dd._noiseTextures[this.Wm().uniqueId] = new md.c(iJ.h.GetAssetUrl("https://assets.babylonjs.com/core/blue_noise/blue_noise_rgb.png"), this.Wm(), !1, !0, 1), this.Wm().Zm.addOnce((() => {
              dd._noiseTextures[this.Wm().uniqueId]?.dispose(), delete dd._noiseTextures[this.Wm().uniqueId]
            }))), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), Hd.e.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget && this._renderTargets.push(this._radianceTexture), Hd.e.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget && this._renderTargets.push(this._backgroundRefractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = nd(this.Wm()), this._environmentFuzzBRDFTexture = fd(this.Wm()), this.prePassConfiguration = new rd.e, this._propertyList = {};
            for (const dd of Object.getOwnPropertyNames(this)) {
              const Jd = this[dd];
              Jd instanceof uJ && (this._propertyList[dd] = Jd)
            }
            Object.keys(this._propertyList).forEach((dd => {
              const Jd = this._propertyList[dd];
              let kd = this._uniformsList[Jd.targetUniformName];
              kd ? kd.numComponents !== Jd.targetUniformComponentNum ? Fd.c.Error(`Uniform ${Jd.targetUniformName} already exists of size ${kd.numComponents}, but trying to set it to ${Jd.targetUniformComponentNum}.`) : kd.requiredDefine !== Jd.requiredDefine && (kd.requiredDefine = void 0) : (kd = new rJ(Jd.targetUniformName, Jd.targetUniformComponentNum), kd.requiredDefine = Jd.requiredDefine, this._uniformsList[Jd.targetUniformName] = kd), "" === kd.firstLinkedKey && (kd.firstLinkedKey = Jd.name), kd.linkedProperties[Jd.name] = Jd
            })), this._uniformsArray = Object.values(this._uniformsList), this._samplersList = {};
            for (const dd of Object.getOwnPropertyNames(this)) {
              const Jd = this[dd];
              Jd instanceof tJ && (this._samplersList[dd] = Jd)
            }
            for (const dd in this._samplersList) {
              const Jd = this._samplersList[dd].textureDefine;
              this._samplerDefines[Jd] = {
                type: "boolean",
                default: !1
              }, this._samplerDefines[Jd + "DIRECTUV"] = {
                type: "number",
                default: 0
              }, this._samplerDefines[Jd + "_GAMMA"] = {
                type: "boolean",
                default: !1
              }
            }
            this._baseWeight, this._baseWeightTexture, this._baseColor, this._baseColorTexture, this._baseDiffuseRoughness, this._baseDiffuseRoughnessTexture, this._baseMetalness, this._baseMetalnessTexture, this._specularWeight, this._specularWeightTexture, this._specularColor, this._specularColorTexture, this._specularRoughness, this._specularIor, this._specularRoughnessTexture, this._specularRoughnessAnisotropy, this._specularRoughnessAnisotropyTexture, this._transmissionWeight, this._transmissionWeightTexture, this._transmissionColor, this._transmissionColorTexture, this._transmissionDepth, this._transmissionDepthTexture, this._transmissionScatter, this._transmissionScatterTexture, this._transmissionScatterAnisotropy, this._transmissionDispersionScale, this._transmissionDispersionScaleTexture, this._transmissionDispersionAbbeNumber, this._subsurfaceWeight, this._subsurfaceWeightTexture, this._subsurfaceColor, this._subsurfaceColorTexture, this._subsurfaceRadius, this._subsurfaceRadiusScale, this._subsurfaceRadiusScaleTexture, this._subsurfaceScatterAnisotropy, this._coatWeight, this._coatWeightTexture, this._coatColor, this._coatColorTexture, this._coatRoughness, this._coatRoughnessTexture, this._coatRoughnessAnisotropy, this._coatRoughnessAnisotropyTexture, this._coatIor, this._coatDarkening, this._coatDarkeningTexture, this._fuzzWeight, this._fuzzWeightTexture, this._fuzzColor, this._fuzzColorTexture, this._fuzzRoughness, this._fuzzRoughnessTexture, this._geometryThinWalled, this._geometryNormalTexture, this._geometryTangent, this._geometryTangentTexture, this._geometryCoatNormalTexture, this._geometryCoatTangent, this._geometryCoatTangentTexture, this._geometryOpacity, this._geometryOpacityTexture, this._geometryThickness, this._geometryThicknessTexture, this._thinFilmWeight, this._thinFilmWeightTexture, this._thinFilmThickness, this._thinFilmThicknessMin, this._thinFilmThicknessTexture, this._thinFilmIor, this._emissionLuminance, this._emissionColor, this._emissionColorTexture, this._ambientOcclusionTexture
          }
          get hasRenderTargetTextures() {
            return !!(Hd.e.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget) || (!!(Hd.e.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
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
            return this._hasAlphaChannel() && this._transparencyMode !== Wd.b.MATERIAL_OPAQUE && !this.geometryOpacityTexture
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
          clone(Jd) {
            let kd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              pd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const Nd = sJ.c.Clone((() => new dd(Jd, this.Wm())), this, {
              cloneTexturesOnlyOnce: kd
            });
            return Nd.id = Jd, Nd.name = Jd, this.stencil.copyTo(Nd.stencil), this._clonePlugins(Nd, pd), Nd
          }
          serialize() {
            const dd = super.serialize();
            return dd.customType = "BABYLON.OpenPBRMaterial", dd
          }
          static Parse(Jd, kd, pd) {
            const Nd = sJ.c.Parse((() => new dd(Jd.name, kd)), Jd, kd, pd);
            return Jd.stencil && Nd.stencil.parse(Jd.stencil, kd, pd), Wd.b._ParsePlugins(Jd, Nd, kd, pd), Nd
          }
          forceCompilation(dd, Jd, kd) {
            const pd = {
              clipPlane: !1,
              useInstances: !1,
              ...kd
            };
            this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
            (() => {
              if (this._breakShaderLoadedCheck) return;
              const kd = new HJ({
                  ...this._eventInfo.defineNames || {},
                  ...this._samplerDefines || {}
                }),
                Nd = this._prepareEffect(dd, dd, kd, void 0, void 0, pd.useInstances, pd.clipPlane);
              this._onEffectCreatedObservable && (cJ.effect = Nd, cJ.subMesh = null, this._onEffectCreatedObservable.notifyObservers(cJ)), Nd.isReady() ? Jd && Jd(this) : Nd.onCompileObservable.add((() => {
                Jd && Jd(this)
              }))
            })()
          }
          isReadyForSubMesh(Jd, kd, pd) {
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const Nd = kd._drawWrapper;
            if (Nd.effect && this.isFrozen && Nd._wasPreviouslyReady && Nd._wasPreviouslyUsingInstances === pd) return !0;
            kd.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), kd.materialDefines = new HJ({
              ...this._eventInfo.defineNames || {},
              ...this._samplerDefines || {}
            }));
            const Wd = kd.materialDefines;
            if (this._isReadyForSubMesh(kd)) return !0;
            const Pd = this.Wm(),
              Zd = Pd.eL();
            if (Wd._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, Pd.texturesEnabled)) {
              for (const dd in this._samplersList) {
                const Jd = this._samplersList[dd];
                if (Jd.value && !Jd.value.isReadyOrNotBlocking()) return !1
              }
              const Jd = this._getRadianceTexture();
              if (Jd && Hd.e.ReflectionTextureEnabled) {
                if (!Jd.isReadyOrNotBlocking()) return !1;
                if (Jd.irradianceTexture) {
                  if (!Jd.irradianceTexture.isReadyOrNotBlocking()) return !1
                } else if (!Jd.sphericalPolynomial && Jd.getInternalTexture()?._sphericalPolynomialPromise) return !1
              }
              if (this._environmentBRDFTexture && Hd.e.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1;
              if (this._environmentFuzzBRDFTexture && Hd.e.ReflectionTextureEnabled && !this._environmentFuzzBRDFTexture.isReady()) return !1;
              if (this._backgroundRefractionTexture && Hd.e.RefractionTextureEnabled && !this._backgroundRefractionTexture.isReadyOrNotBlocking()) return !1;
              if (dd._noiseTextures[Pd.uniqueId] && !dd._noiseTextures[Pd.uniqueId].isReady()) return !1;
              if (this._sssIrradianceTexture && this._sssDepthTexture) {
                if (!this._sssIrradianceTexture.isReady()) return !1;
                if (!this._sssDepthTexture.isReady()) return !1
              }
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Wd, this._eventInfo.subMesh = kd, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (Wd._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
            if (Wd.AREALIGHTUSED)
              for (let dd = 0; dd < Jd.lightSources.length; dd++)
                if (!Jd.lightSources[dd]._isReady()) return !1;
            if (Zd.getCaps().standardDerivatives || Jd.isVerticesDataPresent(Dd.j.NormalKind) || (Jd.createNormals(!0), Fd.c.Warn("OpenPBRMaterial: Normals have been created for the mesh: " + Jd.name)), !(0, Ad.e)(Pd, Jd, this._maxSimultaneousLights, this._disableLighting)) return !1;
            const gd = kd.effect,
              Cd = Wd._areLightsDisposed,
              Kd = this._prepareEffect(Jd, kd.getRenderingMesh(), Wd, this.onCompiled, this.onError, pd, null);
            let od = !1;
            if (Kd)
              if (this._onEffectCreatedObservable && (cJ.effect = Kd, cJ.subMesh = kd, this._onEffectCreatedObservable.notifyObservers(cJ)), this.allowShaderHotSwapping && gd && !Kd.isReady()) {
                if (Wd.markAsUnprocessed(), od = this.isFrozen, Cd) return Wd._areLightsDisposed = !0, !1
              } else Pd.resetCachedMaterial(), kd.setEffect(Kd, Wd, this._materialContext);
            return !(!kd.effect || !kd.effect.isReady()) && (Wd._renderId = Pd.getRenderId(), Nd._wasPreviouslyReady = !od, Nd._wasPreviouslyUsingInstances = !!pd, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const dd = this._uniformBuffer;
            dd.addUniform("vTangentSpaceParams", 2), dd.addUniform("vLightingIntensity", 4), dd.addUniform("pointSize", 1), dd.addUniform("vDebugMode", 2), dd.addUniform("renderTargetSize", 2), dd.addUniform("cameraInfo", 4), dd.addUniform("vTextureRepetitionHexTilingParams", 4), dd.addUniform("backgroundRefractionMatrix", 16), dd.addUniform("vBackgroundRefractionInfos", 3), (0, Ad.jb)(dd, !0, !0, !0, !0, !0), Object.values(this._uniformsList).forEach((Jd => {
              dd.addUniform(Jd.name, Jd.numComponents)
            })), Object.values(this._samplersList).forEach((Jd => {
              dd.addUniform(Jd.samplerInfoName, 2), dd.addUniform(Jd.samplerMatrixName, 16)
            })), super.buildUniformLayout()
          }
          bindPropertiesForSubMesh(dd, Jd, kd, pd) {
            if (0 === this.geometryThickness) dd.updateFloat("vGeometryThickness", 0);
            else {
              pd.getRenderingMesh().getWorldMatrix().decompose(yd.h.IL[0]);
              const Jd = Math.max(Math.abs(yd.h.IL[0].x), Math.abs(yd.h.IL[0].y), Math.abs(yd.h.IL[0].z));
              dd.updateFloat("vGeometryThickness", this.geometryThickness * Jd)
            }
          }
          bindForSubMesh(Jd, kd, pd) {
            const Nd = this.Wm(),
              Wd = pd.materialDefines;
            if (!Wd) return;
            const Pd = pd.effect;
            if (!Pd) return;
            this._activeEffect = Pd, kd.getMeshUniformBuffer().bindToEffect(Pd, "Mesh"), kd.transferToEffect(Jd);
            const Zd = Nd.eL();
            this._uniformBuffer.bindToEffect(Pd, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, Nd, kd, Jd, this.isFrozen), LJ.b.Bind(Zd.currentRenderPassId, this._activeEffect, kd, Jd, this);
            const gd = Nd.activeCamera;
            gd ? this._uniformBuffer.updateFloat4("cameraInfo", gd.minZ, gd.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const Cd = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", Cd[0], Cd[1], Cd[2], Cd[3]), this._eventInfo.subMesh = pd, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), Wd.OBJECTSPACE_NORMALMAP && (Jd.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const Kd = this._mustRebind(Nd, Pd, pd, kd.visibility),
              od = Zd._features.needToAlwaysBindUniformBuffers;
            (0, Ad.g)(kd, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, lJ.e)(this._activeEffect, this._vertexPullingMetadata);
            const ld = this._uniformBuffer;
            if (Kd) {
              this.bindViewProjection(Pd);
              const Jd = this._getRadianceTexture();
              if (!ld.useUbo || !this.isFrozen || !ld.isSync || pd._drawWrapper._forceRebindOnNextCall) {
                if (Nd.texturesEnabled) {
                  for (const dd in this._samplersList) {
                    const Jd = this._samplersList[dd];
                    Jd.value && (ld.updateFloat2(Jd.samplerInfoName, Jd.value.coordinatesIndex, Jd.value.level), (0, Ad.C)(Jd.value, ld, Jd.samplerPrefix))
                  }(this.geometryNormalTexture || this.geometryCoatNormalTexture) && (Nd._mirroredCameraPosition ? ld.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : ld.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, Ad.n)(Nd, Wd, ld, ud.c.White(), Jd, this.realTimeFiltering, !0, !0, !0, !0, !0)
                }
                this.pointsCloud && ld.updateFloat("pointSize", this.pointSize);
                const dd = this._uniformsArray;
                for (let Jd = 0, kd = dd.length; Jd < kd; Jd++) {
                  const kd = dd[Jd];
                  (void 0 === kd.requiredDefine || Wd[kd.requiredDefine]) && (4 === kd.numComponents ? (kd.populateVectorFromLinkedProperties(yd.h.Vector4[0]), ld.updateVector4(kd.name, yd.h.Vector4[0])) : 3 === kd.numComponents ? (kd.populateVectorFromLinkedProperties(yd.h.IL[0]), ld.updateVector3(kd.name, yd.h.IL[0])) : 2 === kd.numComponents ? (kd.populateVectorFromLinkedProperties(yd.h.Vector2[0]), ld.updateFloat2(kd.name, yd.h.Vector2[0].x, yd.h.Vector2[0].y)) : 1 === kd.numComponents && ld.updateFloat(kd.name, kd.linkedProperties[kd.firstLinkedKey].value))
                }
                this._lightingInfos.x = this.directIntensity, this._lightingInfos.y = this.emissionLuminance, this._lightingInfos.z = this.environmentIntensity * Nd.environmentIntensity, this._lightingInfos.w = 1, ld.updateVector4("vLightingIntensity", this._lightingInfos), ld.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
              }
              if (Nd.texturesEnabled) {
                for (const dd in this._samplersList) {
                  const Jd = this._samplersList[dd];
                  Jd.value && ld.setTexture(Jd.samplerName, Jd.value)
                }
                if ((0, Ad.o)(Nd, Wd, ld, Jd, this.realTimeFiltering), Wd.ENVIRONMENTBRDF && ld.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), Wd.FUZZENVIRONMENTBRDF && ld.setTexture("environmentFuzzBrdfSampler", this._environmentFuzzBRDFTexture), Wd.REFRACTED_BACKGROUND && (ld.setTexture("backgroundRefractionSampler", this._backgroundRefractionTexture), ld.o3("backgroundRefractionMatrix", this._backgroundRefractionTexture.getReflectionTextureMatrix()), yd.h.IL[1].set(Math.log2(this._backgroundRefractionTexture.getSize().width), 0, 0), ld.updateVector3("vBackgroundRefractionInfos", yd.h.IL[1])), (Wd.ANISOTROPIC || Wd.FUZZ || Wd.REFRACTED_BACKGROUND || Wd.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && ld.setTexture("blueNoiseSampler", dd._noiseTextures[this.Wm().uniqueId]), Wd.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && this.sssIrradianceTexture && this.sssDepthTexture) {
                  const dd = this.sssIrradianceTexture.getSize().width,
                    Jd = this.sssIrradianceTexture.getSize().height;
                  ld.setTexture("sceneIrradianceSampler", this.sssIrradianceTexture), ld.setTexture("sceneDepthSampler", this.sssDepthTexture), ld.updateFloat2("renderTargetSize", dd, Jd)
                }
              }
              this.Wm().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(kd) && this.Wm().depthPeelingRenderer.bind(Pd), this._eventInfo.subMesh = pd, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, oJ.i)(this._activeEffect, this, Nd), this.bindEyePosition(Pd)
            } else od && (this._needToBindSceneUbo = !0);
            this.bindPropertiesForSubMesh(this._uniformBuffer, Nd, Nd.eL(), pd), !Kd && this.isFrozen && !od || !Nd.lightsEnabled || this._disableLighting || (0, Ad.q)(Nd, kd, this._activeEffect, Wd, this._maxSimultaneousLights), !Kd && this.isFrozen || (this.bindView(Pd), (0, Ad.k)(Nd, kd, this._activeEffect, !0), Wd.NUM_MORPH_INFLUENCERS && (0, Ad.v)(kd, this._activeEffect), Wd.BAKED_VERTEX_ANIMATION_TEXTURE && kd.bakedVertexAnimationManager?.bind(Pd, Wd.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, Ad.s)(Wd, this._activeEffect, Nd)), this._afterBind(kd, this._activeEffect, pd), ld.update()
          }
          getAnimatables() {
            const dd = super.getAnimatables();
            for (const Jd in this._samplersList) {
              const kd = this._samplersList[Jd];
              kd.value && kd.value.animations && kd.value.animations.length > 0 && dd.push(kd.value)
            }
            return this._radianceTexture && this._radianceTexture.animations && this._radianceTexture.animations.length > 0 && dd.push(this._radianceTexture), dd
          }
          getActiveTextures() {
            const dd = super.getActiveTextures();
            for (const Jd in this._samplersList) {
              const kd = this._samplersList[Jd];
              kd.value && dd.push(kd.value)
            }
            return this._radianceTexture && dd.push(this._radianceTexture), dd
          }
          hasTexture(dd) {
            if (super.hasTexture(dd)) return !0;
            for (const Jd in this._samplersList) {
              if (this._samplersList[Jd].value === dd) return !0
            }
            return this._radianceTexture === dd
          }
          setPrePassRenderer() {
            return !1
          }
          dispose(dd, Jd) {
            if (this._breakShaderLoadedCheck = !0, Jd) {
              this._environmentBRDFTexture && this.Wm().openPBREnvironmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._environmentFuzzBRDFTexture && this.Wm().environmentFuzzBRDFTexture !== this._environmentFuzzBRDFTexture && this._environmentFuzzBRDFTexture.dispose(), this._backgroundRefractionTexture = null;
              for (const dd in this._samplersList) {
                const Jd = this._samplersList[dd];
                Jd.value?.dispose()
              }
              this._radianceTexture?.dispose()
            }
            this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(dd, Jd)
          }
          _getRadianceTexture() {
            return this._radianceTexture ? this._radianceTexture : this.Wm().environmentTexture
          }
          _prepareEffect(Jd, kd, pd) {
            let Nd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              Wd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              Pd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              Zd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
            if (this._prepareDefines(Jd, kd, pd, Pd, Zd), !pd.isDirty) return null;
            pd.markAsProcessed();
            const gd = this.Wm().eL(),
              Cd = new wd.e;
            let Kd = 0;
            pd.USESPHERICALINVERTEX && Cd.addFallback(Kd++, "USESPHERICALINVERTEX"), pd.FOG && Cd.addFallback(Kd, "FOG"), pd.SPECULARAA && Cd.addFallback(Kd, "SPECULARAA"), pd.POINTSIZE && Cd.addFallback(Kd, "POINTSIZE"), pd.LOGARITHMICDEPTH && Cd.addFallback(Kd, "LOGARITHMICDEPTH"), pd.PARALLAX && Cd.addFallback(Kd, "PARALLAX"), pd.PARALLAX_RHS && Cd.addFallback(Kd, "PARALLAX_RHS"), pd.PARALLAXOCCLUSION && Cd.addFallback(Kd++, "PARALLAXOCCLUSION"), pd.ENVIRONMENTBRDF && Cd.addFallback(Kd++, "ENVIRONMENTBRDF"), pd.TANGENT && Cd.addFallback(Kd++, "TANGENT"), Kd = (0, Ad.D)(pd, Cd, this._maxSimultaneousLights, Kd), pd.SPECULARTERM && Cd.addFallback(Kd++, "SPECULARTERM"), pd.USESPHERICALFROMREFLECTIONMAP && Cd.addFallback(Kd++, "USESPHERICALFROMREFLECTIONMAP"), pd.USEIRRADIANCEMAP && Cd.addFallback(Kd++, "USEIRRADIANCEMAP"), pd.NORMAL && Cd.addFallback(Kd++, "NORMAL"), pd.VERTEXCOLOR && Cd.addFallback(Kd++, "VERTEXCOLOR"), pd.MORPHTARGETS && Cd.addFallback(Kd++, "MORPHTARGETS"), pd.MULTIVIEW && Cd.addFallback(0, "MULTIVIEW");
            const od = [Dd.j.PositionKind];
            pd.NORMAL && od.push(Dd.j.NormalKind), pd.TANGENT && od.push(Dd.j.TangentKind);
            for (let dd = 1; dd <= 6; ++dd) pd["UV" + dd] && od.push(`uv${1===dd?"":dd}`);
            pd.VERTEXCOLOR && od.push(Dd.j.ColorKind), (0, Ad.I)(od, Jd, pd, Cd), (0, Ad.K)(od, pd), (0, Ad.O)(od, Jd, pd), (0, Ad.H)(od, Jd, pd);
            let ld = "openpbr";
            const Qd = ["world", "view", "viewProjection", "projection", "vEyePosition", "inverseProjection", "renderTargetSize", "vLightsType", "visibility", "vFogInfos", "vFogColor", "pointSize", "mBones", "normalMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams", "backgroundRefractionMatrix", "vBackgroundRefractionInfos"];
            for (const dd in this._uniformsList) Qd.push(dd);
            const Ld = ["environmentBrdfSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
            pd.FUZZENVIRONMENTBRDF && Ld.push("environmentFuzzBrdfSampler"), pd.REFRACTED_BACKGROUND && Ld.push("backgroundRefractionSampler"), (pd.ANISOTROPIC || pd.FUZZ || pd.REFRACTED_BACKGROUND || pd.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && Ld.push("blueNoiseSampler"), pd.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && (Ld.push("sceneIrradianceSampler"), Ld.push("sceneDepthSampler"));
            for (const dd in this._samplersList) {
              const Jd = this._samplersList[dd];
              Ld.push(Jd.samplerName), Qd.push(Jd.samplerInfoName), Qd.push(Jd.samplerMatrixName)
            }(0, Ad.lb)(Qd, Ld, !0);
            const Od = ["Material", "Scene", "Mesh"],
              ed = {
                maxSimultaneousLights: this._maxSimultaneousLights,
                maxSimultaneousMorphTargets: pd.NUM_MORPH_INFLUENCERS
              };
            if (this._eventInfo.fallbacks = Cd, this._eventInfo.fallbackRank = Kd, this._eventInfo.defines = pd, this._eventInfo.uniforms = Qd, this._eventInfo.attributes = od, this._eventInfo.samplers = Ld, this._eventInfo.uniformBuffersNames = Od, this._eventInfo.customCode = void 0, this._eventInfo.mesh = Jd, this._eventInfo.indexParameters = ed, this._callbackPluginEventGeneric(128, this._eventInfo), LJ.b.AddUniformsAndSamplers(Qd, Ld), rd.e.AddUniforms(Qd), rd.e.AddSamplers(Ld), (0, oJ.e)(Qd), this._useVertexPulling) {
              const dd = kd?.geometry;
              dd && (this._vertexPullingMetadata = (0, lJ.h)(dd), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((dd, Jd) => {
                Qd.push(`vp_${Jd}_info`)
              })))
            } else this._vertexPullingMetadata = null;
            Vd.e && (Vd.e.PrepareUniforms(Qd, pd), Vd.e.PrepareSamplers(Ld, pd)), (0, Ad.pb)({
              uniformsNames: Qd,
              uniformBuffersNames: Od,
              samplers: Ld,
              defines: pd,
              maxSimultaneousLights: this._maxSimultaneousLights,
              shaderLanguage: this._shaderLanguage
            });
            const Rd = {};
            this.customShaderNameResolve && (ld = this.customShaderNameResolve(ld, Qd, Od, Ld, pd, od, Rd));
            const Id = pd.toString(),
              Gd = gd.createEffect(ld, {
                attributes: od,
                uniformsNames: Qd,
                uniformBuffersNames: Od,
                samplers: Ld,
                defines: Id,
                fallbacks: Cd,
                onCompiled: Nd,
                onError: Wd,
                indexParameters: ed,
                processFinalCode: Rd.processFinalCode,
                processCodeAfterIncludes: this._eventInfo.customCode,
                multiTarget: pd.PREPASS,
                shaderLanguage: this._shaderLanguage,
                extraInitializationsAsync: dd._ShaderLoader.getLoadCallback(this._shaderLanguage)
              }, gd);
            return this._eventInfo.customCode = void 0, Gd
          }
          _prepareDefines(Jd, kd, pd) {
            let Nd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              Pd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const Zd = kd.hasThinInstances,
              gd = this.Wm(),
              Cd = gd.eL();
            (0, Ad.ab)(gd, Jd, pd, !0, this._maxSimultaneousLights, this._disableLighting), pd._needNormals = !0, (0, Ad.gb)(gd, pd);
            const Kd = this.needAlphaBlendingForMesh(Jd) && this.Wm().useOrderIndependentTransparency;
            if ((0, Ad.ib)(gd, pd, this.canRenderToMRT && !Kd), (0, Ad.hb)(gd, pd, Kd), LJ.b.PrepareDefines(Cd.currentRenderPassId, Jd, pd), pd._areTexturesDirty) {
              pd._needUVs = !1;
              for (let dd = 1; dd <= 6; ++dd) pd["MAINUV" + dd] = !1;
              if (gd.texturesEnabled) {
                for (const kd in this._samplersList) {
                  const dd = this._samplersList[kd];
                  dd.value ? ((0, Ad.db)(dd.value, pd, dd.textureDefine), pd[dd.textureDefine + "_GAMMA"] = dd.value.gammaSpace) : pd[dd.textureDefine] = !1
                }
                const dd = this._getRadianceTexture(),
                  Jd = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || Cd.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
                if ((0, Ad.Z)(gd, dd, pd, this.realTimeFiltering, this.realTimeFilteringQuality, !Jd), this._baseMetalnessTexture && (pd.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed), pd.SPECULAR_WEIGHT_IN_ALPHA = this._useSpecularWeightFromAlpha, pd.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = this._useSpecularWeightFromSpecularColorTexture, pd.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useSpecularRoughnessAnisotropyFromTangentTexture, pd.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useCoatRoughnessAnisotropyFromTangentTexture, pd.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = this._useCoatRoughnessFromGreenChannel, pd.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = this._useRoughnessFromMetallicTextureGreen, pd.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = this._useFuzzRoughnessFromTextureAlpha, pd.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = this._useSubsurfaceWeightFromTextureAlpha, pd.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = this._useMetallicFromMetallicTextureBlue, pd.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = this._useThinFilmThicknessFromTextureGreen, pd.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = this._useGeometryThicknessFromGreenChannel, this.geometryNormalTexture ? (this._useParallax && this.baseColorTexture && Hd.e.DiffuseTextureEnabled ? (pd.PARALLAX = !0, pd.PARALLAX_RHS = gd.useRightHandedSystem, pd.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : pd.PARALLAX = !1, pd.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (pd.PARALLAX = !1, pd.PARALLAX_RHS = !1, pd.PARALLAXOCCLUSION = !1, pd.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && Hd.e.ReflectionTextureEnabled ? (pd.ENVIRONMENTBRDF = !0, pd.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (pd.ENVIRONMENTBRDF = !1, pd.ENVIRONMENTBRDF_RGBD = !1), this._environmentFuzzBRDFTexture ? pd.FUZZENVIRONMENTBRDF = !0 : pd.FUZZENVIRONMENTBRDF = !1, this.hasTransparency) {
                  pd.REFRACTED_BACKGROUND = !!this._backgroundRefractionTexture && Hd.e.RefractionTextureEnabled, pd.REFRACTION_HIGH_QUALITY_BLUR = this._refractionHighQualityBlur, pd.REFRACTED_LIGHTS = !0;
                  const dd = this._getRadianceTexture();
                  dd ? (pd.REFRACTED_ENVIRONMENT = Hd.e.RefractionTextureEnabled, pd.REFRACTED_ENVIRONMENT_OPPOSITEZ = this.Wm().useRightHandedSystem ? !dd.invertZ : dd.invertZ, pd.REFRACTED_ENVIRONMENT_LOCAL_CUBE = dd.isCube && dd.boundingBoxSize) : pd.REFRACTED_ENVIRONMENT = !1
                } else pd.REFRACTED_BACKGROUND = !1, pd.REFRACTED_LIGHTS = !1, pd.REFRACTED_ENVIRONMENT = !1;
                this._shouldUseAlphaFromBaseColorTexture() ? pd.ALPHA_FROM_BASE_COLOR_TEXTURE = !0 : pd.ALPHA_FROM_BASE_COLOR_TEXTURE = !1
              }
              this._lightFalloff === Wd.b.LIGHTFALLOFF_STANDARD ? (pd.USEPHYSICALLIGHTFALLOFF = !1, pd.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === Wd.b.LIGHTFALLOFF_GLTF ? (pd.USEPHYSICALLIGHTFALLOFF = !1, pd.USEGLTFLIGHTFALLOFF = !0) : (pd.USEPHYSICALLIGHTFALLOFF = !0, pd.USEGLTFLIGHTFALLOFF = !1), !this.backFaceCulling && this._twoSidedLighting ? pd.TWOSIDEDLIGHTING = !0 : pd.TWOSIDEDLIGHTING = !1, pd.MIRRORED = !!gd._mirroredCameraPosition, pd.SPECULARAA = Cd.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
            }(pd._areTexturesDirty || pd._areMiscDirty) && (pd.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, pd.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, pd.ALPHABLEND = this.needAlphaBlendingForMesh(Jd)), pd._areTexturesDirty && (pd.TEXTURE_REPETITION_MODE = Cd.version > 1 || Cd.isWebGPU ? this.textureRepetitionMode : 0), pd._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(pd), pd.FORCENORMALFORWARD = this._forceNormalForward, pd.RADIANCEOCCLUSION = this._useRadianceOcclusion, pd.HORIZONOCCLUSION = this._useHorizonOcclusion, (this.specularRoughnessAnisotropy > 0 || this.coatRoughnessAnisotropy > 0) && dd._noiseTextures[gd.uniqueId] && Hd.e.ReflectionTextureEnabled ? (pd.ANISOTROPIC = !0, Jd.isVerticesDataPresent(Dd.j.TangentKind) || (pd._needUVs = !0, pd.MAINUV1 = !0), this._useGltfStyleAnisotropy && (pd.USE_GLTF_STYLE_ANISOTROPY = !0), pd.ANISOTROPIC_BASE = this.specularRoughnessAnisotropy > 0, pd.ANISOTROPIC_COAT = this.coatRoughnessAnisotropy > 0) : (pd.ANISOTROPIC = !1, pd.USE_GLTF_STYLE_ANISOTROPY = !1, pd.ANISOTROPIC_BASE = !1, pd.ANISOTROPIC_COAT = !1), pd.THIN_FILM = this.thinFilmWeight > 0, pd.IRIDESCENCE = this.thinFilmWeight > 0, pd.DISPERSION = this.transmissionDispersionScale > 0, pd.SCATTERING = this.hasScattering;
            if (pd.SSS_SAMPLE_COUNT = [8, 16, 32][this._sssQuality] ?? 16, pd.TRANSMISSION_SLAB = this.transmissionWeight > 0, pd.TRANSMISSION_SLAB_VOLUME = this.transmissionWeight > 0 && this.transmissionDepth > 0, pd.SUBSURFACE_SLAB = this.subsurfaceWeight > 0, !pd.PREPASS && (pd.SUBSURFACE_SLAB || pd.TRANSMISSION_SLAB_VOLUME)) {
              let dd = !1;
              if (!this.sssIrradianceTexture && gd.geometryBufferRenderer) {
                const Jd = gd.geometryBufferRenderer.getTextureIndex(TJ.IRRADIANCE_TEXTURE_TYPE);
                this.sssIrradianceTexture = gd.geometryBufferRenderer.getGBuffer().textures[Jd], dd = !0
              }
              if (!this.sssDepthTexture && gd.geometryBufferRenderer) {
                const Jd = gd.geometryBufferRenderer.getTextureIndex(TJ.SCREENSPACE_DEPTH_TEXTURE_TYPE);
                this.sssDepthTexture = gd.geometryBufferRenderer.getGBuffer().textures[Jd], dd = !0
              }
              this.sssIrradianceTexture && this.sssDepthTexture && (pd.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !0, dd && (pd.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !0))
            }
            pd.FUZZ = this.fuzzWeight > 0 && Hd.e.ReflectionTextureEnabled, pd.GEOMETRY_THIN_WALLED = 0 != this.geometryThinWalled, pd.FUZZ ? (Jd.isVerticesDataPresent(Dd.j.TangentKind) || (pd._needUVs = !0, pd.MAINUV1 = !0), this._environmentFuzzBRDFTexture = fd(this.Wm()), pd.FUZZ_IBL_SAMPLES = this.fuzzSampleNumber) : (this._environmentFuzzBRDFTexture = null, pd.FUZZENVIRONMENTBRDF = !1, pd.FUZZ_IBL_SAMPLES = 0), pd._areMiscDirty && ((0, Ad.eb)(Jd, gd, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(Jd), pd, this._applyDecalMapAfterDetailMap, this._useVertexPulling, kd, this._isVertexOutputInvariant), pd.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !Jd.isVerticesDataPresent(Dd.j.NormalKind), pd.DEBUGMODE = this._debugMode), (0, Ad.V)(gd, Cd, this, pd, !!Nd, Pd, Zd), this._eventInfo.defines = pd, this._eventInfo.mesh = Jd, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, Ad.R)(Jd, pd, !0, !0, !0, this._transparencyMode !== Wd.b.MATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
          }
        }, Jd = new WeakMap, pd = new WeakMap, Nd = new WeakMap, Pd = new WeakMap, Zd = new WeakMap, gd = new WeakMap, Cd = new WeakMap, Kd = new WeakMap, od = new WeakMap, ld = new WeakMap, Qd = new WeakMap, Ld = new WeakMap, Od = new WeakMap, ed = new WeakMap, Rd = new WeakMap, Id = new WeakMap, Gd = new WeakMap, vd = new WeakMap, xd = new WeakMap, qd = new WeakMap, Bd = new WeakMap, sd = new WeakMap, bd = new WeakMap, Sd = new WeakMap, jd = new WeakMap, Xd = new WeakMap, Ud = new WeakMap, Td = new WeakMap, Ed = new WeakMap, cd = new WeakMap, hd = new WeakMap, td = new WeakMap, zd = new WeakMap, dJ = new WeakMap, JJ = new WeakMap, kJ = new WeakMap, pJ = new WeakMap, NJ = new WeakMap, WJ = new WeakMap, PJ = new WeakMap, ZJ = new WeakMap, gJ = new WeakMap, CJ = new WeakMap, KJ = new WeakMap, OJ = new WeakMap, eJ = new WeakMap, RJ = new WeakMap, IJ = new WeakMap, GJ = new WeakMap, vJ = new WeakMap, xJ = new WeakMap, qJ = new WeakMap, BJ = new WeakMap, aJ = new WeakMap, MJ = new WeakMap, FJ = new WeakMap, YJ = new WeakMap, mJ = new WeakMap, bJ = new WeakMap, SJ = new WeakMap, jJ = new WeakMap, XJ = new WeakMap, fJ = new WeakMap, nJ = new WeakMap, UJ = new WeakMap, yJ = new WeakMap, DJ = new WeakMap, EJ = new WeakMap, hJ = new WeakMap, VJ = new WeakMap, zJ = new WeakMap, AJ = new WeakMap, dk = new WeakMap, Jk = new WeakMap, kk = new WeakMap, pk = new WeakMap, Nk = new WeakMap, Wk = new WeakMap, Pk = new WeakMap, Zk = new WeakMap, gk = new WeakMap, Ck = new WeakMap, Kk = new WeakMap, lk = new WeakMap, Qk = new WeakMap, Lk = new WeakMap, Ok = new WeakMap, ek = new WeakMap, Rk = new WeakMap, Ik = new WeakMap, Gk = new WeakMap, vk = new WeakMap, xk = new WeakMap, qk = new WeakMap, Bk = new WeakMap, sk = new WeakMap, ik = new WeakMap, ak = new WeakMap, Mk = new WeakMap, Fk = new WeakMap, Yk = new WeakMap, mk = new WeakMap, (() => {
          const Jd = "function" === typeof Symbol && Symbol.metadata ? Object.create(jN[Symbol.metadata] ?? null) : void 0;
          bk = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], Sk = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], jk = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], Xk = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], fk = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], nk = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], Uk = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], yk = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], Dk = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], Tk = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], Ek = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], ck = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], hk = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], rk = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], uk = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], tk = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], Vk = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], zk = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], Hk = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], wk = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], Ak = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], dp = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], Jp = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], kp = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], pp = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], Np = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], Wp = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], Pp = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], Zp = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], gp = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], Cp = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], Kp = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], op = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], lp = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], Qp = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], Lp = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], Op = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], ep = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], Rp = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], Ip = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], Gp = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], vp = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], xp = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], qp = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], Bp = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], sp = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], ip = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], ap = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], Mp = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], Fp = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], Yp = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], mp = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], bp = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], Sp = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], jp = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], Xp = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], fp = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], np = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], Up = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], yp = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], Dp = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], Tp = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], Ep = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], cp = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], hp = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], rp = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], tp = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], Vp = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], zp = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], Hp = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], wp = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], Ap = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], dN = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], JN = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], kN = [(0, Md.c)("_markAllSubMeshesAsTexturesDirty")], pN = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], NN = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], WN = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], PN = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], ZN = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], gN = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], CN = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], KN = [(0, Md.H)()], oN = [(0, Md.H)()], lN = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], QN = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], LN = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], ON = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], eN = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsLightsDirty")], RN = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], IN = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsLightsDirty")], GN = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], vN = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], xN = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], qN = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], BN = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], sN = [(0, Md.f)("_markAllSubMeshesAsTexturesDirty")], iN = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], aN = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], MN = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], FN = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], YN = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsMiscDirty")], mN = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsMiscDirty")], bN = [(0, Md.f)("_markAllSubMeshesAsMiscDirty")], SN = [(0, Md.H)()], (0, ad.h)(dd, null, bk, {
            kind: "accessor",
            name: "baseWeight",
            static: !1,
            private: !1,
            access: {
              has: dd => "baseWeight" in dd,
              get: dd => dd.baseWeight,
              set: (dd, Jd) => {
                dd.baseWeight = Jd
              }
            },
            metadata: Jd
          }, fN, nN), (0, ad.h)(dd, null, Sk, {
            kind: "accessor",
            name: "baseWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "baseWeightTexture" in dd,
              get: dd => dd.baseWeightTexture,
              set: (dd, Jd) => {
                dd.baseWeightTexture = Jd
              }
            },
            metadata: Jd
          }, UN, yN), (0, ad.h)(dd, null, jk, {
            kind: "accessor",
            name: "baseColor",
            static: !1,
            private: !1,
            access: {
              has: dd => "baseColor" in dd,
              get: dd => dd.baseColor,
              set: (dd, Jd) => {
                dd.baseColor = Jd
              }
            },
            metadata: Jd
          }, DN, TN), (0, ad.h)(dd, null, Xk, {
            kind: "accessor",
            name: "baseColorTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "baseColorTexture" in dd,
              get: dd => dd.baseColorTexture,
              set: (dd, Jd) => {
                dd.baseColorTexture = Jd
              }
            },
            metadata: Jd
          }, EN, cN), (0, ad.h)(dd, null, fk, {
            kind: "accessor",
            name: "baseDiffuseRoughness",
            static: !1,
            private: !1,
            access: {
              has: dd => "baseDiffuseRoughness" in dd,
              get: dd => dd.baseDiffuseRoughness,
              set: (dd, Jd) => {
                dd.baseDiffuseRoughness = Jd
              }
            },
            metadata: Jd
          }, hN, rN), (0, ad.h)(dd, null, nk, {
            kind: "accessor",
            name: "baseDiffuseRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "baseDiffuseRoughnessTexture" in dd,
              get: dd => dd.baseDiffuseRoughnessTexture,
              set: (dd, Jd) => {
                dd.baseDiffuseRoughnessTexture = Jd
              }
            },
            metadata: Jd
          }, uN, tN), (0, ad.h)(dd, null, Uk, {
            kind: "accessor",
            name: "baseMetalness",
            static: !1,
            private: !1,
            access: {
              has: dd => "baseMetalness" in dd,
              get: dd => dd.baseMetalness,
              set: (dd, Jd) => {
                dd.baseMetalness = Jd
              }
            },
            metadata: Jd
          }, VN, zN), (0, ad.h)(dd, null, yk, {
            kind: "accessor",
            name: "baseMetalnessTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "baseMetalnessTexture" in dd,
              get: dd => dd.baseMetalnessTexture,
              set: (dd, Jd) => {
                dd.baseMetalnessTexture = Jd
              }
            },
            metadata: Jd
          }, HN, wN), (0, ad.h)(dd, null, Dk, {
            kind: "accessor",
            name: "specularWeight",
            static: !1,
            private: !1,
            access: {
              has: dd => "specularWeight" in dd,
              get: dd => dd.specularWeight,
              set: (dd, Jd) => {
                dd.specularWeight = Jd
              }
            },
            metadata: Jd
          }, AN, dW), (0, ad.h)(dd, null, Tk, {
            kind: "accessor",
            name: "specularWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "specularWeightTexture" in dd,
              get: dd => dd.specularWeightTexture,
              set: (dd, Jd) => {
                dd.specularWeightTexture = Jd
              }
            },
            metadata: Jd
          }, JW, kW), (0, ad.h)(dd, null, Ek, {
            kind: "accessor",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: dd => "specularColor" in dd,
              get: dd => dd.specularColor,
              set: (dd, Jd) => {
                dd.specularColor = Jd
              }
            },
            metadata: Jd
          }, pW, NW), (0, ad.h)(dd, null, ck, {
            kind: "accessor",
            name: "specularColorTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "specularColorTexture" in dd,
              get: dd => dd.specularColorTexture,
              set: (dd, Jd) => {
                dd.specularColorTexture = Jd
              }
            },
            metadata: Jd
          }, WW, PW), (0, ad.h)(dd, null, hk, {
            kind: "accessor",
            name: "specularRoughness",
            static: !1,
            private: !1,
            access: {
              has: dd => "specularRoughness" in dd,
              get: dd => dd.specularRoughness,
              set: (dd, Jd) => {
                dd.specularRoughness = Jd
              }
            },
            metadata: Jd
          }, ZW, gW), (0, ad.h)(dd, null, rk, {
            kind: "accessor",
            name: "specularRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "specularRoughnessTexture" in dd,
              get: dd => dd.specularRoughnessTexture,
              set: (dd, Jd) => {
                dd.specularRoughnessTexture = Jd
              }
            },
            metadata: Jd
          }, CW, KW), (0, ad.h)(dd, null, uk, {
            kind: "accessor",
            name: "specularRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: dd => "specularRoughnessAnisotropy" in dd,
              get: dd => dd.specularRoughnessAnisotropy,
              set: (dd, Jd) => {
                dd.specularRoughnessAnisotropy = Jd
              }
            },
            metadata: Jd
          }, oW, lW), (0, ad.h)(dd, null, tk, {
            kind: "accessor",
            name: "specularRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "specularRoughnessAnisotropyTexture" in dd,
              get: dd => dd.specularRoughnessAnisotropyTexture,
              set: (dd, Jd) => {
                dd.specularRoughnessAnisotropyTexture = Jd
              }
            },
            metadata: Jd
          }, QW, LW), (0, ad.h)(dd, null, Vk, {
            kind: "accessor",
            name: "specularIor",
            static: !1,
            private: !1,
            access: {
              has: dd => "specularIor" in dd,
              get: dd => dd.specularIor,
              set: (dd, Jd) => {
                dd.specularIor = Jd
              }
            },
            metadata: Jd
          }, OW, eW), (0, ad.h)(dd, null, zk, {
            kind: "accessor",
            name: "transmissionWeight",
            static: !1,
            private: !1,
            access: {
              has: dd => "transmissionWeight" in dd,
              get: dd => dd.transmissionWeight,
              set: (dd, Jd) => {
                dd.transmissionWeight = Jd
              }
            },
            metadata: Jd
          }, RW, IW), (0, ad.h)(dd, null, Hk, {
            kind: "accessor",
            name: "transmissionWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "transmissionWeightTexture" in dd,
              get: dd => dd.transmissionWeightTexture,
              set: (dd, Jd) => {
                dd.transmissionWeightTexture = Jd
              }
            },
            metadata: Jd
          }, GW, vW), (0, ad.h)(dd, null, wk, {
            kind: "accessor",
            name: "transmissionColor",
            static: !1,
            private: !1,
            access: {
              has: dd => "transmissionColor" in dd,
              get: dd => dd.transmissionColor,
              set: (dd, Jd) => {
                dd.transmissionColor = Jd
              }
            },
            metadata: Jd
          }, xW, qW), (0, ad.h)(dd, null, Ak, {
            kind: "accessor",
            name: "transmissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "transmissionColorTexture" in dd,
              get: dd => dd.transmissionColorTexture,
              set: (dd, Jd) => {
                dd.transmissionColorTexture = Jd
              }
            },
            metadata: Jd
          }, BW, sW), (0, ad.h)(dd, null, dp, {
            kind: "accessor",
            name: "transmissionDepth",
            static: !1,
            private: !1,
            access: {
              has: dd => "transmissionDepth" in dd,
              get: dd => dd.transmissionDepth,
              set: (dd, Jd) => {
                dd.transmissionDepth = Jd
              }
            },
            metadata: Jd
          }, iW, aW), (0, ad.h)(dd, null, Jp, {
            kind: "accessor",
            name: "transmissionDepthTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "transmissionDepthTexture" in dd,
              get: dd => dd.transmissionDepthTexture,
              set: (dd, Jd) => {
                dd.transmissionDepthTexture = Jd
              }
            },
            metadata: Jd
          }, MW, FW), (0, ad.h)(dd, null, kp, {
            kind: "accessor",
            name: "transmissionScatter",
            static: !1,
            private: !1,
            access: {
              has: dd => "transmissionScatter" in dd,
              get: dd => dd.transmissionScatter,
              set: (dd, Jd) => {
                dd.transmissionScatter = Jd
              }
            },
            metadata: Jd
          }, YW, mW), (0, ad.h)(dd, null, pp, {
            kind: "accessor",
            name: "transmissionScatterTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "transmissionScatterTexture" in dd,
              get: dd => dd.transmissionScatterTexture,
              set: (dd, Jd) => {
                dd.transmissionScatterTexture = Jd
              }
            },
            metadata: Jd
          }, bW, SW), (0, ad.h)(dd, null, Np, {
            kind: "accessor",
            name: "transmissionScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: dd => "transmissionScatterAnisotropy" in dd,
              get: dd => dd.transmissionScatterAnisotropy,
              set: (dd, Jd) => {
                dd.transmissionScatterAnisotropy = Jd
              }
            },
            metadata: Jd
          }, jW, XW), (0, ad.h)(dd, null, Wp, {
            kind: "accessor",
            name: "transmissionDispersionScale",
            static: !1,
            private: !1,
            access: {
              has: dd => "transmissionDispersionScale" in dd,
              get: dd => dd.transmissionDispersionScale,
              set: (dd, Jd) => {
                dd.transmissionDispersionScale = Jd
              }
            },
            metadata: Jd
          }, fW, nW), (0, ad.h)(dd, null, Pp, {
            kind: "accessor",
            name: "transmissionDispersionScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "transmissionDispersionScaleTexture" in dd,
              get: dd => dd.transmissionDispersionScaleTexture,
              set: (dd, Jd) => {
                dd.transmissionDispersionScaleTexture = Jd
              }
            },
            metadata: Jd
          }, UW, yW), (0, ad.h)(dd, null, Zp, {
            kind: "accessor",
            name: "transmissionDispersionAbbeNumber",
            static: !1,
            private: !1,
            access: {
              has: dd => "transmissionDispersionAbbeNumber" in dd,
              get: dd => dd.transmissionDispersionAbbeNumber,
              set: (dd, Jd) => {
                dd.transmissionDispersionAbbeNumber = Jd
              }
            },
            metadata: Jd
          }, DW, TW), (0, ad.h)(dd, null, gp, {
            kind: "accessor",
            name: "subsurfaceWeight",
            static: !1,
            private: !1,
            access: {
              has: dd => "subsurfaceWeight" in dd,
              get: dd => dd.subsurfaceWeight,
              set: (dd, Jd) => {
                dd.subsurfaceWeight = Jd
              }
            },
            metadata: Jd
          }, EW, cW), (0, ad.h)(dd, null, Cp, {
            kind: "accessor",
            name: "subsurfaceWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "subsurfaceWeightTexture" in dd,
              get: dd => dd.subsurfaceWeightTexture,
              set: (dd, Jd) => {
                dd.subsurfaceWeightTexture = Jd
              }
            },
            metadata: Jd
          }, hW, rW), (0, ad.h)(dd, null, Kp, {
            kind: "accessor",
            name: "subsurfaceColor",
            static: !1,
            private: !1,
            access: {
              has: dd => "subsurfaceColor" in dd,
              get: dd => dd.subsurfaceColor,
              set: (dd, Jd) => {
                dd.subsurfaceColor = Jd
              }
            },
            metadata: Jd
          }, uW, tW), (0, ad.h)(dd, null, op, {
            kind: "accessor",
            name: "subsurfaceColorTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "subsurfaceColorTexture" in dd,
              get: dd => dd.subsurfaceColorTexture,
              set: (dd, Jd) => {
                dd.subsurfaceColorTexture = Jd
              }
            },
            metadata: Jd
          }, VW, zW), (0, ad.h)(dd, null, lp, {
            kind: "accessor",
            name: "subsurfaceRadius",
            static: !1,
            private: !1,
            access: {
              has: dd => "subsurfaceRadius" in dd,
              get: dd => dd.subsurfaceRadius,
              set: (dd, Jd) => {
                dd.subsurfaceRadius = Jd
              }
            },
            metadata: Jd
          }, HW, wW), (0, ad.h)(dd, null, Qp, {
            kind: "accessor",
            name: "subsurfaceRadiusScale",
            static: !1,
            private: !1,
            access: {
              has: dd => "subsurfaceRadiusScale" in dd,
              get: dd => dd.subsurfaceRadiusScale,
              set: (dd, Jd) => {
                dd.subsurfaceRadiusScale = Jd
              }
            },
            metadata: Jd
          }, AW, dP), (0, ad.h)(dd, null, Lp, {
            kind: "accessor",
            name: "subsurfaceRadiusScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "subsurfaceRadiusScaleTexture" in dd,
              get: dd => dd.subsurfaceRadiusScaleTexture,
              set: (dd, Jd) => {
                dd.subsurfaceRadiusScaleTexture = Jd
              }
            },
            metadata: Jd
          }, JP, kP), (0, ad.h)(dd, null, Op, {
            kind: "accessor",
            name: "subsurfaceScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: dd => "subsurfaceScatterAnisotropy" in dd,
              get: dd => dd.subsurfaceScatterAnisotropy,
              set: (dd, Jd) => {
                dd.subsurfaceScatterAnisotropy = Jd
              }
            },
            metadata: Jd
          }, pP, NP), (0, ad.h)(dd, null, ep, {
            kind: "accessor",
            name: "coatWeight",
            static: !1,
            private: !1,
            access: {
              has: dd => "coatWeight" in dd,
              get: dd => dd.coatWeight,
              set: (dd, Jd) => {
                dd.coatWeight = Jd
              }
            },
            metadata: Jd
          }, WP, PP), (0, ad.h)(dd, null, Rp, {
            kind: "accessor",
            name: "coatWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "coatWeightTexture" in dd,
              get: dd => dd.coatWeightTexture,
              set: (dd, Jd) => {
                dd.coatWeightTexture = Jd
              }
            },
            metadata: Jd
          }, ZP, gP), (0, ad.h)(dd, null, Ip, {
            kind: "accessor",
            name: "coatColor",
            static: !1,
            private: !1,
            access: {
              has: dd => "coatColor" in dd,
              get: dd => dd.coatColor,
              set: (dd, Jd) => {
                dd.coatColor = Jd
              }
            },
            metadata: Jd
          }, CP, KP), (0, ad.h)(dd, null, Gp, {
            kind: "accessor",
            name: "coatColorTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "coatColorTexture" in dd,
              get: dd => dd.coatColorTexture,
              set: (dd, Jd) => {
                dd.coatColorTexture = Jd
              }
            },
            metadata: Jd
          }, oP, lP), (0, ad.h)(dd, null, vp, {
            kind: "accessor",
            name: "coatRoughness",
            static: !1,
            private: !1,
            access: {
              has: dd => "coatRoughness" in dd,
              get: dd => dd.coatRoughness,
              set: (dd, Jd) => {
                dd.coatRoughness = Jd
              }
            },
            metadata: Jd
          }, QP, LP), (0, ad.h)(dd, null, xp, {
            kind: "accessor",
            name: "coatRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "coatRoughnessTexture" in dd,
              get: dd => dd.coatRoughnessTexture,
              set: (dd, Jd) => {
                dd.coatRoughnessTexture = Jd
              }
            },
            metadata: Jd
          }, OP, eP), (0, ad.h)(dd, null, qp, {
            kind: "accessor",
            name: "coatRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: dd => "coatRoughnessAnisotropy" in dd,
              get: dd => dd.coatRoughnessAnisotropy,
              set: (dd, Jd) => {
                dd.coatRoughnessAnisotropy = Jd
              }
            },
            metadata: Jd
          }, RP, IP), (0, ad.h)(dd, null, Bp, {
            kind: "accessor",
            name: "coatRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "coatRoughnessAnisotropyTexture" in dd,
              get: dd => dd.coatRoughnessAnisotropyTexture,
              set: (dd, Jd) => {
                dd.coatRoughnessAnisotropyTexture = Jd
              }
            },
            metadata: Jd
          }, GP, vP), (0, ad.h)(dd, null, sp, {
            kind: "accessor",
            name: "coatIor",
            static: !1,
            private: !1,
            access: {
              has: dd => "coatIor" in dd,
              get: dd => dd.coatIor,
              set: (dd, Jd) => {
                dd.coatIor = Jd
              }
            },
            metadata: Jd
          }, xP, qP), (0, ad.h)(dd, null, ip, {
            kind: "accessor",
            name: "coatDarkening",
            static: !1,
            private: !1,
            access: {
              has: dd => "coatDarkening" in dd,
              get: dd => dd.coatDarkening,
              set: (dd, Jd) => {
                dd.coatDarkening = Jd
              }
            },
            metadata: Jd
          }, BP, sP), (0, ad.h)(dd, null, ap, {
            kind: "accessor",
            name: "coatDarkeningTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "coatDarkeningTexture" in dd,
              get: dd => dd.coatDarkeningTexture,
              set: (dd, Jd) => {
                dd.coatDarkeningTexture = Jd
              }
            },
            metadata: Jd
          }, iP, aP), (0, ad.h)(dd, null, Mp, {
            kind: "accessor",
            name: "fuzzWeight",
            static: !1,
            private: !1,
            access: {
              has: dd => "fuzzWeight" in dd,
              get: dd => dd.fuzzWeight,
              set: (dd, Jd) => {
                dd.fuzzWeight = Jd
              }
            },
            metadata: Jd
          }, MP, FP), (0, ad.h)(dd, null, Fp, {
            kind: "accessor",
            name: "fuzzWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "fuzzWeightTexture" in dd,
              get: dd => dd.fuzzWeightTexture,
              set: (dd, Jd) => {
                dd.fuzzWeightTexture = Jd
              }
            },
            metadata: Jd
          }, YP, mP), (0, ad.h)(dd, null, Yp, {
            kind: "accessor",
            name: "fuzzColor",
            static: !1,
            private: !1,
            access: {
              has: dd => "fuzzColor" in dd,
              get: dd => dd.fuzzColor,
              set: (dd, Jd) => {
                dd.fuzzColor = Jd
              }
            },
            metadata: Jd
          }, bP, SP), (0, ad.h)(dd, null, mp, {
            kind: "accessor",
            name: "fuzzColorTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "fuzzColorTexture" in dd,
              get: dd => dd.fuzzColorTexture,
              set: (dd, Jd) => {
                dd.fuzzColorTexture = Jd
              }
            },
            metadata: Jd
          }, jP, XP), (0, ad.h)(dd, null, bp, {
            kind: "accessor",
            name: "fuzzRoughness",
            static: !1,
            private: !1,
            access: {
              has: dd => "fuzzRoughness" in dd,
              get: dd => dd.fuzzRoughness,
              set: (dd, Jd) => {
                dd.fuzzRoughness = Jd
              }
            },
            metadata: Jd
          }, fP, nP), (0, ad.h)(dd, null, Sp, {
            kind: "accessor",
            name: "fuzzRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "fuzzRoughnessTexture" in dd,
              get: dd => dd.fuzzRoughnessTexture,
              set: (dd, Jd) => {
                dd.fuzzRoughnessTexture = Jd
              }
            },
            metadata: Jd
          }, UP, yP), (0, ad.h)(dd, null, jp, {
            kind: "accessor",
            name: "geometryThinWalled",
            static: !1,
            private: !1,
            access: {
              has: dd => "geometryThinWalled" in dd,
              get: dd => dd.geometryThinWalled,
              set: (dd, Jd) => {
                dd.geometryThinWalled = Jd
              }
            },
            metadata: Jd
          }, DP, TP), (0, ad.h)(dd, null, Xp, {
            kind: "accessor",
            name: "geometryNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "geometryNormalTexture" in dd,
              get: dd => dd.geometryNormalTexture,
              set: (dd, Jd) => {
                dd.geometryNormalTexture = Jd
              }
            },
            metadata: Jd
          }, EP, cP), (0, ad.h)(dd, null, fp, {
            kind: "accessor",
            name: "geometryTangent",
            static: !1,
            private: !1,
            access: {
              has: dd => "geometryTangent" in dd,
              get: dd => dd.geometryTangent,
              set: (dd, Jd) => {
                dd.geometryTangent = Jd
              }
            },
            metadata: Jd
          }, hP, rP), (0, ad.h)(dd, null, np, {
            kind: "accessor",
            name: "geometryTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "geometryTangentTexture" in dd,
              get: dd => dd.geometryTangentTexture,
              set: (dd, Jd) => {
                dd.geometryTangentTexture = Jd
              }
            },
            metadata: Jd
          }, uP, tP), (0, ad.h)(dd, null, Up, {
            kind: "accessor",
            name: "geometryCoatNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "geometryCoatNormalTexture" in dd,
              get: dd => dd.geometryCoatNormalTexture,
              set: (dd, Jd) => {
                dd.geometryCoatNormalTexture = Jd
              }
            },
            metadata: Jd
          }, VP, zP), (0, ad.h)(dd, null, yp, {
            kind: "accessor",
            name: "geometryCoatTangent",
            static: !1,
            private: !1,
            access: {
              has: dd => "geometryCoatTangent" in dd,
              get: dd => dd.geometryCoatTangent,
              set: (dd, Jd) => {
                dd.geometryCoatTangent = Jd
              }
            },
            metadata: Jd
          }, HP, wP), (0, ad.h)(dd, null, Dp, {
            kind: "accessor",
            name: "geometryCoatTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "geometryCoatTangentTexture" in dd,
              get: dd => dd.geometryCoatTangentTexture,
              set: (dd, Jd) => {
                dd.geometryCoatTangentTexture = Jd
              }
            },
            metadata: Jd
          }, AP, dZ), (0, ad.h)(dd, null, Tp, {
            kind: "accessor",
            name: "geometryOpacity",
            static: !1,
            private: !1,
            access: {
              has: dd => "geometryOpacity" in dd,
              get: dd => dd.geometryOpacity,
              set: (dd, Jd) => {
                dd.geometryOpacity = Jd
              }
            },
            metadata: Jd
          }, JZ, kZ), (0, ad.h)(dd, null, Ep, {
            kind: "accessor",
            name: "geometryOpacityTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "geometryOpacityTexture" in dd,
              get: dd => dd.geometryOpacityTexture,
              set: (dd, Jd) => {
                dd.geometryOpacityTexture = Jd
              }
            },
            metadata: Jd
          }, pZ, NZ), (0, ad.h)(dd, null, cp, {
            kind: "accessor",
            name: "geometryThickness",
            static: !1,
            private: !1,
            access: {
              has: dd => "geometryThickness" in dd,
              get: dd => dd.geometryThickness,
              set: (dd, Jd) => {
                dd.geometryThickness = Jd
              }
            },
            metadata: Jd
          }, WZ, PZ), (0, ad.h)(dd, null, hp, {
            kind: "accessor",
            name: "geometryThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "geometryThicknessTexture" in dd,
              get: dd => dd.geometryThicknessTexture,
              set: (dd, Jd) => {
                dd.geometryThicknessTexture = Jd
              }
            },
            metadata: Jd
          }, ZZ, gZ), (0, ad.h)(dd, null, rp, {
            kind: "accessor",
            name: "emissionLuminance",
            static: !1,
            private: !1,
            access: {
              has: dd => "emissionLuminance" in dd,
              get: dd => dd.emissionLuminance,
              set: (dd, Jd) => {
                dd.emissionLuminance = Jd
              }
            },
            metadata: Jd
          }, CZ, KZ), (0, ad.h)(dd, null, tp, {
            kind: "accessor",
            name: "emissionColor",
            static: !1,
            private: !1,
            access: {
              has: dd => "emissionColor" in dd,
              get: dd => dd.emissionColor,
              set: (dd, Jd) => {
                dd.emissionColor = Jd
              }
            },
            metadata: Jd
          }, oZ, lZ), (0, ad.h)(dd, null, Vp, {
            kind: "accessor",
            name: "emissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "emissionColorTexture" in dd,
              get: dd => dd.emissionColorTexture,
              set: (dd, Jd) => {
                dd.emissionColorTexture = Jd
              }
            },
            metadata: Jd
          }, QZ, LZ), (0, ad.h)(dd, null, zp, {
            kind: "accessor",
            name: "thinFilmWeight",
            static: !1,
            private: !1,
            access: {
              has: dd => "thinFilmWeight" in dd,
              get: dd => dd.thinFilmWeight,
              set: (dd, Jd) => {
                dd.thinFilmWeight = Jd
              }
            },
            metadata: Jd
          }, OZ, eZ), (0, ad.h)(dd, null, Hp, {
            kind: "accessor",
            name: "thinFilmWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "thinFilmWeightTexture" in dd,
              get: dd => dd.thinFilmWeightTexture,
              set: (dd, Jd) => {
                dd.thinFilmWeightTexture = Jd
              }
            },
            metadata: Jd
          }, RZ, IZ), (0, ad.h)(dd, null, wp, {
            kind: "accessor",
            name: "thinFilmThickness",
            static: !1,
            private: !1,
            access: {
              has: dd => "thinFilmThickness" in dd,
              get: dd => dd.thinFilmThickness,
              set: (dd, Jd) => {
                dd.thinFilmThickness = Jd
              }
            },
            metadata: Jd
          }, GZ, vZ), (0, ad.h)(dd, null, Ap, {
            kind: "accessor",
            name: "thinFilmThicknessMin",
            static: !1,
            private: !1,
            access: {
              has: dd => "thinFilmThicknessMin" in dd,
              get: dd => dd.thinFilmThicknessMin,
              set: (dd, Jd) => {
                dd.thinFilmThicknessMin = Jd
              }
            },
            metadata: Jd
          }, xZ, qZ), (0, ad.h)(dd, null, dN, {
            kind: "accessor",
            name: "thinFilmThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "thinFilmThicknessTexture" in dd,
              get: dd => dd.thinFilmThicknessTexture,
              set: (dd, Jd) => {
                dd.thinFilmThicknessTexture = Jd
              }
            },
            metadata: Jd
          }, BZ, sZ), (0, ad.h)(dd, null, JN, {
            kind: "accessor",
            name: "thinFilmIor",
            static: !1,
            private: !1,
            access: {
              has: dd => "thinFilmIor" in dd,
              get: dd => dd.thinFilmIor,
              set: (dd, Jd) => {
                dd.thinFilmIor = Jd
              }
            },
            metadata: Jd
          }, iZ, aZ), (0, ad.h)(dd, null, kN, {
            kind: "accessor",
            name: "ambientOcclusionTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "ambientOcclusionTexture" in dd,
              get: dd => dd.ambientOcclusionTexture,
              set: (dd, Jd) => {
                dd.ambientOcclusionTexture = Jd
              }
            },
            metadata: Jd
          }, MZ, FZ), (0, ad.h)(dd, null, pN, {
            kind: "accessor",
            name: "directIntensity",
            static: !1,
            private: !1,
            access: {
              has: dd => "directIntensity" in dd,
              get: dd => dd.directIntensity,
              set: (dd, Jd) => {
                dd.directIntensity = Jd
              }
            },
            metadata: Jd
          }, YZ, mZ), (0, ad.h)(dd, null, NN, {
            kind: "accessor",
            name: "environmentIntensity",
            static: !1,
            private: !1,
            access: {
              has: dd => "environmentIntensity" in dd,
              get: dd => dd.environmentIntensity,
              set: (dd, Jd) => {
                dd.environmentIntensity = Jd
              }
            },
            metadata: Jd
          }, bZ, SZ), (0, ad.h)(dd, null, WN, {
            kind: "accessor",
            name: "useSpecularWeightFromTextureAlpha",
            static: !1,
            private: !1,
            access: {
              has: dd => "useSpecularWeightFromTextureAlpha" in dd,
              get: dd => dd.useSpecularWeightFromTextureAlpha,
              set: (dd, Jd) => {
                dd.useSpecularWeightFromTextureAlpha = Jd
              }
            },
            metadata: Jd
          }, jZ, XZ), (0, ad.h)(dd, null, PN, {
            kind: "accessor",
            name: "forceAlphaTest",
            static: !1,
            private: !1,
            access: {
              has: dd => "forceAlphaTest" in dd,
              get: dd => dd.forceAlphaTest,
              set: (dd, Jd) => {
                dd.forceAlphaTest = Jd
              }
            },
            metadata: Jd
          }, fZ, nZ), (0, ad.h)(dd, null, ZN, {
            kind: "accessor",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: dd => "alphaCutOff" in dd,
              get: dd => dd.alphaCutOff,
              set: (dd, Jd) => {
                dd.alphaCutOff = Jd
              }
            },
            metadata: Jd
          }, UZ, yZ), (0, ad.h)(dd, null, gN, {
            kind: "accessor",
            name: "useAmbientOcclusionFromMetallicTextureRed",
            static: !1,
            private: !1,
            access: {
              has: dd => "useAmbientOcclusionFromMetallicTextureRed" in dd,
              get: dd => dd.useAmbientOcclusionFromMetallicTextureRed,
              set: (dd, Jd) => {
                dd.useAmbientOcclusionFromMetallicTextureRed = Jd
              }
            },
            metadata: Jd
          }, DZ, TZ), (0, ad.h)(dd, null, CN, {
            kind: "accessor",
            name: "useAmbientInGrayScale",
            static: !1,
            private: !1,
            access: {
              has: dd => "useAmbientInGrayScale" in dd,
              get: dd => dd.useAmbientInGrayScale,
              set: (dd, Jd) => {
                dd.useAmbientInGrayScale = Jd
              }
            },
            metadata: Jd
          }, EZ, cZ), (0, ad.h)(dd, null, KN, {
            kind: "getter",
            name: "usePhysicalLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: dd => "usePhysicalLightFalloff" in dd,
              get: dd => dd.usePhysicalLightFalloff
            },
            metadata: Jd
          }, null, XN), (0, ad.h)(dd, null, oN, {
            kind: "getter",
            name: "useGLTFLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: dd => "useGLTFLightFalloff" in dd,
              get: dd => dd.useGLTFLightFalloff
            },
            metadata: Jd
          }, null, XN), (0, ad.h)(dd, null, lN, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: dd => "useObjectSpaceNormalMap" in dd,
              get: dd => dd.useObjectSpaceNormalMap,
              set: (dd, Jd) => {
                dd.useObjectSpaceNormalMap = Jd
              }
            },
            metadata: Jd
          }, hZ, rZ), (0, ad.h)(dd, null, QN, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: dd => "useParallax" in dd,
              get: dd => dd.useParallax,
              set: (dd, Jd) => {
                dd.useParallax = Jd
              }
            },
            metadata: Jd
          }, uZ, tZ), (0, ad.h)(dd, null, LN, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: dd => "useParallaxOcclusion" in dd,
              get: dd => dd.useParallaxOcclusion,
              set: (dd, Jd) => {
                dd.useParallaxOcclusion = Jd
              }
            },
            metadata: Jd
          }, VZ, zZ), (0, ad.h)(dd, null, ON, {
            kind: "accessor",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: dd => "parallaxScaleBias" in dd,
              get: dd => dd.parallaxScaleBias,
              set: (dd, Jd) => {
                dd.parallaxScaleBias = Jd
              }
            },
            metadata: Jd
          }, HZ, wZ), (0, ad.h)(dd, null, eN, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: dd => "disableLighting" in dd,
              get: dd => dd.disableLighting,
              set: (dd, Jd) => {
                dd.disableLighting = Jd
              }
            },
            metadata: Jd
          }, AZ, dg), (0, ad.h)(dd, null, RN, {
            kind: "accessor",
            name: "forceIrradianceInFragment",
            static: !1,
            private: !1,
            access: {
              has: dd => "forceIrradianceInFragment" in dd,
              get: dd => dd.forceIrradianceInFragment,
              set: (dd, Jd) => {
                dd.forceIrradianceInFragment = Jd
              }
            },
            metadata: Jd
          }, Jg, kg), (0, ad.h)(dd, null, IN, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: dd => "maxSimultaneousLights" in dd,
              get: dd => dd.maxSimultaneousLights,
              set: (dd, Jd) => {
                dd.maxSimultaneousLights = Jd
              }
            },
            metadata: Jd
          }, pg, Ng), (0, ad.h)(dd, null, GN, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: dd => "invertNormalMapX" in dd,
              get: dd => dd.invertNormalMapX,
              set: (dd, Jd) => {
                dd.invertNormalMapX = Jd
              }
            },
            metadata: Jd
          }, Wg, Pg), (0, ad.h)(dd, null, vN, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: dd => "invertNormalMapY" in dd,
              get: dd => dd.invertNormalMapY,
              set: (dd, Jd) => {
                dd.invertNormalMapY = Jd
              }
            },
            metadata: Jd
          }, Zg, gg), (0, ad.h)(dd, null, xN, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: dd => "twoSidedLighting" in dd,
              get: dd => dd.twoSidedLighting,
              set: (dd, Jd) => {
                dd.twoSidedLighting = Jd
              }
            },
            metadata: Jd
          }, Cg, Kg), (0, ad.h)(dd, null, qN, {
            kind: "accessor",
            name: "useAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: dd => "useAlphaFresnel" in dd,
              get: dd => dd.useAlphaFresnel,
              set: (dd, Jd) => {
                dd.useAlphaFresnel = Jd
              }
            },
            metadata: Jd
          }, og, lg), (0, ad.h)(dd, null, BN, {
            kind: "accessor",
            name: "useLinearAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: dd => "useLinearAlphaFresnel" in dd,
              get: dd => dd.useLinearAlphaFresnel,
              set: (dd, Jd) => {
                dd.useLinearAlphaFresnel = Jd
              }
            },
            metadata: Jd
          }, Qg, Lg), (0, ad.h)(dd, null, sN, {
            kind: "accessor",
            name: "environmentBRDFTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "environmentBRDFTexture" in dd,
              get: dd => dd.environmentBRDFTexture,
              set: (dd, Jd) => {
                dd.environmentBRDFTexture = Jd
              }
            },
            metadata: Jd
          }, Og, eg), (0, ad.h)(dd, null, iN, {
            kind: "accessor",
            name: "forceNormalForward",
            static: !1,
            private: !1,
            access: {
              has: dd => "forceNormalForward" in dd,
              get: dd => dd.forceNormalForward,
              set: (dd, Jd) => {
                dd.forceNormalForward = Jd
              }
            },
            metadata: Jd
          }, Rg, Ig), (0, ad.h)(dd, null, aN, {
            kind: "accessor",
            name: "enableSpecularAntiAliasing",
            static: !1,
            private: !1,
            access: {
              has: dd => "enableSpecularAntiAliasing" in dd,
              get: dd => dd.enableSpecularAntiAliasing,
              set: (dd, Jd) => {
                dd.enableSpecularAntiAliasing = Jd
              }
            },
            metadata: Jd
          }, Gg, vg), (0, ad.h)(dd, null, MN, {
            kind: "accessor",
            name: "useHorizonOcclusion",
            static: !1,
            private: !1,
            access: {
              has: dd => "useHorizonOcclusion" in dd,
              get: dd => dd.useHorizonOcclusion,
              set: (dd, Jd) => {
                dd.useHorizonOcclusion = Jd
              }
            },
            metadata: Jd
          }, xg, qg), (0, ad.h)(dd, null, FN, {
            kind: "accessor",
            name: "useRadianceOcclusion",
            static: !1,
            private: !1,
            access: {
              has: dd => "useRadianceOcclusion" in dd,
              get: dd => dd.useRadianceOcclusion,
              set: (dd, Jd) => {
                dd.useRadianceOcclusion = Jd
              }
            },
            metadata: Jd
          }, Bg, sg), (0, ad.h)(dd, null, YN, {
            kind: "accessor",
            name: "unlit",
            static: !1,
            private: !1,
            access: {
              has: dd => "unlit" in dd,
              get: dd => dd.unlit,
              set: (dd, Jd) => {
                dd.unlit = Jd
              }
            },
            metadata: Jd
          }, ig, ag), (0, ad.h)(dd, null, mN, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: dd => "applyDecalMapAfterDetailMap" in dd,
              get: dd => dd.applyDecalMapAfterDetailMap,
              set: (dd, Jd) => {
                dd.applyDecalMapAfterDetailMap = Jd
              }
            },
            metadata: Jd
          }, Mg, Fg), (0, ad.h)(dd, null, bN, {
            kind: "accessor",
            name: "debugMode",
            static: !1,
            private: !1,
            access: {
              has: dd => "debugMode" in dd,
              get: dd => dd.debugMode,
              set: (dd, Jd) => {
                dd.debugMode = Jd
              }
            },
            metadata: Jd
          }, Yg, mg), (0, ad.h)(dd, null, SN, {
            kind: "getter",
            name: "transparencyMode",
            static: !1,
            private: !1,
            access: {
              has: dd => "transparencyMode" in dd,
              get: dd => dd.transparencyMode
            },
            metadata: Jd
          }, null, XN), Jd && Object.defineProperty(dd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Jd
          })
        })(), dd.SSS_QUALITY_LOW = 0, dd.SSS_QUALITY_MEDIUM = 1, dd.SSS_QUALITY_HIGH = 2, dd._noiseTextures = {}, dd.ForceGLSL = !1, dd._ShaderLoader = new QJ.e((() => [Promise.all([kd.e(308), kd.e(374)]).then((() => kd(61457))), Promise.all([kd.e(313), kd.e(309), kd.e(373), kd.e(378)]).then((() => kd(61468)))]), (() => [Promise.all([kd.e(327), kd.e(329), kd.e(377)]).then((() => kd(61506))), Promise.all([kd.e(327), kd.e(330), kd.e(376), kd.e(379)]).then((() => kd(61519)))])), dd
      })(),
      dk = !1;
    dk || (dk = !0, (0, Vd.h)(), (0, EJ.h)("BABYLON.OpenPBRMaterial", AJ));
    var Jk = kd(37280);
    class kk {
      constructor(dd) {
        this.name = XJ.b.NAME_PROCEDURALTEXTURE, this.BO = dd
      }
      register() {
        this.BO._beforeClearStage.registerStep(XJ.b.STEP_BEFORECLEAR_PROCEDURALTEXTURE, this, this._beforeClear)
      }
      rebuild() {}
      dispose() {}
      _beforeClear() {
        if (this.BO.proceduralTexturesEnabled) {
          iJ.h.StartPerformanceCounter("Procedural textures", this.BO.proceduralTextures.length > 0);
          for (let dd = 0; dd < this.BO.proceduralTextures.length; dd++) {
            const Jd = this.BO.proceduralTextures[dd];
            Jd._shouldRender() && Jd.render()
          }
          iJ.h.EndPerformanceCounter("Procedural textures", this.BO.proceduralTextures.length > 0)
        }
      }
    }
    var pk = kd(40304);
    let Nk = (() => {
      var dd;
      let Jd, pd, Nd, Pd, Zd, gd = md.c,
        Cd = [],
        Kd = [],
        od = [],
        ld = [],
        Qd = [],
        Ld = [],
        ed = [],
        Rd = [],
        Id = [];
      return dd = class extends gd {
        get shaderLanguage() {
          return this._shaderLanguage
        }
        constructor(dd, Jd, kd, pd) {
          let Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            Wd = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
            Pd = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
            Zd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          super(null, pd, !Wd), this.isEnabled = ((0, ad.i)(this, Cd), (0, ad.i)(this, Kd, !0)), this.autoClear = ((0, ad.i)(this, od), (0, ad.i)(this, ld, !0)), this.onGenerated = (0, ad.i)(this, Qd), this.onGeneratedObservable = new Jk.e, this.onBeforeGenerationObservable = new Jk.e, this.nodeMaterialSource = null, this.defines = "", this._generateMipMaps = (0, ad.i)(this, Ld, void 0), this._drawWrapper = (0, ad.i)(this, ed), this._textures = {}, this._size = (0, ad.i)(this, Rd, void 0), this._textureType = (0, ad.i)(this, Id), this._currentRefreshId = -1, this._frameId = -1, this._refreshRate = 1, this._vertexBuffers = {}, this._uniforms = new Array, this._samplers = new Array, this._floats = {}, this._ints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors4 = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._matrices = {}, this._fallbackTextureUsed = !1, this._cachedDefines = null, this._contentUpdateId = -1, this._rtWrapper = null, null === Nd || Nd instanceof md.c ? (this._options = {}, this._fallbackTexture = Nd) : (this._options = Nd, this._fallbackTexture = Nd.fallbackTexture ?? null), this._shaderLanguage = this._options.shaderLanguage ?? 0;
          let gd = (pd = this.Wm() || Od.d.LastCreatedScene)._getComponent(XJ.b.NAME_PROCEDURALTEXTURE);
          gd || (gd = new kk(pd), pd.Cpd(gd)), this._options.skipSceneRegistration || pd.proceduralTextures.push(this), this._fullEngine = pd.eL(), this.name = dd, this.isRenderTarget = !0, this._size = Jd, this._textureType = Zd, this._generateMipMaps = Wd, this._drawWrapper = new pk.d(this._fullEngine), this.setFragment(kd);
          const Gd = this._createRtWrapper(Pd, Jd, Wd, Zd);
          this._texture = Gd.texture;
          const vd = [];
          vd.push(1, 1), vd.push(-1, 1), vd.push(-1, -1), vd.push(1, -1), this._vertexBuffers[Dd.j.PositionKind] = new Dd.j(this._fullEngine, vd, Dd.j.PositionKind, !1, !1, 2), this._createIndexBuffer()
        }
        _createRtWrapper(dd, Jd, kd, pd) {
          return dd ? (this._rtWrapper = this._fullEngine.createRenderTargetCubeTexture(Jd, {
            generateMipMaps: kd,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: pd,
            ...this._options
          }), this.setFloat("face", 0)) : (this._rtWrapper = this._fullEngine.createRenderTargetTexture(Jd, {
            generateMipMaps: kd,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: pd,
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
            Jd = [];
          Jd.push(0), Jd.push(1), Jd.push(2), Jd.push(0), Jd.push(2), Jd.push(3), this._indexBuffer = dd.createIndexBuffer(Jd)
        }
        _rebuild() {
          const dd = this._vertexBuffers[Dd.j.PositionKind];
          dd && dd._rebuild(), this._createIndexBuffer(), this.refreshRate === aJ.c.REFRESHRATE_RENDER_ONCE && (this.refreshRate = aJ.c.REFRESHRATE_RENDER_ONCE)
        }
        reset() {
          this._drawWrapper.effect?.dispose(), this._drawWrapper.effect = null, this._cachedDefines = null
        }
        _getDefines() {
          return this.defines
        }
        executeWhenReady(dd) {
          if (this.isReady()) return void dd(this);
          const Jd = this.getEffect();
          Jd && Jd.executeWhenCompiled((() => {
            dd(this)
          }))
        }
        isReady() {
          const dd = this._fullEngine;
          if (this.nodeMaterialSource) return this._drawWrapper.effect?.isReady() ?? !1;
          if (!this._fragment) return !1;
          if (this._fallbackTextureUsed) return !0;
          if (!this._texture) return !1;
          const Jd = this._getDefines();
          if (this._drawWrapper.effect && Jd === this._cachedDefines && this._drawWrapper.effect.isReady()) return !0;
          const pd = {
            vertex: "procedural",
            fragmentElement: this._fragment.fragmentElement,
            fragmentSource: this._fragment.fragmentSource,
            fragment: "string" === typeof this._fragment ? this._fragment : void 0
          };
          return this._cachedDefines !== Jd && (this._cachedDefines = Jd, this._drawWrapper.effect = dd.createEffect(pd, [Dd.j.PositionKind], this._uniforms, this._samplers, Jd, void 0, void 0, (() => {
            this._rtWrapper?.dispose(), this._rtWrapper = this._texture = null, this._fallbackTexture && (this._texture = this._fallbackTexture._texture, this._texture && this._texture.incrementReferences()), this._fallbackTextureUsed = !0
          }), void 0, this._shaderLanguage, (async () => {
            this._options.extraInitializationsAsync ? 1 === this.shaderLanguage ? await Promise.all([kd.e(382).then((() => kd(61582))), this._options.extraInitializationsAsync()]) : await Promise.all([kd.e(383).then((() => kd(61588))), this._options.extraInitializationsAsync()]) : 1 === this.shaderLanguage ? await kd.e(382).then((() => kd(61582))) : await kd.e(383).then((() => kd(61588)))
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
        resize(dd, Jd) {
          if (this._fallbackTextureUsed || !this._rtWrapper || !this._texture) return;
          const kd = this._texture.isCube;
          this._rtWrapper.dispose();
          const pd = this._createRtWrapper(kd, dd, Jd, this._textureType);
          this._texture = pd.texture, this._size = dd, this._generateMipMaps = Jd
        }
        _checkUniform(dd) {
          -1 === this._uniforms.indexOf(dd) && this._uniforms.push(dd)
        }
        setTexture(dd, Jd) {
          return -1 === this._samplers.indexOf(dd) && this._samplers.push(dd), this._textures[dd] = Jd, this
        }
        setFloat(dd, Jd) {
          return this._checkUniform(dd), this._floats[dd] = Jd, this
        }
        setInt(dd, Jd) {
          return this._checkUniform(dd), this._ints[dd] = Jd, this
        }
        setFloats(dd, Jd) {
          return this._checkUniform(dd), this._floatsArrays[dd] = Jd, this
        }
        setColor3(dd, Jd) {
          return this._checkUniform(dd), this._colors3[dd] = Jd, this
        }
        setColor4(dd, Jd) {
          return this._checkUniform(dd), this._colors4[dd] = Jd, this
        }
        setVector2(dd, Jd) {
          return this._checkUniform(dd), this._vectors2[dd] = Jd, this
        }
        setVector3(dd, Jd) {
          return this._checkUniform(dd), this._vectors3[dd] = Jd, this
        }
        setVector4(dd, Jd) {
          return this._checkUniform(dd), this._vectors4[dd] = Jd, this
        }
        setMatrix(dd, Jd) {
          return this._checkUniform(dd), this._matrices[dd] = Jd, this
        }
        render(dd) {
          const Jd = this.Wm();
          if (!Jd) return;
          const kd = this._fullEngine;
          if (kd.enableEffect(this._drawWrapper), this.onBeforeGenerationObservable.notifyObservers(this), kd.setState(!1), !this.nodeMaterialSource) {
            for (const dd in this._textures) this._drawWrapper.effect.setTexture(dd, this._textures[dd]);
            for (const dd in this._ints) this._drawWrapper.effect.setInt(dd, this._ints[dd]);
            for (const dd in this._floats) this._drawWrapper.effect.setFloat(dd, this._floats[dd]);
            for (const dd in this._floatsArrays) this._drawWrapper.effect.setArray(dd, this._floatsArrays[dd]);
            for (const dd in this._colors3) this._drawWrapper.effect.setColor3(dd, this._colors3[dd]);
            for (const dd in this._colors4) {
              const Jd = this._colors4[dd];
              this._drawWrapper.effect.setFloat4(dd, Jd.r, Jd.g, Jd.b, Jd.a)
            }
            for (const dd in this._vectors2) this._drawWrapper.effect.setVector2(dd, this._vectors2[dd]);
            for (const dd in this._vectors3) this._drawWrapper.effect.setVector3(dd, this._vectors3[dd]);
            for (const dd in this._vectors4) this._drawWrapper.effect.setVector4(dd, this._vectors4[dd]);
            for (const dd in this._matrices) this._drawWrapper.effect.setMatrix(dd, this._matrices[dd])
          }
          if (!this._texture || !this._rtWrapper) return;
          kd._enableGPUDebugMarkers && kd._debugPushGroup?.(`procedural texture generation for ${this.name}`);
          const pd = kd.currentViewport;
          if (this.isCube)
            for (let Nd = 0; Nd < 6; Nd++) kd.bindFramebuffer(this._rtWrapper, Nd, void 0, void 0, !0), kd.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._drawWrapper.effect.setFloat("face", Nd), this.autoClear && kd.clear(Jd.clearColor, !0, !1, !1), kd.drawElementsType(Wd.b.TriangleFillMode, 0, 6), kd.unBindFramebuffer(this._rtWrapper, !0);
          else {
            let dd = 1;
            this._rtWrapper.is3D ? dd = this._rtWrapper.depth : this._rtWrapper.is2DArray && (dd = this._rtWrapper.layers);
            for (let pd = 0; pd < dd; pd++) {
              if (kd.bindFramebuffer(this._rtWrapper, 0, void 0, void 0, !0, 0, pd), kd.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._rtWrapper.is3D || this._rtWrapper.is2DArray) {
                this._drawWrapper.effect?.setFloat("layer", 1 !== dd ? pd / (dd - 1) : 0), this._drawWrapper.effect?.setInt("layerNum", pd);
                for (const dd in this._textures) this._drawWrapper.effect.setTexture(dd, this._textures[dd])
              }
              this.autoClear && kd.clear(Jd.clearColor, !0, !1, !1), kd.drawElementsType(Wd.b.TriangleFillMode, 0, 6), kd.unBindFramebuffer(this._rtWrapper, !this._generateMipMaps)
            }
          }
          pd && kd.setViewport(pd), this.isCube && kd.generateMipMapsForCubemap(this._texture, !0), kd._enableGPUDebugMarkers && kd._debugPopGroup?.(), this.onGenerated && this.onGenerated(), this.onGeneratedObservable.notifyObservers(this)
        }
        clone() {
          const Jd = this.getSize(),
            kd = new dd(this.name, Jd.width, this._fragment, this.Wm(), this._fallbackTexture, this._generateMipMaps);
          return kd.hasAlpha = this.hasAlpha, kd.level = this.level, kd.coordinatesMode = this.coordinatesMode, kd
        }
        dispose() {
          const dd = this.Wm();
          if (!dd) return;
          const Jd = dd.proceduralTextures.indexOf(this);
          Jd >= 0 && dd.proceduralTextures.splice(Jd, 1);
          const kd = this._vertexBuffers[Dd.j.PositionKind];
          kd && (kd.dispose(), this._vertexBuffers[Dd.j.PositionKind] = null), this._indexBuffer && this._fullEngine._releaseBuffer(this._indexBuffer) && (this._indexBuffer = null), this.onGeneratedObservable.clear(), this.onBeforeGenerationObservable.clear(), super.dispose()
        }
      }, (() => {
        const kd = "function" === typeof Symbol && Symbol.metadata ? Object.create(gd[Symbol.metadata] ?? null) : void 0;
        Jd = [(0, Md.H)()], pd = [(0, Md.H)()], Nd = [(0, Md.H)()], Pd = [(0, Md.H)()], Zd = [(0, Md.H)()], (0, ad.h)(dd, null, Zd, {
          kind: "getter",
          name: "refreshRate",
          static: !1,
          private: !1,
          access: {
            has: dd => "refreshRate" in dd,
            get: dd => dd.refreshRate
          },
          metadata: kd
        }, null, Cd), (0, ad.h)(null, null, Jd, {
          kind: "field",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: dd => "isEnabled" in dd,
            get: dd => dd.isEnabled,
            set: (dd, Jd) => {
              dd.isEnabled = Jd
            }
          },
          metadata: kd
        }, Kd, od), (0, ad.h)(null, null, pd, {
          kind: "field",
          name: "autoClear",
          static: !1,
          private: !1,
          access: {
            has: dd => "autoClear" in dd,
            get: dd => dd.autoClear,
            set: (dd, Jd) => {
              dd.autoClear = Jd
            }
          },
          metadata: kd
        }, ld, Qd), (0, ad.h)(null, null, Nd, {
          kind: "field",
          name: "_generateMipMaps",
          static: !1,
          private: !1,
          access: {
            has: dd => "_generateMipMaps" in dd,
            get: dd => dd._generateMipMaps,
            set: (dd, Jd) => {
              dd._generateMipMaps = Jd
            }
          },
          metadata: kd
        }, Ld, ed), (0, ad.h)(null, null, Pd, {
          kind: "field",
          name: "_size",
          static: !1,
          private: !1,
          access: {
            has: dd => "_size" in dd,
            get: dd => dd._size,
            set: (dd, Jd) => {
              dd._size = Jd
            }
          },
          metadata: kd
        }, Rd, Id), kd && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: kd
        })
      })(), dd
    })();

    function Wk(dd) {
      return "texture" in dd
    }

    function Pk(dd) {
      return "value" in dd
    }
    async function Zk(dd, Jd, pd) {
      const Nd = [Jd.red, Jd.green, Jd.blue, Jd.alpha],
        Wd = [],
        Pd = [];
      for (let kd = 0; kd < 4; kd++) {
        const dd = Nd[kd];
        if (dd)
          if (Wk(dd)) {
            if (dd.sourceChannel < 0 || dd.sourceChannel > 3) throw new Error("Source channel must be between 0 and 3 (R, G, B, A)");
            let Jd = Wd.indexOf(dd.texture); - 1 === Jd && (Jd = Wd.length, Wd.push(dd.texture)), Pd[kd] = Jd
          } else {
            if (!Pk(dd)) throw new Error("Invalid channel input configuration");
            if (dd.value < 0 || dd.value > 1) throw new Error("Constant value must be between 0.0 and 1.0");
            Pd[kd] = -1
          }
        else Pd[kd] = -1
      }
      let Zd = Jd.outputSize;
      if (!Zd && Wd.length > 0) {
        let dd = 0;
        for (const Jd of Wd) {
          const kd = Jd.getSize(),
            pd = Math.max(kd.width, kd.height);
          pd > dd && (dd = pd, Zd = kd.width === kd.height ? dd : kd)
        }
      }
      Zd = Zd || 512;
      const gd = [],
        Cd = new Set;
      for (let kd = 0; kd < 4; kd++) {
        const dd = Nd[kd],
          Jd = ["RED", "GREEN", "BLUE", "ALPHA"][kd];
        if (dd && Wk(dd)) {
          gd.push(`${Jd}_FROM_TEXTURE`);
          const dd = Pd[kd];
          Cd.add(dd)
        }
      }
      Cd.forEach((dd => {
        gd.push(`USE_TEXTURE${dd}`)
      }));
      const Kd = {
          type: 2,
          format: 5,
          samplingMode: 1,
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          shaderLanguage: pd.eL().isWebGPU ? 1 : 0,
          extraInitializationsAsync: async () => {
            pd.eL().isWebGPU ? await Promise.all([kd.e(380).then((() => kd(61572)))]) : await Promise.all([kd.e(381).then((() => kd(61577)))])
          },
          skipSceneRegistration: !0
        },
        od = new Nk(dd, Zd, "textureMerger", pd, Kd);
      od.refreshRate = -1, od.defines = gd.length > 0 ? "#define " + gd.join("\n#define ") + "\n" : "";
      for (let kd = 0; kd < Wd.length; kd++) ld = Wd[kd], (Qd = od).uOffset = ld.uOffset, Qd.vOffset = ld.vOffset, Qd.uScale = ld.uScale, Qd.vScale = ld.vScale, Qd.uAng = ld.uAng, Qd.vAng = ld.vAng, Qd.wAng = ld.wAng, Qd.uRotationCenter = ld.uRotationCenter, Qd.vRotationCenter = ld.vRotationCenter, od.setTexture(`inputTexture${kd}`, Wd[kd]);
      var ld, Qd;
      for (let kd = 0; kd < 4; kd++) {
        const dd = Nd[kd],
          Jd = ["red", "green", "blue", "alpha"][kd];
        if (dd && Wk(dd)) {
          const pd = Pd[kd];
          od.setInt(`${Jd}TextureIndex`, pd), od.setInt(`${Jd}SourceChannel`, dd.sourceChannel)
        } else {
          let pd;
          pd = dd && Pk(dd) ? dd.value : 3 === kd ? 1 : 0, od.setFloat(`${Jd}ConstantValue`, pd)
        }
      }
      return await new Promise(((dd, Jd) => {
        od.executeWhenReady((() => {
          try {
            od.render(), dd(od)
          } catch (kd) {
            Jd(kd instanceof Error ? kd : new Error(String(kd)))
          }
        }))
      }))
    }

    function gk(dd, Jd) {
      return {
        texture: dd,
        sourceChannel: Jd
      }
    }

    function Ck(dd) {
      return {
        value: dd
      }
    }

    function Kk(dd, Jd, kd, pd) {
      return {
        red: dd,
        green: Jd,
        blue: kd,
        alpha: pd
      }
    }
    var lk = kd(39799),
      Qk = kd(39893),
      Lk = kd(37271),
      Ok = kd(39949),
      ek = kd(39885);
    class Rk {
      constructor() {
        this.renderWidth = 512, this.renderHeight = 256, this.textureSize = 512, this.deterministicLockstep = !1, this.lockstepMaxSteps = 4
      }
    }
    class Ik extends lk.d {
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
        return !!this._options?.enableMultiview || this.uL > 1 && !this.disableUniformBuffers
      }
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Rk;
        super(null), void 0 === dd.deterministicLockstep && (dd.deterministicLockstep = !1), void 0 !== dd.timeStep && (this._timeStep = dd.timeStep), void 0 === dd.lockstepMaxSteps && (dd.lockstepMaxSteps = 4), this._options = dd, Lk.d.SetMatrixPrecision(!!dd.useHighPrecisionMatrix), this._caps = {
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
        }, dd.renderingCanvas && (this._renderingCanvas = dd.renderingCanvas), Fd.c.Log(`Babylon.js v${lk.d.Version} - Null engine`);
        const Jd = "undefined" !== typeof self ? self : "undefined" !== typeof global ? global : window;
        "undefined" === typeof URL && (Jd.URL = {
          createObjectURL: function() {},
          revokeObjectURL: function() {}
        }), "undefined" === typeof Blob && (Jd.Blob = function() {})
      }
      createVertexBuffer(dd) {
        const Jd = new Qk.d;
        return Jd.references = 1, Jd
      }
      createIndexBuffer(dd) {
        const Jd = new Qk.d;
        return Jd.references = 1, Jd
      }
      clear(dd, Jd, kd) {}
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._options.renderWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._options.renderHeight
      }
      setViewport(dd, Jd, kd) {
        this._cachedViewport = dd
      }
      createUniformBuffer(dd) {
        const Jd = new Qk.d;
        return Jd.references = 1, Jd.oo = dd instanceof Array ? dd.length * Float32Array.BYTES_PER_ELEMENT : dd.byteLength, Jd
      }
      createDynamicUniformBuffer(dd) {
        return this.createUniformBuffer(dd)
      }
      updateUniformBuffer(dd, Jd, kd, pd) {}
      bindUniformBufferBase(dd, Jd, kd) {}
      bindUniformBlock(dd, Jd, kd) {}
      createShaderProgram(dd, Jd, kd, pd, Nd) {
        return {
          __SPECTOR_rebuildProgram: null
        }
      }
      getUniforms(dd, Jd) {
        return []
      }
      getAttributes(dd, Jd) {
        return []
      }
      bindSamplers(dd) {
        this._currentEffect = null
      }
      enableEffect(dd) {
        dd = null !== dd && (0, ek.c)(dd) ? dd.effect : dd, this._currentEffect = dd, dd && (dd.onBind && dd.onBind(dd), dd._onBindObservable && dd._onBindObservable.notifyObservers(dd))
      }
      setStateCullFaceType(dd, Jd) {}
      setState(dd) {}
      setIntArray(dd, Jd) {
        return !0
      }
      setIntArray2(dd, Jd) {
        return !0
      }
      setIntArray3(dd, Jd) {
        return !0
      }
      setIntArray4(dd, Jd) {
        return !0
      }
      setFloatArray(dd, Jd) {
        return !0
      }
      setFloatArray2(dd, Jd) {
        return !0
      }
      setFloatArray3(dd, Jd) {
        return !0
      }
      setFloatArray4(dd, Jd) {
        return !0
      }
      setArray(dd, Jd) {
        return !0
      }
      setArray2(dd, Jd) {
        return !0
      }
      setArray3(dd, Jd) {
        return !0
      }
      setArray4(dd, Jd) {
        return !0
      }
      setMatrices(dd, Jd) {
        return !0
      }
      setMatrix3x3(dd, Jd) {
        return !0
      }
      setMatrix2x2(dd, Jd) {
        return !0
      }
      setFloat(dd, Jd) {
        return !0
      }
      setFloat2(dd, Jd, kd) {
        return !0
      }
      setFloat3(dd, Jd, kd, pd) {
        return !0
      }
      setBool(dd, Jd) {
        return !0
      }
      setFloat4(dd, Jd, kd, pd, Nd) {
        return !0
      }
      setAlphaMode(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._alphaMode[kd] !== dd && (this.alphaState.setAlphaBlend(0 !== dd, 0), Jd || this.setDepthWrite(0 === dd), this._alphaMode[kd] = dd)
      }
      bindBuffers(dd, Jd, kd) {}
      wipeCaches(dd) {
        this.preventCacheWipeBetweenFrames || (this.resetTextureCache(), this._currentEffect = null, dd && (this._currentProgram = null, this._stencilStateComposer.reset(), this.depthCullingState.reset(), this.alphaState.reset()), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null)
      }
      draw(dd, Jd, kd, pd) {}
      drawElementsType(dd, Jd, kd, pd) {}
      drawArraysType(dd, Jd, kd, pd) {}
      _createTexture() {
        return {}
      }
      _releaseTexture(dd) {}
      createTexture(dd, Jd, kd, pd) {
        let Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          Wd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Pd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Zd = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
        const gd = new MJ.b(this, 1),
          Cd = String(dd);
        return gd.url = Cd, gd.generateMipMaps = !Jd, gd.samplingMode = Nd, gd.invertY = kd, gd.baseWidth = this._options.textureSize, gd.baseHeight = this._options.textureSize, gd.width = this._options.textureSize, gd.height = this._options.textureSize, Zd && (gd.format = Zd), Pd && (gd._buffer = Pd), gd.isReady = !0, Wd && setTimeout((() => {
          Wd(gd)
        })), this._internalTexturesCache.push(gd), gd
      }
      _createHardwareRenderTargetWrapper(dd, Jd, kd) {
        const pd = new Ok.e(dd, Jd, kd, this);
        return this._renderTargetWrapperCache.push(pd), pd
      }
      createRenderTargetTexture(dd, Jd) {
        const kd = this._createHardwareRenderTargetWrapper(!1, !1, dd),
          pd = {};
        void 0 !== Jd && "object" === typeof Jd ? (pd.generateMipMaps = Jd.generateMipMaps, pd.generateDepthBuffer = void 0 === Jd.generateDepthBuffer || Jd.generateDepthBuffer, pd.generateStencilBuffer = pd.generateDepthBuffer && Jd.generateStencilBuffer, pd.type = void 0 === Jd.type ? 0 : Jd.type, pd.samplingMode = void 0 === Jd.samplingMode ? 3 : Jd.samplingMode) : (pd.generateMipMaps = Jd, pd.generateDepthBuffer = !0, pd.generateStencilBuffer = !1, pd.type = 0, pd.samplingMode = 3);
        const Nd = new MJ.b(this, 5);
        kd.setTexture(Nd);
        const Wd = dd.width || dd,
          Pd = dd.height || dd;
        return kd._generateDepthBuffer = pd.generateDepthBuffer, kd._generateStencilBuffer = !!pd.generateStencilBuffer, Nd.baseWidth = Wd, Nd.baseHeight = Pd, Nd.width = Wd, Nd.height = Pd, Nd.isReady = !0, Nd.samples = 1, Nd.generateMipMaps = !!pd.generateMipMaps, Nd.samplingMode = pd.samplingMode, Nd.type = pd.type, this._internalTexturesCache.push(Nd), kd
      }
      createMultiviewRenderTargetTexture(dd, Jd) {
        if (!this.getCaps().multiview) throw new Error("Multiview is not supported");
        const kd = this._createHardwareRenderTargetWrapper(!1, !1, {
            width: dd,
            height: Jd
          }),
          pd = new MJ.b(this, 5, !0);
        return pd.baseWidth = dd, pd.baseHeight = Jd, pd.width = dd, pd.height = Jd, pd.isMultiview = !0, pd.isReady = !0, pd.format = 5, pd.samples = 1, kd.setTextures(pd), kd
      }
      bindMultiviewFramebuffer(dd) {
        this.bindFramebuffer(dd, void 0, void 0, void 0, !0)
      }
      createRenderTargetCubeTexture(dd, Jd) {
        const kd = this._createHardwareRenderTargetWrapper(!1, !0, dd),
          pd = {
            generateMipMaps: !0,
            generateDepthBuffer: !0,
            generateStencilBuffer: !1,
            type: 0,
            samplingMode: 3,
            format: 5,
            ...Jd
          };
        pd.generateStencilBuffer = pd.generateDepthBuffer && pd.generateStencilBuffer, (1 !== pd.type || this._caps.textureFloatLinearFiltering) && (2 !== pd.type || this._caps.textureHalfFloatLinearFiltering) || (pd.samplingMode = 1), kd._generateDepthBuffer = pd.generateDepthBuffer, kd._generateStencilBuffer = !!pd.generateStencilBuffer;
        const Nd = new MJ.b(this, 5);
        return Nd.baseWidth = dd, Nd.baseHeight = dd, Nd.width = dd, Nd.height = dd, Nd.isReady = !0, Nd.isCube = !0, Nd.samples = 1, Nd.generateMipMaps = !!pd.generateMipMaps, Nd.samplingMode = pd.samplingMode, Nd.type = pd.type, this._internalTexturesCache.push(Nd), kd
      }
      updateTextureSamplingMode(dd, Jd) {
        Jd.samplingMode = dd
      }
      createRawTexture(dd, Jd, kd, pd, Nd, Wd, Pd) {
        let Zd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          gd = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          Cd = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const Kd = new MJ.b(this, 3);
        return Kd.baseWidth = Jd, Kd.baseHeight = kd, Kd.width = Jd, Kd.height = kd, Kd.format = pd, Kd.generateMipMaps = Nd, Kd.samplingMode = Pd, Kd.invertY = Wd, Kd._compression = Zd, Kd.type = gd, Kd._useSRGBBuffer = Cd, this._doNotHandleContextLost || (Kd._bufferView = dd), Kd
      }
      updateRawTexture(dd, Jd, kd, pd) {
        let Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          Wd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Pd = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        dd && (dd._bufferView = Jd, dd.format = kd, dd.invertY = pd, dd._compression = Nd, dd.type = Wd, dd._useSRGBBuffer = Pd)
      }
      bindFramebuffer(dd, Jd, kd, pd, Nd) {
        this._currentRenderTarget && this.unBindFramebuffer(this._currentRenderTarget), this._currentRenderTarget = dd, this._currentFramebuffer = null, this._cachedViewport && !Nd && this.setViewport(this._cachedViewport, kd, pd)
      }
      unBindFramebuffer(dd) {
        let Jd = arguments.length > 2 ? arguments[2] : void 0;
        this._currentRenderTarget = null, Jd && Jd(), this._currentFramebuffer = null
      }
      createDynamicVertexBuffer(dd) {
        const Jd = new Qk.d;
        return Jd.references = 1, Jd.oo = 1, Jd
      }
      updateDynamicTexture(dd, Jd, kd) {}
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
      updateDynamicIndexBuffer(dd, Jd) {}
      updateDynamicVertexBuffer(dd, Jd, kd, pd) {}
      _bindTextureDirectly(dd, Jd) {
        return this._boundTexturesCache[this._activeChannel] !== Jd && (this._boundTexturesCache[this._activeChannel] = Jd, !0)
      }
      _bindTexture(dd, Jd) {
        dd < 0 || this._bindTextureDirectly(0, Jd)
      }
      _deleteBuffer(dd) {}
      releaseEffects() {}
      displayLoadingUI() {}
      hideLoadingUI() {}
      set loadingUIText(dd) {}
      flushFramebuffer() {}
      _uploadCompressedDataToTextureDirectly(dd, Jd, kd, pd, Nd) {}
      _uploadDataToTextureDirectly(dd, Jd) {}
      _uploadArrayBufferViewToTexture(dd, Jd) {}
      _uploadImageToTexture(dd, Jd) {}
    }
    kd(4e4), kd(40045), kd(39995);
    async function Gk(dd) {
      const Jd = dd.getInternalTexture();
      if (!Jd || 1 !== Jd.source) return null;
      if (Jd.invertY) {
        const Jd = dd.Wm()?.eL();
        if (!(Jd instanceof Ik)) return null
      }
      const kd = Jd._buffer;
      let pd, Wd = dd.mimeType;
      try {
        kd ? ArrayBuffer.isView(kd) ? pd = kd.buffer.slice(kd.byteOffset, kd.byteOffset + kd.byteLength) : kd instanceof ArrayBuffer ? pd = kd : kd instanceof Blob ? (pd = await kd.arrayBuffer(), Wd = kd.type || Wd) : "string" === typeof kd ? (pd = await Nd.Tools.LoadFileAsync(kd), Wd = (0, gd.e)(kd) || Wd) : "undefined" !== typeof HTMLImageElement && kd instanceof HTMLImageElement && (pd = await Nd.Tools.LoadFileAsync(kd.src), Wd = (0, gd.e)(kd.src) || Wd) : (pd = await Nd.Tools.LoadFileAsync(Jd.url), Wd = (0, gd.e)(Jd.url) || Wd)
      } catch {
        return null
      }
      if (pd && !Wd && Jd.url) {
        const dd = Jd.url.match(/^data:([^;,]+)/);
        Wd = dd ? dd[1] : (0, gd.e)(Jd.url)
      }
      return pd && Wd ? {
        data: pd,
        mimeType: Wd
      } : null
    }
    const vk = 1e-6,
      xk = new ed.Color3(.04, .04, .04),
      qk = 1024,
      Bk = ed.Color3.White(),
      sk = ed.Color3.BlackReadOnly;

    function ik(dd) {
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

    function ak(dd, Jd, kd) {
      if (Jd < xk.r) return 0;
      const pd = xk.r,
        Nd = dd * kd / (1 - xk.r) + Jd - 2 * xk.r,
        Wd = Nd * Nd - 4 * pd * (xk.r - Jd);
      return Gd.Clamp((-Nd + Math.sqrt(Wd)) / (2 * pd), 0, 1)
    }

    function Mk(dd) {
      const Jd = dd.diffuseColor.toLinearSpace(dd.Wm().eL().useExactSrgbConversions).scale(.5),
        kd = dd.alpha,
        pd = function(dd) {
          let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new yd.k(0, 1),
            kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new yd.k(0, .1),
            pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new yd.k(0, .1),
            Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new yd.k(1300, .1);
          return function(dd, Jd, kd, pd, Nd) {
            return (1 - dd) * (1 - dd) * (1 - dd) * Jd + 3 * (1 - dd) * (1 - dd) * dd * kd + 3 * (1 - dd) * dd * dd * pd + dd * dd * dd * Nd
          }(Math.pow(dd / Nd.x, .333333), Jd.y, kd.y, pd.y, Nd.y)
        }(Gd.Clamp(dd.specularPower, 0, qk));
      return {
        baseColorFactor: [Jd.r, Jd.g, Jd.b, kd],
        metallicFactor: 0,
        roughnessFactor: pd
      }
    }

    function Fk(dd, Jd) {
      Jd.needAlphaBlending() ? dd.alphaMode = "BLEND" : Jd.needAlphaTesting() && (dd.alphaMode = "MASK", dd.alphaCutoff = Jd.alphaCutOff)
    }

    function Yk(dd, Jd, kd) {
      const pd = new Uint8Array(dd * Jd * 4);
      for (let Nd = 0; Nd < pd.length; Nd += 4) pd[Nd] = pd[Nd + 1] = pd[Nd + 2] = pd[Nd + 3] = 255;
      return qd.d.CreateRGBATexture(pd, dd, Jd, kd)
    }

    function mk(dd) {
      if (dd instanceof Uint8Array) {
        const Jd = dd.length,
          kd = new Float32Array(dd.length);
        for (let pd = 0; pd < Jd; ++pd) kd[pd] = dd[pd] / 255;
        return kd
      }
      if (dd instanceof Float32Array) return dd;
      throw new Error("Unsupported pixel format!")
    }
    class bk {
      constructor(dd) {
        this._exporter = dd, this._textureMap = new Map, this._internalTextureToImage = {}
      }
      getTextureInfo(dd) {
        return dd ? this._textureMap.get(dd.uniqueId) ?? null : null
      }
      async exportStandardMaterialAsync(dd, Jd) {
        const kd = Mk(dd),
          pd = {
            name: dd.name
          };
        if (null == dd.backFaceCulling || dd.backFaceCulling || (dd.twoSidedLighting || Nd.Tools.Warn(dd.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), pd.doubleSided = !0), Jd) {
          const Jd = [],
            Nd = dd.diffuseTexture;
          Nd && Jd.push(this.exportTextureAsync(Nd).then((dd => {
            dd && (kd.baseColorTexture = dd)
          })));
          const Wd = dd.bumpTexture;
          Wd && Jd.push(this.exportTextureAsync(Wd).then((dd => {
            dd && (pd.normalTexture = dd, 1 !== Wd.level && (pd.normalTexture.scale = Wd.level))
          })));
          const Pd = dd.emissiveTexture;
          Pd && (pd.emissiveFactor = [1, 1, 1], Jd.push(this.exportTextureAsync(Pd).then((dd => {
            dd && (pd.emissiveTexture = dd)
          }))));
          const Zd = dd.ambientTexture;
          Zd && Jd.push(this.exportTextureAsync(Zd).then((dd => {
            if (dd) {
              const Jd = {
                index: dd.index
              };
              pd.occlusionTexture = Jd
            }
          }))), Jd.length > 0 && (this._exporter._materialNeedsUVsSet.add(dd), await Promise.all(Jd))
        }(dd.alpha < 1 || dd.opacityTexture) && (dd.alphaMode === Bd.e.ALPHA_COMBINE ? pd.alphaMode = "BLEND" : Nd.Tools.Warn(dd.name + ": glTF 2.0 does not support alpha mode: " + dd.alphaMode.toString())), dd.emissiveColor && !dd.emissiveColor.equalsWithEpsilon(sk, vk) && (pd.emissiveFactor = dd.emissiveColor.spd()), pd.pbrMetallicRoughness = kd, Fk(pd, dd), await this._finishMaterialAsync(pd, dd);
        const Wd = this._exporter._materials;
        return Wd.push(pd), Wd.length - 1
      }
      async _finishMaterialAsync(dd, Jd) {
        const kd = await this._exporter._extensionsPostExportMaterialAdditionalTexturesAsync("exportMaterial", dd, Jd),
          pd = [];
        for (const Nd of kd) pd.push(this.exportTextureAsync(Nd));
        await Promise.all(pd), await this._exporter._extensionsPostExportMaterialAsync("exportMaterial", dd, Jd)
      }
      _resizeTexturesToSameDimensions(dd, Jd, kd) {
        const pd = dd ? dd.getSize() : {
            width: 0,
            height: 0
          },
          Nd = Jd ? Jd.getSize() : {
            width: 0,
            height: 0
          };
        let Wd, Pd;
        return pd.width < Nd.width ? (Wd = dd && dd instanceof xd.d ? vd.g.CreateResizedCopy(dd, Nd.width, Nd.height, !0) : Yk(Nd.width, Nd.height, kd), Pd = Jd) : pd.width > Nd.width ? (Pd = Jd && Jd instanceof xd.d ? vd.g.CreateResizedCopy(Jd, pd.width, pd.height, !0) : Yk(pd.width, pd.height, kd), Wd = dd) : (Wd = dd, Pd = Jd), {
          texture1: Wd,
          texture2: Pd
        }
      }
      async _convertSpecularGlossinessTexturesToMetallicRoughnessAsync(dd, Jd, kd) {
        const pd = new Array;
        if (!dd && !Jd) return await Promise.reject("diffuse and specular glossiness textures are not defined!");
        const Nd = dd ? dd.Wm() : Jd ? Jd.Wm() : null;
        if (Nd) {
          const Wd = this._resizeTexturesToSameDimensions(dd, Jd, Nd),
            Pd = Wd.texture1?.getSize();
          let Zd, gd;
          const Cd = Pd.width,
            Kd = Pd.height,
            od = await Wd.texture1.readPixels(),
            ld = await Wd.texture2.readPixels();
          if (!od) return await Promise.reject("Failed to retrieve pixels from diffuse texture!");
          if (Zd = mk(od), !ld) return await Promise.reject("Failed to retrieve pixels from specular glossiness texture!");
          gd = mk(ld);
          const Qd = gd.byteLength,
            Ld = new Uint8Array(Qd),
            Od = new Uint8Array(Qd),
            Rd = 4,
            Id = new ed.Color3(0, 0, 0);
          let Gd = 0,
            vd = 0;
          for (let dd = 0; dd < Kd; ++dd)
            for (let Jd = 0; Jd < Cd; ++Jd) {
              const pd = (Cd * dd + Jd) * Rd,
                Pd = {
                  diffuseColor: new ed.Color3(Zd[pd], Zd[pd + 1], Zd[pd + 2]).toLinearSpace(Nd.eL().useExactSrgbConversions).multiply(kd.diffuseColor),
                  specularColor: new ed.Color3(gd[pd], gd[pd + 1], gd[pd + 2]).toLinearSpace(Nd.eL().useExactSrgbConversions).multiply(kd.specularColor),
                  glossiness: gd[pd + 3] * kd.glossiness
                },
                Kd = this._convertSpecularGlossinessToMetallicRoughness(Pd);
              Id.r = Math.max(Id.r, Kd.baseColor.r), Id.g = Math.max(Id.g, Kd.baseColor.g), Id.b = Math.max(Id.b, Kd.baseColor.b), Gd = Math.max(Gd, Kd.metallic), vd = Math.max(vd, Kd.roughness), Od[pd] = 255 * Kd.baseColor.r, Od[pd + 1] = 255 * Kd.baseColor.g, Od[pd + 2] = 255 * Kd.baseColor.b, Od[pd + 3] = Wd.texture1.hasAlpha ? 255 * Zd[pd + 3] : 255, Ld[pd] = 0, Ld[pd + 1] = 255 * Kd.roughness, Ld[pd + 2] = 255 * Kd.metallic, Ld[pd + 3] = 255
            }
          const xd = {
            baseColor: Id,
            metallic: Gd,
            roughness: vd
          };
          let qd = !1,
            Bd = !1;
          for (let dd = 0; dd < Kd; ++dd)
            for (let Jd = 0; Jd < Cd; ++Jd) {
              const kd = (Cd * dd + Jd) * Rd;
              Od[kd] /= xd.baseColor.r > vk ? xd.baseColor.r : 1, Od[kd + 1] /= xd.baseColor.g > vk ? xd.baseColor.g : 1, Od[kd + 2] /= xd.baseColor.b > vk ? xd.baseColor.b : 1;
              const pd = ed.Color3.FromInts(Od[kd], Od[kd + 1], Od[kd + 2]).toGammaSpace(Nd.eL().useExactSrgbConversions);
              Od[kd] = 255 * pd.r, Od[kd + 1] = 255 * pd.g, Od[kd + 2] = 255 * pd.b, pd.equalsWithEpsilon(Bk, vk) || (Bd = !0), Ld[kd + 1] /= xd.roughness > vk ? xd.roughness : 1, Ld[kd + 2] /= xd.metallic > vk ? xd.metallic : 1;
              ed.Color3.FromInts(255, Ld[kd + 1], Ld[kd + 2]).equalsWithEpsilon(Bk, vk) || (qd = !0)
            }
          return qd && pd.push((0, sd.EncodeImageAsync)(Ld, Cd, Kd).then((dd => {
            xd.metallicRoughnessTextureData = dd
          }))), Bd && pd.push((0, sd.EncodeImageAsync)(Od, Cd, Kd).then((dd => {
            xd.baseColorTextureData = dd
          }))), await Promise.all(pd).then((() => xd))
        }
        return await Promise.reject("_ConvertSpecularGlossinessTexturesToMetallicRoughness: Scene from textures is missing!")
      }
      _convertSpecularGlossinessToMetallicRoughness(dd) {
        const Jd = this._getPerceivedBrightness(dd.diffuseColor),
          kd = this._getPerceivedBrightness(dd.specularColor),
          pd = 1 - this._getMaxComponent(dd.specularColor),
          Nd = ak(Jd, kd, pd),
          Wd = dd.diffuseColor.scale(pd / (1 - xk.r) / Math.max(1 - Nd, vk)),
          Pd = dd.specularColor.subtract(xk.scale(1 - Nd)).scale(1 / Math.max(Nd, vk));
        let Zd = ed.Color3.Lerp(Wd, Pd, Nd * Nd);
        Zd = Zd.clampToRef(0, 1, Zd);
        return {
          baseColor: Zd,
          metallic: Nd,
          roughness: 1 - dd.glossiness
        }
      }
      _getPerceivedBrightness(dd) {
        return Math.sqrt(.299 * dd.r * dd.r + .587 * dd.g * dd.g + .114 * dd.b * dd.b)
      }
      _getMaxComponent(dd) {
        return Math.max(dd.r, Math.max(dd.g, dd.b))
      }
      async _convertMetalRoughFactorsToMetallicRoughnessAsync(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd) {
        const Cd = [],
          Kd = {
            baseColor: dd,
            metallic: Jd,
            roughness: kd
          };
        if (gd)
          if (Pd instanceof AJ) {
            if (Pd.geometryOpacityTexture) {
              const dd = pd && pd.getInternalTexture() ? pd.getInternalTexture().uniqueId : 0,
                Jd = Pd.geometryOpacityTexture && Pd.geometryOpacityTexture.getInternalTexture() ? Pd.geometryOpacityTexture.getInternalTexture().uniqueId : 0,
                kd = Number(`${dd}${Jd}`),
                Nd = this._textureMap.get(kd);
              Nd ? Zd.baseColorTexture = Nd : Cd.push(Zk("baseColorOpacityTexture", Kk(pd ? gk(pd, 0) : Ck(1), pd ? gk(pd, 1) : Ck(1), pd ? gk(pd, 2) : Ck(1), gk(Pd.geometryOpacityTexture, 0)), Pd.Wm()).then((async dd => {
                const Jd = await this.exportTextureAsync(dd, kd);
                Jd && (Zd.baseColorTexture = Jd)
              })))
            } else pd && Cd.push(this.exportTextureAsync(pd).then((dd => {
              dd && (Zd.baseColorTexture = dd)
            })));
            if (Pd._useMetallicFromMetallicTextureBlue && Nd) Cd.push(this.exportTextureAsync(Nd).then((dd => {
              dd && (Zd.metallicRoughnessTexture = dd)
            })));
            else if (Wd || Nd) {
              const dd = Nd && Nd.getInternalTexture() ? Nd.getInternalTexture().uniqueId : 0,
                Jd = Wd && Wd.getInternalTexture() ? Wd.getInternalTexture().uniqueId : 0,
                kd = Number(`${dd}${Jd}`),
                pd = this._textureMap.get(kd);
              pd ? Zd.metallicRoughnessTexture = pd : Cd.push(Zk("MetalRoughTexture", Kk(Pd.ambientOcclusionTexture ? gk(Pd.ambientOcclusionTexture, 0) : Ck(1), Wd ? gk(Wd, 0) : Ck(1), Nd ? gk(Nd, 0) : Ck(1)), Pd.Wm()).then((async dd => {
                const Jd = await this.exportTextureAsync(dd, kd);
                Jd && (Zd.metallicRoughnessTexture = Jd)
              })))
            }
          } else pd && Cd.push(this.exportTextureAsync(pd).then((dd => {
            dd && (Zd.baseColorTexture = dd)
          }))), Nd && Cd.push(this.exportTextureAsync(Nd).then((dd => {
            dd && (Zd.metallicRoughnessTexture = dd)
          })));
        return Cd.length > 0 && (this._exporter._materialNeedsUVsSet.add(Pd), await Promise.all(Cd)), Kd
      }
      _getTextureSampler(dd) {
        const Jd = {};
        if (!dd || !(dd instanceof xd.d)) return Jd;
        const kd = this._getGLTFTextureWrapMode(dd.wrapU);
        10497 !== kd && (Jd.wrapS = kd);
        const pd = this._getGLTFTextureWrapMode(dd.wrapV);
        switch (10497 !== pd && (Jd.wrapT = pd), dd.samplingMode) {
          case xd.d.LINEAR_LINEAR:
            Jd.magFilter = 9729, Jd.minFilter = 9729;
            break;
          case xd.d.LINEAR_NEAREST:
            Jd.magFilter = 9729, Jd.minFilter = 9728;
            break;
          case xd.d.NEAREST_LINEAR:
            Jd.magFilter = 9728, Jd.minFilter = 9729;
            break;
          case xd.d.NEAREST_LINEAR_MIPLINEAR:
            Jd.magFilter = 9728, Jd.minFilter = 9987;
            break;
          case xd.d.NEAREST_NEAREST:
            Jd.magFilter = 9728, Jd.minFilter = 9728;
            break;
          case xd.d.NEAREST_LINEAR_MIPNEAREST:
            Jd.magFilter = 9728, Jd.minFilter = 9985;
            break;
          case xd.d.LINEAR_NEAREST_MIPNEAREST:
            Jd.magFilter = 9729, Jd.minFilter = 9984;
            break;
          case xd.d.LINEAR_NEAREST_MIPLINEAR:
            Jd.magFilter = 9729, Jd.minFilter = 9986;
            break;
          case xd.d.NEAREST_NEAREST_MIPLINEAR:
            Jd.magFilter = 9728, Jd.minFilter = 9986;
            break;
          case xd.d.LINEAR_LINEAR_MIPLINEAR:
            Jd.magFilter = 9729, Jd.minFilter = 9987;
            break;
          case xd.d.LINEAR_LINEAR_MIPNEAREST:
            Jd.magFilter = 9729, Jd.minFilter = 9985;
            break;
          case xd.d.NEAREST_NEAREST_MIPNEAREST:
            Jd.magFilter = 9728, Jd.minFilter = 9984
        }
        return Jd
      }
      _getGLTFTextureWrapMode(dd) {
        switch (dd) {
          case xd.d.WRAP_ADDRESSMODE:
            return 10497;
          case xd.d.CLAMP_ADDRESSMODE:
            return 33071;
          case xd.d.MIRROR_ADDRESSMODE:
            return 33648;
          default:
            return Nd.Tools.Error(`Unsupported Texture Wrap Mode ${dd}!`), 10497
        }
      }
      async _convertSpecGlossFactorsToMetallicRoughnessAsync(dd, Jd, kd) {
        const pd = {
            diffuseColor: dd._albedoColor,
            specularColor: dd._reflectivityColor,
            glossiness: dd._microSurface
          },
          Nd = dd._albedoTexture,
          Wd = dd._reflectivityTexture,
          Pd = dd._useMicroSurfaceFromReflectivityMapAlpha;
        if (Wd && !Pd) return await Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported");
        if ((Nd || Wd) && kd) {
          this._exporter._materialNeedsUVsSet.add(dd);
          const kd = this._exportTextureSampler(Nd || Wd),
            Pd = await this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(Nd, Wd, pd),
            Zd = this._exporter._textures;
          if (Pd.baseColorTextureData) {
            const dd = await this._exportImageAsync(`baseColor${Zd.length}`, Pd.baseColorTextureData);
            Jd.baseColorTexture = this._exportTextureInfo(dd, kd, Nd?.coordinatesIndex)
          }
          if (Pd.metallicRoughnessTextureData) {
            const dd = await this._exportImageAsync(`metallicRoughness${Zd.length}`, Pd.metallicRoughnessTextureData);
            Jd.metallicRoughnessTexture = this._exportTextureInfo(dd, kd, Wd?.coordinatesIndex)
          }
          return Pd
        }
        return this._convertSpecularGlossinessToMetallicRoughness(pd)
      }
      async exportPBRMaterialAsync(dd, Jd) {
        const kd = {},
          pd = {
            name: dd.name
          },
          Nd = dd.isMetallicWorkflow();
        if (Nd) {
          const Jd = dd._albedoColor,
            pd = dd.alpha;
          Jd && (kd.baseColorFactor = [Jd.r, Jd.g, Jd.b, pd])
        }
        const Wd = Nd ? await this._convertMetalRoughFactorsToMetallicRoughnessAsync(dd._albedoColor, dd._metallic, dd._roughness, dd._albedoTexture, dd._metallicTexture, dd._metallicTexture, dd, kd, Jd) : await this._convertSpecGlossFactorsToMetallicRoughnessAsync(dd, kd, Jd);
        await this._setMetallicRoughnessPbrMaterialAsync(Wd, dd, pd, kd, Jd), await this._finishMaterialAsync(pd, dd);
        const Pd = this._exporter._materials;
        return Pd.push(pd), Pd.length - 1
      }
      async _setMetallicRoughnessPbrMaterialAsync(dd, Jd, kd, pd, Wd) {
        if (Fk(kd, Jd), dd.baseColor.equalsWithEpsilon(Bk, vk) && Gd.WithinEpsilon(Jd.alpha, 1, vk) || (pd.baseColorFactor = [dd.baseColor.r, dd.baseColor.g, dd.baseColor.b, Jd.alpha]), null != dd.metallic && 1 !== dd.metallic && (pd.metallicFactor = dd.metallic), null != dd.roughness && 1 !== dd.roughness && (pd.roughnessFactor = dd.roughness), null == Jd.backFaceCulling || Jd.backFaceCulling || (Jd._twoSidedLighting || Nd.Tools.Warn(Jd.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), kd.doubleSided = !0), Wd) {
          const dd = [],
            Nd = Jd instanceof BJ ? Jd._bumpTexture : Jd.geometryNormalTexture;
          Nd && dd.push(this.exportTextureAsync(Nd).then((dd => {
            dd && (kd.normalTexture = dd, 1 !== Nd.level && (kd.normalTexture.scale = Nd.level))
          })));
          const Wd = Jd instanceof BJ ? Jd._ambientTexture : Jd.ambientOcclusionTexture;
          Wd && dd.push(new Promise((async dd => {
            if (Jd instanceof AJ && pd.metallicRoughnessTexture) {
              const Jd = this._exportTextureSampler(Wd),
                kd = this._exporter._textures[pd.metallicRoughnessTexture.index].source,
                Nd = this._exportTextureInfo(kd, Jd, Wd.coordinatesIndex);
              return this._textureMap.set(Wd.uniqueId, Nd), this._exporter._extensionsPostExportTextures("exporter", Nd, Wd), dd(Nd)
            }
            return dd(await this.exportTextureAsync(Wd))
          })).then((async dd => {
            if (dd) {
              const pd = {
                index: dd.index,
                texCoord: dd.texCoord,
                extensions: dd.extensions
              };
              kd.occlusionTexture = pd, pd.strength = Jd instanceof BJ ? Jd._ambientTextureStrength : Jd.ambientOcclusionTexture.level
            }
          })));
          const Pd = Jd instanceof BJ ? Jd._emissiveTexture : Jd.emissionColorTexture;
          Pd && dd.push(this.exportTextureAsync(Pd).then((dd => {
            dd && (kd.emissiveTexture = dd)
          }))), dd.length > 0 && (this._exporter._materialNeedsUVsSet.add(Jd), await Promise.all(dd))
        }
        const Pd = Jd instanceof BJ ? Jd._emissiveColor : Jd.emissionColor;
        Pd.equalsWithEpsilon(sk, vk) || (kd.emissiveFactor = Pd.spd()), kd.pbrMetallicRoughness = pd
      }
      async exportOpenPBRMaterialAsync(dd, Jd) {
        const kd = {},
          pd = {
            name: dd.name
          },
          Nd = dd.baseColor,
          Wd = dd.geometryOpacity;
        Nd && (kd.baseColorFactor = [Nd.r, Nd.g, Nd.b, Wd]);
        const Pd = await this._convertMetalRoughFactorsToMetallicRoughnessAsync(dd.baseColor, dd.baseMetalness, dd.specularRoughness, dd.baseColorTexture, dd.baseMetalnessTexture, dd.specularRoughnessTexture, dd, kd, Jd);
        await this._setMetallicRoughnessPbrMaterialAsync(Pd, dd, pd, kd, Jd), await this._finishMaterialAsync(pd, dd);
        const Zd = this._exporter._materials;
        return Zd.push(pd), Zd.length - 1
      }
      async exportTextureAsync(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          kd = this._textureMap.get(Jd ?? dd.uniqueId);
        if (kd) return kd;
        const pd = this._exportTextureSampler(dd),
          Nd = await this._exportTextureImageAsync(dd);
        return kd = this._exportTextureInfo(Nd, pd, dd.coordinatesIndex), this._textureMap.set(Jd ?? dd.uniqueId, kd), this._exporter._extensionsPostExportTextures("exporter", kd, dd), kd
      }
      async _exportTextureImageAsync(dd) {
        const Jd = dd.mimeType ?? "none",
          kd = this._internalTextureToImage,
          pd = dd.getInternalTexture().uniqueId;
        kd[pd] = kd[pd] || {};
        let Wd = kd[pd][Jd];
        return void 0 === Wd && (Wd = (async () => {
          const kd = await Gk(dd);
          if (kd && ik(kd.mimeType) && ("none" === Jd || kd.mimeType === Jd)) return await this._exportImageAsync(dd.name, new Blob([kd.data], {
            type: kd.mimeType
          }));
          let pd = "image/png";
          "none" !== Jd && (ik(Jd) ? pd = Jd : (pd = "image/png", Nd.Tools.Warn(`Unsupported media type: ${Jd}. Exporting texture as PNG.`)));
          const Wd = dd.getSize(),
            Pd = await (0, vd.f)(dd),
            Zd = await (0, sd.EncodeImageAsync)(Pd, Wd.width, Wd.height, pd);
          return await this._exportImageAsync(dd.name, Zd)
        })(), kd[pd][Jd] = Wd), await Wd
      }
      async _exportImageAsync(dd, Jd) {
        const kd = this._exporter._images;
        let pd;
        if (this._exporter._shouldUseGlb) {
          pd = {
            name: dd,
            mimeType: Jd.type,
            bufferView: void 0
          };
          const kd = await Jd.arrayBuffer(),
            Nd = this._exporter._bufferManager.createBufferView(new Uint8Array(kd));
          this._exporter._bufferManager.setBufferView(pd, Nd)
        } else {
          const Wd = dd.replace(/\.\/|\/|\.\\|\\/g, "_"),
            Pd = function(dd) {
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
            }(Jd.type);
          let Zd = Wd + Pd;
          kd.some((dd => dd.uri === Zd)) && (Zd = `${Wd}_${Nd.Tools.RandomId()}${Pd}`), pd = {
            name: dd,
            uri: Zd
          }, this._exporter._imageData[Zd] = Jd
        }
        return kd.push(pd), kd.length - 1
      }
      _exportTextureInfo(dd, Jd, kd) {
        const pd = this._exporter._textures;
        let Nd = pd.findIndex((kd => kd.sampler == Jd && kd.source === dd)); - 1 === Nd && (Nd = pd.length, pd.push({
          source: dd,
          sampler: Jd
        }));
        const Wd = {
          index: Nd
        };
        return kd && (Wd.texCoord = kd), Wd
      }
      _exportTextureSampler(dd) {
        const Jd = this._getTextureSampler(dd),
          kd = this._exporter._samplers,
          pd = kd.findIndex((dd => dd.minFilter === Jd.minFilter && dd.magFilter === Jd.magFilter && dd.wrapS === Jd.wrapS && dd.wrapT === Jd.wrapT));
        return -1 !== pd ? pd : (kd.push(Jd), kd.length - 1)
      }
    }
    var Sk = kd(40032),
      jk = kd(40195);
    (0, jk.b)();
    var Xk = kd(37259);
    const fk = pd.Matrix.Compose(new pd.IL(-1, 1, 1), pd.Quaternion.Identity(), pd.IL.Zero());

    function nk(dd, Jd) {
      if (!(dd instanceof od.e)) return !1;
      if (Jd) {
        if (!dd.getWorldMatrix().equalsWithEpsilon(pd.Matrix.IdentityReadOnly, Xk.e)) return !1
      } else {
        if (!dd.getWorldMatrix().multiplyToRef(fk, pd.TmpVectors.Matrix[0]).equalsWithEpsilon(pd.Matrix.IdentityReadOnly, Xk.e)) return !1
      }
      return !(dd instanceof ld.b && dd.geometry)
    }
    const Uk = pd.IL.ZeroReadOnly,
      yk = pd.Quaternion.Identity(),
      Dk = pd.IL.OneReadOnly,
      Tk = new pd.IL(-1, 1, 1);

    function Ek(dd, Jd) {
      const {
        byteOffset: kd,
        byteStride: pd,
        type: Nd,
        normalized: Wd
      } = dd, Pd = dd.getSize(), Zd = Jd.reduce(((dd, Jd) => Jd.getTotalVertices() > dd ? Jd.getTotalVertices() : dd), -Number.MAX_VALUE);
      return {
        byteOffset: kd,
        byteStride: pd,
        componentCount: Pd,
        type: Nd,
        count: Zd * Pd,
        normalized: Wd,
        totalVertices: Zd,
        kind: dd.getKind()
      }
    }

    function ck(dd) {
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

    function hk(dd) {
      switch (dd) {
        case Kd.f.PositionKind:
        case Kd.f.NormalKind:
        case Kd.f.TangentKind:
        case Kd.f.ColorKind:
        case Kd.f.MatricesIndicesKind:
        case Kd.f.MatricesIndicesExtraKind:
        case Kd.f.MatricesWeightsKind:
        case Kd.f.MatricesWeightsExtraKind:
        case Kd.f.UVKind:
        case Kd.f.UV2Kind:
        case Kd.f.UV3Kind:
        case Kd.f.UV4Kind:
        case Kd.f.UV5Kind:
        case Kd.f.UV6Kind:
          return !0
      }
      return !1
    }

    function rk(dd) {
      const Jd = Math.sqrt(dd.x * dd.x + dd.y * dd.y + dd.z * dd.z);
      Jd > 0 && (dd.x /= Jd, dd.y /= Jd, dd.z /= Jd)
    }

    function uk(dd) {
      return dd.x *= -1, dd
    }

    function tk(dd) {
      if (dd.x * dd.x + dd.y * dd.y > .5) {
        const Jd = Math.abs(dd.x),
          kd = Math.abs(dd.y);
        if (Jd > kd) {
          const kd = Math.sign(dd.x);
          dd.x = Jd, dd.y *= -kd, dd.z *= -kd, dd.w *= kd
        } else {
          const Jd = Math.sign(dd.y);
          dd.x *= -Jd, dd.y = kd, dd.z *= Jd, dd.w *= -Jd
        }
      } else {
        const Jd = Math.abs(dd.z),
          kd = Math.abs(dd.w);
        if (Jd > kd) {
          const kd = Math.sign(dd.z);
          dd.x *= -kd, dd.y *= kd, dd.z = Jd, dd.w *= -kd
        } else {
          const Jd = Math.sign(dd.w);
          dd.x *= Jd, dd.y *= -Jd, dd.z *= -Jd, dd.w = kd
        }
      }
      return dd
    }

    function Vk(dd) {
      dd.kdd(-dd.z, dd.w, dd.x, -dd.y)
    }

    function zk(dd, Jd) {
      const kd = pd.IL.FromArrayToRef(Jd.translation || [0, 0, 0], 0, pd.TmpVectors.IL[0]),
        Nd = pd.Quaternion.FromArrayToRef(Jd.rotation || [0, 0, 0, 1], 0, pd.TmpVectors.Quaternion[0]),
        Wd = pd.Matrix.ComposeToRef(Dk, Nd, kd, pd.TmpVectors.Matrix[0]),
        Pd = pd.IL.FromArrayToRef(dd.translation || [0, 0, 0], 0, pd.TmpVectors.IL[2]),
        Zd = pd.Quaternion.FromArrayToRef(dd.rotation || [0, 0, 0, 1], 0, pd.TmpVectors.Quaternion[1]),
        gd = pd.Matrix.ComposeToRef(Dk, Zd, Pd, pd.TmpVectors.Matrix[1]);
      Wd.multiplyToRef(gd, gd), gd.decompose(void 0, Nd, kd), kd.equalsWithEpsilon(Uk, Xk.e) ? delete Jd.translation : Jd.translation = kd.spd(), Nd.equalsWithEpsilon(yk, Xk.e) ? delete Jd.rotation : Jd.rotation = Nd.spd(), Jd.scale && delete Jd.scale
    }

    function Hk(dd, Jd) {
      if (!(Jd instanceof od.e)) return !1;
      if (!(1 === Jd.getChildren().length && 0 === dd.getChildren().length && dd.parent === Jd)) return !1;
      const kd = dd.Wm(),
        pd = dd instanceof jk.d && !kd.useRightHandedSystem ? Tk : Dk;
      return !!Jd.fp.equalsWithEpsilon(pd, Xk.e) || (Fd.c.Warn(`Cannot collapse node ${dd.name} into parent node ${Jd.name} with modified scaling.`), !1)
    }

    function wk(dd) {
      if (dd instanceof Array) {
        const Jd = new Float32Array(dd);
        return new Uint8Array(Jd.buffer, Jd.byteOffset, Jd.byteLength)
      }
      return ArrayBuffer.isView(dd) ? new Uint8Array(dd.buffer, dd.byteOffset, dd.byteLength) : new Uint8Array(dd)
    }

    function Ak(dd, Jd) {
      for (const [kd, pd] of Object.entries(dd)) {
        const Nd = Jd[kd];
        (Array.isArray(pd) && Array.isArray(Nd) && dp(pd, Nd) || pd === Nd) && delete dd[kd]
      }
      return dd
    }

    function dp(dd, Jd) {
      return dd.length === Jd.length && dd.every(((dd, kd) => dd === Jd[kd]))
    }
    const Jp = new Map([
      [Int8Array, (dd, Jd, kd) => dd.setInt8(Jd, kd)],
      [Uint8Array, (dd, Jd, kd) => dd.setUint8(Jd, kd)],
      [Uint8ClampedArray, (dd, Jd, kd) => dd.setUint8(Jd, kd)],
      [Int16Array, (dd, Jd, kd) => dd.setInt16(Jd, kd, !0)],
      [Uint16Array, (dd, Jd, kd) => dd.setUint16(Jd, kd, !0)],
      [Int32Array, (dd, Jd, kd) => dd.setInt32(Jd, kd, !0)],
      [Uint32Array, (dd, Jd, kd) => dd.setUint32(Jd, kd, !0)],
      [Float32Array, (dd, Jd, kd) => dd.setFloat32(Jd, kd, !0)],
      [Float64Array, (dd, Jd, kd) => dd.setFloat64(Jd, kd, !0)]
    ]);
    class kp {
      writeTypedArray(dd) {
        this._checkGrowBuffer(dd.byteLength);
        const Jd = Jp.get(dd.constructor);
        for (let kd = 0; kd < dd.length; kd++) Jd(this._dataView, this._byteOffset, dd[kd]), this._byteOffset += dd.BYTES_PER_ELEMENT
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
        const Jd = this.byteOffset + dd;
        if (Jd > this._data.byteLength) {
          const dd = new Uint8Array(2 * Jd);
          dd.set(this._data), this._data = dd, this._dataView = new DataView(this._data.buffer)
        }
      }
    }

    function pp(dd) {
      return dd % 4 === 0 ? 4 : dd % 2 === 0 ? 2 : 1
    }
    class Np {
      constructor() {
        this._bufferViewToData = new Map, this._bufferViewToProperties = new Map, this._accessorToBufferView = new Map
      }
      generateBinary(dd) {
        let Jd = 0;
        this._bufferViewToData.forEach((dd => {
          Jd += dd.byteLength
        }));
        const kd = new kp(Jd),
          pd = Array.from(this._bufferViewToData.keys()).sort(((dd, Jd) => pp(Jd.byteLength) - pp(dd.byteLength)));
        for (const Nd of pd) {
          Nd.byteOffset = kd.byteOffset, dd.push(Nd);
          const Jd = dd.length - 1,
            pd = this.getPropertiesWithBufferView(Nd);
          for (const dd of pd) dd.bufferView = Jd;
          kd.writeTypedArray(this._bufferViewToData.get(Nd)), this._bufferViewToData.delete(Nd)
        }
        return kd.getOutputData()
      }
      createBufferView(dd, Jd) {
        const kd = {
          buffer: 0,
          byteOffset: void 0,
          byteLength: dd.byteLength,
          byteStride: Jd
        };
        return this._bufferViewToData.set(kd, dd), kd
      }
      createAccessor(dd, Jd, kd, pd, Nd, Wd, Pd) {
        this._verifyBufferView(dd);
        const Zd = {
          bufferView: void 0,
          componentType: kd,
          count: pd,
          type: Jd,
          min: Wd?.min,
          max: Wd?.max,
          normalized: Pd,
          byteOffset: Nd
        };
        return this.setBufferView(Zd, dd), this._accessorToBufferView.set(Zd, dd), Zd
      }
      setBufferView(dd, Jd) {
        this._verifyBufferView(Jd);
        this.getPropertiesWithBufferView(Jd).push(dd)
      }
      removeBufferView(dd) {
        const Jd = this.getPropertiesWithBufferView(dd);
        for (const kd of Jd) void 0 !== kd.bufferView && delete kd.bufferView;
        this._bufferViewToData.delete(dd), this._bufferViewToProperties.delete(dd), this._accessorToBufferView.forEach(((Jd, kd) => {
          Jd === dd && (void 0 !== kd.byteOffset && delete kd.byteOffset, this._accessorToBufferView.delete(kd))
        }))
      }
      getBufferView(dd) {
        const Jd = this._accessorToBufferView.get(dd);
        return this._verifyBufferView(Jd), Jd
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
    var Wp = kd(40199);
    (0, Wp.g)();
    var Pp = kd(40436);
    (0, Pp.g)();
    var Zp = kd(40251),
      gp = kd(41082);
    (0, gp.e)();
    let Cp = (() => {
      var dd;
      let Jd, kd, pd = [],
        Nd = [],
        Wd = [],
        Pd = [];
      return dd = class {
        get influence() {
          return this._influence
        }
        set influence(dd) {
          if (this._influence === dd) return;
          const Jd = this._influence;
          this._influence = dd, this.onInfluenceChanged.hasObservers() && this.onInfluenceChanged.notifyObservers(0 === Jd || 0 === dd)
        }
        get animationPropertiesOverride() {
          return !this._animationPropertiesOverride && this._scene ? this._scene.animationPropertiesOverride : this._animationPropertiesOverride
        }
        set animationPropertiesOverride(dd) {
          this._animationPropertiesOverride = dd
        }
        constructor(dd) {
          let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            Zd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = dd, this.animations = [], this._positions = null, this._normals = null, this._tangents = null, this._uvs = null, this._uv2s = null, this._colors = null, this._uniqueId = 0, this.onInfluenceChanged = new Jk.e, this._onDataLayoutChanged = new Jk.e, this.id = (0, ad.i)(this, pd, void 0), this.morphTargetManager = ((0, ad.i)(this, Nd), (0, ad.i)(this, Wd, null)), this._animationPropertiesOverride = ((0, ad.i)(this, Pd), null), this.id = dd, this.morphTargetManager = Zd, this._scene = kd || Od.d.LastCreatedScene, this.influence = Jd, this._scene && (this._uniqueId = this._scene.getUniqueId())
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
        VPd(dd) {
          const Jd = this.hasPositions;
          this._positions = dd, Jd !== this.hasPositions && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getPositions() {
          return this._positions
        }
        setNormals(dd) {
          const Jd = this.hasNormals;
          this._normals = dd, Jd !== this.hasNormals && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getNormals() {
          return this._normals
        }
        setTangents(dd) {
          const Jd = this.hasTangents;
          this._tangents = dd, Jd !== this.hasTangents && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getTangents() {
          return this._tangents
        }
        setUVs(dd) {
          const Jd = this.hasUVs;
          this._uvs = dd, Jd !== this.hasUVs && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUVs() {
          return this._uvs
        }
        setUV2s(dd) {
          const Jd = this.hasUV2s;
          this._uv2s = dd, Jd !== this.hasUV2s && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUV2s() {
          return this._uv2s
        }
        setColors(dd) {
          const Jd = this.hasColors;
          this._colors = dd, Jd !== this.hasColors && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getColors() {
          return this._colors
        }
        clone() {
          const Jd = sJ.c.Clone((() => new dd(this.name, this.influence, this._scene, this.morphTargetManager)), this);
          return Jd._positions = this._positions, Jd._normals = this._normals, Jd._tangents = this._tangents, Jd._uvs = this._uvs, Jd._uv2s = this._uv2s, Jd._colors = this._colors, Jd
        }
        serialize() {
          const dd = {};
          return dd.name = this.name, dd.influence = this.influence, null != this.id && (dd.id = this.id), dd.uniqueId = this.uniqueId, dd.positions = Array.prototype.slice.call(this.getPositions()), this.hasNormals && (dd.normals = Array.prototype.slice.call(this.getNormals())), this.hasTangents && (dd.tangents = Array.prototype.slice.call(this.getTangents())), this.hasUVs && (dd.uvs = Array.prototype.slice.call(this.getUVs())), this.hasUV2s && (dd.uv2s = Array.prototype.slice.call(this.getUV2s())), this.hasColors && (dd.colors = Array.prototype.slice.call(this.getColors())), sJ.c.AppendSerializedAnimations(this, dd), dd
        }
        getClassName() {
          return "MorphTarget"
        }
        static Parse(Jd, kd) {
          let pd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          const Nd = new dd(Jd.name, Jd.influence, kd, pd);
          if (Nd.VPd(Jd.positions), null != Jd.id && (Nd.id = Jd.id), Jd.normals && Nd.setNormals(Jd.normals), Jd.tangents && Nd.setTangents(Jd.tangents), Jd.uvs && Nd.setUVs(Jd.uvs), Jd.uv2s && Nd.setUV2s(Jd.uv2s), Jd.colors && Nd.setColors(Jd.colors), Jd.animations) {
            for (let dd = 0; dd < Jd.animations.length; dd++) {
              const kd = Jd.animations[dd],
                pd = (0, EJ.e)("BABYLON.Animation");
              pd && Nd.animations.push(pd.Parse(kd))
            }
            Jd.autoAnimate && kd && kd.beginAnimation(Nd, Jd.autoAnimateFrom, Jd.autoAnimateTo, Jd.autoAnimateLoop, Jd.autoAnimateSpeed || 1)
          }
          return Nd
        }
        static FromMesh(Jd, kd, pd) {
          kd || (kd = Jd.name);
          const Nd = new dd(kd, pd, Jd.Wm(), Jd.morphTargetManager);
          return Nd.VPd(Jd.getVerticesData(Dd.j.PositionKind)), Jd.isVerticesDataPresent(Dd.j.NormalKind) && Nd.setNormals(Jd.getVerticesData(Dd.j.NormalKind)), Jd.isVerticesDataPresent(Dd.j.TangentKind) && Nd.setTangents(Jd.getVerticesData(Dd.j.TangentKind)), Jd.isVerticesDataPresent(Dd.j.UVKind) && Nd.setUVs(Jd.getVerticesData(Dd.j.UVKind)), Jd.isVerticesDataPresent(Dd.j.UV2Kind) && Nd.setUV2s(Jd.getVerticesData(Dd.j.UV2Kind)), Jd.isVerticesDataPresent(Dd.j.ColorKind) && Nd.setColors(Jd.getVerticesData(Dd.j.ColorKind)), Nd
        }
      }, (() => {
        const Zd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Jd = [(0, Md.H)()], kd = [(0, Md.H)()], (0, ad.h)(null, null, Jd, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: dd => "id" in dd,
            get: dd => dd.id,
            set: (dd, Jd) => {
              dd.id = Jd
            }
          },
          metadata: Zd
        }, pd, Nd), (0, ad.h)(null, null, kd, {
          kind: "field",
          name: "morphTargetManager",
          static: !1,
          private: !1,
          access: {
            has: dd => "morphTargetManager" in dd,
            get: dd => dd.morphTargetManager,
            set: (dd, Jd) => {
              dd.morphTargetManager = Jd
            }
          },
          metadata: Zd
        }, Wd, Pd), Zd && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Zd
        })
      })(), dd
    })();
    var Kp, op = kd(41140),
      lp = kd(40243);
    ! function(dd) {
      dd[dd.INTANGENT = 0] = "INTANGENT", dd[dd.OUTTANGENT = 1] = "OUTTANGENT"
    }(Kp || (Kp = {}));
    class Qp {
      static _IsTransformable(dd) {
        return dd && (dd instanceof od.e || dd instanceof Wp.e || dd instanceof lp.d)
      }
      static _CreateNodeAnimation(dd, Jd, kd, pd, Wd) {
        if (this._IsTransformable(dd)) {
          const Pd = [],
            Zd = [],
            gd = Jd.getKeys(),
            Cd = Qp._CalculateMinMaxKeyFrames(gd),
            Kd = Qp._DeduceInterpolation(gd, kd, pd),
            od = Kd.interpolationType,
            ld = Kd.shouldBakeAnimation;
          if (ld ? Qp._CreateBakedAnimation(dd, Jd, kd, Cd.min, Cd.max, Jd.framePerSecond, Wd, Pd, Zd, Cd, pd) : "LINEAR" === od || "STEP" === od ? Qp._CreateLinearOrStepAnimation(dd, Jd, kd, Pd, Zd, pd) : "CUBICSPLINE" === od ? Qp._CreateCubicSplineAnimation(dd, Jd, kd, Pd, Zd, pd) : Qp._CreateBakedAnimation(dd, Jd, kd, Cd.min, Cd.max, Jd.framePerSecond, Wd, Pd, Zd, Cd, pd), Pd.length && Zd.length) {
            return {
              inputs: Pd,
              outputs: Zd,
              samplerInterpolation: od,
              inputsMin: ld ? Cd.min : Nd.Tools.FloatRound(Cd.min / Jd.framePerSecond),
              inputsMax: ld ? Cd.max : Nd.Tools.FloatRound(Cd.max / Jd.framePerSecond)
            }
          }
        }
        return null
      }
      static _DeduceAnimationInfo(dd) {
        let Jd = null,
          kd = "VEC3",
          pd = !1;
        const Wd = dd.targetProperty.split(".");
        switch (Wd[0]) {
          case "fp":
            Jd = "scale";
            break;
          case "position":
            Jd = "translation";
            break;
          case "rotation":
            kd = "VEC4", Jd = "rotation";
            break;
          case "rotationQuaternion":
            kd = "VEC4", pd = !0, Jd = "rotation";
            break;
          case "influence":
            kd = "SCALAR", Jd = "weights";
            break;
          default:
            Nd.Tools.Error(`Unsupported animatable property ${Wd[0]}`)
        }
        return Jd ? {
          animationChannelTargetPath: Jd,
          dataAccessorType: kd,
          useQuaternion: pd
        } : (Nd.Tools.Error("animation channel target path and data accessor type could be deduced"), null)
      }
      static _CreateNodeAnimationFromNodeAnimations(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd, Kd) {
        let od;
        if (Qp._IsTransformable(dd) && dd.animations)
          for (const ld of dd.animations) {
            if (Kd && !Kd(ld)) continue;
            const Nd = Qp._DeduceAnimationInfo(ld);
            Nd && (od = {
              name: ld.name,
              samplers: [],
              channels: []
            }, Qp._AddAnimation(`${ld.name}`, ld.hasRunningRuntimeAnimations ? Jd : od, dd, ld, Nd.dataAccessorType, Nd.animationChannelTargetPath, pd, Wd, Pd, Zd, Nd.useQuaternion, gd, Cd), od.samplers.length && od.channels.length && kd.push(od))
          }
      }
      static _CreateMorphTargetAnimationFromMorphTargetAnimations(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd, Kd) {
        let od;
        if (dd instanceof op.d) {
          const Nd = dd.morphTargetManager;
          if (Nd)
            for (let ld = 0; ld < Nd.numTargets; ++ld) {
              const Qd = Nd.getTarget(ld);
              for (const Ld of Qd.animations) {
                if (Kd && !Kd(Ld)) continue;
                const Qd = new gp.c(`${Ld.name}`, "influence", Ld.framePerSecond, Ld.dataType, Ld.Od, Ld.enableBlending),
                  Od = [],
                  ed = Ld.getKeys();
                for (let dd = 0; dd < ed.length; ++dd) {
                  const Jd = ed[dd];
                  for (let dd = 0; dd < Nd.numTargets; ++dd) dd == ld ? Od.push(Jd) : Od.push({
                    frame: Jd.frame,
                    value: 0
                  })
                }
                Qd.setKeys(Od, !0);
                const Rd = Qp._DeduceAnimationInfo(Qd);
                Rd && (od = {
                  name: Qd.name,
                  samplers: [],
                  channels: []
                }, Qp._AddAnimation(Ld.name, Ld.hasRunningRuntimeAnimations ? Jd : od, dd, Qd, Rd.dataAccessorType, Rd.animationChannelTargetPath, pd, Wd, Pd, Zd, Rd.useQuaternion, gd, Cd, Nd.numTargets), od.samplers.length && od.channels.length && kd.push(od))
              }
            }
        }
      }
      static _CreateNodeAndMorphAnimationFromAnimationGroups(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd) {
        let Kd;
        if (dd.animationGroups) {
          const od = dd.animationGroups;
          for (const ld of od) {
            const od = new Map,
              Qd = new Map,
              Ld = new Set,
              Od = ld.to - ld.from;
            Kd = {
              name: ld.name,
              channels: [],
              samplers: []
            };
            for (let Jd = 0; Jd < ld.targetedAnimations.length; ++Jd) {
              const Cd = ld.targetedAnimations[Jd],
                Od = Cd.target,
                ed = Cd.animation;
              if (gd && !gd(ed)) continue;
              const Rd = Zd.has(Od);
              if (this._IsTransformable(Od) || 1 === Od.length && this._IsTransformable(Od[0])) {
                const dd = Qp._DeduceAnimationInfo(Cd.animation);
                if (dd) {
                  const Jd = this._IsTransformable(Od) ? Od : this._IsTransformable(Od[0]) ? Od[0] : null;
                  Jd && Qp._AddAnimation(`${ed.name}`, Kd, Jd, ed, dd.dataAccessorType, dd.animationChannelTargetPath, kd, pd, Nd, Wd, dd.useQuaternion, Pd, Rd)
                }
              } else if (Od instanceof Cp || 1 === Od.length && Od[0] instanceof Cp) {
                if (Qp._DeduceAnimationInfo(Cd.animation)) {
                  const Jd = Od instanceof Cp ? Od : Od[0];
                  if (Jd) {
                    const kd = dd.morphTargetManagers.find((dd => {
                      for (let kd = 0; kd < dd.numTargets; ++kd)
                        if (dd.getTarget(kd) === Jd) return !0;
                      return !1
                    }));
                    if (kd) {
                      const pd = dd.meshes.find((dd => dd.morphTargetManager === kd));
                      pd && (od.has(pd) || od.set(pd, new Map), od.get(pd)?.set(Jd, ed), Ld.add(pd), Qd.set(pd, ed))
                    }
                  }
                }
              }
            }
            Ld.forEach((dd => {
              const Jd = dd.morphTargetManager;
              let Zd = null;
              const gd = [],
                Cd = Qd.get(dd).getKeys(),
                Ld = Cd.length;
              for (let kd = 0; kd < Ld; ++kd)
                for (let pd = 0; pd < Jd.numTargets; ++pd) {
                  const Nd = Jd.getTarget(pd),
                    Wd = od.get(dd);
                  if (Wd) {
                    const Jd = Wd.get(Nd);
                    Jd ? (Zd || (Zd = new gp.c(`${ld.name}_${dd.name}_MorphWeightAnimation`, "influence", Jd.framePerSecond, gp.c.ANIMATIONTYPE_FLOAT, Jd.Od, Jd.enableBlending)), gd.push(Jd.getKeys()[kd])) : gd.push({
                      frame: ld.from + Od / Ld * kd,
                      value: Nd.influence,
                      inTangent: Cd[0].inTangent ? 0 : void 0,
                      outTangent: Cd[0].outTangent ? 0 : void 0
                    })
                  }
                }
              Zd.setKeys(gd, !0);
              const ed = Qp._DeduceAnimationInfo(Zd);
              ed && Qp._AddAnimation(`${ld.name}_${dd.name}_MorphWeightAnimation`, Kd, dd, Zd, ed.dataAccessorType, ed.animationChannelTargetPath, kd, pd, Nd, Wd, ed.useQuaternion, Pd, !1, Jd?.numTargets)
            })), Kd.channels.length && Kd.samplers.length && (Cd?.set(ld, Jd.length), Jd.push(Kd))
          }
        }
      }
      static _AddAnimation(dd, Jd, kd, Nd, Wd, Pd, Zd, gd, Cd, Kd, od, ld, Qd, Ld) {
        const Od = Qp._CreateNodeAnimation(kd, Nd, Pd, od, ld);
        let ed, Rd, Id, Gd, vd, xd;
        if (Od) {
          if (Ld) {
            let dd, Jd = 0;
            const kd = [];
            for (; Od.inputs.length > 0;) dd = Od.inputs.shift(), Jd % Ld == 0 && kd.push(dd), Jd++;
            Od.inputs = kd
          }
          const dd = Zd.get(kd),
            Nd = new Float32Array(Od.inputs);
          ed = gd.createBufferView(Nd), Rd = gd.createAccessor(ed, "SCALAR", 5126, Od.inputs.length, void 0, {
            min: [Od.inputsMin],
            max: [Od.inputsMax]
          }), Kd.push(Rd), Id = Kd.length - 1;
          const Cd = new pd.Quaternion,
            od = new pd.IL,
            ld = new pd.IL,
            qd = kd instanceof Wp.e,
            Bd = ck(Wd),
            sd = new Float32Array(Od.outputs.length * Bd);
          Od.outputs.forEach((function(dd, Jd) {
            let kd = dd;
            switch (Pd) {
              case "translation":
                Qd && (pd.IL.FromArrayToRef(dd, 0, ld), uk(ld), ld.toArray(kd));
                break;
              case "rotation":
                4 === dd.length ? pd.Quaternion.FromArrayToRef(dd, 0, Cd) : (kd = new Array(4), pd.IL.FromArrayToRef(dd, 0, od), pd.Quaternion.FromEulerVectorToRef(od, Cd)), Qd && (tk(Cd), qd && Vk(Cd)), Cd.toArray(kd)
            }
            sd.set(kd, Jd * Bd)
          })), ed = gd.createBufferView(sd), Rd = gd.createAccessor(ed, Wd, 5126, Od.outputs.length), Kd.push(Rd), Gd = Kd.length - 1, vd = {
            interpolation: Od.samplerInterpolation,
            input: Id,
            output: Gd
          }, Jd.samplers.push(vd), xd = {
            sampler: Jd.samplers.length - 1,
            target: {
              node: dd,
              path: Pd
            }
          }, Jd.channels.push(xd)
        }
      }
      static _CreateBakedAnimation(dd, Jd, kd, Wd, Pd, Zd, gd, Cd, Kd, od, ld) {
        let Qd;
        const Ld = pd.Quaternion.Identity();
        let Od, ed, Rd, Id, Gd, vd = null,
          xd = null;
        od.min = Nd.Tools.FloatRound(Wd / Zd);
        const qd = Jd.getKeys();
        for (let pd = 0, Bd = qd.length; pd < Bd; ++pd) {
          if (ed = qd[pd], pd + 1 < Bd)
            if (Rd = qd[pd + 1], ed.value.equals && ed.value.equals(Rd.value) || ed.value === Rd.value) {
              if (0 !== pd) continue;
              Gd = ed.frame
            } else Gd = Rd.frame;
          else {
            if (Id = qd[pd - 1], ed.value.equals && ed.value.equals(Id.value) || ed.value === Id.value) continue;
            Gd = Pd
          }
          if (Gd)
            for (let pd = ed.frame; pd <= Gd; pd += gd) {
              if (Od = Nd.Tools.FloatRound(pd / Zd), Od === vd) continue;
              vd = Od, xd = Od;
              const Wd = {
                key: 0,
                repeatCount: 0,
                Od: Jd.Od
              };
              Qd = Jd._interpolate(pd, Wd), Qp._SetInterpolatedValue(dd, Qd, Od, Jd, kd, Ld, Cd, Kd, ld)
            }
        }
        xd && (od.max = xd)
      }
      static _ConvertFactorToVector3OrQuaternion(dd, Jd, kd, Wd, Pd) {
        const Zd = Qp._GetBasePositionRotationOrScale(Jd, Wd, Pd),
          gd = kd.targetProperty.split("."),
          Cd = gd ? gd[1] : "",
          Kd = Pd ? pd.Quaternion.FromArray(Zd).normalize() : pd.IL.FromArray(Zd);
        switch (Cd) {
          case "x":
          case "y":
          case "z":
            Kd[Cd] = dd;
            break;
          case "w":
            Kd.w = dd;
            break;
          default:
            Nd.Tools.Error(`glTFAnimation: Unsupported component name "${Cd}"!`)
        }
        return Kd
      }
      static _SetInterpolatedValue(dd, Jd, kd, Nd, Wd, Pd, Zd, gd, Cd) {
        let Kd;
        Zd.push(kd), "weights" !== Wd ? (Nd.dataType === gp.c.ANIMATIONTYPE_FLOAT && (Jd = this._ConvertFactorToVector3OrQuaternion(Jd, dd, Nd, Wd, Cd)), "rotation" === Wd ? (Cd ? Pd = Jd : (Kd = Jd, pd.Quaternion.RotationYawPitchRollToRef(Kd.y, Kd.x, Kd.z, Pd)), gd.push(Pd.spd())) : (Kd = Jd, gd.push(Kd.spd()))) : gd.push([Jd])
      }
      static _CreateLinearOrStepAnimation(dd, Jd, kd, pd, Nd, Wd) {
        for (const Pd of Jd.getKeys()) pd.push(Pd.frame / Jd.framePerSecond), Qp._AddKeyframeValue(Pd, Jd, Nd, kd, dd, Wd)
      }
      static _CreateCubicSplineAnimation(dd, Jd, kd, pd, Nd, Wd) {
        Jd.getKeys().forEach((function(Pd) {
          pd.push(Pd.frame / Jd.framePerSecond), Qp._AddSplineTangent(Kp.INTANGENT, Nd, kd, "CUBICSPLINE", Pd, Wd), Qp._AddKeyframeValue(Pd, Jd, Nd, kd, dd, Wd), Qp._AddSplineTangent(Kp.OUTTANGENT, Nd, kd, "CUBICSPLINE", Pd, Wd)
        }))
      }
      static _GetBasePositionRotationOrScale(dd, Jd, kd) {
        let Nd;
        if ("rotation" === Jd)
          if (kd) {
            Nd = (dd.rotationQuaternion ?? pd.Quaternion.Identity()).spd()
          } else {
            Nd = (dd.rotation ?? pd.IL.Zero()).spd()
          }
        else if ("translation" === Jd) {
          Nd = (dd.position ?? pd.IL.Zero()).spd()
        } else {
          Nd = (dd.fp ?? pd.IL.One()).spd()
        }
        return Nd
      }
      static _AddKeyframeValue(dd, Jd, kd, Wd, Pd, Zd) {
        let gd;
        const Cd = Jd.dataType;
        if (Cd === gp.c.ANIMATIONTYPE_VECTOR3) {
          let Jd = dd.value.spd();
          if ("rotation" === Wd) {
            const dd = pd.IL.FromArray(Jd);
            Jd = pd.Quaternion.RotationYawPitchRoll(dd.y, dd.x, dd.z).spd()
          }
          kd.push(Jd)
        } else if (Cd === gp.c.ANIMATIONTYPE_FLOAT) {
          if ("weights" === Wd) kd.push([dd.value]);
          else if (gd = this._ConvertFactorToVector3OrQuaternion(dd.value, Pd, Jd, Wd, Zd), gd) {
            if ("rotation" === Wd) {
              const dd = Zd ? gd : pd.Quaternion.RotationYawPitchRoll(gd.y, gd.x, gd.z).normalize();
              kd.push(dd.spd())
            }
            kd.push(gd.spd())
          }
        } else Cd === gp.c.ANIMATIONTYPE_QUATERNION ? kd.push(dd.value.normalize().spd()) : Nd.Tools.Error("glTFAnimation: Unsupported key frame values for animation!")
      }
      static _DeduceInterpolation(dd, Jd, kd) {
        let pd, Nd, Wd = !1;
        if ("rotation" === Jd && !kd) return {
          interpolationType: "LINEAR",
          shouldBakeAnimation: !0
        };
        for (let Pd = 0, Zd = dd.length; Pd < Zd; ++Pd)
          if (Nd = dd[Pd], Nd.inTangent || Nd.outTangent)
            if (pd) {
              if ("CUBICSPLINE" !== pd) {
                pd = "LINEAR", Wd = !0;
                break
              }
            } else pd = "CUBICSPLINE";
        else if (pd) {
          if ("CUBICSPLINE" === pd || Nd.interpolation && 1 === Nd.interpolation && "STEP" !== pd) {
            pd = "LINEAR", Wd = !0;
            break
          }
        } else pd = Nd.interpolation && 1 === Nd.interpolation ? "STEP" : "LINEAR";
        return pd || (pd = "LINEAR"), {
          interpolationType: pd,
          shouldBakeAnimation: Wd
        }
      }
      static _AddSplineTangent(dd, Jd, kd, Nd, Wd, Pd) {
        let Zd;
        const gd = dd === Kp.INTANGENT ? Wd.inTangent : Wd.outTangent;
        if ("CUBICSPLINE" === Nd) {
          if ("rotation" === kd)
            if (gd)
              if (Pd) Zd = gd.spd();
              else {
                const dd = gd;
                Zd = pd.Quaternion.RotationYawPitchRoll(dd.y, dd.x, dd.z).spd()
              }
          else Zd = [0, 0, 0, 0];
          else Zd = "weights" === kd ? gd ? [gd] : [0] : gd ? gd.spd() : [0, 0, 0];
          Jd.push(Zd)
        }
      }
      static _CalculateMinMaxKeyFrames(dd) {
        let Jd = 1 / 0,
          kd = -1 / 0;
        return dd.forEach((function(dd) {
          Jd = Math.min(Jd, dd.frame), kd = Math.max(kd, dd.frame)
        })), {
          min: Jd,
          max: kd
        }
      }
    }

    function Lp(dd, Jd, kd, Wd, Pd, Zd) {
      const gd = {
          attributes: {},
          influence: dd.influence,
          name: dd.name
        },
        Cd = Jd.geometry;
      if (!Cd) return Nd.Tools.Warn("Attempted to export morph target data from a mesh without geometry. This should not happen."), gd;
      const od = Zd ? -1 : 1,
        ld = pd.IL.Zero();
      let Qd, Ld;
      if (dd.hasPositions) {
        const Wd = dd.getPositions(),
          Zd = Cd.getVerticesData(Kd.f.PositionKind);
        if (Zd) {
          const dd = new Float32Array(Zd.length),
            Jd = [1 / 0, 1 / 0, 1 / 0],
            Nd = [-1 / 0, -1 / 0, -1 / 0];
          Ld = Zd.length / 3, Qd = 0;
          for (let kd = Qd; kd < Ld; ++kd) {
            const Pd = pd.IL.FromArray(Zd, 3 * kd);
            pd.IL.FromArray(Wd, 3 * kd).subtractToRef(Pd, ld), ld.x *= od, Jd[0] = Math.min(Jd[0], ld.x), Nd[0] = Math.max(Nd[0], ld.x), Jd[1] = Math.min(Jd[1], ld.y), Nd[1] = Math.max(Nd[1], ld.y), Jd[2] = Math.min(Jd[2], ld.z), Nd[2] = Math.max(Nd[2], ld.z), dd[3 * kd] = ld.x, dd[3 * kd + 1] = ld.y, dd[3 * kd + 2] = ld.z
          }
          const Cd = kd.createBufferView(dd, 12),
            Kd = kd.createAccessor(Cd, "VEC3", 5126, Wd.length / 3, 0, {
              min: Jd,
              max: Nd
            });
          Pd.push(Kd), gd.attributes.POSITION = Pd.length - 1
        } else Nd.Tools.Warn(`Morph target positions for mesh ${Jd.name} were not exported. Mesh does not have position vertex data`)
      }
      if (dd.hasNormals) {
        const Wd = dd.getNormals(),
          Zd = Cd.getVerticesData(Kd.f.NormalKind);
        if (Zd) {
          const dd = new Float32Array(Zd.length);
          Ld = Zd.length / 3, Qd = 0;
          for (let kd = Qd; kd < Ld; ++kd) {
            const Jd = pd.IL.FromArray(Zd, 3 * kd).normalize();
            pd.IL.FromArray(Wd, 3 * kd).normalize().subtractToRef(Jd, ld), dd[3 * kd] = ld.x * od, dd[3 * kd + 1] = ld.y, dd[3 * kd + 2] = ld.z
          }
          const Jd = kd.createBufferView(dd, 12),
            Nd = kd.createAccessor(Jd, "VEC3", 5126, Wd.length / 3, 0);
          Pd.push(Nd), gd.attributes.NORMAL = Pd.length - 1
        } else Nd.Tools.Warn(`Morph target normals for mesh ${Jd.name} were not exported. Mesh does not have normals vertex data`)
      }
      if (dd.hasTangents) {
        const Wd = dd.getTangents(),
          Zd = Cd.getVerticesData(Kd.f.TangentKind);
        if (Zd) {
          Ld = Zd.length / 4;
          const dd = new Float32Array(3 * Ld);
          Qd = 0;
          for (let kd = Qd; kd < Ld; ++kd) {
            const Jd = pd.IL.FromArray(Zd, 4 * kd);
            rk(Jd);
            const Nd = pd.IL.FromArray(Wd, 3 * kd);
            rk(Nd), Nd.subtractToRef(Jd, ld), dd[3 * kd] = ld.x * od, dd[3 * kd + 1] = ld.y, dd[3 * kd + 2] = ld.z
          }
          const Jd = kd.createBufferView(dd, 12),
            Nd = kd.createAccessor(Jd, "VEC3", 5126, Ld, 0);
          Pd.push(Nd), gd.attributes.TANGENT = Pd.length - 1
        } else Nd.Tools.Warn(`Morph target tangents for mesh ${Jd.name} were not exported. Mesh does not have tangents vertex data`)
      }
      if (dd.hasColors) {
        const Wd = dd.getColors(),
          Zd = Cd.getVerticesData(Kd.f.ColorKind),
          od = Cd.getVertexBuffer(Kd.f.ColorKind);
        if (Zd && od) {
          const dd = od.getSize();
          Ld = Zd.length / dd;
          const Jd = new Float32Array(Ld * dd);
          Qd = 0;
          for (let kd = Qd; kd < Ld; ++kd)
            if (3 === dd) {
              const Nd = pd.IL.FromArray(Zd, kd * dd);
              pd.IL.FromArray(Wd, kd * dd).subtractToRef(Nd, ld), Jd[3 * kd] = ld.x, Jd[3 * kd + 1] = ld.y, Jd[3 * kd + 2] = ld.z
            } else if (4 === dd) {
            const Nd = new pd.Vector4,
              Pd = pd.Vector4.FromArray(Zd, kd * dd);
            pd.Vector4.FromArray(Wd, kd * dd).subtractToRef(Pd, Nd), Jd[4 * kd] = Nd.x, Jd[4 * kd + 1] = Nd.y, Jd[4 * kd + 2] = Nd.z, Jd[4 * kd + 3] = Nd.w
          } else Nd.Tools.Warn(`Unsupported number of components for color attribute: ${dd}`);
          const Cd = kd.createBufferView(Jd, 4 * dd),
            Kd = kd.createAccessor(Cd, 3 === dd ? "VEC3" : "VEC4", 5126, Ld, 0);
          Pd.push(Kd), gd.attributes.COLOR_0 = Pd.length - 1
        } else Nd.Tools.Warn(`Morph target colors for mesh ${Jd.name} were not exported. Mesh does not have colors vertex data`)
      }
      return gd
    }
    var Op = kd(41553);
    class ep {}
    ep.DEFAULT_COLOR = ud.c.White(), ep.DEFAULT_WIDTH_ATTENUATED = 1, ep.DEFAULT_WIDTH = .1;
    var Rp = kd(41077);
    class Ip {
      constructor(dd) {
        this._paths = [], this._tempPaths = [], this._holes = [], this._resolution = dd
      }
      moveTo(dd, Jd) {
        this._currentPath = new Rp.f(dd, Jd), this._tempPaths.push(this._currentPath)
      }
      lineTo(dd, Jd) {
        this._currentPath.addLineTo(dd, Jd)
      }
      quadraticCurveTo(dd, Jd, kd, pd) {
        this._currentPath.addQuadraticCurveTo(dd, Jd, kd, pd, this._resolution)
      }
      bezierCurveTo(dd, Jd, kd, pd, Nd, Wd) {
        this._currentPath.addBezierCurveTo(dd, Jd, kd, pd, Nd, Wd, this._resolution)
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

    function Gp(dd, Jd, kd, pd, Nd, Wd) {
      const Pd = Wd.glyphs[dd] || Wd.glyphs["?"];
      if (!Pd) return null;
      const Zd = new Ip(Nd);
      if (Pd.o) {
        const dd = Pd.o.split(" ");
        for (let Nd = 0, Wd = dd.length; Nd < Wd;) {
          switch (dd[Nd++]) {
            case "m": {
              const Wd = parseInt(dd[Nd++]) * Jd + kd,
                Pd = parseInt(dd[Nd++]) * Jd + pd;
              Zd.moveTo(Wd, Pd);
              break
            }
            case "l": {
              const Wd = parseInt(dd[Nd++]) * Jd + kd,
                Pd = parseInt(dd[Nd++]) * Jd + pd;
              Zd.lineTo(Wd, Pd);
              break
            }
            case "q": {
              const Wd = parseInt(dd[Nd++]) * Jd + kd,
                Pd = parseInt(dd[Nd++]) * Jd + pd,
                gd = parseInt(dd[Nd++]) * Jd + kd,
                Cd = parseInt(dd[Nd++]) * Jd + pd;
              Zd.quadraticCurveTo(gd, Cd, Wd, Pd);
              break
            }
            case "b": {
              const Wd = parseInt(dd[Nd++]) * Jd + kd,
                Pd = parseInt(dd[Nd++]) * Jd + pd,
                gd = parseInt(dd[Nd++]) * Jd + kd,
                Cd = parseInt(dd[Nd++]) * Jd + pd,
                Kd = parseInt(dd[Nd++]) * Jd + kd,
                od = parseInt(dd[Nd++]) * Jd + pd;
              Zd.bezierCurveTo(gd, Cd, Kd, od, Wd, Pd);
              break
            }
          }
        }
      }
      return Zd.extractHoles(), {
        offsetX: Pd.ha * Jd,
        shapePath: Zd
      }
    }

    function vp(dd, Jd, kd, pd) {
      const Nd = Array.from(dd),
        Wd = Jd / pd.resolution,
        Pd = (pd.boundingBox.yMax - pd.boundingBox.yMin + pd.underlineThickness) * Wd,
        Zd = [];
      let gd = 0,
        Cd = 0;
      for (let Kd = 0; Kd < Nd.length; Kd++) {
        const dd = Nd[Kd];
        if ("\n" === dd) gd = 0, Cd -= Pd;
        else {
          const Jd = Gp(dd, Wd, gd, Cd, kd, pd);
          Jd && (gd += Jd.offsetX, Zd.push(Jd.shapePath))
        }
      }
      return Zd
    }
    class xp {
      static ConvertPoints(dd, Jd) {
        if (dd.length && Array.isArray(dd) && "number" === typeof dd[0]) return [dd];
        if (dd.length && Array.isArray(dd[0]) && "number" === typeof dd[0][0]) return dd;
        if (dd.length && !Array.isArray(dd[0]) && dd[0] instanceof yd.n) {
          const Jd = [];
          for (let kd = 0; kd < dd.length; kd++) {
            const pd = dd[kd];
            Jd.push(pd.x, pd.y, pd.z)
          }
          return [Jd]
        }
        if (dd.length > 0 && Array.isArray(dd[0]) && dd[0].length > 0 && dd[0][0] instanceof yd.n) {
          const Jd = [],
            kd = dd;
          for (const dd of kd) Jd.push(dd.flatMap((dd => [dd.x, dd.y, dd.z])));
          return Jd
        }
        if (dd instanceof Float32Array) {
          if (Jd?.floatArrayStride) {
            const kd = [],
              pd = 3 * Jd.floatArrayStride;
            for (let Jd = 0; Jd < dd.length; Jd += pd) {
              const Nd = new Array(pd);
              for (let kd = 0; kd < pd; kd++) Nd[kd] = dd[Jd + kd];
              kd.push(Nd)
            }
            return kd
          }
          return [Array.from(dd)]
        }
        if (dd.length && dd[0] instanceof Float32Array) {
          const Jd = [];
          for (const kd of dd) Jd.push(Array.from(kd));
          return Jd
        }
        return []
      }
      static OmitZeroLengthPredicate(dd, Jd, kd) {
        const pd = [];
        return Jd.subtract(dd).lengthSquared() > 0 && pd.push([dd, Jd]), kd.subtract(Jd).lengthSquared() > 0 && pd.push([Jd, kd]), dd.subtract(kd).lengthSquared() > 0 && pd.push([kd, dd]), 0 === pd.length ? null : pd
      }
      static OmitDuplicatesPredicate(dd, Jd, kd, pd) {
        const Nd = [];
        return xp._SearchInPoints(dd, Jd, pd) || Nd.push([dd, Jd]), xp._SearchInPoints(Jd, kd, pd) || Nd.push([Jd, kd]), xp._SearchInPoints(kd, dd, pd) || Nd.push([kd, dd]), 0 === Nd.length ? null : Nd
      }
      static _SearchInPoints(dd, Jd, kd) {
        for (const pd of kd)
          for (let kd = 0; kd < pd.length; kd++)
            if (pd[kd]?.equals(dd) && (pd[kd + 1]?.equals(Jd) || pd[kd - 1]?.equals(Jd))) return !0;
        return !1
      }
      static MeshesToLines(dd, Jd) {
        const kd = [];
        for (let pd = 0; pd < dd.length; pd++) {
          const Nd = dd[pd],
            Wd = Nd.getVerticesData(Dd.j.PositionKind),
            Pd = Nd.ipd();
          if (Wd && Pd)
            for (let dd = 0, Zd = 0; dd < Pd.length; dd++) {
              const gd = 3 * Pd[Zd++],
                Cd = 3 * Pd[Zd++],
                Kd = 3 * Pd[Zd++],
                od = new yd.n(Wd[gd], Wd[gd + 1], Wd[gd + 2]),
                ld = new yd.n(Wd[Cd], Wd[Cd + 1], Wd[Cd + 2]),
                Qd = new yd.n(Wd[Kd], Wd[Kd + 1], Wd[Kd + 2]);
              if (Jd) {
                const Zd = Jd(od, ld, Qd, kd, dd, gd, Nd, pd, Wd, Pd);
                if (Zd)
                  for (const dd of Zd) kd.push(dd)
              } else kd.push([od, ld], [ld, Qd], [Qd, od])
            }
        }
        return kd
      }
      static ToVector3Array(dd) {
        if (Array.isArray(dd[0])) {
          const Jd = [],
            kd = dd;
          for (const dd of kd) {
            const kd = [];
            for (let Jd = 0; Jd < dd.length; Jd += 3) kd.push(new yd.n(dd[Jd], dd[Jd + 1], dd[Jd + 2]));
            Jd.push(kd)
          }
          return Jd
        }
        const Jd = dd,
          kd = [];
        for (let pd = 0; pd < Jd.length; pd += 3) kd.push(new yd.n(Jd[pd], Jd[pd + 1], Jd[pd + 2]));
        return kd
      }
      static ToNumberArray(dd) {
        return dd.flatMap((dd => [dd.x, dd.y, dd.z]))
      }
      static GetPointsCountInfo(dd) {
        const Jd = new Array(dd.length);
        let kd = 0;
        for (let pd = dd.length; pd--;) Jd[pd] = dd[pd].length / 3, kd += Jd[pd];
        return {
          total: kd,
          counts: Jd
        }
      }
      static GetLineLength(dd) {
        if (0 === dd.length) return 0;
        let Jd;
        Jd = "number" === typeof dd[0] ? xp.ToVector3Array(dd) : dd;
        const kd = yd.h.IL[0];
        let pd = 0;
        for (let Nd = 0; Nd < Jd.length - 1; Nd++) {
          const dd = Jd[Nd];
          pd += Jd[Nd + 1].subtractToRef(dd, kd).length()
        }
        return pd
      }
      static GetLineLengthArray(dd, Jd) {
        const kd = Jd ? new Float32Array(Jd, 0, dd.length / 3) : new Float32Array(dd.length / 3);
        let pd = 0;
        for (let Nd = 0, Wd = dd.length / 3 - 1; Nd < Wd; Nd++) {
          let Jd = dd[3 * Nd + 0],
            Wd = dd[3 * Nd + 1],
            Pd = dd[3 * Nd + 2];
          Jd -= dd[3 * Nd + 3], Wd -= dd[3 * Nd + 4], Pd -= dd[3 * Nd + 5];
          pd += Math.sqrt(Jd * Jd + Wd * Wd + Pd * Pd), kd[Nd + 1] = pd
        }
        return kd
      }
      static SegmentizeSegmentByCount(dd, Jd, kd) {
        const pd = [],
          Nd = Jd.subtract(dd),
          Wd = yd.h.IL[0];
        Wd.o5(kd);
        const Pd = yd.h.IL[1];
        Nd.divideToRef(Wd, Pd);
        let Zd = dd.clone();
        pd.push(Zd);
        for (let gd = 0; gd < kd; gd++) Zd = Zd.clone(), pd.push(Zd.addInPlace(Pd));
        return pd
      }
      static SegmentizeLineBySegmentLength(dd, Jd) {
        const kd = dd[0] instanceof yd.n ? xp.GetLineSegments(dd) : "number" === typeof dd[0] ? xp.GetLineSegments(xp.ToVector3Array(dd)) : dd,
          pd = [];
        for (const Nd of kd)
          if (Nd.length > Jd) {
            const dd = xp.SegmentizeSegmentByCount(Nd.point1, Nd.point2, Math.ceil(Nd.length / Jd));
            for (const Jd of dd) pd.push(Jd)
          } else pd.push(Nd.point1), pd.push(Nd.point2);
        return pd
      }
      static SegmentizeLineBySegmentCount(dd, Jd) {
        const kd = "number" === typeof dd[0] ? xp.ToVector3Array(dd) : dd,
          pd = xp.GetLineLength(kd) / Jd;
        return xp.SegmentizeLineBySegmentLength(kd, pd)
      }
      static GetLineSegments(dd) {
        const Jd = [];
        for (let kd = 0; kd < dd.length - 1; kd++) {
          const pd = dd[kd],
            Nd = dd[kd + 1],
            Wd = Nd.subtract(pd).length();
          Jd.push({
            point1: pd,
            point2: Nd,
            length: Wd
          })
        }
        return Jd
      }
      static GetMinMaxSegmentLength(dd) {
        const Jd = xp.GetLineSegments(dd).sort((dd => dd.length));
        return {
          min: Jd[0].length,
          max: Jd[Jd.length - 1].length
        }
      }
      static GetPositionOnLineByVisibility(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Nd = Jd * kd;
        let Wd = 0,
          Pd = 0;
        const Zd = dd.length;
        for (let Cd = 0; Cd < Zd; Cd++) {
          if (Nd <= Wd + dd[Cd].length) {
            Pd = Cd;
            break
          }
          Wd += dd[Cd].length
        }
        const gd = (Nd - Wd) / dd[Pd].length;
        return dd[Pd].point2.subtractToRef(dd[Pd].point1, yd.h.IL[0]), yd.h.IL[0].scaleToRef(gd, yd.h.IL[1]), pd || yd.h.IL[1].addInPlace(dd[Pd].point1), yd.h.IL[1].clone()
      }
      static GetCircleLinePoints(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : dd,
          Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI / Jd;
        const Wd = [];
        for (let Pd = 0; Pd <= Jd; Pd++) Wd.push(new yd.n(Math.cos(Pd * Nd) * dd, Math.sin(Pd * Nd) * pd, kd));
        return Wd
      }
      static GetBezierLinePoints(dd, Jd, kd, pd) {
        return Rp.e.CreateQuadraticBezier(dd, Jd, kd, pd).getPoints().flatMap((dd => [dd.x, dd.y, dd.z]))
      }
      static GetArrowCap(dd, Jd, kd, pd, Nd) {
        let Wd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Pd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        return {
          points: [dd.clone(), dd.add(Jd.multiplyByFloats(kd, kd, kd))],
          widths: [pd, Nd, Wd, Pd]
        }
      }
      static GetPointsFromText(dd, Jd, kd, pd) {
        let Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          Wd = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        const Pd = [],
          Zd = vp(dd, Jd, kd, pd);
        for (const gd of Zd) {
          for (const dd of gd.paths) {
            const Jd = [],
              kd = dd.getPoints();
            for (const dd of kd) Jd.push(dd.x, dd.y, Nd);
            Pd.push(Jd)
          }
          if (Wd)
            for (const dd of gd.holes) {
              const Jd = [],
                kd = dd.getPoints();
              for (const dd of kd) Jd.push(dd.x, dd.y, Nd);
              Pd.push(Jd)
            }
        }
        return Pd
      }
      static Color3toRGBAUint8(dd) {
        const Jd = new Uint8Array(4 * dd.length);
        for (let kd = 0, pd = 0; kd < dd.length; kd++) Jd[pd++] = 255 * dd[kd].r, Jd[pd++] = 255 * dd[kd].g, Jd[pd++] = 255 * dd[kd].b, Jd[pd++] = 255;
        return Jd
      }
      static CreateColorsTexture(dd, Jd, kd, pd) {
        const Nd = pd.eL().getCaps().maxTextureSize ?? 1,
          Wd = Jd.length > Nd ? Nd : Jd.length,
          Pd = Math.ceil(Jd.length / Nd);
        Pd > 1 && (Jd = [...Jd, ...Array(Wd * Pd - Jd.length).fill(Jd[0])]);
        const Zd = xp.Color3toRGBAUint8(Jd),
          gd = new qd.d(Zd, Wd, Pd, lk.d.TEXTUREFORMAT_RGBA, pd, !1, !0, kd);
        return gd.name = dd, gd
      }
      static PrepareEmptyColorsTexture(dd) {
        if (!ep.EmptyColorsTexture) {
          const Jd = new Uint8Array(4);
          ep.EmptyColorsTexture = new qd.d(Jd, 1, 1, lk.d.TEXTUREFORMAT_RGBA, dd, !1, !1, qd.d.NEAREST_NEAREST), ep.EmptyColorsTexture.name = "grlEmptyColorsTexture", ep.EmptyColorsTexture.Zm.addOnce((() => {
            ep.EmptyColorsTexture = null
          }))
        }
        return ep.EmptyColorsTexture
      }
      static DisposeEmptyColorsTexture() {
        ep.EmptyColorsTexture?.dispose(), ep.EmptyColorsTexture = null
      }
      static BooleanToNumber(dd) {
        return dd ? 1 : 0
      }
    }
    class qp extends Td.d {
      constructor() {
        super(...arguments), this.GREASED_LINE_HAS_COLOR = !1, this.GREASED_LINE_SIZE_ATTENUATION = !1, this.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = !1, this.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = !1, this.GREASED_LINE_CAMERA_FACING = !0, this.GREASED_LINE_USE_OFFSETS = !1
      }
    }
    class Bp extends Ed.c {
      isCompatible(dd) {
        return !0
      }
      constructor(dd, Jd, kd) {
        kd = kd || {
          color: ep.DEFAULT_COLOR
        };
        const pd = new qp;
        pd.GREASED_LINE_HAS_COLOR = !!kd.color && !kd.useColors, pd.GREASED_LINE_SIZE_ATTENUATION = kd.sizeAttenuation ?? !1, pd.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === kd.colorDistributionType, pd.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (Jd ?? dd.Wm()).useRightHandedSystem, pd.GREASED_LINE_CAMERA_FACING = kd.cameraFacing ?? !0, super(dd, Bp.GREASED_LINE_MATERIAL_NAME, 200, pd, !0, !0), this.colorsTexture = null, this._forceGLSL = !1, this._forceGLSL = kd?.forceGLSL || Bp.ForceGLSL, this._scene = Jd ?? dd.Wm(), this._engine = this._scene.eL(), this._cameraFacing = kd.cameraFacing ?? !0, this.visibility = kd.visibility ?? 1, this.useDash = kd.useDash ?? !1, this.dashRatio = kd.dashRatio ?? .5, this.dashOffset = kd.dashOffset ?? 0, this.width = kd.width ? kd.width : kd.sizeAttenuation ? ep.DEFAULT_WIDTH_ATTENUATED : ep.DEFAULT_WIDTH, this._sizeAttenuation = kd.sizeAttenuation ?? !1, this.colorMode = kd.colorMode ?? 0, this._color = kd.color ?? null, this.useColors = kd.useColors ?? !1, this._colorsDistributionType = kd.colorDistributionType ?? 0, this.colorsSampling = kd.colorsSampling ?? qd.d.NEAREST_NEAREST, this._colors = kd.colors ?? null, this.dashCount = kd.dashCount ?? 1, this.resolution = kd.resolution ?? new yd.k(this._engine.getRenderWidth(), this._engine.getRenderHeight()), kd.colorsTexture ? this.colorsTexture = kd.colorsTexture : this._colors ? this.colorsTexture = xp.CreateColorsTexture(`${dd.name}-colors-texture`, this._colors, this.colorsSampling, this._scene) : (this._color = this._color ?? ep.DEFAULT_COLOR, xp.PrepareEmptyColorsTexture(this._scene)), this._engine.Zm.add((() => {
          xp.DisposeEmptyColorsTexture()
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
        const Jd = [{
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
        return this._cameraFacing && Jd.push({
          name: "grl_projection",
          size: 16,
          type: "mat4"
        }, {
          name: "grl_aspect_resolution_lineWidth",
          size: 4,
          type: "vec4"
        }), 1 === dd && Jd.push({
          name: "viewProjection",
          size: 16,
          type: "mat4"
        }), {
          ubo: Jd,
          vertex: this._cameraFacing && this._isGLSL(dd) ? "\n                    uniform vec4 grl_aspect_resolution_lineWidth;\n                    uniform mat4 grl_projection;\n    " : "",
          fragment: this._isGLSL(dd) ? "\n                    uniform vec4 grl_dashOptions;\n                    uniform vec2 grl_textureSize;\n                    uniform vec4 grl_colorMode_visibility_colorsWidth_useColors;\n                    uniform vec3 grl_singleColor;\n    " : ""
        }
      }
      get isEnabled() {
        return !0
      }
      bindForSubMesh(dd) {
        if (this._cameraFacing) {
          dd.o3("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || dd.o3("viewProjection", this._scene.getTransformMatrix());
          const Jd = yd.h.Vector4[0];
          Jd.x = this._aspect, Jd.y = this._resolution.x, Jd.z = this._resolution.y, Jd.w = this.width, dd.updateVector4("grl_aspect_resolution_lineWidth", Jd)
        }
        const Jd = yd.h.Vector4[0];
        Jd.x = xp.BooleanToNumber(this.useDash), Jd.y = this._dashArray, Jd.z = this.dashOffset, Jd.w = this.dashRatio, dd.updateVector4("grl_dashOptions", Jd);
        const kd = yd.h.Vector4[1];
        kd.x = this.colorMode, kd.y = this.visibility, kd.z = this.colorsTexture ? this.colorsTexture.getSize().width : 0, kd.w = xp.BooleanToNumber(this.useColors), dd.updateVector4("grl_colorMode_visibility_colorsWidth_useColors", kd), this._color && dd.updateColor3("grl_singleColor", this._color);
        const pd = this.colorsTexture ?? ep.EmptyColorsTexture;
        dd.setTexture("grl_colors", pd), dd.updateFloat2("grl_textureSize", pd?.getSize().width ?? 1, pd?.getSize().height ?? 1)
      }
      prepareDefines(dd, Jd, kd) {
        dd.GREASED_LINE_HAS_COLOR = !!this.color && !this.useColors, dd.GREASED_LINE_SIZE_ATTENUATION = this._sizeAttenuation, dd.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === this._colorsDistributionType, dd.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = Jd.useRightHandedSystem, dd.GREASED_LINE_CAMERA_FACING = this._cameraFacing, dd.GREASED_LINE_USE_OFFSETS = !!kd.offsets
      }
      getClassName() {
        return Bp.GREASED_LINE_MATERIAL_NAME
      }
      getCustomCode(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._isGLSL(Jd) ? function(dd, Jd) {
          if ("vertex" === dd) {
            const dd = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute float grl_widths;\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute vec3 grl_offsets;\n                #endif\n                attribute float grl_colorPointers;\n                varying float grlCounters;\n                varying float grlColorPointer;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute vec4 grl_previousAndSide;\n                    attribute vec4 grl_nextAndCounters;\n\n                    vec2 grlFix( vec4 i, float aspect ) {\n                        vec2 res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute vec3 grl_slopes;\n                    attribute float grl_counters;\n                #endif\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    vec3 grlPositionOffset = grl_offsets;\n                #else\n                    vec3 grlPositionOffset = vec3(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (grl_slopes * grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                grlColorPointer = grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    float grlAspect = grl_aspect_resolution_lineWidth.x;\n                    float grlBaseWidth = grl_aspect_resolution_lineWidth.w;\n\n                    vec3 grlPrevious = grl_previousAndSide.xyz;\n                    float grlSide = grl_previousAndSide.w;\n\n                    vec3 grlNext = grl_nextAndCounters.xyz;\n                    grlCounters = grl_nextAndCounters.w;\n                    float grlWidth = grlBaseWidth * grl_widths;\n                    \n                    vec3 worldDir = normalize(grlNext - grlPrevious);\n                    vec3 nearPosition = positionUpdated + (worldDir * 0.01);\n                    mat4 grlMatrix = viewProjection * finalWorld;\n                    vec4 grlFinalPosition = grlMatrix * vec4(positionUpdated , 1.0);\n                    vec4 screenNearPos = grlMatrix * vec4(nearPosition, 1.0);\n                    vec2 grlLinePosition = grlFix(grlFinalPosition, grlAspect);\n                    vec2 grlLineNearPosition = grlFix(screenNearPos, grlAspect);\n                    vec2 grlDir = normalize(grlLineNearPosition - grlLinePosition);\n\n                    vec4 grlNormal = vec4(-grlDir.y, grlDir.x, 0., 1.);\n\n                    #ifdef GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM\n                        grlNormal.xy *= -.5 * grlWidth;\n                    #else\n                        grlNormal.xy *= .5 * grlWidth;\n                    #endif\n\n                    grlNormal *= grl_projection;\n\n                    #ifdef GREASED_LINE_SIZE_ATTENUATION\n                        grlNormal.xy *= grlFinalPosition.w;\n                        grlNormal.xy /= (vec4(grl_aspect_resolution_lineWidth.yz, 0., 1.) * grl_projection).xy;\n                    #endif\n\n                    grlFinalPosition.xy += grlNormal.xy * grlSide;\n                    gl_Position = grlFinalPosition;\n\n                    vPositionW = vec3(grlFinalPosition);\n                #else\n                    grlCounters = grl_counters;\n                #endif\n                "
            };
            return Jd && (dd["!gl_Position\\=viewProjection\\*worldPos;"] = "//"), dd
          }
          return "fragment" === dd ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying float grlCounters;\n                    varying float grlColorPointer;\n                    uniform sampler2D grl_colors;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    float grlColorMode = grl_colorMode_visibility_colorsWidth_useColors.x;\n                    float grlVisibility = grl_colorMode_visibility_colorsWidth_useColors.y;\n                    float grlColorsWidth = grl_colorMode_visibility_colorsWidth_useColors.z;\n                    float grlUseColors = grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    float grlUseDash = grl_dashOptions.x;\n                    float grlDashArray = grl_dashOptions.y;\n                    float grlDashOffset = grl_dashOptions.z;\n                    float grlDashRatio = grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(grlCounters, grlVisibility);\n                    if(grlFinalColor.a == 0.) discard;\n\n                    if(grlUseDash == 1.){\n                        grlFinalColor.a *= ceil(mod(grlCounters + grlDashOffset, grlDashArray) - (grlDashArray * grlDashRatio));\n                        if (grlFinalColor.a == 0.) discard;\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor.rgb = grl_singleColor;\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor.rgb += grl_singleColor;\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor.rgb *= grl_singleColor;\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                vec4 grlColor = texture2D(grl_colors, vec2(grlCounters, 0.), 0.);\n                            #else\n                                vec2 lookup = vec2(fract(grlColorPointer / grl_textureSize.x), 1.0 - floor(grlColorPointer / grl_textureSize.x) / max(grl_textureSize.y - 1.0, 1.0));\n                                vec4 grlColor = texture2D(grl_colors, lookup, 0.0);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n                "
          } : null
        }(dd, this._cameraFacing) : function(dd, Jd) {
          if ("vertex" === dd) {
            const dd = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute grl_widths: f32;\n                attribute grl_colorPointers: f32;\n                varying grlCounters: f32;\n                varying grlColorPointer: f32;\n\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute grl_offsets: vec3f;   \n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute grl_previousAndSide : vec4f;\n                    attribute grl_nextAndCounters : vec4f;\n\n                    fn grlFix(i: vec4f, aspect: f32) -> vec2f {\n                        var res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute grl_slopes: f32;\n                    attribute grl_counters: f32;\n                #endif\n\n\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    var grlPositionOffset: vec3f = input.grl_offsets;\n                #else\n                    var grlPositionOffset = vec3f(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (input.grl_slopes * input.grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                vertexOutputs.grlColorPointer = input.grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    let grlAspect: f32 = uniforms.grl_aspect_resolution_lineWidth.x;\n                    let grlBaseWidth: f32 = uniforms.grl_aspect_resolution_lineWidth.w;\n\n                    let grlPrevious: vec3f = input.grl_previousAndSide.xyz;\n                    let grlSide: f32 = input.grl_previousAndSide.w;\n\n                    let grlNext: vec3f = input.grl_nextAndCounters.xyz;\n                    vertexOutputs.grlCounters = input.grl_nextAndCounters.w;\n\n                    let grlWidth: f32 = grlBaseWidth * input.grl_widths;\n\n                    let worldDir: vec3f = normalize(grlNext - grlPrevious);\n                    let nearPosition: vec3f = positionUpdated + (worldDir * 0.01);\n                    let grlMatrix: mat4x4f = uniforms.viewProjection * finalWorld;\n                    let grlFinalPosition: vec4f = grlMatrix * vec4f(positionUpdated, 1.0); \n                    let screenNearPos: vec4f = grlMatrix * vec4(nearPosition, 1.0);\n                    let grlLinePosition: vec2f = grlFix(grlFinalPosition, grlAspect);\n                    let grlLineNearPosition: vec2f = grlFix(screenNearPos, grlAspect);\n                    let grlDir: vec2f = normalize(grlLineNearPosition - grlLinePosition);\n\n                    var grlNormal: vec4f = vec4f(-grlDir.y, grlDir.x, 0.0, 1.0);\n\n                    let grlHalfWidth: f32 = 0.5 * grlWidth;\n                    #if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)\n                        grlNormal.x *= -grlHalfWidth;\n                        grlNormal.y *= -grlHalfWidth;\n                    #else\n                        grlNormal.x *= grlHalfWidth;\n                        grlNormal.y *= grlHalfWidth;\n                    #endif\n\n                    grlNormal *= uniforms.grl_projection;\n\n                    #if defined(GREASED_LINE_SIZE_ATTENUATION)\n                        grlNormal.x *= grlFinalPosition.w;\n                        grlNormal.y *= grlFinalPosition.w;\n\n                        let pr = vec4f(uniforms.grl_aspect_resolution_lineWidth.yz, 0.0, 1.0) * uniforms.grl_projection;\n                        grlNormal.x /= pr.x;\n                        grlNormal.y /= pr.y;\n                    #endif\n\n                    vertexOutputs.position = vec4f(grlFinalPosition.xy + grlNormal.xy * grlSide, grlFinalPosition.z, grlFinalPosition.w);\n                    vertexOutputs.vPositionW = vertexOutputs.position.xyz;\n                \n                #else\n                    vertexOutputs.grlCounters = input.grl_counters;\n                #endif\n                "
            };
            return Jd && (dd["!vertexOutputs\\.position\\s=\\sscene\\.viewProjection\\s\\*\\sworldPos;"] = "//"), dd
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
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const pd = this._colors?.length ?? 0;
        if (this._colors = dd, null !== dd && 0 !== dd.length) {
          if (!Jd || kd)
            if (this.colorsTexture && pd === dd.length && !kd) {
              const Jd = xp.Color3toRGBAUint8(dd);
              this.colorsTexture.update(Jd)
            } else this.colorsTexture?.dispose(), this.colorsTexture = xp.CreateColorsTexture(`${this._material.name}-colors-texture`, dd, this.colorsSampling, this._scene)
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
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null === this._color && null !== dd || null !== this._color && null === dd ? (this._color = dd, Jd || this.markAllDefinesAsDirty()) : this._color = dd
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
          Jd = {
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
        return this._colors && (Jd.colors = this._colors), this._color && (Jd.color = this._color), dd.greasedLineMaterialOptions = Jd, dd
      }
      parse(dd, Jd, kd) {
        super.parse(dd, Jd, kd);
        const pd = dd.greasedLineMaterialOptions;
        this.colorsTexture?.dispose(), pd.color && this.setColor(pd.color, !0), pd.colorDistributionType && (this.colorsDistributionType = pd.colorDistributionType), pd.colors && (this.colors = pd.colors), pd.colorsSampling && (this.colorsSampling = pd.colorsSampling), pd.colorMode && (this.colorMode = pd.colorMode), pd.useColors && (this.useColors = pd.useColors), pd.visibility && (this.visibility = pd.visibility), pd.useDash && (this.useDash = pd.useDash), pd.dashCount && (this.dashCount = pd.dashCount), pd.dashRatio && (this.dashRatio = pd.dashRatio), pd.dashOffset && (this.dashOffset = pd.dashOffset), pd.width && (this.width = pd.width), pd.sizeAttenuation && (this.sizeAttenuation = pd.sizeAttenuation), pd.resolution && (this.resolution = pd.resolution), this.colors ? this.colorsTexture = xp.CreateColorsTexture(`${this._material.name}-colors-texture`, this.colors, this.colorsSampling, Jd) : xp.PrepareEmptyColorsTexture(Jd), this.markAllDefinesAsDirty()
      }
      copyTo(dd) {
        const Jd = dd;
        Jd.colorsTexture?.dispose(), this._colors && (Jd.colorsTexture = xp.CreateColorsTexture(`${Jd._material.name}-colors-texture`, this._colors, Jd.colorsSampling, this._scene)), Jd.setColor(this.color, !0), Jd.colorsDistributionType = this.colorsDistributionType, Jd.colorsSampling = this.colorsSampling, Jd.colorMode = this.colorMode, Jd.useColors = this.useColors, Jd.visibility = this.visibility, Jd.useDash = this.useDash, Jd.dashCount = this.dashCount, Jd.dashRatio = this.dashRatio, Jd.dashOffset = this.dashOffset, Jd.width = this.width, Jd.sizeAttenuation = this.sizeAttenuation, Jd.resolution = this.resolution, Jd.markAllDefinesAsDirty()
      }
      _isGLSL(dd) {
        return 0 === dd || this._forceGLSL
      }
    }
    Bp.GREASED_LINE_MATERIAL_NAME = "GreasedLinePluginMaterial", Bp.ForceGLSL = !1;
    var sp = kd(40393),
      ip = kd(40402),
      ap = kd(38806),
      Mp = kd(40465),
      Fp = kd(39807);
    class Yp extends Mp.v {
      constructor(dd, Jd, pd) {
        const Nd = Jd.eL(),
          Wd = Nd.isWebGPU && !(pd.forceGLSL || Yp.ForceGLSL),
          Pd = ["COLOR_DISTRIBUTION_TYPE_LINE 1.", "COLOR_DISTRIBUTION_TYPE_SEGMENT 0.", "COLOR_MODE_SET 0.", "COLOR_MODE_ADD 1.", "COLOR_MODE_MULTIPLY 2."];
        Jd.useRightHandedSystem && Pd.push("GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM");
        const Zd = ["position", "grl_widths", "grl_offsets", "grl_colorPointers"];
        pd.cameraFacing ? (Pd.push("GREASED_LINE_CAMERA_FACING"), Zd.push("grl_previousAndSide", "grl_nextAndCounters")) : (Zd.push("grl_slopes"), Zd.push("grl_counters"));
        const gd = ["grlColorsWidth", "grlUseColors", "grlWidth", "grlColor", "grl_colorModeAndColorDistributionType", "grlResolution", "grlAspect", "grlAizeAttenuation", "grlDashArray", "grlDashOffset", "grlDashRatio", "grlUseDash", "grlVisibility", "grlColors"];
        if (Wd || gd.push("world", "viewProjection", "view", "projection"), super(dd, Jd, {
            vertex: "greasedLine",
            fragment: "greasedLine"
          }, {
            uniformBuffers: Wd ? ["Scene", "Mesh"] : void 0,
            attributes: Zd,
            uniforms: gd,
            samplers: Wd ? [] : ["grlColors"],
            defines: Pd,
            extraInitializationsAsync: async () => {
              Wd ? await Promise.all([kd.e(325).then((() => kd(61594))), kd.e(384).then((() => kd(61600)))]) : await Promise.all([kd.e(318).then((() => kd(61607))), kd.e(385).then((() => kd(61613)))])
            },
            shaderLanguage: Wd ? 1 : 0
          }), this._color = ud.c.White(), this._colorsDistributionType = 0, this._colorsTexture = null, pd = pd || {
            color: ep.DEFAULT_COLOR
          }, this.visibility = pd.visibility ?? 1, this.useDash = pd.useDash ?? !1, this.dashRatio = pd.dashRatio ?? .5, this.dashOffset = pd.dashOffset ?? 0, this.dashCount = pd.dashCount ?? 1, this.width = pd.width ? pd.width : pd.sizeAttenuation && pd.cameraFacing ? ep.DEFAULT_WIDTH_ATTENUATED : ep.DEFAULT_WIDTH, this.sizeAttenuation = pd.sizeAttenuation ?? !1, this.color = pd.color ?? ud.c.White(), this.useColors = pd.useColors ?? !1, this.colorsDistributionType = pd.colorDistributionType ?? 0, this.colorsSampling = pd.colorsSampling ?? qd.d.NEAREST_NEAREST, this.colorMode = pd.colorMode ?? 0, this._colors = pd.colors ?? null, this._cameraFacing = pd.cameraFacing ?? !0, this.resolution = pd.resolution ?? new yd.k(Nd.getRenderWidth(), Nd.getRenderHeight()), pd.colorsTexture ? this.colorsTexture = pd.colorsTexture : this._colors ? this.colorsTexture = xp.CreateColorsTexture(`${this.name}-colors-texture`, this._colors, this.colorsSampling, Jd) : (this._color = this._color ?? ep.DEFAULT_COLOR, this.colorsTexture = xp.PrepareEmptyColorsTexture(Jd)), Wd) {
          const dd = new Fp.e;
          dd.setParameters(), dd.samplingMode = this.colorsSampling, this.setTextureSampler("grlColorsSampler", dd)
        }
        Nd.Zm.add((() => {
          xp.DisposeEmptyColorsTexture()
        }))
      }
      dispose() {
        this._colorsTexture && this._colorsTexture !== ep.EmptyColorsTexture && this._colorsTexture.dispose(), super.dispose()
      }
      _setColorModeAndColorDistributionType() {
        this.setVector2("grl_colorModeAndColorDistributionType", new yd.k(this._colorMode, this._colorsDistributionType))
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
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const pd = this._colors?.length ?? 0;
        if (this._colors = dd, null !== dd && 0 !== dd.length) {
          if (!Jd || kd)
            if (this._colorsTexture && pd === dd.length && !kd) {
              const Jd = xp.Color3toRGBAUint8(dd);
              this._colorsTexture.update(Jd)
            } else this._colorsTexture && this._colorsTexture !== ep.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = xp.CreateColorsTexture(`${this.name}-colors-texture`, dd, this.colorsSampling, this.Wm())
        } else {
          this._colorsTexture && this._colorsTexture !== ep.EmptyColorsTexture && this._colorsTexture.dispose();
          const dd = this.Wm();
          dd && (this.colorsTexture = xp.PrepareEmptyColorsTexture(dd))
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
        this._useColors = dd, this.setFloat("grlUseColors", xp.BooleanToNumber(dd))
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
        this._useDash = dd, this.setFloat("grlUseDash", xp.BooleanToNumber(dd))
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
        this._sizeAttenuation = dd, this.setFloat("grlSizeAttenuation", xp.BooleanToNumber(dd))
      }
      get color() {
        return this._color
      }
      set color(dd) {
        this.setColor(dd)
      }
      setColor(dd) {
        dd = dd ?? ep.DEFAULT_COLOR, this._color = dd, this.setColor3("grlColor", dd)
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
          Jd = {
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
        return this._colors && (Jd.colors = this._colors), dd.greasedLineMaterialOptions = Jd, dd
      }
      parse(dd, Jd, kd) {
        const pd = dd.greasedLineMaterialOptions;
        this._colorsTexture?.dispose(), pd.color && (this.color = pd.color), pd.colorDistributionType && (this.colorsDistributionType = pd.colorDistributionType), pd.colorsSampling && (this.colorsSampling = pd.colorsSampling), pd.colorMode && (this.colorMode = pd.colorMode), pd.useColors && (this.useColors = pd.useColors), pd.visibility && (this.visibility = pd.visibility), pd.useDash && (this.useDash = pd.useDash), pd.dashCount && (this.dashCount = pd.dashCount), pd.dashRatio && (this.dashRatio = pd.dashRatio), pd.dashOffset && (this.dashOffset = pd.dashOffset), pd.width && (this.width = pd.width), pd.sizeAttenuation && (this.sizeAttenuation = pd.sizeAttenuation), pd.resolution && (this.resolution = pd.resolution), pd.colors ? this.colorsTexture = xp.CreateColorsTexture(`${this.name}-colors-texture`, pd.colors, this.colorsSampling, this.Wm()) : this.colorsTexture = xp.PrepareEmptyColorsTexture(Jd), this._cameraFacing = pd.cameraFacing ?? !0, this.setDefine("GREASED_LINE_CAMERA_FACING", this._cameraFacing)
      }
    }
    var mp, bp, Sp;
    Yp.ForceGLSL = !1,
      function(dd) {
        dd[dd.POINTS_MODE_POINTS = 0] = "POINTS_MODE_POINTS", dd[dd.POINTS_MODE_PATHS = 1] = "POINTS_MODE_PATHS"
      }(mp || (mp = {})),
      function(dd) {
        dd[dd.FACES_MODE_SINGLE_SIDED = 0] = "FACES_MODE_SINGLE_SIDED", dd[dd.FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING = 1] = "FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING", dd[dd.FACES_MODE_DOUBLE_SIDED = 2] = "FACES_MODE_DOUBLE_SIDED"
      }(bp || (bp = {})),
      function(dd) {
        dd[dd.AUTO_DIRECTIONS_FROM_FIRST_SEGMENT = 0] = "AUTO_DIRECTIONS_FROM_FIRST_SEGMENT", dd[dd.AUTO_DIRECTIONS_FROM_ALL_SEGMENTS = 1] = "AUTO_DIRECTIONS_FROM_ALL_SEGMENTS", dd[dd.AUTO_DIRECTIONS_ENHANCED = 2] = "AUTO_DIRECTIONS_ENHANCED", dd[dd.AUTO_DIRECTIONS_FACE_TO = 3] = "AUTO_DIRECTIONS_FACE_TO", dd[dd.AUTO_DIRECTIONS_NONE = 99] = "AUTO_DIRECTIONS_NONE"
      }(Sp || (Sp = {}));
    class jp extends sp.b {
      constructor(dd, Jd, kd) {
        super(dd, Jd, null, null, !1, !1), this.name = dd, this._options = kd, this._lazy = !1, this._updatable = !1, this._engine = Jd.eL(), this._lazy = kd.lazy ?? !1, this._updatable = kd.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._points = [], this._colorPointers = kd.colorPointers ?? [], this._widths = kd.widths ?? new Array(kd.points.length).fill(1)
      }
      getClassName() {
        return "GreasedLineMesh"
      }
      _updateWidthsWithValue(dd) {
        let Jd = 0;
        for (const pd of this._points) Jd += pd.length;
        const kd = Jd / 3 * 2 - this._widths.length;
        for (let pd = 0; pd < kd; pd++) this._widths.push(dd)
      }
      updateLazy() {
        this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.xL && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
      }
      addPoints(dd, Jd) {
        for (const kd of dd) this._points.push(kd);
        this._lazy || this.setPoints(this._points, Jd)
      }
      dispose(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super.dispose(dd, Jd)
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
        this.material instanceof Yp && this.material.setDefine("GREASED_LINE_USE_OFFSETS", dd?.length > 0), this._offsets = dd, this._offsetsBuffer ? this._offsetsBuffer.update(dd) : this._createOffsetsBuffer(dd)
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
        if (this.material && this.material instanceof Yp) return this.material;
        const dd = this.material?.pluginManager?.getPlugin(Bp.GREASED_LINE_MATERIAL_NAME);
        return dd || void 0
      }
      get points() {
        const dd = [];
        return ap.c.DeepCopy(this._points, dd), dd
      }
      setPoints(dd, Jd) {
        this._points = xp.ConvertPoints(dd, Jd?.pointsOptions ?? this._options.pointsOptions), this._updateWidths(), Jd?.colorPointers || this._updateColorPointers(), this._setPoints(this._points, Jd)
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
        const Jd = new ip.c;
        return Jd.positions = this._vertexPositions, Jd.indices = this._indices, Jd.uvs = this._uvs, dd && (Jd.normals = [], ip.c.ComputeNormals(this._vertexPositions, this._indices, Jd.normals)), Jd.applyToMesh(this, this._options.updatable), Jd
      }
      _createOffsetsBuffer(dd) {
        const Jd = this._scene.eL(),
          kd = new Dd.e(Jd, dd, this._updatable, 3);
        this.setVerticesBuffer(kd.createVertexBuffer("grl_offsets", 0, 3)), this._offsetsBuffer = kd
      }
    }
    class Xp {
      constructor(dd, Jd) {
        this._indicesAccessorMap = new Map, this._vertexBufferViewMap = new Map, this._vertexAccessorMap = new Map, this._remappedBufferView = new Map, this._meshMorphTargetMap = new Map, this._vertexMapColorAlpha = new Map, this._exportedNodes = new Set, this._meshMap = new Map, this.convertedToRightHandedBuffers = new Map, this.convertToRightHanded = dd, this.wasAddedByNoopNode = Jd
      }
      getIndicesAccessor(dd, Jd, kd, pd, Nd) {
        return this._indicesAccessorMap.get(dd)?.get(Jd)?.get(kd)?.get(pd)?.get(Nd)
      }
      setIndicesAccessor(dd, Jd, kd, pd, Nd, Wd) {
        let Pd = this._indicesAccessorMap.get(dd);
        Pd || (Pd = new Map, this._indicesAccessorMap.set(dd, Pd));
        let Zd = Pd.get(Jd);
        Zd || (Zd = new Map, Pd.set(Jd, Zd));
        let gd = Zd.get(kd);
        gd || (gd = new Map, Zd.set(kd, gd));
        let Cd = gd.get(pd);
        Cd || (Cd = new Map, gd.set(pd, Cd)), Cd.set(Nd, Wd)
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
      setVertexBufferView(dd, Jd) {
        this._vertexBufferViewMap.set(dd, Jd)
      }
      setRemappedBufferView(dd, Jd, kd) {
        this._remappedBufferView.set(dd, new Map), this._remappedBufferView.get(dd).set(Jd, kd)
      }
      getRemappedBufferView(dd, Jd) {
        return this._remappedBufferView.get(dd)?.get(Jd)
      }
      getVertexAccessor(dd, Jd, kd) {
        return this._vertexAccessorMap.get(dd)?.get(Jd)?.get(kd)
      }
      setVertexAccessor(dd, Jd, kd, pd) {
        let Nd = this._vertexAccessorMap.get(dd);
        Nd || (Nd = new Map, this._vertexAccessorMap.set(dd, Nd));
        let Wd = Nd.get(Jd);
        Wd || (Wd = new Map, Nd.set(Jd, Wd)), Wd.set(kd, pd)
      }
      hasVertexColorAlpha(dd) {
        return this._vertexMapColorAlpha.get(dd) || !1
      }
      setHasVertexColorAlpha(dd, Jd) {
        return this._vertexMapColorAlpha.set(dd, Jd)
      }
      getMesh(dd) {
        return this._meshMap.get(dd)
      }
      setMesh(dd, Jd) {
        this._meshMap.set(dd, Jd)
      }
      bindMorphDataToMesh(dd, Jd) {
        const kd = this._meshMorphTargetMap.get(dd) || [];
        this._meshMorphTargetMap.set(dd, kd), -1 === kd.indexOf(Jd) && kd.push(Jd)
      }
      getMorphTargetsFromMesh(dd) {
        return this._meshMorphTargetMap.get(dd)
      }
    }
    class fp {
      _ApplyExtension(dd, Jd, kd, pd) {
        if (kd >= Jd.length) return Promise.resolve(dd);
        const Nd = pd(Jd[kd], dd);
        return Nd ? Nd.then((async dd => dd ? await this._ApplyExtension(dd, Jd, kd + 1, pd) : null)) : this._ApplyExtension(dd, Jd, kd + 1, pd)
      }
      _ApplyExtensions(dd, Jd) {
        const kd = [];
        for (const pd of fp._ExtensionNames) kd.push(this._extensions[pd]);
        return this._ApplyExtension(dd, kd, 0, Jd)
      }
      _extensionsPostExportNodeAsync(dd, Jd, kd, pd, Nd) {
        return this._ApplyExtensions(Jd, ((Jd, Wd) => Jd.postExportNodeAsync && Jd.postExportNodeAsync(dd, Wd, kd, pd, Nd, this._bufferManager)))
      }
      _extensionsPostExportMaterialAsync(dd, Jd, kd) {
        return this._ApplyExtensions(Jd, ((Jd, pd) => Jd.postExportMaterialAsync && Jd.postExportMaterialAsync(dd, pd, kd)))
      }
      async _extensionsPostExportMaterialAdditionalTexturesAsync(dd, Jd, kd) {
        const pd = [];
        return await Promise.all(fp._ExtensionNames.map((async Nd => {
          const Wd = this._extensions[Nd];
          if (Wd.postExportMaterialAdditionalTexturesAsync) {
            const Nd = await Wd.postExportMaterialAdditionalTexturesAsync(dd, Jd, kd);
            pd.push(...Nd)
          }
        }))), pd
      }
      _extensionsPostExportTextures(dd, Jd, kd) {
        for (const pd of fp._ExtensionNames) {
          const Nd = this._extensions[pd];
          Nd.postExportTexture && Nd.postExportTexture(dd, Jd, kd)
        }
      }
      _extensionsPostExportMeshPrimitive(dd) {
        for (const Jd of fp._ExtensionNames) {
          const kd = this._extensions[Jd];
          kd.postExportMeshPrimitive && kd.postExportMeshPrimitive(dd, this._bufferManager, this._accessors)
        }
      }
      async _extensionsPreGenerateBinaryAsync() {
        for (const dd of fp._ExtensionNames) {
          const Jd = this._extensions[dd];
          Jd.preGenerateBinaryAsync && await Jd.preGenerateBinaryAsync(this._bufferManager)
        }
      }
      _forEachExtensions(dd) {
        for (const Jd of fp._ExtensionNames) {
          const kd = this._extensions[Jd];
          kd.enabled && dd(kd)
        }
      }
      _extensionsOnExporting() {
        this._forEachExtensions((dd => {
          var Jd, kd, pd;
          dd.wasUsed && ((Jd = this._glTF).extensionsUsed || (Jd.extensionsUsed = []), -1 === this._glTF.extensionsUsed.indexOf(dd.name) && this._glTF.extensionsUsed.push(dd.name), dd.required && ((kd = this._glTF).extensionsRequired || (kd.extensionsRequired = []), -1 === this._glTF.extensionsRequired.indexOf(dd.name) && this._glTF.extensionsRequired.push(dd.name)), (pd = this._glTF).extensions || (pd.extensions = {}), dd.onExporting && dd.onExporting())
        }))
      }
      _loadExtensions() {
        for (const dd of fp._ExtensionNames) {
          const Jd = fp._ExtensionFactories[dd](this);
          this._extensions[dd] = Jd
        }
      }
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Od.d.LastCreatedScene,
          Jd = arguments.length > 1 ? arguments[1] : void 0;
        if (this._glTF = {
            asset: {
              generator: `Babylon.js v${Ld.b.Version}`,
              version: "2.0"
            }
          }, this._animations = [], this._accessors = [], this._bufferViews = [], this._cameras = [], this._images = [], this._materials = [], this._meshes = [], this._nodes = [], this._samplers = [], this._scenes = [], this._skins = [], this._textures = [], this._imageData = {}, this._shouldUseGlb = !1, this._materialExporter = new bk(this), this._extensions = {}, this._bufferManager = new Np, this._shouldExportNodeMap = new Map, this._nodeMap = new Map, this._animationGroupMap = new Map, this._materialMap = new Map, this._camerasMap = new Map, this._nodesCameraMap = new Map, this._skinMap = new Map, this._nodesSkinMap = new Map, this._materialNeedsUVsSet = new Set, !dd) throw new Error("No scene available to export");
        this._babylonScene = dd, this._options = {
          shouldExportNode: () => !0,
          shouldExportAnimation: () => !0,
          metadataSelector: dd => dd?.hY?.extras,
          animationSampleRate: 1 / 60,
          exportWithoutWaitingForScene: !1,
          exportUnusedUVs: !1,
          removeNoopRootNodes: !0,
          includeCoordinateSystemConversionNodes: !1,
          meshCompressionMethod: "None",
          khrInteractivity: void 0,
          ...Jd
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
      static RegisterExtension(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        fp.UnregisterExtension(dd) && Nd.Tools.Warn(`Extension with the name ${dd} already exists`), fp._ExtensionFactories[dd] = Jd;
        const pd = kd ?? 0;
        fp._ExtensionOrders[dd] = pd;
        let Wd = fp._ExtensionNames.length;
        for (let Nd = 0; Nd < fp._ExtensionNames.length; Nd++) {
          const dd = fp._ExtensionNames[Nd];
          if (pd < fp._ExtensionOrders[dd]) {
            Wd = Nd;
            break
          }
        }
        fp._ExtensionNames.splice(Wd, 0, dd)
      }
      static UnregisterExtension(dd) {
        if (!fp._ExtensionFactories[dd]) return !1;
        delete fp._ExtensionFactories[dd], delete fp._ExtensionOrders[dd];
        const Jd = fp._ExtensionNames.indexOf(dd);
        return -1 !== Jd && fp._ExtensionNames.splice(Jd, 1), !0
      }
      _generateJSON(dd, Jd, kd) {
        const pd = {
          byteLength: dd
        };
        return pd.byteLength && (this._glTF.buffers = [pd]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, this._glTF.BO = 0), this._cameras && this._cameras.length && (this._glTF.cameras = this._cameras), this._bufferViews && this._bufferViews.length && (this._glTF.bufferViews = this._bufferViews), this._accessors && this._accessors.length && (this._glTF.accessors = this._accessors), this._animations && this._animations.length && (this._glTF.animations = this._animations), this._materials && this._materials.length && (this._glTF.materials = this._materials), this._textures && this._textures.length && (this._glTF.textures = this._textures), this._samplers && this._samplers.length && (this._glTF.samplers = this._samplers), this._skins && this._skins.length && (this._glTF.skins = this._skins), this._images && this._images.length && (this._glTF.images = this._images), this._shouldUseGlb || (pd.uri = Jd + ".bin"), kd ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF)
      }
      async generateGLTFAsync(dd) {
        const Jd = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const kd = this._generateJSON(Jd.byteLength, dd, !0),
          pd = new Blob([Jd], {
            type: "application/octet-stream"
          }),
          Nd = dd + ".gltf",
          Wd = dd + ".bin",
          Pd = new Cd;
        if (Pd.files[Nd] = kd, Pd.files[Wd] = pd, this._imageData)
          for (const Zd in this._imageData) Pd.files[Zd] = this._imageData[Zd];
        return Pd
      }
      async _generateBinaryAsync() {
        return await this._exportSceneAsync(), await this._extensionsPreGenerateBinaryAsync(), this._bufferManager.generateBinary(this._bufferViews)
      }
      _getPadding(dd) {
        const Jd = dd % 4;
        return 0 === Jd ? Jd : 4 - Jd
      }
      async generateGLBAsync(dd) {
        this._shouldUseGlb = !0;
        const Jd = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const kd = this._generateJSON(Jd.byteLength),
          pd = dd + ".glb";
        let Nd, Wd = kd.length;
        if ("undefined" !== typeof TextEncoder) {
          Nd = (new TextEncoder).encode(kd), Wd = Nd.length
        }
        const Pd = this._getPadding(Wd),
          Zd = this._getPadding(Jd.byteLength),
          gd = 28 + Wd + Pd + Jd.byteLength + Zd,
          Kd = new kp(gd);
        if (Kd.writeUInt32(1179937895), Kd.writeUInt32(2), Kd.writeUInt32(gd), Kd.writeUInt32(Wd + Pd), Kd.writeUInt32(1313821514), Nd) Kd.writeTypedArray(Nd);
        else {
          const dd = "_".charCodeAt(0);
          for (let Jd = 0; Jd < Wd; ++Jd) {
            const pd = kd.charCodeAt(Jd);
            pd != kd.codePointAt(Jd) ? Kd.writeUInt8(dd) : Kd.writeUInt8(pd)
          }
        }
        for (let Cd = 0; Cd < Pd; ++Cd) Kd.writeUInt8(32);
        Kd.writeUInt32(Jd.byteLength + Zd), Kd.writeUInt32(5130562), Kd.writeTypedArray(Jd);
        for (let Cd = 0; Cd < Zd; ++Cd) Kd.writeUInt8(0);
        const od = new Cd;
        return od.files[pd] = new Blob([Kd.getOutputData()], {
          type: "application/octet-stream"
        }), od
      }
      _setNodeTransformation(dd, Jd, kd) {
        if (Jd.getPivotPoint().equalsWithEpsilon(Uk, Xk.e) || Nd.Tools.Warn("Pivot points are not supported in the glTF serializer"), !Jd.position.equalsWithEpsilon(Uk, Xk.e)) {
          const Nd = pd.TmpVectors.IL[0].Fs(Jd.position);
          kd && uk(Nd), dd.translation = Nd.spd()
        }
        Jd.fp.equalsWithEpsilon(Dk, Xk.e) || (dd.scale = Jd.fp.spd());
        const Wd = Jd.rotationQuaternion?.clone() || pd.Quaternion.FromEulerAngles(Jd.rotation.x, Jd.rotation.y, Jd.rotation.z);
        Wd.equalsWithEpsilon(yk, Xk.e) || (kd && tk(Wd), dd.rotation = Wd.normalize().spd())
      }
      _setCameraTransformation(dd, Jd, kd) {
        const Nd = pd.TmpVectors.IL[0],
          Wd = pd.TmpVectors.Quaternion[0],
          Pd = Jd.getWorldMatrix();
        if (Jd.parent) {
          const dd = Jd.parent.getWorldMatrix().invertToRef(pd.TmpVectors.Matrix[0]);
          Pd.multiplyToRef(dd, pd.TmpVectors.Matrix[1]).decompose(void 0, Wd, Nd)
        } else Pd.decompose(void 0, Wd, Nd);
        Nd.equalsWithEpsilon(Uk, Xk.e) || (kd && uk(Nd), dd.translation = Nd.spd()), kd && tk(Wd), this._babylonScene.useRightHandedSystem || Vk(Wd), Wd.equalsWithEpsilon(yk, Xk.e) || (dd.rotation = Wd.spd())
      }
      _listAvailableCameras() {
        for (const dd of this._babylonScene.cameras) {
          const Jd = {
            type: dd.mode === Wp.e.PERSPECTIVE_CAMERA ? "perspective" : "orthographic"
          };
          if (dd.name && (Jd.name = dd.name), "perspective" === Jd.type) Jd.perspective = {
            aspectRatio: dd.eL().getAspectRatio(dd),
            yfov: dd.fovMode === Wp.e.FOVMODE_VERTICAL_FIXED ? dd.fov : dd.fov * dd.eL().getAspectRatio(dd),
            znear: dd.minZ,
            zfar: dd.maxZ
          };
          else if ("orthographic" === Jd.type) {
            const kd = dd.orthoLeft && dd.orthoRight ? .5 * (dd.orthoRight - dd.orthoLeft) : .5 * dd.eL().getRenderWidth(),
              pd = dd.orthoBottom && dd.orthoTop ? .5 * (dd.orthoTop - dd.orthoBottom) : .5 * dd.eL().getRenderHeight();
            Jd.orthographic = {
              xmag: kd,
              ymag: pd,
              znear: dd.minZ,
              zfar: dd.maxZ
            }
          }
          this._camerasMap.set(dd, Jd)
        }
      }
      _exportAndAssignCameras() {
        const dd = Array.from(this._camerasMap.values());
        for (const Jd of dd) {
          const dd = this._nodesCameraMap.get(Jd);
          if (void 0 !== dd) {
            this._cameras.push(Jd);
            for (const Jd of dd) Jd.camera = this._cameras.length - 1
          }
        }
      }
      _listAvailableSkeletons() {
        for (const dd of this._babylonScene.skeletons) {
          if (dd.bones.length <= 0) continue;
          const Jd = {
            joints: []
          };
          this._skinMap.set(dd, Jd)
        }
      }
      _exportAndAssignSkeletons(dd) {
        for (const kd of this._babylonScene.skeletons) {
          if (kd.bones.length <= 0) continue;
          const Wd = this._skinMap.get(kd);
          if (void 0 == Wd) continue;
          const Pd = {};
          let Zd = -1;
          for (let dd = 0; dd < kd.bones.length; ++dd) {
            const Jd = kd.bones[dd],
              pd = Jd.getIndex() ?? dd; - 1 !== pd && (Pd[pd] = Jd, pd > Zd && (Zd = pd))
          }
          const gd = [];
          for (let kd = 0; kd <= Zd; ++kd) {
            const Zd = Pd[kd],
              Cd = Zd.getTransformNode(),
              Kd = Cd ? this._nodeMap.get(Cd) : void 0;
            if (void 0 === Kd) {
              Nd.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported.");
              continue
            }
            Wd.joints.push(Kd);
            const od = Zd.getAbsoluteInverseBindMatrix().clone();
            dd.has(Cd) && (Jd = od, fk.invertToRef(pd.TmpVectors.Matrix[0]).multiplyToRef(Jd, Jd).multiplyToRef(fk, Jd)), gd.push(od)
          }
          const Cd = this._nodesSkinMap.get(Wd);
          if (Wd.joints.length > 0 && void 0 !== Cd) {
            const dd = new Float32Array(16 * gd.length);
            gd.forEach(((Jd, kd) => {
              dd.set(Jd.m, 16 * kd)
            }));
            const Jd = this._bufferManager.createBufferView(dd);
            this._accessors.push(this._bufferManager.createAccessor(Jd, "MAT4", 5126, gd.length)), Wd.inverseBindMatrices = this._accessors.length - 1, this._skins.push(Wd);
            const kd = this._skins.length - 1;
            for (const pd of Cd) pd.skin = kd
          }
        }
        var Jd
      }
      async _exportSceneAsync() {
        const dd = {
          nodes: []
        };
        if (this._babylonScene.metadata) {
          const Jd = this._options.metadataSelector(this._babylonScene.metadata);
          Jd && (dd.extras = Jd)
        }
        const Jd = new Array,
          kd = new Array,
          pd = new Array,
          Nd = this._options.removeNoopRootNodes && !this._options.khrInteractivity;
        let Wd;
        if (Nd && !this._options.includeCoordinateSystemConversionNodes)
          for (const Cd of this._babylonScene.animationGroups)
            for (const dd of Cd.targetedAnimations) {
              const Jd = dd.target;
              Jd instanceof od.e && !Jd.parent && (Wd ?? (Wd = new Set)).add(Jd)
            }
        for (const Cd of this._babylonScene.rootNodes) {
          const dd = Cd.animations,
            Pd = !!dd && dd.length > 0 || Wd?.has(Cd);
          Nd && !this._options.includeCoordinateSystemConversionNodes && nk(Cd, this._babylonScene.useRightHandedSystem) && !Pd ? pd.push(...Cd.getChildren()) : this._babylonScene.useRightHandedSystem ? Jd.push(Cd) : kd.push(Cd)
        }
        this._listAvailableCameras(), this._listAvailableSkeletons();
        const Pd = new Xp(!0, !1);
        dd.nodes.push(...await this._exportNodesAsync(kd, Pd));
        const Zd = new Xp(!1, !1);
        dd.nodes.push(...await this._exportNodesAsync(Jd, Zd));
        const gd = new Xp(!1, !0);
        dd.nodes.push(...await this._exportNodesAsync(pd, gd)), dd.nodes.length && this._scenes.push(dd), this._exportAndAssignCameras(), this._exportAndAssignSkeletons(Pd.getNodesSet()), this._babylonScene.animationGroups.length && Qp._CreateNodeAndMorphAnimationFromAnimationGroups(this._babylonScene, this._animations, this._nodeMap, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, Pd.getNodesSet(), this._options.shouldExportAnimation, this._animationGroupMap)
      }
      _getNodeIndex(dd) {
        return this._nodeMap.get(dd)
      }
      _getAnimationIndex(dd) {
        return this._animationGroupMap.get(dd)
      }
      _getCameraIndex(dd) {
        const Jd = this._camerasMap.get(dd);
        if (!Jd) return;
        const kd = this._cameras.indexOf(Jd);
        return kd >= 0 ? kd : void 0
      }
      _getMaterialIndex(dd) {
        return this._materialMap.get(dd)
      }
      _getRootIndex(dd, Jd) {
        switch (dd) {
          case "nodes":
            return this._getNodeIndex(Jd);
          case "animations":
            return this._getAnimationIndex(Jd);
          case "cameras":
            return this._getCameraIndex(Jd);
          case "materials":
            return this._getMaterialIndex(Jd);
          case "meshes": {
            const dd = this._getNodeIndex(Jd);
            return void 0 === dd ? void 0 : this._nodes[dd]?.mesh
          }
          case "textures":
            return this._materialExporter.getTextureInfo(Jd)?.index;
          case "images": {
            const dd = this._materialExporter.getTextureInfo(Jd)?.index;
            if (void 0 === dd) return;
            const kd = this._textures[dd];
            for (const Jd of ["KHR_texture_basisu", "EXT_texture_webp", "EXT_texture_avif"]) {
              const dd = kd?.extensions?.[Jd]?.source;
              if ("number" === typeof dd) return dd
            }
            return kd?.source
          }
          case "samplers": {
            const dd = this._materialExporter.getTextureInfo(Jd)?.index;
            return void 0 === dd ? void 0 : this._textures[dd]?.sampler
          }
          case "skins": {
            const dd = this._skinMap.get(Jd),
              kd = dd ? this._skins.indexOf(dd) : -1;
            return kd >= 0 ? kd : void 0
          }
          case "scenes":
            return Jd === this._babylonScene && this._scenes.length > 0 ? 0 : void 0
        }
      }
      _setNodeExtension(dd, Jd, kd) {
        const pd = this._nodes[dd];
        if (!pd) throw new Error(`Cannot write ${Jd}: glTF node ${dd} does not exist.`);
        pd.extensions || (pd.extensions = {}), pd.extensions[Jd] = kd
      }
      _shouldExportNode(dd) {
        let Jd = this._shouldExportNodeMap.get(dd);
        return void 0 === Jd && (Jd = this._options.shouldExportNode(dd), this._shouldExportNodeMap.set(dd, Jd)), Jd
      }
      async _exportNodesAsync(dd, Jd) {
        const kd = new Array;
        this._exportBuffers(dd, Jd);
        for (const pd of dd) await this._exportNodeAsync(pd, kd, Jd);
        return kd
      }
      _collectBuffers(dd, Jd, kd, pd, Nd) {
        if (this._shouldExportNode(dd) && dd instanceof ld.b && dd.geometry) {
          const Wd = dd.geometry.getVertexBuffers();
          if (Wd)
            for (const pd in Wd) {
              if (!hk(pd)) continue;
              const Pd = Wd[pd];
              Nd.setHasVertexColorAlpha(Pd, dd.hasVertexAlpha);
              const Zd = Pd._buffer,
                gd = Jd.get(Zd) || [];
              Jd.set(Zd, gd), -1 === gd.indexOf(Pd) && gd.push(Pd);
              const Cd = kd.get(Pd) || [];
              kd.set(Pd, Cd), -1 === Cd.indexOf(dd) && Cd.push(dd)
            }
          const Pd = dd.morphTargetManager;
          if (Pd)
            for (let Jd = 0; Jd < Pd.numTargets; Jd++) {
              const kd = Pd.getTarget(Jd),
                Nd = pd.get(kd) || [];
              pd.set(kd, Nd), -1 === Nd.indexOf(dd) && Nd.push(dd)
            }
        }
        for (const Wd of dd.getChildren()) this._collectBuffers(Wd, Jd, kd, pd, Nd)
      }
      _exportBuffers(dd, Jd) {
        const kd = new Map,
          pd = new Map,
          Nd = new Map;
        for (const Zd of dd) this._collectBuffers(Zd, kd, pd, Nd, Jd);
        const Wd = Array.from(kd.keys());
        for (const Zd of Wd) {
          const dd = Zd.getData();
          if (!dd) throw new Error("Buffer data is not available");
          const Nd = kd.get(Zd);
          if (!Nd) continue;
          const Wd = Nd[0].byteStride;
          if (Nd.some((dd => dd.byteStride !== Wd))) throw new Error("Vertex buffers pointing to the same buffer must have the same byte stride");
          const Pd = wk(dd).slice();
          for (const Jd of Nd) {
            const dd = pd.get(Jd),
              {
                byteOffset: kd,
                byteStride: Nd,
                componentCount: Wd,
                type: Zd,
                count: gd,
                normalized: Cd,
                kind: od
              } = Ek(Jd, dd);
            switch (od) {
              case Kd.f.NormalKind:
              case Kd.f.TangentKind:
                (0, Sk.h)(Pd, kd, Nd, Wd, Zd, gd, Cd, (dd => {
                  const Jd = Math.sqrt(dd[0] * dd[0] + dd[1] * dd[1] + dd[2] * dd[2]);
                  if (Jd > 0) {
                    const kd = 1 / Jd;
                    dd[0] *= kd, dd[1] *= kd, dd[2] *= kd
                  }
                }));
                break;
              case Kd.f.ColorKind: {
                const Jd = dd.filter((dd => dd.material instanceof Zp.StandardMaterial || null == dd.material)).length;
                if (0 == Jd) break;
                if (Jd != dd.length) {
                  Fd.c.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
                  break
                }
                Zd == Kd.f.UNSIGNED_BYTE && Fd.c.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
                const pd = new ed.Color3,
                  od = new ed.c,
                  ld = this._babylonScene.eL().useExactSrgbConversions;
                (0, Sk.h)(Pd, kd, Nd, Wd, Zd, gd, Cd, (dd => {
                  3 === dd.length ? (pd.lkd(dd, 0), pd.toLinearSpaceToRef(pd, ld), pd.toArray(dd, 0)) : (od.lkd(dd, 0), od.toLinearSpaceToRef(od, ld), od.toArray(dd, 0))
                }))
              }
            }
          }
          if (Jd.convertToRightHanded) {
            for (const dd of Nd) {
              const Jd = pd.get(dd),
                {
                  byteOffset: kd,
                  byteStride: Nd,
                  componentCount: Wd,
                  type: Zd,
                  count: gd,
                  normalized: Cd,
                  kind: od
                } = Ek(dd, Jd);
              switch (od) {
                case Kd.f.PositionKind:
                case Kd.f.NormalKind:
                case Kd.f.TangentKind:
                  (0, Sk.h)(Pd, kd, Nd, Wd, Zd, gd, Cd, (dd => {
                    dd[0] = -dd[0]
                  }))
              }
            }
            Jd.convertedToRightHandedBuffers.set(Zd, Pd)
          }
          const gd = this._bufferManager.createBufferView(Pd, Wd);
          Jd.setVertexBufferView(Zd, gd);
          const Cd = new Map;
          for (const Jd of Nd) {
            const dd = pd.get(Jd),
              {
                kind: kd,
                totalVertices: Nd
              } = Ek(Jd, dd);
            switch (kd) {
              case Kd.f.MatricesIndicesKind:
              case Kd.f.MatricesIndicesExtraKind:
                if (Jd.type == Kd.f.FLOAT) {
                  const dd = Jd.getFloatData(Nd);
                  null !== dd && Cd.set(Jd, dd)
                }
            }
          }
          0 !== Cd.size && Fd.c.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
          const od = Array.from(Cd.keys());
          for (const kd of od) {
            const dd = Cd.get(kd);
            if (!dd) continue;
            const pd = dd.some((dd => dd >= 256)),
              Nd = new(pd ? Uint16Array : Uint8Array)(dd.length);
            for (let Jd = 0; Jd < dd.length; Jd++) Nd[Jd] = dd[Jd];
            const Wd = this._bufferManager.createBufferView(Nd, 4 * (pd ? 2 : 1));
            Jd.setRemappedBufferView(Zd, kd, Wd)
          }
        }
        const Pd = Array.from(Nd.keys());
        for (const Zd of Pd) {
          const dd = Nd.get(Zd);
          if (!dd) continue;
          const kd = Lp(Zd, dd[0], this._bufferManager, this._bufferViews, this._accessors, Jd.convertToRightHanded);
          for (const pd of dd) Jd.bindMorphDataToMesh(pd, kd)
        }
      }
      async _exportNodeAsync(dd, Jd, kd) {
        let pd = this._nodeMap.get(dd);
        if (void 0 !== pd) return void(Jd.includes(pd) || Jd.push(pd));
        const Nd = await this._createNodeAsync(dd, kd);
        if (Nd) {
          pd = this._nodes.length, this._nodes.push(Nd), this._nodeMap.set(dd, pd), kd.pushExportedNode(dd), Jd.push(pd);
          const Wd = {
              name: "runtime animations",
              channels: [],
              samplers: []
            },
            Pd = [];
          this._babylonScene.animationGroups.length || (Qp._CreateMorphTargetAnimationFromMorphTargetAnimations(dd, Wd, Pd, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, kd.convertToRightHanded, this._options.shouldExportAnimation), dd.animations.length && Qp._CreateNodeAnimationFromNodeAnimations(dd, Wd, Pd, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, kd.convertToRightHanded, this._options.shouldExportAnimation)), Wd.channels.length && Wd.samplers.length && this._animations.push(Wd), Pd.forEach((dd => {
            dd.channels.length && dd.samplers.length && this._animations.push(dd)
          }))
        }
        const Wd = Nd ? [] : Jd;
        for (const Pd of dd.getChildren()) await this._exportNodeAsync(Pd, Wd, kd);
        Nd && Wd.length && (Nd.children = Wd)
      }
      async _createNodeAsync(dd, Jd) {
        if (!this._shouldExportNode(dd)) return null;
        const kd = {};
        if (dd.name && (kd.name = dd.name), dd.metadata) {
          const Jd = this._options.metadataSelector(dd.metadata);
          Jd && (kd.extras = Jd)
        }
        if (dd instanceof od.e && (this._setNodeTransformation(kd, dd, Jd.convertToRightHanded), dd instanceof ld.b)) {
          const pd = dd instanceof Qd.e ? dd.RNd : dd;
          if (pd.rG && pd.rG.length > 0 && (kd.mesh = await this._exportMeshAsync(pd, Jd)), dd.skeleton) {
            const Jd = this._skinMap.get(dd.skeleton);
            void 0 !== Jd && (void 0 === this._nodesSkinMap.get(Jd) && this._nodesSkinMap.set(Jd, []), this._nodesSkinMap.get(Jd)?.push(kd))
          }
        }
        if (dd instanceof jk.d) {
          const pd = this._camerasMap.get(dd);
          if (pd) {
            void 0 === this._nodesCameraMap.get(pd) && this._nodesCameraMap.set(pd, []), this._setCameraTransformation(kd, dd, Jd.convertToRightHanded);
            const Nd = dd.parent;
            if (null !== Nd && Hk(dd, Nd)) {
              const dd = this._nodeMap.get(Nd);
              if (void 0 !== dd) {
                const Jd = this._nodes[dd];
                return zk(kd, Jd), this._nodesCameraMap.get(pd)?.push(Jd), null
              }
            }
            this._nodesCameraMap.get(pd)?.push(kd)
          }
        }
        return await this._extensionsPostExportNodeAsync("exportNodeAsync", kd, dd, this._nodeMap, Jd.convertToRightHanded) ? kd : (Fd.c.Warn(`Not exporting node ${dd.name}`), null)
      }
      _exportIndices(dd, Jd, kd, pd, Nd, Pd, Zd, gd, Cd) {
        let Kd = null;
        Cd.mode = function(dd) {
          switch (dd) {
            case Wd.b.TriangleFillMode:
              return 4;
            case Wd.b.TriangleStripDrawMode:
              return 5;
            case Wd.b.TriangleFanDrawMode:
              return 6;
            case Wd.b.PointListDrawMode:
            case Wd.b.PointFillMode:
              return 0;
            case Wd.b.LineLoopDrawMode:
              return 2;
            case Wd.b.LineListDrawMode:
              return 1;
            case Wd.b.LineStripDrawMode:
              return 3
          }
          throw new Error(`Unknown fill mode: ${dd}`)
        }(Pd);
        const od = Zd !== Wd.b.CounterClockWiseSideOrientation && function(dd) {
          switch (dd) {
            case Wd.b.TriangleFillMode:
            case Wd.b.TriangleStripDrawMode:
            case Wd.b.TriangleFanDrawMode:
              return !0
          }
          return !1
        }(Pd);
        if (od) {
          if (Pd === Wd.b.TriangleStripDrawMode || Pd === Wd.b.TriangleFanDrawMode) throw new Error("Triangle strip/fan fill mode is not implemented");
          const Zd = Jd ? new Uint32Array(pd) : new Uint16Array(pd);
          if (dd)
            for (let Jd = 0; Jd + 2 < pd; Jd += 3) Zd[Jd] = dd[kd + Jd] + Nd, Zd[Jd + 1] = dd[kd + Jd + 2] + Nd, Zd[Jd + 2] = dd[kd + Jd + 1] + Nd;
          else
            for (let dd = 0; dd + 2 < pd; dd += 3) Zd[dd] = dd, Zd[dd + 1] = dd + 2, Zd[dd + 2] = dd + 1;
          Kd = Zd
        } else if (dd && 0 !== Nd) {
          const Wd = Jd ? new Uint32Array(pd) : new Uint16Array(pd);
          for (let Jd = 0; Jd < pd; Jd++) Wd[Jd] = dd[kd + Jd] + Nd;
          Kd = Wd
        } else dd && (Kd = function(dd, Jd, kd, pd) {
          let Nd = dd;
          return 0 === Jd && kd === dd.length || (Nd = Array.isArray(dd) ? dd.slice(Jd, Jd + kd) : dd.subarray(Jd, Jd + kd)), Nd instanceof Int32Array ? new Uint32Array(Nd.buffer, Nd.byteOffset, Nd.length) : Array.isArray(Nd) ? pd ? new Uint32Array(Nd) : new Uint16Array(Nd) : Nd
        }(dd, kd, pd, Jd));
        if (Kd) {
          let Wd = gd.getIndicesAccessor(dd, kd, pd, Nd, od);
          if (void 0 === Wd) {
            const Pd = this._bufferManager.createBufferView(Kd),
              Zd = Jd ? 5125 : 5123;
            this._accessors.push(this._bufferManager.createAccessor(Pd, "SCALAR", Zd, pd, 0)), Wd = this._accessors.length - 1, gd.setIndicesAccessor(dd, kd, pd, Nd, od, Wd)
          }
          Cd.indices = Wd
        }
      }
      _exportVertexBuffer(dd, Jd, kd, pd, Nd, Wd) {
        const Pd = dd.getKind();
        if (!hk(Pd)) return;
        if (Pd.startsWith("uv") && !this._options.exportUnusedUVs && (!Jd || !this._materialNeedsUVsSet.has(Jd))) return;
        let Zd = Nd.getVertexAccessor(dd, kd, pd);
        if (void 0 === Zd) {
          const Jd = Nd.convertedToRightHandedBuffers.get(dd._buffer) || dd._buffer.getData(),
            Wd = Pd === Kd.f.PositionKind ? function(dd, Jd, kd, pd) {
              const {
                byteOffset: Nd,
                byteStride: Wd,
                type: Pd,
                normalized: Zd
              } = Jd, gd = Jd.getSize(), Cd = new Array(gd).fill(1 / 0), Kd = new Array(gd).fill(-1 / 0);
              return (0, Sk.h)(dd, Nd + kd * Wd, Wd, gd, Pd, pd * gd, Zd, (dd => {
                for (let Jd = 0; Jd < gd; Jd++) Cd[Jd] = Math.min(Cd[Jd], dd[Jd]), Kd[Jd] = Math.max(Kd[Jd], dd[Jd])
              })), {
                min: Cd,
                max: Kd
              }
            }(Jd, dd, kd, pd) : void 0,
            gd = (Pd === Kd.f.MatricesIndicesKind || Pd === Kd.f.MatricesIndicesExtraKind) && dd.type === Kd.f.FLOAT,
            Cd = gd ? Kd.f.UNSIGNED_BYTE : dd.type,
            od = gd ? void 0 : dd.normalized,
            ld = gd ? Nd.getRemappedBufferView(dd._buffer, dd) : Nd.getVertexBufferView(dd._buffer),
            Qd = dd.byteOffset + kd * dd.byteStride;
          this._accessors.push(this._bufferManager.createAccessor(ld, function(dd, Jd) {
            if (dd == Kd.f.ColorKind) return Jd ? "VEC4" : "VEC3";
            switch (dd) {
              case Kd.f.PositionKind:
              case Kd.f.NormalKind:
                return "VEC3";
              case Kd.f.TangentKind:
              case Kd.f.MatricesIndicesKind:
              case Kd.f.MatricesIndicesExtraKind:
              case Kd.f.MatricesWeightsKind:
              case Kd.f.MatricesWeightsExtraKind:
                return "VEC4";
              case Kd.f.UVKind:
              case Kd.f.UV2Kind:
              case Kd.f.UV3Kind:
              case Kd.f.UV4Kind:
              case Kd.f.UV5Kind:
              case Kd.f.UV6Kind:
                return "VEC2"
            }
            throw new Error(`Unknown kind ${dd}`)
          }(Pd, Nd.hasVertexColorAlpha(dd)), Cd, pd, Qd, Wd, od)), Zd = this._accessors.length - 1, Nd.setVertexAccessor(dd, kd, pd, Zd)
        }
        Wd.attributes[function(dd) {
          switch (dd) {
            case Kd.f.PositionKind:
              return "POSITION";
            case Kd.f.NormalKind:
              return "NORMAL";
            case Kd.f.TangentKind:
              return "TANGENT";
            case Kd.f.ColorKind:
              return "COLOR_0";
            case Kd.f.UVKind:
              return "TEXCOORD_0";
            case Kd.f.UV2Kind:
              return "TEXCOORD_1";
            case Kd.f.UV3Kind:
              return "TEXCOORD_2";
            case Kd.f.UV4Kind:
              return "TEXCOORD_3";
            case Kd.f.UV5Kind:
              return "TEXCOORD_4";
            case Kd.f.UV6Kind:
              return "TEXCOORD_5";
            case Kd.f.MatricesIndicesKind:
              return "JOINTS_0";
            case Kd.f.MatricesIndicesExtraKind:
              return "JOINTS_1";
            case Kd.f.MatricesWeightsKind:
              return "WEIGHTS_0";
            case Kd.f.MatricesWeightsExtraKind:
              return "WEIGHTS_1"
          }
          throw new Error(`Unknown kind: ${dd}`)
        }(Pd)] = Zd
      }
      async _exportMaterialAsync(dd, Jd, kd, pd) {
        let Nd = this._materialMap.get(dd);
        if (void 0 === Nd) {
          const pd = Jd && Object.keys(Jd).some((dd => dd.startsWith("uv")));
          if ((dd = dd instanceof Pp.e ? dd.f6[kd.materialIndex] : dd) instanceof BJ) Nd = await this._materialExporter.exportPBRMaterialAsync(dd, pd);
          else if (dd instanceof Zp.StandardMaterial) Nd = await this._materialExporter.exportStandardMaterialAsync(dd, pd);
          else {
            if (!(dd instanceof AJ)) return void Fd.c.Warn(`Unsupported material '${dd.name}' with type ${dd.getClassName()}`);
            Nd = await this._materialExporter.exportOpenPBRMaterialAsync(dd, pd)
          }
          this._materialMap.set(dd, Nd)
        }
        pd.material = Nd
      }
      async _exportMeshAsync(dd, Jd) {
        let kd = Jd.getMesh(dd);
        if (void 0 !== kd) return kd;
        const pd = {
          primitives: []
        };
        kd = this._meshes.length, this._meshes.push(pd), Jd.setMesh(dd, kd);
        const Nd = dd.isUnIndexed ? null : dd.ipd(),
          Pd = dd.geometry?.getVertexBuffers(),
          Zd = Jd.getMorphTargetsFromMesh(dd),
          gd = dd instanceof Op.c,
          Cd = dd instanceof jp,
          Kd = dd.rG;
        if (Pd && Kd && Kd.length > 0)
          for (const od of Kd) {
            const kd = {
                attributes: {}
              },
              Kd = od.qL() || this._babylonScene.defaultMaterial;
            if (Cd) {
              const Jd = {
                  name: Kd.name
                },
                pd = dd,
                Nd = ed.Color3.White(),
                Wd = pd.material?.alpha ?? 1,
                Pd = pd.greasedLineMaterial?.color ?? Nd;
              (!Pd.equalsWithEpsilon(Nd, Xk.e) || Wd < 1) && (Jd.pbrMetallicRoughness = {
                baseColorFactor: [...Pd.spd(), Wd]
              }), this._materials.push(Jd), kd.material = this._materials.length - 1
            } else if (gd) {
              const Jd = {
                  name: Kd.name
                },
                pd = dd;
              (!pd.color.equalsWithEpsilon(ed.Color3.White(), Xk.e) || pd.alpha < 1) && (Jd.pbrMetallicRoughness = {
                baseColorFactor: [...pd.color.spd(), pd.alpha]
              }), this._materials.push(Jd), kd.material = this._materials.length - 1
            } else await this._exportMaterialAsync(Kd, Pd, od, kd);
            const ld = gd || Cd ? Wd.b.LineListDrawMode : dd.overrideRenderingFillMode ?? Kd.fillMode;
            let Qd = Kd._getEffectiveOrientation(dd);
            Jd.wasAddedByNoopNode && !dd.Wm().useRightHandedSystem && (Qd = Qd === Wd.b.ClockWiseSideOrientation ? Wd.b.CounterClockWiseSideOrientation : Wd.b.ClockWiseSideOrientation), this._exportIndices(Nd, Nd ? (0, Sk.d)(Nd, od.indexCount, od.indexStart, od.verticesStart) : od.verticesCount > 65535, Nd ? od.indexStart : od.verticesStart, Nd ? od.indexCount : od.verticesCount, -od.verticesStart, ld, Qd, Jd, kd);
            for (const dd of Object.values(Pd)) this._exportVertexBuffer(dd, Kd, od.verticesStart, od.verticesCount, Jd, kd);
            if (Zd) {
              kd.targets = [];
              for (const dd of Zd) kd.targets.push(dd.attributes)
            }
            pd.primitives.push(kd), this._extensionsPostExportMeshPrimitive(kd)
          }
        if (Zd) {
          pd.weights = [], pd.extras || (pd.extras = {}), pd.extras.targetNames = [];
          for (const dd of Zd) pd.weights.push(dd.influence), pd.extras.targetNames.push(dd.name)
        }
        return kd
      }
    }
    fp._ExtensionNames = new Array, fp._ExtensionFactories = {}, fp._ExtensionOrders = {};
    class np {
      static async GLTFAsync(dd, Jd, kd) {
        kd && kd.exportWithoutWaitingForScene || await dd.whenReadyAsync();
        const pd = new fp(dd, kd),
          Nd = await pd.generateGLTFAsync(Jd.replace(/\.[^/.]+$/, ""));
        return pd.dispose(), Nd
      }
      static async GLBAsync(dd, Jd, kd) {
        kd && kd.exportWithoutWaitingForScene || await dd.whenReadyAsync();
        const pd = new fp(dd, kd),
          Nd = await pd.generateGLBAsync(Jd.replace(/\.[^/.]+$/, ""));
        return pd.dispose(), Nd
      }
    }
    const Up = "EXT_mesh_gpu_instancing";

    function yp(dd, Jd) {
      const kd = new Float32Array(3 * Jd);
      for (let pd = 0; pd < Jd; pd++) kd[3 * pd + 0] = dd[4 * pd + 0], kd[3 * pd + 1] = dd[4 * pd + 1], kd[3 * pd + 2] = dd[4 * pd + 2];
      return kd
    }
    class Dp {
      constructor(dd) {
        this.name = Up, this.enabled = !0, this.required = !1, this._instanceColorWarned = !1, this._wasUsed = !1, this._exporter = dd
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportNodeAsync(dd, Jd, kd, pd, Nd, Wd) {
        return await new Promise((dd => {
          if (Jd && kd instanceof sp.b && kd.hasThinInstances && this._exporter) {
            this._wasUsed = !0;
            const dd = yd.n.Zero(),
              pd = yd.d.Identity(),
              Pd = yd.n.One(),
              Zd = kd.thinInstanceGetWorldMatrices(),
              gd = yd.h.IL[2],
              Cd = yd.h.Quaternion[1],
              Kd = yd.h.IL[3];
            let od = !1,
              ld = !1,
              Qd = !1;
            const Ld = new Float32Array(3 * kd.W8),
              Od = new Float32Array(4 * kd.W8),
              ed = new Float32Array(3 * kd.W8);
            let Rd = 0;
            for (const Jd of Zd) Jd.decompose(Kd, Cd, gd), Nd && (uk(gd), tk(Cd)), Ld.set(gd.spd(), 3 * Rd), Od.set(Cd.normalize().spd(), 4 * Rd), ed.set(Kd.spd(), 3 * Rd), od = od || !gd.equalsWithEpsilon(dd), ld = ld || !Cd.equalsWithEpsilon(pd), Qd = Qd || !Kd.equalsWithEpsilon(Pd), Rd++;
            const Id = {
              attributes: {}
            };
            od && (Id.attributes.TRANSLATION = this._buildAccessor(Ld, "VEC3", kd.W8, Wd)), ld && (Id.attributes.ROTATION = this._buildAccessor(Od, "VEC4", kd.W8, Wd)), Qd && (Id.attributes.SCALE = this._buildAccessor(ed, "VEC3", kd.W8, Wd));
            let Gd = kd._userThinInstanceBuffersStorage?.data?.instanceColor;
            if (Gd) {
              const dd = kd.W8,
                Jd = "VEC3";
              kd.hasVertexAlpha && Gd.length === 4 * dd ? (this._instanceColorWarned || (Fd.c.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), Gd = yp(Gd, dd)) : Gd.length === 4 * dd && (Gd = yp(Gd, dd)), Gd.length === 3 * dd && (Id.attributes._COLOR_0 = this._buildAccessor(Gd, Jd, dd, Wd))
            }
            Jd.extensions = Jd.extensions || {}, Jd.extensions[Up] = Id
          }
          dd(Jd)
        }))
      }
      _buildAccessor(dd, Jd, kd, pd) {
        const Nd = pd.createBufferView(dd),
          Wd = pd.createAccessor(Nd, Jd, 5126, kd);
        return this._exporter._accessors.push(Wd), this._exporter._accessors.length - 1
      }
    }
    let Tp = !1;

    function Ep() {
      Tp || (Tp = !0, fp.RegisterExtension(Up, (dd => new Dp(dd))))
    }
    kd(40475);
    Ep();
    var cp = kd(41811);

    function hp(dd, Jd, kd, pd) {
      const Nd = dd;
      let Wd = null,
        Pd = null,
        Zd = null,
        gd = null;
      const Cd = {},
        Kd = Jd.find((dd => "POSITION" === dd.dracoName));
      if (!Kd) throw new Error("Draco: Missing position attribute for encoding.");
      if (!kd) {
        const dd = Kd.data.length / Kd.size;
        kd = new(dd > 65535 ? Uint32Array : Uint16Array)(dd);
        for (let Jd = 0; Jd < dd; Jd++) kd[Jd] = Jd
      }
      try {
        Wd = new Nd.Encoder, Pd = new Nd.MeshBuilder, Zd = new Nd.Mesh, Pd.AddFacesToMesh(Zd, kd.length / 3, kd);
        const dd = new Map([
          [Float32Array, (dd, Jd, kd, pd, Nd, Wd) => dd.AddFloatAttribute(Jd, kd, pd, Nd, Wd)],
          [Uint32Array, (dd, Jd, kd, pd, Nd, Wd) => dd.AddUInt32Attribute(Jd, kd, pd, Nd, Wd)],
          [Uint16Array, (dd, Jd, kd, pd, Nd, Wd) => dd.AddUInt16Attribute(Jd, kd, pd, Nd, Wd)],
          [Uint8Array, (dd, Jd, kd, pd, Nd, Wd) => dd.AddUInt8Attribute(Jd, kd, pd, Nd, Wd)],
          [Int32Array, (dd, Jd, kd, pd, Nd, Wd) => dd.AddInt32Attribute(Jd, kd, pd, Nd, Wd)],
          [Int16Array, (dd, Jd, kd, pd, Nd, Wd) => dd.AddInt16Attribute(Jd, kd, pd, Nd, Wd)],
          [Int8Array, (dd, Jd, kd, pd, Nd, Wd) => dd.AddInt8Attribute(Jd, kd, pd, Nd, Wd)]
        ]);
        for (const kd of Jd) {
          kd.data instanceof Uint8ClampedArray && (kd.data = new Uint8Array(kd.data));
          const Jd = dd.get(kd.data.constructor),
            gd = kd.data.length / kd.size;
          Cd[kd.kind] = Jd(Pd, Zd, Nd[kd.dracoName], gd, kd.size, kd.data), pd.quantizationBits && pd.quantizationBits[kd.dracoName] && Wd.SetAttributeQuantization(Nd[kd.dracoName], pd.quantizationBits[kd.dracoName])
        }
        pd.method && Wd.SetEncodingMethod(Nd[pd.method]), void 0 !== pd.encodeSpeed && void 0 !== pd.decodeSpeed && Wd.SetSpeedOptions(pd.encodeSpeed, pd.decodeSpeed), gd = new Nd.DracoInt8Array;
        const Kd = Wd.EncodeMeshToDracoBuffer(Zd, gd);
        if (Kd <= 0) throw new Error("Draco: Failed to encode.");
        const od = new Int8Array(Kd);
        for (let Jd = 0; Jd < Kd; Jd++) od[Jd] = gd.GetValue(Jd);
        return {
          data: od,
          attributeIds: Cd
        }
      } finally {
        Zd && Nd.destroy(Zd), Pd && Nd.destroy(Pd), Wd && Nd.destroy(Wd), gd && Nd.destroy(gd)
      }
    }

    function rp() {
      let dd;
      onmessage = Jd => {
        const kd = Jd.data;
        switch (kd.id) {
          case "init": {
            kd.url && importScripts(kd.url);
            const Jd = kd.wasmBinary ? {
              wasmBinary: kd.wasmBinary
            } : {};
            dd = DracoEncoderModule(Jd), postMessage({
              id: "initDone"
            });
            break
          }
          case "encodeMesh":
            if (!dd) throw new Error("Draco: Encoder module is not available.");
            dd.then((dd => {
              const Jd = hp(dd, kd.attributes, kd.indices, kd.options);
              postMessage({
                id: "encodeMeshSuccess",
                encodedMeshData: Jd
              }, Jd ? [Jd.data.buffer] : void 0)
            })).catch((dd => {
              postMessage({
                id: "encodeMeshError",
                errorMessage: dd.message
              })
            }))
        }
      }
    }
    class tp {
      constructor(dd) {
        if (dd.workerPool) return void(this._workerPoolPromise = Promise.resolve(dd.workerPool));
        const Jd = dd.wasmBinary,
          kd = dd.numWorkers ?? ("object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1),
          pd = kd && "function" === typeof Worker && "function" === typeof URL,
          Nd = pd || !dd.jsModule,
          Wd = dd.wasmUrl && dd.wasmBinaryUrl && "object" === typeof WebAssembly ? {
            url: Nd ? iJ.h.GetBabylonScriptURL(dd.wasmUrl, !0) : "",
            wasmBinaryPromise: Jd ? Promise.resolve(Jd) : iJ.h.LoadFileAsync(iJ.h.GetBabylonScriptURL(dd.wasmBinaryUrl, !0))
          } : {
            url: Nd ? iJ.h.GetBabylonScriptURL(dd.fallbackUrl) : "",
            wasmBinaryPromise: Promise.resolve(void 0)
          };
        pd ? this._workerPoolPromise = Wd.wasmBinaryPromise.then((dd => {
          const Jd = this._getWorkerContent(),
            pd = URL.createObjectURL(new Blob([Jd], {
              type: "application/javascript"
            }));
          return new cp.e(kd, (() => async function(dd, Jd, kd) {
            return await new Promise(((pd, Nd) => {
              const Wd = Jd => {
                  dd.removeEventListener("error", Wd), dd.removeEventListener("message", Pd), Nd(Jd)
                },
                Pd = Jd => {
                  "initDone" === Jd.data.id && (dd.removeEventListener("error", Wd), dd.removeEventListener("message", Pd), pd(dd))
                };
              if (dd.addEventListener("error", Wd), dd.addEventListener("message", Pd), Jd) {
                const pd = Jd.slice(0);
                dd.postMessage({
                  id: "init",
                  url: kd,
                  wasmBinary: pd
                }, [pd])
              } else dd.postMessage({
                id: "init",
                url: kd
              })
            }))
          }(new Worker(pd), dd, Wd.url)))
        })) : this._modulePromise = Wd.wasmBinaryPromise.then((async Jd => {
          if (!this._isModuleAvailable() && !dd.jsModule) {
            if (!Wd.url) throw new Error("Draco codec module is not available");
            await iJ.h.LoadBabylonScriptAsync(Wd.url)
          }
          return await this._createModuleAsync(Jd, dd.jsModule)
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

    function Vp() {
      const dd = dd => !!dd && "object" === typeof dd;
      for (var Jd = arguments.length, kd = new Array(Jd), pd = 0; pd < Jd; pd++) kd[pd] = arguments[pd];
      return kd.reduce(((Jd, kd) => {
        const pd = Object.keys(kd);
        for (const Nd of pd) {
          const pd = Jd[Nd],
            Wd = kd[Nd];
          Array.isArray(pd) && Array.isArray(Wd) ? Jd[Nd] = pd.concat(Wd) : dd(pd) && dd(Wd) ? Jd[Nd] = Vp(pd, Wd) : Jd[Nd] = Wd
        }
        return Jd
      }), {})
    }

    function zp(dd) {
      return dd === Dd.j.PositionKind ? "POSITION" : dd === Dd.j.NormalKind ? "NORMAL" : dd === Dd.j.ColorKind ? "COLOR" : dd.startsWith(Dd.j.UVKind) ? "TEX_COORD" : "GENERIC"
    }
    const Hp = {
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
    class wp extends tp {
      static get DefaultAvailable() {
        return !!((dd = wp.DefaultConfiguration).wasmUrl && (dd.wasmBinary || dd.wasmBinaryUrl) && "object" === typeof WebAssembly || dd.fallbackUrl);
        var dd
      }
      static get Default() {
        return wp._Default ?? (wp._Default = new wp), wp._Default
      }
      static ResetDefault(dd) {
        wp._Default && (dd || wp._Default.dispose(), wp._Default = null)
      }
      _isModuleAvailable() {
        return "undefined" !== typeof DracoEncoderModule
      }
      async _createModuleAsync(dd, Jd) {
        return {
          module: await (Jd || DracoEncoderModule)({
            wasmBinary: dd
          })
        }
      }
      _getWorkerContent() {
        return `${hp}(${rp})()`
      }
      constructor() {
        super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wp.DefaultConfiguration)
      }
      async _encodeAsync(dd, Jd, kd) {
        const pd = kd ? Vp(Hp, kd) : Hp;
        if (this._workerPoolPromise) {
          const kd = await this._workerPoolPromise;
          return await new Promise(((Nd, Wd) => {
            kd.push(((kd, Pd) => {
              const Zd = dd => {
                  kd.removeEventListener("error", Zd), kd.removeEventListener("message", gd), Wd(dd), Pd()
                },
                gd = dd => {
                  "encodeMeshSuccess" === dd.data.id ? (kd.removeEventListener("error", Zd), kd.removeEventListener("message", gd), Nd(dd.data.encodedMeshData), Pd()) : "encodeMeshError" === dd.data.id && (kd.removeEventListener("error", Zd), kd.removeEventListener("message", gd), Wd(new Error(dd.data.errorMessage)), Pd())
                };
              kd.addEventListener("error", Zd), kd.addEventListener("message", gd);
              const Cd = [];
              for (const Jd of dd) Cd.push(Jd.data.buffer);
              Jd && Cd.push(Jd.buffer), kd.postMessage({
                id: "encodeMesh",
                attributes: dd,
                indices: Jd,
                options: pd
              }, Cd)
            }))
          }))
        }
        if (this._modulePromise) {
          return hp((await this._modulePromise).module, dd, Jd, pd)
        }
        throw new Error("Draco: Encoder module is not available")
      }
      async encodeMeshAsync(dd, Jd) {
        if (0 == dd.getTotalVertices()) throw new Error("Draco: Cannot encode geometry with no vertices.");
        dd instanceof sp.b && dd.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === Jd?.method && (Fd.c.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), Jd.method = "MESH_SEQUENTIAL_ENCODING");
        const kd = function(dd) {
            let Jd = dd.ipd(void 0, !0);
            return !Jd || Jd instanceof Uint32Array || Jd instanceof Uint16Array || (Jd = ((0, Sk.d)(Jd, Jd.length) ? Uint32Array : Uint16Array).from(Jd)), Jd
          }(dd),
          pd = function(dd, Jd) {
            const kd = [];
            for (const pd of dd.getVerticesDataKinds()) {
              if (Jd?.includes(pd)) {
                if (pd === Dd.j.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
                continue
              }
              const Nd = dd.getVertexBuffer(pd),
                Wd = Nd.getSize(),
                Pd = (0, Sk.t)(Nd.getData(), Wd, Nd.type, Nd.byteOffset, Nd.byteStride, dd.getTotalVertices(), !0);
              kd.push({
                kind: pd,
                dracoName: zp(pd),
                size: Wd,
                data: Pd
              })
            }
            return kd
          }(dd, Jd?.excludedAttributes);
        return await this._encodeAsync(pd, kd, Jd)
      }
    }
    wp.DefaultConfiguration = {
      wasmUrl: `${iJ.h._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
      wasmBinaryUrl: `${iJ.h._DefaultCdnUrl}/draco_encoder.wasm`,
      fallbackUrl: `${iJ.h._DefaultCdnUrl}/draco_encoder.js`
    }, wp._Default = null;
    const Ap = "KHR_draco_mesh_compression";
    class dN {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(dd) {
        this.name = Ap, this.required = !0, this._bufferViewsUsed = new Set, this._accessorsUsed = new Set, this._encodePromises = [], this._wasUsed = !1, this.enabled = "Draco" === dd.options.meshCompressionMethod && wp.DefaultAvailable
      }
      dispose() {}
      postExportMeshPrimitive(dd, Jd, kd) {
        if (!this.enabled) return;
        if (4 !== dd.mode && 5 !== dd.mode) return void Fd.c.Warn("Cannot compress primitive with mode " + dd.mode + ".");
        const pd = [],
          Nd = [];
        let Wd = null;
        if (void 0 !== dd.indices) {
          const Pd = kd[dd.indices],
            Zd = Jd.getBufferView(Pd);
          Wd = Jd.getData(Zd).slice(), pd.push(Zd), Nd.push(Pd)
        }
        const Pd = [];
        for (const [Kd, od] of Object.entries(dd.attributes)) {
          const dd = kd[od],
            Wd = Jd.getBufferView(dd),
            gd = ck(dd.type),
            Cd = (0, Sk.t)(Jd.getData(Wd), gd, dd.componentType, dd.byteOffset || 0, Wd.byteStride || (0, Sk.q)(dd.componentType) * gd, dd.count, !0);
          Pd.push({
            kind: Kd,
            dracoName: (Zd = Kd, "POSITION" === Zd ? "POSITION" : "NORMAL" === Zd ? "NORMAL" : Zd.startsWith("COLOR") ? "COLOR" : Zd.startsWith("TEXCOORD") ? "TEX_COORD" : "GENERIC"),
            size: ck(dd.type),
            data: Cd
          }), pd.push(Wd), Nd.push(dd)
        }
        var Zd;
        const gd = {
            method: dd.targets ? "MESH_SEQUENTIAL_ENCODING" : "MESH_EDGEBREAKER_ENCODING"
          },
          Cd = wp.Default._encodeAsync(Pd, Wd, gd).then((kd => {
            const Wd = {
                bufferView: -1,
                attributes: kd.attributeIds
              },
              Pd = Jd.createBufferView(kd.data);
            Jd.setBufferView(Wd, Pd);
            for (const dd of pd) this._bufferViewsUsed.add(dd);
            for (const dd of Nd) this._accessorsUsed.add(dd);
            dd.extensions || (dd.extensions = {}), dd.extensions[Ap] = Wd
          })).catch((dd => {
            Fd.c.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + dd.message)
          }));
        this._encodePromises.push(Cd), this._wasUsed = !0
      }
      async preGenerateBinaryAsync(dd) {
        this.enabled && (await Promise.all(this._encodePromises), this._bufferViewsUsed.forEach((Jd => {
          dd.getPropertiesWithBufferView(Jd).every((dd => this._accessorsUsed.has(dd))) && dd.removeBufferView(Jd)
        })), this._bufferViewsUsed.clear(), this._accessorsUsed.clear())
      }
    }
    let JN = !1;

    function kN() {
      JN || (JN = !0, fp.RegisterExtension(Ap, (dd => new dN(dd))))
    }
    kN();
    var pN = kd(41547);
    const NN = "KHR_lights_punctual",
      WN = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        range: Number.MAX_VALUE
      },
      PN = {
        innerConeAngle: 0,
        outerConeAngle: Math.PI / 4
      },
      ZN = yd.n.Backward();
    class gN {
      constructor(dd) {
        this.name = NN, this.enabled = !0, this.required = !1, this._exporter = dd
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[NN] = this._lights
      }
      async postExportNodeAsync(dd, Jd, kd, pd, Nd) {
        return await new Promise((Wd => {
          if (!(kd instanceof lp.d)) return void Wd(Jd);
          const Pd = kd.getTypeID() == lp.d.LIGHTTYPEID_POINTLIGHT ? "point" : kd.getTypeID() == lp.d.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : kd.getTypeID() == lp.d.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
          if (!Pd || !(kd instanceof pN.b)) return Fd.c.Warn(`${dd}: Light ${kd.name} is not supported in ${NN}`), void Wd(Jd);
          if (kd.falloffType !== lp.d.FALLOFF_GLTF && Fd.c.Warn(`${dd}: Light falloff for ${kd.name} does not match the ${NN} specification!`), !kd.position.zPd(0, 0, 0)) {
            const dd = yd.h.IL[0].Fs(kd.position);
            Nd && uk(dd), Jd.translation = dd.spd()
          }
          if ("point" !== Pd) {
            const dd = kd.direction.normalizeToRef(yd.h.IL[0]);
            Nd && uk(dd);
            const pd = yd.d.FromUnitVectorsToRef(ZN, dd, yd.h.Quaternion[0]);
            yd.d.IsIdentity(pd) || (Jd.rotation = pd.spd())
          }
          const Zd = {
            type: Pd,
            name: kd.name,
            color: kd.diffuse.spd(),
            intensity: kd.intensity,
            range: kd.range
          };
          if (Ak(Zd, WN), "spot" === Pd) {
            const dd = kd;
            Zd.spot = {
              innerConeAngle: dd.innerAngle / 2,
              outerConeAngle: dd.angle / 2
            }, Ak(Zd.spot, PN)
          }
          this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(Zd);
          const gd = {
              light: this._lights.lights.length - 1
            },
            Cd = kd.parent;
          if (Cd && Hk(kd, Cd)) {
            const dd = pd.get(Cd);
            if (dd) {
              const kd = this._exporter._nodes[dd];
              return zk(Jd, kd), kd.extensions || (kd.extensions = {}), kd.extensions[NN] = gd, void Wd(null)
            }
          }
          Jd.extensions || (Jd.extensions = {}), Jd.extensions[NN] = gd, Wd(Jd)
        }))
      }
    }
    let CN = !1;

    function KN() {
      CN || (CN = !0, fp.RegisterExtension(NN, (dd => new gN(dd))))
    }
    KN();
    const oN = "KHR_interactivity";
    class lN {
      constructor(dd) {
        this._exporter = dd, this.name = oN, this.enabled = !!dd.options.khrInteractivity, this.required = dd.options.khrInteractivity?.required ?? !1
      }
      dispose() {
        this._exporter = null
      }
      get wasUsed() {
        return this.enabled
      }
      onExporting() {
        var dd, Jd, kd;
        const pd = this._exporter.options.khrInteractivity;
        if (!pd) return;
        const Nd = pd.build({
          getNodeCount: () => this._exporter._nodes.length,
          getNodeIndex: dd => this._exporter._getNodeIndex(dd),
          getAnimationIndex: dd => this._exporter._getAnimationIndex(dd),
          getCameraIndex: dd => this._exporter._getCameraIndex(dd),
          getMaterialIndex: dd => this._exporter._getMaterialIndex(dd),
          getRootIndex: (dd, Jd) => this._exporter._getRootIndex(dd, Jd),
          setNodeExtension: (dd, Jd, kd) => this._exporter._setNodeExtension(dd, Jd, kd)
        });
        this._exporter._glTF.extensions[oN] = Nd;
        for (const Wd of pd.additionalExtensionsUsed)(dd = this._exporter._glTF).extensionsUsed || (dd.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(Wd) && this._exporter._glTF.extensionsUsed.push(Wd);
        for (const Wd of pd.additionalExtensionsRequired)(Jd = this._exporter._glTF).extensionsUsed || (Jd.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(Wd) && this._exporter._glTF.extensionsUsed.push(Wd), (kd = this._exporter._glTF).extensionsRequired || (kd.extensionsRequired = []), -1 === this._exporter._glTF.extensionsRequired.indexOf(Wd) && this._exporter._glTF.extensionsRequired.push(Wd)
      }
    }
    let QN = !1;

    function LN() {
      QN || (QN = !0, fp.RegisterExtension(oN, (dd => new lN(dd)), 200))
    }
    LN();
    const ON = "EXT_lights_area",
      eN = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        size: 1
      },
      RN = {
        aspect: 1
      },
      IN = yd.n.Backward();
    class GN {
      constructor(dd) {
        this.name = ON, this.enabled = !0, this.required = !1, this._exporter = dd
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[ON] = this._lights
      }
      async postExportNodeAsync(dd, Jd, kd, pd, Nd) {
        return await new Promise((Wd => {
          if (!(kd instanceof lp.d)) return void Wd(Jd);
          const Pd = kd.getTypeID() == lp.d.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
          if (!Pd) return Fd.c.Warn(`${dd}: Light ${kd.name} is not supported in ${ON}`), void Wd(Jd);
          const Zd = kd;
          if (Zd.falloffType !== lp.d.FALLOFF_GLTF && Fd.c.Warn(`${dd}: Light falloff for ${kd.name} does not match the ${ON} specification!`), !Zd.position.zPd(0, 0, 0)) {
            const dd = yd.h.IL[0].Fs(Zd.position);
            Nd && uk(dd), Jd.translation = dd.spd()
          }
          const gd = yd.n.Forward();
          Nd && uk(gd);
          const Cd = yd.d.FromUnitVectorsToRef(IN, gd, yd.h.Quaternion[0]);
          yd.d.IsIdentity(Cd) || (Jd.rotation = Cd.spd());
          const Kd = {
            type: Pd,
            name: Zd.name,
            color: Zd.diffuse.spd(),
            intensity: Zd.intensity,
            size: Zd.height,
            rect: {
              aspect: Zd.width / Zd.height
            }
          };
          Ak(Kd, eN), Kd.rect && Ak(Kd.rect, RN), this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(Kd);
          const od = {
              light: this._lights.lights.length - 1
            },
            ld = kd.parent;
          if (ld && Hk(Zd, ld)) {
            const dd = pd.get(ld);
            if (dd) {
              const kd = this._exporter._nodes[dd];
              return zk(Jd, kd), kd.extensions || (kd.extensions = {}), kd.extensions[ON] = od, void Wd(null)
            }
          }
          Jd.extensions || (Jd.extensions = {}), Jd.extensions[ON] = od, Wd(Jd)
        }))
      }
    }
    let vN = !1;

    function xN() {
      vN || (vN = !0, fp.RegisterExtension(ON, (dd => new GN(dd))))
    }
    xN();
    const qN = "KHR_materials_anisotropy";
    class BN {
      constructor(dd) {
        this.name = qN, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._anisoTexturesMap = {}, this._exporter = dd
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(dd, Jd, kd) {
        const pd = [];
        if (kd instanceof BJ) {
          if (kd.anisotropy.isEnabled && !kd.anisotropy.legacy) return kd.anisotropy.texture && pd.push(kd.anisotropy.texture), pd
        } else if (kd instanceof AJ && kd.specularRoughnessAnisotropy > 0) {
          const dd = function(dd) {
            const Jd = dd.specularRoughnessAnisotropyTexture,
              kd = dd.geometryTangentTexture;
            return `${Jd&&Jd.getInternalTexture()?Jd.getInternalTexture().uniqueId:"NoStrength"}_${kd&&kd.getInternalTexture()?kd.getInternalTexture().uniqueId:"NoTangent"}`
          }(kd);
          if (this._anisoTexturesMap[dd]) pd.push(this._anisoTexturesMap[dd]);
          else {
            const Jd = await async function(dd) {
              const Jd = dd.Wm(),
                kd = dd.specularRoughnessAnisotropyTexture,
                pd = dd.geometryTangentTexture;
              return kd || pd ? await Zk("AnisotropyTexture", Kk(pd ? gk(pd, 0) : Ck(1), pd ? gk(pd, 1) : Ck(0), kd ? gk(kd, 0) : Ck(1)), Jd) : null
            }(kd);
            Jd && (pd.push(Jd), this._anisoTexturesMap[dd] = Jd)
          }
          return pd
        }
        return []
      }
      postExportMaterialAsync(dd, Jd, kd) {
        return new Promise((dd => {
          var pd;
          if (kd instanceof BJ) {
            if (!kd.anisotropy.isEnabled || kd.anisotropy.legacy) return void dd(Jd);
            this._wasUsed = !0, Jd.extensions = Jd.extensions || {};
            const pd = this._exporter._materialExporter.getTextureInfo(kd.anisotropy.texture),
              Nd = {
                anisotropyStrength: kd.anisotropy.intensity,
                anisotropyRotation: kd.anisotropy.angle,
                anisotropyTexture: pd ?? void 0
              };
            null !== Nd.anisotropyTexture && this._exporter._materialNeedsUVsSet.add(kd), Jd.extensions[qN] = Nd
          } else if (kd instanceof AJ && kd.specularRoughnessAnisotropy > 0) {
            this._wasUsed = !0, Jd.extensions = Jd.extensions || {};
            let Nd = kd.specularRoughnessTexture;
            kd._useRoughnessFromMetallicTextureGreen && (Nd = kd.baseMetalnessTexture);
            const Wd = this._anisoTexturesMap[kd.id];
            if (!Nd && !Wd) {
              let pd = kd.specularRoughness,
                Nd = kd.specularRoughnessAnisotropy;
              if (!kd._useGltfStyleAnisotropy) {
                const dd = function(dd, Jd) {
                  const kd = dd * dd,
                    pd = kd * Math.sqrt(2 / (1 + (1 - Jd) * (1 - Jd))),
                    Nd = (1 - Jd) * pd;
                  return {
                    newBaseRoughness: Math.sqrt(Nd),
                    newAnisotropyStrength: Math.min(Math.sqrt((pd - kd) / Math.max(1 - kd, 1e-4)), 1)
                  }
                }(kd.specularRoughness, kd.specularRoughnessAnisotropy);
                pd = dd.newBaseRoughness, Nd = dd.newAnisotropyStrength
              }
              Jd.pbrMetallicRoughness && (Jd.pbrMetallicRoughness.roughnessFactor = pd);
              const Wd = {
                anisotropyStrength: Nd,
                anisotropyRotation: kd.geometryTangentAngle + .5 * Math.PI,
                anisotropyTexture: void 0
              };
              return Jd.extensions[qN] = Wd, dd(Jd)
            }
            const Pd = Wd ? this._exporter._materialExporter.getTextureInfo(Wd) : null,
              Zd = {
                anisotropyStrength: kd.specularRoughnessAnisotropy,
                anisotropyRotation: kd.geometryTangentAngle,
                anisotropyTexture: Pd || void 0,
                extensions: {}
              };
            kd._useGltfStyleAnisotropy || (Jd.extensions.KHR_materials_openpbr = {}, (pd = this._exporter._glTF).extensionsUsed || (pd.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr")), this._exporter._materialNeedsUVsSet.add(kd), Jd.extensions[qN] = Zd
          }
          dd(Jd)
        }))
      }
    }
    let sN = !1;

    function iN() {
      sN || (sN = !0, fp.RegisterExtension(qN, (dd => new BN(dd))))
    }
    iN();
    const aN = "KHR_materials_clearcoat";

    function MN(dd, Jd) {
      const kd = new md.c(Jd.name, Jd.Wm());
      return kd._texture = dd, kd.coordinatesIndex = Jd.coordinatesIndex, Jd instanceof md.c && (kd.uOffset = Jd.uOffset, kd.vOffset = Jd.vOffset, kd.uScale = Jd.uScale, kd.vScale = Jd.vScale, kd.wAng = Jd.wAng), kd.wrapU = Jd.wrapU, kd.wrapV = Jd.wrapV, kd
    }
    class FN {
      constructor(dd) {
        this.name = aN, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = dd
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
      async postExportMaterialAdditionalTexturesAsync(dd, Jd, kd) {
        const pd = [];
        if (kd instanceof BJ) {
          if (kd.clearCoat.isEnabled) return kd.clearCoat.texture && pd.push(kd.clearCoat.texture), !kd.clearCoat.useRoughnessFromMainTexture && kd.clearCoat.textureRoughness && pd.push(kd.clearCoat.textureRoughness), kd.clearCoat.bumpTexture && pd.push(kd.clearCoat.bumpTexture), pd
        } else if (kd instanceof AJ && kd.coatWeight > 0) {
          let dd = !1;
          if (kd.coatWeightTexture ? kd.coatRoughnessTexture ? kd._useCoatRoughnessFromGreenChannel && kd.coatWeightTexture.getInternalTexture() === kd.coatRoughnessTexture.getInternalTexture() ? (pd.push(kd.coatWeightTexture), pd.push(kd.coatRoughnessTexture)) : dd = !0 : pd.push(kd.coatWeightTexture) : kd.coatRoughnessTexture && (kd._useCoatRoughnessFromGreenChannel ? pd.push(kd.coatRoughnessTexture) : dd = !0), dd) {
            const dd = function(dd) {
              const Jd = dd.coatWeightTexture,
                kd = Jd && Jd.getInternalTexture() ? Jd.getInternalTexture().uniqueId : "NoCoat",
                pd = dd.coatRoughnessTexture;
              return `${kd}_${pd&&pd.getInternalTexture()?pd.getInternalTexture().uniqueId:"NoRoughness"}`
            }(kd);
            if (!this._cachedInternalTexturesMap[dd]) {
              const Jd = await async function(dd) {
                const Jd = dd.Wm(),
                  kd = dd.coatWeightTexture,
                  pd = dd.coatRoughnessTexture;
                return kd || pd ? (await Zk("CoatTexture", Kk(kd ? gk(kd, 0) : Ck(1), pd ? gk(pd, dd._useCoatRoughnessFromGreenChannel ? 1 : 0) : Ck(1)), Jd)).getInternalTexture() : null
              }(kd);
              Jd && (this._cachedInternalTexturesMap[dd] = Jd)
            }
            this._cachedInternalTexturesMap[dd] && (kd.coatWeightTexture && (this._mergedTexturesMap[kd.coatWeightTexture.uniqueId] = MN(this._cachedInternalTexturesMap[dd], kd.coatWeightTexture), pd.push(this._mergedTexturesMap[kd.coatWeightTexture.uniqueId])), kd.coatRoughnessTexture && (this._mergedTexturesMap[kd.coatRoughnessTexture.uniqueId] = MN(this._cachedInternalTexturesMap[dd], kd.coatRoughnessTexture), pd.push(this._mergedTexturesMap[kd.coatRoughnessTexture.uniqueId])))
          }
          return kd.geometryCoatNormalTexture && pd.push(kd.geometryCoatNormalTexture), pd
        }
        return []
      }
      postExportMaterialAsync(dd, Jd, kd) {
        return new Promise((dd => {
          if (kd instanceof BJ) {
            if (!kd.clearCoat.isEnabled) return void dd(Jd);
            this._wasUsed = !0, Jd.extensions = Jd.extensions || {};
            const pd = this._exporter._materialExporter.getTextureInfo(kd.clearCoat.texture);
            let Nd;
            Nd = kd.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(kd.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(kd.clearCoat.textureRoughness), kd.clearCoat.isTintEnabled && iJ.h.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${kd.name}`), kd.clearCoat.remapF0OnInterfaceChange && iJ.h.Warn(`Clear Color F0 remapping is not supported for glTF export. Ignoring for: ${kd.name}`);
            const Wd = this._exporter._materialExporter.getTextureInfo(kd.clearCoat.bumpTexture),
              Pd = {
                clearcoatFactor: kd.clearCoat.intensity,
                clearcoatTexture: pd ?? void 0,
                clearcoatRoughnessFactor: kd.clearCoat.roughness,
                clearcoatRoughnessTexture: Nd ?? void 0,
                clearcoatNormalTexture: Wd ?? void 0
              };
            null === Pd.clearcoatTexture && null === Pd.clearcoatRoughnessTexture && null === Pd.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(kd), Jd.extensions[aN] = Pd
          } else if (kd instanceof AJ) {
            if (0 == kd.coatWeight) return void dd(Jd);
            let pd, Nd, Wd, Pd;
            this._wasUsed = !0, Jd.extensions = Jd.extensions || {}, kd.coatWeightTexture && (pd = this._mergedTexturesMap[kd.coatWeightTexture.uniqueId], Nd = this._exporter._materialExporter.getTextureInfo(pd)), kd.coatRoughnessTexture && (Wd = this._mergedTexturesMap[kd.coatRoughnessTexture.uniqueId], Pd = this._exporter._materialExporter.getTextureInfo(Wd)), kd.coatColorTexture && iJ.h.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${kd.name}`);
            const Zd = this._exporter._materialExporter.getTextureInfo(kd.geometryCoatNormalTexture),
              gd = {
                clearcoatFactor: kd.coatWeight,
                clearcoatTexture: Nd ?? void 0,
                clearcoatRoughnessFactor: kd.coatRoughness,
                clearcoatRoughnessTexture: Pd ?? void 0,
                clearcoatNormalTexture: Zd ?? void 0
              };
            null === gd.clearcoatTexture && null === gd.clearcoatRoughnessTexture && null === gd.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(kd), Jd.extensions[aN] = gd
          }
          dd(Jd)
        }))
      }
    }
    let YN = !1;

    function mN() {
      YN || (YN = !0, fp.RegisterExtension(aN, (dd => new FN(dd))))
    }
    mN();
    const bN = "KHR_materials_coat";

    function SN(dd) {
      const Jd = dd.coatRoughnessAnisotropyTexture,
        kd = dd.geometryCoatTangentTexture;
      return `${Jd&&Jd.getInternalTexture()?Jd.getInternalTexture().uniqueId:"NoStrength"}_${kd&&kd.getInternalTexture()?kd.getInternalTexture().uniqueId:"NoTangent"}`
    }

    function jN(dd, Jd) {
      const kd = new md.c(Jd.name, Jd.Wm());
      return kd._texture = dd, kd.coordinatesIndex = Jd.coordinatesIndex, Jd instanceof md.c && (kd.uOffset = Jd.uOffset, kd.vOffset = Jd.vOffset, kd.uScale = Jd.uScale, kd.vScale = Jd.vScale, kd.wAng = Jd.wAng), kd.wrapU = Jd.wrapU, kd.wrapV = Jd.wrapV, kd
    }
    class XN {
      constructor(dd) {
        this.name = bN, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = dd
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
      async postExportMaterialAdditionalTexturesAsync(dd, Jd, kd) {
        const pd = [];
        if (kd instanceof BJ) {
          if (kd.clearCoat.isEnabled) return kd.clearCoat.texture && pd.push(kd.clearCoat.texture), !kd.clearCoat.useRoughnessFromMainTexture && kd.clearCoat.textureRoughness && pd.push(kd.clearCoat.textureRoughness), kd.clearCoat.bumpTexture && pd.push(kd.clearCoat.bumpTexture), kd.clearCoat.tintTexture && pd.push(kd.clearCoat.tintTexture), pd
        } else if (kd instanceof AJ && kd.coatWeight > 0) {
          let dd = !1;
          if (kd.coatWeightTexture ? kd.coatRoughnessTexture ? kd._useCoatRoughnessFromGreenChannel && kd.coatWeightTexture.getInternalTexture() === kd.coatRoughnessTexture.getInternalTexture() ? (pd.push(kd.coatWeightTexture), pd.push(kd.coatRoughnessTexture)) : dd = !0 : pd.push(kd.coatWeightTexture) : kd.coatRoughnessTexture && (kd._useCoatRoughnessFromGreenChannel ? pd.push(kd.coatRoughnessTexture) : dd = !0), dd) {
            const dd = function(dd) {
              const Jd = dd.coatWeightTexture,
                kd = Jd && Jd.getInternalTexture() ? Jd.getInternalTexture().uniqueId : "NoCoat",
                pd = dd.coatRoughnessTexture;
              return `${kd}_${pd&&pd.getInternalTexture()?pd.getInternalTexture().uniqueId:"NoRoughness"}`
            }(kd);
            if (!this._cachedInternalTexturesMap[dd]) {
              const Jd = await async function(dd) {
                const Jd = dd.Wm(),
                  kd = dd.coatWeightTexture,
                  pd = dd.coatRoughnessTexture;
                return kd || pd ? (await Zk("CoatTexture", Kk(kd ? gk(kd, 0) : Ck(1), pd ? gk(pd, dd._useCoatRoughnessFromGreenChannel ? 1 : 0) : Ck(1)), Jd)).getInternalTexture() : null
              }(kd);
              Jd && (this._cachedInternalTexturesMap[dd] = Jd)
            }
            this._cachedInternalTexturesMap[dd] && (kd.coatWeightTexture && (this._mergedTexturesMap[kd.coatWeightTexture.uniqueId] = jN(this._cachedInternalTexturesMap[dd], kd.coatWeightTexture), pd.push(this._mergedTexturesMap[kd.coatWeightTexture.uniqueId])), kd.coatRoughnessTexture && (this._mergedTexturesMap[kd.coatRoughnessTexture.uniqueId] = jN(this._cachedInternalTexturesMap[dd], kd.coatRoughnessTexture), pd.push(this._mergedTexturesMap[kd.coatRoughnessTexture.uniqueId])))
          }
          if (kd.geometryCoatNormalTexture && pd.push(kd.geometryCoatNormalTexture), kd.coatColorTexture && pd.push(kd.coatColorTexture), kd.coatRoughnessAnisotropy > 0) {
            const dd = SN(kd);
            if (this._mergedTexturesMap[dd]) pd.push(this._mergedTexturesMap[dd]);
            else {
              const Jd = await async function(dd) {
                const Jd = dd.Wm(),
                  kd = dd.coatRoughnessAnisotropyTexture,
                  pd = dd.geometryCoatTangentTexture;
                return kd || pd ? await Zk("AnisotropyTexture", Kk(pd ? gk(pd, 0) : Ck(1), pd ? gk(pd, 1) : Ck(0), kd ? gk(kd, 0) : Ck(1)), Jd) : null
              }(kd);
              Jd && (pd.push(Jd), this._mergedTexturesMap[dd] = Jd)
            }
            return pd
          }
          return pd
        }
        return []
      }
      postExportMaterialAsync(dd, Jd, kd) {
        return new Promise((dd => {
          var pd;
          if (kd instanceof BJ) {
            if (!kd.clearCoat.isEnabled) return void dd(Jd);
            this._wasUsed = !0, Jd.extensions = Jd.extensions || {};
            const pd = this._exporter._materialExporter.getTextureInfo(kd.clearCoat.texture);
            let Nd, Wd;
            Nd = kd.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(kd.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(kd.clearCoat.textureRoughness), kd.clearCoat.isTintEnabled && (Wd = this._exporter._materialExporter.getTextureInfo(kd.clearCoat.tintTexture));
            const Pd = this._exporter._materialExporter.getTextureInfo(kd.clearCoat.bumpTexture),
              Zd = kd.clearCoat.indexOfRefraction,
              gd = {
                coatFactor: kd.clearCoat.intensity,
                coatTexture: pd ?? void 0,
                coatRoughnessFactor: kd.clearCoat.roughness,
                coatRoughnessTexture: Nd ?? void 0,
                coatNormalTexture: Pd ?? void 0,
                coatColorFactor: kd.clearCoat.tintColor.spd(),
                coatColorTexture: Wd ?? void 0,
                coatIor: 1.5 !== Zd ? Zd : void 0
              };
            null === gd.coatTexture && null === gd.coatRoughnessTexture && null === gd.coatRoughnessTexture && null === gd.coatColorTexture || this._exporter._materialNeedsUVsSet.add(kd), Jd.extensions[bN] = gd
          } else if (kd instanceof AJ) {
            if (0 == kd.coatWeight) return void dd(Jd);
            let Nd, Wd, Pd, Zd;
            this._wasUsed = !0, Jd.extensions = Jd.extensions || {}, kd.coatWeightTexture && (Nd = this._mergedTexturesMap[kd.coatWeightTexture.uniqueId] ? this._mergedTexturesMap[kd.coatWeightTexture.uniqueId] : kd.coatWeightTexture, Wd = this._exporter._materialExporter.getTextureInfo(Nd)), kd.coatRoughnessTexture && (Pd = this._mergedTexturesMap[kd.coatRoughnessTexture.uniqueId] ? this._mergedTexturesMap[kd.coatRoughnessTexture.uniqueId] : kd.coatRoughnessTexture, Zd = this._exporter._materialExporter.getTextureInfo(Pd));
            const gd = this._exporter._materialExporter.getTextureInfo(kd.geometryCoatNormalTexture),
              Cd = this._exporter._materialExporter.getTextureInfo(kd.coatColorTexture),
              Kd = kd.coatIor,
              od = kd.coatDarkening,
              ld = kd.coatRoughnessTexture,
              Qd = SN(kd),
              Ld = this._mergedTexturesMap[Qd];
            let Od, ed = 0,
              Rd = 0;
            if (kd.coatRoughnessAnisotropy > 0) {
              if (ld || Ld) {
                const dd = Ld ? this._exporter._materialExporter.getTextureInfo(Ld) : null;
                ed = kd.coatRoughnessAnisotropy, Rd = kd.geometryCoatTangentAngle, Od = dd || void 0
              } else {
                let dd = kd.coatRoughness,
                  pd = kd.coatRoughnessAnisotropy;
                if (!kd._useGltfStyleAnisotropy) {
                  const Jd = function(dd, Jd) {
                    const kd = dd * dd,
                      pd = kd * Math.sqrt(2 / (1 + (1 - Jd) * (1 - Jd))),
                      Nd = (1 - Jd) * pd;
                    return {
                      newBaseRoughness: Math.sqrt(Nd),
                      newAnisotropyStrength: Math.min(Math.sqrt((pd - kd) / Math.max(1 - kd, 1e-4)), 1)
                    }
                  }(kd.coatRoughness, kd.coatRoughnessAnisotropy);
                  dd = Jd.newBaseRoughness, pd = Jd.newAnisotropyStrength
                }
                Jd.pbrMetallicRoughness && (Jd.pbrMetallicRoughness.roughnessFactor = dd), ed = pd, Rd = kd.geometryCoatTangentAngle + .5 * Math.PI, Od = void 0
              }
              kd._useGltfStyleAnisotropy || (Jd.extensions.KHR_materials_openpbr = {}, (pd = this._exporter._glTF).extensionsUsed || (pd.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr"))
            }
            const Id = {
              coatFactor: kd.coatWeight,
              coatTexture: Wd ?? void 0,
              coatRoughnessFactor: kd.coatRoughness,
              coatRoughnessTexture: Zd ?? void 0,
              coatNormalTexture: gd ?? void 0,
              coatColorFactor: kd.coatColor.spd(),
              coatColorTexture: Cd ?? void 0,
              coatIor: 1.5 !== Kd ? Kd : void 0,
              coatDarkeningFactor: 1 !== od ? od : void 0,
              coatAnisotropyRotation: Rd,
              coatAnisotropyStrength: ed,
              coatAnisotropyTexture: Od
            };
            null === Id.coatTexture && null === Id.coatRoughnessTexture && null === Id.coatRoughnessTexture && null === Id.coatAnisotropyTexture && null === Id.coatColorTexture || this._exporter._materialNeedsUVsSet.add(kd), Jd.extensions[bN] = Id
          }
          dd(Jd)
        }))
      }
    }
    let fN = !1;

    function nN() {
      fN || (fN = !0, fp.RegisterExtension(bN, (dd => new XN(dd))))
    }
    nN();
    let UN = (() => {
      var dd, Jd, kd, pd, Nd, Pd, Zd, gd, Cd, Kd, od, ld, Qd, Ld, Od, ed, Rd, Id, Gd, vd, xd, qd, Bd, sd, Fd, Yd, md, bd, Sd, jd, fd, nd, Ud, yd, Dd, Td, Ed, cd, hd, rd, td, Vd, zd, Hd, wd, Ad, dJ, JJ, kJ, pJ, NJ, WJ, PJ, ZJ, gJ, CJ, KJ, oJ, lJ, QJ, LJ, OJ, eJ, RJ, IJ, GJ, vJ;
      let xJ, qJ, iJ, aJ, MJ, FJ, YJ, mJ, bJ, SJ, jJ, XJ, fJ, nJ, UJ, yJ, DJ, TJ, EJ, cJ, hJ, rJ, uJ, tJ, VJ, zJ, HJ, wJ, AJ, dk, Jk, kk, pk, Nk, Wk, Pk, Zk, gk, Ck, Kk, lk, Qk, Lk, Ok, ek, Rk, Ik, Gk, vk, xk, qk, Bk, sk, ik, ak, Mk, Fk, Yk, mk, bk, Sk, jk, Xk, fk, nk, Uk, yk, Dk, Tk = BJ,
        Ek = [],
        ck = [],
        hk = [],
        rk = [],
        uk = [],
        tk = [],
        Vk = [],
        zk = [],
        Hk = [],
        wk = [],
        Ak = [],
        dp = [],
        Jp = [],
        kp = [],
        pp = [],
        Np = [],
        Wp = [],
        Pp = [],
        Zp = [],
        gp = [],
        Cp = [],
        Kp = [],
        op = [],
        lp = [],
        Qp = [],
        Lp = [],
        Op = [],
        ep = [],
        Rp = [],
        Ip = [],
        Gp = [],
        vp = [],
        xp = [],
        qp = [],
        Bp = [],
        sp = [],
        ip = [],
        ap = [],
        Mp = [],
        Fp = [],
        Yp = [],
        mp = [],
        bp = [],
        Sp = [],
        jp = [],
        Xp = [],
        fp = [],
        np = [],
        Up = [],
        yp = [],
        Dp = [],
        Tp = [],
        Ep = [],
        cp = [],
        hp = [],
        rp = [],
        tp = [],
        Vp = [],
        zp = [],
        Hp = [],
        wp = [],
        Ap = [],
        dN = [],
        JN = [],
        kN = [],
        pN = [],
        NN = [],
        WN = [],
        PN = [],
        ZN = [],
        gN = [],
        CN = [],
        KN = [],
        oN = [],
        lN = [],
        QN = [],
        LN = [],
        ON = [],
        eN = [],
        RN = [],
        IN = [],
        GN = [],
        vN = [],
        xN = [],
        qN = [],
        BN = [],
        sN = [],
        iN = [],
        aN = [],
        MN = [],
        FN = [],
        YN = [],
        mN = [],
        bN = [],
        SN = [],
        jN = [],
        XN = [],
        fN = [],
        nN = [],
        UN = [],
        yN = [],
        DN = [],
        TN = [],
        EN = [],
        cN = [],
        hN = [],
        rN = [],
        uN = [],
        tN = [],
        VN = [],
        zN = [],
        HN = [],
        wN = [],
        AN = [],
        dW = [],
        JW = [],
        kW = [],
        pW = [],
        NW = [],
        WW = [],
        PW = [],
        ZW = [],
        gW = [],
        CW = [],
        KW = [],
        oW = [],
        lW = [],
        QW = [],
        LW = [],
        OW = [],
        eW = [],
        RW = [],
        IW = [];
      return dd = class extends Tk {
        get directIntensity() {
          return (0, ad.d)(this, Jd, "f")
        }
        set directIntensity(dd) {
          (0, ad.e)(this, Jd, dd, "f")
        }
        get emissiveIntensity() {
          return (0, ad.d)(this, kd, "f")
        }
        set emissiveIntensity(dd) {
          (0, ad.e)(this, kd, dd, "f")
        }
        get environmentIntensity() {
          return (0, ad.d)(this, pd, "f")
        }
        set environmentIntensity(dd) {
          (0, ad.e)(this, pd, dd, "f")
        }
        get specularIntensity() {
          return (0, ad.d)(this, Nd, "f")
        }
        set specularIntensity(dd) {
          (0, ad.e)(this, Nd, dd, "f")
        }
        get disableBumpMap() {
          return (0, ad.d)(this, Pd, "f")
        }
        set disableBumpMap(dd) {
          (0, ad.e)(this, Pd, dd, "f")
        }
        get albedoTexture() {
          return (0, ad.d)(this, Zd, "f")
        }
        set albedoTexture(dd) {
          (0, ad.e)(this, Zd, dd, "f")
        }
        get baseWeightTexture() {
          return (0, ad.d)(this, gd, "f")
        }
        set baseWeightTexture(dd) {
          (0, ad.e)(this, gd, dd, "f")
        }
        get baseDiffuseRoughnessTexture() {
          return (0, ad.d)(this, Cd, "f")
        }
        set baseDiffuseRoughnessTexture(dd) {
          (0, ad.e)(this, Cd, dd, "f")
        }
        get ambientTexture() {
          return (0, ad.d)(this, Kd, "f")
        }
        set ambientTexture(dd) {
          (0, ad.e)(this, Kd, dd, "f")
        }
        get ambientTextureStrength() {
          return (0, ad.d)(this, od, "f")
        }
        set ambientTextureStrength(dd) {
          (0, ad.e)(this, od, dd, "f")
        }
        get ambientTextureImpactOnAnalyticalLights() {
          return (0, ad.d)(this, ld, "f")
        }
        set ambientTextureImpactOnAnalyticalLights(dd) {
          (0, ad.e)(this, ld, dd, "f")
        }
        get opacityTexture() {
          return (0, ad.d)(this, Qd, "f")
        }
        set opacityTexture(dd) {
          (0, ad.e)(this, Qd, dd, "f")
        }
        get reflectionTexture() {
          return (0, ad.d)(this, Ld, "f")
        }
        set reflectionTexture(dd) {
          (0, ad.e)(this, Ld, dd, "f")
        }
        get emissiveTexture() {
          return (0, ad.d)(this, Od, "f")
        }
        set emissiveTexture(dd) {
          (0, ad.e)(this, Od, dd, "f")
        }
        get reflectivityTexture() {
          return (0, ad.d)(this, ed, "f")
        }
        set reflectivityTexture(dd) {
          (0, ad.e)(this, ed, dd, "f")
        }
        get metallicTexture() {
          return (0, ad.d)(this, Rd, "f")
        }
        set metallicTexture(dd) {
          (0, ad.e)(this, Rd, dd, "f")
        }
        get metallic() {
          return (0, ad.d)(this, Id, "f")
        }
        set metallic(dd) {
          (0, ad.e)(this, Id, dd, "f")
        }
        get roughness() {
          return (0, ad.d)(this, Gd, "f")
        }
        set roughness(dd) {
          (0, ad.e)(this, Gd, dd, "f")
        }
        get metallicF0Factor() {
          return (0, ad.d)(this, vd, "f")
        }
        set metallicF0Factor(dd) {
          (0, ad.e)(this, vd, dd, "f")
        }
        get metallicReflectanceColor() {
          return (0, ad.d)(this, xd, "f")
        }
        set metallicReflectanceColor(dd) {
          (0, ad.e)(this, xd, dd, "f")
        }
        get useOnlyMetallicFromMetallicReflectanceTexture() {
          return (0, ad.d)(this, qd, "f")
        }
        set useOnlyMetallicFromMetallicReflectanceTexture(dd) {
          (0, ad.e)(this, qd, dd, "f")
        }
        get metallicReflectanceTexture() {
          return (0, ad.d)(this, Bd, "f")
        }
        set metallicReflectanceTexture(dd) {
          (0, ad.e)(this, Bd, dd, "f")
        }
        get reflectanceTexture() {
          return (0, ad.d)(this, sd, "f")
        }
        set reflectanceTexture(dd) {
          (0, ad.e)(this, sd, dd, "f")
        }
        get microSurfaceTexture() {
          return (0, ad.d)(this, Fd, "f")
        }
        set microSurfaceTexture(dd) {
          (0, ad.e)(this, Fd, dd, "f")
        }
        get bumpTexture() {
          return (0, ad.d)(this, Yd, "f")
        }
        set bumpTexture(dd) {
          (0, ad.e)(this, Yd, dd, "f")
        }
        get lightmapTexture() {
          return (0, ad.d)(this, md, "f")
        }
        set lightmapTexture(dd) {
          (0, ad.e)(this, md, dd, "f")
        }
        get refractionTexture() {
          return this.subSurface.refractionTexture
        }
        set refractionTexture(dd) {
          this.subSurface.refractionTexture = dd, dd ? this.subSurface.isRefractionEnabled = !0 : this.subSurface.linkRefractionWithTransparency || (this.subSurface.isRefractionEnabled = !1)
        }
        get ambientColor() {
          return (0, ad.d)(this, bd, "f")
        }
        set ambientColor(dd) {
          (0, ad.e)(this, bd, dd, "f")
        }
        get albedoColor() {
          return (0, ad.d)(this, Sd, "f")
        }
        set albedoColor(dd) {
          (0, ad.e)(this, Sd, dd, "f")
        }
        get baseWeight() {
          return (0, ad.d)(this, jd, "f")
        }
        set baseWeight(dd) {
          (0, ad.e)(this, jd, dd, "f")
        }
        get baseDiffuseRoughness() {
          return (0, ad.d)(this, fd, "f")
        }
        set baseDiffuseRoughness(dd) {
          (0, ad.e)(this, fd, dd, "f")
        }
        get reflectivityColor() {
          return (0, ad.d)(this, nd, "f")
        }
        set reflectivityColor(dd) {
          (0, ad.e)(this, nd, dd, "f")
        }
        get reflectionColor() {
          return (0, ad.d)(this, Ud, "f")
        }
        set reflectionColor(dd) {
          (0, ad.e)(this, Ud, dd, "f")
        }
        get emissiveColor() {
          return (0, ad.d)(this, yd, "f")
        }
        set emissiveColor(dd) {
          (0, ad.e)(this, yd, dd, "f")
        }
        get microSurface() {
          return (0, ad.d)(this, Dd, "f")
        }
        set microSurface(dd) {
          (0, ad.e)(this, Dd, dd, "f")
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
          return (0, ad.d)(this, Td, "f")
        }
        set useLightmapAsShadowmap(dd) {
          (0, ad.e)(this, Td, dd, "f")
        }
        get useAlphaFromAlbedoTexture() {
          return (0, ad.d)(this, Ed, "f")
        }
        set useAlphaFromAlbedoTexture(dd) {
          (0, ad.e)(this, Ed, dd, "f")
        }
        get forceAlphaTest() {
          return (0, ad.d)(this, cd, "f")
        }
        set forceAlphaTest(dd) {
          (0, ad.e)(this, cd, dd, "f")
        }
        get alphaCutOff() {
          return (0, ad.d)(this, hd, "f")
        }
        set alphaCutOff(dd) {
          (0, ad.e)(this, hd, dd, "f")
        }
        get useSpecularOverAlpha() {
          return (0, ad.d)(this, rd, "f")
        }
        set useSpecularOverAlpha(dd) {
          (0, ad.e)(this, rd, dd, "f")
        }
        get useMicroSurfaceFromReflectivityMapAlpha() {
          return (0, ad.d)(this, td, "f")
        }
        set useMicroSurfaceFromReflectivityMapAlpha(dd) {
          (0, ad.e)(this, td, dd, "f")
        }
        get useRoughnessFromMetallicTextureAlpha() {
          return (0, ad.d)(this, Vd, "f")
        }
        set useRoughnessFromMetallicTextureAlpha(dd) {
          (0, ad.e)(this, Vd, dd, "f")
        }
        get useRoughnessFromMetallicTextureGreen() {
          return (0, ad.d)(this, zd, "f")
        }
        set useRoughnessFromMetallicTextureGreen(dd) {
          (0, ad.e)(this, zd, dd, "f")
        }
        get useMetallnessFromMetallicTextureBlue() {
          return (0, ad.d)(this, Hd, "f")
        }
        set useMetallnessFromMetallicTextureBlue(dd) {
          (0, ad.e)(this, Hd, dd, "f")
        }
        get useAmbientOcclusionFromMetallicTextureRed() {
          return (0, ad.d)(this, wd, "f")
        }
        set useAmbientOcclusionFromMetallicTextureRed(dd) {
          (0, ad.e)(this, wd, dd, "f")
        }
        get useAmbientInGrayScale() {
          return (0, ad.d)(this, Ad, "f")
        }
        set useAmbientInGrayScale(dd) {
          (0, ad.e)(this, Ad, dd, "f")
        }
        get useAutoMicroSurfaceFromReflectivityMap() {
          return (0, ad.d)(this, dJ, "f")
        }
        set useAutoMicroSurfaceFromReflectivityMap(dd) {
          (0, ad.e)(this, dJ, dd, "f")
        }
        get usePhysicalLightFalloff() {
          return this._lightFalloff === BJ.LIGHTFALLOFF_PHYSICAL
        }
        set usePhysicalLightFalloff(dd) {
          dd !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = dd ? BJ.LIGHTFALLOFF_PHYSICAL : BJ.LIGHTFALLOFF_STANDARD)
        }
        get useGLTFLightFalloff() {
          return this._lightFalloff === BJ.LIGHTFALLOFF_GLTF
        }
        set useGLTFLightFalloff(dd) {
          dd !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = dd ? BJ.LIGHTFALLOFF_GLTF : BJ.LIGHTFALLOFF_STANDARD)
        }
        get useRadianceOverAlpha() {
          return (0, ad.d)(this, JJ, "f")
        }
        set useRadianceOverAlpha(dd) {
          (0, ad.e)(this, JJ, dd, "f")
        }
        get useObjectSpaceNormalMap() {
          return (0, ad.d)(this, kJ, "f")
        }
        set useObjectSpaceNormalMap(dd) {
          (0, ad.e)(this, kJ, dd, "f")
        }
        get useParallax() {
          return (0, ad.d)(this, pJ, "f")
        }
        set useParallax(dd) {
          (0, ad.e)(this, pJ, dd, "f")
        }
        get useParallaxOcclusion() {
          return (0, ad.d)(this, NJ, "f")
        }
        set useParallaxOcclusion(dd) {
          (0, ad.e)(this, NJ, dd, "f")
        }
        get parallaxScaleBias() {
          return (0, ad.d)(this, WJ, "f")
        }
        set parallaxScaleBias(dd) {
          (0, ad.e)(this, WJ, dd, "f")
        }
        get disableLighting() {
          return (0, ad.d)(this, PJ, "f")
        }
        set disableLighting(dd) {
          (0, ad.e)(this, PJ, dd, "f")
        }
        get forceIrradianceInFragment() {
          return (0, ad.d)(this, ZJ, "f")
        }
        set forceIrradianceInFragment(dd) {
          (0, ad.e)(this, ZJ, dd, "f")
        }
        get maxSimultaneousLights() {
          return (0, ad.d)(this, gJ, "f")
        }
        set maxSimultaneousLights(dd) {
          (0, ad.e)(this, gJ, dd, "f")
        }
        get invertNormalMapX() {
          return (0, ad.d)(this, CJ, "f")
        }
        set invertNormalMapX(dd) {
          (0, ad.e)(this, CJ, dd, "f")
        }
        get invertNormalMapY() {
          return (0, ad.d)(this, KJ, "f")
        }
        set invertNormalMapY(dd) {
          (0, ad.e)(this, KJ, dd, "f")
        }
        get twoSidedLighting() {
          return (0, ad.d)(this, oJ, "f")
        }
        set twoSidedLighting(dd) {
          (0, ad.e)(this, oJ, dd, "f")
        }
        get useAlphaFresnel() {
          return (0, ad.d)(this, lJ, "f")
        }
        set useAlphaFresnel(dd) {
          (0, ad.e)(this, lJ, dd, "f")
        }
        get useLinearAlphaFresnel() {
          return (0, ad.d)(this, QJ, "f")
        }
        set useLinearAlphaFresnel(dd) {
          (0, ad.e)(this, QJ, dd, "f")
        }
        get environmentBRDFTexture() {
          return (0, ad.d)(this, LJ, "f")
        }
        set environmentBRDFTexture(dd) {
          (0, ad.e)(this, LJ, dd, "f")
        }
        get forceNormalForward() {
          return (0, ad.d)(this, OJ, "f")
        }
        set forceNormalForward(dd) {
          (0, ad.e)(this, OJ, dd, "f")
        }
        get enableSpecularAntiAliasing() {
          return (0, ad.d)(this, eJ, "f")
        }
        set enableSpecularAntiAliasing(dd) {
          (0, ad.e)(this, eJ, dd, "f")
        }
        get useHorizonOcclusion() {
          return (0, ad.d)(this, RJ, "f")
        }
        set useHorizonOcclusion(dd) {
          (0, ad.e)(this, RJ, dd, "f")
        }
        get useRadianceOcclusion() {
          return (0, ad.d)(this, IJ, "f")
        }
        set useRadianceOcclusion(dd) {
          (0, ad.e)(this, IJ, dd, "f")
        }
        get unlit() {
          return (0, ad.d)(this, GJ, "f")
        }
        set unlit(dd) {
          (0, ad.e)(this, GJ, dd, "f")
        }
        get applyDecalMapAfterDetailMap() {
          return (0, ad.d)(this, vJ, "f")
        }
        set applyDecalMapAfterDetailMap(dd) {
          (0, ad.e)(this, vJ, dd, "f")
        }
        constructor(Wd, Md) {
          super(Wd, Md, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), Jd.set(this, ((0, ad.i)(this, Ek), (0, ad.i)(this, ck, 1))), kd.set(this, ((0, ad.i)(this, hk), (0, ad.i)(this, rk, 1))), pd.set(this, ((0, ad.i)(this, uk), (0, ad.i)(this, tk, 1))), Nd.set(this, ((0, ad.i)(this, Vk), (0, ad.i)(this, zk, 1))), Pd.set(this, ((0, ad.i)(this, Hk), (0, ad.i)(this, wk, !1))), Zd.set(this, ((0, ad.i)(this, Ak), (0, ad.i)(this, dp, void 0))), gd.set(this, ((0, ad.i)(this, Jp), (0, ad.i)(this, kp, void 0))), Cd.set(this, ((0, ad.i)(this, pp), (0, ad.i)(this, Np, void 0))), Kd.set(this, ((0, ad.i)(this, Wp), (0, ad.i)(this, Pp, void 0))), od.set(this, ((0, ad.i)(this, Zp), (0, ad.i)(this, gp, 1))), ld.set(this, ((0, ad.i)(this, Cp), (0, ad.i)(this, Kp, dd.DEFAULT_AO_ON_ANALYTICAL_LIGHTS))), Qd.set(this, ((0, ad.i)(this, op), (0, ad.i)(this, lp, void 0))), Ld.set(this, ((0, ad.i)(this, Qp), (0, ad.i)(this, Lp, void 0))), Od.set(this, ((0, ad.i)(this, Op), (0, ad.i)(this, ep, void 0))), ed.set(this, ((0, ad.i)(this, Rp), (0, ad.i)(this, Ip, void 0))), Rd.set(this, ((0, ad.i)(this, Gp), (0, ad.i)(this, vp, void 0))), Id.set(this, ((0, ad.i)(this, xp), (0, ad.i)(this, qp, void 0))), Gd.set(this, ((0, ad.i)(this, Bp), (0, ad.i)(this, sp, void 0))), vd.set(this, ((0, ad.i)(this, ip), (0, ad.i)(this, ap, 1))), xd.set(this, ((0, ad.i)(this, Mp), (0, ad.i)(this, Fp, ud.c.White()))), qd.set(this, ((0, ad.i)(this, Yp), (0, ad.i)(this, mp, !1))), Bd.set(this, ((0, ad.i)(this, bp), (0, ad.i)(this, Sp, void 0))), sd.set(this, ((0, ad.i)(this, jp), (0, ad.i)(this, Xp, void 0))), Fd.set(this, ((0, ad.i)(this, fp), (0, ad.i)(this, np, void 0))), Yd.set(this, ((0, ad.i)(this, Up), (0, ad.i)(this, yp, void 0))), md.set(this, ((0, ad.i)(this, Dp), (0, ad.i)(this, Tp, void 0))), bd.set(this, ((0, ad.i)(this, Ep), (0, ad.i)(this, cp, new ud.c(0, 0, 0)))), Sd.set(this, ((0, ad.i)(this, hp), (0, ad.i)(this, rp, new ud.c(1, 1, 1)))), jd.set(this, ((0, ad.i)(this, tp), (0, ad.i)(this, Vp, 1))), fd.set(this, ((0, ad.i)(this, zp), (0, ad.i)(this, Hp, void 0))), nd.set(this, ((0, ad.i)(this, wp), (0, ad.i)(this, Ap, new ud.c(1, 1, 1)))), Ud.set(this, ((0, ad.i)(this, dN), (0, ad.i)(this, JN, new ud.c(1, 1, 1)))), yd.set(this, ((0, ad.i)(this, kN), (0, ad.i)(this, pN, new ud.c(0, 0, 0)))), Dd.set(this, ((0, ad.i)(this, NN), (0, ad.i)(this, WN, 1))), Td.set(this, ((0, ad.i)(this, PN), (0, ad.i)(this, ZN, !1))), Ed.set(this, ((0, ad.i)(this, gN), (0, ad.i)(this, CN, !1))), cd.set(this, ((0, ad.i)(this, KN), (0, ad.i)(this, oN, !1))), hd.set(this, ((0, ad.i)(this, lN), (0, ad.i)(this, QN, .4))), rd.set(this, ((0, ad.i)(this, LN), (0, ad.i)(this, ON, !0))), td.set(this, ((0, ad.i)(this, eN), (0, ad.i)(this, RN, !1))), Vd.set(this, ((0, ad.i)(this, IN), (0, ad.i)(this, GN, !0))), zd.set(this, ((0, ad.i)(this, vN), (0, ad.i)(this, xN, !1))), Hd.set(this, ((0, ad.i)(this, qN), (0, ad.i)(this, BN, !1))), wd.set(this, ((0, ad.i)(this, sN), (0, ad.i)(this, iN, !1))), Ad.set(this, ((0, ad.i)(this, aN), (0, ad.i)(this, MN, !1))), dJ.set(this, ((0, ad.i)(this, FN), (0, ad.i)(this, YN, !1))), JJ.set(this, ((0, ad.i)(this, mN), (0, ad.i)(this, bN, !0))), kJ.set(this, ((0, ad.i)(this, SN), (0, ad.i)(this, jN, !1))), pJ.set(this, ((0, ad.i)(this, XN), (0, ad.i)(this, fN, !1))), NJ.set(this, ((0, ad.i)(this, nN), (0, ad.i)(this, UN, !1))), WJ.set(this, ((0, ad.i)(this, yN), (0, ad.i)(this, DN, .05))), PJ.set(this, ((0, ad.i)(this, TN), (0, ad.i)(this, EN, !1))), ZJ.set(this, ((0, ad.i)(this, cN), (0, ad.i)(this, hN, !1))), gJ.set(this, ((0, ad.i)(this, rN), (0, ad.i)(this, uN, 4))), CJ.set(this, ((0, ad.i)(this, tN), (0, ad.i)(this, VN, !1))), KJ.set(this, ((0, ad.i)(this, zN), (0, ad.i)(this, HN, !1))), oJ.set(this, ((0, ad.i)(this, wN), (0, ad.i)(this, AN, !1))), lJ.set(this, ((0, ad.i)(this, dW), (0, ad.i)(this, JW, !1))), QJ.set(this, ((0, ad.i)(this, kW), (0, ad.i)(this, pW, !1))), LJ.set(this, ((0, ad.i)(this, NW), (0, ad.i)(this, WW, null))), OJ.set(this, ((0, ad.i)(this, PW), (0, ad.i)(this, ZW, !1))), eJ.set(this, ((0, ad.i)(this, gW), (0, ad.i)(this, CW, !1))), RJ.set(this, ((0, ad.i)(this, KW), (0, ad.i)(this, oW, !0))), IJ.set(this, ((0, ad.i)(this, lW), (0, ad.i)(this, QW, !0))), GJ.set(this, ((0, ad.i)(this, LW), (0, ad.i)(this, OW, !1))), vJ.set(this, ((0, ad.i)(this, eW), (0, ad.i)(this, RW, !1))), (0, ad.i)(this, IW), this._environmentBRDFTexture = Xd(this.Wm())
        }
        getClassName() {
          return "PBRMaterial"
        }
        clone(Jd) {
          let kd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            pd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const Nd = sJ.c.Clone((() => new dd(Jd, this.Wm())), this, {
            cloneTexturesOnlyOnce: kd
          });
          return Nd.id = Jd, Nd.name = Jd, this.stencil.copyTo(Nd.stencil), this._clonePlugins(Nd, pd), Nd
        }
        serialize() {
          const dd = super.serialize();
          return dd.customType = "BABYLON.PBRMaterial", dd
        }
        static Parse(Jd, kd, pd) {
          const Nd = sJ.c.Parse((() => new dd(Jd.name, kd)), Jd, kd, pd);
          return Jd.stencil && Nd.stencil.parse(Jd.stencil, kd, pd), Wd.b._ParsePlugins(Jd, Nd, kd, pd), Jd.clearCoat && Nd.clearCoat.parse(Jd.clearCoat, kd, pd), Jd.anisotropy && Nd.anisotropy.parse(Jd.anisotropy, kd, pd), Jd.brdf && Nd.brdf.parse(Jd.brdf, kd, pd), Jd.sheen && Nd.sheen.parse(Jd.sheen, kd, pd), Jd.subSurface && Nd.subSurface.parse(Jd.subSurface, kd, pd), Jd.iridescence && Nd.iridescence.parse(Jd.iridescence, kd, pd), Nd
        }
      }, Jd = new WeakMap, kd = new WeakMap, pd = new WeakMap, Nd = new WeakMap, Pd = new WeakMap, Zd = new WeakMap, gd = new WeakMap, Cd = new WeakMap, Kd = new WeakMap, od = new WeakMap, ld = new WeakMap, Qd = new WeakMap, Ld = new WeakMap, Od = new WeakMap, ed = new WeakMap, Rd = new WeakMap, Id = new WeakMap, Gd = new WeakMap, vd = new WeakMap, xd = new WeakMap, qd = new WeakMap, Bd = new WeakMap, sd = new WeakMap, Fd = new WeakMap, Yd = new WeakMap, md = new WeakMap, bd = new WeakMap, Sd = new WeakMap, jd = new WeakMap, fd = new WeakMap, nd = new WeakMap, Ud = new WeakMap, yd = new WeakMap, Dd = new WeakMap, Td = new WeakMap, Ed = new WeakMap, cd = new WeakMap, hd = new WeakMap, rd = new WeakMap, td = new WeakMap, Vd = new WeakMap, zd = new WeakMap, Hd = new WeakMap, wd = new WeakMap, Ad = new WeakMap, dJ = new WeakMap, JJ = new WeakMap, kJ = new WeakMap, pJ = new WeakMap, NJ = new WeakMap, WJ = new WeakMap, PJ = new WeakMap, ZJ = new WeakMap, gJ = new WeakMap, CJ = new WeakMap, KJ = new WeakMap, oJ = new WeakMap, lJ = new WeakMap, QJ = new WeakMap, LJ = new WeakMap, OJ = new WeakMap, eJ = new WeakMap, RJ = new WeakMap, IJ = new WeakMap, GJ = new WeakMap, vJ = new WeakMap, (() => {
        const Jd = "function" === typeof Symbol && Symbol.metadata ? Object.create(Tk[Symbol.metadata] ?? null) : void 0;
        xJ = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], qJ = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], iJ = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], aJ = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], MJ = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], FJ = [(0, Md.y)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], YJ = [(0, Md.y)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], mJ = [(0, Md.y)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], bJ = [(0, Md.y)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], SJ = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], jJ = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], XJ = [(0, Md.y)(), (0, Md.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], fJ = [(0, Md.y)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], nJ = [(0, Md.y)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], UJ = [(0, Md.y)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], yJ = [(0, Md.y)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], DJ = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], TJ = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], EJ = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], cJ = [(0, Md.n)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], hJ = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], rJ = [(0, Md.y)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], uJ = [(0, Md.y)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], tJ = [(0, Md.y)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], VJ = [(0, Md.y)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], zJ = [(0, Md.y)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty", null)], HJ = [(0, Md.n)("ambient"), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], wJ = [(0, Md.n)("albedo"), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], AJ = [(0, Md.H)("baseWeight"), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], dk = [(0, Md.H)("baseDiffuseRoughness"), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], Jk = [(0, Md.n)("reflectivity"), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], kk = [(0, Md.n)("reflection"), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], pk = [(0, Md.n)("emissive"), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], Nk = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], Wk = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], Pk = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], Zk = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], gk = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], Ck = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], Kk = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], lk = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], Qk = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], Lk = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], Ok = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], ek = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], Rk = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], Ik = [(0, Md.H)()], Gk = [(0, Md.H)()], vk = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], xk = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], qk = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], Bk = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], sk = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], ik = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsLightsDirty")], ak = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], Mk = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsLightsDirty")], Fk = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], Yk = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], mk = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], bk = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], Sk = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], jk = [(0, Md.f)("_markAllSubMeshesAsTexturesDirty")], Xk = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], fk = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], nk = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], Uk = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsTexturesDirty")], yk = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsMiscDirty")], Dk = [(0, Md.H)(), (0, Md.f)("_markAllSubMeshesAsMiscDirty")], (0, ad.h)(dd, null, xJ, {
          kind: "accessor",
          name: "directIntensity",
          static: !1,
          private: !1,
          access: {
            has: dd => "directIntensity" in dd,
            get: dd => dd.directIntensity,
            set: (dd, Jd) => {
              dd.directIntensity = Jd
            }
          },
          metadata: Jd
        }, ck, hk), (0, ad.h)(dd, null, qJ, {
          kind: "accessor",
          name: "emissiveIntensity",
          static: !1,
          private: !1,
          access: {
            has: dd => "emissiveIntensity" in dd,
            get: dd => dd.emissiveIntensity,
            set: (dd, Jd) => {
              dd.emissiveIntensity = Jd
            }
          },
          metadata: Jd
        }, rk, uk), (0, ad.h)(dd, null, iJ, {
          kind: "accessor",
          name: "environmentIntensity",
          static: !1,
          private: !1,
          access: {
            has: dd => "environmentIntensity" in dd,
            get: dd => dd.environmentIntensity,
            set: (dd, Jd) => {
              dd.environmentIntensity = Jd
            }
          },
          metadata: Jd
        }, tk, Vk), (0, ad.h)(dd, null, aJ, {
          kind: "accessor",
          name: "specularIntensity",
          static: !1,
          private: !1,
          access: {
            has: dd => "specularIntensity" in dd,
            get: dd => dd.specularIntensity,
            set: (dd, Jd) => {
              dd.specularIntensity = Jd
            }
          },
          metadata: Jd
        }, zk, Hk), (0, ad.h)(dd, null, MJ, {
          kind: "accessor",
          name: "disableBumpMap",
          static: !1,
          private: !1,
          access: {
            has: dd => "disableBumpMap" in dd,
            get: dd => dd.disableBumpMap,
            set: (dd, Jd) => {
              dd.disableBumpMap = Jd
            }
          },
          metadata: Jd
        }, wk, Ak), (0, ad.h)(dd, null, FJ, {
          kind: "accessor",
          name: "albedoTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "albedoTexture" in dd,
            get: dd => dd.albedoTexture,
            set: (dd, Jd) => {
              dd.albedoTexture = Jd
            }
          },
          metadata: Jd
        }, dp, Jp), (0, ad.h)(dd, null, YJ, {
          kind: "accessor",
          name: "baseWeightTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "baseWeightTexture" in dd,
            get: dd => dd.baseWeightTexture,
            set: (dd, Jd) => {
              dd.baseWeightTexture = Jd
            }
          },
          metadata: Jd
        }, kp, pp), (0, ad.h)(dd, null, mJ, {
          kind: "accessor",
          name: "baseDiffuseRoughnessTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "baseDiffuseRoughnessTexture" in dd,
            get: dd => dd.baseDiffuseRoughnessTexture,
            set: (dd, Jd) => {
              dd.baseDiffuseRoughnessTexture = Jd
            }
          },
          metadata: Jd
        }, Np, Wp), (0, ad.h)(dd, null, bJ, {
          kind: "accessor",
          name: "ambientTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "ambientTexture" in dd,
            get: dd => dd.ambientTexture,
            set: (dd, Jd) => {
              dd.ambientTexture = Jd
            }
          },
          metadata: Jd
        }, Pp, Zp), (0, ad.h)(dd, null, SJ, {
          kind: "accessor",
          name: "ambientTextureStrength",
          static: !1,
          private: !1,
          access: {
            has: dd => "ambientTextureStrength" in dd,
            get: dd => dd.ambientTextureStrength,
            set: (dd, Jd) => {
              dd.ambientTextureStrength = Jd
            }
          },
          metadata: Jd
        }, gp, Cp), (0, ad.h)(dd, null, jJ, {
          kind: "accessor",
          name: "ambientTextureImpactOnAnalyticalLights",
          static: !1,
          private: !1,
          access: {
            has: dd => "ambientTextureImpactOnAnalyticalLights" in dd,
            get: dd => dd.ambientTextureImpactOnAnalyticalLights,
            set: (dd, Jd) => {
              dd.ambientTextureImpactOnAnalyticalLights = Jd
            }
          },
          metadata: Jd
        }, Kp, op), (0, ad.h)(dd, null, XJ, {
          kind: "accessor",
          name: "opacityTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "opacityTexture" in dd,
            get: dd => dd.opacityTexture,
            set: (dd, Jd) => {
              dd.opacityTexture = Jd
            }
          },
          metadata: Jd
        }, lp, Qp), (0, ad.h)(dd, null, fJ, {
          kind: "accessor",
          name: "reflectionTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "reflectionTexture" in dd,
            get: dd => dd.reflectionTexture,
            set: (dd, Jd) => {
              dd.reflectionTexture = Jd
            }
          },
          metadata: Jd
        }, Lp, Op), (0, ad.h)(dd, null, nJ, {
          kind: "accessor",
          name: "emissiveTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "emissiveTexture" in dd,
            get: dd => dd.emissiveTexture,
            set: (dd, Jd) => {
              dd.emissiveTexture = Jd
            }
          },
          metadata: Jd
        }, ep, Rp), (0, ad.h)(dd, null, UJ, {
          kind: "accessor",
          name: "reflectivityTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "reflectivityTexture" in dd,
            get: dd => dd.reflectivityTexture,
            set: (dd, Jd) => {
              dd.reflectivityTexture = Jd
            }
          },
          metadata: Jd
        }, Ip, Gp), (0, ad.h)(dd, null, yJ, {
          kind: "accessor",
          name: "metallicTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "metallicTexture" in dd,
            get: dd => dd.metallicTexture,
            set: (dd, Jd) => {
              dd.metallicTexture = Jd
            }
          },
          metadata: Jd
        }, vp, xp), (0, ad.h)(dd, null, DJ, {
          kind: "accessor",
          name: "metallic",
          static: !1,
          private: !1,
          access: {
            has: dd => "metallic" in dd,
            get: dd => dd.metallic,
            set: (dd, Jd) => {
              dd.metallic = Jd
            }
          },
          metadata: Jd
        }, qp, Bp), (0, ad.h)(dd, null, TJ, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: dd => "roughness" in dd,
            get: dd => dd.roughness,
            set: (dd, Jd) => {
              dd.roughness = Jd
            }
          },
          metadata: Jd
        }, sp, ip), (0, ad.h)(dd, null, EJ, {
          kind: "accessor",
          name: "metallicF0Factor",
          static: !1,
          private: !1,
          access: {
            has: dd => "metallicF0Factor" in dd,
            get: dd => dd.metallicF0Factor,
            set: (dd, Jd) => {
              dd.metallicF0Factor = Jd
            }
          },
          metadata: Jd
        }, ap, Mp), (0, ad.h)(dd, null, cJ, {
          kind: "accessor",
          name: "metallicReflectanceColor",
          static: !1,
          private: !1,
          access: {
            has: dd => "metallicReflectanceColor" in dd,
            get: dd => dd.metallicReflectanceColor,
            set: (dd, Jd) => {
              dd.metallicReflectanceColor = Jd
            }
          },
          metadata: Jd
        }, Fp, Yp), (0, ad.h)(dd, null, hJ, {
          kind: "accessor",
          name: "useOnlyMetallicFromMetallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "useOnlyMetallicFromMetallicReflectanceTexture" in dd,
            get: dd => dd.useOnlyMetallicFromMetallicReflectanceTexture,
            set: (dd, Jd) => {
              dd.useOnlyMetallicFromMetallicReflectanceTexture = Jd
            }
          },
          metadata: Jd
        }, mp, bp), (0, ad.h)(dd, null, rJ, {
          kind: "accessor",
          name: "metallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "metallicReflectanceTexture" in dd,
            get: dd => dd.metallicReflectanceTexture,
            set: (dd, Jd) => {
              dd.metallicReflectanceTexture = Jd
            }
          },
          metadata: Jd
        }, Sp, jp), (0, ad.h)(dd, null, uJ, {
          kind: "accessor",
          name: "reflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "reflectanceTexture" in dd,
            get: dd => dd.reflectanceTexture,
            set: (dd, Jd) => {
              dd.reflectanceTexture = Jd
            }
          },
          metadata: Jd
        }, Xp, fp), (0, ad.h)(dd, null, tJ, {
          kind: "accessor",
          name: "microSurfaceTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "microSurfaceTexture" in dd,
            get: dd => dd.microSurfaceTexture,
            set: (dd, Jd) => {
              dd.microSurfaceTexture = Jd
            }
          },
          metadata: Jd
        }, np, Up), (0, ad.h)(dd, null, VJ, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "bumpTexture" in dd,
            get: dd => dd.bumpTexture,
            set: (dd, Jd) => {
              dd.bumpTexture = Jd
            }
          },
          metadata: Jd
        }, yp, Dp), (0, ad.h)(dd, null, zJ, {
          kind: "accessor",
          name: "lightmapTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "lightmapTexture" in dd,
            get: dd => dd.lightmapTexture,
            set: (dd, Jd) => {
              dd.lightmapTexture = Jd
            }
          },
          metadata: Jd
        }, Tp, Ep), (0, ad.h)(dd, null, HJ, {
          kind: "accessor",
          name: "ambientColor",
          static: !1,
          private: !1,
          access: {
            has: dd => "ambientColor" in dd,
            get: dd => dd.ambientColor,
            set: (dd, Jd) => {
              dd.ambientColor = Jd
            }
          },
          metadata: Jd
        }, cp, hp), (0, ad.h)(dd, null, wJ, {
          kind: "accessor",
          name: "albedoColor",
          static: !1,
          private: !1,
          access: {
            has: dd => "albedoColor" in dd,
            get: dd => dd.albedoColor,
            set: (dd, Jd) => {
              dd.albedoColor = Jd
            }
          },
          metadata: Jd
        }, rp, tp), (0, ad.h)(dd, null, AJ, {
          kind: "accessor",
          name: "baseWeight",
          static: !1,
          private: !1,
          access: {
            has: dd => "baseWeight" in dd,
            get: dd => dd.baseWeight,
            set: (dd, Jd) => {
              dd.baseWeight = Jd
            }
          },
          metadata: Jd
        }, Vp, zp), (0, ad.h)(dd, null, dk, {
          kind: "accessor",
          name: "baseDiffuseRoughness",
          static: !1,
          private: !1,
          access: {
            has: dd => "baseDiffuseRoughness" in dd,
            get: dd => dd.baseDiffuseRoughness,
            set: (dd, Jd) => {
              dd.baseDiffuseRoughness = Jd
            }
          },
          metadata: Jd
        }, Hp, wp), (0, ad.h)(dd, null, Jk, {
          kind: "accessor",
          name: "reflectivityColor",
          static: !1,
          private: !1,
          access: {
            has: dd => "reflectivityColor" in dd,
            get: dd => dd.reflectivityColor,
            set: (dd, Jd) => {
              dd.reflectivityColor = Jd
            }
          },
          metadata: Jd
        }, Ap, dN), (0, ad.h)(dd, null, kk, {
          kind: "accessor",
          name: "reflectionColor",
          static: !1,
          private: !1,
          access: {
            has: dd => "reflectionColor" in dd,
            get: dd => dd.reflectionColor,
            set: (dd, Jd) => {
              dd.reflectionColor = Jd
            }
          },
          metadata: Jd
        }, JN, kN), (0, ad.h)(dd, null, pk, {
          kind: "accessor",
          name: "emissiveColor",
          static: !1,
          private: !1,
          access: {
            has: dd => "emissiveColor" in dd,
            get: dd => dd.emissiveColor,
            set: (dd, Jd) => {
              dd.emissiveColor = Jd
            }
          },
          metadata: Jd
        }, pN, NN), (0, ad.h)(dd, null, Nk, {
          kind: "accessor",
          name: "microSurface",
          static: !1,
          private: !1,
          access: {
            has: dd => "microSurface" in dd,
            get: dd => dd.microSurface,
            set: (dd, Jd) => {
              dd.microSurface = Jd
            }
          },
          metadata: Jd
        }, WN, PN), (0, ad.h)(dd, null, Wk, {
          kind: "accessor",
          name: "useLightmapAsShadowmap",
          static: !1,
          private: !1,
          access: {
            has: dd => "useLightmapAsShadowmap" in dd,
            get: dd => dd.useLightmapAsShadowmap,
            set: (dd, Jd) => {
              dd.useLightmapAsShadowmap = Jd
            }
          },
          metadata: Jd
        }, ZN, gN), (0, ad.h)(dd, null, Pk, {
          kind: "accessor",
          name: "useAlphaFromAlbedoTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "useAlphaFromAlbedoTexture" in dd,
            get: dd => dd.useAlphaFromAlbedoTexture,
            set: (dd, Jd) => {
              dd.useAlphaFromAlbedoTexture = Jd
            }
          },
          metadata: Jd
        }, CN, KN), (0, ad.h)(dd, null, Zk, {
          kind: "accessor",
          name: "forceAlphaTest",
          static: !1,
          private: !1,
          access: {
            has: dd => "forceAlphaTest" in dd,
            get: dd => dd.forceAlphaTest,
            set: (dd, Jd) => {
              dd.forceAlphaTest = Jd
            }
          },
          metadata: Jd
        }, oN, lN), (0, ad.h)(dd, null, gk, {
          kind: "accessor",
          name: "alphaCutOff",
          static: !1,
          private: !1,
          access: {
            has: dd => "alphaCutOff" in dd,
            get: dd => dd.alphaCutOff,
            set: (dd, Jd) => {
              dd.alphaCutOff = Jd
            }
          },
          metadata: Jd
        }, QN, LN), (0, ad.h)(dd, null, Ck, {
          kind: "accessor",
          name: "useSpecularOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: dd => "useSpecularOverAlpha" in dd,
            get: dd => dd.useSpecularOverAlpha,
            set: (dd, Jd) => {
              dd.useSpecularOverAlpha = Jd
            }
          },
          metadata: Jd
        }, ON, eN), (0, ad.h)(dd, null, Kk, {
          kind: "accessor",
          name: "useMicroSurfaceFromReflectivityMapAlpha",
          static: !1,
          private: !1,
          access: {
            has: dd => "useMicroSurfaceFromReflectivityMapAlpha" in dd,
            get: dd => dd.useMicroSurfaceFromReflectivityMapAlpha,
            set: (dd, Jd) => {
              dd.useMicroSurfaceFromReflectivityMapAlpha = Jd
            }
          },
          metadata: Jd
        }, RN, IN), (0, ad.h)(dd, null, lk, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureAlpha",
          static: !1,
          private: !1,
          access: {
            has: dd => "useRoughnessFromMetallicTextureAlpha" in dd,
            get: dd => dd.useRoughnessFromMetallicTextureAlpha,
            set: (dd, Jd) => {
              dd.useRoughnessFromMetallicTextureAlpha = Jd
            }
          },
          metadata: Jd
        }, GN, vN), (0, ad.h)(dd, null, Qk, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureGreen",
          static: !1,
          private: !1,
          access: {
            has: dd => "useRoughnessFromMetallicTextureGreen" in dd,
            get: dd => dd.useRoughnessFromMetallicTextureGreen,
            set: (dd, Jd) => {
              dd.useRoughnessFromMetallicTextureGreen = Jd
            }
          },
          metadata: Jd
        }, xN, qN), (0, ad.h)(dd, null, Lk, {
          kind: "accessor",
          name: "useMetallnessFromMetallicTextureBlue",
          static: !1,
          private: !1,
          access: {
            has: dd => "useMetallnessFromMetallicTextureBlue" in dd,
            get: dd => dd.useMetallnessFromMetallicTextureBlue,
            set: (dd, Jd) => {
              dd.useMetallnessFromMetallicTextureBlue = Jd
            }
          },
          metadata: Jd
        }, BN, sN), (0, ad.h)(dd, null, Ok, {
          kind: "accessor",
          name: "useAmbientOcclusionFromMetallicTextureRed",
          static: !1,
          private: !1,
          access: {
            has: dd => "useAmbientOcclusionFromMetallicTextureRed" in dd,
            get: dd => dd.useAmbientOcclusionFromMetallicTextureRed,
            set: (dd, Jd) => {
              dd.useAmbientOcclusionFromMetallicTextureRed = Jd
            }
          },
          metadata: Jd
        }, iN, aN), (0, ad.h)(dd, null, ek, {
          kind: "accessor",
          name: "useAmbientInGrayScale",
          static: !1,
          private: !1,
          access: {
            has: dd => "useAmbientInGrayScale" in dd,
            get: dd => dd.useAmbientInGrayScale,
            set: (dd, Jd) => {
              dd.useAmbientInGrayScale = Jd
            }
          },
          metadata: Jd
        }, MN, FN), (0, ad.h)(dd, null, Rk, {
          kind: "accessor",
          name: "useAutoMicroSurfaceFromReflectivityMap",
          static: !1,
          private: !1,
          access: {
            has: dd => "useAutoMicroSurfaceFromReflectivityMap" in dd,
            get: dd => dd.useAutoMicroSurfaceFromReflectivityMap,
            set: (dd, Jd) => {
              dd.useAutoMicroSurfaceFromReflectivityMap = Jd
            }
          },
          metadata: Jd
        }, YN, mN), (0, ad.h)(dd, null, Ik, {
          kind: "getter",
          name: "usePhysicalLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: dd => "usePhysicalLightFalloff" in dd,
            get: dd => dd.usePhysicalLightFalloff
          },
          metadata: Jd
        }, null, Ek), (0, ad.h)(dd, null, Gk, {
          kind: "getter",
          name: "useGLTFLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: dd => "useGLTFLightFalloff" in dd,
            get: dd => dd.useGLTFLightFalloff
          },
          metadata: Jd
        }, null, Ek), (0, ad.h)(dd, null, vk, {
          kind: "accessor",
          name: "useRadianceOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: dd => "useRadianceOverAlpha" in dd,
            get: dd => dd.useRadianceOverAlpha,
            set: (dd, Jd) => {
              dd.useRadianceOverAlpha = Jd
            }
          },
          metadata: Jd
        }, bN, SN), (0, ad.h)(dd, null, xk, {
          kind: "accessor",
          name: "useObjectSpaceNormalMap",
          static: !1,
          private: !1,
          access: {
            has: dd => "useObjectSpaceNormalMap" in dd,
            get: dd => dd.useObjectSpaceNormalMap,
            set: (dd, Jd) => {
              dd.useObjectSpaceNormalMap = Jd
            }
          },
          metadata: Jd
        }, jN, XN), (0, ad.h)(dd, null, qk, {
          kind: "accessor",
          name: "useParallax",
          static: !1,
          private: !1,
          access: {
            has: dd => "useParallax" in dd,
            get: dd => dd.useParallax,
            set: (dd, Jd) => {
              dd.useParallax = Jd
            }
          },
          metadata: Jd
        }, fN, nN), (0, ad.h)(dd, null, Bk, {
          kind: "accessor",
          name: "useParallaxOcclusion",
          static: !1,
          private: !1,
          access: {
            has: dd => "useParallaxOcclusion" in dd,
            get: dd => dd.useParallaxOcclusion,
            set: (dd, Jd) => {
              dd.useParallaxOcclusion = Jd
            }
          },
          metadata: Jd
        }, UN, yN), (0, ad.h)(dd, null, sk, {
          kind: "accessor",
          name: "parallaxScaleBias",
          static: !1,
          private: !1,
          access: {
            has: dd => "parallaxScaleBias" in dd,
            get: dd => dd.parallaxScaleBias,
            set: (dd, Jd) => {
              dd.parallaxScaleBias = Jd
            }
          },
          metadata: Jd
        }, DN, TN), (0, ad.h)(dd, null, ik, {
          kind: "accessor",
          name: "disableLighting",
          static: !1,
          private: !1,
          access: {
            has: dd => "disableLighting" in dd,
            get: dd => dd.disableLighting,
            set: (dd, Jd) => {
              dd.disableLighting = Jd
            }
          },
          metadata: Jd
        }, EN, cN), (0, ad.h)(dd, null, ak, {
          kind: "accessor",
          name: "forceIrradianceInFragment",
          static: !1,
          private: !1,
          access: {
            has: dd => "forceIrradianceInFragment" in dd,
            get: dd => dd.forceIrradianceInFragment,
            set: (dd, Jd) => {
              dd.forceIrradianceInFragment = Jd
            }
          },
          metadata: Jd
        }, hN, rN), (0, ad.h)(dd, null, Mk, {
          kind: "accessor",
          name: "maxSimultaneousLights",
          static: !1,
          private: !1,
          access: {
            has: dd => "maxSimultaneousLights" in dd,
            get: dd => dd.maxSimultaneousLights,
            set: (dd, Jd) => {
              dd.maxSimultaneousLights = Jd
            }
          },
          metadata: Jd
        }, uN, tN), (0, ad.h)(dd, null, Fk, {
          kind: "accessor",
          name: "invertNormalMapX",
          static: !1,
          private: !1,
          access: {
            has: dd => "invertNormalMapX" in dd,
            get: dd => dd.invertNormalMapX,
            set: (dd, Jd) => {
              dd.invertNormalMapX = Jd
            }
          },
          metadata: Jd
        }, VN, zN), (0, ad.h)(dd, null, Yk, {
          kind: "accessor",
          name: "invertNormalMapY",
          static: !1,
          private: !1,
          access: {
            has: dd => "invertNormalMapY" in dd,
            get: dd => dd.invertNormalMapY,
            set: (dd, Jd) => {
              dd.invertNormalMapY = Jd
            }
          },
          metadata: Jd
        }, HN, wN), (0, ad.h)(dd, null, mk, {
          kind: "accessor",
          name: "twoSidedLighting",
          static: !1,
          private: !1,
          access: {
            has: dd => "twoSidedLighting" in dd,
            get: dd => dd.twoSidedLighting,
            set: (dd, Jd) => {
              dd.twoSidedLighting = Jd
            }
          },
          metadata: Jd
        }, AN, dW), (0, ad.h)(dd, null, bk, {
          kind: "accessor",
          name: "useAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: dd => "useAlphaFresnel" in dd,
            get: dd => dd.useAlphaFresnel,
            set: (dd, Jd) => {
              dd.useAlphaFresnel = Jd
            }
          },
          metadata: Jd
        }, JW, kW), (0, ad.h)(dd, null, Sk, {
          kind: "accessor",
          name: "useLinearAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: dd => "useLinearAlphaFresnel" in dd,
            get: dd => dd.useLinearAlphaFresnel,
            set: (dd, Jd) => {
              dd.useLinearAlphaFresnel = Jd
            }
          },
          metadata: Jd
        }, pW, NW), (0, ad.h)(dd, null, jk, {
          kind: "accessor",
          name: "environmentBRDFTexture",
          static: !1,
          private: !1,
          access: {
            has: dd => "environmentBRDFTexture" in dd,
            get: dd => dd.environmentBRDFTexture,
            set: (dd, Jd) => {
              dd.environmentBRDFTexture = Jd
            }
          },
          metadata: Jd
        }, WW, PW), (0, ad.h)(dd, null, Xk, {
          kind: "accessor",
          name: "forceNormalForward",
          static: !1,
          private: !1,
          access: {
            has: dd => "forceNormalForward" in dd,
            get: dd => dd.forceNormalForward,
            set: (dd, Jd) => {
              dd.forceNormalForward = Jd
            }
          },
          metadata: Jd
        }, ZW, gW), (0, ad.h)(dd, null, fk, {
          kind: "accessor",
          name: "enableSpecularAntiAliasing",
          static: !1,
          private: !1,
          access: {
            has: dd => "enableSpecularAntiAliasing" in dd,
            get: dd => dd.enableSpecularAntiAliasing,
            set: (dd, Jd) => {
              dd.enableSpecularAntiAliasing = Jd
            }
          },
          metadata: Jd
        }, CW, KW), (0, ad.h)(dd, null, nk, {
          kind: "accessor",
          name: "useHorizonOcclusion",
          static: !1,
          private: !1,
          access: {
            has: dd => "useHorizonOcclusion" in dd,
            get: dd => dd.useHorizonOcclusion,
            set: (dd, Jd) => {
              dd.useHorizonOcclusion = Jd
            }
          },
          metadata: Jd
        }, oW, lW), (0, ad.h)(dd, null, Uk, {
          kind: "accessor",
          name: "useRadianceOcclusion",
          static: !1,
          private: !1,
          access: {
            has: dd => "useRadianceOcclusion" in dd,
            get: dd => dd.useRadianceOcclusion,
            set: (dd, Jd) => {
              dd.useRadianceOcclusion = Jd
            }
          },
          metadata: Jd
        }, QW, LW), (0, ad.h)(dd, null, yk, {
          kind: "accessor",
          name: "unlit",
          static: !1,
          private: !1,
          access: {
            has: dd => "unlit" in dd,
            get: dd => dd.unlit,
            set: (dd, Jd) => {
              dd.unlit = Jd
            }
          },
          metadata: Jd
        }, OW, eW), (0, ad.h)(dd, null, Dk, {
          kind: "accessor",
          name: "applyDecalMapAfterDetailMap",
          static: !1,
          private: !1,
          access: {
            has: dd => "applyDecalMapAfterDetailMap" in dd,
            get: dd => dd.applyDecalMapAfterDetailMap,
            set: (dd, Jd) => {
              dd.applyDecalMapAfterDetailMap = Jd
            }
          },
          metadata: Jd
        }, RW, IW), Jd && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Jd
        })
      })(), dd.PBRMATERIAL_OPAQUE = BJ.PBRMATERIAL_OPAQUE, dd.PBRMATERIAL_ALPHATEST = BJ.PBRMATERIAL_ALPHATEST, dd.PBRMATERIAL_ALPHABLEND = BJ.PBRMATERIAL_ALPHABLEND, dd.PBRMATERIAL_ALPHATESTANDBLEND = BJ.PBRMATERIAL_ALPHATESTANDBLEND, dd.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = BJ.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, dd
    })();
    const yN = "KHR_materials_diffuse_transmission";

    function DN(dd, Jd) {
      const kd = Jd.subSurface;
      let pd = null;
      return kd.translucencyIntensityTexture ? pd = kd.translucencyIntensityTexture : kd.thicknessTexture && kd.useMaskFromThicknessTexture && (pd = kd.thicknessTexture), pd && !kd.useGltfStyleTextures ? (Fd.c.Warn(`${dd}: Translucency intensity texture is not supported when useGltfStyleTextures = false. Ignoring for: ${Jd.name}`, 1), null) : pd
    }
    class TN {
      constructor(dd) {
        this.name = yN, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = dd
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(dd, Jd, kd) {
        const pd = [];
        if (kd instanceof UN && this._isExtensionEnabled(kd)) {
          const Jd = DN(dd, kd);
          return Jd && pd.push(Jd), kd.subSurface.translucencyColorTexture && pd.push(kd.subSurface.translucencyColorTexture), pd
        }
        return pd
      }
      _isExtensionEnabled(dd) {
        if (dd.unlit) return !1;
        const Jd = dd.subSurface;
        return !!Jd.isTranslucencyEnabled && (!dd.unlit && !Jd.useAlbedoToTintTranslucency && Jd.useGltfStyleTextures && 1 === Jd.volumeIndexOfRefraction && 0 === Jd.minimumThickness && 0 === Jd.maximumThickness)
      }
      postExportMaterialAsync(dd, Jd, kd) {
        return new Promise((pd => {
          if (kd instanceof UN && this._isExtensionEnabled(kd)) {
            this._wasUsed = !0;
            const pd = kd.subSurface,
              Nd = DN(dd, kd),
              Wd = 0 == pd.translucencyIntensity ? void 0 : pd.translucencyIntensity,
              Pd = this._exporter._materialExporter.getTextureInfo(Nd) ?? void 0,
              Zd = !pd.translucencyColor || pd.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : pd.translucencyColor.spd(),
              gd = this._exporter._materialExporter.getTextureInfo(pd.translucencyColorTexture) ?? void 0,
              Cd = {
                diffuseTransmissionFactor: Wd,
                diffuseTransmissionTexture: Pd,
                diffuseTransmissionColorFactor: Zd,
                diffuseTransmissionColorTexture: gd
              };
            (Pd || gd) && this._exporter._materialNeedsUVsSet.add(kd), Jd.extensions = Jd.extensions || {}, Jd.extensions[yN] = Cd
          }
          pd(Jd)
        }))
      }
    }
    let EN = !1;

    function cN() {
      EN || (EN = !0, fp.RegisterExtension(yN, (dd => new TN(dd))))
    }
    cN();
    const hN = "KHR_materials_dispersion";
    class rN {
      constructor() {
        this.name = hN, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(dd) {
        if (dd.unlit) return !1;
        const Jd = dd.subSurface;
        return !(!Jd.isRefractionEnabled && !Jd.isDispersionEnabled)
      }
      postExportMaterialAsync(dd, Jd, kd) {
        return new Promise((dd => {
          if (kd instanceof UN && this._isExtensionEnabled(kd)) {
            this._wasUsed = !0;
            const dd = {
              dispersion: kd.subSurface.dispersion
            };
            Jd.extensions = Jd.extensions || {}, Jd.extensions[hN] = dd
          }
          dd(Jd)
        }))
      }
    }
    let uN = !1;

    function tN() {
      uN || (uN = !0, fp.RegisterExtension(hN, (() => new rN)))
    }
    tN();
    const VN = "KHR_materials_emissive_strength";
    class zN {
      constructor() {
        this.name = VN, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAsync(dd, Jd, kd) {
        return await new Promise((dd => {
          if (!(kd instanceof UN)) return dd(Jd);
          const pd = kd.emissiveColor.scale(kd.emissiveIntensity),
            Nd = Math.max(...pd.spd());
          if (Nd > 1) {
            Jd.emissiveFactor = pd.scale(1 / Nd).spd(), this._wasUsed = !0;
            const dd = {
              emissiveStrength: Nd
            };
            Jd.extensions || (Jd.extensions = {}), Jd.extensions[VN] = dd
          } else Jd.emissiveFactor = pd.spd();
          return dd(Jd)
        }))
      }
    }
    let HN = !1;

    function wN() {
      HN || (HN = !0, fp.RegisterExtension(VN, (() => new zN)))
    }
    wN();
    const AN = "KHR_materials_ior";
    class dW {
      constructor() {
        this.name = AN, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(dd) {
        return !dd.unlit && (dd instanceof AJ ? 1.5 != dd.specularIor : dd instanceof UN && (void 0 != dd.indexOfRefraction && 1.5 != dd.indexOfRefraction))
      }
      postExportMaterialAsync(dd, Jd, kd) {
        return new Promise((dd => {
          if (kd instanceof UN && this._isExtensionEnabled(kd)) {
            this._wasUsed = !0;
            const dd = {
              ior: kd.indexOfRefraction
            };
            Jd.extensions = Jd.extensions || {}, Jd.extensions[AN] = dd
          } else if (kd instanceof AJ && this._isExtensionEnabled(kd)) {
            this._wasUsed = !0;
            const dd = {
              ior: kd.specularIor
            };
            Jd.extensions = Jd.extensions || {}, Jd.extensions[AN] = dd
          }
          dd(Jd)
        }))
      }
    }
    let JW = !1;

    function kW() {
      JW || (JW = !0, fp.RegisterExtension(AN, (() => new dW)))
    }
    kW();
    const pW = "KHR_materials_iridescence";
    class NW {
      constructor(dd) {
        this.name = pW, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = dd
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(dd, Jd, kd) {
        const pd = [];
        if (kd instanceof BJ) {
          if (kd.iridescence.isEnabled) return kd.iridescence.texture && pd.push(kd.iridescence.texture), kd.iridescence.thicknessTexture && kd.iridescence.thicknessTexture !== kd.iridescence.texture && pd.push(kd.iridescence.thicknessTexture), pd
        } else if (kd instanceof AJ && kd.thinFilmWeight > 0) return kd.thinFilmWeightTexture && pd.push(kd.thinFilmWeightTexture), kd.thinFilmThicknessTexture && kd.thinFilmThicknessTexture !== kd.thinFilmWeightTexture && pd.push(kd.thinFilmThicknessTexture), pd;
        return []
      }
      postExportMaterialAsync(dd, Jd, kd) {
        return new Promise((dd => {
          if (kd instanceof BJ) {
            if (!kd.iridescence.isEnabled) return void dd(Jd);
            this._wasUsed = !0, Jd.extensions = Jd.extensions || {};
            const pd = this._exporter._materialExporter.getTextureInfo(kd.iridescence.texture),
              Nd = this._exporter._materialExporter.getTextureInfo(kd.iridescence.thicknessTexture),
              Wd = {
                iridescenceFactor: kd.iridescence.intensity,
                iridescenceIor: kd.iridescence.indexOfRefraction,
                iridescenceThicknessMinimum: kd.iridescence.minimumThickness,
                iridescenceThicknessMaximum: kd.iridescence.maximumThickness,
                iridescenceTexture: pd ?? void 0,
                iridescenceThicknessTexture: Nd ?? void 0
              };
            null === Wd.iridescenceTexture && null === Wd.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(kd), Jd.extensions[pW] = Wd
          } else if (kd instanceof AJ) {
            if (kd.thinFilmWeight <= 0) return void dd(Jd);
            this._wasUsed = !0, Jd.extensions = Jd.extensions || {};
            const pd = this._exporter._materialExporter.getTextureInfo(kd.thinFilmWeightTexture),
              Nd = this._exporter._materialExporter.getTextureInfo(kd.thinFilmThicknessTexture),
              Wd = {
                iridescenceFactor: kd.thinFilmWeight,
                iridescenceIor: kd.thinFilmIor,
                iridescenceThicknessMinimum: 1e3 * kd.thinFilmThicknessMin,
                iridescenceThicknessMaximum: 1e3 * kd.thinFilmThickness,
                iridescenceTexture: pd ?? void 0,
                iridescenceThicknessTexture: Nd ?? void 0
              };
            null === Wd.iridescenceTexture && null === Wd.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(kd), Jd.extensions[pW] = Wd
          }
          dd(Jd)
        }))
      }
    }
    let WW = !1;

    function PW() {
      WW || (WW = !0, fp.RegisterExtension(pW, (dd => new NW(dd))))
    }
    PW();
    const ZW = "KHR_materials_sheen";
    class gW {
      constructor(dd) {
        this.name = ZW, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = dd
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(dd, Jd, kd) {
        return kd instanceof UN && kd.sheen.isEnabled && kd.sheen.texture ? [kd.sheen.texture] : []
      }
      async postExportMaterialAsync(dd, Jd, kd) {
        return await new Promise((dd => {
          if (kd instanceof UN) {
            if (!kd.sheen.isEnabled) return void dd(Jd);
            this._wasUsed = !0, null == Jd.extensions && (Jd.extensions = {});
            const pd = {
              sheenColorFactor: kd.sheen.color.spd(),
              sheenRoughnessFactor: kd.sheen.roughness ?? 0
            };
            null === pd.sheenColorTexture && null === pd.sheenRoughnessTexture || this._exporter._materialNeedsUVsSet.add(kd), kd.sheen.texture && (pd.sheenColorTexture = this._exporter._materialExporter.getTextureInfo(kd.sheen.texture) ?? void 0), kd.sheen.textureRoughness && !kd.sheen.useRoughnessFromMainTexture ? pd.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(kd.sheen.textureRoughness) ?? void 0 : kd.sheen.texture && kd.sheen.useRoughnessFromMainTexture && (pd.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(kd.sheen.texture) ?? void 0), Jd.extensions[ZW] = pd
          }
          dd(Jd)
        }))
      }
    }
    let CW = !1;

    function KW() {
      CW || (CW = !0, fp.RegisterExtension(ZW, (dd => new gW(dd))))
    }
    KW();
    const oW = "KHR_materials_fuzz";

    function lW(dd, Jd) {
      const kd = new md.c(Jd.name, Jd.Wm());
      return kd._texture = dd, kd.coordinatesIndex = Jd.coordinatesIndex, Jd instanceof md.c && (kd.uOffset = Jd.uOffset, kd.vOffset = Jd.vOffset, kd.uScale = Jd.uScale, kd.vScale = Jd.vScale, kd.wAng = Jd.wAng), kd.wrapU = Jd.wrapU, kd.wrapV = Jd.wrapV, kd
    }
    class QW {
      constructor(dd) {
        this.name = oW, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = dd
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
      async postExportMaterialAdditionalTexturesAsync(dd, Jd, kd) {
        if (kd instanceof AJ) {
          const dd = [];
          if (kd.fuzzWeight > 0) {
            kd.fuzzWeightTexture && dd.push(kd.fuzzWeightTexture);
            let Jd = !1;
            if (kd.fuzzRoughnessTexture && (kd._useFuzzRoughnessFromTextureAlpha ? dd.push(kd.fuzzRoughnessTexture) : Jd = !0), kd.fuzzColorTexture && !Jd && dd.push(kd.fuzzColorTexture), Jd) {
              const Jd = function(dd) {
                const Jd = dd.fuzzColorTexture,
                  kd = Jd && Jd.getInternalTexture() ? Jd.getInternalTexture().uniqueId : "NoFuzzColor",
                  pd = dd.fuzzRoughnessTexture;
                return `FuzzColor_${kd}_FuzzRoughness_${pd&&pd.getInternalTexture()?pd.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
              }(kd);
              if (!this._cachedInternalTexturesMap[Jd]) {
                const dd = await async function(dd) {
                  const Jd = dd.Wm(),
                    kd = dd.fuzzColorTexture,
                    pd = dd.fuzzRoughnessTexture;
                  return kd || pd ? (await Zk("FuzzTexture", Kk(kd ? gk(kd, 0) : Ck(1), kd ? gk(kd, 1) : Ck(1), kd ? gk(kd, 2) : Ck(1), pd ? gk(pd, dd._useFuzzRoughnessFromTextureAlpha ? 3 : 0) : Ck(1)), Jd)).getInternalTexture() : null
                }(kd);
                dd && (this._cachedInternalTexturesMap[Jd] = dd)
              }
              this._cachedInternalTexturesMap[Jd] && (kd.fuzzColorTexture && (this._mergedTexturesMap[kd.fuzzColorTexture.uniqueId] = lW(this._cachedInternalTexturesMap[Jd], kd.fuzzColorTexture), dd.push(this._mergedTexturesMap[kd.fuzzColorTexture.uniqueId])), kd.fuzzRoughnessTexture && (this._mergedTexturesMap[kd.fuzzRoughnessTexture.uniqueId] = lW(this._cachedInternalTexturesMap[Jd], kd.fuzzRoughnessTexture), dd.push(this._mergedTexturesMap[kd.fuzzRoughnessTexture.uniqueId])))
            }
          }
          return dd
        }
        return []
      }
      async postExportMaterialAsync(dd, Jd, kd) {
        return await new Promise((dd => {
          if (kd instanceof AJ) {
            if (0 == kd.fuzzWeight) return void dd(Jd);
            this._wasUsed = !0, null == Jd.extensions && (Jd.extensions = {});
            const pd = {
              fuzzFactor: kd.fuzzWeight,
              fuzzColorFactor: kd.fuzzColor.spd(),
              fuzzRoughnessFactor: kd.fuzzRoughness
            };
            let Nd, Wd;
            kd.fuzzWeightTexture && (pd.fuzzTexture = this._exporter._materialExporter.getTextureInfo(kd.fuzzWeightTexture) ?? void 0), kd.fuzzColorTexture && (Nd = this._mergedTexturesMap[kd.fuzzColorTexture.uniqueId] ? this._mergedTexturesMap[kd.fuzzColorTexture.uniqueId] : kd.fuzzColorTexture, pd.fuzzColorTexture = this._exporter._materialExporter.getTextureInfo(Nd) ?? void 0), kd.fuzzRoughnessTexture && (Wd = this._mergedTexturesMap[kd.fuzzRoughnessTexture.uniqueId] ? this._mergedTexturesMap[kd.fuzzRoughnessTexture.uniqueId] : kd.fuzzRoughnessTexture, pd.fuzzRoughnessTexture = this._exporter._materialExporter.getTextureInfo(Wd) ?? void 0), null === pd.fuzzColorTexture && null === pd.fuzzRoughnessTexture || this._exporter._materialNeedsUVsSet.add(kd), Jd.extensions[oW] = pd
          }
          dd(Jd)
        }))
      }
    }
    let LW = !1;

    function OW() {
      LW || (LW = !0, fp.RegisterExtension(oW, (dd => new QW(dd))))
    }
    OW();
    const eW = "KHR_materials_specular";
    class RW {
      constructor(dd) {
        this.name = eW, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = dd
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(dd, Jd, kd) {
        const pd = [];
        return kd instanceof UN && this._isExtensionEnabled(kd) ? (kd.metallicReflectanceTexture && pd.push(kd.metallicReflectanceTexture), kd.reflectanceTexture && pd.push(kd.reflectanceTexture), pd) : pd
      }
      _isExtensionEnabled(dd) {
        return !dd.unlit && (void 0 != dd.metallicF0Factor && 1 != dd.metallicF0Factor || void 0 != dd.metallicReflectanceColor && !dd.metallicReflectanceColor.equalsFloats(1, 1, 1) || this._hasTexturesExtension(dd))
      }
      _hasTexturesExtension(dd) {
        return null != dd.metallicReflectanceTexture || null != dd.reflectanceTexture
      }
      postExportMaterialAsync(dd, Jd, kd) {
        return new Promise((dd => {
          var pd;
          if (kd instanceof UN && this._isExtensionEnabled(kd)) {
            this._wasUsed = !0, Jd.extensions = Jd.extensions || {};
            const dd = this._exporter._materialExporter.getTextureInfo(kd.metallicReflectanceTexture) ?? void 0,
              pd = this._exporter._materialExporter.getTextureInfo(kd.reflectanceTexture) ?? void 0,
              Nd = {
                specularFactor: 1 == kd.metallicF0Factor ? void 0 : kd.metallicF0Factor,
                specularTexture: dd,
                specularColorFactor: kd.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : kd.metallicReflectanceColor.spd(),
                specularColorTexture: pd
              };
            this._hasTexturesExtension(kd) && this._exporter._materialNeedsUVsSet.add(kd), Jd.extensions[eW] = Nd
          } else if (kd instanceof AJ) {
            Jd.extensions = Jd.extensions || {};
            const Nd = this._exporter._materialExporter.getTextureInfo(kd.specularWeightTexture) ?? void 0,
              Wd = this._exporter._materialExporter.getTextureInfo(kd.specularColorTexture) ?? void 0,
              Pd = 1 == kd.specularWeight ? void 0 : kd.specularWeight,
              Zd = kd.specularColor.equalsFloats(1, 1, 1) ? void 0 : kd.specularColor.spd();
            if (!Wd && !Nd && void 0 === Pd && void 0 === Zd) return dd(Jd);
            this._wasUsed = !0;
            const gd = {
                specularEdgeColorEnabled: !0
              },
              Cd = {
                specularFactor: Pd,
                specularTexture: Nd,
                specularColorFactor: Zd,
                specularColorTexture: Wd,
                extensions: {}
              };
            Cd.extensions.EXT_materials_specular_edge_color = gd, (pd = this._exporter._glTF).extensionsUsed || (pd.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("EXT_materials_specular_edge_color") && this._exporter._glTF.extensionsUsed.push("EXT_materials_specular_edge_color"), (Nd || Wd) && this._exporter._materialNeedsUVsSet.add(kd), Jd.extensions[eW] = Cd
          }
          dd(Jd)
        }))
      }
    }
    let IW = !1;

    function GW() {
      IW || (IW = !0, fp.RegisterExtension(eW, (dd => new RW(dd))))
    }
    GW();
    const vW = "KHR_materials_transmission";
    class xW {
      constructor(dd) {
        this.name = vW, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = dd
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(dd, Jd, kd) {
        const pd = [];
        if (kd instanceof UN) {
          if (this._isExtensionEnabled(kd)) return kd.subSurface.refractionIntensityTexture && kd.subSurface.useGltfStyleTextures && pd.push(kd.subSurface.refractionIntensityTexture), pd
        } else kd instanceof AJ && (kd.transmissionWeight > 0 && kd.transmissionWeightTexture && (pd.push(kd.transmissionWeightTexture), kd.transmissionColorTexture && pd.push(kd.transmissionColorTexture)), kd.subsurfaceWeight > 0 && kd.subsurfaceWeightTexture && pd.push(kd.subsurfaceWeightTexture));
        return pd
      }
      _isExtensionEnabled(dd) {
        if (dd instanceof AJ && !dd.unlit) return dd.transmissionWeight > 0 || dd.subsurfaceWeight > 0;
        if (dd instanceof UN && !dd.unlit) {
          const Jd = dd.subSurface;
          return Jd.isRefractionEnabled && void 0 != Jd.refractionIntensity && 0 != Jd.refractionIntensity || null != Jd.refractionIntensityTexture && Jd.useGltfStyleTextures
        }
        return !1
      }
      async postExportMaterialAsync(dd, Jd, kd) {
        if (!this._isExtensionEnabled(kd)) return Jd;
        if (kd instanceof UN) {
          this._wasUsed = !0;
          const pd = kd.subSurface,
            Nd = {
              transmissionFactor: 0 === pd.refractionIntensity ? void 0 : pd.refractionIntensity
            };
          if (pd.refractionIntensityTexture)
            if (pd.useGltfStyleTextures) {
              this._exporter._materialNeedsUVsSet.add(kd);
              const dd = this._exporter._materialExporter.getTextureInfo(pd.refractionIntensityTexture);
              dd && (Nd.transmissionTexture = dd)
            } else Fd.c.Warn(`${dd}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
          Jd.extensions || (Jd.extensions = {}), Jd.extensions[vW] = Nd
        } else if (kd instanceof AJ) {
          this._wasUsed = !0;
          const dd = {
            transmissionFactor: (1 - kd.transmissionWeight) * kd.subsurfaceWeight + kd.transmissionWeight
          };
          if (kd.transmissionWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(kd);
            const Jd = this._exporter._materialExporter.getTextureInfo(kd.transmissionWeightTexture);
            Jd && (dd.transmissionTexture = Jd)
          } else if (kd.subsurfaceWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(kd);
            const Jd = this._exporter._materialExporter.getTextureInfo(kd.subsurfaceWeightTexture);
            Jd && (dd.transmissionTexture = Jd)
          }
          if (0 == kd.transmissionDepth && (!kd.transmissionColor.equals(ud.c.White()) || kd.transmissionColorTexture) && Jd.pbrMetallicRoughness && (Jd.pbrMetallicRoughness.baseColorFactor || (Jd.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1]), Jd.pbrMetallicRoughness.baseColorFactor[0] *= kd.transmissionColor.r, Jd.pbrMetallicRoughness.baseColorFactor[1] *= kd.transmissionColor.g, Jd.pbrMetallicRoughness.baseColorFactor[2] *= kd.transmissionColor.b, kd.transmissionColorTexture && !Jd.pbrMetallicRoughness.baseColorTexture)) {
            const dd = this._exporter._materialExporter.getTextureInfo(kd.transmissionColorTexture);
            dd && (Jd.pbrMetallicRoughness.baseColorTexture = dd, this._exporter._materialNeedsUVsSet.add(kd))
          }
          Jd.extensions || (Jd.extensions = {}), Jd.extensions[vW] = dd
        }
        return Jd
      }
    }
    let qW = !1;

    function BW() {
      qW || (qW = !0, fp.RegisterExtension(vW, (dd => new xW(dd))))
    }
    BW();
    var sW = kd(40254);
    const iW = "KHR_materials_unlit";
    class aW {
      constructor() {
        this.name = iW, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      get wasUsed() {
        return this._wasUsed
      }
      dispose() {}
      postExportMaterialAsync(dd, Jd, kd) {
        return new Promise((dd => {
          let pd = !1;
          kd instanceof UN ? pd = kd.unlit : kd instanceof sW.e && (pd = kd.disableLighting), pd && (this._wasUsed = !0, null == Jd.extensions && (Jd.extensions = {}), Jd.extensions[iW] = {}), dd(Jd)
        }))
      }
    }
    let MW = !1;

    function FW() {
      MW || (MW = !0, fp.RegisterExtension(iW, (() => new aW)))
    }
    FW();
    const YW = "KHR_materials_volume";
    class mW {
      constructor(dd) {
        this.name = YW, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = dd
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(dd, Jd, kd) {
        const pd = [];
        if (kd instanceof UN) {
          if (this._isExtensionEnabled(kd)) return kd.subSurface.thicknessTexture && pd.push(kd.subSurface.thicknessTexture), pd
        } else kd instanceof AJ && (kd.transmissionWeight > 0 || kd.subsurfaceWeight > 0) && kd.geometryThicknessTexture && pd.push(kd.geometryThicknessTexture);
        return pd
      }
      _isExtensionEnabled(dd) {
        if (dd.unlit) return !1;
        const Jd = dd.subSurface;
        return !(!Jd.isRefractionEnabled && !Jd.isTranslucencyEnabled) && (void 0 != Jd.maximumThickness && 0 != Jd.maximumThickness || void 0 != Jd.tintColorAtDistance && Jd.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != Jd.tintColor && Jd.tintColor != ud.c.White() || this._hasTexturesExtension(dd))
      }
      _hasTexturesExtension(dd) {
        return null != dd.subSurface.thicknessTexture
      }
      postExportMaterialAsync(dd, Jd, kd) {
        return new Promise((dd => {
          if (kd instanceof UN && this._isExtensionEnabled(kd)) {
            this._wasUsed = !0;
            const dd = kd.subSurface,
              pd = {
                thicknessFactor: 0 == dd.maximumThickness ? void 0 : dd.maximumThickness,
                thicknessTexture: this._exporter._materialExporter.getTextureInfo(dd.thicknessTexture) ?? void 0,
                attenuationDistance: dd.tintColorAtDistance == Number.POSITIVE_INFINITY ? void 0 : dd.tintColorAtDistance,
                attenuationColor: dd.tintColor.equalsFloats(1, 1, 1) ? void 0 : dd.tintColor.spd()
              };
            this._hasTexturesExtension(kd) && this._exporter._materialNeedsUVsSet.add(kd), Jd.extensions = Jd.extensions || {}, Jd.extensions[YW] = pd
          } else if (kd instanceof AJ) {
            const dd = kd.transmissionWeight > 0 && !kd.geometryThinWalled,
              pd = kd.subsurfaceWeight > 0 && !kd.geometryThinWalled;
            if (dd || pd) {
              this._wasUsed = !0;
              const Nd = kd.geometryThickness,
                Wd = this._exporter._materialExporter.getTextureInfo(kd.geometryThicknessTexture) ?? void 0;
              let Pd;
              Wd && this._exporter._materialNeedsUVsSet.add(kd);
              const Zd = ud.c.White().spd();
              if (dd && kd.transmissionDepth > 0) {
                const dd = 1 / kd.transmissionDepth;
                let Jd = new yd.n(-Math.log(kd.transmissionColor.r) * dd, -Math.log(kd.transmissionColor.g) * dd, -Math.log(kd.transmissionColor.b) * dd);
                const pd = new yd.n(kd.transmissionScatter.r * dd, kd.transmissionScatter.g * dd, kd.transmissionScatter.b * dd),
                  Nd = Jd.subtract(pd),
                  Wd = Math.min(Nd.x, Nd.y, Nd.z);
                Wd < 0 && (Nd.x = Nd.x - Wd, Nd.y = Nd.y - Wd, Nd.z = Nd.z - Wd), Jd = Nd.add(pd);
                Pd = 1 / Math.max(Jd.x, Jd.y, Jd.z), Zd[0] = Math.exp(-Jd.x * Pd), Zd[1] = Math.exp(-Jd.y * Pd), Zd[2] = Math.exp(-Jd.z * Pd)
              } else Pd = Number.MAX_VALUE, Zd[0] = 1, Zd[1] = 1, Zd[2] = 1;
              let gd = 1;
              const Cd = ud.c.White().spd();
              if (pd) {
                const dd = kd.subsurfaceRadius,
                  Jd = kd.subsurfaceRadiusScale,
                  pd = new yd.n(Jd.r, Jd.g, Jd.b).multiplyByFloats(dd, dd, dd),
                  Nd = new yd.n(1 / Math.max(pd.x, 1e-6), 1 / Math.max(pd.y, 1e-6), 1 / Math.max(pd.z, 1e-6));
                gd = 1 / Math.max(Nd.x, Nd.y, Nd.z), Cd[0] = Math.exp(-Nd.x * gd), Cd[1] = Math.exp(-Nd.y * gd), Cd[2] = Math.exp(-Nd.z * gd)
              }
              const Kd = (1 - kd.transmissionWeight) * kd.subsurfaceWeight,
                od = Kd + kd.transmissionWeight,
                ld = 1 / Math.max(od, 1e-6),
                Qd = kd.transmissionWeight * ld,
                Ld = Kd * ld,
                Od = Zd.map(((dd, Jd) => dd * Qd + Cd[Jd] * Ld)),
                ed = {
                  thicknessFactor: Nd,
                  thicknessTexture: Wd,
                  attenuationDistance: Pd * Qd + gd * Ld,
                  attenuationColor: Od
                };
              Jd.extensions = Jd.extensions || {}, Jd.extensions[YW] = ed
            }
          }
          dd(Jd)
        }))
      }
    }
    let bW = !1;

    function SW() {
      bW || (bW = !0, fp.RegisterExtension(YW, (dd => new mW(dd))))
    }
    SW();
    const jW = "KHR_materials_volume_scatter";
    class XW {
      constructor(dd) {
        this.name = jW, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = dd
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(dd, Jd, kd) {
        const pd = [];
        return kd instanceof AJ && (kd.transmissionWeight > 0 && kd.transmissionScatterTexture && pd.push(kd.transmissionScatterTexture), kd.subsurfaceWeight > 0 && kd.subsurfaceColorTexture && pd.push(kd.subsurfaceColorTexture)), pd
      }
      _isExtensionEnabled(dd) {
        if (dd.unlit) return !1;
        const Jd = dd.transmissionWeight > 0 && !dd.geometryThinWalled && dd.transmissionDepth > 0 && !dd.transmissionScatter.equals(ud.c.Black()),
          kd = dd.subsurfaceWeight > 0 && !dd.geometryThinWalled;
        return !(!Jd && !kd)
      }
      postExportMaterialAsync(dd, Jd, kd) {
        return new Promise((dd => {
          if (kd instanceof AJ && this._isExtensionEnabled(kd)) {
            this._wasUsed = !0;
            let dd = yd.n.Zero(),
              pd = 0;
            if (kd.transmissionWeight > 0) {
              dd = function(dd) {
                const Jd = new yd.n(Math.sqrt(1 - dd.x), Math.sqrt(1 - dd.y), Math.sqrt(1 - dd.z)),
                  kd = new yd.n(1, 1, 1),
                  pd = kd.subtract(Jd),
                  Nd = kd.subtract(new yd.n(.139, .139, .139).multiplyInPlace(Jd)),
                  Wd = kd.add(new yd.n(1.17, 1.17, 1.17).multiplyInPlace(Jd));
                return pd.multiplyInPlace(Nd).divideInPlace(Wd)
              }(new yd.n(kd.transmissionScatter.r, kd.transmissionScatter.g, kd.transmissionScatter.b)), pd = kd.transmissionScatterAnisotropy
            }
            const Nd = yd.n.Zero();
            let Wd = 0;
            kd.subsurfaceWeight > 0 && (Nd.set(kd.subsurfaceColor.r, kd.subsurfaceColor.g, kd.subsurfaceColor.b), Wd = kd.subsurfaceScatterAnisotropy);
            const Pd = (1 - kd.transmissionWeight) * kd.subsurfaceWeight,
              Zd = Pd + kd.transmissionWeight,
              gd = 1 / Math.max(Zd, 1e-6),
              Cd = kd.transmissionWeight * gd,
              Kd = Pd * gd,
              od = {
                multiscatterColorFactor: dd.multiplyByFloats(Cd, Cd, Cd).addInPlace(Nd.multiplyByFloats(Kd, Kd, Kd)).spd(),
                scatterAnisotropy: pd * Cd + Wd * Kd
              };
            if (kd.subsurfaceWeight > 0 && kd.subsurfaceColorTexture) {
              this._exporter._materialNeedsUVsSet.add(kd);
              const dd = this._exporter._materialExporter.getTextureInfo(kd.subsurfaceColorTexture);
              dd && (od.multiscatterColorTexture = dd)
            } else if (kd.transmissionWeight > 0 && kd.transmissionScatterTexture) {
              this._exporter._materialNeedsUVsSet.add(kd);
              const dd = this._exporter._materialExporter.getTextureInfo(kd.transmissionScatterTexture);
              dd && (od.multiscatterColorTexture = dd)
            }
            Jd.extensions = Jd.extensions || {}, Jd.extensions[jW] = od
          }
          dd(Jd)
        }))
      }
    }
    let fW = !1;

    function nW() {
      fW || (fW = !0, fp.RegisterExtension(jW, (dd => new XW(dd)), 101))
    }
    nW();
    const UW = "KHR_materials_diffuse_roughness";
    class yW {
      constructor(dd) {
        this.name = UW, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = dd
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(dd, Jd, kd) {
        const pd = [];
        if (kd instanceof BJ) {
          if (kd._baseDiffuseRoughness) return kd._baseDiffuseRoughnessTexture && pd.push(kd._baseDiffuseRoughnessTexture), pd
        } else if (kd instanceof AJ && kd.baseDiffuseRoughness) return kd.baseDiffuseRoughnessTexture && pd.push(kd.baseDiffuseRoughnessTexture), pd;
        return []
      }
      postExportMaterialAsync(dd, Jd, kd) {
        return new Promise((dd => {
          let pd = null,
            Nd = null;
          if (kd instanceof BJ ? (pd = kd._baseDiffuseRoughness, Nd = kd._baseDiffuseRoughnessTexture) : kd instanceof AJ && (pd = kd.baseDiffuseRoughness, Nd = kd.baseDiffuseRoughnessTexture), !pd) return void dd(Jd);
          this._wasUsed = !0, Jd.extensions = Jd.extensions || {};
          const Wd = {
            diffuseRoughnessFactor: pd,
            diffuseRoughnessTexture: this._exporter._materialExporter.getTextureInfo(Nd) ?? void 0
          };
          null !== Wd.diffuseRoughnessTexture && this._exporter._materialNeedsUVsSet.add(kd), Jd.extensions[UW] = Wd, dd(Jd)
        }))
      }
    }
    let DW = !1;

    function TW() {
      DW || (DW = !0, fp.RegisterExtension(UW, (dd => new yW(dd))))
    }
    TW();
    const EW = "KHR_materials_openpbr";
    class cW {
      constructor() {
        this.name = EW, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportMaterialAsync(dd, Jd, kd) {
        return new Promise((dd => {
          kd instanceof AJ && (this._wasUsed = !0, Jd.extensions = Jd.extensions || {}, Jd.extensions[EW] = {}), dd(Jd)
        }))
      }
    }
    let hW = !1;

    function rW() {
      hW || (hW = !0, fp.RegisterExtension(EW, (() => new cW)))
    }
    rW();
    const uW = "KHR_texture_transform";
    class tW {
      constructor() {
        this.name = uW, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportTexture(dd, Jd, kd) {
        if (kd.Wm() || iJ.h.Warn(`${dd}: "scene" is not defined for Babylon texture ${kd.name}!`), (0 !== kd.uAng || 0 !== kd.vAng) && (iJ.h.Warn(`${dd}: Texture ${kd.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== kd.uRotationCenter || 0 !== kd.vRotationCenter)) return;
        const pd = {};
        let Nd = !1;
        if (0 === kd.uOffset && 0 === kd.vOffset || (pd.offset = [kd.uOffset, kd.vOffset], Nd = !0), 1 === kd.uScale && 1 === kd.vScale || (pd.scale = [kd.uScale, kd.vScale], Nd = !0), 0 !== kd.wAng) {
          if (0 !== kd.uRotationCenter || 0 !== kd.vRotationCenter) {
            if (kd.homogeneousRotationInUVTransform && kd.uScale !== kd.vScale) return void iJ.h.Warn(`${dd}: Texture ${kd.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${uW}.`);
            iJ.h.Warn(`${dd}: Texture ${kd.name} with non-origin rotation center will be exported using an adjusted offset with ${uW}.`), pd.offset = function(dd) {
              const {
                uOffset: Jd,
                vOffset: kd,
                uRotationCenter: pd,
                vRotationCenter: Nd,
                uScale: Wd,
                vScale: Pd,
                wAng: Zd
              } = dd, gd = Math.cos(Zd), Cd = Math.sin(Zd), Kd = pd * Wd, od = Nd * Pd;
              return [Jd + (Kd * (1 - gd) + od * Cd), kd + (od * (1 - gd) - Kd * Cd)]
            }(kd)
          }
          pd.rotation = -kd.wAng, Nd = !0
        }
        0 !== kd.coordinatesIndex && (pd.texCoord = kd.coordinatesIndex, Nd = !0), Nd && (this._wasUsed = !0, Jd.extensions || (Jd.extensions = {}), Jd.extensions[uW] = pd)
      }
    }
    let VW = !1;

    function zW() {
      VW || (VW = !0, fp.RegisterExtension(uW, (() => new tW)))
    }
    zW();
    var HW = kd(40007);
    const wW = "KHR_texture_basisu";
    class AW {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(dd) {
        this.name = wW, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = dd
      }
      dispose() {}
      postExportTexture(dd, Jd) {
        const kd = this._exporter._textures[Jd.index],
          pd = kd.source;
        if (void 0 === pd) return;
        const Nd = this._exporter._images[pd];
        "image/ktx2" === (Nd.mimeType || (0, HW.i)(Nd.uri)) && (kd.source = void 0, kd.extensions || (kd.extensions = {}), kd.extensions[wW] = {
          source: pd
        }, this._wasUsed = !0)
      }
    }
    let dP = !1;

    function JP() {
      dP || (dP = !0, fp.RegisterExtension(wW, (dd => new AW(dd))))
    }
    JP();
    const kP = "EXT_texture_webp";
    class pP {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(dd) {
        this.name = kP, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = dd
      }
      dispose() {}
      postExportTexture(dd, Jd) {
        const kd = this._exporter._textures[Jd.index],
          pd = kd.source;
        if (void 0 === pd) return;
        const Nd = this._exporter._images[pd];
        "image/webp" === (Nd.mimeType || (0, HW.i)(Nd.uri)) && (kd.source = void 0, kd.extensions || (kd.extensions = {}), kd.extensions[kP] = {
          source: pd
        }, this._wasUsed = !0)
      }
    }
    let NP = !1;

    function WP() {
      NP || (NP = !0, fp.RegisterExtension(kP, (dd => new pP(dd))))
    }
    WP();
    const PP = "EXT_texture_avif";
    class ZP {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(dd) {
        this.name = PP, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = dd
      }
      dispose() {}
      postExportTexture(dd, Jd) {
        const kd = this._exporter._textures[Jd.index],
          pd = kd.source;
        if (void 0 === pd) return;
        const Nd = this._exporter._images[pd];
        "image/avif" === (Nd.mimeType || (0, HW.i)(Nd.uri)) && (kd.source = void 0, kd.extensions || (kd.extensions = {}), kd.extensions[PP] = {
          source: pd
        }, this._wasUsed = !0)
      }
    }
    let gP = !1;

    function CP() {
      gP || (gP = !0, fp.RegisterExtension(PP, (dd => new ZP(dd))))
    }
    CP();
    class KP {
      static CreateSTL(dd) {
        let Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stlmesh",
          Nd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Wd = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Pd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Zd = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          gd = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        const Cd = function(dd, Jd, kd) {
            const Nd = [3 * dd[kd], 3 * dd[kd + 1], 3 * dd[kd + 2]],
              Wd = [new pd.IL(Jd[Nd[0]], Jd[Nd[0] + 2], Jd[Nd[0] + 1]), new pd.IL(Jd[Nd[1]], Jd[Nd[1] + 2], Jd[Nd[1] + 1]), new pd.IL(Jd[Nd[2]], Jd[Nd[2] + 2], Jd[Nd[2] + 1])],
              Pd = Wd[0].subtract(Wd[1]),
              Zd = Wd[2].subtract(Wd[1]);
            return {
              v: Wd,
              n: pd.IL.Cross(Zd, Pd).normalize()
            }
          },
          od = function(dd, Jd, kd, pd) {
            return Jd = ld(dd, Jd, kd.x, pd), Jd = ld(dd, Jd, kd.y, pd), ld(dd, Jd, kd.z, pd)
          },
          ld = function(dd, Jd, kd, pd) {
            return dd.setFloat32(Jd, kd, pd), Jd + 4
          },
          Ld = function(dd) {
            if (Zd) {
              let Jd = dd;
              dd instanceof Qd.e && (Jd = dd.RNd);
              const kd = Jd.getVerticesData(Kd.f.PositionKind, !0, !0);
              if (!kd) return [];
              const Nd = pd.IL.Zero();
              let Wd;
              for (Wd = 0; Wd < kd.length; Wd += 3) pd.IL.TransformCoordinatesFromFloatsToRef(kd[Wd], kd[Wd + 1], kd[Wd + 2], dd.computeWorldMatrix(!0), Nd).toArray(kd, Wd);
              return kd
            }
            return dd.getVerticesData(Kd.f.PositionKind) || []
          };
        Zd && (Pd = !0);
        let Od = "",
          ed = 0,
          Rd = 0;
        if (Nd) {
          for (let kd = 0; kd < dd.length; kd++) {
            const Jd = dd[kd].ipd();
            ed += Jd ? Jd.length / 3 : 0
          }
          const Jd = new ArrayBuffer(84 + 50 * ed);
          Od = new DataView(Jd), Rd += 80, Od.setUint32(Rd, ed, Wd), Rd += 4
        } else gd || (Od = "solid stlmesh\r\n");
        for (let pd = 0; pd < dd.length; pd++) {
          const Jd = dd[pd];
          !Nd && gd && (Od += "solid " + Jd.name + "\r\n"), !Pd && Jd instanceof op.d && Jd.bakeCurrentTransformIntoVertices();
          const kd = Ld(Jd),
            Zd = Jd.ipd() || [];
          for (let dd = 0; dd < Zd.length; dd += 3) {
            const Jd = Cd(Zd, kd, dd);
            Nd ? (Rd = od(Od, Rd, Jd.n, Wd), Rd = od(Od, Rd, Jd.v[0], Wd), Rd = od(Od, Rd, Jd.v[1], Wd), Rd = od(Od, Rd, Jd.v[2], Wd), Rd += 2) : (Od += "\tfacet normal " + Jd.n.x + " " + Jd.n.y + " " + Jd.n.z + "\r\n", Od += "\t\touter loop\r\n", Od += "\t\t\tvertex " + Jd.v[0].x + " " + Jd.v[0].y + " " + Jd.v[0].z + "\r\n", Od += "\t\t\tvertex " + Jd.v[1].x + " " + Jd.v[1].y + " " + Jd.v[1].z + "\r\n", Od += "\t\t\tvertex " + Jd.v[2].x + " " + Jd.v[2].y + " " + Jd.v[2].z + "\r\n", Od += "\t\tendloop\r\n", Od += "\tendfacet\r\n")
          }!Nd && gd && (Od += "endsolid " + name + "\r\n")
        }
        if (Nd || gd || (Od += "endsolid stlmesh"), Jd) {
          const dd = document.createElement("a"),
            Jd = new Blob([Od], {
              type: "application/octet-stream"
            });
          dd.href = window.URL.createObjectURL(Jd), dd.download = kd + ".stl", dd.click()
        }
        return Od
      }
    }

    function oP(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        pd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Nd = [];
      for (let Wd = 0; Wd < dd.length / kd; Wd++) {
        const Pd = dd[Wd * kd] * (pd ? -1 : 1),
          Zd = dd[Wd * kd + 1],
          gd = dd[Wd * kd + 2];
        Nd.push(`(${Pd.toPrecision(Jd.precision)}, ${Zd.toPrecision(Jd.precision)}, ${gd.toPrecision(Jd.precision)})`)
      }
      return Nd.join(", ")
    }

    function lP(dd, Jd) {
      const kd = [];
      for (let pd = 0; pd < dd.length / 2; pd++) {
        const Nd = dd[2 * pd],
          Wd = dd[2 * pd + 1];
        kd.push(`(${Nd.toPrecision(Jd.precision)}, ${(1-Wd).toPrecision(Jd.precision)})`)
      }
      return kd.join(", ")
    }

    function QP(dd, Jd, kd, pd) {
      const Nd = dd.getVerticesData(Kd.f.PositionKind),
        Wd = dd.getVerticesData(Kd.f.NormalKind);
      if (Nd && Wd) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${kd}"\n\t\tint[] faceVertexCounts = [${function(dd){const Jd=dd.ipd()?.length?dd.getTotalIndices():dd.getTotalVertices();return Array(Jd/3).fill(3).join(", ")}(dd)}]\n\t\tint[] faceVertexIndices = [${function(dd){const Jd=dd.ipd(),kd=Jd?.length??dd.getTotalVertices(),pd=[];if(null!==Jd)for(let Nd=0;Nd<kd;Nd++)pd.push(Jd[Nd]);else for(let Nd=0;Nd<kd;Nd++)pd.push(Nd);return pd.join(", ")}(dd)}]\n\t\tnormal3f[] normals = [${oP(Wd,Jd,void 0,pd)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)\n\t\tpoint3f[] points = [${oP(Nd,Jd,void 0,pd)}]\n        ${function(dd,Jd){let kd="";for(let Nd=0;Nd<4;Nd++){const pd=Nd>0?Nd:"",Wd=dd.getVerticesData(Kd.f.UVKind+(pd?pd+1:""));Wd&&(kd+=`\n\t\ttexCoord2f[] primvars:st${pd} = [${lP(Wd,Jd)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)`)}const pd=dd.getVerticesData(Kd.f.ColorKind);return pd&&(kd+=`\
      n\ tcolor3f[] primvars: displayColor = [$ {
        oP(pd, Jd, pd.length / dd.getTotalVertices())
      }](\n\ t\ tinterpolation = "vertex"\
        n\ t\ t)`),kd}(dd,Jd)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
    }

    function LP(dd, Jd, kd, pd) {
      return `\n        def "Geometry"\n        {\n        ${QP(dd,Jd,kd,pd)}\n        }\n        `
    }

    function OP(dd) {
      let Jd = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      return Jd += dd, fflate.strToU8(Jd)
    }

    function eP(dd) {
      const Jd = dd.m;
      return `( ${RP(Jd,0)}, ${RP(Jd,4)}, ${RP(Jd,8)}, ${RP(Jd,12)} )`
    }

    function RP(dd, Jd) {
      return `(${dd[Jd+0]}, ${dd[Jd+1]}, ${dd[Jd+2]}, ${dd[Jd+3]})`
    }

    function IP(dd, Jd) {
      const kd = "Object_" + dd.uniqueId,
        pd = eP(Jd);
      return `def Xform "${kd}" (\n\tprepend references = @./geometries/Geometry_${dd.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${pd}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    rel material:binding = </Root/Materials/Material_${dd.material.uniqueId}>\n}\n\n`
    }

    function GP(dd) {
      switch (dd) {
        case Bd.e.TEXTURE_CLAMP_ADDRESSMODE:
          return "clamp";
        case Bd.e.TEXTURE_MIRROR_ADDRESSMODE:
          return "mirror";
        case Bd.e.TEXTURE_WRAP_ADDRESSMODE:
        default:
          return "repeat"
      }
    }

    function vP(dd) {
      return `(${dd.x}, ${dd.y})`
    }

    function xP(dd) {
      return `(${dd.r}, ${dd.g}, ${dd.b})`
    }

    function qP(dd) {
      return "image/jpeg" === dd || "image/png" === dd
    }

    function BP(dd, Jd, kd, Nd, Wd, Pd) {
      const Zd = dd.getInternalTexture().uniqueId + "_" + dd.invertY,
        Cd = dd.mimeType || (0, gd.e)(dd.getInternalTexture()?.url ?? ""),
        Kd = qP(Cd) ? Cd : "image/png",
        od = "image/jpeg" === Kd ? "jpg" : "png";
      Wd[Zd] = {
        texture: dd,
        mimeType: Kd,
        ext: od
      };
      const ld = dd.coordinatesIndex > 0 ? "st" + dd.coordinatesIndex : "st",
        Qd = new pd.Vector2(dd.uScale, dd.vScale),
        Ld = new pd.Vector2(dd.uOffset, dd.vOffset),
        Od = dd.wAng,
        ed = Math.sin(Od),
        Rd = Math.cos(Od);
      return Ld.y = 1 - Ld.y - Qd.y, Ld.x += ed * Qd.x, Ld.y += (1 - Rd) * Qd.y, `\n    def Shader "PrimvarReader_${kd}"\n    {\n        uniform token info:id = "UsdPrimvarReader_float2"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = "${ld}"\n        float2 outputs:result\n    }\n\n    def Shader "Transform2d_${kd}"\n    {\n        uniform token info:id = "UsdTransform2d"\n        token inputs:in.connect = </Root/Materials/Material_${Jd.uniqueId}/PrimvarReader_${kd}.outputs:result>\n        float inputs:rotation = ${(Od*(180/Math.PI)).toFixed(Pd.precision)}\n        float2 inputs:scale = ${vP(Qd)}\n        float2 inputs:translation = ${vP(Ld)}\n        float2 outputs:result\n    }\n\n    def Shader "Texture_${dd.uniqueId}_${kd}"\n    {\n        uniform token info:id = "UsdUVTexture"\n        asset inputs:file = @textures/Texture_${Zd}.${od}@\n        float2 inputs:st.connect = </Root/Materials/Material_${Jd.uniqueId}/Transform2d_${kd}.outputs:result>\n        ${Nd?"float4 inputs:scale = "+function(dd){return`(${dd.r}, ${dd.g}, ${dd.b}, 1.0)`}(Nd):""}\n        token inputs:sourceColorSpace = "${dd.gammaSpace?"sRGB":"raw"}"\n        token inputs:wrapS = "${GP(dd.wrapU)}"\n        token inputs:wrapT = "${GP(dd.wrapV)}"\n        float outputs:r\n        float outputs:g\n        float outputs:b\n        float3 outputs:rgb\n        ${Jd.needAlphaBlending()||Jd.needAlphaTesting()?"float outputs:a":""}\n    }`
    }

    function sP(dd, Jd, kd) {
      const pd = "\t\t\t",
        Nd = [],
        Wd = [],
        {
          diffuseMap: Pd,
          diffuse: Zd,
          alphaCutOff: gd,
          emissiveMap: Cd,
          emissive: Kd,
          normalMap: od,
          roughnessMap: ld,
          roughnessChannel: Qd,
          roughness: Ld,
          metalnessMap: Od,
          metalnessChannel: Rd,
          metalness: Id,
          aoMap: Gd,
          aoMapChannel: vd,
          aoMapIntensity: xd,
          alphaMap: qd,
          ior: Bd,
          clearCoatEnabled: sd,
          clearCoat: ad,
          clearCoatMap: Md,
          clearCoatRoughness: Fd,
          clearCoatRoughnessMap: Yd
        } = function(dd) {
          const Jd = {
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
          return dd instanceof Zp.StandardMaterial ? {
            ...Jd,
            diffuseMap: dd.diffuseTexture,
            diffuse: dd.diffuseColor,
            alphaCutOff: dd.alphaCutOff,
            emissiveMap: dd.emissiveTexture,
            emissive: dd.emissiveColor,
            roughness: 1,
            alphaMap: dd.opacityTexture
          } : dd instanceof BJ ? {
            ...Jd,
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
          } : Jd
        }(dd);
      return null !== Pd ? (Nd.push(`${pd}color3f inputs:diffuseColor.connect = </Root/Materials/Material_${dd.uniqueId}/Texture_${Pd.uniqueId}_diffuse.outputs:rgb>`), dd.needAlphaBlending() ? Nd.push(`${pd}float inputs:opacity.connect = </Root/Materials/Material_${dd.uniqueId}/Texture_${Pd.uniqueId}_diffuse.outputs:a>`) : dd.needAlphaTesting() && (Nd.push(`${pd}float inputs:opacity.connect = </Root/Materials/Material_${dd.uniqueId}/Texture_${Pd.uniqueId}_diffuse.outputs:a>`), Nd.push(`${pd}float inputs:opacityThreshold = ${gd}`)), Wd.push(BP(Pd, dd, "diffuse", Zd, Jd, kd))) : Nd.push(`${pd}color3f inputs:diffuseColor = ${xP(Zd||ed.Color3.White())}`), null !== Cd ? (Nd.push(`${pd}color3f inputs:emissiveColor.connect = </Root/Materials/Material_${dd.uniqueId}/Texture_${Cd.uniqueId}_emissive.outputs:rgb>`), Wd.push(BP(Cd, dd, "emissive", Kd, Jd, kd))) : Kd && Kd.toLuminance() > 0 && Nd.push(`${pd}color3f inputs:emissiveColor = ${xP(Kd)}`), null !== od && (Nd.push(`${pd}normal3f inputs:normal.connect = </Root/Materials/Material_${dd.uniqueId}/Texture_${od.uniqueId}_normal.outputs:rgb>`), Wd.push(BP(od, dd, "normal", null, Jd, kd))), null !== Gd && (Nd.push(`${pd}float inputs:occlusion.connect = </Root/Materials/Material_${dd.uniqueId}/Texture_${Gd.uniqueId}_occlusion.outputs:${vd}>`), Wd.push(BP(Gd, dd, "occlusion", new ed.Color3(xd, xd, xd), Jd, kd))), null !== ld ? (Nd.push(`${pd}float inputs:roughness.connect = </Root/Materials/Material_${dd.uniqueId}/Texture_${ld.uniqueId}_roughness.outputs:${Qd}>`), Wd.push(BP(ld, dd, "roughness", new ed.Color3(Ld, Ld, Ld), Jd, kd))) : Nd.push(`${pd}float inputs:roughness = ${Ld}`), null !== Od ? (Nd.push(`${pd}float inputs:metallic.connect = </Root/Materials/Material_${dd.uniqueId}/Texture_${Od.uniqueId}_metallic.outputs:${Rd}>`), Wd.push(BP(Od, dd, "metallic", new ed.Color3(Id, Id, Id), Jd, kd))) : Nd.push(`${pd}float inputs:metallic = ${Id}`), null !== qd ? (Nd.push(`${pd}float inputs:opacity.connect = </Root/Materials/Material_${dd.uniqueId}/Texture_${qd.uniqueId}_opacity.outputs:r>`), Nd.push(`${pd}float inputs:opacityThreshold = 0.0001`), Wd.push(BP(qd, dd, "opacity", null, Jd, kd))) : Nd.push(`${pd}float inputs:opacity = ${dd.alpha}`), sd && (null !== Md ? (Nd.push(`${pd}float inputs:clearcoat.connect = </Root/Materials/Material_${dd.uniqueId}/Texture_${Md.uniqueId}_clearcoat.outputs:r>`), Wd.push(BP(Md, dd, "clearcoat", new ed.Color3(ad, ad, ad), Jd, kd))) : Nd.push(`${pd}float inputs:clearcoat = ${ad}`), null !== Yd ? (Nd.push(`${pd}float inputs:clearcoatRoughness.connect = </Root/Materials/Material_${dd.uniqueId}/Texture_${Yd.uniqueId}_clearcoatRoughness.outputs:g>`), Wd.push(BP(Yd, dd, "clearcoatRoughness", new ed.Color3(Fd, Fd, Fd), Jd, kd))) : Nd.push(`${pd}float inputs:clearcoatRoughness = ${Fd}`)), Nd.push(`${pd}float inputs:ior = ${Bd}`), `\n\tdef Material "Material_${dd.uniqueId}"\n\t{\n\t\tdef Shader "PreviewSurface"\n\t\t{\n\t\t\tuniform token info:id = "UsdPreviewSurface"\n${Nd.join("\n")}\n\t\t\tint inputs:useSpecularWorkflow = 0\n\t\t\ttoken outputs:surface\n\t\t}\n\n\t\ttoken outputs:surface.connect = </Root/Materials/Material_${dd.uniqueId}/PreviewSurface.outputs:surface>\n\n${Wd.join("\n")}\n\n\t}\n`
    }

    function iP(dd) {
      dd.computeWorldMatrix(!0);
      const Jd = dd.getWorldMatrix().clone(),
        kd = dd.Wm().useRightHandedSystem;
      let pd = dd.material?._getEffectiveOrientation(dd) ?? dd.sideOrientation,
        Pd = !kd,
        Zd = dd.parent;
      for (; Zd;) {
        if (nk(Zd, kd) && null === Zd.parent) {
          kd || (Jd.multiplyToRef(Zd.getWorldMatrix().invert(), Jd), pd = pd === Wd.b.ClockWiseSideOrientation ? Wd.b.CounterClockWiseSideOrientation : Wd.b.ClockWiseSideOrientation), Pd = !1;
          break
        }
        Zd = Zd.parent
      }
      return Jd.determinant() < 0 && Nd.Tools.Warn(`Mesh ${dd.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
        matrix: Jd,
        windingOrder: pd === Wd.b.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
        convertToRightHanded: Pd
      }
    }
    async function aP(dd, Jd, kd) {
      const Wd = {
        fflateUrl: "https://unpkg.com/fflate@0.8.2",
        includeAnchoringProperties: !0,
        anchoringType: "plane",
        planeAnchoringAlignment: "horizontal",
        modelFileName: "model.usda",
        precision: 5,
        exportCamera: !1,
        cameraSensorWidth: 35,
        ...Jd
      };
      "undefined" === typeof fflate && await Nd.Tools.LoadScriptAsync(Wd.fflateUrl);
      const Pd = {};
      Pd[Wd.modelFileName] = null;
      let Zd = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      Zd += function(dd) {
        return `def Xform "Root"\n    {\n        def Scope "Scenes" (\n            kind = "sceneLibrary"\n        )\n        {\n            def Xform "Scene" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    string sceneName = "Scene"\n                }\n                sceneName = "Scene"\n            )\n            {${!0===dd.includeAnchoringProperties?`\n\t\ttoken preliminary:anchoring:type = "${dd.anchoringType}"\n\t\ttoken preliminary:planeAnchoring:alignment = "${dd.planeAnchoringAlignment}"`:""}\n            `
      }(Wd);
      const gd = {};
      for (const pd of dd.meshes) {
        if (0 === pd.getTotalVertices()) continue;
        const dd = pd,
          Jd = dd.geometry,
          Cd = dd.material;
        if (!Cd || !Jd || kd && !kd(dd)) continue;
        if (-1 !== ["StandardMaterial", "PBRMaterial", "PBRMetallicRoughnessMaterial"].indexOf(Cd.getClassName())) {
          const kd = "geometries/Geometry_" + Jd.uniqueId + ".usda",
            {
              matrix: pd,
              windingOrder: Nd,
              convertToRightHanded: Kd
            } = iP(dd);
          if (!(kd in Pd)) {
            const dd = LP(Jd, Wd, Nd, Kd);
            Pd[kd] = OP(dd)
          }
          Cd.uniqueId in gd || (gd[Cd.uniqueId] = Cd), Zd += IP(dd, pd)
        } else Nd.Tools.Warn("USDZExportAsync does not support this material type: " + Cd.getClassName())
      }
      dd.activeCamera && Wd.exportCamera && (Zd += function(dd, Jd) {
        const kd = "Camera_" + dd.uniqueId,
          Nd = eP(pd.Matrix.RotationY(Math.PI).multiply(dd.getWorldMatrix()));
        if (dd.mode === Bd.e.ORTHOGRAPHIC_CAMERA) return `def Camera "${kd}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${Nd}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${dd.minZ.toPrecision(Jd.precision)}, ${dd.maxZ.toPrecision(Jd.precision)})\n\t\t\tfloat horizontalAperture = ${(10*(Math.abs(dd.orthoLeft||1)+Math.abs(dd.orthoRight||1))).toPrecision(Jd.precision)}\n\t\t\tfloat verticalAperture = ${(10*(Math.abs(dd.orthoTop||1)+Math.abs(dd.orthoBottom||1))).toPrecision(Jd.precision)}\n\t\t\ttoken projection = "orthographic"\n\t\t}\n\t\n\t`;
        {
          const pd = dd.eL().getAspectRatio(dd),
            Wd = Jd.cameraSensorWidth || 35;
          return `def Camera "${kd}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${Nd}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${dd.minZ.toPrecision(Jd.precision)}, ${dd.maxZ.toPrecision(Jd.precision)})\n\t\t\tfloat focalLength = ${(Wd/(2*Math.tan(.5*dd.fov))).toPrecision(Jd.precision)}\n            token projection = "perspective"\n\t\t\tfloat horizontalAperture = ${(Wd*pd).toPrecision(Jd.precision)}\n\t\t\tfloat verticalAperture = ${(Wd/pd).toPrecision(Jd.precision)}            \n\t\t}\n\t\n\t`
        }
      }(dd.activeCamera, Wd)), Zd += "\n            }\n        }";
      const Cd = {};
      Zd += function(dd, Jd, kd) {
        const pd = [];
        for (const Nd in dd) {
          const Wd = dd[Nd];
          pd.push(sP(Wd, Jd, kd))
        }
        return `\n    def "Materials"\n{\n${pd.join("")}\n}\n\n`
      }(gd, Cd, Wd), Zd += "\n    }", Pd[Wd.modelFileName] = fflate.strToU8(Zd);
      for (const pd in Cd) {
        const {
          texture: dd,
          ext: Jd,
          mimeType: kd
        } = Cd[pd], Nd = await Gk(dd);
        if (Nd && qP(Nd.mimeType) && Nd.mimeType === kd) Pd[`textures/Texture_${pd}.${Jd}`] = new Uint8Array(Nd.data);
        else {
          const Nd = dd.getSize(),
            Wd = await (0, vd.f)(dd),
            Zd = await sd.DumpTools.DumpDataAsync(Nd.width, Nd.height, Wd, kd, void 0, !1, !0);
          Pd[`textures/Texture_${pd}.${Jd}`] = new Uint8Array(Zd).slice()
        }
      }
      let Kd = 0;
      for (const pd in Pd) {
        const dd = Pd[pd];
        if (!dd) continue;
        Kd += 34 + pd.length;
        const Jd = 63 & Kd;
        if (4 !== Jd) {
          const kd = new Uint8Array(64 - Jd);
          Pd[pd] = [dd, {
            extra: {
              12345: kd
            }
          }]
        }
        Kd = dd.length
      }
      return fflate.zipSync(Pd, {
        level: 0
      })
    }
    var MP = kd(41088);
    class FP {
      static Export(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          kd = arguments.length > 2 ? arguments[2] : void 0;
        if (!dd || 0 === dd.bones.length) throw new Error("Invalid or empty skeleton provided");
        let pd = Jd;
        Jd && 0 !== Jd.length || (pd = dd.animations.map((dd => dd.name)));
        let Nd = null;
        for (const Cd of pd) {
          const Jd = dd.getAnimationRange(Cd);
          Jd && (Nd = Nd ? new MP.b("animation-range", Math.min(Nd.from, Jd.from), Math.max(Nd.to, Jd.to)) : Jd)
        }
        if (!Nd && (dd.animations.length > 0 && (Nd = dd.getAnimationRange(dd.animations[0].name)), !Nd)) throw new Error("No animation range found in skeleton");
        const Wd = kd || 1 / (dd.animations[0]?.framePerSecond || 30),
          Pd = this._BuildBoneHierarchy(dd, pd);
        let Zd = 0;
        for (const Cd of Pd) Cd.positionKeys.length > 0 && (Zd = Math.max(Zd, Cd.positionKeys.length)), Cd.rotationKeys.length > 0 && (Zd = Math.max(Zd, Cd.rotationKeys.length));
        0 === Zd && (Zd = Math.floor((Nd.to - Nd.from) / Wd) + 1);
        let gd = "";
        return gd += "HIERARCHY\n", gd += this._ExportHierarchy(Pd, 0), gd += "MOTION\n", gd += `Frames: ${Zd}\n`, gd += `Frame Time: ${Wd.toFixed(6)}\n`, gd += this._ExportMotionData(Pd, Zd, 0, pd), gd
      }
      static _BuildBoneHierarchy(dd, Jd) {
        const kd = new Map,
          pd = [];
        for (const Nd of dd.bones) {
          const dd = {
            bone: Nd,
            children: [],
            hasPositionChannels: !1,
            hasRotationChannels: !1,
            positionKeys: [],
            rotationKeys: []
          };
          kd.set(Nd, dd)
        }
        for (const Nd of dd.bones) {
          const dd = kd.get(Nd);
          if (Nd.animations.length > 0)
            for (const kd of Nd.animations) Jd.includes(kd.name) && ("position" === kd.targetProperty ? (dd.hasPositionChannels = !0, dd.positionKeys.push(...kd.getKeys())) : "rotationQuaternion" === kd.targetProperty && (dd.hasRotationChannels = !0, dd.rotationKeys.push(...kd.getKeys())));
          if (Nd.getParent()) {
            const Jd = kd.get(Nd.getParent());
            Jd && Jd.children.push(dd)
          } else pd.push(dd)
        }
        return pd
      }
      static _ExportHierarchy(dd, Jd) {
        let kd = "";
        const pd = "    ".repeat(Jd);
        for (const Nd of dd) {
          const dd = Nd.bone;
          if (this._IsEndSite(Nd)) {
            kd += `${pd}End Site\n`, kd += `${pd}{\n`;
            const Jd = this._GetBoneOffset(dd);
            kd += `${pd}    OFFSET ${Jd.x.toFixed(6)} ${Jd.y.toFixed(6)} ${Jd.z.toFixed(6)}\n`, kd += `${pd}}\n`
          } else {
            kd += `${0===Jd?"ROOT":`${pd}JOINT`} ${dd.name}\n`, kd += `${pd}{\n`;
            const Wd = this._GetBoneOffset(dd);
            kd += `${pd}    OFFSET ${Wd.x.toFixed(6)} ${Wd.y.toFixed(6)} ${Wd.z.toFixed(6)}\n`;
            const Pd = [];
            Nd.hasPositionChannels && Pd.push("Xposition", "Yposition", "Zposition"), Nd.hasRotationChannels && Pd.push("Zrotation", "Xrotation", "Yrotation"), Pd.length > 0 && (kd += `${pd}    CHANNELS ${Pd.length} ${Pd.join(" ")}\n`), Nd.children.length > 0 && (kd += this._ExportHierarchy(Nd.children, Jd + 1)), kd += `${pd}}\n`
          }
        }
        return kd
      }
      static _IsEndSite(dd) {
        return 0 === dd.children.length
      }
      static _GetBoneOffset(dd) {
        try {
          if (!dd.getParent()) return dd.getRestMatrix().getTranslation();
          return dd.getLocalMatrix().getTranslation()
        } catch (Jd) {
          return pd.IL.Zero()
        }
      }
      static _ExportMotionData(dd, Jd, kd, pd) {
        let Nd = "";
        for (let Wd = 0; Wd < Jd; Wd++) {
          const Jd = [];
          this._CollectFrameValues(dd, Wd + kd, Jd, pd), Nd += Jd.map((dd => dd.toFixed(6))).join(" ") + "\n"
        }
        return Nd
      }
      static _CollectFrameValues(dd, Jd, kd, pd) {
        for (const Nd of dd)
          if (!this._IsEndSite(Nd)) {
            if (Nd.hasPositionChannels) {
              const dd = this._GetPositionAtFrameIndex(Nd.positionKeys, Jd);
              kd.push(dd.x, dd.y, dd.z)
            }
            if (Nd.hasRotationChannels) {
              const dd = this._GetRotationAtFrameIndex(Nd.rotationKeys, Jd),
                pd = this._QuaternionToEuler(dd);
              kd.push(pd.z, pd.x, pd.y)
            }
            Nd.children.length > 0 && this._CollectFrameValues(Nd.children, Jd, kd, pd)
          }
      }
      static _GetPositionAtFrameIndex(dd, Jd) {
        if (0 === dd.length) return pd.IL.Zero();
        return dd[Math.max(0, Math.min(Jd, dd.length - 1))].value.clone()
      }
      static _GetRotationAtFrameIndex(dd, Jd) {
        if (0 === dd.length) return pd.Quaternion.Identity();
        return dd[Math.max(0, Math.min(Jd, dd.length - 1))].value.clone()
      }
      static _QuaternionToEuler(dd) {
        const Jd = new pd.Matrix;
        dd.toRotationMatrix(Jd);
        const kd = Jd.m;
        let Wd, Pd, Zd;
        const gd = Math.sqrt(kd[0] * kd[0] + kd[1] * kd[1]);
        return gd > Xk.e ? (Wd = Math.atan2(kd[6], kd[10]), Pd = Math.atan2(-kd[2], gd), Zd = Math.atan2(kd[1], kd[0])) : (Wd = Math.atan2(-kd[9], kd[5]), Pd = Math.atan2(-kd[2], gd), Zd = 0), new pd.IL(Nd.Tools.ToDegrees(Wd), Nd.Tools.ToDegrees(Pd), Nd.Tools.ToDegrees(Zd))
      }
    }

    function YP(dd) {
      return "string" === typeof dd?.name
    }
    const mP = Symbol("__xml:meta$__"),
      bP = Symbol("__xml:name$__");

    function SP(dd, Jd) {
      Object.prototype.hasOwnProperty.call(dd.metadata, mP) || (dd.metadata[mP] = []), dd.metadata[mP].push(Jd)
    }

    function jP(dd) {
      return (Jd, kd) => {
        Jd[bP] = dd
      }
    }

    function XP() {
      return (dd, Jd) => SP(Jd, {
        kind: "none",
        prop: String(Jd.name),
        ignore: !0
      })
    }

    function fP(dd) {
      return (Jd, kd) => SP(kd, {
        kind: "attr",
        prop: String(kd.name),
        ...dd
      })
    }

    function nP(dd) {
      return (Jd, kd) => SP(kd, {
        kind: "elem",
        prop: String(kd.name),
        ...dd
      })
    }

    function UP(dd) {
      const Jd = "function" === typeof dd ? dd : dd?.constructor,
        kd = Jd?.[Symbol.metadata];
      if (!kd) return [];
      const pd = [];
      let Nd = kd;
      for (; Nd;) Object.prototype.hasOwnProperty.call(Nd, mP) && pd.push(...Nd[mP]), Nd = Object.getPrototypeOf(Nd);
      return pd
    }

    function yP(dd) {
      const Jd = dd?.constructor?.[bP];
      return Jd || void 0
    }

    function DP(dd) {
      return /^[A-Za-z_][A-Za-z0-9._-]*$/.test(dd)
    }

    function TP(dd) {
      if (YP(dd)) return dd;
      const Jd = (dd ?? "").trim();
      if (!Jd) return {
        name: ""
      };
      const kd = Jd.indexOf(":");
      if (-1 === kd) return {
        name: Jd
      };
      if (-1 !== Jd.indexOf(":", kd + 1)) return {
        name: Jd
      };
      const pd = Jd.slice(0, kd),
        Nd = Jd.slice(kd + 1);
      return DP(pd) && DP(Nd) ? {
        ns: pd,
        name: Nd
      } : {
        name: Jd
      }
    }

    function EP(dd, Jd) {
      return Jd ? `${Jd}:${dd}` : dd
    }
    const cP = Object.freeze({
        eps: 1e-6,
        maxDecimalsCap: 15,
        trimTrailingZeros: !0,
        allowScientific: !1,
        snapNearZero: !0
      }),
      hP = Object.freeze({
        number: cP
      });

    function rP(dd) {
      const Jd = dd?.eps ?? cP.eps;
      return {
        eps: Jd,
        maxDecimalsCap: dd?.maxDecimalsCap ?? cP.maxDecimalsCap,
        trimTrailingZeros: dd?.trimTrailingZeros ?? cP.trimTrailingZeros,
        fixedDecimals: dd?.fixedDecimals,
        allowScientific: dd?.allowScientific ?? cP.allowScientific,
        snapNearZero: dd?.snapNearZero ?? cP.snapNearZero,
        zeroThreshold: dd?.zeroThreshold ?? Jd,
        perAttributeEps: dd?.perAttributeEps
      }
    }

    function uP(dd) {
      return {
        number: rP(dd?.number)
      }
    }
    class tP {
      constructor(dd) {
        if (this.o = dd, this._o = dd.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
      }
      toString(dd) {
        if (!Number.isFinite(dd)) throw new Error(`Cannot format non-finite number: ${dd}`);
        const Jd = this._o,
          kd = this._clampInt(Jd.maxDecimalsCap ?? 15, 0, 20),
          pd = Jd.trimTrailingZeros ?? !0,
          Nd = Jd.snapNearZero ?? !0,
          Wd = Jd.zeroThreshold ?? Jd.eps,
          Pd = 1 / Jd.eps;
        let Zd, gd = Math.round(dd * Pd) / Pd;
        if (Object.is(gd, -0) && (gd = 0), Nd && Math.abs(gd) <= Wd && (gd = 0), Zd = void 0 !== Jd.fixedDecimals ? this._clampInt(Jd.fixedDecimals, 0, kd) : this._clampInt(Math.ceil(-Math.log10(Jd.eps)), 0, kd), Jd.allowScientific, 0 === Zd) return String(Math.trunc(gd));
        let Cd = gd.toFixed(Zd);
        if (pd && void 0 === Jd.fixedDecimals && (Cd = Cd.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(Cd)) throw new Error(`Scientific notation not allowed in XML output: ${Cd}`);
        return Cd
      }
      _clampInt(dd, Jd, kd) {
        return Number.isFinite(dd) ? (dd = Math.trunc(dd), Math.max(Jd, Math.min(kd, dd))) : Jd
      }
    }

    function VP(dd) {
      return dd instanceof Date
    }

    function zP(dd) {
      return "string" === typeof dd
    }

    function HP(dd) {
      return "string" === typeof dd || "number" === typeof dd || "boolean" === typeof dd || "bigint" === typeof dd || VP(dd)
    }

    function wP(dd) {
      return "number" === typeof dd || "boolean" === typeof dd || "bigint" === typeof dd || VP(dd)
    }
    class AP {
      constructor(dd, Jd) {
        this._ns = new Map, this._prefixCount = 0, this._builder = dd, this._format = uP(Jd), this._nFmt = new tP(this._format)
      }
      withNamespace() {
        for (var dd = arguments.length, Jd = new Array(dd), kd = 0; kd < dd; kd++) Jd[kd] = arguments[kd];
        for (const pd of Jd) this._assignNamespace(pd);
        return this
      }
      serialize(dd, Jd) {
        if (!(Jd = Jd ?? yP(dd))) throw new Error("can not find name for given object");
        const kd = TP(Jd);
        kd.ns && this._assignNamespace(kd.ns, "xmlns"), this._gatherNamespaces(dd, new WeakSet);
        const pd = this._builder.ele(null, kd.name);
        for (const [Nd, Wd] of Array.from(this._ns.entries())) pd.att("xmlns", Wd, Nd);
        this._writeObjectContent(pd, dd, (new WeakSet).add(dd)), this._builder.end()
      }
      _writeObject(dd, Jd, kd) {
        if (kd.has(Jd)) return;
        if (kd.add(Jd), Array.isArray(Jd)) {
          for (const pd of Jd) wP(pd) || (zP(pd) ? this._builder.text(pd) : this._writeObject(dd, pd, kd));
          return
        }
        const pd = yP(Jd);
        if (!pd) return;
        const Nd = TP(pd),
          Wd = this._getPrefix(Nd),
          Pd = EP(Nd.name, Wd);
        dd.ele(null, Pd), this._writeObjectContent(dd, Jd, kd), this._builder.end()
      }
      _getPrefix(dd) {
        if (dd.ns) {
          const Jd = this._ns.get(dd.ns.toLowerCase());
          if ("xmlns" !== Jd) return Jd
        }
      }
      _writeObjectContent(dd, Jd, kd) {
        const pd = UP(Jd) ?? [],
          Nd = new Map;
        for (const Pd of pd) {
          const dd = Nd.get(Pd.prop) ?? [];
          dd.push(Pd), Nd.set(Pd.prop, dd)
        }
        const Wd = Object.keys(Jd).sort(((dd, Jd) => {
          const kd = (Nd.get(dd) ?? []).some((dd => "attr" === dd.kind));
          return kd === (Nd.get(Jd) ?? []).some((dd => "attr" === dd.kind)) ? 0 : kd ? -1 : 1
        }));
        for (const Pd of Wd) {
          const pd = Jd[Pd];
          if (null === pd || void 0 === pd) continue;
          const Wd = Nd.get(Pd);
          if (Wd) {
            if (Wd.some((dd => !0 === dd.ignore || "none" === dd.kind))) continue;
            for (const Jd of Wd) {
              const kd = Jd.name ?? Jd.prop.toLowerCase();
              if (kd) switch (Jd.kind) {
                case "attr": {
                  let Nd = null;
                  if ("number" === typeof pd && this._nFmt && (Nd = this._nFmt.toString(pd)), Jd.formatter) {
                    Nd = new Jd.formatter(this._format).toString(pd)
                  }
                  if (Nd = Nd ?? pd.toString(), Nd) {
                    const Jd = TP(kd),
                      pd = this._getPrefix(Jd),
                      Wd = EP(Jd.name, pd);
                    dd.att(null, Wd, Nd)
                  }
                  break
                }
              }
            }
          } else wP(pd) || (zP(pd) ? this._builder.text(pd) : this._writeObject(dd, pd, kd))
        }
      }
      _gatherNamespaces(dd, Jd) {
        if (Jd.has(dd)) return;
        if (Jd.add(dd), Array.isArray(dd)) {
          for (const kd of dd) HP(kd) || this._gatherNamespaces(kd, Jd);
          return
        }
        const kd = yP(dd);
        kd && this._assignNamespace(kd);
        const pd = UP(dd) ?? [],
          Nd = new Map;
        for (const Pd of pd) {
          const dd = Nd.get(Pd.prop) ?? [];
          dd.push(Pd), Nd.set(Pd.prop, dd)
        }
        const Wd = [];
        for (const Pd of Object.keys(dd)) {
          const Jd = dd[Pd];
          if (null === Jd || void 0 === Jd) continue;
          const kd = Nd.get(Pd);
          if (kd) {
            if (kd.some((dd => !0 === dd.ignore || "none" === dd.kind))) continue;
            for (const dd of kd) dd.name && this._assignNamespace(dd.name)
          }
          Wd.push(Jd)
        }
        for (const Pd of Wd) HP(Pd) || this._gatherNamespaces(Pd, Jd)
      }
      _assignNamespace(dd, Jd) {
        const kd = TP(dd);
        if (kd?.ns) {
          const dd = kd.ns.toLowerCase();
          this._ns.get(dd) || this._ns.set(dd, Jd ?? this._buildNsPrefix(dd))
        } else if ("xmlns" === Jd) {
          const dd = kd.name.toLowerCase();
          this._ns.get(dd) || this._ns.set(dd, Jd ?? this._buildNsPrefix(dd))
        }
      }
      _buildNsPrefix(dd) {
        let Jd, kd = !1;
        do {
          Jd = "ns" + this._prefixCount++;
          for (const dd of Array.from(this._ns.values()))
            if (dd === Jd) {
              kd = !0;
              break
            }
        } while (kd);
        return Jd
      }
    }
    class dZ {}
    var JZ;
    dZ.OpenTag = "<", dZ.CloseTag = ">", dZ.Slash = "/", dZ.Question = "?", dZ.Quote = '"', dZ.Equal = "=", dZ.Space = " ", dZ.Semicolon = ":", dZ.Dec = "<?xml", dZ.Xml = "xml", dZ.Xmlns = "xmlns", dZ.Xsi = "xsi", dZ.VersionKeyword = "version", dZ.EncodingKeyword = "encoding", dZ.StandaloneKeyword = "standalone",
      function(dd) {
        dd[dd.Declaration = 0] = "Declaration", dd[dd.Tag = 1] = "Tag", dd[dd.Attribute = 2] = "Attribute", dd[dd.Text = 3] = "Text"
      }(JZ || (JZ = {}));
    class kZ {
      constructor(dd) {
        this._ctxStack = [], this._d = 0, this._w = dd
      }
      dec(dd, Jd, kd) {
        return this._w.write(dZ.Dec), this._writeAttStr(dZ.VersionKeyword, dd), Jd && this._writeAttStr(dZ.EncodingKeyword, Jd), void 0 !== kd && this._writeAttStr(dZ.StandaloneKeyword, kd ? "yes" : "no"), this._w.write(dZ.Question, dZ.CloseTag), this
      }
      att(dd, Jd, kd) {
        const pd = this._peekContext();
        if (!pd) throw new Error("att() without open element");
        if (pd.closed) throw new Error(`att() after start tag closed for <${pd.name}>`);
        if (this._isXmlnsDecl(dd, Jd)) {
          if (Jd === dZ.Xmlns) pd.defaultNs = kd, this._registerNamespace(pd, "", kd), this._writeAttStr(dZ.Xmlns, kd);
          else if (dd) this._registerNamespace(pd, Jd, kd), this._writeAttStr(`${dd}:${Jd}`, kd);
          else {
            const dd = Jd.slice(6);
            this._registerNamespace(pd, dd, kd), this._writeAttStr(Jd, kd)
          }
          return pd.lastToken = JZ.Attribute, this
        }
        let Nd = Jd;
        if (dd) {
          Nd = `${this._ensurePrefixDeclared(pd,dd)}:${Jd}`
        }
        return pd.lastToken = JZ.Attribute, this._writeAttStr(Nd, kd), this
      }
      ele(dd, Jd) {
        const kd = this._peekContext();
        kd && this._closeOpenTagIfNeeded(kd);
        let pd = Jd;
        if (dd) {
          pd = `${this._lookupPrefix(dd)??dd}:${Jd}`
        }
        return this._pushContext(pd, ++this._d), this._w.write(dZ.OpenTag, pd), this
      }
      text(dd) {
        const Jd = this._peekContext();
        if (!Jd) throw new Error("text() without open element");
        return this._closeOpenTagIfNeeded(Jd), Jd.lastToken = JZ.Text, this._w.write(this._escText(dd)), this
      }
      end() {
        const dd = this._popContext();
        return dd && (this._d--, dd.closed ? this._w.write(dZ.OpenTag, dZ.Slash, dd.name, dZ.CloseTag) : this._w.write(dZ.Slash, dZ.CloseTag)), this
      }
      _pushContext(dd, Jd) {
        const kd = new kZ.Context(dd, Jd);
        return this._ctxStack.push(kd), kd
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
      _writeAttStr(dd, Jd) {
        this._w.write(dZ.Space, dd, dZ.Equal, dZ.Quote, this._escAttr(Jd), dZ.Quote)
      }
      _lookupPrefix(dd) {
        let Jd = this._ctxStack.length - 1;
        if (Jd >= 0)
          do {
            const kd = this._ctxStack[Jd--],
              pd = kd.ns2prefix?.get(dd);
            if (pd) return pd
          } while (Jd >= 0)
      }
      _escText(dd) {
        return dd.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
      _escAttr(dd) {
        return this._escText(dd).replace(/"/g, "&quot;").replace(/'/g, "&apos;")
      }
      _isXmlnsDecl(dd, Jd) {
        if (dd) return dd === dZ.Xmlns;
        const kd = Jd.length,
          pd = dZ.Xmlns.length;
        return kd >= pd && (Jd.startsWith(dZ.Xmlns) && (Jd.length == pd || Jd[pd] == dZ.Semicolon))
      }
      _registerNamespace(dd, Jd, kd) {
        if (Jd === dZ.Xml || Jd === dZ.Xmlns) throw new Error(`reserved prefix '${Jd}'`);
        const pd = dd.prefix2ns.get(Jd);
        if (pd && pd !== kd) throw new Error(`prefix '${Jd}' already bound to a different namespace`);
        dd.ns2prefix.get(kd) || dd.ns2prefix.set(kd, Jd), dd.prefix2ns.set(Jd, kd)
      }
      _allocPrefix(dd) {
        let Jd = 1;
        for (;;) {
          const kd = "ns" + Jd++;
          if (!dd.prefix2ns.has(kd)) return kd
        }
      }
      _ensurePrefixDeclared(dd, Jd) {
        const kd = this._lookupPrefix(Jd);
        if (kd) return kd;
        if (dd.closed) throw new Error(`can not declare namespace after start tag closed for <${dd.name}>`);
        const pd = this._allocPrefix(dd);
        return this._writeAttStr(`${dZ.Xmlns}:${pd}`, Jd), this._registerNamespace(dd, pd, Jd), pd
      }
      _closeOpenTagIfNeeded(dd) {
        dd.closed || (this._w.write(dZ.CloseTag), dd.closed = !0)
      }
    }
    kZ.Context = class {
      constructor(dd, Jd) {
        this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = dd, this.depth = Jd
      }
    };
    class pZ {
      constructor() {
        this.count = 0, this._chunks = []
      }
      write() {
        for (var dd = arguments.length, Jd = new Array(dd), kd = 0; kd < dd; kd++) Jd[kd] = arguments[kd];
        if (0 === Jd.length) return this;
        const pd = Jd.join("");
        return this._chunks.push(pd), this.count += pd.length, this
      }
      toString() {
        return this._chunks.join("")
      }
      clear() {
        this._chunks = [], this.count = 0
      }
    }
    class NZ {
      constructor(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._sink = dd, this._opts = Jd, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
      }
      write() {
        for (var dd = arguments.length, Jd = new Array(dd), kd = 0; kd < dd; kd++) Jd[kd] = arguments[kd];
        if (0 === Jd.length) return this;
        const pd = Jd.join("");
        if (0 === pd.length) return this;
        this._pending += pd, this._pendingChars += pd.length;
        const Nd = this._opts.flushChars ?? 65536;
        return this._pendingChars >= Nd && this.flush(), this
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
    const WZ = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
      PZ = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
    var ZZ, gZ;
    ! function(dd) {
      dd.micron = "micron", dd.millimeter = "millimeter", dd.centimeter = "centimeter", dd.inch = "inch", dd.foot = "foot", dd.meter = "meter"
    }(ZZ || (ZZ = {})),
    function(dd) {
      dd.model = "model", dd.solidsupport = "solidsupport", dd.support = "support", dd.surface = "surface", dd.other = "other"
    }(gZ || (gZ = {}));
    const CZ = "http://schemas.openxmlformats.org/package/2006/content-types",
      KZ = "http://schemas.openxmlformats.org/package/2006/relationships";
    var oZ;
    ! function(dd) {
      dd.Relationships = "application/vnd.openxmlformats-package.relationships+xml", dd.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", dd.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", dd.Colors = "application/vnd.ms-package.3dmanufacturing-colors+xml", dd.Texture = "application/vnd.ms-package.3dmanufacturing-texture+xml", dd.Texture2D = "application/vnd.ms-package.3dmanufacturing-texture2d+xml", dd.Production = "application/vnd.ms-package.3dmanufacturing-production+xml", dd.Slice = "application/vnd.ms-package.3dmanufacturing-slice+xml", dd.BeamLattice = "application/vnd.ms-package.3dmanufacturing-beamlattice+xml", dd.SecureContent = "application/vnd.ms-package.3dmanufacturing-securecontent+xml", dd.Png = "image/png", dd.Jpeg = "image/jpeg", dd.Tiff = "image/tiff", dd.Xml = "application/xml"
    }(oZ || (oZ = {}));
    const lZ = "_rels/",
      QZ = "3D/",
      LZ = "3dmodel.model",
      OZ = ".rels",
      eZ = "[Content_Types].xml";
    class RZ {
      static IsKnown(dd) {
        return RZ.Known.has(dd)
      }
      static IsThreeDimModel(dd) {
        return dd === RZ.ThreeDimModel
      }
    }
    RZ.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", RZ.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", RZ.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", RZ.MustPreserve = "http://schemas.openxmlformats.org/package/2006/relationships/mustpreserve", RZ.Known = new Set([RZ.ThreeDimModel, RZ.Thumbnail, RZ.PrintTicket, RZ.MustPreserve]);
    let IZ = (() => {
        let dd, Jd, kd = [jP({
            ns: CZ,
            name: "Types"
          })],
          pd = [];
        Jd = class {
          constructor() {
            this.items = []
          }
        };
        return (0, ad.k)(Jd, "ThreeMfContentTypes"), (() => {
          const Nd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, ad.h)(null, dd = {
            value: Jd
          }, kd, {
            kind: "class",
            name: Jd.name,
            metadata: Nd
          }, null, pd), Jd = dd.value, Nd && Object.defineProperty(Jd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Nd
          }), (0, ad.i)(Jd, pd)
        })(), Jd
      })(),
      GZ = (() => {
        let dd, Jd, kd, pd, Nd = [jP({
            ns: CZ,
            name: "Default"
          })],
          Wd = [],
          Pd = [],
          Zd = [],
          gd = [],
          Cd = [];
        Jd = class {
          constructor(dd, Jd) {
            this.ext = (0, ad.i)(this, Pd, void 0), this.ct = ((0, ad.i)(this, Zd), (0, ad.i)(this, gd, void 0)), (0, ad.i)(this, Cd), this.ext = dd, this.ct = Jd
          }
        };
        return (0, ad.k)(Jd, "ThreeMfContentType"), (() => {
          const Kd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          kd = [fP({
            name: {
              ns: CZ,
              name: "Extension"
            }
          })], pd = [fP({
            name: {
              ns: CZ,
              name: "ContentType"
            }
          })], (0, ad.h)(null, null, kd, {
            kind: "field",
            name: "ext",
            static: !1,
            private: !1,
            access: {
              has: dd => "ext" in dd,
              get: dd => dd.ext,
              set: (dd, Jd) => {
                dd.ext = Jd
              }
            },
            metadata: Kd
          }, Pd, Zd), (0, ad.h)(null, null, pd, {
            kind: "field",
            name: "ct",
            static: !1,
            private: !1,
            access: {
              has: dd => "ct" in dd,
              get: dd => dd.ct,
              set: (dd, Jd) => {
                dd.ct = Jd
              }
            },
            metadata: Kd
          }, gd, Cd), (0, ad.h)(null, dd = {
            value: Jd
          }, Nd, {
            kind: "class",
            name: Jd.name,
            metadata: Kd
          }, null, Wd), Jd = dd.value, Kd && Object.defineProperty(Jd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Kd
          }), (0, ad.i)(Jd, Wd)
        })(), Jd
      })(),
      vZ = (() => {
        let dd, Jd, kd = [jP({
            ns: KZ,
            name: "Relationships"
          })],
          pd = [];
        Jd = class {
          constructor() {
            this.items = []
          }
        };
        return (0, ad.k)(Jd, "ThreeMfRelationships"), (() => {
          const Nd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, ad.h)(null, dd = {
            value: Jd
          }, kd, {
            kind: "class",
            name: Jd.name,
            metadata: Nd
          }, null, pd), Jd = dd.value, Nd && Object.defineProperty(Jd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Nd
          }), (0, ad.i)(Jd, pd)
        })(), Jd
      })(),
      xZ = (() => {
        let dd, Jd, kd, pd, Nd, Wd = [jP({
            ns: KZ,
            name: "Relationship"
          })],
          Pd = [],
          Zd = [],
          gd = [],
          Cd = [],
          Kd = [],
          od = [],
          ld = [];
        Jd = class {
          constructor(dd, Jd, kd) {
            this.id = (0, ad.i)(this, Zd, void 0), this.type = ((0, ad.i)(this, gd), (0, ad.i)(this, Cd, void 0)), this.target = ((0, ad.i)(this, Kd), (0, ad.i)(this, od, void 0)), (0, ad.i)(this, ld), this.id = dd, this.type = Jd, this.target = kd
          }
        };
        return (0, ad.k)(Jd, "ThreeMfRelationship"), (() => {
          const Qd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          kd = [fP({
            name: "Id"
          })], pd = [fP({
            name: "Type"
          })], Nd = [fP({
            name: "Target"
          })], (0, ad.h)(null, null, kd, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: dd => "id" in dd,
              get: dd => dd.id,
              set: (dd, Jd) => {
                dd.id = Jd
              }
            },
            metadata: Qd
          }, Zd, gd), (0, ad.h)(null, null, pd, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: dd => "type" in dd,
              get: dd => dd.type,
              set: (dd, Jd) => {
                dd.type = Jd
              }
            },
            metadata: Qd
          }, Cd, Kd), (0, ad.h)(null, null, Nd, {
            kind: "field",
            name: "target",
            static: !1,
            private: !1,
            access: {
              has: dd => "target" in dd,
              get: dd => dd.target,
              set: (dd, Jd) => {
                dd.target = Jd
              }
            },
            metadata: Qd
          }, od, ld), (0, ad.h)(null, dd = {
            value: Jd
          }, Wd, {
            kind: "class",
            name: Jd.name,
            metadata: Qd
          }, null, Pd), Jd = dd.value, Qd && Object.defineProperty(Jd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Qd
          }), (0, ad.i)(Jd, Pd)
        })(), Jd
      })();
    class qZ {
      constructor(dd, Jd, kd) {
        this.contentTypes = dd, this.relationships = Jd, this.model = kd
      }
    }
    class BZ {
      static Zero() {
        return new BZ([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }
      constructor(dd) {
        this.values = dd
      }
      toString() {
        return this.values.join(" ")
      }
    }
    class sZ {
      constructor(dd) {
        this.o = dd, this._f = new tP(dd)
      }
      toString(dd) {
        return dd.values.map((dd => this._f.toString(dd))).join(" ")
      }
    }
    let iZ = (() => {
        let dd, Jd, kd, pd, Nd, Wd = [jP({
            ns: WZ,
            name: "model"
          })],
          Pd = [],
          Zd = [],
          gd = [],
          Cd = [],
          Kd = [],
          od = [],
          ld = [];
        Jd = class {
          constructor() {
            this.unit = (0, ad.i)(this, Zd, ZZ.millimeter), this.requiredextensions = ((0, ad.i)(this, gd), (0, ad.i)(this, Cd, void 0)), this.recommendedextensions = ((0, ad.i)(this, Kd), (0, ad.i)(this, od, void 0)), this.metadata = (0, ad.i)(this, ld)
          }
        };
        return (0, ad.k)(Jd, "ThreeMfModel"), (() => {
          const Qd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          kd = [fP({
            name: "unit"
          })], pd = [fP({
            name: "requiredextensions"
          })], Nd = [fP({
            name: "recommendedextensions"
          })], (0, ad.h)(null, null, kd, {
            kind: "field",
            name: "unit",
            static: !1,
            private: !1,
            access: {
              has: dd => "unit" in dd,
              get: dd => dd.unit,
              set: (dd, Jd) => {
                dd.unit = Jd
              }
            },
            metadata: Qd
          }, Zd, gd), (0, ad.h)(null, null, pd, {
            kind: "field",
            name: "requiredextensions",
            static: !1,
            private: !1,
            access: {
              has: dd => "requiredextensions" in dd,
              get: dd => dd.requiredextensions,
              set: (dd, Jd) => {
                dd.requiredextensions = Jd
              }
            },
            metadata: Qd
          }, Cd, Kd), (0, ad.h)(null, null, Nd, {
            kind: "field",
            name: "recommendedextensions",
            static: !1,
            private: !1,
            access: {
              has: dd => "recommendedextensions" in dd,
              get: dd => dd.recommendedextensions,
              set: (dd, Jd) => {
                dd.recommendedextensions = Jd
              }
            },
            metadata: Qd
          }, od, ld), (0, ad.h)(null, dd = {
            value: Jd
          }, Wd, {
            kind: "class",
            name: Jd.name,
            metadata: Qd
          }, null, Pd), Jd = dd.value, Qd && Object.defineProperty(Jd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Qd
          })
        })(), Jd.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, ad.i)(Jd, Pd), Jd
      })(),
      aZ = (() => {
        let dd, Jd, kd, pd, Nd, Wd = [jP({
            ns: WZ,
            name: "meta"
          })],
          Pd = [],
          Zd = [],
          gd = [],
          Cd = [],
          Kd = [],
          od = [],
          ld = [];
        Jd = class {
          constructor(dd, Jd, kd, pd) {
            this.name = (0, ad.i)(this, Zd, void 0), this.preserve = ((0, ad.i)(this, gd), (0, ad.i)(this, Cd, void 0)), this.type = ((0, ad.i)(this, Kd), (0, ad.i)(this, od, void 0)), this.value = (0, ad.i)(this, ld), this.name = dd, this.value = Jd, this.preserve = kd, this.type = pd
          }
        };
        return (0, ad.k)(Jd, "ThreeMfMeta"), (() => {
          const Qd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          kd = [fP({
            name: "name"
          })], pd = [fP({
            name: "preserve"
          })], Nd = [fP({
            name: "type"
          })], (0, ad.h)(null, null, kd, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: dd => "name" in dd,
              get: dd => dd.name,
              set: (dd, Jd) => {
                dd.name = Jd
              }
            },
            metadata: Qd
          }, Zd, gd), (0, ad.h)(null, null, pd, {
            kind: "field",
            name: "preserve",
            static: !1,
            private: !1,
            access: {
              has: dd => "preserve" in dd,
              get: dd => dd.preserve,
              set: (dd, Jd) => {
                dd.preserve = Jd
              }
            },
            metadata: Qd
          }, Cd, Kd), (0, ad.h)(null, null, Nd, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: dd => "type" in dd,
              get: dd => dd.type,
              set: (dd, Jd) => {
                dd.type = Jd
              }
            },
            metadata: Qd
          }, od, ld), (0, ad.h)(null, dd = {
            value: Jd
          }, Wd, {
            kind: "class",
            name: Jd.name,
            metadata: Qd
          }, null, Pd), Jd = dd.value, Qd && Object.defineProperty(Jd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Qd
          }), (0, ad.i)(Jd, Pd)
        })(), Jd
      })(),
      MZ = (() => {
        let dd, Jd, kd = [jP({
            ns: WZ,
            name: "metadatagroup"
          })],
          pd = [];
        Jd = class {
          constructor() {
            this.metadata = []
          }
        };
        return (0, ad.k)(Jd, "ThreeMfMetadataGroup"), (() => {
          const Nd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, ad.h)(null, dd = {
            value: Jd
          }, kd, {
            kind: "class",
            name: Jd.name,
            metadata: Nd
          }, null, pd), Jd = dd.value, Nd && Object.defineProperty(Jd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Nd
          }), (0, ad.i)(Jd, pd)
        })(), Jd
      })(),
      FZ = (() => {
        let dd, Jd, kd = [jP({
            ns: WZ,
            name: "resources"
          })],
          pd = [];
        Jd = class {
          constructor() {
            this.object = []
          }
        };
        return (0, ad.k)(Jd, "ThreeMfResources"), (() => {
          const Nd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, ad.h)(null, dd = {
            value: Jd
          }, kd, {
            kind: "class",
            name: Jd.name,
            metadata: Nd
          }, null, pd), Jd = dd.value, Nd && Object.defineProperty(Jd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Nd
          }), (0, ad.i)(Jd, pd)
        })(), Jd
      })(),
      YZ = (() => {
        let dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd = [jP({
            ns: WZ,
            name: "object"
          })],
          Kd = [],
          od = [],
          ld = [],
          Qd = [],
          Ld = [],
          Od = [],
          ed = [],
          Rd = [],
          Id = [],
          Gd = [],
          vd = [],
          xd = [],
          qd = [],
          Bd = [],
          sd = [];
        Jd = class {
          constructor(dd) {
            let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gZ.model;
            this.id = (0, ad.i)(this, od, void 0), this.type = ((0, ad.i)(this, ld), (0, ad.i)(this, Qd, void 0)), this.thumbnail = ((0, ad.i)(this, Ld), (0, ad.i)(this, Od, void 0)), this.partnumber = ((0, ad.i)(this, ed), (0, ad.i)(this, Rd, void 0)), this.name = ((0, ad.i)(this, Id), (0, ad.i)(this, Gd, void 0)), this.pid = ((0, ad.i)(this, vd), (0, ad.i)(this, xd, void 0)), this.pindex = ((0, ad.i)(this, qd), (0, ad.i)(this, Bd, void 0)), this.metadatagroup = (0, ad.i)(this, sd), this.id = dd, this.type = Jd
          }
        };
        return (0, ad.k)(Jd, "ThreeMfObject"), (() => {
          const Md = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          kd = [fP({
            name: "id"
          })], pd = [fP({
            name: "type"
          })], Nd = [fP({
            name: "thumbnail"
          })], Wd = [fP({
            name: "partnumber"
          })], Pd = [fP({
            name: "name"
          })], Zd = [fP({
            name: "pid"
          })], gd = [fP({
            name: "pindex"
          })], (0, ad.h)(null, null, kd, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: dd => "id" in dd,
              get: dd => dd.id,
              set: (dd, Jd) => {
                dd.id = Jd
              }
            },
            metadata: Md
          }, od, ld), (0, ad.h)(null, null, pd, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: dd => "type" in dd,
              get: dd => dd.type,
              set: (dd, Jd) => {
                dd.type = Jd
              }
            },
            metadata: Md
          }, Qd, Ld), (0, ad.h)(null, null, Nd, {
            kind: "field",
            name: "thumbnail",
            static: !1,
            private: !1,
            access: {
              has: dd => "thumbnail" in dd,
              get: dd => dd.thumbnail,
              set: (dd, Jd) => {
                dd.thumbnail = Jd
              }
            },
            metadata: Md
          }, Od, ed), (0, ad.h)(null, null, Wd, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: dd => "partnumber" in dd,
              get: dd => dd.partnumber,
              set: (dd, Jd) => {
                dd.partnumber = Jd
              }
            },
            metadata: Md
          }, Rd, Id), (0, ad.h)(null, null, Pd, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: dd => "name" in dd,
              get: dd => dd.name,
              set: (dd, Jd) => {
                dd.name = Jd
              }
            },
            metadata: Md
          }, Gd, vd), (0, ad.h)(null, null, Zd, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: dd => "pid" in dd,
              get: dd => dd.pid,
              set: (dd, Jd) => {
                dd.pid = Jd
              }
            },
            metadata: Md
          }, xd, qd), (0, ad.h)(null, null, gd, {
            kind: "field",
            name: "pindex",
            static: !1,
            private: !1,
            access: {
              has: dd => "pindex" in dd,
              get: dd => dd.pindex,
              set: (dd, Jd) => {
                dd.pindex = Jd
              }
            },
            metadata: Md
          }, Bd, sd), (0, ad.h)(null, dd = {
            value: Jd
          }, Cd, {
            kind: "class",
            name: Jd.name,
            metadata: Md
          }, null, Kd), Jd = dd.value, Md && Object.defineProperty(Jd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Md
          }), (0, ad.i)(Jd, Kd)
        })(), Jd
      })(),
      mZ = (() => {
        let dd, Jd, kd = [jP({
            ns: WZ,
            name: "mesh"
          })],
          pd = [];
        Jd = class {
          constructor(dd, Jd) {
            this.vertices = dd ?? new bZ, this.triangles = Jd ?? new jZ
          }
        };
        return (0, ad.k)(Jd, "ThreeMfMesh"), (() => {
          const Nd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, ad.h)(null, dd = {
            value: Jd
          }, kd, {
            kind: "class",
            name: Jd.name,
            metadata: Nd
          }, null, pd), Jd = dd.value, Nd && Object.defineProperty(Jd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Nd
          }), (0, ad.i)(Jd, pd)
        })(), Jd
      })(),
      bZ = (() => {
        let dd, Jd, kd = [jP({
            ns: WZ,
            name: "vertices"
          })],
          pd = [];
        Jd = class {
          constructor() {
            this.vertex = []
          }
        };
        return (0, ad.k)(Jd, "ThreeMfVertices"), (() => {
          const Nd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, ad.h)(null, dd = {
            value: Jd
          }, kd, {
            kind: "class",
            name: Jd.name,
            metadata: Nd
          }, null, pd), Jd = dd.value, Nd && Object.defineProperty(Jd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Nd
          }), (0, ad.i)(Jd, pd)
        })(), Jd
      })(),
      SZ = (() => {
        let dd, Jd, kd, pd, Nd, Wd = [jP({
            ns: WZ,
            name: "vertex"
          })],
          Pd = [],
          Zd = [],
          gd = [],
          Cd = [],
          Kd = [],
          od = [],
          ld = [];
        Jd = class {
          constructor() {
            let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.x = (0, ad.i)(this, Zd, void 0), this.y = ((0, ad.i)(this, gd), (0, ad.i)(this, Cd, void 0)), this.z = ((0, ad.i)(this, Kd), (0, ad.i)(this, od, void 0)), (0, ad.i)(this, ld), this.x = dd, this.y = Jd, this.z = kd
          }
        };
        return (0, ad.k)(Jd, "ThreeMfVertex"), (() => {
          const Qd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          kd = [fP({
            name: "x"
          })], pd = [fP({
            name: "y"
          })], Nd = [fP({
            name: "z"
          })], (0, ad.h)(null, null, kd, {
            kind: "field",
            name: "x",
            static: !1,
            private: !1,
            access: {
              has: dd => "x" in dd,
              get: dd => dd.x,
              set: (dd, Jd) => {
                dd.x = Jd
              }
            },
            metadata: Qd
          }, Zd, gd), (0, ad.h)(null, null, pd, {
            kind: "field",
            name: "y",
            static: !1,
            private: !1,
            access: {
              has: dd => "y" in dd,
              get: dd => dd.y,
              set: (dd, Jd) => {
                dd.y = Jd
              }
            },
            metadata: Qd
          }, Cd, Kd), (0, ad.h)(null, null, Nd, {
            kind: "field",
            name: "z",
            static: !1,
            private: !1,
            access: {
              has: dd => "z" in dd,
              get: dd => dd.z,
              set: (dd, Jd) => {
                dd.z = Jd
              }
            },
            metadata: Qd
          }, od, ld), (0, ad.h)(null, dd = {
            value: Jd
          }, Wd, {
            kind: "class",
            name: Jd.name,
            metadata: Qd
          }, null, Pd), Jd = dd.value, Qd && Object.defineProperty(Jd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Qd
          }), (0, ad.i)(Jd, Pd)
        })(), Jd
      })(),
      jZ = (() => {
        let dd, Jd, kd = [jP({
            ns: WZ,
            name: "triangles"
          })],
          pd = [];
        Jd = class {
          constructor() {
            this.triangle = []
          }
        };
        return (0, ad.k)(Jd, "ThreeMfTriangles"), (() => {
          const Nd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, ad.h)(null, dd = {
            value: Jd
          }, kd, {
            kind: "class",
            name: Jd.name,
            metadata: Nd
          }, null, pd), Jd = dd.value, Nd && Object.defineProperty(Jd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Nd
          }), (0, ad.i)(Jd, pd)
        })(), Jd
      })(),
      XZ = (() => {
        let dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd = [jP({
            ns: WZ,
            name: "triangle"
          })],
          Kd = [],
          od = [],
          ld = [],
          Qd = [],
          Ld = [],
          Od = [],
          ed = [],
          Rd = [],
          Id = [],
          Gd = [],
          vd = [],
          xd = [],
          qd = [],
          Bd = [],
          sd = [];
        Jd = class {
          constructor(dd, Jd, kd) {
            this.v1 = (0, ad.i)(this, od, void 0), this.v2 = ((0, ad.i)(this, ld), (0, ad.i)(this, Qd, void 0)), this.v3 = ((0, ad.i)(this, Ld), (0, ad.i)(this, Od, void 0)), this.p1 = ((0, ad.i)(this, ed), (0, ad.i)(this, Rd, void 0)), this.p2 = ((0, ad.i)(this, Id), (0, ad.i)(this, Gd, void 0)), this.p3 = ((0, ad.i)(this, vd), (0, ad.i)(this, xd, void 0)), this.pid = ((0, ad.i)(this, qd), (0, ad.i)(this, Bd, void 0)), (0, ad.i)(this, sd), this.v1 = dd, this.v2 = Jd, this.v3 = kd
          }
        };
        return (0, ad.k)(Jd, "ThreeMfTriangle"), (() => {
          const Md = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          kd = [fP({
            name: "v1"
          })], pd = [fP({
            name: "v2"
          })], Nd = [fP({
            name: "v3"
          })], Wd = [fP({
            name: "p1"
          })], Pd = [fP({
            name: "p2"
          })], Zd = [fP({
            name: "p3"
          })], gd = [fP({
            name: "pid"
          })], (0, ad.h)(null, null, kd, {
            kind: "field",
            name: "v1",
            static: !1,
            private: !1,
            access: {
              has: dd => "v1" in dd,
              get: dd => dd.v1,
              set: (dd, Jd) => {
                dd.v1 = Jd
              }
            },
            metadata: Md
          }, od, ld), (0, ad.h)(null, null, pd, {
            kind: "field",
            name: "v2",
            static: !1,
            private: !1,
            access: {
              has: dd => "v2" in dd,
              get: dd => dd.v2,
              set: (dd, Jd) => {
                dd.v2 = Jd
              }
            },
            metadata: Md
          }, Qd, Ld), (0, ad.h)(null, null, Nd, {
            kind: "field",
            name: "v3",
            static: !1,
            private: !1,
            access: {
              has: dd => "v3" in dd,
              get: dd => dd.v3,
              set: (dd, Jd) => {
                dd.v3 = Jd
              }
            },
            metadata: Md
          }, Od, ed), (0, ad.h)(null, null, Wd, {
            kind: "field",
            name: "p1",
            static: !1,
            private: !1,
            access: {
              has: dd => "p1" in dd,
              get: dd => dd.p1,
              set: (dd, Jd) => {
                dd.p1 = Jd
              }
            },
            metadata: Md
          }, Rd, Id), (0, ad.h)(null, null, Pd, {
            kind: "field",
            name: "p2",
            static: !1,
            private: !1,
            access: {
              has: dd => "p2" in dd,
              get: dd => dd.p2,
              set: (dd, Jd) => {
                dd.p2 = Jd
              }
            },
            metadata: Md
          }, Gd, vd), (0, ad.h)(null, null, Zd, {
            kind: "field",
            name: "p3",
            static: !1,
            private: !1,
            access: {
              has: dd => "p3" in dd,
              get: dd => dd.p3,
              set: (dd, Jd) => {
                dd.p3 = Jd
              }
            },
            metadata: Md
          }, xd, qd), (0, ad.h)(null, null, gd, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: dd => "pid" in dd,
              get: dd => dd.pid,
              set: (dd, Jd) => {
                dd.pid = Jd
              }
            },
            metadata: Md
          }, Bd, sd), (0, ad.h)(null, dd = {
            value: Jd
          }, Cd, {
            kind: "class",
            name: Jd.name,
            metadata: Md
          }, null, Kd), Jd = dd.value, Md && Object.defineProperty(Jd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Md
          }), (0, ad.i)(Jd, Kd)
        })(), Jd
      })(),
      fZ = (() => {
        let dd, Jd, kd = [jP({
            ns: WZ,
            name: "components"
          })],
          pd = [];
        Jd = class {
          constructor() {
            this.component = []
          }
        };
        return (0, ad.k)(Jd, "ThreeMfComponents"), (() => {
          const Nd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, ad.h)(null, dd = {
            value: Jd
          }, kd, {
            kind: "class",
            name: Jd.name,
            metadata: Nd
          }, null, pd), Jd = dd.value, Nd && Object.defineProperty(Jd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Nd
          }), (0, ad.i)(Jd, pd)
        })(), Jd
      })(),
      nZ = (() => {
        let dd, Jd, kd, pd, Nd = [jP({
            ns: WZ,
            name: "component"
          })],
          Wd = [],
          Pd = [],
          Zd = [],
          gd = [],
          Cd = [];
        Jd = class {
          constructor(dd, Jd) {
            this.objectid = (0, ad.i)(this, Pd, void 0), this.transform = ((0, ad.i)(this, Zd), (0, ad.i)(this, gd, void 0)), (0, ad.i)(this, Cd), this.objectid = dd, this.transform = Jd
          }
        };
        return (0, ad.k)(Jd, "ThreeMfComponent"), (() => {
          const Kd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          kd = [fP({
            name: "objectid"
          })], pd = [fP({
            name: "transform",
            formatter: sZ
          })], (0, ad.h)(null, null, kd, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: dd => "objectid" in dd,
              get: dd => dd.objectid,
              set: (dd, Jd) => {
                dd.objectid = Jd
              }
            },
            metadata: Kd
          }, Pd, Zd), (0, ad.h)(null, null, pd, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: dd => "transform" in dd,
              get: dd => dd.transform,
              set: (dd, Jd) => {
                dd.transform = Jd
              }
            },
            metadata: Kd
          }, gd, Cd), (0, ad.h)(null, dd = {
            value: Jd
          }, Nd, {
            kind: "class",
            name: Jd.name,
            metadata: Kd
          }, null, Wd), Jd = dd.value, Kd && Object.defineProperty(Jd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Kd
          }), (0, ad.i)(Jd, Wd)
        })(), Jd
      })(),
      UZ = (() => {
        let dd, Jd, kd, pd = [jP({
            ns: WZ,
            name: "basematerials"
          })],
          Nd = [],
          Wd = [],
          Pd = [];
        Jd = class {
          constructor(dd) {
            this.id = (0, ad.i)(this, Wd, void 0), this.base = ((0, ad.i)(this, Pd), []), this.id = dd
          }
        };
        return (0, ad.k)(Jd, "ThreeMfBaseMaterials"), (() => {
          const Zd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          kd = [fP({
            name: "id"
          })], (0, ad.h)(null, null, kd, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: dd => "id" in dd,
              get: dd => dd.id,
              set: (dd, Jd) => {
                dd.id = Jd
              }
            },
            metadata: Zd
          }, Wd, Pd), (0, ad.h)(null, dd = {
            value: Jd
          }, pd, {
            kind: "class",
            name: Jd.name,
            metadata: Zd
          }, null, Nd), Jd = dd.value, Zd && Object.defineProperty(Jd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Zd
          }), (0, ad.i)(Jd, Nd)
        })(), Jd
      })(),
      yZ = (() => {
        let dd, Jd, kd, pd, Nd = [jP({
            ns: WZ,
            name: "base"
          })],
          Wd = [],
          Pd = [],
          Zd = [],
          gd = [],
          Cd = [];
        Jd = class {
          constructor(dd, Jd) {
            this.name = (0, ad.i)(this, Pd, void 0), this.displaycolor = ((0, ad.i)(this, Zd), (0, ad.i)(this, gd, void 0)), (0, ad.i)(this, Cd), this.name = dd, this.displaycolor = Jd
          }
        };
        return (0, ad.k)(Jd, "ThreeMfBase"), (() => {
          const Kd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          kd = [fP({
            name: "name"
          })], pd = [fP({
            name: "displaycolor"
          })], (0, ad.h)(null, null, kd, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: dd => "name" in dd,
              get: dd => dd.name,
              set: (dd, Jd) => {
                dd.name = Jd
              }
            },
            metadata: Kd
          }, Pd, Zd), (0, ad.h)(null, null, pd, {
            kind: "field",
            name: "displaycolor",
            static: !1,
            private: !1,
            access: {
              has: dd => "displaycolor" in dd,
              get: dd => dd.displaycolor,
              set: (dd, Jd) => {
                dd.displaycolor = Jd
              }
            },
            metadata: Kd
          }, gd, Cd), (0, ad.h)(null, dd = {
            value: Jd
          }, Nd, {
            kind: "class",
            name: Jd.name,
            metadata: Kd
          }, null, Wd), Jd = dd.value, Kd && Object.defineProperty(Jd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Kd
          }), (0, ad.i)(Jd, Wd)
        })(), Jd
      })(),
      DZ = (() => {
        let dd, Jd, kd = [jP({
            ns: WZ,
            name: "build"
          })],
          pd = [];
        Jd = class {
          constructor() {
            this.item = []
          }
        };
        return (0, ad.k)(Jd, "ThreeMfBuild"), (() => {
          const Nd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, ad.h)(null, dd = {
            value: Jd
          }, kd, {
            kind: "class",
            name: Jd.name,
            metadata: Nd
          }, null, pd), Jd = dd.value, Nd && Object.defineProperty(Jd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Nd
          }), (0, ad.i)(Jd, pd)
        })(), Jd
      })(),
      TZ = (() => {
        let dd, Jd, kd, pd, Nd, Wd = [jP({
            ns: WZ,
            name: "item"
          })],
          Pd = [],
          Zd = [],
          gd = [],
          Cd = [],
          Kd = [],
          od = [],
          ld = [];
        Jd = class {
          constructor(dd, Jd, kd) {
            this.objectid = (0, ad.i)(this, Zd, void 0), this.transform = ((0, ad.i)(this, gd), (0, ad.i)(this, Cd, void 0)), this.partnumber = ((0, ad.i)(this, Kd), (0, ad.i)(this, od, void 0)), this.metadatagroup = (0, ad.i)(this, ld), this.objectid = dd, this.transform = Jd, this.partnumber = kd
          }
        };
        return (0, ad.k)(Jd, "ThreeMfItem"), (() => {
          const Qd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          kd = [fP({
            name: "objectid"
          })], pd = [fP({
            name: "transform",
            formatter: sZ
          })], Nd = [fP({
            name: "partnumber"
          })], (0, ad.h)(null, null, kd, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: dd => "objectid" in dd,
              get: dd => dd.objectid,
              set: (dd, Jd) => {
                dd.objectid = Jd
              }
            },
            metadata: Qd
          }, Zd, gd), (0, ad.h)(null, null, pd, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: dd => "transform" in dd,
              get: dd => dd.transform,
              set: (dd, Jd) => {
                dd.transform = Jd
              }
            },
            metadata: Qd
          }, Cd, Kd), (0, ad.h)(null, null, Nd, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: dd => "partnumber" in dd,
              get: dd => dd.partnumber,
              set: (dd, Jd) => {
                dd.partnumber = Jd
              }
            },
            metadata: Qd
          }, od, ld), (0, ad.h)(null, dd = {
            value: Jd
          }, Wd, {
            kind: "class",
            name: Jd.name,
            metadata: Qd
          }, null, Pd), Jd = dd.value, Qd && Object.defineProperty(Jd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Qd
          }), (0, ad.i)(Jd, Pd)
        })(), Jd
      })();
    class EZ {
      constructor(dd, Jd) {
        this._object = new YZ(dd, Jd)
      }
      withName(dd) {
        return this._object.name = dd, this
      }
      withThumbnail(dd) {
        return this._object.thumbnail = dd, this
      }
      withProperty(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._object.pid = dd, this._object.id = Jd, this
      }
      build() {
        return this._object
      }
      reset(dd, Jd) {
        this._object = new YZ(dd, Jd)
      }
    }
    class cZ extends EZ {
      constructor(dd) {
        super(dd, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gZ.model), this._object.content = new fZ
      }
      withComponent(dd, Jd) {
        return this._object.content.component.push(new nZ(dd, Jd)), this
      }
    }
    class hZ extends EZ {
      constructor(dd) {
        super(dd, gZ.model)
      }
      withPostProcessHandlers(dd, Jd) {
        return this._vh = dd, this._th = Jd, this
      }
      withData(dd) {
        return this._object.content = this._buildMesh(dd), this
      }
      withMaterial(dd, Jd) {
        return this._object.pid = dd, this._object.pindex = Jd, this
      }
      _buildMesh(dd) {
        const Jd = this._buildVertices(dd.positions),
          kd = this._buildTriangle(dd.indices);
        return new mZ(Jd, kd)
      }
      _buildVertices(dd) {
        const Jd = new bZ;
        if (dd)
          for (let kd = 0; kd < dd.length;) {
            const pd = dd[kd++],
              Nd = dd[kd++],
              Wd = dd[kd++];
            let Pd = new SZ(pd, Nd, Wd);
            this._vh && (Pd = this._vh(Pd)), Jd.vertex.push(Pd)
          }
        return Jd
      }
      _buildTriangle(dd) {
        const Jd = new jZ;
        if (dd)
          for (let kd = 0; kd < dd.length;) {
            const pd = dd[kd++],
              Nd = dd[kd++],
              Wd = dd[kd++];
            let Pd = new XZ(pd, Nd, Wd);
            this._th && (Pd = this._th(Pd)), Jd.triangle.push(Pd)
          }
        return Jd
      }
    }
    class rZ {
      constructor(dd) {
        this._m = new UZ(dd)
      }
      withColor(dd, Jd) {
        this._m.base = this._m.base ?? [];
        let kd = this._m.base.find((Jd => Jd.name.toLowerCase() === dd.toLowerCase()));
        return kd ? (kd.displaycolor = this._rgbaToHex(Jd), this) : (kd = new yZ(dd, this._rgbaToHex(Jd)), this._m.base.push(kd), this)
      }
      build() {
        return this._m
      }
      _rgbaToHex(dd) {
        const Jd = dd => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(dd, 1 / 2.2)))),
          kd = Jd(dd.r).toString(16).padStart(2, "0").toUpperCase(),
          pd = Jd(dd.g).toString(16).padStart(2, "0").toUpperCase(),
          Nd = Jd(dd.b).toString(16).padStart(2, "0").toUpperCase();
        if ("number" === typeof dd.a) {
          return `#${kd}${pd}${Nd}${Math.round(Math.min(255,Math.max(0,255*dd.a))).toString(16).padStart(2,"0").toUpperCase()}`
        }
        return `#${kd}${pd}${Nd}`
      }
    }
    class uZ {
      constructor() {
        this._model = new iZ, this._objects = new Map
      }
      withMetaData(dd, Jd, kd, pd) {
        return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new aZ(dd, Jd, kd, pd)), this
      }
      withMaterial(dd) {
        return dd instanceof rZ && (dd = dd.build()), dd && (this._model.resources = this._model.resources ?? new FZ, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(dd)), this
      }
      withMesh(dd) {
        return dd instanceof hZ && (dd = dd.build()), this._model.resources = this._model.resources ?? new FZ, this._model.resources.object.push(dd), this
      }
      withComponents(dd) {
        return dd instanceof cZ && (dd = dd.build()), this._model.resources = this._model.resources ?? new FZ, this._model.resources.object.push(dd), this
      }
      withBuild(dd, Jd, kd) {
        return this._model.build = this._model.build ?? new DZ, this._model.build.item?.push(new TZ(dd, Jd, kd)), this
      }
      withUnit(dd) {
        return this._model.unit = dd, this
      }
      reset() {
        return this._model = new iZ, this._objects = new Map, this
      }
      build() {
        if (!this._model.resources?.object?.length) throw new Error("Invalid state: resources MUST be defined ");
        if (!this._model.build?.item?.length) throw new Error("Invalid state: Build MUST be defined ");
        return this._model
      }
    }
    uZ.KnownMetaSet = new Set(iZ.KnownMeta.map((dd => dd.toLowerCase())));
    class tZ {
      withContentType(dd) {
        this._cts || (this._cts = new IZ);
        const Jd = this._cts.items;
        return Jd.some((Jd => Jd.ext === dd.ext && Jd.ct === dd.ct)) || Jd.push(dd), this
      }
      withRelationship(dd) {
        this._rs || (this._rs = new vZ);
        const Jd = this._rs.items;
        return Jd.some((Jd => Jd.id === dd.id)) || Jd.push(dd), this.withContentType(new GZ("rels", oZ.Relationships)), this
      }
      withModel(dd) {
        return dd instanceof uZ && (dd = dd.build()), this._m = dd, this.withContentType(new GZ("model", oZ.Model)), this
      }
      build() {
        if (!this._m) throw new Error("Invalid state: you Must provide at least a model.");
        const dd = `${QZ}${LZ}`;
        if (!this._rs) {
          const Jd = `/${dd}`;
          this.withRelationship(new xZ("rel0", RZ.ThreeDimModel, Jd))
        }
        return new qZ(this._cts, this._rs, this._m)
      }
    }
    class VZ {
      constructor(dd) {
        this._o = dd
      }
      get options() {
        return this._o
      }
      async serializeAsync(dd) {
        const Jd = await this.ensureZipLibReadyAsync();
        if (!Jd) return;
        const kd = Jd.Zip,
          pd = Jd.ZipDeflate;
        if (!kd || !pd) throw new Error("fflate Zip / ZipDeflate not available");
        const Nd = function(dd, Jd, kd) {
          const Nd = new pd(Jd, {
            level: 6
          });
          dd.add(Nd);
          const Wd = function(dd) {
              return {
                push: (Jd, kd) => dd.push(Jd, kd)
              }
            }(Nd),
            Pd = new NZ(Wd),
            Zd = new kZ(Pd).dec("1.0", "UTF-8");
          new AP(Zd).serialize(kd), Pd.finish()
        };
        for (var Wd = arguments.length, Pd = new Array(Wd > 1 ? Wd - 1 : 0), Zd = 1; Zd < Wd; Zd++) Pd[Zd - 1] = arguments[Zd];
        const gd = this.toDocument(...Pd);
        if (!gd) return;
        const Cd = new kd(dd);
        Nd(Cd, eZ, gd.contentTypes), Nd(Cd, `${lZ}${OZ}`, gd.relationships), Nd(Cd, `${QZ}${LZ}`, gd.model), Cd.end()
      }
      toDocument() {
        const dd = (new uZ).withUnit(this._o?.unit ?? ZZ.millimeter);
        if (this.options.metadata)
          for (const Nd in this.options.metadata) dd.withMetaData(Nd, this.options.metadata[Nd]);
        for (var Jd = arguments.length, kd = new Array(Jd), pd = 0; pd < Jd; pd++) kd[pd] = arguments[pd];
        return (new tZ).withModel(this.toModel(dd, ...kd)).build()
      }
    }
    class zZ {
      static async SerializeToMemoryAsync(dd) {
        const Jd = new Array;
        let kd = 0;
        for (var pd = arguments.length, Nd = new Array(pd > 1 ? pd - 1 : 0), Wd = 1; Wd < pd; Wd++) Nd[Wd - 1] = arguments[Wd];
        if (await dd.serializeAsync((function(dd, pd, Nd) {
            Jd.push(pd), kd += pd.length
          }), ...Nd), !kd) return;
        const Pd = new Uint8Array(kd);
        let Zd = 0;
        for (const gd of Jd) Pd.set(gd, Zd), Zd += gd.length;
        return Pd
      }
    }
    class HZ {}
    HZ.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class wZ {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._from = dd, this._to = Jd, this._step = kd, this._i = dd
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
    class AZ extends VZ {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super({
          ...AZ.DefaultOptions,
          ...dd
        })
      }
      toModel(dd) {
        for (var Jd = arguments.length, kd = new Array(Jd > 1 ? Jd - 1 : 0), pd = 1; pd < Jd; pd++) kd[pd - 1] = arguments[pd];
        kd = kd.filter((dd => dd instanceof op.d || dd instanceof Qd.e));
        const Nd = new wZ,
          Wd = dd,
          Pd = new Map,
          Zd = this.options.exportInstances ? [] : null;
        for (let gd = 0; gd < kd.length; gd++) {
          const dd = kd[gd];
          if (dd instanceof Qd.e) {
            Zd?.push(dd);
            continue
          }
          const Jd = dd.name || `mesh${gd}`,
            pd = dd.getWorldMatrix(),
            Cd = this._handleBabylonTo3mfMatrixTransformToRef(pd, BZ.Zero()),
            Kd = dd.rG;
          if (void 0 === Kd) continue;
          const od = 1 == Kd.length;
          for (let kd = 0; kd < Kd.length; kd++) {
            const pd = Kd[kd],
              Zd = this._extractSubMesh(dd, pd);
            if (Zd) {
              const dd = od ? `${Jd}` : `${Jd}_${kd}`,
                gd = new hZ(Nd.next()).withData(Zd).withName(dd).build();
              Wd.withMesh(gd), Wd.withBuild(gd.id, Cd), Pd.set(pd, gd)
            }
          }
        }
        if (Zd && Zd.length) {
          const dd = this._groupBy(Zd, (dd => dd.RNd));
          for (const [Jd, kd] of Array.from(dd.entries()))
            if (kd && kd.length)
              for (let dd = 0; dd < kd.length; dd++) {
                const pd = kd[dd].getWorldMatrix(),
                  Nd = Jd.rG;
                for (let dd = 0; dd < Nd.length; dd++) {
                  const Jd = Nd[dd],
                    kd = Pd.get(Jd);
                  kd && Wd.withBuild(kd.id, this._handleBabylonTo3mfMatrixTransformToRef(pd, BZ.Zero()))
                }
              }
        }
        return Wd.build()
      }
      async ensureZipLibReadyAsync() {
        return this._fflateReadyPromise || (this._fflateReadyPromise = (async () => {
          const dd = globalThis;
          return dd.fflate || await Nd.Tools.LoadScriptAsync(HZ.FFLATEUrl), dd.fflate
        })()), await this._fflateReadyPromise
      }
      _extractSubMesh(dd, Jd) {
        const kd = dd.ipd();
        if (!kd) return;
        const pd = dd.getVerticesData(AZ._PositionKind);
        if (!pd) return;
        if (0 == Jd.indexStart && Jd.indexCount == kd.length) return {
          positions: pd,
          indices: kd
        };
        const Nd = Jd.indexStart,
          Wd = new Map,
          Pd = [],
          Zd = new Uint32Array(Jd.indexCount);
        for (let gd = 0; gd < Jd.indexCount; gd++) {
          const dd = kd[Nd + gd];
          let Jd = Wd.get(dd);
          if (void 0 === Jd) {
            Jd = Wd.size, Wd.set(dd, Jd);
            const kd = 3 * dd;
            Pd.push(pd[kd], pd[kd + 1], pd[kd + 2])
          }
          Zd[gd] = Jd
        }
        return {
          positions: new Float32Array(Pd),
          indices: Zd
        }
      }
      _groupBy(dd, Jd) {
        const kd = new Map;
        for (const pd of dd) {
          const dd = Jd(pd),
            Nd = kd.get(dd);
          Nd ? Nd.push(pd) : kd.set(dd, [pd])
        }
        return kd
      }
      _handleBabylonTo3mfMatrixTransformToRef(dd, Jd) {
        const kd = dd.multiplyToRef(AZ._R_BJS_TO_3MF, yd.b.Zero()).m;
        return Jd.values = [kd[0], kd[1], kd[2], kd[4], kd[5], kd[6], kd[8], kd[9], kd[10], kd[12], kd[13], kd[14]], Jd
      }
    }
    AZ.DefaultOptions = {
      unit: ZZ.meter,
      exportInstances: !1
    }, AZ._PositionKind = "position", AZ._R_BJS_TO_3MF = yd.b.RotationX(Math.PI / 2).multiply(yd.b.Scaling(1, -1, 1))
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);